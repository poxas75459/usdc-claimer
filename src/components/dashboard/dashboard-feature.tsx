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
    "4fZy7mhTFhbnryTkvNMHUS8owZXUPzKYZZvo4WugBrjJj1ELrRmgBeL7vyUh7GtJN47CLjwc8SErXXezScVLuhPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fsLRizkpvKGm8mgkpvY22PdxcSUQakNUWDkCUR6w3fvsfvpMDfHinrnzgJ7C5PrQangGCx6koaSr3eDVeRh4Gi9",
  "key1": "2oZtYafsan8amFiSV3xpnY7PHupmWUT89MsxgpZhSVTZ2WExchbToAHztohnkQjPUtHFWYW5ELAUP73wWae1AwcA",
  "key2": "2E6N91ag6KhrJZaP5TE2y46KukqyBWPVGCU9ofVeMtrrSxYpStLW7CWm1cEsSdCfrPDEoXtc83wtszvqaGhEgWfw",
  "key3": "22jbTZYZupGLLHQTa9Euu95rz1xaH9qpoCJBeSPds5WV4MfjMQLUXieNEKpLs9W9eD5mFPiKmVqxrH2CTmaV1Gmg",
  "key4": "FvRpPb2jnUCV2oAYGCRtkxUebqghHGRUDR428BWStr8d46tN1pcAi46uQUK3ZExJyZNhPSNGknsLwoor5Je1LRz",
  "key5": "5z5y6W6TKEaSQKAFks7TGZJWrdiC4f11sfZWfves7SLtCYysuFoVKrrsTc6M4HLWqRa43nNW1hpqLAFn4Kfhns8h",
  "key6": "31Vpkn3VEUxZiTcqPQhkb8vkS7yEzKAwqvMDu5L4rAsmZd3jM6h27TR8DDyvh7Gdzi3mp7ACjtNqC7PDUDUVdqKb",
  "key7": "2fTUsjqjxBZZSJZb7MnpwGnUgEwVsJbwiGNyLFxMxWapsPq1ntLqaJcyufgFeiixDgwH9CJTnztHF1RgCdMagvYj",
  "key8": "1XN9QbWeN6Ug2AZNb3BWKA8NkVfXcAzxXwBiABnyw3sCujv2uHLmJTU43qqPTD1emVHE5BfkxaQoaBs4naMHpKr",
  "key9": "4gBcwyXKXfpNHAUakQPDt8VjBL4L1RjohtWoMCRWMSVUWPimBH2bF68s618CegnqiAqBirkGrf8hYPTswrqt2U3h",
  "key10": "3wkLG2iVkAL8YYCCsxWUo7YAX8Q8kUsTt5G1QTLHF3yPPZipKYWoi57NkNTMnTRbMctf9kcDJkrPqTzNKWqdxE1W",
  "key11": "3uSS6PUsVzod88aG7rnFKef3BT4q4j3Nf9uJyc35aWsDeRSitGHctZUPnQQSP7RsMNGwPWf2hh8dSsrHw7AuPEj5",
  "key12": "3J2vhA7qKBdP7FKATxSFHWbMAZqwoNGPerB8Y42pYzyHeYbSbBnDBGcsNqAe1vZy8Ae3p8gD1TpKsMubENdXSP83",
  "key13": "2j7XS8m9GNbCrXZwi6ZCXNDUd2BfM2oDN5dr1Ho4fNyUx13xqHEacSqWrb9i5GCgoTfFZak5eHGnmxi6Bmsb9Aty",
  "key14": "2VPhhbncT1PAUoRcGf4qK3bkQi7cuGAwyLdRsAnrACw9QAkYaea4KeBsmMNyMtWYvGorJmxvPpmJiVcCcWaHbCUk",
  "key15": "2cZJCu5LStAff6mHKio2yWttynZS167HQE1VsfMCQB9KF56mz3ndHFenLkDuQ1pGWbfXa7hZF8tkrqmjRLEnB1RF",
  "key16": "2H5Kc9BBP5eRCtgpFx5ZjAjmmuszmK4Com2CgkmKH7tAGRtTFVrtrZx5vTfBkfT226ywoWm84ipcJb6Pe1Mtmnyj",
  "key17": "5FpgxnqATnNWim6y2r8JLMHVj7T8qFWmXAKfiSVw7ktyiYBDyvQvoDEd8hryAVHa4vJLPUzGDLLPGMhXvJtBKwVx",
  "key18": "2YzDXXJtyGqPkcTp1sNoHqdqaU1q5H63LYAkjTFb32eJFCF6PTEfixRevPcfLwssBFVsynK3LcXqbn3DUGes5UCq",
  "key19": "5TT93FkC7XgwzYRWHGuRPDM8fpgRJFN5A2N34HrLeG3T3yv3NcVE25CCC3oc2rz967DYn6Q53UFXCZ79VFpdLz1A",
  "key20": "2AyqYZ3bssoUfmHREFwE2cSp4d7J9YtBizHZRRyAaDrhP67ZFY8uXN1TfdJ9BGmqducdpyseGwGz8BgBNeMS7qmm",
  "key21": "2GJWarUXC4RBqnFcvB73YAmcGTChNDBPjfEhntPS71QyMuzjFLBmHsRWiqVEujMGnoRMEJj2kgh1enY5XdZVvhZ2",
  "key22": "3rfz4tSijUYWE36dTLB7eo3BxUJy83Dy5CH8gekK8JUycbeYcvbMcxyXB55e38fqbTZnqqwMMEswiU5kLNCR9oJQ",
  "key23": "3KzUdsiKCfyMAqSYUuYeQ6TMwyJ59bHwoiFXMXBtaysxovMoqLM3CXqCQCmdpJua5onUJUHaBPfFMjVkeeUp2Dzs",
  "key24": "4GKnMqmkkTqo1irrBB4KNCCTrUawxtuLZfSRTKj7SvdaWUoyGXcUcYmFCkEtBA3aWshPGY7ivNm8Sh6fqcfBedb7",
  "key25": "5fGpjXQaUWBkAaiZuCtMW8ccy5oEHGuF8jv63x5yTkWkY3CLTJJy2HwUSsbjpsbee9iJiYQevDAz1Fbw1QLhcULN",
  "key26": "64QCsjy1rFvCvLYYXAGyTeM7ev6hy92pFthf3ifA2v3ANHhy7wismjFYnSejmfQE2trmSJaGbiVt7YCnTA3JhnzC",
  "key27": "3xdbWyrKevf1ugJbNecTsYK1RAtt77XSDbT5rzDZWxB65YBuEe3AgEkwjRN831fq9fNMTDQmFrs5sCCafDwuqT7v",
  "key28": "2R6XP1P4WoNhBPrKM1KmB3gyxxFyeHbyYSpf1xmYphdDFde1GNEaogD8qiZicZwfExWmod1rNV9xt5MDMHT5sfn3",
  "key29": "4P1M44j9uHqHpyk16kZaoKarLRmwWYL7HdnpwMzjhka9MfeK1dVzZtSkKR22WM2Hd4z8cFagi67Eyyh44P3qhwyh",
  "key30": "4HPGNgspTGQawCo9W2PRNLj7j6MqN2g26RyAFewVb33cy21i9ycSrfQHR7KEgz3bBB2gyqBYbkihmwuUETHcJ1Ut",
  "key31": "5wtAcYqkpDMjKG3oGfefJ3tj53pNP15NWUiPddHLMLvMDHkNbwmeuAujfxQeDP2ivszfj387NQYs2NUf9QuEFEWX",
  "key32": "1DfSCqoYESKukUhxja8KFqPk8E5v7A8sY4GN6R8GBy9PhYqBA6jHCFpfJNXTS6LQpzr7s3BM7cVNiia7obKF9tw",
  "key33": "5epJpHfLfvy4sXuCHFE1EDwjozQGYEHpgNxLnpVdFXTs1nxAhpws13UR3PpYYfdHPKe7yFeT3aAgyS5CshhzN3Fd",
  "key34": "3wCbGN6p9c1iqRp3pcxP6xfyWVroXgsB627C3HAhq9e9Jn2fwNXs3gohWjCMW4eVNTeWnFF8NoJsc6drofBD7aVn",
  "key35": "twDD4QT1yjpvnoed6s9eVCqR9VZRPcL84BNiwYprCFoG1s3cSuL8djXtszkB9pj6hTDUgRatbsHMuFBguRZRVPq",
  "key36": "4Jr5H2DiEyGwHka42yRzxi2Q6Poh6mFJAMebJLs2AELAd7jLNeH1bjnrDF1eSgC7aQGkv5cVdnYUCCiHcMGhn34p",
  "key37": "1ie7NwX1QHiofN7Dm9r8DUWVmuaEKR1vqV3u6KcbaQ549XSQvFqwAqLj29meMqSB5jBK8gL98yvDWwjf4yb2191",
  "key38": "3gccA6n3e9x3PhrieWQLGWkZjTHFFECbnvheYXYHGyJezadf8xYtm7Xtek6KfsspkJnn9msySrNwidgCHmtSPdA2",
  "key39": "3QjPhYzV2AX2JNhsCdccckh247WcWWnmb7JNeB2Xzv3L8mLkk3ZeACSrkxU1JjqZKu7kikRauKb7z9hwCAWHuTai"
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
