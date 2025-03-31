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
    "qmsptbh9HWQ2uwtnkU65JxARJ883bQqnDvTMcx8aHgME9G1dJjPSdWRYpwz3KjXyTN5aGvi2NDrym6aXjQHDkQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iDscSDv31UtzCEYkiHztCutXUKEV8wTzA1rTKPBX9HDSoqQs7HqUyfQ5PGUBDbdfr8Pj42yZdsVtUv7NDG5dkHc",
  "key1": "469v3Sr3xgZYNgjTUSdGeCUqEvPQ1w9wzKRiT2vHfquCQGEtuxkforpFY8B6zhynu8jh8EgfCfH2ihz8uFtAwpbX",
  "key2": "4hMEEZXcYCmRkB1Df7VTQ4ednb4YPjfDWF6bu5rVaDRYf7uU5UgWrWrxRK9KRwcQ38YQbPAZJeVqdDqPfGywR7LU",
  "key3": "3rnTr89Z8LmbbcRYP6cwxg5kzQMzKnBEvkdsm3ubitJRWjKsMn6AEF2eZ6dQodnwZckit5Anz7UC5vynkJ6jeoKM",
  "key4": "ypzKcf69ntTwnCJPvYbvemVJ1JxfGqgxKwDgsjGYbVCE7VxWefbh9aaY5abRAW2WprwBNtMtxcksT6phRpmb9jD",
  "key5": "4LNRV4zkuBWcXCEVSNUmBAyc26VWJrB8ycdFkjyqxqXH5yZhb7LPg7SKfaCeuEJSM49SD4ZsSXFB1a9a3G4ZhNsU",
  "key6": "3fzXMW7xWXVneC1YivYUZePgpa3HgtqiGHRfrRg9Za7gtjSXE1NrdsgnoacVh8G4nRFdzFFqxT4bvxAcZJnbSmN5",
  "key7": "5y1jWTnjavnUg2FBVreAATnnDr5ejjEE8Nr3cvNb83UNv5vfg8LhVkYm7uaU2o21UDfJaTZb9tX1ko47CbJp4NBK",
  "key8": "42sqMcBjsQDMKTaDFrTMyd733CTAdvRkziKZRR3vQapoVoJCQfe7Haijzy7JxscYs5PC9D2CtomcFw37SE3vwzQ4",
  "key9": "kBiax13HCMDJQQqiFngy36jXWnv9Ed75pdvZnWetg1gV8QogiyDq5MvQTuchsCtpPWapWr8Bd56mr4KhHUAXnvw",
  "key10": "5SyR2KSSp9CX9BxKdj7Fg7Lhp5UkkdCYq3m5vLqeVca3iV2mtogQ2KKETo4xn5rfqP4AmRDSWGXsooXZWcHJARxM",
  "key11": "nAmUCUwQfGpFLEru5VQ6kLZ6jtMpYRszQUB2sQ3U2yTi7ZntkCcTfewUeoDtth5wzZ5QCzUAUjVotfQh7WjQ5Ab",
  "key12": "4ynmgYWpny6VJpFw5DeazcyF4up7vX1jEDEh2cVksvpuTHd6A1aPtj29xLe8JSaMSpyYCr337PbhUvuJvdJABF2C",
  "key13": "2DQvi6xBq7CnfatL6puPBVEqRJHZNNRieQTruV2NfYP6HpNegeP2yk4ciAex7sfsB6XmhqRPiQXV6yBDaoSp4muw",
  "key14": "2d65eaSHybTcgFtZ1e3KZXGbuV73GgrzaJ9mjq3Yk1ktXffRoDDEAmVbMP931uojaXt3zAmQY2HPsvSUb8KG63L4",
  "key15": "3h2xygJhG6zNShSw6YM3EJNKsYtSXbBtGkMFwVhWcQMWEmXNAuuRYpyjLcCGpAYLpGHUTGjQbHGeBdcoBx3Qc8NK",
  "key16": "3d2UySTDcqFMiigxvcYdCobWaagqDmMvJ6VrHJT9AsgxHoXPKJiEF9VV6s1kVHbtrAA9GfKYg8WN4NZroyXcpwgp",
  "key17": "5C4qS4nDEBgaPY24jZFuJPBbHDFGKj6tH82yP1wrxU5RcAC7wJdhL6mHeQX14eBkNsJgT2kHzWNVERrp3bVBd4cj",
  "key18": "NZT1aS5JxMwUkWrB3Y4bHo44zNZGLuQbUf9QSmDU59iU2icUqCzPxwRDbJ1WJuVQiV45KPdYQrdqKVvvESpsgGA",
  "key19": "5m99Wz7ZwxFsMVQNn9wpdPpuoVMSeeqBCXaEM5mEdBEi5Ve3YB4TtKxPB6QphnP8DS6ExkKLeXWf47QxsEn3h1Qp",
  "key20": "33P1rxLXtrHVXSSAFhSshNieZrhgP7AZGX5ZUDyuoXi5jDkdszdHCVzrzvn7YpnQv61iTneF7dzhac9AR376QMxK",
  "key21": "gnx3h2tHLDwJfTE3HYZF1TN8j8iYrrkjRjCPEYFmrobArAd1kR8Cyha9okYG9884ckrLcg98y2Z3mkwPqMVHsND",
  "key22": "4HemwcTiqZfQuZzqSzF53gpbMJcwTaiEzG3kbvpaiKEj3gnVUngc5GatpGCxurYagV71eErcEhYnMna4db4uADRk",
  "key23": "41ndpxUy827RQt5Zd9AvuiZjJoLyWigVethrWRPeTHXPe5k66eYsb7qCWAGFLZkCo8mTH4c67UdVfGMmr2MM86AA",
  "key24": "un76j76vPnJHrjT4scoxNisAjzgpeatr3XfbJzewJPKHvpdji4xxdNrbic12knbRqSDRn2usFnAM9rpXD1Uth5w",
  "key25": "tGiPfqVzy9yqbQRxiExE86hsp5agf7nZo7d9tcfGRAvYjsngVsHfLVyhKot7yePhGPydNqrN8ePcJqSC76M9D53",
  "key26": "5JHJs1onpoTT8HxLAcVhFjB9Bkf68HGQVp1vTLuYqsaHS3kuRCw5VkzvXED8LeptZZ2m7QPQrHj2azWqJSBFbUQE",
  "key27": "2V9suZ4PHDCa8natzJM4RU8LE6eyFuRLcX2ngeFtLLtLhdMfpg9N9CGQ3UhK3qteUikopZWbwrFTReT893R7Jg1s",
  "key28": "2nXBVizdG1rnwYppF8Qq5ApVH8C5z1W5hZCdv7prhJc4BoQvmz4CYi6MuHBfAiJn682VgBUjXPxwKn8Zet3nAMcX",
  "key29": "3SdtHuBe5nshrWNBLKfEbSqbpR4wK6VL735rM6iZPknmp1uuBDzdhj2gDf5cEyqHnymeppRGuk4S6aipe2wg7hJ8",
  "key30": "5maVp5rLycMkyk4eBDfY2ccAsFZiiiVv6uvBtoQeWAdcDE81AfphGukoBvFaFAacF1D65WMU1UMvqF1PvmKDJLwz",
  "key31": "3Qeg2sAQf8JvYQoYMnKTyLrA1oXKfz5ARLY6o9h4BshDTqSL4g6Qhyr4uqwB4HHwt2ZKoWnQaX2miSw9dJpVLPd2",
  "key32": "3jSQFMJqqqzTZmidfjZbZQK39Bgz1QrGAfFaLpBSiZEbfPyipnh7u2KWde84QxzQq1R9xeyHrqxNawfAT31WtDXh"
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
