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
    "D8Hm5cNxRjzbsFqVBnk4t5AzBuB2eq5iF8UJ43oJ16B4XirTvbU3XWfHJ8UaRM2HizNPGQdc8gDQ78S9GwB1urb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53K2NV3qKqLAyykEoD2XW8ShZnnoYuKvNy2WVorppjwRG1RHuipsVkjQ2cigjwMFAHc3Le7Mf93k6mz1AM6RNgQD",
  "key1": "5vveGC4Tvwm6p8zwknyusf3M8NxSC8TP7jnRueHDL3witacqkERLJ8zBREHLtjUoEN5HP3nBYfcqXhJh8rn5QE9E",
  "key2": "rzj3haM2B3tuiyDi284w8EWppYeMBjaa6zhfvRCwUMnfJ4vjLTqUFooEpjEAK99A5VmkB3Sc84rDxE7AGhLXyQy",
  "key3": "42PT5cXphLqe5r2VASFuEpiopr9LTzquuJhLorwDTGsrk1gMH6FDd2xXaMseTwVwyj4orjp7oU79CcuqmJsiiffg",
  "key4": "3fB6X8DnYaDKXQFne8G1YqRG9xCQzQv3PDNJ8QG4cvRtP7h3DLYzfebfN4fGLYAjib5t82nE5TZjPt3HqtpLQwCz",
  "key5": "GyfpLqM4PPyKy4rXDdN4WJSAgWSusw6TQPdxPhbtWhd5rQ48gWZBPiY5ivwUwJG56QEQop4ya596X8RBBS429WW",
  "key6": "63CeTkQeJpcjbRZXkcsVCAtDri38bBg4awfqbjWCPaecUic7Payz7rVa5gP7qJaWpUDaTX6cXjtrYvGnq7Gfz1ze",
  "key7": "9rq1ZbzoeTyR4o17DAZknrrVrW5DytHhddCupWkXWPuncy2nXiC4Jsca9D5eWPmiiCtjJV24AcoiuZdjc8psGsq",
  "key8": "3ohvdxsuKks1GuHYyuGvRd4DfDHTGjSFG4nTC4tg4JCQhH8avGaX4EAhbouNXpCKVakB8rRvJeaAepntL23aW3hn",
  "key9": "5Cy7jEACt7B3KNoqSvUmkFjgJew3XTnacHgCcE1ap9Lmn76GE9gegRS31UaEqRov4Y1tFQ5A6yVvXKn2DYpwFKqi",
  "key10": "3RWkDtBHrFa6vN5ucPM1subNMDfx2rtujJegeoQ1KeBpSNVEpEtLiqN1QSpGzG5LL9waNReNewutMS6wgLWJsoxW",
  "key11": "2YTstsVPnyyULqnFedNJziDuyRbG5S4oy17CHQ3Q2PEGXGE4aEndF8m2M8YyTVSvNtC86YPJoSPZdHieSBKLh5gm",
  "key12": "4GivyQ6KzoagtT5uoeK3JkmVEr1LiYfvwNdfLWqQbRzWn2CLQnUp8b5TwoLWxgLNt38BqLEDXbuQ8cfwsCxvZf4R",
  "key13": "3LuaTyLLiMFkQof8DHehZkWCYd3AXujGZnsqxwsRxNzj8whs2AcoGDYF1Fjuu5xMVohM6EPvtBdKFzW7ia17NAnA",
  "key14": "4aY8payeCVZutPUTcm8FM8Ry1mt3ACiRcTvtFrqZpTWjNPN4k7aKJLqeSK3koYNNqQ37daenFX9Bt6youUYWN9AG",
  "key15": "4S2bxyo1FCzgtLwFytYNK6wDfPGeK6tfJeFQJyZh9sV8bCZwdKeBVGUxAM4c7LGoaSNzZ1NR6wawbNRTLZstNbcj",
  "key16": "2ixoUzNwiWGYCXmgj9yxM1HUzQ2fwxdE7KEEeehud4k75nijVDVG9tFSQSg9Xv1rr8XnE4Bk9wWG1ojmWmZpUX8V",
  "key17": "22bWcEP9RixTNoWw1MMMZs4x252EJEa8QgSvJ54tL6993V9whzy3VbkY3nTwcMrpxF9g5KLtgAjVjhR8zAFUB1MP",
  "key18": "4jt6PP83WTp8uCPe6Cm3EwbH5SNTMXNNcxEsWuAYMEYrhhRKGvcvAjVzSWrU3qaayuPQf2v9HuKMMegSLknZaGRF",
  "key19": "5bmRDQV3WffZzZnhs7cQUz39u4ZKfTQ5Hu8zRCBWgtRgF7L2excpvkV4FDHASzMQ8EHs3My9R9TqpjVEnFAgV5G7",
  "key20": "369CEqRzLqcWBt5x95BtiX9GQfEBcMhBrAKK7W3bVf1b3ExFmK9iVy6TuCLw8t8We6bwrUnuDD2JtmSN79GhrXe2",
  "key21": "5ywnjFW1V1ryrx9a7ZhxvNEwRjz6RLXFAtZDVXyoDhkPnbyXLwPkRz393Fdu6XcBShVU4VqsB37gFD7wzLmM5Rvp",
  "key22": "59spPvViVCcrkahj3N1182N2pcQvFdqX4962WmvMAjv4LuB37QncQy5SiNibUtSG7zjoARGjrBrkBnU6yy11PL57",
  "key23": "c39hRw5jHA9FddqxqRLXpv1E5MunV88xZZEvmyVRFMXhDcHtjTequs9RJV4L32zHJxn1mQ75B3gih6UZUZKh595",
  "key24": "5WFqxbQXFWR3t1sadVi9hSV39Uhboy5tvzbLhYuc71iET5Uaapk5LAYcXXpijK24D3yPzud47Ju9fnGL1vuYTASh",
  "key25": "5NwfoSM1eJtHob9LfrmqfVi6rtVk6GVXnb8HnKKx5ZGd4w8koaxELbxuXypYKybTMFFHy8SF6MGLJMnJdMFView6",
  "key26": "4fw9M3FeumbDRZmoTpUM2dLfbex2m7XeoFkertd5jZ7qZbdV9exBCkNQWf7zSED61LVEyEnJHi4jx3CkFBdboBe5",
  "key27": "3mhWcHr2zX7Azxc3hLg9BJQqHbg7kZT6TaJLhUb35VSrDjobtrHZWm1kZTET1te8P4mMpCVGqhiLu9cHBejXJfBU",
  "key28": "2r3Q9H8yCZBveSTSCxMN5vippm28hLTq2hnKC8wgWk34Xe47tpXSrFhMgSqyM49UEv98vWe2jAFNT1aep32vGmCG"
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
