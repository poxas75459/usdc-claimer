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
    "2tVphkxcn9ETji9KWgVWon1zM3RSwEu7D91cUQnTv4hbavmHB9zxGRVh4J885H9bUgN6jNUFkPwSdEc11WcpRQ4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QJxjY9gi6UsnxX6WqoYvrUUjxrGNNheraWFspR2KyR6ntZ7q9yVasa73N1FoyDwwP1tcqzNUKBm3hyWZQ9jTRYe",
  "key1": "3sjx3ceZK8XwFTxFidzJHT1f9bCMSoy9CsoVT8Jv9YPWeGmxN1yWNJ9S81vLcwmGczt5YJNXEZuokDyWyuzxKvWV",
  "key2": "3iPATJZjLabTVpZ7eazGfSTACwuyC7SbjsTh9jJ44Y8LzbubLg8PBwDxLnyr7nJKqEK99WU2DCYyJqyoYtSB8HWs",
  "key3": "2z1NmwF1xamEyjYdc8vFtaDiS5jFDv2CiBxQfAFNeyg48DVneWE32PWdrW5mshcokCVTyrygTxTQZimAx1kPLs25",
  "key4": "5QvJeTCa9tEkKTPqajJT4MJxUSXScvQ4VnBYgVVFmy8ohqf5GK6VQn91sJoQS8kuCJg92Hdya3ASa6P93hyhuqDS",
  "key5": "31bg1DDjkXGerABBEaBNM9zR7cuSWXjduMPq7tiTstC5Wj6tbQ9TyJjSzeDKy7AgdDYVVkoKBc44i6jZLmSH23eh",
  "key6": "3hfAoJwEXb2LeuY1BMg8xvxg8FfPdJ4akqhVAxXvJPmM5XCmwQ8ZUTYRvnTVo9kUmHTwaP8cPnakPHzUp4vArFfc",
  "key7": "5vSZPEis99syMVGqqpsKfvePnHMysnnPLFF5M3oyEgybKKtbKS1zu1d45Cf4V6gxUS58XFppQdQ7sGoYqwq2xPS8",
  "key8": "2cHbefSQpG2Ak5Eg7V3JzNq5cCYniuCCncxe79VdUWXQA1cFKpBfKNiiXFzWVLHsjBKaLcTPqTDZ1iWJZbBJ3u46",
  "key9": "5CrTGH2F3JpBF72kHLERVsWcSEEL9WJLHoYstxWWX71NDkjQqXy9D6pCdi6Qhaz2ioaUMEJoj55DkWbtt3pXQNtM",
  "key10": "3hB3sbFz3uaRyBCyZqfvc2YM3PvoBeaQTVnTFPCiKbtTf8nKZ4T8CwtUiHCAeCt3B5sRnFmVWwWBi42VYC5A4JL1",
  "key11": "3Wpm8jo7EyHyMvRX87vz5rVunWMAPiWWHVs8d9LYLFWTssn7EeHdMKQ97BrdBL56zumbVvXw7neh3eDbHPgRKmdo",
  "key12": "4XdgM8kshCjNgunJkTBjXne4iLX6zkbX1G8G3Ht4yEsizXnQVjzJhgP683cXcjMJKc8KuXzKkRAMAaYSxdbHGDhG",
  "key13": "5karXLgoU9nXF5NTbNbbUjgjEh6FDEYwAnf71EPwifzwK3SxpnnrbNQTxRbDcAB427AqYimLrvRA4W1qURBhsqVq",
  "key14": "2JbdfBhHXE8hDSVms4yhgLxuBhaoUNmEqxnjd2aSFd9fN2Gpr1udFeUbhVip5RayrsLWKPZaFCibToAe31aGceYb",
  "key15": "3HQG1pPAoRH1F8bJYZJUQ5PQTiSA9n3hLTvKhdbEjhc4BfnVUQ1YjLiHMNERHjmCu4ZZ7DSLet8hSzjTjuJCo6Az",
  "key16": "23yRETMbhTYLVQLy7XEFo1VArDTfsaF5e2HYQMgSRfEuHbbCG2gamZ9CKtsxqDs5rbcQ89KUEdK7b7mUz4Znqyrg",
  "key17": "2SynnBivwyJdBuUp39dQ6wbpnCSFjBD5ogxLHqu8iixRJwjBUbumsX6ZyMzec4nNWHj9xU2HA9u8yq88FNn3dKAo",
  "key18": "4ZEb6RoQP8uMnx7v2saWY72hBaRJ3rYvXCCF4Tu8gYxmaD3a7vCMZe9MchBxHgGTmmtVUMfypa8pCbdjHBcEPWvZ",
  "key19": "3B3an99mqjSpbaQZQ9ZvJJm1i8VGK2RbEfufhk9Pbi2xSsBg96szv8cEAcMGZoEULA1AWG6dwVH59uHLAiNEaZJV",
  "key20": "4Cj4HJyJPEAmUsjuyhT1nGCMr9qJMHWTS72iK6jR4TYJg5VL4tgiBZrMujLESgH4ZaowjK97g9EK4no4DtgpAXgL",
  "key21": "2fwzKYXaGoHXwCKUPiLW43v8PKKZLPWWKsc1gviXfAoCGJMHUfKUXdQJ4nHE4cjaUoUTNjnmN25fov8ZraKFUFYc",
  "key22": "3mYQBG7htcbLFk4eS43WjjuBwzt1M2xHkPsp7bwynp5D35fYae3tr9Jjqeqfmabw1JZrKhZoGuAQ3GD5D2YZTp7y",
  "key23": "4QrEDL351cj6g3as7dQ7sfr1YPoPbWWv8MjMc8w3hqnyazQYC7LwijRgVeDJ8cJLnjx75Mm8on5qu6tkRf8Bgmxz",
  "key24": "4gRq2BSd5Mnt9rbCgafoFY8HCzhZM1peLtUkJCerDE97ojx1FYQTzDhQ992yc7Yoh382QFbhpAK8VMMQXJGxGzB3",
  "key25": "5CW3c7LvKFfNUtmWQEecxXBqNe2gQqja9ZrDm6SUZYMzRxDDA1EJ1GLn728Bdt8eSXEPJXJD8ZUmJtAkEdMPYvMp",
  "key26": "p6AopbdGikhBAFht7k78jwJxsvwoTbRovZ5huWh3M8evkFAT7sBwnjywqJFYTLRBQDTp1QF9hvsLwkb7RJKCex2",
  "key27": "4Yr6QvDuFx1KspE693LAJwnCqdbmVvaRx7jc2v8MEzwhZwry6vZE7xkpDTtZAvr59brXkjTgyXoL5S6iZbEFYixp",
  "key28": "5xgZcM9WajvEsV7DgjLvYYWYN5qcx5LKDPfrzJFVba2TwZnKGdXF3pm66kyeeyMdmGU39cYot9Dkq6ijWg62SDuL",
  "key29": "3wpEs9un3KU5MWPMawBSDEsKDQJV5mTnzPTPbsj2Ut75fMJ8hj1pDcqA4vUDTSfj3oPHskSPyKJ3dca37LfGuqj2",
  "key30": "2Hbahf8hWDuQx9V8svrkftowc9qNXG7hWHNYP2pe8d2o5rfLf83ZADvE4Rf6LTuVhndvWWaafLPmbvpVDcnnxctN",
  "key31": "HuD1GiWyavkgaDLQMdAf1EJKiSEueYRaTfQxuzEuMtpzjGU1FQMPC4nJLvK35KLBwxRv7fqLqZRoQUYNK2J9Wtm",
  "key32": "BE59K75mRpbqRrndcxuisX8FZ1kbbHYHzX1VFVj5MCGQyJ71FvcvCBQSN3HfHRYr4dkZaPraicXZg83cwHz4zey",
  "key33": "U8cSRx2Wn5J5yEDCy466KGo4Wmu1iwVG5VmdShtz9b5XknqRkPbyYvY7viQ3EXrswp8G2tDPAFEQRiCRJCi3K5n",
  "key34": "5HPBoomtPvsbV4JYfY4SDXwdBcQ1XeKSRUUmeMRSWJ4LtWa5KZSCkiwuaJkK7fR2szgS8hTojPpnPXvzme9RvvkK",
  "key35": "dGW1SfvJovbtzQDrA5s2NEhFFRZ7efRo1nc66RFDCNSo4eM667beCmRDYY5oQCmw1rc3eJJ5smCAXWAj4J6dtY2",
  "key36": "5KmVgeQJLsPALLRL5ZS28pYx3JbuRW2W4tzVRA8Rg61Y5dW2imgr3AHrtNb5X1Fbz3DWaQ3rsALypKHjjff5V7W9",
  "key37": "VDiWWkG8otAL3tajD2SU1jz2nSYjo2XFKigurVocRKXWhP8jrFopydoPoYBNUUSdmCnD1zTvyYVxbwGy3bopAsR",
  "key38": "4RMq2b7TqJq6XVuT4tFjL2JTNrifg6Pb9ENJ7JoiDoD87nCqKAwUNfbESP5y28ZdfuBogu8DDqfySTwNrFX9ydQQ",
  "key39": "4YfkReqhHP5z1kML4dxPe35M8YPw6wk6gfSguJZEEoW7ou1p3jPbtn911Jjnx2yhoDnBHYVYrDw4kn2QgkJZeDqK",
  "key40": "2kTZjd8v8CiUeskaYisaDn56kcMY6FfxJPHtXvbNXJ7YPew7b8LD71nZmp3LEyhZRAeTdPpq4VJRmdoosqQYbLN2"
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
