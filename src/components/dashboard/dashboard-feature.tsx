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
    "3HJMydXG5FZ4p5g3T6zu3ZVxrzhDn6Fo6jLdbxsp43rVZBVijcoMoBZkDVqpc6inDtDi55J9jdbKvMLLBgapv5ux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "286pma1iQt1dSCWzxjkWnmYi3HGZgTWkPr3hDhTyyqLz4f6MUfJyvnQ87MAVqMP96z3e2eXpGWPHPftejq3nR8NF",
  "key1": "5kSo9AiymN4kkz3A5LUGpmD44soXj73oQthRNCqwjs4PHWrJq9n4kwCeS727FQ9fmY1BCCu2TXz3LcQbKkYJ2doj",
  "key2": "3riQT16NLooRcHhBvnNsbU9gBKfsCioBxAsPyq8vNrfn2fv8AVCjnPcazMSNjaPmGwnPAHuXS4sSuy7R7ELLPegW",
  "key3": "5MmfcvRVgQXTxqYqHyJZx7dqNjwM53eDthFfR19K54cP9tbZZpzYFnedpCYsaZP5TTEaUCuPcNHVVwYhLWZF9Eks",
  "key4": "JVncpYBYRiML18mwPKn1q4MSvYKwywSfc2E7PyGHSGdY7JJtAAxBrHEkSizYYm8HatJpoknayH11dh7JshaJZRs",
  "key5": "j5qjeKT1EMaWJgwr7ZWiiDTEcvZNc7XqBjhMHWzNujh3pjxeTWGAW5q8zcscyZUoSjuiatCUgDsDDsk3SgEN9cD",
  "key6": "v8yUCfWYjBkPN23UrZkfE6hVtXGrpogYcXX95XomMWrSv4ge5nwkxcBzEdQSdZSj3xZNWy17UBtCKk2SmzjSJtH",
  "key7": "2e9XSTb8upBSTtnwyZsruwMf77vjNhj7qkbNrggaWsuifGetGVAXdLrNRMJNwHM89ZUxyQ5e4FnikCBEg8iqt3fF",
  "key8": "sPpBDEHLXjfPQ4U6m96HxDWnbMdEVkfEcEJRoM9WrLMsqD1dkvJ7aKxuFGhre14kYWBq7SVGZyg5kZJLQpNkqhE",
  "key9": "3rkdAfwpkAxYG3983U1KVKg2AC5k6NzCJ7zjm3UetfpQgiRucrnchcXps1iSAc1G3B3WpHt4BCkFeqEfZarEC1eT",
  "key10": "2BibMZFzxE8GbqQabcPp3sphjuepLspGcssGMVybMB486VTqGmMSyCKsvWHGsceP1L7QTfjeGttTTuUBXq1Rqrq9",
  "key11": "56jmzdEAp5TF8X4cmCd57c1r1bNvHZvzWSMXkmZSbPNMaoXHN2RBYxwa275ne1PaBk2kQ1cT94XRSA2K8Kkfrr3Y",
  "key12": "2yEYdUS4FGbMAFEmehC982dasSFFuixfckvzeuf1BZ7KQhR3Z4vroGyUemuS4yTbZP6pXjPKJ1gG6oB2XHkKZkdT",
  "key13": "3CJjmc3yAF2APuktHaL4nwGHLFREkNkCdbpha9agXk25Q2EJi7CBgykrCX9N7Rn1iQRBMiN21KGtN5Qv7jWzCVVG",
  "key14": "2K3hjfysodC7uLvQ6h1eWHV36GkbaaGtzaqYGbdnGewfmBmchR3gWZXMik9zADo1M1fqzqYa3heUjH7TiQBu2D72",
  "key15": "3RWwobKkKmoViueWk1SutFBimLpJKkpaepN6WBCaKjdjKR2LoAfVWbHLheSRd7KtH6z3BkLNzdc4REr5kwQo21FU",
  "key16": "NE5VNSB3XTFFGEu9eWKKVdzMAZe42SpScKAydFb94xemLCCxeAewtdjYawmcF4XAdNP4oDNuP6juAMy1REyspE4",
  "key17": "Px9guFaMifKzhd1UzY6jaWtw7mrFJ9oQXmtCKwCsDnqTwM11Vaa1nrAUaavUQ1m3gaeNk2QVrN3KPkSQTFMUSKY",
  "key18": "256hjyWon6PzpQjb2z4HFHCzmByR81QALePkrCfWHUiQrWsGkp3gvyDwWJVNctBJ6RmXZ6KjrSUFd8RdScybBxN9",
  "key19": "Cuokcm5wnQvxGbU4LmbnqjS7dBtY6ios1sHdiKo15hotuv5WD8KLiVcmnS66GZ6ikgbSaV1jMgqneRWg51PiRw4",
  "key20": "5S544ZSizNc3fkfSvQL4eB3AgxbgT4KXkiGXMJreBhSWEBoTvfJRRQKHmDfE1LpZ5DxH4khqShU1XvzZHhPaTsju",
  "key21": "41VKz9kEPsWoqBpdL3n8ZHp7sABDArqgpUDm8R4EAuYLi3rtvmPgsngDLcdP1raZPk1YhB7PsNxxahfGDV8mfR8Z",
  "key22": "3ymrRrECSnygHBdbJNkUucRCEaWZYrEgXSrAtbNq3fXsn6ErkUjdk3iY85BoJgnmqyWnB6QCzJ9j5NM7KrtJ5ADH",
  "key23": "4VHWtCcbkRYS4kcY3DU5Q8Xe8mYgcZDPCbTsVkHwR9LWbv86N9j2sQL9f2PweS5cQMCAWC2ijb9HHV7zVBdU1wS9",
  "key24": "2zgj1ArBW4HP6jfE5QbUVJbXQkMLuL5tkrwNWTeZeTJeTNwj5QiTM4vvXuvBfnYWNhuJkJmFybYmaRbYR6RjZx5v",
  "key25": "2Wt7MBTAmrdAZ2hFPNmFCtNFLDDFxt8q4USs8zEKmiyE6rihAeJcmiJ1GHrXNPCq7pDQC8sRTHa2971hJnfuKk2w",
  "key26": "TVhyRSi6PPN4R7SSxsAFwk2wSw3MKvGXpDDEA1XSsdEZXe66bvxo8v82f2xieyQmLahzcmKXC6XjagufsTBXJCJ",
  "key27": "q74quMt5G2kDsu8ZzXFM5p6hk6MXTrW3W5byhCYHYDbzU3E6QR9CsLi2Wn82myWGoLRWHhDnvWQPJNG8rEy59ZX",
  "key28": "65W8r6RXRZoe6fi778yn2dtwcs8Ehpp3HL39nDt5ixgayRc6EvcHZKbHEBVHw4yvKAm3qn4zk5Qe5kAT4vjQVyjL",
  "key29": "3DoAKthZaS6swn5Qs61QDhceghheCMoFD2ryRQREwXPmfDVVNZC3PYPtg7kstiUiLzSecux2YiHwVVeJ3rbVQaQA",
  "key30": "4yMNpt5F7AtwcQB65Yfw2R4bUFNve9Jbtt1mRsEkxBqGaRe1rjE8ET6Keh3QBB5TQ8Ut7PHmqcKrzpC4vbPqWGmw"
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
