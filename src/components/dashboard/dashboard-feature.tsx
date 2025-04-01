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
    "XtU7GYajreHVqjt84ZDKEdf7tvfqmgfYyY8KfoHomxGdKWh1pEvSqSi1KsL9hsJYsjH8XMA2pvFemqnAE6WKGEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Weg7tNCLzozYsR6BwsjuZVMbhf8JVP9iRFtQU5Vh3nKbAk3HGcJDBbeRC3LGW6VYC7irHYcUdWvCWT5DGA8fxgQ",
  "key1": "7nX1KGKm9XEagQWFy3aR7tDmDQTpQpUZihegBhfiz7WoCz4ZgVdXp9cyFPk2Lhr7tgFqbSLieAwnrmP7wEpRzyP",
  "key2": "5Q91FXqB87WVZDd9Sv9yKBABfPpFMegSYtxfrTAR5FXgNQ7AhZod3cpX6R5WZ6frCMWNB1Smf63ZgLUd8GYqFgT3",
  "key3": "4y7ptB7XTKJ4nADL456b2F5sJ1dLnS9yYjyLsnoVVVYkXcCNTptRao2YUHngNPe6ARFCb65JJ7yGQm5Z6QZdveoY",
  "key4": "4a4AAvqMFHNzFyDZkm7rNoB15nN6EzFhiFQEDH5s969NPRuJaezmpmzMkxnkSotmrMmC7Da8HCVFCUoumFZXspC5",
  "key5": "5zN2ziN4VMWcBZEhKra9mXiAzEFPvr6HXvGV6pyPpe2iqmnVciBfBnjYraEsccNUTgAHXDvGwgRUE2yW3mokEZvQ",
  "key6": "422RAWy1mtT1dcwdXrdrs2WLhM7dVDd3pC3fHhpu756mU3EA9QDgScYSfp5FjG1nHueDogHjQ8ozDGeNBEyrvNs6",
  "key7": "568mHpcDNruXUCt7tCzGaYcRMdJM8o8zpUp6Pkrz46Ud6E6FLVVNgqxNL42JN7ayfd3bB2zh5fHFB4TPH6zwyTVS",
  "key8": "2LwdXP4DmybvzTEfXRgYUog5NN5nnvEWLrhZMWCKjb79MYGPiz4mhQt8zbPFTBvG2yc3Bfwpkc7GoGkdenhDcXDz",
  "key9": "5mz5vpSPZyCWb9T3i4xry2UiMX7jpCRNsBxhJ84WgPG7WmYAV7xG7bQNP9V9fvMUWbnKMzShtA28mzLC2GpfeZ6i",
  "key10": "4prSzPguJbTAJrWmuAVAURwsUx5mEHgLXJzCCw1rieUFDyVxcn5RRkCuawxZSihCrhoPamQY9vASQS1kP8jnEt9A",
  "key11": "ng4DJyG4dZFi5gbP1LWSqPkVKLdqdF6FyuV6jBj7p7e6NPpvtWEqYWmKhvbtsfeJj66zHDrwvPc16XSPxbkuAf9",
  "key12": "5Hq2RRFggCosoSvtWAvwhQdGo7f9PRgeksXRdemN2BHU7jxnS6UEceUy7v52q1JpiYMhofTjN5mbVrnXtxVdvpRa",
  "key13": "2sx5HtdgpbmbabQLiGffAeSrtmAY7SaMqAPyLRyWS4LX288DnWDD3VU47P8zDNP7pFyGfNST9nAR38k6tC47Q43Y",
  "key14": "5SZMintti9vB1B9AEr2fA6CwUPLJ3rnmhgpwv5ZvM7jnGtJw9ifU6A5KxRgcE2jQNogYWFKNZ1Xvoqt7SJsm8YHJ",
  "key15": "2WP5hb5a56pnc1UKuFh5pxNEevkYf9sHUPmFxfLG3K4qwosrA6A7TNHmsUbgzUYJX8byFvkaWcJvtCtZgtpggwHa",
  "key16": "5EZTc2LzCd44SYGshboKu6Xy3rTf62M8iKZExejL6WHCZJRshBnJ64czEaWywWDkVLjAYJ13wYNHL6TFcBBLVxxL",
  "key17": "3adSHqB4ENAV11HEvf2ffRmJwogV56tpuJEQUqRGhDDZRbfHPCxcCtgqSz2wwptCJJEra87P7CwEmz1BJm4w7mug",
  "key18": "4hqHLcSqeoJ5zSLGhoTN3sjSybb1Lv8D8umEB7U3ARHdKs8ry1ay2ZbUwMqgN6T7q9FSwuMUM8Tc2oTf2TA3Rd4u",
  "key19": "31c3m5vbgyTtYLsGngEdA17PhWkHUX8vrfNuDBfb6wNTcgTMK4TwyCaiVS2hASzaw6bBe2CuhwE3NDo7oDy8WuFy",
  "key20": "3BmFnTTsw7iBRSJLY6jWSMvV8mXqFhNoAnSkuWeh4aGH8EuWQjAXPDPK29EupmKboHoGkM51iGdwL34hhscydhgz",
  "key21": "2M6Ni1aevYJZNGtjSTrux9yGVjEVuNrApPA89szp8wNfuYGSnmRZAQS1U8XGwrzChzxawk6Fv2WRVACV7BkvDvoL",
  "key22": "3ncK2gBDkNuD6GxzAQ3PtT2PPekqZ8JFLRwcQB5dhBFrbAdcyKFTW54FrEK4XJHcGLjiwFr9LzAaGwnKBj6qGDG9",
  "key23": "QDZYt7hH6GQ1vA5it8zYJvTGH2X8q1wN3VNWQvf2DL2gFeDkPWUvTrg3tuRVVdgLoS7xZp2jhLsG9DuwCwQu3X9",
  "key24": "2baudCLcMaeP7WHWh23c7wvmPdit6rqchE8gFT1kXCnnJqN8wbNG8SwsmuhdrgmRSosqDwGa81syYZ9N9czSHaeT",
  "key25": "3Au6gZ9CUf2j92DJZZ4N1njGKyHbgQnSHb9ZwMLTpbmBNqV252sBQbipHamJjkq8bspM2VxcTZEsa2CrSAwRXGtb"
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
