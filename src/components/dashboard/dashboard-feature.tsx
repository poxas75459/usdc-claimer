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
    "3Xuhd55Z9btucD3k1e1wnaeuPRFYAqt2Ad5GseqYZjVJ1N9jpiJDkAUfWa29JQohhXvLjdTPUfdDMcu4u6QmdJRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LK9LLGRePeRyFSDivAdMHBhL8hhicijMcBnGPf7M4gkm2SyqJZCh4iYMME1SrSjQ2VZAxUSRG9P7PsgcoCNk12E",
  "key1": "3AmZuRwpuYxwoorz7os57tWQFgrQ6bevAToTpFyTvkLc9entbnqoqGK1qGFNWWke5fy24shkxNc2JYALLaF3Ut5q",
  "key2": "NPXpZYJSzd15ipkJTHnR1NjPBAf7hAXCyADc6NBHrkXAfJf4gvHbvEEBtZauVL4zVzsmkCZZjAbWLNWQ1RJWt26",
  "key3": "2a4RuNgYSwb5LEEX94XQBWbSK9y83qfJE5HHNtfX8Mk4kfDyZ6NfXpv2hVwYvphf7nh6ed9tqPJtQm5VHSccH34z",
  "key4": "5RpPEdYTtLEcHtdMSTR7RjEQC3TmGzocuJkR2DNbDgooMtbZu5uJpEF6uSWFRLEoEeJdmV13u7nptr91NNr8beeb",
  "key5": "59R68MZqX3XD81QLcWsSSFjvEEFKwJMpuh8ygGTEGMkzmAEV1t9zZ5EGoDqoeNNSGTySDmyvom4U9uynaAVuyTFU",
  "key6": "3xKec1u7UBfck8NwtjehEwAAzBSPSMeXJx2JnK6Nyuut9yWYQrmkJt8UHY9d7Co2pHwBcoPz29nrfTDtMqniWUr2",
  "key7": "f8x9kQPhwqQJorxo1w3ggbYWEpzyPKMav1VgxMSZbs4yD4irjhiDEWG7ctSaX45zSvF8Na8ZjoHCYFGmWyaKape",
  "key8": "4cgMGSgSbfeQUHzrw8qEW65VdwaefuNUD7bHPLhzPEDGx2pcVbQt66yHtRzEW53nRdc8Y7tx7cYwzcHpFEeAHMjn",
  "key9": "4uoDzPW5oZetrbDsHDtgECv59haZY1JbnEjqkNkmbr5GKtXxHHVfEnFrJaAkAQmYJcCydz15Wn6DUrBjrJiAUYMd",
  "key10": "4ziSg9Kw7Rp2e9SRd87LBNcnmEgzEZgp9VpjdFtb2xP2476kytMsa6aCSzZeVuwLQPuc3d1fNbKacMDWFQPzeG7H",
  "key11": "5YMmWgjpdQp6ufgoZJw1BWuTcPVrSUTxDE7AWH7ESqXep8HSo8Y8AEuNiWuspoTGq9RzWY5BzcPapP5yyXrDAmya",
  "key12": "dGQJWbcgHWic8R6yg2axJfdVSj3MdUihVcccfrWeHG2jpytbvvpgKs6FJhXPxvx7Z271EwHN821yyFZKVNnBZt3",
  "key13": "5kyPMy5KHNVFXmYnbSmRmXsFWUavRTY1srEGpA2nyAVBbHKrF6a5Q4xzYjp3KqBXwf3tGFcpvWfcNuLXR65y6rwM",
  "key14": "5ZnUX1fEeTS5Z6Ks8JqLzgYy4HeYHzQ2CwDEPMU5rR5yPSw1552oAzRLC4WnVVk4tfDCgma25Ryofcn9MZ5XxG7d",
  "key15": "5FPVFq56LxXdAV2dgAhJgBWqNGnfBgsYCCVxdfH3PfhLH5smoVmQVYexkSL6cenaGUL4S1xfPDmB76SLQhKFj4qL",
  "key16": "3Z2XnkAEcQLCaxyQeTnUHVgHxJJZvFTdEVmT2iyH4toGShGGQYzQmFdYxeRcH5k5DZKEm775DvRUKyJfZJx3hVdS",
  "key17": "e9b8xN5gA1V4aPE9jUQFoWRtM5XYiBBp1wt45fm5y7udSRasDZRqcDHcXSgoAfcfQXgJ6X4yA1adhK4Zgzmd6P6",
  "key18": "394dAr7uwS1FK3c9V4UkFv2uSffYLpzrWBMEaG8tPbUoKMvecsvWaXLQSRWbHKHVLZSnuJGfAGSLXdaDc3y7h4tn",
  "key19": "3ZcZRfpyGjtma3RxJHdkeJZNftTBjXPQR8zRB62eotgJidq2HcjXQae4Xtv15S4yon3xpttYNR51UUiAsgApHep4",
  "key20": "4QTh5giSFwGx58TTwYBKGitaBjZUVFrU6J6ydCmF16nDqe4NcfmmpPiHYzKkrgcGBaxWJYE6mS7zFApf7rhHPGv1",
  "key21": "5FZ6QRm9MQaBUzBFxcSbC5UFvWcVwLFNPt1wGBrR6YaWr5a1q2vejftek4sFSdsTeFA2VcZE6Ai3fxSrFNFJgV3n",
  "key22": "4tD7iaXuTeRFAYYU6w1kkz9XnwtgZZVwiEEFPHq4ZNSqBiJrxQcQTX13vCceqM75Xcb2kNhB3VXHvd5B7M4uKEH1",
  "key23": "23DwmSb4wruVEz415rwAzZAEVKLMNxNeUWYoqeg9XSipHimvuvTvErfPysQPhURTmyJRGU7sFgXx9pGfqkzYEEJd",
  "key24": "5cxJWq4tKZKmX8way2t6CQ8HRwtJGZcQzpJNx7Mc1b8CfBrW7dzPZ1VFdWFBSckQ7XYcKhAMFKKofNk9gxTXrArq",
  "key25": "2De8WwcbvbM6QDBUGvRTtX4z3UWeuikFQdz4iKRXQXJyh42LTWbeVauJgonhyNZGDzJeB3uvth2huixPeT1W2945",
  "key26": "41QeTfkvzvktYvXynvYoSbessjrDQz9YADZowueKGMTXWR3hXTr6YkSBnWsGohFgChKQyPvweexQdXR4nwpRaVoo",
  "key27": "4b4oyWbF2oKwvFcE5Q4TsuDyc9XZKqGmeZWy8rodhkpavnkqNGpFXMtD7HF9M2Tr6jPThZKEjktYiq2jw8BS2qTX"
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
