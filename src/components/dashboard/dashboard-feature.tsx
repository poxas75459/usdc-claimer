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
    "4NnV57v89ynSsmgNW4tsWGyy5bMFfdg4fTL8NC2mYndQWcVHMDbLJBZGQsuVsXSxfc4JQ83FhgYS5aA6hkAc4YMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55pisDTG3bzyooeHT1dkzjVcXPqRcvrhMfWTmu4E6F2MuA5rTLHvQJeqoJkwUbmMmNED6jbqmTEeSTfgg5bAGssp",
  "key1": "5EmM9LwnXwKBSGzmg9TP89Me41zB8TiR1iaAsBFtdkGbR2pPVhe8GSd1BKsMWf2N5Jk9NUG57WBX7ZpGiDBcSWbX",
  "key2": "4tixSH46D7MZwkWxrzi46aLdhLX1Gp7ThBet2167bZte5SPTDjz7rGSgJGwT9N5VYo2h2rx2fL7pEGTPgzrCo9Bi",
  "key3": "px3VeXzWDEjAQ98Biua2c5SCV3NQug8SNpCrPETAmiS7rfZp3kNaarP8L3NWMqfun9Xea5jviPYFvcViKjMQMZX",
  "key4": "22hhXm1sNN7Uu2z5QtMdxe5N1Q7GJ2cevEK3RH6H4BwKBJ8cXcxaRWn2Jm9JyVp5q2RxzeUr9xKjRa5pKFhac223",
  "key5": "317uC8CAkwoCnZGaXBQeyA5QqDejsxJuBLmVezK7oR4uBQ35PTh6xbBM9ar6aQ53K1TYihYAiUPjwU8etKmyerWs",
  "key6": "5EJiDi53odoN3cQAesfEYKremE4SbUqhRz1Gc8Zv1k8HppAkqkAndd9PqRtwmaSevAzuCveUjNcbFscS1k6hReVM",
  "key7": "5wowgC5rJ181BtWCFGfNLSDYuY3tHVn6QBeoaU8ZyZSaoLkLjjYTJxaFqivnRDb2XT1AwcVmpVAgoXtLLDtGLEte",
  "key8": "2Emn3JxEn4rD5ve5XKboGVLY9N8xy7atMSmHdYkXyejFRVxFPfQ1VVGiNG9ikTUytAMfeUSmch3nuzZgbvDVsZ5D",
  "key9": "5zPQqtzNW1GgzSCE82QNu9AcQz3hw3HBVdrf5bvmrLecb6Padvk75jXz2hJ8EB6JKpjVdUp3hShxHrsmbhnRdu9U",
  "key10": "5chFQ94wsqjrfAXBG31q646QqsuDNdHnXBucA8EK9MyZZQW9e65JWpaYAv85x3djh6x3G3eePAcWdTijbvH1nEDs",
  "key11": "2xo1oFMR91EZWHXZQRMiAZbqGRjF2VjMCnEins4n1AYtkBvXydDSfvT8fe7uQvs8FuU3P9Fyj4E6JxSMV536ZNoR",
  "key12": "2buZ9MnP2hW8SpAitWQhUbm6XQ6qmmAePKZLvDMmHJ8AEQMJ9cwzvaFv5ziWGckeSKmwn2RRnPCugCgcVb8CNW1n",
  "key13": "3PZtJw8ApwYP9UdFLXVjvHBqU5xd3RTt7hv5zt8FqXsBkJUy9Bv6vEFWKnNP9UfRGkyyLDa1v8dgPAhbq5P8pX85",
  "key14": "2iRxmd1tGjyKkw3WmCw2cbMkazf4e3aeAtqK44bm5cqRsWCWh4iTi1s7FmQQ4bsjEAVZ5xZyDou8vrtZ9pAPgqYD",
  "key15": "kG8zf2bHeJuHrmGXbs54j1xyXJHiVrxwuZd3LUVAcvW6hZc4hBG7b1XVJWrtcYiAuT4LRxoPhJDGEsj7oKoUVEi",
  "key16": "m2w8hi7RM8LFUYFUZq2gptwJDm4aHgzvR2T2QjDKWGVBVaAPe16ZdiomP4rE6UHJx2S2n18GDJxvy9QwhpmUriL",
  "key17": "2jkXokUS83Cid5Uy49MDt2nZcckJXvdWDPPBPxS6vxYAxhWSiVVpmpssXGiXQ7FViaSQiJqxVwFqqVuVpZU7fd27",
  "key18": "61zwGduNWnAHV2rEwT4tofYmZm6hNFzJjcfvY4UWUqk1orC2hyEWB63BuUc7pYezrrDM7vraarifEUcjm2NnzZz",
  "key19": "3gzCaoUhHUnfe2DzDCbVKihYPC7YGyHDQTfnZXY9HXq994xALdKbTf8ooWDad5jMJCb6yPyromzNJxqKVuZLWBDH",
  "key20": "3MRBcBnuw9CQ1THnMR9Vo7cfuNTbN8V3dcDj62kiy1JiTTVRymr6H9NnZckV7wkFFosgJQ3ZVmLHyDAiH37aMFww",
  "key21": "4x7N296Aed2fzPaCnxCn5N6zUJH1UtJraRVxPp8cBdyrqoxYhJ7TJTFfvqZsYvewy6ETMNJGgYbfHQmXNPQWHbMW",
  "key22": "2PV4P7iSoxcLDMYKRW2uN4vUyZbafJAHpPGmA5mhE3o3tecEicBs8wwbrxiTxMvnufh8xLKgWLz32iTk9HwL3hqv",
  "key23": "2AAE7tMbTeFVNfj9FU7EHaGBHpvcMNvGeGUwJqZ5jCqF2dVo8XnD666Ba7SinSipmCut8VxJ3zsoQnrMWxEopqRc",
  "key24": "wvGaikLqDTSTm38zKUqW7ErzEmke53TUCdP6K8tzRD1KSkYe3zsZpS9bP7JhY9N81Em1vhKoRLcawKCVpBBiCMe",
  "key25": "48oxoAfojUeQ24bMQsAVU9fuQsWVGkuFFGHh7Nhj2g23k9giZYnWnWRuChoiTUbUHHZRSQ12LnKDbZbVbxY9ssVt",
  "key26": "4bNPM2E8PztrReW3GfWASbLVjmmx7U2ubpE5ByqdPecdgmytNdJgCbm67PSFAs7S8Wn2Qpo2rxApL53abUpCVFTQ",
  "key27": "AdABek3csRRnWd1BsUi2a9YjpD6vsQGLTtF2VovCLHr4qnnthXzTSaWSVhpUzQUJvvu1b6YesE6PHYzhgkxLcP9",
  "key28": "4oYrrUt5Bze11VDhoZ7qrzPaApxum8JyMBjKKC2W8yRFRayNt5U4WTXezPgnC9gn6o9xKaK4GcbFWFcQ85rsvNK9",
  "key29": "3hMLCFAJF2i8HsqFdZSBpFqkpvCJJNDwBYVycCoW3jGK5rokF7KNLarD7smZDUYshiugpgKuqY1YZRxAWPDNDB75",
  "key30": "2mDrWkaDpDTpefRi3EkwT5z6YaMJC7J1t1XTkMiKBTAFPMzPfNjJXXYHdL5g2JQVciLxWUyTEdaAD91pdiedaEyT",
  "key31": "5ktRgYUV7RBNj6vzaGSfW7GUgrDurMMEz9LDmJohqVrqdqPfwKBBySj1TXMZBhhzrPM84g4sbRR3EBkwRp9xy6GC",
  "key32": "2pMF2mSXZmN8ytfW1vCDhMEUM4WmoGecuAMWKoFK3d2V6QUd9xEdeQZJs8sbG5mQA7Y1ezEK2KKf8EaA5dkv2SH6",
  "key33": "5T9aHLhPmxkCh1YpR7YHqY4XnJ8iMpdc5yD5rsauQZ8doPsEDH7fXXNqYVNkLcrzGhaFmcYpoW9aB9MrmysWrXEr",
  "key34": "2BvPeRQvURkd3PuoUykgmW3GDg7zLDe64PRvGB1hgeTnd7TQK8PUtkBJrr1erhNT9xkUMP5DJQXau2N8htYVLYqK"
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
