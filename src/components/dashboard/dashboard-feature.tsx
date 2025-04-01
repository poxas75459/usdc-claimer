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
    "tPvh23VF7pavtjwSs7Vp2ZPy64y9sbdD1j9EdaP8MVr1pYRSjMyroEdzGuEoLxSe6u3LUDv2MYvqHdZfsBr1JrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tCuGeYEsNmyQij7HNvWzgrjp8TNNTTi5Cayk1DXPTdc7zYcvGhb1sFa8ompPG7mS8LvQi7ukJuCR9m7qnJ1Dffk",
  "key1": "5CLJeeH9Ns4Z5uMKRN3Ja7R8xHKCMDAmBvH52XgbSsVwXWyneCanb8fFrVRmwLq8vWDHP4FPAqPBK6cXmWiBseZR",
  "key2": "3wuNTp4Rt28hp1ixR1t7myNHcxTUvutFQokrNqoKCsRVBRyyyGBfvsLGXLGGv3DRSpK1mB4zox55pKvXssXV27ZT",
  "key3": "5rprUHeNaMcXPMYKujuiv5CQkWMWcqpe3cn4nri7darn9JK2MR6mbteAWetoWom2Qx5HESccr8j5HkPHpvafyGHa",
  "key4": "5GUPy7SnMUVbYbCtbP9TMxogrNRRAanuXBGwoJfZx2LbiBi1VWCR5Z6t4jdXt1x3JxKDwA3Cd3PQnnmxF2JbJQrb",
  "key5": "5hRW5PVYpVFF9LsCwQTLZUCYQyBAif9q2SFWCyt4LgDqFWo8MV35CvpnFJDhmHtrQGWQQPWc8Q1o81hXHqD9wuX8",
  "key6": "BEqTNxoAHfvR4VUGYvXKApjAQq1Z25D7vycf9BoA785diuupGrvHmcL93j49As3XD5ZyycxRxfrdcimZ7PKpCLE",
  "key7": "4H87KseUDJXgb5y2LnFMd5BrYVFPeewKhcDudyR33X2g4rWaNS3Gpj9KUvM3MAht1r8XSmVUUhdcM63uTfv9JC4K",
  "key8": "2Sb8wttYcAXUeLjB7T2nK1kXHULpn7bVqxTzTNrR4ya67XPAoZTzx3MkLV145sYVqcZBphjuZqJodH7ASvAbAkTG",
  "key9": "xyKd9ReykfFdp51L5cUvCYRL38Es7QFtTPcpwkFThtzYB2G8NY93x8F8BJs6kRk4udDrBKeBBvBcptjFv1y2Rgp",
  "key10": "3Quck2FHvmigdVCm2anparFzHL8BQcwj6G628p5NNTB7obuX5CLHHRwBnGtpDyoWCsYmxZWCP7wteknXJZ9nCKuo",
  "key11": "38uNBCmzQ7PtdCkmMmZnujQM7F5heXSasLm4A82Zai2pwrerFhfF6FJCQZk8Yfap6cmFzoyE4FehanGF2oJqj11S",
  "key12": "3NqFvGamfYRTYUyUBRUYqpjwRbbCkaLTiWBdru8x91sE3HaYpR4N97DA4RUqfAiJgvSoKhA9VNKe4R5jq1wfFgzX",
  "key13": "f8cdDvxdcixzVNHmoh6w9qL8Gw2mcuxiNZQuxpowX2LMApyudPhJRdzd8nzf25KhrYr1gTF3dugYZZJ5xwfgwJ3",
  "key14": "2kaeaWKVz7FsCer3AqNuW9VwvAZmhupCCNt3ryYsBaGb53Mfacg7Zet53QUfhGeCzFexAkzaydr1QAQPNph4Rs6C",
  "key15": "RgdCJJTzKXMLwYHhw964UtjjiG47uWNBYKzdqR4jH8xWRLjKA82dtVdCgp1eX4E1Btw9G7p3q6T7iaMAH7uYVSi",
  "key16": "4WzQXCVymuRgbd5Tztx5vN4oJs397YHZkw1wFNtrQBsQVPa5QgCETrjZU3ePnKZCXywP8KD64aEYEdXHa4CWCjsh",
  "key17": "ZEn8MJtixZEk2yTHfAFtX6UtK6x3rqV7YQqbi8VSZo5r6bUyJZ8mZeNVzvfN5eBFUkFUvJU26qpuZEg5aNZGJXi",
  "key18": "vF72DBtsUrvEJfNjzyNqmrRimoiXdyCqh72U9mNJueS2UFoXv8HWy6AQyZp3Tgqcw46oucWbKHC3XB18P9RwsoN",
  "key19": "5FjrpDAio4AqMoLBfhRbBNrMjK846kFp3zoq3vPRY7KuZ6uCQ2GZnadRakPHTEjdHKZc191EbvxkW4osZ9zpMAsK",
  "key20": "5e4haTNrVgjbqXjmdsbH1g1Vj1t4YUka4K5SCeBCPoAmh9EbLL6CXSFYrsDjAwE3Y2d3yknLHzfGcPKpXjmdPhG2",
  "key21": "EcrwQDMuLCEJnXyqq56FXPtTy1fqN4cBSsqEcPNwVaun5ANeSEfmChgUPFRvN7tXPUUMSSq1GTSKH1AFPy1weJe",
  "key22": "5vQT8KMfatv6rnwepJXvNRjCVAXu3wKAqXF1oem822EJCxR1kTSMqHoYKLcBCFGWS76hA8yNidQvFMCyWaTtM5DE",
  "key23": "4sZHm1dSn4t6LZrZfSNXeWMvkuk6PTff99YXqWDDaW5QEqMMxdVSu8tL5AARiVq9FMVuaQbuqAo9swEFGmcSXxRe",
  "key24": "66wudwPQLi49hHv7FNpFZNGmgQ3MjWcKsoo538mpR8iguZMi9FAKkdbRSHuv9nQKCcGhessSMaVB4AJH7Fydcpu6",
  "key25": "47Xai6UkNhcwWVdbuGPuAUXgxuT9idAX7uBJBsi9F6eCTV8rL46Em6vQsS4qCts9RZ36zqmrph5vg84iHpNijJv7",
  "key26": "5FYemdUNd66kosM4dmfFUF49YbZkjnHjFWZqfsj1cFyVyVAWd77hvpJwZxp2mDoZawBYYhcJzWibTBwK2kMYTjUj",
  "key27": "5tLcDGF8XkpZLDtQXQeG1XK9rud9FfvppKEDiUmzLYwAMRAwF99LzkyZ2bqQhNuLexc8p7eRaNZTqnnTsmYPfaHF",
  "key28": "BjZijQ566K2jTp9YFmxddd7oQCi4JwbB2PKNrNFwYnAkGXMWacsK5VtGeWLMB919abmPxXAv4doVceLwUHMJWQR",
  "key29": "39CSNS9DrfKR37kkXU41WAk9Qem7Aw81RkGU1iD2tvm2zk3WjU8hmg8rTJiNrJkbFcvyaLDS5Gj6YN2kFQopCgi",
  "key30": "5Yt8iWF9stY7SdXAa6RVB4hDuHFjaSm6Vzpc1RRQyBdWE6N6rSjx8222BxWKcFQHuJE5cACdtu6U3xjFVy9aaFyS",
  "key31": "BDv6eTectqdGSGTSecuJqX5qRDrTEQsbvo3D9pV8YtxbW8x3foqtKVhNxWijE8PJRU3x6PNB81xV7skkcYgzgap",
  "key32": "Sc1QhEvRZCy5ep4UWxJM2ehDdiVMx8F2GdKPkV3vtdqrEqt8iVzttczQUgr9ZrbaWAdDfuVTfT3kB88CWem6KAF",
  "key33": "35zZ3rMqa2UKauV78gt8aneoW6wBnb5b1zci2NXH5y4iFfzLC1UXscoeEH2FotxsFdqEEvVR8j4sCnAEtTYayWBQ",
  "key34": "2uiqmAsyAzA7VN3wVUKNPSE2Rsqxa9DJYJxTcDutLHTSinThz1DCZyhKGjGUCoj1ayeWdawe7qQjJ4UmMxhXnA2B",
  "key35": "vff1WihkJNV4eYPnqUPVVooLfjLRJNgWPz1aFeynz1dKkkc4FY217z9pD5FTKR6Rs5XNZnsBgRPdDmUNDwNij4C",
  "key36": "2csBiS95fNWMsUYeFeUu2Ns7gcsx68n4Byrv5wbX4VHhumnamsr7N3a2Nu1Wox8UkDqqRuD5wCT5ZmKA8en2B16c",
  "key37": "223XWVcnY8WqJb8pMNgfMS5BMBDbRxH3PF9emDGCP7PtUdaUNyxsGjY7V5Z8h2RpKfnxpiwQYQsVdUjKGRdNcMZT",
  "key38": "2cDKFudorLqPC9Z1hf7ZXUe2v8XA3ibsaF716UX6aWcsYhfX8zvzMwoygHvnMHhHvcfgXR6f2NkLE1uTLF6Q1mwQ"
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
