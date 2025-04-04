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
    "59CELECkiR9GSnFN7JPYMgzQTaMCQZrYhz4DiRdde6mbtbDjLgpTXVEnn6i7andgzrL4UsqbmkH6gJHP7JrKuZwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qZdfXc5FAr1GpTdSFrfCrZniMR3Z9paExCSaFkBYgFi9LZJirzWjdhVyPjF1R8xYCe7fmSqsCSNJpBF3sQ4ExX",
  "key1": "5TT6sEv9JbSCwJxB9ivp8W6Nymt1KzLRoUWKxn5nqMvkHp41XvqSRJk1Mhdw1uw78UNUicHGazadLRMrKgTD7RDT",
  "key2": "4kbLQtPYWHRJjPrJausEJMkAhDoxpPooGmUNjZUJPcAP1WjCZLrBmCsgyi1zMs8XTmuN6akrtrUASnzT8SpFrPAh",
  "key3": "4nDmDHJZbRSTFZTN6g51T7znoKyDewP6DDfAs4s3seCSQBUZhuT8rUV8g4uXdN368txTnxyev3jwzpCBgiWkokPK",
  "key4": "26yqxLKc1n8q7CfZrU64Er2T6vJkeLnnnHs5Kf2QMcKPW63ARAw8LEi5BHiVa4hf4Gwg2R9KJ8c9re8cSx2xYDMN",
  "key5": "Cxybx3rmWtnRT96kjaxJsG63qoiLX9JDebNHHjvDtwKUZra98Fp9REbC1fwyjNb3Qxta3mpMHVFEpiXUPu7SoVV",
  "key6": "53VrbbjLqf7pUXeNhT4m8tQd4kLZW2p9QtiaP3fPLgD4k2FPJ3VSdXqCwHx8xzjssjTm4qkYzPUK4Jnxq6dn1x8s",
  "key7": "g1SSRL2u7bnBFir9YH9rt1JbCo1VoDpEBKMtdtYhaL6LsfwRX1prpgcZYNrYnjSXZtAtxVRWCHBqJb8E8CQVjup",
  "key8": "4rr2EGePVnewKhM7CrZU9R49SMFE5sneNLGrjQszYNrfLxk1jzoNKUYY8eb3Ar8MiN4d7akJUC6Qw8qgQjnzw3T6",
  "key9": "Hg75U9H8qZuSxb7zrzKhvLWzHsDWBkucWbgEdYMXXwps8JPrfhFrnVcPs2vAHVrdDbbPc1GS8RuBBG3vRoNf9LP",
  "key10": "3SQFZnSk1thYaX5GaGif54z1gY5KZSw7mwGQTPs2AfaQMKYbzLqvAezTznvFci9EYa9RFznNwjJysvhymjNLxKZG",
  "key11": "3w8PYYb8ca5cR1wMiWwAqiAJ3LaFz8MtY9tbQ7xNeZJakneqAvyc66eNP2aBAwaQbMTzpCBJMVQotWWyUZ5SKEBk",
  "key12": "56ravn8zT9f27Bqn1UwUX1gnE8DGAUwfnj17PJDoqPVtDGDc66kRohagb8e5NSbTxtrBvhxeLWyz7LfJpVheH9RT",
  "key13": "3YkKSXLyXzg19eEFEeT5h2fuuKyehhMezcz7GqtGJRpwjoW3GZaHt2DfetRJ7dw42pwE3MQMoyBesZm7mLeYr2gw",
  "key14": "4zNpBvX9GAgCMduWteCxE9by8QDhCEqN7HpQeRnj1CHuG785sB6Svtg3YGrThFWujHuyQKdP44uSRZjuQ58jnijG",
  "key15": "4g7oev6U3G48EjFawuryKGdsRJ1cpDWCAKQgdbtWVLxZUK6aZX2a1sbGgRZkmEkiKTqVSiZbDYXUXN8yxvKGq82A",
  "key16": "pNt6acVhXXzzdXSU11VSLvNHQDkDNjSSoFf9hyQP3616w19VXf7qJ9hJfJaRoAWgb6aU5Tj4AeX9uFtvABqTQLk",
  "key17": "5DsppAStbdtFn52x2ww5oHZge46uTvDyXeWbGwDNBEQvBhjHm4G6zGuiPE13nZBBWxizdEhakxx88VJRssW8dK6o",
  "key18": "27aNgE5T9p5QJ8ZBT1T8PJzBnsfn74H5ELi3kpXXv9jM72ygjYerkJ6cmwU6sNZnSdRt2jUoxZYAHcKjQAQG5Jp4",
  "key19": "2cUHqEo6MySqru3mffag1o8gjxvKyyS35z6X2ySLieMaH6MwZn3csQk8J263D9bFuycCmmWRmsTfjvmUv65tYxDK",
  "key20": "5ofT3M3WMTKoNSUmnLnNGoWJrwXD2jkMq7GeRyw4g8hUi7M4r2yKe2LXneDAdYgwkvvGC3DGoqMRKyQs1NtKghTE",
  "key21": "4ZxXaG6j221AjZy6MPMgHv8Lpp8wyEJdTcYe1FM9Gpm1PjWoyJCVbYNUssmQ4pD6ZyW2Hnw1boxKMCPRPYig2wrq",
  "key22": "4MtffU1BgKXfbjj54veVb9pGcB8pZ62JMMhZoUcVorQBVLknd2af2q4QZUNHXtSmzSaEFge9jnGuMZJEC1Qg3SLA",
  "key23": "3DdC9TrqpuWVFLnhytJoiTcg7cB6J1w5663HQQyT3M2bKM3K9po892foCZMWHwkeYvTHvKKF8zMkYJ1yhjfmB68S",
  "key24": "2Adcbc6JF67gmjDTj4SgNbk8QLzbhUNV2NGkJGRh1MGUp1PRDqi1S6TZjsMcJVgBCVP2zR8LdE8j9wKkSm4VeLdo",
  "key25": "G2nfjvNmhHSErWPgEReZNsvbkdczFfreULnUxVmimxfX3phcYbKVL3TCyBuepfhABZMU2XfPZrkfNTUDEDd372Q",
  "key26": "4oWg1k6AFPVe8JiEDVZpJsgGLPFrQsiVZXFCVpZG4yTpbrW8usskkkjnSEL4viM43ZvKsdDtLqibmBZnTiv9ckVt"
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
