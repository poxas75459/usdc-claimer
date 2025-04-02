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
    "3e4dMBv5Y1ifxZtSj3jy4F59bFvXpL9d8r2HMDn5iLyQ6fEnF3oxJsE2SXTLRDA7KTjcp7SkRVh9XLiMzfCjVvj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6192HMnvtrG7BcHZUPWab1HqNCYQE5yVQkQ9UPckxTeokrjeWAxF1d4nfkJSdBVZojTiPTUiyTNqPkXVYqhut8UP",
  "key1": "4rq1vpyR2Z93PCZm1Hm9qQEyECme8Wto5PLiHLtm1SzrwuAsn8X6fkzVkdj3dS6rk3ZZR7kMkgXBHwJzSo5F1CeR",
  "key2": "2U6UbUaQyoWzwq75qjC46ZkCsDpsqinUCgdwtMQvGy6fArjU9dpv24VPANrWDyV97hGsbNxL68GmYrwn56yhnNU",
  "key3": "GnJTuUBJW7sxuZgy7CWpWypgZy9cZLDa8fFWoYDGJBDCjS24x4xwdebu7L7ooM7zjE7Nr89AFGsEkABL1BCp3w2",
  "key4": "31w5bojwBspFaU5YEKCswvzJgU6etqB1oVVy6UzjaFnAMJ7jezA1up2vNnabfXq4nDzJ3i82Abq464ZnTM3JUUUo",
  "key5": "5QgzUK8hCa3z1v7TavpDDeZHD5fdrXvEmKnpy9bqgXSJHvwqkUi4EP8sApZhzpi1W3a4Zdmca6XPL4L45q8KBsPD",
  "key6": "4LP8WABkxu3yiS7xcB5s3S9nLLoAwNtpPbR3Bs5dNLw1SDti6cpUmWQV324DacjdsoRkojCe3v6NKHhSuPpB1gxn",
  "key7": "2tnmKTusFG1oskJkVjJce2Ng6LRx8YxiE8tPaeCnxjfHyuzZ1hLCbPnV9hCnoK79fJNtqK6KoYsW8zkupzGLNkBE",
  "key8": "URCgmFwVJTDpic8equD4VG75tw7Nu9PJaeo75DN73iEbMjFnmv25LzJAYvPka4NnXZF89Wis7nRh3qaDH71eWSz",
  "key9": "5Wx9AYMt5FBfiWQhEkwre9qDVvJudRVQpdc4qAuJJ26Jrc4SRrJDioMPWTHKD6DnpTEViY7DRGyz7aDzSSypRBRA",
  "key10": "4cz3nqD3t8cgo8L4ezgc8v13MZW7DYVaY5R9Ysuv8WFv6m4mfHr4tn2qJqFEPd3Sa7CHYRiWuXeGNvpYDPgG7Fdy",
  "key11": "5NTzrvsNqCCkL1APdjvwLv7P9E5MY9n8dzEVB7hYJCJjTSDPheMVbXFQpx7zPM7wWiCpiMjv6dkUrC1BNHkCaDi9",
  "key12": "2ULMNFSMtPNmC62YNtY7hWMJE2hZU6uCFvS1eZTH6gRfswvedh98StL8Z6AbPwrsG4gPYnB1uPUpfyeYsHPwARXc",
  "key13": "dV7wqPEAKWChQokdF9wRUZKAXDjzUw9UJQ13yLoiwkbmwnxteVFYJt5Ud66Ai4tiyeerb6FTJj5XPhwR77Fi2CN",
  "key14": "2cNwdajthRyoVM6KbmnEJMF4sw5L4dD4AoqZPcRcYcoYXdzYwEPoBPEzdZ4NyMY8Bjp3C3cjjCdwVgF1ce2tTVD9",
  "key15": "2gzA7Pg6Er6Xx5ck6SKH5ZcSZ1GNs73XzJLu3yKFvZsexatZZEANXEbSQi3twoifivsXqfP3JVqjVFoiiUxeLuTD",
  "key16": "3cRcBk2WMPu2ULvX6yhodK8tfSEnedxTstcoe8DjcjN8jZxenPSEmcDUcaoHxs1hRUbvu8GySMykEKPUkK9ZeXrT",
  "key17": "5c8aYBSJ3VSNUeiCQaBQTfhowFPNJShHkUkpSi7ve7ZVWj24VFJTQEEqCxj4cHkEzZRF6QKShc5XhPqSvViBxGcW",
  "key18": "3Rzj387WiA8vA2s7ov5uspUjpT7iLJ5nLteVi58478iXUN264R596oBdWW1ooyGyVPLMutUdVqEnxifVnMDQ7Lje",
  "key19": "3sQPrWm9LUr6vAjBBA5PmBfBGNtvdSLpUC2WtDudGQJ1mqwXiXP3r5mKXWJMGDQTGEFc16vVeLE1mqfjUubKF1E4",
  "key20": "2aKXiq1PZig5dk2CMATm6eqBAsNHbGd8y2xuUaDowGXTnEpFAwi6qnhEcdaqzTDtgYUeUQ1pJ63gRS7zQkMTEbfk",
  "key21": "3L3grE2iYQ16q2hJNJ3c6EytT7vfTs3jGPAW9S9r1bBwWBjYtjQq2jYyzpeW2qMmNY14B3ZmDzLS2aZtYH6Bsgbo",
  "key22": "31bBpg3keCoYTUXbD9wM5c2s6zgJAKPtfc7Hr8H6YEEvbeP1to7g5TJWacmKXjc5HH1GUUbCi6uKGqQNWBYoHR66",
  "key23": "RLoEZfMhtoKUbbn2pwyoXqteiJCR5S8NV2QGThVyCwJD8ZX49ehkpQdoE53Geogspxbsewb9RBXD9XjUuNiwxBL",
  "key24": "4wqwLch7FKrf7B7ND955jDQUUxb5BpSshgx85KMFzd7B9c8J64kr8w1Ay2fqwFxYx5UVimMujB4AHuxdSBHygumM",
  "key25": "2jFX4m9NnszVyK9JSnkhNfi7nmAqeJasKsY9wteE3n937rNsfU8h8BVzkvrTRnM3ecLKJtkJaDUDCbcGjCWdyzTV",
  "key26": "4v7wtkuB6EK7DBjYxyjQwv3hJqFuMwBoUYdpRMVG6fxhqKR98nsftGLLuswtm4R16Gxt2p6iE9Rn6z2wbAJqm8hs",
  "key27": "4pDJbAMMNV9S5q7cBQejc46NvMnU9XXtixMU4zBAaRHNPycZPJ3i6AYMdfEfcUaJVEBz6Q2wa66qZP2qc3KBuUd7",
  "key28": "4HXqmVX7LgDRt6xnwAqAoZ9SKqSVxJxoSgoQuZwTfNLmu4t8Xz9Mok68z8f4BKcnrBPS8tda9nDvtUM6MqRwcr8j",
  "key29": "bKZm1baqNDEq6ENHEzCHmi3EDwKLwaLH3E86jfsb6XVsYwBnEFZ1Fd8X3ezZpQWXwRbiPPwjkNA5mTuS6zaj94z",
  "key30": "2gFR2iAgSXM8iLy3A8daTPaGjTtkGUdGQu61oej6xJCqGoUs8e7Uz19hpNLdHA5Kn9rxrtjctttt8pTGbjFitnaC",
  "key31": "dUnshqtxgVsKFKkFxm3h7i9V8nuXMo3gTej6FwdkUHGyYtSVauBAbBah91iQE15BF2S8axtdTJRHpaye5BxNZAc",
  "key32": "59puTMwJetwgpc6KRyNmrjQMXK7nrejrGYYsFgqZuHSLMhjaSesJRCwkzETSyBSdYzcc8wGJCqmBUiGGmydFC8K",
  "key33": "5PztBimJ2DVGdHVwvKcZaBv4PVkuXNapxdNkujP3gpz2seWXfZec7N3ig2kRiHks4X5BWTYSgq7w2zMc2AtmBPP7",
  "key34": "3edHgLd4DDU6TJUQ3uVrkL7uCvmpNEHGGTmtpBSGSQux72JxGrE1uJimaScfQ3dN1ymosPyf61y8SmViQGWNNFbo",
  "key35": "8cALuFzVnEb2QVNYVtmJ4YdaNtYTGanbBZwchUbeGNKcFKvQ1wXiEMW8nx4EaArqtfd3KT8yEvUckMUsSUt3T6r",
  "key36": "3WYWd35LCWconLNxbind4eCS4kic6GMkDAjxv94tWLQJXGkCQbXwWaYnChh3GKRjadWPbZYinSDvEB6fwiRook5E",
  "key37": "EXhFCjDRokKLi5YcLdqrPhHEi4qnxEq6aaCE33bgqKLf1HMoHFDVMFb9RhMv4tzyr4TxqfG3XYDTwkyBbSAUpfz"
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
