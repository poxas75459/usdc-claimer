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
    "5Vtvfq9Qu4dA6RzqPr5nYbnDUSuvCQDupNrnNuAVDy9SGg7FqvrKbqGbZjKWAeuvtwEV384cfQbpw9WEGYkySohZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ChFesPNKg6hLuXh5WSFzgfRYfSAtVbz8ECHmgbp6EEf8tup4YZEaxFzWJXZULsPCNNdq1Yvp4ieHGYDQiTMAEo8",
  "key1": "21dHbyaGd1mUX9QmG34LYJHT3oyS25xsPUth43bhguHx1yNf4RHQgvoZYdzg8ZWWDZrBK74wHEkR4icYcuoHeghH",
  "key2": "4FrQsBSBVnnGMCHDzUZ3XerQFFXEt3oES3JDb4WTDTyrh59enomTCXRiZjp8WJ35h819jxKTTCDYRKS1S3DybXeH",
  "key3": "4txbJo3SY1ujSJedh2tt6y74muUhJar4hgD6vtrxa8rYV5EDhVNn1BNbj9QXcqNXdUcZpqf1KECaDciPUY5RrgFz",
  "key4": "2kbXNmJYEA48nE76d1KJraCVf2AmXb8kCRou5JCqGFLDVNDfT9SL3MSuYGtQbkNAeccuUjopxsX6aV2cadwfGHhs",
  "key5": "3L1CMLGXsh9eyT2Vb2YLE7L4dgwV4Yyw5UnfN7boojLLmdAYvZV3btvBNSFrxm3xDokPSrkHo4ASNWA7WVJJSaHB",
  "key6": "2PmpLNPFEGmufGgFXXow3NLcQykHEC4mZLWWs1xyh1rSN5x9YHgjpFuYq741eGVMrTLNWAC2HviE8eij4AHxcRGq",
  "key7": "5RKcZWCMh3YrHDUHST17B9pgmebdQtezahnP3FgjHbCra1xNgw4oASyFCdtHAmoSz9j5BK5omPZWKtezt4TrkLg8",
  "key8": "2PJAFYjtGVAqrdBGy51q2RhPzCSLzrqXmGkhseNfzm1tFEfyWBiQr7EcZBtD9PtSqJMjTdNY8HmnSRpV4ACQeFuq",
  "key9": "328Bmxs6VgXFNyNk42hcvW6VReLP4RAbcHvChDrPTrpFRVeoyDP73j6SQPrsYBDjjnVDEv1s9R3NhuNnLnr7AdeG",
  "key10": "ya6pH7d5Y1wVQ5b6Sf9Vx3eH4fxQDxRjWqzxtG8xnB4n24vD9hbMxMx1uzu88KZB3SYkPkySGeZq8jygweX5QEs",
  "key11": "Fbqz9RaQuNG579WpEmJMhNCf4cvLhSv1RR9uyHC5zTWbqcHkoZdQdnDFVRXeeDTPK2Sp4m6uFVL7pj442WEFhm8",
  "key12": "2z2USb5snq4Uh7Novd4ge8BmS1WJQENposLPCkyT3mEhmFHYMV8vbUcqTVzdweNkZ158BLSFsLnHBDzSnd8dij8Y",
  "key13": "3fBSW99NvjeD4Yr1j23S4FDZ7CcMQVEUQtsVZiBGq34RXsh1bfD19vWsESX1VbycSWYzr15h1TLR2Vbo2QQmkDMd",
  "key14": "NwZLVikab3BjE8Ngu25TnwWnSHu4j6BuCCr4ZrCBu1kYv1MUmFbJe2VgPzL3ytY3MGMmMC9vqQJ4uZk1o42QSVN",
  "key15": "4sgdoT5Psdaz8peHeh1SazdKsg7XwDYFMteve7hbAMxaSuErFocCge65mGcHJiJecnhSUaidFi2gPt1kLRWecKVM",
  "key16": "4usG9N7mpeZvuPRYWpGa8BNLcQDqxaRKhpoxeEh1QJZ4ipbmg6uMLysfQ3nwFxaQrJNNDB7NHUzMK6KM7azSWnCU",
  "key17": "459HPpX2E5aLehgqLQojhCyYDzFFuQ2uD7fTXJiPyVb17v6pVPyXpEt6DiJCaT22hqrCYmXAu8ENwxinBQnh3UBk",
  "key18": "4ZQjbwaSyv6MLDEnACBGWsLkgVNjKsJcGpqgCSfnnt9AiC2oVb4WhjcsrHzkJmV71wtpFPJBGvNVjb2W3SuFST1S",
  "key19": "5J8sfN1HuJnoUAhFFaRq1DsPC2BhVrPFTo7pNuxVu7SpAKhEguYDgAjK1WuTQktPF4zSW2rxdUWM4oqX8qcietdr",
  "key20": "4Vb4iAMp4uNsF7APdRP7AscA4sXynGXAHueyJHjpYDBA9L9TNbmj9Q8w2H9XjwejQkPM7QG6znGcWvXArHV5KXJo",
  "key21": "5mRQj4h3aXkDy2SP1AxqUynSdiVaW9x4EmsA6WVSzWKmaiqLfnU1dfz2pFKA5hXG2nNGNxaDpWMQHuGqvPjPsZmh",
  "key22": "2mKuiNfgcrHhsudB125DxpNT3bpqeRYGPex5YxBJV5bQgeYU6zmgB77TeNrgkmiXKHxqgRGoSwNA2M5deVNh2A7e",
  "key23": "2oe3jaraxiuxVdvxqHWLactXFq15JEWRQF1WD92CQZ3DaXDLKhbemXTdnjuP34Eqro1fZThgfnyjUVp8T5hLg27b",
  "key24": "2tan98WfEgeHmbZV3h4KCJVcAY5LRuXdAp6YEKLGwhWdPUy7rzBF5K4Z4eDp6HTdzDq8SS6cyvD74YKPcdvzMC5K",
  "key25": "32tZEUhzjmofzYNrvz2pJsR5V2yp89agDiTsyP3zs1pURNmZn4QkjTdFitDACzat41hnVexFj5uPMK2oVorWHS5Y",
  "key26": "3f4jStcPsAnnjyhCHYjhzLRGP6qjQ3dpcsGqz2ZCpcFjEsDQPPQgfoWe4H3Md4WV5tots5ZPbzYTkGpri2SYERKw",
  "key27": "353txsCLRPENpFJE8SSxmaMZBPN19CYD3spcouiGEN6tAmUJowFFSzrrr4VNeSE4RpTQkgxePGUhtXTFoEx5bbvH",
  "key28": "4WtbiJNPwvpq7wb8Ep1vaqxiWKBnMtDQBANZ4DBRoUBRCJ8DN9QXzmFiibQfaTScePhhvqP5WwyAtJvgtmBNVN4c",
  "key29": "22mvchmqmDP7FRLtZo3kNB1FChzvxSP2DdRmcZqpwVyYmuUAjaiDVZDAKn9QuMxNXvrkL1iiYQ2D1HwqLuy9yB67",
  "key30": "4CwamK8oZ6xiyRrrisWjjBgismAAVaK9qvCdNrHf21RnkqGMJxnBiqG2hYUnThhdKVXqu3P11CZ8nQdzcAaBPQpq",
  "key31": "5UADmY417VqtARusBbYZvvdJ4Fpg3wbzR8zXxPRkHfyaVyGCpquGgWHo8CApxgDH5X6trDx25a7H5t3CToSzWBqZ",
  "key32": "3zWzzPip3Y4GH9rQXs83y2iC7fAznMTkoTqdvxZhZn2FEfZZAXKpsNhH2dgE3KifhuoEuaUeBbVhcMneJNEtRmYt",
  "key33": "5bF2jEsKkK9DvMzMeYZZ9yWL4kB4BP5GXgyJ5C3mFT3r4fNkmhxTSpkmcbreHaw4MeggVksnG8HdzJf2ogJh9JBc",
  "key34": "3gjn7ag1JKLTWAb152jWBshaEb7woAzHLgwvwPaXYTHtUPtVbMMRQi8c4mGEfvdwHWeFdbx2Z3eSbWH4fhNr7kKe",
  "key35": "4uaPJJegUDWhjcdrQNsZNUGYG1JgaFmYr8ATZhbAyXbDyTY1Wd5LK42ZY84W5hByVxfpknyVCotQBp71QmqAe4Ta",
  "key36": "2pgin96DszJZ88FRpEm9B1FKA4hvmgUX3JMPRehoKyqNn1kWRzsGd6bU8DMgVowqVuNB32eFvvoRBkQ3jvXX1pnh",
  "key37": "4D6CiwVAs9pZ8wdhLmeft5Gtry3raG37sHRhpn49MM4uxY4Hb5qMWDdhjCFc7kMzfVHVXuAV8mEh1dqKkVYYDY3K",
  "key38": "63dQntBM7yjjpj9YjEDskha7FtiL21BMzhKZwzjCXQZvWRdtmMydMR7kofoHVq6NCY5Gr8aNNtCm9NssLPVDybb3",
  "key39": "Y6i9ASWCJfRQTPnSQXwusg1cnuEBHLt1nNFvog4Xr4S7rp4NcXtRj8v6SvQ3ox198tNqMyrhFui7pd4pMpbYedG",
  "key40": "3fy9zsTj64sPCKaaCCyC3VGyq6dLhEtvnKypvbTLQhXryZ6V3AMhgt7rxtSDKHKuz2s2mDnBF8Sd14Hmuroagvyq",
  "key41": "61ZewVrqcF86LVdYpLfuJehQsDnq4LBKCVkZQVb8xn6E7GHSdqzyxwdWRoe6cHqMJF1Nf7pvwXVhgQ2WgJz6kdYq",
  "key42": "2uoxgHnX22Ct5mKjoLS9tw1hZLrm58T7ge9EgAiB3dwf4YwqtgXhLxgsV7z2qmoRZTzugEmeWWvmpmckLgEDCFQU",
  "key43": "2RZRReJtRaaWmQeA3sFyVsWZG77jAogc8kzNQF5g2vzRJFWVX3KGe65CFvDXyU9ASA7qbHMqkHhQhAtxD8UhKUVf",
  "key44": "3FPMMgXJjbt1a4kqeR7phHcSkBCMjwnXDVgNGvJBsA3RQyPCnzSNiHfsYsLhWfvdbpbUu8yPG8vRTnvnP2wwHLxG",
  "key45": "5TKvN9ukFLGybwKa2MU94DeviqcZd4gnpev3Txc3PzyyK5gjPJnqsz7dUTnNkhuRwKk2xPs1d9uNdkMELawidWeB",
  "key46": "pCCfQDKV4h15DPGWsHgYds7nCsxJ2rcfSeB51JmEtxNRKdW6LDW8qqjf1RZ4J9ufHFRUv5snxnA7HXpFeTjMzNn"
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
