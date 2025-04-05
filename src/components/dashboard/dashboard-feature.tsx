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
    "2s4gH15eA9RajZ2p6geiZemdEWoSuAAVFA7gfdmh4jqPvtBkz8ixFpe2VFzyff6uFgFaZRhE7gJ9TeGqUxnsfMCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "553fQRY93NHiF4oidu3ipDbhDfeBsp7KpiUd6mqgf8GVfu6GYLWCvPPr44N3ea6HSJkNGLVmCYJRj3R4Q3JJgwYp",
  "key1": "4x9RpJ8BHLqBRtyhsafksTFugb2rquAPgrcbxdnSxpRUfxKQR4REAkzAk5GxhUgvBb2mA8XGLd4XuZRTC4KQBwbi",
  "key2": "5B964mQhpgAQKPFzvBCKxuMUA5Z1uEkzRVu4XgQivwHZ7VY3gcoz8BAHYWwJGQ51qaghowKAwzMKC3PnDXbR1bdq",
  "key3": "CKrpx4nKuZ4PSAEmxzQdrHHW8KYYTnYDqpD3nntB4eaHPTDzGYcxdiNgbSRR3NmhupqWFrnSRS7qRuZ5DofhRHc",
  "key4": "VXQtfqTHKTvuBv8tdYHcFwZGPAabYvYrQFRQ596CQjngaLcxYZg3epixE1nBYTaD36YuzXhvjw26529K2vaqhAb",
  "key5": "5JAFtdL9iUNjM655mq7364oVtta27rUZpXGRRMJQxigsSnCYwrHu5fRK4iC3L64UGxsdZtJnT9Ubc1DqHevYeefi",
  "key6": "4asy7iA4e2bbcxw1HzrnUoCf8H4PEm3MrTxh1HUHotjdsjkrQdJYNuj47yyuQsXw68wL167NhbZsZPk76XzuBDaa",
  "key7": "24mym9GFwB7TdmabLLEd15XDHEEaBvwwwuEUN3VKoVwSsDNKQTtseZRiY4bwbQ4fwBKHC6XkZsFFtFGAVtya74a1",
  "key8": "2hd74tvHogvSDGvRzd8sCvqz76qS5djEYLUiQuALjMDHMfU5TfmR9nWSeiRCSnaCypjzbP4AjMWUiqHd4oLCaT4K",
  "key9": "3PUftGa7WWL8tubhfAnkwEwgZYyWqcwMLoEEYL1EXgpH1yVoqTvRJpEEyyVFrADVP5FRn8nAmi84Q9Fzjcm9R1V4",
  "key10": "4ctvY2S3a1AQGDXufshUpU9cssF7oBqZ57XcyVHDQgjEuXzq34mPZzH8MoyjgEgY4BqwTmiTT28X844X6gFUVoky",
  "key11": "2Xd2fMnBchhif8yRZtx7dDVMijbkrEARBt91WLGehdDujxN5LmzL4sHCKTHDAAUZoScSjy9Rsp68FmTVgfoTbipm",
  "key12": "53XdjwykvjaaoMUMVVq5ZWDTRRvvR74h96rzsja6sva3ceBnnW9S8HEmNxqEeN9W5hSVo7KMg9xNZFJEtsqgYdcW",
  "key13": "4qxRx1RFzwLrohYiDHRjpWo7ritENGghrGcK3PbJRTMtBLmsGjFhShn4BqDNEZzQxomeACyMCh7h4DE6KDbGhWe1",
  "key14": "496PPoxGUfzAWeDnvoSotQcwqLRQeSr1yxNc7wZq7jyYdB8gTN2hHALYK8AA6ERSsJYBFdn3WEYsihnwttdDtX3q",
  "key15": "2sZ1YC4bnTCA8dXeWs2jmx9ySowncQotLEMyv1CGKjtxsrJPqsyxJUGiMWcWCZWiASfGchc3XeS1iHyXySFJxvYD",
  "key16": "2dkwLh3tYd4Ut23d8vBPXyMHNgGoKGXG18VjuppWmATxmNty1nkBGS8pPBHBwXdxdS1tcc1NspaBZNx3YEJzSj9K",
  "key17": "rVyvBGX872mUbmT68LtEd7sk4gRAmtv5vEWWoXz9JAwp2FSHbwzq9wR9pirfrxvKTz8zwNRwHL2DxDgwPPkMwyJ",
  "key18": "4dvcSUFaJmH44Kg46mZsKUH51Piji3ipERXj2j7n1z79Py4cwLCh29CvTX86YJ1xzLUEyvqhfWuU7ccyD9VbvMMk",
  "key19": "4mgtXLmbrkJ85m4au6tVPD2t1uf7y83a2KCUc6yTA58H9qm8P4jcqmPiX7cWPqurgD1sNKyPcRTGKfDLnfaAByyy",
  "key20": "3fDCwJnXz1ERqK5XRk17Q1nR4oiLwQcA5TEuLkGp6sBpwcmx6fG9GQZtMPfiMKWpj6xqEcZSBrP76pgGn2etbDW",
  "key21": "2gMja7dMnxAcwTnhFRgWuF3NMnbYoHEbwWQtGdLQMcu87feVWPSxKSmrMi6uHTGV7xRyz7KsoYwfhDLBteJdikU5",
  "key22": "3TMpWuytNMFSuSFXrBeWYunP5BDUjUKs7j7pJyqGbRLsAFoaffs2AK9JuPpE6VrhwEM99UcVvhEVzWqyA9VR9zmJ",
  "key23": "ygmmPLmnKbwpczmTNJ6VncujUx8pzNgqqDugxNyvzknjoTyCpYadKmddcK44mpaxkGSaaXjWKkKfgeVzxojCKUD",
  "key24": "232t1KgZGjnhCgBrZX4H3kainU7GDkiNtfUxqkVxPBo6K8kwt1dtefqSVWw542zY6fu6tuWPzQUSmCc2278BS3BW",
  "key25": "4HMdNjEmoqWnYko2JtXqRR9vVUZZH9xmScgzkpzdz3HSiVwz9xgL4NpLd8RBH4dUTSacKZyCVh1R7MhM7hsm7nyX",
  "key26": "5TB6XayQFDCNxu3Wfk6QhiwhadpBoB4nghPLd3NjZtiPwfJftPMgioHJjpnT7yEt1VL9jnAa4cFfMiJi8fR8mbD",
  "key27": "5K1xTWMJA8Fz1xkxgS6TQmAYUmxjdmQQ7gTvKYkitAVEXCtgfwA3yvanGdLLUzJiEukeZPiUHvd6cFsVJw3JsWtk",
  "key28": "4erjbxkvVCtfNr5izBr6yDPTmozmAycuyBtaW6zZkuAEPogpA8riJSoC5djgAnAx9uVogC4r1tuudmNEFfQC8Vas",
  "key29": "2iENBoPChqdjkRt39nz15tKqNh3rURmwDegjxQrSDVvp96HCiTH25tzVV8mQnYponixaHZb1CxR8UB2JbN1AZzPe",
  "key30": "5h53sNR4mBu94oXexzGqkDdVg4maeAkAkKdWy492QU1GiCEFEVaDQY9BLYZHMhiVXT18FhiRD9a9o2WpQ2PQcrEG",
  "key31": "4YZy7gmtvLESHB5jpa2rncjEaQZP9KEULLm3XR5W2sKt1nBxGNJmqGwVd1b4qVSL7ycSBj7CCQye89TN6wPGToYD"
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
