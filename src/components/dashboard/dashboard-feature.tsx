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
    "5dW2h7QPvg994kFNnXvFVYX1Z36wnfysFpeQsQSiMArqCQhc5RdjgdJps2bR9x5ZVt1W58kWL3QHC4dkUNnEWJAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BrNzYyCGJP2DJtyDR9MwwFNojq9M7cvRDjZMqHWG5pLCtsnEHCw3Z4RsjR8q5nQphSR6m8HTbwvTr8GKzHQWXRm",
  "key1": "5yaTxmY8Y7QTjCvwPU1DFxjuTxShxfuNgkSbNxGai5EFpsUBs8hX6pjYiFVgqNd1sL3tnjGVg3feqyVHcTqLGZGT",
  "key2": "5K8n9M2RbSjzaCGYiTqfxLeGdVXmAXpFZk9fyRXngDD9EhruyXUuEF89X8nZBKHY66hiaffYP3gmT6oKbiPDGiRa",
  "key3": "2J876cSyxT26iySfXgBQk3e3WydCQEvTb5He3766tZxogei5mRnLrDcabihtMgrHdutswL9KgqLbf4MRh7FCxzgL",
  "key4": "3v4mKmdWZnsXCCMUXmVv3vkQtiruHs3oEVgPmYmwAo58r5Z7tWWfnSyeHF88g5igcBF6chqSYm5EZLjRJwXby3TP",
  "key5": "2NQa4fBGpbgPzGj7fkw5Nd37EPETtNCxXAix7JCxr5u1vVNmLiMfqEmBrVCgw3KktYxsQzZigy6pvMu8RMADPUea",
  "key6": "5RgfYKjda7oAYvg5cynqzXzBSEXRqUHbDUaCpr7nS9XKRPpnDi8vNudFjZRjGECo8afTFKyr5LaUWLD6LZFoTAgu",
  "key7": "95594HysyEMJFXp1SZ6M8cdnEq6cExgrp29EbNRsxWvbT6UmqtgD1UDxi98p1bX2gzu6wJSC9ReyvPD9WRpR7zQ",
  "key8": "5RrkgtYDszmWf3qHjDLMAm23cb19jZQvaB1qkFy1g1MpMxuqVEVHiRhazi3ZXy72CMfxGqewNRmGGxyudK8kdekp",
  "key9": "9ZNZ2CMY7HDy98TcgbDqM7UbHTAqejpVtADeGQm3q8UDvcUBuktJm3nYEPhnLYZZHsTxn4T15wX78yVVdqvzPoV",
  "key10": "21yXfyXRDuDTt89c31y6kGqiEm9tBWvCMBjZSws56eSg2SbeZuFUZLDChM5egKcqHFtbHDUAkLKHrHh2bfMd1RRs",
  "key11": "4tbmaf2atp9WzpsFq3rpFQztzknMzKyw7s1h1LndvMh1C9FYwweBCnjX8goeiLpBUEd3k9HpZ9Kr5zTJ4ucZwhU9",
  "key12": "rCsjAxcuUvtTvmsMP9E3uajr1vGBLwQHX1XWCuxr83vcPyrQbtgn3SzA3NcEP1Tt8L2aq56CW9Nz6ceuX9Eo3vi",
  "key13": "nd1sSxudU7ZEBRQpevwk9DxSXxyfR2i7H7Vd5RpQ7FDB69Me7JmFr9KFrSd9Jr84YqKZk7P3yz71Aq2TEKepxRs",
  "key14": "4vU85Kr1MNHLsBCoc9keAJ8mdPsVrkWxVkmcmxDrvSY3FVbEfSVQ2LYCmeVkYXZPfVF9tcmUFRWhTVR7YLMJaZGX",
  "key15": "T1HRpv8LEc689dB2DUmLyE8K1FtMi9n12KwZm2mtUND15rBhVaLrDessXwkzTrf5aWi12f8C81VVuvxkDXnJNAR",
  "key16": "2TnoxtF3RVwk9Va9boeqbo9mdJGBzzXwbC9qA7eoXDU5kJWYyTvv4Eand1SJsoBmey1jMiWt8ZrSXqWxDnHEBa8E",
  "key17": "56RnXZFE1XGptRWB4W7SD3f4YQyYKtqUsdMUvrXSNppGWhcwN5is768d9MwSrooQduoJwSYQRDUzDWXE6vfcWg2F",
  "key18": "2yeJGkXsh5sJ7AFQW1vwxZf9JecnR2TdrfsX5qgTpKA4ghx3hb6caooFMTQMizbe5Gfv77UstTZfwpKLftChaVRr",
  "key19": "5w8tQq4Dh5wDeABE644eHkwfhp5cDV1Ynu39pdRvJxfaaTzXR5FQcQG7GsN3Hi2rMja9QttSzTv4R4xPgveRkLDu",
  "key20": "4KgppjNG81LUw47neZdcvp9dQczVRHNkFZ2uVvp5krs8bCSh6nSjc24xvgJ1HAW3jTXyMy2p1qP2AVwpj9HnRG6P",
  "key21": "3US2fdJmdY5dEJiyfCAemr8KKBRBGqT4NT4xdAif53JTsmRToMLfRnUDCR4SDRBPNryFTmXPxsj6F9CAgmShAm1u",
  "key22": "2Q98TiAh5xCFSGjZxTAvjrSpa6YSmx7rmDtmt7sxPBkLWV4LnME2NxihM1nTgf8DiEa9g3X76ZTFePcTR5AkJyv1",
  "key23": "4dammuip6BskrnTSAavuRfx79aBDdhUTA53q2fBfEYAWihXvj5L7jF6NQK4RQXtum24dfjMXsafZpUDRo7sidmnD",
  "key24": "tBFBnzesShcvgorfj9ribY8GxzMH9wckhmiccxdfkx4D42qWTPXrPNcrvoZS592huTzMss9guMQ4b4gDrX92hSD",
  "key25": "5pRUHRzbmLrcnizPJVrKnhWV1q7aCxUtCDQc1zdT3FxhjV1Z1ZxEr3qWsnYgDAgaS9dh6YrTngw23oGJMpNy8eDa",
  "key26": "2G65SuVqoQWNuByJrnW4Houuwh9Hf47itSHGSopnTkMcBLd5oR71qkcQobxbUzgK1v7DaZ859Cok23fHriz8poPZ",
  "key27": "3ETPVcnNwLbWRn1vc8qttp5wtW1YzQAagfZ4fcoonk5M5eofJqLC9ZFMMKG38Q3USDuKoDgxA7cn9QUaqeV1xWct",
  "key28": "5xy3VMoqmSrhKErBv5w3Q5RwJpvRAw6Wm5z3LUp6JJPJ97xYVQ3dYJQGTrVJ7eBsgG2JbmpWoSDgUMWx4Kmevbvk",
  "key29": "KPgyxaGjTuAdt5nYP5kFAMkhcK6eUSWoQmA3Ph7TrFDwNAKAHYDUXgdugwLYNNb8D1pLAeDKimJKuLLxmdeWcb2",
  "key30": "27UYWtnGou7rmKpSxY6irHEzNZDQY4TWucWWoAZ2mBbavjKVuaDUpFmFj7PEy4YZQis3rQ7i39Q4TMT9M4xUdemN",
  "key31": "5ntQWcLXADVAQuwmpMDTJ4e6L8PzJpgju1c9H5inFivZDDJdTETD8rYKakDzxTY3fyFmSYJK86e3qkpDrm34h54G",
  "key32": "RKig8ZFnL7Z7iZx62EQGEfQGq41MwgaN9xtk2vQxN1eQPpBZEkqazXRjx6eUf32cPgqj3MT5mzTfeHLoAb5SM3C",
  "key33": "LHma9o6RHTRzgWi29FAuuxVD73Paz4bifdT7cJCmcuzVMS62Krj9qyPCA8FxaSAPugpdWNBGai99tvxDyoayrre",
  "key34": "4MoQCk5AdLNBQ4hVnqagy1Y4fQNbztajA3WTD7Woji11k9gBe3m916csqWxndsy2Cr3CU4Dx9dDwdqbjoSKFA27s",
  "key35": "HeZuQU4oP5ZyHatdu6MwEPzGuguPdCym4ymewahqdDJA4z5j57yCaM72TBDbaFUP7ztoGAAdWRgriXW1PAgg2HG",
  "key36": "2f38i6wbuDTwq2sTYYbyBEo48rkzaLrBGVY6QLScciZdm4FHdDzwX8CJS4TPNNYvryRqDdu8yuTgcb4aVxGwve3",
  "key37": "5XjxZrH3Nfj4amiR9BzC6pms4k4dXp1NWcot1TKRqCUv5JnAEeDhovqdVSN2U6QzqsgSKPuazx4NJ5M3xDT5t2Zs",
  "key38": "3D7rbjsyYPm9kiQcmUmVPzPG1F3dtqp61eqK7wvpEXEBWzGEU4xzBxw42EBSE2sRTWVoFdhNF12U2ZB38CYZyN1a",
  "key39": "keFXJZNg85k3xPNajguiXfyyWNzvX7udJgWrGtXWsnvYw45mbj2RzxV7EsN45jKgAt3CMwbXyn7y5zt9pexSf3K"
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
