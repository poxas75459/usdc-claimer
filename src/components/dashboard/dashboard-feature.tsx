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
    "2YpgjdANRaHqhJRJ6EWhRG6oyzVHSPN45kS16GMvibkRabWdxrjnoY1bZNx4BHGfto6pNu7eLwEof4tzaM7wgdrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lps7cJFXQvSBctMuVtaTLhZ2HXMnBWzaXJVx3wmTUsEd2USoFnnMAPGq5HSbKHDUsoWQMQERdunaxmetpmSiBfJ",
  "key1": "2X5MXGTxAKwMViFNHZ5utRxREAmWjRDx6j44pH7MmxeAWGUXqbkzogpbNXT4zq6V5mhoDVGyJ9caWkLNkNGsp3Kk",
  "key2": "3ju8TyGzNNSYXQr6yVkBseVFwtKvi8K17VsGDvNpkbYWkxvzKz5YyiUfDe1mJYPvf9McqKq2Kn3XXb3bENSrKKiB",
  "key3": "2UUeVkCFpeSKGfRuwBexgNLJVchCNkkBR6wPJAEf2BdXDYoHYys8NUp38L7ed42nds2N7DivEXVNAhyDTNqbQvwc",
  "key4": "3z9ShkiFzrfFsVNctUyJyU884zrXTTMvQXaAZ9iYMxRcM9M4mXdh1cekzFR3YdSraVF8sg8vgWUiegenjapss89d",
  "key5": "dW4ZH4NPs8NhvBDm54jFWZYBiW8H4SxLP2R5oKCyYKmqRWA2ZSWcUKYHwoCnNcrS2NxrhvMvnc8DfeXeB9huB6U",
  "key6": "i5hvUCUSJA5D5jt8Zzzr1A6wWgDBRB4bzVY5PkLVeHj7bCMDfKPPFWCw3pJuwuhJVBb1NWgpYS6vcsNqPrFz3ZS",
  "key7": "288oBv7h2scieNT9EYdmEMAVTm1SoXNwW9okqfoMmPrd1snrup3H5EuMFHEwXS2RoKQTursQ53Y9yTXdJ3bkA7pp",
  "key8": "3ZM9ahD5Wha3QS32mJLT3hKcXeSUms1CDZP6izzb8aUT2HkCC8tAEBB93EWq6QoNwH6ByfZm2MxbQVbiuhc8h6d8",
  "key9": "4EQXA3h48FTkXjZ2CFLfPURrFawwmzNPPU7Jkwb9g4gLeMHwnpw7jtpNwNTHx72gbuDKefqshSagLCmecmW9oso4",
  "key10": "ewFEC9ezUinJKZr4wVYRp3QixXbzBwNRSX33ZAa2bTqf4m9DETbMNordwWy5GYVqts9wcJrAi6dQURRBLhq4Ptd",
  "key11": "3vRpFsmsZtrwsbN4mix1NcGqYCnFdPcQT5JJSQgFDShncU8J33VgXU9juxTZqdn3XiS1nccZdXhJHyS9mWC9VFFh",
  "key12": "4tTnDg8mtQ1KGdDGmAW7NCEBZck4ngH2KaTV6cSD1yEbCuxJDouGkA4K6sDJE66GxJXJhHSy26HY9DgyywX1tQN4",
  "key13": "2vac2CAHgb6yjix9pvbW3uPhwMvbRihW3Xb35CGGZvUAuJQS7MvEZjJhUtDW29T4iHxnXJc47mzk91vRKy6Rx6PW",
  "key14": "4bbLSuSdyiE7Jwo8yLsxG7ZfA6wboNzTNQuqp4nCq6npj6Rp3PpsU7T5hG9Gj9xc5wsJc68Es44zo5ZMZ6Rtq3sq",
  "key15": "KhESCbyRbgEBZ117Q13gTyRxu4SsgzRphnH2jkBLg2Vwx3Ntip1NQbZ3MnKaV83qBcxs7bA6EqhxN1RJMWuEA6t",
  "key16": "5qapQMetYBk2LWKNLKrcw3q5jeBzXvrpJpvDBJWAPDqReUEivvvsm8KYC9Bf7C8iDThJFnYfKP49gsaBZrg24Th9",
  "key17": "E9GeTfWpiAcJdi61fVMnQGpWPAuF3sCGnctVmBVBSeRJv5gro4Qm88noFftJaGjVY9oGJT1Mx8nCU6m5EL2gsSQ",
  "key18": "4MqdFgZG8apmy9h7ALAhDpjgSCGADUxt6LUyZ5jEe7eQFk5F7vYrTcdMSkm5BEiZHB9e7yimZpijLmBZkbvQ5Wks",
  "key19": "49wRVsBQDATn6pbwm92NLgjVB7VS1NnWRJUgDQa7fz2yi93UFr9YE9U2bYJKxzMhMSWAWHzpeKp9vue2n8W4gTTQ",
  "key20": "3UBCcXzMsy17uhFAeW4Byytw7ehz8ZeDbLLRLDXjY58mMoCzu2iRwhE1kekxZ41eti8o4AZFwYPqQqHeMahuKzcE",
  "key21": "3196L5rL5muKzuwsMGUTfLPZCRomw1LTZE9zRY1Ws59q5ojkdRAm7FVC77soXr34UYqvxM1SN1XNJAWzNvh9wKi1",
  "key22": "XuzHd8L9XVxYRdMQBBVRsXsSZmL2gtLMejqdyfS4dVVaQJ5YvkxjNvus8moHCozfDz7XVJtzg2xw99WEca8rUDB",
  "key23": "5sW3xvn9C54egoTYWDMzifNQHrbsB3kUKPz2mASij3c7cBr6Vib4LeknrS2TWv3WfbDLvbxQUbaJSJCKH5GtFQZE",
  "key24": "2FsgYzvNDGHLmBRYVThUR4PiK4uhFcdzuX6ijzwYwcheaV58bmNYDUpsannWHxg4anFFET4AmDRYjofVuffzvp6v",
  "key25": "is6FHdCssvmz6HJSZgJLNVyYgqABrrUcHkihBUe7GbGsGkx5GQpjm7ZN1epT6AY9uFkTQwzFUEzTwzR26jPgNfg",
  "key26": "5AT8fevXKD54mizerGTNS2xD87BkEbJu5LraDM1WkE6JQ8snmaigHoSBgD7ik3QTRBMqrPe2r88Yxp9CSvFuCN9F",
  "key27": "2DxLd4A3jXHpGMcg7qkJA8UPpFPGSE72R6KwWVCk3DSJdZiDnNWddrbZKyVdE61dbPNdjhS4iFVbWnF9xNsRVpDG",
  "key28": "zfXJKBaVKwTS82oQxo2o8Q4NUNVwTsZ9o3yEwbrwVaqb2wqibp7CoVJAefcrmKYcQ1VRgNop7v1SMtJ5r3ko25R",
  "key29": "3mdkK1E8YC21c8SVdV8quSq7ByBzwdtVWXPXnaR7j6N8s6BgWj7i2RwUSGH8C11gRkLCgKFtHBnccn7e73aQfzNL",
  "key30": "4aTkFMQMq6z1eFk6wgjAS3GfnDEbatkpUMGCMbVDSbQgD7MXfYjs1XmvDKBv5nCqm4bFfU2rukx9Z4HjAnqtgszy",
  "key31": "3ALkwVEyoho9KeGpGkSLjjnAcyw6QgcjwZ6xUGvUE35cMTzXHpjN8dZhk9fdTF8ihjGBCK7im3KwYhtp1wuJ7phq",
  "key32": "2sBSdF9zwTMtYeH4SumVoQoYBU3UsPGF5f9MrDz137i6E99vJeQ89JhNreBtjhmXtws1PpPuCoE3z5xeCj6eStpA",
  "key33": "9Rk5riqKu4nyehG9q3RBdxxfTiXjrCj4wSpYMRExvHz8HTKA7fjKDf1YNmu9P3iQga2tkttJkBdUXYuutjwh18R",
  "key34": "384y4JRRU3eVqDdzM32o17fMvnzmZbQN58skeAnDruYmJLLmMByHYV7Sb4rdme3KVfWHwsdcWTUCnAi5oHh87yoW",
  "key35": "397YuBSmyKJMYUqow3dVWEv66z9Lh5a9DPVmh7U3uqUNgrY57rCvwwPnmEvCqqrXUbhFjEk7vxmrT5ssWNySZMkx",
  "key36": "xnKW1HfTHPsS81y9GUdPrn8ZPAhQyRsD2vieLvqN8EoyP7dfEZfwmWLkDnZyR7VjrMhrFB4gvdHdsnxJTuHM3fb",
  "key37": "swscs5wuDW36cVkinKhosEf9R8hV4rvoAyqsDKoLYS7zXKDbyuLBQqHSmranQRVsy8VfCft42bVWbQcAYQM5bSg",
  "key38": "BfyNkFxRKvNg5xgaQRQ4tp4qp87sjMg2QwFPMCGXUMYT7CKk5ZkqGjNstaDD7eXjtK5jqPo33QmyWkBahxurNw8",
  "key39": "2nafDcSDdkRE7dEZs8s4uzHDZtQs3BVryvWLq5RWMSaTZdEmC2QUuHtBRJhzyQ8fau5J5GCPY1cdyzunEwpiB7oy",
  "key40": "31BHwCNQWHyePLfeyGbahHYWVrxqGFUjbGfwp5fKr4wqfRyRZascdHsfVf3QDeiPrKf4tAwD2jjsN3RGd7vc9qQP",
  "key41": "3RL3oBEYY5WvQAKGjgmocipbPw5X54LPHJba8aV3ct1H9RbrV4872wGqsBTfZaB21Hu9CAwL5Y5u6LmZVcM8bgzP",
  "key42": "5Z9vSZVGP8iFhDSsEbWZs9UXYvp74AKQK6GPg2gRMBzS6V1J4KWaZaXt4jzbPL61d1ntcCNjPkqUHRtX3CG5FrBg",
  "key43": "31w8p91YP4GQTuzSKysMPb6fKiys9PfeuPMShwgJGC6Tb7GLiqTVL9QoqRFYoFJ87QYP1zMVb47R98P9t7pRhgyd",
  "key44": "uz3uHCAjnPXskQGG85pco3bnexuA1BzctGu9kraTxExBGWgFSVRpeg5zmpqAS3m8b6zTdFHGcUqJouYw6zRtJTQ",
  "key45": "4wjBsbBGqwD7FeFwBkCJ9kuGREHyVECWZisHUVuhhQPrpcdVRUNeytH58kJ98LRraULCsL9ZYVzyFF3AbeL3ry2x",
  "key46": "5t3gLY3sAhUjS2o8qTkNrv9vUN7Qd4bYZe6LoYb9Zh6zo8RAj7Ci7vurEHEm83r82U1j6m1oh2G4ZeRPyssftv5k",
  "key47": "QQAF7JHhgaVqhqc5TyFZSBFuzwP1c2uzYoUuJLzVCxuKgDZbfowHeQyAok3JXtRVdzWtG7hmVKgmUZdw9DFx4kJ"
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
