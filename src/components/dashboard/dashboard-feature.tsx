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
    "4oUdbEZHk5bbQS3V9u4x5ACibQJbM4BsoRc6VZU9q8eNe7b5fa9bwgkFuaadk4quU94WmofDrruH1zSo34fbHYud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rikk98YUFMJrQS6R2rL7L9Wj8Jn5pSYYfoQ7afTXbbuoVxVgEuXkXh2WVy2hABadNnVYZF6fxgnN5CsNPF6f6Ex",
  "key1": "2nx2egYH3tbrLBM4MFc1kw7nWd4MQoxN9DeamdruddFn4abKe2jm211VtJjaUL142sXjiRZaW5RpvJp6PSLh5iRf",
  "key2": "23DSZTqakuuz3DsDiv3sq4XZvxSxr7JVNLrUeKJ1WoFbmVNXFn8v2DkqepncKPZKJj137y8GLXP84VczVrc5vcBc",
  "key3": "wdF2JJgj9iz3Ly5crh83jtum4jh2iz7SGkGwTZvrx4B2sUgL3vKagAArXkZgaTJVD7dWBxipirYJhgYEUzzvZgR",
  "key4": "46dXQuxXBii5spzMrfkdmgyTCNgFqH3aRzeHrrdBXjFkAjEtddXXPaHAiLJ3BU2pR2bUqywrUk2Jyh6zpy6845RH",
  "key5": "3LzLcPReVSuxRCRUCpAMFLfsLZF16Je45WQS5vkQe8uAdTTwGx6X9BseF5RAUgiXBhMMrCWgD7crB81Vw1ceVvzB",
  "key6": "2bp23yCsnqU4msCGHTmRBpmFgA3nLrKYX4razVssMNyHZ3JS9VNcQiWeA6ZFFpwFdcTPpY1EN7qD9B6QvSjKZVG",
  "key7": "WRvVrprUMzN7PSW7anuGMFQXV1otbskVx5DtPATpUHgdMayPeHevP8gNJFdQ4pt96ouA9b9RmCKWJnzXJ7ShNPy",
  "key8": "2yT3F8RFBUjNvmbY6FxMBwVAQ72SwNNi2qdBGnXPZgruxQRFcpfcqUNSLNqho2Gkg8An5dgLst9A1V4RsypXAoRK",
  "key9": "25Xau2DoR2CEtdgrLsL6hPtMAvCNhvtxoG9Zf2QPB1AXh9Xf9nFAhcPbdNvMcKiP4YNYkKYup2YXsXkvtcSaaJ1Y",
  "key10": "4hZ5trMxjwLKLRUNYt52eCWzrn23ykzgqLmN7f6u2T6xscB2MW47U9uoace3ELmCxAcNqhbYShLSjpEy4mdQ62CF",
  "key11": "ChCdkJqUu4x9vuw7og9ckMzqwx86BQF7B6YjuiWWpw9pBfPzmzDGM4uYgca99yBCPcfPWUSFTkjgkWgrqhLbX2N",
  "key12": "8e9j6sfwJ7cQcPVG4mRwJwiaKceSJbRerS5iJbY5RA3Y3gscjqSMRURUFAY9WxskCHYQxVPVCCZv7aeMp6npe89",
  "key13": "5mxgGPFiEed4afY5XWYEj83q3YZofCZTxqjpUHo9FVzoirBnpdjaqrsCaXYzC3UmtinjADpFBDJPUyyu1nEfgeSo",
  "key14": "31dRf5Hc2GFyJGvAkJ72mUMxKAFLDgLnz6JXuFq8wajmk4XkRBS1pvYK3mVdezqdYJUEAXw291VpMetGaCcyt8PX",
  "key15": "4DBBaKxj5PNbFWZXDM72j6K4XBVLcmaSeFysU89F2JYEo6ZedTXmLzKbGnPf8MHP7SHm93bE4W9hqU2Y8NbgmBmh",
  "key16": "4K3o42rbHWrND2CtXpHzEcDXTpK3y91ApzJdV9hRFTNPDecw8ZJ2YAR87B47KhJryog7wWm8Z6vXh2ZeyuhbNfp2",
  "key17": "2pM3efxnh41NbXWjLScvimFoARGCgVqLGd6hZUr5QLGmx7DoKRsyTSADATkkhXmpZXAASssQnU3mGbEPaRucxfvo",
  "key18": "UVYpGhKPkJguSVreJuBhX58PfvrtkgjfZtgkjEfojE4JjRnM7iowbpvM7eBdbaLw4YtfnnLY4DMvmGu6Ay9EE5o",
  "key19": "33XmnpU1NZZnfAihTDznE3DqGEbjmbkgHbX7JMUtewqzPspiNcRWYNK15NFmWU3L2bEMcYwW8xnVxrcQvhGohoJc",
  "key20": "3ZuGm3mwefMzeM7syhEpuKmcGbsghitjyLY3RjDVJ9CCi5Daq8EQsriMrqiPRW5N73dVyhSwyEDNUrLREtjQvbxy",
  "key21": "TWNTfvf9fXsjbCGrD9CXShLPwieinFTcnL9rzUAcD3wcpbyDf19BVeN4oQLZAgq1EjK7yuFbHD1dcoxoEK7C7ZU",
  "key22": "vde23hSZVUkgq3s4BtMxB37pXwwc2mCSgCPMeN1W9tLHfunyzJTWFwvVDkkNW7QaKBQVomHKJpu5jbpDTFiRcqC",
  "key23": "2Ks7DDbN2hF3nHy5iq81eKKKwhs68AjeJ91QosQRmrHUHusC11KuioMWuhHEUw7DaKMaSepeWi1YJCwXGNK37hBj",
  "key24": "2uML69YtFLpfTHho3wXz6dVw7pCwzqVhzYu45ReMnZmvLQgU99b9xYH8p39aTSQhSqyj8U8AjjvsY2pbKfea9CGs",
  "key25": "3YjJ4NRkDmnomFRBs99Ft1hY4k3LvXgrZzfCVDbTsG9wEtcaj1qFZa6nJkDhhQ6gtWffY3TuWLvFjLi1YdwRQnr7",
  "key26": "3oKgeB5aqF7W2chVSXbVR7T9JuHmUDVFFWkcoucZ8N8r7QmbKHFeVNVZVxeEZ3PsntMKsnMs3W1FCFs9i2Rte53U",
  "key27": "2UZzKjt8pSBGCtNT1w9gMMqM5Cm1Rf6EFRrtKpPiezTPX2cqsozLUnFUrwtUwUz261NAPpzgSn24bGau8eSSnkCz",
  "key28": "3rr4GqrYo7r5BPzLkmLxdQh41XtDuMPDvvuFjBaW6AuK9PLhKHmW8VKSc2CjGG2PG56dai93sLsZBEADriqvFSJC",
  "key29": "4HXXEDjctCqheCeDoEJ2Vj92hyqp9MBvHMwWzdvVUGHujpHDU561mqTHJwm6EYvpAj81B289M8jwgDTDSwSKSDr4",
  "key30": "3Yn6Pqir7LBfqiKrSgxPrGqqnZk3vwZdmp9m4e3AAweS55mP5sQVX9Sxi1KwhXR7NaqjL3Yw1qtnfXBLGCnracJX",
  "key31": "65ymFtvPJvkD4VDVu7WpD3odKLpTK26P69apmC1eVQm7wYgbi85XeWpGLBrjQE2w47s7bp6H1axTxX1SpB4jQCYA",
  "key32": "4THePdowYAP7VMNFFSeymdRFwbDmLGGmUfFV7AQvLz3YvrpijsDJEgHT4dmT3hpZpuga49NnEfqn5Q37uwoFvtYE",
  "key33": "4Cyi3oKCDAFYpt8ArE4d2m4eCGxaKGC1aBVzhH1TgtHTDE3ZDujdpzCc7GRhXQNBSckLXGT3RYVEaPSw2D4TgMqf",
  "key34": "4ATpq7WNvCwpiTVEnX31aNEFNqxAoHK37bMCKwxLox7PMmVf95nbtLgntDL2MM1ttR35QUNXscAPqkNbz3yGSupf",
  "key35": "RD5NvzQwe2ELBMjJgGM4yS9ASfj8vNjr58psCC3hvBH8xVgHErwTmXtuibQJkgUReJMDm6pKQBLMV2YdLm8sbfL",
  "key36": "41gTcqfxNjjrwsQqAnRBhtBoDgWFR6PNFLiZCSfHMTYv6N87rz1ojDBmGgiHVDq8ay9KWJkrrQcjwhgo7a5aQnQ8",
  "key37": "24UMiwisrXFkRRW3J6yAqRa2FDWWoJDC2eD79ssW9NSTwRXria9rWwkziwzHcTEsVigWYHf6oGDw3QetFbfNPAXP",
  "key38": "4c2R6Z5tAjxVZpH3UcsLgTHfBmHumj4YSRM5bRWUZWnfcyBsa17NDx5RZfB4csPvTuDFiN6rTApMQQgEVPT5QAo1",
  "key39": "3sCtzVjavMcvob3VPH32fzvVdvmAbZ3hQH557AaZbNo4b1nedCznx7G8eYCGqXELMdL8moLLa6WQLHseQA9eb9TH",
  "key40": "34CTxAEnZ5rJzknKJiJpX6pAw4u2GoeARSAW1PFQWCUzBNuAjRjGGik9v8Gv86myMbGXxg3wtsKFAF59EXxY4rpf",
  "key41": "5fWEhcqi7QKJN4pfYvd45ZUvRYJYqc4gQD4EXuvfSDnwkvJMr88XGbqPo3tG6BUfFTEaZE76QhJNUh2XdY3URiXp",
  "key42": "2mXKhZj2vqwfAQpWQHwQ3N48P4QRzA1dCXDQ2iNoehTkTnRKE581v4AJmxAfmeaatrgYa8H57nSCWsvsonKC6LGh",
  "key43": "4r36tQbes8CuguBVoqtXXsvfKCVdJGYpRLJdtiFNik2qDRK9Z59maL4ibWJfVJfzMRjTZnKVQnPRsbH33PKS1375",
  "key44": "3qWjwyWQSZtW5xgXVgqd3UTJXhA8YTZUX3SEiQACkX6fjY99Ze7G9CEeqzwRffsFbbiEfHWNZYAWv6gkizo8xVdz"
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
