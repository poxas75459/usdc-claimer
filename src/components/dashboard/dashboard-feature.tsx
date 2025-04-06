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
    "4Cg98369f9yusMWjo986Ys7JN6oZVbi6c3y6YWfWZ81ZKoQf4SNK9iCAhgfaajDHASA2wp1ANLNGuw18Ctfiud95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MMMEa6vRFfKmvr2AkGCFfSbRn8dfDmKFaXU4bGbgrcpdGiZNvRSqHqZB6n5wJko24V7zjkBabDKkYdhaiASqAja",
  "key1": "RcM4e9te7VPx1ssKQJeedXEDh7XyriQZKacKpE9A6Z2jjqJSBYEj2H3KUBJ3ULGbFpevhs1zbTCmGqAcYCSgFWf",
  "key2": "SF9sAWSTwKERLBxnXcohokWcE3BdoiKz2NEhww6fq475ZRm7PSLmkYHzWhz6qeeCocuiMBhgLVmxXjYHEKxLfPT",
  "key3": "5yRkNwCagAkaRq7uCGLB15tiehb4oc5aHjW8nSduUemwr7Se1jTKmyt6FPWPfGMEP63PKqTzHR4Leoysc4xrGrem",
  "key4": "2437omWAYPqoED9zKwfvdjcew545QKLoT3Zoca5habBMxDew3SmKiVNyiubDMBLgbVW4r7Nxb4umm7UosMpVwxuF",
  "key5": "2pG4qUc1jokVyXC6FqsHjDGPhdV7V3BnHDqSsyx8oBEN7V9KHyqi45NYGxuqNUY4WGFWGAmwVkJwfzKjemwssFyH",
  "key6": "UMvGpKVTh9cKEmGLKWKLJyS7hb5ACBqkfJ4y7wmN9qhvfPgrULm5abwWyrD4o24XHJfHUgbQnfxQDwHohyWvvZz",
  "key7": "2UcxxpwPSvBMDvUMMG58eKBDnoDbamCt4ksagjC81pKdGNfYBos482dWT138gprRgbZF23djbTBQbRND3RZ6Tryx",
  "key8": "5aN34Kw73q9XJRqudwnwHmWXXuNNevR6ekkQmdSBrhyesJxC8EVHRAhHx4CPhsaAWgUERBD9SvagqtBi16SwkeK6",
  "key9": "2Aa5akCESqYU2PwzfpVjKhad4A1GTY9bZkjVpWAxWFo5cKRwNAZu2QfP7DeZ5AyrVr6pvGmM8n37fyQ1uEai5ceb",
  "key10": "4K9AtHjhzUs4AvU1dny3zmti4j6HojCds3VQJwFmKP44vRR7kTB5rAr2DLurdU2HrML92XMGNUPpGxcJseA2xx1v",
  "key11": "4P41i4bN9DwpocHbQGTHC9oWG5Fmm4ksYbA4ZWJoVWWF6jFb58LbdwAqHMZpXX5JN1zLjPvxnSkKg13eadVhxd1z",
  "key12": "447b8VRZ9xgp6BPjXaTpF2GVqGaDWfZWBBqDE7vD6F1nqiKkjrNYJYjAJZRqEkAdCXgSGoM1pkqZwbQ7UwSC85N5",
  "key13": "3LSgXMk3pKoNRss7FVcrU1yLpNFz67v8XxYTmQwdRUE2pKhdZ4HxMmegMwREMQpxwHqe8W7spSwUbm76HSTKzmL8",
  "key14": "2m1TUM5ykaMcXXjFK795gM69EA8frsyVgVgfpdeYttwk3cn34Cgsg4ochzpPQtouswAJWHBwdHrmPYFpRVpNWk4p",
  "key15": "26KumXSfRbK3Jjahv3pDabbsgwFCmQcsbBqa4C6AWXtDj6WHCJHqJkJ4wMXFfmjA6ij8xnhjH1Vmnv34DEhPdhrL",
  "key16": "47NPu2mTMLdKKbt2znt9q6PuCHLPAaSHqK3SJyZh3vY6uGWg2htVpDfJqiLSZCC7f44naKBmj6HeaMq82F5guQx4",
  "key17": "4H6t8Hnj8Bbaiyk85SzP2g2vA9v5rjYthM9bcmoY9DiuCLZPwKbzxpBugnjDGQktyYxbVvLyJaMJY2YEtztabh2R",
  "key18": "4N99vSYCBYRbCozmKeqh5Fofw1mHRcznerY774XCpwzE9ozLNZ4dN4DRG8f2UCUzKQgPcsvRbyHXZVchYy6n1SjH",
  "key19": "3S6EprfAibGKqydzrKmi69SmspTr3NWwLzWr6qbVPwJgVMnaiA6fqEzQcjWyaKSCmCh3A4Lf7gaxNsyQmsNZer2h",
  "key20": "2NjoY9s8Ktk43ivMTem7Zgx3qeyr92nhonCFwdceQzuq8qTCLgtdvc1NszXsq8wkGB9Rg9iHX6VVhJ59tkNMMyhp",
  "key21": "w7ZZP1wUAYqfCftG2uSPqT3yTs8BHLdCPuEu1vP71wvsCVPUdDxHxVd7iL8V1U3L7fpREgiEPwceMnuGoy3nLN4",
  "key22": "3h2D2gjvbtp8Ls7ojETxxqo4HQcAM363D8mXmcbLuPUEo9EUc73FUifz4h6EjRTFfWsw8QURDZTD5ZswwyJwXG5g",
  "key23": "28DUg43bhyfkYisFnrjm1YrTTMAzmWH2v31Yywf7jCPa4rKK6ncyrBPaSvKNqA9ujz1eZixVqUbRp8sh6iJyR3aD",
  "key24": "QE7fsew32eLYjSMEcV2UQeHx74A33teypDWScxRfpVs6h8Vp7NfXnqqKihWi1Q5n6xkBE3R6cT7gp6BVz5KbphP",
  "key25": "3UD9a4GXzWiPBBZzR7tBsHHeXndW2V6qCDYESmmVyAzzyKsGFdVZKJ7ZmeV8AxHY8guUMonbCUGNvJAFuBqXMt4v",
  "key26": "2vwG1bA1wCpegca7CYAvjMy8pKDoT35EN8kDtBBGqmnuB8Nbg4wRCMYXAFRxAi9fixPgSw8Y1czAAeLd5U8veah5",
  "key27": "64jEbHhsWAJs3E99a1xHzYhzxVhANuPUZH2uPiuLjN8LsAX3uSakDfVfHRrtYuBArHLpoER1KzaDzATi4DrZKJui",
  "key28": "3NuQp5yvGBJzedWMACfH8KWnNd4x9KWe5X6NxwF3UXHfDd7vKv4B53MnSv1HydQmEceboSikh9pTpcxx4tkttnTY",
  "key29": "2KpgiHpzeKUUP5d9bnPBBFfZTvr6KWaor7dGmrPnLz4fTCBTCpmMvLawp2GSk5zSoXy4AmL8AJD5pF6bED3ynQyM",
  "key30": "awHgaEcWDXrybwFmq4K5CsJ74ZcPWJrLQktWyG9oXFsCEHhKcCESVbmvP7HWZVzHgFNcmV4bBnbe8CgJNhUoAhB",
  "key31": "25gXQ2BkL1AHt3eSZ7jXXoBgBnHiiA9bG1gGEj6L3oRUsGLYnu1tjigMGmahRukEQyifMa6P3s7MV9v4U11vgZQY",
  "key32": "5T3VKnmqQArbijrfRN57L7ioYraVzwyAb6PB5si81tKKeJiTPecGn2KaaAKTM6GVri7am7gJXH7uzkJ8ommPiGq6",
  "key33": "4V1TgYVVRvBV3k169r6r8yxo3pc4zYeCN6c5SV6GqoUV3NjDpk6HUna8Znhqjcc67BYvQtStBMSf5baQEfDB8P6g",
  "key34": "3fAfUgtyzVqMjCMFiDz3PWDhkJtUaubAy2T7TENAWP7ea3MXpxQkDT493fAoM1YDg7jwLJ24Mo4gyrmehnBe6chd",
  "key35": "5FBjkS1oF8Rw4BskMJBQKEi6RzfZCzJKkQP3oJ5VhXq4WbWYsvRABtR2rWATs1XZEMb8yz82m4XU7pJoVTcLt2Qp",
  "key36": "XCqqrZ7YPzZVUdXWUChYNm4PgRZnMkTDGPkKVWMDiHyoJHESVmowH5FtPrPqWd1Vtn2KY2uytSd2fi3fQaJJQ5X",
  "key37": "5G7cYMSQBKA3QXMkaq1A5C2wj4BkAdtw9cNBoMB7jGsERNtbupWQZqzBcAnXht4HfDqB4wh5qzoEDotdCTNjN8nH",
  "key38": "4fjLjgujBrmEjP36ti6PU8iVBmj3HtQQH2TJSFZuWykqLn521KTnm7X7DxF8QwKskPEjLtyWqRnGJqYQewXoFE4T",
  "key39": "3WJahx3xTbgkCaDtnBMsCRB326GumAvmksByHfDenF5fN2X55UuDqyuHojTLdynKwjCYsYfCpVXKWzshFfjn8Tbf",
  "key40": "5wcxqmpdNhGSCwHAgNcM5ihWYUHLVMnjrT1df3hCCYqzMBGY1qeuMQkpueLJCcp7QL8PPLxPbeRnNoBeBqEa6fhY"
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
