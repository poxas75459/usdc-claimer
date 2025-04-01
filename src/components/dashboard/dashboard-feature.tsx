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
    "EUJcU1DSuKqh1Hw3QpZQcwcF1864s1vRayxe1CnLv9rCxipG2ANdn4AXzVDy4Dx8FJTPtW9BtEmUKvr7M9mLBbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29akxWfRWJ6jxYgAcj1hVXJTULMFji8SN2Gvnsn7wxbUXqVsGM2kiohpoxp9rAXAkc44BK2r857ZBPYeAHXstTsM",
  "key1": "4veRf9ZL4wRdERqZQ1xjPKkQ7W8K6JgUcga7fv6CpdB2ocCrwYToN6YJ9ZiyrJk94bnphcJHHJrA61SNW42vp7h1",
  "key2": "2yTxLxbxGVfNRgnFkz2o2nVZsKjxuP99Kux9FsrZ8kPGUt3GHUVRYX3BW98PWVNjtttrPgipioaVRxovJ9NACUmf",
  "key3": "5kF25MC3MCvUoPcgv3HR43GcvwGyQV7TTYZjvXHVkxwcZnQmBVpZWRXyafLUcthw19eRoUmcSQHY355XjCjr1uYg",
  "key4": "3tmErcVA3BccZGqZPfoZ6cAyKPv8e6vfS36yhwkERfFZDzcTjYaWkFhWBZ9Qitr3yKmZYR6eYbPjwq3WgzaFaxz8",
  "key5": "4ffsTN9eyKy28jVLCdB62qTicfJYMdDsFcEDHaFRtU29YgLt5RPcvZMFKgKUgMusvSb6bx6BfbQDTh7fK7CuecEB",
  "key6": "4SWTa7cvRs8DXDME62XBi9rAVWvNnniGYVFo5V9CvWAZVCU61cd8UyVi21mFzWuzQjQGxAPEmkB58yB4y7pHmoFH",
  "key7": "hMFRLFXBvCcLEpEWaKQAR3cvyycA3aCRFUE7x7wxvrqUiT4obszUd3BnzWj91CbgF6e5XandyLEcXpMjz9feb1Y",
  "key8": "3tRLCEwUY8Dog8uT9chqJor61JiuB3Z2fv48jyh2vF5K7WJYVTFi9fgNQ9PQyTHyvUJR3x7QY6AgXSxYPfVYXQRs",
  "key9": "4tQ9CpcTLWVomGR6AQEeFqHGSTd3vUG7wwgiaRfGs2ATsgpjThKfGRD2wRYq5mZwpBzxjQXvSnZgec2i2kNQjxv2",
  "key10": "5ZFANFReWZMXLw5icJJ4wNCisnKnDaxz2DjJoqut7TbWrSo8PX4P1cAA4juVnm2sdhTBB9RPboDtLupCGGXZqirh",
  "key11": "67ZFGswNVonsEdcasx47hwcQkzWtJnSEVYFKox3pGUYF9RvJETW2k8twZqivpHdUAPx4WKNRkf2jHg8HqABtSGbJ",
  "key12": "wmB2HcJeELAGq3yToEQwaAhsc84VyYof8eVYxSqs3CjY7JRQ7HgZpxxYo1y5NnRUwkDaAoT7vMb2yUHob3SEjsk",
  "key13": "3FNurJxJQ5hBPDswAJGMUshs38iQYJaCbTSdhKiEBkWFz8SzXnzHZyen6YuEFmiqj2vFq91Us27vFazN1kNNaJh4",
  "key14": "kVqB9xzsrpiTFQUmagux9vNjNbhBTwzE9CUdbWaMv9xJuJhjF2FHbqFrnDXhoJnfHEL9AL5uMsmMdhzCvMgcT6r",
  "key15": "4LXPo5yEUdWMu3zYECMSF3xPDUhWebbmreY7uYinVvUneLWuqaCdncyc1WNPcwoJgXsEbqrRxK6EmysFcCgkrTQN",
  "key16": "2DmJxDLKLUBZKfT7Rtq7f3jyZMDaMuprdXNc6hihDQWCAEUFAtDqfugm27YgaxQ8QcG8CbZ2xHH4j5qvPeVgHS8j",
  "key17": "3k41XKnZyXwjA2VzJsqQi7r1ysCytrwj8KioZAvjRBJXkvLNv1PUBGhsVU3CdQh98UGwu7SnYU4YYU19D38AVZdf",
  "key18": "5scuzMgDyZntirrfQLTTw9QQecwiMajLGea9YamYLZDBHvF7AE4SeicrnPdSvUAzVznhS9P9NszHcw9UYfF3rz7f",
  "key19": "3TvYgk9yxnKjv8LjpKJcqtA4ve8i3i6gBQb15g2JgfdrTQA6Wa17wMZML6HvTjcTUbt7eypCm32BZprUb4uYUkiY",
  "key20": "mBCYQZYE7a7CSnjtDs1ZqpKTRDJptc9fQfZCcCVbQ3V3aiwpr7HeLmDGm2jHbnSVVp5HCT9LDjGH5ggZDdMQ1EB",
  "key21": "5vCpkQ9tRU1ktSuduA6Ke6t3Q2idzuHHXhX46sfHN41jSAyWDgTymt4UsxcbJg8p9XtDdaofqSnAVr639nUNqVzi",
  "key22": "5a7YLjZVDcgCAc1tAbvtcdnE8ysWywNbQbFvfirgiycZd4vYxypPKwQeP7YFVLt3NFMGCBeVdJy9hUN79itVNcrj",
  "key23": "4CM6A71vPGX9EaPfydhdTQ9DkyZLt427R9S7YJVKKEg574wAf9w8YndS9Ch3msuekpUUA44YrsYhBWqHSSzhjupL",
  "key24": "3ndzdkP4g47Mdbbup7shKt23T3pjH5CZhguy9TckQkWrAymQaV6ewMTecVJS31g6hZ846DTCU3kSffEZ1jp2Pbwg",
  "key25": "52Y5RD7LnXwEcijmgya9A5CmBBHd8XhaBPdJi9bMQ96Y884bxHquurxUsDrBg9eeqoLt2aHxwyYe45goR4ZcCLEX",
  "key26": "5omAcA7sFKjc4ovjS6foBn6ejarQskRMWUPghxNzXSoCy4mdUbNHecE2JreL1Ek1Cjv7bac52zuwoP61dZvegar6",
  "key27": "526ZRuoTk2on8hQzi1Avw8aMWdafHGJ2hjoZXxiitxSSzBwz44ARsLU5bG3WtaNgdJKZavDBcCHuq4nvZ9aendhJ",
  "key28": "2uibaBNH2SsL4kc73mNTiaeaXLygshe2nnZ1q3MTLtu7SVuo7vZXw3XPZTrgQMXU8ujQ2sjVBvgcNbej9rXyYWi2",
  "key29": "5iopLTp8oMorxeXbZ1rBrzC2sYU6m7nHccydxXi4cbRQCAtST1Fgp4vY4yHyCtxFYfa8dMrhX1f1oBik88ASuy4y",
  "key30": "3dSwDetNdkh1gK2UMioVUCvMrWZhwWUivuvJ6yBvEAe1UQP7481JFRZxLB4vkLSDTm61dyC6vXfMkZZ74cnQP2Wx",
  "key31": "3QBGE9jfCRxSC311ciubuAH2Brz8BuXJXkpxTVD53b7E1sNJkmd4Nn3oSs43CbcFuGHGbCK5B49E1GD7WeTHpyKu"
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
