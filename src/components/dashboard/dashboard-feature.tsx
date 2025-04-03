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
    "3xTnAULri6oaDiznoT65u2UTjscdadzLC9xMS2qH48DY5dJiApy7xsaKbFGxvpyL9CY4adgV1BPu6yAW8UyMRa7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U1oy13BxaytF6ePVNMtKPJve9kDFBidUuMnTXUkMN15tb4npSQ6XDAQP2C7ER1JDsSggBtoNt6cdN6CsHXDQ4C2",
  "key1": "42zcf358ZtdkSjd7MeyWEvCdTmmtSR4HGAPVA8VeH1KWX1PtuhHVB3zvQhLdQLuggnkAYd213wPZqrW7Q8f3k9ku",
  "key2": "4DYVep7tLRZB4gbuZ92f9r7T44abcXPsy8QJW7rnnqrwbF76XN7XPW6bX73ZzcVW5hgXS7EQSnqa8vPvoN7FWT8G",
  "key3": "5g9B2Eup7hhVnRiUvptegENoRqmq87Gra1nBo7Z4Vr8TTZfx5v6iPdeo87TmUkKbUQ2RTbd98HzEWVayCEMNZ2Wp",
  "key4": "5jdSPtqXspSrGEEFCjRckiVW5PDsvn9mNHnAyA3sC3uLsqcVRrbXBL79zvpqAgyUCwiwrrBuLrzZD2y3W2rukmTp",
  "key5": "5LZ75eEzkcYPg1c4xVQxmhnCyXmHmwmTZwejveMEsFNaXXSZ2YcEbZPTFcjPdGx577CtBWV9aE9YuBnR7PQmfULR",
  "key6": "4WEuJQCPtSfKZZMWXiKY5t5SiWs7rnWm16xm59cTrvyGLz3WKUtPUETjHQzopzNRiQw22F53rVq9a47ffzgbjZXE",
  "key7": "5orwCmkLT6gKLhBrcuecLzRdaTF2cnvtszjEjtmJHHVB8vVEgkkW1EtpV1aetjEZEkYzpcXotNN91hautVNKQmnT",
  "key8": "5YtegyPu5i4PsnZY4VTtmdk53N7jYdjsUE3f8QnqaLtCeEWSrTw9T7HuLj4vThZyxJWJ71ZezQFvs5ysnPc8Tuap",
  "key9": "4qVVUNgqJwHUfGWB2McpfFcpQdNU4z7Jk4yCkL2X3reYgmAeh6hJYm3Biz7TyVwsg8rJLsuHfiApgpYLaUZ5Xg44",
  "key10": "62TSF1Uakk2NW8fd8TvrcDWWECDUTCNyJUe8qGZ8WkFrtnmKE4qjC755VnLL9Hz3Kt3eTfjD9gGtBgm2FCfy1A2x",
  "key11": "jzhuhBGhqCotNMSByhHWWDK1ACbGmNBCJNN5ULoxDuF2a6G3KHTZcju7kR1oottDhQ5LzLBuxtN9mE4Wgiuvm7p",
  "key12": "3mXCcYDJYqt7MkEecAPjFD9UJiE8BN6bvBabFYHTdDNuMdBDidojMjwW6ZMPNLmftFpKdNWCcYoVWG3YVgMkkAxA",
  "key13": "5WqDgZsXZgaSZAbQsuptU3M5LcryucshxsFaWdj5KqJJtUYmdA4GYwby6TYzRmJvrZ4oemtTobyH97k6VnGpizcv",
  "key14": "5nfQR5UkLXHCZnFEew3mpf6mvyptJFHT3Yk214LBMrFQ4BakDA1L278AaeZGXKXsma3HfUYMwHy5NU7vghZoKDR2",
  "key15": "4WVL5miC9Pa5Ufkp2yzC7WePxuij53pcCFVVzxs21w25nihF9mSdJ6vuQQp1gU5iGQupQLGDvLSiFitZXfnqoDSB",
  "key16": "4YZfwNhZAizrWXc4MstD5qibDSTpc7QmR3FpRuwgWPg2iKKsgiEdNimQRUoegsMTH2KCsSG1LxhfPEPi9zgCyj5m",
  "key17": "yfgzCAHUeGVyJ2zMRPv5uKYBLYBsASu3YVRUQbfskDPYh36LHJYjD2Hsc4vUqb6QmpoBFCA8vP9R3EnSXziss7A",
  "key18": "3d3LyysPTFqWyTRBBH8aeRQwSnZc2JTj48feRTizWFzr6GGRnj6vyFp7sGzW9okdeX7oGkkiq19B2izL5MXeKjPK",
  "key19": "573yR7NvN4yUM4Qc6qxrndTf5JZqdxFU1LVRuksGw8ZVEfPWGAh8sBeCV26xQMWhVy1GiuEtaG7Un3xSkcPL82cw",
  "key20": "491qW4BpJVj4FMZEdURpKPAV1vdqKenA242inVxAVURf6FuQhdBfNrNSLKYKuv8ZMnXesnnCpRvKsMmi8Krz3esz",
  "key21": "2Jj7BEXR6PakLSYyR1U2hWAUdAuGBnJQvgKgcGRaTWrKzogyYQktyqVuwNtg7TwVmSRAgeoi1p9LtxPodSXPKVGi",
  "key22": "3qYngZWxJJEAm1YhWaDRbC7cUT7woxRQ6qgEG9zGHSz9RqvhvHydd2Uwhv35qD6R4MZZSwz9b6nfaxVR4BUa6Gee",
  "key23": "5sUuc2pSfZMHLYccrsQQJBMMhzkitJQ1oNSpogjLnjUvkyMJVdEjJhhjk2C7Yg6ZRdBhapHpy8g3JLNvpouT7tPf",
  "key24": "9XZKm4fvEHDnmFEtUzoxyNqxnAsL7Z8H4u2sSKfY7mTfYHzptFeR3EkAaMtgTBWK5wGN9gk1qkHYJDv8k9VJkZ6",
  "key25": "2nYrpXjB6ASKrUmdHeHPUGC28rjCyQScS6ESauicwKJ756T8mnPEeo94LdPoAdKLDuWb5jotik986dmS5DC3ZHdX",
  "key26": "29pJCpCdrPgtyu6hjbVgY9gLpyznR758kqaW7Z7HDqGz5fckWRbJqDUxpVtrRp1iZsbUN6WX6T7PwhhbRMJotEhC",
  "key27": "3R4stvhFLEubmY53KJ358VsbLqf7sCyynt99cc12pMer8NAB1jDpvmLUH3Ckhan9WgB3fFf8n89G7Wv1omjo7dAP",
  "key28": "oYVnpFHYq8YUK7frsTtHVwxvaxgkzjVpVHxtJRotpzqkPKbtypXFTg791Zd4aYfjz4UXWNCA9YGvGCKdwXbSeJu",
  "key29": "4DTEpiTC76dTGiHqENnf297tCF4mMieMNAeDrgXnkjZFGMpqrhPvTzj8e36FKyAigHvNFFzMaar6teu2YQKobPTo",
  "key30": "4uy6xDtjFhp5hJMsvRUxu3fNVVe9tdVhamnejH35tyXzAeNAGtjquL1HZtBSsemk88qHGzMZFD5p1Stsr7ASf9xj",
  "key31": "4dr5fP9VSfGVqB1xbfd1J1vQBvidfbzkPqd6NyWza5BK7vVhpZZHVCUHUQAzYohBjQ8Hs81KF3XPHjE6KstzhU2h",
  "key32": "528E65YJRdsyUaPwPFu2iKRhQ9XnT1hAxnMhGp54iJmY7MwZss7vXdBpJWZce97gKxU8GQADvTueVk4Zw6q9Exip",
  "key33": "3sDB7Jse7f86fRh4KBo1jxomdrfA1QRRTa65odjRXeqACLHhiPwUzRjHG2Cb9tSArxaWXuWQK4Shsz8qUhNkM8TL",
  "key34": "3KozExvPssia4z5WAk6CKf4NN7GpomRZmPnYDgXJnWfpmQAfFLJKhczJXMZ1jRvxHYD4ccEZSpERkyDBqcL1ck9c",
  "key35": "41yDMaHcvqN2xGcLBXfm8XfkLeU19qXzKiTBGRjXhCktpYRqb5eZ1S9uH2uoXMkExsnLjGbWH78gSFagarmgNGxZ",
  "key36": "1iHEZZ6qySD69eGCcjJfEnofFm5uB4FohDRXPbdXDjmUsqoUfNf3ucwFVeopSxJDq65U1YC8RUr6kBWPFxYuNKZ",
  "key37": "3248tXt7fNybi6VtSZRPxwV5qz1npYe8v5tuhqyps8g6MXJ6npqc9CNDeaPbuquk24aYR9oXzQY2iUu4XJRr3ZB5",
  "key38": "5Q4J1ovQiiTRLM4yBf9gWT7jo6mywJNXVfjHCFzAmAdmtjAxPoTXdrS2YBgj3TwkBKKF11ppfGiMzUAy3FbBq5hp",
  "key39": "mhimXQuw8w3umt79RxLq4K4mSTVvAGe4efY1D3AqMFYsQD6fvFywB76yxHukSMr5e5tb4KdZ9PJv5rnt4XoRNfj",
  "key40": "4VZuEt1ZAL4gUDwN6D7wGafjtUafgWCrWB8RnYQgAKCTkejMtR1N94QSP14Zw9M6ppNiFdokxNHejDvQz1U9Q8wz",
  "key41": "3JsxKazpbdq3PEBggK4UJ7kdbGsZdC1HajMeAaVgEfmfXQxfSKEv8yanLSYBVcserp9N4aM24Ba1MaGaa1Mn3hLn"
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
