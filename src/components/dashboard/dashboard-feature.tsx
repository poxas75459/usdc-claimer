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
    "23zp4qpUJCxQ8Rketa1z9C6nvRLvPvwoZFdAQ6uLzETxYQfJKoX7NFSLn69WjKGdpBgcRsu4XN9NUEkTq3jpdWCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AU6LjBYS3ou7tDz3Uh5MG9jctuZaGXaHmBBPhJ3Po1fbpRgcX2BkeMaiG9RWGyGpJxNS834U9tmQyunkphNKfb6",
  "key1": "5M82u7TpnjuztiugCxRKBTQy6WYkdve82Tf3rG9EYnnDFyW4hUg87XNwkjKsf2u9xfU5LxSbmy4SGQzd267jczqa",
  "key2": "2J9eVc7xjffGkoo2hsXvJriMihnQg7aCBB5VKEt9V997BmskYvYbrK7V3W7BeQkZt8W1f75gkP6Qu4qtQTSoUZ18",
  "key3": "46Fth3ULmTRE9zXTAu5xxzR6LJXSJhCJR8xpSr92iLKwhvoccHDdFZgiwoHrFsix4hyYAQ5kmaydG6XiM6diK8da",
  "key4": "4ysMju8nYamcogwUfUCxzC8andLZtxZZS2f85yzMiQy7u9L6kqH4qkRzceJ6a84o5swQFpbkP8nDtt4w38g4k7FU",
  "key5": "5Eyb7x2R7svfXHeGu4yVwBXySCYh7dmbwUEGcYBqcwWfKmBEbbVBk1Pmn1cgyThnyYpYgpDWBbqznR7dDW2CjkSX",
  "key6": "3PZc8XeLT2rc2EonJgjELtQwpKAJBzqTGLNRm4Kx8TRcsDaJL9uSiG5TwwL38AavfZ8JXr4NYYQBuvjFpw6qnBEA",
  "key7": "35bWpRerFGxVWDurQMHuJPawBtaV1CPHuw7CbKDZojyK5xB2H8hPTJaRwuSfWZU9LCQiZbKTm4MuKmAq5Si9FWG3",
  "key8": "5VJuVH9AwDjX4knpTDDqBqDFodvrJgGXYrx9BFRmkk6FTXvpbRjMXkLCZuJos5MbnZxfW2woUw4tbks1ScZHc7sk",
  "key9": "tTQTVbHztXg7mZp87UmzcxS2DgbKh8GvPEButy2qFe9mrFQKaaXkVhZ82tD1jDRisennXgWNQzcXr1ozpgUN7jU",
  "key10": "3CV7TU3RdVw2eKs11xyVB51UqkZywwPEkmr2vUpdBaCK3RJ75NCEfTQAgeRY5bDBdc78xVuL7iZTFCnXernywbXE",
  "key11": "5byJt5V6KiBpkxcUuva7efcN3XNiKWSGEMPwF835QLVJjNJDekG9QAbNnUzfjkLmkzMmtZmWWnvVNT7Fr2V37aTG",
  "key12": "3MTk9wzZ58u3Ldc1g3GjorwjhXCLn5xELXJZprp5oivwTR7ahkKJkNhk7fKU1uH87TguxKxW959PrAeXFjbELJoV",
  "key13": "5fnmmTykNrah2MxLNusGnGGQ6gmK4UkGAGPMVLXiSBtoewJm8F7u2Dja5mRLjgVT5vXeyRxHjmrNbpmEnc2gdfKt",
  "key14": "2SMGLritsud8b6vwP65qawKLHXPWT659BN7K6SU13zrqf5Xc1KUyvbUH94A2JkDvA21cUv36ZPzByMpeg6kXEYkp",
  "key15": "iDRwayGrnRGBEttM93Fi9or22RNjbVm2yLsUSmLNANp3Dm472q1pQBNXddFtUq2vKroPhvMWX3c6vQ3TP2aBWTC",
  "key16": "3PtmGKLQVTS6Sgm3A9W3dYdDrwhfn4AhnRxcUZa8UzrvA7C7J2Dg2jKt8oGmtKDekEvkvQpgTdcEuJDAUnetksDK",
  "key17": "5U9pwSCR1Fzt9oPbwSZvGskGVWkX3qUfPTGP2vusGrkz4Yxeg8WtLsaRzYTCB11umkYswWqZb76ATCAYja14P3my",
  "key18": "3SVFsF62NgzKA7d4gSJjb3xdzpbNYcRhQf4eBhSuvaE7F1iqBo36T3NkNfSMsc9i8j5ZPPLSQcs9PG75aJYhWV58",
  "key19": "43G7VjvjedrqjWksuAGSEu4f1wsd7HTbn9YYEbAMzT7pzhYP382ZzmewX2scefnrhMLJPsUxYPS6xJV2SUhPmphB",
  "key20": "5da8NMAxUM9VF7CFPj5sPQPzFFyArqzZM6jeYn5rMYaD3j191PE3FnXL3xtzvpLiTqFxVEpGtzcAHRv5aqRGzu1n",
  "key21": "4i4KRXKaP5yGRW7Pj1RP9R5xEBX8nEh33cBCqAmGDyBGdQbDnDqcv8BMLjXG8WtqYD3nSJ64ZU1QxkRV1mLSLBSU",
  "key22": "4CqF8YFYcjauCsQRvVzWcMYYaWFodyN7GGkP2uHAqSJWKf5fUwtExLsnUKDUWfQz4Zb2QGVCTRr4cFGg277Psx4w",
  "key23": "2CDtYyegJoAZq3T1i5qkNirHbMDVwELgd4i9aaveHwMyZvku2ADd9GtmEcKcijkczK7nWAZR7F9gg4nvjoFzgqs8",
  "key24": "5i68B9bvrNbC52Mn5oSWuu8q3vRJBpVdVBA1ihB3QFf7fsnyvk7DPwCKy9wUUKYjcRYwoy8bcYpihRxvEJ2UmGXV",
  "key25": "BoHoT7deyE2XSSwYkcSXmyG2sucFmYgaRMGw7D9Xp35jQAw5VEV1k8uQ34oQ7D366EGcyYGYcvqjfpXQ3JeBnXC",
  "key26": "5rgDDbFCEVommvN7V75SPPseWuu5opsFu7VM1Lt7itiMDMpNzt8BCxineghEBmLuu7zA1cSwiK7HmEVDMhsvCkrb",
  "key27": "RpaAySBevCACksL1BJWnaowUMBeNHRxKPmPHzD2hFaajSCXFqPA9h1CQseFj2WJFGUuydzSkBcJ6AYNKGTJbsod"
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
