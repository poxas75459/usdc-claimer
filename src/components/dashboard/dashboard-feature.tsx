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
    "2GQo577SAvzq2pA65dgpj2QYUbmi3EhvSst7En3cUVW3usDq2nUWwTuL2fww9yMST786khMpeFW1YLpDkV5pmLkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MK4tSWRP8neMB9aNQKuQqL7LyupP8oztzJMxR1u7s1cuf8UHTmiCiumKqFPvsvjWZVwFR6c7gdhBzo4UKbCxcqi",
  "key1": "4ohz7CvkMPAGQouq2zKjUQWM5yytzDzpqDDyoGeCX6S92f74kHwBxubZPioWTucsMHQGXsPfhKrBZMB8nP837QzF",
  "key2": "3c2VTfS3DifjDKn56yD4kChA9MwTxhnEe5eDCEKutgpWZYzWbLToAUriNdAQwbuQDXeAcThjcLSSLwFCNHEv1rP5",
  "key3": "XDLDwaoqoHCoiA7Pt2d3GKKfPyf5b31XHgigDPwKAVuHhtVK9e5b7TtPc2tYk3ubfAWJLEy3Fd1NZLS98cCoTCm",
  "key4": "5N4GRZSdvKN4eMXcnNCSaA62E5NgukeqZXSqXpmGHkjdmzJVGbKDEh9F6Zcf8CPqw6zUTM6hLSdqyWwS7BVka3wx",
  "key5": "2moSpzwjgtd1cNAWHfRQJHhs9YHUYoMEgycypdi9BETzgB79YdN8Lu8MLP7H7rHSiKcFyvw5psVVkd9ScTYvThxG",
  "key6": "4nbsTRGs2Ad4emh8tEgiGd4eWecoR3QFJSCi6K7S3DDieAD8qSn92ZHE9fe8buTdq7S1nSQ7ZvzEcjkMyXSaQR14",
  "key7": "5AAasVTyNmgkufeFLbtJXLr5N8z2yL7zLBkMPBuBL3JhZcibgRkfQHX3xMVuiQhQtsLKEDxQnM4NNkzw9nDAKi3a",
  "key8": "4v6Lfd4feerc1i3mvpZsyPV3Ep87WGWELxy63CaUk283J98vwmnf9qHpqh3ZRgYWB4Uj5tCphPpb5jtKXLKhiveu",
  "key9": "4xUeqwjx5Q6fT9akvjy3LgeA9Jr1hHXnjRBimENGLUKgKz9UzBrSu73L7fpQBZhvyXsid2mztC2rCKs981A44Pao",
  "key10": "5j6vAYMVpzA5rdPNjb8JGFZLcpNPM9ViupdpGVC2qfn5uZVG6yfPNdyTZk4J59QYGS2p1hXh8FtaKk7v55nLwgSv",
  "key11": "V17SRyTkaZoejy5uWLmHFs1JBJZGRFEboKYEFPwTTEUcXvZWE34Ej2vvKG9Q29CYPBijrF3HvSx24jXim8Pcmzo",
  "key12": "2QqFd4f6HYd35ykhKDess8cRryXHmMhzh9PQiaoARhG3F5T9c9bYf1v4FkCewzT5qDm7MLU4py2FMnfJL7Eydo7m",
  "key13": "5ZDT1VD57oroeBPCbVZGCdtGRifWFyrNqocvPRZB3SMdno2XMGRUUkdHjdQvbxoSvH7fgXH5SePjCm967CAZEccZ",
  "key14": "32ct4AkZQLqFEURz4VNt4kM5oYWZ19gzokNc4iWHdfQm8oHUh8tEEBntewXWHqtu9Q79cyqcnmRD3cEXTvx3D8KP",
  "key15": "494tN7amMAcL2mGuwHcBmkVDMJHawbPPTXiFqFkb1MDH5UYyKihvXTr9uKxMbcGLGQBBuSYWZzLNp3LfsTXZGJ7r",
  "key16": "3P3rhdQaJeW9XcGWB395Q6tDC3UCBmL27jZZMx7b178ekouzy2UNAooEs2MuzZuCvroeZDWHws2NN7voFQqW9GGe",
  "key17": "4FWcujLEou8MM4R6wEHRXkWoHoSnFSopj2Xnazgo8JutKawRoCFsCCWnFTCU1BJLkoXpKFCKrXDcZS6pdeVVL84w",
  "key18": "45GrkSurtmDwyFkNZBN2BUKEkn9RY3HShX1hSzo6QYbXTogHeBAUFxpZyGScgVC5q5XScRW7AoGYky3UwQ7nWDnV",
  "key19": "5ZMHxae4XdYRVYrNbR15EDNBTiq3cepQtnKHhpgZm6GRv6Rz8gp32JNGEuEm1BnayRV7RiFLYkNdW6qn5ELMdXMC",
  "key20": "4V6n9PKznsErDbvX4kAzsyTRzZXswGx53neG7Vg7FQcHSWJv6NduD7eNpCfgW27aSCa8EAbHCnDKneY3X3fHURXm",
  "key21": "5fxqYdjMezJH1jTBdgf1fcT1SV2VrPaFi5YqMNJYqzzs7q1AyRyHvsQUSVKui58mPkNoqGbmTuwpdZiu55ExhDYZ",
  "key22": "4mjrirwwJn6QZo7QNf9qRf5EGd6rmTXi67o387zqP3T1ygPoVBJvrfiqihatBbhrNx5r2wPfwn8MboZTsuRcqo1w",
  "key23": "45S6jRbUqR8DVX3YV9rmugroZTzed61RFvzeYUDzCTTofwa1h9TGHYxf2xdDnFXd9eU2T6HL13wpQrVCqJ73y7a8",
  "key24": "3boj3Pa7WnNywtye6jVoeNgPYiDypS5S86EHHgGAfuenHp4KZwNxETAEZn6MLZLcGrPFKWkj33tk9fBRqYbWVFXF",
  "key25": "5DTzsn1bmRqi3C6FzwLspepQRzpfZubB4YLFuhWSuFUNwmNc4ecKvbMKdcWrkJLNoT4CXhYiYoE7xypGwC3v5p5J",
  "key26": "3mYNR2huJJ5bw9TJrPgjE29EPhogMwXAMc7wDzNaceyM95YZGTCwGum2nASaiQfsRpAFKqNmEkyDCGjRUe6zhJ7v",
  "key27": "63B6yDg3XxCjwRyLvB1iGGiSXhne67rEdqaazw2sD2WTbQtHjcDU2SAtSgKFB1zYx1SQyAfHu3EpqLAwSVotUVxP",
  "key28": "8gvSGHLD2t2sMiCax1eazmiiJQ4anVkz7mgy5f2HDbDaoPvDzspdKAbFQsbxv9KZZ7roqn7skUV39Vngb1QYjqV",
  "key29": "2qrqirUJxtneJU3rbHHtEoDpgUvrPm9XrWpWSKphUSy3Tw9g5oqHKKqSNFhqYX85jDCX1egVAmU6W75MpxmAtkDM",
  "key30": "2NV451dbtniPAaCyg4syyePJDJxHRJpwHSRhC8AaDyef7U7qoXuzioMNNMwzr2hAWTrbWjgNmUpoBE1uyKzaevg8",
  "key31": "2jSTfNaUXFGUmsMLA9WjRXVDjAZwxkkdLuMEGriMKu5zMEd4ygwNb438fVCdyqje4LouMKsVfdfYfSuZ4uAGgcuF"
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
