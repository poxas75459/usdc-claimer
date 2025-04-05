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
    "WrgDDKrb72Lotn1EQhrmWD1CCUHeLVPd67E311vzx3kvmWaC6PePeNJvuwxJ954tthM6qTvHDjqxqddPVE55muv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ZbqJ1iBPfefUR7FGFBJjCYx83HeJN2Bek1y94jq6VhpJf8y1NAsgAiD9BjnrF7qrvrTDot3FDY7W9tiz3wJprR",
  "key1": "5Gb25g7w134YAjHR3dSqUCZZGPAZjtUR5114YhwqNM6ZWTwmK1CHgd1AcMM8X39vpnxfKwTxxG6zvjZ8Tqg8B2hz",
  "key2": "4RvK4U15t1VnL1uz2BWrYQrVsW6SNkfCB47CRu4RZgwz31m35qemaYpRpCgyVSgyNX1sqmHpZXdnxaEQVMoUZNio",
  "key3": "4tPFutiSc3Gq5tX5MYq29DAGFGp1xd8ZrMMB7ue6jvirS6gBwu8tK8WNaZ14NnWbgoPyyoxTXZ7ma6eqwBaR9BAp",
  "key4": "5BwcmqDGUSBDr6ZcMtLtduUdNmcC36URcnLobtdH1RUVN2nxtqLFxnK2T1qCriks2XQFZVK7tpYmvF5sNupd2ygG",
  "key5": "4eQGvqArotR7af9vCsQMvP3Ebk4dKZV5djhKbopQc29ihV9qQ4hpnV4zEgMBRNtTwEBpX3daPFMtEHuFq5c4UtZy",
  "key6": "42iG2R13kfgECPpkbYbBWYK1RQxE4FGKupp2DjwFKTm7VYCbRD2KfHnb3qjxPC463o8He3ZUJLfRZWqAHRhRJDDv",
  "key7": "F1nXF3xcn39UND3GEPAyLQAFhkKfHnipGNoH2MWxJGumx3SLWrpqanb5QH3JBSfzHxPrJMfhiaQ6nKiJqeZw3N1",
  "key8": "3kDyCAeDtRuhjtSEhnKiGrHDhgseK1hjbVdaf1WPBLRgKmc3gfViGU3DfaJ7fsvK2vQqNgn3MQxx5GahTdGrHgHe",
  "key9": "prkYworiJqhmexxBuQFXikqMGLyVbbXsLuLysKxCSqE8m5KVhZ2itTvcaBMSMGJofS3KoGAeFcQ9cwfxKKZMHV6",
  "key10": "4T5uibce8ysf7uymEVkHWVeZjn36Y2CRuWRC5SuSCEYa6zyuPsnrCZQKKrifsxaRaD1pPJBs95G5deoDeYoZzSh",
  "key11": "28WVXN4bMrBvcpNktx55fAV1pHLc4ZRTCEAGa9L4XAeikSLy4QoE9w7m7j9QcLSphTCsZiDys3J9GAMA5TDD4ej5",
  "key12": "46R8fw4LoWdsGELHdGyNeFswzxJDFMXEaeKb1azByGe4ud3puQ2ZSgT4DGhEZxnyzDSdKsKaYuRv4xn2FceZgekd",
  "key13": "5Vd9qdRg8YawUp5xeXWTd89LdMHNCzxy2NS29XQHt1B9yV8gLrPVr9BrvUzjitDTVCbSGuGoYCRTDLbbUXmPbf1J",
  "key14": "67nK8pXcibq8gRPZVArrWEu9qJxueTfBrQ5eC31v8XYUyTRgewC5BDSXz2Czx3vb8brvK6rMekZ3dWd8PdKv517d",
  "key15": "2QiyEH6uLyVVnwGdGTA3vGuyibARLDai32ZXVgHQd93BdeLPMow9dLpDccsK2N7bP9V9egkRN9XSY8WUAxSnzxZq",
  "key16": "3CegPoX6vEb3QBPc3UvqS2yuZjTUJ8eJ5fL1T1g4MJMXVfNUwEz2cN1eLhvxzvorsLaDqyCfQpwsnHCau2qE4kpF",
  "key17": "612cSuoWMnvoKC5CHmnoGkDW5AFP8CFnCXpwTwHZBwKuXaUjdvzCDDW7EeMHeYSKPs7P3JE7hFBrXV5QHvusZrtc",
  "key18": "481z8menTQQTHGzXRacTfyp4k23owyry6cUPgbESedKXkBd5XV7RAGnHf2eUtVubY4UD9ZFaxU4ZWuaWJRsoqsnx",
  "key19": "3jKuwpjBWQMy3BvvV2uvx9DCn5GmkK3syrRSTGA3AHwVpua4mmmGBy2XrPfu8dix3ZbSXYJaUc57nfFHTWm8jC5a",
  "key20": "4cAE6U5Pe4csJ8bGvQ2FVbXByKJ3575pebiimEorLUJRcSQcUK1MtXnNtHNvXDwVZdFWpqbTQ1m2fqmDRJuS3BQ6",
  "key21": "ViferHyGyenwLBtr9cwBHJS1fgWzm5yZxb9JZVnrJ8Ga5cadjZRVXKwtMB3C2BqAD8rR9TaM9rpCtAeJmCB142S",
  "key22": "5cQq6cPBi2xigxkp7fpw2hFX1kjS8VUVQUugcM7EyAnXQFH676vjpdR6MbkNHH6H5ibqCbGCz8EUdtwFqHYMtp3q",
  "key23": "46T2a3jtaxiMa5Q8u5epC85CdCpHvXaeHaMCQ5JiDCEpfiGsnwEopLBwx1bHgHtBMLHs7AbohtSMNDog1w6k3oVU",
  "key24": "2oJ25SCiwmRyzhu5zsoNY6PLhCPGieaBJBLDkkfSYk4GYEyBpNWuwjPoAwVk3gNy3668eiWhjLhnh9x4mwSDRemH",
  "key25": "2EYgjoT5HcLyLPQ2vogFM6HX9TsSFrfKpC9PHKKe7XwghpZNW6xD4jMq8dhd3Tj42nRuFmRNGkdwkDZr7YMdWrWT",
  "key26": "3TH1k16R6YuFduNjn8PnAubibwCw3va1ghxeg66g7na8Jguju6qpqwTcZ5SbPXSpEcZQ9yuvsdyzNdzyvQdHPNeB",
  "key27": "5wSiqLgA3PL3rK6NgZmJkyjGbcdJmmoaCMJ735jxNqxBpBoYxqrYHNLS3GxkRYfKajFjeBDXGXsYErUNJxkjAhnq",
  "key28": "4xSHsb9WGS3augqHSkw6kMMJ8ZsQrkLa6vGB28AfmhXKb1mEUbwgZRDkJYzVaGKxvDnJKnyjYnfY8DS61o6RVAYb",
  "key29": "2QsfHyW9R37sb9YhZy1M8DgbdnDp6Ar2uZURsSdeEyVsNHSkTJag1qqqXnouz2PWqofNtmafjAGibDPXV5xNtcr3",
  "key30": "4FGseH8LnxioK6UwB3nJxsazsEgA5reoSXDwMfxHkcsBK5yAyYeN1aJupJ9Qgh8em6u6pET53Ev9W7kH16xpg2Ck",
  "key31": "4vbCJyUigzAjJFwox5BQq7aKMWyBcroA1k7gaBbZsej66YVvJMXvuPr4E6Q6kGoE6TaqnCVMSwScjDCmxNWDZ7V4",
  "key32": "25KcYCuWbZEEneBz5QyVkv4dQ9pwMJnrCnUWc6pMX5whRKNoRMfnaVY9zu3nEQFDpZVNXhqGtdvcuUAtciUBPRkb",
  "key33": "ah2vJY7g1pGhunpBtV7TtTK8F1KiPPg5uHe6rDrrtEAnEwVFpnTWh1W1u76cXeGQ58HWXstfVhVqKfJYLLS8stF"
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
