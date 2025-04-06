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
    "4sToxnNKwBd6h7AugWjjrtiip9GAnAmT6EjhiovEsyik9PmX3w2MbafTa5JYcoB1Zpf6ZNGpJcrzsxaVJhS44zie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ewvhe2PGHtFkf4ZEmki8p1dBur7LqZdqKexu1Yg4cLY5kfCJxePu1SMiNB8THe9yAjctAcdpqe1RTXFKpFcbqAf",
  "key1": "Dj83nxtQXvYP2CYrMhCNQiicr4NXVowFVqZBjTwgmx7XFXZVmwPX9Xfd5fYA2MBofkEgc7SRrRorffWdMrMywFC",
  "key2": "ePYDucJtokhPQdts1b5K5UURSBpGFf7yURumQ7vqDVewx8tDciFgJ3FWYcdZkN4fVZYSU8vYonpKbegp7Qdz6hy",
  "key3": "4i8Nqmg824Pffa75thRWWYkYm46Dd3HdkcJ8cRsPQ9qWCqZHEYbXhZBZF4QKDi7bjjs8MknUDVnpfEwo27BXQj4D",
  "key4": "PxQgz3gkeA87S6RKE68kPtwBB3acAvF2ssWdMNDh3zjPxTipS2r6ryiAUSbQ5oDQprhJqi39bdgAcxMedqstDmA",
  "key5": "jLsZMeZXMAMNkVJnCeiZhAGJP5QecHxchTYzkVLmoABCzvg5MXUgFNRMmq8Gvawz69t6tKAiodr3GQEepDpzs13",
  "key6": "4XWZ5smwZK69znvNifuqqvtjvtoHD1yoLftWfUmveKXbfBocXQQKUDVuP69XyeNT5siYffdagUxaUMoi9xiSqCof",
  "key7": "5msuQVbkzzpjTAQ5nCdPxD24eP8P2ughcLtxpc81ZADJpftT5mYQCnc6wMXwoFTgHZsiJ4ozWfS3qJ3x1bQ9KXce",
  "key8": "2hqXf7Zs8CbCVwitf4HmU9GKa2FwQtZv3wwckZ7XQGvceQAtbLqcsHcK2ZVgPJYgAjTuQ2yyhQqJcgeERsq4MmD1",
  "key9": "3PR1LwLMnNvBLGoBHQ55NHzjTxiBiHLDT95uPnAsHFQh5n8pTEYoDcfdj7Dm6kwcG65XjyhsV5Qx2vTL3xU1zHsB",
  "key10": "3oJBzj1oSgfkkjmxfeSaEup6UonNQJb2HnXqkkq9J7VkytvJN5ByzBaGaMUQRQ9HtUNqd7Wd6nzKDPAA7Q48U3pG",
  "key11": "juHieqLDrPhSynX29gYTsMDkKiWWHEJm8eCG2yPhi6b7GTeqNwg4HTNnpzhNRqsAh79wK8D9fMEh8EsLasWQRmS",
  "key12": "4qDjTd9NQKkgyfFkZVFdJoTudtLr9YkW8AAtpgBEjmapY6GQNHBaoRd9VWDdx7u9QJFjspREGrznrdKaW25FwbQi",
  "key13": "5bJeQtjZuB8Yh3u5hkCWMsWXKadQdAoi9iHP9fFdd3KCbCpooKBJ8JjbMtWiXKMmf6qJhWiMtTLsgpxCkodgJHcy",
  "key14": "5BX4pXzC5SCMYrsKWy73hFvkHmwAAK7mmPoJmPUjiqyA5MwLgMNuTEx8EhxUVfLNJTqYkhSarB6Eg5vBWj7o4RkR",
  "key15": "45EbF9S3kBL6Tymh5Gu49Dy1anyxfrDHSo9LVg4LMYtLTQvvtZrtx9kh99q5ttnYKiimDKtgaTBSdrPhxm8fZ55x",
  "key16": "2Pk9SNbQefY4rmHfLdzQ677DBG3VNzAZKmTQtATvRb8xrLfsKCBJVjonPcBC6hJu9murZRioeSNxb16AjDzij1V9",
  "key17": "39hSye58k1DHijeYiLUrHZvL1gvKMhpMeQfhRMEnzk8J1LbX6354PWodWubk7VncQVV7PZdWFCHkHdpGvVNbewE7",
  "key18": "5WoCwe3cnq4cG9muSNzaem8sSbCKSSkk3KUdDhph8BsQPUPrCo5ayU3KLUxTFE7xcBAKRvaPDZJQfWYrdKcMwE2Z",
  "key19": "gKABX4xcj4UPDw5YEy9JKrnT4chiUN3kgNJBRj197jH1LrLeS5t1zQb2auTR3ncP6A9jeMd2kjxVEwgpZRqAyCd",
  "key20": "52HfHnuLiqJB3Z3CGMTw9G7mzixxhVynmjZohKVL83usykaSs5NacRhTE7QSCiKxZNBEhBqfBkiZXUbEPWYnmyJA",
  "key21": "5nPahbL91HDqFoq7oWdQCBiipxJNhbjGNM34BBNgJ5xdaYUXK8JVAXwcrnPfy7473FTYZQy3qMeAua6UDqSe1NuN",
  "key22": "4D2GH49pD9MXSTaXosELjKzGH2mMj6E7UPihPAnyGpb3WJN7q1bDDjvdErFP1LRbHN6ja66uP3vnt2W8qnmwvfzw",
  "key23": "5fvCVTE9uQipYdRtFkpRLCbLNf7eSi69wtE2FPcyoBzwh2EqtrydLbhQcJgv7kBdL16QTziLQSiRThbkYhLNfSHd",
  "key24": "34L5UT9Sn88qAja6SjGhz6yCfPZhDedyVvLkKJ3XsH5s5UZD4E4hmTv6trBSxRkw3qiEJuExQyF3LaKPk4iVPaYi",
  "key25": "Tc7AbHMfvAztE3zZaZAXotVXUVjWqQuYPXQAiKbFERWeZVKjV3v3nefTPfQgbYL7mu3GwDf9y65CYtfjGjEAFLb",
  "key26": "McGoSjQjVtk297fuKvWJbNMvxwcV9q9TQ5TUTFppRYXxWssF9nLLJDfRWQ3iH8LbzcTEiMZowFKdrJgURXuNavD",
  "key27": "4PpZrqbGfzTi7ZJaTyFQru9jFmCCZBcGZqWfxzd6bKw7k66uG6Tx4e4KCCaavCFRuMXMZ2XiheaSFbJb4rjzQcKn",
  "key28": "4Z1airwv3PSTTZD6gLwn2WsR9aTnVEo41ftzCVTwXq1ewiA6afPHqYLUGSVNbwLGG3YdZrks61J12zBxQj65T4Gc",
  "key29": "oAtpi3Nugcx6SQWAwySyQm6FEMQ8e3vk7VZNQwGhLsnNFcomb5PQEgokeMxLrsMz5MMyi78ne9bVDSLwbcpuyAU",
  "key30": "5mvx9d3RqzAf6K98uVLdXeaHWveGN7B3Ke5QEF9syBQR76SYncLikRm32RH1SyH57b2wBeePcaNu7z3nU2MYaRsu",
  "key31": "4XxPe1kXqJZKgoEEDPNWScFLXfWToJPNVeCTF8sGK3sfQNwfCoYbqyz7cV4QW3GUryBt7exaHGerLvA8pwpkuZHj"
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
