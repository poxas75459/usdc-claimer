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
    "3TsLaUjQ21UisSBMRxBoPUHxpDBB6iQyjVsCjMTxMfhHAK9u7SnCAccCjQy9TmYjATuh9MhyXdFpX5fm3MU6bVQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r43ineotDT1ssXV6zVKfsrd2wm537y7omNjnBfwtJ2U9dWW8J9LDqTN2cEMrDxHQ3kaiSEHXXWQNcKTzdiAe7Dw",
  "key1": "4kAzGesBtWMXYxbVhbU7GmJFkERWZ2YSLd5cY6nidVrdSgTazP7KCnCPmaCY3TvpKYaUDLWp9wA8tZdbBh6CtoXm",
  "key2": "5tdC1em5jPStXgGu6yMjBqiYvrK1bTNcgBnSgbK4xWfKUiz8Zype3748Q9j772vx4peKRAev61ZfL8PywmtCHofz",
  "key3": "2CBcPHLJL46ep6PrtXvNZA84gY5hYMSN8ysoHN2xZoVsLHRodowf1eeomwFqqf1xc2L5t6sG7LHpBbSf4uQEy1P5",
  "key4": "4dv4oF7rro1bp5CSVCWGVx6VJqKpF3xngwez3hcUVbDDrqDbsfpFjfJYKKAJnfqF9MnMjFzsKEWgQGwHroRyiz5",
  "key5": "5hCUJFQxnB81HDBrExeP3csHy3G5tkUpgnaVzVUpjVGZNgUxN1ESgBVPtWciAJVghy8tBkoej5X13croAjstP7xu",
  "key6": "3FSiF919aJbbYSvdMBrPPvsz22XMyQ8nUZUvfgpN46PkyjdkxVcX1feYzFBgbneaMDJUuZRLKs7dveES8RNTyAVe",
  "key7": "4omstoPmbGmovy5PhMuTauGiny5byUizW7N25Ca2adUv4avSTegovh9wUSV63RJVPxSXDjNXnJJuF2wM3PDXVncU",
  "key8": "5AV5t1jm85PQ4AicTLz7yD3VffnQyd8YHzoq2p23NNxy93jHcT9bHMh7ZXs1X1L9mKCr7U5VWvFg8mSJ7BtDyBJi",
  "key9": "2QsP1ShPDr35EJ5jHvaQLXNyv9ABqKEqdhqJ7vogFBvnmV6JMqW9xntX9Enj9JLrTudrCk4tApHoR6z2KsZSdoDr",
  "key10": "4fkXK6anQ7DA9HTPUbwbGEHZfBuLQW9Bp6fb5oyEyjnMgXd1T1eAQKbYV1Z2W67sAXLVUcUXfjjsx1srVM5j4iRP",
  "key11": "4oaLauf8H4kkah7YtNYBWi8RoVeLXQVHwuvWXjhnLCD87wk1MFP1pkozzTRrk8nGpHwPKkTg4Dg2zto4bFEnFPJ",
  "key12": "5ihRAu3CAmP464zWJV5TQAh7iLN69D9Je57ZVV28jUck8jGTMtAdcLmuLSzfYR3QwLpFrEP9ct2ubSYQfJ77wAuB",
  "key13": "4vHbxZgw5cxynN7H27gsRaYKuqRpwc2hZUQkKGt7hRyaSYmx6ECJkixox5Jr9BCwnGesavBsmRtR89SDihayKyZo",
  "key14": "632o1aPbi7U1NKtnBuB6m3dQYVuLqivgnRZPoidQ4yrhYhEoNaBRkK4B22D2udvaXvvMsVW2amGuWvSf9o8NdeeZ",
  "key15": "2mHAM8GWvZ1rHsHgYDLtJgKerQsevPrgV1wMh25sCSTT5nCQyyXizxVs4cdmeboBFM5xGfifPuohLL5uYVM7e4hz",
  "key16": "4fpFAFXniHE8VeusK7jYxQMeg2JTN2agzZagtnHTdJxp6e73ht7SnJA28ioq57Z6aVT1GkZopyd8zPPXwtVM8bxC",
  "key17": "3weyNmXC9m6SPbcBBhqYjxaxLZpSNTXQFvbWTqibBWDtq7y2FeQRHUnUy1naYQKgxEKyQC69n7dDyvDTdTix7GqA",
  "key18": "5V7REzgNY7Uiu9VezmL78kG12pUc2YrFDqRi9NiVqupr3SMVseRpHtQMnDEe4LGnXjF3WPmGxpmdU7bcU5oBvwY6",
  "key19": "4ssopUunMapbkxrdKs2aTpqM64kdXP5CPJqSYGgr6QTNEPWvQpTUoiJU6oeuPDNTxtBsq8BV8vNQyXd1ftWfmb6Y",
  "key20": "5cYnMq8mXXYypkiXNDBFFkqHmih7UkHL2Y4zQ1As9eswRWeDv4ndT3ocXmydaf3nwzaVY7Pj3N1DLqacAiyBZjxH",
  "key21": "32zTrN43UA76jLtKw1ob5odfjPtpi5qGjwzrywzwpJosxCz99V8xbZDPT1wMVDW3Pj38fXEJZwZxMnuJHNxGmUSE",
  "key22": "2sKyWnZbj9dZSeBxQkEJUyGXJ9owbhgnuB4dErXssH6k9taFJc46g1Fv4JXnxojsbfGxMRk8gY6AkvADjsWx66pL",
  "key23": "ryiSC9zJjEJsf1izqW4fiJHbAvb2Ziqc3SQz9UzKQB1TyhPfxyKDbH8d3XXZPDyk77tLJ4CT1e8F1hfzo5dH2Pa",
  "key24": "3ZDxvCsNZLrJxkAiDLoUXJdMsU3bePM2SjEjVyKYNMjTbWdKJ8jmLx8XeUqTqUB2rpTx55usNKY9beb1nWaaXRnb",
  "key25": "5bzNpFw2Ycv1NhewiiJLXQjitpUzqdfLtrPr4JycMQAiDDWHQjKstJndRe7A8iRokuhZktwjMfMcLH4UmF9HM2Lf",
  "key26": "CTPvgqNmErGGs1XkJSmMysYbrnL2CEK6rZFB4rytRcCXWrWWgYwXrpVVRATdFWQ98ys8GM1thqSA6AeL8bUY1gb",
  "key27": "1aUSJjng9HgVf6Dedf9xUSyXfB5v76tPDerMAUaz2UqhrbGro2JJr7gieGngze29RrYtnkeGXaaHQnJFQQ97gUZ",
  "key28": "3KSFTm7AwWKmk1C6YjDh8njTvnQwX31PhezZZre3bazb3dMqBMsZ4iNfKGswyCT7jBZAALL55Njmfw2YMgga6KRL",
  "key29": "5BnZQroKEemPgqHkskpNATJ8SWE7hfiz8C7o4Fm6f2j1Pnzz5x8T3YvRjbKQD15sAqyvC3iiVfqcQBWnoEVte8XB",
  "key30": "2P8nnoVjnFLunYQRUzXLnVcwBmjUkuSRgH1hHmQ7DGHkYhC37spovMG5WPfakZJzuZUJthFBeLYJGw8mCUrSPFaA",
  "key31": "4G9gxvwdHBYdYA8yc99N3nkKbyFydMHb8T73ccZxDah9E6gAipfS1taQXAjPNSkK3spRhXLd1WBWrDt4HmMkAAvU",
  "key32": "74FXVz56fmbo4BU41xyf78YjzvTnh9qzgxsWxidutSgXMYbAx3DPFyV1PcJmDyUoFuhD9499sHCgUUrPooapfgc",
  "key33": "25Z128fYXpeCGpjwBUSJcpFjSjX5xyPvFRTdNGopH8Pq7kRDDM4FH9uBvZ45yDh7D11QTFaqpyvev9srHiSAUq7k",
  "key34": "2knqBw7CkX158vLQsdUDzso6Z263cGJ8Sj3tN3yqRcKdYv9nMd3PmNGLTTHQ5CKDRfY4XPBkgvgmwGWmTfmpBZmK",
  "key35": "49yWSgsU1UmREL4pxSV8nQo1jd2YhFW4rqxkVeghhzNYbmHwyrTwLadXNm5vfCNYq4Jx1fua9pvZW549ETBCLe11",
  "key36": "2RdgsgCd88CPcc4CvFyR6YmvYjBwWgKNYxtaVZ8AYcRPXNJ6RcKiCYxvBFVKErXWk4zLxg7kfwEtrfgRiSWsQiWC"
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
