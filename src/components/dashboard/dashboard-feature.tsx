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
    "niN6yHj22wEYm4Z54fQkhjEoRHYEhntvKFFq62uyLxFeFdz5foPjoPFPypuXYdW25A4Lbo9T53GkurWzGhA2yQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RfBub57QBSmv182pQN94i6hPkFcD6utokYtCTxnvWjebJizZqU9Z7eX3GvAiQrEB59wKEfqugphjiQDA4XZnyhw",
  "key1": "61j6zKs1cp2CL7bwXyQd96kTMkKHcPmsjZsyfUAkDNmDgUBSQWrTC3cW77Lz5U8oYqKzpCLSRsbhDjJGfRuhv4Mh",
  "key2": "RxSLGh7EFkiRCkdfuQ74iu851kijVNkjB4kyj53RnesHtmxmSHEwLVQ4rgGV2TiquSXJVXBqkHrctgQRqKYDMuv",
  "key3": "4u7yyExnwFgpr9VrTqsyNu5CaqTUpPUg8poJGMnHHHyVQx7koX6gF3zf3sBwYNaNzyVhJtC96nQxqhEVseaBaJeZ",
  "key4": "2R6j4VDpqxbad9fPHyrDkeY63ASfYCH3ercVHBtigrhhpnUzUBYSjDsJp5iKDpNSfUSSfF9My2B3RgJzEbmrAvfe",
  "key5": "2Yiz97kg3iek5XEvLPQodN9hUikCDnUKCCz4UgPQrToz3ZX7vH7QWjAF2GYm5dUh1HWNZzUtpjJccw3Zmx5oKBBq",
  "key6": "pwqyU1UTjW9TNNBmuGPbVivjyfTkcXLm6j7jPyT8LzfztMJbKAdVD3nMQpMqcZTYfiwQL1uZD8S6irryau8tcyy",
  "key7": "5tf3voEqbAJ4qV6Hg6iV5MHHVaTA9vDEECaNQWDWt81AGVjJQpyFWQXn5YNei2mSLzGyiUwr7vEwYgJ8TPVtzGWf",
  "key8": "24Wbfkj8XaNayDkg5WNduiJcspjP9tuGPrba3fdKK9fyJSNsVCZN5oazN6au4Czk3oveJtkr6GEt3yh51ZTMUF5S",
  "key9": "3ix7mS2sw2h13EHCC41zrMYsnZ4zD9pP7fm43uELgLQyzp2Th9z52WUUR7xtvsd5R3dGbR5RjfNEUfgLJxd8AN6g",
  "key10": "7dwToo3Pn44cp5ZiNuxoqJco3TaJyiGXa3F52iiTvZoZGeMeBY6gEFnoxfHv9mM49jDLGqzuzwwjzGmRA5GGFt6",
  "key11": "4ZktjzsJjYZkbremtXrNmBxp9shmuGWQziafG1h19v5CXYk3v4V3vKUTUiLAreYqgz3KvLgk5eD2RgzkeKW6GTaw",
  "key12": "3Vn3WZwHLRKmeaEQ3GYumpBt9hTXJWFxrqhmvefcaej2d6YwoFZNG6KcKanVeWxxm88SCkj4C7LFYUWhhMseTeRY",
  "key13": "3pMCKpzpjkpRNomfjb7FYHMYxNdPJQp2U5WyjDA3dujGsAc7YpwtEDH1swq5RtoPbkgjctvvpRQmVx6nGZHg7p1D",
  "key14": "2oWSWBNMdy1ut9SP856qf1gJyi54Y6JfVMQYfKkqp9xDHfTsjPE6EuoCM5txKitspKaZGgd1Z2WKEdeVbBe9xQi2",
  "key15": "2FPR58upywfWytukQrcK3YxsLd41mcVpJnWs7g9wzrKciTorL19k4JbeaexZvwEbhjMSUFF1ecJsPBjTCSMqjZZd",
  "key16": "2sNqweo82jrAn5eKtVKBt2iT2hNLV3sokmPDrDSH71LLeocP93YBe9s1RX3ohTkWQ7H6QYiy3JyLmHmGQnwPudX8",
  "key17": "5oKWtZfuFoFzDmtpWMrdmqCByzg7fYg66w2XVRf58csPLNSgVMLLvLNn96XxFHjyBHcj1fy58QfscCg64X7TFo6Q",
  "key18": "PgNWZqgDxEEcUbdT179hi2iL517kZ54K3VZXrqmzrqq5D86nwNhNRyyaAnun12RxGRvMDgGhmDS2E4rfgCaN31R",
  "key19": "2bk6T9AWzofD7iGdACtW4GHUdQYpCRD7J8No848PHsepfWvmSMNfnjQnn2Hd5kuPJDJpg1T99JdxePCUCszqovRG",
  "key20": "3W7mgb9Daaca4Jy3nmFnKaMeW274SWe5HSiuh8Vxh1ye2jHgfb7jXPTYCEiTbTaEpgFBxZAt2r7HPNuuisPKk3dQ",
  "key21": "24VDMMve9iXZERcPH3jwAZRYg6SNwoE7XDwozKUaU1CfWviUCzumX7hNc23yeaULEvpXBPhqi4QLvBNhDpNf6aY1",
  "key22": "3Mrc98QNwccGSd8egHH5AfCC7qdrMwJ9ZkgJw9uffBz8mLCSL4pw8XiF1WjpMLQfz5qreriPZRKjYo5bfEmohXDd",
  "key23": "HLr9PQrt2Es41kywvKRvD4ZikYzTcQSBwQRUXRTFdRi2Q5ZoqgwL7LGrnH3Gn6zqkfg8hc1Ngy4ZXS8nn7Lz3RR",
  "key24": "3dbJrUfEktfxdy7NVdnx4UqYHWqgDTTFa75TwZ4YeiCE2Tp8rBusbaTAKXNuUHcrtaj5TBuFPNFdFWEcEuaTEaLA",
  "key25": "3t2Bu1151kX418aCVQ1erAq4ESwpP4oCMrrHxYkKaQ9YxWdootPPq6PCK97ErWtiYuSvBhYLSRPzqApngUANrwDj",
  "key26": "2wvRRhVeXymrnHdkkWZfwoLR5k1E24eyC2j8WuFdKVbAoY5mYzBsv871iFZV3cgASq5sskCCy4Ni9aapEBiBwpfZ",
  "key27": "2FfnoZHTzs52jRHSBMFjGBA8PYgi4hZrXmejeWNLPkHvHQoQBfykrRzJkWA4exRPUr4GR3yVm4EKtVK3jwzHfvRz",
  "key28": "42sCCVYCN5x6Y7naNK5XegvfsfTtPUAwM7zABLqevQz49FuJ91u1ZMaDhEb9L64Nw1Uiu2F7mVFoYc11qG5LR2ER",
  "key29": "3gCbt8Ay9ge3MzeGs4bjyn3mBxtEDMofNKPwTsk2gQ8oNMQRHWM1V3kyGovbPK3FSv35ksZcF16EEV7BgkPZr2ZP",
  "key30": "5y3RgZ7DmwZdfHZtvDREkCam9wf2TohKxjcuE3Upt1QMpS1VWzis3GsFJi4ut9fb1K8ukcZTFc89kUh8AADWkGCK",
  "key31": "4EHWnEXL7cifjLgQLh6UHh8Q1hhjXd3QS7BnPxgrTu9M8ZSMtmRYGPMKqY8UC7aYiugBCxFx4PRmKrLPmpJSNK8o",
  "key32": "yykfZz7WTefspubTvnSvtZfwC5sU4cACqydx4Azxp4NsKwcFaCgLqjGpTkeDC3dch34M8BjjtQeu5C3BAp9YarD",
  "key33": "3huLXxD7TghU1wqwnry9rmyHmpruhjgMbzR4SSYxGwCLV5PkqVsGQUnbx5QcYgrdECRhrAHvwhEAs4SPtgRAL9Qr",
  "key34": "5Wu5frVuoVvqJwFJwHdqCEdcSsWjfNf4umsPFLCmff5AvaSNnMjz8dPTeMetwhVVdEG7VRvkDaZH58dGpmpdigU9",
  "key35": "5BEux3CmuvAgVvUcWbc9iwiuhTEA7Vavm5tRqRB4j1YVYJ47BsRj3sTupUdDHiFkGRi94U3VAQZS4rREeXgKWbgi",
  "key36": "5rWxyaD5JUiMZUH8PKDtDc4EwZDgyWcJLHAixzQs2U1828r5s9Procmq4rkMbQbz4siQJe4pMp1ezz8nicm5pLWJ",
  "key37": "3dKZQkSHXAx2iybbCE3Df9jHbngqW9XNuV1HC7nkMiMA59NqGhrNwxAMwFc5Fi2TZswq75imYVn5NAL5ye4tm8Wy",
  "key38": "2KTVaqEJmBB4Ww9tFy9xfiWKWsVKRxrx2CRfWJUWKRpQDP2WcXB8NUitieStR3HjVYgqw9qrK7MFuY4jaZf15oVC",
  "key39": "2nEcxfWM4UEDgKkSj1Xr88xHy1jwWi6cNF8zwsWYx7AikFTC2rCFeD7gxGPTHhmNDkJRvj3ZAtj2MgrWatKRoMY2"
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
