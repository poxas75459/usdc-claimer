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
    "4aDyS2RjxnxFDbPXr97jxYUbUqpUgSys8bKmEVzC7z6QGGPP3JvBE5KQTkCfgmmRXuUkbicMjHNuxpbMHyTh5Qnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZoSPanRnDkrcRC5EguVGWu92mru8ZhZDd5mVGZMT5S2GZgbWM1YeS5H5pjfSoru85MhENBuupEGAJfWLF9c8D21",
  "key1": "2b94f56y2Wr3dUc23QDo2mhJAKzwvvSj1jRCjCS7oUCed25LaA25D9bmDRph9NVdVjJzxYX7NAfVqgPoqyEqwTpo",
  "key2": "2fS6tAe2JmRac5z3Tnw4SxH1kK8dB6jaDzpgXE6oUnB9dmbE3gvYD2b3aBcvYt6eDuA5tz5XoVBDgQH9mM8pbCLg",
  "key3": "3Wg8TAJ285q6ZRR6EQ9M6m9sgBxqTzU67uBiinex2e6oapDe3yeyemz3wWBbesyvRpzXeYzHT9pkQHSKJQNLWypW",
  "key4": "3k8FoiS4uCRgJcqEqRzMDfH2qfFuifnXcFyWyj1BGyvymBvvKuraCiuZyqExgGE1EYsWTR6CaKu4aPiRgZSNp3dQ",
  "key5": "2KVRaXDxcaajppnQRJs18jQUTLo4uJd5hB93fZ2ZZeTe842yJ7peaorUV9vEMcXJ4t1yahkcQfaw55dZv5543tzX",
  "key6": "k2iuesrKuc4dJisQSSaVRJSv5wd2kyepZH9CrqM9iBqYiXyjj132bBJEwpbbBXB7SAJaSuHqjzsTxYsacs5PCCu",
  "key7": "CeApuLjGv7JR3GyKVhyvpi73RdaGGQGbF14XknAuCmTUXrfcUb1eSvpSsP8UGL89QWM9EsA1apgoTzWY4YNZeVw",
  "key8": "2r9KFnoBdEFoKmKkscLkTauSsd5fTX4wdWpbdaavimBvSgo4pX3YqdLKnBi9f4zhRjEzoMuKqpsCcaqP8UBMGykg",
  "key9": "6AVe4ZGzWGpvrdSVS3wqq37pkw7gZvRaTYxW8zubuvse4hFZTxMLtaFLBx4SipEWQULEXyHv33hKALRmiSQcVeK",
  "key10": "2kTRzigwQuPMPHvWGRJ6MJYqM2KYd1ctmAuTJa38YLrwfEMypKNyL7C9jB6fUoCsh1Gt3TctWj3WGiDExQRDKBwN",
  "key11": "5TwdPeX7xoZwYHcU2dTRgJrW1jZyZimaP9bKdPhCAsDV1Cs97mS3u5yjLmG536FaUiwub8gCVRPy1ADSsSdE4KFr",
  "key12": "4p896jZpbFo5ExYABPFtyKjQuh1JqAY1yHHgHea75wNbYQb2uHkFEjrDPnSDViPLrdGset1XcT4o6DQyWYhRTYxy",
  "key13": "2JjkdvbURG1xC2Hfqj2MeNbev24D9dZGNxSrttWi8LX97hhytMWt1yL6ums6xjfjPCmJD6gVN8wDP5vqef6W2ujy",
  "key14": "D5D8mD6CWwS8wCoYunJBc1VZTftvQ2RBojUqSiRSznLzPnqR2o7kD6Z5HL4ekKsE7CaH8LrqNJCqWu1f8o4kGBC",
  "key15": "4ZTGvEY24daYy1Njubht6pABqG6XaqptSezjbo3NSAYgXnY8Ypeban6qRL9z471THEaFQvQBbS88kCwHuyRqPwyd",
  "key16": "2tYH23ySriu1sSvXjeA2RD1sSxxKXq9kTMnhc3M9pKE7Hda7p9T59e1pQ5Wpf51hDtaBzkUGdNnQHqd86sSeQopf",
  "key17": "5cU3vjHX3SNseDyHUh2HEPTu3PpaynTTRyaSL8gqwJewz7by6q8pSwD2bLG6iazyp6E7hEbTNWUjYoDDkzovz4C9",
  "key18": "BzmSRNQNiP9PN1rFuUZRfHSd7RSqYpfbcHHSp1vM8UZFbUJRRvVt2z29SeKafyy1q3NGW9VkBHwcfPZNGGJWCsZ",
  "key19": "52Km54khdrrquBaDd3pVnMC3xMuAFe1MrcB5KpD5mWbm72v3QEKY69NjHfC3w8BSiFhMHUzDtKLfUEoc9oATGFwZ",
  "key20": "H7Z4PykPt7eDyN8Jgj4GnSCUBdwFCR8QPzVUGB6rmo7CzR91E47YF5tUhcWpCdouAWTbwuBoTZCWZs2XmRPuWTp",
  "key21": "4mXTnG9vQQaUpDq53yQVcydaxnzDpxmqqAzddZ7hAWPpdbV2yNkf4WFoTQ4kp13nJsiedcs9RB5ZQDeu8nFrm91D",
  "key22": "58Bk3zA3FgcJbYStc3Jg8Txf3TaiDbD1mPNUdk8it7WVkhLbAsjhGokaQ15Hjum7nFmK9yp6d4SFK2ZeLmNjPuy3",
  "key23": "4cgJVgeps2gGAehWR4xBDjwXyFnVY91oNT1t7gv6txyBETBWPSWQbcMwQ3akSGwhjBcskdmx1U9ZnEWRoXh24b1z",
  "key24": "5jrmJcJZoJrEAzKkhXjJ495J4c7AyRSTHEPJSvdZD4fhoQyCdvusjBNh2Nnn585grR6BqmuwEZ1LDQUgJWtiBaqz",
  "key25": "3XbQ7bD3ZQaLuKZnkJUBoqv7nm8Dc4ygVhg28qwxEuzTdPzPkSoCN6AWEdmxhMAsGkMarbjqtTkQQtLhiBJYU3uC",
  "key26": "3gbac71jo9FyNKahmk6aPpZAUVp6zpjcNWoG198wf2tLoHYn4um63XtsbMtZxGXujzhHkK6LTBug6cYkKYuLF3Rg",
  "key27": "4BaQA7H1g1T444ykhmjvX8gofqXrTb478hig5ZZsfVuTrQ7eoqsaG8EHSWbm98qwP7tT3MQAJLAtdXRVjByRPTpm",
  "key28": "YNwpiFY6BczDpspeuV41AiQj28qZCn9c5Dk1NZ2AwLksXUPGsEQhx7tKcE725eYPesLdkdsL6BU6n3gv6ziScV9",
  "key29": "5tyMhsNu3YnTFTRZsEUJ226qBqGuhntQLHT45Bw2uF7gs6CyeEgH1srcaaB2MvkmGFJXDN5UywbnPvR6Z2ZbQTCe",
  "key30": "48NWfPZxBwevm6TxeQWpGvH9RZbih7Gbr4UuezYpyaiAkM1cm2BK6oEdb2hgviSr8bxMmt7fme6PKzWen8rajXbe",
  "key31": "2594SguWyzNRrYqUnQMzEArz1i5gEsmJR3f2cj4w8k2ukSv11UGZMk8PJxuBU8GpCGYXefjTAYCdQ5UPtQAhfh4a",
  "key32": "4SbRLhfFskyVLy9JCDNsRYo9PTfw5MD4tWTRBhnW8GkXZFDgrMVnDJYpZagCXZzi4d3b7yfHMjRLknzfRJJ1kZ8W",
  "key33": "2J3GZikD6Mu73u8rjgjZ6mqG6z2xgyG3yEWyu8tjjpMNLfr5jgFmr71HKkCMToz57CZSAWo4PBarj7x24VKENkDR",
  "key34": "1mb3SSFAT5uqNhiyeADc2aMfR9tLV6dmgGfWRj9ptuiGuesorm44UsfcswaN8VCULP4vhaf1N5bzxRW7pLWVCrm",
  "key35": "5d6Nd2KC6F33YhJq3Vnhp1Zm6pvi1U2mFGgdr93Ydx7VRj982SJaZmHsSFbmFHkjUR45AuUrt3qaSYxztdvzf2LS",
  "key36": "3PS83ebHUrBfp2M5e7gQD6Z8rj2EsmHG1fBC4S1cVNgWkXvUhdw9bS91WvFdmBAWn1SAWepB9nyugzwCuDz7m2xy",
  "key37": "DQ1C9AxAs9seWmRzPcY5Yvpjp8sR433LjTMqZWAcva6Wzuav6iUw2HYFm3QzpJmqb154mg3F2CZL5dfNEBAXgVg",
  "key38": "HgvJZBRZuyegB3nvETnXfyzGwk4pTfQPqKTcBaMajRmCo9Kfd2hwNsQkqLJaEvTEbCx3UCUcpRTwr2s3Zwv4RYt"
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
