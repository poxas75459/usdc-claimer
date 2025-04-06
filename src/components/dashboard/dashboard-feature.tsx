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
    "2PsF6PsiYdByCv2AqBAd27Kvnx764Javxm2YJUKHqpkrdir3SeCiakGbQJN9okFm42HQ64cz45vXG8AXgL2NCUWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EpoPFHjC1Q3cWbrnhWSjqxYHn78bTGdRzpBVTBijoTm6byHzDjeHZ2iDbbzRuQyveBb2qTdVs9MJfzMEeCk9euD",
  "key1": "5ASAYnKaYxsBrv1kr1dRjX61hHQic3kuuh6UBptDjaEZZ9JW1Z1YkLp1o3aDhN6d33a4NQ7YUed5WazW5ovinfm5",
  "key2": "3AJi9wBePheM45bHLnRwiWms7Cfp3rjRiri7SqzwUjykaRcFnebxjtNFZcLKS5XCHeGCgKQeVtBs6B7Lbsy4D5C3",
  "key3": "3kehNZojGRFF3mRA7KPaDQhKayXabsX7E33bj5hcTJ8fWNidc7asrKSZDMroXV4CrSrTeadbhJ19j3jhuuM29GQZ",
  "key4": "4wY4cc9AvrMXWJEQqRHLsw21V9c2kSjkjrN5PoiAUfo4a7B9kkCyjjdMihYKfvvQ3sK9nyhLjugiuCFD4FiU1RCf",
  "key5": "62nG3QCgBApPxkZCqV4bcKuM2ZTRBTPkkjfvfydNDwimnP6PE6X2HnNhXWoWPZ3WCNRPY4TTBSpPbUrgYuaczt3T",
  "key6": "swaD9g4kz2n1hg3GCfXZ62Bvn57UhrdXAXndmbs6FEiLyUE17TBNQF6jKkgTSjet1CwLcq94zZT3EeempBfuNSz",
  "key7": "3Tqw6BXetn9EbeYdDcXMxy6uYxH9Nh4Er35J2JBR76R4Qa8PwsKTXSTypioniUBK1VPRFCvKoQXPMdL8R7J9uBvd",
  "key8": "5jx6KKLpaxs578i9fcTWU8ZJwMjgWf4vBBNcSBEisBgjWMz3MpHNzhDRvirxgM6ccGgtzqc6ax8bFejqpXre3TgP",
  "key9": "4MVPVVYhGBK2cbE8MCTahSwSjYc7ouL5KqoPbxaJfSofoLosLF4JFDW1APi88scueH4bUQywHoBdki4wsaKRQQEE",
  "key10": "4kJ6C1owiXjvxo4dMDSsszbwGRZ9PPXsnSQXrm3PffB5eVGDeykGi6P7sd8SpEmbg6srLcqXfv9Fb661LCsdErPU",
  "key11": "4jEeJ6pYEzLr5qMgdNkMqmDhqHstfc3UQVr86yoyBchPX3Kwudm22hLk3ibGy8AALWXq3BHffXrEkKgsgUP1bPto",
  "key12": "3aJAZeiEhtiY8EYS4rCHU9FDg6MkwnMmAPCZso8Ec95xMEjryHqr8SGosStZ2LJbe2ygBrfE2KJat6TejsaNqPme",
  "key13": "SZKonGVWxEoyjfTn4cqgFtsuf8xUkLQv1kCZBEBQRZPBwriZYhdZmZ9mc4JbBiYvYD5FGaUWzvrKi2SSx3oPoF1",
  "key14": "3cmj9gqjNmDqSXCWoS1M5FtzqMsBQ1dgKinDHgYouSXQiGaYAPjr5Tsyh84gaNsfQVkZduK5rfkUz91H48MTwGHy",
  "key15": "2TAeyUBdoGng8ubDNMSKQNys6cFnWRf6AKdA194nejVQ2Xx4tB2D7H1QSgZCYwCmwTteZTXi4T5AKicGSxyQ2VmY",
  "key16": "5SYTQM8JeRj7UDCM55eieKuA42Xcz7cNZQwiWcPB1SNJwRbz7C4H2xJGyRmez9uNuj4kUdEUwqcynX5LTT4XXsRZ",
  "key17": "355wYGgRKoza3SxZCsaE9NEsknAiNjYv5z7yNGhKBBXTzsR12hc9xtQtaNK4dw1qcbFaJFS4HXMoRFSdvmxKfA1",
  "key18": "3tH2g5BhXDmy8jAWpBKLXkvkPok2QtXo9ivS9onwXyfV3wG243QEtwJE1hCYTiftG8XR8aXBMokoXQBTCtXig3iw",
  "key19": "42bQvWX16YhfreSk3y5pW2D6LS5rBQVPga9XER9xwEptUUedJYRswFawUkMHNUPZ58dS7yWJcUtxjpWRj8PRjjfg",
  "key20": "4Tz1MCBhkBZPrvyPNCVRX6tMj83pmimvLE5efjAcxfctppNvztApdCPb6WEGVwQjaiB9CoYdbR2Qn68psTGbhbxd",
  "key21": "3Gfrnrfy62PJfT9qzWSb7ycfCcs1pw2QRcqN1kXoLh4ezFZgKLtQfrstfAiAnFkM1V3dAZRLAtfHRCxgoGvGCLz3",
  "key22": "26t4zoRo1QC4z3FqkgEWRs9TDJenFfj2454ZrapKsmn8tqbhsiAHrQWgRKjr1RinXMM12zXkjf2GmCFVNt7Y8YD2",
  "key23": "98JQ9ANkUXCeUP4L6irFxzvx9g3nzRTTmoyMVLxvztq5o44w7QRUePJm6PRy1JfJx1y5RgMe3Eo24n2eKpDRtQW",
  "key24": "4XFbJvxXtTj85RedUELRrGewhXgv65inYYo1V7SpTxeNSBTdHabBWEpxkHNisFcn45yDW5dLpjuX8TKC2GaCg52c",
  "key25": "3sqj7XSud8pbKEPj4NQJYS1kSV6xUYxxjd3Js3up3Hy68Dna3rjbWnaDB2ejd3vNbEB73PVz9sVMLjqQMryuwKbL",
  "key26": "2JiwnWUNd9qjdzvwbkELujViWa4hvtKh4cTSPhMkiN2A9pccLUNHheiangyoiz2K6YHsu3wepq7VZpp9MQQQJZo2",
  "key27": "2LvfAbZSKUo93ZcUo9KJM47tQ61Xyc2fp2JrF5uzgQansaCyvBh1VFCxBb6BJFuaUqt8AVhfnB4YrrsSN9LneZjQ",
  "key28": "1g6G2P9irHjc8AWxZiWRLG7zvW6JU1JE9kK7vhrak5gp4gLePeup4YicTX797BBd9Q3v51RFq9pKHuytqhECiVF",
  "key29": "4qbGNfz7rkAu3i3gbi6mhF3SGnU9EXMiyU8NDEyzg1KNu6Nv4qJu6mPJUUYPPNdgquJ4sYCv3Zez73NsBNXevPrL",
  "key30": "2sYscFbpvfrdQu3Zh2h2EStyuVWHAtiXiXhbHEccBw5NXxUNkrJ3JtgwgVAx7RDGVWBFfWQK1uUkXUbMWeBYD4cR",
  "key31": "2RYzw3e7E4RQ1q2FYtYSVFPfX7uBnVwSYpHjJQL1SsYQ9U1gFAqnCtQBcEzrV5d58PzpbVhQ3bY5UaQHnrjxm9qF",
  "key32": "oWbjbnergWrrw9fDm6U8GZ9uJSu9q2UiDcECmTTC1WX8YgQo5RiakzKMN4v53dEEbGq3cfvxG9fmeYpGZzwcvtS",
  "key33": "4HnwCMsCWeMhPPjWJAJCJYyfQ1RhbngJkA3cWuDDv7qScsgSLu69ywv8MjjdK2zSJFxA6QuvTogSbUow87LGEtWf",
  "key34": "CGM6b2rf7o8oS973iLieRoiTjgiwekvwq4eTfbUDehHYPHTjqBoDj2imEp2ruS1tYayju3qtsgFSxFxmioCJMwZ",
  "key35": "5mipFLLCvzkcjkug6tHcrmdndixYuooXXFgC6o4kpi4Y2HUe5mE8p4o3pMpi3TWe7xmWL9fLCYQ3Kk3w6VCDFePB",
  "key36": "f9tisHbJ3kXCUiyDmxD41zMR3BCSotJWg8hLRbJAp6gd1vUjQwhxRCeikUBnEfua5FFq4HbNjuurGvK2xYcnUdR",
  "key37": "4oRfpy8b5tuEreqgq9gKcq9nYPFN1sKwUV88m8hHyxQyw5uosXLJ1nYAPmeWMr2WabvttAzqW5xRS7mQNgf7Afwy",
  "key38": "4ioCPXUFquE3obiLmH51GnfNNr9zgvS13C7pWTntNQpQD4Z5BN4n3Bp258pSCzKYtatxBEemMBcNbFfuaFGNL1UF",
  "key39": "4SGR6FUNP41KZhfwg5uj5aVE8APzfqvwvSKAn1BDFFYACq3FaTH5VU8qJERkz8LuPUxMjkFzLoT7wAKCScbGtktF",
  "key40": "2PUPxjhLYS7wUj98qLjPCYitoBJ8iqUATnzG5xhHHNcn8nt9SemfJTivrQCgWAiDc4zKwHBjcj8hkK7U1g3KyGUc",
  "key41": "atG1GZxSPvZKBjSkdLRKRDzhamxNmN9cr1SyMXnXCF65AvaFeePZfj4RvFZJ8tWSZ2AggwheTMG6wisVBhsiVFA",
  "key42": "3BKTFzAvkmVx2GcLAjjSon11roQUdS95JZKPcDAgzhJdXmLQYnDx99ifYyGtfSA6j5HJsFW4vxGh6SDb41pzDPpT",
  "key43": "4AqaJGzUkuLL7s5fZ7CDydATwNcgM1E8XBErfJzjnZsyTVLs7haYL474vT3tErAFQfZt9NR9dKvuc7KmvBvdEG9H",
  "key44": "3xuwzH5Sxm8v8DorjTnA98dVdeXQqFqZUNeWZM3UUBK8jhfEnTrtd2XgB8qsL8RsLPBjSEwm3i2TB3jWB6Fuw3JW",
  "key45": "7JGB8jiffkjnpvZEXLGiyBdQAQMvHppWNxjxZsfCbNdXmN9aTZgW7qGDTQHhVY3PyqTVaeCMksZNqkGAdKXZv1a"
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
