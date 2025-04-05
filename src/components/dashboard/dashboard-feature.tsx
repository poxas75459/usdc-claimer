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
    "4aQa8Y65XcK2QUjMPms8DDsCqjcCqbRoVX8dbBpxK8gZuLDkNgfUYLzgWGMbn7DUHnkp7TRZNepLZV1onuG6FXPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ye4Keh66mWFk6SpN3o5UmF22TvQ6wMXfBWpe4uc11DEVBBzxZgCsTDLeRNRdN1bpBx2V5s4bV9oKDW2naknoFzb",
  "key1": "4oqxbjQsHcsfysjrscyNgmQNdpKdV6ssLUkJngHCjZNa82z2j8PFBcKbLe7oBXAXxEXVKcUCL6iSqN9eZ7qZZRRn",
  "key2": "5MZsKu8SLwzxqfYpmuKgmBjwtW5PvpUBdcXwPebXJPeMgbwP95DpPYGxFvTbfgrHbJnvdBxPR71KjzX6Hy1o1dMY",
  "key3": "2iNt3ogYyr435SDgNHZwpxBGVJyycnBHqP52Zgv7K6t49Gez6tPzNDsY3wyLKm9C27vmxzLddv6t3paeaSDHDazT",
  "key4": "64ZjYLPTc7FnQT4bprDMBpMZAWs3vCpiAq8aozjLoR7YeYrbx2XmuhxANpiwnhWP6PdgvgLoXGHZecnUUWXb3Gfd",
  "key5": "iCLoWfVgtFn282ajD7HWqnyoxUABhCztS9kTeQ7TCjYsSbFTzdGGJJnaBhQFKdRMimTha4Gk3dY2EbZMzBZr3re",
  "key6": "GLV3u3NjhUvhi57tQBu2WiHj3VsUkBotxnbD7BwtNWR53vjZLzCsBBwKazqvK4VHwTKNtPiYAWtaATXuVLyZYmn",
  "key7": "3bSd8CHDDNx4ShpvKGBXJ4ccNX49Vt39fCcLwHhHsZcQ8GhyyykS7QKeAEssfyYiVRkL151HfR5F5D8wz85afBts",
  "key8": "5N57QGQCgAazYgCu13cdAYTdBFncBboTqfNpFq4CvhYTX6B9CEy6GVtBrUaMsqRZKsypBktWwM641S6ZKDrtrAxp",
  "key9": "2FpzM2GXkStrQdaWkYD9BGJM6aqDSuCHqWTU6oJL4CG1xPzsdCHepfKHyh9qzmfKmG3WN1Rt3R83tpcZAN9cgRpA",
  "key10": "2EZH9bhvLNZr5yiKeFMBkDGGT819nNM2L4zR4spi1rtsjNWGHfj1Wpb5zTEiJ7V4FJHcdFwjZBGTxPNsfsxdMFAu",
  "key11": "3zLwH1YYWu5XPYFVUX45WYHRkMaXH1PRQZahdzuCEbw862tFGg6Uih13W6VV8GCRi4rbJYcz9BJWtvazheXsHYKm",
  "key12": "5pKrtb3BqeEdv78oqsVUcYjZJdNuj3QvToshUWSNE43tHeJQoDgDkKwT2zx7Q5q9TTrkoADe7Tw7w3ViqARCbFQK",
  "key13": "5DVhPRezdWqfzacqhukYHexFVufehzuq7T6n4jQPwwjUpbzhYFwFGV2tVS1FiQ9wNoHvawPGLEAuUy4ywnqu4VZu",
  "key14": "5SjJSBd74AsZssWCrhxd5dnohH7oHw7XuqatyADDFS1mn2HBVTBDRdjWsDkis2ngoLufhrTMimvZkz2YDdYJYwXT",
  "key15": "UX7QAYPRYCvMtNZtEbqgMZMQDh4HBx4XBRXfwtpnQByGiiVoaLZX6vNPveCVuKsMVrm8XahDwJQrxJYmKc4X24y",
  "key16": "5fcYErDz3JHQTyeJbDkh2tnfFKKYvQ5FiyMZNJ5AkFZJnEezQsudaCoAziH5V8PrPngoyyaRYCGVYLFDZTu3ZrTT",
  "key17": "4tAgLsx6cK9ZVvZMitUtR4kBb1R2spcArtFHefL7x8BypPVKGHuFddXGPfAZFa1BiLXMgjcn8YfV69ACsBxixyZB",
  "key18": "2UgMzNnrvyeU1Fpc2pcPm1VNi7fwB7knXCBSof8QjjWScVpJZwMjek8NUuu7M6q2d31isphwqKCaQCACa4VADucb",
  "key19": "ZQ59qR8Y8DLrSjPMrnfqyeCugdKijh3PRML6MnXKMEjAqfGRkGFSMY1x87QW1TxnB1i16vJKDPH3NPGQVJKAMe9",
  "key20": "4gy6MyzK7XQ7DrSwHYyFEBLuQSu351TN4Fe6MQ998x8n9t9XD5j1FUPqZNqt4B2nycqfrS1vecDN53yz8zBTgYzh",
  "key21": "2gfpqznfvs2bV9W3ihU3Qn9ejvijrLrAcsEDxEieeFCjXy6mFheXemKWvrKcmfuwh4dshwRfuRGgncLboZWt5Lfm",
  "key22": "2XLp35R7pttBGCDntMPLkLPsFagAKzt2i1xHmykCK3NNc8VXEELTibGbvDWZUD9r5dSr2PcvgurKFvxm1CC6RaaB",
  "key23": "PCVT4QNBPHAdhpvkdTxGVsMctZEqJixWZggKypGhjq823XhFZdTXiZhUuDH6LKQhoVQPKWQeJXLDWWXYwpPwNi5",
  "key24": "4d8oa6rrcpUahZhQ8UsvqtW3uGSThCwedt6oxpy8qWx3Q3YWQJircuvvZQj55VXxXGxF3djq1XiamQrwQjFoAuP3",
  "key25": "2MazcaUL7XmYnV62ZWJceS9GxPnjyRu2rBeqFS4CYLvT9F6poqvbUTZoj47FVMPbeDMehcJUoM3EZPDNP2BzcbLF",
  "key26": "3Pew2N7hp8jdePmZXqagpzwCN5cWbyzkofi5ywT1FPwJC1wEz5PbqRUtQfZ6GRtd63tR7XKK1LCRqWhTng6av78V",
  "key27": "3653CF3cTSUjZM6XkrMq9rUKqvtWZ71HYRj5PwCddZGPeQoMNjRzERkwrz8KLcnNcadMtYQ97r7dM57VHVsKz6D6",
  "key28": "5RjUxzGaHiucG1BFsvjvFtSXJaAHcPvUAmFJ612zhSmqCwb1gneUSDuM39vj1gCK1Rry1yDZewUhfotuv7ATVpvd",
  "key29": "4F9V9HhcbuzRDzJje1ZvEJvxwjJLEXffSDScdeDrw9JkCbYpNnYZM8nFbA4ivykZKCf5P8GEFikTS2AcDqxTbgrH"
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
