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
    "8r9LRkaKjK8Rkryz4XYMWPguXmRY3Txw1W6TQGNEvNGywYUw4cyVN3uZpJAxswZTUrrMXYCEqedT2a9qrrXSSCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bo3rWPkz1zx1syjjfLVGnRAwAkzzuhRtov11r3ASLugt6SBucsSYFKv83LGupfeMj4U8fcNx6Vais83JEnbT2hS",
  "key1": "51Zwm3RVxGt2YTcg6otzhFrhzePSE2gzhnQZHJHTvEDB2h1x5B3QeNZFeBfxedJFw5iJwud9RLzjJ29AHqD4sYYx",
  "key2": "4p3KiLadoKmm6jcVwZytvYbZJU56CwSfS5qBTeGYwaeDvbxMhtejEchpBzT9RVbT4Z3tsq9iBcGyEZm7HhtgbMit",
  "key3": "5mDPYZujWxyUpNiwjwL1iEDVYYq3NnPQnB1a9mPch9qujeVWmSfdMLC24MD3vn3uKZFiJVFjdHqMgzhCiTu9XCws",
  "key4": "5xuEevrfhqpeLuvYNocjMGJGhS8Zhm1UnPEcbQJSBNpNAUubVERMhAFzsbVmeXyVYxf8uJpgdSAFFnsP8uQdKGtA",
  "key5": "DTmnUNt1dSYDPq6zANXMuTFMDzAjF5aaXKNC8m3xpsURMCepBUa6RJXehvYghX62oxbKZiwkj7utr2r5dEu9N8G",
  "key6": "5QcjeYpcmDJFLXkdkAz3Nr7mQaEiP9dDak9isSQHTordXW8AXFgneaULKk5WPF7FQQpEGCqFopjCBpQWcW8VJUq8",
  "key7": "5enbjjBH6tuqQZGpezGEuTNNLyj9zpiJVvzjaYXy55zWrMKuvwgo8TUqdnomFgxoBM4wWgY9VEjcR89bJ2yRDT8C",
  "key8": "5zhxumXuVxtJSxXqUscDBWGGk2t9jjEoRQ5duzcwJsogCR9zDYL1Kqyu74PukxVae7vuJw94CYyMh2waM83KZUaW",
  "key9": "3AWsnxxWk12sYyeJwAEeyqAM4Wn8izGMLxiKjUJt2tsxg3sRUtYTEqDm4qkkcntsQhGKo7F79A4HKwQwAnczoEdc",
  "key10": "5ouDEPjqUXVc6rBi9VksUTYp5nw88VAaz4AgxxdSTQqBrwnsTbQCJk48baMUKmHRuLVKeLe846gHvHoztSvvFgE9",
  "key11": "oqPiof39zJXR3crBSxN3sepGa8r1jZqrpTttGFb2adf8TQ84Y7kSMLm6QEKfraQKtFRJ6tddnfuc6JsH8rkx4Ms",
  "key12": "6nis7h9mLA9ScxX6ePYtNUZ69QcmEthQJ9jAR2mizzr2YH58Z2CuUwmJ4Egmo2adHzBskQSBXsR3uzG5FVnJvmj",
  "key13": "3bvFcaCeZYzuAQGHSuCqBRSeLfW78qiDUBtoqv6tYemcLki7ZL3bRAYYcxP4NVedXjqYxeyHP3QiSgmQraEtmu2o",
  "key14": "4kqaHinmYTYTZ9vsHg8FrnBs5Kh8AELZMMH1RnYZtBSpLZyUCaBR7UTHAK9StGEidX6PVAbWBziyxkQn2PiRcwwS",
  "key15": "3MzhAAwMdz4FgxerFWuHhKk81iHmyjfdij14UHSTkkv55X1UHLihkwQ5MmUjpnsoA8r8iPHabGSTM9cLcpRM5JvU",
  "key16": "5hqwqgAYAq6AdzZqE5BfKNpxqadka2h6SBKhJY2kQvtHbNc7JTeEiCpTNxi7wCH5LHXPigjANGrQh2QFrCo2Jc4A",
  "key17": "67qogEGjPP7dmMZGVMs6xFTxEGsCuYX9XQ7ro4JpvMVVg28UftsvQLH5T7yNKv8wUmuEwaFH3Z1hG6dWr58RHB33",
  "key18": "2DyYq5fQ8ZQh645vZCALYv44RR8q1Si5VyuYBRMRzMxysXPcMEfz28Hp6fdg1HxMDuJ9LL7jr48JRMVxs25hmMcD",
  "key19": "4rBgN7GDMTTsCTvx53PHMCRMDZdXJcc52oBe7PA3iDC43zWYhjJsK6hEioiq7tBT86aam3vR6eZ1T2c8ne3CbcC2",
  "key20": "46YynjfQ2pabr31zruQojEc9or15SJ3mUU9tJ7cqH11CaUDyZ7Fm2XqcUHtv5ZUGMegBwq1zr82QWskB3PiVToP5",
  "key21": "48HidHrRCGjk4QbxpQVDr7ZpLPDmmd8D1qwDqpFKTJ2WR9ndWmzd2ZFijTBtjn4QvhrtpEVEErqwvXgw1wb6ivMb",
  "key22": "4ot48ctr7KBfRXeWgZc9VxxV3of9TayMvdNiTEywSzT2uWXPeUcCMwywnBsi6StPxqf6KC6jeD5ZZnWYDpDzs3nA",
  "key23": "67rg4CWvoHLn4m8siMuF1pmETSSpkQAwbM1wJrrUKMUCnfwqUMdSk9mj9zzJHavF7nvbovgs4RoJimV6vMnwWUkt",
  "key24": "3PSGvj5cYWLPTbQQYUkTtJpdG2CuGaL2Cb7e4gFmQDNosZM9UbUJpbGD1tFJEaUwLaXretL6bcNtgAnMpmZWeJLJ",
  "key25": "cbKJFZHuaqzDaiSZLs5Da1H1hXfHjWADq6ce7LLGejKfxJv5kL8Kq5tdwyVWEemZVZHkMakJD1cdFiUxwFHqKyZ",
  "key26": "3wA3FFznFz2KQ9qHCUrX8YJePLmA65TnbV7M2FtsXMNN4dQit4R9vFEr7EtMnpgygG5Xxsc4LTxwYTWa3AfYt25M",
  "key27": "2pftvPhf9CsrUnXgB4Jr8pnW16LfNqRdzT4knA9mdTSEraJSmS2KhsnMqK4azaDgtbkLaoiCfXXaGparoikDfWUP",
  "key28": "4Tfy7mHePiZmvDKLRmYcNNrhaV6Y8oMfPMz2EQbhVs4SeD4sA2fioG2qnsjYvmPKHNKtm3ySMsLH3UYyGE5T2rnP",
  "key29": "4QzUGgM86ALcZxvStXxzRoPDM3eftSG7dnjsFNxXhCvhTzfwUR3rEVWApGvp4SD76FeGqtU2t9ThGNp9rNLutxqC",
  "key30": "3maoLBRrxSorzvLV2TkE8vxnQAsUVPrfkfNEP2yEHKj1VzvpX1ueJTtPJY8AMLxDwJHmRawKzTerTbkVpDjXXVg2",
  "key31": "2K234T5GDKQRDmN7GGi9sdtBgXPofZBz4ZekVRTDDmd7sFnHMGzhqnhEqKX2NC3C2tEDx2tqjGeELqnG3AGjghEQ",
  "key32": "3Q5ntrfdqtp1H3HYDdEZNTXPQi43SB2gQTzvprn9Cz6nDnE2qBvEnNMCq9Suhx991QGEoktGvvgE37zdJNah8Nfv",
  "key33": "3xRNDzueMoeU17ff8RD1se1XwkjSeg7WSc69aW9B8cKNEXSeFEGFauG6NceuKaC818MWs35kHjr1PWq6jd59fAGN",
  "key34": "3EwQwUp2NaDwpa43KB35qhtJrmcN7qriHwaW8J61wyCg7GKDFKxfkoGGzdrccw2z3BweKDNJFjRjXkQjyaB2Ww6V",
  "key35": "2ZEeRRfeNZoEXnzuQQXYeyK5AZgjX9EcMwZVVXUqo1W7G6yE1g9PVFTB1CRijkLHLwtVYK471aGzi6bbBa1juzBu",
  "key36": "5FKamQFNrxizBnxZZzqz97bhAsu5jeeWw454LMxsHVYUxPz3VTGfaL9zkeShnT3TsXjfEG5h55ASR2RNFa3qoeCj",
  "key37": "4vr4u8XQHsFdNYgtAoZ4vHS6Lp8qZBdvB2CuafSqMFnhdD5RCMxSH6gAZSDd3r45ACQPeqYxPJ6Db5sC3LZ4m2m",
  "key38": "4bmPvqJoDXJrnCFYRTCjtFhFDw9e8RvfxMBvatTp3f2T1hWT8U2KL3kQZidbqtZp1s9CQkZMTuTDfQhpGqJ8qbN8",
  "key39": "2zeR1BTtpyXtHv6MjjmArqo4B1LhUSDvBWepN78EfRu9kSftka8SS3CrTjD1ZmpZ8ZitB1arv4jn9TCUjrKbDzsa",
  "key40": "2yH9LTS419z87txAAWYEdjwaUFCxXCo7xDTbeZA4EPXaBaBKEwDeRimDNs8n1ApGCbXtY5G1FQfpXnSdaoyRfYaw",
  "key41": "3BUSzdXX1JG6NFY8bEjdd3qnNTzBjQFYEiD42CwP252KnUDGSmkZCUJHyMnjA3s8wBcNBwth2JDzNBgtF2S49e8w",
  "key42": "26CYcE5jQ8tFGkaBMu5pnQ27Wfwb3gKwJhevxAa54vgC1MEQkjLpsCkAXSHUzYV4ZnkE6T5Fi8dvDayGxzNGhYYS",
  "key43": "2VsGDLP2Ra8RdX5TczCju1ijPXkiYJfNn7i9ek3BJvJfQqaiAuDek8qsUQNdzHzrSia4pop7cSTLxNgZszMXFesz",
  "key44": "6468cZz1hkPDfZuXb4uBsbYS8aMTJ1JQmrEtRLJgGxVJhXBnJChCEdMSZZrRDGHucQ4MCCu4TCWJXd8wHPN3SXNC",
  "key45": "3rFfJLoSajn26n4vq18TbY1257pkyZ4iMQ6ET1GP6225EEn93aV4y8vLzAACVRyL3mnwZvMzFAAKi26UFUanRAH",
  "key46": "5f8VYD3doSPhiXiBdTDKdzTMe8ey8k4kQiLspSpjqy5RkBcLovhTBidT1pDTuHiH5D6rfnbxF7tsRoZEafs39GwN",
  "key47": "2dbMFopHzrZ9XDdsk2gvVKjcmCyszKSLEC799qBNjMUiSBXP6NmkWUGjsksJhcLC8cGkXgaYJfhzHrRr1Es4rpWS"
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
