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
    "63HPrTeehLdeDfqbcEbXbZtuVmgBLA2rRNCmhVqDwSNVo3i19Bty5A5kr6rpYbuM8MuRKd619L2gBau67jQhVCaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gokxmWaAwq7GsGFiwCwT8vEVU339NbAcJvqZXSzQmm5aTc6r1aKzWmLyu3z2L24cLjz3ZiyncD8KHL4GHmUDNUQ",
  "key1": "5CrJEHkogQak69kycyrfjVx9oQpSBBQh3K93TFky8gSt3hMFVALMah6YgjBPmirVB6NgxXdFLq4cNCJCMhBiE5eq",
  "key2": "2EzgVDJpZh4Ee5gZzV9UfMEKEK8488CzskEs3xSht6Zda8UscaY6FprZ2vweWHUuwdZVM2mQoB5TzhnPH98TJDhN",
  "key3": "2Rx9ogWfa6aenAyRz4mNgoqyd4qSuyo8oWjo5UrvzHLKKiCvhqYK8JyWhHewpgevPiffhm8Q8hFV9wrJ5ZYtyqak",
  "key4": "3SsF9Xuv2mQt8DRGKGaGWohPdWCsdS41He313BUNBrij12GNSEQbyHis396HwXSZKTiL8hnYGtRi9fAAqEWU9wYL",
  "key5": "4hkXXCmV3DUNnPSkNabhuopqd1XSvNcS1zvFXbieNYhpwipSSV3qv8qH7Wpxi9arvVKKjYEbGCyYVPiFVd7L7kFj",
  "key6": "3qiQATEEFZKJqfaqCc2RSwucchqhx9mfxeqqbSdvXt8gh8uUGnwYhu2FW2m7iGXBbWbkvh38QU8DeZ4D7ZV9CoeD",
  "key7": "3Y8ZN4C4EtM5PGsKY2Lr5A1ehxcfXjNBaNNKo7zNBBhBpacaP8jrp3FYDwjL8H6iWAMp7dqmE3dWVN1sWazL4bWX",
  "key8": "5dmowdNgYRdALixsNf7YW89sPY1wnPJwQmTroPRRy2raydaLRGVVc314jDyz82jr18y3ktpGpVf9Y5bwzfUChqio",
  "key9": "DbR2wEdwE3rpWFE6QV2Uvyrtsugc27JLDyCcCvxVzH4i3HPZJ54j9p2gpUyM9cP2avZeadYB7UJb63zdyitoEra",
  "key10": "VbpJk8gnq8d64Haz1t8fpr29vteXu5XaCtJGLNruRju7d1FWTtA7LdwDbJpJaZMY9DKz68QjBV9mZ9iv2f9tKQh",
  "key11": "5Dx9L3JnoudemCQDRfoVuKCMf7pe6eX8VJqTgJjsDkKDsY1YuKf7YPsXe5Vckn7TBoWcy6Kh5GGuKTEYSxQ1CNZp",
  "key12": "1VKYZfxqtnqQvXwg9ZHQGjUyfpSA2qiAE2KQgnq6SNuVAJ7ceM9GK3wU3GtbVb8DfT8NUhiGG3ss5TS58heDWAB",
  "key13": "3gg2yYpetNKmerb8j9cp3XWS7VpEXpYYMwce4dCtT3mE6a68H4X5HVEbSCQhyxjL8QYZoHPhcudyxRKFRiU5BmNg",
  "key14": "5sNDaLyYT5L2unE7uWEUFNwpavbWh87kzVbbxFqhv7UQM3Cb27pP169Ps94q4cDgvt5jtbzL4qfsGJaA1GLeRo9k",
  "key15": "2WBLeSbFvr9UQ24kTWgj7co9NFATx3tUHU1CJ3tFXq4Zpr4vEYiVqL5Z3Fvb1bBRNRgzf3s9fVnj7B4Ye1SWh4nz",
  "key16": "4mECoCNDW3LWTA3SgPfKCmkMTr4sxnj6EK8NbfRUQ21EAhxVBXeM4PoQ7aQtNNwZ5Q8LH8SrWWbmd994yVJ2Sni",
  "key17": "5YgwjVtMmjqqsjXK9bn53Y9KS6P5zJZaH3kx71TAD516umHLHvFtRy8AnQY83yWCic9UzARvDvxfTzaun7EiSkH7",
  "key18": "2LCxoxAafPsLZvpaswtrJWBo5SCCdUoxeBynFR2JrbpbQFuUaSUdBPB6LQzWY2N6c9qP3nhsbXNwiWmc8LyFgcWZ",
  "key19": "2pZ99kwC1YCigZVyFo3UWvHRmWXh6Try9KkhsjmvgQzc8PixppV7xfrhwrHPwbuXxTh6PpgqVU9t1HifDK8jaLAX",
  "key20": "5MJfD2WudgdUZme1es6EL12NqatkpzDtQCxEL68PD993bDqBCsgG1zcsoaKmM1uo5LMth9mUKcQrr2Pkg9Y54EFa",
  "key21": "4r6zzmW87P1gstJ9m7bY7GtQsa94seCDndLze4T785YZudifj38hZKzNHQH6F31LKDdLPLRFFT7yVXT7a79GcvFG",
  "key22": "5g5qVcLztK3FeAr86LauyDmAQN4axaeGzvoGrPCGXzJu8mapkRQDZ7kmqrT4mAk71snReSt2rit6GThjn97cuTcp",
  "key23": "4HJeETP7Zx8RLm7KuntfqQfgG5VZ9QNuRmK8xmGYyXgyeMi4jNv6xyN1mTai5a4e95uGYqbNYKrjWVxXjqXEkfmC",
  "key24": "3afQZCgxtqp9M2a8D8wNjKZtDBk44oTNjYy8v7XA2JCbM9Yw7WMykDRGtNS3ZdWp3WusmkqADaqP6Nq1ajoX3rJ7",
  "key25": "4Yrv3ayf2VKsfU3JqMxnfVQXAjd9mc9RscBGHWnnZ7ZcwVbppdqLp5wvcrXKici4hn8GcxpFhKaRMT4LfBa6m1gx",
  "key26": "2D445Uf2MqjiQkmQh9bfA1nBueu5j251p2EZ8k3egMkb714C86MRoq17QptHXJ4ZHfS5EcjSifUHSDVhJBKB2vyT",
  "key27": "2ijo2yP9ctZ1xVSQMHk9BrJ6eEFDL3KCvmu2cCYA2DNxceEw1Dau1ty9RTZsvYQsBzWsQUWQWsSQCfyD6ygJdySj",
  "key28": "7hEafi7grSdNGyWKv7SoHnTHdG9PAZdmFsgX7DF625PJkkQzk74zzjcLfyuddMtsSW6M6zfuvjmoc2NKB8NqZXS",
  "key29": "NWAcsZMECXJFavYzU3FAAaggJqtURBwcBqAiS23nojtCHrt9ScndXnXBf1CewJLtHtn5xhE6LqYhCUiWnyTDzy3",
  "key30": "5Aukqrxbom3vXFjeZuL1iJ5n5LRZ8cm3DbNKib7hwPe7nHBKZ3toneLnzREPFnE7hLcWqF1uaZe5nynsmT2CMyei",
  "key31": "2TGcHAy8Tfx6wSXwHTLaGL5zz2mGLSMNiX7m6mpakTmW1TTwJDdDzTitEwqVnKmCEhscu2PNLV4nt5W14tUAE4g4",
  "key32": "47Tr4ktqQQNyFAEnW1cUkF1LmnPBhB23CyHu5Q6dSRETmWR8oFC9zgfq1zbYboRNuT8p89uYyuUpSBWCveUDJHvt",
  "key33": "3VDtSstK9siUw7wRu5GNEqMtpskJqg36QHqYqbkq6vzVfnG5tSLoLPNrgrRCCbhjdTcQM9ihjPXkg4X8BJn61HMp",
  "key34": "2t1d3cKBwqFw3LavVFPTPjt6RHHwyMuPzPp6Lo3ue83FrWnEDUvjznmySKt89aCqfMi4cpSTz21xQWXBK7v6XGx4",
  "key35": "t2wtx9xCa6zDeh2VdhZUaAFUgsvDeCztBt3YJa3bt2rVPkqCza1AXggjKpV94WzJm2jgftUbA4Wa6ahxeJC29YU",
  "key36": "2WdkyfowD8kTuvwvjFeHsVqJVmbYRFfCHoJQWPsaPkpixMHx5n7troWTYD3gZ78EadFEHHKJJyJvL7JdHD4mTjWz",
  "key37": "25MXGuJf6mLxZRfSmrureNYp6uXqbPwmBAyowM3boDtrr4uyFd95yfYoUYSb6k2RznCS7s7i4VE2rf9HE2mVA7Uc",
  "key38": "2DBAK6CeQgfGWrJNR1gMsPr9tZLHZSEqHtmWRmWS2zq49XsWAxNoSHhGKGWVedhhW1TaQ3naLum6NUVNfrfyfGKT",
  "key39": "iFQkGnewp8Ev7cd1rAHR9LZWbSabcxH2XULzgSbRKZxN6NDauwCayovNbQPuNLVhJ36oLrDPTHFSCthiCRKyLBd",
  "key40": "5T1VVwrdxfh2zEEb9QHyEckg4AEgkn5k6UGozoJXtjB2Br62PSPvz78v9yYSBuNYq9WWhfMV6j1BhuJiajYtQeRF",
  "key41": "56Zk6wADAyYxLVvDc1Vzzgg65vHPfemKqhHXNQ67sDCRcF9qYWnmCgbU4v525vjrrbhbCfW518teSJ2R7NsPtVJx",
  "key42": "56PKPdgW95sRuGdGwudXVpF7CmKWq9gTuSpQz8hpAvrVQ1axPgdaKNcFLWXghZn1xSaYriot7uRXpsK8cMHgryYw",
  "key43": "8H7X7NNqWqaTya8ziVxmEFK1vdVc4hPBmsJvhLcxVhvmTT7nGPBAKvpugjMRj8h8r7vU7cDAS4LigraHExpvdcT",
  "key44": "4xMsbUe8yDQyPiFpx2XebCJ74ACLBwG7bBdaeofc4W13G2XkTiZaLZ7X6nMERH3mWDBS5BvEWumZMDLXDMw4efyQ",
  "key45": "5rmSR3xYvPG1sLEy66RgyvHs175JwpKoXokhv4xkVNa8CkUMmqSyLUKbbNmpCKVJKWZSuWSis896UmTHrcUy4s5Y",
  "key46": "2ZWn1JJPe4R2sPcRvfpXZZfi4B4ez5xsK92aX6zC9Mg7BUTphdFnCDJK8Yc11ucVE3DBRTMMUbojHfv2gqBW2H7B",
  "key47": "2fjqdeeqRFiBf4XTUWsimSryERnmhUZmEzDEvabnedcC2GKwf1GfCvpNnRQKY9KqBbq12xAJxcTdkWCbYYZVnP1p"
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
