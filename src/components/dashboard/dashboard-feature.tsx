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
    "2nZubAscqTrTZvjRfc4Ni2tt5x8QAZ4A4jRN9GUYwxp7uoMccrAMmTvrVSQDpnovMdjFcK2QThKusEixgnYmJCb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GjP4N6KpnPu5gFTKunWmfdmbkcXpf2VbKtU6CHMxqVFATGVpwqTyDmobKv8NSDJeMbUqex8EDDp3XgLfZotFmHL",
  "key1": "5irhAadS1yTUvtTFSP6oQWFmYR2woWwktTGGeSgbjVhQev9oqYwvdZZSxKvBifPtZXcA41j53HD1Rzmqa5sadgHS",
  "key2": "4Z3dW5ZGziVnnjUshATExnBoannx94wUFTYDnf2aED3hTdUigvNH564QFZ3CyWb7kZuqxuJbz8e1Tfse7uZy9t53",
  "key3": "6692G7cFDeDeRVTztcrWeqatfvz6ea3fgZzAPeWySGWgkMTdKLY2VyLCj1X7Bxnn6ke8hGkwVN9mQAydWPBJw5Wp",
  "key4": "3rhHcTvCjz1hfhVXQTxHhVzfwpka2C8SPofXyoqULEXARiQzCGgikWGN8nhD65Tx5ePitKUcpXm9EGFcn6GhMRwc",
  "key5": "2QCR3eMeK6DnSmmFeHFNS26bwCKgUQPNJtXyRNeTq5PJj4QvYjJxorTB5h5TpQjx3v6Y1RLGydF5LqwqVBoFzkY3",
  "key6": "5YhyPvAmpjaSHMgDdy3gtoKZ1L3eKRD9RrwRthXh57JbQQ23WdTd9VDKJkudZmey7uVr4zQSWzWUEsYCqv23n5FN",
  "key7": "4P2dUPym6WNdwsHeexpPKjkpP8VvDd2TnvoDEmM3pH48sinQ81m9GHq8z3kQhJmd9acL4hdD4iM7GTpnSqbwCzFR",
  "key8": "4x5j7fyQtZ5dCadfssuy9NpYEeo7B6HKzLRTpABQXjYWdZDy5kmNJ4r67E3c4PzWRUSFgk4NAoodCpfapR4ooEN",
  "key9": "xcHBnRWkgWWawuvAChCZQcYnvgCu7qysuwyr6BLJmD1R9SQbVRXDVvFAEmQg47NSq6yNRiLbeiMEFrW3TDjQD48",
  "key10": "izFPGjf5wzxqA3A3euyWa2DWeQBSoougXwveQ31cV9oGLmZQbmHmFbY8y72Aio6KL36Fgxkuhi8qh3wGvwmpbRP",
  "key11": "23xQi1RrMjh2qTfGCpMTBmjWFrL35afYidWZSPPUW57nGKR2aJn7FPNGNxDJKacpaAyxWp2nkoDWHqkVs3W1feqW",
  "key12": "58gEuUG8Pu2YHBAdre5s1WW3NYv8aGZCYhqP5R1DSAAPimm8wGAUwzoNLYA1vzAG5uuRWNchCAYG4A74ZRD1mScz",
  "key13": "5owstZx8FHr8Cc5G7srFbmHPgwiXdNBRSKYZeFg6tTvW3VtjtocKi27XDA8uJxt53xY9unpXRGtSJaMZWCwvWJEN",
  "key14": "5YCkZj2CjLa9fQUSxymbAwdjBpT3yQuGNGHzGwUegztYWvyK2Q8CFqtHeoaU2U1cL4zKvczV3q31pFZ33YGpDoja",
  "key15": "5jtuRq66cshkU6sq5tVzTXdgsKb5AhYBVDsvDsQfmbvEVD9daeTEKG1EHuCJLwqaWZ3mtZtzW49bAsNJ1rpBCoVc",
  "key16": "5Gc8M1PHxXD556nPuFRiUnUd4tn4Z1rEcyRgN1w7NcEkqqZiyMuQYUzkxFvvT7pdKERFiSFkT1hbjLj8Mi11cjeY",
  "key17": "5TZq4FVyN4DfJcXLSapasksApCgw1iBqcB2ptDU6ktvoo2ZNQBX5SY6SjVzWLCbuULDyMA35yym3W9cRWkKDKCBJ",
  "key18": "oJWTjtWb6RFeHssrCXZBtgrmApVpCFLfp3jiQ1s7AKy5qEdqYCTSs3bqNfwX22vT91qmMfZL99pkvD9KrFwsK6x",
  "key19": "63281Dzc1pXbmbxG3RcXKY1KVPp1JwTt3zHfPnch8X44qUaCVjeCVeUcGEKsq9ugb4KjecJwBCvD8soNEVm1TU1K",
  "key20": "k6herBeQFXJmLyFUDUVeqLyhfTua4HFsYcnw4JrCnNZtQx99jANFUfi9btoEdpEj2KAwhQGXJejM2R9JR5d6Jnx",
  "key21": "341jhxnzf3QEBvR56Nc25Y5wc4LHcw3nJ97pgVfHhCdUEEQNWbxYzNh5ESbGeRvuiUskx9po1Es8ByEEMuwyF1vs",
  "key22": "3Xe16DE9gfRzwxRUe5LeVTrFdVPMzBiSpSfY6nzfVtTx1LJAMQhSvVL1DUgjkYAam3XhXBYRvd9WTi2pbXebpYBN",
  "key23": "2VLHYHjg5WqDRme8VEMG3RAChZcUdynBTLoN1hxZ7AjbbNgAfZavFbhbzZSVJTWyoRt9SKB5aWfr8P6tpKQAeQfp",
  "key24": "5DMzY5WXkCbujc81aoG16kvhNFD53T3hepDd1AVMT5kDyf6dBuH5GT84kLipFHENiijiSj6EoAJQKK8KBQWGuABk",
  "key25": "4qPwoNVVaq2xo4LWdpq2kNnxUN1WDyCr1hMPZUEcLCpEohhRtvh2BbZPkVt8PNy6YTfBHAbxjeDQH52zXGQFDkJB",
  "key26": "5Wv4AuvVVhU92GSM5Cm2hYpwm8MzzyrYNHdM5D2jrSYwat2WtM1EKpUYbuMfDA7JTniSvKoHjaZwka4yACzfrRap",
  "key27": "4x4bYoSN3vpjRvAsAHybtYJ6azPnK1qXPZWveAbPLR7NUBuWEvruRhc3F3TxZqK4d1QWM6AHfP7Gs2pFfLhqivoq",
  "key28": "32XjCQuuGnq9QXP9Y77iB5DXPLB9F41chR7KZ6h1V7iDRMNh9XiiPBjNitCr9KNh3iq7uTckrMbQrHaGm35N1ig4",
  "key29": "3ThDRvLyEpC9kJNsUJyw5xALK42kbvRiZzaLAr3LQiNHohYPyy7owrFcFe7bmjirzDAXCcyrQFWi4aRNQVfSs6rQ",
  "key30": "3jvegiFgVwZKv1Uyu8XRnxpUVCUg2zSgDd5czoGRdrPdSw9wYnXDuYC7FWh7jWVurAAFUFWuxeNCfAdgnWUUXTga",
  "key31": "5NxUKpmxoYPbQh68LKLeqp1soqH7R93H9zpcfYQbXMYU4dr2xK3xXBPKq1EMrnrpq9JXqUcAdTyMp8Ran55UrXkg",
  "key32": "47U9qXg7nLbZ21MtUczLJbszd34p6zzrcWDSM9hKc5jbsHToVDyUL34u7GVyhnoZESmtdqgLVwvy5SN2ms2ACSuc",
  "key33": "3ZqbrqQsNm2tJA35nRir5puKggPxRq3motnzAMvgQ48tAv5NKeSJY9fA2j2t9JjicMoas8rG1gXsrswjMyYvoWeN",
  "key34": "2SZNQ6kQvjvJpNMGJ9XJaSQuKQ1Y1kDbnoHVBVU7xAtwrCmUFi19qZdkwpG69Huj9RcjN8RTz41HGy8USCbvfMa6",
  "key35": "5iQ5zz6gTgbGRYpeorhtonqWuQPPov6tTnLt35MXqd8kQvM9o73bKDtCzPFQAHhUWCdyojmtXkPFbG7iqqFkgxv",
  "key36": "3NPH6RF9XTewAowXMto53bVKxx6s53D4jJGKqWPM73hfsEvxpvhTTrgoBqht26hoGgLD9sfU3NuNdPMSRNzzhewV"
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
