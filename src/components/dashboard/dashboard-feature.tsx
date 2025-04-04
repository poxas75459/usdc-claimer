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
    "3jVZ1b4ngFfceiY8dK4gtji8sMrwyvrLHq1ocRC8ujrZ98r2xe6YMv3LF4yfQroeKbe4eABZFmc26JYYTY9oRYYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e9iKkX3hr8JPLGgsRy84UcbprJpxUSLdcLNST7hSktkd7DXxUeQX5wFApFWr3mhsUGpK4bUMnauuyqsAQR8LQmg",
  "key1": "3nuccNGk17Kr53mKbi3aDDYiSBYKc3KtyABcLU6XcZPzEyAWAqcJa13NKMMTGegvVLrF4xytr5Pzej5zbNuMDFjA",
  "key2": "5AkSGm36oJhvofCWUk8PDvQ5EHC8abU4gmwEfwJuR5jNvbeLrLbXTNHHUR7i2Sv1hgntqkUqmoAsKBi54ayEWh2R",
  "key3": "2MGvW9NpMwaxdt5dQmNaEie8AHeMFciLFSJvC31xrFqJtuhkmURKQK3ndZy8QGi3Mt2UVLvNPbeCTJugtpBYorkH",
  "key4": "4mUdWzrEXz3UMVJ6rQvq9o1Dqbmj9z8qR2YKp1aRQa2A2WPA1S3F1NkQ3uhs8FgGxxZERw5BC9harnXws5Hn2DqY",
  "key5": "3tquXj2FauWujRXerREgF35ksnaZcCJwdR5kdnGcTENWaxYf2viE1exhyuEwyWS5N7RfS7upvtD2yUHvLTsfhQxU",
  "key6": "1Un2CmjcGodxuYbmcNSSxgieH8Xor3JKmAosbxifvK2TDB5NJyUVwHG5V6obreMJDYzQYQffuHBqK6yi8rEDbNg",
  "key7": "2rsZd8vmXfSv94PCrs9JaG8rpMQwyNX8WwjdkuijKWFF4hhsPLrNSyT6Bc2we3JiwJDMdZ7ZDW8m3S36ezKiQPX8",
  "key8": "4QxwKpbKpZdPKNftX23ahQbpcw14V83Hye54rohmidb2EB9wDWhZtEKstaHGo8w9n1CEX6agYuRSUw4n4fQ6VCWw",
  "key9": "5ZQECWSwkhhAHUXKzhYSXFjyCVKaG2zuKJP7SnSpyq5xwbHAw4XJY9ihRQnyxRNTJb6BknysNJTx8AhA19JAADUm",
  "key10": "Af7LVsnwxVHrzmPW5u2MHhP1rK43Ga7pYMBQ32Wrg6MumMJmUCvPobvXHAa4K8WYuiRP6H7NWfXjZrbRrWT2ktH",
  "key11": "3ph6zSpbVArQ8m2L7A89j4nycSmuybihc9HZAJeFAWpnst1XPcqmJFXhqXq5biwx1XxbabSb1ANAaiBfTR3JU4h",
  "key12": "5rqX2yt1PP7nMArCDj96SGQ7ZgvWStpJEhR1kFFBBFnXQ2DrcVUj2SZhAbU39qMkecy3hak7K4ikii7pv6tEbTZo",
  "key13": "g8FBe27hZmSRQn2AULUHT9rZtrqbjJN2DQmkVWVWLrg4izcxDsgnAZdkxr5Dp4mAt1iAgsDppG4xrzukxyi29oZ",
  "key14": "5ZP9V3fMuQkmNYtPvw3FViJJ2dXs2hDhQjnN467Z1dFnGSmz1KofGRXGqpHhDWm8GNfG8YKccar8h42GXvBkJx8R",
  "key15": "2BMvG4BecmLyAwbTSnCfvi2H6WmG9tVNLdYCU92qwmC9UydJv7DQpMr1YzXSWeUAAWwhMHaxWUcFvyCaG2beDo4a",
  "key16": "3HJj1A93TFTtbHxudnAAKmVS1VNvmXmVecoTdVmwoptUEmtRM95vKVcAXYBMa944yT24XaZjipnYvLNokxzfp8TN",
  "key17": "iJk5b7dzY8KWwq7YnN1QewHrRenzwoSZp7tJtfZiGySQGK9fmHZ1mxwd3Pok8QCqbivcJPZTjt9EuD8xU3thRXZ",
  "key18": "3QW6Z8VAfz7SK2reCaigaPy9VjuDabhUjYXbmMgKzktTUvyKRWKq2KY278cCQ3bV8M3cSfxNRYEFP3UmRwMp3UHq",
  "key19": "3vUUXZbPgU6AYH59dphyJxe2HNKheZ6uKk9ykz3PGAbi2seKvdtVrb21ycK6PcvVYWCZqgxBTiA3efha66UzjUj1",
  "key20": "SzXNzD4JHEkSfNXjcd4oPHSPGvAYY2fUtnSoXFQTfzBEPjgnYKbjQoGwTzXzcirGLsCTvSe9V9Zqv1U3Rxkk2F6",
  "key21": "2qgj1WNufyU2r15gXnR4RH29B11tzSWxRCNT6jtgUDxLBdAYrcv9fo7qt69ap1NydbW7AY6Ai569PdEpkArNRXFv",
  "key22": "y8ekCcEAYFcxjSmkgkfEya5RzFbtN95iT3pSoyJxyHUVJuXpMKkS3fyrmkDhvp9pBQuN6iB1EAHJdQXcGdjeNxs",
  "key23": "54FqWoEcZ7F37DhmHx2TeENwd6iWDqkKT5CMG69ufkfBxJrK2sMiPDhpTds1iZBsE8GGhzitQbNcs6cN9FxH3iYQ",
  "key24": "3NkkqjuLu8WxvAVtdpQyR8ERXnZA3s8oqBb7bD4A2KeReqN8wouEr1VRcBqKUxqeVQ1rA8FbBp3wxzmuhdaDytcU",
  "key25": "bymHnbxNZkxfngMvniYjkH46zRgZUbEffKHATGDyh7uzLx58AJd6YAFAK6oKXnj1yrCz8PAEkPYwfKSECTJZufo",
  "key26": "pgXX39Xy7cuCxQXQuwC4dDifdppvirdvohVqEECkFhLZ9BdfdWoBzdj7cuZEdrm8waN69NFhW9uAZw6UwfnMPhC",
  "key27": "2EVWxHfSu4s3JCqRGtfAhT2gp31ScKp7FFi3zjW5D26DTLoQBYF21cG2quycUGaATUJjjcspPaz19e9fwfcCL5d2",
  "key28": "5NNZr3PQLVc1NMoNaeW9ygUVzG1WHCZ8doN2mRBNkjubrcGVZ5NNyqPCgn7LStxSFq4K3bjiVEADwJYxFa7Zck8m",
  "key29": "4Y9qENfqSydrEjpZW3HtHDCuFRvaZM7FCQCCmJ6LtGovWqpTKNqtCMBLLa84UXsCJVTxwAVxFkVFdpBemZLdmXNV",
  "key30": "5hTMQPpWQhJfMqaZXsS3N3ZmmNKjcYFFvX5KQUSA3c5NvJ6jff123CJU3Tta9UJuGCNfWdRnBxdEcpGUeJh4A58M",
  "key31": "5S7Jr2JYCGSeCHeEAVfmWPdZGCWJytogxrVPMfQqJrn4u7jEJMrWaybykkdzHzP6tQXTSeKh3xAfsLj5xpWyfBPH",
  "key32": "3Mz9yrhpMoZ8mGbXQwU8KJHXh6TvCad8TJMvCtQFXtYwcCd1WNCkfCCbNvkK33gcqGcCvsvEnwuVLvSrA59cZNQ8",
  "key33": "2p48thEdGqfDB8BNdCQ6ePEWuxKwNMKqpVLtTYHKN9uW1HYvyu2jcLesb4h9Yw2zkaq4yze652NKGiCocviZXiLM",
  "key34": "5uJTmtBHCtS2rJt172N9o6791vfhsGcUtXYmS8n7GTFk21Rq8USt6wxrcdZupWMXd1d5vU4rb3woTTRKfnvRJNMh",
  "key35": "39Sy92prxmMPCgQfZUmnaF3CMsqhaxKF6qBZTJeu3yfRWccVR4axY1sUNKkNvxeUzL3TTbkS725h799QmpNCUZXq",
  "key36": "4eHEe5dsGMXhpcR3H78bKMg8t8s9Dk9raDacZ3TE2jrz4rKTv3g746wv3jfNjkfExZQCXSB7LovSg9wgrMVdtTRe",
  "key37": "2CUJQ5Uz36YhVaQqFy3FuTDxhszfPtbT2HQUru8Rc9k1CKFuSM9CzV9ZqXKy4nhvqmaKSfJnnyWGMSxSsDuBHTZc"
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
