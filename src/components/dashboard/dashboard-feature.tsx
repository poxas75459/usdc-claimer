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
    "46gzKjUdC2h7QVszKGZSTjhcWpjTmSPvdzxvD6rvhTSo4enu4DYrwi8gz5rvKjbXrfxkc9eEjbJ1gdgCDU6ZZWuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "seKfGWeZ8YD6AQcDBrrQ398hyV2t3FMufe4576W7apM1czU1hLekNgWJHyMh2WceJiERgpeiVWPna4rRRfVLfGe",
  "key1": "2xFVFHnwBGgnQ87MczhegE97Q1rAzqkFBFicof9VNWiShfMPfzj7qnu6LbCCFAfdnFiiS5ASWFvmNgKiUAyCGAzX",
  "key2": "4VUfZMhrqYR65n5JycfbVZ6ydR2ZKc9PdyfYFfsTLtnoDeNVsmNZ2wa4KTBcBaTovXstih7U5U8cU1huAVDEygTr",
  "key3": "4fMXCap61EXjDaQ7cc3MCKdHNx3JU2URGQq9nYKbLErcvMMqYaBnQ8Nj87o8JugDNVJ65PYPWdXWwk3afKTr6fmn",
  "key4": "5C71r5kPdp7LY7bupg2p7iLonu44uuJp1LMvgQcvPT3HNgKJPRXf3ijPqoASkgKgpWEqaPeRUrTac2fAtA4Bxc8J",
  "key5": "24mUtT21KwbwvXXN8Y6zKbtFuFLpVeapgmMpKfQaoxVuyppuZLmvtW6pyVzBpJ8aLP1vzYx4834mcDZFHoNknUSJ",
  "key6": "5ZiZayLvgKEdkhqAJjt9rDdjnrfEdfx3GXAiJAdXW7ZRiGCQEtdUyAGrncKbzhWvhTNWTC4n4SKAWh5TtsJc6Ezp",
  "key7": "5DW6g9YUY8SNmYAanh6tXfkS8QA3nX7Zp3D6cf3M3ZmZdH3z7bfy2g6cBJsvW4uuXCsWcBCrvN8FABZs3x56sAd1",
  "key8": "5T6D7xhSkmW5vynsS6qPYTQkkNUM1PFfhsZJnTRpU1CiCn1vjogsCpbb99WR6Pn8R19zLfUu42UQfiJMYvdZ6RKi",
  "key9": "2QqYJveY9MtpNzNx7xEGP85iHBcs8zmZ9gNEQAHWAqwj94iJ3c89rZcihLWTgYfNAv9p4q5TYaSdfQhtPJuyvdxo",
  "key10": "5BeU4HbMDs8tYhA213sBiNUqh6RwTnWMBAking4QrnjxGsBPaTGg5s2YrhRGRAnbad4nQo6NLQR8LfZWNFRdNpp6",
  "key11": "XYjDUsPYHky8uhkkxjTzLsj15D71Mtt9K97pwUDe1XUnwUjLBrC6rb4X9ZBacUaKjJuSbW7mPRNWfXJh3w7HC3r",
  "key12": "4MAHx4jXeMuBM6d4kLYA3xBroh5MtXHR5fjvxy9xhFptvgi7jwtaga5N8GgwieuUHuWsEtf6aFSUboz2RZDCgH3s",
  "key13": "5mdS41nwgfV3sbvD18FAdFgj2Bmoge1Q2oUkGEpXopodAbwQd9vGfkRhQArZkribPGfCM8Qk2t1kwUsche8wggJB",
  "key14": "5jeX7N8qZMjzQp68RWAwHtm2KjT9Pp5kDnhMZSkjd8SKHrFqQcS4xA9RqfibekDy2UbtQx4vH43RRhgz4RZuedjj",
  "key15": "4on7R4ZYXXf1Qxe6r44qvzzQY4ePQQS6uno2uaRqpz5Hw5jUdgnFywn9Cu6DEggDPFGVyXTUDrM42kiU8QDa91tk",
  "key16": "4ML6pL8xyKB3YLHLk58HfaeBMUPRXDcZt5sUBEmsSvyujjoRkwR4NUaPMieSpVFGEy7zd9mAtjPVRm7aUTSjji7q",
  "key17": "25rVU7o9eq3yTmJPfqWuwaiqvxCwFcwnh1ufLuXtofKQSLLv7DvPDMDA3b5YE6Yze2nMKwccZoGSMXLSz5RsV8LE",
  "key18": "2iL4xnx3UTwPXboRxNNXMXech48v2oeDAci19PtVisaXpRvApLMLjEYEq6GXz3uom61yPayaHmRG6Ha1nxHa4UEB",
  "key19": "42E5SMgi1Sa3Qe9fJF2RY65MB7cTuQtRYijCMpRT871KiGR9V3XX5RmoqY6bxnSG5vyKVDDsokFEQf9jRXoTygDP",
  "key20": "3PHgVMMetUsbcape6aHjkx8uwBXQuhcGTyc8fB4oChxMaabniZr8kZT5NaJb1FxitJ1KREoT8PHXReScaisYFC3d",
  "key21": "52xZbSCZ7m8XWKZq2dy77AVEa53rdjGdXAMVrVXyqr9Tug3j1hQdEyiLyJ1aAkKarvBQ2Dg8QzXsy7tBHSAwY1N6",
  "key22": "47NoY5rHaC3KYbmySz93ERmmgbYmb5qB1xkQggnLprNtN2epyXnGJ7dGmFudpYiBzk2Sqa3pRV2Gf93nppbH5Fg3",
  "key23": "3pVL6Ayf3WzaZ6Ja3CLkgWxYZHjR3vr2YJpjb1aoG4tixQ5gedEaFZTPcMHaLesRhmorkKrxPayHCzUqgAGiVNAb",
  "key24": "vYJDTcbUkQBeGtFfzzAwm96LDe6eSfYB9uyz6pXQpCeYg6EChRTsxiWVAUcYBhety1cXcHL6mgiWyNPt8vRHgaW",
  "key25": "5SPQg55TX8qGn7kAgddM3bkp1xka4MCdia5YZD8fcYyN5uj7b95e2epi9kVeujqNn7a5WfLd1dCg4oKeXLLX6tZ3",
  "key26": "28Re767jCQ2vDbjwQhKT4gZRsQVnGS2BxUzgaikCikJk8UmE1nxMcRaxyCesNYNfAg3Dbyg6oHqjEzSCosSKqpHF",
  "key27": "28WoBNLfTStrDcRTCX3BqyqkLVWcXLhaqRwT9qvLscZku3A1XpxLeaE7TMdYvodxifb6Dubhdsz3MJqowB35B8tN",
  "key28": "y9BQnbnJnnWKxeq6zYEACpAPMJk1dAXJzCcvH2t8PXvty56Yf9Yp5qSbhBJ7jvWUUu6MkKnmqGpavdhByxQSgHb",
  "key29": "2W7A2RvBfKhSzetKtvQj2XpYNXzxYqbXpRouQV3kzqMKtGagUHPdeFBDDUVGm3Asx3i1rptwGwBFnK4AgM35bsMV",
  "key30": "3bf7akdExTthzyYh7v2ck21tv9w2CSAoz9tNFMa6HQPYUiBqxhu8KpgTgvCmkWjj7YDw16pPny8BzvCkMmTM9cUy",
  "key31": "fEFDoJ3VSVUYXFv4XPbW5bAdXMP4dwEzEKL5oQccx3urUHwzCuroYPMBdzXwdxh2TuLxLbbnTFDDXreJd5nSxgP",
  "key32": "5x9uJZPtgY31wCB1bvAnJFbMWuq11zFdt84Dxm2K4k5KyWVkjSFk7uKe5nmu1uBUqc5Bp2V2DiX4R3Y35VN8nqe9",
  "key33": "2DUvu4FXVGXqS9Uhz1mSpHbZuDoZQ64MWdmJ2bcVuFWvfc14vXNc8ELZnMR2d7MvoySRYi5gX9i2vKDaNcgsL2ox",
  "key34": "M96yTTeGtwahgASoiLHivDgnkXuuWcqYbed6TZ5dT8kn9eueTKBuRUZAqGZr59q233QSqEBdbLnAW3oRtgeP5RX",
  "key35": "4H4567W1phNTS7yFyMfuPvxJZYddxgb76cLkfSPLwivg9ERbX38PSpDhGn9mx5rMMhVygNYVaCx6vHbykcNJTvnf",
  "key36": "5FEFRMMsPSzUBJ56gYcRVrYBur8kfzTbHnEd8VAT5WkHcGDU6EdFzUmRT4zqKch9JZb8D3N3xVF4hLjbxRb8DFJK",
  "key37": "4BDoR13gCR94XtnVyzv8SLyfemvVdFmeS3pw88fEZhjfztKm2WJugmMXWAJG8ZKBc6AjFMFy27854Sm4PRZqyWNa",
  "key38": "2tXLR2GLgMhnsFfbg5TKWKCvrr2es3MafiQcvVyNMig1VQpJAGQ79vWkBv6G1HNnbpsWDE9s6e5BehpRFj9ZuLAA",
  "key39": "2XcWCfZYRb4DbhUsHirbEM87LVga2uqoUFQvyXcDh5TzYXYtkeYCNFcwEhwSVen2z4ooZtkSHJEYhCYhwibhGfz3",
  "key40": "5BMaw2wP4swPi4bqvW4UAVfL5ksmdBfsK3bHwgZHHFsumKaqM3cQtdeqyvN5ccn72bAKnoRFnYQYMnxdLbYnPJFs",
  "key41": "u2zm7qVvNSguBEccAShuZvmsH7hWQezKqMkqtXk557sCYZ2irEWRYVC928S1cAbgGqgWUhZ71aDUwxNkH2Unf5c",
  "key42": "5Fn7AX4QY7UmsVaS5kVw9dwNNghFZThh7xAMcBGgnKdfZVbYJR9wvTEbBX7wCpugHSoALYLaikTurWVm6eXUk7en",
  "key43": "33Wk7XnqiGDW5Hi97vUBju46u6Kd1L8oTrPpZgAV2Q53ttuZdeerTG3WP39EVG8MWdEFPhe1FqB1Y6cbBQUpmSSX",
  "key44": "4mBkkiFEC3Ytbk4tbQEBg18VgdFknvSWYmZ4CiLtoy1tteYxgnFC5ktUs5RKCnq99wv1ESiGmap8bzxHcLDX6X8R",
  "key45": "19SGzwBNPvicDEDjr3vHdx6eX5q6ZRH1es2uhqErGQr6A2r1RhrwJ2WGG3PjzSCMzrmsCgCBDzJdgLLuEASrxtm"
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
