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
    "21LML3FKNQoupzzwFJ53DCHTR4GS6iAaBK9A2hbbQgQz6dC6TuirsDWS5gXjd6XjC8zoNMH68NFrwzppuxAbf53c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LUsGsBFW1zqorJK5Li3gBWXxHUeYQCSDSrxFMp4s9zSwACUPkfBzgK6nZw73SR2oEtXejfX4Pn3Xfc4xzseqdps",
  "key1": "3osyPvuYna3HNuKFhyv6n4UMRztAgJCs24G4WUvGAisWd56segoYSiRnbqptMfs3hxu47GQkzUQ6MJhXZ6u3g7CT",
  "key2": "5ZPsKnMYNwatKh7uiVQkdf1er3Uvb4aqHrPs5co4jKK1WtxoemHv1S31ksvxX8YyYsoNT2Rfq5Ds24hthwUUSH5s",
  "key3": "59iUxLVsDEuFi1UkTuvHNwA1HacyFzJDWfj5yky6CjYDaMYjMUaksZzebRrg2kF2WPewt2sFZW68wQ5f1rFmKXq3",
  "key4": "27AhubXT682bAR886JULeRKijjNeVq58i3objvcVb9UP7YRYavg1pcHFpA54RB5qjD5rMSRWZTeCLnaQWe4wfL36",
  "key5": "4LccSgv5p1CMkkN8dpsNJfRb4PzTuzhfayQk4WxdXTeq8XmN4ZDEdQq1eXkiyh9KSqdf6wRSHZXsPKPrrJp96kay",
  "key6": "49fkKGPYUBN1ApL8YE11thk7Cr8dFCLb2u6qmFDVQPamjxjSwrpBBCsgWf1ApG13hjMx2rp9CQwfmDA2taDB3bsG",
  "key7": "3SZTxJNhLTx6VUw7HGx6xqhzTbdNAevkgAsggsijxqT4wX9v5Zz2ZjsDgEt4ZTFi9tk4MvFmEKTW6Kscth2s9PWS",
  "key8": "3Tfgiw8EBm92WQXcgXZ41ctf5kBJAwSzVQN738Po88Jn1mX6Wib4RgmFEqPy83oWeSnLHMaitwWHj3QM2a2DTTK9",
  "key9": "4dBRSg5p7TgDSC4C4iun9B6Pu31FrDvpbxrkVXwiwJcMvKEZyAp3XZsmwJGDVJ4zEYNGjKKqUXTLN7utzZUVyRTj",
  "key10": "1fNi6riCvycLjTJ1sozwkgu5GKq1e5wXKi2D7Kp34W4iBsuBFm9YzSFVobs8ysAiSeXrsVTRyCxnWrEcvDQsoGQ",
  "key11": "3di4DehZWoUQ6SmznnjKYti15gwiT7b9aTHbR8jQVAX6wGn9esXwu8AEnhbTQMrLD5y5pwfU7tfHx7PMbfpxXHHB",
  "key12": "2ZvFR96kADiPYsGR4GTXtMRYtV3TBwvL49t7ontfmA4DdjTjWxLNQpK9nPBr6MFcEG6212u1ieo4F5cNssLeYMxj",
  "key13": "4GhxH9WJJFZb4nM8o9UqJwja2D6uWcimYJBeyyU4P7mGLcwTYNLuy1EsXMggUUi6eQdWRk7WwDDaCUMmKPGUeSNw",
  "key14": "3DoYJELSHovRytjYnf5zCmVd4DrSYJZN4JiZ3rNizhLv656955n3yZNyWtyBGmto9vuNLHc5kdkQenmkSLfKvPjb",
  "key15": "2xDcTecgcweJHoaZMwXJgahP1743bhqf7LY11FEX5JHLD7AFpc9gvfZ32xBCa2A3ivVKSS2j12aLWXUTkd3FfMkq",
  "key16": "2keChf3GZ3VYCtRt57LN4hoETAndxCRizGLMFa7Wdcm3VtAihNMKeJP8DXiTRhdX6gaqGmcXTezhTpCovaydM7B7",
  "key17": "511KU4AYVGKWQiAvStRTCATEVF66Ec6anydnL5Dm7BDKtzfYFdmu6bXWqFrdo5LudViCuETguWoaucH3HkFtDpug",
  "key18": "34Pje6XPP2JaCvzqhofjQUkaScSoESQeyD3CVTAtkWM86XuSLD6QgGeRLtnBG7PckNGGiz2yB4yEXEPGEHDA8kZE",
  "key19": "2ypUPn4dVKWNcjZQm5LPUUrNWifeob2n5C5DqWhb97gk7AsQNiY1mq7Zj7o7hK5TYjiWyWZr8VBaTCPyuNg9Hw9f",
  "key20": "57KRa6eqjLQJKHLphx2H5JNXPtxzG2EDcqeAm43gWH2Lw3B8g23tcS8GC9Fy9ooMszUBNc5SKG1aYCJ7AwZFxRvA",
  "key21": "4emauUzncaWV3vtaCrKGPJx8gXmmJSJdT1PeACMzPwZcakdDqnPHgN6ZLyX7Afud5Tx6b6UNh5uXd51yJbVeJAq1",
  "key22": "58k9d2WxZ6nFzjwac1E43dpdXswmpRNSz1wH2BZnGGYc4vRL71yYV2TvK1ykvmWV88ND3X8bx8jhX2JajN5VRZZh",
  "key23": "3j5RBjSYKDpxyqZdTN5n3k55thanyM8EPiznEwRhPS5Hfm2QkhsuS6BUUXbVqZ12PB4Q1q8d2ZrN36h4dWJtBNdm",
  "key24": "7gPyerudJ9zJfTbY9tPLg1Hc8pSjUvuprpr6WKydUfAuMW9YobJmfhrDZVzcMh6pdZAmZEHdhj1ByDF3NZtK4BL",
  "key25": "WdrFXKyFj8fYWZgPib7AZWV9oqWC2be6M3mdB3XW84vzrocXJsZhnMWDQmamMMVzN7Ud7CHXEihZbsfhWLLTmSX",
  "key26": "MmZpaNyrnMC4mK6pDfDQuSbN2PdQc4mCTtTnEkxj54jUHHXGEJ32vBjT6Rwetefp69Y87MeZUis4SXbYBZ1Nv6W"
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
