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
    "bg8jJsjbGKwR3gLfNsPRoLYPzCwTLNcDXa7hcRmpBUHp3Xs8FXcyTNyv7XD7zk7NNrpWsdGFugHPutvAGnwG5Np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oeH1mNehWRCrzVspiAAawENdRXXJYx2NtmKH9Gy7DmrLwKNir8wXWTF5aYwHMk76xG1XYTmNFmmqVdqvpjpZjF3",
  "key1": "oMYeQhQyhHqWbKEVG3wtwmeU5zXJpCnU9enwM4oPiJkp48Sa4oT1c4SWKEckBLS56YZWDFqGPj7U3LNfCwWvFRR",
  "key2": "4XPmqkQp2ZqTqEPz7fUoSSfZRACcWeycCXVhrRNX2RanVj1Ffw8wTVzqgv9oxzRY9jWfM3SMaqmRH6tEDL1skxmJ",
  "key3": "VxtkLeoS3Rn3aVfNKazi4GQGMxQurRciCJHj6Ct6RTMYFASbqs1dQzS1RZo6D6D3YKr88CdL3s6MtPTYJFEavfN",
  "key4": "5GL6BT83YdXiTw6NKqwRwMTGyQBdriuV9bsBrUL3KfzTHFLKANfTiRnKqK3iYzj71MG54gMiCoABBuGWFFukaJ67",
  "key5": "5EgFAxC2geMryBc637U2Um8VKq5iZUhXszZVcFf9zSLWoysianxNDCvEKVAbLzE5fzaTTntXbUKYTS63zexmJ7zx",
  "key6": "4jLe4zZHttzR1hF3hphD93nxPHcBiqpH8yzW1VCXAYdhdEErH3gTBjWX6JJLMVe3iAy5tVNHo89XzjMh1w4MUy9U",
  "key7": "379TosG1PccLkzer7cexBVoG9v1b3k7KcNfe72CcC8S7gn2GgTmSaXjX1eiM7EzBdXq1RwjFEZdzdbKWEzL8jYBT",
  "key8": "52WVaS9mqjmSTJZahnWzuNPF4bxTe255nmWGaUg67ntcHCHF8MuPZeYQGeAgaPu1cM4hMFPr5H4mwHjAJYidoDSv",
  "key9": "323zDd2TwqRremtP5BRZkDRzHvN26x8Td985FvM53xN87wHdQ6jtWPf3yqLobBrCBnvQnBgPZZLki33AuN7TMRQP",
  "key10": "3HL7WEAFH36JJ47BLJNbLCz6HH73Yw4oQR3R69fkUbctiFs4LrNWWQi4uKPqJtbEEaRcLT3Jr37fRKg4t6PwanmB",
  "key11": "SL5dMgkYbzdZRCwVvbErryNrbcECy2GxDnLTAdnuJCJTdGeQmSQxmAYv8b29hw8grnGP8J6nwgzHyzeL94pSUMM",
  "key12": "4huim8HvgTfkv6tqvjUzrSooLPfXtqec9eo1jS2e9WMYHQaq5tnNWQwV46VgwGPv5YVVQ4Cd4feWPugTw4KY3BFa",
  "key13": "XFot9E7WeGMseLQXF74sn2Y7nfHzDuzpJi9QSLxKy3TPZPbZw47B2cK16XjuzHd1pbPa5p41dvFdq7X5jrJUKRZ",
  "key14": "2UijRHvEWg9vS2cbaU5mL6RvKs1UWrcvf8yoG55cDyspmrF12CKhLnfSMA8hV55pujTYFcM6sxubGqpWK8eNcWmG",
  "key15": "4YakaBhYNDzhWJnqvYb72HXF1Ant624NmDmc2hyDYBYv4McwdAjATupENhH8psmVekrqDXzdYvZNohWf3wkuYbbH",
  "key16": "4nE9aquqSR48xQZdR8oUGJZQTtfMemqWAAzA7zuzJwZ4QajqUk3ydQ6mCmfvwj2cXAYbJ4QCbXces4S2Cp2mCzQs",
  "key17": "5giYpKEyGM2yzhwuaUSpy1EL2vJ2kVUjTHMyyxEVwWnwDu2gsBNWJsSVRDDMHPvJWapfPv97juD8GmdNdDD9wgwb",
  "key18": "4f7MoVMTueFG4QUi5m5FZ5z3vyAhGp7gsURp8VZZbYpbDArywKFezVJwA1NX9v5xMNfYZ2h5YG6ZeZvvGQ7a2FYH",
  "key19": "3ThToukPfpRJa9q8T1RF6Z9VLXRUF3Zp93ydKeq6QXV3Xyf9GPtupTfg69WWjizuoJQnccwvZWTZPHx7xN1uQuFV",
  "key20": "kQfM1kX1ttMERHFUNbu7iGALVRX6SYo1ugFTMMr11D32xx2yRCUykTBfnS1BUqYtNbFejzAS5xdAo6kQhFRBnTD",
  "key21": "67aFP8mGwm4DHXaX8K8bHZ4u1kmaNA51VoyKb6FxDTMxgTaUXEJS6AbTvaNfK8fHqxExMkihwpjADwaQ7i8PmyqA",
  "key22": "3bmiConFrH63sXLwmeEb6Gpx8SjkpXAw4c1LrqBWWa9vzkuHeVjKjNPUYGVn8ZcEztC9LGTD3fJVCt2wjQvXKxiD",
  "key23": "25cv4xnnAmTjptdmWjwtYXY2h1Qo9ZDjX9Uk8PxM2Bz956eLpyVikabVg47ULTmotq6fR2nfgQJS2KUUDyfqYn55",
  "key24": "9v7HR6iShewNGSd2taBfcyZjqjL3GGKMCC5w2LtqtxBU3LN1xm8RDkw97jdUjhpMBSMywMU6kw1kT6pcxbj2Tjz",
  "key25": "5oAKARNgKMbRy5Z3YggrGncVBEnFGHcHdsQGgQPfJHgpy9m86bZD1ymSVJvSzcw81KbVZtuS4YgDpsWFReT4ySgp",
  "key26": "5jXYDc5YXCobzT7KVzAATqCXEy5abFbG8kn5BQHWmwGTB8xuT1fgCnqdPmv9ipiDWQReJUckS2VRHhimvnnzQTrP",
  "key27": "5gEKxF6r3FD94GJMYJn4nMzy5Qrs8sKEagmgor4sdSqQCwtNHMwDizCaU9BwiFP77W6dG2LNMeSEa9VxzWTLMRFM",
  "key28": "3SKMbu6U5koqSP6z7JPANRYaZYSyDccKwJ98pfspVRmSMtQEo3S4dBM3C8VJfhQWmSpSM3h2ZzYFUcFsQ1FsM6vb",
  "key29": "2skaujGWL37JX5PJVFY1VDsk3VKNgtdgKuZgbWQV9rTohHZLDsx3v2yVtL74nzswkccvsXrFHmKAf64vpSMaJjbF",
  "key30": "2A9qmnBVYVhGkaazSuSzSSWsyPvBPxGz4tnAwnGQNxcavSdmsUxKaRpXj746edN4mDZALxyvCJM9X2zbFXbkU7ei",
  "key31": "5TR4XGWTfZJmDPCLpXsyNTXudEJrBq3c2CN2aE7i8W6cWF8D6WhASRava6gS3WA1zMt7cDyPhFDBttKZoxqt8U5r",
  "key32": "2U7jtt1cR6fbUthoDutJXx3UcH3Eu4Ajay8U8H5tDZipTojx7EeCHZ8K4MZB4SFxUEtRsGZRnZKiK7RgrT4kpPf7",
  "key33": "49p5UbrjL1JmZ5gj2KzT2nFAuww2DedDQp12xCy3TzKJamBSY4xczaB4Xxw1BJqMTNZ4qt5B3g6yYHyW4YFgtYxr",
  "key34": "5N3hLpEWPu8AYnWzKPfqmyHanhWPngmYdNX1k6iLTLUmuFmasHa4oYANRRxNVMvTyem9r4adtQSURTU1MtPnjEVb",
  "key35": "53QcHN7kCgii9jgohFhtdirjdEa1wSgEZjfnW7Bs3fmbhiiqWumEc8qG73iHm6TYazs72G3RBvxdn72qEzBdyHK6",
  "key36": "4iC3DYc6t2uqfatXNGjbteKUq9viH2G6oZtxPq8vFouSpquhCogwdiZMCDK61wxqVTKxtNMmesCBD6yJg36RBE1x",
  "key37": "4ihwZZAXChghdSRLr9Ggo6tcd9qXhmi1HsW1ovsyGWp9E6gYoBVYA97aiZs3xHq9tT3op8x5q2FbfHvUWtkGJtZ7",
  "key38": "2tzzjiqTey5DiVc1nc7HZBXYcfQgZQbPE8PMnhB4iHa1AN2HvMvGeRtmdtkPER12vy238J1jY61kFCiUjrqNBAsS",
  "key39": "ZsJv1n3VDnTX1Jievm87xZihQp4M764Ydc1FFAyuDR6cAf1KeYvFMN9mASK9Bb8EQNiEYMpNSo5G3hnHh767GsN",
  "key40": "5Gor239uppHYYvX4DswuDHTfch4GZYHXbjiZKcyf24jVdHiLdEcgMzDuMA6s2Ta8irxLKogeAXMe7tCBDmXVEetQ",
  "key41": "4syoNJghdZE3wk3ePvYVj8hYUY5qjT3nm9h7HqiAYNPX775Fd1p5sCeEw5GP4wuMSnBm8wCPGSRHGc3wkVhM1r4f",
  "key42": "5fCzRSoJS4A71set8dxJZDDfSAr24R1U6bHgLVk7nrh1X5kgEpbWwypGNzzLp7kMVb89Xg66pY616jzQf8qCfpHA",
  "key43": "36BFEduZisB9ndLELSbf9FUxoFwEzwuJqdjvpZpqAZsuMUWAhbLivKvJq2Fhwar66sit7Bm72PvZvs84gYXKzhYF",
  "key44": "TFWJ3zEKU86Chd1gZNvc3M8kxUvb8gyneujQ34S8brK2ZD681M7zieydbjui11kgk21ykgHamNJ19A8672Kp47t",
  "key45": "54iuAhiA2d7oUV6q5mscuw3cADhDybNDoCCQTsWAxHYVtP4jR2JPTfuYYFpZ2E3yRoFgPDhUPst9vaubzGDocd9Z",
  "key46": "4k7ifqsUdtsQGNd39q3zAfT4k6MQCeymWRkuG5nUcKVgpNrCbruxwUSj7sHhfxTnNTRduGg2DzLBtpjXNckAp95X"
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
