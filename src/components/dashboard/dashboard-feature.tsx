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
    "2nVuodZPGZsW1e2hZ2BdT5KPjF5HaDfE9PzAbmhVzHi7SHbWcZc29VDEcLxekiqEhpcBtE9ca8LsPEmfkzScndGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56X6qE6rSg2i2gG5X3KCgAQ9AJdur173Gp4AFF27rapXjCs8E4bbXYQtDQQAm4k5nPsk9EQHkgkSZpDmsqNzkur3",
  "key1": "fkTueALNUoAMb5ziEjDSABuCQzj9L4NV6fkY39BxwrhnRESGjBRbBQbFkxefML8oTUM2mDpjawGmxS81uo62ZbU",
  "key2": "66ztLotcKSADVCKpCKvBsEKStkGoqeEkwwyAryBJFpSCq21qF7goLPHamYVRZFhEYeLUPoCdduV6rbshGaAe5BY6",
  "key3": "49u8B9uhnzXc51utakixN3u7tBPs1LxCnrRz6nXeF1d7yVb5q3GFedLTtNsCtPjnRRQ7bSfiwaeRhNokUkXZbaUj",
  "key4": "22NrdfxiWkuBEXuASW37xQh2AEsjsnYgbnARrvDnRAbYDGFaSUCmDkjv6B9DLzhXGnsGVpdgRHySoXZ7bzYqDMP6",
  "key5": "3pVHM9rdXGJMJAcEGxx4DNpg1C7zxZGydFsCYGWgAimtJCczBkrk4yFwue8jDB9LnjWXd3oba8LCzEfEZXDeFHgV",
  "key6": "RRVEsBVSajFQ4CPPxBsJNEFcbsnJZbHDZTVw5ZGvH8HM8qxMyUG7BpDgvToBMhxrqr15TLcde2jhciMyyKJAg2K",
  "key7": "5jBUntfjbdpccaVTg5AtmxqXwmtQxHBBg41TscRdWsgMWcPdpgk9ecEaTH1AZonRJstPpkZHGFJC5wuRNcatXyhy",
  "key8": "SXnTh2YVd814QHrVPWwZEvBQD6FyGGtMCXLaEdfnoCYwvvG5xAtt2unjC6s7AHTkVsfg5E6QxwFWgg95XMv7KUv",
  "key9": "5dGiq9jzywhM298Z4gY3ejLLmYigwW1n3YJ81PvLQMmcZdsovBzGCcyztVhbHw15DNv6s7X5oisnWCBEuUNqrRhR",
  "key10": "4murrSMW3zKYBtRQusciAJ6vWNhdMxjBBgaCJuirjvbQ6ZFo9KqZTGDKVKiSMEEgs6GC2LdHdPD4mqkFGgHSJJjz",
  "key11": "4NKmNpbK3xC3SJjaZKPzpSNPQcwJuc58czvaXQadisZz67snNPYurtgL6XJFBMcQXsuox9A917pNXnUDaSfP72vh",
  "key12": "2AVxoKQmUcgJB3ARfNUsJ4rEHbJXiwMbvJXiq4aJMbJM8Eft9DLm8oqfnhn1qLzDEUPz9wBzwuyxptNi96RPARCG",
  "key13": "i9Cv52UTYTRVLaNWbL4wiRayqwUBZiLXuWY3KSJngZ7JQXXqCD1Bog49vVQh6Z1mZRc2V5CzhLz7kSmPq3Ff7dc",
  "key14": "UhtGmBRpY6QbsViJ2JQ4K3DpYN8fasoNg6aDnZ7gL8Lj4tTHyhXy6dwEraTo69PU26cQRJ5jSYVu7j3i7UFrjWj",
  "key15": "88N5pGoxUHZWEHEXwkRhYxn7mrhLHURC82uvsZSRDdahXTgXh4xdRx2CcFVcxawCpwT738dtJkei2iqbYQsdpJD",
  "key16": "4cNxjNCH978yuk8M1c2wtRPV8ah5PXavLEp5hmzrBKM3d1XMmS6yKeGV1UduDKmdyXhUtLZo5CsNcMXBFyThpBFW",
  "key17": "2eeJDQ6YgYWXDf7WL9LmQ4qe6xz8iNbUWVabaw7hf2r3FGVpq9wuGoi4f11LXHpksUZQCgGB6V2R1ThG5t4nHtVb",
  "key18": "3TC5v8pyRU9dv3U7vwL5ZTmUaHcjE24wneQXH6xN9s55Ly2YiQxTdfPhz85rr3nJDDMNKMwCxqiw6cQMi5KP97je",
  "key19": "5etjHcwM5C2rdsB59zv6aAdY2sBTHnR9v1NXWZnVNgrpVzymoZkusbXWcNNrPshnfBiCheqdKyiq4XkSF3qKBTuK",
  "key20": "2L2uFEf9HdVuiSyXViQu9TiSh1VbG4PAhKNmEMbET9iufcF8FM2n46GCJKehUAw9ibgWK5dw3CSm6SPBikFiafGG",
  "key21": "4w1xxEF52XKeFf7VhnqMsQnJajHofkBsu89CYJQ3DkGSKG3pZQyaePEYdp8ZwnZEkDsHSzDcs4xpVSAivfF3fUyG",
  "key22": "25npAvUsFTKTbJd3SG3Sorwe4kMUA1SYpoLhr6r94YLu9hhz1M2FuxASSxVrtNTRRbqra1EGp1AXwUPZvp672Njr",
  "key23": "5ULfveZBc1Lk5jCprAXVfqcw77XsdnptCFaLXrfoNwEpsP2yTrpYNHFDaGxGb5SEwezAH74Tthg99nvfPSWhxr5n",
  "key24": "5Gj4kyNMEYJBEkZmHjYjsK2BjMshYnZitt5UDg6hStwD1iw31jDzarfyFVUVFwKW4Au1EtQynmzAo8JAFF65ur1K",
  "key25": "4MiCJ2NTtBYLmCMhjVN4WLDsrouJKF4WStKg8f4gE3jauzp7yU4g6acJ2oPnpzd5UhJwQFayo2KwAF2kMriACR4L",
  "key26": "McyUJUjJizaqxDgnjdvqUYHqv6KNJEwRy1wau8nsYKbXSR6iHvQH2AehyXWJ7rhdKjaK4bnUQsyq312ossL5XcK",
  "key27": "2tN2pUStwZaxkRhUc7tk8PyfKhrwjY5fQ3HXuUJ6SQid2BJWxEkBEzNzdovfCEHuP3MrGsP93KP3biMXzBTC3cKQ",
  "key28": "2xqq8uQqLeVANf8EfJ6SE9FDc162QLCTCgR3gnBuuqm1jZ7cnU2cbgbP4kVscNY61HY3ZRkPiGo2bB5KgBEcV2gw",
  "key29": "4ySJRPjuBctpCmQ2VJ1P6Bs4BFEVwKhdgyf931BjfWfPj1B8Wuw6icX89x1kpoZtgECpgEn6VMGD37YL7Qjx8ciZ",
  "key30": "23QZ3hNWaDSDPEq2hAikfKv4wDSLpoXNbqHuzXhFkyqYixCLT8t2ovdZca5xd9boNm5HYgXuHwR3tkfiNM7HiPk1",
  "key31": "6wz2v5o29TsmyTkbNQPJQkae8Lt8JY5nEfnoKnfQjqCYTJW8Gmgi8fXxNM26MSFsZUBTTCrZHdZHnErVUrwXSjV",
  "key32": "5ez5BH4bqZuYNH3KUGq53cqTKZw5iFiVfPB8NsRyCfnDrYxsC2PxUJHwdHK24yFtqaCtjcewy8Wax1jwWTyhPxJV",
  "key33": "4LYhLGfsMY9VTNuRZzyyvt31wx8nE1F1grmJAAZmbLm6wXKk1DeQTXMjh9r4ZutGRpyAXk1FH8752SPTAPN9iyhm",
  "key34": "oFEZ4mWPWDLDB6Gj8apWQudXDLRemXwmHwztDph81f2NDRaetvHHUNKz8AGoK2atW1dHmJmo1379PKNntVZ1ACX",
  "key35": "5MgJn85U9EKskQXAR6A2Hi4g9MXUJpebGfHXSd3dFF76tBYXQyFPCzwVQZNd2zr1dGpRTjdudkpn7Y9NnqPVBfYz",
  "key36": "2ZCoeQXy6UyKS2sTh2Wqs23chb7Lx3gidvF1db2Q2fcn7Q4VeKkJDXdGV5Ls4tHLDfdh6ipy1w3QPkewbwcbJ2ez",
  "key37": "Roag8JRJeNwCBJLEYLQZ76Gkg8b9pxXaq1ju4vP2KDbn8L9uzGKV3jWtgopaJVsX3E31UQEYMawKkskTPXH76zR",
  "key38": "4BtetoH2WJWNNz76FTbjbpSNmBQasdGv6ozDpgKe26dnxtY21dZh9rRgdFyUTPZtzV9zD2riNoAtPhUBKwEQwZD",
  "key39": "2L6en1FfZ3HS2JyCftW8LJncyzQFH971oiKnV7iVqupG9W4pShi9BWM2iY7FywNzvxBQDgLgZFNTWNiZyHVguMrp",
  "key40": "3QuEoz1p5jLhn4qXGH5EiQNvdxAWUWpQ7Yke2Rrys4e3wKStuJ2kPdtLVxZfA1HKyUS6QM6NSQvGijMsjqrKVb91"
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
