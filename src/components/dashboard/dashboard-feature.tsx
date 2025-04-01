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
    "3LSKh7SrsuCPU9fGTx1FBjhVHx396uqfXC6UuzKniqbs7KxZN8P1EdnV1MPqFQGVE972CP4We7YFBbgvYY1aoo9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XXB6rx1NvscAm4vgh22grJafzAWiTDpxBDbUdH1mwQ5iSK5ryxHZTZTZNg7rKX4MYZhJHdFeY5sJexV5mq57xtj",
  "key1": "HECc7yr4D6byHjDm2xscbGJhwbwfZWqjJVYQxF2rmKdhBPEPtZzFfxTxorRivBwXXfa4xFg5yFzpQGfwUgbpkM7",
  "key2": "612PTz2RApp5unkonn6vWf1KV48aGf1DmCZx4QWQz8EDDLqMtxp4Fr9KzSGXSPR6PE4GAni5EpLqBXUZCifyuogg",
  "key3": "irUbxiQH8kpKBzNr5w2jyyFov4eGKJ4v533cK2Nj4EPRos83FnmnPWd854cfvwkocxTA8P6tVZ9uWnKezufUTXD",
  "key4": "4RXKgjJdXx4b1BdwhbnbC6EEPCaQ5Cv1PQbJhg6h2cVeQCbThFCZNboKKZ7K8oQ7rh2q6iCEDrFqzNmemNN64iZg",
  "key5": "4XvEVwZHntvwde8zYQsV68AfxaJy11Ph5kuUEg5tTK1WAFNLTioQXDnAnad7Ek5Q2yjRCjsdTinsRrT2AgrPt5KN",
  "key6": "5cQaZSxkSc7vJjZeeRnSVjBxyYweiJFu3aaDSjxbdi9ok2P8tyR2kVuMghAuRZUN86Z7KHvLLKjedzrLty6qpdn6",
  "key7": "4jDq8yJpivaMrbjUpnQXQN6PqdzC1bFD1stVN6j1VLFYniT2vAPrjFsqmSx4yG4em7RhXdJQGGE5fDUTv7EZwW2q",
  "key8": "5KyLDrzfG6G5fBGaHUAN2Hcub5goy6RLyDdENYfE3MDCWbrnMHwbHmd5tyeYK8opJDu6xCCysntae5TQs5rFfc42",
  "key9": "5tqFiUhaP74RrY4vUwtm6d9n4JPfAacLizxKYHh5tWW42D67NMSUwJxzFfFovdbEww2U81hFMG7AUqwpEfeRA323",
  "key10": "5yjo4FSooXwHRuiyF1FogyUMze9upvYUYDx16xiNBxWoA7r4gYQrYKNaLmGG3kW6zAXqUHjQrYKs1ECZ9xzVyYZA",
  "key11": "57A3mSfREiomXBTvumRsZ5SH8pFKrBubCwU532f4bGT7KsLhr7hpuyJXh9BwCMpNrkNrQaAzGmtvwKUojSJ5WGqK",
  "key12": "33sZwyuhHrn5CUn1WKSdxyxoRnDE1GHpN6VdKFDQexRMJNWWgsioc7vRfYWyJtYUx6BKi51Y8v7smA5zijE8kkqU",
  "key13": "58ytFBkKcBrffae3iu3jDJNdc5CfWchimRC3pnD2gxijF3bxExhFGG2Gjhn1Gcg9u2E5AyShgn4pBEnx84JQsHGV",
  "key14": "2X5Vx6TNzdeByzX1BmMsxdg2t5GofQC2A1Kpcrh2WpNnecGBuEhFyeFe2YmfM8ZpSSpLRq5aYG4vycxxdw1DfQ2K",
  "key15": "4KyxRqr58GM8t87S1QFuu8bbekDpConf4PPGtsefLNs99fyuJ31Zrqo85GBwQMpKTXfJTpYqUgbuGKLVUMGhZ26v",
  "key16": "4HubfbeD7PqZQfvdz6i4J9aDh9R54d8pjefrCML4RRuFp7fNNhKae8Uai9JPcyc7xNLnP5cSD2hQLY91RmUg1yKb",
  "key17": "2ssdQKKZpbQyydEDbvZFXAEgRxcyTE9QP8digy27Px2Lz1wktdtT8d4dcAjsUKHANGGP5kDMr7iRG5uJttqeJ3RJ",
  "key18": "3rJY7ZvkM5hDo1KLKARJUR9HSMpJUfHpKs3KUKGka7myzfNgFQF6bcuebgykxHELCXwVasWBPBZhMrntrdtjK97K",
  "key19": "5r35dQpVvLWyp8UgKzj6RFbupU55ceA6f18fXqPvUSUeFg1gYKUjuuASFhsgGcydQ59vjpCWHZgALo83aNF16mxo",
  "key20": "5LGAcVcEx5PXbLmrw4eikbjwoJ9CEoNxTnhYffMD9pJ8MnaybwCxNtK2VA9bcmPcTeEJcq8XhWS3JKA7FMaJWnmh",
  "key21": "3JXvLgLdM2Ao8pxdF4NKzaaC8rbwEDkp7rbbbaqLGCYWPGD5HL3e6eN2MTbFSWcoJC8voo9gmrMLQci9qYpT8dTQ",
  "key22": "2x9zctbrVQPzFnviTJ2kmBpdnYQQ4BgPPHrb8YNSxsq5W2bQ8NX6SV7oo6zcRdPxc6PmtEm66hP83gHME7J12ive",
  "key23": "5H3GcRGkoQa2AH8wc5cT7vW8t85RiDYV8VgPqkUhzHwTRTPTQKD5wsA58yBtUkof7SKQzQP8VcBZ7No5Rqy8vsSx",
  "key24": "3iNGAJdL2s4fnyetu3HNyWHeyFTgZ6WEAAStWrumBS8CC67zAm1ydf84mFqSWD1rRdczhBQCfR5RkBouhZW1tPoE",
  "key25": "3jm5Wf5mtDizQFwf9nT6mQNGARu6gKK2te2Djcn4PX3NVFf7vimSQt1XgQDd94yFmQirK2zPxnzsftS64QkAicVv",
  "key26": "4RN1ptPkCzSLvf7Wp5kkDb5eYB6U64CTV7wKseF76wJvTGhMnxBafKxqDQV3i6jj1JLdv9QmuFDWgGMBMAp3bPfo",
  "key27": "4EgsFjojcfpp4WCg7XFSKMbKBZgZ8h3cXW6Sc4vyT7i1MStomk8LxhrGpMbKXucWqFXm8hnLkj1b1LjFWRLcV3id",
  "key28": "431ZEBZFHEXDbB95rWAN6CRsh1uXjm5wG5NHDiP4M7qdirHesqne2WQyqNZnincJNLUvDiaBEnfYfvadunH4BZgH",
  "key29": "5wcDQY3frzUZHcusgctVAbbATfNn9gFHrmvtFa7yd6VZo5eddw2oqdwdvgyXoBVc9oQJQk8oSmVePczhV58cMXnR",
  "key30": "3cUDLqfgr7cnnzzF8eK6WZRkKDNH5HnSZuSULZmg9tHdn4Ci9xhecNh8PwSRQiEpZnyWro1WA54NdRJbn1jBCCLz",
  "key31": "aDwE2yRyJsrhQL7ErYFxnhmxMfHDCU1aDb5Ss32Vh5CtXZxRe7TBZjKDcRKKoa2WCaNfzrP2RWNQXSZF6Bi26uo",
  "key32": "21omrJPAD8AqJ8EHJvXiM8ztmu7ftX2xh2bzv2pxRruedtsvJe8R8j6BTkTU6Twn61EcDxFYzJiwb6RntJvVv2hu",
  "key33": "29KJkiw9wJjpTMT6gxheowK2JWboYjoBvtCAJjCvrSnbdvWBvUhD7LhYKNPrkRZWrzZKDrQBTFHLJMjvx7GZ394a",
  "key34": "33gdN5kmYZUBNNgUtz7Ymd7bPzd2Rxkv4VYAe288hJGrjhwG4AmzEwk4AJCJVkqp6ZLJmem1odxpF1bnLMomSPn3",
  "key35": "5Fm19ZEf8rKBopmYUccSGKBBxXB4HowYMMNjTfZo9tU12FsdEEiUsZEH3MZDke8gVMe9TZmDAtXct5BpQrknorZP",
  "key36": "5JM321Z9GdSma4N8bTQtQFvAoNuShN8QwdRH6eiN7jhAFbsXmeF5uxCumvhaCrnJc5RTtQ6CF3ErpoPkTNjeaTVW",
  "key37": "ZF5ynVQ5LHiNLwMS5f4hvNA7RyBKkGQNmM9Zwfq12dxwBkbnfhpP5EvBtX1YtdUVtDjQH63CjiTRx8QiD2Xf3SN",
  "key38": "4xEzvhkj7cjRdFbHUBSxFk3UH7dVF8Pnsx6CzzVhihJQwnb5Rtk1eDJX1ececkTKbYFrWEFnUFgVgcNoDCoQ9GE4",
  "key39": "25ghgtRxo1FDZaXXjDnh3V76LozLacxBKTLUXbZy3ma2b4iVMKF8CBfJEv7JVUGsWUw99tpwRft8XNZ5mAyRhHNJ",
  "key40": "df6dVXx7E5HBNC6ft1pHrVPctJN938Xa2KiiM71Qy4rLqUMizHARbRfHgc83LEPEdKxJNFXsUDAzQMt6csvGJpq",
  "key41": "WpLEGQbhbhrTUkxKEqaRT9mmGZ2kssvbJ7sgneZCLVdXio8JP3a3ab8BqFDaCcAFT2A4fE7Ru3LwC4sM6V7gcLc",
  "key42": "5ucBvq1Z1zvuDU8F1xPkdB7HPuPhCCD8GMJ6wZj6DPbL4vPNXvuSBuBMAwgs7hQA8ibXX4VFZjaKsny3eyXX3N7G"
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
