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
    "27gbrYgftdh7etLWcYjWQBubM97Kqa9j3LmGuvCN611YjwQPPywfpZJhzqExAhPfvfDc393RJWVvCQvUNC7aotG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DNHUqcqqXHVWyn9QSBZ98HrRAsZVGebRJqN4BoSTTSEU6danxZFE91mPkG8VRW4iZWJuxCiZgEKAKikcs85AHh4",
  "key1": "5Fb7A94RL38d8dsy5buVmUvu6BwNCHdn1WJvEbix4VtaGzRHmStWjEXumMH6RxiboTKmo4cjZWQkSG5fzU9YbQCs",
  "key2": "3UqNbWqK4g37iyjZCfAHCTEKxGLomKEtLArbHgtxTiDBixhs2usfGGVtmKdpTeC4MW1i1MYxwT5kpFopngb5wmdB",
  "key3": "4af9f7Luj1krb4KzTMMzZUZfm1hc2ACvKgbBFwM5oLqscAqEgKn3VFbELzXua8nUcruhTnsGumX32Nf6qsTBbdyF",
  "key4": "67bKA9vGHH89rHpzp3fdDeEGSrtYfZq4cZjaiDNcYMQNMLCrY52omhTwNcZvwZpj9fR2ZRgRVt8YzgsuiHd5Xd8Q",
  "key5": "4ujLidSd16QEwqyXK7HqabdVikdU8dK47ZEeA8AQVu3xnfiPaR4oHg3hvHT9SvKasFC9ZonrYaQRoUm6nQJ37jH7",
  "key6": "vDDAZmjLoMfquYKonaeKUWEmPXsHETpTVUaCCZbc5yQzCX7DByxdYKGghGfpWZ8efK3nGHU6YK2U2YGqZu2vMc1",
  "key7": "2nQtTVXRQerAKnG9mDr2Xbdbcc85WuX29EihVji8stHFBtJTogh9SDQQUbVc9B5zL1YtoCqWm3MjBwcBBEyC8ewk",
  "key8": "3bWNurMXm3jBXmRFsKAoDtPF93c5x4dXQS5bVYuHwSQMvNToESjG6UDRoU6ovizJFW6iVNDgxV8hmw7zn2wk4w6n",
  "key9": "34y2Z5qkQWtEVobBpDqXW9CQXH9xVzCiRHwMEdeAZmkr2ACSZ329GQXNVFzrWMp6z3iNiVj1J4mw9nw6wssXXZLF",
  "key10": "2FvFLAKQ4vPUzsa6h6PktdBsW98JdFNwR2CZ8EYFgSgANmFbrtJWcbninZ4fEUMZ7ggNdNqskesdfDJ4Ss6WcWzR",
  "key11": "4HFH4xS9fSk3rEr2nGtLx9dwAR42hPRhZaxyxkd4HVB5RKBQDQpYUf9b5NXMbTsYuiTWTER3Dsn1GVDDD5119R2m",
  "key12": "AZHSVnaf6RMaAocUy1ReeR3WaqhwicvoQVWLCbgMQfdEcQpaeNhb9E5g56rkceHHx5QLP7GjL4CitHx4DGaYr8j",
  "key13": "2VWQcVVP3GWGSTNZE2hMeBq9uCJXdv7gApGGWCPjf3PVPbabrn64W1fvvwYkQKn4qDYAy1Z55xCfitqxFQEd2gXf",
  "key14": "2hA1paokEczKxuusgfaHMMrEn3DXJAHKhdG6t2sqTHju6FtNQf5dpaZHnjPvs7Dm1RvQzmBwYujUSDNLqtewCAkR",
  "key15": "4R3CEs6QUsub45g1CybdsYjBxMWYFjvc6tLcUP1LiJQHwHJn7i33Am7gLkgizTQf7LsN3TB9AhHhURMySddECBv6",
  "key16": "5qTy22SdABGueJMj5zo3DLbutxc2ycVHSd4asRwTQMAddyzz9AWjULTcQJdzLUQoVkkbctaYycPypaWhN52rK9RM",
  "key17": "5f9atnUDsnmxQNtHvS9HwaF3ZT2yBjjd3zYdsBnjzFiz91NEaTsfsiBhVELx4J4jCh5vVEppyST7XZvKL6Evp6m9",
  "key18": "5oB6pgMV2BC9DpgebZnZb9DR4rAhbm23K4PKzDbaHP6e3o1ss42mv2Rbo7RPKuggqvwnWfYLK5ycJ6kgozAgZZtv",
  "key19": "b5E7XV2dzSDdSQuP37sn2m7V3xijyJ5cEHziD4q4JYrXRCsSZYReBDqgKrZPcCKhRvN8A7HaWdLtqtRmZ3ouuDu",
  "key20": "XyK7MUPqGRf1vsUXe6yNmb54QPNJP7g2J89YQoBkakfntxc1vJ2Q9mEAxuDWjX7mv4psFkvoH6QZGW81Mph6Z3o",
  "key21": "3eMqY2xVSLg2ZrwtkEwC4gmAjU8Vz8ibhEXwpDadCpm66AYp2GRCCoLNggNPjPVRFgpFU4FhQcFDdJ3sWFqZg4Vi",
  "key22": "4sj34evzksC9fWTPsGS8w2Fts4rjGVZQ7gEeNsjxvdvTa3A5MofZy4QtonnZhwhsj4jepghgV2XuvuvVyayThHCc",
  "key23": "2jRS2D2gQRW9qcQzdcxi2VURF6A2EhGmpwZyh1iW814RX9PmoTtNkVxkSFVqRXezpackXPBdx7MJzmh51H4wbTKf",
  "key24": "3nZG6aqeLxsCYPjqJnhE18xxtJagjQCjUxwFc8QGaSUB31gc8HXRSRN5sgGRQ9N98kwciAD8CLkVA1nvF7pNAL14",
  "key25": "2Bo92BKeVj1JmzQGhuaHsMs6Hjj2pyY41byxk5K1WM9vz9VpQ2KwdYYeSjqaQttKeMogi1cY1frmaCMXpm9kRXMg",
  "key26": "51ghkyQBY8zWeDAXCdGVfCdoU2tNFjABYnBmccMnnM5k11NmZeyo8nF7r3kkEi4EqsAVEzqkNjc2GyzwNSabsqbc",
  "key27": "3EuinQKcERs8oyYTDyKMkuZ8rdyhmtYFT8xFUzouoqnVH2KjrrAez7RhgN3nUQmuz7xucxpAmh55wL5rnSgghBZ6",
  "key28": "oRMv4p9SH6toeB6T9Ns2s5JbBU6QoiFmohBc6GYfms8ciP99k6yycPjuihx3KHdH5BC9FXLvg9oQZiozL3oCfMR",
  "key29": "5Q9mDmdUhW1wez1MUaNggM9aLgp55SQPjCr5BYbG631VW6tzjKU3DU7Whe4d3pnazFNB9CydkyNC5edL2f7afnV3",
  "key30": "28oggmHLzVepsy3Qsp17ynhigcgop7v4zdfiErnA5Jo2N85u4aaaUpCpzv9ECh7jTHB83bjJB5bGDhBV4T2irjYF",
  "key31": "4VBf62F1Ungiyy6xHhuXhaCrFPwg153gcXCrjNXS5tUYDhK9GdmD13HWTAxwYoopvpWsmuXQ6FhbAHmRmJQh3Juj",
  "key32": "26gUmmKoofEevP4K7GvFmN4h17Mm14RNebngrUnZJZzgJYCGXWafQ11wTun7jWzbUQLL1brb2GgcGmBBN72zHCaz",
  "key33": "Mg4eyYGAqryECJJQmNztUWo2L5pJh1v3y7z8eExAxcV77HdC5TC7s8hZj75g1LMmVrToEFgLM8ZiVo8VcDThLSQ",
  "key34": "53GhCNJ3JgmGdBNUBeJh25oKzASEEhjYKjXAXfuwsaHyLWob3hSTUswHjEozKEzgDWN2quYG9qQhydM2idHZpDU",
  "key35": "48WhorYqabEz6ETM8iCLtXL6mXpfk8a1FMwAkFdmiBqc2NKmfXwVhG8ARzsuJXpsM5ZijGfLWhtickAZJpLZJTR6",
  "key36": "55svARNpZhB3aDezcGtiHQjmPWyhPoTcLmQdqr8rAHDJncKP2mkepDyhTqk6SxFPzCixZ8SRcUNrasihaDgdEmSq",
  "key37": "1ca5QGDnqYttWAMp5HSYe4MgBngMBNxBEJ72NhDmr3yio3AWsXC3VhWAPC4iD5aQAbHq97N7tTg6r5nyycMDTQa",
  "key38": "2fTLPrefxW4urbeuc5Q6qUpRP32DLvM7pY6BuyeLi4PiaH5xcY9cMmyQiZD4xWML6wGwdHJKorQK9q9NkKcMCzyf",
  "key39": "ckDwiL1vW6uS9YagLEdNiMmdVv43zLK4eXxgKeYD1b2DxNEzERPHS6MDzduuKY5PGFjBxXWZW2GckzpMjCYgnzW"
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
