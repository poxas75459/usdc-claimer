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
    "4MjaRhqKmVAnqfRwNf7W92dWED9jJ5RKH81GSxe5oqbfdn92Dz6nJRpMq5qeV7kz21CJ3BJ1ogEJNajQ9o54gDqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LLhDoZZwprF4Zb1ghmqynnrRJgYSWvSCnyQpmaLZDos6ve62ggh6DWNVMdHTTG1J9VTy99T8EcfQVuapbiha2hw",
  "key1": "2vQDQ8gB3xHixZ8XhNwD3b5ZEyg54jVCcWo2THDvDVwUohwHbzVtZNYXbRpWCC8yBwujQ8RSS8zvsx2Qy3rMD988",
  "key2": "57Nw7UjnAgoZUnn4bRiMGXW1PDgyhXzXVDza2mSsn9bS7czcdCqszDKKNwCGmPuzPGSB9zsDeScjK1UmkUJ82vvE",
  "key3": "4C958VezSwy7sH9TMFcJodvtWvHTSfkmgKzJ8XMSR8voiL5NWdxUpiyyzi8GdJggpywJsnPnhV46FB5YhWaZusRj",
  "key4": "5XCsYUTYeADUepxidAJGN3UZooZCg4PTjghfPcaSHnvnSez32YPuBtD5M8qjD52SXVkbEErZR1rPhy4E4zzU7WA7",
  "key5": "64JSCHrjQ6mwWY15M9mpRfjQT3TTrzERF9pfdtJYNzi9PUfBARUAq3FHerih4aQtroV8GqaQqX1VbUKKg8tRNzto",
  "key6": "4ue7KMSKHZbuKbyGqatksxrqPuJDrsby6qiR8VRrjjfreZxJdUCrTHikS936VAfiphEH6H5mg3iUpB12jhQBSKxk",
  "key7": "5JVqRtVaDXZBZP3aMSedkAQXNUnNijHQ7HEyLMmE2bvUzh7YoZWem6cxefqJe8aPkGapkZsWRrQozWwoKMy3Qcp4",
  "key8": "2pBcexnE92asQmDYAiNVkoND95UjXr8FfGyWfmDFPetExz2uMzihU6co5vUSjpd4rfHaAdg4ACz6A4YMX43jHtoD",
  "key9": "21kUMpzvwpdw2o68Wt6gNspp6bZst56ZfkpC4u2B4Rqo62oBdkSxphAfL7DRmKPwRjnQxRvViF3rQy7iUadNvtct",
  "key10": "3KEFTTheDtfF4PekyXsTrepgqbU9svnqPnrBSqDBYVaBAq6TpQBt8hiBJJENhvCt9KS55m2ceKPwaivYdZMN7YEQ",
  "key11": "62CHLpE1odPq123Uok65DoMFUWvSgB1mWDao6SWpiBJHJsULMyYjkrif3a4r5FPvimEayTvRYwd5Mk84ozvZP5NU",
  "key12": "4EoNDUBwFvb9HhUQvASGmHPnqaRgZm3iASueHRhFioE7p457P7GpTGTCG3ddiSv4trve6GFeM7iDWC4C14e92kMr",
  "key13": "EoAKtYyGZbvSMkJqwMMZn8R7Z3d1aAohiycwmVoCEqR3qHHXhVJiaPZR2aXYfFze55q3GYETJiExBLSH7nbYM6L",
  "key14": "3WQ8FiJbJTefXQSmsYpLbhQe77eHvGVR2M8MUpnr3a7wSEedEwariUzU2ohMieCQsdq2hnbqrzmpZzq83PFfxuD8",
  "key15": "5f2cJgfCH6Miek9tZNXAHNQ3qwaH1LojtP6LCD8cUmBXKHT3ut5Crf9G8WkdXcQrg9v2qF8qZSt7gYCvzs2G7rFv",
  "key16": "2HtpqFpxYw142zvPUARwf2tjbeRwGQDn1YG3nKNxcKSpCY3ftyRHEcTNhEdUFnnYgjgezfzNojfSyot5wzQdFnir",
  "key17": "2hnXAz9Eo8bQzB9h7qF77kxB5rV8S5AoGzW42KWmgVajSepsJcbhyiUcVaBT2uK2NXQcocTv7JgpjmBqZs5RJnEn",
  "key18": "5NhMeX7WhUHuZLamh83FwL6Jhsvswode2HGTs3iSqYbQGtiYCWWXfML6Xnt9crmjn2hvZxGHZCwBnmAbiupuQHT5",
  "key19": "41tRATppZ7mWZpPYdhEL5DAUwjEnTNUjnxtU4EkhFLx37oHgivXXTBSv1F98mBgPakKUdxNH2C3iKubHc4Nci2v3",
  "key20": "5pQdXQmfSQHE61trD5PcDiaRSN8BB5GLx2E3yac9VUUnfsEaUnim7myrieS8US1gZcR4D6gDQc93jMLBFEVdW8hx",
  "key21": "3RVfqFuUCqXu5uor2rw4AZmfBpB1R8TbgDYifZ2yUwtge3wXeTw5KtNvV4eC5JtPoNa8mYEKpNLmXfCHhqKtSKuv",
  "key22": "56NxoWcfAK7efi9HYfnVJuxrmX4NzJZSk8mRsAyTMaKDp4PMk7KccdiqKdK6X8JtwPNkWxHVcAKaP5acYTK1p1dq",
  "key23": "N6sw1szybFbk3Vk2b4NCyiQJsCPwbUVu3UcMrUfNm8WfeTvzswP3Ys8NHXbkSxT4ka2yvoJbp5NjKdNdvtipNMz",
  "key24": "56oUcq1NALzk5VV3PizgoiYPbgh3z8aTyG5gE28P8GGnSV1nv6aLRFZyFvdMvQ29sx6H96mBmsKp6DYndN2XZqnv",
  "key25": "3HDLRG59ejBhptyYfLMcPS68tRmKZ65ts5EdMHjoMRxtFvBe6CqdRVm3a4LYDpPW8i2bExgVaZhaihEZk7vC85mT",
  "key26": "5AerEbio1SxvVso8qQ7WG8t9g9zcxih4KawdvMqPpBAp9NPEsX6CtSFAFFTWAX2JHWmWW24Xk91pbb77gLbrJZi8",
  "key27": "25T8AFSmuvq6gbBYGVwhafbrxgSHaNBX7wD8gTM4CZxo6GRaVbsGto7Q8Kp6fgzb5XqbxnxPn3Sxcg4mTAbFDuFi",
  "key28": "5T3vTmzWvmuysy5cdtmzkUC9L6jt9Hhoi8m6x4kG292jZtS4pvQTWCZZrCR7werSMYmdqRmMozLNbp6sDexX3yxq",
  "key29": "4ps9KBVR3DPCqXva3ShhpJkKikAjA5gyJfsBZgRx1ct1rSkgomgL7n29p3Gq6XBgzVHrzxHxUo8ioHituJhNGQ5q",
  "key30": "61RuLNyiwZ7yD3dj3T9L1GXAt4fqPtYcq39GdEhMa9wnpftX3A3jqCYgnWF9whjUdLWFJzM7ANSqmRdvARKAPz7o",
  "key31": "5Lr1XfuzT8FhgcVigvdv4vTDrDdTYyNXVzgUEyMqkJsDkCsMekBwDrCU3jTqM8UqHrJinhfGBgfHPtdKoeaTHe7a",
  "key32": "BaxNgAHcz93Mz3mQPx9SM5cuwUayx4no3CRGmQAsii3J4eB1DrBKJFrAoq39xazfvSCwVqFn1E1McBJiW6f93n7",
  "key33": "3zzuBtaa9EXMCnR3rvXZDw8uc3CZjRZDSqaANwq9FdErWsDBPf6KJMA7yMngtgg8QdDskJa7Hvs8gWRgrgSA988n"
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
