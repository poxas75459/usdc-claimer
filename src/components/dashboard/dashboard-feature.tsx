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
    "4p1XL2r485iWRmisnDEThKcsAKr5RGNYktiFDK8yT8ATbLkVS4Rhuurcnxp9qqoCohEs9EK34meTBBqjJRBVdsQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e7TYKPNRYyUJMYCfw1cFeSF2EH9Zq672AH7zosYR5pFd6pdyA8q1bTFNLtaPCA3NGjA4Ljf1Jzanr16V9EoGD95",
  "key1": "MSScPKgCFfyh7bxyYJ7jvHzkiHgePF129VFeXuhDzbDrnKVEkFWXA5EmYjYDaZhP1YHFmFz4tGwK3MskPcqESpB",
  "key2": "5SLRZL78M8fnnSgvPkfuL48rTjqdCjaxqEutq34zwqepno9Je5W53LvQGFQaMhqHFMcZzGLwKHimw1VQCb6oxQAn",
  "key3": "5gYjVnXB3LvhFwdSCYYuXUYVppn59uRokTNF1A7JQpEmWCSKk5nDHV1JwjwoZjdXdx3Js7CTLMfuwxCBnZErMfqS",
  "key4": "3qFVUKrKsvhYrkSgp71umBwaXGizZJDegf81U7XR5NvTcvMPVxGQkeywk5nYftG8iRyovK82uBGRX5ig7RHCDLF7",
  "key5": "5HXHi1jkSFBEWEC14SCvo5jsbutnLrA3PeiTTCx1hz2ARSkE5hLxKDUQAR3g6gfSB8rcXakbDoiFHn1r65EnjjPE",
  "key6": "2PXT84XbqcLWRhffjLfJkJF4ssDK9BSW6Bej4bSuz5Le8kRNpYXNSsonBXAKTUE4uCZwyU8xpsY7B88iykk9sUox",
  "key7": "5gSBCpFbuVC5UZr5vqPpN3fxtMQWQ3mYfnxdgsK9Q9oua8s9xCpgNrgNrJ2fvQF8xVfkqxUKYCAZ2iKYKN1w81P6",
  "key8": "2UGhfQbRmNsDGrUSCimo8rsXdEsbeYgJMFKRRPeMTe9VP5SrKoJm29PwUwMTL6FTXk6uT9eRjpbWANN9vjqiN7SP",
  "key9": "2nQvAQ9yZ75xnsKiFEod7bjAMk3Pwa94jH7BXBtipXF5tjc5p5HMyG9PqdZs9EGV2nrK9P1ommRR7fR27xigjGmW",
  "key10": "3y2ebeFVpGqGpASxvPF756XpWFEhYYEPeVR94At273tNRdKgd8DrtU1JEUp5qEgzQi2ABqjTUYifqXt6RgEC5BvG",
  "key11": "3pvW6JbGnr9EyjVEPqGTqhbVtnvAiv2nfGJPVFqV5YbHkHiXYWTFNcMVKwpFexTtLALeRw7mfbrSF7pxM7ey4kXC",
  "key12": "547msvy5yyrheDcJ1aJTge3cfXSYk2YDiz7PyF2xtc3un5oJWNBnV5tykoLH4JzFJ37YyJbbfyXNWvV3SY3GPVfH",
  "key13": "4sGNBp9FGBPmfXnYXfJbXArJYajGUmkFyUxF8jomC5p6cCsXu9sZstHuc113H48QZmQCACpuzEi6qqUUJoZTHa5w",
  "key14": "5AAsVxmG4nXaPU3YvA3r9pXp2T3NVWNmqKaWcAvShqrmpYnLtyn1Ae8h4s9N1x6PTB9iCFFdA71YHCV72EYS5egG",
  "key15": "7XFkeCYXzQDq1ERb7DgcMxT5jS4bYxdaJNCwBTVY3s4DRvnNL2eXW2iSANMBmUhkeAQo3MD3AsPDxFfSy1v7Fes",
  "key16": "ZcwEjC8X8V4EXd9xM33KVjKQ7kwdXozCwzGcmGK6gMthrhojp2VYzAaveKTuHwxmqobCWWgwYNKjAToMbaeXdny",
  "key17": "5hLesEbDBPKe2XFr1RPfubLkpQuaAipHJiNFcN6XwSZZBxtQkR2gX3wyysnpvowFP2W1cVwBcAdFQGvWtr2Ak5Hu",
  "key18": "67BA8Ni3mi1q49fThYRRct42zvmSkEadD5xLfCbBzC4vgNnNvdyF6n18Q8SE82kfwkRMd2F7Bm2vLFrYDiHZxBHz",
  "key19": "3fEn5QPpdwust7nGNzESDTrTWFAmmwT6r3nFTMDMoqgsCfBXfHtdPLtL8eqAD9uTmQdsmZhxFkZGoEK9sx4nUcfF",
  "key20": "2HE9J8rwkTWRSDrdvjSKypirU7s8sUQU8tjshP3yDj8Xs7Me3JKDrEbL1BhYeA3zAo3Cwb6ujH1GcrePevMaBLKb",
  "key21": "3JQ1tJ3M2L3htY8uB8xkQXkg4zNSohv8R17sonhBFgtj9HFsWFFRZFsPuDJzSRf52HtnUuh8qB3N5m4ZY3FiMtTf",
  "key22": "5H35QC5dMWxisc5npHTW6XQKk58Tc5mCZjDDmLjrkoYHAHaNVJCfu67YjAUDPPS6MPzBksGz29UG59VqTUZJzjo5",
  "key23": "48BKRkpVGpoFGbyZyrQijhiEzNQmn1PpjBDsN8QdqACBfSGLbAEdU8FvRemu8H354JBnbYW5s8kfzhdQYmuWcm5v",
  "key24": "2EydMYAaH7QXLNwD1HkAxFzvMQaEJ4yFbXDVfWRRXKL7VnkkwPvsnmg3D6T2Co6q9PqZS5tXdXQ8rMjhpAe27kkQ",
  "key25": "42smGaXKL2yM5d9xShEhHbD8QonvfD3UvbDiDGNcB5siMDq9zVtqHvSw5ZDrXFzpWgCqad4Aj1VXkTfbvKuLAEtE",
  "key26": "2dCjNGcgpqEa4DKbb3dTUBGh3Xai1JXzjqh3RMdwzdm5ZZYbwb8T1GFMRBqrmC43cddXEJMnW2pHzQ13djfFuzgh",
  "key27": "5yNcUcJA33EZNFiWbMeBQuUEECvWZGdr2kbtRqeUwbrUwjo21hFu1m66D1t9rHt5no5EUsedN6dU1jRDDrQS4cNS",
  "key28": "3dToArf6MXwpd87zz8L1iXUmc6AP6Lp3MogPBjoScv1hdAZaJTDAmtp8WPVFTmZs5r7dR8uusp16We1Xq1aNYfni",
  "key29": "2LJNXj7fCrcp4o1xfj6X7pUnphZcf7i1k3fyMSxYH1k9QftaEoNM8zUivtWLJAUovL7f7Bfr92eEN3Mhd65yfa9c",
  "key30": "5Y1FuUCQ8BMUJ3wRqT89is4iB2dueEftzGyMG3vBTbk4Zea2fcNafZhQwSLkqnjqwgcENgfRCd9BHKZJkbwvsvzJ",
  "key31": "uR1kQuPoo2SCJ6VAD2GLP4Y1rks9a7Us2imSvTQWVf33SUZPfmYRHwYCjpDJQEuL1eYynsDnADTXuWiUmiyYFmB",
  "key32": "4TmNoS5cWdAuDswiHPK3CYbgKv4e6cLPpGZXzEFhbe6TeWsincjtcdM5hyeHeTPMXFCnHaa2svkpQwSqEADPGycx",
  "key33": "4GZxs2Wfz1TeHnq3vMYFfGQJDzf1SYKm4WQrc3JFXi6AV6Ppx87V32MwT6wWKjnW3cvKGwUaBSoJ9pJSv7qnZcrN",
  "key34": "5yYPv9gkBRrJSeNvCoK9LXZch8wcHdtTKhn1LNGhSqqVkAstwZxBhtNZTUrozjKr2B8AT5a9RfuVzvWAzWPvmeJT",
  "key35": "39jsC32ef3eNGHvJ7ALtM5QT7zBGKYy6ojxhkLMt6GF5RkyjQJtQk9wUckKTVUjBZqAPNiX4HAo6rZgrZdckGbQU",
  "key36": "2CMTwBKPWu5i8Sov3j2fFF6QZyJ7A7uDj7TrP6Cz3Gx3RQDdaS12HHycMJTLQm9LbKRWJZgQzxvY12U19BJaQzC7",
  "key37": "2xa6sYYJQQsFsPATswwETsaJvYv9wJHZbtqqgjyxFUAL1jPQzMpXkcEK81Gj69wmFvCbjA2yrF3kApWRmRJwf956",
  "key38": "2AdtnkomwLk8dFVvkamdkHPGdQuYiCHVnPJsW5JDz2N5dZjj3yKAy9Gu4dpwhQgTvegAXD2eahrsHGtdmGMxNzHU",
  "key39": "44jVn9HpaNWSSf9hEWQ4BKxLZmv5qfAJXBTjvXvgoXjXWTgc1zErJq8XoHBf2dDsk8TE6yMGF3JfJALZ7FGwztjp",
  "key40": "3FyRj6RyMFmuuzr4kweh53yGhbLTqT3HfWgG9Uqvezu8dRAqPEkWzYk3CGcdWQwu5uSGihVSvKphkYWqPM4YRCWx",
  "key41": "4TYfE6eK67rpuAheDKBAbRiVa1BcCaKXeRJHSriggVmXcx6DvbcAEeqLkVNangGk42izHUmqurftr7Mg7Jvp2eqE",
  "key42": "4qPiGvBaFLV2cu8DsBbQwNeWQr4xTqX9eFKztc22kUmnEMc3LBnxCDhdK2Gd7d8LGX3znqPGESGffVz7QgDQSxWS",
  "key43": "Y9Xa2Wd7vj68DTgJ7tVd6jxexGvwN9MgtTi6vaApArjujSby1SdG3CCVzH3rb4MgcBwbdyacgwRBWBVxZqUdky4",
  "key44": "4tM4YEyGzPk8i7J1WwxyofyHeMoskeezzQpu8Cyp5SZjpgXh7bCyWyNJkCNJjAH7VPFqYkNouutdoKweTHENVNgk",
  "key45": "3B1iLZeVuDHhvGRqQZX2gUJHaspFbBU5Lcv1m3wvBMtE4UT17MN56R2jbwv2QDM439YfZ2erb3sfMwyRE7CKii4k",
  "key46": "KSreidgcKPLdU7eT8unJ8t8ucV7XG6npCg6zuQYHravtzbBoRBZDS9VQHaoA6rpa9dRnt99dUXLzozAiz7Bi9yd",
  "key47": "37vAVV7xQw9MBbifuKRCYidP51EjyN32ZMnreVArpyicdm34njfeM2Sbrazk35XqMu5cNpA7DKAWiMByXG4Apkvt",
  "key48": "h9NviKVyVTHFG72Ta9hueCuvECoveRtyej4fLJ96YVYuGado3gfFA1ojmxdHgevVDYokMD3gBiCwJfKnscXUgCg"
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
