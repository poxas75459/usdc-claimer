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
    "2tJjKAscyZko2CDx6ThVrsArs6CYjhDkGghNMVcnFWJymxZ3TYFLgwz2ofaof17RMN4G1uJD3ZyehdjVqxz85fHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gkq48Cf7zpXkJhZ6B24t7qMp4x3LVvwqtpHGYzCsKMGCoEvQxwiUnFH97YmRUj9KopdKw39VeS482tXrSBEMYxS",
  "key1": "4Nz67PwHavWhnf7aZt3XuyHcDZpPM2YfZURQ4GMv6as1mwkXGV9skPGpyQEze1ZJsqki4UsaJjjBmNgCvRMEb9uC",
  "key2": "5shu8exLeFxoVgixHumhgDpD9u7r1ntMqAgU5U78aDVKkPYyz1CbFxqNMRobMYpMxvgNymZ1mWtVUEM3YkJBziuj",
  "key3": "8t8Pqb4i9ypAiVV14roJEJZHZsQJdMWsG4v5U48JJoCdoWuen7f4bqYw9aao85HR5qYbLJGa1sXAn6yLS4gGoU1",
  "key4": "4qFh4qR7mo1B9i7e2kvLjdQPRDZwbNu7ENrDhTzoCWbtiCpcBe3m54UyHEKGL1vwfj1qnSuhuQmvZ6TD9rAVg5NS",
  "key5": "51tUpL4cL4CBK2tUznpR9tjUB9WvvAJeBMmYYC3BYVgcPCpTm7zcqTmn2Dbj5MgiNrvGTn26NunU6SPuwDe843un",
  "key6": "4wuv9viNE9VvqVHPDafJWcWBogUNhQ1mi1LEdUetaoFcPexgTDafwkqHFnTy5ae2WKZUBxH744o47RzrE2HeUKFW",
  "key7": "2Qr9c6sd946DNJsrJVMER7zpePT5GW2JNnitqG4p2W8LFezTynmTvbdtehtMASriTU9GkwHLNdyVvfAbuDzF2uvz",
  "key8": "28GAZWZrSDsVmC5PfW4izDw8B7MY2NN3DkxAABhKqVdTRERN9N1BKxCoXfm5vYotuPEhkyJ33uhzgqHYn2exL5tK",
  "key9": "64UGdmWdPeSYMoXSpECJTWmA2JSk6sSnmrz8LQycS8kyvAfdjRKAaTcPdEp6u728acvzC4HHL2Z8QJaXg5Ls1k5z",
  "key10": "XxxLQeAu8CvuxjsDGSZKmT6zaTkyFxNHBuNGz8Z2dqxLCWNTdzUnAgwDxDYxkgkN1uzabx1SPwgA8oTVjWPz85g",
  "key11": "4enbjrgFxTrwDpNqvxTNx4aTmeG1USH3VBTSQZaVMcWxpU35bTumijBJhpyES4bLKRqDQLxVJ3GiLw4Vg8X6SS5t",
  "key12": "UwKFpXSP2k9rmz2GArimUULZzh21tFqMDiZfy8bpkCsbpVT7Suhj7NUP9qZY8p8GaZMyo5P1vKagvJw6gwZvtrr",
  "key13": "3Lx82FE3nqkZg974SrZq25zgnLRN8h3pNZVxyktwtcBaFCqwp7PVdQpF4TRUm8yQsL92zAvGQXiYvN5EKJZLHpgp",
  "key14": "4DiDcDVSeCLWyC4vdyKZgkm2nCvKHafizF2MhrLMx2835YQJ9XEnvnNhetBAdF2tdVKZJw5XC7jkiKj2sghN8etM",
  "key15": "2icFq5u8JzxfCuyCw3NrNvb3v8H9y1FhWzKdCRtv5yeRLuk7x5KsuQkrDPbE3ECgbJEEoo4CVcuXzGdNvjDft81B",
  "key16": "Uut66D2tFKBvhXnCUKAPEXoA4xyk8rSuy594PtjyzcxZ2KfGx6dK4KKKM4qCZteK1HPp6htYJoD4VpoD6Ze983R",
  "key17": "3JaKmFNkJ6ErRTfKZuwdReNLakBHUTH6adFuXBtyAbJNTW98vgX3rAoPKvSWqy9uq1CrcE5DhCpHaQVEf3ohcazn",
  "key18": "ChgegZxSvBts7hcSoBKCtBDuLTHPhquMubMjQyZ8VgEqs8dQkrsW8A6MJ1c3CXk3TsrP8Quy78P5rmUahSUX9bs",
  "key19": "4YKXmcAuEoQQJVnmgPm6ZwP4qtJF2mYENqdaH1py5QnzTMEtzpm61a2TPnYKCFWnMvUoqkwkr665MRFsQGn2dYRv",
  "key20": "3YnEmSEJtj4Cw96q2ineqtzdNaRPTVGNBmJye2R1AG96iFbX5uc1PeMrEfB7rzSVoSexxg2SfzMZM6My8n7KaCiJ",
  "key21": "4tNzeeJCEdZ9xQz4PqPhN6RtRexg7HTJs4YZz9v4k8rWLNtjK11DDMgkajRQgPVe8uq2ndT5oEXo8CeRheieR9fB",
  "key22": "2ZCMjKsyj3egCajeCESusH6CvbUrXgYbfV4eJoh83RWHr4xekfQqK91e1wPbMCrDi54ra4wEm3EgLpfGUsmPPNEN",
  "key23": "2Fm9iyEtthGhVwEAfQChUdG1fhzbz9oBRUeturqaAQwtgNrpcP1H2uifHUpykvjPafST3N1XtAc73RDdtc6WFZmY",
  "key24": "caMqC7JSkfdVNvkD6YCU3PfniVdBoDcffCJ87fiJ9cPzBY1ydGTSJsjDb7uRCWM8ygEAcneFwS9vk9ee84ZsYXT",
  "key25": "2UEDLpa7haVTRkMrWjHMohLn5RQrjJEYJFMP1xUP5h85YsHcwsgcXyJzRDYB7BKscyFp9GsAd6VQsoummMS7jwHc",
  "key26": "3PxdzRyKes3DPZaSupsP5uG6xBb8mbk1a7K2W5nYqYoJ3tvpM38noBERKCrsMFZNq7QuyWQ8wyZEJBS32JZP9o3x",
  "key27": "32UZ2unfs7VW5ztqBCXAtpDTYyhw8ZZinUtiidJj3Fm7NeLM3QcDHZnLx1V7TDZuNViW2hCUPpHEQs5RzxmRmk1K",
  "key28": "5KiagDnAnUBaopYKuVWW8gZN25dbzrypCgrdrweZf8ExCmHLDrZUje25u7fwjTZ3CcUFydb5ozW6jABg1R3hdNnF",
  "key29": "2a36fwypDJEwkZfGnnD1mFnwwGd9u8pp3A11PbGfscebr5Ndafp4oZKYcos2RrvnAcMiYy1woicitBQR5ZP7vqMX",
  "key30": "2VYaKJzr3U6zw78e6twGrUkqeysF9GbX5LpSPMSzjqrVDf9McMXSUxNgkK9wJhCrammc7U1sCjdZWzsDvuXUCPGX",
  "key31": "2ZpbvAWzfJgyQvJxVyUj9sr8bKaBaNXCEvffYhKnw85WPP2aHG4qjL6btsxzrZ4qzSjHANzuxzDaMgTvqDU9RgNW",
  "key32": "5VMXi5GF3zpdQKxJGtWRTmzCVJR1dQUpcG536kkcvKF9yvdzwf52MmYmwrn5Cuk3o5Azo5MjZS1e2bUW3QzqcFs4",
  "key33": "2tMS2HAJxUFiNUYgEJhPKA7LZQQHx6oeMiXfFUomuy3vWfwTDDVgo4RscPnWry1w9LbsVs3Lyf4eHAwWbJoGgkJr",
  "key34": "2uHD1FzQA7tkskmsCLvdcfbqzVGbygvC1x8ixmdXPXaypSKAp3i1DS2uybYzjvdS3fEiMrUhKRgLufr21Q4b8Rg2"
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
