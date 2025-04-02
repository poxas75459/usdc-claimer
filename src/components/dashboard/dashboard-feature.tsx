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
    "2YNp8b6HGZKRnBVc8v6dSh7BnPtiWvuuDEac7Nq69sUpMs63ZdqSUpJzgQCNanpgAfVw2dgpEW9MXtSN6d3DhT1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FimDQCAGV73QrVj3SiKhqVTjQMmcq6dWybugHNR7exUijpMqpwgvXQtMRkSLhFQLNhzmAVH8UfjUt95d4BohgQu",
  "key1": "5rk7sDjQ9j6fagpVsMMHnASmqL682tEaaBXbbHBq3qcu566yogEhTckRQs2PdUyPxXKmRpNz6Dr2r1Ukregf95rL",
  "key2": "5kaWVmCKcSSs4GubAZ7ZCgKsSPMCnY4o4h2F8TsGP8Xw8ftDMXd1TKLBGf3W3ufk2qL5Lgu3SisoKY2hyTpDQ16a",
  "key3": "QC7mSWiyh81WEoRJRLFy219JxWNBZHVUJ4SeW62pMe8YxsWaUTU3miqLmuTqJ4MSvJ8HevzsR1UeXjNbYgpE88S",
  "key4": "7Wb7H5zeU7dr29AsbuSKfg67kwdzxyoPWvE4ETsWNGMcK9AHywtrfNt8vAxrwU4Ticif8JH5JASAojuf1GGc4dd",
  "key5": "6EWSkKaxLaY3oBAbC681mh1uqbZnhhc8Agjdmw24R1AjKh1ABtw3gCyDKj5sdKr57hw9t8aJcMzXkDcWE44nY5V",
  "key6": "38dCUHoGLUcR8kP6K162iurLj465vcX8xNpyucYwRe2rxrefRHYnUd7quq91rA5jWuzDxnFdKUtCk8j2QJ4qquNp",
  "key7": "4UMMmkQzyD5HkHUpywpqJqAuFsbnHrA3cuNh8HyD23Xa6FycBHzYhHGLLXGAQFVeABShzW2AFyqDTvT9G3nTj5St",
  "key8": "BT2Ah23HJZSLN4qJaLCeifucg7NioF2GcF9QrVo2HSLngxods2Za2H5HHNRgX6LGSFmaBmsGZnBtgE4kZz8Wuw9",
  "key9": "2r4NS37jdEqGRPx16Syt89zze8HYAcaZNbC3axutSvsy81sKgn15S7o29tKiDnFFtLb86yiPk9cmyrZNS72MXKoj",
  "key10": "5GgFCJfKUapaJqwYDgjqjHjMxyUuzLX19y4HZCyVqY7cqhhjiWAagcRY2RvfXjcXMmwVHDPNNDKudSJyDP8iH9Jk",
  "key11": "2QXqbMTnSj4xzmeGCBM5FbyKuJkMSmQbZb5qQbch3So52QhDYDjsQnDovhJSxiUHSmo5UeozZZQdZXoKb7871zV3",
  "key12": "3C6H1en2JwRXkrwx3YfVJvE7PxvkJ7pS9GMNVdYd2xicPWhb5eJgkJxrddT4LnN82i1uEKdNVaRQsbDrzzxMPDxD",
  "key13": "2wLTCX3mdvPht7YPuCBH9puEyBR8xTccLtUtFjyykA9kqYYyfMWD9mgmjggQjkAT6WxSrGCTWNaJViEKxc1MTBMU",
  "key14": "4ZYNwXE1xsUjUBXQaJamgh1XrZzm16cZc2zmmF8NSFdj554iFedT2K4vQAUYA4uP3AABgxSptDGqVdk6awApASob",
  "key15": "4Vtjrj6d9iVw3T79t2fbUHHPmAxYyG2eGsEx2JWNm3EB7zNXhh2bhDGC6Xxe7nGhcqVHR92Xp3NHmkeHxrgWMJJ2",
  "key16": "56NXGEEmTP95mYphMRxN8nzU9omVGvV1YtNttU4F2K2QceCWCbgn7EFPe1dwbsERR8ePvsqMLzrMh27jbvf3KD5j",
  "key17": "45JKdEf5k2qxo18RSPb8SNSUayrfmUKNMbvxQCsNTqNS7hgPKiMhEYVGVdbej2Y3wNDtMBBEh2Fx9iVBj1qo2wG4",
  "key18": "5a65JJr5Bx7cvrWxXwH6PEUa3RMeawYdqiYSUV4UdCEkCdCoU2HwhbSrhSAuJbkKkuiPy7LN5RZZPaq9KcuLAXCt",
  "key19": "4r6nsWMfSVjRTUo2vPSXGQD33FsQGDYJhiWiw7CijDgo12CMqRQhgowRKJV6BdLqgYxwXJJhKHbgzbC3jG34MmF2",
  "key20": "2DiFTm8MikuLrSnszwC7d8p3Wb2qsLxsDVZXavKnuNqYGNprrf2BUPgUn7a3n5AesZ7XejcjmycXHy1MGdY1pL9e",
  "key21": "5z194ybM9htNfJq7APHKyz9fbCWnBr2NiYLVkfNtCX759HiJbJLW5B7vC7Y352KW2vLNAfXrP13nJqPVEtxbQqQE",
  "key22": "5V7Xw36grGDh7MFP3PE2s7KKaKngtpq7ApeZUV3WityhZp7j3w3qGuEArr1MZpk7LgQkuymtWU1j68xPZrjp5on7",
  "key23": "5BBRWzqzzfCdiJSJzqkJENm4SXpM1C3jrSnKW2g27pMo6KjP1eQtqsMHBULhguKWgUZjBngPmz4WauEwm4myuygd",
  "key24": "5AM3BWDS3aunoGM341C8j3KxFLtL4NMzgesDaZXVKJ3128dy81vF8TASARHt7xqPyJHzc8Hxtgr4EpZ9V6Gdgj2u",
  "key25": "EZTEZcabKEsnkrjzaP1PwBXYfdwDbqWssUPb9isQobtGKqNXHSxr6spAHFiWe7NTtvhFNqh3kEkn2gTft4vRXJX",
  "key26": "s5zP4JENQKLeHSEK3McywLNjf654VKg3wVXdqTHqLEtm3vwswpLJ2ujHh3hWJgHHhucgocpzDkgdv2PPLQV9SKG",
  "key27": "37YjWYDNWga3jdoq3SZvyn8n3AeCa3xN38nLtt241PFDxSKDupD1CZBV1fbr1bjaHCVdZMv26EYoKfY5Zzv4RUoo",
  "key28": "2nXihDeNrEabBKigKD5DkqHkk6D8Lwt4ncBDtNF8esdRGz58yPKhkA1ZQYwpAnyvux3ykq3SFK59MzhYU3KdJw93",
  "key29": "4jAJT8m9usY45WUVGhx1MXsPthkgW79TzCW9RE32KkvQZUzUBuJFxhhiJCJVsw11nE6RbetezCya4626TWExfnNW",
  "key30": "hES9XY2DnW8hbubqzRvpjHFwmiVcBZWzWN1vzuDymansmr4wUYFtxbJspQeV1wvYs6Mm7VLbaKjNwfqkhU8s7V7",
  "key31": "5pdfhtRcVLhtigP1Hv5DRfef7nXjed6SEtth4pc7fKcckyvktN1j3AQAwN5f5QDYcxbr1SRbyHwgdAhpjGU4197V",
  "key32": "3sBX89z4vgWRPhnqNEgc6YnpM5jWdsLaiTVU5eZP8gPfk4GwiEw43psysx3kqxZz6SdsviLRX5MZfyhFfqMBomC8",
  "key33": "564tCrCihczhbwUfXX5WLbGM9P1h8yRpvm7pXXM2TbNSvYvYCXA4nWd1TB9xKy8TNcaNARbGQqxxqbqbtUhvnwYh",
  "key34": "4fJNGEA3T7bGkGsKjFW8H9ZAbynZoU2PaT43fEkVJqHgL3QGtvz8yZnRXUAhRL9xBosKCmHPxqErsKGECuvQG4pX",
  "key35": "3RZuerS5zY4p5kXvk9xXvjFKKXvLQpqZjwEFeCvAFeMS8eaPUcBCaN7Skba9kGa5a86Nxbgx3UBYChkyTeQfu1xy",
  "key36": "39rcQ7WxzUwRibc4BA7FC3m4ipEAFKjdhmpaNoWyDjEE6n2Zfpqvskh1RXaZwpjtskuLpLC6CgTEzxNEUvRhN5uT",
  "key37": "428M8taBEgyyY8sQzHgiiW2ZxmFZybYpNLuaWpPSNwmDe3NLeBbjrt5B7wiPub9wWW11LouUHvYqPcgi2FUMX1C6"
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
