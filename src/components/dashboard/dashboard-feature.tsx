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
    "oVq8NiMbaVCrA6Uc9og1kXPNsRyU2D8n3FKudp7WJ1syvsPZdRvvRbkDdqf1bbFB8b7sTbJLvvjyx3VYiMjxwUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h1gPyqmMMzxGhaEdiubxKyNU8YY3TR8HAXRsu2uzXYaKUBm1ukibGu7HM1C6MCXvdxAAMSqsFvH9hMzR9Cpv8ep",
  "key1": "tVdnfcTECQk9buDLePapZk2pJkx8x2sgHnPN3zsCDJQGr7BCcZnZhEsbJrpsXNVkPKsCqUUJUCQV5fukAyJYbGe",
  "key2": "25YbHYM6L5p4hqk99gEmmgNjn7kxxkMJKxNr46EeimzJ3RzkAcaQoHXrQbk2uKwNLNSwkTy2ix2rzyatg78kQjk4",
  "key3": "mdA341jeDKYpEB77LBL1GGZFJeGkFxHrAVrC45xqYuBWAKNgqwJ5ScPreH8ecNt2to6j7Qz7gkwNmdRxDVMMpvu",
  "key4": "2uRCRSDdkFgrQDkekCr2qwAi64M5JgzArcGoPUk7wM9MWmBLQj5ZGyetxQ6tpfq6z2WeEdDzq12rKR2XfUwjKFuk",
  "key5": "5Y2dCKqPPparWr1gMtdwtdCR2S7zDhNX3yeSLLoE73Kc498ztrU4LDqwsc1nzxwR1x5xeAgZ5myvKg1CQRum9twV",
  "key6": "4TYTbh9MjbzzJfeoiukD38mV4dTMk9rtgByjmDCz381DkBr3wEeHn4k9Wh4d84xaewhJWTjGpsfgzat3B7UiAgKX",
  "key7": "5N8efpAVqFj2cETdKmtzsbLErfQk1cYEiYoqCRbbrKiiHdbvaHPn7vX5KHE3HLPkDmsD6FURJCGBHLmfbKzgLZJ",
  "key8": "CyZgNm8219KQf4EKMzhDJB7ypVkziL6braeG3v5GEVEPuH53tbpDdPeeuNCCdDo6U8qzc7S6qbr98Q4mG3kj6p2",
  "key9": "64bTNqkjpzxkd1Bzm7qi8m3dx4xVvjcZUHNw6BQ2aXhbH7ZtGrQ77KAHwoNd5LeqU2phamAVr2z29UxRMYbUAmgT",
  "key10": "2MzHbRXcF1odRBRVhxvrnMyhdivBrezG9P8Pfun369icDdDE9zGoz28x4TUkBfLZhfm9rKZSK5knyBpDgiRNJbWx",
  "key11": "4NshraYC3ziSXrpPdfKX1srcK4P8iF1B6pCKepc3snpv3uUrs2LT4qPJzudTdvdn4WFsi5n7eaRqw6LmxfvHtBjo",
  "key12": "21yGfM8ZPiChXqNfcXEwWTKWzVnfpENXncXVQVfeB4yGSfgYdFdJQKMuqc9QYXGmA1gAju78u5Bckp5dQ8DkmBax",
  "key13": "5oPQtT45aScoGuwodwZVc4fZT1ueRx5ahFaRjxhPCpqRDYaer2ZEo2XrCk1xPH6SR2uYhmNPWNnG7oV4gNvNvWqF",
  "key14": "gHDsJjVK6kktuJk4DZuuzKSbn1zBdxb4CR4KaxrrkvkFobWVG3pB7yhEfk5Sr87oiTwdTsfHqmzqikPcMnZ5BLN",
  "key15": "5rJGKbkiFaqwYv9jo5hBbAh3B3n95TwctRfXDEsHpGWH9sHRbPBM2maJU7AbmqLp6UfMqvaf993niBfjS6uhjbMd",
  "key16": "22V1RiW1tSkqSRM9bRXL1mJxFgeMrb1j53E5DWAz2jL987SvnR1ZdpVry28AbCQ1XNhfKhu2UciuDVgV26kdTbu8",
  "key17": "4W3nT6ApGnEDPPCieKtWRgxaHEhkvxD8EGeKCwLMoeoJkfnzCRD5UycHTfSZatduxtLwd1wMmM8QN65A3xe8zwcX",
  "key18": "5r6YmKzMHfnecYeRPruKPTkAZrSbc8BBupRsJLSX6ykCjsmSKapEhbdfJB2sgWGuYA3ubChySzQzFdyAMGuyJgix",
  "key19": "5MYAro7u12zVDp7VVTfmKe3PVykBj6PKqWUjzr9Y4tAVjGggeaiXnmaEKzeLmJJcEC8b18E5K1JwVwwkn1mcum8",
  "key20": "62mv4ttGYXvHosnLTnw7dk6xxxfJuBHh1jKPbvcEJ2AGmdKPjpQsoRMPEdc6rSY1kKACmW8nY32McD8Vac1UbxCf",
  "key21": "5UBCpKvqojoZgKhiZSMmRx1BRRiGVEd98De4K4s5ctDTt5Wp65hRMgiv5iFhKEuBJt4YwmaDq79JR1DRxSwwk4pr",
  "key22": "2Q4qcnQdHkVxK7a4Ftw6BN4xDNWnW9kGBEpLkYCrTPK5wGH4pb5MUGWJRaqwvft97vMgpA2jgVxETxQu8kxnncj",
  "key23": "2JbkLPJNjD6X2aYgAFjbpFjANwTbUSmyQy3hDu62cqaYzGnMwn3tzNnaVxP7rne2KKz54CNqmhWf31V3FtJbo7fv",
  "key24": "3EfU22RsUsh3uYn2EDcUM99ReJu1TXJZycMn3PfHyWh8mmbGE9NxdXJ14hBpyjmjXR92FmBmRqcNCSPn7qWzFB9b",
  "key25": "2W6ea3wpxVLjZBUjVqWhcspE2mu6UkR7han9Sg8gscmjj7PdUbzvkaFyErR51Cz5jwFnPWUkZx7cTbebCwnvfzV7",
  "key26": "2LJMtKy1ANSYdysq72LHLtkdFytnMGZU29cS7jtDPBpfxP5pEi9PJbPTMsrz7whQ8D3FU9vhMespdnaPEBVeRK2X",
  "key27": "3XL7cd3ncDbn5aUfnrhMHyMnkvKYLS9uaePEY5eFkspfXn9r8uL4dWAfPZ5YznHSXKoYpAEyaNYQbP4vFKGDwKpn",
  "key28": "2NrrovPYr6eeZaPbT6BfzJqPWgP5E1jX7cAfuF4x2UEDUa8fTyYiPFSpsBXAbR7R3QBYwpaueTXLE8dcdwj4Eso9",
  "key29": "2PnQ3Pjs9ctLGLWkacCsurDEmLmoBN4Ew724Wo7HS1qot36W3xazcALi1sDERurppH8uhj4SswJTq7ELP2G4LyAF",
  "key30": "Pjw8QURvfVwKCByJj4zBRLPpabcZEVUHg8YjKay5ct6UrA8dVxZiCguzMKGgfxfEU1yfMysj66CwtWe1VaWtACK",
  "key31": "3PXZYZKuSEwzFzQpF98cEU2PzY25cgKCi1wtoG37ggcPg7DHg6H2e97DhX7nM8oWQp557fsXhAX4wb2Q84nqDawP",
  "key32": "36QNcKQXpeJ7KKERcuCLo6rFdBwLuvt67sHTAXEthZQ7Xs9VsAzM5ynHY3dARDRJ676DFmnf6CoihFKoeUyDKY7z",
  "key33": "2Z6wzPEi97v2dyAKznghgLBu16yLcBE8jPNg1NKGPhNKWffQykJuya3CWUWaPLNQBKU6qNDeKNeqH77jPPJZdKEw",
  "key34": "4qbUAyK6SUgijJzKRfLiAi7rCjnWf2vy9BtcMBzYAM5CtdwRggwoN3ihrJD7thrLQ313nu4MJc6urcDfWRpRSe4R",
  "key35": "33nrdVGaRv4YnJ43VW52asLydoATNT7VWknryexMvopfHFGv6mdHPe5HJBe5f7SFwWx7ZcjZUHfiDKY3cvNUEKA4",
  "key36": "4MFp4UAKqmMACUPSjQ5ChcJobUz9aTVYeQTWekiRe6dGRQXMPewPz72eaoYmR9Hzd3QHgBT4T37xUjEN7HPPLrYF",
  "key37": "2XPE926DJ1ikBsDFJYGFwSrfhHcztT5WgemGPvKXAqR69TV3XFehVPVM9qYqTg7u3P3cts2qUvrtvEKEJSgwNXj1",
  "key38": "4S9DEK5FzTejDu3cSDycbntYkpnhpWYiDxLm8wmj1Gs6GKfKQQCD2noReTguFtpxuuk5pXLEbTcbqjA1kfZ3brxZ",
  "key39": "2mNJufhCbkZWwc2JoY7QSMnUDmTMY5e5PUKL83BquzV6QNZzs2dsAHDR8T9H4o4FeRJvmQxG2HLfdqVS1wtZfbwN",
  "key40": "2JHzjoH5H9op9tcsYpNiMp4woNFx9cR2TTQDeHmZsM8MrYEbKRcNRjXNodJe4Lrf8R2W9tSo48cTphEE42iuvujk",
  "key41": "2nJCZm9BGvNeYsfny5D3aa1S9svYukhKh1fbDV4KqWj6EJnNZHa5tRsZTxo1GrasXAUkZiefoKrUQJ7wAin4o2ue",
  "key42": "3AjyJLg4smGwWhnHxUPWnWTJNvkAbbK6a1uFvC4utf734z7ZLStEQzop2NP1qYJapHJVfH9dhnDAb2s6Lsi7Qgkp",
  "key43": "57WSGUnprwGXjKffisn46UXB7zjU9nNxYmUtcymGmKXtvpuXqtRNHxiZuTEKeA6jQmtaSwVDZ4Sj3WonHdR5BaBh",
  "key44": "wTBG6V9ibqNsGUCKpUvcmNwwgJTm22utav4kgNPTDHhJCGqWpDFd9awHewrnv73KoYkqxFZNuVEQQQTqaaSVR5k",
  "key45": "2dLgK96r7ARs6uhH5gvhroj8yKUusTmEAWPwRFgGqamb74PXW7v5ymUG3onGt2NJckdvXiMo9hG6NjvYPM68FXnq",
  "key46": "2yxD1QVrLgUxaoiQnMbtAYfXzkKwjnAver1o2dD3nNq846iKDd1qguzYfjZuvuEiMAf7waApkrm4wiQG96gW3tHH"
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
