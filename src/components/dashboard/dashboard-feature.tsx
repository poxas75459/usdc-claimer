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
    "4F3TiWZPizFhHYfztm7dD32NrhKijw4DSXq6QQeq4WcahkhRLZH8RGRkYjUJZabt6AL1UjU56Z426HbjxWMYRuJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35qfDvcGz1XcbYm7dFcTgc2W2sJfTMWfv4CA8DUibDx1AQpJZYDZQfCJ2SiRDbuMSWndGPTEHL2pVB4Y3rQGDuSG",
  "key1": "3LnbBineXfRyvj88TnaJhZCCmMDsNVEed36C2XQkvLdRzDEV1mNrjbX6rN6q8jam6rDggwxL2tjqUZ69rPyrZqUp",
  "key2": "4sJACDWi2mFyRzDMaXEriUSiTEJhxyZA5pWBvXcg9hb6CocjBuqybLu1sw7cAeh83jJ2DjftPmLevcCZtb19Py7g",
  "key3": "5aHhtL1xeXqE9EctLn5bvmsaKAJZ3oqwCtbrajcCDDFdeischpjoqr5yXGyycLDzEwiKRzAM98cvAet25SVzPmr6",
  "key4": "ZptnsYC1pRFj6jMPjHwmcqkeF1nthVpTvXsLeFfWNKpQrpatkaYeYQ4qGmjZyr3feWDirGVgVDUUqziSdpUZyRV",
  "key5": "2GoaG3TAcw16ANiSAX83Chua8ja83cg5TXcGwuw9ThFdqerUXkGbdPY8nhf7yYJoZdo8imuLfidB21jmxtrqSEjN",
  "key6": "2LCnxG2YE38EcriqhVzVrSiPw7vPJV2yarvdNgjYgEPgoSKRGpNV9VxA9k64KfkxmBXdndFPcN18QyWvaja7uPnY",
  "key7": "5qsNwGyGBchC3nKcezEv98pMorBVCgbcXsMQp5SirXSsR8CXGv6fuLCHXsEHgUQEstiKPf2fz3Nu1qb4HXqgYt31",
  "key8": "88EhFKozaEagEsagXqNYbbZsF3ZuxYVMVvU8M6pdEUjDy7kXyYAuPr4mpSLLF5JTGUFmKaALDbywVR63ksYZjxx",
  "key9": "2EtycNdp6xoAshVPgAcVUR4FTDuLM5DtXoggsoMZrmSZjTZfxT51dzdAHtBHuERdFCrojuERsPucPsmCjfagkATe",
  "key10": "2iEmjy1exAyMw8Sc3ZWpfz2MU2o49DgiH25MQczJqTXUUACXU4yit5ys2mqVztBVDsAKF4L5y97y5wCAJNsNLpyC",
  "key11": "4wvGzPAAA94Fgy3bCcouR6FmGNad5GbsbxrZe8GE3jpr4QDdgA5JCVyovq7pr8WkFhw7xZPNMPAvYLpZdxnBa5xP",
  "key12": "22nbqESSf8AYzz3YvrXWMf9LcPyH2FaksByo5SsqNv8K2GqPGBHEGrWzRpA1dvrTaERmnzw3U9FqaFDR2U3pccfp",
  "key13": "278PyXJ7mpazcRnXtEvxCYs9wRzWMX6b4jso9CdnB2kFAXuddjM3CiaZMEXArXE6RofmUbMRDc6GJDqak9eS4oZD",
  "key14": "3PFp6kY4hbhWNwoGGhudH78a4WcjpRe9kKX83Zy1cdtM3hXKcJj65VGDRYHJneSJHarwVvMVYLr9Lqf72GdznZZh",
  "key15": "2M6CtSCJo8TRpmbVM83Xbe1BjS8n2H99AaDd3FgxZ4Hw8C1uymYAC8oDVXFzUXPxmbqL15sTaaeWPp6wSjcnHrSE",
  "key16": "5uu6XLqCPWUg3pmaFTyJe1fnSXdYfRGmDPEwEA2sR7opDsZWwSQ1Ko262mmJabxptAKi3QNoPrU376P19Ydk55So",
  "key17": "51DdispgAASGjSCvkcdbbiJ31Wz8QWEBd5QfkxA9aJdDJzqBN5ptGN1AuZqBdBUsfqCK7bpFT5XrgYshMdJb7enA",
  "key18": "4kdz9qfn2pcKf7fPpzkRyeaQaFvHC3JdHFSfDSUN8Wyqkp7a3Sn2zomrs25qiskCaL7bJupm6Gghz5CVZitWQbeh",
  "key19": "2MoC7mguvjf24gkXH8VkE5YYRAQzq9ZmNmRdHj76nFqQbj7jRdWD4AaaNmA7xhmZY4KikumTBijxJgaakRCHzBxe",
  "key20": "4Yh7fXvnAXZq4ixkiPaK89CCUc6DeV3YMVmuR3i25hDUxvgMtyNNtAJ27zqMB3VK4tH2W3FwmC7EqpejXMWyRroc",
  "key21": "KuJwmt1U6SdPMjaMgMvA8qGxUzzNDo2Ee26cKWBKoMw8LxTYHWaL1PT8oxwPevZw3Cv8sLZBqcKfvqZYK6Ps6pa",
  "key22": "22B6D75BubBr148cVBwtbzGWoLSscVzramrzGKR7r66iggvHkwa4bzZcH9u19sdwsARTpFToefvFNU6JH52R4h4d",
  "key23": "6F5eY95kLEaQzYQz1XN2aoYoctxYifpc4GhY7s9g8kvCzTe1ssX8uA32NAThf5YnXUBUwJS5vuzLYCCH7CbMCU1",
  "key24": "52JKWPya5DeZwNF3eYZc82x6bXPaQDVj9XPCBcH2TFYUXEhrigCANRFf3me1c1eSf8xwCnJrkRYDeuKHVDVhr3XN",
  "key25": "4ncvHKupr57wmKBX66rnuDQ246N3xe7uB5aEaTE1kZdQbbuwKr8d85U8JjQucz3choRsEeYcmBAhfZrUCUN1xfqp",
  "key26": "5FCQX8muU783Qa5iHfSQsquYQqunvyPGNCxvfKQDgNTVBHiwXjqqwYmy85qQxWVmSB3QXuNZQS8iLnKNgKcKL4je",
  "key27": "2wh8JNSjekVLPeSbCpVB9m3kXJEjrXV5JJ1jPmYopDHj91XMZyn1pKuQ9WTf3mdY1gV9uRjHpoVmMUwTUdqFQ5o8",
  "key28": "SiaZ7tqcCcSVGHNXJdQrMYrXUyGCu5btWyc5Zu6LvcSqBAqNY2vqQ39Za5GBvCZKem3sVwrkzMso5dE7FEAWEoa",
  "key29": "4ARyq7DQF5p1kzbqn2szn8z64oFSMpYCbm9E7utuUtD5gwWE9uVBqfCwaJAjrr3jEsxZLyzgoLDcEkxJMwiSSvuC"
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
