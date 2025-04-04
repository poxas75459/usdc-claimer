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
    "4G11VHYFFuZURAU5TrNmsYEB8otXZCCDrx5Q4LPihESPtoYEzfpyLjK77RMdzNewUbn8NbsgueWtHS2XE8j19YMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LZK4nCu5pBLt9HKX39yegP7R5AVRhv2aN9maWgbeGNaQDhNs6fTJu3Ci9AqTBto9h3BoDYp7bTQixd8TwAa7i7v",
  "key1": "563rkacuTSeHSw62HUvFipbvSK79p3n5fAotcwgKbGNPZRUfm3F7armY3qmpiW98txkagQgbekHkLi6q18ETWv3Q",
  "key2": "57VnKri3fnDi9zPSS6h4Rg8o1wo33PA5cRMBZenh32M8FPAXN4nGykKS5xUoLUXRPHmg35MumPKJnz2v9pV8kn7g",
  "key3": "5LwFgxthERda7E21z1fKKdrNr2VpSRzmybpkZtLgaQyov1ptDJJ9VL5S2UmiWNafBJ27LSJvva5FAGMV7aarpi7c",
  "key4": "44RYUoXM6AU3aFJ1rGQEUFZt4bnS94wCQa91JZjM7M22GbhjYr2qye2BTQfw1W1C2DMpt32TFdSmcPkNkZy6PzUm",
  "key5": "2F81Ex8z5yQPZ3pVcZuzfV5MyYWNCjUemT8HKwo25EKRw9D2cBFt5ejaQJJeYJAi8mMNG4qwFr3fVsoQaaNDVGPY",
  "key6": "4NxrGYsucQrCUcPZqnRayMWgd7gJ7Cq4cdoy3zRAk4aCkXR1Xp9CMW2zSD16UXg9Mk63EzdZ3yRd1oTdmJ366xKS",
  "key7": "5YCaBEAJ3h52838SWmvFVrQRp21HQrpc1npJgF1PRSXqYRV4NWp3SmvZD41gBv9e9iUCTM1d1zw6rbSuuaj3V4oo",
  "key8": "3uXEhXWK3VwuBvHdBSzCeCBCNNEJXLKaJEzbgxAbBNioYnuKcnGPo6AFA64Mi7mzXQUuJf7wG1uAvpjAvu7qu5tw",
  "key9": "4cShuzYaqmLhDWx8MJVzkRMubBMJ7n9fiRNM3pCsxjBWrhttGeSvuZyURvSH3tNR6soNAuTuNSaf4eypoFSDxD7n",
  "key10": "dBgodc5ELukstAhBv5cNZ2H13jgV16x2G3zj91quA3MkqwMMJZnBk5w49extSBZxmuPbwgcP1x1tAoXDtD5gJdd",
  "key11": "2buNV6zAuBYqvK8JQfRbKu4iYedvVa32Y5cGhTCnnsHbcrEtbYhhJEZ15okzeXCSwvnz2KHkcN4pwuGSne8wRM4J",
  "key12": "aq1jCRi33hAisfB1yf5iFomRDzajt2gJMbfNrn3H1hMCycbzSM7wfTXPDe1PpC1Bv3iSPewE6oocmsAkDvgrpNu",
  "key13": "2fgbHRuYgtPsmkgQFBknfEDWx5kt6JoRYPEWg77oRSEZzjm2h4j93fM1q4c6APwwXEEt1sfqmLdQdLQZ431MrCQF",
  "key14": "3pYXdXvHaJEUVX9m1YHzf8fNEgoFQXN1HSCNWooRTeh976MX9PuQ3ymNEj1xc17yF1NZcPZFxxayhTuCC58tmssw",
  "key15": "hm9egQFdG9psKhKefkskfUcBGWv9CZBcqwwJDKNHKo1ZkMEirteygj7Mv4NLTkycUSAJyRYF77f4K9jBqF5xBqG",
  "key16": "3aVJ9CReDBYUq8gQZG481FYLrQugzpXYi3HBAuVQxJrZ4z8EXJsPCb5DSvT6GC71EPzkq8hRR7ZBxvzcR3UceHUU",
  "key17": "2BofqBwMfSVsZf45UVNQq9c3rzd1nSigovuztBY2kDc1X43TFxUpNj4EshKy9tmu7KqWaoCPJGykcPiorDN983VA",
  "key18": "wudjfzHpHr6x5EY4XrJuJiX8bHnfNbZxN1xTjY8rHrR1upbrLWRwAkaewGpLEWib9NEV23SBaS8DEDJ86UrLqcH",
  "key19": "xpcUYTsrnMrkLzMbBRYXEF9h3HKL5TY5xL9Qz56p4EmzwGTpZ5qu3NsUjP7ksqm9X1Ux98C2sPLUqTdHPZ6VtUv",
  "key20": "2MKT24buBWMQ7LyptnXwZLeEYEwYfifhYnSNfKP8ZTRtftDgtJH1CUtPu6HDL9GjiEvk3Vonid9bMemyEjawBrUa",
  "key21": "381796JQvFfYExzQpcWJpeUUcwke546TJb9Yjg3wzuwViu6RkPzgvPYtgHE59qZFxKYPfHNHMaL8XiZjZYKNjGPw",
  "key22": "ZuvdWqZQkaH28qjWqfBHJiRVRdhgQGKZCANLeH5jR1LoR5jGC39xqnz4LZgkcXLvMMXyY17jDuNF9t2p3QEh7pe",
  "key23": "2yPxJKqAQWefAvpvbSJ2CUFvhP67AFYdHeySJk78zaxcCH2Nhr1qoXd8UUBvji9pW1HUGkqPGEPgdqTiiuhA5pzB",
  "key24": "5Sfb9T6tz7Y4pL89paA5SkREQ6YZw9ytJuQkJbJfR3NjZZhd9Q7bvsWAdKVc7yfUVutZnZvPq5Q9uL8yBdJDsjhF",
  "key25": "3n8jZudNetjxtXMpnftUJVPpSTjB9Hkurz42pqvKzHBJfQSymudMJgXnv2x6AuSiUXa5chT89PoFmhBCPNqpPDFW",
  "key26": "3Bci4sX96LkHdZFqHED9fyt5v1dN5kUmnwDsaVkfXUpFPGo7ND6ygZg7rLyrZ2WyJJv8snH8Ezqqv5Qp7A3tTuGA",
  "key27": "bUBRSBr4EHXUFmZcKW19Ai6y5XuPyUhPTLvEjUd35mFgmZZTeb8pEkduvrd3cxqigie8Ukd9NvjwnEXUn7aFzBR",
  "key28": "3VNGfefshVwTVq3m4knADjUaFT2wpNSaP8E5rfkrhw6ZPV3ZXRcwXRvx4ZhbcEybZgWcfdJj8SYZKmZYWFKNquby",
  "key29": "4Y5HnUQ1yGbcMMKtC5tc3xBu2SYb7Wp3j5SozNMLvrWjVxbDVAT8epcmPKbzJ1xTcmHvqf8nVgB4pjW2DLRcFSUU",
  "key30": "4ZgPrNtSzrtEQ1AvButmsuXGKeRZ4HYqNRbufXjYZBFGtYe3QQHuQZa7L9Ejr7NYZ1ioRNuAnFvFk73HynLsJmRP",
  "key31": "4HMoaPoHijXXgqVhDFAvfDM4fHfduFzjWZuB3PRf3J82DhbrPGF4iRCpiJ9JdmhmgRW4uZGy5tv2AQfu5k1TQ4Uh",
  "key32": "5htNV3hhVfcXa1R9vnLfFVqAaW5YyJqqZT8byDNQmnfyv8d6ng6HPoNVjkotJHCwRETbHNfBFKGCtWxschAYXzJP",
  "key33": "2gDsegj7u9g8vGc8H9RbTnFsq8gxg64ysY5qQsaVYDExcXor83XwxkMancAQES73K4BsVNQxQZxjSn6PGNzDMFxT",
  "key34": "3XnqUisYchA1jU9QE5jAnamLebXuBMcGENuA6PsxCXjQdVtyQjpnAUVVRGqy63svZbJev3mEi4dGjGmU1bMB3tBZ",
  "key35": "59Yxb75fM3GoL8wUzNuWefuGWyxUVsTA1wfq6xfkp3y9CBcRZ3kcZ3k3Vgc4YCKwBVAzjLopu1tWJMyvbGtm8HVi",
  "key36": "2s6M7iWD8snCgjtZLPbSEkHY92qGhSRT4MTq5U8ESFGuR5qdAEExL1kFq8Cr7kZG1Tbx56FPQSqvAUBpiQbqee5P",
  "key37": "pqjad18v767qAYL3B2AAsUKo3zTCVGjingXgu1cGc3j5E9Avt3kctrtYa7mF2hpsmASE7dZqcpMV8nfUPTa8X7k",
  "key38": "4edzr9gisSadzSCjfrxcZ6s5vUm7TK1dN8FzeQ3xn4cZg4JdMjEDTxqL4Wjqu1gnEABxcjKxmqeR84toVv5SihTf",
  "key39": "5RAseVZqnfKyKaYJhqPZK7RC9pNQzGa8xGM3vmjWrhyVm6vzVvxVJb8unusXpd6RYfa5BPnimFYXYemwxcCKcqY3",
  "key40": "5CGdF3jPuEjFeMdaFHcmsHxSfqTQXYY25Jw4KGqPNwZPJhqqGkXANLJJDK1J7nEWKg8yFQnftWQ3E8WxaEvGbvMP",
  "key41": "3hA5Ya6zZaDJvWfignmx93MZbt4MhK1G6DPLPrfToXExnV3t3pFUMPg8sc7XcFTxHzW5k8iVkW1wxDTPvtdsG6Eq",
  "key42": "Zo35GryBQYVbB1kM3yQsBuhxsF5N8LknGWDSJQKc3EKwTQQuuq5cJN6TmRqquweSoRgBuN68fSU9WYGTT36mPUV",
  "key43": "3J1vsPMKnb2z14AHw97dazpgULruUiu65LCVwd2FRYror6GJCj1CHPQ858JoFzm5bgy7BNsMvaWMWTfZ2xSmpyGD",
  "key44": "3LusUCQRr5sH6xpEr2QR67XpgxDqN5vEvNJqyWSQqA5ZKgx5VBK7i86uEfGoyMY19hbTCdDoAZb9yDgiHvBzHgZ1",
  "key45": "57DTxdz2cntUzjeUCwzQGxqxpcmpxYQGBd9jUmaBEDZ4UZJG38cYsqR9UNVeLvCTKqMQNs87EuRofBVwwMAsVPUV",
  "key46": "4RzXKBswXScMd2TQXiJCHVr8gdeDgX83k8dkb33gTdnN4q2SNahHwqksdDsSvb57bbZ3q9X7qc4VasRz1Wrs6Z9Z",
  "key47": "51Y8FRYMkCmEQGHjRX3tqE6vsCKQy3M9EsLWyb8Q6AmGypv5ehvwmz4pwyQSvJu1pQgxwZDJZ7zqbmePmVvcgFjf"
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
