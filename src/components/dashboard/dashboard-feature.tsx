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
    "414TB4RnawNU34AfJvFuvHq3j4jWmbSAv5rUueufMwQ8pGs9i6YRP9LurYBndZ2Z7tVS7EWRz84ATBbLAdFrrxMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9G5T3kGWu2dYAQQuise83JfUhiduvJnjy73xLt3ZanUU8SsFBU3NGwgHySuLkyHXuvsHu4os2qkCrw55XaDvTDJ",
  "key1": "3x6WJpE4gsoCgYchRFoxQVtGUXU3EuEVFXhDwZUBBzrg9XEQXh4WC8vnToxgZoomBgCVLrSp395BJu1c5w2g7Jgk",
  "key2": "6322bmk1MGc2FHpMqgmMHdPqwG815PC6YcmKFdAc6HDTsGcCaDEAWqMknsgUYaaGToiEp5KJg7twBpCtDrMZBpea",
  "key3": "3sapsfoQS2QLaGDSSVB5qVDz22Bz9objon648UdZ41VKBpxYVJkWZmxYy32hNWSjtWDqrpNANBSPWkWxw5ZqJVuD",
  "key4": "62o6qFNsq14rP4xAv7uozuj3LdepqwVwnFR8cRdWgzkpQmCgnMzSWURCfKh2AVMtLFsWZH8V8Puxbc55m9vCNnzq",
  "key5": "4HBjfPQYdasy8BQEF1UrRtYLiKyrs4Ash3mQDaMG3ALqUoLqLoZNp1jthvNjvcjCK7tFXfZV2nR9ZC6ZHaCzAg5a",
  "key6": "2ot4Ja9LLVkNX5PTpTkQFCifuHEkCRQfrGpRWATwo3U1BjP7nvhKWKSf7L9Mx1j1b8mhAdqLKJV3hnx4DdeVxWaN",
  "key7": "23Z2jttBhWfUvUBkmWEgBgvnGAnU2JNrr1NpG1CtbNdYGBYaYDQpwP7YHLtmoidVHpYSVktMXuCrU722HMrSX85U",
  "key8": "35xBwE5vqHXmGCaecpL5honhchDD3hMzSgnf1EqNhFHLiyePbnB9fTPvnqx4zX6yJHeTEK8Kc3V7vGrooPsFVdj4",
  "key9": "SmbQQF8Eh2nBnd1QjCDE7TtvyEgn9phT2NqLm4kCXVej8kTbnF76yUHrekGAuDfvpsqDdCs3BVj5kJKHRNKxRbY",
  "key10": "54DBi82Dvx6tYjCa2jm2PpGBKH6RiXDxJGf51mKqy2Ar9o9fS62NBFX5sNqVxaX6bjehMZR8yi2XVxn9vxVJqDsi",
  "key11": "3MS5xeCM6R3n1Uxdigmj6FmQWmqEZy8PUhqADrQgGqifx9LTvEeFrNAPuSwEMtdvpBXvwPoQpekiyDvsgdkZ2x3n",
  "key12": "4SH9gnDkyUHUtnuwqKF7Y9SoMyyLU2giNzYPQway2vveWtTSwy4YdiLqTnNZPVcguHkHzH7ogUcXpbbkoCf233xq",
  "key13": "gukgoc5Cx25AQPzcezX6GonbU4z9m1pUtPoQD6EMmsWGt7Y5Pedy4jXbrpbAK1ew1oUQr6NGqoKg8Z4FmB6bQXW",
  "key14": "5F6xQ5C8CQHkGo7gdM3UtEAhpjab4AjA7um53ZtmKoa15oEL9RboEVb6oiwzz9o4c734HByZdreqTuyV6A5pX9Tx",
  "key15": "4qrvzC6EA2g2J4Tye7jPJTVVgV4wPNe3mejZrR1KP5RAN7A553WJKyM9zrhraqhdPBgJmNpYpDhvsPzqqdAP81cP",
  "key16": "2bDCwyfWRo68xELyYEvHnNHkioVBNPHPo7idzd3d8oLvBNLK3dzXBs2mNLgua92iMs5Ues47poZZxgfA3gadegQ2",
  "key17": "4CmAXaNiZDc498K2fmNFy8V3JhzMruo3S7yxiQahtpHB7oXco13jFeWKFchAmoBt6MA9rJfoJHtGviDuRPiknQMK",
  "key18": "3q2aJd3HTVFvfejKnRgkSvDzo5UvLNRhrEJeCMEkKhntFkHRMMvv8pgTF9vGaQRYa6cCgV8kAZYcwbvV64w71dBM",
  "key19": "4aZFnwbA94HPG4vfRMXwLWVCGWL4qVEzvMqPfrJigpZYGkp9y5Cr14ppp4xLNEBaw184QBGv6Lta2E5xTjiZp4kB",
  "key20": "42oRWaWK6a7JjEY77TfooCk4pqtpGLokUbx3jYDcTySM5pHZ3cRnAMnzGkZ7kkzmjrwRhZ6nP8JE7PXiLnj5MZk3",
  "key21": "2kLie3oLTfQEb8FBjaXKq5Xk3TNT6pVtJPT6FXz11yPCUZvDbCmKPqpPGAMiXJEeNss4mGxmHXwqNkshVYtAW6qm",
  "key22": "2SkFn4Mu6DYH13Hkj9DiyjVZeGdF9Zy6SJ6wBEihHY3YW4u8orgVQqUuGPxqfmzRwh322tzNaKD2nGh6CxWMNCkw",
  "key23": "3f22aCxeuXbN5gJaNbo3uT1QA1TRkabXteNeURTupSL2XiaiFnKf5h71jnM7o6tfE6MyygVpPzmFKN6qcguQAKtu",
  "key24": "HrmEkHc3MXppUjcKAs6My8ewUf8pJvG6xzgN5o8GgnQdfKa85cpGwcFaSNa9PJnYEiqTJqcNznzwRYzYBnZhdT8",
  "key25": "5MZKGswahsjkNzH8zLXnmLCG9AuL3F3jUGdndZHByR65DASuFzXBFT69tkGUeGdQZ8tsauFwKcf2PjPYKaDX1KKj",
  "key26": "TdtEJWzPVW8fauGXnJkq9eM7yATgxgmeAzF9ZAr7HdeeygU8w4CDM51T8xCaKar2oD5cDDCJciUJFWy9RDUPQDa",
  "key27": "6CzuZ2PUmQeGutrz2ceR2fJy5uk6wnEG3579LRoqERvmrp22YjhvaAjiHh423Bq1FEKAiWsr2dD23NCuv4yhPas",
  "key28": "t27ZgCv5rqDj9y8vrxDEzAC7g8UtWrkBv7tyBt5mW9qfECe4HYjHdEvSATBZoqKPt5jnkkxyXB6H8XPbSA9QX41",
  "key29": "5idgskiKN7toY78cxVf6rzwXAHMHdAaxfT7ir5peyiFnri6NyCWrMshR8ptAu3jtPE4oL65o1uw7QWvGb1METzLo",
  "key30": "v2Yqf53wCpmYtPtryc3CsEPd1NuCCVNn8Heh56GDssN9vK5BF9FxApUXwAaBki5ii1EJ4AfBRGp9fsfHg7VLNzf",
  "key31": "2QwBut4dsCtH1kjTNkFSSZSkg5rR1bCmjutciwD8CjXG1SMeA6u5okq4kTZufMhzHuYwE9UNNNhVUrpc7zLTKHiM",
  "key32": "5JXp8nkCBZj5CadvUAL9jT7NuKdWDQ2CH2g4Wib4EFrign4rQzGM2z2LAm7T2T8JyPRAaE6n3y4gGrHsZjjD18XN",
  "key33": "2CzAPMwznE8AvQXm1JTqmJQCo4LzXQUR54WDRRcBnaw3Qru34r1t91LRD5mqnhhcNLVE4W4FesXhqMhH4BiMN5vv",
  "key34": "2nkxd3AGRZBrGAcJNKUm4sFCkG2VSnYjpeK9ey2UgmLANH9Rq4G5Cnaufa6AsHcPEsvwpRpjyGX9DVms4yMNgi4c",
  "key35": "3JNEsxD5iQod9tHsrtzgMuDCENtztRZhvtSvKqkGT4XmY9CJ9CSiozScjHfZSJ3VSTBmuGSrdu53d52vQj5hitpm",
  "key36": "4kAa8kQCKBBaYV84xyx2idu5yGhq8LCMr6iR4q5GQNRsJg6GRJJz779RgQ2Fjb6qKNAn6yA1awLnP977pPwEqTNA",
  "key37": "3NwXMP1EXfW4uyJjgHTQvqJV16JYdTq77i3nKUh4qpR7ZySZpkpAwtbQ5iMWQE56MLRvVjiT8zGspTbL82CZQcAU",
  "key38": "54dCj2ymVZRgvwsZSX9J4rCAU8HtpL1HQWrjRpysEm796SBobs6z3rr9eHH3JytRbMSbYnybzue4DhregHrJdsQb",
  "key39": "2NyMeM6eGfrborUkoAr9h8HGeRj1RPAyqwNU2pF7qShnpDEN9QUNPFeNyyfyhZtNChciQKKw1jgLTdprgVYgXB5z"
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
