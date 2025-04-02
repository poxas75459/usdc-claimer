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
    "EqoNuvBBsHrkXmqtfcjZ1BEqHTkMtKWo3HRW3JftqR5ViCtCDPUS6VdBG6qxpHnAr7xeRoMk8xHVC9gkFdBnifo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58DtS3XaUNPjhAXKVZFUUMgv4z8saJKUJdUhKPfMn8sPHNuRFSA7gTWiLmKKLQREN1At3bW741dMzYxHVq5pLTeH",
  "key1": "5aJsYVFJSNZgAqq6iD9KRLLASDC89jxJg2yzZ2eZq7rXpYev3dsoqgJp5DpMNbbuHy3iXBfN3JkMzGGYpSWqE3v4",
  "key2": "2o97NmCG2R8PMh462QdYafKRnEt4wVuNSt3cHbtRaeKrq6268hJVjuCZmXGe7gnKW7GKmmi5bx495qeHoNkwg6mY",
  "key3": "3Jm8f2paQTvbyaMkZjhekzCKeVdfZ5vDRrPTfrY7rHYzST21f5CLhjSWb3dr5m2WKRtFuD1Tq1JpDumUKGA4GYZr",
  "key4": "2zMGF7133wpkuVeShpTPSUc7FN4nHi8WyipMmzt2BUHYLirPczVNHuwt4zoLLr9JUqPpzYdn9bfBLHzpCwTMGrNz",
  "key5": "hhXEkhq9cfuKRgYGcPCjj71J1R4wJGAwCrzYCURTg9ej5BAS9WdebjTi17iZn8eHZpf7xMNMFBo4yYnm2hFm5y3",
  "key6": "4iStk886VD24dtEKAwRk5ii95atsv7Hwoz3Z9GTDH6PyiaGWbezjsi6VW7DuNRkNXooyQDeGbV7FYy82xVwFPGti",
  "key7": "2U9Tm1FPkPG6wz68v1LR7xjjPbNzssDX8YCaNpX3qkDvtXhsYtidXKqdDZi5JxoXj1bmK8c2xkGykbWdnojSmSck",
  "key8": "PFDvNPWLvtXXt5Kxvo6NfPx7F74cRc95Zaeab6ggvVTcLV1FhzKGYawZuSCPsh6TMrdFGQsCQzzXh2oTxrr7aW9",
  "key9": "4tYouy4dzPTPk1Udw8w7yicVFV4j3NVf6q4SET5DAZgkQraZvf4Raq2dMukDnotEFB9t1crgFKFfqYhNxyYTx9Bv",
  "key10": "4m4hmNv4tX1tT2uDZ7sXAifSSjMNxDo4vPxLJeDruDCAnqVrCiG9ikQAKgG21xYJUSRSzbnGac7qYp6VKxZAp4qp",
  "key11": "2SsxuckuG9zckKk35rGhNrzq2VjWu2wkY8e5tZ5tNQGF2bG2pobSuZV3YcSRUUX7m1QUHLtZ849dGkaycw9Bq5qi",
  "key12": "5bPbJ9ZyHUH8kkVagCJvn2CkFSeUjhYfqtnqKR9tUhVXi6rqtuvDybxcPgtPnM5BTTKf3vCGbSLJADmeJrss6MYS",
  "key13": "Vij5zQ9DRvHfjWYQY47JAt87dVNWLSx2o5Vr2dWETNWPWjkD5M3Bf5d6ofWQXb3doji8wgfcHoABHkfxrecy3Tf",
  "key14": "4hEcuhgvjb5Cc9uYyd9RZuP4aMvxg6G9NFLqErK2SJGJ6XABcepY8FFeEBfBzLXNyeEBpT5FsWhDSU2V99SHZF39",
  "key15": "36GFT82pbtUzZEimvzHMaRNgw8MA31Wk6sDqWMZoDEQZzQW7c1dK9adWskP2T7bGx4R8LMs9n7f1G8ZumJ1MZYWv",
  "key16": "5aUyCbeZgMxcNQRzNbvqD7rnj9SHvSFKQy9bbHrJL1ZFkB6zRMrNpxRYLcjBuDpGdv6rSYKcymLVwYeGc8oY6Pas",
  "key17": "3HSF54AWpwWy7s2fQ9B3kTUWADdnYyKpCvv3kkWpwTAH6i2PzPvfhDsmj4WRGwCPuXVcRYpFL8VR45mtiMJiDcw8",
  "key18": "2xDnvoCBuP9Y9FT6Ud2xGFhL9fP7RNDU9dcqp2TRwtStv1mQTS28a5y4NaY78ZVQac7eDFcMjFEEmkq1tCRdhyJZ",
  "key19": "ZmssEpyLjzTSuaX8mvWzQvQ2xuUPoWZcTfkADVBS7fMC4Tf5dxVzfmrdDLtHA1zxytymSnajNARoQ4wiCCXeVbw",
  "key20": "5F4r9fLfEfRV5GwU5dCTwZd6kccLHCHbT7M1eUsk4XtkNDrc9pteLqHEiGdpCYQ2wyHQ4sbau48P8Goq6dVM57Te",
  "key21": "3fsHmZNA6gTXroboK2hjkX98A7CF3dMKawTraTBpVmqmdiUjMqy8wgdSZ9nTiMXKF47LV6WBkQUS1tq41aU2o3gw",
  "key22": "2SGMKpfhbi6NzdrxDNvev9PezwDegFbxjYNZ8yfoCxNE1LkJz3f6rsYvjWUabhLdoTmWiudTftZg2eydVqH9RA1e",
  "key23": "3vDCWcZ9FCpvksVeNYj8JJx6QV32LYPZEB4zgTfggs777GiNGP4dUzMRzGdFEYfZN7xwNo4Du7V48fcRHywCcid7",
  "key24": "29cYCK3Hi1LGQyKsWPS8eDLx4QY5USW38LZm4xiB4oreJinTYcx1bPUx7ViR1vUejV6xf9CjcYBVeYmvqkLdv599",
  "key25": "4oCLsJCRRMqSq8BhHbuEpvSrgZid37CZLTorUPgeu53bdRVJFvULC4pDN2VikDjDvQPJ4cGtMsthZ9WqDAN9H4vg",
  "key26": "667wceXXX98Q7Zhr7F5LpMaFM2LzUcLhnqgtxLhXQUsJgWgT4Saoab4k5DdsvZ2eCJUrejCfstFGAL398ZV1Jbhp",
  "key27": "44v4VZR94ACgf4hZ6UPFdRYSrst1Ebuuw9vNpSajMtN4B8W6EodwuQNW74AEsfEWVJgRd3SMtrka9B4T3f7ogBEQ",
  "key28": "5BdLAQayJsoxH37mEDff6Z1fNjW9b3yRWrWfpHHjTfTzU56wez5uxsHhMSYQD2zDypzr1GBzx3bvG7XxgeDdLTK3",
  "key29": "2sRM9YiSagQfqhPEV5JFFKrcdS8VFnCKfXjr5389mgS7Gc7wHnV7R6NNDtAfukFpS6Qqraeu5iJkZQyi7KKTyWGB",
  "key30": "4Um3r8LQ836KPCtQWA2dC52ogbuiq9ockDv2HMkGA3qq4jbadmDkTrLTUCFq1tvQc6op94vz662DoV8cKd4bWtFA",
  "key31": "JMPquuZKPTLMUrMS8Fxc9nTFhdpRUYZhpQeDF7hbfRwPJMTFqGhuYMZnhxCyqEHoXKDGKof7HfMPL7MctB1Sy8v",
  "key32": "vsBo5hSRChEGbhPgbXJ1KXNhDycZXQ4o4tLsaSaU5WA6Q6zZvJZjsCB5vPCE17fi1hfGh929aM5ePEpK7s6uM7C",
  "key33": "2csvPKwhQiQ7A17tBmBFSemPX41rCxjXe81qPxM88Pxqs8H9y5yNU9CDVKP8zLfPPJorkyAYZVTU2ACXs5EMY7rP",
  "key34": "2XXaQNSSVDGqseK96hdN446RXiLpknHKavgSGkT4QTygCVv9HEokWpDMhs5ccTpMT9wGbvnj9k9tBdQyt7pcqQn4",
  "key35": "51YP2tUmpFpbV3xJ95En3qR3YXgBY5B2TBia1M93EMS86aaHXLqwb6EYMYbQ8MXXXZ623Gyb5FvH1tmjQyaYaT5",
  "key36": "2mF5B7hZJi3kZJwbXnNQ8UnkAf67xn9JvyzWxYJD29sAZtiKKRnGctkq9hwXBhNztb5FgyXhwpxaCRHo3szUSYm2"
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
