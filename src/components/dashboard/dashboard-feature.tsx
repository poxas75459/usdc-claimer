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
    "5gAfVhtCrkiMXhFNMe6Abn1q7WBXcXaVuj7MCidbSq3XLfrshfrvsrhYLcsTnF4T1NQiZSCrUG4cogpDddpsPLDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sZVvzD6wddvHPKFVyX1sGfS6AYQN32U3jvjuDRrCVBd1eoE2GQ5HfuKYSnywsAc3bCF37DTBQa6goCHBnLr98wc",
  "key1": "2suBAp3CWVWNqg7pV2cid1XHH3qMgJgWshV1PoDE5AG2eeFhbGwDPWrHC6fS7BZJZ5tGXMkC3Sbczd3ZQUGqmDXt",
  "key2": "BDTwxebxw7CPfZ4hv2L4EwDpE1MJ3uCsurg5L3e4SuirRFRhkVb26vPFE8n71snTyHJmkp816y2z425kSt9GvFr",
  "key3": "mJffC2mzsTgHS9LKoC79iLgmrgF1B4GTixbo4Yd9tMUHpz1RyqM8MybPYmuHKZKeHbFnJ7dFZVMABB3hPr7HKZd",
  "key4": "65wphVZZyEaWByyYYs3X6wKvb87jjPrRkMDp5P9gM3rYT315jE6WH2WaLDsdba9n2h5ARkWq1wDYs81b7WTyyRVo",
  "key5": "95jUG3PKC1PRGLnaruhMAsPUMEqMWm9nogykjiwYLSZojEWN5rK95odPVsbcjGv3ZoHEZEqqc9jQxywGxUD7YdR",
  "key6": "35eVFkapkMwmw7QZuaYm8i4Wz1ymNo2hgUK5dUNTTNFvHamY7bAk2HsWhurqB13WKbPhEyGDSmPBUxQefyiyHRa8",
  "key7": "4CCgy7oNFAzFrLirEiy3zf57oZBg1r5ikWBZeKr9sSjEWpXP3B7irdHTeNn2kDK7QwToYPfPRfzTs9jFYMia9oK",
  "key8": "2ZTDjT7pM4hbokpuhXMoL6MVsH6WhT7uZVYPg4zLcrV3Q68RGrLnQuqtnV4qikH1fTgHnZ9LXa7x4BUK28MHeHnH",
  "key9": "2GfJ4NMpNK9yqBSGqfqSTwWapfW6fojUtjoKBHjfgLopSZ66bsykfpitqfKL6dFeBq4tgAK1Yptei8vrfb5E1S6u",
  "key10": "2Bz5T1M9mvMZxL6aGqNhLXFgxPBJrnT1mZ1m4f3HHFF9XF9jtP7VZgcwBcmbDqvunDHPELBAzJhdKGojNegCFBJg",
  "key11": "2c8rJXDEshEcpf1hVjVwjmM98RZs5j4UEH5iUL8qhTCPc6P6FmBkXHnyv4nK6s9dhHYiJi3g6uxTtYX2QcbFj8Rb",
  "key12": "3YjdgXRzf59WXttHgvojCa1xRnk8oEPmrYucJWmXZvAZyNot1JKze74hACgXLNWRy7Qo1QDe4MgetJGcDqJECTbm",
  "key13": "jCWzPrBcaEb1rvH1dB4ZLJzF6NVV63WFnae2B41VK75uCBCf9KKwAexuCJfC2WgyxZhK4G5SVSUi78FTLcMfnJo",
  "key14": "xPW3zyZz3PcLtdUS15DET8ZJYKgzC7sNosvoJwmhvED9HZNXZzWgvoQhvGZKbwhbUMssv22z9umCQuJPx5213s1",
  "key15": "5LTi49RgrH5rgCJ4uvh6di8Gn6WXtqvVWxptR31x16eu1NBMVaRXAnVnfwV9y47eThpBUCXVBZnuPU55sh1B1fsc",
  "key16": "9hJ7Q2Mcn6kDi5hEJNssSVfnVZFTtUAR3D8pdthUd7pf3XrAo5gz8Zt5FrgSu34TkhAPDFf5zxauWNzFs62uiBA",
  "key17": "5tMLNtkRxtMWrYmwBUCwxDDLY4tB4mzWhD65hYzmvMn2DdW6kpzp32ZTzvQurJS8trM6fmG4xyHuRqrKLU8iq5pQ",
  "key18": "7hK6B3G79VktZsFhKqTGNd9cTLN4EaFyGZH4boPMuZ4t7t14niYi2ZuJ1qv53DdVyTs9NSGk9BLN1bR7L5dj8EX",
  "key19": "4B6RApFHXiiejuazvMdyd6CNLKocTusfFuQ8hTU3JDV7z3CbAvNLrXKkssjJGjTk1FQ7eig3vUUD17rCYqK5jpko",
  "key20": "3739qkQBkrJ4UhNk3mEcZ2nSxHPKww6RkS2ZVNJb5XPAs4uB4AZumuauZA72QhEWNJCQSQBbcri1j4BQvzgzDqe3",
  "key21": "5E72XgZEw7P5sSvjeL5HF1HcwkgaaCp68tz1Pv4QPxVbSbFp9Vxw36GwW1KhDvBpePT4Sad92WG36njJ38KHzgD4",
  "key22": "5iPKDbQjk81LUGtqjtKozmhfUJXDUBEw8HzY1FqhJMs5T6H9f2oUeT9uumLZZSPbByuFNdqjEMj8tfv6uSqrhrpW",
  "key23": "4UFZ3aK4eLrBNaFtDfsxstvgAs9NzjP8pFdfoZ2mhNa2jPPqqk2yQkvXDYsy1iJ7pVozaSFzyb5jGevcu3zQSP7t",
  "key24": "4hYdmbBUxofECSTF7aXKeKfVr3i6KSBuLimGNEbyo71ehz7avQ97s6CUDkjHbizkozPJsniSwqaxpZgtwVabBHmi",
  "key25": "4GPoDwFQw9DU3HuR724uXNH2NV2LJhcW95cerFDAD79FQQBDb2adzfsAcXrZyTVsviLAVatoLBQWcZhxmBwqpMYt",
  "key26": "52PBtN7c7SJmn3VGAe6FDNfzgWqbYjAx3nxrpRv97KwHJwAURKk6Qx62PiVsmyiD5yQUHk7Bzzxj9qHoh5g8DYxF",
  "key27": "63TciErpmMwetq4metJRMNkff13DjYEPyxGLiL8aH1J6gdB4o75jnKC9PqQGcfXgLviYY3hissVVSxXQB5brBiXR",
  "key28": "4yKhtqvd7cpWwMCKMruCvRkVsvUU3osiEb15fsiGSTupJxrDuByjo1ThYmrkKL85xZZJBtujdJGnQiVhimCauH1s",
  "key29": "4NZ2V4PUU2oH711vQoqVv3rLRHtE22mABXTpkzYQcGTBjuBqV74Tc8QcszD1iQ1ZpbT94Rfsnpb2dYFLKM8CTiB1",
  "key30": "4YT6grwinGNEvo7ECvScCgcQ69aoKTBGP9FChDh7zBkt3Aqdcz9GVEzJyCjagz37xDjoLcV2CdJPHN4ymM3h3zpc",
  "key31": "2p5SrmwjJqthi5WX3DnwDFPFbYy9HyUKVeW942GsTJJHa4NHunFoyd1q4Dnt8denqrB4VxoQE1QAg3eMfPMvpHc2",
  "key32": "2KUBuGW3W9BVZoqRo3RZbcxqfhfcwMJqmfzqyzXtj9hM6YFyErysmUbSmZXAYtGW9PLuV8PUnRhtuaZSvUJ23oqa",
  "key33": "2sw4YwAuKLxzQNLTHbUqy1LhkvLBaRLTf4Czf9tmfTYg94kmBr34rpRP4U6Jh1Ezqv2mK4n12w4vXdTFT8uviTh3"
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
