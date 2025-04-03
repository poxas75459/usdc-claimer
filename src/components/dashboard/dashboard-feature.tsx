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
    "2fh4sNConN53oJV8Yy7zWNiYwSy53Hh6x8CJusYbswUv9qytAF2CBTZEmqn3sR6jYVzVrDrYL7vKzzPmePHrHP7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NZPGftdMqksJcwbZSbaTCCes96P8EbYzKegLrgB8igocz1Vg1tSvBG5Sa636DnsWYWMdGydDoVPqcPb14xAGEUs",
  "key1": "5RjmFYtH1tbBzhcvCwo6UcS8aA9eRULVAT5awZwYmAZyUmg9ViwVohhPSamjdx9kYVvgTm5BHnoULCySyciQSMaj",
  "key2": "4tkhRLp6VvES7q5ibbosFAfnTCtDX6KXjvus7nkAfNFAMkpttqTRm9jTVDDEhvqUYQz25RCUbmNzqjW4Nksftasd",
  "key3": "4zGtEYanFvPh2XUsKfwxcJf2gvqKuWDKr1PmTSRrgqoGd4ffbNq2b6VMmv5b1HVtRzV5S3rHJFp6jtJpmTCHVvAm",
  "key4": "51PM7i6S7Nd114RyzwDCquKAhBwQiBfrpvBH8gx3KdogPubHi4ctV8YUK3ToeWGkJH6sX4Jbr8Vp6utr9e4Lc5pC",
  "key5": "2RpQaiTSK1H3SL43TXSo5diif9dgihBnj57ieK4sUQNXGDtGjjRyuCWDBLsmgkeZUjVPGhCV4oWyu6qLLJchxW9z",
  "key6": "3csM9SrvFE7rbeSV2AK6Cb9XMF7LUUUSNCTmddCRLXYswsBRpvSJdCxFu84w8pVPDBfPR67awspK3DCWhUjDC86E",
  "key7": "5XcbeWEYioKQbBfLCNyY3Sk4yULB2i8MzHEA27RwaV83NFMU3eSioDaHdpRf9FhD9nUpfuLiWPFeSiD9MqmfpFUm",
  "key8": "3ThkNhoqhpyoVj1hz15GasaCo4EKzTdCYRvgue6nimfprmvCZemtKb9mc9R5PoLUxwu6dreDyY1ciztV12SjMh3K",
  "key9": "5YJESZ77KGvyrvjzr463qNQ1a5eq5c9XYdfFxXA4JS7r2DU6g4aPXtyMXDpkd9mMhm2BzCprZkujARfmeG6dZRLu",
  "key10": "2JmNxDbf93hGX5Aw1ArCE457FcP5JA1LnJxxtaJXLWP85UfqEc2DJFd42eEagpMbnQGLxf9ZSd5J1mEdAX7Su4gT",
  "key11": "4CEtR9RNU3vcwUrDHLM9vUWQ1kwfyoJ7ZKzZsbuFJqi2D4FpeXUybVqfjVe7NwE9Co9WWVxDnHh7V7hkbCWqqmgr",
  "key12": "2TDHQ6rpc5sntY9rJS8A9m6haSDbRGijW36CW4DH8f5T4PgqHKUJcJ8C5HB8cHvzV3zhN2DFM5WGKAZAiBT4DDBR",
  "key13": "2eAVTraKRNaQNiPY8u89uRDVmGrBcpDwUgHgthzuTDnUuPcPca455BfVTbqcWuReqtHWMQ8azkkWXJsk7NguzW5d",
  "key14": "3QThV5LPM3k5tN8g8oCb5xUbuQz45Tp5Dbmp6sbjkoGF8EfV9BCJfbD4G78YWECQFEbd3c6rTQKPQ17cREiD8PD8",
  "key15": "mp8nSuJTMmqQa9yYHGcsaG6j7PzqeYSyZtBZX1Z4qgcxfyKp9yJkaYwkH76Y35Ydfj7zwWDoUjKwqB4rVvziEX2",
  "key16": "3HtmtG1chGimfBhzgioaFMC8Lt91HMQdjdaUfPFGregyCYun32Z9ALDrAaDzv1eiHGLcittDWokBLkeX5aLJC6E3",
  "key17": "3BfCQa41gHXQ8HBcofacGW71unZh8zf8oVdmDd5NUipVN4SaY6p96aVbgyYdpLpcM7Zx7aE76pWtBnPVXnWDunNC",
  "key18": "3KQqtUeLX6zkp2G7BtdwnKcZ8jYsJHKSXmVjPJJssUYh2fyWWcszprvjGs4isEqWSSS1pChVp4SfrctTWmJe95mR",
  "key19": "4ZRBt3AvzSgcYBi62DjyqJTtohB7eeqhA3rdhwXzMH2vxFUqR4Fv32TohFjRA2JSgidoX2np1CZhPBwzPAbCcXYk",
  "key20": "3fxYELReC2Gq2wfXztgYg2Qa9KpSGt94Q3pfm6jKLQMwbm3kUctFDPRR22ikK4HspvtcHmc9dTbxRhaqqEPZcaXd",
  "key21": "s4QaKANexWgfVFCubREjccZD2kHuohKuNN4xG7Eox4Gk15k93LMsmvzwtdzekLUuW8DyY3W4eWjPBQeqydEtzbe",
  "key22": "5hrhRpc8y9g7Y5gThR2wi5EJPNxC9Z7MZ3DBwwmRAfdoEyPJmG8B9RVEZGSi2EWiESAfgtPrZivPvQdc1b8uDbTq",
  "key23": "mptJQWxYqFav64xvwkXUYxJzKwK5ykhVB19DxNRQcCczB2eFULUiScz3mUsdEbHggfC1vojCWGgBKHgpRHkxZbE",
  "key24": "4XHtSxFpjawH9tRaumDMTCQnF5PraN9goBev12wo1qDZ6nHEfHAZaBCnf9haMuz8pkpgMNZw2jypKhVHiND24Fc3",
  "key25": "4xUkHUZudorazf39UfGYQFs8L4n872PEgZ83kFKWTTWHgcGkEXpu4uGUMFHBAt6K8gCU18tdbSCcxGzPcMMs5PtY",
  "key26": "3E1XTW57VyguyZJSN9aTc2iSkARURy8Cr2K5rzwAfCSFvUaKRmwwAyX2Vt9wFCJZtGaB4dvbE5e3DaNqnTEZAXFY",
  "key27": "4nDerBamxV6ahxbdcTMqVMjEftGu963xok6EqCAohvMr4RT3VsU35D7ebubfPKGJ4rQiw7XetxdvQBWb9cQrPDas",
  "key28": "2ZPrgyNcpDUP3RNnd244TCMh3g9x81uHPbvy5nRyK3vZ6Fa1NXPYNdipiNGEZWYenVGQtrgKVcdbBqPguJyAjrf8",
  "key29": "4uzdrS6CmJ7MLCuAsuBGKVH9csjg3hSohjSSgJVCtzQ1ZHfQtUf7NcTNtxV58ko14kzUqrcszB3HgYPYDGpLn2ZJ",
  "key30": "2MfsBFGq8bN7dkGny1zZFiTMX71GT4PGqd11Dm6n4j5L8zya9jQm9M9JLzHAxfucTaFWkMw91XY4hwC4o8xx4JoC",
  "key31": "vn2dpM6axzdGH9Kjorx6pKTYUphDPo3raVnrmYfGa1AVorqcK76FP2xbeaBoT5xpuqHUQSAswMzqJdvkw1fjqya",
  "key32": "5YZbg1XusGx4QtCC91MDmU3WnFuMLyRtJpW22qESuA9tmTmiY3BQg3JbL4uxqRYwaWhK5xAksLz3dKpDSrVodx7J",
  "key33": "4Fau1SDZ3WUjw3x983siaj6ykM6ekQ23dz1wcao3LuHJfk3mGqp9zW2irGZKTRWoHG6QXrhHViwM1zrV8YBUa6rB",
  "key34": "2g2MPmgQXHcRrzYEWhMzVKjpoqUjwnCDcuRxpyBq1uijHyJHAgGkqQg22ALNnr9zCqBkFuN5Hw87xHQjxKV9EMtb",
  "key35": "3w54bhPRfH1w2j3iCig8NTjxDCBxPtaxZ3fwBK4WQxVVJfr2mGFBiU4pGJ4FaVDFdF5YJAyX2VT6cMtTHuXkmkTd",
  "key36": "BswfgFP5eEnrfyVsQqjfU3R1YQg1GCxBCMNgHvvaMWJJ6V6G1Bht49MBYZMRpwQ1AiEv4YJ2QGTSUqNtH14JaMu",
  "key37": "3tk9a2ZHKshGapenejG4biGwkT6yeUrMwj7TVhPXJiBUEMRvFCY8FzFN5CVmEy4LYY3nUtYwy6JWkjwfFvG3cYzo",
  "key38": "4hkKvVNDF7CE3H6Jxtcnfae1EGhPFXFv7VomTVpoJcAfafwSYM6G8DmjKGtuQFXdYt7HYev1H4HyQswMpSPtMY65",
  "key39": "3qXAKRWrrUkLBfUzFzYwbJrMDgWaTHW3rxUctR4xKWELGBXJqFsL3YLdZR5vsFFrmzkR72TyeMNsUqSvDxzBDNnv",
  "key40": "3BAhLZXCesApKsQ5TRkVFDA67NntKzv8qgTa1oVNgvcejb1dD3BuuETn24TRYc1oiuwYHkJHCMQxJccd2uELdhp5",
  "key41": "J5oyruLMhVtvipU1wwf9NMBfCmGeokT2MJaXHi8yifCan68dEeiqXxoDbRLdibPhN3NMLrFKigVrChf3YBYHuCh",
  "key42": "52HSXxKv8RMz7zzpAbfZC1DNuZSiQU7GqPNtt8J66zxQtTHt4xfvYCikJsYPunphdjiCcpXgKWwG4HbvRXZMiSKb",
  "key43": "5WsjX3vXSTizKDK7aW4LAMcqMVSNocPwY8xNwHrUWUC85F46ZyuBjbkMMo39AQ2Ts19xFvQ6i84e4JCZGPMkx5qX",
  "key44": "2N3DdXD8tYKR2tpcNyuW3ka5pjJim39ZPuL1nE4LLaZQUZYJr14UzgZPQUzGASGZEeeSCsNAj36UbQx6pAMYtmqz",
  "key45": "276UEZp25AFTgrpZnHGYhRLFWAuP562bqLLJ4eiN4z2xbmasjw2PNQyvQF6hxL6UM7ugUkipH447oPw6iFourJYn",
  "key46": "2Xksq9AiEe4mgLd4aZ6GxH1HaRAiQUfkTXCkRo4iW3aUyST94dvMynPi42Zimun2e6MYQnkn28yuzVaQuLMyPRnR",
  "key47": "46PUrLMPZ9tVGmwm7qcKLYeodKws5nbqbXoqL4Ju649QMtB72hxb4zKCyGewTZjKQ39MQixPgvkLV4EzHaxGfZzv",
  "key48": "4ig93KPrKuawhFYmnjeKSuT1QMqQyJXTiW9BkLApMUKPHHH3KQaD8oRsY5Aqv1mycKFq1rtk4SRUqaM1kf4ZDKLW"
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
