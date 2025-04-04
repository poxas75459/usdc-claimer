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
    "2DoAh62inMecT3V8NCzkEyngzK7y9q7VGExntQzXzGrRc1t15wEzSJy3NZ8FATo9yjQbFDaz5JDMzQrkRwJVs1wG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NuHTQ4xS6jgkLCNPVtocYndJavdH9MGh3ey4Rt5RmQ8zEjQBofgPKmWKMy6Fj27829y27knv8XfMryziTYb45LH",
  "key1": "2mrXs3ZUMKbZFCEoFpZzomebC1oB2XYR7drC1KKKtiyHDiA92fkqyMRjDg9WTqG6swHJGMcrWfJUramm3tDeqqbP",
  "key2": "3wB4diddfX7GXeFau3b7U7Kdxj76pnzJjFRqiX46KMzGrWHo7SLWE8nuBXkHkzdADTxMsoDvP9rXZT6TVD2qmRA3",
  "key3": "8dTLUGb1itMa2QbeFdp8QYf8sZdyhZrFm1b1DcVgD8AXUfqE9wqLcx9G8MByNXskUTkQKNeTNeU3NhHEoUX8BGz",
  "key4": "2yG9fkCf78HVkAxTnVLB43BNiwQHuMWwzjmaPWGYPMY7wpw1zEhJF2Chz3wfUzaTaeXi3Z5gorgMcWSpJaH7N2Xy",
  "key5": "3JqQH6t3aYjhga7F8831mPDvYgta1Yfvs8GUcYo9MKN49e1TUg8vZNowCnTRqZ7DMmzkE1T7jJ8UTuAREmChR2vA",
  "key6": "iG6KkF7yyxfjutHh574oR551385n3Zt5H9hBThmtXLBvB6uD5dPpLSf3ebsG3xeHdx91z6gYS2cG5h4xEpcjWcK",
  "key7": "3cEH2521upYnv3Qs2dWBT5Ri7dfH2j6z332krmYHqPcTWWWr4T6Q6PaGAHcnxe2MMCyz3gpcQ955ESk3Kb65SLGD",
  "key8": "2EZpHS7yuT6wZnPskv3r5y7zLp9S1ZFrxXmMQfWmGwQNnxb53RfpQeW8Y9VcZVeAnBHifkerb2JvBMMykDEAy3UP",
  "key9": "kSjAAwm3x46uvC47mvBVT6atcChQoic75movqdrS2DavoJEdCw8wGN38AcyrLM4mLa9zRg5TK2Gtp4ey84pSxmm",
  "key10": "36ooMMBJPEgn6BaArs21uW4cCGqdJkjBXn4quiWzjdNicjuTa3xtvdE8mG3g6vmgA1R1FiFNnNvB4gA8vuj3Zfxu",
  "key11": "5Vmq2J4JytVDqZX2MCKJhoXBfwspbTXKygiAQpUqy6t7x6SeE6gW4eyJfE7FYHMC79VrRto1UjzQjBoYW2MNhpse",
  "key12": "34WXRPG9439uz1n5JnUsv3ANgeVKvy1bByEfwB7zevWBU8DLwd83viCb9FQXHiRH5JAv3uPJbXwd9ABkhsovnFPP",
  "key13": "DfijZBL1aDfBnHE3wB3CfjcjZADhDzbLba2YdMQZL8FDDLhwv47EmzG8Kqix7r3G84JEBHaqup2WE1oAXU47b8j",
  "key14": "3pTaJJv8UxCCzhz6hA8biXaibokXt2V8FnQsqjMXDTEVcWm11XEHMc8AWmXcKgXiGQAd3phs8ZrR5XUMAZbbD2FW",
  "key15": "3o1B75VGFsu93u74W3oaPVMUEhorEpNi7HqfAJfdJS8JUtnRKL8Zgoo43HL4c9UJr9qvonZ1jgvJKRJ1az3a3YNG",
  "key16": "41UExjBMQLg2ZFhsAGzVyquF2HGTLYzWbZvtrJtqRSc2uD6vYVwWURRxSxaX86d2jQbguxLeZrSvUDf9CBSpdD46",
  "key17": "2U2a4KA6fuRZGUiPGcEb8uzpZKC5FnT7pUrxvVFC1MgcyoKpdVA778kDRJpJZXxq9iT2Vj4EWKDCokcAsEQRWYUW",
  "key18": "5Jjk3LfPXuQKrdUL42bexRpFc4WJHW8CmAmfrgGRVVoZPPbrDwAT93f2hrQCSxHULjQ4RU56bnPv3QxTpHZ7J4qy",
  "key19": "4kX5Z7s9jUE92f4cmavcBW1GN1tKZrNmpfV1fK2k8THrD7P4if3o9fChjRv3WMLnDoQMiUiMnjibVoxmARNhH4Ey",
  "key20": "5DesVatTJBaucdEropH5geAqfL2TYEX6KFN1QsSsc57nMFZqHqpD6XNfkZ1Mcw1dMmRpWE8o8D2vga44spEj7xwE",
  "key21": "KxpZWU7gmMUzxUr7RRUq6qBXpYJqVXdXXs7N6uoXHMFTRBiDBuBuiPGo9GqyCFqxzLxnf6pHCiTrUBDS7ZFXPqd",
  "key22": "4t6DJS7DxU1WpoJQ8SVHaYmCh4hpPu8KTZT1WkA5cWM2dLrPoEF1kEUhGoPfPcGaGYCUpaw7n8unZWrdhoVEfV1Y",
  "key23": "3cn8MfCoMqN2Kqb4qRg7EXkoFhvxmQdvDucSypSkxbZ5AuBLiW6yQhR7D6yTRVn2xYGnr9daPTL8jWBoWw8mBt4G",
  "key24": "3c7jyrGowB6S4Fac3NXUpCajXyCZGwXWS4P5RyVFmtSGTngxoVi1TBsF2VeqyDZ7TJV5rv8dr2Gf1SLM8VhMCmfH",
  "key25": "5wqs7iPggNkwFEaoFtyvdYqrQVC6ma9F9xf46e9XnLHeZo7YjemZk5AnTkmh8L1s24QbKmra38qoSmwgnG8QzqW4",
  "key26": "4fAoYXwYw2xNG4TwKuEFgbJyhGMSLPVidgPFUhT3gXZXXjpmYxgMYnrSSRyQ3LfbWf3Q8zeKA6mx7KZBkcazPcBm",
  "key27": "3WeDXmecNW41K6ASVLcN8HR2JANUdF6Goqmm2wWUPKv2AYDn8NdjnnXAcpfJq1WCads5qpaGV9WZNbt2yystce67",
  "key28": "5ZLHNFvJtsw76q7faqV6jD9DfUYXSnicH5pakARy4hYFLfNDRZsa2siVUne3LWnJjF7Pm5vEtXp3JQ9REbbmHXY5",
  "key29": "36MXPDjiTpYLpmGdkrfxKnhP41G1DuTTRZa9LfYxoZ99FiycWEeVECNwyT1sAcnC1aKH7Tzm2q5gZ2c2SpgA1ArA",
  "key30": "4RrxnCpNHSaUH7XZGdQkoWQk7Q7AraSAHHk4mHDoqK9FmZCr6Q8GzzqNNMwBMKtRNb5C5y8Dfgmth75mVmLQ2bx8",
  "key31": "2LJGDrciVe6vFPek7ZKAFPvMpzNrRMDwjMKAZFguDzNEoY2gv87QwH4Z6rVFTbSBh3rEwPqDNeq3XpvYvwmPMQe3",
  "key32": "2v9bWLsG6MnYgEX5hcrPnMB9mGsRor4MEaBDYEz9cLYEJ7PMaMRJFDPsu9TWuVZEDkwUzzXbssiaHNCgp3HBssq4",
  "key33": "2k67HHAs4ML9SmHUgtVzQZMcd3HL3fiZgnC2fZekAdTMTrbKbDjKncZ4MuWY4usE8n5DzHEV16Sv3qk9tYztdf4k",
  "key34": "4xxQdGvHAB7we7UZ4ZwBWcbdatmx6yZnuFFmsNNcPX4SwvBeKHMXXCTjKBH1q4ZvbrMHLswuv9P9cwxejffHZTpQ",
  "key35": "4vV1c9iRgf4DSikEvmcR6MzSutYMeAH9iwdfYkteAa9KxYDL5FaEwgGbQHtxSaNfdeTnenhKVK7kLYsn7dwfFXnX",
  "key36": "2jbH1Kw3FPzYQcrgv3nn9xKHhrE5yd1C6Gh7v632DtkiSZrmfw5QCitZM4iJHREr99FmhKpv8PSeiYqZ1dWoRLJu"
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
