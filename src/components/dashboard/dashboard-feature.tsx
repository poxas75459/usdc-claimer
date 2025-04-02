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
    "2QtMGknjF1cUx4R4wg8E7Qd3XT65qqfZzyA3b8qUFBf3ZS49nqi2tr6Lm2DuTHz8mkqriL3yVK8x1QM4jr4nYvSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vPR2NBWxJba1b6mqZQE7UN8UjFvg3YNtAeUQW3BU5UAhMWfFvour1sv7dR5zBaYMFJ43G2ZhyF8fj84thJhxiA4",
  "key1": "3FxVufpbhn3eouM4jWnNHzpBPpJ1urg6o3ASK2mvqsUmCLe2s98KJRxW1q2bYch4ayypkMwMwskJvafaqpgJJXuA",
  "key2": "2sQ4t5odFYpmbzkvqcJuRg3F1Ti1Y96vT19bfFjiaA1PrdhgbAtcAYRzaFaGys1Mi9Zh9GBAW1ApkiFRnf8tm4qi",
  "key3": "4VjabnWGjrFx8FtjfTU2bcG4e1ysYPQDHF2sgqbkqRjyAdHHe9k1vWh1HwzmoCqiLkGSzn7NFy8MLN2TVfmaJX2D",
  "key4": "RT5ZvKrFUMGgX45eSxYJ3yRtvZFqm6Vk4btwmfUwPdYdX6vn1uo8VCR9hAPgZcXDijcr9TGirxupJ56axpESNoV",
  "key5": "51CfbRGZ4bBdi5wZ1o5z38bZCdXcxxnvRnsFKTVgqLfR5Zde5Fr8xj6WSvqVWeaQzXKeriFWi2fehJg2qeSAod4E",
  "key6": "4xX6r1NYbcMsA67KQKdcUAm3cNSAy1jhzFPsEZJAV2mDBPXnJWQbxPsnRAk1tVzxGUnrCvA2bA8XwQFZRT1WyepN",
  "key7": "2VEpHJkkJcRaXKojonSzqXbaX9whx2VnysCK2o99jF7AA7L9AVuCxWiMm1g4P8ZahppfwsYe7eFVjueUTou4JQUe",
  "key8": "5z98v8U7mzATFj4zFMRXFQFptmNdtYCuhixrSSHeKrgmxG8euS6X7kw8g7wdvffKrnDT9gqVYNwupbiChaDsm27e",
  "key9": "ZAp3EgkYr46PRrXpnSKKH2XgcwLXLJz1BSSW9anypXpw5u1MrefRqxzFtAVfaqdMwijaFWmpNKzL1qCEYJNqKqQ",
  "key10": "2Bk4yrsaiAqiMQ3c4kVoDvCCuUfH3fysnVG5zoCWV3cM21ofUXLjakvt3ZEkhj8PKtJion7eshuYfi4772iadkKS",
  "key11": "4ptSdLAaFWec3hC8EEAGgUFwXFy8HKfMhTUnTPosYLWtF7frfoeozQd9UdRDqGZvnuXJCCy1Ckbn1vcGfGY9bcm",
  "key12": "4HskuzvZujEFDx67ScxZXjvYboiYK4UHtXKWUaHGnsMqf4SkhBq1UddNEFjv4PVpJC2TtpWKe2dwdn3V8kXX3X7m",
  "key13": "hcp1n7HtewUhFoii6q8xMQhkkxNJmc8twD8wWXxFoGK8degWFK18AuRQQNy4jFUDV8Fz9vHgH7DygEEdQfjeJ5T",
  "key14": "56bs77JNHeMjCRQ1Z3BCFb9MTvCP12wrzkx41n98CoEWNxmtkCdWV2iw1pgoDqDhpSSvZFQBWH2Js8V9EzkCx5pz",
  "key15": "5Q3bzVh8Y22ZF2MfwVV7h1KmEQ77S8oPsMuHQ4D66AJNKbmmQ47iFL3kGgmizCLALnYvxZKA7Nf6WnKPFpawW4NJ",
  "key16": "2pW2837GZBCTrPqvkpHWaSBMxmt8RYqYkimLvfcstwRZvL8KpR7uUi5WZ2GR5jCmDpMgaMrDzBCqguqSGu3hKU6C",
  "key17": "YTvrTUdrhWYTfB39XjSbGKg9xqvzvv7BLJ9SXgoYGjckMAmNkCBoDXD6Ng4CgsEE1V88FLm3c8CfNDGfPqoY9rg",
  "key18": "5jfVytiMkThmhjXo752BxWuBoxpp7xJrPA3i7dGqHEj8fsGNhh6jkM7UovZpTrp3M4GFNse8BtBmvQcTu4JmmdgS",
  "key19": "458LAGMHqwRMct9cQC7i1MQoijbXxMp4WU9M5TWnGzLu5R3HDkwAHjFuRDXgBvWXzjavqMnCmvwArkXfn9h59QUn",
  "key20": "5KPPJkt8fbUJU7UBw84kD3JAHkbnWMXzfkL2TXy4uMq5j3CCHSnTREFak5k3MeNNUGfnos94WFS3DLjWshQZyJT2",
  "key21": "tXBCibTJg3EmZRzJnRh4WzhDFQLAd2P6oxBieanezyocAQEULVTwWdUh1PJMq1LmgfKBkNzrSvVqN5dNb94GouX",
  "key22": "2Dh9XejtcWQgswnTydUXwjmfSGCBkqj4724rFjbMFVGYpxScbLpD49jo5wfWgZZiADbpqq5wwv2uQnGC5SunQAfi",
  "key23": "2rqtPsmh8jTzPPzkEAopPk4ZonxqzVCBvm4kuxWoGP2uCto8CjWYvSDkP6djAV5je51DAMB9eQyA6eRdPjPCAY84",
  "key24": "2qGNsR3UfKTi2hesGXNfxeq32YHgmzU6bHyaSYnk8YFz4N89qRJwSEWWNC8Qdry1iBEKzoyH9EQb7DtKWMoyhC42",
  "key25": "4Bf3edvztK68wMnEnRaa8tXprZkHW8d5Fd5hQCSdGpX5Z4ncaZoN6n8HfWFi4PzDodrEtNfSFoPXqFVKbG2vmQ8r",
  "key26": "3uH1ewVjgWsTJB2z9WSGbopExm7172wpVev2yUoiWKAD4QiX1pjXdtdAXYZG2UfYo7BQZCiB5yRYpi9Xy4w5C99H",
  "key27": "2aPGMTzRqUSCVrHJWruS1XtNu3vL7YQCyb4AKPxcA1pg8rCUjzNac8VQT1JRXhLKED2W4SXUNZPt5CnpmAydUtES",
  "key28": "2HRzPRRijJ72yAveyGu41Ycxb9y4wBLE6RStVSHxd6knu16K6akjYrbSpTJAVLR9oUr6xjukZF94QnrK6JQdCMhm",
  "key29": "4ev1TVQavdt86SYno3JgvbEcQpZRkEUxekTeCJsVDkia5KvaUNZ87o3VBJF3JqtDmc1ByJFBpXyJAPBkyAjVdKyV",
  "key30": "47gARRBZgiEDcvE3mthgYEq5Pouh9CUgafm8ZscWCgrMF2nzz6mHrFJUFYvnAZ5FvjiwQ5VcMxK15ZsL6errqgVW",
  "key31": "jBcwDo77ZXqUWKSs1yhLzhkHL3qxTrFqbtSW8Ypw3jcGtGpnRq9YGGyWbghjPitZK5iy58WSRdb997z4HR6ZvfH",
  "key32": "2ynvJZS8gDqikg84LEKHa286TWUofSyYWb8hv9rM3DSVB9dGrGamfCmyP4YTHBVdg4JZUnZzr1SyVkGiKSNtn84D",
  "key33": "57eW4ckXwAoPvS1tPYiLSRzz8t8iWT3Gcq6UWJMaHUmb3scKEyrQgrfEVzsVkJRM32qHTex9uWUGBi2RcJAm22rn",
  "key34": "MAtAfASYVWN5gGpd2BTitze15aHBT4XgQcqxMJd978HS2G7mRrC5aCbjn9voJ7NYz4AV4DXJMRCn9zwXHNz19Gz",
  "key35": "3V3JLVPP2xEXFhXvW58JQnpeg1erW7iuuNRQMpJh1X47RZooPnnKzkDzKR4TNdz7XmwJGb2sNGDgdH677KnxhdFE"
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
