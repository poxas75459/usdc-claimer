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
    "4kRZTZM2hTCJQvkVPhL5ASqYVT684tixrWG835urrR4awUy5hGiFbYsKRqv3hrHeEEbfDhpDnzKZcL6Z57v5nw8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gqTL49FN9jpeyCb6oKxwL1xHDxwHRXjsw3iSXuAu3k6MkpVD499fDZ4JR39Gs24xEGgKhszxPiZjoadAq844d18",
  "key1": "38rkhkAtesTuh4TjLjC6HgAZKDwMfAnPSpwPJdXx6JwbEirf1ZJ5EXgkioMXj3aVVBbHFpsowTzd9XwNTEJgyqnh",
  "key2": "5ciXBR7oJby2yTh8PQw2unxU2timSnVnG5KiDqvMpep8mFRJso9LW64w4Asu5KWJi9FuP37Sf1rm1Cr7GucYxgjM",
  "key3": "SjPZ6twf35mUSNreGhDLpH6L3wGRVWMb2bna9CCJGKxZGqxdVgn8NgNx4ELiRpG1RnifBaVSxsjDMrN27DaU3cd",
  "key4": "5vxJTN9FXBHU4Cs7wkmK6bUuMX24zGJmzghTN8jgvykBqU4b9BUzJvv9XFGVCcTshXMn5PQRoCRgbzHZyeiLgYX",
  "key5": "3rqVbdoBz5o17LeQnF3DuCXkJqG4igfUGRGnGh24sSFR9xo6BX6oRHKdWBwfcB8dDmTi2YmrriuCpCdrppSNbo7y",
  "key6": "3q7FCZzMWHzimWdYZ6sVvvuYk26jpVGiLgLhkwfPGGdwoDARdaNDDJvAzDDxqJ2a9NBY6ZvFDsSR8jYA2FYRxct8",
  "key7": "2DhwpUhbLhW3QkFRpcjLVkQqJdLtFhyoVox6rmEECtRAf5zNmW9j22ZRojE6s7hurKJd9HXndd9abuFFDNdWfQbP",
  "key8": "2pPXxEZafsZ2uEg7NrQiRcRCbBC8nbK5ug2ya5c3TKUqNbEFBNwVcKrz1nRZ2ysDdKAMW5h2qeXTysWEdGgPA1EM",
  "key9": "W5ogUxQN6aZ8RYYEh1pfR91WmPRaPh578dpyTLc1zC86HJxbomGZtrZrputXtQm5EfidFbrpJX7jkRY8fJF8v46",
  "key10": "2UuZrSZA1p6mLTQjJj3sKWhgteA3pinRDktNaQh94YHL6dSRDDsNh45SvLYShkRmVrKnwJ2DrJMpiMphS7TNb8Eh",
  "key11": "5KSZqBo2NszA1Da8VK536gGLd64TMvWmrQF6atLieEVcVNhcoxX5uh1nXdoVUbdXK27CYTuRzKBYLXhRhCiiB2FJ",
  "key12": "5xS2jjDbrQdVTKBUmJYjsyvQA3bWY5CjJkZG3gAy6cdxxASMZNypCtwydhvLQhN6EMaDE96bnLj67RVESkNqB4pK",
  "key13": "3x3cQMwr7jwBEGBAdit852yWihsNEjM5yhTXXCqfp9YmToV28fp1pBkGLmE3i1yZtQofzsygnmoBCNd6p7MDhJSR",
  "key14": "24pHfq94wZ4yFFFEnAWhJ3kviG3GfrzqPt4ySPNHx7LVAnn3juqfGRFMy4cnZ2mkLvz85dJ7dsTDjoUSr8ZvkvqJ",
  "key15": "8Ng1Nwc99vzVvK3oKYT9487eWP4fbyBzgmgsdTrnEKbmXurdBNNrWtC1yk7xZ3BR9v613n5GApJqYTY76PwQusw",
  "key16": "5sJRfyTPsNBCUhdBkX6PVrp1QifsSLrArnLSZbxf46iRA5nHchZRLD9DZPXeDtpxDyQ2MGBtQvrDN2N987yPUGnY",
  "key17": "4RF3dd1RttDhnuYKRyW93LxLGimuPH1mUm1EVeZZvor4dXKZjgfKJTdgjnPPzUNsLa6Gmbtth4HnPVXD3vXhnFWq",
  "key18": "3hJ3C4NC94Fp6Pg8pzWu7drReAUpqh4pERiDSayctTzJ82QrNfzr8CFR6fzqT55gR2NkLFd4FTAuuU7rtDXtsFnd",
  "key19": "4b6JRJBFnNr2asSUaity6mP6gwdY8S3LLmVNviBvoyWko7VHtbFHWr6WZ7bVf7bTNfeKMTUZtcSSrJiJx7EHe7sD",
  "key20": "3sGdAkUWUz3i4LwCxjWeKJF9PeRTJi9PU4HKR4iXEsWjnKiUwLcLtGjDsyMwij2xrYmVDdJKvEka2DeQFEgGr8Ud",
  "key21": "2S6YAEqs7tLgzofzEvej8VTRGifdPzawzVnKD4frKmXTNX77nCUqwUqCZ5X2EM4dsEkkUgdXy2D45ToDUvEc2C9t",
  "key22": "5WfpQPZ7RFtZ7PdKZ3ugok86kzgdtyqVvbpaxYHn5BVJ2EQbsXZgNnk29jwx9YTXkT67TqLe5RSL7cQRFTEfswMq",
  "key23": "5dDp1GG8TwTFdYjXg6cdDK6vLSjwEmoagpmk2eGxYTkkrQqoYDFBXCyEhjCoi3tqB3uEN5qhzqaDovELFP6oLCuP",
  "key24": "5YMnx6aBWCrS4d2y3RXJ6E4KtfDx1hhgSEaaEqw4ChYnQZ9E4ncB6X87yVdj6CyyenECWJL49KfQPQmyxsv21Rjt",
  "key25": "5ja4dQaFnBnMK3fQ3kJJ4eUs5rt37kYJ5vN9mHfBvUXb1pQ1SJT7ugSF5HjutgwmXzmGc8iPBzeAHn87yoheAnsJ",
  "key26": "3gJKHELgGm4iPeojb2LikncoAbddSRPHT5tcG2a2yGsPaTmFpdDxvhb2Nv1tEm49DSshS8acZxZfbVD86MsHmTJr",
  "key27": "2wNvUPcUrSW8fKWeLHdTtjBUFcPxVDi7vBnEuxn5NTPQKwPGhkxC12MXoPKbzZUQa6R8etDhyUEfzUmgPVoNpQYR",
  "key28": "4AkXDHZ7N6WHNqxZJAeqbkQXE8BDxTZoCqRRaAmMCrGE7E28TASQdHbnwQUtvr2jizxb1vd1jKGkaixypQX1gAKC",
  "key29": "46bboapABY4A9HspeGpBTAvjFg9zf9jtyXS4pe8Dc6asaT2hn4JVNvLpw9aSgNz45FCLYWeeuHqzSTaEGK926wx5",
  "key30": "5fnzQhFXnAFLjnEp1tGJxqWsLYCjivWfikLv1FQ3m766hNb5enSPEJhqgo5JzYsqAnun5wSXDDVD6J1Yq3oAnya1",
  "key31": "3RXS5dzwb1t2FoSnHiMewmyLQ9npZmoSDgCc48uGX6ibaFqjqTBP6XUuTmZkSwrQwtzRxJ8nAMxfqu3eKZRNGNb4",
  "key32": "2AD6BAk2rqtS3wrw1ALjVGPyxcyJMktGxmvFDv2XH8gA3zdRUfUQLyJwY9qa8y7jnEUY9k4TtVEym22f1uDjz52B",
  "key33": "2Kbms2ESDnij2RnuYcbHkMPt8b5cjc9pQAUecXuLULoGmt4fEE7KTqhcsED7SVzHqnDFQ3dTMjyo6neowkxAutgU",
  "key34": "2s7MFiaNGpdqsfB2sp77UEV2VdjWzGVjqhTvD3UwHeuQbeRm1eTGHewnsieik2A4gw8AkaU3X9ZuRZawjsnbYo49",
  "key35": "3tq6DxaHr5EfX4JspLb5iAim5yzdz7iLYCdQRxZPRsvQAJgu2TWd54kzxmnDp3vN1Pe786wyk4CW2SiVhkqeDvkz",
  "key36": "2TFGx4nwwKeYTzQXaX2ZdA5UpPJtMLu6hzWXdeTWUjc5V5G5CLwuoCayc8v63HEDYqaD7U6yjnruXuwPQHnpKap8",
  "key37": "5cPuatNXKAXrZGZhxHEydMKmLcQpv3BUkgBYYbYwUNUC8aGJgHMXRCt5sHVCJDykiuBkQDfsjeZqV8sBizmxGXY7",
  "key38": "bUas6iiPpaYSxnVVRDRTE8bq1ycgDxhQEJgJiBow9xFUsTbb3otrSEtWsBG3CNW3DTLGgo8Ce4BfqhnvjJ7oXua",
  "key39": "5sdbMGXuUJxyPYWFER19eqormmCVTVg3jHF33HotoT7T9XDDuyncHvw65uXcZggYHVF39NwMPrQ2MYweE3Cqjoym",
  "key40": "3bCJ77j3AoKEJZReVo8XZUHFcfbkjSzfaxJ2xTWRwKCaGHSsC2qPAva73jKwLRPDtC51zDznyQT2ocVTJX267aRe",
  "key41": "5ugFowwEUWGLes1YKDYwVeBZyXbePrKn76tNgLxbyRWDNG1u5xatSNCiNc8woJq7VU5ZwsZGN2Tovobmjhs5JB88",
  "key42": "5XYrTTTCBXEXnmiAbFcVu3TKqmH6TkM4ZpCBqLwmsFiRfJvmS3XCsfFMnzBnjVTpcrDg2rLesGJwXJ6qANq1HD5v",
  "key43": "58sXZsk2a2KS5kuVKxGKNhULskdLdNd5pSMhCDcwqKR15x9U5LBi5V93LhypwobxX2b5RxdQBMa1TobA8i43TzAE",
  "key44": "5g5HoStLdDd5K3t1QJaabd5Ca1NMp6MacnHNBro1x1KmmSaS9NSG5GgPDCgH4pLvGL4eq9kp3sWUpW4Pk1utx4VY",
  "key45": "5qL1xHJxXf6VdvQajW4ivgYx9AMmdKFYsUdcR2Uu5abYDiTchQ5dgCfh3hznbZtniSuun3KBQ7jZYBacuAujnb2u",
  "key46": "44k3k1miQ5b6uiVCk3vxQMALjGoBQgZJFP8VN31c8C7gv8aPgPohBzac3KRa9nD8QvY6ghFtBPfsFGFabWgSrF8r"
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
