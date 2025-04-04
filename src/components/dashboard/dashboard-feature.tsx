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
    "4qrTJniGF8oWxG1ToWzSjjdkhZEnoegMUaTDM8uyBqg6MUCjHoBEi5DmWA7Xhdri29aHEs34RMyymDqvZakisrVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w7XDxbVcbmMPPLVg88giSrePJ4DQQq5cvtjKyzpW23aWJva5oE68ay6pS4PTLPp3JPYykih5bnJzi5LwYvZH2sJ",
  "key1": "2KhKqeZfbvfMHZ4pVMaoaZfbDf9AQXVEyMTMYgcJ9Jugi44AzxTGv856yhwNmbDHQvpCNKX8Cvp9gE9diX9d2NqE",
  "key2": "2bNt4Pbhu8Z3uFcYkQ8noCXLFWZf4cqB3DNGoDyEYTF4gxYFG9mk65agpFnPeksubvFd4qZnbSv1NDmrSvW5E5X8",
  "key3": "4ec2VnVgDxPqVhDSuaRkT9cGvGnQSGkN4rBRSMa9s7be3WdoadMBDPYmdcGRknvd7vRpefCMiopK5MFdyRBDhXi7",
  "key4": "5AX1ivhPMziH7m1uxSYxt5yGkNC66DPRFTeH9Pp75nncZYM5Gp1NqQy4o72twPLu5KyvSBSUPZmFhX7cF6tFS3wf",
  "key5": "GP45Uy6F7Q6c5dXdvnchudQiVv7BhyBGVeMcoTrMRjaATsAbFcsVdu4D1sEM5T9vkYntsTBpVXZPtoDMoptjP6E",
  "key6": "4nXW8X38tMEJAYwR7bZZtpnB62Se9newiZ5vPacy1WCtXmAkkZudbLxNX1EJ6FG55QP3nWSnyWeVWk6J6aB3sAHk",
  "key7": "2c2HaCpyhT3UTSXD8Z5MZp2YY5gLbu4tt9KpUghLYpmok6FKmvEvgj6mR4He7CWicEr1UuLBst6Dr17LixRZvY2P",
  "key8": "5hYuwNnBngW11ezzgQvDUR22B1bEFG3AtagBsaMoFN3EdJMh5XGKGs78AqVF4EjuybiEARGiGtzvYHey1ZmVb91D",
  "key9": "5XAmTfzMKTv63ZNHjrxUchkjZovJ4MPi44dBfiCbRftiCcYKh36rThjF4s3wTPvRtUhtoRgRhZw9dMYrs5WJHdpr",
  "key10": "yD6uNPaNVwF8j4PjwWiuxgGPTgn2tS7FqvU3ys6FZUY1Gst6yYb757RNqiQFQUj9aSqDaAZgmPpe37PGfST3Vvd",
  "key11": "2NkQQyKNyeoSzB7HCoAs4NXsPcaGazD6CMbiJTEy63HcYy3QEgLvjJwqfdeG1wC9ZREXqb2FcRx6KAHL1kmCg8Af",
  "key12": "2sxTrS2GgEZtnjzdFFLgMEDgNotDkMLi1cCKprawgPm1veggGVW5jK4iHHtT7ddbwbJRq1VCKMMWzkMjvWox6MY6",
  "key13": "4SJdQR7xeU6knrGmxUDAndb2jFtVJtMo5CzVjyUg8Smxx1XSTHRKryGcndsZcbrUgfQYcM6ExwDVTgDp3AyKToMR",
  "key14": "3RSGW5X2LC9oohDg23L5KMhTxYXZxs2gE8oYLo1SKrwtKLyNG1NW3JG2tTtZLCzCuKDLzpJr35oo2kwMzGRrYNga",
  "key15": "2NACMp1E6Ku4Uqx5egUKQRp3AW3bmpkqQgQ5CFh1iGZgadXopjyDLw1mHnzdkDkhdk27nMWxpL9GDVsX5h2mL77u",
  "key16": "3UsNANCoBFes12TGfJudCXoJBLUjU728Fh3hTV85up5SfnjaqWGY7sGmLNeDSNBU7zaiLGLsSgreK2BuAViga8uu",
  "key17": "2ZncqPaW4muD1uH8rhkHR2wKwKvc1vzk3syssDW84Ve9pMnanBsioRibMBibqXorXpY3DobRuyM39j9LBkkVPEbp",
  "key18": "uNfmZYYxca6kYijanGKczUtGH1f62xB6KsvQWcu6wJSeg49jkRDUNQbMpSBYm8ybXLRRqr4K9WqkwWXWdLhFMrG",
  "key19": "4KfYowFK8DBokVFLYscysMivEsW6F2PiyeFAryEHVDBnXt5gjEYEiBrQ4TawsAxUTGCHDMZNdLyu8JYtYM9zk2JE",
  "key20": "5VLTf3LsUmp67bdDQGMhCL8nwKNvhjagcEhvR1rJa6cSnBRrGAavpTFqEkNurQQFKxyFhQAnshA1m59Efb1U61ri",
  "key21": "44Rv2yh3FaPLCR9utz9SufosEDxS1qi862obeusP2hL11YQcKQvWKPCsDot5cYcc92yXvazNYmWtjxbDwMBvJsMd",
  "key22": "2AFXAPMxeSeCNuw8MQDEeSYg5X9A8BYFYy8ZJCB2i9Lj3DLhkwoT4ezjs4WC8FFuDTEnA5GBDq9RcgAenTAeR3hH",
  "key23": "4LFbsuxF5GE18npnqih7CWusCtprz2eJxzsDhxMfJwNthHsubCPnr31K5GYWqikx95zjz6tvMBfxs2MBjSpnT8aJ",
  "key24": "4g8G1kJRk4V39oqknQg4ukpsSLgJMfo9SPtES2KLw4FBodFbVC4PMxqzsdc4vBJULzevTkZ5VixvThayzSpjeMa1",
  "key25": "4VG1FD3dvsAtM1Ld9x6tko4YXxR5d3ooCTxL5aSoXA37MeAHMX7qvJxkxk5NztYiNQv1JqQzEH1WPHJn2UqdMuV5",
  "key26": "4LzrKxuxFp5YD5b4e1vRo7W1U8KSRjLhRXaq9q7wef5QYQWu5PKiW2rQTpwn1TDCAyb5oReMvFuEedqBHaQP7Sxn",
  "key27": "3AJzzxfArbGwVDCu1UADD3Z1Hm4GXcbiHgbsEGwGJvTUxJVx5U1pvxxhx5V2EqsyUiVMAqvR6RygMCnttLQ1Rpnf"
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
