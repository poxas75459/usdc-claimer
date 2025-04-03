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
    "4DZ1wduSP2vmw5m8HgUzF5XXtVUzHXF5bRppe728j6oVXpYHFsTwXaomisZNxwnuEkyuYx8J787dinjTTEBVfY5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vKNY2uLGLATBKiWZ7ZieTKtYndLfuUg9L1G7CLv6kkPnyVfqNPBCsd8H64RidAVxL6wQKJV6TSpDLeYotpBZZeU",
  "key1": "51mwQB3icUoLNcKF7HwDuHK5tciPU1svcVrCA7tyfGAFTiGHrzrw7jVUe67wQeDN9wJzZ24RgMjCynRopyYEuB7w",
  "key2": "2fHNQrd6g2hBodReEyNBP5YSUa9NtPXjkap5EVu36dwPEcX8uH6He92euSJgZpzGN8A42y8j45VziYuKCcW3cmhx",
  "key3": "5Puct8CNW7M2fU1K4mAoELkBDKDDdzmTxaJA4kXGsaVP5AKybCbQUvt5PUbjDEBKig5NaW1RfvKoD92ZEzj84W8p",
  "key4": "25NHePDvx3bamG8iWpYyFKgsofENhXzuBUY26qAv1ceJnU3DgWWTXuTwRJL9sdCUbhNomTX8mjxqr8FNNaAxJkMc",
  "key5": "2qouVVX5VnysPVGRNSjMhGJfXKqzyBdwuK2FjXnhKa5vk9aLeE2Kq4J8jw9Y5rg4WSk2AHnm8S1YjsDhwsngFvBH",
  "key6": "3UAtzMRcWgjkgaebVw1s5icTKduEeJFtYb55ajvJPXG81VVVvHFMciv1EAgWuS2oxmbK23VUsWGVdhDgj7aJkqTi",
  "key7": "3pLpRqfNWZD9JFuqkVmdBv8QPryF2JnwzCNjheit47FuhX5da2ya9vwyHrhbymiUab88HF744Hhc5xgmPhRi6EU7",
  "key8": "WxLapSLsTeWLNqtxnxud7YV5x1q8ZPeKX8nmsovz8vn4Q3duks56wHccVsqsHoTSJbzx8zhuaWgcxFhWbLhcsHh",
  "key9": "3c67urC77SjGKdvMyQzGfiPKYhUqM1rJJWG4jaj2W9ydgg2dYJFYNPvVXGAK3fpuqkTKed7QqgxhAkg53sj8eSW2",
  "key10": "2PHoXZB3pYu26JkVw6xY5N1mKf222QA8vcH7bJ8BWvySEcYSGs3vGC1D6kwK4yQf3B5NBB7jhEcQ9THFBfATe2VX",
  "key11": "5yoYspsBRfvBCjfEVoWKVqoeiQZt5AaKHCGykcf2w4uQRp7A2asxypFGnVPXHaHA2SJoDq6qYk3B5u5FBni3LoyT",
  "key12": "2mjSk3MmVAdCVbD1euFb2GaYKxWAkAzS1Sv58rupySmQfkf7p1rsqYXK8t1n2tAY3mCreFTisteTYirovViCHEnW",
  "key13": "2iLewF5iTqv58dvbrxxdkpbTBnFfPz53FRZsh47LNYKx5CDevvYPhuotjCBPyfBieGvc6RPQh4EN4MUNqaDzAkWu",
  "key14": "3SC9fc4dAxNSAKQVHMQHMFRSmGfLvhGNSb8yfTxnaczK8xAsEb1x4EBjnWJ1vEX5GzeRMfj4edYL12sVNtpV8vej",
  "key15": "8mmnjrTD4GFBmWBiZKTby4WT2KGRjxi8Aavpjg9P2rrC6CsayK6gANBstQ4dDfRfLoemnpRecAvWPgZTmS2Mtbz",
  "key16": "2gK4WY9PnSSTd5UoEPVYkp246TMDYXsBMErVEGWqmn5HY4jZNq4JqvYg4ux96hQkD4VeuuqmHBKSNqJwpcnB6uze",
  "key17": "oKGGvJwYnMg8qF26v5CmPW6p6kYUrYjycu3JWLGMt9yHTwdEyCkS2ZxenjfFyhK2FrQsr2MRbn9Dyq2f8i9zXpW",
  "key18": "4R2eD2FvScgSCuoGqToEoQfSDPtdscFNhNPD5tLmQ5zQLdDDMBDB1FUfaRsuMWmPKwrdp6yM7SZctwyMc3Aaj7zR",
  "key19": "2efbeStHeAJJfx53kJcxQXxgtyzq661PTBBG6BFQwqUTMJyPRFUpeSTij8bWJkSsgaDgaC1oMSqqBVnqW2o5bGch",
  "key20": "4xcpkw3XqBxc4EQuYRuGPpAvT5omzLTRADw691kCFVa8v4ue86edibvroJB3zjqUd2x1kwRydvBbkF8yZ5hSXu59",
  "key21": "321zfYammpU3c3v3K3SDrirF9t8J6jCiR1rMnbzpKdmKGYJFFMNEXEEeSvqTXpkR2ELL651M7Pg2PgXa7Dez8ryT",
  "key22": "5wMWGfVb9RzRqRfGGp2oBgrVra4rDpgKrYdi26qpT1zTGHDVGZwgEfR4jJtadNNb6bFGzpD43Pd1DG9oTWo1Ungf",
  "key23": "Ujop1PnYRLFb4snWsBG5tdfxMoTKbrSMN5poJNHiLudoHZg9ypn6HRLSEQfd5h4TX4KiMJjMz3ugo4M84du3MiC",
  "key24": "buLdwoXovZ7eTgGStCTB5Eu3YMBmLFoYEmdqALjYDwXuSokPL6UrYnj5uAA7W93cLR14dtUhYCVZaYSrCkZtQkC",
  "key25": "3m6snNepCMxxo7XvbzLmRRtUciQPQ1jWhrF2ztacseBZib52HHTmfCoAME7ta88HZtYJhUsATddptSeKe3d7inDS",
  "key26": "4q8piwcNsp6ybWxnpPuf3YyUJvdReXpSGp5at7ePF8NorrTBJLmoqx9hBs1Dyn1AGUFpoGzNEYXJ787Z6vLakR9n",
  "key27": "48uAk7L4Z28dizFcep1rHUkzWjfBe9FrXV58RYLQDsNFKP4QT3r25rHbehcDNtneiht5JfaPPvChVsFXgz5ckc75",
  "key28": "boXGrhN9SYPciWtHYQhKX1JyhyFADfp5D2J3RungJUdTpWTzLrRM1gpVde5VEyzTh4GqZynJZTQuRUjpNjnYkr8",
  "key29": "LrTAMpQKwVdjPvgUFoJnFdQFEtTrooVUSFiPe7GsWLMdoRVxVvnwnksrktUdXT4tt6tr7EQB7oRPjpxFUgkjrrQ",
  "key30": "4Z2L6cfQWvJjx9qi4PxycvXy1RYW2pjksNkAUWXdmxtQq7mFem26g9P8XjzcQsodsc27hkqwBm6ZPCwwWByFFxD8",
  "key31": "26KGGeGbd6bxpmk8BmZrktbjwX7adspeyW9Gugcf8NUxm7TdTU9EQoBGqMEx9CKdcGH8C6LoW7ZwyM56x1Rrv1FX",
  "key32": "2Beph6FW3sQuSB7VTrs414YtgmWaYi2JLvCx23eRPTyYwoA4JDoemeKiGyZKLsoKNNp4wzgrTMS7UHuyGg6SLVB6",
  "key33": "3Bys6Ux5FNqDmmwBGHRUJreQYdiyLGG572YHHVPvNs2vUYA5s95oAi63CbGMaQvj6PD5Hw8Fzg719pmhe2BP9Lz3",
  "key34": "3MmnSxqUZhz6F23xdfpcUNpK6f8xgqKabtXKKyWymBcu9bFd8K6iYuqddTS29qQ4NDYFH2m2sGWXh5YgC9yU7gbL",
  "key35": "rneRpVVctm1spMstaPDt2JmdYNxjf7pbFB42DQNDXZeRb7fWLV7PwZ52ri99kgMgkoLVXFtpitXZgq5e67nm6iY",
  "key36": "gdTt74mYYZ7SF9Z8PCGqkMNHrFWLtcVANanPhDQXmUmoYRUovhSYRoJKWQWofqtV9UwLqT4w2aeaZjdorcLisqP",
  "key37": "4GjoHv2BmCGQyDQyhTmVywKecZMk12fZvkzqty9Ypf5m5veL6bRTnB1CLBvCyBUcpj4L3ULqhzSfVP17QzQPGGtc",
  "key38": "4UmvR2MMXUTBDXTYvWRrHqwS9idCSGKPLcFXWmpKLSeNkNvcsWPMCoMxbu7xGK9QKNTRor3w7oLmwztyVMTSqMzw",
  "key39": "3i2WSqKX3gs5u1ZvK2exxUDtHb9n511xbc3uqS6n8fcmoRPbxsmhaWc7Dx4aPN2sJA5SfFxFF6VGhdEjzpHBhS4Y",
  "key40": "4giWq6hrtBtjebGA4yznJh2arKZKY2C7WdjdUhuHLd5FxokpS4UbQkszdT93EJbEZBz2BMM35B5YM2M6SxKy92Tz",
  "key41": "5zzdH76BDLK7ZZW7bVkCL4fhnyKmkUYeirJM3WSbrj8quFx7bPagrnursmnhtZ1y69NDZKj9NjtNjAyKDTfFUCMJ",
  "key42": "5DLpWfMG8YTtNCxXhQDz6e9AipxzSkrZA9axGr6NGQQe5yCSePM5Ud1kJfkQFLY9FpPhhp5LAGvSdgmBSLHiFpuK",
  "key43": "4yzZrRniWwgN6yYXFXsyQUkJSMtBnHHGcLWBoxbV68FAZ3joD9DB5mDpDEihGAuba7f7HRTDUDfGVSBtxNENRNGh",
  "key44": "2RCyuFk46pMzeUDh1ojG6wEUQSeWRPpiEGwJByq8tsQAVETuft3yBXjxPSibH5kKeuxxanZB5LzwBx9DC4BpVJD2",
  "key45": "3nae7XzHBy2hS5wrfeKFt9MXqgrsED1pH3NK7q78v6Nit4ZhuE3m8mF7fYJurMLtd7P7iWNeBUsSeLZ4m1MeqVi",
  "key46": "jRtFrAkc1i876YgPDnFiLFrVB1CRqfjZsUBLf6GcJgZAZkhFauY6k3zhY4krQhGdPkbM1mhv3n9GUQKyi6gvFDt"
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
