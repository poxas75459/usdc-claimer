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
    "4GYUVRRjoMwg173iCJV11vdeukxRfm4RWqUMHxNWYSJTD87ZjripiMRT11vuJpc357j6e4TU2fTW5Wqxk62oCLCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JrRMzKmHYnmYRR2dA6caocRD6kerNodQG7EgM9HghKRSjCJSqb3gDnUVkRqKZsBcfvKD1kaB6xsqUxRW4qS7zgk",
  "key1": "xgyiY4E1gS5CZLwgxQkqKq9ipe7b1FX12mfmJi6saDwMQJEUW9pwCcCCNWUnEAoNkPCKwrFoaRHn13ZpirfkykV",
  "key2": "4mtBaYWPt96pUowJHWLnU1eBc3Q9sfSFncGEdV4ACBRcg9YHvLRi1GwexAuzS92BV1zinXjG3qPWehoQGq2SAxmv",
  "key3": "4in2rT3ipXb21H2WsMW3r6R1n36c95MmF6gTUeko1odL3jXiBW7qL28KqLg6rZ9gA48o92yMjgMGA2pLRYJnENnV",
  "key4": "qatMCQWGrP8MJvz7RNp9rVK2DDHQD6AVHnU57STKqJiQQMJ6CuspgfRzRyrpaaFeRWTsthHkTZmm49RGcoUVNGz",
  "key5": "YjnQ7C7uF4Bez4xPKJCy5sgJjbG8EXmexUJdcGtD5wEizMRwgDaTvFpid7BaJHr49kcGoLetqRgKkatVMEdStBm",
  "key6": "5GzH98tFGWP4o175QokPHti9wJnmFys6ZSFryH7cgScRhGQbDASRCEVGMAQx3f7q8g1ejGLE4VCQz8GkYncQhszf",
  "key7": "Y4UDHZfiGKL3XnEfe5S1Dfo2nk7z2s6ysja3bso5tUBrYxf1PvUNDdgj4Eh76y8XSdis236BgG9aRVsv4h4dBSD",
  "key8": "2h4CZWTqrZVXECpFTXj97ckhakczre8JeXjb2tFdjPTRoDEThoSYccEFeg8DwcvzuFyTyEuxBwPhepr2RC3xFqz8",
  "key9": "4VR6heZ3pQaiHzScQRCXkesdW4QEcLyisJ3VyMGHDv2zRpQqzgvSL6rhx7k4WGneA5eifM9YMLHbxM3nrYW47nm8",
  "key10": "2EQS636SKkiscEJwrH2bsbkjM5Hw5czZh2p1SNbAgL8hBVhtKRHVdobCb3e4wHo1ZVogxGqRLmM2oufcEYgnZ5ZC",
  "key11": "5ZJxWCeiirRMHqEgpLRaPxEVaZpt9Zqm4HwdTVvvfZEFcCLphGLGaZAgB7orxtZdcjXh45P2Q9QDRF9JSJWT21rV",
  "key12": "2745fjWt8NucoFGVekqkZQ2QKgaSxQqGeUqR2t613xUDCdGkQnwAyLHCgdrGbCopFwWjJNssg6dwQwB6KELob1Uu",
  "key13": "3XGtvAHQa8k77d35mr3DHTtgEYk5NGitxESe5TMpxczCQQnA2sojoycRFrtgnZ2PQX9yLU6bvfh98PmgDuh6kXX6",
  "key14": "3MwH1UQoPMRNbpLJoycX4FrXbRKNUhZjZQLXJxgxhDUYEDq9QLbqR9gma4CbYXEfcm32Fkjnfcb4mdzTgy9JCXku",
  "key15": "3Vmo69XWkqKtLJEwQVbVAZwP2oXUCayz4KBNxRNbpewAfj86wjrsDrG9mju5kqbEsXd87EYACb4RABCRuEZgdmPt",
  "key16": "5UkdDMr9kDCwAcG2ZzVah9sm26tDFVi9kSVEvYeTFDxLuhoGBnebc2NXnpAchKXUKcYa8efpyS8gndBwQNEepmSz",
  "key17": "2EXET6ZGsPCEuc5r2pM6WYcxWynLS6ML6MEg7KNXWshkzmb4B1PwcoV4ZAPPE6rS3Zbp4pYeL2rNRCXq37ByTqXy",
  "key18": "4T1hnQN8G1N8rPEzrCLt4CZQ9Lt4HnwEbSKFdYhzg7G58pMpKpe5kdt4FA2YEUeUy9AM2bfoPsMjxWErLC8iwe4e",
  "key19": "VbAaDGKvdycwhaswhtmBVSt4BMKJWTko2wE3yuWFGy9gNLWmafcDUgRb8rA3UBNjgkKMyvwzR4dYXmfRubQWVN8",
  "key20": "3vD35AvFjYxuqFErsVVg875wQra9UKfXWbBmTZ76ocFASfQkm7tVUGDSGobX42UesQ9MxPoohZ7uzWaUYp4pSY2A",
  "key21": "29E5R87kpHNzkvx5PzVp7FN7MBLkLpnoScsdDeUKzvmtAiW4NxoGbUJEXjfKp1ZRM5BXNytHZeAWH9xsQNmJUmxH",
  "key22": "4o8agPhhNCmDuCrUucGo7GRXLY9X2SMhsdDpm6rZTnU3TfJZnr7YQYoZQv2cV7KyjQFkgZdgt8MgQUEuFKWs9QpS",
  "key23": "4MNPQ8Kty5yCW7Ad2Wg6dUcuAuZUZbk1m1cxD1eWHZXbtzcWFJdmUBmogzhnakNwLFHPC8Ujm47B7FevM5XWQqRt",
  "key24": "cPQYREUaVTqmBfES26BgMTXsDYjU32uE8qTuZniFX7qDjPmfU3JpcULgB1Pe6RjDsGnqkMx7rmLrGDAER9jMpvQ",
  "key25": "2izSapTvgrXnUsN6ztYT35tjPknNySSpYnJ8txKujRhfX2AqCvh4xhsCPDray75vqpiXkH8qCayb4PRVXQ61MSHq",
  "key26": "26Jk2BrugY5pApcYZaxmm4gXEbEZabfw3xY3z63U9r8AGGHYeHY9LXvP7zD8CcDNAEKuaepf1H2GitspffZrcUaF",
  "key27": "bJiSAts1uxayQsQ8Qm8XqWnw3LCS3wT3jjoCQ4zyri1BiCwM9kjhzbpN4XnsuKjpsYpLAziNarbrGt1pGkL3SAe",
  "key28": "2LWEWoCaH6RoEYm3RBG6V4Y8fyQZGMcaCfR52XU4o5Nxez9y3hAX7hUjg4Gb1ASXme5RzsFnZH9AQpCioajW2dLY",
  "key29": "29p4DmuF7ZSzMrV6eV1svM7qGqzjiMzpSxDUfMs6Tq9iuWeLCxXfZVwLtddHJuGCM1rMCamDBLAm55u7H8PSCd4j",
  "key30": "eGaHvdHkzPWPh9UVhxoVKWcVAtdy9dPt9My5fTGV5rT7nx8ezMt9jY78LP1b11bt3Bt61wUyhMGf8awiibWhPo2",
  "key31": "5D8rZeSiVHFsopfEVh8GpBSEBJ1a3j25yMXs4RQi8v8vHWP8szSSPEttM2H4oe77mH9Z3ieq9i2McnjKshaAzUQg",
  "key32": "4UUf5x3zNRSaUmpYEocMDTSFAUonqG9ureBmqLsex4zEfY7TVhBgqbXtaBGx4W46Awcv1tVdTEeX7zBDPWoze549",
  "key33": "5BnNZb1xbv2jZpqH6bcuJxGTdzcXmxmFPBzSXJsTKF9BAVMBqfKoxdQVroPtv16RSMhNsFSAQNdj8Z4E6kWDvb6T",
  "key34": "3bsbjQFeJpJSWMqtRbcc4yEQ2j2LzQRkFybB6fpLinREd4xBhLosB3qU5vMCnXZZY5Ca7bkkqDgrjEmVAatrqdR2",
  "key35": "4Yg8eJtVEaTN8FWvaq4NZGoK9znN69aS5Th7JXLQjtg9HN8Xp8guCKoiNLv5VVFj1rgUq2vimL9ye5fgCajLLRSq",
  "key36": "3sHNhmhfGKfbFpvByB9UwydYpyJ9KnMVbhvMsXwSyaDkkouHM9ZYZ2c3m5r13MPdukAmJVHvzBGX1mQnZB67kS8q"
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
