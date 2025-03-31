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
    "Hsyr8RnxecpHibLZrU7Z52ZB9msHXq7cqqC5Cf48159jf8Sm8gXP1HT3t7M4xTEJjNxNfiuQsTQtW3VhrkSazvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gjpj28dR9J2HHMXFAUBRHhDyUqZueFNBPjLk43FNrVKQdWPgughLirN37sJNtmK11K9jh7DxmPk7gRYnmjcZsJz",
  "key1": "64zxKdJzUi9NKcL8hm8Z1uSsb5Pvav1Uwq1fEjHCR9PNzqPFThUYW6QPPwo4G7VtTYWUnbCvBiu2N1HjXto8xRER",
  "key2": "bE6RoY9oQuCryfcEUZBwffWYLus1pNTpV16Lv1BzUgeBVbJotptW5UXPLKnbHSkDhDf5o7NF9fM8eWauMpHNdNv",
  "key3": "3xrqwgyWaXnL5NJeSfL4ZZRhomTaD5hwREjkF3ArwS9dm7RaewgUssR1bvrGhMyXJ8SEBsCgZoUQwaAWqVsFJx7G",
  "key4": "bDt2HJToaKgzGmexXKLYrwbvB4stJe4zj1S8XUtZyQQRHKBHZZ5cRMvzmwKpDZQtdP6Um5TSadkN94vP9aDFtTg",
  "key5": "5nX5nCUme7HosWYUW9TWmcWCq5MQwXtWU3wVo8vu3nrQPCGD8tGDtGcHZgmsRwuM9aoEqDobfDojzWz14ZheHAAg",
  "key6": "3WMxjxHTGcuausnVERVm4v6pNMczYXXVQTrDh3o3hzkC9i6M5dmj7Y7xNfCFmRvTWeCibg1ypQ4Hf3xtNNhSRHMN",
  "key7": "2QgCe559rzYf2Yxk7abcdhw9A9Jj4ZKA3oszsfUjPG1qpfgqD2oihoBE5uVT7hMk5HZ4CuuuSW6nCay8zuUw64s3",
  "key8": "22dT9SH6t7eJRJrGwPsBPpWVcF1waWhZtqKYzUMWbQ9D3DeD4THgzPLAAEL157HFrkgegUZK4LnCvjRScJj7C8Ck",
  "key9": "26dkDYt2GxvoBG72rPj8kJY295iVVUJYVbvao7sXXwHyjePe4MhL6EcXshqGAruzmbknw7w6pzeC8dGd3XUSBK58",
  "key10": "4RFydLWYir1NUpe41Gc4YXkwmHWa4yXvmuNqxJzaN5T6AibDJth6Lrh37yPRsHwtY5HwrabQLs3dxD8ta6RLaQ5K",
  "key11": "3mw5oHbk2CVDGCU4xouv8ZGY85abpW667kgjQbehVT7575tYpXYuyGwbzeupfV5cEL8tcJ7Cmj4roeAiAfyaJJAF",
  "key12": "3ddobqrrEW8yhEimuAWXZGuRb78qNvCiFStcbAkma8LYqDnTGGGQagbp9CetcLTb5UyAyA4aWAinpMJRTJJExjji",
  "key13": "5NBADG1q1bpPLGAACkJEzaVW9VfjhEcEpDAty16XDcmM5zdBQeMnZFDoFM5ecKDpESpCSXehfZTJRv3S2QiqyHCB",
  "key14": "4YfZ3CX7uVyPh96yiGcS5qtTnEwwdqyV5tjrHnFW3duwHkhn4uMSAuv5yVWFGhbPXBFJHhApWYaoDgPjGxRRytu8",
  "key15": "zXHQaBi4nyBA6DS1kD8Lg8mNWRuZUv9jd39TX1oEj8zFeKGXj9usn7NALHEUp14EcnHaAYRSdHD6VxRREduS1M3",
  "key16": "2NyAL25w3P6SBfjZucPptP2iekMyGVMcjtFzietSNi2cLdWhfgCedtm5yghaGbk5ecVcEMBV7Yo6xRf5z3Xk2UD1",
  "key17": "2oCVUEbrgKGmwVizqPoSapcyTjdZ4J3td9wotR5XNHhjgXnD2hzkHqgMpB7PP4pcVCAmtpgSiBckmrJmUi7i9UXL",
  "key18": "2WsCY2b3r6xQae45gwcLbzNHrSsAhwYgb1ZsmguaUT48VNwFdL6ekYqrACxRdyNer2fwk33FvJ7e1YuMTzhLmove",
  "key19": "XWAMeHHLo9HL8YLL2WsKDE8shzn1Fg8HFCTLJvDS76gAcWg8VMixpSsnb8WwENrbyZmLasEUdhRFjRzjDarfG2s",
  "key20": "p43fizQp37xrTW3djKcySJRDKYCm1SvNnzQqbe9xX1G4gtGKoUYqeaGPjZWiqy5FbYRxnSSMSCSGnBPdYTcFsYw",
  "key21": "4tLYsE4BVEgmQCaiKuoKmn2pkcX8FjqgoQyFXhdNxSBBjXGF8L6TbeEraKhJN1BxWGhFvmA6HRne8skHxCL6UUpN",
  "key22": "DfU2gmpCLi4Mm9G4eZjLcqfu5gF8ppdvdJRRBdmvaeMrNWbJFXGFvfR8jumcfMwgQY7eVXdtjZd6aLwCGk9vfSK",
  "key23": "2i4Hi62onoP7aUwMwxfV9B25yt74cn8y7MJ5vmoEC8vn4fcFfcturDzxPZRqgVDoby4CmkhCNjmZmF4PvPXp9HPB",
  "key24": "3KsJQY36SynL1C3b7LJdKGx38DEr8Rzk3cD3eZE2QpouQF4voVwxi7PFLSSydreGJBFMcBox9Fr9WyhCpiBFVw3W",
  "key25": "2UuANVDbrw6FNQvQG6oRsbERjDQjgPhE8zAJ96qcpmkwWBVbSDbiHSBqKABKCXV5NDmem9hRmc2ZwCALSLwNXFYE",
  "key26": "5AMNAdiZFZCFsKiU75QhdvxrSvbPDerYBvhFUPJruSQbA13kD6dn8YQGSk1eQng1Fos1mTd5u734tafkTUaHjgXx",
  "key27": "2xJ1b9gzv74GvXCr5nntNUxFAWLusCoQXAjTp248WzAq4S5nrJW1DQAFZvdKApAiT4LKvaPYJCgvxFUv4doqxzHy",
  "key28": "4MbQx4TyZj4Z8Qoz5CeyGmWocMT8GDVpg79oude3iPS6WsDbEQLB4FzrYpkDQxVPLej5iWhEWp59gthAP5pQw9Rq"
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
