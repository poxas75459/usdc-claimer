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
    "4BtKBTYpqwE82e2dhZLhZ6LeX8Pxk7F7Lt5TjMQLG35NfFx3qAXUJf6onjByY3hSjHgZzngX5d9ecE3gcbJdPUAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61cjrhF72ikiu3SNxJQNCWV5UuRpJqZp4hH45oM5YjNt28vKCVnnU4nycK65u1s6TbgBqtzEVmLCDmBJiiqXvCSs",
  "key1": "5RT6zntkxcKtjm1m5VKoarjUBWwyuDzDJeeFaoj6Mr6sXQMzwVWVunusxYxanNbWwxCeLR6N3GqTi6D86TW71nuw",
  "key2": "29uAGyME4jFe5H4M3uqsv4kqKu77d5J2XJcBXn5LubXmaSVW8AzXgx39P8btKoQfp4sK5MNZAtmFEgkMJx6PNBNg",
  "key3": "5VCYkA32FFLpXSv2bAWKWz4RiyYXkbmSQGD2TgTanu99RTLGv1hSaJjBbDBYJWenBgXq9MY11CCb3jxrFW2e1HeH",
  "key4": "4RRVhbaa6tayfW8mn46VF8K1FiWZUkEDj1kgmsmmcpsW7cQehQC9QD4pCpFMem1oXnJ3YmEYu1dQZKKyGBtNdY6B",
  "key5": "5YGL5nCv6uqjbVTJZwAw98tvDqiCHSsqud4d7uWe9AusGeRPt2Yida9SEySbtQUDjjroCYwgsKhZy9FxUzJLq4Ph",
  "key6": "oD6eN5GnXGjVWXua9An5AvtZEZGFbFgVETUQ8C6dfvXPbEQUM8UELKYvRA2kMWBtLE2aRVYHoppnHSoXxHW7Sfx",
  "key7": "3pAU3rGaEFaHEUmhjwBg3GykpUh7XSQbJQ5KeqhNQsk3ssWKenHFCmXV7iZ5gZabt83u61EtQcWiGzHvGEk2vd7y",
  "key8": "62fyQG7n6AZ2WMswq1Q1QF42nxxyLkCKtCGFBsnGFHUEX29bigXwvDKThhxxXrQvPoydyNfEZy65YcH58Bmuetf",
  "key9": "BWujxPmA9mTfL2YoE7tsoYF6bQC3NLfzXbt9jx7jVqFXBNykt8HNJoKcH9PBPvrQVbuW9sidjpK4xdQcRqj6bPq",
  "key10": "35mcixfMBddmkV34okpa4d7MHfAjjsYEHAVTf9Jw1Vm85wZNg8X7tUYpKtCFQmiwzzfjtUYzFmbDQksAWBLPX3ks",
  "key11": "5xhebakvvSizCcEw3P5MT2YP3jaFPiu8inyHjvPXcKqRocZ5Dp5JzKQwkiEAgd4z4Uh1mecthNdRHUxxGtStUmvR",
  "key12": "2NTTvhVDX1M5izbadrvmxEFX8VVhfFC9dgqN8MtxWa4r9mJHXBZarRKYvckU77JPKxzz19UiRuwGCj6reLuGspq5",
  "key13": "PYGbfaAdDHkcX7DbWNQ2v6MDsbZuLU5MGwCsTtX6GdwZy8Fc94wqNq8E2or5sZF7azAwcCcoDCYaJxUwdQDXTxU",
  "key14": "4qqUggcL93efe1qKmBH6jB3WuGGgFthV5CtAfUJ2DwxfohM38gMMKjyptiNXbFA5n6MYnbAcxZWodxMBwuzrSqUn",
  "key15": "y8U2oku7YGM3o9F7AvQ7BegbGUiSidtz8Fd9jwuZ3tLpJfF3m5k9EwxFBr1JPLmykLT3gPy2AD3mtd2GjLLdBmM",
  "key16": "3Trbm1qSCUazYvMQFujvVznqtDaEoEUA5J2LsVTTyCdc1DvPQVdzJwgD7pePD7jiJT6fJ5jC4HYiPomKkAmm3f2X",
  "key17": "4wqALm7UeoMrLgoRwvcL6wo7oEQbkGpPiKLV4fi7gFiQtYijQjJchtGLK8Wt1pWEeAwZnivmm25fyBbRtoKQPu8N",
  "key18": "2r4xnhPLyJsTUuhW2LWrxNja8eoGmypRd568AuaUPD3wDjkSExRUySnjjuMFUjU1SZtq8VucDKmraBhwCxx9L3yh",
  "key19": "LkP9LmaoJAZAq9CrtoZHrRV4ZkZK1Psgqc1F1S6sAMhayg6FmhLrz4HvLnyqPNDAARa19uUYBLQVkNZ1dHa6moN",
  "key20": "5uqjrdVzbMVq8eGdFygTzQJXUsKebnnEBtWpN7o4B9HmbhnTTCbUy5N5oZUJSHJhQ429SEK2QuvoLHLEaGaF7GB4",
  "key21": "4EY7PEUAPKjy6R8t25zg5gPjvWSXqh4sGrKotGQg427SZAa8jb1vRD9tydaqNJBgLb21DKHq6AWHvM5ax3LXBdmj",
  "key22": "4FHJhB1NqSGQAmjf6K7M6BaEowPN1CPgiaFvon68HvxsQGfzjziG1ch9UphjYTMXsy5Eyf1mfnMtnKQfTp5qpQji",
  "key23": "3sVNzzmgHhhGNDoLHm9TR63XcDHFhTjKGTZQF2tp1bZGEFRLTX8JWFKESSodECA7Q4MBEyeTY3bboKEHpFr8S76T",
  "key24": "2uEiqaAdBm5FZFtXySQNVN6nhbE9ApZMwBGjykVd1ScnzEZDJdbLByY5taCKEFC58iP9nWgEkWfA7ZjXNxK8LMmE",
  "key25": "3ocnzCcZDT7mZsVuePBvJt93Y1Pot4TjFbKixstzS8EEz6KyLDc6jP6WEm7qQSzsRATKJymaUffm5WAJAViSPGeL",
  "key26": "26x4CMhiwCNQMS9ZhjyUnrY9goT2eMKQ34HZNy4D7ApoitNdNWFFdjcStMhqfFYHEgrHfTdVkCNdAyAr5qhAdeP4",
  "key27": "JXSetkxjCXYEjK1dt7DL2Rtsj2MUHaSok9MM33ZeNBKHoVJusXxvzM5L4kVpL8USLWrvizUxqh2Q2ZUxNS1vR5d",
  "key28": "4Kj5v7TnhThSVqGZ9sSC1KyjSHvP1JxypvrB53JFvimh2J1ivrPWdXkzjNxgAg2oefMecTZyCUHPyj7DAmRm6wyR",
  "key29": "2XSAzdbg6w7ZRC8C4fQmFikXpUe8mH7sH35Av1Fszp9SXzMY6qHuWx1hnSCa7Hygs5jJaUkxUpU7fCZXKrksetxK",
  "key30": "UJSWuLB5WgZPDrp4FkJvuFc52M34Wut8bpSpwwkUPcTsG1hCFWTYkZ4KuwSAe4Hu3UySiCnzXXpco4vitkSrXRv",
  "key31": "3UTdwYX86o3iEsDqq1UgiXq8kHavxpnQnhYXSSfz37apNFHbc2zHC3DxRvZWwPhRmeoweb87mpAsGpsBt3rbjt6E",
  "key32": "8ptN195aceq51siZu8MVBcCvZZH4eVtV2cWWgwkzQCpMWifYFQDsVFTgwcygBWjLCPUzm7PthK71d5UZ3gA4ZcE",
  "key33": "3ire4gdZ9hNoGoaFVHZjq81hAnZXbKNXNwD8fsdjXig1w4ZHhQxzjxdQwyRft9ZJStJijcizrzh6k3BsDA6ahj3F",
  "key34": "31w3h5BP3absEbYn1nJXRz1jLFw7MzbmgntPtmaq31N5qHSXbBdUHvgzLFsTTR6Qmtns84Qc1A6sLqNCYqcmjxBp",
  "key35": "2dWWWYbSSTMVLQiQJUCZaBnVDBz5sX21PyuKNoU9sV933DgU39HQpbgKVPmPL3q47QDKZYAvVcDhA6xpcnKGKvoB",
  "key36": "58qAAQoGMmtgEJWqkvokWtePGsYBQ4navux7Mzsc3oETXwDXNdxCsgapMyFW6eiQ1CAo2tH3Ain8ssbSz88q4yBu",
  "key37": "2pjyBGM6q2UCtXLdkHAsxf7SPBfjuBmym8QLNe7i1cvyZ3LYRkyfE648WSxGcLVNTSGKqiGHRf5jas4cEN7Q9gCM",
  "key38": "36V3rjrLRtphf5gp5EPPGPqdkAeJKWvEL2eJYQy7SAAatb98HZitrPH6peUiRjqMarEsnbDtXtp137KS9oFdW1zZ",
  "key39": "5YFXDqArSkxnhbqaLgmUadh9gEfrP9xd1Y19ZKaipKZ8nMv1BMYWgg5MuhVfnJ5zohmtB9NY4LDQJdmRPQyoCada",
  "key40": "4zLnshps9FHFLxWjrRxmUwHeDUtbFgbPfJPsKDNFCAU5cupvryRnai9oBChTgXzYFEhSpvMLsK8hx9VDbkXe5PpM",
  "key41": "3L5MvonZCR7S9cu6fVjgACLgUzf96vRd5Mgs6ftpW6wsSrWGZoJN5qJavqyC9u5BcmSukqSekx68sCLqJfxyHogU",
  "key42": "aNoY7Aa5oKLLyczVeENXGo6ZNe56Rzi8oj97z1qwjGCtYkM6EonQsgNoVYR9CkPb1StY4yTxocqT8TmQvzaEd5Q",
  "key43": "63e3HFhjVC9d6X3yNcor9XdhgztprcHzZHBbSVzQJNkPd6aUg2dSJvd2UdEdUSetknqTbSS6tZvF5CCtrcq6VfM7",
  "key44": "4dqjnVirz3eJnKJF5FTT77kYGbZPckJCykfhotyjKLVcEJX3BQLs3EmdX6mKnsgRNejUDzBjWTn5HfzCpuBqGTyU",
  "key45": "2drD2ZQjkDZQp5ujzq2ngGZkefMs4niMrUKRHraRRNTtc5Sy6Abje9pnUsjyD86T7ahypBFgHbH8ARy9tMqsu2wZ",
  "key46": "Ko1SFm2TvSxk6syqyj4aa9keVstCNX3AQ795zTrtreTHEro1DiL9DNLLR2QoPTjb61njPngN8ERzQZjAMFNV4fz",
  "key47": "4GMbgXBbrRYXKjHiKacYenNGbbjBhHt3SNJ3kUzpKHDmEGjwXEUzKdRpftVrmGQAcouFeRBxPKz8E9wcVigarsoF"
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
