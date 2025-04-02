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
    "2o9XWXVwA11aLnCSnTnpFf8QUsNErP6Kq69tjyjy7J5W6dhcBbqK24VT5Lt7i9j5ygCJaGGHAKaMe2KHRiDvpCKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T4KC2wVBRp8SPYXnad63KgcQ8PG6rx8G8Cdv95VB7XSBhA6zLJKmmfQyTJEWbYYrz7u2D2GEzuyPced3AJxFMJE",
  "key1": "3y6DDGn9B2VJo4RYnpaX1CPJ3cjmPvWUPzXTryDRrPjeHcriMRhDvPh4NEXGXqzXfFVGdddXcd7iTrwYTVydwCKG",
  "key2": "5ah8KPGxVH7YhiZ5mbkosyKLnCzN5fXQYSLXDjcVvAPqmjJjHB7qwUQ5yEDwYZgjb8kYMpPkP9egaRSSVq2V2aoy",
  "key3": "4EFMZ3XryM6F4NXmdDrK96rhmKe73YW81wAGvUrCPJQAtQ5tHR6UkdPcpDBHJ2gem1wNzVghr3fgWEDmhh3mrHN8",
  "key4": "3xgLQ4hAgvjNPfMU8FMepu2BJaCs1GgvnxQegGPHjPxesEBfcCucnR55iLBme8biYbXnQ5BpfAzSkeyZfL8bmqGh",
  "key5": "4Ehgwp3qazEodfb67aK9BzYR1HkqobrEPpuSWyveNbantKDydYLYXhrabSjTEMJqY6tiZjUiignTJancFb4SYEjH",
  "key6": "2yhpGborV6Mg4Vfvr7z8oAAwAwRy8uY5EjZPnZLveEhyxSnz9XNMamX6qaw6GukrDzY8nCiFkW6KvZsWEuA1XChv",
  "key7": "3Km8EyYwn6YJcDUkjUxRJCcp1RjbpA4RU5KhhP3gL594vELpMa5bgZcBJR9NCLuam5VAjYqtTpnhiLrjdNVwegBP",
  "key8": "4LZkDWyo4YPePHbfzzfWkqVAfvR1vi5v2VqUhFgqiEmmz4yFbZ4p1FFDzr9bbG2XbbybJaA4uXh7SQjZ5vvAKyuS",
  "key9": "2JyqFk4mLH428VUcG8Q9kP8WkwkezNQSNCnPL9zhtVZA7AtbRWsyqkvuUYAjbgS73Tc8wKCfDuothPvU9RvyGEnF",
  "key10": "QQxt2GNLF3CnHH4R43gf9A5Wcz6aDEAP5ePxtRNtWCN7qcR9cCrcwesobSLETqHRqkbD7Hx8Jq1bqfUZ9Ze3wKK",
  "key11": "rNyThyC5wR957xFpQ61oc5Qb3dCZiUqQAJm6P2UK3RCAdqz9Xm9upjyqYPxUgBp62qHwvkbwFFSdUweVD3iabq5",
  "key12": "25RRhsKHBnB9dxKN33Hgi7AKJLCk8xvNSBGbb7bzm97tFLKMrCbH2TVAskFeEVANEpV5Yhv1wWK4GNASHkKSnTHp",
  "key13": "2noya7qpigvK9ewgCLxLYMn9BxhyS4HHHQTAXB4aUdmFg6w6rCgz6gtLYgDYsFaowKgaJaGmaoGanhGRCkxHsgeq",
  "key14": "59mdPCaPy3xhrBw4RSPu6tqdp5qEVVxooopcH6dxYRE4mTFtshkahfS1LNnHGS4asyDWDtnG59gg5mZuHFTQ9SFC",
  "key15": "3DLHmUicdPbbm5p4HsQXo3pYvY7fSqrPSauWcUBFEMd1htsovDXrFq1y1p6x2ViG9gtSKjtCZV3i3HKCz9TYSekA",
  "key16": "fs8f1KAoM9vu96wTJ9G3fSvFswfhjxFUKatRZV7RrVQjBst1mZS3JF3yZc7MVutKVahpym5YYp3rbkQUL6jyemg",
  "key17": "4wNTAWTw39t7wLo5Hpdd3iez8iqGtf58jPdtjoxwnJD8CsB2QArWuTYYFZxNjcVUtQcQsw68Ldriwr3YBkw6tDjY",
  "key18": "HtcEv47jK2BYJWV9uY2cBX47UbeVEHF6Vddmbn21KjnyGV93RP2k3uyNyBZwqabBi1S5Spr6zvBkCXwxt83VLGN",
  "key19": "BWZkz6M8F2EVXsA18ijXjiFshMe3F6eF4F5uF4WQ3aByMCCdXWfmMz2QDxrXXw4oXbX6DH2y4HuY4fwtCQ7ctPM",
  "key20": "4VsZAU7MEAwt841pHT1UvNKJeUpy1uVdeCUCb1UmSsb6brvPwxYaUkk5iRWRt26UTag5ajvyy4dGJM7SAU5sb3Dn",
  "key21": "4GeN9yzwAThSYXD1iuGVDk82fyqMNVL7vDiawJY68wqVjK5XMYTkUhsikkLh7EQBmmmbVfvth5Hxz9ha6Rszqt6A",
  "key22": "2M6gNXtA4NBboS6DZCZD4hCcJyvS7GG6M7QQbeqguidVq5dCoatAkPQRcTDKQtLRXptLm5shpAgRrDXiWzfxetrF",
  "key23": "4xpCnYZru6cs3oDout7iUBBxpCVRdAC5w6YU2erhFFiBaJuyM5QhYs8qxWZnRUiebtYZC1nocEZXovNaNi9ZJvqC",
  "key24": "4CFZ7hnv3ydecYn5BdqcGX37ySLYzwPT9dvq4KgkagXgRoLJYHAv5cNmFgeybVoE9CgF2h8XUysTy5FdGfsKu5rG",
  "key25": "25tQPT28oUbhFAZkUyhNWQ1noFWgzV4ic2EuiriSRe8RAxBqZdyoPRy4YkMXZ5dArueJBXD8ChPLeFK7VgpxZWav",
  "key26": "2ofyac9ZLXjeTTYgjJN5aHW9MTXjENi7rfJxhDYJK2Ytq49NsiURTsWE4syM1H6XMB8RHKj555vVTQ9y7KXefDKy",
  "key27": "3CmQnWgD6cJW8Pis1GZ7z8dJCzLEMFUDQcptGR1PWAnPt7zp4jwtM7sNxFQ8afXdpYx1uWSEQogJwhGsRMGsPzW6",
  "key28": "zHPJRoBvAb94XjTbUouAUGWunEyFmaGCuT1nLLQy79Ms14uZpY4cRCpP1Zvb6HPwEWMMfR3zp6Jxfg1V4BjC3Pd",
  "key29": "2mS8vSqcBCugTceeAe2UPsZi4JdrR7s4Y9AXXREPU18r9ZcFZG2g59JgeUvtaK3SfuofgKGe2iZz2111Yhw8uT8j",
  "key30": "2qYs25CHdXH2U1jMqk3xX6SFTwM2k5ge3kKqrFw48bvVXyiAUb3wQEogPTUojA5QhAfUsVsRABN7F3jGp1tw66RC",
  "key31": "64RL7SPYFHcrmagtzEvPC4tYScMb642HRDHxZ5Z6ZAJwcunWHcLJ5nUgTFTbHEJmd1nJthXGHEbUTBXq3NfSKnf6",
  "key32": "4pMMvZjjkVUeRPqtxwnDvvz8PJ4MtRUtKYTV1yrezY14QmWifZ8Yk9rEzZR1wHc3BB6YzqheBA8iQUPemRWeFDJX",
  "key33": "Dxk6EYkPBLU3Uw6rtooScaT572aAGyQJjMD3r9VBZ3pTqYEpaaPGnxJEzc9nZDZexx9nUGW3d5ygQvL8io89XGA",
  "key34": "5WLHB3M9UuwdHXp52M5SSK7VsYmgtr1zTFMe4NdsDjq5VeNGdSbbi1TGLAuz1HBFfot8HUqecyLQ8w8HdBfvcu5N",
  "key35": "53G1FMLdekBvTXUnULEb49ixJLsPhRgoJW6sPHso2PZoP8PtcBHjfxFeWWdku1k3aaAuRaxbBXYBDnMeNZYLHV7A",
  "key36": "2nsZDR6Z2QnG2WCHdiiVxq4PU16UFXTuUHcub7AdaQCnvJMHmAtX4sZadqE6uU9bmXXn1ojTAK5PwcVFRBA2LcXT",
  "key37": "41y7iUr89YSKdG1vPZTr2PYFvDe2HiQHUPUbxGfztbtb3N6SkDpMo7vAGN17LGJnWbCK4VXTTbNyJ2EcZmJDxBUZ",
  "key38": "2wek1XR8p1tPUGyMZ3rsu9oM4tpDsShyEkPg3Bwp8vUZXiSKqFG225oteMnrXsYz3ks5Zcc76FvLGNZ68vVsKH74",
  "key39": "jdvWn9XXMBqyRhQscm9pfz8aZAZZuiijWVnvJZhGK7JJbgnGxWVPzk4UTRKTztBx2im2j8keC346KoVvacZ7RjA",
  "key40": "5K3Rw5JGnUWr9rDkbBpTKaytPTUrKv7Yq3WDXPDHYTSBanTaXZsL8W6QWoafcgaUJB3yLgFYqGkRYYugNa75uwcc",
  "key41": "2zyvah1CQYwABdHK3uBqas2rsFjmkfnpbQYkHim71H7ENEf7BvKHfcPA9esHjL5RBnwfvTLYDyJwMYcXX6zk5YFJ",
  "key42": "61jv2PUhJHEpx5vtiV4Nm7i5gzQ2C5NbyHqy8wjH8yGJReZ5idiXspxi8UJ8X5FmWHiaBJYkDGUxPeipVyT9z33j",
  "key43": "3dxyGq17dv1568UpnLT8gEu2k7bq6oxRUd8zpKMwK2NdMFuTi3wXMHcnKEAP2qptA5fGiQF2so1SsUtnyvzq2HNZ",
  "key44": "2sWUnYqXjYjc9LfDLBnggmnSJj4Kzk53yDkM3unwkBuHQPeVnA1ExTA5ewaKgbXrJap1x18yXvcStyU9Hp3Rdg7q",
  "key45": "MPHLYDzAQ5wjeq6Ps4Hd22K5kMcLZTPUQYJK9CF8tRzJuBH7BXz9YwbqynD8DvpheixncwGNVzgdaVLnoY5TEjF",
  "key46": "2mLPF1KnHYAnzmTFjJD6ja3YYyXqBLeVHUV6SpYJedrkxFF2hG8WQ1fvNimsWNn17YgxWFE8Q5dME9ZwZpaCAvqb",
  "key47": "2xvAcLTcerKiupHNm8ejFZuZTYN3kBTdeAg3Wa1uowq5aDtSas6sYQHQsg6LZTABx7Sbu76amvPAWmWJ4isDUiS2"
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
