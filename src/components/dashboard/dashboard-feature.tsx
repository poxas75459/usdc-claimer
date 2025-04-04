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
    "2hC9inN8HoBfpvB3GzNKgC284ixPHTYh5fHsQJhv6VJt8JM4AjZDc1vXrA6nvxL5EZZdAH1iN4VK5rFAmGG78vVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VuSjxzxVij1u9v4QmdAyFjUh6vcHk4kR4zrbBsr7mLBmZBruJ9b9TYJsGa4LXWcPpej6BBiP22NV38kAm75ZbDN",
  "key1": "5fsVo4omVBRPPWybT8VVn3Dei2c64cQSrcPTFFA52dRLzoBe2TqneQkryvXQ1wV548obZijpJM6iC4WYGrUAjtKX",
  "key2": "5oc46tQrfif8MZrLQgKMv3m3FGtuQyXnWepMZF14kWUxqb6y69xMHq6Hdp66HEQDUELeyKgVDGAXgHT6WavKCsad",
  "key3": "2uVDKRo2ivjtWbiMz6gvY43jh5gP97unVNjx2WJbAqchsd6oETLF5n4CkPtQvpdKLrYYSS9AtnEbeWAALwHQ26Pw",
  "key4": "3JXxzYCdQEjLKBDrXxbaCXCtpz11oBmRdKGAjL6tgAnMYBS2XWz7DNggVcssdF4pmP3oscRLUy1LdGHZ66NWjfsw",
  "key5": "G39QCH3PjaJJpZxH9pwTvy41axBsMVH38eSXW8mzS2KLVobCqcDzYKAYVrumnwmVp72xS3bvAT3uvX7ggoDtYZN",
  "key6": "2opch5PPZrf1BRmbMUe2n2Vi2otR2ZujfMyTRjDmVAQZMDMNmfD18nptutFAwGVCEZ3p6nyQg94XXEhD9F8EDiQM",
  "key7": "4y2XL1WZrH7yfoL9kYhZe5nS3FNCY6yNu4XCJhfDZhsLwMEVaVqyyUWZVVPFaXugspb2VkQbAXFaZN4ZkRL2XDxN",
  "key8": "47ziaazyDcfJjByxEhyCybhF9cfDF4mTTkEx7DTpHuYZ2scShFPrnqSQY36Z82qhPCizAb8wzgjnQnuBUxxXAWBc",
  "key9": "5EFXieRta5HUrYiEa7uzNbjL2icP1cAvABwhAjwBUM73ngZjCqaAmH9E4yAUmCQK6FrKfWhhC2x51BDZxUFxqcd7",
  "key10": "2pvvc3xMG7odeTSkKy5a7npyE7mRoqYUGzFRnKZeAhssVYwtEPkF7KcqTGyta6c3hhp2AxiKrbw2qmtbfEKCpiwa",
  "key11": "3CnyjqvLoBBATBLPLEcj8nXDkkNSJGsuBDy172iJJ9zZAQN1DiWiobMBBHhenircKBYCrmRPiuKAMTaQX9pY8kpn",
  "key12": "29GeCpuKHxusu9rYyqjWQZxJ5xwYgg8nD6yemFT3LUs7jLT8VerUB7hqi8A1DStuNhqfR7DZD2thoVHKuiB1ESR2",
  "key13": "5KaPbwd7XS7oxvZqX8FFTpc32PPQZBoZK6gTwmZRoycncds3a4JVAFP2sZ3nRXSFPn9ZtWMDYqdvLTpfppGfMQ1W",
  "key14": "3mPHz3MrfjT1VXF3UXfkZGT2Gax9GVUyqB44D4NaiGh4GMctioqJHx9RYX8hvoMd35tNQ1SyPbq1FeHUNwCA5WF4",
  "key15": "4eLLBCpVz6vxhbq7nLgn9t6xVGBtfKfeoftCQUFdZaTwBhWA77uVn8fL3SXEm4Zw7bMwULanqCZs7VstN9UqEGKd",
  "key16": "4W9hS4783SAt2zw5bSZHr4nfpVsDCH3ymvCQxfFdjSAfL1vm1D4TmiXcMNB5narjABiJB8dq8APc3FDmT2QWm1vE",
  "key17": "5bQjwjWoqzAXsbYKb9HjLfwacP4YLZssEUTz4AWLJSqcNNEnQUU8kXfKfqPt6RzU1t8s71ugGA8NHqtUMxKDsmW8",
  "key18": "3dNbg79YG6Jt4AfFdQtoNEagJjUxjq9CXzJt9E2rj8ZAfru7gK7TNJLWm2PFfmzZk6SQ42xJuwdPPmZ5farTUJih",
  "key19": "9f8kcR8NuMUcG2TQZA6h7UQMmhgPvVRUqGRPtTkFb5tERjM1h19yzG7PGwEN66z6YqvcTfiYEecS7hwfZynJpHP",
  "key20": "2k2ougUK5oxLjn4ojnNXk89WpiumLWK86b2PjveVEtzUYVR98FcgAN5gJ2SiBCe4zCiUPNKpjLuzqgxPTR9AfmZb",
  "key21": "557ZA1a4TnZeucGVuirmDaQoGjhDFH1WPWFXszcFUJYyNmvTnDddtuS8MgCBzJvj73i4APTmSmFkLJoun9y1Jjwf",
  "key22": "4aoPPi4oi3Dk84K3VB4MRudgJvQ6VCjZw75dKDP259MJjVmPbQEqXyn3J94waz9A5TH6bjsUMwgqd8czou5UCTht",
  "key23": "5TMYz64fg5B81V4JvixBAgE3B6toMf1AQaXRtJopF77SQAu5vikBtwhweRH3USYWDxgxbCLENcAwdg3RaebUxdw3",
  "key24": "ApDKaX7z9xEubYaLHnUYc6kEbcdY6RUUNvNtC7gp5f48EYBG9zoecK2SsCKD78UQcBV1UYvyX7hpRR2k19mfskU",
  "key25": "3r5obCWp5zV1Dsvn5o7pwQT9AxgUfcSbyLPJnM5uh3RVMx8amLKaiDLtgyamQkw6pQMzmPQA1W2WY1DNqDs1YmSP",
  "key26": "4S9RHtHWQ66US6Gxtz69i5GtksEvmdnWaZCCDN8zSGJynNGtZKyuna4x8ycXevmkk7hDucH68WRhgmoFm7pioe94",
  "key27": "61x2SH43D5GnBvRPBiNsoF1f5pYDw6PpEHwm1FT2ioDsLQ3Ctw4ETzaSEwAidZbajZo5o1rWFJjLABtXjexCRgSX",
  "key28": "bdDZqmcRtGW4KR8cW2QL2z7HzZRuRzM15ZkmDYjjqPvuaqkhs9BS9obTywvkwsuYfy6wB8d4Dis7mVBoZe67u63",
  "key29": "5WXAkw8sxthVKhYaUTTpaRvHk2TcKjjfLTAMNY6zvsueVCGhpEz4cAShKZZVXKPDBMpzddooz3CPpxfmRhGvCd8L",
  "key30": "3Sg9uAo3LEP7bh8MKzHrbJhdzECChrqLxPaKUmaRV9oEU2Kw9kxJgHRnmYF9pVADcwMgcgLg15jfjtqBWpPBnWeD",
  "key31": "3CB7Yy73nzKHE2eP97r9VpvrsS2EtTXimg7YLSW8HygcBCVTXBdp8C7uwKw8rrsYASLXAZTMv1LTGARSfHDeCFfh",
  "key32": "6272r576mCpRBXmDMXE2Hw7v5ULhQMjoaJwiikXz2RYdfuyFcvkFEQdvXr5qY94kNr7tcnwJkfXmPB5buRNpXdSf"
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
