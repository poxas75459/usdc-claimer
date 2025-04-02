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
    "wuzEwnek8Ddy4pJt6QTqp6Q4MhQK4DTQWHZFnP8e5YfWjoBQzCjLMmtCyrTSDb2G5WZdjrTAnzaU2toDkX6Fv3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a5x6dg3Kg8YQaYn3rzQceXiftsQPy2D88CG5L3T4MNfPCc4kJpv2dzUHtzzsMaMn46DCmeeuX22kQy35nW5iaNd",
  "key1": "4TW8BH8nkZKqcjmavLH3TT2nzP89WcApu4AABKzTsEj4G3MGfHh8SmDaEQ7b4WjUqLnHLeYBcH44s9vUyCW3m8Jb",
  "key2": "3SGPjHMSsauDBwekVbe3t6HK7hYZP39bBWwHi7mbsCeZfAhBBaLD4B27UfbRgbbH5WLreb9U1WcTe7RVJwKqujDE",
  "key3": "3FzaFjNJZM2BfRZvWHeVanhUVyw3oo3ZCnyJUKT6TxTBdmweyvdGeTViC99LJXG2tH16CvhZCCSjMJzMT5HtWubp",
  "key4": "4kVzWAnbdrBsdkfJXr5KxZ8GpBdiqGPRS2bAKPcDpSocg1ak2Dk9HdPtXbf9jhwSfzQrSiUiyaWjnymxwF4iWtuv",
  "key5": "2XEWLguTiVC6C37gdwWxHLa7zG9Dr3k7rMNFFgyccVExv2QwbaFnDSsXwNMKaKdHCchj4GRCMWoAg1KnqtaPmSwP",
  "key6": "2mun2Ji85tqMpysTdQgfXSRFX8448pU2c1MHHNViJiiqy66LbSe5J4P7NVXpfrzFtMP8ptc7U8ptr5EnncV8U5fz",
  "key7": "vhBcepr8Nb3toF9qdcRrYoUtLCDAhMr3oRZiVC4VBuh8GuEizetE7dNSdLmRMhaPjxM4nj3zhtMA7UxZi8ct9rA",
  "key8": "2R9UYNGtLZQxjKT8PJcEKcawSqFg2bqNyDBJzDGfaJ4SiaFdWxJkcSJUGRTE6erQSKXBVZfexad9hcYRdnCmT4Ly",
  "key9": "53zwom5Zs3yHaqTgcRqQWJKNUTAD1CU9TxCkB2PUEH7MnbGnxxNnDM1QCxSa2fDpLkXa1Kun97qYnS1rWtUGeGUA",
  "key10": "2mQ2TnM6fd5oR2c7pS5vqqkpoFDnEn5i1bQ3grXkurqH4t5sPLizN5WL5xxvNfVhAJxaBzj8mWMWiVY6FjZr7vcL",
  "key11": "j3gCQ6ZkUTKPgrDob4fW9JhxefPhHhDSRBQKEUSfGJ7RfZHLPMnewUQX3Xhznu8qHjUhbLt3SoLQJCCbNjeyEus",
  "key12": "3EJgEkKxBFNvcCvBCpg4u9DCxZaubEXkEXLZ9wGjy3EdZPYoRcreoMXtBCjoznh2eSUBH5JAMeZZ4HwPD3oRRVfx",
  "key13": "5bdnrBXub6pXCnm5mHqrZAe57qoFuuq2JGz3BTpxXKXQsyMLXy3emh7VkKjdm6M7CpPmoCJjpDcoiDvWeUxnwjw4",
  "key14": "3cSGdvzxks6DnhbhAoAz59Bbk73wvxw7rraLphJm7TomByThBNSkNBBkufQHQbJsYEvuCNJz1krKFydEEfWViKvw",
  "key15": "5aGBiVdS5EyCZAaxaZZxvdjXiypSHjEYckn6kTACZ547poapg1fSMCKwo5VcEcUkzRmGhf7ojhDsGEcDvKBcdgwd",
  "key16": "XpP9mVNzE8tVhrNHkDzU5mGzRxb1gbByQjPtwid1E6tWegmZ7NZzwNjZ1d3PYoNEEvnKHRDs2rnnuk9zRsqZcSg",
  "key17": "vLKWjyHguBpmo2U7XzYY2K8B43vVuJp9m5bMRvrgFrF69baWbMyujZmqoxgr6Erj5FBXv7A6hhRfyYTFAu7kDje",
  "key18": "2whgaqWkCdgVcusDxiFk5sctJBwufatZSbQtWY1THbpxqqLUBPBPFdD3zpHBoH5TtDzBML2AZ11vT4M3aUzjriUt",
  "key19": "K8LnKUF1WM5QuxHMMHJQDmXQ4TtWLDo9W2UpjNVis25TJUWaYhqfhSWLL4mysQnWNG92CLkoAZQhazqTeWrfZsv",
  "key20": "4gWyAAsDaj67r3pzxY7FQapV4oLrk67qFury9HZeVJxbA6mXvGun3W9E2dd9wYWkV4TZU8gB9ZCedAMZhjVuhUDq",
  "key21": "kq5uaH4Nw9HFSNdWdX2616xrUzMjsBFQoubth9VFBmnLfS5BQEYLQ11DSVjF6R29t6tSDAQxkRyinfoPp6qK3xX",
  "key22": "449G6xSVb5PVM9CGHeEGjMit9vAoc2jyekVrWj9RxpERXTJSJFcFVAhpU3cFXtYHq5TTYLXD1gSwW2q28e2ifunc",
  "key23": "4fm96AC68Md1UEufHQLNwvUSw4gNmjQQpCXQP2kCt6sytg41nim5H8MyMvB9b2cu14WdZJmPr8QTe4Vouy8xXb5a",
  "key24": "4A4dYYAcv7xWTaDx5Mn6eeCHDzrG4W6hMSnm4XNQ3x94SoEpddcLZ8e3FkBLgcPqqebgfuuc6RRx5kPccHbBAx8G",
  "key25": "2zq9TPshgn1s1UZYPJT8xLHLw33xUFXtaHmjBV5wdtdNrNRLxwrMqKXozvyL22QCYh5YsCyswHaQPezBhbLsLRip",
  "key26": "4S4p8ubgehGHUaECx8zZKzCB6w8VqcAyy4EiUJobR6Rsd38QSfqqVUDSuXyAXLdxgLYXPss8TRsVjQnZMX4sYNk6",
  "key27": "cKemThbzgPB9fDLxBhxDCfVA6jX95yMqDS8gu2jJRTyUF3gonJJ7ngktehyC5zqkwmgJp9yxdmz8mBm5fzjQgFW",
  "key28": "2pygTHAXwxK1WBG2X1eGJJdFBsBYFW3ZdnLFs1LSiQwQ9PPLoa8fLG12ymXP9ZRAAwcp6i3dhttc5AxXz84p6H3N",
  "key29": "4Dc9i1j2hny3z2GVcddCDoUpxrKqCxvdRKm324DupFcG1onsGboHWgRRQgsRQAGxZ6F9YeFFRkzRy5MpFDxCCPD",
  "key30": "34tGBhaxsgYpL2afgCWADCKLPykrDaohKMWZURbnh1XX9fgGvbtEV4ucE1FK2H4mxQvSjntyDNXQStkFnTuYe6za",
  "key31": "q3LehHQuA9C2Z2kgjmiBgY1MKx9iNg3M8aZjKjLww2Kc7HqR1NUBJYyb55kSekmn1CffomMEgLAT7F7ECF4adDU",
  "key32": "3Zpy8ZaX8VbuebUhzt1YP9ooQSVJMnJKQQyWWDq5AmKP4L45ch5WTB1zKscF1bUQ58TGE6yQqVs1K1C4xjYZfiHb"
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
