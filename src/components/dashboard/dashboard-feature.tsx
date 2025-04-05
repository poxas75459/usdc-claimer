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
    "4d9Zgso4MpBw6X44wqMgMGSEBdX1vrKBwGzGucNrvJyQz6ksWEFkjvz6uMYitGqCokjb7FNnU47VM2UuM7ygGuh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CdUyKasRMkYserzqaMk8oZrFJxhX3Rb8apaK2KXadrnZqwh2giYFwq2mnv8ZjKLVjDew9GwcecB3qVYMNYNHXKB",
  "key1": "2Ba3s7qxi9mvCWiLvzpEfQ5Uqhr8NXr4mGgy6JNtKPuJgqRrvbXYkLuSpcvhbYngA56Gb3s3UdiVz6h2kzV9BeZG",
  "key2": "5LnECaoCUsWb7jB7PmjFFTcz3wqnLgEfhyaJHzziJVTjJxMTfyHGW3LWc9fRuKJGkUhVkThfWhDUh3EUj4U7smPt",
  "key3": "5f5K8SXNBDXbf7kqFoxs8Fcu2PCWkF1PSu3gZnELBx8RbKmAijbkVYryeBEE2b9C9Y6BrqG8Vo6tHcptRp5JLG9A",
  "key4": "4witaE1xeB2aDhegP2zairiah8GhciPsK2y32Q5k4S4eJMAggaCp2gjxxZMZM43jR5dk52cZHT47WKYK9dgLMGVj",
  "key5": "4QFUedBP2ivUvgusjcR12NAW2e3cWyDYTSkuvexdeQicoLcc4hqfQ62T4oxJSibUErnGDDZ7XLVuNXXvjrqz41vD",
  "key6": "2YfUFPKdhquiBtDPkTB6oTj6JudrMMgRnF2DbLCn1GgseL55P9hSxTZaTSBFB5zmBM24kEmmJ8kmsH285T1HBbcX",
  "key7": "39E6rCXKcMEymB4pywRhzeCJovRkknNmk6jukMh6tQFmqMNu4iaQRynHjk1VBFg22fp7mU3LvCUiDhVdMuTHkqqU",
  "key8": "3VDeu1sAUNzNrT7UT9hZAeiijdE9ALwBQdfhwqnLsebmy3ezXeMxbiswDWYRAx8pFNjhdeFQiNF5VW6XsW2zd53",
  "key9": "2F87TYZ4XBn77FydjEcv1hLkvnP5yR1gFXNhxjxK7kvBgs9WHr9WrHdxLAPsZ3Nv8TjrEgKjW5nHR8s9Cf2KLGXo",
  "key10": "4y518ZgA7nCGkLBZwH4G7R7fcKkfu9eoF6Zdv1Joqt1GRzNMEcbQ4iBEfrC8ysFXijP9fHFzgNgz2GSxGn1TP4qj",
  "key11": "4aNWPjk9ti2KarXqPn1JyuxECkchydGMzYLL1X66brptZxhBnaNZ95wZ5NqCuqbCmPzh4pP8nhmUFLZrucM4ZAS9",
  "key12": "Pr7tyvRNjBsWn6KpGhwPETMHSq4ijPPnd8gxThzzz9XWpxGZhRMJ8dfT8vuE2g2GZ2vNFFdyn11hWvXXEGvrBPZ",
  "key13": "2SjdFm11swuCMQa7bfZ5DAinHFtJk2gr1vDTKSiUVBcQSXxpjHZoZfAQEbQ1vV5oEAiJCmi8HUo31bEPUFs3Yeri",
  "key14": "2nkcd4xb5NSbRw6qedAX71yH8fPDtSgSzJA6LXVNeYzgQQZi9J5T6MCjpxK3MvozpCppDFVRC4y4SBGRhUqVnk5A",
  "key15": "46Wm9N4xTveTMYPL1tGidjSq7rkd1k9HwxNTzQMLSMyEF9YjgkZWyd6T5QtKwfkKZkvh9YNBV2UPwv1Yf3QcD5Qe",
  "key16": "5QMyhhcuM6CLZTqVPL8T3fFMRhQSTtXmZzRhbJ4WvnjapD6nekiQ9tZmCyMNpzstaffYPB6PKEbL1UL1GBXxDsi6",
  "key17": "tW6ZuhmwLQ23csDWLvkmoCf4bzCRVXmVSC3jpQvqKUuPdNu4r8WcF87zunWyKD2fkJuTaNojs4Zbt83ebYvjFQy",
  "key18": "3gcyTXRaeBcWNrzzc8dSRn496JeckGm4adzWqBz9SZSuJtLGyvv1G3xLgasnjxXAvwKiBPSUrAWaBgPZXSvJoUaJ",
  "key19": "45epRFbSUmiopfPU3siF9gVEYzAGgt8WmvJzToCh5czngUTAv7cM3b1sSWJv8VwN2Q6vKEJYW4w9hTQKwM49sPxn",
  "key20": "3ut4AyY4gR2nZavQ9vpt8AFN3LAuMzmg37hTirZsfqgicjk7jsGiXwmqVLAGFatft2GCnghiG6QsuCtFSL8DZTom",
  "key21": "2gAosGAiPDBWszu7joPixNUZ9jqVAFqhfY7EWQc7DKf9e2aENgpq5hcA22YCHK5iLXBLxYL9SkqWp3K37AtzTS45",
  "key22": "2p334dnqgBBbpMwDN6vRDQpXJoWTh1obFpyBeLV86KVa6xekafnSYUiubznSX9frMcQPjkQgdQ14ZPVVrmHCsywy",
  "key23": "3rLLzKgHiT95yjFcgaKLv3mXpcfNqoJsBTR9JYNtirD2T9tdbjvAXFMWyXvWoLps65LBzEF94s9Qq9edZmwYZYU5",
  "key24": "441k1jCm4KzdYf5AU9yXqCqC7DogTRRjUp5YPfk4r7NEDQVNhZJPa7nM8Mm6VHM6SX7MeJUDqCyM58xyDkbJnzWU",
  "key25": "3eRK2CXDDr3QV1FmqoPdqiCSCafAjSNr4ZRToqvi5k1QuJGzB9X3uirggbeTb7Fzq6VfCihyNyhi5LDKyPe6FBKB",
  "key26": "SDrVnZDQoccmmCKh9Wyb7geH6qaZPmCfN3ruWQX642uGbxuD5Hgi3WD4zb7rzbheBTgL4UnYQr62Vb7dLjzituV",
  "key27": "4LXxRHw5fHcQXGLJHf8SDCmHe6uMv6qxciAhAC5cqN2J3exsifeWR25JFCajf7SWTTnfx3hSRyQHT7cxRHggT8j2",
  "key28": "1wKsH7XKA5fLqP4Tj98UV8VSZkSWxz9H6JCidFYAWpzJm2xDNAsSrGgMFGebY3KgjmdKKxJSjYH77z8q8Ljz4uq",
  "key29": "2MDqubGtvrMiz3iSEhcutydukYGkLvbbv7XYsTdgJhCdey3GQEPJkrYE26BvgsyHDktHmfWepTfmtXqmwFmaebTm",
  "key30": "5pZr9XzrfLoUc8543y2evGZWDmxCgChBvTdNsHUbjTCaKqVnpg3bPnBZDj2heGXc3PHSLeYdo9nFBPooUNTWpzvC",
  "key31": "3v1NXzgbK2x42NeCzHr3zPDc7J16ozoos8GafchcxdmX3VBbWXNPBQZyvcoEE5ZyRRcQX9Ak8ZF6JUtGWuNYRKAF",
  "key32": "2HC5cmUiRdYwtctHWyaMadqZaBUKXjsDijtEDtixvsi9LtToBVbcW5AHLyew8d4xHQosXBzY3Pge3hYgaDZDK945",
  "key33": "2m5kVdeTt66o7v5HUd6DTia1MpWzK2FXoMZN1qiPeAQQZS1u1VxSVW6HjB2CMpkso3Kmy2XBYMeseAcz7CEy7rTV",
  "key34": "62CR4E88jFarvKPTiD9hZM4Ak9rn6oiJSL1t49jz2NVPrp1KshEEDPkeZAoiuR8rkZeAyiEvxQtVLKRWgjp8hn7M",
  "key35": "bYph5YT9tZWbpkxLgvHrqytFvsq5hV8Wwh8hEPKHYBgfVywM9mbjTKR6XEbsPogrLK68zdoKK5VDe2XpJxHxoSD",
  "key36": "319do4BQgUxGTBEkfEgNDZ6jnmKAsVhmT8g9PPYm8UtwML57PgcYvdaav3m6V4hxa6vVqu9WsTZSYBZavQz6CakR",
  "key37": "qhNKM3xYJYRxdUXUwajStWjQGuAdkU46vwqfVbA7DRwKfypih9cTcAzqg3GtTP3mjUAnxi7kteZ2LJH5ufPFJGL",
  "key38": "2UACPP23iApAKsTrWeoXPB3cWjjB9QCDYvFDoVH3ja1n72Zi4TBXPVJLqNw1qSn5cNHcABRyhb5ahqwVdK13NG8z",
  "key39": "4gVyKpK35uAXEH8YZ3gjies4kRRevvMqGGWFdjNdqpowgkvVVFaJvi99Bi6SRiRCNFhxHDagRyZzofEZkp5vYG8f",
  "key40": "3ybxWTd1BUUcut1uTxfXMbPDuzS9T23e3JGB15FWxnQm7StYM8tdn9uDBbz9WtcHP1Qg2YdSmvj2UFhJjPXkC66",
  "key41": "4QxtJLRD1SuJNohfXzhq9TLvcQGAZyNPhVFzZ8vrbR8xV37DqzsdZthKru3gDSAHAcagrLGSpXZVDUcKVQibaR8m",
  "key42": "3vQkVsLXTjMtLpN5wr8Fhh82XiFJUQ5kzYPbtGHkxAiwncn1DMaGfCGKswTygJ2546252yHuHWNHbMPbeJLPTHWN",
  "key43": "2H74b5jxiqxGWajJUyTxUBFpcm84cQ2oLP87TJrjjub7f8jrZ2qTcQ6MaT2KQFtZmUZ6f8khbdiBDD3hJTrTb2zb",
  "key44": "3QhX33zrNKvmQEUwTVPXrp2gdwphkW6eaJkp9y2vnMWh5Wj1F9hZD6geDSkVQvMnAqkxUNQwE3oJGaPheWMG8AMA"
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
