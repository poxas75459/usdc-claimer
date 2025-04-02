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
    "3hQBEb818ovX3rKTtozvsjPLhR3EPWEzPyPRrXgR28rURWRhLzD5mhB1RmbG7wGLPpj4CskTvZ3iVVE2KQbfMTYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gtGiWr5Ur6CA9WuVPL7je8XY75RkM6aRiMPSauJSutwvUdLy9tCTnYA7zL5Hu5bTwzaWUKPytuMmaKNZZpPf13H",
  "key1": "3xTtvziWZF9BehVMPEcmpbmDfseUqgT9QUdrdYa5dFXLEa6WpRKXsiGmT7mS1x5GrpnoAQAoy8kx3ivJTuLJiZAb",
  "key2": "4314H7JRtCHTdu1KSBxPdKGggHoUE19Zcg7HJrSSpGTTNAgrdaJJhGUrVZju3wLZFZCXERDstPGxuYZ1zUB93a9B",
  "key3": "3EJmGk7Jth9RqJMdvfAR4kQgmjm173pxB8sPGL4mfgoSMxZN9vL3MUEM6bwXYhQDiTaURYkyvGuqdeMtEYzmcQMw",
  "key4": "3bioarzMxkBdjRHY7ncAGoR3gNSCapUczjUwPnFdKLqDjTf7Rb2QFECSULfL7fuJ5NcsuZPB8Uge2ARRRFbfNfrR",
  "key5": "eyaxGWwUM246rdJyo9h1VdjAskUZcoSBtTJTGecUhvdkpUcvHKc89F4RdcZ3UQHN8iX1jN9RKj3TiC5yeE6mNq5",
  "key6": "3CkM7wNTw1TgZ3cW7yupQd49AwiQ7QAXP1nRAnyap3ia65ReywHBnN5pBWjMb9X1gigGfwwbYbEpVe1f2zQpYuQ9",
  "key7": "2chtTvE62k3WWRdHtq1nojQpzZUFyuJqhLfn4ieuRXAVoKXmKFLZFXjyqnMtTwSxHERaETnoXWqUeJAAW9TE6frs",
  "key8": "5czUYuBczFgLWLvchvxV13KmUThe26mZ1RFuPWeEya83GZVDJRReYV2AR5CFA8EGgwWCGixKQKPvyRLfPguh7sd3",
  "key9": "S5suJ2YxAFjaUWDZL9uny95w6i4p5EcHGm4Nr23VGE6FXLPPNNgRXZjLxuxDGLDLmVah3Eg6DXHuwq1gtnGy3sc",
  "key10": "2pRPXbWpeKqLQVKYcH1VYt4VaNZqpkEKFm3vW28oZNtXXah91ehpryqzdCnk5EEXcrjqdPYEchjesbhcQ9L45LXh",
  "key11": "44oJtxXhUE5AEdCL7qV2RLcH9qY7kP24wMwtxJruKtCWKQnwod1eRas7t7JqbE5Z3mChXP5u1PTzjTM1baMGuRsP",
  "key12": "3ozNX4xP8q9pE9gxwJ3r6fFYWCjZYk5JrdXnVxzad2S7jA2EggkdQYVv6uHZc2fZemo1mW9CHCaHB2wyZZNj78UJ",
  "key13": "32N9wwzzNb8KBB4vU7UGSwZ8qbwGUQgFDk5JyP7fxbcVuThrvL3ahsnPHDnFSsRKdrXD4u39B8m5B8ppofgfxGer",
  "key14": "2XHRASSoiz11Kgts5ac2UwXCsH2fZoQYaVJGMqwK6VaeVDzboyzq4QSMx4j6CtFZWQknQdJyn6KoDLVdgNH2wWbQ",
  "key15": "5XRFSDDA9VEyj9CwRzaMXuU16QT2X4F4oKas73ydWbHqGgaDvYKqjc7EtCEYfpzMx7hpv6zfScz1YN9DBvXLLGA9",
  "key16": "4qSSG5WvdzP2gW5YPMnyYJooEj6jRut9shUPrCbD5pRCEWdYWpe4Q8MLFDbafmHdDLcsy9i5u1xAUo7kXu4PVyc",
  "key17": "Ksk2VGwSW8QagAFQ4csE2CiHCYuCxo8gk6hxo18zfQ27Vn6q55aNNMePmoQt1NuYAaDsrzG7Mvg7ogViFWYCxsg",
  "key18": "4XsgqySQRmQvcz7B1iGtVNt1RSx7pKeypPhkxA98WM3yeH1SHwYjmxf4sfc6TLFUbusbUza2MKcfJHC7zpskGpbB",
  "key19": "4dD37qkpaiCk5D2L8RtoS4fAYrER1m9xAhBpgkZCHpXvMUwCNgNDvkiKB2XzYZtRG1HkPwBw6n2HHRbbJpUcXPN2",
  "key20": "2hsXiBwMRTWXEjDjmmGYdiKd7GjWHvFp8FgQjgZrDit3L9DXpqF1y2Q6GtHbJURdqD4cvc8uydF3azDkKbLMqSuY",
  "key21": "3XwzhhDuzEpnU1bohpfLgkR6ete3huVGLHtztAmKBsQ66WWUJMS6Ct6L7vuP7ADfXr4j3ZoEkuWswJfiu3SvhRYC",
  "key22": "3eP4J88oGf6RJzwpGxCpMT3FpdojRJNxKJqKeGDVHSJMTNFcupqNe3v2UxPw1XRX9rcBVBCR2yCN7YTZnTcqEfTy",
  "key23": "62p4PvUNfQAA26jZwsgSDsw1whAzPeu5KL3obeGr1j7RdNMYqBntvferFVWgJChEY1fHUeDfQxDzwTRzSpnWybSK",
  "key24": "5k6pathE9pNPbu1BiwTzTZQGkbA8ZhTpLcnsfV4gDdKrDmb9NdESDUhsBsN4VWKB6FTAeoQDXMxiXharnHRa3T1",
  "key25": "RDT96486nGeStYDGXQ4NFthMNPhEt9d9QWF5bzZoiVRXEVqj6SHn5MstYEnCQbDYiqASGEnYqwVmq7tNLTmrHrn",
  "key26": "5rP1ENrH3rpV4VkaeKZ67ZhdzT7ZGGdW5YpwLQPXM936fKbMq7tP6gCsTEYvM6ntLsSvc66ARHZd6ZHoGHZv8zA9",
  "key27": "3Xs3q6Su2ueDur7fxREHmCnyibpm1nEJTee4UPTFQBDw6w2Dwjdeagruf5vWoR2cEXtsaqwBeX3LpDncaD4G15aY",
  "key28": "38ndzxaJzT1y1BVy9XfWieGMmfpW9D4515sUu1cVUCW7CKuVvuyEpK4MyKnJzHNJGD42sfcTdLMFNknG66nxDX31",
  "key29": "2zUGmuJeLgXPBUhZL6QTZCNFKBaGx6Qr7We1qU4nFGmFppDntvwDMtqcRdPm5RVG89eCKXVq71Awhqu3YYnRRKrV",
  "key30": "2PUomEFvdVDXnp3iYANwqAYPCo7BRbZJfZB7HN5ZZ4szthWUSQbggARg5bqG9SfaWLJR7CaNmC3umpcGzuUZnD9G",
  "key31": "2Kh2QiaoMW2z5AS66vR7XYCk5o7AY21HRMqv8KyusFcbJGTZ5wpeXhUwpMVjK5vWBZdeDvqPRXQjwKJ2TN9WNKGH",
  "key32": "3tRHJJyok1oNp7NJYUinEFgYo6hrTxDGB77dydwk2VdvCSt746X1vzfEP5M1nqMHP7M9TRSFUmZDeDBpnm2mEfJm",
  "key33": "wH5b3ah4VB1MN1ZxWUj6nNBBSU9WXoobXbBYpkhQTSpAVrbs87bX6ThaVLaUj4Pk5dck8wKX5ytyWy9qBa6Vzqj"
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
