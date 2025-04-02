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
    "x88PsZMQRsAYShWXkmB6DupshnVRR6CH1UXiEtT9hANfDz9kssCQSnYWPq5tC1FKDqoeYLPGtpDcsFrFMZkTC2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24zBMFx4bpp6udAQSZjJJf8UvvPs2ic4Ex5JbVnSNhWfjuqWnEc2bz8ysqGobZfBKsX4m6ST99Zd5kUTZxpSvyph",
  "key1": "ZVoK32fHBxKh2wDxH2sYebSoXWM6ULZxqURvAnr6BJjwDnZMJH4ENW5nAX8eBqV2f6yT3fMKdifnEoFQ778F72V",
  "key2": "Hn32uT78GrZGn3pQa4YKNA1GQ8pJL47REzuuHGFmjGBb7g2u7oVUuwjg1Rn5ZCxYtBJkjgWxa7oJJC9R68HH7Dp",
  "key3": "2hzA7fNuUQG9bxoheEXAJFbch8cWXgVUeU78Fu8qdXJ62xceDfKCVfcmvQ2kGTWYDErsvzV4eYSQYtaso5G7SjhP",
  "key4": "ur4EcVbdGCQ21AqyzfESB5AYmq92TbeNXutrdjC5w6WSdypq3CPSfAnNAZvBGtJ4tEmjYDAvkfcJHwcTEqHDLtf",
  "key5": "4qJ2zM9iTnr2SrXzwEbgj5fFjeBwuytxWYoZRq4qGCXX1xqvGRBTMPzCAXH4Pef32rSgDCyKj1dk5m8dhGHLtbDN",
  "key6": "3Sxcvuksob8VmQ81LEvqcjbPf2qiiu8NrvpHtYTBvGudLNoqkej9YhDSsCjT79n6teeySacJFsAXwEVrfoGCwJ86",
  "key7": "5jyxQ3Y2EopEVMsHLmacph8RbPuoNcjTWk5K2ksqSEwiUQTC3SSb3nrF9QqYc3d86rfatiqDDcTGTDSPZJHtqSJ",
  "key8": "5UGVZ7LPjifPy7jVhYCpMzp5kHqcARRZVnXbtXeNkAHtKCT3F9c2Ktjgkw6UW7d3Lx9obaTevzz3BQzAzeFompTE",
  "key9": "2g3pkw1ZdxrZ1eJfyTTUsvFdns7k8C4wDyHS6KqGVDtSkRGaRUAp3aNa6rwhGz3rSyfvv3UQGmt55XnZooxnkfJe",
  "key10": "4izNeq3sMskKRM7Wz4gmf4gx2EP1Crgap82uPCa8sQhb3DzcpqugefdUezfQwchiZH29mYBaeFn65oR1tFgit6nX",
  "key11": "46uwY8S6wF5By4cMZ7WVTovy8PWWuB6LL2NBUaPH2Vt1TFgo3oe8Lc4GMMxe7TWZ3bWjCuwMsU2RZGiyTBskPXbG",
  "key12": "cxBcRToC24KfLGggSmdsdEBbcWw5aM1AEh4nvdAP5ubAELKy8PmAmVGkxzBfg2sYHoUbHLn2hWvbQN9LEiRmKrj",
  "key13": "2WR4BTzQVtFcDzGertZ1uhKhKRtng2frxhmPvQADHs77FbyreNJvu6b2sCReitmWcQ3fodAnyk18LQ28guQ1f74L",
  "key14": "PLmxiT2mSKGgD2y8nsTP1R1JGqfpvC2fSqAsM4DtJDNRB1PMMcLiXsC8jhSmrKbwaya4iWDskCyuBmWRgFUtbnx",
  "key15": "5GsvQ2zgy6Ps2nDcmxVPJqFBUP45L6RxRNnCH4ntwUbkBNyGYM51WzuqXC12KdjMMX7uh7p7r1v2h1DwwFRouTiy",
  "key16": "4sNxWBzoYNN7Yg1iuRVa7k2PqymPjduz2uPksvr1UEzt58rvSPT3koFtHV4inEbarGqF9q2G9cRx8VjpPHaLgw9U",
  "key17": "5i57AZhhxSGkrYR4Lb9PKeEdBi1oZEWjhE2prZkZH8MjWDmSYw3uzvTXu2V2S8tetpmzgwbFfmSALKZGxa4y6uW6",
  "key18": "5sRSvCcwRDVkWoj7KtpRRRR9iC8UXkKx7zhaYvuwbDMt2jtHbckpNNRJdGQakyczmixugxW6Kds1ywsMNUKipUL7",
  "key19": "CGFsXQJeN3ytAwALfSc6gjCP4heHxq4ya3U2o59h7YeYcXjSPJK6owrGxy8oR7R4CBVr6fuWsUcGr4wBoGuMesz",
  "key20": "3De6Lyd6NeDrDtTSFNtR7mjSytEGnvSXftKsLkKnMic7AYsVLkykoc1T4YwRVVbFvXgQftbhzrTTNgdHQVokAThc",
  "key21": "riV9sixJ7pteqhb9qXEewozUmyZ5bUkiST8CEc5rx2XWbZht8gz6osqvYSYMCuzfQqWXdGFhhFDEsUPQRpaRMTW",
  "key22": "2o4RW8ZueA2kY8ZtYKv7obGwvUGLbCPRkWdMV4Jaj9tRYcm9sC9axrVEXLQ9b2war1QXfw8sEKUcj6qEBF3d1bGr",
  "key23": "bv9tFUdLcdnVsQqqLD2uFejqHRdkQ4P4xPq7SWYZaQsb5zJqZAes9Jw5sSgu1S6uAFzoeWp49pShR8BMT5theuP",
  "key24": "4BNaBjYNcRXU6okfn4KtjYTF14D5NNevj4fRQevhaQ4fqKCwcBQVaQMtrSpvTvter7FUYA7f1BKY9XzW5S827VsS",
  "key25": "2z3p6aZqq4S6HbyKiAdEckkRRw7kytqh67ck8t6mfmxVQnPrqNJNkb5tYSz3Kwa6G45ACFyA8xpXFTJT7pn9TK5P",
  "key26": "4XPynmJQT5raJ7PSZrtW2aUwdivCcmQor4ey7tFzpjdafKG6sF3UuRtxbyxE6YR7p2VqpDhX6dMQuvZx4auqSbsy",
  "key27": "4bLipxGQNLLGSksXSUfpjDoWAepLhKxispbNBiMx2q9znLQUaGvQM8fYQ9i927jFqi6uS5e6yjYsxY1nkCLjabYk",
  "key28": "3qMFFEHaNuYtX62RBtMZ4AxyQ6KDjEDKnn7gtjaNHdB6KYqJeXgtsyRa7ThzdbqAxVVM3KjvKVq8MAfFBqWN65XZ",
  "key29": "2VxkGLu7paxUz9SpiQRcKV3ix1NeyQJTreL3zCsef9KVELKJCEMXUVJETvY7FiwvJLGrSGL86XxDqnCBN3vGemKD",
  "key30": "4Mna81b2Q8SKkePx9XZmmw9HUx6BRUwyueQkkte8buEf6CY3iARoEHQJAAcbADRWey7qNcT1zMejQ6vn9qZRSrrQ",
  "key31": "4tc1nXJ1y6tLCBTszXrWZhZCAifEp6zAU4kRGMBQCKiNwb4msawxFtUudznzk4PSVUyjAr1Y3FBNT3DzrVqBedyQ",
  "key32": "4X2cqybC6nybCpfaQGxHga7VU9xqWbjCfjKyAd91iBZqnXE1UeM8QRbJuYSWgBnXh6cFWAPtsaf6Dn3JJp2rMrgs",
  "key33": "2PCTLJVdFS332A6sTFdfRYmUPVqF71ynUWGb6StHr4pJVcKc6cRHawtxUToMPs9n84pTMsyqAJXv5ERPRUb7sEZ7",
  "key34": "3PpsDxgfAVTfbCrrJrrs8gfnSFF5uzTDYMuiVqLcN63btv6vmX2p4kkbDUjJve5CqHqpQc3pQiaTHXxaebFvP5yP",
  "key35": "AqvyGfmrX9iC9w86p775wN19QiHkNLQwf8BvCa5eNwjPNnBsqxE1oZN4bZaYNioyPC6SfPxH8uMUDPGHfEtfy3S"
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
