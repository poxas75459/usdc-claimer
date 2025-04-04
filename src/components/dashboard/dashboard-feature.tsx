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
    "5QAbJo1cmfYAQiSvT8dkhyCgKpd3ZPGpgNQDhZ8Ef1gBvaMPgo9PBTXShEBJSpmA12RdQn6XpkAxTPfEfeeaZ8Ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KtbmachQVqyLtVAZziVrAVe5Nr1CEFBUzKjKUjdX5Vz5Dq9pb5QnYfQzjspsq3z8nRzze7edbqBwf9yNMJ1FTct",
  "key1": "3TX3AjTmKbHaYfeF99NfRbNMm181VwhvdWgmhFiyAhsK87n5ncJBh55AjMCN2mrNdmj5TvPDWcMg2RXhzuHwVpq2",
  "key2": "2DrKzhsUoqKLLEhf87tjDynVt8WJjb6U2EMU1P1BiaFdxhnt6yhqp2Wgs47P5pVmz8EVdGL9RUg2yPij7zwFXRCD",
  "key3": "hVkqERdkHspkhWZoVrgj3dkh4vC6S8kqmzLA8Akor8F3pB7oQUTVcqqhhEDBooEEk5ewrW1rEp1fozNaF1pTcZc",
  "key4": "5hp8x8pSg1vnx4KVa2RspBponqEPNGvjxrFVy9hPLR3F6zw1HrdMVqepkh323xvXUe2ovThcvzBeNRBs7J25ZnHk",
  "key5": "3wDsaCQuXvDJDLFFktpB7neQjBvZmgR8oYtrWeUyrZST6oC8ktY8fBVw6Zr8GUQbBXWDK2s2iN8qXpRARTXoquz9",
  "key6": "2mtaqfz4JpxNPQZgWMYayJjALkpZkWCrmtUN2X8MVZPGE53S1rSmcJkD8zhJfmjsA2KB5U2BwxudP8RRXHAAjsZx",
  "key7": "2EX7JyKBjD5CitWTsErLS2DeaTr8p645jUjnwRqeWwfpjADU2uMLVa8KY6Z83jTgf3Jh4Y3H5hnQ1FLPt1ikdTdC",
  "key8": "4CaHDuBjCHnsckRykvHNCTdgWViaEDzZ6DevXFBfTH2KP82LyuTTpJknQ7cYEPBrVEyLdhs87H3AfA2DZLaReNDx",
  "key9": "625tBewbcMPbbyKpNwqvXwNiNia7ZJc7WCvGMnJe9xJiqgqCoNmuHyYWLSE99AFuDFdokxZFgVkZDxvUbi3U9t4X",
  "key10": "5UH6XntjrmJAPvRPxRhtDNfvgw13cm2nPzjZ2q99Md1pmhmPGXY4WhcuYy77HZJ6t46NWT2X2fTSfYW58nN5JgRD",
  "key11": "3xRqPNA1tS5zYCryQsG2oVhJzdgtzDBtmYGZP9izwJFs94gX9HYacLUiNdSFdVEhXJN8uVT9FTEEPzasfSYn6mqN",
  "key12": "AhhKQBXcpuD6dPCR2gJcTucsi2qbGXTp4u4fgDP2GjagjjWZDRGif87qsuTfujnVDj6YTLFVdc3g6ZJ6xLgqANp",
  "key13": "2KXCwXvp1k9yrY2qinLuJHdP9y5TEreg73KaHr6RmY5zE5NKgFhmBnEjXHSWMtWT7x5rtCkyFLPv13oXg5P5GD1f",
  "key14": "594PdQfX8PxQDtwA41YAPqWYgYZAojwYQ8wvuTBpTuh56YzM5pdD8SFR9gkn6vdDYZdVFmQjqb9XMnMogR2AbXmL",
  "key15": "3541H8GNvvqgAGP37RKp9UrotYykyNMQyjqJLGM4fGwkCQQCoVe7nu4r53PVdFzPyjyEi4ktPSjDu6p4Txge2yGT",
  "key16": "2WEtLg3Koc9yTzACD7Vr6um2eVVFsC2w3eYbVXGgTSuJh3Udf3A88FojQTjHRGPHjHDdMNA2QAodLTed4iBsdg9U",
  "key17": "3f3btUg8YCwDBV2rPNgAVMmXabUNz8fNTvXbivPD7P4D9pWSZDkfywGeEFuuqx4hzJgLiBpdLD4sCCXwqNBhRoJR",
  "key18": "9ifwEyZ27S7YmtMpizQ3xHu42HKVmdSJmACetbD26C4jE2cBGAo7C8AV97kDNsDoCyK8jY8GmsBrpaTF2LCGRFT",
  "key19": "5kH5uXFccaz48XptJYVLMeUngjnQSSRN4P2MHXBzin23La2oayoz23DqVBsETe69AyKiACCi7KxyZpvXRbdkAmB4",
  "key20": "52EBTLTMrwyPSjxKgrwHPyj5qiy3UhheiHfSRNP6HzpLKwCr9YfYmv65oorYrciWmq4sZzLciPD8XFC9USVQFEsF",
  "key21": "3iaa2vufK4ceKugAHSLjnj5r6BMpsq4Fih18dxGWtWZNwWc9FTy9p2rsvMdNFE8K27eEyop6SdnWzLBfC31dpYfF",
  "key22": "2H3FkFjGCnNiKxeocYTw7YLdbAvUyJ7RN1ccZm7S9ZhAHGTcae9zg3rR153fXdWq6sbWVxnSk1MLBvr1uDyYyggd",
  "key23": "4ccd2ELbFfm6PJyUyd1tSgFcAEJd8SAUHzbYsuyiCUaB4Lf4Fw1wPnXwZZBPYNziUDyfGsWngbZDuSstogEY4TQ1",
  "key24": "2mzUs9zDPxDVykrJwwsRMSg3W1vrBsNoWtdC2xVZHDdzgsuVwGP7cHLXuyjsMy98u4ZnDwfJb2tU6kyRoRae4JNr",
  "key25": "64mSSkFQ7AADUP5Zm3bnHCvvqcTQHuhcS2Pt96urMGVBZCe6W11SjmrEEcKboAXtceQfGwtiLCoMWuZbBpokXjpQ",
  "key26": "63yQ1M7oL1kFR93Q5hgUZGvZ3ffnKfyzExm6mj6PrAQwzkFDDQouL5M2on9xueEdDtSL5TfpsfrLhNC3bJ6uuWJ8",
  "key27": "3Ju25wMnvdnjj2k2m7MVpR6paphvdXRBeaG8nGDE7VuuXaTfhMBN5NxZrnMtwPhjxrM6sGNTe2QGLgSAoZGcHfvd",
  "key28": "9hx3wvp6CQQEshwsLs1X71PjfKSZfRD7n2XDBSKwuCPzoG41d3edgNjLWWZ5hjfze1hE2oKErfeaDgczBJFojgh"
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
