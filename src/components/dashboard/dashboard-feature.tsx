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
    "4WmahGqn5WTzHj9Ds9yHyMkN6QDgNCb15GLe1LWNG5PYc7AH6LC57xfJDPcawxs8MK8wohES1NXye9iRobG92pS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "STap87mh6T4smcFHDoY2VtDi5sCQNpPJof3aTJrDejBDg7j41ZYWtn7Lkn2E7KvWN39iasN8uzaaFiuTuGJEqNo",
  "key1": "27nuKxefwShUm6da3HTNkTPeGV1xPnwWdEoUnq1iVCJiA1q9x4AAuX2GDyodAEQr9NLXzTGR4zRJwFT5U58ssxyD",
  "key2": "3mc8W8K1xQ1PsiJryH9fW6hGPDNymqQb5UACvYRUCmqa1YcP6CTg5rfC467Gf3kNxbZseQHdLaRSSAK792XhpN6V",
  "key3": "4mbzeQmbWMU4un9VSa9KZCKdKxNGQVdCAhtywshir9NzXsBY4poycys4C7wrQQhv3dkm2sMdeyHyw2BzH45Qny7w",
  "key4": "49vou4N4EiLy8TWVdCNRD4mc4XxyTmXiHd3dWPUSU22NjsRWU1ZqdNqjn7bZNhvqGJcDUouapaBiB5KgLCncpERT",
  "key5": "4DVxbLBuEHhAbexPeLpppw9or7oPzJ2MBAaGN3yej33wD6PziD9BbHUpNoU1mPw2q13edsheToQF3AQBP4SGJqjK",
  "key6": "21ezZoRhqdJJmreYStAb67TW7iHVCf9L7mwqvfx9sarzv3z6PNyF18PtoW6bmFvRPhhDCWJhUvce7TyA7QgV51za",
  "key7": "5iDSoBDJpTU2J6QXsR3d5ZpCvYtht2qjwZao7ut6F5uYrwAP51gjk54Bbvg9mqFf5R2Sx5eadcEiodLpwdjAyT4e",
  "key8": "27AvPZ6x6MvTZrYPGroFgEfGrPyBA753Eg2rdmBTfBJCaLsTgs5XFNNnUimCQsatkM8FxJx7VgSFQn1q7BpqVHR9",
  "key9": "2zP4wdyfocG3oVm12YLcL2sWqvUi6P9AmPPGPgD17Mnq6qVMuZ9YmFtyatUkzUbPeAgwh2WkmCdfhc6ufeoNXLrU",
  "key10": "2iyfS9sRoeZpnUYZtUaxrKuRwnUzAjS8LtvWio1UTrx6XBSVh2bpv9ihFmdvjDVZ8FKvoDStcwzWuBqsDDKerHVd",
  "key11": "gL1vaH3TdgMDZKFcuKRo3BbhovuCNNpj9LGzoRnjc48oyPj8XzpU6Y2Ap8DmorsDs1vEmZiZ8yewwWMCXNzjhQE",
  "key12": "zwFodMohivtGN3b3jcBt2ELU8neRaX7vKFzkxr2ZrcXRpRi5mVcgDpAvvym23nBusX9aSP1d5dtqhwfjrPVC3RX",
  "key13": "2sNwCKg3ZQGBphMq1oaYToxKLB9NDMii2aZC1adUatbKYKzNhZjQZCVzNf4CrrvRzsZNBzxAFHXrLejd4zsDTcKv",
  "key14": "h9iPUwNzu7ZxrFTsYW37GxHinnjf7invdhvdLCuhBLRrrERVhooGLrfEQkczHhp5MUkMSJRLjJLFXuf2A75425Z",
  "key15": "233Ag5WkEE2bpz8BjWTGEjUCTFLCR111ksNC5LCfaUCmeDApDMKaiamLPhQvZjKXvm4SoSCKUEm92rF6MoGK9nfk",
  "key16": "5Wv8GZ4QnpGmyNFXmfApjR2yZNm1U9fkAJCzjo1XfGpF7wHDddt4pHzyGKTapWXLNFnVSFEkTBvf6qFceHy5fTw2",
  "key17": "G5TBdKWdHYLkBuQhBScfL2J8ZzJ3cM1vyxXjtN5sgSqPgCJbrfmhQecjrSsDVZ6gbxbsK52r1C5L7UTLdS85D8q",
  "key18": "3VYPx2qYDHNfdDGodax7FWTA6CfpfNUg44TCdWks6mKJVQohdygwbP74t4y7HR8LihNoULaJeKzD5D52LV8DJd6e",
  "key19": "5psWFzqmCUBzAYbQmDpYTc5H2rjWS337kgrCd3gNa6aqZguZGtbhve3vpuE4z2zsZ56gSGPQn6g24zYtC3PrdqaR",
  "key20": "3SkWWFwTrxhhptchYS5HoEdvYs4z6NYwjNWusbNmPZWrWdKNuaVwmyLsqk4YuMxJfgQ72ioWbuQwnhmvU7aVh8tx",
  "key21": "65kuEfh4cFTbSzM96X54XBEJrmVZN4fayxw6gLv4yzPUGiznRCqhmmfqkjVLgxtNarku1VPL9peGdCGaL43tGyZH",
  "key22": "48kTBqoqxMJhrJQgtbUY5FtojKv1tk2ynnNWkn68g9AawrN25uTffeLsG9oJzesSp6CsCB8H5H55E3qeqD7cexbg",
  "key23": "4GtFnJrrdDWGGETqjWZGKnGBCmy4pyZ2tSV1fbzcUAmoCaLcGxU3dFE4rqLRbRLdaK6KYf1UsjsLyYWgv8YK8puC",
  "key24": "58HrcWDjaKhesg6ctdU5Et9s1zpLzfWPDxHmvNezRCRTQiaKUj8T2WbosUvLBYszvt5RU3jR92SE7YDjgeyWRJht",
  "key25": "5LvFfGRsVbfQCUMMFtcpQeUK5LHnp5gVkjM1Ej9a364ZUPZvq5qisV2QuPhhKXTp2wJBeTvPjKEerJwBhbgFNRfC",
  "key26": "4AVCVCmEB3q3uX28kapK8G2MLDqtp2YJjfvtQca2RskvMJz3GN122jPPwdxgsa9K85AkUwHcs3pSR42bi3GNRHxL",
  "key27": "5nP3SULJBBUnV9MtxNA31c33GYvEBGuZpQUdFFrgoQ3B5RaHGiBkHPSoA1GP9Bo8FLBaUgxLEijqyha9Ep2f6ARG",
  "key28": "2uUPSk64G1bocXST9Snuegnug5MmQBYEuierqas14SkvFKn3AWobecP8MypoYyJKi72pbGkHgRhjnrFJVDbN5i8w",
  "key29": "j3MPUnRd5XEgRpcdrep87oDnjWi6Y6WgWQCv6V3neYPW8veVxCfTtFGkY57fFjmAkfgM83bnhdBSrhjaqH6u3B2",
  "key30": "ywCk99vJ6DuiNm4wPak4RA5bGbeneYoogQjKFxQawqf3wW7FjKd6mC4ESTBroarjwJk1A6UJ6oVD6qFcmmscivV",
  "key31": "2KEGubFpFF2WNRGi6ZA2ZsKkvS3bA5o9WJbE58E1qCY9KZK4aiJjKFCuFcnpLZFqznVWWDNuhftmyBuEEpRCfZbP",
  "key32": "5WYL543iYDH9WTKvD7bxJKDr3EdLSX7saxDm1RhkyemFzPPCRvjp9Zg6mumUKcByUAzEp59RoPfzq6Yfb8f1Svqi",
  "key33": "5pmsN5LLvAJcnf5cHnxG96U9VbsDtfSc9KLjzWCKU6T2PZyhKJnmn23uvuE4uwRsXLfLwbc1KDBXz5vXQySM8bcJ",
  "key34": "5GgFcFuJWsZEPnbrtcpa1BRV133Xtw4mM5jSZYgkJ83CGHXRbdchisgheQBrRoPaaniXKYNTKrX7cD9kc4twQJAk",
  "key35": "4jJpt7Xj3HwPSwzqqtZKHLR7rt4jLstHtQjCGw7313zwdXmBadTu24wsVCuhWyKRjhBKWS9nyQmjhLcyws7YMxFY"
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
