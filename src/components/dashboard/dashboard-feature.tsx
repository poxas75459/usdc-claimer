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
    "2Faq3QnSoCZizEvDvZmBJyczWy1PGZPDsXzkWeV9GqyX5gntceQrjKPGPNkWe7mv9My5tQTE5q2Lzvx27AjRDnbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jBmAo4NVC4wVJLiT7W9b4Br4tXjEiwdqY2JU1LPtRWS4ds2EqbnB8QY1zyhSwEHGHzyTYMyhcVSKNADQMY7deKz",
  "key1": "63bhZk3r3RLPfZ3gzTMqGM3LUNTPdg5ufjBq87QLWsM2MiZDLr1CLpb1DBgssDgPnguL5KBauhW28yY4e2ANX3s",
  "key2": "4ZFhhNEm5W9ADPQ1HoE3EppaPmpYnYH1TN1iBfAprJCr3H7vuNvDvMDoX4SGB128hpEEKnMHdwCZ6YyUitmc2j4G",
  "key3": "5GDkUtxfdtGoE9BAS7Gg8yHn1y5dLe1zRTpEJXyPxyMVg4bKuKte5s91Z2NQCAcjV1dU4e3S9j2rPaJH7dcpGzjk",
  "key4": "3CmMLd5EwPskZW9RpkyTyoUSFhWuS6UjFM6NhqB7yWPwsnjoVPAyqm8kpEhKobQRrJMwT3c4X7JRzBXsEgXCPnz4",
  "key5": "3b3zjY99HnrWpXy59v2EFfT486wsVLf79nkBV8LUPrDqPGUxB5CMTJAGpKRtJNDqramdhZZHzR7ZbxBC2NywfgTr",
  "key6": "vq2Gd6PJfGiXz5ExA77qjvtPcFWTEEmHokB3rVQETdWbWFZwjV1GNvRbTKmtFQhf4AqDVZwYhjPRv3DSDbepJ1X",
  "key7": "26k2dZJRsVA6E35dH8cw7Du2KF2tf4AgVRSRAZBhsvSCn1bKraspi8jyx5yiQscPJVp2hL7WoxShtyP6FqrLRPbs",
  "key8": "5s9bJMKbSExRoXTGkqM9Dxt3X7qb14ngoBvsp7brqzBqobKKttA8CyJ38D9V8pd1PqvkLT9coGdiixQt5MM48aLJ",
  "key9": "XMnVoCb96L7BWwLobyXmWpeFEYueW5gQEgJy2j8t55z3yJeT96qESQ9KSrBChBva5iyRwNxfui1PHfUJtZyrAXu",
  "key10": "4oBsuSkBzctkrqtq3f9KHHxqHFB8jSC8B4aCEbTvsCVsaVPDTVxFySCvKm3Jf5gBQpEXQPw4phwyN2saBntwdoVY",
  "key11": "4wfDiJTsWmUmiU9RZXVGjCstaz61hd2144JNrgfGe3udWBYJjRCWLAq93PqhSivNDwbuiji767XFzBYZpb89uw7X",
  "key12": "33z1QezWU3m3EUTmCphFtqVFp1XwkZ9j5NJhcPoMkhKiVsZVNtRXyNR5myQejrikyUVdXQ9CXFvowDdoXoUnwtc",
  "key13": "4wXwwhwq5Ube8utbN7C8wDYTHjQd1yUmMYXBjstDMTRji9Kqe3BTcZ3vrbjoagLZ1v53PETEkBb4tCQ2wvYa8aHJ",
  "key14": "3itftn1uGPZW9DLRuz5JA8711vZFUgPNbrS5WjoJWhNj8zCgJWoQoZVQLq7BjkW5AfZWpkufGY7FepWgZVCFNbyF",
  "key15": "2mv9SujPbApUXrnyuFiC8aVwrCWC7RouUFyZFQT3qn885q7RDLgjoqUwmF9rARh7bL1bcC8ck9ScBU6BLiRdUsEB",
  "key16": "62wLB6uKFJ9UnA9m49DWZ7LXUppq2H47to8FsN7LasqrEwRZVZY2xeUxC8ExFBfFPTWfnogC8vk24pJYVfSwZitA",
  "key17": "5iT3ywkhHJTjEyKtpKPdg1fVvTBXaXugc9yijkdg3zhLBfdE6B5sfAUxpQS6v6xyfPp61bP3eNYxSNN9JWp9bFzw",
  "key18": "4HLJFYCq56sf6sYrDbCfdNqyqKZskLX3TSbWhkFqXDZQyVoM5Vuhc8mmAuJpE45rKycbu5dBTgPtRG8utQZDJn8M",
  "key19": "3o2jA4dqNFY1pEFCVYPezVsR3MNvJjHmVLuYyZXVtXV7GagnnAcJUo9NFHgX5R7HR1UcWFKKgPrr5j3kG69Rj6QK",
  "key20": "4HAAggpsgNSyFvQ9KF3X3P83XAPmH4cCGVX5RhckT25vZ4Ebmw1kkEqNGkYypMUDrUvWzR4xGpRnijFUVL8M1hGs",
  "key21": "5Eim34fzw4kmH6SEA5a96KCMLfCu87PZcCntidXdb3U8CLy4RGKgenc1LTq2hxzd4pZ372HRSMfVYZPnFFymkLyf",
  "key22": "3Xbfo7f9PX4M9dVQbofMT6YZg4TNdbJhXdQfo9ArWxhU1cn7uzf9Cw1WYo6XKLoUQSWYosGsfkbtrJ7qUj4UVYr1",
  "key23": "4ZmRJ2GjNUYXV12HqgVSiyDUBeeTKPPEcnG4zBFfTFYuyPppWMWiEG7brLztg7S8rU4dZfjgk3WdQZK3mooJGBeK",
  "key24": "3zxs7eMRzZBu5UVRT8dVY3jnJ4Nhik1fXq59H9MPqfKMkFsJk3ucM6hcX1H9kgkuG95KZGuv3UQZyz9BhFR8w3Bv",
  "key25": "57gGhnu9vPcf6NnEFjZv3ffVhX1WKwfgN92PBgG1UnxcC7eaHiHZ6QiDKYnaLq85ohhvLXt5KujXaNjkPJQPnh2P",
  "key26": "3JRF4MNuuJKpoxdRX79WwGdbLSvMee1zrh8aatSeWfRB8mDBvVqr7GyTFmjbag8TcxAxKd57QJvsdmAuwAWWx7Vw",
  "key27": "2YcJHJk76egAda9UCFErFEA9nnZkNjpzwjSfvWPFkGHhJBdJWwnRofwy1S5748P7kzX23eiun2z2zW2tLdiN89TM",
  "key28": "4b4EnpbrW1aT8FXEUu2m3AFbxUr21xqRSSuXXZHrzYUDBjBocVPF6sApN9mgbYcr1aESeEPZvCQMvfBr5TdSBzbZ"
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
