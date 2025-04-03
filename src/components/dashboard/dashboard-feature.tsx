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
    "3tCNCHe18nmncSiJtW8p6JPKfSHXcn5EzmEyB8ffT1sCLoQZ1wJCdVAENnF7D1MB5VSgoqEaJ3vudgvfFaaKX7S9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cUpiGKyHYDdUDSLG7iPmgYtnqtP1sAAUbDrK8PXD4vaqg8AzWhcdf5weyZcZ1Saj33T8ZMvLtAiusmR9m9axE6u",
  "key1": "2tSJKP3qDv8LMRcBUiUFvrKcEAyHsGxu7EaYGZ9nqHJDHuUJN5CG53QgBDuTk53gxA3irSg4ej32Cxjev1U8imoD",
  "key2": "WbY3mymGTKm4zXWq52tG3wKbtoR1LH7jEYeDdXQtDgShhXr4QL1n4QqjfHgKum8jzhCnbiYw9PLPgByezdpi1o4",
  "key3": "2nJehm9VNbrev5V515qxKfmjdeu6tAo5GjaXxyPp9j1xHZUNkrsBtvgtmV34u93SssVmthggXTELpR9NTqXsWjVU",
  "key4": "4wEfoUiXArCzgCugewK3uVRjKLnn7LwYTQY8nXpqq8pgqE8pvnoMLZsArfAU5N9pEP2RAbBEJhGeDYdiHMENbA8c",
  "key5": "4cVp4QVEegMAVxoxutb8QpuBvapsHZ12umSHJ2dH5NpJ2eQkNngaLuoP1foVgKLtnJ4NHtQ8GUvNzkwijXekzXiR",
  "key6": "3Mr14EH97HaL7D5VN69sdLvoHuuEwsFKJsEKrgnepcXUkvBXuZjKsuJH3LCpQMWd1HSkcLJAtRyEzE51Sku5WrJx",
  "key7": "4pWgcdGea2W4TZt3YewLt2Y69nAeywMDY3F3YDcir5wi6WDTeXcCiGbtukxCVDKdny3JXisritEvMKm72Yk3Xxv",
  "key8": "51jZy6NQy5eq9FgP17LrPXMyiih6WYY1AaZUQGxKSMNV9tt6fdTX9tv2Si11c6LfdWt1oBrdBRkm5FjiRcrNcL9r",
  "key9": "5jWPWQ3ZQ4EySB3SZAFGGZP2JDvjA8xeQ3DHhmcadUGZGTvrbKZYSAX55GKCTqvJkuy3MQWGviL5eUgChgRsFFxB",
  "key10": "5LLwKPNYSzJzMdiczVaWocKn81WHSYpqW6mbvJR77mZHL4GN26LkkB5q3hdP5CjQ5sdpUUNNJViJYWgRxX7KQmgo",
  "key11": "4Vd4N6oNsJdUxmRYxmEQPbktb1GmScabFUasyefHysJcY5Fux2R2KkffdX9banqBoRPVUv21rf3Sy45hWveVQ3qs",
  "key12": "4k2UEdWR6ZatG5eHeFPktZnCBa9odWzQBiKaCT4ZKATmcBFrUZNrKhtxJnVEGY3DPQ7p1a9P3jd9cm7iA1U591Dm",
  "key13": "419KNVdQSCP4mtQWaWjtbmwWsp2ECENUmth7BBaUJQtetcY9rvTrv2qkWsUtugsXP6N8fV9JwVZNmM2jusBN4fD4",
  "key14": "5DR1vA3bopLjTtdXcqMQX75rcZkDtYwmmeG5Bkq4VCZSQjSz8NWj6AykPRvw3MjnWXhSgRRZAEHLnkG6d94QpJLz",
  "key15": "nMh3QEheRiBwonEuVQk3mfk9LmEMK9cnx5J8juzmfEwhrUmCBEkccvnK3dec73uBxKx7pHrEp55XE7MdiCXAvTC",
  "key16": "5XVDyyx8WdoTWEFXz1YSmVKJ6MpNiZffVZ9Mi9Rqwz3xkvGawLVdoars7babFchpYseEPrwvgrbtiJa4y1CneiaW",
  "key17": "Kh4EXvTkjWMyUxgNDwTsu2uHwtDBmL5L149h6GZm5SfXbkVLm2S1b1W2onY3UtTMwnjr8JTPBDk3doikfV89Tv8",
  "key18": "4cZwT2J5ULKpd2DLPin5zpFt8snUdan4rFBajcrKnXpJf97Dq5Nor1K4bNFUxY22RB2vygcs8q9V9bfF2PGCeEp9",
  "key19": "4ee39SbsZck2RciY6GiihcoaSGd5TjALE7jvcC4H5i5fbSw9H9qM4esC9U85WkjibUmH1pFSamSCoLJbbg2sYDPK",
  "key20": "eKbsZaNte5ShEh5baqyFgMgzXv4oD9qhNkZPxpCeqbURXEBzgTnJ9X6gk8Q4zWoab9VXgajuPvSm5tV3JeFucZu",
  "key21": "esTiTFNbz9FaFTEPnRzDJ9ZmMLqMr8HTBMjbsMvD2s9Ej3jUMh1pTCz2iEJb9CUJiKjBVR8ix7xdSvrfWLqDvRy",
  "key22": "5DHekZ5xqvAshNezyaYyf5HiTJYpK55fqrWLZvNLH6VGUvoekX8Ucv3cHff61zreZp31ygjyKgT6NQxJ99nYf6c",
  "key23": "4RujJSh6AcLTrN6oomDxicso76njF2KVFTdzBYhU6TbU1333Vj566yPL3PviGs7ixX4VvaXT8NQTR4JPgnmsLrAg",
  "key24": "2fSqSWJ5M3m2XauWc4R8Y6r1irvkGit5h8gLVBzfUNE8qkq7GWaz6bxxDePg2pWzmR6KrnGZNqmxPPQDzy8nsTey",
  "key25": "2fzJ9A442ARbLJtAoFvyrmWP5RW6v2yjuoXumH7VticJ4DB8p3S9i5rFCHALrYH6GhDVonEjVfY4SKzPFf7MvH8",
  "key26": "5LNtgRbs7c3ViTqDt9UJN2mt6DjZnFXUxCGzutxfoUpN6oP9gt57a2vqwSm4B894TrEpD6ndZB4BnJqX7Egwj8PA",
  "key27": "4poiw93DuraU231xfDGexynMJNmQQCK5TWch5cFsPs9poZbge9TryS4SckHDnCj4o3V12CDatgCrDZZfaWgZ8TQx",
  "key28": "NwscELLBnYQP25LvLjRN2Ts6z7oRP2KQYMkesDANizBvrMPuCnfAekz8Q5s9zFErK11CL65zchuwJN6RCL8s8HD",
  "key29": "qw1UiK5qHZBM6Exubg6MnyB9zwxcP3vWPcAsKPtAPWoGnr6W9BXgUqxYKTDiHuGp879Mjg6iFQYa6ooZ1tBUNNL",
  "key30": "P1pBMBWHGnpHwgorcuqottZFgkjoRs4gM99BPGgUzqE5c46UAgXsjjgSXJYADX21Hvf2fYfZAxb4PtatdZanWr5",
  "key31": "5Lxw9iRFvczdF8fheZhmTtPqbkRFD8E2wT72NeZH4ComXePMwgGy4DBM5D8uhAeMXT6DrXqcD4WXea2e8NN4iR7g",
  "key32": "2WgjTDbaZNdPMAp3CWKkCjAAdk7m1kzQFELUoRQN44hevqEkMhr23kNkj4cqmg5mLjxyq2p5L1QxPaMH2iJmcSQE",
  "key33": "5JqEcpmmWdGvFc4CiisFWjz9GW44t5bUX4uYwKYoZuWWfhWthEAeR94oLhGE65iCVmGqU9mDF6uQNPHdHAjLmp3Z",
  "key34": "49s5bsX4KWK2grcDaNfWM7wiMsyUTh4Ba8Tc726rfh9xeh62FgvbLuTdm16bjwPxTdd8tjn1UhccUHi5FnWuXV84",
  "key35": "4xJxUQKZAVvrb4vXgt8UmeVgyJzTDU9qmKz1YzpVAJTSZwnKi2B5gnnnZshvEWYjywuWn8ruv3PYNANGC7F1shaD",
  "key36": "QYCRF6FZBE9HqWNNxYj9zo6iVLN6qJDr7dYdZ7ixi1JeLZE6Ygv7waS5YoMM3aAXLuyY7MJRDpLaXVy2RtiZvzE",
  "key37": "2N8U9GBP28XNdihW8su2eJgdQpFcnxiPTuHK2YEC4wwoAWvynPbnMQgzkFB11QEVzCgBtHfq2wa5s5JfwxkMJDTW",
  "key38": "4KozVpK9zTWCL8SdFCBosbaiq1H1kHonFbkFKDCBSqGJ3eH45tZJKwGxrTsQe2iY13abxiLKm7bT56aR8z739Snt"
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
