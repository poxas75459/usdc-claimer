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
    "3PptTWchmZvHv9iQpPi56zVNbeKtr1CByf6FEtYvwMp3YyTBTKC4995ED3itTPSQrvBFSPCMJGV7Dpq7erDzLJS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o9Hs3RtDZw8iwwPmvJarxP9TrgbukBwrsv3kkQ78TRNEqGr3mEKYFzvmZcvvoh2HafD9grFDhM1S9NpKuBpBBfr",
  "key1": "2xwgKURQAfs2bCHRmdU5mTy95jMqiaghBmzS8sTBBbgYBkE1xQvtJqKWwQyRup4ZC6ZbufSgxcxWNCw5vQ365SQ3",
  "key2": "4bqQTPZ6Emec4JjDdesdwEKgU7VbKN8xNv18mDGsb4cibWTKQGkXnK9y5hQN3mRL9RF5tkKAmMwYKX8vWpUY1vJu",
  "key3": "4Dcmix8CxBam7tGXcu9CRgLxJox4DHiaLxwcgAw2amKAehKBnsktKUg4XBq9VLa6mmheX2eXjWfxdzy3asn1QuWH",
  "key4": "4RTxkw3eMx6kg4Mafwjg7gJdrVL73oj1yjz7Eqct5LK6i1DEzjjXkB5MN9K3jkajXSKSJi6EVbci7yGJ3vFcGKrR",
  "key5": "32T4ZQubhpwurvAG5o2F35G6KqFEPvdfJrxZLu3Fp2PUEvRDnNnSaxBXNgvDztCQM6dJvqH15bE6Mw1nFCg32tAP",
  "key6": "kwgabjA7uc9Yv9GCMAajoqDBySZgAMno4Y9MhoUS2u3Ptu3jvXTc2aTPsGUaVnXzAZX5wUUhaEEodBz821mGTAC",
  "key7": "2X9oeTFK11SkvQPfjUErAfc3AiGSVE4rWSWJ4AU69XN83LF9eCBb7kNrrHKvuyG9owCVsd1ZMBQoTRYKWaZRBhnV",
  "key8": "FKnvse1aUcqy7eHxVpd47p7tjQnDnx5H6ZD9SzK42ZgvxLJZcA1GRjwgN6QXoXNuWzJunfMDbn4fpZdMrTKyWsm",
  "key9": "51b4NAonj1MvvVgpbireh365CZvkFxszvUgunTo2xrqjefDibzCDDiZnH5fjaUBNY9Tcgb1Jxy2MCVCwUFmazgJv",
  "key10": "3GAkja2hdS5p1W7Co1k2JSdA2Eie9y2CtE5FZZN5oAHGWEum8wnAb4K53jYRewyna1wqHJpa7Lc4AgHAcayDeJj3",
  "key11": "4cY1J4BQpwPAdUMUi3A9cGEeVQAuH3bMQjAfuwGtzK6RGdHcspmQyNQyEd3Hn9auNkEb87sXLbGcSgxvf29wV6z4",
  "key12": "4iqW1NMi7Sdc3KhmFV8gyhPXdLNrPHoeV1LrmhgXC6tzSPaaWxNHiU4kxVEwsXb121bLCjXzYDLfFSWF1P9VBB4b",
  "key13": "3jnUnrJd8XcURTwr7qzuQ5QEe3kYU7UErQbCPuYK7wfHLbAfqJfrgV2f4zeA6G2XLGd92NuXL1hPJmznjrvvACPA",
  "key14": "44u4ooDGefQSZjgCTsoEnrf8ze6vQKK8iPZmDpbhUQscxpaLPbFtGh93q5N9KVFa3iN7qZP4cfqvUnndYdqavuRH",
  "key15": "3f5fC7RLCbgJGYZ8EB4TaEwpRtvJzD1dNRFiRDSgkiTP7AAKxa3b9GbbhMDuBH8rQkveQvqDNUwnfyjs4gB1Kv6V",
  "key16": "2j2NiHWwoWVUFqxfeV6bw4LLoF2BdM4n1cntmtyrQBe5itrmf6vGkKXg5UNZqu9K593bCtZ9qqh9CCFSx6Wi9p5h",
  "key17": "3LfjVL26vHkZK7HLwpfZxwbnMrEA7UtiheZ95ZsTYCcW5x8ipzanDw7TnFYWFaAbQccRJS6W2TMG2hhhFWpX49T2",
  "key18": "4J8xoK94sqbLZT8FtR4gB76kAmRSK2pXrb7CA6twGvs8Dx8oZsuZ7nfzbVvRJ6VjtM9CYkQViJNeKhAPfVtqbk8R",
  "key19": "21UfzPgMCGcXZf9t2ttqhc711Drqoca7bnZSoiWGbZ9DgwYckpZHhedfgMqxCGUvvFwMGC4ox4AKysoNyUHDzCu4",
  "key20": "5YEtbH5CggofcV8kQgr3vVjEsDAeLG6GKjWpgevwkuwJUdfWWeXbo4yv2VksMen4bA2utbLedofavAetnVFw8wNc",
  "key21": "5TBT3VjvnzTSAS2MVkd3bM8WyqnpxMvendGaR9QWdVk3ACxxnX1zspYhrGMt9UzbmmBfzRHw92JzMH3VnSU9FwDq",
  "key22": "2NHXcwU5Hq3dpoxLRyTAFLyYyaukeMdXJbxVpyrC2qapZgZKNSmvZi2WARV3Lwf2DshyTsZhhjkd72bAxbHJ64ut",
  "key23": "5XN31MyjD59ekA2vcNeQmVF9aRJJnr2L3PjRcXy6CikRXHgd2exsm9yfWZpi3HfzhMFmGVWXynfuCeJRCGZfDUMm",
  "key24": "3mxz63U99YcHRjTnSRLmhgzoA6vxVytZotQcHYqT7jnieNfRJCaFpejoDcPH1qeLSLxhRZZoi84pam6n974PmU3b",
  "key25": "4R39BzVBQe14nNgW9h2gR9Vnedju38hGCZRs9Ga3e9WupBH2t4Cp4pRSUEgfGKJWQs2h993MwooiKtJVd5WV2Tmb",
  "key26": "4xduaxhX1dJzWJMAL4C4xfqY8YXMiB8mSfK4hbpmTtdhcaAvqTGJNM5U28ERud2VJXLR6u2aGUiPavA2LtbDYe4w",
  "key27": "51vRhDHF4Se6ttNPBk8NYcDRyddoJs18zjetimZg7aU22nMjd4iK8kZVFNWg6SExpB1bEc12R4w1g9B8rgwW1mFG",
  "key28": "5Zdwu98vEgZdcqDduKUistdiuiEhk7vvtseEc3B9b62iJ8Q6U6wdP7rdj5kkXkzVgL8E2zxDSueQtb1U1pXwUZMJ",
  "key29": "4FC5PorWvEWADgsCvmNmzM9naoBaTakEdo2LFXXigrySrPS6y1HZVykuZsVgWjUXompHGam9WjYC2EWxsfqYXe5b",
  "key30": "3BssMVbXfNViwxZwzTkkQWQa72kiPMZUupHzYSVVzbvijwabZeSSjRgkStPbETuUW2yExu4WdkikmVmC14VhDfDp",
  "key31": "3b82WMGgpwzzmcWFxknCvjGbHFPDGcbc5maWbjj6YaXD2HbmLNSMzV1CP5K1Gjb2GMNc7fQ2QfGb93gBFwi18Psn",
  "key32": "2wwyjr7ezgvqbi28iZt1Wjpkhm5qsLVUwQcX6De8aabhYyas6GnVgcEQHGHT8MPSnbB7iDT3KwAgRMjcrxDeh9L2",
  "key33": "4xWEhZf95cJFuAbTZq4Kf39qZnB77TGTRUEvdQeFVJ1ch6xEJFy1NSwXAyPJg9w9kmN5vBbZuFX4MbE92HQ8QbjH",
  "key34": "5kimothGGEJLrEjfcdEVCEVgxhc1ry4HaE5ccbT5sowYf6pqJEkE433jJbM861KiWD1Q786VB7ybYxwn9Ba94tvv",
  "key35": "5sgQSLhqtTzK8mDT5kQucMEK8xkZMFPFf9XSG9mWan6EapgnJzqEMuiifLpXiimpE31iHbV1pMmXqW8EyD9Z7tB",
  "key36": "3ixZ65iAF9VS87Bk32nnMD3MCCw9Ztn7CSaeBJyiXFmNCbJ4x73vqMQx6mwVjXkev7PT2oewuScgf7cLoWmrKU6X",
  "key37": "5VpJzuaPsjqmXUVmrMytxyK6RbawkMLqU3M2uSsCUjgzt8EVz5AzKwddiGUSZDhcKwQHw5CZSCZB7bWpRFt6FsoW",
  "key38": "4KN7si29rZ7zPy4NEKhfLBNTBSUivWMsf5UDWHr2rkVkCXxdLAuoeVDWSQrHqpEU51gAJq55QC3ihMS3JeWs43LK",
  "key39": "4T7DhbHwM5AkfKXx1uM5y2JJzizjHtTErTMauweJUZWc9YronZLVzs2M4NrrCfjfdPDRCAmY3s1y7CiHV8ncVZHq",
  "key40": "3ZrtGfKk8xQetCreDpEA2cyUMaqtqckcR4fp41bcvLTWeWipGNn2avaNTUw6y7gqP5j7YUqTFihdX8oGzbTSmiZQ",
  "key41": "D33exxqMcjoMCwXfwTViVo25FtvLNzMBoLHJ6ToPhc1myBsugdCa4f6QBPSqdPoR9Ux9krfVoZh7i3sZ4884Xx8",
  "key42": "nMb2WbaSMzLFUwqYQ8eo25k842TZhmXXXu1BmN4Yp4tc5MbQzrcSUfjwQNNN7GLHLyDhXtv9fMwHLkvovZwFbCe",
  "key43": "TX1FHMf3hXuLZbdMfhBMebxCeAzBE9aNJ8o6v8ijt8kwpcQt1kie3FVGtuSipnjsqP6NMqtET8zT5SwS1ZFXjzG",
  "key44": "43vGERnjtwMDZMyRr2PYRF32YuwpBNsftC3X4sGgNZJ928oRsbgqpeLDeEFzizgnVSw5Qutumyb7FhVF9SEXpnua"
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
