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
    "kbhwTaWiEgvMQVwVeFvDVjcRo5vzivz3nLvnxJKZr61BiG9z54mrKgc3S2ppGQrYkSmey9QkLf6HWgf3ooBpNyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vFXCwXo78ZUCDZwGn6yLSBjZpzM17qFg6S8HF3gm3s13UuNo5PA515WarZLN5BkwsFqHSDvVpNse5sL9dKoinCq",
  "key1": "3TLqTvLkemK1cvVtAwxQuGr8RWJwZR5bSK5tdA8Kv3jgekVYq2J6Vbt7AT85oLKt6VDLifZCYmbXo5Z71unEHX7j",
  "key2": "5ph9fUws1ShiysJHK2mpkSFw5EgcNC5Bsx94NLVDuAp5LSn2aRwMDzdMsYcXgcSoBgiYQzWaVeNdKWSpwsnKS9kP",
  "key3": "4enzSo4XCTE4NDm7wrPjSLDoibCUE5QHnF7BMzYdtUGF8ywnxhkAooKPwXsXzRLTLuSimCpdDPpXLyj7cQW52V3i",
  "key4": "5cGp1orq3KekS4D2yQNzAHMVN3E9QbDXqbEaDzGyqx1KFXnvrKwEDPRAPquekabwXtKZypHY58JEB2nCKEotRTTG",
  "key5": "3ZhCshMpKpTNJ2m99LSibmn2zcmZd43xLvzRVMV3YKJa6BJNSi4auy8PTng4PDVBJCapbrZfsTL11dQY2pjjb847",
  "key6": "39kpowL3VKuGZar4pP7AaerYsKnGkpkhgMP68VRp35EMmH7ov7r16Y7Ki8BfUYtp4eEHRnYkUbJRpstUguiGvRss",
  "key7": "3RqYBK9rsjSyHzpXZ2DR812mmD6aBCwjDmWojHdjJdhUYqkmLBoHmHNnikjGdota3muNvVeLXo5DdP5qsEEwTtQt",
  "key8": "H5PFhQfn5db21dsLWe5aaKSkNDd5c7jQ9Yu1Rwu1VAG4Hnc2MRrcYAStWGawZVoG732QDRJU5zjD8zWTdjawKuY",
  "key9": "2b9mSfbmQHJUbxu9dbRpvwYJiV7MfeiqN1oM8NSoeNgPm8EdH4DyRy5BzVYMq3vXKnrkRssSTEMk2rwCUd64cMfN",
  "key10": "2uwR3KDGXeca2JoZqd8tCvUi6VzAjgbkARBPL2SFfAAFz8ia1YskRY8aGwoNxznxmEJkRVFGEi5EKBx3QB3tcCU1",
  "key11": "5MeJCstEMPcS4y7mRM4qKYAPjJe1nzdrAn74nLWfAKZXShP8cTPirZJSrSRs6duj9Qo1GNxQ5hqL44mTYWZoUHyk",
  "key12": "3HdR2zqHpsuf5S8bddX8XLcFajy42ubPEnWTkCWZzPph6Q4HqregNqCahWfmdP45YSKncHTkPyay6kcx45WbQu4r",
  "key13": "3VRC1pywuhQKiWsu6U8U27EAYpQYcoJSYgJFCYN9onhGhGnVogE7X1z1RTFm7zFj5wNeqH5qgjvo9vszMjQhv16q",
  "key14": "4TnTyjKuSGZbXaBagxSSnT582AQRigDe1aGsKbk3dF9YZGSw1tPbQqVjf8CUXzG1B1vg57jKRTZ5hhjmsj74egBw",
  "key15": "3QP2n1iPRkgUVy64W1hTVyqVhQfYzWmKnXwe5wsa3RthLo9jhaTaKVNmJu44NZa5DZHKjY4CTsfwdEfAKdofVyJj",
  "key16": "52fnDQRc7aKhRjBUZ5YVUJdsCLEHpjtkkxf8N3FJXSVR5Wxse9c2GxEQaXx5R1R3JapziXxL6tKNVBU9ipVxaRoW",
  "key17": "2Z6ywCsv1utJa9SmSzV75Zo8jLPg6pnS2L1BfVxJ41BZHqZr2yNm13cutECrMp1r6HFpGMHQRDmnkRBHdWhzxUHi",
  "key18": "2YcCMbaxPj9hE1krtVKmsW8Bo18K8LD6vfu5RU7wSmV5oVfY3Eb7HUQKJmVeK8bjh5c759oSW6BgC9tJoFBPWxzP",
  "key19": "3BmcawkxskAzVDSjgA3WF5J67vU3BR5FUPSLfaupWG3c5ZuzZLpvjesfZd6TUKogvsjnQexij8qbBaQFnPxvGoLd",
  "key20": "2iemSoR83BBDjLC5Ye2UbMbHbyqLmkAtDe2ETBWLggRrc8NZxEfGfRMtft72xRVoafYu7kkw9zwuXiJVkbtbcx8Y",
  "key21": "2Zvzj57RA6CNw9YTLHC43U3APNo2NpuFHMyd4dJjoausmjsB3azgd5NMAGNLAG3udPwWfMjfFTUZJessJyvrRWEB",
  "key22": "2gWZGmgcwjwZWDrWemshhHb47qh4EYiZ9he8YpxNzmw5jCHnqePHVVbRWSt7SLJHLbJqCH82kdDVrboJiZypUpUj",
  "key23": "SWEBsJ7vPka4bQiLJZgsBq5D6y1qnABkgnwo3tfY2nEdRWzoTy6iuE4JkReZ6uvDCPbXVHGV77cxWMuFXaphRTo",
  "key24": "9nkEeiBUTtwngpknaLWTAztTADNJYXpemk7ZprEshR9QfZmJ3WsUFbWvMcmx85odiqMGkEPozeB3ePUD8X6pfc2",
  "key25": "5D4Y3pJevc35fTHg8hPfUk5dx3oCEnQinePDtgziSG4LDKaSVaTsufzEQnZwG114hKSLez3X5KM4EC8ncnGpntTu",
  "key26": "Mpe1V81HhKMxkZAMvz9uNkZdP5Vk54pJqgah42HBaR7B3KMfx9FVmsLLdC3Nse7f9j1c3uS43TwFaj99S1QS2GB",
  "key27": "ix52Ld5eWNysvrYqpwCYqv85Yjq1DGswEUM9KNA2DNnWEvJPCvmYE2eomhtzGkB5qwynkYcpPMP7iVReiCKwGfU",
  "key28": "5fA6D27J8C5gmLPPGmHLq8Nk2tCrWhiH7CjgVAL5ppgxtjCTbfYNfHQJ2KpsCufoYWYq6GAYAWqFUtfaJ7uTu8ko",
  "key29": "5e3SyN6Tr17RnKmAUwnyK6C2StLMZg9TC4AFJPgGRuac5R4ZusBxkpuZTBmbFq7z9x5rtc1WGsVdTL41XQcaqA3v",
  "key30": "5u76s1N6qtqofq41yVQzx3KuxMpKtsr4BhhVTAai5sqgSnNAj4aLF39bN7eH8z96113oGXeoKzMkPgriQe8CZgNe",
  "key31": "3L3Tr2n39RtW9EwxHpnMrTQKnmpZMHGGEnnSBVdR38tgttCgzptwSyCyKH2UcWQgbtxJwXFViHG5ahjLU4MPPkLx",
  "key32": "2exAnpQ8ojoYGknsqeonwYhMi7ntsx21GFJT9vPfTsWJJAZcrMqHv4Eie437XQRexYErj3uK9dhcQ4e7B8wwFD4A",
  "key33": "66zrWyym36UUXf9GJMVEZ1u5uSQHuhDNcX4tP8x3q9EPsxvUKScjBHHv4Uro91zBXAYBHrjEgJ3MtUh3cZBRyQ52",
  "key34": "xkjFnG4PVCVFb6XUboVznUq9SGr9PLQetPDK7aWDJ8gA7ccGESnhZjyUougxcy4G5KdVuDqBQRudmbkroYVfTVw",
  "key35": "25Fe5E3frtDXuSZ4DgTEdei48ksyYNojan1Pak524oi7QViYjeBK8qN5rTj9AjCXei19PLXxE9ohfv3xkBKcMzyh",
  "key36": "2hZEincBf2vqbNQqeGYTqk791EZpVN4ZPReqUdHQeW1tmbRV4cvwbvr9b56bkkC9KXrwRonnNWdWf3znQGhp13RT",
  "key37": "2NDaMbSfiqypSQHTdLFNbk53ZTDmZ1fxUxKurW8hYF6jf3HAj6VXZek1KqHJEjxVkXiEWQSb16FZD79BKnWyYoHw",
  "key38": "4eGPB6cT497781xa5M7Aeo4puLr4m7oSLGo4KEBXXMU2GvZqAp2Lf9bJJnSXgbb3zsgcNbhCvahZwJNtvhWpd9m8",
  "key39": "4LrL6kpJDJ1mCxosTGjePWvNh7oRBzCyohS4ViRkBNmQJyp2LfVSN8gKtKhM3dqdAa4WttJpTXwdy7vCWSp3BWVi",
  "key40": "5ZfF7BSg6Ro4YMQfA5XSKsxtKGZ4hir4ZfCZWVoCAzrqpo6wGFN7RgS5Grrcbu6xJicoH27djVE9khWHvAvqEw1q",
  "key41": "fm6bu4C6GxC5DPrM8uVJPDmLMtRAkPSbaq6KfKK72xm5d1DaRzfLxZUhcwrGybK42imPVorBS4PCTsg6UdDhora",
  "key42": "2i2RUsUmZjuuCgJGfgqotxEhvRwJJ2LY3A3VhpoyuwZCS8PX51GyF5qHUH4Zf7YRdMqhCRU77SxQxCXdrUkZ5ZNw",
  "key43": "34jCMV7QSvCQRNW2HPRnAbjvPoSLJZ8K8FxGBKA9FRDwq8UoCohorAgFbAYXjhkSHpJR1WQxsWk79JWJuZHmjj5i",
  "key44": "4ZJ3ZRerNj93PfADfy35UvZXxiq8fczX7JJHK2UAPNGykxsFmqS2rbF8F5sAhSD2tpeCiYNUcEGdFtnTQgLiJJKd",
  "key45": "3MdcY7mGiNDUvjLyLSx2VHVasJWYXz3mniFQwm6Q4GRs1JiZBmFvdwEAovGiGPT3txEcQvdeqY7KJ7cKW1D6fAS4",
  "key46": "5pBY2Z8YebEoSTPNsQkWai6kh1pU6sr4FE4DeczAkUiAakj5SvmLKWuTgyA8n7RKrVBMi85K76cJFgYRjZkA2GyB"
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
