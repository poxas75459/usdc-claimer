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
    "6619hJ8Em3njUkQ2c4FCaQRPz8h71Q4fDgvfLfDLpKNra7hJHNNBZVdEobxPABQ3vmRSTgZsDhdZYLJRJ2CRUVrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H6XGx8QcKyRRE9oG9HUefwdRAEz1DWdeTwcNhTTsqdSYApvtJeq4sfs3KwrM3R7FBSw16nvhsYjHGKDhCcRftiq",
  "key1": "3JxFJw4e2PNagL5JeZw93x1bUpqTEFDNW8E2VxDBMV9ucsuW53CXikbk6obkkDsqoUckWydriNXDwYmfkKGJB8i4",
  "key2": "3vZARoXvPktwgnqyeHK7LsEMMHYVZu9TpJvcnca1U15U3jvb3ZiwWXsaCF3MsbkvUN4DJCvgWvq2r5hYwzAZTxwa",
  "key3": "3Ajo1XqpyAWUJdD3aGDgG39duTkgsvjoAAZ44U2zepzdu5fLJ4uQmkBv7hjA2MhSMV7aMPpPJMXTtmRC8RgogeMe",
  "key4": "5PU3DYA1obUev14cHDGDPKug61yyiy1aPJbhndnSXxa3MHwFpHnu7tWjaP9VZ73tVbNU7bBqcu44nVc3YpviM4d",
  "key5": "5XrWJXuCsMvkMJnkVGiR8H4QJqXfwv5N1AHoZkyaER93eBJNHxp2oU8NXZQa87qas2qQ6tZs18Eyxa6dtkvRtiR6",
  "key6": "287ZF71QVoNU2sytb4NXXNseyDB6us7pivQTMi4nuX2ZdeXX8H1MT5pa4rLDChF2srUZhLs58jENXKiJqhBMWtML",
  "key7": "2y9ayd2S7N7oubmXoxVoUJGWpfsZza2B5VwQaMCReKhq2pkW49SkQGFBWXtnJsXJ5x5fmjhk1jnkKizZrm79Mybp",
  "key8": "5QuThzzp5pQ2E8gYR8Vq2k95K5Fj21AZnUR1JtKqFrpLuCx6jMV31wxAWu2LZzkgRAK5ZuUppKTJpSRQt2CytsNm",
  "key9": "2cKYjr5W5asMLnyGUNmAykPg4Q9cN5VB1ga6FtTfur54k6CgYqHkHKRLxWALkMuNJxFpU1xf5wecw7ZnVgfPUjqW",
  "key10": "ptsQUa1PByPXZ9BYTgBNFEwAGWbYpxiJ49MBJYAG15BeLTLVU1ftbMPXNp11x4ZAw6CLgAEhnk1cX6P4JnQgwMp",
  "key11": "63hhVeR52Va2XnAYFKYeiDVLQwoxKhcNMg9LVxebVTMu9ucTD2YUVJRRTYQ4am9V9ujpHT7rgeiVeib9CjQA9UcG",
  "key12": "56PvBdKVhD88d2DtwuwvhnkPFAupYNjnXZNvXRhDbCq853X162Htj6d4eJ6GHWtnAWR3FRtsRWxosmmp1Qn99E57",
  "key13": "5oiZgcKfcNaQtNspDh8msj7HfyyTDgWrqCAoMCmCNQMUvipKptADC6gmhp7jbTk2yRyE6eCyqXsZ4v7XCXhq7ZdJ",
  "key14": "3EsDPVHEYbbe3R5SVKjnoWjgqAz6dL2AsemU225EavUQhhE7ZLckiyrzhXkhuXb97G9PoHL4GaPJTEK7SwdJ5f6M",
  "key15": "5rdX4c8y5FRd7XoLsRrhrS3YYFXC2Y1fjXwD92sdbqhduH1wD2LgV7V15iHrGKsj49o2AAbwvJpJM3DHoHdnEyJH",
  "key16": "2hWoPjH9yS56BPh65rbHqvgs1YKSTPKTYN3LaQk2Uij5wtGB44AgsW2w3TMib83hStyFxaUfYj4wNvNXmGr2ftPJ",
  "key17": "4jaum7mDfJk1SJFg1mqZq9eZu7A59oMawqvfFHePUx8kSks8GWoYGb9vqtyvheU8f39NyXKeaA6nkF4kyaUTz28p",
  "key18": "mdpdYsHBd4YjJfkha3MoUGoLQjUm4VWs4u8np3CJxhD29cwFmESgYevJGz9ARfLRrkfvdbeKNN7Uusvz6zWcv7r",
  "key19": "3pFaPSehiWt5QXL1XH1JzFC8AKe7ysDcHuaDdAbC82mMgJA7hV2xEK3W8KjdTZY8iGVyMNNrYS1aDFxyyM96pRQX",
  "key20": "5Ud3zS9KmrKot3oEnKCXfjT3c79X7UvaDAuxipUaeqZxrnHCbVWpcfHtr4gb7pLQVtNjzQj8DL8itmpLdgegzm5t",
  "key21": "MrDfUt8wR1hmhLrKqxkuLMMHAU7iNisxanoMKbQaWcB667PsDSg1SVGTPp86UPfA2v4LySG81B5bpqU2WE7Q6pz",
  "key22": "3y8b9qwFcdY3GLXMLnnwnB24b5R7qV17jmdDRzQ3Zn2x5TjDLcqfDnmTi5NFDSLcPYJCnTCMor6BWUmzmNWVMaGF",
  "key23": "3QuaoMQuq8hKJkSF8nr2C6BwuKErwieTDty4tjCdQS5oAP8id1ww5syprfgihF4zyWerGqnoKqwwUyWs2YwbKi32",
  "key24": "tPkkSfHfpvwkDy48kwezJBD6Q6XBMxsudGhb7vjeufDf1Tuy7gCCSg8KSpVrh8sju981M9tVkHXppCDWjDK14r1",
  "key25": "ynUy79S1hngF4SQ7jxBnxgrrPUDbKGGejBxAirXpg5Fvn46TUsw8Xv3tc2DhosBRYmrBeMkCzmTCVoSkdGC4Gxx",
  "key26": "5hoYZhJuT7u7wziEicRoNqpEkmSHAkTYn8u732ibrtNBf7aZmjT9bhDc2Na77N55bhG58DBcNe93i5bUy8Zy6EXB",
  "key27": "6JDXZ3wjLyHJSGRMG4E7q7AhrfKpCteoeUGPKDXsjsj6Nm4jpdyTDGt1kMzRiguvRA1kNvtA7s9xinVFbbSTnAf",
  "key28": "5DKAZ1aic17nEMzM93ChjVSgVms4bWPra2hnfdNCzUVsbvfi4mcDzcXu5JeriuQ7puUwqzE1yN8pwKsJm5L3ZEaq",
  "key29": "5en1KuyBMrPKSTfgkhHd23Awe2i2vQ37ZHsY4tQrkrTneKThTBibK2F7a7iTbqmU7GyS564ncoQM9kqCaUBDn7Mu",
  "key30": "2gupMfLfoQRD2QhcyrM49t565epSv4AnjJMh3m26b6eAHkimVFnQ4fR43cLrFRdEaSDepvut2S8eEmKUatJ4Zsj9",
  "key31": "482dRMeHEdDE5kkrKKAcmjD2wstyyM42vgBWFykVj6Ggej5YH1Mb8nzHWxHiXM81VyQaedSaBUT93t8CGGuKh4Nh",
  "key32": "3aKQPJiexRUwue81Q3F1TgoABZDDVUiy88F2CccHVK5KW8VgSTHKejijeFsLgJdicMkdaK46DmVL8BvokpsPRNGE",
  "key33": "vdJXmFLvXNc4bH8FSQVdzM9ei3yUFURPN4anaZrQkwWrFsjDsAFTCX8Q9REgvANALRqVMwqg1P5TbNjUyWLBMAu",
  "key34": "4VSRSrh9WB1QkbaKqrdGTmuivr5aaKbbJN7Nju9ytTgECVhBtCg31hvMfZsWMrHKcUmvkRQW6ji3WJ1aVT8hVJGz",
  "key35": "2QiiQS7y6dhQL6HooazaP3zUKvSNujJ3YtGtAPU6L4DbuVPYo6RdBM4hd56ZgNrmhJyQzdCahAZuAZdVczfwRPqv",
  "key36": "4zKA3GAGWL33HD28BJX4kKYLtkfR4RN8DmqVUy7oaxKqnwMrJ8BfxvgTRtvY8vMY4NUXjMt63bQv8LfZRUhkLdfz",
  "key37": "3fetbwWagxUpW7Hi47arnb8bQPhfQjkLY5ZjNJD5cnjHr8gPGFes81WMzyXmRohSsvP3Vp4SaTWogin9XBU9ugj9",
  "key38": "2HhBNL4De6FZmMVCUBp66ZsJvrSTWyoFZ8bwmYzuyoZFcy7Ts2AE6YZMP3ZMGobGpcoKoKtWctfk19LykzUgBBXp",
  "key39": "3kj26D5hNoH6xAuVvps9R7aE3XpT7uQ7Ehf1MV2j9uzRTy5jWGxeHWo9jLYuuVwKuKawt9zTQXzq3gjadyeR1CRi",
  "key40": "5rC4GDLu1cU7txVjVk5ji7rDvvgXvG3NGKgvMdT29pW6cg7LtEfGnmS2CeWCss9EiMTps157VAtwyQLDocft6DA3",
  "key41": "3B2R1hja5Q72ZsH2uk9w4G2ydgaNoFbDSAVskiHFfrMFs1bzVmrbKmQQFXnT8r6Vsf9VFFNyJwTgHQRFh1HEFxFU",
  "key42": "2rn2uEHrPLBvTEGXUJb57fsvDcQ5BzAcCRFghCL8d236QeKAdLY8W665m4a37pcKb5NbrktqGyhRCycwoWPRyMfv",
  "key43": "Na3LbWKM6VnRfhFiXpJKh17ZtLAviSa3z2LfPi1HPqjnE3sB8ZH3ZfLXGY2qXeEMz5SNL2XvqSEh9CxaJDjWYqT",
  "key44": "2hGnS11KJxCRL9oBqYzNSrpFzKg2TakHVEjeL9rtbKSrsYpQfXGq5J4E6NdhgcruA8We47maGsHUMknH8N8ixXKn"
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
