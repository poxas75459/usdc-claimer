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
    "3LcsCppA5ext81mfzfY6a7xyxPxi4tiQeKZZ1UFVk2gXq8H19AiTWFqzAoCTem1XrafCf8i8scWdLEtdffcLTzvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1fRvhNW1AZGWaK3NCCqW2HEfCddCcjdiWJdpw1iRDridBDG7P1uAhjcuTmqexuzpqC2UZCSfKGKWZXGvnxKiwTC",
  "key1": "5MhBT7cd1gw813teM9vkpi2AW2gFVwAaZ5stJdzBdg7fj6uaCvQU9vtiVyoZvp563DRtLCRmonqLHcAAZwP3wjGf",
  "key2": "2kj9QF9Hz7PnmNGnKVtDdPMSCMsDwkv3SH28HDG1ws4rzLt4vzgYC1YLCXwWqMS6Z3Gxeh4FhQMahdtGUgfDtiqq",
  "key3": "3SuTtMcwCM8Ka5PHxNkQrf4DJx39jjwa7wmcgFbtxhmZQmdASiCCqumpytNfuUD3rGVYz88FahYZMKqztvgfMvMS",
  "key4": "3htjTwN82hKqGd32fTUmAvGVEdMhXrXkGSNAdT2TSgfuhBSCtaULpv3mSKXrMNTogoZ4fp4qJdPVtDyoaePN4sPr",
  "key5": "4jZ9Syzm4ujMBVDJTBaJGMmh9FZebR4efyWWcLcsbNZPEADR6f75XX4kttksCxkRpoCbQzuTtsseAbHzkJFbzb7j",
  "key6": "5BamvaNLSj7CJGZNMfC5ZqnVy74gyPC3SXpyD2xxgRpCw9b3VUn5AvFZtTRz91DCCrGkkX6aAFBxkLRsBiTXx8QP",
  "key7": "3hMqjjxAkGwoqmfhZpo4dM2vBWFGBPcBn2sp3A9zJ5g8TGxULLa1GSf9x6jq5Fg1e9vY7s1GFFKn8USj1wah3oL3",
  "key8": "4EtFLBDgMwPBtmJUHtHg7ERTozBCMaYfkGutwUtMsSx7RaRguLrMzDoKL1FsDfXtrMkDxbJp6kN4kGVWh4zQE4po",
  "key9": "8PZzEwxPMGBDreWNqpsaGkAZBHks87vhq48dCjugfMhxmdQWA7Sm5MNTUVLUFeinbbxz1aZP4qQvtzvcsxZTbkn",
  "key10": "5QEcQxd8UM1bQmzRTL2hm9XeqQmS1dJXedZ2vjQG9BQdn5A55eNjj7Aw78WSWjB6u8cMnxVh7ZMjyGVF2iPSpnor",
  "key11": "2L3EdRLzKbNpnbvjV1TyjM5qvwMCHhvZkhHzUNGbBcuJkammdFZL1uTfGptdCS2ewNZGMW2Wbp9VsRpeY9b2tdCp",
  "key12": "2wSmVA4AoQ9RiFJt9y6igeSGJbTKrUiwAnVEQZAAKUVjmGEjq913TKPZNtTGEZjSQsrUJpXxYYR1gXiWJttBdwX",
  "key13": "65aip2rNmcMtVLr2iq7M7UVhrzdzbeLFPRZTvJMC7NGxCck7Q7znjYVWBKpNi5ootkWAXXaFgoHoy3dDyZVWjHXL",
  "key14": "4sQYgEKuA4iy8tXwG34NNPLjDe6vF1eL9ENbzfRi8Enyo2LexxvAJwpVTWm1i9S2hqfN15tcJKkaEU2Upo2vjuNW",
  "key15": "2s92ZququTRjZSQoHjnFnsC913vZE3Wud3WR6YF5GUgVNAceoQZ9e9iF2has2zvPqKm8w9DnqDkLv8XihstDWy9t",
  "key16": "5BKnB5xqe4uduLcbcjerK4NzTiCthmBUodLmLdi2xn1x56uSVVuMxufKWvNNDi7Ea9YPVg4EBx1BauSK8vD9o7DV",
  "key17": "2fz7dxCEX553RHqmbYC1V23rqcgPyCus15WNF5CwcmT3Qpe25rtre5RCMxHjs2r15sTVsYJ4cPiA9No4YwFWW15n",
  "key18": "3B4cDjmeFwsjZ3MJX2RtskzTLmRArBopvVq6my8bGdUjQuJAsFnyHpEq8UrwMWCuz2nGtFrECohAkNJbpjTJcrzR",
  "key19": "43EtykwdLTdaFJm85pQ1D461RkymfJiGovrUbDPNNRRpBmUbkWKDDS57nahR6DQeogqqvxijC1ETSV4SLXRd5184",
  "key20": "2H6apc2fF4Q4TKr2GraxgtduyymEna7BVWNWXmCQq7N1y7tw6ETFu5BbWm5to6NymbnvaYiWcJNVkRs7B9nCtYop",
  "key21": "3e9XW9DWVFqcBzcmpn7UNR28GzmqQHSov34R3XkNWwcZtU1cpyqjksrq7QcJ8kqDfvqbTLKgyBp7N6bF6LCKfKvY",
  "key22": "5Xo2VBZcC9JPLFXJqdSJPGdc2ikYBd93LsiAKBN8x8zJw9ico33DyLzH5GvHLCTHEPhAQHrLDgnVv1oxuRrURjUN",
  "key23": "yCfbp1F67wtCnDnFL6ZMBAnynnotimesx9RgE3Seya212CLXmNEGKtF8ThFTR3qNsyL9bWZtpSzj8mZQhfFv3hQ",
  "key24": "43iXKgFX4VLFNXW4EvFXDP3bSsfw6p1r8LukoQ7mcrNTC3DZLWXxhVm6GSUavWWFnhh2ErC6iBESPy4QjetsDDwm",
  "key25": "3JRC2CMCQBJHUBpqgXGaCSsgPh1GZTw8HRbunhzZYfvE6qNuh348MGkfYbtsJMMWrVc9AzuLjp2FNKAAD9wX3x5j",
  "key26": "44o4oDGBhMHiTN9ohy4QKf4yRAt67bnwm7pGrWMtbCKzg2C96zgaruzzoVMctET5qxNwc1uQxRSujnysbhF3beXf",
  "key27": "5AXvifUc5Pdh3nJkD8Vfu1MheNBpARTnEwcEL5iRYcG9z2xCGrfmACP6iJJtCTjABCo3ap6X1HNsiLWE9PRMhDvK",
  "key28": "iYNsdSWbcyjQZ9KiXfiKWGAVGuZPc1BiYsB6aDFHkvngUdyjFmxPVuJEJkv9zN2zySP2Hd64p7RbtmoL3M4j2Vq",
  "key29": "386cPAJ9yYoGVWvTPGZm93nh2geJDqgK9t2mhXAg1E1pfbUNCjg9UzrGKrxgu2Ug8djFXkTkkorKpgxysB4oWj6H",
  "key30": "5iJjxrSDyUcNoPinUqS3zUEzJ4igAWkNJ4EsrcWTCifQDD7s4m9pSFrYCLu72wpbQkHJBABcSL5PiMP8k4G3BZLw",
  "key31": "4qG6otKCWSLZYNZ32uLNj4RF4ULvye3XLk9Pi9GDkjdUBihWbjTMcYcoxHxr4LKVkZ2ZvXRCigXV1hen5UY1ft9X",
  "key32": "2hJkoAdHZHJwjv5U75h2w65iWiaDANdxWSLp1KfodfbxwE5YciaYtg7163ZMjhcXKwnQqJcJr8EDFN3kVFqA1Ju3",
  "key33": "5Ai15UhMTYfaAv77g5g1eDRGuJ9agw7xAQNvswTqTYmgUVSsdoid1sbQiP4HAeNQ6WvmEXvN9SEm98GwM1AwjK7A",
  "key34": "4MsmEkPHExgfiFwqD3ezEJUfLSiUZfcZJJvCkteiNfVskSPswx7Ac2PEUMKtkXFrzRRthkEFKvGquGtHEJTn3Wcp",
  "key35": "5tUxW1xBLyfDrTGfLCWCF1h3x8swopHTvTrgbgn6kp8Dsn3PwCgnRZvSVaS1T7Tf1u11Dm11LvJd2o1b94D7KRTF"
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
