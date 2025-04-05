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
    "4jeg13thsMdbu8ACxmx5pT3tecbSvncGMmst7B6CMUFrETjpeWp3aXYdC1DYKhhVvT58CuxTiXr2DnPZvhohPuUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GPbc6tCpYPGFn2jkBmvo4TFBwrS1oHw94yRmhNEtUgBoQKiq6QvNdzcv8PnLxatYixaLRREq1MyfHBbYqirgbCx",
  "key1": "oUiUhiZRCJixGAafj5QSpzMEB99yetqM7jve5qo2nxb7DiYwZvdovsyRyJXb1E1Ki7UYeun79wbGoZPcHKwHDC2",
  "key2": "g9pzicDTygqSAndntvPtM9xfiLaULgco4qvNya4thC6H6uc5wHBvdbpnQMNMfz5HigfJAzTkmTwUVbkkGnRdhcL",
  "key3": "5UhpFFw6QmeModR1jH28FECPfgFB9nqECz7Yf8KskviLxB1rf8oGuGiXKR9KrYFJWHqX42kyh1cQhSYyLpCFDyeq",
  "key4": "3LMr4sFoLUG6dAGtkmZkfMUqx5pNee9ewAXEFzK3gyS3evYviQz1wvLafSySXSd6x2uzRYTs62jesJfCTX4m2dvu",
  "key5": "4tHuRDVjm6KG2Xe7xBtRxRsgQBc9XYgKDKCZmoYEmBm3GPnfSX2fd9kHujDB6cZ6Mfza72jHjRzksHcEpg8EEoPy",
  "key6": "3KTcYx9WYSBwRJtrG3RrodiVTbfLGoWvYQjZoqor88hBBWheSJw6VPqW5jamGaMy42P4iGmFycPAVXTxoarJoHnV",
  "key7": "3bVxnns2Y3qXJoA8crtX12vMP6wbGX7qygk8XxgT3pbNx6vXJpoYESUFzwPrfJawwMdhKoRZAnb3FZMJtwFqsv16",
  "key8": "4M1bSNDhV33FXhn4Zw7hUTEybXacrKamfB5xfugA4AYYG2r6M8ZfD3q2hQPRxfADQ34wbdEqpT6FFGb8DEVtkHRY",
  "key9": "5mae7kfkghUhJqqQUygeuo7pFgXszVhmfL5J5Mt8A6aEuXHLm2P8eWHuDQY3UMwusT41ABetn8HQExkTohPxCGBa",
  "key10": "hu6hqZrxLY7tSTMn2mRjhkjxTJCkyc49XGythfrB5tuGvfSuQqM1wuuaBSPQx76VaFT8hCtCJMzxMc3ebXmc75i",
  "key11": "4B23TX88Pjq6YD1Jw9EcKo5VPzEEj1z22jnbStFvZ1PioDcrRtN9mJuhEpfXuyTjRLWMTuLjccfM3D8jneyr2pp5",
  "key12": "3J1MjHtTckDxds5WLZJSykuPAsC92yZ3KS8SaYw6rzDms1drB6iJPQCaArC5dQEUTyVjWURLFXgAo8RbZMhJonfV",
  "key13": "U7YfJmhjhrESoZJoHTZz3WqUPoaSXeBJMi5JajJosvf1T9Fdjr1Pe5H9o78JrCAa5q3ytm93rgAoDThZTow1BDg",
  "key14": "jP8e2e5gzq6BWp54aXnsc9UwY5HBS5xjx2ijpfSftDXEzhY72cvJnCuwjJT1GHJ451rGpwitcq5q7BcRkiYZQyU",
  "key15": "5XiE9ZNLiTeNePUqeYcbm2Ux9Qvn4wCLWoHtQ9qoZKW3d5j21sxnRe2t8o5Xc6vdsxBp7qxxZG2cDj7mZHttq4N3",
  "key16": "58mmJtSm6GXd7EGoUW3o5FhcmBPJMMWjPnu5jQiK1d9A5abo2UbXsDhrMtNdSP2ZKKNTCpFMFoeuEviQ8u5H6X9v",
  "key17": "3DfmbZrR26vTfujcte7dpaUoJnNdbgfLhLZghuo7KZVEg7n5LvrW4249MxukxtDEjJBrbDLUrG24FqQEYHBnqCrg",
  "key18": "3XqRgg4QUEgtap3y6SjQJStuSJTq39XfoGnTxCCEAuBQ9vJP59fUCgAkcMB7LzZG8JaQzP4mPkzZgtL2W8wGap8q",
  "key19": "44nznGXiy7Qk1RyV2KboDTwmzem3SSqtYCAJi8uPRwTsENK1K1puAsJrg2fQzVe3onCWr5HHaA8S6E4YiVFG9Nku",
  "key20": "2Pvixwzh14wwoZHtRCaeb8h7XhKQW23vCjgMmz7TUK4VZwG2UuwaED5MUGwE3QSguVfp3VXxxk8MjCZEJQH1snS9",
  "key21": "5mesdn2ZB3KosUDfnDv2T5hreoEdfFZHpecH7ZuBJL9wxMngaAtFYnEbG8QhQP9huMW3isFQEMRQd9VhU2sguELW",
  "key22": "5KNi56v7CbyTj6ifje5L3XtYZEBeUoV2xY8mubGxcSUR784J61NRBF1Pdexpi4s38ATMSs3MXiNWyeVPY2jBV2jT",
  "key23": "3gp4Nupc1mWT6DnFLaRWCxhctY7jXVduH9fqmVZmS5WS5fDqRL5YQpzX3MqStvGPSSShtVTBtKBeK9iXTYGTcY1G",
  "key24": "2TkfKmAMQaDFye2XKnasvV3QMN5mP9wVpFk6JhN4gJxHAHkvWYDmostSjqvMfi3ekVozpvEc8A9TYHZqRHUWqECr",
  "key25": "4ArmDiiWdK76dj4JJ4NjdUZ5xbf9eExqtqhCP51xbAW3LTFmfDN7gCJKPevBhWEaHwYA25yfCNWrxYBVkJ7MMd6t",
  "key26": "LHsAHUzyaLUTE23V1rJMyZS5Q6PASuMs2mk1zeofAE4Ut2DMmaFemrMMpJagnd31REy9a5oyC7gZNMXuGx1NruH",
  "key27": "mfPcLzh9MqwQrwNScsEHVdZ1fK9AUikG59wog6ZR4UZvsjdCYMZP1dZeYAM9gr4xTCTFGwUvN7nNXuyYPwm4Au6",
  "key28": "5hNz83ugpCqZ3Fj33Pq5NBZTwRb4MeeASqEn8MGMimA7z9byXPxH2GktmzjBFVcNXsh21KWiCC8uXpZ1ngbNQoq6",
  "key29": "3NryxHVr2unUks47wMQLe6SB86wc7Hz3c3FZ5fCB4wptdLRxWWWsR5u8UFkpFgs9ZaScYW9yftSemwToukzJ9Dr5",
  "key30": "TvoxjNoznTuEUAKDk3ubQJopQ87jwtRFCebc4MTrTGhwFxcVJtpa2vxYxf2Y8x7RkY5pyjcG35srVv53mGAARvA",
  "key31": "ofvUAMaZbmE8YMwZXDxS8dpcB3jiijhUfDbNQybGLipGc2mkaRp7uK1YEP7FuPDrcGHHrFBXoduAUGvh8cbAeJd"
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
