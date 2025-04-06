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
    "3Pd2CdHMentSucHuWthp8wikcJQ9qp2Nj2gGR9P3kSPWGE4uqCuTig8NHRG6d71VBqPHYt8h1wrTn4x4xjbL9W3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jBotMnKskRsFvEF7i9GdTyk7j6AK9DQqwNTA72dw8RyTMb94aeNo1Cnmv7zhkvQjamSWJrnUTRmugXyiJHTpHeR",
  "key1": "5maxUZdb6uwcGqnj6mdTbucUNWwEHBMMz6fwvtixWn8YnV327U5HBcEdMf9DTR6v6JqmLhYJncKsBPNg6mryxCB8",
  "key2": "39iSsX9X5TQHAwMp8uZ5EKxui4zL39hL7bqJUXosJDvFzUyG8Z9uvE2oxHmdZB1jbDvx4kQnfK8Bcrwvrw3sitpM",
  "key3": "4pYxRsbLwtde2LT6yt93ZXkyJfPDfyPyKUjwStKSwGEKUXgttmNB1f3mkSpczohTYaJweVUhANYfog5AsLLa24Hh",
  "key4": "5g2D84XR1kfank6Wd3G978JLonX8zVdjrZkf7RGYPFfaqfASFMnR7c1e8kQL4tKmGLt6Lh2U7rUxhLZroVUohaKr",
  "key5": "4YJZxS9Ry4rqKTQcJV7eNzgzx6XKh4mWQAxNB9CtiS3NUCnnyuhXeXSV5RtK3jG1ZqWJQk5jpfsDKVUVAB9sRKg5",
  "key6": "5HgYsxiUT1h8MCBWi9CXRetApSjFL8F4pCVnSrgmGX6wWJ2DDRMbHkDnPZuvwDA47YyZ9GU93rDAo5um6Rt9VDYx",
  "key7": "sMuxJwK9sMZkGfQHHNZBexYAex35pGAoPTXqKRMFVJmTPjjosoam7wMceE8qpMmCsgnMGDryDnMncnTuHQvnUVR",
  "key8": "5GgGxvaSh5nBZM51GNoEG8yiZooHoZW3QnjL44JhQmacgfwmGoxYyzHZiES5JNXe9K8sw77YUmRPveEEfsnbLN4k",
  "key9": "2FA9iWvGs34c18zSiHh7SCbsjcvmXN99HtmRWY3UW29tSQYFgnAKZru2WC6Kb9MY4JgZoBT1MbmDShQkxqFs7U4L",
  "key10": "67DCeF6fUVUAgJ2c8525YA2LQj3BjDgaM6dT3DxyEQ91tBcLWKLEy8jPDD73WSnzZN1H5mfak99CPTRd1CiZmp11",
  "key11": "3sNRU1NH76fci1qQn2pTwhkCmnpfJp6vQ7aNynv9H3n2iL7V9P3jNkxGaz6bHf9nDVoAjytdUNj6or1w6A98Zw1D",
  "key12": "3UxvFnuNJTbEe6s8ZPfsdvZExvYR7wsyf8HLrTCDxkW3eQvppjQn7ok4Wa2y9Scv7q4PaDntvoz1BuQnqT15p8CQ",
  "key13": "2C2KruVFUrVN1Yt9goZkGQiwr9SEy3Frc7ejB9TSs7FBRKAU84eqgfx1bkfKdTbeAbYvbpD8SiRyAbWvZRDStLZb",
  "key14": "5QtqAYJcZB46abViTaqYEqcsqQALUeEXUEyLd1LJj1Z7KYyEg4cvGUVdr7yWKktsG8DFqy1PEFKdGWQBJoeJDjie",
  "key15": "4CtgdD7MzmhRMiFe12PUnarBa3c1vNbCK8cAV5Z9ZrVsjiprH1hLkunkqAHeYNuLanPrgtesg2NcH35ygG62zPc",
  "key16": "5p2a5LgnktaocFzUNxNvDAnx8K2ugpFGLB2Mwtg31XRPwbCUmPX2dYa9zWrmS5FHy9g9zGZT8Tjt61kkpJ5tHa2K",
  "key17": "51BZmBp63qd5WtC6gVVdBmTQvATvNrUKmFfVHeVrFs6DXQ4Ac1tJcA86dC6k1iPqwUZXkadPJiDnghjpAzR8X4N4",
  "key18": "LVvb33xRmXduuBE3SLvR2UZZNKJNVnZuwtXxAng7q1ZRs1F13ktM9aaXwkU6oFv1zEUJBA7UwRabTsXLAZ4XBa2",
  "key19": "5VGweHXbwbbf5V7ZNC29b41PesHy1CUVxEVw7TFbEZHhB7VudF9UXkGdoWpQTEmuqGYEJQMuTbE5ZW8faCgi57WA",
  "key20": "3UvkpxGQpJmVZBBVxfPqcuDzLpWFqQsfm2Eqd8KyYYpC7eUz5xdgSwh4TiT2q4TcdBSgocgGgt5NfWmYZQ1KKfWT",
  "key21": "55SQRofoLGBHGhpgQNFrqE6b4q1hhoaACYdnKfqUrDVFgX5e6uHuhtwp4qANz4o2CGefSZh5rsPBsPiqD8NDscw",
  "key22": "3tneuZMHAjBDCDnrJDwVgBoVdyks6ah9VEKp3W2yw4683FPY6k32gvSq9dQsvQNkoJ7bjqTpbDjdsj4uH9JyZkPE",
  "key23": "3YmZsrE7LQuUzqDu8Ks4Dh1WGcnVkYAAXTZbTrU6Eid77zYNqRHgwsutAg61X5SCMnYfx5sZJ2peM4xzy2D4kMVV",
  "key24": "4aannFuq5U72FMkvS9Gb4Di2Zg6wtkESUHtJTs4v4FUjQERHNpDcDqqNNHiR8SiTDmGmbvLo6B3mtRPDwnwhzM6U",
  "key25": "51gWD2BzexHFRsfWGBtjU4ZMe4nySDSu3XNwYwCnXTUQeNMVbN7bTfKgvgmDNeJGjNxCgYhPDCEGhRcYKDSMHJhC",
  "key26": "Rg7g9FM6czWC8NEmgGxRidacpRcUQyfoGoQ25axtd7Ktu796vZeum5C68HubQu6BaDiTAfN6fjjhR9M5bzHzd3z",
  "key27": "2Fp8A8GobL5XjYVXoXxv1bLEXg4HJaDwe7oqZV4c1HdNKPVQhk6yjYAfJs2uLqA3ads3uF3PBgadkB6pQs9GqP5d",
  "key28": "2jN6EQC6NuDFDyA2DFZ9EAd2Yijh8Pxp58RckLicRS7zMXs4ziwfUpJTRNAYNxRu8gDF4d1pEYKiMzY4V5gpxUpf",
  "key29": "5qNSoEqvBxc8qdhea9FenMUvGeztM8iiJPTM8h8tCyebiZKmW9ukJveSbAVDmbtNZzcMH3Q44N74NVxdDuKcNz6J",
  "key30": "3Q8cMVhxsi66iWcfsfzBNN8WfFiX895k1CaFVuKECcoWrwvKESbeE35FLmPcfnygaMuzRfULchgr4pLeDAaEpeDc",
  "key31": "22L5uhsXvbUmad9JrTEyydhT6kzLbgcu4Qu1FfS46qTBcRbS2gFecHg5HRYxmZd2rW5EuxuxApgiDE2RZNgakS3t",
  "key32": "3oDokqzBXaxDFdkhQ1Tg9y9gNJm9UzyGxvi2u3VcfpmAtHPiGuQg2T6NAK1UjYna29sPydmAgmzhdfAHnSBQYBv",
  "key33": "5qoSE7iLWn3muDqgsZuz1k2juCks9e1N6didnGy4FD5kMenS84R5khgxSBDc1xd8GKaeK3HJPXzGbSq3W66aRVec",
  "key34": "2KyPiyD2QZKJ92WXSa6ckJn6AWwcaureVbBBzXh8LoXsV3xX8jix9j549RwZkewtgSF3F48BnwK9GAYtQA2ybJGP",
  "key35": "49QqQRD5ZBgoWurNSUrYsLgadjixNZT7PnvHQLi6i41b82sioDu65xgJBAMVuC7DpWhR4wjjznhcSQdwWzGsVu22",
  "key36": "5mZ74XXgzh33G8qior3f3Uy4YPNXnyr969Vhmau6CnLeqci4GULeDWmr7mmqGqf1X2xcuFBgnexybEr93mF5jrqF",
  "key37": "Faj6PfVc7Hfw977HrW9sBHzM92MssHpX1f9NftRBLQa3AuBUGPXfiC4pC2W7CGaNi1mf3wdHz6HVA9Jpz39UHZP",
  "key38": "5SqZaV5pSHTRPYovapWod8CnMJoXcFWpesyoAwqeT1UTQa63TuH791qDhjCVhB5MjcjQjpJ6yGqkKFgfBiJZM8p6",
  "key39": "4W1v39nSBiMPdNjS9CL7f9hMRx9wfYVNungsbQMhdTyJ3xjPH97fv29QyukCfLRkimq2RnpqzPdM51uSLCenEvEK",
  "key40": "64Evd6F4xku5nZr8Ke9wKHRuW2hgsv5c5fg3wGGjAWfTtJUszfU1eu7bfSpDyCPC52chvVVs7fFkDm4y5aCH2gHy"
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
