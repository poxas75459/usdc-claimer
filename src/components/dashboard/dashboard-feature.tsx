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
    "4bczDqD7TqwShZ1jmdwLoad1Fz2mP4xQkHwdX5sV9aPiETJbnz6cNA9KyLrQnpkpYJ1acHNfzMXQUq5ToNnAukor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ANBQiJ4ggN4t6zVg9upXsMxaD8oTZkcKCsxnEGgtWLhoifW9AGvXSQzf94qWUKTS9HwkMXFwrycAS6ZqprxpEag",
  "key1": "3A1oxWNgC9K7Vgoatg4SeDxVNZixgmdeNuY4sb1tSeJhQQyei3jGKgGrwFhKt56RSGLC8C1KHgcB5CfXKpb9mRfF",
  "key2": "3gzp5cVUYVVFjZE7PRS8x1ex4GEeNH8x57LbnTrrGwre2KUGkSFFvt7n4x1JGWzwQkJUTbJWewnEKxtP8ZYX3AsT",
  "key3": "4aoBQXpYhDeCMYRZd6VobAGj8Vbf1GGFRm826b19ZUEtKCJbmccwFXJiCtBA5eiUudJvdUJUWu2Tjo5R3AvX7egq",
  "key4": "4x92x6eMfSqihxscDV9nWgiZUioG9Jnf6wKiQSWvZLCRMy32S6PLFbZAbbiPPBPdL8BkJ1ZHSF3jq9JVpQWSgkeu",
  "key5": "33c9xGddKjpVntftEU4AYZF37b2cj88WbRj82izp3wMo62GsKDmf3cB5kF1o4WDGaPYRxrWfrizaGLYMcuSp7UWq",
  "key6": "3tFsosB9KpABXjkz4AaQRuApkfQAHd13tPrpQtGPHM4FrzNWaRmfPiwxbbSTSvta9VuX3mkcKooV1tnzkb1hVJQF",
  "key7": "2zgdSUniofSUUUBsAHSNtvpkq8t8BFEkCLo9xxS1CjGd3YnhQsCtajNrnJ9a8j98gaL2rwykTBtj5y7zdVkNGJFy",
  "key8": "22usbZToacRFZy3eTyipRq1c3VCrfw8HAWKL8yGC8UVmjnWsKigjQNLaSR6re4CdMA8X9cDRohRxPG7J2UG1wmyB",
  "key9": "3ZJYYyJHH8aZXTEuVCQAtHZZ5QKwqhpfpkcjkpt3eU6EjQqrtHpmVeMNfGTCKsMS7wYKWeHuatXaaS5sbK6aqkvm",
  "key10": "3i3C4dWLaC89SiGK68oYNnVcVCveUkzxeZbUwFCcGzgVz5Er5tVQZT9QefS814XAWUA1AoDYdvyYz2SqHvGvYxN1",
  "key11": "3xhLiCfG6wHCqHnnwgmQVfPGUvFnrSuieX5PD3pd1gde81p4r2xNpEQPa5GUw83PjUcACCf7Bhjy6PbELPPHvhp2",
  "key12": "3utPeNT3YuAdwCdepjZhwM4z5VRXiPSYPYvQAPkKy4UZ3BuEBJLBubeW31JCnBTCEHGCwAJvAznBx3LJ6eSPBgaX",
  "key13": "4onjEebyRmsx2dnt2NoipEybFePuiYQ85MxZum5U5ZfgbWnTVhanRRHb3zUWCQjrYPcww4e9m4magPADbRbLicFS",
  "key14": "SLRZSBVENH3Ehbz4SAmr3LRpazLZwPn4rzpiFh2dgeAoo4JDKYps5pyGcNh8KvPmgJVw1hUqFBvMEA7GtbcfVy6",
  "key15": "65nZUaNAiqK41F2aAnJtfrHFwNvqLe2giQLjxXcCtk6cH4x2LmJqbFnnsNn4xZeReN3mXiBpsRmYcZXoL2fWS3rq",
  "key16": "Ae3eJ7yaKrfRGHnXGQ9QPj1wbgbKXnD4jJyWxqhXzTEvjnhizJ1pzWJt2DDvhg9ou3Ku2x3amZhCKmkzEqs9YDQ",
  "key17": "3NQQSe9ksqRSJVL4MLzrmVPZy1RiBuixUTukvisZWqZdZBtxvNzjn4B77eFtf5d28jHZcttWYVBqWD6GnTAanG3Z",
  "key18": "5HMx8AqQqjQgLWHKijvzpBrtLMzv8YARB6rvnwEqgGjgmXvFeQtr8966zAqjxSb4Dme8RBYoBbnHpn5dCYEKZ48i",
  "key19": "3mss6WUWKLbkiC9yB1oUf53bXCYNBmQFcakUx68XBLM9XbypMsJjaPGAYY22sCt5QPnVtwLCw97jS7jBFAPAYpDJ",
  "key20": "58qxVjaJSyngqNcMcrDkTqBvCax9ogTCfLCoj1GEERyP6wJfcKPyQYhbHHgkzcFYpGiPdfwZp5hdPxbtg3huyeML",
  "key21": "3nt8rpPAKJanpCVkrBX7PGpaPMmeVitd8oefpR7XFaTefUTzrq22j86V4U5j3Y5csUD2qU9QUYT87ZvgCDtMw9Hk",
  "key22": "3CokzdYUnR95rCZQUJ8jmijDwem4FVid9Hps2W3wTSMCG7Bg9gwA7JPYFLB3pPnjsPFEw5UZbZbqJwrEaKeA89KH",
  "key23": "3H6MWFakcXjfkfGkWjN5ag11JSJYxpLS2VkEqyJA1Th4kiG3cMCFg1QkVrfdJQYydi3MCyRsV5n1J6tnLRMkh4cz",
  "key24": "5yovx5s8pdddGwdDF4CA5RDovsih5gH2jHZgUFvr7vp7SZ8YUSzFSYHFRA1xpPK68sLsD3SbTZpVtCAAnYTje1Ug",
  "key25": "D5Mnw1LLEnNRBRJPMQQxJQsfy2agi46Ma3DpAJ7wrQV3w2coyAc55uCdq8xPUeag9TQbnXKnMvragagLznUgePX",
  "key26": "4AXNdRXDPRk2MxTCfrvm9D2fwJvz2ch7iuSDHbaGSoSztTP5oPufSwfdnjV5okWHdBvUGDLzoLXk43ozZNgaYR6k",
  "key27": "2UdW9fyQCQYZpftKUhgGHCxj9GB4k3GtEfSFy9QGFpS6nVQx7w615X85A7ZAkq3x1zzETorjYhZf4d1S3FBgQQdx",
  "key28": "KoYYpNSN77J2pp61ovq73BD4MxAi1C194f1h9TNFswZFavarKSyELC9YechS8bXAnasvEWdZMghEubfMLLrPpFX",
  "key29": "33KbB6AL6ehxCzhiJoFXwsJjqJwFumFU4GngrPDdQ5AS27Jxb1nHarvg6dHejAtmcywE2d5Avg3ADXh1y72vgZ6h",
  "key30": "CDek4VREi4rZyJ1Qy5Wb6bRuAwLZ3tj8Rux5e77m7uYus7jdzPT8pqahDNeA8H3t5CMUg8wQQpSMrSTaa7qTyCJ"
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
