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
    "4houGCUfXhRdQrBDknfxNeY7jc8kUAdfcRjaas5skRbQn84XAPu2uxboDd8iHrKHM4hTngk6D4Tntzr9Z7u24nPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DLBe3YatiAY19nqLD7tXHkJmx2wwSAGyYvwChR97TtX5MRVcc6o3xp5KiV5BNq4g7VdD7JuyZ4N5vXqVQWykUAu",
  "key1": "AnJdihsQoK2fCNSXaa8a31V15NGvWR1qARs3C7KW5hL51kPWeTZfCdYJLbXL7vJSissz1fmmv45V4HH9vc8Jg5W",
  "key2": "3Jm8NqdvjZMP7QfezASpiNf7xYhvRhaoTBamXsk2FurwXr5devEng7qP7pRA1itYZuys35BzUWwsYufdfCsHwMWv",
  "key3": "3vMG2YVmA2oVnzvjpcrWaRFuSpJxJRyBFRdsrhgkJGogCHRWfo5zFbVcN1KxTZ6W9BF39KzXPekYaVCbfrL9UFXg",
  "key4": "gn69G6dzwRjaBKR18c5TTcjoafCzec7NA7uBK6cEsyreKMQgSPHYMqzgo9WXtSiBAt7ZNoEMvutET1YMhFUCw43",
  "key5": "3Q3FafT6sAwuGxFxregU9LFQcotJppWcAKz4SXzMeSEKVuEjfeFt5sEVQkdqCVa3X3yJYvWvTkf4dTqePBLrC1q4",
  "key6": "Uw9Hyc1BDpCh6CFgcNaQBNjUHK2G2fZzgBVoNouXjUwNgDARua4CqpFLBdLbMjH1WxVgVx2CxbRuHada88J4ioG",
  "key7": "4Tqt2Nc5cKLg1yYoxZUc82iEmGpT3ZyCotC9VhZv1rahKwrhnkPLX7iCEaw35bDUMWvCUeMa32Y1ZfKeAEdk3V9j",
  "key8": "4ftk7mqcPHBqLKZs9bANL8pLc2TNhMk4sBGpXjR9nGdFeACARACyxSBguYDKep3Gc5UDte2UbBacNHSJ9YseTq49",
  "key9": "HPc2d8BVZgmJT65qf6YFuzKLcFxi3ZB68T2sMrT6cwu5nUQsGqg5h14yRsYQ8Tz8RXhGHzTRDSF1Y9gjoctnTnn",
  "key10": "4ojdXV5vQxSCJ6cwkUqDC7mDgw2o262p1AGa9QD2MwzufbymuaycZML5nZ4d14M85s1wYYoZBF5UH3PAky2ZFfv1",
  "key11": "2eczpsLFXXtYFLiXyLs9PkpopoWwfsqiurTWdHjavcdKYG5wCrgMVRV6rnvYdqVuVc6y1dTngEJNo8rP9spfoXAe",
  "key12": "4NSQ3QZABd464UjEfEoKZnNuy41XbQY9SDBQXDypZAw9yJQzt7BEomUj2kki1sdXZKbYSXR8JE9ivPqUHntsGot4",
  "key13": "3fhfkGSHv3SnhG9yUPgDhyDNWxX96AM4NRgbM6ncutNpW94RSEGrhzDsQ1Zjk1XocZVwW4Wc91qTCfcaaKr44xyA",
  "key14": "2vSxjxhQsdJPmxgSFLHefqj8dFZov5iE6Ninc1GedrzEsi7JetFfzFujxRiJXgWUEV65wcC5pBFGNV4f6YEBTikc",
  "key15": "2PRgMYtopPhJLjL37mwCcBaCegHLaqScEGRHA5BLokT9vFnGMRdeLZnDQ8EESSYeHJuNSbzcN9PKrZ2UUHESBadr",
  "key16": "5Hyb6n8NCWiSLWD53mEgD9FfmNvhuCKhRpHFK9pVS3dmPV47FzZQEvZ7kTHnWpeZghWmzD7QhiMjPwgnPGxLQqaf",
  "key17": "3JEBPk4Yo9QkUea94D7UcSSaveq2Jv1wRujfCs9hYU9fk48WCYDd1TBDSZn7Bjw5kWsTRUnSsTEJuuHnG2KWPFKq",
  "key18": "5Y8gvMirtzycPcHcyS2WHye9LdE123eNPuz6Ep5QZoeTNWgU4s1mxQsffgPB3mhrsJDTVWXpeFkwgS9zxiGrchMg",
  "key19": "3p9YR3jAFMfdxNPGicYm68M9ovXtsVMYtT6hB3VQziCCcZU9FE1GLfP6VpF3BdGELp52K26s2CNxj3DfGbPSx57q",
  "key20": "pxjMB9tn9dPmjQKqkxP2Ed8bGVGr4fhHqtgyDXCDTMhGA6PuhpYRuKyRPsZKKQHWQUFuUcbEjGfEMP37RtMGQ2J",
  "key21": "TQQte8kEd3yQsPdFanuX15XxfAjWHKJTmc3wmNRoJyeCDtSMX37MDAHVU3uFJFHER2YLNBcjwgGq17TAUL7KwLM",
  "key22": "Hp5PjF61BBbmzyHVH91SG3STmJm3qxM5cyhBGjQwRcqgvMV5iGYwy9rmAqQ7AmjfNpeeBS2CnRVma59nf1HYpPm",
  "key23": "DVUzy8FPX7MuC7Kaqn2G6AFDdNTnLT8A9mppqDjUA78UKsgR7rg9WL6pwBoVHp2aUbiJKhJMMqWmbZcPQiaeeuL",
  "key24": "4ZnSTqRriSpaEhZczVAQa4qv3EivcidGDorNegLu4vzkSV9wDcpAEZa9GP5KeKuHvQsryzyax3ToFsiFyxbM1Nup",
  "key25": "Ur9KivNf5uU4WKEbSHsX9m99gRg5afL1V93G3eTGE6xLtkJ5GtNn5PDPv2mFGY7Xtqty667FFfSXZP7tqP98jZe",
  "key26": "5ZNvW2A2LBHNbGPjapLGiw69s1z4c8XqUxEMZoYG5cPq2XTXLKG9kLXby993bCsbBvjncY3zbVJ5E1VaEFFWc9PK",
  "key27": "3bc1aTMb4BHZHtRoynCEyc963cGsYxs8y2ZSPzjMPPYTUVNfFgGCgFjXQtMTqSwdEtXeTAqZxJJVHGbUwzi1zigR",
  "key28": "4k7XAbguTRcQYHm6kLgaAFYJUE4R5Duh4R7C5uQRM1YerJKqwY28QCGtTX3Z6RsycDZAjmBm2SuzPL1JsEEqUiZN",
  "key29": "3NkN1hUvbpFvv1oTvLrwDNVrhC3WEqPH7X2yBY8KwUaUv9ThvfdqQdByhrqJ1ZrMmXJvFbrUn6mTPSPQyyr8MUN2",
  "key30": "41DH5d9bAHrmCfZ4ydnC5DLKdFHcfmU1qRy5uFAjg7CvuCHP3azhTE7RijVL9zatJSABDPcFEFQdhCYoVUrpbr1u",
  "key31": "Cc2LzXHkVR4A9LgpHS9BVjBYLbejrQLYFgzzDDbEpeZ1upi5V4HYeePzM1onPKixUc35VzvepLH5BXdxf5UyVk9",
  "key32": "4SfjZWEgaPFVcUCxSwScS41e4KKRkzSD6o4G8Ganp4jZKiQz4xk939Yr2d9LDjgYPTNJVZcsGHf1BEindSe2SXkd",
  "key33": "3ukXfx2vaPnvL65MqL3iAzhVuXPNMCBbunoafq57Rg5tZDxQQgC4UKfbq7E5kLZ4D6s9CAirSxE9wAwpJY6x8p9F",
  "key34": "3vEfwThDMazoewHp8sXPaH5dYBo1NVL3FNVbLCoWPYaUegKN9pgeDvpVhd1upnn2Cb4QmSAWFSa8FNTLjWk5RMUQ",
  "key35": "2ArD2EbSatjrnMDikpNozrpeRef6VyvaCXfThqgbf4NTwqfyJidUWcm1x5oWJ7PQcZNddT6KkrFen9WQ9VTzoxPN",
  "key36": "5aJoCAPkHrK52Nt6Bh14L3UdxeYeWzc1zUWsro5KoMMrQ8ubUcGdNxm5JZ6i3iLSTFZtiixDkXgrC7Pi488f4N6",
  "key37": "29qJmq4wfnTcKXyqmkWrZHkaa88rYs9Btk99ozdQ7EffLqjCYUxddkx3ab6GecVAHbj2ki7djCAu7hLB1Y8ZctrA",
  "key38": "2hEsYnP8z1mUEQCVRUZjWvTMw7Qzzppq8SLBg1PHj7fawBa9DVmwSL2Ce41nvfhHXxUGHJ2Ntvq4Qt2srLwuWqwr",
  "key39": "2Hxk7xRWZeeyHQi7MV1vxVwV9Gm9K5fn39j5SeXG63dozUXqeX2MvfuZgnmg3vgPBp1gxZUq6Zx5ex4ispJ9Re9q",
  "key40": "3DE2VGDW6MK8ivUGx6hkuMDUBFU1419qknrDexZRPnwvpxXHqez5BDuFKS1ZJBifGebULg3RWNDKjDXavRff8jiZ",
  "key41": "5GeofUxJ2v8zBHe5AWbSda9WeC37acs7VgXr1Vx3WqAywqWJw1CPYQW74JAmtM51q1cPp3VdJubFU9NwH1tx3fL5",
  "key42": "246jKNaL3W2obubZGz5PdZQJYFAr1KobRP4HXdF6cPVyeZyr5zkkm47KHMoQzzBh2Mb2pzykQrLZvnmVCr9LzHHt",
  "key43": "2NdeRZoLY2ePYqCB2hFr4PdVBsbVKzmWuMHcaTWVNBMLZrLSZqzBke33yzstK5hcg3wpzTMtWKirizY7gL7rz3UH"
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
