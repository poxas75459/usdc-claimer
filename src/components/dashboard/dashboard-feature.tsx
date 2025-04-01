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
    "BJmuNBK8VYLHg2vrdZEeJNigL5KFf4wwa5yF6N7vqS2DsEW4cb6Lz6qykGB2LbZmDeySRE9cFHUovA22fTtbqPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UZ35JJbaKxQ9LCirFHokBTDEbUDi2hoaPaYSwT6iRnGPufJs8fPEWAoajVvbZ5vdtjHumxvU1CukZa5x3MjJBgA",
  "key1": "2xhH9BzimmUMHGD4wXtbFWnesGzn8u5thMgwJvYJPjiiXnCFUZf2sQM1fFaPNXwMnQHebgigDHDGC4K3N43HFoN9",
  "key2": "3KhWQauKH4cBoYr7da4YhTFubJxb52DNsnPdFNvwqpeUEgK3FpZSfVFuWMYm4W2gZDZGGjqtn9LberERjus14w2o",
  "key3": "mgKGRLL4kjTKVkVr1sR2qXkskkYCjgniW4iCGu4Ud6WnVmfFonTSWWVohWbDpQdVRc2sfSeUKvsUJpMm1ijWrM6",
  "key4": "2Z58QqRjnxzVxBVw7zMLJGK4xXYpjZUfDmPQzFZY1KdSAR33zXVFC3bqkivLvmiixHQBFw6zQG5TTaN7XdEP6xUf",
  "key5": "2J2fVrXRxLaFkgzBv1SmF1v1QsWkE93Zgr1N1iqvDJaS1ZNJFe65Kk6Gxm96ojqXcrs4DYoNM2DwNs7MdCRTUxk4",
  "key6": "3F3YgiPbATU2bFEzrDRVv8ABqBQNvGkvC5xnDgovLYzPtBoFQf1TT78fDkLQL7nLExeHVyjo7N3PaLZ4fDMtMUfQ",
  "key7": "4mk3jbXiw6dB4sSVvg6YoLRHDAkJoMzK1tZDQRE2jH14837LyXtwRZoRtL5Uv14SohrhjP6Ye3yvca93jP2yRjff",
  "key8": "4BnVqAuMGgKRYz8z3KErQ4Y7TQ6hCy7agzU7Fvx4JkwhQiqh7WFwA5Nh52TMBFJp7k3YNh1A8tArZqBTzDqS8m1E",
  "key9": "wppjWdPt2PtaPV76kxQtC9jUkLvypqn4zAp36ZEik523b4toFcpxDrdVhV9EtzpN6T4rJCgJEBah8oodqusrC4t",
  "key10": "2BJEVCu2b2CVdqJNRc4WUeNUrLbkbeEojEoipDvx3ijJ2N1seBqB1HkhGZ6TEkYXpYiXibioMYtV3FwKQ2TLuUiP",
  "key11": "4GxoZ7dqMsoHPSAdbQ63xBcyr3BcfvbVuG1wBi7cS5Wozo3zc7FehdLjreASXt2EcvhrJEAnkpoi6zr1rUfp59vj",
  "key12": "213cCafozDiyZnTZtzyJMDDGK7o1y1xtYxcJnFBsuMBjkZqV6xDV13Hnbg6TrMdQGM8N1HnNVsnsL4Lu93kYfmXf",
  "key13": "U9WZCC6UZDuArHXnjUqeq4GcRj15Lit7SRaN3ZEXKyV5PKqV2eaMVh71vHfxrj7R6UwLyYqgdd5CkYLLQBe8Btg",
  "key14": "67mpNMd4xwd4G5bGMn1sTiJDU8JXy4C2gz4TxFW67AkCf1o2tNFLKWMj9gQF9ifAPesFagPBEBqyCadDztMGYKuW",
  "key15": "3a6yjsxSi7mX4vJLbMsv1QcVmpAzzrdLUP7pVBsMAdHbvMmub4d3mbA3BFgh4D7w5C5xdhoLR3XqqdCUmBUWoZc7",
  "key16": "29pNXgYS22kSp5rqZZSeoG6XD3VrhcFFHehSWTnBpMBEAHfMA57jM2hGSqZK2TtBU2cRQULWPFhG6sPpTcgt1UJZ",
  "key17": "2EcwMcb6ANwqp47oy8AamJdQij2Y6d8oKVEJtZ2JRZXwmcXJSAfUczPanJZEDcoMxneiov6Rz8XwjSLRf47CsPh7",
  "key18": "4sw42JQFgYaJmXsm9bs1WhBbfQ9TxXujXB9u1h5PdKFLmr5TrPnu5pG5ExVtmMUkg4j6MEaMaNHXVmauKJAvgP6p",
  "key19": "eECwb4vksUpTTxx8bRY1a2pEsgpq92Bp43p7Lt7QVddoGjuzrSMBsLvN6q4Y6mXeee5vdDrhbHmLShAUsaoM3CL",
  "key20": "4BetQQGFGEYvDAqQcGwvmuvQ1Qxsr7ZJawGkfeKXPbta67BDfEdhDZXq1u22qKMPmBUzNPjX2njzpjCRh4jdsrKj",
  "key21": "41qRL7YajKvvPJNNad9iwWve35o8H9UMvqezNkeGE6PbBvKxejTJm7UtsGeyTLTJgy9nNnX9n1L9nieU9KFs7k3t",
  "key22": "27h9a9DXKDDNA7zxJkWw9Hi8i4hEeDcistfpmkAH3fBajiyqHJbmZ5RaHUFQjsDFNUS7voDUopSDxbydy6G7t2Aq",
  "key23": "2Hd8vS8kQgSpF5mNXcvpNpnEKSVpkrU2D4LVBeA6K5h7ZicavsVAAH8HAbrLjqcMUyTtLeANjuEZegfB25oLyi3R",
  "key24": "qqgBMggAchPhAtncDSDbXdAEwzEBpXBD3vfjAfGwhY5CeECCmKcVGkhSBtEg3Zd5aPfyWGZCFTFKfJFecMMz9Gp",
  "key25": "5xg4WR4YccveMnU9kry4SvwQymcRMWpSkVz1fbbBXy4ALUrFKaz1sr3CUTXYqjSiyseHLSEgUP42M9uMw3Uek4ys",
  "key26": "4HAozEoS4EvSLRsP8na5CQxBvtR2kC8ZViNJaAt4aW6YNhyhwaT4ouV3m9bbJA5iXzT2S3YWzAAKaDg3NCj7EasQ",
  "key27": "2mCpLFFsTs1Wr346tdKuTxtpdXP6YdiUqbRCFKWxWhcNTnDtXnM4Kj8EZ8zfTuFN8APoCansCGoMZVWELEjXGHeM",
  "key28": "3UXMvxpaTHhKdXebgdTp3Z1jYk6ZHrcYrE2ALy28Ed6zXiBffWjXXiVs17Vx2Tos5jvV94DRrtxBh9ZosK3xTU8m",
  "key29": "3gDFYdcbNgwAEDWXUWkPpCk8sx4MvR1RW1apZvganzXn6PqaALSWiM9jLbJcyr2YDaHcBwSM2ZHL3bJXPSU1kRTg",
  "key30": "2H891b6SKikE4t9fpP8kLwa337UnQEzjjc1eaQM4gXxEaNyYcrrZMzJSxfMAxZW6ggskmCLtQLGM9bLB5P2G2R8D",
  "key31": "3kYprYfP6SPggoWuWwJPQrUbX8Xo2TNGzYjuNX2biGpzab4muK7fwSdjiMc4jPwKoLGwfxqqSxuj9Ve5XLryZBap",
  "key32": "tJc55ck1wB8oMge9rcN6JPyhD3M2j4ZUsnYZhimG6XPTosnT5iqLRGyyL5Uj9uiQ1ACKYxbXXcXtyronfuiRhB9",
  "key33": "546rufDmzboS3QNgoAQRTq49bZC2ukAGmugGFPu7YYmMSFQzHYzP9SNKrgFYoVVCuAFLpPwerF2j7uj7DD8gzQWh",
  "key34": "3RHjKEzxquoPoFZhPkiGLtJExQ9A6xY35kRNDzzU3WkidGzGMrhE3T5iiEXMiAUABz4NABuMkAARPsirsbpdmhrz",
  "key35": "44N6fsbq3JDWwFvAU5GUpZHKtabQQsUGAr2vUeZTBafoJUn1KSwfQ63TAxrF95X3jbg2h2RcxCyKqNt7YbZRVi6r",
  "key36": "3cEvdXsq1SR7PdAvhbThNqnik4tsun5tN4ZNwBtqES7HTqPxDK8rmK7WdyjL7tTXGmDVD3pnTxLLfyGxQporWBKd",
  "key37": "4AfGv5XhwtxLhR1PXWptiSbzMVWzHbrrftFr6Rvdvt9APLE6QDUHb79VC4qweCkAnPT244L7NwMV5TJfrHBfd24o"
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
