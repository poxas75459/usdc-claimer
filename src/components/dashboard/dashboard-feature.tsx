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
    "5PeFKW19pVXBmfzi2VDaV9EXuJNBFZSjhjN35VEjCurKd9e6nB8WnHNdKvrK4raUVafaqqdiWrkSLGENPfKEarDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a2EoTPVC7e8phdnhhNYPr1Mfkh8xr8zxwhLVnjuiNpa4GvAqJPMSheuKkuRSp92Zz8KsTFBDf2sUVrXa33DUrVw",
  "key1": "6hk9dEXNdE4Bz6nLNYHdTABRVjfYDRS6PeDdbDwwXz4NoFAm9PFS5yCYvhwbt4fG26i8xPD6tnvzH9WNXNLP9D5",
  "key2": "1b3N6FVwzy6Xzq5susBWjeCne5tSUFLYDnBnDLEtmtuPXwR5E4rCxSoLo6hSd2gXoTWXUqFyfrPCUNm6g9cCRKh",
  "key3": "5TNCDtKVxQSy7T42h4eTqSPDrF1ivvDm8P5QAjJMK27UuApuEsw1cZyh6kXb2uanwAPeB69QSNiLLJeH5PQHvJK7",
  "key4": "2wmBAaSXFvzLrMRbUKGgrV4AeiqZ3n8puZ3vo26x42QaqNf6QxZ3Xi2jQmBMC6QKt2CpRF3kfUUtxiyUhQiq6poe",
  "key5": "5cYhK2gG1oLofn2doURETBmvxdi2cqztbo9sLEeggzdXjoR5jABqDMeWXgZpYgLDE6Q2CRKmFtJLumQKJqvgrTH1",
  "key6": "2YJgqM5djNvME6FqtrEzmPuMVJEriuYqCGc2ZCeM3zda9dGi1xTnbLVM8zVr1uXh1Q2EA6b7abZtMBZXV16PTmJ1",
  "key7": "4mcBqCbQNd3eKZcQjzWZajaLNzbGBmwfq2qfGzA69nBkGdMtgWj4tY3grBjC2F2AmALkd6jfn9L6kVosyzGJE5t2",
  "key8": "3rz5rzt4s8thVeSq7oZFseq5RP49VG25P2HrK5MpEMh59eFYUsNmsTBJa6Zdr6S5Lw24wQxa7CAzW4aJS8UrGL8U",
  "key9": "5ZPapiu5JB5qxNberoxa72s253AAh2vXwJZm1Xu3uS1HKLge6A2iozKHfew5XEevA4pdvGrSFgey2k5qPWkmriqE",
  "key10": "4tJCSgxyf6eddUF2H6tyxJ962DuodREMBHQkjhvhfBf5Q3K1Bav3TDKYx6iZbqmuw9pNrchVwqEvmyQ5njCjmb2V",
  "key11": "2NqyL1TcPo9SRipJqUdNAYnFAarZZtFyTHPPdzkLGDwPtpjCcCea25rKtN9yJHNXDEaY1vSH1CMUfeWFfwj8G39Z",
  "key12": "4Y5SZFpHXmfyogQBPF4YeKAhSFxHu4zsGqMr4jDfXFGKxyZKX4rFJyYmijh21goNgnuNv8MN16VLSVAnBNm2yx6m",
  "key13": "2K1QhwVya3XVuEkkxbV3M9vXAFdh1ozKZBySLNFLbKQkSSuAS4hegWd5SAsYTE7NMmdj1Zbc6vxiUgbHdwZpV6rM",
  "key14": "5JSRWgGoVCj4evvscRLaBmfjePeHRqg6i8PCgTz8vX9tmi3hnCR4akvU4foPhzeFbBj4dVAjyNJEkqqHoP2nMhvd",
  "key15": "4dqy3ixFnT2kSXvA3PiUcfctBvzDaTLELMQ31evJoDedsvcvewgCUEzikzuRPHHUBPtb5HhtQArhqiJ92P8JzAZx",
  "key16": "4zo84FRivExWsCAhdHSU3nGVrXGwEdtnooj9pNcagfMyHmv8PTktLtqwMazSQfBNctQU9bYEZjrmh4zXsjEN7UiQ",
  "key17": "5fsrUcsvs8w962hE18a36SVLJHWd873xb7CnhPmfzeyBtQgdXDB4QPjvHTUyuBPeMYrhM2S5iN7PHd6h1v7uhT24",
  "key18": "sNk1jAviRUGvyBKcJdkHgwP7L5EvQzRw4TgXaex2RpfXxKH263uY8oVeV5hcTQWAVo4okDpnB7zykUsHbfjFu8Q",
  "key19": "R4Lg5H4SvmhcmF5MbhqFJxMKARW7XUFLQWk7BvUUjeaM5NpaxWHCopoBmJTnrMNYyomPLFDfYV6i8BSoeKRE2fq",
  "key20": "jfRZ5mnmj3kd66sUH1DjPUDyKFQA8kJB5UHhV2Uoxva8ETz7ESt7Vhs62y5D2TTjobxg17j2wfSQMuANbffESpH",
  "key21": "3iqmgkAmF82HoChutoCnnf5MqufiRzd8qBEkSJiJpjP9GrrScv8d9zryUekTXwgMqLQCnf7fSLYkUavqLYh6MVNk",
  "key22": "5pyoCd7Y3WcYk6S1EHK6bWoWQhBcotc1ZQ1NAXrwpSh5eRKjcRriSEkCGnFxWoEWwjx2Ka3ygqRW11aCZg3ith8t",
  "key23": "2AnjPuY3zsrfQM7Jc9NKbnUp5KkqQVf6AUsMPixaSEkqvM4Dt6y9BHyYFhkZdQug1ZDwrLxMDnAJbsXz8GWpfvqi",
  "key24": "5QuGoMDK9yduwrtVnA7Wgs2rUkYcoNznqKAKWPHhDPFBwMpvRaDzFc5EvAsggknvhqpJrY8zvhbd9bcMsNrNrno",
  "key25": "2dXfM7ramofUe5oyZ7zm4j9z8hnhxhPTPMdJWR2wL5U8rESe1UdJLpdzi4GRbUXkEdf5BDGBBhemr3YMc2i2B94q",
  "key26": "3jVokTNxVYGy895ZCeAtYzTY23YTDj62qRu3LF6xrFPVKT1nr4EfiRGb9DNRyE7Rh5biJhLhMV19x8PGZ5pr4q3V",
  "key27": "2DafLzBXN1KboEy3QYS3KKu7zCX5sxmPNd8EqgzamLYpNa9LrRBVohjLdm5e4fWs71X6bJVBgvVrKv4PSfnCEpSg",
  "key28": "4SgWrYPphyjDFAYRJEecZzVZMDeNA9rotqyRHv4e8yvdJAeNr7jr97LkCt4kbSDZ12fcdccNE7xfubFgnHQ2T1MF",
  "key29": "5T7X2bqLfosP8N5hnCfHNuKpanwD6miUkTHBRnk3GcFxqxq74SXD2kyKk6RWzbB7SgmU4LEAbzSZuiDXK14rHB1s",
  "key30": "5mck916MZLkfFv8vjD7tZi7HcTzRuc5vLM6wGhRcHDN1JAp1oR67rtvxitUjoXJRafNfMERsAi6AJa8SAEmeLT51",
  "key31": "4nXvQzXxfkhePXaP8wpaMqnBL8VxrxnwttzWPFEyBGfrrAMvNz8ubnm1KJjVRcPATRuo6wBpYtJmM5PyeLhcFKL6",
  "key32": "2yo8SwdGoJ1ZhwjXyVJL3kyPkXgfW1x1dv39c11o1Ddpx1AmZyqTh6zp84VV2NszxbUnCT5NRE6hzhsgt7TiBG6x",
  "key33": "5dwzuKVUxxbctNEWQf477hGkC1YkeGsEoWeKjDvfh4q2emY4ZtMRdVDKzHB8fbWXefW2YYgzHk5ei4wmrQtGHhg4",
  "key34": "51h84JKwKK66vdrsH8feF6ae4ysmMCYL8MA93rjhmvyJwGTwbL5t89Nhg2urN5B6d48Vnu143rFNKwufJMPBJZm7",
  "key35": "ey2xukuo3ashDwGXf1zNzYhwBUTbcdWCaqFnMh8Le9DFSBS9viGmydcdwu29ePpL8xGssEGqHMKHqeDgYpFQUKt",
  "key36": "3D9nuK4N2mVJFXU7RWf4uoJFzS4pER1khyX99LrqBirKEgcY44Urge45HLfEnjMTZKj1xcfgzV2bYcH7VEiZW7CE",
  "key37": "3m6DtKyxbuNubzbrKofMGBQWuLCQRSmLrfh5ErThKvDYUHkNG6AoiWNfQfRfFUSrR9Z2CAq51cH6wUHzaefqx5cL",
  "key38": "3wn2jp7xS4fYQ69Jtr6QFR2pkbuaoRcEgRMoUqFwzT4you5BWbBwGFz7NMYQ32cGneN47JV5TkKd5UcDYEq3ZpVA",
  "key39": "5sPbqEmj5uUvDopWth58UMT9RKWBBUgdMrxETjSwoLV9steucSPNzpd763fjz9yjTqKYwdgSiAR2HkcQYn4N5P1s",
  "key40": "5hf6WTEhWB3isa3GxbgisDEnB4qKNay3bH1ZzHR6zQsXwViJdXPfgVEvbz2oTXMe9nJ6P42AgNNobhe6hNNfGT6V",
  "key41": "onBdHNDftDYQyhWSqxfWRTwCVGD2S1oiGKvc6uPt8YSQCT8VAwbZQVDznePXBXXtksjsafKyvZoQY9eZUxTwvmT",
  "key42": "smha1vDwgofRbD3kFNXgVJpWBeXWXiDCENWfarhK9atcnXFBUNSct81dXv7ifCARr5Y9eAHFvaKmG3SPBpXwbze"
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
