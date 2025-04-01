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
    "zYQPnXPFSfvXhCtapSD7LNazxPKR1Sgg2nnuNgxJx57HFwJezXWQPcWPfxVJsTwqXQDmB1Ez7NMrGRKmFioswTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X2hMs4fNbHikXDagDSrYAAre57RcbpFbpgtJQMCJ2uY4cRNcApXzeFZpu7QYrhdzGwQQKqXLKADzaYSuYc7yRox",
  "key1": "2fBMoNbbyxWj4bCQSRCJziDvYAmg6kQ6hqQzDUhW8WAtkzi4fr9H7joFMvTyir2q7R6Dq5YABf8VHG6C8JeFG2hR",
  "key2": "ESH3Bu7omKBkUT2JQQ2rdvdkjQF2uKzWcUr7chjTZGzf4ZQaW1K8NVUBQZ8zu6hXhFxy1LtD9uQNgDH6a41ZUKN",
  "key3": "2NtQAHZXfxza9RRoHbiuEDDHRmnfjSTCwizzAPVqGDFUXSVX2cAqZGtWCNev3sZ8qjoeq8rbeCEgmNvNAb2DuRw6",
  "key4": "2zPe92B7qLhfXtDKc64uLCEeYVVkmsqfEFv8DeRf6Xg5CE5tkppwk6MZKpkwmgWtxVpXMGBxnR2CtkcFxTchFUY1",
  "key5": "4Uy2UVKbxTvRpyTXjwR5zre99eRRKTPkx6QSkEzWjRPjBTa62eeMxnyKwXggEDmYJacTNHwY9Hu1Swbcy3sYWCSv",
  "key6": "XCrYVPnFbR3tEZs1LsVidELLhxMaDizGSjiYXDwHJxN455UHiaDuriHiAfqSzvYZXUuAcss5vsaBDHbhagka8uj",
  "key7": "3YYJtPtr1ouCDUGaoKmZSbjBcsYwzq3sCqvxi1SCStEGGSSJsKQ46Z6hn9PpqGAkTpZL5ys4Gh31RL1SJzuvx8D8",
  "key8": "NxXXQswqwuqzkCUbDvorMs4Jv8rM1cReUSpdv6UVF89P9XYcEevEemSF8usM1s9u2vmy2S3jMYBATv1HhDB2RoF",
  "key9": "AMPVkk5C7GUsGiYB3jrcnSJhvC9rJQDuHuc1X9txH2LSfor4u8QqGan7Ev8oheu5oVk5wF6Nt3PSM2sjsiCrAuf",
  "key10": "iUfqg2KXphXiFKicsKRJTjAjQAX92ajqoAfP3Y8cY6U9rr9q44tzHzNgmer6mkgujZGQwq8SvqBqbSaPBRnZ7Db",
  "key11": "V1wMtqGQN1fHcr5Qsn5k6WmDLPnrmd2FqRzFgXomLTag6tMngrvAiT64FYX7dx2Z9fh9k4yqtU4dR84MygrsWUg",
  "key12": "2ef7roNn7egnkd6UC96td9rJSxCS8YvgxBvfcgbiFj3wcKknd73geLuCS9wWX2mYmL55Vse2is6v6UNPY3RWmDjj",
  "key13": "4jYoRmGTMSZmLAeSVvY8WZ4y5oH6vPGX5wWQE9ZZtUUgeddpoQjbtBEnmxaqQMscVePsNDEBC7wh7vm2rYt4gyPk",
  "key14": "2N8xwge8E3FGREUCBg5W5AkPXjGU9xTkayFfxtPczsPtv3yJgzGNzx4gJD24sKVUBJJ35VRNy52i9sVb4vpUuCpZ",
  "key15": "aPrQypqNmUsbzWrv2h15sA1SMPdwXtYPMU8UsFGaGSxq6CtFiJiYs3HXW6DRYghUqrBmn3qfmY1GqrCWUHPPxra",
  "key16": "4iDhQt98KYWRs7MLUkZCokYsbdJ3SgRPmeZvyHEp9zPHCLN4DWgGBMh6W5CZAgYbCstPR6zhSaLjoCA3ECzWCjQA",
  "key17": "3tYdnC4aYCF2e5YAcmakuZGD3z9XnQagaQuuMFnpAuK1uk1QTQPpGcijrDrm5PB67wdPWAQwpfVcErbUo2wJPpMg",
  "key18": "2jumbc6vSXfY6rFQ2QpFVLEPG73ZrcFdsNTZoGjVvXxQaP2uJxyL7KDeaCgHB44jAQr9qkgpLvKFxWehDgNwsmLv",
  "key19": "4LLD8KA5D62r6ycGxSQg16hwgaqtHgRZ2REbFDm833eLCirD6QGXrTSp5w71oBaRe6kfy4LFFpxobWWRLYKV5paS",
  "key20": "4QdSJpVaHwmPSVvhqzNctb8TXtqoG56KDHDA5FZz7EhuyfB3o1oyHLGmrp1r7ip4dsA7z96BUoZgmyJZovfsRhz4",
  "key21": "5yePF6hLB8WQSfRWvXkpnXjEM2Hvaxfxdy2qFBrC11RbHYn7pztLw5zuD7b1XqwT1HkxCHiWZ2GfCtbWwGP5pEUN",
  "key22": "212V4MjeVx6eTMKUhCVdryHFvq3GFYNVChFU57GPG1zPpDhjmUUp8Nmn2C9mS8a3AxzAk7bH85wEiJdfANG44Re8",
  "key23": "AHJBhFaPk29R3As4FkB7nEFSK25q7Gjy9BnDsmtUkoxwrVqL1obL64CVK3tmX2XWScgbJWky7enihVFTSAS8Hzu",
  "key24": "46k6Xrz6Y7aYYkdMBCgve34MayFVGNxHgiq5kD299uSCcpxjCGwEHdjgmWxLkCXm2Qw2Vf9RxNNBauFHyektTyg4",
  "key25": "4japJP5NzZvPsrRbXpxMENMQ1P5cgwnr55Bs5Q9PbnrFhe4Pn8VLrcyJz2K36EbtpK4YSWSMVMQo6PPmpk1dyp3u",
  "key26": "2Z5X7RWieXJtGtEQxmng1aRKr6VruQupxGbLMadpdKdkNHa4nm72sufzevwdSJjRTiiHm8zB8atEsAZ7svA8zAv3",
  "key27": "38Ru5oNpJ5VQNzYL2RCaEec5LSh9PTenmYcMFAtfStDbVndPRx9XSuoBtHJjiXiQrLiYYCwS8EWHwqDDmUxF9ueE",
  "key28": "Kcz9QCTCNdosBMdcqCDAx5GTprjnM2pkDTMHx6qACrdBMVZYCfZLPU1hJUu8iRxhhuqk7Eso5eH3Rz2BVhdD1yr",
  "key29": "5CEyGXwQ27dKFibjLo6ApWaKnem4o77JmBZ4QSChd1L3sqodmr6RF1PWw1zmhTJMrPK2Z2BMN2E26FAGuEbJxZeh",
  "key30": "YyLjGGXnLyvVfcMvWWguE9Ybio7GtyhXxaBeFmQzkuoBgUqrrJzqQUetpc8ysRpKD2Y8z2VHoLC1ZqMmyn5cjtX",
  "key31": "4qsY7NhVFbFxR9gGXEtE5cJ5Cu2TwD7ph43hXmBmmWxrgGz17UoheMwg6vW3E6qzgnu8t3tWXK43wt4otgThjut5",
  "key32": "4QqzAiDHEFDY34rkqiWw7t5UiaWYMgSix9A6q3Crete18E2fLhpvZczrhBwCiNY3rP4CmEHQenJAqT7WdndLZBad",
  "key33": "2eUb8KvBEqfVrUwF7WKY9wrXLk6mgggTAdwA9bX3FAmjzbbT9PHqWeGJrQvMNS6mTumfknSEBNJug21RqoHVit78",
  "key34": "2vnyHFf4mY8bWKfHbfAsLJeA2cMR76ipVoxo9EjbhFrfF6eS9LLfsrWwFQda8qeZXKEVRQt9F3dvUx8ZogphJsvf",
  "key35": "ZpchBn1q98zx2Enj1armD8pMzuJ1ttkcwCwVq5T2BZyfX76RRWznJEbgYgyC4HjFr9VzRi8rrMKo4e7Z3XSJW81",
  "key36": "2LTCrCUbwtJEnHdcW992LrhkqhaWEcNVGQHYxJRhXprsv5qdzbTwrrn6Zd8jAjWqHtwUPezoWDqz5MRnhMriRtHa",
  "key37": "3cbVdfS7VUUwRWWzvupJeYPQ1AEX6VC7MyBc85dHZ2Vi9gXFTYtsNNdkEddm3GHE7hkG38CwWtxArgywwZXejMiM",
  "key38": "C1GaFepG4m2XU3e9wfCjJJofWDvDEuPvwvuBwVwqpPTYxiJQCEzVCBDFk5mPdG1RRwxdyWdk2waDdARvDQGxhkx"
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
