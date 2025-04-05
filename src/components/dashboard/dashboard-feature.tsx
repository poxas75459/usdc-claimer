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
    "3aK7GA3BHcYFrgKC3xbTMCsCgrNgUhs3zewJXjVkpm4wqhWnShnhqcG3i1a9E9s5qVTKBNYXmDnZeXDrxrCzd2Sc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iNvxAnpXxZcof2MwSQK1399NwVTAx3awa4bVzMgM8EmZ24agu2iKweKFJdhRbz5z8ci8TwLfaJPzo79zbzikVhy",
  "key1": "4zEfWz4hhjJ2MJ8XguvTvVLbMEsVoRtRbAMCsu8p4CKoXTYetnqgrwcut9PqKu3tN3FvGu2dU45YfZe3H7St5bB5",
  "key2": "3zJLLKKwRkgSXLL6B42grppTHS7zTUMcpUPnJYgNqFtUFgD2TxR9q7z3EWdu7RxNYWyjD4bigQsimCZyEVDhhTUr",
  "key3": "3kAkd7A2K3C4nDtVWC4tk9L6PH3UdnGEZgMNLGurFKYhrF5gyyV2WTeJmwb9cNuaVpJNqVDqMDboWNuJLgWkNqp5",
  "key4": "TBDqrD41f828JfUatb2rmBiQwefLBYVTsxhceAu4ReFdSFBnsjd7xv71zSxwL1x7w8eweQvQ6zYaMmN35g2fQXH",
  "key5": "WtzwAVigvNVovHUByHNeVXQmHihCRevUf5kA2ySHLXLPW8eKLVVpRYEAUQeSSDYPHgysuuaCNGNJuQZYLdAwkyf",
  "key6": "3pfsfsxvGgCpySYqnQBFsw18DKnuY2jgBXPqE26pHpzVaAtRW6B7AWW6LvwHhRxKoxQLatsiQFiatSD4zBLgCtco",
  "key7": "4DqTdq9DoiL6e8gH7cRdAfbp92UsoF9NiGGm3afQoHgB2Ym3i5z9piJtaQQb1oPv3TnSsmowntGxXT222ewb7L2u",
  "key8": "37o6kQ8RVu8eTBYAuKfy3kottT7X33pkSb8USCMzN6E86NjVupvzvZPBPumt5Y7Xoybwua3aGWemnGkg5pGAXkno",
  "key9": "3mkDYS9DKC1S7ZgbrSdD1tBoxScNu9tqxV8Lig4LCjJsdi3mV2XmDWFrsNXs153ggbDmJvJU5VCJsQ3UeBzkd8pz",
  "key10": "3oBRRN72xRdUmfStQ9XKJHLXY81yr1EN3BXFCbpyPbZCtYabojYwbuELv8kcEHoBoGLGCTzqUNxDNR5yQsaVh2w2",
  "key11": "2HzW34RTMKB7pHHJRbEBE7Vgx63fXjhV6SvbuVkJgALPMfM1Ut4V5LraFJcZtbsPtSPXyH4jCRDUNQSFZpZxHQyv",
  "key12": "jN9FJwFqFwjKYq8k34ZL6JVNzZBDF4sioigyFyGm8XyvqnDDwtNjxVd6Ai9HVvr5vpsmJG8zLepCZzWd1ZhUSSB",
  "key13": "5XVVuozAKNGeDnqsfGKWrm1Tt1uA35nEHwN7hyw8YMW5QW7ZhmXznH6AWfaVijaGc3goVwdLYBEibV4RveFMHME4",
  "key14": "3Vrzb9YmLdtJeFzyxCFs5yZUzYwMtWKi2iLVTgEQDDS4KZ751cFSmDX44PasKDZv17kSfp8e3k9Lb5Ku9pPfX3EG",
  "key15": "3VPvCsUrxVtwgjUCMKca5fDGnqbduhcMe7FTdnNy7tvyRynsDuW7ZSdf13VxXaa24htjkoWXBvwpHcvHatozbQdU",
  "key16": "65necd4mk6HJviDEBk7b4ZCfGz89yK7ryakeBi2rAXPcjpfVsUKuZz9buNk2vn8Zmz2kvt1fBiJXk34crqs8YHTm",
  "key17": "2mqj7rAi6SXguAdaViFmoCQ8W6JNTM7ocVoGMC5GWxMSLahVmSYjkf9HRYh49jDzsfbiqUGQnT4uD9VHsTeZDSwQ",
  "key18": "2KMakpKkWwxQqAQtTo2ZHjxYAf6d8EcvUGr5knty5N4Av8ZCzgrD6QUYow3VQmyfDM47jcUTzxJSzvoeg14SRqUU",
  "key19": "4a34KGBPuX2Na85E6k3wJfewt2YGdjGUbSiykX1FDXq2HXA4K6C3TkCUGRekDnaFDprsiyWSbnzFZkXxAjQTC9as",
  "key20": "5ytHY7uwKwco3sMwhGht8kEvQn5wjxPTEniwzbayvqqFgDJhCiFTLaWZPmhEmNxQdAAi8L95Lz6qAicGDbf5L7bc",
  "key21": "22vJqjJPN9ZA6AZf8ydDXBsAW2B5SQG9zSZ3uDKCsTBQ3EdijRd1bPjJt1AoitWstkeGq1RHdrou8m9ENBxBjkmK",
  "key22": "4BMRuQAWjtTDaBwX5o29oSHmvwbreBpHuo4cvEsSJ17UibpV1SXYuE6UyVFy1SvQ2RgU9LzKUyx3uurJucHzYhRz",
  "key23": "32fisvUCRS4BHFxqoNLyGc8NhfTDsPhsb8oe8x4WFKdsN3QesEPp3P6i5GTNiCjx8vtWrFWUxZU97iLaftsozG8j",
  "key24": "4nLjPZMdoW2WoGzasbg5e8cB3ogQZyJgCJ8viNcwu5JbrZ8cR33FoDHtztGxY9ASnQFSeTN5q51TDWcmTuyC5im7",
  "key25": "5iZQJpeW62yNawVUdYVyckuAYcjvNi4Sjq3idErV9gwhdTb7i9Ztq8bT7JXJdL9UNm9nmffA2iVEP5efogLLZc3v",
  "key26": "5MwRVR9NGk1PwXQwqJGK6sw6ZgjeKu7DpbGzky6DWZX9AriHWA6uuPph5L6yas6sXCNk94K4hJcVCrTNp4Q96izx",
  "key27": "3Wr3VeJ7wn3GBsZjQWjuTuTt2FZUQkMVbw36PFHWLw5JqKVsYA7tDpWQ7o8W9RDqnWtWwH9ZtYgCdux7ZnyDvSje",
  "key28": "5Yv77uW4wFQsyLsGsvtnedPrFN7ofbcjPDq4kHZKZvM8YtUyKJLikSQ7p447QMhZ3EUcMEmpsdqNhWUrNsYv36Z1",
  "key29": "AnAfDD8QucAAwChnWc1hcoGagwQKFkqszfUAuAYqbcFB2NHWBCzCK7X9eTFmiXXoSw1VimXJpR6WrZWP6cbaDY1",
  "key30": "2AvRiK4SuvFYLce3d9dkt382jd9TXno1kehT9uBXizTq8aq1GGJnqhJHTqZAazuep1D3zySSQNcT98o9ZLLr2hv7",
  "key31": "31QHPKiM5vNPptoVKe3s1DihToprooFbypAiMSXzLbZ9sRu9mCuyUQ7mEaF2gPoupAq5gLmqqhnGsCF5oHEfndd3",
  "key32": "5FoeytixzDi399Q97p6a3Yu5uJJnwS3XX6qzGwVDj52oxfdHyT1HPucgB3CRHAZbKyE3xa26h7YNBkePcW9PtjaL",
  "key33": "ysg6F8cPzHLHJsjkyWAqKexGmr5BBJEuAoevePdsG43MDZ1B7NDvFmAWRDtfoxMJNbHtUyr7gfZGyjTTftkpb6Y",
  "key34": "2vjTZYmXJdvmhVoVvnJpngkLGzG5VFAKVapkoNKApYgqgZVrQUnercAH6whzRN4TJmp3oPgFTw5hFRZsDhmygrnD",
  "key35": "44XLPp6jeGmJUSuYkc15FQ8jFHvmrVxvXEWSEVeSybNFYKCKUBQGsfpgWJamN74ARtmxeMsNnj2WRCKF7iqB14HG",
  "key36": "5tkobm8EvHfobsPrYcQ9aUBaA66cW322wEqQoVBx8mjXaPSCJbAmKfyd8ACvNcWHmkvn1rKWTUQaz3cC8ySjC9iG",
  "key37": "2EziDWry6xZG8cHyg4PJwuA7pjSZs535SP6joUBjYFGfFRNNRbSQHw4FPG9cKLjdD17atSMpCNBRm8He8Nspf6mx",
  "key38": "43LBC6pRRC215HhLnnG95WfR5EQoe7F2pNZvGvdAc4JEeQYeu6aZ1BBwADS1HkPKrBkZkkGjarguvPsjMym8gfG9",
  "key39": "UT4ZKz747w5EmVcxVRqAJWbbhhGQA8wjVg4oEJirubptZFLWtcTRYSn1ZYzMYndtuzeTRj7aoF3YtJKmuUDqyyr",
  "key40": "JhVNVtd4uBRw8L7Q5N22QwmxwtKArErXz24ycgFdK7LXV26ZPRrU8XGytYwp5QAHL8geXfz3EHp3sPty353DviA",
  "key41": "5oYGdQexSMcm3B4VnwW4F2YZt2yRoqY8r489SrpDj7jGYc4KnPovvaMbK2y9d8EfVcLQDYnZnRyHRWBx4ynoqMS6",
  "key42": "VjMqcLrwdwJcd91cQ7JyUTCTD2aeHfd8tz4xVn9qwRzGLQdYZchonzmHU3iaa5b2YeNbP18iBxpRJqqppwLSX2n",
  "key43": "RxyRq5h7tavjYAvAh6RYJY4BKjJfvx6pV3MgeJnDd5Aj5hfRp5BysssBUP92SAuuGXBReEkhUJsZ1bvxxsrUtnB",
  "key44": "J2vXoR3y4MiQANCBceDB85SfMFzRcrGveSXReWwqdaWxkji7bVkAKR5ozviUz9Y1gdxYyfTgHSN7R5cPtMKaBq6",
  "key45": "62bf6MFoVcp9VL1YPpjD6GhfhhbLCEbd1Nws3hs6sBNdYrRkPmG6NtALqw8frVmVqXm8MZxg6aC1MdaMK1GiFgg4",
  "key46": "2FZkcQ1vQvwy3GZNrczKnkHNoZq69nKF1sbbeXKRxSMVmiTcDYMsJgQw96G5tzuTcJ3r6xWvAgzV5k3oqCeq7eFX",
  "key47": "3ehYAdKgHm3aMRxnQdzWrnA6832SanHrEgHeZPgSwVHTR2niEzEYgvAubVmXMeQeHAsFjPVbdBnyiFpFroMLcDcC"
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
