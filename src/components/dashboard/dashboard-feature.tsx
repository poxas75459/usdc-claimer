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
    "4GkcjbRdQJ58BQmugiadAHi1nnbMTi1jKvXGAYJBuyEtArXFdjPhgtPBTBgHv49XPLdLfoyFRku9A8RYm2CM7nje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oSMJTwjfun23fWmt2rX518KQL4gNPLhH4ibqkGcDXLDqGnHVua9Pp2FRjD4VUChh7mqW7TnsSGVfiFimXvGA9zA",
  "key1": "4PuWVPBkrCD3az8isaFjpkm11vQDiaziDQvx5PCrNNPxUqGTHgJR3ybiD99tKaic2r7NxwCcGUMfPGA1qyKNW42f",
  "key2": "4FzeiyiuorJxFyJ79tk6fR5XanXonkD7PcwegfkN8wqHweegAv4sTV46SZ846XTJ2i7Xe6Rr7vzRhHfiZUL7U27z",
  "key3": "tgCxs2maWVFDwiAu1wKqQhqdpVGDEtvFtK3CfC8gmchBRcuUNfE7qC5rbxAQazSoXXdKVn5nKri9yHzYjSqtN8e",
  "key4": "NXYUVL76pTh4QCHDnCi6mXSNiyWbQqpJTsVA7jMsEYmd8gSXr7PE1g2VCfcUfmshmUSCAb6KeteTrZGoUcRDMLp",
  "key5": "5hzt4rDEiaZpwDNG4YsF2bqS226BJMe6LofsRjEsEweg6ZD2tvbz5TvqJqQQ87gkZJAtQ47ipzEXqfb7mkACmb3X",
  "key6": "54sxkUhzAF1JkKa8ReHwEsZJ2P2ZEQ4EtK4QLeg6TJitV2jUyqKS4m8QKrBL6LMULmoTMSLGb3mthbVw2Co4mG42",
  "key7": "of87GLqCSe1QVzpKuvmPoS946W2JF1tRMxBhxShK56omM6AGLtKmY7G33k4ZCnFY7BucAP8tbVNVvibR74wD9ua",
  "key8": "2M5Vk9DFMVWK2Fhp8mPKDhY2o3kymo7Vr9yFHU8an9i9dWwQSmy9eywTnkbCpzdECsX3gVgQ14zYzyntqrwnFTU9",
  "key9": "qn2rH7RbKBDD3HVuqwCHzAL1Pc6rR1DJRezyQ12gWoLT46DwiHqmj3vNbwLvcxtpd5P1JWAfBH4k6jv67xky2oa",
  "key10": "5NF8KZghDNX6KQnaVF7WpTtoV5BCwQrX2DADj9bcNyBfLkbf6iNJBpYimTZG32J3P6niVXTv8aGh7Jedubggx5ZJ",
  "key11": "43jwPMyzjPTo7FPR5hxXTjcHPn194Jw48oWX1zy7Ejzbe511YYfsBofPD5by6qjh3or54tvMH9D59qNWmZ9LqPMS",
  "key12": "5xrfQ9gu3jyYretW7AsTC6HtUdVNkhxsjCJG3J54ysfse9X5MezZ6nzCRYkFstCykJRbrJfhA46CmJdjJCjn4eAC",
  "key13": "3otcCtqJ2v12FAeUZ1NBAyEd8Y2uv532Ms9sqk3gzFnyzepzX4V4Kgj93Gw56Xkr42N2GFvHQJk4m4fPRJbNxhoB",
  "key14": "5BCmvWXPkPjDLhZFULY3TmiFJ3zHogvbJKnSxuHipSziCLxgYCXCYg4wJ8AmKvfTsM3jYbMtM66nqKhB4bE2xayE",
  "key15": "2XhoMqmvvSd9V9PJ97HPPyy8YDjpJswmbXJSsvjKMgdEmGVidStCFMcwBsfftFiNf2VayhP4QB7gc1s2DzHa18Jm",
  "key16": "anvaAPCCTkL7wPUGpU8L1i47Qg9CTMr8SDhsB745mW15NLvSXux43PJHSCRcSEwidR3jGfM6otPZZXZta6BhdiQ",
  "key17": "5T9Xe2nj3g6UgRYmBVAzaezxVdzfYryF17nVpjgUN24QNCHryKC6JJXmAHUxtVR8x3PQjLYhyDhVMNPqToFp5Jb1",
  "key18": "3WnEzdwZyej1t53vPUeFC9ARutt5sdiXcmiHDAw7S77o1QQWxwAEQ9DkGLpyWSpXSGRu4rCMA6W2TDGLcyjN6Fkb",
  "key19": "4TiSMhysnjH5wAJrwe9U486RXJffFxpbsxT9Uevxj3Z7WGccSdrBEHxrjvQjABb4jhBF7kD6D5icJMaKcVT7ZLLc",
  "key20": "63wr1Bidm1njpwbYGis6326tcqbPgDZp3Qx8k3CtUeaZq1Lb6jLhndHmXBqjoQUas5Hxrirbbv4cdzLVTNip16YV",
  "key21": "TSvVAGGYdnj2Xz4bQEKYgQh321ZNirdUPoS778vB4AfcgMErRiHQfqp5uaE726VYnRrN1sD7vHkQqJe6KsPez84",
  "key22": "4YcycauYGAdwzWPsKyPB38ZUaFXkYnoDV7CoEGFfxyc2dK5mjrzJr1e3xHbFXoxZnqYwgifj5nUKX8AtPJfQpUXx",
  "key23": "2q38Lspn41zmquph6yVCfb4WGUkVGWX7SeDVkWooejyhddsj4QdjdcmWNsBDZ4gbLPm7LT37ZPU55PrRvHVJSVyL",
  "key24": "5PUj8oyLHekub7HF4A9rBrHKm4qxCyGNcuo25jNKvz7WDeg9bozNs3f7uTBZiKJNcfSqeHWZkuXQCjGGzr1XTGy",
  "key25": "5WUsEgq2rC97dqoeoDY3fHnMvGEpqXpe3MgFbEkLadKoQZnzqiwVoRL23o7gGihTR4XbTzfPWobFLmRYV8BThBTA",
  "key26": "3EvwzF5yvxwczDFfP6ECsNZvMPBNmJAsDD6pV91SM3whQCormkbWd7WMFZbXsQUcgc362Ks2b2pxhfpwrpnHoLU",
  "key27": "3aFiE5ZDSAZ9cEBEE9qmDdLb83uTDYBRBWvjkWWcaZX2CNzHvgTfQpHQLxzTPNBbhuDtgxcABvcxYr8akr7qRPoc",
  "key28": "5EXNZqcs44yYtundPMnV4Yb6qr4D1JrNqGsXKsEi6us9Wteog8JY7fjMuxeTsiWgfeUz8b3mUnaL16RfE6h7hTeG",
  "key29": "317eKTMCKa5dVGdpcouKrUcEVWyW5pQB25KLT4dbSJK1zYNvaGr1nHdUni526WbG1Lkvd3wCUtQcsZhZHX1viwE8",
  "key30": "3xaTfB4cEE7JVy7abWRHVDZqVSgLetdBdj5f1h1JP8zbiZ5EKeZ9PKpP8QZoj96hi5LeUJ9W4yqsazZeW2126ZFV",
  "key31": "4zqAbqL9dnkKz9BhNT4NHGwQ3wYQVKJF6smPQ5R1conmFqW12PEUgsoc9gukJtzn8pSC17LJ5sz4Baqiujxadzjt",
  "key32": "2LQyiTKn1y8S9UHy1SqGQoTpTXGdbWdgWPsU9atVgzgMdy2uyn2eNLmgrsnm2syo1Deas6MF9T3NvQ7EYiYnH469"
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
