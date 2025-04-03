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
    "sAtRrnusbikRwFP2qYErPBkGcWPBqBjwbPD6GKkm27XeXWjy59ET3RvkYN3tru4xZ2ejPWM6n2CTgEULkRkkruQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3USxNU29ZxRMUtQY93kg5CYjjZAtvdN5VWzoSZBPmLt2rsbixCamkgwJdR3Nd1fWCZWUwrkSiKcLUccfuVHxAAnp",
  "key1": "5YX255jULKk353Rxdobd42GnKLVL3ohDT9GwNepqyN38iuDUn4SNm2FAyJXNPY3DjYQg2wWA5FM15UQAM41tGcfp",
  "key2": "3D6WfSsigaD4usRc46iTsneqvbQDDzhAUpkHeJ4v5zgC816zutH7N9BHfCp72z6hWhfhmZEaMtaAHkYDXYSuAAha",
  "key3": "22ntYfyKhJzTDG1kU24JvZ3iRsRWDUqG1vpE8Vzze5aMEo5zWBfnc3j4Au2vayfY51kqiN7ahta558rnNUMLAaaQ",
  "key4": "2rrnFCLkKBXSZNxi1vG5eCTcfJXQML33Lm2RXboE2zWoqNjyoiDHtcctAL3P4kdhC2fSG4oTxSQZWP6nxUyN9h65",
  "key5": "5DTmCtAoSfA8PAuSTSH4UCdg3Q5szLorhpPeHa5yJWFYzoeTcbvjV1mhAs1RKX4PUWwMrB3GNFA7iZsQEBMChVvQ",
  "key6": "5eUUpsVvC5swrRgvSWqsMEvWk1omu68dMJjGzzCgcXP5Xx1mZ8ovrFcSn5kwRbQTgYewGL43BH6g22rPpHjqWKUp",
  "key7": "3VRvjLW1DKsvvqyp2LJ23tSFUSDWWJ2S4QYLQDS1kb8EWxeYEGYvCpvuNJdz1ZxdiBUnih2gxApHAVEeHEcZh4BD",
  "key8": "2eqPvspduw6Cki7dM7mvoqsrX63D9YfBKorm3GM5urMhe66dzAinF5sPEbTg3ePPYV1ZPyKE5rrp3rpxZC99ivLA",
  "key9": "3TU1jKzgFWu4oBjshGcaWkR34DzydPNmbXudW3cALeaikKyocjzASE3JJoKs8CRTs3YedtQvz1LwQwfoASKFQMDp",
  "key10": "4ExWrgEmUsDsuPVjenDue3SgD7saCDDHKDvX2rbRAitZVEaftimnbNqGNZ99ug5UyCcdk9Rz1bQhnQXnQ6cZkgDx",
  "key11": "2fjTveNhFjpJzCUpxAYDkapAvSgwFYiPpPNaKHAuca6xnbV7ZkbMJ78diF4EW8MLvC2npXmgaRmXvkU9bNnPBowA",
  "key12": "2gxSt7xRgLGuu61REhnJBXHJC7spTtmhC2Ku2EjjZw9FZiA98W6dNFmbpnaufsxNRVERWxefHDFvPfWCApTyxLpe",
  "key13": "4GR98uuHZf6gxeqJEuaPxV4svCPAvJEcs3dFiwfgvYe2oTFxBfqdrnP1joiNQ4uCYiEJaP6yup2KZddTiToJHvx9",
  "key14": "2K3tHwxZVPjb9PYs19zdWdkZiLYAGC4AVYxug4mDRwy7qJkJmRV3n6AjrerzeBcbpz76x6L3a1rkDR1nSte4AtJg",
  "key15": "5DESpbTfLALLwmBTa2TPuwtJQ4dJDd3TrPwrgXMWC3PisJWR179adjvGJWyiCwJvg2gR1QTVnkDDAVa9v9t8bqFk",
  "key16": "2sxEdRJDLpQDCVhSxRLq2va4ncY6GUXaNg6MQEPn8xwx3DLcHVN3KsNCEXVGJcTSixzqEP4wkuhYK328SEkmnY2J",
  "key17": "Y6DniwjarPkRQpw5TzEWyBX1YGve9QKTSmxGU5zN5nG5VYX6ByXyTZsWh18VabCmK25zSDFobNZqhbwC8yB5vtS",
  "key18": "yCdTgpVhtbvadP4Y1QGSaXtbwS7ZFQ22RvXpLnUBBNUZDXuvXukEUMiZveCrn7RqkkaFhXzyVhbm9HzbMKXWayb",
  "key19": "3cZVWT4uAjvvtxAdRQcWkDaUcFGAoYqap6trRZu3MM6izDaYKxbFSJDT8fc6Q6EXe9R9mZ1eQTdT2sg2f7zA7X6R",
  "key20": "5SQ6dDKaa3S93xiQM19hV4NyYTaMkfASK85F7RuaduNqhAfHMJ3geau3QE9Tb3mb1TW8RSUfcLppvnjjoAMkFtsY",
  "key21": "3Nm3tNe6hu3snz6kiWorkUQqGbpaxv8iDhn1QB5VnxiARNU4cTxoK5DD8GyHSYhBVwmx7p2XYiNf2gmELUSL9YLg",
  "key22": "5q4GLAoTgLoX5WkuTUquM1SyiSe1s46BjQMvDNf7oZRjDCnzmrP6ndMKWbVgev6HJmtoM37ymE4fKQ4Nm8Y2pFU5",
  "key23": "cjCaJNCGAiSdHd2JU66KWxwioF8avfwSnZCbyzJ1oCTRjKquRaEQHk9HHuQzpW8kq85gx5zJcz6c7yhiztw4UPk",
  "key24": "5F2AWM5PhRB6BxsZMnfZRnyxRvf8j9TqfSqRBMQH9HcsrV1Ma6DX91SJUZDTykDT8GrKBjYdpGpL8AHmjLr9ruoc",
  "key25": "2Ndochq2PBps5vTMFsKkjxgvRMoKwQJjEaBpaagtC9BZMHZ1hKfgxNS2bJ9onZMScN99bsSQtv6yWJBra3RFMReG",
  "key26": "42EjUBHerLps8MZUEaTCtjgFkAKaXkCwixUmQhJpJFhkxn75Fz2f6VhQ5ij11xUK1qnrfBWC52epqoVwBXFnmzqf",
  "key27": "8PHGNp5srYq3Fvk12LKbnfVqUorf1UhPRvhkCnKn4WZXjhgmqyQFUJoztCmNA5RuKvfqSvk92f6e7YGiB9vvZCq",
  "key28": "5u4ce3fzVuvgG6ecSRYcMKqYPDwUYx1g3wq3bDyYgaxZ9pdyHuGdJEPB2HDYWQXN413y1PTybUqgyPGijEstBxVo",
  "key29": "4mE8Dpukny1npaNf9j3XsnsJq8yt9RuMet89UReofarQehTnxNT3rRZGR2EN4Dj66NqsghTcA9YeevAW4fWVvnji",
  "key30": "ss316jeAsczdNGgEUTPEBeazTBFTbPqWgdQyGYz2UaBSdXAeSz19yhp1rDK2t2tsq8WcqQziPJSdzaGmzJYgVHD",
  "key31": "3aPzY4fFtqUpJW9NRyQWvHBftmCgfXJdsstkkKFERDxL7kGvLXjNKvRbrTqD7GFMe2XufDPxTT7Z2jRwuv68oXrY",
  "key32": "9NmYx6tmPXNtZhEqy93b6oSwXdcpGVkkSmwrrX5DhLa9KTrZQ5wJN1PRC72DnccNvT8XLG4Kz5y5Ydphz5icPf8",
  "key33": "2fLKEn1Fgy3TndhFTK6dm1GuPHBqieoPx1G9G7TfpGDotLXqGmKQuWiESg82wEz29XQXcMmfgsuPd4qYdSLuGF9H",
  "key34": "3bA7bPMxw8u3ddNmAdib8pdker4uEshQCYsf2Po7BGYpY6XnrT9Xo3G7HikuBUhaVf8zhVt1Leyf3ta1fXEQptwy",
  "key35": "2gN4KPRmzGkdnwwceMU2XcdmtCY66nQFFTDnXt1P3TD7WQHhm4ZDJVnLGVYgrVXmPC5DSWkzr5u4MTe8PCnoSjaG",
  "key36": "31yNu3fm4SkvnEhBzoAayqyXL9tTWoG9M4YE37Ndvxoi8i3j1zig2NAHAkVHRaPM1bnXroSuqTsoRbz1W4AbKCAg",
  "key37": "3Pe6CnwVFZqPvrhk4aZbrLezJHeGbGPSFbcb5D8do4Y6UnUQj2wRKWFutrTo5fQyo11JauKEqgyuQztw6jXwzaxu",
  "key38": "51tmBgHBUERrAJq8WEuRnmbNGjvHQsdimnzspCvbqR2oFxKC3bXUqRdq8cMTgxmyhD4zdjvmCfkhgv9WFhaCyq4y",
  "key39": "31KHiFe4ZGijSibeudwgELCYq5UqPCGoSV28DevRMvAiRCcBtv37sjWKMyLeAPVKPWkmt6MVKyahShb8eAUCgfYP",
  "key40": "5Uyuh6S1hwn5geenqWHVzVZTk7XfdA5ByAC7QeBtPNjTCqcGJDrJrpJ1ir9t9paqaBLkYiVdFAKtL1maYP51iKhy",
  "key41": "4YTU4kGzqaeLsrbypUzQnafQwq3y28oVjBWCa3eogkpoRmMHoVGHHNjWwKsGGPqeP4gSVitHYop1dwqJGGo9AhtF",
  "key42": "28PSqkEj19ZAHXqDhDEcfRnmGDgXdU5mWS1WJatqY19bcnnWMaD1hF6Jghg2igFwpD7VQPXTLx7HbZnfbfET3dfx",
  "key43": "553miYHQkL7cXkbNJtHkiiiiPKv6vV3vv3JgwrARaW5GqA4BjWsD9xSSfgzRRiQikwMNrMdoVn6naKZ16CFa4tKv",
  "key44": "4F6pgqBfa7avAfrZxHv11CKkpyCaE8kyAjMxTq7DJKegBDtp4PCoN3L7SqWKnXsEbkpAw1ZRNFQpCnwZFLB6Csxu",
  "key45": "3Y1CUbwkpGhnDdD7hrEs4ej5szfvrsUWPA1BHeNKZ5iV5MiWHSmJbYg6gjq2JscQdrAxqA99Bxe5cCHw66xzkcDk",
  "key46": "376jkGgZ5rzxiFYhV7Lj9tNVw9nAgjcwAmaRVrhQQWy1bXaw3zzXjXfr2WrqotYRfRzDathcCxMhAeeR92fhXAZE",
  "key47": "65gx4GjFWAbfPruyvSUs8i1SFGaTpGJMEYscmGgEWpofZNKYBonEhW9X2B3oEirUCpPGH6yBUNUZopxZ1G5wQ3x9",
  "key48": "3RtRy5kk1Q4t9qJn6dAKZyn2sTXUJZVBtuazoQpMfnkx62QZL24Y92by6W36o6RLsATRfgcfXUYfDgatTLQfTJ8"
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
