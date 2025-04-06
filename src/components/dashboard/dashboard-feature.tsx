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
    "2vz5pbp7ZsL2VWWufRNN1shnDJdMi7dU7BxyUkzGzpUvVRH5aYYpegqKsBwnmsHszs1LKUy5LYriMkyG7rEph6NS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qaSzq3UvJr2zk1xHxdTxezMpTroqikjorXNBunrnajqRtbR4jiEwHWRvonq71iJLH2iPgbDR9UZpUxMsWSdjnb8",
  "key1": "5pPzpbUxc4S2ppjWgar2sS9qcQkL3Sc967j9m3zbQBcEPoZXQxqyGthogNNfUvyza4siijJ8yHuLsTFTbLh8sw2y",
  "key2": "53NtkEiePNirfvDQcVKGP1di4iCJFnrMjWLo5Gr1MnfzJzYCTuJPeqGRytbuxtNKg9vABUmS22btwhJ46sYXBP8C",
  "key3": "3672ZbxLM7RLF54n7hLKqokVo3PgLFidpsrqf92soxUWoP2XFzhkhgZ7pm9jHd2cTRjFvb5HmASENxQZsu4Bh3TE",
  "key4": "4KgPV35zfWZhYrKoGGKhGzhz8jSLjyjkcK5byNTK7SwLqjLQQbXVRyBPzi4RESBCewwHx4QGwjZA6CxLr6L1ewfh",
  "key5": "3EeUDe8x9zk9MKc72h3ibRGLMmvULtp32zZmJMbDrzxFHVT9g9FsGxwpgnn6DeWDZpk96Y84v2RLJdJPpSf4qPm5",
  "key6": "2uk44HpnCEBXkDSHC1forikFWGXSq45TBXex2A9rNgM3kdGKjqT834wmqTDjUUNEUwaqwLkk6VCCrJioU8n3LKRu",
  "key7": "pQTdn22iQ9uWgBxLpS9mTyPvBWLC6cDsky1Czg9v8AeqAFD65KvVW4L9oUbm8QTW4v9xDLngyVGsrBhDLYUmXp6",
  "key8": "5u3QeDb9KXD6Z2tUHCW4BLPMrNd7szpT9XQB8ugpdswHEK3eCB7XfGADcG6oKgNrkNud9TAfWLm23s5upn4xuBtE",
  "key9": "5XbaoPQy5FL6Qw9UyWtvzDZ3vxePWptA3sURJDZtVfzE5PhiprpHJC6r9Kk4UXVfUt7u1vpD6ymC52fD6WQ3v7NA",
  "key10": "GVatDmM1KT4qHpmvaHsdYfTbCwo6wQD3yPcaXFivyRadi3mncPF4JNnUFjWT2Hcx68BBeUWtYAyvfpBZ1xEhcgt",
  "key11": "3ircbN1NrQM7MFbaZKgGWQLMinnNArCd7sBcQuHuA54YCiEgEKwAjevgFgm4oogEcL8ZGiJ5eK5imSnztt14XXQ2",
  "key12": "Bx6LriSNU4rWXLRYxMNXZEwQaKmp48RwRonqgFEH6acGqBAaKPHSMcNhC3PRytrcq5cUoxAXZXkm4SkV6rKjMfy",
  "key13": "3EV38naEzrrnX9TYNvjfhzBhS7P7aGnfrkoSbS4oX4oryGcCbdEEdocjeMJPieKbPCj81MLYLXg922jWJ78zvLuN",
  "key14": "rr4LeX3j5jcwxVxUp9aa41gNTvJsvGiCKpKY5puQan7PjRrTb2Q1hKrQnWFbCgLn4LMXmVyjTBk8kzCTHsjpCVs",
  "key15": "5uuhLfdJqvDEBGWUeB8HoE1GAGjf5buRSJpvjKB2p6hYUw3PejNTToXtN5mjbXJzAGEUUpC9hmXUi8UuYQo1cbaw",
  "key16": "3L9VcKqT8SSBk46WYNFgBCXFshWsMrao5dkzJwTffipTXpVqBPnKdnQLyvoC5nNBeMnPg7cZ6M5ZE2W4mbdPvidP",
  "key17": "5E3UZFEEHqXhhKnJpT5Qftm2o3fFZ2AqtufzviyNG1KotPpUJYRSziqvYeiifKCB9VDjw11uwceBrcdi6oYX7jfy",
  "key18": "3pSuwPVuJehWVmvQK7n3y1vuY42125kNuonaG53n5EZyPBdrwZ1qwAhyaRCV9wAFZ2m4R8XKAudWmQsHaYD1fHRE",
  "key19": "4mTXLFbv1jk6WYnCYFCnQ84s9WAjcebHVV7sTaWpYGDfyjxrujeSJzHXT28cqkZAdxBPr6BD3iv5sY3DEUuD1oX6",
  "key20": "avQ9LBQyemuvDxC63KnxQcx9A8VXHZMb8Bomzx9iQuRfpc88ovfgQgWrE3L1UX5PB4cunndB9vXFu44DW8DGKm2",
  "key21": "22ritGMHqoUu2cKEM4YwqkjAcSZJcrrh2PFxk9F9uLntcjBeJoEptoBw2NrPh9BWWbdgrHCvAYUkXaR5GLvAr6c3",
  "key22": "3qAXEjgRBgDQF6LaAZoV2JeWM2PXx7yNdSiRuME9HyZJ1wqyyvsiTRHvDaUZcVvNcUHTQRYEvPrU3YFxhAq8njFV",
  "key23": "2eaugZPgZZkkUN3hNHSMZ6ooH62cK5wb6xZEWbyrHRZ3aPSSKDVoAgN2Z1H6kxRpXDBN4q3dJDfvo6G41uZbtKyN",
  "key24": "48tYZZTakGr3CoSdPbT3uRpzscF35PcKpW9Z5LBEKaLp6VK6BdazmEANQFF6cX6oEc1RJLgbT4mkLFWi1bUWdKUx",
  "key25": "aDdqi3HBqu5AtwYxwCoFZhYVdDy6Vie6fGqvqdhNTRWww3XUtnAmP44EtxZpwP1YfwiheohYnvFwhuWsUJtQKs2",
  "key26": "2S6Sq4V6bh6gmhjhso2fCVFDXjp288WCpcS1Xm9CDeHjJ2Auaa27ubNUVHAVZsrhqiRt8rTyRT5SvSzzmvbgn1DA",
  "key27": "5Mt8c6j4DKcaPe12rapPWDVM7KVobFTsgCXkk4k8PP4mccBjb4SCpdBzMC6Sb8HHKrhKj57PTLPTSD1Af5cxdPf8",
  "key28": "3TwcvtsQVNUf12CsGToC8YXAjbw1dsW5oAko4zmC1kiGPeEueBZxdkfG4Hf1PnKezcG5xpvuefwg9rEASetzZiCY",
  "key29": "3XENfx6FcoS2BuSvab6AUkhcPyFcQG6uKgYK2Lg3jaJpZ9K9siivbWmu95ZVw8H3VsDFCefs8Ks8o3AVpLeGeS3a",
  "key30": "84yDXQbCbzumstySuXw86ynpuHfePaoBEfpbYUfZDRFiYpAgMj9PrxK9pHEqKNaDhUJ5cFEhckJXa1KqopmDc2v",
  "key31": "3CixKENa8vxNVv7kqaafpjzA2XJ2Mj4S6ewUoJ2xpgPXeUFTiHVAtnADt38tLEWmGy2WQK7JT5npjYeRQif7ikvS",
  "key32": "5axG56kDLw6kJniaWGMFDttVhshFHdqhfxtzRRT9Y5Std22vdXSTW29PG5e2ZrjKUhLa3xKDigykfS4rxaSDuv89",
  "key33": "5MySgrUMdKmjn8RdFRebeVEDo3zpZovkSgxHE6tyhE1z8KGzN6dz7KcrYwGL6aC8qTN8aczkrsJ3CvPqdm1mWsNq",
  "key34": "39HrEbJxmnxgHywTeeqBoY3ZNKJWbGKaGRJku1BWCXDJEvvp2o3WQnU9skHh37TC7T3pYoa14R4gQPXE8tWSeM16",
  "key35": "3mRCyyHmGFWeqGwmfrKMZY2LTLQP6cDofydAsUq47KJjMr8rT9mYNcpgZEfmYQPN3mxpa1Agrb96qe1uV6FrDawX",
  "key36": "2jpzNGtFyp85rHEaBSuXZnkUZi2YRwGiXvdt5FW7Rj3iwX7xoJKABaUedwGkYxdCRyRpAogppsPyzZbbjeHPdcLe",
  "key37": "2m4heTWnJr3jbwbrZLyDhKMPKG8Ptauo4fefGzguBPCmvHPHjgU2VJbAHV5bCWCbD8SsfbigvANWPGKyDB3KUTbM"
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
