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
    "44zs11gDRZSN3ByHFR13pM4UXa4eUvYDsHkvV3USwLqymUSHpQuG6D74cYNJXv6p79m2dNKSEgRYx11dcs7PDqgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5usz7YFQCJKr91wmeP1cqabfu1XjKuCVMnqoUgrJxjTXytbDYWv7KxwxvVRcp35mSge6Dz8i6LZimb42nNeyaqfB",
  "key1": "3kgiXZQ4osd59vnMbpLvMDANBpmbAQTuJ4uppL8ygis6kEUzj4MBSdwL63eHsnMBP74QvgXwfCnkCPV1dc7B7hHE",
  "key2": "jt1t3hHyp6c228U4E1LpsZirvPr9FkKJMoGUoFAbPr5i4EJ4SrahuQKmcybKAp7hhVhLsy2A2cboDjJaA7ZrNWe",
  "key3": "3yiK3tQvDAThJgLpB3NjgNKS8kNTCfy6oL3saUviX1N68SbrdzS4AuG7xeRbR7UXK2oGZBoh4GCt35ehqp4L8oMj",
  "key4": "5QjCgESEP17rHNk6UaPdj4RkoRZ8E9F47sWoVbf9nweqJdVBitpFYQnAkEuz36E2Nj9akHXhpWGwanFcMcSYZGmW",
  "key5": "wiD3XcUu1nqMmRvtS6BsdURooyLPqc8od7m2QdZAXV47GSg7w6vZnhHXtFsUHhZyCRXhWAgpwVMrZvBnK59HpAi",
  "key6": "5KpQRz5EkggZrKrzGfLB7mRJAe2QdveSTJzFiGxbU2udt5jmezXCtrxWcRo4zGiGkPGKqCCAFUs7qrUWedfZMjaW",
  "key7": "4BEVGy13JRVJUJSSJGwC8oteJxuPB3zmdSxo5itLmMegtMAVxJfFTaqQtdQmUnUEFzDjfsWaJYMkU5nukuorQMDW",
  "key8": "51YP94gmYt6u23vEt17WvHbEAdiCuN912wiGR34zPDgUz33DZyaBTxkvnUbNXZFZWTCZ1XSBMMmmx69Cr7Wg9Qv5",
  "key9": "57tCbj9bgJKUpfMFt98PKYMpjYxhZEuwvvPxHcqHsQCBhNm5y1xNVobp8nJjfKc72HZyHqAfnA9SuGc3ikix7zjb",
  "key10": "4pmg37UwQhJ5dYEH5wgBg9xXZLdwb9Vg62tRyUqnfgggc7hT8DQEUGsARiCsZTUvU2JTf4taZunfYqbhpfsrHEZ8",
  "key11": "4nptV48HShxne7yoYq9Z8BDkMzcvS3dRPvjz2jAvzFxTZdiDhP24LFLLAtFhyUC18QtyeUZgw3UUgjeh2wqcMEQh",
  "key12": "r4oj9FKijVNyaJdHsPGrgepGdgrwVmEDPK9GgFsFad7BjitdsCfDWHELzuG3W2XbiGujXXgK119BbgcTxLhWwbi",
  "key13": "53nkjjTYJ67gJdtE5ZwMJAeufQdyNiZTdzPC8Vo58eTVgUvc5e5UKxDSwY64kQgTzH421hhmEckg4YmSDxjsQKS1",
  "key14": "EoSzEYppswcYvhVbaX1TD9cDN59jNimuK5V9YBRDPfbdCcc41HdgLWo4G3c91SUfecMKmqnys83DYfnpLXSnRxr",
  "key15": "5ZrEhrBjmdeGc7BjtWoGgL9R3aHwc9pvDJZXSvSMZ91Tu8VqQcBFvYKpQFYRFA8Qd7faf53f11cYR1jf3pW9GWxQ",
  "key16": "26HFmjTjJsnmZvtZUogtVKkDTVjqnKWLMhEBc2bhsy12RJvsfiwHDTEJrtPxaqzTEdLZdWJapzSqur6Piu7co18U",
  "key17": "CpsfeABFbvxxS1WRXoHkT7xBm5dVWZXvr37pT3wZEmnuk62TMUrze22AZKFKpqmEWSVzZfi1uULQ7Hgw86yYtv3",
  "key18": "tfw7TB9t3qGvXPCZwPmcQVWszMmymJEowxwH353ibmmteVRyn3EUXTxC1MEgc6wri4MKxbRBjnsoR7YWv53pXXV",
  "key19": "jZnmLTok3DvYdZX1dCs3i5iCMDPTEC6KbeWHyuFVbXAMwU5huqcSqnJFzunFCdvny4kryLcdFN7QRADtSZMwg49",
  "key20": "AuELjogu4nwCqMDJJe5aGBrf4EzJni2LTPMGiwV6EkvpKVNcCRNW5cfRq12XnkjJZm1dMy1n48Cy6x5xaL41oQn",
  "key21": "3AbC8E8fM5yVGHchGDV3VVLs8pihZbZenaamEmeJxjwE2Y8zuhWzpAxNaVunQyEnTvJ6h7rAMQpuXpBXdZDo7RGW",
  "key22": "3TLJwf81fHRYwFvwyd8drLGn6GwZzxTsx3p95bDJiDF8CG3qEVF9ANSLT3cZXWvp8fFNCuVosmbHbc8BcxAZeWmJ",
  "key23": "3r1K6qL5MxHoUWa6z6qBXm8jTev95yBJuSC58ThNhijPxmAD2TL2iTWe1WrwKXD8jgeiRmJp7sFMAr7Q4yknYyo5",
  "key24": "3UXZzoTDybAYTGUZbVoDLBYBExVcGKzyfpRJQGgr9MNzSBmoBeLzoPoKUQnjMZEBFGwkrHpfPk7u2BiaocAnARE3",
  "key25": "4JuzEw6Ax6YpbvgcRReXDgb5DW47rW65vVZNNTf72m4Gv3MMF4tZtB6Zk3hrhBw8pnWV9kVZaXwhesM17eEVLxE7",
  "key26": "4LuziQnDfhQnrBDedVQY3WdfPnxc9RzXHP2SLG5QBybmHXeccgQ21mEW2doAHrHA4owLrEXyNq8428u8bGZFdTim",
  "key27": "4q57ubimLFvz2KFsCiVQz1mJgzubpJRFsAp1Gp5JTLuTyUGvudtFu19WRVK3QrYZdve95A4YjdvWjEu4TeJbHZC8",
  "key28": "21tH27FzNdPnConcdDVeqsJkn9zunkfZurX9AXL6Fkzy7Dek5b8Z8hc9CEAryLNhWkfRZRkYF7c34bNBvyrdzX91",
  "key29": "MNbJP5czqhqmxVsywapFxWffwkXK4u8bn6a7R9qJfzcjinVgUKQ13vuremJ7YPWh2NCwUyFrfw2wS6vnuTJakd5",
  "key30": "6641uvSbay1XS7FhWenqA5Rd7cgJn2Xo9VyAYjZ21F3DX1Xers6ymD94WUaqL4BByH9ksmzVm5FvydZ2WQvtamQs",
  "key31": "2T33VXDHAqjJbL1GPygwjnC1cbCB2P5LVvHDSKcrVEKbnrFXoFz4VagQkd8GL3tEuDzC2x9QSPFnLRywbi4AKrZH",
  "key32": "665Y3CvuWuftsEtyeVf57HZ95XaCeix6tozCZJkD2FVTM4zBG35T8XB7cKF3G1tEDJtC1hTc8YRKYNDGbxgQmSkB",
  "key33": "4UvnuJdAv8HuLphgxLQW3DMmMR7gPf2LS7m7j3Pp9tHYUaVmgdFRgGb5VLBtkkK2H6CuEvxrFHk4P1YeieSedHZ2",
  "key34": "3W61uwnBT3mxyaL3xjq4FFMzCEPBxLnTBkSENv5DFTpBe6x5WhoFgHRK96h6VqW95GT378JTHAzbD5amR7ifXDmH",
  "key35": "LwEu8CY3EB6D1UXZkHkMTrYLvhbG7g8JVAToHUHZZmB3CJXzWhHoCVN8a6DbA28ti9cdPMndJ6Hoj4wwgsxmPuD",
  "key36": "vknqAgos8VZ7sG1X9MQBdZqzoWC4rahZqYGnk6aXSxyvTmAnhtTtGRHzUipMyxyimafpVRxwR7p4vVBo7PVduLj",
  "key37": "23hwyFCvfLq8VjjaM6fd2PxxjD7wzpve6PKPtCYkLpLj4ysqQpDGPVH1hhUBrvC7TPWBPcXiF89wnsVLhMSoPCJk",
  "key38": "5CVTS51pBwgdxNc33VN6q5wkPPvdmpdMawDFhsRJW9iWJJnXC6m5oA6J2Cf7ZqUx3jkwvH4Jvva7zpkZrZw4FkGD",
  "key39": "3u3439srWrCAX3nLHN5puFNTaVjcZ6pp2apfQyaPstmqiduoYWG5nU3WYYpYvezPAgFqJKWnQ4adApQciDezmuev",
  "key40": "JFV6jGFCUwsRXcn2iMTPz3grBBwEcMAoyrn8ZFSKkRxnxWdg7oy6DyFXr1oRFUzBJv4Pk4NSn6bE1KjFiomeALx",
  "key41": "2atqm6hQCg153pxRpXe8iadcDv7mxUG3ogQUuPsNpP8yxYFDhXZcxZ354uuUry2hfCRZ2kaeiuTgGUJWheujD9aN",
  "key42": "2c5a6Z4QzsKtBPHDYGN2bPvG9wFsCrCz2AQCRPNrkZiaUfMaRi2QLGa9mKpxNWXreDB7UfxBaMR8U1SfT5Yxu4hF",
  "key43": "4QBRJQ2G9SSJyvx6rzjMBKd1mLNNvU9UkGpcRTAriDTwD9STgAhqw9qmj4vFMMf4ehxULyENfoVMLaMp3yq5MMxz",
  "key44": "53LXK62ognRXN1FuvQceB6V8u6LBsjVNeb4U5zYZ8yLxa66gDH6HmTEm2YshPNXbnHRNoK11YrR4QSZ3w5i2z427",
  "key45": "3d1BziBWiqwHrA3Q48fx5suP4T5ZkcY2rWR3Cyk1LZR6N3awLKvdPVz8fHYoSwZYDVeYzemuhqfNudq6qHi5B8MQ",
  "key46": "3bkKAojzkkYxEwU6m6QyH5rxtzQJo7oo5fcg6WrbrqjwXVXCV1adTuu37CWFYhEWsWZQjnQVg1ztGnUPivmGr5pT",
  "key47": "2C6662Ys9cN329VyLMEHNkN1AG9SMMrwnuZCtdqep9t7AyGqtHWaHRL3hEj7NjhShz63mCiuZrtJaRxSoF9UHYPa",
  "key48": "5NUFp59JRLXYB6hrkQ52WUJ66ivy8SdgoyfKQS2FRVpEo6AxnPz4i6iUHNTM8A75dYCRDvq7Aqmz17h97BLH62Gm",
  "key49": "4cLKyWEJh9RvH4RC73LYZCBdX48Va6CyaP2ouM8w4vZkPbYCEDm2rrj3tjnkJq5xiftXy7sVGSR3PWuxNbVkCrvh"
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
