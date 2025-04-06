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
    "4MXfa693oWo2Dn5GjnixSStjyaGCRUuRk3MNJmLrue7D38V63pBFRQ3XvttLM9M59WmtWHQ6JD1gksGEHKa6mPmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "556Y48rP3xNhnGacrmbCCSyUKPVAfiGQjmiZjDDVPBSmQBKfptgRZJaS76hN2PkMYoNtXhTbKB5nP6dxitKAewmV",
  "key1": "x9qKJ75DKmsu1Tn3MFdyC8hraqTPVWgYYzbpEweftzCxnw7wLHG2QC6WKCnEW5eDKmmS6NjgKkjuDiy9M14FpVb",
  "key2": "U11YcHjUYbB7aVpgC9fCwX6J2ckyYkyMz8LADEyJA6G1TChf66ZpSsxEVTLgvcDCV7XprCtaqFqX4E1CDhxYoR4",
  "key3": "3KShkpDQc2cRUBSrq4VnmyuDTASTG2vcMnxR7BGQmBaPzYDEPPbQogZvfVKdLC7wxVUzk5m9XxtTTh9GhRygU4AP",
  "key4": "YcDNy8w3yPGrXrtwp1uWbnCyypZ5qif8z3y36sYaYL3NA7isG3a7UG1UfqQFoup4K33XuAMPmqHyRtfa8QExv4U",
  "key5": "2g8tEejmvGmPDPZYnmWeiethmEH76CbdWVtdShohGhPkUyCsoxXYDnRpPwq5P1EKcpP99pfXDoZZEg6WXmQVmnbB",
  "key6": "3vHRauMEQ2Edfq8VCjeTqTMj7BovBfuJJTTzP2JBcVs7mc7EFAE13Wt2p4nU4FUSGahnNwyJKnT9QCXz2c8K44ro",
  "key7": "UFKhJim1RnioPyeE9NBLjmTHptjDKwMeKdFcVsSU7bGDJ8dHUucxXt3SseSRTzAFPebFqWnzcVL4CuhLGysFH2f",
  "key8": "5HjTPa3xwgY96TzbfW6m3XUa2didogWsiW1MSvDUANPmzj7U4x9hJkT1qydev57MFG9bJDPeq5ZGvD5C518Q8y5K",
  "key9": "SmMtLUps3JM8nrTe7LVBsqu72gi3AqkM9iqvYg1iw2WLFqkjSHiw5B5vA583pvEAz8qTpQD8uVV3fwSx368KuRv",
  "key10": "5Q1rau8ndHeNK9tJzQFo7HK6Vjo9o7y2vmsPcBUiDMVQxJaN59eb1Xy9EuCbeBJc1GibPAy5HoZaLZERvTbYKZdu",
  "key11": "3HW1zr2ZCHaPKNm7id7ShE5GcuTHgJ42cgTmei29xegREgLEMv387Qa2sU1LszuaaV5x63oebtgeAyeBhS8N61JV",
  "key12": "4qDz2xK199Y44hhRx2pBZxX99LzSuoim6aoNis3X5Mc9SzSqrFzpS9h4QqFGQHvHkp734jR5J4wWUyNnbAm3FVSp",
  "key13": "22zwpjvb3RfZxNuAqe5dthVFDY7MXvXF6NNvmtx2etsmb6wXi3WKvVrSLmkCuoLxtUSN4aKEyR2LS8mr8JNNqKsa",
  "key14": "3R6RrYVX4sJVFiCHD5jhLYSraAGdRoD3e7di67hSs9R68sTZ59NAFdoZ2XUQDA8fyc7CEJKQMQrTJxDtWYvQxfmo",
  "key15": "L1Num4wQX2xZ6J47isMvqT6GZHDBCVYjduPqLX5cc1hTdGPLfVCEGircwwbRUsj392PSAieEsXgiHBNUSS1Ru8U",
  "key16": "5FujLDvEtxLcEgTzTZa1WXtb51inWma243H2kZ5T5Eb9wXvqFXtdAftKFMzpZQHM1yqeFjGmGeB5mY9dWR4v3ThB",
  "key17": "5jvgYvhvk2hUJ6hxAt6eSf2nXQZcdkBAfiek9bmwqkuroJsDvGnoCxNm5xd3RyQzubDGGv3ZFiuvoduZTcUjuCWx",
  "key18": "5HVfM8ax8T6J8VJEG8MyELALDmC2p5onpdYav4M2Rv1muWTrW6gMdajv3ys1tMsDEZT6DDqnbmyktV3T7n9KFCda",
  "key19": "4ZM7yPcebNqDeEcaahdtxa2CjmanUzm2SQBVBfqmZPhb9UKeWozXdZoAP1M8SVsPFRz6WMJN9arhSPQwYUYTncQq",
  "key20": "3hFeMyRa87krhYRNNzXyFxKSR5vjhTVj1Kx1EiX31YooveVgpP4Buu7mAcL5tHZH158Z7iNjRrWBfKhaiWLmR6qE",
  "key21": "55RdCedEADx7MhDxRe7KBGzuCQG8kjT3wDVvfcJcVDnfHaZY8iTv1g9jYboVDvBNECLFNmbvgJstmqH8BHy3e1DZ",
  "key22": "5CwNMGMj81p8DeCCRkBRDcrU5NGya4mFLAriTJWCKcadGJFgMVEKpZg3zMvsztbEFKnmnp99UpWZC9qQgLbocjsG",
  "key23": "KmVR2j7iVdXkiojCPDB9qxvhVRygKPD1aSvE8STPUksAUVxBuwWSFFeJHDS6ekn93t7hCXjeMTXVYf9jntkzucc",
  "key24": "5Lt2AXJXQxPt3SzDSUfDHrZobwQ9CPpKtHajXRz2oCRJyWtPS3biVpafVfdRr8UGSHz3R4mN5P7rR6vZTQH7J1va",
  "key25": "28CZWvKkpEjVs3rGsfdUogzBPBkHZzmXzaXEQfGgypUJjYDeGWoDpQEPDZM8yfGw27Yd4VtcsADptR5hewhfu7fd",
  "key26": "17xe9ckw7oGGKBW9UnZuZsRnYMxnYmLRYfbhD1dHvf62v9EaJ7DjXy8r4uAbviEWXKpG4QJe3c3a441dKKMU9ea",
  "key27": "2h6FN5Brq1jakXpUUe63x3gLa5qYiwXUcR3rbxi1topFhkC7GndyCQcvLZEQ4dedytUsoDZEZtujLkSiPx6mUz86",
  "key28": "5EJvAB9nGJiNTSvUtG39d7r5vjZzGFY6ia9VZ157KQcwA5AGBKBD4bPBqNzSXeLLFZ5DLr9mwymzamkEhYGMek1x",
  "key29": "xHgzyFGBjozKrYHb9xPGpJNYZtgdx42W9JJRzJCUwpeVaDdZcC2NJWqDX3NLFyHLLU44iNWbJSzq3unXVmmyr6i",
  "key30": "47ARKBwZLj18T2Cz2wguV9XrvtVcysv5xcN6P26f7fR4DFoMwBUWfMRwPmpFhdmdYp38ocvBsQa8i5u2qtEU3eEx",
  "key31": "4qkbCDNYHNCKYRZusrPLpXcVNU9q234SseqmSKoCkfT8CxC25SM68CATwCTcALxyXF11tUKGGiiwvGC4esvE2T8p",
  "key32": "kFXiVze6sE7ATYy47bRi551F355NjfE6TiN8rgpMhbir51Eo2FFtJYiDRGtUvreMisAoy8kcpe6vASJCJUV5whY",
  "key33": "2dDMNRYtpiLf7JEHBxbB2kU3kypg5t2CvCqj62x7XhuhsHdG8dxW1s831MVwVNkRES2QzJYJuJH9paUbBtmoQaKZ",
  "key34": "3Kbfvyy1TxqjizwepL7cLTeonHz7X23JYxS3M7Hc5MFnyLDUSLGrYmceK7k9ocdCS9DPiqnHHw1i7wa86Fan584Q",
  "key35": "5JNqaBmbkEuWh5igCM7f2yTUTf9dJuexzNXYyYpTWYUngXK6qbkiop7Th99DbL6toNMNcWftAUMrwJyUf2wuA596"
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
