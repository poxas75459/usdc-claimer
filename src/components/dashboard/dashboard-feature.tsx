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
    "58V4HAMFCCcAWWSx84bSwToa1Uapew6Nw8RrVDjCQ4AgTNRZqYK8txKB8TWQryRFqUexDAn7g37ZK6DfZdMGeVKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ByRPyK7WHi3R9FbKXSps72RN3ZupDSHCRb6za1sJnbnVWfM9TnksVa9VxmFh862J8wV2FMuNqc5mTKBjqcydsRH",
  "key1": "4CZXMQkq2AAz1wULcXMEGuhy6XAjnqyyXv73Yk7Nn3sPw7Hhs7wkKWu1SPCfrkSvtAndRVpGLY8z3znSZvGCVA1N",
  "key2": "4Lfr5nvFieaWW75BHfthGX2TcLZmYxciQX1trvfg2YUoeEU9bBtecNkygo7BC6sH1AASMt1WnCZpfCTfBmkAepUF",
  "key3": "3jvDHtrtVoCuhab86MEA7MYYdJyryfau6t2rqa5PRMCrrELNvnKdxJKGjwZKVyqdHw4Hhq3t38hfUHKB4ZhfTVae",
  "key4": "CC9d3A6qrF6BB8wg3fKKJuSmMbq5ndWbEBcjGLFvhrbWAHfajMVtJ8Cx7pFtHFBf2SgmGHi6QUmeSXL1GDmhWxC",
  "key5": "3T1zUEnGuBMVZaTCjF82mfiQmGqwFSdtLnUqHY6oquH68SWnZ6uhM4Y9F6pwiF2Njt8sHJf7cSSK6BEgsMds4akp",
  "key6": "5LFLujANTQtAFNpgcfmsApCh21DcmXWEgeYg4fQYVFUU4uQMdNmbKyTTkbYR9gxckF5gat8ZN3LwqVrzEi7GyW8V",
  "key7": "3c5q5TLCFqvpJCZQxwcbcKdJ6S6KPiVjuimzRV4QKJSXNGZEmViaZZEBVrzhtM2wQKdaPkqbjVsiSDqFYd3JPzUV",
  "key8": "uq7eDfUkY8bEo7vkEXrFLFcav9Pt8dbpA8ruzU37yXgdddoD41bhMxhDzQedA89UKVvW7sdxDfFWYhgAuXF4cXH",
  "key9": "4fa1xM3LUF4wzyXBr188mHuoKCrbLZ2W34H3yqt6HCn86T9GiGpPARpyoFktE67sHxPaaCUhUbyMrFPbE6PCMETX",
  "key10": "4zLcmXX7THFJfHXCfE25mrQikHCxzPdRch2WU2wNu5dzjmzzrt4tKCLeUxr9rA8RHqQKZCGgnSrHgfKaD3ArYo5R",
  "key11": "3SrReNnYmfsLUac421kSvL11rsghFjmsDmk9bnBCS66WnHR1mmdipy5ULnuw7Zb1dQppEFALZF4m2Q6frA6j7hsi",
  "key12": "26wTZqN5nd2huLSs6HDznfNC7gkEbr7j3Awjb9uzc14asq7qNkZgiGGz3N7FhqeQwgNBCQPmDb5LWkAMoR9K2AwK",
  "key13": "2WfNCjT6t7WrjwNsMVb3WtftsoyjkNNoAesARzYy3WGC2ncCTeSYrsWjXv9AzNTpfqNzttutqzC9WitgLUym8GEt",
  "key14": "5bmfFrfdGsbsxKDKYVHTpExuuYat14o5cG3rVoX4o6Kogo1qQ6uAURG7kNw1tHeok5UkMLyes89e5f7FrRTgNeoM",
  "key15": "5DiRcE99z71utFnVS928JaLdgeRkaZ44YwJxZJHXoqMdGjCC1jjruocbBDjoo2wLUXyZzmi9MLWnKVjrx3V4GQkA",
  "key16": "4ABYPsx8axAGWguA9q9dUinETYkKzabbFwC2KRgsZhsx7Cu7p4Gcii4CJq7f1N4fZtjxtsq3EX2nX1sEzgRjXvD3",
  "key17": "5hjzp8RWM5Yn8vuejC1LZsxt7ou7Gmh2ew5gfBE95xvGPQjCYTTVeEHoepHjdUTH1hMsSbgB7vnZTJzthXdd3di1",
  "key18": "w3jKbpiRKkpU3B4c2rp2CkZk1tsNEZGKJupgt6safNs862JyRLMyqhUud9rgMDkGUefmNL6TdU4nZkGxFByaR2o",
  "key19": "31vC4XrXENxxZwVhmC2zZLRTCto2aq1Hyw48cZbRU99ToiGUVt3nyKv1FGCp638yREdSncDZjNQt9f55ceTQkAaD",
  "key20": "2ApJwA9WTJqTR9LaYUgNhkm32wHi2t9bsfWVw43skav3XYatGJ96YXFBpdqs8RwRsAChYqKH1x5qVDQ36uP7PRVi",
  "key21": "FU5hMyxZTJ62SYvDwMj2CZtmmvdFFpNAmzn5a14xyvaXowA2H1wxYW75citEzneTKUtAP2vRBkwaWk22YCRiXVi",
  "key22": "3EEG3p2DyxC6umGefWCXbkktvPKoyeuqxZmzfDWsxjtgRf7s44Xt3UUrYNh4CkQPyrLUoT8E8SSsUXLBzQM5GRTY",
  "key23": "4reuwpsShrakBLykH6Zn3dVwEJMEwoT6RCkkfAdaYWVmur7TDsGrToucZaHZFpDFxypV18KUjBrTjJCR3KJazij8",
  "key24": "3f3xzYy9czdAGTY8FNSwt13b5ZZcZkpyEv6vfToybwSmUjQfCwdQhixi3Nks5upMSEttqqdnCMo8hfJgZsgKHaoo",
  "key25": "5G3EVeXK8VKTTD9YSWeaERZBpzDqbNBXKhLZN4zcbeiSAThGHdrUm2E4bzXMfJqDKyoSWWKTskjxKLjVogpNrn7U",
  "key26": "3HTRVaoqrAP89ji4V28ufjcMWB1EaaCQPCHAyfz1jMQgYPw8BpD1aPRZvwp4LFfS5hRiBzetrkWsJzSkgufocuSX",
  "key27": "2kEZmjtGmgSu33GiqrXm1cDmQ5oHiLx6eqY3cpkjXT7iXkuvBApDRFL8hGxJMo6nmE9eyo8u6oxneJGe9meNAXmB",
  "key28": "3jasqkdiGTwmFANo3oNnQ9SLH1xLLRZR9hymHZkUs2hmfCs2jhmHyfXHVYYgfveUT5aW1MmENnMzj1AAN9mDMVpD",
  "key29": "7b8d28GjjBZsSheY6ZZwfg1S4f2VPq8wpjRh7P5mBS5CimbySPiUzWXEBXXCyCFcBiH8wkQDucKvaQaiHGFpD1P",
  "key30": "5wkGgMVHL4YT5LNaTMRBP9kKowVXhvFkd4NYc44KiS89oqFm1Wu5k2WUcpHxj5tiijvVJKHj1CYCkgGKYgMLTwCj",
  "key31": "2fToMAewtLemhkMYvD5zTmmF5iH3m576oTqtp8Ns6ZcucC5r5DKfbes5TwNBoon92gaZ1MamSvDJGGcZQELTf7eb",
  "key32": "22nTvuv7ThuST61hrmXkj1MTEmfD7PwSbPy8JyiGeKYJ45SYWR5rBN3jwZRUy3LXbmZYuhFiehkwoLxM2b97M7Mx",
  "key33": "42jeJvhJFLGEXJFkAweJCpgbdsVqWNagg57HqEMnXCmBZbSaozhNSs5iKDwwhRZ91KUbw4EnSLvEoMi2nTC3FXTP",
  "key34": "3feEMPz2pgWHW8PXxG5P34Bwyn7bweSjBwhH15i5gZg3Te4Zt6dtVBZkK1MUETR4RT8dc1RC91CxzWU4Z2Ca9pYL",
  "key35": "2jxVvc3MMEsQyTiwitZZR4fQdmiaec9N86iZvLEzLgs4WVYLdrQXQSBiiQ4ZKczJzp24nNsHvvrCQKcFjb7x7AnW",
  "key36": "66KUU17arM2V4ikYXXjAcmiFWufhw1HQd9wigiqxrTxfArW1JYJvjpc8UyiaYWcTBCa2qp5CWnEYWvF8TxC6kE1A",
  "key37": "5975jEvuwGSYuxZqWU2DEfDqBY4Qqz67MvLdAyFeGsEG1kpKynycw2V2dqHkmFfbzJfoQpV6SSozBBpMERzUTWGZ",
  "key38": "28jVeJ1L4apkiANQg8dqvf2odDWr4qqpsQZhKLLYFs3ApKqrVb22e7a2da2cHSoLt6yW5KeEfybJ83UwbfgPoJSF",
  "key39": "RydTnYFRqb1omohrhVBbn3UmHD6XtmQ9Sz3iiAwR3HhhvT4ARfJYzcvrCsuhnoESFRuJNDitmHjw82vEpxxh9Rw"
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
