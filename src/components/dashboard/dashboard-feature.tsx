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
    "5QBjwaUuSBKanuiLi5UUuZywUECPNefacXzFX1Xom2fm23GcdEWrUYzpzABaSzFrCYNypmFy5RNAVKcriT4y9M9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F1ai7xaXazE6GbRgohvySHuaA1atJJiFasebqULTTtcSNy8MkiG7F1er71xmYz4pYHhqACk2D4h5z3hJ1a57vEZ",
  "key1": "2LYn5RifPc96U4FnTF7M1TjRCNH3KQ2vp2udKYwXSTaguBsczbJcKAftpz4LGJjDu9g7FpZsUPN7iafxK8uYwnJJ",
  "key2": "3feRD8TocgS9Wd3Ak8dKxoehCnDu8CXCCtDQB6boH1xSvARD3XfAQU1BkhFuBTeLBDJ14qRQbf8igTtXjrzxFhRS",
  "key3": "3rpvrZ7V5QsXrjzfHKputnx14epq2HMjGY9R9chBaevpST3Z9m6YfCxrTeDMGbPj78pGcyrznAdJBkNmjB5USQSe",
  "key4": "4P82E69XZHf1Y47L7SrzDcxtcLVwdUYNZCeTpgvWiCDCSHgWbeFsXY5zhLLzhGm4xknLe6my6aNoCkJkoQXcXj39",
  "key5": "seRPkw7NeB6TXb8oGqhAKpKc2G8mokNMkFhHyNzBQByu6A3eBbgLZfYptgz5ZgxNFwyeKkQZx2EHSpjPEjs3iGH",
  "key6": "3XnTrH6bLdNRR1A8JbNeV83oUdd2ZU5GCdGyjq8cWC8f32exLWaxbpHAXo7o9ojkfZAZjcTgEHFyDbkUQAQmnp5f",
  "key7": "2bqHeLQBCYVKoyPaUw8VZNnnSRUvYynUUQzuKKaZfYuJmrYn1jBDtvv41GdRnUCq5uy5FcUu9tVcXvreEhuUv3QB",
  "key8": "3dmnuBSLyFxP9u6S1QjuhpHz1hv8DF6vF9iAmgGpodbMXzrzaRMq3LvceYWWtFiUSTXGVYVHLv9RGQ5QcRQeLzkD",
  "key9": "5vW5pmUoELSDzgntDKkwdVreLcaTbrFwgBzughXvDpjBcXfZWKTGmrYBmsn2RsP2Gt6KamWe5JrixEG2jGaH9591",
  "key10": "2ogHuNuuH4UZR3E3wW4cpBvxoqDqAPYixKwh6J4iEVcXJMTXEdNfeyWP9rx26yW9o4mne3EpgixM3Co9zEbhjU6g",
  "key11": "2atUBchnz7E3qT8xeMeZZpEEp3cjEoKfr4qZ7aBcnvbyFpdH2adhBZZQYj1ActVPRvStN4u7mK3K1cc1Bmf5zqHM",
  "key12": "3qMPzfA51vzzcRpEh4QPKHya6F3mTvCgEyNgvq8B5iFPhbZ7TozswS9REW46n6JWj7jrvRFsf13BHdj7GpQ8GjZb",
  "key13": "9nvvCFU8tQcJh52Ztpw7Z2UdiHsJ2bYHYhRNhkTs6hMjASzwm39PgFyz57Q2kZGuVufPcnQf3gmSw12XsdTMjNz",
  "key14": "32wAqn3fpdRAqnhZwax1KsMjpWZ4DpWWHN1Tw1qv4mbUD4iL9m6fL1yLd4ygogcbWEURStBefZckxuV8TgKsvSfF",
  "key15": "4ok8Kt8zKuFNEz3LmA5kGkVBneMJGN28VbSvfQHK7HcAUP6RhjUxLjsUFsTB1M148zn2HU2HP1E2nDCyP1t6R88v",
  "key16": "3RLYJxZSj5n2kZBZkdHQKjuzNMC8WvkhTLt64u4Tzsp3HvyqFMTHnnQW4HGvVpnDi1jtcQGaLBvtUvS85mvPvYWE",
  "key17": "5pTw1ubwuk1sA18eHcSn4LCBDELENr8Yc9utxL3rS5nB4ffMiGmaCWjQwhqgHTgPxhusFAGJwLHgoj95BBLJpb1A",
  "key18": "4PkRCQdZr3ijyRDfJhG2VzZkm1YfiKSVxZZ8ZmjpqPRpUGR39kkf2AMQu2WFN34jvdbWGHW1TxtyGErKh7AiVvB4",
  "key19": "5916ejT9rjYJHrjmtHrpLXzyRPm9MpUE4fAuY59aZJhbqgFhKWbGpWZto2iqWpgH9iFfMMM4D9QFSrUkh6s5BmRe",
  "key20": "5uv1ZHQ8zq9r4FCU4DWnnSkih3CZEwj5hfrVRepZDkRF3zz8BbDobJts9eGVsZ5LBPZSEkNkDnaebSdT6JJTsjEJ",
  "key21": "3Luk2hTd24Z5TqcAeCwXfEszhwdgh1sxQ1Vd8ZKt2GnJ4LSdSDbQzovvdTBw9vX9mUnAWBVbw92SKxLrruE6GTvs",
  "key22": "2zNxHWnPhzN7aDsc8deEku3hrw5X1PFjaganHhNi3tc4LPbhCPSWhrBXJwsDUEDSFfevDhWkEY8bnZqp3yLj8iFC",
  "key23": "2Yzseh5TC4Ko8iPoXNqNu36E59rVW5QfHMHxMy2dzgCkDgM2CdjZr4gUgWDTijaS5t9BAWGbT4pZuaaDrYVAAbKs",
  "key24": "romtbSH53KJnTyoHEbuiw3L4n9EuoBK571YJGqQ7i3PVnrSz8iHRyWaYVg7zMXTb4nEyCV1isP7Rg9ivLkWfPEN",
  "key25": "NgDrEAvhB3GK6VGD8wdL6VZxnCjKGbqJKzRGMzGCTx2qQXokv6zN8hfhkbdWqJRpZtg73JF68JYqWSKrK4b2GSQ",
  "key26": "5ht7qmiG6p6PMe24wpdnqdfXKrYsEGuzwKNhuF93cyWYEztZoPp4q73mJw4pogvHhJ3RBTw92ytmkf3DF3TiLEwR",
  "key27": "4E7Z2h9X3KufmRNGtprzYyaqk4Bf2t39vDW8FxoKsPQKnhsewmCV3qxS98k2asvg11chW97CeviYYHGJtBc3S1aA",
  "key28": "2cBLh9c27fgTStZvSHbFpEi83HS7Q1tbrybqcLrJMk7cJpPf9VY7TsQfTZucDnbatng5L49Va22zC9RL1s9Tbv4q"
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
