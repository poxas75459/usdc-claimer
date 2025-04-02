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
    "3voEmTShVFupAEYUDiwpJwXAvYmA7mMuRH5t9xGurYsW7a6qameaPdfXnqBsmTb9aXnUkWzs3TQbUHd42hLaPbpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AGfjqmBDyoWqf4222ghcYAPSYAATfDzVqPoaQwyBMQKLQgWuqPCkPVCvdhThiqPWoyxxF5g2tp4tLJwSCLtuDTk",
  "key1": "2QmnaJUf7kpSshJYswdaZJ62nmfRh3N4NUESP6BDBD2GHabBptXnuikuzvHR8tUBkhB3NbuhohZXgXgBa63M5Nqo",
  "key2": "27Ycua8jJH3WqsTYqSdZFNNneVMKE2S6QSBKP7nxu5ramLJfWKroLZz6Bgz1hQoiCWfSUsTnx6LFsBwvpY1o2PXd",
  "key3": "3V39y719t1xtMsvFLH9jcE8Q34YxsvC8jyrxng31aUb5b6M5usepcZsR3iAQZ1Rmw1LU3qFsyUQ8eVybaW8F4HzW",
  "key4": "3FJKTT9QTtFMGLqWHx72MydhwXuT9D29nvyUD1Zm3SQT5Fm3qH9UieULjotbhsAgWhyhs72jNQa7xyEerYbEi7m7",
  "key5": "5DjfS4hedchAqV7KMfxB6sak9Jg7DQTWvu1gdJCwLty4qShBcCMQros5BkR2tSqAS3eGiuMC8U9FEDmZAPQoNMn9",
  "key6": "2jcundRZxqfUDuf4WmEt3sHsR22mh3CJWdgFAaxwofe7NSTwi4rosGP5eyU9qa2LbSfztBjvcz91e6Gak7XirKU1",
  "key7": "MDfi7ndKqCSDwbAAzPmj1kjs9zmfJvbbeRS6ENb3ELmQskRXjVZU6S32bnhTPAw8Pnjpa7MRySB5ABVB3Eww68z",
  "key8": "65fWiraswcjZ2GSpCV9cweGYQtZ5bMctXBNyKaSWrJrHmSXSsZtmWccnqJYVRBwQgCdWULcyVvhfFVweUPNMDyeC",
  "key9": "5fnfv8DJ55etmYFJ5F5TMSxKw5R41iQsayhYnyKNhHSc3R2mnAUuKkbRWcpeBVXGhfK4r3Z6rbZfXtyjBHKs512p",
  "key10": "4MWPxH9CkMVRttGm2egD7VFrtZeABbmSEWoyXNur85Tkx3FYjgWTsiB9sXoBEq1YggWeGZMzcNRW6bFoLAk9rJxi",
  "key11": "1248yDbp4WiGGEj1ttPdG24bZZuxrBLiRdoMTnfBoHRaW7nnX5oHjYmqWRxsT52SGkkkoyUMmFXFhL6yKTnN16ZD",
  "key12": "3gKv19B6Hn1BzyrNPZpL51zu5czkXCrPwKgE1d1eZiEigQKCuiuusyxbJqLZZd93hzQjcWXQeD5t3T8cz8nEG9XM",
  "key13": "4GJcJcTFZHGGXtMPDR6gnALFrgks8Gvf9AbSPBXy2V1NSWtXrWShfYo1f73eFwYYBnXe5dWBMcCFBGTSMW2E2u5N",
  "key14": "3b4sYLG7h7m7WLkxQ349728GCfHwZujWZcFkEQv3or5LjQNnpGwicZxHZNb7Vbnvb5puoByNKNs4Fynh2h1u93RG",
  "key15": "2xXHSyWqT9u4BhXmgoH1ffxmeSSbs8eFetZTji8spZQtgiaxRxShfw4wiThREXFnsmK7xnwYsxAu2WY9WAGpbQwk",
  "key16": "52MpALatHBi9SKFrGNce5e2kdLRFBQHWXmQAr8iJKwxoETrB28Yp4i2udjMu482pT7T4J3hBzgY3Hq9XYo77xKBz",
  "key17": "2VSRvfsJMmJDE9uuoRUBuif6fzD33ytztbKThaywmtYi4P2tTNSwH8oPgTAJ5qmV6hWe1BTdGDK9CXCKSt6jGJnt",
  "key18": "cYFFEL6L7tSyPdAF65Wpd6FysgZV1yGMfqrMqLu7jjLPmMSChGBMnHHbAmjXyioszEBWaJKjFAY6Jp7z7wW1NH4",
  "key19": "5HMWXUVijzRb3uqUTAos9wmhHGeLgvGfnpWKXMJAxML8SnAWer4C2hEsEHe7MXeCvF1Q9UaQ6U7tFo9WQf44gsZZ",
  "key20": "2aHF25AJqqodVW2RqRt1Kj9UbES3SxHA83gqu1C9deVTTdZUn7NBgFQarqkiuBX414ExPNNRfqrbRiq4X7EQPHDc",
  "key21": "4UnWjQE5Ws1teiVLZpNF4Qx8YgHujcoV8FLR3Cq2S5fC9nzvnpyfqzD8TCdujuULdobnzo5NHHG1RYYC7j1aDzxv",
  "key22": "4PtwJQgAF8Vyi9MQpQ8jT9S1X8faFAfKWLqNirToGkBndkqYaPMkguPqXmoeb9HueZpuztzvk9N6jTo2pJ6E8m9c",
  "key23": "2ShDGvMo8C1ty9eusM2oJqLqYs7LyhUW1meZbSqqpJttJMccuLAY8fJHhojorjhoNgE55XzoLHFtZA86LJ9Fk5fQ",
  "key24": "4YH6qRF7fcmFPBnxcrg6XXv2Ss1Zm3Wj1uFqrup3aWJUjkzRVuHYdcirCxVTcpeqxu9jM6nYdZ9DeK95X4CFCFif",
  "key25": "4iYZ1EetG3BTDenVSXjcTeXHprceBS3kGGt6LxL2W789HwRewzkurT5NSugpZxoiHKjkSVuC5BFzqVhSrns92PtV",
  "key26": "59F7CzpMH5Vj8HkuuBycuqFX7hQEWHcJdbQJzzUT99mQv3C7AiUFvL1kPEgRhS7DxGH3FRCKc5KvUCMSf9PhDwwS",
  "key27": "3AbgxCjj4y5S2BYxgR7WxxzwmEpA3khaQHJuRWfAr2zjSB8YK2ZVqvDpJb3T9q2GY1nWRkewH97eEBqww5ic7CLx",
  "key28": "5pSg5hfgbYVs5vmer6qFZKvS4VEGtKFANNBdZy7Fc4rMu6hGEzRuuz18qSMsDFQSK9rXPsYDiWUHkGTzgMNLc2rQ",
  "key29": "Y3E1hwU7RQkGY2YM77yQjJUX3zt1gYBR5LNw6qX6U1miQuq7rwR6Koe563YfHbXfa39iyG8RCoPhnMJNFrpFiLp",
  "key30": "66gAqAJjSy3PvYZnMKRJSJmQpgKzjYzHVNMVyHsdwNuufWRVTzWF1kX4d6nkrmhpP2Vys2V48JVxL63tTd2V8Zqg",
  "key31": "2pxxGCa4o86hRzFxC78Y1Smn5gWKTQ4DAvpiTGBoK53gedcWR4UTC5vq8FJcXfGR1Bmjge7n1DWbFAusBY7MhRks",
  "key32": "3uF6NM7XdBmuTtcmKGYtDP5vQcujzkxyjZGtwQpiDMSJMjcpfYarGBCUhccKecCYyeAU7vqhutBYRYrXSvGrkzX3",
  "key33": "CWAsBGZcnZkMs3v6NiGQvaju3YbYd3iNGVmeLv2nuw2D6523pdjTGhGQB5X65xLfGqW6mCPE5y9dwMQUFury4Lc",
  "key34": "3aPMPPcgEZLWkhzcdkuXZCtGWpWDfXbyThDGuECMeApghQ6FSqC52KSedJ5L8UJD6aRk57irmPsyzLi4Zjkvp7UY",
  "key35": "3QpLPb34uF3p9U4KV9ZFDB4Pg5DWJa4hkJrhMkjKVsTVxs1ca9cyRHzAYXifPyiHUgGU4qfzVDSSRoYmjSKGY5iw",
  "key36": "4SwcXfdRiCWF34dX91wcRKbbs2mWtaoYefjkAtaMe9ttq1vUT3yG78zGEcWtF7hTCz7Uvmj83EUCdhmiM46FmyY7",
  "key37": "3Q3okVbRZNBCC5HhVBETEEkM2NN4avb5S8BtZ6wQSwYFrxWGddjtLKx5FyCpUpjnwt31tMcug9hvoEnTAJPvHSgr",
  "key38": "5mDs8dUkmx138s3WireGdn2UHKYv51ZAMNbHY5pmdFhFXStLrYiknoFSUMzq4EuBoYqbrfBSRBHbDGuDPzkwoXNt",
  "key39": "VLVKjzts2Qn4yS1jVdu7HNPspF8Xvxsd5tMkJGvXpj6U3HrcKcC1QurWWky2jeE3qaPieUYkUSUU4cX8EEmrQ1s",
  "key40": "3GBiZduQ3ABmMRpN64FAm9rX83tyCKnDMobRDAt2im3Sj2yEooSBGGGuxcvRkAU7Qq69xeUxQTXrhXxrSzAX9nZq",
  "key41": "3PEnjg48kQpCFP4bdFDkUeYYQ32Rz69wsuoYuMm8NMBwPdNmjNgvtnJKoSUCHCXVwtXAhxF272LNSBaCw6YvhMJ6",
  "key42": "2y89MN7QkocsQphw4n7n52ifQ1H8wccj4DQEFvd5PqQ8qy6v1cq3QoEfs6GyAQz3Ctb6wgh2aNgG8ZT3p6hsfqCd",
  "key43": "orvQiDqCCN4E2QqMGJ6kZy34SJ5xpE7JJFJx2dnnAtp97GgozHGGjhzmEvNoqDLLN6SgaZPoTyahUxbvZyTchQE",
  "key44": "39tbdu646UM4xYAVCuDkUVaBQRAgC4WMi8dMYZ78QpVL71nSyLUpt4p8HBZxsZ1Hyoc8miZFx7Q9R478PRCLjW9f"
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
