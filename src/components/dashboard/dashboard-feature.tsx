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
    "Jvb5w1TAJJVBK6NHnshFTCUFw78krEyePZ1xANCUgN6enVnDquYjWV4rP3WBXAn6nUKa3aVuGdKDRhD2Ng7cE88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kx472yi5WQPACTR5PKkucJzPSiGTCSs9EsjP3hzzLmk8SBpFaKFCDLn8Y6B6hDRfsPMnPP5XFXCgpeYavS81a6V",
  "key1": "5z4TBQ8Aek3H7V5J7TTdMmCRVeFbizZCKXUHVwHj3F6o3MBdW3Rf3ShCQo4ZsPYKZbbKqYVzj97NHKPixqmNu9yA",
  "key2": "3M4h1CNUv9P9qTAUJq5kjXWCrMxvQpcHRneZQT9ukM5ircWk8AAVqKsU3yXY8MDEok7Vvoj6qjbJsBGNH2ybP3De",
  "key3": "2eDg3HjCPdhfF7m51rZirqir7yFcXkhMfa3wayVrS4RHAKBdN3rzH5iYTPwRXBsgKE4ou52oBPgxLGTcC5JX78Wn",
  "key4": "sksogFbAhT1mVfV2bg9fB1sWmEEUu7BmSjfibT5TbUuMAyLf7cBXhAhuW4a8yD7FqUT6zHoX88xXRBRz41sJney",
  "key5": "66EZBsWsNsoFETz4tud9WD5rLic5WMnANiWFqUSyimKdz5CB8NjA3opSjXafva6XBCt7ajzExBZ5Rzi6KUNd41yR",
  "key6": "5y2UeKcnLvXAnX4gpUv2PbBVZyzbGPaBgLwKgKKJiXxQcooZj8bra86CGair5xDmT6kvvkQyS1oH5miPbq4Te7Mw",
  "key7": "4VvxKZbVzaSd8Pq6aWR3XoEJxxFMaKCVgDy2UUrq4bDi3Q7xfL6B7vrxzzq4XMusUnWmZMVJDZjTWusFngWhL2DL",
  "key8": "4amDw2jr5XoEiqrVxJx5ioXvQKVEyWhkrEwJnmKxgaK4HjrdNZeQ2BCYzMo2hewCtnoxdjgYitympBcbb9Kvt2ua",
  "key9": "5ysxCqwgarPuxmzFnusJXPTA7c98sJZ4WTqPytrZXhVU7JXjdX5ihLTHhYPEoTQzDg8YfLkun5BxWHXZ9kwRXQZj",
  "key10": "3TUwGW8SKL28oYfjcSiFbrxkMtfU3HJKQdLCqPqQVVeENq8rNLsTriPpeiaWT8jy9zT7Uj8ocoijy2AQEmVwkMEZ",
  "key11": "3TqKsetoxWwcCaeNknJLXU9PPuWtgzWvHzM1HbLBs9N75o92uJEWbecgAF2YsJDCcMdgDARh2NvzX8LY3sQYuqb4",
  "key12": "4RQdrViZ88WyuYFjSWnVA4NbJ73qJxrRB1opsGnhVG3ke7xxPsSagkBPSqVJnr9dhZ3Fk6bjtoCJccRE1T6Nkm7g",
  "key13": "4muEsTRLeJEC2RpYAXFy4n4Yye5GgwoqnG9YBkYJViRvV68GcaoeKuScMBTxcgPJjKgdRdJBNitqtM4oCkzWeJhy",
  "key14": "5Kd5s5Fk7DByQk8F4WCYEq4KdSZvfKZcRHPPWqfiJVkvkHwMGM7zuQvgEsw4c4B84dKjxGEEGtBHxH5XFVrabLJm",
  "key15": "3uDvcrD7n3y3JttXeKmstdFLWU1i6Rp1mZVURMPYoFBRNUmYqTr6PdeopmHi7beGSJcY7MTVZvbdpfVTA1T7Vu9G",
  "key16": "3jzNfjVVL9M4yqSS3FvTFbKbugS1adXqjx4jZTZdJhFwfEz5AS5LiK6piVfb8ffBcgQBqPg6j5XcuMyHJmAfinkR",
  "key17": "2tPFwQnDViEtjtJX8p5f4GXbgpJzT7i23bJVM8Cd5B1ZQeSDha5NEPP2gF25K338beXEoYPgfHHasgmJBydmYRJy",
  "key18": "211bzrwfQaWGMmV3mBr7wnaRuTn29mRLaor7J1LQFQ1VmuAYvgAG4BNbKwkzwQzYMXqvTXVtM3WTiQjyvVNJ2hMu",
  "key19": "39hCcXjfKEycAZ1AmZeC3Ce1SdZYPdHqYdog9v6nBTe2hHNvntUbBjZvVcgveYBcpLCo4A77PE7ikpHPrzXqqAUp",
  "key20": "2NjQjvmhnvEb18zDS64tTU5bq2sD9G3LQAunb7SWtKnFzobjY5dk6W2au3jJRqafq4BjwU4xzPu2LgVdmeKBQG3V",
  "key21": "4JxDXqcWVZFHbYw4fTLS7dw9tc7vRwPKqVPKKgCMcXfo8VnHcZdwJDwU1c2UGSNw76XnLEPpwm7V6XTvKc8Teoe4",
  "key22": "58JNh4zGEQYoJm9i5peCHTEgurvJsaRMGvTzijcm29owJVQYj2c1qwxQCRsjFx9PQYmcQWPRYkdQyuJthwxDZLr6",
  "key23": "39NSRWjn2HaacXsvxpoy92yjdx8V18VdCLRqRB2NzFKeaJHtv3m3zpatWWd7T2GkaMrjNetPmLe6QFxRe5NB6x6G",
  "key24": "3BafJXst4GmhM6hBpy45KerWaGV3s6gLK4sponSmMfLk4Av3rs4TfuPaNBXh8Gcbb5aHApUzU82MJdXnK9MGeYxP",
  "key25": "4u921s8fDBdaEoz5QU6EmHdtruA6UEV3nncUfufE8tsvfb4TLvGd6z9cBAiF1pwLNSGTGQCcyeiwrJb5tSJ2FXgr",
  "key26": "2bE7U1ZdXFyYkCbiT17EA4a69KmhqUyo3fRiHQXWLTAQU5c8vbUgdShTZHYYJV57xpnSe1ft1ogDjW2woniHA2kH",
  "key27": "3DrGQTMmYU3hMQW3cqQoDe1oAMVJMGvvZg9SK559QuZo2ANvu6M2w3Xy228tmWpiGSuJyfbMSYuLmC8qUDknMwKG",
  "key28": "xaFfVTehAySYHJPM4WHoXTyuKvKy6C1GNgnZvBrdmcBMNYAU5myufFdmkeQXPGSd1mHHFrQVrCnaKnQrqaFwxMc",
  "key29": "5GTsE6isBXYvf2sa1EWXeR4tFqUy5v3mzsPRr674T1iodBiVFM9DaB6xbUvSftFrM5cyx8Hs3TfqmKcZxmYztTho",
  "key30": "22sRLpJRNdNJboeLusa79jMSZRxNrPSKwunkoKsGhBruE6CgCKDKwzTd9FPWXLDSuQSpSoPRut5vEAqmC7aPy7Lu",
  "key31": "3r6qxoWtF8C7VjRdz9j1fCduDSBjzdxLV9N3h5tFxZKEhyGJDyd4FBkvvaannafey9Z52BrKLCSeeN8NQg7QQCUK",
  "key32": "i14KLXiZGdja6EMCYcGTg1xEER9xABKkEW4kYxULsX9YTbuDjQBqvPVLdzqwmrxtLAqPxxLLdeDaQti78G4zD4K",
  "key33": "3exjUQpbBDy1YMAK4dKsiyrcWVpGez1dW19hZtjuo6mtV6hEaXTP4pZ5zME5du71SkSaAWTeuQMcpPGnPxXYBR1u"
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
