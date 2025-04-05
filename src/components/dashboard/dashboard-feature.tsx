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
    "2v5Kzg1pLX9iN9dPswMfLAvsdKcmF7RaUF9w3Ftw8GuiDkpMDv1FQei84qFxJGnqwv4Sxe6d31fPtdktk6bbA3gG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NBjRmVDBLPGMyWDvzin1XLyArLM4GvR24RRdrAAA2R82aQEXZHYrCP3BkdWCosQEWdkmMpTUPZdpzQVYptHdV7U",
  "key1": "3Fhp8oLi4yHDZbGmUbvEwHJdrEq1jhL5rzGYLB2AgaeFbKwtKFdw2qWtEgnxC8Yq6RZrK7CxiLdfQJCq3ig7jDKp",
  "key2": "QgbfTHoXtRBkRoKq54HwHj5fj8rp8Dfs6nrEyHKwwEyDrBZv2EFZSPkJyLZoThBXQeGGcwQVHKunkxXrv5DUCev",
  "key3": "3LQPGqNQ2CP73bknYdGowAhykFxwAkEuZe4dp5JwEKGohyjivJWmvSeNyW9wNrnAstmyuBjEviL89ot4dVzX5Z2Q",
  "key4": "58UTWn6Y1gPSPPD4oGYYXDPRGTKB8k9WN3UQ5KEH4TJEhFKdcLAzzt9Ai8AUZNdLfoAbNuKjdDWo23DRkAuFRLFN",
  "key5": "5EsMKD4T6qMhKnG8Z8GvfLNeGSFzS9sUQMLdMvnZfZfWEcTAJT8tDujJebNazqJBwtmQWTJRZkmqRTKGbN18oL7a",
  "key6": "46Y8DZ9GeqK3AZsk2nLeSNPWZKQc4Ggk2vqahdz2JfCY9o8avAeWhjxogcr74hYnz2yoGDQyFEySjKdzbgCJuE9k",
  "key7": "JZxoGkr3VpsFyJCAa9mojs5Adoxs1hnvh9BVhoAgfM8EjcHfVUF5mrbcE11XCnHGZxxv4HSAAqeVtqCMrhZTYum",
  "key8": "5Skw5XiGLg8eyhtonxkQak6StD8pFjG8MvxSceXXyDcVwhYxK8BJfQAuJjx29Kda1CBwWVSisVGEJJ7VtK48XsNe",
  "key9": "67DMwQ1LqHM3MUPGHgUxG1qbfckcHPSWYgb6tr7TtQrcXRocyEn3f7WpTPipfgiJQjCvzhZLXCBRSncJrB7DQh74",
  "key10": "2vqLSwUBNZZ21txfBNajJwcFJHtPUjNtWuSV79NSML7kT5W3xgqqUX38baDSH8Ztf9nFTGnt1fiw2T5azxZCMXGb",
  "key11": "5cLr7wu6ha6n3EPSYTVee3Mdnwh98VPDp8ZyednGVxQQ9mY5bY3tmQEvFZ85A9ASktNNCcrEfmd9hoVFX3AjVLr8",
  "key12": "5wgYUU32UkBmsAn4mT7cd8AVGWYhsdgfYrVi7q47eQpV4cvX9vsoMNxedn7A5LZMvrJNmpNdQQr2JoW3fZuXGyaf",
  "key13": "29rjMZdx6gdTPHdxD9gUgM9uPYbFBdH6sJ4drosGu84aDSMFwJseVjtTzHnxTPpdFvonaxpEob6e1RrTA4B6nnkV",
  "key14": "3TuQ7kEkcSVtvNqwwqBhueM7znVXQa7ebRM7sGUP3TesgxGMYza5p5cgwGcxoeptZasVdQ3y7vTcxLTBXED5FQZr",
  "key15": "64zNhWWCfhaeoYtqC9EeER64G3yGzHyQY7xZAGmbCCtpCtTKb8LTm6EiEAu7iaRFS1E254aCGYeHTqUipBLSWppP",
  "key16": "5N4A8JfGYV5ePJv3kosEpbzZ21QLkw4bhRwKTmZsp5ateVcNEjTMxZxtAcuJHGT8UxVRVugknRt4mD1ZLfrxXSX7",
  "key17": "23CuKeVojsGrPtsJp7CaLyasgQwE5zixAsLQwMqMNC5EYK3eqZpM8BCqvDx2TGw6nMKaFRtVVntQWbSnDtr1f8bM",
  "key18": "kpVyw4MUMqayrXzD8oCgdeiX79JMUmkAqajvrBwa9xbn4pr8jpWjoa6u4opsfUwXdYnU4rfW9XsA9MikTgMG63S",
  "key19": "QYxUCAWZzcLmNEEeUA6Yzn1y75jym1BwEiEn8Bi83RyDUgBggAG45XCiZtcebG8wueJxWZwXiim9ohGM53mWQ83",
  "key20": "24d8kpqaaowQJnBDdSEDqz85ASZG88J7tyt7BmufB1gz4K3HGhNky1KMBu96wordkFo13ZJ4KQQfDa2bGsJk5CC9",
  "key21": "2P1Wmh7b6FivAS1czuZfXDL6Fvk5EYEd5ieNJ6qQh3cMEYNJJpt7bbWHYeQC795KMLRbR3zeRqC9jin7EnvnbKY3",
  "key22": "5sUX8PNSZz5LS2u8FroDBT5vfNwu4owfgHSzPG1WvVeAZUudq4ZJMszcRCW9xVfxQ1siV9bx76eauDtuf9BYYmvZ",
  "key23": "66CCeMRqWtfWbUv6yR9SXqfhrWRepv8ujcz48DtitWgWuRTMbufZNcdVB5hqNewLvfttJhWfS8oe3dA8CQFDWYzG",
  "key24": "23daoCbbmHAZNqCPVd5MJ4sXudeZe27ZPCsZ8PX175weAF5o4Fr24UxuvELL6duKr4BGBp5pYafvKivjwUwyfxCX",
  "key25": "2K6NwqndPvdkf8RVfBHbNRxUW2g59XpKBecA4ccL5sy5JoSiFZvzd12iyADYQfZBFAU3PeDPaetQeuhqURBSqT2K",
  "key26": "4h8FXNYK1u39v7ad6xJumrU3SfaoHCzPdfbqBNquwT6fNYggNfZfxjCuQrySPALpw9QxPhvsE1NtUdS6DsFwUSnu",
  "key27": "4qpZDdLpK7uT7q9zUxSk14wvRrvpGcUXvpKpetFw5tmLcd8S1sgApKKHUMCw9MtFLp4J9xQWVDnNad9Un4XeUMaU"
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
