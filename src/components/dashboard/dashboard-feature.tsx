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
    "4TV6dT96UyVweJxEDsJRrSd1C1MBSmj1wjQ66CVq98ZuzjkWntpJYsdATPLm1YQ7ZSdzti6iH6n8a3tGSAxH47vX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VKXaYXXMDZ3DTbfCK4bp2meYhkhmigxaZR6FWE5MAPW4AhFZnDUrULTGohNu5EBQn8ThMYpiiaWoKY4MjHma6b8",
  "key1": "64yVTfmmnPm5vYZBkRm73RVi8oxeRcErs5w63Zy5iKWsCPjEttZxk9LvL5KvbeJyvjrzad8x9HRt3289AEcYfgFJ",
  "key2": "4w7AWxdpD1k12ULv4wuHM2ucjPEBZtvkGzV6bg6puHCSpBzk4VfCE8UTeEEwyrJRXDFgQ3sxP3pAxcYL7kJpT3n7",
  "key3": "4AoLsjDSbtuSi1RzPmXLHm5AfDkiBX4F6UVUiQDYjh2z8KSh49wzRcou8b1xqxGL12myiPLw1muoxwC4s2rqeSNF",
  "key4": "4jSkYiyTcgvo5C4ZdHPvGASfYJW6YM4V2rNYoDrpt2VLwLh38tPyH94DwZKZhuxq785vnLMqjX2csw2EXok2s1ri",
  "key5": "4CFrVkzM9eYSKFXDsBmCn4hsq6EiDMrWHTUKEq32mqkLb8ZUDjXyFQw9Kb5zkd6e1mx2HwjMqwP8xdxpexgxkabg",
  "key6": "3a1hCEVpzGGotAmsPwEFBFQAeVX4u9gJjyctt5CwUSiH6AAdTmzRhaUtYPg2FevY3vYV7joBwonMnp5Wc8zeHWqP",
  "key7": "2UHqFZjVjHkXHvsHVxdSFiTjtM6Enz4U2pFo4GKPCzWxsxxKQqYD92RqsUYhxKKvojfQEC8NLPbcNYSi228XtS5j",
  "key8": "vGU1gDjK8WyHHg6ogiRxGSgST55nWHdVzvtTDAof5oJhgn2hgNY287QYabyH8aFYrH3VbFcnEH7bRV4JxMLTDcW",
  "key9": "5P1YnQy2ysu8xj423G3Z5GbRFK5SFJmJkbfXuvB14HhykNNPrrq3toDoX41GBeHNcC67v83qYydm74T7VN1X8RsG",
  "key10": "bQyeL5gcP2HccDdb7NCy24r83LrPg5wnn3jmQKgVLUK99D8exmiZ3qvVSFqGZrPuheryFxjNMDtNJ1TWCWhjfK9",
  "key11": "3kNVp2BVQoHESzeWwieZ8MCstGehkmxVuQRk7GNj1JZZ9dRG6Wn9pdAtZ6gzSkNe2Zs8HuNXnevLZqMF5Xt7T2XD",
  "key12": "2PxMMVW3xv3zTEX3psJwQSfUhgfjRBtqyVFkH8HWZ77PGEfnnjM2n7y6cwSVfCH1LiqdjFiHkv37SvF6tYkVZnjp",
  "key13": "3N67vTW1uP5cmPWxDuQmrs4tYEzdBYB3bUEa5cWaMhpLWx3BaRt5BnU7LsAy7HMx7EmnCQHqQkPGMq9CagSG6sY7",
  "key14": "2uTgWy2RYLQhxnzXpjDZUKdeXwtaMc58fXmQZ3h9Hw3D8Wpuj8mxQ6eRWF6bdTqqtYHwhL767SzwrGevu93fGRfT",
  "key15": "yViFq2p4EC1fsTbnm2zhnaZ7fu3ZCGpcwyv8jnC6qepHauNtRh3NAN63XpohM2pdRJgPAHWoWsZyBCH5dmaj6Ft",
  "key16": "5YWhnM81WcsscBcDhc9pCKkg2JZHJDYx1BzqPp6n58Gd2TfLBL7AQvZWhgovidq2sahM49vGMJxvEmrm4SZe7C3q",
  "key17": "3GgTDPMCFEkNBmpqpaoGKN5PLwqEweAidUW5aEeMcvfd5ANqzzi56VsHezkZ4ByMfRGzwmHpAKwpKf7hrhv431Tb",
  "key18": "5y5fPFGhvs2WhNESxRTBT55Ug7g6rVC5FoppMCZs7UYK8rdLyroqyWHJgjacc7X17eurp5gzY5Sgp7EwZULXfTmN",
  "key19": "vHe7negd5AP9nSWfrfM7vJSVKrhkSYCa6DB1BvkuZTtiQj81T2SMUQ3qpr8QpFuA5bbz2kABrfxuuSzxg3YJMU3",
  "key20": "5cA2DCVn2FpYC1XXeuFqfiSqHZhXZYZVmkUQWhQUx2YVwXPvacjQBHETn4hguWoFH8GFiizPztZfGcFWWjp4vRnb",
  "key21": "3kBhGoo4qyqQsG2DoXi5t4tWDdAa3yG9gTUogmyCwS7WmxQhG4Cz2cfUbK1ZhRAypqLeDqFxCC4W7mn2qVj5WpSZ",
  "key22": "2TWyZ3R19am6d6dRK7p7qbLs6dhmKeSb6zEWqfA2qHQzsBFShiodoEirTPmHjf7byNWoLQAtYoWxv7BmeYRkbgvz",
  "key23": "5922isyHb7m3kC46HXzZFXQgn9kyVMqGCFohoyrHY7oj1di5BbompsU7uj2rhngTeezuRHwFjoq8ZiiikMv6h3vy",
  "key24": "aaeS24t6Fpjy13S2C9PcD6wjpxnvygqwkmkGPaEr97RyFt6ZYaRyifLY33TBdiaeBqktC2LUNAHS1EWHTxg355i",
  "key25": "46sXmr9pLxRhsLfneCJXWTaHtjyVJ4gCkzmCvgHaiayRjXzd7dFCKrjddjoUkKmjukqAeuhY6rzd99N7NyQx2DKa",
  "key26": "4cHgt4B4AUQhfUnUp9bBPNZ5tKTy1BjFRX5J13ot4MhFHe3oA2zzBUVJuh2x4nUuNZcQsV1nPFhAK82SBpspEjq8",
  "key27": "4eRe5Wm5RvUPkSzKpuZm4MwLMkgqCuGNFGnoryXJR7BAdYayn1UEAZocPWUtXc1htuWVnVqXbkfXLWEpyGSRoYcU",
  "key28": "4Sav9vB7Ur75QkuEmwaEtKJXJxr4JeKSgSiLRKPL8CFRwuCMzVyYFFDmdn1NPSfB943vgkhSEtTdiGNvwfqnmVQd",
  "key29": "4g3h65gSYy7WMT7whfui5ewD4ewY9BhRZF8KQcCMLFRaymXsXJYmPVED5FcvtGUssqMR7coytxCeAP6XCkzaxaFU",
  "key30": "4QXVhZPxD8oEsQYqfScUfVdewH2TBRChVGabkU7WpFHQfXAjRyj843ZWgTXJuPxeiA5z6jj8VG5ajZVYRANWvHWo",
  "key31": "2a5ui8g7qbRonX5C4Un8zPYiGFGk8xhorFGsQ4MPjdxwA2qMTJHLzvFLfm6peCShbJXZwDCoDhfscZE8GKwSamDN",
  "key32": "wwphtbFKKTBqHXiVTqHqXSiRK8kiXCVrenZ7RibtVtByXtm168txzysbgHTGsttZfZfJxLx45paPd4gyt7ZJgew",
  "key33": "3JVKgAwEBjVQJt58anhRerh4wB1NVjbVB9A8FrtABDjjKTWBbXmjirrC92QDGnDf5jKR2w5PZqSQbogBZove23vs",
  "key34": "4b4qvrUmj7ttnMd9zQdGTQmSjr7AkW3wW2954UmgfRgAiqYB1VeaNjAma2NepRnwXUPGfTreeYt4PqknhHzw5u84",
  "key35": "iyixmPao8SxCZ8e9DmdWSMiUe8Jnrq15zpeMQnBMU85pBNrf17qcAmDiLNLPRsLaAuUz4HjpMWE8fpYAL5XtTsY",
  "key36": "3Gv5BfBmyZJWYejAMZWaJvtUbqTHPYp4cKe47Kqhqoxpatxg9oYSRXVnSbyDBeJ4u7ACKpTXupLcdyp1Dyd2mW3d",
  "key37": "3SbExy17DYVGxfjW2yFzuUDYjpEPymweqc1Jk5QTE4rQa3t2aTwcnibzs1UC4hWwQaeyoYa73jGCEDDdPrhLSeSP"
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
