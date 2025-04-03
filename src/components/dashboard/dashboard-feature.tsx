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
    "nUPdx7vN8L9sBJR7xN3TVryWZ1YejV1XgnN8HEkCKEiTLnwFKCk6TSzpK4gDC8uVi9kuaAGwSFVvmd5WUs7XK6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fn4tyQ6cRVtYLPxJGMJcdRmDjqQYXW7aJyKFm2bqb3NpwdnUtfr343PCkHiwyCngdXzRFV7HbCBbg6g8ha8McqP",
  "key1": "arjMJEYVpP63Lgc3YdjuUEqyhyF5WKHyXxWdVArx7JtDDjvXFJ9Km7oGH6JkeG8S35ZMakhjUupK83rfxHViDBP",
  "key2": "3mjyd3xh7X9NsMfkpnemsDKzG842Yb3Cm39BaFXRZbJSDkFPywrspJyemih63JHHz5mnS4VXksqE7PhiPEBPeguh",
  "key3": "3jo5bjroCpVYcmdxgCgm81Et65HdBTkjNT1YmkFBkNaka3wp6JEpnvEeotwtxtx2T9YkAvQvaFwsW8nzEZN2WW4b",
  "key4": "34PBvigHFcoppzjLCgjb51eLGHf4Rdq4SVkmRymNXK1WR57DhEqpLELo2LEw1g3SfNdiurh3g4jVTs1iKQseHww3",
  "key5": "5Cfs2gLqPRi7JfccC3pFpVJ2L91cf9667BGR5TmTMGQTmtcErpuMUHu29rctzR4YAbvFU6BQhPqHLubSYmVAwBW1",
  "key6": "3G2qSScoZ9JHFwNuRGqQqYXMAcuzVgydmbGdYBHWPPSiWB2j6X7FJqjyJ59Dx6vyqpLeNo7Fi1Z2wSUPVAnYkJLq",
  "key7": "299uEuJUY4yM4kaMzkCHFMH51yybfFgVaXmrXjjdMvWQmSYaez8BBpRJ59SnBwxmsdAaqMCZb87eT6q2W3DaQaCp",
  "key8": "5nfGSFecLMD6ikFaLrUnG5cMyx6FUibrCc7a62xsikuJrsSWhbhtFb4sShrhRwrqMaKpqjxukkAzDF4nEtG61eiU",
  "key9": "7qiEPNcRo6etYM5yvBq1qhxQYKToSDDLwApMaEvZLg4ve7VSDbc2im8iDa6cCv1RtUQtN4d7KDSCKAfKyhoSR41",
  "key10": "2jt25jUabjunkYtusin24UpoJN7d9oHmSHw1QxNxu7hvsFqwQ6JSFoFFBN2yJRLhtNfAd5c8vV2hruTujKZxe9SN",
  "key11": "3mX9BmwTR1eX24HVpt1r3iEzPfwn5rHP5Av72A5TdeSYN3kjNGu5yhgkDNqnLvK5oEYyiAprqmqhjRFmU27YUJiU",
  "key12": "3J6V1cze3LtnYQV3hf8t2okXrKnXniqaWrZpQeMARRfjaEuKZMUtccC8wpeUWJJSJVJ3qnRH6To4oCQH1j1Bbhm8",
  "key13": "3GL1xSkvJBxjE7H9FMzPFBekkas66hDe9Qj5WRkwD5TSv1FFRUPu3cEjqvu2AWUypWtcAedgaaU8SgmayVBCc7sp",
  "key14": "4kQ1R9S2tfEn78XWM7abUVLu9FJxGVPmp2Wogg4JxuSvDT7fduDLcheuLCJokmyRBgMTbR172KDbap2RdGjATr5J",
  "key15": "5nfrS4JZ9hxGvjpN5KjPa1Eq1Eg88ATPCZ3XTv1dEVJCwa5PWFk8ZveWXUnynUPJN2tFW85FVQSakRzKWvSVWGE7",
  "key16": "18JfdCGDUUGWSU2xq95DBnfMGc11m5FUTF58C5v7KvhQswMe4S4ktmgSoX2y2Sn54j3HwVrC3gKiBEdVdreoukY",
  "key17": "34Qr9PKNQXfXqvykQkYD3VwK6pfUvXKposRXy7gFJtFi2YgbvVKMZXMMp2Jh5sZavZMYjy34NGGUrh27uDmkEY9x",
  "key18": "3CbRHPfvDtP8WdtTLdAocc2MmgDXUB2VXLsn57uWpRVyWnuwD2xCDkpTrxiWxYMY3SbzzB9JdJ7UbMoEyCupGPjD",
  "key19": "CfeYN6Hnz6tXFj7toWxYqWq56wfbu1FQ2oMuYJonWVEVG3586JQjoXctA5xyqwRk69qD4aXuUXEnVYX7xy5c3BJ",
  "key20": "4DapSjXRTVe5CF4VMU5EHrJddsbAVS5tby1JSQAQJu53Y1edbB6KjxVUrr28ENvqeJ48FkUgxBPZQ1UzdpdLXuqN",
  "key21": "2B7ukCj5AoXw32a4ZT7YZjMgSanYi8uuoHci6iGxfudNBD9LfcRieEBgGpmmqDjWNVgq5haHna1gVxEHUREuttDj",
  "key22": "22FBU5vU13upfw6QcZ1Cw4h4d8eU1jzpXhdmNHYy9n5iikNsKvAep3isRBf4xtMvLnXnMoVE92Jf9er7bUGyFH4T",
  "key23": "2ae6H1sZeYR1XiP9dcxhWbB1iL5Xe8619KCW3GWJuKdKptjsL39swuDNo5KF45iC96gK37edbSm9M197tPoVreLy",
  "key24": "2K9ENGEJbrBwRM9ZwhW8zAzDQFYwrvrFUJBwdqesJgvSdca8E7dFwUt7zrtRhChriZ4wrbGx6R5C4hT7UHb5visq",
  "key25": "5LvaeNmSumvxBUEgZ4CJ2TXdwT98KpspNRNW213tteXuQhbLCAXK5c4NsfFCNvodkJ6Bv4Z3oShL2ji73KtR7Yn9",
  "key26": "3fRzXHAQnoHm5QmMjRAgkGWBBfg6wvvsX1Ns8buSDPsFRHBqWzZEBbSZKMmG6Jj1JQYnjDo3ELDMzSN1FTWJ279c",
  "key27": "4ZGVw8MzatzaMxQf825ykTouCPzj46HA66g1AuKCtVRwchGJmvc1KbN363BGirETJKajfWUx6wMyNb76yWY2vt6z",
  "key28": "4QuYjEVYc2bLREYHm7dvhn7N2cZGPCgbjanzznwX1nx7gJqxe6232BPnhVnctoQy4isBhZW3GXu4rA5U7spyGTzi",
  "key29": "2JGFBcQAPyWt1m13yaye4SA9QayQN3kR86Uu3Yx6YTUprNPseb7CbcGQmHtgo2Syq3Ppiq48jErqrae567mFi6qM",
  "key30": "39id9TFbN2EvxQG7KjoWnNxcbjki36yFoizKJEWynxZzrPnDEZ9NojRr2NK4YxuCtxxAUPSZSPRjhsvQg7ME1srp",
  "key31": "4SraPuZ8SA2hJ6njWz3tKaga9YrfKGFkwaNLkoZazy6ALGVAUvfk5qU6kCCRFVSKf9LmXXAaLHTpKbW4yo91JWCj",
  "key32": "3wsQiQkt2XErGSrqTFqEiaL7bpQkJku8LdiENtDxaendEg1CGWRusPUv3PrHSxrme62uetbAedtv8AyvbQTDBz7j",
  "key33": "VVLtgCvEWnUvbU8pkGoPCv5AfyjwoZqk2EoNjfFaPAuh7o5bfseLG6TjCQX17S6AQtd7GoVaPSm4cGPKxyz1SFp",
  "key34": "2aqe1HqS4SSF9pr4eXXxch1pJbGzm8Yq1JHgzm1YKuQbFekah6SC1sR5J7nogQy592VW9X7E23dFcp9E2kELxxbJ",
  "key35": "65Gze6dQeiCjY1hmPtHWPt3kTaHo4UFeoRUSFtxzpHiumz19rfXTMBqYtYB1XVPYWKkrhqtyeU5G9ohogs5MtDFC",
  "key36": "5wu8dLEHWEw3tUuhsBk7XJtxER2GJUDBdCYoyTkv3N6yfLktrpAJo9ejcVRtJXwuGsAf25jEFYsFb7mDVJLFKYEY",
  "key37": "2WRYLJRv9wn17LuSsYT59LAsrjBe8auKDg8FNBceGJ5ojKFC4jQWaHf9zSQaDKGVdE98qSjfvtvJriLJmm6B5n4N",
  "key38": "21itUv4F2nma4Es947oVvXwYTTkUPaSs5uunrRz1hJUgyBU7fyb2f2XLSaBD5h8cUvzNf2s3kcR6WqtoWdLVz3zS",
  "key39": "oCHES8A6wCBrexqtSRdYRwy9BqyJDS36ApPBAgoh1nX5HiGCWisSSjCLavsJimKCNC4PHpzZgsYkcPqgob9amiy",
  "key40": "447XDayL2xnuLtJLQ2t9pp7yRNhU1SUP5XhUgiqyFcx5n9XzzTqV97a3YhE59zjBLCWT8jJgHVCtBD69CRFJhcLT",
  "key41": "5bgjubG9Dspng6keMBMK7aoNrYufE2SzfWedfxAniK2dcRE3YYCNWFN6aDTyoGz1Nj7J61ZVZ7UDXvV8hQukYkvE",
  "key42": "33qd8uvbRprhrCneW6bzg6GKzV1T9687tzXwbXwgNx81LMWd5qLwJcnMSWgroe2FNAErh3Dsom2vHWMzZct7FUCE",
  "key43": "26fMCcT15P7tniDB1HNSqZcLwWEnEVEdWoZsuGn3aLgkRUmDKwsLNceNm9AYW4vHju15AP6gDWK1Cb5qnXDLBdmh",
  "key44": "B9MmaEfYJsvoAz7X4smf1ARuzcFtdXP8GiopBmh7tTHv4W2k5Lj29ukyyeixS7knjYgMMqNaEhVGaBCz7FKGMVs",
  "key45": "45tT51KwurkrLuA6aUFT4RsuJCPhdmeqF2U4AZ5exNSDaa8ERCuKwrD8T96885uMahtZBrQrBS2vFbubhHb7HzL",
  "key46": "4UR8k4qBXN4xfiEMnFpJJvPRnJcKUJL9BSxYYLCJncbMDH9Sn9pELhB8q22sZxGVGHNkFG86MJF1NcZbaPBJUuzm",
  "key47": "4HFW2QeABQU9KrXyEJCVJZqCy7qmaA1uKEZWt1UAmabKfopF5q9BobF46xwEbDBbD6k1jehLhs3WznN6oBJU7c47"
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
