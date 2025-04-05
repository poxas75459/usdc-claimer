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
    "3iqQUjESXPcMUcXofcboMCfzLb7ReCq3xbeksLquYc7rjbyUgFvBUEiRk52E3U71PnR58uSnBZR4TjoTcos2CGmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26DxfarS7mLad5JXL36yteSBgCD1NSfGraYHy71jfTCnMutdyctpXNLAa9UJkva3o8QVUUGbiKgGk82HX5WkUeTP",
  "key1": "3ifMpzmqTKNa2aSTjk5nytMRzNcGdsfADwTqnX4MkkNPEzSe1VzmN8vLtK3eHF8447okAWpqyRW8Z7gtt4tP6u96",
  "key2": "ggVufMYotruRiZyFVQwbc5XUcKvSwXm45PoiT3znQ8MaA44iXdaBBHnGgxhDKirAAg7AJpLZP7FQgn4VLCsbYJT",
  "key3": "2tJvjTBE917ZG8Z3s7yy5aejPCnzScMbvHh7oEwH9CdoJkKdGDuuo8kaxc79SuA1aMnFD7ZGBNHpbVS1Cdsdhv48",
  "key4": "4xkqipKmrVm8qPEbK1mbUV8rNdZwg1WT6YcVGVRCDqaCGKWS8wZmuusUCedsvyCAc42zpazYJVcGujyuwS2EqtHJ",
  "key5": "r7qGYr5n8V4KoywsimRjHieC5YNz4gSap23rrEjG8ZLizhvxfwjy6amm6xLmZx4kcJNhj5xc3Zgcw9iqcaGGjsC",
  "key6": "f39Y1gJi2RVdYcQXncpJ4FJ62Spruw42hhuveahvmi4XNk2uHAVVMWhNFpf94nSVkPYDQ39uVuZae3bNfhMdKgk",
  "key7": "T1KP9JK7T5PVkLqB18tCh8FGK7PKEDoA3QKaFy3m2mojJCu9jibd5FQTEvpwKbE6CfrXMsyCT8JVW2NcQqcyArj",
  "key8": "NvCduHzf9JXorSRBmjsWiUepaUNnakkyLMnZhuS1Q32MaWXPggCS5sKFmZaw6XvvxnnRv31s5uvHcY8boDGWgvS",
  "key9": "5GLJUYPqpoUebMeLR4mLQw2popzA1mj4sCJrgkzA65Vmu9YwhxYgxvhKTqZBH6F1zt3dia6UQP2phr2BS69BhF6",
  "key10": "2xtYWCjj9X3ihLM6nJ2RQW4pFV2JXyMd3TA27FvDmLUvSz1MWuNyffYinmcwWByGwPY8fFsyWcDcpb5f32FQcEdu",
  "key11": "2HPMjQwjHx6XSm5RkTmdkW5mYuZ9V5dydyA8eFZqS3AGhN8jrttAPpF2rFudQEHZxsAh4azbqBr2fJS5uJ6MNT2w",
  "key12": "2RfaFiz8FhJQT6cMD92zjh9k3EVQdZZ4EZih4qKRN8mdVWXZBFnoAffanbKSRbLN5AHcZ8jeMXg5ko55hiMnqLQT",
  "key13": "3PxV6of2ZfJXG1F4dKtsHLYFWNSCEvinkRmXDmBPzWBetGK47ypVzc5AgGyYpV5N2eXVbVoSuXYJUZBMvusyTPTD",
  "key14": "2eVgtPsdtriMXQgAzjr31pe6J23FZT25pSBwGY8GWmmbEbiHFT6xgyQ5Y2JvkfRrSsqhjWMVXSGWKbfPoUuxZTer",
  "key15": "niQrq5MasbiKw33Bx8gn7YtK5Lg1BgbadnXJHpo8K6DGmhZPwLbotb5UFuM4W8F4F2ydK2g7Y4Yu8Y9FD26tRxY",
  "key16": "4x4iWSmQPawoxqe5pG1cAwUFrRM24fFQZzCaLkcw7PpyYsktSSjok9BD122ZQFjcme6HDWeY8XmtmnnG2AkJ8efL",
  "key17": "37vhELtTb5ZWYWDAvWxXcJSVgw6G8VTyWJqgCrdwxRgBgWBu6SUXdVnheSMga64s8LQyS27YMbvMSY8hS8ZwoDXe",
  "key18": "42LTa8FKd6MX2VJL4NApNvUoX1K3gpGGYAjLayVxqWUjMiGgyVACPWGShPWfT5Q5mjRAiZFSFVgKodsaNZY5Jm5w",
  "key19": "vuRNpBZmQzj4tbE2FtESrMD6Kg4UdRx7s7DoSySj8JsUK5mpvuT7Le3SVhDC3usrgV7K9sSDQ5Zh56yPMi2iDU7",
  "key20": "2Bpkm4ejz4UrhCeipEf22WjXqTBeiCgXgF3yTiLHXFVmMh5VDfT6uwvq7yustcHm9nFs99bGmNaLkm68v5kcMVkV",
  "key21": "2oWuG271ok6AYmAGCAox1Kdt5B72YYzZqyY3NeEuvNEhRuTBPLPypaPR7R66anv6i85sRPznBxppM78ApASZrgiv",
  "key22": "PmShX15hdcoLSTEAehj1DodbK8xcaFeT3RugfCowEPYHVDHzFqRnvbbKGpxz31b4WxxtXfY64u5RFAv5eCb8knT",
  "key23": "4QowaqNxip8ijzLCw5i4yriewZF2cCGTdjjmHBR95agQ22evW5SCZ9ohXMHp49RRkCjUWNbetNtBFLzWfCyqTZN2",
  "key24": "5ogaXgmu5z6QX43kbcLCmh8i8AmzxHMh8nBxaQ3KFd4gs44YVE2K6qz2bk1AkVWNzoFX1DKqXraBKuNLpQqiz2KK",
  "key25": "2ouzdgGevsZkFcHEn6wSKknjieKcJsNQ3WrpJNDmkMN8dUB4dPyfTVZkdJkoCMswMQQttA4SX8H6ZUZSRYB9ZEE9",
  "key26": "4kdjhXiPsnUgSFDf4AxPPan5eF6qhE9PQ8JY9TjjMEzYcpvEQcpEPS5WvLHrpaotHWgnZbuQeLQcPokcQAs3WUEx",
  "key27": "41xu21WLjXodM94qUbsxyU1Yo7r5zCn9a2zXpb2b9R5ejRrQiHjcfNfvzz5RUF33okYnq2BkrARqxMYZBi7ZB613",
  "key28": "5DbfxFL9B6qDtHfLNbb7xdX412jtMXhpEn6dLfn4597UiaxFGokPZYGCq72zatGwSHCbfjxmmmaZd9Lj22mocxdH",
  "key29": "HZEeQ3wDePhytPR1e4VYJfVNybvyskg8UMZxxPvpXsRwBpTwgD8vNz4yx8fh4WV2iaeGonW3ry8s7ixW1Rz1PpV",
  "key30": "3iknKysDeTuCFC3vWL63cRkciUYsZd1M5u2CZqGAEZu9NSDbaBd6NC76FmepxB3SH2P99V6WnpDtaDJqx6Wq89ZH",
  "key31": "TmvutLfWm5LEfHezGMQCXzUnagK7UMkvCjTSUPzMLijvkm4io5tVBzxmEN2RVsbTwnVWgcYSVqK9qyPGJhsbiYR",
  "key32": "5eJB2WRUeGmA3R4Bqk6vePDqiJ9UERNNXTkegpgFJLyJLMXJEfzNugfg3h2Xm5zcinoAtSrNDJxVZGbj3pcYGN4w",
  "key33": "4sc5tXuFmJKupLVcKUpbC99g9fioYaHbmkWL5ZyRv52P8aMufT6nduC2AQ7sqCGtRoSE7t9m14MTtcafJSVpsGgK",
  "key34": "4wu9NVDUcftEtM99dDmxCxevZw9bNgZbnsGWh5qYURK2VRbfFjkG45mZSPxygMuKt1CcDvsjPF6KNHZw1Vcwhkq7",
  "key35": "54uHWP2b2jSxLgqFgMUqYvNc5G9fa7mAsN7SBHkr5TxsGEewQ8SLTDm95RHFu4pPeejWvRuZN9mtQrLvtV6Pkuys",
  "key36": "4aru4HAqQmmbcELffoqRzGL1CKtmmYaLdKoE23ViGsxxkr62kMcs75YhSJgqeCwXg6ykuTvHGKGe9cMBbXNt993k",
  "key37": "2yjZSWGjVSQ7ZCKYYWoezFi21c9H2T1w8KmL8yUoE94ytxGx4QFobA96kdbwqWUBRk4AK9vP9L5LcMjFnZRi6hvM",
  "key38": "37nRBaDu67s8YXhu3TQ6ocwMrCNT34xDQdnADDSVYNijtF1je3cgQVAc7NCLZrkfqo8WkcedoZMbNRg8WPByzRnN"
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
