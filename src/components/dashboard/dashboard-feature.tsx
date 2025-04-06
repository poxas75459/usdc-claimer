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
    "38w4Fy7kBwEybhanEX2YpSCTUX3i5XYXBnQcdbwkKJHAEkH6VnJKJkf23Lm4qfG9yKy3cg53PzhbW4rjBCibXD3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qHVWNYw2RgCtHZWHyH8E36z9QHYNzpsfEK4UBjYG32a4UFbiawrfwh4kkTapPGUca1hURCbF6YVmbzuUGoExFJT",
  "key1": "5x647UprxDnEG42enVYWGfBVooGvqm2SUF83FGHc7uzSXmpemY7evbedXFTfQGgRRdaFGtwa2XCAgGMEFbWFDx32",
  "key2": "ZU8jzzJ4tHvUpy4E3ervWRe1PhNkyTxcqUkBe3ytA3BWuc68msQ1AnJuMhNkGozCNAb5v9AQMHMnf9XHhEX59Wa",
  "key3": "4iBKSGDeUNX8ub27v63JC2D9yhu2ufg28PyxCnLsaXPDmRRL9nsKWECpfc8VWHj3ZX6TVuVq4TEymT1Geg1F76JU",
  "key4": "J1avojox3g1k4gg9vhnafauApUKUFeT1ZCx3q5XwwMdZ3VNb9rNadK8moUd2Rot27P4mQGd2uWZBS56JGfXinyY",
  "key5": "4t7P68fDb9boHrbWVYdFuh5NGUfmrmeaUfvtxrY2BHa8Quj6p5DsUri2Uh3R9QX7aG8JrwN3matD85JqnxHmxPaj",
  "key6": "4nEBgs6hxZgSR16jFsyz7XStqNViS5AjmnCRfdm6yDxR5CAs5voDUJDL4TBkbNsQraPRi3yqURfB3Ad8EsLP5Rzu",
  "key7": "3tfZPR5uGCsDZFttTyDxoQFjdoqVhBaZFi6EXx3Envbg9hkoKM2ZNaUKkVExcMvVkJNE4kLJ8j5eqknGN22NqJ5x",
  "key8": "3g2yGU9iaqF4o4k7xh964KhjzUSkPN6h9vdFWurys1jFbq4LyxpoyYYPZ7cs9K18STfzixv5QygVYBEbrDvP8x2Y",
  "key9": "2GapE1Ya2u43ALXd7MUCBfGaDkkknWb57AuaWP3ffHf5vtbZrHSdWHMbcZ2hQgYPSYoK153LVPYoWgMRu3oynEyV",
  "key10": "1JTcH7EUSoTLTByBpZC6Tb6JkcabvzRqhZzs69RhNbM5JqXR1q7wis9EyntwDASw4ZaaXHYVeCoH1kHC4sJfiZx",
  "key11": "2DyjsP1ucDACcRpNuEmGtBTd9WiT6qbcMvJ337VVzhbsPaXNvqGtydRBt31gLtRxUGawAKK7DwBis7MPWTb2CqN9",
  "key12": "ZqAYMbPzMhRV5t7aRDRAeWp8VqivgG1m5JBgNQvbQaBHoYdoqH8AtoBaQgSStuffZwPuY5Fxf2dM9SLNqYBse37",
  "key13": "4iUFicVfmKqiVpj6zunep4xCCq22JUXibuZVnrnw5Chu7tRRiWrdifMnuM8c4hZBhx8ZEbc2HZS6prBNhkm5Nu15",
  "key14": "qtZQa6EJoqHRfEZwnVJcqVUxEJBqxRkuw3jffJo1q9YWW31n7eQ8dcMJKrJRHcFWi5JS1zRmNB7TFgw4FRGqSw4",
  "key15": "2PNB1AKkxSSnU29x4x8YM5V5UMmVCA1z4hPkdPoGroGHaJa3R1rTsiW9WQ4YEtYUHNA3y81JLfGm4bk6uu8tW7Hs",
  "key16": "5vpuurXKoGGijQ21gzA7nTVQiy94TPhE33xgrjiMvnGvv6pnW8tgsmZqcMCzQm8KsenT9dQMmVXYcgPf4AzMzjSd",
  "key17": "5Rm2g6ZJRWh5XQN5pGcg4SpmviktYEc2hUgHktLLc7c3Aw2jfuJBNSJ3mRtV7n3dUVd2Hof9bWBktE89SGACgqFV",
  "key18": "3wRrmBvbCzdgTmdFZsUUv9dZ2EpDMbwS9bLa7uykQi73yF95tKJvMUAF5KU6Ufk9UaAnY31h4XAvTvHCkXLS3NAT",
  "key19": "3vnEuQtWam1zTEqQnYtZMTZjfADr93XnT5xfXjqWeDcoKUHz2ywrrxWQWWHeTycqjFXRYxVPgCqCvQBGbjFDqjzu",
  "key20": "2su3MtGNqgLsFGK3tGq6Yqw6UWP4pFUwQk1BU5X1CnJccZz5M2xpYhReJ8qyhFy2rtSUvDsJKyAA2KP2dvPX4Fgj",
  "key21": "48qoo5Nn4ZiXTHhB1ytsscm5yh9KGWGMAnXMgsT8m7jLu7PZUWNxECqsWKY743opJsCRFnBWm8BsSKoe7oaiQELJ",
  "key22": "cWa5QctMNxfy2mKfu9WfPiNpksL4PWY27CZ4sNYzZPbUDKmf4sVoavBAgEeh3Jt3RLztkoJzx37jPKKrLi69QoV",
  "key23": "5RMSuExfit8vfhMunnotDvNwUA82XrHgsXRfiJ9kexavzpwfhZRnY6QUcVbt7auKg1CBdasxgLmxdqxJ3NnE865N",
  "key24": "UYMAmm4toTc7GttPS4xo75rF42VpWqVhVynVfSSgRQXwtGf2kq2v5JMHXywbqG2GM3KKj2sQSwFwz1SJt9smEGb",
  "key25": "xvQQB1NSr6ZrnpRWYpgbcueW5SXEcNZspED7USsYMVyHsh9Z6L82NubATFDJYiwYkigCnnyAa4PvpJ632gotCms",
  "key26": "3jfqnQEqJWyCd1TJAxaUtDPp8B4ZHutDS58DqaiAnD4z51oDYaTum84X7p81uD5UNFwCJePGTCfNzVZ8fERW7TuE",
  "key27": "4ysNUuayojwozvK9PGHKEL2qn9HfbAxFQtnRqF4AU5LYNFtE7js85CUobFhxaoWU7sKHW3QGuTAWSarPMKQjrLpX",
  "key28": "2gKYXjEbedi5SHJ99RfUvkXzF8rTVnk5oYbR1B5isvbzXTCfU9LsCz24LKxdFBQ5pxVomk1UqeAzvSrDMrkfLEc9",
  "key29": "4jwuAeqepwxXL5ixUY2XL1Vzi8AcJzKZdHUGwxH2ph98JVdWz1zPAsveFcQfsbYfM9fPtm52YatNr51wxT3nnyUP",
  "key30": "2NQCg3DpQv2i9QTWLanHyrfbTrTdn9LysHCAaGB9NqCBMfpbucTqax3DaZit7etjQ7QkQp86QZPek346EGgX6Vdk",
  "key31": "3s6cgCc5oErAajQNBEFU6U5PDYChscT3XU1uPG4jD6z9UEueThbG61uT5PBKCBairhciVJbSz2AvQvFfnJBbp1ek"
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
