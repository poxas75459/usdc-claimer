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
    "4xKKnVxA8PpcDk6SSCNfqJR7BkdQ5yD66p8R3mxCjFpR4YjTPfoFn24VhnpwZYoSQNi6ZkhfE9qVEtpAw8pWGK4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JWbm92t5qyPmuuXgDrpEBj17fXxzMgvJdeLGNRBugnWDhraywGg79UELhzLnhatsowfXCHpDJUcJdZC79CWEMZW",
  "key1": "KdiJsYsuk9ttgTeQc99cukNDBfAwbh1kSW48qyPH6J6cX8WQeX8guKHCvAurXtP1k7rPTKB2hPLRfo2Xh4BLmtw",
  "key2": "5STPDz4gXiBAsBzmh4gvYmTvf8TDekTUsPtRFwXt5vLsuqSwcBqAoN7FvE87Q6gnmAfLrvNxzZSor4F7DphR6wH2",
  "key3": "yeNyc4svfhnoGZ5GbM4982bG9PVGMQHcB5c4eJTrfm7989Ku5xF8BHn6UyTByGYEZYkXACvW9CK68UtA77hFANq",
  "key4": "5sVxUvJpzLsxHiXDac5ZgPp58a7T6gz9qDjDKo4YxbMpybm7EaioBYg89qDUsLZAqZBgWRLVtw5ZGAMk89u2Q2Rx",
  "key5": "2FqQzMd7QMrTamQP4eszb2baCqFU6DqMCCDWNb9QCHP4ua4Rve3wy4qspdCNfBYMJkqMpi4WahJ146rfGHgU8iUU",
  "key6": "5Z66achEhKhecfCdkANiCWYTAFAuma2ZprynRDtsBij7niuk1tRHTHaskC7V6Ptesguq8rcHqWajshCTUAgGXsbG",
  "key7": "4w9Vck5RCRQDEXzhELi46N6ndkzDTYe8f44jhr6Dhq5QGVd3WLd2ZcvqndNmkBkBTnNn9ko6G5cxNhDSZ6Bd8JES",
  "key8": "haXwK61X4ZqVAWzMHknJSNvL6SX5j6yL1Rng3MggYNnKJxQvvFFCvtRBqx9ZtdFcb3DqhmZEwnSoJj7G4sSKgAg",
  "key9": "55WtHuwqmpREyanxuNWRWoYeXBLNwPqcQFh9PVVnFvYtXgqR2xotP6qN4GScmoDFADsyrEUSTrV9BL3KnNS8fHf2",
  "key10": "2EZz3E6R4KNuZmVpzcCsELjm1pcMv3H6qbt5QK5kdNh1iPuK8zzbegLXSzhZQ2ETBJgqFgR2z8viTs6qTZ99MGSU",
  "key11": "2Xd1GKfx7RGEfqUqSrXnKNPPf9RyV3sQudAVRUBDzv7EAVpBFSDaBiJfayD4CKQoAWZZFcxdkmfBgKvAMfS2Tvfc",
  "key12": "Egy5TjadpdTgv4p3vMwUU9KvfL7vEYrgbxRqHvBesCiDJwrToYWTactWXi9dsevKS6ZmMrP8zWQA5dsWuSfAw7m",
  "key13": "4aCNCcPqHxi243upRTbQQLkZCPeTq2WWD9LP1yZReU3rWbYodSi2U72pEs1ygkD828W2rhFXL7zSYrFqoaAAGCeL",
  "key14": "fHx1TEGJPmgWwmk2Xof6EyCxrj4TytM5W9RE1LCYy3z4ZmYhbkLwFSDwoFAPGuKeEf1qcyTbFkc6cyCYof4ig1b",
  "key15": "3DTXKGdvB23GC31xkz8hXogeqS93aJYNp8p8yF5MXH9eLdbvofgEUUcgvRr1KWQdxZ4bWD7mwfqx7W15jfxk5KGW",
  "key16": "5VkX4Z9EVWnK6GpPS8Z1WpyqqRJkWJ19cfAPYQc2BAheT86yfr1Ga8jKRDa15751L52NcbKGysPBAzXXZU64SxZm",
  "key17": "m65di64jfVJxjZd4axKYowdwDDwaEMwvqn7J58a8P87Vxbf72yJagvCopffGSNU1R2NwZsC7XrUMvbhAUdttCUt",
  "key18": "3RWRxa21GUZuvyRcwVT5GMP3r1nasg9R2Capfa3FrMfEd7JeUd23PGRCLeqAJfHRwMMJoR7kVHnBprJYTqqfYuFg",
  "key19": "3KHpLDs3ACcryPSDeoE76q4xUoLp5XzBepdKw9b17U7xHJQaTDC49LF6zECMX9v8KTXTb9vsuh4HMLoVrzyKMH5m",
  "key20": "2JSL18c7kXSigS1uyaqmx67KWRFrvv4DAwHWVspuzXXAnocXvQ4Gm3k2hwNoq9YC7DEJqC1jkR7ATCiwqUh7a8RN",
  "key21": "3pCcY2Qao4SjBGTKRnuF3je34UrwfnoVbrfeFrbN8sbKCQ1kvuHSN3wTzNbeEM1mfYEcRedeSEQQN3kfMgxhJuVX",
  "key22": "4pBZMcbAsGbjgDczRMkC6paGCuPEfo3mQ4x59Ko5SrStioVZUWK4AvK92yw3ieVKxfMfYgBesrnT9ryKmbhB9AMf",
  "key23": "4nvKWBRGf3mTGtCcPp9JbArBwW2uga5U4motLoxh6scQxj2ChgmqsxJmToEUoSt1quNM1XeZ2Wiy9r9thtJrxcMS",
  "key24": "37nuS2veZFwGoKqB1RrhWe94oGZdaitJeDX8iVLZNC9UiJ3jSLkZjBxeUmredyByzjD83TTZc1YQRRMZBh7hB3TH",
  "key25": "4ngWvmACUrVFWL4CXQTEc8x7cGETeUXzDToAQbh4y1DLeTjSuJ6ZKr1ykdQbwB5CLHUK8eKxyW6UQ3SgqQy6HiVP",
  "key26": "5GFthwBNrv7zbACpMPtWCRC6Z2dyVQxesGtxTAdjbspVhMTNvsUoCnCExZSsRsz49JW8FdgVgWpzy5kPzjUNVX9a",
  "key27": "3zDUiRoBk7aVkdZEkJs2h2pA9FwFajfA7mkAcmfqmJ3JW8R6LV8quJHmd18BTQANMXf12tTRS4SW9TkmAikufJo2",
  "key28": "2jXitMkND6eE44cWh3ZPi7N5Gqc1z8Zd3cBM3C9xkiMrL3mBKUNfZnpLb5emN2A83ryYnbEt23ZiZboT6EyCb3zH",
  "key29": "3TCkw4rwMLfZssAsD7UrzjxWjrtEftUiUvyR84FKQNkTsExF3qiKwW5JbyEXR4QnQGzL2Q7d3NZr9fT8KjChCYum",
  "key30": "Tc52zrkpBVxnDLNgM2ruTNGkv26W2wQpEgJVJUSttBRgGKes1fNLdDgYL9cfdDHSxCsouMCBhjtpcfgYPh8w7sv",
  "key31": "5MpBS68whGsKmVmy2P6oikBJKHqvwBY6HyHauHJedtnGEYtJ6FYZBrkQ24Ld2Tu1y2dbr9uHopvoLoAvT6ucn7zC",
  "key32": "5eSvevwwRpVuTsC23nMcCpDAx6999JibijP8PPtUKk3sg5GPKz3ADfJ8yMV5QLWk7niuqecb1z6RPeoQ4grajWPR",
  "key33": "5js2qm7EHPZEwiqh7ZbFLhvfcJehinACXTRK7qXFPAmWBdsJSYZovXzjY1naJC5e1HvKCDbwS4HAqE9agBifZBfk",
  "key34": "4dsvg4FbYoVPeXut7v7wyTQynN72d1yNCstiqZUGcrmyCyjKvAhW85ADUUgVuGqRqBD9f4hG9Rt6k2hedugXCw6m",
  "key35": "y2UcnmnhQJYHm9JhvPa1Q5fh79qDpQFGhD1idU9FGJC3kAvh1apyzjSnwu4rfG1bwNCP77fjLBqnusNeffLwQpJ",
  "key36": "4QZkX2N4fsG6XUHPoDXmypuKax5qx5jRY86KXiLdVQ1MVATDutj6UX3hNnMxuZZxZnGCHwRW6jB2gbeyHC8WVTf1",
  "key37": "5wHiRW4fVJLYGCLvwEZnZ5jHk5zbWerMXfV9xrchd3yHDbXuFS75dSUNNQrL5Y1nEYTwBLg1dFrCEdbvYiz44rNf",
  "key38": "2unzZtMbFPwsXc2M8tDBdLyg1zWbZ3875ffCztcmsuELjxMaSNsGcxkPADLsWoDE8VLT99MdLoPf4g6sDKZHtfKW",
  "key39": "5iqrqj4VJvqdaqTzm7maYqb9ajkywJ4SFQDbUUa6qhfS1MNziCjAwGGmmJkTA9X5HzHauyfxqCT3hoqrcegfquc9",
  "key40": "rmZzM3QK5m7QN6knUPr95XxRESMesHmVrCuhN6WCE4m3zsvXyzKNFEL6Suu9JHFeidkhRZ2Ye2qiAjKASNmmiXo",
  "key41": "kEtGBtoM62B9Bc5EWpCeNut7PAC2wWkWSbFdnsyp8dfiiwsrp5r9eVqvbcSet5ivnK41m231YHF1A8L1UxBSpA3",
  "key42": "5tPtrQYcLafey7pnU4Te7wHkdX55Nze34pw655h7ohSxoaL4CzYpAbg75fh5nkz4FfZb1SP4S2ACzC3yQx4wfNWW",
  "key43": "4JphTz8e2aoFv9RjgabTMGN8fpNf9Ymkv1ZKAAZyNqRXzKqfYwMHVMRyo4ZHkTCNDppJCbQ9Zi43ehH5UGbAy4Aq",
  "key44": "61LkaUdKHBAAdCvKgxs4eVv8LCqWh41TR4oETCHkBtnv2tN8RokdfgeEqjUuYdj2deBtbzEdBGuNy2MFm7uL6j36",
  "key45": "sK62mB2ai7cTpBBVTpgNRnitEzLEToZrmGai5evqfH9ZU6f7PUUPy1H2xteW6Hr3D4m77JNYKpRrxWLj8iVadhb",
  "key46": "BBJBpyGF5rYVc8Haz5jkZGkPdX1yFmrc953eVPJcWumTd4dT32W7jyPVFpQfbt8wXYKPVvQ4psmpn3nBDpA17EC",
  "key47": "2sHFRL5FBTfLbH4oLxP9WqGp5rZGSjYkhSf92J1UwrPnsUqGw2hLMDAAZK3DGkMwvQZzxhy5grSktxrmEDRuKw9e",
  "key48": "39qNxhi78q1rj5hFoXqmuV6YM9VXyHTk4wZK6zX5jeqaXEptvfhFKcRvHDnyvHx1z5L3y2pAtZ41mcz7fxdtn1Bm"
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
