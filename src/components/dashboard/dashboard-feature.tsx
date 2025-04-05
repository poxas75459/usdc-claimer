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
    "5yDHrVBhVbt4ziPSY4hkTUEzid156wsoK7dHCZCWE4HnbRn5cHEKGyp25inRJN8n4LMLxfqz9npcmGAzUq26EQjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jP2aoqvavwggQTsEazu2prMa9HZfA84VYdKRnmEWQzdPJBELqyz1xKfciYhWXyLwHVXA1iqZKg5P2m1bKT6AFGm",
  "key1": "5Vrx5xZHQ8MMGBErRNonm4poGJUofJndWRfGgeEsceQ2jyNGgUbsrGEt4d7zdxyyzXXoQYUNmYzkGG6nH2bFp8ku",
  "key2": "4wW26gdW5W1EYcLn4p4NJVERFBN3ma3LsorLWB5cHgBEgHMBohar4GByzrwW1VePqaJccCwzQMGGtu8BLXCBWcMS",
  "key3": "6Dt3xdE6uSrHiEt5xyaTXnnCuzNwcUvPSWSxdi5XJZ3utHNdS3G5tP8a1NTN388S24NGSmAyzUWmbHceTrEBNk8",
  "key4": "2k5Tw7me1V4qQF51VCD2rEZw32sXD5WihrAmBikz2mxGkfUsLiqGhcaoAuumJ6bz7hwV5PwhLTM4hdpSp3Ff6wqP",
  "key5": "61LyjvxYpefCZEebGgZQCudBkCQv7GzkNX5bmPPeaaNt3R6HqCnpPPiM61SNPgNvcrahkNno6mVEhxLJAFjkWYux",
  "key6": "AjcnFDh3TCps3Dn5jrcLMw8MeUfkcLy1WBbRbTQMbyFWzj7zaaQQNXeS4Ejww827CgMRwtHzzz8nvXo1dybbxEi",
  "key7": "5GQYpa19GSKHqmj4XLnyzSsRW46t3LYuJm5c3G1GA8Uka9HSA1yTEp85gHYDuxW8TTLfvnje9vRnhhGNdoaYNr1v",
  "key8": "37jsUPHiyLkqN4PtjCSt6Zpt6BvHoZfDewvqUpx6jpvSUrpVeJLRmcQot73qfYq1Bo2sWgJkeXussvm8iuUAruM4",
  "key9": "39sArYcq97apfh3HxnkemJZwpQm3XuiEhxAimXDhF4WjNxpt5iJac4YWU6dfgqvVb38JoXBgdYu3S6PGWb5dBo9a",
  "key10": "2GcBAjUdSKtHw6544jYQd3EuxvNzgkEKJZwBbFPFzJqeg8TbykkuhsFcemj32MdHsxUsBadWbuePKdYFr63mJB7d",
  "key11": "2YU1bVHotFGHA6hcwtXFULDNHrwqiF4u8PdqXV84szkdxLchdgZEAS8ZimVCf5EUdQ9rbBmF47jqjqm3oqg6RvNp",
  "key12": "5JXePDcLWJHvYoCR4dGF74Uru1NHoRWWHMSvW4rqXtLHPxsbhHBgwHwdJw5aYJfbpcbRjCMgjTKkAScojuh4rKh1",
  "key13": "5GtJ4AFrSy44n66dgN9uHijEccdJhfJGTTbMpRCmnAiKwLLpL1jryB83vTaN8qYFdbZ4BN6M9hviL5EABfNDEhES",
  "key14": "5eUtLreTxZ4tKQbXwk6oru1AMquWKgBcPErrzSE2GYBGnftJjnMyfWCacFnhqKhrbo7iGheqeDBa3pLVKWNDzGUV",
  "key15": "2kRL3n8wL9BiHo7pq4oaaiKhZ49fyszmveKBgjneJ3tH52xRQojbaVqVn5VRdY9Tmn7WK8eUBsVi7LV9LMGu3iqz",
  "key16": "48VCb58NFfxXFpNpzFYCP7fWnGDtWdPpntwp4uJzx3XKUTmZ1JdjjSw6c4VbEoYsWsFD2AQDFBz8BX5xXzX5UDYr",
  "key17": "3C9Y7F5aA5AeLHAYYbmUC46L2XB1TE954hkJ3nhvfgnMisw5dW1uDovTSVkLvUfttorFekiW9W4uKN5h2iCGv6hm",
  "key18": "ZNY3AJjZKJizvDYwgLN5yzVgUjmsGNL93weFbc8ywGVZhfQzRypJfiKT6taCvSkYUU7L841XiaoUjopPVa4awD3",
  "key19": "TXg2MjNo8GNvfeuM59nZB7RHpqj3Timv6TQsmmb8y8VEnnqB3SMqurm7EFjFBYEe5D1kHk3kBGCEBDTnkU43Bnw",
  "key20": "5sqvbAyzFTzPTmrBigUyScnPnv2bRyCziaF7tsYfYaY89SdbmgCEcm4nvBvrdnaTQujazn5jP5fUkK79zuCQAGtF",
  "key21": "3Xu5ouVZswjSoXND8GFZD3GDmYGqvCgMiZM2xd6jaeZEgF8ovLq8NRg5e4yTobbdWeUc6uZwCFD7cVXbHVChuyjP",
  "key22": "2K5chuZGixrAdHnfrDnJ5VQQRwGSuyRrmKtrjxNtxy16ohatuLVtFqqfBGhi7GTnN8tvmxEqfCQXsAEAJzovEFwh",
  "key23": "3cVjb3akLQFas5DjQKzEpyNhZd7RKNtc3EiDRCUV5BnWM9VUVU6um2nHigYo5mDt8NTeVt3Hvy38dFEJMDBBdyWz",
  "key24": "5wc8rEEDdJa78gnJmNcC7uvCC4G8DtmPN74suEY7AiSGqN8SAPU21F1Lk5MGJwMQM9SKZpsze4kJUiX5UpaAo9mD",
  "key25": "3eYXaQbRz5MdYLq1uazMX5wGMCDZMotT1sC1WkKF7XwBDyGizyrgHwkQjPx9qMNu9ZpBRHPb8zRccKTrYTyus6ji",
  "key26": "4Ashzu8wYLcQPktcFyqLobogPq6zvcD2VZD2gqf3YbYh4yJJAQhG8V15h29cVz3YE5NQfskbDsM4f4Hvx8KCHHNh",
  "key27": "2nixGaSTxUG3P9deCz75HDfUC6DuzPcFTEas5HNesJDKMPNsBJataEaQf37rfjHn1wQ9p88LxsPDjiP46USLxJSa",
  "key28": "wN6hKxUmtuZRHRjocZhQpepvhpqCHKdJw7ECJ6PS8mgGKT31EV94kuXDh7xoPDTDYaGfAL9RYoTmXGCDTKQrbYW",
  "key29": "5iQLweXDHKvJ9jygd4oLzc6CZhjbdaLJJBNHWWyYV6cyKPJ7WzSitAGwFR7xaHgvcLnZ8HcVWSNdpyVeyxVwB5HA",
  "key30": "4KxZawCGvLuifr7DB6ZWFV75zzHxEBrDhdB894GmgLR1SCQAJarzZjSX8xPkp3uyCsnHRtvMDGjy75j2a8i7zNBY",
  "key31": "2NZVSRAQdiDSqatfeV6DWpZZfNcMa48TMnuPms9vVnwJJWzKqnvWgC6cQnojKhU32TogpuhiwDxUCG6uar43vPgM",
  "key32": "5TmgyyxgyFyYD1WaxPWFYPiDy9fH5Pbh9MCMrtJELuyMULgHZ1gFh2S7dB6ox21WdrgLYMMpj9qFWYYMkq2Kg8TY",
  "key33": "2dppFQYRsLyRww3vdL6h6JSZvW4VZWdqXEbn2bEcZ8HtaNpS3UDhLN6gKNKmtebAjSrYBMjx6zMmeeoP73LGxxB4",
  "key34": "21tZcGM6g93frLQXLaiYYazCwRGBjW1o8FPmxZb2bAnQC3Jw6BpQAViijR1Zy9QEb3H7sZLsmQ1Da26SGC7nuL7g",
  "key35": "3PcbADtx8aQEjPn9NNQd3UrbmKLKeSGU54g9nKH67xKn8zfDBiBbegUCqZR9krprBZmi9ENoLq55qNa575npoYD2",
  "key36": "3H4NtrDDi3zNzvBdpY3SAuTiicQ25z9cUQYNN6TsaMS6t3v3JbjwSTK8rfn6DSiyhg6Er8P15x78Xdm2s64yyUCF",
  "key37": "5LSBjcjx354ero6h1UuYa7K6MnCSpUu4soyia7F6QruwuMgj9aLCUBw3dvwCvb3tnG4u6zSi95TnbvUtma2FTQ3C",
  "key38": "65i6z5CvnkBC75BtG4xtVboFKuvt9jDx3G8go2q68kJ16Be4DcWZAmJkvpAarXH51urSPMS2x14njSBLqp1SbpK6",
  "key39": "5TcwKnA53phnjK5hmt4GFcSkhxLL5LDvgu4mphY2MTqNmjBJr5PmA5fn1jc9BKwEys2XAWbvJhUhaz42wHorrUCh",
  "key40": "RW8JkDEvM2BnHFFFCxGA3aqSC7puzfL5LVBzfPSwkWWcQGNkTkjAkcunTWmoGdPpA8Bs8sSSSibJpRiUKXqHmCH",
  "key41": "5o41BKtzfpoVyvpDFerSpLmQnV9vTdvf5kF2NAroSbX81qgeP1X8BPULmfQKwmcEP9Ao92nMZzK4UMsDuZzVsx5Q",
  "key42": "3Js7EhNy2vxtiymafVKEvFQv1DG2R4dSRRz85SJaAET7zGGQ9FaZvGHRVKJs99DZXgZrt7gF7SB1QcVYrJh3x4rL",
  "key43": "FpF2WF7CQX1ZK4swq1PzgrCGn8soWv7iJknu7yTBPh8WrDpe4Kq36NUJChuX74Tovpup15gYitZHikY5e2uh7sW"
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
