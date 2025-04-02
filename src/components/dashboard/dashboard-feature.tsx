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
    "3H4pLGeQQwCepKvQbRGp5XkwQ3LrG8tegu9cwiwejofpnFfnTKWKWyJFShDiUpAKU9fcxGTAnkxXBmsg8HH44UHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ze8oCYsmvJf4qf79Fo4SUatSfe6LTNwd1sVjj6LvS2ckRJazNEdWHArZFmSnTcU4HLByUfCf6YUDKW3y4y3JAmT",
  "key1": "36ZBdhTtgXgnGQHAwxv7tvzdmXE89a7SbRb3GKZCsEYMA7YutsmTZHMhdATRBdFW5ew9FHVT84DFw4wthLyaMZb4",
  "key2": "5wNCpMvbD9vk2svBeBqeTzDG4aWwU9eAsZnFHaByNCjLoun89zfqkE9GyqkcxuTLTWtx5hrsdbcMiNdy2LVDQGA4",
  "key3": "4eDYtsgc6V2bs4jassMjCH1RXFYEihnmsbCayFPRaSVYAjeskHAPaxQ3r8WBd67CC9qK4ZHnPatbhRws9eEEVwMj",
  "key4": "nPBcXwWfSZMksiFzXcPfi3rtCRAmGK4rU64Z86wC8WTtkuWTNF3SfFcFZtC6n3mtHc9fT5qKoHwL5hKGAM4oAbf",
  "key5": "4qXDx5HN2EWdzTa7YtF5vbmCwGrqeZQiQtvbTUtUVVXMof7M5ENWa54WqcGqn1knR9UMtQh73RNrUXQujgqjPU4z",
  "key6": "5vyhcJXhMdhCGMQi6fdTwkKtL8NP64cpcC1CZcszDoMQe4xwRpn9XhB8LK6pYNyAz6yf8DSR8v7k7Sm8mC1TiMRR",
  "key7": "57ED7iKf9phFzue2BLgGahgaVQVtahd8aWsbD8gq3smYyRhsNTy8C8tm1WHYhGZ36EP7u6s91J8LgVLE7hJayXN7",
  "key8": "3gsfsNppoP356mNwdkn2XCZ1okPTBCMpKLA9TZhBD1is5j8QxTKsNyzAgd7F4wBKrq1VnkwccU288DkoJnsXeBd5",
  "key9": "xkrBD3STbJQpKvcYABA2G4tGb1thqKd3HWSYmDSk4Tu6h7EjWxvkULDpZ8Nm6ofVZoFbtDW9Kcf7NPBVmsL3NTP",
  "key10": "4EDUN55qGnkT5t35D1orXKAsz6tr9LFmgahdu1PTb61A5RqVDgr7oU3SuBzv8gTrRoDmv9YGRiv8nff5tTSY8W1i",
  "key11": "57JkXMNLcWaUTB4Sqq2AdKBP3ik6NUvnYAiQnpySjzLibZRSqbQYmnXZ2jnmbsGduXvYJYKpammkdjQ7rkgAiTx8",
  "key12": "4uXiSmc65YGHeTCbizSZZpqjcqndLCcpaumr9oz2MN8BJRtkMUDfjd3buqrejRjT2bKWPCeZLE4pfS8yQUP5w7eF",
  "key13": "3k2UEnLFarDm3mADrxY5tTsHLJ7RbhSWoHqgHCux9PLZ6PCGaJ2Hv4DJ88xR3pq8WBVSr8xUEndkkWJzGJ9rTjk4",
  "key14": "4eRCdzCcPRN8FM48Dzky8VnyS1PyYLtZ28WuHtN7KFLRopVyXEnSiTKLD1zF6YgYUfoh87VgxpcPsDDyEJeYEjmD",
  "key15": "4JwNRFGKD1f5oa6rUPLqVKq27cN6xQPcLTRW8qX1UJpGKMbgT98SQu3M6vqtiZswBkSE1tRuqVMZ6g3qLYj9Z6JA",
  "key16": "5ELMbEDw8Eu3Hmvb1HZU5M8oydJoyaZSXio75rR8m9LyHZdTNKtwA9huqy9JD3rVXzWJMVYCtkYFX9KJZHT4oeSU",
  "key17": "3qyvcGvwgRAE5TDPVUwWBKgLLAupaseuyQpvB53Deb8ehjNVnTu6mNkbNDzPV8qWaYCAo66YNZNyW2jan48AZNj4",
  "key18": "euK3cs67YiUDgvUy5zFQFFwZSXv8WvaskSRK2L6t8hQDM5Yj65gS23H8MrL4Cktew7hxuJGpwh1j8y8pYxw4Led",
  "key19": "4m38DFPRVZVpwnWYtAxit9rTGPGMUeamCzT9o7vnadVYYU41J71kSH1Z9DyrW62e7NkaW9E7cr1bubs9bven3g8B",
  "key20": "qaBjhgDZH3w8drnCdmg4M9toQbzPrJWwsj8nBKZwveVNBRT2WeoCci6VXDo3ZZTWsHxHrTEBqtdYeYFqoXQna1c",
  "key21": "3gFpZt93YLM1aC5xvC4NqMTkF3wuTvqMKZsv36tcie1aXDdehSKBDPpqzhgyrPxAo745d5gCE4yW5xW9EXYbDsJb",
  "key22": "3xG8pLx3536MCFUiNsdsmpFtnXR7E1NXdUffRxtw9sMinSuwA9MfLoXcEPGwQNh4BiDEhtzKBXtqiyQNSLprBPmR",
  "key23": "5TzkDpNJ4TPwcBnmFNrKgtNsBfSEhJbGLHTHE4T1zWkJqKNj5WPTngyGJwmPzPMDbYULTiFZCmyGWDjcE89t3b4n",
  "key24": "3aU9HfYEsp2jsqrDtdqNajqweheuHBsrUvCpq8QFicvai8aUzjgmyLvroRxKw6aTTVWGJSVo3HARMWWR5rRFtQ8S",
  "key25": "3ScvmsodQWr1DjzR5NDduCkMFpBPd1mFhhpm1doHkcU5txpdsvr93BoLjeGPa3pvhpEPGs6zxYBF5LPpXjQcKce2",
  "key26": "2HVFC3cBee3J4y2a7N8vZdqcQ5X5NNssEyhmjyNKbhy2to89xUTcXCH34bSHGth21YB8heX41Dt1ura9sgvHB9M4",
  "key27": "52bnQWQ2TLEVgWS7VTHxZnjsQe1my2mgvJo6UCppdiYv4st2nW9dZcpeHxCDALY913ZYQW7JLJvMaENgV5bY3TFo",
  "key28": "3pF81Jdt7AG69ucLvf9UH8PUxJNGaFDh5zvZjMVQNFPxsE9zpG18VaB8gH6Q7Z6X4r4BE9Feetn1UJh8ZhBB7PaT",
  "key29": "2VQfhozkpp83aqd7cRNWQhmgyYyU44ZoghowPFR9BqNUHaHCV4CWSD1dAHsFfjoEb9pCPBWFRJ6whnQfKSqBFrTn",
  "key30": "5nriiE7V9KhySQzmYCeiu3GhZnHZEQDopFj2AAxXGncGBtR5Qg6m51QaYxm3FcWv9AHKkbFqrgZDjYZzVrbAn5qd",
  "key31": "4FBSF9pZ7yMxsFiBN4zwJr6xizvNKL2BzBeD9pL7zHB2XHG7Z3fRUenTttbcJEjonr9NnTnoApFi1JxLhFWH3pqU",
  "key32": "3RRibLf5W7qHnUGTUeaug3TSzbFHPW88PZhv7B3d1kHmDvvRQwN56KrM99uwsCSnkGLFDNcuHZgQ2V6KK8DoTcmZ",
  "key33": "51pWvP5FKysL4rsfHeREi2DMSqLM3v6ctetVS1QZvczKHdoRDjVjbypA3qoTZEHEHS3YpgvYcBuix3eGtX7MJyJz",
  "key34": "3RyKiVgob4QhP4awWBGNq5r3prxNia72vAJe7zxrmooAE7HTnYCbaydyabWdSs3L8kLeKBMLw81jcVXTzzbAZTtt",
  "key35": "cSBjHJjszrzh3WDHQ7i7NvvzJuJfHND4C6N8rcq78cqrWZxqZWrG1cfvzUm6v93p3AZof7N3unAmYFxdvU24YxG",
  "key36": "3RB6TTyWVCwKJobDHCNcxWg4F15rbGEfkby6RSiUraCZHmYtiDuNY4oPnNQqQ8j4AqHhXCPfd1EVgqmkL43ui49Y",
  "key37": "g5Bj3vqeSWbYY4aesFCdmjESgYRFDVD2F7ZQyJNfpesXxfjGxzfnAGy5ySunrw624yQSLePptqcovBkJbcvstYt",
  "key38": "2uqyh8GvuzLT2yy6Z9XMVA3nazhuAx8w9JnwqGjsGu5eFhywVeGFVu3rQQisQAPGix8e2E2HmvJYtQrqa6NeJsC5",
  "key39": "NAEz37irFwzWChQHvNrcpzwAhzNtvSJ3JrEA8D8byrm2MmYAPtcsFNE4JNGwtyRG7wTwMqZzfahMiJ3sBY9Wcho",
  "key40": "34JsXL1bLeZchKssXaBbd2kszktmJQ8HTjLn6NSeTMy6UoJvn2ffQhiY1wpP7yy8jdidSiVL6yssgjaFPhKEvAQE",
  "key41": "wqDNV1LpdSnqHE9CBsVWb5mGN4D7XZsXtgyReyvSk3dzm1PjpZw3QMgfHfYChBrbaGZPEqdXjuN78mMWaisdXLo",
  "key42": "5KAB6KkVv5GptVdgMR6V1kWMv8F1cgQwpuuaHbGfuceRt4psMHwqcnENzBLizMHk4hxhSsjHfaZq1rcWA1gubtcX",
  "key43": "4Q4sMh1YsQdWSUbdfyufF9WrGrLrLABYCKtvG3yqMTt45y6f6W6KsdYpj1ePWtRGqbMcPxXFJNhYovJbFWVB3AEZ",
  "key44": "stWCNFCxhceYx66bnDmwNKSUKfbQPFhoV6GzLmTGWEhLnVE678UTWqmypk2s5biBkeAZqLzsNQtyeNiVdEVpLJ3",
  "key45": "kLivBQBBma7nxsXSbaVHaHqwgoiL73Er6bN61s1grLX3iNX5E9MovCbgfjD9akYvjo8HCEJPsCDtXdX8QiS6R6t",
  "key46": "gr6o49JM3DD52UQqUw7kcXi5hdtgV2deQSHdUyLc9Bg3rHykP331Pt4UEPW7adpQQ7goaVvgt3EK3nB9mWvtYMc",
  "key47": "4fBLgGMcpJZrJjXrv2Tr8sEDPMtPrrJKR2giqGMXtorGhh1tFv64tMJExrhdtKPnH2peSQn365We45qFtvGWZmRu"
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
