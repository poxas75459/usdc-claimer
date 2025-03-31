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
    "5ocAVPTJbJGqVSTtNd5Boy9m7b2JcRB2LpeaUNTyN9KN9DgXpQ2BAsoAoiYrNXNMs9fE9gZr3rMmE49aFr8iLm4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2grUm5kezA7vwhSYzpM2BbfYvwg5gGTgdc9E8FwD5pgXAnm1mDkn78ULiz7N5Q9Y8XMHBHAHVPTfxiJFiVYSzgMx",
  "key1": "2kS4wq4DnbkZavwQAGuFT613nRgguqpWkcyTkoxCDpEWRLn2Kmkf9gDr1z7hKcqH1oD6tLEsopTbBDDFqdGjQZHD",
  "key2": "5kfbpW46px8782A6Airha2ak9BGRdFeg6LaU2DD75sq2w7nae46dGXkB8B4bGw9uUTKwjmm4d2dKiQH7MQM7vpNZ",
  "key3": "3jf6M1f3NQyuKNGXuz4RHzMct97Sqec1a9AC9VwNcK5HktTqydJ9MC6Bc3GRgjTiBP2vQhcrm7ZYhctxJuUhvGPS",
  "key4": "bv13Shp5J3DmHJrCMRQSXiJ4y5MERTxkxxrLU8gh6Pen3BFSfGzWsTxKxSL5ru3tWkykipsk1m8MPDVs85nUj6U",
  "key5": "NQcK13ta98q2mu7Mp6kNkheSvq4A7d3KoqbiGaAMsbZRM2fKxFJ1iiEwfXEEwDGDb88AvUHLXUEDNVNkjF4fUiH",
  "key6": "2BK658uS6YuKQD6iXr66ueQxXp1gcKTLFjACND7yUshmgs3PNmqUJ1qNdm57JHkZJETfaPdxW1xeHgfGiqkUgS6p",
  "key7": "4WciDWJj6qbrP3RGzM1VbcjhdjsjiX2cri31PRb6yAKj1EzDqxgQkpa9ttLB8JdG9F6FPqQUk1oPy6T17sqKAnwi",
  "key8": "XY1mHD5MxGJCnc1uqi1Uw1x3PS3YvjNKBjbZ2Q49Lz6DegW4eKMAeD8wbHsi1EzBq4veAAuEJusx2apCWX5nuk7",
  "key9": "4cE9goRDYg6y1mrpLTBudF3KbPsH589GAEKJfVGhgoGVhMsnajqcMDpFWzUry4skq7mhwL9wzhWV9PTXrUFe7rAs",
  "key10": "2JdwDBD874Ldsdu7ZZqwRg2K6HRNEG68LDk88xHbgFkjvE4qj6D5BAKwt849fPt8dt9q4YPUf4cXrTmqkwHTAuzF",
  "key11": "5YoiLeKh5ARuR3BGgdZnaDciYzM5Lj8PVt9EnguzbBfbL6jfWXmg6UGb5u7oD9hmTxzuXYVs9uCV4b9GqgyxLsbF",
  "key12": "5uSWzMuAd5usFay1RMu6c85yPdpEcmeUiVk9qEpjb9ZsP5FNVLMy7QY8M36SNVVkk8zJ4SYNJRyW6puyqzE4ZcM8",
  "key13": "3PvcR2RA8N7et7VSEoYY2QGBLk2VLTG5kmzGPay5h3v7zYeW9qQLMz91CFds5ACD9pxALMCM1y7rZ4WJLW99o89k",
  "key14": "4xkdXHf8n4Wminbg63PxHrF9u4NaY7X5HpcdY5wTQZ4Y61yLNmx1tie1oQTREgzwy84sF7ZYWE8aLzWutGAqznjB",
  "key15": "2J25z1fWGqMgJxnEFvPqTeAsEvv4PuZs8cz965QinomgRM839cMhSBpxVCP7bq3qsib9bXyGGycXjMXb5M61B7Ys",
  "key16": "5yJTqR4PX28XgPPpxJ4DoYXbyTikjQS6troR6NaB6vM33tAfBE5GR5f3eV879PzmLaTzzfc92WYiPUK68JxvDBgx",
  "key17": "RGoPgXcJhY54yvawRzWCjfyq6JuyGcCPDzV4uwXfF4NU9VLSg9RZopFeag5pq4xdZVbR2JrKDiwGPGVNoPq1DKa",
  "key18": "AUN6qEGxmefVtFPJCqMygVwQ7AQ8m52baSg9Pw3axRn22nFgLpEDLvF4uaLKrr1uzC5QRMKWp8aT5jSp2ovfWd5",
  "key19": "dv8mEvAaFZkHAN53Rpq873VJiYc1htoMt2oSnEhKGwzZB8DziNb2uWsSf2yQjauDpbzPMRQ8pRsVkv5wrbDNg8m",
  "key20": "32Fv4WtDWehh8tUVBsWLMdM2ZjGj1YfdexMLE3NGGKc83dJiiAqxGVDYy9uEYtgbKWq89pVNxXyV3NMAz8KH1p8L",
  "key21": "4PA4utTjccCWwrmgc82ihHBK69nEaE2z9pz9F2YuN2heCj4Yg3TghcZHe7HRKpfE4zA8tbsoRqqgnwNesXiSK2eb",
  "key22": "2yqXnQPX9EebvoacrzMAdGpfE7RezzCJZ5Pqi8QHdnm7g17YGNrKcnQDQhXg75TawKnoboyim54y4EJvyCUeeSPd",
  "key23": "wEAbeZ3hK6yrCvHbN3i4z2vy26KtKdyszwAE8BW1KukcDGBPLFR3XNeejyDpnpXNoJMens3heu6Ncp7kb1Nq1sR",
  "key24": "5CXwtanBWSr1f5ut8TAQSPPQCyx52pvd68TubDQWNMTfTktipxnporjiZtz1a5J9nr5fNLSEQdtCdEAYD1WbqoiJ",
  "key25": "2xQ59JsUe5diA7tBQyiSY5LqoHu1apWVVHG1kSVG2cEpDZfhHsneRpAc2TDhxMizZXabBRaLWYm3pjFVSFirYCsf",
  "key26": "5AYLrwjYicLYe3WdfhtN95wzDXLqvMvyEruhgW53TWpBWsyMaXxNmz8SnSH5eiyU8qRrFh6C2RA9vfY46X7CfpfH",
  "key27": "64ZSS8VLHcq2denLv7261hTrpVmBQesqcUVLjtN2C1JnRPq7JS8NUFn47qLDm6se1B1xtmZPzUVD775LoA8fvnqr",
  "key28": "2L1CNeAb3TMHrZ7nv7Cm8ZBiqcxuUdRbPsPNw2CUyh1mF1SxPrCKUCqtooGVkGkAfMMsoj5D87rEP2EaLRcRNGLX",
  "key29": "44e4hpi1Grqit8uZUh6vBohdMaxbGdNJ2GZaKh3dDQUoFiQgEMv8VkfdHvQS2pxyYN32aaeZ8QDF14ZACwdHAWQK",
  "key30": "3P7dH9vk1ACnL6rkKvAxpTZwh8jrZ3GPUW91eN1iwcS6CrZ8zGTnVcNvcbNeHn9Bm2QQioxzzCk2r31VMtrxMwXg",
  "key31": "ipPMf1Bp936fJw9oQUNZj3RQXoU2BgfMmPoaZdg5dziZxNPURE9rAZRRjQDLBTRU6qFkH1vaqKAwo4vKSL1Dk9g",
  "key32": "3XoKN74B4bX34wbo7ZTY7QPeHTm58bBFzy5HuzYLvPqKfWMM3AQx4vw8bnWroYAzVdT9e3QFF9u3XJvvnXNfboNQ"
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
