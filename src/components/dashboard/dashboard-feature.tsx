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
    "riXUmtEuQNvu9sHpvpHEDVwknrCELckSPZumMXDMzYjUDbk7y4r93gpfXQf6sb35SGPfFVWJz2NLCPeFk6mcBRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qiYwAEhq1CkdxA8r5YCBSkFkQv1MgW7FWLvMbab9V2jRbTfJijUWWdw49c2UHw6CVFbvYRD4UYTjTJTYcGeNdok",
  "key1": "5UdRFU1pSpJEWTgoK6mWiuLLdwqNE8KH8vtnHdf6gCvZ3Q6EdnHsr3GWtTtUy6iFcG77qGagj8j1t2CduMRkzMdq",
  "key2": "KnRwfnK2t11fEXp548A4YWAGrXNp7VTZrtqfC15gbCu6FCK8tZZ3yrUpc2KtRZPCLk57d5HLFwSK6QtwTJZX6V1",
  "key3": "PHNv1d8j7nvBGjJZkSU2vhqfsvG5Ky7bJWqpN9uHUukY4MeAQBsx2FUpRJVFjLSMESiE9Lunksq6ECJZF2MpA3h",
  "key4": "cjh5tM7nnRczZmTH4xvCP5CYcq2B7dDF4yYXLcWEsRMazT36rTANCB6A2pqsM36s7sjyytACBbuAvNFukwgqDn3",
  "key5": "JF8k82vA4NqsWtZ38M4JZ6mwvdfz2v7JjinE2bKwfMxx3wBPssMtdvTH2VwpKA3a6qBLpwtUYTrT1wyEoUdLmXz",
  "key6": "23DWidfMY1ZMith8gDucsFXnoGfPmLeK6WvgeNyS3CNv7v3hckqExLUXvWeUamfTkRkWpY6ofgFTMW4Ez9p5yXcb",
  "key7": "uC1to4mJ1sgRKGJ7nkyi8adrnj3ZefE6DPQrc9D1JUQQAANSQbjra8CMUvMSzuDbwnxQySmUy1SnjQw7JGZop6y",
  "key8": "4Gs3841E2C2hjCnjNCNnZ2sTMyWaweNsjCT99PK2BT1njnAo75sFZCzxCpQXP6CKo45P8dYm8ZCJBSq597ypg2C6",
  "key9": "28hCdUu5qbxuQbgzfz5gxtXYTmJXV8GpZB8cA3mtejaU22TJDkFg6PtA1YnCzcsBGKcMF1S8DiDkzAvsi2aYx5xU",
  "key10": "2VeekpGbZq41QngeK2avQk9XNkygHpxUkDPvPp7hjdvqTDnyxsQVg5FdRUJUmBoSYCf1TavPXDoz7SoCNuQi3zU2",
  "key11": "3MbXTNg4WPay7bqxDTFfhAr26eENxwynVhoy8Es9CGECbPpXjcGNGyPM1DVjcg1T8M9dEg9jnmsdFR5TLAB3guCY",
  "key12": "3ocNLtJxATzxqGkgjepfb9JDom7TeTvt35UK5Rjc99KTiJsfsxhp436EWSiPeK8gNAsuPhhqnhAXeTv7NCBJAWtq",
  "key13": "28RuCAHx2aEFndXxHo5SMzPwLjnQL3zmnd5fzkUssHG3XXFAgudhRPkDfarxEGU8uYoLErj62kFRcmG3HH73CiPp",
  "key14": "4KGV8HwaXABUyTA2yXJ7dKzvyZ7szTguFZuLyBfa1MuNym1UXQYwuH8knL6gydTVpBKbcz6ArfyJkCaE2RrWJFss",
  "key15": "3GsZQMx2QEzLuh3AYNHXohqixUR5KyabUifnq1DLhW2cEHGsyDwLoeAieJn9nMyU5tERUXknzJHfoRvq2fmvF4LE",
  "key16": "66xuNu4DxTPjDQ3bnsCp1sXgXhuPfPzsXvcWCPauzd9St7QiWS23CmcbLNc5MzH2DCRTZAtM6v78xZz1LuxcePqG",
  "key17": "3i2Sz5GQoebRj78oCwQRNQQeQjfKCNjkUkchZfA6R7tFvR5WLcpLuj8figTT85xebi1qK9PLdMc1KrW4fivAz7Eh",
  "key18": "5m5QFGa9DEf1jvT51iR4yFzi2FBaL2VT7P8NhpZRv27wrHFBtSSyF6NMU1nJQeKMsnyxcDG2vMBpJz6BqwMGE628",
  "key19": "29pc5ESwwCRndRz1w6oCo1y4qDj6DjMJPAjLM5U9YE1uKXD5mJ1cW2EuHRP6QegJMML2xaMCv1ciDrdgYzMsnXys",
  "key20": "4ZMa3iHbDzqPBTA2ogeFnGwxHcH3apaguLCF81Gy3LnyRe3y1E7HASL8KtoGhwVra9jsQs7BMJbHHQB9tiLgP2tD",
  "key21": "jDcoUpZK3cTtS3TNYAN8dQRPQLcGLK4rxFXYaQ1rvP4nct7AJbqDzwfSKY435P9hB2Hhvd17psnf6D5Kqf89tMe",
  "key22": "4Fh7n9bmdx2t43h7zXpBH6uYSQAM567SQkMLz1RkLNs6N5LPc3GMS4NpExbPukSnyZpCVQ8tnn6mTcLkjYRvnX5c",
  "key23": "3WpvcuzHDzUk2X8gB3Enk2yTT6nR5aZJpoHQK2NQCkAnFRLFMyoBr7QqNmiZSatAh9Rxs1p17FYjSpr7kiPa8rVy",
  "key24": "hc2dTRVeVGUCwEBinZCXfHMMy1vrixeBa2TzS8JJMKKg7cfMCa6WRiY1d1tuH5ffybUcjeqTVCt9CK5sfDJKkHB",
  "key25": "5MpHnRBWkBd65CsJcd7NuVycu8Kd1nvPB5tY94cmcjwENeDD9U7872qbCag8ZrhBvtdFfRec4ddrqJTzAkECaN8P",
  "key26": "4ooPcbmxFbrGXGsLxJzTyz88XAWeL46GPezHbnmt9tG2eQyvaH7VfSpadxeZmPh4eR5mqZDBZLubE1WNtbQbMcHv",
  "key27": "5UJEU2UiDuhTZf9BDjzRdZKG3raDsMatfgoewX4ebbYGPJkyG67sgjEBBL3fM2EcPZmA1f1LM3W27HwNaTA6abQ",
  "key28": "CcbqLPneQHKDph2EHRUqBpZ9TCW56TLwUVMyvAhkyeohyWyEVULyaikuexv4SAqE55bVrZ8de4jYXUxyTZanqY1",
  "key29": "5XeZ42WMHuubDcpMpME2PNVDwDe23AcxdsWq5v9dDDDHURvhGz2aCDhFx4y3gpTPu8mHp7Xi3dLX9uLP3bRv9qxG",
  "key30": "5pPujocS5KDnisfGgBM3SSMCRNecsg67tnfZFrDbrLovuifgMXFBnsEHY7DUBigPTWcAx5AE338ncMQiafCovq1h",
  "key31": "5hxgQm3aPf5rQfhEjKmy2AMgJWJj5XgDB974VHCN4TGJmAuHikyNqMEDtUwgPeWiMZabzCTMH5FKnbxoqKXY4eZA",
  "key32": "3fT54GhtY5eXFUhPZfDak9hctmDBkVfDbGSLHAVugqUR16JhdVPBbeR8ecoxFY8snnfVEqXcgihzAFGzgvTDFqBY",
  "key33": "3u5YYymyQAnssF398WZVgJcRDqg3qpK5CgQ5hqYtB2Bg14rZfnzN7khSwZf2oUypsfjmj1ZtJDi2sWTW1eskuM2A",
  "key34": "5qCRuRHG74cUVAVSmng7GebHKATXimRPVCTUh4yeB4J6XzBdnuZ8dNiQJHksrxXpTEVurFKLhApwTKiTnhs54qTJ",
  "key35": "65bd1Nsr3LJDsxCHToVehvjZVrhZyhLtHGvx6SQVgkBAAGk2rLXYBpXwsueH8M5NT5WHgW4vrKGXVGoDm2i3Buzn",
  "key36": "5bYzuRMnzewofKWZ3tk67AospKboV8MKBwM24XviPTmjGrDfxn7CnGBQqgtL4sp1frZ9GDKvncW3W61pjCjuNmFG",
  "key37": "2gaTWYSXmdhSE9VJvTz33uy2ifk546gaRnPZaVyAUrmBAnT4ELy45DdsCFnwmK3qW7BoAsdW9NJShdVzWMmYdBiR",
  "key38": "4W77GkTnVUX7iMdjbzLpFu2jAeArHpGVJPGAT9E1Vt1Ls8P8HUa8fQ9SWFFGsnk8BazeNNGBa8tGkjPQJoUpHgUx",
  "key39": "3cUNpfqepxvTDcAHe2C9WjNi8Gps5m6rdcK1cuK36WB7UL1hPxctA7vk6PWuUYNknESGUzCJHyuik3zseDUmMghR",
  "key40": "3PVAUheP1jEfeLsSDLemP9mcPVd1wcrAw73RQcfSGTzksk4BYyU9a3cmJbux9hfzG1M6Ryap13E3YHejjnTzisse",
  "key41": "2FwawNSeyKz32BGxDK8dJH3NAwagfkfJ7p4WBepZGd8r4L4tnd8hoSfGe9hRYxkbj2ahR8QfjtCfkB6xeWFUVVyZ",
  "key42": "5Ujx2jWJY4P7LwxCXTVSm9HbKQPbD9cFAHHxdBFP3Y1rYcw5v1du78xFNw6WoTAoSRH2WiHEHykNVfWbWtvHSa6e",
  "key43": "4Zr19m1pv6LQDvX9trxECcXRC6dZuJNCLGXSqBCqTyz81PW43z5GyDG6gRXQQDoJ5QLkvxGHi8ehpWJ6Su8hLhLp",
  "key44": "5c5kgzqMz5iSEmYTG3hbd237djqkFs4ByMNA78sDJRRyTjPDw2eGjf8Ccc9k8p845qBp9KJa1mZagasN6GGSiXSG",
  "key45": "4sbNY2FjNzVpXBLn2MmKh87HYSVB4ywpDufLNVu2ySZ3aXAcKpesGMnK5cMAb3zJGbA8HBpMbPCiAkgribzAR4hE",
  "key46": "2E2eH85QsjbWbgLdQ89FZfGodqXcMtooQS5Jcf83LtfBVENBRG7qmDdVwmGJxPEZW619HELUgLz1ryPdqeNoFb3g",
  "key47": "4zqHwVoxwAxTonkUvrJqyeaYNke7VADSt4NVe5NGmcdJyH4hqP7vkPqopCwPdVJGdkcM5o7kCECb3thEjaL7JKPx",
  "key48": "2DXiERZ6oszuTURCJCaupmQGnaaUv6q8MS9qtPotqPAMg2i5vNp7VvPo1sDz97oh5eWzSEe1rJjojbDZnb8K2X7y",
  "key49": "gf2n7ZgrsBiLGx7BeTKUoqn1pHNob9u9cv89nGPRMLGqZGDArVQUEemTqNqt2Y7DLCK5dAqTMdrvArMiJjembT6"
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
