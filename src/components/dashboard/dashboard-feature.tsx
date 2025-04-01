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
    "5LxQe7eioThPmp8eB9kkF4jroRBcjXMz4cH13ZvRiCX24ZkzMNJX14GCETeCWiEZpixD48QnBY5Hj3jn5CAG7t42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wdimjccpLQSq62nVnH8ECRZn3dzdWcoqvxGDeayo5tXg2oif6ZPqzxQmkmEd763o8f7rJGdv3AreiziTdCARA9e",
  "key1": "5cJMv9p9m2uNthNQPCRnVa8saE2baVcwU1MYzzc9hPksvYxYnnRfVNjzrz9f3arFsF79p2mFLfZdWCieYNQYt5qA",
  "key2": "3pHgqzuzEPpKUeakkwnHmBHkjaRcB5aqTaFhDAC4aTSseVPt9NWHpstQo43s3cV2KtrX1P9F2VUwbD5vxNs6FB49",
  "key3": "4NXb9pqaCwYfBNjZVuYYNSokDVwpxbLXf2pPPSqwBSWWt4MZx2SgeYzh6z8Y178z81G5VLNSjeQMyxGm6sw3TLAS",
  "key4": "2bQjWwgebinmHL8zbKvgBdMjJUaquKPeEGRersZzbgDQa5Tz1ZaiENsJvhmL7gom9M7oQyubCLxVXVFDuvEVCN4P",
  "key5": "x3SoQ5CLupzLUDzBnyPHUmEGayW4T26f5Ykyta4o1LgJEpzhyq7n4pDXLL6Wn1MMkpmbQmpfCeWPuSmmKSY5D7t",
  "key6": "28sq2vXysT5QmTtDc8yrPmfYN5LXyqnF91A9CNqeYqfeesxBmy8W8SC2fnvoTad3voYt67KDChp44Zsb1Ptcqjsd",
  "key7": "5DGspzf4XpzkoRWDkJqm8JkVxhWt8i8JoSY1cQZL6GUzJ8zDhXpvpfdvZTXb4akAHZUqwq4oKjKBaRbASewGvbum",
  "key8": "DuawZq1DvdSRQrkesatZDi3F4Nv4qUd5x7AuZhUszPx4p7aV755RYKrY7KqM7BuggdZiTkT5Nby3Q8T6Vgb5NS9",
  "key9": "cZNbZgP3kx5QbcLpA8bSSLGzMizYXGsj9x2vB8h8PJQTtoU12fjNgxw6FbH4mKq2tf1EdtKmMH8dzpQzKLi4j2v",
  "key10": "3GCj5VqnoaM32bn6YN83ouzgRQhbfZyoLWC5okA1EaMfbLxYYikBaUcwJf7YPpsQNE1rbWuYGXzefkp8n3WrzSx2",
  "key11": "5Cd2PEx2Nd9oWFtJrH2a6er9H6mkhTXx1Vb4cP9JZzsGtmjNJdvyCQZF6vMRG3tvQ37YnYhQU1DLkGK27aguDddj",
  "key12": "v99cLkJFzhHb3t8e77PzmeiVJ4bcHVnkYHVy8s6tKF6tB1M2768QLDaXQeQH4uHkPe759e8sBMNyH2WrfQKrwTn",
  "key13": "51m99DAYZddBwJoUyz8Lf6kyj4ykXRRjiKiT1khsuLQS8NKEjHLuVoecMXnd5uFvcGUP96pEHHeUUFHpVAC4eo9w",
  "key14": "2VbowjvmGa8mkRFrAuksufPPJQSeuMkUTkEzMKAZUX3R5qq55XNku5gWXfxtJUxMAwGtwYR4SLaznmaixsHUWEb",
  "key15": "53J5cVjXzNRpaZDzdFyx3Ji5SxSfDg3ut9g6BDWz9FK1TQRfC6zmfwBYUVHYksnBwz1jbCmdK9Cy1dq8VTmAYAR2",
  "key16": "3DKtmme6VGrrMQyDb5JzQ1xLadkG7bh68JPimJLqEDkRrAhy5HCBEmGfQioDzL7DPgi92womSxyEMo1tk8FcJLBJ",
  "key17": "311wnFQTcpcSyCHwyRt4TyGG3DKTctJqEAF2a5ecNihhbTQjof745UwWf62qmccWPaeZxYy4Rv4pN8AUw7m42LyN",
  "key18": "3XrHun7QjdZhNivdBDYMBsxsGjNTmKd7kcz2gmDqxJTs34yWpCTAe4HR2vR6dHg4LfWMqKwLYu8kCz13pds3zRAt",
  "key19": "RSG45jXLJUNiFdj9M4tR51CPAC2sKkeQRjWv8zDwQ4Rgprvnux6KfHYY5hPR4bLPGXP1oCLM4tcuTSUcWmUwsbg",
  "key20": "66972WwYVmopv1dVS2YTCVJHSduRCV7zZ1AZnJbZuHLQ34kv9yAqN6imdWoUTwDvFi9xKBjQnxCb2UXeEmPYzTmk",
  "key21": "5unL2Rokm9yWd2rcry9YQsPAvWKUuh4XFFQ4qCutx3rw18TCJGB3s916HxfLmEucVseXipu6ZTE99DNfeWPgTXsy",
  "key22": "4hUwxcWXS9gTdHDhPo3dhLMvVr99ZooMWLENWhTsMhH41tdGf15nu39HCcrkB7sinwLW9MoVv1bmKdMwCk3hEdwb",
  "key23": "2A1ciKuSqpEKq9WY19vRnWsvzoC6ndHv9whFSVBcBgMS8kLowZUs6LPRJuHLBFJswzXqWg65FCZ4i15QsArciszK",
  "key24": "DLEEnPA27vrh4gCsLCMX41REaMFxZPERKtSSP3LTGLHnHFwexNgcAKskFDPYy9wTDkgJwYr9mHt4L9HcQYWMEQV",
  "key25": "CdjhFHGYMRe5WrGRnVQrLLk2hPRWDzibaKDre4xQYRGMaKBoM82s9XpLjUTt5fz5BV4oNZb3WnUTZfn2HKGSn7v",
  "key26": "5Q9UVGaiNsQwRbFhiDinn9gX2AAKUVtwwoQcLYzD3BAjScJv1uAXJtFNR2STS3YYBcN5NfbjNTvXaPnESLN43oUF",
  "key27": "3k47UWZRJrFhuy4MyxjuqsZDLpEi119jEP3YvHA9KVh5emNkCs3XCV2n7kSeJNM3U688AKGFgtuYTnedUNWntLgj",
  "key28": "5XDzYfFuwGZByG185WokpeHm3kmttQfUhME8QL9uk3fMpV4me9WXpUpK1VU3EKpM6DVCd2g2mbMF6Pr4AHqxEPKX",
  "key29": "zDLCCZJ1Hgtyn1AA95UCtJSgQpXxBkYguqsQv82ZvSkN3uuUeJLdkYp6PamaMwh8mAAuwNVQcgB2BEDU1akUDnK",
  "key30": "4Hh13MpZEoV8T6Br8jykME7uDxTZj8rwhsLbnzqLSW6A4wF5PWU7A8q4cwT3UejzgpXcuq46r7aXoHHcHSZHZz9q"
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
