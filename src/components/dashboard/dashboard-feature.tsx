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
    "39JXmqczWENqP3CrKpELCTYuDeEw26fqAHiv8snL5DWRZq4Fp5beit9gQujaoXqqFNrH9FVbjVFuydLcvkznyCzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h3MLphgyJdks8FonGstEzCerFUgLRzDeTGqzw18L2MsaCqXsvEBTwmVABw4Qy2daDvsyqTdXZDVLaLCRxKEmTsa",
  "key1": "5bgLZ3nKZTjvz2vopfALKgoCrkSzfyPRyUzEPCvgDBWFrwycAvuuibGXei2HUmYPGQ1b3A1geKnv4ThbrGWKbMo7",
  "key2": "wFK1L1RcbeH7fyFFL3tHtqHXRdWBobZh3BeF64EU5WnsKo2tAfTWVcwmptd4qFC82uvcTX2QJd8VMEg1NiVGudm",
  "key3": "qjzy2yqfNt5BygJB2m5eA6w75MowgSz2UWHpwbXvrChVQbhwDc6VQGuGJh21KkEuHRRQcV1SDB1HEt3s5EvMKef",
  "key4": "5Ls74hU6S5o4uH89wjVhXZ6QfmQVmtuzTjUr9n9JY4MwrSyog3rYKJcCa8QDn168knmhGJBHB5B5eQV48R87awHQ",
  "key5": "2H2BsWrzUb7JfmQxWW5WHXUn8tuB3MuwjoaZtqAh8Mz8idMqDAhPUDcmoMzEm7Eo4tDMiphuQegUiSE6xh8Aup24",
  "key6": "7kuKQfPeer2EpWE99gGDAVXCKhdWxg798DVoGnLiRQ5LRk5jb6vrBjvrXkJwQ6q1VSxbV4euyMAjumWZDvLNNF7",
  "key7": "66sWEjyuzNsdjWVi7YZ8ppgJxL3vbJC4XQqqi5sRbG6QNDXEXzUjUcB8vaBQbQLke9DGLFPUWjvBuxrfvMNWmNJZ",
  "key8": "37c8oKE35gKjARypXEhq8xD2ZdEhNUPjavgcVbxqPgj3bDyGL57DZX3qzSqZai8tdC53VKbRxKBX8zHtcthFmpiE",
  "key9": "4UCSB2PWFkEphsDpzTJJBWeNdFVxHoC3WshVNPWa61AGFBHURfZm2JwfSA25FMDzZZi4rdrN4uimuPFzByMY11B6",
  "key10": "5PHPXSrf7QmJRjjBN1mKLMxojhFSoN9ZVPjhtzZfyYevkV5FatyhPB59wXVXZdtcHzv6VhzEruqgFS76Wrk4hMh9",
  "key11": "4WZrs7aLwbabGcFA5N9HwvH9qPVbMTHT8EjppDs67UzxB7xW3cVD8iqTwybYd763rpdqJ8fbU8GZupqgaoVtGENC",
  "key12": "326X4G7PSGrnk3jvdmG3kused1NswdBDJR41V5XUZHVSg2k8ek3MytUANgDTyVgrvFfNBEGx1Zqxf76SL58bp11F",
  "key13": "G1UA8jLjaJwAbhYuJJS15eBCEq6Bt6rorLb8dFroBybHMmGosCj3ALwuENiN1dV9TYBeuZpRMJZyZTHTc9QqUxW",
  "key14": "2Lttte62UThbsqSjmjfSsMNSfyiV4sCHYt3ydNHh7W7RJnvistaVqKjGu5k71CSr9QiY5EPXXah92V9yLxT71fzu",
  "key15": "LamdggsHhBvjU1CZcHdAiCTRpmA4n58wd8QG5FxLWTN26ejaF9j3wShSYPborbm8RMiJQKnwAtTP6ynExB7Pqfi",
  "key16": "4KZ9RtNWAfvSHofSGg7MBcxC1Y3uJSKiZHW8LYsKZ7pzv7qnkKZyKfy7eB8xDXSkXrY9XVxuWEokfo6aKSdtHJL4",
  "key17": "4m7n1iT4EQxfUJdq7tKwgNSbTL2CXYBMmb3jofiFLpnX34mL6sEHyN7orFuNuBWDpju9QVQh2Z7nSN2AT5xYbo9Y",
  "key18": "3FcRa86k5wBoWJpT1NnV5epH5PhHAmawtr31u4TynR1b2cGvbq3ZhV3LMheZKNyimcGTz7dg5PvGzJTY5LM6DoLV",
  "key19": "4fJMmKGFLggoaZQQMVxRFWcWEUsdyBaQZzyo7syxCeZDpXUuzSPwpigf3WRhi5ti8W2YQ9GRpDYeBDdG5qmtdj3a",
  "key20": "2YX6YpQZx1c1FsEC19SoiXigGVgW1HCBPnDuyRuxkE9rcfzVTsy7KwDt4nBUZc219H7AaniZ9wU2wuZ5MA4BeCVC",
  "key21": "cSGfcsiarM9R9Zz2Zm2xgfwg8PtJXnqZxhrEt2YpVEmdwrbgg6G31VrueP7frbKz66YVmd9Tqcqjb5q8wy2o2ap",
  "key22": "3HvupqEamoTapifUa5Mw3UYKmKo7njqEg9Ktqesfq7ayxVrSW2TsW9SeTgTSuN7bx6nd6qqeHUNjicXj7WZP3B12",
  "key23": "21kKKDUBFnY4aRyB5BDJce39Y2PegP4JPLkzp3gRxbnX3vJxoDJSNXvP8mWqC1udvdTCBwsN9NJgZRzYE7ZfarVg",
  "key24": "qnyAWGBNnPATFWDSNuDNmBoFzvWpvmkKj9QMj8ReuQ9guz2out1JDuy18XvMfr18LqwtXWJqakyBA6HNRb1mans",
  "key25": "4K6wb7X5G5qbaLYrL4cbPRmAzqhANMt5RPFsvqnktJ9XuCVNb7iZGpcvmqETmGoPbVtQnZnaTnvb8BAzWD3dR84G",
  "key26": "3uacT5VGyWdjX4tpDqqyXEgiDWSUdzxExW9wYStSAdNPcz7LNsKHdgSbfkCNsvRQ3wfQ71T92HHUkvyfQjmX745c",
  "key27": "2xXLcvs6WLHr2CsKAoMqHDjBgP8Wx1TiQCArJAmrjrdpihjTUvAJnj9nwBjHaqKS92RDodUZ2kbK4pDdLdKKtGEx",
  "key28": "5rcdE1osxNmgw2saLTKt34gAP1oRJc62k2vAcdSDPUCWPPwrrCwWxAZL9zSfd767zWnJbD5yHTXteKZQPCk8cx3n",
  "key29": "5yt6mazvJm5ptvjmUwSv6HuPptFy2xCG7B983cRdRzmGr5xDcsoz1kFGKjscPXwifv6ttrqfaVkeGn5XtmRULQ5G",
  "key30": "2q8x8ecCCK6qaNzfxQXw3SJqkesbJrhXtHATRYNpE7aYUD1YyuGjDYZv1oY4VdupAdk2oGFnSR9odyd62o45tSzx",
  "key31": "2XoqasVgnvhNzVaTZa6kxLZb73TfumHQZuawqj1tiB9vJLrVNGExZj4AVjRB5psCQSbArmjjrZcMgL93BqyMhfYS",
  "key32": "3tiVkPWhvQGdQRD8ruF5tQ4nZtA8CgrD2Bjvrx9b1C5WXdkp3gFSN5u6JdQKAeUMXrhHQYjqtufqj54GRmmBRvWk",
  "key33": "3AkLAUmWvYK7Y6L2JCpUFtuMb9b9Fc3Tp4ZiF3jKfCMmETDzpYzXdzZoWmiAgrsnd68xHFgcNEFqZKtdNdEepD1w",
  "key34": "6p4rpMs6SdiML8QTeEiyGxfVHbceRdsjviKcXr5TbKU5oJK8XpkZhcs1ZBU3h34E5hZVHvyUmmHv8nqJx6jdH5c"
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
