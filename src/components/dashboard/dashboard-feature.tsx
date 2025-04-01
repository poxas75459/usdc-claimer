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
    "4UoJiWH54VHjxYzUj1Jf6Txjv6KBJ1DJn6dVooQDmdNsqvNTKFPxwQUYy8gSAHeqJLff7UughSLzHMMAMva3uT1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QSg3o8xRmDayNPafSCScCwV4UiTF91ZZgeSKMN7CwcSBpD9TgowrBBBQ3HrpHpuKmpVyJ3bkNF6D2pFgwmpfhNh",
  "key1": "4H7EyTj2xtAjeYtwMZg8jZBs3JAoFrbunw5fDPs3GgRCnrXGFF2YzkokXRDYcdpYE2vhGhf1vY5W46zTPrvnV75U",
  "key2": "3WZwJXRW7WvpE2SDK6RFo3sBEFfYiQ6k1m59Yvffib182xZgiYGUVc1uHepn7Z4HVGbtDf4AqGW3HNf8gofqRjDc",
  "key3": "e876ZysHQLY2ThLaF8gp5JXW2VGkJkdEmhwG1NrcFJN2y6pazgGrjGcqVWk8vhvCoaqSXXUPtQwNQSYkgeFV42n",
  "key4": "2on8vz9eyerSMvCYk4tVfqNDX2g8CAe4MzCq5BFhoeCj7i8d3YZJfAUSUHKhNhQuzL4emdPyR2kBZA8pPKnJ2uqy",
  "key5": "3DtjpRL9APVCvMFPMt1n2N3B9CdzwJwBEWW53KN1gBTW3vKCnF5B22ZwVX3AyM41ePpGAWYAJ557VTZNdYharvsC",
  "key6": "4mgEcynHp1JdhMH62hgvYiMaQi5vYqejoUfKfnGpGYsynqPdbestzkpFxDVkB2B6BqzUAFcQtEqqUoYpSopM8coy",
  "key7": "4JSnFSPydibqwbDSTnLe9J79zhPF38K9noY5hWrczVcZUBdgdTSMAqsQ632sUUCwCZZmG8hWcys69my3EDuvWj7b",
  "key8": "5kf8rs2h6ecXB544qdzh7ZdCZCVrwFshdVytkUCNMyxNAYapL1EVgAbaPRvi4XhjjxSHoyseYRSkyQ8ZaDqJLCPq",
  "key9": "2XCS3MbPGP4g133BjBUS4xtH4HBmzEHgGFN6RKoRXKJCfA5s1n2rXewAphdeNxZcYgJNd3MDZ7L8ALdLT2hyojYR",
  "key10": "5iZ523XXxVVe5NZe4mArkq9HMFGFfLpbsNuRc4M3RZgHNJ3Hazzs6ooamFGH5s5AU5AVEbCWCuSUSHBcNtbEC239",
  "key11": "u9s8VWwwDX8sXbNKqFYdBWJTnruV3TXj5yTt2SNr3Xzv6jcZx4vBBPP8DNxvBqtK1RJCKDmTR53trBiVKiJk8PQ",
  "key12": "2Hi2WEkqELP8PAgtdK95rzYaGUPp9WUYUTYHWjwaRJzVXBbwJw2XbQUW4kXiWrHss2Bcv4WSjGE5beLC3FWsKAM1",
  "key13": "3eXbxKMeKAhKaJ4MWguFJyGhYmepE1rgsU3M92KHe3MEUiSoQ6184mw7rPKNtc4VK3GhZfz9rH3sgxoFfPjnDTBm",
  "key14": "4wUqgVpuXps9eKETT2oUKFwrZCnMVsF1UPt9iiHYADApfhAbL7hVUWRCdkYuoTGeUuiTmjpuMvV5QHZeF2uuvKfH",
  "key15": "2QKSbkgyAM3mCh3SnvZNvJH7MQmwhSZg96kaBpLaZQVMqQA6xfxxN87QZaV7eTMEMVBwN5w5YXK2uitw4C8SHuaw",
  "key16": "2bMuqQmmvWVRJ6e1bD9MToHxvXrSWGvk5DWudECPpbwpge4d9FhmZJ97ebhDhJfQLGQb4YBdcVide7WkZoGfvuR2",
  "key17": "4dW5LryYEM7otkf9GbZoWBA7hBysgjnPR2aJKByVJKKN4PS7NbPnP119GQ2rqFV86y6uU6rxu9jLGAmjBKKPBUAn",
  "key18": "2UJP5PBLK2ShmfGM8yJUbcdc5tG21Qsnsm5cgCyppSPZhuoAMQs7TCNU86aQCLsUD8mpfEsJg57EeSnFYy8V6re1",
  "key19": "5wXpiSLi8jaDTcc8ykDRDTVyK99f6aXWL97hdRJGY7Ya9gkH8bSuYVTWVx3t1TXhdTZL9YWh9DTaf2k6heL5u9t2",
  "key20": "5xirJukQTYyDhcLja3L8xcba4hYuhGky76UYEMbLpGF9bpAXVGySUC24VyDmeak5yhq5HLNwwzuJVQLTETenzY1S",
  "key21": "4HQ2TVXFhwbq1FFbHT8ZVz3bVN3saKd4LrmTYWZuiXMHbg7iJpbeAjCh2G22rXwgJPF7JmKKBbFY8wXHi2cJ6Vzb",
  "key22": "54vjTx5gJQLUDX8ECFaWGFpKNrLysWQuNueuZNfQc9rxBjC91UUeJ1dogym7Es96ugMJcU7tfev9LSqp1KBkwgQT",
  "key23": "4wURGcGceiZNUXXHUgZcybF7A1Hqw69biTLzHFA9euN78TnuFULyCwoGzNDCdiz1H61FBapeebKnuGWpkvK9tAM4",
  "key24": "3UanbsKJyDWgkMkpE7xtCkmbVZx8pB1kR1GqK2rGT1MseKeu5vsmNHhBNdeLfjAd3M2mNUiR4G1FwJ8VzNwokB3z",
  "key25": "4UPhbzjhqKMLYrebhaJKfHynMRFaRvi2Aumn5yTVHqAGVgNqD1ezDy6tsSQXyaZ6bUbrvbuL2LvRepqQX2uj2HyJ",
  "key26": "8VMqRwaAZtH6mNPGyBudqeH2azHS3aWSFJ9Nd5FcxKvPMiUNQFChVwwoEwe79QJrqXawjxMueQfp4jMriKUzcun",
  "key27": "4TERWwGacGXEuT5gF5QVGFbhVwA35Uta3tY8kwincFrnAmB4pv73e4wvZox93hc5qrsoouzeATmKZsoaPu15gutq",
  "key28": "bz8TwnVYrR4eSQSd7tvqDyKXgpmjG5PeRBkaAbc2S6RWzRU5vMhtZzDFi1rQm1DfBDJK4DxxDmygRL4Xkm3jcfz",
  "key29": "pARPYrm4SYNheuK4pa2PTVKUWDcYfpswmQYGZBbMfztvyUcn8wzbXFQ8wdvk6PcZVpb6Xdg6wszZctMmytRQxfy",
  "key30": "24yMGh5u5M71yvai6363xGX9MrQDTipBrv3yTYQP6tQaf87UDPgukQ1tpooapAE4uTT4qN86vxciXq4U5BpHah5c",
  "key31": "2oWZEyXVy3ptQStsNWMzcpoSdJ9SGeE6KYdjxQsh7nEXoMo59DdLsyXA71HTnY2fhsVLQYViXsxdrM2ug3LVoDxH"
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
