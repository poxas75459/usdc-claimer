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
    "7KSJXzEGKWtYawNEKWUKNzDiaqiAuBwPPwu9iPFfStkydH8jiEXAMBcpXfcd2KZh8sQ4cU6t3NyLQQvc5LD3NZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MGLVBuB7iMMakRiaaZTWUvnCrG6ZjaT1NctdkXrokS9yt2XwbHH4WvKK1YCmfpP8AjM8PxKWw8gUMd9zWJfwX61",
  "key1": "6W47ogcReMA6K4nbzimpR2XqK6EvnrPH4jDm5yQvQA6pTQNFjkQHThxGHM2FjuGHxzu4Kyx2hdC4hTY4xQRMczD",
  "key2": "4RGQAKS4M19PS7u4At69STL8kQd4kJssn3FcBtdR5JKNMPiW2oc4NhPCfZVXnDimLM2CCaM81VyxQWzfeWESSaXJ",
  "key3": "5nwwVWrs7sTd2LVoPGWN5QBvszHhXRAYxzcqEC2qimz9w67Hj6FBCAQdK1CzFJV9hpQeGFHcN4TJ5KFYYCbPjuUR",
  "key4": "3CxmSzF3qhc9Rh94kZopNTCV3tvyJNJL7EY2FKkpvaMPgtwDoJVTZNDALn8DRVDU8eVCNSQoFVkQbZ6GZV7GF94h",
  "key5": "5UesydG1sGyEwSdk8UFWWs88Bxyu5xghCDnRdaDcFgsErRhuNEYkBQ4V7oMPESVrPAFsDbDB9PUoFhfWPthrbEkk",
  "key6": "4tWuyKPnzng2T3Eu2C42FRYbUGqSBTuYUMAb5yZbCGrpHV5C6g376pnBQ9T622BfE7PTQcHDr4CvVNYC9CEKeCkK",
  "key7": "4VVhLBvagYFRA6vkymBToy24ZYnowscM91S1o55ouzieNwbC4fh6fpFqr6VVv8UomVTohMK619TUe9AY8cAsNC21",
  "key8": "2cTpXMUNBJH1b4aHwjM492ofTKP8jJNigXTVXNTXW84tbw97KkbhBapoJMU9xDzmiRRLEhRzUUx21BKKVgt1e9Y1",
  "key9": "4ifFAi5bwSAK4pDk5AY91ptHNtc4joUzzE57npZ4FGfRKryZ6bmGF4jJMyLXcZX6XzmadEmjWawQjQgPD4zgdmST",
  "key10": "2QrHzcYDZCszx18jQFNcVfuM3dhp3Tn4rRz9sVBJxMFPZfaPFurjUc9ZaYYhjwjj3fHmd9etG7rsLsdFkc5itaA3",
  "key11": "4c4jWXRV2b514QDvY9k7pAG3EVbos9mCbLkq6Wqd8x4rypbqS16cU9DkV3ZopRNMxVibFKqDosVj2DG5HGWfrx6b",
  "key12": "21p7Mk71wZK84hALbAxZbZyr8yN6kPbi4cWhkTntTzpbrzQARkQzQzv91fdm5vADnqtHcxshGTKqS2XZRJpdbkp3",
  "key13": "26q5DccD2ZtTgaX7ccXzxzXY8ZxE91ZGUPHVrivLGqPLqt6AfYiw52EhzqJxskxhBAQ5EoF9X1Lgz5B3fGcQDPCs",
  "key14": "3b9YEiPLR26qZKbSAyx6kWZYMBZ99AGaRkcxdwPCZxYgpuGDZ4WWKyfY3Mps499kKPpkyvKckxGqC42TQ5nxGGEa",
  "key15": "iKGuNDAM5R4mScEbZdC83d8wTHJ645RwZPqrxzzSeY5hLeHgq4GyC4WGqc4PX37V5SWegec4ux17JrDQtmMStX9",
  "key16": "5LKCYYjxdMrSqb5b2CsCYDgJSeDKm4EiadozYoCV5WERpxZeeninRZTUAK9BrAHGwn49S6nHbPLbVXLseerHsTzg",
  "key17": "DhFwZphdnYg6c7NvkW1qniAq5to2bpK9ALZrzWz27FTHHx3EwT24ZzTaEtyY8cmcMR9urgKUy6HcYAVRd56xSew",
  "key18": "338tfjqMDqjaD262sp6zkJ23asiMzN62PKZsXqDBLziVPFsrCNG4a7EgFCK8hH1X6TosF5rf2vzvLDh7Adszsobk",
  "key19": "3EGUN39Wrc6aGbM4Bjvb4Yajy4LyHNRTADrMymQLaUe1jWS3yCR2jBmfCnZ6pciwBuo2Hzuq82u62SmJpXGxzLAW",
  "key20": "4xWR5v5ZBtwKHDzSt8uzTwFfdMqapbkBjXxqkAuoonLyDHnFHtXYF1SpKzceKaCt4fUL2dgWfxw2aFoAUB5jxHTh",
  "key21": "DgodHakUWegVeMu8KPz43FeDPzhU3gaUMDNDTBpC1TuZ4xcNdqok3s4G1c4jw28uS1nt4RLso8yPvneEa8YUeEh",
  "key22": "4JhKmMGbZ6cqBqyebfChrQZBehKko425WjcapWikYZkUUH6wQpmbxjfEyRCjoTJu4C8NiF5q69Qo8VKWs2i38UuR",
  "key23": "j3zqahREnA7vFaDNFxLKSMM4LJa3pdFDSkiiXQ8wn9FykWNYnep9SSoxwssuAaenPg37m1ERdSQVsHV9ERnE7MG",
  "key24": "5Y4wGknJYNwt3GFWPf5nKhakb7SZRMPTsyV1btrNsY9NX2PHXovPR8kNME4eB3cJh367vunpD2CsPanzC8hTFW99",
  "key25": "5n6WAUYApikZxMbLLSJHtvwWgKVjJrAfcpDwewGDSK2AmZx1T8kvP3PEttPhxKEYbAD65aLcr4h8B524rnFoQj2s",
  "key26": "6YVP598riP6F8UcB9dytBwoXd1KV1K6oNzyX7b9jPFt4aYKLEpYn7TwCwjgPBQyAjv8EqwhCFvjQTj4G7bj9xu7",
  "key27": "4xE1LUyV9fcm4wdLVokNXVj6mZNzJYYdGpGYdTK8GbZ2xSg9ySHXeH9ZMqWt5SpXyHsyoyRPvTpAmLKhzrAvbBDC",
  "key28": "pjyJP75vGCZwD9AbUmDvR3RDaw7f4sBCgytcVyJsTYBpBpScumFustAYq657sdSrZPfK5VVDyUcRgag8fDgrUUA",
  "key29": "3NCEbnvKsNUrQ3XFCPtD1pATLqR332ZfDsht3TyNdWDAjL3VA4zmowcLqnjgEChaLmr2ozp25q1iNPP7atUL7M72",
  "key30": "5vtDxdQ39ZuKXd3RVkqD6vVc24KxWGDb9ZstZtdwGGU2ytoJRxQW8SCVRqbFRuiupwyeDyPMyWiMGKmXMkrppbyi",
  "key31": "58qzR1HouY8zFP5BUmC3ZHsvaxBg72kkER5UES9keNJYEa15mvKGgD9Er9XxiHPTrdA3Nr9qqenQtDSwW4C8Xiot",
  "key32": "4wrtYRAo1izjk4xK69BgPJ26RBR7Kmd2dhtJPAFWHx1NEd85cxDiZFX3FCpXmMfVd7Yeowm51ctdtq48ARH5xMxA",
  "key33": "2iKzPmzUjSkNb4BoZtNGEBCkbURqoyYMbekcUtCTU8reSy5Gtc47YzzB5gs1Z5kMibGHJnwucyEXvYg6MeN9nWL7",
  "key34": "4dAABbVvDFocLdYo9e19Q4Kdx1vTSPnSScYVufd6qhdvKZHmcGGesNZ9EkPvZQk9Uw4MF1QsU9fT6A7iZwQhKA2v",
  "key35": "25kGgfuniiiAzJUWxqwmxS3jpxmReGTv1v7KHkDcwkHnwg1wZiaGD2BYcrQarw3sHbjD8gtiFYFyQybvEyq3Rd5u",
  "key36": "343KXhmDzoVtPFtdVoXHZx47MPZhWDWS2cfww43DVp19A96Hqug68KcEhZmG8dccAE6UrMnEwArGedWVuNWb8LM8",
  "key37": "RPs8MgZFFDpNbwpkWXnKNUqyfUY7KZtYhZG9Thbra766XWo14BBB7uwKTz54QM5rtM3BXCEktoKSTs99rWVHDwg",
  "key38": "4zAUtav8CNf6sDrZyPbZJ8FC7yAXR1dpJdjQQHRVTHKNh3Hkz2vVaxmxVzK3scTJYCo2D1JoeXkcqY2nV93kmBUu",
  "key39": "SgULBfYadLFwiUNAxG9SmDzVuXbSJcfUDVqTrEg9Hf5WWgRNYRDjxvBqXfhnet41mVp9yogN5WiWHZjgYF9KRGk",
  "key40": "4VJgMdscJegYojJL9UbXpkjnDJMc6Ux5ahxzXY1FT4HTv7ZukumpvSjQY6Vd2yLfCeSqK8uTu2zWH9HCAmqGcWq2",
  "key41": "5rpx52rDZfCG72NQMWCYpyxxaHo8LgFA3z6Et93mLWgx3unt2QtKNAtb5XdYX4Q8EYurc7oWGj8iXkFVpPR6Bqbj",
  "key42": "4NHhu61ncZoomx4cK8pHfcv15t9DeWFgov8FANwEqbPcvK7gmSeV4MawxwteSsBLE5YTsYG7PuKBS8tZkpUXUJgH"
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
