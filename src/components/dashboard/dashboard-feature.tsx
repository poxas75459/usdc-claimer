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
    "3LNsBGuNMphRxdJc6UcFoDWx3zAHuKyV6dnjsy1TSARXh22Tq3dLFKzTPYBvPrFwkEvN3jig8Jwqf12rvkWg2GxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AroEciNypY5U9TigNukxA28ysv4vyxSBafBxz5YNZ9A3LjdxiJqR4GJAcQ4LwGjqe5HSto3ubDBiiw2RhKoRowf",
  "key1": "X6iNbVKUenS3UMNH8rYsT9tSMJ6nU4NfP6kaoyer2749ka6XRJiCN5QAJ6kyVTwcw97DAREDEaSdpoD9hcF8ZM6",
  "key2": "2PZ5vu9vxnRDZzy2LvsmxKpnWCCw5TRZAkAoisfJKrHvqPXmtgng6HjUu8btyqSyJ8QBSYZ8CWVr4QPBnSnHLbUk",
  "key3": "2umSxqAHxDmP64iLLvfx3J6pEKahiZH75CAyv8EurCe3NuK2FY5FS41Bb3CpyLuP18qFJaDnKyXBoCMmqagmCGig",
  "key4": "31KnM7yFbrirxqTjMV3tknbc9WiuftF9Kn27GEkyxdR8T1Vm3bwDAnxUaJ8zhU1uXUYQ85R3tvrFM4rDk2PUH35t",
  "key5": "2yAth2VvHGNFbAjLHwBNx6kMr7wYxFuSZv3Nofc4L7CZzDZsJy7eLikW45v7WyinFGrahgxYuCkQ7iy8RcqoSA6H",
  "key6": "kYiQJoGvHVjnj2qHsjb72fwHWZd1KUbAamZzkktjfXSAkAJQYWQ4TsQBh9VZ8HHh3YKp75uqB9nNgb1fDKBV5YW",
  "key7": "RyAWn6FHWpFnWcPhcw3DxeR91yScAkZM1eeN9i64o9XwRYT8LXddod7Pyb3d8nJ1z6vSVUQzDhwcxc8eHyFdhT5",
  "key8": "2yMsZSnwvKSXW6RtK98rTyGugBCoyvFVtLSVp2pPhzdnkmN3EFB3jN5GkSBsxzjix42mjz4JPeXZRADq4fBbsKm5",
  "key9": "3jsTv81jtvC9cmANfSEasUGoniFgrLBhSoKJx7Qvxzoy1WuzsZPdEXskSBeboeUqopgkohCbeSquoXbxnDtUzAuZ",
  "key10": "5STyuTk1TLbY8EKmA94ajkdx3a6d1xmARPH58XMwT1oH6VpHteyniBU1sT3AE8jGQHwzx9PSpVpTxTbLZ4MzSTLw",
  "key11": "4XAHMSjeSgt6voiphUptvMhvW7CXWh6DyUfqxRAnhTvWfRSYJyLaZ4Lf27SFT7R85kvWD93mnP5bVhDUj9BWjsDi",
  "key12": "45zbDYnNjCjZcvJxGQJcwNe2n4Cea5jxChhifYgjBexyvcrYTMEnmqgjsaFhoEKYA7aQBU8wEoznzJrQonajhKty",
  "key13": "4ZU9WKffuhk9NrreFNDghvvkRHKSD98KHDd6oqvSiVRryzqZH4WoL66FacdqjD6wgT6LNzzwPnW7QpXfbcZ9G1uV",
  "key14": "2QRPCk6evpdzBt9LkD2dyJJoGKeaPnUaZPRmbaKPsebo4PTE56q2YeNYGNx1TMhuQQr15KnE6KwSCqqWUbK7wofV",
  "key15": "47aktBDPGr1EeGoe9VRUqz8t5yrpaDxf31TfdPCWUgiybx9jD4TCyg22BcPQMXjT1MzDorxQLxBX3KNjP633piJY",
  "key16": "42fx5NPJ491rbDNUadYVgjrrVoaGubFragFvo7UGCBNcKoxkUQiWr7Spaw6oWwqCpm1epKHP2orCXPo21kaAr8FY",
  "key17": "2p3J9NxG21X8Ynads9We12aYLJu6qmpkWxcukY9pRXJCnCQYGVH5pyxmvXS67Bg5Cftd2Ds9cRojRVuXCSndTMem",
  "key18": "LRijZQZeGktYLEJfwqTuCQv74FbkgRmc9ixrfuGspekXKYRnW8Wa8YJjBk162Aj4BdLonx5tLqFGwEfEcT9GGkG",
  "key19": "2mdtBZT3SzWAQf5kyxH1kLBmLdwr5xKYCCsLkSN6T8tdGVia5vUU9mT1R9dAC63jDth7aiUxRPnwRx71PfE2nrFm",
  "key20": "3xaNr8oV8WoRFpkDRu3dsQtAsX89S8x9XhKJafMx6Xrc9VfjxjC3hxFBaUkHxCSiG92Lp7T1ocuMUhkce4oGwdSi",
  "key21": "5KR2yqhd4af9tjwNzuDjFDm6axG3PR1tihq7iTWDcZCyP3d1Jah4msegMsrmwATokmSbdhkzfyrv2EZsysk2av7P",
  "key22": "3hrTJ78HYTxHZWTFjv2q64myTt5f6h7Rh4XzpQedYKo7vKHkC5eEVRBNgsAYyKbYGJAW378X2YLRagwRWadvhqV3",
  "key23": "5fuH3qC9M69kC6tjwssxfuFMqK3zxjajCLx71d4SfW87cvgJfB5TvRYi9eUC1ZcipJdHdLvEyJwmxYrvuMTh88vb",
  "key24": "599h56GfNwEEYtEYhD6ZyiweivwiNkSMpthEMzofbYuojY359xLNRMfJ7PfvjMEMFWTvyUQGxqVzq3AVuMFNbpuh",
  "key25": "4CnefyBDwKu6eygrVsKfkyGEknphBPTW7sypqRjqykg52jcNRC6pppGu5MxoUTVjFh8EooW8mx6hmu7XmKgqd5Tg",
  "key26": "5jXz5mEE3NQMEKLeEYQmYrYMCAbgR5L3jrffi8e2K4C3xUzYyRxMB63HCnqrLBBMvuTFPnivcQKFzmkvCzdW5Sbu",
  "key27": "3xLVtFQRQWcSYt1QBiaoLiECfuCxUNEGhhxmyR7LxHyGrXZTaJzytw53g5DFqS3seGgLX9dwWqZMkqDWNZhY1Dt2",
  "key28": "wNUpY2FTQ4prKSNzzyUXWJoRD2h5iWzUk8581L1JBwTN3BXNCKefE8SKBYQYEDLnmU1AqEYvPe35kGEN77mMPZ9",
  "key29": "5CsTn9Y3ZxneccG1fds19fr91GKjZhNVLFS83RVrYH58jJWGVL2p7QtPZdy3tRWUfcLo5sd6XMt4wFMHPunPgaoq",
  "key30": "51itvNTdjhfRbrLi5oZYzKZc6G8HxDPGmBDz8uq77pZL6hreewBZjs6zpYCdxubWtDZCfVrfUZ54BXmAdyWBaJxD",
  "key31": "4XEF5i59eZEm2YvoNHVcV4d9Vaie948BBriGjzRSrPF3Fg1eHjfRXfDWoCTK6tkA8rhfmaJFxKgr7DScSJYrTaSd",
  "key32": "5pDzjDdtKbYEWdegTbbedj4fRVfUen78j3TdUUShFFNQT7gfZFmU3EyoohUvowzistAb9ii8h4CS7BHZejnZUkTh",
  "key33": "4Rod6TsJYu3srFzx23gGa1uoqvxzio6EHoCHXVXkexuiCoc4dvs8wLLHrvwpe6vhpssn4n7MDKhe7cXw9327cvdZ",
  "key34": "yDL7QWKtthVbgeQRQPPB6TDy8YWqwp19xiFwDWWRszD5fG2uHq94GSDNjJscDv8tBuXTqrh1dgCgkQJ5hSDk3ot",
  "key35": "59erbaJEcxD9N4KVoZBAs7JbdpuavJbaB4hdNMCLiGjUcu3TfhDJtBuzSdir6vS1pCNhkZrkvTV1AWtC5dwMVZb7",
  "key36": "3QvATFVnXtVrKFCyDgNWnncj1duAEgmHzXQ7i5xGxGSR6cVH2LUKoKqPgY8uTPvtuPPANL8Jhg2eCyiMfWzhr2wn",
  "key37": "3LaJz39dvtFa6N3z26G4XcP4dEDfgo1TAWfesM7pfBWCJawCNDXa9up9cQ71ju37BJBxHghh6oPfiTMYSUWxR4nx",
  "key38": "2t56GiyvwBHruG1cyAUN8FvWhtrzC9vkdpF1RbtkPxwi3iFAcQbzbiAkdUKmUcoM6aJ8TGPZG47DgsXLWAMgUk2P",
  "key39": "2MhkBnXUmANzyubZKgfnm5f7vXxJ7d8p338ZsmeDdHGiBvreVxrcT8wR1UfNxbK2pfemU6SsAtXLvtACmMo8GHzZ",
  "key40": "3ic7W49MEX6XPBMvSkj8SfBwj3n6oQSca629NyJyzJpBuAURi5nwQxobVQHJzDyqd4Gf4TfE47axEkxqQ9PQq7dE",
  "key41": "3b1iE3hoH6UjbmKBeVP1J9Gk9o946Nh8yuNhGYsm5tykqYW7hG5ioSapuM59T1FoD9ZXgq8DiKe56We6uKrSykRf",
  "key42": "k8erBPTboZuxWujdcY2zLo4hmgg78nhwqdFtTNUbWwumCnjyijN7PrZUgwZJH6GHi3onakKWkQmkgzKR1ZGvfuy",
  "key43": "4oVADVr6xq82Y5ggNwa29KbsuANQUDtyRr45c1mpthyHtcPfftcF77CYj9uFV8cw4THwvEheVexEnw7Lvt5u8xP1",
  "key44": "4dZEjwSNCTibxEHrbdyCPreb8xabpYJ4vsGzM821KvsYKeabCmP6rfBtMf8Hs8fv2vSLyYFt9GVxz2QaP51gbUUS",
  "key45": "4PqrAYabgVXcG6M1XyVf2DugTQhF1ZeZ7HMgLHngXSCTzwTwaw3SLw6nFhDMEm4PEnhgTtE1VHMd4uJ2rezboUyw",
  "key46": "4PZigc5TBcyyZZvhkvi6mBSFWZk6JsE846HVucsobxn3EMzvohk71ns7nxYMN9ctXoKAPZGYawGc2qxUw4rg14QG",
  "key47": "UKGSEzXY1K4sBSHF8n3aRAPXGX6Ssd2jQdvHiwkA1xmMLvFq9yfibp4nVX5S1DKy4cmcT1xRXrGNjPjgQtdDjb7",
  "key48": "5gcnG4M2bwHFq7VR8m5akk3UEDuZLmHQtxtBUMBsj7gLRfaUxzkKgXZkUS3m6fNLhVuE7bTQct5FUqDiRnhAxqaz"
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
