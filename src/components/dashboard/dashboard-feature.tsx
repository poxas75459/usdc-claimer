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
    "5BJzXjJ4rpcMuFAjNn5CPGA1RfRMN4E32hYwjrgAMzhB1YkJnASCyoukntJ2ck3hLJtVuSg8GAv54TAimW7J5p3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gPGpKdjWyF4uWFx5vyBbXeZ4okQvC3ZfovUHbtzLvr4RuXymw52hzjFwiNQako6LWDibWCzDMLvkbhqJXsMhAoX",
  "key1": "67MuRPrndh8i5x62sbbEE4hapQxuVPXbBtfyFTUbfwsLTDq7WnLktf7dUur2qDTYbsPmqUY8DfpjTdtWUGXLt75d",
  "key2": "b6MEWfT2SoBC3LPPNuqPttbkqtQivR3SZTSZEFeweT4b9u2idZdfkAjQFLLhKUuaCzCb2AAhrwELZzUJJYm1ecJ",
  "key3": "57vX2zkhhUNPwDi6EiVNjDETXgcMcdetR6isn5CHunufuoDLSKP3VPgtTHE6N3q8kJSyf2a8wEyHz5rUgki9WSmG",
  "key4": "59iXF9Pz8hCeGLgFZcJMGTdU2TXuy4nEwM1CE9vWNjo3893GWV4GGGvK8hcQTnocRnF9aeyyHnuHsZDqPbL5oZAr",
  "key5": "3YKRveTy4FQhBoBTuFQAoN4GecJyGdiEqdp57Wi24rSqfgQEtKPoXRot6CRR5cqdjpRtyzmQY3bbqFAoftfKkAqt",
  "key6": "Y8v2W1JYC39kZqGVMFDn15HpysuLM3dCAhQ8zjDktAiRQMxN8aXMFA7bNv3wx8zewCS7qzxHjPP6aTWztSYu3t3",
  "key7": "2KpABSn66tFj6ycmfiyg3yXZ3p26GaZRzGuprguCAvq4dYCLfvTrC2GMDdqpPqJ7ZpaoS7nNuBxEH2ecjgzqKTBn",
  "key8": "3ct9fFn2qxumkb7tJ9bLKzsvVBdbrd4xm3gduC9v6JqFZxNVG3fVafDbC7kb9Vir72et59LgJKgxpovdLBg5C4o6",
  "key9": "5fvJuoDr8VuaUVb7goffZ34QmwJLMGV8JHJ961DynEsJ5dBueZx8bd1KVDWPsCjAzY3veaTUVn1ewPkE4kQV7qbT",
  "key10": "zYakMiWNCcH2aBU9GheBxFfNMT36LjMMsqSSR4gES3mSjfCqvyZFF747iPNK9FDN1tpAsmxhwQXyhZCJ5DcqsNN",
  "key11": "42sR1EKfTQkdd7kWF6UiUt1U7r8RxMxQNLHBcm1eqUS4N6XzuQVdubZjqGggzDj4E8VLAEpM475HjZH2epR2GSgT",
  "key12": "4CP35vdJXF5JE1ebFha8TqmvxoiockquhmpYhTPabzBB6nV4bdkydxB5g2CW7xRYAbaYWYTZwArU8jMXRyAUXspg",
  "key13": "NPgny7TeGzezSsBWz49Xee3fCD63Q2k9KDCdnqeoRZb3F51pAxcMTwN1TW8Mw76PbpFcH9muWMeJQ8grduFSrDc",
  "key14": "4DsGr2sSn94m7FxZ51EmQkCn6S69BNDkrc6rNEmkyiDDcmazTuqBkHZ3iMc7k2dpe1bhC8LV2qQdkwkR7BQaEC7u",
  "key15": "2UH9b1ZkGgs9LiZpFJdHmgsifeuEkgfEXervZ4BNGUHitAaYmUSdVyRz35YV74nAjUFieCQTosve8yCiPTGUygGx",
  "key16": "41GmtvJ719CpJgjGmp5szU3tbVLwtb2KhuWgKZMoSr4b9ZUfzRdtfym4x2cBk5RhyhhBtd21z8siPYQLfMqPhN4t",
  "key17": "dqM4fHrnDsR4LS11LPWuP3dcWQUmNnQuazpu2zaMeC7mhFD88NGo2zD2peBR8gYfhxjBYzjCBcXXvqXLwu52XSf",
  "key18": "3E5BYzU37vLPdJJxwHqJq2UVP5upxXMMHVz2LzjADefHt79JW4oQRRmwSRuUDDSq1mkjzTrk5FHdzRyaefym7nRR",
  "key19": "48BnCihm1wFgkkHhA9GkKg1MLZL31LjPyFgXbayHuUha6zT2cqZkcnqgje9Nudn8KxVUdKEcMq8oh3XZxDSMFu1t",
  "key20": "2ZVaTiDxJzseFmGYEE9tKxEQa9oqttDcszWnRiVC9sf4g2mxqjGhfstGoxyWjCQhXBHZA8P5yqkuoXev43YMzWop",
  "key21": "dKhv56aoafqEhT4pmcURQi3eDw2vebz4andxZbQjTJYds1sBFEzDrLpwUgJAJm9Eg7KQEp1goCkhgieYg59MhKF",
  "key22": "5fzdtmigkFqi8CqJwN1zrFA9U8bdwyaLPFmZFeAL2AXcR7kcRcv7Px75gSSdqTEmk8A7wJLuxY11LgGQHsXoLxLY",
  "key23": "4Sk9CyoGB4x6emESY2pGJ3zv4cz8L43rk6izHB4kNTBm1LpBQxrZv9xMYdkM6oKAcNveVBfjxDxTqqdar75Xk3sv",
  "key24": "2PYd4gcTJow2s8xxf535HRGoEAi3jAYqKsp2v2tt8d61fkaNdFR42RwoNM1cawUaqNZnK5zbQxSEFoDNQkTUCBQ",
  "key25": "3cvvDTZdr2Z6Xm5nE621BXzHLWTffzrjNXuMsmRAwubcPCTLzZQ7s5954J9f7nMnfiPba9wh9DRxkuaZpZxR5DAk",
  "key26": "4hipZLfb8Znzhx9S5q79MwrzVkAwqRVbXMYMe6Eyd7yYkb6dheGTrxBgnkKfvTTDwQoy4zMG9Z8hpfJi3uvyBn5r",
  "key27": "tz3QiqwHUuowAb4EALfUm7peJk7SU1Pbtui5k8am54cgNmRDAfJM4x2KJyYhQ3sjf8p6VaUBi1jfmqKBoVqVA2K",
  "key28": "2GyrS7enkAewr4am2eSh9VF7597fe1FRStgPNuuXeKynnPrVJsbWuU4UJNyXWhyRqKDXTZHrhmh5pK3GxdrSps9b",
  "key29": "53odzvQzJQANs6wWkyQjpHzutRBJCEa5nzT886NrqrFN4rCFgotanZKUCLCWGQwkmA73kuXT3nLmXQnAdidnd34t",
  "key30": "3w71mBHodymi6PQwL9dWbyUYkMgJj8jrjwT5xAtGGK2jEHXNR2Vjo1aVaPkb5MXykvhR4JMDCoo5RBpr6jibP6Fz",
  "key31": "2b5QQhELEFN4dfSBRu8wBvYsNLMr74pYRbLexE5gyzBorUyTsBXdCnbjNRs4aN1PMQKNQQWZeNGxX8Cdq22dvUvx",
  "key32": "gGKrXRpdtzGGEMTh3NNe8Nowq6eXSeASCJdZxH8aXyMGuqKKWzm9dfFH2jfCtQ46cHCqqXDbDPVeBTsX9eLofcW",
  "key33": "2v7E8q81dpMwQdsNVsC7NYGPuXvVenc6PazjPCiqa9JArTEQrxWWLdNeNfSietP7LCkeiTxqSULzKfczW8c6LHew",
  "key34": "F7UWVyMuADfNtb6h1tyvsT4QDHPv6yGJWS66Bvw2XYrJjEJmYcsHLGkgHkuYG1eFBwGZxGpxPMcAS2ustrMtQwA",
  "key35": "2DzaKHv3a1DGiVL7EUvbqSdYfSm7e9MgSvX5acfuHqavtQLhtRpSxQQaCxpcAdx5AQUd68nDtZboSrLX8pMQZ6Wt",
  "key36": "3AGRW3kgRM9v6rqPes2FeZZC45zFFMh8ABxJAY42Dieoev9wYmrDXs1ELvJZCeSfTYJHVh6c4KBWDSMB2DE7Q2QY"
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
