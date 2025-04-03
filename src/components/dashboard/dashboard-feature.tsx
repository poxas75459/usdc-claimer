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
    "2wz2GVoCtmmYFDzLcANvgujTaxQ31jQatkhg6jxwNDjde5k1d3PJSouztW4zVhynvnjPJpUGedLik3xNNqMfPY9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EmVx8rvEYeWq1c4vdkuF38DfUq1WhT2QN4U9DTyawrbZNTMeXxzc8ixLCXNbcSGPQQXPjNB7cxAgJxoQaYidHuB",
  "key1": "2KZk6DarRtTekGWyGsMzVTtSxRVAd9umcm1NvhnzxgrkAdKQe14NTbcTffHByPbUojsN3B2m8JkXLW4ayVrWd9eu",
  "key2": "2F197gxgnEs2ST8LRJExrhxKuJUM5B1jdgLigy7k8dhFLEvFNBg5vAmMxwtKnxhRrrW7McR3758pHFZCJkhuGcmk",
  "key3": "42LZkYyAffqGDd4RjBQmtew3GoQvMFfkdEwbe1dn48iWuCT5rKYjaR3eKwsHftb9gyjVVb7YFfQJZSQbwYtNMQYi",
  "key4": "5oqq3kMsq8eCaSXSwyMnGJGM9M62Fh4dVZ2orvQEuqYqXLhjVkWAGN9Urdp5FvEXSk6WJ3FLX1uXhyfEu2DEm8AT",
  "key5": "3LNA4qubTzXH1RJK52yRBjkM2LGC2HWbyCRLy4w1pc6jk5gn38d6Wrn7Jm7YLHsSHhwYSZwsDhiNGe8N1WCB291R",
  "key6": "5LmGnSyhVH4vq4MGufHqJdmr9drFRC6pgBUea4ESqZuDZKAH9xKXx3J8J5R3rFK3ZYD4NYYpgVJQnGFsUE1gkrus",
  "key7": "m5UfaUfhhxCnzt3nddboV5wwXp5Z9AYLiVfFDap1t1YgEzpgRpNRGZkuzcZhtQeoZ2vXwHqK9jvGZ15EQWHmSNk",
  "key8": "3YYRiAhj4UZS1iFH3ij1XEgXK6g6KdZDyKiLpCQTGzNVd2SLScRujDrqE4b1JBwW8v2fLzc3LF5XXwb9pN4umFeU",
  "key9": "3wVxa3fo3mFpYGntp3YiG9bvzJxpGzXRUNpxym9eeVVRUWuApkr2qZEDeJNTyXJ4dBxpiNcJkg9ypsUymJKT4bDX",
  "key10": "5gbis3zp36ib4W2MEFUW6WtWBsysavxwzEhcQHw6KRua24tqfAqcMWGm5aAn6im72qhd5W3Hvjwf9jvnhHx1SiN3",
  "key11": "5YeJ8AXmRbgbPo6mMbRyFiXAz4RTLjkezgArGSpnLNea4vQbiZff4Bet5djgoxVpWN6ZwRmBG1yv3hCPyQZGdUF8",
  "key12": "Sc5n9TPCK1p5gknfUJpJPGNvKWgbMTyqHTtW9mUSje8a7JkKWx3L1MK8EYRSC3fG2qZax5s7hyxfrMr7eFXzUfz",
  "key13": "3epkpTxNDBDDFmnnQsgYrmpHVDgLi6HTjruNMaTyc3pEUJEzdmPCvAzV1XXPf5T4zP1WwsW1GNrp1RpAx3KsK2Xc",
  "key14": "3JsgLuWvspeCFQ7dT5eQVZbERoE3dxXS5A4urPQavxcDoGZo1fxoSD15gZkzSn5VrR83AFpM4yhSXocPxTfRoJZu",
  "key15": "5on9sZtGmxk75wZY8eZDtgyYnVVCbKistaPcb66R2t9BLJoSac578fd8Gg4f63ZJ2Ug6WTX1HRwYqxjvU8pXAvMp",
  "key16": "5CH6KCyrrK9YmnsBiCG2C4CTWhrWazeLMiSUuSu3z1uTyVJjWH8TLhwHQCorxDSyzzw4Xs7XSb3BsSywq3qsFnBY",
  "key17": "4E5N9yhVSLq74aKBSqevRUkq7tg3QNufbUaFE175qXK6GdFfip3PwpicvBYf2S3XqFBvxRsbQqTuX4GERCXyYtXL",
  "key18": "QeeKnbsYeETBNt9F1Spk8xnA8b4qcAjrxNgyowXxRoTudM3cgKCHs5Mnrf9R2in8sNpJFHbQyTEByG3TbJHyCc7",
  "key19": "55LtT5MgRqNUtAUebqQ7Cxv5hahanT8qgerw9zfpDnfgWu7eStRq7Ns2SLDahwoueWeAUSUipw4914AFYpRp4N2N",
  "key20": "5Y4pusnJH2nUH1ajE4R9pnB4Pn5ZJgVYaw7cpsKmhtfE1ZTjbhskcP9JjdLJqqgaTDwUHM3pCpNxwmJmJiCcTTdf",
  "key21": "3oYD4pz7tSZsXMHQ7764nndAwJeg6EXp3Z48qMNhYTDMC2UoHzT4WfvouHLTehV61swEqaTGmPmYzF7Hkwu9sASE",
  "key22": "4NC42Kv9jdCt6d5BDP4XSK8vg4qEQNQi6AC7rnFTADS9VemgzptVbPLu7JQGpxg8vHjuiieGrufWcDghwS4JAXRG",
  "key23": "4LnfKgur5pHWuSu6LVbyg68sSc5q2CYyEJntAMUKJrDVziAzvYVBwYFAJy9QrY7vU5wyaND2Vq6h8zCCGvpGTU9p",
  "key24": "2HHqzMQ4h29MAyvoQx7syZARcyiLwXZdakYdakcFRGgzLayKee2xTcrDDQMAu8TMLYpUJhZSkLVRAC5nkqUQ1mPs",
  "key25": "yWmdibdG19NcP9FUxqNbgur9DgDpjyhtx16VG3Tr7Yya8hPGBdHHmdL3hD51xqFn7k6QqqoM3QE6WoTLNY73BPe",
  "key26": "34jxJdfQhfiwfjtvhYgG7zDNSQxdQoMC625eJJxnh6ZXYQvZ8HsKgPjF9rzQwBWmu4BPafWvrfvikaLfoS7MLvYz",
  "key27": "5fsEmAw87CFGNxtKuFQG3PkmFf2VSHo7wSfVVDu5udLdGJWXPuce6BU4G2sB3sscvyeKoHbb2C8Aqiiv8xCXXEjc",
  "key28": "5WskFD9rEofWWeQYd7GFoCSgAgkPC3ekLpb6ju7VrcAwYvhp9jhsdMMsT25xDErWdf6zP2gwQ51MrLn19kWmSqyp",
  "key29": "3UgEkC7x2TcLVGeAQvhD6qGoUHnXKUjM5Y9vZCm2PoPMx6pnpEm2eBNu4mWdjgCYra7PjuLQ3ftY8jwDPVCahn1R",
  "key30": "K83rno3J3yYSoQZNFbjzZ1S8HwuKsWxUiUnFrQHDD1dg6FYyNjQaaP7yMUuBV9VB5Ax14KkG7SEpsDkMLCEgdXX",
  "key31": "3i6DHsxh7A8Wreu2n1McXUKSdf8JUY5Ax782MFaftixXxp28Gm9auU1725EYNaMZix59kkHFUyjyGmU2RdWZZMZZ",
  "key32": "TYx89LfvtAEpRcR8t8Uj3Sm1eYbNbnswARUAdnCk7mYDdGC9aWB4P5HHM7iifmjMhtr8eNKQ8pUSvAwTDHufgio",
  "key33": "4ugMpLD7imk4oHRTnKE52M6XA4bVsDnnj6HRJLBgYLbZmfFGXutWNfVoLLphfs2SpjAVErmea5BoDVSQRMXWSkeq",
  "key34": "2akGvKieBnuVBAUyPB3mvwseQ93bsJ21VDz2Xjp7VyTtJkn8tsg5yfKpkpNftdtkiUftfQKmNPrznQGhmWw3CH3e",
  "key35": "pPZkub6dToupRjiQt8yHsGmntE9ph6KAUXiuwSsXMhmgZTEbj6eoze6gmNkoyEWFeyb2md5KEn5iZxrfWt85wA2",
  "key36": "5dMLowvYWKCsWFNYz7G8Lm5i8CjxmhxKAcZvC9dgLL5qxe4yPQGR3mhx2mKkWZc8sjYCmrKwFEbsdA8pG2jUK8bc",
  "key37": "54d8k68tsvxoMXvP1kSatRVPM6sjtA4dGDpqA1KRWSoHi4rpB96bvKQjDyUKZDfMYUaRsvzN4hF4jzAX3hyGxZB4"
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
