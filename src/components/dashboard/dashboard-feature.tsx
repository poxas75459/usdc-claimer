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
    "3NWseQMh5sKKY1ANP6xS4qP9kjAGkYR2iF5HfDVnvoBaFVEkbFkzKLJt6wUfAuYg83jajR7qLEk6yepjytXtTu1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4by1KRS8oT56auRWsb8p578TruH7CpuuzeUAQxjTKntAcw1oNT3XEVGku15yMRJRLi2ZWhYCczjMtCaZfoadZiVL",
  "key1": "5naXrFQG6qLjjuQDKUiAzthARPV2YQEkijRwpgkYts2d6S7P3PjUXzpaMwnYQuwMnZ3HCymb8RrssnbCQtjtnStg",
  "key2": "2sjSTzgUXf2y4jRJtDeyisCsAwyt6hahov3csKq2EMLqsRtjqmkQ26W3Nrrx2DEJ7NctrbW6rXn9wFxSkuzxDN2n",
  "key3": "29sFFz9k5nGH4Lk5JXx1hxKDQHJkGGHYwxLmKpcB1cXSf3aPpeAo7cUvwmW9AuXEofwJrYxPyGb6UzTyQemKY8yo",
  "key4": "BdxRFVM44RCiWZCc1kdjjUKemhXeyafDfzoDGNFaHFptmgBiCKX9oA1GfY49LkamyyVFu8qKrygheDUmFbQuN6w",
  "key5": "3y2jS1MMsUnqd66vQFAJtceD4YR6Mr1DqVCy2MTRLU9QZgoqWu8HepgBb2ALXb768DH92FqLKPGiSPc4WnZiDHLM",
  "key6": "4x9STUQJmetqi3vX1wt27bsUQo9aWQjZ4ArgcP23eh7oQf1xbk4ijRqGdQpmSMd1SYkEjmUD49qzDFg4nv6WohKq",
  "key7": "uPAvChPB2RoQNqKNk2iknGTBLKuQ3M6kdrEyubB484Ex57ptQtJYgDNoNkpSK4bYa1TaawVHZTvBjRLdZYtARhE",
  "key8": "67HJPya15Rx3sWJHqgr6x8iJWJkujWt87b7caZkFns3KEfmLxkyDbmQgkg9TPHVwRw7c2iLyGQvXg9KR9VcBAkyi",
  "key9": "65u31BK4wJKDvr9BsEbLEMJTY9t2xnjEeZ9379EL4A8KHwACRyZ3PcuTwfzA7DVkjFMQuK76nA2ZeH64RFCH8KcV",
  "key10": "vsX2UCVqaamUxjK1FYrGYes6DuU6D56vJb9ZkHPrKkW7rLDKePgYp9QS9yLyViWA23YerGjHqst1iWSLTJ9Mmwa",
  "key11": "XUkfU9i27Fge3yvhzi41A8KkLqY2GiCLDCcBQQSmaWHVa3M8CsyK9ydnUhuy6jENReX68PgG4Vde185Y4WCSXcB",
  "key12": "6Jxv47ashhTdBGikVRUbVP65McpaNVrv2do8fh2v37NwGEjbbwZXncAfYJB7No3Z8sVp8ZpFK7CGuFs5crA5tGv",
  "key13": "5xJPm61nbFS8hx413p4eoyCwds9v7j8XTfvodPCUobqjEQHsHz3inZzPQexFGBvCNZNNs2nmtEmXV1D1968XPQy6",
  "key14": "51HvXZhD66YitEfrStuy9Ss2KAPTEoAJMqgKEqr4335xQioGSChU89grgX6LuFS6tqSQun9io6fXorWfZsnYsFTW",
  "key15": "5uUpYR82x2ZwdKTeM3ZxvhgDtEmsTcLAMhmj9tUr4H5Eh3iXMnLU1pFkGLTWZdCCDMBJYhHeGTRD4Q7Bj6muSJtz",
  "key16": "4m5jsZ3btqejwr4c6gNEPRUNj26D3f8d6E2SWGNehD8CNPUHz6by5ToKEJNWhiZxu6DbkPdSR6YtNa6Xan1PPDtf",
  "key17": "4WMHm3RjEqcn7JPSh7DRHN8gwxJgBb9vVP5kXtWv6rnDAK5eux6kjnEfh4cQcztiTgjYptWgo13qQ8waiEjfGvb5",
  "key18": "6aMvVnd5zrUUes5wnoznT3dtJgzNPSGF7aWZjYeucKHeyso2hEPTRdAEjjeaPrXYpii5DeLHkLCu8nqNJaLp6L2",
  "key19": "3zv6FDuNv6eVPQ1srVS9Hz3LFtfV6vdk81Vue7JJE4buCazzjAfRSPRz56tT6zQ2iiYNVDKvPaNyYhcgj6J4WH1H",
  "key20": "8rVENYdUPnwNMqjehHb5PEEXUKueGKLkcKCJVnULz6WKfwMBvschVMw7WzFYkyRdSZiQ9V7uAo8tJPqTGAdWER3",
  "key21": "2hvLX52gNMeaY3fCAX9SieMUZPngHeKsGCZxoVY2rUaaZkoB8o8bm2cbjRZDHYFDV2dPv9HkKw8oL69bx6p85Sts",
  "key22": "2DS3YFKkvdjLF8QozLfJpC1rpgeU95HGCgyxQjgh7T7iR7v6bUSoHsek1Db2Yks7QEVn6aqJv7pdgz2XyuBghAfQ",
  "key23": "4NrchZ9ZNG5t4rwSteH7QZ6ZDgWEg8ZsGASxWoskDJtd1XpWvZ63rqTqmGJcKC9Nae82oPYXT1gXx4GWWsuXudRz",
  "key24": "5dG97FCK3j5nLCfWQLR1mfjo17zTQ8yusPVY3937bb2z2Z995fCCK6pX3rXn1RoKf8BfRufyvbJXQiZ63CrBB4eW",
  "key25": "46GAZUSrnz5WmwaWW3DYS3s3C7prhZTR5go6XhKz9NaZfjxkQteh2ShfTZLaf21ySu1JY8TBi1Pd11qHYL77b7NV",
  "key26": "63VmDSJU9TX5Dyvj7d5JJaYo3ETNiRk55LrrHPTYYdwoprCGNjdcP1Y6MM8aFTxapSVqxd6jXPzexqZ9KcCVviTp",
  "key27": "FHuUGzoHTnyqhA53TWu66fQuUzieFT3oCMP5vEZA2NV7YUWZPoaysae4BWDoTuoob2WXkWWKmZviAKPYSne1ZxT",
  "key28": "66KbwLfXWwqgMFXekP5LGJuFJQKJaXaTgGbbEWq4v3PqoqYAgakCyNJfYHmYGvbmnxhopWxZsJHtbXRsrDZs2LPV",
  "key29": "2NXP6VL2rDrSLaZG6T37henhJNrks5yvVH3qe9pPfWiP1HnRKwheust49rwy3BbQTiLvnhRwizwLjSFg487zchbL",
  "key30": "3ZMKy23dZJqLvwdBYiL4WVqtKu9tVrEpjDmHPZvmrSy2YdrbSA4CKx545hczcnAx6GhzwkpstVrz9s1i53wpaWE1",
  "key31": "4tD4jrwWTfi5MsaR3aui7vVr6DfFRerYFf3sJLZijDPMDx6kwjS7RNnDHgLHKnPWZB8oruXTwskUjQhYr2tZSaCR",
  "key32": "5R9aCvWRTgnAvrpZraUaddvK6ifTbWSw4a8ouesxwXwdTvdpHeyUfbzrUbdcUL9WfGQn4UwgXFvqM31NxcPiuP38",
  "key33": "4DVDrbPMN51UsNXqM7e5pyJrMFjzuvbRtUkBuAaAig9gQzQ5ZKjw7T1NtHG4FYeiZoDJXawuZTzc52LQjMUKLreu",
  "key34": "21qYZ1exQ7qPS8PXWpSt4ghj3KzfMcMxnbBtTEKVr6Ck9Pq2iCH78v29RJqGoAEKrofXq3Wdfe8fqQbN354PejuK",
  "key35": "5kb3QVZwZV5DwhMK1w8Gse8rVZo56tdU8h9tJF6iPdNN3DpG8z6sBdDY1TjUc7PThGXh1bw6DXpeh4a3kn6V2kEj",
  "key36": "4PBg8qWPXMNzv7jWUfxZMDxxrgEwcCefX7fuarF5r99F7tXbt2MugBvefxKQodohAqDjdaqhTaP1FafXHPX3NWA",
  "key37": "4V17xx6CsXFfRcmq5CyiUuBHjFDz1EscMLVrJ6hpQhbHadgrcUZsJF5gakDF46TNiDhEzYdfUP7C5d6gDiCNMmdD",
  "key38": "4m9Q2SfrcuZ5RB6oVyoMVhQTrryu2JVw2Ygvs8LkTMBiEF5YNJwGdWC8TN5pvKdaU23heKXj6mVquZSKKSrxb9uN",
  "key39": "65hn8UB1SmwcdgobJj1Wd9VqqrCEe6dYWtCwSJMErPQmGBp9HtFLoykKxikTg3taNihpwybKKBnwmvQsG17JojH4",
  "key40": "3EubbZ9NNGhxiavX54VxC9iStZ74CC3jCZFniRn8D3zawt5T6SJEMGH1y58Eh6pscX55wtt13dVSv9wt8e58GYBE"
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
