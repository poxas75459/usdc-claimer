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
    "3SRXa5m9dHHbdXsny1NB9PMXF8DLR32aggT3vf6tW5Y3mE4XRptirNVG58UnjCZyoazkKi2C7n1sdTyRPfthhspK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CW8cxnTA5qL2akv2hXJwd434HQsXMXyx2x6ryXqCdhASkGGFwHHEhuyR1ByPkBZwvnURED8zFrW7JziAtbDfLiU",
  "key1": "4LCGuwTYhwjcprforyi8bT4LQ3AUYp4ZXf9Z7Uj7qgr19gZ1EtKzqSjRgT9xAorKDmNUUovs3QhTh1fENLp5mFa1",
  "key2": "4VPnqVgRH47x6Ekk1unxowuRa9X591oFNZsW22minJGjoonxy9YdouT8d6kRGuw2WbBJCiVDRB397PPosPE1Xuay",
  "key3": "2dE2K6JeYKD6phhNRmCE2bVJ4jF9CWy9mcGBL6AgEvDWoYnqWDRmPaa7ABX1LA9ZXXv4wdoqhg15UnyNoBjkWmGu",
  "key4": "5m6QHaeEBWGbtJXQLPPPzPVLwL8FEeBsmVs7cU2pq1MAn87N6UJkeW66pnpTGaCYcS18RGtkeWZRADhHKVfksWod",
  "key5": "3GV3LhTMTsJdDhycaiYWGt5caxhbi4bSePJs9WDy3EvXkAy3fxiM9q17u4BoqDT82ev4RmacyYtsAwswLmvYN3Qb",
  "key6": "38V8Jh6a6Qm2frsXNLzn49pvqQQ7cDDQhEeCfcfvt5o6LDToqiAFrAHveCqsibqxPhehFfGZH7mUNV6JYPLKXGCU",
  "key7": "4NaeSMhbpH1evTXUFpsPBuySPRbyLNveSY5xqCjZV8ZUTCrrEuQpx17Jm57MAXATFERsi5em4hAV5V9iBgiTzJrx",
  "key8": "Wy367if5wmM34WSz3pbic92Ds5ikwum8FSQ1ShFpwyQHPdQTfiwDNdGsCvZHFPwhxSVQEZFKf7b4aNCPmCuSKof",
  "key9": "3u1p41ZaDyeLJzHqtX5gmqJvMqvgQ2h3iJGp2JBGnwdWsJTX54M1mZfgbTh6eevu8MfcB5bVJbi31Q1YSqF8rpYf",
  "key10": "2VycsKLB3StpMaRUFNgf67XNtXpaS3EJKT5SCM463H3GYEUrM6QwhRpagTHaUKZn6qecJNSQAhiv8ut5dgXq7XD7",
  "key11": "51dEP4siqzYnG6FYiZqWenag4Pc77LhmKUzX1soZW3sU4yBkn6F1nsgjkv3ptcX4YudFdbDUm6UhknScqwRVCRqe",
  "key12": "2jk1BsBAbHN1SCwsZJ9PUV72q1ijwhTCqt4QFxUoLY9Cnux7Pjq1DvX1vfY31DKDYafXD2JXCv3C7aiNscNMmkaC",
  "key13": "47T8AXKRYb7bVY3V8qzVPKFDMuviv3x3igukkJyAkSJqReqiiSH5Evvhi8D69f6BczCAkuiTrM9Sg7YYfGvQvM92",
  "key14": "BKQLUgTd8gCyA3Z79voWj4sUFJWVNbZE1SNg6bkxmK6uamdcxdKjQabFDE72HRG6i5WjhY9Fcw5WLG9rYexEpCm",
  "key15": "hxBykWLxHxarw5moNeZ6xPwYYhE5CduY7V3oQN9xM4nLtigJC13iQkAcgMmAy77WqEgfcoZ43JTCB3gYWBzfpVR",
  "key16": "4wDaY7VAoQxFenTeTad6sHEAVZ3LkBpoajHMuevBRtoWnaoBZ7QY94K2BmpamuqA9iToHLA7BqgJgUqf6WYJeP2L",
  "key17": "VE37jd22ajWsxRqcitmuhNkfRoDSAwKUM4ejncjqUpnDfHbe3maR8TfCGXaBwgAHs8UfdfJJYPfQJzdobxL3i13",
  "key18": "CwqPTZhgyx8NvJgqc8hkxVu7ksdQpFUfJeCxo9EzoWYBzC4ciZDCCvTw647voDjrDb58BakZBa1xLvzszZxMcjX",
  "key19": "4RA8nven89ErKUsFsKDk5hhz6j4djDh9bsuaAjXGCtQ25QnLSN494z7CQdEeux6WybPKaTjDY3y4gYo8AZt2ihK6",
  "key20": "3vmhipngE8Fw68qFahhiCjWbXYmKxKwRx2Y8f5DP3uczkjxei6pmrQ6ek5eKesvAEb1r2qR693nwGHmYP6ESP5iM",
  "key21": "2oFStcZR4q8dhTkgy5cRFHbiX1DDqPqB4sMByRe38nnCVkoxshDjb42o4BQZZCCo1HrVQ1fdrJmwXEUtQ4zRHCe1",
  "key22": "53SJQdSudg1NgLcRJd1bP6EhcmRf7d4HQw5PprUybZbs7GMoGmyj95ay3Funpp16wCHSHWfpqm1HvGsz85CRP3Uh",
  "key23": "NGLBqjxz7v6y1DR8vBmZibMYv3WpN15zGnk6LPoVBmmKqD5FCfsSxopcbhQdLFWGQMX3CSbERYuDa13kq6ZcYAr",
  "key24": "3MRN7pLnFe7MEk2mYrKjHv6BNghGFM2n3MzesWoPcn4tkfnZyydStBJy5yKVSW4Q683WmTWbbPaXxntGtGPKgQau",
  "key25": "5dy6TqpYPDoRxNEDP8MHoGFQWayLaHHechGPVfXFQRhW9b1BVDM6qp6HAT75nzstsHGeChyZx8yhGkBwpvUo72vv",
  "key26": "5ffE7dpwXjRQPrqonoXtm7vyM3jzM4KRSswYnWwDqjPN2PJ46tMhgwk7sTvLMky1WQ5LhLqmJmUkpfxYwrfTAQLP",
  "key27": "5zdLg35DCRbgVU22sjQu6PcjXY7h6Dq8R4YUebE95dGQMzGTEArKMBjezpzWzoXi82Eo39GCRMhGCxxLLAnihUrt",
  "key28": "64cCU6aAoHHkRPyDdCkqkbjMYRPGsWPxdTM444bveT1wt6gzuiSE31FkZYXbUGxu43sBAicBGqTypZUZnqJoYNxf",
  "key29": "yKyBuFxvTHstH2ijwuKLsRwcXVQN8xeVWvEXCtph6RUp8aLqwgxHdbuks2QNV4CSHMLUsLopFGLs5aTJ34LT5hq",
  "key30": "3iknCweqZ6Bw8pkD1ztffJLA2xkG8MdESrcoD73WkdsXGKNsUTkCmd7nquJa5rmF87v8UYgbrXtbo8ZySWsatibs",
  "key31": "5xSnQKtUCtJh5G9iSgzqgeYGrgKJ4P2trUAMNp331iBtKGEvLtcRJWc6JsB2VPWqTJd6fnt4BkkKj9PqC9Z9WtVX",
  "key32": "33Zo6PXLWKJLA1QrSmPeHx4UCKTytMYay4rxbL344Ht36pNAzrQiEusdjgTakTWBbvBVdyjCL4ZoXsfCgF8fksG3",
  "key33": "2w7gemGaZBCiiEQGacfuk736LiNTa5FBnnLTUEVTw9wdUbkzZ8Ln6BJHoysW6FSNMf5Ld9w5Mb9iKSx6n3WBDEUo",
  "key34": "2aRerc2bHmWAjjH2NNic8WjSkWUkB1pmNx1XnDkVw99TbQy5BqDZusB4FhxziFpGYwgLSU5EEha79Qf9Ar41Xmza",
  "key35": "5hjRJ3XcJG5Y1K959T9H1Y8nfH6oKe1zqGgsYDTwbp7sb7aXndCRRTcQ72oQFsDsDNBzqjbyj3no27hKXSqEEDw3",
  "key36": "2cLVEVT4V2DfntEKdqwejCd3bca7yf1eEzqXQgse3EJEM7AwYfh8Uc61hU37vCRjejCoCUXpjNDvmZLhcaz4TwTR",
  "key37": "5fyHetASqoMtR64MgDMqosQkkePFAS3diHFEnC3GPqT3J2TexsTXuwPt7n7s3qgwYxTopDy4WsnqZu51PV5h2tXk",
  "key38": "3HjEP38MZddT8Avj1zB4tRvPrYFRZVSZLWp62ESbZ9sHsJvbyosxLVdxCuj6v4bMUQit5SuK9DaKsmjmp5vk2tbL",
  "key39": "5EraSuooTRKkffSTSLNxCHMf8Kk68xMMdA73kScGbzbdByEBs7rfm3Mvt5foG2HfmxEyexLYKmYg2MHo4YUHqpXr",
  "key40": "45HnaqBBBiJ7MSUmoG5fdGs2mNy5RHGada7kZpRApANgn3M66VQKRbit8fPQse8CtqfQvWty1MSbBsvCStezvxFb"
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
