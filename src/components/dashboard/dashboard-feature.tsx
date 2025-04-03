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
    "3zsXJEicUjbykHJ87PHEzZYaVwJTk5doGqYeYtC9kiCdMC8VxrDupQx8hmLJ1npFaCGPp9iekH7EnsqqXtTtFhDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35zeG617nuYXSDzPZrBT5kt7CapadCKkPFaUaqHrbQs7tKbt85jwmh2t9heyR6r1AXBzrLf4VpAb6eRPryEy4J7W",
  "key1": "5RMjfPBvjbyGy8AUFncPQadpdxJmr2LqgXPe7gTDnQLLk63afNVQwRPccuVWusmUj3diJsaLxjXENHgDA9FzJcZq",
  "key2": "3gvtsf7Ah8ZjCymbSkX5q6uERMiHRqZnQtZ52R34McmvFvNHKEajNpZFyA4Xd5hFP64iKR8QHggHXNSeKZmVybrd",
  "key3": "5D2pP4uFEQdGAo9NszrLxVsWtxb7rLNc2QKTmU4AaiXgggvMnjaeouD4UuT3ydX2axM1sUB2S8AgicB5La5BBMEx",
  "key4": "4wj11kegbjhkaQCjdtRPyx79MvbG2gpu93t6xM9gxKa9Y2FtqhE6yR5VmKfkVgNS4GqXYaABcaEf29TX4gzNMDoZ",
  "key5": "5nn9odc92veMafmzeipC4WPokNfiDDBrqVPuPqArGgJQMPAbFCaaa3RoErJZcXATipHRrX23B1jTghxVZ712LwWP",
  "key6": "CJE5Gs2qVUNWyHktyvtbzBwcMBg8zGd5USeJgKKZjxTfg3sVEB3in4TfZNe85asCRKfpdAvU2gb8Bm8JswBvfjW",
  "key7": "25CBr8ArfxYd5Sf3mRSV2N9sF5V9eUy463wRkba5pV5j14t6TauUjwtXyoNMb6dfbmUckeagorkCecVs6mtmdvtn",
  "key8": "4EySzqqYR4XgB7ZHCq8VW6v1CfQiVnvsQqSdukqVKaT4EWmAUao6vpAyrG72Doifd2MBgiVsxGHuF68Lq632HZJd",
  "key9": "5fpSUjPzr7ovPTLBFNgNyveeFDYAUcZAXBi3LCpQP8w9aZCTfMmSUeezonbGBUDEiv4Rm4QbcsnZKn5ucFbmUYzk",
  "key10": "CkXAQP9TYVFDZypuVuCKMso6gcXgwZUorJPGaFxFJfZd88NWRAxtH3jBet3RNiMBgk9EABPexuyyLxa5ur9Wnfo",
  "key11": "451PS6o1MTkkdkGJHbYtfMMFmApGspgtQNxvMeQYDWjQKrwbKcKXiuCYzr3Sz9RRnEVDACaGrMUB2wgGLPXXGKNf",
  "key12": "3eqvTwi4aiPBKHA3rQJACK4ZXxCtwkehYSTGeZENx3c9QKyt7rhgQeSeyBbTbzbd64GpzAHNtqBhGJhhJF4xbRov",
  "key13": "2ktRtJiRhJiUhyGXk6BSkG5C3zafTVkzJnBAtgsfroajYqj4XJxBw8u4D41HSGYrD4eshXxRwR8y2mW6gxwGEDzY",
  "key14": "3KUHoZJfTchXykYhYR4fJ7gDoqiHQkoKYuQp31BPh9xGa8SxeL8TZmL6VWhmiWVtbnSepJwEwwdRRFHq1ozbJsTN",
  "key15": "565hTSU6VjYPtnBGCV9Wx3vDxTY1EHCr2TRnFdfN91ihW7Vd3jpHSTH784nWpGk8YpFpq1n5gom4y12PZouKioVy",
  "key16": "2U1Cy6QR2jTnM8HKUhzsMbKdP7p6TT43v1YepcqoLgTvR7KSAKMUKsEcj8KjJR6WssMEAtb87PnGkHdV1g29bQct",
  "key17": "3p2BdqrCLJvx3Kcotcsec18jHzAuZbKjTXky8sZJi4jFUTKBNzY31QnjAAMM3wP3vZKFwnH9CtzwrZ9rwPW4DgLx",
  "key18": "5PCuQZFqSEvob4ocVU8ihb19dubJypMyeAuNmabD8uoRps8tQtVnzMNAXdWvndZP8U55dwhvoV6zxy1DxCixFFaF",
  "key19": "48ZN3FSVnEBDs7Bsk2FuKwqosQ5vccCC5i46jdu6F4vES2nAnpcEYeTASwcCbSmF6gLLXzBjHEKEnduCTxsjhczN",
  "key20": "65CrkNbMJr64KdVDEhQfUk8hdk7cgdaQibkd72jep3qporE6tHuFFWYHfe3Z9SG1ZUmxaPjfbcwCBNjKzXdrVy9D",
  "key21": "5ALvZ8cYHWtcuxzijMwGQBa2uXLZ42soQ54dKZvF3opYaVRLXAv5XkZmumZ1TiWEzC1mUVTWtj1QDSkSNi915cft",
  "key22": "4PkHdRTX5CMZefuceDBWEGT9G66Pqx41jBhCe3UGZ9gawJg7BZpbEaCfwecg6fBquKmRUZxzBXnPyh5Qr95sBKcU",
  "key23": "K3qaiXAWx7ZN4Xr2PqzHAzufrGijs8z26pz6EpEcspT47GhZLiSYbPnYR6FTmujhTMWa5y5bPvTDDmg3SQAmV1s",
  "key24": "3g3x91qW9ySoDVgFLN6PD5GFUCFjRA65M8BctC6YPL3RukTcepEDonyozYQZUNY13xMUWswpY3STszrVuXEjNwsa",
  "key25": "5cQuYYNp65eG6ui2tTATdP86CgmxF43h3Qbg3AfKNypGHuydwYAvFooTi5ofX5cGBRztiyjigG6knYGRFcJ6XDv2",
  "key26": "uNxzpYofL1kaP5cKZc2agTDCEvQDdQY2Fw3W9mgXiMq5xUeBttEMvank1eRvYGC3P9n9ZVpmweDpQRLzoucJHdd",
  "key27": "2wsc3vVPc9hKrfq2zGhSLCjSydFLbzqEi57w9MuFUBE4YfZ1aqqCundKy9ZTWErFxGywEAL6wUoCofQMwJ8xCmEH",
  "key28": "2SZspmWXmimM1LCEM55o78AQJzRvvcZciVdpUwCR4pUbw74mgyKmiHCVgCEHYD75MtDXYAwQvZcFLH8WHSg2ye2P",
  "key29": "3odPKEPP8Lhwxi5mz7R5GjkyV2cqa8AZ2whg5wktApdFqGyRaET4p1VT4oJp8UNsq2mVoRPGtw15ufmbvBqXuqWU",
  "key30": "4jDWNpsfiKhmpBvWiGdPi9GU1r7jHjkSt2JCyzfrbkZn4frEeYzinjexMNPHgQmcw9miopwQdYfnSCk2tjZonFPE",
  "key31": "6WsHtqPfcCd6Pkn4VpjziwxocFCoXbxofaKQ6dR12BsfXneX5WCBQJDVbzxq5hgu28BYpWzj6nVP7rFtUdAMnSh",
  "key32": "3x7GUW8xADJj3yWq6mn9x7H9guaA5Q9bb6WHuQzgx3YMJUYLDMHkA3A3MgpdpnXcG9ZncqBqAsRffqTYhQHjN9sn",
  "key33": "2QHq6yFUeBoH63xqRNjGhTcp3HHTwVYrRbfFqwcNhhFhyvaqPmwuuNX1AwWn5jNLYqCX9qbWN1H9D4keHqy7gzaS",
  "key34": "28GXTX8sdsjZm41tmAnHDg9J9Nsjqp9csVbH4J6yns49eNDq43iSh5xW3nQSwtkq6c7sBSxhxr1kVbDub7fGEv4R",
  "key35": "352smAtqAsAM5FgKVqopLP1kcYpq1TLt3LLv43yxBJiPFLcRDJfBxBQ5X9rLykKyodNtk3PyNUHmFxxUPHmfMCXe",
  "key36": "27RrHeHi9JJwFod43EzuQVH1EZ9qEjLhdEDgcMpwafpxZjbhJcVGuLMEVcJvZUTPYYn5ZsVaQS3ikHXUhmqFpthL",
  "key37": "4cZzXEzrwAdc4zPkvKTHohyiNvGm71kQfqrzxbBFLtScJWPaYLAkK8QK2xERfMA8pzmnxpj5DF37CdzdJapzwtZG",
  "key38": "4noiAjGe8Tn3dPpi4gMYyST71MTP5Tmstz6ufp3AL4QutJpegjb1TS1tVn8P7U69YAm7dgYAJvoVP3DvUREpe5Qc",
  "key39": "5EVRjouWbxwcS27JhNp8Fzg4ji8mbZV9kWQt2HZYjs5UreUX4n27FzU9jZKr4yfo43CPyAcmAo1kWiv62u71fXgc",
  "key40": "3YxWBLcgPZtkMWVdec46to98Y94tnygiyxQLDuCT2z5fxCXhxCvY3rxNEsavD8oNE2wvzU7q61S3K1CVkkVGduJ9",
  "key41": "56vHQKd6ZXjdcWVhJykhHqgRK5VUSgs2JApyzrTTDVfLiunSzpTYKDyC8g9113BMCcJbbVLL4x6SWVuKfYhKxQE7",
  "key42": "25s8qShDb9y1kJ3cdNSuAx6rgP2tteGg9afmRJJyG8QNnDbkgbk8u2zrBN4ideTi152XSTZxJwP9JDydo1CxRnus",
  "key43": "5tMe1Gd9rJ8tRpBpgw1o5PUwPh1wt1kvPNWwXXKQdoTGwtQBSFrh9QzQrCfb37uD5xURDJL4Uzu5hdXkNZTb9CLm",
  "key44": "2wP9kPBLzW8NYR9cWwP68htxhairZUrFTDSDtSFQgutKtaMfPZvpbzvxdCCFtXbsaJVs1gubkxN6g6ohbKPnrBRo",
  "key45": "2fzSUgAy5DdJ1zNRiwBC1NzkywyG7wGretogYtfJ2z6mfuKwhqwfnfDTWWrFtNBBaJSYgofaVGvaHxSoBN8FoYgB",
  "key46": "4Q8Mmyj8NEjSMc3c8jAZ7yFWD9Ssu1TGiQCWMuG54wpaZcDUNLVBK3yYKignpTdMcqvM1Su7JZr1SpLtCBTjRRX"
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
