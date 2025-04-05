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
    "61bdyVGsJYZ6VhJzQS8iNvAtbs7jM9eXprJcUKZxAtumSMmuJw1Xz8bg5RcB5V5vvT1X7REcqzWGKozD6aRhRsfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lcwi1SihwrULk44jYfasAjKbdyonTj49Jo62jwAMiBKFvPtKJP56fLoGEb8D8EPe3MUuuDJn8DX3qVueFhULNxf",
  "key1": "2kyv241cpdsgsVPBGrjqxpkdFLSPnTZvAd6ztqAQBymwiSW4JaXmFZd7aeM7bg1PqkCTRiJwepn7W5TMevUykTJP",
  "key2": "4yUbPHvSU5DXSaeXotGL6CpWJjWaQa9mC9seD8AbD9UAuxfqnUhqatD2ga8XuGSMqWLiw266rHqNnytdDvH6VCW4",
  "key3": "5bL5ocaWmir44eswbXh3pbxFg6ZUaQs1Nd9wCCkjvuMt5FTBHdzSYGHKLGWsjWWrtAaXVou3EbuxKGnLjb86sBVi",
  "key4": "4te6thopmjc5h3mJRzhpPQSNUbHXmc8PFRjonRU1mvamk43sQu5ULzyfi5oDK9eSux1z8u3wwPNqymer7Q4onqD8",
  "key5": "4vyYDeaSYtj7ADc82Qm2QAsdEn4uHj5VBQDaQacaEkn1zwwh28LzcbDtJAKjpB6k5cvEkCxHQ8A3mZDiM1To8rJU",
  "key6": "aDUzTsNssAa2ZPa3ZmY4wKudgErh3NiMnG74VELCRFS25BD7YSmrhtgZYXpoJdarb1kmfZLZcBNAtmUjr7zDMpb",
  "key7": "7fz1Nf73sDjzwoWrYQjP1SCBcmMGbdPFsVeTPeW4F5Zp7e39SHZD7MG8sBJpaNSxv2ibx3mCYdGd4AHK1gMhBBW",
  "key8": "4JeuyRgLNdQp4B6z3ywcLXeTWtDnvnPKyxoetLwZP35LxNRkgB9xCk1KrJ2HUspSQTiHfzBN7XZryaVNSjasNKuQ",
  "key9": "3SckAiN8tq9JqMoTDZDP7bmCzzZV4kWNzwqLQreAn81dntSX7WFRkSavb971vgsHTHFwS4hNNEcAzidwcknVGLth",
  "key10": "3CoD22gJzShj7QSA3jpxcRockDmhFtafZzza2fH1JyK9FL4W11gg9VcCo4y3KRTieN4f7sGd64f6txPYS1TruCNn",
  "key11": "5HHQGXgRt1R7yrJhEiMRirc33Z3CrnMgEcLwxJRz8vhehP3jhekpaynD3ypnAz3Prm8Fn6Tca3JQjnYg2dxDxUJZ",
  "key12": "2YSsivbNejm6ADxzVzeXUoz5XRQjHWtsNnPQL2Q5FviatP1hy88QCHDLuUQRjhwvfRwLVbQMfjmnk6UyicdEov9H",
  "key13": "3gJcaVTrJUT1Vftudh9SujdFV6WHoJ6US9Mw9ab2ZCDCHRHq1AdwmXrQNDtXGwkK1Si9eNFBSkEdq4F8XbQJjaQo",
  "key14": "4gtc7sxYWSkdkRHKWQSPakkdeJg89aiJ5UT87pHY7xPSEQ5w8E965kzgpuxumQsjb61e1XBWm7H9hoaR9fJMXGtL",
  "key15": "27texUyYLj2xVfVmF4Ag4a5YaCGKqvrsjkBFTawVvXzmXfD9nrSNvTvTD21rV7BuoJjUwHZRZPeMhF8Eu2WLavLt",
  "key16": "2igkHSEkX7fggcNFj3FiYgbmzT8gwUBpxphSPWmQMVhtgsN4Q23n9apoirWyhUceXoXiWAxcUfmAgyVneh6EuC2h",
  "key17": "4kJrChX5ik2KKMaLL4F9cNRJCSe7pd7kTDe7iQUfNj1GX256MUsf3dJUPkA8YDjTahrUN7q6defXY5p9z4ANddPe",
  "key18": "26UE3cY8z6Zm26cn3TV9Cc71X7H6uxWkuCDQjd1juU77QCBHscjbaeGxjpWi6YuwobfgfBgg2RRJ39bN9KozJeBa",
  "key19": "5su6VibSXarz3P9vTDuaEKuUhSjPeAdd76a2NWju2yvfdByib1xwcUTa7q9cDJ4R2PYwDEAvCuFpJY635cVrkN8u",
  "key20": "2A7oWxJaxyFMFnhZc2imTPLrFtzK8gZ5VUesUjthYxYcuipt3m435WH9wPnLaiGSvZ5dbCpEjASLBQMKzvLDGMpz",
  "key21": "4VCSYKq189qu8LxPNGiCyhcU6AMu5cU6SvpqQShtfvSm3kXYHnYhYgakekPN9auBa4Yvx4Rc5dEYn7Ak88EygGc5",
  "key22": "2RRXtGeMZ76TfzCM9U3VKvPXDwfwLqHnZyvXbyod6p37Kmu7u4cMhf4Zzxusn4TtEGeyhfhJZZe7AMjZXuFL7qFa",
  "key23": "3HRQ9f33mpihATQfGyjMDdGSSsanFMkpqgvDNy4xvGcgUbSoG99abu7WxFGReMwREbho8VA3fzqWHTKnFvdAyJcD",
  "key24": "ByCSJqo6KbW7y34knhBFfXWMB5oxHQQXE8FN2Xthk49gW9mpRDWRFsGLjd6HeLJvqpae6eH8Z6oqGkxT5rwPMcx",
  "key25": "gYFHEsQnhDYM6AJPepyKCnJAh46kck85jyT5xS3oa7VDPMJ9X1HsoinfRseUcjT42iDJwvTNzWFt5fJP8uYfgWf",
  "key26": "2iFgoxy6FUNfVZUXHTFuWAEQWNSVy5Wq8Q8E35qrhscwS4Zr2jXex4wniPfqjJHv9LddgGWXt9eBbvkvcdFU8dY8",
  "key27": "5C8ZqxSBCyVmF7GhcLR2pUdXUc1i1bdDtCJPxXkt7U3Ar2ACQGa8KRVGwQXwjgjijwfhm2vAo2JdWcT2oHg2igG1",
  "key28": "4h4RekKGvAVvEjfdLUFAXasUcQ6RfFeubZE5632rAsyt1RvToNaqoxLDe35sLnpph3THwn3JpbWmzboDqqnG1UDB",
  "key29": "3Eb3x8GaQFEewyopRjeSnnt5g8ACQkvrX6Yz6pKqWxf9BLFHcmURineQTpkxTKB5xxJ9UoK9W4zrYHFdJL1nuxBA",
  "key30": "PhgkykbtKbaLNhyGWJriiabkHXyoQfhZKU918deRM8RzmfNuDZUWZ2DTPva9bjbpZDf3BeZ4eDRJmJs53o4Ar9D",
  "key31": "2vyuexn52sfvh4sA6xhSDWtQ9vwfoDbx1XYSC7Xrsf8kgoWGuf5uUKjm3sZy1fbvmgxwQY4QU5ZPJJ1WEtLb6NJe",
  "key32": "2hWE3jV3fn5tnTPKpZQsfSoy97V9TutwXkuR8SwqZfYck8M5qJijAH7sNgzgTdUqHkRb7i3F3NakwWMmx1Vqq9Pf",
  "key33": "3H7ApXjBHMGeitfzMCQBNLcxB4MTatxwAYE17nj8RcxE3WnmoDsYEBRqnBiox5Qk1PirkcGUces8C5Uw2gZQQRa3",
  "key34": "4UrF5ZWFCdGaVZSVf2FEF6q2xG3H56S749NkyUepVGKnvmBrrKpArzvdTBx3BHVYRVoQcSXvjFCizK5rbwar5aJ5",
  "key35": "tGm9Niiwiu2ykqpZa3r8YAwCDfA7d2RyGNZHdGb2uFcfTxPLQ4d2Uai2S5Pyha6v3nGraBHtTau6cZBwAbybdtz",
  "key36": "5VTn6et6nBdnnx7KfP8YAyPZXzXWhVoMq8UXe2mP4HwK31k9VysVScNfCAJJPnxcHz4tWz9Q19T9g3b5vEtrKHwa",
  "key37": "25TjQ1cGzuMQvoJionCgyGbnnqQ17wqTCRRpMK3hVjpA2sNEQbkqXsxdzGrsHwSMA6Zdx7fBggEaPkoSR5YKKrmu",
  "key38": "3GyetkBY2DcYVWAFtsqfuYxzGtqAUWeEWNkg43jTpZVE3AkosA5TZrvJYjp3ez5H869D1hm6jhRdRQ7gVykLeF8b",
  "key39": "2587786haBttkZj1iSEvm1wnMXsXVGY9Gou2H4bZPtNrFXGwLqr2m88HX4JNiS9twdgcaBiPJj98jkuTTKFCSU23",
  "key40": "5XtNz52S7ZPfQBtn4CLwMnKUPGQJRcMwt2ak6UghLbog7Jk2Ccfy7n9judeE6LdxFB6aFWLENTf173e62MDwFjAC",
  "key41": "55dP8bMxjRSpAphBB3oSy7rHJCgjSNfLCk4Q5fT8NRNF5ieyLDuL4WSxkCtUcER7YC5NJBRd7tLUZtjJju7k9hGr",
  "key42": "28CLYrzE6d7zWRNoU4kYcr3UpF4WVkjy3aJJiAT2Twr7EgUKCch9GLPdbaCZQKfX7oDeQoAjZuVSE9y5VqQqPPaJ",
  "key43": "5KLoSS2kGy5NJu8CWJ2QH9XA5KFmaby4V3x9n9R3bwjD9JDHQ45GKAwzJTBTjXwbk7idVrtmiZNX83UeEbtZL83h",
  "key44": "3hagNgCUhBYdaVMoNnBLTdF5hsUEx5DPhA1NFtZqS9d3j9bFNGLKTD16hzTrwLU2wqf8mAcrwvCYKRje5ZY685tz"
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
