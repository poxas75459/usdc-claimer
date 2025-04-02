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
    "3zMHEsUaDwGpW1NKdi6mg4zcsexqcocewxkdErCXqPVdmTFnEyaNRT2ZbPyRyVWk3YR7VZsGkaNVEjJa8wRS8U7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bUaeCXG3nFXLRk3ymnf9tYGGs3Es62noWfoxc3p5yG6kvHrtXMoC8KPCKDWSGppWs5Wf3X7NjZZLGYHt8pesLuu",
  "key1": "5ZEhGVwdVffvsxwaFfoq2APdeCFYL2bEWXYbC2u2ha1BwHx4phR2xHnriXAgKVtosDqS4CGpvDXyQ4HvfN4xSzHM",
  "key2": "35WBcKwjrGv5STUJ1rbe3yWFoKjgf3QFaha9DmNi47S6aNw32k9LVF3GYfYoZ629B8wStnwPsAB4KCXYrLTYqRak",
  "key3": "3j5xXDaGSmPNcqcL9TJ69ZZorQyPPWWqWyWZ2ThZ5garkjRPqGxGGuDx7qhKJ4BrotXw9DDQ7gtQP7iw2BuZmoro",
  "key4": "4jjnhyHkQ7ToawbT9YLchedtKGaPefo68GZxj5jR98ArLKdyxQugZmiN42X4vMPjMdhYJ2hMsit4PPm9fB3NdiDv",
  "key5": "3B1meDGg98tZexF6Z61hd1SWCqaW1ottYHR51SYfZtKvPUWD3HJqcSw7ckGsut6WLaiF3xZDhRXUZqUV1QSYxUdj",
  "key6": "5z34gBZsUxXqBhvGESarRiGs7DMj9wxkTT8UALrjpiMxymvoQk9fJFykT6J7iFdseD5f31e7i9trS2MV9vRHYgRd",
  "key7": "3msnRcawa6egcUTh5nxDFfzjWxARg2MHL1ouGzgd94AE93wt3Tgjr5GpTPypwWRa5YK9otvgSBsCJh6uiBKicUr6",
  "key8": "2UoAiAcGvBW2t36N823e6DomA1JtKMPUeAfhU6KLceCCzXe1y8RViDKTVL1XbQxRAb68pNHAaJXNsxGcZd2i1p8J",
  "key9": "3hcUGx2M1WUyHtbcQ7RK3Jo6x8Hzw2NEsyM3Giq5tr2VJPfCZzJJHbhbhEWiE1PTJY1wbAFHwCyMCfz9ariPmtYN",
  "key10": "2WR6Ai6spf7rEsSdEhVQJQJLPhKTSd6i9V2oTFSrcVsiFeKeWWadqayMTPyD2mP7dx8c5Aurr4ddfAHYmtVQMnxF",
  "key11": "3XmV5d8LN8JDwVzmeBHroozaFJJQx5L31r3q1DfcLSMSDezuVapZAtKMLSvuPakDQU1E4V4mV9cBZhbioUG7vwM8",
  "key12": "DqCq6rcViHQ1EVj8mJV5HDwyq9Ae82otVxdkYDJdTM3jftAvXNeUkkUqeKpk5XSnvZ3oPz6N3MQxFpcHw9xdE7C",
  "key13": "5fc4sMgpxMYq9hbWSrkYWJKKo6hgrsRV69wYF9Vi44uaxwMBeMvFNxMQRA5HnzV7HcNhMkARt8C7GuyR1xutRVyX",
  "key14": "3PmtLmriu2Zr8V9rE7hFeZBC2HuBNHZFCKNo5uefyKgt2UN24gpVLMgMH3nZ5M4MTZEoWDnJdJacbwCNsb16Z1hc",
  "key15": "4GoMsKYeff5DTWAaUYyctPhfygdoK7RMpnvyt3okLz3bdcr1ixBTVTGogEBbkp2aHDeCnvwZ8deyz3kdbvwZiSY9",
  "key16": "2syzGZN4frAeeA6yZTDEtoU34udtkCX2RZ3UQh8VDeBeUVkgHy7RVa23Hsoa3xSAtmeypw4y5g5uveo7a7SStvGL",
  "key17": "ZPEB1gNuxQWNkCjjBpumbJud3ktRkNwjxe46KhJ9Mf3C7fQFvi9cPrcGaxbHn8xXYjHFGLTPmFfTiqQvARtUr2n",
  "key18": "5HXSKcsDBdshvergds9eKfjWJ3JcbzC227GtuR4pJ8Cyuw71QBsEw8rFkiYpp5qxGaYx3214t2Wtfv6SaD5gShfv",
  "key19": "2onUz18QTNGpU7EH5ZZNkM5o1Z3QCkzYZcVWvGJ4kqBBSDkzaetJABkprXFkwMzJVE9qTpTyyftDY4MYXML1VoCK",
  "key20": "2gawEwNE56cVm21doE5PFEXVTL41AgFuG9caaiYVo9uNghDWKYpGCNC1erFKs189CKhuqUQhP1CwqqUVJrBAwaws",
  "key21": "5WWHeYzpVRBiQvDfvmx9gZLYEwgn8H54smS7Mt8hrdafiWkoqEHtBk16YwS3oN6358feLaagBdvYH62U6jrmkWHh",
  "key22": "2zi3obTT1sHjj5pBVHwEdSGwKAxReeZeuXZD1G5QjBc6vqeaAdYgqbdXMhet5bMHM1roUXKckjo6H4ZJP77YXuda",
  "key23": "4fUKVoQ3q1Y5KhoWuD7MQry1AjrRsegUuFS2eXVmeo6cLVt1Pvb5sySBuEDvQ7HMtAgS4hAaRsuSvfJCtNEHv5Wc",
  "key24": "TuKLwDHaotn3bY3UnX1nUsFLD5qoPL6zaYhMfM62sZDZcKqVfy6tTeWWsUPG1gP5eop3GF8XdNNC4mG8uKVQdwh",
  "key25": "2nMhostbnmh63WFrkASfu6ev2adfJjBsDrGGAJx9WTSD3R9DcUGgcWJbnZJkKmdyUetfCksQntwXmovZcVb8cdTV",
  "key26": "35ybruDSjE9XCcfTMPBELwdx56GtrxiMVt8DaTfFT1gBShFhxHZjakewTuCw4AHhyDuSmazCTPckq16CAPBV5Tiq",
  "key27": "219FpLHSze3oAYMm3JDMAPQgPkcMkcs4TCRghL2tbEursQRxRHCgqp61B4PK4fAKYx7wgAz6dW4vHHAkY8NkAYk4",
  "key28": "3hvUUu5dqq8125zDXkzreieJ8Q2ZvuJtk67wV5wp1YrLdha6RrdS4pooWcx63bbrGxvR3ZBbYYJVDThg5fpa5o4A",
  "key29": "FhXFnVB9CzmBPbfButjDKStC4WPsZVxmgUiKdBSMAPnvwmTcyBY4znsFMvoik9o4AJ7Toa7YEntaUvWc25cmwjq",
  "key30": "5Nk1VWE5BADBosbiANFSVDtfEsnswCy7Vs1Hb92ra9yhj83695RXqVYHySmbEH6L4aFczCERVL7zvv7WUKnydVBz",
  "key31": "5YzdwxEyDwWookcfhTcCV4ZRoywn5JiiELcknpU5M5fENzQKABvQWp9Mkwf4fmWRDSFsDymKKN64V74iczjfkypF",
  "key32": "2djRGyBFGHT5aZMD1FTLXBqF4ZmTo57kge5bozQHbBqbXxTEQbEiHaTqG9ZN4x9W7fGLyYFnuF5gyjvLBCeGJ5nA",
  "key33": "55Ln7AkiW8E26qz4ZZA3q4wiPQc2n2tQM68oTdLB3CiJhVK61K2zYEQdeReWznYGP1NisuzGfReepzfzc2bk9HnG",
  "key34": "a9tcUmwTJHUjWw1vXz129FL7Wi99DWCnQfj9cL4aBMB1Phycw3u2g4svYMCUStRbxTaGRrvQwvHawaqXoYLoSTi",
  "key35": "2PoQLZGePjbL7a8pdpQ4frBP2eSE99tn9WuXz8L5ogpYFgvBKLdq3HiQsXp86VJ1xHJKrgLwci2NsnT3Qhqo2Z6C",
  "key36": "w1bbMwn4296hbggAVGJDZJjdP8mUeNczHGW6iq1egSRiLcS3staJ1J9QGfoQZJssdNDiV43EFa2Z8C1BcFkLS65",
  "key37": "4nnypXb1z7EPiBmReN1NfDxktTo13x5Pq8rVStLsLE6wVwQ1k7nV4ryq4ye8UNozNKJLXi1HykgGx3mgvrZSYDxY",
  "key38": "4QWztjZjCbEzBXhWzzbPsmxbHHeYM9j69imswCCoJLTSryq2YXjgGY6B2WmRG3ktxhwvZD9HExe2uYjCrY5xsQGg",
  "key39": "3KrGyRvLDeDcTK3RWbigzAnjJpgmKrUxZSnAJjyD4vkGzucV1WfuzMgdTy88GrJ2TsY82zMNhvGi3BLrY9YLoHBH",
  "key40": "5W9G5a9SagavxiFQYyZvYPu9KhoHaD1GnyBCtZNELhFBFMfURg6XaWeRJxf6B8VasrWsLVcPmg9qYRThYmKNPoou",
  "key41": "gZiQfo2vrtMXfnP8ifHq51VJ81fUig43QypzVdXfcUS18BisUqw8y7GQ6Nmfd9GaVU3JXg2k7Sg2AvpWWv876eU",
  "key42": "42YaN3ygZAoVvWNxAdqtk1boDpEJQQNzDmfpYpeFVp8skMYMp29K977B3VWgFej7cz9rWnhJC98Tc6oMQivmqk8B",
  "key43": "5hLAggfEZWamuvSXNj7cRbXLrTNCmqMKxNB8NRg7BkJj5wctAegLbY5txAqgV8Tsnax5ACGoe84RydZsQ8eyoM5v",
  "key44": "2xHe8iQEpkkpSCyfRY4oDj18GrHdFyevDs5ScSYxDugXrmBDNA4nKRXx4r3tK8QWeEBhXrdGS3HfK7V9CvpAfwds",
  "key45": "56UAh4epDTXdpFvb936rm6r8Pv8baxQWU2gYWT9EC2He5xqP6b2Hr4G6oqNikwpSvp8SadKjCYJ7tvkrj19EQ1iU"
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
