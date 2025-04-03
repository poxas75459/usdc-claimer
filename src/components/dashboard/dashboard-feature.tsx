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
    "3RcAJDRkAhHf5UpnV94vSQg26yMX5acREhDKRsiJHKGBoFEZ6BHT2TUGSh7HHFLxNCyyNnG6AZGEmDQwXQwuC5vM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ebsWSDzgFKM8qVsJSK29cM8tWamxt86uHFZsZqZieVRajWQdZM2Jxui6G21zQdW2AiuhZTKCzCzk2NpDXYw31fF",
  "key1": "b9YeKw3LAHfEctPhsLdjQf5kFh4np2ivUSR4vy7Fq4i6RTXStoPa3DKxrc7P1mWv6tpbUfLHG1ZnawAtULiNR54",
  "key2": "5MfoK9QDd57y57UafVJnBU6YusKfCheX7iH6B83aR884akZNy1dG2xSFjgo7MEnBN3dp9sePgZr19pei6v9pPSn8",
  "key3": "3SwGr3DpnamiUgVHRY9WtaCenVFtTKpyApA6VxQzDtjDRfigUznBx6vAnMLbMw2rkcTHPLxNNVdBbEyLp2orvfdp",
  "key4": "4PrjmqJkpqxbsHeB99xcFqst948DVBUpKehyQMiyE32oK2UDTuzxRdMsCSFVxXVTSkXnQZsshcZsB15hodXQrLXn",
  "key5": "59VeWus2y4kEf5pHn42qzN893aafNfdDK72n6g5bLUghMW8t5U67zB1iYNpcBcNv7fwPApurB2joEvPehvS7R182",
  "key6": "5SyAg7Wv1Ue69pLHGr5xiBvh5rkrFW69TXS4QAgsXMskHcgAQVrP95iaAJ2YTq2ZACyKGBSVsTTvJCGshTzW6gnL",
  "key7": "4JVBotFUmkReSGghest2yJLf1ds3Ex3jCW57XA1BryEAooXs3KqU99ngDRUkX4wgsatjoa4q7KzH6FGCy1igFk2y",
  "key8": "5HEf2Qhqkth4CazmX29wCy5EST95FvYtjKLFdUJdcTAzzMgsBuM2GZEhi6wyaEBqAyhgSzjqYEXWqf2gBxucPDUK",
  "key9": "4FjAbvrjGKVbFhstn3oDmLoZGeGHdSytoFVqnKaeuXQczu6kT4TyxG77oXq383oML9ev4TVdNeUBhB5Jt3pSRkib",
  "key10": "5yJcvcJzrjQSnSMkrzEwAiwHdyMBpPcVAqEBrVrfppoHXLC5LEoSR8HY5ePk1EN9XQPx5biToFmZpsZEGxUFah4v",
  "key11": "3T1pstAeiwJsY4ZUb3zUajGywgJz9egkpJSnskLFEyjgzbrQcsLDfv7sHB5pGaCwyN7E833xZQo9sJsxaNHc4g7f",
  "key12": "VEdJKmTvCpdkCYLeQaHLhvbF9yBff3KCrEQt4H7ZpwDpXiF7uNk4erjV6BMDkbpKQaZ26eNKTEvJHPrG8S3YA1d",
  "key13": "3XvU93Y36wovQErDVkfHD3tx8FLKZTugZQj753j18TQsrymAaiL8ETrxW8cfPAG5LGhYqKQoYqRWJwYf38CZMFas",
  "key14": "2wUCZc5zCv4GeiD8Su44kXkbGvWPucYGmntbV1MtLqwk3gDw7GoBtBeYJ1xLAXKeSxMNg1JyAQipncJixvNxmgAw",
  "key15": "4KamvecCoFsPgcaC8YgKKf9pGmXKkxPFoqHQVakpK22qaWPWuZHSbfeH71f8PyPR23eDrYa8t8dHGRzzm2TnZD7D",
  "key16": "4LmNF9dgP49rt8ZgwhsXTJ6Vx4kM3XrDVFfurnNE2mhJTzxcas7uTHSYz7h7H9842i7SahMwQR3H5quNydT9aoaL",
  "key17": "R8UomgjmwyGJ96qkYRm479reszHatxR5knzSjnRL2yPx9Xj26YFYt154tuFsdqkQS417TdgP7RktTSB6mbXZYgh",
  "key18": "2fkK12anKHZQWXYovdeC3P24fSE6f34qSNFhg1myEgUvH2x8CRraifYWFb7LRAmShz75BPUVKMW5KNvBZJ9xya1e",
  "key19": "xnPSBGRP1hKAEkyqQb93uFb2BRtHD4VfcvktepVLCaRTkvgh9eZ5bfvXGjuid6FqznbCPUPK443hoj8rkzDSgbs",
  "key20": "4cBEerU5HFUv2bBFoEokggYuYf2RvqK5tyD6CZbDsT9zTQEK26wcocv9bUVr3WnPvKx31FKvUK4feb8pWXeBnWm",
  "key21": "5E33qkK3Ua4Gur3wYxYip8E6UGe7p4mVP85JSkZF4pf8yVXCAviFNeQtfCN1LsMkUA8MEAGSgzPUKUrQCGWVF9vv",
  "key22": "5hiSFJCvZTHSs84KPFdXrRVC9rZsjXM8C5NKDZBTWsUeL5bC6Y4UqY3Q31oEKomVnxRrtZEZLoGD9TgKxLedYnka",
  "key23": "pgVNzDFgjqbdXfty27RiQpJdGkiWtNw9CXNVF2ozcxsMxFwEM3j6KDzos77pYxVZ921w9uoeAhAH4t9gvxWfBAp",
  "key24": "3P4BHW3NQP7v2GigziypLCdCec77TsDkuz1gZoCyCbLEHVYTs6ijBvQFwm1Ccb8gaBN5UB1uJzYmRfUrYm95Ychp",
  "key25": "3vhChaV7C45CXUxGxruGcKitb2Hh5e5YWimDGS14TqzW5TmPRs7pa1oUSUVMFRC9yfhD6ebrRK9H1JJWMynnYgfT",
  "key26": "4JkWDFdqCbecYn688Mm4C4aYLhz8JQbYQEHArrwnno3ywi75iUUmquhrPJL7TY8qMb7JbZAQ1WrVYBzP9GQkoUQk",
  "key27": "3VJR5sjQnRP5FD2None3XRTFoVPP3gzCC5c9RzpBn9YDCX5TsKCvfu36ndXFfAAzYFqhA6ja9q3oGqVevD7twC7c",
  "key28": "26JQQNcZFWGwbNt2kY9h17cCaMkUyaBSud46HPBJWi33vXmqj9RtxHwzbAvKXnwKeXrpGD5kQ6U4Pop8Lpc1YQJD",
  "key29": "nuodBcDwz8LV2w9zircknnV67gi3xBq3RQJrX1DwSW9F8gMw2mTdQUNgKsDL7kxfSBpnfz51HqaUYWVrotFq7zY",
  "key30": "4XTeb77Q4ZJsRQ73v8qqhogSiMVqNSvk28ayhD26WH75ahN7agSwbpFXD8BWVk9p6a9ttdJurRBqtnSAndrj2TF5",
  "key31": "3wH3zGDbYutn7HtKDdt9TtiFqcmWjxnVkC8bUQ6AyuoLuufX5cxiRzPVK6NZJrcxNhSTqaTcBBspoaTo8L3WqzWL",
  "key32": "3NM5MW5LhrPCBoxsgod2vkqyQcZYburHeLpjyyNvhftEXPh18xrvDL7euCoCy4P1wSUay2oMErs9wAU6B1XtJt4J",
  "key33": "3oWtLLxt4vTU5m35gwg5vDGDDJWJmHTyV7tsu9iuownjCnHZ8NaB8XWAyYHBSr28oWpgTXG5cLwbS5c4Cz4YLBkS",
  "key34": "597fCAKee4BDtPMPoHxkoKobp26FuPM1oonjHX3ZjgXpX4SnTYMNbqT89KAjvAFaYYqobaurW8xkxaTzUVSkbMy9",
  "key35": "4DKVaiuTLzGcNZNo5ndtTi7NzJDsY9xt8EfqqfFketxeq7cqEB8iWrzjKgoZvdTCU8AfGcSZXgqhSQZTDWpWc31i",
  "key36": "4mtoSamNvPFVuK5frnAKiCkK2NRRQyi96sGE66Hzze7d2HnCMQGuuTcdVb8CVnmf3RzhHz7qLZ7CqQfo9szD5nwd",
  "key37": "2bufooJCBkbJiZ4YZZNrbJTCSadR5F2UkS9moRfSZMtUk3PBN9uWtq5L9TWQDNHm7RYwJvq3ZoTgzg6oodWWW9Wz",
  "key38": "4FyWiEm76LcLZ5An6yzufbp78SaENnrBE4LDTKUdM64srMbKpPjy2ozKjgZrPXB753dCtrsgxfNVLrv71rj8iGYw",
  "key39": "3bRYcNXqkuUsZiHnMJcpQBPPEHeWHjRQcAD57VpvubZzphnn724Y28kjLUFissDicJKNx8Jv4iQZTWKc3krUX5rB",
  "key40": "57kdfE2rC9JA6W7czUZ529ZXYyftVUAzhsiHierKNNxmJEr6z8S8GzUVtveNg5aTNvvbMuurFnxz4a8xx9aKoisg",
  "key41": "2WbGm5uujMEFsStmxyipsBdX5RvfZEwoTTEzLnBAreR8w4ovCroxLUdvesU6eSTNzYAw7kbDC6QRRAS6VoX6S8kn",
  "key42": "4Q92Ft64mSuV4L4uYFW9LrYjt4oj4Tso8dpnWYkqLr1R1Li8psnWogQMfUjkQGhKCrQKFmjUk7fBiV5XuVczwkAr",
  "key43": "3kHaTe3Grj4Wpdq5rBbUq6YWNKRfHy2yrAVQ7kVkUZHLt6ACDXkcuVkbDQGYaMJPMa7SgnfrFjx6MBTtLRPSySS2",
  "key44": "2E4kKLHhWce86W2pah8LZbe2AYMrQ1Kga7bxpf9i8ShaHGDhAU3M1uWZoHADgPGBzvtzpXvyfZkfbu19ZuCxYLGn",
  "key45": "48GHpLKW83GkZuoASEwECs7hBJqqR5kDbCmJGFbFRjS6FGUqhRAFaH8wbkfToJ5XDHKbY932XjaXswmTkgHkYfsP",
  "key46": "4nUNNEibpL4WR4K4Gy4ZmuWXGXTwwh5NHbJeTucp63JJ2t5V5JfZL8uEZFBycGpaEKxcUQhU1fiRh2gXPVYRX8j8",
  "key47": "4N2RCjLsaan7k7AVVAyrnWEBXVZvumhGubLm4MpeYFZT1Rr9qsqE8hkty4MNFKsDY99XCHbLbrxZs6JdbtJEAmd4"
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
