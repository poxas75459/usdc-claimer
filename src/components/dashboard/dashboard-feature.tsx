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
    "5UTi13vUyn3cQvBvfei5yHmADaEsu7u1fS5KaqcBA4kh6jKWtUffHvHDbcpC6jEcAc1z1iUwZoeFTGUgq3zL712S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i8tJWfi2Le2htsV8XLA1QV4quGW1MZ2TBANrabtdDh5RsBS1DEBZPuXT6wg3SuLoMRfjByonp5hWEbwFfxdEqFj",
  "key1": "539ShF1pYfzSFkgijPeDVrCCZCaVCX4PpeQNFL9XKBHfo4PwD5a9SZtmX5SrzC2q2SzhPANegnyaD9qz3aeGR6EV",
  "key2": "4Kq7AGWxkQBoQ2BDsK6zkoyWNe4yFbJ4ohpkqtKe933pLDN446pijqzj5ZcEHdmg7KQjLJWnyR3UrScZqz64k7aC",
  "key3": "4aUtq4TueeATMEFEBLXC1T4hQZmjKubBAYHsFERZf7iruJpvmjunV9A2ibPyfQ7PpSqqtm1NGwFh2SdrRhvsw9uT",
  "key4": "25w54xwQ4ifXJe56uXiyobAkni2JwwHugLBXqnqECNAQ21QPbKDWKEMwWzi132QkYz6KQohXD3GzHXXWRDt6jt4p",
  "key5": "5vxMXkfSdzHTXLpdJrGMqnW5Q2aQi7a2wVw67Xvqc1KcAAYbi5VZQNAycwg57biKhYt4HL2ZRbSjhXRZJm54D1TL",
  "key6": "4FbykVGTGxR1ew9AQ1L9LSHiCARRAvTwvfM6Lq8FTfmZd5ErmQCRPmRcCFiKFHt7NoNSj6mj4Rf22Dcd8ACkwREp",
  "key7": "TcApZJZjJmannnMBfh9zUvJdJMvVGAv4EnhJ2jkRcK7Qgp7cpPRJzSBezksL5gHtQNSAQPdEYqagd6Pyi6aUS25",
  "key8": "5ADYgzm7KcarxFDKyYsnAgPcEpsC9TA1xYFcRX69Lt4BYJtu2MyxtS1PQXfmbCA5f6iSSS7fp3mnacDZcJi5hw97",
  "key9": "4HHEmRahj3EgTDPohpL1Dxb2SAQR1g2GTTxncZpjQDN4inxPzHY4hkG9mYMNnP5qLmyYMpwmbVpnCSbfxZPwW55c",
  "key10": "3Zx283KwtjcuomTUW1QBbXTrorRop8pFwECJ6EdRL71NKvY8ASpv5NCxyVFnSyFXowBos8wirkc3FvVh6Gt2EntL",
  "key11": "FFPMEN5U3LVUzEuL9qLsKQpZER7j1fk1tZFU3E7AjnhLQKmd1wdGhsCsXK6BSHcfLp7K8UgifFmayJi7uhsnoqB",
  "key12": "5ev2q25C7Q7kzgHxUxDtVofan887kPX7gceXyEjcrw8hXy2NHud6Sk2zSQSQE4qbn3KBn6ydHG7rtDFWhNgZeo6A",
  "key13": "4GrUtHxYupUbM4KL42JB8VbKVgTyS5qmW8fBWg2aLo8PiAe2NceXLcVALfJiyAinnhn74Gg1i1Kjh5m4jHzmpFqe",
  "key14": "gPQNQsaUhoNu6J1M9roNV46JrpBiN59AwssyeVWzDoiCz9Yr5SgziBwcMYMPeYrLNojHdUKYWw1Abo38w9RmLQi",
  "key15": "378vQzenzXnMfsWpEwynmviR3XKs4rLV22ys7XXn2ybdQzLMR9b2bnNXGRt7W25waJXUuhjSxgUYZYdvAf7PJAKZ",
  "key16": "48kuJRUHN9KzGzJHMfrFynVW7nYYdvF8abj3FEMdPe9ZZnZxGeCRUaThomgCDcDj1NzLKpELj7mNkjWpd8ezQYYS",
  "key17": "46E64BtmzBHEizy4BSGKPhnoQY5cPPrqCnhgCXkDfpKpBviSn18xGskmx9HBFi93VQu55eDEw6VvXDNWXLC3uLqG",
  "key18": "gL61i1MgxbXedX889nCC4onaetTXV6ezWefR13d8fxGUXPDqgwwphe59bEtTQRpRSryJV7MMuQchArKBfZpC8EZ",
  "key19": "3uECpHD2cp4syZtvFFJ6oYd3riXqgkmG6ZuUkzcQzccHZLSyP7pQ4cRde99f2LywP3h6ku2tRY7KuMrhWGD39Hk7",
  "key20": "3j1rXkeDV8pGZToNGcMyFX2ydi6eJvtib35Aj5StPgqzsQeY4RcM2iZVx7qH5VyTFSVZJKjmPsqq9LqaoBw6L32",
  "key21": "Ud2H7o6PWZuoJy9JsbXWavxANXFnPHxjSSJZzLLnCc1Gd8or7xbXLLWKgBL4kHX6cZjSZQufGcQQ7eFTrnbishg",
  "key22": "5wprUKfvRGXqteArWf29q9qE8QYN6aHsb25YS5yRPFBkESk3ZXSnTGd6EKdNiUcrrFuviJbVCvpzMTYvKxfUme5T",
  "key23": "4GBxkZb2Yeyb38LzfUE1anGsytg9C5ZV2eWsdWuk3HZMrdygMQJVGXmrhGNRYCrUKbv4mygXPXuaMcfG7qwLEFhC",
  "key24": "2cj6tKBzwhhu4hhDH4zR4Fm3RuGRMgKpMx8ypPhJyKRNcTHScuF6hzNp2dSpwhUwYeYNx8bBy9Lub8aayvhdZTdz",
  "key25": "25yB6iu2PU7pQZiwThq9EuDvBVX4eWwYTHmQ6teXRb8kCUReRQ6eCE8hjqfisenQgcP7313cqt1TmAFL6vB1CidH",
  "key26": "3VbgEQQGfdftYrSwqG9pJhMi9qyRuDfDfSQotyQchYHEGwX2S48d2gMCWELC3AqXFantD3wL7k9BzymZY9dJM4ze",
  "key27": "2HMi6VwG2kL5WFqggEp8fJGeAmu8GPwRiqX9UqEsrRWgV37WJdoDa5YtdsJ91gPvANWbb7iZdFXsP3v1UhYu5bE8",
  "key28": "2efFi5Czxh5ZvAWUfCwPctLimeCJKwyGY6hgC3xyX7439gsY2qiZdaZGC5PK3mzRXw2TF1EP2A9XoAhBh598cKKk",
  "key29": "62mWKNhxVH7b3Q8b9CaaBv5PkNEQxKLyxjX2SxZetc2CpkGGVzWURikfpjYmGQLrfbtwHjP1WFrGDCmVjKWG8RSP",
  "key30": "5xnHqDpG9TTf8CENWyd8oGirSfcDc1FVMRpMmkhDDcHEgmbfjtQk1w1uBzkVV3QGsRLzrC2KgXDn7yKyBgjekyyz",
  "key31": "3cJwFo21Nm1sQtJ5inxSSW22SM2xf5K6eXe5krEtxHucSBheuHoge44rSs8qagUgPsUfKiRtprwjwdQApjoMKJvs",
  "key32": "2mzJfmvDU2ygN5jEQ616AqHR18WYFUoLzWaRpAZe6KsSHeJrgW3eD36dGpmF2bbTpN3EaH3Ey3EZxZQ3HUFrbAnN",
  "key33": "3JwYGiPdnpCJbxdMbGsTZzqzYCYRrVBUxjrxDHetPtNW7VNraE3RP1XoA6Eg1BRgvRGTXyKFNnaeSU7aUx21azyD",
  "key34": "2ezTNnT6Gj3SLEgqwqX34b2YRBF2YVFGERwvwtS3rXQ2zoP8a4rEEcaYHpdo1qLAVJPkbb7x1Pi871bEJBfgYNPL",
  "key35": "4JmM6P989DAmtSj4wfq1BBDb1taMzujTq6uJpuDRFYBBZ7wEFELqBkPozHA3dkWdXq6ezcrJmC7SJUtncNN4mU5u",
  "key36": "2ufepBENUqW8GnVfKRXv9CWCM4RmETM5ZMJj3AUmVCJGT38tRJKbrbo881NCHbMV8YjjXKDcKAovWBozNcX2nTwD",
  "key37": "54mqvtWpu7HNgqPFiNukqLbNix55aM7pGxLjESooEQnLcBTjBofmE6ZK8NxGW1U61aewh9utcT5UVYecEkgC68U",
  "key38": "5RMfYSvegRHkgFMFfkfFTnxEV5P9L4qSTRpCJWd3mtZers6UBoF8J6FAJkbBeF91GKsKRkpGGTAbrX7bRfmWCRaZ",
  "key39": "2FhtquuaYesUBQYchFEdJww1GyL2sh9eATtEoTDsMCnF28BWLUP34utA5iZqLCq5vEFJqr34Zn1gmFXxu7C3EXYz",
  "key40": "3Mrw6Sw3HzU5NqLzCxib6hqrzbtjMKfDXBUdsiRBpQJRqDfz5xvdXTg9MA76UMEYgtEtgvwPJN3gdzseYhJp2yCM",
  "key41": "32EGnV2o1qjbGELYnkEqbDPsqFXEovwHR5esZSY8c1kvjZ7CCej1GaV4CzCjJMYcTEjRZeDv5vXAPAPHs1F9eETy",
  "key42": "2JdSsvzsiv52ZJC4RacNo4ukakmEuEqSqyCwhZwLUT5V1YBBXV4jSTbKL5N7JmcQKcZdP9Q7YPWBWydbiQKBHcUd",
  "key43": "2HzyDT7p3vYYxkpQBhZb5K1szQR17vuoJ9n6BTq6ARZqPQbpwXbZr8m9Bcj9u8YFR89ASQiUPkuLaGHKDb5Gabtb",
  "key44": "4hKz9XCvqXpV6dZGZsjBXx1QU5TfYG9VqtMv6x3zM5ur9zcZh45uugXe4rdJpyPPhfwsrRJCELLZxqyQ3G1AWfN",
  "key45": "5xZUWskgmsegsPMSpX2rS4dgJwpBt5jhFQaAJK94PoXe3ZmXZ2ZC5hyUiLWN37BGrdiy18syA8RiakiGyZnZa9zS",
  "key46": "5kkSwbQ8ZpqrCGzCckTJKv9i9FUxB2NVNxo2vEdoy1Ac2AaZgZFnvDjijfEhqfBTDEabTBLk4Y491zSdhrM5LqP",
  "key47": "66szkkM4SCiDnHP4gYoxZJMYL1L48puoHzk8fTaQsoS5NiWD2yGh1m4KyeqpER3ct6VLqejwRGpKkQXijRng5yhJ",
  "key48": "wvPT73e9TdkhFuMKg7i9yAT2ppifMV3WYZbLFF5keG86ymMCViVxu3SShCmzPsrtY2hLU33zvK4i9qK6jqBbuSc",
  "key49": "FKSVZSBeViTAX57ZSDyQ7yqczLCWgNgw9N8nuzz81X4bqbWSfd2ZoEFoP8qVd4mfuc2zkwQj56gzqqj3RoGbVra"
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
