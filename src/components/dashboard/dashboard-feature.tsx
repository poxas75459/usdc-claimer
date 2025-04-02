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
    "2zV4tM8Ugt5wF6vs9MZoqGiSYg43mwBgVt8n9iGvzfd9Uh8NHeWvxjwDpPbPvC62gAJMSBhzx159t6MGLcvUspT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65VQcU91ZbNcWMUqVqC9xbpMpLZQP6Zxh7miBVxLw49W7uzgytoxYhNvgZH2vMMahPLBfvMt77u4jf87uraGPWG9",
  "key1": "2u1qWz8TzMD14ntecC9AtUrstYraMDdmcUaDLfRdpKR52qXsjpApXzZ3dD1XbEYxsm7VbTsymdXByLfD9vLTVPUK",
  "key2": "CZMnJTZuHUoW4siuiUvVRBy6FbDfLB6KTsi9YYDYSZtJWFUibPUBQtuzfZzcxSoXER9NrwJnFhx92hXZDCfSfig",
  "key3": "54ftfA2RdZQSpriNYYAzt32MgKeZfQRLzEExTqLAdUeasDRhSSmN8RC842em9vrS33JGzrRqNTVSnSGhXRvqXrmF",
  "key4": "333kd7JgXrCTZLntYmPEk2xuDyYVCsZrNocxu7KVXtL42c6xmhvpkmBnEiAWDKr2S9e4ZXQZpfKFZ3Q5Th9PWDV2",
  "key5": "53cmQqHDxdmAvibzA4YqZ7nf9fiW9Cte3osdbWaBGq6tAnzqvck7eFsqoP6TAoRHmwGGZWwGQK8Sm41n1xxWLKc1",
  "key6": "3XW2TXHFhufJeL8D8BvWzh11wBCPShzdnVXc6ERr1FbDKNHA5eQMt15awcrtC2B7pcpWcT2Q3bBdW12anhxwacLn",
  "key7": "3Y7LzfTuh9Pn7pztnPPccZyvro3c3mhXPngbaRGmgEjjJcqon1XpjSYAxx9bQvhnPGF1dLrYSGr59nq5uhFu4iw8",
  "key8": "25AvkZPB9uBUuv4Pg9yPBwV2xQCtsowLXtaZRVmjReKXddQ1LW2LKGUfHA7iwhUJeUQfX16Bu8GFR5vodRmj7cZD",
  "key9": "21Q9PEEvsSdsdMcMMWix1wQptXKpvtVnqpd5SLgej77XbdXXe9oMvwhoME3NddVD6hLUdXQdQFtykrT3Zv8SwYRu",
  "key10": "27erz1ojZ1MJB44xHFaUGZrHPJ25XfSVvW1pTe5m5SXd5nWx4hLAffw383XjpxUBFCEG5jZRhLbxGoaNy5tExrF7",
  "key11": "4KcDcfDU4YUyfRQCteCKYSvMb9XejtLjDPJ3y3Y6oMMDGb8N6LtiB8rzTczBC2Xe4W7Em2MEYhWQe12xhF4XihCc",
  "key12": "3i3sL9HE1caf3iszEQ8v6HjwLxT2Zc7y1onKbe7b6uof43pEprwfcuc97uQmDyGz6yW4BMYzd4fyr6h6TSZpxp9x",
  "key13": "2x88y1a81Hyema13dcAdW7biMAByEgBMD2MW2yVPDRX8jTouy2LXX3DDoz5xB3LSBVyE3EDfvZm9YUyDvYqJBvy5",
  "key14": "2mef9HWZFgaoSpGJthc5gowwAZBFhK6emVx7UKofQZeckpFre2SHpvb9tFaVHc6nAiwmgekBKaJdJeqqDxispu5L",
  "key15": "5bqK9yiD9bcwW9RoQuhrSC6QLL9BwGERMEvsxmEfzURTzKdbe9N9LTb2CiGHxNe2xEWTPmfE5ZaZiycaWvpH5nJx",
  "key16": "5YZyLh38Qd9io5Q6zgeR1KYs7E7hWNVzA2ZZ6Kx84pKgevoMEXmeF74Lkgs6Dni727NRth1XxKuv1QZHQufXn7mJ",
  "key17": "5QkuH3bZ7yurJ2u9FifVsqjczQhbuhETAb3kfzGytZatSvK5qP6nARoqeedQnyYUnKD5CB3omK7fmWnZwVpp3a25",
  "key18": "yfWhx37CbTWcQV3ZgobmHWXWoQ1fM8cG12Kzg6ECNMKzs4Js3CBpBuSz6aoNXbMCu8Jah5Qb35TZhv4935Um8L3",
  "key19": "2Ze4S4aym24L1z2HoM7nNpNg9LbmydewrUX2dm79WCkULV1ADJnTjchLqDZ8Ui8dRbqpWfLkZHeFpiP8xiwoCie2",
  "key20": "JaaoqoA2WwfpSj2JDtda6SBGC6MmGJnHRweqp57j5UASf9FsNXR3fgbKq4GfSGLrQcKXD3sPcVQQ2i8Kba32Fme",
  "key21": "2R5Sp3TsRpoFz1btafP6n4DcwzoK2pMqvqxMe6T8dLWZrYQyKGetc9A6v8XWzmwVFb5q8HuguCpbWhysxgpQzqfm",
  "key22": "31wmDLmaeDeKo2gM25xJCtrGE4xCYvN2GBce2P8g4qSk72X1qeQH23SPmFyQXobLQDf3cGUHL3YSfcHxnegJt6DF",
  "key23": "3zTF5cvS9D4wH3gjsMAq7TyoA6mWUJoacpN6Cep3kzSnQDqWS6CTUaJpBXgHWVKneMWGuoeCeksDnvYHyyAzUzhc",
  "key24": "3DtdLAm5rNvyhDwYQmoH4J9BcoUcuCXV7BxJn3mTeo5UHtH9E7mtCvcaNVJZWRGD38MiQpDHTouaCrsimfP8BDjQ",
  "key25": "2ZPpZLg27bhV4LeGpec5JfTvspR2pa2y79VZTf641qz5HMxBuB9x4k34auzqpcZTy5M6ZXDn7sX3A42PE2ZvVKKr",
  "key26": "4Qd8UWhpVRPzjpPESQ4soQu39P9VS2yveYPizvrK8LfxyxULQY5yqVBcNuuoRRVPFSi75hEpi9RwuhDRoy36sywa",
  "key27": "5h6iTjxeNb9D2gKMTofAaPctyTUT5DFpnEh49KzKYZnwnyuWX3pAvWShpNKez5tsMbUgDbvHBzKwdsU87D3L2vx8",
  "key28": "3UHLsRdAMyWQv1EsSmDSCVda5zgpnzfQo7EDt5a1dR4rBhDY4TAtwQHsudBTbiLnNq7syFnVgNu6croqpZT3UukD",
  "key29": "2fKqDA9NeWaggV8JHF9S6BNjpvernnShVdnKXC8Zq3kDYqXHbKaJVjyvPZhEs1Fjkz4cFjJMqUSCLPDaoZLY1n9b",
  "key30": "4bWxPtevbwyFTf77LBpcniLG4uHCD3zhAJqX6GYGmhCyLg3saybpaReHU14RCZMtazSkSFzGg49DsdJMS2HruBEv",
  "key31": "5FdsmJS64dd9nu9ZAuVfcqEdztbSvSsBV5szF1RoTP3DQvb1fBe97tthfUcMLwEDEgu22SStBcgMWNPymXEQsLsM",
  "key32": "3ThBj3apfWqE15KxZWS29ctc74fC9qxAsNbjpt1NP2qia5JdDm68TqFS3myaLPy12rRtwmSafPNEY6NNYfmP2oTT",
  "key33": "2EroiFQiisHm45DoxGfLxNSoKtNmssSiKCDj9jomvHtrZJWzQs6mkAHSVJBZg1aZdKgJiG9ojatFst3fdZ3ocph6",
  "key34": "2gsb8hEnS5SLBcoCGAjPHJmyEd8qEZtaHZAXU8rRg9F4kbR8LzjBE9qo1xHPLBLfYbMuAipkE2b9kbAk5rE3urrU",
  "key35": "4hz4QafeE59BBjEjpASRGzAtyZNXLhe3JCgrQ2H1rjdeg4YrQSmoeTkLvZXKEZmdEYGpMRfsQ6fgqX5hWo21VvKb",
  "key36": "4fsCKNKkWp9uiNBBwFHPnumrssRstBpxVgPW53CpFrQQERScmxdNy7dgoNrbJeYd3LfY7UZQfK5eTQSBQHWzKZPU",
  "key37": "5oXnpEyrbmMPzxxnPjRHFJs3YxzDzJni2GRaLRfZhJUHw1XbUqKZPc5JvHAzrttk3kngsSLVcwr1uYMN3nbBSN5o",
  "key38": "4bxJtS2bHEoYLbyQvLrbyFqGHB996NRzpknfwYA2Ruepc9pKGP1XHw9Ua1NLcFhQeCJ8JTCKyQaysj4pgkZkZQPU",
  "key39": "RdshXEPUNcQD6wFFae9WbGTQbGMkhPxjydaNLJx6Aj9ayfYzyBJYvqf3rCLpEgCkXk2qktjFRJWEbhBGm75Wo9t",
  "key40": "2AFzFEAFxo69m1iTDyPC4FxR96wb81HxKac7uRHMW4pWF78uoCtfAJ4pUJFUSynpzMU7SLGraLTFJsEm373sdsNc",
  "key41": "5kETf8wMZC8Jju4TNmajo5iyeoJMkuytYHiCaH5kXpPDe8p66DzT9x7WN82H3Ts5ToeQEYLBfRksayPFFwJ16BCW",
  "key42": "4CBdDM1iPZNNmF5MKvU6wx7P7PE5S1mScR83zQzwdWyXBt64GmUp4YT8TPvrradL2p8DZfNRGHcdN8KmZfhMv2dm",
  "key43": "3DxQJYckfTkAq2vN8posoea3aMSXJd8Akmj8CDf2Fp5voWBWpmSw5aApvyS3Bst6UNH2qY6mzRj5enUzK2SQvr9i",
  "key44": "5RbQstM21uJ4hXAr1RMqbNXyJUgpy7RQp7yQ5CJBMvidNo9963i2pNrPuc9vajz4qgu67iCt4qVLXwTqHoeuZK9p",
  "key45": "41p3M4xcfvTsXMnitGrUjFK4K8DALg8Lzhq1iJE2m6yv3vSaEvXPH4Syj9P3ZBudRcSEUgU79v5BapQU5thwRcch",
  "key46": "RbRtmBrmJwmEgwLZevoeCZ536f4eA14PbHUCwgAuDLjGC98taHMQ23dJPGVGZogFUDLSSo4Sj8d2ktHZ4ZrSFtY",
  "key47": "2aURop1MYH6za9g7FE9xn93EHH9VhAj1R2TkW1pJDmbwooY6AYWJWpyKiGx22WAep7iSDfnAHRUwPp6PAmwpct1z",
  "key48": "3yxNeAoH6Mop96yzuvAiaxcgJDc3JdHGLFERXzBQ3LYoj71uAUTiFvVceYXw17A4TBDDswPN4MXZt2XRxziDnvyG"
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
