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
    "2GwyHRq99visBakJWZ4RtSQjkUj6wVVfw4DwyZ3jN8QqTLprfSYvyTxgevTnAjwUveggZARag92h2A7PQX2Zc9W4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RqZHqxyyZK91hDcjMVmHUhPtMVqxqJnnrJqWCxpKWyrt9M74epT3tXTzsQqmMbcvhBJwek88mDYEGr2pHTcToPC",
  "key1": "5y9z3XR2HGH7cDXFY6r1hJpfJAr6cYuxvwLUHgiRGJfztYx3ghRJTNr7MtNu3gaqGVeqbuGJGuSPPfdz5Z6o5cYr",
  "key2": "3sjAVbXoc2GooHVPbHPQVJXRmozZLDmVa3y5CfMfimMw4chPTWJV2N5JUSio2Uzj73D82gRGRyyhqnw29c9zEHLH",
  "key3": "64ms8jML7YKW9NVi7kyEas17hw3o4bg7nCGCaBTgdN2Smde6rxWBujGp3o8TURWxZjMbUzTf36hdXy8J35fMBnm2",
  "key4": "3SsFiZUXuSQqmVzuzF1mTCxqoZtipE8yvDKqdKiV2NLz7Zd3u9kPazHte7AmyGjRQjqC87P4MBvMqCRmyMtPFwaX",
  "key5": "4PrggGF3t9bBphjuxLeanmeHNR5XcQFBx9Ctk6YExqyWsDNQroer6gMF2fsSqg7wan3DtBn7yM2p57wjVd1J4fmh",
  "key6": "63KSKjTten2FeufushJBTjgs9NdsbTNxKQM4cLVpZUrX3M6eV8msGuED7tUTtRwtnaQbBpnGZS4So9CuYxZLh3Fg",
  "key7": "mfZtzaeWot8NMJqkJbuQihrTbhpTJiPfbhsB6M5mVcdGSH6nq1MEcPu7Edca9FZ39m5feLmU4VE411GMh244eb2",
  "key8": "5HmLqgnaAWbsPKLQqWEoxb1sgBmLsSu3tkYNHDU8kbrCQvcDdfoEFckQVorrjxaimc8nAHxGJsv4BD4uuyt1EQq1",
  "key9": "3PHh6Tx3kV6WtY6dgSVRATRSXwU2ULXjbGocJnmoP2MtxUL9Ymt7pd6seWt981BWgG9XgSoTaGsq4mPRBHefRiwe",
  "key10": "3MtREvTLtfKuo5fufhne5gXiM3LEfNC3iuyHzCNJctW9ovt4NDJ2scniqpNX4uS6VjcDp2PqKTtU458LmUSrSdYH",
  "key11": "2mjaaXiG2cFLGPQx6ZiTPFhmSXQLS8wAAR7Da32ZnhPKRaieWc8aPB97DmNtXwmTcq3eQRZKNfTyBQkrHRNmYLej",
  "key12": "DphswNCnceviEUCZwV5z4tP9QTkfUa9ejKf4cwMNwZ5G5y9cZTtXz7DgQtZFWzA3oiwxbEFfb1HcXK1Y8J95Ndv",
  "key13": "5D1DLJBQjKYbkVUcpZbUBHDChBH1QmUvCJEfJVVduiiMLVrfY5DwK8z6mrogFbZ2uP5D81vGApG9miT7gJwda9Ze",
  "key14": "3C97DS9r6xqCxnWR9W5sNR8g7d13cKoWuejYLNuqXb3D4yqdmQkcxDi34mqL8AgTmK76q8o9YgAsRns135FfnREg",
  "key15": "4HHb4HQKx1rpMtQcLp2ivJM121jsNs1Hog2C5YoZJmodzRQW4ZMpVmnfpBJ4ZAAujfVwizt4bFAiKnjuyex2ZZ5Q",
  "key16": "4GM8WH44bXTrehHaAJ9BsPrR7HAeRdF8KJSoNqDdvojAuFL2XhQhKx69zVowPCNGtZGTsF4zMmR6uqkRBL3yd4N9",
  "key17": "29pvn99DSUccjGiYgH3PQUCtLAnTnbEcV8qGJGMQk94qLrTjdFaTxJ32Tk2QCVDPuHbqKHTQRFzprzGHmUPkPuNf",
  "key18": "2F8QBgnVr5G55dRUXhQcu7mpbdy5MLj7wXnf8pmsDUGgWGa87isrwmfjxELs61vv6QSAL9mQLfvvczL3bRRu9XFC",
  "key19": "ibyd6oKckAs848dk2uXpaiAf9Hg5uGPQ82noPWzVbM9hdDC8uB7fR6omvDWXwZ7Cwerh7QYsE53q6Kr7hhRdbYY",
  "key20": "xXjLBGcs89anAQQL7N6hWUrvK3JdiZ84kb2C2v6EAUXqjg17BatMTJDjGWZUM6fBVoceMZYKTaeUTMraEfEBrBC",
  "key21": "3G19yM7jiehb9AkstExZEsu258sN1vdy6AkiNVwCR7ps7AhJ5VrfopqHmn8ZcVkjg8qcGUX2GM9q2fD1JPDasVE3",
  "key22": "4BXGa1e5JVGHmQVzbNkydm13fKQoPr9xFRajEggDEY4NAWsu46p9VzaVWqBnAkKTF7URptuyZx2FohsxHeB4nRJs",
  "key23": "2EZkHBKgncpHmf6WQfrEEbcpSvEVPrwpHer8W9sK9KjAzcDushhqdTGwJpt9fZY518VQBCEdXK6rSEQ9QcUmv1iX",
  "key24": "tmAPrT5bHSkdrrWPBi1HmbHqesPWpcMqrkKV2sTegQm2VXDXjcFd8y2j46u3QFdYWmD9ZaqUTGiGba2wRYcphZM",
  "key25": "4f4MAB1wVitQFUdzvfotZ2dpp6h5SJ9AYSC76dZScFpdBe3dD98cGx9V4Ajo7Ke3gckqvmDokuwXGaUhJ2DdDk7a",
  "key26": "5GNhvHBNYQ4AYnFJDaCENGJvL76ch1A9bHMCNUx2j3hDi4EW2ks5widTyWHRU35qxAx1p2x3cmXDMzbjFLQMYxtk",
  "key27": "3eMiJTnwQ36ko1NVTteUraJgdCHrKTwGpdzUqSZ7Rhd82NF4wUDJWAkqKFJXiHhBLUnMTPtQKKQewyFSmzJkUtwa",
  "key28": "2ZrxSyKKEMKwZkAKHug83DZyWQQ1i6XdGxxQXaxiuXQt4CwBEbbftcjydEu2kYnEUJwL8sZ8SCDR9P4ZKrwT6Un8"
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
