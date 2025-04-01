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
    "2wyKiYiPohBhwrXTFFwzFsUPg9VRnq9oSVxeM3cEQ1nbesJoZJUtsM4AxqoBuqsFAu6Gq7PVnHPfoL5qsMkuy4hq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52NFtBp27C5Qjt4cueUMAjsWYRpv4SHci57APTGegeCJrs9BkVjrqaF65gMFzF84V62yPesxsE38WvAAHAJioG3m",
  "key1": "5zemwGDCuotiQayNinav8TNfoMYD3cXSFYYcrh7kyc7CMafX5f4hyLfEktAQ5hav5fHAGbDaHVUFDvPrZvf72PLB",
  "key2": "GLsMA8MJaQtqZkJBockcH9XuqHF14nuxuqK9PqxFsoKho2yXDiwUUJBXBRYHQtdtt9z3nrShMCPdMenrtrsUe14",
  "key3": "5bVrjcgZD4RDQ3BUCi4RrcZCybQ4aQCagdn6CgsFKttH1moKqdC7VkQhFgag6qTsNf1cak9qPMEwJzpgcj9Jt9aT",
  "key4": "3zuk2HVgvevbdTxcSyWjE6Ct1GWyJyD7N1ZKcMEcBHskg5EiQY8anGqcP3GnQC9at8XXhqFQkmPdJMtD2djWTHyn",
  "key5": "5BPm9JmGiFUaBFBoANvi59fnGHmFXBLNjSYEGwZm2LP2Kk8SGh8Z2Rxf5XV6fwWGzBmLnWeJ1wjVZrECk2hhwCDP",
  "key6": "euQdoKFGnJehr1kCG8BKp3uDTvv8rcE63mKgTGtaQCEKFeQkiE7XheMNyReB8ChKng8x9tSKoMNvBQoL5bnhsqS",
  "key7": "4xqA4Kv6oHDLmjmwU8N4GKHP9HDcFquCYbxmVWddNTvMNh1e2Ji2bGJZQc1DQGxdLaRHrJhGwTafjKKU8r9BWYMP",
  "key8": "vZbrUEwigafNoekPkFNGopYhC4gxJ3db4x5cDjbKkB2YC6ke4hQ2RW5rDbGHPkhEpup5ELpkokCACNnLkQXQYrj",
  "key9": "5v2b9gVhLxX8pVXHce19rksjMrPNSozTZc1vPyKCAGEhhCiG3KEz7ppDoxyN7KbJbYMK6miDwEh13yE2W5a9Cbgo",
  "key10": "2gUYAt6ZDv7NPn56WGneCF2R3ztyvrseLTvNeV8BKJpDf4t55xRJGkWBpGYaRQnZEVepjShrNWm5oRbuKWuptStY",
  "key11": "4gMoxvxtm3wrp8nFsFoPmfgC9xkFHYGcipymUgqT7N1yfKgfM2ig76Pzi2ZQufCHFpTwS5BgqPeneTTEHAjdU2T9",
  "key12": "38TG6zRwt5SUcMJ4tj8Ap8Vyg4b8C4ThxHjxfWkhWKF3NyN437hVJddETmt6xBKD3Wmaefhj9M29WL2isFc3kzK",
  "key13": "2hswMrXHnBha63ar36DsE2BtkosUa39LTh1NzMCYNoH9x84DjdAreEXDpXF4bJRLZboR6PRETfJvLMmEd4dmY3V6",
  "key14": "5QRktCJ2CuwchmZfnBVe7fA5w2Br6KdqNBWz6MvQfp5tNp4Urkk1XSQYk3MG3mhkKJihSEyALNBYFrQ53nxmADYr",
  "key15": "2QHZBYYDdja2oV5F1bguunVUy8SjnfDRs9rYYVqBKRHckrYo7ZwhUA4evE8vbAMaH1GGUPg6BA4ufhBsEijjmg2D",
  "key16": "4xzcH29mZjcqZsEgCjtD58UjwsYYFU3RmJh3T2zopqCrKNWW98rc4eKtMJcw2QR7fxbgrYNiDV2nBbMZ1u8im5zm",
  "key17": "27FovMFm4SM5sfnCT616sqLLVNPsVY45tqEXUw2YjwJUGNfaXm3R6UPjJ1HTBsTTZunkLQsAnCbuyFJpB5JMfUCm",
  "key18": "4WTbqySj1JLm9EfvFya5m48ZEak7knkpV1gn1cL94nt7YFBSxw3GdL8vuHdFhPPZCA8TZW5NLbiVj4vvWAdfxGQc",
  "key19": "2TVQLgaXDV69dyZys4gQP2QKXcjj7gRRQ1xL6g8N17ExdLgvMA6XHe113UuHmFjG37kSzemh9iWw1MXMM7xCzcR2",
  "key20": "3ipPZGSrY1WTiiFqTkdshvuBcV4vQg86p5iKYYL1V19F9keimpYvpw7grfjYFaosMiwe32DrqdZWYNngarjMbzij",
  "key21": "5CaCmrXMkdu1zTgYafP9KFk3eSByHCixTnmc4oWJV6imvpNM7MbDyGEnUDphqr1eKQTrBcBWYuDpKdY7hbmaL1s1",
  "key22": "4cdqQdKsXL1hyS3PSzTMeYacSmwyrUGPEcxB2tejPzCe6JtLxHshe679xSb2eadSMP6cYKBvdnAvtUz1GBvYS7eB",
  "key23": "3AtL4j9ZHuHbWh5mdgCvep73247RNfCNxMPr98PcNxou2NYjbPZqj7Z3t7G113M4mhv5T9rBNZTYQCHHJ5WDSiy4",
  "key24": "27k5wQgwcvyyHQJRzYq8Sd3MgiWKC8C4eb4jikQjzgwdFQ557SZyi59tLKzqobMXw65HvHJQLfthLZ86479r5HbQ",
  "key25": "2HK6jWLkKRDbdaUCFgVqfLbFroFiEtTCrTQcN96JPpYGBSuLNLdjvQXVUxEknbVZaMeDJkmNBHjR7FvTNrjqBRZP",
  "key26": "4GVVscTRrjXyEo1DkHVvRVjAPpDU5hsnfhMunsDquyXfR1dTRjK3hD2STX5uhS7YNpZ8FCZ5oMsdokHixExdZ3My",
  "key27": "4f3D4mneDVGAEoZrwdioezYNdK2E7bo8HSxdyjDPqcT8q349MZZMgsgenrtVPLHNWRyKEutiMzw6nXqdyzW9RAR8",
  "key28": "4beXFpT3bYcFTJKoffgnK3uVRSc392wmtv4qH96DVV9q7LWfmfWeoy32WZhBTAoTSgjsYixtqH94jaTKYsdbiuYc",
  "key29": "3tkgmtA3ZdRuSzFbaWGbYz6xTgVkhnvFFJBkhGhffFFkxEMWS2EfoQQVEYRaubW7Ln5FjPuCFbdEEqbFzyjxYtpR",
  "key30": "3aE9Xrgjku5JXDFkPzzjX3Qc9XjhSaxfthekCSN29VoYMQyq9cXsD36y5ygmMbbgkLrq44CzCedmzWD8ENbozr3k",
  "key31": "2jS7nMr7fGLqFsKnterCwD6Rmos7mVV5eeBZ9bexjZBTgdoiG8bmPbbTGAY7vM7fSBLLpYrmWa29yEvsvAk8Ftze",
  "key32": "64xKswUHVScRHRmjSVcMDpr6cGJXT4rQwB8pJVodwu7cLi16cQaajEzr9WKLcRKoMBPrpLCfwqLqkVLGi1wT6kMq",
  "key33": "FMCHZFs6vi3LjtReN3R4gtBMzknCTQwj3bhwqXZJoptLyWMsKxjuLUymYko6kNqBrapHamEjzdPUPdqVhmhAaiY",
  "key34": "4rbHmkGBtpQmbuTsKc4Q8UzsVjKt2sqvxKVdz25SXvm6kPJaSXgB6s6f3PiQsvkXETb9uy6CY9gnC4CoNco4tJCD",
  "key35": "39BU9S6C7sQR6qdApTyU1kLEBuragjp778a7MU53xAJEGNyqUcdbdTEycRWPf4LJXybutuG94R72nfrGYnVyhxLZ",
  "key36": "4enPHzP3xfsTwGTo97fw7joDTDR5DdgHKQeurhEHszY2dwUXBAixSaLtfnbVsMZ4jKxqUots6E4VXmQpMYmdAPZ3",
  "key37": "34VtMiKCWzgX7Xwsb7cX1wKpNwVdNJ42UWHNjEDDrc5m2crta2GTX1oSB3i3DYJVDNvvZnxhMFXDJiDW1HJXBFqJ",
  "key38": "2aWtCni7h4wAv5cpdThf2o5tt4jLGksKjFnbf9F8LNf5LH2JyCJ7pLCvLDmMW7mTibB55QCecdNbG6HXjSSNC5Q3",
  "key39": "hSqePtE4fDWWQhUPUewApjJL5qfh8jypGBQEQitLbX7PHZnvyhjML4s5qJZqwDE2k1Qo6FeHHjLmg2nxqAqDWmm",
  "key40": "61hduJrLBtUQ67v2baZ8yFJ5JZsz6B5TGaRfwVcq79Pu3r1tkeGhZoMUh2VTVu3SAzfj9y1jyV6KPykwHWQ6TdVP",
  "key41": "ffuiSBFjAcE1Bt2ssRrTHDnwZCgDzN6gLdjU5o8oPkrZUaBpdtp8TxLmP1EKcBFt2XZZyR29XC194CBAib381Xy",
  "key42": "4cAdiUQAmxyGky3xyrXy1s8mqAmbWVeqv3Dj7ySJMbkmGQvi69NrKxPG9ZRK6t5onMgWVGYVZGTqLe27p3hBhM6a",
  "key43": "2iWKZnq5EXXxoPKBgMBQFXMCXgnMyH8z4vm2kSZcWxJibCvVwHPmqzAud9dpZnkEWBZ9FWgv4CDQn8HWyCsKWRHa",
  "key44": "645fY2G6yo7sz6xyXEMDmJ1rid2cCTjWxzWnSzPZwAQvy9JVzJZ12NVszg473QeQB7dkdZJvN7Aa5X54kC9zH3ei",
  "key45": "q8uX1xButCUr8soQJ1PMDLW6Mvan1dLBbh6qLZR9u441ng32zA3v9JoTX4rAi7Twrmvt2jzFtTsh5XR7GnHwbgD",
  "key46": "4n8ftYt7PVmeoHUQF99MPLuXd5inKuBKD6q9LhsD2J8Rz7UkZdqSU6UgHJGZwtZKNSeyc5SvvDADv5EF3VMB5MUz"
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
