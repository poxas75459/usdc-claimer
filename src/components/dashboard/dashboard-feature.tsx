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
    "47quMn4V6jHS8T8N2HpWAN57Ru6ptCE5QwkApB1gZWGmA741An1wuahWpR9C1EeVSkZgfTkR8MCWj4hYk26NtYoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dSDNdB2YF2gJHdo1tySiVqs99gPxcFA2FL16jewrGLfA2YAyJHMaPcVcXPTb8jqgeBXjGHnGMRDSSY2L2kgTF2y",
  "key1": "CTmViFu9Tu17xkDD5zpUAdz3wKQMt1yoks6TaZPGqLWaCDce4vTyEEt8yKtmnSQSu2oLniJErJN6JJ9BKVrH8sQ",
  "key2": "3xcDPSMMLdNTnobLWw7UhxF2UJzmXSJPMMR8wkt1jyQ7632Q3VscDD8rSKyunJwX7mR33WpuqhUpgnA3uLRRNoU3",
  "key3": "49EyYKRUXNnW35jjY5EuvTqNBDeC9TQmamVtvCZjWjfzPvc9zvRVv1zeJnwopeCPmRuQe6eR5QT9iLqGBGi4TyLe",
  "key4": "4GTLe9SB2nj9pCuiHxpYE7tjBYTuEhGWSo6bU9qVkHLf5xWasFjDac2cQzjkm96fJhHYV9JtyFGQ6xt27sT3SyU",
  "key5": "267hJRXK664qGrvVXrVxRAHqMML3Pun3HoHPyMWEodZKSp1TeG5NwB8SKvXCQLJ8sdADcFZybsci5YSexPNcbLro",
  "key6": "4HtAEj36nJnyPZZGxs9PLoyiGBZyGBGXoTnf9gasB34qjd29mUHMJ1BgF9XiCKitRZZf6oCG8R6pJDWgq9wzGbdo",
  "key7": "sZNj5rrVRkQmkjuWJSq7KxW3LTz67AhGnoviHY1Xyk1KZcALP2S6LzbB3gowp4A3JMxAViviJJMevf8NZBYFrNq",
  "key8": "3R4giSmi6PhZTQiSGAtHNasEMoxPMk2yRdCJ4i7SxZEWUA65tD2XASa9ZE69EC5q23Umb2WkGw9jQhqhSY4EfDd5",
  "key9": "TdXXzBerR6bPnYe2NZHUpJ9nuyiGyiUjHvaE2bms614kR6GAuFmmsf1LGEfNKYvWyz79hVi83dxDEDSGWobEiin",
  "key10": "3kh6aGYY416SH6hFtEQc1Eon6kWzP9Mec9FvBa6dxZVQEWyqLfw48awAUgwSKdJcKrQsFnH9mhzfiVibx5adERSq",
  "key11": "4AJNwmzktxRYzUwkDc7YZVBFKsZBvzCyJTtHBRavNW4C82DTRzov9JUiWR9JzF6GXXpDZHXPgZP1EDTudhETvWgP",
  "key12": "5LiUVDhPUvgiyWhBWiyh3GLqoDZ2pYup7oL5fKDHmbNZ2t1SG35bVW8Lwxmg5iPih87PnxVwPmVaCxEAcMCNe9eU",
  "key13": "5Nh3CdnXjXS9NnWy2Kaxe8tJcJbjXDAC2EAnnmYyevVWuCA6mwbiuYj4utTRb4cT1vnqxxXDPKy9sFPFMweqCKvT",
  "key14": "4NtxL5hRyLbeudCTNym5xhTNZLKyiqcpFMfCqLk8d73HwxapoYrEdPTN4evGefbRJ3tRDZbNs6jTgwKVEsC62bLU",
  "key15": "5K7J48KDwwfeYsFxczny9UPZaQLRffXPVLkoXUXrDybimDURtW3FnCK4d7ri1Xo5KDiY6VksDwscSd5QzpY5aB8w",
  "key16": "vUmaF3nkonVFLc5okVHzG7gSGqoE16hshrqYu9kGh9rxev2ycApwyaFvhZfKUdbwqaLyLh8CRpsBTKZQfsBPNDa",
  "key17": "4j7kU5UzkPMgcHjMBkkpD1MvoY9UaCpY1S2aPncxrMCoNoYw6BjEkDzSRaosT2if6KQXZGajSbkdnGnRnmBSBZ7n",
  "key18": "2nnzcizcGM9Lm5b4cWa7VLCqUmrY6f5WKz5Wbh5UewsvTvUg4RPJpNhF7aHUKt7o7CFNN9ZzzGivk6dsTxFF86n5",
  "key19": "xKTfoh4FeqH2fZrVHZSy9NaxfcjyYJX4fwSzUYeAHKAvbkXxy99Qgx4Fr8mGQNU1YiEwBFqZhREYzzJr62KVmhW",
  "key20": "5d8AXhcMZrRsKLegBSrCyUrApCHyPgdaAkDAza1m8oeG8FrU2BYqBY7QjkswahU8z5SynoqT4pGCJEdic6MBTbYq",
  "key21": "iXGYKArpLVKQE1199Hr3f12JkuvqwhcnqFUAxn8yk3EvzvjYqVw78ACRyNTn1KGqxzzYfRE2s2JkLXaqYEyKZod",
  "key22": "5ZMRwPoG3fpSvvRatj3cziGMcQNst7wZWJBa1nKHQDftEF9X5fJ9WQD1up3mDDXe9eKQM4csAckA1oWAp4JaHqyp",
  "key23": "4e8V4ehg5xu8fs8B1uPT7bLLpVD4duyq9PrkNYeQcQAdXthYUm3wm1kkHmy1vrmB6mDV16idvWsgtLEqp3KGDJYr",
  "key24": "4LSi34n7zpYe6ppB18AFbWdx2KRcJdmkZzKKsiXeT8PWZJdjSLTbD99f3jMHKLyCJWWNWN7sXcEpzRACY3tLwFV5",
  "key25": "4K2QVYy4Fwp4JhC635EdoHHoiL3B1kdtzsiyqLegLVJ2QJYQfA7zo36buBMV96sHFyKtWwA8nBvFr2GAAX1GmWra",
  "key26": "hpAY8AdNqCXSLk5cVVKJwJYVsc9P4jDchw7ohEzFsbHVcN25VjS4pV1YDn1XA2V571aZMZC1PFZQ1tvXMRqkXkz",
  "key27": "4rZ9avUspCyGN5TpnY3Q3Yu6NjobjBvmUXkxauWpAGJUkycxkP3zcW41fdCj2za5i9x4ukbw3nXBhRJKJ7bx2GJe",
  "key28": "4JrHzBRaZcunKZQn2zdAf1ULrTUYZqxFDw1fTmf8GnDcje3GtnmsuKCbHECuJFRNqcdNpPPLZijJWXjWXk2aF6BL",
  "key29": "2zA2XVLzpLiKyLBNhaL4qs1SJ1paaPYJMGbcQoJDR3GE2oJ56pytDUkwygcDX6xbVtUqAWhdzepHETC23pi8Asf5",
  "key30": "33siqB8R7qK2fU5x2gtRXBEouM83tk7H83i1rJ4Y1gV3V3ErcmpGpdDXQVEqa51WQEqvGF4siagDSgGRUfZrmQZR",
  "key31": "489X9KsfmZL6sJ8ahexcn1UQNUJrATKPfyjMzdQXCh5AdUZrk1HKGAEcLoubzLXSFmfBtNAKu5By5BGtPKrfCZ5z",
  "key32": "4jdLwny9qLmvhGT2tczB11UZV7d4NgpG7V8Kn8u1UPJmDjrD4RPvQy5Bis6z4J7yHSDAu5ncgihKUqwr8q6fRqtV",
  "key33": "4CWNrWi3TRBdGgdYSqQyWXzeoAm4SMwm8yThzTCFczeQuSkgwpA3h9Uc4isLbD6y9Pho8bMpdrUax5Tae6qZiNeG",
  "key34": "46cQiqBXbuPk6PpZhVUUM6dz5dHALXgmZ74D6We9NMN3PVSwfTV7sHCKUxn61egPixiraQWzfsci9reLfiXN4yFD",
  "key35": "3ZQv5EZ8YGZGv8mjHNREMipAmUkKc7LnrbNn2EYyyxzhcSUW4TGXHfzvNpcB2r8QqFBLBETVzZXLJp2mDuYkTn3g",
  "key36": "2gPX4HhsTreT2M7Tz4NuADpoeGxEHpp3v5mP8CKWsWv2gsYfNwgqfuXBXT7NtoCVtpBv9zG5jaQLPnAt4qVJ5Ynp",
  "key37": "4QaPXzs8SXMPMmgLsfnDGBPxtrKUPoNVHYVnFGNZxUrb83GAC7YNNQyXXM4U7gP8qd8CYAaEpiHRt7dLcq4TyKrr",
  "key38": "2DefECEhSCs2S21yiWHbQvY3tqfqgWJJaNjb9WRuD9PuXoXvZojxtD4mLqZ4oLVu4xi4GVM6BuLUM4QdZrS1HgTv",
  "key39": "2hLb8ZiT6xMsVh6k7Q8vvM1tDWxxtXZteiQ7ffqgGuSJsvuhpVVpGm2FcHtfYwsM9bhSJZy7JuUSJEAJ7no4dDTg",
  "key40": "5AHPouqEimFYAaiBGLwa4rg7Wtt3GGNfk7p61Ju8VLJZg5k4mAz2dadM6bNRrmrgq72395kv3Qvm8zqogPeGRoTo",
  "key41": "53fQCX3cYbC2zuMULH7UmYbEajvzEvx4RrYAvVQtDL82UNMwYMqkihk1HDju8Qb9odAHhzrS6yGYr7MJdnba1zme",
  "key42": "2edG1Qk7pmLme8XRNa2sjzZRhQhfmBhtnZRZ37q1uqiacqrTwajdcXs5HhgwUjyMJyfwYNxPg4UHKZVd3t4CjDND",
  "key43": "grH3RDDJUTbPQnLjWRQ2kEzZF5cjmsjThYgxbwh8NELDY8uAqNzCRSbG1yxnywqqZJRe4PNkyutSUSDeRxzZXS3",
  "key44": "2UwzKJ4Zx82zxq1pZR8BSiAZb6RcAKtfpwjMhow9HPpzcqKNa4zQKwqQ2EDJ3ESoXodmSKdEfDsYkQfY562QLpVj",
  "key45": "5PYwMKuzikZtTZtRvpgGdwXcvPDzgGJwM3HzQ3RaBHWGBf949CambV1SUQ7TTuNgqbENXgj7a1fArEUSejwbWP4y",
  "key46": "4tT8h1GqmuR69wpubNsH5sg2Mvqmx9JJDcKyi27C6Jjh8Q2xFoT25RxwMCwLgzTSdcMpat6uZCxjh19HAz2cWMPu",
  "key47": "5cphvj64p2AoCM2iRo6xnuMFhEJXzVqFp6AGgEwRFjbBdcMnQ6qJ3v2joYht82J7J3MyRZghLqH4MrrfgwwmCMnC",
  "key48": "27w3RV8iFwvBNEWmD8ULzG3JMd2MJVmRqQ2ALyZwj4nyQnZKBp6Qh9p5kM8pT6WBneGJRP4DYusmRBsid7EWndwM"
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
