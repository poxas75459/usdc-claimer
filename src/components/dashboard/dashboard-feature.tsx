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
    "3joSgpXa34PTCc16Uqv6TdVm5HtLmk5FqctkW9sA8skQE6YHXCrWfLZ4KjUXvBwyCpS6kfvL8zFHkbPzap9DY8GA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VC3Qmw6C8c2UeTkiBAJFsJFaMMqg6xHnJcKVfLKhyph3MqGZJmfCGM5v5RxKV94iVDiB6ucaPuiCnmpMU1kKwSf",
  "key1": "5d1EpygrDSD4wqdhBoo2HBDW1JExkQFNqn8dj44muSSCbmgk3fhDYS34HrTeSxuR8dKUmRsn25t1BzQ4c6TDkw6u",
  "key2": "3V4URe3MAr8rFLhSVk9ENYXCJXTbs5Yns9vYVDfd3Pj3DS8QbNCtWAbPuwygq5jpZ3TAP5oZmDgPqM1bCD5cikxe",
  "key3": "4fPUg4c3d43AQ6jcDZFWUSdJNXpbz2ZsnVFQuuvYSg7ADTdxEHzbpK3VYqy1QxsTLC8XMNBfqXFs8z9fd7t1hwjw",
  "key4": "PjZttjR6CVBpM8hu8kA8gitpXt92dV4mkoNrFm34TP5AyjEMxcqsTNsJ33wYZbjEvvr7Yu268eRs9RLg7C32U33",
  "key5": "2JkFV7ctYuMu6youiqsLh1wWgBeVVpV7XuzDBfMHa2MWkX9M3N8mWVEUEiDq3Lthfm2FoPTMLhsJk55LpB2ZAV7R",
  "key6": "2nbk9uVLwKY8JXHXF5Cn3TCLXtakec57JknUDf9XkUsZrHCUXwfaLsYiG1562e3zpoWFDStRm379wfrxDdy6nS86",
  "key7": "3ECRgNyUpACS5vfeXC53be5tesF941qfWAQAEvWQcUnMbCeS9ZDfcuKsvXQQJnQvzja4PVMkDfmy1m4egocfvRAB",
  "key8": "3szwuHhs3LBLWEThwmbbtKpkHVBS6cCK2URNmNzFz4xN4DTt9w3CJbAvvjeurRTtngAxVB9CnEjmgQP7tTxLoWDB",
  "key9": "4hvLwR2TysEoBWMMhQB3MuKJTnydyUis8ttkQjFgyc8f76PSPDJnLAnHSBUq6929XRUADK2wcbphwbwvz8wkkmbm",
  "key10": "3nCMNoobN3fVUcDcjWCAHQnP79cqRDgkc6Pbf3tprcZNfuEwPSSE4G3TgCkXLhvFk2cpvKhV86c4QfhmnihPj74m",
  "key11": "mXi15GJeeRQ1Tjq1aVKo4yusEXQAFbwVymdV5aARLMduqdfxHr9Jqq1P2d85ge4kWiCabEGT4wVuGFJaf4yLohf",
  "key12": "2dc36RbAfNWScNfHjDgeFGimoDLf7hAXo3GeJhsP2b5Y2SqpBWyki6tBK1Rwn6BnPQedzzyfqSVn1oaGEL3YuZFE",
  "key13": "277ZtwqUvQ9ED8SUJbKtdhPghBk2LV8RKABmjat9jgZkPyQutx6cqZVag7qE3HUDbHavHAeisBgotmyDQXgjBxrX",
  "key14": "594NXQP6x3ZbkX9LXeEtBfTNM6bybdCF3ST5npeRCwB6y1LvWf8YyCoyqZwtkPLWkkQjzqX13RMoR4oghHBfYVQE",
  "key15": "d86ruBHenggDjHAGNs6DicguGkqFjBAE5dF5o1uGbGabs1m9YndESfdqUPELvx4ALkD5CS1248gSxV8FDEiWUTK",
  "key16": "4f99yAgfJPFwiTYFxYYpxXCUEYM6YeCXctW87oD8zRex8XY9eUrMQakNEnTSyiZapuuMVtXRiuLQXJ3CBPoJoZkD",
  "key17": "3mcunpbdAmMT4yEnyyfepYn1wkF9n9ZyKLkrQ5jUgiQrJwTnPLaKttm6GQ4diPLowkHFNBPEeiWjY5T17pxBCXyS",
  "key18": "xQynbn6y9eSHXy2YqT2gr7owwBV6V77kg11i735LW9QxUUUmuznmCGkShvkVH46HxjKehobczsCFCfRq3yrBzpo",
  "key19": "3T1U9nPBfux7QYTzj6Nr9bKLYzasDDdtMvMuHwHeYfePeGnZQ773dBQswTiY413JxaxMq8UmTFepDJVD7zQsUtrv",
  "key20": "wTEmBh7fhNyu4N2P3LRNhPSm1MYDJPxZkTFw7t5iMSW8m3PwFLonifdKUH2PcSZ1exztc4kM8mszrQGrKa9BiA9",
  "key21": "5TMbcAMamCYvwp7MFF4VLwBeiDSUBY3ihL1zni8jE77AZwSHkjRDqXNoFoWghcXgUKGiLFpQUb8NvV7ZQThixpKH",
  "key22": "2ALijAMGfXwuWfprBhuE8wKZ3gzMdN3cbi44xAW8uEv1YQ6qrSLAzFdQKU2B66BXLu5eKbkUiDoQKBZHuWWEygrS",
  "key23": "3ArSzFMghmVk77BLW8fs96CGWG7jWjkfXFgphuhawyPJgnazYAjQ9nZirRPNWDP5mTrspaY2RXY5QK42ENdgiiSG",
  "key24": "2PwmdDw6yhxb3tf5jcMhdppJhPgUwJPvLwHgyBG751R5DZA7Fj8Mz5rzUhqjtvCtU39CZ2U12wiwJqWhQZbKRymH"
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
