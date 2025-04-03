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
    "5cBwVkpJNQ723tbkvwg2PjZ9DqkFkP87T3tYWR8uuxKS3biWvknmEsqnGu3vpGNi2md2DuSCReXSo7VU8VfFLe4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zdtXCu8SpEWJ3EooS1Lg1kUHh1uKVL3xAkVwvimj2ibzKgUZWmXmk6y8VJW1zkFNGomjs4pGae6PbjLzJUA1JYh",
  "key1": "4kGiJaVEHMg5rBvF3mrdnTx2Mz84YseXxGyQaQFdkpJj98S2rYvrj8nRAqWqtSr1C7wZUKEugHFMeSC8EwAAJJ1X",
  "key2": "25fouujbRZn2whdi2RxFAUoSfgbDCqZM7vg3eMYfn6hTVHZ7if2CZpYyVdNyziMD9bGFmff6qDguZXBq6yW5aK93",
  "key3": "5rBDgg6CEWRGY9766PyJRxoWo3hZakQHUJoBgSm7iyy9PitaTz9muwCSHucf4NNcFg792Y9CmuHqZ8eWfLakyeaK",
  "key4": "H5Vx1fdp8Ayv94KBaNTFVoM69N1cE4dtLto6dRpDGdZM9n2qvbMgi4g5t18AVuRL5Ro3PDySwujahRMwrUr8B8L",
  "key5": "49YqpusxH6nBC4i5QbWTt2H5GQDoLfQrRNBiuKeSg537itWqpctFpCRKWKG25Cuom8g9LXg61RM1sPKU3JDFzqUi",
  "key6": "4uDsqXSYgxJGFqgnCrwh1bY164EN8vTkUomEztLgAavSMBLmrAACWK7betQLUQrzSLHLaiwTaowyXHFXW8SGakJP",
  "key7": "sSut8m5a2Qof1muHMAWu1m2KU9uefpKbB9D9e87z1J3fsVmcban4AYTdM3RA9XTLnYCBeTtVV6rxkjv1b8fzM2G",
  "key8": "SN5dovs2toaUAUaQHTFa6rYEJkrnS3cYZv61wWyfkcHQhaWVih7kMJyQBTjSoEVcywkjMgzJycGMfuWpEvFXioR",
  "key9": "5Q5eHKSPHY25Ze2Spekwkx54h5uh6L2SEVLpZxWLWvTa3XE2C7sJezd7XHHhrb8FZmkPV5Vq2Sz46R98qK5d63UD",
  "key10": "25QKuNxPhgqnJbDJ7Hv7SVbJcdmHLcXjfL1imx4NoHRdGVUKByhji4RMm7UY9BP9xfembc1rGw9GY41d4YqpcEQg",
  "key11": "5Q6CcqqutKBdNDm6n2MwoitSiE7Qmy5JhxfLYZVYe247F5WWz7PFKAbn35M4oZjKyceSoXYWDM6KaWrp7r5P4jEN",
  "key12": "3kfiZK6KgusyLrM9T2XsLq6PacRVSy7DkZu96PNySKpNhrXZjjRiRSiDNKVKXw8NyECVjGbH1VxKWdY1PfW1XNGW",
  "key13": "4wWwbQbw1dcT6dcuKEjFniJscwNLAsZtJxAgzwxVoikiGEfwNA1GYpZLCk3pszhcdhLmbyZQbNvwFuLcUsAr3wVG",
  "key14": "4iSCBbvuKgd6nfdsqBzBcF2YBtWeHjd6yqdJhAeiHuCGzM4HsVdhCfLGnwNh5nNvX7YQSSEnEGk65QM7C1zFkYDD",
  "key15": "2JTC8VKvVMeSd6yrJSUjnEKq2ReAefpsDVRQjvQUNguZsKZtkMe74rPrnnmvQaoipKsAz2y7fWeCkv87f7ekxr9o",
  "key16": "2YQMd4LvqQcPLQM5GJsxXaFnCyFh7PNqzPXxWRTzLZkPMLoqw4AbkzsShtGjDhX7AXDcg52Qoh51KDFRDNq49nFJ",
  "key17": "3qng7EDC54mX1Kj1XkDizWpXifURnREPZBvWC5E1uQNutoGr1uKYrZCfXZKXsJfMzpWJSuyQf8GfVM6Z9HDyqmkT",
  "key18": "5FcVCbaEsZDYhcwqBsBPmKofBbw4pqzdWWv5vgNXUFVMKXydQeANKjbXNHxY5emsYnLNFjo2NgVyUA22F6h9ih66",
  "key19": "5Pfv84xYNZgzbVWJpCfboAVDB3v2KenuBPWp1FnArUkk6rzT7GymZeXeKF6ifQqqwiQDN5RGteeuRAS1e55RXjV1",
  "key20": "5r2Ldf6ixCuPgLNEYFvJWVBSa6BHwGiprNMMBpWN4PgmEgARat6ZaNxHAt6pksq8tTTyXcN9oohacLLPkCLt17pj",
  "key21": "2BUkJjESvvosmgLw2iqSwmRB6vNCfmYh2oiveA6s8sdZLTXCNZesVEdmED8endh5VzTczA6vq67h37Th9FV1szCb",
  "key22": "33Sh64TEmpvyBNTdUZKgsrSBb1kxJeejjLZ9qYwCcc9ij5cb8p3RxEifbBtvTqWCZcCEvePKnDTKdX1u3mWF4cZV",
  "key23": "3AB7XcrnYZ7VJH2aUGWzbjbcLsd9aDjBnfRA2cVpM4Ezo32zUrxjvqYdmsKZiXXCVcuVxR61C7tA57kNjtkLRJXz",
  "key24": "4SrmggWie4NM7JoB1APNvBdPA8uxGXNx8H4yMUuTpAvPuhRGioirrD94ZxSYhYB1Nzfs12r8zxge7XkGBUqPWuJs",
  "key25": "4dxbe3RUcrffLfE8NQVGewScRoDt7YtzTyA883dt6jAD5zUbcoSxSZ7UcHUUzcGBDgAVHWbzYxtvu83DkLRdhoZH",
  "key26": "2w7kwECbh5nCtofGYypSBkD4pTHUGa65EbkExvCERVZ4W9RBVXH5eCczE2Tn4ZNJV97o5HeUiVNYW2vqdoY27k3h",
  "key27": "UrMo5Xzhnk4yiVYAEqEgjjHEeTsYPbui4Djjd4Yt2rzxjiudu5ZUzmMhKUre9tTTdJahYeG4voouyjmbE8w4veM",
  "key28": "cN7rnLxkSCBqYEM1J3kLRqw8YMXT2MCWffGqi6MroLcTDErG7sqeaxuTUvs3VcBmXyXj3ZP3iS1nWxELCVw2ZBN",
  "key29": "2U88LeAGVDBKe1fLAAZ8YvbTv9soxVrzMNEk36aZJiyRubKdUGHzYKepRAzGSGgThZYjihwEPjVLqFDbqqCcxGRz",
  "key30": "3Wt4DtPYzxUjqE1ajDRoUZUNHPPAya4Wh4bqLqJv8MnGmGxve25ZRdp6uorfNC8mcMJhh8GbDheP5moZoNBdqSan",
  "key31": "4PXpKcso71XNyUAne7iXkHMxGQCrJVFAifG3NjJHWQofhbZcwqB2uH9oPQzm5KMqqTBToiueP64KDtgFvSr2VHhn",
  "key32": "2TaxRqBnwjzVKKjDkAskCo6DxfKnfPbaL4vLb7nWeDAG9qiAtMKDWiVpmjcpba5f9CcdxhHxiSHFt1aNmvNeW3so",
  "key33": "3RWwaFnU73xTJXm9GsTSRaTeqRDWV1CQZyawXW616R1Bh9R5oGknQ2fR48KwDqyFHJhyWxhqPTJcempjiLNY4zzr",
  "key34": "WaGkZgVFAXscV4gFY24xWmbntRmagJS9jrY5suYN6rdUTZH3dqPMT9wg4FhFzgvNZu78ZEFK2XemusebdbYHYkk",
  "key35": "iKgoB8CdgDzB2fdjKekGiBugANMXYJ7SuunUmJjhRBKE7xbKyVpHbFrxX79geP2iTbqevTWQnB6EeUSX2juU7Gf",
  "key36": "2vvYSXPKJgK5HgPTVQUJDDFi94DnzoDiLwYVtjdWJeeGVmZCqfSZkgJ4ozn9raRBjRjzxhbUoGPk2AMHdXQi7n8B",
  "key37": "3CXSonueXvQAeM8ds269DFMbWm3P2yrZB62QDkDKDPpqj3vWWuoqK6njseVbNX8FEuiH8sDzNCvAycjpWfh7UwuX",
  "key38": "51Z6BRV9Ytr3R2cUEGyzVz1aHgNGjhZb6QgXBBdPYbQkru1TeiVo69C7xbhw1CzyP4WkW5ubWJSpS3deWofhUWLk",
  "key39": "4tsKcA3vPmoba9W7U5CiB2K4SQjnpiNH6Kj546mQTCsFti2aw4rmjm4mw3QRF5wrdsGCGECfrPeGEeuYSpzksJz3"
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
