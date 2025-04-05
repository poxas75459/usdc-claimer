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
    "5uBwa8Qk5SrSgtVCoLzkpv7kn2jjSSsExZCuHQU6ZLRxuHEsXUkR8Dy2QwANWiTpX1oZ2vQMhsErn2kZrUqWudEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ebmaSqg9HHGWetuyW31wfknZ6DcN3w46PKa7sGTTn28Z6iUUk7i3uVTYEFb1gWfow8GiTXfcMDyY2BFtDPPnhaR",
  "key1": "2HHS49ZE1JZgPjTrUXX7MnGXzwgKbNQy7DrAzjocXJMPsM33yQoTgmVqWZCG9S15HnsT6u55ksZjk2rARQdUJvR8",
  "key2": "4LcMGrfoFCmFUUEwPzLG5vRuMM17mdncdFHJKuPgFSmw25FQDPar4hzrhtWF1iaonRV4SdVUoDAaQ7knzxu7crJ7",
  "key3": "4o4EQCjDg9N6WGnqECVYtHNcvAikxcUqK7gwkTSWKsdBaTjU9f9o1YPBacERnbKVoQmMQtkKaiP2Lhg6DL5Nu25W",
  "key4": "Lx3tYPusYRNPKWCrNTgk1c9KoZ2CNKUNpxrGEKRo8Paot7aSUonqag7W5UDJJPP5Jrq6RpK2XxLZnPL9GBsSRZf",
  "key5": "3gbZ9ue2tiWGcU4iPnGb5jQK7QgpwfnApqhL5fHmLJfh1qpVenoMJT8z7dXtuQxUqUM7eeSKC5q1ZcR2HQxmA1H3",
  "key6": "5DePRcjshH73fNy6fyez7hXMDjLJngmGTAJjeHLWzZCsJJxHVec5GGWJJFD8MwKVnfmCkrbajTaciBiXvRE8iEUY",
  "key7": "3Ngmug3x5aJRPrUu9JJhJqTvVdY8F88qNQgYHNM2PBNZVPerqueM31kdkuFTBoTd8WrtmV98YRB3S2UnxzyUqPQf",
  "key8": "5XKzTWvLUbaRhPwUPeGDHnbPsRufAv58M5CS7UV38dHBwwpA2cghS7FXPUQthuB5DCWfkqdjzTVTWMnfPkABgwjn",
  "key9": "Q9JQSRn4BDkD6j3AMKG42y3bSUM5bM6YUDnQvFxNZQs31yx23tFQFNtZLwS88jLLWrpxSCNboxRwfQHFfhpmthq",
  "key10": "5cxpXkPm7iLiP78juJ7j1531zJDSgzMLKLoiByetESYBcGEVTnht72doXiP1b1qc4t4E1Lr7pVi1SFgDJmA3rfjQ",
  "key11": "2kqtHbtDb1CX4HGE2DF6AXNMuFH4R8Pgf5V54Y1pyzi1H7TKJVjUYMSZsoY8cj6RtGC1ejjwYRHhBxmZocAGezKD",
  "key12": "gAGRPvbWr3DtcLvatZm5XdLwaGSzuHBZoRoeNxeWQe4vCeNfsRvw13PvC3m5piSxs6tZUiTpJNDzDaqfjzFySMb",
  "key13": "29A8hCQ2Npy6gfprzZSZxSaY5iM8ipNgCvajEYeMxEAcEaVPb1hM2UmCrMtNK9j2KxtKL4dkGrb6Py5RpQYiXpCg",
  "key14": "5RWUL3w4ZtGFAyZcVeDrFxH3G6Ded3GRBQPG4EMPa5jhJ4anAiXTeGkBBfRwGsJRtAYhRrewNheP4JuWoDPd6Twj",
  "key15": "4VMej3zzxf4qNXwuBhmtUao2Jy2Q1WiivoEcNwN1NPPr5BKPBKsDsGwBzMpg45ewEWXyezA3tefFtCLZkhuWL7AT",
  "key16": "4uYoTzYpjn8jQBhwVbxsmcKNaLWGmJGZaGtnn1oFbeCp1rBJQa7ooJQzDa9BQ1ejkW1j7H9HYaLf6RJ2hsHdJnc8",
  "key17": "2JihScL83zs4xQqi5FLZYzwCxwri2CASWBvoqJEk5svJ6ZVYygmoNASXGMQGcMz8my8v4nKtA3E4WSQHAVsvpqB7",
  "key18": "5W8gr3bRjp8mDAEKEtJaTpDTUirf7KUDa52FLqEndxkVjMu8Ct7NHYGjahLZoXHma3rb77QUc6AyBz3kVofpzwCG",
  "key19": "FU6inGiArFJjTeJG96DvprQHMTRFcaa1kX9gcBuwgUP44GbGp4j32QfNPtuumAFnJMTPZ9hsBsrM3MbuWhdSMXP",
  "key20": "Pt76pfauJKiA7X1DG6KgBPD1DWveTggf6yfqHBk97xLC27qWneRBByo9M1xLSsp7fh8tUhyHUtrJYepi5h6nS5A",
  "key21": "2E3TicqDSk3KtGSVDG8BJHuypoeUZpWHEukzt8CgNYkCXZ18Sm57wn3NiL3meYtfAWCuoRVhxkXgZ75m5gLXfCpJ",
  "key22": "5cH1fhbMRK83LeYiJT2huiVKi2sVywGct8Zn33qmKGmW987qZBjC2ioVxQHKwCiELsrew7PFZYTfdQB1kmnDu9i8",
  "key23": "NUeemxpLd97TtRdR867jpb9kvkjz2Uv6jJJqziZvjDFr8687uVsrU4ZjT31RkitnLyxveZoFHQb6DvxgrTyFuRV",
  "key24": "4PkZEfeFmWVyKtZkeD1kTv9GqbcXM2E7qHcx4CS3tDATHLtGwjeW84bATNCFUUo7AUSYbn9SVeH3p2LZ6hQhMN4W",
  "key25": "5sDK3WG3DzVGYFqh25s993ahCeCrkZmrHKT9LSkg7rNQ5v4Wkdz6piuAd8cMXFUZhKCnToZVcZ2RZrL3RFr9oHJM",
  "key26": "uwNhe6Lpou4iqMJGfwkeEfSvvN2Hdfg155GM31T1q5qFv29zfCEwQdoGDBKQSVCgj9pB9LMMQYjWF5M7RnrkQFt",
  "key27": "39E8vzDZw4qTQRCQq1hBkGLhypRVHddYRRdPmFafTe1uPCC7Ch7dNdGi6bwPGGGze2uWDToF1d9wGZCN7EfgFWTq",
  "key28": "31aaeT94iZnJxYZzAgz3HVTaRXArYZJRuxbLmVxaN6g8tBdxYE2gMu4BZDLmnKEVNCK2tjRKKHQyEw6FvS47WcPL",
  "key29": "3Sw6PUQgHvNtb8N5mZ5QdiduZHSa87ffDv8iEqoNSukH8YUc4AuziGHMuyxNpwdS4HVdud9nfGPhuoP8nv7BXRtm",
  "key30": "2TW6sv2ivtnF61Kfoawxzyrvu2HXVqNh1RHzBxTh6PfwJnA5ayyBk1FGrfvabCoZxtqfR5DJjBvD7arZ2dVzS6qY",
  "key31": "3CyUH2XTMazn3T1Cgj4ckzeGtoWTuCFhXLbYonk7oKcqzmpQuunhYGScksU2c6dzwfixsDzdAARKnLedYUTQkFKH",
  "key32": "FT7MhCYQkTTPW2KPLAMjLnUBqiQeg972fH3uSiSi3NttHjqvsasnLj53VixekgGkCKbKTTU21rzLcRXwxgmChTp"
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
