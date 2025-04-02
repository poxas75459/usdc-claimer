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
    "52pvrcDgxPmNRNLXuU6cQa69RVfVpQE5Kd6P641nGdrMi3bZgLfmv5XLZaA8gsGYZxjYxmQRTdnhuDYfY8BUEDph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MPuyeiUEfAGJMofSZYpJox2HYytMSCXJgMxYNPFDbiWXs7qcR5pFDU6taJGxWTYumGjajVjcwZC13kSZN8WYJ34",
  "key1": "2CLvBHPtLj1hEBhfvuFdG6E7h8HV2ArPkc6qyYiGRpaA1PcHep6gy7d8qHfQaHNFbB6GsQmYobCGvoLnMFPPf4sm",
  "key2": "5LfjzjZKF2v3TmGf68eareynM7j57K24hL83d36ZNE2ugQH8qsHXpFfna41TjcBcoRXEepqh1iuQkkHGhzN2Gdoe",
  "key3": "3DbM6QvGU43asXv4z8Vo4zBNaMLPow3StUexBKFTyXFUhqs9Xz5RPN3GPaENDkbUwgECYsv8Du49FuFamTK7zuGH",
  "key4": "3iPG3B1kpWTq8QyAaLPn6evvWFLh6xGzryKB3RxuFNEgAXgvjh6KYP2DgKNfsJY1M8qZLM9RRrNK9j198puEHSUn",
  "key5": "3jGLPPZYT2F51HDSmbpiiTbg2ZngyoB5s8FtKZ7eKZW3Atz7tUmBfdRyGpsE2bBKu7DyVsv9rvjQcH2AqhNyxybd",
  "key6": "522YDXrm5nkHhMX4nroAA568iN915RFSumig28iNgQQEFxoydVPD75LwKLtadgKJvB7SJBhT1jRLyrYxsdS4zjxP",
  "key7": "4ckqu7zYQKQtggSFQCm38jrRaSbbT32XpTTQbrknzQvC3aTGAJwivg91FTWbqyGEv8dy122TuTZLcJQUUVhh8pVP",
  "key8": "dY4hgzDPafbkGBqrJrhtvwB71T1cmMrNXvrmUBB4rRpDeCnSpt4ktHqpNPqySLnfSqVFSw4R38Wo2Ur85yvGvXD",
  "key9": "5VK48pE5A5oyapPzTFzwxXCYuci3v6YhyKZ8TfZ92aK8LQungWV1yk2pKSKBWh5kYNNhALFYsENttvamUwdwJRVr",
  "key10": "3j4VTJmzZ34v1EUcgTvUtY8aiEdRgzozt53Rzun1sRdvPEVJ3qYzSfXUtVyUgCmxYreZQ894RxeXRgQsSbAouUDr",
  "key11": "5yc2tqQ6GVppvKCdS6gQ6n2SFKZfwqG66eC7kBP5zjGi75dkAfsaTU4Nkp2QKxk2nx3YcuAvczTdG6EFjg7VgS1y",
  "key12": "4wBHhx8wvhU6ADzjsT6nZCxDoJvuG9vfcb7TGQT2khXoifNitdtWPcmWZMk98Z5QZtFTqxUnnKPyoTsDo9c2HiK7",
  "key13": "XoAFdfMFvPU95ksW5LosRYbBwbztkWmWazMzC9gFENRrEECDzZEy6rvfufc7YCPR865zVz4ZqvVHL3YmjViBvuT",
  "key14": "4n66PP1ohagkp6Pq7Q9bFxU7xy4zwfaP7ZuLMge3D2Sj3nW9N2aCemPRHdYz2Jm3oQNUM2ZwmhPjANvLe7AHrSAo",
  "key15": "5E5kJmNhj9SqgEzNwjshJCnDcJ4DVqjRNB7w9aUn4u5quD3jyeJvH96eaRXTEW9LbTjocuSF1CfUKCCuZRWgkT6n",
  "key16": "3cNFvDcL3Cn8ZAXQNuq4Vc6ScHpqMYwqTcmRWvMWck29p525gPmEg2sGETFcu393fYr9wQFLjPDdK1pCQKF5zUcj",
  "key17": "3a3Fx1fxX72Yvxr1HtZXevsAGnbduQdQRBuXJQmq8xA1BwU82peLJeErKasrXfBEt4v1ReZ4qD2c53VwSmJcZgQx",
  "key18": "MrdacK2YuR9MmjK9VPrRXT6jQqGtw8GUhmKqhxGWoxkFdbWk7PSBapFUk73AYN8g8zpRe43bBGFJtyob9MULEPF",
  "key19": "Z18hfaoF1cVaLMyQMzipWZ3BtuHVWJtdNrSq9agjRLMd3WWY724MgnkDv1M7g5H641qmS1M2cqyN9zHpqA3nPmm",
  "key20": "zQKdE1UuMvrAxraFyQ7BmPtywRQwggdMd4M55buxgGnyLP2qLvHwnfKm8w1JxeUVKkSNuKmxvsg5vCyoRDfC9o5",
  "key21": "4kHimUhyee47GySQmDJCdV4UCYXYPTbaaFJDKgAabj1r5CRUwsoUoecwi3q7pw5r3Cn4sDZY3o5zwQmPi2Bi9Di6",
  "key22": "9R5RKzd216YGxm1PhjcdqddL9LpFuPpqNP6EyGf3uex646kzGYgEbJUvBkkPPvJCcujRyM9GPVPbXh38wkR4CKc",
  "key23": "PnTV3zcqcTTXwP2tr8MJUEgykPKEYRS7JHRzc6gxdH3KQC2bov8UqCDbbgZzNQpgvzDTHpEHmkaUVJAtNm42pnr",
  "key24": "3QVgNaw4W7JKFTpFptgKvFZqbELeqwQ3HQHEQ9iVBoNHkxFPpDEyjUu6n2qL3YWF5E1VjiZxxSSX1u1uJ5vT26xn",
  "key25": "5GpkzSB4J9eEySnYpASw3Fmw5RCSbTqzGLznT4xZZnc8TXYXMp6RhrKmb52irNSTH2XciPi65Waiavd5mhnWyHee",
  "key26": "5wrvV3stSYQ6B8kTgREeUQUW3rkQqJvb6QRoi9U2trZegzciGNq7rm93RwhLiAX3nuKYg9r2iuv6UHdikPeg9hTP"
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
