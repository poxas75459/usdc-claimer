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
    "3yqtYAi9G4bLxQCd42XYHWwzrNVKLde455C6BAcqUMLyb9YhyappcXeESiSCjfn1CHx7tHxgZAYtsmTyX4wWZmxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FP49NNiE7QgLq1dJ1LuUqGfS9PL6iYSySyrJamQ1Lrh6dB3zBAUDtsFEKJ8QxYiJy9fo7xx5vw2SxPcSBYo8tmN",
  "key1": "UU7ZSaFJrKUbh6WvhHmhnCiPEgmzR7DZmEUs7XZhbwhWmajnarbssmGh8bhGzszsoyQdHrQzea7zVAzx4NuU8WC",
  "key2": "5vdkLw9oDCWXsrUpwKadvJeFNxvRSFHrbUw6ikpvMZBB9UfPLDGJ6npmqSbneAYCtxpuB2eVnipr8UNpeANCt2sE",
  "key3": "F8S14xHtZn3tuWgDWq9RvQv1Bszs4xJqWxGGaJCuGs1sLGdHUxM35gXadDbMyVD2V3GYxh52XGhSmWwj5xJJ39J",
  "key4": "rJQBWVDDWxZoDd1TLvo9WJcfFa2kZBrjuThGh2J7W2C5P7ZN7n4DM6BcBcVD9vfLQgeENpP5LZNsP46buQwkvP8",
  "key5": "3CFWFQEXJed7ioExbWHSWnZkZ1tj7rWUvpo9KvZPw5yhDWbfRaQLV9QB2fHr1ETHxy6qsXuS4eio89a54HcYJwGv",
  "key6": "3Rocbdoj7GRy8xGrN1r7nX3RhQovKcGndXvK5Gsp23M6DUJRVyzbHtWoPxckK3bXWyoZa4Nxe8w2aLHt6ULqN17M",
  "key7": "3iX1ri1LvzmUyKfGarS3Qab3a7bH76CRPZvZ9PWG8JeA3NDioDtYXKToVJ1s8Ag3TyyenxRXG5xWhnghRBxWZ7hA",
  "key8": "3LtZgMK6RchSDrGYwsxMsTCVzuna7bfa1NaqjugS58UreqoXqdCUnj7pSHCFoyJW1WyWf7fkpKzeciBq2QrzTYZ6",
  "key9": "2w8nY3TRJn8JctLJtVCQqoEuztdUxJHaHAxACPgx9iywUFZb6RscXt1oUnzZnzJQSvuJkareVnWuPKKSx8mUiESD",
  "key10": "37aw8osuEnipC73rz2QK4fDvbRwJAKXsf5WCZ9Czi1cQRSTMS7u3pw1vvkDUGaaVTPavs9pNnDmBT7KUdPgZj7pM",
  "key11": "3rBWpjk1fodBRr9CY7tHSvY6E9L34RrHfjrpmLy9LkYnd7dTXngxUqYKDWkBZybKRjS88Eu3Uqw5eYNJn266M4Yn",
  "key12": "2PfDWZASoNJtpY3dqwWFFWoG5KJVXkcYckBWsAnw8EPpxMFWPs5oNn5xqyL8cQrHYm4w4x9YmEsZsQG4iNfprenM",
  "key13": "5kJEtCsrEPCDmbPDvxrJL5PJR3diwiVrBi48HC5cFQ5cqRz5FjAeXAJ8Jy5QSbsgnsmwmKF9dzrqshM2zPbxA6tS",
  "key14": "2kYXEqWartwpuELoBvj32VBRgkCCS3y2kzAT5RrRPYFWsGeAhFbhzHSzUAzPSzcqtsP7sF44MNdAa6qjMHvm4DLE",
  "key15": "3CoxF8SM5183UbprEnA98b54c6nQcacK1mvKdACWnBbHdoNGxLvqthrxkNHgDtJZZjmVL3TYGTJtMrf9vdfMfpuP",
  "key16": "2YxQxDUZcTgRyKLvyB7o2U5YMVCCg23XCRYZTY4iphAdZnY9G2FeYf9TDj5ccemjE7x9Y1NzidXhnmU6UTH9TwZg",
  "key17": "2Wg8jYJWfEohaM93oPnJ4AR14hGH1x6CaQSmi6c3ZnrENoXhCk91WNCimYE8RPWfh9F3cWfEaTJRbigsBSTrvoyW",
  "key18": "4YtyPPEqUtAsp3k5Fwv76k441e8onmjdHCm8Tmwdb42fn9mVBd29APxMfAeu7mkgpdywxy9FwY9mwHF9xC1EY3Wn",
  "key19": "49btVkzD4a6XCtaKg5fMfFRGGH6xzTBMjn1P8BbjsGpafGreq2czHk1ucSFmmBn66dBfWwtao8nNkQSpGbc5BaVD",
  "key20": "r6LXks4P3fsLiut645fuFUn8uEgTykcGgUFfUa6aA8btNqSneZWNYRkQ3AFtDyWUtVaRjSxHDNds5MZWFv1yA6A",
  "key21": "39gMzfGzxJHhzhchSY4PivthMHCHsYz5BMtQ6eAE1i91kBR76qyRJdoQN8JjNu9QFoQYNxPrcZbEBE4rk5M2uAtY",
  "key22": "5uJrn5Dthikssk8UANSwTMdVCxrVbUdpMcTTBCCmzvvpdQm6pW7Vc74GUtNZc9ZG85Ry1c7jwdpLpNDPmBwf3V3M",
  "key23": "5FxekwBajyL41924J6Zzzra7eb819i6MAZo229UMoB8hgRQLQsSDZ3pE1CrdhaTVJWc7eDNnyvoPcXNMXsf7Bvgb",
  "key24": "4S1kfB69kTffCqbPsC6SYgpWnduNerf2MRSodMNwhMpBxkQNkPHsdfktM7nm24uk3wCYqKyqHKRAxEvHvEFrJXE7",
  "key25": "4RGtpdkCTnavKM6vKiLQnSscogztsnEjY8HcZfYhPLEhS7Rc4JDPuFbcjUAYNbiNbUkZy8reCSqVL8ikWxd9BarA",
  "key26": "3YfrnNidegS4sHzpTRAXsPhvpCpUqBq1GhTtQ3qN1KjoDteuQCc2TbWpAxjocMFuiV8CCJeyt6mCggh7DnST9W2v",
  "key27": "679effjsdmvJWvnPv8XiT4FiF75j9gmzKM3jFSK39W5kknPyTBQcmxo3ho1bz9dUxpwKAwkXXf7y8x2XMiHQfGdP",
  "key28": "5XYtzmZSNQbTq7bXoEMLv3iNjJrqWPWhUnViPC8fggcGynr7wQD9485rPGhcqHPQDQJ7nMj7QGjVW5Q1cr4qhpmR",
  "key29": "2tkFNUkbpWa7QTkWGeVopwXt5rikvX8XpgCQBQ8qtg1WWKZiemegpGEm1aNfbsvYTLhqELdp6m9wTCAH1icTjGFK",
  "key30": "2FQY8dKw9ZwPwdcMu4o3YxRmDDHQN3zn5ATt6EdqprVnuxoN6Sdpui97pjPUtywXV2Hp8eRCMa7NQanNnMf9CKHh",
  "key31": "3u1rPP5Mszgb8mxPygCCXotLLJkX6bmbivGELDQgZg5uxbAefXuhBQCKMG5ZPC7fwR7NryRPr4F859NaezUmZR5z",
  "key32": "4TvaX1dPzkDhj5kwaCZpZPFnVukwKPSmsxLAsabnKTUh4SkpCwNNp2qvJUQM3i23Uvo4pjXBTkiyFXN89YX8tAds",
  "key33": "3e8F6y2tKXxf4bmy1xMji3S3Sk9KYX4CpZfjj23xS929AyDeZm3QNaJyCRnPY7oWcyPQDxZCBWGoFzz91bUHmDAs",
  "key34": "h3S99WopGgVctet8uMHreJvUjCknuiEtEujmSffUtJ78txBym4itpaBzyTrVEvyp3Cqn51WW6WV6PrF9Tg7z14C",
  "key35": "3itXQNQrBBxjaiHGMBfhvccZE4KU1N2qagwtuYZktoXbG7iQt35QfMS21PzLJUM4cGsLJuTHe35QGCBNzAK5E8A8",
  "key36": "3f8M9wHZ9w5o4GdRE5QAAsSksYNHcGLCdzUjrfrPpRsJrNVi6D7Ae3RJkq92BVoeHaF3WmNEUC682PysaaGn8MKg",
  "key37": "5hMRxDv8mSchqKL4JSfXZdYtYsDD5DMZ7gBDPtN9TLGJZmywsD6H6hSD7NhK7u4JVcL36ECKvprQuTerPiwK8ELj"
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
