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
    "27DfFNriDRBgZNMWZkAPCLDRnPWG2REgJPHePq2Q9WRrB3c1zeDtbmtn39fPBHQ7yJgo6sS4zWPQrj2xfWEizWw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dgP2DahPbzGCS5Mwt94iLXEy4N9ZRkaMUo5s2VL8kCzJdUSoF9c5c45VE2gtEgFRHptunh6Y43W7pu5X7wqUwTF",
  "key1": "wqfDz37dP4Vq68qiK6YGo39FBQTcc8WYhxTf7hhj7EX8aPa3mpbaH3WBs3dEzGHYbgph6Pv1iRUeGcAGZGBPowb",
  "key2": "3nj86jtiNyugWW2qSD7kv6hk761d2pkXvaHox9HGdZjZMR5gXuBu5J52kpFnmnXrYG6HmooLiZqsptxeEigR7zc3",
  "key3": "2wUKupjF3k73QLFeXbSnHBQoxHZonmAU4akH9DC3Nk5fn3MsUjyXvrrfd7w91xAcy43VykSbiDoffqhW2G7kn7es",
  "key4": "4cWYXW1jyHeUNGBLUAuTiFN9EKVMtyVm2cjKwwyZGcP7VVcVgJiYYLPwiinuRpudTHqapdDoEXdSMCXz3oAS1pa1",
  "key5": "5V4qrpb3VxbLVNAZWwgyuDjiewd2WdZ8DxLrhNawhfGHvXBYr3hE4jQMRYiNYkDLNofCM7g7R8Kauu1BnGdYa25T",
  "key6": "iccVBFN5rtoinf9bUdBs7Fb2v9zxygTNb2TVRqxwrijxVES6nUmsYALrrsMAmqAP8SurCuJ13Xg5Uomq4qg5E17",
  "key7": "2HJzdUP6KoYGXEJzbZNAMMzUs5Cknyvd6gnaJ392g7b7CRzUCyH3wDMDEuVFEWzz5WFbehwGTvpZGtqFe4H7CKSv",
  "key8": "5E4AaJMxUbszSD4bbuBvT2FwoHDsubZ7Bm3c5nr1RofYGisJVcB58p3YA1Q4R7x96MLDPRTK2YZV7KMF4foYohKM",
  "key9": "2bsKA9iYyMP7gDfkC3rGnby9j5jW1HKNER6X9LyNky5RPL3kbnjwuUcxet4wMT1BHMtvJFAm8BXgrkhzyKczgaGD",
  "key10": "3C52GNHrhLQ5iJKNQayCunNHYNLD2QPssF1oAwPxm9xFsv4dEpJFC8QC9Wc5yWgMn748k4d8zv3Yc8sY5SdhmG3d",
  "key11": "XRWEN9jzBK9e2WarBRgoMvtEN9kNvPzxPJCbwwBg887a8uYAcHZGoUM1JNpiJL1of9aKwbCHhx8HtJL35sWNsVE",
  "key12": "tKokBgAwdgaDp6wPVaFEMDLckz8vNTBauaoeKFUPgJp9nQBpQ1Yz52upVVXabPYCWp4g29q6BQ5v6BMQdkGzhjt",
  "key13": "4HEKwwwUuG9QzeXYSGgUVEaBRDSgVNo8XZovZQEpUiErEja1cC5Ai6eUiHNrW6mJgBc1ACzZGEkjCj3zSY4yYjCH",
  "key14": "38H7ntaj8LGkjo1yMn3XXGoLV3V128zUah88DLg1q9PnkdG1ipKySJFwBLRVk1HeCw1CQCj2TrG87KGbNjBoB8jS",
  "key15": "5o4xY7QJCjBbU3PGrvbsW3e66W4QaZvubXk43XJbUY2Ryw9Qzb3zXDgCM2my7D84jJjJYaDotmB6tfSU2uEpC8Ez",
  "key16": "3appan8kTgvXKtq51LaabMXamqvnEspoerQm9WDY6sYLcDwowuNowCepBNjPKUQWrrqgXdsxaz9yAg4o1j5zAMyq",
  "key17": "4x6G7Fra4pzVqXFd7xvAhjWpnMYzk7xxetBwEWR3TAC4t4YXUgjYJkGVq16cFBoPqjTZcyVqKUV2yjb2k51T7FSq",
  "key18": "4TiddAdjA9TxdBTJ5d3TQogfFu1wGT28mSPWZkEq6A4v8JFh91Sfm166hhATU3yooCmbewNsxubkn3Mv5uHAk4bP",
  "key19": "4k8iaVhBEY2qxS7tAfvD1XRdsBo1zoYz3RhUGaXYoXu2q1vBzpqz4S1xyDgsDYxHmwBmMxxTX7h1SVhTsBXcCNgP",
  "key20": "4ApHmFXLvcEewBGGj4rAXZmU5L7zJBszmgxwSVPV4apfgNztsC84cBhLXd1vK3YzowCBvGjmkyWekabkqwfh3eZd",
  "key21": "2XK9X1XQ34cbEkSWkNJ9dsgh48JsSqtcgwxafj335yQZ3iT5mPiG85a6LTGn9JL14XeNGAYCAX3Pthv9WyExW8sf",
  "key22": "2LD9TkxietFgW886VpthRHoeCWyWRGbtHvj3vXRjUu3MpQ2gANkxMCMecCLw1fTSr479pSVriJk94LL3DgdhU3gz",
  "key23": "3ZP573dg5A3EsQZj881CvXzTjk8YLCEXJQnmt2tPwKchGbEkQPYPq4DnH2WN7MueSz6uLhv4gPytD2kNz1nvKxee",
  "key24": "2JarCoEqbNRZq9aFVggqJZBiTxHSGLqRgBmoM4uWQ8UbiAMu6grJMCGGc2CzRWZs7qhHcNWJ9UFZKhaYpgL3pHzN",
  "key25": "5hzZrC95HXAS7pNCNfqtH3eZi1jsm6JEYFCuZsqCR6YwFPqfPXcVXPAta72uDyZv4Gv5irnCkreBnm8S7oVoAMad",
  "key26": "47k2HAzRVX8ZQo3Bxttk2gWaUUHNKMgNbTqtvKLCQ16s57kw28BgUH1wBFuaphJcioAratRphDAvgqzDAfaWxqf1",
  "key27": "3hpmFPqHn6xR2X2PE6iKagp4yJdXWt1wXtFP1YeqPpK5WCVHYDZ1RMK8nLU9mvmEwoE6Uq94gd9PzBhaxidX2KAS",
  "key28": "4NbaKuAUzLYr75KXeHNCVMW3zi1UxSTMC7zhTmkXxG4FGgYmu7Y4asVheacGvh8gDmStEW6cuysA7bpSto8W1poY",
  "key29": "3nbdC6hhHk6tyo196fUvJw1ExR1YsFtMdWfTjzLCbeZmv7yHz42GyBft2EQM2879bhyMLW7y5HgujRqz6JWJuVcb",
  "key30": "3u4GC4CjN9K8gFZrjn4ebo1j3N3P61bzVtpn5RMdNMz1PrNxdKD7szy5EoTV4CAtkxZE1jk5tvatSehnKbYMH7Tj",
  "key31": "44dsX5KmY1XaVee7kURJmzXp9egMGShVDzWZHPuwMAD3Nck5MwU7zLbsqtUtBcmnK1syFkprvLYj6G1gCzw2srCE",
  "key32": "36ykFWiRHW3euPdkWA1pC7fwykEUCfcdhRbbsMSYEVWSfnoqDtT612PVhs7xDugxSf6JTVJX1LpU1QHT2cWGexWE",
  "key33": "3iQcKkamzXmEbXkq5xrVrxYopnAguzftX317Mch2hJgwDwzHRooxibZy6DzQa6Vu4rbWu2FUCkaqKbMYaT5QeMaH",
  "key34": "U5YveWzk6ESNyyBvkmeT82ckaz5HKnNBRka4Pw7k2gh4iPtgLAeAW2AhSzCRkggspmR66YenZXw8yN9Fy6FmBnF",
  "key35": "YjC6T87sdZ5zVkkDoM1NNd3NrgoprApvEhtqY4PFN17ebZMvr8yLLf8hvPsx2esNG7PU1Hdbc5JGihBuAssacMf"
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
