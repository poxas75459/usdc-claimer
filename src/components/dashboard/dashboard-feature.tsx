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
    "4Lyx329f4AbRRKPhX5iL5uyttxx5EUvukBHYh82PnmopFf4MJ2Dxxsi337qpEGGbm8SkusxWf95kgXuJjBBE2hJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bipW449mthrTCjGBQhxMRs1cbYZhVXrybTkrkL5XAso3VzmHjb6yF9mCDWAiwWmnVvxLN3uxBN7mU7rqbWQcd7p",
  "key1": "4LcoMnyxzsLm4Zoepvr7ygFTjAagx859xkMZnA2bsFB4b3sGpfDrCNdK1VVGVrCkBgSUkJAZJp9dLuhTcXJCZrw7",
  "key2": "4Zp1BEiySAZqgw5kmeQxWyoTUfB69GSmenVRaiR6J6j8nqsBkz7Na19YydehjCVdiyZBAZM4nUDHRq3Eck849wpe",
  "key3": "2ytcoTqZUMPJcTTeTE2xFspo2EANJBcRNxSPUt4nxk2qHiM1D9GZgrGWQUrRhTD21AuJU2CLwizcMSbqzn2GzTSA",
  "key4": "28NA8fHP6vGCmtx51qpSW64unFgMLUnCNrtU7XrmNPayo9RSdzKbdZ9XYsSGzBauxY2TuZzDXpqx6eeCoVaCu5Ep",
  "key5": "2mzTww7Lia6E5f7pWYSRMLyKNf2xzkua5k8KSP19cFd7dmReJonm62J9bUkazEhE5dr8mmRgAhZpMJoMJMnKA2Pt",
  "key6": "3Wh5jNdLuwYj4Raq9S5wGQG9HKnQSFXBFhLAJrdnrUvsycKdfy2WkGzSgznhfuEx8xiLqV8xqXhKDMr9P41PViEB",
  "key7": "5tVGqHFUNs1eJdhvH8s2uYBbq2WWz6XWrpLt9vSUnUKScALoyB8fYbY4dHGFfVPYfn6DkUpaPoa15kR7ByTFmVo9",
  "key8": "4gKH4RXSieaFDZV1arwt2aVQ49nJkfqN5mVqi4LaDwnG3RqcNamq746dVDVLcy3jRkKjXYTDMTZD15LewPC3ENar",
  "key9": "2ky5SkGL4QrNkxBG3X6nd95RykyVpHcXTYwFbEyEfYeibu96Kj7Qturid35WLAud4eBZw9knLkV6Pssfbtad8mnY",
  "key10": "D5hvUiVbi7nzC2FugfFREjskXQmb3VujwyGnAaZnts8VRJfXL8gZGiV4V7TLAkHGbP5qLnQcRMtYw3AehwBbexV",
  "key11": "3jQQo9pzSHRA7eg8HSmysAtLVJgRRvofzNtb6LeKRBk4gjT1WLuJ4VqU4KCdYNtNFd3TnUkDx8fBaV2cF83EnnYK",
  "key12": "2QsjzogCg6xEP9eB4nBbeBLJVXxNvHe4vHeSx3jb9TDxjMCwLb3GJBGL2WczkcYE2YAXPUUosAnqdQM999eDoiKz",
  "key13": "51PRQ6iXkD9gRWFXvhCNe9CRCMvsrXuH3Ax7uAKaAwMzrPyHNbeMZKechBeLtbQu2TXULsrrg6QxHG7P5kBsyZBk",
  "key14": "39puQyvzeNZja4vbiN5GvuDZpJHZ4jVQmCcwiW7X7cys5HvodVTTfbGg92RtjQfUrdj8L958SmKefRymzRXKv8c8",
  "key15": "4gFZwYPJ4RCRtxnt8QQdh1j7kkascV9QxnQDAhGnUqGknQMHPrb98ZFRxaMSfsgsruqUaQ9aKZhF6MAydiowff2d",
  "key16": "PFUox78j6KF3WMsUSudUc9T2Sstk49FW488Y9m2iWqEUPGVTQv2G3y4Xr5VTMvRbx5m5kHmWh3yLiM92XSMCbFK",
  "key17": "2TBR2WBNbK4K8dGWjN9GLDgXP9VPjrUz4NGH6ALHWCTQvbFwYX64NAKntfHWKtZ1xDAA7E4JLHAEWquBtQSKiEsQ",
  "key18": "4WZwGp4E1o7pZ14xDTbVSp8Dt6Dmp5skc8duZDC6GuaLxtrvYdTwuik9xty49Phf5Ur8uqztibf5kxwF86etoiqY",
  "key19": "5EF15LixKPvzXvYAfiYsdsFtYhgYyee4JPpjwLKHcHEgnyL2qVF79CtBoWemXTWDue1SP78cjxYzD745d4Xd32KX",
  "key20": "25zegj6WBRGuQsJpmVuyFwcici7T856a9xgKb3cPmJVdYAXEQAvEMjZV3EcPVemmYt2Z4XkJESqJkNQz6ByTw3nG",
  "key21": "5qC8ZYmT5ZUYzaAScma2dtqXefstKcNhn2ojwZN6ny6eSM6Lf5GEtAR7qKcvNuXuo1nQXZcB4geLJXhus1WnJiK7",
  "key22": "4m8H72ywZnYRhnHT3DzD6mDP1ARmpjyUsMtDZcsrvP7eFWd6W58FinAdstBFFkVeHwCuastg8KxPw4v58nh6K3Bk",
  "key23": "5KVQxeSZTHmfdoMWyLfFYszxddrozuKzQrNLHkZE7LbRApE6v7VPNtDm9au9zpJqVqeb4swDcY9mCvgAy3vNywQ5",
  "key24": "DDa2D7WqRKcBXrS6hQ3m84WyqoVNXJAeuqrnwv3VyeMWCKAMAgbsK4r4wzdKcLYYG2AW2dmuTkSMNo7XutsskXn",
  "key25": "2cijdXk2dnS8nqwqFmWKoZ93vr4aukvCWFPQMfxUd9ZFfmBogT7gQPCEtGBtnrXAHUrS3TMzDayhqoSWLiBD74Ew",
  "key26": "4W2Mxc7dTr8XGcgFWswD5wkM7kp2664BXKw1VjEsqEWAjJNZaPCruu9UiWU8nEq5vrtbtexPTtcmvduw1S68WupY",
  "key27": "wD6H4uCzDpwg51RQGoT6KQdLeZtM9hqhCUeYTCKib4GXJ3KeeUV243A6BgateCAVRcMLfdjHdXDnppn38B39xcF",
  "key28": "3A2gtPP2iGebvV9qg7sxgV1onERcf86pFhuUijsG5TPGuUHA2tgv5D7u5vTAAbziQMvoSQDuuJ59B7qoTPWUoHrQ",
  "key29": "4NN2Ypy4eig8Jmt4Fm66enhvRXjRJM7oKyhuMs2oJjTErpt8HonUySAw6XwRcWdvyyRmN12HiyEMKZ8fsrkeYyrB",
  "key30": "2BjfodyQN7XFZiBRaJfE3hxmSYsMfdt9kiKoiaF1TcNhg1HRW8M6fAUiNBrfR2x3i6DqHuZ3bx68N9vaC2pDkRNi",
  "key31": "5xqvBXP8NWJmPc76JzZpFAFBM8RYZ7sRNJae1ihk8yA2XyyjfhQ4QDxZBau6eGmmDbaKWWBZ4Zmxg5CsNauRy1kU",
  "key32": "3ytHNyaxExrfft1LRF6dUQvkhp33mA71RsWtAoYcobAd8SHfarjFiEbqWZxedkdyjT2X2yRo7cz2WfL6Dx1w7mXD",
  "key33": "4EqsLzVGHZKPWJhxaoUnhz9b1zEkjREqMMmmfjFhrnv452yjMWtHngv8bfBngmkMkZ35RXi5YmDZCDMDEk93iJL8",
  "key34": "5Lj477K5xuUZv7nwNbMZPPCrLQoRopcj2QUeSqnA9g47CFNXNSvh3dPMgrz5rnEMtBJoiLWPtQ5nhe8S5bwdJ4hP",
  "key35": "51cQBtBPyQPrQ7mJK8ArYehygN5AWoe828K4EB1b1c8FbCM1sBowDxTK9Hja4aTHiutkaXtvT2NXHf9cGhtZLSA9",
  "key36": "24J6BB9r6JjDMa4ym8fXCbZQJ1gXkKu3fwhx3EnN8GwEkkC1BNHq9aQG2i9xEoc2PJ1L4ZLZMALz4kxX2CVdQsne",
  "key37": "e29ADGcgXhp2NfKMhe4FTaY4ZnnC7WmJZ7imNzooCqm9qZTXoDyrqSGjQNqTNsAFdU5cucefu91cd2Up5t44LLS",
  "key38": "4VhzgRUEhn1DzoHTE61iLCDyTppTa6smZVSpkv1QRSmLDadfE1yjVNu7Cn2N5TWWbQo8jU1QRA91gGEjfmynjRPE"
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
