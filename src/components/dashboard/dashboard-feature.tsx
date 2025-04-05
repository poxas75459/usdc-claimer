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
    "mykjmjSCYJdsMWmZ7vFd33yPBEqVtRSijocVFssyef4LP7LyrtM5wtwfW2d6fY6yHh9jogc5Jx5bjRUAZrp5EmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sVbjTVDqkJ96WtySNmKTYQmhR82LKufEBRCYaqM2a4SVPWH8LYVPDGigG6NMshP3Wemx27zJkqQUT2ESi6xGdYE",
  "key1": "5MtncUdqJEg6hSpL3ZFN3cn4ZdEakPhgQFeWZVR3Z4GUjQqXbuse8RNG1bZNySJpmxHnmo5t5nvVjMrsNzTnv6kK",
  "key2": "31CnZzwCKxHLkvqwaEg581xA9jiNZ5pmJiXQUB8Xk5u4sKQKydRL3WNnKUV4p62uA4qVU8WzBGU1FqenhwyjEaRR",
  "key3": "4PWc78QEdbSEgx3LSniGRS367ZY9hTnRx5fErrRy6YZjZJZ1n2K5g15HUYtdg12DHeoMntbarp6neWamh92kSVhv",
  "key4": "3uhnJxPyw47M27VDmXuinS7MYtmPaWuCHagBm2w9dHv1qZ6DiZREDeZEFbp9k72PTcYRGVy4Qfk2oKvGscwZQucT",
  "key5": "4Da5zkGv8Amm8fUBR4F6vhdUjHT26u9FauQmeKf5BUDfdzavPd1xpckZ9bCjPspwafeaQtGvR1Nb1aChQRV2xMuq",
  "key6": "5bKtvim4mkEvH5RL8JbLEnwEKjmmetQRnavkBgE3yJqTvLQAV9QqBEqDZCbk8ZF7nDC19tkVvtKp3jJ5ehmjWvJ5",
  "key7": "NdfYz9xZFs699nMPG6kiCmsZfaDaCSUm6pxXSBi2E6CMfN17rxwFMJYipSHXUnABczrMempsa1pLXMcLHgP3vdJ",
  "key8": "UHRPzHo18rDgQKk11n8sFy7ShisMwKYK21vzJYVvFfpGo66Ljy4nZDxaCvDguACV7DupjoYCh24N2M7vJbrNrGW",
  "key9": "9HY1R3qsovcKUKJ1K2xaURMKCb5NUkoj38xoL14ymAvVVxDbijs9reLFDVenru7y9AkZ5TEgFneaWU44uuos7t4",
  "key10": "2CMpTEbSGL3NTUv856ALCMabPSGmMxnXmz8SeBHVVh11iMniPoJEwbECBWkC75wjeSn4zrKA9FjuSs6smynQsSnF",
  "key11": "PnMHJcZg33PovKf1EvRDmckMYrRqrGTrN4fn7RmKoiTkWUxAaaX14bZQcVsEWkj92KPLkvgnheXTdXvKexihUnQ",
  "key12": "5ZED6XhvuWbr1vUfyycednFqECjzBMqiL9owxC8Sj91oSZ8B92itNbnD8HMP1SmGk89x9F5AiZrcvmHUUq1Lghoq",
  "key13": "3ceJ5VzVcidhCK75mVjrKUQMQmXAnSWt8kuqYzaf6A1tR7PqFD7NHwHeKjcEMBtyx18mKK7Yx3jVfF7oVMDS7Xyk",
  "key14": "5fT78rseEPwHinFK2mX58vcZQyHa1LbsG7xUFgjJfaCUALmfzBQRF4jaXWBq1HmAKXHTwfSDgcKc4xWXexViNHXp",
  "key15": "29oD7mKw9ENG2TshzPddJedM9AP9W3mVqL6P5NXVmYkFqwGVob6ooGUgCbSCCP3K38h3rcaNR5z22NHVoRZPEZUp",
  "key16": "5jHwjjqScmkbS6hUeLkByC7WFxTcTqDVRDhPF29x4tNW7GLs3qDrc35LHpUkqUx9usWdXKaf6LcbKZY9MGFJA5gp",
  "key17": "2T53pVT6rsDXo75nM3ryBgarPZCgNPupWLqD7fG3jhMbT5Uv1PttATFaaGxozp3xcpHCKFTNxcaxwFH9H2vzefa6",
  "key18": "52mrzm6L1mwwezdJsVC8KZ4u6oQKmp8bDTAwFx6ixM8g4YBRtfF6cBM6d8t2Hqp8ea6ynwsN2ezRCTai5kfx3BSq",
  "key19": "3QjutcFkQUweumXoB4pedS9Uut81gsEAAkeLRGNZrzSKby4Nu3fXwTaeYb7sT4jm7LBGsYLMcPn6L8L77ymDSRd5",
  "key20": "3gDA1Az7YEms2ez6Tq5bpp68TToVSz3Bb5nbDy7LfsmF7xFUJb29FRyRytYsS2hmJ65UHFwhfHQmWa2JqxkbiDYo",
  "key21": "4Bm4R3bdZ2uukcVJ7CdtSXRntC8tLbJoksFKmZnFGdzGMLvnS7WWhFAYU3iT8xBHiPSVVQ1zTzkHBpDipmmcVGHn",
  "key22": "n2YAU7TVVgdi94bNNJae8NEeaEK6G4LoSmW3D7VT4djivX22tXZdm3FmPyoqgfg1wWqerD7zFZBAQuDHsa5BE3G",
  "key23": "3LoKDuNqgLVGzS4rwnNGkhYXQFaySoLgmBmxcaxSvLML7LPbC8PWs6t3hZWYQjEp8hHGzwHhVPkGXpYbRPvogeyp",
  "key24": "32fFFWsTPRCd5VuJqiXiWCvZ3iTWCKxwibEs3SR2cpZCSthuf3tNxFkAYBxjjSiXYivsJonjjRS4EDD8G8hV5aM5",
  "key25": "2WhSCMEtXMNc1w3eoczJPG749vRQG9CaCvB6uzKzk6AgYY9WEjpbdDRoq49hmGgfidKtFnCRbMyz9qnBqHpvbo3S",
  "key26": "bWv1vUP5Te1rFisqm9EYY8Bx7QhLn7BLo8NPKXN76J6X26VMrKHVfTPYPVw4RW1cSrodPvuTGwzJYDHeVKJDFon",
  "key27": "5dyASjjKBLH9fd2YPFRntUi4ZCBQtbHfWXsuquiq4NgxZ7N7rynuc86mMmQZ8GDtKBcfw8RrnhfN1LE1PsJgVNvJ",
  "key28": "2LZFCutW92BvpGsseWqwjLQ84pGakG4ZQ7R7GVrL6XKXKfr3mfmXU2JaeP6nc7kynB9NmQmT3vVFfoTWwWakaqCY",
  "key29": "3sUyAVBnFfjDo3G6ao4aFUtRTXRfzquxHb9mAV5Avcn2hyZfxJGaC6QsHvcWAjPdx48M48avZ2Mc5FKa7cJowr5S",
  "key30": "BmQc4FNgskNuKWGkLUWB4YCuShCcebXDWv4dy6CKYmHhQdT5JDBzcFRzig5esTQ4JKWM7PDmutHuzoKafzvy7DY",
  "key31": "4Qk4A1S5Pm9xxVXsHvxNmD3ijY2whvS7iFsvpAZRJUUuXV6ag1SaSRje1txv3wvGQRvoH76UVV34baZ1aqUpK1D6",
  "key32": "38JkxC6m8jQdHBbpGY32ipxfom1PHFzaDkTutd1FomDq8eP6DAEpJLv3zUPgdVKSqnNz47e9XUfeGh8RCyBTeiaB",
  "key33": "3VNCvzgAXkp35B4MvuyzqcqCX8kxofLiSob8xM2vnad3xQaHEuXJARoeCjGf9o3nNB2AjFSzT8FcBHtqjAF8Yw18",
  "key34": "4pFA5THP3MbR1HT9btck43i4MduakB22RtUSkfCVQiahnzbCKT1osHgMFfL1GEdiT3bBZq9CBqL5p4aXeKoZGTJu",
  "key35": "2pqcExLgS9mYYav6Vxj1TtBik5NNFhqkW69nCWFGrzQu2yYDfBcJf7ye83HkLci4ykNrFiz4LpZzH8vsJfqb21vF",
  "key36": "3VbHE6S1tzSWCjw8LC4R6j3yLMn1gxxZA3nTQKM7iAddFLzx8wDoYFC4uX42BXRvWsHvDmmqTPt3srHgyZmTYCDc",
  "key37": "1UXUpf5ZVUh5ySGCbRxSUX59GzwnVe1EvMdJ81N89VLyL1CmURMMMSgbSoA9mMDNFdC7HXAvN4Lym7m7o8beeb",
  "key38": "4Ht9FaVWdB7kXkQGxYkUEVoTfQgwW6MizJYhP3XippVeYtgCJJQKywyqUnaibrfroopqifbjCYi3zQoqsDAyT86V",
  "key39": "24jKecJ6AUp4UMddi82NTmK42U7SxwRsgvVWneV59yHGBDssy1rdhBqBJBFKzMMrEpp7V5ojrTLc19W5vcMM5beZ",
  "key40": "3xnnUK4geU6MsWxgtFWVAfuHV5QXCNaiR6sTDqmT9xBMW46YwToLmy5HivskFJN4RENKbavWq1WFiWen7FqXQ7GA",
  "key41": "4kYZ1NwbvGFQB57ZVSdd84K35E57cc9tHptHAtpsRjf1Z7PFp8X7t4kpUb8LctThEpt7L8oTzFN6ecGvb68okLTz",
  "key42": "2WEQVTVjPvN9PtPmAvrJnx9XGx5ohkEnLyHybRsGKfxMHKVq1bfgoHezKCJ5nYZoo5HzebQZwYw51y4ApUfV8kEn",
  "key43": "4E6NayBM52aHkg1LNbds5YtbsqFjoAEYCUMznvubdecAxfgjYamvRdwu7gKffpc8cuV5VRGS55AM8p2todERycJr",
  "key44": "5BDdNvSUoH2VRPqdrwYA44hHTLSyM3HkHajAo9gP8MxXgZcGhz6ywFkLVBnzfQ8omPdUmcfXpUuDeGMe9bht4M3J",
  "key45": "4pPvDJaTEMmRxTcSeZhZTWeGy9EYna1HDnZk98YiuebUtvwhfD3vrqaezonkQDT1fD928ZWr6cYUff8S5oPJ85Bn"
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
