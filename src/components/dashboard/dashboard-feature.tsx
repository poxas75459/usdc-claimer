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
    "36oPP5cqWpJC6b5nrwUnX6MoNmfqZyF59WtNx8SkfzW6h8ZYPGy8NtGkHhPEvbnM1yv8wobDALVH3e2vsLwcS7wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yxUi4s4eczYJi9495qK39zV9DZY6K6QedRKeUzwZLj9PGPF67JB5cejYy97CbNJXQ3Apc25te1mbXsQ43djxXi7",
  "key1": "5LzXvnLKM7wJUXJdAWnh6NoVo3RcHrfhUkdoEUw3FGv2pMX6Qh4joTTQyJvVNEtg9brULuWWjxmeUpssWkgmu3jQ",
  "key2": "2i2k4LMQ2U3jSdnTDtkHjm3b4R3Ceh8apryxCQizUNxf2qSV35BdMLhBgdgskxoYvYtEXsYGZtC3hjVSA4xnFBBb",
  "key3": "2rrwMJZAdiy2djWLSW2unrJdfk9d7T6YHUm1TjuFaNHNrMPvk7DaM1xiUvHZSwjBTLPWfgh7DHNFHLrofg7UA5LD",
  "key4": "4nVz7pS6VCBx5vSrXmCYbB7MRX3fLmSorTBwdA91abuQMtrXQh5pv77DbhkAg4JJdhZRXXboBuxtiSg6puT2RJ6W",
  "key5": "5TYEWfwfNMzL4ZKZJymCyXoKRe2RQNEoQNwQfiJHhGJtKuNJUC8KHwRG5M9DyDM9cV3VK9QKgkkUhd3AUDN4bH45",
  "key6": "425YrNgwWyUZmzcCksEwx4nspdwVeUCe9V6128oyJuX6EKwgdcLxdG3gtDHaA84SDLhNhVZoJPDzuF5m2p3xNT5T",
  "key7": "3rpwz3yXQfWQVQTTHxz1kmwsnhG7y7vCio9FEYAbhJArjgPgcuAjb5eXgvKeMY2WvHms1MZYpU2PqhrfgkKwpWTR",
  "key8": "5ipUXVxcgviAJSiDYqRg2ieUH6Kkf6FLcB3CpzoFLr5KUQxAdTnhvjhGELWh1r7bFiGoEEpn5ra2yruimktmF4wN",
  "key9": "5dYJ9BubZPpEZyN9nLXDQx1XX6hLkKBuUkq8Cin9czeKyEAPw6Qx5kGZnxUXE4YjMnJk1g5XwtkpQ5ZWuxK8JEt2",
  "key10": "arTUQDVEvXr15raFQVPa391XCcj9ysWSFACmCxhWXDEUBDn9nmK4qfAQv3hCa5fTsUE7v9gywqApVZWArGGmsY9",
  "key11": "5YRzraniXTcthTopNaE3xdNepTik77CrzHyP8QedPNaHyT21bdCBNYvX133R2B17JnygEzknsU9vJpxbnvPv912R",
  "key12": "22ENt8K8po2aj4FU4mysudbwpmspPgn3WoFUYWrR5RpXggpen89qbzQn6CsPyfLnPRuwBeb8NXL8yAkkGBrXpeSg",
  "key13": "3eetKGcgUxs5UQiDqaR2nENs7xgkJJem8LCPEJaZVWN8re8TD2mY2HtX8G6hpzXPqiJmGmyhxukHBAP1qp1xgnxC",
  "key14": "4v4AtYoLwN7zqWQA7DbMBZCTaiApgMFnZJUi3ELY2tSTqqeFT6f6CF6iwEYaNX2fwsCZ9SQdnuy5hjGMpkSeVP5r",
  "key15": "2qX7JHkftspACoR1GUmL7dof6K9hgtqeGq5RjSAHHDpnYeKvv9P5Ube5vzaG9XPrji5CQ1VANA5HnRHK8GjVoxB1",
  "key16": "LhkbegxT3jFVGxrTSqhqk8qqW8feLXB9z14XFmUF7qc7m6JEMC6jazTuNTwBHZQFyEopmKGsmUXkLrwu83YdGLV",
  "key17": "2WYDswjCDJ75zPnyv5rBQEFZvS42f58fHb94uCticiRxZ5z7cP3V7R2tUg124VaQHKkvzkJj12qX5AeYZAYMz2Xw",
  "key18": "37wkH6VLD3QzwPBq6eCJuzJy3qCXXeNzfsQMM9p78BHVQMSTNkpDrYqQfycotLfuYytXQWbFNnLLPv7J1MJs9ZxB",
  "key19": "2Vf8oR2inxYkWMydkZo97tfBWqjfQfNmQ2dGyUA6UapfwBw7kDz9EoWwXqu6CmgEmQMouJmFGxs8qiHeqkM9rQTH",
  "key20": "4VKcif4dD8FFKdiAVN53o68ZsMdBuVhUc4VfjLc36waSajZhyptrCz5Reh8Hk6yupq6XsVmFfmqX73KJVvKZAAYa",
  "key21": "4HNaSbdQo2QmCUYHJDURcn35sLYHQfHJHJwvEkRyG2ZGDtqsWPJcbD57ben2jLSrjPXC9x7bApRv8Cpv6fqmNzP5",
  "key22": "5fjHHiyMHwnkyaUa9yzBfHZSreydnBj3snRotuiKt9CpYQTXhCjte91CDS4YQeozLwYxAkHVc2UjYsF4jhpZEPAJ",
  "key23": "5tpDBjWukdoxMYQe336vyK9Wi1a7GPps2ZxewqrGp6WSAcxcP4TGEAjTa9SxXGrpxDQmokKz1Zbx8SZRMqaXLyPV",
  "key24": "2rjHu7QF611xgFr4X5aYVm3JcaScp229Hai4auv94LDe8CAZS92qFRvzrJpr295CuY5Gn7kQ12oD1XQfj7d2ryKm",
  "key25": "3oek5ief26BKMBs8sKudj7JqRfxmakENmHhiYXbJypWM1L2fgqHqXC1kLiaCm8e7p8BqqVuRTYCmAfiiCPXQx6QH",
  "key26": "3pNh6HtMkoXP3iGuPso5Dh6Wi8oRPJrxj9yEmB9SYCgbFk74nRQ89k6MAExetnK1QNHUbhvjyY2NkgCCdJv7G4cy",
  "key27": "3EKkjJwCVPawc6oCQ232yg9rPv8MvD1gnrhT7n82pqCwfKE1wyCWffUfvmbwNvDVANFBKAEynLwXQRrRJD7iKdBQ",
  "key28": "4Cqrcw25WT3QyqUcugG371Cbv2wNxLmh41Nj87nQiR9EiN3f1VA8mHVydj7oqMt7Ke6iBccbZZYuSa7wKUDCBsK8",
  "key29": "67pKE3AEzWz8FyCDTXNYP11ZRX5Sy3NRHvSauv3NdZQveFkwR8eJRgZZwyb3NGg8ZVHnKpVbvr1U3p33K9BRjNTE",
  "key30": "3pA8EVVknRQaUw8ZRTM554Y5iTMrsQUUBcsCHibtiq51dUKncXGmBsJUtsVNTKD23sPahu1x9BTYv85Zghq2jhmi",
  "key31": "5QG3hCMVyeh4b7ZCz5yd29ifAranKboPoWi99ZuSLPEMTAB99Ee14C9u9tdhRMkqRzJkjo8obhDuZvgQY6yyAn94",
  "key32": "3aZjuATrNUNUm4J9LU4onQiXRmLYc7UL8y6XFULuPV6tHe6ESWEDgw63fA2iD93nWDmrbgDumZwkqajMtcmkLyhB",
  "key33": "4D8wQdCGhvZzGrkdkFapPJg4KA6VjZmSiHcdgnmuKWXW3DQtccb3eD7NrQDDJ7Ppzpm5GttfH44D8JCgoLZXEq32",
  "key34": "4521UcAwoyTU9ez52KD8va6w6QrNHvGcqp5bFPjoJkXv2ipzbQkiUKU8GFuGUBL9nCpwMKEcKo8YHWmZ52THBH28",
  "key35": "2WHS5e7QE8PG7oUjfLCeAidjYHhQn8fFuoyYNjNpWeb39GszA4dvXf6hxFb5CqygjcYitbbNJ4Xmn1yQV7cJ9XQm",
  "key36": "r26nEzuxKUqRyEQsMXBab4BrffXhahFzZDNDbeWvwBry79KJxxR32xfWfe51jNCgUi6jZUMNpG1jZsKqKFY1zPL",
  "key37": "3Ujeyks6v1DHusrJrSNrE1BqgaQtmuSoAvedvRf8ZexvpTVgA5v1Z8x2Ho748fcmadc4k93mLWSdhwg3pJka97Ra",
  "key38": "yS5srkUnnuyKsqxWQAe67MTq6tEPkxjaZjprUjEwecW4x6C764Sp5RHKkBPD9r9uYWyapMpcpcJsyrMt1vDFFXv"
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
