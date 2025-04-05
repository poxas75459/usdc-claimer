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
    "4aTBB5W2ZZ6npFPpXyx2fraJfaJJEyv1Moye2Pqmdpgfzsa6dnc4UbxnwBQhpgFv2wvWRZgr1hWSjaXhcNSm2Tis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LZbYwYXsPX4i2bh9hTHkGthQFTn4HHjJ4U7DZ4UEgqtF8GfK6bsKnRinmcL77sW53pwdVUr86spmwHBbm6kr3MK",
  "key1": "2An9cD9mYZoZJ6uwGVR1roteYB1NUsC7TsFwqpH1FPmv58HtTV8kayPwqv7RmLSfABVQqJLQmqeVt4n3Wm9uNxhh",
  "key2": "5rgZ867dsf7VKiULFWZSsGPWi9t9MMQqg2ERQcy8GFLDyDfAAPm4kTbg2NAUkWQVUwwyY7KDhqFnnKwae8X8UvZ",
  "key3": "f9WV8rK1WWhtf6A63pLaBfUTEHCipZrwktrrY47rPa9ijZXUxnjwU3PorBX9dCcEdkkJZc7w6mcqz4AtujT4gpw",
  "key4": "3a6rMh2t53sXx3wXeUpxbkyQ97Luygpc95ce8WjpkoeJq2Gq7u1usDdFeLSLH7GhtkQkQMafCFiTfNAs3ERvSNKB",
  "key5": "QWKEPHtnyMLbg5ynegDZobzEBUjZ3YZmwVuEPmxm8srXN1isjTTLRtX9LcuE4UNUV7vdGyePCjUPXpaJ2QgmSa6",
  "key6": "Q64L7SVbsMMRcu29t3LuM3a2vN1hjpEAkrPJLHDEFJmCmPwsCLDohsXFVBy6vNeHTqUa8m724Zkd2assWqewKff",
  "key7": "611Uqm8zCA2PeFfyKMsHkZYU6nN6TMGzwQ4rjseRFuXqAaptfrQJyPvxnBP43QZXwsnvks5inrrpM7kkKqwoi542",
  "key8": "12416PNhLnto1q7BC9ypke3oVJEUaKxBi1NPFXArcTiSuWWzkNcgt76Taqfv9GKa1rcvWBZwbHvsEt267ZiD3jMf",
  "key9": "5xoiqUKLkfLKCaAjLGNHjrcJZLZiPQnya9kpk9Qb4dJUgajJYKTaMC8uVtg9pWaLZxEGM7PUfUwWNukL6dFa81r5",
  "key10": "4AjY6qAEsA4Vx2H4og2fv6i3HZHqsJHZWMxSEQbdPCHY7gc72zFnGveNnrVRmbf9w6YZfD3kfS4sknnEj59ZPTc6",
  "key11": "2YdhyPpPq8pZxEftKz5t7BwK6zZnoPLuqDQM4VyHUGFQPF7GMuL6BCgn1fuRMDBFFwuSLfLUzCbH2FNkR4Moewkh",
  "key12": "RHGtqxeRWKc18nwZAGWPSdYFNeRVQsuZAFfCGBCdVa9JLh3RZ2qipRSRgvFfNTB9H3L5Uar8bi8qUEMCrUsM8Hx",
  "key13": "2M6gA4L27Mt4b6SKYXJpnjtw9SFr7pWYYEBWfqD5EGwyuEnmQF2w9yUL79pZ9MJdr28SKRERzCo7UdbtadHZkYAj",
  "key14": "4L6gGB5bS1Gpr5G3pB5eTgyhUhmssywFHySmQtYP4ttUPhs2GKt6YXMMh1WFqFu3C9JmF1AwCVXEwKcteskz9vEZ",
  "key15": "5Zkd5saC5aKKrbsbpmzWe3ewAVwM8oS2knyt8yNzxu62Pk1z8ZUMpy275yi4rDGZvHdTg35Dkbq1gmZpUJV3dfYX",
  "key16": "2Rz587hBjwYXomAMSyfYAtJv336ja6KdScp8Mg1vTJqnMe3QoQ1j364HhZX1Y5FyWMKx4REVJxDq35i8sUJgfYFa",
  "key17": "4GNLuC4dbnN67ExMwuJYnKg88tsfEGF42qcain8w2eRFPZ4GQHNjUfN3L9cuB67AdK3fu62NwHNabRF3tm5qcr1N",
  "key18": "4JXwGosB833ybKrAPsMBRzabNTmzVZxYttqyeeMYJQjJZ5QPb7Six4eRaJwKgRtLTLsuWJ3zUNuoRTxj8VFygShQ",
  "key19": "5DpougL5cBVwVbLPrKzEPow4vSAmtu6KcWB3bkpAWNh9MxP1fireqgmSmor9m1UFVpxCcFdSq3ZdVpmqNGkDTDLQ",
  "key20": "3tx7vkuf3WdtU8RT1PDris5vgUTTRyRgLt43zjTdE41d1pv83p8idByB1X8VmwqSAepJLhtkLEB4BVKspu4DvcQL",
  "key21": "4a4QZd2VVvq2eLN2uq1u7jKBAVF6bVGVQXeZZin44rNJYz2CQRododDddcCy7c4xPCbeKdM3Y3LWfsvayTBJMjxW",
  "key22": "2a31mVy7rbRo9PLXKs7Evc1EAB85ApEnGugeCJGLwJ74Aey4QJ1FfigXXFKGAB52ksFYg7v6VXTrEXAJDjDjdPWr",
  "key23": "3bAgEtcM9ebNTD6PJNvv8c9RUqKvtnqJZqiN3jzyAbCtKAgQk2UE44iyAv3bsQBL82qtEowTKPzKL5bxqAhq6LDB",
  "key24": "XYasKSnu9v2FfapYoHQGPZAVmNjoKV9WAWEFDCkdkY6S85c6vumRbqPyhvx9J998iRdSr39PW65iUPkbkfe1jqc",
  "key25": "2bjrcqkLjsSFYk961DPs73aprwNAbxrv7TZPSU4kwuDZhxDFPBNQJMZ4LL4MZtK5LJ56CNSC9N6AaxRZ9rRb6MNY",
  "key26": "LVMoawUyME4rBuLgYjeQR4xCiZxBHu9phiVxtsX1yDi3HNsvJM6Y1zytVz4B4LLXV1EEQjH5F2gdJwGLseaZFQo",
  "key27": "4c2DzaFs9Q8F14z3ti7ECC1Sck89EKgRTttje2vcTZ6qZG7H2dZvJ7QD8iPbwrxo5Wjvhi73QS7Xp91HjZiQCUo8",
  "key28": "5aPJb7AP7gz2i94WBzFB3vccAxYMU6fmq3MjHPit4guikpESta4Grun3xtFyY4EXzoV5TgADYoRpWJm8Q2zCFBpG",
  "key29": "yWicj4yFpFtErawJoS5kJtiYD37uSsEfmrxsLDd2DjVLBvj3YAqtvbtZ9jurh1bEHee959Uvd55UEBjSTjehxF7",
  "key30": "5pHjgRUSUtacKXBV3enQzqXWccifGLDRmLzJjfKgS1JjYGBinKg82oWNVoSgM6t9teLNEVR4CdsL85CXwXFQy79N",
  "key31": "5trcwCxwxEfSDbvqLrVeeywZ8cYTDvHH53eF9C6MeYSytGHnQC82eJWu1LKCvWPfKzMJmZp7u2Si11DNXncuZyPP",
  "key32": "2L6P3w9YfJxxfHns5x7ginDDXc1TPXHCUJpKUaYVgdBf3GkZidi2XDyfYMJ1KrPb4maBN9YTADgaDauB1FKPrSVF",
  "key33": "PxzW3BNCJQAfXjMv1iRoSeEUsLFWuSBX9ET2Nzd2DPQFnxJqdF6X8Wbo2VXxViJ1s5XvTpEtuR7EmTHnRfiQfxN"
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
