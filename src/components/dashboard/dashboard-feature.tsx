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
    "Ei38mkiBumQybZQZkHj4cFh8V7RxSrAv4VVMMpyCaudB8mDGz2d21LMbP8SVbiEM54ggKjatXw4GB14EhYPeMr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RCNuAbrYTbrH4DL38PYff4Bhd9FDbsKPSVYouYP57FV6mCFpUsPTCwcesjeLQQFbvzaDM1C1nWHFyGbwXg1mjsn",
  "key1": "2gfFUgSdG2Px7Nz9hh6bKssWL1hKwCpwrXBnfMxs5UcUHktEPJqLQmTHFfK5ukZY3WEBF1iiEvsGxQJLWBbd9kmk",
  "key2": "2rhypcMRg7TpPkYx8M5MPSFpEjsMu9yGH8JFUuXnckXyCtqwzj9dys85MRcGWpG2vARspKPzADX96g9AbWamYBrZ",
  "key3": "4kL6SqM1Bc1NJr2ZmyKVGfVwXg9sUKQMFxoF5BbBnQgMpQx7o4qPjCA8n5syGdpQSa2ep94vv6JUWCDtFtvjRLyB",
  "key4": "4X4oXDnhKbSgCT3csBiQPAgF5Q3AwCS3w7yTcNnSExszxQ3KUCRMocCR4wdRpeKHvD5BiaYLQ17UmAhfKHa2KoGo",
  "key5": "3ZMemogC41ZDPHeDGf8T3u1d4qALs8zAmDzTwFmUkSdKEuSvkY3Qu8rZe1mHnmRVU6fYoAPT3C91vu8JjXgCPaSs",
  "key6": "2HffdgQ9yPF8QX2VMyaRprJrTNzUwtFTwDjsvbt2GNMUba4QgSSxRNhut5R7bDLnHPrrsHVghbHx2B4eEDRouKDb",
  "key7": "3hLQ1wnLseVFXQZRpVkZzv8zvQYJ4ZEXfLLBBhp7RHWPwgvWwnyFFUFhCAsAjsKnxiNXW2YrTMFRGFVaFrMWhYNa",
  "key8": "3UqWMEakbZwUmtH1jsissMkWpmJoG4rfnnQsPDMdHJAgLpTsCcpsc3HCscqTu9s7gCoBnuvvTws8j6DdvV7yp9jo",
  "key9": "Ng7DHPDAxMtCm2ic7KxN28bqXueTvySA8wGK9JeHZ2MkqraVhNaFEqPvkybbWLh9usLFYXTnLkgkqiv2cTzFStN",
  "key10": "4J8rpgW2vtK8KVnvtfYD2atz7dKosypajPuu2YUJaSWcTZ4V4fCCyXdgefmU4KiJvtGGux3epwbqgZ2ZtdDAkUgk",
  "key11": "N8e2YLqLFVHSfex7kfu8YWSrWDbfo5jhE4HFFMTxjYyQe9RosBLdB4MZTkn99yjJfCMAZXQxmePMmWVMwVzLVH2",
  "key12": "2gxQLMxaBs6rSEo1SjhiQh6czd2Xoyhhqvr1uRcn4BoeUUGXupfFNchUZUKPrbvQQ4QkfJHYEjFS3KwLSonj2fXc",
  "key13": "4QKS5X1kp8GEvsqBpYT63Mns83gSctm619Lc1PDTzLY5CTxmVWZ5RNLZQopZHDfJdodwFyso5Rbai2J1msQbsGGp",
  "key14": "4VVYN5vxw8HWJXxDX52HjYHaQ6PbAud5ZRphT6ftYTKxhM7EbbuTA9fTCdAzqWug36ND3SJrcWt163Pv41ySTSUY",
  "key15": "4gjwpNPqzigZmrYLZujXsfrJVaws177Wh2ynx6RU8zvRxtiei5xR7YgCfKLnAwzKyKhH65MfiNorrHfZyQJbN7Rd",
  "key16": "PueLG1TWXHoQpV7YDnVwLkACuZxMNqnBoaKz9uwN8G99TRf6LqhwDQZXc6ei4nSELWVbf5Pu2EN7QiPr8dqerQM",
  "key17": "52meqRaFM26EMF9gPo3r8ouMdZZSbX8jiNgvJppbpoWf3runamjN9VyAi3B4di5U9DhUF6cPiK7mTgYdbZqmwxSk",
  "key18": "7fqBaeXbKWjK94GJZoL9ERubnHf3a2kR93oeD56Nyu2yb3GPnk5wK47mfk5vsukVbaPQ4n5biTR5G5NMx4btQeo",
  "key19": "M9kH6QyrLLHqCA1bRbBthvT6PmdoritgoYtzHnosMD9jwS1Dip9o7x31uoU3QB3LNFuXE4Jj8R1h7ZK4GAaBPYH",
  "key20": "5gSJuyAuB96s3w53EG5ZJ944YDNQrDhZQ2M5fwpMtvBnc6feQzqV4kMMoWYS6hjm2wNZWtHSAvRJF6LjPJgm6EGX",
  "key21": "2RZoDxsYWgDnNfhDfD8JZCecGSrTvgrY3p3fUs6vT5Gex4YXGg9rjdHZStVXhzqTSrZT2ff6qZeXvfaRxC2XmEgp",
  "key22": "2qUAYP6B5cNahSZjbh1oRvhjqrgJhfSWmR1NN6MkUPLjw7aVvmRRDHmrWEXnCXfXs4QN1gKCioG5rN7yYVwKMGzF",
  "key23": "2x7hZ7Qkir94SAFyriCZX5fAGbnHtkbgwLSbUkcVn1geEj9GNgBmisTaiaFYGywGHUwk9b9TyWVKYvqbGuvcYZyj",
  "key24": "2Yqs1hxjdsxXmWTmjQRzaJABXuHYByZW7sJwsguwKKc48nRrJNSyUcvfKdascaAEUFuq7TfX6XVboeoBdoNbh5MC",
  "key25": "21iYgjBLhgLvCQGXy5V8KXJK3unQ3v8V1NTw6DBN7BB7bHDudDGDmpiS66fTkha7gxaoXCqD81nEmih5RLu2RB3s",
  "key26": "5qpDdUoY6UroWFPqcXJY6A4RtixXVfgvgf4Sa2fhHcbtR7pDAPseESTGstiWfXsUzbiGRVoV9PMBK8VaAktoGyKL",
  "key27": "5gbLPuNAMNjdHDe1h1Hfw6f7tVKgXUETqgzwMqyZTvsYsPH1vFku7xdy7Awxbb8VJpfcPdCZcnEeQJhmkESas6Zo",
  "key28": "3w45xdSHixguVgZRpoYQBkE2koaMfJeu6xcBAek7uFuYiKmyvePeE2WoczA5S3W8f8dHgCDTRmRigJZ5JCyKGuKZ",
  "key29": "2ESDcKojm6xNLsbewh2UWiQ3pGbbNAWUrFoEW5WoKGqo9e4mcLW8xRe8QuaphzF8bSykbfAjoKftNgVpgqwAnNUj",
  "key30": "3Fg6xRUrEueok5EngcMzxkiwYbYXNp2VMig9v4jDPRg3RkH8bZLBM5xcrpeM9SfBKQqEHjuHsL5oBaGGF6UV2TAV",
  "key31": "5BHHShd2rk7fYmUPAnPmp5t1GEUwbCvLPt3bc74jcnvpFvr2qCL8s5kghD1je7wEk5pRLWsbxYnigsLC7vjfmZog",
  "key32": "2XaNSm1Cjxnd3yuaL8EPbkfL3GLyEpX6RqF7RhNbcf8QfUMXKex217WY3Lu3NUPBzooMYADXYNojrAst2R7tCqzs",
  "key33": "3qZFnfeUh7AdjvfuMGx3Dnj4njtyrgPJfLFRWuBKPFCSezzyY3yk1atEUcwwRMtd4hoCbq2rxRzjb1T2qbPLj8p",
  "key34": "8oMnvoUjBumATiXHSYJ5gWPrf1kokFXUr45m7ap4fXxFVG7cio3KkHwcNkkXBxm51BexXvVoPwbbAFUZrhSEzke",
  "key35": "3xTKDLLZBQ1FLoC7nHLduSYAQPNmJwRq7FSsjVKmFmYwfGUXDkfcbuCvSrWkvcsPmVqqXWvPTtTKewYGjHCJNmTr",
  "key36": "2oqY2AV3BF73cGe7fbvivzYu2UeZAtc5jA7wNqrJxdA9CGrcyHhn75E3YYYy3XmDZ5FGfjXYLkgHKxw4tx4jfa2w",
  "key37": "4pm6fLzsT7t4hAoyo8ghtqpBG1w9TyWKw6uivVVDBbXWMq9ZsxJRFgbPD9ayfiRKrSyi6RpDjReDphgURjymYTsu",
  "key38": "3oyLTM9q3zZCy4hqvChNsNV999xGu8feY2XrmpjBNFdbZbUUNYCa1urtCWmgAc3hRE7sC1wuKo7U31gMbX6rUVpx",
  "key39": "4tEa3coHLJk9LQxFopoBxiE1eQVtAZaVN1HKT8Ymy9kZov9Cv1jt5f3LRfR6LVLtpUosuQyWECgvo4FN5v1wUZsJ",
  "key40": "4vrJvQn34r4p3jico8eJV1AX61qEFzCb3y1raS4xYNH8oBGmSP19bk9PnzFy5sR27v45TvikCKGxVkTvi7woneKX",
  "key41": "Bmn8WpMcQFVYUsJxKxyzMkpiKo7WpRzcABYnzUfm2FAsm46W6aXkvDGYEJxgp1gf3EpGcyVvansrizRdsd7erLp",
  "key42": "63LsD2iLvDwKfKyic8DJVsXLvqxZ8bNZJGSmjn2jgASwU1RKiqyfUyp6STb2ciPb5yYzjPqK9EWEr4eHvUDKkz7Y",
  "key43": "5ogLZnBC45JDRBQ8ngy3W3B73dnzscE5bBeG34PwytpGW1g8vLr8f16s8Ds5pbSXbMsH8DtJFbmeCYB3aFuij8xr",
  "key44": "4otpEVZF3258hrctZafcyaipJRHMUri8oVbR37oYTZrmTyWw8dqpMutS3NXRXCEP9zyL1W7xvg8yQcj3T9eLw2T6",
  "key45": "2ADGeNEwh9Y1JDuqUsFZUPVM56ychRE4yvbAzTPFpb3tV2oHykB2SFPhqUyAHSzandeqwo5kkLJhjp32fPJS7VJn",
  "key46": "3ZqGt9EyUHt4QqmpK2fC7r51djxBUYoaSxy3kqDjc7cjvx71qwF2FWo9m5FfScU9kJQ4qMsMDU8ZAKcEbGDYVb3b",
  "key47": "5kAT58G5uQMXE1iGazJx2ypKSE1wsAnazbwNiejBDq4wCQ1a9ZvZhwnfZDMxHcSAEpvBrgJ7uhkTT9FqXe4p49dV"
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
