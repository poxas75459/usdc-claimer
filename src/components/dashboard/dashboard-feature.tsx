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
    "53xWnDWdZ1hasgKDtdyQXjQJwgjCoAgCHnxcqTxLmN4zrnTTJeiLbYeiWNmqztTgMcdhEjyuaUHT8PrjjStGhAmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23eisWEw7aUwb7axdG7rJTyQD9VFzLEaYqFDGHHFwVhqLNbfYskqzK4CzsqpsLXUuKfGFsAY7uZDzv87NncB7NrZ",
  "key1": "2TvXtH3gf6VmJauk8Npr8EhcVR82wv7ExDs8d2WHLr2ZoPhGBqunYiVA87ymC5kwMVLRnSSf9ejjteYbFaQW3RvG",
  "key2": "3sBhz91tKWFVtQhsQTY3TG3JgUWFnNHJFBaArWaBEKZtuLTqBNdm2aBymMqmaaFftEwHFZTDhCvNQFMBvzxuU3Yr",
  "key3": "2qWhu2kVPoRiMFCwfP1U23o5fwaZxBfBLVkj3M282PLH6H6PtysBS8Dx5zdHr9Xzg6aZ4p14AMXuAtXocbz1BNpz",
  "key4": "4bZrVNvpUNWgLkmxdxy9DjVDxgS8ANdCLrTnAh39YJn3krZTCdKyHMnTgRwpihfEZqyqM5zUWjxKtqqWyz8MNXEX",
  "key5": "4PdsXkLxLQxEsxTGfCMrDfVswGSEf8Afie18aTPLcPksL9skQaFVS4ckLQDz1SD2QB7tXAVV3JLM8hQcFV52ZZhW",
  "key6": "5oLwpEu96CwYTkb8hYrMxjBFk4yaRUedKbjQPtf1F3njs1zJpFqLowBnGJrsaRQAt1vk3ng6ZC7GQNBTBmAepj8j",
  "key7": "36CzsfbosaBp8sWFNrfopNAB3E23APWGYhZ4ekv7n3g7qsZQWLy1WoxjZrE64j7hqkkThyJG8JZtCm49NQY2NFqT",
  "key8": "42qz2s4d12wCEMFNRoUMcucH2MeMNEZuQu7mHUSDkG8x4pyASg7qKypbJXKsjU28YKBSbiasp2q7KM55bmisEzfo",
  "key9": "2bk5q6a54bog5Z1wgJwuANeKsduUD8FNVrpotyeNRsLPV8b9NBp8LzzQtJq497uwmDzb9uJH84m2iVcKnBoG3yDU",
  "key10": "QvH84uReLX4DHmwKwaY6Y9T3AA9BaaMWUPyYBnZXh9z1A7yUmXn6FW7V7SusUX9TkntRmFbbmCf2FnkfY3fjEiy",
  "key11": "4DRFhFQ7MiseVNSVTcCwoJrkoE2NBJibGHc63SZFXpZXbLJd1pYctTuRLGVXoBCsYDDmmUhhVpetaQpnxH4PoQqL",
  "key12": "4WGtzbvjT1VfPYRrB6ZWPSQotjsaNkpVnPEazp99ADLJk5cy9zpKNH4bGRxJt87hEJCKemwnb5V3f2kayzSci4rE",
  "key13": "o2XCbNRW884J4nFUBVrP4tPTqQuEtqnJ2XT4RoEnhcrTpFRQLaTabT63oSYh4f4N16LKPSTJxeGUH6uDdtWRzdQ",
  "key14": "4CZBjvuRAKexi2GpzJgMvjV7mkR5VfrKzKgTQkAfeP6zhr5FiWn3sVVZdrqUmFtBF4fD1ZM13oyKsHNWMs9ZBh1e",
  "key15": "4C4YFHKKQVenGo3J5WbgFjLpzvPktRN8REx82Z5K6TC8KeeSjSwsS6ddoDajyGYbT28ycXnd6iWQLSKhwxkcA7ee",
  "key16": "pufkWhZJvpTVpsN3YYTcWHu2J5B4qz15kCBBnEag7YMLKigte5ARGVYrdDDny6Ab3tnhJgAXwc569wRpSjhe2AU",
  "key17": "f1C4CM9GbMLY1yguNDZHwWkME3V6LjPGm837tFX7EtwEufFudjnue3XeptEFdP3mB82LAZPJcw9mFHpwAxYqo9u",
  "key18": "25VvEU1hTbFvPh8dLUcGBwQTDLC2op5G4WTa7oGaxDVLqu2RfG16SxzBXKYZaoqDza59nakd8BLzeWVmw2H7r1KJ",
  "key19": "5e2QEnCgX11GAkntToRLKQreuvQe79uHfbJpf3WwNGiCdbSXAiTD6D25SuRDiPvP4afgTmR9kxx5D8w8P9t2xsQt",
  "key20": "47asotQCcbXcfyNowVeoD1gwYC1GhvtaY21AfhPmibshQXrvE2NHxD3TGhdPagbyadhNHTrvGjQ1oyeDBofW6DDg",
  "key21": "4VE4YAgaGKXG71kC6HDcdsh32Vcutojcu5ZmnL8e5pVuS38vHXh7Sy3ULXhNsYPfuvAWRfYNV1sQhmb9Px4TmWB1",
  "key22": "3Y6pj5JLkfbuGEfE5YDM5kLHJvDaeqDe4oUkmTVdpMtmAGZrDnwKhVkJH2wzmUY4Xt8ZsBqsT5FQiYNsvAWzYfuD",
  "key23": "5nAGeSogUzP5QSPyi72ZuY73upmd5mCJ6engtZ9E7hsF5i7vgmDDhEdzaUnTGJsMPHJ9VwVbsAu24eJqC5bGnP5Z",
  "key24": "3a1juYUuJST9eeCVH6H1orahLbZYERGoLYaUaem4vjiw8XM7tzR6Nmw3mNyNUuS6sDhePmzUhDpSWfoqoNC2PGCm",
  "key25": "jsV4MjFCzA5CUk6i54HGLFsk7neWFNXDizirxoTCovcymY75hgZ8EGuEKh4kYxSkB8SeMSECzVdTaGMRF9xasV3",
  "key26": "4xXV8p3GfrrgZv5gPHgEGxh6Jj9NhCoUnc5tBEJ2hdxkhkXvwbXJVWoaLujCf1RyVWubQNZJzCbkJDBTjneWBW6d",
  "key27": "3wRnPh5GGszjNi4haBD8rUb9z9GR5f6sGvSsjUDisD4szxfDDWD4w53qAUZK7bspyjGKxRngM6F742qS3gqSVAet",
  "key28": "4aWN8nSpqC6eUJTE1F6DpJpcYQW1JUyzYLJxsB75iNtRjMVNeRMGiWgFZGwSsomoUWSD3xRwaMeLN9QeEHDESwHw",
  "key29": "5K27pvM6NvAjV2zPacZJhc8z8UJmwJaHHmMJhBqjbbn1X7AE7AVZfkwAmfZi9n1VSkmej9A5qHkCYZGCQLQrYXoL",
  "key30": "39MXbk2odL7ide33Cyg8sAkjjWpDHMMJhkTVmBCunStRjzAQiqi5yDTNQJm7JjoKKg5LZMQPvbTEt15q1f583maQ",
  "key31": "4nXJrRiR5yKoFfLAvERi3A274ts1nLYUUkH9qF7t64ZbpzyvFBcshJqwzt7kngM7EYE8KYrY6K8EV78JfxoAyKGD",
  "key32": "56rvw43FfGEuSCUtouZ26rKPnjwsrGZnuvKFy9ZJxuaPAPmcHxNVpgkp2FfnxtWwX8137VzyqiyCA9d3dfMYToEM",
  "key33": "SXJ9DohC261z8se3xeSijpZJqawVmVSTT8GxEbZjKcYKX4iDj3AT3bEMbm5dWkEnVoRvJ8gDK7qmyarrMrVVhwL",
  "key34": "2nYdknndxvLDg9bzQtrW9sVJyp7aWMnBbU3UnJeCKmPkPww1ButpaHzN7yeSZhGKXRnptHxXA7RwQzPY6cBncHRE",
  "key35": "49VduemVqUebGMzfMpPfL4p4DT8d2RRcuQiyWQpgxY2mVcMLeFw3pb1FFf8JFrduWou1t4QEQZMLBH7FQf5Ksi8Y",
  "key36": "5aVx3jur2E2pTsT5zVXSfzyh7zbQ6gBZw9cA2VbHqqViM6EG5S2wMbzafMBg5S9bUGeLgs9ZvDt41SJvs9Q6DytZ",
  "key37": "64AgsC2pZsdkKxzH6YT71jHRwvbnknzE9jEQC5mcCZPu7ZposfLdQtb4u7KqfbUKc2Hj47QbUeGVjfGGX8kBGVCx"
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
