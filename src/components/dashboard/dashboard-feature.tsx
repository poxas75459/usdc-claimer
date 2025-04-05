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
    "4QkKhHkqyVXxdokfVAtXPvVUsUr1mjmWLdq3mfip1Uqi7JqT7nctSsWz4j7Bu5RmDdvjQLQZQxuYBpGEfsPpXD7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "462BUrzTehZbouRDPb4TSWtLf7VmbCVPt3xANtyQ5Q28gVW43oyergYtoVtFYb22SnoGUBsTw2VSfL4gzQDc63kK",
  "key1": "5ZNCnoxbUgLGUw46WPfi9FpjLZM9JE8DUy3z3GXX3Prvtf4AKxctGGxmxVqpGjMQxf2fPtkS5zSEN2F5BN4hPggn",
  "key2": "51oC9pXgJdCKi1C6EMNcxPxr5fjETYTcSqtn1ipDdUjvHEXyKoE5GsEkePzhXgHPcqCvuxqpJaUzNCsAx9BfUNMh",
  "key3": "4pyc6mDtRdPDn5RL8X6mPffZQ9csy1g4SNWMevGTv3rdxnCuHjGufDxrJr287Rtbd8v9phWZiCTdNR6TEnPwGmTr",
  "key4": "3B9q9MoMJeRE62LXfsi1dx6UqJJJGtUZJ3AKBZDbaSaQJ4KxRjsVytSJoT4YStQjidD3Tbj1PjioAwiHy8GqCL13",
  "key5": "5FhX8teku64uFMUveqQh3fwfJqQBJY4Te1mNmT9BTg8SoLrBhNZDFD1G8rcQFPUkKsiqmMJ62CYtjdjegVWgDLC",
  "key6": "5PtNsPQkb9PbmdFdSJVytX26o69mxak3MphXbdAw3czEJ1QfHwRaSAoUHsPNBnomHex8JdUDvXx7e3zekChMVABw",
  "key7": "273brZzNWzCY1EiyKn2anQFRiPzbqcY3ojtJdY3ejCfBkz62fcAFvNJc6emQNsdf7qNRtkPKBowwLfpzorfCFayR",
  "key8": "5Y6RhbShfsvLWvaNpkwZgXHFVuchRwsH65h9che2M4meHeL2m11v6mD2Bfj32yUUn6WhimRStLHFAAqxDuE63V5P",
  "key9": "4B3JQkG8oYPrpg93Ex5ouiJWLoLkfLk9FbWFHnV2XJa8XmFMMC1Fw5shJhgm1gawRvsVVebRBYCihHM9Csp5Mu77",
  "key10": "5JFQx5jQ57J3DPE9fAPiD5SaSy29RG83y32PjmihZvawnUJDy27d9y7uybJFtSXiNm1kdvZwoYmdmtU5FZqSCzRj",
  "key11": "2sctZztfuNzGjh7P16cgn591Xkdvmz6AE55ktScEXS3Fk6RxfafQaCttJd6GEf1HjgE4BfFn8Zw9uonEGaja8xB",
  "key12": "2t4qyEUAqnSMqhtMDgV6vCzjWVx8QhhZFNTNFxv13AByfCx3LC6znezeV3FNiRw9cMCLgJkFfDmhFDDEdmyXvMhe",
  "key13": "q8kMxTHyTn2Hrny8h8QwvmoNpXYbm3Se3zRHsrVBBj5UJxcG4xExky6RKQdVrmqvEp6dAFvWUjLnfjKYPvmfi9K",
  "key14": "4iMr23sgm98RDNYkzKyTqBQNqxdWrN1YGdmuH8TR8BbJ8aaKaecLs9fuCwb31iwhtHdyzJxc4R6muBwC8iCKUyHL",
  "key15": "2QGoeMpPrBtTmRrsWDmCoeB3X2KTwHZr8GmUVnnAiYgUTouohYehWcL1cgzW3zRXzY8SGnTA5VjsqwvvWRWboKck",
  "key16": "2xRQrk16gdnjZv9sdu5jtDeKNK4BZoyaiA7W4VZv3dxTJH8wbhHdjSGZ2VqZC8PdU1QMAVbHtutKKSGzFigQusUe",
  "key17": "5fdBFB71wDZgxU8akipUW3a72aRPe6z2vDcVrMStH1wYQ7GsmL3phAN7qbbQP3j4tmBoVPhepaih2g2iSvP3WeZZ",
  "key18": "4MRNhqv1hVwk9ZwfX4jCxSz5UzQrhBJtpyLhU7YvMHM9phSmUiq8fhUqtV6JTNojrTLQLX52zPJHSgCe5KMXrjmo",
  "key19": "46hW3gt35JVzsngckJQgXPukQEquGtfJYB6je71MY8Nhd4iDQT25mro2gLxtfe2sm4aMyzJBcj7bXHPC51yYv77V",
  "key20": "qps1VEQWocnUC7MwZ8rDZzLyGmxrdqP3UbB6LyewQUcCpyNJSt89U8gp1Mkv6toRLDVquQG6AZz9iy38xrLogqh",
  "key21": "2E3G49ZYcifAm7C8jQDJ1qvWbgJJJJ48bJxftiRJ1cVj9d4mGGL6Afj9rZVts8Fbit8Kb4dwMkRTmAHQcyPSv6QT",
  "key22": "iEEq27acWcD2pWdsf8d6ivfpH7udn58VoiFnyRgvWwgs8yVzPSXi4UVu92xTC1jZ7TeSnCCykncYN7ASsuRUGVU",
  "key23": "3yGgUqYaXB4Z2WPEJWLDVKriLKjChPKPtyVp7xxrQ7oD6GvSdXgM8SfQ6Vx9fHEr62ouYSnUE3ieUYUe2YEpANYE",
  "key24": "2aC5yGmqNKQa5F9AefPh29U2fMaHHy2X8EGnLcoqrYHBz5QYNhJh1Sk4irs4PBaBVg5SA3GoLWuA7Eyp5KtX2qhT",
  "key25": "2YmDrHYQNE576NQVhYNvadRGBSUZ8GQA6g1nG5KK2PpQDCccGBgiuXUPsmdBX54bpFFWFEBxRKtvcu27w97L2SHb",
  "key26": "41KLFDRiXRXAyZVfM88NiUChDEZvRfaTdDK7SNhCqZFpesTXMYaGuBZDwFLQxvgsAwaLw8yMfmcLssRXCSqZuVEA",
  "key27": "DUx9LEL3GJfwmfoXe2ywhddg9eWVoZLyFTbJixFTqoJQ7seL7mbdYeeZJwTh3NLw6g8a7XYS2Fhg7Q1pK5oBwW8",
  "key28": "3zoUxHQxdJ13eq2j1R4yrEzXN1wpF5PM7n3oxHHrCrf13kJkSzFr3kVzWT8zUC4oKLEF4EX6PCbStMRRf7xBero9",
  "key29": "2PBUdc9hmTjnuH2j6NcHQ6z2TwZig9GPMHncdUBDTFi76j9bTZHresaKKtUDtDtToeDTusP5tVELTfXc2rVSCome",
  "key30": "5m9ifL81vwtBS5uoPgBdaDcvjGeo2eFQQFktgMEKxhyGdFnPAkVcEiKejcaqxcfoy2cvDSppxUxQmC3b1KiWdXZ2",
  "key31": "5bbfqRcJHCweD18NS2J2C9BahJDkX2URWBpM3JeD7VnKCyZMvds5BYGAPLBihgSczxFFXNXdtZG4U8PNgxMU6eac",
  "key32": "Lw7SpvjX6CDee8FGUjL7tC847heetm6X6aQZtbfqQ9YZKkMXH2Xk976VoJTsCFvC88MA67v5hkQ7Fx5uHsD2TZ8",
  "key33": "4PLSMr4xS8XdhJ18pkuV4vegMJQ5oAoFjCo3bWHrFiLVqxJ6LTQ3RGHwKsqfzLJmA8D2V9TeoJSpAea5DxP6eTYv",
  "key34": "3ecYDMknzaBp8d5DyRmwMY3oN3jotxQNEC4kVhNXFyaTNYFvbhueVNDh7fJRzuBV9czgNCUA4qdb39kAYv6QNwSZ",
  "key35": "3DUkaHG4EcEQdY3RiezNdL1VzZCAN5SZMMSKQJv2tzSJrdGS7nXkm4kVAncr5Sx3wB1oV1AYrThY48nvdTXppR6k",
  "key36": "23dZ5ZT4emb6DN3cNDcC3GjsPrZLQwSYiuz1FiiLqQ2xrTQtozN1BFGJDmxNgd8FxDtJQjo7haCbhWAKUxj4EWrr",
  "key37": "3FuV8Nnh5U11vqxrGRBytvLdpxbo7sWuLHMM8eCwanYbaAKNEcyukjF2mhUmdjdFUdHSksBoPq1ir1FsMKoXrzYK",
  "key38": "3KdYNrdTCzSRPwQwhytGG81W9xUqiriyXcF29nrk6upT35GzzUHxBXyhpPJSSgLiLgwqnE1VFUvqdfbwtxeWAN6h"
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
