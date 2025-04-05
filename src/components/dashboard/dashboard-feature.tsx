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
    "4rVPJCo2i4mwdJnZfhaYLGKDsjV5151JguQe4i61yXSFt78LhnFHWjn1yavYds8B13DXuLYHudSUsdk4QwVSgnN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bsEUvt4ufYwNXqCQojHG63H148ibsimyfNXAh5nG2kbQ8CQ9Jw22YbiTpAD1WSCQq8MVBqL2a6mzZzrPRQeGsUJ",
  "key1": "4fmTNygfvnHsgKLds4coZfYg3jrLoB4a1tFy3iH8abiDGnTiWqdoNNqnFe1FMXuwz6hsNq9ob9nUxDfVH2L9Wmkb",
  "key2": "4EcwK7iT5oV6LkTLrMPgbnqNyyJjYc75RdjQh5A4K2fceohd9FFWoa5qYGkJCJPeSKdhckTaPDLjJx4PzQzDH6GG",
  "key3": "57UAgzdJhRU1EszP1mGTALmZNXWBvDQnymYryN93SABYucLErm9MFCkZVGZMg1EoyuwE2u2KYEp3zzqjHg5zU8eR",
  "key4": "2T1hZzH2RwYDUmWh3Y7t6Wr2qKGMCjrrUHPSGzWfnAxi7jYVqxS9vWjV5AxZkfVdLmkGrYXVPzH7VFUNNdmpcUoj",
  "key5": "3ok8GzVvApfiuWbCXKp1dBYdyBGsFjfNu9A9YCQ63Vpx3goLoWnKfisVCEh3nJEJbnwUkbinRozpSh1TVH455soi",
  "key6": "4qdew7PygP7w3gYTDPKYuCbH47udYPMi1z58RHfGufc7VtCXygdXPnfzqtaVWWv3rsBiDRJn1YBR2HRHqUHTdXDZ",
  "key7": "5TvXJ5wHYKES2VztPeh89BgjgMmDxs221EuefVAxUXVDQ8WCxcLuonT6vfVtJ2sYm37KFRkNU9sviuG2zkZqJPk8",
  "key8": "32Bw5DnevsQbYjLDpVaXBCzpoocJqtLXFEB22LK8xkxchU2CwqnJoAEsgBrZkQWWDvAKMjpYLto8xzPJ2VfqzXr2",
  "key9": "61L28TCdFHD3h1yTEKZMsSyefHSZ2u7rW2bEWPTcf8zYCVhiZM996me53Jwdanjk3sZc1vr47rfq1MffgGdJ9PUX",
  "key10": "FCDT3R1o8jpmsHhtiBYZJH9H3DZC54dQuP1FDe8b9t45f1Sc2jhCE2vrunN1h2o6v75CkbcXVbhLscBEV9NvTnD",
  "key11": "4Jao8NeBqVvDedL4CP5LtSx46zT5yX2dyc1Zp1sNWVDEXSwk1p2RP4mgT8YcWgct83Rnf2J7PmUHmyiYyeYMGmSw",
  "key12": "2MqvPzagwhPf3MP2mzWadVsKjagFUiSy5sXHmvfWyHZXQX25CPC6hBCS89mZNGH2MMk8nBDsjj1QTthkWuf4RpWt",
  "key13": "4RnHAN8eGWTF1zpnwpxixGmbqAX6eAZov15bgau27yj9JiyZYYsqW3k6FUjGw3pkf6yTBYydh95VfiCo6qhtz1AV",
  "key14": "NCSTo32q1j3JiTGHcT2xbeNvDS77xouniqAqMcM7c8vS74t5n5AxAY97G9xb7oE7ZT3vcmJ73dngQ33rjPEzGJU",
  "key15": "43JpAt53cYC9Bb77qMa6JMvhDLCuihtrAnTN2Y5JfBVTB3nnzGqzn8wMPrbXRATZcdDp4TCDZTuKUo4gSDEHo5qV",
  "key16": "57Sfyg57i5SVwhhmXGEyCfrNbhuFHa2D4TVzHicpU2wzpjEZNQ6o7TbJ7zkWXHCB51FHZqr8HK9LgNkxP1coSFyR",
  "key17": "3CqKRR7wxdSK2WKLWtnoyx2Mui6jCB91yMUTp4LFSUYDDomk6kucC1zc5bG3ruhJEBv7ZQLDrJ41Y8QBiBm2hHTA",
  "key18": "p26dBur4nSwyHnz4rBWkFscUkUuMQR1Ja4994KhcfWcSARJG32m7pCGDzGNdBkPmkBqZYgKxPTHfXmcAsCttWsv",
  "key19": "mn6xjBpNYKTgVERnUuwQpNDUw6rLJMqSFSxWJ5S7pBUiDkxPo18nUCTt2n1qQX2b89wvwqUnsyDP4aoPfpHofmv",
  "key20": "Kq5rTQxW6mWHupj8ojVjPTZ9hPahFRuU3KeAHhCNzf7U3frUhcmwDyAqz8eTeKxWFUgUouaHLhMCpPj5MeXrmtY",
  "key21": "5qDkHJ5eAMHKdu2tJqEhwBzYy6xXXRNQ9PvBjXs6hzi2nw7rzFpBPTTLX3iZXxns2dWiNE5r5nqxbjJJBkFGaqHC",
  "key22": "5mfik8iamH1FDkXuA2opZkQDV29duKr5XYZvWrxDK1z3zjz3m5fS2hUS2dopeybnKApnEyY7AB6ZjV3CL2BYoL53",
  "key23": "4JGAoTPYqNjXMmgJArWKycvF7kuCfiCgYLary73HS1aFVXySXgyE8DH25eZfeBFP7nmYPuQV5n5UhXFFcwaCpVpE",
  "key24": "81r7dMwcSaLCQe7Na2JEsA6q4z6cNAknSr8UPadM1nPFAbG8TH98cAgcDbr8csZgptjLsos9WxMGNevrmfM4yZk",
  "key25": "2phXZf2tpGVh5pd8qwVmbEViD2qgEr2GAvi7YPGfANLhSxfgrGYfZBJPkW1q79UJggRYYtzYqco3edLTtHNmZK8V",
  "key26": "3NAiHP5Zct4XjMB2dn9edcwDdeDjJKWkeYi1SqRTyUBCqGkmRDvsqY9KfPZo3HpPYqTUod3ftiBq8EbCGmjTh1h7",
  "key27": "5jRbiBSvxcjURbSgMqEZ6xGd7x7v9ghc3Q4Wb91ATGHrKG9qU4uLeMW2e1J4pWYHMdr9pMjTzdqyMu2sQsuMzC3Q",
  "key28": "5L1jQVW3nfFwsuRSQYbuPwL35rFCFMBMcvTbKEeeXZU4gZVgpxGzM74BEB85xC9ibiRfZwCPRZsw5ewNYgMH4t6c",
  "key29": "wu7BSdMZyPQKeFYTwAYEQv5WyWPkM63DvzuKxFpsvxwppDpMYWPaKd6GG2hfuoLp5pMZvnTcvDnzmCLdqYrd7oa",
  "key30": "2rpcwG7hG4qhy2QNcy6qsjnEMcZkfKwHvUYkoB7FhynYCUmrKn2cYiPWh6iTiunfjFJJ1FHb3G699wDV4QKABWaS",
  "key31": "mG7QuykRux7Cur3Lm6LMeHLprG3TVCp4Sq4crYShvfjeaA29MCXhaYFpWjtcxTh29YgLe9cW5b1mbS9Vt3a4mno",
  "key32": "2JM6dHW7UDCv3bVAT72R4gkTX2Ei9kaiiVFKyoLSDEouStEC3tAHgjvC26CovCjNeVWmCXVa4xe1xniSpmewjhVc",
  "key33": "3cwpEQqdHw1sFiARMCYjcgmp7yynkE7SQAwyhhMW9zFUmzVD4ekHpiNtWXtjMi3M84hTvCzgHPUdqFW1R1Bx7fZR"
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
