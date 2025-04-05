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
    "3qLRJMWo2GR195TUgnJjDgm6YkCAi5ZNVgx7Ej7UzQkNy5cULXBkZA4u7Fp9vXqAnXKWwEJyt8hYSrfXH8VSjeiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SthXajDkzwkPTgYZL975oyNwvBTKEH2yhTrAynwEBozUWNFpaiynVM2Ln5y9YqS9W9WwVy5FF4UkxvP53osRejh",
  "key1": "29NXWTJHy7tWWCdBjSPusEeGYT5pjCdyN1y939ekN8XAobZ7oj7nmUXBJLrKVFnTpnJdE7vwrPcwiC33NdxtVxCd",
  "key2": "4zC8Pq7eDsfCQ5QGaqPuBvdccD15Va1GR2hUHaBZNCifBSB97K9qaAsdNmqj8MEeHhcB6LaPbxHxzvFefD1mnnEh",
  "key3": "3tTbuaSJyo59Wp5h8AA6UAwhHwSpnTMDj5YUHrsPPCvEwzrEbiieDqssD4ThuS6BXQCBd8JyNpgkGU6Qyo1nryH2",
  "key4": "4Y6dkkBqRc1tvbSuM7GkJwfaJd4d4JGc4jLziifsdpsSuntRBWbvn1KBjo8FCUMm2tZKRywPPavXtVsY9fPwq9Np",
  "key5": "27ACLFjKAFaNFfb8FqXSj2WzETX4kc4FACYLYP6jNZxJvSt8XkWREU2woTpTRYZZp8JL6bFhemXsY933zv9EsPYq",
  "key6": "3jDDXfpijRSempdbTsmfSH6oJCgKRWHcqJZA23JV5fj8GhgctwUZMubTwnQasZPVSx7rHxBYbnPrHAg6mFW1QfZj",
  "key7": "4LnZ1eN3uq8d1Lemy9LPqp8nsTQSXcqxhaS6vD81QP4madUqQQwbn2HAuzyo6zKMe6gGfBzx5Q3JiGgbbue3tNKo",
  "key8": "3FNbC3MiAfDGAD5a5su4qKKvcq3ShkZyBsGUhT8RyoiHwiCeXYR42y1xaWN86SN7PhhxwHbz4V3R58BiRSUF3KpN",
  "key9": "aR3hSYhaaVJ7FXdAwsxyu188ssUF3XxDKKHHx8JLGgDRXiHyx1MoTRc8QdSFU2Q3mLXRgeTuJkbn1hc8yQK2Jsx",
  "key10": "MoLfFpZTdeYTd9s7vFP5b381pkjtZjrcXE7SnXbfk9c9MyKDZqcAcivssr5erqP9sXcwyX2wBJax7KcH8KtNm8v",
  "key11": "2QJxBpbRjoG9SLupCJZjiZScHxLzMiqbYwTknVo2kRhWpRUD969P3xR2LsNpVrGojFohqDaCdZZYkCNj7wkKCWd6",
  "key12": "3Ps5RPrAbgEpstPHsLTS5MMKbAooUPyh987R9L1YBMtHPyw25U87QcFaqv8aBZZHBjQw6Z6EYqgjFzenHzwc3hGw",
  "key13": "5oFTAoHqtjRfCepxjFQgsZU3EgmgBPSquWVNa3fQ3ajnjbgUqXey9yJ8vQiyJZWgZ5P7cPdjeBHZpRXQiDwiWGCZ",
  "key14": "582dbLKBR4CK8o1AgEEtMr32iznArE6A2gJPGd4QiNR8FuTesKWyx5nezQVF5tda8WAYj4N5xES2ZbXYDEMmHkLe",
  "key15": "2hjeW6aXQWZh34DEz6ukzoN6qTKRuArNAimQnunbXAxxxR78fG2vxb9kmRJQFD37BnPjEbyxTX1RFSvTYh7mhhYu",
  "key16": "2FuxfxjcgPx5FtkEh7j7CUpFU4943HcA51rq9XSij2qjUfJHUkzUbxt5PxvVuQ8sYi74JjkGw6Tef32Amf9pLw82",
  "key17": "5BVSa2ZVVjbQ8bdbPqGYtufRunNTLsRkCpu5i2aiCmmGuFJTHwfpF6wrpzBwzMyfkyjeoKMMriWBnKPcFhGmst9A",
  "key18": "3bZVLxepUzFpjpoKZvUXctKWMM4FvjHKmrNMLmJZtqfK3PRNXYzziTvC4yJMYMYPnt7WzeDdD95otosDC1jJFF2e",
  "key19": "8mC19V4BBD7tBu3YvRLH8sHfuu8qyMhfCFDUckzzmnnKFNosAGJjTx8mYxJncELYG7cdxukoxo6bEBoRXuq9hTm",
  "key20": "3tkaKYAip9oSbfw2gShPYV3RByrXwX7gjGbjrj2tdpNeu6i9J6sUmatnVqMm9R1HgTaoZQVyeQ25uptCA1Uk2TrG",
  "key21": "3aV7TfkYqoT9BYTuV7ZC9gTsRGoNd5brGjSbXBaQZrbYu2fuDCkAdHbQ3oUb9KcPkNGqNcBCdDNr8TCfY8bDSjrm",
  "key22": "23QKB1k9Gycidt7ZLS1r9n1fKT4jZB1rr8GsLXWTCeFC9SWFAKqDVH2LRbwbn6AYcmBbhb9PjF3MwvjRKSByepnK",
  "key23": "5xGxRnsgMjW5KZoTyXAQz39hTwBJc7kYRtf463BtKn2SRYpjFEvK2NMEqJ3GuuSR7RdprgetUGZ5ZSkn7mYbLC1a",
  "key24": "3ubEPCvDeEWWw7FuqqAMKLA3Vg9KBGssSbHHGL984piwFexFdW5dnnGwxZLNQtibQ5giaD1uuLSj17rbjRXQUC3K",
  "key25": "29V3Y6ecuDhjTk2W48GN1sWpJmjgEzWW2mbMBqwV8MmaQxjixsKqsjgHgkTUHXgDj75YCpGhsnesUwaM8yVnFjkt",
  "key26": "4GEoee5z5wc35nWaRaBYeBA5ENyxgTRqp2gzDcJGLbY5j7htk9bP6HVmRTc36bdqGCWe2zBMqzibiAznAa2Pc5Fi",
  "key27": "2ZGBbKW6FqddRbp48FysgRT1aZYZe2BfGRSX6zKcSFtPrdsp9pfoNqvDKNrV8tUhzs5uZfGH54m6mcYUcMduMhiN",
  "key28": "1ESRMUuexU1BgX5MFXFQL3ode3rBz9aRH1HuyjLvtxNAWvPdykSFeQQ6DEtK3aTsC75YE2iTwajAowktMifkfP9",
  "key29": "3CyRj7EaQe49n7QHjyksN7UbkqGf1zSr5MWJMXvNDMvmhRbZtgmNNhttQHpsMt5Hu2uU5yfZgs4dw4QCG8gwJ9DU",
  "key30": "4C71bKN1QYbtdEY2VSPrK7sMjGSYTZ7xBT8jQFUvdcVosQ6VhSezKyTqDPx7cYCSvYvydWvep4cYbaTSXoNhSeA2",
  "key31": "5fJR6oCUDkr22dHR37cFiJ5mDTWnbbtC69V9Y7hAhRdunUE2NNe8RBKMwWgEgBc6kU5zsWK2aqN5KFctbWAWKtrC",
  "key32": "2SsUJfuPeaXC3E3iU1G6mDbRDUHSePFz6xdHsTCBGVNhPfi5DDEA9gNnfWaEmA6TrF8JBNW2Va531p9qnFz8gbEe",
  "key33": "Xp6mAq1shaYGEYzbNpA5VWqCwn8mGVwH6DeLf8ZszMSNPRSkgMY3ENaHPKgCmv8j2Hcyma5U3Gxrvta9aAdf3sx",
  "key34": "3Lch3QPSD7M7bmE3quDesq9Rue5TbDTsvwnnyqKN8SfW18GeBjU826B9jh4CjZ2V1RiCHCC6VB2ZBfJSGCvxSBPK",
  "key35": "4QdHGPftg2uXcThLhsdsaWK5SQ1SyWFrRpqjTfKAd4wgxCKiUKunBxQBvvsoWxhuY9ogG5iF4t8ksReqBY8jeECd",
  "key36": "5Hg4E9bGa4jS9ea7KAbnjhsbAE6XVALoxQ6aAhziXFkjRhD1AeJ5MMqNFwhiAv4i4sxt157jwAu187dtsdgLLGX",
  "key37": "3tfcPjx4DevYkbmqngZprFsXbRNwbJwLkUBmqmu6Zb95VxQY9BcWtWTNaAp4ihqRBvjhvcAq2JkfeSxmdXQydCv5",
  "key38": "4ZZmcBxHmqdbnEC3kNDx6YsjR5AWN7ueD83aiNAHJPLp7reYkeNvuKnrcYFZVYXWx6weFsPNuqU6ZHdESu4ojuD5",
  "key39": "5mDre4GTN6UpWNE6HLUphft1xSCjgX4hLcTAAqUUZ4dASfQc6HASiKKnAET3qJZWXzmc5uLgKW11hMAKfQnw7yxD",
  "key40": "2utfVzWsNgjXeWF7rT6DuFgb5BVpday5AKWa92NtB1zc9yp4WV2tBDT475734VRNZkpZttaSaBGpbhD7wkowhisz",
  "key41": "539BcqgtGEM1H7iTKyG9qyHFMpeiu6cjoMbJPjZhMj2dzwHvWzxFhMhqno3ELw5ftGrNVM8Cjd2w8kMq9W7rhm1E",
  "key42": "2j5xsP28Tsm3izZJnw4iwjv6rHwA2CMbCKvUpHTm3ezDjhTePdVnyi1iEhWinqFkmiXx7uoMvJeahjM1gJuWnvGY",
  "key43": "2tFTHAbV4jWpj5ySWCHBzF1GTQJYLH2HmRJSvceAG1mNreTWkLbFuxCdrKqsmQDHaqKBVUj82j26CkcCACSout6g",
  "key44": "2j9wncD5U79nzn4E3Egfd2MTVxEzTTvTL2wHX6S5jMni7vM7oHnfBGtbY1b24ib8UumQHXiHPLrqFxR7ymtT6QnJ",
  "key45": "2pUgaDiEYHc3w2ARJQ1z4oZPuWZot6TXBfx11BXg5PrUsY7jQVqRcz2vwuSX3V19GSeUdMoeFsQPkKmnkvpWvPrU",
  "key46": "2baxLcd834smzHdB7NgmQFWec1EqnBTRKJPikx1Aftnzfr4J6MJBSbafMXWw9d8nFg5wLqFaK4GSxVe7zj4Ff8Ca"
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
