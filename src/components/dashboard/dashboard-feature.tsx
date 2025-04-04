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
    "5AzXVAZygRDcCCB6k3ZgKu1yJtX48C11UggGD6mVEQ6t1roF6Hk8wWySZfG6NP74JbJz7UugS6TgRNPZsCQ9XTkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DnSAx6iiCLW1pErGuEumjtgAafbtn4HwsEuPNSaXUmQtLC29G3Y5sGAKXf3qxtjG6Ld8wVTMytmf2RjfASKisK6",
  "key1": "4LF3vcJW9bqNu6L26Vhh43tRwjzJdf8LkWpFA6jaoiK3thRcgzQmpUDsZNWo9JCCNoNuYhtpaNyZhRznBtCzBRyP",
  "key2": "2SYfZA2RLEVTnd3dbHmTctnoXhp8Kym6SZcTbr6u7GwWLG6dGafgU3NYeoEvskSTgD83NYv9EcHwiqdSrGZ6agyE",
  "key3": "AfhqH6um4CwLZgfwra4qcmPmWaiCbbYHTMtjBDuksXBhMSELhAqRQAwNGvJfMpaHqk1mwHYGxmDGUmYa5eCU4Nt",
  "key4": "4shDtxUM2P77CRMfZoWcjSu373RidFqVdTnaki21sRYidEtFr8gUhn7gmfuHQ74BiwsF3KAXHF1oroznvz7j1RoT",
  "key5": "kFJ8d1mQSZtB7LYLsHgeTc7ANTrwuxtXG6GRx5geFLaQ6JsjXw5Bz4LtyAJQySmcQ6rS6FqihFRh3ivtsdq7zNF",
  "key6": "REuFqumFfJvUAGC2Wt4fK6wSCDtN5ZiTpzFn956qKg3gvqgoRc9b2ZRa86mo7gmjvTmwqXbUfgUNFsytW5DWu8q",
  "key7": "2BREcL9V6PYYSjzja6Me4PueffixX7LdTARFSVk4LkSh5kKBLuzbE8rK4MW96go9Df2eNXDPV4juD72JE7MhP1q4",
  "key8": "53hPTW5HqPF2iAsZe2KdQ1kfZdWibrsoz88LDFiVeSxTUY9jf6MhPyRfncRu7HjeJeqym5PuQLjn8nMMq9F4sEmi",
  "key9": "5qHjNwuSqgPrKjoNGTw4vZ4UMYVFgPn1mwioCBc3b9bEZDg22ufb8U5ffsJ16DhtWFAAPFKXEqdCEv4jzt6Qp7PK",
  "key10": "4Uf8Tk6PE9rA8mTR1wxU6VJcCx4TauS9feHdF13Nh71xC33Z27QvowbqtF7xrXsfLRcUnavq3iABLkQgzvDPwbxa",
  "key11": "4SkZjxRWPNqkVftf4DjB3AZyMCdoeGzwws5FbWFqNdgVtnzAZGBc6YbT74qMpkMrTptXjsA3HdvcncWqe4PSY6Vr",
  "key12": "2U5wVK3sBs2v2dpjSx74bsGA1kzqeygreTiEqbh9DA6zgoQzZNjuvthz2XqiisN7zRztVqkJ1EVDwNd6aipicYEh",
  "key13": "47P86UHuWhMKaVptwyT6QLaH1zJJjMgazi69cuB916FCzi95saZK82p3KR6vLwRqtFbThA2UDJgyjNL7AGtVmUL4",
  "key14": "3HA4vdDCXoQVQL3djFtcAUdHPbvdMtD5c2p7CeurdhbyLKQSjcqB9vZWvhka9NNDGAFKX3veM9pUZXxiSfhKYbkW",
  "key15": "2F4BRSdg89htXTcEQPC79ZXdWzyiELsS6zj8y1nA4v6fwkwbfe6eQBr6vVXbfAKY8jLB8YN6rbivY1FfDnV3Uzdm",
  "key16": "3DMBGByaTj5k232b9XqEhtDg6tx92q24bEh5RbpYFgCrVQLqunrS9PTmMfsGtNFK7CL9TzTuyXh6tZVb4dzWBSve",
  "key17": "5L6bcMKC1cB3BNAnmy4KM5P3zUNL8ByTjSoygv3YAEshR9RD47vsZPFtnuTnSkKidAR6mC4jYZTmhGoFYFHtJLJq",
  "key18": "2qsJBqRadifo7nruG7EpLnrJ5AieHNPtGT15pWuYx9H7ZrsMwYKMzH8F5o6rdBT89nWc2ZbF8Dpeh7REAgkR1ox7",
  "key19": "2FAKJBf7o7f64M2qmRtfXpsaNUgUqLYmWY1zuVceqbmaWrArgQrpoF9cHekLE52DcpxZiniPm4LbFKNea2JnTXAN",
  "key20": "Lf9duTMLMJnUaRh3tcFD6K9VGJihjBgqH7s91SdgESm66g3Vttaqah66KnkZhZ3JfwXxpsQHtGKPwWtzfgtXJJg",
  "key21": "3Ehgg5FtJPe5pH4xXqJPwQM9c5vZQTbjG91ohNZzpz4LNd3Pw1x5DbKoqxaaCZUzethw6gmjKt4LPrsWWpF2phra",
  "key22": "2o2Z7f12149qMS98He6gTzaH6VGjfXzeCaFRjsKs5LcyuscoBho8opQPN1fEh25xoyr8V7AmokYwcn8kTQzMMoNQ",
  "key23": "3uhnwKeab2NVsMvwWZCMCDqnr4kg4gPuhgWpHBcxHztobXEv2Ab6uCGFhhXqd5p8A6e9j2WpW2CK3gWL5nSF42gu",
  "key24": "4pHcEKTuK8EwradMHLfu6oEf2ePuw5tGnULbaQp5868cU2YTt2wxAUkDtwLTwi14uoWFBfZWxL54WcNQ7DJWR5eU",
  "key25": "nKdy3RuqsEDqEn92ErTCbUP1ZgQhwUHuEdhkGUxxz34dTge7fDN1RrAuXH3v4MJyEBcDCArD8g9ekZbaQkz5UKX",
  "key26": "45pmq2UcEANZ8T7mPRp6p1FzW3ghCU5J6R8hgjo2GbpyxUpdNbsHULuTNyjH8oDYuixnGTq4GhqBcmGNB8DofocV",
  "key27": "iceuaKzCKBWrbnhsRvWv2kUm5QAkqJePEfSbh7JrbS8KgegJKPLEraaxaKqqYdJok9AdRoLJd6iYB3NUeSmgsJp",
  "key28": "61jwLeTGYBs6hvL5rfPAh3Fo3Tbb6FcDPK4Jqku1uLJpmv9o3PT7J2uGUketz22UyownEoUAgaDe9YgyeAcdhY7o",
  "key29": "66hfD5cZzZtThFVswfKRfzBQ2c9QiKExdqnxKcsg2JXMxZpyNF6vWJ9Y1QhFLpFAdHGH1QZFVtj8GWcwduAf7y2P",
  "key30": "hXp7zHD6Mvhc3Hd74WqP6H4wVWB9b3R9DFfzTLnKHtE1VNTQN4TY3jXLZALGGS1r2FhTMaN6AmWqMeEpPerZvya",
  "key31": "2S3UXZk8sBMQrh15ZtqFr6hdFvxqzigXX221D2KrKttQQzu88WAYia6bKr9TPwcabXbH87T1DBTYNzYqHmJo9Epy",
  "key32": "4RWv3aVUQhvqCB62yN3WgKfprpMZ9j6NJqTdyCvqp9eDthdH8Fta1sRP63biQ2oYT1uX9Mt61AiHcC6ogyDuvinW",
  "key33": "4U2ciDd9qnHte1nVuposPVikopDsVCSaNvejXzCCZRLnpiRwHS755UU8Eyzv1TJbyTs6Huy8ZG9BcuCqhCmMfa3t",
  "key34": "mPbQgtebqtxnHAidYWsnD1XLWEygGDhQY8nUvPtaPqpYn3Er3p6rkCyuSMti6GFHSqrcfCK9VFMh8uhjcLa4cLZ",
  "key35": "3anqrLboRCf2tFUAGUwc3eHdZ9T52ZwxxLHh9bbAJN7QwSteMsTeyyQM7uK3FqxeQ1wxfnfQKKTbqpMbk9BNDCQB",
  "key36": "Ajzmyg4X7KXh1oJ1bcvmokrgqFpA4vhpEufgmBk3XXuKTrAKu1FimgC2FhZieDJ2suY1KpYhM4UkbcfG8fxacQY",
  "key37": "2wUtTFqjEf1T3YhKdWdrdPuxpwGRuFkBH9Zpnz8AC8g1bfsy8B5XidQe9pXgjy1XwSSJTYWZZ3Lh2jJ34aBzZ8vH",
  "key38": "3m8y8wXfeP46uD8S8pcH224AH6yC2oiU2Fm4SCQmvjvXt3BWQWEAaapDohXQUQ7Zgto9it2eyfng9yhLHMM5FmHq",
  "key39": "5fzcvYKvPxvHVQY1hkicLBrTkVnS3RYUVJLscYngWNS9CFwJ9ECEkpm5iUfM96dHi8U6f88JSDcWcVtL8yH6PM8Y",
  "key40": "UNQwVKyxdPogBsBQoycN2KbLuVVwTa6PzWTCb1Yt1shvoRdDAH8PGDZo7mf6L3XqwRjrN7umWxZBwHxJmoJAjWZ",
  "key41": "55qMcWFazJa6QqPDRVsoN2WAjyygGmXS7fuSr9o4z7mqsbMKQK5W9vhebtgLG9z9XVsWBG7VX6CDoGLRUSu9D2ht",
  "key42": "4rvDbAdAmvChVkwiCA4hhTAZTEocSXDH8f3XZGTVBh86DikZJ5UCqWStrDD7haPvWztnMGjt2QcaqrmzDSXDFFmE"
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
