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
    "2Yf6qxiSc94ncY5v8C635xaDgiCoWBcCTVXdg1f6vxpbiJtqQu2ugmJ1KG7trft1EAc5NmbvHy6QSLtaXXbiSQeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TMrAwxzmYj41YDFAaaQvKqXVhT1jqLAk4MnDaZDDViGNXanfksuiT8mhrmvyrpwACegxqtb2cBDJaXByGWktVqv",
  "key1": "65Zw46V6BDjmxR6cqwNbXxBesTmFJ9KH9dnq9x26y22Mbv45J3tYCR7FikkebJXuQnkd335aU9nyXcbms31KN7cK",
  "key2": "2j7pdmoiH2TSfqiLZiCftjSYzTyUYwwQ1GNyGRMnmLm8K47WDs5FUvTu6AZaXyeK4rKoS7cHLNYdFJsQBtbqoEse",
  "key3": "5JcWA66BNjSepzLdohTftEFKUBGF4Y4kyCj5i6tWgJNv9ZmfLC8MmszXgRKd31T3vCochVHjM6RAPacjwsXhzQ4K",
  "key4": "4AjvMA8QnqroVGeGU47Hi792YDHXQGD165jPyftWSqoRGM419ZagGoqZtQe1dq6WhnTYpyXhr6NxUnVfQZ4B55ov",
  "key5": "LGwR9DEqE6obJaNWZpYyeBzGK9Lv5Mvex6exps95BrKh2ri3ZuQip2x5t3wE4AYVrGp4z2d2TNPQExo6Uh4jbFL",
  "key6": "49fad9WLM9d57q8aHBr6PxxcQ2VohRPoaaeBJDyLjDxTECMxbnwLwHAL1pg1EcgBsNdVF79463m9sdFmGiLNgiqX",
  "key7": "5tnBaJQRgh9HSVFNbwpM2vrCWqpxZoofMr6vrVQLig5PWcLCjm63krJD35G7SNAUUQK2oiWLfHxsaG3jjPXc8ps8",
  "key8": "2XoFr5xoTdNxpDkTtksTNJmkSmvhvUPepdMUv8E8A7pVtRqcqp72kLvzUKXPrmRL6d82zxYTPAj5irUjyu4Trgo",
  "key9": "52bsy8CDgrermaRA3tntQkY5ipcrCD91QhCHjhXKf4URkJY6UtH2Kp5XBSvyM49VFS93WCNhAE3LZqWpRMWXbybz",
  "key10": "3La4zxeArDpJBtVDLEh7pbfQHdRjqzaeiyNuhoBXUiT6rdcYAy5pKcb662KHWi6pegzZYT1Ttxpc31xaCHcddpyG",
  "key11": "2rjBq3cURU3gZPm8mUmQqj6F8ShXhTvoYKG2DsWpuUJmLrbWEtk8DJr57h7VwxikFRCEKXd7gnZWoDKBU65QJWBL",
  "key12": "2g8jY44nVqG2W4sCwM5ph3h8uQ9XZuZ5TYq2PXLsntvWLtbUzLKqKQotmqSkC1K6asHJScaQVCUF7MeDNJr1HgwZ",
  "key13": "2WKXPawmngVjdq2X4DdijNtuphijcZZqRvqLG1HSEg5s8GrGaxdubGCSBHt2BuPqu3RnYewn2ayivGx3H4i2hSqD",
  "key14": "2t2pn6oQS2oR3Gc697a6sb2pZYxiwUvGYUFcAjWGWr231AqGz95xHsy3sh2B6HccXDehPCdq1tvSHxmjKpWAvVkN",
  "key15": "3oNjv6ccLYTroaL8yMXUqTwuHhzZvWxmsrrRfEKRMscipQcyMdLqjam8C9dEX9UDN8ZhmwLDr56Mk73vMFHXn72S",
  "key16": "2mKz5m6xbzsYuYmAChGPxbpABmasTxrUaVJwUu7EmJxcwUyiuUiB8Tj3GatT454DSFDSNEmhp1XMWNrP5bqk3AJV",
  "key17": "2uh5uuBpRRSF37ap4WcKnxmj1xJPGFz2vHxMrXNmGbeiTP7piuuTCArR9i4Djz8UYEqZyh7X1hpA6gTnejbGT3vL",
  "key18": "4YA87uGZPf9MXV8Ndn9o9q4wQrM1gSyxu4tHszXTu48aqo7T62MCo72f4YS6SkWPAmX1Di68btSuYZu22R8VKPfU",
  "key19": "5RwuCdeVthSBrSbbqnQcFvjJJcviPTUMHhv9F8wmwgxUWLD591VNnJb4gJviTwP2eDoEeWgWgtMUJQwizGcxLxEr",
  "key20": "531EDJ8fynGbmWuNbisyCTXPWMikLpZfUZw2AUbjDZBtcuU4oZZuqWoTvTchQZiF92dqBCsk9qZ9FZMzuY4yG7UE",
  "key21": "3ZVz4RcZanA58vZXJ4BxyS4kfXCCunpzSphcttUAdFyiCXixdhMHCeV3wE8gJPom8QUVZwBzQU3L2WiVAgu2f9k2",
  "key22": "z5UQf7ior1xhRhBsSAXHabnkFu5xmfox2X3PFwS68ytByvS16ZQ1NqxgQvjzCKJ2xUjt5oFG15TSXgdHF487WME",
  "key23": "5cBjxCuDVahPsowCd1MWb1RGsuWtdF5QYcTWXWeee5AduU5dGu2uva2JAq1WPMrqkqUgLQwzDuL7KDrxUtoR6FtA",
  "key24": "Kj2Dz47eqAnjZhybhGKDMcJG868zBJFXmUBJSMECa9gdyW7JX3JkJvp43wgAY15QsXH6aTnHt7LYnHJ7LJqioqM",
  "key25": "3DcPJz4vHaRwtEUD5hCXiM13cY72s6LMgcTyi8ffXKZXHBXktu29ZtA4JvQDkBhph75hRxLTzb1AkYgUkyQruxd9",
  "key26": "3XNGhW3hE42JeJQ5fRvk8udHEvExjkTT1rgZSkkgp68n4iP3YFRUpWy3E7DNJTVw8orroqwoLGAEQ9kZZpBjoYsH",
  "key27": "3fMDaoXFBqJurS289mCYvdS1pFEPFhDyS3h81WBSHCsuAJxACur7gCjQUaAaXzp5SE8y4N5DrGyPCYv9rtuoPMvn",
  "key28": "2HLUbHs7LJkdoMfMfoXQjx1e5sKG5HGZqHtAHG9BtWScWYhJUv7z2M4wuRPbYkpVofEhCKwi5XVpXeystVAHwtph",
  "key29": "5H29AqtTsUdCWb1Qq19NDKHNJfbB7WBcK362H97SLP8iR2pbFWa7EHH7b4ASF8pf1GXkH8wFfZH4NRZcEFLCU7n8",
  "key30": "2s46Fyz4EyWdzvz4hUZA6GngEShYx5wDKDREgb74kgonfKEfEYcsG55vKR1QHqajQyTPf7erGCrnSSJxmE8owE5P",
  "key31": "2NekQQTmFg6ThbJhwmv1U4GRVvQcXaUc1FVPyTyBDkMbQYVYfRoGDD5z7wrDxRsf5TBRpDDcwjob3XzHgBGXbuJy",
  "key32": "4gomdHcZ4teBewamLzH76nUfKS8Dfcqfp5RiYkXJwRzTdXuZw7ifFn9VJ8covzPy1af27Rr3yt4qd1PW6WsoLwni",
  "key33": "QhPwaFfwZfGJj764UGcAT3ZmvGCqTy8ECcsJA11fuY3Xp6ivSBuEWAhLzFCS3dRRxiypc9ThnhaUET5EkmsSCFX",
  "key34": "663dTTzadNerzBJjKH58y8vrjkz6wfmNuG5b1n1R2kGFATDpS9ZFxBqkfKJo93Q38f6bu3awkhtfTHunR6CsvnSE",
  "key35": "2deLicDREyLkEW6yKFBqfViTQmFYvP78LoEdKeyvxJ9bn5k2QE9YNteZcFY998i6cofPEXj1nyLGJDaVnb3uEuBs",
  "key36": "2Fpkn2Ctionxm1F9YgvLNCzhQrmnNyPzv6QVk5pU1iTwgA4iXBKSDJsXQFUXnrioM5c9MFxnrxoKZKkEyeLjFc7V",
  "key37": "3Rcy2xf6kyFUmENuQuKUBThRkqf5Lk2Nx1vBGqP2N7ZKxiojgGsiE82CUqxCqRwGbWo8H11CydFBoi8N9CQ5vHeD",
  "key38": "2FwgxXeBbCsZnKNSJPxV8F3dVBme1cV8Tof6KuWVoD3859a6vAm27Z82oBa9MfFPR8PdqTowjgBX9psK1HpCUkRE"
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
