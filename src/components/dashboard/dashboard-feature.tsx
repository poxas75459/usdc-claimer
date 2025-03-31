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
    "414GQt1PjCY9P1jrCjWZbAkcdJttgxHcfad7W5ohbkaDD1jeZQUksx8fghLJX4Pxfq7t8DwVDo3Lm9uS7AD6rwof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yxPnjraUXEhxBoc3Ljc22qjEzHi7RHiJ4hzPX62uZ6RJRsD9AwW5ZrBWQJGu98SpCtd7x7kSQ6ffDxFV9uRafrf",
  "key1": "3KS3UW9LRyqP4VRQz5JpsG72PcuYgLp6LvBTC7fqeawmWHiDS5EFPDsczbY2XdaiGmF1bUdMtq4XPj44ipQf57RJ",
  "key2": "38ZXknTkvFeU6jKHiyKpf2Z92SjQErnXhiKCSQr6VBFpCZHN9STGBwYtExd8HFVeoBagyZkbEifqM3eUbPu7mwpP",
  "key3": "5rsP3gQHi3H9WP2CXmvDBvdZScKxJJPoyy9ckLq9vUy2qQXZ7pwn7FuMogSL6qvBA9K1eu24Vt4RHLro2T39nW8B",
  "key4": "2ZiwBMqWbRzhto5u2wYbMuyBcCbntqFvzVDQfeZGyrvPLdavBUvPm6do4aM59smBzUtCzZqKxDYvt1aR5V4cthYR",
  "key5": "4tsxjwvEcQAQmHA9CXjW25j6xRVesK4Sh99DLNmHmyauUXG86JsemNhk2SiVtKLHVSrpdeAfrpws99CqnuZSVeiP",
  "key6": "5BmxUfNkv7NFyypnRuLJhrm1pL6PxjivrjbR1rm2a2upssLqppUJpuC26qV4BiUeNfV1mJqQVx9j7SabsjTgPREB",
  "key7": "43PfpFQkPoVoQniGfkV8K1GcJDA5qgj1vNiwYpwqnrET4r4qUg99Da5rbMTvL731o7pGZBfDXAkZL9Wz6GbZzhpX",
  "key8": "4TYZ5svdbkbA74kcfwqZSjMJGNRf2u9ngbcQqtBzjGPaTGBzd95Tk8FHZ5uUfYHVdKbdPyNcM4SQphjitjS4xfoL",
  "key9": "61BczidugRmvG488BQtzX9h3VB2KcJugqjUGGWvRkqQevjzjdKm5393rQBz2F2KH2km8Pq7J7GoUdXcXGAQ7K5Tz",
  "key10": "19ubKMTvajCcqaSYVBRmPbxzju3d2NixpXmmZ6jrF3RurasqqAaY33uDVPjkzfAVxg7TgeCnm7BFPcKE9W5B7eF",
  "key11": "4br5AAYEFLJn3EQC9ydmUuH2fTJjAWZe839XYsYRJgH78dpFszToDdyxeRRQ6rn8Xfhm8yAKfBQHAqpZJgSYskZJ",
  "key12": "5h9bpnXfWMn9TJqgF13h6fnJcgo2hGKbvaNmTxHpTzeLT9r24cghuGaz2eRPVcWuzDPqc9T9eDaq5ATufYrg2dWq",
  "key13": "2abim85y5vtzL5CJ6LvkiZAhTba244UPybBk9hiMnerazfPmX4brWxCFFfksGj7BgJJDH3DFe4KtTrXfijjVKw3k",
  "key14": "5jNWJtSc9eL979ZghKWVoSZKsW7B15MqWRyL3g88EsVUR2TT6y5zguiPhRpwYzdR1RtNHwGmRUh66arsZEM5UWv2",
  "key15": "bDe1uKUFSHf4UCAcab6f6ivEvMstEuNVZX9sMWbtPw6Zb9qqDVK5H9K83DCjF1WKAgkv8FfLWvHgYgbpMNH8Maf",
  "key16": "4HYKyjft72eMZ8Pb28jr4j1GvPSnRcCocsR6AXWfkmfirrvEphJD2Hriz78c1tgjp7nTWXLyzqh15TDhKPCPuGHv",
  "key17": "2MPGwSWpXeuqi4S1ARLb5Qki3J2kMwbjWJT1T9Cq3Q6iWEiAp14ULuSRfpv1P6yUV7Jcocupf98ZgBiUNcFqWxpd",
  "key18": "2Fp1xYdwXrY5JkgNNo4nhMZBdFWzPQEK2eWVCgmwUH5tb4dX9WeNG5FJA2UCAA3HssVDU49ignJcgyNf5hqX855R",
  "key19": "24VjkveG57ReBhTGwvDRZ6NGht5Xm1RYVYio7Bo8VCwWj7VBQPa7owqonuGZYeep82VqnFdJLZiiJ4JznvQVvmM8",
  "key20": "2VSmo2tACk1WgVS1oKsVmqrZ7v2jka9A8VKgX1nXVKCEiAmV8jf3agESL2HziY5umpYLa5FcGBbZjLKsh1Z4kPkF",
  "key21": "23jCd7mfvdcr6WfdCFgVSGBg5pA3Xa3yRw9KQ7dzNATdFJgEBZWT1wZ9j6v4YCUioUi2fB8RhVvJ7tzWcg3jX6Lx",
  "key22": "W54nA2r7VqWBM9h4LxEDgzyyuxjxdztRgCuD3xBViU59J6byYaMvQiievRSxQnKVMq5NoxkCY2euLVjLd3mQ4i8",
  "key23": "yVR3rSAdeLkcj4EmaekHTg5wGeQLx8E3PtkeUky5STixQNgJFCdugqUPe8W1QVZtViUQBq2WwVRkRtHxyJx5PGn",
  "key24": "3YT3audUUmxNrdCZoQnEHBJPF7mHR2Udcg7fvnFm8DJk9KDbZQxjaRALdLAd96DYb4nWLug87UYwpyXAC6XmnUG",
  "key25": "2fUZREGoFd6NjVXty7tRazziqSoQAHxBnnPbvVMCFZxbyTKcz1jQoWyA2uZu3TrTMPUHPXd5By7dcsA1BDoEAe9M",
  "key26": "4EPq8M845kW4aJSPiqnBUNupKHeP3JhRfYJFqHJXzC4xgBaYZizHdbP6akxrbTViKam1Vj6X22XrrB3s7uVSGLn2",
  "key27": "4ZFyUPGaSPtgx8KF4nAQeCZR2hHC9qEtXKiiSxKFp7kbqsXZazE6cCr856dpaaRW8P8hfyYytGFV4BJzCNwthEQB",
  "key28": "22ruY1GHsNsrop3ovgA1tUHA1Jr3Nfbqsh8ytTjtwBKnDfatb89RLhDiz4513eTyp4ysLvAKsAmn7wr7fXSQ6bGG",
  "key29": "36CmenxvRpCU4rL8446vNjWg8TnPbjg6FXhEUfdw4TauQNmZcjq4kGwUbstVrgd5KMvRPpGv91dCNSNDhgGAdK5f",
  "key30": "EoiKbyeq6yxVkdeFn7Wpw3Ps8vm1TnrWrUp9wdAMGFJLHrBKm25rLzTi15CyFPUaosh36X6gkmm3kxt36Tw4ywu",
  "key31": "FuzxMPYVasWnHRXRAsqRk99cu4L5xzbPPFfEgiFEHg3xnFmY8wxZMCk1uDFYaFd577UCsE68kNRY4wU9Ad43A8p",
  "key32": "39Ht6NAa5DA1w6A9dqjyM3FwNneaH1SBFFGqfH6t5gJSM8t3p2nbL7jnLWRYGEY21KiCANyoiyELxPusC274kZPU",
  "key33": "5cE3nuAikyxUyDDZQLx8oWenLxD7biSE33ZwNKBMg9AE7QFm65BZnpm7a15ci7ETHaHBxaFkoM21VNsJhXMPZ4M3",
  "key34": "xavv9ZPws9LewyZjmfS6g31evKnzrmDMTk8Cv58S3kb9zW41j9zj9J3j3jrP7K64uQ13zXLTKBwXS35GE4jXugS",
  "key35": "ixLNhYJaCb5sE3ASuEqxw6RwwywSoVmPUFfyuuhagMDUhp68qw8w48McJ93xs64z7BcErc1oAHmCZDTbQP4tU6S",
  "key36": "3SfPHnvC4SRkPYVg49N7JWjTrm4u42gd3E9BAGMwZK6Box9F8rYiTsvj6n6Uyb9D7otyemNa2MGM1Ro4NPuppY9",
  "key37": "3vvQKsrMcqd9j6Ls5HfsdKRUevqouhcggE9uFhmgCLnPtBQyVSiZ163PwRt5BHHhwvGuwQ4BpHkPhJviRXR3KyaW",
  "key38": "XGgA5bheLizr9cpvsyx8nSzKZcAT1T9QqvKhBTjPu3HjsoFsgsYHTNVqnitYQ7g1bUamZywRSzNRcECbGCLLcrj",
  "key39": "Mn16uRJKR1HUzWTLGbmXgQrAtGsmQsw5PXE69oD1YvdYYWxrYtLfGcDbkkm2oYNP34D94QSxYgeWTf83D2yT7mU",
  "key40": "4n1aiufG9RCQ6Ec5c7MSYpR985cnnTETiKqztZ6WY5K1zeurrspghTG3Ro4xWukundAT4Zng4Lu9ht56BE93QpWb",
  "key41": "SFMHGimvL4Prw1am8BQJqWEgLjcVKD76XvjEZJ5Rhko7sKDTNh6A7dwbieC7W85Y9APDLoW77ZrzDSMrJFtmfNR"
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
