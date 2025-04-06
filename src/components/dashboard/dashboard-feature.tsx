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
    "2RMCqHNX2gqzSgmLrKH2Rw7LYvLBQ3PUyUGH9zq7ZjrivSbJdtJsuJf8y26wv7cLxwct2jpR8JYncJrWN9XrTi7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66cmFTKDcVqDX135N42j43NqrkaZ2KHBTETSGAZCzrRfxeY5hsB7J6odUPjhdWpMQLcihryF8sPWWhVo31q1Ve2k",
  "key1": "u5pGgCjStpoYrtcSGdjPwWRGustnGp5J5JswwxKpckDoKwcCxLH5HcqYGyrSBjytRN6qiH4qtgcvxezYcJLH1uV",
  "key2": "3xiZMLFxuJhssNAw2mudPvdJSsUQWq4RZkr3j4Ah5gknQKTyBqbZC5DqmaUKDr7czvbkrZqDvxa33x8K84JvPNsn",
  "key3": "2BHxzt2FoaYWt9QgKbLrQeSQqFgY3jxHkyywKCXj2A5yETFPV5GVXKL9ZjRpKdbbJoqfQzWmtWApELpey21a8X3u",
  "key4": "2BB3AUZKvMgCfimdEwhJCsNxnaH1PJPhpW3Yo49Ggswqn8QEwK4STwAHoWjBva4dxyUhp3RCp3t4jYJfDhFrrBxU",
  "key5": "ktyKnNjURAxzTyhuRxJb7BMBgBme9RyqaYr513oejV2nbzbEJ7JXycEP7DoMU1aWhEEgJD7ucqsb6UtYtuk8hLf",
  "key6": "3beYgMRHC8o6AhoojFYPhNrWPb2XhvQw85RPPCtSJ5iMEFxwxg4guB4Y3jZH9b6MFbhKFMqqkYfug6wg3YLSZPeM",
  "key7": "3QKECqBGY7EzLBkhbm6F4Y2eSN8oWffN5nJ4zGhUqexhXAi31JwCm2uKhHA2PWSG52HbLHDycBRVT4eo5x4e7DDL",
  "key8": "3D1yDYEBUwVhHnBqGf4C64biZ1z6TCMEvd5EaG2YcEe3qC5RYm7yGfMUtH4F83irwgo47iQ3tkZmL2iiRfNeLSCL",
  "key9": "TyBhH1c3uVH7RV5EzSqy76nwDu2gAKWSogR1beYVzve13L9Gsug9WVJtshWfoYUBvP5bJGQaKadcPfaeCzBDRA7",
  "key10": "29cGR3TN6nLJbyF62xvAzgwdXUXky3mVxcgttiftWrjS9f1xVdbMUWtsYSi9tMzhWWapubosoRtkTC9EcXLxe1E9",
  "key11": "hg2QczNB9yws1n1Jh6rP2F8mVwkk1pnBmCVkr9Di3MMeUNotMPrehqf3XQxQD1LEBBGQQMvAvPktHpEZWcvhC2i",
  "key12": "3pGUEVLrQugdQFLNgQbe2btJtkMcwweqYvdNYJqbtUxeRim317aQ6yocrs1YhEscLhMfPCF8KM6x22tj5zvCMJGy",
  "key13": "9x1jtD4dyN7W6TcqBLbwcuiskw6fRFeANrMgYx56KFszz7z9uRWuGho5dY9coc6V7pcF3NtXxMVpEAJxmZY3mRZ",
  "key14": "3ura3gNXSDCrDtMSYTf5ZFdtNen4cwv7Z2nUdV8NjvXFYgcDR53KiC3iX89pNEnGmDu7eRb94bQdysJa8NLWZkKo",
  "key15": "4cNqa7iAA64JRn8Lwk9sacB899uf1Nu9p78NCxaNK8hwn5zCAN4EqLcv5kKXtnXq2vQKLHQLW864X54risKkPaZT",
  "key16": "59JCHcY6v7xCqcvs3nzH6VL3LHsyeF1zGf18nbocmG2EwrNKgpMWNygdsawTToKsTtNfh22uJQTUufEzAHvc8hU",
  "key17": "3CJGKbW2gnyYjLJocp2nJsjN1zbMf3n9UpWE4zZsTozFcgtxHz1cA1Xo9nSz2zMLumJEjVYLeFHhpNrcCaZePgeo",
  "key18": "61VRFvUX4gR8aMumLRWKwfrabtNk3NnZxodXmgY5WWudKMtxHkcZ2EekpPh7FF7K8Az4sKNPuNNypUHdgnDqLUKi",
  "key19": "4i5gVLvG4Qmym7QgZAsq9aGLPBVYciD52ZRHiwMqubeuYabnHZCn1RGzGV6nSCEyvqc7Qdyoe44sW7JKizSVKrfj",
  "key20": "5M1kxPDxxvD81STbvjP3mpVXcZRXP3KTqjcbv65dc9KHnbwAe6wdwYUcSt4kKZQFVuYLVCRa3bQadjAFCSfWfqNJ",
  "key21": "Vk6b6RV8XfcBUmyWvTcSyMSyDZ42opQ54ASsL7AXjYTnqmBJCBw8PLvsqL6f3GQ9Yc2RrB7sSiFNCvYoyXoEZcC",
  "key22": "5Ba1JaiZPdGzUv6ADFkCKwbGUd8UBhnBNw137D3h43c7PxL7iscuTEyUfe8DtuDNE2KbZbeB6rFgmFQi3F9ujnra",
  "key23": "2Yf6W38SbiSfGU5ppeeqxMQAYvtWUq3TvNFavekgrue2DU82fXvEYV9eDCdgJsq4qtbVSB4iSHWTBrqufmxAVe88",
  "key24": "5SJeY58mPiobU7Gx29UyyDMXzpfV8amFptFNuv1xeLBWdBR9KYLLDJkvjPvrHLA8YnnVMqpXrGoqEs98h1zg6beB",
  "key25": "3Ts6h7gcEyhQLhqDXkmXdkZiysF49FvqFjQA5obrQaqTPxMV9ZEm3PwzPSkykeqge2ZgWQHi5P86dDZrSHH3aks7",
  "key26": "4SbfpWJ7KXGs5vvz88o3zSv1rENBR8v8ZKtNgw8XKgEAEDiA7zH2fZwjGGnMnjgDdd4vuLUKGM3YiHCudzbswHD4",
  "key27": "bPLXmQEA3kytdWkRjJexWpgDYqaQfnqGBjC5kHighMhVE3EdpAnWUPYoGVcCPsG41dj2aSH3qfARF3mfaCeD2xJ",
  "key28": "YBFb8nqhrE14ivLd35cFLntMtTAuw2XRB5RCKy8fnx1bK7YdwohXmfuGXBYNLvoSHJiAbBPDaSFTdeNbLX1NL8P",
  "key29": "541Rj6yoxhdaHrAc4v5n5VH9PUXty3CDiDa54zXWw3QyV2MzdPWkAjA2iR1SQUYSFPZVKjghE2iCSkiYEgnfFv6v",
  "key30": "5hxikix2FqFsTAYJzzY7fBf8r7SdWDwXZMnepSu3BmYAM5Aw9AEDLBs8Vj4AtseYJLfvE75PD24roxRBCriR7rTB",
  "key31": "4yGywFQEzscFPtZwmNpT7mFCfy6b5y5yffEtem3KmybcMBJoza93qAGFbYkRwvwTGcaPSDrYiUoPqSZRqrQ6vd7V",
  "key32": "2cc1QxUzvUp28p59qs9tMF5Sznky6fK2Ui5r4SDLxmHavAquvZd1XnqsxamRHR6dBaDsAGGZ5Mnt2Fm9vMTVHeNv",
  "key33": "5GARNGsqWTcrLk7kh7RwvHAiczryzCvEr5ecjQd3VCkZKCYEoTcdT8XrGwvHZjga1vcH5WETi93ycDnLQwytZaaQ",
  "key34": "Goytxwt813tfEJ4d3nqUBQTgFFEMP5o619FMCs7KwdUvG1NZA2AFagLNpipaZy1a3VJJcxFDyfQ9uzy2ddt9WZx",
  "key35": "3YenztjPKqbucNTKWUAK256g5Q8UpxPPLsodMiiK93twxttRCXwPN4LwzVwBsCKAV7XgRS9JENB2cDMYfmXFkzts",
  "key36": "KS9kYZtj6FPbvFF8ULaciwQ81Hvm3xdkvGXGZuHhavQ5xjXx16oWgNhKxvVvH1tY5VSstbwTY739QZRVLqNrfWt",
  "key37": "2ypZDZ3e2niCbQjxRJ22s4WCjwBwjKyjPdtLpfW7rTHbJ6tSHCekHY8F5s9Ktr7kerKhry3qbwFsyC4QVLQfEK54"
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
