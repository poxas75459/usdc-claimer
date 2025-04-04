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
    "2jEVctm9Lau8mzag8rnLrmqBPYEdsJPekqMXji2Lfg5adQ3AykrA3xYfnqnGjEVGkjrzaj4C8A7UCwWDoVkaRqj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jGxsdiw844Zo1znTH2srNNUHJ3Dv7VxsK4rjoRUM1GYs1HaPtrWksAm8zLmPYP1f6PDcL2xDM71ARtoiuGz4ayQ",
  "key1": "2VXF1U61oBzAkdNSLgbpofMGgJpzugvK4pkkW9LpHdCcXBVNfV3WCiNRt1nuBPv8rcqNwEmy8yfeRKTW9CCrMSDk",
  "key2": "eaFRAHz27ymATBWRhg1ZgDbd5bWZYmv5sgpXX7fJUA2CHGySdGP8q96wNMoHQhEgzBx7v69qB3JavhobkvEk8hf",
  "key3": "867FpT7eFSHMHeh5FndFzmcShZS9kLtHSkCBtdJpEEWFxnn5i84YKciYNKiAX3J22VNC5SK9XK97QDQdo1yhCPg",
  "key4": "NQkfyiRiUpH9qphA7vk1CFB1cN8Nj1TWQfx48eMTXK9jhzcagywLWrsYDbYfx1e8354nkZXSYKeugvJXyyVtA2d",
  "key5": "9mVvF9DU39zktwEtVQS3acFhNfTu71LGiyfrogbx8m77Ag4e44STavZn5GQJv5Jf1zfQvB14xkt5sMpzsuhTWtP",
  "key6": "2SUyT92PjfL1mqHdAuLEMM5rsXP58YCLZC3X9DEzQkQWymDbR3WUfpGphp5gfbPs1NX9GWrGMzCMSSw8qEWasABz",
  "key7": "4fM3SkuRp2ZirfhoEnGVmqynfcdiLKLjXT8v5PTahRCMRoDoJdqaLew6qW5LK9PKwjcsmt6i4fzvYUR2CP8hYjQw",
  "key8": "5EstgYVzL112mju3w4y395cK3EJuCtVFNENivmL1ysezjneb4ci6sf7fuP9jUmr6ghpWauhsRfdBnU62sMcjfRxP",
  "key9": "2GUrhwxaTVQSpRzBBcNWMdctvqx5cPbs96QfgX26oebH5dK8B6koWVhLSRBykWMjP5SwVRvz5SV5sw8KtGZmUTyV",
  "key10": "4dmnnPTTG8ufffWq8PVwa8TmAznHL15gR5A14Xr2H3yrDwsULxnFBTiQtp7fAFWKrguEYBBDThqibiUykGeVpUZW",
  "key11": "2AV4XaGT3zgbKrxSEFkJaDcSbP4K7Gi4hbtUn7Wi4enyuJ28QZrhefQqq2EQt7HRrWfWfEXnbZuyRYz5Pcab1Uzx",
  "key12": "SruFAeQbSrCWfnEmspA5Myg9CzYYXXiRniy7nijhHHSwS1GB1mWPTXQYzNuewyBFfmWnEzPKVSrVgYBCjWfspba",
  "key13": "41PJBuopZCPeTR4Rex6bHdX4mkRvBskJ4qzoKDxXfj9K9Z1kmfwY45BC6m7hztrgLuu7nBAFPSnNVJAAtHyYsVpD",
  "key14": "4EoJ8QRHWwgqBi175Zv2Kvw1tgpXgMxDzHxQvSA8em8LfMdFYkjEexwyrPujh2q47uX8BCv2b7NvBDTNBGzL9Cmx",
  "key15": "3ugsJYsrd81nAnnFZu4M2gnHQWCNJDpdhYTzgscZRvmsvNsUMRBTYbS5fRgXEAE31uvkAF9SgDcHcXeoEtUZXfgN",
  "key16": "5EsbwQ82yohG3T6qo5nZM9Eg7GAWUNesjY9JQYNwZbnXjMntRkm4cFFYDdvAiMxKk2BWv6qS9p1u9Ey3ZJQeLSCm",
  "key17": "46dY35f2rLD4ArLdFBo5ExK9dLhwj8o2PQp1T1omx81NCjMEjQM8m6qJefTjaykjG2ZEwPQ19MegoFXVNjAkyrWs",
  "key18": "kx42T3MUZ7J3EoTcbMwssW1yQpixFTEsLAXu2ee2BjzeL4Km9e7HepRbCWzLTR2WUwmo28HiGjmg95494tSrhJM",
  "key19": "tnr5chvwbht8FbaSMbNn5Bdvx732CnBaAFsvE89pJPY3rhcQ59GtaVbkheBKy22UMZa5Le5bjed6ZksGYSAKnxK",
  "key20": "4kV8YYRJrpH1zpg17YkphWdRyJQaSyPCwA8ARY6mXbhYDgHBsAPrxyw3kEgYSCaZCkT6g7bMPqUxqGPbAnWbRi5q",
  "key21": "fNgyFeCLA7Y2BJUpKZzgWMM9vWo419PSvxta23pVAVfmzwPEx1og8HM6pAt1mYLB3bovHCQGG9CmuYxtzDqUAXT",
  "key22": "3ssTeZa29iupD2LDP7KCvGqcPyQ1yJ4tyc72ZMptQtHEAQbR2jRnQaxYSY6mwv7zMEbptXQ3f1BRYeZLnhkVfk8a",
  "key23": "x4M4J9Ajg71UHS9CVeCk7PjtwrF62uWP6i7ESdBeT71SYBU6McnGb6bQ2p8BKprwSLTDF7xtPzi4rtXzkrK2Lcc",
  "key24": "5PAndXpjcgQxUyFnFJXnBCeLz5JcdevcvLuFDmBsiUkd2dh1jGNvqQvg2qMuMDWoAFAn7nGpEVokAPajW5ZLuV7y",
  "key25": "2rRcnyXhvx2MXXUK4kAdZh1ejb1wT2MpR6obFxRh2p3foEDHod2v2x1rxjo3aP7g6btkgpM7Dp5fa6GK2gq58qPY",
  "key26": "5VjsticEDnQdfn3TPsJEeLhDiLzJzLNZvnHdZUdqGcMytRERtutBGBcK5xb14svw3ynFAo3uWFdLb9URpz3oaeXA",
  "key27": "3yJ6zEbbcfPUj3PaW78hSyMA6cxHGybns1VwBsJJFzoAZLhp2vDWEnfVbk6h1AgEP56jpUn4UgmHyz6HysDwoSsu",
  "key28": "5EvoATSKQQbyftKLfT5hdUE4EP2ETCQcKESt1v475RaeRq32xbofU2fqDCXYmoeLXF2117oVQGftTtAWbFQez8uz",
  "key29": "65SueLjYeUffBAQhpFJ6HjatJPZfLADtGPwnjeSN2aT5KtGC8Eg5M6iZwNstRk5mNHwUrV5WJR9xxv7NdNeDZhVG",
  "key30": "3r7NazB7iieiruHnr5mHKmfa7ZpwPD5WRTNBKg3oiBpqHMeE4FSKkUU97CZpGovHXBcsxPNXPQFEFhNWDhFHrEsL",
  "key31": "59DNDdYTHNdGbuenHLWmfPtVLg9bKuPJPQpkbMQaDeowWxaHy9ZmBbzwuCufpM1Mm2MMqBHnEU6oxknLJWxgPK9R",
  "key32": "ZVtUBzJ32esgNG35JTBRts3r4x3aVjRxijCvzmBfsTRngrdNPGb2uN6B6Q3WoRLnCQ2i3cCSprxHtLEbMskEWWM",
  "key33": "5at4m8GespyE3DRBLdzeZgJk3xHwCNk9sPe8au3RmuA3b6LNGjeiEdhdEAr8n7RBFn4EvwjSzqfU4i6Y9cAgNn9C",
  "key34": "MryZJ5E5s7PiceS51oqXxaHZ646uCvwafGcEkVaPYKpJjJRntVhDSAhpxUfDh3ewfd6EG8Yh2bW973mpgXsuF5e",
  "key35": "5KnkQPvz9PJ2bArr8GuywieKvu1p9TmTwjF7TGSgAKHi7WLRXDkCRMsaEdiewCiA4UHqTX7Z5PwYuoGmmECbv9Y5",
  "key36": "2JAVap49CD2VwkedCDcRyjUsj9scZnXms3BxL8r1mUDRjKBBFErifq74PorEbBdtFTNsE4YDDusArfvBn9bh6tQW",
  "key37": "VikmGiMuWH6dyknNTc6cduvxzqfj1LcJm3rhH6WPmzzCWWcyzu39GPYm2yyj9AdQJji3pZ1pKLGT9qYep46WmTw",
  "key38": "5UP2ASEApeB1imn8dj1Wg14gxADujcqSf3TzGiYXTtv1GsdbU35PcvvKhhSWJDzQ2jFQ9YsAxYtKhVNGsjJCDCxD",
  "key39": "5JnmiUnGti1crj5ahfeRbhLC2BimPng9riL1FMLbd5KjM8tNzgf174JnYE7hkQiRZpmRHAgkPipF5oBTkrpu89tr"
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
