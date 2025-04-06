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
    "2asei52xmaUUbsv3da58AWJdsyPDMkXWKwXoGNrZrgQvNAdQ8y6y6TZp9YA5FhWdet8DRwzMMww5jiVW4bgqkSD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eNV1oT9vofLEUdft5Jyi12HxvkmkxPK5YjTtYZZkczWZqDmhDkqqEdCjbikTSRaFSm18fv8VfRW59NvcNxwa9g4",
  "key1": "3S5tUh6FhmztjT4CG1Kzt6Zae7p9F7zng1ZyavSnu8Jkg15MeWLWRPPw8Lz8o9sTh67bbrrj7nNkbkXSE9odoYqS",
  "key2": "4ByTgt2TNcvBGTZdENAKHCWvj4FfStvCH1aLLVqnLqexdCZ1zRKsnQCwnoxZJDJPonQj4S3m7Auqbm7TjkjkskTU",
  "key3": "53f94m3xY8zc389QQkfyJUDbpaJwg8DqQ4TMsm216wfTLYHv4P9PviYrsxA5xzFYURTfu8XBY1xdbQd6j9Z7bist",
  "key4": "jHnJf7gaUKBJu82QdGCRfRKSS6Ke9AoTeiPQgftCBdHxfdANojXwJZ8ybmPARuxZXZNGuX5w7suJS8hFywR5Gmk",
  "key5": "3bWzz3mMM8sgTTWzZq9NbYGv9oxGFxCG96H1aqDc73dcBLGhr4nB5hAoNz6KFnbC5rkvEiqmyWPDZuyVz3Vdmi8N",
  "key6": "5XBfs8m84FLfnznUAhYMwsWvMuHJgNrgLpPFb1xk5AqfRqcCeXJYjusp2oRTxNUgih8asqzmEFGdocmQQfdgLEvs",
  "key7": "PP5e9tgzkiZ3GMPxLjinGmDQRRjzmgE2ypAsH5AHJCrYBVw9bXqahs64EGCzPrb5UyJuCp12ENYf6nmtFcSfokJ",
  "key8": "4yp6KzPekYR2EyT8pjZXx5Pk9KvtvhBkzp3Acq5EuKoabFHZuvrFu5QCcTKDmdYEjs1VUDWNAAxdVtfypKhHrnSw",
  "key9": "wh9weru8E5L9pH8SDG383rjwcozwc9dkAeBDpJ9ShLqTYowUCYiidUJxX883Cg1KVgKMv1Ti58HXAjhEMmt24NQ",
  "key10": "57gt9VKpYDXyME4RXkiNsYRP9h7YENQC5LzVScgA75gq7D19GktaTHakL7Nhtpy4hnWQArZMivLi2VzAV3FHAvbq",
  "key11": "3xSPUgizRJZeqcbmQaFpYwRq6uQUoe9Ux2Bow8UK6uU4ax8oxqmGyZqnCNidgq45buAoQaem1cDFCa4kAWktM5Xy",
  "key12": "4PYXuH38k2Kh4Yb9WceoX3mjhS8wYNBPXTFw9G4gVY2VBJpD66vHGn86imdHkcQhFoDNk4FhssvAShJVADESR879",
  "key13": "44tgq98hYXi5T4xYfaVuKU6Mky2tZ5wjvzXqz4SyBxUYijiiHRwqpXLRKxFzbkRqNwoyCsaev5JWXiF9GVpT1yML",
  "key14": "3KeakLGqnNSce2xsqWDiyzWgaBhHGyStisT5XoWmfXKWeUTpnRgRCButBRYGJh3JzfpjXbr5dxsQgdvhWkca3PXH",
  "key15": "5yNpvU68J6vj8EnuG3yUB5svqrBDr7mK1ps8EnyeAj54VfueWAFsn8ETaygKE4coE67othegPtLU54nNU3zSRJxH",
  "key16": "5WiL7rBAWnjteWSrMSDQAyr3pPkeR9SotVNPZ7guo4RVKceLWz1ZVbGtR3MtwsHnzC9sydLYfae18YkvP86tWKAk",
  "key17": "2TdsNBjpMbt4MFnyJNNnxy9Do5WGaiuho3wB1XjoBzDWo7tJ7ouVDBYWDsRGq3C7n4uKmfDoREyaM6oEjiumoTAe",
  "key18": "32A83WgRCc3VEGQZgozL1T2yQgmk5V4mcJHdKmRoQKeprDdTTXzFtyJSGG9FStu9Zhwrne4JkoT8wmwahpzauwwe",
  "key19": "5U8zYVkcpCQmSSKQ455GPZTtB7bn3aCUyFnv95GqdLLrLSMjdLK5M8UyQE4nthJFjBYTj2jHAdVceFg51byNzs3S",
  "key20": "3Epc8Q8qw6HrqKjBRDWbEsh6u3ViTqnQCFoFpes2bfYr4WxdN6vXfgMpZTHWcySaRPCbkQaVCD64qVb2teQTQNcv",
  "key21": "4x4pMvfiStL3g33x2ZsShEwgJ8PLJjJgWgs6yK7MHSivCAH5JUkphMjFXGQFb6semMsnJVjA9RvD7PeAMiZRn5y",
  "key22": "2kdFAAhBEfYjfSsMQNsseMp3SocCTbCCLk9Z4rsteXQmtpzLpSLjK1o84wPeMjY4XgtcWG1CnsWv8pfFNAucZADp",
  "key23": "E6Ca1PRALzDuTw9ed2WikyNQeDF2Bzn2ZchnPyPYX2NXzeUyTGkn5VJhCuzqrvY3Ev5fp5XpxAPfEA5oRoQMQGy",
  "key24": "49W7C6LAVZhGcYjNbZRundoa6VFWWrLDj8QgCYRH8S2St6HhYHjtjjqRUkbZ6fUyPwGMATwok5KzFWTSXu8SoQcw",
  "key25": "3FMD4VKVpJHx6vpq7Ncri6gp68TnQEiPj1KaChHX4ESabgJ2AtCuEqwDGZW4rgKoiYindLLehqiEuWrvkybhPQU4",
  "key26": "5yLTCuWK2NS26YwYro2bbDF4Nhq6h4ZYFEybKdLMDHykDtwKHPwwXgYcYAf3UdBx2Xef5xgtkbBLNoZHZwWCzVAR",
  "key27": "KH3baTeCpkdXUnS9dCkMHKsR7Jymzd61azTW1x2P2mPPwakeQw8f2QCcE16HxbswDe8uFJZNKghoaqBAyvkshAQ",
  "key28": "2A5diwpm7A62aze3nG4DzuZs36o2NEMXTZxdgYs1ng6NXuwrnefVSaCdL8TdW5ujpJxLP6erDyUBw3hkzVtnNydh",
  "key29": "5SAPGZNiVrdGt7XumKtEFp8xsr4uic1Qj5WBtTtq7qU4rrKGQoXHLN98rGLBuQdsuyEshG3UccG5MP3vqACFHb97",
  "key30": "MLLwmFpxTrYx8M9mgFgAxjGydgBgJJzU427Tm9iRT8Goxc7cqnBMdG3LtFKerUbdcy1Sm7N47UqstYs4Zti5asQ",
  "key31": "2789eoLvRW5LcP1QQkuaYZJXndHW5y97gWmA6FHxNvLu6Dn8Cw4DBtGnSPM58CxaX5e5eWphde9oBUC2wTnVAjyK",
  "key32": "4gFKgv2utGErePF2J9KoCdnYRY3hordk54qNLCPBgF84CrpthH2mTUzMtuzHs65kDm9fMEtCKWJa7VnyugkvhpeR",
  "key33": "5ZWPFFnuvnmzZDmRNcoMdPNN8XjkmCVkDxgi8cjWJFJWSy7PikMHEiVhECeVTJ2FqSrMZBHQMhyQ3ZQ3DC7nYBYE",
  "key34": "2TB1TVbfUyDswDC7RthiPDh6VmrjdGbwzg5Brn6m468zoMFpHG2ZNh7q181872XqeNetQcqPkTkMcdR9mmD2U8E9",
  "key35": "kDFcCiF2HPo2UJAy6ekSsuEag8cqYWg6drTAuotxJG2P97rNuVGLCdbMDE1a7ZxJUahVqKEGTvn714xEP8TMCQY",
  "key36": "5Lw9JkpjbrTASrXmFvNC14ttxGSYB5gp7hicyVTwV4eMBqhthyMXnQVPp7hKLJCNXM6P2irvSkC7GZahyV3eXX8o",
  "key37": "4GW7JjjNM1MpQvWLx5BkjUtyj5MVk3ZuWAGRVwecKDrdw6vycsNUc6kkRdnu3TvGcU3rsxPi3CErdnnYedUs35DF",
  "key38": "4b2gxJX99F32qQAEZU9nZSY8mVs7vayBAAFTitPoD7tLqbVMoDoKSAc85oXw2d2CHiwpsrMp6aj9ZaYDoJYMKiir",
  "key39": "mtUo9TVHZYaLsGF8tdWy3yA6DLbZttBDztuTR7AK8neJXM8Jx7EjqgnEpmcBTJaz2YFaVT9WWuGtc7AKQGwxJQM",
  "key40": "2toTw4tPrPQipxYe4tjwA4BZGZWmjiPZTJd1SioD2q3EPxEahTEQgL8EbAoPwQbSVeDRUv2ysmC4LV9vhNLZH8Wa",
  "key41": "5CESMa8ff6gnJH8Aejo9jEGEMYMV1T1bHCsKUEHDHAY3z3mFuZFfLRPgKpo8eUPAsb7Z93PhCbdZwDcJF2WKPCb9",
  "key42": "5Navy4m211DVHbvsxskSVVZyexnqSie3o5MrjGoUgRVNWpDRLuLFqd68uPXsTrt2ysgz6WKFwuL3233tRKRdwKH5",
  "key43": "3XU9ZVwqFLDPXeTnGaVdQgbf5t6KMnNR5uVaCtUZKyZn9Z2jBmgQ2qDNNM4pMx3BXjLdAz6WKt6bSi7y9vYrqZtU"
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
