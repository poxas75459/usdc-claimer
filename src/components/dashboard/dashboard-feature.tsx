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
    "hUbqhZoX9Mvd4dSFh1ZDvy2kFmK5UrrxB588fX55irXR2nUGqw46py4LQyidNeT58cEeiqzcVpqr9VGARdL6tb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1iC3PYtmKnbFBDNxP2rEGo6P5kZFC6iyK1miRw6xrjk2JSaNxxoj9uqum6RAZgHS98jSoRfMa4ZGUdDN6RRtHpf",
  "key1": "4MuLtmbQE6LCBhB9BMYgpQDr9wZ4kt6fWbGCzdLPj6UUzLN6XdpA7Zd6fn15m6xxZmLbjGwHmsPnJj2iPUCmWdw5",
  "key2": "2Wa58TPKL9Z2BG8EWSkdt8C7AKpht5rDFUaHNZuRETD1msTDd5FoftyDeCEQqmJisb7m19x9cMxPuA9R1VSGunec",
  "key3": "a8mmiCRmAd21WViCFykZokehu95UHa2SSsyUqkT29MeiKzfYSGNr794uSS6AR2wjkSeAY33GHe3p8BrjPsowvbr",
  "key4": "5djSh3zqpvNi9baqEYZu5zz9omvPFXfjo3UgcRTwKDMz1ctqCrphMPbBLEXY8nmqYpMbtiMez5E9WfsveV78KMQY",
  "key5": "v5uzC3ad6MefgPaCaYez4nGGMSCbRLFmKEXf9wk8A4feV9Hmsbmge3NXgN2FvBpfbnAzMkFkGQrehbhegZBur6b",
  "key6": "5wQ18aYzUL5LbMB6i5RQENi5NFaak6633QuuMyB2QUwfyVfdNacfFHoVyEfddS2SUT2hULMWFDGFahzURhpHDtyD",
  "key7": "23b57DcMrdsfCWhNWGMp2iNTthDwhxc8aCijkM5juFdQssEBSRAZFbA2h5zcR6AjdMd2YmCan2HspXoM5k39y2E9",
  "key8": "HCHw3XnLXVzMjNCSpBWyGEReCMh7uUchddusBCgHk1jsapRAAVPbgDhmeCnBSRtHTzNo7iYbonakcd5oAkSEhCb",
  "key9": "43JwSZHC2Z3DqXvmP6XFdb35jWZDzNMTq76UyRYEuhnq7dUKAiRQfSMg72xb5GxpSD7ZwEaS83Xbv6q79HgpTkqC",
  "key10": "3ncmwmTdNEvBEAsJGVLRjNxUkGr7ZaZzMhwMFFRGEUhjrf3hbkzbWywJozF8ojxfL3p11z8h9i5XHUuMi19hKTg3",
  "key11": "fR3gHNDJ4QBhU2fMp3f4ExdPKRVWpzx13LbT6UNnuvrd9CNqFf34PaxqiydbuKsvRK5imVkE4e4q1BMkze4QqHj",
  "key12": "2HTxgGQfCS1UaTHMYskA8Cq7HQTD6MaWRbKhNiS9BWK3pKhjgYgRSK7YVSuAYYoHVFtTTmAuiprKTtVGxPk8HCS1",
  "key13": "2DUkABJg8bizT65MAQuQcfh3QKABsgJ7y54bcQnzFxU8h8ZAdpzc7kHxKjP55i4uV3PDDso8fTQ9nxWS4mf5k4u6",
  "key14": "3dGpF6bZ3wrLsmAJMAk7rUFADDKTLze2ZS8gAjYusQNhhRQSEhpYQLZSE1k13bUqQH86gHchR7qtJvav9GcdG7t5",
  "key15": "37iBK8qdK1p1Usi26xo4CaB35XUDe8h1hd4oyema93KfWE1AjTo21BjaBp6DyrQdSBjy7YKopbH63wQ9Lo5xKK9Q",
  "key16": "62wcneDRZDwrRRSur99zo4KXzqWYqPEFpD9LMaktx9Ud242mrAAfpAV6gA6NYnTGw8CZx1KBjSQTNbj21hAcWMJX",
  "key17": "Y39xP8WgMQWobqvwKZN9c4KPj693euSLfwUkn7CKt6Jkhk73EvAfBsed6K7aipadiWqfQfrkd7MR1gH42Gn3tzY",
  "key18": "4QVQUaKXXg6aYGkwa5U5DgMrkYENWGdTBy7XqV911V9r9As9iitxPH8to1hvwsU1w1DtFVVcqBwK7Mb9RMvvh54o",
  "key19": "5HiSGG6rmaevQg5EevNxPr2rnpRTQAG2TfT35ZKiFgWqGEfyoDZ2P1eeaJoa2VvcWuFVCZP96yPiWpeKstXpLE2c",
  "key20": "98JuDS6BZM9sxh92onxizjU2a7rzsUWgNsqYL12tjMD2rQyXq5twQZKd4e6EPvDjbmCiXzLt2K8NHBSzV3BdB9F",
  "key21": "2fBHS3D4LgV2UQr3gDhMmfo9UJXwdwv8JsjhZX668paYpmXHBM1UVZXucHHmF14UpFwdxEKQFe6hfd11gcJMgzZY",
  "key22": "4MrmiR5tfzQmvZazPJtrXBgjFNwkfhMxyaojHBrjMTv99gjHKvEhMB31gSRhoBryqbo46DEDf8r6ee3ebVm9LeoW",
  "key23": "3aF5tDqUnMLxYQbq8GhK1zrPuT9ock7fUL1gANJb1pXGFWfpBdEobKV99K41fSPE9Y69pJVhwC8UwtRykx2YHf82",
  "key24": "5joe4UAHPUPQvJL5GRPEaMzLUx7faEe9b2poTEGkpcaAg6vFHmJqa3CzuuhpWXpLjMMzdJRrU6jecYyihZ8Yuuv8"
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
