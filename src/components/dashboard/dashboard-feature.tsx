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
    "2ykPWHPkE31HzysVv5ti7bPEacz3eWQg8Zio5T2iom9paufdgkAkHeQDi4R2vN6YyzTSgKZkc5kFjF68Y6f4KREu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FFAzou2SedC3x8whunRgSiPpUbSDA4tgsT6WtcGBo3A16zVxcZeiRqriqUR6tmsR3XnEYVPnz9KQwCmBhRN9Mkm",
  "key1": "7aYmkAfjsXBt87CE6p9Nwb6ZeKycVHUeroHmu4oXywXj5NRWXyRSdp4jPQAoUiHeabNyLtWnw6aJT7eChqyMynm",
  "key2": "6fFEJDRCm55LqJG5MxsVk18J2uPhwaNSpDpSSPtzrrur7Znvqk8kVz1REPMieGyQNKuQYVS8qzHdTGAfBTZZHnY",
  "key3": "2oiUdM8yzYVbEiexmrZr4CHDpNnwV3kanVbt86PSrSVimNZHbX7knPmWmeXdtXgMd5WXQYAS9dMgP4tGf4TLgb3z",
  "key4": "61hvn571fVcDtcyE5NRt36mKPL3kCE9TAR7WqxCEgqvsiNDcQmMhNto81pNbZs1i6bhEJJuBbq1sFRTydJbhJra8",
  "key5": "2o7xMowYHkMDDsggN9kNw7bGjREMJSKQ1VVdSjUcJ7NzbLSwE8UVjAXLrSSs1AxHeSpqMLHXWV4vvP8VzyR36rqw",
  "key6": "NDfKijzteebBibHVdcNWTdzRi127kRSbYykuHWnTKxDxkBRXt3AtPsvph3zQ9mWWzpE8AUUNLiWS5bjMmuzJnNw",
  "key7": "gLXY4MuFxwCGqZ3SR41HjSwSaoVHqxjqbqVqX42ujpRB12nk6vNhtdTqNMKCBfW6sBd97bVoj5xMoR9iS5euLtU",
  "key8": "66GMqYFt72qnaeeuALm36BzqRvcVk1bbYQHJ6qtRxCdLiJp3upJsFEvEB68eLLjB1TgFSjEZ3rMpwVog8K2HdvjN",
  "key9": "2LXqVST8Mh9vQo1AAvsTrWVMShyz7AT7e8EXACFf6ptkNaskfrkfZwTWM78sXjsZ5cxXCwzdFp4HjSg5kCatMP1h",
  "key10": "4CmKFT2zMgmHzNvBGK8mPocNUfRD49LaKxAeXMvUQwi7FEFvKNeE1cKzQGLUFLt8JV3ACR5qEu5KQx7qqRSEWHTh",
  "key11": "5a3hZWjDMSMDR3aEHnj8ru19vsXg8rSNZNxfZfA36zcBWiet9s2TVFJjPbinDNs4diSjB8nry2e3FGzsjHCcLC5h",
  "key12": "4RbQRifGNTbeFBkWebpGq5kwGtjMANobrkgMnsgiVqF7NC4FBQ3PES5PY6TbJb9LN91RmJJtLXnv1Qv51YjytFej",
  "key13": "3PbsSAQvew6RAK2dZAtmHJYzSUT7Y4evXB8J88fn3DkmupCr8gxvVtN6rrpXTWodeeh7iw9uTVd1ayrcRt273Y4",
  "key14": "63f8xVQjj3487FVhHvMkgVM1afSQjdoYvSEBY6W8RCtjZzJtXSS5WgHSBkcu5BqqwLkJEE6Nz2A7fPUB4n3t8dSF",
  "key15": "56ipWfDkGQktYChcNhxQtR7cXStGX8biYihzWTvdvWpvnSv3P9ykNjCxn3nH8LSi82nh5i6zWf7abaCZqMJ3Gdwf",
  "key16": "2fA4uonWeeUkMdnYLQFcLJAKBsT9ZmU2SctCW3ui2RHs4BmvdZiojNN5iV5m9Tfw9dYQFA3YXu1xB8WSke7mr5Kb",
  "key17": "61mjBoWGvGK1QpJ8Ci7guntknxPMatBQVXiwV9hhBpTyQKLpoQRhK33wgVtu5E7embNJNiUNnPM82boiDzgtb672",
  "key18": "3DSuNGPbiRFKKPWAXADgUvWQwr7k25jFvQstxdiGmwpNRDfMEU31G9y5E38Rmscsg35xR4dnyStPmAeMg3yF894n",
  "key19": "4s9qAEdqKYG8WiQZniLfPi78YgpqECuaugvhsGEH1Cn2EW9p8YL3k7qZnLkxnSQ1Yh4DiWRTegdx2nFGSfrx2xB5",
  "key20": "5ngSyRHvDc7Xz9SLY2fgpCgGeoaPjkRdUZ5oM6vq7m5W67GarBvU4HtJUjQ3a9HhEyjvn2ajxPwtPUpsGZ8PthnH",
  "key21": "4K8semzPBeeWVbBSAwwbw9mr1Urd9efGeb4NmJ6EXcquwwA8Sn7xARhv8TgepWLoUDx2buQomBMZKJ3B6VkaXTKC",
  "key22": "5SPEbKi6DQXB777EpfzEe9vh855i9qYCWWk37CeMVnv5PYGtBJw3LYhoZz23juNqq5nSXosBzKmgF83Artbyubpk",
  "key23": "469zGBJ6zXRLRwmyJYBUnF4qDBvLTnyRBqGK9324PUAY2tXtPHsXVwC3wZtmBgkCVJE1oapAP834kV2jpYQ4mtAx",
  "key24": "2h9bLSsvYtvZoHVSHKEMhyTQ1NK1onfG3jqSofg9CKqh6mUWoKDKkbCwLCYaJpfiUQGzscXWiTbfN6vBifYgJoVb",
  "key25": "3YvVDGB2qKjS8nHD7du8mpSNX2c2cPf7ZDHUmFDpNZdpNh7CADS8U4FjGs2dxo7myBjU8NG79J9fUB4qPJo2hGT4",
  "key26": "34AoF5H9LNb2ohtnYmAk1oNQsD1TbDCPoRyKrkN1nA8jSCtx5TnkLL96L1s823AbXXmwrB9xNCdb7mKhvWeRasLT",
  "key27": "5K1RoovzkppmBifVVew3NEeBQovjimjimvtXqGTSpL3S5j6svur7EAosfaGWDtrEMGkWMjMJTUVB3jLE8DGfBpnY",
  "key28": "3zkuHFhNCiK8TQjjRmDuNgGS21imF7uBj5fZFMWmturAQAJLi5HSCxvJLFyBZQAKWZMv7eWh8SPX3NpRXhDMcF7h",
  "key29": "4UYJgiofvXZbp366hYhG3KwryQyi5jFdg7wGQiRev4CzsL6e5d5kZsC4ch8SahtSeZjCemCubK1dNxFCefsQocWq",
  "key30": "27bjHjt7uUr8b3DMxKFJh3GjByndrboBB58VeULs5FJsaqPzAsoRiDSTCsaEiHdbWJZ5rsz2zjKKcWhxf4SHxxgV",
  "key31": "2YrawGxbTyi3LbHExpqdhpibYraJKaMdAq8RxPFfTt95WyC3rrTfpMxA1cSkYdromZGPXvGy8XRvGuXDDg1iJaY9",
  "key32": "5ipWFbA1yF1PtREgtucpWnTX2byn4spWHS8mpjpPhyViG3ZB5P5Zhe9J9vVVCm4m9gahBZg8GYLzUt4v3qHcPZyV",
  "key33": "5v1mBkJciUeJRpaNge2scLm4rTK2zNYJi6CXMBqy38BUoQ5Gzik9mdcEaCC9ejkdHgXiyruvF99V2tEc3Thphbjw",
  "key34": "EECXxLptLJj49rxus72fC6pXLdQ43QrNLuczrKUGGdgAhH48DkZARWUdGHd5G39nQKLsLwo6YVw3y2TTk41WKfL"
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
