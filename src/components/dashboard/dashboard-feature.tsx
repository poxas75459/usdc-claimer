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
    "2sAkvPQfmonXFhM2tjmuQWtZwaG2XGcTB8d1Bd7rsK9BysPHQzU71xAAZGmd1Shrt8tGd2Am23FpHS5KpX8DNPEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UbXMoqpRuNUwGEjrSwCxHWqSz9gDZbiPVq7VVPZfdmJ3AzC7aD4ed1BADN1WyWGjgGSzvafUm18G7aGUgK9936u",
  "key1": "HpWNGSzYdvL6CS8mNtikZdKfADAfJrT6jTgw99SpMDmABjjYXC3C21yTqXiwYDetPxXTjhuLuV6GeCCLTERHXbu",
  "key2": "3hBQCyQeD27CDV7DQCyx21Urgrt99DSS8FM8PX2VCqnsbgDGEiPLb62CmQWfu3xVCt7gAkxyKVtqEgYB9odvyQ42",
  "key3": "fDJJKhu6YWay9B6HqVK1A6V84sMs7fVR8cr3gBifGGoeCotodWcJDBLob7SWXhYJsv9WkbLpLs5ZGgteKVZyUmy",
  "key4": "5yVj3Yg3Zg3dYcNzxJcWKsg8dacwfDZaCYZopCXdY8VuWSFcEcBDFvgLGc2MpLhgk2amaGtySagfdZkdGRLYECBr",
  "key5": "R4atotfa17No9roK8xLp5FFemCRkmnH4jreWx7Hr5BsNFFKqoGEPFtuxCBmLqT2TparjUts2ACmwkgXmPkLP9m9",
  "key6": "2z87Y7UrDPXifkWgwvkDD9SXzWN2hMf5HT64JUFqoTTm3bUj9DroZkdqsUFkgEppj6njpqVFpyQ6s5gdAAw48pmw",
  "key7": "5krTXY25XW7QmFs8hHyZhpWVY3cjeH7BYonwHmzqx9Yf1KXbQZ4KZS3fhbfFT9uSCEZFwrkHfUkwTCkXiX53jvK4",
  "key8": "24BsHWsiFTjTjzsqYJ3aSRwCGARyZu8fN3jN1bKShhX4kBfA3BZnbA72zvFA59FAbMaTzSyLz3R6PmPgtaSd6Q67",
  "key9": "2kMYM4F4jkgoXdNs4RpDFAoKurzU6ELAZPBH19mTNEHzKwChv9oWaRhZrsxvc7bzL3jZmUW6JPyLFmUoJJ5ykYqX",
  "key10": "4jacJkvdbx1zyQks344E9yS5tyHMaD2Wo2uphYYZpjL24dZH9VkSXkZohF79L2bvmTNV5UUXVbQ5bY9eLtGtGh4e",
  "key11": "3NNFwTawMvBSvryczhHWwcHKc3mWW9MJPspmUbi3n8PeGYa91WBcbFLPecRDYpyMF53EKitxYQUDyj7PV3mdk1sg",
  "key12": "2Ja7usDbzoyrqSPnT8Vg94VCWqtjWnfBzBNtBqP5BtLjZuabPCGV7BErywTPQ4H4jtEgWZFzuAKZsBiiu3pAhrcr",
  "key13": "5sHMQF8FtbutjcZUeXGrANmwWstVpUdA9L1XbQkLMgajTRjMH88oTKNagktADTuAmqrHhAFYSXQMkpi5LWBPeP6t",
  "key14": "t5FDEc3zNstnXwWnUaBt7rNtneZZgftJdpV2qvDgqFn6ETqfjJHFEKL6iecxQoyPXjtA3K7ZmmxZmurmsk4EbSz",
  "key15": "2g1gah2ZuwyN9q3boGW5hRqFstXBEEF8vBHUm4rD1h9PCCKPL1yyHYhykQSbnEryqB1M5hAsfr3fWKwaaC7Hptug",
  "key16": "4ph7c2VbFQJeJjTVJBsSDr81V3fvPGg5DrxByH8MxG5FxN9DhZMHQ8tvpCr71adrnWmNuzQz8NKsfEuysRM3LNfL",
  "key17": "5e7JXeKSvvrrsZQQuFZXnFE58CvVbgyy1DSfGszKZWuEjc41pBtN8mJwhoy9gMcndaz2KCx9NGchFM3HPud1iYKy",
  "key18": "5HJwErwxcM6Vgg3jxw4bakwbLMjf9HFzkcaJeGiWwSAvJi3FwG5GY1cwVTWeAP2zg86jZXK3BbyDxatLpvukxoep",
  "key19": "5fdukezQzGsCJdPdwZtfSBdp2jx4qYSgmuLUT4bZACS26iZozRP7ehgG1L2vqZjargAZPhkLqbcu68xL5SxnvV4F",
  "key20": "5bGQvbwcS4so3jXi8Ygh8j1cv5g3ASxq39qykyCSLbbEa6H6VuHyVCBwHTVbgcEvsLcwdsvLxu8XmtwwHdGpdMJC",
  "key21": "2jqMSXLv4Zq9CF5pA342PJEwE5BizgVrFXC3swjq3kjZGq9wBL9cCquwmPwXKc42aEFV2Ysc5YZRqG5L7T4DejHF",
  "key22": "3BwXBuYP3MvBAiMTbHwLYaYM3C66etDYsbD5Uw9kfkNNWojLZcBL4UEaiaS4NYHrXGSYYbgeQhuG6oR8oVvjsJZc",
  "key23": "5UsUp4jfUoC8oL5ZRynsKATUApyJiw5MvBLP499u15pvs3KAgG26woAeNx7bnSEmrWNfbm9oTLA26on6kTBV4anf",
  "key24": "4eQZK2eASCJcv8nXQffqsYmBWUAwe8Auex5JU3xx6ZdbNP4xMZNGAWkYLptyRH5vJzM2wAg7sTjWcKCAPXGdFyhG",
  "key25": "hTD2fDM9YhU1Zpb42VkgpsUZKgBLiSpGzC9UbYZsoCJ2wkY5RPMHYSfZbJztw3ydBoT2MiATQ2tCMmVmpnyCHLG",
  "key26": "2NqKopp2MFkPWetwMhppuCesa3BiNkqkChxHBBF2htoPdTENCyigJZGSa1jVGDCJohcj1a2NXXf4B4oj6orriujY",
  "key27": "4fY4p1Rd7QejSe2s5jiHeVuMQ8LpaET9fQN6JREeiSDmgcYLKTj5XiARWbAe4BWmMQp72KhiiBPHmH8crrVZuSwb",
  "key28": "25fFLYpi3JUoTwAaFK6AH6B7xfbDX6GbBybH5kxbynqizQc69Z69rUY4yeAYPQWiAWt75W5Z2ZSzuwvFsNxKgrEM",
  "key29": "521CULjViwQhZYKC3KHG2wGvWZV1h3UXi5cchUTFBaW3C1e2y26iSFTvpCuTwPhdkTFumoLipj68sFNWXoxCAzF3",
  "key30": "45AcsPyVpmTm4BxonSwPzTooigtdnn6fXoXQBwnhMEB82iSt3e6TyrNsDbYgBAi1vGscdKMwpe8H9FpaGPbVSySq",
  "key31": "2EEamc7VvGd5mNuSFPKx98pgMo2uGf2grNoPiNRSHPpRLszPBdctPmjrBpwdDouWhzpHJLtV8YoDzkHbH6UTD11Y",
  "key32": "4NHveaLzJbiRjL1PwPo4vvV6K2VAPKRXPtQrYdG8P6SqByLkwUGQjJainGD259o1xFbCvuWGZWA39k7xTxKvdSzc",
  "key33": "3fU9qvVLrsLoikDLCRWeVzWNCoAjJvu9BA5Uxqp7p925CNWqMAPz2m2RM6UfBCrvJ4VzYvHjV3R7NJEkgKc8iUgH",
  "key34": "664bUvKCpS1bsLJhLkWu7bE3zhSD2Q5Wki1EaZX25fibBnCs81UGzLpjyMvFG5StsVLUBGTDAXUSYU7ccMDXxXAv",
  "key35": "3oHkEpDUmDjDwjuoGCNqHJR8BDzZj8bQNEQaSXTn5qWCRp7so9o5QCfsHjjZHu3yAM69XAU5cREPBRx8V5CTakfw",
  "key36": "5ENtGYSrXr8MAAPbu344vKeUfkFTRSxdrSc5gb5x9L3QXZJsPbEvN8gkjiwGysS7vbxXhSvMLCxKo73KF9QQxGLh",
  "key37": "UwTcx6c3dzG6RYnNBHXaYhaaWZUzqq7kRVv3J46cFqb4bB5DPTS8DsTAFfp2AKNAivbPtaGMP7bBqSeH1DJQL5C",
  "key38": "4owekhLY1xXAX4F5gF5JaPye8xKXAKEpranhVAHU5k7zk2fKkvVryaJeQEVPSdAAfkMQ9LY4XytCmXnDuBnVAuDk",
  "key39": "2X2WFbU18uUFxors6DHfnVQPssjc1Z12uKcRFmsVn565T4xyHJ2B9Fn4UuS9qyx1E31dytXbLhc4orVRVu2bfEaH"
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
