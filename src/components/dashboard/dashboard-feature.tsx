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
    "2kQp41AUtbKQmaDjBLH7DLZP31E3yxBy3JV8DC8n2MdECMYrxvrNwB2w8kVQ1JhZ2iErjXzeH2wEGjDALDPL6tAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pWxVx8us9mB9pRmhiknSx8irQt8pfh7KXdCe9o65AFvCV2Thv31YwZEDKUgoWV3CcaDY2gYPNjsLudFCNyyVeon",
  "key1": "23ujKHZ1M49FYjxqSwzovqGyQzUTiXSAqKo7NmNzR7TprN7ChFpAhPctyMK1JemdUpYVVVfwb8oLx8HZKnkSpfwN",
  "key2": "mZQbPyMaaaVqQR81M2jKgBLkGyU5Lj3XvynLKSPrhu1FEr2pAX5s5dickSHHtmVX5bXJkoTc8jwbBhX6cuGJ5Xi",
  "key3": "4Sk8CkNZFsYQFN7VWiWKCatYv2ukRwdEaq5EZ4wiUsTf83ajNQ8DkqUdZL1tERinJ89DE22xZf4AisNgXAMc6DbH",
  "key4": "4G7DHWQrqPadMbEbZ41KVzS1UFfHSrERm4RjithG6t4L99PPmf6rf1dsc8hBhUcidtebs3C6ZS6GidyxNAPZY8qn",
  "key5": "3r7N4jzyXrMYhBRyJfaY8ZrpM9ZeCgmHKRjLMT8RZGxJ246K1i1X2AQv4qftPbMvszhiJPL89YGc1Pb5yrDD9Jyd",
  "key6": "3Jh7MZ6fKjwym3kamVb6dhQ4Cz5KVcb4RR3KhjzG1zJ8cqXxxSzzt4AQqU7y4RGgQkxG4qeKufrty8C2JJY5P1pE",
  "key7": "5SJavw6zCLL1tQEeMkFo33vkCgaMsvbtcDeanB2qd6MM2Gaf6jnaX9huMrFBG2qSnYELqRgKRAaBd7RphCoSTRf5",
  "key8": "4q6RyLtMS3UbPPgtGLxtzmeBmrwtRbvRX4iniaUQXXKSGB9gqzGNZfE6Kh9JcEgHZmyEPmuQVxJzhV8oK8BTasKT",
  "key9": "4gnqxBUNUYxDe2V4KNPz7PmmYtK73F99rqqDiphF7X2Qoty1b3Vy6jfYXj879D2Y2Qg5KbbWRZ3SgbMRCEsBZWp7",
  "key10": "2SNMVfoU6HdYnmG1r375WEEx39g6rrMfASYnByVoZRCK2jeD4TmxgdWYvEwZ9nDueLeoirwztnbVnQrP5g6xnmGd",
  "key11": "2BVbWHKwW7uPstb9B5eoKzHdRXPV2ngmax2vC8XE9CCEasJzyyDmKFuLuJHik2pM4jfLxQpdX12rnLmshn8Vn1Xs",
  "key12": "48n7idpsGsPrMKfH5EHesSeT22LBKeQaHTNsq5LfLNeNaCheTh48tZkDCvrokRrhSVVDZEiMK1RvMhevopwQCVQw",
  "key13": "t75K43e6njovv2k2gX8z8P9SKXkf5VCYb7dssFqzVv6eJ7qT4yzkwM8efxvuNAk6XunMCb6PZ4SRxB4mvtSX6NR",
  "key14": "22afbYxGyAonCWgA2ZhDpefx1iKzkjLiYCcVvhQ4zxud5ojZXYJr9biNXwfnjrukXi3Cqr9Fea7xnkA9rXS6cQWR",
  "key15": "5RVz4meEpB39tmSEdXDVz24XoACN8NwAYyX1YN5TfFjrwhxFrURPtaRwWkqkDQEMxywMJNyo3WuVko2ey5NiXNGM",
  "key16": "51Cym5g55bsp7tGPPy9bM1WxfsS5K2sV4B7w9znv5tjwqQe51BQBfextkrjRZ3NNSYzx7VpoL83X5p84qJGZtsUR",
  "key17": "2s5tmafPw9FX1kJxTUeedxhZsDadFzYy8qtWQRsddNAAe4qQ7jTpz1wby4eszsNTAHVVJCNLrQS6ZYjM1re7fsDM",
  "key18": "23pttg5iqPfEirrwLvn7NTrhbe98PUv35GajX48AAAANuW2nvqUwFc55sgN9EnzL4qE7tpsUG5puGRpUQXjsfX6R",
  "key19": "5xsXN7K8do5Rg7ouWpbWsmgTNS3FCo2zHzgz3cvGhAgFeUe3TaG4Aug8DCiUmX6Pqn4Vr6XEht6GBkZ57EWVqjbW",
  "key20": "2i3X2MnAYb7wT2ZgT7mSjvMYFtVeiqtA3KzDyGRpTuXAfrYkeVepbD3Hpq8wpLnQ4MHyfg4aCd8bXpSsmbJkHudn",
  "key21": "5oKmj26itvToeUUiUiSzAoRyyrctVmAQ41PQ6YGbDn4AZfGSE5kr9jDtoA8X9d4VHfZEWePy7j4onbzesmfuxVw3",
  "key22": "3nWdzr94sasV8yoWVLaF3ayimzr68mVZukMy2aMaSbN6osDyhbyJtydxo9Z96hemoLYGm462GpxnrJ1t1irE4ZyK",
  "key23": "5Hb3homYxZ1FuuS414fuRQt7yV7gdEWgcDttAkjHDno2dcU15FKzs12ZWEn2V4DSa5hAheCA1edfXFMUz9dyBn3Z",
  "key24": "3Qmkww9YPwnRSWHuLFCugGqttETqaMXMBNezTh76aJnB5AyYjZ2hvK6ByBC9raTi3yNRM6zkFk6vuCCHhL1PKbuk",
  "key25": "4BcRXkxKyrNj5yvM5vNnBh53Zz7kGHWnDZkj46271v5vh7j2u6xNLstnYZGbYKrngjYFGCsgtDUYac4678fMxRPE",
  "key26": "2YRqWgEZq8ySeFTxcVBqysHBc462yEnornXZLWMMM9ciKYHrCdWx7p3HSJg7XC1x7fxxj1iwcNtxDRZa9FLmT1be",
  "key27": "61yfYFCXjwB8UQXtNjf81eRbYxRCAeyJn3NTP2ch1TXNRXumAcfYyqHgxecFFVEGjscksewf26FqbuXKjaztyC9V",
  "key28": "2jPebmFpVppM6SQJUEcyouqmgDM7wtgfHtZZkQavvZZavz6YS5YjBCjFgp8NXEfKg8xM1kpYFyX7uasfZtHDJPJR",
  "key29": "2k4sZo7P8z5kuTJURfsyNvTGxnSha1SZqMHRN9qf31eE16GuLcjpURavT3rAigDaCxh2tEGQ99qBr7cATvei9E9d",
  "key30": "42V9MctKZViGtGphQp5zMabP5BY4XvtgNbC5Su25NW9fgiGddbPrAXLvosrLiu1CVQf8rKYAPAY8xYAZMaEi8y7d",
  "key31": "7dcZeQwriVEsESimQFbsJnCGLtPumGf9YodEbdnVsE5qpWZWHtug5YAXtBz1adbh1xXRVZM9X7ud476aANT82VD",
  "key32": "we6gHe6jFpSs6UYNkxMWoWKxjc3U326pqGQBWtMJ3ZNaz5md9QWerVXDziqwVdnrbrq93s3g4bPXvNeq843hEoV",
  "key33": "2BncFxQ7yokQGTKvYPjhYXX8oBrdnqWpyb6Zaz2XcqufwC8nM9VRYrJEHUqMtnHKJJkgHm24LxygjsHaQrp16EQH"
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
