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
    "4MxaxLoYFMZJnfPSRXZoaBSK4rokR9AU4vub8qJo2nB3yFGjUSUigFtyGcJ9AS8q1VZADMmvpNj54A4ywggWPyto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q2cZyGKZyEWjdg3yHwowccK13sGhZKnMcyc2uF1DdHRXgrwVin4ABSn7auYAH7WUu6dJpPowa4aeQDzrFZroZYo",
  "key1": "2XedP3FHoTvgbKfypX3qTm3zN3o2uCUKAJrayXzoxci8StzPkPNi9HpiuLaDVpVtbceZ2MDy3BJaiJhoanEYAmP1",
  "key2": "3fanhinz21GFSMF1AYEWKTTkQQ4YpngXkvxtJA2yYr7jcL2Aa2znRyKKJuc53D7ymP84SdsvXBL3a4C6MKjattzu",
  "key3": "3nAugUKvS6MDFMSG47egMG3URhaXYSr6ceeGDFMGVkEEbaBMNbg2k7SXJbsHF72diKPMcvhSUKfXeEaQ12omcgrc",
  "key4": "66wFLY8FCWBdj1qsaHHGajZRJUHp8MgZPKaEvfJbiQzZhLGFHEfCcvG2HXKXK4GdJDs1U2XkKb7WAtSnP4NWw75b",
  "key5": "5ZKDYVLCk45TbcbZp3tfJqK4w3g8k2n2S4o7GVD1kAsd8JYvfzisSRjvc4qSr7ceJ7JJHp61T19LLTPwKVTD95ey",
  "key6": "2rXuZsCFX1utLXhB3CYYWiCL7BQcwbvbWdRuQWN1Yu4DrmpWkRUjhoz1rYQcxTWpTwtjn8mwcAgXz3j5g6fW51B2",
  "key7": "AF5KpmptSBtqgtoh4kfZRoKx1A4ed1E2LSdfp4g7BznY3f6BT7irhKkMCcTcJge3nMCdcq73DouiiyBU8CSVVMu",
  "key8": "g6f6LNe3y1QAsRAfLpqEWAmjJPyWBgVUZ436uVoTcFgdtsiUR2929EtQp5NQov7ePvYf1T1XVYMKKcfAWGnH98g",
  "key9": "3nZBZpjAKLtnkoUPvRc4o3j3hijjnd6opjYaauE82WHU95LXjGyWas19Bjb5FJFdsHPGvoutPQMLbc85QQk79Usc",
  "key10": "vyaMBLViNsJ7gcuk2Z5S3ovofPHT9qGCarpRzL1a26LBsqNj6WJS2NRstdE7zDj2unfLa47hq5BAWJHko3Q4X49",
  "key11": "3yV3DWaT3by1MeyZBCXEvvxYUPEYX4vPGHNwscy2FUUAyv6NiLd8n5e8pRo1ehwbbmeXDH8vaBACKJgYoLrvAVTg",
  "key12": "3vbyCmjrhztWRA5XfKr25k6TJW8sLupwndSsga1GMihj1LCkHscg59uiBkwTUVDG5eyfqoFCod94KJQiEzzHuwc5",
  "key13": "5ncxsXsJyCvbdzDFbwrrzqXQdchvTQrKM8WHPB5y4vb2K9PqyV2H8BvPLpLhCn7bchoBcea5gRb3XvgMnUApMKTD",
  "key14": "2fVTAgBDwYFUyc6833zueCUFufQdvRY6JP3FwPZ6DnxQ8upuNZevK4LTBW1kNMjurHRU2LS5hhMfLR92uoHGTXSi",
  "key15": "FDeqam2BGdji7aRQfpuztrnCdh4hdhxy1nBn3wqkoAkjVWahnSkP1HZZr6oVSTCLNSHsXqQnREh7A1JgdSYTG5Z",
  "key16": "TDsKDdGkFpVjCB766KGdJ7rhbCWrgdxbES1ukYk8FN5Cb2o4TMMjtoyQLkWiCiuEY5kzmWfnmdNAtuNLEtMfkjU",
  "key17": "3jmoe6eo1zY5tQcb6vfaKkbUwjq6hPb9L5fa8xWFk33pPHcs6imFe2AUZAZ14QTK6hLuCd4HKW2Zj83vHt4g5ucQ",
  "key18": "5GB1NadXni2SrQWXTes5Wov8XGorU3hU2RjYWgMkqtJk1dazMdod26aocCnEfnBbWE7XrYQc7bb5ggwnBuVyrHMP",
  "key19": "5SSQcVoyCe8C4QV4r3TwKhyS5Pks78277i7gzLDPFLEdhSNieR4MACoEYweXyjzNsdiyTw3G57zLbfc9bNvou6Pj",
  "key20": "3pZPkYTMxbcAomoNs2xmoKUtAE8FXAdByWBzzLQjpY9hdk7usaA1C1fJjuRi1GnfmqEwn6e7N6abVU9HR3pj8ZKT",
  "key21": "2HeqeBFWCFocUbzR7xHxqxsYWUi3BvukrdxqkxunJY9nTV5bRCaPdw4TGkJnfLFQzBw2yUnLAaxYYoGc64Ktm9Qf",
  "key22": "3trqnBWT5nvJ3wt4JnXtwBJ6N3LMKWC36w3MLzAeEmhT8KBY5BFSicnBUHc4WRmwzuoh4Tu6HHc5ajiJ9qSLZA3v",
  "key23": "51qCE4JWNgkL7Nsy35mHbqiDbS7k7aq1RaDbX711vbscp78K3sGKmtKNJkFySpdfTA84n46eoZZMDVRgqYewoc4i",
  "key24": "2Av35KQ7PcdoH3GdohryWPvUg4brJgS4B7mbehwWvfqoZoPXq4ZhcqnkfS8EDdQ2dYuKAS6Ksfywd9KrkeVZUi8s",
  "key25": "3GUxx5s6TA1kMZexWZuaSbjYoNZkFJH6MhhZhdm3JwGXHPuHxqXNPsSLmtkMCMWZc9Tt1ZnSwCRo9e2NiqyhUFpo",
  "key26": "2iyc3crFt3fjCMTRFaKuvCudUgzSUbjqfubJRdr7WU1LLPdd2cjeSypmEa8SLW75aPAd3FnTndKoXXUR5paSKKLK",
  "key27": "2T8orPFyG4LPCuU45nHDSEoz7cri3swx8DCF7fgTFNxCTcoXXu19REVxgjzLen529Ugh1WNRuZSP831tAK9cmWwC",
  "key28": "456j9YcrD4DL2wN8JhUxTC2E4wBGHr59pRDGc8a21eGuzxbJre35sYCbu5bxKkP3urpi742mZtqoVKto1ciW3bPM",
  "key29": "kGzkXHR344QNwbmikQ3Q781Y2yVZRK8DuQKrM2NQuCUFrQVSdRuBSyYRX38SmZw5KtC7oSXdndDc1TfUAAwwYuW",
  "key30": "4j1cgC5Jx3HDwuZVum2SVHBFnLaTjznsP9C68bBVjjZ4R5f7McXC3G714daUFgZsGi6BuZgBLXUxRnTfD7eoQP6t",
  "key31": "2zyKP7cijbe9YFXBxbZxZuTxv3aRpTqYZeRszb1sB3mQEa7s2xcLzU91Z8recV6HWpKxXQuwwWnR8ySB61mpt84m",
  "key32": "5c9NQQnxm13P7vC2n5Xtx5zQqcKk3UnpV9yHxyrqnuR1PS2oBvCNaXVLTf2GebYxiS57Hz5gm5Db2LR1QdVC5LzF",
  "key33": "3C3J5J99mvgoLA9fykKhs3zimAJRmzTbvDRrFXfeuqoKHjvfucwWDRJE3gY2GkStu9zWzCXtKmvdKp3KBwJmcay3",
  "key34": "45hEbS8N4nwLYHob4XacmadDrcU4F1uw9KsPH6cmugh6Dg1LfgvKyZAnmVyz4XuxMaxdgpc7WWG5TXzveQgZ8LY3",
  "key35": "zqwW2kLbZZwQ76ykBoNHvdyeW8GVdS92H8tuPiQ1bskHvTWVkSrmF21Rh5QTdg2RudELdZ2AfhggMejwXqZHKVA",
  "key36": "5sSB6EyZi4xJm37HkdeHGspJm5S4yfKrCam4dK31aLQqA7tAjSyFx8T7AfN2e4unbzKsaqcmp4QHrWMks7vx19ja",
  "key37": "3RR1TDMTxYMhxqFm2qRE6uALmFWNeALjBBS3njHhuCgxuDuZB9RY1rGy3b36V9C6u58RmE662Kw6Wcc9LzZRYkGH",
  "key38": "2xxs8CBkrxRqMoE4JDZJCivAJLwXvcSeKtYGnE5cUZRbBHE9J2GboXsMF1FRfKgdJMJHwmVzRXzjMNXBgo8FTwxQ",
  "key39": "d8oaPXANbRdNedj426oKvPBKy33Q5CiHeytBkRrVccszAY3HVjUAirTWAcx9Zs8obnm4tRJSr2MSFzDBjqT42tp",
  "key40": "5XD6qgNWvsBuaTJHgLhhwwc2Y3kSeRnFRnd9saBZueFAgx6D18NsENo6A5eL3RRTcEoeYLG7BdSfnecmAjrbDt3j",
  "key41": "3gv8FiTxurf2fPafkNGgLkhBsiqMZUHTv7nynTtNQNTpEViqG2MBWTTz3RpCzA8nAe9phibUmGo5gN2vbDMA7fJ5",
  "key42": "43MZcxPiXM9fPJkT7HpdafksnsDYFX9T4FxCBuVy49m7NGhSfCP9LTZJBzu3u1aua5K3ibZbN3DA2D6w9EiaSm5n",
  "key43": "4fAREBmiN8NX5TWgyW39x7kFdNVzciBCyDUN3zi8QfptgnckjECdF72pr4hqbqXYDhDAVdFMCHRB115R3YkueBs8",
  "key44": "jEpYFbMbSFeDRbh7yhhqv2mZTv2sHRVqGZa3k9YY4ZwHFjQhWXAyKRShbv2dUp49758vp1yEM3nzJSVUi6wsnHr"
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
