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
    "8YUkoH4PK13PU6HpDG8evxz8aKK2Pt66nYRaVxrQwCMFKAMR11gxY31fnD9tcBnhks3oHJmRPfCSThBmhv4JrmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Xrd315YA48RiLibXB94d4nKFtYny32Vy3UXGX2ivWAw8GPR9qUayuUqyG6ggKKKzyJTJBP5ow2SkbnrYe5TJDb",
  "key1": "VRwai1ZgRYJxjytTyy2rRC6kq5XFgjcW5cZ7tNf1yHA9nmztjbR41WFcra56yk5qfXNtKhKDr5dGR9FXAFnHzsD",
  "key2": "4cy2phcL5BNLXi5v6fkkERf57Ag5LAN3QM6ciUWWJDxtX2E8VXmoxjiKCXmJSaEFyjYAZJwbq2ehGtT46yfKx1xD",
  "key3": "3W3mxQSrQckMtJ1TwdMxFsUSjZPgLZvJ6BfWcmpXkePrKEE2CDMERP9ihCTQtUdFunhNHcmaP1trKC88FngyJ5KK",
  "key4": "47B3gqxPAbMkmYKkWdifyxKSpfNKiDUJ57c544bWbp62ZdD4XrtCQHknGd1WSnT41phcjnNfyLsRxthJoV1BTFvR",
  "key5": "4Qq3brUYQ3owLrPmygVox6KSHQx5F7SorsrvyYoVUn6xDG9kPjQymcNWufYaSMEjTWwWNMk9CAnbvjPf8fD2Yrbw",
  "key6": "jhnugKAsWqVEqCKnHX2sfGdjLebQF1zjuTe9MugCCUv5DfG8tQs2MYHpV4GeCZptJAC4PxazfjMtBP2jb4fSspP",
  "key7": "tMuh5eynZA4f5Sjh7PQ2pSUvWrkLsSGYhM5zKJHMKVhkox9oyEhsENkZ2VdbcxHcrCdrCrBqcSVjXsqLFyVYuHR",
  "key8": "32XnuYD8XXk25Kw2kM1uYCb76CxmdoZMAtpFFYnNEBE5Jz2cER8vyQCDBtT15CvScBuFs7ziagAXty8G3xuSjBkY",
  "key9": "4DMb4msbTuXHAH7jpjtMgiGWwguwuHTaCc1hKgbRpTy9UDQu3warVcf8C7sDZZQfLztEjRRD24QicpAr18jG2fNe",
  "key10": "4U55pMhWvebfXPq5WPD2utys9TjQohhxp5GBtiLuLUhLj6XzFMPnhkFt79ktLn22ABkPExWAjnFTTKRYGJ4teZSx",
  "key11": "3SgqnBWJMg52xdX5nHXovwevPw1wBZTVHeW3TT4AN2Rmrkg1XiC84i9EierSvJm5zXzhuJBo3BEbM2X3dMkRDj6r",
  "key12": "4K8i5Hzqpsk7UBoDk9EoDXyryBLXz8PeBwJP1GEqLVzdRfVwFS75XkALNSMaBw919qt9AraLdZo1azv9VKd9UdKP",
  "key13": "63bDqH3YceiMiVqtPQcYCE1TcZ5SpmMUqXTVpfeb2vWCY87eoivBYeaAL6GsarYyexDQ7LswmwgaBYXGwd18VurE",
  "key14": "5UpkpSd4nAURdymPnyyPGLCWa9tbfzKYAvC3cWPcPZgrYb6m6umKoBkqzzjQSbstKf5ZjAwCd8jSiMy8hNsUmbnH",
  "key15": "3x5v9PZNEN6tfWZfoR3PGWuFdXRQgrH7pQFtyi5A6tpQTg4v5FGkn3JdSPbnNqfpLP7668PcVwWuG2o4u2xwagbg",
  "key16": "3WW9LysXUuFkLhieL4sEfF25jbkV1TQMevgzz6G16jLz64egs3yhm9ytw3oFcXFkKGa1vxfqa2voGAtLCrgmABtd",
  "key17": "4wa4tQks7e7aGmkpcrDyb6rC1GDK8mWgobBwwhrGBxJn78aJmPSQqooWFqEK7sgFJC1jHFAtePUwMJARsiwDDcWw",
  "key18": "21u61L4pUs3Wyy36k4u9Z8GConM6JUPDMZGW5kdrtcCtT5dDp4gjeUFZLGEQnxVyfMqwxLNqejFU8nqgY5PiAckK",
  "key19": "365Qx49X3ibkG29euMVYFRiTyYmYmnL3xN9T4vwUmk3L7SCBKJLxDqCKNDA76F4AaBchcNw2EopCUNrKgZuYqiLT",
  "key20": "5aiifjL4waeFPdNbK3oJ81sDKQF3tbFG1RBrvB9d7e73ijCQHqVYkxPXDeHK3Q9GEeSVNdF5puERKoWpByeYudzv",
  "key21": "53TBZTrNdRNxRU5oCXAr52ejiaZKPpLhkkYBkE76jELHFEBto2tcYtcooPPmZ2J5nGzNFH4dbRaCCP21B4skvr2D",
  "key22": "4DkMhCcEK8NCxLU9GEp24jMYkiqAfTQ1ya6eSx5CsHsUDfzHLZnWABSaFPPGooqUxTRVp6QqNto7qN3QugMmbVom",
  "key23": "3a6B2ZBM1vymdARoPEZndcGgTAT5SYE5N4w78BuiXNYmDszcHp1uB2vMgfU6dFp9LeoLN9N6quVHGL5Zfddzp6nw",
  "key24": "61tVWr7Ae9DhTCNUDUgRAMKaYB5vbmXEJ8Q5SVKUXsVeRWJA987HHctfGE1CpjgD9L2kTmmyeSuBEas2pRvYKLue",
  "key25": "264P62kfVt4UjY6gDPJnABdKC4TxnSS6wgmzhWSGtKrbUDG5BHSdeJvJArSrQGMRXsDzmFSVAcQBpqruBzGSNNn6",
  "key26": "63GJvufoA5C8SmC7CmznaQmVgVdvvFU8fjnzXT7a9cRw4oPjLdBxfAx2WQg8VsCfqBbqg99C2n8JgEjQsif8W9fw",
  "key27": "44GzmDoHP9hDr8pZ5koKvMEJTaogyTbRGSJrugChraXaqoB51q3KcTiLpv43Ns5De5bqJDQtZcjPZZ5bAZqGosA3",
  "key28": "4mRfZhKZXeUDka1yrn7XBWJqK9TaJj2Dx1rX4YAkeDuU5Skft2Kvwb3N9tcyg5P8C7imZkcroYPhhLL3JugAyEFd",
  "key29": "bzPHYi1GQ3xHdSxCy66stjf8yPi3Ah4zJ8pLWmJDTGCJKB35Uy31jBq1riAsW8RtHGVnEr5MXPpeUqqK6uhxDKw",
  "key30": "7z4psxXXB5L3UeDhNv54MDuBehbEmp2yQvG1aY2TN5kfCcZeDVxV2QNf8R8N7CAs6TL6ghXoShUAgYTB2dcuBdH",
  "key31": "2DzBcpsUus2Pi7XFzQq93ijy2tpZ9cQXNPvQBPM1KGJtx36EHdnTYZrnTvt7hFsxcEjea3f1NVBDdMfADs38GFzr",
  "key32": "kFnufcE8CWq8TUmb94xEmAhpeS9ZHksUiSUoU6NazqZQiemuneALxx2W9MANS828qnEddztWEYbVUMCu7jCWxUt",
  "key33": "3V73Qid5t29DPoGo77MwKec1ePbQU5TNs9huZn3k7B3Yzn1tBopafxDedZJLZLHE8iKRb59B6ZNFLgBH1Xf4B65U",
  "key34": "4bm6D4iTWSs41UxTbAt1HopJTH4UY8dbfMkHZeUWgtSWjQAx5U7CfrSB6YnZQocUBgPV9Nb2m8hDpfxrAxy8pyGr"
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
