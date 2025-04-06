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
    "4z9QuaNhnbZRq4EGdYnyt9cHQgyCzzz4eUXPcSmMcJLnZQnciLNwYvtz9tj5vQ95oo7xJ1jJUuV9ZWZdb4TJXmBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v2jD4cv9kvr6h1cnTcLwSqUW5ZnoLAsgj45E83uN38ZS8dsjzGTiABcWqUoJ5hdk29txa2XiffD5vdMRnbbU57C",
  "key1": "VJ1kucb8hWGSFVQLbcXBeWrzZs5UoexbxhBcAJCALNSVofwMUuUMBQHHAtZkZEBPVrLFaW1Jy7JzdspEKrgx1VP",
  "key2": "GBEHbHq69gZLeAgyGkDFgVTF1Cc2xLjMtHxiZSR7CLfRTb2sPpZ4eSmjpqx5hBXg11ciM8E1CsithMZdjFHpeis",
  "key3": "2iHLUKNEFjoRHE96xv2kwhmpTgAv11v68gehdiomZJugEghqAsx5LcYdEGjn48UFjd6vbNwFnjLxX7AdtXkqSDV4",
  "key4": "44nSysvmjfHwrc3aoJ3UEDNiyy9wQ4TsTcFDSALMzZRxiqgVfHyTMoPTw4FMxtcZA9QHkY6ZBxbYAfg1vapEW1gH",
  "key5": "2JLwX7n79WR76o2vt6h5sKX1KKryj6QV2e8pGQG8QE6EZpL6MXCnXzc97dt7NyhaiTP8avJqoY5qcLDXeHM8Y1yN",
  "key6": "4af6zGCoVr2h3hykmCYYC8fDTVzMeQ4fvUGMGX1w8rKDsyu7iknphGkPmUcBRotrzHPym5ob2ZJR72Z3EjND6yR",
  "key7": "3KiFNz2GY9viVhTUBskDGyqzuJvtb1aockqgPWzmAnX895rVgtUQ6Dhk6gedQm1mHYCj1r9sKNaK8ioGX3Q1weaS",
  "key8": "5Jj3N6aWH9UgTcQTWgRZMWpZLqaZvMRKJ83YDyPaQuiY4BDyF5fuNcCHiJB1sKgXgpQdyZ5Du9273Wqz347SeBNg",
  "key9": "5bnndyduSLdc187QFuBEKAxBV8pvVQiMQht6X89pFe9GPH23gAsK62fJsnZ3dbzHr9X1cvUsoYHRtTGF83o7T5gc",
  "key10": "GLHmrqWF4g3vgURd4d1o8Z64FmvBCoj4xPjjVfcrRQ3Eh3TWeNTFHoxm8X4EME29Rm2EwroUTtN7NJX5BHByoCm",
  "key11": "E8oJgTdSWHaqZpV2SXBrmvmGEG3gknkz1jiqTvjh3Km3eeE9bHrLWVidpYtRrJE6SJev13nC5Kb9unFMAnoQH6E",
  "key12": "csjS3dgVqpk3WAjUJjNBii3xeEL5pTWEad26TazgBWaeRqxMZpvsDbXNEMZCK8Q6RiwL134YK4htE3QnnhdMe4K",
  "key13": "CDSgo4NPL7h6FrykXuJ3qb5LYhEQaLhHBz4VLV1pXqn8xgT1HXD7tBiGUF56K1GHK7S3Z26SAm5nyFbWTbhrynm",
  "key14": "roZfRUykrC6pkYs35XdqBNcQuzrPHn5pDr5oQhbxMyyhF2nmxVkeyt8ApdZPQpsasUhDwuLriFJqesU7RWx6NPE",
  "key15": "4bzMrGxsWGTKjv534WSq8wpzN5s5YdosHYf4UHGfwEzCkrJYwvDwg8roDziFy9RJZcEWpVnFLqjW5R7a5UTtpGHh",
  "key16": "2PXx8wbRSRWF7ucrAxW52ZwiQrj8yzhvGoD3Qd6HUP1fBZWY5i5qyENPDFUg4gv9M93eMZFUMu6rqCx8Wy7ma79S",
  "key17": "2f5WUdwrFzmh6QhyXSLNH266aC4i3kHAx8MMd1rdY7zcQXG1RhmiJ4rTBijmDT4RvLqkipJ5NJZ98kznV9HrhPD9",
  "key18": "5CsfPAgdZintfT85JvyuFamdszREZPnF2hahm8CfaAHuPqYLAs3YJWtqQa8Ad4DnvSUSL8t4AaC3RdaKWhqLQz3S",
  "key19": "62WKAHq5dQr91dDTCmM89FyqrvgjSbViNRJdaL7xKG346oRvZmtsHnCtCqa68NiusQ6QBrbMahZ227UT64gpzkXs",
  "key20": "4KhoScAMT7bwRd8B444cKh1vL1E1KfnCVW2Ut1anDupCGK2g8q5rAxRGNYi3R9ZiJtxZUTMy19ZLFW7FNcRhbcFu",
  "key21": "TppoatPvrseXZvQGsYfhMNiqu7bBJc6o1XUKkG9H2zbATEM8HZFu8muM9Ee9Wh1L6RanbnWBLQsZi7cAsx4rFkL",
  "key22": "5ggSChu69r25VSf4N33z4BDYaJokkYN3q2tfLgw69RNp31Dy2N7k6DkWd9B3jZkeq8xCSCtDhC8x2f2EK6C6oDNa",
  "key23": "3u5opcWgL2jGtodwdLpaE7PtwMyUQvFvqqLaWMBPjiRsw1TtBZBBCkycb2yrGkfsLuKvAE7Yp9W5Lkq5gZznz8cH",
  "key24": "3wqwMTnNhvHNhtGEUYw2a4YRVXRd6QdcN7rUWjvD67K2RdvexB7eJGM1xjRTGJ75pKA9RbDQTx9B1qBgH4X7mGjQ",
  "key25": "5eVCxxkcXgj4GjZoZ3E17zz88Cfp8uG6mwk2C8ai2i81tC4SjwVhrvoFHjy5rUwSMEANwvboNk666iaue4cEm7Wu",
  "key26": "63Umtyome8cnfubxa5WDBA3zh5XVQbvDNYjL5mw3ifDofzAw91SNK8m8FNH9a963mR5p8qUnTV2eeXw1W5NP3JLQ",
  "key27": "4R3S8dP72jW8vPKeq6hB8smtqe9yqqKT3b3kkniy29pGxpGvYnPgU4fKKJ3uiakhwM2t9koR9ZvsWh9FA5HWYxeM",
  "key28": "3qLVJdXDadvorPDnSfEBa9C8AJcbwupi7NqLE18LhnCkriCLM69ydG1vWQqSUJvacKeQpCYTauM2ynjUzELzCfSx",
  "key29": "63ea4hwjn9epHjjB1ythR3LVCYf7KJkWDxPkexHq2s1LivHbeofyJgLssSiWYTxdJisBAsyXqe2kxuzBU67TKTAC",
  "key30": "QRdLPy6zB5dcZhrANTNDsqbGe6jQQTJQkYFKpgiCzRZEu2JbhP4sMgZsVTXSWsCBPDZUmP43s1KXiefr6VnJhvx",
  "key31": "4aqtAcha4Je3HwgKn8eFfPVEv1qMWDFj92VR68AFJmpSfEMUbGn7Kw6ngPmrSHiYdbbQyd53Kz5Apo4htK2mMh2Z",
  "key32": "2i4XTuQVkdp21tgJdjuBbFknJCDQYb2Z65amsoFBTQnxEhF8JJdQ8i8ydVNrsYka7KAro6waqcr3Adr8GNjjZvXk",
  "key33": "2cgtE4QuAZbLWnFKvwPwkpu7A87bi7ZkTcqHKDEqPDJ9ULJAarhQ539pyQhnCgxWL397A7bMWEsCXt1kWXNwCG4K",
  "key34": "2PJ8R27hWaNr4W5VVE3X4AYqBXMWw9yeuk2ioZ8GtJRcxFDUvbjpTs42pYU5DfygjWY2LYNi32YidqvFACumzBgk",
  "key35": "RbUmLywLqp46jrTRRwciKwVGsxrdRyvBVBaDY34vCq1fSNvjGd2LVYS4TmnQ8Ne9mLhJv1Pbo7eNbwnXYMxd7ha",
  "key36": "UjJFMo1A8Aykd4qh7ZCaCD4piQgYephm3Cpn5QVxvtQm9x18veyqF8nDu43d681D2KCNX65zFq93yhwoqj6n7xj",
  "key37": "4vpq4n8Z3FiZ2adCbMHCx3ZujSMZZbmrA88dvp22Y3KNiuixDRcd4NWSU1Nyj58NCn2NbZtJCLvm9en7V9Begi47",
  "key38": "3vHUMWJ6feT1Lh69hHX6CsiBqE7hcWv2btEkCaLGiBnMzBhinXYFiUZZwgHALzrRoSHxJfgTHoAJptzsP5SDp1TF",
  "key39": "5NveZo5VtrxnaeA8M8WsTwBnVUmREsin36V5ismkevRizSFiAyBiXjjeoRMTzQBpWwTPQdaRFGgj8ELQE2XZ5mCR",
  "key40": "38Yj8LukfyppLHT3egajDR8N3teYSfyZ1LmEmz5eoUfL5yhVSYDgPRxxpzcwuZQuRbCapDt4jWsynSrtgiGb43cM",
  "key41": "41M7etVExfwxXnkxZP5H8rtY7ftEj31beW65p3BV3v9XAZiAgU7EaYyPaGYfRf9rZmCfsYHfzHoUCAT6guDTLB6q",
  "key42": "QTmmYUeqwtaSNuavJWAu2rRxiEuZynADjN2jd1twB6WZbCakmocJUiXvCrMnYyrnncfaDRsH5PqDBTS5tVLG2We",
  "key43": "4WuzB6iSyHC8mysejuMftSp93QQdNAZYHy6KXxjhxN6LF8KTYqVs5eRnvfrwtuUoJFACp1VUZvmccbKnD1hAE7UM",
  "key44": "4wW2eE6yvH1APV8HzfXL3aphFbSHG735vvZSXKN1b76XzrCQqCL6NLzR9eJ7CXLVcPcvVtRzptKqBZRTaF66Cqku",
  "key45": "5dThH9EBq8Hk8XiQMMXrFUGXMonxMtS1Qg5T6Sf5hWuZL7VpHKU6xBPu5uQVJu1Qj3NbHjfSjkTvhuaH1FUHTnnT"
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
