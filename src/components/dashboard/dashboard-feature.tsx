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
    "4gAjDTMT3NvJACa3MX2injtTWnDHPp8e9qtbu1Bxm8cLCSpXwi7eL741Vx34D3SQUZAzBf8P2cQkrGZRBr9q3h5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LU3G21agD8KgBN4A2g1esAd75RjXDtonAdHyJ4rnXPSpPRFtm4zosYmKMuNm7uMXmPEM4HaJFw6UFGZo1Qh2R5t",
  "key1": "4JaQhEaGPgvaf8WuzbybhhPkee8WjhrnsgYFU9qe8joEk3yVB78hfyxP2CMbF3FSijCg6itfNEhNWdCtEnXGxjjs",
  "key2": "54M97nsnJPEV4UsSKufYL1SZZXeGMTnFcKW2DCjqBNn8jmVCLDfC6wv1pMVL3nQAQEYhVeHWPgUkQzQmApDUMAJi",
  "key3": "5hRs7jw212uEbmnyLeiyw5uj5bvgMZgvyN9ndEx4qyNo9jUT7rg4myPjG11jBhU1snDJhxngnEVcycEWseJ4xgXe",
  "key4": "48jPPtwvCDtQghBJJnqye9EFLqW5PqTHMviT59HD3qehQ7kb6uGNizKDzJnmt7cmE3zTpNnGffRtR6ZksXwasPVm",
  "key5": "m4pQjrTrzsc6BBE4bv543984AVVeUUbm7SjQSRmfsEBdFG3wWAeg5SxgRh1V677qz61E5oMwbYZBc2HAgnAiAuC",
  "key6": "3QisoPXyoNtwciCmCMKGnC4HZNzzsdhpY7DToy7i3gjDKtfSNaFRNNxHAFo6ikcX6B9cNY9LWRJJCY5ebYHgxiWi",
  "key7": "5vGaBo5PHeC6xdWzWVpPxC2gF2ucfPqrYW2RzBH78K2VSinCcAdkEXbBRjdU5nrc6iG5qRDmmfdzUXx41obwzLJk",
  "key8": "4DcSXpVaa7APhfhuDFRExhkguf1Mx6tFxZQXHPenDmUAAX1k2n9J7P4uU2RbBf3qYypD53WnfvoNT2dyixeEVUaU",
  "key9": "3qo1XBVM7Jocf8aSYWj96zC6y7S84FjUdZdcY1yGdSDcqpGP5SCVqQrPGvfeMmGcqXfjdVhSAX5ZHAuNUVtzVVBs",
  "key10": "3aA71pb7hDgyKWBpJWuiBjDfSd7HecY5BAC3KuTp27fA78AznRztx5HwEe7w2mP7pVyYJy3gkVEBK3AHNp6vbshL",
  "key11": "3DbPXWW69GTW6zFjXRFNgD8aPYGvF9XTtwCUFMQyHsGaRuVo6FRdroQ3mnbFpYzAEiyr57NhtjpCDmCBymXg9BUt",
  "key12": "2q8KxcBhnP2NvoS1zSoRWrp4ZF4X2fB4W3xAgUE964J5xApsthbABoVEjQS351KNrbJNkpCqySoi3iVoQB9goMfR",
  "key13": "u3wMeKFjSJCVuPYmh4RXpGs5kXTmzeP5pTfmRSdEzszSAjtWrHHYN9SBrTSfjsSgUpPzDJk7jZsU9XCzgx14m6n",
  "key14": "5i6aqxyY1T5rhmfh4C71oDRHEuL3s8GNN6rzmd6T3s8ZkqwRLv6N8TfCBPSGCHNoJtL3GN24uyrXUEPPz9Qb28nQ",
  "key15": "2udH77CqNQXFtz8gdoZrigpw2mHUGP4ekdja73pztGzsssFBA8g3ja7UCASUVK7XirH8WYPkFrHxwPfiwf2t2qqH",
  "key16": "5cStnQyrNtnhLv12ZtKLSf3hdko1JrShB88inF5Aiw8HiHZV9xachg92zjKUA9ckdFSR371gQstcxU53TZV9iPXm",
  "key17": "4uY3xkLb3yxr8huuSzs8swZBRuaPmHG5tMtew38KfvsS1tzjueAJXS96oPBthC52GibRDtrLjdjpj9Z2xsF56Yse",
  "key18": "5Ff6DCLSsf394CcS5rB2oF8ejxgdm1CjNaLSsX7fh5UjmkA4c4oFVq8uCkjJMNdDSxN9iKESrwhEhiLPMLknR3mY",
  "key19": "4bwN1unBGkXBVKZdvrdzrCUvT7AbK2us45MRZ8yjRCHZbWWaE47JrNbY2qirZLtiA8vaGcnurN8Lx8z21vKmwpnD",
  "key20": "4n6vGmFxGCjPhSdES3uHjXyeaysrC7TWkLPJKfRUmJ2wAyQicdHGRyzBp1HrWew9Ffp8B5QXkANNfjYsyx4SxZw7",
  "key21": "BQRdTupeRXgoZA9ywVZAKkm6o987kgk7YwuRHTCjaCSwb5G9Kk42Lot9FEGEAf4z3tqf3UBKhdGCeqpK44sVPLc",
  "key22": "5GJzAPdB4VH7x1bFCDrKbXN743nJ1eELiipfWSiDX9vx9qmbNbPNn9GAFk2ZZxqeZ9pNW56SvoqhQXqbNYHezKx7",
  "key23": "53T74qjJRyCtX1SKTAEBHAfcBeqhsZzWmFrYRPWKdFJby1z67qpDxzuEzSADGkRpLxoNJ4M4HESz2zuBrFWHN4s2",
  "key24": "3GTNCQ6s8UZauTuqr8NuCYqKB5atjk2wASD7bA5PjiYDoCT5t4cydyJafPrfBzAztWSjey7agbKRaT8EGNkjYxr9",
  "key25": "5dt7N7K3gTQjgK2XT5tpscsWLHQzy5j6Jf1VZESJ4BXv5bwT4EikHmkcE483cqLnL8G7s4T51vszN3fwJCj5Q7u9",
  "key26": "3Z8eVEkwZ2x8FP37yQxz1tGJXzsTtdhc2UJqhni3dyMNAFoSkyEjSSMzEhosH58KEBdHJmrTJse2L9VAZpLcyNjP",
  "key27": "5VgthXyvZxmVw3YY9HZVUNjV14Ab3A67S7t8vn6m2kX92Q9bUjUrbX7kkhwTcAb1YZ8UUtj1yR9TAsgBxfgMk5av",
  "key28": "4ZoKqqJTcYFwkpBZotCtn1Fhhdewr5ZJFdQsyEE3xUVc1qzCAFNSPyBaPEhVUts2bsWx587f8kf13vCokRD45W3N",
  "key29": "62PcDvArL3vgXStWnha4hVqZLjoY5RAShcst1XPhsURyGHE8n3T2SGGMTTA75h1Sqv1DZizPHF1kgc4Y8kkho9rY",
  "key30": "5hD4EcFhy5PJKeSKvbA27UJSgPDLfRvvrBekEwcAk1sm4yC9EYRmGEF3fDSWL17vRMhCED9EgF1a1pwC9y9tyTP",
  "key31": "juinkT2Fh1QKAJWtiLsV9y1my94BnEc13co1f7FHhpLQAhkrpZvSk5SQCdvzBV96Yi5VsNUwxbeAguqa8TKHj5Z",
  "key32": "4NQUyAGzWFRMyjowkwPJ8ovgiM6HXMkDxrXayojyjawuu4omz1hSpQS3LYKfYUqAnsWkL983Jhjfkor9ju6WBgkd",
  "key33": "PDK6Eqns2cYGFtffRjr5QRG9FSjXR1iPBhbT2NJms1L9MuAKycwtLCvkLEZ3xMncMPdb9H7u4yBMDkUxdkzHME7",
  "key34": "2pGmdZCDHVyLm2pnjaYpL7Bisx8xWCDGotkBfpSn25ccXjb3PTHNVCoA7TC1C5FRSPhBR2TvJ3Jkz5oFkmzj6Ebg",
  "key35": "cHjusAigHb2SRXMGN9LELNwFK46w2BHH7vAPCgc2DStz2QwKf8m4QkBqkHZkCMk8XhiY59HQU9NzjGwy4uQVHDE",
  "key36": "3n81b5vnLhzroMFZcLQNzFyBGFn4wfRyrTLeiR5zb77AMn2qjNrXAkLAhMh2ZFBctVXCQYCh4ANuzDZinmvPCnKC",
  "key37": "2asrB5XHu7Adx3PWhAPn14AMaWN9pkAVowGqxkKZtaBHJNuSArrnFJSAZaXhmsB8MUstWREoHr7YNhF3wZpog26K",
  "key38": "4tnWpsjtvt8AKp7JWuaR2eaqfqjTTgcKdnkxCTkJujjdczC8sorKsVYjkGyM3wS1pphJv69zm9ZonL2DwKgV5Kmi",
  "key39": "4Fp7ZNLbEDi8w2rCioNuzHLVH2rDaM4fd4PoNTBEKNjrLCmuswnQk6xcUYF5yVXyt1Pai9TaY81ZYVmcSZ1r9mbp",
  "key40": "24LQkKQrJpZdmb2gKfUYLNHdwaEfJsy3D5r6zd3p5YQ2eUfA6A29qPBmqQ9EztsWSa2VKuX4YYwPjkG6miH3H8KT",
  "key41": "VVhnNjGY1jdbmSsUSvjJcWdHVS8ghwvo1C81t384g5HQ7wP8hsgnWqjgPKBG4oWKuBan28uKFYEVzuwCzmxtRQs",
  "key42": "2Cxwqn9GUXkEiHnxGpNwL3bfw3US8ZnSRfn2BY6Vm7Ej3fTJkqo4fwD4SQT83b58czJJJh94bjgeQNQ9JSnjiAWG",
  "key43": "5UbTwkUpkcrQppN2YMUQFGFVGFH7rHcMNoNmG9kB3GYF7qyw5a35z56nZpdj6iHWfM295CgES79w7ZgT1ku3ywyD"
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
