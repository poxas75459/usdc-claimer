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
    "5ikgeQv1oPEvNzovaYsADhZrx6fD5MqLg1ZG76dwN62fkAuEFc3EyhnE7HYgRCeDzD2Muuy9kuzqH1HGqyD14iKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A52zvJx5FasX7piFdQcm3BeNMC216kuxYExofSsm6EHP5ZJabiGfXnHD7YaffWnRWS4jDiv5bHdrwpHi2pnTZgc",
  "key1": "4UyT3rc8jesrdMrQVWFVLrL3ZjS5Bqh2oU1nRkeccwknSJBdLQ3iRVb7bgmspT6LSMKQQEYASjNoUtvKEUK9k2kQ",
  "key2": "2xcBecMT4Xa4jDcmscZ6buBgQYPuTDrsL7HZifqFGw725bjFUYGTgEMijRrrRVZyiHSY2uFLWe2uvRkCcXevcqLb",
  "key3": "5ZAXHwHZHvatZVnM84oRg7oThmYTQmurfpVHEPUAhWPMZm1CU6Pum4pr7Quvn6mMpsAVf27FApjHmsk5MgmQoeNu",
  "key4": "2ws3CpyCve8crCqZ9mf2LWeotYsFMXxEqNrUNXW7AZnetaXyCdsMTkb2NwLqsfXcn7PrqBGvZKVcHLw6wCeHrVyN",
  "key5": "5WPS2TEUYBwVJNrCWKnTDxf2Y7fn519wVfD8EaFAcYfLJX5mYPqGfE3ztxurBDW7nWuL3HK3uHtE5iSB4eG7NX9Z",
  "key6": "3wTCaWjBvBhvrBGjmTmThZvUtJSSUk96CPZy3FMP7zEoNrm5z7cLkXtE1U5x4BTzJfZEyzyx8xZ4UAfpQiXDiWTB",
  "key7": "4LBBWNGu9dGtrH5ijt4Q4Fqr4d4ybETtT3TmVh6NHbbmN1H9FTZCuHBkL2KVWdN4SRcURx4SXLyaQ4Q2ecrzH7ur",
  "key8": "66JNAGLNFhuKZXYVhKa75bujom8YRXHkepjVL7qyGNUurJNi3aCireFbRQNxESWiPDTTTmRisjzZDrdM4L79FFDJ",
  "key9": "3Q2t8tQTaNoNbFPtUFoSFDy8EeFfgJ4aEHJJmFuracW4EmXxfj93H4P3Usxb3NT4YP942VS9JhWL52CdnxxXGSw3",
  "key10": "Hdr7RSKdrCz8bpssVeEhSSgH9W4ij42PeWDHhjoW7jmJaNXN6FcLmwpPM2NewHrTrQQwX8hoaBW9PyFPdMrB7K8",
  "key11": "2o3j2bvoVUVcH54z8KPWEbAkYAvZqYqRFrMQuPZ4xhJcpujkwXEpbtP5D4PpWEnnDxAaKUS7PjGxbCtBJ1CwHb5k",
  "key12": "58cVmSs2kFWmcd1Cn9TvsXEAtWonTnHGekvCNwb4tWTWw65yNDHwpUZAWUL5eiCTxC6iTZGdqWNbWvcR11WXQiVw",
  "key13": "grVYBQT7BNwPjV3vTuUGLuT6rj5MmXi5mjcVEJKGEu22evJKZmbAnABijGSJzSnPAChikzAHa73fbsz2s1QF6s8",
  "key14": "4Xoj1BiKq5AHVVmiSypRMEHT2ZaEZ8hMJZjZHR6diebKdXewpT1S9KaB7EkFT6dXp9FT3iXn62WzbyXv7PBgVtdQ",
  "key15": "fL6sVk8mS8NJN71MWASxAmEoYtMZpiiFQmFBEELgDp9zbDuea9dWvFegqgTMpS5DeBNXsz5CmHJC3LUnvGnhhGQ",
  "key16": "4aFAEiCLt9SGARD9choifmtzPMYFfqo4ykKXYjuXwe62C38zPuyedZksnNQTXWCrzaRAtT9AXgeTA6wujFwi7uEq",
  "key17": "49LXwc8TzHjZnFJ9PcVWd2y4RFrViDQ6XbEfHmwiBntkFRezzsdNc5R3fYBxo1xpVGCiYjNXxhjNDQ2ams4m3SZ9",
  "key18": "3uB6tG91GqeguPzVfTtZxfraEvr7NwRXyZT1vkgRCRqi6Bw87HzZLAFuhLzN9twESMBMucsq1ESAeJSxXh59XutY",
  "key19": "26HNeLhw6yEvMRnGSEXdoLPJzjFX1Y9U6RPQAZFpvwSCe8ZhCcBPhifFwrvR8BF8AA6boJMUrmWKcA1RdJJsvxxt",
  "key20": "2KerH1zqyLnHDo2Jka5Jripm7oZomAstRnrtXimURZj86DPsdTTV8xFxVXLW4rq3Yz3YBtGuwaYP9vPDGiV9y2zd",
  "key21": "2TP2vzJtu8edDCbcGJpGXgqN9Lr5NytofRa8MrW74WDXcoVRN6DFMWAhSCWoAYEC2WwGdsp9V8TE5xFNpAooZae",
  "key22": "4aGKRKJrd11zc4FCX3aMsHcSvjBfmihq6kGHvhA9rVkKBkQJGGobNHQ2QP2SCoSrww5NnbaPtCRYQrZYF46XThm5",
  "key23": "RDEdMpUSWgiQeTACJ3sSfeYw7ZqFSzhVM3MDaSWx1EHsvfsu4w3uNDRVshCgGdo53LKV1SvGeWaUD6UDnTW61Hv",
  "key24": "5fRRSvej3DXNmh3HCtm7m2jVqN5ra5VETZtafMzCajXB43h3jUkRaY6zXpWCLEdg2tqi78twEb1AHQwRNTX5hNL6",
  "key25": "f9kMLF4GvRnTtLpKzPfhAQXXLcpRETEzALCk8c3bQr5nKofPFEQM1r2q7RTqLwTwN4c93hpMVHF4pS4Q8cKUyuW",
  "key26": "5r1v7KzzpaVVWyxdGeD32cnjRzS65RNAxMwJRpNH7YAMb48TdKA3TWE9beaQPjNJVg4Jxj5v7UYWz2b5AmX6YZj4",
  "key27": "5VYi5vUfjT4b2TD7yfffrnTBv9y4DPdsju4MTNytTFg142EfYfGwRnpgurj1KKuLzGdJ7VKw2xXqBH9xWpVMuBNB"
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
