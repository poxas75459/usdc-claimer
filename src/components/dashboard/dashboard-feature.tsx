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
    "BTLbKFhhVkM7BzZFrdMHLJRsqogZGdfkxWLiA2ymswrccEArcedQXJnp2cJpvBnsXyN1bSi5g3CtKv4T6w9sqcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DMnErzvLrmt151p6nbEau2g49bLkxNa31PWfU89ovAGBXAxPKF7QtvV1pSodr1vvZX1tp7DNhkgWEYBqohZTC6B",
  "key1": "4TQdnUQdLkDhFVFRC7kVqQsSEnX5Cs1EAJyiiDDhWHAHuMUooV1VoXFoQYd6iuGj4hHjmKStywCdBYfoFLeK9G2i",
  "key2": "5APbcB1qVPtYSFQUkKyXXEhVoGCDEYzBt2rzcKMFpQu75XwFQJHSbFXpmUnm3niu1wMpDUTGV9wnsG3tMMM3XSvd",
  "key3": "4fMMuJK2ae1KMXrxkB5mDFHi6K1K5hM5VdA55V2Sbd4ruv4JygT3LAh7M67VgaJMnQc4B26mffZV8iEn8x2TbYYB",
  "key4": "5EabhpFiZk4F31XUcRtYtmzsRcSjdkWRYKcf9LbPJMfNbwgJDgUcNsatTBmRoey25Yuy8JhZCvJ4QS4qx6uDcpXv",
  "key5": "3JXXm5qGDLFicCPSj2huayuMb1ZrZXJVbiHXGyHw12RXw2RwJfHF8J5g3Lf94b6cYboAt8dsyLRSfLmxYQGMXbPL",
  "key6": "4RLxFSaDMfFrzFnmEW1Vb6Qizv2QBgSwLhXmBePVUf1Ev9hAb78HiWGUk45Y88X3BSxp7RscEAtBDUZ2SaJDCZ5M",
  "key7": "66pjiKbWgsy2ZKSLEkfD1Jppf2JwYfS5r4KydQQXvSyuc9DzZ5hiZYBKfdfZgeQMFgGSVhNSz6a9fh45R7rPjr2X",
  "key8": "2x6cRB7V7SYN3f7wVZKRizv3z3GQ5wu46QHytjL2noMFcFK9rYppD3Cp2ci4jBWZFAHrtz2oxXM6gaABMSC74nid",
  "key9": "3nPQQoe5ntE9ytrPGdd4vf8tRyHSmKXiuYyHrx3bFeuUBhS4cBp8AnD88Xpvtq1BwKiiij4ct8ooF4xdvyUdsAsN",
  "key10": "29MPfprQRJsPDj1tWNnwKPp3BVhaKwjU8tPsJgikEStVEJ9x2P9pAcTmEcHPgN3Joqt86zMDZrCwKR9q5RZentge",
  "key11": "2cEhPVcVtrspfNmrRHPQmg9TeCjQtzgoQ1oX21Hti2J8FbYizWAChqocXUdW6HEPy3vZ2esE3F4ii8CPyLZ4htdU",
  "key12": "4xZAEjJ9eiaYojixZpEP2V6EM3ozbgiQw4nAmmMXH6GhQTAdBPgh6gY8ebDu17P7CbcTQhZhygor2svNXuf9Lv3C",
  "key13": "3EmL9gfpNoRNkH54kPk6MFqhXnYNtUgDvqUhdoqN44rjZxpEDUsq85TAycavf26tGfGfgoQ1epcCyJUwz29rt9sM",
  "key14": "3uQuisQuRmnhgYBL5bWpbmLkgf8CKmrinke79kQRarpEq2QjeynjagpqrD6KNH2ESbcRGdzkh2gPiVmWQhZASWTH",
  "key15": "fUATwjy9GeJ9wnqFNnCNsQso4PuTgvs8CzPs4t8RvF8J13fURvUdHtJNwPB1GjdjAbnS6wgMy7fDkVPEeeHJRiC",
  "key16": "4AV1BZvQn95UkTSGTvE77bn9N8LGXQ3iVvQ8JW49uMPG1ACgJLZQKZkC8g2MoLmUzdcL7HYi54UtGqmjMjPwJJjX",
  "key17": "5fAff6DotDp2W6saCoDPTRDgc9yGceqC9ptDEAG8dpR7L8q6K9g7WN9CRxs6ndvy2aAA35U6ERrZu5gdgqcVoJnt",
  "key18": "28Mcuq6xiAypEbeQmhrcGW3ApRC5Di2rKzZMiEeizMgCAGQx9BTf8d8AMD3byD8vjEyBTG3b63gi4cNvK6XEZc22",
  "key19": "3pJwBBdJg82QjQm1x3yxh4Pfdtp7KWUQ717fpWqSkmSBYZFL77kbh3sA5yLDz4trZt7tbksoFWECxDA68Q85EF8W",
  "key20": "5cZuhz8ijMXFQUW5yZ8MrMfP9KYFvUqcgVek33s54MLAq9tk1ZJxBYcVBczdFa7bhkBwcKKmZ5nfB2zQ8WyZX6kB",
  "key21": "4oFUWXQHJGvi1tAW8ASMpzYHYmqHJjuw5DfCJfmV1yu1rkbLUzcRKoaHiRT4PshaXUDoC5zUbcYxMo2RfQCmFUVH",
  "key22": "4fv2tFA91aBRBCKsYvUgV9HwMezmrzKRwywVuUP8nTWja58bL2KJsAEPq7LTypSdg6hC3vdNGRxq5UVxnYMtvMK9",
  "key23": "23Q96nkQ1zgvnbEEE8b9of1uADoJjcWw2FsK26bJXh1ujN4BY7gNpf7ELHjYmkipfoC92xXSJngvcSjdmW8z6Etv",
  "key24": "5poJoWowSyXYRR42a78vypCcZskvNix7nXvpMiRCFVXPkhEjwzffyid2RP93UkHXunMp5ri5CA5V55fG6hir6mD9",
  "key25": "62LKSvCZUseqxfQddPzMvZo9Usht5s4jGENx8d5X6gNJYDavTS5gMcLasZ9MZzHi5sqLexAk67oUPXy7iQugnKQo",
  "key26": "5FuXXgVm4UGms5HWUmdzgZwRM9X8kYGk5wkz4tq1wSwjo6iaGWWwaQQqpGL1rrzHMsXgzaGZmZAfL8ypVnjeHFy7",
  "key27": "2opK59omrjTmttwE9QHiBsN1vcAswQJCqVyyoeGmeWP4M8BvxQ7GhNjom46Jwzo5yoRrtmfr3cbD6k17N14tNHwK",
  "key28": "5ruQRgHGTNrWGkNQXxxEhFXc5LdhLHXCZ3Z6r9gSPDWuKDhKeAX4VKD2rsYsGEPguEKBpFfKGtD8X75nR4m3jdVB",
  "key29": "4YvdhPgTt93eEY27YgqNSFaCNFAjdRxJ8RAvdVYtnHBJyt7rqWWxJ16v1PEsCnv69EGyFFbKFLJqDLmRigjJxTqy",
  "key30": "21HnnysNTeA9k6TpTxABCSBMaXYcGTAtUAFd8TYUeFvwXbkuSmrxLtcVhJ2RBSJuyzf3w2Tu3wcVXz1wYj6pGk3y",
  "key31": "3vEdSPeFmHxmHS2HXx3F56haR7FTZh9yxzLps25pBeSCtJ1aqw4AwAyPXV6U6V4E5UJCyQSZWvUrzCXaNyjeu4TL",
  "key32": "4nRP2NvAZixtbRdg9vSpMfYXKaM3Hfe6YCdEs2ZnCNwL9XrMfexBVgKuxSsngtthqT6y1Kg4j22dW7HoFMwjpepH",
  "key33": "S3Q1CcwvF7eUqexhtMFg2FizXivPqb2nHJFF5o8J35UA7YvXcjjJr5js7xpcWfhZr95WmajPXFoP6ckG75dQ7o3",
  "key34": "VT5D7NGKJyYeYxmfmT8X2kJ1QtNEMpwdhEE4o8J3UxpNPddS2FuKNMmAZw9m9CYX8QY36gXfZUadx2SfxxCX29X",
  "key35": "5xiDRp9FtySer6bEnuqJ2RLKabYgzJudsDT6BjWS1yAtSiy4cv7Wruvs3xaQq5a5bd1cvwr7MnCZjED2NjpXrk2p",
  "key36": "S6UAs7NxgeBJhUvb45SRbqY7RdBXyJvPCHTCLFJParCq2R5LstPQUrZRD5qnt9aKjZE4nm5KboZ1P5EbVxeCUpn",
  "key37": "1yUvvX5vyqCFEy393LqAsE4L7qXfBFeg1xSBPAcRUVsVx2NbHivhADv3k1HQPccgpxLCT4aS5ZVe3R2c1YMtUS8"
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
