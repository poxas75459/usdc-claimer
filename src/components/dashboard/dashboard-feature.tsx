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
    "4oDVou3XiPLvLqfsygDYPMAR5c1wXDZE63gjAHwcuPkuRdW2PtTWdbFB13BnMdzGoiWZknCBKfkWqiZpau62pVgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kUYUh7e2apZqtQGfRt4sbt4isBV8sHT6akxFF9kC8zi1A8otcE3tHpYbypmD2nneW2Fe7dQzgmQWV28RGN1EEHh",
  "key1": "3AbgGJCfsUvNdiPYBj1mZJKFn8641Nx32bET4yj7aenepK3Assw8qhTTDWTmM2LbNUFaz2wibjVgZEDpsmwKvNY1",
  "key2": "p9zDQKAk8xh9f43fcaxtDtLLZ5WdtdK17jtzjgHdoed9JZeH5z1hkyCnQ7mdP5QM5y7HB7wGxXMGdjAmncwSrLf",
  "key3": "xa31xjuPsSyt27PozsdfoAtcAQh8QbC6xpV5WFF2reoDXZjQpy8NbEYVosAGBPLWskYhnUaAX1WYgCBWY5fQP9b",
  "key4": "3zLaHAaCjeoJuRKrmkNWvBB282irwCzz1pV5jeozeGh2LjbGC2QPrhzKRXf8FXhPx3S2aTVJBRPGstcmNhVk5vpb",
  "key5": "4TQR81ip3dbmRAEzA5nvR3FcMShSDTnsE9r9Rd8Tj5HmQ9UdaaTcrVD1RAcUx1CV2zvYyZ88xRSUccz6X1nqgGP5",
  "key6": "4bRpUkzp2NNkLhwFcNU969PCpE68rEWhPqMa4AUzkpPYajFW6nwjqSuWR5KPjuT31iLf4LAeBZ3JS9WXusHhBdcp",
  "key7": "1CrrTNCJvwFBzvKxnVqk8vVuMc9cjXGyTCdoHTbAV5Hd8n6oAXzUTNJaMjwTQ7GyBHtmJVEVQNuYHprdxgtdfkJ",
  "key8": "v7WQgu9mVmi1wYR1r8rRkADttdY2Nq1mN7KJ3grSckESWR2MhA3Rmsz93d39BZYaDkYuv5L4UMqruq6cCKL8r6X",
  "key9": "89EDT8HjKuH9poqZpoGDmPsKCjdFdULYJj5VuL1j2bBkjgJubL36g7iqHe7sWVTPnDkVj7zCaWDLCr83W61hACN",
  "key10": "5bqYURAGt3wk16h3YN6gaKcQSR7DhFEoAsvGH8YnKUKc1RFBJ3KUqYGCK2Ek9u7sYdh8mxb7VQfPzJvPaDpCck2f",
  "key11": "5km6taT4z72jrAhyN7Mb6mekYEZN2tGp8ysXGQ7zEyuMu629twGa1ig3dpKExu3aMEAwan3VgdT1dAFTUK9d8U2j",
  "key12": "2dfobdLBdTa25ymgMDHpuUqbK2nwjdpLUJkmMd2dFPpzJe95W7MDWgLqHeg7w4frbkedj9pGbi3S4CZNvFxgnHhk",
  "key13": "xzvKp7y9su3dHhwPKGeEm2dSmPrm2HAcgNjm4pBcmgojzBa19REo5cBhBKwcGKW4phdPjHs41zNKvpraZMaDxJA",
  "key14": "KCe525kpWHYdyXrapHsEtEraAp8bCzXz8ZQWaKWmEHM4FHbL1EN22XCGwcdDGdUHcWncbe6pJB7Zni6f3748wLi",
  "key15": "5miYpAX3Jf33iJf4iMKfxxPVEHnfS44WbbB67eteeDzByDN2QRcdEm76gAkZCq1ErBSPLb6QVcJTqjtpsX4zfvPh",
  "key16": "5LPbbyVLsd2kUm8mnMkg6G3eS4yyRe227SwRfx3q59yoSUPDR5kFLv1HRu6WFvKWZe7bUL8S9JcaEoGg9JsiLKWL",
  "key17": "2tVmd4kAQmk77WHEFPYt3zcHS4d3vExR4zvTkEutnzKN2nLE2dUwg7LKWnGAE4TKh2TsQbjcp8Qog2yPDEuCtfZ",
  "key18": "2tHyjahsQQhGkWUSGrabzrBmzHczdy1AxnBJY1pAc8ec8YXJhU8gLx1Gap1ScBmVK3MMvxX3kvGsvxGXxEs3WtsX",
  "key19": "5vMCEbMtaq5c5rcSty7A7H573RgbnLep4L2oANWxPAgtE7PJ2J1bYoPszP2tp8GHTDJMooUA7iQk69huS2f6Agfi",
  "key20": "2k6vK55MkVC8wEHYMbkeQ2h7diVpdjZ3u2hRGVpgu8gS387jjZr3HGaDhNQcx36ZADSLwxHSMWrFJXpUquT9hTU8",
  "key21": "xM3cV2C3X7N9awRhXnyv4dwwUeevSVfqeWzRFz31nRMdeKhscuVUw4dkyEiDF2djV3Yo3F3e6A29cr7jHqDTERA",
  "key22": "2doRPRvpK11raA3vBHyevzNeED6StP5Sa4QReAsS83p6DkAAGJYqNsRWXstiFLdinxYGRMV7VZoMzLFSqqu15p5C",
  "key23": "dXqdPUgQyuacovpbi7JTpgqsTN7oczmSgmWFgtv9UJVfSYWZrR5x8rfZhdHbeU46fFhqXAxS2nBwE3HpJR8Lgur",
  "key24": "45nBogKiYccjNUwuSdAcVuR7NHF21qo3cev4zwdQENfNoMfJjtnU2mVpHeUaySuGeR1NDbxeyQX6SRtj9n1wBs1u",
  "key25": "124jo6K9pEmrpF13G4wngcyC8MDh3Jf9tjNB9gSyigHwUs3YHzRwAtU99Y1D3wqFWJW5nMhGSXFzFDf6TKKhVNVw",
  "key26": "5syKfmC3vWTcpDfULNoxAwyrSWz6Yx6o75mmFUwiBY4jVfkbTd8Qbeu3eseSQpwGs4eFywmCqxb5mqkbrdWe7KYe",
  "key27": "QEb5pu16zoWhwdtKyK4FUAYQiSouRHxb6UREB5hJnzAdbdSfZ93tDPvidKBreArDep89fo7ZX8Z35MR7Qwt7doX",
  "key28": "9aoGTKwyrRK83qhT4QxM7v1btzp6be6wmTeJYFQBxrxD7UU7fTBt6rRQhdimFMzARtALbdR1rhwttMcLq4eVM9h",
  "key29": "3jZpP49VZeHsjcuuAqGBypXX4yyRi32WZwatjqjfGXFXb6eBJn4haF2z9bPVZGjdsCB1NBebwHg4AsqdwVHVqfhk",
  "key30": "3TLYFoPfK3VDD5wFmystF4LMokCErVrN1NwZ5iPXodsZGDSfsaBRGNjn2Q6phf5ekpX7oYFYKxM5j12pojiBDDnv",
  "key31": "3izXJUTvRxd9sJ2kSwEseMx7F2iWaBhAD5roFZBQsUrsAjM7B9mgXA6BR2nEQ3baEoEwXZXDwrDqYTUqDJPtUzE5",
  "key32": "5aE5bXnR8w13ViHMikeBYYP6pLvxBkxDVw3HQmwbhGk91wRodpKeVf6nKEBYzP8vuPbJ828VGXMkEb2YvqhUgv5F",
  "key33": "5BoqsATsYFJFeVzkupBZWdeQ7srboaWiyNiTEdNpviBfiYjsLNT25RYQCzYGrQdRYnHjGWzryG6rxf8m9wXP78JL",
  "key34": "5hEBFh8SGDZ2KxYYT4qdDkPiiFfNqm5mhrdY3f245DDcjgZGwXTHmJVtAhceX9PxdtSQsCSXC1rjWQUA2tYEUAFn",
  "key35": "1roXVgu6WSerebgWuNC9zyChNoKQWG96xepCbDcLznoMSvUsqhXK8pEvK27NBUgvnwpqmwfho9TVp4XbjbTAp8a",
  "key36": "5aczxzrW4S5Qg67j1HJdsoqzqTrEVXD89Yob8zCRP6MhyzVGuECACiXcPSstypVedUBw6a96RQRiL4CFoumZRy4K",
  "key37": "5i15n5VZQUczhy65Bk154et2KiwB83vYqXgarTAtwypFeUr8TwcZex9W4Hv95pHpNeYpHrfs4BhiC8LPGcmhquhU",
  "key38": "5bHyVxDgk77FjLuiDcmU82MvebFVh8JH59NMnVg1kg3gebHqsjn7pqZb5FJXymnFKB95qTpnbM3X6BxcnKjzcZ6W",
  "key39": "HqiDSf4puVPodRij15f6626L5eGLzfF8AJMAR1qczaGb2n9zwt4VbUGFBuHoGCoxhXhjdqaydTtf2Ce6SaedR6u",
  "key40": "4zwo72TnyLZkg62vHkrxqLBktZ3nsFQxrtiEm5uQTP3hS5DiLdaWrkFqX14SWVimi11JxJTtnydVAa8xzBG69Mdb"
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
