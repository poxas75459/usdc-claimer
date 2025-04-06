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
    "MbF8y7VtnfG9YNzHQ9J88fJRjEQEvBtFXHYoddPRomPwDn8xUELqALsweDRX3Cf5rUumZU8G9VuSJcYxMAVkA1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5esPU8Rcm2N9jHm7Qh9W2yFxDpkE8DBwPX8b5F8PFwh3fghrUHCktChLeQAAh1Dz1sPHWFqmW4QTPe5BW12qwnkY",
  "key1": "5d2QAWqufMeutySG2WUNSzJzPDmyqX6F1oyYPzmywZ6uY5mu8MDacyM8Fo1z7d1TEtjH8Y8UygQAogX9odzPBcYi",
  "key2": "5oLFMeFmFDLYtLQiUUqShkEAViJpGs3bJvXYcJHUh636JKgwSastNzY7F6fskZ8eEBm4ZansYrMqheaMzgsC5HaU",
  "key3": "3TL7tvKpYxxi8aufQRvji3s8A6PiLad5wdwJsWJXhxJNoSUQTA1Z5SDM9CM1tHuo4oWcMD6eje8UPxWfFyvwBnp9",
  "key4": "2iA9qdYYaRHN2agJMG3mBEVC2R85tjTY6q6mZXVBN4xcftLCga5DZmCDJbtF7p6z5D7ghossKR4gLhYt6QdRLii2",
  "key5": "5QEeCfmJwanbbpMBkffbC1kcjYQAbuoUNkjqYdrwQmBEpoDish3tGHPF7jV1w62KPA1wzyXaMcrvz17X8tSGBsi9",
  "key6": "5dcPtAMU9R8EKwxcCe9E8mnmEDY3bkaCWAqatt5MmdkEuvpUHY3FYVLaRCJ2gK15BtjeGMgFkBYzMctFXuiVe3kS",
  "key7": "3gARs4VNUaiN2CbhkHzNENvgx5ejKfLPAGYz135TtsNtKDbqjd5GyDuD9pFqZonPTMMXc55zR7a1NKaRaEzwZcFA",
  "key8": "62eNUuDRcWvwMCrVf4NytccrXjRWuyFZFnreZqvdjbvJdftskTEM4PkqAqmWBLjApS4Px3iKsDu719B8Xc12zgic",
  "key9": "2UHUPzN7joxJi6vwzRoV27tCiMFufqmf2QWyTnS9UVBkRnKrhgoY8NpNGGVUdnGwPLnoE73AFBzRQPBvrYgokhgU",
  "key10": "2msGs3rVHPKaURL32iEWdBETjHtChtCkeHqpmmnDnnngjsoRA1pssZdy4d66Kv3dWX5QoU26Q4Wp3ykCxYmnWbCq",
  "key11": "3HJikAFudoFfjmU5im9sHuFSozdVjc4c3v2KR5prSAEREdEirJnj8xZPNLNghyagheCJT3HnQ3k7Msbc2EYxbHZ8",
  "key12": "2ef1YnuV8fKEb1racUi4XnmRyemoUqSGbe5gim7Q5Q7Tp2qDtFRvPcnQ7eyiMGoUKGKJTbVfsRe2WxGTJJpok3P7",
  "key13": "665EUZdmLj9sUxZBkwYfHxDcgE1HuDan364vjqmgW9yFgwXx9ztt263qSg6NBqcaRqzXsqFFcjnLyvNAeVW6KCJr",
  "key14": "212hxQsmV8N5jAyGVVn8FmjYy7BD5a5M4UocufcUz7JRWLDGaBgUmqTYApF4nnN5wTc7eMt3MZnLERaNncVAHZRL",
  "key15": "66aYzud9fWjwoaozy1YndVft3PKzW3tcWr4Kn54cVfKRCNbUXjUVp97SYyX9sFDiV4VV8KrLDU6631pFvgGzsEfg",
  "key16": "57BWaVEg4VarBXBaAJhdqV9oxo6NZfpwbLeZo328vusHY9SWgXfiJFTbMnkBPYn1nsYBDdC486TJjV7VtWKBnYb6",
  "key17": "54aGkagckptAua26MonB1wvRNEoYpZhE4ocBZ73gxbYKqgoYN6d7KNjz57zXDpxnvc8nBYzmFPpJPGwKooBqegEn",
  "key18": "5AiLkvQUo6ynCSKnXdAjK14REAcx8di6u1rxKxh7fZQHkZ6aafR22Y7PRPFeTgGpegiZYXh7qpk8WvgXqgu8VoDs",
  "key19": "54a3776ynwG4Crm5Ju2DZZGn1t6BLdLbEYWbcZzJnp7hn4FHZfhjwZzAqY1hxsZQB9MVQy67szSmtB84PepYQWQa",
  "key20": "2dhrbK6ynPkQg2Jiyx9jazTMPUWTfxCn8ddAiHodG6DyKbGQtN66jeW3BDrqtDrmkcRCnnvHQqGD7csy7TeZtcEF",
  "key21": "3ay7LtTGmd79yTQAx4J3uBT7zk1EsgzvwepPEV5njpvyHYU1hRaUw9QjzfJEHGwWAz6z2Xc96UaRiJe1rrwxs8Ls",
  "key22": "3f2MEcHSwKfdprCwzxkL6UdZNNS9E6N6zSjkF5iJB75kiqBD7VZEr1ttx1cAet5Rf35KtLqVXghXBpC6RugXuzN1",
  "key23": "GetAombP1r3iRwAjsKwhPrj2o2hMtpFdvdjbhrS3ZCpYkhB326sg4shK3DmUpAWSBHJBPEboeofyxMUioD8C4mE",
  "key24": "4KPpU1Zh3bhpr7QCvH2p8g9jARfWyz8ZVx8qsorhbpXukeie3wv8BvvmhWWVumzvaZ3VR9F1Dzq4s818xrDAz5WM",
  "key25": "4iaYsJxivKnGSrwJSYb2iy4Bje7Hhh7L8Prbx2beRjG28zKoEtmKBnSgnEivxutAunushC8gDtGBWZkuLGpiap9B",
  "key26": "NNv5uZWRZpd1m6htx5PEojFw8VjnMKWtMsKDuVsNHPhkCfyYTCidiY31JHwsTXENShteH1wbJmNpWEw6vVy18bU",
  "key27": "2cusrtChhFuu7cEQUUyFRCGYXGKAtvmeheh9LWpADSAFY8haNW8gkftNvxCpMnVPisdnTmSAsxy8CoQtoMXuBRdo",
  "key28": "5gDnTgKEjuUdQdK6JNpAnQRFvWr9oYmvKAz5TBnsjUvEixEDCFyvAzsu4fbWKEz1XuqcGA1FPwYLmgnbbrQZUjUa",
  "key29": "35FK2rcy8McEvxKSWbzgc3LTDKUujaEVu2SLJ8rHS4V3xvNthtCtMgMRNQcjdnRRh7rksgAZGAUqE25TnmUNFmKx",
  "key30": "2SXaWBaYYYBeyuZj4YqtBcapqvJJFwP9kugjNR4XQ9bSxvaxCbSHCx4SYH11nERvyKBoUoBHhyeFN5MP8Wo3rtZf",
  "key31": "5beYbGBv9kaedSjuZ6ZtiQg5eQesuno84aJ8jxQK9Qm7paTJQny8WZ1b24G9EmuKCB6XuMd4R9y6cHzSCWmpAwS6",
  "key32": "3Yd8imNV7EAEzJTuJogHRiBAwJhsgTP3Xx6rhBm8EA79yeJqDLVDUmTnMEiDzvrnFsYHKo48DMwNXupvQYe2CVAA",
  "key33": "52e5unDt64MxE6D6xNck4ZQkSn4QD431MPQYJvNu6AymFdnDNYHGXMtPBpVXNNfLcCX4xY7R1hvWMgtBEvuKU4Np",
  "key34": "4xgXBtB6fydqvXAimTWkK3GVH8wH7ZaYxUMBEdEt7hnXrahMPoNz5R3sgSmV832BEtUPMjbsgjzJRKhutYNaC87D",
  "key35": "3QuwFnugbKd1fWterecpZWBUtcQu1q4fsnxkriuBp74bY5RPDLqfSifWXhcnSSyNYU2FcVecwL5Z9b5NmpURKtms",
  "key36": "4mRJqzhVdGqnfuC8TkqukZeix23TTkuRR5jjjEnVYpUBqBhQuWJTFyBoAV4bAY5aoeNxANpiGLMHiijhuGdxjdTe",
  "key37": "3Fbywp1UJowSCXAmpBYKXxXGjqZckpwa7LP5Da8vhP3BEejeBaFgoJhnpNba3K1mZS3GGouZsvN4uEWP2CKD6wN8",
  "key38": "56s9jPRbnNArq9RSsbeSbgYTbc9sSGPoqG4b9K1bqW8EQWwL3u6ai9T8ENaAHrZoTKzABzfJDrd6D6Jg5K7VpCDG",
  "key39": "TAcGQwCBwiugw6GZZz4ZQetUu9dHqea8xsNGxeYSVKz4yP7GKGSyp12LyRPJvg7RdWzEEUWGcVcuF6zifMqn9BF",
  "key40": "2VWtJNQCukTppVT16UH1JKciwvf1YDxAeSJcZXF6sUAn4u7QNMmqBbkDuHUWzeKQ2ixkAcsJppQguoDyBxpSW721",
  "key41": "5NRFB5pyufGottJnXpcgXxitxGAiz92gCp1kA7efQsueXwgB2sKqJXPCaFYjojzxwxLsaby97DcQqVKs55k52yR1",
  "key42": "5Le19RiHV37EH6fiZPy3645p6KaLLfkZPXQ6TiBkR3dYcZgti3Krm1PpnnxdZ628EF9qLdAUhU1u29YfKQxYLn2Z",
  "key43": "4W2sSEaoFngq2fTEFNT2AewAPc6iZfvBXnjk1oN8T5mHtsTqsJYEk7svpfRMf6xjyHADgKdKkpvYWPXoKYjKqnwx"
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
