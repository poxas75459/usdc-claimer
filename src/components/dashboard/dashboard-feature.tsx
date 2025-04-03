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
    "3YJBtdLK3uc59SrfsrbhPUNheVQ5b2X7Wgnurqn61sqHJdNWhzdXEEeTrD1N3VtVXDnfwr6B23cfWCKkMvo113Yv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZP4Fj1P1t2R1iyeMWxRn5M11SJUWcNXixxMjTftoaCQeLaECCPuZ8TQXqHRUT6VCiHRd2oMeunCwaMqGG4h1ykn",
  "key1": "bhkCPtRj6X2BRYJiYnMtYirzLUnzNwzCKChv4zooa4GRXSXeXCDsJCisH1U7frfZ43H8qiF48PXwdjQeLUkAVj5",
  "key2": "45mEQV3LjYPYTokw4j8X3nvwNcHAFr5JLbjP77vtsRqYPX24mkvcx2RjbgJdKtz1TtT8rQo7JK4hg2Mz4Svs9BU",
  "key3": "52vZkJYvSiM4pjTKAZ5SPRQennHDs84Cy6oTh51Ha9aoi8kQ2iuJudvC8pYZofFmD1VvHUDGTcYRcuMuJSgjXesz",
  "key4": "jmoRabTorjd2eqP22pE8szvgo8mQqYqAA5g5T56HzSsWnAdJtzM1ScJe3ahTaVpXi2CAocuuPdmcKvw9KxfgDYD",
  "key5": "5CYBHjFoi5tyfRrQHznvmR1KH1UDuK5kDgydty9A2oUWT87WJLGL1fCyXTYbVFuyZi6XNVaggM46UwQB9TPMF3Jo",
  "key6": "28JmJwZBFKcxpaBhLThgVMTzs9bQaGk7xg27ubWdBMC6sat47UEc1NrFGzxp3vFWduRjpSVA34kY7vGSSoozTEvS",
  "key7": "2kKs8GB9WsaqNw7bbwcvwsqYvFTCuTKkUYzc9xMVwmxbxWtbT3z8rc7YPQDzxG9ifYfPRqfCdoFvJxv4BiZCv3eZ",
  "key8": "RKLY4NTPQzVw9A6N9ejverKkRj215gcVKfYi6ShFGAoR1ehGGt7VSZpGCsxvxZRnrDX9vPt4R15FNjamkTkMXAh",
  "key9": "3gF37a1f3rj3Z9PMu8snFfhpHfyfFBDNbtt2Fq1938DBEfHiYA26X3jtGZJzqKw62CmtaNDcPGFywRir24DWpn8m",
  "key10": "2cSMynw2B8qJTvhCLPAerb3Lshepk62LevkYXH6w7eSSnsdcjW1pbiGmsTNboHxkvADYVEXcghV8isQ4eVLbbypD",
  "key11": "2aXbP43wCuY4tiXv5VHNqVHPzoP3HWuzvyW8dQPyiMwzZd6FNEThxNz1VksThuasvCus8hxotXep2FkTJ8v58Kxf",
  "key12": "3onortRjFVjVkEPoT3WHnjKJ2LhyekBeQrpnLdjxc9ZAkcEHoJTebvuRnPzN5H8G986anzY4otJoK4834MJMPF7v",
  "key13": "31HpEaoac2xaWd67YtQ5f6FnpHXvHtxLvzv5fMD8awauzXyBsxsq45NzmDuRPCrwBgL7JntUBrhoAUXg3cHju21D",
  "key14": "22NZUqTFj1bXLK15NQVTj4tvWw72r2TBuotbWaCAt3jcP9THyVGxduEJUgXo8Fg85VgURF7mhvccLS5FaF61t7Hx",
  "key15": "61s3nzwoUeaG6SABi9VTRtW7o7KdvsZGyyHhQSrHRg1CtwMLyG9ZHNTBtGg6WTWk3uEvgwvJQRKbSbMsPQ4bK3QS",
  "key16": "NJhHhN8V8eXBkcS1EyaztRGkJ76KfwR65SkxZRj2g6ubPPU8m9NRJGqsBt6p3tkvRnsprkmLXK2xQC5JBPYhvDx",
  "key17": "37ZuwvZHsNZa1vPHgv21eFjQ3Er9jLuKKnsHoaHTMREPRxb6bYpDqrD2kwCqjDkB5vo2ikbWN9jDNwkKDYV1eJ9m",
  "key18": "5h5TGXNSP7L1MBV8RTYwSkHALeyrMMbUKCTb65ViCKh4aSBvaE93QcWaPEu1pvEAPddfRvrFmWj5cZV9Aj1GXwcC",
  "key19": "4h6fVRXdXdvCfv7oRGke4mN571Hpnu46dtqcWCaJmnhttnUu3Ja9N7NuPuezA5FQ1bDpxoGC2Ejgec7fx8oHgqkM",
  "key20": "54bePmJjUo9uds7sj9PKtKy7JYPtQxcrEMrj2RAkXjRUtYzVQZMPgBkE6e35LcjURnjqnsUvWwWgMCF7dUiYUVth",
  "key21": "oD9mjMaTbpDKa6FDrogN9nV3P64Ldh2wht17pvL1De4KEnGgMCpgW1UqzSJaLLs19EB2kNpmCwuTNHR2iNvxdAH",
  "key22": "5dvPZYyxjNf2G6nFJpxWySqYzoUUhsunLgB2C2fgn9ZMaEFynZqRUfdRaV7XQxPCYPYZmKGR7Y5sCX9UEgqz9fUu",
  "key23": "srJ5qUXARoQBJXUrqj8HtWxU9b5oQMRD9ujkiH1wPjFtrTDqAFtGBLd8Rm8ojBAdNrPGgUUDoq7WvX6uYJDax2j",
  "key24": "64Gt3w2kAvUSXPhmvFBYRmnVF4XjPnDYjsPZrQRCuT6NznXs3kHRYS36HsvkdcfTQ6LAvgYVZar6HVHwu7St8kBx",
  "key25": "5pX4X6BasZjk2G6tjn6KwuTE5PtTJPPJFtgeQ14xQhmzvnDoRpa7rY6Gqm8BB96qsGamFidXGzrCL5fcWErASpaU",
  "key26": "yhSby4LrWLs5bUWBudDP1bqiqLW1h4ufXgU2Fq6JJTZEf1xQFvM1RrFqeTJkZkwjYL8eTBnjMrpAFdBzFPxvRT9",
  "key27": "qcGrTDWQKn2A64seSeqRb37Eys6hCNGkPmKMHhsANBL9rwevYgYckXXVGTigDGX327nKzDRhbgz995G21vNo4Lp",
  "key28": "HvEjxrg9ZPSXVRbQ5uU4tgH9PsLD8wA7THaxYwdBq4raomkVtAR8pW5RHjBcKPgQEDf4vSfMg4BFjU2FzpqbzLE",
  "key29": "KX9twWw5gc35zaEaEVNAsxFtqSoLLCcoTbX1rnJmXqD3rpiAF4FiHSHGfyv5e8BMrg4wa2UrDyDAVceKNVv7tMs",
  "key30": "NL7QqVm88eiTGCt7QemNHQJVj9Znf5wYihuqF4tvQoE9SFSmmEzadDhX4WBh6CH6vCjq1LikRq2rddY7SrXmcEi",
  "key31": "61mKeubMsxyFuewUQ3DzCLvo41QKgoNH4HAR3Khi9NAT27fbP8hZxCjUpPjqwT36mLzr4CBxY8inaRAg7EK3ehGr",
  "key32": "4gVhGYZM5GBaVJwTCGdSXeMUWDD98VV14viqXjXyau6fN6qnnqKHRbvQPUnpCYvXgP8hzq8kjq3xMBvQWo9nA9QN",
  "key33": "4BBHqkicv5PENAEtm2JDGzk4kbPfmR7v4NJ8RUorYPQMm6TsYdtNsQGrGdbrcRzDu3aaUi4CrGrF9xVuHy5PCZ4K",
  "key34": "33nQfnytjrYXzgVbeVbiVN76k7tK3gfovrLhBwU9SEk9qmNKBUH2fR3ME2cUtRXxNiQLBbevYc3oYsM88SWBb6D9"
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
