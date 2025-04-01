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
    "56UPvDjAds5LEZDpvVu4w2ju3BB1ccGV3XXtSFDPiRhg9PAB3q1TeA2suthoRn7yP5uNeF4K3gEk8yDpnFMctoJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SXZQHUdtpoNaD6mMRZZQLWoDKX9dkTHYRgtHuf3LYa2PEWXrZuSVmr6R2P1ENenyQWcS6K6ffU7TEgtsBuBa39p",
  "key1": "3vosbhYPKo3xTrRheYUSMVkyvppzffsuRo7vjyGGwDh7Gq8Jo1uKafdBBoWPbT1xnwSd4ieT9EPE4rL75XaUWkbm",
  "key2": "338sZUrapxDrPVDG3uDkPR684Y1c2hpUJv1cdVPokJKeYwovYaEQbwToLxw6kwejUNzdJ3ZxgToha7piCKqUEXaN",
  "key3": "2Jz5TtuAzDh6c42qZUY2h7JctDpkmUCVVL7oXNegjrCG73oiBFq8Zn8tbe2LV94T3EStjVVjCT7QjbzeTrkyg8ob",
  "key4": "5uySKwwamuXGeLgjfJMPZ9wGtExqcNGx2MGeubKXDCiu8CH7kCzVLx9bddz4ExpEkBAHWawbDXTscui6t1HeoB7x",
  "key5": "3KrUgXEjsotbkX6JqypBzuRiQrv3b1Rixx8Ng2QveyzFJ1YodBZDsQuFKEUsw2nRuWmqzuvELJHKBWcXwoBRiYox",
  "key6": "2N5RJV9V9PiyXaiSp5DEaanhS7cgPtCMaYXJejUN6yg7wBhmNK5GEX7imopxkzxEWaNZY2n7iLU4JHKgCBbJup9K",
  "key7": "4kJ2BN2y8vgfAGyruGXG9VsHQjQQ3C5qctRxRhwQwBoYP5A8XHN8aA2v3CQ5pw4chAXdieH995tUoJjSmNYECfC5",
  "key8": "4cXCtJFrTWbcchJf9SbJzvjmiehj2kuhzoY2rq7km4vDd33JbjWj6qvaEcSw7eDtH8mkSVsd92dn5ZuXXFEEUjc7",
  "key9": "2dFwyEngLkMm8nw5GBUmo3F7boHRkni9apZenNjfgJGRyHC8JDAKkA3VC6KVwWdoFXdYTxd2NjbNqfG82jMXPDbb",
  "key10": "5zGtSapkHdjWLvuNX2MLyrVWh77UAquwNdRREMmNwvytftirJt36rHWVZsmdkWGDH17UjgAaFEfGuTTDhmu1NnND",
  "key11": "3E8Lo2RRKYCnfugrwwZhLBF6ktgtzV5zwUWJtFzBXkr7ewAAskrpQtSZESEkjpYyWjus1BXjuH6EfXtMZgvRhuPg",
  "key12": "3SrUMjK4fzGPkScWJampj1DTyLkDvGkfFpF5jUjgrU5Dmm2FL7V737tJRUyoocUaxrK81cSTzwQzAr75yVUfqUyp",
  "key13": "hc75E5bXyYWwugpvCsSgMvsqyTmPA4QwzN9WZo5Z85yZ4RydfwHw9MpbL5EJ1rxEDFHyEdKx18vhiQDDFEXtXc5",
  "key14": "2Yd1nXgF9YiRJ2pr96MhayRbaqPZLf5iGvrd7sjoC6AqFWizsYBcnaaUjP2Ed6xxVjfsEJjWfDVybreJiRNYT261",
  "key15": "38ADAKTSD456XCK2b2VNNpVXSxo1gPNYDAjKs6yEVpVTb5EzaD9c7mBQY1dfnT2t98EUjpoA5wi5dcwhiSt2a1XJ",
  "key16": "5XWAJkQ8sGTPNubtRW2asCPbinWnkyYNDyC17Ti2buoQHUzxQ5r7SFnSFZ272eoSHApaWM9k3y1cqLg2mu4H8c31",
  "key17": "4wjf814TJ3VQEyqgQSnYfyhhGTAs95cEcpSR7hzkqfMWdZAk7uYdmTMe4NuVLLGseHsvwf8NhdLa4U8hcLRXFHZh",
  "key18": "SsbKt2N7dj2trb69tCLgYUAfpfHh8jxqegE427DP96xUvG66eqfNurhAuXCUnq71WKiP7z7cTSnPM6EjKdKhz5x",
  "key19": "2Zr2Tm91x3VEWESDgT9SFJEsMqn7uFr5MjaatPhqjbbDbTBB1KQUpdLUZhvnDWdKMycKh4w9zVgGMr2LwcqztqvQ",
  "key20": "29LfczMJwpMhYMiXZmFGPcGp2Bni8mWxgKRGZzLDB9DAi8wVRiWGUdAsJ6vg79Ngpj7wjHtrbGmYZCmYs7Ag7m9G",
  "key21": "4SUbLQQroXbBqZwhEp3C7UZhQXMviqgW7V7c8NwPBsyqLKS6mzapFzqUGWVWNh88P6Vfhq7n7fwPEw1L6Qea6f2s",
  "key22": "2nFikp1JTUTm7eqeqcngN2Td283gAiPa3PqrXWsoz4qVp7Gu71Rjab9v48Cv5QFZStmPofcNNtJ4Ps1HK4zZofG4",
  "key23": "m4Xbu3k2yyBM3jcsKU4jUKVzwpbrVJeYUsrL5GkBgtrmQkKiipTrGoCm5rQcuEo3ZEuQ1Cy1envVgPfRonXRqjP",
  "key24": "d2Gwg4YA34Uxbp8K7CrdyFhyrfvMcfhFj1eUFeW3fz5oFAoDhyPGpq12ZNJKQ3F8C346p4yd5iapEHzG6CyLBfM",
  "key25": "2XNUdRg4iPnPiJFAu2KJyJUaDeKYvhqL2V4mS4ZDjBr94TKw4vUhgQfMGMrvYRe8hcCaJPHLQV8VtQXNLLnnvaYs",
  "key26": "3JfvaPgUKGoFnHjH8qDhgW8RmuVUt1wyCuSP272VK874F27kJtEVwrnEh773pqLUJrZoMu1CF29cFyEMJoTcWwUr",
  "key27": "2GmaWbMZ9sQKneaxZnHn7ihSQ9CMgggMeEsgMrJHvG8QqWFPonZy5pruBX7n82ykc1WVsTHTnpUdN35P5Bw2fM1r",
  "key28": "3p8mnJa9MFH4y6PNzfF9Bqf6TjJzxU1so88WgRBch1Hv4VvyZFSFA9B2BP5iKpyYRBjurpTwPz632rxxL92uMUC6",
  "key29": "5KaxJsLgFvZi91MCpgqVHV7QTw6rztnTCgEqYXy3uoC7BE3GoSWFXPEHpiQdAbrxrARDYyiNRhCB13wX7qTCTJiX",
  "key30": "3cvg9ayYT39Bh1G138tvDAf2skX7GbcUk6syi3qkSAaoJZgbTDVrzkJjB8UfnHB3PprYp7WHK7RxbTBuRWFb5jNx",
  "key31": "2UkRJVk88yU6zctUWRhe9i58nHeDT2cfJbbmfUGYXbqw7KedfZzGSYmiXnZt1gmsTf8kB3oVZseTKR2ASdURMdxL",
  "key32": "4iepD4VtHoHxBYc3YHjqXux2e6BoS32QykhnTNLVUVsp3y6cLamYohzsxDKv7WaP1RNhtEXBkYivJmrAVfZZ4KVk",
  "key33": "5iCZ8V4VQT2RLvsmX3qN99dFPSiR57BAdbfjgybXKPGVPezMHyj5aQBucMRpvpx6f9EVh42bUujaeXb5mQh7smYf",
  "key34": "UdWTfVtyTSRdTQk3AKSdZ3zomrcUiwXUXqCmLpyvz3maiMKMrxDyTu7mFWPgHyAsqC1GmZKRoHvabbqVvAQPXzv",
  "key35": "3frk2q7zyDqp7YjtFG8FEQVMfc7QwbQfnJekRU13wf9FRbWNejEvfo6cmdr2CTF8Cx3bC9eS8KLDtDioiobMbBh5",
  "key36": "yyk2fvNK7HrBzKeRQVWf4V5BeMcujKgpNg8gHTZa8mwaHjRGXHYMn3RAKszDenTwf9U3ELokCZgghJP9evbShAz",
  "key37": "2GfQGcgGemdR2ecXo7Xae5wF2FZEmvHgwgNu4mjMs55PLoESWWfTkC8Zm9Fe172Hx9V3zCSXJU5Vt9Gie83Nh7BN",
  "key38": "3XJkL6K9vVuGTiQJCi7DTLAeihyYUdqCrAA3inKsBJQWJUrnLFSrZ7ioZ9uhfJ1Rkft7ircUaUJAZiTA9Mw7ibcU",
  "key39": "4q55kgFHpYuYhYdjoLq8K9B5bbAdEJjj15TxVmqrkLpsx2XioGNe2BHxVhoxQ8VFRxxvd1L6ywNyaynaVWaRVAuR"
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
