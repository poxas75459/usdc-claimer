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
    "57YPFgsD129PsbMoiTC4FdxHcXbGYqaRaqykXC2uEzU8W9XoWz2adcMagz7z8TSh7rmkBTxk9xzSm3Zxaoc4dbva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YpYe8UfhCVABx7rENGKaRj7C32dKX5Gupt332VTvNcq6RJzBMvFa3sEZneqLswu3XTzcrYg6MGf4ZrWKaYGQff6",
  "key1": "2jjP661BCHAw8JH7fBN289GvTmseLcP7YPZo8qyvhsKWTJUDKHJ737W8TtjVf1JaLhHcUW6idbVgikbY3NB1rgu2",
  "key2": "2gUehSB9HGNmYvktkQLV1yghyoLmzpyBt8a1bJ4StsWXxQcA6phfP6yLWHkwNNHYsV9fZNyPuivRnR4pXiPm85pn",
  "key3": "N6ZcqcJbAwwcrf3TkiF9p3HivLfb9RfTRA8FpzFrWJxn9c5hRzorcDkEBTfgydsnKenw1ujrwXDsGm7scRrRxkb",
  "key4": "2fVbnyjwjHHrHs9gKUSBj68j8p3PPAJAp57jr34Tjm1JM3AtuoPGzeM9ohM48RkSj9XAGqjhUuoad94u36jtL18f",
  "key5": "EuPtRYyFeUbdt9vtTukvBbYvzv82EQekLPauH4Pk4QqQjFqkLLMcKtnhXXuCwi7NoYVwJHgHvVHyCQTVEVDB9mV",
  "key6": "2Hsk3FPquE5HHvYQ3ZqWQo7hg2nL98bB7U5SHa7cuUr7xHuJag8DQp5Ewvjzgt7otGqQh9RJkzGRri7HXeioYQ6Q",
  "key7": "3WU1G12a7EMhvXMSggZAEfg8aSEGWnGazvGcNnc6DaUSfgrmAd4eYm2hdUUBzd5oXTWEkWtjG1pyyLSN5L5LAXzb",
  "key8": "8NaNEegotZ6MriJtz9sej3rDUw9kM24zQQqSrEqUKbVCwNTZt6Jd3h114oMqqyDbcTGVdFsCMuKGAwMijXEuPWk",
  "key9": "3bGqfWvQ6RJtUWAYNESrRX6pnvwMAaxyDUdZ6AvZeqNugNeVhHK55EZLYKTmFXKhK2YggTobyYdK5SvACbYebyBL",
  "key10": "gWaFmGfDXTBKf4xCuNxQfMq538yPQfwHXz86P8jDgMd1YKS4AdLEdyQTxHA7wmG75oSqMG2SRC8LFuEfpGs99nZ",
  "key11": "Fdei28QnAbLMqyEtwbFzpCNa8HC1ZFAjaFBrkzN7CLckuGQqsvuh9orkoyrtnkpP9ko26nphCATRsLfWnerMYR5",
  "key12": "5tCfkfsAYohCoBAiHgw1KwzuJzzWmYz9DsiLCkKR87yKpYgUQU4HMXTn8nzkkLXuhcBrcrdDdYFz39dvFt9ki4KJ",
  "key13": "RH6mA14Mkq7atHV7YHJP6P6Aqhc4VXMnSmbYFJxJUNZVfkfWpuuPTFTTMVSM75CHjTQ4er6VHoVoDSzfj1qXFqE",
  "key14": "5J9RQJE2j7Np73sJsD9YM7EYUnm6MtNSjrvS8cFLiUaN7e3G8Q7gaH9mtMFYGirVSDV7uPUhLWjgdbhud4p1h46i",
  "key15": "SNi25ogmW9A3zHZzSUXXtNrSKj2KGN7niNqYcxrUAwD5uYS2R7dRfvgFJ6sdkwtwXqt8pgS3VfZBTgrTegyzbke",
  "key16": "2LxSERoQEpnGcfrPdyF4o4J9GNh32M27cUdK7Q2TpCU2okfZTVtxwbcqsCBN8wc6big6ztoSCKRyJvYtsMXF8ssC",
  "key17": "5hBJT2mkYZb1xuhQRuTzyU7RJubskdcZimdNMM3xvkHrnWpBUCRb24FMkU7imH3J9aWZAeduCzmaKuTkwrPmRLPe",
  "key18": "gZkavE7wNovtT6MZj2Aj41oxHckG9nNki7xv7C11gADpgrdskmJjk5SFYsM6xmHrRK1Derpq5ui3iDNf2LSa2SJ",
  "key19": "4365vkpsixL4GPQXKY2Zq8c6JMUxjbv2sC6SKwhBzU4kKqJdz96MyydAFFqkYHTuSKT5ApMzcfvFa2m7U4WXsE2k",
  "key20": "5czsdfuGr4DdqyyKqt7ga8iEUo95PekQP6gieuCKPsMt8thrTyawr5FWJhaFichkpvxSSfFzicuah2VnYRiY9oFJ",
  "key21": "5kKcGUsfgHV4Qufnohj6F7rvxfYMYk4htsUdvJcXV45XwFM5BZbgahmd7jGGKr6kyFLC1M7YA8wtMnEJ2aaT523z",
  "key22": "qf4ixWyhBapeCuPrsvpecoPYqEuY6Zkt1iaPKk6d2iXNppZgkkF7cXgxUpRWpimgCsfT2J7aktqV75r3h2vUfrV",
  "key23": "3ag4pu9HnVFHtSLSomxA19k6pZYThWKBieojpNTrFF4VDSacyoZzL6uuRD18zNQMdazYWZfM4ysbRLGCh186zpdA",
  "key24": "5u7wWb9WeXrFp22Y3FQPhC99NWR71k6Wk6QTV2PYnZFhKHrpZji8fjTTwqtj1Ryic3qUVeZycVzEtFzH1gs91RHK",
  "key25": "toVzGYha2YxLU7tYeMTYNWydQb8yU3aSsZPVcBFLKZXMJqKd8b5sVrjoVPeVp7SR1ufsyYQcYc73oF1okExviP8",
  "key26": "2T6RnMVsijaWrEgC63GaK52M72JAkzkK5zXsE7aGvJLeaxZNhgo9hZz1SmfgXN9CMvd1mCDdEpNpkdiecWEVHEeo",
  "key27": "qQeLwkSM9eRd7ZfWkxqe4WzoVbVeG8k1uvkF1XqV3ZSKoVWhR9P5eJQfXCgVd8RdeJ4SxpZu8tCsatDXyDGjot5"
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
