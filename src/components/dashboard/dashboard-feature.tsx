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
    "2RTMtEwqiDdBM5HGQYkV8t5y6zzfrmDPJoQX3g1jkQrkguJfuSLhHjw9ZjNwqbfjeRXsDRHEZWo4q4vRtnpi4WkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36duD9Z5Vv8N5hziABpmVxkcQhrBmba7hJK3iPCD5oum2ejJBgdMD71aALjgPx8CibaiqvKdxvP89P29g5mRwXQh",
  "key1": "cmPVQH9QY2n2De5qecPWDX1HGMMuG2yirXG3cWBx3EL3SFqjQNLTVx9GpxydXSseLypwjfYQf57EWcZZAVsCvvF",
  "key2": "2YvuW5Vs2d7HyPP1EXXcbG2TPsMzJfifBkrmqtTJJoKYFDED78cqbCXH4QRWWXH2ZtUQGy81jqRLYkcCZZhp8g2z",
  "key3": "4nSjQNeis2hft1vkyuXtGEC88wi2CYNdRaH9D2tZXTomxcMsJTLinisuQSpF2KKFBucAkv3GQBeoFCy3RuDzDqVe",
  "key4": "4bft25gjgiXq7MxZVAh4CLZYyWwHqFzSNPLYiTLanzReJknCEyNPLodTGVMESv9vaTQpwMPygD6cs88CE2ZEmXk4",
  "key5": "2sESkP7b6dffVG1KXbmvMVag6r5WbeEV5Jpo38zcMZTuiJRdqLVnZJLzpCsxcJeWcg45NFSpJBwwnVVd3J6zFwiV",
  "key6": "5vE6fMoMhBoHvKGWA8dhJxEn8caiLDxz88JvecoVzSfvfvweb28S7Q1gQLxULRUhJXvSjyfDs4zN1G56i2mk2jZV",
  "key7": "5nKr8ZHBba2TmntaqN9xKWwU3VjKVk4xewNGJTQ4MrZ6Jz5Pt8QPf7So9h6me4Rx42f6unHSa8E6GW1muLdj8ZLE",
  "key8": "4XqqtPTGX4NjwU4BGVPohjxRtq2TL5TPnehVheFbTRpDQj8KiBMdrsAiwni2sv7qZF9D9UygpR4t2p5Ai5931jtT",
  "key9": "3JF6LyfxhE2PJDVCU6VQUaNkPomgoHN2YFwM5WqXFyMwqUqYfp4USrfGVw5D5c4pRRQw2q1qAgxBzFoH6nAKnqzD",
  "key10": "V46H7WaB4dgkbDREdVgJYMLYR2tdNBQxwSdv7mXBAdxz6rCRbM56kg1wpgZoiLAWmJ4BhMY168csdFtbcZX5Y5m",
  "key11": "3PBEg3HegdikVi6Ks217PDwyttLgb8DyixkKpaxBxvUm9BiBihU1jAFLekqq7kA7cgB7g68t1U5JAybjHKGZof6k",
  "key12": "4QdQxsEtYRF3ow5pLeiDK4pDZd5ajMLNrAKnvTAtnvaGHBw4Q8iqFRqNm5J1irYxegMAYzmK8XVwqcXhouFMsdB1",
  "key13": "qvDDhFRvgBUDtc2bfDYx18ZeYfDT79VpZcx759cJ8rj1MzBMb5FSquE9h3RZfF598Q5gSAm3DcCNMjMcGeSw8yp",
  "key14": "28R7YjBKo3dPmYqQUejmnj9YioXB2CyWEvwumfEGqGvD2nwN76972t9uww28U7LmNeHkWZDf9cCRqCtzhuGAvKwR",
  "key15": "5M8p1eXrsjkYjpcHoapWkGYUx2a9gtFjMZ2FxFHDreQjrKTFvRspcChkywMbJMxc1djC34gEMYcjv1btZhQSFH9h",
  "key16": "4WJ4gxto5Eo1jXumHmuPrqx4KcwL4hVHxUZAMV3mY5uFm17ztgQFDnv4dewFcBsyHiiYeH2SiPWns7pA1jzW4t6D",
  "key17": "4ZdaExzNiMAMuPgP6Z7mdcnHycGA3tT8273JpZPvsVXjRSm5oGtUR9tJevjQ3fHHmAg5XycRbR4t9vLdeZTP5Ki3",
  "key18": "2tRbLp6bkwzsTCeCh4EX5GpB52mQbcAJfcivzMRzro1cjhAJr5fintEBaiKYbUynGkgevMZVaXPxcBCav3z2DjS8",
  "key19": "5rDuc2cCFaZHDbXM34SZkAb9eJhtJQKbf9h2Y58Pt5iQN1MGsvonhb5AHra2ArrvAoFVnEmGJ1FkQQJQL1qzoPUf",
  "key20": "5xaBXeTwgvEz2ZAFwkqJ8g6ZNbehM9s4qoYzfR6uCizgZCcuPumyb8LeD5ogh6cZ8QCpYBrjtMgXxLCgHrnDseYp",
  "key21": "5FQ5HzN9hsmNn8MSLaC5H95h41PLQ3N1wvkSmPYLmF4eAUFuWr3T4ydXG1AratfcJraF5XyLbYBKKfFXDLQta9cq",
  "key22": "4gJSocWQB9j6X3MymMXj1b6uJjsnRbnP3S3pbPjCeHzsNozab6VHMNT79fxorqj5kjgFwPCWm3P7XHA32gvTYGCB",
  "key23": "5KknYSZVR6FFjg8H1weqHWh4DfiQoNxUrkqKEf8SV8fv69tvRo11QTPo3SbLqo3DVkVmQQZMcfhvKjUffX56UsXj",
  "key24": "4Cc6sgGpQiygWUpH4vFsCvQNDKVb5qrsGguuZKS7xvoZTL1LSprs5knSPyG2cCpcvHchQTFyxcctq37NwEA3dpLk",
  "key25": "4CwceA3ALCQSeoUUtGCJ4ZQjGa3Ys4UgywgDbmzAUnXTgSsxbob51tnYQWYTZJwBwwQSgZy7SKmFR35Zopf7xx9i",
  "key26": "52Qx5bEaP1Q5XnQvLYUgSt3KPRSh7Yhnsxn5vcxZvQ4mqjmTXj1zdRXJKB4eTTsFbGuRhaRnpcrNabbiZnzw5jaJ",
  "key27": "3JPPbDizkbsdVY3dpcCafzX53ptyGp5BPGR1mfxpD1w3LyWWLSBy5Dg4px4M22vkPGNAxwGCS3g8Tc1WCHxuJukA",
  "key28": "34UM9Rz33dS2XoJDwHmWyB5o6XLdyd5nqLXdVibhkczfuXHJN2u5BgrdJzLE5TZYWUbKRzDtTpQf611c1QvBwZws",
  "key29": "4BaVkD9wmZ8iC5gynaYtkb6tYppY4ZJhj9dwYrvGghAKAsCvTeyTSbddqimCptXHSkZNysf76nFWSMojLx3giP4R",
  "key30": "EjqraudnsRSshkyUoE1n4cRFxFwmjJHMKc25JLwFpQNzeGpKimQijnZjukJgZAox6WRjMZr3bcdtze3fNtbKDBf"
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
