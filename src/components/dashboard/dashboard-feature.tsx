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
    "34N1GmrG41rkjsobd5zBrb2QDvhd789u3tEDVCbARebvaQsc9U5BrFSzosQPpr1wVhmYZGZmgVHUmZ72DW4C6Pm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cXL4rk1WitVciyDRcpEEksrWR6K4zfBqh6191u33sXRjyyqgXq8Di4bzMXmLL3tZv4kmWCvH6vn6r6Q3fr8XJM1",
  "key1": "3zi9WQ8Mhr3n6JgKUK3bra3qMNv1WBxbDGNBLca7G6f6qsTu4nAjDXg5tC8cQ7Kx7WjuMxiW8CP8xtNgWPvkHqAh",
  "key2": "2MovHshcPTDCkZ6MBwWpsu13VpknVNCJLgbtsbpQFPGos6LFR5XdrSLEsKqnWa3Y37zYbi21P87pohTKntuVfGno",
  "key3": "EMQX59Dt9GVS6jWh8t4X6oLc8XFaNL7WcWHeEUKM1gPC5puEzsLgUDVpfTVJgB7h2pR8ss9gVwj42iJeNaYn251",
  "key4": "5HB4zZ1HEqUkusbzweTgD4i9J3y7tE76PGazv9otFaRvWEJma9wJo6RfcwfhfTjuM1VH9J5QQZ81VrAaih4v1HRY",
  "key5": "3zfZrccyvhsDsAwKNuzwhn4ZBctt2oEjKR2PU2sLYtKkFoZkTvvuYtWFWxuEFCFHvKNuRUVWT2szh86AofbXqGTF",
  "key6": "jWZa5gzYSGWvyU1CDCrgteULRDevoziYZtq9QrmsdjeGb64wcdsz7ZbDRRqNVe7r6pvTp2L2H53NPfuD1aVT1pL",
  "key7": "2rpLRvXR31JFkpYaUtNjQ7aq7TthmL9j15JSkHMEPHwDC1ChZRkea7Lhjgo9JXtvmXyWDn61WKJuxmdxdT3mYnk7",
  "key8": "5wheSeRbNBoSm8Dg1jHBz2oEFRUSCGc7Gzk4JKL2NCjdGoWXdnw2LDkqh6oufNoptzTj3tdj1f1Gx3PETb5YpHUG",
  "key9": "4wHpgs4wLU7w9W48rdLSmdQpoxig6RX6aq7fjdYJcKtTwtHBEfRuiLf7R7jWU2hRpAireTzn6KVP7KHJysqwDY5v",
  "key10": "3b7mfqXrLGKtXJ1h9WPi9e9rxXavcufgFs8CwKHtFFPZew28zL4nXKokUttJhe9MT5um4b3n93GtpCLFtgfQaZCG",
  "key11": "uS7qTPM3STjHB6n1bFzrYp6iQVYoaNHD1w6sbWq4E5tHbYRgagzT6T8PzPrCYPCHdUpSWnVZQDZTeBH27SQ8NaG",
  "key12": "5UafkL6BgzCTFtVaZNM9JwRt6SyvsvJ53dAPnDKWYPhRfGb13os4nwJifvkMk5UQHdrjeoxDc5oefG2C6qA9dcy4",
  "key13": "3iaok1MU34kfqyzzdorwiNotWA16J1KKDjtcfEfDGgDpYCTTLrRx5qBzFY1PGWq4nAxbX93ePcvSPP2bKnJHrrN3",
  "key14": "5P4rxiCdogfCNStv8iq76SFE5UXv3oXxmKXmNL5WFW2HtRQZUWf9xeDCEdLPaJoLys8jbmZuv1FmkxDNRkiPg4nL",
  "key15": "2skxnsWeBHskRc6caZ1Bd9h3SpCKbttqZnBnp5xtomoR1axPidX6Lvo1EUyZWHtQ2wCt4RUha9BHm2FLKbcp4UKB",
  "key16": "4hJ1PnAmSDPUMpWWx9EjidfKVwVtXkwmubx1KqLF9WujHzDSdEHTz6FsdnuzNH2Ah5HJpXhcsoY4Loq4otQBRLfv",
  "key17": "3JYwCvR22BHdCGhPgBzinYGL69f7vSorv6oF2yGobjRuoBgVygEFoeJMLEucmksMxLFz2mCzZ8Nm3nexo7xS1wHx",
  "key18": "2q3GUoV7Z6pvoSmeTkkrjsXCTf7Ly9UWswUsbUbxAEaLxtH5fQpis3MxneTnNcPVTQWEeMmW862KhUZCEvxtScaL",
  "key19": "2XGBpG5mYTQqcgVRPpadvTR8zKTLfzuekRekVcj9xRdfzAryivzmVzuN6tDEjZDnuHMMTwQW5a5ng9rQQMaQ9EbY",
  "key20": "6JuGK34aibkZSzfcBrJ3zyBHNqzqUP7icPXvjtXE9ouBjNJMmGeCbSF5Dhns22g4h2Aijm7ZQURn4P61ETLng5X",
  "key21": "3ZQHUyL8C2gVj99v7FMzmgnLknd9EMk2cE1Acj2iKKtTSTRThi8MB9zqgW3EFpFjHJHV2JbCH1EvrfavMCu8g7NG",
  "key22": "4AKqoyr71UUGPbgxUDXZKBnMpjCYJef5JZ2bj9epF2WCoyCbrepVnF9dFx5pnuS7eBsKijeEJEqB1NHwGZNStj5C",
  "key23": "4KDSheJdmcEMQ5ZWLmGzTDBizfgAHnKay49QurvopzaYYrbWDXRPQuUBbt8d33Aogsj9LJt4nDtJX6dtZkqPUTbX",
  "key24": "4y3QpdADX8nTQhCyDZvVjGfgaEDkUBjKDPcgSJG1GchLjAtiZns3Vv5aaud986CmByLYNMdy16MX4zUa5TQ42hZX",
  "key25": "3xw7un9pWejeYVYjf6xyU92obzSGmyYyeY2A8CMaor5jram3uD6kjdN9pLkJqTEjvYNgt83r9d8wqV3pqiMFFVBh",
  "key26": "5AwL8joJp6oDAci16QW56YNeiEwaisFZuQ5wcz1pwQe9KWE6f6yWWavQ19UB112crn84gsNKaWEFT4M9EFhgas2",
  "key27": "5hL6dJ5gKYFqj1tkpnGBnuMnYBtpKNa9DnLZJJoTBFi3yZw5vSU1hRyhfwKjgDouMQyBF3KnZaUQuGq1xdER7EDV",
  "key28": "3PSUy79bZDLgrb5ydeShbM9pHFYDUEWoFaJgAwcyCvsz4U4XYY2SbY6mFGNZxJypp1egij22dyz98VwNTJ6fuUAL",
  "key29": "54Zpw6wo8pJED6nhtbEJMnCqCmKu2S1KfwPUaA7i8hbRCwUSd7tvwd5Erh4q5V2yChzVXVprRb5coYjCGVqm6Rsr",
  "key30": "4YPiimyoKTBcvaUMLYTanKwmrWh2EN1cTRTifqrqR9NJ2e8SADoihsAZYVkPSMGUAwKsetMiAjLLLQCkrQ6Yh3z4",
  "key31": "63fxuRyM1joMryXP5baVa7qemvx8djzGPvzQY5WF7Z4QtEQKuB9bUNBUgAaMSjMMk5TvaFYzGvy7GECPR26LhphS",
  "key32": "yofcEvALEZPMQLpCDJhJajeSriVker8hpUUUQcw3KKpAZXnQGpeEKPvG4TvsKmwqtSFBfNGJ6Lfgf7Uwf5fvBB4",
  "key33": "23xG5yNBSY6A6tA82EvMnEMkR2NYuvKErZKqsHs1ey5FM9ggJuQN7QYDWCd36gvpj88gLX3B79cVMeKsK4ikCkFK"
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
