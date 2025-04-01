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
    "2SuEjurRbX89jFKKxp9dV8Ep9uNXUeyWw358cXmUqCE8LukUhFapdNxX7F3zqCQp8tzzCLHz4eX6QtC8FFehj7Fd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4agRpSAXuq3Abh1DAWkS1AcAnA9XQoSwD36ESgemqEUf89bcS2t8ynjg2D5iAQS7Jec5uyMTM9R6eEUqpUMxYBeZ",
  "key1": "3ssTi1MstM7okn4BEoCsTSkqZm927Gbfc8dbosMW1DjPpiuMHGQNanAPqyF8T2wVLgo947LTaSXtLNGKgBRZjGKR",
  "key2": "4FjHUKdsTcmPQjxS7nxpkMBqRBVYdpB8uiS8ggdKL71WnNk1sZhJDtywagY3Q9xi7gXdnW3bMPHV8Fa7NM9WAAq3",
  "key3": "ZauFF7BziqZwFNCTbWdTLKXhJGehNkdMu1MoRUS6QTm3oD16V8mUz6wb1uiLCKtyypPHHQc5aiTK7S5nEcAkDS4",
  "key4": "gUpfcsAja3vnVjXtTQ5smQjBzGpHcw1wgq5sRE1ihXVsw1t1nf6Mb4EDaJWgbg5B4zfk9ZSWWXwxcLfnU7UWsNB",
  "key5": "5rXPLiNT39AfpY1EQhzpwWZnzWUptqTthoabR35Cg14xB6HYv5QiQMBhDQMUYRSeH4jXxAcWw2ysmRGee2TnGo5Y",
  "key6": "2xbsAxJagJrGAUVpctorGxpZACqCGVq8cYtJSHx3J15zqnWVse4TGja4VKw48XXLfjidKowmTHreWVzEmJ5w5Djp",
  "key7": "3L98NXzXbiYsxj5LvfTEfzRVcmX5CwsMUqtFbBrqP5U1AVyhuCmLy5dHd3wCd1QYapAMsCrQQ1PYn61u5AgS7FJV",
  "key8": "4AytomSBhsQQY6MbojvQqcdNg1vx7b2KXKYbBaUyK34bpauwDkrtVfagYr1qwpHEEUzw4yH59JjArX7X4YGPDMcA",
  "key9": "5bmRzftXaBBrasVzGjVZbqb2smdufUb1UNyj9CcNChMZvyKw2WzKiNFdoKCLtVJWJB9JqBCBdh1kkuSAtv3T8dqG",
  "key10": "9QUxhm4Ca53Fp5wYTykp6S5971vx87jRHDmt3YDSddSWq7DfwikPdfNUmcVM8LT7eRbWi8mxU2m4u3XdFrs49Ed",
  "key11": "2R6qWLJaueY1tqYTYqfyZT7JtHFJjFREKDisAwmwDXAVjEBDfQuCLJu7eMWZZAhpVB3QBcoR6tbFUYNWeKmAJESp",
  "key12": "4mdbeE7aUcd1bSxKMT2J4Yr6zuJscna9VEVTANvKzaQHksgtR5U1PXK9mu7gtL93D6JP6kKjAYHZGTTUjwdQr6XB",
  "key13": "2hr7nEFDrcmkVTrmfFuFGxJzGq1Lg7X6MWBFv78TZFWM6sqNiAeAWVypSVrkdtv92MKDFhKQVTNHRgryCbVbX5pw",
  "key14": "2pECVmLYt7kYAwR9r3ReZtBEdW3yLeYVCLXKSzQLtDGaEX7CTpyha7b4vkeAPznTFGhUnNLCAtCeLeCupEc7Kvqs",
  "key15": "3beTCerq2JX7a5qg3xw2hmmABnVfjw8M8w6YAxrbCWQHGksN1cwyRXkcMqNFJYyz7jPS1GAXpnBvPZYySLXkbzfe",
  "key16": "BdGn56kAugMRncCV1SMYU4cDkH7CzvyaKqwwefLrZ6jK2WkdSf2nHXSc5Qg4MHumyYL5dmRQ1F4qxjZnaSNiqnF",
  "key17": "4cVbooQGP9LvHYDEwPzj2UaneVB58okEgzxM9WVybsJNA8cMUwg8Ja7uhDD5xDvc32DkCXfUcuvJEwbcSb3Rb9UA",
  "key18": "3E1MDUJbu53HSdDJK4rGtNQoJiLyV6ogcoohLXHZ5SMLTSUqAGVGUBpMFUmFq9AzoDAyxqdHGC5bCW13V9af9mMF",
  "key19": "2NShPnYtNStJJep5cxXaHxFDSm3gQdqgkVZeJrxS9EscyH8r87mMJtpLUMojUpQBYPPfKQMffHTWVcNCoGH5RmJH",
  "key20": "4UwjDUC7aacMDmCTJWfAsTrAzx6ujE678YvfM27xsH1LvKUMaShwWrMDt9WMtcG8p66pojFPdSYiSY3pukK27QCL",
  "key21": "5iNL7DgHv4eCKCTpo61MhpDRSqDKqdH9m17AzQgqNUvGMvkYrnTH77KC5RHBwzUDQpEQRAe1K7ByBu3HVVk9ytUb",
  "key22": "3NUYTVkv51KZNkgzGyQAqrvV74iR6wJCSiHHJDe3pZ48JBZUGxdNdeenvL7pSAMpsdpSxNmydKmN2i5ziVNGMmLt",
  "key23": "2LtW9a6vKbX8Fad1WamEYfbkVFjqspUd657JJwaPZdpCtjtYYBtpujXAWBtcUsGEWgPQfSi4E2S2Gh5J1TcoYPCQ",
  "key24": "bR2wh91pmEATrkUhTx84o3MvT42tWBVRekcr4ycPMDmyUjyfhdz8jo3ZGuC7jnPLWwQiW81PkZaNSzPENNBk965",
  "key25": "TrQkxBTuvdeqTapUQEsmPQqSYkzFovKaNQJmsp9rQ5xrq8EkvDuYyi2PHfT7mNe9YQiLZ3ZExKPHDuoVVn3Awnb",
  "key26": "4Fudbzaw9YHWCMu9A8bv5JZSuzjWo2utBXUJUfz4XiUnoNWjzRnG1akZqdADXxybQts421tvMfYvewB3JgxShCrr",
  "key27": "239bMPMkoCBtfyMXcozi45AXkmrsiHKAPeiZyNaEczyCG1WJkEpY65RQswRLdSfBiaUNw3UHMJYbuERYKQUDHTZi",
  "key28": "cpTF33R38A1AWwSaQaFZkotdRh6MDrqVKHrmCeopjqzjxqF6Qw7YQqj9Am32gP6J1yavWZkJRmJfPKrPEyEWHgp",
  "key29": "3zdS7osrQmE4cTxq3PYTsCyRuWxdunXPmbzbuvETrmb94RxUJBixvSnzmwAruNUPt8TxjdR5sDsYj6HXN1o8ext2",
  "key30": "3acczUmMNeiGqkiGGYt8vKxHb7B1VKCDdS6d5R8xw1DZ3CUiPen2a2SCey7Rwtkvrsg6AMJsojEu8mZtSenupao5",
  "key31": "4GqwnLgEHqP3P3a5q3PA7PgpWVvcfjvvwuXEGLTSt1ahK7bJWXQpbs1aTaEsDdKhD8pWtrYC4x57WvFwxTVFNS5y",
  "key32": "3FUS8WSH83vCnhEMwSXTwviTxt7jVZDyPs1h3Qq8eq5GK9MuajdDggQx2FZnyypRpkHxooQK2ogEGVMHYzURfbwg",
  "key33": "5yTBmdPvumFbRBYuLKCzf8mqAk38jJbavwvNZU2SmgSDQVcDbT63N2j5JvymNt2kTxTRGCk1NgdRU7sMr24Vyjj3"
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
