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
    "BmzZ1CUCRVaraWY9hbAeMdHt17FRMcMzBifX1NbjxBAbaBrdzfUktzYPLcMGcie3N9Abpgb57xLT1iF8VPDwgE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1EkZ7irXcFYsbAWrqF8BzG9v557GMitwuH7ZUNr8dNvV78BDLf5PMGNSSCLB1pr9jT1Lp7dyxLsBJHwwmDdBQnn",
  "key1": "2RN4UzsSiHQ8RqsVBvbnpJuJfxMSgJUgMqAHsJPDv3pVc2C7kKzXoznKPaquwHubGtx6rhRbfe5ksHo1DTW4TniM",
  "key2": "493jrH1Zz1ZmyWEDyL9JPJC4unD8R9PsW3c7ViGJZPZMbnqpBfxwqZKdogJcqfeK554j4D7vWvjZkxVqWeGtHZvv",
  "key3": "jCmkRcYqg2twHCHYLsZpBAzDfgvkWKyKQSR79LjLh7NJfLLCQQjqsXc2UfU3JeFcoVaD7vKN8LDGZer9fJPvQjS",
  "key4": "2yXCneUGeFLfJRSv3WPcwuMvSBJxtN8148pBEze37UkwshoLi9tSERVhzwYX2ytxKTM83NkKPBJdog3K5aFqcCSJ",
  "key5": "4cPPV37XdX7usqE3XehH42wzfvW1vA7Sgr45ZjjFS5f4JGNHbVwRFVd56Zz5vsK7wtBc6S2qmi3Djb51Zfia84cq",
  "key6": "3fXNQZ35gYWTTgiEyPHtCXsHB6eVTWnSFCcAQTQY4FcyQLwHhAtsTi9GzgfWKXmk1d6ycMTfFTAokbe7XMgoAuaM",
  "key7": "4X7BqQJZKrmoTH57V1taCaEAfZ4iV5rjZm6PcFcrFcENknTggtysJU27AMkDRJt5Z8DBLjY4VPKDcuBjZrduKW9P",
  "key8": "jT2LjT4yfK9RQpwhHw3CPy79GKEpwvuZsV4BUGYhtGvWKwcZJpmF6mQv92DZ2rzX8s74F4tQCbS32dLYzvMVD1Z",
  "key9": "5RVq4Ft8ZYWHMhBQ6zyCSnbTiRAbwnafA8QoSQPwwYog8VkUXdbgGjsxBaoiw1Yi9fbmwbMjnt9kKmAf1oyrb7KL",
  "key10": "tXefq7UqSg4eYxixeY9xeyV9cYs4PGqXYnUkYEqNaxxXxR7JJjKsZUYAb8j25G4teVco7rvxuzRPbBbqZppkXyx",
  "key11": "4yU6u2UMYWC9AcgjfRWEcCgxYqwkEtzNeoKQ5VSvLW7GBpb7pedcnN35te4mwRDMsrbXFMB2m97xCJqDnvwq8xR",
  "key12": "2VT8TTa9XGrsaN9QgoSCH3MvevP7Ab9FmS6qf9KFAs7zwcfZs36mHxr1TSLh4mSdunDXs1tffczJrKsPZ2iMCEih",
  "key13": "2DVeVvhFx6m1eqVHQtobuHcdJHoKo8EKXshjMjFSvJt9nmaXCTR8C2WDuujUwYAJUAp93cQaYXrYrPg1ZrNAtP7m",
  "key14": "2UbDkPo5pFndtAaN19azQea2MiCorhFnDz5droVZ7wyg8vNEsnw5TY1RTnMXx7SQ8gFBj2ioXTjKMLdk6KiZcsku",
  "key15": "coUKkbRC2wUaxhCCvgJvC8VhRJ3fMEQqJLvDPJ4yZQQLkwTprz9sdZH55ienFmebShcUSZszsCLGWb6quLQ5UWY",
  "key16": "47RfDpGvuV2kbzurAex67KntVjKSBdF8YZiwCuFh3Z5GeDGWg5vXnb32i83UeE1AH1eJeDfXtbj1fk6CgQpv5FJi",
  "key17": "3Qz22QAwqCNwCXrrSKtmN3YRMfazC3T524CgSg4t6sxPkqYzzg26VnZSpcXAEQCzoc9i2Tz8LSVtowLrfQ3g32oE",
  "key18": "riCotboZb4DrRpf9NaSMfpDtugmZaxVZCwwYUjD1YwdjMPDtiDYaLnDPm6yNxEWVxcnC38Ufzw3ap76kcB7To9Q",
  "key19": "4Ku18AuBvqUh5SiqNgdeJQRts2bZX522UfV4ywjzWeGRvwTo49y3sM5Xze8ARwtCmaPfvdNbEGXZWmtfsJ6AvuJf",
  "key20": "2sxNYm8CbYUENm1od2jRJAuPX8NwTjhMXCN5Qv8nHmTNadYzs8B6SVDzZ1sGVJWCxKDmTLzAiCZ1AE6BDdTh11mK",
  "key21": "389qRbYoonrevopGRNjdo3pMN8t3sZxKRzV8uh5wJPFsDzgCDDc7wmr32JFxwmSsZtDfjXBJcDmuDf7yfWBJdMab",
  "key22": "5Yr5wgUtRQc1NBsr9LDAuBTDSJEWXmX2tYVsediJ6sKCxK5KKvyvCjvFc1PyL5h7LHKwqkwXhYU17yAtBYUZSRoz",
  "key23": "2bQTbjunpqTFSktNpm8Xzs2bbWk3HmrDKNRsxpDA8U2RVndFJEro1rHKG2VhRJJXmwhDYY8qQzyJxFDxK8XTxsAp",
  "key24": "2Lxgwy87sof33MvuyEkjKiuAsTGUZq1saRaWnVNm3tyPfYaE2ShNHhi8a6okLz8HZod8RtR9ezhCQS3b8kMjCQtB",
  "key25": "2QSHEsM4XwqxEMJm7qvwqtMPZnYwJ7rY15RW2cA4gzBn4JSfE2hvnNt3612vbhnoN4nc5q2gEeNYnwaaJy4ias7z",
  "key26": "521eG8o8prACwBySauXDhSepBoCVatoTLJDNt2jXGdSofnmRCnuNDaSJtU22cMoDUmAszm6jFVzS7sVuFZUFAnjx",
  "key27": "4Z3QnM4yPnAPSi3vFck1LTKA9Zgz8H5vWbrzPGndVanMSgBP9XpdRGJsQojVvXJvD7WUF6obNpKNu34L9dyF5q9c",
  "key28": "5tnB2X3fyD1ZDnqi5obc4v1DqHo5XRYARfywzP8ccB9PpwUzxeKLKdBPmfUdBSi8AhueBT6tbxa7jdjvzpdbfH2m",
  "key29": "4k552ThBH5vyDGaRq2PMwDwz32hWrw2Sr9mHJqUNqyySE6LmKrYF7xNXdFwd6PdQt3ziwTZNbyjayie1kxFs5US",
  "key30": "RhNY25Q8kTHCZRpVJmpyorAXa5Ny47zB3GcGd7QYZewBnXw77XV3oUtik8jNjPe6aAiEiKHvqGUyZ7HvmRZoGHh",
  "key31": "25t3Er8Uxa5N5MoQqoE2P6ZqBQeJVT93e9CoKvCXaqUUmpCexGQZwrsqthCrRjjne43dYchDGNhNUY13QUJcCD7Y",
  "key32": "4oGYbEBdFPXBK5wooVkS2W53MHtbBAV1eb3QVfffcQj43BQGqSa1ZKww4peBzx1zm3q3VzdeewEMKdyaawqjxfTD",
  "key33": "qVJcpJLFEDdhN4gPTA9PUzfDrr3awanZUSRPUDu6GGwguiL4EBQxNXTYAgNWvD8wSZQQ8fVJtuau3BVMJTSMB9B",
  "key34": "25cZbWcFbVqqsmKixnP2fQ9TBJyhae65WjyogWaawq3cJS9svSjLZFj341FSTffoXBgSWR2EsRQ2VPQviNNmwsiw",
  "key35": "3KXxhxAcazq63mwWSC5U1JHdVSj8SRMsm76hXKS5HZMgqq4nPn9MhJi5HbMkU31s5VZiNqjjgXmhnGRjgXS5jMwh",
  "key36": "295pHQZhKrr1bTyQ9YHwUDv6FUaUhd1M8FnbWxaZ7SWNav79mbtW8HzzvwFyJQ2CVeGBf9z7iMheVUjf8ScZAF9n",
  "key37": "UVYwsPJ1i7UTT2R4gKoueqUicTnHby3jiB3fVdztRE9eEfDDVxQ16Nqco6ak4X3XFx2e1KkHUykD6VjjKjcJXN7",
  "key38": "65VgWGgJYpzoGBrR17EWjRurKZMzgJqWzkTBfN1upoKkgZ21ECVCnQXcsRCxT5NCF1jNfwV2bzfQMaP2wuLqseji"
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
