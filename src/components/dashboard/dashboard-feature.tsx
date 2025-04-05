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
    "2vLE6VFfSx3AYJnJHJNubZDePHdWXvL5VHBs85HYL2PHivWXYfnMam1CqPhdax1iZHN4QDMsg6kHwJNe7TmnX6N2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jUNsZ2QoGuFb5MEFxGcVXgp7AqyEv2HXf6kedE5Azn4GziGyp88j2Si3WP9GKSipp4EULpAYyfajRc5CEtnuWcd",
  "key1": "gt334zdqNC3nViJdF2Mfq2SSeVJSYj2JS9nTokY5DPU3nj6tPYodTN1sYcT7z7yGuLcdPEbwXxA5o5R36ZkfM1f",
  "key2": "jhH4hem5edoReW8HyMb3my2NJmzaStkox4WnYftW1iby4npwhbbNsXXZTv6dhJ3zZtoMcjP1hSNea5aCkvPLmkn",
  "key3": "3vnpRqdxCwpA55pDh2AMuM5owBMQCsH4o5oFNytN7nqsmeczqW6vxRnj5RXUq4Q2Xa4riGCdWRxFPdKXNvJUmZ3J",
  "key4": "3kHY46BKNatJRyKQRjL6Mx2qvdgyrHhXNNAh39EpQRSnWoEe4Vm7mS5ZWz6nHQJjRBC5CqaCnovCc2DW8xBRrmZj",
  "key5": "vJPhsjG1cxPEzkUdXLCfU1hrR2dfLUyspuV7pMgXpwTZn7RUm4Hir9iqHbBjHNSqGhwmmQQCxiRLh6q4BzWx6Qz",
  "key6": "2eupKrgpsDbYixScH9fcXXyQTEK1cMK6fTd8Gv9zQx4jMZQ2RTKrCTvmSRWtmPz969o5x3YbrHeLxZGE1fUrhR5v",
  "key7": "2u5MwYrTB8QcTbJLmwAKL87uShnk7avFgyvriTadeEt75sw98bQazMhykQWEGAJQmhnkMSwVwKyKVhkvvMV2M23p",
  "key8": "4EWB9fKc37K9UsvSkeb58UqZVPSiAh9245B6vysoz8vFsvkeNRcThEh7zbmM8MzJ9M7ArWNQhtJLqMVPYJBfXruH",
  "key9": "5vGTF87Q2ug2DjiTRpCMVW2ucPQKJehuX29YQfkNyDUmoEEgdAngvwhipMqGTG9jWpNtVNaT9fc4ddLR6jqe7X31",
  "key10": "ATDkZ8Wo2Vq3rCKVrog2bEwD6AhyKgPZtJkrfrC8Ex4VVRjSFqAWaSRr9WG2sqjohu25BmHsvx222eY6tw3L7FB",
  "key11": "42t9fRFKjKXkPYsYamrzyhnZDtrqcU2jQPJfxnGseZ6WhYsncZhBdcksmBxmpSywpsVj2LYTdcHpZ4N93uTeXzYR",
  "key12": "42jBCPB93pZQS4m1XjqXQ37qn1ScbkCKpXabaQoAscsdUidveULF2pmd7rESCZ8eop6Jtw1LeCdi7dbuZxPdUyrQ",
  "key13": "5y824qd5WS8yxzWBGJSZXx5GqUHgoTVao6Qxbd5EgtGVrK5ZCbu2J6q3ddsuUzrfAhfPqTadHHp5QmPFNZ9U6EDu",
  "key14": "3jVKGj8yDmnn4sWVDyTyUvWZUZuJxuEfqhurPJGjXsZ3NjkRPvw15xgmYMAcqMVpZWK2zKRoUqCmLEF6oCFPcBLp",
  "key15": "5E6pqrfNG2qgeT1mQSSAkDfUv3mniZTHLS3ia4W5sjEntWXqea5z7jY7x1qZ8eh6ZryDWbFNyLWDDN8p1Npw8JDr",
  "key16": "ETdNpnty1PkwEGU97MBitUKkWzruGwjXa3esRA5rAmgjq7ayH5HaSvwR6yWtiv9Dbdi8MWAhCjZ2RV2Jnsn2Uvt",
  "key17": "3yKNEyQjwZMzjvSLuyaz1HqoLvwxZZXJmes1QbnzwSzJg4apzxeEdWsz1inZvuqEkaARVbKaeUWnDbJQ2iKpNjqR",
  "key18": "5QBwJetesRp8Qv3jkh2yhyBRU1UsQDNKBwcdRVqbVgor7NMPvBbTJyDgV3smBJtFwtFCURf41jcYgfc4HtjRoQFd",
  "key19": "3jERuisochyDpqKAeb9q8trJDw2J1QCjiqzYcPxD8bWoZRzQAxFnPatgVn4kE4ZQDFDENG5g21UvBLkuxP6rjCaA",
  "key20": "4UKkB8vdxGCfdBiUTgR1bmDWyXqQzyvPuQQtRovbs5Nu1MARN2b6HRGegUkcN8GG62hoeYHEiS34T8k8MV3sEXyP",
  "key21": "49QC2YoSi6Fx2Ca3kDQD2oZYs6xtvWdEazhtq6aQojY2nVoYgc43MTCSSqrEAYRDUxEZ2SjWp1mBNSVhxJW9Tt2Z",
  "key22": "4Dq2UDXNjMjZ4UDBaDdt531ZAodmyN5N6YqjqxTHJ8VtonScfbZXamNj7UsJddXerVjBEPG2wQDPv2ZMMZCvvNdB",
  "key23": "2xufkRxxy4aYUydaEberFYUdfY4egASdFaLbV6agYvhgZcXvJvQMmszGfv8tx24usHgpqURMka1nUp6xYt5tQomF",
  "key24": "3VLqT1Pihbiq94AX7MHa7bydXNKRfgaVAjSdWNoh5yh8V71tJn44x6fFwRiQsffzcuU48gJHfKoAQR1eJXc7zooy",
  "key25": "335YdgAhiuv19Zrg8KAw8F1zWkDVNg26Ubrz3zBPic3aRnfD9sHeBy88AXLttNhZG2CzLazWyj1Q8ReRTTnN7Y7r",
  "key26": "5PNJxv5TmgiGmNw3DtQ6nX5HsTFzK6FujdFS6xWCMiFgZRiaZ8CfxjaYCkZheTJYW8mHMaWpDb6Bth21P5XC8BNs",
  "key27": "mUgd19u1ziCjC24N99VSLz1je5C76sgMGNVptHJuRTsWvornFDwbH6VsrFmFxuXbZMQEXiUV2YfRb4R3XbMD6EL",
  "key28": "4BpHvrQoP4zUXSzYYB1rqyWqv2xeVobZmACBqix9HZ8LgyAaL5QTZ88Gum7hjVeG8JgfzSQ7vHSHPspy8t7GjSf6",
  "key29": "59ewPyhxYux1pRMJuYCwWY4bdRpJDyQ9ZQCjXCPVRNv9S6rz9ZxNHURb9efXTtuN26qJk1wgyhujNKnFtb5VuBSN",
  "key30": "44AvTPMdHk9cyvYMCetQe4RQvCjNgFN97wkk4CTUoMrSasFnkhHjNUAigQ95RypeGhiMMGwWogY23qehFLanhefK",
  "key31": "2nugzAk3XAEo8TyGQvVnyd3gFZ12xByjncPCytpgdhy8S4JmzD1mqVrgNLxj4kG1rFbWmqFJVfgTPAHXMMwvGTuL",
  "key32": "ZU4wmMwNV2c1uiMH1FfJSMtjSssDqb3ooLhhTfAbYQiJ2Ff6u58W8us1WVa2TCQF8JDbDQTw76DF9kcrk9kbbmg",
  "key33": "2dXksMxFEQbQGmFmdEXUZL8gfbj2QcxLf72i6z7GDKG22cTZdkDrnEGKJs1m6qgWDEX7Q1ppcrVS9iA5NW3ftrPH",
  "key34": "86SBeEksyqMA6SnEzMYm3wdeNbUQrtB6HHgmMTo74nPuHLzRcSyuXXFfkLC76Qfa8LePXJN4RHKWJP7Y6qSisSV",
  "key35": "4BZrSn4PL7tchfzo3xMMWaLERXYCHcNBf3kkKxxuPhN4HcmjQMf7ifyNf3r8GSQPDoTSja2efSKGpBKE434mMmMk",
  "key36": "2taGw5ChMa7ir8GszMX1v9YUA4ALX14s5WiFXpDCB6gdAzKje1XJSpvn7r5bhqC7HzR22T7Xb8JapXQ4oWZ8QMLD",
  "key37": "3BLqQm9GDjwWgKhsGWDntvoj69gCm84rYHiCcDfE9erKbw3YQ9JebUdLQ7kD7LCbtXX4eurgaGjYanzaQNCLvwoq",
  "key38": "3i5m4pWfimVPzqV93MNRuTJpGyaQ2umXsutXZ1G117WFKiEeGi2GgmsQ76ZRtZedQw9d9VeBfmTYqyDu54JqVejs",
  "key39": "3457cQKKAnjJqGLL9Y5C9T1pWYWpWxV6ey15AkSF6V9W1ccEmnYJ9gTzFKBM96VJG395XpZjShy4hJdFJuGBRrer",
  "key40": "rMBPM5y1KsuRG9HgmfY7r8yQ6kCxZ5dEqUhSd3vcmWWdPWSc2teJhDFfeakSfpKhPPYzxCR5vKBTZy45tk7439V",
  "key41": "8EJgn557tHkehGjMFGxND5hp3UmTdV56nZcsdH8Hhti6P1aWiMdT6JJ8sraHtitVz7jXAjE31SLbdCZGTi9nY3f",
  "key42": "44ivZEnE2Am7R9aLVUVintPz3wfhVJea3d5EL8yWcXvxzt9BcNqsHjGcUVPwJc7oCtnXyd3D6nZ12jUjQYHYr4J2"
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
