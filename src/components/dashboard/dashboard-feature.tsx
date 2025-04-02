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
    "oNzPz4pnLdyf1kRUqoBtCjd6zJ2JeSjagJdZC6BNaWBJymC9DHxF4tA1wgRWcKB3NdwqCq1h7CwLouZ2mf7upon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x1DK64QsS8hz3EZnqW3B8tV6LKgfxJDtzU9XCrwSWY3mFYeQTVemVyUMSLBDJuJKshuNAFE2Ei2vGXEiJxKX3uY",
  "key1": "5aGk6ykep6TGUb5BsVgejzawq1rB5mi3bc5rTvYHk9bWzDTtCL9iwpUiZ4gd8VpekYR8ZhkjNXHqJfqXza4qMYz8",
  "key2": "3sL6gJ7QTebyybbEeU5Uucrj7SEXKrtB6ZTZDCAqpxoVZ5j6Gzmfb1AffCLNyxYJZ7qZmiC9DpDUL1FaKRiNjEfR",
  "key3": "3PEK5Q8MucfuqBBWgnPkommLc3abfaYRKnzW334g1EDKNxmcPCk5qdSoM1bo924KZFBGqhYfzs5U5dvRpEvRZy12",
  "key4": "3cLAncmxuhtKuDxqGraDC9vXJ6PB1nUQMCNF921h4gNd7rXjavtMh9ogRxt1wfvkGCvNbCgi3vRFsz1FAATfCUPz",
  "key5": "4EaQFjbe7H2CdGwPrSnb2i63DLKtZppnvFwjRE7GT3EkTCx9aCebfFuuVfyNU8KfMbn7hetdLX3dQNTrYUSSp7BV",
  "key6": "437qq34sm7ZWUwm62Cezb3ogHUnxq76iUK6TxGKWPKuKAy3NkWmJJdxapSKTBAWxy76hztU2PL9B4cRG8yyEpWqC",
  "key7": "89ugmnuqqCN7BVZDJxtiJVga5g1VmV7ZUtFBLg1Q5kVvig7ymQZGdVEtGjsmYN5tE4caWSGeuWSM1rqr3awjJwg",
  "key8": "4zoi8tVXiMmosb6jPhHLyc3rH1LU53Dt6xVwPrHZHp28UqAXGKk421UaRGFUisrLsTiL9hgu7jALTPJLsg9yj4PH",
  "key9": "5emn7Q9As5TxPZGiMBKx4aTWK5mLAh33ZUm1M7NbHkQMkLzocQWBxoQesrp3kfxvacJTY9ktMQPzTBytcrJEnYJP",
  "key10": "3zQaDmu1VfTZwo1er41QdAT6EwGUpr3vm38QUSuR35foDWmLVx8NJPdtd4iM1tQukoX6zHVA8997pf1er3fvowy7",
  "key11": "4CmTm4E18ybRVxEPKUsKiU3RYmH7GyboRia33C7MP6Pg9PsSK724Zy2wK9Xf5aXWmQXD6QGpEk3dGpBP8FuRALZe",
  "key12": "5w5JQzDrWuhZphabanHn39yCL5a3XoHdxoPEzrrLWb9xCzFedFSjZcV6MpBgC8qsrKBsxk9Q4AkFfdtkESBHVWCa",
  "key13": "4g814wHxMAXtD4PjytH1KSK14ZGZa9VzYhVVdsTfmqaTURo16xgWShSCjQQukyNbxw2wEbDjFi3WG8Yhjz5SH7oL",
  "key14": "3EgVr6jsuh53ZeYaPrdkqk1pxejo713a185y7wpo3DHjpquoFviFw6h2eJQQzQvyUVDw2Q2Wu9uKngXbfmC4Se8G",
  "key15": "5295Aq252ZMmzvERy4JKFsYpUU8hZU4GL9RSDxsCq29dGb7LwYbG7kkf6cMmgrhnxtvSugD8ms3uNwvRNbUGjPn",
  "key16": "oHG2DVFzzghqioubn1nMjJjJf3K7WwA4aHf5ADpuW8wCFpxQkBuWCzfizfay1AuiKKUGyACceWauE4LkUc7ijn9",
  "key17": "obScNoK5BnrC2ikrNzT9VfE9vvv888am8qK3smcZxUdX2yq3hHgrymp3K3bpxgp6TxCCX3cFXM8fLJ7DefAEbaL",
  "key18": "27NUidnPQhsQmak8wWiMAm8h5hLCfwnk24jp3SwFFm3dXx8LsRG13JMi1HnxzEYdNay8LrHGmnVBFoeD1NBWMp3Y",
  "key19": "2fzfFtaPjkogfMX1LGj58yvZD5dLHoNbheFnfSZcqE9WwPUSwAwr1GzemHN4vYPYbBA4e94m6m3i5p2BCbNV9R3y",
  "key20": "4msJzgE15T2ppP58xL2hJjM15HGV9V6mRvS7CH5y2HJgjYWupLghg4X2TG6RQkpBgHHgkPtqZCeoe93919m2XpdY",
  "key21": "gbp2NnQoTDwrpaNaTdGkWRtozgMWqLTqrxbkLyCdNh1FKQ2uTYsZ8DEBigbFqY2yZBoNFdYRZtP6dWqKmdRNo1L",
  "key22": "37hYokchC6PSDY4DrmT1EHwGQpXUxipRi6QXaNfZvXeDWybycqhSoX13gYj1HqfqK8dWuj41dWaE9mNkTaYt3EFE",
  "key23": "2sVQYYPcqJmbx6ahnD4N5RJpfpH2aM2ru2hAxxX6jjnVyk9QNCVGshXddYo4eSH9LcKRS7p1XS6NcYfd641Qknip",
  "key24": "632TSNVc9TPucXUGWobVRYmBVVXFQhBrWx9cxX4WA8EqhNTWXREkkRB2DGkavmrynXfQ83MtdSeaPzr1Z24u5mHE",
  "key25": "5zPNbQSDwmHdGMjLcrAP6wNjRBrqbo6sRrApksenR89eNwhja641kqqLELdXShxPjTpiFv7LMN4fiL1GndHfBKdU",
  "key26": "3rsVAroRzL8Ph47mirWp2q63YfqfcZ5zKpjR6yvK7bbd66eBnoN7wiubdiVJ2ZVdCy7Tn8d3mscYKkYdjvwUSGJp",
  "key27": "2JntCLKmgGsw3WTYoQpbayNEtFzpjm9SMMD3AJhQEUDgLFumdrnncTfahnD7CTXJkqG6rax4TzhF2dmH6yQVj9gx",
  "key28": "3A194YsVLrC74oho9kRnjMD3zo9j7Pv787ifU9w7qtz8L3wwajuKzafiF4NidvbUQVFM6e4R1r4n2kBaqHmRxm4z",
  "key29": "2DHCjYHB6KrtQsicLbPdRD6VBE7wQGMY4KVZEf51HWLEKMnnsVy8U9Mr5KyjhQPm9tXcuoytqccE8bnzX12XsX37",
  "key30": "cfDRkBH2onGBZ6aqrsWmzXGP4j489NwgjB1t4eDEUoxcnFMf5N7tsutoJrtweCGSc5xY9HXWYZhkCwn4WssEQjH"
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
