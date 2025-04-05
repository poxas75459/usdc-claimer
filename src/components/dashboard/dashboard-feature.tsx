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
    "32GQPfFNYYMGvaESZMWc1JtumM9kh8t4bB4HK8AA9SRNjYr7i8V81ScLbR423prEkwR9X4ckjDE4QRkHfSAPHbnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cAonY6CmZxdHcVTgEKxVfV4Kn1fBXpf3acyd6qe9TeB97ioncDcDH9TYTMoLmD4JWVF2HWu45f2i4C36GzwUtWk",
  "key1": "gNWmJ375WdHDXf8nyiphK8EfVMFSs7LtV6A8S5tR7J4DrYRpqFkoyNAtDJ5Xa9qm3xJ6D7eSJPyVDmseKwxHwee",
  "key2": "45C2G8syaMgyMkQJHNjMuCCPjdFBawDWXmg4DEQbcdcsFHBtfoChS3eAwRnmPEfBdjcCJKsPBKNo1VRCKBbW1ZnT",
  "key3": "4pVTAz7zYKxv6bGEBNoRbQo15SkavKU37sXLBKMVTKzr42fyvqPCDqUWpC5bhHTwyv3ZQGJQuEddWK1mAXu6aQEv",
  "key4": "29X3LhbCP3BxNBcHnQvYYySvYnf9WqnBs3J218C9SQtf5VimgZjntXvhfDoc5S9LhZZRWPFZJSpEyt8PooiueSNG",
  "key5": "3BREcHZvqtNPF5xsytijf7JzahdkMz9EeZLFkwmJ7vQkVRQmBx1pxur3Sp6Qt7nwpj3Km5HxHQUiC8FjozFiC58r",
  "key6": "4EcXYqGnP3TB6uQ2FVWf9NewojqqBgGbrJ4pM5xqNPQ5HQfFKitWejUzhDQsc81uCuLMXB4fU3qoekPxtQQkJnVc",
  "key7": "4UmYBeiJbSLF3sJ7uMVfQh9KtrsdUUN6Ks8pBqdtTX6gULAUKVvJ6RuTnx6ewTdZnGxfeMVTWdg2vdWR59HGiSFj",
  "key8": "34XZq5XUczmmEHyhkxMe3tvw3xbo4D4LSEhtxfbCcXDRzZKujrxKGV1rAc8mmCUFoDiSBrPc4mcpz1JZjqCqWiT6",
  "key9": "5SNiFNYJZVPy578FtrztvKq28nVjc3hhKSS8bsiDmgVgKFx7fnTvU9gVpRmhtuYfvj8EXo4jajpA3gtxLJk1YRi5",
  "key10": "2LEn4Db25YjNUz2FFSCnpi5bHTvYseSTo6jBLtAYYpyCAPbEsRSoqB5jxbNKsM4jXAUBMz44NAZ8XJUAdez6458G",
  "key11": "4nNcEY7tdc92RupESZna7tPy6h4p7i1BcmZrU47qzcLBtnWAfJ12ABgZfmKmEicNMMJ5Vf2XfNu9teTc6eiU7KTa",
  "key12": "5pXWn7Sp9JmSUjiqid81z6Fy1j4tAuoEnRxPVtrjUMSBUNbyy1hj9WsUFoUL3wz2dtibjQ2kkssMzKzHJRpj64UX",
  "key13": "3jT4MqBttGorPwjdQHbAKCuWjjjcMB8Mau7AeLfmiBJrD3UTRCN7JtAJMjxeGJVwXrA672uuTiuSzYkkUqadHPV5",
  "key14": "61ReBFtStGNFq8w9fpC5esBJQv8qVeiSfiGH1YpXgBEXKugi6xzxyQoSdWqWa63fqzTzhieWJ2UXHsKiWE2SyMow",
  "key15": "5zfzP3gbp3LLGETBcupwpHK6iGaGhNPvGbzjj1hsLtQNCBnsVs4w6bHvRRbiomYf71kLk8AUSevUAN1udVnSrZDC",
  "key16": "3i431jnP6ymxht2pyrETwusif9id1Rn7C68GXv3dhrnmgMUypKRide9bFaUwxmsqGdUmSLqMNDgZrMvEK829Gaxi",
  "key17": "pwbqJjHor1t8tsH6NkX2G7icBS2SuGVduPv6vonDybri1r3eL7yXCPRTEqEauvLR5P7D7Lpc2Tac2Emdd8ypjmD",
  "key18": "bqVqb3QTNzd5bvdqetTndqKnzcRoTbhBMeBYxuXJZVntqkrKi9B7WEUqakLXxQEzuFQVHiKwUXiWEcLCU6e1osT",
  "key19": "EDHSWgo4kftqX26BkCsgUeRszahhgRJfD9kujXSmvRpcNK6q92k68Tqh8hfEujaTFGjjWeff3xohihPiLvVVsh7",
  "key20": "9H3VQipiJtVosxnxHF4uoBZV4bhRj245p8npT7BUFboev8hJcHbWLSSLsSoqnCNqXLY2yba5fZCQ3PKCb2FPjTJ",
  "key21": "3Lx4rCGdhB2JLSqRSJHY3apSkekkvYPzoiU397T8a5tF4RWgDiAbb8bHcAdrKWoBmA3UbZSEYkvBnQHq5Jar9PM2",
  "key22": "4Qvpe8KvKWQrwEsLHqbjEUBxwxvqMVmh6BhV4S9EFCnxCTcLZMzTUBzi6EZTZCRqghd6XJKkiqjapDMx5cwEu2gj",
  "key23": "4jXcYy7DH4PhCHCR7buAo5idsQM9fcivqHYSMqfv93ep9p3Aned7Gys2PGFgXZSQvrC4NVmckh6CCfn6VZ2Hc9HZ",
  "key24": "27gMVeya9hkF7B7T2rXMSLabivS8HRaB5qmGaLTjLzTzWPHgJT6ydkftFJEh1CBvYBaPN6enRUkLGKXWMAHqR1pe",
  "key25": "2mhJtpiH2iciYyhSWDucXiVYZEgjxdG46xGNCN15hpYZqbhruNtB8n3ChsaxWduTVpRXhP4eH95YJVAA8cqQJJLQ",
  "key26": "54xoY8SjsFFJ3KXDcjeD6t1tUgVxGx1WgbuPh5uT8aRsD4u5c3NPybmkoTncCJv8yokmZQFco5NX6oLwZ4am53si",
  "key27": "59Xs7pYGdxgEfaJFoiYpBSfYktD3eVRjf3Z83wcziXiv4mdV4Bt19iqeFJLTwtSADbFpRv1yp4Q5pa7WnEBF4j9t",
  "key28": "49aNdy6eDNp1e65bLjGm968tbVESVnewoShgeZXqCHWbQgquB6pSJ6iTPKu4jbYAoYuPjMp829GZ8muweuuK5Sgs",
  "key29": "2XdRuhYinMqZteFTSbzbPTpshkFYc2XnaDftAyJLqvswtCKQ4enWt6FJ9E481uRgeUu2yqQT7NN79dDJXgsLWDEF",
  "key30": "ppQjfZK5geoYRHDHtfz99BeUbKt37TNWUtJ43zdAH41KPSX5M2tq7qUUfgKDaTgiYZVwrnnaHXH71pvAJYLPLgY",
  "key31": "Fj9DdYEUGqqBg8GSM5BRNprfsVr4ETUgJeEHMpRTrLeYaY51ymCkkMpGQzhzRbBj5xusdsu93ZXXwCRPERKtQu5",
  "key32": "2EbwVUCiNcRk61rh8ND6ASxmhP5NceAzc4SfQs7joJ8EvV9hnCvdF3oLnw11vVYRXwCMGPYRHnsCMgu51S8DEFNb",
  "key33": "5fzhUwGjWV6oR7RmnZ8HRRhBxMejbfNXvTgcu92i6EwRRjhRa3cf42usBwvTRC5sHmy9hS4Y2RsWmDYtg9MrwHcg",
  "key34": "3mXuiiLNPA88YsQXyU9coiiACPtTkniVsxkqbCFQ8ZZVVQVGpkCnAnYP6ZJsvkorzpizGWhM77s2MaGjg3qNvZkH",
  "key35": "2CfXuzEWVUCbeBcDaRnDuUBk2qSGnJ5CTkvRsK6HSpYvfhJAzJiTmKLoNrErFKovxwwsMGuSYqSh2WCVMriezYRJ",
  "key36": "4LZADrqfRvPE8ad3fs9M4TVWrJPZLiWwK8cLA2BLwbJZD3wqzEUzBUC5V1AfoaKEMf4JXe5M8D2vfU81oSLDWUcY"
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
