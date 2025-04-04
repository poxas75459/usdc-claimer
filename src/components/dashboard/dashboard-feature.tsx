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
    "8C8SMRcVXSmrHjLMf2tvkkwQ8Hp7p6PQmKteRfANd44zhGmgixuHy6C3g2tXAdVvwGuLAe7HocApy35jQ6yta9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64xzNC8m7g9Y27mn94K6BZkmEQvSNAoNz9pPHgXc5vPcUGFBvgSBdnczjRtSixMA71yYMyS3PBVupkwtqc4XUZmq",
  "key1": "62JPeoATUgZ8P16PegzJWRMcYi7axPPz7xMkHnjmx2dGW5u8yuYuGjnLajuqJQvBcDyjGWecj9njWbFUdhwYoVjo",
  "key2": "44RjPjiQbp17hEdhNJy6b7BH1ezEcLA6XbK8eHWawWF7DATDvGehrfxNUvAcUebqFkktCEBjv2EdUnfnMBK8BzDx",
  "key3": "4dKZNp78jr2VuTzVVdX5ikau1oAqTXEPNYKpa9dwfSLAqNY6H8KB7qXf7jw2Je7kbBYPhZiGWYrt6tpakWXYaeSC",
  "key4": "3qD1wXvZm8mggBoYZY5wECQ981UTq2yNMtMETdXbeCFbma2vuVhcC4B4LFubkzweD8rCYGf27kW75ep3uhCE6BHH",
  "key5": "29ztUkViQ9KMndQau13cicdTDEYxBamCXW51qsaCGDBkoEbtPzQbYVuJQAfSCLQ9SA4EWfpWDggjXP8EgJAF7CJH",
  "key6": "23gtjUQ4SnGcRnFTXPcRKsPpunynVCRQmCLvNZ1GdgSqwHh6tnzvMtQy4dYmjcmU1JuQbEeNe8VC497AFktxhcFg",
  "key7": "4wzrd5ucCK6SCQg355PDsNUghmMRnwZ4D9eT2aK13x4tmL5fpGL97efRvnfjWE6PZEXcL3zWmEfWRmGcsSYdErYW",
  "key8": "4KSY8cndZYYLN3XX3c741YRZA68uyZT2AKMUQ2v2YxJfpHc1Tnc4P669Bwjci8HiQUkLmAtRK2Mo64RJVN3TYFEp",
  "key9": "3zRVd4AfpXBHQyJ5Rco8wie1PwPrrDZoSTB2pGTW9Qzz85Wfvxg34aL6jKMGLtLdSuneQ9HgXgX1nFFzbsQC48v6",
  "key10": "343fQ53Pg8uJeXXW7cSyQvtvUVzqTi3HPPjMELbsXvYNYTiwohMqGYnbjgpkViJ49XqRzNPy665YVju8b6oHNAuY",
  "key11": "3t8BvDgu91xv3N4TyEkqq2P98AuzUXAttYd7KNfpmGndc2N4ubigTAHUrhW7QMRknAe686fNDJALbnm7xcWiJJ6X",
  "key12": "AxwWYS57cQabQpqy5mKZD14i8Q7NRUW5EF86qLmjsaGV1KGkB4h8tLeW28rrRTE7oRM6nL1FnDxmbPYZP5nka9c",
  "key13": "4YLTKx286WczciQCbg1qynh3UZou43wakZZWoAWHMNGGGqUGY7fXPAy1g7FyNid72VD245DQq5LZWtLadxw9AQui",
  "key14": "25sq4k8oen2rbtmw7UjpyuY8LGgTnHya6CWhdRLfAcR1hMmcQN1XiQbAVuGfGQe4kM8AvHTJLho2MFRmRPVNb1Qg",
  "key15": "4YHF4AFd8hvbZX7MSnhDHyWnyccVzNPQJF41p7nqCnafvVgmBe6Cdhhztrb9vUMHLvNFW62qtbYMLV2GjUW3Acxz",
  "key16": "5SPLDcjdc6B1chRj2QpwTkQVfLK2A3XrzmojFm68wDTThamr4WX1XwpLFjBdfkWLADe6d6gU9u6Z5FBGrsySZaBE",
  "key17": "3urFVyPMcs5ZQzAPXTUdpRM1Jf3EdQg3uJNppUioCmzLLWFbJHLKavfVLn1S8rV7cUdkh4Wue77QP5HxwG7vwdLs",
  "key18": "33VZMt53K4tNQZ9wTxwyZWwnj4PBcV8TF9Q3s8iWFjJ7Y6UoH1yC6pGUACueASnNY9iLhC6rH2RKifB6geLCkLE9",
  "key19": "da6DoyjuNcnfoDh3TEUbfj45GkCVaUjgsZHrj2zgn68fd6RveTGvK1eBHA5dvxQoa1CbSw4SNwdeJQ4m2SiGXV1",
  "key20": "4HCvLEgcWUeQcWVYkT5pipgamfhgHrjjot2mgoiQSujp21JaVdLLbiw8zWZTyirbjBW9G2vjYBDatvjqoAJdS38c",
  "key21": "5qDKHBFy2hBcYfA4uxeQZAfJwfXB5DFoDdjN7pCTuygMvgU6W7Ck8PhYVmzV9eXgXR5PBzNde2spUuMV5SpDkSKH",
  "key22": "5CWxfMEwTu55E5YvZL3Bn5usPvcYcUnNjPFTZtxXCfoFpTQEP4UfyPoscshmQD7kXrV9sMCzraR7aqrMPqKd4WJi",
  "key23": "24sgP8x9V3cX49xrNNgikZxijsgatvzmtXkFQYLmceh6vwGgbA8PQUkbNmCkPDyn6tCMYf1BxKfsiTj5qbXv1D4L",
  "key24": "3crzZTi9fLqJtwq5CakjFmHwJ3jKL9V2vYEqxSJWNXRV2r6dxYhTc6otYFeg8uSPuFehjnpuRwkvuCZfdnDJ1o1J",
  "key25": "3ZjQRzV2mScEHZqktTE9WjN4n9j3VdMxDe6jJKnqf9QNGxbJWkYAt6SHbf5kTEBw2iq98JZDsZxNhKjeYD8JeKBY",
  "key26": "5TAjGBx9ZAJxLsJEkjZqQtCpgTLrjEuqfrkJCmMp7Fkz3hDGAaKT2sFN7vdcnboeucr3er3tsf5FUdTi6GN5Ad7b",
  "key27": "61RCTetEEi39H9Cdn18i6egjK7qde8dqVuS2fVHDZjdUiUpcvhxsz6nVUcuvFpvrm8ghseXneuLw36vBFy6BauCp",
  "key28": "2f83pTxty8Q7w8F9Ud29zjJHnMAWpTRQi69oyttGUiZXCoH9FYEKRwfbQnuudGxA7GkJbe5bwJMT63YM3uvouTeu",
  "key29": "4wgbTk4JtchabsZdxorFRcA4UjBqHf2cc7dF1HL2ffnuLfsngPpiq57PuAv7yETLRPtzC2B7n2o4j5d8qCCeBKvH"
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
