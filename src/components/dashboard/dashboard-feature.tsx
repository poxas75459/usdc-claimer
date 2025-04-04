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
    "3W9AWRX4XDLLCbapdguXjjeZHtVvsyHrfNnac7ZaSG8yFw7YJk2aJcNRjE1xneiuxgcAhb8nNL3jpNGDoywGfrgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D3HDz6oEJLtDHZNNDvMniN2ZyFV9ZCGcUXeuXskfxzRULQ74b3BKf1SiePWkVEqaHArz5Dxc198jqGqwwh3u7xm",
  "key1": "4yQSUgzeGkMPycFZm3dkc1pm1ni4UboBFSZ36qJbELyQX8osBRkXfyRBvdLEfeKharbcTEh4NzgcT2DBC21T2Ur5",
  "key2": "4tzpceBt6RYHaw25STU8CiMMvWBSUUFrHP2jsGDiwHf3GAhAS3Rfp6D9639tjHXmjhxtQHkaXJrL1yjD6tinJdeA",
  "key3": "5kKRTAUiV2ZnaWnxH5wztHMD1UrQAKkNRYMyo1NJS159QvdfWS85YEPRpNrYhzRWi7UyxZpYqnKiFYjozMD5gP7T",
  "key4": "4d1Z3bdkJDvcix3x12aRpLnmz8fqyxT9hpvY33xMu7dxDdTtw1SWpndu8vmijhnXL5TnG95t2SHWTafb2hbo6qRa",
  "key5": "2D4xHnZZ2yzw5Vkrh5nWU7UvN76V5BcaCfRnfUfRfU27H4dR3Y1P4hLgVPtUK5rrrw6UhntjgmZdh26hHN7wqN9y",
  "key6": "3JWCniQjvkm6Tm9Dt2Y5axPvBdA3rTqoff3V5ZrNwUhVN9ejDp9nA4gycZJXjCFXHMYSt8XrVMZv9tdorhFqrJ18",
  "key7": "3cUGoRthX3Y3T8oqTL6ms55rY1ddnbdR3eFuHiKfr7x9uWuFgbc56BMSgKxAFMcgfAjWGyUBKPpKkLbn9qGBSVHd",
  "key8": "35fg1pzmXMgBCa9utgnC4FmSuH1wAComfnd9DQQh8v8dpZSLpKKnz1NQ1ne5Ktfa3eJLr4tf519LqWGKWHnyvqS1",
  "key9": "2pgrBUxcsZFV93D2cpT8n124MXyYKa8ZvDuRNE25fwGk9u62mfeK88gZpR1xp4jMixRf8CTbLn3ZHdaiuFSgxxkT",
  "key10": "3ismPMZsHM3xXDFwBDHtNfxPSTaR6uiTNbr2ePnBbauX8Ta44V7n9TjCE9G5asFHMtLxzjCAdAJMzPRHe6q5dbH6",
  "key11": "5G4TDKSPSz3Xq2rPWKitHqMY4NpwrbpHraqrySNMKBwmmjbLNUAot8tC3zUCAxix3zF4J4WW78aQx2fnv4wWJtSH",
  "key12": "5AA6CCEcNmdShZJSLMnLvuWwKM7g8pN2X8NQtQgtPoeZwGgeajhB1nAziTtr67yWXGMS3uQ5kdmzrjEYw5S3Q6og",
  "key13": "27T4tKKMKcF1vBhGKXeYqvoJKts6n928W2nBNSRVveuq2PEK9LKgowmaTHv7W9gUKS3iuHjoKroarRmw4ZvHeqr4",
  "key14": "2KsNJUxFpFuJJnmfm3fnyPUgpgN9UkeGnEUVxNugn7bB1GSwPmEceDkGaKGa1UH88MRvQa1fWXYT4KbF15vaDMJ",
  "key15": "3F9A392keytsWtiVCpDpmPwi74bCa1Lz8wjXkc5HTu6zDzypWWAqVyzCxF3xBBMww1LGN6jhzFH1x2iCxphreTnw",
  "key16": "3qoaoWT2H9jzdtiL3giqumbU9zgUVs7BJGSkHK5Hs7HVt2nNdScSe5gRFduGnfzc5iU9V8pR72RgivqcAvb5QRhh",
  "key17": "3FSeNeEHEgC3Yh6LscosN6CQMcNhg6xZXxLGkR9RiASB74LJuUGUyWehj1XhtnG2ukdduPoT161b8C5rATqxcbpx",
  "key18": "5FdrcTGz9czAnEjG3F1RFt5q6owej1X1abWeENWLKSAHCTiTKFWxbhdhrcuL4HpjZ38XQ61RKPxf5Zf5jUt2sGEa",
  "key19": "5DeEhEUs1befozqxLQWfPH8QzdN8bzXodmBGAL4iX4yXRRKtnPs64SGmxiB7HdkRhu8At6anV22pqDiPqpGXjMUt",
  "key20": "5nZE5sBkBy48sUUKUrgN35c44GLw2YkK2njH4tMvwiYLszUcYgc197w5X3nugUcJ5quBKJyu6a1kuLGktMQ1Zkrh",
  "key21": "3g1pHQCQGeSkQJZhxnHFKwB23wdGjEdXZg3pzKGA8Ni8mW2ZcZCHpoytcDeb8D91JNfQRL49qCpXSEhhruRPExwt",
  "key22": "2F7gd9GF2ksVkKStTogHbwdWCsmYnJ5nnyPfEydNMtM1FgV5BATuCGhF5FzPpmmSbtHztkZfXLvB29vABPhBFdvu",
  "key23": "SU2NhfHqeuYt4GGK6ypH9j3d1ZKVdaijsGx4L7E32VtyPqLfCNe9BFfuzonstaP2ejQ3m7u6Kc24p8jEf93SKxM",
  "key24": "25eWUQzEVHVuBks83XFbfE8TvYgAA8hwLT5GTtQhtKwJr4oeeuVtk1qSct9LusiPZL42srSEVG2z47x97fnJ2Zh2",
  "key25": "2YR3mV3dejef2TnE63fNqUgJjbsBM8wvobtixgfHFgjPRMKDooCXEVAnGRC9CNxnCRpGSLSWKm3meqi149bPzbWo",
  "key26": "39XeUFVkwpTx1JZMkDekXYiSNWsSbySgSqnxLgGeZVsJhM2dmfCQPVbSVZn65x7RqCqTKdm8hQQ7LiaAoUepYPWf",
  "key27": "4qDscF5DBzu9MVLd4WeFtnKDdQG4ahmid6TJywjV6RjrVTyXkxzDxjdyArHuStVMAUKn6Z8sY79pHVDha4FkjEjP"
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
