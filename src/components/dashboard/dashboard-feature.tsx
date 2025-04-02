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
    "4v2gw7xfEjKseiEdkYqKhjG7F9VySjZSCYBdqZFwXchWaXtFNh5Bc7n5PPfeNzVbUjNfptjFMqeoR6crrGkwwkPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hUW9oTYamdGaay7MM7rwbHrDNnTZ9UosuY2Ah1yaQRDk3ybLCfjrqCRw7MZTFpPj1JedzBBCBk8ZTM2tCU4gHPJ",
  "key1": "wAKG7kp5L8Ejq6D1YKeLtB22jKaWipVQfyXATLFNvxuSd11vNqx6CCarK14PqFeruWcBGedQ7HP1AX4KsqahquK",
  "key2": "2ekF5KNFxtnZcoZLLLLqMovydXfrajQVyFmB9u45GF2Vv7np2RLEhaurRYxBmCVZpozWbCgtuFuyRx8CJEsVu513",
  "key3": "4jJQq2KRNoyLbzaLKmWNF4QAxYyw2VUNQQv8q2dd6T79V3QTs3EqVh2LhruZ5148C2CQHjZdMRZW1UWdsWQMpwJP",
  "key4": "5DDSsXSttvP3hPyaa3fbpyuCRjCdpVmJryPC2aimUCunPvJpLxe1tHxNxHwACts7wmfgtt7Fcpy8mje6HbJ5LaZe",
  "key5": "3SbbVAHLAcYQiUQ4buCpXnrekhuKLyq5gNzqhCbMefSkKkbERyyJJ3Fahxz7qictLtNDE3fgh7TFZeMFJ8nzXH4Y",
  "key6": "2UAonuUsbWfMN9fWDbdUDTGRQL4jSDhB9YYNB9eZ9gw2376nqQ5wGSTRvcSydYXpywmc8qmE41Q5EoXqGuMESgN9",
  "key7": "x3Azg8WgmVSpt2VVyqq9rjsWKJfWPaKVQf4avfhoMnKzuU2cf5ro66yPj8ecNAoMU7UA5iK6N4VeYeSZ3t7yxG9",
  "key8": "62K1rFFxf9GCZD9aiChhSE4GaQ4wEgRnK8HE3egUyKU98jX94NsGCocdBxRLVwtWbhSJSGK8MXrHKKV7rbL6fL2o",
  "key9": "5pBfE4B9AHWipLM4LowVqbNYjejLh58VHyKqizUWJR6K9XRhZzTkQFLPvYpu68ufLmmiKWH6be3J5Frpo2wfC6XG",
  "key10": "3SKAcxZYzy2UkqUiM3mWqHdLosDPJDQZfFY5coRd9VzsSrbSK14y6pW9N5C47giKGsqr1ithqZrxW4FfQGoXgy4J",
  "key11": "2J9ZHGpLxmHd7q21YHWTD8qpiFsLgm7mCxHLVy9reKGjkN7DaWHh91F5Lptnu8SCxhf9AEzHeLbHYYj9iNQGiA1Q",
  "key12": "2ud7UTBadaBX751DWNmdjNrZkJWETqVK8znCoyEQzZLPxX4wLaeBagwXvcULgjDUmAD9FcJqjAgENGgVCJ8bdnTL",
  "key13": "4MHDsMeaUmstxHkhbmhe5xEHsfSjbSGykW5e3sbp8uPeKRNi79LzC4SeuxonA7saaZAXHbQLczxhCyXZdjRREuCw",
  "key14": "qYCheAhQ7F1LJHwQyACYjpDirxtH2cEs5vu7hAGC6LTSRCGT94iRR385ibbqVLQjyq9sDcoeWCDhSeZEJvBhsLV",
  "key15": "AooHqd9FGYSiMJafhBJFfCikUT2oKGrHYdy2XYbnPvjYmUzYAPWwwRrDCq8AWqbh4mBeeCLRBWnNb76Bno1U2gx",
  "key16": "5iRWe1rQsGt68zRBFkWuTPBMa2uSezK8twKcw8HXRZV2ddj65SgiEcbqC14ARXPj9HMV9eoYoehLYqzmkAnA4ruM",
  "key17": "5vb6zN7XsM9CZKxBdbRZ54DhzHXJtSmEigHX9UDwvgwLULfQtp588sDidwAa5XEUCW176sLiVF3iePs4nSaqCz99",
  "key18": "ffH53QDVdDS8YYo7HQaMTajaSoHGj2BdfaMcwhHQzuAvwwJAPQxKUgLY5pSccphzRd4hcsNNzzxyBbfEJRgvgJ9",
  "key19": "4QcADEjboGkya8VkWTnStAa2MESXpJ3ovCMzRKroysrg8C5MzG626UwkkXUq9koXnZnNjtvaPZzoaSFAvqusAPKV",
  "key20": "4rFgorD9b6zEgW9oriqU4JG8rDjfScuda1V7RC25HbDGAAS2hniUTuZrwsHiqCgc5P4ZP4GJcYwN4Urx28EKndTp",
  "key21": "66YdnD9r9FBuQhaM9KtFwFru8Yz2WmZLgiffyPrvoYr5r65FHLDnY9vT2BUD5BrqGYFe4xL96ZRyw5DfxGPLJTFj",
  "key22": "2dVqmHumgMMRVeCmFAD2Rfeut4DTKyRYSKui9UT5qiz5c9NPezskrz5d5hJZzhNpSgViqfy4qRMkQoJYnzjmvpMP",
  "key23": "2bKStU31yAGkE4avgYudHhyT3N4m8kJitVDrKGTtayYddCNxPdywpJEVV9PWaKb9EtBv4C1waKYY2eo2THVnAUMR",
  "key24": "3TBQ7CkccQFDRED2jdVZhQoBbw6BkrGpnFNKzevax9SDNTfBSzLwHyYNPe5ZqHopkshFDC6Nrj9FLJGiz6L9PoYy",
  "key25": "5ukoA5Bg51pUywWbSi6JknsY75obwLZy5fhvRLngQCNRu3vWPLmoAKCZQKhQekbuPkukgDATdpB2SAcuCfRWpP6n",
  "key26": "5TGffmcmK77YAHfnFpAmMzLNcAqzGCTFAG8YQwZFoYVsg6MSUopdf1nyRNpqmbwjjDM54JaYDG3muPR6EZ83xys5",
  "key27": "CQ14kDSVbtKhL2XrFKGZGEJgb13dpfyQacCS4aQ4ptuCksSyza34yr8ad2qLrXUAfhfJjeNsRUbutBxKB7JgoaE",
  "key28": "4hdDr5jJdPBF3uMkAkaoYxijBHhwUoqVWAPuoGftXqiJTHmVFyMxB8iWmVLfoaaeLMpk3iBgqH9NBDxbssxLS1r8",
  "key29": "2WN84FRYsCTk4fyQumMywVYkrTcquiaqJCm4tFLZ3jqKmUAWK4VQMt9i9icdxW43mDw3CjVFrx9yFiUhh5Y3Weyi",
  "key30": "47Xdjs4W5k1CPEV43uav4VtaJBTJoHL3dJN5nivFajA7SqeQcyYTq1yfB3WPifqzLDpVLFw6Avps1ia9P4aAu8oU",
  "key31": "4ur1eiBHgK9aWDkoEQUcEBKMjSqAA9iCtT27iUhtVQ23tZ2pj3V3dnm6VhanjUqQso4U9cVEnxACVhk8TDnoRzKz",
  "key32": "65nSWmZ6fb9CeQu9rEsyW4AEL2jfbJeAnhgRPndBYAE4JUCwzAR42QvWGapuEMr7Np8kxgiosKA1oXgMjveSvUJb",
  "key33": "yq5GZfHAef5cA9VXbLgMTbsrwQ8B8upaPJMEVnGJzhnHYR5r7v5QwKVTHMZsUXX2uRzRyE1nNs43vKnwVk7wkpo",
  "key34": "4wHwUfxYG8CkY7H4yv658cdXdsP3cqNhq1P7HPW1LXLXDxnsBVu2QsPLGwtaqnYHu6DF7g3C3LBJvxvhqNvpPtkR",
  "key35": "47V5mv3PVfr4GJhBH1G1nu2Bs7Fv19xL3Sq4BQsbqNdTmaqfB2vk2uSYLpyx1W8z8HVs7exPVH5m9sd3ojX3CbQA",
  "key36": "299EapUVnXK6fkmwauVh1zPqkyCHoFeri4uzRQAyrz4qukuYgygD6iU92mAEmnMGWV6tXyd3akMJfGpE64XSxo5a",
  "key37": "5CCNvDCY4UmR83CFMuXZvLXMwLDE7Y9yQTr7fgMSf3UWSQ6qrfd6F9P4bqQsAyh6LgcBmW6cnfZuXg2Ln4Vu2Trw",
  "key38": "2yxUqX1Tv8GnHazi9Ee36N745251ianRgAybxg7zAtG7PUidLK6egQJ184T9innggnvRQ6ntLnEW9Pr9i42riRu8",
  "key39": "DY7u4CXLu4RsLrfuvZEozh9C9Gso81gNAMzN1DYdfXJzWeetEyVJXjkxW6PWokRyfSe3YbZcMR7kkGqgBZ1z1MA",
  "key40": "4vMub7TrExBAqeCpUrtdMvhasjLnJuX4EudBMeoZ5VC3RuB5gtLrkRqYpm6XQN2Z8HbnYY4URmSRvV7zozMXRwu3",
  "key41": "2arrJpRNYZA6ixMf35fdxDDYjJBaHMBYNnuPLtvNYez6ksGsWyFcdx9ytnHHWhwcL5c3ctjJSXtL3GNeHQq3hjLu",
  "key42": "3zrPXowc2JWsbZEQ4RFDgNbcgfssfVSw4v5AWAoBUV8Sgg99r2128Cd7RJBjEAxf4reSaX5dmFuB5tKRowcaqCa4",
  "key43": "4Xh29dBdMg5gXTfsaZ4HoUB8XGQorFBp23NUg3TopqW43nGnTdms49dg22RzTTXHNPfsM7iC9g9SfaTQmB7ao1wC",
  "key44": "g4ptygsH2HkWWmNeMZzSGsgFjCmRBZwRjooHE6SKaKTrrYYCbthYNMbYFAf1ygoNjkkkVp6jz1bXYc2KUffRC54",
  "key45": "2HAsMaeLpqME3v5KUFeLSwHfWzf4vTXZbagRXcEW5FmugdAiQ1W7DYRXDSaTybb3tGQMt1ocRWtSbYMJpXM59umL",
  "key46": "3RxTfLuofEgeoKnnL1dfZuhpm6adRxE9MDd1fzp3WbFH6L8j37L2B9NUBserUXMDogoTakdUmQiuvZuogUn6ZMt5"
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
