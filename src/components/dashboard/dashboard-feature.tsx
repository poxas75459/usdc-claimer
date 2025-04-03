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
    "5hShVxPin1SSowENyo4xfbfoHZtdfxLwX487txaZ6bQd6GQZ8ox3fAAFdGLAKW8gwD7bZWXP5pMpSTLvUurCQLQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wmZhHo4frTRzVzAvr2r1KzPcacTFWfqyKdz3vNiFa5t4ch3QevGp6fqrwBhvvq2spXwwZr1LT4SShih6k9J9PYy",
  "key1": "3nMygibPikp458Casdk3THJvJLr8NzoLKK9Wz8KHPVb6Hv5ZU9mTXcsdZXmqHehGo8ktDpfNzhuTcuxAWGBc7LF4",
  "key2": "4zb4DKsCJYDRw6aLxzzUJo4QVHRSbhEE3zk5Y5AiX9ddLiXRLm1u8mPJJG7joVWHSPs4nsELstHKpC6cAGDsgpMC",
  "key3": "4CEm88LwkyWhKXsq8XQZv3ZtQxNyMcJC8UpnLD22tRKQEhntnMQDSkJoFdoMSsBkuUDsChykxwm4Hnu4NiXCb1TF",
  "key4": "W9fHSxojoGjXSGGyLjjuw2XCP55cTvsED8oyoM3zYtjMnHTkwEoruPiUSHKPQiCoRPNxLKavApQtPq4zEyW3d1S",
  "key5": "3eK3VV7DBJbmWEu22xn9zTArknnB8ECXJNZqKWqS6fCGmf1aLBzvayqaKZ3HGzfKcesUf7mPF7N4TUCmapKPzFBC",
  "key6": "4J6tYGqgyAU6RA5yc8oEinBDf6a3d3pU9RUmrUFy1abgaqzdVR27um9ofogMQHEFsY6EX6ozfjJVFXj7YBSQrS1H",
  "key7": "4nJHMe2KPM51d8WhUtTrduHRvGLXWkXWWL44CmXuh5CQyqrXGF1FEncXGXnrT2DhtgPqJS2MWw8vkRJvu2RtvuiF",
  "key8": "3nYDXzgHFTyNQ7562oQR4ciZf2N9VF5kkwPdymMi98YK1sLD9yYbP6a4R8yyyXxXWT19qU2vDn3sTXtvvDgDj8r",
  "key9": "WEVEPu6XDJsDznDgv2CzNnbtwJg5ZbMeA9oxvGKQeNRm6VLb76BHySZxZ3wnGvk8Kz1XfAVPK6tKsiwLLyteMWX",
  "key10": "9rRECkYZRmEYMnsgrs8Zi1gx9FpZkoD7zbqXoVvszqnkBL2X3NbzjGSVJ91FWf9t5AMCRgqcqpPtDNQ7qB9WCtv",
  "key11": "4YFGep8vvrGMbupdAzQZ8vREMfgniwsFRGmoLpokBcgFGHzxk72iTPoig7uzuX1LWLvVCLVyJ2GbUjDj5cUZtQ6w",
  "key12": "aP7EnDmgxj41HGwEV1PC3CGH1oHGdoCzoUG33REnoepE89LcYuiZbNCBqUvDNVAjmxKA7yyjsSHXoTTVFJzXRRW",
  "key13": "3oFn4nCXsKNNbq9WiuM6BzisQrfhxTWbfFZfXYYiLEaSubWdEbGK7MaLXCgXEgAMEbXCS34HTwsf23PAXkgguAQQ",
  "key14": "yFiKAmZ2mQPt5yxCNXtd7zsPjbrV73D6WisAHdJeaTTgJ4zS9SuMyvzXTvdtCf9f6L2EQWnCx1iDRmvrCGAz2kr",
  "key15": "5jB99rvEyfi7Ygv8bJWCtUStB2Xfjycujbziq74JYtxLLjpYfHZhuGuE6kKnA3LtPToZZBHUYQ73eZpswg1XuX1T",
  "key16": "3e3fQADD7si6VKB6pD1kdztCYEhMdXhuZoXjbj8dYmW88cquXFADSecihBCqnXjkHKDHy1WPacu4xKCU5sxquUV1",
  "key17": "3R1gA3H8T9vzGHMUm6zN6bQeLTswYC2k9KZVcBfRkfbpfF3yLV73HYnYx81rqxSm8kjxsx35orTktXwDMKdJZ8zb",
  "key18": "5MxNuiYYCiis26aHkSXzwBEu1Gaazcd5ayEyySqxUhSnRa4tfu8YUR9nyb7HyBjBKvkv8VTVD2NVnhmi4kCFPmh",
  "key19": "4gisV95MtVedYBzYQUSoK7FJzq3dyvh7QKTp5P8jYYXYqJSwbf8zUvS4VBSsoYc4sDMyvLudtUrc9irsuMvgXVZp",
  "key20": "3tZGmhz9FxaoAXPDkjsciGnnqx8Agz7bKDN2uH2d1V8nrcm9rrWCN5yToAA8Kh4Sz4iykxF3matphFTyfrcsykPQ",
  "key21": "Lu2te3TRCYyLEBnoP3VkpHCnYN53M1g4qh3kqqEhheEVzY9JvX7UPu8tWhnfmqJ6WgJFeAhNaTVyofzG64a7oLw",
  "key22": "31ZnxDSRbQW4RDQo76xDZEYm442g388mvTKLG6XaQarpEDmwZFfL6knqbgirrLTc5WShZVsuVyJ5ChKkKvYevmEQ",
  "key23": "4dd3keeshnTB4SXLLZNsVGZfiTuptLT9fAQVjQLSW3FsFpCJgW3hpzRL7ER5pFozt6kjWAzNWU7EFHM6tSkdLKrY",
  "key24": "2EQHGb3PhkYbdPRYiC19q6YipK9HV9jSESs1uc3FvpcsDjCwvPvKrtzPHvTUQaPFaqQRidX8ufimgWp9NNtdPpe9",
  "key25": "4d8Q9v5cqgnS34YSVYThgHrMYSEwUdArBv968yXyXUbA6vAXemrhkBBJeXcjPyHgmTuBYxuQiitYJ14jy87RAn8M",
  "key26": "2wFjNrWkmheseWoAqLPmYvvQK9xUPBPrahaNULnPxKeCt1286AMzqDfpZmEEANDYnQ8xsBaMzbZvPMxzQSRxSEN2",
  "key27": "63sqZw8fi7uthfu6W51Qo7WNPukTHmTnddbKz29YgPiU5xNYadezUcPkh3CY5T9Q59AULm72S7BKKrmWk81XGZDJ",
  "key28": "3PAgbRQ6Hq4A4Mrzsd1RiRymSyQ5QmJdzYUKXfF1ymszWhGK9e8wnbxeCPFzGGAbsWe9GuCja97tmHALdT6LdCrq",
  "key29": "2EWLmA9E8CsWq9CFU5p52SB293F9B74UL4TjuanJBBo6QWEfA5UtBRb9GZm2SDaMHKtAi9Af5JSqC7pYtmW9uWVJ",
  "key30": "4pf2GYq8QBqMkq6z8UVbSrRoRatCxxFUZUn1EJHzRp3im7nDvN41s8BmpTsKRte4n5JsMJLbp5aFZ6G5j3TLhT73",
  "key31": "5bFdgN3mzTgzBzwaaRwtpDYFcyzzAts3NFUeJM8eYQpC3WTNWoQ8u6nQXn5T3b7oHrmbqQLxXgeDRP14EhmM13rw",
  "key32": "3vLUz37L7wF6V1bkN6pPK4JTvYZb9yPiAozsti5TbNFA1JKsY59BKN8ZPfEB8zbzWQvR4DS3WsGXowppgzTu9v3r",
  "key33": "miunsm2t4dcz7u9N43hmTL7GynWt9pA7bN2k3kHpzogUZEEmmEHrnfhWmxsRTVgemMhjJcRtRCDa7D1bpacxwNC",
  "key34": "2UL6E1EwAAiFga7Noao8oY9aDFaw7NgPscbFwhwwgGt5Rmw2opMDqVV28HaZyPoiSwQjoeaxmKLsXY9tAe1u2Nbx",
  "key35": "5sN7D5xoJ4TrPJMAdNkXSe2peL6DHCWbTDy2n7uXJvSr24L5uDcs1uJWLfZYVQQBBVSZS37Jzc7f4X43yt9XsbHb",
  "key36": "4h9utPKWwFPZbzjfNz9PYe7btJBZfPC6DNDjgwJcp3PeTjzweQjRgNCPhVM8PTBBVqFLxkotq4DnqtvoKosdRNC2",
  "key37": "AGEQWGRn8oFBWSG1YsUr9i4ZJ8SyVnuFwoB3Xmxmck5FGe4H69hWoU7gDz2UKS5omvPCNqYVogb2TdVc6J1QAm6",
  "key38": "4ay9sdnCd2XTci356s4naS3GiKNwHH5k2eLx3VmhNAwgiYty7Y9S7RvNz7eFR5iMeoaiMWwb3meMgSSZXiaVBdeZ",
  "key39": "3x4ahXxXR8e9Xt2X954kTu4WsF9bNPoqEEFTdaX3oSmx3hoVxTiTt5gw9KEfxDt2aWRCQVMwkYMqLgsZv14sRWNC",
  "key40": "5ssNMt9hWsZEukhjkrzrmeide82GwwQbmB9auHKxsdC1FwdEyjKtyifxdmHdCWt1JZm8839Gm87aTKXyccHisMTd",
  "key41": "36rN5n6YCpRKraDT4THH9kpSiwc6Eb5k6LsCDWHyrzAZMpDLXdmDSXBczYAB2iED7iFViJnRkbhvpiLkgwu9bYyN",
  "key42": "Jf5WADBVGZAVkj4bkzscDvDDJu7sL2xKmBJXJvyC1eE2KrXQQgdMXQ6u8o71GrYjZCgRNyifjWi6hBkHK6ST38F",
  "key43": "3bGmUZk8vNKNP2sd2djJSFZFdNFuQdGg1WvMCZgvjRrf1Y9DhPGPdcvjnTcTWLXfrYmxDYAvkMg46rnU2nN6bNDk",
  "key44": "5iAdLjBhkCSjMwWSbpGZgHXkqVo6speFU2vbgtFgJstxVzdPZwZv2RMq4ntvMPFGH4KEUXXP2oSWrFGYGRitvgAh",
  "key45": "62Z6V93qRFYELi7QXqH4mruPX9VYKp28QZo4iEPHZtyA7DhY7UopQvgi8NrU3PGMqA7xT8tg8JdWZ4TeXkwz6iVT",
  "key46": "3oXNhjzAcnCvHtCbcxM5coMkJqyC4j77gjM3o7c3sEKmsyYhFqhZrizVNJk8uZV4kpZywwBY8aUBS6U8Y5R4Ezno",
  "key47": "3qGzC86CwQDfN6xxuhqL3FWzFHfkUUa27o99HFGXvo2DrKQkGERLGuos83yu8NjfCD95yCNUYXj6Hr6x2TBcxCUd",
  "key48": "2fnwtJHsCTpSk3LYEMMLZacsAHs5PLkdLdMPTdGJSFoicWQv4KLt9g7UpeXK269trZH2bsDxDQWb3PvQEqqdzyWk",
  "key49": "4ou1NtupB5gxVouvpanMkEYH7q7otLXRv8oYukf6w1MewCGnzVbWibTBshCzY2n2YiJqPGui9hNRZiYvVW5MNjfj"
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
