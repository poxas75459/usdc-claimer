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
    "2ADYbdBTvzD3Zp7YsFyDb2W1N23YyqfJQC1ARPMzBHaUxbyeHHDXqFE8Sgz1bSoJfe5Z2bCCRPwYwKyjPXwGBDeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZCrXmNekJspjyR2mpbwhUhvPndSdBnc2BCTBD1RNe2PeNuTszwsct3wGm4oMgFPyTr3muTCQz1HDfUwmJRb99kz",
  "key1": "5wobF4hehQDNcnJ5h9XCGKdKzNELCdX2J37Y3tsDpZ4FaHx3ah5wAHcgDw2BR8pa2GC7Eo7P16tAnPaAMgH1kk26",
  "key2": "47QWZtQShtgNT2vaC5GmFFvVpspBWGKfHE75JtprntYQGSqnF8b6Mcc7dZtL2dVWgnuXmJvQmGeP1fcwxs2FXXz3",
  "key3": "3e8yrFGRMetnR5YGZhbd26T8mw2tD8oQXcNaicStVFENyvjKLpAMxJnQD3n25abqDCFLzVJbN1TXJAtnkNcQPF2Z",
  "key4": "fPSNMox9pYGLCGrmhNVqssNrE8J3JwjGbyGnHFk4ihe8JNkx4o2Q4z9Sv22MUzGau7opAwdxAqyhMcG2JNHctph",
  "key5": "54eXN1soG3EcYmVC77MKQ6Bb4KHs5meSwkyaZyQqdjzHjiCKdZvGNmePQEhFsX7uJseyNuXgEA8t4zJdwrF8HUCp",
  "key6": "4PdouGUDNhet7vg7AsTyfNBTnxwJt2zXaQhZvUEMBFbSPKyHXDN6vMmk9eDn4ziusXbuEtEpMjf2P5VsmnH3nzfs",
  "key7": "3sKgT2BBRiu8oa91mNRo7aDXeNF1bq2t1giSHLdpKrt4DpVzH2p9b2sR8eteDiZYw6EnCTPH7XwyygAoVtjVayXS",
  "key8": "38UfJbDgRdCDFvDQkfdKEjBAvoi41Dc6eEBsuF4ZiPEn2z7oaCU92m8HVH8b7mJaE1m4A7tfW58wo6AhWoHMJuRS",
  "key9": "4dEczTMhLYhppXZzgiW2pCiZ3zziUE6xohn9pGwsXVJkUhuuroPGFpcXdEafPxAxaXYK8HbPTezJigKpmes6XJPR",
  "key10": "2wAbnRWfCx6hDLfwW2kDZkgG8jm3RSH8Fnu2ctiaugPrc1RFUDEFFnUB2t2dMi4y9p13WLtxekapqLQQqbDmyKmH",
  "key11": "4mpJ6rNXb9Zzkoi9ZsxCoRuwpXHXQnmr1zQGQhR4jW7V7qXwLHcAn8F44rQuTczWVFPXHRRPZV1NxWeGT6XXheu2",
  "key12": "5evjZnvsMts4teMTKr4Z5Sq3yjbJFR5m1xX4N8NjZQiVwoFfvGBA4tDPh8d1vRGmr3PwMC3Q4y8RBSXswyGCDm8g",
  "key13": "5SDaHF3259PzDjyeCfhTjZrfLobBSZQD1ptK7Kh8SHCwL55s9vzMcXcQwAwqhjSfwiQdVc98ihNwxnWejkW63tqN",
  "key14": "S9UCgT2qLfKGDmDuB4r1f9fU4zoCmAn34bQii1uZeaBphJsL2SDGRVb6XJeB5f5E8y78vL43M3Z94xUovBsChAm",
  "key15": "5ezk3HLZAtUgPvqCFyYfhWBaPJcxcPkr9zecpLPtxq8nMs8e15L3HGokWZTZzJEh8HzhQzkwV8QeUFfZrEYsEeUa",
  "key16": "37vdtyJKo9AbztAgs3Nv1HtUhyNTnP9wqbpAf9TYu1pEgZBiHZRR1rr5Nreoep5LyPcyW27sjL68SD9Sp53bANPV",
  "key17": "5FCxN8svfhPzoJw3n1z99UYFwKvoH5YF2sqqbL5Si4ZtDPBfXFmysSe3rMx7zbEVaPRcZK1Ks9dyRTowvSAVb7C3",
  "key18": "5j6jY1JRZNSNyvD9JM3Tu1Tg7YXCsyoYCyJgVP7NGjv8ovdB9MQkRA4t5iWA3e5gcwd2d3qgEXyNGp9Y5rhA5d93",
  "key19": "5jhZ7hYW3TPX5y2JwYQEBzMpuXY4FUNSmGXqj5uJqZB5tbAHDLSrESaLEtzQJQDbjGuFjqk8AqV3cQMV5mCG1fpZ",
  "key20": "3CAAsF9oHcjjeyVzW22Vs5jFktEufbejgU1bS88uFsHAvQq6YFYhWVyR7uy1Y1uU3L9XpsinZmjiNnTNJHGrGP3r",
  "key21": "4YjiUErTA1Xkpo68Tuie6EYfNmZX3ND7eXjiPKGHgzBpix6vG5miLJ6YKnXzepVDPng7G8tFq4ZxJ1z8Mptd5vqr",
  "key22": "dFLAP654imMaeu4D5SMHAooZQ9GAbGEXYi4k4hbCWsCEeFx1dnZA4eARL1KpxnbwfDco4gg9CdwyuE39vPJHvDr",
  "key23": "5sQBT7zjSbxushAqRs7WGtM69xuBB3yVbwTVF9iGEZDGMiZfgco1vZWm1pwwDN49PP9rM4MMG1btRRdxSJ1222FB",
  "key24": "2zhsmVRpohDjadB1rQUNDDv6AA7xXu9iKe7mk24BDAQ8FTSSQ1KdwmKUiNsFuYfV4K738tvRkoWTdQGMChAoxmhz",
  "key25": "4o84pbbNJeGkqrDdtHBYYDQdCtXutz53KxnuEw8YnSoxBDxJaVNiLQkfTajx3dEiULQ1JD28CKJ6PmWvgSPwiU9A",
  "key26": "2DJvusz91S5tuN8GbfrhjM4LBWo9u4LUxA13kGkoWnxjrgeh2tZae9FQe3jpJgHS3R81bQN2heGiJLvYHuQ5juUh",
  "key27": "34fWMvBXV3VYG1QXMWshGqPYocdF6xhiE1AePerdjEJWftns9tafS414ijdoN1jdLKD12Y1Fa8hczMVRJfm7YnUQ",
  "key28": "qszyRiuWzLow77HceDFoGNjKbXxzub5KAfPDrVUNebNogpjmtVysTqrqvQeQ2FiRuoRUmgmBbqLiptLC5N4ho14",
  "key29": "39r5Q1iJ2uEfNNeX8qRqjJ2TsUaPLedbNKuCMJhoECxrhgRrZURaPXuzJte5oCQcFW7gCj1mDVXtR7nVNwczXVCw",
  "key30": "5Tkzm1SWbk6TrudUqP4DS1Bf5xajZe5F1JCCtTYfStagJsMyQr8Ya2kENmXrnmTjooubji1EY5bkpqPkMaiwvzbW"
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
