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
    "9sH9ULg5byi5wdKxA1vQwwJp9NmGSLrjevMgxik2hNnscwsiD74NFP1baPmo4Bspc28dmzRrQk3fDXsXpaF3FTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ajfnMFex7FEuuyuCKbZEnNQAvYVyNXbyfL9c3u6kEBCLuxdhpCFnV6db1GjHH7VSysxANWjwUu2Zun9kKKqsXzj",
  "key1": "3vEVLkxa1F5zoiLdXkYCfC6W63XPbYjTrXMveemfErGyiKZqimoHnynzPrHbegikBU7FxDZvVWVuaw6a5jmyXEST",
  "key2": "ut3CpK8vxDcQo1vGVzZn5WSoYCUnjXWzFWfq16Xfgh9qR8qR4Wi3tqsSeangw2noqJp3iK7GviSup9nU2TWmYjo",
  "key3": "5QYuMeAo9WoL6Q3fdDytmRupEN2NApzXP1QJLVkSHn2oGyGW64JSVxwushaV58UXoZwS6D5Neygi3g8X9sQSmfaj",
  "key4": "22dFoya7mMCe3Y3eB1b1868v2TFgkNSoVxZ4YrNMh2GvuuBahauq822YHeUqRT7y1LgvXRkJTEK7Qsr3bNRGRdj9",
  "key5": "4CYuYV4kfwbRTP928GJy26QgQxfAeDbq5pR1fRVR45Qu1vRRzoyHD4MSWrW4W79QR3mBjDM7AVgC59Y8PWPGS9Yk",
  "key6": "6f1KG5R64CqozVw1ye7VPCdNTHPbakhabrqSB2x4PidMrkuZMtyoYjShW1Uzkx5SvekrX2WYw7sQdE1DsjjMe8j",
  "key7": "2Jm1PLLuGjZDzgvdBFvtV9cdxbecYzDb2beovZjgTzZ2wq1o2gGDLnkVnciutVx7SEbbfGfZegXQrTsGKVzhwWs2",
  "key8": "5g5fe7yfwwHgXJiPuDC6NHKYX6i7cxzNviNL7wg6TwSpKwXafJ31U8imxTQHkii2X8Gn8HGg1zkZ9R7FpuEveUQd",
  "key9": "tQVq1SKvVoMKWCN7RWVMN5uNhfWxAqo71QTxcG4T78NhgucdpvMS46ECAL3jVDG3vMNL4wRE2vR2XqswHzgonxN",
  "key10": "276jrda8q27YmeMtFrpo6j2zsqYnbvFHTyAPSQ5PTMdZdxUx612YRUVSUhm5fBSDmKWenspkcyKkxdVj45zZZnv9",
  "key11": "5o8qtK5NyeB1TPBvfiUTM2fvUysV68FT7fEiKE8wLJyUAbwEraW4Uhvc8rViCy2EvLdZJJcG1mxGKbzbhTWs4H6o",
  "key12": "3wrs5AJrqDSp3mVLEupQBmTM61yg2YnSKxYxZwHfz6PtEorsythjkCn9uViRBBcbkdw7962GFt4kx2faQMby4Due",
  "key13": "5DkZ4FmwTE6iNorgxFL3GPfNZmGAmH3JPGti6sxqS57PLff2FzTfH97entrXAkK3EVbSkM5xrYLgqxZmMQS8JkMN",
  "key14": "48XU4vLWnffLcpAQQL7WxJpzP9NJi9fsauAtm1ZCqC2mzEcCJfFqowfajn5zb9kmMXkKuPmed3CtvDB8pR45iHX4",
  "key15": "4WdrVJYoL5o4Rgkb6JgeeRTPRoWb7u1oMDCBrpSVnoS8AjRa8HHbqaiAUGBnR2mfKK45W7zWdgWrG6kFp5mFEYat",
  "key16": "82UJ9bZvUVCaUZydgidRJWMbcf1z236ee6DF33S4zEXc1Wp5t7svBgSXyAdct1ZwRX4FXWdEbrJc3EPpAbfKVmd",
  "key17": "yEHXDXR8pvwvp1R4NsJAadiQcmyiEYwTeUyK1eYaKA6WqWeGf2QxhptFLb69LuznxdTmHV7zt655MXeVTAQa4fj",
  "key18": "5H6U4ycSqXE8bc9aKiJS2qnXFfoqpzkQ2kMRUS83QEFb8JtaxLEy1TAsRjByNba8SEepbHdQwZni9rkupHvWbhrQ",
  "key19": "2GjXXbhnhDsWmwz3ahxduVDMtcPCb1DkVFXZ1miYRkEnWgHaQqaogGXYCh7sp3tKTQHjfgTas3fKyBwbv5GuEKuW",
  "key20": "4WLvLgoi9YjbYgQP7jH9mCfYRFRZYEdmWDk8W7eY5Kg6ausgYWhkNgmPoUBCMCKbrmffsW1rPQFivooAKrF31om4",
  "key21": "4ce4xwC5hfzWi23ZXDoX5DJ7TqNTEkBkn2pYcX43HkhgXsV1vCVt4BqVbwqMq8Pw6YonPKS9SVqX91ezkyDyztaW",
  "key22": "498JLMyok1i71R6j2mq27NrsURW7CMyBSGfodoLwwzbDNQiXNCDnFM4QwLjUCbQmTkG7Lam7vBBGbJoRaTgM6bkF",
  "key23": "3gGdjTHPwSzVpk1r2PHpB4TzrppaZdYNxPfKAggg3EjnKWk2KHqywc8Dqe4Sin2uLo5z8ga6xWkM8i8ErLpAjUxN",
  "key24": "3pAMC1EgVovmXBb6QZHmHvjoyYrGWhwvjyzPTB91vP89bK1fjBm6HkSyo1dFsZg3CJWv5EBNQtByRehP9UAw29qL",
  "key25": "2ibtQV1yL9PpYz5LkNJnyphBeV23q4XA6b8WSPjG9cF9oTHMBqaa9LrSB9aFABqjjap4Gzyy58annvhxVn1DySvY",
  "key26": "BGfBVLQosmWp5M4MMcUK9RkTNuzWFb3KTabUR3GQcY5vGoGJAmwY3j8cpwb6r5VXQVj42pwy9gs3HrvqXPs8R6H",
  "key27": "HTdGE2gzszGmsQeyMVkLG1dbGd18RD3VevPgiSA1hLFV12AfSsW17cVi9wM9aQSwFh7kcKFgguA1D3VhsASJtL4",
  "key28": "381bRMCZfAh5My9nXBksLBDnxz8y7zZkjTBAbfqycXYCfLh5h1Y5EbmQCXV5xQDUGpTuXCBkDEZsKNDTk8Re1kg9",
  "key29": "DKy28PeKosEmQ9EQBobhCXDBb7jaDmCUgme8yU1pqnut9eWoM2tE9tu8jqpHVYJHAGaoENvgnArka2VuEUwHoAa"
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
