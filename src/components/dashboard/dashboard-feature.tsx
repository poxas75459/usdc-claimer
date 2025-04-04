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
    "42ZRLhC8mZhkGAL8BwuYGjk3i1STaycgdKLsmZmJRZyQxtCM2qD5auNymBZCxJSQTAJrkhJR8pAgGFHTZyTyGfZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PdosE74HrBKneRRHLdcrP5my9BxeR5qn8mkc2SgAkYp9aegd5Q4j99DxHKGHPuzMH4Z2qjijQmib9wMCBWSfAU7",
  "key1": "syRvLLbyKe3jPrzu7qwYNEpRHynkm4U7wq3CKkv3MA3WdvfqdxMZv9QkUSEj9ZyzykW4dVUiMY2WamJj9ncJbK4",
  "key2": "4bW2WD3R6hR24TfMPtnFwJXoQrfQ55t97jFv2R4gZpg57EXYoEoeVW9Lkqk2Ssshk32itSULr7ehzybQ6QY3TNXh",
  "key3": "2WNecBMqSgG6r6KTo1jvfdiYqnDH8BdjamfSzbeiSDjs4gsRzQh5bQZQqwDYtSe1vavYPRiygQdBhjWxAagCm59D",
  "key4": "2T4DTWcLKMg3XQ4NF2Dq5MwzgcBTtJNm6fCouzuhtnPoCntnkw5jN6Mck4mmigPYFxqrCxXZUsQRJBnKfjk25C2E",
  "key5": "5Eax65YXZQtaorcf8MtuX613dLcrMMiWopCT2gkET1QPWoucRzWqiV3LB4kzSNM7V3QTK7Rozt5CyudGmgyoDkFg",
  "key6": "3d386eQVVCdwUdK1kBExRgEXPQ6RuWaj8PJaBYjA7BmZPCPrRRiDAzQQQ4ktF1xpUR8kmRMPG4yyKtb2QVzTtTER",
  "key7": "3kwYz8As1V4qsV9csg4t2AQRZzAxKvxeog3HLUyYehwX87yjS6yhLB3GVhmLDEptHtqX8HK5Sidv1o9o6ZBZZoS1",
  "key8": "3QV6QG7w74bB252Tz1XgSNYZE8DbqkJdpi1223KX1ixWef7uhkF46J2EdTDwXzYn9WKNAPjpLTR3nDrneGpNF6kC",
  "key9": "49TFfLPmbLmWCuJnF5UQxhpFfGGApwJs1LBkMx6AsxeH1QYBRQ3rWbL6GsKnXVbsySht9btPmVAyyijFEhyEj68",
  "key10": "fAG6ecWH8FbMrHNRyRWYBp7Pu2Q9A5F7X3G7NJPHQ37ei16wVMF3w1SwSshGssv2QVJyCksMJRQUUzq57LzAh2Y",
  "key11": "5karmRu3JBWZq5EJWNgU7EaRr5jNxogFYQu9QcnPp1wC9y3h1UBtg1M7hmU9raQcgZuKBQDUJGReMUa8F9fWrznZ",
  "key12": "42HRSYk3BkNUPW7qAJJDAWVMs21ERdhZZgoJemTibvqnyZSYRdEzALzgAycobtpGpvUaZMoH6Sh8suy3P7NHYFY7",
  "key13": "2cv58C6LRqTkgacvYZhoNdjgWak1DvqRtwYkzVVRGqwvmMFf81rxvE79SAGUWeM1SbnQPFrDJbqDWBA9FHPRs6Md",
  "key14": "3wx2etwwUjGGarW7QQXSULzaZJx6mrupE52WdKjae1fbpCcukdt6Y9T5PAegZ5XrTUP3sKk6aeGfvNM7Ui83aaFT",
  "key15": "3jpH6ZptUDA1Km6BLBMUnfqA9XF1PQYSYo2oCzGwSyPpkkMsZzbBTMpa85dX8vZ98XKEEBjaZs1QgaqfD5kMSxV7",
  "key16": "3XZf4cWtENH6zhwdJm3MvswBf1YjcntXGsUJmA6x41AdXNEJXkTCCgVa6v6ktxpyMfoViyABzjdhP1rqV5bhzKU",
  "key17": "36X5vEuQ2yVPyi2cEXVrwWmNUTNtm4j3UmPwkBB63qXQAgcSEzpDLZsqbybKFtXmZi4gD7yLDNZYT3wdzgjhXMFy",
  "key18": "4syh3ifeFiNgmGfbi4ekMn3bm8n7M21oeHF9SDER1qHU6YXoEp6q228R1QBBnsozTtXPHRTNJmG4b87JgUNwG53L",
  "key19": "2qX37VCyue9MbymRmhEK7SDj8PTfYcdCTB17A9u5wun9idrUQBTAFR2J1xas3a4Qk5u88oozeJUvkAizCyDU4jNo",
  "key20": "4rhr9Uq9QPYsAU4kyon4gVsfhkFCCgDsgHj6KiHot69gCuKp88kt7K4PJ9419VQXVPieZ2hLb2mSzEf3hQrgjjGh",
  "key21": "iorGFfqi6aZ8oCeUpRRxbov1fG4wkSwagBkRxMrGvwsGjm6orwYPWYuqnKiGuQ3BUyaWrgkBqUYoGNDDokU1xRK",
  "key22": "5njoUwkiAPU4pM6TDPuoHHnY9788KBUmcfeMGrG7154GDSPtfPf22Hot54Wb5gX12SbjLaaapLLPj3VD6mJMaq5c",
  "key23": "4T3CLENggkxHrTeG1Xo9DcgqAAoFNhEnSMDhE84U2Y1iVv2HFWXri3JYBUPJYaU4PHgNLQRsCdFNYVnytRaZYoTd",
  "key24": "oVgHd1kcks9zq6RFvVBbhambohgsXuXVo9FQMvz7x15Yu7c3fHzyPGrrRQ8eFEmGxRPhdaij7UFboymz35Py1fy",
  "key25": "FhddUedZiruAxZPJqA9adqHfc2orfUWwmyTs2xKHmQTLxY7ac4JCvgNANdTSkEPrVfnp8LcLWstDzUknHxiyRKW",
  "key26": "4tg7Kkb2NfYGxBw7zp2n6q3jYmzrGjVCgz4NZpdEGVXRxhSrGHVbgbaUyevXYaMWRKhRmAUaBmoHb9ZQRZvZeKPx",
  "key27": "4Yt2ocBnD84LkANk18rU46oxd7sT6NiehPwpyPhfLhmPHnbSR64BPBURJGYLeTUFYFJJ7nPAPzbKgVETh5hkfszV",
  "key28": "337hPUeBVs4ZfnCqYpC4EoDH4P9Qa33go4MDyHR6nQveiPgCDoURtio9i3i3ZoTjgCqEZv7D8E8S9X6fhWkp8qZm",
  "key29": "8MmiENR1r711rfNMpZfRCxwL2N5bom9qznapruCGgaf5jhA4MBSQ61qKTdiK5y7yr6xDWVF5yskJhsoWXPM3ckp",
  "key30": "5tcCUyUoeXNk6oJMYTsd4eAYMAxroMoGAUPWaVoB5vuWcjyVTzjZngx14d44hcVbRpUjnoGq6tUmRZHN5XZRKqk5",
  "key31": "sRUpaDmw4BrNLHGb66pAJ6cVf4QDf2yUTxEaVptqRcZsELKUYKXkqzXH42Ar1RDzJXoaau1gG5jHqXb3THqoATQ",
  "key32": "2vPRz6q2eiQwyTkzBrCgZVG3v9x8hEf74KBNiUrhAurmpDjtxNaeoebe8tiBQ8ZTGMunFgtgxvuQcm9bJifFS6zc",
  "key33": "5vDjtKS9c7RrRQp8LMSJY9oBTvi9rH68FTcBYs1NEp79HAGH2FcycKbweRvneyNeiL2vwLwfbfNHvFMuCabNN1vd",
  "key34": "eSZHghQLzFQH3LYL1ZwunLmHsfSL9vKoT1iRyXCoMSUxY52PWAA5uM1m9GSBuJwZrep4Z7zCQ6MuXYHj9ySiqKN",
  "key35": "3WSkdzxew9ggJqaSprhK1WY9SaoPwVTNuTA9JG14vp7Gkh8aqhbRUZhDZj2YgVv3ZhQ8ufL4bCKfbt967TdidNM3",
  "key36": "DUZXUDCaCbN9e63pR22pRibW5Qjz6Y4Qw29rzQYv88ZfR5TMPtXJxpeuXHt5DePtvB2gu6TX1coiojHcjuzPxyL",
  "key37": "557vm99vDjcqaptmgfndRM5HMKV1tGJtdfHgnq3kmkXjruM4SGSFJCTsHi9Ufb85oXv4gGwmXG7YqHVCcbCn2897",
  "key38": "3nKJFXUYmV1CPLgLB2JtHgm6LDKvkEoywn3bdv2z4C48iA9biHn5RfXmogXuKVYtqv95VY33Yq8JSjvXnV2J79bp",
  "key39": "3ymq1bgNW4be7G6JdBNvfSFD84WN62xAyBoeuZBRhK7cd7H3Gif3btMJz4S8ZuTVaHYY1iq76C72JcQo6SpGX7y7",
  "key40": "5Q7M8PF8jyYMGWjZqG4rGZrKiyKxYTst1NMXADwfLzvaWLYVB5FBjiVt2to3TSeY2RggQX8gFXngdoZ88gTHJ6NA",
  "key41": "4HkqBpQrRTqSuwbiMsRSU9vAZSAuLKFjL2rPLvXD1BAoa8RbnEWgDXGKZ3EJKmmS1c2Atv1PjRUj8m8oY7Sn36er",
  "key42": "fSRjAdLw2pig6fZyoCvaYpxBvNBBDzXemBtdW4bGfj5jsRwCdUPJWEMebSYkP4vbCsxMPzC23FRmUki4r4Crjjc",
  "key43": "2YHZp7xt8LdU5kzUCQiCuRGcXaczaAm4VdHV4tzq7ha719KfV3qmyEdY2jM9ud8Pv1jsNusN7DYoPkWsvoNb8noA",
  "key44": "4wm6MVic9wuakWyUZwxLCgpCoUYxvgGmh4u4r6tXkjCy1Za8zrLHsejc9ra9AjjFjKqXRTrYPba9fxCCC7puA67",
  "key45": "5SHWdWoeSdc9D6qVhmpKG4KJLXgW9zVkoB3hG9cxtmjojRi1kTSi4FbZg2Eyqh9sYf5eeznmktPvaLj4itsMDcTG",
  "key46": "xFeTSw4yBYYp5kCuqcquLDbN5J9odiTtQL6cKD7j2YQHBWnqQs7MHykKSTmMRJT9qM8CCixPZzyK5xmTD8Fb8va",
  "key47": "3Cq318jjUUNWub7AdJEJGWskr1cLBcSN6x6gMGUpR7jdc34xjBSrYxuz4MBkYHegLkQvDVSzLfZaQ5szJzYDL4zY",
  "key48": "32PPYxDE9ZeFm2jjn8Fh5FKFFJjaNWiQA8p6pR9LtMknXFGsTx8sE44uxwZiLbMc8pAT4fXZnez1xBN1Nru6MpwG",
  "key49": "62a1soAYKG3fwgtbXw8K73qDhJC1MRdn9wWbpqmMwEiVuU3VCQPJKt8dkHF97DFxSe3FpCNfVoE3NqTrnWzNWeYU"
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
