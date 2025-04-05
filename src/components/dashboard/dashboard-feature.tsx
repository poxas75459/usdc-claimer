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
    "5KkjtzUjjnpmq8XDRuFRZbJxghwfkwXv6gXBnZuZNciTrht5Jbop3dihkdTNBZmWz9scZJ2itDJBmVNa5jyuT6uY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHEmRgvKe3wKy4NVwtckzPgCn8ojPmxLuXANJRD4ERmftxLEfRRcvk82a5pVkdawLyxRfti66cBF926veSAuvRV",
  "key1": "4c2ku6z8KzusUudhVkFNez6k7pXz6eg4ZAzH6x4BkYPLXrrmfjzPujDtmGoGk3BgP2FLhH9BZmZzNvtwmGXS3xn6",
  "key2": "e6YQsxVpD2ReQuaBdSckNGfnkFcz2ERixoAy58hErv1Y6jpYe31fsaTZKsEBKjtRHPLjsvCxMjKhq127V7CmsMk",
  "key3": "5XCoovPy9fgbGCfGvuyjLTNS5RpicwCT6Yy1rewKgmHDGa7FB3v62Js7fYawQq7CwL4QFAYYF6yyDXd45jEU3nHn",
  "key4": "3aTJBYaFguiLCuFzgNGm8WqHvnvaVNasS5fQwKhBXPeykGCwFo1Nw6KoyZYNSGmKt7U16au4ENtgJBC6kKy8DGFx",
  "key5": "63oCWUraUyMQ9Z38v5MwcBA45zdshh1n7CFFB4K7wUMkkx6P6n9kEPjEbLqrxNrEJyn7AKnYqw3L2vYJgUWxo38f",
  "key6": "5A35UgBrYSNsYPuaNDdzRkqXhK12rjCYjE2ahnpADGBnKyUhgSSij7aZxyRm12eikVTebFSEWHw618KXwvEDCrrQ",
  "key7": "63A4S4FX1V2Rxi19tR6DbBSHaGJ6EFEvkkS9rca5VRGmpjz22WYuyZ6cTLPe4Ur8vvAtJ549WwNeUzth3jsWykrk",
  "key8": "4984tyM6YFDoqgM3RnFX76bERQewWyffXWtzQwhd8wzkKwTnfCheQFLEBfxiiHLavKyrJqt78ff8hGz3pCepGga1",
  "key9": "qDNYY1ivzr4gzN4Yek83ZqQYeQxGp8gj2PgqsvcEnFyAiinoMfB5siQfg1o8RormKknCcgL7Jsp1KztWXH1K9L9",
  "key10": "38peSKuNxppS8PmSPB6tqeDbkNyWSdmtE9DB2TgEM75gYAVsMEjRsvo774BvZeg1gBEJS7pX2jJB28d3CL3TKePj",
  "key11": "4dPqrBw3mvhaTQz2RuHjz1DabEt7ZHWuRXHtqghrsJWF7ZM51zWbJbEhZb6UmTKCNPsemtYr95xsKxwGoTjVBwpU",
  "key12": "SBzVdGyxWGki8yxTFjEiLKUgJ2odP3KQ9SKTuttnSPvM8HDmyXmNAxiySCbFNwW5GVBdi632o7M5A7ffZaGkky9",
  "key13": "hjSFSddwimZAhqjsEd7Vq1GQntqkZEEAxp93XWao4o5w9AQHFr5Apw2JDp6sySzg3FJfE4aE2kWpDLX2rsT91dS",
  "key14": "66YBnfpWxu1Eeyhh9QMVBJTqyVxoLrczMErfLg56MpLrnJvpcjDrbwVMXdgrv5Ta5pYwQDHtaeC1pQAYasgpK8op",
  "key15": "4XhkvoxNrQW8vydaQrE7g5fnRvbf178efybrwQhgbgQWZ5BfjPJiBFFiMgDSLPpSn81u2nFrFaRd8sBT3djfun5b",
  "key16": "2fRHXEDG39QadXRaFsYYwbxGJXkxZeKUmK8SgTiuX7obsZouEY1rLJ43s9CXrbGspHiqe9pPe587dv5ypCv59nA7",
  "key17": "3EJBvvEjkbsE3pZ5BFXWBbkKzMrWWJQ6iC5EprFQdrdXegf8dg1i53wPtD6CADDvzzHB5PK8esTwJneAH8Endm61",
  "key18": "2E9ZFDKvSkJLxWUGsmwJhzp7cbutwGQKnh1fo68BNcCA3XPMtLeWynNuZoUZrb6Sk1emKjgAaGVPHdFuB44gu3ge",
  "key19": "3NyM8UY6F1dNTMHZaS8DgHgAg7ck7c91LpXJ1qdPjD2KE6MFa1nxFAs2YKNQoGgUUg3XZmRgh4VAk7q2xVscX463",
  "key20": "53QiQx2Zu6Up9ShoUs5gcSgyghgEss5tLwqtUoK8vQDD5K5MfJy7NE92VuohfxSfHnz3zcT8idkvY161rYvBijmB",
  "key21": "4qMMmVaNo7HViRtPbnTzFLCSNZxTJvhGKvVTNbAn58ZnFfnNGwKQcActoj2Tt23yH6kxhdvvgsvaxb5ojrsxeUCC",
  "key22": "3aQKd7BeQX8UpvGnAF3MFGoS6ba74vRYNr7skQkTG6NEUaJsaK1LASe82dUWng57EkpeU8e7Rs2cNpw2gK5faRVn",
  "key23": "jDZJJHJS5oYcEFPgsvEbxwdvhv5udZMh4CdPX43NeAg2ngaSUsfGJfyNfwBB1LaesCgcXH8h3Lvxtos3w4UWtQt",
  "key24": "3TgPUXHqgMar15krPV3rHo5Dj8Ukhsc6pZivyHT6r3iPGu7Hw5GnRYhxDHsdKy46aVYDQGzs8zYuV5zixeNyMnek",
  "key25": "4GDSz5j1AF4RYZWCTJgTfKu2q747D9BYqWBkSFeA9R182VWie7e4vkQVtnCkS7VEd9NwKWbKdkGorXiCp9Tz3QSN",
  "key26": "2jRXSpCKT1jMyBjMJMsJXwbBq2p6PGe1B5hPg48hcDGaYATXBxf83LYaKtHn7Fj8NCBwuLBRiiMvL3gHPFs5TwiC"
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
