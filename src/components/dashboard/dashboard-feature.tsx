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
    "5AeUp9ELhRWDxv3LN8Mkun5R9jiCAUQG4wQqxygaGkWDKoPvrPx3E3ZuAeyu2mDnZr978ZRpGt5eoeqLw4WxswRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "326YqUFksFnHS21DDb6WbKJrMUvBBnWVFcwXtwBrQWXHccStxSTdxGdYSKFwAfasgELtdtp4rCxryaY7Pm53u4uK",
  "key1": "36SjZAD7JJH8Tbud5jBoLN8ab7umjg2o5q2k2jUnBJJCqU6SY35SKaxzXJ3GhyULw4rPN5Nxru33vqBcw2rjZBxn",
  "key2": "5Xu58W3Ln1TK4Hoc98i4hgeu25BkehdDyGtemc3wppUBDiA5qYz1AuFaZSrmkjmqKZ886v8fKZfGtN9xisakFqte",
  "key3": "5smENLxRLX2QUg6AymvgTFngoKetY4iveCZVsfFmPT5FmXbgozyu6F6nr1NZ1XeJpQgpqF8ugM6BMfD8C18iBdB1",
  "key4": "61RPyfYArqJiZFbCS7MvWV2V6aZ68SasGqjJt1RqQtFAznBRDFa93RaV1rDxK18rL6KAM7XCcUK6NUkAvGw5aJYw",
  "key5": "3wEPpQAiDNMvZ2ux2yq8p61dL1K4R78bJd8AB1MQRxm6KGNSu1CzZ5tSjFmGCH7QTQJESM1vdojo2rAAM3JKuyFy",
  "key6": "5fNDFu53viKMbZpdE2aVkBkKGraA6RhxQKWUPgXwYPfpCvH5zbsAi5HxseXpNxQCqXJNxBECEVmmUzS8jg2quAo7",
  "key7": "5dYGFebYj4brvYyA2f2SGpC4ubR63pZTRPZsRUiFU35Xt61cw5FzpWZjCVvLmagjcNF6vR4z9YJmEEWRsS3aJavx",
  "key8": "2YLTeA2Fd6nA2S6shjrrUd5g2xh6yobWHcD2L57fc5K8SwN8jy36ekEeuoZMbbwfibbNZcNPKBF1jfnZXTc7jGSD",
  "key9": "2SmYVJXqwMnKYDZVqUbA6TqfiyhYmEf7c6EL5uUWDqnzta2y64iFEFNhwsHYdxK5DYS4MdrNwo37FY5LPfu1Nr4Q",
  "key10": "5ADy9MrqkGJnaLaaYtE5dpW2Qqt3oDajswLXPJo4uDCxiUNZ2gbmp4YTa8m8c6wcyaFkkbMEoeGLKq2jZUPDiovB",
  "key11": "5HpZLpzUgXVrfQtvWYdzdh4D35XKyDo9UADaNj6Xvxixxi4yUAG56aE6LH23haM8f7XMQC8gYuziJrX548GZtxbP",
  "key12": "2HmbogYXfKRT4BRPx66ggED2qsrsjo6YMRUTNksZYoBoww27y8JYJnhLY1jAC7r8kJLe4439MPqoTog5wihwW2sK",
  "key13": "515FdKeePj8pccMvhtZiGTjbQGJjSTte5DCXR5gZAretiHmndoxaRvYXBYVNBEdmHGqVRmbccQqfM2FSSRDdurKh",
  "key14": "27GgY668FH51AjqxBMv8J25QYdsHod4WrF5rZ5KqZTQbJPqyaTaPfZiE2WfbYpRj9dmaJZhjbS3RoREK92nyKnN7",
  "key15": "63s7TGrfHyEYNq286NCAigpFbapKJNPJEgaTKSsA2o5nLiEJ8iEZuEmUJCQhaQT6dgXPWXWwv9bfThwCa6caDw8h",
  "key16": "5gcLqqWt1pyAtDaDtQVEg8L55HKeU6NRjgbQpJKb7f7ogiqfwSZtLzbQKDSEpTy9YC5oYKwYKNmEfp9UhoC9GuJm",
  "key17": "hwaThzN8yp1t4dsHGt53FRi4k1YwypAogDWpF5c7koW66pDbFCgXp5LfzuAnrQzJnWcTHevdk9JtYyrmtNVtbCU",
  "key18": "41jv3VLeUgx1dC62u7UBDnxLs27rG3iPpkynRE8UJcAsRKZozH5QKCvAdTDpFXuP6ZTZZwNgCxnRTJE5uh5xkVkP",
  "key19": "N66EYvVRXSiWNqTKjrXb7fHcPejWgXHDQzZM4EDNe2xK2HQ7oQ3CQjZZVPuVCAKNBKWYeeFYFm7sYY2m5CVvo62",
  "key20": "KtCH7MpYnkmSaEk1QKFeqyfPzFZ1MKYc3Dj5ZubpFZMY456FFy7y4ZtfTHiBpekcxfUrvfD3mqznoL2tdb5D5uv",
  "key21": "5yaE6YqP5MC7NrXiWejX4GmCP5V2xWovCGbqZEHBm8ctb5Mft4TDovpEez1GPVPdYxtE2Zk9f8L2J6rDcttaasLs",
  "key22": "47qzk3vLVeDGYzewSgALE6eRGdnjEcSzHLAS6hcwxR73dwUbxDek6gMecknUJTaqkxjvrihZ9MzyuKLdXG4JJ8tn",
  "key23": "eehmSjagZHMTUJQH3FZ8fgTvVqTdQJdGD5ES4KrmU1T5smiHE2ziKApkR4MgEDkXK9Z7LrVUCkx4pdwX5xJTbMx",
  "key24": "wxuPhcKCLji9xS5kgtGvHzSE8XFJeHBset5xgZPkCmPGpGQyrVGvqzRJRFGuJxPXiEjyypx7rAu4KwvknrXMaov",
  "key25": "2T9VT6iBViFrUoFi5hwsEvoNQPxE5ijSefXq7uHYNF1PD3G3j1q3brgnV8cBtdd23ysHiywMHKToMJ1XYMDURqVg",
  "key26": "2gcgXYDqinxf1uVPUucRxbSSJmPh5PPNucQSjYGs3kt7Xoz4Kx6m5mPp2QBpWRsykDzGihbwin4GT4Lc3kgN3rzo",
  "key27": "5Fxt8QJz69EmDfRiXxPhDVhcY1LfzkM2VdW6w5tRdKLaxghdjiu8pVSwLZsm1GvSF6neke82Lv6pKNqJvaNyVWtw",
  "key28": "AdZfvh6rNUtDJoZKfFQfQ1arQKANYdWew7za2PehxLS4dbhtyGBwUETHtw81pZdpmEVZgAUiqPBF85LYE4AMAn2",
  "key29": "2QCakKwMAM1arodqNJRVkc594JMaDnEYVWjLepPpSAEiYQ1q2ZLtuZRRTYZVrrUrxfmTwhcudHW54BeBX8hP6k6k",
  "key30": "Cgs9KnBGRE2FRHYegmve6JnBstYWJMgcZwDVMCvyy65aMo4opMz6qTzHg7j34yuRWpHYQoWAoNxq8rQZby1bUee",
  "key31": "5Cf17ckXqwTogjzBX7GzEtVmGJ2s5cgBj85yNwzr64V5Ko1vzazsSV2dTSXvonZp53EPQQLBVGsb2ycctcaiSd1K",
  "key32": "3MkK2B7x4RdYGTeNiWHLAnLPsfxgioHcoF4t5B5cUmMVABHPsuVqasABTVjUwPyZncMnDtBHJN4VXGtknT9jBrXB",
  "key33": "45PtZCMZcU4gWJwbUphGKi67ZbLcjU29Lyg4LrUgza1EyLVdJ7JcYd923dNSmdAonEGiQ8Ae7YgyhZu7PgsU9HgB",
  "key34": "2wBVi7im4ad2qa2v5iX4P2xsfNcRkp16Yj61Y4zAHaat79CW7PuTqzD8WTgt1h9qYFvmNv5Mt3XvBLzBL1uHpZAP",
  "key35": "4j7n7efD1BiAuRDDMLEQUd1oEs9vvW8M7EXAH75ErQBYfcDwoSfDAoGmrvrzDVaPr3TULmeZ9NK9FzGm9qCSJbvQ",
  "key36": "52NugkXAfqCmeNXWZDEj16kLurGvuodyQHtcr5Q22nk5D98KxiNamz8ejq7nJgjFyiPToMzM6LnPMtgBCYJb5zmH",
  "key37": "5Zq2AQmfb7ZX8URsJS4KfL1nKiBthnUYuRkjTQr6sWpVXnVWAoY5jhEeRwBECM72cZ6jJRXpHC4v429rcWSFDUDf",
  "key38": "c9kfNYEkQf9S9VvsVWd1WXqZD4wRZv3Ttbh8aAqXtAxx3yXbBmirLfadhRe4ucFmkzo3biEukj3FKnZ4aZjDdsV",
  "key39": "QsbbhBCHY91SRVwf92AzUJT3z4eQ47Y2VfDBBZbVy4fMYpFstYLe7yXYcRWzUhSPnwGyAameWZJZHMZmipMppWj",
  "key40": "4DbzEvS2yUFGexLFeXHEgBJaeSTuxSKhwhDnZtXEQdGRYL77kqrwxVPFuoKXD7j7UHKAY4zPDo7rg3rYTWaK8967",
  "key41": "263hTW4WdwmX9quTCsSHLf4St1eXYRcZ8LpEdRdHCmvexeozbEMRjMyLPW2SPJpdWqM4PXz1akCYSKFFw73tmsvC",
  "key42": "3RgqGUy3EVeSxWGKvgGm5WvNPxed5fMMVx93oHnp4jcHXzDtCKd8EgcbhC6fNdjwMQCZ1gxcJLmB1VqJ26BGSfHE",
  "key43": "4FbJU2tnuwanhqVY2fU3GXWzPMJHQVUzNn1vELncvmm8RnGA6R7EfJBxQsAWJVqtCMNEDF8EQPnBEpb8yBYxWZsS",
  "key44": "Sv8ZMbJh5vsi91gfJbbfsULX7cqFNUoJ1WFceiK8c92j6SwDQ9hJHDLkftev4Nw17jqBJvzDg9TSpoGb7nh5UkG",
  "key45": "2t9JseHKjkDwD8eG5vpVgJCQbdg3Fh2BUS17j4666USjRrda2i1t7AvHRbXFzhgioS2YVLHGWxV4UWWTkR455oSW",
  "key46": "4gS2dDz9ymSEsHbyhdGB6LaGyQbJDXxbniQAGteMCBZZQAZGfAZnS1Bti4KbKJgSQtExXUo4iDYBeM9vVUa5w3qq"
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
