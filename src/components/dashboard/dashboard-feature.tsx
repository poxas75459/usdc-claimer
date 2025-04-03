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
    "5T32xohk7haHckicAtCMXcEXzxaTXKZ3JHbSZU4gYVFAqS6iAnDFNa23BBBmH3iD7kKvAs47jM6TnsXepU7cBRWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S21pPbjp8jx58S4YtQs2YJKCtXUut6gXj616RmS7CrKZvEpE5uy6ZL8YQVHfD7QBrYyGydKiSwYTpSDZGMH635m",
  "key1": "4JosmTKi3wPJrcH36shUn5niuZMJVFoxwGD5HdJUv8VCR1wccNZLPF8NuFTzns6crhjHPzqdDE5cagARpcoiVSAT",
  "key2": "3bSPj8hdKnzCiufCC9z1qT3QvexixyAFUGcC6wAmFVx5mNL5kcaVCdVUdeXFz8oZGtaZU73VdZPoTKtR8LwuN3cY",
  "key3": "5FAYxCf24PevphwQotgGQPae5EgtCpVUKJdkxEpuTs9SQQ44ScFvrEdpER7GztD4xjPSfbc3mUSQozRxR2rHD4pS",
  "key4": "5iwUkGEzEBQvT5nkqE3W9UwKhMoufm7BjzHKFyaVHokJxpbsPodWU8oci4p1fF1BPd6Zn7LmdowN3h9UsdCbLVWr",
  "key5": "R83pGApSAAbnyc5UXMiMFkVYF5ZtcQoKbnsy5xYth4CkRtBRoXMeMuHbE7zL864B8bZS77tACSyoCJTdWCaGiQQ",
  "key6": "D24GAYyeGeDUmTu3k8d6EB2cKMiMi7Xb63T2Z8iwu83JNdFQ9AEewzRLqNz3dXETqs2p9LZu4SBLucGvhuvBVWN",
  "key7": "5dgTkAze7Lt7TrAaeT8kmXbHWkN4yiGverWHYFYbFJQN4eWK8LX7NZi12yBqt4D9qD4xucjPtwm1wbekCwb3w95L",
  "key8": "5ubtpt6GKYbEovuMGscrRb9pKYDVX8jFAe9Lijjo1AyThxkLoZKE84oymx1xqDwU1ZS4RdBoXqyAiJHJp83jFe9y",
  "key9": "357w8RfKdwoZyGu8os1tEQahWDc1JWMqrUbxpXbCzJYSDESr1o4PzVmwUjAKZTDGWixSMNbPsqj7L1nTrjbJ9uKX",
  "key10": "2zHt1e4GV6XhhQPvWYurbE1ouNA5kaQve2ni9fyEC8urfe2q3ZuGw4QXN7NPYRQLvRrUghq9mG3BPLWDT6HSk7Tv",
  "key11": "3Kw5opepMzHd7NAKhEjYFzZYEe7j524wBfM56szQ7b99ZhdArZecdbnaCBzfUbq3hFAhp8o2bRPZvWuQcpVjoMnw",
  "key12": "2KR8HMX8HBeCk3i41RiK97TH4JoFfdwMGpy8bRz8VMzbnNsDREZo82wpApzUeZVYvFVJgiMaKXzhtHvppd9iy8Q7",
  "key13": "4fuUmpivRantDXRJXq8CEsnNd2WFtR6s7mok6Ky6S4p5sNFhPyUq7uFS2d34ytNNT2LPkv9TWj3v2mihnmnmnpQt",
  "key14": "FFYgGw8TEhcEEEAc4hnBQjNEsjxdhv6m6aGbZJzAZe8RkCCQ1bNjZbssQdRgBoa2TGuFqHwN1zX9Mq5GbP8sUet",
  "key15": "2yD6APhf1ZnTuKHvPhDvFmQJGf7AEiCbqaR5CCnFtm5fq8nKStzaD4mPW31Jos8xb9cUfMQQUDNRPyGADHrhRjqC",
  "key16": "CW83yBfhaaCthYBSVGcK1bHvwxnU6hog6JxnPmC4cXfbDDADLkH5e2WHdFvZhwMcpP7rxyuKjBvFjAAktrPBREN",
  "key17": "3HxrPGDnM8ZDRbCMvjFuMgamcQRhBPD3D7z7itZpwGBD82MVVZGQQdBR1FUdrgeSjia3KgTLwgcvc7duTKvgqmMV",
  "key18": "gRoYdh8PWxC482C1QAit5B1sNNX2VMaWaTeTYhXzvg3vKrAVHVSA94MZhue8Lv6ZSz79pcFdpznfvFW1mWpg2co",
  "key19": "51yvCmvvgHCTcdgWZifxXPq7HGpiy5fUabPJMF8MjaPGbu7tiDPdrNte2cFwq4AFvAP9NCvQu6weR74F7EAK1PKV",
  "key20": "2CxcmhWKZSFPixdA7j2bMhNHcGFMvK1u3EJBVGHBotWhWy3qCgcDz8Be53yKKG61LsGtWPZjVvfpg9coK7cekreP",
  "key21": "2kW9L3ADoNsqnZrhKa53FDcKYHhhsxcFsyCQ6nQRdaSCU5tU4eRkXrSYVGJLkCSFPaZKh4pLb29nP7s8Lcrt7TaB",
  "key22": "4QfdhJpadTUudz4U7gK5WNapPr6DBbDFYWwc51QR14sjAB7RxHG7sYTx58DnC6HG1395a71XZea9twF9BSnjLCPb",
  "key23": "5a9HGhA9DQ61HbajcYcVwkPK5Xm1Bjtym6twNdWtHkiCVFkHUjTXqkJUdMYfsLJCpEFVEjGCWVTFGEErKbgZQ24i",
  "key24": "2S8qJkSGnF6hVFMBkx6mZdbtjUHFj2Gg2cNiUizmC2K9xNVx2LxjKfBvYmCNdgRLNG8ZYeYoCBP1ic1gYvgCM1PB",
  "key25": "4LCr7aZmNKuc8PPGd5B3mHxCPd7nPQJHZFLgzisnfWPaiL8hYPvzg8QSJCrbtFm7taLMKQRmZkyGWoBmp8ps5iTZ",
  "key26": "2yyMwejrrge3W4tLy173aYyHAnoHbJF3N5Ch5T25QxFbFa9zrUhA5yzyGiGVFMR91rfxgNjf9DscYoBUJzaPkHdm",
  "key27": "2Z3noYwBLPGBnBJY75p2a294fAGZF27CMg5zBGjx6fupzEGcZXE8uTo6BDJu5P5A3mdvbhGXexFMKCQ4S7XF63y4",
  "key28": "BbEi7bEzsg4EPPj8ofB3rxs3Sx9HZAum2bypiHCHVN28EvYHk4ta4k3LR21gapSZdyxNn8fAyZ6NYX22mZm79cA",
  "key29": "3tnWaUVYaniu5QRBNcc9f6s5BdztX4PYRdBZ7rmJfoL3QMuAgpGVpU2EMDWicbrxgHWFesC231kb2vVf69vQUAgq",
  "key30": "CczP4jrY4QXuhxRZezjukLahJkQLJyVQNXUPwH7CVJnDoQMBCDvpRapEKuy7GCc6Y9Mzpo2tfQWszLbifC64mTF",
  "key31": "LwchCRn5tHbBYTrHCTHuxjBdwSL9kZQGmWsscUZjbjgTrtdBpFbPHWDnPqGzTvXfE3gFfM2JoKwtyA9T6fiDUVd",
  "key32": "4ieJ6wpD1nHDke5VYDeSHUxWyXi2capoDwPoJYzDkPAv6ruVaMMkNz8C44dDgKGrt26S8XTeCw6gA4f9K5oysGqB",
  "key33": "2rh45M9YC8Cv212ATZN1vUWctMceJJtwq8hh6zg47MTd6TdPjQV3Yj5zvMWDhrZGPpxABH2ov5dKnvBjvV87sER2",
  "key34": "2fqHmHTkPwc9xygyXijhmWpxVLcY4yagY6dzAVscpCgGZZvhaGxtDydMyc1cQ4ZZGNuVwio5bXGQdrgMj1kWgCNu",
  "key35": "L8r2czoqKjSHBFBZeWgzYbYnts1CiRBoz9Y1Sz285csFs1kBsaJfXVVujdtTHRbgnu3PqcDBx7YZC1ixmnfsM3K",
  "key36": "27fn8LYScScSwUwj39hB5JX7G236pg3BDd5LtAK8YuJXnXnbcZt86vrb4YzMsNhPqGbGWTMNUVFN9pmEecjbe9UF",
  "key37": "49d3YSGe4Y9ZqGYaYgy9Cz99myQffvqtKg7p6XcBHtyFB2AnrD3JUQMrVQMRDiZKgMhB4ihiHFmF4Uh1SKRoeA7",
  "key38": "2BK3YarenoVBQNt8S5Ar8tpL7iyi5xsmpdfj8izoa64qETN2vQx7ZwAhuHoiy5JxrFuhLjpprWQRg3QpJZmCCxaQ",
  "key39": "5DfzyyTFe4jA8e9sf64AWt7uEQ721NJKT4fcMmxcpV4PbW29cwNrsXAww77HkaDW8kxokenxJwFxYoPbzekbYENM",
  "key40": "33TcXLhtDoFdU9Vb4hswwNXeQs1xAT9dC2qgETXRSSaAdDKrAYarxwogqUbrNKkqTrBv2nrcEt9H4iNbo5Vbb2U2"
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
