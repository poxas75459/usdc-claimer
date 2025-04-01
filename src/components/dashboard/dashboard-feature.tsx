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
    "2968WmUkV6rxWf2N1X59Y6NfAJN4sZNyjUPRjhkHQqHvqWn5ppb8CipqtuGDCo5wA3gWAVeJfnYjWuS75pADFAyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ii7aJzy62BzoKaLb951WJ8Ly1C2QYXszb9iH7qnX1fuweJxSFtPzq4ByhasdBfqNckrNjCiBNZQjXDCiemmiRQ",
  "key1": "2C3Y5Ko5AnJHm7Umi6WdXsvZdiEZNqRFK3HXFhu8wgSGr93kUEPLsRseZgmWbR2GDfqR3zUuwGAKv3ikBp6orn9k",
  "key2": "3fq8BJcA7XidUZvShVARBD8FtsJrqcX9APCbMzCdEYMhFrHT6KPBrZ5oBbRCPqxWPCQextA3a2iJxoZ7S5CYxyDv",
  "key3": "3LLRHKb3VRUrZFhvLQWoWi71BcfiWfEP2JeaV71eFBjy8ZLk1um4FTZW4pCgJ7Sz1p9qXhtRQha7UuABG3iMhYed",
  "key4": "2vWccNpJ2YmvVfMp6QANxca2aPoFMgEjMPZhe936RQjou1hReJesFjym1C72GzJuwB5RGtwTjJaEP8czVXvAGGHU",
  "key5": "cder8CEZrET9fXrFHrSev3psANXtz3BVEEBij1wmgpavsoBT7adSRNGUVkEmyMmQMgtgtgENNCorp89w1UURiU5",
  "key6": "5tuuUF8AV4oU8dqMrNgpaKvyJrTye85kgBUoGzdjk1ncdqoCBJnKND7ZxDDTF7fw8vwFuVZStZYHtYEV2G5oh5xw",
  "key7": "5oeVS4ibxDmorZ5b8abbmFTyv6sC8WVTdkttCaeXZxmS7kVjfCT8xCBhELVeCXuX99bmh2W4er6sgsPQRcHg9ba7",
  "key8": "5g9Hju2CWY4tFq99vxK7itZ2TqcW5fvUFn8CLMB89wnPP6rvzeD9473zRymYqkRzJ5pYVZE1fgNbEa7a8848zPh2",
  "key9": "3FtXcPzF4iR9V9BGHNaNtT1PZLGNbEStJasa4LasHgLg7oPBN2tEDyFjrmzzKfek3b25jpfdDLLKSyX8MPXQZ98q",
  "key10": "2vMkJ3VWqss38fXmGmVjQYApmpgnxNpuLrxDw9c66BmPvJG73hU4eJGavmeHxA4iVaRRo894AA9bssRn1RftD1YB",
  "key11": "3tFL51GjfMbrnR4PvaTuNY5Dzz7bowM66ZZKXTuzs6Y6YKZzDdeXpzb7YzaBZEFiTGBApBo35QUrZnsCHpFUZvgz",
  "key12": "33JG8kX5KWgf9cW1hPth4rykLgs6GxU6oVQXqbtTPTYsv3hu4n6M2LbbpETYLGFr5UvJN1ArQy4j8eiJAtkBpwJL",
  "key13": "4mBr6R1t55ESts2Una6zmzwzhFSBkeV45Fxe2eB595pWCZvyYZSPwvTuUVPrbfgJxKo1HAZxwEHW7iq62KSAW1B4",
  "key14": "f9DAmpV1y7UMC5uDq2U8Fk8R8sFYZtcM17LmLodfywkoVVj43oAkxsfTei4dyX4t8amJa2hTrDk5UGU9YL9HKnt",
  "key15": "4dGz7mq6vwMDtgF67WHRGgDhg5sn6rWzE9nxbncsxMeB7vKtXxHywWiPXEQFqmVbvAeA2RiW89tRLkkXPxypgJmL",
  "key16": "4qmyhqfXTAqWyMCT36jDU2hQ4coF3Ehc3bsbPnpLg89ajxZTt54knwVQp5XBQ4GV5nV8undoxZzXQhVQ7NnihGWw",
  "key17": "64ZKRc64zojAUYapP7un5DzzDbMXCZEAF55DDhwHh9sqV8mUbAaW19KD9mRi3kTEdeCUhMk2BovrwS7cnbAPcXpw",
  "key18": "4TKxJFhdvDdVKzYdFF6yD6VQkEpY7oKfSG8rdBAh3yk5Yj3SY55rYLHinNww1REvvE9kKf8Hf3wC4hYhJwrcUoQz",
  "key19": "3vw8kYRzLr9ZDchtNutPLafVWU5Ngs6i1MbVGpbg3a5xgc8URjkMMotyj4AfJrKbDNuAEp3EW1naXPm4Vm5Ee3mC",
  "key20": "4yV1sAPztknb2WXhhjc4SbRtPxNV2pkQVPXnyU6fyFjCf38gViYuwuMzFG5YURMqNjiyvdGSq5UAWBG1o5BrXNyz",
  "key21": "5hphBeU8LNEveKLbeADbTYjdbAB8i2jVjpAynwge8g5XG7cXsdqdTrJnhed3Jvyb25Mw8rrFwwC6LCSxaRANYjKr",
  "key22": "2SSnR318sWWj6DXu3AhtGofZJ6pEty9xg3NhDYUezzZETz3ebTf9thx24JfjsNpEx4ys5d6RmZ9ijkVGLfbjsXhZ",
  "key23": "3Fhs5XD2QHfjstLqYMorLvxpkb7a8pQE2JtTHyCcxPUsk23UjHLMRKtVstN7o612kqyLmD6AQ2XSaDjjN2p6dvRP",
  "key24": "2fHaGvr9dm9fybVyrxheCUfKK5ByqtScsn8P6599AEZSittbsWz9yQ6LrPcA2xwTdggvTXWpCVVizMaycbKtiVui",
  "key25": "2tRbELytTEHvCJoZ13k7iMhuAXLj3ECqHcMYCEXT5CWmQx5h46ZXc2MRKaVGe7XcVBB7i4Ggihg4xFi9VVEa8BMw",
  "key26": "2uRdsnmUbqUfbAcgs772JdZyX3ZiP2i1BV8Fj2PNDRpsufuNpSkXKM1x5PwcLhf9ezR7xVw7c4DhQRj5UqqmNttX",
  "key27": "5D9kbPWkogduvc45Wjmsxf9Rie3Nx81X88icCWkdwMiM9yj5q8NWPr93ddqCLc9vHPWoqRhcmDbSpLBtpoWRVwT9",
  "key28": "psPZKYEY1sxcKSrQPMB7KjY9DgwhZf1veey97D4qZft5d14mmAEX6NNwyt2ASKyWzFwzfqqMtuDNw7o29p1fwzz",
  "key29": "3dineoHRRqQ6ZtkQsfsQooDETeUttZL5ji22J3h4714HKEQAnYeBPTjXeXHFTmooP9H6wsZSf5HHKHmnkmXj5XBV",
  "key30": "yt3XLc2riyqN9ZEeGm1Kptms8hirB693BfECM2CZdWfzqREc8sCEurLJJ3h2QUsiXg8K4zm9v5RWjPzSkf9sc2C",
  "key31": "e1kV81yZjyEyZ1iQj8DDNfc5L5yJjXD2es7x1B11rfxsQPfQEY6jhU4HWEMfdpPmMQZHKPaN1gQGbNexiKgVhJb",
  "key32": "5RPvXQjDy2qTMatgfBtUrvHsZgTZJH9i9MwT3eZ4cXeC2Y4v8VbyskPNtgD37BqKM38E6CxMhN41WsVb4aJ65HMx",
  "key33": "ntQ9zuFhYTTcTfeYzVKAU6kapsXM3NarFpAHKq5Au9WGJ4eLSWJGRdg4CRyU3zmXYg5havLiyoVcKwhAAXyMLdY",
  "key34": "3qZuWdj68tsPPHFoqZbD6DGsikDbKFh9ivnyjDyG3xi45CDvjNakoF7uZz4rruvc1ncWZDUNXvS3t4WvaPD18WgN",
  "key35": "3EaGnX5KbpFT4KvaNigkjRNpAwLCgPzy4siRZ7LCMEshUy4bpdRKnymPF9XpZd2W5GxhxUcwgRj498KjBt9DtSjF",
  "key36": "4oZJ2BiCnhGgddeCeeKGfEKwyyJS7NEcUg3nFsdF9HC8zNoVGStdhaWU2aXNahGh1LYGoqcaz5DggfqoQRccG2ah",
  "key37": "5SUBhRn88ZtzyQ3XLLFVRdV5FJCTx9BZjNtDUJaQJxxxYSVCbNLYfFGr78vgd5wzpvn7aPCkvUj1nxfitQSNDWhw",
  "key38": "4tzBjUocJnnSQtcv4eXec8ez8kzUooRpVJUgerZBt7EcyMbwNYMzAKfLkwBcovbqnbLc1FHyo1i9oDWrNwXVqNsq",
  "key39": "2kg1izC37hTrS2TcjNM5wTSAw3Wfv2eZ8X1SEkLheCaH298JkNgx3MBEb3EnEoPnJm4aRM2wUrpYNYhRDyaDkq5E",
  "key40": "5gkcFKm3sHJLoXNTP8KwNmKnE3JREMtLXyMgjP4D64Y5ZcpnyrhUTj2Reh7uP9rjiXTJWN1YDiPCmdL97mDzYTbq",
  "key41": "4Q1UwdvJNKSMFr5KJxPNTMqaoc8qw5jeQbRFBKkDphjjaSzn3cvuzahtxHrVzm93xPupCZbFux9itexZJRS5dhHQ",
  "key42": "zzy2QNQDyDkbWfaHePqERXPUKqdsBfXEBKgTGVXzanQfgcAxnRaCSYfRQBY34R9U5Wn9PAhvUDQzk2KbftucaHp",
  "key43": "38SAwtprZxYZK1cijy2P9zCTanyn4nwkdk8ugSBozLZ8ZH7aQeSnLqthbgahLUay7jdRbUZGaVzo6xkVVEXzAAH5",
  "key44": "3raDWMGNtWCecNJMXCvDDcw7hVqcHAZQWzWmdnJr1a1zxh8Jsp5Eym9i5QGZQSiK8xFawJxXjdX4P5sZ92shyyaD",
  "key45": "5B1Ws6hTNwMqAXkKy8mVCctcusBWhRub4ibG8iDG7pFcFJooa7p8wWU4CSKkkpNZsvrxS1qpxWMqMxnP4Buh7tpv",
  "key46": "2LFMfFwNB7yJyxN5pbrMfJrYxVt6dS1i8iTQ2hw3pzDQQRitBnP1zLqsFtQVrxNNb4YyJCs8UuuzZfv5AxNaS1k5",
  "key47": "237oD5kqTAmLB39gpZTREEQBHYZt1dYmvDNYCGGpYAraGLdNDGFqskAZGxX2aeLepLMaNyKdzo5eZk5XNU4wrwo7",
  "key48": "va66mgajrVEDsHuiaRmMBZ1aKtpfwwxrUnZJNryDGnPcZPvwaWtQJXnpgPEJxEUDCQq4NF32cpADkJbyZq6c7gy"
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
