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
    "9dfQEj7NBJ3uRG9xt6Q2gaRjH5fr9t3c9KocB2EGNPDDzUH1MZSP7T7FymUcyimM5EBVHyU8t62frsAQgbRpnmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fib8ejNJ7GK8nT3kNbqfKvUq79xWoGD9z7yFCYayCoWfpE1auTkgpaU91yCfYMsr6RvJSsNEv1gaAD5Le8xna58",
  "key1": "4suuoYDsGtQpiD87jdSfn83ih2ubrWjAcydSGWkNPaGetYgencgQ5TUNwCQ53bfANke71NgxUzyReAoJaw8Jg8fD",
  "key2": "5jPr2hXomBSZxVLbdVURFSTN7hwn8ScQcbf95LMWMJLkmYS9U3iQGFmeubeoBF1honZmhhAtBxsaKHtE5i68v6Ew",
  "key3": "BtLnbHrjRQBtzVnB1afaAopFkcrnUdn76iAdQNXx5M6bAydNc95YJxZnHywPRFprdyjB9zDjDmHhiYhAhs9sThC",
  "key4": "5m8EVnLJwdtmhiU99nUZe7WeibKKRiqWJyw5uu3zRqHAecyD4i4MxJbKG5iFLLSagXFmFL8bfCkxmN5pzUcs1FCN",
  "key5": "5JecY2HyP2BEJvLCHH7QQBFpSkR5MRTkUAAAebDAXNB9hXq6Gc5JBw4dAhPvefaob9RJkf2Mx7dSmZZ33Xs3vrw6",
  "key6": "2Y83FJRESomm6y3tA8pKagiBLpboJMGehSPAbUHERHfFvRoqC4Lgz2XdhaBqx5jD7i6vkRDUR99cjePDrVjG3axE",
  "key7": "34vjxxz7Pbvy4m1FHdad6rm3rab6fUSCiGmSRH5pcThF8PabwgDf3MEp6hTN2j5DSuVpHSp89SyfjvqeDriBkmwe",
  "key8": "P5FsEEwmRDdMQS1uimAjYmhL5Y11R6fQDzd5QvPF4NQSDQo7w9Hhk9Cw2HBLX8kyryeSarBqmvPVUTC21cCkoxu",
  "key9": "4Wst8MdRV7Mda1PzhKgWsy4GPpCUTuabRTYcWxCerwXUFcZkggHTkgucZbscXrus4SB1qr1kmgncMFEwTFkjBTiY",
  "key10": "2CoZp6KXuUSLEB2xSsgArposnd9NE9F3FUy5eQEdZTL1GHLttmBsWLeX6od6Hz5J34Smz6n4VeCBEXABq5k3NeKo",
  "key11": "366ipNH7XsZmAjsJuNuHus7Ahn9cksaaT8hxWQpET4ShWYxmqTTF7D7qd1rk9FFhgTXkKxBB8LLF7tWgJDW646i2",
  "key12": "4kmpirZCTaJUqG93bQ6tVX9RqYxYehEPeFiGPsATrfzVS8YECgtjdJ7DEX4SWC4zKYPwiksQ3pjgkdY6FARHcA5Z",
  "key13": "4x9NxyaaWJw1bCTMmogmR5Kk4uwUaFMQaAxu7CXGGN8Ad4NC3hC75jNuXSSqC8wa55goVDc4AJ3j4jbKgL7M64PD",
  "key14": "4vsGhrHsaPHb5XC46H7JtotScjqVAyc3d6Rh8rUSaC9MqHugh5TybMfBYU3C3MLraQXTkTb6zQCSipiiHZt7nnTq",
  "key15": "3HE7VeEG2qBzMY5Cbp6YgjJ8HhDbWqiokHGYNTcWhQMK57cxafGqmLXEDLmm7YKAaMUY3Rz8RaReqRR4g8MPQpp3",
  "key16": "4VX9vsQySLBVsS1Xrtwm8hrnNrLFQfYtjWg5u7tgphBwfES14Nj19umaqxFvRcp5imJkGnx5S4MCyVBDXy5J8fsT",
  "key17": "5rcBwe6QzzT3AaRzvA29xJVZsBpNJEsW7H8qzMotYbknfCeaLAQaDDTYeupi5UaBwn7ujEw4STCp6hHbLBKXHpNY",
  "key18": "2j3REqfudgHaYWTiwUXAhm1azgWqPSg85xDUwQN6jpbtQtSwRh44z1hk9CA5RDXz6LNEYFx22u4bAzSSmbTLpc6s",
  "key19": "5FZfcAGVNBaZAPZtdFbCChPmt13uekzvRwCRpW1p7KmBbKtPzEd8N4SibzQehssjNYFsq8ppYfJ6r2X5XRAG6r8p",
  "key20": "3cPZXUqwQJ3M6p19oU4ZysMRNRGVe7A24m7TN5CDo7aa27BiydHUSLZKgszAmLNsyjHBt5QimrDFbRgkGJvWNmn4",
  "key21": "5gciJuLMQBySvrDCcuAThkZ6rTwXdRC5ZREsyG3vn5HPSk6E5hK9Jfd86mJBf9aUTpMAMum4omssadK5mX8UVWpY",
  "key22": "kDpCaa3skd59w2c95zSMv9aUPDcTL5FoT5cdNmvs7rda2CvHhmDNW2hY1RBR8zhP6a8CZMUgUj5XEp1mErrNSDs",
  "key23": "3iM7pnr2iM3mCSax8QVoTiYaizkaqT1Hd33BK7Soq3gF7kgn3T13YWv2e64CNtNYUEcN9iDeKop2WcPzmHQkCgT9",
  "key24": "eMWhbGvAGh29dnCx1dqKnrAnTxxpaJNtXr3iz6EXowBE5UiXLLzYasv46oaJQ8aRZ59VfP24Wwfp4PncXtizsD9",
  "key25": "2yapCJUgtpxT82uDfM6M79SU3V4wCrYgS9Gw5Nvbv21U7wuW71t3s9kE76vrNxa3fVWX1Jvp6zbZDapSGa1pJZTZ",
  "key26": "2JbJmTeZ6wq6rxCpvivQQ2ndicebQRHWB1zrqaVZu3Cg5pxPH93dZpynF7rcHermtouekYFRmeJRLNE5GUYkMDbg",
  "key27": "3EUrs148aB5QSCLmqJUwYu9A33A8JAxyZ6HZDdqQGX3S9gxQQSZDrFugtHqxb9wM1yStiMWy4RGfj7vSXjeB9bSH",
  "key28": "87borG3QgvN56oK4BLfAhF3AqFpMwgZm9R7asWZHApdfTSGSwBvuFLvyhmVqQmvEf3Z7Bb3mNc9mrmxW9k7swMb",
  "key29": "42KdN12SVsKbM7w2Zxw6rsWYimQDLNg3HNdp7B5MBozV6Qa9vGXfJLwtENWCWMa6EjiQfzBmYcrApuH2sSXmH7Tz",
  "key30": "3oLHu97HZWrVcpZJNmm5rCwNQcN4kbvdwibDPqHGZiZu9zG6oc9vXK4eV3qUjyUBTmcgnU7iaQ2xQJ7GGao2WD5C",
  "key31": "2LZrpXxBkSyqPMzq2LpiN3YW78VDMTbJkqopTvPt9668xLApi4Z2fu56pMZpVFbAN3yUMShcoaNSweiJzGniSvb6",
  "key32": "3WDXAS5G17BZWy6scj3KumgJT1HdwTVy7CdLrRYP5L9ntaYgfnp3WDxyUSY1d2brfmZ1GHmmuY4zm4QfBrsL71La",
  "key33": "3t8nTBiNhqDRuoo9dkzrKDhDh4AGMYffBKy3P4WPJwU9wzqsRst7QGbTur8mW97dCJWyQ4mST6WDBSotBXgyjsLz",
  "key34": "5wJvcSK7fPk3Gm6GYdiqRFNtsmEFMEg2aYoA2158tmhGoiAfVq5bJaSRucxPh9dHLYKkpzC78mHD9yDKY8nz3NGD",
  "key35": "3kWJtg9kKibXm9PKt27KfcyzqJsiQFT7voQzyzoiGV3NDtNSq4yTbaqm3Zp4ScmT8XvfjLApzr8d392hj3CZ4kVv",
  "key36": "2iQEjyVpzLimQTKuiNFBdqcpBTuH23Yy2rmN79o7DHrJCHa94Hbu98VUi9TKi65ozcEyFCbZUjhToFSkXpx3Cfdb",
  "key37": "3HGd5d1ofDYoYNLVwwWdhdaEs3DjzLWp85Pu1dhGciohoAhuFe13q84UHubBUts9Fr3eiqgxjVoLSvrFcYyUana6"
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
