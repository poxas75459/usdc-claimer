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
    "3mt616x3WJQkfGJvjRfJhChgdYMmYeus5daZCN2iAHoGehxTF2Hz9Zh7Nxr597UwPahNdhXD4g5DSSYArSai5wiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MSPmGMQPumZh1X4k6R5BzNb6USznp8oWQHxpoJDVDVCFBC5cBw7Fv6Bcn6h8RPXWeTSXtaApVvb7gFdcPN2W8hu",
  "key1": "RW9MQD2GtNtxj7xjcwhKaBRvcMSSqNghymyH1g381qKs7KL7U4DBKF18qyZUw7ii27pfFCjH7FjnxMrMPHsUk2w",
  "key2": "2mHfik7dSYc8xbqC9bmiCbGdqxztSUbQyuCxswfboTo1e7pYFaPdkqAnH3EckGDtY7Eb6BH92CFPYrUEZxYDeiBM",
  "key3": "3N6BPuGbBnXMmimKhXw3P5Zk6HgKepofeR9SKh1tnMkZ3B7BbjtmoBV1mtkyUtA7KoRaVR7AByaagfc92GtJ5yEU",
  "key4": "2yXoFyfu5mTBswFX7tTza6zkSqRV8qHsD24WZYPXrZjbAcrXYjR8AWG3T1qAZUSLVJyuXSg7tPs1KK55LbyUGCGR",
  "key5": "QSmqPA8nrLxFxQCVzfipbc4yF8widWqwqETinrsiaBW2wdptDciL3Neac253roDyY96vbaB3JRYbfP1M25y8HoR",
  "key6": "65NmLr94AXwYayR8NmFz2aByj2UHTHWsEsGPSKsjF548G7XkucBWewpmYRiwUuhQESXozuQmjjFVLc1wRHHmHdRn",
  "key7": "254xeWTjKc9aZfmVkqiWmFfe2kzXzfh1Wjy8t9WqGChKAL3TacTgFVJq9gXueDMHJ7vmrTDBUU1feZ2xiNq9vEQs",
  "key8": "4bmp2CPZQkozUfV8yrWQZ2BPG8pCqeHFgnr9xfbnjbQ2cVFsVPP5gndkjv33r8TS1gozk6CHcsWUV2ynKSBbM7XW",
  "key9": "4zLuYX7jj5KDzJnDDBrsnNX5bhV9kd7Qu91kh2KRMPLVHNEBtmNd9e26qi37AdYiZNBxrz7yf4AZByKF4tQGog1W",
  "key10": "4aVKqa2J1RGJHgpukMVGHotjouQgHiWAR4mCVnJj2yUaWDTiZ4B5N2Xb9jkBAWrQW1Aie9NSPyThWHUdcNvn33Vz",
  "key11": "5wzn7AyNt1uSJHjheZNJVPAf6Gy3cKtDfA1GHtrepiB1d1tgiYZpigrWXULZkaFPYRyn66YtbZXfrskVPDTvPFLN",
  "key12": "5jWv1riwmkpK5Sjq8pPmg47zsrhb4mrdT2VRf3b1gCkSdNMRWSe1NyYdByvvyGAqsBQsYwYMEwohKtEHLyLpypNG",
  "key13": "2UvyBH8ytdGWxbBmdSAt5cSP2DHJ3FdcBSeJqswcaBC4hf1tkejK4eAKpuncEtfabygLGz8PxLLauXe5dqrZ4Soj",
  "key14": "4AxTzncDJRLNEirwEHrUs7y1BfUo7faY156ZhLh7RLeWwyuuK2Jj2CENZ7swUyVbZm6xCSoKM2a55eVeqtBRoHtB",
  "key15": "7E2Xhd5sqndJKFTXpc4KmKaM9f8gQ5DPfyg1MTLJATbCkzu3B5VxUVZ2Havdmcu7rN1r9sZCWuj7mxyTXU2uWEq",
  "key16": "4bKH4g8UaawjzQZxfcJzmhYqcD5sN8fFjw9WM61yzmDMPevmxV9W4BxZjoAXXVr9oDkPTVGbwcZmWgdvSu4XcBEQ",
  "key17": "jvdzGhpmVf4KEFRKyeQ3TFNMQFEubtDLVthPAJzJkwJpmtDQxVWep24inK11XCQCyBd5or6BzLnTffCn4nQiV99",
  "key18": "2eu4GTmaWn2V9WeCacwV5HjE1iNvXdmxVREbTJMmSiw7KPhJBL7dfr5zCghDSHJxerfN4FxT82GDV634tweye7Mb",
  "key19": "4ScK3rw87ifXp9KD9H55c8BMpF5aLr5HRqEHz4bbaa7NecQ5QJ1DFcoYHNzWFokCraQsuqAPkQVaefgCKTKhHKjP",
  "key20": "3gDEuSqyBwAELQ9JakdaRjyi2Kt3HuLreXecazHBqhqXqVBy6FsEwDsAAxksJNRk1HNbAdsxbaDpuLWpmB5DkJnh",
  "key21": "yJ1thvyAW173wQ7ckR3Kk6yrW3CpPREosUpdJpH9ym1MqT1g2DuugqjhwgG6LEngfsfgTAE6ffhwBQHpZmBVU53",
  "key22": "57qhewRjQtViWnryNkMnCWADgUEhznB6WddTofdN36byKSyM49H1JFjiBGxGWPRuRzxFsbK9Bi8HFUcemUUjY76Z",
  "key23": "2dvL74qCvaQKBBdkd9bU4vRwMSgJkJN4sEi78Cm6k77zcyN8J5447ySGbggxLoVvCKop4sZkesqB1d5b4fjYy1Sx",
  "key24": "4vyYr8KN8tZCAML7xLGDoAtaz45SwYPQdELiBD8jkZJGMENzJZSqYynE4xPeN5dGgeLqMTDsodTU5rAGcbEph3Jv",
  "key25": "8feP1oq7CRAWoNmPMErhtcrLNVdKEz3iXN4QSCpdTiWZ3o6tW9wCbKkCF2G85GqSEworjoiycsgqtghMFpSgK6d",
  "key26": "2WgeZi8Ta6ANaKq7Nwex9CqxXc2fHfm1dy6BzSvcWFLVMfThyzKAcQcme1JT9ssWvkPjqvF9vLYTrwJL2Lzuv2RR",
  "key27": "5hjrp4jQJzWE4MuXyAKdCUQWXVYjBHUjoPtcpGU6f1aT5KTvG435KdTPHWmm7f2cGGU4YNxSCHqJbwVcTKhFdjWb",
  "key28": "3Qkcr6vAqwxpvA6Cqj7HvY1fxqP1mp19Q3gMmRB1yhk5qs65y9LA5YXkCzx51xzunaZKTKKWxsCrvbvijJVPyxfF",
  "key29": "r1d4bgixto8yNXyXuH2CCCmNjijtX7kgKhKdeEo4AAymENckgj5VuwEYNs4iksPnGSWfbgMNsydYCZBxK7Mouwc",
  "key30": "5WRs4kVT2X3NBd2ohQFi2eN1p4ZNNhXurK6LrKRjWPh3GN8Mq6Z3RtpTXi12xcTSzaVSfKvjH5hR7enKbtpsmxUv",
  "key31": "3GCugHX1Vdvp7uyRuRzeGebeEnwcQH2xhhjv5VCrDxT4u1RekrR3QcaV2haYpBnMrpVgquoYwkrtKUzZjnD3sxdp",
  "key32": "44wvPvPokU5b6yvfe7SBPBMdmzZdxcSNdAQNEse8XSxFA4zND5Fw2aGdBWJLJNnh8ynr2AFYCjLPFUGpUgoxWrML",
  "key33": "5Zrz348GYUNH7AVoe4BkEjgd79GJGewqvriWJynnJQqV3QMTMD3Kq3TqEKKQRAztJ897EFsw4vgLuMoy6AuSMHxn",
  "key34": "RfaSgoaJcn5uG92Fc5ysG5HbtCdTsssux7YGtzhrcQowDUumunKF7bfp57mBG2JXAQguxGXrksuSF7hvhKEDfvr",
  "key35": "4YTAB36KXAoW7bF7cUReC9q6qxpxzwZmU6m86T4mLMmS7eU6WpP7bs9HoP5CS8SFEY25Kt1wmkSsd9BuMxYJD2Fa",
  "key36": "3rDR76iiFFQMUVKUMxrk9wtLyGy55PFS6DJkfDYHmHbWzU1vaZps1sBx4d9G6Yvd2r1xFb7v2EbpyAibnSHYKUi5",
  "key37": "393J1mh5v1yPcXeJhA5sJ23pv6PV9ujjKSdAunDy6o8yxthg5tJuwL2mwspQVJBCBkWEVeG9eW9nnnivwmFqNiFg",
  "key38": "SfKEPrb4fUgCi7taMq8ZdnczhBdY9rmXWSan1xXyUVtdiuAqZRhm9dTkajipesXbxFTs3pQsoNFbGFW1onP6jyZ",
  "key39": "2iDtpkWtnUExidFTi5pTDYUX53wcmVkbNoSdwFRHHLvoXnP8LxaWoBrZf791zyNqYZYy3fK3xNQzbKWX5L5E5jkM",
  "key40": "3HGWjwK4tfKsayC9PkknRWf6W7MDxDF2tZMmDsexCD8sRJ7pezeu9j1xozq9qZkJw2KPtri5unx2ex9LwEK8NkjH",
  "key41": "2stBVVjEKQkSGjTanQd6rzwpi74Vk9Up8PPskqKCnfvmazLUTgRMnbkeSXxfhwTFL8PjZAHD7Jp82H1QFrXob3sG",
  "key42": "47itk48Lhq4yK2WRFhD6gKH8u9jdy6vMvLrVp7oNZQNh5zyjXv2XaEKZTxoHmjs1PmPYwNtSjNcWPwmpuQPCsrB2"
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
