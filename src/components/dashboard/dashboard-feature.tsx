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
    "2d89YVAvU7xeC2BNfqT8ZKHmVkQnZBK9F9Bt3aYq8Ccbr3LdVvbZG1pQwfGSCNubJVJgAsnSBWPTiYnUzu8aA8j8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kpeBnkHfQSs9SLc32yiLRKcdnLK6Ppsw298262ikTRFoyf5wmQbCacjwMXg9qnjaJU273gc2orGSJMwXjy9tZPw",
  "key1": "2PuMfjbKnsrbUwXPon6uK5KVPod9dygdj9RgpxLc1DBK7MHPuArS28jhq7F6wycPzXtWxpjHBJcvFL3WiKiqA9yu",
  "key2": "fXEGo8vxW2nEpUJ6zMZqks1ie21VoCUPAWWSMK3mij7PtXtungXLFRVZFmLVTZJW3nLP9fuGjWJm7RGjubsTUBz",
  "key3": "5ox5mcmMcMfY4V2WhLhAt8JcKZiXZMovWFqkBnM8cSTvT86mD6t22jtK3WRKmxNZYRh9obSptM8dfaNjkdAsvwa6",
  "key4": "5W9Z8g1SzY8JTe67S6sKmopzkhCwHb3qVZFeRwWFfs1jkwf6UFMh6mTsHunfcp12PaXr3yHJb2Jf6dYNSmzDtJbG",
  "key5": "2RSPVhJaS2V58skXUhHegYFRnKgiBW2aFmwWhx4ykiwQH1syiAZBWYVkDmfstA75F4XaHRRBLX2QVr8PNyy6g3g1",
  "key6": "5Chiavuwpyn4uuehStjB4apYUUs7wSoYLYsKNe5Ziki4pk7ypHtHhzGjAGPCQtocWvXcq4YBG8psek6ATS9GdA4W",
  "key7": "5mrb2WhbkRHzsCGfM9riHvP8S8RwxWeJSdongVfjkJqVx1h6r6kh79GW9w33tpeuzXXXCGrVjikxvm9aDkTZTDb6",
  "key8": "3t2QqChnBtH7JZ57uKAeuU19RTFMXVwdEZnPTPh3rXM7oekH6VupeAWVC9oqiBSeq7MMHKHDULZQKS3mtuWJd6E9",
  "key9": "E8Z9disKeMiNAZE1tdwsfQB2aLCfwu2gKy4h8PqV4RmgGYKBn9mDjEFbKiqmZQRdLZ414ku1hjg5ysNxrzLzWvq",
  "key10": "3LzYMRtonDdUuU9HwZmNZfR3CbLv1cpWzVUp9ohPoEiRNHiAQgGPRtEJatacxdzn5rhGL1vPNQe7D21Ho2bS5JKQ",
  "key11": "4Xu8BoktNn31J77zAEAepJ2AV9zYbZRGQs9qkF32Zj1LtUdx4T2dJzHzzjkK2aEzbL3nLi6rqLmphACA2nSA1qjz",
  "key12": "4s2iFemMCzjcPdKzJk5c9TwEwG69JPrk9LVgTtRWUrhF76DWnA3PkaRTMLa1ZxmyF2y1HeeWcoUoydV7tQFmyNen",
  "key13": "DHPSaSYtMmjLA3zsdhaNhFbAFt8EZ1VLdacAZJSEkdZ3J3WQsWJ1RAHjo3RxuDK4YMRRDgmN4oPTa9hbzjzPN8X",
  "key14": "5hVJgPpjh6eW4f5QLURMe6e9hoGVwy3SPY58TNej3rhuqJ7BZaSUjoncWqY5eH48jiwdFo1wQWeVpvG3FM8MuKfp",
  "key15": "4RfkabdVPBoeSakyjRZHnwur7N9YAk9foEM8gArF2XYh9rhChcpDd329sm5e1TivwDDRq4iiR5oCkLEKjQQ7gYnj",
  "key16": "4X3raEDyGjoxVXQGfoZdoagRZKf11X6wtGUribb7F7sEVrxd6QRDmhJqoKbtgYp4So4nS4n5dm4bbFpppBCkTw2u",
  "key17": "2HMT47GiJ6U4rfDs5zsKWLyb2gzYkS8Dd22ji4SZ5izRN2XBnrcNPfW1x3HyTg1dYBsxSkKS1qH9pfmcwDwBqqB6",
  "key18": "2T9NJePudJTjvXC27mzXYpGbkFAzQA9Smi7tHPbavXrq5PGEss8bAu5FsxK3EN9Wfc7DQNaMQ1kPvj9yZBnCom7A",
  "key19": "24fX5T7gZJm1L9VQ1NtLRkCKNph6UTwfHSGhDPbUJHquniCAZNnCVPKYuYqjDj3TbNQE8F73XRwqnoy2TcX2DjVC",
  "key20": "2Mke5b5yWrVs7BJNTiLCYcDrCTGTLwTFd1w8pKguDrUiQBWYxnExKnjLfvH6SdSkqqZw7Vkt7mhqiQLKJMnwoyNk",
  "key21": "5hWnAfG53DxNui4aX8AgFSAXQNR893CHfu4M7E9Lahv7Pfu7jXGkwQJQmHHbPn3E1PgboVZp5ndxuCfT6LrME5CD",
  "key22": "4FASrnLmRw7QLMoycQ5Ez1HpzHaQeftZuMUkQYJSCa7SLXdzPiFmauZ9y17Fopwu2aXx8kwHcNggpnzvsJfPazsS",
  "key23": "4MYPruc5Tzj3D1Zr6cphVThVYLNcADNFYfXG4RZxYdFhQuUBjXsgg5aLwL2nsKRmGbt8gDrBnWrb9ygdAL3vhN8x",
  "key24": "3sDVsi7yYmGbEiWmgbyATh52XENu1du8iLKpAW7miaHaDWraz3qbeZEur8KU4aJQs8g7pyGckC3vJRBg5Hht1hvh",
  "key25": "3jYmnowq181BsGGdEY7Kc7hdHEdRqtX1dpYxrQjWZxhbjaCm62pmPCqntqqc4mGziKtAJ7XJ5HvYZgPwXjYom5st",
  "key26": "5zr7F3GYzCNBYrhiJwYThtx63eRoS7sx4qz9FxQ4toxQcmrTrSG9WJCsWBzxtuEqBzJhnJDZLrzM545tC443G4j4",
  "key27": "FqkfoeoQFnb26J7JBbvN5gRkCqGmXF4yMAHJQoPERMkBbqpWSjFxPAwV4sRkatwAbM6feVSFAsjkeEDWKMtJ3Go",
  "key28": "3wNWo2snRkPPHnvVZhtwYbEFrECtPVaRD3T8Sry7EFoFAZnvjARn5YPhrALf71CmiATZTHYLmZdEvCaf1kPd2rvD",
  "key29": "3M7QqhKuhnJxuEVgWDWbUxhd5pHPr6avrQksLbSPomass4iU2ppaDxAezrd8ckEZ3yfe7JGFw7kEM7vswPBDEa1t",
  "key30": "65KxJ8yJSuQDEDRbbBoDd5qWRCcrtNQLFjKvXHcUS6fjcSg9MpqggMyfWKtZyQ7iCcmEFmk4m7eaBeDFXb7CJXqL",
  "key31": "5AQvKoe8vxkV4YZgAqXiCome24rCLXcrySbzoMrxDxzQiqKUzSKwmuNmHdDHCnkn42CLz5LbKCNZ4og1P2ok1vwJ",
  "key32": "4MKt1FvtjXKQSzaBaoB5CvXCGoYass9J1Nwp38B4JeNtciAw9zQDGJym2Tvv9qfu6X8og75VWfij2h3HuzJGFMDA",
  "key33": "5v27Qonh8G5Lb2bR4a9tr5oJ1qYfH6VMxcXycMc4ERDToWUorUX1LW56md1bEET8kKkD935zPUVivooJnFCwuqyN",
  "key34": "2YSbaKJLDP8FK1cefQbDHZoAe9XM83Scwi9r3zLwiPBuqGyPYdEhbPkj6t7QJyDCewnr9ddQDuvVuDLJcpeNd77T",
  "key35": "3saxmbS6LpsgsSPZgUNnzS6qup86yteLpxHU1KGrsXPv9EUaA8daK4zDcgMBDZ7r6FnDXQUsEKwKMeoduzs2Sidy",
  "key36": "3jnvC7Jm5kfuasag6GhvWexWT9UKbFMqgcxb9nctxvfv4UKCWED5Ccjz7UuhDELpLgwbzkezF3C6YEuQELstUhe4",
  "key37": "39ZeXvRmwkgGN8b6C4yt2j11uhBtbNMBnM7hpcExPAirXafLp8cd5w78Mu1JeVjwNnj722PMgk8bEnhYh8umyaiS",
  "key38": "QP4TVgSJfxA4fuTp9GmnYFza2zRdhZSP8WHxTWKZ2xqLYzSr6SSC43hGe1UdWTx6tuW5U3WCN9MS7LEGccz9AHA",
  "key39": "3PYxX9zeWiY6r2thgbAUBqfXWBgPqdnZwNi7ir7tjtBrPs2VxxNBDzchne9PiZGfGd8P31oTR25v5bN9Gxz8eG5T",
  "key40": "99npsftnxKCbEhz5nVz8qBdzGYQukuUj7cdpdbqWwiEC7foQ426hNcqqpekmgEkQfpa9azD8cx4kVYmePLmdVXg",
  "key41": "S2XrK2ntfQceuWHy2MSNMKTRt6SPKygMcwv2Wax9qBYAZZZX4EBgqV3VuWZ9v2aqcqgsyTqSCZWAKnJZudqGM1g",
  "key42": "31vfyYr7n5hYgCaJKqCUsf8ZrTtAFCNNtDZ8SX8xumKrmtw7zGRNu3rzoEZFP6tbVvYz9RG4oJXAmhwtLTmm45LZ",
  "key43": "4DMJPfygaST4r1tK5uqaFzUWBQugMmAL6fvJ8qnJeCw2ACRPrxo6qpgDBUpZ8oQA2WVz2TnAEssEj7e1GJGcb69H",
  "key44": "5vf4R4ypTzA17RzoNdQw8gyJKcpCea7cjfYTpv7SUtsLDVKSNiPBKuDn7CeRE22wBXuskaUpqEjs466pvhJRJXNH"
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
