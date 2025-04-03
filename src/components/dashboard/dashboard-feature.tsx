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
    "382kHhxcxEArLUg2zdrhKsYZNEtntUzMYiCXDfzzPBoqjYdWNfKeKRit4SBE1TJkuSytk9RXpYz9xjn9RbFb9hcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JU5s9AL41HSb8H4FPxhH8u4xALXNgMzUDs6fSjn5xBi6ssVLnUnQgyhrgfXZbfEVeNkKewgAGfkN6CN2NShZQxq",
  "key1": "2fLvhAaKbvAhU5s6dn5bd5YZ3kB1wXgrxZWR4pVTdNiLiEa9p4Sc2GxV7cuqe81E2CnyLURxjVrRWYtox3zA7JHU",
  "key2": "i7r53GjVhUGPqEZBpcBPVoTtmMMoo8CR35nL5GNrWJDTBnhUWZyRud7S6iwk42Wx7Y8YZ1Cyv6zZVKfHUp6Xvxb",
  "key3": "j8ivjoiwseRGYRHL83EzzibGgYHax358Lk6GFXeL1MeNwL3VrQtzavHmWG2ohvqVXa2ffYUG1sQiJ9fyQfXaQD2",
  "key4": "5me7qF8ctFuMBTyCMwRJZTKdJcQA8KxhrXwVWBzPuVdtiEri6f3kqmiveUaSvsFWMqmLcjf4Q6cvmuoHwnPXHHiW",
  "key5": "29arsT13v7DFZZR7XTNoiRaqdkdLa3PXJFGA1NcTuDAUBatya79rUGb143H3TdB3vzMcKANyDhowXZgsyyiYaayM",
  "key6": "5aWc99jxs6Y5zbVf3s3ycZ8512ho2t6taBsaEBkYikaYU3K7wP9xjfZVRugDXsEPcvvxjFjgBtRXz7ZrWACghteY",
  "key7": "38kjzLcGncR6ukXmZoUYecnhSLvye9AwGCFHukzzm6hbT22h1EAGUKhWVhnuJM7RLzy9MzvHvaNZCrYRY9FhihQd",
  "key8": "49PpkTJzUw1GPNHyRMmVbu2QPREYNFSCkMLebMAVxHZCea3s9hVUUoPU4frf62hhTJWBVEQ1vjU5jsvz2RY38jpd",
  "key9": "3YjpGBRt9Nq2qj643WqD2nmV4UykshZhT52g9PXVzBtMk1aJLkuZmDz1KuGPUU6arnePukpUaLH3SzpeGvJTCKJD",
  "key10": "G6rNDKuZLpoVY15Y5Psv4aaeQoseWdqTqFwsPf4zBqDh6LUee1MhUxtszVqcQLez6MAsead4aC2KFMa72YFNBuf",
  "key11": "31ADq4L2o5PUsup5HWxVQN2MUJ8HXp9tPW7iowpuqpTuPdFxjLKwE5FCFwPxLJuXQiCjcBwycZRCiJP7hSyKXDZs",
  "key12": "34fnce2bXvEAD8tUUb4FQe6scMQoqsFYfUwbFePzGPEHG5x2oSo7Ff2qQj3tdwJcrMW5KP1GL9DzXazoxMCUWhDb",
  "key13": "4ZycwLEoph6ykktDU8ZwyHGDdJ6Dp1aaK8DDvvJ21SFG7FJ2Vni8ppNUFzWm8bWaZ6FAM6QocNVNRyHDyiJKDjEM",
  "key14": "oXJKJPr1MrjAPPqD43iigaqQ5UKJ8j5tiofLsRaF98BB3Gpwx8MCmuk2UW7mmMKpA3JK1BJ8UaRedAFpQmvBVCP",
  "key15": "4XcrntF91cXHyEJiRH1BMihcL3s3M259Vtj7Y7hdyzGmJsP16fersC5Hwoj29j6MhFz3TXYT1YpgcvyzPGV6wM72",
  "key16": "3i3BQMwmAge22SSazYGaR8jEY48j78hH1xKdjTthfhQhuttUgqr5AS2yCzW5SDxthApzNF1kZ5h4WEE4iXDexdJQ",
  "key17": "4qHgXtsH6WjY2aD2riSFr33t8CdS3X2ms9jXCMAP8FuHgrKNC1Vo24SuTP3mSwzFUtVpo9wbN4R7dHYBwi2Bt88P",
  "key18": "3a8PPHvFuhSv4AqiP8AaS4UjNxt95NJy6YjA4JP6gffjUV4PHQN1uXaqv29gqTFsiqbr8rsWomCk6wbCz2yrtioN",
  "key19": "5ZVzuoPhcmZn9LkikHufkN98WomzifSHRMGLtnooy7tNC1ujcwC7VreCTUaKMu9rm7FGmwQnfYCf6eXJ93uwDK57",
  "key20": "2PfbCuuyZjne97aqUFh6QkFhixWSPM8M7YSF9ruKE1KHX37dsQ8heNY7XTc1gVSM4jPvEhpYZVQh1RAMR3suU8oi",
  "key21": "2dvnxj8F3fDFJmx2EgbRFVemvQmJpkQfiJKosrGCJygHhUuBUtgMYjPjiqTYDwM1ZZ986Aw3soPLpcuychDYjBCU",
  "key22": "5ejkxpctkxaQ4Ty3Nh2ivC8abgNj2b8JR5xFph1cqDvAYPHEtC16FCvB8Es9Z3Pis6whT8yg3XG2jfqizmk3E56L",
  "key23": "5tpLYP4KuxNhW6YHSoLrV1CrAYmfHokB48vNh11qUu4wvprAKa4KSfnysYeGhWHVVUCwLnAKhz8YtdksdtmmLDnK",
  "key24": "5h2QSSfvdFxZn3HN9ZVFPynR13pgoXZxBDiEVWwkh3HJNuDXdwrp4AzPDqy3YzevNoCjztDdbYSdegs6dW85eTs6",
  "key25": "4sNnXMkyJiv8C6c5h72eW5RKVtCoUpT9QMNeTSCfuDWN7YARhfNHxfXnmKjCkMbQDqgMNnUfkbPR4JQnRgRkkrks",
  "key26": "3RaaUC2S1TNtZoJBpJcURpyTdQej1bT9k5AgjZqrTHKDwdi39w1dJgENnqgvZigasCUPFoKs6sMkvvQ6kk8gYcrM",
  "key27": "45eHFoYxbzu5Ukijkx48RfZwRCbxvu3f6BfkpNns97vo229QfNdRoiQ4APyQwBLgc1m9vwD1JWMLw5gFzFepEve2",
  "key28": "5A6xj7sWn24H2To6347tQ6YGprUaDfmBaMu5h4tMibh9dQp5c8UmHLM9qgqw3QdqGaZML4V1fgbzat9RDfXLLzoi",
  "key29": "2fQTg6ae7nx8jJp3wHopjhv8K31f8Jm9bDPaBKRbkQZpFwPjrkyS9zkD29Ud7mnTaovrKmtVEgKuzkrfEh7eqCjS",
  "key30": "3qQ1JbFFed3wA8U1jmxwU7zhvg6kZNHYRvv8FyEyLz1mgFuFhxJQzm4N2rHroXHcy6NX5nuG1v5H8aChY8VgR54n",
  "key31": "4UTx2TvVajsZmC7vmYzhMgUST6zdD5TCVbq8uw9Ur2no56xv7qnoxMBTKKkWqM97AjUC72sDiKqBxVfUwqwKZTSo",
  "key32": "55A2JeDVRPhHpFaDg9Bi2BQFmdszzxDJ9Z6XGhB6xpD1m2U6Bxb3SR1Re3JrkyoMmb2J6KQMEH16FwxTYn9CbkbR",
  "key33": "33PXEAZ78Ayrp4cyJXtjWT64RqXYhP4uaAKdEcrAnK5x3Ypm4wPzy6LAjwJQpo5xHEZWPwqYJjBynG8EHvNa69NV",
  "key34": "uMFBKt4eMP4nZ9B3ARYNSeNeL1aKc65UrcF25rowvmuNCmETzBAbuXqK2yXNNk7k8WwRyGtBy7sCPfhKsZBJxzu",
  "key35": "5Zhn87o6wWvHoLLe3KWXJG3Sp3kHx1BoB3U6EQYJ6q39peLDeng6pz5BmtD54yGkgPUBEHZnr3MxM5AfrcMhg1L9",
  "key36": "3E2X7cKt7mxrPPXfZVvd8Zkr7zQ6zAzhQRmYc5DMxvxwo7fAwhkD17QupmEgW7b7Qb3JFPEGAKx6Hn1LTMcsHPGm",
  "key37": "37WKu7sC1N1spr9bEaU2swkqYUTsaws1dDvusjXAuxfbDnT6y7KyYebpdfFedssofWMyt1uTKfVpg69xBC63REzQ",
  "key38": "3CoyWqtiKmhb8CfbULWXfK2RWetmNPkuq3EAwWETzZBFLenW2dUDWLf19S2gJjBLDaSUUTYmQX5kMNV8znxx93DS",
  "key39": "DfMgiHmwkUrqLUv9bszTFtXtDoGR6WCb9giAm1WnKkJjZp9LwkJqNqYswUh1NyYBLeufM25TepaELBtKbJS5KrZ",
  "key40": "4W9GGq3R46igECMhtxx85ULbat7eRZLhcRR2xnRvfyLK8RDD7bAemLjHm4KSaGM2UPiZgmZQcqFqkSYYCv2bStH1",
  "key41": "3sjXAnXwVU6Z4w4GyuTn1Qa9Y4L4j8XEk78KyEa15QSx1qcS97dFk7jZZezjT8y9v4gPFhC7QXPUuFGiXormr4uj",
  "key42": "5xUXdFG1MUByUTiiUBbqpTEs4k9nFWiAuZRAykXR7kGSCTTM3GdQmFc8vm8oRGAFrb6MCHBKw5sjmFy9PNtJTvry",
  "key43": "3W2RRrzp174kStYYgVVkV6dMEWgwf2Bmu9bep4gB9AKptkkMGBKoM1NuzLo6twfRcGD6TgtASiSkv15dy7SFnro7",
  "key44": "3hzuzhSDqNKE8FxGVqN3XE6iBxPUX2Za3uckhNHPanouKSv7YptDh4jQYkxDg52m5T3GiDuJ2TBAvqq7rASxm7WV",
  "key45": "41EMy6qLafRANefDjp1VBgV3s4TcE5U6JKL848uaTC5kCBnvL8gRrjPQ7QeQi7XyPkKrbDMzCwmVoeYBgtWs2U1S",
  "key46": "3j2SAvBDHAbYN3admCHdnFerGs5hG6n5S8SbroMjFRMYEE3jhDKfknNSaZXPZDca7YKrg47B7rtqrEb79Usq24wG"
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
