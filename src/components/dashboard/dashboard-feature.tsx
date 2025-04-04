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
    "5j34Pjn87Ep28fzsGN5HxExA7HSU5BUUZe75g4ZJMX5tTysLwxjiDtmAez4xXwE66F27bDjzAoJgy6wcgee2GK8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZhYg3ZV77oWC3rth5u3kY2hJ2TFmnjmesSEbjWFG7PZoR7gzZyLExUujDjazFoYidpFBmcgxoNqMmUgLuGTEhMn",
  "key1": "46ZFPm5btsrMMLaF3SMvc9K82YchVkPigm7C2HfiNXhrXAWNKSN6cLQoVbYKQK8xeVsVW5LKx82Y4mhgwSiSnA9Q",
  "key2": "xjxwrhhLJbPkdm84KcYLgtU8Ng8Npc7c7cFRbETNhg8Ft8DMjnTEdHpEM9ZfdHhnWtBQed2N55Y7fF9H5QrHQ3m",
  "key3": "28QsZGTLUV3qDjMuNhvsRK5QKmns579NjctWko9FAqEsDUxH6mYqruvrjMVzPCziwW47pvnVRMRiYqLNxqpLEStZ",
  "key4": "tMy7VqmVk7z7pJXY5tmcMtDvmHdsDD2u49VyDfwqXiqbvDxZNz9McaoWJLRLGGyW2gtvPLU4gG2kCFcPRnEFY3B",
  "key5": "x9X7PwdAn1C3gYYSxyv2to2RKQYBdVfkZzLHhzauzCXeBzm5qnL7Nqsysb2TCyiEkUfP4PRUfNBdETtC7LJ4e7i",
  "key6": "4486r8YKfZLikYLh5wG6wixynJs1sp1Cg5w6JN3dRGd25eSDaNUmzo87xRBhbLKEN2nFKsakPg87kFKvF2pCGWV9",
  "key7": "36Leg23gfXBbJ6BxeHx9GxmGJrn2Eu6c4AQd6tHH9PpeF3nQiHscqD6TjHzkMzRwcAuyUD6b5UAhxYWsbv8Hagdo",
  "key8": "QgCm9YWfRwSkNrZoLvSztr25ETZNz7MT8mJCp31Cxq1KXchpggpEDtwvGTenWDkPxN4roceaLi8fBSpr354SNos",
  "key9": "36nPaKAbVDBnSJHYdcCfExhQqGd6mcWRgJutCUEg9okFdWbAP3ShJSTWa29nCiC1QqppneqvVa3RNYS4PU9b15dv",
  "key10": "4BMR6Zh5BvdUkQoBLsJmi79NDg3Da5SGALHaVjCGrXQemmsDyymZqL596eATvm57cqj4CH2TGxkDNT9osEykgdLE",
  "key11": "2D1w13FyqZhUsZS1tym3cPvJ7zTfPwLnmmapbc4GYHzsEqcowCRXwF7Qcfhon5K5hnjErEnzpEf3NurfQxyYe1nK",
  "key12": "M4qPXb8wgbUWSs4Cyam75hwXWM4N8634jHNprebKZ4MSM9X4MiEBekRMjseqZmJDsFt1o94fD5N5E8qzKPtxZv9",
  "key13": "rs8aJKWt5fSZAZeSVgEQjAbafAb66TBQwpxX69efsWV6WBnDcyFsJjS52NtnMmyqPzZdyd1rjtjhXqUrJFfKRBe",
  "key14": "4mScvUuX1xGs6JsVDfffR79Pr3ZZRA7LmrPgNmes7UmMR1rMCcMDq8H9naqXpjnBYDMmXYKjVGittvy89yrLqh9L",
  "key15": "2jhoWWUeBxqyz4KHiP34HFZAapPBAUqabi1hB3MakJnKmfvuaFT4VZCU7yQToAjKWGXczMcMCtyev4WnqVLN7nfL",
  "key16": "4AcPJZsuFV86gXSosezvnFb26B3MKNczW4atherDjaQdgesJGzVGiE5UresZqsfwVps672mprhU6wNupAkfGfm3f",
  "key17": "WVDj6Ytc9fCQzmC42g3Ntdg1LhCXFHS49q6215KupbjDCZANcdhCBET4FdWuUcvHYhZyoeoXrEDcHHcVveG5Asm",
  "key18": "63AuyRXeQHuWLbNL7bzU4KsMwxCqt4R8Fy7SVNWzmMdKMZz26jvJzsLcAZTyinigEwqfFntdk9SkihvUW3R7hYok",
  "key19": "5gwkkBpnK8Mx2zSW7hKxZCZquUUtcm9arXtqi2jJVVn9vWQjKcUbMUk77xwMKWfmipd1RVpkrcb1b8ExdYdGE4iE",
  "key20": "25nRSjbvwf3ziATEJzVmHSEiicviBRb9e3Je8fZs2KYJBeioHDDsqHYUGBHL8CC2TwGkMrSXkcpueVLATnSRaMbV",
  "key21": "gdNT1jMXuoDbHY9vqeCrmwnsfA2weMa5K6nL3bJ9fZgcyG8u9h7o8tM5t4JXj3B4jxgeVYnsd1R7m1uSPab9puf",
  "key22": "xyrf3xcW3hbFhvwECF39Th1F49pRikg7uvvGyoyMRzDb4P64mNLLKxzoGb2j9nb7DHSF5VkwjcmW7ZMx4xPE4rG",
  "key23": "vzyB6qxHA38ZeCATF98HyMaPtWgXh4yTgVMMwNNmvzKbkfjQfLmrgACEfaaFJbymZU81buGwnb3S38dsniQyetm",
  "key24": "2EDpLEJGRFo7pdFNMjhHecHdSM47fBFFGiagiJMzWdZ7c5mX4WtWqoZFC2j1guztS2174G4PeNnaP7pDJ3bNQXfe",
  "key25": "2xCUVtsiMvyewzUeiCktprXZXLNwxZkeF6QAUnAscxUPVQQv5jJNnXyR29tpsW6b71Ar3khw1a3G3kryUUAXR2Rq",
  "key26": "28zb7yPWirYy9p2wfKR9jk4R3ApukbgBgqy35hdUKXQvLSuKPq8jekmGShUbn62h3HWVjNwafVModPwjx1h4mau9",
  "key27": "58NUcj5nqGSnBFaKA7vv7WufCFg6MQspLwn8CEwZibGRPanKAxD7mePndUcZZ7LnPcX5tJha7UNkzXTyCPcxwqR6",
  "key28": "5gbmuoXvMvofdr3H2tYzTPMHaYun4NGy8XX1mKHwMkA6Rwamoh7HXoY4c2FXM7R1fU7sQkXF4SSmz2GAhLxwLyK2",
  "key29": "ByKJEU8REE7WL2ueqhZNr8ShRxPKu8NBWJV1d5shiYRLaUkQbxLVRvdWTP1HqC9EX8uyz7xzKnMFKhH5ajZ9aKN",
  "key30": "5C2FhF8CrowP4QQNg2Qq8xkzKUdZ6nYMJ41F46yyUFyZEtivKY5N8q1bVHSZqoM1QSu9cMPep6tKozpZHxihdvBv"
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
