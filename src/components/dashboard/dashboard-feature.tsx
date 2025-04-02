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
    "3pS33tpKvtP7pJfzpTYhEzKyNZfJ2qZgPLYBKoJnJYHYJjHRBM4xz4APkxMqRN7paTvEsBUwRcTiQsQyENj8u3AZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L7igScLm6nzi2nf2aXxvRA7SvVjehtdtNNbAnHH29DbAPCXAtFVMp532jvijhaMRv5V3mxYZ8SejjpNp3Fx5dJD",
  "key1": "3A6q2AaoGCayiq3q4g8ZPZrNmUqDk69rpGq21tfNgN5pGg8Gn89BGAqGidrrz4c7zPWxPSarB9hk54QrtqKZZygt",
  "key2": "4u2PnDwdfub7sVmZLjyCa2xT5zX6rYEK14qSUZtGsiSF3aRD1rVjqaau1Xxsfwf6xQc2LnTjAiZmfds86ef96WqR",
  "key3": "5i8XLVWYrQcbPeFjijnnyfjDS57cKMHwkbMn5PoE6TSHiSgMpPeEj5v2J6P94vLa2aNZBgiw9tA57mYQRyTfrme2",
  "key4": "3UvnJFVzrHe36YpfeUNU7GdewogFLX7wr2UWhMza97Cdiz38KbWtpMF2wV7xtpTVZQZh9ZhJugSjBkPFHH9zKgoh",
  "key5": "qaxvKVoem3G5PuNCwtcJutLBiBjHoorTU95974Gcbjje93vRPe99DPnYuRBE41by2VVy5SUGVJ7wDfeeRXpnYqN",
  "key6": "2xZite9ckUkx19xqQ61yX9Eg2nHMHpDNYf8vFT4qypzkb7uQSrzezef6KRDx2kmVE9Ye2P2cEMVk49mk1rm568cQ",
  "key7": "5YmvcD7Qv2epnZ8zpRJ5otTucrMhDpsLDs9nv3t425pxGxYpek4yfjJrzvmQJ6jPDeWvaQEzEN8m4jVmyXcWZ3oX",
  "key8": "5FCANUbHhLedrYMrYSqmixgQqKszMZdZZMKYUj2NLDUVkN77sNmiYtfWxNcxGpqnom7NBmaRmhsnhkn4Xuo7uxfh",
  "key9": "3hn4VZ8HamRTFBwbyyN2SyGbrzZ3YUYc3NVR1Szai2jExMEDhCYkE2HLotEyY6R2sTUu9nWWuJ2JwhN3MmNP4q6D",
  "key10": "5HbmNNuSirmdP5nDegPYAJPXfZhP2XVDvPxjS9iEBp8Dh8hhujm87rk4oE3eseGkAvSSxPtoEuUhVsP8mQMyNGDq",
  "key11": "5bsnNWvq9JWSUDv7taU1h2Bb3RowjUiDBF6VfEk72y7cvKjsdYo9NydSCvEpot1cTKXETJc5h24zxxKf8oY9noPv",
  "key12": "64iCAHfhS5Dd5k4Hy8AVyFjNwXmT1mQJ6qSxPejozjv4Zmg44wH2UH9DG5NNC29sLxUNK5z23s3jAS1CskGgHacx",
  "key13": "qqZpfDsUV2bjP32HDbiYAi8vqWZvWaZ3qnzekwqgG6na9XNfCpXo3pWi1g93R6MuHveoukp5KanzmfXeWke4V52",
  "key14": "2WpBLPnkBA8Yo1dsXeRt1iLk2f4qBJQhnyzeYEfzvAixa6CrsLBM61ucRSKCQAHify4sbQkS9yq648A5rcojhRXK",
  "key15": "3r6Rkwm59VbZZXv9r271Es3HL1LkRCWdfxwEkYknKrtkJN9DJSGiJyxS9qhXynzNHjBfAUF78ZcpzeKv19YZJDxo",
  "key16": "YpfruT45fnE9phzcPtnge9ffbMDKwLDu6YHr5qRjxRA6DBQa29JV1dbfAJ8auBjGAJ81ak1TVNEbyFvGNBC5p9u",
  "key17": "63PuZm98fP4tMVhik6LqV6qS22z55ynENFX39q6g4eQ8hA6A5jDiXu8XhZC34FsSY4u4tmycke9Bt13uS7rY7tcc",
  "key18": "2wwZgjgxGCYpTFt3iz6dNj5NTVUaxpqDKY2AETjf6bQ8pZH9FyUBY5Ezj89qPrSTXm8k57KM6sKXtKfvSWVx7SjZ",
  "key19": "36r57hW2RoY3CRxfCWCWDBLBBk4LFvPCTX8bH3SrSYn3gsq8efBpNqVGABmj16Kfr8zQuQ4UvWxNYd9qUbq7XVq5",
  "key20": "2UagftvmeXTcoDTSnwJ68w94kM7gKbxSP98e1e8pTDekp43kuZi4QEo4K8M1yEws3cXPBmVJCjhYxPPo7CDdXZn7",
  "key21": "gQHMnE4Z7ouiRwx3YuS5p1z1ijo3SEeM7vAgeFaDD1mha1pZPbZim5wnRsNjx3w8nzCy91s43bE864Xmth15kLJ",
  "key22": "4RXgQkbHGAzPeC8dyTyzMrX9kMswoWftGMwhwZiTSUydgBBSSmqZvjyv6VEcm6nxLYtHjuzbEhHebHToBsEmjwgu",
  "key23": "3S37qDo1Zy9aS9evaVu4dcZ3UZUXxoCs3hYz59ptfgBoD5E3zCSdowzc83pcXBgf53cEuMCynvch63NC21Qpx9nt",
  "key24": "j556B1PDMCUHCANfyw1tbYY59mWHSVEnwkK6euLctrvmhuRSL8iJ79hJiSRNLFqNT6tHyu96bgxGwBeJ8Kq1qRP",
  "key25": "29UGYNcRo4TYFLeCUfxyraso9pjbeZ89syYtAzQxKPjATZh4wsSCpn8n4rhDVJGu8ThktV99phgVapSZgfwcXfoD",
  "key26": "63s2DFUj6dHPwxw9uWRDv9skD5TeK4KFJJfDkLhGrBWZEtWVB9sVv7tCBxk6H7QW22gqiKshPTmtJ3RYS6zE7kVF",
  "key27": "32UvuutjNUfn6m3smrX1LbLGSfbU5QCVg191FAwhF61cDgPVvQRPZxStio7E2gwdwJWJ26WmHiASS15KnEc3q54e",
  "key28": "5LBvsN8kAcATKjHfS4HhxcXZjzYpxquqyGXy3be5sB6Yh4QA9LCZVxVpB7W92c58bh74ExSS7epWpmTCBie8XcqC",
  "key29": "3CpKpZJ2DLBpE35GHCkouoDLynvWcgat3bdGzyWvcgfCtuYx27qvdLNuKi6cYUtE27jq3WbjM7d1n6LUSC6dy3YG",
  "key30": "55SNZMdRis1RKdHXzntbSdqDb4L5zRB1N4tF7JpyDaUSsyj9H4qxhX5aqk39giXmdAPZraNMfYYALi2CRpW4xUuE",
  "key31": "4avJSQ2bJXjwY6ZM9TSdQLaQxYe7p9zvQykP3thxB6oDv4hfd7KftbuzgMgsrPWR1MjkTtaxfuhTFkSgvCHaf9vo",
  "key32": "2GmKJCvLgn8fetP1PjvRsET9MrDFxhJcAFgwC86uNABxhWfZbZsbP7CRwniQufzEX5mZqS24JeQzkjeVKSEzp4rX",
  "key33": "3o5sWmt9FBK4QA7iUdUMr52JSDB7wZT2mRjJX6MSFXqkepkPtzrAppqBZVvHnPFKQ4N31VvXsvtibmuujXGRRMNq",
  "key34": "2kgX4UKXtFWboLQVGD3BUsmMog3rPrhd4gKfeWiDuYxK9GokszghiY2ffhwfxg4Ydmst639Dic31GHbSm6A739G6",
  "key35": "4ZW3X1Ty8pDfgGzaRN37k9QfSJbguhDnvqAcFNRwdFj6mPzXJMamaTzBHEvzaayPK475h1ZS5Eo7Sb8Ds1m59T9e",
  "key36": "2TdR2WWuQeG3yYXTsxKUD5tqzHJFnU4yCFuphgXo7ifihwHfTqgSWBhVKwWjjNDVkSUW4D2TjCpu2GD6fEhsvxzD",
  "key37": "3273vhQYAzfTEfcQ7E9UatUo6DzXX9kDKL9UxcuaKDms7sWUfWR4PfC4UzovCPkQnW2LLQh4mVCvHzVpJ5xQiEmr",
  "key38": "UEUex79TuebWYxge4cnWfGHq9qtmAqdxSiynFTCe9CrEyA5GvSypHWM3XpfMvSaLw55RTW3jiUcM8jBDhjrxNeW",
  "key39": "4kpX6kyCA751jcCtqcaeCc8drNpsR6XkMN24W2WoDybQ2wMF2YhVdLPkx9pWkuVAiNN2jumNMVKMGSnBVqhVdd7v",
  "key40": "jUQGceeLXNZqkxAwiFfia2bvz3SS5b9xNd2JVJYeP7ry3FPrcHV1B9H7edxWruSfiu1QKbW9hJETQYSZQmEAwPv"
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
