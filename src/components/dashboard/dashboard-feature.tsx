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
    "8APem3WxPr83N7nzBbwLJMnFMGxfgNiwi88bUmSZpyZvxVUxGYowyQW2NFWyyamyobHWeSWkna36iP7qA8qgM3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gkEML733PEKvJBgbdy5kGfzep2C52Dy7zGLNut6np1r5VRzmqYzeVrVSKMfX4T5iwXL3qFoZpAg6LzbagFCnteg",
  "key1": "3CV8K9bXavJ9J2mBQzQuxcLmQS4BCBqNp49ZUrgzQvAqewA6uZFKRJZvc441rpwX75G8VjWq6FfTMZpzt9ajCtG6",
  "key2": "2kNrjomis9j5vLmLTdXDbfhp272g4RPEyU6J2uNBCein3DMp5WzB2coqFPkoFkkSmZZryvTCZih8zTGw6ZT67cZo",
  "key3": "3vz87GEC859TAR465CC7ZFyBp7kWPGuBjWb8tKqfr3V68oqvxkaSAYsKRf3ukocWyy3TqZon6UAecZ8gzVdFobfg",
  "key4": "3ssadsdYTrC6WRLg4JnKaVLjmvh11cUcm4xMc7yrFfoEGWVwkqpPbwxYdvUz8Kg1yFY3bpmFy1wMyrTKxbuMtZZ2",
  "key5": "2E7JkTCrXdr2wkmcuSVpFzuQRiuocCMNKhvgrxdXp4vsr8nMgwceLfLw4BX8n8izFtMgCARrsg8T78smcRjvNpxL",
  "key6": "5d5vD86dpcNbyvLHqixx3qpNK53yZDYgfxcPs5Y7B93SEqbTtYcDaVemtjfDdLxDKy2YqKUYFq5yH8YeZ22s8YKH",
  "key7": "4tNNPJbcd3Tmghz7XBZqvSgRjqcXhquCtwoRyAGCJLfqdzmULsBcrcwmStBFyDRBsCmRE1MPS8ZjmqyN9LS543GR",
  "key8": "5Vkn3KPt28CJNUFtSuiSxvC7Xkd3WwEwR4N4zaWuEzSnXbursYynAuATMoDRzbRCwhaup21XJ4F8LFTPj4Nhut1B",
  "key9": "3cPSeBJc7LHAC4oYXbNHkZxqcwCVGv6ot17SwjpATXqdRq7FHez1eNV3CSG4m1j5xJHsGsVAmyEsPunnXET6moJJ",
  "key10": "3vZBB8ZGHJXQw9Epg8UWhGTNaUZG6esADFRPLJh2geVNAm8Qr1PUC7MPFAKeQ9M29S2VT88pPKoPfD4LwD9ifo31",
  "key11": "4ugGxp3gAb3rxKtMgPt6N3sXreno6qfUvDy5De6bpERxfuXpaSs6KP6WnbFeEhSBi8YyY9W8U9Ex6PoJpH9PyM5x",
  "key12": "47BW9EoNnUxxRUB9eST4UEhEkTTZsW1VHsz8pJM1zU93Stvgp3c64KPmhCGABthtsNhndqvgif6qWncGtGYYaR48",
  "key13": "27FUhtY9i5vw7FWFrr6P9oNofG4hpJFWQHT5wKAKLb82AuVFk87WTYthRtiA4LMEbWJVbwfL1cCpT36tSHSFG9fp",
  "key14": "4d9g3nVwdzfFbgPfF2jKrd5yRLu4BjvLxYtkyYMnyq6LaFeMLhWaAwdH5y3RjBgGk331fD5ncQvhuJSdu9WxcQR4",
  "key15": "3jFjCjnGBLghZM6K35BnpbtFsey1WhLSZrDN6qkdq67L5FCnXcuYsDjYua3BpiSEMhTMxWerZWzZNp2UccBgm4wA",
  "key16": "3A8WirTWbwb6NHMfuqqvqnkiuh7uU71CzkvW2LU6ZLJpYkcvfBh6oLA4ab4swq1TauQP7tL4S4yHoGSSufXT8b9P",
  "key17": "3GnE8FYdzbd1PeunKSxahPRA6Di9rrqv6u8UCjDBYJRYMcXEhc4uU426ZZUGFfJthNF1EhMFetWTHtLuDFBkUhjC",
  "key18": "2br99N2gCe4bZEYoK15r7BGUCLjC7kxF5EKhdjWhgnLVyXr5H3L4mCCeKBG8SFta4JEUWYQH28QaZBKUCnjq6mDZ",
  "key19": "2usGaUy6ToV2QizaCDVB9cY69ne4mu7RpQMPKMvdLjf7KfemTENZw3uSWn3VsPpZsRQafZVV5dNoR9Z4uz4kSNAm",
  "key20": "3g37aYQckpXy1rgcLzJvyjqfzuLnPzdprK6NYL4iiDYbPbV8om8YtARGNziCUKKaAFMtxLGeFhJXJt8S9k2QtKd7",
  "key21": "33W3y34LokPdqJfhqTad8nUAw6QyeRy3Km1q3zZZjARDHcSDbMkm5wt6P8WXMi81hiXD69HfZKqBHjG27BEx3EnR",
  "key22": "5ZSuDtPQhXVbYQVLTXbAQCnV2fEtBkX7ocHndkBm1T2CVBQSTT3enPMBePp89MUfUzg1yiW6iVfC96DNSQbrfugD",
  "key23": "5chFW9gy3LKZonRTRrFvvVFL3juLHTJdBAkR8mGH51tN5BMgVaDWRcPmouSTUaj7hfWqfMZPME9BGwYW83msLSK",
  "key24": "2jmiHqFvNggrKmfeLobrJYZNWAvUga2QyvHHRR5X6tUnMauoX8NxTaXyhjq1aLSTQGsVQZKwVCiSg89Y6v9J22s9",
  "key25": "3Nw1kAoxUiXoWtX2efLMsBtCmJwvi5TRkahdZf5TnzVUZFAKvvCJDdqySeLEsw5yeBaMgTvkLgWn6cEgsy5fXU7e",
  "key26": "wrDkVRvWyRWE6mNGD3PTLtsQDtCApda9tmVnvtXAbMF1nWWbQnCY4j4LcwzzvLWgnFvZdyuYMvK5FC5j47AbwPM",
  "key27": "KAeH2FnaZUzBY2DZ2DK4mZLmSJQ1MQLzhrpZcs66hsTqL5RjvKauB4GrHcpqg2Zy4UseZE3JnLyBgNDFU9TRM97",
  "key28": "3aAmpkuqvEq9PbZrAWNV7WZTwcVnNrf5xmwP82EK7Skcc9czwiraG3pCg4bPgWZpH25adu8FA9xbQorXxsi7a6dG",
  "key29": "E9q8vBS5Wj7mMa2aF2kU58HJ5aUNKsxQkoeJc6RgE7RLi9NG2Dc3eZDRDQfd94MrErPVJjef7aveEsWBHJfWwym",
  "key30": "5fXJiR4zZ9hDKqYw79trN6Vra4Y5GzxDLx88DtUKP84MopktAx7xpAZ8Zgfm3rArDUvic2YFe9TrSfdCxotgYbkJ",
  "key31": "4d38GUysFUyqw9kgeManVohj8MrX1UtLnM3Jc2kPjpyypfr2KJfvkv4d1p1XYHgyQj67ztxJhAYtmKCefucToy3B",
  "key32": "3atHtzhiQcMKrQopdhCinTCKBQ3ojWu2YcqnqwRgZRc3yyR2MS9sx9GCXn8MNniB8Ua9ZRpfJMDgGhBmoG7h671w",
  "key33": "caEE2k2BMFt1gsEoNnmBXBQ8bRD2wcyot6v819noQ7Neo2EqxpHU6vA1X62a7yAB76k561YfdCh4WRBEm4LXXXn",
  "key34": "99f25Tc5M7Lm3HZjSXgtKw5iJ9pUhpTShymZHvMbBhoNek9xybgijGoSHtxTvG5QKJLDWVBzjxFyuNsVUJmWGid",
  "key35": "22vu45SzreeAv2p6DKzLyAjLh8p9ER8C4yDeTN35WxcXRZSnuBsGWgNHNaPrUaBMubAn8Y9xhyaowwLafXJ3E2QQ",
  "key36": "BrZaXaUuW1KXABVUXgDTBQq3Gubc141Tf5GVKQYNiEAiJQ4npdVqA4TyZs4asLTukjYNsNzCsVgWvkCzUTPGbBs",
  "key37": "5imFJGkX5ANKeT1VuhARFs8qTBNoNLEWCuMMwBSEWKKCwsWrw8Cqy2g5SytRzB7rWZKvk55RYt5EfhyYyHHf98Vr",
  "key38": "42deAATMbWLoAKXbKpRhdYrWeevwB8RUqUd5MuV1FFhtfcdUomtsK556E3Vy9Nzf9bJQJCrF3yX2oqBhvoswNYmh",
  "key39": "5hZcw1G2rUwzfMuste5YAd88icT4LgFjsRS9Cyak1KU8LRcbAASc5MSegeH6oj56LtshJAxBD5VubYhXmThKSMGA",
  "key40": "3bhSaRxz2vQhvLJ9QbqGwX54hHufZRCjC4NnQQ91RdQ1iHY2DmDcZgaLPUDLW6cDpKUYwmYsNiefoGPHCv9qTbLf",
  "key41": "46tRSWiaudajiTFuf32b2FTpAbzyNzAN2H5is5Mu5RiDndkocJCdSvvLhbmqKqkWRpWMpEZkDaoAiBHurQQyk1Zf",
  "key42": "LGvHMWGEjSdqyPupWUYkS55SdU3cq2aTsWuDGGhTL1VKBtvsKE4K84PtcQu8s5YTmYa1nvMLA6YheKM863qRvjV"
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
