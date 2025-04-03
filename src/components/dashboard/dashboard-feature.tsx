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
    "Cdr8eUDp1msfRxeyUGDT6QXXeEWQkipiUby1kXobTRKRNqZ5fp8xQsWYkK9843SYpkUNLqGUqTuRahbMNMYcw4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HkGVLn6C4zCkM2Zf63kYYKh36W3cnEKYj2PVbJUeCVDF5D1ootJyDvyFNewoHp7jzGLgUVdp1hgiuKpQJLbqKdQ",
  "key1": "WdS8Y47Jmr18xQzy5oiQkYdU35fEChfLLyK5bxsiJdBs6y1nEBc38q4tAcSbNmCCYmCZ1d6eYvicYkZXnQqmyhU",
  "key2": "22JguqZzxmNFaTKvpjnzP6aqAdDtGvmAGrK7bAX9aXBuG6zr2oko5jjfMobLSLajEvywEjEeAttZGdmHgRLPyH4Z",
  "key3": "DmjqUWGUbBZyP1KztViprU4tpGornzLQrbG4mAK4v7zQz4dA3UJSSqNCosPd8UdLKGHQ7WGzy6nwfWFVKiP1vCS",
  "key4": "5EydLuRCoMiTjjCQtuk2v645ZNyUJ1sbyv7UgRpbsqVfYXEbcB4t97xiaEy6k4Y21CCzDsE3mSeQ9RL75NJxLBjH",
  "key5": "3wNVYJJx6fQjiWrqtnfwBLQrZ6pqRHfYqrUyLKwy3SaC5UgueoSJk3GJ6amaLXGGfY33Skke57zfkSBhzmjnJB84",
  "key6": "xphMFRZun5RjaE8NjSDeYEwGmribp3JHfqtpEpANcfahJhgfffZvUJfQ5K2qbUStGRim6joEDsGJgCKNSswXMzo",
  "key7": "5L5YYjK9qb8VkZsVTGe9rcufKsxceJoogrh1hScrwc9L7S2KPVRXcAcetgCtQC2ouLU8BLZYDveuBk4a3HxFheZw",
  "key8": "3L7JburYaK3wESxpV95xek8RLKx3T5cCgRzfXdv8v1c3brkWuiUkaqpCXc4Cp6HZ3sthYJbs6q3P4fd5MFVKmFx5",
  "key9": "rYkZ5jt4L3mvGLiBg224ZzxMTP8xZE9wkQCM5sEb5TgoMKPEgYSRKwWuWFZY4yzFxY6woDFR6YKzdsNFfm7YrJp",
  "key10": "2T6hHXDi9HbKcpZ4uLcabbg5mHENNJ3yQjoKjecLNMdemSyPJFWsrBfgAv7ttzqR6FTtr9ohimT5mwXpx5WV7Aco",
  "key11": "3rxTVtLhvEppFN8FUncdmaoSMCgEdGwgMEiG6FoAeem7GM1ZHoQQZBDrAcrPAvuSpbnX1ZBDVq88s5yHsgY3znJy",
  "key12": "2Sifs76ZLfRgV2X5K17qQtkKsoiy8pttbx2vrbMiovCo2Q7gX63jSsXXPYwKnroK2dUsRv6DAC9i9wXqhK6SU6Hr",
  "key13": "4csUmy65TWBuHHzMh18LhobAopeys5eSVq8Rt1JUsPbnL4NvF6XLeiin7qUcqy7BYUtuQEppnDtbuq1uEmNCGnPf",
  "key14": "5JoFJtqKKveHKn8N6FsVTqoWmjG4S3bPGBzhLvD7MTFDVgW9Mgxz8f22eFsh161ZYP8FicM4JzBPE48ST2fgi3XM",
  "key15": "76TVRPUKBgG4Acu4qBHMU4ew1D3B7fWHzwwfGMgjDAxPbGNLQ2CNVUxdhcXfL1udKeTZSASXMVLJeLtaaMYfULz",
  "key16": "LQgVrFtgJGN9Yk6gjFKSJCVgyTKeUbCsb6r9vcBRbAwcr7ByLaFJE1ewyj77UWHVJG82jNXVPKK2u2zNRptmPpu",
  "key17": "3rYVD8icxd6GtvhTaVxEkmnq5QmRoaFVYVEwNY5nbjNgCaHfcpWyM1TcvokEGBFZPhSiQuhc65JHh3867mv7Wh7m",
  "key18": "4NQuSZPJAyVGjPgYHxFABP5RYQQ3BEEUaF1oL9NYepENHaF9zwP8183tWx5gSo15syjhLBLDKoy4ctgm8zjguzQZ",
  "key19": "YgK4HziM5EcTb38HyrEt2wW3uD5fgtWz9gZNXmW4cxTbuW2PDczMgiYxS8RHVoVDcMw65nTVwtNuBHUtkqnVHfV",
  "key20": "588JsDm51b5KVWpg3xjv13bE5Nf1FZGmuWH5ccGKh8idxxXydNeJ2QFcvhUrU73RW1cbf1DfCv5RoqBskcxyVTCQ",
  "key21": "5KoNkRDM1PZtzFVNjDr7bRY8QF9ZaWGZyb96ebZBu6e1eCf2LaQ9KmiabZswz4UvPoprVFDjVdGVTtSnybJJ6ZFy",
  "key22": "iSiqarmYd6ut6QfXtghuBaQZxJhf8attxcP8arJgGPFEYhqFohp3YJzW7Df6obbbyDatHafH7eJ5mfhA7w7XsDf",
  "key23": "2ZNcDHrWgDkspUftUCQkwqvxSjj1wowieb4uwMM3EpieATNFnZPQV8k7n3LDvEjqLBo5jR2D6vBQb2jLFsJa7ztn",
  "key24": "2QqV8WXQVdAizPM19VKHJ6Jydcc6ktvBP79r4QHU7KD6gxUBSkWGx9dmH1eNqWbYm6wc32M9qxLtCSkR2cCzCehe",
  "key25": "3bZ6d8xzHSMRvz8QD9B6QJycQhG3hiJee3A3zNuZbCZcDwSGoTMWYmZLpPoHmZtQ1apoXH3nryfsWr2YDTvr5N7b",
  "key26": "4z5CA1h8vZV95wqYeabnJcAm5HtxoX5BkiuUsPsp5JgiGJeHEusS4BKLoFyh9NVbkmGFB2Do5S6uJTdZ3pzZoFbg",
  "key27": "cmuD4vjQZHx3Cbr1yB7tF6XwKtcS5JPLsT2gzMU3sGDABZUSfdkApRDvS7JbhPvE8R4ETCiz3aRZTgkj3o6iDuC",
  "key28": "3XDBe4iPRzpsboVohstp3LNwuBrXwieMvTeLQdNF5BsfKzv42wegAckHZphdHZZrLaohzFcCZqxFCJ7J9fijtyLx",
  "key29": "5qh6BuXXNd474ZJcZhFaUp7qGk5hc8Nv64362tR38BCcvPBSkjRDyeBDUzj2CD4k1gmqZGYuDydaaLeUkRdawvJ4",
  "key30": "2T7J29zUtt7ey3aZb7B4topr4UcvA8pNmwT3juuawSZNcftDUUBA2VfLbmEwZ1QaDNX6soQaWDchw4ngtiWNB2Wg",
  "key31": "4zpWtw9jEDy1Aey1KFFn8iYEeitieW5BN93yAcL1hNxCX9MBUmurn8PSk5u9h5t4wypX7kM5rNVte5oEorkWLyKN",
  "key32": "3fopDzyqzwWie3C9BVtHJqFkZbRRZ7rX9QUxJrWSt6vDhiUjYFgPAeSHiheUhJEsY7eL17fruaCZf7mYowBTjgGA",
  "key33": "5XieSYNbHHvFhbfsPkaf1jvGyTRDRzVy7B4z9WSERrf9FQFDzBweitrEd8NhMnUc3soc7q1tEjh4bnsRWvDVi7h9",
  "key34": "4NLYgeUBachGVNg9RNvdqSqtEQg5Czkhng7WqyixRHHPrpARDkhKpk5sQ2dxVfLJRkz2ucpzUo458fw7nWqumFg5",
  "key35": "3jLxM5vpo7pi22p9WG2WYghg3ciRhLvvRJWgZcYowwdUsdXwjAod1m3S8a9HPcoSJs9LQDkYBgwkAqtjErDo66tJ",
  "key36": "2uwkSGShW1M4Ca9PfjM993Tg8d6MasFjPuVaStqtLa9L9VcvFCzakg5rXYjQd3cCAq8VDWvsk3v2sKwYN3auSiDn",
  "key37": "ymhHdNynSDYcNrsQyfjfcYfVCr4QdYtcUn9s7aYqNnwQBBLnAmHhRvkEpNm4UELminLhkRxzPjorS2uzfH4EqGe",
  "key38": "5C3L19A7GTQRPo89PydY523XYn5neqEPwgs5thkZ2prbVt69jjmAUPaZdodRpJMiFB4Beibe6xbS9ABHqgCXEMo4",
  "key39": "n9jLLXLwDHHrV36N4nFvwypYR4HF6xLgRn3wRr9v6gLErtPqePg1B5dzSDjK3gdHoXPHb6CQnoCGBF5r6g7EjRp",
  "key40": "hSshnLzZHbDyo9CfDjmewREUM4g1HAAptPUFwhDMWFzKVHF5jewVhkZLGK39KeTktM3vyfTq5N9hdDMh7u5hNnL",
  "key41": "MEKiGdVWdzNG1yRaZLHdMfPQ3sak2EPaFFGE1gymLFmNmn1KWYt3HsECJCtBHpg7g8vrAkPBxSznybDEaijnSUF",
  "key42": "3WfWzEBzrthHsfvCW2oZdV7uXXghu9SCfP1u5nwJuAgM68QGGjyiBykQye37KsrSXUYgyofLPQWKm4PDGuAuSV4o",
  "key43": "5LAn4y3Ht2LCA9Ke9BKsxiEA2Ces2r2FVyv6SAoKB1XLH4JsGYSuoWtTfhb6YwfhES9NgjfDm42gqevW16JZAtzk",
  "key44": "3dyGDWpiASeAHoCvvtC6Kx19b2AjT9iEfogq6zVEVChHgvZW9LDEDWKVM6HdzVm9QSKmPdTtTsyidw1Ft5durRS4",
  "key45": "2j85ds2H4GWimYzrxLXhon6AxVLRi4Ws9rxQuT4Tu8ie8gcuFXCFVNym2fvFp5ye5xvnwt44ik7JZgkTUK5UXVsR"
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
