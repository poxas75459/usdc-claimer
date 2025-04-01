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
    "3FAiRtU1NghDoWpnoD4GtGuvCa68UpW6F5a5vcFxippwRd7hodcWTjf8gPJH43Z2wVTxgXj8Lpedg5Zi7RXB7sai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GZ8kArKJ5PwTGAutCr8ZLeCqPdxYKZchkVLnwfMdWLPvzvPQx73sqhVP8FoSsNGX2ieT6RUytxyBtd78vNhVr76",
  "key1": "4Nz36KYHHg66Pp6QMTQiuFzmLgCrmF3h3Q67HzDwMBPEugkKnDWo9n5MTHab2SJuUGMaY7krULPCq8J7eJhYz6nv",
  "key2": "4fsBnqVwpqSZuhqZ4pnD2bizPcv1YB3bEqtkEejtCqsHwo8sC6V9XSjqzCxsZ1n72Wmdb2CXv4i98EDEhyKDrkuR",
  "key3": "4UxUw9NmUaYGDcKEtEXBGCiLpVXMk2hYkRCnEef9oaaR3nrhRjdWNED2UBsbX8FJx4hTKszweHPRxoJDvgCQC7vv",
  "key4": "4Ndc5DztqfSGdQkQHJJp2yCJAXKVNgaYecn9CrZGJAn2W7vYeV2jJwd2iD6MPYKDT6dGutJNSoPr8nx1wbseZSHR",
  "key5": "2jdjVwsKZwzEwhqVNEtvw7Zc6cZqKZtEMf29rs2e7cnWDfB6nbMvigfckUEcDcHHtWTy2rLp5gScmP7AFrM9ra7U",
  "key6": "2dVNckt2V4oSRdsN43k3wJ9nMDFKfAXRrx4HTXywzNHETv7b1jFUBY2A67Mi7GvnuYxYN9jBPSiM5bY7aFJrT3UB",
  "key7": "3C8mJp8dFTMHks82mU5eKZWs3BAGy5c1A6jn9ztVLuMeE5YRViamNWRfHDDXzH55knJwJ4Pr6PNtrTdPFojWQ1QR",
  "key8": "4K2SKtxESpL6fL9Fu43zANv5b1E68prx1tVDng7miziqwA79ExT9Gc5WpuzJo7XFb2N55YcBqefU7VA98sPR35pH",
  "key9": "4vwnXrhhL7wEsbpciKE65bqDMt3WusMxLbmqvKGoKadnNmGTqvW2NRiV8xR26BUtDPLy5KJo5ffnnb7xsLdSVzVg",
  "key10": "4DzCHrShZCcizDxSoFsLVeUFsqWk6pjqCUTHdiu73o8rToXQHbaivSupejFYsSKKA1HvfkSn6iTcem7DexPMSU4F",
  "key11": "5mqggaD6PsQHELsaqp9BwNsUe3pf5z6yiTjBdQQ1hMEq12By9pTnAf3wTWW2wph698op5H9hHcLRCRXeehjsF26f",
  "key12": "5BynJJ7DsbhcS9RdrFF1g78Rd4oMegg5DRCSEd3AdkJH4fUwEqJmzgLMKGGMHNxRQM3mUaddy2r34Yq8AiAJXbKJ",
  "key13": "4ungrXVRzYg94AhuFeuJeyRjRsjRL9pTpPQfmkDie8fHx39VetQ55a4aSxPN25hjkr8Tcuuxyz6UmG9RuSUtB8WD",
  "key14": "4sWC1Ua74VdScXjttPmRJjBhapMbL4UqgXzugJqB6wdMJQhq2PHEkjr8hSYKDpujuzxfsq14yvLXdnS6emKZLQ7D",
  "key15": "2xuzupSsqSmGvMMB5jfGHY8Wfofyv85zwK7u964KNchXQfNVBwcAxAJs7R67H5oqjE3CWcg85H6PHzvdFe8Ndb78",
  "key16": "5nbSSY51pHaTLMXoGy8f8fxQ9g9DpaQGMA2aXva173r6Mgg1koAKrF1MH9DK1UqJGByrMQk1iKtSfZsq8NFqjGxv",
  "key17": "2K8D4SDzdDZMSNPAj84ULQ6LikBU9Y483UrCoLsQsGZybZwkt9re1iSpfoDnAuaDimj1CBMs3w1tEN2VpL9rbyEL",
  "key18": "2K2Sx8NRxkuYwE7U7KSF2itEuuPQyKoDiXGxrFcAiAEg5iPbnDPrNfzKbPt2XNuKiW48tuDmBYJUoHCVt3vvUsWR",
  "key19": "3E58PWF7s8KQKzeho2cJVNMcgWWxbdUgjug3Gr7okXB2b4MptdPNKfTriA379j1MGZy4ah7QBu1EayXhWEmJcRoE",
  "key20": "4xrCN2JdB6w1vzuJ6Do3QhdsSYxJRmNFok2185TDBAynfBymw4gLRkUcMV6GzzNwoapbBKj183kRP6G3pL3jk3Zr",
  "key21": "VAkqPeerDxm73gUoh2hajRyaeS8McuhWgB8fL8HBEjcU6DBF8nL5nxaHcnDr97oXoj3jThXnmsexzizE6RajV1H",
  "key22": "2GQSvXFT4P7RnxrCC7MxWTAQQmu4bRLjXWoFMbV9spxbRWHn66rPbXbNFQVjD16wduLTPdMv5XywYBWhkBjfSovm",
  "key23": "4SSG1n9PyzqGj8qNcuEaQa1VP2LRdJwDQ8hX6TziAA51EvZ1aMGwNiVG8XEdFh2yL3NNMhHEqR8K7i21PwtFCeP3",
  "key24": "4fJcPhyTmNdTafkePRP5jXXPVV5brbGRqgXDTKWerDHQb9iTrkPChTDyJMritYWCxZi8tFJyCKH3nCLAvrvjyVWW",
  "key25": "596VVZaFqEgB3AQbBHLgH3eJe5hbr7WUebCkKQibi845mZjLSRV4R3SYH7GpZ7zVYZ5E8BvguZ9UHTPtLGqYjxuA",
  "key26": "2EhcsSLqf8qJnAK6UiFde4kxhxsJRvb4axBKXWqDPGWHZk3WuX33RWGY5cMeN1hvewuNbH2tguzEqyVB14vUV94j",
  "key27": "2m2YUruA1HqUNNhz5HstzywVg5F7FK3LCkrr7JZQHLKe1r8JtLwjJ4ZtUPN6D3YzpDMZeDqDxqvEueZ9QHvZKnSP",
  "key28": "3Vbhf7ABj8VXJrttsJSRDoWwSsMGNRTBsHrCZCWACKpe4eLKhZKD17RZ9M8c6JnpySzZygQy1nvgizYUCfVq8K9F",
  "key29": "4gi5bYgoc1NJPwk75inFpcL1KSb7JgWHw7PgLCTbyb2PSbwjgvQnT4PkHaNqnkFLmtrbb5UgqUqFCWEnTfimMMgN",
  "key30": "4RLw7MxtwDBwJN4t9WPmzgCP2SwU4whSHd71AJRzrzkBz1SaVG9x53XxmQEaMS3rbbkWSPgCSFKHTyKyEu43YHrg",
  "key31": "3HprAeahUyhy3Tiw7xNjx8GGNN2nDbSkPF4z4a4DB6knhUBsB5wDH43Ff6Dtqwg1eL82Zg5kXxgmu4Y6ZgnqwQFQ",
  "key32": "2y3sKqqK25NU3nRYWbdReFbtZacpCqVg3WS34NESa6qrANhwaUaoSgaNRDSLeFE28gVAzAF4KMVt2gj4BMDcK1Y2",
  "key33": "57qXD6ui9CLKSXPynCvbnKvXpZbBmDxVLDMFie3WPkjGxDz8eZKtpuNUWdGRQWsTNDJYVxpCKfoGbSzzuBWoioK1",
  "key34": "4FrbWrbB8WfHqF6c7fbBcy4SXAPsw3uCu3cLqP5AvGFZconiB9LkYFVdDj7AEHZXhUtcBH2geDU1cNvEk2istTDG",
  "key35": "3TkSnxcY1R93QZQpuPmTb854YeVpXzUtAxHePbKo1KU2fHsgWZwSEFvuEckHPhMHBhgejz6UBtZsrF9ejmMwUbPB",
  "key36": "2Avb49PLMEptz4vo2YtWVuSrqjKsWMaQSBLW6Dzm4QGUiUumbA2xkpSywfrUgJaArEhiBkbyvUqeynVttjfYqH7x",
  "key37": "3HfpS9URiKFQXi3caJcNXCkNABscjondQdAEV46aTQt6GfCEQ78j26tp1tdQ4ZJcFJ7PagmBVsKeMB4iGWcyu5vk",
  "key38": "3bft9b82cyghYJh3XeeUCxKiDy2B8meFMhfb8pGjc2zncoQGvNRPxVYjWUL5Hsu1FZ3v4JRhLmdTDnpVPXLdfwq9",
  "key39": "2nMETPdhYfn8fAQqd3je2djuBAmNPtL4fjW3MbxGaB9C4GZXwDBu83tzeqkRGLyom7U4xRUw4CCudux2B37xXZoT",
  "key40": "VQHAYvFkVpwqMsvRScQBYsk4ecsg5yZ5trFgHQ7ifzD9Bw3ax533CgWDGSpgRU52BqGQvv3ounB3Jbe4dKStoWT",
  "key41": "5PTbg3cY5gUp4hhbXstirsXT3H33T36hKmR3pC5h898AW1LT5WC1Z4YgWH4pfovF1xbx6hHzyNTZZVP8KKXLYczJ"
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
