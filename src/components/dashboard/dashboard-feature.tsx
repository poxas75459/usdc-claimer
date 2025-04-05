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
    "4f8seCxX5mm5RLK16raGD5zmLuZjdp6YVCeBKn98G7MEXbZUmvJZxJeroxqij4mSCGLYj1BLiZh1VwBjNHhW4CXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WFBPuSq2zRrfUJz1ArXgTYHWJJk8WK6fKrjXuYnJ9ySw5uzrmhJnfZeCGhujfrhCnpfi8RAVEKBrWEMcGCYzErs",
  "key1": "3oFvTgaSUXCybVD84QFZfoAP7NnuoxxfmCssaitJDJBQkD3Tn7zS8Pc8pKaxAPRHUJ1YN3yueexJwHMZ4jw3zcPo",
  "key2": "ofwWfE22Jpu59g9XKbiEdTowAhpcEVtTqvMiEc2jEXc3FSGGT2B7PKU3tDFwV3qPcywJMEsbP8kwZf4RkmpBXYo",
  "key3": "3np1Zo27pPk3DTre8WdR2mYytDHp4U6JQkvcHP6gdPNxoMBfLRzXjsdMBzMd9YBuWpjo6XiqA7dWWPVMAvxab12z",
  "key4": "3DjxqgqSCf3tJazdXDPXqBYsCRkfNcX4tpXnGq7Ev9gPtbGgjrkYghD83vAKs3NRxk5cVYGbC98kHQSLZ392nP4i",
  "key5": "3W5GLFvUGkpyk7otFs3UZCnBaj4RafBiLUM1ZziavdDbBuHyExZp68exuaYjZeLMmttix84tMBaTBnSiQMtmNp5R",
  "key6": "3oeJvgttNZzeVt9ffpP4CtW5pifaYVQGEzuM75NXwR3ZndjLph4rtSB71m9K1ZVTmqzXu7yEX2kEvEnZV2hJG9DM",
  "key7": "KiauxXEPKTA4omgGMFvPvz1WZKV895KeUR7WXLCN8cAcqGpgGgSJyqs8uFQsPK1bb8iyWwTA9Yz9m1XjaqiHTae",
  "key8": "27BWS8LJPS5QSE4nnKGUcLAaHqgSAwn1bsdPn9eVsdyzfn3wYDf1KixHXkdoWCFhuL6tBrcR8Pjm1C6BqszrTs69",
  "key9": "QfhZNfizAq1hu2A6jFSCvWkNNVyxKBj8XRTcADFvotSipkZ3qsngpkXak89XS843geJHXHNtx8Uyxa3DaC4yxk3",
  "key10": "5qADN4iCzw5QzCCVqnidH1B34nXiSsx9n3kKkDYGZuEN8LBsQE8axxzXQma1387r6zxkDtUzn4uJE9U8aRd44dXF",
  "key11": "2Z7fFAm2qsd3AuLvkn2xcKJi3xxHdMWuBy26EyLiuKSLPZ4jySj2x2TuGsamouV37i8f6AXZxe92W766YqRzuaqC",
  "key12": "4UwwmjPo7Su7sf2p2EiR1gLZ1vQVybdpXPCXTFaSDhm4oVhoiPyePsHLKokvYUtrAZnqWMxweN7mXeCUEZEQuJsL",
  "key13": "S1niwSALCuay8AwonB1A7nChjA4JWDck1CaMTH69vNW72zvYCcZaTC7X9CEjD2mZ43M5EJUZpR1iPhLcgTmRC86",
  "key14": "3ZdQCjjutQx6MTXdRzqcUbC648Pqw57cuo5soe4dmgjvddgMtR974B5TBgWP9caZgXyyDYmp2h5hXeHjLQcgdDbo",
  "key15": "3xvrmhnvXEhnAbEkgrMDX77QyGZy1s6kQHALK4mayz2wHv3a9TkPqykCpdtGw5aNnL9Y6QfcpciY6vbjVy4MmCcn",
  "key16": "2mmvbnQBEgZzNg6scZQM5EZHmJ4vrHFi1qW1hbwZCS54jQgTHv6bQAPwDmCjgTpfv2fV96yXCdtDexaRqR1Rzroe",
  "key17": "nGqYv9JdYvq6yJGamvJZGpF7L7kDkx9uK66KJMRBLURfqUnpN5YogtaYwjbm8N31VATBUFmioLhpj2HtEMtGcTJ",
  "key18": "52BPT6fjKbeoUFtgJTFN6jGTEVEybxWQ7yRsyvUPBw3kcypqaYrFkVycWGKKYaXDbXQzYQaGuXZgW1mzBQunkph2",
  "key19": "3u57zwhTGaVpfQagvnFPMQ7U9doeLw8CV5TnWpFimK4ELnbQnbwFqA8EWmxkexHkgQvkDwXj3e2C4Pcn7LZSwhh2",
  "key20": "2jbP9JABxoZ5yp2w1awr2KFhuUfnqztGqMrDMDwcDPHTxRUvw3h5Fnfgi2LxyFMw1ib5eSG8WLZbKsnon9wJm3q1",
  "key21": "372b5C1rAztDCgezpa39Ac67HrneZTr1idAbTdJpZZZjC5YtremKViNhiJXT9azYPi89tDnrWfEeRaYq6rAXGEWf",
  "key22": "3nfjPiDVj6aZuNFUzKGXySMmxgXMxZhMoN4BYjmXQkDV8VUoGpv2a8A3W8S41yPoXdqjJkGARL4iMJLDAsU3wjnt",
  "key23": "3URGsoe2CtzL2fxkYfrGcG4AiiCojjJurjAyowsCDVQUAdeswp2fh2iCNvaepj6eQJodhJiDcFPfYTGToFsHzMdZ",
  "key24": "5m1Rm8Cj32MNhS2zvPzCQcHtfLW3MEahBTDpGyy7CSAQu2DXx9D1qXXJCZpmuLGsMG87pApvQ1iqSqKij6QyXooH",
  "key25": "3F3mSr16Yc1vnYw6BMLcRWVqYDUQ4z3cZDMg47DFgt9vNekZW9Pu2L2TF4PxhchefntU4JrxwHgb84XmiLcbeRiY",
  "key26": "229TWW23c7F5Bs5vku17ZfNfXaQceWozepoBWSUyRXnwwACkPoomGRCzzsnFfJvciboqzQ2fsr56234rLUHTsjKZ",
  "key27": "YBqRA13JcKkBRzffDSAqS3cbVtY1unZPJwHxRYWRsszVf4E8xrPK9xd6MG3QVC79swo9eEzGCPZjwLzAAEJmAkb",
  "key28": "RAEkydq3958ynZ4ezobsZUkcxQMFJdssahYHWq68D9d3qXTKnCjXey7X8UowhSgwKG2mffjcLVCVHKq4q2bqy3V"
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
