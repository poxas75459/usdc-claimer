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
    "37aU9qZMjTA4WYZgaCeKkix9Ag3Qm6FaKvuxpVd8RgB5A4tY37T9iz7u2Wc4miLt5KLs5q4axGniVa1wdiPXQvgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6718x3JCfHF7LgJGjmnQ7xhUewJPsNkkqXfVwoNjy9BvqqtrX72nXtKKqgGxC2JEeGmePS39t9yFUeSiLRsaWZvq",
  "key1": "3KLRtQvj8b3352R3yViAYgaLn5uabVqD6dqGBVHHBGCZdq938MWKPcL8bG5XhBMbAFtr76MNd7oV4ruRGTW1qnu5",
  "key2": "5QTHDc5DUeF5jMK2jAVikh6zM7cAoturdbdCM25TWerMJVqjAw6NZw2W6sFStBbxYaCr8qtToecy9yqf6nfffn8e",
  "key3": "hF3BprRtPkgGNkC7MrAkZWvAbsLjDbyzo78yW3J5ZTCNApjzsFuGotf1Xo9MjH3oZPkxz428CfrXRnE97urqvXS",
  "key4": "4kZ7ZsyeEkEJvzr1sQcxUUVg9evrGnv7uLWTiCqh8VDv6fq3QnrcnJ8v3G4z5RJN2YSk2LA6XfFHUwQeYVvjLCNh",
  "key5": "4mfQ3GmZEZFn5mg8VKMsBon8HtEfJqZkW8zgsBBhjNVdYZPYVddJQCwmQbdXfhvaZP5HQCXnZRyL4o146fn2CLhq",
  "key6": "4VZYFuyaGjjVCaQHVdXVbqdrZx958eLe3zBxu9P2rxg2Rbeg1TcWiHgTkxjuQmRdj6ffBWjdrg6XarkiVvk4aGhW",
  "key7": "2cN2LCgrQyRiupcpTmBkMzka2nH1xTgutBbqyvZnz2oLm8T4FfJMBnHRqZzyrUrYBZPXeNUepYmo5UaoRtYeCVY9",
  "key8": "4WL4oQvbaMoFBpGZHuLFeep7Gu4TM555pDdJm1evL5rWmoWuRHFbFvbN36fuNiXXBjubXV5DYrUgkpdK4D1kf5WF",
  "key9": "63Z861KL7QM52DMynEjaCYdo77LJJ51DPsjQTtZVZ7zTyTjwKbWGwtvUWFBbE7PABHsdnmmz1Y9uZG9kty9x72mG",
  "key10": "53YbBWCKNyZhZ7T6ekgTM47KSkh3EHs662T7B6N9Eu25HTS35ukwBhyttCw2HjoQ8Dx2jzYqRDkSaCotE5wFSnQA",
  "key11": "2RPWUC8rTaW9krgvvnBrrrZkQjYiPabEx9LuiGKEsbB5tEgcthMjAZpRBRvPWZbJoRe6myZSfZYCQDPSjgy9FZrp",
  "key12": "2HconiDZ7eWVKSAsjksE1JcXaypGhatAGiGTLhbKJNHG8mA3Hsm2Xg3xwbW7NDqgocZUr7cc8XeRQuW1YeD4pyH9",
  "key13": "4haJNUaoCHqnXYXJyyWTk6adpzh4fUJRtQ4okFiyZ5me3xtrHQJdY6bX6x3JjvgjbA5CCjccwVAdE3CtAGfqoEhJ",
  "key14": "4Q6dSC23tXMar3HbRXxPCGq2vbZ6QMZeYhQfHVs3w34P8ifvV9b3aJHByuuncF3vgczEyHNoygGXsj9tLtiAwyr3",
  "key15": "65U2haFstYrbQwsNKNyh2fijbdnRDL3pfqkhr6f1isVF2bmoqXrWkb5HGXeNWFbmY4A2peRttJsUozNaXegyrR1d",
  "key16": "8VVu2ribtFSGaYN3pKbVhC3WzdaTZbgFgVnz5suPq6F2BKgNpNCYQcCWac1ockaQo9Mt2axF9BpQqMfv34Kh7sj",
  "key17": "3Mo7iDgnfF91VjZ4KSAyCQayN3yvRyqFg1K1yw5A9LCEpZnTyTGTxHgkeDwwGNaGzSHTa8nnLuXuvThv8U9aQc1o",
  "key18": "3a3g6JXYbY9GSi2Py1ty8SZfBDmaUPpCXXAdwJ5bAcZ5Sa9tgFYqirkA6SW5JYgKn9ZtBxaAkgSH5XaUbGivDpNY",
  "key19": "CiEncR9cJQxeuqHmqgEmtLkZ7n1gHuGDRv5fowAriAWSt26sVmF2W1qEyPcgjSp9vESUuvQjVkkB9ZxGq5zoNTW",
  "key20": "3q98ykfPXsRbabGeYVADNKgzXjaWQZaJ5vsesXabg9BQuKxFGyCn2RG3skFgX2rEDPu3c6UFs4xuQ81QN9wfsMph",
  "key21": "5r6Aq8kbuqZC2LqJ1yWG2mrrsx5TqVaNpDYa9ydDzPfErJ9tQ4vwGvouUCtqFTeEVn2wrCkuucfxMCSbTS7WBWze",
  "key22": "5KBcaiLnkoAhPhYxsS84EQFX21yMb5dyoYpnQf3i7yaZBjCbD6yw3iZ5LZofRvbfrqn7Yh4uQMeh34SgqLAPuFto",
  "key23": "2T2kJTtHYH6DMU5245Quj5prPBfXvqseuq5y8RA6ETdguDS8z1yD8xGcoDgqbqPC4Hqx7es5MAoJfkuFYQSQ55XN",
  "key24": "4oTxdvWJr6W5Exda5wZNua7zWsoppXV6yfjPuXQcQg7w2D4SPY7XMByxg5ovAeqNsmNz1QTVUoCTagLXyRmutC2L",
  "key25": "EncmZM7yCwMy9R2JTz57SDMGJNv934kA8JX3dro5Tup9hhByJV6m99UoNkLKxMD619xADhK5eL7oqAEj9dK7ete",
  "key26": "526qHVz98HJaXHxZrGNLPkX2CKnt1AjcpNjc7XZxn9W617yYQqxkLoTe5idQ4pXpK287vsKTcL9GoaQVsD1SrbHe",
  "key27": "tdjJ2Nj15YnAWjTJEw13Wd5yczvEgotuJzrbRqHrgjNsscowjqDW6FU9gAgGCxWdnWfdS76voCbrnn8MXMqUJ2o",
  "key28": "2Jhi6vKFyyBhWc4uyVzzKqkhrWsEp9sYjzpyxbBHYAwBvyquR6sCyzhYsfRT6aNB9j56wEHnshMSYSY3B1JDkJ5G",
  "key29": "2zedzPSJPDJPj2JZscu7uZS9JvxC2xvv8HupXoehoyvAuRuiiQuf6rRdzasWe5KKQJGrx5GLUWu44WXzUW3nmaF9",
  "key30": "4wS2nfvQQx4tFABsYY2WPSRBakYkYfrXZEa7qg6rzwprcRENv3As63gupPMQYrqdYyCcUBif5sEDvs2Z2kbYfA2d",
  "key31": "2YGJRgkxAYzNK2DV7eGzPz5dzVNiMhhx7keye1vBvz7Ew3Bm5PVXuvG6hrmV8Hu6scSPeuBWF27ukir6yxwK6iGj",
  "key32": "4m9KbCA2YBC1hnvwKuwep64CBrWkvodwvuNr2bdi8c2j2MNppK2mbuxim5sA142ATAL5HucQBPHkVeudzaFVYEya",
  "key33": "2vDqdCengB6zxu3v8dM3aGF53QzJqSmVYn69WQunQLASpj1SHqQiWx6eMeCjjqFtLZut6hdUzhnhtK29iK2KZjTP",
  "key34": "2jsSw4hXPdxFUefkAQLaPNh6wscis32V6FP1NHqXgLftK17JuF14KRTmpBxgd7JkRJcnKMmLVZXngeJaSSp8SkUV",
  "key35": "44fmoyaME5zb8XvNdAopK4RrW1hgSHhWx3vRELcaPdPsm2S9S1pvUyi8SZvsaL3XKiWDVas7rGHMbctYVAuFeDzx",
  "key36": "4CgFu2qSw4AokVZb6aMT7FsX4TEHubj3Cw32WvBsxjCnCruo7iodvWGzmgu6bhThqpwZ1jiGCThQLu9tdd8wTwa7",
  "key37": "VJzDc2cehEeUQ3czMEntTTVa1RQgxd57RUdZEorkuh6FEFLojhXnaTvf1EZdigGmQNuBMHa4gJVD6Pb1DAGDt46",
  "key38": "2QhMx84dXDyVZjgKJPeDNsXax7nMsLvoK7oUpQfkYp9mH78GXViMMU1hZazLJjArLWLpfgzsYS81VM2JLzvokGYy",
  "key39": "vnyX4YooagpgadjaXDkzwnUrD8LEKfBLGyLnKexwmNzV4J49P6tY1agfab6SSxtnWxau9iij7nBJCnsVaJYF4QM",
  "key40": "5SSnH4dugeU4VBmfP7MSjPEvPrwuXDdTdMiCoQPMFU9Woo4rmLxByr8sc9kSe5zzaNVEHz8i3U8kxL8aje8i4WJ3",
  "key41": "3geEm5DRbGdPabEGc8M7AstT8kdsSyGHy9aT3gVSsTixd3E7KqxMveyKeNXrvDSRvpMkGPHYs9rq2rgZs7xPQsnp",
  "key42": "389x1QcGgsyQxdqu1HiSeDPHf3U68xrnZTnSANyvnVCyqeuweHXRBgnrDDxkFGPiy3dhmWfjTkw3hCZybMfPqMyb",
  "key43": "5XfSspL6vAwEUq1JFYdyA26eSHcMhLnHS2s13xTvvzn6JTrqd3a4wb7CtcbRnSRJezHZTcH9jzwFgRjNRbSshKGp",
  "key44": "4fAqruf7R6U7mDcFZmYbJ5i69d55eZ7KJsrjtrwyJDpgRUa3wsi7QRBsTeTHABM4kNcLvYrCNgC8EeyJ18xQvUdN",
  "key45": "4QsLtvjib6aG2qpvKjysuv4bz5rL7nfcvncmDoaTzZmGmkAeBUrPE6FBD3Wp62yFx4FN4bheB7xFEPSV49TK236D",
  "key46": "ojWoYDEjA4bfw7LZuhHgpgsQM9rNVbKAv2UyNQyXKa9fn6LXzVuFRy3v6GN9kod7eqryNxGpXWyRSEbEMnV9Vro"
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
