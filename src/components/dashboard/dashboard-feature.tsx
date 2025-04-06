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
    "5KFjBZxuapfACJ8oAuUxCnG3pQTtNEzNnUcNFnW2tdvS9sdH3EBcHcAmigJyp3QXUtUYksk82vYjEKdBuP9S11WA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nsaZLW5JA8ECkUGvruWReYsspp6aTwMrzqcM29okNhW1gKEo1o9W7Ertj91tCwZUz9pKVYVmM4PfE4vcCMA8PwV",
  "key1": "4WNRc6bUCKeXknzCNk59xMNgjTUh1FVyGM4mkGsURgg2NxPjFMLc2NatfXoVzfaWYXVTWvTYBFCtTM3ovHcLXhCE",
  "key2": "32xMcD8k4sYTsfdFjNtxVLovUsTvofNSfj7FA6PAv9yTTdnGdESCZgHRivcVw4HLqXbphWAN6oPN7tgyL22VBoBN",
  "key3": "5q12UBPgsN3JSmMVZx11K2TJPyPZSQ2V9QhxmiPVu4uKEPLwS6g3oDNDvS4YnL1Az7hmQimzHnKyyEdL72W3Q5bw",
  "key4": "5WgPKcJk3GqRvVt9XmBpBuQpihtEciK4Tgm2HWAcgrdCJG5vY717FEcbHX7w8o37VrmpnYaAXVNciMnCgRkz4o7k",
  "key5": "4Pi1enPenk2PTs74eLZJwPNZfsRKHMdtPExgvi3jHFcS5zYrvBXqMTSV94ikD76JHNngJ2vMj2gG3kUEaXtkCdCJ",
  "key6": "3TnaSyrvm9E4ULocK1ucmoUfL2R8R4rhK64AV6yVxsvQpoe8XdWf39fpD6WWPKVNvqKkRBo745sfweirgxaGpzi1",
  "key7": "5bCKHUthbWKrZoBup1CFXvZnta4dtkURHKD8TRqmgUA29JCPqEDgMjyWrg5qaG7JYRDnSZhY1Be4uBB2grdYK7oP",
  "key8": "4mnGZBkVznn5UmVajb4c1JjFwDuXFBG7gXadGonXeS9FZc3LYTWKA4PXpKuc2qTRouX18b14UoniRS3Muc1Hzs8e",
  "key9": "3f9SWGd1cHTWbKmRK4d3wd9jvtXjXrv97qx77rHaarNeF9HMjsUmF5vNY7wJT6cvvZg9oN9TW6EkPkBbyJ6FkJtM",
  "key10": "2nfcS919Ag1vzS3Qfh4oRN7wQefw1QvtAZ3CNmkQmzR6gLDKmo354V3MNWapKbo6ZAw1sPb1L1VgirMnNj8qKCEU",
  "key11": "ZyLMZbXrtV313pfxRDtFvGwnnp9VW3TB4DN7EUg34kCNxxoQdL3ddRJvCBwD7dy5m2ehFpEivu4dGXh3y6TBwtj",
  "key12": "gDcme3A2FBwQEnbfDYADoE46keKhREjA67JivBhvwM83oobCHzFgqkTFquXR8eaaYQqkz1Qpgtei119LMBq949Z",
  "key13": "UotfLxuHwcZqqfNgUUTh9tJiRNv3aK3M8oxRoM2mi6HqCnRPhjg31xnAZiCqjuYCnUmpynPdUqii6bC25MBP6Gz",
  "key14": "2pRhmf5arRBfrqBnArAsyNVL5s8oaKJFkRphcLqQV1BzmKEp7HAVMdhVHmAjotiwRD8kKGrPEEy6Bqrr3LW4xpiN",
  "key15": "4MgAu9TCSJYpfo9EFoezqZyEKqB4sy8WTLzDsCi89iwH5hTeLatHtAAr98KcWm8RaNLN3fAkbqGgFejC3GPVTMAu",
  "key16": "FYQJxLc5zgAKajDipLGtbqVi6p9n8DGFu2o886Gxc16Vm55wi8XVTiGtbJssLepkPHGJBmeETBHqapifAXo8tT2",
  "key17": "3aaWFzLvrczmMuzSDX9knnENtk6xcSumzZfHxdNcHAGaGT3uB5GV5zYQb7PnM5LkEw361EdbxjGy7g5D6hEheBs2",
  "key18": "JRrWmnpzm1WPztaWc8tUHxPFYmeGWpVrTU8h4epMV1oits5AacM8ArotDVLoV4snuFpjoQsYxdkDt2G49aiZ1MU",
  "key19": "z9s5RiwwraR47auMdEXyXWfcQuMKnTQw5Pok9YfxtKLRRo2aPJzv76PbCgQwPxFiEiYDCUnkz8yrdB5MTPgp1YT",
  "key20": "3szLYSpfGdW3RuX6PLsuvvmC3k6Uf2LXms5xL6qgkLTRRCwsu3fwJtHLFDm7xYPJxeGHwFj31wTwvhxtD1M14ED3",
  "key21": "432tVwJ8tpZRFGWrgE6rqsL3tswLrEZw3ivGMrTto3uPxq66Z4aGKnqePKS7GDnuaBngA56Qg3CSwJqZdFxJtfEH",
  "key22": "5peZioZzu3smfJGi9JeCG9i1uqMmtLrW5ciHFjnU59ef5DjtY48DzaY5D8KsyR1H7V4wytWLtcjjBt1TNVf6LL5b",
  "key23": "4kuJBnJPc86yoRJK1zE8Yc6Fk6NXet92ugjRRmvBNQ4js8wMxNfzcRwWZiRTUuCRqaM9Gmxv1jafA4vVq6V2F2yJ",
  "key24": "4CeBWoueR7FGyt1oJhRuLKr6UPA76shxbcETXQbvLax7BNsDUVePW7WEDACpu4qxN1nYEugwfE9Unnqv42os31Gz",
  "key25": "4ce11MWyiQnkoVkzCHLEwEmSKGKX9URYhWcfdWotJRAaSfT6BfAwDmJd3VYkYwth1zBwkyac3mwmuAAEYos5nCXa",
  "key26": "2ZLEqWyRJmpHT8wCCw31U23F1njAW9df71Qh6q13X9E9hcRExGmfVDVwDtTPwwaoAxmyTxCfkWfMoabiFqCB628m",
  "key27": "463RzYm2x8c2A3FrYq3pRAfsqpTimCykPJPM3he8oSsyDVxfUKa5a7uuR6rs1Ysiexiacm4DcbfD8tYGJSvNqRYK",
  "key28": "2uQ84TR8kTJ8o9uq5vXzSFhL5x6F1nFs3zxshyUd7ZEVZ7XSF2LX4sXmpSSsjgDUeQZnKgiMQG4mbAi75NJKu2ph",
  "key29": "5nvRG9wA3NzZyivDqomu9mgzh4kSQVtBezwqMctrfcTJZB5uxdCHTcihCp8aLYCwnN27jiaRg5dg8QKHMF8tUETb",
  "key30": "31psExr7u3U2cx65d9gUKNabC4sDWtWCBVjwVD6KstUyKwT9ZQUJ76UG7u9JZkAyzsjePgLpMWwajN82SetsVcc5",
  "key31": "5idEX7WL7VrV9X9fmA87Rhget57s3uPQJ2ibLeqxEesqNjuiVnetCWaZq4fntm99suAt4FdTx52wZngLHcNZ4hF5",
  "key32": "7bDzmN3Yk6MGtJnoGHeGEdkYn5dXc6uiP4hKiHmLjSGh17sFrZFFrF4beoj2RFZQM6cv9RVr9SzzZAXGKoiAQwk",
  "key33": "5ZRibhzgxzrgQp1EByG7WUPeBdzxLyps2tiA7WUjC84ZnKedGDpSS443jU2qw2nsnh4AiCfn6iLkQZNazbBG3Smi",
  "key34": "7Xn54RCcoNv7UTB2psjAPuwbYiLEwhceaGBARf8GtBmU2JYwn2HBSWxW49UV8Unc1hxAyEjrSCnNucnZkVi3ZkT",
  "key35": "5XPj68U6792LNVwpTBovCMVcbEN4UA1n7yEzHJeFsH1pdCK6sDzi2h28qNskyADS52TmzeiCvjW4Bp5Ax5UdNr3P",
  "key36": "2NM5ci3jHBFwdjZJG7e7N9uwqzDVihzzPBHJm8daQhDaxFNuPsRfLDiXWeYmuL2wex8pa4L7E8ZWVUU8LupTR29X",
  "key37": "55kVSiNKDeXWeHgdhSGQkM4EVMv2b1ThKxm9fwbpZ5Jnq9c16zt4ErXS49e4hMGy1Q33oCzitpKRohgDFgDv3tFN",
  "key38": "124ALpc2mimxHaToY4zaDqjK9xtkekRmT2wFNnaSi6KAgxhAPHw7Ks4FAqTouqQCiB1Hk5dwCborQC55SLEo6eKW",
  "key39": "4baa6VzUYNNtbumg5urupYxkuhGhpBvNfW3XNv9E4s6YQoQgAbq7WXBiiedD7zL9aHJYfZRuCDWNfdCUnBbEu8UG",
  "key40": "mSYFqxNJQwRCgumHSxygfvsx8us5RHBbFZgT9EWQV7KhGymZQsP5ma7LkqFub8e2csndw6veDw9NbdBEETkRcma",
  "key41": "3bEheTZqqDg1CL2Pzsvf7Unb7xmgQcvjaTom7GC1Q5ksZeASQYKXnEysudDftE52VSzUwXXYmCGCECwTTPoJSLFD",
  "key42": "2Cg1YLQ1qk7yZ99tyEb8ZM86mLyLKX526wyTChEbWGufKSWSyGk3vZ9cSsKMBnhxe2jx4rihiQtq2QP3rzPdbAVE",
  "key43": "5ES2QsXmJbcqm9MhVsMnLpY61o3VHByVVtYyEZ6Wj6vHqv42iAJHKRHgYw6Y4X8tTzUXhPNynF5b2aPAFSiRKbEk",
  "key44": "avSoEaz8jxQueGJv6AxT8a3nxmwKkY8o6upHxN6mvxVZ8iMs7ydqh4YMv5YF5nsxiGg5TeTLXZFyZGYfTRyxJHb",
  "key45": "5MyHhVHw5gPjsH6GR6pbXHCPb8UoS773fgjJb2tEFDezEjxvTfSQvoK7S7C9DFtcQM9RLJHny69t67e9ZVxkvh2c",
  "key46": "4jutqtg3mhNXAQ1oD1UBuoH7VtxJNo5PHb1sbbvdhbGLipw8zxVTb8QeCGpm8EYT4xsMmoWHjjPb3LmCffZPXefM"
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
