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
    "5zonz7Uq1DZQpWdP1geRQ4pP6grn9BRU5zWHy8Q19vCV4Jy7utiT6dCWW5vwYh6Wp2SGqS8c19C89TZH8KkX7CCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22HipvvhABUkJs83jBnTNP3zTAgK7GzLz7KXJyxqYwTa6Y5BprcXLsozRcryLwsrECEoK5F2jhjEzvRQghbGFr3S",
  "key1": "2ohQB5wgpkLwqSciVXVHf4zULeVitEzb4mJYgTLf241MPrNsmJHDBsNHqvm29SBMo5juoiYY1TQUZkhBibSHaUju",
  "key2": "54Piv4ixyRJWH2uAhxCmHTaJA3PHetE9CMbzBkiMMedkMdvqfnZn7AYYJZjcRRTwoERwCr76X6YEsxiER3hdZgqo",
  "key3": "3iPFdGgJdewDsYA3MmNRPkoSinW8VttF4b3FdStpBAry7uEuBGMKmHsqzXrucEzz9oiuqsbm5ZoHmrKxjsXmoaWv",
  "key4": "3ZGRzt37otkGN1559faf3BB2YHXHHgeMz9tea3X2mY6xLJuUJunFpoHHT3Amtu7aY35Ng8Y3zPkLfUbPpNCtK7ny",
  "key5": "26b4Qg76KsuT2QS5Fm8NAvuNps6hTH8EcwJuKiACyGctocx68kqziXkZsPkCbA1as2jhXypDGAqgUS5q7zhKMNYr",
  "key6": "5ywmG11xWW37RboPnKnbGqsFbW4teu6xmVHJ5L8FWnJYvD4sELGxUhj1DC3esmyrCe5CWNDFpbtv4jSJqJTxiaEC",
  "key7": "4VFavvEn2xG6yF1d3iPrwJXsiyNuVGivUrb2ao5WGULVmGnyPzM6BHZpfvfus5PEMy45bPPptHbFqytndAn9HEdo",
  "key8": "3mNtD6rFFuMRaYcDPBNWNeSLg2AHgbM33STeQg1ebgymgCU8Ffbk75QUxnbLwC6NUbwxasotmxQQynTywrBKK9kQ",
  "key9": "3fg7sBB4GNDLyCRc1QpLyf8zMVNvkZdNovv96ubqvuuzawdAyuL8W8BuFNfwQkJFAoPc9T8yGs48gEghtc2nDhdk",
  "key10": "4nVuna2pDtS9HL9H9Wazr7mnuf7dapUhMVTqkCN6FgVchTGydbcowgpvFTAm3wHCLTyAZ5XD2hbNkq48GWGppyts",
  "key11": "5Ha5jTqXo6ZwGhPMXGtrnn1ovnwVrmD1rN2Tz2o4roTBnTwKZX6QFLMYxPXVxuuNr2EsMchhGqJg5ys1XxJKZYCz",
  "key12": "2EVuNiYZNEnN5uKS9XgodRgKDfpj7uJWFpF14FSEFmAUpGzaLrAow2yPDCkD8U3LvANWJY8FiUpSiYiispiwBJLM",
  "key13": "5Hchi2eq7JefAj42PoVSVnsHKZ9vDvRnkVu9VPaw8ADHJz1xXRMJKJhxL5SfBfTHazaQFJtP4tkAydMkehkpDQYu",
  "key14": "4VWvdJ9ja9yney8scC52X1q9YF5vvqEeFeqH8nTRiPT3iyZ5rSzgypQUJSYbEuA8EYtcoCnNM7ix2SpDQouGpWwm",
  "key15": "4qtjsij4AGnQi3tUJgqcU3VMUdXHpKCu7B1FPWzJGFiq9CFdw9tuY1YiyHhbBqJTwi94mpM4T9qGa979S4TJYURA",
  "key16": "MnzdYPdkhwUAX6ggyBjdo2ArrRxXznVqvsDdT7YpkCXz1V16g8KbBTYbj5Wq27BfEYSAzv7ETNEhK5c1ayNmneq",
  "key17": "eY5Qk6vxqNWkDMUKti1fjfTAzJCUd8DCi2X2VsjHKg2oyTYC51edkuaRjKtf1ByjaJtW1SfXAhhLuQoqkN8M1CS",
  "key18": "5BgdezZya2LZKRyNfSjMH6Rgz5ynwmzqbNn3pWjfdATh39sDCNCe5x2mKxQFjVkJ15RYhmcxqKt65KJ4J9ASBVYc",
  "key19": "3C1giwvUVPu3i9idHLugsLQQAUbRbduarSxCWGCH6RHGTvnuR1UehwkBiwEJnnAjSowqgcdbVe1v6yA8brxkxmCB",
  "key20": "3igAtbyvbgdyzcn3rxeP7os2wgWiH1fiH6nwi9Z9fQjPHxZ2F6YgTmtY3L1Q4BwdS9oCPMHPd8GYR6TFBfTUqLzN",
  "key21": "2xsm8TpPNJZAVRKn99PeBXAPyrMJkv75xWJqaX1r96MBzS1iVYkuNSQdmkKhAKKvqXxYjbAnsRNpJdw6Nnx2d2Tp",
  "key22": "xk3ZVBFrTVDyqMYgnfe5cmXDAdYuH75JEBoJohZ3pmTy6uAT86aYSjMPcCpJmPC5WT5Gr1KzruFYCH1LSubPYCv",
  "key23": "3uhFPFnaZy7PNffx7VFuCX8yEqNzREyNNLaaxA1Asu8wzEFNJQFyHbomd8k746HJDYJq5tzBbSVBCjSSk1WeqWWf",
  "key24": "4ApqTgfHxoAJccQhk6fDRotUepvy7X2QiFr8YFUtqdVK1nSPUMEfPYxq7kXdiz4jyrXf2MmTg9noTiKrW6c7Kfth",
  "key25": "5zazSKZnXYWxJxW381djad39dpgy2WY9YH2j6TZip8zkMWTyUQKowcDgacPEschDZdh3aFqb9NHMbicWpX37QwMj",
  "key26": "2wmoXaRvjJ3tfKRykwp4TTrqY2qUn6nma5m11fMwx1mnRq1diLnWZxsohLEL3VYbTdBHJgSExnHGXYusUncxWyCh",
  "key27": "2uBxLLe4NZxJF4t2yRhdDZZPosrpCnwLmkuQJW4ANYSTp5s1aj6K1YdmdswtfbB2e9qH8YZJBcQDGVWRtof8NnLC",
  "key28": "28rTrLRsnh1LFg7SLuMtuevGqDN5fYnScHzFHxMwdbb8yFnJQCipJQUSYYbvdVnWyzSmWyVmKvTrdbKuBzk3hNzL",
  "key29": "4i7aixZTJ8nEdfRRh5H9Mq4UzKs9roLLdoPakd7ETsMXwD7ZsACht2oGGwTPWMxyzaVAuTiAQ7CQxp2F4PcicwTR",
  "key30": "M6U9zhAzV19ezLwPKnRuX75pV9o7hoYPXSKKnhQCF6f7qgqHjqYoXqp3ZhTkUAZBcWfSb6UWFF6eYyX7Kds6idz",
  "key31": "36rauBcWJQs1h4NUprFttAfehTPPPZ7yDTz4erC8qik62BTSnoiKwbym62ntJM1YKYi4XDber74iouXmaAoFFSRv",
  "key32": "41ZEdZ6SCdzJMbH1xqEq4znod7hs66KfUZusNnFsG3shLvYBjvm9xHZVEjgAVCoFzkC53X5eRwHgnWrVjVjR2TaS",
  "key33": "665K2SLgkUPQzfiAG9ueBu85PjcL72Gs2U69ZrrNLP1wwSwYLMCuubxTqZdwZbTTGKARgwWYYmUDC4oxt7g72WZS",
  "key34": "yGMU1ydQwc8EtkJuvoVUbCzowaSHS71zQCs7XzwJAHium2snq5Hwcyn1pCE3diVZzZ5b8Hony4LV6qxq331mVd4",
  "key35": "2FBN9FEJSLpEV5jQs7aD4W7fUJDwEZFBbS89hMjYdwmFiDtimLJedcM1MnBsA7GQp9Npy1zM6VAnNPEkYqeDhwKc",
  "key36": "2S37FkbkthhgDgPmjG6sLfF2kLp6u6C59oFyTCVFytAp9BASNfbJqhMmrZVS3FN8md51pbfwLkVVUd57NWYRqjdz",
  "key37": "nrmYFh4n8RMQX1WceaR3gckyrkBSbjXmoHGYNmiw6t5W2y6D3fdLq7oQSviYQHEnn1ziKGfseTuviTLpXYjiaVY",
  "key38": "449rvzai62DGmXeo1CwLbvPusjPq8kJKPkQfL1stEcxJUTnWvvBBc7XHGWbqguTagusdR7Ac78NXmer468Vp3Vhz",
  "key39": "5zt6mGRu8MR8uQrSP1pJmYV6CS7qGpdP384AiB5LdLcedGjTxVJMbKUptZooU3TN7aFfnawQ4TiirB7SbkriJZYk",
  "key40": "5bGDpkyw2ys36w7uM7AQAijKGDo9pjp5fwNdhEequocJxuCRQz4JL2L8skVP9Gr8x1YJkzj2kRauoB3TeRsUKuhV",
  "key41": "66bb1xHnR5mBDuhi2BEzFMiKyv9C5bLaJr9Kd1RUuJ7ko9MbJRutLXUa53dcTEEqfxrWo1amL6nMYJMUz8xWfgE8",
  "key42": "2Jaq88K3dymuSRkeZxwULrfeGDyqkXoJsgmDNwnw35APchkjQ9zzYktuAa2Mi5hUsBRFjfPZQTpEsWYRQ7scQEDa",
  "key43": "3FMk2dz7Lou7Zo8rmsjFHL8CWF2eBui9DuMepGYQff1PSRU7qpSXcGwqDDiXz9EZDbBoPWqxbuCQFqL7ahWRNf2W",
  "key44": "5Gn6uRxGpvgA1nKEMFE2r5EEhV57WknpnjenKr245EqtxYjbxPBDwxLRXwWRjYdLpjByUGaREUKpfJqEpYtNfMFL",
  "key45": "3SEZFEHg9ZUH1VUXzqNYjM6maURGYnmafEiYnQHYWmzs6mByY2MfU57YQHxh8LDdHjERnaDu6rSRLBgcVwiytFwP",
  "key46": "3YTDyBsn3QkxFhiaU1Apa9r8DHu5zxt6rdGKT7jiJWj28W1AC2QSoJDZBPrik9Gvn6igNYKB5j5va6vtH4Tbh8hs"
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
