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
    "4rJtzjvm5uDpeWj2E6oERkhgJt9MkQbq93FQ5P8ApaneYbgnVtfSfptGuG92x4kjt52MEosKcHb4PBfNynMgkLxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21rhPwn7YZQDJ7nHQJaf5HnKkQmexC8GsATAy8froHWaKDee98Kxf8ULS2X9BCvfmq3md515gsi2fhYUSwdkNcoh",
  "key1": "G1Ta1aRKBd24aQ5W1QWEQMg29ec7iC7ZFYtG7jRorFkgL3Dr3zZ2vFaT4TpQQBpyDKgbvF2qYoyMjVsVW9zxUkk",
  "key2": "5L415gFftWX3PKMXVHCH8UoHD7MXNrH4Dhh6zvmveasdd2v16bn8kvp46VturDEGft9PK69L51EenWgqLKvB6Maj",
  "key3": "2mbCf97vfuFRqWxtvHhRvn7iqV4yhLTnrj6LPBfkSDA5FdojBQyLH2JCFPv1MbZQNEGcoFy95oAxCwitCEfAA2CN",
  "key4": "gDxJSkaSaus9ApHXsWCJuzWArBWRb4G1J5WEk5uqr7X7123sv86XNBRL3fxTzkRFybqZxZYtxNMzYvJy4zgUux6",
  "key5": "4eVA6mbvF254rkY5ssuLaZ9EAWycvpcgT4p6cphCW78GbfD9AcuMbi1YrRQ3wQfS9Y5BuQh1wqMTRWZh3gSZ5rvy",
  "key6": "5AsYtkyrrgAqEHzR37qGip8ohVqBFXrjZucJwW3yC6LMnBcwkYbBXLXE22rSfcigsfQN69nw3QUhzpV84KbxJZjK",
  "key7": "4DTs7AuhGC75URLwMpV9npYGFoauwy7tj4b9LsB8HKfP5fJxGb3NR7iik2EGUZmcQBvK3yzK4xEjkRCTddhfhN1q",
  "key8": "5M7WeQGLRw6AVhBT2VqyGbhyuYH3BxohfFmpfq3tYF7gTVaXfjHsDgsVsNQS3Apux4dFDrAxeap13tHgbcEmZPww",
  "key9": "ZE4PiHvEkfyBJqmkE796bj43aoPFem1unc6VL1jjcc6ccnyrPLq55CqRWQW1QeDLZKQefspziNhXhkBshuD3Tbo",
  "key10": "4FCP7PwFp6RPm2FjkwWwRXGje4jWSFKTqZ4DtYAGdV2k7QntNjtXhNWbHpZjL9fucrGXVvYu3umgSu6JgcEKahnf",
  "key11": "35WxSwvzJsYwEeKHDbcAkncDYrdYWwNBHKi8ynct8tUun1kQ8AUjJjQnPaHVD6uv1YzJuXe7H5FtZSfwyYY5QSah",
  "key12": "2sAm3QTWUibXgvDs1wPMLqU5nRYcLAhqnhbVAa7Vw9K9CbGN75WDP9EtzukyE8ojQovnvmeViwwUravAg62QPVjy",
  "key13": "5bhGvKHpEJxrSVxBfDZgFuwZQN6kGQFd151St39Nu2oeRafEWv34QPdx7pD6nbgo91LMfbrg3j7Wo1AJwTNxS8Wh",
  "key14": "2EUkAEzmbrMYYufCE5SnkWe9RoX6aU6G6qWRJ8YEEE9ZQ7qNFvM31WvxNt2gMh6tvVAhN4wdvbCTxN7poFQVa3j6",
  "key15": "2TraUZdhuzXUwbXTFLV6moTu5AvppMH7Y6HDfdJa1rRLeu7TV5XEajcqhxb2ZVjXgQqTW6xvwqYhZ8dUE9ty8MpA",
  "key16": "3ndhBexxciVUS4GF2Tti2BVbtmcimHKk5973ih9Rq9C8XdmZ85UZoVhPjJw3Vkyw5hHqsL53LWyoNJ4m5emngF72",
  "key17": "5qTcyeHo1PgiNgENoN85UGi46JcUzhvK2jkSBbEA55bxy3D6LY9Ks5DG7RhUWEN6oKkK2zuyDLU5JMbFhLCTyzM3",
  "key18": "3BtVxQsDtuniKc4fc7sPkaohJBYFBXSHThQePirseusXAC5m3DS6Ekw5Kp54CSiQREcJhFd2zKbQ5D41ZXUmfLz6",
  "key19": "Dy1UY397j4ErqW5fwev5AZebFyEvcxqW4kE8CaLoyacEBuNHr67knJ2LUyWdNWnsHEztEwS7RtbJw1V3pDSCywo",
  "key20": "3B1o1KAdTYcG8r3mmJBpUssu2Dmus1e1iqDVrKxgNGMPgZtvXghtjjRVMebBG9p4wLNGRNuiiHDefQbGg1B5CPcb",
  "key21": "39LSE8nhPpnhN3h44iAjNyhbAYv5QBx6ptT1PgXAbek6pSSRHAWTKJBuDycJMmbEGvCkDA1r47NmzJh6dDtnKgmk",
  "key22": "4H2K7U6Hes8j31fhWBPeFyCHwarDJMwnjhGYij2b1fa5ZHwdWDo8MYzSfbH7vSfw3K58XmgdjuBxUV5i8nH3TP3Y",
  "key23": "3uXkD23oeD6gTRqoCZrGP9y6ZAs6srPBVVAvcmBCEiNMEKzAetcojtaNM4VKmh2euRyvACstLFa3jSQ9PsMFphLF",
  "key24": "mSynMttG65JnC7quEcDhwQdL47VdJsHkkjbwvVHCus4KU6JQtD8r6xY5WwyGCeB46DNXJqX2Twtm55uWPcEUt5i",
  "key25": "59s66UeG4E6g5CDtZU9vqZmaFQe47P9P9kyWDP7D1TsuiGNxUX4kLY6npbykPHThvx8QatFxL4a98G4nHdGV9wJM",
  "key26": "5rE7rqEFgiwskQZMqSra7EDPh7GwLqM6Fe7j5kfX6LSwyw2A7NYJqMCPtUhSUE4tQH9w8N91bhCd1ws7NQj4NfPz",
  "key27": "2YWVXEg5Wx9LMCqudoADvXq3wok1kKrPfbUwh9Ed3ZSJuxtGWKfAsVpCqApbd6PbN2NPQpgXQ3TqpqHCJeuwN6fn",
  "key28": "4LJKgJ9patYW8Tb2njooSXvuMQbB4JuAvTkHP4s5Lo25CDdDM8UbksLijafBxdH8qW7drwHBMdmRSN1ET1MVvsac",
  "key29": "Rmvc67fSLKutGf16JH7e49zh77Uama5wnnzzoxs919z7dSrkekPoF52U7aBfcWiaQcJZ1RCi9W3RbnKL96jFj27",
  "key30": "4pp4g6SpoShqbGqLYJAn5QrjZfj8DxrCe4eDPxnVEqGxRPXV1EdyvU5xWLgx3bvXhrjY2sCap7zvhM2GwT9h3Z5M",
  "key31": "bkXsK8b9soYnTzdXWr7ydvRfUcSiEkEZwhjbAQpsE4syrTknYB3miGiiutRpoFyqKsDtpabK8LSkz4S9vacPDRS",
  "key32": "5TGV27pDcoEguW6BzwDjGbjQJB99YxX8swkAxCMFuW3S5qivNw4Vx4NPFGuJGy43vmhJEePbW1ABWfVERGwhw8cH",
  "key33": "5qYCGCUAuxXLciKC86SqNX4DcGySPqbb8sA9onScmrnrQyawaKenmVUghrFD2oyZ9uN8risQ5UFr9iN4m6UfNWVf",
  "key34": "5phsJWok48k2u1YuHS46Zp7Tg7JTbBnbuKQoj5TcZ3M55zm3sLSqfdJWuvjm7KTokVEh9pQJPg6rkJQU2vew5eFg",
  "key35": "2DhuMbQPAmmSa41coNxKfXQJWyYNSvLPPpFVvwBszKJFsEdrec6YCNKYBkxw3SND6dbCwTBj1GvuBMk8oUBfzv3s"
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
