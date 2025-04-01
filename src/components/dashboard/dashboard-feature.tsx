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
    "539ZnH12C1cr5msMntCK4X2NnefwMZh2cDYmeAM5Tpu4CoFy6djc8edbVJnjRcGsFdWRexfirPFEaTD3VPcv9jLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31X77QdGHZaHHbc6CfL3KWyDdsiCg5B76cYcBQCRWMcF75wQYbNyf8PAgua6atHKGAx32SUFfXU6hyvMcUMJRzBG",
  "key1": "4RzdWm6wpQ64jZD6KWCDc1FkKLzrksA4XELsmSeWidNfAC7A22k5XEZc8JVdUhAhTPi9x4FKg5A3d293RwJEhBLb",
  "key2": "4G6ZPVSphinEpUSX47xP4AmsSFLEJoipKr419aaHQ8nQChMiKDCMSQpe25ULJeDkJSsiMEbF5uqyjACRXRT5cTf4",
  "key3": "5oF7xe43bWK2c1jABgXgBoKD2c9cyjgaL2RPXKynDi6VuNVYp3YcJVgwu9nzHvWEsPGuUTghtJzay4oPToCyVH5G",
  "key4": "5aB1Lub5PYsmfmxQe2cNGU6tQw3zeu5NwLYi4q6aXfLuEeXZesQfTe7Ku4Nvb1Y2Bt52Dvy5QdzjtPtsCqjD1S84",
  "key5": "5iaWeNM4fbhz6KhXqRPa9Nnsr3DEeLt13j6kK8ApiAoDTHv1AD7WvPQWmNTZUgkWubK9Ce6MUgSCePfMsRbmYET2",
  "key6": "3y8Mwo7XwBLvEkGmrYPNrTvkcq39fYb5w8BL1qR39dWKyP4sak9fgqUzCSnrL7XSmZ2nBVciVNCwAfN4s8DQbNR5",
  "key7": "5ERgjuQutkSMpFKGgKRTzeGpKUMmZpN4Gsu61yZdD5hNmThJFx3aHebh8YoxMPPrcm6DoecpC7k6ksaTXVbTfknF",
  "key8": "3fePRgkRx72gBtqXxLEWSqHELDcB9NkW9g1YafJ9ah67Tm6ksxusNnjUpgkgNnX2yfFHvdQfNf4oE3nPei7HDtvS",
  "key9": "4PJXwx47KXtXKBoUz9J7X6Pemh9nfSTTyHzuBQmBiPaMA6UaSCQhj5WCYZLeMFsUFsWH7aR4rENVD2862E2NLh66",
  "key10": "4ZZqtfMcVaGDVibApfvg9Qru2E2SvMwCJo6uF8NK1riRbNzC7HL3kaZwrBtP73XpeMBm9jptTZcWi1S3c22jUqyf",
  "key11": "2YTrPyjeTTbwzekWt3wU94X7tz8oBe8Bp1z19nUQMqFSfDXLNq1Q7Zifmb5r4c5yL8A3sEZsmtkRdRKoKwZGz7CZ",
  "key12": "2DTR8LebhTtzYPBWSE1nEGFG62fqVurVqNGQBf6Mpv7Xbg9qHmf2bT9aZBRRon4q97qXnKr1u1K7ARmMQFjzEnZi",
  "key13": "iUsD2MUeFPmGKJbxAveF5Uq5D1zdEvuyP7T3GX4o3FpenB5xUScpGTzT1gWbubqvgXJjNNLMjxF2uQdxbEuPomg",
  "key14": "2WMukRBvgYSLiZn3sTLZguexydNFAQArR91nd1rh2gaqZihd4dPPs8CfogTjio4gus7FHPCBq89jQSpLjAd5PNK",
  "key15": "2etR2ApqgSd9tKKmF1xcLekwNQVDPxKwk4HjAswPzaUPwMan1GAqiGsLdfX1ZuxJdjjqSsKDVCZttujJQS9uLt6m",
  "key16": "QyemJuxenns2XfX2Q95mKZwFVmwWdWFrrjz5sUWU7FtRM5TtABBPJRUWPg5yWpb1oxvsgymSGyjhBawt4ZGuNzN",
  "key17": "HWbEm4RTrGwBHiFu2W9EoSBFkhTwssvWM1nZzqduY4s8tk2itMceVyeBb9piXdAU5a31FUhfMqawuwtiu3R6HBM",
  "key18": "35kxxmaa2RzKAckPWmDMUbybmXuh6CgqoxEL1gPFnZGFUdCi52dTY9SLLVm5MhybEPjwMyyN1cJcmoLTxuFpKxSx",
  "key19": "33zXJSVsSsNAW73entWRqaMBkng2VtsPpVk2PWYvQvSveS8AUEksniiB1gmCcq4Z6NHeFrEGRtiEZZFnXFUbKPJ1",
  "key20": "pXf31RBFvqqt7RbDxDAyFCY2x7tAnnrdMHt5gLgiQpB8ggiJvayLpVrYYNZph5ZNYNMDVDkYWYJ9PXHbfiCb7ia",
  "key21": "3iiHEZVJGxan6Vqu45KbVLfjhoiLHLJz3hEAvg4pjcKQvZbgFd2s7cEEWtTjkLh1dQZvZqz1awJS46CzXniyfsMM",
  "key22": "fUn9ojswF7u5sfHQTUQZoSXpj14eSwJGmCuSNsjko4UKsGpCu5HxwCsZL8BPLXDuM7BLCiNpNy6LKsWbzYD1xT7",
  "key23": "4U6NAKpjCJDEmaq3Nn3P3C5C7pxo5HxrNHaNbHrUdJcjpFVZhDLbC9aiuczqoyUKxhwU9wVGG3AVvdHNWTFgbUVU",
  "key24": "3KiwRZdXf4N2Kvq3i5kvRfADd56T33KaTZxnpB3KNZWccPYhJtSnXPygp1MPMCzBq24wMCWhsVCm9WvMqSgUFZ9b",
  "key25": "5eE3TLX8YAkHAJ7TWCvRRxtwEP84ZRvfbQy2EFm5kthkx2JF4cuse4nhpwKPjGGjsbXzUkhhELhSFqVzAtTumiZw",
  "key26": "4FJSTAD8HiRBS7oqWi8eS18t4uJKwPJ6mCbPq4tVLJxxUnGHzAAeEAEnPWx8hgVt1H8sFoktbp2ncAiG68P92wmV",
  "key27": "nBz8ipLFxeFmW1mrTPeGRKyeU1HMaV59qqdx7fVCdpJCurVrsdaxwvHw7K2mvLfeGN7oamSML2zSYds39Agei4L",
  "key28": "48zUGbuRYQEsvm9kP6C2GoHkrP4QCcaaxWDQtmahgCM9CWXX74hgtdJYah4mwY48HnKMpCnq9bDdYmPYZfy4eqYU",
  "key29": "hiXUCVZWa6DK8KEwHrcYUdEjP49YBuFSicjJSsMZTVXtBAvpBvR7kBkWmJShvVZN6fGfrocBFPmKHDvP84fyw8H",
  "key30": "2Vme9cES71suKPvrP4Z26DNroJUFaWoYBv15EgX9RyX5KxJ2ZPFR3hPUFryTQch5jDXrtuwU6LMvzuP9uLgGA9j",
  "key31": "2BbACZmd1dikzxnqzFy7X8fZ45i9imQvwpr6UBHLvNpSiyejidzj5vsx1Wywr75icccq7KDKgmAJEiaSMz7JzMcQ"
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
