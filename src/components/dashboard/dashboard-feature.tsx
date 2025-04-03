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
    "5JajmHvfgA6aHFaBwifjmY7RDp2wUKFodsBNSaSAibTAELNXHkvKoYouedFWkSygVe5XXQTjVCiGBWAVC7oxFXia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3utHPF3j9N5vD52V9JKzkUFXciRkRis7WPccMArFqwL3s7jpXAHh3jwnvRQsMY4z1gQqPZ8RF6swJvGw7BvjfAxu",
  "key1": "4p7j5dUfRUJHKVW2zwTq4d39qmrxfu4chdHYBpcbRMNCN4AwHkyDXsPW6Um8f3urH9DsF4zBWyKcEmwYFiVhvSS3",
  "key2": "38CPmGeeH7JoioSq5kcRZfD2fXxe2L1UghNa1hZVoPjaodTFTLxEyJ9fTdxqzjDbnFvZdCzqwYzxQKuvfXpbtUjk",
  "key3": "VGaPNcT8hV9YFeSxEoe3s7n1UARMLJ28TC1UEvxnbewyxyvCLGJqEfwoH6Qasbz5Jnp1qmgCQVHFXbDFjcsSL3w",
  "key4": "3mosNgeSMRZxtNe9LNGi4MBb5nZnyRzHbHd48PZbFnZU1A6Km15UQJ5PW7LrQ6VUWeyfufvwR4reMvpT1Q8xqqxr",
  "key5": "5MJNNeKsj3UCPLW4CV2xD8cMv9rPspTXhokwxEqFTTFrf5LJgnsnsrGXDkaNeyofKeHgRzDyhrRTAr6VU7Rpxj8q",
  "key6": "56ZR1efxhTStCWkTr6umg4V7xkfmsmgnfYMtjxUgHyCNRfgg7jUdQifSpaoGMfsqioWti7C6Sj8Z5DCW2VffmYZA",
  "key7": "22MwqxiZMSnTs9E9wu2yTZMEMY7bayDpCqvAaScD6p2XBTByNBqCgi91DRd7e74sSjaTjSaXgcfH3HqXh18b5bFw",
  "key8": "616ZqdTmNPyxPRfR53kPebhFKW9VG6T1xQ8hhnEA7jSjrv4112RbCJBJMhBSg2WLAohbCMSup6Ax7JuRD1iHXjTZ",
  "key9": "x6rQPVSyoGF5NsQz4fWMGwnzNVoCd27EyLDVr4TfEGaie1UJqjHCTi8ZaEzbD82gvPRpGXhz9CTLXTgZDxLLuek",
  "key10": "62jGhvmiYggRGXahpVhfJztRTZHr7HvcdpqpSkxt6W26ZawjoY5rrPojAWq8TgcUrKo3UZHEMpd2q4ZM1ya5txkF",
  "key11": "WYCqo1nMyR3tSDLZFVkeM3oAysPpZVq5nLz8rEaciyCtJLFXTqh7K7MPWSm16FcsnFB7Cj4ji8rBgAQaHsrJ2JX",
  "key12": "1279SzWna6koB2cJFxzumY1wBPMr3hEJjmxMVPFhpdw1k8UyobnnwTdRDk7y52AvyZvYLp3MKtECySFFDE8tJoS9",
  "key13": "4dieJ5pxeNyE1jNLnpnvgLEMWrjfyF4kkMhRFC6KAX6J63ptNJq7tjLzttYEUNXU9uC9BSwi8jjDFCGHY5qL3XS1",
  "key14": "3vCvh4hP9uz2C2jh5wYUCpZCYLuFAR76tjcwE4akoEWU9bmhv1s5R1wmtoTqYeVanKSozKCJ1P7ekw4GM1ZiyMP",
  "key15": "5m3ii7jZDGZ2AXQWoFkDXakKpZq7QrUWUsgdLUBVBQ6LzSuCxTEVUytw5AyGWJ4c9trNhum7BhYc3ABrqFsb3bTW",
  "key16": "4WupUjR6Q2gX5zPZvKmWJSqRiar2TRkSjg1wEpNmVrZeLGwqPXAKDZqPNexJ4zckB18mTCkLND9zaTF35jmpbbx3",
  "key17": "4uuQFdbiemNZwJuz5CHVhFVCwNPXSH5u3F2wYi3D97Yr9bxboB5wZ9ZNfnu3ZZnVw35oACGNgUrkrHxKgqRsMXUJ",
  "key18": "4ei8KifeGEmTeX85V1EBfNM9U2UEQ3wngkKqyno7s4Jzu3PpQmgXKJg7WhsxMfMGQmMXZBvwcKX2idT21GwLkkmo",
  "key19": "5cev16CjKFVHgVjvn1ZWqpfhCUgEnoUj1V2qZX2RH4egfEX4xMVkPEvYs2TfeZUMSZ6UFwGr1CQt6U5nhQBDRXYc",
  "key20": "3Kd2w178Nxtf93stGwTtG8QgdYz5TK7Mk5wwBL4NKhAmKyCppRz1J4Z1kMnneKXvZsmsJyfG2dUTZkdsgQmzkqUc",
  "key21": "jDCr6QSz3bM3haXUZjXcQyNuG4yAzouAwajBV9dug8h6KALbanjYyh3o1fcENcALNYub47jezqDt9zTZdSF8CZb",
  "key22": "5mSrKRpNYs4AuULjGzdxBXKfvsCds94Ys9P6e1JHF1qnNeYHQv64h9zoAeD3NQQm7jjx2vo4do2AesGxbixqYKKL",
  "key23": "494mhyRPr4mVgeUbmNvNgwfTfBu1hEPdg2Q2Xe7frqxjfhN3J5DBnYdHWEf9pAwvGUxZtY8YyvSpehWQz1v4z1Vz",
  "key24": "4ikZQiLJjHWnqtfCL5L8CMCct8ieJBfMnquce4BQWSkBrJShtJ9Vb1gXvbj18hW6Djs7ynKb3MSRrwktaNCgZu55",
  "key25": "3cZrB6AsxoGkMtv56e6zzGksMoMPH7t5TJDQM8HWP56xGFqVbLMPJqac6E2EYY8BSRcE94bJiRXjB8Q79WkUFJw",
  "key26": "CnL9m6e4JTbDaSt9vXiqWexcpg1NEEy2wvuKa89JUuXAhf6NiMEEFLuZc1MJii8qs8pzrPrwZMxUevi7yHNbrvq",
  "key27": "Tkc6SJTVqLrSaiYfaamVk6SByQAe3exiFbb949eWmMFsBZmWX7K1A79oY5nfyQjNndkXEh9oqHgHzCfEF3dLbmh",
  "key28": "3BjbR5vWdfXvsF2w6rmscda6FaBse1UxAUByTVpL6W7ibah6X3upMrjceRvGMMpyW7eBNrvj2xvRgPyZzAAwdjpK",
  "key29": "FrB7u31r5czgreG6jxqEGtgvUz13kcfKEJyGeeNbUmY9VTGZgXRjL5TRTjxgA194ae65KP2jwYoiRXwKUQnGGsd",
  "key30": "zNBKbT1SrkVjXFxeKnDZrkKbL5Wpn8g72yU7LSESmxfGExATF34RJNSJaFJuHDttTkBo2XeePc5jbBJ4fVqnCsT",
  "key31": "2NiYebsBywzbCKgfxeU3PmLkkTtrftjDnPXkktkGZyJ81XGA46FYTmrA4LxJHHNe3Jt9PfPvgxTzLCXBgcD9yKqp",
  "key32": "3mCnv4GneZoqAHvqgrMhTqqREywEVc4G6vXBTzRrH7TkHG3g3JX6YBYSdaknNACCPL35uFqjN6XQs41xTGaSRftJ",
  "key33": "2zun6dXM4ib3NKTE3C6iisXaak8MPSiSVUAtzBEmWJ2gsQx5nauAnEXmhATL816rSAFv1zpK9wHHvx3VrDNvkFPe",
  "key34": "3HLPqa4wScGkqLxnhhxp4tQjvQPZniZTFeVEPWSQvfr4Bzz8ypY3bk6h6EAgGW9shWeFfCA6QB8ECU82YJfmQtrN",
  "key35": "Ujds2a4hGx3nTTbGGtcsu2YWxiSG12DzbB8wsWbyPexWvVLjto5BXHvTgMWLDi52BQVZdtSYyJxzgJq6dFWpsfw",
  "key36": "5juU5rw5w4QbpVcNwxV11zZodbbrSHRA1zaFUKaQyqziZdMTyZBeqBHp692DW5TZKm7Unn5C8FRU7omkR1UKM2ZF",
  "key37": "2fFsDNZpvtZfG5a9ckZ9FifYa59QZe6ZiCRK746jsfJLJnWzezK5LWJLhHk37N7kbuLz62dUj73fZwcsUaC9BAEb",
  "key38": "4ZZWdtXWLhjjiTWxVhdVuAzUJUVjYqJdfCqMAdcXw99LaW2wefMnkD2eM1TdpuEHVjRFLc27kzdT3hrCw7rGJQs2",
  "key39": "3jq7zBYNo6RXijCUttnxZ8h6AJ7QtpBmdRbQJxMvc9sqUa6UaSP8NR9TRt9Z5ipLSHMNUs6JBm6AhsURQbtncFaR",
  "key40": "42Nx7eCigMJ5wzt1VxSTvZPJkQr6kQ9CEwgrnooYcNCkAsrwkTemquLYQSmYySstc3LhBfqdu18e24ykyhhSGNd2",
  "key41": "4npe6e8ivPmKdc3GH4F8Qj8CyL326712DEHDK7vtpCZwQ4NAxj2xnWYZ7juAbW8B7xZyJbQJ6sSGXXxnkPjHp3bi",
  "key42": "5pAmqLvLFXiGCiYMgnYdFTEeZNEN2N4Hd6SCUc525mz8JDuu2Aoyyjxzk2sznKfMU6qykrFTLkdHrV8LS8gHpxpK"
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
