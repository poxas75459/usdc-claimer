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
    "5rJAGqJrJZdeb4WCooH4hUTEzfoaKYR8gFzhF58PegXUFeX3SuYiFqAgsB9qzQaz4Z4rk2qVD6u689E3WXj6u9dA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vBaAbXiALNAapj9XNB3RSKbgGVquzCXiPEESqo2zv8QWGSHfvTg2VUXvVABYxv5YzPmsE781WEvH9kPVw2aWSX4",
  "key1": "QGcHWqkSztZzJEYDPMC4LCqtaNRJ9pMTmKxy4Eg4k5toREysMJWq1tZ2dU3ZtZoVZBnqL1XeWTvRXd8A83s5pzV",
  "key2": "bH9kiRredj9AFtnGT61nLWb4p1y3djGDWja55nVgGX1K8Aojr3iVjComiYeiAvaRpJmks9pgynuXFxr2ciHiNgs",
  "key3": "5GCv3e5xAeVz2apsXScwb492hjfGvLCSejYQo9m2rRMWCk4dffwBmpcmcBpVGN3HAQfuL8kAzBQUXM5wFLGUKVkF",
  "key4": "kh4c26Wm31r82PhVHJQ7QGLBL7M552H84vqMSGkJ7xE1qmQCmy8C8toZSpn6BjnxCJbaVHc7Qq12Xw5hLHyPn6h",
  "key5": "5bu3vpHtjstb8VDBmKsRAtAFnLC1Vew2aBN1fivxkkG5LJ4YLbC1dmvM9NSVBBwR5jFCRDbVURPk38aKVw9QgGfz",
  "key6": "4MMLzTJg61L6nDGDotsnpfKHZw5WkxkjhDG6HBMBdDfgvPZN8pmFrcfi7bYtp93ERimQnyxf9PLJ6TjkBHHAnaRW",
  "key7": "2PXeD7ngPxpF4SkSo9DJGDG2ZDfiaDBLUjcUT5Svrkdj2HqdMyVBt2iupgxPd2apzuFBrJFvkRk2HhL99u7DdkVh",
  "key8": "36iuWGauNPamQpFxMLXomPuFPLV5S7Pbpdt6EKszoLvesGZB8KbSpRegZyezANmhq5LmHmfeZHiuNYiMKuDD6jtN",
  "key9": "2PdSfZCxFgKwdjp5khw5wNQtU4b1URdzHaCwZCZghUJpnNZHT8XPaSmg3sghq5shje8oagYeCRN3UyPfagGF81T2",
  "key10": "5rpd9GxF8CmDbdoBJMnE3H9GjLxt6rEaKiDF944JRi9oxJ8qNRJ3h117VQLtyGzd81tiyyYQc5owD9XYuxrqfvc9",
  "key11": "3Mh285mDHv8BfztV9g6bpcNfhnjrzQZHWQoBi5e2VtnCp6UvkE8S7wZdR3C8rcbCgvvBoXoyrysPAoX541z3KDqj",
  "key12": "Zz9tS1rneKPsb5UtKYAbsvzvKBgkrGwTqZVNqUjR1kAJrbT453hriazA1FDMVXGB3fDTcmar6Bwhv3ujyt8eQ1A",
  "key13": "5T479uQkJdX4YqLEjPeoJvwGve3DQXToYgpiNtMVbEtre7LiNB9umBDmDH9jtZFfV4ZSumhtrvecvAQ3nRUR5r7b",
  "key14": "3S5y2TQ4MXUfyVQZKqJP7YLFM31aZvJGv8rAqAZCAdMrG1WAa1Dn1D3VdyxLhNV5Dsc8czUmRYEqdRKD9tLRzaPn",
  "key15": "zt65pAHndLZ3xGkPUp6vvgg3WM8JKaiVJnmwKfF7m8CDPRbWWCowVRfhi8G6KyJDiZf6aQ65xqNvz9fBvbp8tyF",
  "key16": "2ucL4bMi5QzXQvSbucrvGmQw1SdP25Nn5ziy4v9XRmjfk9mXdUdMeZZpahYxujccjysdU5vigbVRFESiSLebPqeu",
  "key17": "26nkETZLCFpe4TTPjLZhMHXkKpK9goXW34wHiHtv8GdciVz7kddHg6NoAgD4gDrfjcyVHouSYiQxkyvbtyQa8kPC",
  "key18": "3uMW6TY5ftHm8RRvKydy7cgrBKnP3nmR6w7eXvofusBMmQ5SFcJBjDMTG4q4sasvbopv18JBsaLa1fzDtBHT8n8u",
  "key19": "3y4SYEv1hMFEUdTxoiofMf38YL86Ec86jvjRkD8K6qAhkseUmXhvB9hbLm3cjD9RobkhCLrBY2BPMaJ1Hj7dMhEL",
  "key20": "38pg88vR3yZ1ZjqCMuLNbaaKiK43Ufh4uBCntcLvyzHDd1qJJ2XWzcP6zP4d9j5aPxZSCF9sigrAJWxV1EXQaiJM",
  "key21": "4epte1EakwpKJQUsvnsZtKHe3aMwrMFTjh3GRD6DnGhZU3a6ka2vrLrMxNXm8fMVnVLKVhLyiTTHVC9vHNAqFEm4",
  "key22": "TbPGh2iUHevCorsGYfQrUUjT2AjkTM7hDmXCEqXZiiVZJaBEPhzYMQZLGMW1cYK8gMDCJ5AVawyRYv73fegXzjk",
  "key23": "3LNLLmWrjfBGiAhXNCWNX8Phc4ym7guUkSvjd9iGmxCq6Tn9gEV1oFFKFW59KYDyPy3f8QAbxZhNeuqbB5hRc9Nx",
  "key24": "4dHfQ7NpJrj4UweetCZD3yTn3FmhgDiFhTpyoBVat7nPJXhbg7wNdEz6VJTNMs5gVqMTvVXVmq7ruGvRD6Me5J89",
  "key25": "5JhPPUzNZTn2p7G2Lb9SgRnfmP5KS2gpvuPpT2wrtR94txFWFieMqish1Avc8RuW5PU1mueUSWgbgwnQ6eygEv5G",
  "key26": "CvArJWdJhWEcFkh24uFGBV2Nf4o8S6nSBbM18HtvQM3fxW4tt7DK431AMh1BPmj2XZbojKNKDe7XRuNJUxApnZV",
  "key27": "3Y4JUinTtD2AXt6k9ukFE1XXuFRQYaKk2BTBS4y7eZG6E36nyGuEK8nY9HY1pT3H64A4rPRbqNNLHVKGmzCEe4T",
  "key28": "GP1dkhRheAZSY3u7TnA341APAYEi1nRR14aaLaXjY2xBJtTy8VZz3yfZPsq5V9RuApcNZwBakLc1pdub2XP65zG",
  "key29": "2gBWScAG7RsoPppNgKSEUPCSbimxA6z3qb2USzb1i8wuvPTC6Fe4zLXE8AdxzgkzsC9PcET8SyrdtcDp9pqydA3h",
  "key30": "4H9Kk59HdZR8FKCP7v3PWHYdEwbWxMjqSQeFtLWRxMFANumTfLX1V6mB7neMF13FWZ6VYHLmHh7En2yoUiUq6GSu",
  "key31": "3MX5XsyFo2uAEyuFNqet4s6ucU7xVomfeQ5tUGo7hccjAKhrsDxHP2VgvtcSMcUGJPf2caSqGkysj9qZKuXt2GYG",
  "key32": "4Z5HXnFeniqRePFMDZho6RxmAmqQgVh3kDg6dr4HpE2zpN2BQHm2NNdbqcqNZRAFAQcA1yvxBE27WTpVN995QhJs",
  "key33": "5YHqdebYyBzNTcKy4ow4QVWAUZecqspY7aWJn1ZE6igM487DvX7unnwJboVkCio22oaQrM3YEtHbNf4s7rKZSuwV",
  "key34": "5b5JntyGppBwmepiTRxjLWdaRpCF4QyVVYuq6upJmmjcnvQR5SP3MdiER4ydQXfAJwwgY7KqLyV3DC82eL8Yo2qf"
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
