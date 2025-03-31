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
    "2JHKWKNQRSEi87pb8r86apwU6YaAFJZL5YGZkwvfAGN1UUNNNCHnBF77uQXRsq5iX9nxXXo9WDepxBZmrqazxmR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tJhShtsKicGbHm19GMbNZ1vVBFCGoSdusWiLAsuTTHDEsDEsdXSDsz5TVsU9T2BXb6WANhis9ScuvTMY3FkcJMp",
  "key1": "2weMhxjtdzXTtNRpmNkyuYPYD1tVJGuK33ZA77J3yr2pL4oMjctmCvdmpRLwtwCLDGmCg4NQ7FVR9bkjJgRcduyY",
  "key2": "feX26P8CkQ6qPxhhz9b2avpcSuzufGt784szprHkdHVF3YE6Kvc5Lwi5nZanMh3L9yi6Lxcw3VZTkU3itDv3Tts",
  "key3": "3ZgXmKvvGKi8X3F9UJJL2C69hJfwEp4i1MqKSgay8F5uKFM1uQX9jmUpWjNbZFMHdsEub4psFGyRUQnhPzBq8XDq",
  "key4": "5vEbxexFoWZRtjjvMA7ZxFXApVq4XhgDvS3emWnN9VvtaEadu3mSEfs691huymdydAU3D4F2JJSka63pgEnRmjLq",
  "key5": "3ErDE4cxuqkFmAJakJHpyhnhQECeFNusn5krKpnLLfqR6ebvoPB8hp1j13h4WCKda3QNvHYF1nyAAshCQqgBZLg",
  "key6": "5yTinruJKgoKGL2p81BQz6GWbRMTHkkK7yzXsVkL2w6j2jskoRttjCMp7yx3erkoEwh5SmzfabCi8TZTu77QjmPt",
  "key7": "4mriRMA526PtiKdcCBQUUyK4zyyULDezSwswMYymz8k1HcgjLG5qNhFsBNBDn5Kssf2cmUJ692zFPLmUyE7SXZ3N",
  "key8": "28MbUgWW4HpEtpJ695CBSXdSUA2zEhYuHa5LKf4X4MnLrcoJyeXoQPvZ8WmLQm8G9Efv3cfdabKaZ9HiUgLf9R8h",
  "key9": "5TaLr7T3HEHz8t7xvJBgtvCYYnx3pKD5b2xzu8DpT6Fv43d89yuNYKNb3gmQDLjGynHRvMrKqXcCqPD1ZV6fFtQy",
  "key10": "3j7Bkd68HaDCGbUs5Qz1wMaC4vcgkwj5HykZpVKdqNwd4cwneT8yLzjsgDTP2yTkc6943WxzegHSBY1UchQCLKLJ",
  "key11": "2RZtDbWtZ2SQNN9ww4Zi4wtrw9j5BThZeZaimB7arQkLYxW7ef7gaPkt12xZK5mVwpDicHCguC4L7ZviP5NQbrDB",
  "key12": "2fQwVoRoAEZmqypCR462cMobACoeHMvvCQAhnpGseKRPE3rAU2dk6a81sUU8dTXf3CzPLSpXrDVWBKa3B46L9KT3",
  "key13": "4WnGx2AnPp1mAXqNpyPXa2JxLwd2hnpZt98Hoonh97qu3oLMqwHDfyV1y4YXvCyacvrmDHxtMEuhnz2XdDFeEzNC",
  "key14": "3y6NqaGLkZhFk5fBLQSfuJPAaujUvgsPvsbWyQxXKiDMeuktvj3SbvFDBKzwgZ2EHSYFq7uEdZNGQbysKeW7eGYm",
  "key15": "5yZ8wrXdHvk7ztPsoNVLocgc8Bx6jQByYC4wGPdDLRq2HJJuMexXno3RocRtenQvsMRAJFkWod78D3m6kQ3TLV7r",
  "key16": "oZF6ehAEgisVKa65CuFcREHxuPWjMPbxmHTycXp1sr4o9BDJ86dWGqVDFJz1feresCQYmMJiWrWHD3XYSQsKFpi",
  "key17": "2fQwYYzXVFapte2r9z9pC5qiJYZZuVDu3gZ3v3cDD7zUE6VjWNWi2FarLBv2BZqtpomzNNTEy1poxWPup7VB4m31",
  "key18": "4TG2iTECPVY178n2jiFPWNx6bR1wp67fyV9r7hNL4vujNfAMSnLUAQWCXHeRa6vtWFyC5g8rHqedYi7zcDNypxVj",
  "key19": "4b3HezbxPVZhV3pWczbNUNhrvzRPeJxfiYj92YvMSSpwKW9V4quwEaaeWhoVtRnhiWFAJJkP4G5AW2xERDzT6evD",
  "key20": "RgdwihZmWKCyM2veknxaUBZ8bnT1ExecsoNF5ayPyZEDW7rJfKN1f7SLAW8uP3e42Tc1AvWzNaTaSFco821hXQz",
  "key21": "2tgyCn3jEQSygjzggahP6Ci4RQVp6iABbntr8mA7mab8ubkPuePQmK1UV5L1SzaRzV3RbeX4DGq6DrFds7MzWLWT",
  "key22": "4gxXBdirL6gS4CnF8JkH1jBeBDposVgr99r4MZoGnsPiLARWnquPRC6ZMeknaZV1yqt7zQyGJMxtsR75992RiZYs",
  "key23": "5JX4VgzwsRnrx1Nkk2p2XwtW3TSQBhjUT48Kb3BUbkt9MD655nEpcfAcv7BpabhT9rxGGVXZChcQkXVp3vdYtbNY",
  "key24": "3XyVDMGcHzWqaNL9zmhxZJBYNmj1kxBKrSvZPTN8zVWWk2o7QesYa8q6oz9AkM19oeNmmiPk5fNSjxt1nge6PFRz",
  "key25": "34UrzypD1oDCeL1PcccdgfejGkRzBVEecWP7RDvLPAMZCrJsHbFauwfhxBPYyL8NqepuxnhuCvzurRVH6fuG4H2R",
  "key26": "5rnw5a7Kju3Hyf7FtzX228o9ynJdwh9NvNt7CjrJENKJ7VVXhq1euHEb4dVTPuY1CF7RDz8CDeqztCLgicWgWAzc",
  "key27": "61hoL3PVHe7Y48By4u3sQyhGnyWUVS5qaEj2wgdeN9G3eACi3zoeRyePnKchGNpzerVMvx3eAMoH6gU5X1n6eNCY",
  "key28": "fYGaGw34bXXxRLYTZq3FADZFvwXPjiYz3WZqabQ83EjKGQ9ag35V1Nd8him2dDQ497iTAUqEq5VCroFWbxj8SZv",
  "key29": "2jVrNV72yYN95Zh7mVAARJaBV98BmkYfjqJxpAopTxz7Ku6LpdwvU8H5uF2tXHzVP69kLzHqjzviZBnfSz9xoNm",
  "key30": "28FHP91i5v3dC2ChaYyx25DvJJrYZDUHcBdEvj4PHTNVt1NDBAmzcUDH8LX3kzPHgdExdQvWcFwApaU7EN7nimnL",
  "key31": "21wLYLx6YWu7rUFv8KAgcTw8K4qHKtD3UdFJTuWH4qGynU8LXADsi6ALfiShiKEf85hiCn7rvbo8iEYaf64mW4UN",
  "key32": "4E3dsJCgs22VrQuoARmzkxDkSW7vUBK7dWwWSSL7JHwPdreXM1k8AyPMqTqx39BhQNWjRSK4FNtAHd6E6qRvpsLK",
  "key33": "66ZLaH7SzXhg55zphgAsk9uhJzbDGog4Y1xYLjrXyQgdLZJpqtW2YJ3F9xrNXraXEXHVJsR9djVSqGf4mxYXae9d",
  "key34": "5ygVNiGjGZsQoYMMNbVicofJMYGkCa7aSQkkbamysT7QieFz2iEVRjyEtyQMu72nemmm1zPyCJzsBQ1sxUgBj8jd",
  "key35": "33tKdgrnqjr2arceihnubco8Htp6piXp9SrU6o9QiRoaPTNZJhP79ivbFr7fh8tn4fidLyJ7C2qoTjfxcX1STG22",
  "key36": "2g9fdyXD5V7xX7wR8nUbrRMjDhEjCRsFxr2TG7ePtECqUza58yCo5t8Sps6gYN7cvuhFxHSDMMwr7jYZ4xEes6UT"
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
