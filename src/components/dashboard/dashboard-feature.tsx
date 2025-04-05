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
    "3G8zgxzTfgSBHS83Rv3GpT62sNdAcgZnWZKdtMRoLJgcAAA1WcSbwaoGYb1cK9jqKPFzyZqqyNt4SvRErH35GH9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dq3RUbMHb9MgcoRLo25GJ2ZvEXVSqCWyoiNWVAonqsAtDrSnckbcuQmrXCfyUi3PA7dfayY3t67n47hQKTvhGtQ",
  "key1": "4S3hV43sVPE6KEMfP8mgcWVphzmQdWLpPLE9SbLf5vb8bTtHbgJ9DW8StPzounL1EQj8iCb6isfSVbuoHwC3oftP",
  "key2": "5Cav519ALbVJnjUUYi1TnwEnoUKHY7oxisXBPLNyjpWQhLVXSRi7LNBaAdWEFtM9NiFKhoBzM7zxZCzNjrs5gbju",
  "key3": "3AheuoTouAcAXSF5SSKKn7dB6fek8rpBUnR9FXtSrwgwjVNf94DX9oXvZEwznMq6xH7LmxJSA55547KN9czJWq93",
  "key4": "BJuH5ozZprXVcCEBNDDTMsDz41qk2VNuNeYN14W6zg2KGqYNanDErEfs1bzFEyGShUBnJ1UUzGNRXsqZ4ee1n3e",
  "key5": "2wVBbY6DshoUjsCF94w4iF7qiv26CXovPdJ7Q6zLmhgcpTM9SKDR7HTTTBctNoEWFVQDmrfuAPwVNRCDxL6Mcjy",
  "key6": "421AMVeSVPRvNDsiAQqHvwiGZFMircSwM8aV38Wf9eji9DqYJgDFhbLTyJRYBu9r9fqLEUCEFmBZygwcew9Bdxe5",
  "key7": "5aEAJgaVaf3H5TcyJvJVhAcRiymdy9EX77qPqGPhG68NKzbjXYAq6SU9GBD8LUZYdqzjG4MVFeDrk1tiwnJNY7Yy",
  "key8": "2a7x7BVRcnTUxS1obHHKpxdW8viuMh3syaB7XtzktdyvcvCvTCE372sHL8JTXct6XsCiXKXsTzF9KUrNMxno6W5y",
  "key9": "51ShzH4gUNZTL4H8ouXCVUCjrzejHRY3inp7xsCfUHPrWdruLTtfSMUvXgJZYhGxPiTgdS411E6S9pxFHU6SuULF",
  "key10": "5eCTeW2mdyXb13djJBLpAzDLenKMYhok9P8sxEyvPkP4gwKhunx1Sn4GScFnCHwf6LomyDR52wy9yRzXRfs6ZbeD",
  "key11": "2DcvovD7LEC4APBr3hHKy7AYdfNpULhfGhTHMPLFeGeRvtwwNZahSbBqGCy8c1tHoCrANE7L8CRYzRmpvtJLt19h",
  "key12": "4rmqm7B5F64oCPRygo6mit1cF6a6LJptvzMC1mRxfwqfGLLr1TyxK2jtUGLNCXVG49VgLLj8ZAqndzU1ifFKjL7j",
  "key13": "5KpeotX3hCJrSCAt7xwyXXxodUfVSSYPWCpbhRamjLuJtHJCXx7PKNKov5UZSezwYfUqyMAecHJMg6ZhLzK6Hpyj",
  "key14": "3AdiUkom4PjGh62wtuYhovBYcLsRSDmTAEotRa1EiAHaBErWWuTckngouuCWZweHCeBmsQgBUPVwyUPWixxA1ZLc",
  "key15": "5o9AjTPcsdiEq3XC5NWfTFtQvghZ8aSHPQmRV1V7qaNRN1gFQ4TBwVEH5xm1qw1wYN5LB1QSHatmUVUs4mmiKYVV",
  "key16": "2jNxt7sRibKz6cgGUWaPWLXKQt29F7vUrnaXepqFTtXSU3GscLbCeek8WzwuHff7a5vSoRiQWbxeiN9upAqhprNa",
  "key17": "5kL2D9e2Ft5HfSxRLneLxfLbcBoCjLZspLLjWPQiBsjdpbbJVYnFVgxT9SZpQ4ccXZPYckGtURXzq49yfMWWFGu1",
  "key18": "3t1XauBvpPfvZmvmZNitskbJanngRvwyGiEzAQTgCPjDJWb1wmWR5QWbKn6tigQ1fScUU6ZTd3J5cAre3yifPfR5",
  "key19": "4V1sw71jQw5wCsHC9RmnRbzMH7X83fWefxT4DuwhhrdNWJsHKpaCeAKGZKXf7V1Tow5FNaCwNADetmbm4YUgV8Bv",
  "key20": "5m8GVZDYFFma1DoZvCxgovjqkkm4iWC5jFCcidcq12YSkmrR33h6NtqFju6pnvRqbCzdtpqWFwnpReC2vy8ea6BR",
  "key21": "QxRAX7XUNt3oAojQkLJK3s1ygH4wXfZoNEdSaipv4csLrTzoxns9qg4mL2AFUnRwuQMmVU5tFgsjA7vYy9zeRW8",
  "key22": "3C16b3HmA3BSp8ycuYAFZYL2HswLWgJxRvwkvabV3XgNNH8UoPyPQ89AjvqPzteCS2CMos6KFEXzEUZLxLFa4a9d",
  "key23": "MPWUB3CQjF3dQ7fjoHXxZoJxMxoRn65fcAhb9YbPVGtdym8cT2pikSjP8KXK9Sb5pCcgjvjVvEKy5UP1qxuKZFf",
  "key24": "5CRkxqQycqwNtPn3wpWNyBUtog5X8v2ZUJH9soUQnowVUqgBU3HQ7jGvVyAmBvvriL85YQiAjLkyWbj2fFiyLgUB",
  "key25": "28Gq7Xci9f76Y5UxVVxmkCBVAtiRDzjB5HT4jTGgWHDHeQMN7VcjBr3hzCC6XbEHB4VAqWzMX425GpPdFP6VL5dv",
  "key26": "3ZoMW3v9owLScdGqkSrWj2GLMPZPEGDak5VkbNnE779wfN8y1qVAVo5WgvCuiG8s3U57LqjMqsKfRr1LoL9invPP",
  "key27": "8mXyquSQ3JHdZ3t28iksNQW3ESoWjzydpPMjwwaUx58iQtiLb461sSbv6Gfh9JXxrBzpui4JGjgTS6gDHVea2C3",
  "key28": "67DGod9Wm5gADjqPVuscWJ6rofimh8kwCAq6bTfjc49voGh8eSTiJ77c8RgAHL4fUw6QDLBDNYdwbpzC9w56BoEG",
  "key29": "2q1uTincV7Wn7fFy7ZdzT6k4qAxrZ8QhYr1Z3vWaPELyyDV9vJYGASQwwu1YGaXJZf4fSwTo15kRhfQdBvUTyVCK",
  "key30": "2n4JSiZMd9sMzDvvXXm9dJvJZ7yHnLvEQuBtqpFrBR5pusjx7r6WsNTveXS5X3rCAaZAVyB9dBKqAneGC3iNY1xC",
  "key31": "4wFHBJsi13Mpavo4vJbCwv7nDDh88TLRKZ9JtCqtcKgWCmMmHRCaoKq9kp7Vn8AJQUPqCT5Ji4swczc9aut4REUC",
  "key32": "3jXPXbtuF3jD9zp5F79wR4DV4EXHqHkZf8FU7KRLKzUvBjmbnQZvQxJBoktAP3hgK7LaskA4ccFdTewGzjiVNwY1",
  "key33": "3BxFbZQahUgQhAaDgu3YpnQJ2KphNdsUPtqwEVdmSEN8TzDDbzioN4t9D1CkndsNACsALi1YkgJhktqcPkZ3nAdn",
  "key34": "4pTF6M8Nci3AEG7TGCqSMkD8pk443DA4buoPZVMT14UGzyDyQqFzUwmXork8EbzVPE4PM1xqUNhnyaCTnLUFt5gu"
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
