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
    "2ciyntdYkm5BzxmTejWc2nMFnsmPN2YN6e75e2NkwyTeXj1maYxkWar1VeNmzrwDfqX8wo9Va1MLXPpSa9Xi3agW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FmHJ2WeUmzbNLGScMkLJsKQmty1JEV4a6s1tjPhVGTRcY15AXHo8vAeZ3YfeTH9PBm347ueFP3hyeAqjYyfwVtR",
  "key1": "4yNVkdi7aTMKZtU43LPBAsZHnz1dx3Lwe27SenyD5LpMP3pggGViyNTmuxBZCV6hAfevsAZXG4wf8JU96P1V36q2",
  "key2": "3baWHVWZERCESFz85MJ3Qp89gnVeNeX1XC7s6ae9HDgZR6PcYj32nQAouKkMYKC7yqUG5q1h5EvPZq2oMLpwAh75",
  "key3": "4Ft455PFWMbE9U8tJCSDzhEeqRRsZ52P8DdmjHVqko1ne3oAbDM95diVPsdv4RXdBfFZmw519z3zpZ9JjePJMHHL",
  "key4": "34LgLadC7EMT3WB1c1tTeBfoDbKqH79MN6SWbuStRjbpq3iLsGDJLHRE5k4P3wVLHjtZd88GeE19i4FXFPRGPUwJ",
  "key5": "3xfG5n93QtHVhoYJcanHau5h5XCwW71eUQ8fvDVDbkiEoZoLGkHjoWBRUjhKoQy9uPPMB3Ei89uef88bxmjsZvu8",
  "key6": "2eHPj5X8ezBQAVvbqHPd6jJLsXhcsupq9vTSHDiV5wJDFrpcRZa9p71tJR2vY9sSKNCnxSazNekYbUQot8KhjXmv",
  "key7": "iUFZwx8cN2DDwCBBPBUMeEtJQmdAJC9JcYVkL7pa2JRxWrHBdMUDLqesjsCZqNL199grgTgkLjW2sXcDbzybmeF",
  "key8": "4eY7Ry8z4AHWYFRbuQvBFCm8Jz18CV6JirbF7hTuJ9UW9iq2wmQwhzLoLgEFAso4MLWrL18Prh3GnVHBkWfh7deg",
  "key9": "BF1a4G1UJd6FsTFsfvWq7nQgzU7YqJRii4uZBmcYjFZhzLvXvTNsiZvBxZJdyX7i5uBWfCHzSJfsuq7JRq38CVf",
  "key10": "5HsKoZsLztdwXNox93dCAXHL75fT5K3rxHAJsBWqUP8EWNgL3bQgfxLU3ZYRDzrw3QPoWPTn3iakZ4CxJNXCKBbs",
  "key11": "5hjLJyPuTYYu39Nc3ir4KTgxLZgZfB4FBfRcexX636FPVxsRUnKmyQSUQXKMQc1cTBy53LFze2L9PJAkmFu4fvnS",
  "key12": "4mQLwxpKatRBdHD8dTe6nPuq84SjnvTyhDvE5oV1GfMLrAWgRzeZ8LPpQtWKxvDMj4Drj7UCdWGCnYczeLgBLgjP",
  "key13": "1arRBrRzajiLksmahR6PaMyippsgPCKdyzD5ENTYAdycx5sxDL33fuTWsCBeRYsvo2N8BXVGFw1TK2kYfpu37dM",
  "key14": "2vbr9QJrUyBTezLeZNDaWtWksAcWXr2mxWQAMXEq23bJq7rkoHvnaLQJmwUotc9JLYLxVN8CH5kEXnY69Jnw4M28",
  "key15": "aWpvEb23eh11f3etRsDWnLHGwW4mfZFsLymQfDu6BbiX42AacJtR6sWujyxTLDEe3CjP7Pb6qaj9SsmyiiN51XM",
  "key16": "3vNLTB5RPJhksEH6t3HVjqVFc7AXdJgicyjhobbEz8MVVNgdbnrDrwcKjhcY89tSGiCwF7WeCi2uok6xxDuBxTvr",
  "key17": "2PzQQTYtkAN6mT6qaSqZcduo8kJcVT3kmKsnxEdK9wvSaEL4XpMQBGkp8tf2VEm42B1jtY9LrGP1XfRtUewF5FDw",
  "key18": "2yTVFk2ZzYFjWLXmCwp3k9PwRRLX6xi3iGSpf1YoX3CFNLcAmn1pTaofmcgtFQaqL8P4GnRdSPp7jGm8xKkP5KMX",
  "key19": "3TgzLzUVyQ8y8dFoEHoNcAU4phfciWg987g9sCLogSsuTDJCbPqa2dr7x4jTFJULASuhdMR8MdsZMXrriAN45idN",
  "key20": "3mp1DYryaJR8QC9npekkF8VoLr8ML5Ss861Et4qMpfPCJntFJPe6NyQLGshQVXihsjD54zSgtbwqqmyyDnEyNvQP",
  "key21": "594Gc4GnH1HGVz11nRF5pYfZriD6KpU4SfWbi4TzHUwX99X7h5x5UGvBetRBe2TVzsnCLw9DVYssWXzGUGDGnhGU",
  "key22": "3F9L9HxKPYBYC8y7wmN3A5bgdTuodmhLGfXHYPA4CjKmF9dftd8TebskP2Y3SfMjKm4W4jZVUQFBTLs66SAn1TUE",
  "key23": "C2ALeuCUPGUKBGVTTyvqCk1qVfwgCkMpw9RncmPTVGCsLaHoNpWMyM5GZr7c7bkJzZ9cczvMwcnufzy7SE2iiMw",
  "key24": "59EZA9DQ5b3orwmihZubkBtv9yGcnv7U4Cen6XHaf5441K5gRQPbAK3v6NTbgXEiiRLqXpPkX2dhXq16to3UMaPr",
  "key25": "3k4jaDMSQyZ4HFaTA5BerCjFNW77xyromNJu8qpEvNrRCJ8zbYAwbaSU97qbrB63mbR6QgfrSmRFEjHMnG7B6mJ7",
  "key26": "3ijnDWGvME3nSBb6ji88ho93hVhaKaBMHduBq8uu8A9VhResdW6CFRYUJwkyJkyoD9DFGzNKLsGSscdNwBUfLM4A",
  "key27": "5MM7xhzKt9mexBSXKvxNFpmoETkHUnYNgyFXqTKEDCNGBoQmmVz7dAMUqnMFk7AR3gNXV8TwALN1B3BE8f4q7X9e",
  "key28": "4FiBn6haCt38gNLWBjmVES9XoT48GLb2jnov4SnSwBAxD535pLhFHhh8Noy5w1dwfHUWA73Wqv4gZam6kSqPghoJ",
  "key29": "2ynVnH9fzvZ1FJvNQTApySfqKrM9pGHQbaQpqg65ZXjQNvomz9uTkVeacKAHQJaqGH3PtUpzXfYWsDXLvwgkfFVn",
  "key30": "mGbCwnoegn9KrMCn4K8ALEf5oHVy9cnPn4cey3neBJuPHHwxNjhcuSA9rqMcDh4YxJgyZX4CpNwGDMWMQGc1CfF",
  "key31": "4VtdhnodXfZhekpE1MCTfxRGMtD4Cf1NpeSChh6yRjFfCKBfY9JXzpCCEfSSQvxNASVYpC5eVkXKEattwdJTWfD7",
  "key32": "8pEBQo4G2rXPETzQcTZrMijEr7FVVc8Qis4pcn4VBxP5peJXE7TKwM8mKzx9yZ6uriqPsToKbcvRDq1YcfNrC3u",
  "key33": "4gYUtqG1hUPvx3JbdfYGHrrwcVqt1MK3aWdhEKAhNMLVm8vsWw8zhZQHdYsxJJqQpGDSXmoW9HUys614TBY8FfJG",
  "key34": "3uBdJDNqDYePS7anzVzWeE9wu5u4L85H2gFrVyo6i8USoLLeSrVJ2NugvjhERsc9VNiTQdjFNeq6A9sDury5fpJP",
  "key35": "2W9cVXXQpGfdaU7Da6TbrYZsASCiknS76Y76vVAMnDvzHA9KCHHaMjqQQ9A9BFjdtF3GkGSLGPurcShrnkCsU3jb",
  "key36": "4jE1BrZ17unBsZgoEW96WdyPcNopAgBABd9kD36Bc1hYtTjFe7F9SRzFzxwyPTHqpspegtKbfRcD2eSbX9Lg5ew5",
  "key37": "5ZJenccQk1PSvWCXxVFwW7zjwcc6j3CVNyZ3cGWtiVWhe88Hi4eZ7EKwNwbwQZxenNCoVfmuzyGs6CWgrbFSkziR"
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
