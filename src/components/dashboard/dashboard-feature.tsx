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
    "2p1Zc4sBdtjFnKyb7Sx3xT1Qx83PoUtLytZHiTpvcmgvjtuCGf7aqJWTHtZ4HZ4iCpGgNS5dgzj3s3tRtJXwgQso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wZcLiZTDagVw1Qk3zQSy9HnkNP8uF4puYbQNXdKgJMF2Tn5WuziEgWxdtF56oAcVZA6EnYLyerTpPHcGWBBcxMD",
  "key1": "3oLrBKEXPNbKPRP6J7Gx7hCcz7bvihXDsrr5ckHuZZtLBs9gn5S6pKPtzzZCJhghwXCU46Lwpmwh7DvfhNNB5mqy",
  "key2": "3oesUmtPDc3v4Jz3GMBcwtnvVagHx7BS4JhUu9VhX8fVuoGPBnsUVVseHgfWXAAcoMLpGXsV6BtXijxzNai9nebd",
  "key3": "573M124qisdyNED4Gq4eeZpigk4WJZTSy92txtG6y2UU38niDyCU1MiL7ku6admiVNiUhdpHhqQf89hRVSpFeC2b",
  "key4": "5RdBXifiy4rZjB3vJfafgkoxCs3NzdxB9y2gUzTabyY5RxD7AEeAQWoW464YftEEs7cZK7U9CCgpCCRxms9SbKxx",
  "key5": "4HJas6izjhHLgCMeBc4fo8GVSuk9kPbRaEdqNUmcDdgoUM7Z3SLTHThGxJvoskBdoPMfNz6baUj4H4ypraRDN8Bb",
  "key6": "WvmwxHhbDAa6pcuDNipnCu2jrtFZFAYJ46QUcVhc6e138uA5xCho7BP7Hj39AoFqPbpDDgYKKXMe2gsVVqMpctH",
  "key7": "5sLQ7n4sH33k4smex2bgEFeWsgNGSwtb8mH4rQi8V62R5DFXBjDcepNY1zrsurN71U4xKFzk6DQfEcA7NSUdheY7",
  "key8": "4dRL88uEYRJFTVsZTF6MD5v3fX25Tj1g82XB2iCbmKeTShGYsKEa5hvvHrHtS3V1d3MtYbkgjLNpqv6535eUYhgB",
  "key9": "55QJFcKeVLuF9sv2SWZNFHeSs77C1RKWNyRhdmkBk74UfvhckVbEwqEd6yRdmU59VgfvLTbvUU4dFH8aDykvK9dc",
  "key10": "47qut2k5DNt7j1i7Y22b8p7UqtEzhCGiSo8rjR1pNPmhFgfUHHvU2Zq3dCaqm6v2T4F4BKsBpYUVobNMdgFMrAF9",
  "key11": "2vmGgr7Yw1HHQ5nQ3nAHyRHGcidnnQ3m3m8S5opJudbmPMzosrJ4sHybTHiHWSiCjEWC9L1atotTJiYesUR7fmed",
  "key12": "2kGJdNjwX3w7aHbbqsVw9cL6vethiU5BUUDh1ChhN1ynwsNoSQgvVgyoBn1VZZkNkwHdq4DkHLCrAKEGGPREnadS",
  "key13": "5kaosgwzikJoafX3kKyn3evpic1AyusaTzudLtJ9yFLczX1guFr5axdR3yjxVpLvXRT7PjvMggNzKTEeZP4Znoxr",
  "key14": "4Xqfpzj7n3D59dwqzQBz1vT6JGz1YZcEEbnVord29KgjsBNdDb8xRHMkSDrinjNHnqKnvB2eQoCFjj6FH5JyTxFX",
  "key15": "4EMLZ84q17fwoEP8ZMp8mvBKQ7N6g5BPiUG8ZaYaberAMWP7Y6tBjBP4EB8qKKJqKJeaMEfMUCdf4Sve9beWjisw",
  "key16": "2eXAXYQeXxu6LXiSKGDaQt2hy44bCcPcmbtBT71WqDJnqCiZcQCxyw6mkaxKP1eeZChbv7qdUYu6WFSenmhTKvr9",
  "key17": "4HPu7fVCuuhhhXkNWx2u2yaU4wMTa3tYEikRLEd6bQJXt5kqrjqxu3Ue135MjpwexqjxAxYgfKyaDwcGV4FdJavT",
  "key18": "3tSEaUKv71cB5d3sgDWPSP8bymF8H3ZDbWqhHHcstG8zT77tvuuNGRptzdoyRqmJQbQEpbuuQGCL9sFYb3ZTV8XU",
  "key19": "GwqbkkknHERtwpprhp7qgQYkJHSRn47TR33xydtAjW7HbMjhbcgwzosx6WL5yK9Vg2F41N82q5hG7NjD3XVrJWf",
  "key20": "4pvcUWa741SMAourX7CcDZrtSnJVKcxewpXe4TdKhnPkqpnhBzx4e47Rjom8mRkjqXMbBnPanPUCxxkoFn2csjRZ",
  "key21": "JLjoDqsQUS5xNZq75KDDZh2CGwcYZ7bPT1mVw3whr7v8Je5amyFFHsQsTAcJaLbChfvSaXenevHzoujBoN4cNFg",
  "key22": "7pRJ92QU2xJiGUabBWZsSyFgs4rfC8C4imsE98HdjkMkcox3PicwPGBv53y2rggQPVdYecfwvSxQT85395rDE5M",
  "key23": "VNCFSQzyLvXZpScbDaARKWy3ocQKX8Rk2QqZDQvWTeXEik2jr6JkWA4kgGRxuSswdW6wts5zs2DpnYKAJhvvp2S",
  "key24": "3j3UAHam1CrKDmx6fZ3d5z9wEsEHiMs3DvfZDLFkCJrKqif2CZhREvigy7iqepx5TXNa5PT2LWPi8kcSdcH1ZUnb",
  "key25": "vtUAh18Yqxp55yupuKNQqAnhoaKpBDiBzqcoy6aU9Xda77UFA56R5n91J6RCPieXzZjG2UFCxVTfJaehNYHyTR6"
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
