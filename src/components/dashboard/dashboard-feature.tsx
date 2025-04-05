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
    "6215C5L9yro9CyAhnado6nRvBG8TE8pedjYXsrpsW6L7fDozTCoLDo5H8ch4beLmG67JhEwSgnNnHA3uWZJJoqWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BmFqQ39X3u4Je4JKNGXyYwWeKHjNdFRAeiVZsA1wyXWSsA54bRHSbbYXdiN8BDCF2Lb4uVcoL1pm9rLEN1b7aDP",
  "key1": "6og1Mj7DEhMAXqUAg5NgMme4oepEAki5d8U7yN59vtoE8a4zYNp2whcU9VBxYXFir4MRjHvk1zANYir4449jLcK",
  "key2": "X8qeMhyHosdPqaDJt1pFPLxGfEKMRLhXUY27YctVvetsJ2hwFkHZaSPb5e6fqZw1nY2RBRuyddNKt7QNjdy3Efn",
  "key3": "2Nmfv9VmTQ177sfcT9qV9mH6MMgSqCtix1rGyhzyu3jCibumEZFNeedKPcx9Fj5mkmEW1Dkcyje57Kxm5Vpazr2x",
  "key4": "g4LABVrsVLTgQ7HhoCKLgyP4tLmHis77LNrZfP8Knr9fM3xY9qbKD7x6dFMD5C2EG8zCpKrtWsA6Mswwh6XzZ3g",
  "key5": "41eRELnXzW2sussxmGypECvCo1JsSbm1uV76Jr4sG7gCiS4TR9XAke3WY69NPw6wDzuPpAFV1kbMtbEZbZe5UMae",
  "key6": "2mxMNdPL93tTLEuGZiATXt37se87jDrHDBygFE6WFynV3t1ZNnaEnHgsBkKXPEkUmdPi3YUPGsAA5NxjeCVpoyrN",
  "key7": "54GKjNAqaTNxLK3ZwT9Tu5su1QKTpHJZegGMsuiMXGy4GffaK5XDVHuJg4GowX2Xr8Kp85FqDxkXyLDAiiCgcFaS",
  "key8": "5aHPM2pAUFjwuFsuyGPdRANv82wKB1koTu3EWd5yLaGZjCiL6Gm92s85YaUz9xE1ezf6noHfWLeYkG5eqkpN1voY",
  "key9": "3LaJeKGB5skSyyhcuYW27nU4Se5n2iwE36qpHz5CMH4AarTZr8MF7oGTABhwdgwcKJNePQ4JoE7DCYyqoJt5vT7P",
  "key10": "636Ppf7rwDJjdaYwqeBRRdg32gMDymiyJ2CHeZQ5TJax2VVbBj6hqA8JL69hjHpsP14FxVg3TRAzm9jPFShtXiWE",
  "key11": "5e8nb7UEv1WQnHuBUGmDN9YzBbQe2CkHsJw31bdeLzmsvKmptkLdk91rduqw6ZeVDrYiHaV2qu3JHxevybaXw4vt",
  "key12": "4f1DsSuSRwYj6FjL5ZhpvkCPh3bFhkor2U5rdaE5FNZan979fRwWFNnefvGTr6wSBb8VKzYDkALAvTXefbAirAxE",
  "key13": "3VZsZBa2JCifa2wqKveALkyU2VnZHrguJD6mwtexHgtZvfaVBFinrYUC89onAhqjx66HpBovPENCQPbSEBFpgNxC",
  "key14": "DQtdmAmrCSz3WdSZwsPGpWKHpdRDm2CNNEveuSA7oJsqKT9M8hrej4gbPqGssNJtBeEM1k4GCxbMs5saVJp6kTE",
  "key15": "21o6V4zifwcixVtJq3h9m8Kzy4dhAZr6zoXdGGSkLLD7BXJBpyTgsC5Q8zRZZmpRhqQ4c8vCaBcKUAwtyKaMMTn9",
  "key16": "3c1d7UNG2vP811mKrCVihfFhKp3k7V43Wz8zhaYabc8DV6jL12dbRCZEWxHqD65ePviWjmgtdKBYHtTBx1Ubpfot",
  "key17": "49DsezNEWFvmrgUteitgXfpGHF2Haey4o6Vdb7Xd2xhFVnutJ8VL3RCY1BTXq7ymhj2vjvuDbdqesxv6f2BF3seU",
  "key18": "5cVvRevbFA3VwwaiwvDQdL97HGnyq2fGjbQn7VHktZyeCvyS1p1U4DzwfcpcGSFvuW1kPrYwSsHqc338V6KG8p8D",
  "key19": "v539TRRw1HYhVF1oqCCbiQcz3mFcQmZE68kctQxWqn7UaXs8sF7TtcgX91HEBwpN1XcxDi9zEmgpCziS22SQ8bP",
  "key20": "5Ztx8XjoBs5pdpia8WNawCWdq9rZjZi8yqfBNy3cb3HZxNXWWpceRjgbtHJwq3LdZhis2kSAjDCDEYkqDxeDiHgM",
  "key21": "dNpWWSd7xxuD4drYb7LB4XpRfGB9p58NNqcX5W5YmhkmmEwoQ8VQb8qH48LmB2JjQwQZdBKLxyZWH5CvFW47M8k",
  "key22": "2w9FPmMLdv1f9wyVE65dwCEkSPjkZgvATvnEQFe545VjAHnYzBqwMqutKtd3b9FkudiyTYLaiBCFH4biYEieheM4",
  "key23": "3D6rRRU8gbvokpNNiY7HCxVob3m6dimZa1mqs9FsisYDEd8xpD5Z7XoCvDfEv36p161CZ77r1UfwpiYR75q1CCVa",
  "key24": "51Ja3Gsb4ZApNeCZsfZVqy4wfo81jHVpNAen8kiFR5Q9GBr9drqXxAb5XBLJECUJXBuQnHGAuBEy8gP469191R27",
  "key25": "4oMtCuTstGk6hmKPxxMf3A2mjtZLrmKTxzyt5iVy1xZKHWNvRqQ2HzUwzzwXrnMkmESR7c38JUqbCWMbqERWoTrn",
  "key26": "f23uFGeiqa4ZwZ6QeyETfF6W55veEDW8e8xNgWHzNPbS5N77NnhSkbWSGw8tkUGsvU6wvMoou1CzLCmfJSWPVMx",
  "key27": "56Pgt5CrxturUrjGnHydvRY6iLy3mGJuKcuqtyk1ufSSADcBatybinXFXrNC4sVAg8AEgkgHMbRwvbvbsHYBroL8",
  "key28": "34XM6F2Y2HxZ5Q6LxPEoUv3gA3gtGNjBF1ANciVPUjcG4LEyB7ddak2UCE1m7h4wRx4BJi6idjFmggLvcAKGqusi",
  "key29": "21tEZ7yXr97HP4Uicu45yTjvqzJKGsHp2CYtGNLQgYNc7bRXgw8dxUMycSnE9v4rY9JSjU6YQh6fpBUEnsTJ3ruP",
  "key30": "pWGtybwFRE2YkzQDTnKPvt7KR7sswHucLSpnrp2dxdef4ojTYGBMEwV3hv8dMVLrfaByuJoY2v35xPR4BWZXXfk",
  "key31": "2hWCrsaC7qiC7h2HqF6UGeg8VtRb6MEDCSbjyNvkdPNVro38dTwz6ynwdiL6dgLyMnncSfn28BrruzQKy5UNxDyj",
  "key32": "44wAPyxKp1pqxNpSR1Cg1HSJq9oNUXP2cnvsxHDjL4thSKspWeYySGi1SPaaQPC5zpVKjsHU4Y73AQ4kyDAyGGdo",
  "key33": "5eWdgg4ME5FMCmNrGBS8TEmYCQndosCc4jb1haz6jkiusKgqW1NCCnMrDLuX9nknXxU62v37ypBTvPfAnXMqeeLP",
  "key34": "3rxdvkq2QgwpjDSWvLR7zZ9qxBJaaBJc6eYBgTYRVWwCaii4Bze6m5dbQRU9Df2Xa3CvGnFK97t2yBjh7uvAHrox",
  "key35": "5kQwrDeG1WeFfXJa7bxSkpcMagoAjQQ5pmu7JQnDN87VsgvgDdHRhe9H5v8pxhg2aaWa9Jf5Q1sUZweXjDtQqPAQ",
  "key36": "4wRhbQydFMHWnsP11jSFU5nk5DtD94ogcCwbXyCEB3AGX4EvZdixbCUKJsHfxsXmKpDSRM2WAkMDGmtz1U3CPz9Q"
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
