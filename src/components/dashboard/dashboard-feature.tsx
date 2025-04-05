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
    "2F5SLGeNK15xDv5nth9zJgNMpnwFUuwDSqD5RB4RvDusMxVBwB87cPH5mv9TXWtQ7GASuNUiywpmhQzsdB7kTynw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29bThUdDyV7apKTo9Veb3NZ2yXR4JXmnvYq4gdzWw13nALLU37Jojs7qvFJtrHtjkYVBktAxWFHuzCdTuKJBNogW",
  "key1": "7RgMJ5EE5aNMZsZc7VQ1CWNYSPY7WJbhDXcex1zb3MmYoHdDA8j3pai1G836Sp5vtw6d3LN4NmPc8x41JxVK9cV",
  "key2": "2MFDjrzMRsSkqtNkm6aVMoTrJuvr6SdALDqgjC92YjUpzszZGxcCmbH2EWdQt7Xi8Yd2KQLjeZPKWjfGGRnYt8k6",
  "key3": "saPvfWsHeNDc3ug6PNYWdc7mfLYRMw9aqdGenQwDyAkX2CRkn1nJ1NMkCgyUf9ohng6p7mmNswze6r6Dr4qD3NB",
  "key4": "4HC4swM4UoRjgJQ39AErtapVWV2Rhz644Qv3KXzQnK7BfviNAiFbYU6MdvgGkoLeTtQFJVzY1eTST8Ky4ymtZnMr",
  "key5": "2mQxBCpXJ44ENpeHbDzLPry4cWVfHn3tbYNbnfTvgjKYDgHQaZQgJXaCfN9ZEdw54qmuqw4XqnaPNndH3HPiNR6o",
  "key6": "3rVvSDWxBGuHUS4kSxoojEZDJTHUBNbJm9j9ZVzcsphQTRgtH16jTi9otL121Gtr2wYZD86v8Un4N8nLhWNB251u",
  "key7": "V4owrgbMq1NJok7MceSnHXem6dXGY7EYH72pwfKsGp682tba5WVPGkxhfBBb9xiM3NqqQXp74BHLJFeVcPjGpUP",
  "key8": "Sf55cZ5pj65mNqXFmzfzLA7cyKGGUfht8vhmj81HYXjpCTk8qkwZvGAX5KQTqunMCXEcr2rJp6D1qm9c7DkpP2A",
  "key9": "4Jv5ivfwXaJCM9dwVnNJ3oBRYWLXY47n1fh6oL6xkGAZWY5YhkdQ6d6zJmvZMVdxpqLZU91AN49eANKjZmMBRQry",
  "key10": "5gyzRCoxXk1ED6XhqaZrYhXc2RjpbAeEWbPpXHJsKYchBaYFEGfjkfeSSRCi2WN2dXeeNhz4Tywgx7reff26y6F9",
  "key11": "n1NB4amWQu4mG73yuMd7ZPCsE2jcU7H86ucAKa3A2te2uWggYfxy9y2bH6yWkWaTA3uBkcbbDma8qq9BX3TfxJK",
  "key12": "5oBM2X4mqQ3umf4mgAjuvhGYtMwasHUm1rqAtw8DRcEUGTKwVvQ7guc6sxJHeXUkQLzFEyLEc3VmgZoNkDx4cbeh",
  "key13": "64z87wj4kfCexG4TCGoc5ZZaDfL4fYxbLi6DtdYWyfK5pUVvBVyEyeYcPBC1RaRNvLRWEdun5u9HiwhW2xm85aJT",
  "key14": "3w6a7BJM1FGD4QLR1JFLb9zBrudMHd49uWRdbm1wQpbV4y6u7oDYdjCZcZE83rB6fCstJsKuDRJsj1b9oQ2B9UwS",
  "key15": "2c5RCaurnwJaX9cmLM6aSgHWfCaPtGgnTqeHde7JvDKVszUW4iDdsiFpiCmaJj75LxCCrNmviUU9ov7ikahv4Cuf",
  "key16": "VxsJkdLEAEBgNcTh6n9AWmA7tqbyeWgfnAs1WjENcLvUHrNfVPUvULau4GfN5iKJjP5oJeVd27yygwCYfhpNidn",
  "key17": "3uTMSGDGWk7JvzTX9Ejba1FwU7idtfh5BvGpFiYKreJWV8o9ZWEekpTpeNuTu6ppsWE78of4vKWyMJnC76cEwg57",
  "key18": "25nZP42ZeNwqS6Hw1ikx5LSLCPSdDDyn9UWQGdyPZ5UZhqp4o346vFpvHW5D3FnaKbz22P2TUK3tB9qMPMqdnbc1",
  "key19": "2RFHMyZVbu2m7jnwGi7sEuwuy5yWY44a6cW8Ya1K8mYFW6ZR1RU87cBHTj7Bqk2ftz5hCpny1ZNHeQ21ZdmBNQ9i",
  "key20": "3oP6aQDqfK7aHocJYxX7nrgnyS2p2VkNhjUNCqcRojUEcgPvjUSwMgtQkAxuxozhp3ymo16w2FKSWkvgSLHFRwn9",
  "key21": "nWEMAidmpYfbt5NoXRrsKexGpqAgZ1WcuSapQJezBKgcgE5VEeaDs5DrYx8g7AT64cvXK7TxmWmXzYRwRfLhoTX",
  "key22": "wxwK1Q3UCvVBCh3Vh33d8Y4sPs3N4bryB9X9AJMsoswGqF85uFzxHaN8qdxUWdH4nCdHZK7G1EZLmRP72uiSnMq",
  "key23": "nzWkNc9sz23VJFpwGcASLyY6tSAEUkQdxswbRKkNxK5Q5fYndyPWbbzJqWrYseJA5EQ3bKkmtEKfNDpfFoLE3Qp",
  "key24": "5Nhg878wfLoMPPSwdvDUQ5Z6bTPTiXmMqm3jiB5zyMUo3jXodWCoaTssFh8AWksAjL2vFjSsrW7yxpjhja421u7u",
  "key25": "5jsPFqBeEoZiCDPBwaKVr8SKRATNUYrWAWWSfezxn7oTVw5GHtuiWj6RrEQqfyfFSsWoGaJdLQCGY2BSeZtKp2ML",
  "key26": "5BwEzEBRbEBCuuM8YYQh163myrC1iH4EnvKBrdRGRgmwwwuK1jsF2151TVFsNuznnompHrf8kXBSzi3ZgSCmWPNA",
  "key27": "5kn1XwJtMMG4ypgYvRF9XLWjJWZP7vWdECascpfuosxLt28X2nf2sSMrBMhHdH8joc5CywUgVFKPu4Uqcep1WtEU",
  "key28": "33gTPwdD1XFDEToPgpT4g4CwKQTsjpEreaskid7UDtDUCHR3jF1b3oYnfAFtaA5A9oxAPZxTBKV1NS5ZJyoWy9co",
  "key29": "uPCzf8qzruumrRo4T7r9zMcdCVAiaDtsnhwTKhFuRtBxpDajZPVdBhVTz6TVtX3XTQfzQWpuucPAt95NNYNEDmH",
  "key30": "AVfqhokmmF8fe19fNkX7CYc9QQ8YiD43fU4CJuf1tv6LPiRo5ygPvdJVYuMhyDVvVTt123gyLE4BjA3eqEKPHvC",
  "key31": "3PNjg9Ci3xGxcqjFTH9Cda9AnEFCwWGcX6E3v3TDLP2jddsLPsvCFJYngBmbbx6T47R33mXwHPbqE2qb7FNfouno",
  "key32": "2u6sPsBYBf87Z8cfwqKnZ6fMLhER8iJ9LvYmjXqpsJ8Kha7binZs1deZzUiSRS396jzNQM8Aqg4tXeiDNs4tnyuo",
  "key33": "65ue1H8dpwDRjU7xtFgkJ8EDDD3NUuAzqVSGEv4uFcMaXPkMCC14WuUJVqZ28oocUHmmF85bpei94sveAgJUv3ky",
  "key34": "F1K2t4AJDkromSouxUhY12ThtovKDiXGKcEzQtp6yBzCPLBd4QSc9URCe62LNcuCEAhT5P5eixrMn4gYzg59t7j",
  "key35": "gUjXoEdeH89noVtkYAZP5UFoEmTgyUEVsXwFsg24JVp4iMWGZzg5Xihjg9MgRPvXubTe4nKduJYaDppEJtAvGgB",
  "key36": "2chXoasupHC8becvudtUUmQjuCA87oGpwJQakUmhUkqoRWD1aNniLjWLQtpQMc1tBXo9ieyzctZSUeVCfHQdUwLb",
  "key37": "3hUEx7occmekg27sTLpuc38qgtFNKAWQ99mup17DaTM433qBYxdn52wemW2eEVtJ2ew4XuHHtF4SYSAWe5Tv4XUT",
  "key38": "T6hCunAuSgFZHS6f7ZJ6n4ziFLmFsonu7zPZN3xmj8P1h7F1DS1wDvqxAFbM95BKjqnae6oyzwFP348ij3BnMwa",
  "key39": "2gp1rC7URgFm1ws1a1RbzHb2UK1sdP7JPxVzL7jxpiPHYhca4MyRu1qiRTzKTNmzx9d4j2e183ZhjzdiV34WfJDR",
  "key40": "TRk1WZKPJhk5kJU6y5Fga2fpf1S8uRjP5MkdhyY62K3CCKBXjWCqsoSZrtSGxaoWfeQn1NxcimipdEtimVaDxro",
  "key41": "5g1BZ588EktcKNzATSsyC48PKjjDjjPCE68CXfPDRWH4Q2UYdF98pDUUCgxGsxvkwCDN8PPeB4w1rCJzcRj4exqw",
  "key42": "2ch1o4jjC8Y7335gsP318U1ZKvV5nJNZ43QRYrAqZDqt1poQYHZZ2ur3YqjNfxCdMdSoKYckpMLf4zoFpucDxk8L",
  "key43": "43SH4nf1Mm7Jwo7zT7XmhAxLee8bmzHSYcDDzbnG7Q9jisQNu98aQXFG4jEDCc1fYBinh2sH67VuujFZRk1Wa95B"
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
