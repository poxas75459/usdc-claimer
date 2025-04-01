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
    "42NfLVjHHqT4mSjT4a2FMw5utJRmfEUJp3WgxcUvcdxMMX466UTBHx1gszJQJEHwX2BcAMZwT35eDBfqDhNoSTnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hYk9kBLpYmN2pxaYuFKDak2AkbsV5t51zdpZmZ7n8SjTbqCxa2XDCmtqNHYc11F5GmbQNKx8EshsS4QVNzNvnXr",
  "key1": "5Cr7aLPVPietvSkZJtoVq3hSYsrkhqKnvFqcEmqNBj78pgG26zzDhGm2mhj7fA8X8PSE1AEJ5HPyakMRyKD4haAW",
  "key2": "4FattyfNrpaeQNkn3xdF6orXtz88mA72Dj9zJ18pMPwHXb3JxvpsQGgYtgA4MjthknFGZRDXWPkovDDH2F4yBFnG",
  "key3": "5E9rwkWVuuz5aKCJ5WQdEvaagtQ6CeMeJJqStPo38U8pKWpHcMGDQ3PpfZhsMp1KoUWZC1Nv4uzw2RRfjNsMiQH8",
  "key4": "2rGAB66AvDqNvgL5NoVzW5KHrevfvS6m1EciBJC7cNRPD21NMEtZaa7K4Wm1MSNSjB7M44tj6zbLeQwvLvqAPxk",
  "key5": "3vXLgAwH8M1qaSUe9W6HggEB9SBFsQZWmbKVNUbSG6Lt3HqXpWPXj9Muwm4Fmhm5QVQjj2crgUk6wiXN38CM9VqM",
  "key6": "2M8z1Y9RpimbjwcSkYiUacWvpB8ciEYCjX5ahqhyJXGh6FXD3DAqhsUjDE6yQvhLxUZzRV4vE8TTHFWufdTaPnoV",
  "key7": "3qjVpSQetkjVCWgbPCyXiNtVrWTfQ1urNWeNc6fnRAbUxkCb3N3RZj4fY48dyYNfdDy7UCNH8TkA8YsZTvCZePVq",
  "key8": "3tMcdN5A8cQemKvrAYjphfZCsm8W3WuogV2qmXWEawFvXUUnJgVrZ53gjKfC83aHaU13iyixj9mJzwxgSXoCnq3r",
  "key9": "3C3oFgzxMEHkecHJXZzHyPxGKEHQYevYNpWbdQ98dKfm7wkYcScT4D5bBHRkUc1vT1DwqM6DjnHo4ZNFZtFYzmVC",
  "key10": "23YMf8faAzKtiunCN2bpJP8DPGmiS2unJGaqKSNiGoCDb8bXiM9e7oTbcUnhntaxSgqj5DohcoTv21GdpzXRAKsG",
  "key11": "43fGykgLAvLj78HScy5ut4aTB2fDXXvFf5sNjTDMXptH52hKigS4z8pfpiScDP9AeaSTmzwaaoyRRAiTN9ggznr",
  "key12": "4Cix4JpstUcBwyW6VEw6eoauUJ73GHJoJsGtULD93TvUgkwcaBHxBpZjzXGKd8sreGMSDForuWaFbKRnnrwtoxg6",
  "key13": "2bhTngAvZ2VFQ1U6fmzKppS63Linkc41LjwenGiYzmELfZKuXhhcssxpTowzL9ejyuqufFjxbWWvGnHb1RFVCJTs",
  "key14": "2NRFcsVMw8S9tFUvz1C1DeiQ9aej2UTga3G9u1g3qKNS5LK4ShvsYdGkFiQFjrz3vsZyrnD5yEjaJSpxJN84ZaGb",
  "key15": "4RCUr8pLyVgkWpZwmtj5QumUKYJ2ZMimASqLhymZ2ZnbBCCZdgbRmWEFMkCn7o922916zooz9v3ha61KFepYaDNX",
  "key16": "H6DYP4ZtAnrzALiy5fGpYpfdciaGdJNGUWc4anniKeMjEn7a92KS4cEPKd9y1PySEEwjQ39kXrpuireY9NQwcsh",
  "key17": "63mnjfgxMjdAyGSLJQkvFLSzkFTv42aQSNSucgirG5RVu3sMbo4PSzrxfghjE6RjyGkQ7NeTvfF2bHJjcGDHwVz1",
  "key18": "3iLJnf5MVWWBTJwu8TVY3z5sPEeF4P6Df3SpnzM9jfM7QMwVvWWPgtCtt3x9Tha3LudaobX3Tug8MqXFidAN9bgE",
  "key19": "9S7bqSiH1kiTY5xnbpPyTAeDh6haGP3nyyXz6KLNm2TLKCSs7FSEdgkcjX6ETD3P43KDAtTRvS4cpyRjAn39dYx",
  "key20": "5TVDo1A3VMWLX4ZbMDXJTABV1DGkc9jgJF3N6xE2K2n8RcCUMKyLfRX2b2e9eew62GwdgKomakDLg9wUoFaFxt2z",
  "key21": "21UcQM6LifjDzLWmD75xNPoLqMfNcg8s8M3AakfRfK1tPKMoLLAzFac7Q9XsidhdLQHorfANa6TAvhiyGdQvRXFC",
  "key22": "52BGhaxRcgsv37wxW3z2D9caMfx5BJcrEhxcHPLs4cmq7e788TdUbmAGMkfCZQY3G43TXSfy61Qxp1AK5CgH1YP1",
  "key23": "4pHYSuMXDXYXU6rAt4KYXxGwuiPyc6dHXD5FDh54fzU7gYnPLAMg3nNnPktpkapSes5YdtwUaAQzzdBeHDKoafns",
  "key24": "4zjJJvGqSXczAip8Tv7i9ExhG7ZErA4RZ3TyRRVZ5wRSrt9mwuANuxYjetGb9G58DuMWpSQJFCT4tfSgzNMpHpzs",
  "key25": "2SNwUp7jvXtc3Mhv9wanXLjo9BAw3hMdboykZLNE2FJ5mCstm3RaCgKkWExySCxUAf2m3583a4JtsSnanwuKX1JX",
  "key26": "5MonwNqhmVJr1kCbX7RuFUxoKoVvEYiizjBARioY8w5XVRJ5x4Dn9hZqZewNwf5p7jBnGge9KVJMcv1AwHjkd2se",
  "key27": "3DLX9P1HWtfK1VXChpb9GRDyt1RGuaCFxFaDQkm4nRBVq77Y1QfQ61numa9rWQwZSPBYj3ksEBxrXhpgdNnNUvCn",
  "key28": "3EVicoUKmv3QFCpDKZok2iRJUDDddQnAmnh3yXh7pmfbLz3bT5JcTi5dn2p4bfhHdTnTdb7vztJMvumFuTob1c2t",
  "key29": "2p5ZH9tpavKtuYZocEmWcUBTsmbEJQDEXkFLhPCBBxxFUHdwy996uoCgRGxRSvDhjNBU3qTkY8se7BUXfjHV91z9",
  "key30": "5fsJs4YTALAaaQ4CSJeqhiXWSXAC3iB2rnnH656HZ15hsk1p2LwK5UBy84CFgcNkonCuM7Ys6XCd2urMPRsey2p1",
  "key31": "5xdtbqj4XYbXxcmkdscfyEyMqa5gADgMJUr78bjUVnXbb35vevoYP85T1YVnzLYmBb8GMdBcY1q5WNNm56FjxPF6",
  "key32": "AwCZhauPNraPFFQkYoix5Zssgt1cLQiLqkzdvvbD7vywjXEKDZ6wrux3gCKBwNFocmdNkofot39W8f1pDmDBmvE",
  "key33": "2HDYyshuT58kKTidtQbeG2wsfbLG3UqdHejKcUVVwLZ4cXLLPdbG5UGbg4uPoMLxaNUNFewCLyA93CTQGUAKz3Yd",
  "key34": "2UVFURNfDvrUknsmvYF3PvDk9avJQwzSSKu7m5iYCE3dVMdVej8mmqn2Wa4kAhNXuMk4KYhWYLAGBMkJHqXyzASy",
  "key35": "BzpL9mXR6PieXa6PFHiY2KHPnEREFeGKmy2qccPDEohia91F1zy3iLg35TzeWKeHeCAj98Z2GA2aQguxXn4os1P",
  "key36": "5TQze1uZLfVWptSLw6myu9iioVVRCrxqHC8LsGb5XHXPNyKTzMweQNcz2TtKNoKnBXSL8BY9czPX5UM2h71S7tf",
  "key37": "3rmWnwLcM7wLr21Y9S4eJazcVK7aPvGoXQyq4W8s5WYHasy2kNrWn5rbmW7bLJaCB4vx6UX48AixnVR6jYxhjK4Z",
  "key38": "3ibDZnHUGMrQRan8sZDHUF2JzHDSQf3dpLkSUxxXg7MBGdQZthEXfx1cpmnS21hC7mRBhFVHChyzATbW8a8iFzjh",
  "key39": "iaQx69FqHhikwi38nXtTMaZuuN4oGSJXz2KMmKXuBb97XDnWP1ZtV5BbdPGa86X7WXUiaTmkWkUkVq7vTTgzApC",
  "key40": "38v72esUx9nX1nZ45CX9ikymyozgtWBLq3cAkn2ES1ub9LbT9EFJRJqS3J5xfsKj96aTkDpQzcL9nWSxwxsy5SUS",
  "key41": "p47fraxLXMzzTg5R7fxFPD3ySfD8kfne2xg5sUCCTvKrgRVy4Q57Zm2GfwYpSeobmz5vUivUnXNZHKePCg77yqQ",
  "key42": "uSkwSdGpWzR8ZiwMhcV3yFhCsbpMT4Xfv9s5BmQfgtEj5YUBxoeqWUzT3LHShWB3Z9Ak6HRgJ5nPtkxcAepHXEn",
  "key43": "PzZBPfLzwrWM7GUkpVJMJb3zC2EkF76xdebFVFG1xj6Xj9KZWXupZhz5SLRhV7JQ1NZCnnwAda7FZLfFXs2Y4Zi",
  "key44": "44y5ZNGTQ5RTAqcNWtcbXYKhTjpR6yvMucj5Mm3EDLDdQSPKpEEKT1GprYnNQFpwGSoz43tEc2jNi79ghFK8dx5v",
  "key45": "4iFq7BYsm9acuzFxepkiKih5RrkWyh234FiBwerxH7xKKshbkq39Vp7xh46KikCZxWHjfN5tt7DiA6sbGBuAtzWn",
  "key46": "5GVLZniyJBNe9dhshdKQB7cSJaihuSDC1a5XjoF8GeQvWpq5dvhAHVN5dWAPjMVfpxCAzmmrcjQgeYZC69FSA4gx"
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
