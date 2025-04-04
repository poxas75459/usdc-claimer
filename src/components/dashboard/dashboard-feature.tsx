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
    "5HDCueVaE85xDRZxKihz8coepkS5xryW8ajnaopCzuEaLBckVYuw6gsucCJyAfrkVk4y8EAXVMGQBSFethsJ2un8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cse2Z15pHdnodHGXySvDVsfjWbLRkAtBfqP1dppxW2gu8NiUi6Ku2h4Cq6g18K9M6zEv4MyJD9yprUwGKYZWPKN",
  "key1": "4dwHocrj1F8NjPywNc2ccMEpDMx9w9AoCsexGG1VkdYY4hfxaAq2p8HDq6kcAXnH6sMtL7XBkE5zvasYxkAv3atj",
  "key2": "2s8XQywG89DGUv25zRV1kpbJZDTqKdwqF1R7bR9xhDoVcPWqmzJqqXcewBzKXrzZfZH4xQ1phXai8YC8MnVGZk8W",
  "key3": "4XDZt5jZcK2LU1W9jSqCyCe21qNRVLUbCTUF143xQPuD1MCDydAXfGMXsKS8mN95yg2v6LfmDA9KugzVB4R5pFN6",
  "key4": "25z1SNu67kmL5w6ZWDrNectUN7Qrh9twnkXjbwERHddwXAzCthfvDKieEhmwxs7RMsg26JiWJnYFPKiCdicPveMg",
  "key5": "4apMmMZCEGuKzZPfJvUKDXMZPCUcQAPrK6Y13XfHU1xeZ2m2x9kM3mwvxfivXKoj4gnDTdZ6aiAVYNyTMeG9wbdb",
  "key6": "HiEL6i3LM8vDacsMBoFwjB6YUgLYW3Jk8txyxxoruSzGbeFWXwRpPnBMS1MGDNt7DbA79hLEGuRsPhLxtqVsUSv",
  "key7": "NfcVtnDzJt5QRPPp8jC37xJk6qZ2TGn4pi52ZfLrLsAN5C2AMBoymkfCFf5mdrKoU4TzTfssXKniJfsioXMMhAZ",
  "key8": "5mCmEuyQYEcQrHJr1uP98xk5zm3mWpT19sUuykphv4PwdmKJeYoCZ5LQ8k1UFNKSQXHREZkL3ocHN6vu4HAFPMSv",
  "key9": "3HNQBrHa9cfsv7EbPSPJmj3p3B3yL13A45TnSXJDc1ejn5pfcq3efL8xb8VypYhutfhw5jdDEWXxMcMiaV4LmaUw",
  "key10": "2roeawTbX9HwHDcQrv7GWGhvoEQuTdgagaG6QTpB6qA9ZQrSX3k3PGHjqiQNGtiP74YYjfmnUmhiCyQrX77ksQcg",
  "key11": "5Yf5zkPmZP36vBQfBbWPh4x2ZkjXmTpjW51i9iXv613KoQzSUbF3ScseJ9AjaTXjiqX51zg13eLEwgLM4pnoisZA",
  "key12": "ztyVXd3yDsoQayo4CAaM9671ASXBAHiM5iooXA9vHgTT8JVwhQ5NVgCRupRD5PxRPaHA5tRiYcYiUiScRZkrk1H",
  "key13": "3R6tpJSCbspDzDqqCzo7NhEUGbEwqtqsihGNKXV6qNUZ4PEtfNJx8LKZCWT2yjGaKGC3hEweq5tdhoYnL2PDuZS5",
  "key14": "4Xao9kR5sCSAY8mxXxNbAJGKdg5c53r25s4G3uLDBTj4LAtqrJB2Mv7ocJQSpUFZHL1DA3yHA6xdvUHm77wq5d3N",
  "key15": "4AGqphTmZ7CPxx5zLVEJCvjtcQiG5pXohrw6YheEEz58pN8g7LnjsprzZLnUqqtdwvcgChrnM5VukfyeuchqgeTb",
  "key16": "5MsrPTNtajsxjvzzSi3RadLZbj57vV8C8WPUoR3W7UaNLdYw8cDDzFEAKYXYCnK8cpoaykHsyPgEDmFgJxZ2nC9x",
  "key17": "3oWLptjPHvySQmUfpmJ5EmrFejFxW2rQkoY9CsPsC3VRnmkxrVbmfsbuxZb4Db3vu7LXGLH42h7zLGS8XfcUVmBB",
  "key18": "49JAJbMmNJgn9JizrZABEozCb9nLZ96vKsVrQyaj9yRSgpd43mHtWevaGqAJovkZmaYZ12NvXV2HTkNA15e1xM7h",
  "key19": "ZpcAZQChL8cQS5AwGD7kc2TfvWkkb4Hg4r4gyTe7UooneZjSXe4HEv6tUjqAt5eS5cKtyUDmgbJXvK5FbCoQJE9",
  "key20": "2WURETjac7nrDgFYWRFrKJiAvfZYL1z5oMc2aoTWQF4Jq2Brwa4h2ewo6rJRhZoDySsednV1nw7o3CwGkskJ8Zum",
  "key21": "2ZhKCZqjCJycUvYZqhFfap6DgLqSuqMwkZaWF1pNgEkU8CLg97JmVyGn8H3aazMgGJ1H6uvdwmjXe7aKmJAXWDQR",
  "key22": "2UAKweC9x8LdQAqmcmjKYtJCPUCXJbP4U3GFGg5MAgd3snSamyBHTZsokteoUcocryKshvPoyb443pNXNNgsHS1i",
  "key23": "5rMT9KWLAkoe5ySBJdMEoe6GYPcajz7LF6aw5cBvrTj5orrxZiC8pAykg1uSFLy5nbFqNTEw68rWicKCgLyWg3hR",
  "key24": "Dn8Pi7RKRwaw1CbPucB1Cce61UjZe7RKpgTkuYqB4xaLnq7PGeTPFQuBohFqGiLqBYFioadEKAkdokboygetTB2",
  "key25": "3vk5y4Zg96WvciwhApaWVvdjo2apVQNMo9SncHUYJcCxWSsFCz2gNd2dRVWQFzULPCfXj74akQbXxD428yQzwGsy",
  "key26": "54ezoQR1rx8SjWLE3m1NG5wf3vBtddYj12jKdzewBMKx7nLbYU8YFaMp6pTvjPSh4WctESZbi117zBu9pFrbieL4",
  "key27": "5Ap1DYbiXkkJDHUUUFhpJhFUEE1i1zvQ42L5qC3ynoqg93hMyCRuphwMXPYYJWEyRw1C8RNpxTzbrpJjEQCrBsYg",
  "key28": "JDcdz9kPYueNbs1MUVjNtaBkF2YmJ2gf8BTK71zW22a83PUrYTJBpYHvwPeXFiT6DmupZxvzSduXSkvb88vpHZs",
  "key29": "3LtAzDqqSwqaBB2HNDEv6tC6aJQU76Bc79bzFqPP5TjjG3vGoxYQEHTcEA4BT84PxMTh6m9HiJoxAVcVGjL6ESHA",
  "key30": "7iewrBGhK6aeZtnxDv4d4fxG9Z3C9A6xjVfuBwh66u8N37948guTwTcfG8Gt1MJYqtzubrMiUJ3MctLB1o2vfkg",
  "key31": "2nznCjaVLeCnxxZKCkBEBpAGWbPZs2HpDLUCjRx9NHbnNMV2ob5aKytsckuW9Z6zgnNDetxGPfdhVqxRbkT2b4FP",
  "key32": "4rbURwmViz8g2r4HjCydfNaDQGztxHuf6aTDALxCrC2qhWGtKuQ78tGqmCcfyBtLNrKdLLjMyFJbR8kLVNp653Du",
  "key33": "5DeHCxHTXznucpU8vG7sAkp4SAfAsDuDL4Wfs9dFgNN1dpLTVgTrpRVYgCbC2FjC8966sX5th9imckDQzNTVtYpd",
  "key34": "28UQML27YEuGfNruVzJD4EATuTRPGfuErVHth5m78kqqhLGszqSgqbcLDJjgWqS2knFXvoWrvTzGTxakcsyE9xyp",
  "key35": "3qpPUyVNqWLZkwRo9SwPKQrbdkR9oLWvAHLiHQ6RRkx29hEM7tpsVkypb77Q79Uo7VJHKvSRh3f2AoqXW7sogyDJ",
  "key36": "2bmU2gM9M2EwrDcwHGcPQst8LyEemskXeXz6q8tjDXpoVpvu6gxqyRdZLWha5gY7cD2Fpo1WqEibpHEym7XR4ZTE",
  "key37": "5xH6QVDQG12oe9kwUX6BTcFd13aRzGB5mNGyU6gW9DJEazFnq3TfFKDZb6qxKxxqgDqDRDMn7ZhdEfnjsGn4JMCF",
  "key38": "pXzQ2sYj2ab6gYNQLW9it5F5h2rw7S7rVreEK34RGScQwWzU6hpnpx4ufxmW2mKEUxFuBpFMjqvc8ELtc74qHAr",
  "key39": "377txUxYCdTo3Yt6LBBBwS3cQ1xqdUxznywMkg8HoPwuhctTP8nHbmvu92QPtiCyTCDzWnc5gytBTGGg25Z1qrKG",
  "key40": "3g6A9B7V9ZjRGS7HAkVeY3Aiw2uSHub2fSmnSxPGaAyRccCwrr3F4AXsKMaxVYyRxhfojWh5fF8GXBuL55Dfio7o",
  "key41": "cXCXW8UcmttzsE5ad8oQ3HvsVpno8o3ByDmonHeL7UBvwWBq3HGzGGTacTkwXxP5RBazLxn32mepVjqw4LH5YvB"
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
