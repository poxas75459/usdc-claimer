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
    "4j3hUZM5BTptt9hAeH4rPyfQ6iKaMGbbuK16SuW7QWzM6pcojz4WdwTweuKwreSGy5yozUVHQZDuKTwtnpuSRwCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LakKsqa51uP6bToRGrwfEmGqHUDceWFtphkiywjuJdNQ3gs4aE53EAnKP7dfCUDpG3KRvgsdo5nhmo9paonMfai",
  "key1": "2gCrToFPcNLKw99UaMQwZ6QrkGbd7L3sAvBi2rP8jZQ9gbrqJgc18Zf1TV5nZx6TjtpgLNdSP1Ce74VULvUeSREE",
  "key2": "5ZbMq5ay7b789QZwojpJCH3msy7wEmePqm2EbywrP6rZWpXn5XcLzntkKuFV1NXYMRvi6izY2rTH8XqiFMQRDwJ9",
  "key3": "4mUrPW1p3hXgvLWucefiqjWNa8MwCYS6KxFZfCWRBGD1XvkFkmtJP6fwBFAtW2Ya3W3LFuyPtz9m5EbAFmtLg8aE",
  "key4": "iHEvdPttGuFk52AXMPmMj6HFnMx4vfHWMUUxHg2NZ9akay6SJPZExF3viGbpsbG6Q6U39BwumX6dieoZsqeETVs",
  "key5": "u2fyhnbsXG8wknHQrgQ3jv8H76tLBrQEhBN6QSaqdMqoi1gjxihDeH8a6jdAT5c12156RyafAYAiiEBfW4tMTMV",
  "key6": "3vCFiGJiEwmi7YaEuweitpcvB9nxk8r4Vp4Fv17oJxkz5X1BUQ9poLV8RhSEtiLL1EHho2351Qu3nAb43Jxs9tFk",
  "key7": "4GY6YUJi9G7yw93LKXQsUHTARqY28zcCAnbc3cWLLDrHrXvGazaJgLxEF9uJ8Y5iW8YVLzVZx1cwCGQMiWwq4ey8",
  "key8": "3gdLPHTxhv99RUMzFWg8yiUqa2ghhUWk2nEuixjva6xqy9dXAA3jht7NGENrJ1WALbdH4o5w8ssnV4xfKPGTk5h3",
  "key9": "65r867F3G33jTMqdKeQmNZ36AimAPBQnU1RcBroi5tNuS74Cfi4gvGiGxybP9ChkmXAmysuDUGFoPCxoHfP6RLMs",
  "key10": "2sbe2oYXcsJ7EQUN93t7GiS4upme9eSYECDqxRKZMBe2YuUtzZegA4jA52op3TQgQymUFw769YHMwxr8aSswwzUL",
  "key11": "3ktNSi2BoLMghkELTzMhDWhLgC9d3aM9CjQWZ2sZBee4JHWrEpF5VCpkihS2eShqPDsj9mQEcfMpW1xoLaGd92LT",
  "key12": "37pWWjQh1TRHqbn8cQfgaGhhXjxvsfu4R6yhHC7T8mZystp4ZsjLT81iCnWczcc7NYV3yShZGS23riCgCb1DGyrp",
  "key13": "3E3GMRbuEoBAc6tGjBP8YwhKCvC3CZSUB5UTj4vue6KqeS6365WpGDiiws6WaFfYos2Rf3qE6mgxp1SqhQF74RjR",
  "key14": "4tj5YwQUt24ViV8kxj497fS8QpnMjHr3R7R6Wk6LueJeoHBaQxp3cG3XetAHZ7hqFpCTc8HVetpCRK1PMkdix45y",
  "key15": "bgfiYyhTa5pmp3VdMnvsWSYxzUjnvJaZyJ8Q5MrELNSXZjZWdGE5ThxcQmjkco6cRY2fhG4NK6D36vi9tYB5n4b",
  "key16": "2jBRLNzGfmGUSuReKUk3SWvmig2yHNebrpicgbKnRntcQmJ8BLW35i1u4rnmyB79EeeBq93c3ApfFHJFt2Uz2cxt",
  "key17": "5ZMiuTjuknm9oHqvgkc6p9NQVanZj96UuvsjU6ybK6D21geqjpUgSYFbmns75aH5mRJUURaKAk2ftUMnLuQ47uWY",
  "key18": "ydwv8PRGeCcXhuU6EdWejmDYcqitv3MRfxFrAVPP8SzdSDxBtW6WJ5EEVNoX7yHcnoHnBJAsXx7k63LigzbHAtB",
  "key19": "5C5JNk2yEZky8my4CepcMFTreKmLNbXZfzyZ7z3YHm3PW6xg7z6TnRJxzwd3sWCrJ3SzkAaZKSLNTfoPSfAxsK5h",
  "key20": "2wsz13TPkavAUMneTvBTaJnDrSoWc45ekBZmrj4p4TeGBzajazqm7Jyet7w8Yt1HmCLHL3Ee9bShwUZJ1vHwCsUn",
  "key21": "2tuQWXjXCJ6uVTQCqYip6BNY36RF8m2zpqtsdVYTP3ziW74yjzHvGRvqHq7yoBVEEcuAN1h2iys6onKNkJjgqjnj",
  "key22": "qKCrQs7QTLkNZaPm3s1u7CkqLSB3pEnMN2y5xGLLtjSDpZbw2KGhzGGxTdQfr3qnGiTsMuifGS73pPrpm3RnbuT",
  "key23": "5n9iFKUE5QUrZGcsK3vJCu7R7E3EgeH8o8YzpaZTm6s2osmKBcWqHgpvmTneQZnYRF1F4dCK7xa55arCGmABeNbw",
  "key24": "3SqR2tKRGwQ1b49mD1ypYatQ1bRMDEfSwzLw6JsZTCiiY1AHCGdix51D21YAkM52gyP11AidcmWc2UqCG1cc6Eq6",
  "key25": "2TE7qrYEBHWwsQc6oWasnx98P7BnjzX7s5gpWC6y1oE5x5Pk3sGZzr24Vyu9hMf1vX4Dnnemu8gJmss89waRbfaY",
  "key26": "5oCwpX1XxK6fs6rD1cyHGRB1CTzExmtk3AXgeFkQ8gZYoP7t6UA39SLAVzYRyKpjBEuWxZ3NSbSWeTuY6v5dX2qm",
  "key27": "3ypxNbthcFyfqMuxaEaKEpLCGf8WDxfQHwXCvwLxEi5GTSXXGwzc8CECGd8QWRbbucgJqJGuJSCeMcL1JZDyNcMu",
  "key28": "4ahhGEfz1njemxttLY7cszn6riRhGA5D4tFC54cbM8TnTB13MQf7S6iFhABDZSp23mmgmtbhySgXfJyc27XvfXF8",
  "key29": "2hEh2z8X5PUHBDfW6efjjwZfGWKBwkgdaLCj1ynZFBkdYuhGpAvKRkAoJLoWYGoUaiNiaNbAhNEkXTzKvGyBwuU5",
  "key30": "2ausFBCoW37Q4xLydXGfYTvd9D4Aefwc416H48maqhjaopLvCck2y1VRqRinV7X7P3pTFCrGQ2WfDo276G7mtZ9h",
  "key31": "4NKL1A32Z8b47shUtAxkFG9oNkQ24wkx78uwDJcWnaZuqXnKKSYrrFJZgwvWLqee4z3HXF515jSp3bAdYMXKnB8r",
  "key32": "54s9ppAnCShopy3s8Gc9Cz4BGbRwT6dXGyy1Gx6gZbEDsdPU7j6qXcrCEaKCQzVm86eDuBCQSt7TSM1yfiyHXAHM",
  "key33": "4XEaPaZrcoXvicBR7fNh34FpW8ph3LZJrYwKr38WVYVJh9q9Wu7YcXZFj3sRgsxjpUnTKKGgFFDMxx2ofZ4XRMHz",
  "key34": "26yPHxf4Up8qUWG9jPAokn9akkqbZPQtXD8rNXNs5r4e534Be5w36iYsqSpo7YXpmDmfVJybPGhBRecKJyz66krp",
  "key35": "5reVeVMccvWnAvU5U9P1zqrEwS3yDZdRi1U15wH2DHhYbQcAsCx59QG2nDMij8sxETfwZupAFRsYhBFV4Xp1XroE",
  "key36": "3KV8DGJJVV7TAHDHCthSvPMaughf1NtFQ1Y8GsxeWM9vLFN7aZ3iYywnhoV3j11eKt4JUsZu3CaKnVTTwtovDZq4",
  "key37": "31zvR69nM5cr6aPS7xNQt78zsGq3zaasQ58PhEauJep8Z4TBCDDfrSPy2NMSQPncjM6smEmCXoedvzaGQgTot1ix",
  "key38": "2e9822GjdRYWAtrXL911Tj7H2WawGyD7Cud1iTTdg6czTcftc1EXV3gfLaJH8gnAhDVTDSVMdKLZTK22YJDTANZ3",
  "key39": "5ytRsyZnUNfgrCPa5JYNRGg3KjZpRJzurzPLhnqiZn8upYWZyVTmS1j4YJNCA5XFWvdJmGZDvdnXawmcb2pzUfUj",
  "key40": "2nC1Q4CLHAJjVHW5wGZXzApqTpbWi2KLcqvXZCJEsLeN8TthnnF6QDmjeFMSAownCvfB7aQN1RtQdoGHWzwYwSrR",
  "key41": "39hvCQfr7e18jdXDQJaZh3MJ6sBfc6hWkZEPhxmucY666CEgpeiFCBe1iF84YWz4p43xRrcC8ZxTdjJmbdpWfrMj"
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
