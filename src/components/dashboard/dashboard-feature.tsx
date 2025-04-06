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
    "3m2EctSRpkSrcUJ1UDBUGEzUEiTr21VfMMtMTEkh5sVXr2SZ7KGUjqK3KwsJ1Fh8eoXRJpC6xZZg449bLnKZuu1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UGWprs2c6rbUD2fGcz76Z7neJw9Wm3KytHsWAPVfVkjFenBik6vZu88JCcsHVsZyzqfF8FXH8D2Nk9VnqVGsj2K",
  "key1": "5QTSyPj9DVhao4o9Xf2vpyYT2LP2Dyr5WJgNyHqTp2sC29D3g4bm6wUyzB7rP35yZ9AsYFqiyUmSAUTDaaL8XcQJ",
  "key2": "26HmGhpc7ygVcuVXythPBtfMFsYD3MXgrJkWGsfDhPfhV8ci9nWEhrCHcuqCVk27VrgKEiyeG9GU5XKeQCqdYHFh",
  "key3": "5JT3GR2xVV2AehGzXeDxjzqzaibedeETaEW1Z7iwv5rzGgaKWiPCn1XiSRyoVoHBhfkUA3xWrDq83iPcN4tscGTy",
  "key4": "4Lxc3PLGmgwKYG8MGZSudyMtw59YS5A4ZnEKHdkzrsMYBoLbsDy7VZh8gAKg3YSHWbWWNkJPzfu2M19JzrqgKkUQ",
  "key5": "zuswxmgncEa2rFpwhKCVTCA4deznUycuxnK2mqkDuA4kpALxyjchhLVw6ccg3aqtbQPc8xGZnYEX5RANhf6o44M",
  "key6": "2d43E2dRrU6959EX9KfN1WC9RsWSGNGFhcvGFsUrKmH8K3YaD84RHFSXHRYo3eSN53me7o3pJT3z2CV1avPK8u2k",
  "key7": "3tjB8ASmcTwZNbjZdGftXXD4AVAAz14vHzBK5Dk5CxfGU8pyTvowDyxzMAWhrnEHG5d7xTPxWc95P16GUisuc7B",
  "key8": "5U2F7cTjHx2ug7ZCpyTdFEeX621sTcS6h6HMNp7JYc1qGHZdQvdbz29kEXZiC6hkv6aD4MM4ZKwdV34eeQQpBBQ3",
  "key9": "4DXRF8KgFm3pjkEshh8rMdVKXcTTSskJzZC6GCzGf5hKuhTdTxJx1yrunGCqvStfJqgsCWeBt8T83zdT6yFWbbHv",
  "key10": "5sxTRnYFszGLKC5V5LSbVGtzbV8SnwDDgCsMc3EBeuvpaZJKYFF7surcQiryYnLb1YwyiH9EibXDGvTk5pYYS8ed",
  "key11": "2xkKzGNkJpLWBB8JvrAHmB8XTnHbWzY3gDmktiyVBtuEZT3TzML93ULjXoC6HhRLyoGbSFghvvf4GUHqcKbuNQgg",
  "key12": "4o2py79DT3HvvjfTCue9jwj2oiiBtNGDxKbWBLEnVgntZJazgM6YQbQhLSGqa6qLwrN2vjPqzpyjTheksoGpgMEN",
  "key13": "2sWJ3gL82PNjjz8EMJjFfWNga52XxuJf6gh4DB21b2S9KD9fuaQAbs5UrdBfATYjXv2nPWsiNLFkfXvPpoCnvXjH",
  "key14": "mEgoUaueGY881Q2FJr6BPPQfirPhwWdhE2915MQiB1rCEvC9cznoLsjfkXQtU3SvQgGmsnsmupery1c8J4qLk5A",
  "key15": "4tqKsD6bmSEk4ENek82UFtYj6abEu9wevaeEdau3iTCuiM1bDz9Dr5MpiSVg7zwWzA7mjVX32wmdWgHXpfJNwWEu",
  "key16": "2N6wCNjai7Wj1wEr9rxzVPGtptFU78DYk3nBDReXRx7kQ7BqcbSi9uwCnN1VAMhwiHfNcoD8nJzqa8yxgP8wVzfD",
  "key17": "yJbZ52mw3qxr4BD6MegF7MTLKQRpZvahiQSEopVMjwiq3GxycmZMvNxofViPgGPiU42vaGK1AUYL8XwgRxYc9yD",
  "key18": "4wJfr5g9zfBbYgMc8SS6EDJEM3GtHz4nBYA4XUXPd2DFNhvTdQLyDiSsuryrQKKxcis5s56tR8CvAmHdhUGUusCu",
  "key19": "3cZTNebEK8XxGhusQtgQh725uEpya7fKy8fRL3UJxZgSdLa21mz3m9eC8ru58ibwNDMQesKBFAKWhE9L7YsnBkAY",
  "key20": "3SQgKx1TYU3QoNMubpsa8azztBj9mXLCF9fm6iMnaUiH8JwcsRrL3BGy74Tz1xsnajCgcfZFwk6vv85VaZ6N2hVS",
  "key21": "21vbgDfYyoYxnTLaVWkwBuohx6YkQNcMsge8wRVXpCcojJ1vQuEkrMZYJpcegfNdNCWTWcHZiVNtAciof5bGMNzA",
  "key22": "5iwNd4m6ZA2aLQiME1ZivdbH6HdnMdRZCW93TwEvSaKQMjVwfJE55yc4GuP8VwMQB95vmaMJ8u4KbyAUU9mzKfxR",
  "key23": "gbfPFvcgrAVBaygwQVt1uyH1AFPVfa5A3XG9KvPo85kp1JxE7ULhzw6w3WWCdoTXWgtyADMtUpUzJzmW8ZxWX4u",
  "key24": "9Egscv9QrcmAHPYbQGkrJvZoM67jtDQ5t1QC2QiKBsYZNoxf1LvivjicE4jC7cznkJ7PRAykofY4x1twBRy9W3F",
  "key25": "62j6pT2ojf9orjwxw7VkuZTvYKo5NXKc16zS7Dxmf7XvRApEknMc7gixaxFGfY86p9syooMgzEkqFBDor67zfziL",
  "key26": "61oMGfYy4ncvdqdnXhTWky1a5jtTaaRw7xRs4Wvg1QhYYq9nuYFtYHCFhsnuaJduETYY1M1Zb2GtDRfF9fpTmxnx",
  "key27": "3iLg2T5hTfE8xrtBLkK3X12C7Lmhgac1HDmwmZ8MTgn89ePZcmWKTnQZwtT5Dk619JAxZGeZSsMcyPqP6X3WUB4F",
  "key28": "37Fem2C7Gyc6ecWuajy6YY2uyxFQjst4nExqs9uTnPTzqm3JjSywXJtixUvZ7ANPJCeCCTAoKN4UPeDUJmbecyUZ",
  "key29": "2JUhX44n7obg8ikTQTrNvRcWUamz6yw1ECnRReNCipmTeiwgrYMdeGygqpys6faisWPu4VV6PmScgCtii2Z9zr6p",
  "key30": "65JttaN6e6jWxNsfn7nvrb8eSBi9FFjWR6KSnoh2FLE3qKdz7GSpKzN3jKpKbDxFGPLQ3kFihgToGkhvatUJ3iEV",
  "key31": "3qPo824s7QbGFkpKEv5LkJnJWDLZUFDrRPxQAUQ4rLrX7uFVFy8KBQGFxBkToGYn6fmAALFdEyDFRVKC93ihTGao",
  "key32": "36NezgUALxp7Pq21249KycebkYpL7JAnn5kzi5WZkBtMReMig5rFvAzqMvrcW6xYRkXtNrmRdW15dKyQn4fwx8uw",
  "key33": "5qWUxhH77DmXbKxxqj7wNBDKs7oQCkShyQBddVprcB4wxSQeY1oasZ4bcGYQsFFHL4g2g6YhXueNyJEMeUY3Wd3C",
  "key34": "3rm4pujQczXDbvN87URWt5dGt9mDSPPcEHLYJZuwKaqj4txHNzgvCXhnw6hPEeUELVm6TmA8rQLnJ7RyPwWXo2gP",
  "key35": "344svnfk2ib8uVcxEGHXK1oMTZNoa5WyD4HCSYs7bw75SdDMkkLvudSfUMVj7SN1B5Np9h66VDbXkmuNW6J52Hg4",
  "key36": "3vfzNu5mD3Y5ZjiBCkia36dr9TyapBkwmcWtCaPTbPbrMERwtHqGmhkhDmhh7UtaQabZnGxf3Dh1wveqdTDN9yND",
  "key37": "FguMEa9FrkhJ8Mkffx44HvQBGsbLXuwgXjUxUCUxFcLenMwVpi6on5rdVe24fJEiDy6UwNatsC5V4HQdv9M8zTG",
  "key38": "qoSn66Zr2inWzzTbAzunHyKJH5NheNR1MwjuC6RHsoioNJb6MJzHs33gBAtxodhNAfYJdVMfuo3qRUUkQf2yTWQ",
  "key39": "5fpBKPu9FcPVvYwXwNYwKK3L8qJwHUyg4fMAwQyRTZYiYVBtFjbgYa1N8YaU9yhmbvCQnuCnhZKBRyRNfhVTdz5z",
  "key40": "5MW7RA9NXF3PfP9wE7rFVWay888wXV6yx3MTUQTxnTszcQnFqk77MZ6pVrCW4eD3tFE4pTu2CKgDfhVpxgz3MbRc",
  "key41": "5rH7TsChbox9wAN3VDMhXV1P4FKtgGKcdrs2urrzza36CU3888A2SqRwS2k4Awe9YJtwE3SiswWqSL1rwYBz4S4C",
  "key42": "5m787vqVjjV185abfDB9zJPRiXt9avB4ozVm8jY4441JHwARadofMXztDCPSBVD4NjYzBm1NaYqArnArJqQRVao8",
  "key43": "37ugMb8WdJ7vDZ4KiKoUQBm8ZzeeY4z34S9WBqKy6xNd187KyKiNBgUUxTuS4t4b3EVux6X6rzFxTn5XTEKyp1y2"
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
