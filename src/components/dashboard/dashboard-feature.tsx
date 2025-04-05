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
    "245JX3aQh7GbTt7hdfgxJj72iN47wQkzbNJMAtPJufoSyKNpoz7vX1mFntmvuUv1fQt7Hk7fyEvB5MTCcfvfheWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GzUQv8LnHWkwjaK1mDazKWJqTxfsBRLeH9mGSjdqXteqdoorqkMnMuctWBnDoVkYmpUsAVppekhccsdcgiq7CeL",
  "key1": "3uF3NcnaZLpmXWKb8d6EqMc7ehodhrZMJkwECKPGp6HEFTxtcL4LVuiZMiQMkBK3YJ5QyzsCvAHzS2vBs1P2ZTiy",
  "key2": "5utUpX8AhCqg5MzC5N3Xg3u1bVYh1SDA89oXTyjGLgfCEzhUH8hBNMQGhEbaVmMDmi5CarWYaAbiYPcTywRBUbmD",
  "key3": "DcanPx8gdhVrykyZUMP7p1P8Y6TS8pBWVxk7uTSbQKTiqV5riGQ2XQ2ykgpEXW4L3nch1Q42ds6bHptYn5ySoqr",
  "key4": "5LXNdtxw7dTrBD4QhVWc3v7tuuzRGzi3qr73yv8ntU7kwLECPfJ7n4BE4n6wBECjBpCBFJxYnBCSrNixZqFmGCLM",
  "key5": "4YvmRDvPeiVX7eEgfoVUPjre4xJGkfFGHPnoLuydv6FvQg7b1wgsYt2in7NTovLKuZFBx2EFKRiTy7xTsjuXaWAe",
  "key6": "4twVRDHsZRAUV2QU1wHHcEQdjQVNf7rTaa1buV3d6BYpfCtZvxdfXvDKr9bRM63ra37tv84Wjd1bXbDFR9Ey2KXX",
  "key7": "4LHGpYBKq1LRSYMmxYXj3chnWo9MEUhSKSxKCV1V5SMoTVG3VmmwWWtQDSgwfiKkjp6txyA8xXDjNwKUYh5TQ8cf",
  "key8": "3D3q6b9TMRVwWeGdWw8wzDT9gF76kXNqoYXe7nMxYERiGPqN9LiE8or8j92PLr6Bwho7iVfQXZEMnNzu9AcKzAg7",
  "key9": "3yi7LWQjvSAs1TxGcgUGo6DRLU95KC5BWdp1otavGRVGVZN7ExmKRRngftcP3bBEs3evt4WDBong3jUAzi4SnSSU",
  "key10": "5GaY37tCcWxvW7xrVGcqTErtiw5eer3XHcrfsPuVew2ckDVqRS8WZNre6SuwWe47bB6L8o2bMkmR2jXUxTLNcbmn",
  "key11": "2mGA26S1AEnuCBiaZkASRWQTEt6hdaNVqDoTsPPgqw8EtRBkNknbxeBGKwBwbGgNAKkWgQaxFYwhC1u5JSYtKPLm",
  "key12": "5JHK7dNvU6AVWFxDjJj6Jk889qd91yWnek1RoeW7EUFAEPjS2CBoRmu1swy9J744gX1WyGrULGECLsqjE9pEmmpE",
  "key13": "3GkT4X3b4DTEszmCiEuVFQq5264hvceRx1qXNChTHsiLyV7ifGxwThPuYB68kYJPqbPFDaVgCkZfjjL6QuMfayRF",
  "key14": "49Xs512XqRvoLMdDSNLjWKHXsCoCrqkn9ciZvcGKcBwdZCKvxQgZE8fsHpt1erpLVAVshqnMjW2yt5uimk55ja2s",
  "key15": "5RPh4AKMPg6oWwh627AmfpuHkWx3zgxvQFN8VK9cWsYpWxrPDDbWjNU7WBYrN6Xj4tnQJ5h3mFjd2C3hGEGX4Bd5",
  "key16": "2dCSBLCB7ZqwhEjjkKJb9LhPWxV8fEEcqHWqoKcqoYCqMyxmYw2BzudV9wpYXZhwmJf3f23srkEPV9F2MZcesjUG",
  "key17": "66EjetRz2T1Tz4pjM7fzEzA9sxUukrzBQPp9tRNYKrZKchqfEFJN33gwwMhoK4XcTY77QYRzhCDzA7rmmeqSwYf2",
  "key18": "5ovSpafaTnr7QfzAFpr8VRkKTVDScYJhTvptmXQ9Pdob3rGD5PBAnS92PuE3n6ijQA1hjhSXye2ZHcYHAHfHPfci",
  "key19": "24SxPUikY1Hg2oS656RGLVDMifJwp2xjchBEPZGMGqde8CrLQeVsaSnqMFW5i31p2L3Wia7oHnNz2zRGGnBvPgKh",
  "key20": "4uYsapkiAcRArw58ZkWsXrhEBxgFRgtNBdc2F19W8i9xKKaVrhH6UJ2XEGQAQ1dAUiaDP15YEwTPXs1MnnE5a8Wf",
  "key21": "4zaxezcLSieLosp2Kb8mvtArrBHkiG4tdHBgMoonnPF9Tkcz71TPArPBjLfEUisyruTgiwUaBCNqVX4uj6aDD3sD",
  "key22": "65cHVJbRHAcZ7kb79dooHemEVqr5yDMcSaRG35FNJu5JEcagqR4LHUDR8ap3mEpRoqLkPhNY26TajuUTNN7fiVvE",
  "key23": "5knFigokG7fbecjXq8CdGg8yztTgkEZzWfd7823ETvW6DYjKBbyLC1PnXqCk9XtKNimLjfh3nSAikHgDzjKnVimt",
  "key24": "5fp2VB9tEccP4wEEm1VMG1jSf1QNURF43kAUjZhs4GUoPQmFBLQdeNuCBSdULMKGT7dxqpGZ789LSukc6JTyZhYs",
  "key25": "5MfAfiaT32L5DTmRxFK6yGWBDd97XrL4zcc7Y4NLsidbnDyaK4fhvnk16dJnEjLJRgFqPmV3Bs5UGLpujAWfcmZJ",
  "key26": "4kdeYs8YftqCVHgn4sssCZd3MvCWSWn9aSP6ikE7prgY2aJTThYkuS4YJRmzSbEgy6Lx5S5adBFHr5xbgmt6ZamH",
  "key27": "2zxgyTZoUufGPh9tYFrYHh7C7zRy9Ej1pDtnGXDCW17vpRfqXfJfMYx45KghkfGXSTxV592UBWAvAi9NfWGW9tHu",
  "key28": "4YjivJc5FpHQW35FcSFPMTqAdrSqpKbyWar5dqZazjkL7RRxwiFmPtN6i1BLJ9hSEBGUWUQyrNsjnWJ9MPT6oNLr",
  "key29": "3W1Gqip3aBuKPd9yN3imoqUUb8ij7hqbv6upfZEEsyF6tkxMnifwV7bY7r2Ahgj8Uf1qGHGBAyLRYUPtjD6YSQXV",
  "key30": "4yaCUUFydU7sEqRN3PaVz4SxQSL8hCMRBfsHheHtPsUVeLAeJEhwMdU9XNTAYD2iWwxSzPXLjwLrF2Aw12Gf1GsY",
  "key31": "xkJEdJhXqRchXGBEV9iAsooLC4ucdUNQi9RhMJSddgHMwPDzwRa68NrE5DAnLRv1ajfmttDth7y4vygX4AHUfHQ",
  "key32": "4bGKg9Z1YWsbAxEajJdX7FgmUJQkc4b6rRHT5Wn2v38374B1D2p2jQPUeL7Xr765wutFhJhyxoiC6uMbrQafYcN2",
  "key33": "4GRRybNQjVNfFqbTmxtPSABLwXQT3DdscknZ4edyZeAUc9C8RBdX3MQC28WLqjnkN4V67MuAwFx53zjNpYitA5pQ",
  "key34": "5bcTQGG5Bwp4N6PN7bw6ZnxWtXhCYnkjC1EmEbWV8GHHVkgHfUxUnPiCCZ25BAUHHaQjr1FpJuHdfMu1LEBrjj5D",
  "key35": "5DH9RDPNmLN9y5M2cqdnFViKGcxoe6WXcfnePnvfPZUVqgrxyvWCJ51aFaFL6uAejf2ckViYKmPtyjRhcqESizsF",
  "key36": "5Mnr9JY2QwXJABUBoMPJQ4A85yVMKfo1Ss1F28tRGQiEsqgdCaRqSr2NiaufaPqCu81YjQ6BYKxR8k1H2HEC44cp",
  "key37": "bcjEfnA67425mpbzfL49rNPN5bis4yEh2tKM5P9xcvmiwCHwC3bZWNEaVyAbWxo7VdxEQ95HKYf9kfbGFQUuKt9",
  "key38": "5jvFyW372TD6y3b6ajGC6S5cCHkQMiqjZmjiMQCR2dZ7jTEqsLVmwUruSb8uCbU8kD8DYx76LZSvqSN1Lh87jQnA",
  "key39": "4ERwbuXBZdVAMy8KzFqXHnbY2dEGrNs8CDUZrWiTJXG338S5tB7TduavQi2W4METy1vXjio6CZnLYDC9LnyfDDP9",
  "key40": "2eboawZa1uGjLB4Nf7NaGF2eSHkG3DPtZK82BzPConYeBg8r7kFMqz5C9HSf2kVAYii9zcDpqrKMzBp81xSofWrH"
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
