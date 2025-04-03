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
    "2a7FTuNzEKnz2QXWFvDprNQ6qjPiDJJUqogpvVhoP2pKUM2R1FcNKgdg61sVW9ziZmuRTUBhKbczdXVbmGkVBS1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zLmsk2XFaXEgH8SPEGozz3sdnrmTguRCrSyiyk4GG48WPNtruhjqqPj51fXz6D7J2kRbrPrMigFotHH54zLke18",
  "key1": "2aYsBogc7Ya48nut2QpR36stWj2ZLpx7VhxRkjMgarxJYTau8cZ3XDXaThDXKfRxBne4VQ3MKTZ8YtLxXnocJL8X",
  "key2": "42dxsMRqiEz4cJdPo5pRqbNwqAqiqhF7MtTxa4GhysGGfbA5zcg97iReoW6dXMhC3XY4rBur7GUtfUEmVb4SsFUy",
  "key3": "QoYjEGRCMfeuMP1caG4WgjosQK7hAHVdnbxaTJFLFgDJQysx9kVJjFtSu9H6eHuUkoMdze7qDmXAEvzh33qZZzU",
  "key4": "5zBhxZXakv7gm6GvjtNNzeoSE1AmePDZPXKmronfRGHw7cqq4jQ7kVTGm2R7SD1i7HQZHXopgoNXU6vvDSgmHVwk",
  "key5": "3pCpVwFqmnF8kx57Qf7nQyd6EdaHKo7KJPEav1LWuif2HteS2uchSYj83LGXoXJEneSxUH45q885EZ5kKWdpCe6",
  "key6": "GP3hqQDZ9n1LvpsYoJxdDGK1nR6VztcJwBXEBNu8LutGecTGXr3VrJD6UDBSM9xZcypbZJL62ePVffinM646G7z",
  "key7": "gPFkGj11zN5Mnk9nqaFccJgUZL6BqGTCsoPZSECHbu9kPafPDjyQuM8decfeRkfyqfXV5XLw1KZgUn97giqU798",
  "key8": "65kZnHDLfbKUnR8bfi2NSwxhUH2BHh2d3boyhw48YshhCzuZLkyvBPjp8vwZcG9jbuidmPeVMvodoStnnvyv5yyK",
  "key9": "4BBXfKfZGnkmupBLxHbtg3C87UuYFCFy9118MAuxgEYgWo65xbfJeCzo8JCennNuSMjqLpcAEwabzuqGRdJJSG3j",
  "key10": "4VJ3zGTWeusLw25gkFfYS958EmjkWSbJxmPTTEqfZ5U8t4qzfGVFYp3QVtXerMUGiVoCHEXUxVC8nx8B7USXXHAc",
  "key11": "2osvgH5Q7mV1vuZiftBKAd9qExrTeLpJU5Ejp1cXcf6AcA3daPxowt37DjHJucoyJjgNnuMjoU442Nek2PJCoJhm",
  "key12": "2NGaYC2nkGZAMut2jqUbt8dESAV8aGK9Xxytr8JCc2zXsj7J92voso8GEvL9TiHFHqhqe7DZx7pZqJGiq7qjhqdH",
  "key13": "5kW1zuQ9TZhoUURRLzGdbSrrR68daoccEiUguRQaFHcarT6BBhaTqYCuxwEPPsbyPMRizERk4NqV8S8nABPRgSaR",
  "key14": "5mFbQ4bK9CEqzornifTJ6GDsPftN97Cu4EZcHSXEGJuVn652Y1cqneuAiBcbZbusyCgWSTtKNnf8iH3ydj1RznSw",
  "key15": "5WQ64Dkf4eYcqshiKEGQNKLpRwPf48s8qNh4973F8Au4UNJCadoHwCN7xRzfihLRhrhkQ3rh9Xh6qwqksFGMqo5W",
  "key16": "4i2WuX3Last9gMHXaYnErn4uVZ7gi9rezw6rg42hN3X7J9coX7e8d6Z2dpifKaoXxiH9fKeYDvzkaGwQG7yWDbq6",
  "key17": "3zynPLv8TqtBsKRjMqjCUJFdiDy3sNFQZTWDHP5Quc2iSjauXfS68JUafXQGjpY581SqnN9F9S8FQ1UgdaUd95KM",
  "key18": "63WDorpX3uHsE6wVDHHNFzcGoX2rrCydwCJbgY7ZrgYLMWNbJjbCybz3hMMhH91qyfBFe4UrAHDd3FnXC928hQSj",
  "key19": "3Nhu2ydpSiCjRnSHbvjpZwiVvuCWsiY5736CX8Fsz3mYGdYYvAsKNTzPSH9STkYiiUfNGHbPgQoHqN6MQFLLe46p",
  "key20": "63CSBs3UddzKF47qcH7jSW242R6GwfBhNRzrQ3sDZZVbpriorUvH5b5pxGGT2ZXay3kCDcfMv7sNyVjSjdwfsVbB",
  "key21": "3WyhzVutGMoqmqNa142gYVezu2ivGouBVUZMo5wV5BuKqStYiPvbkaZKQ864KR4jkoxiPe9mNNfoYCdBfNHcQ8f7",
  "key22": "4GLTQxzoTkycH2PC7JjviZhU6uH5bGm64o86EWKNyB832YTLPLLAz63oJfF7TLQa2PG8ZCa5nVcGo96wg9McMp3x",
  "key23": "4BoT6JNXstDawrV1srkeNupRqKXpAq7VLsfmDruW2oxmhonsQieSWrMPsp7NFEwrBj6rHxPqx6sw2pheoqpHWQZi",
  "key24": "57kHzFin5nJiySgLY8RseGYoYq1q8uJjU9RCczQEPPPmn77NKPdmjQeE6uN2Zp2GTN5bgHgyxjDW3e8sokppBDwj",
  "key25": "5uML27Erk82XZ54emQxi3HrvNN2HuwGKVU4Lzhteg4SxuiWpntqexZVZXu29xt3fRfdJdLx5KPWnmZeio8Ti9Erm",
  "key26": "4Ng1mvP2ikJpVrBVqj2smFvSmcVxL8speECNSq1CWUA6SBXPK8ngLiLcrUq2hxLzy7AESy9QRTVMvfPsVe51UJo3",
  "key27": "4wRscFtqqY4DinwWuEbc2PjUkeSboj3xhDnNrkBkNYULS5H49wyhYvy7KkLYiSMfDGvBgZ7i8B44Fex5dAeYgyRx",
  "key28": "3UYRE7oyZ3X7fxRYnsfoyNpEDeADJ6eHiMG5CncCKnjwAjWbMMQiDpWXktT7cHo4GLRnBqfQCnDY4PTCRYJJ6Xob",
  "key29": "3TyEGuw6FcAfnrDXYcwQXiXrnoQFhrYKDhfkJeSuz5iXXyiUBaWEyCvsr9SQsWcbPXHFJPfG7FeRoottjU8Ki4go",
  "key30": "38DLyssacBdpmDnBEKxPoocixWQZCZjMFP7ZTEcQf4DMrBePpstjTGYb9ZwZ1si7gfgag5VjfLbLkh24jvLQv3b8",
  "key31": "4QZ3erfu7vtmM1vbQT22pT44jXDhJ1xnTPo9Mk3RpPQ3JTwUM5s3bpiWzMCLVPXHzt8kQmYR6uAbsoUNdDwGZFAN",
  "key32": "4tnwhiRxWp2hFV8uygzd9bWTGMRJprU1SMAH7aya5oKJWp6kF4kGHbnaAxvf3pZwaUc3L99mVvjvkzww1kKC8J9b",
  "key33": "66HmMKrsJFJXM7DB2Am1kHtzzrRMPhmYoNFteuVHUwxieVcHueKBsi1DRqb3KwP2xRnLpmWQwPqfMnFdKZ3rvXRW",
  "key34": "4KwDorvkc446aooK2Q9SN7xBnSWcRG4K2prnoZpMmDJeDcmZsMGtpTDZywSQ5Yhs8dXiirDxtWTgRGPjMDvtLJ7s",
  "key35": "5sxtQ4eimzBhDkAw1p5bDiAuBFQFKgNcTaYanSThTcp5Px31jzZA6AasacSsJ4PRN2Q6NmdHHWAoSFGnkxgfSukg",
  "key36": "2fXHQ4TeNxnjahs5ttrxzKR2JHNLHmVPJBsg69HSPd9pcXbbfzcaM3Ty4ovgrQQgVagU4oQE2Lqf4nW6LXXY7Uvm",
  "key37": "3VBKVrT8Nt4zs4FkfDPYrHwDvJSgRF1BWu41uZPd2kC6d1u21rsqCpnVbCWpaDkbRv5xE3Y9b2cVchVcq8pajCH7",
  "key38": "7ik3F3kZ1GRCxCQttNr3RFkeMm9BCRxhFsxccFPLQrtiUwtSRJjuMEdrAtY62TzHfXXMpEgEMuqpkLp1PEy5GSN",
  "key39": "4MGX6GhNgx1hZnSQYvVh57rgAVD4uffxdCDjsuSDrnndofPGiNXhtjj8JEArNu9ZzdYjeqhnAg8gWgAt3gPc9vQf",
  "key40": "2tXPJWrdnD1SeFu7kM8HhFsdU9XZM26j642zSKCk85cqm3zXxeGZWCK7jmVPwj6hanaBC5diAbMaAk2BpiqLiFcD",
  "key41": "6Swiwd8oWu1AjXiB7hkByLvWoh5A2zZfTnAecsbdTAwcjfWAKQHTf5TDiyGFKv4oiN4SKXKL8s7aESYzRmMXVr2",
  "key42": "624Dpxb3YrwnSQaiLKsdnVM4j6CQamzxhK4yUsUjav9XjMZM46GHNojb8RMjpw1EU5dtVZsV8hv76G9sALiASaVE",
  "key43": "5gf498kqv71nDKHYKE9Cp4pz3MhafFtRu69DbyrRj5HnViUaXY4eW7xZDjETJCQe1swQ7q2NzFHvbAWZzzrTaRaV",
  "key44": "2rujuBk3jtihtrqBhdDV7z6CR9w6ySrCxevqcNxp9nBxh56pqe1g3njfeaoU5NXkH3ZSV5FkxNTH4onJpkofaZNF",
  "key45": "128RMiFuLGCJUVXxnuFe55dVnCNzhhTMJ7coKK2ViXpK8iia88iE6Uf6inDMBnddweW7RUngrfSDPcUvjsgUpfR7",
  "key46": "2Y8SBgjjaPuoYMhQ1ddtHDLNNeiWBEbt16EPskNqkwHjZSNQWR753EBmuny6ddJvdvjm7YRXfpAoBhtyKR6qrMBy",
  "key47": "3BnGPw1tvfVZaPHrKhsRD7h8bwUaN1oSeWVBxefJQgYo3Noja2cWtgnogvbkXrgvUD67xur17SZTQYcaH8YL3XdF"
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
