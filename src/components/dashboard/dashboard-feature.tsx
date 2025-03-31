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
    "5mXynvD8AGudsbjZX9ciJV95HRNQ8gAAiVLvDRKRtpLA3UfCa9Wwiq8jWuAUs2TAdhgf8r41jVYtc1pAh7Qz5qKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2viTFNgDqGAHJknsWu1uJK9pse4E36zwfgHtcLZjemNZE56Mqr2cm5go1JLGgRiqj9B62iHHTG5HLR2xGAJuALJY",
  "key1": "5LsdwipNfpB937JsTB3xuHNQqLXsKKMx112uPsxACwFk8fMFbToJ2Xtju2tHALmSg16HwMmsxBsfBqG3vHpLPKFA",
  "key2": "5ZUrPJDuboRLQKQMWiUYHLkQhUEGpUK2LJci9u641Qwgh27gtCF7cG6fPvvvVAHLg32LAveVga54Sg98KM9pL4jb",
  "key3": "54ZRc9XquYd7wS6a8iehpfNUmSng81PJN4PTHL4niPMEJy2ycLjrQgBdyBRhQ2Y4v3u2ZLztQdDfQgdZQPEmjEQF",
  "key4": "SvCVJ6pubJtVTFWNRX4ca5JNEq9Xe3szZGHiVrnWroKWGk8STw7cBcfwBnsQqbR9c9qZmfrdndbPRNkahQDfLvS",
  "key5": "4SEbt2nHTtrXu2YKc52MSRZgq2mS6r4rJU8dN9S1q99aDz929Zm41mPgtqHt9BS8EnxUKiyBeo6umDu5NQhtnM7g",
  "key6": "5J57dkKJ8GYx7XdfJZXziYiERtCfw13LpH5htZu8rzuPC8SmEuujtFPJuWA3GNUw1jjgiLkwnJbGAhLekArGXEQT",
  "key7": "3JHKfyfrKmqnLeWSky47UnnBeBWgg2yDLWyaRS1KusviyGpxMz1GoGHRiBRmDxDwGcFcTtjg19FxeHmGY6mDZgND",
  "key8": "5G7S6hNBFTe7ycYFkaFnWsaeJU8bggNXhYw3a7fXZ9CApCeJ5FNN2AoyJw1fsh3bdGFjz3RLcVzk5WQoAYp7pAVW",
  "key9": "4C1MqZn6wAtX7qPBJ2CQtojmtYqd1SkyfHpsYYidQDnbqmfdVqHrARYxLNaMELLocatxBMqJDMfoK2wqDmPFzYkY",
  "key10": "FgmXi2tWZ6KmBxbywx3nZPiSXj1ir1MbSmUbuAakGW2dRdv82MDLXMtQqHCMsi55hd6P1kA6ySQK1LS51pAd5hM",
  "key11": "4W6p6X1jz1bEGiYx6csFQJrP8wDJrH9inaDogziqWLwzJZWwTEjxwwiSqZwWPTegveFL2AyxDCGVcfj1ctMgMTPT",
  "key12": "FXroSeFMCL8zgrEhhaome5NBdWaFd8K12CroSu1wA4EabR2zagzPPprfCYVn33y4Y8zZobNxKdCQ7vkoUkHWzhM",
  "key13": "22GravvFb9sUSRSJJi39pYxo9vc8i4jC8poXMBHsDCFMDF5KdV8d92QQ4YNK7D1bUDcNLoURTYEWDCeSBys5TtpD",
  "key14": "iAosC3fWS2dXxXTMDQbKD3wK2ip2dnnQSw2bDxZBUEAG94QnWd4MuFmpAvWKYtJw8YWwymdsEWT7qGqLUEjuWah",
  "key15": "28TMk4g46NmUEyGY18cn7MJCxPTYjcjhXA2eYPSyoozFVBoA1aSq1fuTcUcsm5dtk8NtkE9B2QBcMvVNtpVYGFr4",
  "key16": "5UHJYzurmQ5gpq2ksbUzgBB79w2ug8UX4w6yqQSffknY2pVKYL1Xj4UuLZhspzi3UbBzamDT4Ds7CJNQAWkaYADN",
  "key17": "Wma5TnFKdzQA3mLpuVQ3p7rb9FNX2gEhycct97Su6kgpfFsaHpxmxQ6jtJu93Pya8cCrMNeqDDoHwTkrs7P9A8i",
  "key18": "5xq6zA3phRdBk3YggG7wp73Hz2zvXuni437kqNjT7tBjfNheXAuDcp4oG3DQwjZCqPHjWFyFxGGCixhcTAsHueAT",
  "key19": "4fMhdw8pa7Dtw1dRHqWrePaHGxzjuNkKcvoqqZ92of8MdLHvBi7WRwT4YZCUjiFrNj7wU5s8EUBFTJir9VVRsGHk",
  "key20": "5zt7Cn4gv7eCjy6p5kLdFXxYKVHV7zPStFY8XNiCPzxeDoBvcduEWHAxH6Gv7UaGvm9ryrZ95rogdMjGbd5LdPv9",
  "key21": "whqYtBNtZfdH6vHm2usTh5Xxx1uyiBMkonotU9nBLznpsxgraCYSB9Wb8B7gwL5GxDXpuDPDWUKonjer2ay4uYQ",
  "key22": "23SCGWaD6HbRry8CSrk3HTwpH9gFHNQRBj6RDX99atzwWUHAbz3932vJTe1u3npCPnQHAgDurHnY7nGggjx3cyAt",
  "key23": "etnKed781zhDSeU4yJoM9YVdr9TsgPyBmpFZ1Y2KyXQYtLqbhyrioUNGJcPBjwGcwYzLz2LxiWzvvEh6vwkbE53",
  "key24": "3bQ9j7FrDu3zLHR6KCV2SD2EDYD3euz4LhZYMhC7oE89MRvPWDrg9WKbAJ6tKsDR6kdJRB7AwuqULsncM1km6hJi",
  "key25": "5QD7t1VSS2LzWwE4binz5D4nrnfZ4gpajEg1UMg1kHgLjP6eBhCWZE9QzmhP4FcJ5aY6Xp68fQUSfKrwngFJLgWa",
  "key26": "2hEH7Rkt4PZD76QmAuCMCfkan7Bu1EPDAhQaVTXKrSnv47qtDzqH9mfKpFngi2dr4swJcX9ugx5chA2k2yWXpAvJ",
  "key27": "3LiJnsMazDewBRp5Ef7sK9jZcbCquUWW3wM928cTaZK8WMKdSdQgjr4MhvKr36hFFKWGVkYRvSQDRhUBifHuji9U",
  "key28": "2NwRwtSM89qyDr8h75qPrbVwU2J5LHvHKrhCrxPTPcBzeGCSv3kCGnRRAGVdKv76CToVqSSUU8ajoLymfsE8s9fj",
  "key29": "37asCPdw1T3GdwnbteA3kXESRedsaigNLZFemVZnEa5qVsumnYextuck9NZDU6PndppbbDzzVWaREsLv4XNQ49BK",
  "key30": "65J3znnizzrh8unt2Rfo52WBpFGZJ9NhwrixGoak6kt13Qu8A1sHGqg9fyGJ2umKfvKnsnDDE5fjhds27syHRfRz",
  "key31": "53ee8nS3UYY1DsVvhHh7p86R4uNTAtQvTPNnBE1nAP65jMRjncKcV9v1vztbERJq3FyBk39CJnNq4gWyiMHpR2Fc",
  "key32": "5b54FW2aF7gog1KdUhR3oC2kLyki56A9qo99CJm4CzTya3D7FjeQcP1ndbSimm7bGhMz8dw5BzSpW9NBTkXeUKs5",
  "key33": "4z1BNMEJ36NQThZewhKfnj7az3rGRA88xSoD1rPw6ekeyVqzkCjm3iG3C7hbhykr5ReBRNnmyzqFZJF3r2NRuWsr",
  "key34": "4ENmqHgtkQU6VRAHyxwsWHsZuU151oqwDxLEmPxaCVfKgMmwz5NKPdgCR9k9CqP7r1noLsiDom6aM3LmvucqYPth",
  "key35": "2yUGQeZhCtHn5pSZ3eo7scmnWXDMjrKFT7t3Tj8HfB9TGxTz9A2m2RDFbrB7w29jGJjTPJ1MWedJTtFDoP32hGao",
  "key36": "2VbikS7YDnBL12HuoXFKsx3nycpmzByauniQoiW2whR1gqazwgbgiHzZN1B2UkXdvKtSXatwZQCfCQ1Wy276zuEk",
  "key37": "4s8TRoaa6n471TouaxJwcBUkcoJNFmw7bu4iC1G8pgHokouqwvTnsPrxw38bjQfdDsWWBnAMnYvbCdqoVyiFHQeo",
  "key38": "2w5haiJaXG35VU8JPv7LnafwH3UELsWvJAF3Qfv2147zEaEW9EqhTiECRrFzc1zHTGSf4bCLGkaHTMYbGssRXtoH",
  "key39": "5vCF3S618BduDaBQYkzvdEZGG59xPgo1B6J3XmHKKZay9ryNdaNSrcbeXB5eWXvzh7geBKrLt4jz1VKP6ac9hsrQ",
  "key40": "3p94ivU4LQLMrvenjXRSUJSCwzuzkcYQ8Sb7s68FdtmK8hmwZCcLypEgLiS4MJgURp2BWvqxKPs3pbQjdKpoGn39",
  "key41": "2nEjwCzeTfTTNjTNPPpsSLGoEUmisAJtwWoRovmVu4gtF9YhKEoLkqD2S8VdbnEFVwrBwGuFZKEuFgZZzKZTfLti",
  "key42": "3DwkyFqZLBaouHRs7ym8vPht4h4HdM1dZJUgDNRNkfEjQGy3GLJ7VDmXh9G8DvbcWw1YkXXk7MSGbwJLsdtmRtbs",
  "key43": "42SUTgutHmH5zPz89KWK7oebv9NSSBnB99bEug6Ps5Y1bWtPoWMkTgfK8KXsKqQNm5uX1qqhTmJ4oATMY7xz4Z1V",
  "key44": "3Mu7yZk2G9NEgj4AqQCvPATFyqUEAPC74JmxhyLbtC5pJwNxhZ9zenft28JW6ap1JnxvGqXYT5SVETdtGhmPmxdJ"
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
