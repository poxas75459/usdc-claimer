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
    "66CSHiXP9wqb3yxjyAZ68pdwcBA4v2eD4mFikVpj3uqqbEdR3RyiMkPLpE5HM3SNc4pPsST3aVqV1822FU7rCsmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63cUL9jowy2a4tkgvUxtUkcpnCgNA3VLcZp8ygoh2vfxsCtnggiRUAfWFKWPFBjMiU4w6tNYGkXtcvjHXuPn5cdB",
  "key1": "2H9XFTLHXmzZporUWMQ3haAdmUioF71sbagVaBFbRtc8akVV854Cxt3QtfRmhnycYBzEBbea8RzAQR1xihx6FkxY",
  "key2": "469V8bo2kBgYfJkTUMsANbF2tARpTtxRK2Hgw2B4MU3UeqLzifbosTP9qMLVv2UVfDpZ8gAASQSq5zQbe91LaXjf",
  "key3": "4RAfXzvBzJRBSpESNAEhE5pfA8DXL6Y2tzswauBNBU3HZKjoYEZUz4HvxoF61HGw1bryQTKNSVHC8XyiM8q7egBQ",
  "key4": "P1NA7PXHCphiF7f3UVTGoH9XuWc4AGvvaC4SsnvKS2M99jayao5nss8iCAbtJTttQMzqL8qKGrxeH41cmBpaFXq",
  "key5": "ubi7YSeQap4hcDyYNBkmLaCodD2GohjWqh6XQSMoc4Dy9fnbdXTGAbdphhicmTv22gYmqvQZSUQQ4o3JBjMzVXa",
  "key6": "25DijnQX4UAeDbcgpv1Fc3rBcDnr4y14SNujwZBBkZ2x5XkMTaEq28Tkw4hsAgvaPoBqW6S13txQCX9GeETh8Cng",
  "key7": "3UpKJMPNGJTLJTf8KysXNBvwBJPh691QB9B9XxyGr8jpQ4QbufgybDb7md5trrD8PJBoKdTiDZ9dK6DUxYgQrHwM",
  "key8": "4eDQfu7ER6AZiYbi8W6YCuxsQperoCETQGBamZV2at7pAyYUX56oyMYr5xd3kmtwDD2pc8RzLP6NjVysof2gz51M",
  "key9": "3yCj4sdrKNYz5q5mmPB7jSvBGA4VxsqmheZLpKwVdHQo8z3TwP4bcqKJjYZjpTgtMrgp8DGj4pjxTJ4yhzuH7bV4",
  "key10": "4z1g18AbH32NhwFFNpye4TQ86EV14Qbtr48Q8JQMSQ62u3Zv1G83wkbGNgFGqH6V44k7bJDnQ13Bdm6Tnzty9eUP",
  "key11": "4XLKFzWgvZ95BLb4gFoMWdM8Te8AwmQrqEMuBck2rquxYaQTno7KuoVo7EA644HgxELpYLoPD4saH16rsbt3fueu",
  "key12": "3F56AoR6HczGBnoGTeauG8siHFYNYNwJSEA8H4WajwemFh2USXwnZAF96oVNfjVJ612HTZTX7BnPwV32FUPvHczk",
  "key13": "ypMosm6g5rnUBEuPxrfqUaR1rtL5VEDiSe2XpSTkqCswXiu1JU7CPCw8v9TdXouApm3NSPntrcRmcabLMtZ1vN9",
  "key14": "5JKQMFPfePGrKyzKiwmxknf43kSVpWkxekc6KgjbrPNd12J4JCcSCFLtBhTE9qBPURu44WKYVY6zyfZy1t2txhRv",
  "key15": "hqNj15sG62dGPxi9HWwVF51WDmmmckZEhNdYbeDdFtxDzUh6xTFyyfLo8bjBRU5UcVZ9BKbnttUAGbT9Tk3m5Es",
  "key16": "54i8b47N2AUrw3QJQEZU3DTv4NRoCpjGAVrn7YvzJg7nrQcz94pTzy6iGcWdKYJXUf1pVmDsK7bBsxHWDrTP1p61",
  "key17": "483d9qGPxo3e337HrKE17Ff5P8u3HB7oqy7apanzr5aiL6TKKebwDhE9BYzkonqKHcoM5jpp8HMLUqFENB9Wz3YH",
  "key18": "khpiPBCCLVLsvmbWLsEDZunNZ4E4gRXZAJwVi2J8ULsaSyB2wxdPV3AzYW2inEvdfrpNMADdzujCpeTZFrpyPtc",
  "key19": "4BPavTQBM5gVZrzMTtu3cZDmVi1Nt3nZXJycG8qrDuNvFywcKeqUbzecZn7Jcx6V2TAdmzKahWUaXeffPRMSF7c1",
  "key20": "VGb7L7vhMHVRL4ucMS6K2NVAqqQSiMTj4GBxjfUARS7Un8DfagyzX4X56jeZ7v7Gp2Vd63dXbRKwXsacQFGzqcW",
  "key21": "2w9iKS9X6DHqS8TEHWbQQo9Sgd82af5RjHUd8Z2gSui2kpEdRc2nfE4AgSgwxis4faTLbohMBTsvGCA4CDsJkUTm",
  "key22": "m5ceSLukQ9kXtnyDM7diUR3fF3myLYwjMwL79bjRtV8yhPMmk8S3rdPAQkp51E8coKDVrfAdgYKMNFMc6dXj66e",
  "key23": "67bZ543fQKvHXbh38FAUrkDuH5PRtZefRtHBWFvtRdFdUP2F4XaCszqwcZxaqScSWGX17YbbHructdDA5QX3XuV5",
  "key24": "2L9dYHyRe1cxm8gwd2BMMehAFESCrL48V67J7c4Qfc4T5xDZkrCYZByLXEmax7L1x7moZj5BS5tNoFFkzd6pqfTm",
  "key25": "5tjTzw3UgHZRkb9HTRuJnCEgBZGzVEKDA5DPf7Z4G2kZzbQeJpLESBQUScDQrXdCdigsQ8vqWLC9Rb7DSfD3RP8w",
  "key26": "5KfTG2esTgbw4n5MfE4zd2XTpRddqgXmRsk7LC1cDirB27JrBXYBcNvSf1nVVCkeQS9WxXNqfVwxT2sLAen3rACD",
  "key27": "4pfJiuGSdpfRkrJPN1c5H6E2vbfzWpps4CQvfn52uV9j5ABziCwEXnY2Pk4bBT86ivdoA2pimNQ3H1JEHd2jMUTw",
  "key28": "4XQqEd95iews1h7ijHYFUzZHSab2nRpaSFQ31htYQkHGb9jwsiE4AQH7p2mxJW3ZWwcYwDPmpgjJLqFK6MvboSyB",
  "key29": "2wqd6UQXMCJhb28MtW8DcTQLoEsV8KFQCNwjv9yUjW4JTauWjS3bXKYDnCniPRsMpn5nYRhWVAdzyJ6gcUMmQ7zw",
  "key30": "4GpNSL1dQaVk9aJze78Gj7sZdKiuHCeTuvvGpKud9FuiSQSJj3bJ4Y9QP92cdb61U57xcGdRwkeB55KefEZim8Y",
  "key31": "nzx8VYkZWje7QNtaTDUL4uEb5PtfkueoydqDXbA8Qwd4k1jhEDWFDD8DdCWEy8kiFCwjVeMF4k5NHwaqooBsoHK",
  "key32": "4ZhQT2M4Jjq9HN877RfFKJYcnK6shyr5TynKQ8cASYzkhAEFtWDVXXbNgPv4jFWGGS3j6ZMGxipcAGKQ2uiTUP1i",
  "key33": "2mpy3nFN82zYj3HTb4oBhWQqwPnt2qYewJTspVHVKda4xr7UFMYmWyMJYNewuC83QpHoEDWFEhMun6RgpE81GrbY",
  "key34": "5Gxe3ez543nrtp9sewsY3wVeS8QA9W8z9w43oK91ELDS3BUqbyMfFa5A39DnC9rbT31S7x9sm9ETepd1d6V2RcYD",
  "key35": "vJtb7w48vMrecVLDqpNhgT52MNcLvMACCawczSBeDDcMt5RrVPbkqC3nTX8iU29YsAkfS45vr8GsjZmSbjqVQsT",
  "key36": "4ispUqPLyqCPtuzce5CC7DW7kw5oVi8HxK6XUDSsxNu4Zu5Gx9n9Dc5QAMYeU7bRWdH3ryzJuUTgQDZ5A8BJdPBx",
  "key37": "bJR4Dei2sgr4v5hBybNa3ANjvo3qNXHnuH8KoFJEiTRpUo71ydQEFbAd5TAyoQBokWPP1nnPYtacTTFvSvshAc6",
  "key38": "2RhYiwTSo9zzA2husgRJra8dbFnHYVLhyqv8JoAiqLz8rtuNK6XpJweMspSXD32g1M8sPKuDbU7MuoSRVxZt1fQ4",
  "key39": "63GiTHRZcoboUhD3MbmD3v1zXYDVGDq7Q2bnawxWetwyJH6wyeDeTGpew1i3StymiqE3nRzt8mjmLer2QpkftWsm",
  "key40": "5fC2HwHNd1EUZZoomqjZzKRzAMSNJhAa5y2PcUDymPcEh9Hp3haFbHSJbT5PyH4E6nJxh736kTJPwvMiQi3xmc7G"
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
