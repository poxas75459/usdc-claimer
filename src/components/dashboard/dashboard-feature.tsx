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
    "2vE9XDNYxtWfkdQbveJgzPoNx7PCwSWFK6KSzjcBXR8NLet9VctfZCDdGrtECBV9DjQKfa4yvMMf8vTzTmLDcFeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3asZfy9ePpLwJGS5Wpg1JXt9b3NbSD1cJjMSbieQeYFa4koP4EKz4JPHNEmp3a2BciKB1fGAWQRFaFN4JxonUuKi",
  "key1": "2vVur6iUKgB5rZW6Y16NuGruBVinf3QEnWLv9s6tvYpvWtteXsAjftAxvr9TUJaJXeZ7eAcKzgwMFZi38SC1f49J",
  "key2": "47REuMHiDKU8VxZewARLUSuujmEH42zh2FVLf8Wg15q9zw8dDnCEHJP4VhsyYRoo2fDugQx7RtgZB8rJtWhWuPpy",
  "key3": "5nBvn6Gjem1ruz6om8yVRbYqpNCbxU3K8KbuLPTZQbTByW2BKmY92DZSXb6ErMaVXhFjreiwwk8MK8H9YNVC6Xf7",
  "key4": "313q3en1UHv9SZ85Uiy5dc9igN4FgejoBE28Gjwyp9uNnAY7J8j2KSFFSHncNtvCcuijyVUMXvxaZ997BzmgqxX9",
  "key5": "33QkXhSL8vvKw6FLkzYwgiobB8wArJvBdSvB2okbnkdS68VKBuWQTvVzg6WAgBwK5gGDdeBDutFkHVEeDdafykkd",
  "key6": "31usCn7PZK2kbaEHgyyqJdPJkS9zh8Tnij2Cgq75ZxMF7rhRRcztRLAHanYmqFLvtQk6MTDQPTH9qpk2FYntuf4c",
  "key7": "631Vqvg93mDeYj4WFzR5gAJbYWawh5sYyovroKhNKppnRQV9C2vxcabWxMnGWGrGUMjEQyAKvea91pJyb25xZ8P1",
  "key8": "FWLx7F6WArcUaSUWqjH6Z7vunGepR4AhQfuAX5NwnSK8JZKyZ1YSjU99Wuo7NNopksvFXpbV7jKA4GTTRuiVdoC",
  "key9": "3gQyBVXshsKqZirG2qvZuZLpjXG1H3M9jsuvp8LdSQxS4q4kreQ8SYavQNGK8behxhJLGNCZwqSrNm9LcZGEvfzx",
  "key10": "5gZVfBnXh63nQGVD87gMt9A2zyWQgefGrbK5L2zuHdcNxo2DgdCoJBhJNWKaF7a58AZBbyeSJW4TByNr7EJdDPza",
  "key11": "9Ap4v2ckm84c4V3hsWeEMSdAabybN6eq9fdBEjt4aAYSnSdZ1EfSAsmxu63pkBU6oGgc6Ed6SRcpvLt5bL8vkNr",
  "key12": "4YdyPaWhB4kUFb1KJJCs37EkhVdyxEN2Q1AqEAYacUQULhz3yEvPpiQ2cpynFyV74oJcmf5MEmNnH5QXuYRQRFj6",
  "key13": "5wBC7k5no851RR98pFgS1KjXW176ctWV3cdu6pBeoqzMmus5xjfyhwxUL2CRKmn6E6o6VL9BhZdrV33t6nVuTF9o",
  "key14": "2hrzAZL5zrHSE5NubLxQfngC8wmcw4Jwh1JT5BVx9jKyArcogrxFxaGtPjiYv5Z6RMd9p3XRPy3GQ9LiqaBeT2To",
  "key15": "4CUAY9PthqgxNAKySBxHr2NMBsxgS4VoRd9YLvvTAC4VNm6QqY17bD7SmUK1h7RUqBxzHykn6TrbpeGTdsikqm8S",
  "key16": "2WnTRSpzp24AgRkznY7A1EUaAntvm8TDZGMd5iP218QDxrWANF2rjfK51wVSv1zUYb1synzXQkv7suEzxnSFhNfp",
  "key17": "4N6YWJAyT2kcBCpKmCTaZ1tEZNoKoo8Z9jFjYUbeEjrRmmPgorcpdxdXNaNaG3JmtUhjCRkNB27xAYwuPR4Fju37",
  "key18": "42J6RVsPtp2b4BiPL9hqACxwfnSpptf15UeZUzd2uwrfAU4AgEya47XX1mFJ6UHeFGSfEdWASAj3x9yS1nPrUx6k",
  "key19": "SdR22qV5xY8AwyRT5ZHetLRURom6Gr5Zq5cUR1NiFED2HAAz5kLQ4z46P3ggQxuYqYqdMaXevpxkULLGYt9U8Xq",
  "key20": "2ZhFE1bWBW7ADJeYRLvmJChDrEnVtdnMm1KvKeJcTG9b9PB7s7iTcmSLoYUAkuP4fsRBpDDRUE1eRnsB9hkRDVu6",
  "key21": "4qugZfSPLBMizQ3z9mNDGo6TpxQzPqSm3aXntHdPKX7o8i4KLAPWEsnbRSnM8BKbnJqvu4wdkeAmdTzrnD1EtwHy",
  "key22": "4CPVFAUxTdtMJF6LbXgfrt3JUWUapKS2Qktqn4p8uCaiSs3kjorHoGcUdPZajRJd3osoAoXwRqapMPChsJtjUvmz",
  "key23": "3tfo8WY9ZVxvmVzhX9cJqG6Y4V6KVPvoKa9GDAVPtzANKA4s6Ho1ioGjyc2NADWUgvtvYGuRMJ8qXDZjTJop8WA",
  "key24": "2mBVS3dnSGE7XTVBKZu6nuwdebYLrpEsUpXRHpc2JDXWrtXG2tBtJZCHhWhZQcgCtfBqF6GYbheSJDaAMviXL2hT",
  "key25": "4iWcP831wrGJ7fHk5N2L9GQnAVa8mFhhXD3W8ZMm8FvjkD5d52AzX5dYAqHBBiKHRdrNXMNniTgs5uXdSzcrMJXX",
  "key26": "55iChNpGePeMLjvx81CqnNsoGadpBb3xmek15Rb43N6TRWUjm1Nf3yEbG39SbvK9Wx2aSUrKDaVNwB89qMQNFTPN",
  "key27": "2co2dzq6di6xx6jVwVemGjRknjjY1TYKExFYGUkTj2L8tsUTqQQsE8fSp9tNkm1G1tLB3PaXo568vrzvAb2ceexn",
  "key28": "4hT1hrKwKckEzti2T1VJF5cGNMirb6KJu275us7wzCND6ZFFASv7W9MK1sZbaYPZ2SJnUtsmj4PXtGXj1WsNUxDW",
  "key29": "3hno6GZ11pFce9dX67QrWUYApWtswNBiFgEj8jShpvdCAi9A2CUSzjMGhdZM2wzs65AexorQVAo2H4fsT3skTyWy"
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
