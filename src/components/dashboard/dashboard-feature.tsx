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
    "J2XYKR2NqMSF2jatFu2KuVPh4T9Ye6RtC4Q8PV6y3FeoRayiNmiPHDcmrbuZtxkgRqrWKsEVn1ri5AtqAJnuwmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EBTNif99C1gjknjhdssjzaxqqEziTf3k7xQw4nHtAnhSFFQKsihrvxiDQamfBtEzaf6aWFzx8zjynkcmDB9DNqp",
  "key1": "GzF3hTBsccUD8uTsgvjbJKMCfq7VUCgf2ERTUrQfJoxzPnXadX6nRazHm5KrUkgY5Z6nPyxcuDGyoHjyYqaQHDh",
  "key2": "42CgqrMKepQeUHjPVWVzh5Sv4B6ETm8eMKVnk57miuJRBEHSPXzuGT2JomqHtLku2sRVoTUCSHz3n5eLjTpBoaBA",
  "key3": "58iW416e1zp9Nmmw65Hqx41Aq4FwrP67n5GyNURpX172Z9Lu2SaayPYsdm1bfdZQyn9qbRfrmGwS6MeSrgW9gdGo",
  "key4": "3qvADuJrVnKSozm89LxDP1GzUgC723JWwaVC7gD91QQiX7pp72sBj3XozXvpW8uuJmnNpeDQTz7wGX5HiD2ARXys",
  "key5": "MT1DD2dxxo1QJYxWNhPhUbvrSXV5FmxUSqAZjkiy1D3UEpET3yKd8U1X9wKyvKeERpvCgRdvYym1vqNwUwNLN6g",
  "key6": "5w7nD3LSxuZ2a5cmUmforL6h9AzoL58DrJPkyLqdoGX2wx6aTxkQayKpBgXDUw9pW4QCQsHLYgMPzhHrshJaAQ6E",
  "key7": "2EeWUFvE1fSBxEA6RFaP8FuwWhGE3jNvRCRyNM2foV3fG2fAx3VnQfFd734xozcqy2gofpGhgtB7WpQ4GG2NpEMn",
  "key8": "5KeJ1V6W7w9WUzaTz7KmY554jBDBFWiMt1L6iV2kPjMywcKz2xTiwBVSvWK8iKPiGUSKWYwocoWQUSZvhfKpY7wQ",
  "key9": "tfpgksVJVwey2VY9W1PsoAn3WErFFH2tjDKRgudDs1WVajvUTg7ykVJQo4sS5h4AnhViYePKujVp2u1obS5bSoX",
  "key10": "5QB9HS7f645VEPXqfZghwpggNNnwzf2ikgXRnqFNk9CHM6ZzKkiDLazQTZucg3WXxSTLvhSqxefWtLbasDaS3F7H",
  "key11": "vm69L84bJUD2zsPFGNAeRwm9ZWMNmjRJe69wtS7chiUVY6HTcaLxPt8ZY9xzRCXfXMBX3MzyodaTKq9tEGMmTnj",
  "key12": "4SjwFMfYn6z6w3A8bQdBADkBq7UxYd6nTp2hnjmHrRYM8Sf9xCXYvR4yA1AJLZs2wQvF649MEdctY3xvuTuEpDXY",
  "key13": "5UCXfNEKHytp474vjxJGsfQm21z4Q7rN7YpftViYmSRW1pMF5DyMWXLq3pAoWuWkg2C3t9FQmAAemZPq3EapdoSN",
  "key14": "3gMWKfuj8Lxu8CfWk11g4zjERnLM5tLDBXq5HfjUjWX6LRutMqwa59nq7nJ4hPiVWDGakyTai3NazB6vozntyUpG",
  "key15": "2gVinADZq5ZoRxQg9Y3TqdDyMqyYjABLjArfrkaeKCQyXFH9ezDPvcQbyd8KvmKfW5rLQvVEsDNjqPPPyx2C91NS",
  "key16": "57Esc1ttsDxbNzi8jNs4o55fBiY6owxEfV2SCWX4Abxs74pX4j9tPCpQJa3B3CuvKvnKCv5m8EXQRwEhVxjvf8m4",
  "key17": "3Pi6SJgWxrSiwt85JckLaGH3UYR1esjkX2KUowXuLPdvbfyYrY8SiAprVKafqNrgeRZEMn1uKLSg9RPMYAMKLtvL",
  "key18": "2Tc59oBVewCMuPRvMF6HR2i7ap4kMjJpTjyXZGzaoHmmHNSd1bsmVb62eqYJf9bwVgPMhLVYTJSjNj2KpsF7Xitz",
  "key19": "5Krw6AVnNuqrEwjqYbicHL8vEwxJ85YkaZd9Xrhv7AepzMia8dj8WVaVaryLLgW9PV1cdQXyQrC6KeaZwbxg8fjQ",
  "key20": "37fW8eq9tQt53DM6kcgnakepmy4Vyhwtgyey7LH6NinQCZobB4B9uqNpm1SCTLEAwsKAmtaeeUL2gESd2WRBXp7v",
  "key21": "4EAWxnAR234TUFNB8jH3DvPNyatVdPSLJKM7XsazHTsP4uVSZnqVXUaDjNqAvihpFWpmvKHHCpYdJVqmHdjpCgM2",
  "key22": "4jeemvJHxikXzVteRfvtdBypdrFPD4ge85qAYxhQx942gqjPg6f7vptKCaWkSAvJsRw9TC1kn4rkAPkS2AuPSKuN",
  "key23": "29PHqjokdZDEYbvGJLEWZq8Ca4KwbH3bb3ywBwPvjYUYH9HsXHA79yXmwii2Mhh1kcUiV7u5as5wjouZjiVodDSu",
  "key24": "4cLrh22CA9fxT6yAqA5w7dxpPrRBsRGXQgdcYXkpA7KAP3EPKHZeYjyPczfVRCiTPg9qxwacKLbH6f7yeGVCYKNj",
  "key25": "4MgDc2K8WkDTwaNW6uoQDdGpDL8HoSfNyJoeM7R328JZBSFW8WVKnzobwP7AJjAhA2aDCnaXTWuEcwpGqEYDxrhu",
  "key26": "3GW5ia5snJGecibDPEvxypqrCX1od1ASSHTEjZmyLdyNaakY5fLTwutHChgiZyAgRg7R8KYJE9nSsuWKmhBeY8XJ",
  "key27": "287TmHBKbimxEJRWNcAtF4a4eWHfBZ8qVefodd1AoRAzbJymPvJnY2ujKw2k91W6tZ1Vj2GCchu5teDT1SbiE4We",
  "key28": "55FRd65vvRsdhHmjeMvof8TkfnPWswtyKmRUbPGdUc9QJQKLyjkCkx9Sp46MMkD7UzKn8Y31C1fMnRBUF6BdxZNC",
  "key29": "5Afv2LZBP7ZuMVasjvyUhL7YmQSYVCgndJCFbvntubHEjyvNLeQkmC9o1o5Yhfu6xxXKSweJkYxFKUvjXy4Xg5Sf",
  "key30": "2cAmF2rUYq4g9XU2q2A6nhQnNgnc4ooVQsMhvERXkemDNYDE3QcyEErBAvRKeqHxoxaNNmjUPTTq7ZwCCDDLgV27",
  "key31": "3P9f2VPJwhDcc598Ss16ejQ2ri72RzBDJb97kZCk8c2MALPsMk8HV1pq2weLjakSw3HPRKHDp5tCP4byM5k2gfzS",
  "key32": "4VS9DZF15MvLsjjitzLoarnfTSU4hix7RfEcTwMB6bisdrqZSBaGvEBP6gnYYr7BknSvKjhF9M9JdhBjQkw2xBik"
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
