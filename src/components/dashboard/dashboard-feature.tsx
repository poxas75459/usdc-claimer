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
    "5H1a5jKDEgJkhvgzApKJgmFEYdSj7qNrKzQYJTBy6X3NkjV4PfiU1czCC9Y641p9iH3fs5T9pN5BUKzXbaLyZHmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xsh7Jya3nhDYFwCyxtjXbZHNMsHQ7mJE2cxfh4qjpe428fZ5sc6pF4bJJHkVzo1DhD3iYiVho49ar8niQ6kvmvj",
  "key1": "3ui61KjyqJHgxJDzJGZZSX8EH3uidB6SemUwbbRpvUcyiar6KYLTwnVEdimdwUzv6DYeus1XPbA378NUgdLYxGJv",
  "key2": "43yC9Q3G5knMaJkcQfkMDcihKNr5G6CgoUbexZDnvrU3wxax2ACtpmwsUFCb17Nvxpuz9L6aGV11XoUT55Ck5xZQ",
  "key3": "3FeunksXEa7yDCvzxiQDLqYhH5vjHannzbxiwVyjRZZrPgK59GcZ5Ryc6vv41YsFqYAAbtQG12qebYVHgReKAn3P",
  "key4": "3MTyTait5RR3kLsEhLo73HjDQ56hpgKge5AmJUo46gxgHw7rTFn9PmzW8JTkoEh5NxAipnUEoxGEtTaKTKCohmMU",
  "key5": "2uj8CjdvB8NsnSkBjB5HcL921c7tNfpsrE8SpWez2ZgEEmrwfRvj1Vpkimqb2mpucXVLgtbauWBGJXgYRTXRovVw",
  "key6": "5KWvYaiHMaa2XxtQVBDNo94mdtX9bai7ifUUfusv5K3S82W8nj6pCAVK6uJghGeGXS3nogvacaDdgQ8vij3SjBTZ",
  "key7": "4cEpUNosG1GWUnqoSfWr7K1m4wPTT6rpmAkpuKtPxeufGydAXqZhPoLGworig9erjG8TBfSebYEafxVaZ4tqMUuL",
  "key8": "52KXC7KCTgbhpXXJeoacaKFQ4Gv3ogoCK7sackgrgMUJRPGDuXRPNVVsabWk4zEDGeQR12Ckwhip4s9ZidQ2p4aD",
  "key9": "37FQKxhY4vS7U35oFdRjBdyU3K3uHEspht9jCKsJeNkQgenN4PTSUmj1bcEWb9ji3VXnYuDLJzCZAvSzfpsqknkA",
  "key10": "3AN7eRptidhXzo2VcuwZL1ePjWXYqrMkieKkNukYAn5jnEANSLMYXDHduyGfUQfXZkuYyMqseaYvCZi92msEpv2o",
  "key11": "8JQLfBH1jZMYkfNDJcW5vgCNC2r2vcYd3TdLaWJHoJ6N9GN7MgL8CzgYaGbb6ybAspvyHiXhjXiUax7ZergyPEb",
  "key12": "4XnU5NisTGLyMXhu3H5gEL1vZWjr2xX1aUxbFeoiKfM5QouWHMS4qXAdw3mb8nvyUjUEYyDL1xdbVrwJCj9Txva7",
  "key13": "2UxyUcKQrSCCKDDRHsq12iRq4ST3VzkXdJQCFVLRyCZFo8N1uYqiFUKa1gF33qm5f2KKnPqZAvUAjBxgPwwNxjNg",
  "key14": "3pgTJTbZWqHWRDgxGjLi754LkeeR7XiGQzRCuBvQeaji4zSXcK19A62BzqibPqdZUVP4yLW7E5tfGMUoWMptXTDE",
  "key15": "4u92SuFUhLAUyrQCt92wWeEma9n4kuUfE7C1kUkpVtchxVs1918jPWKamAypqda3LZXmU7sLKyLoM2dMqc5DiPrk",
  "key16": "5ZrEj7TgUnAutL81vr7UVx5QwFef2AYUzs8qbrGJeYfJDk2SjVfPAwUAxrjJkyXqgqghC4ghSTt8H52a8qSubbi6",
  "key17": "5sT2YcwaiBBWNheUBUpYJqMQbvZpga65mA8tL7YJUtcnyY3Rh6fiLvfwkmFj6ZuRQccYA7Nxn5bx8hh3i8KLbmVT",
  "key18": "2xeM5QMhQfQSY3W5sszmaqUESdG8CDfsjqRTqnJMezHP65VKeQ5tgq3HrxgqPYNuNPWrZyVDjFS89mztC2SxQyPy",
  "key19": "2zYgUDGtZa3yNP4mWJshgt1eEPhKZ9FFZPPL1Bpa3r1K8KJvpvkYpUyuSoaA119ThzAdLT4pEs4bL7syGer8oqqP",
  "key20": "4GjoZqAwgsRiC33ThHhUn6BAUCz3TZ86ydXV6mo7KbH8AQvWHqtAnLt94gNNfGC4Lqop6Jp57QsXgR7K4EDEHDGy",
  "key21": "2kwGrkBrS46Co2uNUEWvmQPS1bxvMEJJ1THmYtJDMjYDEnBSnyA8gKxvHfKHLp6z4sufLRbTtMnM7jPRCBVx8QW2",
  "key22": "4PTAwZugUMnqfNMV8FwuFVo5erAaW4hp5itnNY4phYE6g7SCxKS8NEEo6qGqvHX8E8QWP9D5fwp9hfV4AqeX25yi",
  "key23": "NHxT5EYdwdpE9RhK7gwvA2b2JmyPQWKbbtNioNbZ5yiFbbzSmc46pbqNJKGALYFciWyPKXkjUfGqtG3cjYFs4r8",
  "key24": "5YDa6rdpJyPo8ndL315HWwAYio9DDuCD2VnLXbwLjnqcmHpjp6V41BNv2xrVTiJKKrikptcUbZSKU8tp5DwdgeHY",
  "key25": "DACHCjAqPb7idRwWHsKKSQXnKk9odCp5c4C18SSUfwLWbtHHXwRAw7ENc9SDe7vxiwxGPpirNGLnrMf66EXnr7j",
  "key26": "UJg7rWUg7DwcSXq2T7EZgFSyhiFhFDqNX2fdQd9ZPAcDpbhEt4PAPvQH9EmaX7Lj17xVgjRLhhDFrBDKQYYFtWL"
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
