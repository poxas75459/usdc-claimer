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
    "4KtdZWBLhLbyPtKN4mnwebxowi9pV87PY4CmLkKqN8TwqAkU6qsPLH37dzdao12BFN1CrS4qDVDxhEfQwebhGJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AdwVBP84teGxuBotNP7LCw3m98mJSSAEdJEzqjnBq17QJscE1ipE16wEqeZjQPgqX8vBD9aetbwRKHbUe1e965y",
  "key1": "5meUaGP999iHv3hpfXFq65FDnjtK7Qd5SgSaazqGeVU4zUtRtocYiWCRjnkz3L6oxk3YXuHS8W9SMgR61QLpDR2a",
  "key2": "3yXY5UMU47RozDpUAk87Q6jnSgURc8z16uaPu9rxBcTgPvuXryLjkPfi91Ftr5whrMkeoJvnv7a8hoYMJTqe8fWJ",
  "key3": "5wwPs57jh1ke83pEK6FXKtGuFV7GmTyG3YhRxVLkgJbRF8bdyJaGudaTVrezwd3oG5dvBmVQRQrcmQGHjLGhMKMk",
  "key4": "F4DbY8wGm8LNoHXUHmLStcLEMK4AoJduhZH2Nny8RUNHxBgF9ia5CjkkTAxPeMpbx9YVQrC2seu9ToGBHD8fMGu",
  "key5": "2CtXUDqr4zLbfMaGR8pvQqRaewry4ixpRSGqRfQQta6zFdR5qpBCrpxPMTJJDh47Tc66GFuVmFsMMjC995wC4gix",
  "key6": "3ihyCsSAdvv7kFhZdwUThDQE8QWgzqnwkEj2xnBqzGP7ZRJyHS8Ms8GF4FuZRHYpwVM3qmscneQBLmMVQaQG5xpv",
  "key7": "R5kh8PBKzYKNV7qy5M8km24GnGD59PuqBKtSeZzY7MC3ZzEPgibeQmnmukcibnop3c3bq47V3LQE5DPGMwwmo41",
  "key8": "61NAcvjzRJ4UEgiiCYKY3ycrAEucDDDQhRCLWHHAwc26Ssk9inD4Vq8JfvPPybJwTYH94y2PjP2BtBadKg82hDr",
  "key9": "5krEuAYzTr7EWqfAc9rqWpyY6oZtVDEhcEfvGFNW4S1aW2L9cRhv1SfoEWAcLGiCmKEpmxDY8sgLvga1K5dkrW8c",
  "key10": "8vBeLwWCegKwKmNHXt3ZFnCiysADv1mTWgnDeG6fxY8z4nXcjk17ZU4rpNZdmHSRvKxtAsohyd7P1jartAipgiU",
  "key11": "3vghvY4UEqrFqhwmDncCdo6PUQM9JqFWQKCnsRv7X4LCjVJWQRHyVhVdJknk7afui3iQnCvmqp4JcB4FnUXhDZsd",
  "key12": "jCYb7VfrEBwUpWsdQM7xzN1KbG6yK1CVqwt1xoytUtGu5TotriDNwwPJTujeoYh6R4NF9rZ82Xyx1HCZe2TFT4J",
  "key13": "3ewASKoHbgMnuiCKQiMRHkQceS2DWUxHAcAdjQ4GLbfyj5t3fdrapMScvoroSKckjTTRpbdpedusghw4S2zgf32s",
  "key14": "4C8nSNNrFwemmJLsYp2r4sZw53cbCRtg2oVNZ7oTPHLzuXFGLwuhVZxCHQSu41evaiu6YpNhfkuLBCwFtKs4PW7a",
  "key15": "4T88JHwdC1awKuEfeAaTBBdkK6z8WrWmB8kKmfxogquaLmi9c2SDjXH5TopheeTRFYviSmTETNTkAtP15XcWapDD",
  "key16": "5qHsRtZsXfzRmSsziANYNX3g9H5dDfAVej5PPAAkGSSCUNKeb9uUCvNqq1T5AMCLjqwKf5JGeZdfexox4m5FTQvF",
  "key17": "2sFiRtoVNqA2VnvMK1UVpcfzsMPa1w2PPzYAWUZduzCAqM3JwZ2jH1GuxV7RfDBK2UfvrmnbDcfgkQo9aLbh9J58",
  "key18": "5nhPcZgRMmaTqqLcndEME2FKAvB4n4qTE7mTJ8vw6HVa37HgaXh2SMFC3YYBpEnEHceKnrPd3r8jHYo5HLz3AhjW",
  "key19": "2e3vABe3D7U2JqgtP3w1h154xdXxAPnnQ6ooUtV24nJBYSMaFgApq1WEHHBfktDdKYykNbfnnLudNmw4Kx4bEEiz",
  "key20": "5FvMzJ7RYDEFCAMED4483GzQJUsPqFhMAQMMRcUheyK9TXRcuo1i9Jsu85gkaB3WufmGGFW3DDqDK2Vvnn9SJxPz",
  "key21": "62fu4erC9hFEGJAuiwpqpJLGHb7LhWx3GtJU9DxDKw32RRjAJE2iptwGBsKUZiYnrAKD6PBS7amWutByWuWJwaAA",
  "key22": "2epBgExvEoCJJvyQrwMhtFncEvKLhFRfxo8R4Abf2HnZc8mAJvPQKYLGv8WtFtCZ4Frdkov5JqLAoLBdKf1PNe6S",
  "key23": "2RzxffRyJXm4o3oxCYMJbeGSa4XkLu2thJYLK97e42g3GnwENFAFnZvhZth1jgp3UyRbRDDd1MtfLQ6iLC9qPUAW",
  "key24": "44pZUfqsKMzoLTz7pq4958ZT82EsaiJFBBePrQNPRVWssnHsoKQCktaU2mdJDeKEALyFYWJBHESEZtjYQUXkygfs",
  "key25": "5Nm7knrvAKsP6ZUwudjJeGjDHqhLvGyARqPM9yWvqGbFkNSR7WjLFcXqRpq3D4bzFpQotg2q4we6GG7z2Bh83LAt",
  "key26": "49rzch88mTcKjxN8riM4y9hnZCpa5mW1u7WGBhVyGgXPZc8UAKeY9P33hz4bUPmyLJ27sS7gtJzut3NAvnRbjzSz",
  "key27": "3mzGPGPzLCo8moopTEYNE18a9utYojwvQzioG1t4jHojYNprBubtkfp6zmdFbME8QoSYjiYZhNGWJWXAmEi5Hx6V",
  "key28": "4wvnTFT5eht2yNrQFWPmXr1WwntbFSZMgU78T8o8zTU6w98JARm8JDPgcphX4BtqFoYwydDr1eNtRxFoqGrfSrCw",
  "key29": "2tw1J63Rz2dXBgKvqJ9VbzUgpp93FEem6Hu5BmMJMaf44nCyWKYKNpcUKiv8JxSLS5fCndBq8YVy17eZsb6ypUp7",
  "key30": "5KbaU9F56sC9J6fbdUvF2quHUzxwHNkwgQeL2kvckagLZryi1DASk5T15PdfYm9WbMd1kjDzRvVA6W7vCGy7ki5J",
  "key31": "2TJyN6Cux4RL1WBid4Truo7yQUjaru8WyE8GdXfdVdAM1AZpoJKW7XkN2KGtFeU211fZPhtTFQLLYttvjPUytb7D",
  "key32": "5HEjSCLwXjx2RTTegyH4ZnMEHJsSbKNX2fBMmsHiUSEStCSbLiX5q74HUGnTzazEason1P8SdpR6XgDe1kHYPWra",
  "key33": "PshBGa2Ki9UyLiCBE55SQ5YvQ6TPBqx3yWuGUPuvoqhGGcp4NUt17FpHSHA5mRVDZ3DKM38kBivSdb6ZpHFP9Sd",
  "key34": "2PNnqXRN672cZ6xUAbuA2j98mt6dGiF7ttphcxUh1G4cZ39qwbJFctbwfyW1HPX4owAfnEUT8mL26qSmNQJXNA8Z",
  "key35": "47zeDYABgL6Q199WDdWXKjnXA6Q9iGNG3N3uAeXjHDoRaSTYBfYwf1nCrzE2umsUW8dJScLz1DfqTCKYQ3BFeZGg",
  "key36": "4GizsdSS6X7CnxgL32LE6HdeF4U1AQkX43y9jUc4uMGzuBFA4WRsaKEXzddWqhFjPEyBjCEQHdoXjzWTWawXd1g5",
  "key37": "5CE9AgyxCmPj4rtpDRvFR4FZAsaASmRtM9DTw6sR5gHnHpGeHfoFsUgMpyibH2i5KCHEqoJVyVzA2LUEp8Xo3y2L",
  "key38": "5kr6GRqsYfryQ2gHeoUPrf5xGCHKhcwRyjtSg9nDbbLnEMtDRGieJc2ehRJ71Vq7MCnoEdegQ1ZCLfwyWP2o6Kf6",
  "key39": "2TSvtvpEntZGCp6uCbELeSdLbWusTVsgEuxgaXzeJR2oEPuEiZGD9ksi5ChbzmSAv32Bqyq8SPbfZg2tMYn6k3x7",
  "key40": "uG7U2sqxyEZt9DK15V5ZGD9NsvLEiTcpEqkxEdva66RQVvJpuWYJnrvoVrQDyiTRZdGmtNjrUbMDPboJtwNjabU",
  "key41": "49deFavoUQS9kCc1TKERWAdy8tZMeSpaNN5Rmazb2tGazUsv7337J6qFxCyJWWMjvFhsM1kZv9zuKF84sFw7VeuH",
  "key42": "3F4RoWCSEzgzwXjN8LuKMJTjD2W6VevkiVrM2DK3iSXRX78usfoFdxtU5SnrNRJdtNaFAwknVfuds52j7DE9brLb"
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
