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
    "vQG7QVFTrFMD7HqHHpRe5jfUko8TPg12gQSaGhcrcgnwHapZnMEqNmdoGWsiKCrZgWLk65nsLX849mcuWCV1o3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YK3Xd3LDCrAHotgrvg9y8qUwk9aA71rwHyYcxdSmJuyp4VbcXYS8HqjAmqmGpF58QjTwYAyoAeXVmSSbzT7PwtZ",
  "key1": "3QhK6vUuoc9N8kA8dJBPbDKZp4Qr4CEqrPxVpjEAafP6yQi3jaZkvwq5vXoFCeNU1ovzTswUAh5UfWT8FLeCGWzV",
  "key2": "5xGtD5nFxEHVLLGsRcXdBVsN2Zro3CWnEjoH4rDdDF1VYUUWq9p4RWBgHGic2JSxfy933JKmw3H6wCce86rAQ6rt",
  "key3": "5oSspgFQToV1Na1zLPHn6JzAqSTatZefrdfvNTQPXUwGMdvSfq5Z1UngHmrLKJAcZwTVaLhqwEY8VLPME24QAMGe",
  "key4": "7hEAJAKh3K4MgtiKnipVrPUV6UFsYAGDNhP6iUZxqGH1K6YohoUjoRsobLLbiB5hKEMBDDEfAniRPzWXysoc7MW",
  "key5": "2wRkfFXB7RW2g6vze9tjNhLqox3fxDDrigqYbakAXr6yyYzVrdh8Xk1PG1tAATjm3aamvaWGGgbrktrjN33FTrkD",
  "key6": "1462bR6qPd8MnnbjowefHJ6Sjad3oKDf4cddVY321rDKtJ5Ano7fAhq6FkyMLiDqoCKtDFLH7p3e31jJQGSmJSc",
  "key7": "2pYzw8NjVHWoG4v8oRvfD6G3rYYZvY8sFoE5U6WTDxiNWMYwDExSZ43fUNxEwXJiKkXvJ3exCKx5SirRJ1HZiBLn",
  "key8": "tPaCxGAmqdCYTPjhBpAaREoLi4kQwk5K1mcvYeaC9KiWfJJEAnU31G6aiihe1XJsfRhk5rxB1bqHh5tgUrHTznG",
  "key9": "xVC84jevzFBk4ptEBnNwg94KHF15ZSbiQugkbACadJL458h2LneD5UAd95UPB2Ws4b974Hb4aioVWYk8WicKbPp",
  "key10": "2ipPvtgCGnM5uUMP2wfxVJptstqF359MvubFe49VKPEjt9cQGUUPPQs1JNnFwwEYZLN2zTn6C4WBP7VCb5Hw6FvN",
  "key11": "5anCcnJWgu9uUYHdB2CLuGuT6He1rrzzEx1L7LrY8YppnMWtUhYbprebivgdfBbhveV2bJyUE3Wvo4itpSJzV13X",
  "key12": "3Z4fwDtx9bAT5vHzCmxC44ZryMvs8J5fLLCZmtNo81w2oNg4WVMLEYMLFVesM5USS3Agw99qrLx5Z5YjvAc5oNGq",
  "key13": "4Y8Biqar329DYeWeSPU1zmcTpKmtMgyPHU1fbA2qhKK1nUovp22k52D1nGDu56k9iMz6hpEbzb2JSRf2rF3Qif9P",
  "key14": "5GkysQPnzhMTK9M7iNDMoy8EyhfQ1iSASAvcupAryugLKNN5H65V9muN66SeASxYKA2qZr69B4DJVevzn4npmMZv",
  "key15": "3czFy2pF6F7zomZ8Yjsv8XTmCELtBco4bwCeHLrLyJ526EYJuZ5mbSzTiAv6BSaWANuDaQFskQYWerekonV4xKoj",
  "key16": "2riV5JDzugsaRMAVi2xFYpSBPomE9Uf4Dmi5stwNKZnjUBtogvyEZ9DrgU9Y6NuomE9CHtzAKFSFrNM1GzoCz8AQ",
  "key17": "3MmF723DDmQvuk5kUqNXzuS6bFg63qA8sCoViCdLpNCNU3CF8Ek8qbmXxcukdHBMA1KN5d4k74dnzByeaja9XxKa",
  "key18": "5Btzi8fAqeNudSucLByfbUeUSsD4ACxPRToq62pp7vQCWXSiros3jswNFerxU7GnQSSmhVc2gJeA4txJBMRWz8xX",
  "key19": "2xHc1xo25qKyPa3AoovKtyHo1vD4iVVfUVStGFKbnwrXbjPt7EQ91NhXc6gSJozCf2Lg9m8SBtUgFyhMmbJYAdnX",
  "key20": "3QFAoaitnRkFoLiPMX2XwSohFzzxZ3XBgv63CJsmf68Mby2XK8umSLdbkoZQjqeaME6SAiAcFgRRGR4Rnfteq3Hj",
  "key21": "5va4A6HC4SHHML6eoVe1p7QULczpnX71mM1o2WqANp2QHdGnquERDwEqp2kNS1JemWFKXjYRaJ7Rz4b4HDdGtM3N",
  "key22": "3ysH1qDF6U17eB26U1VKJtYisrohfS1ZQH6P8xAg91KenW2mECohi7FUwSYKwxKXVyigubT2zBwomzEBG28kwEAk",
  "key23": "59GyT36L77QWNVHZjtnpFkPohFTMWqFkUVuAywuwbHsXeTRCYPbS7nGzZDBWgv41QLdytuSMJRuzzd1SwagNZuxh",
  "key24": "379iA3BeTGUUdpzRChc2L1LAWQBEXfccc5sEJfh5XNE46LJVKSFmnQ29i6K3W8wqZ3td39m4ihrm8DZFwWDKfc6e",
  "key25": "4n1CXwUNoZWkGt4C8X7fWTXegZfxu1wmZdwUGpgQxS7BqHJhPzf3eAihTNb2NCw59A8PnkyVyTPr4gx8eaaREZXV",
  "key26": "T7ghCesddDmZSyfEYinzBGWxx8tP4qMm5fodAairdbSWx6kTLMRLRaNZK2EFwqr1cLeRHEcLLZ9dhYivdocbLKe",
  "key27": "3yhtrupSFHr5rjCzTucTV3pbNoNPvtGzCrfNkCtqitpXzNQybDhZ4B9GoUTnfz1bjEv9YjUdFYhVdy4TgYjtzba6",
  "key28": "27Q3m9y3P5VCojyp2Fy3A3XJxAc2h43QK2KWbE3d7uy45npJbn844dcxeSjTfDTNSeJvqt6tpEXg5bmGCuGZUwcp",
  "key29": "KWGE2tziz9hBueZPtkpRxLm9fEWTGHqbXt1bQvTY9HtSrwHtyB1xpPgYuJk2AUymoabEqJ3ixMBxhXG5H14XTPE",
  "key30": "52AwshGXkshWvcpq6J5Nj8FhdvPPt9AMWepXo1HgVCo5MZJR2oUVFepnxG3DDJcnyWadSxVVHZyeRoprNJ9zeZYf",
  "key31": "5WWQzWkDaovQJspDiLPtwpAiydmH1aZCzWznT4MtMe23fnmhEMQBUHcormsvvoB3SAbnFasjhpK2HHTBUr22jLx1",
  "key32": "7DqymrTFkDW1RVqgzx79bVZiLfj8NgNqkzxndF7LF6DrsGRcWt2sHHrGXu3Bqke945qvEWzF44FCYc2k6718DtH",
  "key33": "3VqtCgeuhJa6xhZbKYfz2L82wk2T6ccBMttRkpED3ZGxFnY8DPuzby453T1FqQNrGL66edVi7EEaLQXULUbM6r2u",
  "key34": "5gfe29UHbAT7RuUGJDSYU74pyHkpaaW1WWrsRJ19rQRBYyxX2mx4U4p4LTQ134PueaSuoExCBHNkD9A8wUyFfF2Z",
  "key35": "46mb388JEGfDQnbQzVeWNzSrW97svoV8YPbM7Yqwh7fqxf1imAJWgzkkP1q17FmiwgDeBoRPDYcJqaj2ZmAQq8Y5",
  "key36": "3Q9EWcVtQEcJxfbWSdHNvdJKSjYKA8Z1ouAKoAGH3YVB4jWrzXSXH4DRcRbRAyL8eSwHEkPUHS3pcHcoe5miKxvt",
  "key37": "36AhpzHkCnzc3ZC9Lr9HiR7H4E9pbyRRXYxg5vjNBa1xtA4oj6v3inKBNsLTDye5j9REq44EsqD8E8KYYDT1kdkE",
  "key38": "61CeKDgEBz1csCLKjKiC1UQ9mPao5QHSL5NiCVhd4RkZz4uuoRuiHJcwXR81LBJGTHbYAbMffA7WMwvzeAgfwUkF",
  "key39": "gw19LTKFocomzzN8gDn9E9gCybkBPh4qHGcLfMxTFmn1jPjxvYpaUxkx289UihvB3EzTz1iHsyJGSprko89X1V1",
  "key40": "2X7yMR6Jwdy3JPNXTYtoWu5c2jyVCsjDnzi7ibi6MntDi9cNVVSgWJtgCAjjaZ6JreTBtq8F9PYdG5tKo74RRyAd",
  "key41": "eddW5ZHqDkUNFzXbCqdh4YxjCizzTWFuR2HiwSYFJFdeRkKr3ZvxKvi4DGEgorEk9PQxB3jcm6SrMAY6ecs2ALf",
  "key42": "5xYGf4xQwiiXA7WyTfR7PebGHSYphJ9XKVH25M85QGHZZEcMZyaZ8T5tqULjFnknoHebrMeQs7MTEpKtHXo7e4hN",
  "key43": "2fM6bFgyNSpPfrbh11DG8GR36p3Kk5RWUqg2H2HvV8cc7RjXtkn24PofYmoshBxC3dkUMa2E5VodMhHa54cqeCdu"
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
