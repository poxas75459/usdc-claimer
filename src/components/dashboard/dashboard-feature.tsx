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
    "3iVyivgBtYAx2oBokDduzthQzoeEhAiipjfd291KfqE3S4oKcsqVT1jkXd9yghaoK1GvsPQudELpm1NuQATmD2M8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ssqNPEqa5qFG8F3KjBoetjpgQRfrc2L1f4Uknz8e1B3zmiDnHQKDUF4t8LZaRjBH4j7Ezbx5yBWhQfKwF7oVSZZ",
  "key1": "4rqiKC1MRcsCpGgaHgnBFQNgBWBJgwvjZypuoQcZpyt3xMQhRfrR5zKqAswzoxzBdWDCDxrbwjE7J71Xmr7nU1W2",
  "key2": "UiUyyzNWGz1SF8oaGKeNqCTPJenLPFGkJHkUtAqr8Zes5jHqELZyVx5UZ4R59ZS46TtPok7VVEZpbvAh7tLM1f3",
  "key3": "4DsRitEvLED2NDX2uG4HwgHVPwAHojTdrqyPjBNpRwRdYBbnt9n3bfpJQuVUep13R9o53cTwsuwLzBc66Fby5U1E",
  "key4": "3DXH3rkQBN4ZVAaoxgXEeuAyv8QvhsahNQmu6YNTiSBcvFcQgM7U4eLyqnUwEeR8gxbL1GRoZTqKG3Rdd6eHnE6q",
  "key5": "4iVYDVcrTAJreAEfKRCxkXRVvf5Qb1j28WMRW9Y5oktCK5mAJaRqRQR6JiobWNK4ag1sNqxR78he3CsrEKm4L8ew",
  "key6": "4wkqRZvk9nNiVz1r3SbkvHWmZEdhGNrFX85nQQKDfKWeGBzcKXBZcPMRhUuCkLTV3VzDErfYtBRBFRzZaxK6hJuD",
  "key7": "X17S6fjrribP7h41RXVZ6QUo24A4vxmVkJq7rvbvrwsqKW7JHuH7hJW2BqbBrsJKDRZgWJXrLbpY4n8ao7v6b9U",
  "key8": "3yRPSuBbyNeNSEx4qZPofQRfziNpRYYySf25cDXgZjdsHkWGoGBYxN1K4GxhUdH9eHsajCiVib8djXAZz72vcVro",
  "key9": "4oNLvBQSCoHmX44FoC1j1JMGQcUtwpBVr8HfG7yJJ5X248465in9CkUUwEqtfBQhdvvo1TimWWLpEce1RcgpaiQJ",
  "key10": "27qZ1Hfd3PivxQPLkngK3yqJS749SLqQj818X6g9ajyveWva5gaiN2P2a6qn9K2k6uzRvRhepMyoUbybZrzwNQJT",
  "key11": "5eTXcZaTPr21oKxwAQW1DfP94v4mDJbyryRDc8ymWmLNjqKPTMNxTyDx85iNdtf8sjZJCQs1jgr2VfRuFVUrLsft",
  "key12": "4DF6zT6eKDFAqiyCaGdHqxvetazkyc5WLasKBMghaFuTdG8uSkNMFvZKqYcWZS7AFpjj4Dech7FHzJTn9pTJ3F19",
  "key13": "5roPHWnpk8yZvmJ6x6ZGivgZzf2WP7oKSMsR9ext1oSJSwzAtqNFhK8qYrUMvVywypQJNFkxXoArFvFuxqHsHwuN",
  "key14": "3Kxr9NJJTtydXjfhjKrD3Rc3Qt8LebJJqrwJqJb3CKVxCPQTQjE1ZJjv3Np45CWadpKf5xTNALbiwnVQVxUAydJS",
  "key15": "4S9o7cmSpQYJJBkFmM7pvgZy5qpQz5dNofhPERQStqpSu6SRjwmRZzFUy2eBULjS2aCoof7vV1okCVPZG4hu6gEj",
  "key16": "567voovxDyfwHWNynbap9ZTY4DnWj783pDJ2xeXesp2ed12SMkCvtpQCZn7QBspFB26BYE4uwbnhdsatCzKp3Y7v",
  "key17": "7JBNbmsTqvXhdUTaP6Cx5qoSpvV869Pw7p6Wi1oGzrdhVFY1ExE4VXTUyEMmapJteBuTPEvgdaN8NNb4iRbtXW8",
  "key18": "3dQgNQiTqtPqq9HWCcCNKNx2pXVE4pDdvg25PwS9KDLr2gVVa1jGEgSkeu7yL6GjG1kUH9td4BL9QuuN5jEKXD1w",
  "key19": "3ZEUxdytSRiuYFxren5h5tKigzww6Tswng1BRHPJtWpc1VYf1Y7DLcxke7QYUJ8M5ws2vGG25xni5JgHP2esHHgn",
  "key20": "28CTKxYAEMJZS3n1DUSokVnNbsKVoHU2siCabcEEgZbafghBxMGFMzuL2Ad3qciFc9S9d5SjAmGN29qwz7DHn8WP",
  "key21": "4pjnCi5hG7FwKHa94qSm2YeQcKSB2o3A4M5KouiFbwQrKpXyd7Z24biN9yt1jtn4Wua4qb5fy6CvX8vthjoX83dG",
  "key22": "5feMXkfJhUn2boxVBvNxsjxhV9zQKNsrXaH2ExX7rbYPnccWondFshQjyaHjT9t5UKjaCZRaqANuitEvTmF8ZFrt",
  "key23": "5JT3cvDorQUtynkwbxcy3HquuqK6FedWjAavznvka6wAxqhfMztmfb7wrzm7S8m72YZy6j12BXrjWGaX9ZiErv5r",
  "key24": "2X18JmgWtpWyMpEzsAmmjuaAzfCZLZkewFxC1QFL8GXE5CMydwZ1kQMFZCso5b8p61VbQopPvJ18p3ocqRFTUgBU",
  "key25": "2MfKwpkJc81xgKT9gyctVCaUaraWjRjhrznv6nrTFguJzDzu89eLGgJNqHB1NPVAhbjZjw8w3HJr3YBUEjn1VUiL",
  "key26": "4Zq476nc1y87k1dH2QNSxwTPDashxg2MCgb4ihmx4HDfLLd7BaahZxps3vd1xmcyuARfoPDksH1a6x826bK8Zacr",
  "key27": "QLNTT3gJ4rEuGKtFi4imWhhYgipwBiKirw8mko7pKnNBw5ZiGq8FVtkvPuSUqsLAvtTR1Q2sGhr2FXECugHCecW",
  "key28": "p3uusyCD8b5iHyK9561rhZnsNXcJb63dGmQHxWLuyQxdFbLWPZvFTBqbRinBgFtGkw8mKy9ZJiuAX7LT9cjVMeR",
  "key29": "5UVFyX29GV87xRwEb4GQcf9HXc4RnY9asr2Rowijf4z6WHB7bnrt1kdatJ46B3uNWp582FUYyaTUHjfR63WSQopQ",
  "key30": "2uDD8wMCV3rJZin89bkwEmut9ejLWBcPmy17mz9zmDBj77FTS44S25JEkqsjmqofAPD4P2AHgXB6FPB58MzDe18L",
  "key31": "5uWJHjEFeEerp4CNRknfbpuKmfmeykYi6WEi2vXh7sYzfjveDQfFAAPLc1Cw3wQEEyjcsXherMV3xCitoi4QZPDC",
  "key32": "YeSWV3nD6NKeVvGFkVoPujDuFJKHR9wrwG1uU3ZAL4ZJdvmgtDmR8AQcaT4rrNK6cbmuifpdMNs5hfFDgfjAHtK",
  "key33": "2RknVgCqStn8uSWA6V7A6fMbfusae1fPwBMHEW7x4qjnbqaXktvrDffroffK89rfFXLE7boLtwhS1LSW9iQGc5sn",
  "key34": "68B7kF7dt5wkiYRYPWrCycRcaYe2AKSHVmqLvPjcXvMf3878JNPLyLg9XJ8s37UvFiz9CG9A4hb7FrYM5vTJwya",
  "key35": "SWsYbbMMugpvk4jWNrRyefPcJEWC8F1mAM22PUnmh6Bsh4w5NSGcP7e32HdAnr5cj8QFLt9dUQM9zQ7eEMitpKY",
  "key36": "4PDRdEwxCsA7x1uFYUUcbHbdaWU1jJrNcYRhLVikkgEga4jRMV1yDQYKoZ3BfuDkfDAZTFZ8qeKwHzrWHw1nXZsW",
  "key37": "4yeihH32xkyeUJeyM1RG3NgGJcrTQJjYGiyg3Ga5NkpG2q9hMH59UYWiQa4ur3XYNrybaacNQnPupdjma9EHojnL",
  "key38": "5ZkEtqMtQCx7PRkJ3gZ5NGgkxKGt8NPx4JLojycBdDQ87X5fp5vr4yeP83erqYXFU5fDshk9EGt5NdLtGxGsm9RQ",
  "key39": "3tKwkTWQ4dtwEi7fNG16P9PNd4qQz1Z4AW3PEJTapiA2BqCWfCMKry74rThqpCDKATUkB3hy6nKSqsnjm5rfmrRy",
  "key40": "FBJ6kyg3nnVhswU24P8Ke78hj37X9nGPYYWHGKppEynfs9mbWepQ3Tv8i4GF8wk27U1MYGwMcQGNV8AJmcuky5c",
  "key41": "2hkT7v2XvKC6NQguFKJnUC1mUzYTWXJCFQqz2ZdgFhYf3EKdYYgD2FN4ZHcRzi43SACWeNYPg1VZpWLXHJQBnLFr",
  "key42": "28BqgAieFBPRm4vbwusxSYboG73Y6QvXWWoUTfmtfTPJKxwabW2t1N45hBjG1Gks3PfRouLPsZ2rrUq1eFW7FvY1"
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
