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
    "394mkZgUWjodFgMwPhWNsuNVM8dAZ9HQhHT22RvVZEYpypu1fBH2pxG32usq4Pxj1yhE7HfGaDjxHH7dfPPTYCEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58VB7wDYff6UqHJBj83q4WPsPmguNi9c8poPZXQjnX4JVpqcPDghALrwHzEiBemcARBCvBadoqdzzxnE7C5uRYYZ",
  "key1": "3ckm7GsW38FKHY5deUUVSBDjTHGrboZ6grVratGtHVivg2axtYwSpD9KpUJicrbQFLQaTyTU37Ws4EvUURpGv7c9",
  "key2": "3tnuiobaKBQCagFbWM19UzmqycDzqkQdfWfN5dgkmh9fHvRxVNW1kSZUBDofGRnqzoCu7NLdNBtyMPjE9bTY1j7s",
  "key3": "3LxxAYi6Gevv8FfGhp4cpGXNbxNG6rLU3WWU2NCRDhiyUsKTkLPqLebegJ6yK8azkq694PkTnpFYifiiFCzJFpwH",
  "key4": "4n43CAP4rdjS6VCryP4KVRxUMf4HVETkWaqMGTiKobk5TeDbS586d2y1LvdGWp6BYXbosRo5gGNHL7TdGA2XjuFC",
  "key5": "2yPtV2eVDqBjXw8cunecdNNeyHXvCEBbLnUuEe65xs2HgH27hJQueFHn2hNmN3EswfqduuWSFpX4bGbT1RrW7ebN",
  "key6": "4Qt1ZYBievW9ytTK5Lof9Yo5zSbRC5PR7J71TpuRpymzLBRG6jFah3hTgF8KNGjobBp1LM5HvBzCgqN41JjyBbWq",
  "key7": "4hbGTjsgy6KPheTyxguE13KmKaAyD8G1KRnDc4rKdrTCjR3GB3bcCqiorMyoEdhcXFdMGLhiUJm1KbQ9uE8MjiPX",
  "key8": "4C5hV3wjNF2iE6y54LwDynEMAz2CS8JDwSRZ2uCz5Tj22XqcYzkZmqKCBewXZSdF6A3uZWnF8sxBfnpW2AW26XPw",
  "key9": "4UzsqXSYepEzXUAgmnwgfEys8WJ8JgrK7KL7WbDgwAE9jvAZdZBTPfqXH3Mihv4MHfEsZL1Knh2zxhpwrzqBRGmQ",
  "key10": "5ohnQSkrVkPRQo3KoVmuSt5hex3wiMUozLYpKxU28NufwYyTT9onT4VXDoLjsBn3Wji3vHBTAAiC3fnXLJVZ3S5C",
  "key11": "3d7eRKjznueqQxDVnP4QwmRcwRHh94nbkBQXYdSHymSvTJTuMCwNkzcXwN6bmxtdFTfWTvaKuuSshLv7WubFrQFx",
  "key12": "PJemCQhUJSuyYQAJKNR84DLMLgSoPqLCLs9FZcjsi1fftDTQgP6Pvv2v7qjuWNukRHJNGp388FbEhk36rnjFqp2",
  "key13": "32riwmwtpNdBecm9tGo8AgMXnEuwmSJGY2ER9fqeKZsKcn2YKBCnfrtNtsZD2qLavsCeuc8BR7L4BNNrQVJBrmh5",
  "key14": "3aTrAGjdNjsUYNkP3ZoyKTksAvpY5rtmkTPXGZxGhYnHuydm9asavSrU2P2vzmZ7QvvX1pMLBD349pyugL42qesR",
  "key15": "aEWJezVaqGzkQytrsg7U6mm7X7kwNK7G4cQ76GVU3VvchfMLJw93pKd7vMiJ7STQosLqXNjXve5gL3orui62UCm",
  "key16": "7KrTRCyhvj4d8f4Nz4APUavuYv4rAUqGe1nsFjqhHJFMmH7DRuvnW8WpPnQFgSPLTrX2KF56ZYmJjd7KjTpMbR4",
  "key17": "2x5sHVBaM9sF8DUPYy64uSzBbdqsKp32neGKT1Cx5zXMDjvSQ6ErRXWoMmSS51a8pkPo8WCDLbSfrWsbUyk1rA68",
  "key18": "38WrHNyWdEQJbPG3f4qQb8x67Q2EJ5G2P5AiWS9F1k6zRc1vrabzYy3mncFMw7tUDBT266MVeGGtqFw8cBPmsod9",
  "key19": "5bQkHRCsLkPgWTsm98agUvTiCzs7zCwfpjWKguEPNwDaJKCXS8dAdf9feV1QRoTiqUvBcwYnJee3Bab2cR1TktUU",
  "key20": "L1S8YxyKJWin7ooYkyxUGKzJUkgCq7VWEbDD9F4M11pamDBg9uDVsSyRGa8LxTaH5Gm1NZ4PxofmBMbF1oaxx2t",
  "key21": "F9gD19tbdNDt4dgTwQ4iHpYTNpW8Cuvgzh2A2fgqkfpzxAkU6p8zuNLpTTyXsJj5hQeiSd8e2CroYbhQ8HT2kwL",
  "key22": "4ZcJbanfboUdsjmiW7fTzUjzhUQG7n9AMvTsodHELnMa5Z4TWYbjwwv6WrV99a1kDXbekczAbacuBcAoRGAyQtTJ",
  "key23": "63BGohxktfoC4bMXS9Mo9JP5rtJEB7TwCkoJ99WVMaAUvwDnbT8mEgNvDMsPuRDFLfSpCEv3TcU8smpH5NWD6Mqm",
  "key24": "2XDQsGT5K6VPPKdABzuHTgU1ZfXLJhDW1PqLpw8b869Pm7v1Sbx5cnRTDm48nTm5euBCKVhB6PGXEwMGqiNYQWNw",
  "key25": "3A6RHa3ucfGNsEb63NJ6xYehSjWT78eJisVjtfvCmKKxwUMoCGn2VZw2aod6CdodYR6KwtFsBg6JdGpeG2WGgdSc",
  "key26": "54k4SeYhxm6FP9ebEfSGzQLMi6eiUZUoFo42i616K4hATzC8tR4d7Y9NMXb3W5ggzfXVhoNi9z7VUafM2AuQVFwH",
  "key27": "67CGowZqwyMHaK47PZyr5ji8dRg2xw6WhhR8GMTGmjEk7cGiF8fFdMiLeMNVJ7DTXvxdLzb4UBkPwQZnJYBqhjLW",
  "key28": "4ZJWUhsTq9dC4SXPqv7c2HJ9PMUfqefK33rV7yQTUNhzQGgbSug7gTsf5VumKehUngM3hVYyZZqN4K6EhfmTBzwV",
  "key29": "59n4twpZHHqw8gK6oPmdGyEqYWfHuActCGoU13GP8cyQPmGjt6LuTHgp5vHDaUyMuGr1SUc8r36xAPwusp5dJP4g",
  "key30": "5rda7xQbZWN4yFHutTWH3d7e2YQvAMxpQovxLRXowrAfLQWBsuLNf3heM78JMSB2Lc3HufsKZRWxFz9AVd7vEFgH",
  "key31": "VpbT327NhQRZY1hmkHDet22hYwi9vYJUfE8CTXYEEm38wMN9NY74FUE59hch3nsRUwzfcxd8Xd6fFaTc4utqCnH",
  "key32": "2PsYk6ihBwtGjD4w1FJgoJtRxmnBHyzKr4mpouaDxWnQuyHZaEQTC9BsudweTwfvCYgiZMjiAUCssnGDNiy5uC9Q",
  "key33": "2zhqWCnHs9Yjw3ThtXW1xPBHQJuNh5UkHEYk14UNyF8896xRt9TH2yJL7Qo1p2BvEi2JdeQqGq6nAoB4S58Xv8QL",
  "key34": "mD8RUXWGHFWyevBY2VkZszMpiQ7hfHTBYb8nahUoPvmPMwXxJxCENcHP43wkQVyhK59ehgidrV73ys6gJugrmsw",
  "key35": "36J7U7BKTbYUbpGbs9JSJXEhg27RRZm1HDK98R7rhhZaHWFt4kWc1iSb8sjE5mnBGKqmc2tziQ7R4RRnqL9aejj6"
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
