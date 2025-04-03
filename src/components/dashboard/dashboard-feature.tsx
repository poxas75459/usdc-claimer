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
    "zh8sCBgJpLqJFKqTaqL2djyg45275Bu2MmZ8Krf2h5pSiUqJhNHe9Vihgo5C1oEC1Ac76it9FLqvGMWHNRAix52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SqN5UJjqTgLEpd9d9xxr8w5R9tTVQ4KpFd6bkDF96YMLstAkJ4PkDZucSATL8vPoeYWuFcXbY6XaFzYH9tUnRCG",
  "key1": "2JE5YtHppq4aSh893ncM1qqQ1uy1ExD1yqCRSBcKHc5v7CP8PC9Wh68YLXPKAgaJxPrBFEU9SvBxQSBaWCE8o8hY",
  "key2": "bwXC1qQNTgi3zUtjLsnXdsgAaU88VdRtgZdCMvqPiMVXkJXBRvN8tkibiL7zFtjUPcvqbT6hEt1rdQzqCCgMpjh",
  "key3": "4G7au2wUevfybPkqcHvN74MrCw12jYgpmbUnR6MuZ2zydwrewUXXg8YnPGnHLwXVUFZoe92cRy4PeCKk1Qh1si5P",
  "key4": "FjpNDKEPFVdGEzAw3XsuGWbAqfVEnqt4DWHbRyMKTAeQk2oAg7sn3dd4enXzU5AuzvpkfK8YRCWBK9FfkUmMjEH",
  "key5": "i1CzimfbtMCMaXW3LYzcR4VC7NP74HCNmJjuLr1AnF43tVMzUhT7F5KEssx6CQzjZa4NkmePuS79PpxGaSZgmzV",
  "key6": "277kGuihBbRZbSE8TV3XvmVSTBR16bwemD5mxevxkGWbw7AYbrqSrVogZdJj5jLLjmEwr9Be2JJBCCC2ogTCC4Aw",
  "key7": "2u2dinJASSkNbPsGZFsZ6cxmsX2EmjZp4VgatvSLx7PTjeodxUBnsnkXW6hCaMZ2bJ3BzxsLUMzwmb1iGMrtnph7",
  "key8": "JTmXUYbKNRbfiG268wVHkKem6poWA6ABjgCgVfVgdVKPyfdxnxEMYGDogySbJANQ4Rpp7NNh4ywdfjv7mEQ58BZ",
  "key9": "59kyTmtqodGYreASZqJF9PdGGbkrQ2CuQVWBqAvhhurXWcaWGv3583TqbdRMNGmCQWysfELYL3GfpnGWmfaNsc9n",
  "key10": "2KMJjdmb9KPCD9QogTdg6gw8yqhmFF3jLrQNeeCxSFGZR56ZnzzT1J9ZXEJirTQT4cfzHgyRde4qZdfHGBkzXUkB",
  "key11": "4oBk6yWNQCk2YgwENWSybc6f5DMazmSpTyaiToorw31WQkmevj9mfD2qGU1ftbiRDPnTR7NY6Z8WVLBeDGxVjE18",
  "key12": "42WoYDf4KqEjw1Hci7Jn84PT9gmABQW85Ro3BzLZNkZg5TjUNYDzvdKvhQiJK6evkkU1VegLhxZrubFet6aNN7tG",
  "key13": "mo97kNtorEihRjCx5SKm4jFfUsN1JPyxCqZCRaTaPEtfbE3zkV2nmSUfMdaCTnjeRfVzgd8fzyFQDNbprcWTY9e",
  "key14": "XQ67NKaDmxsrwMhMYSTj3YhwfYMcvB3vWw8hSREHUSYJS23EU5vwBx8f3zs9cD8ERs8Aj8EPx8fvdkz7FPEkGVa",
  "key15": "2CQn2G8MjgoWq6BrULxEBLfoqWZXboa8y3fVHeWwkdCY1MbAi99M9uf62LfTSmvpCpV4Uq4hJ5X8CTRDhDYYfpa8",
  "key16": "2d1RXS6eoUBz8h5VdU4xhAVB7K4KL11DNvT4MWDyCQ5theFS171v65vrhP3tauSyuCcEJ7x67s5QkR3xNk73scHL",
  "key17": "46v4gzofixmRnHR6TzmWR5u1r9raTrW8TUJLW5V5M2scDtabEGfzLJBHffWimgoNQGbZpZWKZ6FKkV2wKUsFga4j",
  "key18": "2iZ1GXFum2z59Ths63CaQpRfVqURkgmLU44FKSyC6No9383bZ65KAhLY8gb2sLdUSkTDC5NPWbQRhxKq5QAgFQHk",
  "key19": "2hWoxjoBBW4ouyzzJ99x3foqPHX7JakJv6SaBfXZCD5bp1mGnGmwxenExAMRTDt4kWfdXgeMFkC8VZpMGN5wyt6g",
  "key20": "5qqssVtUFDoQZDtAr2YkaiyJufeFq5Q3JGbxiKiEYJVWvHwi8zSC8MsrU3DiowG79KDChyaneWJugaTqiBKVRaYm",
  "key21": "4GQ2FyfWgAKL5yukc1jdeB8qfFDWVneUvG6MTV1hxCsngQ7gxe3z3tipGqJYsddASv2gTn6Rn1ok7Gj9mbXnchUe",
  "key22": "5RwBtP7DSYQwPfSS3RZBvhNfjBk2uU2C8mVZwTmsk9qbdZLgJevq7sZgo4MoGqrmvt8wvY3XnzVy8o2vNd4h2TGn",
  "key23": "3fFkvv7MvvXXUYoST77xoKqa1Bx9AQQQY5fjupfkFRBdmhGX4ymMLh5vwMsMUGTRpzUp1iBRHhE7P4CHBTYkiYzM",
  "key24": "hjE7d15gDFDAtJaRWHgRCh5xWGb8744WgZydnhLZ28wA7Hnv7Mr8jtxTpQRjZRGfBmqWNoyRPS1anJjMw6pjVPZ",
  "key25": "5dCoRDAcvrjmeXqUwtVvWUxxKSxkFbbUzZ2yhWZ1B9pkGaQ1bxeAEy4RXHs1gbqMJ2v4TqERT9LY5wfKivByrnpS",
  "key26": "63kBoSkgtzqjtGpo99eS8jqX287j4GCHnmf1WGJaon8BRzAfUf6HXJjR9mZQUxfFsb8XRzbp7MVKWr5LZ2aN19EV",
  "key27": "Bjni6uD961BiEVvgmstQCQ9sN1TfkRU7tFJj3MucigcqnEkdsnAhxWc2ng4jBSRDJaeDJwq1j7m48SeCt31N7QF",
  "key28": "4KvkJeBJB9WGzyykx11CFs4D1RYeyBYjNHHynVLySQfySks4z6pTjkGQrJUQFqWSAAZh4h42JcuCggEiqmHhn6G",
  "key29": "36Mq1T3tzbC1WiZ5vufUZieBykogtjrwXZgj1GENthuzYdq3aFsr9txAeANSoUJJU7KfkMcxKLo7UqSJRhtRxdrL",
  "key30": "5zZdKfxi4scinebfcrjPWnPijFsk9j5DneVJLiQNDYtyzW5JczcLMZ3ngVLU62khStopYroGXbXL4Ar5hPmNFvBV"
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
