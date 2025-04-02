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
    "5VVjPSR36aoLMPDy81UbxfrBWS1XmihieV3beFHBHiM8tTaX5QBT65oes7GWrScACPouwLTYMuGZP2pcTH72ZALb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1tFSx1hVQDtBpP53UyMDipXkD4oVTsr1aqXYbN3s8LreTU4SwCGF4Yh4xUrxS88oRbU7WL6RoUgQZKAYrm8BsrE",
  "key1": "3NMSpdjLqpCdmfrtsEAC27HPLCvKGtAiokQeXqG62ymjVw8pRY22VfnzscnnAeKpLACiSwA2Vr3dFYX8GqTzBaVF",
  "key2": "r9dXvrex7AiRmBLDPBxRT2iBAgkyFdPqgwZ6B4DncHEYSEKdm9sNSXb7F9249gi5VaPmJQdyaKxTWLbJUMLRDTz",
  "key3": "x6V5P1tPvuvQADBjXPmE1DFZNJtbPsBiEYyAFsjY5JwDuz69Wj6P6BQ2kRTdLzTH5F227gTNgcyCteWGehCbPCi",
  "key4": "R9NVUwaTXfKHBmK5rx3BasEo7evvoSZgRwPB2Wdu8EmQhuLHmoEYAGaMiRKiT5Ke6S2jgHatWhbaT1oNE2FNnwC",
  "key5": "6422WM2sve3CE5MUwMxHEYCJMZQUrt2HmnixaLSqxkPgZXAzMw7CBVoLQ68MfL9ohgyk7TmCoxPWpCs7hyhVkDrX",
  "key6": "mfBV3f6dX91hY8yy1YYqed3o7SdFyr2tfL16WAvCVySQZsLbMeBwcDQdJatjNQP8b1bhKjb7fnA29J85jb3iCYN",
  "key7": "5Wutf2KhVWvw9kE1XraS1txuKPB3ZuB4Y9xAzLW8a46Lo3sgHXgsGrqhhY5RKqHLfKckfrrjZE45QQ6oJTUnQT8t",
  "key8": "k6WELR9TwNWvjB3Ctw9ApQbTAjh1YCcwy4ZmPBNrUPiTbgxV4MMjEam3MWWdpUjmJAfaCPbiM3UNRizRDddikC3",
  "key9": "2LrT5aJTuXiQCyrKmwtFCK6yxxeRSZczstYp1aqnXqjNFXHXvVnQ38q4HX9VdncKjvKzrGZ6zZrMXxc1HHQMsnS",
  "key10": "3yTHByeJgoF5oTCVbodHJPWKgskoL99dHfrwFeTjdCdTt4qUzCRUJsvDhQYZeJZxVRh5zBD77Vg46u4BeczrcdeP",
  "key11": "21XWtTfA17RseiV4jEqoybeLqpf5Kx7HAffgMRDAdbMnsBNAgziMhumPzPxnHNrUAQdcmMetxiwftE5xjqQtsnwd",
  "key12": "5LVj8ghhWctdf6WLmyPGiV9os24GBTpBjT1bZWc9JRpKpj9MkPpkuLL4mrwd8y3JoYwJm7wZtmNuDPnZARo5xAiv",
  "key13": "KFvz2fqDUyH6sxvEdWgFn9MsoV5VB7Gs6ZtbAycqr7p99w7kLg4Z8F8Hdh3nHcFwpHssS2ys2PE9XkmSNNJbhHZ",
  "key14": "4cpfsZXuQum1Whsqrx8XHKHTkzcCvPCvb8C9DvY68oCktrErvfAABYuGVZaJ7JgruPea46nEm8kTJ62inB5mPDZk",
  "key15": "3ES2LQAEVnjjB6K8BL2YDqnGMpMrKmRW9a8yUfDvqAKT45WqWGAJr3gCT2wrVoxw8ATtMBFUnGLZT6se8AUTfbo5",
  "key16": "5papHfPZGuSxu3YZVkcjHpXWD4fPRcXfohjyc6J4SwvXxU3yRVjzqCtj7oGkiT5JXJdSQwJQjErRfYahu9DE37yQ",
  "key17": "53Cdihn4AhmiVYSmowfPrqxQvdhm1QHEQtkB1quJ89yczSYk7CuhX5iAPMYJ3BULK1ycpbxwpexeUrK6jHXUbkNW",
  "key18": "63job3qK7beJC8qgSYrhB9M2NeyUGVgKg1edeyHWgenxtgNHJ3tToeP4qsCG9wfokC39CsZbwvKAKH69yDPpGh48",
  "key19": "62CAdBaqocEvQPQzCgJ4W8cTMepbd67LGGwP4mgCS9H9y8xACADJcmqhLAAGNXDSfeHGf16uXw7ZXvDCPAdu2XMY",
  "key20": "5tHKF9PT8kRcREj9uWkMyPVjoMuKyutsvkqJLV99JjM7Cyj772qExwYEHbRVwmsXYDsSh3WNc63dmzqRYy47VU8d",
  "key21": "31fZUjzUXCq3dJSbCydmtugE8SodoywQQ5WgpgBEj2bWNbKw7zBkMgAPvhwNLH7byUMuqWDEmbRk81etx2ets8SY",
  "key22": "2Xwcj5Uj2Sz5xBpKJ7MZt2fUsRaDCZdhkSjf8Z6LriH2SmAbSyejd6WLQ2e6FtUDBd3WyVju5s35eQM9fcCkBhX5",
  "key23": "mqH3riUniLXfPyh6go5APhUZ4Cg822VUaFVSi6Z3TdjSjBVneppTo6xkRruGwgNKNMuBULU6xgvBtiFmgo2hHxd",
  "key24": "3Y6TJnjtGG5G6R3d4A9n5n7uoDnsZo1WNqqStC7EPpe4UkQwAqidgAfV4pj2M3YmC8tc33bFTFJue3P5Y79tbosa",
  "key25": "4wGHHqSyG6Q8UJKHX4wBMp1o6C5UQphtToSTsCbTzqk3ymCrWVUkfUMotFYX63Ss4iR6NB2RVpnw5npDX31ys4pD",
  "key26": "3DvbPKrjqfdf13xYNx7SRySD7KZtx1Jx39bc731t9avmVFjVTZjCLFxhbvUMVbN9QLjovp2WieEfTfkj8fhLMebF",
  "key27": "HA11uHsHma5TXHu2669GV7qJww3LVAx4Tae9ZnLHLfDzyBKLJhK3Awr4qLA7TbbqN7SjwGiNM6Qvf6LSXXw4fNF",
  "key28": "223wZYqoWnqiGWJ7JGURd3s7peQEdTpzLzWYds7xNSMHyVW8VhL68xyziV9aa8mkBooPCYR2qowra7sJmTaVPFsp",
  "key29": "4p9e3bXkkt9b6GpyL5jNKD67YukMw6hLENZGedZkzESA1XTXb8cvG8Ugzm9DGmwsVXKTo2iH3w1VgNRqfQPqNy4R",
  "key30": "2QsZDaVXfsKcWiKV23WD2FZ65ivfKuHR8DeBfn47BWYZSGWTAUWYgjSbdAWsJyqeja17nYZkooHQUhFbLdwS3HBg",
  "key31": "3dCtcXrbo6QoF4ZBHCE97a3XhLRaiavgT6tDZTCNeL2TqW4B4dSQfMwCameLL1Xj4UPe88UrWujCy6UqWMytCW66",
  "key32": "4VRU5CxZDNqadHXkMWiF8asQYgvEZXj6r8qhAaHRu4QJFEXtfZMxushFe7DPKpkTXGdYqdtRo3UfbwUeEeaWWAGp",
  "key33": "4NBQx3XBXmsCmkxefbic7bWyG34T3YMZyK2EpJg6PjiHDWeTLvxQrWvBfPSkwDHhAeCyMTr3P1aoJcXLP7uD3uiY",
  "key34": "22VMuhfC7ewtczzFsUFuYsFk94xd3oiUqdcs1cKTK1a7X3EMccTF2KnPmUiUCTj7hsjmtBfLRfjeuHArN9mVkvLq",
  "key35": "yvkSi4MvxbBAxLDXAeqqpitAccxr3E5PvWDkddDaYAQQeMaNWPfNWkQn7bSbLXdg9jtjbhUyKWfYtHrHA2Q4i2M",
  "key36": "4p7tX9SXXZXJeUz9WMetyhWxF3F5nYMWWDWnnNQR3nC38qCfjK1YddJ5SC2bpW892xc4E97LuFRZu7LEV35ikaXe",
  "key37": "k317P4WPRp8NBBKgsWRrujrp1ifuFnMP4A8NeNq88KzQEvBepM633xyRTMiUTLQcseNKHAkZgtuPSNivq2XH1pc"
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
