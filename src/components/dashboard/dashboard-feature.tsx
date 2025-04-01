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
    "246HTT2rNHBLEEmVfdjbNPnUrvFcr16S6Dyya7NGVLjUvwfgfo2iYsnjBUrSkz6ZYXzNenHRAScBX2uLMJn95PA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mgKQMf2jYRtkqN9AvgmnxUncJeafEGANq7uUaRL9KY2ddSPpMmNfEazui8MDuHUi8sHRG5EkqZVzUQb5j2r37L8",
  "key1": "3jBFbeqwBn6iB6wCZMJKrHwYSDGQjaQKxdx1zx2e9CbCSzYK4hLe2i5H6xEutweUd9geyAat9NK93NdQzqbYYjgr",
  "key2": "33T4e19QTAE5cWNrzL1Dax8Ra7zxNBwpbf22m7sbHLUmctPdfdMkirnCasxAoYW3hdwdkj8MbCZuKmHvcoet5aMq",
  "key3": "4emWuDNmqHwmLcTgWE6ecwFts86aVbaNz9yRAgVQ7PpaSF53GUhwL7sQqcKzCT4oobbfEHtFBAFSxmyN9UicGhd5",
  "key4": "37gF45chXL5MKrNqy5drXypJ8shLC16pudEpTHFiPgdwUHbwuvVK979utq8frWVJyfpTGcZ1n7eQZx76ZWht4SHA",
  "key5": "3G9RZUFYVeeuxSMjFTTyPrtfgVMVMFbri2299cWdKZZM6TRmJ9YYPEqxPAnfbDAVzEMtaHbucU3cDSJkh9MhtrdM",
  "key6": "3v72vEybTnY46KWrgcFbPcpmgg2nNhmCfW78G8ZCaJx9nVqugNvCpQminMoAh5uNPYkhEst9xC5VTX6moFXCJiEV",
  "key7": "Mv14BW4Fv4fJafFecmyyaS6U2GyLoDLLJkpd9uUveMb6HASmZdmDrt2NK6sZCDPUF95H32r2uUG7bmXjzqkj1v5",
  "key8": "2iT7NAjTx58r5uWhjyppBfTdxAt9zUiiJZirvjMxJ9ShZda8oJEErcNb855N76x3cNo33q5SLWuQCMKJzzwLsYTW",
  "key9": "2UCnMqGWoqrj1RFbbHZrFz2JLhYmHRB9ACamraDy5kHwcEwfUwJVvS9K7wGxWFMtWdaz36eAneeNv8ACgLFXrKDp",
  "key10": "44HLZTteexDMQVo5tR5qvuCGW7rw528pXrCdZnzXKMwRzTAxMPrsbG9i4ebVKaCkSnChygHWhPgvamWrWH5a4Mwq",
  "key11": "33KD8SyqiEDZrvbWpvddyZmaimJfyWFLR1Vk5k7DR6cD2KQDFeX1w4DzLGPhiKqShwsGiKegDj25k5b8HYGdAAvh",
  "key12": "3CiQ7c6Wr7k6HcBmWHJhYBUEiaXVxzjDmciWzaJcQ8aPQdKdGj5e87yjcoYAYVYktPp4B8RvKJqTbz4PZmW3DfbL",
  "key13": "4auEPcbYHunuWbdvjHDSQeTqVxpezbmCZugewob2KTENSNTwtizvko1BeArVn5GxhbvyzgVwuJpXzA1cvy1PYNfD",
  "key14": "2PPaRKPWyp91BSfj5y1YDPrJyXNk8ZLjATAJU44yb8Banzt5sNtkkKt8m49hhac8dEXq96HLRqqYFe1nPJTFAZSS",
  "key15": "3L2kaZs3rR76ghBkgDPr7m87h75qXeqwWNPRY12rbHDz3nVFUboPg2sd1KSuc4PZqNzUYArch7zJsTqJUNTFehfP",
  "key16": "5h4MJxBNdrPf4QdipCvPPozX2Zqqr3AdhpgNY9HVzGgUG1uEeYHpHJyMD7JcA7FCdjnzBNF7TP3PdqhxiqhtLb98",
  "key17": "4Aotsid1oo3tjrWzeRQCQ2ZdSqrZhQxzUUtAyW98PN47tAKRn3sJG5yDxMN633sLJR6h3sN49si64M7GgSta73Fa",
  "key18": "3NUDJkAmk2SrsXRuWRXRjHNMuVuxp4Sw2i62B3o1MGSyrAfQqa7yBYTNfEGxq9Y32YpucWQLdGAeCKGhyNRrfgzk",
  "key19": "47tKYxX2FumPvzWEa7ecVuhssxWVaH8uVijLeZm5siPP8HW5dQMZ6ikQsYAgaJ2UiGnuLWDHpjxiHuom9W86pUeb",
  "key20": "3G1bsKGZp3sKEMaa4544FcenNmm7eDFxAak2tAuqJGjeqYUZA6yeyD6BruscXja34ACK51JRVKGqVFYf4Lva9jrd",
  "key21": "2ynsSAEYVSWG7SUw6SoRnW7V6W9JS1yFVksw5GSsEj2GU1ABP8vRCasCSPxEHJgjb8pysT6qtP46q4Sca9gg5F2A",
  "key22": "4Qg5zS2yD6AHp7YHXGXZyz2guSSm6tohNUyUTacLoGmP4enjPK6G3ci5VRVC5F8M1fhZecy6ss2eizAzo2aVQDHg",
  "key23": "4nokzS8kNkywuvEW3iEkHeFckmyNhPwQaDoVQudiXFqZwBwVrCJoncd95tEeimATfoiWLcrQiRk3bRq4RYku1BVq",
  "key24": "UnTTaMS1sVmqhsKavtZ4B2acH7LEzArUFHcr6Ysz9p185U3epYXzLvYbuPN39L5mmdxJy12nSWpEWK8cpftK3MT",
  "key25": "2tDE1zUZ5gjGYfFdAZYTfppK3E3qkBLSqYdGEmG7QYFonQUQEBztYyJpbSLqyvPsLvLkK6UKKwkCHwco8zeCRAKp",
  "key26": "3XeYvzE1gZ3HwtUxLumuSDxEBxoA4ZGaohf9fNrcfPSixh918agtv19NLH63jsGrcHPNBG9SHC1tqh4SX5AvL6Vv",
  "key27": "4C16VJWxmuZdBNPKDSjipBWTMLqhuQuQiLezzizgBU6bUozAvJzH7Qd5xQDVWmgCytb1sakYUJnXSzSB1oYogKa4",
  "key28": "54fv4GsuEshWd9NfPqwtuomGXSvfavC9KyXM243zPHktVYQfcQSYE6tQMy5wGLS9kXFcHDNtkojx2DqjdjDSwbg1",
  "key29": "3ZwGgsN6E7vkdHPynZ8tnUnjxBgA52khPeTVcgATNigNdJqNfxcvywJjVxsxTMxKtLBreX2do5NLw8Q6qLKtJesy",
  "key30": "4167hQucmcBz8sWZykwsPK4yiKKFPZWqzPGAXfb6sspESxZjEZGJ8AP8AeM6Sv8YPZE9qxH9zLQyiAfhptcg8gRj",
  "key31": "2cpgCB1gezpVY7BiHf8btreGS5uYbJQaS4dEVRpD5zZJTDJTin91kkm3vPSCAiDequ8raASAWyzw8bHRsS6thQ4u"
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
