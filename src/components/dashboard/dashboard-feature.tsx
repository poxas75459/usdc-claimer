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
    "3L2GKvuboFLke7iVMTEKjrJaMSmrtQUKEkPisrc3nnEevYtdFx9FSF3mujw221Jq7WriPMPkHJVuLFaacRhVx1AM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sWEouCuABPpbFUEUgS8bQDwrL73e5nnkKnWAwY8gdKK8qVQkkq8YwVHUpK8TtAxBsEgu7kV3zUBpYKuafq6N5Ex",
  "key1": "5YTzvesx4rFrbV4gSPhRSsyQRvL4y4Eta8jaHABqQRE54NNVtoKTwKi7hD7WR2UaE2CfcCwqNoz5hA2KfB6zQNAB",
  "key2": "22ZDjVxfxyx8L8spRuxrfkz6JfdDhS5DETrB2Pgdsi25nf442dkoTZHYkkHJzcKfZnAnhVTfh6tM11nuRQQik74v",
  "key3": "9nDtyBQFjDmqP5KTKRe9UppLq5yJCvnhhGEFNPxHeD1qDqfK8JdabYdL877WHhrnKt8spxLruj8vUHWSYpeK6ve",
  "key4": "2kyGUGSXfxdqwH8eVExGHvCDSuRHygonjaTQFEbNnsq7UzsZboJV7torTdY8xTtujcNqYFCyVrUCHEWPtDot4hqw",
  "key5": "HsEpwFydYUrocvyxJ57LoKcawR6Qaa4T5xXrcdDdywUneui6ifyTdLdtbiiyoohx8hht9dT76UFbVrwJudB7FXt",
  "key6": "47yFXz88dRXcJkkf8uwpHFkQoa94etwG22ydpfwztNU6G1hYYvovHmhYVe95R47KFvqyFyEJw5PENxtHs7u4RTx2",
  "key7": "5xwLHLBa5UwCixvQVkm93zR7jvM6qvhiFErcMiat7mCJWgkGUyRSYMG51EnMbhQhiKb6gp3VopCMuC9vsPGc5umb",
  "key8": "4ppBH6Azc4AC54h32RXNwwxUwZQkfeWBoELUcLhJPkyb4wEczyL7EsFTaG1376HqFTCzwvFnnozpXB4MY2JX9Mpy",
  "key9": "5UuPa2VpMadNW5TQppLm2s4JN1Ri3GE8w5mjVqQPkH7FPyGU5PGv1a3paFpMHWh8SYbsHuzaZs5rApB8q6ZLfSJo",
  "key10": "5HwzMffFyhuheKqJ2Px8BSSGjaYSZCCDjzn6T13kSrfuHPGcBb5sA5gjmH9CkmBCW1BGWACVTmgEa5tXVQn15nVN",
  "key11": "3jTPEUFrHGkYVZSs4kvx2fcpsDw9rvCxhf2ekSCiKmjbgwNNDc6eVu1AxDUhKMagNptHAHfQbqKYN8aLuwyFag7k",
  "key12": "3t9DyY8qBJvD7cAXvCjXSzwhz4mFK1Ap3yh3eCSnK6CYyirwxoXwJH7YBjzHSa4mhMY5xs6tAuYn5ahhzjJgBmVo",
  "key13": "28aWGgVE8oxuqSjhMYUPJq3bGfT7ttwai2goqJzeMKnPyBZ53WhQ6ZcDp5fMQ5iUdco1hViTmsuSMR9WvgD8Uher",
  "key14": "2dqpXWvM9q3peVrZEQo9i1EyfZbWT4XQoLtAt3BeaiDb8zgfoACRodzWsrTCCnoFu1EV2FWDHfga2ynwGNsqBUg5",
  "key15": "24bV2jPKNduNEV8h7vsbvcxFYWXDpYj3N3kGkqCFH6mHiq8M3MhSKwWjqTi8C4GhkwF79yswoZ2Ks36pDMLE4XNX",
  "key16": "4rpYr6xs2ZUfHSsGMtW1dKkd1bqZWiR9K9EtQQaFpvSyRtkRDUNfsWEnC1tomWesjAaNwoS75wZ6TCt4f1iqGjVX",
  "key17": "5jZpPDpSmtA2DufeVKFHHKhkvd77TSoKe1Lj1W3i1CD5JYgu14vWDYNcCuhHQmZZbSzVNsyqNHSUn7cTBxXei57f",
  "key18": "z849KwiQ6XJx2rFa5ccFQLMuXS6c84s3uzwNfYRfRAVRBJPadDKLCtNjxgAaYT49Np2FyiMRWi6mNWczUrRWyyb",
  "key19": "29N7jDJLWap5YxuXFaWnEgtG4KVYC7zhMaDXkih1Y7ndzHnfnuobQc7bCSPxsSuEMeZ3cmAcpc4D4HKyAjWvQZ4t",
  "key20": "3fqtnypCWY7QTRqcWZr84Z1dL2AQj1af3erM2XUeM2JvqSoXjms4jaT65tpvTZ35NiPb31puoNmMi8yzed5ckV3k",
  "key21": "1uDj4nunZcALcxxDNRokB2E9MFBVivs7pC5W7rPnYP9E9qkfzNwxoSPASMFYMTMj6h1PHaPza6mvDx3eC9bgSU8",
  "key22": "EabLHdauddE5U2pnfCoKkweCLiZ75BjhCc7e1iWMnMWoG5QAiuotom5jPMXMp4xnW1xkqimD9yvNaNWtcwcCDzZ",
  "key23": "2hhLPn2u8aVL6KmMiUgyjvHSoJAV6rmVcgrrtUEVyZViYiSeANdT957mKt2K1ubodUgVKFnTtBBuvKNX2ahMKS5o",
  "key24": "5p5HHpCw4WMdkEeZ4Hz47n6DJ8xHF7hhZqzavPHfR1FimpRqdByQP4zRVrPds7y6F677nGZm4mpWwg6ya5MXA4Xt",
  "key25": "5N7rnd1kk5YYv1byHLJ891vTkNQk11ppqikcJEJii5Jcya54GZjYCEZUniTm7PNFUKWcbdHDV58h7Dk1gkqLdxw8",
  "key26": "481Ld8vp1DsBZ3M3ovmrGjABC5Z51mj7rt3F9CRh2YigXRN5ipsaW6BofEK6g1zCDEm4ptAmdWsnJhzcz8TVTQ7L",
  "key27": "5WuNRW65cXwLxLaYKV51CGaX6B9J2QcgZ1FDoAYbudZWqUe2Zemt1H9b1phqoinrAsoSdyAYqGRSGbC7PvBX5hW2",
  "key28": "3eb7T9RTReYsQQUVcSzTLS8MShWZhCudnfTnrDe4zpVx6YEBsqRDQSiMhsufg5kUhb7S4iFvUhduFccfqsD2FEtP",
  "key29": "2S1yjTWX3ULYsc4yJmE5zyQAYSeA5Fm4z46qTQakoBJkeXUzohiwxcmy4sjN7eNpvWiEJcNjdkZKWHoAAjJ5kULR",
  "key30": "5GLULNmsig6x3ogV2ZYkJ5dPfnatqS2zq67pUPoJR9mq1Zz2CUQ2gdVJF6mzoGEqfENiSPUbFsM1HYDYsvrrGCWP",
  "key31": "2N3Dna96eFrkzwZvPJoQkoaYws8r4mVZCpPEz22b8t9LJdqAzQKdcBcEyUFxJsvmZzD3ZMsADBQ5AgrbYVHEbMJa",
  "key32": "hDpVbDEUgQFynA3PVgkZPCtHhANGoQ2iBp4SVbgRzzSgZ6d62qp17D8BGubcCFTXCgKWnWhSfsdrnofJTzwnTJY",
  "key33": "URE12w9XwRKhPXrvm1oDBQX3Kb5HjxpFZT436LSzgZ79xeekWE2HLJBfgcpwv6iJSV4NjSt2siTNsB6stf1eEf8",
  "key34": "67EdhHbQPqMmky71FgwSPxi7mkQ5FKk9ectHmfhPet54AqLcBRDHCwRCWvh55PFHPuN6cquTZ88qYL9BokZJcQig",
  "key35": "2ovPoFCdcBbi5MNP1i1wDzxC25MnvhmhDtJdiFfezBT5mcgWbzz2PBWFcgcXD1AuQagmHSaJVH8ejJK5YWj7oD7p",
  "key36": "3wRCsGNxv9UeR7mqHdtR7kGKRoZyAg3r55q2NTP8PWcfwX8EGBQRKZPnYh6JFyuo33KrEWk15nKVGteSEA5MHTNQ"
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
