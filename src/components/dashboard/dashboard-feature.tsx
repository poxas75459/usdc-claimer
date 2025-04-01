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
    "51ogdpc9tiuZLjzCKeEBWAhdvk9kz58WjTRJuxqo9Uony3A8f2zzx1yXBfYByoDs8XNwdWffvdUJkE3kiz7qyRm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35EKJzQxLrmPWpuo4LrfjDK9YHwK4uURgKU1ikoB1dXwqanzFajJFXRoiZAE62MGUwB94VvsiU2FMMhBxZQHgXmH",
  "key1": "3QvJNvYQynKxnvm6NE7bdb8Ur6fP3F7CBtaD82oPYXohKhiKUca1gCdzsadMtUc8XJ5eQHmK5YsARKn8DpSmgV8x",
  "key2": "2k6SHDebSCKb3f54KXKbuyuda4TKpwcLpC6jqehDCdoevW4J36Dz5yJFVmwhtsfUhBPNj9HHAraBNNAWK2aFKojR",
  "key3": "xfYLBbx6WnZmd57yq1jA3RsLfeAdGy7HpMYhBRAdaY5kuQ7bnY178b7onscxZjNKVRkQoBLSMK56jKhvE8LqSWK",
  "key4": "3F1gK1iEpmyNYg1eJPi8hZvouJh99f1dNEk5GMjmu7JXJ5PTRnktaPDCFitEMhRsFbSKgnsPLiDf7ZaPSJaYFaG4",
  "key5": "4RNfw9tv4B8ndya1JbZkTpUKMSUihpkQRn6mxCZWrnzXzMyGPRa6X7zSM3mGLoEJN3J1G7k7UihUk6fAP7JruFVE",
  "key6": "49PYgrPBWjHXCroZdtXN95ZDpiTNgR8HgSZ9RwjxmvPs7sbnXLmM4a6w6fsuYUcGzp9zJ6gccGD5BwwTjhDg1Da4",
  "key7": "43dJf4DXSHnCKtzkj9LRP2Fu2wkyrgSqzgzkujpYAGXafMopiBfSMWuD2PtjQjHzhmiZePvMGMRnDWCB6s1bUDc5",
  "key8": "z8DmpwKw27CaHw57XJMYg7RuRbqkFMWu9zpkAuvAh8cSmnpkgd7bUq7EL2bhoJykSDLhMNWXZ5EddJYWBY1L9Jo",
  "key9": "61BdcMFzEe7t7tvT7DCcvSVTGVNTfhbem79r4oVuWQQRrc3rUWrDE4T7TDq74cmRhKvihjKa1Y7SHrCp3UQKXH4b",
  "key10": "2rHSsZMXaGfyaVd46bbHbv1xuvnfUS4drCyNtqrJsDUJo3BMpinySU4ZXrk75ZyGkF6GrDfs8pFcyY6Zfn4Rip3C",
  "key11": "5z5v9cq1HC6K3EHtXnoVecSz4VfzX6a3BLJzZC6Nequ9YzrswUGp8JsuVHstgwGm9ZXrjy6BZWaRq2qN483Hgc29",
  "key12": "3W7YDZWcGTHDafGtykUQXfDNH61XX7dfMJ8C72hSTrGtFtu5TbrMQL4AZBd8DJ6V4Q2uX8KtSJP19dSLm1xP2HQd",
  "key13": "4gEux7LgwBQz9rShPgcqhn15dW5Eth3MtMcD9mTmfnbNJKUcD2WG5rwSZpZmjuupxNhNrEQnezwCpsWeofXwEqtB",
  "key14": "2x59wspL6SioRTL1cmU8jE5BmCvinuY2vw5sC5XpnJ9Hrf9BAN6fkum2CBQWmvfvgPddavDie1mnxnk731AkK3mm",
  "key15": "3pmstEKCZVmfkCxKhR88Xfgw5dQVJ2wAVJh1AC892uaBXh1dhJiHfubE1JnzrRxbN28Z6V953CAQnjrRjWnxTcHJ",
  "key16": "55ApsFrQdjk1mP8J4XAF5Y5PER2ru9F7AwBpzqhbXD7AWoJti7YHVCkA4MVLULmC81KeAt6hyPrf2wZeCkPfRM7r",
  "key17": "2Mh539rV9GUjsW8pCze1FBZya9wzJeMFS8VeeLxNgNvXWw6Xme6NcWTJzJbpXr3F7puuhix2pRYVDJ9LCUnvSFiT",
  "key18": "gTiaCKCtyTk5BnNzxnXS3q1J6XD7u4WAEhh39gpD1rzokHeEy2NiKaxCQHya9r8VNsaarUeUvG2Y5hXngPGFMNf",
  "key19": "39KDCehL5T4nzBZxDpBeF1thovjw7TWiR3AfX7ZPcLd4Kt5inekSa8gJGDGjTprDeb7JJ5qVry8CcK9R4z2AgjZx",
  "key20": "59nDhKetdWbNHx8BNDWhqjQzzCo2jJEkvxki72mNxL8PEhqzzEDpdjQSduThcHfLhsHd8tz8h6RH6ZXcte65VEYj",
  "key21": "4CxfciyYNWoh9Rxj1oG27g4EVsgpnX2vfoQnmHWHZnevHnuABe1p6G49KNoftV6RRmMzxT9Tpzm6bqt1K9YXSYsS",
  "key22": "5yK8MigTgUP9ioizvrNz6CgFu8Rw65V1vytacpsZsWg1yZ3a494s8AonK16Xnd8wzhrtomvMfNyej8owxqsMFGfJ",
  "key23": "3FXZ4dgp5gnJp6o7vtRjdARmHYFoPC9iD6vcbKHdc611g6jLnfiHbpRDfVNW1FXb1zhTJcPqcZM4DfStwiWdRtNh",
  "key24": "3QAHh5u38iRdAA6sjuTCBLPaPwfmLPtRYpYF2UuZ1xxgjLTxw8NcQ1E2BZw1GZWbaPARpYKFFaiTStvwhx13qu16",
  "key25": "3d4utBGHhXkjbWGs7oyHwqmenpXfm8cGXL3qP6hmPjsr74QuFWQ2X9gHucJ27v3yhx41gjJZJUvA4cAcnGZgp6kB",
  "key26": "MZQE1TEbaFPsFq5UWCWGRyckT3e5MCgrg21rznU3MF55hEzsvqHvypskuLcfTNAphVfCUyepFVfgW7sQPgELKMC",
  "key27": "24swtsQmj9JbzebuyHsGGj6UjYtfQWBoFiPQKVHJrxVStpi73WNjAAzY4bvdD5RBMwtjVHe5766LteWP77Lnin5c",
  "key28": "3JywNmC5wbcJWEAgPK9CJFv76ThNMwH2tHZsE5BkZBQhiEaQb8jf6Nr1i9JVrtawMjn3jsXyGeNTGKqrBHr9vafe",
  "key29": "2kp9Bv6sZnQChYMHXomY1WNksfdPHiDKRGC6QFboTF383UP6ZmJ7EUmZ3XViFTeCaiPLEjFkstr4iAc3s4arHXQh",
  "key30": "2L7Xm8UZNyfxMavJSQZ6naJtnmbW1bv8QqHvmejXiJGU2EXWDTfcyQ2tyqgv2mf4MtZVtiF5ZgiJj5ZfVzeTRRqA",
  "key31": "31G9r2kKUQGPp2bsMyAMXz3Yf5MLsAhCZsi34Fs4q4NqqbkwhJFZSkc4Hw24ybRiBtMFgBgPtfDMQNjtspnrfVzR",
  "key32": "5TYxLxdQzkzVeJuqqtnHCyhoYgzKonMUeNcp9EctmvJYVkit6Y91NgcbvkaiRBZ2xjFJ9j1APBeRZ9gBVxK7o72b",
  "key33": "57shC5fFFo8TsAvqtcedAFZL7QLk6rFSHwykZMv13y5epRxRZWXehuUkWQ3pLj9Lfj5HAgbmZ1rG7qH2jGHBcSJX",
  "key34": "4LZ857MqidSnNhvzfKCHZ32gAcdTzH38E6TLMn9NpSJCFcSQFNaaD2Ce2DrtFAfhQ3E6KRCmLmgJ7hLLi1Dv6t8z"
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
