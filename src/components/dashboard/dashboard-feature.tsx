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
    "4Kpq2B2ZsfQXGrrPsugSrABDEpK5WPYNpUCSVgV3oav7hWcmK3sCVgxmvH9yvfZYCsDMhaFWPEm46QiUQZ4ekhcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jaUEnHMftjrnTwtv3XmyA3MqJdmfCrkFBWrDXpjyRCK8824tqZuMrp3qQy8rsfZ1HJeWLiksUbB5oqZhWfiEATQ",
  "key1": "4Jz7bw7zERUAUb49wV53vfSZjhLsaYpfRmY7jYK3txDwaqKhdrXhSbLJPrcKP5CBH5jw4nNUNSB5ya95H66F5Xbz",
  "key2": "4scMtbzhShXEjasCSWXyzaWBx84ge9skmjRUA4BWzcC93gVEpVSisjLjYCjVKqFu8Qdg7aVRzZCtTDqwpojkKAxc",
  "key3": "ZTWhfoNRiob3592LQaq6UBgv9GDoVJtvvXPVm7Bj8vLPWQbm9m17fxdyBBNQKw8KGfGkVh1U6pgxccJtaKmUB6Q",
  "key4": "2e4dcmByU3Yv8WkkL4U1uZY393UqQ4z8PTgisz5Xyn9dKT6SbFMdZiu2q4vzHvbB4A3gRHoRyWKRWVR5UoxqoYMR",
  "key5": "57pP1w3qPwojpNS7akoAmoBNjkaVdXyHsd6yhcteGJds1deK8g3rs8Kjt8VyZodLFgC5S1zGexPMGDxwchkhPs84",
  "key6": "5bzyTu4r8vHxmkcQ6i75irjNYuyfTQJVNnZx9VitqUMGPuvUgUSxdP1Vk3FTcjePjL9PtNDi9nAYuGmegykAWRJo",
  "key7": "2M8psf9S7ddSm6HrdYdMCxXHLmfRucmj1JuoKet1angcnd9mtMpgUEp6HbZvFMnnCnVBQD8p59JingCois1uT9xG",
  "key8": "28kbYQY714FYS5hQVDRCob9WuvySz8BK7r2u7TQnZqbwiStUMwq9UkZV5tynLSmpBDRkxCTEGsBwkuruoPCw1qaj",
  "key9": "uewQVvJkJn9iWZEfEttCUbFSypBos4jmCaGu6dLzCiet3aKM2SPanZYKDn6tFaFjJzwocajqyGdczgU3gFxVZcU",
  "key10": "W8xM8o6ecYdUVfQsr3kNhQcD1jzQkTmfyhDBNxrAdL3HrhH2kqfnXnDxF2kWd7s9V7ATR4iWyneQm5q7seDvRRp",
  "key11": "4kEuitfRpmWHx6znBBJGfURYN9kktur4bvLQ9fVbhcvPzodBMgJ2TDENQeUfUi4aiDSvr1jC54epk6bjtva9hvvU",
  "key12": "MYNZWMGdpBeM4hsSEnJcv9PqTkDrhBocqt72iNAcCZGShUPPNYW1iYcit4DvzEWDWHM3bUmgmSeugFEXkzZCH2f",
  "key13": "3etig51cmnwn99vZobPWQyjfFdkQjWcVHFtXAL6FyJ9K5NEDk2oGbYUVGoN7qit5JWbFbeUwdwREJnxN6K6UWUXf",
  "key14": "237tr43DKRQHr8MrdQ7z4seozkxsvwMvmuxPG3XyNivv17DeWVHh9TYMV5Ls2FzHCk4K3ukUSiWUAZxpuKjZt3rM",
  "key15": "2PzFG7baQxnv2JgNnbQwF2y73PD8sH44k23FspRWeScU67yxGboavT2hzEh4FgRXfZ7Bi1c3JDKRUNUPu3fq8SvE",
  "key16": "3KKDbpqnJFXno6duZgeXz5FRBDX9MVX7rLaBdwZPLM8b4uXbCyF2d4sQs74MUkFnKGgkoXY9CKNoxV7ZnNwW4rFT",
  "key17": "3BsmLCPY29aedjTfT2oTepGqtnaJboQiNk66wLsM4rsvKKj3XxaFgDqhnaYkCozgssBdWJM9n52VoM93Eqiyx54d",
  "key18": "uSW63XhWpNJrCYgoB35u7DZva1MS9Be82sL7DW6o48FmMC7m2qHWL1nAfa4Hxg6nHXtJGZBg8wfai4ync4WGT8b",
  "key19": "2JwurzsDBsMgmkKJKqAsRbaoC12i3vhHi2x6piemHwrz26SXEVkP9Ak3rRbAheqZUxkWbVxWmyh4Q7C8AuRDrxTS",
  "key20": "1BPKja1o3RP3TW2BzaQCrtzbckXRA7fKBgkdD2w6wAaybthrqmK9g4cWbosy1EymfdHiQLVttz8GiFwiQzyQ7no",
  "key21": "6iKxEwhLH3vegVtG4Sw2iQPeWkoRRLuTkrBfCQW9XxoQrP3NsTpR7TzcHUje73McE5KN44a2jRiCQh4zLCh6tzW",
  "key22": "2nFdeDE7nVbEqiAWx7Heb8QWUX3uJC4g7WMu5KuofcAgAkZz37N8MEkGWggHJkbGQNvD3vHGKCRyeJ7trvwF6dxM",
  "key23": "4sLZtPZakad6y7q9vjFJ5tmiNBqP69EGbCowjGrLhJniNeuoTzDMq4zPU9QVUPsSwHa9Fk7aanzenNVGA727mFgd",
  "key24": "3DsexWcSdG8W7nsUE3EpeRmREkdx82so5aNTtEfYTU7AoMEcY9wY8jnWBmn1Vto7NscqUM1gw53CgRPH1KW7LWh9",
  "key25": "6B4oRf517dMHq37fvRBbfun3mR6mDyVpr5TV2uy7k845ByuYVJXgWtXm17Woc6ENE9oZhUp81mtYb3qW6KcRBvV",
  "key26": "44RUFB1gULo85yN7cWAja9wXfeFMvxS5Mxjco22ougVUvyn2GD2dKKEWcoRvjvez2uWBRg2fuLBvGHU515GxAvur",
  "key27": "522nAgLHn4w1J5rLuFX44G7UNmR8AsQbyYa63wBf27phWnmJbG6gVwrYxHNfrsDKhJ2SAq3sjQYsMCcumR9WNJGE",
  "key28": "3GknLmiQydVtu5Xa8U25tFeNZBuB7Rwev9UdjDoiahQi8kYyjjBAiDMyVMV8NLpeSy1pQiGE13NdrCEPUg1zFp4c",
  "key29": "3je8pcB8MedPXBoYntqHoMRp7Y7qTnDvHGWBe72erjBTeVtwkdX1p6vJvtzR9ujGijKMxrMReiCsEjbdrTa6xh6g",
  "key30": "4RU2QFuKgt61qoM7a91SLRifPdNy6AG71TenrpKQUFQx6q38q9bsZ361CTNmeYfP7K1PeWSPq5QN9TSsWd3ZGhRS",
  "key31": "TLLy64Ka7aG9jpKi4cwEHhgK7wFhLkYV7yfqHVXaHeCZ9UhB3ivGSXG2VvmSfuPoBYZy687RWk38BMgQ7dFASfA",
  "key32": "63WMHKBbgCT9C4wWTi7tPD4GMqALWdhVSYfbXZCnmGhbdDSqbi6f5FWrgnyJDvvmcCfD8ByNu3q3Nk2ZSd66zBqU",
  "key33": "2tHACuVxdzCoLaL2KNNGesvYt1rVB7RJnFFNYkLbyJD3T7vN8U16WhEQr6w17WSXzXL7y4nWubKE18aWSzqzmNb3",
  "key34": "5TrxizrUT4EcKvGC9FGJHsjqxDkYYkZv3Xi2VedSVRBNKS8eNgmjoZQLMNLcBMcT85zsyaUgoG2yub9LMz5P16JF",
  "key35": "3kn8TphabW9RDUoPqo3d25jAAxTwmSNdhvJLPKHLzHpzNJw82rHjZmLwMWS4wpqfk73oA1m2Bz2oWuLv2Z5AfaJZ",
  "key36": "gmTghf5dqSzTaFfUiusrKN4S7ZvMb6PK5aAc84uAq1dA1RCvygLs3wXSXdY4hFVRnY2G7fjKKBAx6X4RFspj4Gt",
  "key37": "3ugwikCjzcmA5yHfknUmRYBA9miK1grCjw7UPPiYqHKhrCjsACgmdqE9eayoMXbeHA1mR5FmMMtyzRwVz9bUU8Re",
  "key38": "3318QScRw4AdQjkDmhfedS49ZuVZWU8SkmBBLcsEaRVemxjSyCyvsMe9ucyniRzvJh3bWdMZc47t64MsDgbdFeDH"
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
