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
    "2b1QG8GM5fbGM52XqmWQYiGiRBV4T6T8Y9ENxjJWqgz2MRvw9U7XHDt1D5kBQes3d5P3wG2yzqDujCKCaPoBERFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kGQq5aYbaPNjQfLia4H4fUUHkPSNn4VdyWfH5pBfL3Vjc8svPYFtGGQArdR61KCufo6LS6A28wcxJus1QExwM1c",
  "key1": "3Ycu69ATL3nHn3m2LTRNNdKb8kLiV6CTWG7yvcnG6JwKYiP6EmpT5ZjLP2TveUvSjcKNg5BNdMuVvYw4t6t2YEo2",
  "key2": "ToS8mo42wb8aKEtQpmhmzGHt448Rccq7rYuQ8CDfsco1kULhatQULtUojqsYr83XeG3hSZH6dZnhqDNTsvUJ3BJ",
  "key3": "2jzMEHujBEwbxxHFaJA9McnYCdR2Rnq3TqvnqL67AfK4862amK72j7dnM6LYsjZeWoBDMjVwA3dVrDoSYYQEd8cH",
  "key4": "teK8nh4Dvx3f2bz7tHEyMFG8AmxRXN278d1Koj3xgJTY2HctwcbTwStz59U6yeEvMSBtmrNxjXziMcWXNjEHpL2",
  "key5": "35iaZj5VjNPEe8RwKs7VvBcWtfJCA1B5nBwiMKcZ2dF6kmwMYrGd6g9MuMsnatKGfvghdZSuUXVg57dQ2AYe1FuU",
  "key6": "5AwqY4h46RTEidruPKHUwAftgYFFGHGFFPiqX6s8UXS7aJKhTg6QoNuryHbZh8K5HQ6Sek5c1xDPqJbkdN3uUYFC",
  "key7": "3mduVjsjG4S2FMCWN5QbpBkBixs25Nmbd6hZyYNAfZEcJ5dBGSgwPJvZbX98Uuf5z3RzXmYB9YhSPM7JR3VqWin2",
  "key8": "5mRPS9Hft37uWnyv41u2qv8JrNen2cvp9RD47FdKURpBsfDqQEbAx7xvwRypW1WqvEHDkg1vdt9zdyL9KeZYEpUS",
  "key9": "34qfCyPdzUPTpoctmE6uYxTRcA2BnqCrW7JmgiKYJSUV3Pnr6xzsehvc44meeWeZyhfePQKtUp4EC1ji6Ao98Sff",
  "key10": "EU77t1sv8nEQXXbhLKNk6hhSs4UY8E62tP4f7Hc3xjHrpsoM7Z41Ac2HArBsxX8nDJcsKt7BEDU7D4sMBcPgSbC",
  "key11": "4ueNepHY12VKz79CurmkEpBtg3T9vE55oXb9eunvRAPygRFjWcdnV2pD77MAX3cVJUBtNpoMwaa5q4kTb6d2tCzW",
  "key12": "5gH7NQjsFaSmD6Z5jTsA3Yhrzdi3TwEvUfKAN5dZjoFdJywXkjJFUabqxJYEySXHHUEWnst5yUBX6BrLDVxGsbGE",
  "key13": "2p8ahGZwh7xecKDiSd4tZycC1TYKhCms1JVzvxW6rGZSssV4ifBRjgyX61CRUZogrowVg53WnT2ku25H2BhJijac",
  "key14": "46JeR9EWC7TDc4jstx9jk8wojv9R96NRKscyF5fMGZDVq2j9haB7qy34zpLh2FVcRHBuoJHuh3vwSne3z4xzUZ8a",
  "key15": "4rCxKRAdZVqDqLmVfGjWr7XtfhHSdEevXiL5Su9ek8uVrKkd6X3BXrLsJ8XsVVhGYCDo64Vb4g9ncdePfvrtUTLh",
  "key16": "xwoQQM5ATRsdryhUybTWpJk4624RvHMJBSygvonfhtrtSUv6DWm9q7cXN3iebgqSzjfZWzdqnP5FZQrFAo2GxBg",
  "key17": "3FW1xW4FGDEPTgWBstqQZkcqrUWjC1dQdJzq7PQymSMrAEYEfTdWEKgq3vpZyoyq3ibRYvrNcWYasmbYKBCajvcw",
  "key18": "5kCBMGqyrbb1C2MEVYK5mXiKRnLZg11FRsvFyBv2aegsyybGWtAw5u1jWSXsKUfeZwZfDjrsWwjmuN1PkaPQ7dtG",
  "key19": "5TZy7ShFXzNmrJcGTViRJrFN84DEu8JrCPb4DnXySaJ5UDvjBgCxjrh1xQMtiwYnCDc3ENAE6RYQzScUC2dVuvEz",
  "key20": "2FKuKjQ9beP1UhzFYfp4RqfoqoMfQTALPkabgUK4xhsAZN7YFdy2fJ7nfRchuk8dgEzVMcYkhKAkFo2E7JZtiHuZ",
  "key21": "2ygz3pACAZzLGPuEkVanhSTwQcfUU82FSpAEgjcW25Sa4VtaTE7Qt7vwyPU3h1zMus4fFtCcvPmsWtfkfoCCSpXo",
  "key22": "5XtfhGJeji3n1s1GYQAzta9jK1TP6wHBib4iPByXBC22aNDhnvLTJD7ciZutpUS5d44L3ktBAjkpNgyjmCTaTC8y",
  "key23": "AoPKPkgfP78ScWSPYbeudLrdjhHZxBidqiQT7s2TFsBEwYf9keqhU9LucqzM85YPXp53Bedb79JrzavuCisfJop",
  "key24": "4v3hyBr323sdBPpxPv9XQpcyaqSkVT3h6SHgKUvVMDwqFLCvV7wPDVkQszeG1B2WXomxPWvDa4Tamo9UKjuXZxAE",
  "key25": "2Rm1kqavyH13iQenM6V8icXLVn4QXvkFmEBdEJxN9jCFB2DDBqPQcDg4xghgLHjChWFAqPdLopUi78hee4uNzVCL",
  "key26": "4fjsUCpQoMYj3HruM3hTWRLG68XEjKspanzfLgCGHc7m5xBYCKCii1U6BPeVVfAVQcbBQ2wZXRb3GVS7wKVLFv97",
  "key27": "4Yz8BbyBiwhQVCJZ1WQWFLZPMtFer4A7MiSU7tPE5dyU6dYZKzkJyZAGfpTCQ3f9ESGY574HyByAc1iUkf8vuvPC"
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
