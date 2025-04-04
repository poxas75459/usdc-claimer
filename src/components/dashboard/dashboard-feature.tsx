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
    "2yH2H4WuK8TAjyZBmU5U9TCfwMvKZFDvxMyoTJbiFebM9NaRSUNkF58tUh3WZspo9AWaAUfyqTqk8aaoYDw8FJ6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5miX1ThLKLAc1DyJMTaRo5hG7n91CiN6fUzPssG78NoR8V9WX3QAH8K3JhstedN1cP4GzJHnNH5AgpmJaYTYReLw",
  "key1": "2ZnkeAA3niDRqd7mkffHaig1ddGRKod9a56QYZUaKNqL3yvrh7efED5Fz5GSDYGMDudS6m8ar6XMSTxo5eXoRbsC",
  "key2": "3Cds4y93kKKdifNQAt74oYDCgbA4bsacw8qBU1ieCELvmcuT3sGrG9UuG6SdEjwpuVaF8VRYPdi7u4utoZNeURMi",
  "key3": "2AtMvomWXaH1B71dQpgf7SG5u1PNTH6xLruUEgsF1WpoAyEHtX9EEfKNw3AG7CzCz5SyqJWGbLKwc2yGwq8euuaU",
  "key4": "3ynHdZGiZUsNnP9BqSj4FphDG6sR7TvdWmh5c1jLpjopXbUxU4LL5iiKW9R38Nkye9E5HyjpCuMvwq6LJRyNkLKg",
  "key5": "35TJzbLsWsk3aHGk7AtWh1EtJMGGKpzZFy3SogxceAkPj2R7o2hZgfF14GSgbJEQRwq6b5iJgYFhPvhYNPtFWy56",
  "key6": "3VRKJnB3DokHqmodYXQNbdmD8qdYGbkChxq1X5LAw4Y4WYuf4TRSDBXVgUjiR4seSk5iodrMUynW3C9L4LTV7zZ",
  "key7": "4GhhcKyYMxqtgQRjMvEwJmNG3aCxXMYdjJTTWJ44Lp1LUZ1AEhhj9BoXcFcjNnYkFkFKnR3cs2g6Sv2G2cwLxAKs",
  "key8": "paGzoTJ1jE7kyVQyDP6W9bQvB58bpyVb5J6EfDocAdCdF9wR6jGrw52kS8bsfQo6nAB891eRWMdo7G9VbywiAzz",
  "key9": "2N9tnQeZ2QeBQBapHKh4HTj8Vy87kttMnmkDbk3pshqb7sM4RxXcpspB2e11t49gfvquNboBqMxaFqEmDSyr9epw",
  "key10": "3mfUh5YFM2GJPfKGuEHasTYo2V8WZRczecKz5V5nRzbEdSTgT7gM8bJrkrDhEXFtRU5HZCAF3bPfJjBcGLLAkZYL",
  "key11": "58jEF6ynjbMBQCErQT2Rp8xUfCXtntaLU1aGHx1n2o24kW2QmWC97NL2E3M5NpFW8mgyUxJc279YCWYPLLwFGZEe",
  "key12": "52ti7XUVL4cPcqwUdipiaa5gdrNhikYn3VEJTAaux8QDki2xNos5bDFvvGBUvWzdLYWtvn2YY8qKQP2FMAgJxChp",
  "key13": "3o8Wct6btA2nwgDBBTukwZKu8hFzdNB4pKMuoU2Kb94KkT7QsLSJE588EePD9tbZq8ueavGVGtUJcpRfibL1idkc",
  "key14": "4WZDeBiBj3gDTC3xLPHRkG1KW2UKccF1afcFsvRq6vzd8wZr9KRXwc1yZvnwQSVr9QXaLTKSAa9XbSqdJzME4Q2R",
  "key15": "2FXhRU5HBPicTBbGBRpEKE9t4KKy1ufjmTtXbjxGVy1ELFY7TCrHQq1WiopkDVPgpEo8c5BPT3n5TSjBBS6ogpgo",
  "key16": "3DimowQt8xVq9sy9nqLCuYXGM7Bsq4gBP5iQsim1ggVmBKNCCjJeHb7wbLP92wuXQaUTZnFmeBafbpAq8MMLjgam",
  "key17": "4QXhFyGcxRTL9kZ4piWLs9yfE8NEBXjnrb1gwFdYVZ17F6dJbRsHk9hA3wGQSTrLRTZ2U7rZ1CFUFRtTkKhv2B7d",
  "key18": "52mGrya79RuUk8CJGET8ySxkdqNcpS8DbYW1T6rEkftExmEb6eEQM67ekYf3tTPtYMi4PgUJxcuX7k8SKtXPnqpx",
  "key19": "5g4K9zTTrXQVNcSj3KdQZasoDS85X6KUswJGizV5wEp93qbsiEMY3SgSkCU9ynV6wq3BxzqGcVqdPrn7S5mkuX4a",
  "key20": "dpmgvdGMVFEJxVfeCw7RMR5uBHcBf9pAJSSYatAZMKACDx2rSs6DksC2RbFXjoT8G5jGGJBiuUNxbeda6pUb4V5",
  "key21": "3Cg2A7BgFE3Ygv8NtcN4z5hZgudDBSKNJMp77VdXhjMNrehXnnSumVGAJ7gumzxj8xca5XLoQA7GxgomPubpi4uc",
  "key22": "3XazmaVZ37F1TujQ25dkDoF6SYnPM3kHodF9eTjtKRtuYmke75rRJJngF8N1QniVMC4gHrn38xQaez17KdxP1QgW",
  "key23": "4GkhwnMprC6gXwJYB1geHACfZWJQW4U9ivGKpNRx9UVcgLsjikLy1MVVRs3iMwHTev84vSm4nEZ5aqV2zuUwBsCE",
  "key24": "5WLVmMdbXRPmPGkANMY2JSHcf2QhSxPzDfJDWTLuFELemNWeRM6zTVcCr5F68kFGovsAHYUzRCNqEtSwvA8NVC4Q",
  "key25": "k59UAc7FENiMk9SmvTBAuFtHs6ZSyGca5tVxK3GAs9LfqnGD2SS9trfRP7XodajgrdNhgwwYNymXpnv6N5ghkgd",
  "key26": "hVdFXpz4kQyNj9qrVzrZvUXoM5nhGQyrvqKaKgqUq9xRZHn1p5DXHHB17VqWnTPaWRGkoqSGteHzNfMA2tBURjC",
  "key27": "3fpgLAYQBDiHbUQC7bSnun8m5C7Pq9NxcrPAb9mAGXGGz8mbNJgMhUTrjQ8Cvez1A89VJZncPQ32aZwGgD7r2oHZ",
  "key28": "385HGUw3MdrSnT7GcdvhA7YA2bTJbRnieYsVumt5LMRr48hMXWzEF5FccHk8y2fga2BmyWAqr6fC9MYUWn6149jY",
  "key29": "ZyUwRrmSCaa3u3azGnTC1b3tcH8dDGDr2Vg9VramoHSHqTMMms1DiXZ3ngzhL6G7HZSikv6yTyNiKyhmwMPeixM",
  "key30": "2poyhKvBa4BGihDUuxH63iJw5PGN6nkYyu9hxsmEBKj7i9u774iJ6rcN6qNQd8n4D27uxaaJ4vW84fxHtFwAQhzt",
  "key31": "3U3uSQ3fTneqtwn8FnEsBicocyXJzMUMyEcqLfK4sNrWEFB9euWZffKHy1TacS3hdHx7oZ9ebWWaE8cLMQhhtrX7",
  "key32": "VxxZUAiaP6xZNsFCHEyPTmL58dmCZwXuy9Ay2D7VXhARm9isqMKUnxJtLs7JHCsFRwz8hpRiqJHCjen4C5j5tgg",
  "key33": "3u5C13krNpXonbKi95cBuG6WVWpiZHkrHBsrvdCkjRtJLPiryyENFHEhu2y1wSKuA4YWTeLN4kdSBdcg66muo9eE",
  "key34": "2tj6JUSVJopNf8c4vgm4i3hyypA6kypPHWuBiLtryvThme8Y6Zcrcq3fJYDHvP6jpN3RyaxFxtyA5UZEpAiaNK4n",
  "key35": "dqopmYXGKLsSD62sam7R6ivB3XSRcbgWzsLLCxZHqHcCDV1av8cQ4V3JPqpUz71LweY7ZsyR7M9cyqYkA2sXKCV",
  "key36": "2GNBbj6AnbpX1qtxpCTDUTvuNrc34ZEeebe4AHFtKYBpfFKFXD54A9tDbdCf2PUQs3Gd7LS7aT497XHZF1CdNA73",
  "key37": "5uizN6KwyYrtViu9Jf4C8zvDnt3Lp7u4pRuKqDcDjcDTFXCJLvNuS8C2yhwUMHPR8T3hKLxrtgtrv4jMj2jHnGcS",
  "key38": "5p9LWUuhuxuce64TPHTD1P1K3az5ue2x8Bg5nVeAr5f1i6JLcZeLnmFNYCqzogog3JyZ3AEK9sbS8mCSQhzxkc5T",
  "key39": "4XTfHwfaq4c4ZVYmozPUWiqrLhENy3y9MeRPeq4AHJbZpYf1bJB7FTz1pAbAfaAhucwcg39dsA32SvcVbn4r2qMp",
  "key40": "3N2Mc8uMfgnb51uQHa69SZWzrG82cxb4E84uWUFQTeGPaLoAd3rUUewBU5V2aS1W9UYjJaBP3n6VCRfRbLwunwsN",
  "key41": "4Y7aW9hFYjakU9WtzZVtrMA4YQDsttappf6uS14CqjrcP1MFdmPnE6vmTtfssrnqpG2GKLH14uQ1CPRJJ4An5LjW",
  "key42": "2y9XCpMWGrnNWZVJh1YPsNzfkew9GLGidoZh9kVmHtYxhneSbGF8eVRVkUiPtqEqgp9RymtwBgbiw7akFhLiq3C5",
  "key43": "4RKPABEkaTSWKHxtzG7AwajXT6uoLtPdTc7DBzLJHFkrdHj9ohjfkdq9mvbq74nEZd4fSEzXdjDzRXxoNisdhuua",
  "key44": "3ysxKeL5dfG2NPP7SRHYDan62nt8q4zY6MmvBReMK2TTceTPky7YiMHQXUzxvEhx4swJYremzoVNtwcowWcURHbW",
  "key45": "2kf2pzimzfM6sfz5VWikTjYNtBn37ehRbdG7NSoX5Dj8Z5TtWztQDKt97G1zffJu9dWyjoo5NX6udoefhZYENgwB",
  "key46": "5e5j2eS8gXGWSqRDE8VFHSsAB2ViEpo2jycqaBAZPUi5P8UBzNjSHoNANoA8aqc8zTwdJkiTPjEK45YfwggG1Ddc",
  "key47": "5xxHxek75suKxAP7ts8VxYwKhZmMN7VY4P8WpQe1k7sD91HfqHZ89VMfq6puVrHw7EMYJZMB8KDxRuCigC5Nxh6r",
  "key48": "2FbxgTm4xw5ZJuPqb5TwrroEAGpKYxSCrjXq2HozkQM5bco4U4VXPQPUBC1nVzfShqSq5W3mSvw11mdYt4JVTvPU",
  "key49": "4hKMaUawqNx1Q758RiuoeuEG591k1WX5wiUzBELvMErEJwNAqNzCU98wAkPivrNfWDf5298YwC63bkdwWag3fhQj"
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
