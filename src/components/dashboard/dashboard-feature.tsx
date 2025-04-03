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
    "39q1sGSWRbrSa3X2c5d4u7gYNVRaCbsssFv4rck6EDpfY5WYipuvjNwFEHeLMgNAhqThGrUjF5ZYWa5snAA8x451"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J6rb9PrH4MV6MHvpqaiYLwLQBu3zHJRevtBh3k5uC2HCcvB87oqwwzXo6vs2UdS6hrxqBdQHkeTK4jQLSKyNfn2",
  "key1": "ZfX4MEEW6Z97Xxuf1oCRRCo92o9bL17f2LcG2M2snoYbcbgtpNFojqv86RZgik7Th8Qqa1b6GeFd33AqFKDnmU8",
  "key2": "5f5noZcV25yDnJyDkEj7qS8cxEvnQrVH7xBnRsbDfEShmepzsAAmU1jK9ia22VAha2td36B2LzMc2yQAUMYwLGc2",
  "key3": "4GQoT7C5yGUuf9Bhm7uxmX3mwZzZJvzKcyM2pTxndxPxeWFa4VFH8j71wqb9Qw4Gt3dRK7DGn89YEVNgG6stgWt",
  "key4": "4Ud16P1CLTft93CiQmtre8DBEfCEjXyPT3LYiaYrYZJjRfgmCfYuDzZk9imoZLGaYMPSZtrygG8RRLfbze4gt1Ho",
  "key5": "GnWQXFRPLh3bJ9xTxuGKqJyhTH1dDB67mGcU9yPmGuc7wguHdNJPsrVqjHSRnxQASLHvovhRdA87FnMe3SNzdL1",
  "key6": "3utM3Gi3VEpmpen7v5DQ9LHZMBi3i5QTR1Jn59fZn2Hu4bFhuQZF1WjZYw8jPtqny1kbifi5WCZaGpY35B1G5G5A",
  "key7": "5jcwAaYxw9LC79TcBdU1GEsKYCeap89q9ruvjdF4xVKUvhNYof2q1QhrJHn19NgcDQ8rAidSQgwesUHvW9J2xGqt",
  "key8": "38QDxKtN9Qo39srES7f8WaYXzpm5RC7vj9pkDL2u6dV1mefMQmKevDyvDRisQUq9TwsUHbCFfghRxCLLr4RjYxKB",
  "key9": "x6y7cDVxTcnVNG9zzSp3RgGSwdwttknPsopJ6UJhFXM2Mhf9wPiVntEToferAUNtEYHauqadU7HQ31ZvzN1oHxK",
  "key10": "25or8TCDW9CMeGZKwhriKoko1JtwA1zsYN1skUaXJee154W9KBjhzidrVYLcngaRvkWaJTuaXkmjwRHBbcYLKSzQ",
  "key11": "sbAvQe8hVeb4pJwnfU38eA3CGYzd3eFrNoAK3QRkdApUSfHQJpQceQ2FPp9TKbXwm2AJpJKd1VuFp9mYR4ZbSa5",
  "key12": "5h7X5VbQbrVN7pTUonV9tTKXXrBZs8ZrmvkzP1EkKmtZ8feevQWe9D36CeEEM1Mfy3ignp9grr1CH8X4FST2F8kb",
  "key13": "5kx1MEJpFzrShiZ3xSJBBfJkSobFcrKGtXBm69ZfK3ZBtAijFLw35FjuRGd7yF3mjLVpUwVFi4213SNoVzJMzMXT",
  "key14": "62JfgFfyxTcBPvXE4UAXLMRhVLdft6XMHmDUhHM4r5kdFQJhbQwqCJo1DaeH9YzEP8B9Yzsn85tRyFTPBhWXSsfS",
  "key15": "32VkbBPXikEWJSQ3e57A6eMdK9XvaeBkvGk9PanG1XwXfNnaiY9wf7S1DuGtEovcKh5v8F99Zd15agePcq9S4ALL",
  "key16": "4Dqt4PM4KkqyFPdJ5WaJZtFL7HjPkfBta1US51BaSB3Bz8PAibad6AihF5652JnZ9ZAQDrdcT5sEeB3ZXkwyV9zD",
  "key17": "5WtuHiAdfVbZLspmGN8ML5vnhrzeWpqjCCPFpoQdMfS3twArdjN8b5m6tSCyKgF7Xf13ivVT9Gm5kiJ29R2qiYJW",
  "key18": "4QwYMrDympUZPmQ5WQJeR8gLUWxa7rBnTexSjm3Q1oDmLDDYNP3nUXmtusUWEHmVhNyuwJquQNcXNfV8CPHDtAYX",
  "key19": "4bJAGi91V1QoeWB8qhKxPuSThYKnMEGbECN6mk6df891gVQDg7PaZHUkMRgBYTvSjms7MqmDjv8CPL6FuWDvfdbD",
  "key20": "5yosihYSFtDaWo8Ag64EMuRDuTwTuFpgJLEVRjsXH4cVSLF9KRvjJXHyT5pZxh1jJvTJbdXpCjhT7weuRahgibUs",
  "key21": "26ZSkmB21AvBzHHVyvrDQd8V8WbutLKFRZW5bYkRGRLoYZc5ZR2sSCEVXbyjJivRE4rcKJd1SaTPdqXvqEZsJUme",
  "key22": "2TNcqRBstaLgzmKrRqxvLLDkeW1N52zxd6ywMsegGAHWkP8fjYtGPPdM1AayFXbi63PgaKYzxWpbFfG8GCZD4cRH",
  "key23": "4Bnyr5dJDCptrTCzsrkFjvR2gLy6jSJDRRM2tRaRby4yCZV2a9Fd26UC6iHD4ktxxc6EhuBDPnQxcVQJnazaS4Am",
  "key24": "3dLgxFP1Njq6GKxr5m7A5K6yjTC75zwqzdiB9GN9Lh1pqAN1dUfPcoTiHU9La5Dj2M5CkA3b28Kqjtq4PYWMt3KK",
  "key25": "5u7d2DpgbbhvZU46VKK4atouaQLhf9VPVcqYevaVP3skLZFSDfpuKri6X3qGoXkUTSQAeVPyPXR2Z6FMe5XFgBDC",
  "key26": "3U2DDTNBmpE5iPXUutzM9LfTgeFh4xjY4gXfHqE6mH2bYcMcT6NUhDF3L55bDRiRPAsQKFEneXY7SRu69B6DAsBx",
  "key27": "458P1aPgc4ayBNdzqfqpEc9uyH4ofNoTJ6BKMbtAacKESf6RniNC8zRXiA1r6WZWubMNzYpdccqopxrMZxT5BAcE",
  "key28": "2DdMKsmVdNoyo8hbq3zZLNFipS89rpnZRWM3H7Cyjv9KUVhCRXyiWQf4okfstXFwYxCApGjYwade6Pixwg2QovNT",
  "key29": "Fvynaf4KaEntsKBDM9UnGsf3yrv9rvYJQH6ykKdFiiHrvaY4hdg59QEdAp4MfE9vxRXuyfARPcVbipryXfovhJQ",
  "key30": "4LECCCSMswtnRv9zEG773sBvuNxwYiGUD4sWwumpNxxJVqrsPQiDz8gMgQ9S737VGiBqaHLgRWWz25DnggikPEGZ",
  "key31": "2z8jzFQ5g6PFirQdRYyhoHvYPfFZDqEv4ZjPP56ojEm73dVKqABiTArzSubHFQgVE4bGs5UNNfejNrVggvV9Q7zd",
  "key32": "5FDMZksjDQgxFZe1LGp3GKGnch6RCVm3NaffBAHhijxrcEjuj7FdLVyHRCzUqDcizZ9YUPXrYBoeQYvrhSXJKDit",
  "key33": "3xPrNrFpgGiypQ86b6N77Y2Wwoy5yycrpLtPwLhLPzDigXGfdte1Z1tuUwJPnBDjG64p8Sdo6Acc9Xfwu6pdcWmE",
  "key34": "4RQq843zeACT4seub19EsC5VgaKDzw2pw9CMcnLpF6XHe1Ti29z64VZ9kZLz8E1hykSCiCoEcwAe9fyb61zq42aB",
  "key35": "gF7Rkts1wHFbyTmtZHrHpBRrJUfQCkoTvytFDoja18i1GAjGhYnLcMMp7hqXa1RRCfLUCqsigBNGe96c2H11eRj",
  "key36": "5EkoJQutZUei6g1RbsSV93B4bKsziqRRWFHBBqnWYUMcVyCcJPd1P8f6vFqpCZYkMupxn3NTanttKfvA9rGK7hZb",
  "key37": "ivAHTd5KFwWLZrnVGFht24EzCPwTkHX9W8Ao1YrNrqjiWCGGV2wkHephpizUqowntUQ4fWJ6oYiPspcxUEvXe7b"
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
