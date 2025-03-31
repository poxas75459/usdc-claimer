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
    "5sTcboW1SxN67Bvbmxk5bKzRoru8UTYMLGVLyY3F7XQnjxr4Vaj1KKD4RNqr6HYEprqdKqAPxmWeFUBN8tG5ovJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RhoPpm1aLZ4cZ6Db6totUwoqbq7LKVq9d3pDPJ8yR547HW4JNAsijb9aLvK8aLe52rcpJPLqaQir78kjUcEg3ZK",
  "key1": "4iTqEv2DTtdPxKqioq5EwbpTLdmT1zP9TaWvFjsri6kDJPSpLwc4H2MUjjvtCKLGqEvXkSFnr1FzJjVFtwroZ61m",
  "key2": "dtRthJEfvVPKie4RQzsRK6BoMjoewqkzaq86zwJpPSPgR2A92yeF7hL6oyDXEWWuukJ2BM6GorY7eojotvc1DBT",
  "key3": "mk1BRo2GabgeFij72WhMkXtHHW8imTDLsmS6f5xhAAuydHUUmGXPMnsFZtBBqsTMEwwM6Hp1WeCp84bJPr8KkNS",
  "key4": "nwQqSnGeiocZHo1z9tNHBapsGDfvW5V8HniSvn8g4hBrfYcMKahEpLRteznHyBPNwhDnsTGfp8kCBzQbRKDyLkY",
  "key5": "3wLcXDnmDCzLnvVywtWD7mVHuuJ4c4ewaD8FsBS3f2Bc3CyqXAcKBq51Y9ihnHXmK9j5i4LA9siMMd5dAFd2eHfk",
  "key6": "4DDbSai7cCJNXozfDDwmLfpjSbnNBKnoBjRRN7PgXh21TL9AUmDbs4tAJRjEcArrsY4FprQ31PuDqdCKHYHSiXvG",
  "key7": "SHX2JvugGopekuoq2cMqX4d3D4DhURLxcpKMHTMKkU18MeKyAUbRPy43Ayr2rWVAWTPaWo2kkRtgpmjewUFR19H",
  "key8": "5D5aGXVe4eR4NWLo3y3BHjsJbdwnYCCV2f9Upy9MvZ4TLUz8wi4GxpRyC2jWAeYBWxWLncwt51ye7eqbzkogpBwQ",
  "key9": "4gGDj2sdgr9pWgftnakuYqDfJDMVwPPobbJ5w2QfqRAw3wHWwvYyQDsL9T53yb2cveLUgLyBcvyEQtDM1TwuGh1f",
  "key10": "2B4HMVeMR9ENZEk8GGFe1iBvLWNR2pgdS6auNC47cBkj7iSLbtPjuDXqyaFHWs26MtUTHStH6G3LsKXP9Tve6noy",
  "key11": "FBp38AdjLeR2RByFYqDw8RW1FNLHa8fRvwD9Nhv3mq11gsj6ukALGSFiYtZmJh78FMMxg7QdBdBgtPLUnM1ik1x",
  "key12": "2j93wR2TXV7kdiRHPR79odfRrDd4xed5rD7p7cP6Pm75NRgMSvVJ73jjFsXXRksCYKzHf6ERBA5YwQPF7ZyMkM3w",
  "key13": "gdjNrWZF3YnZnwMuGuWwADPQiQaJdXqVae16hMv84faEd6cYg9rzF96cX9pLXK3DvRoTmbLjBLUf1m7bfoxi5ti",
  "key14": "5QVj5VgDCrB2fiQy5of9cxmrqxy3G4U5k62MBZmTrs6c9W7zffj7uoJzq8Yd1s2TtxYZxQkY42Cw7FkPwfhaHwFj",
  "key15": "3NPtpKp2tZrxDiTGiNTLVYeZ57wmahDEqdcn8SrHsJDWYndWktXzJcrV9GBVJMKfFBufFu9J8sXn9PiaJW3aXcf",
  "key16": "28smszBCd5pwQpmZcVzLEpA1MmuKYxLyon2LGn7JTmyYDFmbniFaXwWHEyxD7JbtJZgSM1FMbeqJasZgWmTN1bmY",
  "key17": "5D1zwo9Xn1sRZcX5TpYTLtH3efG7uHZevcVj4pwcZTzdqM5KRfSXHySJtt7zCGv73UGUxjRdpM9PUoVQLUpA9FnW",
  "key18": "3KR24YgERHRy9P9NpdbntQiYyEX3aq92josUbgjbczL9mHFs3jwcaVJHdW9p9K5UZ94xKBbMNvLzR3My5z9Hu6oN",
  "key19": "26yFgGEP5wLjzcrJeRo3UtTn17LFHX9bfoF6uzwckpDUeuhPsdSkK7QyozqYM9hTamBAesjfdrcea2KrCctxgQif",
  "key20": "218o6Vs6JbxQurZdYC8EnEkE9oaSs84QWBKe9ymzaV4REXi8f1mrtzgBLUgu5TpDWUwstnjpc9u1u5awrJerXN4n",
  "key21": "2stomEbkXaGJaLtcDTiAMqMtcj6PDjNhQdhafhsev7tCxUGh6wdRKvbRFgkpr6MmA5vez8irUyKT7tZmy2uo3rXc",
  "key22": "vAyBKm6MeB5dFiiUU79xWBNkWRTQHEtyzj3Q41eZzvZ3ZtWKrbfgDp7rfwGQfuMe3WuuB3z5y7QYAzHsj2CAm68",
  "key23": "24XVsmvVrDoUmcn9u2HNcGAYoF65H3FF3dXTjtTK5Tdc3WwxjqjFPcgqox6UZMsfBuA1kkjhYpRhW2B1UEub7LhW",
  "key24": "3FdfRGCkv6km83oNHywgFWomioivKZudDV3DVS3ovW1WzSM9MyMQkF5FLLrnKjLYKGb3G53onZC9VYJx9B43nvkB",
  "key25": "5LmrDefeybUS3YQWPgiwhKBuRBQSfk4sosozSsQnhPcfg8JLJFEzpwJtwo8iygXun74Jzz3e9MvYNMWbCfhmWLmY",
  "key26": "2YmgWHDfeRQ6YqFG1CLEFAyzy9xwCqrrFMokKRawEjtaAe8L6XXdjYDa9H8XzTKYerCG5XWCx5TwizpjKtfKDKkC",
  "key27": "Q6BdpszbCawY42SXLijUB2hfvpUdAHaZXr7e3wH5iqvLBNJhoWHqkQDyS7nG6EbAffDro3j78cvkpwmb7cEwCcA",
  "key28": "5RiZhZKPdFJ6GZwb8tH9fmZwHpgcckxuXvDdK15uqwn4qLuHqvfYzfdpnz3nTQDSwwQhpn2KFDCtJQ96bNSCWMeD",
  "key29": "kjwFDYMPXGTyY2QHN5VzjMvRZMULKmRCTpcBvfHXJmp41S53vBS87f2rJDePScbaVPRSAzbXwQJP3gzZiUbX2Jb",
  "key30": "5fVD6o5wnhTEzhTwjEaCEmoXdXcy8hSqVMHnXYLSBJr9H5Z1ic3VXkuFQ7aAFqcicUjijv2R73hsqSztQYTjBrAw",
  "key31": "NB2hW6E5B4QhSS4CdbLebyDYKP9VT73QgfSpbNSEMC7kwzuufw5W962u9MQAtKmwzYatwhdkPV2fG5N1AuHQ9uM",
  "key32": "61hMxbDaQR6ze9hUgP44sWWCzATuiusz4NM1a9YnJhaPNSZRWoferNWZQyCkkpimZtHchfvKGk65uRKHwvGwuyKu",
  "key33": "3uH3ZE4HCcKLP5384RUCzU7P3yHDSsfDDzpDWQVSbvKi5DAK1g3Lg8UNjuuieUkUvthtVXZ31wSj5R2hNMHqcN77",
  "key34": "2o4otg8KnN2ReMB7VNeihgQd3QAwaALSS6MVbBiyi5ZzbUMbQpijoPxk3yc8hDzKydpEzPp71dn2cUvdUaSPXoAQ",
  "key35": "39opnw5WkgB3f3PNDEZXNzckaSh2ZASp2qZi5HUMjiCaBJDWaTPQAqPnnJDkuzqAb9ZXWiWTNfWc8GYLyuxFzJya"
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
