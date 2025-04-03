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
    "4MtbcJMMXYybHM2B1QkSwR4wQGrJeESEUxsHjLpyqVU1hnhTMVoQRWTbSV8eaGcUVrviTgtQttHJEcYotPXqvjLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FDCCh2tboJtyYyfMAUvbS5kuNp2iAhUtmcbrZaW4aT5WXGgseGcB3rvX9opXjmBZft8FMC4Y62gf7cZkRdjBkxH",
  "key1": "3HHpJq5rmCjehkvCxBKF4c9rxRgz1r5Yhw1wvZRNZ36a72YVGgciTK59uPWmY9UkKbzG1syZoj198ZxyzanTSfr7",
  "key2": "3tHiC45C2YWnqWcj6ttACQJHZ9GYqjKWyPnu9EardsHqvKFKiz5w9HiiUrFuvok2LjayJAH9CqtPiUyCym37DSGA",
  "key3": "3ADyskMGAJbGmKH9iTdadXxHoJnjrHATeG5QhqCZAXMGqF43RJyr8cQnovRJKQg7hAvZPN6iLBMf1TjFgDuYDe7q",
  "key4": "3m1dSsFwFLEcjpvSCjbSNV7sbxxv2HxoD98n59buNigezd44n6F53mjhfHc2utTra4YnxweHmjksArzP5LrBFtrk",
  "key5": "7qrCk2jzTjGK8JRUoXr4wFoLUpRpVYrRan2fpoMx5rAgWVcDTXZZN87F7bgoiS7WP11MV4jCw4asnubww8rPy4L",
  "key6": "23LN8ZUffq5cJtHYxD1B3q2KQTNmi7MYK35xVyketsXqwmneSDkHQagHjcfqhUXUB3FtLsqS7SfiNYDWr1BHCJGq",
  "key7": "2ZRx3KtJBamgNTD5EWpBFw6eTuTocBBior4nSE94zCZr36U1Vz9kr4G9ZngAnEssXyPVVW3pwLnra2LURkqU321c",
  "key8": "2k5WzntRgfTSNaUHqhHfYEeyNTYvmCPBptwCY7zaaqnvGXt8vH9MX39VwsTcN6nWJNVVb2cJcYtsJSKFytaMKwRR",
  "key9": "2jtogWsUBSE6Dkgavm6EfSbGLyXbA2mFwQMJ7MMEeCpxi7bL9CVN3N5Zfao8BP7sR2gwgd9SpL9LCuWFrjMvfQ4D",
  "key10": "oNtHgRaN78D3ZtXhqpiqhb1AUZb2SaAUv2RCxRtqnuWCTCGjqtTbCjp1fZEPbYrCXGHxqMrBPhmH2uGtbmaB7dP",
  "key11": "4ATEKPoA2JbDEUU2d7nGyfXYUuUwCogxKHxMRCDNDCBg2HUq3Sd4tcUfFPxAmNaL7GLAJb6K4TjDGKzEAPEt5Yya",
  "key12": "5S1wim3LN3R6ggJEeFcy9et77Acxonu5byZeTucLv6ga2TJGBG2UV9Drhs1T5GtwwGNSKBJSYupbgpUZHUD2HGcR",
  "key13": "kUehMsH5d8khHnfbm26onxEWxofeqPrQJTdNEyRCQz226bW2v42rmnnXyhC6fQiSmD8n6hNFWmF5Zza6HH1cnXG",
  "key14": "2NAbEmgg1EaCdUDDNTMDAVb2gZnLqL3N7N14mNHSke2iGSun84iDriMXwidzZXdM5nPDBA5gaxARZuYiYYR7HqBB",
  "key15": "2ihjEwL3VqvtEmJiZYYYsFhBPk9KPuZ9Urw7u6EjZ5NKRexyX6LB3LwVkxrKCnpXC2iDfa1vnVWzbmk7fNZGUk2i",
  "key16": "2wxLcVnYNeJg2pkdWvnNi1rSRo9wHFYVHnKxmBUUfEmmdVkqXtDFEv5bEVNhqkvTuyd6G2fEarcVaNW4cRe8inc",
  "key17": "54WkTWNEtZ6zCUwYgmkGinzwRo9iE3omTK7svtRzQEentNHgNA7fdEvreNYqD3E8y8zgWPAtJeraeotyzyu5aqzf",
  "key18": "4pMrjFv89jcWn1rmZT9Fyjs14ZpSVLFUjZWr58hYFhzRFHxK6nEq3vWnb5mXBtnDv3Ng6jMr52QBXnks49F9CvJs",
  "key19": "5UvQr83Py2ge9gso6VMZF6WmAUrr1k2RVR2qM86Msc42hsDr8mbYWypEd7z3R34rJG921Zj9z1A4wsvEZmTRk9iN",
  "key20": "3JMk7exEXzswTyEbBPrVArKWm1hD8kQaErafbLsTsz3c6fVVHnBcgDvvMCCyapE2LkycJYnzR3bdghZ3EwLsjfqd",
  "key21": "5E1hauC1nzMfpcVgKF4LNy2CHocWq43FU7XvqSNLgJvqmLvwWiu4oGzLa1EnuanSiAqhydhrDXL22gJ3eEdGmJuQ",
  "key22": "4CWbnRdWdtL5LxgvAQ3PsAsAn2y9gpofgwq1E32pv9C1qRpvGvuU8cf4zUFNzChHrd4coRL4CPkPubNzPDC2M6FT",
  "key23": "5UMxoPprhZxsBKX818RK6HyYBVK6pzAiz7dLWiiwJSX9ANRGS6E3qmoGqw4XLcjuJNXJn53gP796AuY247sBWWvp",
  "key24": "29sE5gjxe6viWdRjE3KR5CMgkePV7dzbKdaf35bCa9BPBBmXfN8J3VYHnBppt4pFSJDBjnkxcVMFc3baSimaVtYv",
  "key25": "5fQoyPGvtUYz7yGXjwDQvR41BTLvJj4G4LvEvYXpJ5hx7cwCUb8wArPzkeNtnbW68TKcYXewNKCw1AYTcbL9TWiR",
  "key26": "3injpyijugBbGdYzJo4jNpeN6RwyvgV8fNXRWCHfDVxKbymW1Gih87qh1nYVRCVE8KV8MxjM2erg4ogd6ZRuFb8E",
  "key27": "UQo9szUnLXDVUKeoWJeSW2CbGFy8dDUkradxm6YaHqyc8bidAHqmQeobKCarhWnrX9chi9p4tGoyVPbgjx86ahE",
  "key28": "5xNG3H7V5bjdb74DZTVHaHeDUAR2fm29JcmqSek8gc981uiFzrhVDSmHN8FAMPYVprgZVzryJ8TS65YffdbBQHDU",
  "key29": "7TWktz55fFxVwahRWLjoQygS6GYqLRBenyydUrcheCLppwXd4xpC6cJXwb8aUKvMWnkpeZyWn8dpkxPDCmdV3vP",
  "key30": "3R4Wh53FCZexX6k2tkUNhtZwXgf7hWP8VcxsfLnSFr2HpJLBcX3XH9BsEJY7HZ4ph1KFkQfJoJ2XCkWiAqvzKiv3",
  "key31": "JCGxWxu1xXBaqxv2VaUiQc6b3EdHXXMWm1m8fLi9ofKt7CCtskMwiVVT1f8bXvfzNF5PMNakiLCLbWacbgq5Sqv",
  "key32": "5NsHBpzehidmt2oZqfu3aKMg8jCZmZuYem1Vtj5DAg5kn7C7LMPxdr6zrZYEBM1bdMBTYqFfbfUtNivHk9FovUBL",
  "key33": "5D1YdN5LXMVajjkDsttj28RHG1WvG1L3swanRu4vkzuV6dfWp2m1qrT6aSBfKedGNFiUbeGFmUmP4BdCzg227Y9n",
  "key34": "JZf5Wiz4tVvFLMZB1di4mS9Ep3moczpUg2YnqSFiR6iEf2m86215mZtKYzsuk1YLyFvYNQba1NE4n1dmiyMnXif",
  "key35": "zdyuqQSGk8f5zHhu8sAR4r9WdwusdkGAQVEpZA2RepHc53AaAj4jgCVoBxheU35y6kwv1waYS2QFunHE8fGWSph",
  "key36": "3BYfZebaHcLpeE5N8LZnanesJfo1w5W5hu7qvXqKEqFATJEVZfkmu4wvT8EdsXuFu1aLeRYiq48ZqLbo6oxEgE6j"
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
