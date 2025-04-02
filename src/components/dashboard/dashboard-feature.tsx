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
    "5Gw3maBmNzfHZcAyBskxKDtXqvL6yV33iFd74ENZsEaiiyAxu6M5YH87gjaU1iSffxgCWtGUVo3mr1VeW9s3aGYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wi3wpB5CbKHHEHkTJ4jaqi2SUJ3ARuQ2N6526ybdRECbzzTJJv1BGvtSYRV5SC5cTp4bJE45HELGh56RKvJLTDy",
  "key1": "5aE5FxU8bdjdmQsbmoe5MoJ3fMsMQi9NkYBPc4fXY9dABzttiPhHVxS2kyNewULqDMDzgwh26x3eu2hae5fwt7QN",
  "key2": "gXUAZQaR4eurGzZD4snrec5R1JaC1gMEwYsJPEw6r5TqCcVgy3558y6MdWQvpmwS2UrscGJRzGKbvZEkWEQg5eQ",
  "key3": "2SpxJLxnVZJF5woduTN5PVAQii7eYFmu9v1p2t1N1k4jLYrs5Ma1UrewW4oFyx4GWLC5mLE5Pgi5q9XscZLrTzeF",
  "key4": "4CE8xC6812G1yST9Ap9D4bT8xQNYFBnpMpzFxyr95i2Q8LqvoW9gPpThbaJYmKCVSDKAGAbXSJy1CswyNKaz7hgm",
  "key5": "4wRW2k7rMb9LNgZU85r4j3vYYsJS2EpRo89BaENgvonENvfoqzHR3kvjvjjmmeRjNyNg3Qhhwbn7dR2n7ZEH7H65",
  "key6": "2EaczvR3rH7BdWAakf3oj3uGGeHNXbQNbMk4B99rpiC9xwx1gGFEpNVrwon6tFywz1WEBNtgGpBhgNbyNu1GDobH",
  "key7": "4SUxfJSnePj5WuXuHBUhZBGjdQh3xBc4mrwxe6d9wxBTtsQBQjdomXJHG5KT3dC7mC1kYBbMbRQN3Km8yHGvjZD3",
  "key8": "GvMLSLp4BGmveQPMHjSbpuZcavx3d5yTep2M39HcUMNebNtRXHMnS8DEBiXrKUq3vHNxbbWsmTobjcGZ7YkNnc5",
  "key9": "5BLzmQ8jcE5Va1XR4G4KdRwxRLqikBm9QDF9RuojqfKg9wyD4jjVfjdLY8v1uiuaKHN1uW3fS4mc8ViPgPoESw74",
  "key10": "4ADdQ28oaMkwJtQS7xWecxh85BAc5pF9NgBk8vzkkU12SCMBaEviUceK3vGREEhKAAWSP5RLSbMJERhsfU49Krrv",
  "key11": "4LTjM65i5WFt7CNFJTo8ioMGr7e2T8MZ8GHdQZbDGpzBmPwE4NuUn8rHfn11WpUJaaL4oMftyNa1ztU8H6CNMpL1",
  "key12": "3Z4SXSwd2QXcvZyxSoBb8tjxTAgAkdb2By1iDaPjoREbL6LD97m6t7wUxQzi7Y29afxW4daMAypbBVkF4CCRtyPR",
  "key13": "4VqHqusck1XR5RNaM9R2QpVFMUhceGFDFvUip4m3eK1ZpToHTAP3TwpgcFwAeVGwauMhyVnLSREojyz42jRAHwio",
  "key14": "7ixAixZncFcbWGztykZmifWkSk78LQbs2mwS7s6cr2fjGsdqPkGWusN5XxacqJZS1TrRGkUreYguGYtgVCvmQKB",
  "key15": "2qMbEL6kEEZqb37Vyw2ejW6UmBTfZyBX1eKgexRTjtFjtsDh3UKzjpPxZ4RFmBn7fzbjJw4UDxtadvxBnR893Spy",
  "key16": "2LpN5cqrYTVECGqhFYSnctzJzcqJqdosf9mTREFjaAqWgyA6H1xGbQiShPrmWFwUSuHVrkVarT3JRcrRM527R9VK",
  "key17": "2cjMGsn55XWt7RT5hsxs5WT2ugRPvgGme2X7LkF8gD7YK4qvZnE3NwQHMJ44YatZW49awh8HfqmUz54M1pdvovqb",
  "key18": "55q3qkxdf7Q858iEuyGsa8nnu38q9uvvt5BivbKiDmMFqhVcMtFjbAraCbqKFH4jhfgep3GZ123cfQygBaJJNgPH",
  "key19": "4VXcvXqp7KAkpSXf8kJnXDzvbrDkBdCj5XQc7GB1AXoihKiCTYo8nFHBk1GUiAi7dbdk5FTLR3CQNb2MZ3ngVRgf",
  "key20": "4tsMsz15xWfYe1P8wF5dHrBfdLcuMBBavaPhuK1DhQE6EKK6kAaBtNJpYvUpJjtkoUyL8LdTSNGkMgnE42RkQJbv",
  "key21": "2dKSKC3YRFXeDYbrvbywfcGfMSKXKSiUk1Y9VWuzaYtXEGebf4EBnoMgi9VT7PoMqscCtXJQNtu1sp6y7Xkrh5RE",
  "key22": "66rH71MeTiYhYoDFwtsPPveYpWSEbeCndMztHqxWGK7GBrJAfkTuKrTqpDHoYSytjynUqoMMYovXopcDTfFBejx7",
  "key23": "5N7Rx1vWP6FDqRki89VDj65MXAMQSjH5xguksork8B2HRavFXLZ1ACkUXmqvwHak1G1sa3AxVUdNhijZQRsmZu1c",
  "key24": "kBoh8dQzhxXrmSZ6LgYdpzimy5URiK75YHRY1twkwtsddnA9RDsZELHiTefsLKcwePhtW5864UQHYNuQaxRyADA",
  "key25": "3iBpgcp7Ji4RK6LyhBMfM6pEy38aMovJsRXV3eCG4W1CGDmdUoefNaqd3CTrNEuNQQN8mqtwJw1JRgkGPpBfFYnF",
  "key26": "5Tg74tpXEC6cLavx7Zak2sD6Sf5mxRnFTQtThj9XL4tJ4N334Wr5c88JpjAmSG9jk9bXz7Z6dm7QtPX6PTb39Zex",
  "key27": "8QCpcNCmbPguFoSWN7eiSTVAZ2KTDZCLA5fFwzUr446Db8GoLj1bn9VP3zV84JoEAKBo1juSSwMDZJn7BdCyKSt",
  "key28": "aghWgdAbhFyZ9C25MQ2g7ZNJhzJxAcGAeGTzdwhACxBki9kkaDcA8dHw3WhpxBgT1cdYbiFUDXJ9QMJBCKjf1bZ",
  "key29": "4aA9vZefk85uz3RMMjhyXTv6Mbw9zLq4syeW4mWhWaeGwo2GzG3s9EdSjnjAu3NDPE62w2v8cey3diyTvJaoqmxM",
  "key30": "2N5qPzpH8SuNdCP6o7ddCm8T8TyHbSYMCTya9uWNgumF7HyHKJoAWx9p4DdQQJmwMD2341uNVs4KidDny1mFUEAc",
  "key31": "4QyFJBvDaTFkrhPJfd9ePK7NsyzfbvPx8DmG98src6N8BGpNGZzPPAnLaqNGPkU7PsGYVy872BYN2JMPSJqUTLGw",
  "key32": "5Tf7f1cZYKCMiMCr2gksL4S6LCsX6ijbAtR511yx4jfGaGiG1GRinYMpj7GjmkjZDUUqLNE5AGguAGLx8oDW1iSu",
  "key33": "5A3YXcVoTnqZKY7EiGvJuQQK2mUrT5SqgMJGxYzZhwcmyCSSkVNDppMxHP1ACJ7PZdyWV3zXyZ7ZAZCxVRjagqnC",
  "key34": "5em8LCvzoN3VdrZX4qHN9Xi94TTbZdc4CaRmZQ2Bx3UE9FYvoUcN83w66ga5GTB6A8MTmNrSAhiqdL87QARUCKLU",
  "key35": "3ywWC3briRr2CrNu3Y4dxf5YQbtSET7Lej2VvWd6ypXEWpv8jY1duyEnaEw2HaJinZVRoztKjXMeGc8apTBSurMN",
  "key36": "3V7g8ZV5Tyw1M8Vw8G2wUs82hnRCxA1rctfuWDfE1WPxtyQe71DemcXmQEWgmBC5oDivfvV533uD7cKeL419YBQA",
  "key37": "3NF6EJL737Q3Ng5vLi8hbaifKS1zbX56FMLXfH2pBiBpF4vbCq3PLAmgahuuMSepKB2MXk8euyvm312sjEsehrrw",
  "key38": "2LENzU5MT2TUsrwceV2eQsz5oWgWV6z5LNLW537X97qhCLJfqNWi1mg7ZrVtoS5LgShpi3tb3anSdFbN531QyrJf",
  "key39": "3vx5U544zgnzuTz15hekkuYfo7K63Z9LAjUq1sibCavyT5U293DA3yhqSfpa2xCQ9PCg4nVqRq3pai9Hc28zgMb6",
  "key40": "2aLKwU8LEYx5q8viP8UWa97LLifNpC6P4GJShnCmopbAixVVPWkmtgdHp5KhK67pTdPiSGUxhireLfahmgKFM1w5",
  "key41": "3Pg94CiZvoM1SpRfdnYCQ3Y2L3jzEwvfHYAKo7yojtGSj4ZpMcSSgzqCCYjnkuRyD8Ypes2KhBGbJJUSCAWqTLyT",
  "key42": "2Vfm3MiYgp38g94cvEm9txWBYrQ2yt2xisg7AprsRoi1WaYWHyYJf8euNHQK7Q7mTTSyRyAecWfhmRucVwTvvgeg",
  "key43": "56FACBiei16zdeH9Qvw23gZ4mNX9wwBiz3Kw75Ywm1B2wTMsVZ6xzU8HHw1yMR4SPYSPGgiw6GLUcKPRe1s8zg7M",
  "key44": "4hC48Y8cGCFVtjsUdeCE9rsW9XyEJ7dcrMLnVjE99Ek9u96Eb4dKbBRKByNFiiprydg9q47mQTapoPT637TQ2C6m",
  "key45": "3F5j8mL5mLvPjwBUBBDX9eG4kWLTXX8g8q4kxF5ny5wkiJcDm4SYGMRRtG3xJsn2bA7r6ZLAHP2iBnBWsR9KvEjH",
  "key46": "4sjumHXCCF94PUtkJD5HfnwnrYsujXo93Cw7kP1R7eSXhrRcLu2gNE8UmiJgz7aSpw5yLWMNMiErCBU26rMJ4JGN",
  "key47": "5D8StTXX6bxSttDu5YTR6aUuYRE5z865agiXN961Crv1KJSD9ndhKL7XhMdqVD2Yr2Nq4jDs1iMRT15sh7nWkTaK",
  "key48": "4JsD8isiCKfh4HUjqwEEWAjL7NWqFfN7QWves9zHA8gHZYQN18YvfFCM8CRSiZSMde44ybRBDSJrQDSEgJBva6aH",
  "key49": "5P2MQbkA4vJpnt6pLqkSc9bodsr2gGdAAtdndnYdwwu6Ni5xDxqXn9YALBrpxTZvkQXEiLmFr67pT7eA3cSzfzij"
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
