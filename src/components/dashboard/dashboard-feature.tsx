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
    "3aVGknK2cGjhyLrCLdu957q96Sc2xoFNKayixdMJaqRd9gotnLt645gThTkDkRA8er8RrKoL151qKEmLj7duDLuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37syoFz9U9AhXLiKd5vZYXZ9aLXRU4fHZ1Zo4LpWehXo96VR6qjn2VcHYdohLEuBFLxL8ioiAB4CrQQoc1HzQmHF",
  "key1": "2g8AsM2u3uEZo8h9qLJEtSpJebtv1e2oxb6Px2GYUmU7Z6Xvpx8GFsaV4pr8NARiW8ck2vBMLY3vik1dtBzo3sjX",
  "key2": "TbjpUZ7KaFzAeL26zizFLtd7hnWYqFDNJ9opJGjHTJXQcbkvUefX49KCmc1iMPvWiuTbmJeZSNjZLNd2bXK9Fd7",
  "key3": "57mkkvN119vVtSWP2MKbmf15VdCGoSBgivtz3PJhgJb9qaeFULXBEWVMm2U1kYRR7ipApDg3RtLEYyX5FBm6VgH9",
  "key4": "2op6BnJc4rr6X5ff8CcSg5ohyKzwsxdsETxJq7f9CJ7ZGgSG7Fpv6jk6sipEBLQ5zSbF62nUbm9PeFtvd7cMJ1xS",
  "key5": "4sMCoXPejcVVPKjYpjRmyDXsjnFZiFFc59RRdzCNSERVmo3PLQueyiBTF97HGgzdzMTpySxeetiZ8CAHkJq1RuMg",
  "key6": "122EEoMWZj3a1R13YxS8B3tLCpZYn3Kt4ibbxycE15zNk3e6xHe1ZbdzvkxgmPms52JHpn9uAqAtjFKjhDCrGLpk",
  "key7": "4oZieYbsYtHpwRt8piabSf82eSADMF9PistSonTVPmcbFLjpWvmB6PxyMTF1GayzyMhnxoDQ64wWkHb7w5AHQzes",
  "key8": "3zgWcewCiWqYv1TqDk6Hw3U38sAUB7isagucyVgXxaQQQ9EG2w4QsyzDz1KjHZGxFYhd9gwAD5hWqaTdtRpoHZff",
  "key9": "5d6VTrB4ayDdSS3xT7a1miZ3RDmaMSGuvTtN9gC6ur1MubJ5553K31m9Wd5KTUqc9mtQEnSx2cWrHu8CWQhDHmGJ",
  "key10": "2o2CbM7vPKspcD14uSy8Tj7cTBXtPpTiZktYPktncvYTt2GXyNVMVUjvMKm4deZ7wegu4n9s12MwvEeRKJcpgScE",
  "key11": "4Y8rqaXXo2pW5VHhcUTbbZXo65Hhkd7jRza3qwtR9hY1GFEyCHhYuLaMWRLte66ox8R7HmfvBUrJ6MYipsa98czv",
  "key12": "gkRX8vghhx7393EXcYAjPT8eSzrY9GRfGcbUVFDm13bcRUhNsqdJ7RFuvHXPc6bjcwfbCJf41hWrpuh2wMSDgvv",
  "key13": "2PRSAYVHF99tDayr9yCupXosiV1sr4Tt5PJFUXiHxkrKbGNLYZ5KAKPGTvepL3pdZ6NwGJJMpb9APgQrdEWL3qLh",
  "key14": "4GiazyfYNk6oYCusNA64Af7jcARCFUJ38tbbWBFXtStCAQwDb5kaxJzGUaVfpXHAutQpHgkeC4uZaCDGB2YCGAxf",
  "key15": "4hLrLCrvgHASUkYMYppRjztmKxSdqpX2QHR2tAC3UCtFuRxr8vxkyZqHB3xwwUaFAC1zwoukeLoJQ2cfqNAaviu8",
  "key16": "3H97sSEGgekngsr7zpmaofqgKuxayDVjQhaH5WPvNiJ5uHH8kRFNranVGnEPGZ6o7ZMQ2bCCvtDa96qgVx7615ZB",
  "key17": "43prZ6NNuLdR7RgfZHWVF6QpUnHb4Ejkft6FQNYhAdu4vn1oFVeGQKs6fUxFzxt6sqAnufMZSnyFkEjcxLBTdm1D",
  "key18": "5E6exisJPbz1fGzTLccEEnkLM9pZqsjaCejimQq6HQDyhVw5RZUVKnApB6cXuAX9cYjxU8i5PT6fSgnox2p5nT3Q",
  "key19": "2v8zt1hpnTKhSYQXhkdcjmGcZACUH1RyFWjGmzQwG4VnikztPszxvYkayEK1Zg4gBmubVXTYu2CeBX8ZtYqxmCCZ",
  "key20": "3YXD8HbvVP2L9tSEXwV6fRLKxNCa5Pa312kupibUiVh8WcwC8K5GVHT5ViSKA1688riajovX2dXzxRZxiKRW22vu",
  "key21": "4G7qoLpv61X6xXvZmJFDfaUXYSEtDP1W8Uz8fc4UX2DkEcHrzgc3ngds6UMQiqnfBhMroPgQ8comabZVBofgLUsh",
  "key22": "65MAavuwKm7EpsKQV1Cc5v2UZf4KbdwyR7UueHQ1VnpoKr87CqBCefMV7YNbZ4TSE4ioGeNraUnpAmK3EE5yaGeo",
  "key23": "pEHwhbSuxmEYzv5GgLZaxmJMbLNrXJiUYW8EsARjXtuuSGjyYwdPTXyw2Gocf6GLEG39BJ6khH9CJMA9pUzHUJ8",
  "key24": "oDNP576KqodvZj2L5HZVHEqkopiXXYjZEFxxyjdLtKCVV3qaWwr2GrmL32L2r9SofDbDpeRsgnudzgHR3Q1HKcL",
  "key25": "3UpFZYeBeV9ENzrE3AAMA4rGGaoPHpZhNga3QfHuDexTAqNoNhodHitH2czdq8G3xdb5AKeTNUQnTh8rpEdw5QLh",
  "key26": "5pFqUuLqJVL8XwFW1VWBEE1RMXULrWX2ywwS54nwtetTWQmbEGrDB1aJqiWR4WLyyvpnUZ9ZWKoKAu7xGgZizzUC",
  "key27": "4Q7hksLD89S8GWFGMdjoa2Lf2fKi9c5DbGHJ7BPqx5uw4WLEKNmh2N4L5zaKBAPhN9VyCAWBtY2wT2Ld8owjCux3",
  "key28": "3JYERK12HKasTPYWoiaBm5CUTYbJimz8vFGPGDrG8StfsdUkSoCveEbRS5N5KqZiohYNJrRkvR1Sx8uXhtf5g7GF"
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
