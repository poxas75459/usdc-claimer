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
    "4ni1EHk1KXjkvK8n23xTbPEFZ4fykJEeS6oDSZwpfSsU97BrUtFGbcf7MCcB3QNEZA16AEXWL9mzyaLhkinuUgsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EosTMC4CY9Euaizbnjrwfth9LQwkrkwLnwEgmxyBGoU1d2tXzQzjhHmu9FfgE9ZDjRCXEBB8LcLsBNFPtGAW4Th",
  "key1": "2hjP3Agw1uLM7izyjE2qjLLAmc66xa1GznKyNCM6edSEuAw6qGkJKVhuQHHDmuf61AUiwLownkAtVc7FRaDwtLk2",
  "key2": "4MbN5d19M7W45NHaNMFNmJLG6xPb4zCsQLNSmhRyHKdc7mALYFuo1mkHfny5a8fgXAUD6MtJmv7fiVgENJFSzDkr",
  "key3": "3zuWEFPstdG99hYmTqTPtDoXyZDgJesdavpAD72BrA9r3JECiBk7yfNrjG1ZKSuQRrP7PszXuGosq4o6u562snsu",
  "key4": "43oLmzgScYEi7eAGzpBHSPUCvHBbXxkq5wNfTxiXBgs3Due8H4GUZGmwFNrGqqGx16axVHcBDzgtygwJ7N5EqSTw",
  "key5": "2NRyWcxeA1UP5x6uXFSgE5RLT1y1G64DKrw2MXab1N193FN2kkT5fy5ySRjU3FRTxqqhJpnRo6czrCFnsSUAjzTB",
  "key6": "5rtQPAJEU65RcaWdqZaMSeWMMmNWTPQgiY6SfzMExwGX9aspsS3uijPRoUNxauKobJggUtZkwiahuncmPrQwy7E9",
  "key7": "6j3v1fvZsJBjfCV7wdHZ7uadDigpqSVRP8E7xfqzogm4W3SQkeWbpk61vgkmxkPuCuPvkQoKSmhaib9tFKKzEUi",
  "key8": "2BMhSUzjAFK9iy5mEEE3BnUUpbZRaLzUnZgrsJCEGgkhvrMaYR4wpEqM8R6Vwo1d1Te3eSAxTwX8U9814s8WG3hw",
  "key9": "2EGci8RaGoTKN77zHmMVT5Rsu5nbdap2w2FaAHBMKYWMriqojDfTpE1M9eEQZ5mbHFXaCCqLFMWt5KxMYFQH95ne",
  "key10": "3sXQCL86fCz2sxeN5jr4HtcebZvuF2pxBYiJR8WgGiSb9t5Srr47ERyFZuJYfWt8MCytNtZDKbxnN3VNJj36m1Cc",
  "key11": "5N88wAoRb2Qy3xVyPYghrF6QSuqS3CPgdfLedvJZ8dLjAdN5cmHyoMxWpBZYH9YZ4hRWVbUhzRwFxT6N2KgGwLAK",
  "key12": "2AYsGTEFUqvLj15zaAEWCtcfHYZE1zKzYJekivaDpwZDqCw5W4JYMmEaMQ79KMBReEBXQapiv3t2ivUX5GEB7PgC",
  "key13": "4DGekDyAWWg7LjtsCUEy2TzKRScMybvkMfXtxR8qMuqrjpH3MEsTcx8jboPSrFPJBU8zUmsdZXB1DDe8LL5oxH5a",
  "key14": "5GjV5X9Pu3GQzNdrz4jLsU3fiEcBjgrgPwbwG57nruSUmvWmgc2Rm1sX4a5ks7fFz2YBbQPBHGpF7MZAc2zjZjqj",
  "key15": "29NPvETQ2dndK2kQJ12wYYiQZQc8YhKzxAoKEscisARmmhNjnPbEaoVaeGbqa1KuDRu4ap7T3XXsoaF1j8RAP5gc",
  "key16": "4QNZ5xzsEY9tUU7MZJBRsNPcd5G37c713GCTSbSg6zqzB2QHVooRfNFYUJy1Pn9mXUdtzgui44iSKfQZ1nmPiuJ1",
  "key17": "4nKfFA65Yqhbk1QdWkPfZKsMjTwWJ6G96NoMFTQnbX2TqHt7w5AA3T4xrn9WoMNf6X7KmUzqdo1fZbm878eifYsJ",
  "key18": "2zpqXUT4AgcTUW21N2jxdZetAMezJEpum1xJ9GNrDvqaDDCGSQcL2trTm3LAY2ru9FgodabQnSnpgfHxn3ggFXSw",
  "key19": "5a9ivT7ZxpekYT5Px7DW4ew1etrQWAaoPpv5bLZAka1FdQHEU3yMWjyGzGpqbF9GiepQ8J7fxYWMzpnsw4rpmU2y",
  "key20": "UqVW4wXwMFc3aDG5hQhajEtHzWJ24WTsXbzxyeQp8VN4FVu5qFfigK5huMMBGm1ooF6MPAr8eMU8i5CDM6Q1gwj",
  "key21": "3Vg2DhATYQGCZWSigpFVw4fgJqEQNozeq8TTFtKFuzcua6at4oBE5N4xXsRMgTvymWVjD8uJ3EMGoTBjVeCiirob",
  "key22": "32cGxMd4zzb43MjxEq65mQkNE7zg6HCtz4uPzgVtKaJUymWcPA85KBBLNU8BZhLwTksxkXYJP1nbeS5cr58emwkK",
  "key23": "WvovPwFrJ2Sor2w4isp3mRib5Z8v6uvoW5GspLrDvZfXXJ9K5txcGX7BbyHbyZGBXejpiAcogjFnWznWXUZsFkK",
  "key24": "2qNMCDjiX2vQhrjfxxLDNE4fX95GtPDfKeQcBSr8mWEDbK55J7Q7cbJansv9MUezfSac9jNnNaFqak4NJSdnMMoW",
  "key25": "4JQhKcKcsitx6hvn4W1qAbrmWChqcDcjRSnCvn8VSnUVqDmJcwX56e67DDiQrBWef3ZpMDsmkgAowEsW2tepBYwY",
  "key26": "4biUm2Vs2bXasDqQa2rRduvwDUTojyDWFe59N3tFT5jXDrbY6gAU5eeBR5B3iQ9PzmHvcqrybZtq2Be28ktzLhYo",
  "key27": "dRtXeWkywc53vrvB2WJBc4yaWtWgDgZkSEDYVukzvK1gKGfUQg3t84uPWNU9GsKaZZ2qQMAYBwToEXK4CNqCLsR",
  "key28": "4iggVpQDhG1vwmGcWtDDUguKEwcxgUZXp2mMa3vvzemER6qE4PqFBsfRocCcE5LqadPBsyqVjytV5M34KJ4J2R4P",
  "key29": "iZzSw4doH38qoCF8sVJ197jcnWctS6KwooPx5UqRTJzFPFWvccxr5JEdkB4CLrzpcTXvDJmkqCA9hMhtF96btjj",
  "key30": "3p3DDZawviAMyLKnaNtXLREqWtUXwwwAjMPbNS7Qx9hZKcucgVTqQVEQrwzZohQp5KQ9WNHtgg2gVNe3nYkofwwv"
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
