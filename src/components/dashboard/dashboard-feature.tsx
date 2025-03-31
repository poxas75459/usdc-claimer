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
    "2nKQpFKzPDofYJuArUj4HDGVSEYKX7ZkzPfFFttgoDUEmQQd2c34XNBdJzhU27xL14Pk7JU5BCgYhVXx2joK9KJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G1SNGkfYc2WREiQXsZfQeqVcBkceGxp1sEQFwQZUbLgXGMzZgxV69GA4t4rwJvJdHaa5QdfCaF65wQWLMFa6MVe",
  "key1": "4zcuPTz6uLx6Yhqc2gjFHFoMRgyYJkdHvdhtq13hSMPcpkedCre7uvKzppBxMTWoVZYzL5egTf8tXn6KqAzfNy4n",
  "key2": "3BxkYQbNEDdRaUfGM5KVWCZxWBRKy8u9V7XZi3N5LDz7Fr6EzwYYfV2uPxTBAsYJ7yPgb5pticxEkAJfppZhpQ3a",
  "key3": "YFLhA9spTsiBcCA8KaanzhdPhtk3CNAHXtWr2DNg5zxeXQo9NNpVjq4q8NFRX2yWcd8LKMj4ULM5UYob7fURxrc",
  "key4": "4Cx6bqwFfGqmCqfcaMb4TogVes7ZsDPuBPDZews11DodPYaGoPxWuCwhwxrgVgufjcBZYPMXDgFVAXMVKpUHGjDU",
  "key5": "2p2x8yTx6QU1HxF7NvdEAu5MFfYX2GqC9Gb9Uma7RRdNndtZ6UKBQEAsvEL9VYtj56pu9eLpLeKtwX1yaJHFet46",
  "key6": "4mVpsfTimRVgWmyBxdcQca3LZbebfW9NMkKqFRzVTWpSRQwSGA6ZEBStbgBKSHZUq9M7PVffpPgsJksvLftkDYfZ",
  "key7": "5YohVCbPGfyBA7aGBjyZ7xQ8AATbgnM3TD3xyDUeqzgwDd639mufeBB9bAncE8otNP2js2vjsqGWNbZ4bdmNqvfv",
  "key8": "52S1NUtTVi1HvtDAmFMcQzzUBS4cKb6AioHEH2eFhWgmc7J7GBzypowXudLMgkxDM6dCBAXMFg3geSJ9SuyZpzzc",
  "key9": "4dwN5HoDrNG8Gsh4sKXKiSENQ1q7ThgLRCKUiHRuNViPtqdqVqJRw6uZ7TzWCqfMMbQUbE3Q53NdZKuPHGz562cd",
  "key10": "5Hitpdt21gYARzaFGLSuyQoEw6FAunBK5gUbsJL9vvN381ucnedA3C2hcftbXqyHUstXTLPnvpAj9oaqgvBhzqjp",
  "key11": "5yWNk6roBc7PrfD7h8eXLVgKnHdiRacVhpxXRjzdkpnCLgsFt9QJzYtNxLhzZoPhaszQFQnoWSkYEYmuhHFi1o32",
  "key12": "3qDhtzwcN4U7NxEPw5TzfVWxQ8GB796jv45iLg96Wq8AsESYkvo5GBQkDJNdWcHmMwG5zSrr5MHKWS1aMPwXrJyc",
  "key13": "4tzk7RugdedcEbBE86EWfmgYDuAEgoR1DW9ptLagocKHHW46QQrun1nDxKvYdoNmLyXHJggjbE3PTsks2nheZcyB",
  "key14": "4TWH2ayPrLhK6KXKSpEZpgPWY79iLYKxPjj7Gb3d3tGMw7zkx5rqRqUTg2qFuf7kWJakjcsDSiaCuenDjfrurtU7",
  "key15": "kX1926E1Y9YGYgCNjBHhr6D4jQeCtmx8xCuWyoP7fTdUtKxapKyc4Sjcpnow4HMHU6ewtAVgQKCgSPFTKkMPBvW",
  "key16": "MqWuygmzsAMMMTKeLnHtGHAx7K7nbD8yKmbjehDjQ6Jyrvn49qKQBdcZrjJsYX2VjM2c9FDzSmNqCsrQtASJuZC",
  "key17": "594EVwi9uYwF7jjjjLSDFuCsv2c2j6zmNUd6E2hLtzFL8NoTByzweTkBWr4A9To82USdxB3Eiepzo4V2Sb4U2C6B",
  "key18": "2wVgF4xn1w1eMhC2sS7y295gPaDTWrubXJz2CmUmdr8ny4scynZLjHaJGCAwvyJd32MFEXtwtEe76xczBva4Cy8j",
  "key19": "2DrWr7xvFtJqT5jw1T3Cu6vpR9KWccNe73HdmpKTm8yNsi246xaDHxniXTf329sRD3i46QTDQ71QoB8JqWsSFmyS",
  "key20": "2fMvfMMbCooxe5gv19XYzdSePHn67uKnbuJcmjGoAPz1Eg1YpRKUaWj9TzTJ4jWqydv9ciNm71x8BkmcKwaaWzC4",
  "key21": "5QVVfzr7Byr2FN28nn2EWeoMyKvFvveDemTzV2ovg5mfKcfq6htQMmzrAgbBuDaCM7ow5EC6yenp7GabMCMWXbG7",
  "key22": "4kMKRUZLK5UjzX5fR2wECNFcMZyow8zw7XJ7NLVcvgbw1bxcgdQ7EZmXcBomeZPa6RUxo9pt2Run3R3nUQHcmmZH",
  "key23": "3BRGiJSTBzhwEFqR5mgU22mARaSqYobDeEvjPSyogC5XAsoNSN4LkS5UEB1UGWuCKPHsFXxymJQNNV2ySFVVdUQg",
  "key24": "2tdHtPW7871RvFUyhwE3bJgxS2MmEj1ZR4d4FgRpyiS36ZqTCNAZZ6CxaiDMgssQhPFcd7kmbauKwmDMefnFvscU",
  "key25": "XMbNdxDLb6nRwRooiu5AfGeo5Dc4yVY7gsXhEAvYTfaaRzTd9DLcXMgcU21Y7ksc7XWow4TsqQBskKgKqpbadW2",
  "key26": "23xWALFFt3z76a8thLV81t9dAM65rAxFKKLHhvNSh97mDcvYG1t81P3e3xeBFd5WPv7d6KqgCEzFogyiReWtL2hT",
  "key27": "59m2xLZky3HEAzQ67WGaHhs88UtAt63BsjeYxr7xhxfmt6JpB1Gu5RfKYdRCaWYZrgTCPwM4F7SqrXMktDuE3zEV",
  "key28": "4BYFk3MY4cfRPYtMvw1iqS96njNPVkNkBemQr1rGbY8ihmgHTEiCXs2G7QWDgnZbr93yxtKGEzT1LjmnSWonC9dA",
  "key29": "5UFe4nbFSVxKS6sXFVeM7WMVhoANyGYSmhhENNnuBymZwY3ZvvYaU14RGqktccKccs5dqmGFCipkUN9ZXJtnG9Nz",
  "key30": "HTKxR71QiPLUooeR7ZhnNgMYNjMAqQF4MmepvWMFXVtq4GjN4gfodf4iU5yuHe1xPa2ESoLxwzEewoaUqwAu2pW",
  "key31": "3e5BHxSikcd3yrrzNNWm9nhNRqPesxBSMERgXjwf6JpkP9wr3gKfqsu8uTg7Kd9pQVPd5fzUe4iaaQjA1yokwrof",
  "key32": "3K9abxR6eFtDG9HzLu9LLeMgArewD2tAApo6J9A5ELwHwX1jxxzjhvHfgxD7UhBwWvgHKRaBmJrYrWANkb2opkbU",
  "key33": "kMbGu7HK6XvK8oTyhnkLVSKJEsGDaetU2Mz3wVMeaQbBkBPqoUV3W7nhWoN13titXETnwMEsvsSiVwUU6xS7qCg",
  "key34": "3s47jLF79ZeXZhfYG3X2NbqfpXBKvJmvESX6tCHCU1yP2wGZQHc6d9GACefS9qBB2eXccRAB1E5rabKYucCF74U9",
  "key35": "2xBMGQ9N4sAnfB3KYdgBP3a63WUpakZHkkTb6spXH98SzAnG9GEG6NiLEktB3J1cpVBM36dpaD6SUg4K6aNjHX8Q",
  "key36": "4c1GaNVRHroEWzspUwrFTv5kR24tXF9UWEE5mAnYrV1cd66xpTZSFoZBV3cbEZ1DkurEeC94nqHUdB2xHoAt2DNe",
  "key37": "34u7HU6QrJ7UY24vQUgjm4wJUNzNzVbY28D6BkKnkURebumVKWKMNZhTB2FuMriBgHXZ4Z77YexFgxi6RWtsHKAR",
  "key38": "48mWnCw4yxmhCHqV1u4htsKagYL1XoFiKYC13qtrDjwts7csYRSyCF6DR4Z8bbDiLiW62z4tDWhBrMMwvpHU3CT7",
  "key39": "63bm6sTY4voLFMHaE8KdcnDTUTD7y8usuYw5ZjA7RW8znaaEhejaC92e1jLp4ohbysuJdskFGp5oSjzQ4PBRBXXH",
  "key40": "3fpZLmSiuPYfNv6CEX9rhn7hMqU4TTVWV8etyAvjv2kXQdBxUYJLhfc6p28QXpAgtV5vAUFWkzxeXqaRkXT1mFZg",
  "key41": "5HAoTxSL6FwJ1KRJMtdgmbrbSGncR9xX23hPiMVdqaNYzAD1asoirqbD6zZQT6ZU8xzmYCuwjFYc1iCoiMrgNYLt",
  "key42": "Bvs7gG5xrGgTDa3WqjQgDT3ZmRFvDoETMwx9SZLcaukn3bdH75PinHtDa9kAffuL1YkPsnRq44JdUoruY5V49Jx",
  "key43": "23RUcWRP2oVJz5ZjtSHXfKkfza32iP6jFpe3ooJyed6NAmaUqzLG9Wn1zfUvK8F5QwayvJREe6KLdREfHY6vCC26",
  "key44": "4bMRHtow5427qobkjgXBZAhcrwb91CuVBXdtAUGfDyWNrz71jvevcPJW19PdzrC7Kszueai8Xm6xYVtQhM6cwmLH",
  "key45": "2gpdk4AAhWJxQDtreYUTgQKesecCTd25AZbsyeovSFef9be8MTxdZ2biTUEnJA95jLgEUfQtzaGWbp2SmBpccs5N",
  "key46": "5dMAhHBzN6p8oePUTDQ6UkVdVsN8gvxJ7yuz4kFoW1iHzcNCQeeCmH4pQUwNxaV21aYeYtBVPVD8RxEbvjVL335w",
  "key47": "4t35uizwWs2GR27747SHea45fWaXjPkV7E7DqgRGSUfDgGSuPp7eMsdu6kSZNJrYZrKWxJXCDxyjyL1B3EDt45eU"
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
