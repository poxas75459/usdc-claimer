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
    "2dB5E2Wejdiv4KP1XoB7NBFWoTgNSm79eg1dwuDpDeSiNZCJXi9qyjTzXYmuXGW3tgy8kTW96bVe6ArDSSRMoBzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hb4fTKthEE3KovCwN4RK7qdqeXTwZV1JuhCbsuXua3E3G4ubxHsBmgXELwPAFWoNY6coToPHGtNLsKpFfcjwS8m",
  "key1": "3u954mZJHM3t4AutRr1A9AHrZZkPgmc1onfNBtbEroxUEAG3LffBHyhZQ1YmAJLQRs7T4ERFhERw1QqURqGDhXMK",
  "key2": "4Hp1AeChhkGLQzXvjR2tT7bUAheV41yYUGgsYwQboz29nB8w1ALLBHhcps8JBo37PvP4RsHNTnbuuPuMjjHxa69Z",
  "key3": "41SF52jL5BaVgtkviW68NmTBs6PSWJNELzmq8ZWQswP3t2ADf22JJLEHc3DriyNCbvQHaqgk3wEgxDU1AHDsL5yv",
  "key4": "5pPpJkzynczeTqMyCqFPaE39aVz4dFydsfrnCkWo6xn46YkzJqPKs11kt2VSvTJrU1pbjcvMMQzJ5nriD6g9FuEU",
  "key5": "2NcUVqrVAEj89jpwxTT6MRb21KVSzxjHe8LvXcRL6c4poYCuGkRCVAVmArMioCHHLsFoEWoiwoAba2aaX3LrTgiZ",
  "key6": "HLHEfPSqhLzDeJmeWrCmwhqLfcSD3Nm7mXSCLwk6pSfnGJWEKwqYqGxdhuken5phufbkFMPaMfxjhCtXbk6WA5h",
  "key7": "59N8Pu5LU9AhuqxAFDHz1qjXsySrT9DkPSkLje46HFXcM6cj3MDR4HH3dMtsgu7jtLdUpJP7yMeCtCQ6qhd7fzi1",
  "key8": "4YNSCKunzbUGYnsqy9kTZEjifFzhJJiVwZGeGGeRV4hZvZxLLrUiqoAcq6vt2amc8c73sE12WRBhsHJmzTKcxDJ9",
  "key9": "4uh7ttoz95zLzy9NK5Mvx49k1y6gBesKBUSC46tz9Mz1bGP1gT98SMTz5poxQxGXeFjxVcpDRkdbGin6opNqspkM",
  "key10": "3wvdsxw1dZB9rtYjDYLNmgQ2zEVNg9B4ge2JZZv6hsuy6Zjd6vfSPRUs1HKrDaA2htUpZB37RAmMccXQWdDDaSgQ",
  "key11": "3q1ZoXNAiAuQYB5P6bRu3rTWcqREFPXNzrzbqtz3Zd5TdBPzugMXfeqdHsh4ZGBV6jwX4QCmSeeuu72N4mA4GoLv",
  "key12": "2nqKZkeMYQ2xqbczxExeRwVMgoNfyGsRpJPjmDPz8PYrS4MFEVbcu3nUesBsS5AiEiry3cF5G5vA7kuWyGCpnprC",
  "key13": "3VJEvGENX2eqohDHDBCk5GcjkLyki3E3qKobsb2vB4GBFLtcmLqceBjbzadFLhZC1U9pnYsxRMchmWy5rVMZhGmL",
  "key14": "S4SPQftgXBFTNE7QKGxUQgiK7BhSd5GRTcFTjxs15ERM8k2vSSULPRq6EkcdDZrPvYvwA8F5Mn5JUpjVMwNK2nF",
  "key15": "2jF5Z95jFkzGdrbYmm8W1sd1cQx4Yh1Q7jbWRkEsbCwTtkyNH46BBh9S1AEvpunt92UvDk4aa7fZzjf54VBQpqnP",
  "key16": "PAEx7nBFn7czmxNgMSKA32bKHvR9czCifcRusQTwuxrGwZLza3eMzUf4x8vq5xLn9HK8drfzgqWYW2Q3JBjE46F",
  "key17": "3jWUs55SKPakhiXbRRoTAicsYRcZnGfYDsCzLzDMN1qofYn45X7N1Ties7rJq1EPW1THp5Vv7ocTPUXtG4cCNYYR",
  "key18": "3ZhE9ZwbMbPUmmzFbjWRGGGh87hNAoyYra7ZZLNyaMVUgNz2qgxdfWdTUhFLQs7iPcZE8T7HCbnPLuahBVYoxMUm",
  "key19": "S9jk7p7oxD51X5VFi11eZXTQTu17JoHnLwwAiEzwrvgnWCNVrhupMHvkQFNUEk4VisZ6wwao4PRZyWSioc9VtgN",
  "key20": "35GGN8yzSWEkkTHktBdHh6rijR6fC7fP8GYo6hTc5GwXg9zBGALcbWkRSPawicdKLWP9wuoBUPUcqZhfcU5QXPtV",
  "key21": "3UiUQ8ZAm5C9bwBmZpBuqeX89X513kFq67PiFoCeorLjLxAwLpfHtm44ht6jSAaDLXiPpBJtUDxu3drtbVgMApQv",
  "key22": "3sLXur12AQ2pLmAk98EXdGM9tH6et2WMbVr8aBCEKNFg5sBgyGxQm39t1jGDt957hK6dBJhcj2bDgQPUB5kiTfky",
  "key23": "4DoDfRsZ5xdHiRQQ2JQymG9ms7XJkdLtaYzy9rqVyjpGsf1qQxuef91psAQm3VrhCGraGMzzg9ymPv73M9h7dJPS",
  "key24": "5HpAEkMq8a5QcD75HPvJzcKSE6NzyjQ7UMefksWVAfN6R7mFyCRJFznQr6jyrijVowHaM2Kp3V1hRktvbQMXLcG5",
  "key25": "23voNsAtPJNhZQjSNEFwBWdcAZDJwgKwxkCShpmEKGkaN7y5fwExDuPEwVMN2EReXv13LLmUXqquC6RgAqCYphgk",
  "key26": "5E5K7pZaDr6r99r5X7TzTSR4LGssyi6A3PZCLQTTF35iqBGp7px3mQwjSc34ZweZAS157etggwTf9bv6HLjBcxpK",
  "key27": "azFZ8oSvuaHS3AgAYyevMGQjZcV8xzXKSezytgNfoZLWfCyqdb7bLAgutKruJwxqQQ58VbXbehmsB7mh1DKMZgG",
  "key28": "2xAb4yEtdspEEEdKVc7Jpb35Nck8uFmQNAfsoQFSYELm9ek5s5MjwwnZSw31fhMALZiJj9aszoBjoZzepPxs9D1",
  "key29": "5nPeXMxFCHCAe4Awiw1TkDBbR6BZXHRcJ1DHSKKfFi4pviuSgoZ5o4fhYjondXnqHdMKrZWm4Gw9aTodR3UptvrZ",
  "key30": "2e7aWVcpTwTQkzj7Z4bKmWd1aQHFGAf25Q19oaRuCNakDqddtDiidBvN3vRcQJYwbpXx2XmyHzBDxRtvqswLF34o",
  "key31": "49uBded8kz67ERbmGhqYtxZC38hg8kNVxshMp6mZWD9SjCExSN9Rw2PbaWnzrpvtbmHyoziP6qHQRap1txmk8Yi5",
  "key32": "2gDPMx8wzrqXUtAqxfN99SxxWiNCdwNTxWwVx4yCnfoikF3P7ENHvn2YZqPFdSMoLtXvprAguKhWpFbrU5DMWhJT",
  "key33": "GNKagoFqSbvmuSiuuRdTnnQdtAEagv4ygquFr23dwwE3sr2P2pq68UkL8YXKiJAXm5iVHukG77PZguLvUyW3T5N",
  "key34": "32BEnjW3W8QYuNBb4We5ARhGHSAfpysqBxuMsNJj1813LzujqrkftjVXh5qwD3xeTJeC2nL1BQ6KEewNsHZgTyrp",
  "key35": "GZARrgbhaoPMJ7auNKA9jWHBKH9rnxzFUacXygE9FKEgvbGEp2WtUhbBSUC3CAt3yFszpvuuQfikCt5fDPAAVVr",
  "key36": "5WUFsNZBUbbP3dL42R84PraxKkcmK8kozmVRiJmj13skS2StMgdT9F4ixn4axJzddZtN5i3utP68dnNuApaYPMAq",
  "key37": "3aEBYbLnYDuit832YxypnVmukx1ZyFXuqdfviVXTmqbhqXTFMvVJyCiCqdUmvVSssUmv3xX87YqRctQBCdXEKLjG",
  "key38": "DXzVWD3Uot5jupKQhRbuSVvoVPyV7t4Sav7SbQX4WxZSxrdxtXGznEUmjgJHQrh9kWJH7J6Kp8uzMyT98nZr1B7",
  "key39": "kwbzgwcTsqwMm87ya1zKoYcYZtGyT5ZdiEfAp8gCzkmATacriESag2ZKnpM69VpiCGF1haKGReJ2QXh48YvEbLv",
  "key40": "3VYr6ua9iwNhtX6bQaCCmh1TPSeUHMGauFcz3xYiDGSD7cuucSM5MKKmYnjJy8KgGN15ahEKtJYZzH1MgE4epQEd",
  "key41": "Jyei1YQ5yQ2o7jDvVoVqZZMAy7vjb5szh1dsuAX6HjRz38QuNoEvDcSW4nVQNzymrsXQbn4BvDfbpRnfPCoj1cv",
  "key42": "41nJAfRqgdxsAz7CruKUCxYUQeaxbgahfxPjurMwxK6pXgczPy86MDcLMo4ikGDiqv1uCungTUDCmUQNdJKoFDuf"
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
