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
    "3rARHsfALCxcAvJhxBVaYTamgYQdKydGvG91z1J5UW5Mi5QLzuaLpY3pqvhJo6NxHqUpoupaDhctSEKeg48MNCqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xZG9VQq1rQV3YEvsAnFBK1AKDSQhdJAPaNqBY4tiwqiWNvzjgRZf1VA8HVQfmv66JAsF8rJ21ZWw1yAxct82uf3",
  "key1": "32BZYioB9Xqtai2MUESNYD5npchyRouAxhLA7Hbwsb21s8iYCM8BhtJcAkp9wGqtWXhFsefpm458UeZAEnwn7FMf",
  "key2": "5zwcDzm8jwGtWwTccVeuP1mtmxFHKpoB24qHweqZAPdHq4qdDggy6htDFvhK2BNXPoeeaKgGghaRM3jg5G9yMSek",
  "key3": "4Pm37ca6roEFjdVGHnUy7x9c4hRFNUkNpoB5aH9QExgMya9c6UK9J33vRnDxYuGeit83puuvHKaYCyssDfK5fbde",
  "key4": "4etiQFuCCW7kD7kqiqgMHns4mXfdEZTuPQzmkyPUvc2t7vgETWn2BhnRLAb4iHoPvxQn6kNJx4PGRPGuNovQa3mQ",
  "key5": "2UKPCQRtsc5SVDvMGK247tVyJrjrLFAkSVYpsNfTKdWuv4HeKvket8tL1NUJX17ebWKou9ezHCjVYPh97RQAYRpg",
  "key6": "5QLTR9Kmod7RU5ttBcBJ7A7PcdFk5SXzkrxY8o8F2SFhExbrMhURmEkv8fAq3ihBYnvf5vFHdoFpuX8VmgwVqL4a",
  "key7": "5HgD84GZQnjR1xBcc7QuFd8Nk4fYWCmwAorkD7kGMDe851xb1p5ef8mqGguWCVBtRYFGsW6nkMWKKUJs9mj3yyJE",
  "key8": "4eMD8szeJWSrGCKNa6xfGqMhBqc6ZyCw15peQAXkoqnuNzzPMoCCvMZ4VJjHC9FfRKEFWqFJvQzpSVhnHMGa7jWC",
  "key9": "2rP9dChweC2RN9FQ4cC7qCKs1H7bRxB5sTYC4wZJjRoAU1Knh9XxPCNEAbQEdZSPG86Z8B6F9uJMBnVJGVU6esFQ",
  "key10": "pnNA1S8AEez5HQFBnvDRVCZPGUnWyLZ6x8S2umdY4EyH9aTsAPVEsXTFsBSa5hR6kfmHKNsCGDcu1eCyXJYcjtV",
  "key11": "2kC4dhSqyDVpTNeqbNxrJ9NCqkVeMbmXtJF5dEKiJGQgoUaxPgvyGsWaSEaUfS5tsx6Z2nq24mxdRSXdje9uJQDx",
  "key12": "2voB3tqLybMgRStWbcKdZah3SbJ26yctDcghvcwXHyu7vdWdqovh63hfwtvcUPYiymaoJ267Ex1weDkyzQVxfkbK",
  "key13": "2DgCNU6zooxteaiTGRJMkgatgf32XcMPDQmdFpkdz2GkrYHc7NgvhUht3hsnvUWNJJsoJ9goc7xATNEQgP35oxnA",
  "key14": "3cRbCHs5REPBnsP3ALVRtzhZT8sorfxcA5z1RLTC93b1Xytd4CMyvqEmG8EkSeDdSTW4DZV427vqGFHkEA1EDYcm",
  "key15": "2WcZRNBicwfiGWN9oAsMyP8WBuQAuUHtD7YnvnTr7GndU5fPcWeVXWJd1CXBzv2w7aoLQhiYTqjWLLZc91GVLBy5",
  "key16": "2MvqQy3Y6ZvXWWTQAGCJkNFaCtJz9EtXuC8ZNUof1tJHRUn35peojxj3Mt73Vv8BvFKKXf6NwADJ9r4Fwyc1LBLX",
  "key17": "2XSbRscxzyTePbtRVRERLasXgNE8MYAGp7FJJgHhsitNvzTcqabwdXjxzPjtapxFs68ygihuAiE8rnV4J5tdqgY6",
  "key18": "HZUafJ72KSxgTuY4HFaCM5HB37AKrLPAsyez983aDSTvNggzJqV8WAtG85m1BJBKzVVmtdV4D2s49Jc3Psyy63t",
  "key19": "3SiiFeKB22dH5kpMMMQDAhjUBWA7UYhhuNRUdhDHqyyAZusYFKMTPKp3KQ3fUbBqsJgir9MTtSNVPrx6A92RHDco",
  "key20": "4FuNHUMxA5UH6FbBi87HHe8Ckcov4A552oztFtgdWzawY5wjrMqRQ5neGFJXxHhWNQsTLn66wURwgsFcUiKJ2Ea6",
  "key21": "3QKN9VXBvWUetMvPp8MCQZtqgJ8h8c81hKaGp4Xjrdr2KW1gM9NzsDdw28wNSfmGJGj5J7cv6GTAddg5j5Lrzomj",
  "key22": "26idLx7cQQAKnGFGp14gH7P39o8fFxxpVaqXb8rzjxM2sdZnemLxKnWAutCA6sg2P5oTDK7kQpHnStEECuQFVFhD",
  "key23": "56UJCswq4Fx4wj2hVARQFxTh1BmMRFt3DiobEjMHTsM24NJFY1hcXbVTDjeioDnEao7usetTCTfJ7Cmcft4ky7Rq",
  "key24": "vzd1cNvjiqzAKsUnP4rod7JXuBgPdsCF73uv4D1TgRUeQfV83Z8pemv4CM5uQiGH3tZUxapKJamCfXaoYJvmFDL",
  "key25": "2uP6bSozXRdDJxHbsKxUVzY4w6bRQpYCogEmJo6u7Yfw2QBAmQXnYnmc96eS1FSSKcPFe7tKW2GTyjNN7n31BxL1",
  "key26": "yABECLqwWLvmsgTfdKuSpdBJr3HtVBcKCGEuUThyTEcoXy4uzrCmhVqpRtdE26mDwBqb6hqiHmWZ4rtkSJMqJuX",
  "key27": "5wpa4wkTwYbDXUGMANqmdzikuUgkdKr9nKMH58XP3ihfpzCz1rn9ssbXSS5v1sfuTWaWuZZigmMf4B444k6DPV3j",
  "key28": "5Wq2VvAEmZbd5R83U3mo4hqGJqtHjeW7jKgRa4iXCboRfDEWTytdfkvL13K5emMqfJeXCbmkq83pDqGY6kGw3m7q",
  "key29": "3jt5vDV3AHDWezRNaUJmijt3zBZoQo15tjaMeAmsMFYMZNPiXs9hNR3Bqw3fHBN7n3bCpVWc4xoSbyoDGpASRQdX",
  "key30": "46TzZpH5c5A3zXozkpTDr62ArUmtxdga7eENAdHQrbTnf1GMDpVWAPTy7caJHf4qbTvNsw23zaAVLCQsyUS4YLrv",
  "key31": "5DQ7GqxWruL2hKeqqwdjvQH7uUeBjhE14mK8xDuL7zBcMYH79yD1HU68sLRwaEVCPvzCFxT5AriJw2AbsNMJa6rh",
  "key32": "2VFgEBZ1v3c3f7R2yLXr2AWtGbALoGvwMpyZQVxKq1Do32ZJBT2qH3HuXVLXQs6eLGcYh1TEjXAn8ETpYV1Bf4p4",
  "key33": "2kyu2pnYPAQpFHwrZJJLhyfpVZEa2UQtHHgvJjtcQrCGajYoG42dcqNMi7gA5TrHNLr18MARadCj4zn32tECcQoB",
  "key34": "5f695FjNTwLKAUPcW1ke9wYdTeDR6WuFpDCwLzNcF2KcKQtUu3Fi3d1g8FZHXPoW4nx95APCM5jGLFXn9ofTmHVe",
  "key35": "yUWGqEJ7ifwPtd7rNvhRwjGDifcz7yaDFt2jfgPJYv8QJyPALr3eyA8SEcmiTsa5HhC57rhMQj2hWPTVDDc79Xj",
  "key36": "5PSakvPw6F6Dm9jaPB23PCznVHoLPrQ6LWbdZiYSKN4Zx6M8XJ55ZQn5xRU9xwp2AFxEGyq8BZfQGfen51EF4o8j",
  "key37": "5G59KXVwYkMtMSaNNQeGXgXiLqn2yDXz9uHN6mZi2XKXA2cLxg9JvzMwEimgSk9LU5sS1PwaYWH7d8c9zGo31exs",
  "key38": "3GEpqr2wXwf2wXX8t8GL1exLnZaqZyGHLNPwAi4L9CHqaaBb9i7UrRqyD4tSBCCnUWFURzdBGWrwGZxNhVVLEtgS",
  "key39": "4yRRWxsZsMpimGnNMEa8H6D9r3FmyRkwHPvnaZSNQEmEspFEqiXY4mbRLhhjcYdRtu2K9cG61oFB47MC6rvim7jX",
  "key40": "2HFJJ5VRHWLxvfAybiAeiv3PT7eeXpfHoMh6vVKkJAbW6ufcgLHe5kdKzfro56txHUyLiecTREvkVcPFap8kfop7",
  "key41": "2YVu2ok5dPxsfDRa3BP4io5czyDvrrhYcv1R8BpCCNP1fUZpHMokUL4tNbkuVroz1mbuqnzQgD2nKWoDhdAwvuxT",
  "key42": "61FfQHCqbSJx7ZbyMp2Xw6Lh51boTe6SPqzCJfV6FLiQL6p7n7Nm2ZtPHHUeUF6mgpzVySBZFmWyLBuohGuCygEd",
  "key43": "3BFY8Jnovb7dHAcqmm3P77uYgFFCWdpogEytY26K2zCDkL6A5fC8nt7B3mruvwcHzfudVVDbwPj5ubWVg7GmCxu8",
  "key44": "4WKRwt743Bi6U3BaXQ3AvsGRK9R4tjypDytyhRNuh7bvsU3tAKNmns8zCG8Y5Fi1EYLx9fRAhpoxgNmQJs59hqgk",
  "key45": "VQwqzuzbfd3JqFQDiji84tZPLkmcZoYbBJ3sk3aU1wLghX7b2WfULguArXMu8jv8QZMmqPdTX1UMi7LUoZgDbUX",
  "key46": "2b8XU6YP2oif2B6QPZXgC7GAHiESyPbYM1hGyLRFbntaPT5ir5NZrEdaRYuFnYgjxrxyvx1yooYuDcZFtfV7HGEM",
  "key47": "2kCsDKf7kqm1VqnJrGZ8473uyDGgVc7yWLco7qpBXS1pZpCYayb3No7DGmn3P6qEc3pSFfvBfTcV3j7qEjJNzDrf",
  "key48": "3yr4PL3vjEMxDs7Vr54uXuiJWwTdTAyFzL5Ri8dD43rbAVrSKHGo81zrUKVQcigRAZ2tWfCZhVMfPSMkG9C2CZfg"
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
