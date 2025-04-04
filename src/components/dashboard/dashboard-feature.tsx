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
    "4uUNn5qctgRXpnfR3vvMYPYSu35tZoXET2rToB3c5CqgzTTtYFowTFRNbsQT1tttwhVkygCx5kfdVV8DXNTbJLMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zK5sfV8XvSP4E5ofr5oh1vkE4q6qJormoh5Px2D7E6se4beu3zVtVd9Ut1fipJi1AAeGzoUKJuVBSBqii9bfwpZ",
  "key1": "4rfVGvzAovUuFDTgmwMJm38jbqRPKZEao2BbqxXsbm5kYmCsGkrLfY18DSg2qCrDGCEqYWx9PfU6pi9Z5SQgkaCy",
  "key2": "3eBC92pEFL2PgHo9aV9j1dkkbJk7UfhrEoas8dL5z45nJ7Hokg5qHRya6KnTjL5tD8p7ED8WY6P4JbHexTYKWKVm",
  "key3": "2rWAjiihYChBiXft2NHcYpUN8b2oo9QtYn99zsjLYcQbQCEza7PZMaXZwd3q5m1pv8bcf8qJ5MkqhJTysCq4m2Ht",
  "key4": "2U1GhuUL9oXQ2SGtqXh1ZBoU4bUrAbscHa64x7HGtk4FaNzXmeSbCHx2UC9kULgeTCXKZEEwBNidgrA5e2YYkTsn",
  "key5": "4j6aVXbZrdjDPYvnSeV85EfmK3YNbvzNn2iRj4iAHLjkeFbCrokxaHD7wc8bdf3kksc6prQKdDGBH4PwvYAx5zoA",
  "key6": "2XaZWyvZ4AUf8EDnvGqtN6Rwyg8mmqhJSuS5YaGHjZiUbLw5JRc2j6r6Xox2KTUGYP8z16QmUDmup4XPCwtUuwUW",
  "key7": "2oFPztazmMu6yfm7u2cUmGwSQdqXUzqnr5tHX3Rq5La49JervoWguSnNCpVeRhznYEjieR3tmPNBpeeZ7a9ZoPx7",
  "key8": "5QneNeb5KfBeu2c3TRCD4VZci8jT5jpTZuSf5D3newQDFUTTagA71oHJWKJzmks3DE9gBiK4zvZkHxqHwdBX3WyN",
  "key9": "2SMMUDRhPHZGLWs2BrYq663Yi72GemMh6MiDoQXFFfUC1Kif3v2Mq82jRKoptCBkVeL8G8cSoWq8uovu2d8nrG4V",
  "key10": "2iHGXD5VxfoSgXVCSxPHMA4NZiA5eXTQBm9GsA9BoLY5Ef3pdubAqni4wGSRsVaa9z1gRoiodsydxpFPptgjshYJ",
  "key11": "3ap5sbDXJppB7SpiTdMbDUYi81vtKXbPNcDxJDqtS1gqSqY1ao4VJkGpi7uFKrYgi9xpkEhxzoKJdhxATG1BaLdX",
  "key12": "5jAvNZVWfzKYe8mkM6TqpsBHeDTEJvSQ3o23a4b7MVR5H8RgZcLugh2maYo5SS5ZnoDhM443iaAWvgpH76P22WRE",
  "key13": "45YX7Q4FraD36sWjEcHNwmLySD4LyEQYHWdoQ1AXHE5xgYni1rdYoFb6fWTZVHLAz81n1dvw6QZCgmNaeJgacRwB",
  "key14": "26ZGEGtqxAj3aWwwj61jjNtReMMwwvrTVvoHUxnM3zETuGHM1TRGj8zthGfN3uQ28APFBkF5v3T4NmsGkcX2G7Uy",
  "key15": "3XPfo1WHBnyevru6ZAMjdxuRETLEr87iVBvM6Kqqnrgccey5PEAniDidqgppuZamXUvDCWbUMtTDRt8ftpLzmub1",
  "key16": "4YGVgzGKPZ6CiB2rHTZPimjP1vhmeHvzf2jutivwUHcTmehuwTkxeXLiznQUb1dE354BVQ1qeM9BwRo3CdQE3iu3",
  "key17": "5xPPAF8za5PYYPzQpu5gWr7qKLUKuwixPNnPmDgReagbgE4kNujMb3nPtnVJMgTSJdVm1Yg5z98eWbFfbBAdoTZr",
  "key18": "33K3fwLJycBtN62pnrDbvfTx5f6SRvG3MW6S1Yv2h8jbSSyzxQkaVLkDwppinTbkW3qhiVaWdQc6NcHFwApGxwK1",
  "key19": "7wfRwDt997QDbsNQfTj1UJxLWBMDstzTq68jjWDSJ7DqHvZhXFfBvDyM335Sw8nxyDH3DCgvbFFGnHZZPCTa5bC",
  "key20": "2aB6LjVV67YmoRHk4cLPj6wmGchgjn6gTLueW8BARn1dPCDZA5bQLhpYV3kk9nJkGFids7q1EkpJMFPZ1iJBFEa8",
  "key21": "38GeacnpmLE8hysPpkAns4vZXr3DqKxkT9GiAGLvhnt3Fb65d67jD49mZNzPDbGV13ogZfaNydwZAUpE46he8PM2",
  "key22": "4HQkGNenAT9D8kd4erhjFbDs95zVQohCfhFN3VvLhE5gKHFoJmoprgbbpVeNyWV2b6chJNSTKsgRpm1qt7ucjt86",
  "key23": "2b2D9x2T3gi2NxvFrjnYtKQqeCihSLCVU6zopFnPmso198HkMzuf5is6nwLVNWsQ5uj83CB81meVSMSstnCVmVrp",
  "key24": "39eXZEQJxz8Q8psKonK7WAWtpYaunJerFQ9AfakXuQHhFtzp6jJhtmgGSZuzUifLh5DphABDGf4JuCScAyZDEt3o",
  "key25": "uQQbs76UQ56fM8r48SDs9xrfNcVR3FfnsSsm1vCCB8UDoNuEYyccXxnyuMrXu2ukX8vRQ9cR78ibyZGTHLihVhV",
  "key26": "3SRHMNXXnsG7QzGqBbP3UDsveuhtNZkFaHwztXgaHZG4fN5AfmP1jsshD5yZSP6fXKKUnEECR9eJ7TbWDe79oPLR",
  "key27": "295waFLHjppMiWdWWAJG22ZGVgt3PFQswYD9TLhKQEpUXrG8RTYGNLzWRDSzLhETiaqikyeQNdQzn4CZHaqRtve6",
  "key28": "3VtWGMotapZXXbnRy2hHvhbVTAE1XWkVnRbgJAcVTMXbDCFCXQmjtJFAJzNvx6mPHvrLE5PBNRyXBEY7zdQLo85u",
  "key29": "3yvvEHhvUNnddLEcsNk2MTxpGVhzxzGHMCnkPbVsBaqtFUQDQc5e9u5XzGULPJTLageWbLyAHBryVvxRD57XaE2y"
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
