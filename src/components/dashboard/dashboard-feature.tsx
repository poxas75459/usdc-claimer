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
    "VxhN9JWpFWdgxP84KCJfqjWR3CgDxowQ3xAxmXGpH4qu1ZUkL2Zyo4pnNAjNKqXpXRuPXsRhzKGNxqE2kYbYnu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EWmyqgMcMYuTVdMatbZhGzy2DGTov3k7oBYUAta6PhC2dh7pUvWVhZ2cAaoymi48SRMVxcBDw93f3i2ofYpSgEk",
  "key1": "2NpaRn9oSxo1AZTqMExbqeGiPZE8uiSzycxn73t6tCUTEFk7StZcjQqxbs8TxtQPxt6EjBY3FpaCuFxmFp8bQT1o",
  "key2": "XUnWteA5NqNtBjhSF7CodyQcj92j8MMx2inGHsVxXiUZkjpQK4HajHgNve1ZWcUpXjFkk96gKsESFC4p4nyggBr",
  "key3": "4o1MZMF8uwWAc2opnEqTfSeoUaJ2apdXQjBEihctio5oYCcwxQPjxxdtnquS3eSqsGvRcDFYWfbwuWyLtWAyApde",
  "key4": "4jwY2tYnNBZk6N4j5RCGLoo928jENfs1SeJADMX7dKtBjLvxcENGAyeuU5JMzo9KKwepw4F2RcJeMnheQWridapM",
  "key5": "3A1Sfz54jq8WEsWUY7DYuE7yFWqq8ooLyoxxoWGCMe3yVvMHMSGxk81iAhfDnhLDFnbAgJ7f4gVHzEs1xzb6FwzF",
  "key6": "23MfMVaN48917sRGMw8NXYAYudCyktCyVULPk6uLNdNq2cZ6RjVY6Js7iLKdeVqNKidPPvvUp8hyWR6TMbQKbtJm",
  "key7": "3kUGwgE9yCzFazGVfehY9WZFryje9AtaXDtC6k15ya75cP1GspXEfkD2mZuA7w26VU1MwcYQBZ4YzpTpAacKfxU8",
  "key8": "46HtyZKfEkDxSBujSBFpMPFcKqmpADAHYp3hNBfPDNJN1goy6VJiXE5UWs1JXzCABMwZtGWtP2osvmc9TWGNf8YN",
  "key9": "54BqgAwzFM9C6aggiF8q3k1uW6hYG8TAtkrVYdyK97S1kBXKJjw1ZNDhx3tFkfk28GoQtFHy6TqcrvhbMfrDn1WC",
  "key10": "5Mnp9h3WiHykMsHhL7qeT9e5NSYqceXftRUFin5QARRL7iKm9CEr3cHUUYRxTc917vAt2tgpHe5F5iQX9vJ2HDk2",
  "key11": "2yr7rCTqoRfy928DuVoTkYrutY5ZUrbC9wxYzWpuwFQkYGm8CejsnfugMtkvvuAzD1yV19WovbgvcnAZgsjmKLWb",
  "key12": "22WFUXKkKS2XgccV872go7MHTmqPrg5D7mJn25opWTjoFaEob64DCtw2h4PG8Mt7aYrp3GrKJwEA4k2bqaSsRyPD",
  "key13": "2wXKi51zSWY6172vA7hRXg63Kb73co8Tg6u1RgrN6Sbs6udUTHew7WVWK9qBZjBymKQRtfe8qxwu1SoR89qcFpcS",
  "key14": "59uTV7V32sU3Hcbr4UZATDfrDXwm6yCbHSB7tTdUw9PeA9Ej9ijCvRc11ESYYYUMWkxJg6D6ieqwzGDSNyMrPFsy",
  "key15": "35rtXWCTCJn3dc3ugwgjvBC63XbnEZMMmUkN9uhrS4tGGMHFrKRjKTgHE9pJvLLb8rshrkJweBmVF9zdZXRRJ3da",
  "key16": "5fS6MimbydgDSzx7mJoEdp7WDdBiRUyjk6VKnb1wSqs3HdhatVAEUZnBXtiVZ3eEG26w1GPv4pYbS9DpFDimozNZ",
  "key17": "47QWDn2LtApB4A32DWf7geV8Z6HXuD6taC5nBv5fdrXZ3RkcD4nZDJj6E9R1DHTjLMCU8jp2SRniB9xxvLDXWbAB",
  "key18": "3YNRXdqTgnYszCCt61THs13sQmSra9Zo3mNZwFxw9stefcBcBegwfDQE3uG9ZkA1VJUcvWqdPzY7s3Wkb3Rcv17c",
  "key19": "3ho18oA8aMTefdg22aVf25J8gxnQYYU39BEEPJShcFMtEJh4s3XfnbGTBHkUHd4vatD6ENa8vuQdcnbVLqAuUEEj",
  "key20": "2HXqsMF6hvFftshbzLpk1HDsPJ99WnJiuBEgwvN9MwETeMLMWmyidUVEAkwGhBv48hQepZhdN3uof1AhpDU5pX7s",
  "key21": "4Ng6Nw82pPgUf2pKiUj5zLSFk8wEvZzUqEaDSqntdtwT34yUENGm283uXFALRUvp4PQaHEzUh2LjndsQYUwQJKtQ",
  "key22": "8XGCoZ4YhtKTKnfpA9Kgf11TUAaCc6Pu8sakQQ8jPj7sn8bkjiCtmrBmqWCwckVbtadTWC2khp5ciy1rsgrWFA5",
  "key23": "wuDQSHv61x5aRGgydmkBdyeHcbDPCZZWT2zWDufV1mmTGXD5SLY5VvZDUVTBUortMUFfV4KVjbRieu4D33E5U4y",
  "key24": "3tosFmdMABfiwHAShpyf7CNkBT1Z9TssHrk7HL1eztdLRbQDBpJmddqFCGLNkfHe93fNBxQ4Fez7DCxyhpq9ozhu",
  "key25": "2EGp5aDmVxY4F4pCKNp4kxwxP6TJLHAUYTeTq3Qzjmm82pPQqFAozgeGjBCBYz1iL6Yn1VAZoiQLt65gh5s6U4Au",
  "key26": "UyzGEvWra2RJ8a5nwdgQp8GqMv4qfqqEWuMU3C35QP8BDuK6Ki5G3GpsH6ynjuThfNyFimmQVN4WTmzK7M6T31k",
  "key27": "5tmhTPeXtZmAFBe4qF8PyqHeTbVp7dkTXxVokTFUdH6JEFt168jGdEDQVKKwMk2sUAgHEMiV1ubvmY9mKCmaddS",
  "key28": "5ALn29oJiRTyKW2CWmXyCnx2NSHiYnC1wvGECrEsRz7VWdifbNGQZTTDTwsV5NoaDTnosx45KMX1QXhXSxDv6whT",
  "key29": "2LxLgqF3NCTZUt4DwnDnJkqaNPAdfjftwgBjaMZahXDe7Xs8iBzcjNMWrTXCAAndbN2mHLABo4QXYJ4mmrLr4izx",
  "key30": "3uyr52cyy6Fh7wxs8rRU17kc11MtTghwdywZDWCJdPB8T8U5URRJuxHyLMN398EtaqbSufLMePZKhMm41k5pBC8r",
  "key31": "4r443Cj3zqnDB44C3u6vzuZpAbqu56h3Cjg9Q4Uooomttua98Xvg9qWoEDU3SPamFLpU3vb68wPgQishKBCtXB3e",
  "key32": "4gUiyahUmxU5MZcH2vTExStYBzSDsDsTUt6mKx7NxGks2FFpbwz9mKTYoAszDroH6XMTYkPdg2Ke3kbk6xjZUMoG",
  "key33": "2u6RMhiBgepL4b5VavZ3gf9UGuf74KSir1WyWBnHxtNfJrZUwLYeBDbrkhnQgimctEJNa8Hpt9vB8WgH37aPQYiX",
  "key34": "57scUvA79N9v6VniXMNGposDyTc1kSC7NrFYYmGVrrqs8GktpqthtQ48zRzgdjcGsqhgkMzxgRarPedLkGHSynUa",
  "key35": "5178RavYxvv29bNB1sUHVNCMXVDSS9drc6mDst4Auz6Ez8PPNtjzoyyh8fwZzCYRQHdM13r1FpAfvMq9okoVJwuj"
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
