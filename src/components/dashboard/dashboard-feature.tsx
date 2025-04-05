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
    "3yYsxdEfJftFkQPJzQ6M3U4WksMCssPJZuiM8Z28YpYRD2Z81YhdSAnfV2MdzCi65y8PoeEF1Bgi1ttM95gmh6Eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eRibMNEY2GBGCbTuUq4oKdEhxWFneQLA58NpTUNHBo8YcDsTbfdQrQeh46zRu97vSSovtBqcerrZXXECxu6a8j6",
  "key1": "66Lk8PFAvsAJNaTicriPyv3RgkASKcGxtaY1n5HyPD9NyxeKVYefQoK1UqpuAigBKfg5j2Cw7NwiK7LQKv9CZXXC",
  "key2": "5XnpieC5FbBcr2pzkTseeLCFreE3FUJbYHoQa3KVKxgx8tcGXRwMAAifEyQBCeCvEUWpwRaaAbadbQ9imyP344zp",
  "key3": "24Uj2gbsjjP7vg6L17tRUaQZ4XUpbneQKFcw7GgMakMHiDRu6nEBvpntaUjhduvGmmU4uqNmePZYae8UiUdkhzEF",
  "key4": "3UTK1zmH1YWsyHdUMBfUT6ifq6xKmrjhUy3FdugM168BTfV9gzUga6qiAvug3BdXdn5hmAoesTza11x96N1G6SAR",
  "key5": "ejMVQDYWNjpFCJ7hvmM564nhhKzD5ioQiegWhLApu9up78eDyaTbPsJ2t2EWjrFTf2EZcm7jTGrC5MyCMqCJ9SC",
  "key6": "2KYc3R7Zn5uadasFU7oo222kdXtNqwCTJwvGciNiGfF4DsKVdADfn1wjKS3GXHDaBA6uzmoAF19n1LhJhoFYU2UY",
  "key7": "5tfbMowVVZLEtnNkVrwfHURHEZ8awjqB2UuKe8o6tMQwFPkNhDwHbdsULZULCYLdym4oVFvA2SLcCvNb23i2XB4i",
  "key8": "2EF7EoubWh91DGXkqKkF2rbnS6YjwZNdoHS9nwwobSWqAkkJSqNmHX9p9HEAdnnCoH46LY2UgNthudCYgpbbNVEA",
  "key9": "5tLDfvLuYf3tf5oTPYBwfauxseJBMUbD9ULbLffVi1btqFtvkpuFxTfPaYg7o6vMZnSY4NAozA2rWzst8mdSuPWA",
  "key10": "4onhmmkKxVQ76GYKAfEmPJiis2gFfbRNB4JA3ak8D6FSuCwwHdB5V5GXukPSxowRVipMNurx41bFUbhqmfqxRXoZ",
  "key11": "3hWtek98DeiVMk2oKJj2DEoqU3SNNWu2azHoyKV9PvtSU4FjgR69JygGUvSm7gxUp2CpBrE625w18qqz84vYs3er",
  "key12": "2Un4Y2a65sqMzeBmXvNMAp6q8gES1nnC2GiNkk56FH7kdqVBHGNzMmygSzR3P73WcdzxQRiXr7FYMN3Lu1VS9xTk",
  "key13": "4K2NEzVSnSUSg5tXu6qHxMeNYapMkynY8ZLk79sUxh87a7Y3EF4aJgWZrpESwMNKpGwJRPjD2dDMFkY5wMMyA5Z9",
  "key14": "44zqpr8LoCeDzAGDDQUtymLR9ry7DJW93k57EEKs9C4HVRYjHpCXDjekEYxqTLa7wLPyULkaVqzbEJcMZRmtH3Jp",
  "key15": "5NxiSVceH5oYD1NWB5QBnSLRJ296zMZJkLJ2UQh7kEnQXXBKPnWL2FMCHb7HWhkPHbfmB7QXz9zLbvYodo4VH4tV",
  "key16": "2heEuBxFKoCkHyvYvWVnk85e8SotQen65zA1Nv6av1EXLgZ3Ss3xQ4np8b3kWfomWevwBPevv5Aj1U1vGfmdAVgZ",
  "key17": "2gFWxerQeiAh2HT3zsF8f642DCbqk7ngXotLgJGJkMdHnL15nfaYbHnsbf5ouDDqWdz1by9MXWi8gQZiA25qXVzt",
  "key18": "4JBm8r3qK12Q2DN1kHgX3HNWe581VpwVhQ7GvthkqcsWuTjiF32ZSr5jTTbc9Rp5NYtfjZiEjgsW5gd3CC3zwxRD",
  "key19": "2HWyW1QRFTienFKywtMsCE2KeELfMTuABbjf6iPg7BJ14q95GBq4NXaejhqaCD4wU6rieqQzXYLN95MAW1UWz2fj",
  "key20": "35ozcwDMLDLt2EsLEWcd97vkvRzdMVDG5SxCgU5E5nkKqojk3qrpDaQveVFFXb3sUZYRLbrExardjQMvagf9ZDDr",
  "key21": "4hZe77mq5BAv5sLRHffjSAVqpVnixfhAaWiPaPQfHqWboeAfw8v2RbvY73f1m7wXZ5LCiAtLe5P5Povzi4zRG7ku",
  "key22": "2zGoBNdH3HTRbAgMie1gPRWoW4CBXma9hLCpDReKgG1yHpsT1nVRbWXPzUJeoTVQtNN6EMmw83svCqw4wVwKYxc5",
  "key23": "zHZnkbFNuw1bM22ZfyMakHtYLQ77wy76vimYDhTTexCxPp5KHCzrvToUNeiBBRacFj4y2zHCxVYnqMwTFBvmQ9D",
  "key24": "aSZ5CviSFCkUnekSCyzihWc1w15WFFttAK5dAd6TVknqePJ76FhfQwfWzcGtUro6WW2hSSKas6LkHPxHgDrv8WP",
  "key25": "3XBniz23TBaTZL8F85zJtYjXPMwEP6MFYsbuNYjTrUN8f5T4htAJ27a8gMLh8kJAYPPYMqdGNqRgJCVyMxEG2vvn",
  "key26": "3S1k1waJGRQqbCGPZZ46t7reRVzvs7sAbJk11Vi2BRvbEx7acMyijGiewR9pgFVo1fYoshatiBv5UhHBR4Yy9DEQ",
  "key27": "3cAfUBWsnuEwMeAdxD5ViQRPqB1q2vbHb58oCoTKt1YoyeCU34GUDDYttJcajWLmUi5TaEf2ciQESnJfLwYUDiZp",
  "key28": "wX1Bxb2RzgVDfbpy96D6iipgpEG7jJN8TMYYkCffzXrAq7hXFhg8SkMfZHdKMmBL6f4U9wt3mC1uHHhS7LUFVcz",
  "key29": "54XVrEyjQg93oAYqXrdufsJFEhZznLU1XgLWPjTK64FWh3opYe9tSBNgUibGDNQDJxbyMKFKxS2MmRHZCmy5nxYJ",
  "key30": "LK8NsiZiS1tWhxiBAPzfpxvHSD2SMPPkocUbave9sFzAAC4YiZgh2VjXD5xLREo728KJMZNrD5TcJsniNrZZMxW",
  "key31": "4N8mUVA3HZUzJCSeVU2tho9VjLhcAodzppF7VdMsvWHJG273GAES2LdWUzqudT43SiDuL1qPTBQzVMqQcHEWZBmQ",
  "key32": "hNGqbnfWYoa7bJgfGotQjpQyPbmGSPJuE1s42Abf3dTTSQEHVHmHG3LpMAQCkXZtnM8z7jgLbHYr4pihmxPuWBi",
  "key33": "4SvapBkxA2p5ZxUDaaTQ75gYXVMf8NE1B3EdTv4KL7wSu5UE6YuxkgPFjEqn24xyyyVe9LYoBpmgdAsmdhCmLLug",
  "key34": "4bYiZAFaFAtUEZynbAPicMB2X39Asqs7HX79L5DMSQfQtcVgn7WSFUjn3ozpeu19zprmxS1AgTZsukVHRunMr7Dk",
  "key35": "23QJHVNNxV2Rrdi4oupKq6qyE8goUgpxdKMrReVdfbCDwMLuXzRzKpFE6nqzihA7UigroLzEMSMV2KyJZugCrRT4",
  "key36": "MEMWYDpCTth165Lv1nd4ctnAjGd6RPN6w726cf5Jes2R5qFnp13Mn81MXksiaWAncQZhpWR4GSjFjGiGQZiVXxc"
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
