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
    "5KK7AjuRt9o1rvzVmXEpLidfJiaaviPxZqrQHDW62Bh5u1Kt1v3dBMVwNPcLaqQAFYd9CTzPAyuNst1DDcU4RBGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JTVmPKXaLaNCQNrGgcWUsyJhUdk3bNksQ8unCvV7ByHBcWip2PVXmFYXSAdnmiGY8bCq41Sk2G6cTEufhyUKf8j",
  "key1": "3LMCYkcpnzQPULDTda2BbByYMgbeuSytWLSQMXtQtGvFgcwqD6H4bHszFrjvhFh7oVjmKGBDiKt2UuUtYNQEcGh4",
  "key2": "21qZuh4fjMEcYr9HT8oqwvrJGg16WXkp2UejPjpq2X6BBijiHQ5VziL9Rt26E1kNfVK7XF3Sem1cuFmVeWs84Vcr",
  "key3": "wssJXoHTUAiRLwDSvVkEaAz98Bq8rbPDG1boHw3a4vonN7RsXDQPr5FWqptCdZLsPpDHvQ2cX8nYGidwBSC37hD",
  "key4": "5WbbCVNnY34o5WXzSfPsAhxZmYZyHAXDE8JvcSdBeU7uXQyMQQgqzZWKRprR9Tgw8b4y9JjVqiGn5k7qzUvBtiu4",
  "key5": "pVhyHunNMajosuYidnRN4NRcxhMtFinzpY9b9sRr9H7ZjouDXGEedpJ4xz6FX7x5TdqnaBuRjfbmjPwsKrGq93B",
  "key6": "4exiKeS5Z7Atz1BUhLyLByXgcjVNAgN3KuFYd37Du3N1VyaonAac7nka8QKdwS7FHP2RNgJ9gUPmVQjfGexdLffp",
  "key7": "74FGfC6aidJyiYcrELeQ2T3Z9z8sSH6jP4r6AvdVAEeWk1dAAvvdMwT5HB5oYnEFQDTxKNMFH5fapYtxjL1VMFu",
  "key8": "3jQoHwvScDF3D8YVVYu9qfJCUNynVk9aPMZAVQj1ToMPxu52YqnjViS49XpVynuRqYqe7ETjJG13Xunth3vtsVMH",
  "key9": "5vETQ8HgfNqw35SmtPQa4CZhZZnkHdHbgadMDUeAHFr7jpRFwXELp5cc7EpdMLoQSKcRGt9G44rS5NjMSMM9jKcw",
  "key10": "3Rk9TSUesXFnXgeGzvHXDrcoWQgu9EQ3eA9ux28ZKryLoY1scnx7c5Dtd9feoYYx44pUyrqdCTNL8ebUKHcMaFY1",
  "key11": "2oH6KziL57onv8v3hnRkrxrawqrKWsP5qmLc5gct3UKxDcGdSyU6tU1xYTv9CPGmWbArpA2dCQ6pupegprvrjkGP",
  "key12": "wYYFPnHVoNf7kfJDFdifgWk1HMkgftnuNwPLsSzGJ1ijMng3unYkQsiTdXvKGH1X2Vy3VtGvGYfCGhuBdiNfNa1",
  "key13": "2SACbXChzCvrRpNV1hd8ZK88E4ngJ4FPb9PGZRJhFE4SRnE6sQRfGhm3EzzzubS8Yw4anPcTfa3yQFjpCYakikZa",
  "key14": "XdcXgYA6NWBviBXedMpxdzsd24EYwqr8C3k2R6p66BYqq4otWvoaZjC1kfyESkpaouv1kCagYazyA4MiKfWEaZC",
  "key15": "4vwtBdTGK7umKCkaPeDQLhjYXSJ6nXdPD2kMKQZ3oALumH4scD9haYvF4QKGwsXt7xhe8FkVE88rngVHiQzzJNWP",
  "key16": "4Pz2tnyeN9UBa1oXgQe6m7dcR2MrCuTvR3gCMze8LAK4h6r4MkRMUH7qWoWDAXQtqKwp9pUF5nepCmYUyTjtSDQ1",
  "key17": "mYJasSHaiSB82KCLiJ9YRK12XrMBysqkVkzLGLCFLP3GWebJwLJP5Sku5MgBykFUabjin6dAEaTX1L1huwxZUQU",
  "key18": "66aCArCRSAW1JLHuHzczi2xS4hv2yVS7WPStHsGPTiq3cZH2Fnh54NfG1nrqVRdJ3YzGnnh1KAKqcTFNXfbMbvhB",
  "key19": "2tDg7okq2MUDpsf7VRVz5VuWu6G1RJYjFU19KffWvido9LP56amnVPhMmtQd8aYVy6fxxQwcDzwGWgwF88g15Yzv",
  "key20": "4DGGcK37raT8yzmv7j9GEp1SZW2GinFDTYi5KYYWuFxcdqMUk3Vhg4JYV9a8Ei9TT7XXrss8rtFdPBEnPi8DobLC",
  "key21": "2p3i6REg39sf7yvHtHmxRTm9hLxtM1vFZH6udPo95vqjpmCshCZeaAAVxDdf2ynbGV1He34Ui1x3EfiHrLCBiu4q",
  "key22": "38riVG2kkVn9C15BamwrTAHFSqwBkXzboEZxmwGpKEVoaUJTcbowXg7QBYNPTvqskMGnwh4At3uoiR1dZ78tDhSG",
  "key23": "34RUZqxevtdwveh8C71mZ1JeEqvG5sHeQVEZm4knNzHjYuWbQ7aXnusBtYmrP1KEHsmxNB1nnJAoq844HnTt5Eho",
  "key24": "4jUQbmucWVzfWqy5VFp6r3dWQuBMx2GSBx5KEcLgDpPHPVvjzCno8Z9UxwKkW4bzdBuYvT6uoVxG6pU8N38R43JG",
  "key25": "127GZVCXwdwACginv2jzmbipnxTzPbMKcQNCiSfdNCMtCGfa49xcVotpEN148cVqMVdqCGZJp3ajHnkjgS5soXxG",
  "key26": "oswhxkPDPcubcmRCWWpEWh8tsfUq1CnPG4MhGuTehzTfdcLWQ6CVt2gvKNpdzai7xig3LZZ8BjPmg6GV87153kX",
  "key27": "5xXT8zLxb66Mkc8FtACiPFQ4jEznLWAVfvhmFKePjsJPG9hu9kxTvrRx3nQBXi8x1vux12zj3Vjz5Szx41Ti1kfV",
  "key28": "2GoiB26WN5nFQ1CoZzjuM6uu9UcozYHdaVd879Hf9wViixJpVpDmQW4M94g5Gj9nq2LWwmdB9pJpjfNKADUcrDhS",
  "key29": "vSdSGjRnrKNqTnEb3yHdYcMAcCa7vRNrBnTbSRuqFdZVUAuxaaP3WyFq5NN5ueU8JqXamfp1FeytvfoTqKnv3oJ",
  "key30": "4HxB9CwXnNBwhH9EbNs9monSY7kbjmFEuB8nbBgxguejjGVfsibxM2jk2xwEx9rLj4bincZjFvux5GJYHARaCzFj",
  "key31": "SCGJ14i7pSWkEuQWCSVbCmehCk4SgXM1cuLYHFUyUXwp3sP8KCyTAMBJyy6jsRxN34on5EMwygsST2YYYzDn6vL",
  "key32": "3e356HnJdnmZMhrnReeiZWyvvQrofxMapLSuUG4qB9F3hui9Jbyr6xjaNCL4aS41KHfZoFFHWU1A6Z6Gt5BAXdzP",
  "key33": "4jF6aWqoA5gJLyy6kHQdJtqLSkug3L8EqCrUxeBG7NuNZ3DVK6QTtU5y1UUyoNVwwwUfaXAWAR2MYeu3Gtnr6U4H",
  "key34": "Lat3aM5cBob44M7tEKUBXLdmLuygXW3DH7H5BsbQUza35hapt9cXWVVZPAQdpeg5bUWnZ72ua4tt32jbP3Q5CuG",
  "key35": "531x7h93htCGdwzJdUnPntDKaFK9gt4JVt6xEcGjVMpxXEpSfyY5k39Kn3qUnpi65khSzTmrTkMBrm6eCC43AM3C",
  "key36": "32hA9cZcrjeSZ9cEet5qKCpYV6WgVgUpVwrRoFbjJHKZRAfNTurJu4hBjBWEoBjgndNxJS1FXuCHr5wndniG95tf",
  "key37": "2eErrB3r3QcuLej2e3uRWCwpwtE8w2WZ7wK8BuHUzSnNNJjykEZCYJs97FA9ovPzGAX46V8mgveYExJWidZ629Qv"
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
