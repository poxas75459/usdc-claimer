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
    "256x97vVjoN1aVJkADzsg2SHdxgm6VkheSTxMWBjjz5CY77Q3dpBe4UDgWihXKcjWTDHpLiwSscsWjUsEcBNnBvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cZ4YCyLnfiqZT79RXbqUtsbRA6j1SLRgnAjXQ89dzRvjoG1TUUZQXaUiJ3hBJG6GPUtJJ6WCMjyrdYzHG3HP9kQ",
  "key1": "5WZhuMQXK9uj1CDKYdcma5HuLmRtuEdoGw32796V8NvDMMnLYXRvJYns4cjrNi5iA4AAxCkxyWBadGcJRQ9fScPs",
  "key2": "5ptedC8c3ud1DDVHVhuK13cNBNihTxNgzGsjA91wS1k1RtmjBmupvtJ9DkPsJYmRR48pbad3zAtmqQA2dyxm6Yt9",
  "key3": "5SVxyqpQ7vcUKfGepBxQiEfKFjBDyeFfWPmaeDxgrwKR5aG1Rtt7XiyEivboL2nE5rzaMfsHS6VbRxFekMUTveS1",
  "key4": "4SBaYV9WExCV9Fj2b8vA49hdJcjdFvg9ExQJFJDMFHbBQcACrp4U3TUEedMVso4Y6iFK1oPFZJrD4cTFQ4TZSHCX",
  "key5": "4GYf9iUAEfcM5P2QYH2sGZRyfyA4Bm4eypsHamyvPyzPwi8St3NWnW7MqC3XKEAKMvWZFvsku4htQsCMPYmEuvB3",
  "key6": "3Tf51UuufVP4cnKnFEJizTDb8VkmXhmS6NJNSCrkPx6kxkqXmheK7gytxjPkNX4KvBda5JKg7Yn1E7dyTqt2XbrX",
  "key7": "2yyxN8ZedDg1XqnHf6UykXXE18ZkLPCFomPJxSQHx66iKu4c3oX9BzqxZtjTqKuLsscQ6sXW4gWiXVZV7W4FvsXn",
  "key8": "4g7qZVFQ4mbHXpygFSuPiGNSNTxAWvTpC54BDd2f8CpnKFg3sCHpDoU2RpS6yUp7ZJDkpPCE2Dso8ig6Enr6JqQs",
  "key9": "4Qs3QL5c1XBJrUHdbw6mKEUP2dQGXy5rPSWeLaDbTB6ayQTpSETxzhboWd1JbbRDD9zadvLF97brgpVx5ncKsBpM",
  "key10": "e357SjeXr1DiN8CEoaj8AsCoYMVnUF81V5HvbD75w5mGzscQFUaECS42xPJm9pwVKv8uvncBCLkMkMVBtQHoWUa",
  "key11": "2AmSouPDTdLer4KrDRuw9gLAy4LyMHhxeTWF9sFx4goXiANFYU77MPWhuPnDoDSNutodLGpbpaGNjpFN3S5hxzjz",
  "key12": "2u5ikQw8hmVPRextsnURSedcZab6BUfvKP8JBpYT1qCrqttuoFvfQRLe8KKp3j7VsKcsKX6zSvLBQUazcYhMXWaU",
  "key13": "5ATXxGULVpVXp7BiEruPoJdhvn3dtgi4HWgbRJqTkxJpJPiQvdB8FHni1732V369X8XbyJhpztrJkigWAkFX54b5",
  "key14": "aC8e6YEoLWZjN9bas9bHzDQhSZ3XaAFKJ9Zhy6Mfdgf3GFVAKsjDHBwpnH6VMnzgpxyGTnc4HfP5GbaTWReHwcS",
  "key15": "cnoMePepYddPcKj5Ay8D353s5YCR3pDXTrrSPvLZuJxcZsVgFDZTCHAUhCQGaiLVJGqYQe8sdzqPV2ymBQMNrSw",
  "key16": "4Xni25ybZ72WWkmJU65hAWHEoSASRZsvUtkSqQvcgCAQEA7NwLjfDceQB6aLqwB2CXA8L27VdcWhjsBuVZbXMjD5",
  "key17": "LCg5dEpqgsARh2UK4ztvJxUKExpGNNr5iX9om3pr684foNPc8q18X5ahDe4RXhBXJSpYHSRaD2HdxuQYsHGCoT1",
  "key18": "5n2Xt8YxyFjUMuX9MyLH6Po9WnHC33KJiUGcPHdeWEzw8CmACzRf58S1XhqkgGEbsWFBDsD9yNfaLhoQbXJLTPGn",
  "key19": "4wv8YybZWrvUN97VMBs2oHGucWDcMENZBxvJivXfw5bi7a93LSgTeefrtV8ZkjFWVX5e3Q88ZEAY1QMYJgYShyv4",
  "key20": "2ixkGK56dAZCeFK93UjUCJMrkWRXgp6TBvD2phrwmeUEu2KTvKkNZNehaS2Z4eT9i98qxPgiEJmGFmQrTbcodhSJ",
  "key21": "5vwHXxriiEkqCiM7QQRbzWZKWv8kuYE41f5qz3Jmp97LiueR2sYVcoUQwM5HzK76wYXZiDTsdQdYMGCopA7kjqnT",
  "key22": "vjjT4wZ55uicvTaTL966nRX8epW4M7Q9r7Sh1JMMVAjzwRV2nzkr72pGujRmvqNTReDW6navSbv9YdFYT42g6xz",
  "key23": "MWv1h7RWACtNyKQ1EwaobzizhzLpEvpxmgbkn9VBAXnrzd9mY2GKFRp7yWFnR1WdVM6yqdsazYgzVxPJ2j3BJyG",
  "key24": "3sRoYr2wXR1Pz4JPzUERMYAZYSJVMCfFyofJgUJQw7hVcGfDtKYzJ8pSYbsmYNSsH5s294NsnUcRabe3ZwQUYGGA",
  "key25": "52RaX9W9bSMpdZTMNViLGrmU7EoQCRSY9ewsFr44Hb7gnJNiLbbcdLdkr9AFRAvPEKDtSz6ESP5gcZRfDShJWPr2",
  "key26": "ssNNWA64sTPt16MR2wg7pj1UTa3zzXatbtEZkUfKmKMjKYjNEF3PUKmvwRJWzmJg5aDQaw95u4Ri6AExjUQTMSg",
  "key27": "25UjBbtcn8ef5vAW2FDFasvfrJUB5Cnns5RW3gHe4EdA3GZ3sx2Go7Db8UaxF1Xmru2qMK1LTvovDJzXQT8pYM9f",
  "key28": "2CbHX7twJSBBrTUQsnxyfFKfoh6Thcihd7obh5myCHxbAQExsk98g4W46tvjGXBhJHaf5TyrLHA4zHPkdi7fL7mq",
  "key29": "64K7S3tvzG4rhb6g4n84BLqSJtZLXMyb3hmeUxZD7Ld8P2Fk8TPnGnjpscsY2aAmRWQ2vTMUSn3Vm8zekwVhF59g",
  "key30": "64dpwTT2yUZGe4tyVgPfty8FFDb22ApUnd2zV6ow7Pku533LWDkxhoVHjXmctjjbXXA48EzJE1DhDuU6DJev1NXt",
  "key31": "3FbxjaLLY4MQFBKXJepd6oV5KHjnsupGWYggmqfAL9neEvjvs2fMfMakv1pXUkFnMV9SXoYjeZVtLEzDEheTFwdm"
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
