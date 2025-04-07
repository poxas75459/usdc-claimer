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
    "1g3ECwgY1kp1tmarCBxTDQWfCXrae22dyCDYqe53pS86x4xxU8X7xgP7UHYXcmHDTdLMJo1ep8HXyE7xnBNG47q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PgQYym1YNMSadVTBziTCwvKP5RydQPpLnf58fYnDTR9QhSk8fyHvsomhnDfmwYp7jHg56B4z8Bo3zwhtop4SkS3",
  "key1": "5NW7q6ULmoLDnrXd6SLA9PwwqdqqMg4vpr5CTAcXKucUM4t8k1T6PaxgfWD8RpA2dSdVGSaDL21unRSsA49JL5WK",
  "key2": "2xtdeHcUPvCtURj3fYifFd88daw15SKFTZXDUpwb2Et1L5aZbAUVmZkw7k35QP3iafYpW9FWno2JdSce8AxJzKgn",
  "key3": "AgvGZFqTi8uj8iebKLZ3RMJcgJuQiz1x2iTKYhnbswnJaPguxRqxHEcE21utdVSQzjCXYZzFDsXoz5cBMW21cee",
  "key4": "2oLc2aRS6JKPzMrJDcEf2vGiS9eYMDLC3oEFAXbnJwtsxFZ5spfifJR3iYzCKamtkmjY7ar1yDQkLJMy8LT2ZBkQ",
  "key5": "5nDXooBzbC9ZbV3iXLFpNn8rdsdWkKjDTvyKajrcRXSimhzVVNU3aPFKwSTFDUUxsktQFCi6XKzoixscAdNbTH8j",
  "key6": "ZJzaeWMS4UNFP4NKm9qohiDoWezpEgtXoEwgiEHE4HzbyRQLgBvpaqxZP5yrbG6HYCPZq1vKkxDN2Yk3wspPaz5",
  "key7": "5ZRhU3LYQjh5hh5DBv8m6mBFYF1P9oA4a9n23T88hY8RpReQcz7jbxen4vxJFL7vHP9vBCktuVUadUaGR7e59MCV",
  "key8": "5RRJxhLubw6xBSyMQbY7LtcE1Zbo9SPUNqw8vYnWWvDbiBpuo9sv4sZa1b2V4mm3HuV2ydjtFHSL4nz8M14ijAV1",
  "key9": "5jCwFu3fWGwZCpYASjHp7iMnRiH1JSi5yN5nZMBmHFsEhCV4T5Pi9xjzihDhdv5q8CAekp9CotQphhqRGJ7Lbbo4",
  "key10": "2qfN6PFSdsydUiySKZLLPrkkWUVU1wayG6eXACLKUmFQVsyxZai3dC1jqUFTdEJYVPv1gLmzdFB3tSj2Ze1CQh38",
  "key11": "53ZBcRXfSm4fYhUwMYD87hzTRS18NfBh5ejPmmaqde9A59sCm1ycwzD1LKX23iU9z5YFAk9zt84VjWH3426kXyu7",
  "key12": "3YtoamrCirzGThqksBonr2H9YanXMznEo5noKcGcdpWrQbtKCNtjGg1CFFDciqMF5BufTwxBEAfWvzhwa8QaVCXm",
  "key13": "5T179QHjuNLeug375RK4J7FPfuwC7vqvQ1qieCUCouHU1z4RQqqameRaXXhqeqZg5XUX9mrz342hjHzcc7fZMhxo",
  "key14": "43GXLZTmVXP9PNoPB9bAtW6JPvhjD1xMSEsPDCdXWSCwzosHw1gzZprpDyvgjFTYnf6SMHPYzaGLG4Ws7XbDgXi8",
  "key15": "4gXRWzcNbPbzTnK6yjTA54UdrJbmSyjzZJK4EeVPrCeKA9x13bm6RwUqCfhQpmjTeZJMcBm3dgDtGw2Gvnfn6gMi",
  "key16": "yBiwLw9REg3MnKHBuUF3gmxfDUcLCSxJK9pJWrxG8wqU5RDHeND3UQfKBPNqmPo8Xi6nRjaHdJZXqG5WmaCPCWw",
  "key17": "4sdUKBV15PEAviRGvPjFQ2rMKnQFDrGroE8aYGjmPTxHoXTfXqBxsf92PK5PEdwCrVdwYtKxaA21dLWxXuW4NnXa",
  "key18": "3CT7D4Tv9C98fes2rHXPqufGoaipPHaSikdHGA5m5MJuhjKv9LZUf7Qjue1n2CN1pqVZtPn3o575aLpAPohaosbq",
  "key19": "3aqBqa8dwW3vFFL4JYnjCXEYpHygWqyBhonSsSuz7PBJMkjwgQgScPWi3LuYvVUAe7w523zNAYhDYrFJRdYExbFc",
  "key20": "59TrXjstsjA1sZtSdtgoGViQjSp7senQo97hMX41nQUsN1KJFXpBZZrmnfGUyjHBjvTYbCFhfAPrfN45LAbCP5RA",
  "key21": "QdLFCwHX2T6gMAQuG4NvthsnZgKJSS4iUfVZ6rHBFSvRdAmFdy7msscUxrawubJE17ybhoLf1quqAkuCrRa934k",
  "key22": "2mveru1c69F2JDqg5c6LCFLCK9jrcymF6XaQUtiJZEjnYgS2aVbQZba4WNcbeLbod4Ccjydunu3fXay6UgEdGDe8",
  "key23": "uLtTUyRPM4wZ8G8dMASUkr8XWNDKiVZ2Dhx1QiArbRWACzqQHCoDtJY8mdkRN5TgqCZjGH8QU7UEuyxs1H2pvv4",
  "key24": "2ZGa4GD7gBRtTwqvX4coC7ZgCoS5AAXJy93e3rJXJnzSvhwCgZrKuegfekXWS4MaYMjRKE8fVwwW7eapHvFj64EC",
  "key25": "56SkENAm2m4cDswfmpxDzQPdHLHrQbqJciGwrwssQGwfqqj5LXkE1WajD3SjFhsDVAxLqKkn6VeH7JcieERZKXoR",
  "key26": "3hzqEcRPsRkUxcCZgJbkfrf8zkhNaGhRmimerCQdauTZtd1wxkzr8u1oYW5udPQvHLAQVWrefmB7kUksektPv612"
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
