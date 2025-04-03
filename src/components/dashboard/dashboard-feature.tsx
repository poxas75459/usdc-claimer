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
    "61wRcAeZ7oVWrdwEUWwsSz2NC6Wm3Gcgn2ELcHZFRJd6JaMj46yUPkifEpzCEFZW5V5Apn9Cw53DVPDMzbeuFHNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RN5Qf5CKCxRYgiKBH81gXB4bCgWWsUGqvnCP4etQsjAVypbXWg1VPA3eN6tVs3bYRZDTSWjNbHeX2HSwEushvX3",
  "key1": "28ZuA15DmGSPx84Ap3Nhxg9wjaeLHN5MQ9fFZvk63KJY3qoF9BMUpvg4xF2xiAuPVkF3DKDhF9UM596YqFX7mv8p",
  "key2": "3C57gu6sKh1mdpfJUvvfrfqMTqnacMEziMckrrVvtnXLX8hC71rFyLuERSLU9vfRwJwerXHDeWgv6ChJhQD4a3Cn",
  "key3": "224aVwKCfx679BhrwwYWrpG9Ztuq6xDLKmDvhaZHw6r3aGCKK48nBWCR1kpsp6XU6wdDciG6UCis5QqrnadMdnpv",
  "key4": "2X3xyeT5LeWBhGa5LNSBHdSNKfUD3H5n51orKTv64451gZ3z3bTgpZUi4DbzRgprQvMKAaaLJTaqaAGk9ktx37ke",
  "key5": "2oKYGt2jMo9dekDMeXzU4w7aN5nGan4vbtrQL5CBgHC14VJgjbHzbbkjJvj1ronBgoyTEJJqi1jp3iURaJ1gXW5i",
  "key6": "2QdS9wk9vkoydD9pJci48SC5A8o7JcnEJqa2z7UEvFWPWjfaZ5sdBggEN5SnYt5aDPNnU71sapgZfN11AEJuphCF",
  "key7": "3jTyrdQ6jsUtCvYDCKBw7rqciiV9rdq5CY4AWyeCGahZ6qCsvVqK7U8S1gFLnwayCLyujFstMPyCbtvCAD14aMxa",
  "key8": "4SUaTEfy81LjSNxtaQuDhQAciYXQE3URaizifDCkS2srAK4B8eg9EbHdk3wQj3tkFqcRFX6mV11kmwm9ssjMMJbW",
  "key9": "44kgqwC3LbkMUJ7HVXsorzxXTTAiMcBJdAhXpCfniUmtBs9WtDfdtq4rtJzcGYPEPQ9j3nNKhmzNytn9ifrSJHcn",
  "key10": "2ckksrNbCBbnqrdeuaMYxBBuXGthjoYgksjNxEvWDTZX9GmrXUifxZhU76X5ewC2YvqPTWVo3wJePcTVSx51bDUf",
  "key11": "2z6kzfNhmZcRcXEgxcCJ7TsyN2J34V6NxnvxAJ65VXQraie9KKp8HnkX4zfHjBgsKSUPfkLr2Nk3n8BLBKNPvjv2",
  "key12": "26M22HV78PzTHzqjNA6p2mNd6UX92qgTVFkqi47svhaDj9okHdeb4tkMhGFJXJJbtoeEFt6JHQ7VoiHvS1jEFDQx",
  "key13": "2Ve5XyGs4Khj5SQrJB58UnySqQ4UTmrYMCE2QvQZudaPzEmfgjjUe6iQ5Tgb3FpGbHwbtMYUfQNeYqVwY46R6vQH",
  "key14": "2U21Cs5Q9PgwZeWpwfsAjaqBoYP5gBgJCya7DTxd1UPem9hxvukug8J5F7ievtG7CvdBT3CzYuDGPLwe5VYRNTYR",
  "key15": "4tsWnk3HjT97wMHvuUrUT9S7jCXqsUpPp6HA1bb3xcYCNdNUhxEdQud1MPQEteBkHX19DEAWufYiXB33VX4JDkmv",
  "key16": "jjKqRz4kC5yBzEkTQWHVTCSn9myeffFQnfRWNptwvX4VzeSLRxtRjXGqamM8aevJBrnVNThizqGvbc8b8PwE4im",
  "key17": "5pk61mFBCKZrqkeZjsGuHbK2R5V5AmnDLGem53TWiN5vAALpiJ6yh1exHBDsWKjUGaeb1fFtFdJ3czKrkgai2yq7",
  "key18": "3yvr35Mk1W4rjBi45eArfYCSGDJPaGgXwatbyek7wWx1KaS43HJXzsuwUygM3PE7ExauzJawGWzzcFgY9Sq995tU",
  "key19": "4q2gjn8wQBQFE5wvHasFbn4AfikwNVYbss28FnrF2cBhvmaRsjDpqVU2CzoM38RjDT9GWwKHNa4A3WSBeByrxfCe",
  "key20": "9hXRS3hLCNHoWYeznsJNZ6DKGymZmn9GSeDidsSf9RhenKx9Spo7NWGEN6MRMFz7NkTKSx7usTsLXBAmEB5qzKW",
  "key21": "4Anzy6fyPACTKeWEPijao1TyAnErd3YHt3w5VWHMeNvM6wQw65KDxPWT6sjKoX9t3Uq1SDBjsQjRHe3FR7BoHK9Y",
  "key22": "4xeeDnVdn71uJvi4Z5TsBRegGjpyEa8S3KwGvMN8pCysU6F5fBsUanXYqe9uXSDtgLwigKWETQ4S1LEHER8tgy9s",
  "key23": "2jvYdoa3vuQ5f7pPt5uR49ELTQZWk6rGbiZeSsXjPCkYS3F8NbeQiHkVoghWbf91XyxwNRL89xhbwhkQQbj2nmPj",
  "key24": "3xzihfFhCirT8SgBmQdVzAHcDgqqwbfQkYVjzQaU2JHRJAxYzzVzQmvPVGX3BGpAWWgd43sEyD1NwwkoqQd3scZD",
  "key25": "2ioxr4qeGJhysACCbWNuewdw6QbGGNnohuHC4TbeT6DM9H74cZz72ttpjFBsc6DWiVtMSusR7KzcpjtW6FdxTrmD",
  "key26": "3FEEkfd55buDg43DC4JZiegGxCtiJU9TXmwwQm9q1ejCjJEvTF4WppmnduL8wozkJqxXjbsaUg2eUkvFAyDASxMo",
  "key27": "zwEYPTJqNW56NwngqktYPnKB3q83nKvu7F4Q1bkSeuxX63Khqs18g8MnWke7Fcco61HxJhDJH7yssc7MDLWUQJE",
  "key28": "3ouzK1AUwrmVMcwCMBD5xenb82fcd79nWjRMhxNnvF78W89oeftAKzqni3rG8G1x3ChSaEJFHNNicyh1gzKoavUs",
  "key29": "YqntUmTbdgyMCQdHSLf7619KLXvwkiC74GkN7gEriN2jpnLjJuqE8XLBG6MCQCK6Eas8NjRszzk7rKnsKbXko9P",
  "key30": "24iK3k1NE6RYSS5jEUhVevT1ixQc2kcbyxzAHbTYptfNqEpY9mxUPNLUUGad4z7gutGxNRZMH9yXskmuuRXg5svo",
  "key31": "aMQhWdvxbyC1fUSCGXhcrRnE16qjsFayVTPtrBJ6edPvigPdCebv8VZL5LgMiXBaUozuj3Vb5oWH6B6VRV5kavz",
  "key32": "3rTaSiuWemSLxDRbd2B7XFABPRhQjQMK157G9zHP8fB1m3QUUsp9W5XzuRLCo4bT4yi1ebuDpAhNzHRPGhZkQyVe",
  "key33": "3wF6mThzWd6aimM2nx9ZQrEPZufkm7KNkLkJRY4Yz8hcTKFzLY9363uYaWJEw4MnPLRwqhJ1bMVd3PPG1EWDAd28",
  "key34": "2YAULq3jXUnmWaJAQsvEa4SzYiqoaSazmMKd46FGKyYVYRXtHRizN5fcywQVnrpGbn7jCbswL42qYmDxXckR7vv5"
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
