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
    "3nSQAGvHyiPm7zN5qN9gN66GjdMu46HQh2wrdEvCv6FhQQNfZrYAFk82emM59Efxyx5uhtVA54kqzRioBRjwrnth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TuFzYvPMkA5vBMYYH6TFNTHh3bRc3ZYtWG2XAkiVn27wp7xn5cn7SB2a8wUMoZgXZf1hVswzPcao5ixgYWRTXeT",
  "key1": "2L9xYHsSyi7tFpb2XM656NEqabfpTEVNtQGmpfpdjLCtAXsZMfguNMaWn94DNer5gKDaXfHCdC6Z9os1c2fyPhj6",
  "key2": "5okR9MhrJtUhQm6smURasqp2MxGEWk7bV7NCdw76MpZdGLn8GcadvWPw3bCZtQTGR8LgQpCf6nLjBKjJBrHvoejZ",
  "key3": "5YNVfxh4nNKfWknNSjrHSq6p9UM9vZ1rU9uURUmR81fZLPHFwMRxc54E5xAY82PWkAqTzHgR9xWAHQjEvLCDoiMs",
  "key4": "2xFEYsRKBdZnvDcV9MvbNjfo8jK9whi7fDG8Qyfnn6dishYpSVSomKTovQeVM5dHHpJME8k5Loz1thZ1P7NM3HL5",
  "key5": "52bUq5fFQcab8dcoSkrAkDZyWabD28762hHUXGWdQKbTjGMRwzfsNBSPngMKNLEPidJT3A3EuYb1f77m1VcHYY85",
  "key6": "VoeaJ8UjkXZgNKBcUdySDd6wunQJ8RZcve1Zq4Keqqu2vdgLN19Gr2n4g9Z4QCQoLjPwH7mDS24uenfX1kAyuiL",
  "key7": "24jvKzY7HCv3xPRq8Yk8znu7Cxw25JJ2xs8V3ZaL5Kp2y2TmHnyDhn15eUNkJoXiiLzy7mZwgjsNVxqwKz2mHGbt",
  "key8": "3cHMXeSAhMWoBW3Zds2UAFGB3qYUE9z7K54For3pUEV3Qi8Fjoey2N233c4pCi7ofRBfj639HGRMUVYeWuCvMeAM",
  "key9": "2URF8LSPmgFYTmLSsQN8ZLCVoiVtQ67WCaNJ1YEc6A74ymfxoEaxee7BwC5artt2SsNsQFi5xq6rwz3GBNWtviuS",
  "key10": "527scEyDvLxjRCT9kfb3HsMSpXKNwCca3zi9NJx9dApX3FxoHv1rWZLHLyCwxej2CJ4dwdMUeHpRamH9We9Pf3Qs",
  "key11": "2dU78Sk2SmJHNRxzSHzQD6jQpghqpDiQftA6oWY6RapMS7DoDZcwgLhrtDTnJD5kZYxg5oo7zG14p6VJn7gqNJae",
  "key12": "34BPCUkn12TnrRSuekuf4EQUMDjBGioqStDfpanYgrHbCYnT3ZA3YEMd6yFMAtuCWmfM1UwfxcUgLSL4mvjNY5e6",
  "key13": "543oHWT62dSzkAAa1u9hZQEmy9jSn6kDMX812AxYQTGaEPhp1Nta1ZTM3nreQgyhP5q2PuzKjh23S78XrXaFFHpq",
  "key14": "4xyEV3zoHkCpDxEDDPcAewEn3so73krxaSbTUd6WD8AJfgyRSNmbfZf4jV3Phhu6WewM2xsnrd3NaNrZrWyd7emM",
  "key15": "4fZpnmQSt4MWTvjGoTjjqFh3kPXE96AJJmBG8BQCbjDGcpLbEHPgg7Fez5n3n1qmP2N7tFLwzcUxqpxWoJ2B563G",
  "key16": "2vHq8WR5sF3cj869bua5XDgZ5CcuH1V4HgmB5FMX5ZoQm8KMwxEsnprmyZTiPxCgeKeRufmBT6onqxEp8RGD6LPk",
  "key17": "2rjF6QYNpp5wqggQeGzQRB4QHaKZBDJqBimKwS8XxwgmVqQvPYybAKv6oWsbkNe7fXSixMitsMZFvySU3rNYYiTe",
  "key18": "3hzcBKQSP4N7CzQJQnxCnJwftYfNSUtFyDqWQFnYc7PpyGLz6jAG3mzduNMeYjvNBEzwpYhX9gTLyz5ZzP9HRdG1",
  "key19": "2CcQzjYoVEBdThQD3SfiB6eUqVb1KFLEEjS98pJ5wJGQuiHQAbvZ9wcEsbRKrAyvuQpnr8vVpCvCmnzj84cYgf31",
  "key20": "2tCHMzro1egQC2awZaz6WWvCSBTXvsbiiQRZQdvEhhGgHMM3socd3c94UVedxhUUd1Bt4LzxjjAjZQy15T62m2Cb",
  "key21": "c3KZsMjjvUv7hAgZ1wDb5WSoTJUjJbnKvmbJrN3i6Z6vBybzMQBjaYCvoxkBpQ36Z6s2hjsVnrHwfxpLHvmxZwG",
  "key22": "2dYkRfvF8SpaDd1kuAWToChguT4otZEpXgdcfMhq5nkGAegMaoR1mZDnQm3PnZAwk5GaVhJBWQKVwwXuaikEcUPs",
  "key23": "5zC9mcbHvr2sA2dBRa4K2moEoD2vGyYKYNVTAyBu8Zr1exfdJknFF4BEdEkf8jCJLawYKLsiWb52gu5XC2onooRS",
  "key24": "Ku712ok4fAJhQ9GcCqtvyfBPMKhQ5wQqDo5fQbaYHLwjXCJ6gWgaXqKjh5nCJPqfakjvUPzFaRcKtaebrEgKkd2",
  "key25": "bcZJNB4FDYr7UquEGgfmMCYrJxgNdk5aqWu5oCbfnZqJhHrfse7ejnYG1W1rADU2JYooZhYMhgJZkbz6v7oLvC6",
  "key26": "2QYa2ZcyH6ngXt6DfrXrFNAv5VvdGKeigUhyvbYWJyoB6NVVY6AYecz3Mi9R6TH6rRRajVFytGJFLAyqChpf2QH7",
  "key27": "kWTmTonfkJx2WQDgmPrSrj6Dvit86qigNKtkkDExWs4kMndGTFMxqz1e9exn8dya6EGgyMYZo7wbnqfaExSASdz",
  "key28": "CJmC5zpWvNrgKMWtU1aq1jxxuNDWhuvZwbU4o3fLyx558oaxguNh6dZLXdbBD5pwcumKdk8LERJFLRGKwL7E6Ex",
  "key29": "2vNXzVUuuT8PZkNkP3b1wx8hhLV7M6tbqeSE5XEHjM5ayJHbHUJhQAhgsomFrRZFNLdJNYCTfXVf2L7pzuzYzah9",
  "key30": "5SWRX2HXLy71D4PhbYc14NaRs1Z8d2pQ98m7Niu7wyXm7kBYEVnDyU46q5jNo8W2paxZs22TciuEy3bc8Uf7bPv8",
  "key31": "5cswaax4hbQh5E1jCZFBdMSTCGDZkrAtW1SGhAHgaJRYyeyTutdzmWwv9RZjYh6WB77mjFa7sCwkJm3WzkY1tz3v",
  "key32": "2VYWD4aBL3gQr9n8UJPtVqrG7RFi3ohro2u1DsrAfeHiMagut6fbTmuTjr1ymzmGNJtP4PMZMgx9Ej57o7SR7dQ",
  "key33": "4bDsqmEDXxRRk1SDLK96WiBbWzbiDbpUQ4fjd5es6eBCViFWPQzfvnLHAJPSx5RZso5XFkNt9dJ92Npaza6rLdCw",
  "key34": "5RGEa7PCqSDPwGbnVR46U9p84ejgaGruHg4DUfKsPTBCvZxWo5jPwnyiJmSC8iwTPZUU3A8d8fgmU6ypT4opT7Lg",
  "key35": "3jgLbcuko7CyJAkBafWWtHmPwV2PMaJQHb7pscVXVRun6E4RbYmwBoejWdY3pspGFo469NaGEZzf6468sVe2QNR",
  "key36": "51KbLFD8K3qXjRe3aM98vjorX8TpgH3wXLK21M77Up4cUmVKfMiim6MrqLJwCmVvpYbAWZLMAyXRfYtbNwE8sg57",
  "key37": "3H4UVpVNFya7ZgSrZKrzDSjkD9CJL6jSGf83CYe6RTKNNX9Zg3mF5gvgNy1PC8f1GzaUJQhLnDtZAdvJnWgfFwPZ",
  "key38": "436ttPXfXrqbsBqMxtwFvAECpDcNqwUcSi6RErepmLThnKTN9VN7mYzYHAaAXzf77QLSU7UYRdLfDW4NPcCR25q4",
  "key39": "23ZaZw7amTeLD9okdWGwN1M3qLbZRzvvhXXaWf2GKWNo9DtvM3W8q8mYeZt797vEH2wpU9tY7DAx8L5x9w7JNggS",
  "key40": "6mx4ucLup7ErKfqu4frRWos9anzUk9eU1AKTj5iwjPRNCVSGavhoL4k7zMa2YVsFjA8H6kRGWcjKcP4w3hj2eNC",
  "key41": "4iusp1CQdheCe8AcPsRvocHYRbWfrHzgs6W4sNgazwYaq5vhAjwyopuZiFWqJhZn81AQKweN83KP3cEgmVHm4JK3"
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
