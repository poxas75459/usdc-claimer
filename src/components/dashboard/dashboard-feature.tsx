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
    "25nFyMbPqpGXVBQ4XX5o52ZM6FWSjL54ATUc2QPNjQyyj7VKGFFSHrKyqoYdaeGBCLqWw3jin35apwYxo5YGy8DU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vuwgR9maRLPemRgSQyiKa1S33LjJGSgpmvDYrv9JW2X4EsjsxaHqo4PACUTmm8epgSwSRAQ2yQmG6uZSyr3nYS6",
  "key1": "67isdQGAK6RBdrs9D3ybDzDFvokBBtHaLVYg4vnZjzV8EfdGqBmpPhHK9m6v3mRNhoPxLZ2HLfaeXba5CXrqGYg",
  "key2": "2U8JCxA4XbRrxa25m8iyTb7kjkbsaqPy4VtSrXjmkeuaekzXxRQbYsQohn5QHN7P8wEE8EYHP5rqdUQCbFrSx6EJ",
  "key3": "5AvC2zEqNtdn9FFVWec6ZawnKmwtKqjMTrqwVzKHLngPQdjLXTfcn2V5PLZNdLftdkH1fxN11HLZobActXzSohBp",
  "key4": "39WC74XbeCV6spUMyKs3JaVz5erektY2uupaxrHJA3SuQAfuYEcFyDCSTicsxCLsJnLuXxYCGEG6Uz6QE6kaujVE",
  "key5": "mzJkoRgsF2m1yGzM1uSZbnpq8gE8mcPvB44La1Fyp39EBFg2nyi2JHWA2ftoomsSsaUqXP93GX31hbEbGxd4Z5i",
  "key6": "2bsU3vfsXVsApes5C7T6b6VEaAU73E21rjnu38FrYRyXJKzam4HnSkopcp4TunqexGZp3pxLMULqVTQzhasyNjp8",
  "key7": "3mvXCLUbcEKBUARf1mQmrqiN1YNzrhjHcFzU93di3c7nCSK3vxGs86QD8r2T6JyTwrqDMQM7oq1ULviQ9bbN1tg4",
  "key8": "43gDaScN2A87HUco5HV7jKxhvnBKqTEHsDijdKsB88yxB9gLe3fF6fMbFx2sy5M1av19LsAHf48Cv8axUiBWfwuk",
  "key9": "2dBTDRbVWYfH4rnUYGr5AHohVJPrzWpbdt5EBK35GaD2sH4myU3eR6to4aMSPUSWtpwtqTJ4prgVtkQyS4A4Tuoh",
  "key10": "28pYuLcjpYPMXU89WKw8myPuA1FDU5dB5Kqj9jtfW5t2zuEM1PuMfmdhaSGtA348Kz7eMtThLCjNV94ZafUG23ht",
  "key11": "FqmJThegDeyeubaJqbryV2gSpU1oMxyWYkig4dyaGnRyv13oKxhUiBfgRYeBWr4d7kFUrzs59bsf6GuQHoFRxGr",
  "key12": "ibarrK9ErcnCFxdcoc5NwShxXqX3LnXqLkRrC2pcqQS2NwwzqhoghNLvRZrw1nSWt77w1fkaxBvxxa5hZEYxiAE",
  "key13": "3DJVizY3vhygfyYxBiDSKDf3tEjwLru5yMtGsmnpsFerzE7mk2JnTstwbWHGatjkmJeFeWKsWTyhMPhUQGudmzhh",
  "key14": "4E3wueLuLpWQ1mVNmeyGbmNyeT8wmmrCcG11x9ZiNfCkrR1UUfofHE1UabHJbUGswJ6bHGRgsorMNRnMvaz7DaHX",
  "key15": "3S4JLLHR7Zu7NjQfcBfe3f3ALksxbiCe8o2RrHX1A3kJEakkYpkxLW1Nyb1iPD5bTbdiwnt87GXwSW395nMci8rk",
  "key16": "3TAcZZ9N7FyvPUiUd13Nb8qntUGjpwXUo5nnU5JCu3cymbdmPXemNiDk6ftrY88nRtCRHKdaCUGzPP7DyNLz1ry5",
  "key17": "4Ahprv17eEYb1wwGx4auQXRaFdsdV3cWWAVucEKEgxh8eq5iCGJTZ6DGpSBWJTBsrRJuSuPHJ29FGJGLynMqd9Az",
  "key18": "2wkvfX5PbVGCm5zswii4tSWPQmBwHYG1Ueix7v4uGGz2MH6Wyi2Dhq9mtfTAXJX6WjgN18Jsb5ym1mFH2JRhJdSH",
  "key19": "LfyMH1LjoDxptJWg5eqZ3Y7kD8ABKRFPxhruQCPCCQpG6NF4XCkrCvT25EJACvgHMYShquS5rNUr8FxwzYDusyV",
  "key20": "U9bUTqhKR5MUV62g86Zdig4fzrGDWDyGwnY3hHEzsfgeLjBZ9cn9x8JUmwNTMkSiQgukPMCPnjcNtRxqymCGvMW",
  "key21": "3UPAZ8iy5dxJCmB4LMN2JJ4X9hePf3AcvYmJq4KpCwq8fmnC8TSJMxyHBofhNVQFfYKXXZm2L7ticFK2FnpVJ7pT",
  "key22": "376rzCWKKEBFYQ8JAQnjN4DZ4jDaXVsepJtkDfv3qFWY2TYpeRZfjkVTj4mD1jpgdG8urpXEMcSBo83LxFvhfayV",
  "key23": "24SAskDfnXj8rBYMCSzd4Xzu7q7FAQr5uwPPT49v6oAVi3qr7oqM26GVjvhWCkBzEeaAMWMpUbxiz5pjU3qLaFJB",
  "key24": "5kKrazM9PhzX1yooE9TcVCWV1U2vSd6LPEWG9KfZqUWEBhgXd1PTuzLcxkZoj4dTRaWaPqfGoBoZzDzBa33ZkcfA",
  "key25": "3C9HF4dn9BpNUuX8Q6QGKx8CvY6CVXuU6KDALQY6vHYQYXVhDHhVLqKqFt243smQM6TYTDR113xohpMctLu8icvg"
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
