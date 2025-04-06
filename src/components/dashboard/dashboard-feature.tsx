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
    "4TYh45nrZg3TB97cTqGPoAEuPaqSuXHGw9cAfpr5cWhTrnvSH12ySatKQoyd6b7FpxXgsrkogaW9BBgVV9pfPxfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RZumpV3NhNnxvzPpjXLFcUgB7L6SMW3WyoJrguhpmuQBB6m6J9fH2gxKffVeWisNrfeyZXnkK2y4GPiModaRMae",
  "key1": "5zVTBR95vAVPR6TMg7K4cWSLL3MTT93eMnTRPteULMQf7XapDRCpQQ353dMfjDGwg8oQUzH9UbtEfesoHeo6LXbV",
  "key2": "5mgFKhmXzNUCb7KPSi5rmcpBxyubHJDynZ1Vf9CuurZZVFkv7gCmnmhZoCN9t5S9GmntbGoQyY5do7WzPpoLpBK5",
  "key3": "63XgSNQqCqNstefdy2gV5XMEV7GPcSjZBzCfEQSTZHBqJns9kkcQRP7bMsVWQFaFqxmC7CR8eDsQHLdzNBJhSnbN",
  "key4": "4W9255nH3MymXg6JUjqpH9ewofoygpMjPJfNZScbWmVMapKQ4d3y2ZuWjYRNENRJpTNGXcy9PiofDvVTHoJmXUE5",
  "key5": "4upq5rbToMH9hfUubR9eJunD2oE3deTvZVp9R6A6EUiZ6WMHYZLuoDLSyk7cm9vuV9es18tnFGPuwzrbRk7t3tFQ",
  "key6": "4fy1aMbUJmXWvgTStEiooJeDpcWKRJWckxafeboYJ9b4Lfwm7ZEwusm8jsE33kERHaZyska7zPvrXgbkWaJdi46Z",
  "key7": "2PxR4jbnDEwhxDThouyJCC8sbVJm7SQVTteK5dRWLsXxbodsU9NQKhKymrsrG1WvpbvXWBduszheVJKgBEo7YVdw",
  "key8": "2eqaosJB7U25t54CR55EpEfrgBZadoLbVUpdwLczSahYSmGPxFkVrQSNLJ44sNRmA9zchW41TF7XYP6jGED7oGCv",
  "key9": "N4TfDyDPJTDJXLeiyseW56VL5CsUwunkC8SGPbxTks1JiJ1pb8apNpHp4M6iq7Gs5x5b8ZsoghMQUMH1c4TWbia",
  "key10": "2GqseZGAVrbJ5nkWEKJs917jDynRnE85sAPGoHbtk7FKyuZDqwxt2JoQeKerJ6UdUNPhR1xwkCB12sB1iK66mo8h",
  "key11": "5Psv8bAycVvDYcXBz524goYbc5BrNgoTw31LXpG4tqLuCLHk5gTh5pZ7U2n61jneWkRSkyRwyCAYKNLFUSqtB5KC",
  "key12": "2vJM5fERsK96irqx7bCjMx3tWf2vbyDkApv7tzh54GYWPQNegpy6YetTmLqDKDsiewZedUKEz5fxZj4CW8hedtd1",
  "key13": "2Pyc8u9NpMxSCeCkhuCfQrUT3QmR8Gskw9VRW2z1W3y7JVWMZk5WvMeeV31CucDbVNa73ipgNtHVgKFt3CFQjs4P",
  "key14": "2k7pF8qkV1X6zibXekzciQc8PbKB8DpKrN1zwwzrBnbMK4CWCoHtnwEHSyqqYCkGu7VH3zgzESmFX3zjLwLPAHYa",
  "key15": "4B6pAMM84GMs6bUoukGQXoLNc7Mzx6ZqLDkC5Ud654KZevUm6H3jAY8dp5KxwwFCf9YGv7SDX4aLEj45qVMCmbsZ",
  "key16": "49ZYr8wFGiZvZND8Fd6M5N2MpCsVABrEVwvNmaTyfUJKaUL8Vdqc3rnF9PLFt7DkBcxHkQNqhcTW46Njbr2jFFsK",
  "key17": "5A7sdpXMiuB5QWrK9PsLAU3ygqM7SeTSxLuQtQffBgrFGJYP29iomhGAjm55foexW2zvwXCbnx4XoV6goqCSkoyX",
  "key18": "36sasDyy6wDv3qHG9ceEuVNfJPhR3TmtBDWqZyqh7Z8RAWj9ehkWLktj2ETMtFRLQx4UnUDeVLwtsheTy9wnv5HC",
  "key19": "51e2dQACjSnEy2PrY1oNP1PaGEAv5WvF6aNayawhG9gdNQD5reAJak2vayp1bCvfJ64svVJKcMXj36binUeQv5fn",
  "key20": "2fqjrMEPh3eNqJBptEMsAJ3fG8G5UBz3kXFVohriHccKTMsNWnTWTP9A4rymT4adaVcqGEp6ZCmwcBxXeMUwchET",
  "key21": "2T9V8TK5spJHQvaScBgCfLyRhTKhmXV5t7n8WfTeQ1RXnAT2qTZMukQkhxtH1iKPU9bcm1qEciD9ap835hVvrJXg",
  "key22": "3zsDnRWVayfd5pN9NtDy9qEFAgJdEK9KmFbGaaDRnrxkMUih5joA4Rf1QEkXuR3H1Tj1EgA9G39ijw5TWzZJpf2C",
  "key23": "qJkGnbNosoaWb9SdM7jgtgKy4NwibyeiBN4g1v741uCF7WufzQhZpSGo9jfiUsf9mwhMwrr8EycuoHbzPuxvYU9",
  "key24": "ZT7s3ehCKs2rynCNZdr62mRZNdQo6a2aSWhwqz6KqYKQSxmwjBxTftCkaRGwShHWzCqkFfTeFL6nLPTddUtu35C",
  "key25": "2NChnfykoKvQskW6avt819HXHcC48vftr9KPEeGAK8tnsHms1ATSfpiFrx8Xwwj2Ve9QceUKJ8zKHhGMUamVnXzp",
  "key26": "3EWvwfu3uVw3QhtsgqKSmkDZjao4Ahtgn9ih2tMGLsEfdGXKDc3ftiFapM4oJoRaAgvoo38BHLda8qorqhzcjxHS",
  "key27": "FVFRFRAZE9dWfc8wqjEiNrC2fdPmAoyRz72WXmVRdpuo1ABGChURwmscJY9LcQibs3vvkWQf4n55V3m3yF6iFL8",
  "key28": "nUvQboEYC5h1eoLPsQdv6ryiq8QozbmDF9Uzy24E1jYa6i5XgaNqEoDk8daqCM3AbmK4QgyCyfksLWWudJGC5Q3",
  "key29": "73cj9UGL1zaDWztLzsNi7kAKMaFzQaNK6tN8LNkESC2FRkEBHvkEnyVUGneW8tMhJXgVfz8YsMryoqeNLcrvNho",
  "key30": "5xzYfMFU8m94PJJJ827URWEE5y3Cx9T6a1hLAJvkwwfgtjmErzCtrsvwi626Rn9HYUsXBJJNdU1yKoWXtunwP8Jo"
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
