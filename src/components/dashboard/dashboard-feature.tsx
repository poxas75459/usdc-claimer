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
    "xqTcParTxK74diRVptoFXqvrvT8iBzZmMQLJWzggTcd1RD8S5YBdDQAFQGKac9Lu6ijkKj6EDrs1XkfbrqcnCRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47aCxZGY9vLEYJWNvaZmrB4VcoRQNhyTSEEWhv4tkrVYSW8Pp9fnku2uVDpRKAsWQeie5jSjJoAnRJhz9czAC9tE",
  "key1": "3xbfMcZejjZJCTRjXmk7RC6XRRVbYo4USaujTRBsy322yLyCtBF2irpFp36nHYNNvUBue1vH4ujoLo9Yi25tBvrA",
  "key2": "5SMSevgXVsD5XmaXjAc8v6KRqrTu7yA7QB5rWD9EUUb9S1WVsmtNGr1Mkrd14CHfqtBTabYKhtbt1XcN2o2shBYn",
  "key3": "3rTQP7s9PZaSfSAjJ4KXPtm7w4LnesDRdaFdgA3oSM8sdxLq71vMVUpD3pcKu1xzBbDapQxaiN9Xt6TUy6ks4hEM",
  "key4": "3YBjjXLRBBjctGqu6YbetkDN5uCbUEiFEh6LSXdHYELscErUePhvHJQDdvST17SJbJHbDKBj5ZnQDNNhrYXE4KvZ",
  "key5": "LpDYG3kryCJenXUmtJpqgUz1PCy9UBFtPWqaKe216mzzDrmWGScXTvDkmKpT5ymdqUZdvjtrLvt38iHLYcpQXS6",
  "key6": "45xnToUbkSvXcHS6qnN3bPNFfokczUNpWooYBCHdnoujiXe2YChzYVTfDDoc52dx1c8QKnvX6qmcwmy4fbSwPfuU",
  "key7": "3TzdjBJZj24LKmj8ZDwG1L1TW3wtFpANtD8EdGEv8YnK586dNNW1TFxA1KVVUGvAmGPZ7hKkP1XTQc7ajw1s1kcj",
  "key8": "5UsmRsUoyksnF4AVcvyKmY2vKaa2ay6AXXRHVoDowTQtLxG2PivgikSHhaf4vdbf6RWPCs3jecZboc8x9edCneYp",
  "key9": "3y3WMM1LdCcfL1JTDMpQad3uBoz5LmV9fjaamfh2XTFi16pBhRKmpviZyacrcUuL4idQM1pDHioW2VcQmKAY7gD5",
  "key10": "4RFpF4GTVCtKTUn8ceaTmh66xzURbKCzuQZZT49aK5C9myAk8q9Tm5zRgsHmbB5mAXMmvjPkkXbEu4KeJ8n246eq",
  "key11": "WTXLLqyBWmnvDw6SK2jFkwGqFVtYucAWj7EVefU3cbKfSKyxJ3quyzG5ZbcaB2j9whdXBpWowwSXyRJEtAvVgmi",
  "key12": "3dEDBny1bawrvAeiCeoPBVzPx6AqyBeNfDk8bxFXMrXuFcgerKQF27qiVmyanpHVCuar28x88TgWrWE7d8y2XSaN",
  "key13": "FLZ8fQy3ZzyqHLCLjnF75516uFehCGJcRQaALmajFboZ7NmMoeTEA1VAbvdjrjRz7BCA68naUPaF19iJCy2U5dT",
  "key14": "42xnT3FhqVEnBpdFRG8GNwypVrHcdAEYdC9rLfmKx6pmbkGa8rjpXgw59RxTtE2mFtvtTVbp7AqppicX9MqhVQPR",
  "key15": "3HCMdV2ADBGU3a6tcN7fghWBWjHpJvY9wJHHAj6fNxn5ALqKqRWC7Bh3NANBJmVNyZxkf4AU5Y3avunJar2ZVCi8",
  "key16": "67L8uhMnATBhRq59N21CYecMh48q8SvCFYLBWTnRw2MpbYrZiGvKanqu6FgqF4n6b1RvDp9Mdj7E9YDuRaxidkjX",
  "key17": "63abdh7NeooBUnU7p3ze2ZZt9jvGVqZsaYEqrDpVuCE5jYRHVv46PDE5JUHr8mRzDSayompH4fXoc2hkXrRxB95z",
  "key18": "5GeMyZvByQCCzqCGCjVTn9iMDwor3gL8URF8CZrC6AeUMsbvi987dCegAgJee3dGLZ5PuhZgGUAKWc7ithJkmZv5",
  "key19": "2SANZRGPDGXyY2JpCzDjCxrbHQTXMGdY9M6CZ8pZucnvCtYXRxVrz3LmZXihqR3bumeJe2Kw4eJzE21pKrasuc1C",
  "key20": "5KKnXuZwTN8LHNhXDG1fKroHv2wEq8coF43puT2PFnRx3KEvsjxhT8tnDrcFReNWwGdBPeMF6M5suuzcS71Eyq6x",
  "key21": "PJnkM6SjkD22b4p2tAiw8tdCZ36wor7Z9yvHEANyucwLKWgGTvGfehLDYj2uoodNGDsMPF8S4REoSxSRj2pzBoX",
  "key22": "2tfMSUuhjA7i2YtVwNMqorSCk5xLcrBcbYd25fCgzuwfXdaiMiehqL55cbmhdu3bTQhipwUGqdpXizgTdpPD3w5u",
  "key23": "2i2X7MLeEkhH6PKQwN3P6mgRQsrcUWNwEzFFq4Jsz8bhiAzCZnmRLBFZLU5ypfWqzDKsjCEGmPvqunzn9hBp4jWN",
  "key24": "2KsqJR2whYXRbXkmZC6twtk5qmQuXecdcU16hA5gUu1GcBBT5o1UPzQ3eV6yTJ7jH2TSEBe6sRuAk31wbDocsUM6",
  "key25": "5nxr5PkHimu1DVa8JcTD1xSZeh3Uk8hP9BnaEkGLyKMUGnDMWoyZmRHQ2zZ1HQcLTQhkqmWr5dbnFfdoQfvHT8Zd",
  "key26": "2yt5i6K4oowaKe7ue52FtmqXSMGAy7tabN7AJWddXHsi3JLWCrMFPyCLt8Np2c6iAwWe53J6WDn3ZAeRqji1MbWj",
  "key27": "f2cwHnXqqL6E4RZHXNfjUME3PzUwg3KLbMYQF9ftsGPcc2nA7ciyJ2krvxbUAUQyCiHyeibBR8uoK2pxiCavYCE",
  "key28": "67QxPFvqZtj8ULDVbVcAG5tMNRT5aG1sWSmjoDb6mPeiE1KnH7eVdvA8wgma4ajABXPJR2c5QxPvdcBunFSJT3ho",
  "key29": "27LsBkptoeXhiFNj61ThxdR9E6hDrgxnwfFF4Gcfz1PK21JN5FCH85BGaAxSBnUZ1KuzVnVzEKkgKBnddvFzc4tW",
  "key30": "28Bbt9hjD7rB1N6LNssFnu3v79RbUb6MAkaVGowMtbEjiPEH8aVsi4DmNVyXAJQ1ocQ5CkcJtqiw9nJGSx59r26T",
  "key31": "48Aqiembt5ERJwuX7oXmyunQ5MkRahEE5efGf1ao5VNJibFSVxpsGWHi4zp8uY5i5wFR3X5YbNyjktuA1vEVHwj6",
  "key32": "4eKaNTjB5DQViAKsiMfki8fKuU4BbrwNNKMvFNiHT8SFqhxkHnZvn9GKCJi3PPbv9sVmQNrWDtpibnvBFfaafvXV",
  "key33": "55YiNqj6AztuBnex4aKYLKLZnou4xsamfZAUdgCzP6LP1A7ddZQ4Df2qH3CLLUFknSu5tWNctsW53FoGMWLRU3mg"
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
