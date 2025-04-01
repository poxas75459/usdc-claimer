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
    "gYhveJpNYsAULHY3wBPsdiWMN13nGTGxoG8biJr9XEVhBkfi1EdCtgucR7DVbRwNeE3Ym2B5dZabfUtmAZbQ4GN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22DbXXf8wzaKfj5mv1EXKpJQMwZi8fomxASEmUFTuf4efLXdV2Kr8vZZLwgGTQPt1J7kDhT9moxEFo8UNjswQWFv",
  "key1": "27Kcuyk9DCmd8X1oTAzXfCnXztcUbn2REenctrNnYMJohJQbKZzjjbgk81oXWJ7ZcDoHejfsZ6BBYd2kmVHNzYiq",
  "key2": "2dae6sAAyDjk5VF7CHvCUh6xcHZhuj9uTCzXeY3UBHmZUiLKCe2ufWqXBvXHLokdF3Zd8vowX9YEqwmLss8hLSGK",
  "key3": "4owwUgyTHC6CngBKqAQ6vGkNZs69xGpyDhjESmrVziQkWCXR81HEBM8fev11F4sdtVCDg3p4aqbhfjzVhEvMQS6N",
  "key4": "4VcU4Vhs1ZEQEmuVMocaKBKDykAeJtevuRPSR1Lb41my8fi6x3tgx6HBQu7pRai6W3QJGWeaiy1CYYVhHbtKG1hE",
  "key5": "3CLfzenLcsMMhxoghognpWYp4ZyD853RvoR8t7RfyWYkiuTFbBd6S5uGaPj77AWy6n9EuCBqMGcr4ePXD3Yrok61",
  "key6": "yxqx8i1TAQyZtAL8nMrD3cpdZ3w49Qfe7tmXupSwZNNZXpZqWtiLfjZnaZc4YhsnJ9teXNQ19tfbaKWq4THMFMx",
  "key7": "28dyqib9bMD2KMxSMdrFX5kTtFwNahW1utG3fUP6UkHjrpZtHXqTU4dzM7rWPTY4coufNMJYJzR8Xgj3PNbsUmkA",
  "key8": "4P7PYQ3UUf5YLnGKKakDgPvuSjkfUfk9d4PohjQk6m3pYeTvn8aKrLmZqLoMXh5UjUTCVikod45MQKEdczr3Lb3h",
  "key9": "23Yyb6gZ2tMTqjePvfY4VCk32EtgnkrycXiwJJJuHKdEDXhWuwoPDhxj5B7tMZ7rGM5UMhmrK1jtrUs6PFx2Fus9",
  "key10": "5yMqqxH5wugzvqowXUGYLuP1GzGhbWYa5UsKjKcuPeXB3LgeYxCwX5sxZaqXeN6YZgEuJaN7znwuqfm5x7GXhKRS",
  "key11": "2gcVo1SvSkqjEdCBkXLncpnig22KjpiaCBbc4YNShd2ctK4xT1Fb9KC9SnCVbMNkCiFtzVuYoHuNdq1EoWmri39F",
  "key12": "xMGXxkiTvyLDguggfYp5oDGJLVVWg3uML3g5ZKxdyceMZBMSjoApmjJQGQSN2L5A5ZDPf3Lcf1nH9mksGaUu5Rc",
  "key13": "47j54DFgPGMC4r5iAfkYzErxn7tWEu5EZsdYs6k5SSNVVZ6gkwAfKUVGLm8UAULvkW4Njvs5paoHDY9QEw8jFHv3",
  "key14": "TDFnTdEu2vwji754nUC8NKrquAWuQXEUBirz7hK7Ds24qetJV6DKX3JRr75UXBLmaF93nno6NgUrBtWCGreAcu7",
  "key15": "5UJzj1PDuEvzKdouQhtavdyThkU3wTW4JnZNtESmpF4gQTBpPNMJqwZDytFZkU8Z8AFuanzjH3ewacMib4psJYcr",
  "key16": "5L9quhpnEpNecxpUPaKb1AHCwZ8HBk2rQ8u6SzyhNHJQP3hfv7EVRidEneoUeo6GxUVbFbPTQnWaGMfU6CgdRPRQ",
  "key17": "kZ3n1geRjhDLfLoQQEpXkSkJJXGMmDnRwNGMdGr9ieah5gKWAzafpYr2bU5Y6ynKiEeMD2i76TesR6NwMng2Usn",
  "key18": "LzRNn1Esa5RVJSsX2dZAkuuvc97ndtYy5LKrWiypgoAMsU9DazTwG58sMDio8beH9QMTEqbg2VLhK4FL9rvvQGV",
  "key19": "gZ7WvnQpgLBmtzuxdSTHGQGnD7u48vWrsACU6zrcEpcgNSMny9pLWniqPDpj9qio2Gv1Q7Ng5b6YnjoDDxxdc5j",
  "key20": "3LdWSLw9yd1ikMcfnh742bzKg1JQoAmBDvKJGDRf2ZJArAKLWJFPjeySRrG5WTwCfzB7sG6VCLDzPG764PoMu39g",
  "key21": "2gc1czG46poH9ZDNLViKmqwJJdme2ZyfKG5boacWzrXCC7G18QNRcPBQK5AvvsHAodFgHiDqhz56ihJE6Xq4qWRV",
  "key22": "28MmnW7aEU65yCEgHdzA2JtnwgMx5vqjZv9phci5TrD3bZpoC27FhxonvEc1zJxhoeYd3TfX832LNgpiFhTsmZmq",
  "key23": "3pbbbynCvJqLkjbDFjrpTkisf5RrNmXumQhs5FMK6Xv49fYhucr3qa6LoMZSkQz7uPQfc2jft9yWh1usYGRT3GGi",
  "key24": "4SveGBbuhEK61Z3vYtkg3b6amy9pnLScEQvgLmMZA8r9va6xgN546WhVx9rwoMVZYYPza9Mu8shQ4TVbkKs5af3C",
  "key25": "2HsxcZbGWyv5ZrzkFmL1Ndt16q2HiPire8qhJCeyyQB4Tqa2GwiYte6zcau4JocTK4bb1y7teCw5QChBLnsYdGMW",
  "key26": "2KTAnWQi47YpKQswPNucRKfv4rjwgLKgXYFpcQyr39PPRR5ZAotx3dxQht4r3jXyR6Kpkj2EncuBzUeqms5CxeRB",
  "key27": "424wtPKduFU8KevHpTZzmSZhtrkucCiB9h3vTszZNQzcEorH79V5vP7gQP63mtbsmAHmn5XETxSyfoD9uGudyseb",
  "key28": "D4GniLatpvXeLxNBLHrywd588NJQ56HyuVk8uQE2KM34Wu5jqad4Hbsm3fCUC2nJG8BKFoEQUivw14AvoiUz2oF",
  "key29": "5mLFN1mHb3t9CwWq7huV4q8uiyFBGHNanzyoy54MzXvCw9uUCMQ97tbJhi3UmWDGjMKqWpjvvjDtNXcXFRUKg3DX",
  "key30": "2KfQRWWNranzFmwMtag7ipkxboterXFSaUwQwPkeTGLv3VUM6xVZaWFtbynmsHpqpnYTbhrvGWW5qgWTCkXXjrL8",
  "key31": "4WTEThufZHvfBmTTfqtSSbMHEnY8fGnfnCFUno36odaMsH4c8Rp649XFAQJyXGMiXU9obe9hiABTqtu3CKf2w146",
  "key32": "41NpqZJmHTQqPHF4he6UE3AYR6oXKSikGQC6y1uBhNkd9KpRhdGF6tFvguB4C7k4vwKbx5rp3ZuQmtsdJnd9o6u4",
  "key33": "4EutjxnNR2RyBMp2JgB4QnR7vhw7JeBmJH7FfyieA2wAUZYAZkcQFzC5pysv46xVfbo6mMS6oVhyEpf6LM1Uqw6m",
  "key34": "5YRmwiKYaA2ajKPNqajrVj8f4vH9y8NHBFzAw9645UZSz5mphDRtcpL85HxGJSqHJtdkZPbtRKE533EHiGC7kpET",
  "key35": "38LKdzs9zJt1tgNKq7aG5PjogvwSRZN5neTKAQJgDLv9dFKXn35QQBuSroVHW6RxrziyRpSxn19ituYKX85dzvQC",
  "key36": "4ApDBJFkJcftkqP6eG2tNSpV58p1pe3yZkk8CSpRJmGsYUMfztEdejWBCzkMusWzaAsacdnYcjMR16txBeUj1pe1",
  "key37": "3Srtzwc2sQ6X5GseRDbAXFeizx2NGbnaGibcJjtKWo6wf5asNCLw2pbf26JrA2bdiqAdDTmbjokWXX4uqXomUa8W",
  "key38": "2fg73j9nDAUxRSMGSEjMRhBqi7c4shvw8RW8vYTUp8K74KgcUU8jD2ZTvoRKr4pqYxVKVwP9qJV83Pi959R8ES6d",
  "key39": "WMhS2SNZYiS9za5VbNMdf535WP1216Lzfs7aqS8dUEugeXfMBZUujqzqjsH5C8FTebZVGj64UKNoAWaFJ8S7uT6",
  "key40": "3eQpV9iCamXymTKE1SrYe7L1Bq2WZACq9uHyN2WydYArR95r1C14XkCALLnrAuPv5rZygGndnza2s8MeBFoVnjY7",
  "key41": "4b7bR1jTausHN2wh7tVMvi1Uj9GVkAUdTywdTtGDhLwE8mWGKAj1R6f3EnUoL2NkPKDt3uZpaUYf6RGdU8Cts25r",
  "key42": "3Vqr5HtcveZkLLPdhDhSEpZ4uCe2f5QUMitEaKRQwB7HChHJQmHNuZAXTA2n7NeRh8tD6WR6v2YpwNreVDYExQbH",
  "key43": "3JaMPgV6KYsCqqah1ysFtTnPSNdmyJZbHYHjUtyj6aDPJ7ze6ZUQjLjixz2DneCQrc3tWDpfCzPtpvmTnKJUEV7W",
  "key44": "5fBzVZobHbmcFZma13uTfwpSJZcLLyz7kPCpqmZuQwEb6mJoYRJRJEBhtL6XcTtcNpeHtTG69iyi93XqgE9nTLtd",
  "key45": "21R8EK9pfShjmwY7F5fyDzUBPMMrs834ojggV3cC3KaFQHGhDLS9Nn5ndNbnaMGn6vBYjBpvCWiDxZ62Xjri4LDe",
  "key46": "PMpcmvshgsVSNVy31ZUwetgQCk9TiBuaqFXPaUFxVWa82Evp54UrPvNyFw2vHH148kbqf8w49Eie4yifUzPumPk",
  "key47": "375Urw1BB9b7aph1nt4xwKMA9qwk3QG7Q2SmVC9sqtYLtraQaraMgBrL8nc7Py752h2LrAS1Yw2LTVYVXoc1znwC",
  "key48": "4AKKnJyjLmCns3z4YM57ogdNDcAwSuRD7joWSKNwdih6GTtsXsSYfUMNzmdzavptoYgq2J9KrByvMV42xX3tBejR",
  "key49": "9TXZMjp1NYHzxuVE8JoxNznJupMEuhyU2ZGqy1ZN4PXTqxhivqT6Xwaa2JiokeR7h72iNNJ41QK9QeBBfCKCnpL"
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
