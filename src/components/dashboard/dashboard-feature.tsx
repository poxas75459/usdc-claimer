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
    "2roXw6iAM9pjngCqMARckKWMQLjSQcz2AYU1sQAyXTbxN6iS7MnDgKYNYBr21nDCDoBe5LyZqJqSNZ6dfwhtdn3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31u5iSdcDAm44LC6iN2cnDxxaLqKBmpD6KRM6zfAFNi9AtgSCfgGpUVHHpqWifJS6HMJ9jEeXpGU5yqqpr4ZWGZY",
  "key1": "2KypT9SXvt7QeThCZnq24bCzek4vi9r13cSCqZqTaXFLLiqAY4nzaSez4AMDLbfKtXAMUB25n7LvQqtQXNfkeB2r",
  "key2": "2XHqnP9vgCzbg62taVBXPWMawKKZzEmuLD8nHXucdfGRQDLVQ9UjGdxauKRirv913w88RknY1eV62fPktzLiuZpc",
  "key3": "3otc37deyUgcbeqANKEoDYuoiRoiXdmf464TJ4hPkuvrWv8F9u3aYvJaRfNyCUrDb3DrUv1jGCgN8Ma22WtPJkBn",
  "key4": "4YUMiJG8DMR6GcfUv3WtFmas8MKVyR8FtCpqUr7szmYi9anH4krFkzvAovxJ4vmf5mE6RBsDwvDh22s4rVV4GJLu",
  "key5": "3EMwsnuE9i7tvtCE5MNHvppuJGFySCMZhitbmfv1bjoYhgW96mVtSgQTZhjvxJHRjsAseb2mmae8MaBLg9NJhLBw",
  "key6": "EcocguoEvYTZSz5nv42Bbe6yn5qWV6pb2X6mZEGcye9pTqKA1Fw9rEaXkVPw59Wn5rRGAQxSNpSZDCWKYqDCenc",
  "key7": "4yjyDu5Q1bEFqYfvYbz9Gqpv35sddhbwRQDUUmVtCXyJUnq7pSzTXm8rSjMpFssC9oangB9Rzt68LQAGVUrvUZCX",
  "key8": "2rS7TbaHyyrVMFCf39hcr5SFZe1CKpmN4TDbwKd44V53k6EGR8N4eoH5xGpjpYQZtU9N6DfT5Hwm3CjGBEBdAGFd",
  "key9": "J5AuiQTZX6t3xvv4oTZ9s9pYdMtrxvcQK1ZBH87XMT7qQ3BbzdafmEvQmNEsKzBpq36p99sevKKMp1SnNyEc7H5",
  "key10": "4jMN7fAjSnFgV6WbzCXY8zfSJRcBpQx6XAqWR1KNvknAq6sWh3cZBYLEtsEC8QBMyH4bAtHxcgx7us8NywM3xN2V",
  "key11": "2sSkcjbVNPiWekTzqK12D8aHoHu5hzGFxeM8o8dL6DtGJE7dchrYqisSWc6mh1jn95HhPXFZ6VvXU63mf6RSL19q",
  "key12": "4WxTqG3kvLgMQXjTr7Bmnn8Z8R9eYU4ts5vWVT6PNBKDPi7hsmEwb5iRqudYP8pRMkdazmqZtJj3xAnjpf1dGehb",
  "key13": "4jKq7PQe4onWdHrQFGLnfDRRcPaiJLA9QUWTQaytneMB5DvLtpes68TEYgWyQnxK4m2wBpCXjFyGxs2SxUCQyPYL",
  "key14": "3nA8CeYTjVhNcuMP4zq9P3PUCyL1EUEy33Fjx51WhxRfQPgMXCh4ddMcg4uVGEgGBHxLVnGKVHNDsSyixN2NEmqg",
  "key15": "4o7ej7BwMk7SRNP2c4HcHR2EQ5rU2wyVx964PJ2KqrRz7Ya4U5VKurHkaJVUxt4BZaTjKne97pX5MCR89kennkxg",
  "key16": "36BFZWPV6zzyCFNbprDWL3tpw9CmEYvUtc59jXdVeS5W6TvWEcu9dPxZPWeJNv6YvCs7RygPuqJLeZPbdhec3dhx",
  "key17": "3SRpD7SbS6jDyEh63JUxBx98hvcwDDzjjT9HGLH2wQdoawKUEMKTdMrRv592fqj9n5VDiU7wwbUjEbth4P9DjZVu",
  "key18": "4QpUQB2rRhU4ehhbb3HM1uJWpecU3SqWimTqfEz5x1rGzhpcCq3iFRqe8Duz833oJBJ3BMUAR3DPXTLAdSuJzvm3",
  "key19": "4j1ZEagWh88YHPHrwwwbYBKJCMoqMGDcX9ueX7rF46bnjsQ3m21TpndHZJaxpJhVyHF15V9oJsbYSY27bgs4Qixy",
  "key20": "FXfB7voGpSL1DJnGGPwMBvDKpZtKsdZXq9h1kwm5WoboFFVQjnfStXq16UaWEoCn2vdyT3VtwgS818Gr1dFNVwQ",
  "key21": "4XCEGYRWDbTTyAF6YRfF7TggnPRx58ingwN3ktFXFTRMmc4oPanrBCKUCoebfvq8dMVJEcR9Qyj9fUmvA7YLcch9",
  "key22": "2rZUEzjdFj5CyYpi9614mPjaXtoSmY8PQsS7FJUFNFQNN3W5gkZA1qKaPB6UGt2xUUQtGE5MsUYmzK8WM4qWFii7",
  "key23": "sWzHFV7FLYXomNc93Zqshzjy1zWb96J5N4mEiHZwomCKTcEehRr54VeWcbupihxMEJrZGHYYyvf4oNGLZ3ixLDh",
  "key24": "3w9thzdh5bJ8AxdfquB7MgpPktgSQZZyRBL4U124quaMnFpk8TVZGhbGZC8kmKxUnFGuWsUXmEToNCAM5Y8Y4Qz6",
  "key25": "2u9qamPZxGhj6hNaavVDW26wF6xXSQmAc9kRH53sUHx6xh1hxMSaGKqrRg1nV5VeErZ4m7nqJb6sKXLiqJzXZrMQ",
  "key26": "3s8mpgDqYJuuc7cWnpX3Zgp737NHaxPjLnDiiRRMh9dEiPBVuo7rEzyGtm2ui4kyU8txf99ukEJwW1gXAeyqHBfF",
  "key27": "3mCXSRmL78mpSqgTGPfbTxFhsoR7QYLcuoSBN5FJiL6ewnB6da18m96YVag2LunvxdnhV4jgBQWVPo8s4La9zxqZ",
  "key28": "3F5wnqeCaQfQs6owgiFR4CNWpFXyocxqWwS9koPtGmEp2D1qJyM9EBeWUnjwJyUBh4KMcboJRhpAFpBnkrsnzpnM",
  "key29": "3YDrVa6M2taNmqZ1SNKNtJx2hM31hBk9CpQ273MVyDQHdp4ajDJQpbHAe8sFpJJVv1qzjgPEtZaZyMXpxuMV3SCn",
  "key30": "5AaktQoS4ZKxUC5k9iYNMQmLD3SR2vfdfPx2xPNLBgWhJGivoqnU9TSEsza6BvwgyZ2LiFjNT1Sb3z3ggNoTk4vN",
  "key31": "wMjy2aK5ZVKoCUT6rA6tSTV73qd1RmuLVoUpVeNGoh2aEw1B5KVZtdTk324WzYGjPkJUHY2xZbN3xEBqmEyL8cT",
  "key32": "yh7xnwnGf9xpAbFuuXW89Mpae6fxiwWtcZWU4tNUYuh4AQuZ2r9LUoU2xqupciCxaN8bz6HsWXQBearFz17cZNN",
  "key33": "5CcJhxEXosLoJyn8pszQXZF46Nonv3wrbpqiS27WYYAf4XkYymFCURWgV279b8peJ3SX8wvy15BppZFzJ8qG7eoV",
  "key34": "2bENjEAT9BJCmKHzBBUYpTdtRzfkSjLvAAJjNuw6WG5c4G5xrMECR1vSQ6HphJ95G8dCwYC6znqkfKq4cPUtmtTS",
  "key35": "4NBnBwCgFi182z6wFuyRY28WSeXHVR5e713JRuJvzjX1jDofJGFECPBCKTEKxUtBRxcvgojEXUxgJLayDEZNSH2x",
  "key36": "43Vx6uCBVngaMhAcBSUQCDBi7TTyu7Fqu9a71YhERLdE1bxJvnjaapdj1eodAMUmff2hffeomVDPQ6Vw5PZVKMcK",
  "key37": "LJ8e1GG7iJCS39ftCFA1adceQM4hv2pNsU1ardxihukUvKarG7FvTFwstkpdWxKepV42UrNPw9TjZM9NZ7cLdJZ",
  "key38": "5N5SZTk1WR8Zes4xwYoRUydM2pYj5VXqPit6ytCkTDp3Yoh7XrF6Woc92VCK8FDrxkRtm8ZeWqkFzKtqo5Mneqq9",
  "key39": "3TWetmiqxZ7aB2rAVmk47bk15qwWBm5Apq6seJov1PwBcmQrRYcDchAK2zYBK752u4V33xSnrE6secdDgXKF6zS1",
  "key40": "4rBZ9v2gjmXgaxvUqAVGwq1wdvJYMH6R7XmredtEyHubaqKaedv41S8NFZxfNb64gjS7XqTvuFWp2cUyU13fWF2y"
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
