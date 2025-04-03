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
    "J1AFEzdpgmAUJXSq1dRFhbZsUpe9kGmqN8hABQ35nunhdU7q42WeTgPuoqz52UfRd6to6F8JtTYQ5DoTKuFuS1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xTNfRNTmfEXHLnKbUiPxcQAjm7LzT9QsGGZafqtNVi2qVgNrkbAofokgfX67UQgo2LzZjaWjcc18NNDqMFzRq4Z",
  "key1": "4xN4TvdyngbNRAcghovkudfNoVUj3ZLjckumiLrYmf1FnSH6PSg1jaC1yYWzYwmMyQFjrxbsun46136a2E9ZyTAL",
  "key2": "2NXNiqvSMU79ogTvwhuQtYxiPCPv3Pxm3gMrdYFw3zj3hAXMsSdZKkYNawz2WA1skRKAY48N3QY5mmwhSQ7Gk4KN",
  "key3": "25PAEfak3f7yFMqmUDiwGCxK5cNkKEPLqkUWhUQzF5dH5r91mVZTyhGssQ5uropGgxiDjxmJkMD5ftC7K9g5dRv1",
  "key4": "StwCngvbn14QeN1yku3dC9yqamez4A9aWevLm1j2ZD2ShXbEYNpcT85ANQbfWPVtFZ5axLg7rbMkpVDydD4p5zq",
  "key5": "4yy2JARv5AMCVLH7YCXutu3Yo4jrBsk5WXaMWYr8aDeaFGL9Dq9xLFuW4eSdoPv1YtfvtdjVy5xqtkc7QAEdzYem",
  "key6": "WZapdcpoosVugokLanT8jXqW2Cm4haRn91HYM3s4JKcauW81FSJkrH9TsN18ZXoN1DSZeina6y2bQwpm4oyk3zJ",
  "key7": "3YLoGfaN2sFYMicwjy5oEAVNrE7Seo1oZck2ZwZJZKetnN3hN2GgaE89Styzzth39uqqLjbpeG95CSmrgCN6hBW1",
  "key8": "5fp5kXeL6T8nLacgASE98tiSPQePbADuoeuhPyDfs1Yqe7X4U8gvjruAwqztSMFFHaqjfy3zsypHKo4Sac5nXnGb",
  "key9": "4rNHx294Eu1gbabeUnxivRqGU819qaLxcj9bynJW5F9XyiPb6HivhARLwPvbsqXGTZH3E8wtqq67neLRLKu6hxXE",
  "key10": "3b9Socmks5bAa3qmSihmGZUPWthV5Q9eJr8e9DYKrJJ99QKsaW9doq6tDByV784QXBVcoXcTPjYn9nmJZySDcw7T",
  "key11": "2czi5sRVefdA4qdMFB9pi2pccSQKCYvPuAurwWygjJ3ho8DRSYndDPLurKsgNFfprcaDEYyVTkH9sdHcoqcs8tmX",
  "key12": "2bAWwQ9Kq5KJakZYfL5dvNBw6gNRuNnC4BF9r3Uwx8UEGiVt5uqWGztyq6WTujeGJ7L2qHMKLyP8oN55BvBrFb8f",
  "key13": "4mHDG5eZjSpNZFHNfzE9zaFUj3tcmdXU5wPHvwd1H8o4NQxhdAcTnz1N2nqYNPiwzqueD26r8xQGY2NvD2NFq61A",
  "key14": "jJKTkqninofDZULLbczkuWeTjLFyvd3sw2XeyHhX5dVnEt6CXE8AoaG8Ta21h63hpScDMaEHRQJACyXM7XVfbNY",
  "key15": "2CNa9tuf7DvJdaCzqdP84hLaS3bmTQ4pgFPxgg5gT5ZJhqMLpqWU5CYEZ5LDNFEwGcx4khD1XB1PB7uWupnfDWHi",
  "key16": "4wcTeWwwycX2YNYUzRtX8wBBoqRKYgDUG4k8S24fQEeZudbQViGB4Q5sZUqAvxCDecZZMKQnGuShAYWEkpiiUVAU",
  "key17": "6333AYvf9jdB64XVTb9KZ8NJzWPT4r5u8ZrK7wT6qT6Nxfb65LV2pyVLLaKVXavdfLYRg7FmjZYYAQ266itFcrT6",
  "key18": "2mpRkyWSn5TCgZCNXbaonXF8PveiS8vQdFsMjTi8uRr2nqrKMrT9HKLsmRT3CP4D97MmoZtVbSZSjC91xJVMgNHE",
  "key19": "3rxrSKdinkgSJi4HACuZvbwQ3SLMaJ6nGrwVm8VVZFcjFmQbjzkLTmHPQahBf7R4dNrN5T47haEDjQfaBV13uMS4",
  "key20": "4XiepN5EwQk4iw1MvVCBKthFoMmy4ugokGcquFgTJVJZKN11Yo2utW9eneujcYkutuFBUmX8ofpAHqTBxbqtaAP3",
  "key21": "589YsfjiBfPEEvarrr2CYTzr95efukUKWKqvYZjPQ5C1pFwVWvt953ZSd9hQrYu3XwVzmk4Ey9Fmop4J67NqCavM",
  "key22": "sqEVEso229eZhiTWgiSsagt5bjz8qDTPpTS52hFX2M3pJZC4z5ZrTgHeogAK3fdNiXtLHSfg7exM1BM4oX9Cv81",
  "key23": "FxYyK57edm5iA6x1gnr73jAoVj3PfPNFUrDS3RtdAERUUVteMKYkfucrgZ8CckpBBWtigxSmKmCnJbv5mf6Yyyb",
  "key24": "3EqHDoPbrFL25J4yXSndj3NK9taHbxbzHsDZwmh1P4CDv3RuGMdrR7399arjDAZWd3ZoxvZgsHjZFVFGZwLfutg3",
  "key25": "mYyZxBNBbVLH1Nb6LjSvsGZcsUnxwEjuJr5boB32P8PF3Huw6aqUQxrv9yGBd6sGrLQJ6yVz5kFo9bD8TgXE3bm",
  "key26": "4x77XugMkDZLqQioZqvvLYyT7QYH1HViM5smiSaB1AwnaRiTzEtyoRyPNfoCpcV5UeFdhumczeJeMcRma1yydH6S",
  "key27": "3coH63jN2E5xEnMef3grrfNQ3XHzGYAhNXNSH47higHLP5A8p4PcS1TS17PNEpxuoJn6TSaX5t55Z3n5SfwqYf2g",
  "key28": "2zUgPTceZTeRfLKMCmhFBEtpoc7REc5CJE3vEzoW3TUKbnzycGaeXaiPQsJUN9cuQ1NTBNfft5ZJfjn66ybY38aV",
  "key29": "5zBEUJNWfBPEMMYeQqTVx3FWn9t6ofF2RoHm4h8av2k8b6ehDE6uCzwo9EEsuAC6cfFBiX9R9NX7Pzqa9am1dfzU",
  "key30": "5K8RmWAfS63KrwkSYK5ZfUaSYFPHJu9CK9CkfGkrrvEbsKMZdMQtu9HgT1Kvpme4YsQ9vmdfoEkRPkNunEpjGAtE"
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
