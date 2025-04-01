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
    "4daAh25Av1w1pry7P3hjgRTSQ1eoTujEWhdcj2kwMM6g6Wb15F5vRfirx53eMunXYVpsLEPTXwR4tt2mZWCdieKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZZrRqF4WgWN1H84RNFi5KZVQZphCKyDCPQeeVApqbZoFPEDMoBmPjnracC5MgbHzfUKk2zS8ptkkVhB9NUmF914",
  "key1": "5em8Rt2ggNbPccskB1PPM2aLQuUgoYdi1Wyz1dMLHLaf7JZdPH5Kfy3LJ4TQyQeqrFWfnzzSahNoiTxqiDsqpNu3",
  "key2": "5wdcLZLe1cnHFyCjQ2V2n27kYjhBMoktHrHxWYDT7Gg7TFRLNKuuw2QifRUqDps2CUSWJ7ExSkAc4xBGiqtWRW86",
  "key3": "5UgXsQpbmsjNDfWDXKrXtobDkXGj9pZhsqAumocyTxQKXXavhyu7tPf19tcmWaUUAbmtQnGk7d4zQqZhmfLNwnHn",
  "key4": "3zfA6vzpgQpdL1fvyJh52CzAe6ke6Gcpmj62akHvpWo5SDogVk6957934KnQTTP2ucrHA2Q1WjWA27PhU9MC2ZqG",
  "key5": "3SAZrQPHNfnrdi3cg2CMhSZuWVEpRcNU4GbBC37EcAMZV2gQpzM1XPFSjc47N1eiemdexm2fiCxJk85rmbMRjaTi",
  "key6": "4XpEK4ZqNjSPeUcEJ1YrdJ7ufJnCV5v5djD1WrsEu9mJ4Fj1dQF3hYqhpC28YeWzvZDwQY4vLZ81ryurnNy67fK4",
  "key7": "22g95d7MjcE7P7QqACPfgNL37M3kD2cQisVcH6oBh6CvYYicCKDihZfPPrSaGYAjzhCkRQkQiDivzNBXLzTtcyJv",
  "key8": "37bkwQiwWYfQgH2vu86jw2qwX3Bo1QJ8YSdZBZLqNLE8pre8KiFWcCG2Exze1xHgadrqfbV4jaFFLQghz6i9J7VQ",
  "key9": "fwypXbJ4X1YeCcauNexYqAeyxwaNmAcUSzv7pnaL4aUQwoZqyj3SrX9EYsaM6Xd4nKJyfoy5yToN2LyeAf96xUz",
  "key10": "4GeYWD8X2LLJEHNSTCKZ544465jhP3Fdgbxq9Anx83kqqEF1uP9RdYdRSfxPagxDpg571qLiRFXrdjbGSMBg7AJf",
  "key11": "4jq3KBUvt7tD9qxi1R838guj49Bq7JMJoD3keKv414yJAqoCUoXWZHLdoaGJu7mVwEaRXHYKA57zdYxpYiBhBWhg",
  "key12": "5Ws7zZvebZdyZVr361Te7YuNMvvCtv86BSmBgVTUaKV4M6LfUEW4ydqCuaAU367mhatvuUCEESnrZVS82pu5znyU",
  "key13": "3fea4GVzdpXTE2q4PJQP8cADhhvs7ctJRs4N7WkvBek55Ge7PBt9MF9LoCV2SmE6efSzZmDsfVUgmygQQXiksdPL",
  "key14": "44NZeeA844PEbe2pPyzD4Ut28JqcnP8Wkv6zSEfpUQFtDuxywyuACVQ8seCgHtTjtGWEoV7YexNPszG8UvB2uQt9",
  "key15": "4fSpgs22aXyvxhFjs2Tcka425bgSEB6aLb1cNQp6fbBzeHhmumsQF2bX1MfgMRtpMmKDFiKN1BkzygoRwydMwsJ4",
  "key16": "4Pm3KESVLZjHuJFwgXAt9dnuLS1ZknrHpuvCtrvKBYjyG8uBWhgxDXXERK2JMSWqVRVp7M3ULPcZf1NXndCRDS4e",
  "key17": "55gq6NojikHscPWoc5nHNAjXaCXtQKXDnUt7hYRKjCNxvsPz8XL6Xw9xKjG83nBgSHVdLH7YWWM63PBeHKcEBJAg",
  "key18": "55k6UB6iFNB5pTs832FMf3JNJAfGsaVt5w6os6AzUSTZ7ZzBDkZjKN1b8kNLVBgMt92Y8u3moyRR37916WnMt4fx",
  "key19": "3tvkT7oWVdfoXdq2Ziv5TfJmKWwjw5mWTjLcrWMwdi9MfRN2ZQyk7f6xw8hJq9tjcA3qbcg2cVX19TD7hy2r6cQ1",
  "key20": "4DCQhFCBs1dX2gSkwhg2H72aHc4oQy3MV724XZXjTdjnYLc6WxiEdFvNsqW3f6uQGKKB6yEK3YEoSftitqbUfWx2",
  "key21": "5XAajXVn5rJhn4oHLkorvLDwdAs4NQyaEw546RNYa1HCyDVpKtEtuWdfvfLTWQbtRKKiZHhRpzatPcjBHeiJ9jwm",
  "key22": "2mVptHkDG4uKVL3MX1jfg2MqnSkMzBiXJPZHT6JXkmVRWLpJ47mZx7wuLSxYhvL1AZShCHmWgnf6heZnwDqxrKmk",
  "key23": "4spW7UJmWaxKjxypRFssDoTDiLTVf5xrxP4KjDqWuh66tNxjGQHyDVrtPm6z5ggL6URmP71TEEzMUSCCt5PHovwJ",
  "key24": "2H8ThAhBkJ7pkM8PnfeyY7LR2R4u7NCCNZNMss8DvDrdt19DxmHtmgStxUz5ux5JCAyfA99vdS7bwf9vnQzuKffW",
  "key25": "mGvLf4N8c1E7WjpWtbjDBrhNiWzuxNiVxQ7oNnSokvdqTgnPVa3j2qApG98nh3Lp3JfvivH4bvcj9kHptRjESs3",
  "key26": "5roLrJsFDsxZbiM9ZQJaNCxK2afjAiWcgNV1c5QahYe2BzMu4ZcCMWih7UeTevNgiqFDWDF74ciQ66jJUnF9dH9y",
  "key27": "5P1V5jrxVyDhVqu5giMc3FvFTp8g3vATJqEhDGLRLQUACGXccyB3mx8hKK9cK6kQdmjM9jjWGtsfMKf2AY7FAvAE",
  "key28": "4Lrro3aNNre8U2XEh432tqDQMeC7YZPTUfEESRYbzeHt1JxwAmmGsQEcpFmdpPpcyYio8iPMJnMC54MAK9Y1pW5z",
  "key29": "3ysWUF2oZ8vtrVakrfGCv6w7iShd5ZWGhK6WZ1sPdGq8ZRc8c6Jt36C48wosbgYU9WHBV8wrUoBa3oNrHdU4n94x",
  "key30": "5G6gd3U4nUK349nH5PEbQiPnqUgFQrctAnrFSkCFZVbmDsFTfbMEdY6twY56fEVLeuvd388FkzS7M7XwSjHsUhZv"
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
