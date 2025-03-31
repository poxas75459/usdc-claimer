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
    "2RHBsYTtWxSphTbh5RS52s2pvAKpzWgUP1tBHTBEnayKCU9KnKPbx6CxBhq2h1Xtgutt3aN4qXscgTL8YBFNQZdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sxn5PF9Vi6BdSSR85gHCNBWFBPLsVs9C3B12VQitCvhhQT2wjonKtK9XGmBrBrLak4HAwBTgVJQ1FK2u74rE8oL",
  "key1": "hPnAq4pGLYmp8fhqpTMfsDyCiVwywepW3YGyFRXrnuyzk9Bxv5SjhryB6KY5Ttxaa1eP1EfY4nwuny1ds4o6fRT",
  "key2": "24T1hZynyCuHkAR7HkKJLDEPXG8UTZSePaitD6X2uWAeJpz8Mh9vc8fAuReNt3z3FGo9ezRUHbfhLTntSfgCBT7Z",
  "key3": "4EL4pVhGnx871SP1BtGdxWjDTVgVWJxMvP3Wp21tgnb295pfWLbN9m42q4PRpgJN1qk5kEnzMZXoDJg2PVXEBtXk",
  "key4": "4cwx4xiJcLT6z4H2GrPHdichr15EMe8GFCdmG2gu9ookjkbkstjAhMW7C9WDsrS3xiJSadKQ9uRGVNC4ZvumeXuD",
  "key5": "2r2BfdjQUuq3GdKNJWZhritVbtMoGsSfCX4zDqhdveQHNwJhabETsXMKxxhTGLzQjEvQE2daysQjoJ6HJbRnRECf",
  "key6": "Vc3e9X7uLmfJjUgDvV1a3tRty8hzxrjh32wnyt6H4tDcevuduXG66Mo3ucneLABhjfwCVLwf42Sa2a1Gt9w8HRx",
  "key7": "R7KqrXB4L4WkvzUEdu7NVXEz3kujLiBGFNXKjYhcZSGu9dydvdC18vWzfWkKNshT1eWftSg5AcHBVQK5maThpHR",
  "key8": "5YRS2yBbxVfxm8pZr2cGVBmb266yGyfvVAex1sYp6NYhznsqFiQtC7LgdFfBreM6bRTbKwV18Lji8VbztTxFBQqQ",
  "key9": "4yYw3C51DFTRY86qqsK9rP6qgtCF745Db5S9ffyTikUwcfm6MKKUFi5Fht2qZGhAxjMQBm35UsViaWFwsCwZoFap",
  "key10": "2sbz8a7brK1fZzguArPSYqTSCEBP1xbvnZsJLnGYxxt1fMaRyuZQpjMfLtMDjN8xUQZboqKatAe94CmM3ENQxza3",
  "key11": "5Jd54pWxzp6tmBpcmDanrSKtChWP5EBzxWNtCXJ5wYfDWiNznGbDXk4U7pvE3XzKvzqAk6EvbV9LsPakvg4p5AjG",
  "key12": "qs9zAJ5vn7yJF4J3Dn2vf4fy1Sks5dgaZ5NEeAyJihT9qdg9shiYCQDgvwXG5io1kC8HweZA1ZzNmSVEzJhTKct",
  "key13": "2zUgzUFawL6VYdpY5GxpcwjDrUma1AHzD7CSTdwN7YJ3sLvG3AkJUBwGVDnASavjaAKuc2p7pWf6kzXSyaY1MzXY",
  "key14": "5ifqu3n9zxEupRQ1gWQRDTwTYqNsZkDzGPgbiz3qdaczKKUAeU8WaqfyhWzyiexMaknzzyAtPDsCNgwtoNRiendP",
  "key15": "nRUaRKTyKF3gVAk9BW9FUGoyfhddqAvqUw6MzUXUoNHoxfRJnJpqmqy2N7hsy6c5HupMm9Q4mAaayKdEKdPQX8x",
  "key16": "4U7DQwRuxUb2QbxFuw7C6XPpmtrcfGtRNSQXa1LpWpKcAgUmG5Kh8BxPm2JFbhr8wCGdgWeFZ2MDiCDUYuvun49w",
  "key17": "5DQjQxwDttgN2c3PS3v9Avpmm6xBUYNvk4pdhusQsRJTYppf2nhc7APZfPxUfWw1mmtFpYveDWZD4dSXXprSgtPf",
  "key18": "oWERjYqEDjmgACe5kKXtsJWhqEVXsa8V35nnhb5dn3zGwshe1zsJ8MGAG3DLcUN67jQjp86BzY6uZFJ1UCAAX1J",
  "key19": "4Vw6pi3h8KgtEN6Crs8AqcyBQJgmo1K3iDp1mmhJZtuwDoFDpdyfUi4LZUtDCrZPZj3Ke5xDqS8HK1uG5nemSKxr",
  "key20": "2iuwvD3EACiFQ9UHeumeyiXDQP39fK7BDKvBufmBbBxAumYbSqnAHP8eoXPs7DQLY9kxRcA2DoHvHwpBF9JTaEYT",
  "key21": "5Po5WCgFhn4u8emTKDrAyDfLBz4msouXBXnsc6RzsXtqnyg8Ld8eKj9N3SnKdKwsrvj51Mdicff3VxB9AMkW49oc",
  "key22": "5o1RqEtbJycdKCkw8BGy71zKJDJK9SVjYnXdquUJ675rN9D5VJvMWq7yoYazqgLkWth9KJzPf8G2WF8hynibqbgA",
  "key23": "2SAyqwok5opTmvws43QbqiHJFoVdw1tjxaSB4KDxhYDiZ3mvjykn3WzyDMt4jrvXqLnPpAnwePf6D1iWTrD8h3jz",
  "key24": "2qEYDTXsVeQunW5Gy9r3qS1wQKrFoAcwdU5QqfJZFE6xoRQ71i9ypfw5fk7iX6iUS3uSdZMsj4Hb9i8ojavpcyHc",
  "key25": "5e9jt3He84VMKZZXmMHgXLhVpGkBsTF3DHJvCRV9e9Ctar5ugTnXLNXFCm5BMVAKWu7DAuGqsQFtGtG87uXV83oW",
  "key26": "56Dit9wGdjXrmZ5mUmD2hLaymGyxok5JFXVAAFSQcge6zwtDoUp944HpFyETB2w2UF6mupP9LHgbFoEWTU3jMJX1",
  "key27": "45yCMa7fsJGnTR53MUAvtpSAFzXc6KwtqPsEnaPaaNy6afkUV9gLvuUfGmuADVqDh4FRoPoPfisnH1y4oG3xFTgt",
  "key28": "QX4bemFkRm7tCdo1UXdMTwpqwgWXf7DWrACRUBdkLfsx33xNDqQ3xArGJJQGVu94L5sGQGSUfmY3zevpKq3ahDs",
  "key29": "43yV7DQgNL5QXoG7jr6g43d1wwGCGiiGGHPdSyWK5geCqzVLHWsQHnxdYRHVQ7AyrmVN9jY6ZZrAEQKxH2qbTZjf",
  "key30": "vgeC8b4hRV3arckGYB3JWNQkARNLn7Rg3ukCT2N7oYv7ZvdPP4uzgTBTSp3w67W9jrrWc4k83GAq472qwmXJDPi",
  "key31": "53H4PpfQPMidWVjmvZKt24k38iojptSJjkwwej3K4ieo81KwgsS1wHvrTg1DUBLze4DcNKi1gbN1pfHJDf5HkG2x",
  "key32": "3GxfWXC31yp86phnHsspBxdEZia7f2nSTR6APhuX8jSW5f8p9v82yC5s2ee3GnVcy1Qqq6ijhnTzvWC5cx9jfXhp",
  "key33": "4seSAJCbNy6A2sHNjof91uRAqQfcyadR4NubwMDrWjGVXTPPF1shdPM4bQSeKor2JhBunAwk1AStcovVPH5JZLfp",
  "key34": "ajbpS4BqVp4rjsXi7ibdv52eSgQGQ8eDhfddchRg3pkki9Btwi8pnPzQKtmoqxNpKCNzQRwkHhNntRz9GAUm4wu",
  "key35": "BuG9RPyjLXjA9QXswhDPrzzq9YdKvnoNd5uhipbuDuX2qPUGrUvjNn6Ev2ZBTEZC7jsZD7xod422T12ob7EguiH",
  "key36": "2K6FHthT6GnvCGWJXVgf3W78Me4ongvMCAmvhrCdkY9V6G6Ym2vtjBuZCLYf5QDYzKjKbvaphYpYLnV6xeVwEcj7",
  "key37": "Ld7u4rGJS1CHhRKfXP3th4GiiEpzS72bspRYQRShX4LcQmPySoDppDGDmQNpnmwMjMRbjutrfqMBv9gnYKkQ11A",
  "key38": "2KvWEg5KrWYdLzc43pS1TkDRKRZ1i2z2GCSaSzyPDP4ZyAH6NygeSk3TB2CDH7r4TbfewksTxexWzLPNxzKfYHFG",
  "key39": "2chro5fdJ7FQm4jDnYrPXCATqbS65yssYiRzkVGFySuR1dwRSYtNo88rBmYXRyeYuqvbFmiDDFaQyDSmkxD6MyAU",
  "key40": "qanVtf6GTib7fqR1dG5zHFepeJjf9yVBNh3J86PCcLKwx1MCn3nTRkB3jyzhqbLFq26haYyatx8xM1pHi4EUnbz"
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
