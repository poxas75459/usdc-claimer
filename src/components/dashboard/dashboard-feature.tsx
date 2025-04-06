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
    "3nAaRu47wJFKj919e2S8GZwrHC5HzNhgX8HJye1vxPDHC68ShWL9Ae1Lf45uqcw25CCcdanXqUDG55sGccCFc1xV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fzEGK9QBTGeMGRXySdeX86gHhWpgS1tZyP1jDwj8vYhXAekmJeYWx3FKSX8FhbenbTKDuB58dJDpUxYNGLEVwXT",
  "key1": "631ta88NuyDGReq4YmA1Uz3PELuMT2JZyj8nQrr3wSvpTjSgBUogNjn8Pk4F3Rxie2B3Vh8d4gvkoB5CMNtEveRp",
  "key2": "nnkUNv4wnvbAtsK7H1XztWRu5BUwzyFFsYuFLYkz4kqg3ub42LJUWMdBMipGuysCeYhPKAfZHzEAApbu94kRamF",
  "key3": "4t6iAHEAfx8Socdjfg8eiue7wbqms93Xp8KiEWyyRkzsevYpYFN379jbkk3aLEMynzQT6c9CQzr2DRBKLkgigoqH",
  "key4": "4Pj7QNPAzF2vCHRMPe1HDorUkjx4jn4wGToDuteHkQBYdd8S6BU7SVxkjEEYCxXKLfmeFMAAV8vY6kw1ToMieyn2",
  "key5": "2XSKWnFuCCJNMYCYSt1kekF5c3fUbUg3GA438FmbUqs5qv4S5rhF4jgm9Hu8SVyGrvo6MabKHyddaXNXb6JwAes5",
  "key6": "5aBEcQhXTDwj3xAGGQLvdqTJ11xrtmuqG74VXbFUbxvc2PsQaFE3QQB7FxdJfTpcW46Pigu6NTzxHgquZ3wSBrUx",
  "key7": "4aARDt7kVbMoxF1JRhHcfm2hUJQQK3BeW2HoHWmNMk4T25XUpHxEVVoiXDTwsjqm6dMENm2fcfH3Wfay7U68RPyn",
  "key8": "3DYdwnJKKtm8LuetPCi88k29ZrpzSsnYVWQD5ZqjE7yewBFavGjZRzxLe9X25bNBYNx4qotqqpTnauuzKYLb13GS",
  "key9": "4L2M2t6GDWxVe3iqBBAzrsk5Ho9eDp1DvJCBvhd8tV7LM8LsvBkeREX5U2SLM44xGmNboPUfEEsKRN1jAYD4BBof",
  "key10": "5pUDQzeauUYSe4QbixN4QkvyDxAcMQGt1JnXwa5raxCsFX1rVSZdb5eBrUaJPL12N9KmUa8Q6fX4LSH1FK47PsTD",
  "key11": "2BmH8udoXuZnBKzbXcsRNtGLQXtLcrnzR3t8A72iZhH82qrnfCf9L6NdB3SMShtHiRDqqCAdorGqmujWdFGCEYpk",
  "key12": "3nPu2PFKH2iVkZiAmqa2pFzsoKA7omyuM6NWo3r1jDsncKD9KgAe3tuixfpgEhjuD17MFbDVL3MqngE7PrDZh67K",
  "key13": "5yJ1MpsjPNuyJUwDr3xmawAefSNBauPfdB5xR1uVY9x4GTUvJFKexwcTzgrfKBwsMfT7rBY9a2ZhggUh5GZpmJWU",
  "key14": "445JKMQSKRoqcnNTUunbZiMxkRPKF2jT6CSiK9m1vyrDvHtcMs1vVzMGVRCYHfbxWrYbybjFLK7Qk2TL17mGfFDi",
  "key15": "4vg6zAgsUQgEzUVvB6Z5hp1uZXY92wADLapCZZTFyr4K3f9kKeL14JvkegcchRpr56jq5BY21nB9qWDneRCjKFbm",
  "key16": "2ZmeoRxznemE3z4LkyDuYtVxeKYmmuCgV1XpH4Vm9Dw1fyMkEGEGRrX2goNu8X4hnih6h1S26GLwmZpWYjdfxQX1",
  "key17": "1ARsGMmvqSaMa5SoLWS3vVv6XwG1fsZCaCA4bFjWP4h3sL71PePycfdS7GM1HbuVuMNkG9pFFC1n2j1Jzmb93gD",
  "key18": "5MScFNJDvCFtJw1kP3fxDc6QdBgZsKsQuHc55S8rkukGwMKKx3nB5VRGzhVrg2qRot1Cfz7B8aV3ovPmagm78YzM",
  "key19": "Gc1s3gJmCmDh6j6ZFkVBwaY9yvHpqKVWcGU5RqjzkZceib1wzYu3Cfe5hFczhzqL8s52V2EV4pDYQdLp6WWL3Yp",
  "key20": "Fq7B68s8ErwM8K9JhBFkNQhebeJ1dF4z1NY5z8UKJfQM6jtTBgZVVDQB8AntDrXjMHCSygWrwEBvLowYGmskFWb",
  "key21": "38JkZC7qLusNehaBfpLh7ZwNp1AHW4MRmjAth4f6SF1xseV4JRUfYBsFrpai5Ss6bFYGuv3MptHKMwyVtE1fe4xz",
  "key22": "5SCGdr4evJg8U2SB9KeK26SM7e7xQpnQccGabSRxquKQrecJKDm394svXt7sd66SrJwWBTHundwNc7oMEjE7TKYJ",
  "key23": "36xmSAW2B3pSsbHNBGs7EpKDaiPhMCmhTuArCZy8kt2fqr2bveTBRkt9y1fRjFRz3Jv9t4rnFj2Y4B6VFxwpNebB",
  "key24": "44BvmGyybL3Hky23kAEY7yPnrUqmXejH7e7Fghm5eixpFfTKsUZuVZ799gWK2AmZv7ymtTAx21pB1MU1N2HC65a8",
  "key25": "66XF97wNgnRz5Zk9hV54im1Wfik54ipbVf8529GY1KDhzBYY9HZqvu8ZaCr7LBRUETv7GhAMhqFTvwV9exU2bcwA",
  "key26": "2r1Xk4UpN3eKoA5uyCV5yUTcbpF56UgFDCxQNJfP6uGWVxonu8zqP5RxS6DbhKidGsQ8pjQh4t7UtyCTEyBeBFUF",
  "key27": "4mFhu5JKJA7HQcQnXQm1c9ht8e1pSdekqQzmXQci4tiuA9PmE83qWjVAeHasoi81gMLuGxfVqDddW7M4aa3r6qaZ",
  "key28": "apReVunMa79fe9ZqtJJcVsF36ZuNdBj5o88n7J8vmiGQWoc79iYhP3TSDXFMDY4WNCfxz5JY1qKER1fKU1Scxr6"
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
