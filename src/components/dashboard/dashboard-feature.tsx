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
    "24UXrezhzeitv8L9ZYSQ56MF4wpQvfvV83diUnyVUfjgSZfQrMoRpL2KoVqSoPFT4JLiWXk7jHBDHgSVVuJ81bnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zKYrcg3RyRkTDoQ9MkMKukYUiyroxACsVs24nQDb6gqARnz6Nyvxpehzhxgnsx8FmLBT4fp2NL4GESdRieh4JTg",
  "key1": "4jF1sKP6sHuAJoT7rupaXmWzgAC1RB3t55H7CDaPmSGEpSWKWYpkWw1ToRjC43AxDLjka3TiXnL5MDAvyyuxUJgU",
  "key2": "4FPLXgGsqYj4zQanisj8XC5LMQ1XNPxWJZtFoyueYaEGk7mmJ8BKFSLXv7j4XkLkZBDbmHEBYJth9QRDWLnRfhEi",
  "key3": "5jHmqP2yCR4zqgvd8y3WA6DaUJwtWR18encFm1yBTD3HSFWQti7vu2CiuaBmJ6Gkg5ihmzATcM9MkpQ69iVvbSCr",
  "key4": "2ihkoEZrShTjN2PUa5CueTCzKwBVuinTKn8iD1i5rxapP2YLatnAMaaMNtbc7rPTHmuXwXM13eXcgXm2ZZpXSwA",
  "key5": "53qfJpE1CeyR7aEoVnk5Syh834F2BpvGNZo4dZwtTJqTboNDerAgYZsmmFMWCQgXXcKXiKGKPPxnHYykmvvSKDgX",
  "key6": "2xWTiyD8J5EqDAvARwiZxZiYL3afPpLLBwGWj4hG1aTRQLR7Nx9Xddo7qvd2Re2bS2EKRNVee93Rwg5ZDX9WduBz",
  "key7": "5fQYReGxxvTmubbBnDXXX6SJW31JQRMJUsbq3UxPF1WyoDhnkAQgJTBAoucmCeNtgoVbgDJmTzCE6xduvJmf1tKZ",
  "key8": "63YQM5KrTdnst91N6JsD3gZ8RMDX5YQhPdpSNBmuwUNLArgWtfpsXC2J735Tx1wuwqHbkM91VbT3EqTYhV2bR8PM",
  "key9": "3cyBdaWtcq1fZCmFCnNasQaoLbiwws1JDfgLrsnBjaePJwhCbaGceD63nknMfR2LohDXPfnh6jqNDLrv6U8DAQYP",
  "key10": "oca6mnR1pFQnk1FDThw7AdPxhJpVFnPqxLVMCJQ8fKfHTo8ypNJDUDNWHZDR5xTcTuFDWEXY1yDqABM4VzZgddv",
  "key11": "2rB7Vx5eaqby9ofJAA3m3jMJ5QkSPEkzbpFY8FE8tby9seze3X2qy3EF2BvARvYWLDQRknaRLAMEF2qxYsXJuKz1",
  "key12": "sqksyiq9gFXTnivxHHkTx4LqG6ovvPNzdFkJ4MY8bVfFRMyXKkm7RKyXRZx19Tr5Rqdct1BMeTF6YBkT1zgbHVM",
  "key13": "4oVpTgyvDVACThGgy4j98s2HVeDx5mFV4oh8tePafkYHjUR6kndkeTYf5oQprzagbw161JWV35U5oNDPfDYM9MBB",
  "key14": "YswwCbPtVF7kU72wpQzR16BRcA8AKHVZ4zHaedBijze5P5gTKdBoFUyKGTNGNZWvsHEieEnYgA9Vj2igmZMk6V2",
  "key15": "k9QFsiAmreSYzssgbNNWgRK3eVKTE5uJmN928EBCMufokRFxvjaudhykGD3QSYNPQdTHfXrR6Ffcfgxfx7ouGdJ",
  "key16": "9WffQktTxt67ki7MPJvuHj373LwAjpihQNsiVJQx3MvuuX1Gpst8ua5LAJWVPycgmddvZYzCS9ehe144moYpXkA",
  "key17": "5yX2YNj6AojAc2w77hosSYzJdEUHZoe1gGbSq8vHXxxLR8zZ6KzSNbAVrr9a5MfxEXNYCQEQridhkp2BWDy9S5tL",
  "key18": "skBsrX6VUV8FKWFpTNAjCRfA9xm7mejkyPRMGXjwpCerJFDwAjMgWtpaYnioTbvdTjkBxPi7r9fsiijfuLY6NdE",
  "key19": "4ccLXYF7jH9oJJjPmhYUGyhc6TLfQDobnbqBb6ERmD6HbTbHdny4dNUBdYUd828pnLP69y16yFhf12RHqmao7i1h",
  "key20": "49nUrH2YkYJqmf1YF9PUVmHhV8o8ete78FZ8QHQtcgje9PmoRSwr7MrKprQZwXyg7DEfchWYXHAn48D25vKXHC9m",
  "key21": "3pwBqxuM1UHqqpCk9ThbxR8NefhiHdnuxF77ztnhK3vRbiTJKLX1SAhrCuNsBHJWVgHwNmfde3SYhP3kgiGdMgKW",
  "key22": "27aq57oNrip5PYNwarVCWRjZEtpiZ5EEPtWxRYMkjBLd5xqYdVfeopfqCmFMfDsywxiJrQDQcuX7kWzYe86B7zEF",
  "key23": "PKGidNBbMhuGc2jC5wdMes5TAMFu2vdExM5mwxgqNKSveBYpPdQmHy4GhrdE2wBg8zKHk18sxRqKoziXUb1d7Ua",
  "key24": "22VXw6sj13GKcbxvigTuVfCfCT29hjMHohLA3uBmVRdkAhZWkQPfuk3FDU2kPACFdHffZimLZ2ABa7FgunJaZZRm",
  "key25": "36vWEoX9kSRRnafp9FyF4Z3H28RGqhVCMPoXJpEWNq8NfRV46WZZknzddYemNrjZVzzyTxTs8ibTUuQoP5RcBvPa",
  "key26": "3t1tzag5eyRCgPazmahujr15X76qWW8623XNSZGTE9d78T3H4DYjmN8SdUtD5sp7rTcGapVB7zKjr7Nst8LCwU7F",
  "key27": "LNVTJshduWT6gyUgL3e9LY4WQFFuQA5p3DYmuQDcQpjTu2tpqaXb5k91oyXgEpTfc9CQeQWak8MmNYPxitk5Xb7",
  "key28": "EAFkLFuTuZuf8wjmrAAXBMnXbmWFHSx5e3kTChs8Fd76qq9xc2pvWWEQnqdBufDKX3kfTj1tNLfu9VY7qC9CRE6",
  "key29": "4tybWPyJunzDbi3u9atBgnDGjYKXQyyxCm8h55YTt9Y9SnM8QaPzRNaLG9TDMDCNEqaLDqSonLRfqtFibH1uXY6D",
  "key30": "2HSinGKv2KEv4FFxdtNyMDD9DoqNRZdCdCnSENYWsuK5VjEwx4SvC32h8HE2nbBHJxU4YUxAbnR3CEVDC7Q86zzS",
  "key31": "4To9Apt52gFZxvKpagb6hAKw5BfTPF1iUF8rDB2u6NGsihddaTg52sfz1WQoDLR5GBGoyMuds1nUG1FSfzzqP38r",
  "key32": "2zYHhwhu1MezyHcmFTFgE3CvTsocVZhuhn3fR2SzgFwMfxeBicnKhEhJ7c8Egsic5eeCLJJnLbR6LTJA846A9R3c",
  "key33": "LTsYjLeBJCnsgoUhVWdtXeVvpytTnGWdZEpTCwAWEBB78KmN4wJ8D92yBPttvzjGkHzwKgjCVqZY3BjENLMNjuS",
  "key34": "4Q3wYtj2JCDN2khbaQdYKJLPkbcpPaL2pjDpbHZNEck5541eUztM7SYzUXkNUFCJSak4SNnnoW6AaJxbhQhLMGbN",
  "key35": "647Fzf5JHyFc8djJJ3dJ3kc1F2k4mKAzbzmyYGZVHeyemZrChSYiP72c6d2A44vkRSRrPkNnf15yGsQqtn2V4xHC",
  "key36": "2JM7nQtCAriJ5V9W856Xa8dFu2oJFYsawZKvQXAcnuvphH4WKY5yYZU71atD5g1QXQZfhoUcSp1doRsK44WLh8Jj",
  "key37": "3dFh5D9aXP9JQyLXjVqZQUecGwFatrFVDBb4EjMGXanWe15SFdVWnesdNzZ4bKrL9NFadnzFDAfc5ebFu3ALddvt",
  "key38": "5p9Nv4FR5WWttzYnREoNA4ZmUb4MG97xqjDcJfkyTuLTEPyKFWMCfVSutGsM4gwTFuMkJB4u9EKdmrns4MwE6ACh",
  "key39": "XADJAJ1DYUWfWiEPsEyNEvLHLV1qTiP2vrBAuB6k1frB9UyUbvowP52cWYV8VzWDoov57k5uUTP34YxufHocZPP",
  "key40": "4dRyUDVRunmU5HhiSSLRzTEoKpLRVa6Hy8z8nUGHUGgZy7VJAouPvtHyY5CvQ3UT92HMUevsz7DKLud75XA1FkJW",
  "key41": "2zh2H9QEEua9CyEAj7J9xJgNrjMnhV7jwo9PW6t47mSacYRTBKKP2VTDyy44XrYKN39JaLSRZJVh8rNoSK3Mr2en",
  "key42": "5qLyLRrW5aFyo4rW6N3uHUqKsXaweiQxVmSAzqXyFoZiVzt5TPv9aZp4R7VkQEjAHKmVeTp7fZqnvSjD5eAuJoW",
  "key43": "3J5UMtNgo7rsr432NEjkXF7adwTvfDsphJBbaj1Zcrx531PkgPNsRfoHvBP2DeTjq3hL92uBj8JmCfFJSaNjYdgJ"
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
