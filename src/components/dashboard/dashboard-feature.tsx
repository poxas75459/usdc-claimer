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
    "3YaV21bpf4UN5PbPhvUrgPYPLVmbrCvnoi7PQytzaJwmtEf8Qp5CvULscJ4yUmp3yxgta3obd4d3kiZoxDsh3odc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SFs9Q1t2CwXPacLwdFzpnso7zWqXXRG2Bvr6QNGWRngS1GBVABa9JsBCnttam1Tgde8MFDDE45svUoJMf8UVmPY",
  "key1": "5ydFzz5yfeL9fFsbgKMAQqviLEe2oRUib8fgKs4LaQEbpLD2EyYUR4RPHWrup36uuuQ8NpLdmHmjdhtuu89PeikT",
  "key2": "3BFtNnWumkv3ywSC4hPmjSrY8mH8sfXqFpASgFGhLJAProNnAG3TL9HhC81DkBTBViM81CTEqKS9Ua1DFQ2NPfG2",
  "key3": "54fjrJgwJ8g9vjqUMD6BaDKBwsheeHyjBzrVdma9wSnqPn7sqDQgPbfAZg8K93aUgoDTvNSvJ8LSLudoFYqdu8gQ",
  "key4": "4nVWpsf1AfpYLEeC7eG2m8rUXpcTZo4Q1Yn7GeUhCGQbHX1rx5CnnHuYsX8mprMm9rD7WE2232yZmtfmHTePAbR7",
  "key5": "RAiWK1FGQQ131xLpGibgg3U8iGiWtS4RiWakJ8ZMwgcWex5CfcdQxdsAWr9Jry5XMSnKeUgnk53SRtuhWnRkwLu",
  "key6": "Rn8PaiNZ2q5JG1xcgQxgckSsuk4YEiN3ZVwh9JDRPTeMsh9Abt3y1SvndMqxKF5MFeAqQynR2wRVRYJuyJVuxVu",
  "key7": "39qkNd8q5RSwzKUnEjGD5oVUk8xDYGMFRZyaBRtRCoqHBEsnDPkJpu8PaidnU1LA8H1Tc6R45NNaHfE3TdNnEptZ",
  "key8": "5bdzVxCniuSAsnvjqyinCmUu7z9gqd4z7jSPJRZ1oAH3vJgXpy8955A7Wz8fp8HSKk4Rc5xBTjfgLqnRTCTv9AcZ",
  "key9": "3bUECfSYd1tsNAgYBGvkxTYPdQH5Yo7Y57nSG4LcnvdUKaxGMGY98Zukm1fS2YZ2sTWsjj6fDvv1ZcBjFrAG93LR",
  "key10": "4cVhDKVPcgvGNPBQvxVrxGGbe1hkXh1fgR8GdSFLfdPtnQWKMqxdhN9L16di8kEjwWi7TP5GhDKmiCkivM8NnSLP",
  "key11": "uxSHdnbkCNVNSuP1sgXpHAXsWwvN8ukYp1G6MLeqUu5nWVBwiT4TNaisiuiZAy959FcfSM3w7jTcjUGpSLBdymW",
  "key12": "5L5zvNxTDjeawaDc2f7meMv49XUNPj1aCxxtDPUs6QG5hmV1BrDceqARn5NaEh4AfbD1v1rZEmvK2JgHuJigSR2E",
  "key13": "2HhkrCvoNzy8ewcdLhqmXMN3UHVFUuhUYSzrNemmURpjd3T4VgQJgawtxAmraqBhU5Zf7hw4TvMa3Wrc3GjoM2ya",
  "key14": "WQFYkMbmDJEDNg8zD7AmhJhRDZZ9HkxZXHDFrSBinKkpuoLMjoHNfH8QaFHGHNpvK9rGBwrjiy2ocJLsLd6pYvx",
  "key15": "4wpKDDjHnjRUZcirnzwZvcvwGTdCFqdbQ4iZjpygjSZomzbVUQSiBeWaKmiZHQ7kJybnXFx7tHC9GtgwkW2cGKRN",
  "key16": "3Jk7ouhSPScDJaSRD7ZYkpGRk995qmDJdeXaHpJr8A56Ym6BpyxAzPNtjAiVJ9yzSQRss3MTM7E28j33kD98mxrh",
  "key17": "4QP3r9P1LKDqSmkZ4iKopkdmYifGdN19AwjPeTtpNqkvjQHeHpDNC2AtJ6fxuNFvcJ7zzqcj89zMogaUm7FyhWkn",
  "key18": "2oFgucBFgLNPpDd3LfwLitDE1ckHTqCtSfVsGF48Hsz1i14zqWAC5rbfmnyrDuwzPNasq6XbvPMFYqHH5NxpLYgQ",
  "key19": "t6daYksYTTGdPYobakhQyTToN4bibKYEQcEGV5i92pwVSMMYjGUgizaRaCwQYTgtdM4R4j939epHjRkow5pTqDd",
  "key20": "5VVCaMhp7QnHLxGx1ACh4z8fNYZNFWxCA8PnVC1Le7eeLVZMkSx16MHKtjiKU9STFi3wHPcV33wNUqJ9puY7Y2MJ",
  "key21": "5Zv9v2Gqig7hNUFTt4B4SYHEFXEu1JEMWDMbFqah6r6rSL8CyKmEghcG6WUxbkbz6wKBxRyFN5XaoKmh3Y3Yr6KS",
  "key22": "5fAkhLmU1L6Trkyrzs2jgXHEqHuzxN43C4HqVPRg8pjKMExEdmuSpBGxoY1qeqDopsuWVLsewkDd457vHYNCChcE",
  "key23": "2xX7ujznwr5wJNLz7x2dUyi7BWdgcETs4wvCkPWdbKkT2QXPYwm82Y5ngiVBTmwGxqJcsT9t2pMFSdiySZ7CAJEM",
  "key24": "5UUs3XmHDccpiRbF52g7hWiJ3DNsQCJWqEikayjwfbYdcyciCz6m4cqd6WJnXVuWo9BW4zyWBCZX444tEYUwkMkb",
  "key25": "4K379zhtxLx4KMajrnLS1khJqKxb66pGKtTG43ryNWrxnn1L6XZkAMXKcjud3An1gQ1M7TNVP1WbmvMua2aoNbqq",
  "key26": "5P5KZ6oE5ft6cvSiZpF4ybZ6mfDagDwYRGAJssDbCqFTNbjW9mQaQaE5Z2RtXpHuDtZSXCRGguCQQ4cRyuTVnPBy",
  "key27": "3y4uX6mRYFAU8uiB5LQEdQC1BV44pgaJzvbowAaPrN1pbKy9LPSYuAkCBSGebWAjcyMxSgvAV8ww5aTn6b4nhEis",
  "key28": "3tbXEkHqQTXpHBqUtkwKmt2fmZiJQZiRj9LL8kwgCCPuW4pXpP43gUdM89stzcBx3tUuAC8HprnJDmEWjh5YmKuZ",
  "key29": "58VpYrxhtZZ756TYxHG44nwpNARFKum31hRHT4T9fn88oFuH6RnYaPEtZAXvc4tHww9W1RroXRdT6XCvbrZAdRfj",
  "key30": "2XnAfHaYTv7dixUMwntGTzJYrSdRmPtm9NWpLK5JgumkS9TdrZB2GKjqZxtsjh8HZLgnoUww49trr67cDA1uXFs8",
  "key31": "4udPQF39iT8mmcDWV5zK52dXedGdg6k85m89yFxoM34kZnHb7q4tkc2MoEy6zvUjk7kR5QVbDQJaNFu7N852fQEJ",
  "key32": "29YU8aDgowq59CgrCHv4VXnfr39kSm1Q9Mq3qHPaxKuif8FPjuSH4uGgeKD9b1YP2Jn28vP3pCMbRtDuwNR6TmCF",
  "key33": "47Braf2qKFJt8Q3VVgd5dSUJjJcs8YY4BcZ7NttiRjwY7QgKv1d5tLZ33yoX2PNcTLpVbG289HSeZVKnbfu9jwNC",
  "key34": "5jCuWYGzF7imnGLq5zaANtMBRSuYc4Xd3t9m7kjbkLDrqpNdDSMSb2nqPj8aq2f7NF26aZF5L6WTyhTx9ZvayJhP",
  "key35": "26JMkSViLgLJh9bGVVS3iXjDTAPDFZpgSZ1QrXpGpsmPHuk4uUD7qhMga2y14m8WXV7HX6uGhWkEkeEnqNpCTZJv",
  "key36": "3y6r4jRFv5yJTjmkVqMFWprYAVdAzAQHy8Td8HCZtLTQQXGAvgTD1xgKMSZVPx38zDKhvQ9oer3ieaGJVUMmto9u",
  "key37": "5wyTd368kdssVe4ZtxpgdYXKFLFnKzF2aExZrDka6ePhx9uToCQ6ku328ASYWyx3oZG63RYWzPcTtf7wnRqD27Tg"
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
