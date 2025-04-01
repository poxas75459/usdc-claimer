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
    "rBho2xqgJMXvCeK4u8tjgmYdhKMuahd9jgHN7FJKfaRBVM1wZoAQn49RY4JWyWXZ42vBcm5DwLJTBsPrrmsSm2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5osxQ1kbXAVBUrx4mPNDJhqGWendqDLxioJTqhqkzcXv7TFxfX3xwkuhvz2bF2gXE16WGz8YaPtMRrJ5ZqTE9Qh5",
  "key1": "5aihSdVMwypF84KpXNH8QNLX25mPqjTRvgtmnWfJKV1yxqWeQVajHNx1fXaV1Gv7mGBSJiZpvD27g9S7AaLtrn1K",
  "key2": "4uYcjv3rjAfGmFwuh81UWwS7QgHXt5pSdQs6ea3TtBTHS3NRaQeFX4Znh7qxac8bVs4SJixVfUpEi3kTnJjf1gwz",
  "key3": "3XarHkGsVG1K9VaaFVhR73v2ZGXcqLF8UEobTU18mfDxVGFLZReLgCPjKG4jJfayUz5NfipKUiFuJZXAFiWhLqwh",
  "key4": "5eYMgWL6YyoxhV5hu3nqeKmdnetGimGboZABLc5X28wS7KfHnGLGj1RwvUpNihuiNyWXfgZCfvPzghqJmF9F3uju",
  "key5": "5RXH27DLTr2Njd3sCATrzr6ZFHvfC97ppV9QUhrrphtXgtE4UjSjp9tbJkkMtErKBWb5x6Pv7TKMw28wNkTj9r7m",
  "key6": "3kmiAEA5qv43XCntLLq8oq5TwtKtpFRqkbgM56bSuxYoDoFfy89PMoDXJyXJLWg8DLC8CaQkjdhSNctUu6Cd83SU",
  "key7": "4DbYnSJYErujFr6Nq4atkSRLgy99mWppQbkGrvSM7GXZRRGkRoTcSvfHjivRYSLABnuX9ERrBkt5DcoXMinyxcwk",
  "key8": "3m9TE1wUXS7XCsvaWREGNTx5Gu2Lf23LD1H49GYzFUkT7EMaHoZrJDNEjoP5cAUUPwLsn2RT1CSA2gDpUKVbWkz2",
  "key9": "4QXR6PnLhtXbzFL8eg9hKvBUVVGR9wtMUpVj3Kj5uteo6yEtKBwrNcVzduppF2n7RiiJEC2nsYzWL7PXdNbV6WBC",
  "key10": "2KH9rdPrMngTpCmmKKNWZzSTq9vw2LuE81CjJ7agL77vYkAQJwSCBUHthhvwuuxcKVu46GfjSEMG8uQSzgsdcoBR",
  "key11": "4P3XwoY5FoXqPAcAQrTweJ67JfKvGQx9N9oEBP6unSyL52o1WvMZuak96FvPnmUMnbuJ32tStZQQXC753hfXa82R",
  "key12": "2VriGXKe3YD9yguRS3wzHCQ5EX9PoF6cNYFZQGJw89wpC5nvrkurTBhcmSEEQJTKLH972Em1nx3e6m9S49a1DNiB",
  "key13": "3wPZ2HU1KUGbSNiRbz5VTvhxA1zf9Hinn8yPi3A1B1WfanDt574kD9vtZHeSZYkFdv3VRMDXfP875y83LbhBZXUT",
  "key14": "fj9i7PhPdP4rKVtXa6WYgsapHwJCr135zeoCfLEQNL2tzWpCpR6F2RDybk5qUDEHa22jyWfmM8o36tuDhN4i1fh",
  "key15": "4xvqejRg3G6P8Fsq77zg7RPakv4J4evMmir4TxacdJqRm2EDRDwRKE3whohd4RQSvW7rVYoTqH7dHQPhzNHGjpJT",
  "key16": "3oqsTL6hLAs1sypyo4dyaSvKCC1Gz9F4kuWgc27YfxFsqZZ14FFA2eAZA6gf9YV4GGJUaVZbMVtwE2TF5SwJtAgZ",
  "key17": "5obxi8nyG3kaJrkTm3wKd8nEGCLLvpdxZfsr6JMUNBL5VxafzoEVp7GBeb1oDLP37VAs7FfgYuhXyx1vfzzpY5Cg",
  "key18": "xHPrMSvaowE48NZJy6jQUAYWsxQGT4KvBvURJzgMsmDE8hbvwG2teL6BhNSVocJHawC8fhLWSgtCXF2dD9XGGvU",
  "key19": "53cXcxwSkzC5ouQEoZHSqjS4qyfEvsT3ZfcDvATpuRbaBm57rgUozZP8HMhQEURHv8u2NnNTKTAWuUNok3aFcAGm",
  "key20": "mmbxn4axVa9pRyiKQe8Q48Q1binJasTAQkixjVZXwCMVecjSY1F3YDvLTFX1xrgsqa7cXTFmD3wHR2pVLJrShB9",
  "key21": "1M2CHqXiv319dnC3VfJFtnb5npHeGQnATFqAQ6GTR3A7aaPYi41Wmc8bSQpPQ5eWwYqEGSNekAMXjD7u4e8T6vJ",
  "key22": "NoPJEajuWffWftthkCQN4TPTFEZLb6W9ctAQTyAQZyJFHeQzkUzaEKBFgRPVaTXLqKMtkWQ1hTbz8R44WB4PZMb",
  "key23": "2WmFVURFbtfBNcq3oZw4MZrwoNy77ZomodnL5rPAFKDe81Hz4jMV7vgDCZ8tb8pk6SPmr4QyYeKWNR77sxTU9Kcj",
  "key24": "44ymynxh3P5w2Xp4YRcESxuNS8TfuuPHVgVVtqUwby7AGYZr3uSG8pXby7vrpieMBmsjNKYpxHsVnQgEpnauwM5E",
  "key25": "2JWdmqnr56phbKYgdoAyte51DyANfKkegYU29GbVWTV9uP5LBNqYQDmCYfeXdAompKp4CuGYf2vvSiexAvFCfT6H",
  "key26": "ioVzmh8WjxXHwcGEfC78jTYR9k7ZHXV1uK8n8j1HpqRo2Ahe8BGZaxhG4CjSa1rRHvUCzWLZSPQqyxZZ3xvSpuW",
  "key27": "v7PAvTMac2aQiBLSAXRVUhFbQSiwvb8vKFeaP6gZ8eE2q5NAZVDFePDKvKydYu1baRsi5r7jVcRouojmowgQzki",
  "key28": "41WZufknQo19yYWnYP3EQQTZwqn9UVtSQ5U9eDKLPNAS9RHkdS9ohuz146N5byEcZ8m5aqUDz2drZR4r4Nk4aX2B",
  "key29": "2a1dy2iUAGaPo7GckHdFCPBgf61qiFTXF2amKkBPhfSqjweK9WeVLpQBAGUpYvzW8wu5VZDz8v3XPYyB5g1DTtQG",
  "key30": "5bZHtp6YrqCjgn8mRB8EDTdeRWWwPrnfMBeJD9WjPDpU6WBmDH9f1nuqQ1QDafk2nbvraNEVnzJRtRT8Bb7uCPiK",
  "key31": "2LVykDk827vuVp93Jn38ByefPXrfSmSYWQiZ83rCZBuQaSRhmftxv38V82bs2TNDaNchMqHS2pzyT1EhksYAbZnh",
  "key32": "4EsPSFy5pG7B6wH61scbXvN9U3WuTmxyVrBqt1w8ffEjX3FEGCkBXjh1nRMdgRKJedvCoSu5i5S3vumP8oGMNLvK",
  "key33": "62YmhXCMCynsbH1T8NjCLxBEvERRCiiNbknDjtVp5DQZAfWQPX6tqJ2LUuZvZ9WhEyrjWpsdEQuCoCuuJWEuaMJ3",
  "key34": "4QG1cn7H3sVJCCr6or4VJLpPJg4m3BHHSuKQYJK73KoDMXzDqDLSsFMhgnKWHu4BLgLV735LPtpRB52XMLbrVAn9",
  "key35": "2a1sy5xPG98HqtaK7G1DenqviWgqVzaZmwhHv5AWAYhWPi42QNJ8UpzD275tH6mu8K5gBKcV6iBy5rU6XsARxbJ",
  "key36": "3zs1ojpHUZCjgNKVkhLEp3UG1iPv1sV5kKU4cnqhWGw4A8igVhBQC5ymdHFZ34W7enJdFCVv9TTdGALbjGq4pUN8"
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
