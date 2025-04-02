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
    "2Tiar2nf9NrHojddLqmzsBFXxnPpAYofruDr2pK7hQ9oaAXTQfibuDi5db6HxEoaSkwhkjrUS5p8vjYJHYo3cxwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g3Tqq64vXvTu31uPUc2DqhzDS6EGVptZt6VrdNh2jvMXFRpf2VS1BZTEVaCKTmzMCpbjNfirnmtUpZvhrwCGAHA",
  "key1": "2DamqA7DXLwDqJhsJNdLHGNTgriwotTcJFa8r1SahfUGGDZtirSjHgGgh9AYSchGCT62Eya5n48EVLXRePTDu1zo",
  "key2": "3gByupbHVQu76u3NNfjEGDvyBBSxdaCMUbQZK6V7Q3hkKnMHcqTgHUUHZDRvHrUJEUGtvhfGXA1P2A61GVG2fYrx",
  "key3": "dcSNzQyusaWevyLCzHDL9FaWPAm7DTfoWakd7cNdDdbrafnU3QVU5cWeA1dZiZuZGKm78QsGvMKjoRkd5RkK9Jt",
  "key4": "qnjh7ZeguUtQKfFW8yFJ4fwsGbNCxpSF7Woy22ZGZMPvbcSv6kSP5pH5drN3XbmqT49L575VH1PKiwzctVucgW6",
  "key5": "2VPeDdrVP85zC5isiF85xRUSnPhb66u41REGHzwfikBd8D11Xv7B7KC41qRf2xwtct56hePYGkwZBPUpYdnXL2pS",
  "key6": "5iN7UHJovYMqjfawLMT962QswJbWfKt4kKEwJzudaHgXHvUEoDvwE3e1Kgiqn2haZmV6872WNYDactMxnsi54Qod",
  "key7": "4mgonxLwbw7t1iHSHvYA7nvTvYDXw45CrMmhNL2o5x7shvUYooTYJmBgfqs5Gzo7tQoZYt4Kj5VUm6mKBD6RhXX1",
  "key8": "4JK1BoT3MYSyngqyan7iCgtC1NBD93Y2x8CAR7wGfsqu9ycsBq49TuUVZB91vy512NvJNZCw6QgHwYfPE3Lgi7JQ",
  "key9": "eSGBsP5j5iSa5jhgrHcaVBiFP7hsYQ6NwwgQZhPawMKSWe8TygEB9stdGnc5czXqA7uqUiBmn3Gs9QdYKuDqXWp",
  "key10": "5C5ChFgNHL9vAGtfD7ctx2jYcEqfCrWyC7A7gfDmsVGjwM3YZNmENfdnoYhpYjF1xWpREGCtEcb2me2ch9tYu8vG",
  "key11": "YaQzeJVFBTXKbyyf9bV9qhTF4aPmm8TTNR4dPpQEY6NnmvWwx5NGoJuQqSCT4weH965fcGZ4NQ7sgpLJHZ8b9vZ",
  "key12": "4FQcADwReSGw4QfPt9abkTz7B1KSP9UYxwYqTeVa9L7G6upsa3foX13XDjuXSb6FFjh9FUvBt2PWroGZJ2imTFGe",
  "key13": "fSVsQLnnFrUk4vmE3EgKnSU9ZmGYez78uNjJyBMis2Uc9654EAgodz6FcY355VwPJxNxNcJpPcWpdpVJxexBomb",
  "key14": "3k67nQvwZvHUhDBEJ1zDJHMLte5uCC3vLzDaMBZCcZ8AKdfu4nUn9LmuUyqgFbLsLgRQbPDk2s2wT9GgfCJksmiH",
  "key15": "2RvXLr4sB6ymdgoNdzenDCQfeW6eLJA6F3PogsUYHWDWLnCgejjBM79ka56SznAjrkxynXxAVJ46Xow4pAjmRYsg",
  "key16": "2dEH66fuJ4vfuETsDmwLhxyU2q9eRrRocJkAtTYJTLhiiWo19HzD5jZuBgrqB3zs9ZvHafAHx9WEgb9br5tvQZhq",
  "key17": "49s5Xsv3eotLRmwiREVboGbXD5kuS4CVuHt9seW2zPYSwwxCuSsLraUMwSWdpwdtRwShPtFkKjQEnLLm1kBoBNRH",
  "key18": "57pk2kLi21RNbcsyCZ8cTUqZbdDupPKQdjnKMieJvMxuUDLcbusqDfLb277Kx757s6FSHQZVGERxVvSUiC6rmQR3",
  "key19": "5Nf9ti1cna7PtjYXfErn4nQSWvmc7qLEYzpZdiVc5NzDUS5kJ2jogN24V3U4UxscFFQN9Xpop7XpAXs8q4RavohF",
  "key20": "5EPjNvrN4HNwsKQATQfW7qco5D2wwb3ybAGJxc4e7vYqURrnbEUE9zU6R8pUnVzzzc2dASVrhwCNicpMiTnGLhf3",
  "key21": "3oxrtfmwX59SUFYj9zQcrn927WDp3CTDQ6Q5Zj57LQCLRz5xxo9rRj8TJJakDRafRx3GkhNVNajg2YuamEYy9RJH",
  "key22": "57eGApj4jv7Kch84eSS2g1nvqV4ZeCHk5anrNUEE1fe2DQaER3xZUXiPZJMg6eC43aUftgLu28Q6f4LmXFsoUGjV",
  "key23": "42C89h1Bifxw8f2mYggKpPr2fFfJ93oooffF8U2ZoS8H8B5LksMaud6kBNsWW4ykuA39eqqDFJhWykhvSvv6tUnX",
  "key24": "39dw8SHZLxKNBNS1HjFm5CU1Z57S2BuaAMbPs6iNLGJRhn4MrsKfR8aeNUZqGTc5yo1b2zSn7hxqVNo4vczciFAq",
  "key25": "4L9mjoeGA8oGMy58LTQ8KzMmKKNvsjC1RAK8UEMFauENNbPTYjaafBNBMcvWAzECWkAHWFDiJgZC7gzS1QXVwduZ",
  "key26": "4j8Bg2uCCUNDd33kpNEWBMibMvEkSwxHvzyi3L5pqnHNbBrLgLpBd2KtnzdzxU4voXe8dHHMxr6xochHf4NzuHZx",
  "key27": "3z4AJEDMiTtZR6qX5Nc5m21JBNegCpvFbovyPHGXAYdUooUXW5rUxa9dompuJAVdSy4qqnZieToiB8p8wD3nYiQB",
  "key28": "5vYqhHRPaXRtmq3H3ro32V6GTAXMnSc9GeZ1WEvukN66jLzTztVvKMLXLpBkHZ6dRnyNZz69ScK4LzLo2dCoQnWL",
  "key29": "4Pvw22oigytPW8bGuGBWYz2gBwDVHqeTPLLGAzSvqFtu5aSUt7ojrsXbNzqWkxYvzE5Ft9D3mU9z19E2eoZw4WiF",
  "key30": "3Kd4Fjp5UFnteYkw39QczpQ41sfgjKJHCheDc2U6SkRhnm55EtLivKYRy6hx988UcfybTD7AtjEyWMdpzfHuErcx",
  "key31": "4Nk6rDfDnhZWh1TY1HW42YAemtVyjQhDWH3Td1reie75pd8q5b3zJ6GiJWNPdVA2JXFZTnG4buGGqVG6xAp3Pkb3",
  "key32": "4Fu38rxBLpvw3BXFWwS5hnhQwwFAY1E1oMmHEeMEgtFHQDg3VSR99MUzSj7nehgr7gWDzhWC5G9b1Gy887nkCHJW",
  "key33": "5quN2UWdk9MTp1kMgMvZ2cTyqFqN9AwTJ9Qu3sRAY956SAQMMo9usVrhPNuio9sHPWsy3iLJR6W4FhPHhotT7Z6",
  "key34": "2fY34UJ6cRMczHGVrXqjGfAjxZmBnDqna5qDficeVWt8MfGS3K8h94tqz5QfSG2RScsuDEZHcrL6ippyKrdN4b1E",
  "key35": "3wtMUNoyMmycuSsazTM5s1wkvAEFLP5UE7PfCV3EiDhp64piTdBbzqXVqgbEjEgyduaqCZzAnQYqcYRYajRKpDKj",
  "key36": "3Zo3KPkajBxCsKmqsGEWZoBms5x6BKrRHALecurq419mj6UKySvdm4uY9bGJTnSd6XRciwYr2S9kwjYXbNViEZAx"
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
