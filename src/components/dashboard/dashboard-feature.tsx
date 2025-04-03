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
    "5T92U7K3Z6dkvgNmEWMtshTNoQdNGxH78JhzxkG4mnJxZUqqiT2BkDrNMCpNpoiKTiNNXvnkds2GJi4npNfKhfUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rUkTU7UCjWJM6MViithPzNySZ9mbuKHwLG2RVxiD2XCnjxk7cHdGhtFK7jvN1GTrKbBizHuWzPQXgcJKcUJScBF",
  "key1": "4a2rgYpSbZvxyAkRkM6m4u7ywEdnECdGTzSxgBT4RFspaNx2h6D2HNrjAAD9SpjLfJG4pA11g8kyFn7aYvxrTSxK",
  "key2": "3udMne9t2pymdSpGXUWCYvzu1aRDevGgLSruoHa2b9Fm5Un9uLFUVRkorVrE3WzUNgbV9sZ8jpBVvRF1un5MGQop",
  "key3": "4Bk7KZF8fpWUxtKEcP4F1mqB3hZobopJjU3CXbdRn4vynCu3N61w1u4bphP9UKtjBKJceoDY9Vi2nueqXLYrCFjX",
  "key4": "2K7YpARmpxv378N8giWkvocjctKVfohVy3aU6GHRxBuZGzbcSJN3Q6DuZgCiS9WVqKVy2hBKW1LsHmTBJUdRQxGJ",
  "key5": "3P9NhBqu4RWodhCwVZYjunj3vuAqdHFtmkFJmP2SqL91958vh6rNhBPWmghaRVUc1Jjem2bCgKy4AQLJM52kGbxC",
  "key6": "2Ug1XAkgSWTX6DBQuDa83Ztzd7ExcL159J3H2HJAnt8x9feMsvrHpPczGQ9cRyRHaoPvpqi7kfyeaTHX3kGzVd6j",
  "key7": "5SNtEmv3YtsdpcfGdJoTbbXjknnYorSKu7nHhQhWegNqbwLPqdJ7mnggGQ1UDUUfDvzuc6DgGx1TfvUDsrrMPvHQ",
  "key8": "7ydXYnXMSbabDo52tDX8U44p8pHc89ANF4e6yQdPdFtW3ZAHh1z4MZ681gTFrV1MzfBckyKb7zzHRTSYhFzYPpD",
  "key9": "3oxU74uKG58SBTxBi4Pdq6Rozx4ahCthGqbgYKpJ62Y3VmrMi4kSXzUqKbaeXdAC2tk9wopFGb5pahc6urob4txe",
  "key10": "xpuP5utrwSj55P2biSdQdAZCMSNSEzzL8Hme3wD8jU3bzii4wdzXf16kLzU3cygLiS2ZCoGWYN6Nwryq6CiMhFu",
  "key11": "4TMADduFg43thHqHeu4yUTEWhMtKrEry6JMUiBkdLdtw6Xf8Sh8DtoTjhWKkokRv7J17CCnSBx31rYqStmXnpdfH",
  "key12": "4JkmnEvb5xeKMeuKazp8YBu7NCaLtj2Nwa5dRtbUeXkCYEMwA7kMFxaeR95Xy4KrhZkdphHxsa7BM4BNkVUx9evZ",
  "key13": "3aB5e6b6tTQxcz6MrTMQSetcCWsFS5dnGy9i1GGnUjWrH9SxoBMeW1YKu5LQ9q1LpL4a56bkABk6QLrU4dUSFtPB",
  "key14": "4BEGK3JBJ9xGbC65Yc7kXBrFNbqsPMC5qYAwoo6SW44CBVJVn4x9Xi1D5xWnPbiGKVsbbrw2qxZcmEHfrCzSWwXD",
  "key15": "2PyPjDjr3qU9Bgj2VpdkfgecsrBXjtRUFBwWMTmB9meJEUaBJnr4giX8saJB4Jsn5DZRzSQcxkbiCNWMMLZQC7pk",
  "key16": "44NoqS2KZL9oJPUyJDPasqCD1wMZb9rVMHKqVPQj3GYrpERCLoVGcTj9wwHf6FwVytX8wSPgeAYSi8YmFMc5fLTu",
  "key17": "5jpZYeac7QGD6znhBro4PFwRdftr7kBBqPm9CdeCNiePmW1KXTXfjsjCB69Jejk6FtnRJp91NUct6g6QxDDSiTN5",
  "key18": "33wv5XgrDtmjU72LxD8Fmp61TY58PJpTPQYc6QnBG2o3LJs6SkUG63xhLGEGGQGY5QtiT4LSPjvTqYRKLRnjWYCm",
  "key19": "5ZZBGxLDbABubiGnPYVNEQKAUTf781H2KFvxophfEypBuoqjkmKbLRwV3emvujw8keoGqXSFojAeFWPEPb9y7jec",
  "key20": "3cCHFEYxxF6kfdTpFCXftXUYus9YYgJQiDkXgQ5c7DZs8eVqMfscfAV9vtJR9mLCsG933oBw5jvGqo9WzJoNt1RS",
  "key21": "3DJ9pjMdqNEYKReoYsHfqBmbnqU7XtxEuxbFRWUk6q6rR8gMSiVr9SyzWVjfwmWvoiGe4TsGub3gB2BVNP2jV8Ex",
  "key22": "2V49FNHeNztDey532gvqQmgv2AbsKspEKct7BUBSQi8BqTnGXe2Nh95Vh4ZYmsFxEHbZuJKhibMtyf5ok4T5TQjv",
  "key23": "4aNirxijfFvNjXssbPXCPhN5eVW2P2F52v7vyh86D4U2uypdBynMHBvvgUyGPFPLr2AS7Kf2MMJ5e5Zuir3MuCFQ",
  "key24": "2pWVEKC8vwwqcg3YbdYae2AzciKe1wX9xvXQRLDQBcdMY6b8ruhi91yG1rV8JQERUC89KGLGV2Ndb9eGXNAF1DHj",
  "key25": "2igUyV8QJktXCSea2oxrtTTkB1gpE7yRDyy8Kdy9PLaTHLR5EyAE3rSegXrtCtEhsPEDERjmZpN8pKPFr2q96Z3E",
  "key26": "2MMEYrL3zumnSK9LD8c5hnAp8yj6MDZujgJ41rCeAh6zDENjw8bwq2vnWQJkNt12tfDDwXPE7sZ7xfsiTuhDyH6L",
  "key27": "57zPzqzVmodUPF5GsrWaTw8k8F5ZkZdKYHrMph4gQWaRhAv6LkNzKRpwmi3mVbSF23vhXzaiVk9niP1m63gUHuVq",
  "key28": "5JCgnMsG96JyRrUTpCZVEHxS3bqGNNwBYbfN9J6LZ9rhKBMhzTjsS3AXcsJUyKvKsxDw5H8BK1XsTAYgoq82rB92",
  "key29": "3d9feqDcEVQGeSp9WExfdyQk98XP93pQgFxfpKV8Tt7UvfUPTxep3TgR4bN9mfAtxbJbDWVUMKhzLzwo7kVtQUjL",
  "key30": "65GnAShJ8nm8rWSL9MwP6GAB1JkdFfY321yf85exhmJtp9dJZATb1RGZnwfKkyTMwPCNCajZVSCKN6srK1r5R8Mm",
  "key31": "4y1TUHdgnRzDAL8k5gzXhp1M13QVsaK5VXJFhhpa1HoQnMnZYgCpThGAstdkhoMXfsTPVwgutEXe13jZqbMkv69R",
  "key32": "332qU89iqMGhRZbmPmxVp9Ez1aSrapG2yZXsdhRPM3KZDvYvLLrATCDYWRXmeyab1SPSaPncUHNPy5BH8dDGxwmc",
  "key33": "48KTpczbDyJErdFLg4qsjgBiRw7WXB92K2ZcrFSf1Usn2q9JMJpVoVAGrgg1whigCE5h9R2oFWbZkPxXPJqJSpxv",
  "key34": "5hxnmrb67Lf7Wkr47rkCLYLBqhZNbKFNcVwf66o4cKLUVeoES3P6hSvu736MuGMeS1UJLc2Zh1bWJEfi3ZjqPn8",
  "key35": "g49CwNeHJ2vUicogpchnkKZTfYWWFHacWAYrjctE9SSFXdfn6dDh7Q2XkVpzy8jN1VoMHWPzH8xpJUMQwpfaFzT",
  "key36": "4MyXH8MK3B8ZPp7bu49uB25W3sfKzo4ZY8F1jUPSzciTjfDeVPQBMDcaxATNcxkFVZjJHWfXT1EYkmQBMMvYk8XC",
  "key37": "JfRTCqoR27g4UcjrBj5uqbGCrKn6FW7nHXBCTnQJF3AESL5LoTfBsMkZtNbdrRV5KyJf5bHcV7PNaZvawfRRvnQ",
  "key38": "421aDXmnqq4TX6DCGGydujvFnaXCS5nWWK5AFmPbKr1EBXFAuNkVL9hGHnKw6iE4BQ6TyAGuod9YuBpuuu7hNycj",
  "key39": "2JfVQi7gD28zPvDW9sTvgJ3iVJdUi1ZnVBRxpCDcPrUX6CSHK7sSEJSnUzKy5VonEKf2cZkBbcNLoGRBT9U2m1bQ",
  "key40": "5BQdeLJukNiShu7fsUYiMk8pq46JETbsrkn1XUgsaSPg15tWY52DFKT8qM1k8Y21YX8kiwW6t5vjCZSxny5uSS6x",
  "key41": "45VPYgEHwPrHUSmBTYNHbt3WCa6GhiffkpGBDSzWXoJcwRbPgseJQRzwN4EiaawrXLy6TSySZot1AtuGHaEZahZ8",
  "key42": "ubW16Ep8JEziRsqNyGdLyJs8xBJjNV1hBFatKigpTT2DHuq52Zdqj8RDwd5w2dVK861B6EUT9Wu9MFNbSUJv5hq",
  "key43": "5pZ5cNmHutSwLmM3wnm56F6ZoU44TCaAyXCFz7he3D5aFueaPutNmYVuPKfZDyZsEoHQABZ1XUUrSeFYVaBT1fSZ",
  "key44": "4s1JAk27h9YNGyABotPsBt1CendCur5XG6PgGA8wapzecnuM7wyRCU3ZgP5orw1DPECQTkd66hzndvC2fX9pRiBV",
  "key45": "3LyL8SXQ1YG8tMCU3ahiUax6gfu6L5iyoWuCe9L4FhsaQ4N2YidKAZMLRhYg1YkhBrP4N1kTeHaFVrEquBgEaGZm",
  "key46": "peCRP45ENPm63o4QGciejKTXZMkiaBobCzKipQKNzKZhRZJb2HaDnxqNdM55EFuvf7N45XSexuANpqKhSJH3cvx",
  "key47": "5sirpv8XsGhaFLbmK885AgxYFRdyZfRF2MqY5hC97mPnxKrwjc5hr7s5fyBKLzKU2wnH6kSeoSEedc9bU7QdPSzG",
  "key48": "5BVPKkX9BjWzNDm3j32ohQ6kaPXXDmy48ra8KoektBYQFStJ12iY77khdicrgXmac9XKRxkParzBW6kKthJifHKE"
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
