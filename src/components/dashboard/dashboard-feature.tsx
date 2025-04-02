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
    "5p5sr46vtHTHMuDpKcvvuHbeHeux7WgmhedFXyPmq4wLM3aCU74jwoCT2jkKksRnqmsQpDwPzKwsUiJ7DSijgs87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SfeZT6HKdLnTCPz2dJZdTZ94Z6Wx2vqNkPg1ByFMniFoqMZ4qmFFL7x2LJ5fogos7bBHgfsGPiDmNZUfiWwR24J",
  "key1": "F8qA6yfJdwG3yLLu6JXEXEFb2X58cmk28hdtreTUy9vhWUgMXmoa217VNKGyFqbwKxJMJEAPvvVtouLHvbhvKbV",
  "key2": "2Ecedtfmvb9P7ER4Ggw95YqbYaA2zh9mJZXPEZQrS1kv7g7m8uwpKaxChnrXLtLK6wipQVZijyf8g6mRDfvEMnw3",
  "key3": "5mUu8kRNor3YwDrDsNBvVBHboCrFW68FWHp3RHf9g2S1RX1QnmyzPJVapsKjhbWLPQXuVcm1g5eG4ZWDCK1uFfVH",
  "key4": "5Ua3a34C6hyjVd1N6koqF6Eu1UjZicias7mRhwpC5hZsqLgRZ1WFdxjZQH7gtArqLgfzZdVs2frxddwrRaRiLrez",
  "key5": "3RBThH2sifSYnq9VhZ7f3eL2fnA2No2hqDYKpL1Ez62q67hYtynmQGm5hXwAP5msaeZonQgZtXi5ab2RfrMfqa6a",
  "key6": "2KEr3vxy6QE8GSCQj3zYYYMzWjsmhXY9BLoMd36TToqKaQW9ykAKfiGL6MFvADwqN4ugtJai3dPVmf9uMQVCwV2Q",
  "key7": "5hWy36oedKi7FD7JawQ7zHFqn1DSHkjA5KK8nthKtSc9RSLiUsGgZfx8ysWMyNB4pZBaWHCthUTUzMdG63HfgG1x",
  "key8": "2pSrYc2dkftWdpNRenWqMDMtMhMCb9TXDwqvkbaFyCZH3Zv66QjynyQBpkx741Vu1mStkupg5WNnfKkWPKKAZwe9",
  "key9": "5uxQTVRsNqVC7uPFmLo2zm6R3xLxMwqrm3HtPE9vqCsSAVd6Z1VYSdoxkCpqHKuwBSE2H9S5xJhPqZTFt4acHE6K",
  "key10": "4ieYqtG1k16zFnhiVgLma3bL1huH4GKM9scfDyJ8Z4gPUGWQvStb4GuYPQ7Hws6AQ18CTj7NeguZ6LT8wa2zdYLz",
  "key11": "2YnsdmRBpFb9CEHA8WMhvu91997oqsL3HPEpNNBc9D6N6teH7TEo1TN4FwVNXx5yaVKwZj6bWK7UEuhB8XqcXnMg",
  "key12": "4YTBv5UQ2YZAQwQn8mSaQ1nV63dSmvah7eYFPEfPFCKYqXMUd8n821PYeFuNJUWhU4F17osCqZw7uvT23r3cF71N",
  "key13": "5xPaK7NsABpSTnPfjWQ1ER7tS3ocGi2yoeSM1YnPGTATQ6B41wWxqsjf24yFZ5DAqbcVrWs2rQVCvDubTGYurnsC",
  "key14": "uZQH2R4X4wuScpZYYYDkAmuyEvCtz1rAnoUXkcc64EZtr78jYMmaEsvjywT4KCW72EuUN4V6cLPMzMbB7WJfK3R",
  "key15": "3tkQcKn9WQe8GN8zPznetH5rd9imwUprVqymRRy2vbLJmVYr4Ru2Moh5XjppDuywKsN3VtmTQrygTi6xgmNmgVGT",
  "key16": "2Ja5Vj7Yq1hLo9ypA4mv1NRdXSZwCaAEXGo7oM5GeGAybBWAEY8y6YBqU88AkbgcVaArj5a9eJREfAyDsdNGga2t",
  "key17": "3o1ZQEuxXgfUZphK9pRHJsRF2m2HFQncQETHqcLK3vzCvATvB7GbfaBUG5qHiQFnXBsHDejQH1UxARUtd3enjaNF",
  "key18": "4TF6PiMZmHcnJJeAP3L6VRhTPBxqsTQrqaykFjQit7P9K19CNRTt83vopj8DNCYshYFgCbvkqv4Q4zr2DEYKxBj2",
  "key19": "5X1EiheAiMXnVtYxf5nsyrUv2mDobpU5ANmrW1fVwuefhfLAKsJt7UAo41MFUdDx7rwNrEKQgzKQh7ArzDhfSNJY",
  "key20": "5csrn1EbzERLmtgZ8r56mY1xZdM7cA23PC4TXkU5L9WBHXRrEyF2NgX84KKspuG9VMajGeGFnNgKadrXdkbA2egF",
  "key21": "wmqBa55AUWdkw5SyYHVQ1kMGmFrqn4Lj5EQ9Fa3z3gFBqrvQPfJBjWv6mWuc2vxj2zncUSTpfwipWcXsXuGDWHd",
  "key22": "5VsTZadjxddPHSVa4bUo5Vs3ShyymMTms6SWx7ZPVYyoJWJkijiE2XWGGXvqRVe5gVQGWuJKqS8D8SFxXDfZHoLf",
  "key23": "6122ZEi8Wxn6YGiHMTBDhk6v7N4YCfmkwH3WPAX1395iB8HBgokjwkbRFkGLQ4UTePEiVUW7aQtPsPcGZK48F42E",
  "key24": "2jPCwgPxsrXyMDKDEgep3XoP6jwquEncZSMZey6GmNKe5A6gyJVUnqXE3ZZVtLKV2cqKR9h2qxuNQFDJqrqWcZ76",
  "key25": "4ziUMuRh38Vs2wRSYqD8LYV7Juh2wXjCXasK9zCzfAyzxTkLm8TmXhTavCVyuHMg8zx9SUg95PpbQ67QaxK7g3X6",
  "key26": "3C3BxAQEAtHdVcS51PWFnAEZjwUoMirGjMXdbfU2WJ7PjgaqwhWHv3EShEgMghGXjURrKFgHBi1SE1ZrrFS9oRDu",
  "key27": "WLDCzzUUMVMNqMGrD29ubGJ5WjYaBfEufvvgMwoVMx2YkhXv2bvv4HHKixL38R5Z63LLsC34WYhXE8zx2T7mDLu",
  "key28": "4uefUJBuByMaJhYos2asCq2mkq2YFZZ5BXcBctf7qZXFdRNNRcBb6UupM982tpyHjn6U9sEQSnC18QuYJZn8JMND",
  "key29": "2ve76qM5L4EGYqANLGv56btNaVR9gDERAJTcqFVcKf77fiJjSEpkDuJtjeQrL27dMBbwxRZ4MSZEWJJxHZpZMxp1",
  "key30": "34ai3Y6yHGYMYCU2VQBhXD5tYxAWeA8QWrqivHZ3ygM38HEFoBCxqChuKVGoGvwhoQ3WS3JiEbyrb5uBit9YQHNz",
  "key31": "Ex4kd8BeU7gFKbxSQHD1hgSDMJv3mDjfmdm9Am2ESiBSaqGczuNXzwDFPgwdLiRdw5dshqSjsW3cSKKrkgg2nT3",
  "key32": "5xBFiz2tC3bYzGoruJ3nGuXGLiN6CJ1zKSTejTa4nfF5Ehk5itb9wd1rsiQL4kQQYqPJ71UgFZAuQpcEhrYZcrBh",
  "key33": "q6JXDJUkgy1hPbuX7ohr63wSw4EJ9sMgN79S6fTDY6TCtgyhUh6Qvt2s6mWghur1u1NJdz6hZnqmF7LRVBzX7aj",
  "key34": "2WV4SdkQoZovSNm2Gd6Wisxq5cSnMHeKCWkZ5zysYeY4faESUsEMv9ohdtUFgEpJ4cTjgUTmE1yfMjEQfR1SHK76",
  "key35": "4wr81DzBv7odqa73W5K3FQXAQQThm8aKXYJn9ixHEjMVeAv191gadN4amhXPR6hCG78E5TnQU9wr4YNBCVLN7bvY",
  "key36": "kwvNvbLEU36eowVgEjfadMsTrwcQHmXqM51aw7wgbKGcYy1yn2q6pa1pN8RWVLBRDCJwhfbbCLjxaCFQNUHi8uB",
  "key37": "5fQQ1MwwLQw7kkJzNaHgmZMPvUu6pUNUymbBj4Kz1XjmpoY6B8yqMXYkYXDpxVVUBBwFQNzFjosPG93U9LHSPQ3S",
  "key38": "633SXdrJcZj1G6LnCCsfd1MZagXUJPvvuQZ1SoSsW7mgdghFupaK3sWWPLnFdDHWZ86fchZ5hDCErchozqH8Sa1H",
  "key39": "38gDnNKmzveBKdQJGpTvcmdgV2NBvAft2HKrbJAeav69s7AshyV8Vt4pyJ5rPhnp9pCTxjET3uqh1oeN2fjuJruK",
  "key40": "5fERwcqeX5GKLvzRvQRQPkQA4y5pW4imLpXqhvipaiMGfxD3Q4rnwqn7x5PoGHWU2XNSosNWGgCsAb361KANxjf9"
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
