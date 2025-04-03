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
    "5nNGZdFQzyd61SPuULHe2yrPPEfnRCDAwa8PRJtECHxUx3KTHH81ctMPnEg6tKiRQyULNMQ43BP9dSZ5v25QJcGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rChDm8EWmpC5WnQCjDuM9dkz9EVjYPhwvCyvNknVHVH5m4QgtZiGtSCEeT9LVA7bV6FrWnvU1o9q7Tc6iHK4FsH",
  "key1": "3hguvosBQQCWbXTToigx5rVgSmqM1P1VGN43s9PnHKt3TLZQVCsHxxHoU6J1r6Q6injCF2B47N7iHAA3JEEjQBsV",
  "key2": "3W5aEcbJpgDkyZ7y2N3WiKVt2XAkjjvjtwX1veRyfhcKfNzq6DanpnGqe7cKcdygkszzHmtSjwhxfB4SxEUtLfKS",
  "key3": "2yUZQDJMyWZNhNJmxEb44Rhekc9gN6G15m7Y9Be9viXoCedCLTwQUTCFdtGqRyHez5SyvpqU9MusiVUpKVjckRaU",
  "key4": "46ZuPjiN1SYczsUyjBn9UkVhTr8o6jsDuLgjY75SVQ4sMi2F9EPihuHireA3uGioKZkiyGcHibKDWJRPJmPSzVyD",
  "key5": "5sGJMK9HBNLgVm6hEF2qEqgABFwPx5jztrnNZCG7xAigRxzEMLhFKSzPaQCQNXwEbc8Lb5zAszgqiMK99Km2dfbF",
  "key6": "kDNCtLrujnfaDVQETEKD7rWRKPRe4n4x7pUrUuWtTuqiaDVfWtgdA3cNqzDw7LBFhxG1wfyMhiPLFme2K1TXYbp",
  "key7": "58VsW2aY8ZyUDo1vQG7Ai4nKJLFnMEa5LkVaNuTEw3YazYzKBEbLTtU79exJDcAQnv9hZh7DUDvMSv8dWnW6mgaR",
  "key8": "3K9RVQVrUW7TB2qvFBbvCyPgY1fXtwceYvNGGn8Vei2CGn3BXApLiLK69Jv7zQqN9nzwJycSTaGA4NA9SEvL2BCA",
  "key9": "2UpmxJPxF3wPmZgF9soYSj19rWpAZwHtmTh43F4jo8TGTz3mrRG9W73BU1eho4fiFrt5nD7ixBJXv2hRAENwB8FJ",
  "key10": "3ATpUX9cszkKQVn3LNVAQhD7LVUYfDUNriqNVzEsGtjpXmSgDfvBvVcY25GfEXA12HWLCrwgazhM4F3zLABAFRei",
  "key11": "2RjFwAN8Uj1SMZh3AqHn8dtNtsU88WF9SqbW9csr4h2a8wWEZTVab2JPpyF3MKGctrL3KJvfqp1JzxHMQGRGkEgw",
  "key12": "cujzWZ6DxcGbayuJQ9mwvoHHUXuhS6aoZZMiuygtZvTmKBtTWYRPVdqmQmSHcyngdgKLWJrYMYGHYvvDQi7EHsR",
  "key13": "3YA2NXekV4inLsY8rFUterSgage9ESJaZwrmUSWTkwKdvr6n6QEPm1ZmENqaCuqAfFP1rmHThpSw2jV4P94owdtf",
  "key14": "3TxYCx6yPZ8eSoyycLXFQXEiCYarhTdrawhQGpXnZRKbsFLoUHD4nyNpVHX7cdM7JTJB2ExXeZiuFMbgQDYWMiXU",
  "key15": "X6PwTEZxA3CyKmxJSZB9MT87xbYSCjtZhdZvTvkdnbdVS8qz61aEgwfy1BuvjdRdJguohj4RdZCNj6ATbvXXSvk",
  "key16": "3NighKerP5v9Y9pfn4Gfk2X8X74p1Yv5gofSxBGCiHToBLLWN6V7MKkBpGuscszJH2vookQ4TzbzDC6g7bR5QCtT",
  "key17": "8e1FTvdFyyZ8mKr7XirHA4M2nvoB5FQTD3ETjYem4aWzRW54d1NjNzxpThnhT4ueF2QZjQFiSp1JixwFustXHmF",
  "key18": "4M9iD594pqEjGb54FQgKB4ALkEXSTHuLYvSgvksQEnK1fS1x2S5F5DRsGAj5L6r6N73MkuzLgfeSjm1kKzmpUrez",
  "key19": "38tJBF6ym6qb1Ut52Dsk6cXDA9fb9VozXDeKMY1AJ7GSJBvnBdGnESCHYsH6CmsRfsTYcgMVjBw8BxuGZ4hknWFU",
  "key20": "2Ps7rs1RGFCDfnTMuKrjV2DGhT2SFzcd49RGKj6icnyzMrWFm8houZFgoxSHdr1z3V3SFLVAxMb7jduZ7ADNJNhP",
  "key21": "22HP8xRPBswYeug9WxnGhQieM7VhSytLuaSm1sf4fnPes8xaDLPEoP172ZPXHXjqCuLUxCf3ryeRW1rP9W3egFUD",
  "key22": "b63Fq2egRESKZVVgTko2nysZBP8TsgP876BR2tQiJgfv2X5TpDdsdNsFZqcvjaVEB9zXQFsJeq49kCFMTt6JzWb",
  "key23": "PYoNnSassGbRFM5JzzSjyGDUcMzpGW5KpBL3Zyifkz53oTSs1hyCXT5TCLgbADWw7bnCE4engUY9RVadT36G89x",
  "key24": "39HHJtoGjWkHh2pFnyNYVMQdomd17omCJEwiP8NU4ZCS65nApZz7gsbzWboizUbxeKqbJQfqUq9JfDen9xofqrH5",
  "key25": "5jfWfyD9cWn3DXvuitg4BX5Y94vGz79pDgAF17KXrqw3fipXGbTNPm7h1RtNqpNFj6RC5v5cxqAGDGvbheiiwYhv",
  "key26": "264AXD6ZFFjSEigvYV9jDe53S9sgBg9h5iUthpy4aGUub4eGycxk1SAHQkSqvqW84vEqZyLxZgzS97jX38WMX6Qw",
  "key27": "458ss9a6YaaMfnPphJ6nXmsL9QnSxJ4eEBPyXnYQTcFmRwt7DHFZ1uhyvVYQ94RmANteGS6nbtGkSuBoHtBnBKJ5",
  "key28": "3C4bu8LBZAcGJUciTHsqt7teTAQT6LnJFosgJcvGCbZfaFp1mdZaUfQgafe65E7166meyK8U9bs1wKkQwprcUNRC",
  "key29": "3sav7QLkvoKKJQPnNTUFu18JauvtviP25f7QzkLVrsuz9FnYmRmoETETUbEJwRnReiq9FpRTL1s7XwvNY2GYQvyu",
  "key30": "3gFNcCxM7VSGRzZEhTt12G5gGiFFmrZR8NSEgz5MS25dEhkmULuJfe4zBdC1tCt4BabiEWp1ZatZh4eVoyGSmiKo",
  "key31": "5yiHZGLeLo8TJ2T9vJjczsGQ18owQzg87XxGuW4rK1uNLqKSQZ5c17JEnNAk92mpwskG9PRGJWC4zMyXT3x2yziR",
  "key32": "4h1Uu9vDCWJZhhE7UjgdSp8ZwdSaUzEiZDWFVfRoKYyNLoo8htghuqWUB2hPP4DhVHKaxMWmFL5suCbvLWqo8uqE",
  "key33": "4JiTHubcWzx8zVhJdCgVWdyZiwUXVd7Z5Xw8qxt7G6knk4f9ey8LqdSuqgktP1h5288C33GcNP29SYbhkJ2kYvXg",
  "key34": "5nquV8fJFZPLKfjf3zE7UqK9yKeM9KdGMMdmcudiG1yU1p12cX9ox1eqzajq2EZPTnU63FaKgwZcZHBXDA2EKGvS",
  "key35": "ve8iL8yZzDfhWwTDomUGZiJH9Sire6RVy5LfokLH88cC6z3GCHcDTwcQrUJaV38hucAHJ2MKYZyjFDUe28rsds6",
  "key36": "5QCHgYxfYvDyRo75YGxsqbniA23fJnNFUY9ryfk8ucbGHmpWrQQYYzwb8jnQCk7vScJjKSoTVj86t142ASzfnjPv",
  "key37": "5SmUBbEE2S4Y1sAmYp5Bx97wK9E1EgStHKezSj59NUWbi6SN2o44HSguYvwvXUnykP3XniB2H1BCfYCzZHEcPje2",
  "key38": "3r9jC6tpmTnswq6HFZJLRhphLAR91Hn6E5oS7M823QHZa3QYph9QX3dp7FFRGSQ6xD9UjuDyuyoHjmydiy4rDUg5",
  "key39": "2gourXuALmKJfmaY1XWt3d71dQ81e7RNLb15g1kRXQ22u4Upc488zrn9CHHSEZg3FA4qbtwddbSJYdmB9fJjszeN",
  "key40": "3wawkDK8Rm8WEy74WvxgrgPCjbps5SJx1ic3i8iuR4f8WvKrqwgAbr6HhM2mYwyiY8haP1okZZUrbvct4kQVhJEi",
  "key41": "4StWXxPohjmaqHzcwzwDia9DgVghM6w382Ay2sZLt5SVi8cNNqmTnMmRejyrZ7A8A1kiTFdkirXCQvF8teLp3Z7T",
  "key42": "4aba9A5XpUmxKRM5UXNDHcBGn5eeE4LdNfQefAtij7cyJNXf1onKqwNTKZZ6AfeRZyYq7qDVbpVhgJHyzhEoY1Yb",
  "key43": "5dQarfx5zbHQNmiVF1EVmkgM1BKyeYv3Vt9neUgLnkfEw1HMVUunV4PFvpC769GM8po3L8Tp62yPtYVFRZ1XEHk3",
  "key44": "2mdGzwasB2u7j1nt8Ru3Fmb3b2A6BUBSD3b4nHDZ7fiSzjXaWfkEDEj3j9QP899oVzGFRwNvhkcmzCmszYUdwwE9",
  "key45": "5grQRbJrQe8h4FMk39UPn1XArsm7SMGhHuSAaG7y1kF8fRcVdEYMTzhYLbjjNaCmX5BVEYo8DyRZTBEUD52FJE7H",
  "key46": "7NniAt1xUonunmS6fRyZDahcoxVGBQ7nYQLFd6t9D3TKyDxghJzHLaUSN2j56G9N9KYLRWDvMnrhK86LcjTgVCY",
  "key47": "33nE4YP8JAfb6SEck5bDRvBbVdMLpt4VZkzyx2x5boUK3VQWNZc8YkB5W4H3neVVxyYHrZhKt5Lhw5uZBi9CJ9TN"
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
