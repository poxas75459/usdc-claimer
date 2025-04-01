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
    "2yH51jBZtDimdPQG5JLG7BXLWYbHVmR9gG8M6MJmD2oYAUUQBtDGmKmoNqGsN2pnvEtvP2AsQD141S8jPkA8kJ13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZLKjPX61chhWo1SFVc6Ztjpj4BQ5Buu3knC9YhxQcQeP7f4LE5uJJaHn6KhvWreWuJut44GZde8aG1mG2ST6wEC",
  "key1": "jVGzxi3DVCgQsJiNVfcyxpCHj4cRhRPC33jJ1kTzQDeG6ETxujtjemG8DrF2xB2AA8fV4Bajzmyzigtvo6sH33y",
  "key2": "2PgQTous2dm9FYAsw3oe7rtjGD9Z2RQcQNjXGZUN1WZJmRhtqNiDfkzAwArFjRMCfZdEQJgUZXpuRQLeWU5BwsrF",
  "key3": "4T878rE1iFfLyhYKQgVtdSXEALsK5sWjmszpfvUoGPMwvAbdjdC4bh1aaZPU4Ba81AT4pUXkT1QeRmu27gJFXesP",
  "key4": "EMzaVbZiBG3hFGBSCk6PCCxB1kQBD46U7nV37Gh5C7UrTRkhn2Bpur41LhRS3Fuefk9PC2XT6dZywdsBLHiSL2Z",
  "key5": "2Y82xkjyGv26F93H6cJCgdNVzAuFgoxUJbSw6eTXQnjR8TXAP5W1mMU7nzoAsNZU6Lxec3SamtaerpFjqADCB12D",
  "key6": "6715Ro3T4kte4VWh5FNUSND2Aqdf4MCy24rUU5Rk91S99dYLsqXwEm9h2iVbi5QecbmE41UZk7QZvTobgXwbX9k3",
  "key7": "3uqCsMsjeTMtsu4uVp9HETNLVMofKphWEcdR1KWVqWsSGhxyQBkYStEKwB5JybM2AGhDG7FSxK4dbWaqvkkCicnd",
  "key8": "3o4RK94TXuxpzeXjoK9zKKNxW9Erax7VQhQmrYwYrrStZ2oE3AB3S9S7cAkSjS888CdFZqD1UnDpksVTRPbspsmm",
  "key9": "gfU4XuV8q8VpJx4WsR59dZjw7wG5uYqBsx7BxpRHSdg8SP9DhNAFhmawhS3t7KS3jg12F4kQDsdez5Hwd9boMj2",
  "key10": "Xyu2zZZZaD5jthb51AcCdLaBwTiaRVqBqFtSuXqR7C4fWegvDEWpz7jNq324YZNoA8YxCQKVZvSZxS2S2DrcVwv",
  "key11": "31SaHHejqn6hgzHZhkn5WJmSDuctPmMemdLR8h98d8GfRbbx87RNgJBQYkakbaMZikPKhuYBFZjCyR9uZL9eErbB",
  "key12": "5ALKA52kbvhzBBojZwFEeoJpCnuoQHr8ZWBkePZTHwSuNVro748bkU499vFyVPAtyoHNSpXsWMHihxqRxLEieACr",
  "key13": "2k1NwNQvvGyQ6CoK6t2XwY9HfMvnBz6paygKzhj9th7BhCcBNDUUYQk1KDzyJMgDq1dGfssWzUdU7Gg9Aop6sYNt",
  "key14": "51CsnnSfGTWqFfLc6m2nqpEYJBcsNLKHEPEhGCDnepdGZ22pYKHmfpZrBQN8VRF2SMFeNDKBzwj815KiQUibPqe7",
  "key15": "e5SXGMZE4ToHV8HiPqqsPippi6Xp5AC9w7a8h3M4WsN7GF9s6BFqDQuNpoaZRAgez6pDVouchDpnQeCTwFhusD8",
  "key16": "2oDhPu8qHhkG2jzn7JHcM6Y3aTy5k4xSeB8Gr9vSdvirPYb169pzQ881tX9R1Y5PyCsE5UUt94H5nXRusMMRNbEj",
  "key17": "47aaVNfVxWQ4TYSDoAChYQnjWfRk5uDRBG9RnLRqMrbFP6FyA3R7nZdgwkfqGCyxEd594J28FgUN2jbYAXJ5A7EM",
  "key18": "3PYsWoFjJfyfUBLwp7QuJA5oBcLwPDdx5jif5XJkVV3QxoCeT9Pmg5KNJVGtMrPqzJ5bpZqTocoaZmtRPYuRpTry",
  "key19": "5zTmk6q8mxDR7eYPEqwXjjPaktamuaHD3SMwsLn7L2j9Ki1mYNFYzTuuERtwb1ZbTfuULv8ekc5jdv1N9URLLZyu",
  "key20": "HAvr4WnkJ4hSwzBDLFpemr7BJJcpwjKXns2GgY7JCRMhxQBnKrimomHXxuCjkWvtDuCfuk99CSNARVpXp3Fttcx",
  "key21": "2t9vsGjj3NPzPqAnwiRQ8EM6oGZEwwqw4FBQ9FKEc59FNwKCpybGdkcnwDAWkQhsm8cjd7rFemLXjLHwZdZk1y3w",
  "key22": "28QQVN9fV3Azii1JUJv7BEZBXG1ceyv3dXXjbn2Vg9emf4znh6oCbnza8VeX2wwyvaywzXuZ7ZAaKpT6GJgHht9t",
  "key23": "42Me1zPWz4qGhEpkRXjCBwm3BS4nsdWWWYJrvwis6GMwNw9qZa16kVX4weUz6dj4mpxiwiM9uLmoug4TT8W5gG7X",
  "key24": "28ekR9NK9sVnQqqyz2Ld9G4V4DvqHbmXnzvn3a1VUhdZp2WccjgfZ715t2hTwafPDHhd4Gmb2MejNCdSbeysW1Ax",
  "key25": "27Lh4ppGLBCgJ7TCE2PMJsKaUNTeUYhgj37uRcotQLUVoxVuU4uCYf3YFdtEoUJu4H7HApjfBE3VUmzmHnoiahsh",
  "key26": "QVFS1Yk4197BfEuh1b4nVfpCZy29JcDEduVj8mdkxKBqJ7maWTQcnhr2NFzoU1yq16hBxzZZG2jJd1TLF1Dvt79",
  "key27": "43wVzhS5tdspYVwPLy7RTLrfVpvF2sBMqMSpBs6SYAuk256ofQuenGAGJzzrB48ZfJAMhGEDc8Q6aEFugtvXCmBr",
  "key28": "5C6KxWP2FEFBWbnMirzyxugjStBaa8N9w4KWUs3LU5ByEkmh8VCEpq72xmbbV77Rw6x5soBhvzKdHWPfbUVAyNAT",
  "key29": "NFY2ZvzGFc1GLhXHec1vUmUg7CT4p9L3XXX9jS8RPJpAbX4TVMVTxKv89zjScz7prJ5YzzE5g45fGmeRD2Bm5ZE",
  "key30": "3LyF9Kc24XgamGJdXas1a44xpxfVJ29ptu2x6qe3QaBhsRevCyDRzBoWtcyNUWsCnd8TJrdtSSKT5XXWfSJeMia",
  "key31": "4crG2CePDz2vKZAu5RdirEK3HsxfF4ueT6MKLoqykdrPm1wFvfTSZJGYbvSRE21hy1w3hBuqzHqT7G2XU4vcH7BA",
  "key32": "5yys61dDih9bxjjPBtCBfHwF3XZnKszTuKJ9b6aFyfh12Fp55HA7V8ymM7oD9E95Th1vqQ5egjpqg2N71xhpwSGE",
  "key33": "5gAWQ5qZwRRxmuo3XzZp3XoymajaxYCmXgruuX3yaxh9Bc2wdjmgiyqtQBFgFuFz2UkRkKwRdvyhaW6fc1VfDki5",
  "key34": "Mumh1cTmiPWy4CCuZ7poRXThQebzRA6DFZkWYvzSNUpGQd96NHszUbsrZYV7FtCdLwNgEzXosti7Wd5V7dQWRJ5",
  "key35": "3dyTow9hWuKozf8ubvKvfwA1c2BvKFwv37noiCdXsY4K2HY5uTM4xmuvkt2RMRQWyJkioprqbpfwS2o4hokFgFFs",
  "key36": "4aBZjMvKBUWbmZneccMdwwrTwYp8QxYLJ35F7hKZJBv2iPRVP1ryZ9RqSwiQpYz9NuEGivByFzCGhvetomhuQMBc",
  "key37": "3wXr9Y6FQuXup74deuDY5gUY14WCLvZ5ZJE1sQAbsKS31VqYHPXmrivnMFqxYHZEyatFwVTjVG2GXXKaVM1P5WtH",
  "key38": "41qD8YDYsXGXyUsYhk2ng2zW6niZT1Zx5tg3EacWo3ZFRv2F3rSmBjh5GoUxUujGKQvjx44XxwqtarvnZ1jXWenf",
  "key39": "tHjnKKTKQB55FbqMKKbDtdXaRqooFf5KqVAwytc3sHgNFQ32vuKMEyugCgt1Bk1hB1ozC5vvLtzToUyHPAbdkTs",
  "key40": "5hH4xjHwjG4TsBk79fCodQ5kFkjrsWHJtHJ1peFwYW5nnYycNk9encAvnuZKz5gNjUMjaHbFBRCPMajnfaAYyC5m",
  "key41": "52u1Bgs3JgR3KtsCKAGX8MVG2237pFmqMqYZ7ZaEr4FYXciPNux6b2UEMnriCr7SYrY6VHypPZW5uPXJdgPvFtFL",
  "key42": "5krCyVsn9SLGEen8QN6BoY4KHxkJmZKswF6iALEvwaMkhbVqoTV1w3LazSiW1GxSHuP8ZG3oYevXJYc5S7WtPtzb",
  "key43": "5qNoc5hguWfejxY1LaNiK3JuijELCNHrFNJp5CwFD9NWZfQjbCeTMfeNS2PYbws43jbtomUwAgTARmEocCiNNj9E",
  "key44": "5yNGTzau42giirAo7egdXfogitccyUBd1N16w7fJ2nY1Yd9TuRT7njbtfiqFX1a8hQE8AwNyjAtVCTECsn6TsDqA",
  "key45": "5AxeqGDUnGmLDMiReETiMEchE5RBdWTqbBs8XqLNhgcTqjyzoUay3r8RxzHBCMkS7tRACYYQQzh9KnLALVSYQNiY",
  "key46": "2VfpkZTZBrWYxTmS5vrrGHV53DHZBm2XaUBJJMwm5wBhoJSrcwYjFjjCDwDF6vsX5W7zEgF3WGQd7qK4xswzjevC",
  "key47": "3rEnao5hfQcQjLho6gRq9jzfDPmLDeZF9s9yXSEc1TLENM8Y7GMxyrfoRiN2Vq2gaRm3voqG2i6Amq2X1yCgPEo",
  "key48": "2v9d2pcLf6caW92QyELZSZT6G5JbmQSbBM4646uBTtcgWjEsAV5YJKsWXMJtBZnNZVNswXmrrBUoPvELXkJ4Ac4i",
  "key49": "FMQ2igZNq7ys9iLXqUX44N1AQzp9KGWP64qGBvE62b3vk6wkmJkUbc45M8cv7JFanfjnRYjU16mo6FF3qzCe7Cf"
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
