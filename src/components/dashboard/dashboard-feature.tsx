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
    "5q3KZ5JBqWixTegvG6oqh8YgD7kPw65qnCaMBDMby85bF2PkhWAQF5edEac9MerT2xZ4rAXiTmqdf7idWHbQ9oUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1dZvMkJv8HvwpNNWBsvSepsXfsReVUsthKgaoc242ruiZyuuAPmAwp6x3LGT32MXaXEeNYFnF1ZT67VTVLoTekz",
  "key1": "2vynnYBLcWhgibQT4etpPCCkY5Z5jPyPXd5Kswmq3yjG7pgcACAzuLcpEgQEkRddudawDSz1wVnoLtvoTronYzj7",
  "key2": "NuiR4EMtMnD6PgtDT78ZWHK84BvMMTpQMBsFpTozqpKfZdguZxJMdHyeZjZUymLNALqpUifSgdkLh6iJBd8aS7r",
  "key3": "iEmGWMrDq771yr7wp5TgbfGdRbS1S6B7cu4yx6dG1CwYAtw4U3sCUyhFAqdQZHDuEFynbDXDeU77GTHdTJX8hLd",
  "key4": "3b3NPyJ6qSF3AKtozbkj7GB4CxFJGjQ3pSn2FfTSYzzseJZfFNF17SNGB2xYtH2fFCEX7tb4mDh19YhBFrgE6Fkt",
  "key5": "5jkCjNVBPodPA4U4rTkMYMLPCgKjXazEiJCyAkvv5zNYDCeU6dsMhfBsv2j8x3oubddDAdU8DQavurKtbg7bMgP5",
  "key6": "4KSWqMwJpPBXQNgACKoEHz3jaQtwnk3JuuKXdS31UPU57h9HaTZBudpkiFJK7VgAMj3fWZZy4D5SY4hpnGxqkJKn",
  "key7": "44UqWyLsWRPoVjWxS63qMdMZNvgbSJzumKaaMuuSS9tYLp8byB4RyGcQ4mhBpgcdr2UQ4Kupy4VXbUDH7S4ipGDH",
  "key8": "4ZgSuGbyRCd9n1coGXrAv346kNC21NbiHJkSKQWuhzKHxE7nj7iWiv4AjfRaxcw9u3KgkQtfQGqGHMV4Vio9XDM6",
  "key9": "2qAVu5sxuYMPu3HNvDQTrtVoAwwVqNZA3Mhfsi3eoUMYNhdvTxkuVGKvxomnYnfZfGHhu6aX1hppEXjYmDzAS2Ty",
  "key10": "3vKFkvU82CjxMKXVHAmwVVK3QMJS1VJZX39W7ZdMHonCYW3xARgr6o9bBCGBPgy3XmQSZmJjEqweaiYVDMSY9nPQ",
  "key11": "4nm6jsoWUjx4rXHat7rfVS9s1T776uKzmSSun9SRGiSAx3Ac5BtmYmSSbe81UTAT48n6hN3rBBAVcgv9exkZPUxB",
  "key12": "5UUEp5Af3etXkjTzHDumAkAcqZa6M7jhHQWscvktzcLo8EsbXAgfhGzXHbM1Luu9HUHyW3A1XNsdm7B5gJ4ZxFXq",
  "key13": "2z5CJLo9f2vd1DW5KvS4nXryw52eNbnEPAMTurxoVBFudUB5da97Y1vC8kKLYh65ngxYV5V7567vZDvqnJnqRayK",
  "key14": "3rogEqg4cGVsJ6jbh8HLjHqq7CwiwALguwXLNuP3oKkXw6h848mZALsuzUA7MQA9nLEG9Hdof2ygPtAB7ZrdgdE8",
  "key15": "ZCzWvihzB6N632M4najpWfKn5k3v6FZV5RHqVLdFZoFt8ES4gyKdEH7ZMkkkFp1B82EF29PBUeqNdMYMNsGjgge",
  "key16": "2AF7BXWWHuBFCX7TryrCLr1eYxuC6cfzp9LnzFavGkWSwtsBBWzQopM8xr4Lkv41V9bfwFtmpKNvk9i1LZ8kGXAf",
  "key17": "d9bTUtnA46tLXNFdydfXza5V2QrchV3cBWQE5A8dLjtyZ9GU55F67UDkYMVFMLC6449DWbxiPBHJY9aLbxVmvj8",
  "key18": "3RVCgsqam1KFiwGPpPKhf6hNMzWujVdZHJCgDgDwoTuLKgBZBakk4LGyfz4Fk7LzMjVFyv5LmhErCD2hFCNfJEWz",
  "key19": "3UBMgvRbn2REm3XtmSajoPvGE3GNXgBjm1VPMh86QACHebTQ81vNav95dLox4o7tVJ8T5YC4gLC6XUEEc8G3gm7b",
  "key20": "V8o5fPkffmEotY7wzT93NEtZBme6JWMFTzGeWm9QRoJADtqfeMbqWPJhGiQES1Ntwmyf7XZ5ChVbc8HJVCvKHnb",
  "key21": "4zyEj2ckuaci8sUwBGmSBExFdhNhpQpvW3Q3ZkYpc9p6CPV8ZTG6ANwQnyHJm74TVF6M2fH6P1JuEWgj3ZihjVru",
  "key22": "5WwCg1Yc7VySoh8ppvphnyfAVLLPVXJqCAh8QjdHYv1tFzSNM4jgUbxFVbJbrFv1b2PodDf1weKAzUNikdqoGVxH",
  "key23": "3xtNh2KBSTfq8w4W2qAQr7jPFxv3VYx8eUvxLHXQwzCADKU1GRXu48WmjefMheKLiJdAvfNLBS6zBcSHArENGDxm",
  "key24": "4Cah3QbD7sY9JrLf661j5THwhjMM2E9KMNhU4JZAMLL75fYUYrQxaeZQTfs5xk9AZx5ddDXNtv73ZMZMhRjguVHw",
  "key25": "3kJZSSBXM3Y9EYjANwLawvoyDdyVXYVP9JAJRj94Zc11AAKaaY8JcU8e9WkmBDnoUfcDGF9UCV46Vw5bBBHeNBsn",
  "key26": "5MuUL2aLXzk5NCmhdX15dDtQtWboRoDT7aR1qYXA9M6wUXyoCa1AxHeAmDGX29Wkc1nqn2hJfC1yHhShDmrnr9Uz",
  "key27": "2mTnJaXM3W5bv6g22VctTENnonnCMndKaaPyknUTDsEE6oB35bEZfXE3imQRXwSEHP1noT23yjNoavTRpmK94obW",
  "key28": "4PhPJoXE5giycmocCbBgey58zFnZ89nC35tU9jWRw926bLUg2gcuqYwVzWsHCtmHNArt8X6vGCBTZEM1zx1vCPco",
  "key29": "Tu3XikX7GEMp8wA4w7vgGsxAsMVxYaVnazyX6DqmZD1auKb8erkKqQxVv3dCWnEbVo6XzCfcvi4sM5Dn2B9BSti",
  "key30": "2L8xTmUTsFTyjR1g4QwtKmqJbjRicXg7GuFspkE9Em5awoCyDpMbtE19LYSfwZfeysSYcyXUZMuR5QDzdYXNYaJw",
  "key31": "5buoNCkCs8bWbGHfSfb9EKxieNo47tTwyJcP9ecHsCKVLAwMv6ifeJ3XT5dkksPzCSReNeaSfS5dxJ4dug9i5YC6",
  "key32": "3Y8SNWWfhAufZ4KmUzEnphc6Svm7aQWepwiUT3DKU8iwxQ46MYX2tvpZndu43JoCM26qLd8jka5BPL3fiUt9FywK",
  "key33": "2Xam3rFsvGhSPFZqZQXMCM2mLFbTMAvUen8yBKf5Tb6qHy8zXWcQr1iuG3uAsKzuagZfCtUfDdx56UHZQAJhKv8G",
  "key34": "5RZigbQW7fUsx3Fnm8km4mhSDdT6T3n9Z22qMvjGHRqg9ZHPAmqvj533dSoZxRoiWNTqKh6fYktmmbkfd9ngyonB",
  "key35": "3m91LVAXY7KjfJRWcsbJdYK3WFhLwqe1KF1xweTCDhMBdDHEbP4EN9rGxyv8fb2DhymnVszGkoj3ARG3Scdjz6DK",
  "key36": "mJiKEWbQ3bP7bJyhweosM5ikcVJkBr7BDXc8Sn6nGrZ8tWyPSXky1YtUzQdbmPPFvW567YBUAxVrXfK4XK6SAsS",
  "key37": "3j8hbaJiZF23e4ss4fv4ozBzFNNFaUxKUSLZqrwyWwMyUFMsfmo6NEBkccy4HUnVQshDrTaipqYceKNmuQAQmAxZ",
  "key38": "5vJuWiuaDkBcfPLEor7pXeKEQa2vpKdTXBRzqytToirtQ2YtVULDCi3enwt3F8hwk6zQWnhd7r6Sgx97qqVudJJq",
  "key39": "5aTxDMYhE89E13eW4ZbgQnpPrZnN9DMwZcRq8DiNKufUsHtbTnTgY3sVztqM6B3qWvtpGuXvbpnEtVz7c6zNMNt8",
  "key40": "WDSSCX2azio7PLUSGs5FpFwpH3zJNbsgBgAWBsLKKjFBWP8Y1Xyacr2WYpKgFLwsFYUg2TZJgiHSDzS4TjkiMsb",
  "key41": "5zNup4Y6TNiSJ7coCzn8bfjN6hWkuLyhJqx7KveReqm8yz4EambMoAfj7U2TLkwXqCqp5t5rmWmLjXoHxd2xG3m",
  "key42": "3ayxoh18pY9FADRjjFRwb2axnwvWqJD5CapYsEsUPL64NsizwxuvHFjsmBV2oFiwseT96dA83vBrRKTUhCT8e82D",
  "key43": "22nPLAzCK7wfrhstMaVJjrp5K1wRhuCU2BbPnVqQpX1yoSKqK7GfYjvKaMEEHhYPcC1v55x2FrEQm68fXhoMTFF4",
  "key44": "2Bz9Wh7JVL8hTuT3zVZPYkmhYbSPCMa3EnDf51HRdicgfMzU97SWF1fqRVFjDjyx8hARyxkQVRNHwf9p5CBMLgsN",
  "key45": "4yt89SybArESMwpVxq8sK9Ew8tzprdy4soVrZRNRBuNHQ3Cy92WqfHZPqaoCTPtP2paE5Ec7jJFDDQqnTi2gX5ea",
  "key46": "srVGfitbsLbv6pLczuSqQueb5E95ZLvNsfGMMz3tDM7MreS4cy4kgnyu3522wvteAWdt1W5QPTnS4ibH1cFFFXn"
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
