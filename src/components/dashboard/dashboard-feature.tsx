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
    "3GPmJYVwH4CLoihfFN3Re3Pa6dwfCY9iDxMW1FLWeNMJJUmF5abK2U2cQos3nbPwayHNTHEytKXFw3DuA1hv8NtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "435twi9YiUCeYrfrzj3WmiVMFgcqSx5aCUNVRAFtK2WGKe8Ra2hYXE7X3zw8gdk796cyEsximUjb71ASLXytpPqB",
  "key1": "4yzPrQ9kJdMemFBdcVzX4k7ZLLxyDQnARQvSPdGLfw67PuyRdeguggQNhvmWby1WWtYLYYVKL2u3UYFUZrcCN2qv",
  "key2": "3rPVQTHDNnBBCc8FbaXBt5ooRUNGz9maSvHybkGZUVrvRTDEqtCYVKhxV7GxntBEzjSZ3y8Es8SkExWmYQvUqQRh",
  "key3": "3oftnRpWZbozjarKT93gcpLjKdciiAT3CUaCFeAJmw5d4fWyfaNrSKwdGnoECy2KoFPXQKmvgXrqcYvFKGA4Bvet",
  "key4": "5MwFqQhmxbaiXnbBXzKjtzwzYLYRufbAtRugqA4rEJJTKqkMgG2kBdseLgUj3ejXTGUwnGDKWcZcpEWad3bo2ioG",
  "key5": "yyrhde9QREbmvwJPney6nKUeyCasQhc7bhUZtSHzofwFduXTbTtC6AQGWTddZsSmBjaEywtXydpKQ9HHKkfwXAV",
  "key6": "4JTkCGz2FUtYmprCWdzd7UpNY73YwWGKGwwVW7jzSMPbgM3JEwmfQMwXcnwSGVNGzoWAKQMf97QHymRmE88jk9nQ",
  "key7": "2XTvwLECjvUUDKmrnp5tE55UX1UnjqyMUAPZjFEo8DK5m7YNya55BrjgEvxkmbCaZPN74FKprWaJ2BDnNThMrRHC",
  "key8": "2wC6SUrZhfqghXSABCXr2e61BtNHHWuFSfdpPhTfrnPA39xkGsp9ChgpQe5xpQC9qn99PChQUwH2AGSfay9dLUm8",
  "key9": "3V41mLGWse8r47GwCHKD7irUnFvABrHt8nWosiEfJgRjDDFyoEAdLWwfGC4HU9aemHGKYKUF2sukTKTUDcaeapSN",
  "key10": "5PQpoWyNcoatN7YhSPoP6h6aXEYG7qhDjX2qAVy53NCRrWPSGVrTksSTGxyf7PA94pdCa7BzNAZQYXe1fFd7kuYZ",
  "key11": "56iZp79PPJvTDQPgnY3Jg693T9HBBqGwMAC8Dv8UckWXKNExEMZ6XvsERUmxfFjEZbsrJstb3s1UqbSPMCLYF7ek",
  "key12": "3B7kogVjP6hRBNeV9UsqRPjP5Up79dpeCMAVcGmZeyFMGoRpc8aL1MzK1k561qRtFuYUuFHsKAiKyarXGbqCgMpC",
  "key13": "5sxugz7DZnzBxcncfWLNEhrzm6qGxTnLW5TE25S3im1P4gB6F5STdPGNEyYxFJ1jhgaYjWQeXTHrUr4m4yw2eutf",
  "key14": "25m2862xSpBwaKr3HWWQxUcFo5DkxtixbSSkLWHHnE6v6BbGDP3LLWgTEW8VGwJY7MmeUsGSLxFxTeH71G9eFh4x",
  "key15": "3hy7uiHuCRWr4DfZb7q32GbzcRT1GVF1tEzR81Cmnq4PeDj8yL4bhXDjWaYVZbCmtMrNXhg3e2srWsdYDUPkxJ4q",
  "key16": "5pQyPNLgydaBkBD3753Pa3JvG29A9AFugbhSJSBiPHbcU8yVDznTmRr68S9JXZp6uXtxDnuWBkJUAyWMnRWGLmV1",
  "key17": "m2EKjXsgkUttXvJu2zfej84nmfDvnXMs29rWqa3pFJm6gvAZBv6f2NrXzQStfZEQQz1WAhHL1TmjJCGPpFpGMCh",
  "key18": "4Je69NviJQkuiBNaZB5pyajYEZ7NXqfiQAaufiCpdn3GqjA6UWxD17Xynx3utUEPG8LjQt67nuqAJxNfreN3bkuy",
  "key19": "5oegtxqhvGX8icvMVnbtKTJi6V1pjv6bk8poVCG1U88d6yHcP7MgTgew4cMzHQ5zQZXWzuCDPuyWdm9D3vR1NM9h",
  "key20": "2BJP3XHb93nyy1JtGZBPB5Lce6UWwGLktGZN8urJXKxBKpvtzGyXR1zqfceWt6VvGczUgtCvTwTk1QkMTZDaLfA9",
  "key21": "C3yKsNevJENaoZVyZQS4PhcbR3j1h2b53kKqMGgEUyde7Y73ayiijrzBKWB3nZ9LsmoePbTNtPF4v7QtrWMVciD",
  "key22": "JP1q5CCGgi7n7Jmg8vFBy3cFtaTrK69ba4tSkhDhCtC34N4BXDaHHgmGkhWy5r8trBYMJH5QK3zQmLYH5nFmZoh",
  "key23": "24YZ6bt7dqsXyUwG32aQmi7fdHUkJ726P2rHVcv4qiXaqDjLvARHyhCq2TA6vuguREzd3b6DFYd4gaP6utuUxcBE",
  "key24": "ZtvnkhLPkV212MWLpnArFP3uY2WdGgyH3S4jrZX62YXrhWsTxmGBJ8eVh1FWAW4cCHWYSaHgADJ7MWtvNpofjgi",
  "key25": "3DTBqJMUecTsg3oibwtLrKxTpN4X4SCcZUDpPHkTEEobajdLzzoUkTFiAqF48fqmNEsynz1veF64T8bNHeJYjZyE",
  "key26": "4q6ZbvpNF73CvWA5otrhcB5sJ5ovkMTbQLbkhWfAgUwEyFxCk1wvLVrNF3mwDQGQ6JQ7Xx5PVnTJpAhEc41NvHs",
  "key27": "5FYoQr5GGz3wXmhkKZXFUXnzYqzjCBkLuUDu5VjRkP8m2y3opbZAEMonv4qByZfQYnL59SP6Xcpmw1wk3B9xteKX",
  "key28": "3av21MWWCmnL8DtrYUKmJEbgp69FzsxfD5YwHzudsKKhfAJbEdzxVG6n9KJWH2NyhgJHcDkkc67DFUEAPMpUoFoF",
  "key29": "4Zob8NAuLnyJ7iX8wZ4TGd7NEDib8fYS5upB4NGjyAp7pXEmXhkyhgWaRpWfJqMi6EDx2zmWuaEUMQNQ2tSBmHaC",
  "key30": "5m8yvJfxoJbikrMoFLFDSBjbFZhrqDeeB68dNkPMBSR3atVMra4z8UBdfpfTNyvTNxMYoYyBjJuqRQaCAFSr2ypQ",
  "key31": "5fkMWpmySYVtuMoYtYJS2KMbaoDpRFxdxRKhso5699wMWN3ZiasjPeY81ximnM4SLBFjSAgpFoM1drso9KZYaxJZ",
  "key32": "4XfWVrkUz3aXtjet44CyrM713R4zgxvn4sQyfNbuFbgBbWRK8gghHxdywP7UKx8cr7KtsUzxpxPbVYGctwYiMocV",
  "key33": "qsCHC7XQfowzfkCCxExc2wdCbq6oNij9SqRj9BQjHtmF8viXWQWY5LVN2wFGkUFd6yra3abe2bLHVgoeijXYC1X",
  "key34": "3Wh3e5HVk6Bzgo3tt7kdLHfknacVZowmAtSXjY2mbWmCimYv3tyRQaEbegM3wP5vCnQvdqqPUNQJXYgoZceQ8YMM",
  "key35": "48jKFNqinzmweerzaqd8vc3Ezin7G1Nms6aEzt6FH7VxQqPAi6gz4MUEdDAD1AphjnyNL8xXFbZRfxzQNMYSkvQj",
  "key36": "5xxLNKZfPLxezZKUQwTRnCE7PC2D5fz4yFxernnkL2H6TRdDVbm6NtcTxNK24dr9Vkj2cbeYVSdXomrUfJXQ8CG5",
  "key37": "Tm27GvXqJuahSk3k6cznM97qBbBft5TsPzj78UHX4HdnrCQ2AwGziLpa4nDqopwSN1691uN9VyZDFje6Jtvdjyx",
  "key38": "4W2g4V8YrMuHEyyzBLeJVn5LUwbehH3PdzfRKMfaneFx9Ug3x3iWrpKtKmGZm33nhfLAvnvrFLq1rRY2Tr5pqnhj",
  "key39": "eVRhJyUJ64Yf2WYDCCUHEqWFDVH15c2nhrcPuFKxaCSLN95AmXYEqKzKVZgVzjb2ySni7qa2wHxQLuetabXGEvF",
  "key40": "59Rz8r3BacTawvUv4DywXR85xcCQDUqH9DX4573Ead359Yf7EZaU2YwMdg1E7yLhMShLgEuGWdoZK18X6uq81cnj",
  "key41": "2Z2ngksTp3WAxxz2hRyg1gah5EX8EM5SMYrztvhL4buHDxYciokPGvH8GcLxaDNMAj75NdWaNDhZT35mYA9XUb5D",
  "key42": "298xXJosYmGYfKVBVyU89oaz3EBtozEKWAKSe1JGkhWwi3GCkcTESNTvP1z1uX1vSRXqvxReFH9DcCWMW4tJPVw7",
  "key43": "4FH2D2enwo68uasAQpFcaX64c5qNh2bDWb68myinquxpGrCumknta7uEgCib6p3YXMqMPVZum8JV2ucSxvFvRB9i",
  "key44": "3Qq89ouxLBfouggjfPnYatWTNwxrzroHX8CV2r6uhk6YXtQ1G2eMWhV6vnV5s9ATdet1QdYJKgHHFhzRWk7yhmD8"
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
