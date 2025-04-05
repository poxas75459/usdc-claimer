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
    "4P8ZSb8C1jdrBe6XXD8x8cp4Mb7oSoteVQH8uNjNmKYJcafeXTuvReHAPRDnyZZTJoyF1XnpaWXmoUhYKkTcnyMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kJL9HfWqNQdJdMvvufZxrfjV3gfRuSgNNoM3umKuwshfRADtkQhM5RgHnwh8H9a372fTWnASA1ZCxxrTqDv7x8d",
  "key1": "2L7au7TuJ36aGvWiduHdgoExSJ72RQdbgGaZAKxG2bERgvHwgJHAiByEtmWnx9oZgS8RSC41NdCnHV3hAmZGNVBX",
  "key2": "5eRwfPqgKNn6Gp8T5kpsuw4KojtXt8ZeTjdMeTEJ1duVpduz51W7JkYZdCHWhSLt3Bt1qCGGXJiSrsrGfJqFQQeJ",
  "key3": "36bDXbUPwPR8yUCs4apJXVAdmpRZSZVt6WzpmjM84UpMFD6ja8j1vBxyHRhr6GwXwipS3v3oSkihnfxmQNT6qVFD",
  "key4": "3gyNywPNsbxSwpnS4udUWe7mNto3HEFBdo1BRwUBVHXiSWUN5yQhrmjrFaTq4CQEmrcyrmPVwMzQPP5KyjxpacBF",
  "key5": "4SWntBFszMT2WbYQU6ruY32mcAgfohi3XA88EHC4guZbD1yunTcuU3NrgJkvCuQj2M8B1LRqyonfTj3eyfkyGJ5q",
  "key6": "3H1gRGUzNkK28rxPLD5CQ6TxfrSkbuzKni53vzDTfYer7ftw2i71VmL6gxDDPv2tSxa3ZegqyK8YrehHEeLvBW42",
  "key7": "6wTNDGKGyCLofZeKZsBTkUND6oaGC92oyRuS889BMe8JDRYUQRVzGbGT1DN7mNCysh1TzZaw4jxS7Xd8aDsCsGf",
  "key8": "5Tvh5wtmESxNMTLTcNED8QrpbLFTkrysogARXyzsGBT8Le66MppyZuDYTkrMAUon3zH3Js7V8wBosukL3j1s9HkW",
  "key9": "4suTHipaXnAizkDvLiDcD9FJ4Zni3sLJF3SZtidCCZsN38u1MAuVTyCb574UuJywazvnZTu73WHRPbbmZpLk2BLj",
  "key10": "4sWWzzVbozKMtQiBqTyEXybaJ3iiiM6WRohKuKAtbPk3PWNk8f6w1xZntppZkowa8UAsiC14PQnBgWp3PVRsGqH5",
  "key11": "2V5pRsCyLiCdMgwRxAwXndmi8HWNxfY7tcfemTbrCFNPBvQ2P25mqiGpWcbYgGQ2Ktq5edj8HTPAh4eneQtvo9Ki",
  "key12": "37HmRLcuPYbGyyFVXQeMSYXAXEsFDe6mrTBA2up6bRz4sd61taJwSsm8q2JyA4ZxjBWnZNjRbJHYkWQYJg551mHp",
  "key13": "5WZ6gYtR7Lk4smiK6sCeYf8cEfNVRPajk8281RVFHZrnRCA3av3uwAyo9xsA1cDmUufgZWoi3f1KQrqesMB2wrJM",
  "key14": "4mVmJh6DyRyzCzLiPpEnHEt6Ppof2RqoHWRTnH5T4JKMDsQbHngDZGfLohmKeQALvd8iVCB6fUNU7WYuK9phu8mm",
  "key15": "4LR3RC58SMdF7MidCBzTzFU48q7iPYcGsQyekEnhZDBKTJmUSXCPJKEF3GRp1TCinZNxpYaV3RHXsf26yT9a9jUp",
  "key16": "3jRd9HwMgUzpbjjZfqHfNpM4f188icUPMkms9V4sDkWRdDFgGj5ZFJHAXyJ7xy7W78Qk75Rgerz28BQGTNCrVt2e",
  "key17": "3T4pc3cCqscb2MHrZUaAMWeMcPrgZFdhHJefjEr1tm2qsygCK42coo1QRamqpoECXzXeip6k48Z1Te1twMx85dRC",
  "key18": "3sXhiYegeZc7EDajKo9foS34Zo3GADtqijmZzg2up3QzWHr1E8yzuJQg4ehKC6b6neAsyPMUsTnrs4anibhLEC45",
  "key19": "4VMf46tXpxw5xfKGnjxdKW2MG7JjK7qjCCbzqLwU5Jd2aB4LjaqdhH2ceSSrVNXyQXtEsq5tYibedjdhaBPdqDSF",
  "key20": "4jAmpPVEuR753RLVJCD5iWgLquomQMWXa5JSrwcCyY5mAn6GKrPMv4UkWkbWCvLaki5ncP4Z7WEftnzMYNzr1B3x",
  "key21": "2RuyDGX2hdeCZq8GhDfvAAaeAdkScEba84FjTD564pg5CfMDvkHaNHauZHS3dvCPh6tHAUifZXpVksimqj3Z68U",
  "key22": "64iogqQ2i562cLcuKwFXgsALUfGwbJBfF1T6SgNJaAVa43kt1kYtTzjLDf3Xq1DUrmbJbcHYEcyUfgxQtDTUXBNX",
  "key23": "4LkKBuvTthkYWoz1HX1Td72fCxg6CnyRKcKyZuQ2Ggw11LBug9qQAba7b7fGp9uKLwNCCKR5zSiYKQ5u9a8bQ5td",
  "key24": "2pY8PPd9M3ckZnYwaPtno29HKrTVcc4kD3dJNYBqvbqA9YAiM37w4J1U3oVkS3oz4G1rL7KSEoFQGVRDx8HzhS6h",
  "key25": "5EehP69o4T4fT2zqio77eqNLaiRuQoCg96VSkj58g6H5qAr3wPhwNMHvKALSbb346DrNwasBN5ikLp4fy4JXkj6u",
  "key26": "3nhoehqtSxggneCMDCqoc2hz2inPDxEEftn5pa9st7GGursktcYEG2jC2xfSSmbc8uX7RfsEizYuVQ8xvPPYewH5",
  "key27": "3bWePVtXoXPgQMmenYXzKbeHXHGw6VYMqudmrJVJQajWfxRGv1vrTLPUbfTxgQqVKRDmy3zWbvtnyHCNcqZ3tvgy",
  "key28": "nyjWtTGgEaTbb5v8LdKLpRSWaWMNn9QQjnF3vP3oKm3p4SESus7uNqoUAqBotodkDxnecHcvmUTQcVtvLMk8FAZ",
  "key29": "3kq7uRfETxhaymeJL4PygLEVcNVNA917p7R3yG3yz5TtP3TdwHNH1grAuuyT79eLMnmUgxMsVntQbr5KUaGcbeVU",
  "key30": "4J1eihLQtPJ5NbrN2ZdwYCpCU6ZEpNyjb3uDsoJjatVBZBNXW9wdPFuYiEvRMwJ9b1SVTEPwg3gz9pTm3qEUhuhv",
  "key31": "UnbkfivU43ruGqV5UtXsM3bg6gjSQcSurAZKuVpoHJJeuSrhFYTLrvMKG6dqT9LywkWEmSiZjfQwsJgzezPVVTe",
  "key32": "2PkWqTgMtBvdxYqFCohUNvU7v8TesgDWUC6rpK6Mc2sYZCsTBCRGT9PAMxFzvXRnD9mddaPKqHv6aikRMez3fGmf",
  "key33": "2wnKnZzrvoVX7RFYXoAzpB2zi1zYtxKq4LT3y4kgatp9XJq5c7yqvFMmF67yJDhCk8MnQBmMLEda3Xu5Ub1BBZEM",
  "key34": "32GjhcHZCyXHnFRugvWdkHYadHqMaHeaGhYGZGt9xWtveVCxrusKdVaDMmW2tM2kD3kyMxzyryHBZm95qpEmPUpi",
  "key35": "3PrNd83q8QHX7N6Q69R9nn4oy8Y15mi9bPyuR3BbgiZoSsFxuu5taLYBEtoByda3YET6QeQhYd2uoWxUbPC7TpKG",
  "key36": "2MmirKLCXuYRmLP1WPM3tudc8mHMoNztV3v7qZJht2bAWrZQM8URvbD9Se5tFrdx9iSpEBP9KiQM7okE2jBBPLrN",
  "key37": "ofAKvdQ8swF519L6d2ZADjB3sxLBsU8yPtP63qyNwW3sJ6vVr1AxvJRmD2QJa7WQbWrt22Axsvs7onvLdXnam9w",
  "key38": "2qaUeXBy7Zt44jW3N42UEVVaZ2jxXM4SZAaRJ6MV2gtiWxgFyqZGCZ5WZBEQ8VAXWrWbDGE7kwzyayF2aVG6RGrK",
  "key39": "5YRZr2iKYhStk5tZaReux2chuLqWnongPoiwYWnynGZgQ1eD8kvbMJCPk28qReD8iB6TeA29Y25XTyAjuD35SXmp",
  "key40": "9YrBdU1yLk4YmEtnvdbMC3WveJWkgrAdjw4zBBhaW1g5GKX3w97cyWDDg63LF48hqfwViCcQJH5gYur8BYP29P2",
  "key41": "FQQhgfxzQaMrU22QDV62q6iPjAhEtxzhSycAvzRQse6Qwo3bCzCpsmpwYhdBUa3ZoAW9BdfyzLqe7HdFRWBuzBg"
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
