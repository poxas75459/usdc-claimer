/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3fP3sCVnFzka1EAiUHVftUZAaMbpdaqr88KLYeeF1M3op88U1W6qS518kXVUtZjPNKkzKHEvF2DNhRs5FCazfKQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cCQR5hAvfamSVYFx4DEaVZpjorKNkkfURjfvG4mRGXEBwj4zdVxxhfd9DYjx8iizvNRmoPBjmmYPQYHDoxS1kZ3",
  "key1": "4SLTZeG34wyBZbPbKFz1QWvp9AHzeXXdgU2aEY6Aab1Q4eJBHBEfp2WswH61joor5DG4dseCpRDhyApZmdFZENR5",
  "key2": "498NWfQ1SMQ9FT3QyGHfK6Qbkg9RsE76ZAhddNoMHKeDZhoRKctS5Nt4xQ7deF2mSjfS1TukiPs8oJKWPUHayB2b",
  "key3": "5Qzv5quEjJC9kpZPjpTBU86b7riPoUJHc63Fi7zmBZAnerZAusbe7Erh6yxZLGt47njBVYWjmJM1QemFgAi3nvB9",
  "key4": "wq65Cyj7BCor2kiKiWQGC7cGeEAZLf4EqeHxCPsq13pzXuY9mS7KmhJoWm1QvD12mSXRhc53Sciuqa1drNm5Jz2",
  "key5": "5bNbZWAvxKDfAnEyZsPPkk1gQ4g58m8RGSXuake8SzoS3Lnqd8mTgcJn6ivWHVXvATVGagsNp1ie5m3AY8tzhvZZ",
  "key6": "58FEc1yLCGLB1UmKum36GSwpm8TKkSAp1Hc3qLZJfxKAD7trddEqjwFPiyEvmPCoLej3SHwiEsptyB9anZ4KmVN2",
  "key7": "5XARKRViguRAAztp1K8UogkSBpP6Paj6cFw5Sg592mUepJrTruwWRaRfW7TTVtKNi2FwRKmgBvL6fjcghe67kYLQ",
  "key8": "44XK2vRhcjaF1x9UtigZ2D7hVsbrqQoca6ymfrHBWm9gNDU5evu3ezBhzQ4hV2vkqHSiqCcLcpDZHHqiK8gQSkq4",
  "key9": "5L1nY9Y4MpubWwVA7hRRRfQVxJjvKVz5i7Mu38wbjFp5dDc8nEt2qvKBcXUacx4ULnPSAqfnFuk4HS1Y4sTFBmLQ",
  "key10": "g5yJhcxB7qV3KhCSkaNSrBJUNFn98JXo45EA1bjKuG4boJz9cqzqxeV7GnL9WmzstBL7pwdErdg9sjB8wZi3oKa",
  "key11": "oXoq6oBkp3UVcQzZFg4S8CrR6vABucYdW9Wh1bqWzjousWDPP9PkTVavzJ36fQWyAvs2VVppThvkoZG1xnwHijf",
  "key12": "sonEobQHEPDfo7tbJWeicg3yU7SuxDSixuJjwofAB8u1MymzUvKj21wNL1dPQWdsiidV3azRXAofB8TPwE6z5XK",
  "key13": "cstAUeaKEeQtBBkJSDE1rSCJi4RzGTVhiCA88QA97VBX54gSzYq88UNeAeRdm45gYpQ5epGJTsqk3tGaGg5pmAP",
  "key14": "4Gz5Xs1gYgfW3PsEbuTMC1oxQ14JXPBwRiNa1XA5suo4k9Nw88fnPNYjB5rgt3oXnWgyWr4WtBNAHZoyoEuaPLjc",
  "key15": "52MHyrdY5PRHMr9oGSX84CQrE6SSNVNShzkquvVvGtSqqQGZzsmHoohBiYCVuxGSLsyR8dMwxTE5kaRq9DTX2u7y",
  "key16": "44gQysb8rbrGJ1UkAvvvaDcdQUaDRSk7aGCWsPbG8UQaoYrUdKTZ8aWDYzHfb5daR5A5yye4aLWtaVvgzschMoaX",
  "key17": "p9KiUmLD8aRExE1wbCFu9rUAnSdvap4zcPp9E7g85KrXH5AhEdLsPYToNmxdAc6jjrrVn9whx1qu3EGGU63faSZ",
  "key18": "3PSdk141au3A4RNKrgTv95Gm1agcGxDJEefAWxcbwLaqqpcjCBXifSbrAM555Xu5f376F7qRuVLt1VxbxgBMj7qz",
  "key19": "8gCAwv8x6khjDFvWU6VfhvrvuS2RsnXJbSSzCGvw6vjryh9QN8pij6EXFpVxZLYnM1gdgXdy3rGpSA3d6FD3PPz",
  "key20": "2LMeao57o6tDVojuv2DCtdCPSP2B4GfVnyHku1UWrDW527pkA8iZ8y439d8eTXT76f7AuxhtkbLmyUyE693sshqp",
  "key21": "62o2ex9EeqPPrfQ4SYDcWaVG2Zb8dF7kV4a7Esj1N9gRLQvkH3yFvuqg6G5foTpcr9T1PExopQwsAvBCB6YK8tDV",
  "key22": "5wbEWARhjcwQGefXxR5JwWad4NbBmNZZxtxFotobVHemiYv3se4WNfMCaqCmGjGLaoC3bPudeqdNEAJsWvQ6yKAV",
  "key23": "2U9TeW2f2EJxsX6vg1XjSEAiyAoY5hqFRxvYgoenYbBAK7XNjaGMiSC96KofKJPxhXFr715WvS46BFwpu2fjDkUi",
  "key24": "4aanovft6pTMnGoiGZLC13DuSr1FexaKfvsoJagh1D847MdYWz2VbuMvZqq8bc4Pr5Gw9WDhCpZ9ZEfEmvWDW8rQ",
  "key25": "5UyEc7W9AVru3gSjEfwYgH6KDhGPrqk9L3c81hLPZTHCTqwUt5NR3qjvqTZsR58YSGkc9Xs6PJJN4aVv2nFTu2w7",
  "key26": "2BQkxEDqitshc263xZydWA54K8ELXsCvpuKqAcZj5B3BhkVYBBD9N8zBrbjCEkah5bdt5WLYtjWwHJ4zvXC4J67V",
  "key27": "KrpXiFRye87tKVmKJF56o2vvz7SeMnLodcUF2zjzVPPqBZuR7dRr8wMet5BmEAbJA8Sz5bc2JwRBr8jAonz72Yp",
  "key28": "5NKTRZFRi3q5ZwpP7pFsvLa3z6FbQmkzbSdezJF2ti2sX7RyqStsbmFz3HKZefGxApFhbh8tvYhutPq6Epn6vYJY",
  "key29": "2cqyz9BjXGWx6MQK4Pec1fhAHkBy8pbp7GzyoZimJhk97nodguf67oW2iDbYBXbkYSFBTB4xbKjJmGGBJBMYaMQH",
  "key30": "A6Ef9ATmywPMdi1VtAyKfV8EmumBp9FAx8JyADS7xGWBXxio23hpSroKSNVvgwxhnGcN15s7nrM3DfqZD1eRd3q",
  "key31": "aqE8yui6YFv5NmriHRWtsZ9dntoAztdFr3iidNurGKz4ZbNUypHwKQrECRqZP1s88fXK8Dt7HDZbAxG7zFnzDFW",
  "key32": "hSeqREF1FQKta6LxrjwxRZm482vZ6ivRBW4B5VjrQm9CnFDjaZvmGEGmoW2BL9a4QToPwLWzxRci58aqwkC7Nw7",
  "key33": "4P4sirQb7XigVFGZJGT7szethx6KgAkGFEP1qFFrg4zLX3ETZssGcC8AfhxE4aSmnXB4mgJDG6mG2wRZpHWbLFBK",
  "key34": "5kgMJssevkuNUUnSbpxsbpCac13ZZWzUTcUWh6uofg3b2zXHBfHpcv2oHJza6Gvvh5AUZKp5RqSVs45NF2t1YK9c",
  "key35": "2QSygJymCp8q6QcHWh43ckxPGPPoqSyx3qBit4pnoJYs8WjbArkofaBnPJhK925xWdgkAZ84BZYrq9jFPtkwvnA5",
  "key36": "4X1yqbVPzo5CcLWsKvNes5SdeNDks3heVzdoBhoTpiNNTYijhvyVZrGVzJ8SqqRqHszZ1V8pWwgZBwPEcAkggFvL"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
