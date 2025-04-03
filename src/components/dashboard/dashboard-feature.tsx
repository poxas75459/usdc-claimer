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
    "aU9yibv91XEKqhWoWp32dkdZvGZQ4n5NKswTzAZMiDrCDiTtgTEgjVkfPewBLKjfUVVYrJXP54FMfAvkYRfpBGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3av77aSuUPxukDVkcN5xYpwVS3HRrpPkudAhbTSNRVacEXkpFmqujaMEMShxdvgLgkwonMAXv12FQ7GKBZL6wzA",
  "key1": "32DHksLhpGigHjdzo5RNnfbpjF7oZ7wn6BeRWP2m3kwc1ZEhv7H2LUYed6mgouvPtfME1EgAMdt2gACugko7V9Rp",
  "key2": "3arPhLmXdTW3JCBZcmjejkz24Do7M3Y3DSzZuagKVN5y1mzzYBtdJ9fzethZaD3fn8sHNSWsHPcXSrWFNNMrc3Y1",
  "key3": "22HGVADELiSfieKbcA3hJLWD9uyeSovYDdzTAVDFF8psSUcMtfk2Z8hSiVoN7e7soVY97sMujgRk9HnnJjVB7Eug",
  "key4": "39YuBJ8pj43XzqG7UYnEiqNQhE6M6A8oAgf6XHwe3W5oVryL616maNkKa8cFUWeLytWaSqU2M6KwYfdBeB3rTYLG",
  "key5": "q1BuzRDs89e45JjXzLbhr6crj5vY9L6N1tB7tz4b49XQfLRFgWUEqU8XFf6GVrdZeynDYCqZsxEinChnPdEzKWj",
  "key6": "4m2PdKV8gNFqbWThwhCkpiTPvrW7zGcvZUiQCiv52f2N3jHPz8EsX6ZwEQ3NvzWkvMEWkWeFtVAsQhEw6vNik5TN",
  "key7": "2qDaAkG3Cj4RZ8ZNrNEL14MiTkLcjDz5BWu5P4fVWS2vviZG53phTEqRXqPfVZmqztBPmiwVRETyFiEiYhj5Ty3x",
  "key8": "5xtd7JUZjy5Ms7LVKg7tjf1GfXXtdnnZkjQAL5TrnUd7XL9WTUgEizbSmU6AzAVAq5k97cqAvPQ4DbxzmDmv7r8h",
  "key9": "cda4NfaXkM25FkW6snGuQ45kxGJhEE6zvKyQgQcscLNCuYKdLF5BLRVKuN67YBBsQqLEp1WdJt9BwtNmqhSJquF",
  "key10": "8CjmZaf7m52nykmuBKRQEoxyCxGPv66dKuAANkDR8jT4bhMHxfxf1r17HadPom17DYz5CxKwBH6JdehZgEESXY3",
  "key11": "45daaEFpA1kATNkzZMh4eyVD8X8WMqT3wLHhiRDZjVp851Q1q23GNujVrZYWu2VuP84BqWaJXt6iHq6VNN6X277i",
  "key12": "3hPRdmUYZ7xkarqJfoMSqcme8Uy92yKkjQ2fzpLMz2xFpSHjufgdwZy2fayBa12jiy3dqow6TRhhNagRcf3JbJwA",
  "key13": "3Eg2crvzPoQ8ffBg4zmBxkZGkvNuo6y8UhPBTvk6xe9cU8XGNX3nbWVsyMUeG7HGgG3tW7qABhKyMawbTjAYS2YW",
  "key14": "7jCBjbXKSFaCgmqT5Rsji27qmdn1BNctKwM5gN4QXYQinUdPCnGRZTpMrDHy4ZhBFnCu9J3F2wfUXxWvMk6TaJ8",
  "key15": "3dQP2kJUUEr2cNtB1jbeHLDiSx6x34gMaGoWCb2UxxZCA6reQnnr7Rh7V7iQh9MsmrdAbcAX2qJFQqkm4XqLpdEH",
  "key16": "4surueyqy1LhjcjzxPfKrvfRJ8s4taHkkoq5dMPMb6QNKTnwHQi6djuqCf7TyM1dtGMfcGNas1iUhyTog495Hj5V",
  "key17": "4LvEhAsnWf8vDDQaGJmYyvP5V54TuosyWqvYcrktkYnPNzTjjM4r1XLvLaUegcKz7uMwu2s86dJEy9MwsZ921nLz",
  "key18": "3KYvQcH4Z31LExJHyMcDLLPfoNqUmh4rYVSB8J9tsfvNL23ge161JeZ6SFHtjLjYbNyKw2q2h7t1cNkXmn4nRtX5",
  "key19": "5aUAx6BjnewqCha2whbycJ7QnWwFjRBYfJPdnbeq3Ei87pp1HgicuVvRJgqttvpdkB6BicX1To79P1LZdgyHeyw",
  "key20": "PnrJGyJfdxc2YCQRezae2SDkxBiNJfWoFvQ3AVvBxSRNopqw24d4it7HQo1zP1a1yEvjpFRa7eNnSZ6UnfgGJTa",
  "key21": "D5qchWcy21EpeRNQ3iHg22Jkn7YCsUKLsGrqhaZc9fHBnFTCaaJ2tFx3ivzZ3Uk2Vdt9zkfLTo3Zugk1rtvtXAD",
  "key22": "4sqKPfgDr8FcjjNMpBzt76rVeWYx1BUU2gqAdKqRtyzWDcEC9w1Esy9w4VPCXHCTc2TafqSCm76PDLJMFdWien3a",
  "key23": "3eYuDqP4QAQ6QTJ9aiMYXVxHhtEGZ3A27zXFtmNQAPsYz6KaPCaQR5GTnhvYFzbhNkvVMZqzwcSbjyqbbzGVsXH9",
  "key24": "5LUFgZLDcxu6RWj2Y6JCsWRrCszmTCJteXiNseyqYZajFmoZN1jCZn28GRVd6nFsDWifgBnMJZ8kRk2pHLqeq2u",
  "key25": "3uao3XFv8UCvx1p48YvVowGzKkjak4rKWvi6WnsaqmDh954XGp2M3FjDn5tEfhKsZ5fAx43aAZwML8pQZpwGsaXx",
  "key26": "5HPRL3QDu18zBmtmtuKeMSwibBfjEDSGYzQimPRKckphb4qpALoMbjzzqNc5Dt44mFCVn2gNSW2duwi8e5UJpUYb",
  "key27": "2d5RaV61R4SjkrA2MUP61d6GFrwC3kXY2mVHHR5LdZ5nTfD47DQRL8DAsXM24SCKij1Q3VWGFiefGpbrLHLPbncs",
  "key28": "2XD3ZE9PxDHujP6wCAtAcEp4F8Ri2gWcR3Ca8ey8ZcP2Lk1H3bWW9sNc7ix4yAEcJZiSinZz35BkdLitxBz9huBx",
  "key29": "cAvXSZPT3mShXWJZGjJrLr41FJiu3qvBtXkGM8vABGQBSscAHHmhTXir7gUrNXYw9dy35YNV95MFF7Jrp8CKpXo",
  "key30": "3r49v1fNGT3Cb6sHbg2mV1LHEeomm8rJqge52bMfA8CLQkxxovGW8zkPaukNJBf967F3kr2rMtXaqQzLMpfSjGqW",
  "key31": "39amHGmuoHYryA7QmpkXMBiYMXo78Mp3TAVy5jD6T3WczzTde7Bn7MjN1f4td92AHuoTVDsFYQKoU4qHqJs7iat3",
  "key32": "2AYzzTWsEWkPqzVF4Yti9R1H4X6U1m3qz3mAHgk1twiFbRJY8bHeg8dfcvSpqfPpsxPH3C5himZc5cKBRSv8n9ux",
  "key33": "Wj3bFLQzjt1NM7Dse1RYBGcxBkFgqgx3fM2N2cirhmvY8R8GxEph7zGSyHEaLskHExRHatLH9Z66EPQjJ5gTWtA",
  "key34": "4JXu5cddBuaXV6CzqVmR96ZXMzP9CN2JwYHLsBS56bDLuYUJTrfD6vcG8oRPv8GPrhH6fje2xSVLAHA94agkHQCW",
  "key35": "tJ7829qRPbobMkeAKp6KTMsMTULXjLCB5S5jKs2yCSivYW1y9ix9qZbSQEdi3L1Hjiat8tV1kCHLZfiHTNv548y",
  "key36": "4KDzM72FeU4GnbpLnqXtb8ptUusW2gDY84G1APZvdixK88o4oJDJUKZhd9BhMmm8QmNFuAW4WxDQHuXFpYP55xQa",
  "key37": "4qYLKFB979ozBwiKwRAeHQdAc5FLdtJ8zmKuyZw1MPbrfD1GmArKVmX8f4FfHzCdmVdmmm4oKYMjyFBwzJGG5Dht",
  "key38": "44SRrin5r9D4Vcz6TzgZJaax2xAQffGpiL8h4pzRfmMq8sQwyyRzJSXZ745BfyQvZykxMMrA5e7zcRBFrCrvnnn8",
  "key39": "3BtzSWRa5uYNwv9Gs9kDvTaoLsUcpcwpXHVJCZheQhZ6arCjMJvjzp5Ycb4sn8poR2dda5ei7JTt3mNF42PgrC3L",
  "key40": "2cnVSGibE3kEBKRK4LaFEccwJzCVE2umMpq3EiwoZMtq5ZjxrQBAZpRCZJVkXMHDLYnR72PdCjkdiG8tZ4aCByRK",
  "key41": "G3TQc9ikkoMWXmDtne7biwLyKkFjRZXHxWLSBFMW3tXaWQRhtxgBn6QjjhxnBHQx8Xw9PbKG14n5ghTsvEjythz",
  "key42": "qDWHM1uMwTfyrrPB1NM2wVryVZj881UaThB71oJzubJGovWbqifiVsHc8cJUUXmbGPJVdZ4nWn3xe7MGoUXFpTw",
  "key43": "Faz2ypmf1FsGatA1dp4rNDxmPCVFEwxcUhcSf7k6gRiFgwYwHeY2dYKJj3ikBHyGszi2FdST9PsvkDHQPRCT46o",
  "key44": "5pSyrcCumc2p6fm2JPUgKr3V4EjnVHr4ufysxFf8jxxoERhbgCMrZKLqmMfTZTNHdWTu1nzBb7yamhLGjEvsf5PG",
  "key45": "2rQWAqjmLVeYQLpxMDfMrS3uvSLnaNdWtWwfh4uz4Kut2SB6hy1eRSJ2yyhpLUrEcyXmr5j6EDcZYuNPEmCouEnr",
  "key46": "2BLP1NKhxYuaU1syVfWFxgZM1K3oJ6AqtfEc96y1HpnvSoFaUn4cdGKcJsuX3fJrCW4tcEanRJuA6WdfbXL4KAVR",
  "key47": "5QJCZjASMwjAvR3GAvYazCTKbFL69PWe12xBqaEK2RpPaaNpivAjgSxRPjbjNWTXzbkVMNJMfUWn8SnfN3au7RCY",
  "key48": "5goMd15tYw1cBrMnrFVkwyBVGprGM4sW613y7Ar5MwBFAHVh9fQhs2W68Js9JNHmPXczJwkdZwyn3h7TTaMWi8YB",
  "key49": "3Wd5f3ZFiKxDdm9s27BWzjZU2z5c9e4FhMuuM1T24MyKWVThi2Sp8uBJPq5PFQEecc5Hfduir4TuzxgRjBYRVAqv"
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
