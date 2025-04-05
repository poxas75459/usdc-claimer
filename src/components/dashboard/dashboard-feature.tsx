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
    "M8DJTeXFCZn6APf9QuhgbsDRrTgebYDsXXEYtnM2T5RtUNHzMqnTCTJGbotfUdjXYCXsUQb9KkALwU3BxTzCSW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QAn73as37hEzMg349zKqzJytHoqwGe6vcxsff5y9imeMdwyXmWTtv2vxdSVwiVR4AddfmsEETsR9j19o5GHT35H",
  "key1": "3hAWbrEJBRagg4K2YvBTvkXQc1ZTFx5HQGXXA7C5BEAfhWqNHC9Tx7MVwdE4bvSaNZKY9Ek8d7vcjAEQLyXJfEzG",
  "key2": "5XQR3NNwUGh7TxcLd4cXhCuGniAafbBwuhpN9YjBpBayaCBkPMWgehcCfZBecLCEVDevVddpvXG5j2sbqXnjSdu6",
  "key3": "2f7xJo9JaxJTQMrRz19wkdPa5WNcQpKqQ85qVQispf4bG43xvarjWRz1cHUNK97QyRxSMtr7vvVbsy6pAZdUwZ8J",
  "key4": "4kzoyGhFFaWY8RSVgTfBL5qejwfT1ScvFSFZLMiPFxkwJT7GVSdy1NVXDiULw15HUnLY7CqWCjxth8dzgo46ZJRY",
  "key5": "2WxK2GSNZEeYkR2DXAMGqzfusN5FsD7ZnuBY4ZAq1pa8ydjrEiDT5W92jjwcp7ZV2ZK9rDzXhwRof3nBZvdPcB1V",
  "key6": "2UnbJfj4KY2ZARwXNvYstarfgLZEa4oS3XbKZD9BgyCrwAyJcJDFh4rtSpf4ym5JXjU61QWtfv4JBnfkBY5h3gED",
  "key7": "5Hr54h7LxbmDzUiv1xJCEo6r4FAt9Fxdj9vP5oBwHEoXSWUpSH5UB4UrXeNXPSpM8Ea2d1qsUPoAwwzCE6Qp9DeC",
  "key8": "XLwbZdb7P5n4QLHsKbUrYPFPL8bTxzu6v4NKBYgAmLgHnJZtMRXhaR5yr8zgrz8dD6sUCp66A2wJAz1mJviqDSg",
  "key9": "ycHRi7QQtBhURvZfvhZ5gUkhq1EyQap8K7KH8fQFMwmjH5ykrAKPWy1qi3fqNR1bqv3qRQsUYTYWuxCvv7JE77R",
  "key10": "2qTqPSZi1fiHasUpMBMLKxfaHsDjBW4gYpfu3Ao1V2aojMxJ6egHGMusZ1Ywrh4yh6ZNSMHNCphRntHXhrEtbTqt",
  "key11": "5M15Cuwu7ZLmFPmmenaZSiadrJZrAP3Ag7KtgaBo3n8bTieKK6nU9CtSsMXL3x9VzMP3awzevovfm2metpXq7JCi",
  "key12": "4kgBHKR3mpgcJ88m6YFHJCdBFreEdC4eKmCfYSVkBbUWao3gyisWQ14ureZx4KDXYS2VdWUZrZBcQKs8SsPF7Qs5",
  "key13": "s2RMT1X2aFHN6XTnPpnL7VDvkBSDK8nPuEc71dPegmHEok2mLbYA32iGLMdCkDZJJk4iGAUbMC8sfx4FMjnCpyV",
  "key14": "3hhK7JNQj6Qc8mLpM7STNr1oDUbiDLG8ivseVnd8JgKmkpojW3kqe1WhoX2mJDgrsyWKd4oC76Mb3VeEvUVXve6N",
  "key15": "C2vCnnrFo9j9DEYCVpqE3cEi6wvb95SrNCtn3WdNbcoSgnY9R3ETgSpfS4TRC6BnaQ5Rz6ZyiXqSCWAdeWHrXdK",
  "key16": "2f5UwYKNFcaDeiajqW7g1Le256iC5NwKRMhuwvEdiUPbe88FBzCPA5XynkV9d3ivdTn4PLeHnGfE3tAKoxLeWJx7",
  "key17": "5QXuHgvd8hZeASTXie1WkzXfgkHCfGUfjZ85i8dMWSeAfyiiduPVDyZdbAT8HFAnVyi95WQfqRv16AQ8USSFb2RV",
  "key18": "4gL4c9srto83wZYiXZppkkUa7AUsdwrVAutLP3JuY3zDemcDzufR9SYTXRFqiTeskY9QNtzyTK3HNdJKV3RR1vrL",
  "key19": "2zcafi8h9sP7xHbGz7dXRsNSasvYuZxrt9Qt5DiS2fz73wggTj5sUM4rUxyCwh8CkGmuwWSr2x7kwUMotHPjcNke",
  "key20": "5e4ycenyuxaA8Jf9bLvXLtMQpdt5FMQ5inHCB7QE1AHQfjSHue2pRVJAmXoeZBhne1yyJ42eSpLkNZ73bEnLwThm",
  "key21": "6bmL7Pd1iKHsNKdd17H4ojACnj3jBXxrUmqGhdMvSFAkXg8RdbT9LMhddvg9VJM9CYPj4CYwGrLsho1AmefcTwH",
  "key22": "2SMhbS9Ba96kVfqXeRbk253ZrKWUXwwvvfb8TN89auopPNA11gJKCgCN4Mgtm9CxwwUSR5776F1321BHB4UMer7c",
  "key23": "2wUtxZQRK9RqmrQsqrfuGZK2a2YQRbboK9mL4Nsg2gHpef8eM3TFvMLxxZZb77fHTbriDJxwCVMa855Q34xyesM2",
  "key24": "3sW5d9qArXrEG53gKAvEpA6Ar9YiDP4UipYuhrTUZZvLNJ1NFbzFrPsznQ4oFymL6v4kA7C6z4BWcemH41tc1KqH",
  "key25": "61xFgpLALfWwUfnepK8TCsMFfkkJ5Av5ih8i4TvcoG97eN3R8eJtN9ySJtbSPHyHLrs7hRcLXEDdwmxsCfokEM6W",
  "key26": "2MGw13LHGk9a4JSxGw153cXj5Pnr6BM11VeKKpjHySzis8mypc8WHkPq81Z83ZTrcz89ihQvKv52pCn1Ufon7Mwd",
  "key27": "NBRATQb5BNPA64axPtzxVTQxuzfMUD7SiaoWnBZ4gi1uqUTo7bVfzrnAZyVUF6fau9QsEPyXTmeZu3UhEjf139q",
  "key28": "3xQaNygpwxBCacGx2dAYnEW2XSAH5GKmCzaH5rnvhAc5TVmJbft6uws1x6o7UkvYuirVNufM9THu3ZqW1ACCXx4A",
  "key29": "4BNLKPTeMuy5ZJ8osR4u12Z729LPAkGBFeUqzFSTFRBph5DXNNtguXrZ5S24yhWnmQTvqGHy7y1eYThTACB9v84V",
  "key30": "5Uu1HzMkhXy9FrrVL1owP9a25Y6gZQqAATGqzexmyDdVFPKPas76igcsTQ9vrNK4bKTkF1S4EEFLAbuBLrfQ8Ra2",
  "key31": "2L1ZmkFuTkAKtZYasJ7z5MUTANT7YhF2XycYnmLHnhnDogUHDnTGRT7dNMok7q23cnNFMiogLgXM2LCBbeku5fzg",
  "key32": "2t9fYgUyDZ91v1UGzP9g6SjxgqRYiBtvj27kUJd2dZR5fyKCff6uUUycuwxTQfqeFR86sKYTKYpMvcxDoBUgBZMg",
  "key33": "gFo2kdyfp4aki8rZNcghdog4DzeyPWC4zASwRctPJRWuKxEmEELiFXF5ze8nRXyiS19QhZXAmQVcaaSVKXEcKFx",
  "key34": "4pgXMyQnC96W3NeeqD3VtMEKP2CxixN4qChxkAartCwFsSfcNQqjfUXs1rgWBS4h714vSPNiZhnjx7bTBAs9tFBB",
  "key35": "5n6DiZnxm5QSWqryjqGFQPp4Dh36jgFCWNJwiXXYrj8bGaCtT7psFMymgjBRP4RX1uRMi6TFewfh1dUGHMV2A1Q2",
  "key36": "HdLmMST2cvRcSQNEhaWQgNypAEm17wtJWPBacmn5swwJeJJsDMX1fAVZnRPgAJ9h7gQzxdXnizCRddL1DAPXRx5",
  "key37": "35ac6mTAvMNQNsejyagfXhAN4o9TGDMmsM1RvsU3xxN9GBK95dzPjSaCe39ZdoG47oU9H65MeTGKvWp8CwmzTfij",
  "key38": "3EG6XcRn8V9xFpmX8HfpkuVkuiArG581CVcLhfWNMC2hXPj5n7rxMxSynsGWwjNhHYvVekRCWzPYRSAE2NvXJhZK",
  "key39": "4AVRwPhU9PB9jzwTGsME8ShjiK4yYjiq4iCEQdPioStP9CqXF5m8biHaMFAtn4bGC9prCmnVHPaBXVNcaFjwVMPF",
  "key40": "49nL3bsrTDbDdx1tbfZd3w34CtptRT32rv8dDkMifsbCjhqbYiU1RPhcVsWFKF6vm7XjUgtNoZqBQTocR9X5Xjct",
  "key41": "54LkQSh7vp2vhDLJqrPkN1QP5FbMjS4HBEogXeqTAz36Bb7GugdPdsV3hnNSJoiWnYZCKwsz78WJ7To17aaAQXtb",
  "key42": "4CoVgiV5hpVY4LfTaDXMbMyeA55QpaTVEjSzjjss64C3s1duJ5pr3uum4J1H4kRMx7o17vc57AePaAWeiuj8rbw6",
  "key43": "2r3MCMEcYo3JgTLFUFCHou69PnSTCVKNu6hSyjM1SZMFKqEUERxnTsvDMjeic9S4vH3XSWyoJcmMtSdHuJEERJzZ",
  "key44": "4Fr81N6ZiNXKZiRujFEJr8eV2w6USm82BUVmyKFq8tSU3Sip8SAezkK7kmzQcujsz8S6yfCkKuKMv1xDH1RvD2yr",
  "key45": "5WbBoptHo3D6ZrDSjZnyVbFimeV9udGDC9Y3v68hU7tTmFu2BfMBmDAtRpfdXo7zn5PC6M47f5vEkQP2LTvG4Vdj",
  "key46": "4b6o5QunszaQrjHUfpS4vKbAPKno2wfr71m3cNnz1EqdHEWi8v9LKpD7CmqCtvkGd2ceTX3Fkao8FwrFfzKanrYp"
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
