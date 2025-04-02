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
    "5g7SNeRgN7vi832XK7CfToie5UPCEtRhuJyrrnLdfoWX4SLuzqnPxPYGsuouGi3GyKuXyKoWtQhMkNBsBJYfTpgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YMEDXTbfca56jYLM7Zzmx2qkCuswpphEd2DdfESJKSskmgeRkAiEeJeMTmVh9DWo5GQqfP7a8a9Da9DFoZ22iDJ",
  "key1": "5XEKaGZd6AEGndyq1QhMNYjb7yjwd8oevZNNEU4DNS8HaRcLYFsKKKF7Cy59o1ygDbVy9uRxJWFs48mGXQutpxUx",
  "key2": "57c9wAFtQ38JWa9G8DvMQwnb18Z3GGdJdqkgwGvzDSJGYsHAUb8Wsf38ts35eVVA77vvzsk4p77VbMvroycn4eUJ",
  "key3": "HHjNFVUVqzCVCa2928LrDH2Xxx3y1yoYXW9G65xhtRSmMzxEVkua5Ss4V1P5mP7nEnzd7yM9PuV9zsZWf9qFcYb",
  "key4": "3XYeABry14rR8RSQZmWXRg5UDu4Jvzp7RyG7yYxUBqfS9mmAoK6b7PmhqPNvzcVh7xZGf8KqengZH9Y2b8DFRcTh",
  "key5": "2DeGLfnf4eGBLeoe6QbcyxQYwPYEUXZzS55BhNDZFzEvnrQ7gbsPKdHGCtGmV1hueHmznTRXghHB2TujHyAYtK1K",
  "key6": "4s9JfB3Rabran49vsjL6Yo1QbtQum1UDx8YxuwJGYwgBP3TemptDRU4hRomwynnthwqNtJHEexuV8N3S2w3DtUNn",
  "key7": "4P8BDkX9mrY8TnQqi4QFCsoECb49JYRKbkCrreRN2YLmxH6h28YG79N66Pb92R8WTi1RSdUhzYZv31qNQ51TvW5Z",
  "key8": "2xxFNAvpn7ZTS2iaZqADXX18q7Zq1EFH5brpx1FpBcLtFULawurQ7LKeuSGJhLCL6e6C6YCGnLfVLbjthLpweCBz",
  "key9": "2StWX7KDC162FyvR5PPqxpRXQq9prYcs13G7SuBf6GZxpUrJF2pyAevGUYCKL6KGV5ErEYtN1rEXDBTXQU2eKT2D",
  "key10": "5toMntwKcBT1TagEByamu7gd5G79w4mLLkcs2FyXKAVY7YRui1wJhURaLyTL8V1GBw8vyBgq4pFzbmf5DzysPSL4",
  "key11": "Eb93fSxDxCa74Qjb7v2DC4MVd5w1yvBujNJniB6xkmiRwcVxxEqsb2xmKinho6ZcfUa1tumeD4HekGfhxLMrvWP",
  "key12": "oCqgwDNhKZ2jsZuPM9167uecS9EFipEQhFKmGa5qV7AeAf17FBgw2vcsCgmkuQAQnvypuGNpyujuaUwDvN6aLvk",
  "key13": "32FwyqfuNwr2G7VT7wWb7pFV1SHBmU8Vie98gRLghza7msDVJspR4aKwXj3JrumDNxfKnWM3eEE1qZfayN5NxoHa",
  "key14": "39Jw9XvK9dDRJRk76eojNKbc2WqNRqQseEMrS6YAzk3ynBKkGfw3nDP4FansMS96UKtfvaNsFpzaVgAgqxuqxJHw",
  "key15": "4jDF4BTLC8bML4R3dqbRH2skEHj7q9E3aKsBUmt4isLGwif7L9WHtLBAwuUDGWJi2HKZSbiUvE6AxZ8SKLukpxcZ",
  "key16": "5jvookaMWp6n4dbk2mLaWv8zawozPpxwqQGSYNMQ4cvr5CCoWX4zTUvECHUp7ZVEHgtauAPN1xZVR3pMAjnvYEzC",
  "key17": "MbSTmKYKNjucVUqcb5GnpgXyrNFRkJpcAB515syzY6MbXHgBUMwkJjSb71tbXXD9dHoXKiZ7xoheEKsgWP65w1b",
  "key18": "27wWDMneECQ31qbrzT2xLrfyoNTEBV8UcfQmw1LgtpYxvYgXwd8xRX4DvgjAHfQSUED1uGsjycawrpnviYwHg9sG",
  "key19": "4pZzbwFMrZTQ4fWGp9iZghVJUjbbxadwANvDG1sHiWf6bo8bEB6r7q7dUHTbZGQkyAESfBifazBkTnMkpAFAH5uN",
  "key20": "5riutnJN6gPHeofbkPxxm7xTYRWSc1ocDwrRK6fA2NEJcNJLwS3g6ooXApzxxWshAM7ccpjaB2wr8RMJ8PBVFPL1",
  "key21": "5AKRiqaWgxjqUPjq9fF6kKoz2L9eMwBFEkL9EJgjPcxevXm7qzdTrPV5kect5VPfw5FnHHZgy4i4UpYidM91bW77",
  "key22": "4ZTWVEb1YGnoRgQbQeYaREVQvW9dEKV9LtYK4uJwaVX5z4Lrk7pa2VHcHAULJ7YYb6nbGwZXiWsjuqRJBovsfVvH",
  "key23": "2yoPg2hubjxajLXfQ2iHjFpwJZZAWgxzoQKHdqiUm6349qe56iZXzWJWTGX5nA3FNAGDehHpeMf2VMydxWczbSaN",
  "key24": "4WFKDTfxMM46G1jEqMB18f8zyJTz9LXub6fmK42unvj7yie1muZ1NwnQWqWaSukBrQRyryXPxvzZywvgdx8VhDYP",
  "key25": "3RAFkPJvDHhdDwb3bHAC1FG5eyx389gLf6xkHzcMMHqNcZt76bbDfsPhi24uLfph7rnCtWWvZCzaN5RZqEh9434M",
  "key26": "4YGUd56pWXpHeaHYPV27Rb85SY8R2GQVmgWzrXvT9CdKk9AsesqAgfkK998H3xBsvztgUKqRrGz9U7wM6sFpg6dg",
  "key27": "4D8a6kHP34ArVbanqoLbrtGZMitWvBoSjxMAzMgqhiWdjHYJY1RsWtzfRRcipzAfkKFRRZFpPMALAs9RHLhGgXVf",
  "key28": "4Y5rWqQdarmYv3BR6TPrz1e7ATATFUjFkvudDfX78YikRd4tfU4WqKw1kLyjdPsdHfcjuwV4D47RjLT9hwFp5xJs",
  "key29": "oxZ33PP6PMZ8ZQvKwkz5YxAKWLWiJgrdLqXEiMB6mCyy4rosic35Vq5imMDyH9Hgm2x9NZ4wxCvzqu7WnAq1XHE",
  "key30": "3wuFcf2NULXxYXTsjKvA2v28k6A4dxTBJtK8bsv8NUVhiSA8Wr7D9JujBzYhLFvAroKrrueTcPcDLoZMCi9DAFUw",
  "key31": "3jfwZuE7w7JZUWQDTn5ypSyY6SMMFSuDKcGtmgPPPW2WqfG7vFgqi9pPzx5FYyRBaqS2B4DGqNhdaE6TaB9Tt8Y9",
  "key32": "2z9qa28Ls1YZc1vHWrFRQb5jpBvCbrH6jZfe9bLUzZVyhBa4VP9scwumgzoAJUSKBNKvUkvePNNpVaJwVEs9qmMp",
  "key33": "22NnqaqcBAjksjbgssGfhSwLEXGMe5Nn6p1YdYJyVYngAyroxBBrbAVwRkkpGQdmDoz4x1suYAgugTZ4qSupugKf",
  "key34": "3xveF8XkpFdsscEygFr2n8cvZJwvn7g7qQfdAeG7S5vL1ZPTYJTxkofvU2EcJLaawRsALEgex6zrZf9g1VFR9Nzc",
  "key35": "o9YtmJdhDNouZmdzba3f3Aqs9ByJfuErgiBpVt8Aksw5qZtYjB58vPbBuxkd6PGm6GcL7imNAVZFi4Se14YfzWe",
  "key36": "2TVWBMFVtNcXHeXD19afsw282q5db9DVKLEUdTscuM9Cdzye5XcTZKaajCjEyokt58zxxKSPa5x8yBfoshSbYbex",
  "key37": "3VYxBBFQQVsXCySbH7E2p69fvNciyjXozJmmqfkon5WxTysdPHzvb66WTfWLmWYkMA3MZQ2TRLnw2FpKhxorzgSo",
  "key38": "3y9WCX175BQ2rDkZ9uCrXJkUgdReBG5DHmkQXymKWKsDBEMtgJ5zKFBEGo96uKALpxu4KH8QGZrNtYtsi6eypGoW",
  "key39": "4LAGqWg84chhbG15XButKMWaR7CaR65JKzsrhM5TuuHHEsyk3rGv8q39g9P4xAxmB8D6qMtH7rJR75Gk9uekUcKM",
  "key40": "3VrEBP3aG4ZV7pw9zxYaPsQq6vXGH7ys3zZrhqJcsZiNK8qnzTABBtnppri8gEMVoEHUwp7fqi6joxuJk2RLw5RZ",
  "key41": "d7dNQgSDPAP7LoRRK3qqTy2NqKPhdCnYrBTVZMMuAi9NaTpp34egkwMeoGg26hcw5erHx5pxUv8Ah9znKH8jLoJ",
  "key42": "2wFDMQ5ds3yU9A13PcfJFCaVK2VmJWqCxSZnf2SSpJegCobK25TYtJ1PzpV9AjY4yCf3rL3TcrkvVnG45SiseFFS",
  "key43": "5MjaczqtpyRciHhQELxvNdH5vVbPxpSUU46vPeWixxptAcLVsiKxyDTLsrLPBMmjJAKBHhDeUPMMKR7tEUEFin4L",
  "key44": "a4k9XKQijFVL6R8hucrE4DrWFKBh85dVNmmaVJEJPhDMTKsPdaTYfw7HaqUW1CrD6Tq1Qyqsim64QwHsNHJN8wu",
  "key45": "2zhM7DXfMJAN93aSNNbJaoZWYrXc3swRDaAoKdh3NnRYq5bPj3mPxSxtdZASmFQGYc6dsBfWYZ5nRw42yepQEB3F",
  "key46": "5eQz2av23tRXmnrqqMJQe6SxVxqzfAAPJ61uxUkqxaVvKavazq1qVeeMHzCzbBWENMSDwXDaJqkGzFmkdeEAB4HP",
  "key47": "44WLzFEiaAcbx4KKaJWEjavmGye1pXU5HerE9Kwiw6vFpB1Ygkq3RBx3YhkfKGGeXKUQnJJUhvGRSxCTkkH6g5X5"
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
