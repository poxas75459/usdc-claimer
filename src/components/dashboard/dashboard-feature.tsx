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
    "ghZZYF9VeTxmnK3eMCBGq1rV8uVgHPyhuT6svsEwYQi7JsPyyKqXWxZfvvFmyrxcVbia193UzZLVsqK5XMrL14X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56rTLEkNhJQ7icZfoNbU9hWNk3DPfd5n8xUfXwgpWc2SNNA8xRJLmgzEAf9VRbafm2rxakxEe1DcTQwcM4VH2a1s",
  "key1": "5CofB9Hp4UCTti8wfhXMRp3vkDrpQjHtnPPKUxTY3JWBqUSdHaNSXTGBiY4g5PLdAo8xsoT9XLWS75CvTqSt16HS",
  "key2": "3w8WUGSJqZqveYa8YfS3eajNN7vm6oohekzwzVTkG4bG4pPjv3xYLhMWbCEJSFMGvt73J39XQzR1hMsXcEMD4xsv",
  "key3": "5AZGCLCFPTe3kpHvtZx5azG3u3oM1H38jBuyZobyN9HGhpz26hZEyQLKVGepfVL7B6CZUoY6MHMUbrJr9KGAD1Gd",
  "key4": "4o8rD4siZnQuKzNqaaN1wTUtWkbwkZMQAJF65PVMKAR4ZqyLizVgFpQFiymgm58aktkXMjekcJZfBLAwwBBWZrPm",
  "key5": "3UTb2T1oQ3B6dfL1aRhdTvt7DxFvYpXSn9RkChAYrxxzzyg3oL5zxxyVWaD5FwwHEUvvUivTYaS5pmCnKzH3HEDq",
  "key6": "5UvPYbq87LLTQ1A9RQ1Z8TwrS4YqrTRJuMtJ4iRiNDqHpHjsc1MtQk2z6ewQjqWKVeJZV5uRhNffVQA5kF5HXx7y",
  "key7": "2xxXrTymNmPp55VsK7Q2C3qSVaA42bm2g7pEYWjD3vFrpiLpxkbTiHisYjkV7nqnVfEmjm3TWA5ijDeJVQgBaRWj",
  "key8": "EyLd5L2XZFkCgEFZmRuzwpyMW7GdYYpkJmtzoLNBatPYLrNrnZ1PKZgBpR2eY9WK5fUpBXoRuiqJ2DSSA72TRDb",
  "key9": "52YPvdJBQW2oC8Y8EB5xRXouVWmW1h8swPVpfypVMgbRPJs5f4Mii65XXpnzdKy2hoUL8ASjBGZETL82XiKqQvST",
  "key10": "5nptXyzpQ1csuMRmirwX3ZSUhfx91eFgAs9rQQC266h8Qqo2RkdjW9PjHTnK7cYFgQ36UNgoxQkYCUFw54Xeda84",
  "key11": "5R3HDQ85mCixMrgTuaQZ4Bkp7a9jGoHrd88oqGMX4MLekHoVZcpBQ5ZsNLFKfvU8hg9geEBEPMRMSxWLchXXiAPR",
  "key12": "1i71L1icd2Hr9HCVVpX1N3JzNtMW6beaapq6dHUf6WzZ1Gn1Rp9H9L3ZXJSWvvp8sZtwk21sunAWLzAA13raMmS",
  "key13": "27CVJwuQjdpkJwR4tFtx9L1Ua356KMzAdhCJnMqGyQtPzj8traRrzkFi77zcpvHcFk9dA1QE852HX3xnoDy8JUQT",
  "key14": "4ENW6QzQjbb9ZsiDeJcDECz5PBU5XAgbdVTAqjqGaJ8boXkmmrttjUegZ3rA4wX6Ns6hnSG4uHfquqPUr3uTrysF",
  "key15": "2dZdSLyseH3BhL96xbpvPQy71mcyace4PcNXGrtwwrW78DAZZAENUHHnm2dAHMPDM8S5M5VXwzkn3GoMGV6Z3yNo",
  "key16": "5sGedEd3UVvPU7xv1MQzQwBttoNSTSUhehrT8PP2nTvQQYj6usAybTP6zN9hTgr25YQVJjd9eR7u66C4VZ67SRxz",
  "key17": "4xiRqonqWkpKUXaAu1WbdhdjUzPY5yrbwhoFs65me9s3DcAkAYXyQymnvyGid1LsiLvQUoL7rKJiAZVFtx1msCC2",
  "key18": "62HDM2MXGayqXMEQVa6VAedPZAsFofZuan1EENrrYzQMQ4KfZpT6x68e7Deo8wiE1yweQ3SrVnZTzGkcfhp7XYAX",
  "key19": "2zAvAxT9LMeCKDCCgYgkWjQadiW1E3bZ7oJhEYHLsL1dtffcXTsxcm5pzmqtuYPbGpnA1QFgjEc888VuVY2QU5WD",
  "key20": "67iNfhcsqrMtbg3hPPMWrtAKRHWpAYL92jt2ioaTqSFW52tZZxPDE2KfXmnUfEP8mjSwPuLp4twFrk32dFVsNV2X",
  "key21": "3tscvWSRtkHWccdBr6axR1o6Zs6z1yuGewx5Bwm82ACMe2VymSzFigLoGcpNsdEiqMoRAoW1suNbQvyVqqzP3iFK",
  "key22": "5Ax1aM3LvDrzVyd8j5oEkGjaVEm6XS3f1guf8pBxdDGNxdysFz9ffLCRLJPXSg8yCTj71f5hMugbegs9ANrqJ8T7",
  "key23": "5B2qJDAuPSgSPx9YP8Ng7WP7N2JWoV6rFXJkckFkDeRWp7Wav9jRq8NUubrkDsf1zKApXscM7Bi7jMDzbUW1apTq",
  "key24": "rArZkunpxXX9BWL9RWh1A4ZZeQdKF4b9scgkNaq9CpC8QmaYpDVGskAuWdbWWQKRrtfrxskwq1o7VR3ccH7YeGh",
  "key25": "3Nu6KQJSj9jBhZYcyrkr5kvrY7Dat2yfYBjhCpTYJEtoZ58Y2tyv7wQMFMFvu68ddYbpGD1Ci1aawG8p4JgMKBxx",
  "key26": "K1Ld1AMAJjmTZ7YQMiczbMy43b6umGf9Kr6pRW7X21ZYwY3DjQVVFJ527moMvvWuENqXrhq4CzqRVQ527k12b6i",
  "key27": "3XDHwqfUUG25xVB1Bq66VrsWg2hmTp8vpUEcaGjFwzpJZbkqwPJkFV9fQikmxPdLZLBT7gLQdWCubFGPdxfyY2Yq",
  "key28": "2z9tksxCzjQSmd4BfLDSwfqYUms2k7vXsDRiAjABPGfUjw2MmTKagSVcGtahgpEmHcYVYa5ZuDf5z1YYEBTFZxTo",
  "key29": "5d1keiAT7nhjMxntn3XMSHii4TeM66L2MwrBtBHgBEyChYqHYLyCREsmqTftYgyDSJANYjEv7UaNCohXNmGdPjQT",
  "key30": "EvtwTy8NemWrB8e7K1rKioF2ELgTF8hbDHmnR6ubmCppdmP7jfmsELZvKJ5cGqoigqxfH6YyKz1JWV6MNqJ9tK9",
  "key31": "38Bf7o69QmA82pMpUYwTrFfkp4H9gcDY5Lwcmsu17jLY7Uq7WWQGSa4RpVsSncbxe9L2tv8fLiWS6vPkkv9c3xL"
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
