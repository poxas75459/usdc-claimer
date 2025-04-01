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
    "4zW3qqNy8zEpHTr41JBUqz2AiiJ7KFCosApKxARuoWAhwRYG5vREM5s16BX7WrXcs6WD19DbfeTkXxX5p6RJpnTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TPns3bfYbiqQFEgihCjcaRNfXb7tQbQhFZhBoi7KnXWTebAAR9LC4gkX1bTt6VroBzABqXF5Wo9GXgH6reVL9ta",
  "key1": "5xv54yLv4jv4q9Mt1T8P62Q5jjx7j4CDv4njE2Q2EeiRSFwmrAV3PFeujMaQwPUXH5hrLPKJnkKQTwaE39EyLpc4",
  "key2": "2AcqCyLYsJQ1gYxqhzFF4B42eRzhfdidqeqFHWf9Xx97f1hr8iZ5Rmj5k52biT6nmYNdsCoqx7xPYYasNHXHktY8",
  "key3": "3mjnW8LCwWN2E654KVshMAMkPpzzAKjjYY21spFxBT3Mh64tGh7iKNXfS4tcoPNWUaSUw1HNiDPmFba1dbTu3uwN",
  "key4": "38qd8iZwsiyXaeCKykg5yBdRn2XsTdPgK5gmA8vjd1Q9qPhawJSytURn2jB2BTUTnupBRg6RkztPC4QPGHFVVnFM",
  "key5": "2Bk86bbYR85mFaBXSpQSjme6Mrieycbnpyi9cS4fE8upGwcREbwm9cHyGVvmUWsQnmB4fVXj6QY2TXTZPMEhP7Kw",
  "key6": "2Sadc9JNitqmcRkJjqsW15SiWPxkMnxMcprvTNU37qy3A1FZHorHtbWPEixqRRXUzb4fHjN4tvLKskh7GtTDvQ2r",
  "key7": "51umgho8TYBbuRjiaHSRG9UXa5s332SbwiJG9WYmQQ9NjXiUKNBfZsuYynvuKTBgKGzQwwi9g46qNhfviujnuKz3",
  "key8": "2m8JFJe2KgwSYNVZk5TkjRVDtk4XApFCGytqr4yBuMMoUD36XM8FWdK9YJc3j2a2gjD2dRf3kW7pSAqeorvTXDjk",
  "key9": "2oiNE2fr1X69d2Jwvoo4zEoSARrpRb5DpNosAd5jWuLGFpVc4ySgBPmaxjEA3fyhSfMDGAxntrgP15sfdnjSzPQt",
  "key10": "5E68bMehV2UearyZiEErwjHKeffCjAnQ3YGfeXzTKKocXLY3iKiDEefBWabAL6ad3pAPEgVCC7S5pJZdnGEYN1ep",
  "key11": "2HxhhsvzJSMw8ogmv87hwRciD4A9Zj1nZ5LGBCpj8jcUyDUPBK2WfomSJrRwKUBrVa3L6bF3d3Wje5oiPVA7ZRFh",
  "key12": "nHEWJa8z8PpDQWJQ6ZBBmPQY1wWt2VhPzufjES4tLyEtKok5bCos77SXFRdDwuzcU66VFWKnngqHbbY2Raf9U8y",
  "key13": "yQdk6LCSj9h4UkGG7TJhy3bgvyww3baNYDKDxi5XmGgfCdtzgBcLorvKmED3Lfa4P5Z7ZwtgXoGg6RP3FR2HwxN",
  "key14": "2k5gVpjCf9iQRo11idd182wREvxGhhNi6wn2nizXgc8AGSW2w8Wqpw2Ftq2BRM9xYcPTAMQw2TuETkUKYqpKqFvh",
  "key15": "4v8KBHWKtBDfEo8ZQbR47pD45qNV37fwvNvoi68a2GQCEguXuQGX3ZcX4eruMmXKTVDSY54DaFW4qyg9QEdDZkqa",
  "key16": "4j28JV9kfXVx4gfgin3wzYR7KjQqdM92eTQFfCJ7aPCqorKokq6t2oY9H4oUmAAuupB9dWYfgjNoKf4cVk7WRvCa",
  "key17": "2r584cq6oxhfvYUGtiHshp7WMcG5GXLUMQBPkJ8ywkzgS7ZT9hkMz9uYPYVdDsQXo1c8yQDntALDekhHbLMRhjG6",
  "key18": "4wxUC4zfKjMTNeg5XpVC9nw8gGx8hXJw3rEsLYiK3N2FyuCSFycipC9ST5KYrf376XCbTyjhvcPzrCQ83Ujh9KwK",
  "key19": "gMRDimfrsyhP4f1e8Uibm2M6gnWL1iBXeyqAEyUrArjNJ8Eq7xH3CqhhSp1YrS4xHN5bhzNW9es743Ypa72gx1B",
  "key20": "iPtYDo2GRjzRzaUZFiyKmJ9QR89r7xSEdeWTQhmZjC4FSY8AjeaUVosC8dNATbm1nQDgvSYyhCZhJqkGfQYqKBY",
  "key21": "oALNjyd4WBwRmk2mziBeXSyXK38ff2RvFghTKADTPD4dBBge6TXSAnHnYCzdGyNQQgYFQGdu2LmBfPAe4mZT9mF",
  "key22": "3qiasnVpMWnCRkYX578pthGQJ3CZJKYkvpBGYZLZtXvDK4zPCqkBUKZTUF5h3qjxZaQLzfUuj8Pe4JvNkidRFEgn",
  "key23": "52Z8VSqnNkiYT24pz9T18W54mXdnvRDDVK9HmFrGzsgh3sW1yZKQyGEDvUsWrMpdTJj67USjGz58mUhmbgFCRV7f",
  "key24": "3dkArmvEveGTzRwsgkyausvhTuBNXTb6WmNBtHxjLMq8wAZNqM8Qfc8iMytbFJoDZKkJqYx3rfriXpfG3okJ6UyP",
  "key25": "r428yC7LWudpT8Mxm7iGoKgZ99Y6j9vCkRstZV12knenX7n1WHVG4nuBAdD2ZfnsTQHoNaY8u4mUJzLcMge5SdE",
  "key26": "5zDpRFRAo8oaqY3oQA9TLyT8qbuCRKSTZ9NZFeABgrCPM4X2tPhfTX2kDfjmHVtuGDtnNNDdvx7eHeACsdQjr7HF",
  "key27": "5YtwrLViw1V9eEUtTHbDVWRXgQV82mkwwks4Rhz5EGixYzf3NoEHFfbGJYHeGRLRnQGW4DTKF5B3m6otW5gSGrFz",
  "key28": "2n8CBXY5wRCmFDjwGusBXNF4i2Ng95Nf9QJ5LcAknjHPgW8emiU71521mViHbHSXLt6uzYEEjhkjxfK97oD3dKvC",
  "key29": "4wseHyuKzXMtJGCyciAKWyjcKFk1zmriMbqqHqFVZYP2g8GbrLwBNkHYLTjhzx13sGEHB7gSEDKf98PMedvimLAt",
  "key30": "Cr5veQPL6UrUyKC3ErZySVwQ1tc6Bjp31PBgz2LamfWwrDFymH2JCdxRBkHVfJuyDt3hBvWHMtRQEMTsG2o3mGf",
  "key31": "2JFwEwzkpBzrENDBfWReHdf1oGHPU8EYdNQ8v7jnagXSgCQMU7mRxSvKEa1AH6ihj2f7vnFYYL8JP8Y476CkjENi",
  "key32": "4YLY8yXTQYRSi5k9KHC1L42oDocNpU8YrZfaZq8T5Uauz6ht3qBe6yw9w8S6z5LqR9ELMcxEtA5m4k28hvjaLavh",
  "key33": "5cHSWDnA8shPauwTkf9tJe1qyM7Awtu32XrVJGnVrj2pFX73cHsvg6Nu316vrQwE8yybQWCFBoyQFpFeDUikF8v4",
  "key34": "YWJRgxej6ARJwmjaN3DfnmLmMA37WXmYjW1PBUH8VSoeP3bomGtdNuqSLfLwD8MSo69aAEqmwiXEVozQTxpEb8m",
  "key35": "53dpHuvy6dfD6ssQs6rjNbwpsxNGTsN927AvWccUM1uv8EQELv3AE4FTb2dnSSsX9oeBk4q73GVPvLnBwdb7ov1W",
  "key36": "Z92oHEwv5hgZNrX5b2qAXMEZEotAd95RU2uGNQhhutdLcVXsnwM8q6tBXKGa1Q77ohbdWezUMTdXi4gYoq8dGos",
  "key37": "5jTSkRx9obQT98ZWQTCsoEvcUKyjALsLL5ctfjQePXxwzdEiWFwdyWetppTT63RgNM32GhUEacoRcxrPfKzeUkeh",
  "key38": "3FLKatzzxBJCCcrtob78CsCYh73hVUtVRefzEkguQq2b5i8GB4qGwwHzCda3Z7LagdwyF82Qk2HnNjVVQ6udbBEb",
  "key39": "2hnQXZ2NMCUyUv4oysUoYM81W88EZRiacJVtJpMhVDbzR3x7bnpBHPJ5jT4ch9zmj5bJcC6vSFosKTAEysB5Givy"
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
