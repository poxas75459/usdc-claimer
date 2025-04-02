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
    "4RfZ2XtSHSjKjdtUZrEtNFAErowXPQbsxcUeHgXnW6NgnK6RKawVHwU4AERs6StT1mqsY9uBut2C5t8MfEdQBfP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qssArYiWvuFgU8Hz58N4fR5RfxQkXYWX3cJrMgHPWtH1j3CVQhFVvKxYHWW9G7cng7SDaCFhti5G2xNSUjYyBmU",
  "key1": "3Z79nf6JEjHJ9cc7NDcEMXHMd9M5rWsA6dzL4Bf59VChXYdqTdFeDbay8r8Nq2hitvjtM7Z74wASMjbTS2pm8ATV",
  "key2": "4Thg4kcgBhaDoRoJi3QN3oECLP5ZBosUSef5RsGwDv4sbmyF3TxKtKGbZHJWHMm3Vfjdod475qRPQ3TyLoAHVvHu",
  "key3": "5Djb1mPxgvMtG8PDVjutVUYcexZpQGbYUJoom1x3FV1s8ASmW4YTbNXUq8vbpwAQkHc2k5dcnfGDapgjjiP5N6Gf",
  "key4": "31kUnYKUwCukPK3vQXCEyBexRMvThu3ZrhN8zHFi587UQJqGPseqsuKN6FCH7xUBLwXN1CokVz4qQdvDyuFp39Uy",
  "key5": "35Fvo4YaLY6zJSh3CD5NiFgXa6wftKWBuvScFD1fVvpmQx5fEzv5LGu2uZ7o7uzDGwdPbdE3Xnqu3uwbQfujqDNz",
  "key6": "Ey5d8nAdjGjXA5vCecawURrhcjfpCmd86ef9vAXov5LuVom8y9wnLHDXqF4oS4S6UY9DSG8L6TRDggHm2UCePbq",
  "key7": "nzSKwdqWXpkuUNFKZtdz7BmZCPV73SpzNQQpVAwe91qGqh9T7CcURNEQBxJg78tniR3Gyh9accuPffbUx65W73f",
  "key8": "5nAf8cPWmwSFgDmMauKsuZz855cXCV4ojouSvPaBze7VHdwtFg1bQVuNMSc4HGZ6Ae6Zpab9KLhDBpdevoYKvxZi",
  "key9": "zFA8SuYywVx88rjk8mNQkVHr4izPmafTytjjSGv8wRnTRZHodczBTPchjpjNTBT16PC8EszACoaLwEq9wFqwDHR",
  "key10": "3YG8JEsqW3qqbjaHTPFuFLP6Hfo4vcffFDokebLn9KEkJRM3pTwtPZSgSdyV7h2AEnYiGaTfC67Y5pfNTGahXcjL",
  "key11": "3AJmxKTkG1JhM177QGEnHwroGB2uCDJqr1RnjZGK1XuonPAGHnoGX9mM7MSJKCV53bhcgBKYKdHP4zr7fuQkUK3o",
  "key12": "3eE3NJ1sCFr9jxYodCjsUiWWQHQosLykcMDbN1ehK8ySBpNmSNfNzXi1ADdBC48GBKabTVTs7Sbbwgd52LbrvoBd",
  "key13": "3sT3X8b3TdCawnbFySAsbXC5yLreMKSUPSSZUePcTn8gUEf9ADN5M122PGvh6dzY6LSn222RwunSCKcKWvJ7Nepk",
  "key14": "DwoAvdjTvNpdbsva3BGeDSnYbTVKGXaswfubWUNWBwEqvxaudzyytFf7fDi8WE1WSszbj3gqSA4WgSc9BfRv1Nt",
  "key15": "5uMG7oCkwHWodzcptqrc3Po1kzacKaXTvqhNZjyE1jUy3KjgziaATfev7tTC3W6s3LDt8JqegLgYZPJbr8hJtDcM",
  "key16": "4TApJv4i4i4wqBsrkUkh1VP7RhgRnGWZQ13KYpPYM1LJRRb55VU65ftM4RveqG4bLpTGpw8rmpwwXDFGQQzrxYSH",
  "key17": "3JTejiSdWWMy6M7j7YqVsLjwGqq1kuU4HVXhrPunKpYdKwsHJxMrA19n77o1Wk5A8HeP9LMRrzZQNwDzDz9wJm8C",
  "key18": "BtZuhnFuCK8wMfcXaXmJPzUQn8F816ghnWdWmnTkZdkWd6yTJYU5PUhH9MjQndVzQRmhJdR6ujSGXXhudmnr5vW",
  "key19": "ussvNZWgn6Qj2WBujAMHtBUYEZ5dXkK495rxw6DE9NvfNJkMcmX2ec4tRhvy6WGFsNUQdwKAZKzzEipJbau6yjn",
  "key20": "2b2YvVvLS9sURyxsYoFH4TVQEnvTRKrFVpFamPbWeTxEZpstBP9Sees9mcv18sYWhpNE49jkY5NfjGUiRWwR5y1H",
  "key21": "3RTb6AkVCyob2txcbXcV1FLg19yoGMEV3aupZo2uMKzMTakVt3TE8f48yCS2stLGhvWZnkpqP2h6hcyqK4KkbcpV",
  "key22": "3XzCzDMyjdaLZRdKsN1m1QscRyTretudHkb9xNF2BzEmfoDWGfyjw2E3wHVw56MwgmGJgLwNG2LXfnKXqzavFBKQ",
  "key23": "2FoP79N4MDkyAtLxjxrECo1w9s8z6u5TE7a8NudovpQKE9dhYLQ4Lf4oUahyeGSmNLZELhXghZKUP6Ja1npggfDD",
  "key24": "51w8hUeAB6Nx9PBn49KPu7Qdw6WTsU1XrywBtowgpZ7e4vj1t9AXxzij2kSBURjuVtjwKw2p3uSfRq2RLfaNmqpH",
  "key25": "4ckax5qFD4pN1XimNMPM2jfpWbTssPJ4SJ423LptVktqrUmTzsE1bXutPb11oMn3J5obAtJShSBw8jS2KMBXj6tr",
  "key26": "3J6eqdrXc1Rt9woQF7saHwvaigWiutjryeGTGwF8qMHqYhvYVNnHaerfpfj3RwTVneDHLTzPGSqDpnv7Txtr2wK3",
  "key27": "5viAz57JbjBhn2sP6W54RixZ8FSfjWzLQ1ua2T3HvL6CyVF2h7HPRHD7MQdJfUtgRcjG4fHUQBAtAAJRGuv1WvEC",
  "key28": "44Y9c7GSboVRSwSoCWdaP4AUdM6u8sskEq3KpU5C4NQTGtbz64iEwARqs7rVFKXVUcxZf39s9BH6PEawsmktEn84",
  "key29": "33RvwBiSF8XAs7e6tcPNyjpES1sgcbFwgQind6hkoHGsEeWRLb49f95shD1jXEprmf3uFCD7b3Yx7QEkHFowcKAq",
  "key30": "3hXqLeDSS18QkKf6Tr35u7j9SEbY2RpaAzzPpbv3vmCudmynaMTcBQrmoXTCqsDfRksn5ZqNRDLVr9pCGBoLpDCj",
  "key31": "6pmX3rdJR9dyrY2sxTHAbNtCSEZR5csLPQMv5jboos1TCyrAhgwbGxxu6fK5X5igHADhSQSoreLSRrw8baYoweH",
  "key32": "3RYTm4tXXNND6FpxUf4vqoPVF1jFvGPW1Cs8msvRYrUcwYYQPibgeviFhcBLiT5DwxgMa5irYcbRB4ejBZpqGPeL",
  "key33": "WuFnn5z2J54gqvQ8WFGfwywSsBpG7wtTC2C8PWBYFfrXEHmScAjX4Uyv5v35hC6sX7TDSN4MMfi7jLQp8myyfmQ",
  "key34": "3okXtZDhdMNRBwcerJUQPoTzUog1Kpg3XqUn1x374A7WWsAYMvuk3rsBf9xhcXt6sQurGwdbV3UB2dj11MSz3zuJ"
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
