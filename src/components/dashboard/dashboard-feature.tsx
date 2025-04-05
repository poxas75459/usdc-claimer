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
    "3pphQMuV5mr2VFfu8axe1PvPjZWgXya13n2iboeMdZ7VYP2ceMtSdJnBtt8TpsByDHStGnAwPdwqgYrwrEoava4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WaN9d7rnpFKSHXpy7csgxc7uzFEGYcB4iVDuT6DDWAQDYD7K6mSPG8GRYAJGThpeMZ94PbsCQ8XPNtTi3X56rZA",
  "key1": "5Y4J5HGYvuW75Gbe1kujmrMMvpkFc8NDijZwhVeuobavLWq8EB1hhx1muD5PFfngkgxayb5fHK8amvLH6nHMaCYS",
  "key2": "5hC7cnKzp3AVp1LDDKBgrxij4zZuqjL1apNn6Us5ZHzMt4L7NdV7fskA1wcj6rNELPA7eZxYRpdkYiqkNk2cw4JA",
  "key3": "3yctcdd3XdWBL8BgZiwxBugNeayGv6yojCwJZwrTqFAY6emcsVa7MfUkqf1whdf2YqVvjWkTV5XahT1Z6ACJzrro",
  "key4": "4Bme78WKEwv7tnjuVdee8kMJZxWX9ESb3sXnprfp1crdiHMZyX2LjVe3SHEGqGywZcrVQ84Wet1nKcxiw1ycquRr",
  "key5": "vcF3HuDBuzBzjUaZEttHd93xj2WuAgwgnqdZ7qjDnaNtkMLvrn42UAcFMQZvBqyrv8YikS1YAMmP5Wd9ZbAgYQy",
  "key6": "5HC6kCL9mMxaFGhnXxVZDTUMnMH3C3a5JT2h6uXc91ZqqUyfskSZhmfZ5kWiQX8s2GarCphbas9Npb1SUCVtKzns",
  "key7": "2SGg1fwDMHinFSVQHhhjxUJbQhLrBm4LTboB5UiLw4aBFh72WDXTPJAXTsZWVQhwuLAzTyW3dhPNk9v4dp2aahjG",
  "key8": "5ViZ6yykorAoARYtQdzq8HzpYBQJBxHKrNJjGMrikuqkhC5a2sefej9fuRMwWdJNwPWm2F1StUH8GwY1w2FaTnHL",
  "key9": "WzW6aVRGWW2kszVscmMNFbiJ8Rw15CJUjxnTKgEbt7zTSWx7Tsh6JHWe6gsh23ZrYLY84YuM9UoaQkhTiJGd4fZ",
  "key10": "3kLP9oH3yoBgHgjqRCUbB3scFR6ikiVRViJqR6ULJwYzqZuCocx56C9q7tPrzmhX7xjJRWY7SxPAvAbfGU3QC33F",
  "key11": "4Ytd5mT6py6n4VUg9zyoNgkT1iFJw4WsGCcQQA2iq4ihvoA7DsijAyNbGhRbn4EU2NF3vuDPH2BGQsHfXxiy8d1h",
  "key12": "3spuNHDdWFfiXcZ5XDr1Gxpy71qxspLBd2dfnTm1ktEj2MV9zwVmmWGzLK5divzYnEZNFA5PrG4fPGoDzjkVEEoT",
  "key13": "9sXw3rMgfmBUHZbKSKDWQAsb94wQ1RSPhdgFdW872AK8GUDikfRLWekcSZrsjFRJYvQDBJo545p111Udo8K9Zkc",
  "key14": "4HzZpjUBzxXTqh22fuxyj6jfKGLZBnLBizmadbdyjBeMVdErThLaaZX1cumtWc5jYxMgS8fePGuzoPNJPFZ1mQzu",
  "key15": "5m5MnmUW89Bo3mLfYf7GsNXN1zH7Yagnf6su6YqU1iHH26Ek84TD5393Lma74UaZQozx3fjFSmeRj5VviTQpwvg6",
  "key16": "3goU5q3kdoCvNYuFvp55y7n3XvhduoQJSHVwGNhxygkYKZzJobVGZYZuPNQH7sFiNvM1CGQf2tsEKAwvUrMBR7Gk",
  "key17": "3D7PYmLaTtb6tL923ckxNwba5LPodxSD4q1S91qtEeXEUgcTSa6azj8itQ9mCNnU2wQfv697VwuBkndYiKEQug2o",
  "key18": "3HKzy3ziUzLuM1k1U5g8DCx7YiCqwHS7m9Y8MQ5GPZLDfyck1zHjC6veJNayAWjFfsGQVU8ty3kdcbDo8yAqLbRF",
  "key19": "EW1EByYca3ZEhidaYwNoYYu33rUNpZXxZShcKhwGLCydss8bVd6NfjypgBd1hWXyryEfkJqQgSwjYzLZidRm9xh",
  "key20": "3HioZ9GfsswUkkWDpzdhBBnT1EakrNfff1ozBrFHiGL5E1c1ubijvS2eWwVkk332MTBugXGwGpPgBeVnVhBUck3y",
  "key21": "4ghKY5Zp2dtKbjkCis7kPgPLBBVMmUFgZgRAkJ76rJWK4tgZ8XgzKqRRDGpAw3FHK6shaxqTvCvLZcVvnXKx7U1q",
  "key22": "5zS7M6KxNC2XsoNaBVmuDc4AqcizaPM3rXZmrcN7FfmWZmfbxaoTXL5Rih1CD4v8GSYhxF9QmguGwWR4Zd576GjU",
  "key23": "3xnEJ8yhFrARud1T8sGmSNKE9Qd8d4xspZtCGfMMRi2oq7qURyAqdWzo179uzs6Up2pY9aBQ45bnnCd9fLWVkz8E",
  "key24": "4os4Y37bEzrHzAMwaQjCGDXw9xK2T3j21YnanaLHocPAWMj6WVrVWAFcLVdCAYY5qmBwzokkxZbmwjxXQricxp7W",
  "key25": "4LVHyfoLdzNxyrRT8vuZwMjKQpP27WXP1XMF5scYaNABiRoL1gNVYdjLaJJsfuHhMVRVW2Bd7YgBzLJ6wi4kFeFs",
  "key26": "2w8ruYU2vBy6N8eNcJvGm5hUB8TNa35myYUawwwHVEHfYZMbS7oK2aZT9RULfxmgmmXCDKnpL87eRtuK4MBSjK96",
  "key27": "UMn6BRDgMijXZF1BMZKzgEPaLZg5h2RWU1vjBSAfiZSUWPd7sdRGaoAWReLPqZELoyxQ44zJr4TJzW1Vepyjq5W",
  "key28": "2QtBiaSCPL7pZR5LtVuLpRiFpsza3CLc4v2q26XovZrMVx1NSmF7LXBe21yBW3x6RQbsHZWZ3bp7JJLNEdP4ZsRv",
  "key29": "V9J1uBr5m4gbETpHmvP3yBuw7fP9of8wkaoDAKY6x6LpSkmZRkBuF6KUMrV3tCS9qb8LZYPeLB2vyKREEYbo2dR",
  "key30": "BL9CNAtt2DwDLKWdpaMNH9AyBE9FRLAZYv1KHFGdQC8wVi1TaHBWUmg8JwhCsHpysRDzjfC3QYscbnZq45n7nNY",
  "key31": "49fWuzZdvK77Mdg4mzYJ4JzMa1x5paxzwhCcX6B9cK3cVohPbUk49fGMwXuhiX7hjiaKpLNsLQ3NpyKGr7sYHv7n",
  "key32": "QBxtfP8V87zFB96fFiEisRS4EmxrFi7eYNfc2yNNtok4LreMWeRtMFr7xH84L8xYvGRArPMUD72RBKAyHtxjgQT",
  "key33": "3sgSjkVigb8cEEBuwAJNHRFrbk7UmESZAR72tUMtfZ9Wajo2rUJZ5WKMRiq6Hkwm2fMFdbNckEAspqcPdavDy25k",
  "key34": "p645eg7mWCxd161E9qrDE8oeJ3Yq6kLE4wG2mJeCgQt6jnzeY6cYDVa3UT71unfhYVFgvzMGxdQi9M8sXrCKpeK",
  "key35": "5rdVyotGwJYnLxadwRCJZbrR7K8VrN1WSEnLNajDb7mT9gQ6KWUUbTXh9oFmgBLyob3cy87tTPqpkpsmpuHSz6pZ",
  "key36": "5SGAB3YYfAGcRM56j2fFxsLjN26wfWzhaYc6QNioZcnaBsRe6fbaweNdTq9wP9abfGMPzDpFLjoTkvyxbV1wD5BF",
  "key37": "5E7j6cqPhBij2Axyb5aE5Nb8g27HSo3tLmeGvwqbXsj7UMaikaBTSc8Sz2WfAPpMSptsMyacp8Hge5y99hazGwcb",
  "key38": "2NK1Zof57mgoiA3KbDZAhBWPPKW6KpUHDpsx7nJSsyJEWoKR3KiH8rdkvRzh26Jp6PQng98agmm5Ag2ZVPLcM7X3"
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
