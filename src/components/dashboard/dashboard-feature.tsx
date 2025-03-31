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
    "5st1udRZBkoUY84eRZ7VPowa1vijkXBe1Y8grJeAo77co9F6JMoFx6B5xDE3ibvx4SYCH6ZQZ34T8YvXExNwz85t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d5Vx9WumRJiwnAF2sEWrWPqmpCHh6FvpsEoh56ziipBXtaiJj73kf83KTYhu4LspEZcCVXhg3c76gyZ1F4ec34k",
  "key1": "5AwaV9WRbpCg1irDLz62HAkmjtr27V8Jt9YqmGQxZoM4tbDz6WWmyZKa5Db7FC3Huko7PegJQgdCphmfLjiVefwq",
  "key2": "2vUEW9tqZTmFMzUBzPirNbQAHtf1my5CtUsH676UC7WGmHqZ5L8yquhUtB1YDJjCbXUneEsb71nF7Sd6yhEEdXfY",
  "key3": "3swGg8on1R5LeUbnRmGKN7nap1q6h8jbUVXY4qusxodx2addhgprgVSA9XvmwRntVJaHukdXwCTzRznffEcV5w5R",
  "key4": "L3KDQ682xSdPr7cUb6mvziQXBxRYgcEa8yRXagZ4uQ64RDWJTXkxZdQPt298kRfd7P2CvWAUGrYJovq2xpf25rY",
  "key5": "5oXL9Vfu2QiJzfUvoB8MNgy9cUBBwJZWggRvJhi6YaTCvEY8ZhuDTpCFimAmBSPSgDv2mGX46YzTwBqwokAedKCC",
  "key6": "4h8nMsj1JrcsJDyChJxQ2GbfdjyYUrjyVZRiT2nbsVS7hYcGKaMuAcFtyNScK2nxDx1RKUztN1xHoHjQMZh7g4QT",
  "key7": "2TLPnXL1Zu5uFXMzRTdc4vWdKPhayz7ymynb9kBZJYYVXdxpsT43fQSURCQykhkks6u2YwBvqDnLrdLoGGJRPQWs",
  "key8": "Csm8EJqkGrJBiqCS3VjG3WQY3YMK6csMWVLKBc7CWK7j9MZpeQNxKA2KrKdW6R7fqmXXHdwG2wyRjSkZovAivdD",
  "key9": "55FTLqCT4d6LKgjfyPSggr4s8UaNsC66NNYpwr4qkifW2ewR3HwA2TxqhUs6vpTerKqB5r7a3dKvuB4gEuSFg2rk",
  "key10": "32C7n9dU9ZUw6Xc86VciUzeT5tF4XKgkByd1UiXg5bbMYiMjjnrKF9Zuo4bTphXJriTFbMZvkFF6bPaR4YZ5LZhz",
  "key11": "2F6RBGSxugLB8J16puWycDNuP9fQdPMf5fSVhXGxKivwMLVxk5FpL8RqYzmyeHjhNHvJx2WQ4CfWr618Y25JXPX1",
  "key12": "3qpj6iVaK8WtcyB9XgyDStAizpJt72Szfrh5FRhmoFjK7JNLHxy3WGi1JPyajqf4TKLbzuqrXnXHM6EysLer5zv5",
  "key13": "6TegTDMCKqumGYWg4rgxpV1GbMs1tubaDz5vaCntfyhheqy5TiFhCARcFrP8anRmruevqRgiMfDoiAavFEayqsM",
  "key14": "4aWFcH5hiarvboqeBWWEXWUf4ryEnmsWt7hi2ysFMBHfaS1VSMnwndsRVqgRWBXecTj6iyyXtRyXfnECrDvR8G72",
  "key15": "63swdYm8pya6cWXjW2JSSmHDrnoxqCR8v9eaibyUiysbJwCNHwRcfLVrkZ2KQiEzZsWUsNELa6EMidhRZNkD6VXH",
  "key16": "UBGnmhE2KMLvsCGBungvUNZfNJpB2hvBuVJghXt6kYNoTsUBNqP31XPNAMySw7sYxxFrDqsw7Q4aKC7LY6MBXJW",
  "key17": "2LrhAtbFs9QNJSczff5bdteCryxEfKcLh5h9YsT9dpvm1ABKNrN89p3a8wtZzTJPi8DLMwV8xsLhNv9TnnFL5Z11",
  "key18": "PGFsEiP2SdWvUAFX8d8mW9gdysMW3py3Y1yeqhCQ4fzWpPAqPVNTwic3SWKCqsVEiGXUBeyNWj7b68SunQyvd9W",
  "key19": "3ctsme6fhdFP5TJZ7GKmfRrJ4cL4XWkKzHc9iYJtMBGewE7mLjAuGEJbtXpKEswSFpgTGyByZS3PzgUqVxgdEukJ",
  "key20": "4mnqvFWjrRbcQQkp9YxieZbUv3SCzsvYRATNHsMjqrLbEzjD8Q2FHfthBuSMXFiW6bigjrhHzHvWk3EYFKb2H5xz",
  "key21": "3qStCYmnr6BSYPTUJWU3yc7K6ByUcfckXqRkvaeXtXurLKjaQKBUD7T3eJy7YGwM5fnG8j3gb6oyNALqTwPjc3Hu",
  "key22": "335Zeb2m41ih6hpSLtvhuY71ihngUnJ4j7gdZtf7V4gt8FdvGPp2Lg7ai5pjkRd26mBQrUzN4mgeHebD7tg8uZiN",
  "key23": "rujwAUQoPdmtqfwNbeYoCY7ZrT4Gumxh7KjwCX8KzaZmQ2P3LL8rsucDzLFwu2iyGQzxqjMMnwyHypKQeufndiU",
  "key24": "5KYtYag945RKztVYtSau1UQ91Vghrk1MTkRHCwjgaZD6sVouDAdmhJWkndAACn8bVS3z5ZrW8vWag73cHtFcXeBj",
  "key25": "5MirRHVCR6V3MbL8qprj555vDZGuZxWiqN2hbZYtUBGqJSSUxEYFR7dAf1qMCLCBEkzdrjV3pdWD3JKX7HFsB1G6",
  "key26": "4dcUSG2KZg7uTWMyd21suyV5vmvQtEmFGqiRM9TUT3zRaHATkbJ8tJAKL5CLWgiHzm7Cdjy2CQetnBsfoiZ6ziuY",
  "key27": "5s5LFXCFEDJh93GSmZgoRUscdbQSE1pQqbdzmMHEzHRC6MGUc8JQcK6jf5T55MnWneJUrQj3amU3Rc11erJtz3u1",
  "key28": "5tCVUQFi8Xwpxea56Pua6KoNXSBBsxKxfD8mQ2Vfi7eYa76Ns2mHH9wvi5qmA1aFQ3gaguTaFqUGBSrAgjNnjExE",
  "key29": "28C3kMSP1EwvHn9e5ntijaNP2dyitQBifYJ6EmsknxFDgsvkvbTmxiPQBAiE4PNZAMbXKASoRFyQVUEKStbiPxnr",
  "key30": "2wMaNrKGL6fHpZXiEcPsRkQkLPRMjfTeCf7MQM3Lt2a31SzgdhW1rmy2Z6GFKxRwVMr1pgbtCV2oEDFHFLKqoyru",
  "key31": "5r8LuezW7F9MKQ3ytLNdkH9Hu8CoN3Cw4gviVLMNCsfDpCyUPT41pnxips4YMmL5tpiQuxUEYP7gtCeWvHpgV5m2",
  "key32": "2KB3xoREzgHEvTxmTx4w1r4nNYLfdYNfixogZSFbPy1EavqfCnwuyxBg3XS9k7Z3hY1bS6GJMtEFdJyBb2Lii15E",
  "key33": "5urLpjKCpNZJksb4QXscPcFLFz8Nf4WhfFmEBoTRnavdUkLtaacoGBgnGMY6Yd7QUfLeVfjCV2ZViEKWU19MCqqA",
  "key34": "vQ5zTHsBz4EM37yhGVJHDewgMeczJitcsz6nLyRQPSHYji1WjamcdqErcDjRnJd1dMHwm9jxpT7Lrg7kFj5jeyw",
  "key35": "2b7g54aPX6GKPAoBhEdhUwvt9jmDHHueh8y5WF4H9ueSvwPduZxx3L1j9FvPX1Cw7QKqwjN1423rE6kMAXRu8sXf",
  "key36": "2oQVhXBCfMRuqe2hzsqA3tnpUiXtjyttgRvbx2TWCnmLYsYmhxRRCNzXj9P6n5XHZjFqVtD4fvJXz7LffTPGk1X3",
  "key37": "2LttwUfCe83gAZJ6HLaWsbEJ4qzdoAHrKAhCoQR19LFAZJPrUinArxR52Zbguh2J3SqEscqdMusEHz43hNqqrMzz",
  "key38": "3sB3eQyo9HyjU1pVtc4g14jQVinABZKtxuqJHiatRJbDBa6fbRDaMmNrrW79FvDQtU2WPB8kpuissqPzzm78jX9n",
  "key39": "2DqDEm3RvLZL44RgmHe1AQ56Az6Q7N9xo3PMtjRKV25tViXNTVqzi8fkJncYHGV9YXireESwzFegFB9HHbVZExrk",
  "key40": "qyGgvJXAmpD4F6mFv1Z7gCDxD799D2vt328KxpYZRvEEiEu1151mXciN798Q3kDHJ29duSogh419Ax99A9ThqSy",
  "key41": "3JM62BKmrV8ty2CjpwuKS3pdQsEwCBaNFXEi6RsWhrM3AP9zrG5kFTK84r2wmxqyG1zRBWFoSZhSiQ5YtdAHmYB5",
  "key42": "46PgmgAkNupLWKXGV43QrQ8KfCJiKvNRNWEyFbMSaj3hWBS17DxU1KSsmLn9Wgzqx8S5Tyi9UmQnvYAB2EBVq6J2",
  "key43": "2wFhJvfnnXohdwT2neCq6z4Ybr8WTwvcxUQy7PUr4R39MytiXc1Zhcm6R4iPy2Mj4HmzVcSLq3yMUfwPfCLsQuWd",
  "key44": "4TWPMZCkLMYLSmdaAEYqPuhzrbPKi9dkAEj2xta11oVcfcY9FxgBjHXJ5ffAxFRHCKNj2U35ELUMu94WHGppGqQN",
  "key45": "2ZAtA55LPBZ5BQWQ24bUmKJJCkNHkAMmwpYCLPacfF42QUos1idaiiD92APR4gw2rCHHmD7GWREP1GqwuURThQWg",
  "key46": "2jy7md4A6SDzhag1Q1pugUHE7FSDiSg9aHhB6RZuK91DBovwTyQn9r7HopZYCHnS3C59oERgk3myxetDYw7sNESX",
  "key47": "vNGtXoooW54wttScjhGeiFrkLfRuoS2DhqM5Fag3oh7W5QXRTtBuoC5GgvujoAwHWTvAMtQgzbkJuDNKpMEz2SZ",
  "key48": "5LG2zjPv77PwTGpFKuugetsooos3o3xdznxWVt64iKG7xQqrFx1REzrpnreXzuribsk1u77ED9TieE7iKZrXKhuP",
  "key49": "2uuP7mez29fHkf5uHVnvjnAm2Jfcjw2i9w9Znf4jTuX53NSQEZ8dSLTB3cZ5hKEeuCeCjHfhTwiBesotLPNM1pKT"
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
