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
    "5BnQQWfZXLiJtL7c4VtZPVbbcacAwW8oFFuyUg5Rq3EUVKFA4JXur9NsrqDSpPkyw9VM6REMgcWeoHTpsd6BKCyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MngQguaNsqq73aPn6TP9AYrETSbvouwxfJXbBcDhRakwpKb56BDPkb8jnD65V7R2ivfUHQ3YpXjYSKMfQoYrpcH",
  "key1": "E5s5Xzo3G6VYG8S9EVisnNjNFJAgJPRgsmpkSYfhM2p3xeggWSXyhmJPx4aaPwgjFXEqnRBYP1KjhBzkaBSEGXq",
  "key2": "5EieuLJVgseCB5DPmEFLCJj8F2XSm4T2WzwMPbHQHtcHSHabP2bF4JSDg4hw4egAkcsRuCjMdEd3yK6QMfPVAidJ",
  "key3": "23G6XR36a1PUz9UxMk82VF2DJx699L1zYcWAQAuqgUqFk1PYnjYAaRXh6zPYxBptoBbDFgMiESPgLom6DH6QFM8G",
  "key4": "2DdeJaD2p4gdXQFHCqRfBU1av6L4Qo9Vzg9MZjef6qtmEtUq5RmKCdRJ7LXuzqZ9mSmYWwEH6DwiQiFeMpQwXn2f",
  "key5": "3YXH9bshZ7jogo72SWsYky4AG7KiN1XBE7HeexWuNXzsARnkTtTTW1quCjyRtygXwQ93QLmozKxa1qv3af1ftDJJ",
  "key6": "4Kz7hNXygx65Lt6sgbJ1kZBBRkferjvj9bLotp4RgGZcTw3KSJFAqMqfM1QC914pwPrjX3E8L2Sa5XxwccQD6rN9",
  "key7": "4XaLGGvTGMFmu2gWV6YmxxPTM6M4SVhB4iJKVpJJTqip2RMWaF6KgUrvoGT6thLSSAbHcJzneHabJLVef7dW1Dax",
  "key8": "Lx569MbVCrDHrXUqw9XuQHBQMpNWnNkp3gWNJqXQ5xbhBvwQDAW4GdGF2ar3y6G7ZWFT47Qri7dPgdzT6dCy2Cp",
  "key9": "KsDvZNTZNbPoZgspJHho4LE7Rg3AscVRJL5o5KSUNyQ7EvTLuF4iChgv52t3HqdpxzjnjvapdnqKMKBSi6mJfZp",
  "key10": "2QCjDecXXYxe1xjpS8TtdaWkFtLGtwXmeN275xuZNoHErgJCCkmC2SFLNgrV5LTSpQ49ZVhj44atusbSkMPiUVTX",
  "key11": "4ugJAs2r3XjkHJRMhbuh69DjgimR9dy6gLabSGwGdmG2mtkwGLL4SSj58UxNPCiTL5t9Sr9thPvmhNFMhyUetca1",
  "key12": "46cj3DbZiLfaHcKQtYNhShvFa2aFTeF5rwr9fvJ4Gw8PJLj1TWFEHniu2dAjUzrQ7UA4D3w7V2f8a8yB768Tnfjm",
  "key13": "xPmhQQJJAY3kzxA5QU1xfwdogPgJbiuYS2tgHKA2Rw1xiQqtjRN7iwTe3xfT9kk7A4CUXNcN6oexmPJv1F9jRoW",
  "key14": "2HWxFSo7r756x1weKRsgudT6pPLoBghEz9W7m8jLQYYpRePJVYdYQyL4cczVavCc8S2XxBV3rs6hevtgAw9W3EwF",
  "key15": "22bxUA2nQfxSxcMY7jbxBzvkuMz1QW4HsjhWCQqYyCr3BL2SDfwyxhjFDWRSnX7BRW1Ubz4s8UFeG3ww669fKjMb",
  "key16": "2MosNsHaEkPnjjsNh3XtCnnvRauWpEqnfjyz537nGAijPqcbvyx2QpbwepZgeGeQrsHeG1q3ZXhEgdJdv81vQbEs",
  "key17": "4cdk7Va7e33MttqKSJCYjyrzzCeoJs9AYrHM3SGeR6xrjm3RZhExGdsPpVg5rdncSK52aTRNo4EF3PoHV1wdSR7F",
  "key18": "2aEaqm1ifRvTsNyiP2V32i1Cm5z9mhKetbAc1AXb8FD2b89EMnfjpzrz9t62SQE4uM5DyVUL3wSTJrgu6MGUwtbH",
  "key19": "48qopftps3LnyxFn8uXUfpNhihzZ9uyYMwymjp1kR6cc7AhWEWrofEBs4inMeLAippbywoWQXFnHojJ789mhbcDV",
  "key20": "2sAWpgriYK6gH9CcMgAzFYMuGvJvmCX3rvATMxsPPR3bQ6XHuWmxAzQzvr3VHm8Hv5QjpHHAGMXMXxrfY2H2YQAP",
  "key21": "5GSdAcunUm2yhoA2YHM8dFEgG9U2rng6pjtAbQ8DpGY3Yc43m3fhLDfTFdbQeRiBroKWKST4k7HjkzhmfYqkbdy8",
  "key22": "2uSDs7ksXUFXNsSGd8u9pXNap6YQxxyDew6FzVvow9Cxy8oDpt2DvyaM1jAmeiWE16NQdsCkhfiL4rDsZterGVan",
  "key23": "xZ3rcSxZwLzR8C7cKzeWuH2vR3XvgeWB4PUDw6t22vRJoWNLbgmSFUWyhhqsm65zRfspCe2HhgS3fLddu525d7b",
  "key24": "4vmNbesfq96Az1JQcZ8Qaqp1DyMJGrEomKnK23A2EGEWk8nD2dgyM1ejyUXLmy4z3YVcXYjpXesr9Db36PepWYH",
  "key25": "3trfc6n8ZG7Enr54JjYcWn3NpW2Dfi5Sb2b5NLHbBrpPNc6ysuVjHVgRpZDKX7hmCnCuiEJCa6HgtsWJFn7FD9s",
  "key26": "5Rfdo8pjbxojTbsakNs3CvaLHg1cVoQ1KTD4C9f9yphEM9bgWgoh4ACyxatPUYajeRXvtFs66MAUFETgiX6N5b17",
  "key27": "35rbQDZ1SLJWQXV6cenoiFpiFmJZyxDxiWUTB26esPEWwJxnaEHaWKxSYs8fgNGA4ZvGGSirNAiRJRVdDXsBvjXT",
  "key28": "5C5tXfgbYei887QHwg8d8LtUhZW58ZgmVxREBjfXAGu2m7vdhLhfPn8tPXXJAqbRNm1tUjj6wgooU72aUNdfYmBp",
  "key29": "3nJXBDMTSbS5JVKmFbrHibNpNJXkfCb5ksKwW3CfyzQHkPCzb1kGy7nX6GGGmCfbKzjMiWqpxYSqvKqMTotSsJcm",
  "key30": "5iACSBxfJdbMvFs5Q43GsrqPG4B5sdbG3TpbnyrZ7MeVpwPr1jLnWmkmPwEv2TewQBdj8JXja9e6ruw5y1scGTZZ",
  "key31": "4Rgtx5muExtYChEwoLpxW1CztanBAgB7Ya7CZqSZfL3GZG5JRnxbAXVMUrq2JerJaTqXENQGgxpsDmWL9tay56sa",
  "key32": "5MGkQgmtauqXM3o76RFeLpEvQMRLQ7KSh6CxsE2LqLRCDx6MRh1aGD8iCzoJioFALWseUmgkdVvgnMov2SmE79qT",
  "key33": "suL6fcT6mYq6g7SavmcKCFgMxvcLi5973UhwtBbfjaWUh2NkwJTS8Cgi1V4kfaiDWZEEHRkRkStnArxpGi48Kmt",
  "key34": "4KsFKdto2fm26csV49tPQhmnPkFiYNqJZi69R9eumzt3hKTXyhsFmzUXhaLMj67JYhYz5o7KiYyRX4VdXicXbriL",
  "key35": "5hEnEkXps3U17osmPaEaZ22tD5B4WNSJ3stnjq6FwDgb2zdQwLmfTgLY2B5Qp9GiTL1r1Rvb9W27P5qeA2y86hs1",
  "key36": "io6ysGenJ38mqSEzaXmUPef4w4DcUtxHeSqPpPqWxSRUeP14nygGYXS7VjoKm2zwTKtMpA8sY7Xz35wr56XNDc4"
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
