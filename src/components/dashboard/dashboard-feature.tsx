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
    "25aopw9oHNM7R3tPe9hZr4Cerg1EXXfXtbxhCtAB1A7FoGVav6MJVnNNMFkPB9NHxemciiMZ2hoSdpESzGrF5wSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RF66yM146zRDTU6SyrWoUNZ4fkoXDwKWmsHJLj5vArmrDaui8TFbN19sgbjyMhBnx1DymnBZpBpbJwndwUnxBtf",
  "key1": "2k9khbso5p2LLhErGJ6njtmk2S2khLxvvH8ANcDiHgxAjBeLVJEx1nPmCrFiyxNPrTGUDtyVTLtKCkJJCJ3PgMLa",
  "key2": "5YKL9NAVf6SCdBotRqMzY1wWvvKmgsvzXcVCQBhvgCoBjcjgtZbkfytKguaAEmLfm48UbntjG3vosRuqqR343sWo",
  "key3": "5mdvu3grGACPhJjzU8mNNk4bzcMkrXXX6m3tr8NsikAFNkLK6cz4PFea66tkUyWGdkVeRMn8sBoKVUeEqcuZbVZF",
  "key4": "yqiJNs53HNox2raLFSquFXcMdHXEedT5rGQhD5NyBbc6Q1CDjAebTpoat7Fi3sePkQ5usMPTNGBaFRU52TwjETk",
  "key5": "2QzBGdLSRvUXsTmf5nW8Me68xomk3AJENHPnXFEjiZzLAYmNQqGHz91hAMkSQCzZuBTf5eyHEgKSPHaMJJi6K2Ax",
  "key6": "MrakouJcnBjn5WFRqPt1MRVHcshSHxRPCZyAZyRQJCM2WsENdYKhFJhac2EV2ZS7Msi6pPh3xbtKkYtCfbx3r5C",
  "key7": "5UYJhdLSQW1tMMQmaho7s4XMJRaUZJszsKJUS7JQ9CjUcd5z8Pyfj5iNEDBdGoQVuVkkUtk8oY9Kegg6FSLYdnFM",
  "key8": "3DX8Ko1qj2RzwSjxXBd3UtqpFWB9irYmZa2dmAYcs1vWvpPrs3yrTwhyYkQC4cRzCysR9vxF5NaVmJkkWrL3kMhp",
  "key9": "Fz1uQCBeb6iv77paK8NiiM6ZkThjxjtPXddws6KQGhGJkSuh25CzEdPzwdtwytieQN8qZja4DSKqdBa3m3xv8p7",
  "key10": "2S3vwGVqC4JsoeJbxdLbgiWYdF3EDBgyhBSUzcByzvRSM1eudu4HMwmqur7E8JM4hRvx1VFLZQNKvmm4vpYRr6AU",
  "key11": "3b8ocG5zxgymDbL4ijXWsAbqhhzKg183wCD42e5kXKQdvQEiy11teZw8SD9oBrJNC5cBtqe8orUX7GahnXfeCmQQ",
  "key12": "3eCJbM1oy248fdULSZQy1FGF298ryLF9sME7sys1boUxoYmJv9hC5avuAV8G4ESRWmbaxaZrTp8NcG1hCCEVhCHu",
  "key13": "5tHkmT6667gBm7o8UWzf72gtTkT42B4UM1swRVmQVoebVG1VtroZUMH1J7wWTi8Z8ji3TZguVHhpUpesZYFrr61R",
  "key14": "4pLpQqd7D9pipJf7sHvq9ghM5pV2tj7MMZqMivoJUd8GJm8EqNLh8tfcpLsSMd7TF2cVWg78969VeuSuPHKj8dq1",
  "key15": "3p854yGcmDBZqdNYJ6hpUTxTcrdCvrJ7K2Qx1u8YfHk1YoLb9QQvNm9cAmacYVwjN42R2TgzbMnbzeG1GVn9h9HU",
  "key16": "2AWSpx4kcxfxWWzpMvBnCV25MUmm6bESu3JzaS3ZFYm5oHb9WZoRudanSA58NKMwQ3LA2WWr5W3gbt9n1NuJ4ULN",
  "key17": "fzysRyuQVLtCemcb7D2a3SMx3CupK8rD3w9rba3vB4S8KzEa3r3ADBtKkRhWPW9aGx9unZqBvFU3iAbTUjnvotm",
  "key18": "4piJ7tM7Js49bpiQnRNF8fadmNKHjnScE9MnkkAifAJm1SvouZS9gFVEXACup49GCLwcvKCMNp86LK9TNytGkR6a",
  "key19": "2m9TtikK9xQJHhw8K5HfzN3aPZoJ9qdLEQDBSffco6syQNnNabLFYAWPJZ5pM4dWxbHzTSKYeKhZZoaQ2YM6nxTd",
  "key20": "3dxnTQgwZYAqYmNBdFSgUdyqdNdTbhvWn2pZc3pmhGTtUGjRdWvWuuZTDypyxbNqaZrGvG48Wy4YkWLZHw28KAsH",
  "key21": "41SrH1UCLGp2gYZ4SDjHGQNwTFjnF5ZPy29puGyEJmAnr7pSxG6hgvDQ8Yd15C1uof1N4dReMiQZE5yWPse7XWiR",
  "key22": "5jH3tdEDp7Xo2jGZVqyfSSEKqanYF9ymt7BhgzoqVFmhDZQ2tLC6fMDhaT1G5jcoxtYhjiG6aCR5H4uot5WHkpwD",
  "key23": "VYVUhLcCMuwzae8o27KXc8C25PKvV5q63s5nX3b8rGYXpJdn3uNwA8VDHMr6A86UcpY1bd3NK6eCzNeZjPfFfac",
  "key24": "3oLtcUHRSVGFmQ9V5F3HcWr2HsDS8bMtpn1cDm1iSM9cq5CX7iiosFpzVj2zRjmKJNcWUym3iBZVK75ZUoeDohQ2",
  "key25": "dDLoV4qRnuKKJrajaLdXcq5QKDzsLRmByvWEhRg2htbP6QZgna2NcVbLpcG4iNzKbtMQH1R4QYR3ykMnoR645Ax",
  "key26": "3x8RsthSxkpR2k6YSeiVDq14Pz2osSzNDHHH53dMtRhW68Dk36QqkaBbTSEnvHNS9C9xMFYt7JVfTf1LukT2tJ9F",
  "key27": "56GB5JXNRmXT7rGk8Lhe9eVs6KzuvTYudSjdXkikuNaRAifT3LDVQVxZn456jpCMzewPJhbjXSDfnGbeWr9PcWEC",
  "key28": "4AvHB8P82ASMvEiPBS46n8uQhbNFa7YN3hc1nerrAMkZ8mw72DMy6GrUq9fDVsZwLQJNfNK7fVLBibaKVTQBxA6p",
  "key29": "M3r5rdSUzDY8SaoenDs5PnwhAzAQiE8txQNXFK7xnRtpqFnd256GdjX5EqXuemFLpQJLLPaQcFtTF2gUxuFucsh",
  "key30": "4XZu5mMN2GzndP2QGq35BSNveR59UHUjCyc1Smvh6CKX1rc3euBAn9yskY2M5ieuwebwXmP1Z6kk3HXh6i4TcanG",
  "key31": "TLQ2J5Ydai7beQxs9aPahJMh6uLqw9udjTCbXf6phHfGeJcMLi9pVJ5TcXBHBYXRogJWHC4xzLZfoakhgG71ZM5",
  "key32": "N5ugYGqmiZVbiXra6D34GE7CHaab2szQKyLbort9Zok7Y2hVZ3dmsA6qar7pbPxuD3s8o4ZXJboLpzxX2utrgzh",
  "key33": "4aum8z8nQGmXCdFsd4zYMxaWM5hVmy6qVkG8Y7kr2VnEdoNJtYQmLdddj9m8P7pf3x5b7dzpnjtaRBbtdJXDF8DM",
  "key34": "4ssWrZrreCU96FZ8ozcDvYfLDVoRh4RdBZgnKGX7ZoDt1FM88TfYbEZYAFepR9vQVpKYv5YW2uvJZAi8d28d8AW",
  "key35": "56UGwCym4fdgfm2uShiej4iTgTCBSY8DhhMVc4ByyeczvtaqP3CZw4P5ai2r618q6PUHfox9aLbL1UG5V8CXWPE4",
  "key36": "2omjCHoxEeaFA3sNU1gYJBekjuHBaMNjbUxixFJ8inYTB9hEtaRq3oWQ9DLzCiwusz8XNippMeLkhMEoK7Tjur6W",
  "key37": "wJSHqC1MZVo5FvPvMuKGCBs3SsNxxyCksk6w5hYyBsKtFrHXrwQJB5mfAMDRWpX3Z5rZBRpSJMxej5JWFG8AWsa",
  "key38": "5RBHAUHfQJkyk27u8aGG3PFdvVhpXnkZ6vGogNeRouZAbtKC8KE9MwAYA6opPwaP2eAz83bLF8nzmdD8YqMCnEZb",
  "key39": "2hD6cJbv1F5ptUbczaG9CCrxLwGuEyHweYjUyDgy7ZaLZVtKSSqaEyQmrMe2H1T2V6ZGCoUFnkr8eVZiQPWoEZEr",
  "key40": "uHar1digdBDXqACYcAXjm7BVAnVGvJQuNzXJTjA6ThQHnj6Q6WMz6ujgvsrSUnWNdF88VZ73FWgoRXbyDAwAbUs"
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
