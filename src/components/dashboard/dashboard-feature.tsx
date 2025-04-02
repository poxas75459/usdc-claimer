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
    "4kxbpmLPzERmc9R3wPts4wFkQZFDAros8Bzp7YihUTUsqbf2UAzxM16vTEt6h8FuPVVS6xijHsWDvjgeQp6gTAc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59XAkVMyGPdAS2go7PBFYndHEzbRovFL4NwGA6HbnoDyPeLgX9XQvh4zBseckbRQTT6BauQxcEaZoAz8rtN9SM1h",
  "key1": "5p77bZR7Eq5g1Lu4ybhfjcN7UdBstqHwNXaVvQWesMiQGzH36YpkynPSYabNPVosGTWwdxdee2BkFZDhD5peTkSe",
  "key2": "66ZWcxrdNd6BqfBxvt4gGoD8KNX9WquYFoZrVDjT8qmidQYYfkS6zKLZxZ3E8yUr7W3F63HQYyf5hpLNPVc6c4Ss",
  "key3": "4cXh6XpjsvgCZPDVwKRTetgqP4iqkkABgDkeQmBYrxKrodwHDttQusdknj3MJUK8uEFhxy4ZvhkjY8JX1Tpsjj7p",
  "key4": "cUtDpRqU7sS8pm3cf9HCduDAc1d3QDDZfW59dDCePBdx6r3koKjziNzASfGgxsvAQCr771nM5VgaAW88uHdJdvx",
  "key5": "2hMRnXJFWNKE3TfEpJDJZivPiqvsR4u8YGWy4vjtK37co32WZc58fJeME8e8YHcm3rigUqgXjKgWPrRGRWFz9sK5",
  "key6": "4JiWEH4vBEYQR1M9xGzwysrhStyPmYCUMWpuV35J9Es1KYs82gTqvLh7yr42xutFCiELshj5actb9povbKMiFXFv",
  "key7": "Noo8Pb2MEN5a53Q3q2o4kLPFVcw4WRBARtNHbgBT4f7sGaEKpLuRZbY3BwpjYe7WXqsgmKC1HE4UykRN9LhRdv3",
  "key8": "PRkdw5qDoLMVyHrUYY4yeVJtawzxnp3Y7wySrRGxqV6y3SSm4m9qAaGTRex9Ew2MZmxQa6FVsbkomweT8Teker8",
  "key9": "2LEZDNr21yiB2eo7UdjY4PfxuZn7Qf1AdajXJ796r3Jj138xwfSLUdx4L6ALxAHF4QDszT4CQitFxjYESfL7B4m9",
  "key10": "4DyhbqMuxL8fvjcgLpLdsyELGLj71NAaYrGiPtojzJ67sjmCLHQ6WXT3edxwBRLpQ8tYsAFxUyKQ1DQRu9FRGeZw",
  "key11": "636YYPedLH2ecBXu9xDgUQ8esySYphcKsKhx6sKzDSx2hLsj7isSFWSAnSKzYWyjiGpoSXx67KAYgwbVoABhK9cY",
  "key12": "42nMaH31uiziD9CdaMZCDkVfXFstJyu7r4Ne8iZhHfx9FbTGSjr4EuwzmfnGbeBuV6PDMbdzY6QnzLrdxxjLaJ6N",
  "key13": "47Hy39qUtVoQVAgFbCJqhAvz2W7DnBZu69FLE7iaDwFE6HFbfgdMyBnyp2oiqg89epMQht2jd3unp65mXGbgVLZV",
  "key14": "5mULrj1XgCZtJvsJFja4yn6A2YzY213AquPU8UPoH6dnWSdksnY9UBPB55WXXXqpdSvEn9Hw6cx7BbCCznQRu27T",
  "key15": "367rNWJZCuGXf4eQeKFDyVbvFYZqnwTwY8saiQhmwkP9SNTxucigfYhVuhyu2QYSpGaZB3T7WWHXm3H22u7CSmzm",
  "key16": "3tM9izw2THvfY6feA78cAzrRgFm4RDDcwCcFf7kRKE53obfeGYWDrrtaPvQHWQBD3WwNo558TVMVUS4gXaaLaUzQ",
  "key17": "4p2N9HEhurZeuxTDQvQcgKxk9hu4YubzdC6N86DDbGtsaheAmu4kmQcC6FRSphapp3Q1NpAxX18uSta7BTpFdm1K",
  "key18": "3qbToAKGb8jKP8JypUFTXQE1FserCfqNW2iJ7bTwwieHbPGx7HJn7F9JbsRaHopR9YsESZCfu3vEZ3nM63nL56TJ",
  "key19": "5TmVtxZ4ESBwbdzBPyxoGajELLtwPWeVgrrdsHpsoYqVgksKtFL1vyynSUJMp2gzaMeBmVZod5TqLtPxaq2RC1fT",
  "key20": "cv8d7pXqkZTMMFWggcH9EmhfqKJ6rnWL549SYvK295THHZbd6f4nYHP6wFxb18ykASNemcSxosNiHckFSyUctKL",
  "key21": "4hB4RKmVtH8rFYHycdwdx2RSQy91zPz5GyHMH2RBDuJkDBVD9vgia7S8NCMPsx27LMcMWbAFSG4j3NpeohL6fVfw",
  "key22": "4WLT6goXTgUSTWKgLvHX5i1tUGPw6pWLDtkQEJxoFoKr9azZmgNjL2dTJ7WAXwYEbuiHg2CvD454CzWyQepdtQLJ",
  "key23": "4VjA17qTXqRW3KvMWDvw9cXGXcr5goD4wiQzvxHctP6oQnt9uAPKwK7215wVt3rivwiksqHrcVXeTszwN97tKcPj",
  "key24": "5Rp588gHd67v87KVJm5SVsfBinDekRfwjrrkHy2zVXDj7V2sc6xCqJcsz4W1vpBsomAjccL3V1bs4ihNaUwBPE3P",
  "key25": "21QfpSUX1GvifDrcYmZihTbzjGTtMAJGHWNpjEebHen6vHHJf2A4W2T5ECVHRfMhnFVM6THaNNa4jrohuZ43j7BH",
  "key26": "2wp6P1YEP2UCZs3oQUpCpJT27hZ8rJZW4fBhUUVxs933LQJ56ePCo39K98LGBgVbemZNcJPDxT5Q8GpXxPm9G3cp",
  "key27": "4vTnM8hT9Yjmcr8teNYPbgQNbfPZTkKhejcZUJ9reVrVQJdGd3UycLTQViHzxGPRdeSCBheTDukUdY4T6KBHkANe",
  "key28": "52Ta8hm4m4bfZfQyfwye8QqihtRnZeAywvXPqsfXqWHvM8F7KCDKMc6rf7efPHvQHwDGv96YHwexV4x1xhjRVp9T",
  "key29": "4fNoYT4FPCQ3EzKegPzwRy8JUicjznVVKjGHGqwCYuBu6HYZtfRKcwmWBKQDqAQvNJY654DB9uSgEJKvKSj8rMe9",
  "key30": "3ujDU39dW3h1QesQP6BrXURTdba9D4PDF3n9C7QagCEyLMxdmgbfFohYTWcuRCcHNfn5TWPCS85YyAZMdHQTsLy3",
  "key31": "5WJ9kM1qx95edPGkd1aKtZxDBWEwMFWwhgaopUc4fegNFEL3hU28aeq3gPNPZTFQpAMsfhevWrGdSuzfqoDTfqxV",
  "key32": "VnhByK2xGx5aXNL9y7jFhBGWAb873U2oyM91qFi3zQFuz5iiidASFTE47VAm7kjk5SGRRF1dGKNNuZo8oXL5Nqx",
  "key33": "3wAaPi7vvhrwpx4iFMUWLxH4rsfBHVUnZ9oNfFCcz582hseeB2RBUt2K79eT5tUfozc2WXiHzBYNiFNXgFBfZccK"
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
