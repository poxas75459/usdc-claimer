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
    "2fu5sjXmyqaqQiownTk3YbSUmWEqG4qn8rT8X4LfXVRzRsVpbW7soUbdhjTZRfamg4Y3hSfPaXTx5GHrEGG6HdKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WmK3KJe6iQHfUBhk6nxcDuyEH9yspD61qqrexyi6F6jG5wV6mZQegh87A8ymoX6d6ihfAZ7BL1DbJDgLTTUVU3e",
  "key1": "57aT7D9W7C2U78tt7FNTR1oNNiKYt9XmtPwmG45PxwX3cViE6tZS3w9SkZznaza2Rbd8WHUDkjLTCwtsyNJ9fNdT",
  "key2": "3fVK4teckJxvKfZnUzwHda13eif25bd1E3m1QaUy1puemoFShszmR1YbhiEDG7M38YKF2AuUffNmg6hxTedepjGT",
  "key3": "YcPTZncs3QDvjgNUn5kPpPL5SGbuWz2qc6Shrve6V8kzjt8MVwWiRL41kUix5fenrAZiwvwYfadiJDB2oeioCku",
  "key4": "3Ht8mGPMi76SaKbKudxJoWtYmeHkXHkKniJpJB5SjaTiF27HWPGQkAY2uPFJZVnWLvBLFBeX2CG21eS7ekRL9wBR",
  "key5": "61taGgm3mJG5kxc2SAFmCpmhfuvYuKK6JJChyWcz8BQK3wmq76nKq2ijiZYo66FSAUXCg5eFrxKjxAnbGhgGbPv3",
  "key6": "3uUg9jNSdq2wm3dNedNHodZLvx7wvGd6K8AQoafhymxe5K3KfruVgW8BVvDhN8bUaS5Jaeu7LPAsNMBvNA88BgC3",
  "key7": "4HQFsVFveBGVMuQfaLXjKJjUmrAQgebgULhEqw1V734jSz1FRfaTmnaikKerteZUhUMuoAhn3xfHbhgVSVz5BsRj",
  "key8": "67hYqc5DNKC6DvNned1wfb1otZKF1YgjmfwxWrAzvTiC9XQXugGm7o4TMFCktd5FZkkrLEQSccHhLXA6QdJHMd1B",
  "key9": "N6ce7TB5ioQi9cFDevtAkfYdRgCvhJ4XoGaqVhbFoBX9SVuj4au4AMPycMMLdACtxBfox251DsVZd8cJDqajzVV",
  "key10": "5UcKE5DxebhowyNwkJWW2sQi7mABM87LCrgXY2GBG55qDfmHn2kHvquhctmW18J6KU9yGJEpNB1b4aypn9UuUeWD",
  "key11": "KgtpXUyR6HsCNtSEknpPg1ozkdinJxsSpCz7od5Kz4Cpe3NphTcUD5oSZg96TfkGx5XjkuyYGcMS8dG4xLT6css",
  "key12": "3ikF5f7TeN97RwEtddBEdUX2RRnkGhmzUgis5YweVhi8zQTzJVjaFTVysQrtXVPqcCGKkQHVwkbFyFRvb5AxmAx3",
  "key13": "5xXsvcVqd4HckmamngkBpKPA1xReqo8sjqUhog4L2HeWjPBvnoHLYsBEb6LEJP92ZwqDYZ7drU1NDvMLt7K6kKip",
  "key14": "VSH61mFroamEaWEP4j9MBHmBVqRHFTHTDVRZJfiFTDt6tHafed2mmN8CLJkX55o8L1cFnSJUEhZzuDWoNkHoZU6",
  "key15": "5yZ8v3Qvtkp846x92L8naSn2nMaR1Q5NjBypWzZnRdikwTLkKFZncmbe3P4hrp8DmkudM2B6Q6bK9LG7TV2oazMp",
  "key16": "25zn9tQv3HEGCSBSoWWjrakoCHQTLAJxL8x2muesGndMkrk5auFrH58FLvM5Pd2RdsKGih1UuVBctLBA6UgMiqMu",
  "key17": "3AiNiGEHDkzux6VDeX5DxK4i6CgXQGyfCiQcmNnQh5fbBCXabdqg96KuzQ2FjyeTtVHJWFHYpqFR9h1raAc2qa4w",
  "key18": "4Moz3JmUuzXW1fhk3iMHABnYkWdJqG3KCtDg6Y94YQPkvPhbFHkp8QW6b1aHS3zWL9h9pBokFy6cX9atGYP9gPmH",
  "key19": "3xA9LgkuBGPQBxNCjbMzqFEXLYQLbBHjDKLMigrmE92ADUfvw8vriN5ePQ8yMyb4fn14RFzpxAxHf6B3NViPdC3e",
  "key20": "2B4YvdM6j8Veq9seQEi9MGES38YdMdg2psY53cjkabXbTrDS9CBET8UXxypEP32RLB2gTEbnWnwf5ttEpToHfNh2",
  "key21": "455nYH1gU41gy2BacyQjuNMbVCwgCPCRe7t3ZWpo2HRbLonmjek7udrs2GsUd562xx3YyyAKLZELMJ8ydzyJHCNb",
  "key22": "316e8VeDhEzwUKLpy9QQWCcKxnS67ExGZreXq3FgmMJu6Yr6qc8FhLGYgJb1TabDDrvJMSoAzSAxhuZQqcZ4EKjM",
  "key23": "47fuxyia51nqeR1unWAQ6oQpwaRvTF1ypvcyH73DjFsbXkHKLCm3McmbGdDn5Ay88yuRKFW3RguKczQnMEDQnchm",
  "key24": "2BRBcHb3dkCZbtFtDYSpEgEfBo9RqaC7yaTekMmDEiLsn3LtFrnjnLVLS5WqijUEGdqRb5KN6D7NVEhiKWNFhwgC",
  "key25": "57qGdtMeLWNVnhT94dsshLxUdzPuwAgoP9gUTBeHxLYaGQE7SxmeBAsN5RFkiXLbZv7joMkMqiu2HzhY5dqoP8i6",
  "key26": "4g35rXt5rweq3rESwWRs6irFb65y8WtU1TP69VAQAdvTpohYy2qqqrEb8Zaf2yUaqHJLzKPqzy6vjPftueKxRNv5",
  "key27": "5n4Cd6dgtLtuX6Z44eShfCpFXiwuPswih91UMTaz2vUuHhrudp6zsMnx6EWDRVTedC8cNepcLPvPJMFcMBUCa6m3",
  "key28": "45wayyStcho5TcXuHx6acd5iTYmUCmEHomyDPLGYEApZHWxpyS47V7sRFAhY5czPJvRZFdgpUfeVkECdxFNuhidL",
  "key29": "41asc1oiDmNzkxULuLtTh7y97R6EAB9rLTyWaMhVmbwteUb1Ar3T9GcF8SKUZ1i3zbes8ewUzGv9tFWXiz98acCz",
  "key30": "3mmCcR2Gm1Sc4We5pEUz2YR6VQj8sgQrdPKPJzGAjqjNbqrM9xwnWsDQ5xugozNHSDpcE59UjN8qwZUEzGybip2m",
  "key31": "5wfVs8WFYGCHBYiy8KKX6eVWpQVeHuTDb1So7PWcnqZsZtfXpeW7A7wYBrxDBWJMwG8e2QJVTSRYJGyvbLNUs8Lp",
  "key32": "3uZeSNCshDGJCgqXHcmD4s9uoacwLQuPkJA2ukKRZVka44B2nQ34uvWr6qejT6DLgP8EMRPf9cehbFi7nGTUyQak",
  "key33": "4JP3xLD7MkHw3EgNnm2DdG8sBATpb1kdb9dgP7KLRgfVUxKvXHrHwSvpc5PijzS1qw4WqLzja5Z8EWxwEBJfBJCG",
  "key34": "2HMhL2vn6LfiNMACvpGtNDZCV6mDTBTns57gH3oA6qvzFs4AjnF9Jio28WooDiPY7oCcCeDx3qXcQeqkEWUxiPyh",
  "key35": "4Umpyef6bcCrF9pNpddnPb3iYMfDyb4yoeYD9wDNWzxHnt4VuKN2yXTDxc2ojAVLAb5VMjY6ZsL8oDHHoCY5rTNb",
  "key36": "39bdAjEJmuzjhYDuZuHFX1qp8BvZHRBnawLKJyDJ8rtMoEJnFpms7FpNmK1H4AR7JqrZGKvxCcQ4sJJkZbcihNy2",
  "key37": "5keDcsztoyaDYNuJVLJeS56uf2H8NgUq9jYZdk5PcxmkaJbKxdB4MWZssmiaUvp4YQ9z7YY2W8dQcfArV5EEoPRw",
  "key38": "31wFQu3xtQvGCLfcXjp6izH6kZwnvwuowumi2yNZ3eN8mDGGpjfRMBcib5aELWgXoTixejZuiN3tRWdSENv95tas",
  "key39": "55xxtjf1SaRC2jssY27ZYbHXPfzqPiKhoRxZ2APcUpfzHXFXKatAAp7E6H7m6Fa2KdrRqcPjBbghxEcRnKmAAZro",
  "key40": "2R8jkxuV4Yp2P8Bx9Je5LVx1istQCzsWLK6AeTgKCqAGZrpc26ceJCCF1Yeo6yWu9hcior8QM5PmyQPZzFsDoojS",
  "key41": "XkM6RoFeV5EVtSNdYVRZ46tr8PNam586c9VXvwLJW5YdvhPnYC7tzaWYbjagdrDjvW2gb1PD27Utw8H4EtBo8dv",
  "key42": "4FU5Y33ARk2y4p76WSgd5bxtEA6gZwowwJWFD2SAxqiTmQsBEAoNQDrJAJPPcpUReepvBs6AfZo6UeuCQQiKy3w4",
  "key43": "3eJVzX9dKaWEY1Lp545DaJXVA3SVpMVfbdNN9Gr18175WwfbJV5X5vSLZBkZ3mLLRbgsNxSnyok5gn6npQVNX3xf"
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
