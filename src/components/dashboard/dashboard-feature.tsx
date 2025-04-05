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
    "382R7ktPZs2LHyhu3JgYnKc8LhFxAfs556sFu2f5yvmYAgzFuqdJfa2QryzPWKJk8ghqYjPo4Ptay5oVo9mi2HxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21HsN2Sa5jKnUtgF1oAT7AqUZGbfGNcjqb4zgsaqBGQ7fPMvY9Ljd5Wbuc3RonyDxDUgQ6NEqaQXmaDbxhyCSReu",
  "key1": "4SnwWpi7GNT5hqX9hZwvzPy4X3JvxvdRqRS8xEQHB6SFyd6NYgWQWToeAfjwTzncsGsj7AjYt4JuQJLM4FTCGQ16",
  "key2": "5meRbvc3NkFf2LRQgTG1wdg1TKK1GhCU59W86N1Uz3UrTW3o59aTAiQttcMXJobANVapoqdm4JoyuxKVmceAucde",
  "key3": "64VoqasJiUMoCYHXsHDoFW6AehFwEFxGBgYCXqaNjNFvqXRV8NiAuUDcgMmGsSAcDgHqQycjZvDdnQh2g63W8Jxg",
  "key4": "55zunajWEoZhANCwp7i8YtGMGNzbu2rgWw9JEMQJqFSszRs2MjDh3uy7bTGN64w66TDAcNfRpsidVaiFqQwaFhC2",
  "key5": "5hxRbN6KSt3E6D19hSre1PrhJ8VN4USrbjgJWgsGWJ9fm9Q1AcVVNfLYaC9moJnkVzchcKG1tZv7mJvT76Kg7wXk",
  "key6": "3Qhw1s37TWjjSNJzckTp4rVUcEa5mmNoagP3JZkJeDAxo4muPCcXciFFAikbFwycUom6iem81FcXzf9zUMVQbHJY",
  "key7": "675fPwz88prQXapcWgMXLLuQeLHsvAptJh2R42v7JFQMQSTzysjVVXjT6mYWTaaWKh7CbjEtYEFf53E1NPvjxGcN",
  "key8": "5E29mUYFNtQxBr71SZNcmjmiwdVZp8nLKs9e2yLkZWh16RmxennShbfJZtG9rRbxZtxmopnjdddEA4nuEMMNHW4d",
  "key9": "3YMAiWdQKfVcgxNXRVK1fJDt646D35vk4EUFHKkrMCugFyJTkcyDgPXWzwdF9fFwBVjxrjcfBdqfnieTuqisUkPP",
  "key10": "H1oxB1JR1jvAfe9eT7jUMNhVrhH34MyHBbHyf5iQE6nnQUVf7PdEs7ZJf5vgeVNpoSHyzaCz5AJJcmVjVCbnEYW",
  "key11": "4uKpJKibDgtUpsWk3jLJKZ8ceKxSZ2huXFZLGVxNWmhZ5eV1kHXK7mY8GcPHQkiEDKETRTnYy3p8qJq6fRPFxADF",
  "key12": "3JQqrZs8qv9Lba2T4jRyCJaWuVkUJBBEYRoDN2bJ7jAatrUYypXYHwbptAc7rKs6wG3ryysR65mcvTnXy9JEY9zr",
  "key13": "5e1GWHvo9QUH5h3GkFQeYZriDvSybvQPvNZD7avR67DbCGSyYRvviab9iHF6fDuu3dgTrTjST8aiakvpVBLzrd9q",
  "key14": "5fAyQozmSH9YLhUijFJtiRmVc99SaU6MXhHQQPrgTbirGgazQ2SJiTUr1BFcPL9yQAXGt5NjUqXCXKTGdJNoNTvj",
  "key15": "2ZYFozdJFF88fpEkiohpgbm4FmZP14JVZzwk2QpoiDWMBuT9P5juPPNow6HcEC7QcViGTXiCQYGziFzS2Wuomo3e",
  "key16": "4oxg1ixMct9yTe6Ybf25DMah1qvHJ5rxKNibVUtuxW2BkmCmXrSmk5jEzdH42J3nFB1TRe3u9aUEG64r4oAMURhR",
  "key17": "4EHnQJtJewB2EVRJZLyqqGh7ucU2DmbtXEcpgyi4ASp5DYUEjUq718WKgBVyHcfb4YNNMakub23bpA5zvQEAifiV",
  "key18": "5VXUjZs8DxctpZDrAgjASKT2KoTnTq8Lv92v4FZd65qfkRo6Yzz1MaLLDQDRTAniAKYNBWEGrpVqXysyPMUwtGq7",
  "key19": "2fB1B9tfoX7dp8jRZnZw5Wbrdwss6RLBQK4mg4M2E6knema7XojFdUpdhfoYQJUiT1HJC3VnxUhsxMFumRF41KvH",
  "key20": "xdvQ26dsnSXwwpYQTUe9rk1uYdtqAz1YsrSwmPMkmGvQRGa8fDuAMW78nNXQht7h1Fa5bqrdPrxAWDQFod9KSev",
  "key21": "4SPbxuP6tA9JBFDTpEktSLmBRdywBzgTj9ZVCYTv7UaVEwLVN8ogq4LqBqkjdyYnzPcUyf6maUyHzjHbwMkrfSGC",
  "key22": "Q2aNqEQTah7aEpgCsjHtow4fxgZencQKka7TnKWptN8gdxTwoC2iUWGWoch8MkfpM3RJ7xMZ7vUemmsBYbG3jG7",
  "key23": "2v36QKXqDLqrzZvRJ3Zh2cJWH5FjSe5G7S5nxqVVgxDkW8aqAMANT2XdaajGkxcKXLFbeCkuMoPxTiFvrrwSAgVq",
  "key24": "333PJPAHhACZgFS8WVHWSRjNyUEguEqe7vtmNWHKvjUGCiicsZYzp1cmoLuKR8wRFtmfBKSr1TRMRBH1ce3jvR3r",
  "key25": "5ADoxJ2qFaNn9GBQbjV8KMimdsGCW6dRv2rATLr1EKyM6xYsT2d4Bqv9UpRW3igrAy4S4xrZefKkzohtYiMWExMV",
  "key26": "j99T5faHyyd5UzGJ5DSqLj9np1KYdXug2dyuN9UyMdzqW6KSWTyFHv81p51GaxKv49rB5h91bvFuESAW9X3qptU",
  "key27": "124pYCLbA8kPuQ7si9CMvxSDzCkW21j3YibQrHrqTTPZeZX5M9crkCaCknvoMzNH5iT4syhb1rpQV1F5NZFxRrTx",
  "key28": "5VMgn7ozBnAzWWXZbGLCy1wWTfYw62Q5zKcM2mPpQPsNCUKQGS4C5PT9rp1Hm8nbuHjMDyFYmf1R14ig9P2Wsnmm",
  "key29": "5TAPpaQKcFkUSMBpALmTe5XfnDW6Pcbz546NAfG4mhFi68fzbzJmvt3bAxS1E54h1jAwRVJDZTe88oWaXbvzBmTs",
  "key30": "xUNNQtQUHuGzNqEPSX95YLS1XoyWcN37Kt6ucy6x8Bjgnz7yTqNbTAmqvLqUXTrjggcDjwQtZaKsR3AxM6tgUjT",
  "key31": "2ZFZBue22gyo2WbcL1kzJFx9bia3bnkgHNdWvBs49LRJzFTkc5wEycmNoQY3iSw4f9kdo3R1QmczS3Yn6G7Gbn5k",
  "key32": "B6FndfJXye4rKmffayyD4x5gBNngyqbDsKCWRCCWKqMr5vX71XP9JdXrWRZZAP2gcfVMQsiSBdHDt5kt5DYzjp9",
  "key33": "2Tjcj9fkyVLEFZJWZjF2Dfdax2tQgRaHzbxxpKjd8Wbg3GDUW1LEoDNHhHmwuRjGQMcmTNrUwAh3vE138bWvXVP5",
  "key34": "2uXCBW1VkuowQjweQJpGuNaUojEY8u5WVfbbWgXZRyBZgGdjFcFf9PsrcALqE4xsR5QieEDU1593HAG8X4vBBu4m"
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
