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
    "4buHyHgApuuSAaCeKTopAvpjoQHSikf81QozsuYkLWkRcJUTnMyj6n5b7ut9m8eBLw2ihCGi4fQC31MKeN2oFxzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Qjutp9Xem6Ydsi1oKXjfMqqGcTpFZK6nbnMTJg28sRBnQgcRCSpmFhzSvYKUfSa6cA2NMzcbRKE9ubj6EA1mgX",
  "key1": "SHDYXHAy2ZZLM26cYzNh8SKBAFh2ujw8bM8ynJB4MMDRqno9o1WZTMEZfQ3RVt5g8cPW2qChPybe7D4idTCqGFA",
  "key2": "4azPdPodQ7TBa7qwb5jRftxPZsZctZxzYvK4UejYjvUyRhojx7jWxMKW1JhtFdn81m3iQ1mDwbdHxWvpUbaeeC6q",
  "key3": "xAenMH9igTn6UJ4czoEwLuGcBPfdjLWf5MGQZR7DJ6KwnDBrQqCenyUuZck1GViK35vfkaLgzfFvZk24qhDewjo",
  "key4": "4pDqVH9eTsKHLQhQrv2smwiGECgSHb95B63HTS7s1CaZkfcJfDRy4Seq5xijGPBB3x8wFRe211VxQFjig12MFcoP",
  "key5": "2RfDaB1ZP2ZnmishTGUTMv2GGNQmFuimAQSx8C3SSE5VeLfThKTqtrYtrF1WgUwRQSUTDpRHvo3JdLvRJCQavUxw",
  "key6": "3ZGKCS1D4UogveNtu36kbGnfLDA9matyyqvLhe6NrRTMRcgMaELjM9vFc72tKHbv5HgwMbYtjALugud2ogadNbVg",
  "key7": "32yM9XoXkwQ3HTPkeZLrwbpqYtk88zvs2qyrzTCisUWkW55behPnzH25QtaLD6vQFKoKLxkpcNtRmk7Q8JEG74Dt",
  "key8": "4XBcyF9yMN99GUJotkKdQi5cfCtMQExcc56wVERkvv8bZadPRUmoiGfn2jH4TWR74FrsE5DCtjZNuR73UcU3jJpw",
  "key9": "FsoJGHQjsSn1KpBDp9PTcbHpZG7mCKvbqxji8xhhnuYVybe6whsKCvrB1gwQLTPjRwFMbhCaYXnfrWH8uoSutNw",
  "key10": "5N1WAZKt8U5Uy1Q7ZnrEN2MdUdYvwqHB6STHArFMuxqgYTmLBfPq2zoxkDGg86THvKm4NKrhCGhUBRCbSGUutx7i",
  "key11": "2uwjBzf4dUgwSgroiYqfgVpfgtsVjUYUzRhsEWeGtN1rbqi153nw51tiKVEJgqXcU6cvHnc9qLtPyDnHEgoRqMTf",
  "key12": "2suP1zBDighbFiXzeerdFniu6wKQcf1YL2P5q7LzifpX8qAeAmSqCG3GRLWNYYYvofAV5ZZ47CDiW5Qoo2D5JnV3",
  "key13": "2JSKqcUUgkVVVGtSGPPdjwkWP4tD3JCTvbGiTcyLeJho32EMqFD65ZrhTDjx6PexzGmRaqP2cEryJLUPdLkqFhPi",
  "key14": "22QZpgQzMcTyJirYJWrh8jv6xjRzfE8zQN9UTWhsgKokncQNC3mabo5A8DE7ZeZSzCK4xUSb5zDhksHaqcCtXQwD",
  "key15": "299wQtVuF8JzhLViMUj85v58dth2e9g1hhu4USm5wBfV3YfM6hGEmX3MGhhqPEkd2RdyDU2MXp4WuFQu3Xi4eF8G",
  "key16": "V9RHm12EqzRJrMK9ZuFi452Rq7ZU9hMTREWwDr1CY9AhhiBdfR5EaizPB1RrDxU77U2thWPbskFKz7aZvRvhmgM",
  "key17": "26gnz826CFjSm9a7wEX1FmixkjdSqJ6PgyxsNB11WodjDPpP7WzYyvxL2cv1kAEizGDnBAW24xnvvmSMEELqaGfa",
  "key18": "5qTgvxDqymYiKsQSZRfcffgsAj2nBXgFhiZvaRpMQwQfkMUfQSJNxfQoaKm6etpLJXr2dPD4EaCY8fBsQcNuWvWr",
  "key19": "3b8U6SMi72yf6jiMzf76XFdpg4PUpFQQ8BfNWd371nhAYo6sfiJQMPkM6JM5tdj3RS7t4gg1hokHqfL9rh7AWj1H",
  "key20": "56z8J6ihULTHM76Z6gVzUJmVDzhBpfgBb5MemxRoTe7XHGLNHPUm1ZWgAda3XM5PKXHAJ8R3ErmDUzutct28mkhi",
  "key21": "CMVV4sH3Up9SzmnTMY28C2GYYCgRL1ZR7SJPas9R73wYB9bC8znBsyYvnbnsNyTzydY9NiLfrXiA1csZLo3KxnB",
  "key22": "2yeEgRsQwoL4Dh1YHAM3Xz2nhFd2Mq6EbQ9RMCzkgDc4X9BdmU4VMAG8zMz2wEAXgjXFnBbbUSQE42qmK3AHXNgJ",
  "key23": "57Y2UdrafyQojCVNk4zKsMNeCh6DN7c6C6tBjhDWD9qJ2zt77PtKn28wmutjxzNvmhHMXpQWWpR2wUsPzNWYgrDG",
  "key24": "3NhyGLmjcXK7WNcQDzSEAymLemSCbCGS5noh4eKsyvq4Nq6HLTMywbN5ebSK6zt3ojz45TyPszfDELojPBVNgPiV",
  "key25": "3wrU6vPuX2YpqNPE4xy9pzC18CJiJzDhgNvFBRLCujmcRBM1YxCkJAQagQMkTe2yZgw6wLG1jrPKvWXJhCpcwsf1",
  "key26": "3DnwUPBB7KL4Xquge9JJEDQPeLMUHAYLzwixLA5Z9kXNn46XoKVvuvnHgWg7R7CTPFmaP4nFpHQppfHFYmPrBTL5",
  "key27": "yTpi2Qb6HFBywSKVitjXB8punmepZVnw7ZsjW2BqxVom44WWTCNJbcQxGEzTug85ChSwdn7jvLCrH2N5pzw25jh",
  "key28": "4Piu12B5HwgCyiiE67MusdcRs4MvWqeCvfqHLyQM8ZWewZm4veHwoJ91k6sxmba5hGG3TEBMDPAkih54nmhBGXPT",
  "key29": "3R7A7kYibBu2bwHY1xiYKUkcAcRBtU7G4Ti4YySVMozNCmnshSUvYKd6dnhAv4EtpYZNBNswDDTTCnfSKRPFm19a",
  "key30": "3XzEbZvceeuPo8xMUtbsNxgvbzu6D7dDdPDU8aXW6qjzHeLmHFjbUYmYwcqHoeL417vHPe8oVDfY9WPpD5BHEP3A",
  "key31": "5y5Cjb9jpcvLw3tetFsHxskvo7A6vFPXYQEYn6u7ryTbvSY63ocXTZRYWVRvTNr4P1jKr9ugNeaHXXjocs2KVvvr",
  "key32": "5eBenjLmtD79z1WqZL7Nkhno83Q9SMK6fBxJh2zgJnrZhmc12bQJ1CHBu2EJRADG1drN5t7vRrJJ7vp78BjmLMqc",
  "key33": "3hWo64zSu2Wx2VBUQwK6GNKp7QVAusfST5Qzu5FXbbvms4QU5YeaKuP3Ld4yeC3r7iRNmMF3MDSuosaLrzqYQuyz",
  "key34": "ZnxohEQ8NHycFFATGskA3KdHJTeZunYyJXWNQ2AYzmw6jEHgqCC3M7xiRZUsFbApFX8cRifKfd6Nbdg8sKc2byD",
  "key35": "4auU4xC42HX7dNuogiFWq3w5sY65XvdyymnNGtW8oByGkpzJHQ5FGG3Noz3tjC9yYh8TQVUTv5PADg2Wp6NpJytM",
  "key36": "S2hn5b1oz2GxBAYNub5uFzGTph7o11aENdS2kPmdkien3F9xsx3EoRYi8p7JvMoH9QisTDN9AQgmGJtsASs8VME",
  "key37": "5hZUqRmwaegqzngLJwjBUAgoCf7pUQafxSEd3f3yB6BqtALkDUQ99hodDNz79Yd83NaTYfYAEgg6TeyZJxBusy5t",
  "key38": "4rB6kX7zfpLmsSKeXVMMgTen75GPxqgrR1VS89cckutfxFCkWFLFqEUUHg3M2f3ovdKoYQegrCf3oHBU243XfDJz",
  "key39": "3eTipoBRjyWrXVVBryt92phgKLo6duBPXbgFfh3XTV1yqiaWxFqeYVsGB8XmCHeJJpYdokXBxSu8WCskb8K2TqEb",
  "key40": "3CEj3TzMFfA1ETyGAE1r727jn5QP271N9SLi1RbfAJ5sTZBgAU6PbjzCnMyZKC2gZfb5Yg7GKMbUdJnsttx6TyC4"
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
