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
    "3U1CGt3Wqjun2ehwHA15Yn8LroHrMdNv6c2Eu7aenYTBLfkvPPxMamTdu1aJBs83F3BpCP56PgqKY78jtHEzJHJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j4GMetFqkmWpJmq6hwoezMDBugh9NVQwFuKZCrTC6j7b5SMU7E4iEtNsf7kAgfXtkvPy8ZxBjA38mrEBtCwhokB",
  "key1": "p6v83mGk3bfuAaRoeC2WJ7JEkS3bvidHKqQo1nyY8HJZXmdzYgbs3spN37x2hvf3DTKJruhmBgmFGPAoQoY3gZw",
  "key2": "53sqVnXogsexg8onkg4qhjmaZrB8jLAs6zs6esy5RDZMcJ3SdUhPsQkiToFjymaNXBLeQMHNFgZZAUj8bKKxx6KS",
  "key3": "b8wFSW52sVcVDsA1hECgEuhkQe5xgjSQzyK3b6BHD8gGq67nVZpBwuuY2B8tM1yKEkiRFusrVDofrFmu2PiJFSH",
  "key4": "5znY9D6fU3FXnD6bTJJd4a2dTaDyRe7663idzcbnWDBufqfVbFNbHAPt1iLWqV8ZVy4YPS7RbGP5EF787BBGH1TJ",
  "key5": "7avevjarQj7DRoqbbMz3nmVTNtEAc4vhCDBYd6FwUchWPSZiQHoEoynP2NRRRoLGX1yNZwAxdzWvpcEkTj5dA5j",
  "key6": "3pQdXeWCFwkQYMCtNq2uqTgMk61wbNV3yHm3Fh6XPaRsn5ncdrWGHysHaViLDKfa3LELS23P19PWSpNgtRB4vMZ9",
  "key7": "FSWuRHbzFLYhbdEs6sDHwQm41GMrFRv2vXouBkWnQe7EjV2hWNDvM7xzqXVb594zoK7VL9q2cJQCr1GLcfGoEdC",
  "key8": "49eLMQmT1AkWPzeacDMfgQgTAv824cKGx9WzC12Z43NnMFRCGnX3JUuD9QRZkeoEWyVjdKrSJbCuD74pEM8BSYv2",
  "key9": "23bYvzhiHNBVoynsUgjmyhwxbmRTaQuREWej7vqjrsPc2ZdvBSXxksckyZZm3MPXJBto2RRXQ1oQd2Lx6rYAwkWt",
  "key10": "65R1ct8WXvPEa7LZrGUdHerCtUoJ2aTEXbdFWcretWEGhThnKYVUvBccM2M2UCSrtPhZE2x6XW4aLCmvkTezqRsB",
  "key11": "5UAxgq6hv6f1iv8M3D9e7tbvsbysPpzbtqfRb14nQ7R8YG5V27RYkdmUuuqmG7qLfjfJeeFPqCVVV9tjWPmGjXyz",
  "key12": "2VfAESYCy71uZsPo3fMtLrS6i4gB1pK4zeawnimgTfuRHw3KNw7woxdHyquvuMTiWX8GMWNm4cuSeRbVtnPtudC4",
  "key13": "2kNEvBqZ7cvHDP11if8KGXdMYWJRoedLjYw1yAigqFTjpFokDhJEvJkr9dpvpfHyhrKRvYUwV3UqYmBpoZd1q8mH",
  "key14": "5znLwzBRVW6rzEHmg7Sa4KquJro67RkUQrq8ti3SX4e6RkSW8QNkUvA8wth2dJYgF97QjpgjJE43LPbSQEvwdvAV",
  "key15": "2TTUb4KHZuY59UkhwtAX8MByMvgHUEra2iMVR6QWhoHuqSR48PTRGg4jxX8Wp4RfqjMpFn2CJN6fjAHvRhaNCVh4",
  "key16": "4nWy98CAUQDMVWYo6aTwYFGN6xmofoEpzW3Ca5ctZZtgMzipB5gZF81Z9yj5SWjogcUnNq23oTQ7tkS1xMY6fRS1",
  "key17": "3dTAmUiqwyvkhURc2sBRk4cgxFWbq7ASCrLeW6rAN2h8oHcJi92MT68893zuTzokvmqJBXpG8FR6w9QDP2SwfuL2",
  "key18": "2pYt63p88xZ5NhCREmXniuCXSPdZUAtxnDo2MCZRtifpLf6u6J4DfLzKZ8poB6uy75FugaCK1xMKRDizTxc7zjF1",
  "key19": "5dtZzAubXKRGB4fGidcaTzWLMWDYH9d9jVzFVEkKmASTmUjBdaPDTBa4UMFZvsjjzT8Zi6HTcKP5he6YR6dQW2Fu",
  "key20": "Ktcg7vo2oqC1tVUrvVLNXbeFpMMkAh3cKGf1jrdPo2CMiCjcARPzPA7nrHirnd5q1GHnZQknE95Sxgo7FjWoKei",
  "key21": "4caqfCuGqy4NtywyQoCp2nSHBdseJ6wfHCCbN8GTX9M4adDxYfzkmJ7vnuXk3YtG8F8hn9evp9X5nj5ynCQwxGxW",
  "key22": "3S6zr1rFpkFRyqpN5hpm1oWmXYeaTYDhL7VAjGMXcqiFCWAyLr7kQxJkUgT6YCtdV2qBtgzEYD4S6Uqty9N32xq8",
  "key23": "44eW2mxu1PzYSneuWGQs7VDCRiSrKjQ3ZzepeQgAJchpr43yp7rbG9WHDhvtb3cpcVJ9Kju9d3mnRNJfAi4qiaow",
  "key24": "4vsMVTJiGukrnT6tVoDvhm4wfutGYhrABRSme6vMTdrWkbMnRpPwU7bnKJuPeipV3wMmtiBmy5gAw4VYCnyV9MFW",
  "key25": "36qaH54AVM3oQc5u7XxZimRqczCe6nx4NHDJEtLsgnC6azAJQaCZjpaNiBSneMAzF4Zbt6Xys6SwiwsSe1dWL6eo",
  "key26": "3DKL1GYmL1XHAKjeU13N44mTGE3CYN6ao66A9od36NRFCUfaYhmop3QABTDt7wdxrn1xL4YMLVxo6dbF99BZdidp",
  "key27": "27vbiXYEQfeGMa99FTUARudqNt99URpV69SJoDATCpNBwZvBW2HJ4V5WYnh3Wiodus17m2ahyUcEm33U5UE2XLSi",
  "key28": "2TKUafyu1zaek2WvhH23ktiEfUCahnYiJGzzWdo5mk9XPt1p6NwQCmbyxc3MYedDnPEJ8x5nNkHj6ywZJGixAy9Y",
  "key29": "4HjJqs32gN7BSGA8xr4DEDLTJS46TjAi9XJndeHKzWkkFKi7dYKwTTyFjrvvVzgvBSMK2KvM5duCVmNnojhLiFH9",
  "key30": "399KM2kDfpqi3N1RhMsn6AYFoAscHJH9cPaBfLmKdWwReXfJRsEx51iCqeB97zWynjH9qPYBcTQduZYjfwXytGMN",
  "key31": "5ZyQxcio7mnisuitHAFe2R3uPoChBGHmqZA9QjyNsMBi68n8WVDFVgdzzSYG3wnLwk3vR8FqmNeaAhyqVxhHPg8G",
  "key32": "jtcjfmGpCKZ8N7kXATwGxQwMhRgzLQJpFnddgnf14svm7BwX25mZk4QGqGpRYEGcmPhsYsCpPwKmYUWqS4nFV21",
  "key33": "8u9BKTmtEABLR14rn8nrnNfb5bJduNvtdxxjJ5inS5DgxzisaUAvnrzStkzKW6jkiFEdnx28RboxNGXomXPYJng",
  "key34": "2xEp95SJ62qoUrsKwjAfGHFr4TP8TDWfywmLwu65UsmCJAkCSACtLvLzF8QK5ND6k2wcPmWDY6aeUsmRjp6vG1sw",
  "key35": "2pk5jfzAHi3bJDY51V9GFGisq5SneV9dJjyXqqRcYya6g79U5dqLBwGrdXCdxTDUABcFvoHbfm4W7zSwM91k5K3B",
  "key36": "wbuxwhM3F7NCbMmT8jW4XScuevv6fFrm2JjdD6ZqdkazgAxWURrPkJDH2nrW6SXwhkMGkSFgmYqLxLo1j1xkz5Z",
  "key37": "2cLW7uqwK2pwCbrmLat8rwSLSnGvmoC8eKJPAW3TbEX7Rd1tghThWRwnNT99mgUriWWEFuBicPGFqL2RwNCmZRVL",
  "key38": "56bPLTjMNQ4Efe11VxN3ZBFbKpAD7TrJgP5K3z1APt9BFzrn31tpoLfJxX2JcF7MCxBANYG3brh7SG6geQZaYCHZ",
  "key39": "2tCpaDHXrz7Jj78wC4GBV9wG9b13RNDQMmpWZcHjAwg11dsidYpTuphvqHipD8unqY37vSaFyADZVT9JNPKa737N",
  "key40": "4ZkPdTok8UbLFQa7zt6wnfLH68ZQGY8o3dVY8GHNWDqVmZa1iihTy1ez1yY32W8s5g2HkQsNE4YpbavNAWnMcH2c",
  "key41": "3jBqjyE28cNDvaQzPWnBrXhRTqPU47BG7AHvMTiV2TChKgmXRCeFLgzb7D5SCnUhE4aW9ggaav8zRLK9r8S2swb",
  "key42": "Ctx1ZqsR9cGskmgWLMFFJDUy1NZMyNoRyjgiZ2QEPht1tJrAUxKGqe9pcN3ZbZE18yh9FxwsSytuk1xVw2ubGqj",
  "key43": "8qzyJrjzrmiEWVtiTsPcYpYS5bUS9hHajbHyZtn5aAwPWTSpJBN7zdZx53WuSHVrPbjdwoYNJ3qMHkFdpvchzMr",
  "key44": "U4YGKxyk7ryHWM6kXFJrXUCBqTiwuBoTbkZCqnp7NEPoX9c4uZPbpiWC5Cm3xUDSV6q6FCMLKmfnb85D8PeiPF1",
  "key45": "2RauqtTEddg6MneKJ8WZZPjRbpgomeUoMBXgSEF838Ra8wJFtJWkk4vKqEfBpAY6LtnaPWewAk3Q1DcrT4XwKBgm",
  "key46": "3ZvPR1Wc1UW44Rp2PRUKpceiy69vhh4jZsnEU8rQLnSgZryVbrUvRUtY2T1dHzYUJePAp85BjvSBSSCTKMG7PDk4",
  "key47": "3TnajvijPdyKZCrvttwmvgcXmr2gDSQQ1J1utzHZM8i7ctgyYRpHUbt1gpRFKaZ8Hxrp7Z5bf1DM6EqMESYGaYB8",
  "key48": "23sUpbqGW75uzKwz2nSHjLAuaP6EV6pwk38z14qCAviF16tLSAUrChxP1Jtvdn5nUbF7mJKiuRUPRvdpCjCf2Uoi"
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
