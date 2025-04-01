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
    "3Mu4VR5qCwe3zjrfA8bnhimTkq2MUW8q9J2rEpXRvLY7BLE4r9xHL5USXYKvv5FCXV1WgpBrhyWorLXfVYWZySMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C1eMHKBEcG7mUersayFHfTq5mhR3SNjB2uBKQJ5nPv5BM5BB1dWWPUh5dbfb8259H5WJzXuMjemvd7ycehfhgpq",
  "key1": "2VECECj3E9kn1N2jxYCUq8ufMSMANwvZKZPw3aFzyC4B3VPNoG3Btao27Q9BvXxYj69Yf3C8TW2fm4zFykkA3dvh",
  "key2": "488KM8PKNFj154JACNeRXCLqUunfxB21M6XcyGUSmz1RdRpHaSVLuEx1jqBGyonKgJuJXyutzGUKnUFTVJ78iuyk",
  "key3": "2eXjkxfoqLpdJembJgJKiG23B5pBjrDFBSTcyjqHYEWKr3LT93MzTAvnUDwSuxroASKeGnc7716UJYC11Y6wWNQQ",
  "key4": "4rkjySU2tWDgeik11sC62E2xZFd1TZ588bZ6AG7gGCFPWukHX6BBXD4eswTdUF9rqegzdDVFDdpQiZARxNx4Xasn",
  "key5": "57iCATmUheGFp7peycVr5vHsUzqLHMNgxUAdcdqZBSbyTPCrbMG8nTRtK8uDgMz8TFMQ4DsbTTcTioonUtHav3bv",
  "key6": "3R54Eik3vjGQwzFsCByR6YYkghFbQM8qNGJVMN49wzuR3AKEQwHb5zznUtgeWkfpWHth63cjufUQQw5yWxjjN8iZ",
  "key7": "4ZxWF2E7XoQmTZ57DHaeDNgDdfnahfpxzALwfZSLG6oZvedPsMiwxGfAswzxP6Dwg1bqUpDxhbqPfXY5Z7M3Fdvn",
  "key8": "JiSHdf4muuf4R3fVwhqg5w14t4iQB9LVjVzRgcJ7bWTsaqiXJuu4XY3TRRK3K5QXnLgbySppdZLFDGxApfTAqrz",
  "key9": "3sss4FEgMy7Z59hnrY9ZDdLsCkne2JTN1EvVh5s4FzJw3r1zfHPKpBhsR8A1NMLoJ3ZgsuUvQ5W38jLNfur3u3n5",
  "key10": "4xZEtD5WoBhcavKZG18xciW1y1GLpovNqV5mXMG6emi4zS91cpMCKLkPcQMKpt23D9HgJoSK4aJGN9U5uEpvtEp4",
  "key11": "3hYAWW7BqCTG55euEVWwgxCDNYXRDgJzihsEvY36rqPXzh1groowKtypjT47G68fqFmEpouo1zLpjpvwQr4v4Tq4",
  "key12": "2ejbMJPCrqQch7EEZyPg5jnMvq6FL4HC5AVhXw68eNCdrTbFhzNx5bERLYHJCrnvwGxBtyx4t76JhbQMUZUsVZkn",
  "key13": "66z9DBKHyx8WpZz8PTBdUmfQvYtMq1XjDndkC3GS7qyh8X4iXaHHH2ZY6r6nU1Mun7XdeZ1RY1oPHiTUmJTtTc31",
  "key14": "4fF3TtfxPAiJWcr8b6umHRxJZ6L3DqFJLcdrszP8tHq9FZo6siosa1i6WSsjGARPmLX3DN9wX5pGAyStCnH9BXBY",
  "key15": "ZRVZe9isscYJ8Bj9tYU7w3wikTtYsHArqPfbgcbxbJzNWr1zSLfWkgpBNJ1XZDbLm6QPDZx94Sg3XAM4CaU2AWZ",
  "key16": "3wjBrqu2682y5LcnpqYLAZfbFkjE4UEKv4ymWSkSCgtx6V4At6jFJnrixjsznMYXvS86biqfnS4rpK32HKjxUgAL",
  "key17": "562Cb6spAHb8VYcMAgV6SD74yiSHB85mtM8aTgSqNcTbW3fJ1xhj4H5R5HbA8AN9YXre9HSTobCUFWHX3vJ22aiU",
  "key18": "3Vrxb81eZafQkNRmUs1zjvoxNhMvNFNhqvFvXtEGyPQfytdXKmf7tDxZP5JcViJxhsirtEHBYiVfNmPYa1NLYdU6",
  "key19": "4FZWYnxH5S9QCWYR7BdhotbWnTGfvS6i9NvNiPiwHQGqu1CGRRsTW1XqKgAsj2GWj3sYyDo2kLap2sLXWHnBezV1",
  "key20": "3BjhgdjB9DpYRhaZmcqZVbdbEnpEq1XyW1DEJxijnWSLS8sqMcB9XuTrXytT6X1UBouA4YHzbuBC6conEtxY9NKg",
  "key21": "2APv1LJL2iuxb7jzGhxYPYN7G5FxeerVgxUbsfvbWxdbpASU7ZCiEkbhFTpSjzbiEiG37HNEVRZ9p2v2JWQnSx4q",
  "key22": "42kjr71jsQ69HGYX1t2mV81bCYLHPnb6U4QVcGD382h6hnYjRRX9a9iw8LfLPf9VbSBcSp1aNS9r3uU189A5RjuG",
  "key23": "3LJKrxBSd9yb5KTWsbpzhhRKNxzvg6zpfPNC9n5a8t76UiBA2WLyaNS2awQYFX2mVPzjZVPsfcyfN8bZuc97SsRs",
  "key24": "4q6JYRQhcQcMveXESeJ2HTx6F1Q5J5zAhZjGYG2UxGnqBAWk14YcJ9rr9BfVuk1qMayb52Zvp5z7GhySb4rvK8v7",
  "key25": "DPKt6PygxGp53SkjmjamKcNxV2CRonxpbhPKqH1XAfATauFpHf9iR3xZd8dzeiMSXF5GbQQoMgBut4rqwULTRuB",
  "key26": "3kNYL1wMjE9itPo9ur1Hkj8HYDP5Z5iJ9PZZ5sXwQZ1gbrBnmz3tdSBJ7aMLZxCMgRUrwNVRvqRYBJVj7fUmH23W",
  "key27": "2oHmxXnAyeDZQqAHTGCrGcg9x9hiCdEmxyRKKd9mHMxK979XJxnH6wniPE7RuAqtxyM9ywg2ssfw3NW7ifuDM19E",
  "key28": "26CUqqNPUc1kBJ2y6KQ1cwTRu7bGpMJ4W71LqADAWUyHpbAmLurMyQ6pihJbqVSwTpUZyF7SSSbf1HHDL1yyyxML",
  "key29": "63Zf4qXq8Qhzh1X4oj1pGdQ1XXVifeSTgbGW28K7mpk6iBuSqtmhVxCodfBh5cUS2TxjNpd2XFh72AVQJGgB3gQC",
  "key30": "3G2sLFdMjafaRfXCV3jRikg4nd6X3Rzzru3vJLNvWJGUHA4YfJwm81WazUsjWemccsuAXXHdmsTKA9vbbmdzKcHg",
  "key31": "5UmoVYprEWR71tJx7K1RNL3xDSV2WKHfQgZqqWpKmuuVm6BJ6PPBiw8dv8TnKngvK6ggsMameHrCTmKDJxK2mjHy",
  "key32": "5eC7dYUT2rkbsDtRgThS962cCrE4jVNvbq1oNx5CT5cUYfgdVCgUSFSKdKMamBrUfbwCXjvqQ1D4WmWXwBdF16wT",
  "key33": "5aUkX9ZYQGRNgZat4UTUspj26s3cCVpeEByhj9M51LpZvX4oJFCcxnSVDSfnF3yAXW8FWCo1k1xCyM51cMKjxynm",
  "key34": "5Ehp887TjMVnbV9D6HNekXgci2BE1sxMKBUhaqihzCLZBF953MDatxc28Y92T82rYvD2nnzUCRd7yd5Z4w6ujM18",
  "key35": "2jLwWgeuVgwREkZA4dDikZAypzrD26MWAY5yXYMqizMHeyz67Amrgazm9CS3TDXfgcQ623uXDXdRNeKysxw38fwT",
  "key36": "2WXwfTn6Yu7zkny8ijbZ9cvQtj3bUEXFESjYrjyzidjAZJidW8XCGQmr5HDmVjB8ABB8ACg6axj6quio5ziqvoLB",
  "key37": "5bWV6wUXA3NRzjqAXLngjDMyFMTtTHa9rVEzqQXv9CJQYoccYrJfScq99Cd8Bncgut8tbKLS2sKdWeEihCWndHpR",
  "key38": "4yiJgWKsiAVZJjxpM7KG2N1WifiXB1LBJRo8rjn4b7VennuvU1XoGqTDpvcMiHfbacCdheLGHPaai4pq1WGxPDQW"
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
