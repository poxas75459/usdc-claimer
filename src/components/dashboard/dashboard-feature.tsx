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
    "4ZpZ4FGRdkrY5PGguxYJzWyc3iwCzCmqJL67vAC7j1FBKX26exzbLf3jrTqZrUh345Jua8fveSv3dYu12YGwRcW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JG4idfrJneWUvJXyhePxp9qCSdjHMpQmzyuGo5SyYcADBxB75MV8MXqPU1fqA6zcFXzK2BUb8QaNjimrtAkSYJN",
  "key1": "4Qh6SJBQsUeqS6THFDieqNxNzqCBbyXL367ggBj61E9XPrJtB9VNzoo7RzVXCvgh1aFtcUp59eg2dHYgUch5VZQi",
  "key2": "3RKmKotXsHeEEVDAsr6ui4ggPyTmRuhGGMymH65B8afSYks5o6RviSwrhqjFQ7fEVRT9fkoaZzwrZcAfokUDDQK8",
  "key3": "5pmj9Kv6jMd7HMcULPZJtwMjNyUUk8zLQ2QAiVknhqq3ydmGYWUwjtxzapmCe2rtSqq8mjPZCxzWdV3jy8mVhyqS",
  "key4": "3z2niXXooNdBHAq48byJQLB5xA4qcYgh8Jq5K3RcQ14gPrACrnUgSr9g3ecTNYqDERMxSGjDuBYXghVDC6WBpYz8",
  "key5": "5XtAZ1mF9skA37CzdPfDrAMvNYvAFdpgMWp7TERBfWX8jApoW4fdpauYNrtGcUwwtjnC3SyUFtLXWkLwHbJ27Fdw",
  "key6": "2514stZaeust1PVJR5w8Aiik2FpeyJb8pPQKrfTKBzSN8YaBcmMK8aFKQgeE8EQYDj83emgcMnUSLW7CouHKAU7N",
  "key7": "BcDgDJBQwRmLAdUXNH6YenpVRj6CGBqfuMMAXWhnzva1jPp4sBGvifJbqeDe6Fgb7UrTZMFmwq94jSXNT53GU9j",
  "key8": "6p8zBQuxwjQX5TStrrmDBHiPxzsjgvWMANhW17TFjzFToehmBqF2XZDYgJX2oJguWPyjGiuz7SUmVR7BMGDiUFB",
  "key9": "4YqtkQWLUEKR5pTLz6BWWmQ3hLPicNmstDLDUbJNc4wdx6HxNqGbnr3iRwQbMYAwBmwzaLwmwJr2Vobkogjk6fuH",
  "key10": "58FvwJUkMfdXtzhzhX24EuZ2faVNvHnMeYF8tyrovPHpTw3U2riDyXbWsiS3CeUvbdTiag2nzmCD4Q72kswJhDQs",
  "key11": "yCr5vgGxAqwQGAR6zwjGjbqbpJTyttX1SADqgMvNSPc7PVu9YodRzYrYJGLUKuHuQPdXbJWZrRTaS2vXFfehyqX",
  "key12": "NkQof1vrJ1jUWMWmruWsVQUYtQNB7nsQgc8gC7Y7xg2vj3oSSn7nytNAYCCftpjdyZWxciVAvhA6c7UbZ5AqkSE",
  "key13": "5tmMXbmLhjzotcS2YcRbGx2JnnBeM1ryUgX5yPcedurQZcS2d1tcK7JraLknU7syvriaoR3DLYuL2bRXcMqHMMvV",
  "key14": "229QQKXtCNo28RaYUcoiHKCvLi5uyzzMrFWEbgHw12Nb6YSrvZjH7KQrwfPgn6EEa5iRAmX8EyzfBdZTuUxYPoP3",
  "key15": "4RcdmL3tMsXT7DR6KTdgKRo7rVekgHQrC67VkxmewEVtoBPo3jnSTwKLePbUVMWD69MZUTMao1WKhPgsgdJKXc3A",
  "key16": "3oXJZu4Uzk4jUniNdNbsm1nSkzq4ptse13sfwRCtrFWG2m6UtUaJxdB3Ch3ZD3SbDpSBYsEq2pmT2AHFnCNWfQHc",
  "key17": "2EKxMpph2XcECJ3YehJWhqXohNBsDA1ZZjUXEAhxNKW9SkoUcPHCYQXmC5VJhj6uPiCcXNnWDSdXY1D251X4US6z",
  "key18": "2oxirTZeNZ9VJjNsejCrQX42vPnkTc6Wbejq6TBjvLmkrQi3hvdQA5GZdogdktihBfZZcGJtuLTncaki7k3u9Lh2",
  "key19": "5AqjgUGRmCvohJx4am9ZmtTAwKvCeeCzVauzhvdbBQvebMKx9B9Rg9aPKfmjeA2taLUrnUwEJpxtvKgESvE1ZaMK",
  "key20": "2NLruhv1AjR9oAPVuJhdzXc2QsLWUVfmTRhAfKxCeAcjr3QrjvggjbPP2MkxfM64vbZE58h76yqp5az1DJJtJBCN",
  "key21": "53uzddHzNaJBChSJ2vU4HcM9owNMhkU8Nbuf1zshqjiLPKTrfBCwWS5d35K4aXLoFL8ZdrkvadsmdyPoPcxy35H4",
  "key22": "2FqGVNAs37724NPjcq1YC7P1EBomHu2TD42q1rx8LfX7TP2fxpe2Cq9pz11D3eLz274uGWXzYWGUp7X9zkzX5L5D",
  "key23": "4NUN9zUHRcW5eNaqZM9YtwD7UyUer23RfAvoLnp2rXMYN81c3xjGKbD2eo3QaVxJLGNz1FhHmHwvTTHipgngnbcA",
  "key24": "3hVrEksYzgN3fGgrRzSsW5yW1A5Fjouo7Zv1grwmcdhXQhr9MkEN2coShpaAFWUXmYSEjDQizbsqveaAQepCoJ6F",
  "key25": "27LZNRHTRoqMdJX2mHyfUiKrhcBHdC4fVc4q2ELZgfvQutB4F2cawNuS8AP1R4YpYdM9H5FaV2L5tx4NYPtg3kQw",
  "key26": "34p4GSC3fmCacRFaco2RMYZ3VqYWeSNUkaLY6jffDwyWfV7Fd2PBNoLuBo6Jgdo4ZA6bCq1iDbTKqmWpKbDtdwXy",
  "key27": "4Wt7p8DTwXa26YL2q1LKU8QHiqM47oJbY1pXGhWZrbeTVo9Ab9FU4qrjvXPhLcdWGCzrACRYvckDLEATpWLf4V1W",
  "key28": "2Uj5byW2A4w4gDdaHJN79M485wMrE8raJxTAfG6PnAMdT9Y7tnuKgADN9Y6Yqo2CW68RwazkHKGDKZ48KYvwjWWh",
  "key29": "G6xSSeZv9fBRtoegXbeqMq82qPDoqYHGVTF7whzgrzxYLwe1xhaE5DE4ubz9y8QSNZueXqWdBWqn4E6oi8hgfoq",
  "key30": "rPEtqSodRSPKnu1pxDb6Mn2JtcdfFaSNhVXp7JrJUYYZpwqmKVSNjAw27s7CmMA9eUyiNQNYcQizY51Y1Qe6aU5",
  "key31": "1R7tj1UECttUio9Rr8ajCGHWaFcbyTyvsdecGm8EpLd21nFFrEvwY2RjtGWitLgTWLzLG6w6kVBLMuG786fxmpS",
  "key32": "5imsG1SZfiahKwiuBLyRgbkZu8ESmuvXxu29LB2bXVeB2LvMgafeCdvWXcDCHqidxY5vNFwcL2hFDryr4jjxGnDZ",
  "key33": "31QcgszStfEDMP5J8fUMLProRMktedxzXVdGxHYH6WwbL5DG9wKfsbw4TuwzgQXM1yrjKiR5zwtsgnBc5zeUvxzC",
  "key34": "5v6XWtbz1kpUreioaeM7R3R45eRW1g3dqKygz2EsVGqcf8kPaXWhQyg49pxQE758suJPyiKp7J1nnYBtF9oAoKvj",
  "key35": "37wMUYAbGBt1384SzCTB6Gu9sCfCrZ2R3gXKovqioEkRn8UqkobFoRTKKiGUPcqrUTo9zvyErHRJnjBLT8KVdvXE",
  "key36": "5Pt97PTuBZwhZvBDbwQELGjMEaXVk7MmNnWPE1UhMJ6fojCdqmgSAePdVzrn2grGLLm4mCHYEoe7Ph7Bdaqkfn7w",
  "key37": "5i57dJ1PpSdF92jZpHxsLs6w4QURwdEhjCe8ovutuWEQnpTfLju5dpUQ7YTqrUiamSw3KhKvSCVLHN5vG4B9MkkA",
  "key38": "nPfuYj9ckNDEoZdtXnLhgqjyTkFoFb8KqRv3vxbe7kjZVXoEK4hSLYF3hiQNK1AC3M3hMxyEhC6uVedXk6RTuDf",
  "key39": "2dfCfrerKvb42E1RtqxJCxToXiq3xYZXzQhohNGQzgur435tMTY3ZjTuHh4e3zGfcAszZT8AcjuVqL81dFGuhLJH",
  "key40": "3yF19NMyZJcnyCn1UJM9kgDydFp44JhcngjZwqMKB2aRd3TUp28n7xeoLTUdKdMKissxiV2Qtt8L5SBUeUcbgAyU",
  "key41": "5HpDCh8HDxyuovSVPeeeXdfhTMou94s9ftxGJiU585CA5mwBaKKTXY9GMRRynogXtR2zTK23WkG7BPAj8rz2eAhV"
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
