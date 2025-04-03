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
    "29U1XHk7zMLKTdyPn6fiYmN3nrR9LR1JyLbDtMNvBbqSG3S4EhF9WuDYiD38j1Dwqj5sDzTtjFW7SGc1m9wKxcE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c1irdcQLQpTCjkVRiY5cnEFmBZdgcMPLB2kFxUdCHrM9HVKceu8huKTMjtmaAWHmAdnn2FWvTqdRK4QUNAUp7N9",
  "key1": "o3JP81ZARNC5bRDCLUgkFvarAFSpfjXJizVhx6SonEaKWoCQ7jjGsXi4XYvnepX3nzrmDpKck4LV3bEEqRwutZp",
  "key2": "32ifDa6ijz1QfXNVZDYRRDsLfGnZohAHHYn7FTHue8JzojAf8goZ5rXGPNX3GBc7fwwbnoMsFfcQZ6c2uKyLRSmn",
  "key3": "cBB3R14xanLosXQtHkpZjc1amLkGAdJ768nDKW5i8GhvQkr8295YX7495ZnnwHWRKtA4MVrqZve69YU1AHZj4iC",
  "key4": "5pyngWQoU64TkxEACujNDwvxLBMV3u5MSUX43nqvrjVsE63AH4YFUTvtMvg3uuSf9KAgUteicmQCPmPnsQd9nMHt",
  "key5": "WnzKrP7G9etpCsFfuXg1GWGFNohG4PWMJV88sS7QgEv6UAe92ooxUV241ZxrDiMzhVP5Y4p3Z9vyjqqziSssxZG",
  "key6": "4zu3K8PFGkXCSoURj91niHhueGmPi8yybVLnTHzwbnuzyYVSF7PtkjwMNbvU8HBGzRFp9i9RtKnUP3Xn8gDkVnkz",
  "key7": "gXVpp8kL6tLNmtu6iZMCFb4TLK3Ybmo2eJEFVTxbks7zpNcJ1ZbP6rzvD5H6VrK7Y9oFCwPfKX5VPt7HX1TMqMT",
  "key8": "3QnsfWqBFA88jDq8QLMccRLaBWKYLsq6i2HjiFFey455hkUNfPDMqgfjmethUoq3j8jn5RGgne6qRH5WKxoLGCtW",
  "key9": "4sQuMFkJyEXEhE1rdEUQqe5uTqhBpCdeFbjdRgyM6DL3MwLUca2ZLtdrkZAgUVytzUAdG1V6CL2SQr89vxJH7EsJ",
  "key10": "3xpkryyWy7kbZNxtDp2vC7mUkhQ8hjG1pb4dMMibMAFauxmuF6bnosjqCdRWh9RjmUJGCT8tYrPUuue79y5kGf9z",
  "key11": "5jKyctHcr67quDnTdt3HtS9bkW8YnQEi13KfvF8ARg5UvEaYFZjxeW4mSZWpvL4KhbLqVdyCqSFpwXj5wTP3meok",
  "key12": "PfcsRo4GEUUvyVtRPgpFTSVTZauJznLqKc8Uz9bgNQkx1jCMFdnQxZ3fLejCWUbvMxvowsuVNommrmipLcQn6xr",
  "key13": "4ramGyAMKVRwVdtUu1EMGVUXHC3NZmSjgi8FG1YNs7sDeGC4Mzc2YVJQJiss2JTbf6re8ESKTTuyrftR3H7ULZ7L",
  "key14": "2ddXKEyRaGymv62tqenJfgqPvDfAeFULepSuP2zCKMSm1ueVxMaFVjFo81dzTSBgjUrDMDn5mFinqxXwBjbtS8ci",
  "key15": "CsqMZaj5J33tCUV1o5HJ99ABqo1J3TvNSSt4EnLq7WfLZMR8YzPDMCWLAts4uBCZ3XqxfBvSWueXMV2AEQheZVP",
  "key16": "3K9YQsNCU4bc7R6545UMmNVCpxUzcKLrziczwo7s4YCyE72ibAEhvtEnj9CDHC73qPiMS11SZJA9tRTeVnHMCSmz",
  "key17": "5QfXxYYjKb1N3VsQrxiWP6ZVpcboepbi78Xs2qwookwGNajyYdRiBW3TaknhRCXYv5wPCwwTpvJ13cUT3598BoAR",
  "key18": "Vu2NqFJKBcBGNwxjrK2p3LFtEAa2pmXMSCCXfRKYrN4KbtvqC8rnw8S9RDt3ptTpPPtjRpCXZouo8Ak3bxd8k1o",
  "key19": "3c1D3YrdAmoK7MbGCDhZrd3XWWagZbXezQjZDdamPR6CUtUViKzY5PcWYeWHD4yVHhNW3uWAZkhhP3GszZ48x6UN",
  "key20": "34dXrJauJRfTEa1onwYoseawnWwvnsWh88NX5nCLeZUKwYZy6NavLCn3aG2fJg6S36R5m5NNLNLnMKpsi17CF9xH",
  "key21": "kszPJc1wmJZTh2X7DamuSGTKcRSowhJ9puZJBtHjzN9ZYw3UUnBBrrWvnDZ9PWcHUekwz3pvomgcG5qQtUuaX76",
  "key22": "3YrYnSSttunpeEJ3PeiYe2VudvmFaBjj3MdRHdUta6LDZutAXrDWhJz5LrUfTNRAD746qxHAkDrPQqGh9TArdjqD",
  "key23": "2iSkiCzGDiD2UeA9SytnocNrnUUiLw9HibSuRDrJyt6GrHYMiXhaNDaMj1p2mCrS4w9ar4FJwvYV2T2W8JqFvfzD",
  "key24": "xta2USHVbnoLtgFbRUVs4Lx137uyCHQpG9GQ6vTw78Bz8x8J9ZKwn1yC39NgiaaLnMqr46m4kBiurZ3mR2B2hcz",
  "key25": "4ntuV1HucZN4mxtB29xFgULAys6yssAA2WeW4bxKrPbg1U1GruCcYCeDCTv79KcfLWrDjU8wN5yD7ehcghLmQRJV",
  "key26": "4ZHSXG9mKcaMMmXsoHsPzDFJy2o31CN2BtcsrUzgHQBRcN4KJdBzGu1zk17KqfzLqPBMZfQU8tcbeHNGEBM5zQXQ",
  "key27": "mdw6bgnd4hD3sagWouMuXUdhBMAvKtZ1pvTQxnzJZAkSmr8fgkqq3kmrUrc4qQEYqJivLJvSp7siDMvkHKMg6m5",
  "key28": "4EdfMaVMU66GA64BuaHkJtDDs1J4yCXQHuizhjqxmUEYfyURRnKpuuqbnU2ARFdwUq5xnJCsVmmLJNBiVMLV434j",
  "key29": "5Uozc1XSntjyaN4ofgGuy18zDe3Kiq1FDyweicDSiyy97Bussx5NjFjjvxpiJMC3u89L4FpFG7bKNNJpbTLqWBBR",
  "key30": "4shk2CAM8VRftjxjycLLJ3uKeZxM56kh59616mG3vH7FH85B5CaUcRrvL4t7hb2tKf59xdGzgmEZhduD1nHEx4Sx",
  "key31": "5os7cEhpuXuw1NpDQbz9pgYwoQNsa1wr58J9wBzvb4FJH4VBimFDY18SbGK7AVmu89SmCw3dcsQibrmEjZBVsjqF",
  "key32": "32tzGMKsk7vr91szR3M8oJLavXY8im8XQWaqVxaRcwQtnSx4djJd8djnrdLujMNrdDDmgTBguJsFt1F2Tf73mW8L",
  "key33": "5R7ThafmoLPCAhE46ZXhq8ZKnC7wNaZ4xe12ivHaPYcB4grxJ9E1DWZRxLWotx5mPafTLBFgmGp59fj8dZbjYZFC",
  "key34": "4ef1DR5fetxiqCQg7R9fW8nUHrjnM3eQJTiXSm2kdorYZmguEKtHZfzZE9deZyWbuahVhJTBbPTrf9Caz9Sr173Q",
  "key35": "xgRecZVPLgf1CK3vaqm5Lp4hkdp1LfnyhVfyjAeJD665vGSFUepk75jBn7hfMT62uAysZBLg581WCMMfVFX9E88",
  "key36": "3awiLr8Zgui1V5338RRepnk8YN2VevdU1D7rJUgVpzRszEkwXR3RqEjAybbHYw93Zs1z2vDTmd541UzbD5ib1Rqe",
  "key37": "29F8mwcGy6dreui6pgjFkxuUk6LvHwMtutw8vqvv1SphZH3DjDUKkKSpM2LNyP2urgWpf6i7fLpDGjxCZvi5nbL5",
  "key38": "5Fbq8kYupaWgMtqbALUGsSFshZxFcSD2xLAdchoPLKgGYw1tPy6aVfw54MEi7qWuXN8i4xKdEnrLCkayDRPiGmgx",
  "key39": "2T5A9rP3oYe5tyzq23usvTaQP5AU4eBsjARDg2LmVr33QGFg1Ysz8DbeFiKEvxiC1tgxKBeoHVU6DzjstFTAY1R3",
  "key40": "jEcGtgidPkXw4NoZXNdi41ZinS9YhNNVGgK3G33rxY3BRrab8wNkp7HnpQgb9uou5QagW5w5F8N1Tws73cYbnMF",
  "key41": "3yxnSg5Xg2ptzH8MY716L5JE6DBZZVvj72H7Bk7QzP6PKRNm7kSsJJo9BPc47nBLq4PwerreLW8u1dFSv1movCSm",
  "key42": "5EJnyTM9BTUf5bgz1UfnxahWRq4KTdPzmXih8x6o2zE4fGpThKG9n45JVeeT5HugX8y5KwPVR8JnyheAxeR5LLna",
  "key43": "3RMyDp8mLdx2UXr2KHJxZXEJeXWcvhp6JgTFi82Q1sC4KM1XrckthhGfNxYYASP5pzGFjKW3Na8RM3NZ6kjBZpcJ",
  "key44": "5Bt8Ko1pg2FpMmiGpGHib4hvhHMGAmuYf7AexvezpP8cABD9h5x5pGa3Y1DqewLroTraLU1AnaNG22RermBR4r9y",
  "key45": "4fLqL7exg8BQuTVKzQtRVGUz3K1Lk9yqDfdh73CafmGwinu4EWzKV79RAcu2dhdxRTX3f2DzrrRUxPANWPB5vNSq",
  "key46": "9RN61b8tYbyisnNBeaN6gRvEYQHMfgWsG4Jzh43UhAHHWWnC7k8MXfCuBwkQtYNTy2hNBbMdGTyvaBtmtfAYVkQ"
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
