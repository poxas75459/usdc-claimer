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
    "29ejBFDuTTye1guFGPtEYe8BkPs1EXNRngQ3WzKaR3htYmeXMnpjsUC8ceVCCD1iTxkw8WnPNcNoCxgzK8ibLzza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vxH1tw7cMJQrRUVwZBCN3MUJL15JbxX48zCRwwDp5r9uAu3rMy4ygRCJ9QHG49u4idNyCm234m7uRv94dbzwtqP",
  "key1": "3WvF8Kg6bG88MvjdUDjh5TuJT6n3GU45LuhtuzVzF5pzNYwuV1w9fJczesFWh6U6iLwxdAUgsR1vjJQqyM8rAggg",
  "key2": "5gxPxdkkwRgzc7WVeoHrWjKMmpHW4sjN7Sr776UywtQhznoQx6avo67KxNokh7xh7YgqfRGKPLzh73rn59MfFWtY",
  "key3": "5yQsYq8aUkKtuPs9PQSdYFpNxGPBhcCNABnsiMadBmdRZzgYfF7hvgf9YVARnPK6fJib5siHE8LpMxVqxbaH3HjV",
  "key4": "3uQ4bMrvPX7pgxiF7A4uAhCWri35Do9AYN1nwEBiffaKy5T96dQypkDmdm45z4qiyNbXn6KPkUYqoqt7YNtYsuSj",
  "key5": "46HkU3QHgkHjxYCAQYC9TvCNyt7T59o1sgKYPfj7pBjXLfe2TdePwciZYkZc8bceySwBreoURXYXJduCExJ7tQRm",
  "key6": "5gbuVHsENhartCK5bLRhrdDy2J8SH4jKTEgJWzjEcQMKNJkMUZDgdpP8d147j3rUZwqbRHuNAnce2gSU2XcBRSYn",
  "key7": "uwSaGMDuTTa48VF19n6e2Y55gAaLqb6znKRE5G7MZJULjUJw39QwqvfC6ygxCUuWoFA39RHBtBBAv3BWbd4eCYj",
  "key8": "3v3mTxJbekNYwhZ9gEHRcoAAmAxPN1FAgLon2BjHrhuNAXJwmPoUPrFz6695nyXVTPeJLWH8TXohWAWk8e9495do",
  "key9": "5YQdyWWmMgiR3Aou1m5DUcxdVvpJrRtsc5rsdJHQMUT8PqVFRznqQre54yYxeFcPCYk7KZE4Fez8X8LpokjKgwKe",
  "key10": "39tPmjMHsL4j1dRBQjcbpq1x1swgvxZjLpRuRoC3uMbEWfnT9aSoeqjPJ8sJDcezsQWneN2z95PqNAqXqPYy9jMj",
  "key11": "46vsKvMcRsvDZXdZcvWMLm3TgqjDdQF3c9GyLEuD9zdTRcRo56S898bUaMtUgmJ287M65mhAJbq6zkDqYSXigYWo",
  "key12": "57yDJCPEe3zLgrJh6wP4B1ouNqMRoDnJWyE8Zaeh43NtNMcERr7ThQUNSXcHzgyk76psBY1uBcBfuLWK1z4n6kYv",
  "key13": "j6Nf9C5HgfJoSXZsbcEvgxAzcdWhL554vPNEc4jnHmbgjvYWqrA6fRhmckqokhRvxEDKL5CaCFpf648E6R2Yvb4",
  "key14": "5k3d4jZyysxLheJEMDeStC7rf5gFevEtGPJGJ2jKiMTnhRfVGyDCfkQzp8aGGCQAZsPKQ5vhrvn3pKUEwnNKd69M",
  "key15": "4hNQRAQbmSZE1vXFwZv7hA2v1gNAkgRnzRKNde9WKvEDTdQb9yiQ4tUjFXVqSUmUuGW8sQ33ho98sjXyj27Dg5ym",
  "key16": "4m3TS4zaGnRLkRaTRadTwXV6ybGGH1f9cYYGiPxM8Zj1xGMvmWnWMtG95PzADfJayp9vqDVpDYuJQxveHToifP9e",
  "key17": "29JAoGTgv6sz6Sa5EAHYeh9dPjhKunyvJqzzgtEVhE3zcKRTTwmeYEkybW6qbB69EbGzknG5NDTanBeX2zZgY6LP",
  "key18": "3ZK41gvc64Rz6PVDCxWhHX7v2icibVDPH6HUip7sgU4bDYE89ffzCCeu16zmvGRD7TzseEvLgAy3fVuLndoCsvL4",
  "key19": "2ZQy2bhcZmcz7DrM6zuZ9yaVBmWoq8g62DBWxHeDV68fxS2o1wiNpFaAP79W4RHXtXHQWkaCzymW9oJfqnTDKZuc",
  "key20": "3PTZGyHALFEF7SNDJXksF6RhRpQiuCk1DDnBAuYPQLkDZEW2z69c8qiMWPw87j3z5jTu2FpVJGz8S1kFTrZneYAp",
  "key21": "5XB9BZur6QPAJJ5pbeMASs81jNADiZVSFjLAatzB88rc3Gu6bVmZzwsnme9a7a4xKP7RNgpuV7zVaHYx1gdb9CqJ",
  "key22": "45aiRAPfQCXMZZVRhw12cLFgsTY7pdbXe6mehaCyXAcN9HTVVkQMYdxejyVpXqMLzUy26sAAFu68o3jaz5epc4nT",
  "key23": "Ticdn48boUXuWoU3j17Q1gRULTuaS3auNSPVDbCt8qQfKn4A2ytNujwcSCskWsguVPnFCMuDzCWnsQypxFXBxJY",
  "key24": "45yDazg2dz2wYiJcC9Va5dj5iEFMnuvYC9L4uuvokufuVfy8Bn7Gu8b1ZtAaBseRSZ5RLuCPSzzGwb1xbW2FEAZA",
  "key25": "4ReJoMT3vgiDBcpZMZVugXgskJaeXwXBYXHgqp3Z6XzkyfKcGVc6kmzp99fbJGfuL1o3B4rSHGwFNhMYRUQcXUwF",
  "key26": "2xiaFsX81iAWE1JEtgDZXkecfiGtjMDG7Ks9aVSrqiogCHu1fL8SsmignnguKjXpcuJPPATafPuAyAqV8gJwxzwX",
  "key27": "JhWpaLSb2Jc5n126UtYc4AhEXYz1kgN9SskNxgJ6pnSBEpAHzD3Yqkac5AWHGG39Q4itbe721xZhNUafJ5NfNoA",
  "key28": "JfinThcFwNNpSphAuVb1eHnf4YYCqePX43eaMLQYRAB8BFLfCYN13MmkuGHsEsoM2SK9AWcguUpxctqAfD1mTYE",
  "key29": "gEqsRBhf2zAfyYegmk4NqAf82RUAscBxXm4nAZS5NtWgePsYMCzH3rSVqcUMbC4qLouKiwh9qCENow9eRcGqLsm",
  "key30": "5aVMNs6sTjtFq4tCiojLCVAXxzuVfpWTGiiuCR2aH9fjbrtnMSEhGKWV8b5uumdTFnBTP1qmth5rkL7ZJowQwGp",
  "key31": "4Hhpuat8YnkhYFLp5z6XVgUJLSXPPE2QMv2as4cRtbU3cgutAW8FYwwjrXtHgXgDAsrrKriovZ6ni3Tbb7kNHxEh",
  "key32": "3HoVa5V62ww4fxmrwL9LQuvP64w9EHXqHAKsqh7r8BHic71cP1HLTxLG3AWNC6RsJLMPR1b1vGTpCtf3DSyxVBP2",
  "key33": "NVNBiJGUW9mzAyYhFQKvjeViX4SMNXoF4wZ4XDGdjwLvSfCjSXP6j1cxEFc1cT8aULedoCevQvLVJ5mr9up9VqB",
  "key34": "3YyWS5sTsMtxDhQeTg4QQpsacdzJV8BPZJaqCmuJx8ukn3WJ7oB2QeXsi35VPNhyEiteqPV8VeVsNZdzjf2vkYVY",
  "key35": "3sBnJZm4Je1FYWQA6pJ9XVaR9VcrG1ApZf9zggRJwUk5Znq7MmP8ELeMCB1QQGF26J5Xh3AmK6kvLhwFWCAmghNH",
  "key36": "mtD5wJ32JcvZ4K1xKJZkFcMPW9oNEh5FYLEEa1boJP5uFmmfKA6JBeC2cFwF2osYDs4UgDa3hffqEU1mPyEG7fF",
  "key37": "5WbZCbP4bubNyPU5YL9DVqHc3h9795NEGzPa5kCgoVymQVkQ4SLuX7ZFnmvoe3RYAUPoYXLBSDToNdowbFdUPhoF",
  "key38": "3qpCgAQ5bVGQuvRc9MwexPk4nHtB5r3ZptXeEM8PdKyPcJKdWiqq7pi67JrrHNMhiNYuRK14BNrjBP9v79Ynk5ki",
  "key39": "oWRFmDXrBYowsfcouH9WHu22X6saeLxENY4GtAFFeffHH3bMRyB81tiUWZED8kvxz3jfHVytnQrzCukSC4pp1eG",
  "key40": "51RHjzPdZAZH4zT5odmkrCS9qfWG7y3hXyf8uzuLF1XPh7DWM2VDGW9s74V4YKtjhPtJCjehMgi52eLRKcmJNgc7",
  "key41": "3NZurSCEc85t9WXDSmMsfJQ9cdYQRDm3F5BroezcFeTD5MxByu93GTL6L8KW4aibnhzb3pgyxaGMiLhVGzFAjEhB",
  "key42": "2rrdwp6U9se6wfcdfac7V9xj4NECbEFrDkbrxFLr5cPYzqPuGTF2t6yoEKX2XdYQH4Sh3HAMn8HMkYMeaSQZN2sw",
  "key43": "2TnLPvoWsmGYGtQwKWsEbQjxcfNfmQMobfHxHgiNG7CAqz7J6bjtEyCxmPfyCbHLmbg2NdPvLzqhHN8T9NWF9RhB",
  "key44": "wT78sfu9Tqr7GHkvkNeXMp7dCc53BHutvTZcqtEJVdTUekmGaYswTDqqpy82du3oY53CfEePbnKsibxvPSkSQHx",
  "key45": "xcYUKqETGfmLL35Cy8dC7VE2B6n7Y5DtrNvg1HgdTmBBg8MbYEUZweHEXQQFJChT5KbXoFyPPMn5NjmKXS7aLx9",
  "key46": "3tPaQXGpCsQMTjBUMwboxVNZYdf82vp2cEBEErmw6mfHDVZKctEFvfN3KupTCWdJyCkYSetXYYjfR8rS2bYo3JZ5",
  "key47": "4QD6ygeFgFCSPL8Jh5x3mw4vkayXzfztt5GXcfuRnkekJjWqRtzNkKc2JUP5fYxRaHUapwnJsc9VMB6zFBjfLotQ"
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
