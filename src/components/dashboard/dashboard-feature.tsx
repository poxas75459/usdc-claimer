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
    "5t1j7m9bMPeaF1JcBk9dbohUd3PbY5YxiuXjHV3ir5wgmYmihdazbvHKgvaNUdErP12xiV7yUkUnmMTyCBDhU9C5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iG1hSeEh4f24wWbRzAAFDs6HB2S6iXbV6nYC2JL1pPXK3dsTHn2mszC3x4JV5kg2bQxPvaVwvYLis7aLFPCSxHT",
  "key1": "tAe2wWdpQ7Bb2p5C8zci8vwGoWkVpVZ95YAd7exeBZciUZLM6fi37d4qteFHnq6MEHCBBYRruyGxBjNnmvnrXti",
  "key2": "ky4jch5oz1VDFy9ajeEchchkiZjQ4zVZJJYdJgMoamXmGKh4GgzAXkr9s8TGzV6nQCUw17CJmMmREkbS4Phsz2n",
  "key3": "5r27ynuf6nRqvCmL6rVYwEgeiiBeYt6z2HZR1QWczDEckUPPq7Hzz1mAmGepgxUG8GVNUSHi3AhUxqERE6tdNVpD",
  "key4": "3riENhQ33jZjcfCYPuHLrecc4pD1EtFhaMPKHVdk5Uzju53RgV82UPsE1q7nzhXWRWNVrbmTkKHPBMwaqyZGSsnk",
  "key5": "31HZkV83T3NfsSNSWCAd1VTuAzd4A2WvCZ4KNsCUMPVmeeyJEHTH7LoVJ9Uo5HmMMWxvg3A6X6NNtkGxLQ4k12Fi",
  "key6": "64YtBAy9TDFK49XmjCAkFMn5mNfx3euDesyZNNnTkCiJuDQRfBNLCx9L4kVtBkGpKu21Zw5jDCGTJxw5SFwbz4gw",
  "key7": "5tkgmpDf4GNmRjCvoAFFJkaDNsGMQDchk3M9KxYHio6bBKX4R35J4WuM4wxVDNSpYy1sdqwE1e8MbABoemBC9ida",
  "key8": "5dn86vFcswy2wQ6fnFJNChTVu9zjyoqmHhrLo1dgh3dtkS3kaoBT3cTnFgNSw9EdKfAbtpYsifdYZKFxKZpU6iU2",
  "key9": "5HS1wtwbaZ4X4CQpmFjySrkvRLAnCnfhke4RVUdYXLn6bZPCuavUcrzLNwWfacYdN3Y1tzJDwHSJAvKkYtxHhjm2",
  "key10": "41kTWdjraxsWkmscGBZ7JtS41f5Dd6zeFNoeAfzf2xYATvaGak4jtBFH1Udr6214N7GvBYbDDvMR5A7KCRiGdTkb",
  "key11": "4Ta3BrTsCUAYYDUipZR2MSd1yKrH5P5NsrfzZ8C7DyRi2ABpVx2CPfyX5vS8ECBL9imm3cYq8aWywWSQm4u1mUji",
  "key12": "7c5eqKhsyNAUBSJH4Xfq7jpbricMuKZgM4j2cUU13EBVXxQQzU2egcG6mw9gwyXRcFvpgkPPLKgNrjaoTYsJKFi",
  "key13": "31PA68XAd9oa3yVfFTRyEvpMFR6qRuBzUhVwmnBzBnrwMM7sXghEetswpUFSaPACK9gNnGWwkSFr1cUD4MBxsaKk",
  "key14": "3jAFuqWm7GH7jtT6pPtxpxp8DY11NQTH7bb19j44iG26vts4YELVdbKkEKtqZ8ofxdASMCYDBjYTcv7G6xpbGGbh",
  "key15": "2KCEmiaveJzNn3UH6KzoJUZQGr6xNX2LYsdppoDvctideMTvJeiuxwH69gqVzcGJY4Z3ucaBkScZKRZ2A6GTYKCV",
  "key16": "2it2R6GdN6xbvjYNnRRLoVDLvtrSCFgegbTSr2eDbgvrFMDCPTVH2xkdat8XyBsfqefVHGmgzsWhmfJVzm9XEYdD",
  "key17": "3vgtRfkKkn8ajoqKygnDyTSRDQYkhSNPXG54wDxejBTwjAGdtgouRK6PV37Qc3NDbdz8BVJP9b2QYTB9f6ZHsFLo",
  "key18": "4FPC9uZwUnyRH9wVkvGdbpNrbh4i1stnd59KrD9HNXL2jHCJHkbyoP9eEbYkX5mUFkKW2kG9x35q17acA6on9NaV",
  "key19": "3dJ8c4AUAWsjaRZ73MgsZBWk8Kdfi6MuUggAm33BceEFdcqeNr9s8wL6mhNbLrgB6sbTTPwYiwVVkdCZ9cnyujgC",
  "key20": "297gwyMGwURn3p3ZYUV43TrBrJhEHj3X2HPqgK5cW1VyTbiv6FkqgWCLfLs5ppgPbcsva1ZbbphH1BahPUtSNuQJ",
  "key21": "JNHdHGeSrCXZ9EbPvZY7nyQvZCQAT7bZKHqe1emZ7S22H6NPEXKrQsBy3H9TQ6w83gvct1CgTL39pG9m8VvysBT",
  "key22": "2F4KAxsskEGf5HfDxaPYxDemjxozibLM2zmB8aKncrvK4x1S1c5MkE1ntW5NfM1btt74UfUgNrUTUptdmix1nPPC",
  "key23": "4s2gbTr1krPeNT7Dk7oc5AnpBrAhANZ3rVM7sRLsvw3ENP2XhswKWRX1nX9njeUfxWcxGSQFBCjM76MtryKuk3o3",
  "key24": "3EyhVGgqVjK71CjtFVMupRvWZxkypKFoeZbtdHBBXqWeS9AG84ng2CHZk2ZFUtzHPVqS8okhkF5qhyrWLmntHWeE",
  "key25": "3zocHFssV2jw4pEpbupjkzgbmBDKCzXWXdJiQabgu66BQFGr7ABhnkyrgng8hoGSMUsxuueuH6qTydQMhGtVNKr",
  "key26": "5STsY94KaaKQLmAK6GYVH34AzoZFMVXgrdnW5h1E5kgeNTru2u4EGSB2PKTkDgdKPDtXzaJgXFuv7Ln7QEtZx5Ce",
  "key27": "61cbEbCJRccpJYNCqmrbArqX1GiP742HAXiyqZbwwF4UVxNBFPUSx9kV9bn8H2v5rrkaA1hJghHNcdGQNJVaCJeJ",
  "key28": "JtSYHhJiBxfMbS1qMR1QvxWe1w2XMVQPfLwKjv2bkqCgNFE8q4b67DgH2i9ikAxmLWXvEVKox62YsBibaowwLi5",
  "key29": "5s8ndjCcEqUk8Fh7TrQDfYW2Teq278inJ5nqAmkDMw78VTw5tEMU2ERbXyjbYxXtwWdQYZkU9aMPDo8i6VAKsB9G",
  "key30": "NQ72nLyDEbimfHAkFMAU8uQVMWQPHGzRkJaZiyweJSmPeN7SeKT57Gc4pK3p5ChVkBRqfoVLWc8aam2SxpdHoea",
  "key31": "dqvb9NBMGA5JCQcrbYmTf8Xx52PDoj7REp4ouB2LhYqjtwzyJuxnur6CJaumw8XSWkfvuL4MJqTy9xMmCasp29x",
  "key32": "gdb2PTRN8iozGhjUbbUXqGanzwsEFjutJQB9Agp9HyCH2J4GosbGY8s5MGq9CLwDRAV9N4ZF2oSSAKXCu8LgFia",
  "key33": "3fppVcSiWnQdATS4VEqxfX2jRbnHPiXm5AqVyycDoCnHwAVehPg7cURHos9k6tzT2nGRdGoftwLb3TzB5QC93qNq"
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
