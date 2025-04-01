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
    "5NVmmSemR4xg7SQM1hmF3UCxCe77dAoSZ7Dgg8fqTo1gyr3kYnNAGtEijZRpyLJBH6jE7MNJ9KiHSGsUqfwsD8w8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42X6rQunKfzU26ER1BSRbToAhESfohLBWBpZZcn8SYBnUTVcJ7HGem6JA8USzdGXBSp7djDrYpjC2SFGjAtM6gCz",
  "key1": "4L1X3768WhDtUrqREaYt84ZNrp1zjCrZ4Qwj9vcgr7gTtXzkkgcttdFrYsEqceQyiDohQTprYXoTjtCwydGDcnqL",
  "key2": "2indRRfFUvBgPqPJjJc775NaWN5zbP2XfxTa1YC2gMqcci6zHeZksz7iUWUzxLYxXrhWyYguXXinYmr7q75xYeEy",
  "key3": "CTtdsquTMfV4MxZge32ivxA3ozQfpE33FV9DhxTJ11eiYnfhS9GisYSrzSKeCELauesXnvAy9Ay2TJ3qctvA7CZ",
  "key4": "2cLv7GP9crSY4F8r4P2g56MBucGcGugUGwNw2Q1qXWbyfHntxXUSDjUehr2DNnnVeNKehtWNxN8hGM6roeqcMygf",
  "key5": "faKqz3wpeFBMTWFauf4WxQmiUfJqEZHsCWPwimHWGMGdqYAjwPLNLqVcWfPP2jyRMo4Meup8ZupZVaaKywrgZEr",
  "key6": "4fwMCnEVHZJihoAcxAFd26xbPepZJPCmSsczQpC3ru52HLGNb6DhV9kRhAKmhKzMCM4APB6mnjnqR2ri7FJcVcWS",
  "key7": "2UfbbsZLhskys9zsTSxHZaLydUPgenzTYw3RLJo121ytVFDJfCF9MgyDaLGhhJZobWdeiKfGJVyKEPnvhMh3MUie",
  "key8": "3jcKuVWsPds7tB3iYNiDRs9Wew63rrTw7pWo3WEoRwgPDJXrAZ2GkTD4BTwpFeNJnHueyTqUdbSyedEMBcazoDWo",
  "key9": "3M8mwcCrsrwDA9WRB6Fw5CTvCquMoa67JPRN3Rys8cMnkPHHgP9XdYuyKiUJTotJhzCc3uVi1kLDMQgXWj8L7T6n",
  "key10": "3XWS4fzcEYQZtpx5WvWAkfzEgci78dQ9Ksw6VKA5348tkVfZaotE77GNC1n6JSUmTv3EWPEroxMK7L3F1xmsCien",
  "key11": "2objPVfEz3R8h6wSVgYXu6BVDLxQs3L2jJfdP5vbxrHXwPq6aGw6eBHn7iykv1Fm49HKTVdXQ3W7aAzFgoUnjmp1",
  "key12": "ST9xPMGekPr21DoNmSonLGKR87MevRsUTJfDvXRRrhe9EBVxWWgtefS5UbieVRrb2ddSMxC6cB526vHgfCni9SA",
  "key13": "58anUKYMHJGyrZ5HGBk3jQceYM7qnksxe1gtM4dNCmo2UbASHJzkKAxm2bmDB7iYVvuF28nAQk6gXoVCG1Yxpkie",
  "key14": "5EKTjXbBkvNqw2YYdz8jZDcHMWmHLVDknwrLkX4iEoQ1RDdRt5Wn62RA11mfyJDwPikE1Zn3g8tFxqpv3HvjG5bL",
  "key15": "4KdmK9zWKMwuiq1pRdSM8rEuAjP3Xmry6umEhvU76evVsQhkZ4JY16SvxFJMHJKS24A4E2dG2WMbfbxw7oDSFecp",
  "key16": "2mx3ZGGcNmSVQmgYjuYSRtNBKYR24nWwyKsEptQfQjowTM9ZvhwjjsjdrAnx1WuUHNT4fZjJdCrej5REg5vDw2S7",
  "key17": "36GHwFwV1Dmp6t4vwHKwMCb6BNFnZoMFDbJwBXLJZfYDEUhwmiz3HerPwaUtGvsooXTWhHLjBfe1ixkRyN8i8cEt",
  "key18": "2St7NvJd5KMuRfjXCyzgQYnhN4mVqCpXYvDpTT3FjnwPVWmyh3UstUn6yGNtW2EmeYtJG5eTqkGDgBeo7KjsTms6",
  "key19": "4RvuqiJReSZoLq62VJdJ7GRSVg4s4811D7ahKAHHCaR57KKDVG7Mrax3bpJ7XUsmecj5tHjMeynst8WSacqJhEGu",
  "key20": "Em61MRpsYxRZZqfLnWvgfYG5cwJVMrEGwk24cxewA4UeqKG3H2iuftHZR6srA5YooGWwDi5m5Wya33qLjb6HTQD",
  "key21": "4d32pEQHsmuDvWTa75o5FyDSgpe7aPNvpQBaEED9mkL8b8VmtMou5wUQ8rfr9wYkqk6NtKh9rEk9WwcYz7s9mUeY",
  "key22": "28ui9CkgFdm7KU61uhYjM1jYn7wLs4oj5hS6Lks25z8TE5ALjJ5EtGKUJgKxTdMVmbLkqoZtaHFTSZQCsw9WPYkn",
  "key23": "3dUdtSsxjEsjo6fzqQKQpYnbkPLhdivJD24LpZz9xXDQjWCF5E7Q9Z9o2pxYxRnFhyG849yDChP4Xmr3JMA3dfTB",
  "key24": "5V6TgcLuCfyAumtCogPbDSvoU343Ubboy2fDfVg5gVr1Yr14eQPXBmkANm2LQLFvbpBczqbS3CeonUji3e4nBMLj",
  "key25": "4GJxj9gkth46ng3zwpr2yeAythtMpkc4bg1VvChoRmXVkgXKaupoPZAKdjBFk7WSV9hKy6QXJ93nxuxszetaE1Be",
  "key26": "3oSZseVD1p7Jbu2GsWZEmtxL76gUcrb2uJE9Dm4cyxuDBCTcJMEiF1K66XYqHRfLCP15yasnAXey236s3RvULTmX",
  "key27": "2ac2REXWYYpAqRzw7g7euLRyn4g6K5Fx5Q8JCspsBPQCLZV2goBi59MnUSc4Wf4fZfkHE8wAU4ATFZR3NutR8XW5",
  "key28": "1uHTKVNPp9PB1eJWJajo5tHMgHJw3hUQb5AAbonnKdPyx28w5m6TpXFXEtgqT9QYcZegiuakDJemLj2Xo5A1UJQ",
  "key29": "39Fe3XWU3GEbn9aAnAxs3bzSjnbtQ3dsW7R7QNT7xTZELK3FGuba4ktt21dr6sU1tBB2RG8mW5VYC7Rixzh8EiEq",
  "key30": "DuyyQdiMrGQFZLcBQVe65WUHVFm6jx3YvPprag8h6sYeK2V4kcZbd2Zy1JEaGG3iV17PPUv1yFGk1HuBdvkybLs",
  "key31": "3kZspDdQ88y2KZmPQx3HBkuJBj3XCm7DXiGwCysndh3jcRyPNUFSjxXgy2r2LvPhpTpDar9qKsUTBGB8mAQUQRrn",
  "key32": "4L9Ghzzg3xPb81oi8kWPnUstDvvwuq2gDoVfjYWrtgtcxuSQVGrzSqkCCnD8PH5MZWNEyU3ceJvrPnDNhvaNXNdQ",
  "key33": "3cNPgksmSMM16UUiUh5HvoSeJiGYse2ki89MvCjsV98gyM2opWtUfpAUvTYxtBvSb8hL7GkRoYfgSAt6RkkzyTFq",
  "key34": "4iGj1WjNKWsDMtXtiyQvWqADR1jLhwSKEHam591fPzeNzawvA87537y8FajCk585AVTj6gzs7cTumsqQzr7idoHi",
  "key35": "31eZXJFQu1Rh1dS5yWP8t28HgYACghB4yKv3m1wtkhEwjULt2CYRrF74Wn5tHr9z5nrqNUwA9obBRsQQ4tqNQycA",
  "key36": "5ePue1boBoCXgHWSjQ3wbRH2shoEgVrDYFxXppzMkRTJrePhZMvdd7edKgs8ihv7DyEJEnoUEELd7Zc6Niasy5Zo",
  "key37": "5FXQpMy7t9VibxSV2xJkYqKbdh683Ggcu18XrVCDgNvZQHaZFBHndW8RYxMgBWcEKBviGuSkfuitsmRd9Enq4E6k",
  "key38": "4xRXwGFKU1pFtuMrvf13m17iGGdi8dCqKrJ7rCPVazi3wBL3RoigeQVfHgW7a97XBzZz54DLFhnG1bNEjZXTyfvX",
  "key39": "5RtV9YpeiYNbF9o4nVvzJWXQyy2PYr9FxXriPmtPqgsjLRW9Hs3Pfv66zAQve1SW6vUE7KZvCTxCoqrhRNCCggqA",
  "key40": "1aCa7rX9zk34HgQV4ywbK55BSfgfwaJX8FADHftQwiekJzp2h3dC9Ys2r6YDTvLP7njr9rBz9safLfWvjZaYj9x",
  "key41": "65RJG59KLDPdDZtXxfcc7HPfUFb9oqEYqaQBUR4zFksMFZQ3gjnRiDBJV8hWSEhY7smQLqgkocY4zZyA9G8TCqWm"
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
