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
    "5AghdYpkfMv27Kt2y186SJwDaNtj4S7ME7NpUxwXNZAK6XrVD5HpHcvVmiW8L2mgnd7FygGBHiButgkLnHLAcDAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W3hXNqqqvWNrUykgpLmC2MTea22HyPNgt1V7rHb7dH49Va9P4ysTar7411tQWnyBTS5ZFyvh6rtp8Jm1GytRMtv",
  "key1": "3LS82Cquci1frMBvcr19VBS77kGyibtvKUWYuNB8E7ihy7ZQLycs2SQx23Yg4MARubzAiJkomP1RK2o4HtgYw3ZU",
  "key2": "5PhWaa6BszBTk6eFAvAyvkqjmrtQZP7Cj2FseD781yN5CV8iKMMs7C3qFESHZH4avM77XGUPVTmEkHmYpXtFD8a3",
  "key3": "32ENtMC4BRBbktgnTf1XVaKeCGBhDCADCEiVsJVacn379JFFPUsUC8uD481A77F6ukGvaHDB8imQeXRfRwsxnf5u",
  "key4": "3dtJizZ3zJJiYFfbTt9DDqSg5TgmuawekW53QipqTE31Wdo1UR2m4jnT9ESmqRaydQy42srMQjgafbNRjv6AsoMr",
  "key5": "KkVHN7aZaEUE6x9YMWGj7BcFpKAkyHbSur53oMv3EqPifqWZG21ZNMYi5XrrM4LPPMzmvA6efDtQmDaigxHoBFA",
  "key6": "djYPYBi3kv7EToHqVLCe5ScqW2sUVZE7uXMvsrJsgEXoJZKW2daqiYd3ixrq5LCfr7CAeVgmvZocK9ZgwVbS5fU",
  "key7": "2mdxnxcVNd4cK8UmxTyZuqawqz6miu9HK31qfyNrukk8Hm5M4s1bxJRrW2gGAc1mvowJovurWZAawD2cpEtmoyfh",
  "key8": "kohsNQCyvaVFC8wuDLgEJsEDCJLGxEj882H3uXDBtE1StHedYupWJUSDkPCr6d6JFEWXG511YmsCw8Q7xAU1z3v",
  "key9": "2fPF8TykJabho7G5SzKSAwJXJaY7nBRxQqu2C73zcFu1ZVHku6GcfSzHRFFh6HDUs7dt9ErTzKKgMEvMAtrobgaT",
  "key10": "21DPQXGJY8syeJsSrkB7uH36YaG6gdsXfguUucweWZRRzBPMHwdWcRsqxDtLK4d7SDRRXG3R6oWXBThhK358rBYC",
  "key11": "2k1BjXicLzGQ3saRrMfgM9hPQtkmaZ8tY627r1wTGrbf9KT2EkyEhWY5eEWjPwBp15U3ZX5shTePXKcstMpNJe4T",
  "key12": "5H5nQW5MjsoRmuRdYWcwCHb6LHzHta8SZFKQHgRM7t1ZERhER6qPAKU3HEUjfUxmEcPMs12GhQKL41AgxTMgYKwS",
  "key13": "3dfYALYPr1eGtGUF2aPkktUHKu8TJQjFMjA9aLwP2gDBMCRSApkHqZzr16UXXREsaLJ7zBQkJBiEqnfpcMTZi7NF",
  "key14": "2S7iCgFXjLEqqJRKJRQdn5ZGNYdhVunQkZsNeV7tG5N3QvU4WDS7hX7W9Tn12ZFpmndcX98wdcfXG9Ar3we1y6vW",
  "key15": "2byemmBCAkaRNG7BCoGJShwChh8V3BZ9c4qE9w24REe2f59fpz1gnyRZXP7BrJYf3tnAtXoJ3SKVdMfzWSQNGKDe",
  "key16": "53h4KaKT9ZTYXcp7s1fsBFBaSZbB1c3zBSgc3CBo9xsvwgqhnLne9HvMTGNUmRz2k4yQcCcoZM7V6tXywSVwABga",
  "key17": "389oXjq23aVvUvGcL52VGdHptj7HEC6XNoLv9ptfWj24xDWAA6ub6wqQEHcc64zk8TWtzVTerxtY67gDbLUzsi7k",
  "key18": "2C3RQAMJ8ELhgD2khLTBFMZVsCXPAzqb1r7tEw2XFhu6JnZ7HB79Si1iU1p3TXvsw1RzY2XBbWcnVPxWAW74y78f",
  "key19": "2bj1LA9Em9YDZCPMQttATzY6K2dVzjoahhYomJ54TuXEKd7ETf1mDp1yLAP8YXgjkvRTpjqK9hdYxrYEBVAd6o9v",
  "key20": "22MVAfQ8vViidQZkvV5L8bTNXBu6D4VmsPZrFVTUpRDFDxFLPT49ZHyvAN1NKkFXLB8RBP22dFLnjKoB1t8dexpx",
  "key21": "sSd7kMzLmK7P6oEMLRJKWHSGZaiZCv4G4T6JMeaELhA6zSe1fiEXzjqNXqG5zNPk2ryWZQ78Ziz851zJ9SPpTDQ",
  "key22": "2Yn3HvYsNTrUQSbHeuuyvQCfECVdY3p3KoKYgyj3B3QMpc6pLDY1tpQBMrLsnjaVdVLNtzKrDbHPYraCb6JE3SXQ",
  "key23": "AntAf4RtEdCY4kYhn98A9cKLozSVDt3FZyPBBEVZ1EsJA8LXuoHmy1FhoPycBrvhx8gD6mHcgAtigmK8QcVyR55",
  "key24": "55vpGCh6XtFKZLYssz5DLi6oob6i9eFMpGgrg6QkkKRkiDdTAanFJCgufCCC7SXmUDYK425WgB6wotpDEuEegH1t",
  "key25": "DWJ7f6gGsr35dyKwP1jKvPBqCKCbEUBMbkKPqMeek1jXCmZ1QTSZDPF5sEkvXy4dnX8CC3pAHbvNr5cxie4APQs",
  "key26": "5g6azANonwhENBSFmVytx6qeqCJ3DrwsUXvDUt1gTvmHP6sMv4z4mzEzyy6f6UqUzNkDxyXrMvjydFCX7dVqw9fL",
  "key27": "55Ysx58vc5sb2c8ACV9YcnvXU4BrtF3G6ZAo2eq9efaz4xbgzYXuHBJJd2sR4ZpqsgMuK1VpgqZnxxWzcwBbeZrK",
  "key28": "4up7Eg7dPF26ZajHFDw2xdZC1gNZT5Wk3FP8UmGDMSdTrBp4QAiH8dYa7P3uLR9LCFVDW5efzQgPgMv8WmXEfugS",
  "key29": "2t4sYZMBEA48nTnkoE7EnAGEDYLdZYYU4qLYggnRyUDUYeBQubEB7g9HYkVyxF7J7HmSzRYSLTwRqxyAyqpRyw9J",
  "key30": "63zZQZGXND74bMLDKrt85T3Du7bCetj2jn3YqFt3v7gjkr1NjRS1jKqHLBWmND7d5P7EePdFVdBwSMFYJPUn5jxc",
  "key31": "5zxctJyBo3UCRRruw9MdaxrWFfpZyPFeZUrLP6nNDm4yE16GUWUZkK6VpfVA5s87haHpYGDwypeWhFPNacvh5vMo",
  "key32": "3xSoze8wuHvNtiRdVZFcegobrNRWnujJytiwaTJS3sxenYRxzs12donS8xkoHx6PXHpqGJaiqptgDppmhYFf14ST",
  "key33": "qSNnjqvm22S9kJimAt1FrjbYtMHiFHDYwBLwMxbZrAfB2BHgBWNhZfhBqDQsY8agNkaBugck5MSS7xMigj66EmV",
  "key34": "3Km2sdejP7DaU2NzTvnneDyvXZwie5iMWAUgcLi1XRFgcxpB8hCQkoNLdxPJFdyfp6RexhWjKgcqiEHt5GwbRoux",
  "key35": "46aVm7rfFvkvjEEpXs1EhYCKzxBTrjrZCQvR4CeWA9n7W8BbiBEha78vJatsHWj4dFH6ugCj49a1kZ2Bg1gczxAp",
  "key36": "4zy7T1MS52dmMKcJGZ6aaes25sT2W5K8oPDVX8hV64X7p4viF9MG3YXeYar4JRu8N49RvTYpzjkKbXSzz6mzXvWc",
  "key37": "WjNE6LvxeiWcySaTk8TziWkzxm6L9TbvAFMepHHe1vr7xXG37fgsW91uc6EFPWBJJWfnK7sTt2WNXfxSuTtp1Hk"
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
