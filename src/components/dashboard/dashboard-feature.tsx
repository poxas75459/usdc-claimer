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
    "55YJDqgpwWpJACVCtsJq8AfaBigKSQz8LtSoW8HDPJjqZK3QRAvZrgh6sBULa96gfVqWUWPxz89djqfgoWqqzB4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vdy9jWkMxm9Zvwvie7oevomaS5VBcF4aFRJUTHAmVZ7WFVZ2JPLcUgwrXJhuSaqXr4fG6JK3snaEYe9qbXMEq56",
  "key1": "66os18ipmSn1EYtVSpL1JBTSDmPnT91NmusvF5UyLGqFF48TrBZY7njUs2TUgptTomLFXT5gUMpRiK2YUqWDBXDf",
  "key2": "MGJCcwUmVSAArPzQRXdXqFtabSNRs2ty7ZC5yWrb6ZoD6T8CLZEFabGkf7j5Tcd34KsNGVJhH95fU8NHyhW1nkE",
  "key3": "2b6tMStnpsi46tPb4qQHj41h1jSvhYp7HvZMA3jAWM6c65fsuq84aiuiQKZatQojVL1nzTRpexbUv5vvMh5tN8pw",
  "key4": "2rSLAn6rZWYoxtCTC79DaaQ2e2AzrHZaZaa4gNP6iC7aTh6bVE5BFCHQNG1TB45SbxF7tszZ6AhK2A9pJy2UfmYT",
  "key5": "RxRA42eY6xgbRJaWFia3snEtHaGEZTKJ61exJyCXhse3r6dJKsMUL2LApwxZd6EUBR684rKvmnzjRigq8Ya7Gr5",
  "key6": "5P2RN6tD6iGGw5omWZrtb6qjGnT8z8tWbNJBJPyrKZKSbMzAFiD2Nj5bCCUDcoCPA4N4XmRu8MU5Q7ptHwmbfLMj",
  "key7": "6141Gn2L8h5NESPqJj8QtzFnMjiNNH41j2c9koK4mL5rFYztet3E6Le3uJJSCuEYvvjG3rsDLC9Sc9R8NsspvWvV",
  "key8": "aRrjZpNgdxJHLYGbUV6gmL6z8DjH37Srn4xVsiidUNJ4XKQc58TYh4VKm8q6b14j5gbDt8r6pidDqk7oLgAR2gL",
  "key9": "3kWGCs8RwJwbn9tzFkMbSbREf875rQyMyNWhmwETdywB6c2tGbDCLKfppUc4A5QB4QfTvNErToYgQestYuqzG9i5",
  "key10": "5kYVCbdrnqQEjszvtVpdVz1BKGFMtAWd2F5TVTV7xzCxWTBHxWGSWpup47zuQkFsPXiom31Yr4uuz3QPcTghiwQg",
  "key11": "3Hajb44X9LzY5WmP89rXGkeoyRb3Z4AMtBAGG2ciw5GacW9LcWinsD36sD5iRsoEymjAiZ5VbggZPA2efFRjjTRJ",
  "key12": "8MAVw4YEd6DA8MkHHbuScXbDAiBx45BjdfsA4vJZmUBEtstssFj6mjnWRv92sp9kF8YRWu9r84ZMchZSvpYpUz6",
  "key13": "2dBuhUwy7soyUi2mpPC3KRpJfmamLWVFX8HmjVMxZQPGwAjT6yiLDyhxgJ5169gyaufkStMZ1tXWAeKN3qLCtWYW",
  "key14": "33BYLnJxST7trwrwX6o6SwuatzF2zXXZpBawhdrbajwsDDnV36rxERg38C4viKPCH35CuYVjPxccBPsSx1tydZGR",
  "key15": "3Zs5RNWXE8TYFsJpdcs5CCvrL2xnqQ7kNRcSBJNPUN2zwMrJUMxNvMb88vuewipW3hT9UbuA8AiE7pgfPfCSJ8tS",
  "key16": "4fMxFdJVZDdHZ7ARN3jHCJChAxTQiWznTLHrGRvBiKpYW2KVR1uEERtw24kVJRniEAH7YAQL4DXqzoGNoC9zksDy",
  "key17": "2Avqi2HHs5QtuEahmEF4rBJzAWGcNATLd7kVJPJPCYY8zLHCXEGCF8XmJ9DDzSLwg8SVbsvL3hcdLbULjiXdgWX",
  "key18": "juuSFGRtrtvuBoy3Rh8U5UbUjAeUeY1MTzR4hG18xM5d7MHAQvRscgg37mfQEdwYB9SmBLeK4A2yyEByEQyyL9A",
  "key19": "22fpmyJi8ULPmKZUR5AhC8avpQhEuGEEWmyTTSpEg9ZHbYjaozffrVxGQ92kHeNUdEcAyKYDEBToWmybiwLM7wSJ",
  "key20": "4ixotpGmxyYDB9gCirPiWfxZStARJopAvkp1LXfECpiCtaTTo2dqF3L98g9hWZGuVCq1rwQN1DfzeVS43KNf9DwG",
  "key21": "67fvVw2sNYNMR21BaPcaNh1Qyznbo3ZoqTtXtQWRGe76hXUoZGUtvvP2eghqCLDPJNAmTZwhAYLdEUdvngz7tWD6",
  "key22": "5WQNXnwqrjBkYqaqx2kpmdCKbUx6L3XW2Vpa22e2e3atQWhxatMU6MVU5vrq44unMjhzECxn4sdyCZmcWhHQwexP",
  "key23": "52gEioMJoZ1EPdtu6gmh6byMtJ6ezS4R1qt8JNJhSkzVxZtJozg7gwynM9LkCDdegQwbfmrzyC552SfXpBBNhQV6",
  "key24": "5Z2i3HsSehtUDSsqUF61pP6USghbALYr9Tqz5bKWRa3qSiju2NTdAXFZYMW67iCJ1wELC38zm9g491hYkUsHgpRY",
  "key25": "3XhRXMAKGpMErLnxny23JnLtn7J8FirUMMwYfnfW8y3t8MugzfoEM71yvnAq2u8CHTckZJyoqYxuhnxwqzwd56zz",
  "key26": "5RzMJcRfCTpQbUyvS6kmaAo7313DnqBdPfiUA1VoqaumygENbZnkxoq7S1qFbintwTbBdUk3dj4fpAkgKZz4Vqg1",
  "key27": "TTXpL91LVeYTm5uxrsHG21ZcQoZFzwSeJbL6kT9oLjp1S3yAy3DczazSyCo7ruHb1HghFaqZkuKGHevY6jETdKx",
  "key28": "5F3JRTHKSgg5CDdQMUTzZpBH8UPKqyxD7h4pQrSMDH1Bs6gariKP3c7iAKNa4TwMDKYgGbdvZm4WaQTe5yzU6Ct",
  "key29": "2wfTNDMuPTR3iXFqUgEHBVXHvBqSMDWJwz7WLvSkkdbtSJ6zx8djrqGTJXvGrE7PoF86zUUV3f1DeafsXMcr3tEA",
  "key30": "giujBDoxkiQ6nF17A2ATLwm8eLdmvhcLem27J3fhCvwNJpxJuQmvZn34UqQ2SHXy33EhdvGsYFkgtHNjSZ2S1QH",
  "key31": "3pdhsQQG8E3WLbopF7sYEqsjTH9LfnP6uJSjxuBamhd4nrdXPH8FBgijGomvrR16UaVKrniv1nictAf8T7SLP4FG",
  "key32": "3F1Qj1vu8iRVgRHfZRea4jdeEvmSaYUy5soMvGo6FXJJL2UE4h6sZ4BVNv9i4FSvgCUiSK1NiVEHhtZ5b2xyp9rK",
  "key33": "25CMNiqTz2wWbrrs2ZqEskyZ8yNUBfyFi9WGrkyQwW7AuGgz6QFsmBnmkgsTppERspWX9sqhf4bxoUfuzQSwAdmt",
  "key34": "4kn8SYuMkzAVsPYD6kXCMiQdPHpBzrqVmGdiwsEkYax3EzPSrL8hoEuc7t8EEdRE5iSFzBaE7AP5hTEQGUQVjnNH",
  "key35": "MNYVBYCYWsqgH9V6oCPKh3pcdxo4M4irvGHzVQWABBVT3yY6VjuxvRDWWfm4oxRhJ9Eeqs7rjTx5Dh4BcEFqLU2",
  "key36": "2Fc5TVpeQkbFC2ec8WhfK15ZW23abzgfNB8JjuWwicHJsndHjHhC6m4arcj9DHbQWMYNhsPwpVJ1PqxebMV4zMqV",
  "key37": "3vCroCoxin82PXz1gvfVqoip86Vwy4pWwj8hUKmdScjzroLzb688ZrrgZoFznZEh3HApZu4mMAjZ5sV4wMpKnd1T",
  "key38": "7nt5nkuBXW3CkQ7nfSLPwJUHGxC3c2ScLgo5Gc7HdvJmuzUcsq9NJd436rfw1qMh4prdkNy5g3qTxB3aCg3zP3p",
  "key39": "1RJpB2UHWQcj1A7cDi4xiXeSJUKGC6mdd33ttBxKhT9sA6MhGTfSJHwFNEPMZoo3hyZZVZutv7pXj5c7tNcrkwh",
  "key40": "2wPMkjwqbkzEJSJkVDqgrUVf7UutuDsABs7o7Tx5Vouez9isPSJGigCsVTDS2X5oik8qCYbZFjKV3AVyu7vtp7eQ",
  "key41": "4ifASj2se4EdcutYjBdeiJVQM7JS3iruNdfY4kRHm4pPnSoyVVXCc5xttFKuABhdgwJAkxNxcLj3RyjqdAkJUh21",
  "key42": "2aMRyXLXJhJED3mHeiuFXvm5uhDQUWuzNMjv3m5u9TPyZitYU1qgsy7KyAMfNczZATfJSxe8Jgh3yqu1Ng9BB97k",
  "key43": "4jyGPvEfHdPRbnNmk32fxKPqKA6V9mfiRpQxToedbwLYRGptXgV7ETLHXHavwnhAyrgnpENmcTwX69TwnxNL7SAn"
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
