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
    "5cXgksqwpUPq5MSuzYgvVoQgEoWgm3bVYAqqCRwoZXME2UYBWbPHzQiBJoCiLvtk7MxUFhPcDbwpwZTYM57WQFh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RjyZWQNshu1i4Azafwp5bLC99Kia933eko4WiapHgHPLZN99hEPW1sCBKb5ob2PMvguK8Cg1kWa44rD8CrYPHAY",
  "key1": "2nvXi9G3zhCH2V5KEMhNYkuHcriYTpBTozpicheQRGy1BELJusno8yvfgedaQfEgwFqUBY4QjpFPPxAV7Bb3kFGd",
  "key2": "EdvDFdn9iTvk4T6vBkrXHd1d29S3uePdjNSLYD65iwL2DFMYiB1f4HVj1qUC6knbP8wWSwHxJUb4QrZxLfXNA87",
  "key3": "4tVzt851vDeZ21br9d42ukra6Ed8MPMdZqhx2EokMtVk5W25TZPVEPhQUESCGEygDiQxSdpUo3BXRwTL7VrV4foB",
  "key4": "36uegTb31X9ZC3oxZ3SvC9FjQeXh8jRf8uNy3wcAUKkio5y6owzF9qyAZKkNQesLfVXQh27GmwvxnmyBLb4M4a1G",
  "key5": "4xGvH4ZQUn2j4gDaUjtBmyWZ55c2ikmSc9Rgda24cRmPLG9y65eaMETNSRifAqb7JGHYn9tEPz1ithtaPVAugECa",
  "key6": "3JeMxdH5deBLAGbG5y9mmHUWDGxSbvVnHrNn4vh2FH1F2oCpAnyKGJD71aTdCkDLYYeu6PtpAPj1Q6cojeJ8tr32",
  "key7": "o8A91A6g17Tpmytw8nSJwnD3kqstaYza9YfsTevKJ5Yo97ceTrgZxYzsk2R7xT1p97gqBMkB1ZzjcLHfE6hbyFJ",
  "key8": "4h4GET7Mm6sZfy7AtsTNVkZ9MTZ4GcZgkRQ2xjuT865TZpzHd1E6LH5bF17sW5bxf4cwWfgxDxZ3tbswVKn6qqad",
  "key9": "5i4f6TZ62VCgKmEVQGoRaETk1aQPC92g8haWNjJNnYMFranM1NMqMZoYNq7qAi6g5Hjp4H4Zuc7TKcV1EGJqeuJb",
  "key10": "2b7Xipq9XtPSiUb1rThWMnYjqxK9E4tgz5xXLRsvB8QbtEWisY1tcjUCWNiJvXkBZBtUnxYYFxhXLfiYZrL2bD7m",
  "key11": "4izB8TB6RnoYVqdarCmke4TaE2c5gzMbBtezsRKXk8yo38SFxXpawLSJiV5LescRpoqR9FfC9B77k4V5qjXCS2Gu",
  "key12": "2LG9KBtWr3Qrkt6ZzBU7yhxxmvRR7CESdJ7ChFtsSrgHbdoLKMo6Fgs1tUoLWZaLy4fySN8jSxHJ5Uj3jvmqkrVu",
  "key13": "5r7y3VNCJ1KbvRKaAD4WxhhNGnaTtFqJbs5fynvXppfeDYTeyVvxCGPGzVFjDyeQGC7kdDroqth6PsLDTGz281GJ",
  "key14": "QUoS1tQ1Uve7LHKMow7c5Daig1CgjG5FTu6yYw1pC7NsV4cTxELtXPW6q1dBcenrtioUktmGwFCnxMsnuYukQGu",
  "key15": "23hQbC1JcZuhuqmA3zSo32AQCr5WSDiMMkLDjT8sHC6qQvUBVvHbAstSw9B59XrSDUyMSjjGJEm9iW4sD9tC5ZvW",
  "key16": "4ntMDJoK2BySgPvxJV9QNUCAKyvBrPSiZUsjKNX9JGMCwuLvf4SadEeDpJAF9WqpDeWEDPXJajn78UwJdthCeJEH",
  "key17": "SXDorUDpBx14pfC2kdDxG3RqS9dkd8E312MeVLxNCTKvDoun6BX6HvVD3Mm2zPou5LnApXXRd2PTLxZAzJNURcs",
  "key18": "3edxSqXyvNNoc8DsbnaZtMnnW6qRCfDvAsH3vp55kBxGhEBrFr4v2LShtpd3BpEVLyBPoASqUg22FXQ8ioQdvWia",
  "key19": "3UrHKULWexx3xiZEnhwVow8LqaMTE7xWCWCZHCA3FMiGTzKGYHnzLi3FEPVBpFCK877x7zymMvxoZbKNuUsRt7WX",
  "key20": "3LesAyfPHhTJwZ5jja3EzzmWzLYNLUm8ACJuyCHbkdaHxNVw6QrRFqfAfUTHKdt75VydWQxUsp3afvXXqubqhaKE",
  "key21": "5jzHUb6tZazRY8t6Y6qvrTVfh1Pbu3ry292xk9AWKLq9EJ5FyuJ9pueiWX4WjV9viXXhskHJhgTR2Z7p1caNVAa8",
  "key22": "23Rn8zh7wWCVRv6EExscdLJ3vL3kZENBmrCNiCmKU2LSVKC2pP97jmXEW8v2vpUoAdpR7yyeg9htp9utzT46TKNM",
  "key23": "2joBb1hmjLrtwi5KXc6FYWK1toiPv8TUBjfYfNZS9LDqERuP5BGEwyuryNTW8SQjHz5yrHWHTctpZvJhtqYt5SHP",
  "key24": "2cvVazgWhu53VNcdCHgLwYK4NxtxfBpt7R4XyciEQezqHexqzd2npNHibEWZpAL1jXgTQKLqH1Sd8m1wYCD687ZT",
  "key25": "SbnoW5MrA4aQNjPzckf1L9LAeBCYGHYxfApUoTJzCpjHPTwGSuSQKgvYqcJfnqtaVDipfBefcCWg2EcxiLHKUeX",
  "key26": "5x2NL6GRfBDA5LnGBQmWZq9H93T5deqLVn3KvvtppH16a6qkaqwr15zZkyHn1dg7mSQUBfN2Rdwp4qmtspyY4ndc"
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
