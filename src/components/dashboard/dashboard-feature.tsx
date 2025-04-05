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
    "34G9iBFcbf4dJuque95FvBZxZAgxSY1CmmMArJfJ1giRWujcSQHTADMQJfveRctAcaFPy9gacLRrVvnYgyFf2KSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DaqYrxpvDocibpuYUuMYm3RBecNFdLcTpxUGQwRbRk6RS1tGjKLwx59GtTscRXGM2hM3FLKjZRqDBhq7ssfSx7H",
  "key1": "5TniSBtn7BFuEBgJeLBNkf3a3fBxhLygcpDW9VRebGSrfbn5ABFVtqNLUZifQZWaR6WNT1HYXPhdmfyzgVYueJSp",
  "key2": "4GemsFzkqvXdu962wq9XSdoSSc1tg7CRgSrb2Az4Gye3QCMX9NivdiY77NmwDtEkKHALQJA8Wvou8ojxiLS8CqgK",
  "key3": "4RUeNaNacsxQyVrho2z47YYN6KcCBQGKBmief25nFmvqz7pBpW8qEQipUyzKCjY5tGmKhPY7HkugiUxEfvzcBvtU",
  "key4": "3LF4Yt3VjZfhvSEHiQkAXpebAGSABZ7vJdT8ovn724LSdgMmhbMp4snLg9qJmiGU2KDYP2oBoN8mhCLEoQw3iUXU",
  "key5": "2wuakP5Vg4zuvK1Goo6UkyYXoSuohyxZu4Fba4EtUQKHzRk566zEnn5K8d1WeTYS2Yq2GsFLz9MYqsqRwJ1sSLFh",
  "key6": "2UZcAxdq66Gx9h8dz8WTcMhSM7b2rFsZshYHRqC31gSoM5rDzdz5s7QcxSEuWEZR5i5W9ZoYafvX99SsPjAdyNq4",
  "key7": "3yCQKrjw7hZGfybwkjxA2yEvkZRee4g9qt6sDhYpJXMA3856DjQfRAYQy8UuhFKdnAiaGNNcXTBLTNrX4UN6yxAX",
  "key8": "2cEG3YAAYKqNvYrLZxammfBLhqunCWDmJ2XZZ5sRaA6NQcHxeXfGvSigiLH5z3Hg32qd1p64V6idwCVqZXzwP88X",
  "key9": "2E8a6SBWabWZ9SBJfVgT4LeSkRQPaFsqXypaCcrSVC8ycrKzZHBWdzaBhJsY4Q19n81GcAcTCEvz24WBkD5JPbtc",
  "key10": "4Pn6hZYTryLGVS1k6MnrzFM4thj3aphbqk2aYKuK7X7ZwazJh1ueX3hf8VKbSES3XaocZ9BS5DfFQ5GsugxXcELG",
  "key11": "2BFm7SVPJfmxqfvpF1c3CpKjgTdf525MDciYJW4uuRcDsRk8zLLFTNezeqe3rcrHqK7hAqWFfj7tThnbv1zhreN6",
  "key12": "4TVbUzScuxPSzXELRdEy6x6KnuNCwiLGgh39gQEVf3dXbSaYihXnZQaDSn5cb94ixm3z56sBxLrGFACYsrsperpB",
  "key13": "2nEyUwg1c5fsHdGkZeXobENnfg7aVHmS76MUrP9RYbJnPBKr7nUTpSCHurFM4tGA4GREwbRGDsvyiS7A1iiHRJSy",
  "key14": "8Cd2k2ob2PdQYjCRPFT64Zt2pnCEpLqPaGYYrmmUYmQpet7mNACokAkenoZ9uwhxQP79GM57V3PdHy7oS77RRFf",
  "key15": "2XW7xosYksALZvWHAAjDvfcJM2M86xPPuHNq1z88qneD4Q1ra5MKRYu38k9C3hWFPQkvtfDNYtUKZDYeNqvntYi3",
  "key16": "4WHipow3AmQTifFnM9WyfEZFTZf1sMtEayBJ4UdFsnHzay6FXtqLvFt3wVpT4hdix7VGqHzR8gm9DcT9XpxvnQox",
  "key17": "254F6fvgGzCWffWJwGyYgk7Mri4r7TDNfhtERewpxvaWmUqCJJUsSXCdkk2TgCDQngBu68cX1kis5dzkPhghSX9w",
  "key18": "61gLnorVdckGmzxY3GJqJYcwn5TxstAUEPKq55kK3bvTm6uF1yBgYTUKqfaFZyeUhKcXTqPZQN9wWSm8sHfEuQMn",
  "key19": "5kZFSvR3VdDUaWAyHQYqA3UmwiLzEsgAVWJa3J3JkXBbwGMF5GWxg7GNyrFMC9ko2SzV7ALbsmbdBWAAHHorMcE7",
  "key20": "54CJLhAE4TDwMxDnHJwKTdaxoA5toC3rwGmnHo9Sx3fkUtPzEXWcSVEWCx3dFN3J2e9LKJW46RZczhbwy1snHMMo",
  "key21": "4uhS43nYG7w1LRpdctDG2XxLSrLJJgaexrL6jopRuuuY2FD65y1pe18aeFJmuUNYckp2Kbe5892fAqWyLwEZGQAh",
  "key22": "2VvjEYogZpspDbkPkpnCjd9cwxm19YZpoWwQ9bVT9fdpDmguTVbsMbJhBQuvu5oLUwCF3JXfatycB3yEmL43MvuN",
  "key23": "38NuJNakf2nfpYQ6ZL7Z2SNtCuAkq2eghhAJUgk1DnPZjMoxf6yUi4PYurCsNjt5KAm4xkRhq7nCjBg1QHAduTKk",
  "key24": "JxqM7wRtVyuv92ET8XWRXEzXPwuLTxSvrmWMfq1ci3xboeGHr9KKpqZY964RY6QM67BwkKB5dTaHxFZ56tWAnCZ",
  "key25": "61kRNu8FUS3qRox8c4Xn473sxqXssCwDzBVNHwzgbNMppaAz2N2CkYsh9yq7jgQevDbZbhENuRE81iSugUPftRJf",
  "key26": "VE21kqLtFo6jiwBNQMchunP9eRszGrhNV9udaXz3HqgGyaGx9WiMCrKfZjTCFr1CXq39o78zB5NQRcsEVSpRN5A",
  "key27": "2cx53usqaVQQgD4TRTBVN2wmRDjQtz1kaVAJ1mAizoKotcuCHQf9Jrrdfs3nRiHnPWx7JeNuWfKMMGw7GsUm2v2a",
  "key28": "632KPbiaqccpJnYRNn4Cz63ATguvkGxqw8G6HwfmCqbzB6JJgSsi1PTSFeZQB52CD45mGEbDxR68fpeftZMapWZ",
  "key29": "3sG2yzCjQBXYmknseFaXB65kNLxXM8WFiUcY5Q1YdAhZoSyr7yZkT9jfZfmUpuXCCXnXEX8ig8PBoUoPXcHXqo8N",
  "key30": "5HtkeTNesLsk3C4HVtcVCmZWvTnAAo1h9PzHNNuomCFLLGUUxEq5ZUvjaEPRanZjR3beNGX56fNb7ep2Jgxbntr7",
  "key31": "66S9fgfF2tJugd3MUJJGVLaJ8kBtSSJiSNVfbhauvnGGLGEHxVQ3K7n5ARzYgvL2Pce3QtsE1goyYjedHyckxt1d",
  "key32": "3QLDQcHcJEvaM73UuWUsZzWmUNc5BmycPyhEM8G3w6mxrcxayiHcdeVAj8mBru8hZFKBNH4BUAtZ12MUcU28hSCB",
  "key33": "2A2xNUkbZuHdWjhmed1CzL17gJ6UnHxumyDwALvbw58hxYjJNaLBv9MNhbowWSygNWkLkrLxEh1p9zVpWyhTGJXk",
  "key34": "26KLvcTSdv5EZgrWfeH1JtEpGwsZGbFRa5tPnk7QSLCJS2jGocDHJjAdKRbEWYL5wJWo5qhbUm3dJ8VncPfX53tu",
  "key35": "5mEC26RFwvNdZbUA1hDjYJg4Dopr61MxycpSjdVWL9yLqL3peEDQM3hU4WeyxT7PCqHZQkLjnv7T1nSa3B7pcmye",
  "key36": "56eLUjcZHKkJks5DoFJ7awjRTguNFhpWf1mxDhgar8j8D6BH8wuPvj44Qow7CkkTGaDSPzib61p8LxEbwS3N5Wo2",
  "key37": "2y2LGo2FGy4PCWecD5icRbW9EZ6aK1pJE9qTmEGD59G9bQy7n32W5FDEz1n3wetTYzJcY3wLUByV4DfcJK9GGdG3",
  "key38": "5SxfGw34gVgp27LgMXRMdUJDkSDfMCXv52RapWHwGamuXVK8yrcB7ZDcxbjUQXHNusXWco2PRQmPQWEtA9ykrh6m",
  "key39": "2UNVgR4e6Gm5NGJUPByrf4LFAHw3MycDSw3GiJJGk3p6DNbiYXF9vd6LCBfMpXPq3rMTyQXNHUA4d2Bk2CDNF2Ka",
  "key40": "4XhCeTDkiMwJKEmorbn7p6Gm6BCUbgHYBvjtJoht1ZdUpHMqZHfmF8webd6yDXWTtMCHzAobsEk6BvpunHGLSNb7",
  "key41": "3iYoYRnHQoDddkzQRqF1dUAk6ReP91V2EvZ9jLv5KnmxBWZe2q7zb8Bdp72fCtGbGmeAMcuUJmydnVDNKg2TLetu",
  "key42": "4vkrmTG1Wxcg4JvKFhBekAVKcrNiDFdrhNR8zsB24HsZT2DL7XYUFgVayHaTEKugZSMKXhMmwtRENMN3HbvmwEpg",
  "key43": "45Xhv4yTsS2ud2mLAWJQNCPjz6ZonBcv45UznowuBAPCUnqy8DM2RoQistX4PRHNSicFvumkDJGGCkKwC2YsFroe",
  "key44": "4zWk1znGmWaBoqFg8JxNuiehfNW4J9aTDuWcaccweHwdde1RubjMQULWg5FMviFw9AByPXfY3zXzBcgcEXUU75y7",
  "key45": "5CffQmxYPmrXo2Dpyi1VjU8doDXDbTZNvtAekDxKTxk9g49RyQUU6fPQXNo2xUkSzYXiWmzBrSBaYkdXpKphexrm",
  "key46": "3YhoSMwSKMiDUiVuz3NKTMrRuEt3rasycFQKxj45fyBLifaz6JLpf3jnzKiTnAKvWtS52x8yW4ivjTsaH1zW2XGd",
  "key47": "4v6bgive7rkX5s5uwzH5SyGChzKbCZbvPJQeit8Kw8ovGwdmAExNiMVcsB8yEBGJHLzJ58KBQ8jpnpHaK4mHEMc"
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
