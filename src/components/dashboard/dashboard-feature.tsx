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
    "ctH6J5uNbaGF9rVgPVMEdYZqHr8DYwUFtbTPogrqauWTTx5GUxv6X7Lg8qZ67affC6QzdadPeVY4e2Yj3TeK6fq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SHYsKDZ4ZUy6KRCHSkTQHWz7XPCQw7dRG6DhKytc5Y13UCdcP7AcJQ8ojtNHATA38ELKNZnUgH8D3RnietYbeTh",
  "key1": "58XqAvPCdJCAYSD4AApbA4bT12m2YSb8BwrApemNYVMEXMZUviMf9Mgi5DsgnowQbAVjhNvjDvw49LW6GGyr3net",
  "key2": "25jrbXRWf3QjBptQ5iPGijnov2tNorn4qSrQ49Wdt9Lqm9Z71B9Yb2TAggLvHG27mHFXLBoPEBUMNY3kK3AG8R95",
  "key3": "4BGZCgTN6VdYoPYZb8LtPpMEmB8qC9ntisdKBimCcjQtTfrCLVxfAHePiB5AnzvexD73FhJN7BSCAKspFbBqsQHG",
  "key4": "33EmBFL4a1svcUkW8jXPjXFvngyGAiooP36AV6mr5Mjf8bqTpyBDdTjGrrvFXLrvuJ3Cn4wTMoZXbvbEBa8KDycg",
  "key5": "5kFo8jfMEgNtMecdsAMMFQ5g5xvC8BLmmwurpZGWDobmubwLKtQvPW1dXrt4EWKMKgjqYqqMwzKsq6j2ntffs3W9",
  "key6": "5adN2QXK8XBz68Ts17Pqgz4sEjswRzmPCGsy3mSjENJ2Q723wmqKw655mXANfcwQXoJLhbiKAERFJQJpK7TT1kRs",
  "key7": "3g5T5T6nEAQaQXkypKZDcEn7axWMDFwH5wAgNCcfu9J9p769YbzBjzsRrofiC7GnpYRiCbX8yFMqGvHtgk94FJGd",
  "key8": "2Ati4G5TCa2bP347b2Jabvw9VoVJ8VjHH9rkFwwyKR3qXnTCY66KL3Q6rcXa963QndrDdBzy4R2esW79L6o3Xrcw",
  "key9": "5byYmWYQtuULAiRVXiWTk5xJzde1RMTBUeh9P2ifkwkKu5rTYPM82TTUMWFMYgAZ1Exf61ZC8v2TUUr5ZVcupQUE",
  "key10": "ifvqhXDJe5dvQ2PkL5Vba2QduqUJHfatNcuXRKvtPm4Tgd7H1ouJMXd3kx9CumrLeMr9gBHLTmBV6WEyvvKNr9n",
  "key11": "25NtoUP5XnWdwzrqxxCA9Si6BQbmGdBZP3zYWo2y2ybTGUuXrTDZzJ4bfJ62XyVG9XArmFazpWSXtNkzMDtnRc7g",
  "key12": "4boAE5YNmXvZRPnye2TTVtzagHSyQGLeSb4yMKfkJe3dnbMQ81r4hkQhtrhui8wKJpGQpbmGpJPqR1SNSZEmdy4W",
  "key13": "5RgPXHVeY4JkpbFT7LgMDN1ymTnaWSsZbojN1Eow7HmnujAvZzuWbwE8xsVAa5jhF3qSNvA4L94P2Wf8JGHjxSC",
  "key14": "GihmHofLPkGeJ4FwCe5a2ELkfVKBncRaUh1uFvWrN9EhLSXhLgDtBoUdifAnVwgs4dmPgzT3FYZJ66KZJ6dkdaJ",
  "key15": "2QxhiTq35NUXMSBAbtjoaqK935LsRd9gyMkMmrVKTbwVn8drhieDcXRL9mA9RP9sYK3ahPPcnyQjPrgT8rRbQxqi",
  "key16": "66Nb4kCWoGLKFQucYLUs9EXfPJchMwyewgodAKDaBLDoKqNtbYnraFTUjZHGoCbSazji5544LCLY4dy1uGqszgry",
  "key17": "5GYK4npiWMP4sio7gJKngZmrE42aELbAvehDuRzQMQNEsp2aChti4Ld5fb5fx9S6RrHMtbRiUBJJuPY6pfJKFjPX",
  "key18": "3haPVQua2v6TptwdUWSyAVFTkZboW3GWArdFesEiMnDNAZhwFjhPBd6Y8ts6wjEQpWQv6HFvoPozX7VesFaansgD",
  "key19": "26Srdvi3vjQdNBr6AqtpYxtw7gf8zGo8Z8FxGMk51veaa78hRGmnPJ3AunENUQF38TFHS7sS5Dpd5ag7d4YqLrLT",
  "key20": "335dNvniSeGy2a5wRGhNEPp8DoJ8jyzrhasrD5175ypeKuQDyFToVsZQLNsSeyJSF6315pcJRsej1EFv4188BmTQ",
  "key21": "wrAtThuPHS5MybYKsjyVyPYLiSBUmFXK3ZbBmUwdSo3onz9pHmQzjUHbWLGoR3RY4kL4bequXHSpdgHqvtn6LT3",
  "key22": "4rLtdHsthFfE97r3C1oBzcmNGP9MFWLjA8mfhTxgwM2pWnPKNNr2FfQ4wDkuAGrjAZNqYwATjyPrBxjsEEaAW2GK",
  "key23": "5yQXbcP6MbTThsyjKod8zFCn2qVnZB7nGpyq8ypUPR9N7cpuY2BXjg3eeBTsxijjFPYsaV8PEL6Z9dceRKb45jRC",
  "key24": "2JakuQVK87XeipdVhSTvNfRtvy1M39tpPjG7u35ZETmfRKpcwe8ChKmZsZvYJtpBfy7uwbSdSoQubzfSUCDvX3Hj",
  "key25": "2cW8fedAVp6yZAx7iy6DpcRj6VTwmAkkvdujbYrVeEX8JL1w5ar4vrtweVxXsdKeRtCC5GfUFXd93RK7nGW1PvjG",
  "key26": "45amqqdpW4z7F58feGBWibFBUdVnv9VfVLC8rmQAVdx2oaTqXchXTvYzM8JTgrFZzNhv5yp5ANgQM9uj1rCoxdHe",
  "key27": "3WZSHRdZ76uhxsnvpNfD7jgPU27GTKrFuG9tVkKzFs4VnHFsUCGs4MzcRoK8K6me4XUctJ7cXCVBzJ2pyFCHtBvq",
  "key28": "DRhqUmAxiEodXXqMQNU8HQ8uiFokrEaijKP2RMyaVW9xFEYS3QPys4spyyf6nEQ4LtFsriMxkddXDpUGLEfbZfZ",
  "key29": "3dNFzwXUcmmh8WLyNy7TpZfFvJ49UsgVruVUKFQPSwrjRVFfo5gYrxyVRwcyZZ1eA4CTbSsMKmuanuo5b1qLV4fU",
  "key30": "5v1D6puYJLSwXqAc4imXFz9tgh7sSsvdQLnxs7zvBHDcCKCi9P4LSzSvaTqb2fpM4u1uaGmf3AfTg3g2NJJSgbD9",
  "key31": "43yEnVKTw3pRyu65SbRp7ikYBUs6aoKAie5LbvhE5nhy5eU5ErX1ozcqoPZynBxZme3AXCjvQmidcREynEJFN4dr",
  "key32": "4bmYPvZUqLuZsTZaTb7sqFwbQu93BYqgxAuzbGgqvz7qDkRCyXt3fMAojFHoJC34m1WbBP2U8Wto3rFwyfYvc7SX",
  "key33": "2S2hZhJLrxzBVECivPrzc7oj1f7JhFjD82yPiCw6sYjooUUY6i82YRKXvBo4Usw3feDjduTyYTUXkWCCttk6Zm2C",
  "key34": "33t4QYBQAZ1fiqTKxDBVsvwDnxKEGbzrMjsSS2EdvnxhaH5DwsMfHMeHkmkBeZ2RbMNuc43bGYLGitaw1LdrM6HM",
  "key35": "5bEdUJgpVrgtdow4NjS1NbXU3jRUhtpWdoPgm3v2Y17Lkeeec4SjRB2GMytCtZ7dGHfbXpw5obPP31at4H3siuqV",
  "key36": "2NzK9e8NwDXWCbwHrHkhhVQs3WzSuAJUjGHV1bnG3yFke2rT7CRyYJRKBayyQyTV9breuhRwRMMQwKB1j5CqgYY5",
  "key37": "4stmvrMuVbLYRuTC4C9kxoQN8ht4d27c2nxMdZKntAaAMUkCqDWqcbeZiRsKd7KRfJ8RKvvfcaKq6vbkevWCCmbg"
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
