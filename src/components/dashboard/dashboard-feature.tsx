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
    "2zPBjhNuuRJV4i8XJaz59twncdWV3FgCD7uoer5K1gBxK5tdECSsy6WCPMQEzGUhjBMSeAtuVHyXmWKP9u5aSnbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fpdn3Zq1qW6BvxoVRs5hLz6Bz2bcAFeyhqLZjqSnHZH5miuYpMA6djYdyHCiQyzzwmsHAYfUBNZXPCCxEygp76Z",
  "key1": "23Re58Z2Rado342hSpZ6n1Fzmrix7LoCNKMEXtshaYVmq9BVPunyKNbdy9QLSeU3vopRGdxsVkFQQHptsWxA9PyT",
  "key2": "4BxoRFoGdDxbh9k8wNNGVzh5kXvHsabTAaev3UY3YUHNKiG7aVfU27kNor8a4UpCAL2NdE8evBAwxEGou4VtFfxm",
  "key3": "Tf4TRK5QuZKr3EQ4GdantSiFaKqvHL3KUSsaxDHzRe12g12Dr9pEKDEPTTT9uSWbuj6fX54JpsJ7F6JX2Vh3LKd",
  "key4": "2sWvd8eXbatbCPJm7VXZTXfESMh8xbmyBaVdRrbHqc3JHX18SyifqKCZm8mSt4hGMKk4seRN4HV4Jqeh9qGyNpA7",
  "key5": "7XRkUQgTf3Bp9pT9jFFpNG1n5hHpxc8sJbGVamDkU6iqomAihdt92R9bA1JkygtFnHs7EXQDk3P1ieYS2M8sVq9",
  "key6": "THsGGMgchi3SyPkc8qqMWsdUe4f7EGZ64Z6sTa9t32Su4t3RT9xHk7GorkPEpNACC7bYSa9YscMWzy81mqwUv3V",
  "key7": "4zkhXjQbGLtVhrhSzheAK7ZjL3GwKBs9Tt4TiVoHCMuZDhzmXG5v9ueLPgBS37pMemtAyjo8iYepFeEeG1owMZjH",
  "key8": "4iaGvdd93ZgUhYorpsCUALLUhUxfVBShuvEL5HqHmbVBZBXdf4bLU7ZR8WBvLcraThZzVVDZ9rqesfS1pmzbG5r3",
  "key9": "43EfudErnt6ExgsxP96HWXx5FWMyTBse5mXj7UYWgxTxkqRGScXvaJQTiHVRG4zED9cgt52sPmwhCBzUmiW2VHup",
  "key10": "2mTGM9VfY7EvPxQMqjwcR73gGGok47vFqqQBNm4zFCzCLy1mApevkwQfvGZjB2sXyn13qjteJez5KwsjgQdmJhMs",
  "key11": "3MTyfTpTupTTAFrSWsWMeNqgzCi9ddsZhEmW9c6NedF15JfDJbDwRpFSA4hnwXi3wvzEP5paLDR52cLteQhjWL5h",
  "key12": "3pju7M5FjBhEBfj31ab2E82v5H9GULHmDZScfLjGpXqtGYtz7V3ieNrGoNCLzRNs2LCefT4sDdq6iGtzSceGRv1o",
  "key13": "4mEzPhitGqrR9cPj5pmbAbtimpgAU9VPHtAbt58ghhHtPeBWYnsfsAiUmNXuFcy6NphoHytikHy9SythW68H2Q4H",
  "key14": "4N9o7QgFz4kWZLFW58ESntH93kadAyt2v6E92b1nHRyBto35cD7q5LqmjkYzA3NRPCdiMRxowhXSER7HfP1GGg4B",
  "key15": "2uyZoAyNf6etmGdUnsAo7orteAQDoY9DxuW63SuR7hLk2LX4BvVRof6e7ViGi5ZLGxBLVabZzVuQsJJLBwV132q5",
  "key16": "3otYR19T9VDyzktGYQWJTR4JhwFi6dSPr78gfbEVnR1kX7p5rKmZmm8e68hrEHNGzzgQZBwV4vEcybLVSXgAyqnw",
  "key17": "3WAGs6X1ygNWokCJ9cDPUye3hboNHmUAapEK2qFBLdfwss3cL9K2RJDCTDmHa15YzcXkvh9KrdSZs1De8oe3DKh",
  "key18": "4xVwPRxBge4BzxpmFWkgZC5H8cRXC7N1nAsZdRQkY8vtNqK9dPomTsExLeg2iAwSBGoieq7ngvSNF9LcbumYM7DX",
  "key19": "5FiLqRLWNSMvfzH9zarkipEhhyK8Qx7zx1twU468ho8VzmEoTwxHL8EsoEhjHxpwXHqhpJ2sL26iH3K2k1q2hZ1b",
  "key20": "vtShYELqewCxwnvYmEgRA9rQz3TkUcXJSfguekL2uzG3XttdWo2JrTaWCGTv7QhkUNdZxfbQeoDVhWV8KALuNpP",
  "key21": "2sRC22GY4fkX3d8CYNiCNzbmJS4yxGjeGY4nNNnxwvZ5p7CKmKftqD1QAMJFa8FLPMCKmqeQp9AcLB54F3dsfT9w",
  "key22": "ne3iDcSwuTzTQh1gwYRvYpSET93B8RMKZnkdjAsmkba4WwSUsqWDvA6K5GzjvA7jazW6upWpKLspuDo7eGGUa9i",
  "key23": "e69NAY5NCD6UatJ6aZjQ7ZFtE9JpjiD1bPLQrvQ6FYV5LE3XXSaQdwGc7kFq5ypLD5MnqTMfzty5uyPoWMV5GaV",
  "key24": "2KqH7rzjESihuoxUWsGVvXbBHmJMW7z5yxrEu8fiWst24hwRMBY99aW1ZH2A9tLQkjm94iPKrHbawA6S7dnU3TnW",
  "key25": "ykwhk1jEaGFDr7DcousKFDULdtC5b1nHEkTm68Xyh9kwPz9GBqTHHyN5GLR6ttdN9yyDXf6ihQhDEZQKFNR4fuP",
  "key26": "YKjtpnktgWbNy1838KUCPr1kbVqQa9gypiMF1W4Paz7g8ouXP2duLSqo4CpB78tJau4Lg34qTApUYvtJR9wiTwq",
  "key27": "62DWh4YEczu4BafvoerByofyVQP3y8QLHCD2c73dd8nYjy9ErvevrmB5CbKyiJRjc3SmgVmhmUY6esVaRUFC852z",
  "key28": "4dXJK3MnuQjuktnXp59cwTRT5hUYYfseYAkJzA4NBgGLXpN8SNm63wecx4seRo3oBfU3FhBj776ZoxapNwPa3b5D",
  "key29": "52QJP9snQ7Bd9GPDQjzowQp6TodWJos3SWwLjZemnYukBbsiBodcn2priZCSakgGy1wrJoKLwD9k33aXPQQmyRdu",
  "key30": "XpFDJHuF3bFeNSDePSHLgxRYhWADGSenvg3LwrY3foGA4d5tgQ7byDV2eHEiqRHxQoo9Gt6vTfnDgTG6GLavPUG",
  "key31": "5cLj38BeUWMLuGamJrtWQsH7XZSZyU5k8aXeeRp529tnnA3eaNycGLFgszyGXh2V9pbYWo6WAdJKHTNuSR4oR5dz",
  "key32": "3ficrXirviyebh5qQvhcE6ZeGcVL8SobiMuCovhsE6mqecBhn2p92rcqyZ8WmxPSdxcDryoNseW3bCRox6TZgAjc",
  "key33": "68WFtmuRs8jd6BuD2XM2xBaHuVjcTkU2MYXFcrpR8WfFHwywqRf7FoHbYYgQtFJLysb1Qop8qvwTPLe7wYBLyfm",
  "key34": "5o964viS7YBJSRJE8P865sT49jZw2mV4f7nBngkGpCYrHwD9TH2jji6Z6AfwWJHZChahMVj3nW3N1StfB2q443FL"
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
