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
    "23YwMgehwYA8w6e5QezjbeaRp2AQYFGfXbq3qxjGFPF4i46maFpw6f6ZZdQLa9sK6vQuXBRZdR8yTMyHNyBmxGBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jns4NJu1khG1UgjpWwa2JpvfrzzXk2JaVD2YGFSY2ZcmucZqr3wN4yiHkkcqAEiH1sX6iyuFi7CtrQVkdSaGo2G",
  "key1": "2RmcyQykNV8MGzAaG2JyLp72iUa3Yx2DRYFcnJJxcf12XWPjgBQVuaoUXobeDJg81YobzCWTsuA6LaDXheMza6rp",
  "key2": "28DF8V9v3s5K1qaFe287sHPaShR7WnLESi58BJqDzWEgYijKxZcVi8HTA4uDduX74BQ81z71kmocs8pYYfeitQMD",
  "key3": "5KyKKG5EJK7vnB8NHcHyCuMcqxK9jzkjvm3M3rJk1L3uK93f3yueFgenmTkLZbTA4BpGHWZih3XhgY8FVzq33nsT",
  "key4": "bKwFTQvKunFccXrxoKr2SeGfe8RYeaVvfqnbDPdVcYJbzBjdnpnbWaTs8zm3Jx5eHdGtTgPWSK1pRWQXkdA92bJ",
  "key5": "K3yzRmX1DyFy83g1gCVY1Qvvg61XMVG5dv7kLSEP48cw754ykZCH5ayeHLojhncFBeRuYncVeoxM2Nq24jiJLph",
  "key6": "4ktyiPQJyEHXNVHVVDNuVn33dzu67jq3vuPj2H5DygR1s5vducwStDViwyDofABYyJxNAYbRZBFwMjnPZDD4rAmg",
  "key7": "2hEzwhXA3NmJBJsiu2jhJoT79SVbrAQjAZ8dWxR6qAZJ6LdvT4bqQupZBYWnSiQVj8DBGefmPPzFTd3mgpVBtjar",
  "key8": "7As33EfHHbG88CBEE6JSXUtoNuTMPDvor9fhRYFtQxnEvzWYcaosiQhrgWZ8TYi3nFaUYLynbKNsgUxZ2sMFR2p",
  "key9": "4Ky5mrvLcbgYsZknwC6p9aa7iNTo6pRCq35T95447FoP6aAKFuh4b32C43m7fivRks9XDwJ8DotQGwvSGNTBtgjP",
  "key10": "4VFSd9WdHLr8Cexd9rrnnCxHuumnuRUk5NJB4zzHRKbMh5d9cVqq3vSZxactk5ecmrhTkaRZGKVwy13Qc6BEpCKc",
  "key11": "L2YyDScPyg2rpKmXyK6STUUWfeBCwi8BJ3e1mqqZazgHAmKnebL9YevXDYErNMuVaLWesJvry9CEJBFwzMzb8t5",
  "key12": "QcLMPyiwiMSDs2TyYtTENGxDyunFigffpa5dGaeWTqcd17j3p4gHLw49QeRHGkQZPzb9EYVxQ1C9HtiVsTBE8P7",
  "key13": "4NEh4GSoU8RBqTu3aCoiefudduACbAtWJrmmsiSiXtkr2A8rXQzL4D1Si4FHYJE4nULJVojHgBhYSzPMmVsDBmNg",
  "key14": "3iY9mcaCeyMRFZTDVDp6ZRsFKqT3PTohVmrzaj5bMwtnm4EPPwcPeNbafjfSzZwa1GE8EKGLkeoseWwGGgprBhct",
  "key15": "hGgrirSLVMGbCxKnTuKYeTkk6CPxxdJxHrgurQg2cgjoZQHaSNehP8eDSL16kLrwXk4AHWS8uVk8wKiQdH6SnBr",
  "key16": "D6C6QzvRXPnZLW1nC4Afdsk9QYDqXm42fyak8oAbyw8uBw9y7iTUXzsKb6SNGcc9Ny1K6puG4cjLTngMGGrnd7r",
  "key17": "36q5XwKs8FqjUfFx3s2Fko9hz5EUmoMJVJTMjNkw5X2ao5nBYeRyL36LBELPKyyuJBjhudys23RMXW9kKHrvCcND",
  "key18": "2dZREEKeESjX3oW9oGcPawHyFLEpKeBncHxN7cLmpZjyCg4z85cadku23VwmxrZ7opkm7qNdPh4vcVB8cyAKSo4k",
  "key19": "XPU4GoJijdp2Mfp33hz7f978UG7p2ttKksHMdxGE2PPZvp6ZXapne69iX3jSQjR1yqv5p4F95K8MGLsJNoCj86t",
  "key20": "3jrSQDiJTUaKGjyV2iBEDQJ617hrEHfMaHWbq6kRcFH8nHJTK3R4XgwqTD8UzpRSJYaHaCaf3S5tBc9tRdU61TSk",
  "key21": "2qW4My4QuUqnzHtanprnFppJB3zX2sVjMSjAByszmyJQCDnu96m1M6Wt8gCAqJefbXshY1HJB1bhYbhEPmb5tBT2",
  "key22": "39tY3uku1bHmisysMrV18MxRTfuU2mq6yriCyQadqtXw6fe8k3q8xBgrbU3TwxAZbUAbiPsWU89gVCdfmbyQzFi3",
  "key23": "2dkuo13JYExYqH1QCPg6cPoQ8Qq2izWR5D8sbTnrZ282FN36ZTRXqfmsGz1MPtKHT3AbYkw7ZMos5TBKi9HUdMJb",
  "key24": "4Q2s7mGxDgGtHeA81F5BDvKYu7B8KHKLaMncKeF95Gb5AgC3koUh8hW6KiBmy1K5nNfD8gRqqZ5FS1hHdnKEiMmu",
  "key25": "2expHNb89ZDkr4HFe4JwzPxCmCDkebzMQCYYPDwohEPUTyQxutrt2PJfDZb55WLrTBB4qec9beYsCwoXgv993M1X",
  "key26": "3y5ifonVx4qEqxrZHfQzqopYEoxFrGbt3kxTeMmyYdjqf3Zoad7u9J3AVUbqfVcZJLBD5PG49gaGD2pAwfokRBnq",
  "key27": "3kkxzq8mP2vmVpnzsCfPaLJVQXmAGjFBQh2Jtcv8GJDs4FQMucNtb2B7bQdLihM8QqKhtJAVXLmWn5DfyprUA2LA",
  "key28": "4BKA4qBDd6FMFfaJ3yo3k4kZW9vUUgAmMAVYueDoxLkBLwnm6L6pLBUGByqpmtyTWRdRap9mKLncY2RJEMmc7SG8",
  "key29": "4TLN2UKjJbFkDanfSAXgxmzwizFUYwW5r9VwUyBpSQCsoQ4jG2UD9dz41EXqx9ypRA2u5Ao5EkFUdYgUeBP43MPQ",
  "key30": "2kLRkDfZMMJiMqpuJAWyULY9gjqj4DYUmAuK5ch4Caxhe9Aak51iDNcfQwXb9FWi7TCeRmY3c67V7NvHihv7tmwM",
  "key31": "2B7V7TJ14u7wDPZdEEBiNpzbx7cMM9qMFLoBcmfU7MXWa79sAhRgvLJiRbCZT6qM9QvkYuzMSjNcKvzc4UG7bpjT",
  "key32": "eLRakx3kNWx1zj3s6YNVq2YjZvrQFLgmPcu9BtNJLHQX3V2k377ETCkCkUnsDxLw4g1FgQc7sKXChcX2GaMHnra",
  "key33": "3sZwkFpBpRMx7g5y8q4g9FXGii1Uh6AJwbcfSdpRzaovKGog18ZQZmnL4XYwQ9GxwUfsTc64bibEkq4gZpWUgoYP",
  "key34": "2KBTG6bFhg9vFKcWpgeZoCH6kWiC7pHM4TnGTsUPSPeTLZT4NoL5NnL6udRTnWqBxQcaGtMvBdgz1MfEbB67WxMY",
  "key35": "5CE7kypK7gmn9WLmhPBfu4mCMz84s5ULDFP5VRxzDymYECoejDswSo5FJiCKJQAw4gybFXB34hhfCta4AH8jvtf5",
  "key36": "5PkgVYnA9eSoEgJ6JWfbdbN8hf5VCejxVKrZRkdstGbi6UZRJZ8mDBYYvEkX2RBCfmfXUR6q8ANpMGXQXRDPDLJu",
  "key37": "3cT7fUbSmgazAo7xRdRZM5ULnMNxVZeqHxWsLZTPFEzZMN87YHcG72hSAYcWJ2A2obUXQKhosQMKnqbbSVPbY2Y9",
  "key38": "4uf72FWoXMDAsecdZ16iT1ssB6RQaoMjiu2mVixbZjeCG6kjF97MaDuHTPr1xtjf2VWC6TB2k4X8CECcqiVj6LHr",
  "key39": "2tdw3WC23rY5HD37h9wSyuyrJXm3t3dCXqMcrdVCDMEMFBG6EJArodzWUVePB3j6a1Quag5bjdKXz7kCYsZBAfP7",
  "key40": "5Bj4QJEiU2mteLrsQRcLqonePBtXUeTf9TfJkCqoKgA5sfPYdmYei8VVa4T7PivEcSPLNoUSBzwEkJupjB5ycxqN",
  "key41": "d48fcwE45h2XiKR2cq4Sg8DW85TZooeua9pJymr6Y3GyyTqNxZzQQC125WeWgkcsTFALHDKHY7HYrwtApx7FU4d",
  "key42": "33ANDtdPa7rjqz9Q9bUfXfP3opy6oa3FBejnhAKFctYCyHrtHJVpcK2Bab5EAfXqCpWeJJH5HEEwKP3CdtkAepRj",
  "key43": "4e2Hd6YzorfVs5qypzZ5hsVTzTiCjc1T5aA978oYqdUDYih4WAF7XnSdQtvsUefC2SVW3ecQjJGLWUoBXFa6vYuL",
  "key44": "2z5Rwx2mEJGzxAPj9TWUk1ng6hWJfxUgZe89F5Cd2RAP88v9nHU2c5JDJsSdmo45ZRt6VE2nc6oQ9MesSsfW6Krv",
  "key45": "5HAvY6E5Np2cqV5sHVemxSkC4WEMA7AH8uLCGDaA26RrdagU1E1wTBmTftxSxyz7Ai2siwE3yWUgzZqSbks25CDB"
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
