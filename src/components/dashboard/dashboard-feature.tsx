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
    "5WqyekPdkiYtY2nkXtJcYNdWauXMsxNkMQnQuXc4qyHDgM4GBCxSiK5h3R7oaF6zZjhSycWJASeZb9TfA73SfRLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c5eFMydiNaYXK4JkMDhZDkir9Kbeaen3NfuoaJRAPv14zmKRPm9yZUnHvf6NCHJpEGxM3PYvPY3CiV56Hpc9BFf",
  "key1": "2HCdYS5NCred9UtDfbJkd31Es6MvXa9EDxHmJjjbEUjoyEjW1BWW9tfz9JdWY7oj8rkZ4e9z2xQEi2Lv4TNBMnMX",
  "key2": "bGDaF1knD2aAszdZsH7cutSvw5srbgpWFiLcabFDfkFzradTRt73KpmqCrhgEmxr7z8cuWr8cYJWeGQD9rFDQpY",
  "key3": "aicjxbbWTD8nyDP5RmdgUSrWqTJNATyqY8wirymyG52TStVvMCYKnhjaEtrF8JnqpcmmQdtkfDT7otPRfChFMqf",
  "key4": "2ZuHxs8tqxXB7H6WmbhZb8bbq8X6uRqmu8dQxiynUeGKSPtHxnPut6x7JFSasAstncFeB8iFuaj6LmLXP7AZFV18",
  "key5": "5svLdRCD7jzGv56kd3GMWyq5tg984kCMwSwgdGZ9XNx7LJi1oG7hHYAEW3n5CK3NraVkWqdKD2PVyScf2PYbr3z6",
  "key6": "5D1iCraH96qUNDue96U1DaSroasGcRtg4Pg9cCoQH1AttgtZDNEUWeyMr3UH6Zv4cPJcQjBupT41mfg3XPBEiPTe",
  "key7": "4cEB5UrEqEAAESv7kqoDiskicz9rUrWYNnRJGrpBVQAubrSjjzRfFCiS275JyAGK4b9gWN75FPeeHjj5ANGoU3ot",
  "key8": "BhtgKffg2kpH39HvEmGxyUWwoiX1Y1mcz1FHusnd7wGWdusabQB9NL4tAKhKaBPkLDks3P9aWV1Tpn6Fawbke6y",
  "key9": "QVjHTLtFQMHfEGPfyVf9HtgzWKpJfsbdA7FBiD2U3ojAKaeNGcFKJ6zzpgUSixSY3VTLWLYPdffWnHdqjT1rtfv",
  "key10": "5hyDj3zGCdRMXJW8GKjjQQDTLj7J3EarGL4qJGDjvuxiCCRHdabcRGJdEJrVTMGUAyHXHAQRWHFZr41F5FgoHtxj",
  "key11": "3w2dJ5sXMEpzEqyLiuS6y265qSdJCmxvtGwFqd5ZCjJ52NA3sonFTYGoUgK4ZKk65E1sWUq5dNJkxLnVRjsBvSYQ",
  "key12": "2W7x7V6PLvBCbgvfjcjGWeuM6vtHVExV7YBfnCRph1abdqmUDP1Xf6G95oD9KAHHaErgPjpWvSbiFyFoUif7SgFc",
  "key13": "rs4QatsSF69TX2SbPYquYwHX81Vs8KFmuH2UyBhMbEsDfLEpEviA9MrhkQK2ARhStvPQwh1aigTXPJhTtCvXpoX",
  "key14": "21Shad3nJwNafvxCfex8o3dbj3PwpWW7mW2w2EekSQzfKaEDzWVFMBpyqqnzXNdFvphD1BSGgGtAsBWk1KvRqvfr",
  "key15": "219e2npfRRtVPPbxfaQHNJcxRWsemEC1crbXJ1TTaNqW4oXemzkYr2DWH8sXrWWxbjCHwskPzcEGAgkgE8jGDRxr",
  "key16": "52zrX7TC9iibm3Az9Ln89rwAL72GGDN7S3Lhmzb8FaxqibSf7VmHjv9ZjFXvqeKsBLPptNyyjVpuQs7KmKF2Tt6L",
  "key17": "ovpkkzcNGXP89es719GY4Ytj6nAmiAKg5eZgou5AWH1z7Bn1hDD41Xn5dT8ghkqV4t2q1jL4cGiHy2aarbGnRT8",
  "key18": "5E9ypkJcygxEyq1JviohTToYJaqfv5ExTma52HYmNJK5zmUPRDmzr6YZYcMzKgL6wCNmWGpDwNtRPZ2qLJzBuiP5",
  "key19": "figBPwaaTDutW6ELqeomzPUjZGixWFhmThRjSWaRodhFkF8xGmaKcFUtgBxqDYJ8cLDShni7aJv5fTb8h1mdkX6",
  "key20": "3rimZrM9FuEiLXH2Tb5eXZnfxbNDucWBmHN4whUcEcof4BXaDgp7iqcGCvDkYsayfJA2Wq8WRq5EkohNnJfKhEe6",
  "key21": "3MuALfGv6Nra2bpZJS8WjkLMRcyy2oSi9EnLuMnqaXuM7FrLJM8TtXRdZcaM75jNWdYj3BKHNU9F9ABFLj7w8xdQ",
  "key22": "3quU7YokvadnwToRS996jEd7h7eFWwyjaHirS988LswZwfUTAtGrfDSSjcS7M4xbzRxreNnUSjgDHQvLPfz2nTbk",
  "key23": "pWnNyhfs7Zc6p9UzyDcpj5nVfUjUfQ51X3S5b3TZt2m32pdDFJxHCpHodG58nREhNczYF1zxdDs34Kuwj6LJGrd",
  "key24": "1TFZv4dotdMrmssMQpuyXWJyW9pNgR9DPQ4BaGpSwaRyAMiPrjfYmoF9EZrjGANP5eK55XUW2QezqYiEaCDHV2z",
  "key25": "36fr4ajQcwCte3FVAATBiZZMyrMse8wGq9YSZQWZmSDBuxEPHT1YZNNypojMJ1zApA5Sc1LDs2jv7scJBq2vYujs",
  "key26": "5zxeCEv1FdbCU2FBgNrF4gXRM2ZgwqrwCV4JMArTbW8HYqckMMV4HA2kUpGqvJ7JNYbEZNufEstUdZGWYvVqrZ4e",
  "key27": "2FrfMFrYuWVxPssTciTev7c66XD87dCTg7XsN8SDRPyzYnSVXQZPjkskCKjDEFWiPZEWS4rcBCmMqwqrncmqMxHo",
  "key28": "ePnP1b9jcdP4PTkC4sQRGDeumHjc4frNgkqMMBmeCGNQCFgnHQLf8frCR7r2hPdpUeAdfP1JzdiUU9nqD2uuhsd",
  "key29": "52rq7oL4WBtDdFBb6F9QKj8GaUtNmsmFExrDyA767k6p96PcRKGAiW9C8ChctzHezDdiRuspq2VykDQ6ab95gz1H",
  "key30": "59p3BwnKgggN4BsDKXYMRYo41nBC63E9zyKNYTQxAquyaZMRcwmQzfNnPvDhMrmzPrzDbZZgyJ7XAgYThETggsv7",
  "key31": "3ZJnrQaCT7giEn3wFaipak7N6HyK4HFmvejaHo6v3JYygKt7qVsYBMVHXPyWj51hJkqjMtNUCNeBhp2gnNXpCe1D",
  "key32": "2fHCAKsFgsueUzxrPRxcewMab9oDjQjVLn2fxJpcDM4R1e2xUvTo93mmx5MSYgsTouxtnL81FTdx4tWSEn5Afyg3",
  "key33": "3ooHCb3s59VYP4eufYaZccjmKM57Z1XYpg9U57rBy3vYim7oKhhgv5kHibkeypjmP4hc9S4DheQBu8sddM8H7jn2",
  "key34": "5xiQLQvxner2hpDGBRLFMbikvUxWWLTU2UbqbmMCHSAL1izYHBUCSqfSDUSqRhk9eQqZ7L3mxgwpjtWsgDWLLXFb",
  "key35": "2Z93F4VFBADqmFerhkJk6jf16D1g2phPxa6b7ArshoAaq5PWgDdFr2gquSVmoRyPREGX5nv8pzKJ5PGmCRwe8qNG",
  "key36": "3S8WgsfDp6hhK1mEHBKs5AAEY59kGBL57yK6WyCVy38JkCwPSaPiuA6qAXVck5Vz6xJoD7cGJ8wx6zeWsQUW4khW"
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
