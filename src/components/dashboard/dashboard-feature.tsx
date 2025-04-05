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
    "49bkHGt8AtNCRKmi6G399PYWqpfZUatNpmVpbgxbwqT2r7cFzZQviG4AwNRXHSgAwQjShX4cS9NyodW9rwdDBHxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M6JE3WRqyqcpRS6w3kc6JT5KNF2pDuipjYvHcB4EcwZAEVgWc4qxiaCVrW5Fninqh4XK7uGxMGe3HvkuTWqcmqu",
  "key1": "4duYxSx6Jc9LypQB26A3ghpMNBvTjPTeFGDyYBVyAZnbgKtbSCQsdWQD4hH3GZ2DsboYQcbe2UEDtNMcY1dJk1rV",
  "key2": "5mLpKEjn37m18kHYzzkeWVTEYkbG4EnSBuk7zFVJMbeLSkCLSaQsLvNDwKM84tXq7UqFY5Fcp5hjwXtdRZjiJYnL",
  "key3": "4JvS3bUZud1PQgs4myxbuodYPsi8gcoF8NtBUzvKAMn7whkzPRtTF1LPwCANaVusKbzpqBiGR8RDv3kJansG9SXk",
  "key4": "36dFTVamSNcF9FqYTDEYjigCFBymceHC3CG3WPa6hH11twWUJ3QeXSzdjD8MwP4fp2mFTJywzMKN7roff8i15FAM",
  "key5": "2JDZctBtgTKb17M4wMvxzxzNfeXXSubHs4jJUG1mCpEM2ACUanFtZtCr2zLrJJ7QmcQBVoZ7ksvhMSdtAN8nKFQt",
  "key6": "1Nv4XgZ8CkbjFUFokutuf8V7USXM3q6YSVUk3UxhhXNNRBgXZzvCYQ6TYXjM5EYcBXxdsSoQeafPpXS62DL5Npi",
  "key7": "4DF7z9rtm7MhQr1kA4hN8mpcKg8XyudtEaisrU4kjNm7KEK22HpsyyxSkkAipdpgS7KtUbgCoZ2P4axhiU9v5cKw",
  "key8": "3DRnidRkYa9CrqYGyejMR2F6MNbmFgBSf2gVmWsJWDY3KyE1DQAGQGvHgr8wtEcU3x2CFnkV1NHw66SnsLEwubjW",
  "key9": "4WLwjxa6CAxRjP6muSGN6K3tRH9iNXT1YBDXhg1A7zXyGTt2nb2Gw4RnXt78BQHLe6JuZac4e5eTTY4SqKT2HqS",
  "key10": "3oDVc5RigThBwVn3cT2eF61HYWmVUSFfaVM3sCNkhcPxWoDYRMfgjicdZuwoBDjqWMY7Q9EpeJDE3QygJKCQW2HB",
  "key11": "G5MLqn5H2aC8v987Stfp2ajSoc7c5WA7sGjVd5Wmt3eNZkSsFYEZFm8hWecM5SqCtFbqApcRrDwnvvsBd96xL8A",
  "key12": "2d4NthhB8Xi3ZbGR69GyRSe1VhCwWeT6LdLCCkbm9FLL3pdqRKArXauTtq7FrsuuQgbhRhNV58oo1rQGhdyqL5cN",
  "key13": "5wPEwDUJdSRGYruqtiCg26nVf8xmVGWmEzF5scF8AeYFQ5XPmaQQya8bPWNEqf4j4i37M3LTYMW5EhmYt2HGkWcp",
  "key14": "5zyC6X5fjSvpzmQDyy6NEddjZyvLAuHZSq2Fah13R6M5C89YzWmheHortVYhUQ9bKBQvKZ4EAS47FCVWH3JQQZQH",
  "key15": "2QdkgHAWAnq5CzTf2BhVhyQyBv6wNSwAcwFGyZHSrgphvkhz4DaRjqsSYMBFxVoBH9zpwSBP8vMksdP7Tg6M8izc",
  "key16": "2S7LW2LB5sQo498zxSfoUKHPLXN2ZKP99TtCpPsy9UTEST2UYVKoMKRxbChfaHpQFDadDgC9bRVWEnVuu7toRRfc",
  "key17": "4GWrGYEWPRwtFTUTXDUywRSjU2fgFmezt2boieXfi1C8Rxg9arNgoCXsNAuE9ZnVAAELXZmhn9bwmdMLs6FXhqVH",
  "key18": "RekSYCB1QutZLk16AEDXhrRSRd1FcExB7ZzeqcrKoFExZLHspFKPdqdvTbToKqBiz3ikpwQya8KWqkGd5isLrP3",
  "key19": "PMcMkyb4XfadZkEVBxmFctnYwenWGBH6xpqtdhnJXUB6zb2B9rNCZPrXbEBE1uuuY3vgRXz4ZugHtwNyAZNL54o",
  "key20": "2QLET27dQid43YxXitYSAaKswqH23mXmWvHisfDbdcaRkk5MYZD6FVx8SwQ1ife51PRVByGtXwVrPkVp4F3Npcgs",
  "key21": "Lj3wd2VHWiytJVCz6g6PMk8WH9JDZefp2VohxVoyhBXaJCae2Anzmt37ztCXoA7CzrHzdyUDADh9BmQf4ETGpE7",
  "key22": "3kCX6ByJfRKoyBBjYw1cdQAvNSQ6Ag4fX5M2Fh1ZRFW7oaEH6ka2QWic1QHp6hFj1Cm6aRQhMT2CRLsCk4MQo1bb",
  "key23": "JLXNykJm4Ctq5Pcsm2C56gW8xWBTsWycRLv56S9SYkLJ5WUCVKQDxsdHijUx8SkdQ2Vak5BhU8GdMZJKTEiqDPU",
  "key24": "zXQiReRG77wtY6CBJSDvpTkKRY4izcUrbz9BZ7JgoTAJXqKLk6zT1AAAidTMjm3mWWspSpYyRAfMkj48gwLQPFb",
  "key25": "2hrM6T3Ldw8Z5SJwhZ1Dc3RfJNJqVVBNCoFo4WSFkf7tGLaojjPoYEgeroH2cVjuQ73kkDL236B8DVipWHesfXgD",
  "key26": "65uHLNP6VDyGKZJCAqkk6gbTM1yiuo8PhrjcWdymxHqM4wE3BjGajiV7dLPr4trsbPyTqCWTuwNdCLWrVS95ytFU",
  "key27": "5uEhP1CWFqCbnWN5o96V8zMNsbQkTcsAWzuZTkPZen2W3NPCxcSsXKPs1gNVYrUoh6oNmyRNDmumQtWBGUXXXDc5",
  "key28": "24tygoXgTtM7saQeKQ5uXKjZHizRSgMLeSrsgvfmbc5h6nRnWW5Sg384sDvgYcRf6Ps1rr3gKCUzy8P9yZZw9zJx",
  "key29": "43i1h7XjJivusauqyEpZ4fK9PW2cLnVw2FPxHjXZBXTScCjgdDqtGGhFNzUNNTgoDJ5Cny5Q4BGLPhRwj5vrvfwa",
  "key30": "3eqsmzC2YPNjHYTSLGUCJAdmt7LScWhT2s4rAPHrqsXDbK3RNyPViJrvSgsiNHJLenGLKk6gZwyKQdoEpPYxUYGb",
  "key31": "3ZqZekF2b1rqAbvtKGSrXXtk49wTKGykYpycUxGNNuAx6pZ75YqcRSy6M5ZarSQ1ndEsNtUbvoNcQ3RsGYWaRmS9",
  "key32": "5kPwfYJ83KuzeX1s2QrSZe85A6cErEeq16n6gYTfdjvvEXB25PUkMr37RDRZ4o8vmhd2GsD691P2Uch4av1bo6sD",
  "key33": "4rWKQ5vD9hzHv1XW2QPYmZrEtScS7DtPwhWZECLuqyuNfezFRb737R4E7PMzytLpBAc6tCXyqgcLCfL4sLx2jtZ6",
  "key34": "3NtDFGRF9StdUS9iJjVrm7GFs3f4xAWFKthE9XcE96oV3AXoi43jX1H4UW8k15QrLgE2EHT1Sb39NkFov4usWvBQ",
  "key35": "4YiYJRQrFL6eGoTmBHBVUzHN6doReiJuTukc5c7aRAyGJPJARZHrqBnFxbMEuNTwZBgUseGyMxhL7g4jShPtcCi3",
  "key36": "5prd2GF5xVpWvsW5JF2yTHirb6zRS4KycQvK8mNQJHKkSUrvhRVd1RPPE7fd6paiwrHfGRcDAZGFWns1hqyxLNTj",
  "key37": "3cMsoHNegM7fva6MWorpPGEJJxcQmUBLMD7EMAAo9Fj2jxTTE6QZmMkieijJqyPZwGHAmAEdsEgN2rFhLMFweU48",
  "key38": "4fNdXtpVF3qp4PkjmBCXR1cNZ3TzkrcMgVPeFqRE9Ku1VdLPYDZp7HwF521mNAFiL8Ag5ku5CpfqkJrf9bVpjVUU"
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
