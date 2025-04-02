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
    "4y2MbgCEZjZ5TasGkUADDTAbYUBiheAVwzy8jr6kTptaEqHohTgzAhexAbX7YrcfXKPbRbp8Q7jn2LAGuGbj7Ms4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bE4FPusko7MVcozs1KKQwFgS1XLB7hJQPQqgbTaRHyPefeVD7nmAzs5ihd14DeC8VwPGv9UmtJ9aUqc3tS1AANE",
  "key1": "3wGDBAnfZrAnLWCd1gEFg8RMu49wpbxydsCByaPvxNB4uCnD7sqPGie1UJpHzAY7Api8eHsNc5S5hRUjQ7g9V65o",
  "key2": "5TdCTAYT945LAqehhTJEeemBnGBXKVugc6t5ZrSE3LeJXDp8js7eEJw8UfDdBQ5H66htoB33UgpU6AfB1gxQLeVn",
  "key3": "gXFmp42P4SnF7qoigMidJTtjQpiupdRQQr8Heju8NDdQKuVctKDP7YArjvppgD9gPePBc5Pj6f2X7tW7KYhMP1T",
  "key4": "2YH9FQ3apte6VrRn4iA4cZ6a7yA9oicNAJPimLUmpCWKzsKgDyRTkeSveZUmCgu4MpcBM1aC6e9ZRKs9XXBxGUGQ",
  "key5": "2zVWTGDxqSzmK5NGbY64PjpnPjcEShKxWhKVxhbDu71A6H3tFsbGk3T4ujEmUTFa5aHbS5MjfyA86aX4gMgmhDT4",
  "key6": "PPae1W8PDaGAhbyxL2n1chbrx6gB2qLaJVLmsR4wH3Kb74cXFkYaH7oCR59XcsvrBjL1feqrpifwNBqJ73mA2Sw",
  "key7": "3KiDzqfKUYyJ8g5Wsci1LkfrFo9tDCceezgxZfFvzj8H7HGqrVa2iZgD2G62jeW6tb7Pv7s6NzJg1usKP2HnKakc",
  "key8": "3o2ThVTqtnuU6oGxqUsAvNBy3JwpYuAYVViA8yziQ83KeS3KcisBRRWAGqBUCaGGjR3oNAphRjztpkSbejDrwGay",
  "key9": "4cY9ds72wp9zKzUokvhULXnopt9BVoXoK4Qh9ktUxJhKqSF4ueG2zXLcHbRWXK4gzaXznppHUPnHptPfM26quxx7",
  "key10": "3brrb15Y5kWUGTPyHzEqA4A9btukfe9TvtUqmoNffVRT3t6q5P6BJY4HReQ3iHxDCfV1ycB8gq3UJh6dtYDKf4Jy",
  "key11": "5jE1krX9ziU5GoAxsuRs6sj8eAfUeFjdfuqzT2TByDgNj3GNmUZUXvowDkhgwtQADwUmc9eE6DhjAYCCDCyimTjn",
  "key12": "277K8RmWZPCfUEPQhuarpcyy9sSUhQ3FD1aRMc2MhGW7AJ851iqL19a75eavrXFjyRt29xr5TPgpiHSR1D3NxJYn",
  "key13": "3R19Y7Ja4QgJ68xgvJztnuRZtv4hxn5DRCy3WB9zjcXxEY27UwZCbgtuJqRAE7BnJru7eTHgJr53bsBiF7YbCYgy",
  "key14": "5gcqug6z8MopL7RCbS7cYie9wY8P1hX4ohevk9SCxZssLsKAn5bf2gQs8hoHUrFSv9VbUYtGX732EznkLKc8WCUb",
  "key15": "5eHaQbTMmAke2XQMDy7pjVyw6pirvRhvSZvnLZ7rJTWqogVraQJHuAxHS96fUiRHu9SkNED5TmMqGt3fCNs14g6Z",
  "key16": "3XKa4B9t7ibCz5qyGMiZnMaeb1ubFodHE8MigRj7veGotmGTVmYnSj1Wxbv6LVEFBCZQPZiffQmgTSXNuXZRSxAH",
  "key17": "57SDr7bg5sDaHUHFWjY4YtNi1j3MvREXAyZhzo26Xo9MfWzbvaX694pQFGkEJzZFzqAX88MfuBwZmax2GpAJP2yG",
  "key18": "VcvWHpAwatBgJUHCS4Vm2NqoyTBotumzZqrZEBWPjtepYA4qHTJmPk8SkEbicFwotuzF3Zp3LVppVyJF3YdjNrb",
  "key19": "YqVsXaFpx42oEcAC8tKMZ72XSvtRgWgjAtoLkiiVshR8MV5C877dixbpGCXsDXprFYD1YkFv59HzV5vtohokpyQ",
  "key20": "2nFLbFpjrMqi6FCMSDXPAUjcX2PaZvDyMBRx2EyvxmxHfTcDkpxwrFEAwLvmqqgSjowY2vaVx39pjjAkHp4R7FT7",
  "key21": "Guk8TBobRSezxfKfPkhf4A2NAPcyhEuNb5nFTq7c4zHVkQqsGyZYHSYeSmNUAdjcCCgvgMmTWq4RW5ZaF7m58eD",
  "key22": "3bqNeCKxLKC358G25F3BvmF1YegW7ZKGFvtLiUf1dDcvsEaGzuVcRGf8SSG3LrStSNKQYZQEPJpy5q1zzDRCDa4n",
  "key23": "2Kax143LPbmD4wmMcep9qMuRfgN1A87SqQLwA9gsA382VphPeckjp2sLZARAdMtVsdW9pqJcrLEYxXrfAYj6Tvzd",
  "key24": "2kqL7XfgRoD7YNyqnK8Yta2ysqdLTWg6zDPQuNfEmTyZvRSUAtiHcJWX912MjnQRSTHFNBnP8oXhAe9SBGnMMBdp",
  "key25": "2Y83BPby33JbMMhdNYPCrEELYiXKnJC6D6yRPny7CxLtidH2XV3TFtiKkaGiFkLQpUENJvfHFeyLBusQt1b6nwkU",
  "key26": "3bwbpu14yys1B7btwD6uZgHBc4hZGDsupvKvgC7vwXE4ajmNhxrA5miEQveXWnb5FVpDtN6m6ZZfUCnBa9EMM78i",
  "key27": "5dHG5db8nGSW4nwczLsrnVrTGU34R24p2Nf7STddkGtLvGj2dGghF1TQRbEqYZ3rxTSUUXm89c7Lke8bjoAgHfHz",
  "key28": "3dXNxATeWnfzHE52XPjBk5i1HGEhNxfGyaXd75DmbxcmaywaW3zcG3QwujAgQfv1S5UowZf85VoH8XzgQyr6Yyfs",
  "key29": "28p6pPycJqTNvXgwXwvzumaqevdwA1z9giT8Yg9XcHa4U3GxGiZ4U8sRiz5JfgB7cc5bm5FFFi1gSDwbm8BoQh9U",
  "key30": "4FeAD6sPEAkLhjAHsQGgHJwRG4h9mEXUKAmxsqUfzysow5XGUzTyQhpPBgE1GiTEB3cbYc5v1i2axrVdNNZdm7oE",
  "key31": "3gb2NvqbwGmFqUGvrWAfKvkdA2JJhmRPYp7UVS7M3tUW5ECxNdTZSVnyVsz16QVhCBcHKAqkndqrurL8kWEzLXR2",
  "key32": "45g7sdX9Rs352vJhoQkzLLnFyYmDWmmW4ZyR4kLGV3UgpyT5DTTAW5MTejH5WczYVdCsKKGqdtewqzxyDoTUKm2g",
  "key33": "3STWMJHtRQYchgb4yGjoqrGGH7MNKxddrMiv6aeQHVFXrTPmdpFyMLfWJvxFxhULm1ze6aohJquG8XDxaCB47dJV",
  "key34": "TqpZgiedVrtDcucGJHB2DyEhJnqNrvhaYJDu4bonpAb68J9Z3xnPU7wV8UQdFE95ULcxtAHqWtXeDeY8HH6cu75",
  "key35": "3idJTrt5gQp1PnS3CZGoysR37Py36hc76A6g3HJvqFZM7fCZmDbBSaRBQJ5ypLQkZW3csTqR8kSv7WMQjCVpwRBC",
  "key36": "3Jd1ovRTgho5RdPqvFyazEJhkJ4tBpPyeiZn6jS49KswUbkgE5LmgKMUmewTkHzPasCzvzYnrQ8peBKcP8QxT9YN",
  "key37": "33299xGjqMR63rmTDg9iyBrZJT9oAjZNuFM9MEM1jdK1o8eUyLqvnqZM3rgL13CvPbCPKczrmZehQkkYGuwaPWpp"
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
