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
    "2L2RaG7rjcXmNXp6iXCMy1AVSakuUKNuV8L2SEz8vZUGCTmByT1fNVDpJxPuw4YnM6LuFDL7Ai7QYiGaYRgntQw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w5RfBwJv3jtPRnq5iSZ9AdjZbSWjuh73MyKRYaPqhedzY9NqSMPfpbreygE6hua7nD5ErgtGHg62SucYiYqZFzi",
  "key1": "2RtDgNohcrxpNGdwue4efSPiQAiDQ7z67vv3p2RrFvwVA3aZmXu7e59aXM7Grejnipo4TPQrMa7Y11zmBh6ymjeX",
  "key2": "3gcuZE2heNLMuj8WHWnvNxnGy8vQfdpxuYwG3wtx5si1pV7RxzM9VjZWv3ZSVdDw5tGJxYT3B7PZjwLvyUVbL8Dk",
  "key3": "4ghM2VQMohmDgJCYDyU77J7SUpNauFxLnWuHCT3fWY5yGC7K4D6NenXS1ycH35gBiqK6LjzifFSozyK9kAURDxJj",
  "key4": "5FsJYwn7XBdm72Bai419xRd8q9H1jAqtHeR2UdhQc3YAY4WZoAoN1Lc8MZARBzbkWWvuwPLyFFMtNeLi3PTd3h2J",
  "key5": "5yAwt3HrHMny5YSYYT22zU7sdPMZgeiWUf5cimqGWjpQDacTDAntSTDe4Uh77My328ZHdKkP5xCC4BoU87tTghN7",
  "key6": "5JRhrR4QENEu2vPgoGreeJqa2uisAf3dJoY36scquCTUcboTkPeVyuLufgeVPRRL376nwHAgUWNWHPDR3uJxciET",
  "key7": "4f2iqWWTd9ry4QUXxw7w18Ntdq7obuMCcrWDUBtj5pCGJw1Let1GK6EVHMCj41tFJuvuaVK4rDKCW5CGWLLL2QMW",
  "key8": "24txuDWsSCA4DtKsT1X81U1YwzDZ9cVxj4YEypq2375vtWXD8aNETXHyRGPhdksnfknhNJ6pL6ECEyGA4AChS6Qz",
  "key9": "4XqGgMYsg5Gn2XAnB4daj9MBgoA7ZAijeobAAdKMWnTaxHMDEqTenQVmvFmxfxxQ1r4LJeiDVLQmGZhfByYA912N",
  "key10": "57KVNNEHW2SRQxu8J9VJXvf7V3Q42tzmC2H7ZBkknmtuLKTpqDrStRocYWYy2Uuk5uXKj13raPPpzTfTXhAooGVk",
  "key11": "3sUgb5Krt6h2cmXSVvB5UathHnPbL4jrcCUNGJ4ZnQLyQpcKcEJmHTWJMkZxGUYQdFHebai7ygipS5T1SBFgak8P",
  "key12": "5pw39s8Y2WvT76sAS261D2VS9eXB9VqEaYssy3iL8J5WoK2rSqG5tYwzWDHNnxEFn6Z5bH6oDtfdG3Z6ZNhrUnck",
  "key13": "4kmGeMyxTdQDFuviQEvzNfv7zTGnazis7bfGSMD3uuRM5hrQcH9WSzJFNa9MtCNMSud4gZ6F8Pi75abzhxh2GTzp",
  "key14": "45pde4H9tGrumvsKm94L9rk2zKEwDjTN7J2ss2HdAWXf4CMW78dRrxCdDtgHeXFajjeBTDASa5akeYULjiAdjHz2",
  "key15": "3jFubJH5TAAxPJS5pSb5rN6kFG5JL9iAQWf1piSwS9wgWpS9ZfN25kS9KZpVTdD1MqBqJFmxhwB7mLSwiCuUQTig",
  "key16": "3rPNDkFHkFF4uKEYv29Ud8Xeq4g8AcsaJuyjpJbo6GknMPPe437AdLNac2jch7wujRRE2USD3223Xk9iPg83V42A",
  "key17": "3RTweksAvDeFAtbrZVrwUc1HWsbNg4Dq7Au2y2gY1KfysXpYJmUDsyUTtMgQftthqZg7gfDBuV2xJ4KxiCohtULu",
  "key18": "51mMwRVRajgz8a1eSJcuqWmhmWNq5Mnk9zbQ2WHAuKtWYA5ony48jYmQbPtxjnjoGxEE2dnrztn2niYsdgHT5FcA",
  "key19": "59uz7FsPaMkx58rueBFFUeAkQdGqbWEDZSrpwWjtpQnKgCHfC7xRFPAtJ4DPb24wFPcs1WzsQ7BdcVyuiqysbPMb",
  "key20": "VEeWry1c3wYiedMoUtFBgmdY84seyBqKLVs4EZbGAGe9AakGAQvbDWiMnQSX98dTWaPEsELVYDGniHcnZQzNjwj",
  "key21": "3nCvmSWHrSL1pSn3B26wU4gT1Wh1PjTDYXTXLgwrEPp9EgDUHRM7h1dStuvjK82W6j2BwKW63gMGk78CTYUNXwUd",
  "key22": "4moLeFdgQNF9m7o6AUnjiWrB4GxAEW2M5exZV54gsShG3CV4AefjtRK3RoxnVCftfZD3brU3jh6e9rjAnLeqCobv",
  "key23": "5CH6D7gXKpdiJCpmfMZ2dSqofwZjqeRRCDcJnysQYvvNoBGGoLYZ4s4TYfKMfC6e6bGZrUkKsSmUnEHqTNmU6xAa",
  "key24": "yNM5jaNnJFmySTdMnLkQzyNwzjTKSxJ1r629mvas1tvVdUhCuRMSfaWRy9dVFKrwegLY9RP5EDGupVBwto7jFVh",
  "key25": "2jYnRCZXTrNFmffoLkLmVegX113o3KJewQRa7voZqL4gvF63znF3sEyH5jmnT2cQoaSpSPAya7V1sjP2stgJpmQi",
  "key26": "4x1SorYZta6MNgJqrMPLKPnUqHfEf4AkyX1Aa2MC7tnDhHwHxc5cTcvNbBHUe5JgY1uiKQfdfULL15vEXFXQBVBx",
  "key27": "3macAXYmWn3BjZJjHLZLhVYD1K3dYoG3xsUuXfXuRipAX1qSHEqZiejAprM2BR6LD55K6rhwjuG1z65TS4XB1ih1",
  "key28": "pWX46YPMbVkhd96jU9UPrdj1WaKFXJjZRaiT2RpxJJvzfT7QFxn5RAiFbv8xHpoaQqo6phT364Uxy7tQvuyLC7t",
  "key29": "5PLaF9r2uJHfHEM8KETcrrLsfpmYrsjerBT272XG3hfpDbSH2vA4NwW6nmgC1cS8q7gh9aK3bm55xAULaZ9aGGXK",
  "key30": "4xNyGLBm47J1PFLH8wD7YB8jQNybp5efqYxmm7cee8qjXSXC3RW3KcVqkUctEKg9nnr7J9yppDcZfPAWh6mL9hJt",
  "key31": "f7Y2SBBuNZM69UU91YH1vBFsSz3U2CmcbUKwShLFwHu2z3e18VMmz6rQg2yHwLzcKT7UUcy3hwLvnt9Tt29kt1Z",
  "key32": "3gwk3xosNVSoaK8UFqKvJ2eb5XgN7gEzVpTn8wrLt54bC2vR333xDFXpJa6hpgKAVtoMvDsUYdV1gDubk1149Eoc",
  "key33": "53V1SAVVskasq5thVG1LeJReDDySJZXfrc4SqNSWa984jSvMmjBNgHGLtk3xywSWL4M4gVzRPBK3Gpg9gXYiFMWc",
  "key34": "2Xb9xHWceTaRGDGsGVFPUjUBZkDW5sxM6h7QzK1YD96kzzfG8CC2s8cScgVFzgD4VrzSQZBbSXNqgnhwyNxsBbJR",
  "key35": "3sBxxhV6S3dGB6BqvhNM8PfE5uYm3aLJM5AmGsnZMo1FstuHA1FKAcUpfJCb8QLRkpmMz9tjMRSAubNc2nx2JJm5",
  "key36": "2YKBgZ42xRfSnPqbqegAi1tkM3DhbYTCfePfqSRgEs73h3oskWzF1tYzqJxzNJE8TrQ6AyH1CTG31hpnPMbFn2Fs",
  "key37": "4a1KxN6wVCzdWhZ2mLq7K1MURiomf9M7JioZXtituiwLP3xXvDVeKNyyVKvUHUYEGq66sJ5gup3iYjvASX4XyvJ2",
  "key38": "dPiHwsZ8RTR2hLUBQVj4Y2FxatGEYyvfjgpWMVoLsKkfsfGkdYLHVM12DhqKB9FRKk9SoGpac4NQG12tmFbueqc",
  "key39": "2trqs2MoTShHV4u1tDRCHELDtBgKKpjSwA4pWFYR12zru3mavA9T71CaZfWjvHbcTzkaoZrDyX8mhhuBvvo3wGHd"
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
