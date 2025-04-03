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
    "52AcQ3Jxbcu8s7HV8iz5amEy4AswBLuWadiHDxZKyUSzNC6bh3LrewaGraqMVxqGPvpNMxRb5JYnw63hoEjeeaN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ha86C1KpHDobxVhPWGnLxui599G6jmzMBayc6eiu2b2bG7xgBNFGpzaFaJBWmYshPMiM5ZFWJvyjuR8gaKejdCy",
  "key1": "5Ko6Jer2sb7exPXqsApUNkTLVRouMMfLtcDFesBicjvqrXfNaAQdQcr7GFthSTMyLgpzHxEJokRrkJYcduMKMUKp",
  "key2": "45S5ZC1MkpsbNN5Nhq3NR8npTpzwzHSUWVyeexzckv2DXm7Pfgwgcpnez2vABaresiBmW8LQEaBqQuE9RTjFpR2h",
  "key3": "kwc2o8d5i4AQUZsB7Qw3fqq9t2xREe19ziS8oxHJaA8mdc2Uj6riztzhtoxmSxLrQn4e4VFc3hdMsCaHMHUaSqj",
  "key4": "41C6NeUtRBDXTcoMN5RySt3xey8TyWFBU37YYsMhmafMZ3bSYyVkYmGdk6an2A7Y1zHuJPB9pAqUKoFTkNvffqCK",
  "key5": "4Uhpd2UmQYsMKvS3ouXDKWnhkjb8VQyPQXjfJ3vLbdELQLcS8DPUSBeKkaTzHT7h55odKp4BfpcE8rWJswAK8hDt",
  "key6": "5WTGvSVNt3ruwfgtkxq2h7NkVBaTLWX2pwHVFk3sYAuB7uaA87BznMDWezwcdkvJQ2RpuZKDBu8CsrA2YyBxfLw7",
  "key7": "3wyVz3sZvQGA5d2ktbcf9HbrsjaW7sk6z1xbdYMFQyRPfuocsr5wnvZn28KprPZgmuZfZpSa4jNhrKbyfeEsoGvd",
  "key8": "4SnLXAK27Rb3Z5ZHMV5QigVuej8pbE7tzGLZsduiwqD5rWT9nxvaRMQHmLHf741y5Gq23Hpe4KTUCGJnStSLKa7J",
  "key9": "64mdd4aqbZHxd65wLcwqhEFSNdKahvdACqnxJ1MEwpa4WMTuKx3s7v5Hma1Rr6YhGYvr5Vf2fX5iAfaceKwFV38w",
  "key10": "2i7Za8W1kXPXJsyR7UUWQ8FLGQfQpuBCvQeDTxrX1zc94ukFQf2g5bvkfo5Tknw6q39EmK9ktPajPvQTtgoutJxU",
  "key11": "egshwSQUUAEznYmLqu9iC78Jdy8kFnqfffe7FtyJ4jrvzuo8x5WRnSsS8LgyxupWGAvT9Be1DGtMhzgKD9LL3Lj",
  "key12": "5ed8Lvzci2gqZqcrad2XXB1CXn4b4kHRzwBT7RY9AGk3UMmZ6SjfnW3r7vov45yUPkvEiDzhG1AnWsimVXug8ZXc",
  "key13": "2qj5UU4MG9NHyJ3tu1FtEz11gUkDZwe7tLCobnnM7JFbgh618q1zhg6LUEN75rX2QXmAiab5PR7dgjC6EL3VGZ4f",
  "key14": "KdAinss4WY4fkJwpwgFAsjbtMkFQgU2PvSoZ3VPQKsxDrnicC5qD53BnxDJtq8kezp2heRopDAksFzSF6XorNxj",
  "key15": "2NPrdXWmFKpbiT63CZc9yS1zWS6epFcBYyctoCPbSUGn8PBQ1F3ge36LRgW48X3XVx2KUDtpFhpG1JvqqCMKTXhS",
  "key16": "2oXLGmH6viT4mt2zqPSKmeHe3LEcuaumLmWQvjDAy7JVoUDCCxFNzm8Vh5JMg7ZZL6fG42xTRQcpFGcKcntkBfjL",
  "key17": "3X64DUJkZNeGyJYysQ3yRYVPfd8ukzfBi5jhn9dwQiLnSBjuHrzVhiALGzh6YWneqrGAsmFFfNzAe3WJNLyu1bbe",
  "key18": "4nzJ9fXqXez8iQNXeYRVAVe7USLweh6ZLV1j2oj7yH1uEnmFz9BZuETjwm4Gjk9FnAWc63W7dRdwaQC8A8jriTPy",
  "key19": "4xJB6gZUL3Udg86KMM27HWS5sWqMpjuXPvAfgNgsjmtNtXcLC3oJ4urXxGdPnUGjdHFtJaBVkiCrdSRytp3x7WA5",
  "key20": "3oLFnVnGbBbxKCZyBkMsn4KMA8kKzChyWhGdPk9XrKhPYa1adqu7zNrt3VhqtzGyQarjYDg5Jta1rAmzw5SfQNQB",
  "key21": "36sNNwioQxSYvJjukqh1tLSmE1b8rWQuV7t8FQbcHw54N7D6BqfyZLqeGC3mj8QuZDsBk5vpitF8Q2hbr9vB7D6u",
  "key22": "2HmhUvd1XAYdxjVcT9h3TYKCCnHNKxKZoDZNT8jx2J5wJBShCHtoEs5rKqJ6AnWoEFUD7RUtWb6RXvjHXswc4i6s",
  "key23": "59h9SxyMvP6PkP9TZTCAqgHmJSBVEZ7E2xC2dCqKdX5vxbGfjuktB9F1c5sGjbfQcGsgyPwUnZ5wo2ztnygVb8Nq",
  "key24": "cA15Z8DHuh6zK22DNSoE9aVYE51xy7RpF9ahqsbXPFU3aPu5xriVH3LsnvfZWtLaTHo6cBZzs6SDa76fY2NSNQM",
  "key25": "2KWdi3NJk98nbCreZTUqhqDvzv3Tu5RFczPbRUF7uts4om3WcQiezjHnXFf27UnjhYTUrW51t5tcrnJ8U439edX4",
  "key26": "4ZnUZdEjx61nBUb4r9rvTYW5wBxssQBPqyj6eLM9zgkc8rzw5PUfKS27GNu2rvpXXMwdcp3h7PXGSxL6AaWbjgpj",
  "key27": "2ipA4jg3fp48YozBWDhjJn1BVPiERHK6HX6w58ox5J3kR8TDz1So8MWbBkkR4TmVRD2XY63V4muN3iAZe4xCxkTZ",
  "key28": "AcudzQrXbkYqp9PtG6VkQdE9c5p6ZNRvLaXz5kePa8GeDs6ct9dFDuVjQVq6hpTxwxupBGER1Jk35MgUdQTR2QB",
  "key29": "4fELt7AiS39z43FDVdTXWNy9LFHVDWgLTCM25eJiQn6azfHcmjJWHBAo6cw6SjU8ztKoEHGt4ivsDn8pBTSFfmcC",
  "key30": "3XuWco4M54NHV3k9x9YfnkNNDfEwN1NRYqysDeBPgY8ZGK8rrnq3PrQWCstmQa6L3oj82mGzWVuusvMH1DP8pAPn",
  "key31": "55FdJDB7Zu3DVEkHUaGGRAugNwqZy5KHcp48k2JXXBjfBGfMPwERzRqPjr7Qo99GMPwjnVCZyv3c8yKU6xAdw1b",
  "key32": "3Va1R8tKW98usrCwuhYs6H2QgGimErfBVNtVLvHxYRcu5EcRFeECfMWVqCu7zS9AA6NMmoZUfCpqZ1y1fDMEXgNS",
  "key33": "3xv6r5kZYyrdSfrRby3EoC6z4kW2uuaLbEF4FRjmvHThxwx9cXARRg8Mmn8QQTjYJPgTfk59uH8gXh64rrnahfLi",
  "key34": "AYdS9HQ59CbMoFMbGAWLF9a7FeWX7MgEn73HXFWGjTHn2x7WZjuDN1yoBR2ga6zGYpF85dN5jQVdfB4D1dJxMv8",
  "key35": "4oKcePPGx26UuRRQ3NevFJFkHy6XGsWqJaQV7Ku6o296sX33mDzjBVDf5xHf3G3k8KXE86vWupTiiXB6h75Egy6u",
  "key36": "4weVxP34q5VjP8TMeVQDzFsGrN3FNLB2WLgupFxhu5anvkaYzLxonosKncSesYB3zPx4L11szmnhr9iRtw1zyhWa",
  "key37": "5k8txyDfMyUfHqLGkjdhi5iQXrCNmH7qjL6zf5gGGKz7kGoxv4vXbL93To1PnoAqWbYuramyT8GvrytqxSgXJ5HP",
  "key38": "5DLhHC1zCXuaV6hSxem6iajnon7ATpdT6pSmphRPFu6ch5wz9mxgC7gSQAwqQU8sR7zN99zjtWE2Sy8KD98fhnU5",
  "key39": "2isECAE1CaeSiYzoiMWwW4zsKgoXh6vmtYkQsgyrNjmcntQwkAnLPr1UmBEmST8BH9VrMmdFW5ZaZ4zKfWHh3zSn",
  "key40": "3yKRacWJwy3tg4VzVd7Gvqgpj6XB9a8mSM4F3WN6qUyGRdTkUdTmNYJn9p8zKGxkBkbR66jCHwDusEyMc4uqu3Zs",
  "key41": "5aLJAmdH1Vdt8T2awu2iWfkk5zmsSTnWbScnnTpTLojVxF4hpGeqfgNghWW3jREQuNu73Dp9m7ntgGt7CVFucths",
  "key42": "5phsQwid5AGCfxfti86NA9vBLP8GB83cPufQpMNyxUo2uJwrousXxBdHB4LYpE3NzufSzWwJRHitmPA8nr1ThmAG",
  "key43": "3j4FX2UpgVLgTX12FXeC9iH6JELG5t3cn4LMdeSKd2z61sezD1cD2tCCkrTS1jfgJPQkrVKZ65sbozjkn1e6rrvj",
  "key44": "4sp33Sgz24oEjpafv7XmTXduF6Qkfq4ZcnDAiDsZpvt3msAKo7hB36q9ER93Nau7xXh4LB61jRVvCnnHTYahTms3",
  "key45": "4hWBVsKA3pYzW2v5S7z5r4rKMyFEfMPCzEcLZoEomHFD9ztxNRoWmkA5ZiU1TvdYhePZjGhggmNAd6Qafoq6BNx5",
  "key46": "5bvuWtFRdpQdyCY3iA4Ms25ru37AYUiRsNiG5BtbcDKmJBgK1MJNfoYFmq8AmRXYUTSYEGz5DxQqDUYgTf1EqZsB",
  "key47": "5Z9vK8thB5KxfdmUiYxH2qsBoyqENbiBgfoy7jksWaqiuexVChqqA5hF6Tkg4H6uDQKLhmEVHjp3215sVWDpkpwu",
  "key48": "42LAgXLzLgkyjUaMHZdWomBNuQMLCV9Hu9F1k819p5wtJqXWVn2zzUi9eL1tJjAYk4ChYKxzCJhkDHBJVs9UXbvY",
  "key49": "4R84Mz8VG3q63DiAddfi5f7wjUJSn55jG4a6Bqy8geLCC7UZTQwP1qrYUgSpipXUbuUEfytfrCcoMrKQQr22kWAL"
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
