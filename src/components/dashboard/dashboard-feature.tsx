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
    "2rJkg6PB4d4PcpYCtMzFeP8Sy3yQVaAfFuiinvouzJaMpCVkGFqxWAT6njMXBN7kcpwkUixCLws7SebCanMLFbCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zhLEiKcJoVdovCHzsbtHgKCaB6jHnDRbY4x7ARJzqzqHTMZfMAxQm1ADiBEn1GgRrKtEYBjWtskNkRHJmP4dA8V",
  "key1": "2K3zxzouU5PJf78RcG8mxEZDKB9DJzLh46K8aD6yALWSfeCEw6VgDKvQTKqzt9Qx3QkWJhfyjV3TW8FHtsSo9LgY",
  "key2": "44Tqokc6j6vFo9UbMAVDxJ1XxkSGuuYDKuDGchuXuhvrNMMqwd9n3wx6gYkKQtxZw1DFdnHVb6bcBvHrKEHk5YVL",
  "key3": "4BX9Q5VNmxFdotKAQkJaHHAP63iaSJgf62MV7ySZ1yiWZoDjZhwMKYi1VZNy7fvLi9AXMc1f5D1asZdCGSESik7F",
  "key4": "5hjpzicgazcHpu4pHxR4QX65v6xJXWmqX9vaa6nxFQ1JBNGbAKrdihZyzVUTN31uS3AhkjE5961A2RCB9abiJhqe",
  "key5": "5P4bzGqaHqgLxRSBQNxVbaH62oaZKk8rLYHNLNqTMJB2fSoFMYNcELBctGf1KLkcdNtBDV6qbZo8DC7YiT2YM7w6",
  "key6": "5G17txAnyzYAwbYD8w6dZ7mtNnsCRbVQcsjC84EoNytCyNBJKNg6TegeBVFFVdudFoRfmi2X7KiMQUTaEur7C215",
  "key7": "Bu5wrGs5UCNLRDRYovRvq8x8uQ3FxMzLJM1Zgi8MHMEFwe4dE6W7zzzNXfqskQ4nPcfpsRCeYNbZaLrqWfaF7XE",
  "key8": "3WBtQ6ddES8aDXZJbEkZDBwKhGGKZmK4MxB6tdF4hudhSo3pH29bvDnLeriu2W8ND6Fw7uNnPkZmhxNApuCf59Ly",
  "key9": "2pPEsxmMfqn5HSW3tZ5CeYhPYJRoczvQscftQK9HWhy8kcKy6ri8Zariirp4s4zGACYem8EmdDoYP8Y66tqLGxUS",
  "key10": "2jZQg2K7ycHmH7KdhtARvg8s13kCwaz7Yc4VTdTJur4T8CtebwXbyqe43rsZJ1T1xkPbekud395Vri9jGmw2dZWa",
  "key11": "3gfTMb8rR7mZg9tfmHhgShHZ8VzkyikrSTg4aoqhz4D9dEYUymCx4MfhsfbVgxjBUYZpTz7pyALpJkCJPgSPfp5r",
  "key12": "6RLvBeLxSETDSp1C5xjozu9WcqhKwGqLunm7LvavcJTFYWCJ17k4ekyUVdsg84jG5hzPUewYUUbFtZoF51dxdkM",
  "key13": "4KP4fjpYsvVkmbUMLGko9dWg7pV2iyR4RxJt6gtp4TkvVL5FcU6oGiEDai8rY6gCH2fQoMjyhk57ZM5s6ngCQjFG",
  "key14": "62aDeF2CN9YVS1yynNvxSuAqgr3FAuaC5nrDdfvh81sZSB2idLibPjht3MaALdkmrbXTtc1Jh4FPNSSBGxVEcmXp",
  "key15": "xe3KAiaqBnTkn2Mw3ddHyVn54d9xw6F7vg6dHMor66bd4cxPjEytoVR8AxZFX9XJ4tX5MggDsbX4rS4HaQmuWRp",
  "key16": "2AQD2xsCv6saNTEfEKuoGe5Phngq7tZcZqfQVvCt5kPu6tj71ZnxdfY7JPo6kAUgzhz2W2C37AaeWn4QZPWDmTvU",
  "key17": "5eDa5jo1pbzv9KkMLCTiewyXy6SNKtk4VJe6rEtuoAatV5DMeQNyhvZ1BsQ3NhBBBb3KiTKGiog7tY3zs3uj3V7H",
  "key18": "5o7VAwQ4wizXAH2nD65ezwqfzV8ACqDv6Jft5keGwjbuizG9e2NPHwWEB4f4Rqupt8vJVDJx8uFZxswGhD9Zdexh",
  "key19": "2hg6KmALWtriVKT8iJiNzQWeCC4kefFgBQN1VpYM2NcH69gLW5xGCHhaSQgGLStY4uNUp8xKh2LCPZibRLUZYDaw",
  "key20": "5y4mbfsrMyZdg2MK7f9FWhQnWfZTpPnMDHTGm5QtEd3Hx4zw9szb1E76LKmKxX9DbK5rXGRMmSJ1kVjbuLSW59VV",
  "key21": "567QejAhJFKoqTzLYKCFPmJKkPmUQ1E7DD2gtBGoyDz3pBBDJkyGTsJ5yj1MkbPM8euyvgFzVtcN24mLBCmWgcbQ",
  "key22": "3J5jjsDFx3zdpATEu88hTvhzaWzf7ndXd7PDNycmKFLbmDJKxNtgTUS3LSX7s4RvEtRJwm6XPnp1ezrowYKhgMfB",
  "key23": "3LHttvyBjBXD85fSFHWpxQBhXQmfUy8DmYgEiJfpas6eaeqqwmcH4iNihutt6GQKNw1hxMyFqRvKsdpx2yurqTiW",
  "key24": "5KaskXPbwbGAALqKgM1uVtK31fVbT2sPipxFszbfbjFSKmnoYmnVUPtvu7o7DUGu9GJRa8FF148mAGubk8eW8Mzc",
  "key25": "4Kc9QJTbavbb5vcpPotrEBhvx7tzBr3RD1a2AB8ucE4mCj7tuZ7LfMkWD5zy3cTKDTs8Bckfoz3ZD5HU8uLviusp",
  "key26": "4K3stE4Kgv5JmXpci1RpeQXfBGR1pRrumcSWLT3q5zX7TbxQxZqcXbEYpsQHJoeyjcQupvgawgvsL1EZaruo5x6z",
  "key27": "TzhAwY16vXgm4x3JKAnakQv5U8zPHMaoHyw8VUbmW1Uvx7XHvDAAnauWYMgmYYPysw5DiiMbsWVuWK53psmSgFf",
  "key28": "5SMnkSQ8hA97ASiFfammk4qtaXXgnRzojsPDQFGJ9mTm8PpkZM5viCqCgu26UbFyRtJJMrLHQWb5vpVCNfMMHM7i",
  "key29": "4kfXcoF9K9Cw1MfbiADAsEQjNHt6gBQHdXoKzsUS6Dgnsg1nsUMTzeDLzBKABFU8iAHCKiM9NyQWAkrwonH1bke4",
  "key30": "3Yt9352iQeR3s7FeYhG4qNgfpEBS6xZj2gBo8hSgERzwnPsPsxPJgZxKV1wr96WEsLJj7QfSjztPKcMgwpb9xkpi",
  "key31": "5A6fzTCzU2Z8hrxzc9zDboFs77DoxzTEcqKPJctV2X673t9anXdpgcJ5JmWFW4kMNcDqRZkiK36EfEsUEX57RASJ",
  "key32": "3obaSYTqGVxRSg7X3RxH8unYF2R3q5gdHXGLEWJ8wA5TPdqg5bzLC6eTfzkp36fKBrNKjRpox6oeWS68YtKe6saY",
  "key33": "2XtcYHsmDp22drB5oihAwsyr7ZgcfNVCCTdUhWF7TudyDKGik5TPkgQDZHJnKw7mzSwKTBiS17k5pNZ7w34jcx86",
  "key34": "2YnKB4sRR6iwvqymv8JEGgmi3ZubQEWGBDZfBuabNcZvzMBXk7cerjqoiQFu25Pe8neDyts3RzMxeSPBTbXf8SFD",
  "key35": "5mVPBSFLkSfQAS7AMCvdzRFucm3S4Q6DctQr5Vbovf2tUK1V6G6G4pJgyrGwHs9WGitSgKJ4ttC8ghrs1jgxsW6d",
  "key36": "kkmo2XX8aKAAcF86GZVJG8v8iasMUzeJpD29MbGMTthL51ec3yWCRMnEa1gD64Nuc3FLTpRymDdrVVpVZCdaGP4",
  "key37": "5vdSGyAKrYXDcmV5wS6jtrTJfZo7vC57gHP8SWShJffVmqX3tS9Mn1NUSoenL9bbDefjGqYPHeDsyvAdZqWeTrVM",
  "key38": "26F1BjZoR1AtGm1AW6H6VTQqGdvzgDMtbc5cZbQsrHKo58gqmg1SR5bFtHAB8Gaxq6qu3du4dffijttrDr292JoU",
  "key39": "4U5zCQMh9dUKEd3MTjqDNyEdL7KNo72WNywXunWjuLTchEfuhUFQvuGFAQSizf4he4xShNagAyVS4Yh3NnTiyQzu",
  "key40": "48gCyFuii4U1woALjcW7MoZwv6Npv5P3hmJFDv4FjANQeZrwze5L4iCP9mPJnfaSqUaLU1QrrovnbNQmnvdNajGt",
  "key41": "V7Srn63tYSAnD1SdqKFK1L3zDUn1QY2KqMZTmXHKpm8FzDmY8r99sEyXHR1WFwsGa2xx24fSyUQzP3R25Y7AAgs",
  "key42": "3zBJfo9VcfT36rLAury5Uhf5crCHkMfMjwdRjnS3kkpHKcvZMgXjKV1KDbPsXMpmLDsH6iU1ZQ77uQZwqFzJ8dRv",
  "key43": "5qU3kuXLJ4Cr5BqsqRKwdqyjds6H9aLyWdBpwpqzmkxvaRVtt9Yjt6KwR3Ymnh5b8UR1qJG8jUNWKUN1QA9VCSXD",
  "key44": "5zohsDMokY2NMPhy7JNnAfAeKaoNQnB2yhwaWdcN2sYewX9zLpijFcW2xeGJyaipokriTHfrkSLyRFR6H2UTmFJA"
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
