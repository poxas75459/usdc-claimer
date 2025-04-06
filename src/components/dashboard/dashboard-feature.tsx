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
    "5MNRXNropK2AyyafGBLsXD6Hfk4YkXn2pZ69BF8SJ7HbuwgsWFZyGVh4ZdEbH59wc4EVjbn4SWK8VDeoCjRM136v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43gJXRfHwTaSA5nbe6x7nBo6y9CdMnkMSgnhhYNU86QvfE1RmufuTajb6e9jdqyi96MjquuUzL4bQXxP4eP8E3NU",
  "key1": "2nYPZSCM9xs7kcVn1KckSrGeX25saMhuB19gVH7YwhP8an7N3mxvNyijJEi6a4spZb1g5mfmDjQTcLjJfCxeJNvy",
  "key2": "3PDCYefR5w747dqso8gtEt9ZtJGwndxvx39LyCcKDedQwXQ71t7cpkSfsGEnDHxvdzXSVWBW25e51aXoCRVv6TyD",
  "key3": "i7yZtSRYu1n3UA4dyjhrZYNFpiweXMY71CHXfiESHmMXnapdCzEWRoWtvNXUu6FBhnopiwSxAqxv1Dv9sz3eCX6",
  "key4": "3K3tHu26s2qReZUKQK79YRPrKbutwc1ApAik6tLgpqJLKw3B8iZt9sY5p1NJWs2gLtLPn6VcJ2iZmhuUWc5Dj4W4",
  "key5": "39YzvyqGx1yGP8iDjJa8gMUxBnLJCAndBtW6LpFDD8KF1cycW1DQpF4WT4YnboHDxVF7CRxXuCxSX9ej4gL1iRyz",
  "key6": "3z3K7P7fRL5BRv26fLHRhVZ8dS5MEF8DdujX714po54gzmZHpBSMeCxc7nw8PcgUxWzx1PVLYSJikqHH2bsqcy8Q",
  "key7": "2o44goskA95xHjznmsokXYEFyiTL1aCVn5XQPTjyAhuJaMekPNcQ4Xm9AX3ewGV5qGwfnnoMF11cGvBaWndzfZzR",
  "key8": "29K3KJ9LY68goEdnrS2aMaNfseANB4XvyEz5giDnfZDtkCLbJmYV1sNgf2cWStYTUEDfzhKfdWzKB8PA7snwvvKs",
  "key9": "YHUjrMST4rVKtSDVtgRdhLPw77FqFqGruvCx5JYkZHSZoqpJZuoS2WDzFu2HwPk9rMVhu6fiBJsUfgAqYMetbEX",
  "key10": "4febDhWV6K3AjQtWS5gwNDsQ9kjq5zWFsg2KYDCUP1SQBkKAEVA446vCESZifar6p6jdKpdNe8xn89AsYqMBrExr",
  "key11": "4bDEdubXW5qfjpSiwTAzoE7MYbZqW4gRSdbXLLCB5W7Ri6cd8T95otcr7Cv2aFJLiDH1JDsFKhwS5QNhaoMv7Ksr",
  "key12": "4ydv6eYzKZoMvNQgsrQRcLL96brrotBu5cFsQasrDuGunffXnhDEjtUGHXEUYSdaEmF9GcUBFQ8qCJtxZKGrumm7",
  "key13": "4X3EeULq17aGC9B1roW3egoRd4iSpskXPSG2HdnqEaTK9kqRwdSrBnqxh61huhb7tZzmV13m35yhmUJf1zYBSwnh",
  "key14": "2rLCa4A7dfhkfXyN4SwnzsVM7yikD1nCLqdymnjfjqr3JebG7zig5rdRNPZFZmMwzeeZsuq5JAd2nFFLhuCjGZ8f",
  "key15": "4tWQqTXQ2hYqnWYmATfXQAC2KbYuBJnpaPJU3WG7sFrFhBw6g1teJVGqrTBZM5VVSD7wpomRwNAr9X4sf45DRWsy",
  "key16": "UWC7HGadsgLC6CSSy6r9SsYeNVE7Q539PJLHW88c6eGCcAcRYQ9jKpX9hr9j7VEsVF6GDVG1q9uAupJRfCP1XRm",
  "key17": "2MNUKFP3DeqLgGpLFVRndpx1gueaTng4K2rBnamtrTLRVVxCGSdNAiBpzwufSgCEPp7RxbnWTxioU7N7ikFXdZhf",
  "key18": "aDozdxdK96KzFaHiYsQ7z3UgCjy16iBiyZdzcazv6eGFSBMyPhQ759Gt6hziQ4PsM4SmTFf6JSnHX3sjvAhnFhz",
  "key19": "5SAQv9u49EA9hpugaLZgryzuqU4TChitppevMejSU29MBRo286uEes2eqSTuzStTJK7X2qfbWbkUJ1Wp95erXgMw",
  "key20": "NvDvewKGSPYSHnRBFaTnngrNf5kPFnpfXgCkLjZnRdeFb8FjE6y7RdRWA9FE5EciR1eBF9cWMygSC3QEUExeQtf",
  "key21": "5tHBFYSX8G2y4Z9HJqHhcdcyRJFwe5jyoWLYyqXAFSF61UPh3FoLb2CvU7UBPQ2m8qc9uurvmdjDFWuRvGkdQQ5e",
  "key22": "3Nnww9VtHjeBoEGCRh6h9EdJ9ukpVKqoi9gu8kZQo5xEz2gkeW9Wiz3VWpSgZ3PmXhrAGhz9Fnum2ZMfPBieAX8r",
  "key23": "qBk2Dk3cAnGxV6bZ1x7a4uM9LP1kgP6PztwaGi1JrsAowb1fFtQvq9uhFg1kCyiDoNTx7zWcGW1Zr7QXyQthKDv",
  "key24": "4G2dpwFWQ1pivJnGg2NdRpANrEuBehzGAqpCuw3n14iVDGSwmqHXuNsbktjvJ2KByN6JauJGzZm2peMLUWgPuJrz",
  "key25": "xKKhxzJKgkZib3pe4gYQGremh5k5wSQSFGWa3xBHgpqYzdr1JhzXuyK9VMNNFz8P4bMuEGxx8cbLVf2WmtF4e4d",
  "key26": "42okMyLPtnAVJBhSj9xJHsc4FvoRSQSLBf1ejTDFW7kiALdCGyXN7Q3Aq9iuwLJypxDjtiJPu5ZUrfH6iiUkTV4x",
  "key27": "4LA451QYU33AczBzKRgoG67PRpNd9L9JHSZwiTbDDmG3bU8JzPrtf6Zdo3fYCFxbxjcgKfJHki9iKYXk8z5882Gk",
  "key28": "3fsNNczS8beGGvAZcjs4gV6WBiSx6ZPS4wdaEoNZdn9LDyHRrqem88CuWzY83ordZTRa6957DoWfzqfzQ72j31qj",
  "key29": "u64o7iRwJ6jipg3qmwVyDvgtPqdnycR1adKCp4E5v9cpePh1CJsRjSDFGQSTJasRob5zYqiT5FnK6wvUww498NJ",
  "key30": "58MLUmGFeeKsLJJXqbrMz8m91H7jZKj1U7gSnCKAc5rNfoRnzgvPrnUCVTV5DD8vFKGXbgMZ5Fji4tKa8os7Egoz",
  "key31": "3zcT7mPVcESkYUyXzRHwsB9ZSfuH2dELFNUUFaoqTAJs9C8m92XkCRQnZgTaPKUw2qu3FagptsVLkAFJJqpzYDYo",
  "key32": "2HkWVmJuX7WxhCxYWW5ee1fonmmZbYWPkp6P8zWn2xw95H6nZkZrz5ynBrRzTttc8VKdmQunwmnv4RRnmxYWHju9"
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
