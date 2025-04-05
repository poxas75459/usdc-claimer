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
    "hjWHBXXzXiSByLeKjeZdCNLU6EvzVcCapuUVpEU3mFyHY16p7uj5JSYt1fMfEyDPobxN94MqCCt81UYhdcXdFZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BNTwtCxRmHWMd46k8RCX3wPRd6QpkSZh32BHgXMjQTmkK9P9iAsV7gnV5Sy99Z16dAy37BjXRMJYeneNurcmSNw",
  "key1": "5k13ooKa61QoHEM1SyvrVt7fRnV2DqCFqLQZrpE3ratanT34nsSjJ1Bh17gryUhvD3YW4prYDhgrrCrGVqCAhR1G",
  "key2": "3qjvzdQs1qreVpuMJQ4bbrj1W5R3mcRHcfDg752D3tPXiTEtB9hMX9j4ZCQZApnpomS8ofkrWfD1eQXyicwdkTyy",
  "key3": "Xd2Qa18SEFbuCRMNBN1NGdeh8ye1HapnphGjsGbeWS9KvvzByZEdUvdLu8ag2Eo4hVWngQwD6SS9LynUEYDoXUa",
  "key4": "4cBN3mwBnEtFbXsdpjWjuBtB9yAndRrvXHFMy32yxQR2aAW5bvXocgvFCdpj6exZveyQyCPtBrNK8hyNL53pKHYW",
  "key5": "3UYWF4ehZJVoVn1LmMnNu1Pr7YjWEv1mzCyNH55XAng3UJvtAbhYEGVAiRMKrdqE4CDJBgVpEfNqtDEAf36BMZS1",
  "key6": "27EXsKH9qTbqDvVpmB8UpJNijs379EJ95uBkUGxNLW4MrUNEG1Rvaajy7BGgZToSob7YXNCMB51kishYevnEAbPZ",
  "key7": "3XJnCaHoSzgVyd7Hzykaq2gbjQZLqXuftLuLWaJt9S4CL6xNtCUAdJ112hF8E5aARo6WYmEd4S5WAQPmkJhi9EuC",
  "key8": "3JLgMz5XudT1sF5DNw3f43UwbbzzabQ9FSHxomBco9ZAvNd9ZFqLcAypacWeKoL2hY1t58KhRDzWhK9vZqfhBopM",
  "key9": "2meRCaTqnypSncEWikKDnrurxWVYJwcopbVFG1NJW3ADrx67Lfdsab1PcczYt9WwVV1MPDE3Pr11Ygzi7jLtNzh",
  "key10": "5jcPvne4tCnDmQKQWWiZ3XEtvgDG9NJSR7Y2WFsGxExfRevZmdcDBJDxor4q5zCybV4Xt4ngbtwZhCYi5XPx7WF1",
  "key11": "3BvnLugpdE7DGdQ496xzqhXnYL6fxMF3QrxwkYG6seNc7tdSDV4tzK17eg7qrLvJU1DgT6ZVXNfhYN2af3Vd7csL",
  "key12": "Ary1H6VbuZdaxziFGuXWt7smt1AG9LY4tD6PMBWcMxXuFbN74gMS2mMimjSsjsXzKsNQKkCL6iPc33QB6muSJ5W",
  "key13": "3vLYeM7dbaFRdUrF4ArHsogLoMmxXXi2AU4NdNXR4zLs21oFrPU8ny9NNabZx3wZxu4tUBjSHwvceENtmT5LtXFr",
  "key14": "3k6KNX6gX59HEYtM546grtXW6YyRGGn6gGiEoebLXYtHmBuZJBJnZ3WV3o3Xv3EPGKUVvr8mojsbdUjoxrRny7V8",
  "key15": "5RgmLDNCDzR2cDcJvHxvvy3F7esHG4Cn14DunvUg8CxpdT7iLVcMVEiqu3gTTYWvBnp5vSn2t3v9dvAhwwqwz12i",
  "key16": "46wb8GYH6r2mHWSn7jpPHhayvt7JD8MSXgkiR4mna73JCkvGrMSGuPZoS75EuW15LrBFwUDLvfoC7zbDKEt97T3J",
  "key17": "SrRek2v4ZZ7pArok1voKJ5xiqSbCkVwRCu9hzf4pgN6gQ9e1EeesYB9MvFRPSRhmooSieed8WDyH2QXP5npAcSv",
  "key18": "2HW2r2wtk8avjHSm6r2JYE4Zntb2cUWnYbn9UAfZV2ZhucE4TEvCSm9M6HRt9mKRNBpKbnecnqgosb6ihJGLJn6G",
  "key19": "31PanB2huk7KG8hNYjEbFwvkxuT7ED7NjF5rg3nDXsgSEisb4cvoapXcu6JVvStZh2cp9EUmAYi7bvdEUvaztsVW",
  "key20": "5ss5JmCkxUjoaoBPhb78wUq4maHyFxFkH4D88FikRrnQkwciZd14wSkzt2wLGKPdmfeMwHmithe5oN2hxh9qBE89",
  "key21": "5T7iwodMhRW3sboSD5A17mW8EKQ8JPmFe5JARs6ZEqk5SvZDgtLmwJg6HYo7oEj4zeboL7UwkuRFXKzoMbjRmXmk",
  "key22": "3cozpGPVAooeEf3xRgY1gmLVmoXHmCQDHNSLxLeqSFXx4QSxZ1bEWr4MCuC5Wijfx2sFTpCpYAWpUQLeqsjniawx",
  "key23": "5DJvi3iRLZLmk74uQVEHth268EnPNdfeGRGWUbUYN3LQbZ9p8u8TbZo4X6WA8PZjiVgVHxo2WdpqZKkWoMgcsANw",
  "key24": "Dqxgc7vg1Nn6ogkCnsk9VQQSGAp1kcK3Jmv4ehMofpRNXmMXmYxuAQXXjP9R75MyRqa456QbzkoCUVHnsALWxRz",
  "key25": "2Q2z9MnonuuwSm723uQbrX7dUGX4yUnrVWZtjEuDuYvpFF5JbGuS2EKZfmhMCb8SmBNuqsooaj76qAaojoYPSyWT",
  "key26": "vBD3gisUzYmkUTJ1FDtXJxdp3CT1xuuTjXwFbeVQnGWfaywnjFgDmm3easZ2Ci7QzTMkWazf68h1DsV6C4DWb4q",
  "key27": "4R1mAE5oST7rkJBaRKubmiMpXm7JntAZCcr7T4a7DjApUA4uj8qzrLaMTkBESfZ9wRLkY926bZCi6g3vrCGE5ti4",
  "key28": "2YQB2wAN7b2Lbr87ZocwCe3G6hrfsbL6tLREA9PAevRVU2CST6jY8GH626WDLkZf6X8tkc4RgYTs18T4vmGNq66m",
  "key29": "g96fGhKvgFoQZwoqmuc4Az5w1LVoMuG1Q2LTdiPLrNw7PPkx1utJ4TXaeZYRcCYQT4mMQGTpR95yiwSYAXagb1c",
  "key30": "37QP4TTetNRzwz1W5jQ9snHE9hfjNvwB7i1FG9A4iWA36PRPtcQkksQjH4DWKCKQzeCVuh5Pxo47gEypKpUqbCnG",
  "key31": "cDoKWPnCKcZhKqgeeJk7SaL2TL4N662NxP5rBohz8fxbYuzGbG8KdM9VfdH7Rw6tDU2wqPb4k1NKKYBoPxFyrZn",
  "key32": "2LmwQg3YxZ7dGtW4mjeBrkRoXqKgxd1h9zTVV4z1wm456wPss1Xk331gZGYEHsaTtvC1r33vvoE3RQkEhVDh9ok1",
  "key33": "KJffBakVDNRRdriYxHiHKciHtKrPjNFgmkXachXzHXzLBiS1cBsASjLu5vcFPebbNCjZqNxBWjK11YXNb1JTyAN",
  "key34": "P94FQFGSN9xLHQVLv5H6JHhZKggezpmACHWUQTWtJfjsKrQSzunqukc3MdEWumaKQMjRGyBM7tHW5uStJDYHheS",
  "key35": "3q6b3LA7U7VHCyN9aK8oxveo3syuqbEX3dhCX5gRqHr9Ydnxv83PQzFv3HeMzyXZdkMzL3z11zDjG3FimoTVG3jw",
  "key36": "dQ5qH7vnq5UDh9SHU9DiPT4FHMdWqGr5vZxuEhago4RLVw2v2eckXRsvJ1ZbGC11qHHqxF5CC2h2VbmRRo25e1E",
  "key37": "3AyvZzT5w64SRoWsUDNojFuBxSNg3PeYguevmfgf8qYbdxJnajaLj8Hvtv9hZSYF78zgYEgcfRVBv8HoV6dPjrVA",
  "key38": "4vF4EfRqkGqeSXqYHX654qsgH5YPwHGrgkHX9LfKgkFGzVuUeTTJHmpjj2VXp23wtuMSbJKFzR9SjQ1GiWHyHoqo",
  "key39": "36yhyhJyAxsXuBuZmba4xJcU4oN14S38NZcPxGnJ9eurNXQmZHpe8Zg2sqCT7LqD43LbGp5Amam5FJxzb1ahtohe"
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
