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
    "677CfAMe27bu2LCNMGx1gFuAewiJa4idWAvqViXPUMmaiz4ky9DiyFbvrRUpVFRhSu4abWfdUwt91cbDeVpJPUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51KLexjKuRz5tExu8TSu3qAj3LxN2LBFTtAGTyV5fWPMRS4HwpLUTt8N3sH3H7RJiVKj5QfgNMx5RyHHitmr6PQS",
  "key1": "4Jf1kywrC9KoJhwXwtUZqCSqq3ss2iA6yoHUtYJd6nDUNB3P8VDARZtZVjW4moEfWP3vXKSayQqHDXoV2E4Lc1U6",
  "key2": "JsGBbBdyYu6zotwESUuyt5SLVP7xc45jqHZvCHMNqftsM1Jh6QWvW2qq3cYj3ReoXx5DQAgZTa258yL3ocV7Bqi",
  "key3": "bJtc5umYNGySpJLTkveMfjdsUZwX2YGGvUAY832SgGqJsgEtbM1Dqooo2FGQ442SXiUzAHzBeqsGsDtjBkGPKHe",
  "key4": "36ydJaePg7fx4sShjVavSvhkpFutnBbRTgw6v6cxJ8EfsBdtBjA5ybn5AQ9WjF2mzNCP1yt7oNy3EswuLFo3Evyw",
  "key5": "3Vs1MLxLFPRoxvfaAan1Q3PPZWjsEYDrkLvnKr74Khv5QKbaxcq7s2vuXLhyDKtscYerVcKuSRnrkhNaKWtCCgEL",
  "key6": "4WsnKnf8LiqhG2zcW2RDJRfss45gRjdUrq7PTNmTPK8LNLcZpwc82EDCdShUDaYsV2MnJvrmNAmK6WgdZESMXNr3",
  "key7": "5dSkk3pSG91xanSPQWHQzcJtoEVRvgC2RRs3qgbBxEXe5LZLDrTNEaAXVf4eWrmD9r6jZtjLrideCkx1BsceBneE",
  "key8": "5gfLtBC9T7feuBijxw4erPJcNADzLPU9Vd57vtHe2R6WjHGkJhexbaS55ETh8CzmbzqwAk8sPmcerCnGst15Rz7K",
  "key9": "62mujBCUFe9cHbJvALzFp8oH6ZJSD8qNALwpuYwVpdgNR3KXEpN3WZuCKeFJ9s7msqGSqEARWwVueAbk5ELXo215",
  "key10": "MtCQfXviZLLoQUbg6r9f11GsWZ25c8XL4iLnJ9hHqvfTuj5HCSiyEUNcbA3dEA4fhF7RZGDUhvyXHkpQvYUVv74",
  "key11": "5K6e3Wt8u2bSE3V4AYcrey6c6SgwLwFraWieyBisP7ETKruDQNFb5DmgWx6vioL4SwbquDWMCEuEST6JCEgiRHjf",
  "key12": "5fypRPnMXEh6AQhkuhdC1aqwsS9murvZcnLhrXDQbE5XzkdwWE82uh2i9Lqf5M3KkV26nLCi2HmtL86NMvjuzAMK",
  "key13": "4rC4p99iSWu9cZV3toCw9TpbvdhDsGZi17kEfxuxF3Kb4GZ7RtivPqWji273nEoj8GJecaF76oDnnMPahguZf4fX",
  "key14": "2LWmVL4RCXp8ue6JpxEkpUfhPu45po1ZxyCKy4y5QkAaD2GfMmLb4dE3NvoRkHyxnSK9b8ADPGBDZYrRYtuKrS1F",
  "key15": "2NYmcBdUmAWJUccMCcKPTtof7h2xBPrnfCCQmpB5Yx5FCaryBFQ3AyJTSeoTC3g3FGy47pBQ7ATBoewMk5Fm5mvf",
  "key16": "5svwLFokMvhm5b56G8TGfQ3iGxmseXRexwyV7hwuH2KPMwfHcSwjWMs136W5vxXocdoj1RdTYpfX4ANhrSGr2izP",
  "key17": "2o1rwDdEQSibWqDhrMNJzymPMPXoBmpnHFSKqJkbQBqh4DNAYuqQxFpqmy3R7wLKFAybJbXWo1FFoB1MUpshuMz6",
  "key18": "21yjCWWnBWWBStfrHvocpsRPa1SmgivBNEhwuas2eFZ6hRvSWEv5TYzMcxGMiCLybFvg7MzXkHeBmBFZLELyGNcY",
  "key19": "5ELuD6uMJK2SbgbXe2XNoD2FLW9e7qTNMWiWvMnSGDQGL3PodmVxfay7qvsUZLCLHQmAH6Hp7XjW1EcV7iFqGmw",
  "key20": "2mcCkZdZudX2oxEM2BtspydAr77TE3wTiheYVPpjNVNx1GnAc8B4BJ66dynRtpjefVyuYsYzqLJ3pbRn51RDQ86m",
  "key21": "3JpyafXZtMguSTqJ1VyxnQWi5UBqDKCGspR3TN6exBVjuXvLNEJgkVTqqZcmkvbGnwnDiQjo4VozAgcBuWAPN74T",
  "key22": "31GrqoC9QmG4qYQPV4zd2KaBvbVrmFzXPbFvz6W9HekwPWJAfpyF11b9xUUpWNTkDs3gNLq9x4G4U6wKu8SWDf2u",
  "key23": "31E4Y5qQiqkCFgHFTrcLbNc323GP6f62PCPXnP5vSwsy9fca4xNdCYGXSycV6CYLeuPHeyjMi1e1LRBoP54CKn53",
  "key24": "V8FZz5PW9pos4YP1si9W1M93cgM6mUUgbPXKRGdQk7SrAs2sRWGuHvp6PiHgSjw51db82mQKTXRtrsChPdNoJQf",
  "key25": "49s11XVDyjrTPBsYcDeYeqnZTCSPaFEecjKEpjMXsdtTDtC1JEAhmpCKDU4nJwaCYHxgrcKSVw9NAETv9KYiLnkj",
  "key26": "24zTY3andUmWaXpWSh1FY5zLkyrqrPRgzUCtigAGG2CMCDwbJrfz9e9FfzpuJQYwJ9PBE5S2XhUhTXY7ZWPLiDHf",
  "key27": "3zf8K5zXTQfCVWxYQkqiJZg4GrRDEivdjk9UcYfpYa3ZPwtZsh6Gp1hrV7QdrBZQeyZuzXBNsvgabk4EwiqxLvss",
  "key28": "4PBvwmVjJfWNu7piCWrcEwgW7HbiemzNvrC9MCNqztTHXkEx3JbdVd3SEhDj5hihgwMFRoTAQR2TJU9Dj15X68tR",
  "key29": "29foJwhkUyq8Ss7UKDDHYvR2b4F5gaaEEps2FonbC62yY5RtFx1i8htP1BEfx1QumG27bh6gtsDHDdoHPUP7covx",
  "key30": "29DYYVZnRS2UXZ2dFanq6Kmoc9g5BqAo3Mu76vt96PgnCGkZAyr8c5gCZUHgMdZDUEhSQ4S2MdXiG5emM6zqfybH",
  "key31": "51D1f3wvzvGPWtxYxY3YRDEEU6TLajY2jVwaPQasSTMaA68nN2iKXwM2pjLAyh6xAEGisVuBoFoGEWgqs8MHJYzS",
  "key32": "2buxRVnF2v1SGG78sJaxHELxfse41otYBvLAAbvgF11GVPHETF9E7Ew9nmdhuSkvd4HM8TueJXzbKvAtF6Po5SwP",
  "key33": "2dRRgJ2snUgQTuRrw8h84DVmHEMroparjNSK1mGJTrCCXwD4VgHYiHmsywGXHu2rLQqEr3jNdU1bxBRASS5q8xvq",
  "key34": "4RWKF2P3YagbYRDoLasLMkb58fcNdpo5ZeonUQPqw1nCzq4qZJduSfXmE7dqxqEZRegd7SAUr9mJjD6vJmWAUMev",
  "key35": "5Wn4bDLFpB1aoE9ULeWxoaCat8b87EQgrFdA6bGgGmUNoNDx5QQQvKqnwfMNk1t8r1jdQsSKU6c9BoybrvwSa22M",
  "key36": "5QNrw5LKwPe5DGxCbt3kjrAAiKk4a2oHzm18cjgcSBhQ6k98HLZoC4U8HTnrR7HsiA18kS53fph38RqaWq2xEePP",
  "key37": "3UrKcsqcF3hgrX6sZ3RGAAiytAStAM4Jdn1UFUvKpjycucGTaPnvtTV279q3FoPGwMZjifft2XZkbNQpGxZFVKwW",
  "key38": "3t2rHeKAyASxwJUHi8BpZeAz2Lvufg61YpzZCTkjx3PiEcW4aBzLsDHPikbQeWLCr8pLjVSqW4jM7Yt2LJMmPZWY",
  "key39": "HT8ZdRfsx5KBvXi8Qq5zbZ6ywwcGdLRxHBhpQ3ResTGuUG7LSrhryuhncrjFJq61RvDeEfK3kmDAt4VKndYC1Sz",
  "key40": "66omq4mqaxx1GSZfSgTLsz3is8ruZmG2CZYF3WssHFRWwBRDUSxEeG9o2iXt8aSoXrizuMszmA2gDkC7c8KzZZ88",
  "key41": "4RL9XcJk4EChTk3iuqWvFWW6zBUUzRxEyiZF8zQ1j7k47cdXEKWFfv9gj4dtsG5Mb2KQm6wtE7bNqZ2qyz7pkbma",
  "key42": "66mn47wnzp6g9vMrrhGv57BoDzDtE3RB5JvJoNrA8SsVS1zJF3Z5hhocRZYwKQTNywSqNJhnKbvMzLb4YiPgss3d",
  "key43": "65v1VRUz4a61W7J1YzoKmgm2eSFUAW6zziqpjYwecTQUoMRcuBtQWR8t7bZNUpM9FT19E5kkmsurGARFEYaawjWU",
  "key44": "5QuUichfSqQhFVZyUHz8rvfLxMBtdZEKGjNov1VmvxSAZJNNeT1AtorshDqKyMPMpWjZ2Tz5P9tUeHkLc26K6bmV"
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
