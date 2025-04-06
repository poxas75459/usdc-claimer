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
    "2bF3FmCcoQpegBW3DypNJtPxoCs31jya2VMph1LiMFncL65BtrzEYQBGnJMMxaiuhWspF4GrcnFkSsLP4emBkf3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oHsfnkwQU9LTu9wX8466MAUdQVuczmEqKKRGuwqQpHyVwXSwvxGWapnitZtAUVunu8GSKdJYFcmu9AV1vDFnExw",
  "key1": "5mY2jwp5NWnqGoeMQRQD14nBdLCtbxYe2qjQokqELxa5mKu6iVgeWuAZgiYy3nrGQvpmQVetXwzpnh2W2mUxPMhS",
  "key2": "RQBwqvBRYvnLhScwzZTRtKe6fq8ps6yBuQopJoBYSsk8FJQyPQjAxi4zD76ES3sZr7q3XU1cKRkrDmDmAtXkZ7x",
  "key3": "uUpLjx13FJZcYLjmkLPHbLpT8JaFEERArn8fcKadokKZ9d1BYD5H7scFqzLGQi35LhfPvGaTUuDwPfMqr7cMNnX",
  "key4": "KrU6fXscMwuChb9EzpoPDTwdraiU4LDN6Hzg1YNYobJh5pzcdr7GUA4GrWdPejjsjPevZsfYAUBi6rAwNUnKMuZ",
  "key5": "5pXregFvwcHmLYLNXhidBB5r247HF3Q3qaTBKCkwRWjxnGTuLCSS9u6c7za8dKZSNqXoGuJv4YL4J9co3qe68tXf",
  "key6": "WXpyxWZzvSPrn2j1ffK1yw4fV3CjwHaGft6tErrEU1Hhx2fTyCqvVrJraXSp6ZMzDczBdJKh3ToKYF9p9adTcj2",
  "key7": "4yTka4eGe6UeFv3ADGRDsc9EEAsiDtYRRWaWYZ1Wt5Xz8bJFGmkWwv6TbQMtF7abMXr9ZmcfuEYcUNNPNe81rANB",
  "key8": "5wkYobTzhLEgQkxxd5BnQHaKjizthaCbwheHhsoCRvaDhFopoRF5iJEosgSCj8Tnaps334Jq8Y8whC7ruTRwPTbR",
  "key9": "2NtKiFpzHVeFD5P5cy9bDq9AQH5LqHPx8iCkFuhAcVYC1TPKQ5gJp4Qcbwg3npPPxfz2bP3o7MgJZ65DotcYDHyD",
  "key10": "WvsVUdixzb2xGWZq4W8KYCLbSya2fT9p9FbiiNK2AoKJaMKcpeaE2UPygjPuYP7Psbwy9Hcp69vCXKTPAThMp3P",
  "key11": "5VVMLHMKndmifgh232ZpPTTh2im9Ah2GjvDL1J3qkzGMSQeCKvAEuA8VxzjEvXt2nvFSvFcM4WVnMyqVmuVDXThF",
  "key12": "54irbGbYdAqTM9oSgCJ4XxJs1mrwSb5YdweugKKAGjiRg4utx3YSR3gAVa2gwgLzErzGHzxLFidcvZeguekbxfiR",
  "key13": "3dQTzQFoND3iRBGqm8ndWoCkj3FgXGnEGBC768ZM1upixAkErXwjMJHpNnQVx2SYsmmVgbgS7buMkyDjEsJU6tHv",
  "key14": "3MWekxcy6KyxC4ws1Ce6NdZ3U7Y6WBLT4omNHpDpFUXfbj31QragtWiLXSeWt2hKDodUMuDPpu3hetZ1w7C5rn1s",
  "key15": "ZqMyHua3okmomhKBZW8vhwewLrVrSwjN9Y4pq149wFsT5B3QxFwoAWfZL4rMr6f8QR4xeVLxUZ3KmJFmK1ukux8",
  "key16": "3Si6izqJMoJEBc51UPWuX93zTHHUt2ibj5cAauJ1AUbrg2FHqvJAyiunzfncbpmaptj6xqH9643v1Bjkkoskx2Pu",
  "key17": "34LKdDXT6fwwpx2hoaxpyZ2XEP58h1JZUM3FmSYNrWm5Ro5TauHrNUnmvS3EPhA6guqQ6Cxt6we7QMLGBSAg6F4D",
  "key18": "5QdUJwHBPtcYvwcRp9iQsXpZ6iCFvyMvd6iwkBhExQqSzhZboiKtU4jjLhjySqV82CVN6cDMFXaMdSvkJYQg8rhk",
  "key19": "12asgE9cTef2dUr6NThu9Peh4ERHe9JZnmtja6k7P9ztsGVkkhkUANQjEqNZ5LMt24eFtqhByAWpP9msN5ggPaG",
  "key20": "zeHvaFMsNGM3i5X759gNaf2tYM1FkUJ52fdxrm5499RevvGCM2za9m1cDJxNf7FejtHRx833LPRLNHML24D6Xgh",
  "key21": "3CmLT1VtGJnWbJ2aZexH4TYt2PqjjWrfYRDNAaWpjfT8TRxgSFnvw9KmYkdJP6LpGnQwdBmRJPPHqXteb8rvFsTk",
  "key22": "2LsBSnm8avcAguJKZs7cS1WAJytEcGBNuDBo5jvK4FG8Ftm3G2hrDuk18puSLfFZs5pASYpYb7mrz75p7nSKkXgg",
  "key23": "X8aLDpm19ZUCEMfeqjubK16tVA2M3XLFXNmeytQ56HWggWJ4UrMrN1tUpkTcRwVsPfV2MsTzqzXyEKuoGFp3nNB",
  "key24": "4ZiTGhnj4T7J3y8DN4ahB5wtoVnSFyEqzJdBKHNaZA72S4e4Y3UUcyi48ZGzzj572Xm5ZPjA2C3D72Fz5WVSq4eK",
  "key25": "4AbEpzYCcenNjKjqLfVdYS2z5GVxmuZjQXAzU6uii9t4Y4Nq5Ph4XPE5CppC4PB6ZRkmCm1iHmNPBJuSBKu1xSns",
  "key26": "5QWipZ2FGE72Picuy1xjcGVAs8PkLbaN5KBietEWQVp1zNexDbVa7MmggXvFznoH7S253pgU5Z4ZLtwd8n1AAJSS",
  "key27": "T1vfugcnKjm53f6AQ1ap37FLe3EtmfmCHGVFiaurXTzi7YH8kf2GW4NP74egy39CT1rz7YJmPNGeZjUnZ38W9qN",
  "key28": "4dunkq7rjJDiyURiE6K8wPSWRSmB6mMPFQ9W1ZJ1whm9EwsYW7TcwyrboDihVaMdUh7FBJiKmMFU2Tp2L7FjxsSw",
  "key29": "43bmcPETYvxraV9cXN54d3Uc37K6ZjJTFiscg5168Hmb6gG6tY2MEYGzaNayfVVz6PiZxWxfRM5pmFxxuFDpYiya",
  "key30": "4bfnHJh772Ar6hoWR2bpMAw9KkbB9atZ4NvhJCQdVqKyBo8e6JvUfJEiUoXjbajJdZ6sd2cpaPyJWfVfP3mwzyx4",
  "key31": "3EVG3xG19EjEMkznMZAUE2Cs9FFn9dSWvM17wJjufRMEE7PqT4cfzb7PUfFTaU9FPz46joCSreHYDApePQE6BAZd",
  "key32": "5RoFwTN6ii1XmifD2iqj6kDP3ck1JbLhMPGTjw6TgXWvmqjAxbAmKhJhFLmXrTepBf1L9xE67r3v6drpkwN3v6fy",
  "key33": "4fWHuxkyQaXiJSpKPboPePv6FQm9Hmq1fNQqa6gZ2vN1LPBH1419ioNJxbwqMmx4VE21tCDgzanemxNqcgMAKbrq",
  "key34": "3oU9f2iT1nmBMhNE91888qUvv4kpyN9h1ZPdaFUo61ZkBwaquuEVLyNu41ba9Nq3JyaaJsYL8egf6ttrJjhTjBdC",
  "key35": "34992gvg8qCqWFKRDqS1PadxSB3JvLqBkW4nsnDSW6x9bMzNjqQnHNrSHJrTJkYpmSxQxJGSxThtF5Wq1dnBbrLz",
  "key36": "3rS8iZkUbXmDHJLj6pjbqPWhB7r3CGebyXN5gVFjPraoQTVUfH21BCfeVL14fNSpVvhwwbMVzLfyAGP32ZHrbuAF",
  "key37": "4J4PrXQ1KESAXnvXYWWParwenR18bbfH2c8XjDFvsg9TTuy4JmsFAEp5mVUMkYZLLx8ynK5ZdJHjh3sjvHzxWYTj",
  "key38": "4FXvgFVKARLF5NmAvoEFsCpVjtZaiap3Phagbxbq3uNvUJjd6t68G8VVAWpfHjB9FfBTeA5rtoKbEYJUHZKF8BLL",
  "key39": "58x4foZDs6NTYRkLY2ouyxNq3Uv51Vsvt5BUAzVkPwfce8aXdjLu6A2kW34BHyUKUuQsHNFPwyp45kw5kStyH6VQ",
  "key40": "3TERcDHvxrrqDgBmgktyJZ4ZiHM3HYMAegnEZb1eJ7UiynU7ESo7Q8EDgMy384MNCTNwfjT6QqtYAbegTcevKLZW",
  "key41": "3xzgzszaUjDiXXXErnbWWwSWAC2cEbqCYwMmS4X49cKQ8evRa22SEt91JuqTB5nNB6XWmQW6ZiX422uEeF2zyvSf",
  "key42": "3LdZbbs6VbR8iLpGjgFjEy6CyJpH3wavaMgXn7eccGbFavcdLCPxzqeLopzMkMb5WiddN8jSscKfast2vssKY5zU",
  "key43": "437KAak5FV1Ebd3nL84FBCyN9X7qzVXKhRbw4rscvnpP5C2bu5PfRTN2AC9YHiedivov1LpK6j4SnmrNoxqLkh4y",
  "key44": "5BEc33w97qW9SjmWJXt6J147inG9MPzzDZvCqTvSMPpU1jiXiB3bFewc6aw1X3FJz54wRmvDCBUwBD7akMhSSLJp",
  "key45": "292CW5vhUEsP5xMWwLEsKYLMPwdEUw3jBSu9AfAS2trvyf8ND1NbMH4GZd3r21hsxKD69DTtkqyydcrWkXtJWzAt",
  "key46": "2c4vBcWstvGvnX5pSSjcGP4oEvxYq4JnL4FhCrpVMKdXtmDbvRqLSNyzXJ5uSBHDFpQX7NaNcQ5kkmC2M14bLteS",
  "key47": "5iP3XM77b18fPCyhbJZJ5fG52PJaARDJW2UHLEPtyxZSMgJndQkQKMDgHcef9i8f7yoaWYGqZsjYVKwwqdhuF2pq",
  "key48": "2cphoVpviPjXUynbN5tEkXCM5Q9vdfwjtu6h9Zaas8vArKDD32c9cfdWVb89nFceVvtzrJLxpa3Prci6H69Pce19"
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
