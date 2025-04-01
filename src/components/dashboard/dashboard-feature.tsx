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
    "ZKgyDAF1JbYcV3d2dwcokPVTuFYgAtwUUy8cT2Ssyzrv4eFt9MVD5JZhHvyLZ9d9W2Jt4a1v3AQ8VoWycgEZgZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dAXKpyehr36uPHfJDPX4ZcQByKG5xWndfW4EDP5mMFXZnCs5uEzsd2ZZrrmPEEeKoHt9n8NPXr51hTQwz3S1JCM",
  "key1": "5xAoyTUzzsp96ZNLwFxerrcg3F8BEdBg9NxqLW1k8FV6U84gi8aJ5m3HvMrvb86XWMsFC9HznBqHvcAHBPHzjcS",
  "key2": "66j8S1vYHBcdQ4CLRf2GPZJCEbtnuxLsd1FZnaEGsKth9yYzsbqxof2bBvd3qCkyjCfdf3pmc6R1kKHWinQHbDfL",
  "key3": "5qa9rWmruKHok37PKqtRyQChLECYBWFGw6e4MuXrERuBfyCV1ZZRQZN3kjBomHvkjt951Lh21GJLYFmRTE2vLzwM",
  "key4": "inPnTpY5oZVyYtguyX1xnnonSLsVxWNy82PMU6CgitMxk21JnpakCGxWxdN4ac3LDaKC4MQa7hb8bbYt5Kh6SnD",
  "key5": "5Ku8VMnmEWpPjohKp3NYxKZfvZSQs8FcUrTdjAa2n7SjREk5niaVNpAGvakVgRd8Zvt4n9zAgZZvKicpttafAvZQ",
  "key6": "5SxRUoAxy1kXnrU1aESA88CZr6ZpNHAQC3tU81xTxfQGymw6G3it2GDD58E8HBmFNPQzpjySTX3J1XKUh3Qk2icg",
  "key7": "3PwhQVogwfz4U1xRwUJboQMVmWEB9zDuRnyRvgKghxifoF1rjw3Ty43ovA34ZnnbpWQk71QXJBz8Xhby6JeWLBMj",
  "key8": "2cUNpMf5vCps4jh6ZhmvdQFKrH7djDUiosqt8y7Sx8E3VTHmiv6jSX8M4xvdWCt6pkSronp9BbtrfzBn6prtykf1",
  "key9": "aUaHHAMZER6hHZ55y2Dj5UTs2kbnxgTQyLu2Tycv1q5ri1rNYkRp4E3P9pk7YBkw6zShDhG9H1eti34ayCWTQbE",
  "key10": "3NY3uvjBDJEimzHRNjToTDNev6Ud91KYP6vgUeMf3ywvGsbmXpmJbPWzLmyMcMb1Q1VupqdQE2FCSFgkVxSwuHUe",
  "key11": "3omCCB3QjdUdZfVqxaKhL4XEsCJH2NqDjUCHaJB684njZwedUnAZx1eDJ9kF1ibifZTrRsnN9C73AhFbAboJq4pe",
  "key12": "526j2LCBRPj79xSyvbyfhoHSCGecvxi3zSFQdMyyk6TGUZSPggA2txhnrhZNEDd4FctEWLW8Ryz6oKFnJRb5ET4h",
  "key13": "gcaJp18G91c69yRWpnaiZ6iYdT5KqfwhVDYw4Jw15sXLmFhwTjyKRY7cY6hLArYmsiqvaw9uTnr7zgqjPQSRyKX",
  "key14": "5fS6gJtpE7hSBmU8h7Ng9nSf338b4rKdmS81euXU9H8Dey2HY5wnKzfchQFbb1t8ezpDZNtn23gKV1p1ffhtjxiu",
  "key15": "2TKK62uB1gWNEuicADhHUBTENMG9zxbQ4i4s2zDvmcLPWQS86SdQJXmQEbSdGw2X5gMYNPVUib7ALBmiu2kSuZdd",
  "key16": "2m7m2mUHXir6E9G5mr29K5JGCwDjNB5djtJfVUcbhV4uQFMWvg2NxdRefBJaP9qbD1pgrfgt2staMQ6YhX5kEaEg",
  "key17": "5UeRFU1VPHLTAuhivG9aqUtkoh7BWHqUBc8b4AGYZq1wyWgj4WYztzJZsErrtAAjtbxF1WFqdJSYxKx5BQoTepym",
  "key18": "BdaQWDH5xvqxxNRUrUyJg5WwKNKmExdzBSSVN3ArWiCCHRBxkpKMWRinSeboXK9CEquQfaE49sq64V4ZJD2p1he",
  "key19": "36TsujvjYY77DqeJm4cRPPByGrwkvw7kbkiD1jxDSwHx9xZUzC6ZHhjuh2iWSNBJ2TMG6YqqqZwZFRUvhWMwfbth",
  "key20": "5i4fdYFqz9cPCUwpJuUxfN8tdxJpUdubqhXkZ2giKKxnBtC3hEAsHom58KzpUoYwWdLTqZ5egfreyrffXePSVfu9",
  "key21": "5ot81T4PC4ZfXT69bQvRUG3xg3VetudCxQ1eHeMALpUiFEvDeyKpwKhq7VeHx6kfdDtEtUUuh8L4Zdxkv7uRRX3k",
  "key22": "2oKrx9rDG5trnbTJoPthHtr8snNt2bHEnFJAiKDfbHLst1L2wAjGASKj33Dc2ur9KeiQsPzu99PGm7pVgnneUEDE",
  "key23": "9U4oFcoLVQi7E7hSLpo6WDLEdeDaycFtS6PWEyCihoWyDRBDNGJkBXTDZp9vwC9jGAUKtGbLEV8zWB1PFoJFQsW",
  "key24": "46MHqujKehYD8W8oN2134Mi9cfunczNGS3vXfLVsRgwxd4k5gTbxmquAVusDqGeFymcfQFzJbHPvb9e3mFCRU74i",
  "key25": "V9V7KoZZ4s3taTN3ZigxMX9rF5pY5nJfr4v96MdarRzSZNtqyJwCs4ZwoJZnqwDW6ciSHkPsaJ3ruP2L8zrdaHv"
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
