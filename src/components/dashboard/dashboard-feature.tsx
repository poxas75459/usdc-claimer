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
    "8uLfUA4KZcpbaAYQAyjafmhrzP8KbtyJqoHzFGrx7CexyCkUc4gQB6ChHiYbW2MRKP3aHe7CgXH3tj12m496WTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ygwwA7BVK8NjdhijU48uuaDPPMTrGvjkVicPLNivCD5hfC3kKUED97sPNKa1DEoLasdgh58Fzm1qXJR44TNGohf",
  "key1": "ngRFXTD49SDpsFW2a23j7EGhzhabcMEYmQ3deeWqqyTGHRCPHQfCk6GecFnRXXeF1CkbreLFyz2S85Sm4ne6zF6",
  "key2": "4HTKqddrihmufkgMspBJZC5W1YVSmLmTpJcuWJhKJdrkAhkPxwRCQERRNuscz32JphZs3kGnPSPVM5RqBH51wUUL",
  "key3": "3pEA43FBn6Zw8WwWhpq6hsyNnt4V2vHT8m11E1gnZd1h8cNny9gQ2bvxC1dW8D2WxMzEwX6tHzZnUj2KDZvUmGkW",
  "key4": "pkBnorWkUP7MNnfGURfL8zTkPtbAC8XYw7TMwAJwBoKJseHyh8wWKzHmYM3XJmuMdqao2GW7wjGHWC9unjVzYPB",
  "key5": "3n4zXL2Bs6zVfoCgRb2VxfkCECGiZVkJHooFHwMwEj6XatJYrsHqGMgffbvWd6tL21J24XH7FfgCVL3b5G7w35HN",
  "key6": "62Z7dCqiYAHrdjdwC87JjysxxGYJVBRge9GiYT7nH8x79qeq1TELmaaMLBVfrGByJJd6MsNcGtc5D6XFmM9oYsfp",
  "key7": "4eERySsW7HH1eARjnMT1zTXRd1FQvvhUR6WbKrv8t9t6GNP6hJhk6Fadfmk1pVHtbcPphxfvXpULAdMFhgWv192e",
  "key8": "54i1WaCpG8zXXzk3DoyMebcuhcBLYnHUt2c63o1ttwctuWyeVgNAWYUgDfqhXj9xxDNQa31qibuYkcRvVNfZ4j5e",
  "key9": "5sgo66m3d1yXLUrTwtXeGZnR2BhYK19hJk39NGhCsLjmRb4ERvAe51XDUyvXWWjVPSQ4xgyfuw57WXewAFqsAz1o",
  "key10": "5eFgBdwVCkfWbkmogHjnY4Soeach1F94oPbWnPUUHSUjkxWeTccmSCQNDahNccjodGNGcDhPvyME6gCoVXhv7hPA",
  "key11": "54tec4LPR13hgmRbYNxe4td8Wdc1guVEHe8fEhp8yoHtSca5a9WwoW6FqrpcZyWod276Hz19nQPHP7QecY1ydg1q",
  "key12": "2bF9ELwRvRiSCZnduo1BmDzpi22yPryBGG3B1LpBhs1Hu9cNDKE68qGug4rDsfnR9bkDGDzZLECsCFTZxom7ahP9",
  "key13": "24M3gQ3XLLpiiqVJz91UKC4dDCfhdmjetiPDB3z3ms6Mwyp8S5KKeGKxhz88uXdQdFurm8HCEmFAFf2ekUy4NjDk",
  "key14": "qyg5JRv9cuzTbmyJQQS6QpgBW7enFZEAkNAZ2JZL6RWKCEuXJzfHQ42mCC6c2ytMiWT4XgY8LRrCubqmgydB3iB",
  "key15": "4oEWMXugwVuM17Y3fwSHhocbP9zCjwxVmYVrrkGPRaiF38hkrLSsJLk1LsG5rsNBnvca7pLsfirjcC8KH57p44CP",
  "key16": "5y5SM6epr6wVW8XMPvgLaRR9GP925iY8CMLDqG6AEda2TXf7gYCsUqLDhm6rCfmP6ppQqBCWLgYdXMQxadmzFSB9",
  "key17": "2tjuahQaX1zRtRCurTzXR158pQzWWm8hcY3TmFeUXRPckdx2PHiMeayRexTPDQKrefXE43jXmtG7nZA9v85zkjHB",
  "key18": "28WdwwUkrhxZHL5HrmAgZUQUMpvUSYojjpg7PWHtgrDVKVprinagRTkRvhKDVSBbXR9x6THrJLCNFndynsm6hyUB",
  "key19": "5xa8hX4bi54EFdkiervgrAmaAhJFo9bsmGSSkXUoMASTBd7daEoWpciEdKZdqtbvTDVn7aw2kjeqBdunaSU5zvLT",
  "key20": "4zyQyXuuix78SXif8MtsY8QCCQbVRHuebHzwtRSE3XetdPcpQz4LZyE3Nhyw8awYFA7X4HMWXcnm8WwZTvD5WoBq",
  "key21": "5EhfUeRRS5JVUrMPxe7UgRo3ZcGSGmRuRGkQC6eeDYFXXxKiJyXqYCab3Hz8BjKk8pdr8a2a3VPwnDWf3p8uqZci",
  "key22": "Sghekk8iGy68rHGF67Aev4aWo3aLwVPzNwycTcpKcNd7osj4ETucsSYS5DgDSHJCYUezh8PaqtEsW1txuWksVFY",
  "key23": "2TVnvCeavsNzVbjrxU8WCA8zzArmgoSF79BA5qjXGUgfsnCp8YjxgiywejVQczVNsu8Mxc2v3yTKsFVVCtXEyumD",
  "key24": "3gf3rQVpRsew19nnuNrspaN9QAFKezwTE2vLGTwRaSPKcvzKHXxszPXF6CVmycNotuBfpiH9ceGNCwaLgUx3Sy1e",
  "key25": "4B3p7WaN5V8jnYm2cKAQTjeymkwieLYrruBtDKDCqAPnqtF9DhZNRRNKUgGih82XDjmBiEcT9LZpm146tFGABXL6",
  "key26": "2GYyQmzYo7eVxsnZs8yv8YGgH83o7cEo9XzayY7UGHmYGGFYN1wpAJxYJvJuB38kadgeweREjC6sfC3T45tJx1Kz",
  "key27": "avFVBdmRojY7uakuRamxKJ4TU7NMbQiByZFpbrbrLHdUACyH7gn4FWWU3Euot2UKE2zhys3buQvuuMD9WAmHGaY",
  "key28": "2XmHebRa2wQpZ8ye2FmwtWLijVqGzZBLqWK79t78HV4jXsMp3JJSBSMneawsKGHYvtmU4aRshWCZuBdzR3Ls8vxh",
  "key29": "2nEQGwkZ2PoN5tXkdsKiSEkLqrJQSbNLvr67yZyCACyJ7fDPTWk1etdNnUpGKNYqj7B3GwQcnuDoadJmtUM54iNV",
  "key30": "4aTQ8puwJZ9txacuxRYwepKKySZFjdqCAsujHMQ6M7wFdiAtG5G1QrRnJL3wViFR2zZwd7ANQEi3jLKrRrKsZT8Z",
  "key31": "52AAKXSwQkqXbNEa27UjGgpYSv3xZvRLusTbNjC9wGhLMNvjYKg1WqDuXHyAyZsQczsWFtEmNVyKD5vMMKU8wquN",
  "key32": "4ABJa1o35z6TrcpxYbeLnXh8U3GuU5Kcs8dARG94ZJ4iLEBcBMHFm3Q6cBXhx6g12mhWeDCAHaTXYC55Hc6ybv7c",
  "key33": "2ix2zyEb9NyLhPGiMuVDJWmYoYc4qxyKHgNm6FAgdpcsdEHovDRkznYwbnfEKrcYMo1woNhdouPtxZh6bLmKyG2y",
  "key34": "4Xiu22fxKepFKiTLYjEsYnU7sD4kDvUMwoYootohrK98CEyiv9F46SRfRqAiNgwkHLkyjJ2YEE3kKg9NRVWvXwB4"
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
