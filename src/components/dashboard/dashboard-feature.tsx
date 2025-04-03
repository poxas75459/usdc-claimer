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
    "2UBhrbwyQzPoX6HHkccCd4NEpH7bAQQyrHC3Fewepzn64PHCaMh5wZjBPzBNjJv3k4Q5pWefq8nmdHJFX1iYgohS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z7Sg9Rtj6xhr9vKszGT1pGkQ87jngV3dECsvUXM4sKXWjhR6iV3kVETjrZRWandHSzL31m5JZyAhNwnp2qkSEiY",
  "key1": "247y5WaNasqf11R1XF7zSxzqmnnh9X85puXFUGGT3NAUzVUQ5bpU8TdtMn1mtua89mUj4pQRp6VyAsaRRN2GeY9n",
  "key2": "38Sw2A4BstTjParhgzXB4s6t86iGTspjD8amqyEkMkHTtWAJj1b9SrLjBhkTfqRjz9enxpuTtVda55nhrMQPiMjr",
  "key3": "vrNLZzZUBvquQn4Vivyj4PRSoQWVzJoAjEpfU9wtKV8sVVpWipJdQ4q3kxBh9u5fMuEcqLQy6x6bz9AeaRAtQ26",
  "key4": "5oqFcVugPksE1piGv8pcgstkd2UJij8QH3PhXG7saTz2jkRkSNr4FYjxmArFYepA782BDdCH7Lqm83DjfN5LNgTB",
  "key5": "2WrzzwWVHTYo7asJJQNN2kfuQbUdzrTSUJ4R8FxRHZBmpB9cpqtKnjwG7FqgrEbdLgyCBNcNxr5sbc8xKF3QNdaG",
  "key6": "sbo9ErTiRA5XuKnbRdBnm5AZjPNaENTvR7Egwr9sB4iEo9zZjvhGZHZbQaUYo9jj2jKyu5PFeM919gXZBVcGoKE",
  "key7": "3Npf4YQMx7hX8ZkYAXDGYgTX5bvVHQak3MY6mnf3TjKNiteB84TH8bJhnYjywq8yPHxuuKBDiKnFGcAmeFdM1Dzd",
  "key8": "XodaEtioDYJBDzxXkDkgbub9E4xCVEwjQHd2vKDn9U7SxEKiLLFd1vMM7UQZKgMB9fZquERzEN9CAhburrJohJ6",
  "key9": "2tWnjbneZp9TPULWXBbgi8U1JkcGSkR7U5eVBSbXcegWtXMS2hxENMgG59rZsZVjHHgeHPgrW3AqW4yf1uF9yUTm",
  "key10": "2n8cj8mWUPYrgFoaSRfsDjzxhopX6aQeNpwnqHxVBck85hAK5J8AHQJa5zBy4MSCd27AJVUDmq536FfLKGacQCU1",
  "key11": "5thsFVC1su5UWPdjE2RgrprAsGRgqSm5C1CYPccY8S9JXNrxAKRwZMaGBYPFyWZ6rmS5zejpWFpMLbQzVFeiDRVp",
  "key12": "535tHYqxRMsFqtZ4uQaN1bTs4U1tSNVufXfQkKWet5BCTFt9z7HKopeaTDif8kESqdeyApcSsg9F6ST7kgH4NXuJ",
  "key13": "2TdYtFufGJeLPS8YGS6FagNy6f1oU1CoPNrAyDSwDtAjY66LPe4c731sUuKtx7PJxRMongAFYPvPdwbRdXYzgKAL",
  "key14": "649CvFrnvSm3yfhmPeLknxf6EaZL2qAktA4dgeG9VrTmyah8ykSoRHHNpZt6K1YV9Gd4QJsHfWCqfHu5ta5hp46B",
  "key15": "5RCH7x4FioUa5rZRsHdhSxXs5K7XSTDG7H5yCqfrxHGrgCsniREc3yU5vnNiHNMRfpPSFnsiQLesGxUf2vd3V23q",
  "key16": "4FUqAxMdLHDyDujcP1uy3UZcunEHJqJS6M77v1EB7offzf5fPAqezj4GXjPZPD9HWA5mTEcpeBv8CBkGTK1Use5x",
  "key17": "28qVVvXLtstgr2jEjRgihY5PTmbEYr5fypUZ4kDm3U1i6GfTxbWfWycfzjiYj5Y6rCQDXkgNXCCes3VMFrHJbMvA",
  "key18": "25CWX7KJPb13Q83vTWsLAZz6tdNrz6atTsaBhHu2CrVTTiLTm3WP9n57fAgANMMJ3XmrhZX1MfKU9ztfiabahj65",
  "key19": "4ZugYrEmCM72SDT7h4rAevGUAXFrVfPCPrdwpWDZpFw4deV6yyxCNxTegQgySHPstDC14GvPVwSr8H41PDt93fVS",
  "key20": "3uC47fKTrh5rfAfMn5PBJNFMtT1AYprK5PVMvc7nykFN6wJyNfbaR9iAnqw5w95GVcC1euAYCi8XtEhtx4M9eTzQ",
  "key21": "42Fy83DcLXGH3pX3JQf6doUKUzY49zM3PojjhJhnSSdvZPHs62mhymwwMShxuzJ9HHhg39esbWqYrPFGTW5xUQw5",
  "key22": "51z22XHPmcftkBvotqXMecpGxa2zeiy44Cu2YYiAvH16RpBY57vwjCz5m2EX7GEBUxLJKyysgowJZppqwoaEh1bK",
  "key23": "2ZfKxw7rPzRKB1J52DkNtKT9tD2vghz39y89C83V1FxEhn8R825EyC61r1oqiLEwpLwQMuR8PLk4taBahruWAeCw",
  "key24": "3w9UoXk2v5dzXwVETygp4dfEmDbk5vjQ7pq4jf8zPwvK9DSEFiZMd5s7G7LrPfesXj5EhkkssLnJxZCZD2YyJFdw",
  "key25": "4MjjMB9BtUumubg8VVws3vAMVvbxPNnkpamwa9KtL4vn1J2fWzhw5GLMtDTjuuGUGcdaBa3Eamv6gXLdAojfzfwS",
  "key26": "4xdKWBETJzNGPTeLgiyn8BKE5hkgsYSSSJFmKNuvgu6WPoPkNTdHFjPzh2CknXHHs1iZFHok78iurp5gWRwdoq5L",
  "key27": "24jno4EH7WBazAWGSw8FVKzt4wG443UX52skchxwqhckYNT2o1UYmqf9S4CL4RLMGNaCmHk8e8EnyFsaqao1jh79",
  "key28": "4tsrvypj1Ts2QFrLjdaiqGT6RdsEg8mduKEoX1iCgMfJfgpK8es7fFre6YQhB5m3C5657VRHpRSpxZ8t9sme2jZx",
  "key29": "2TRtRbze89ezdssC876jN92ioG2PR4tAAyXebkYKR4Ssxq5bLa8Vn4h1Yi3eZTY3G15KJLJFFwKb3az4SxBcbKQa",
  "key30": "2r623a8aKLiqN7cmG2NhmKJGQySVdbBi6Q8QUbDEnACnWGDvTXJ6dFSGAQhyP5uUkC7XLQCXaWiRAaE3wtAz1jHC",
  "key31": "4NtvAHgwmtktUvFgaj6nDCTW9TANoJANiJMfQFaMjcj5dstgF3SzSx6CSKR29rtYXqxviiywEbbVHo1aTLCadgFX"
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
