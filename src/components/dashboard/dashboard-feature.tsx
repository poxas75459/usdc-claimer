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
    "1WuHC5kiv2ZwE7z7L8u8CeGt1T8zdQUYRCZFDNxkgnUYc5hGozhwFu9haPxgZZ6cxBQwtVrMt8szUPkS4KejWnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SAbeAhGYfhCoEzvymZ3ZBWYPDvh9zyLhUp68xsSUdRQaFyUnoDZYjtpbNhn2FMBYPza4GP3iX58hain1qQPEbVZ",
  "key1": "28p7BzymCAuFm26K7DnH1Lb3dkissKeu2ZBscAw52gvvMx35G6wRkoW3AN5DnP6eRC4G5yDC2SujJ85v2rYSiWBp",
  "key2": "4ntYh4LdwS4UeUDzjqEKbGphjo3ASUiADLSDbC5zBLRNTXNKX1Byka5f9GsfbtBdrPY7tz3ryrsdfYuNiXjhsDMP",
  "key3": "5SWUpEBiSZdh4jHmMV2giCXUpDiourgx1cbHRNpfpDVNGiVMbH5FFztp7ktrbwaPdtkUZZGLfAiw3F8qQ1ydM765",
  "key4": "3gahQPEUjBVve4ieCEtiRrDh4ju6637oG7k4XYz2941a79jvPGJrdGSoPw6TfAksxHTrHSZAswxERZV4McaaDNBa",
  "key5": "4RBfxhrETo34HLjxXWmjZyyFYzdVGRxCXZVAmQww8aBc2y9TNB5cqC9F9rbVFMwYZnM2HDLGi6XQVXkYDFudZrGd",
  "key6": "pXVviQTKAGftSMe2TfNXAfmpPzLXdN9UcU9kLS4wKDhJVpzQNhBfwiWCXUGwc4mnmRJbuouq8MPnAvEp4Z9vh2A",
  "key7": "4FkqNmbKUG5aN96dUvTGo8WiDciokSoXkjcywRCb7ydtF6MqRegA4J5yd9bWZayFbBavNqQcXK6JgXA3ffmBe4u3",
  "key8": "HazXviLqNivAdfvU7gwp67uRaBfvQTGGmqnFHanT12TkNRodUmr3gYXXDqFwmMsejCEuUZ63NaDxEdnnFSnuvc4",
  "key9": "2xokFJyJBvCAcJMmaufZUvRBz5zznSjbRoPSoxws3y54oY2ZohtQuBs4AkUwkKvJRRYt7RQtvUV66b4is8viVvwu",
  "key10": "4kDQNF38LLdw7hgvu8vWS2MCjZ46N7uxKb6rSLjPz8jsyMbsqRZeibhPYAPqEV4umkChZFBu5F5ns6p5voAZ5iSQ",
  "key11": "4FguTjVSmZfRWxysTUy1KonyFiGC7GcVA5dAdq5mFgSkfo1tY7kj5ZrDKuhjhTG4ADA8on7iDk5NbeYSfmWFvCth",
  "key12": "3JqaSs8PLQtCSi9xDKWSjj2FgDprn47ZbM986PX8FGtsFB1pK3BJvi3WYwjmg2tRkH5Hh7ooZ7Cyuigyedux2aoD",
  "key13": "4YaLpDbsnD3vd9LhKDGBncCENnDpnUXWySdzGtvkbeCbiy5LayZTvfnzn9t6G8qwCCKZde91JkyQf8DUghZguexq",
  "key14": "2ATRKfK7TkRHRPi3dZkTXWTU8gbr2x9xRCZGRoFfw5HfzHaCAXNKKuedx3zf43H5K69E2pmQHbVwnfivmYTpMPtx",
  "key15": "4T9Yw8GiaWQ7eYe3cwEoZKWgFfaDCdygvpPFNsY2fuDr2X2vHWp6A69w3YTBB37f2WDPVEUFYnvxYz4cRnuXssxs",
  "key16": "4fsesXhDLkUEEx42Xr6G7Fr6WY1WseWnYz3jXaG4TNhsyaLwiiq8wqCSbfycj1MZMMxu8VXr4CMtTY9Fu5HHoaQ5",
  "key17": "3vbbyefJGAowYJ8XgEsHD6BpvvKYmzJk1oaJApi1FZLBYyQfT6zBSXS4vPVhRhxvVjkRVTmwNQdt9kXsroDpyXSm",
  "key18": "627Fy6YaCNobPn1ASUsV2A5fCnuW5muA64TtJjDmj4u8FCb259ozamNSunuRdU4tgNGxANnSKAXx897uMXSHh2BL",
  "key19": "iifRBQigFkFfBemzXtZkEWCpHydLYyZgWSLk7ajpcfbWmPNE5Gtmt4XjuiCiVD8Aao2cVg8ZVxJyHwmAi7wQ3dP",
  "key20": "5pZfJMpghjsUqnbifppg1PtQ7tQLVYU7ZmxTvHLsKk5suESp74fJti5mn795z6hEjBsjUn1xynArqqXwaDSWks2D",
  "key21": "42bsNweWuSJSXJFWdYJB8EASundN6pNrUVxc5FN7wWPkA762zYXzwPEfo8kEPZtGG21eXnduenJA56jtUk6cxYjf",
  "key22": "2yndtK2AJyuSW75AXX6HYEgQYRXfaCZedtA63jH6DqQqs8KFqV4oQcS2yLso3vBCTCTKmdUcXynBas48AeY4iz3g",
  "key23": "UgQjRk8yWtohva1hTfzMbZEW7msyMq228i9X5c4SVtWJkHEyCFKrubNU5EacGxsryhZDq7BQ8ctCDqNrzozvVQw",
  "key24": "3HgEAAdSt94yjfu3DgwJAW5gGo8zRMiXXsdXNLY58qt8SLeiv2273fza7NrYu5FMqdVXwPVXsK6GWPkdqQBqSzr1",
  "key25": "3kuPGKdeF8j8yLvYaYC2osxBbmuivPdNsbyW4MRnxjSpmSVtHaRqxjN5fRknd9FrzB413vyx1MNzMagBq1d9U24m",
  "key26": "4HM6NW2URiqefazmDWFxQTnSqx7Yjt1JdnDPGZyzdSTsvDZNgsLVu3DzdQSTVGhU4Md1VwkN5PSjEFfn5Cw3vBdo",
  "key27": "4TMweeUYsTbcCF24osM5X3xqzRr4gQieFCE7o1hiaS8yC7fK2Ks2FBmdQnJ4V5yux8xRWbKAfhE8QV2HMq4BX7Bs",
  "key28": "25PvLxroESVD6nwRu2XHWw9KgaC8i6ivwGCtZbn918u4feYbQrnfTY9avr2ZZfzcbigfZ2qUksWbEuaaFaTcKF2B",
  "key29": "3VRhPYHaum9sfHfofkCpr8ZELimceYDjjR7iuNe2k5gvv6FEDZXihcV7ob7tJSQGMoYE1J3StkRDkmwPav1o53Mv",
  "key30": "2RDRsAAZBdrCpGzqPjF5enY4nvyqHvm5BMqMC2fdPw3weEpqgZxGQfge3gf8WZiBF5nuJC3rrvQ6PXbiUNKXCnoi",
  "key31": "2Sg6aLVWHrJ2RQVNeVXkVrGMCJ41ztVggZ5X8UFwGnEAdap2Q7FbysURnb3AtqpEBzoWHJ9DWv6QCMgWuGbC16ej",
  "key32": "4uTTQqnD38FUgHQX7iLDWRWaoZji3XbtcKSeQBBnpmK1hYBPEk8uhmzcx6BMcxMUqfESMnzgcsPeefFifre92egp",
  "key33": "55urBEYNcS84hzJ3HcfyAqeQYGEt6m8mAVNzASo3rKPA6H3Q2Z45B6pRBaEhx1zuxU2oTDQMVGWvvkDEh16jddiV",
  "key34": "4YCC4oCqpp6VbsnLeLpZWmneHDeZZ5Nb9d6U9QLRWkVSD4qLFprWKbVy8pVNv36bWpoxQoP6j2Tggr4HXL86XNJu",
  "key35": "2AQKBoneuZqREqRHxqw7manXSPTGuda5PrwKRPBXotoBdvkUG4D6wtnzRyoD9rTfRfqzKk9hbgQa8NgxRFxn429G",
  "key36": "2tkoNeHayrJTQnKHYcjhHed2ABYHie2bGh3WH7AG1SCL4LNb7jrYoiFfCjvSjKj4bJnq8kpiwZDDhbFnD7PBHFRA",
  "key37": "4YVpkyfD8hgJ49m1iU1wdwmdkRbYVPRavTjA1SKePRh28GLXexhhZL6wN4ZjVEdG5TYxDeqS1vpUCNZPZih5mnxB",
  "key38": "47tRAp578MCJ93udKnGtqfw8eU4fgPL5iwVib3h2ofyFmh3gMGnXZc7MUG7vXavgkSfkSUNpFUpZHKeaCUSGHhia",
  "key39": "5VuZWEAQy4kQ9RH8dSEjh8zq7dmcsptdo4HVCSwVSYSKVhBsvPcoJ5eh3cZCgY8VtPsLgmWfckdbPbEnqKbxoJrL",
  "key40": "4KoV4ibsYA4Gv7uFVUwHjzSDVEUEDEUedMdiNK9M6UuT8CEBn9cC7wwaJDr8w8Ar4NuzvFeWnEhBPJVmeV3GbnoJ",
  "key41": "3XfQwGd9BsNgpupocG8sccwZAMsn5Mo5P1gtVYesEhJ9aMUtWDJXVq1aCCunfxPAqf9hyN9GNEauFdb7moYGj1ym",
  "key42": "5VkYGaGFP39iqPczycb2rh7edx8QAmzHR6GHM5H84G3xTN4PzseJSAL593b2aFYdPbgEduz4g6ys7oGx4oZvuoyB",
  "key43": "4gZ6egyBqPsnvG5SL6DAt17rhzPjav8o9gWmNMWjfrvQmyewSQP4SnApEVaXx3AER6WHqJpy1FndYVHGYMyV51UY",
  "key44": "2dqn8Nb7uQrNka14jJgSr6z4A5ARTMfUuQKg5r1Ur5tRgisntep3Gc2AfKp95nAftSWaGR7x3Mm5fwjKehWesVa",
  "key45": "3z5QFqEJmw6AkXargvcHuzSvxkPZEy9whfoNMwnh9CR17bpoKhaGEGerMLkqyWuDMUCzNPMd2J1dhX27vtkShX1u",
  "key46": "5pjQ9EEcfVjzRzPf2PPzyfhukDaiB49sikJeQf2BPZtxU6gqLUoMLVFtDk6CEB6ibLMGwstmky6FHzYLFHsxnBD8",
  "key47": "5XG98FtMJiXJcp6eEWw9LmoHq4bZiEgoNyqkmR4kNRWnbFJuVz3jP92tfNg1xDxUocY4cFPhbQJnn7ct9wUhNEH4"
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
