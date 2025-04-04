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
    "5pzvarfhqhV2bcqZGoeEc2ghME97M1e6AwR2zLwxPot9jE91okJNFV7J86jt2ddCgDxd3Wa763CNSAEpiM7aRhej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LhJWYmcb2eYSzPTK8q47z1ahkjspy4mrBKeKqn4FUkujPGpsxvV6KAhrM4Bx4QT41Q5x1Xfsi2sNi6kfuUSuEvT",
  "key1": "2SY4GzdBRDgjydpjbooZvSJwVVHgxRNjTbva3TMgaB8kxkBomMa6iomNYWr3ym2nwTKSL8mGhXWQgFgeahjx9Ltb",
  "key2": "5WBeUDkcxQtboaDGKc5RV3bzsD8cjYSdNgRCfaPyWfx1aKsxaHQqVKbdgYG7vPdzMxaSLwmZdcWhtDgSY33mM8Zw",
  "key3": "65yBvNTPX6KWp1RKX6w2sbVVmFB6wdZKDzui3qahYfMf8z1Agf4x5GJcKjmD4meQKoNzs5rLbMR1bLML8r1ihT64",
  "key4": "z63pAAsHbyHdWva1dpk9UUZqaYMNSkwsRmN5PbkSiTDwBqVHj8Z1QYhfLbndMsPuCDVyoMKU6RWWDjqTVjaiX8P",
  "key5": "ev4wtiq57eebZrYPRa2ADnQbeG5AiUt6BVht1k4AVppAWxEy8z8LjQva1U37dpJuM3A8NNUAvmXUGpKCrztXU3s",
  "key6": "5i4sgF5XhvohmL5rUxFAgeWdaoVXDaNA11FahiFJDqoLfJDgXGqrbuEYVMJv1FBhVa8AUySQiysgrgVitvjEoV5d",
  "key7": "4DERE6udDbaZsSNVDRsonn3dhGP2Yq8ApMgReVphmV39DbuTrc167DHwzAjeMrtxCzb1g44iLUoHwPoLo8hidDxQ",
  "key8": "5ALqABR1LSahXpDqvyd8Vbr9AnhMuLgJSFFtCDEebkme2HcE2hXQoHJPPJGHU57dnnyFvxCjos32g1jbZY2P3RF1",
  "key9": "5G4jjDuniMS1vdhmvRVGTXAaGvvMc3UjU5Ma2s4juhW4aGW4coPMEx3qgVuDR12hg19CNLbFaDbV7G2XrVYNvwtf",
  "key10": "3UMMryLRimigLTxYi6xvavfQR9e4xNZ895guX2mypLP7chgzr62r5KzRGUZtiKFnf6EcumGDNYxX93PkCbsR2rmm",
  "key11": "ASsx85M42XQTvpP3RFEvAHirxZVX1wG2NLmePK7Fbt632y5BHqBTpkEqJM8EnnRose2oyXPmxtwrhsU9mYJjncw",
  "key12": "65pGVMgMqBy8TM2Qyg9B2onEKvxcK42qznYJC9XQirduUACtqJaYiujZQXH6iShkYs7EfxuQRRTVtHMeUMeaDaM8",
  "key13": "pmn174SLrhihS6nVNPQryXcLTrBCkN6TYMgoLz266d2vZS8sgFPGwuFS11fYhdScXx9LDZjNyETMthfu24PgDa9",
  "key14": "2gvovyqRsoeLu9o3WFy4exaoGAy2QUQRjJYzCrnzttEFeCX3DmUV8c72gbFV5WLWHFV9fP4zcVNsogfQUr8Lvq7L",
  "key15": "5otmutcgESoinkBW2rqfd7MdjQ7n3n93atkbyztWJ66upfdfqjLrfd3uQk7vFrRoWXghZ8M8VycMuGX5YbkAdqAX",
  "key16": "3SktmBzextkESu4CwuqYUSEco3QKseCiTvdboiHtCPJGUeqK2JZ5ncvy1yw2zGHC3yKb6ez5bXThk3t9ausEkDv7",
  "key17": "2iamEVrRJ1FiNARHGmend1GVAixPyNK4YPMojZTDLPDnMaP4BEsDpyCptMPahsvwsqPjGk2usLyDVuhWMpsfh3An",
  "key18": "5EAkQeKG188adz4at53g77w1HtQYrCtSdnKYb2QhgYcCtiNkCeUUbtzAKjHVpcWzB2AEjLjsq8jBJkXALNLforbJ",
  "key19": "2sew4e5hKora62XD8VPt3NXUXxqY45VgQLM2p6V2C8K1qTWiARJKc9DVyTTNEs3Qj9shgocvHaVBVHxdu5LeWYht",
  "key20": "4Z1725XZRUE2mDGbGqjdWEJPvRZgYLDzSDE7wTJVGVpYgnnWksHjLJpXw2UWciZA3thuimLwyjkSRbQfv4UTF4uL",
  "key21": "3d55h2ARwjcUD4M2GbQVWyKN84PqfcRKjHjKuvahnU3H7VZ1DVU4fwiadxfML5qcnVMiHx7CHLv5AGivSg1ixKzQ",
  "key22": "4z5jxkAYz6ggiCVmX5NzP5gvXMoYGqMmZzmaqrGf3wy3eSJv5ACxt2iF5QcMDGVbynSjmfiJAJrkx2nXQutG3WPy",
  "key23": "txwpZc6bUVDz6F8BW52ssSicdnfPnDPwwVH8cSfxLgWyz3PUNntBcUs81ueNKHWNM7EhN44YduXzS7sAxXhJKvo",
  "key24": "3RUDSNpFmE5Quu5r4yV4duTE7ZrwQssihnPPRA9uzZu5vFxS7AaBfZfPVyC411f9JepPQeBqYER9HucbXfoYDipA",
  "key25": "5j5HdUnNUqBgwGhg3Zu64UZDtbRVjGHvFc7RZeeES2ssbUSgXcu7t84v7vtnn4msrWPipwjQQCfgdE8t9ymGnT3N",
  "key26": "3MJqQtFgmnYkHxD1CD8j1V52Z7rMCDnhh8pLC68szBZnRxAfyQzEuv6S74Azgti9Wp21r1robb1A8Y9fCWx76jK",
  "key27": "4jSJVxnvEXuz6s6C6mz1qNwEKpxZecszeGNqQS432Xsnf42tkWbun66JcNxxUgrp8giQsL18dLE4rYXxT7rawiR2",
  "key28": "21P4rVxevXnLgLR5zJKZJZPgFPHJo1Dtyux4X7NnrxEZYgusVAidLjG1sV7iDEuVc6oNDAwfTZKN2g6X9o3EZv4M",
  "key29": "4uaPkDrWumSPJaZLjX7XqTZTEmamUcFfn6847ZbUfo2woMGHCXJ1L1dHaU2Hhu9tYhYjrp44w4rAXZYZySLEWyxQ",
  "key30": "41F13DfNtFEjA6ok24BjLMD1wWxNkDQsrqEmZd6Ngci6JmGy3osZBKuRkm4tMUudmfCpwcdTeBXt4BPyEMk4fMis",
  "key31": "573Yg9wFH19PzBnJqZnb8CuiPN3ZSxDUXPc6SmaVPQa3Gc3cNyKKRGSgGU7N5FhBTPFr7JdhRChvwCbUCdc8Rp9E",
  "key32": "45pFGKNXSkb38eajNotUoUTEFzxFn7de8Ru3B98vKbJ8mA6ftbMpWjPi1eGU4owuh591R3EdarXrN7KjSh573jpr",
  "key33": "mDM6B7YCeLUC2x2jt2myYeKnYVvT8enyHonwaRW9vtUqFLwyk8mkokoU2Jhmu25e23qDWJK5gShwmkyZghketzB",
  "key34": "41LZR6AVVY17CAy8stH3TsSxz8SZaxny4HrHdAovzwMWvLH4U2UoL8rr5TVfxGnHGm25wJ5x6fxmimE9T3VFowPE",
  "key35": "5FMbj3RrrNPQkdSoDkcHUnfnj4AtLYUKzB4G61THtR74nE18d6sy5QCwz6Gu9VZPBbDBaLPoUDvTr4EhDezT3bDm"
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
