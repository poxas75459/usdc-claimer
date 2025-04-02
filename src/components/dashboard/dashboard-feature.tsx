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
    "21GiAYjPMpDoDnPgzNfZuv58wiQVPNUdMVb3c3jtMQ4pWrqMF1m3YMpkxBeye2a24LWj71qcDzGEvCBip4AFmqyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "467msU4nS1HigaLFYTqZsD5SPMozLGbmGiBDhpPoq3MDWKJ9m3emwik6nNb1QTJk1rntCkThcK4NKfz4NQn4WzBq",
  "key1": "2niu5RmQUgjnfkCib6QRtg7XMwSQECAaPbCVnBXPm3KjeHS3A82epswV2T9bCvtcZhrnd58EUbRah3ncX1em8hzU",
  "key2": "3FoaaFfWee5B2KAf2CSe3k2TipzjMEkuHZih99mg8pZsKcBDUckEAghgGEGtHzX6zhEAmrD4MUU1ybqZkBGFvoWA",
  "key3": "KRxRWwT7HZVetuFuBUg97MS2VU8mSPtoonLWVptdLmnDbynJhqUQbWe5gmqAWF3oRgdcuvy7Kde5f7PSbwQ3AUr",
  "key4": "46Y5rhBrRVeNqdjP3PKWDN3sJWsGEo1PgGdXrkt96wJMRfz6E9yMRACKWobtu4tAoaCV9p4SRcWRcYL7oBaQBuuB",
  "key5": "4gsu9a9xiU6QXeb7ZuaxCZBgVX8qULDLSvFQMrzQ4jyQgmGRSzA6qik3G2tiioVL2kGaoZtfrrwAXGRi4j7rRqZh",
  "key6": "5R34k93VCc1mPx7Tk7eKcs1MfnStCJf4uD7z3Td2XuKmki1okePbST39uoizHpTGf1kgRwKLtQkhYXCcxppsd14u",
  "key7": "MQF2ZeuhRWBVBpeGX6yQAXQyHaBF7sLYb8BVC4UWfmVmoe7f9fEyta44agAvYm8XWWVEHkC4zJkfd2FzXGbhG8K",
  "key8": "5hwj9yTSpAsMMoRPhq23e5QzewW4xYkSAF6PBP2y1qemR1kbWcWXS2n79aAkbCzYirUKh5LAuujey6r7sdvKxysM",
  "key9": "YMfJ2XCYJsKJvPh7yFYFodxw1faKnG31wqCZkJxXYrheGHXPmmaXBjWmEn5hdFk3HykgHByfeyaHcuvTP7GzbFE",
  "key10": "5D85jWquDL1d6i72Czw1cKYaZMkKxkbq66aLcLFZFiT1cQmh9sh6KvCbjhWQTWXmEPAy7upjF4vpP6mVJ8txcKzq",
  "key11": "2sJpVX5UFTJmVDRoqA2KfaPxFc8ULEmWqWR5CxuQ2C9LmXc94dA4a4EAYLsZ7fvi3WiLbY9nktZ6ScRmKTNZ34ru",
  "key12": "4dhBFQznACDLb3DsLeEWi1uYhKr4sFD2WEFr8ZfgGj6GqnhsBroNG9Bz8QSGXtqmBMzMvNjfK1M6k6sfoJ6BumGU",
  "key13": "3uJBK1ngMHzJRXXcC4v3mzaZq1G3osqUqAnFVVFvMLNpL8p4QPKg7LUu8QJ48e5TuqZoGcA7d7ZzfpkqDx7zV3p2",
  "key14": "5ezrwFKhCbUJ4zMeiXWjPeZPB4znyRv9vfiykcmwtaiXmLYW6KG57eZRwi4Pqu2N94xwqeNyzhJER2h2NfaVX1DD",
  "key15": "4KzkKv5wRPhvMRRiNN8Sp2L97sxasvELoQaMPxr9hV7mmPGgZiR8QB3WTWHA6dH2dj4hzQj9X6niinEu7sACzj1G",
  "key16": "26RWcmgQw7x2Aivmrb7YS3BCfM91NkafwcYqxvK9dJDAbzHj1xMPJ1mtnMtV7DsQKTitTaircZdKTkFvKWpdGLrp",
  "key17": "5A94XQSvbb59N9G1sWHNKHD7F1auMFJwa5PBr4X941PGNkVuTXZBCBeS74Km8JJ57wWaz6tFJTNWfkQJPTUKzWAS",
  "key18": "5LUe1H6s7DzxUkB7SbsDj5PipsThTmvnXsJ83Zxniq13QvVymqD57sM6kJqMXEkL3gPCTg6fSqpPxDSKqe4NCJif",
  "key19": "2bupvCkWdzmHMhuKeHTimLKq4nZrnvpPRQ7f38D6tAF4xUQTvuT2YKDy64roF3x8numbKAd9nwESY769ykb6XeHj",
  "key20": "42LQj5ExdBdqkaydZ2D8uqeBYQ8bTWAdDW35LGAkDBYtzvr6kXaDccW6nCcBBZvptWZEHpUUgLu8QmKLVxauudHw",
  "key21": "57ATLvYn9kDiQTSZ3BH1B5jCHcviEe2EPg8gQcXkqM5YWUDEkEa4ayY1WKLvc2FhUG58wyfVDEkC8wFXJivxY31d",
  "key22": "TuQ8YtqGJucpV4QAjiyx4bFkPk3d7ThnewgwSZ5aNyzqFA5phwLoUi6ytTSRwLcK5FwFYPgXh1e5cLMUF1bSneP",
  "key23": "4M8QBjxmwVaVVm79UJ9HBD8LmGWqYaBcAeUbDJSV4FLMsN6UMN2QMCUZ6bHufLEZjUe63r9dUFmXo4b4fowNcHeA",
  "key24": "27ENhhSmWfuf94o7aG26PUBVmBrdRfkBuzt4Kq3LUVrLiZ1iY8oJejWckdmqTqsXaNfo6TaoiVJo1tar26daDZSb",
  "key25": "2SN8PZ9JdxaQHKkGssEBGhEXLM25Rgte7oV37ZeMXF8xC3Wivd2r6ZgJDnTiusRy31uDkQWncUy6kysJr7F2RGTj",
  "key26": "2eS79ugTugLZjCPuSiPt4jv4qChWWx6zkw38RHJQaUJKh8XcvjW6SzWnGgoYVTT96LMxKT2n7n2LgMLv2kew3vwR",
  "key27": "2ioX2vjafA4H3G2fCph7QQp2ykHT8wb6YcwuWiNAEnC5z8cHv89ZRz7TyzS6dCasVjaHmhNAvnPTi6gvdg2F7YRT",
  "key28": "5wvw3wbWXhzRtmLc5uEGWY2C6kvC5yf4UqJ39qCZfBniep7jfWAJE3gxZLwxtTxJSYvGdY6DVwHoEyW1QWQDsA6V",
  "key29": "42epbsr1YgAG76PvFKwZVb9ekXAsi3Qo1B9WasQm2mvvok6T7zb9zEWiNLg8Gasbt7DyDm4mzf1U19xBhdsfM2VH",
  "key30": "4zFfbzUPeV5mXqBRTY3JytLHC7ptLWSk2rwHdspVXZpPDJ3PM53e2G1zBYTMVrP5qZ8Kghzg2MvPDLny5K2pNWGT"
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
