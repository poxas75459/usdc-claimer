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
    "Lzb1k9b2KFesu2ju4mUpT55byAvRyXcE7UhHM3r9YQBViVzo14UupQCUiebuaJFjA9JAiPBqXagHkdNh8KgcGSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NmS79v67iuiya6dfEnuitjxRvzd9s1P2PbViqFCAGovUZwvj57FScpoZadV9nTJffb1nm9DxqYCnbPxvGxLXSkS",
  "key1": "5u6mEscvwxdxrDdkiHPwtuGa79WJP1hcCZjcJWMdmYGAVjCQavHHRRchz5q5H8XU5U14KCqUAPDzMWgBphsgjY9F",
  "key2": "5SrweEiXAimUQc8PcbHaK5MeS1GFG7npo9LCAcEaG1ocsx26tXWsmfufyadUdeXtdiMkczFyxJXzADxgTqHJ1rMS",
  "key3": "2fwki2Q5JcA8bkDHbo9KmdrMoqtgvryG6YsSQSuTc51rmHSqupdGJ5BvbtdDtsQn4VQicp37GVMBpmjSG9e4GDK3",
  "key4": "NZSUykgQThcujHYbmADgju4gJrTnMUwqqndnYNxNUyQvdNdwBsZ3DNwP87S19bzhsXoHcpSoMi3Femoa5v1hTow",
  "key5": "66EaTzaALjZ8P3cj67r2Nu9XMkrq8zTQjpa9Q6Jp2CBhYNzkmU9Ca8zMPWstV8D4kyKnS2QkTREb9twRjNKfdbuo",
  "key6": "32EDQRWSe6WA7wE9FVwsNBjAY1YVDNJknCGQbP9EEVhWQQNmbaNCJWRFomCABosBpG1j2Z1E5ZUpSBqSdGTiWzad",
  "key7": "5F3Y5tag8m2ZnTq4WUvFAmvmeZE6jE94r6yTkRHFBDJJ4bxH2pAVX3ucrpcdopWw5DkTwy3YY7wWaTyT1BdHmRub",
  "key8": "c1nvxRmrdwTsmpGFaDp7Le4unXY1Rt1wYxezsSrFFziy2EcQxjaq7fsFNfyFLrQBXSLkjyCQicFXa5qhX7rraVE",
  "key9": "38xNDSUyHdow4ibs7h64TXAY45USUqvppPFBSAdezfoGFfcdKDAAnEgaBBSiCbGDPGLZ6zLs6J6nkFmLwZdWgJiG",
  "key10": "Rf7ZvyddRX3oebYAtLN9A377SPWRTvem9GVShhfansHLKQeDmHc11Gf3LkLr1BJ8p47vbspNqiS6Sf3RW1XYJne",
  "key11": "5UxpqgB3b2Cq6t87Px89mKBTKUyUv7mpizXsAtfdcybq4Cfj2a8tXjMvjvWpiUpH3LggDZeEJybUEwLeC25FYhtU",
  "key12": "21cy6sx1moNUGy9rqgDpdSRrPCGRmocB6R2RXnjdTjpXFjSRNN6Lom9CjhsqXb1H4xGnKzYZBsWZdVZFBWWBL7uV",
  "key13": "2ezTrthWthzoDGUfVpntq5WMQfdZXwm6V3455gKULuvKR5jwrP6HueYME79hCZCgYWXBN36DnwMqRMgxahsvpcsi",
  "key14": "52yxV2gnbBNAMFTFnvAUEdWKk78Ni2HJa5ZVZdReK7cu4YYB3pr4DunBgeS66xvq7on69XBsCpoFgCRPtGzQF3Dt",
  "key15": "4eyakAY7jdZHETas4PMjbKZj1VdeSd7ro3qFHpYxpVgaoGNu7DtupvQU8Hr5hfDvm8B4nsYWQHiH9xUQ97FC85Sd",
  "key16": "2TPdJ9wSeAuCygSDZbiqJ8By54zWqsf99ptBG1R8WNVBzpLrDzA9hcoMEfvj6JawNvFjWThbQpA73DsZsrP2vD4y",
  "key17": "5TkUZN4zMpbu3MG4qPQWKmkcMFYgfPqcJEudQsE3Av5jCYTX8TvqWNmqSRiAvwkC1ugo2oqNtyy6PeQEQDH3gbp7",
  "key18": "aBYNm2x1DuzTTmtjwDxwTDR9Z8M3MPuoX5BHVwjbiGJXdEkQbETwBHn3pDf15zcwUFytptyPfeaNcJQzQ9qUtAD",
  "key19": "3Xrj5s7JkgVaL4QB6m7BHVwzKj1ygejxwsY62H5fQG55aguGKfUP9z7UZQAVw2KZ87dzpSzV6DJZEv18Gb9M8VAn",
  "key20": "4Ee7qPeGCWqRXMTwJRzxYtEwcCdULjTLDRMZMSfTmRkhuAWAKcGFFjPo3kwtsC4BxoYvzjF2byv3fRoqDBsiG54K",
  "key21": "HmuCWpNBUpbmwr5GZnZdi9LmLqqPmzgxjY2hxk5rGL3W2GSVPftPEabqoypLj5mZE7UDSoRMwGsJJpAfaWRdUaW",
  "key22": "GJxmuA3VkCUrk2HgayPNLPKcAqM4vjvZvhKTdE5u2L9Tr4bRSYGa3DeoJ39NgPyFUs8mPc7zYENT6utR75dnmsA",
  "key23": "5b7BqMZgwhTEAqtcqf6uSZ2P9TJceAoNUtCdHzp7iQP6KssGza9v9iDK1Gkejw5cK6PbGQHkm7b6o5yv7ruxErjS",
  "key24": "5q8V1PNipX449SbLQhJwRBwzyTbPyMTykSvyEKAhzhhPWJNF4sBAQRb158N3MHJnZAfokEvYgbiW9DfBhqdGK1fr",
  "key25": "3CRS6RjB1UbX8t5dKjY7b4HWtSmvRREGtuS9v7rhrFpKjgiAgYWmFgk9qroJxdrtuxvDVUEAjH9ytX9ZoLn9m9DB",
  "key26": "9gEgWh58R4NNkdgn6WWGovHESqE9LFxPgG2pVukBEzXeKj4FRrGXXSHSqxABjF3iCNoX1fKBGPx5nAxohEcmtFC",
  "key27": "359aePhPru9MEhKSmusHrb5RUCSD1ZEWmMA7Mt2oKt5wV6MR8LUCoewiFMmFvgfH9hoc7gR8qUhc3Atoh2aNiodw",
  "key28": "3S54T4jvK7XtyHZZm3EkidqyuKHkdPWp6CDAqTLKSz7nJbp5QMbex1rRSDfiVqweDR1WmJ5NqKDZajNn2hztNEkA",
  "key29": "37LaaW5oyvgLotirJAojJPJPasJzcvFMyphBZ9Xk22WRW9v6hsURpnf9ZbnoMDVPSYw4erXYDUdcJanS7xRs64TG",
  "key30": "HeV8QinmidMKhuyr8AZ9ZZh857H79kpvksEqw5PEkQnZj3wLahakT8vWwBLrZcecnW7HyHJM1Mgv3zbtNfAemSp",
  "key31": "2s4CKDu1wu7ss15M8kD1MPDqpc49AR5BZKBKjQ1ArQdqPpA3MtxhmPpZUh1Eh7QtTPRmmHweVggpmumYM9M6AALy",
  "key32": "5MjdpwYPfHCsNofjktNV7BD1EmypLWRVLyD7pLNGY72iZaqgfbR9E845M1vaN6SjynHmB6jA7GbmGdeYRrEc5q1j",
  "key33": "4mXy6aZ5qMuLVZLHE7VXnC7VVKJw9jP2CKnRssWX9mffrYk1NPp7izJZxq65X78Fn42LpovufZvQfcaUBVMyPqFA",
  "key34": "5LV2MGsmg2JYbNFkWrMHAhuLVr5RtjMtSKm3zkRWibcyCVjGgVGhynKmEydfPYYynxaHfqFhNstXbSd46T9eNyXq",
  "key35": "2xhSJnaLvQGgFV384dWi34LVXXwh3WsUqFyJ23rxz436ztWYHbFQYwcQajaT5wyeJdBvfVbm9RmR4JziawJcNJhD",
  "key36": "3kw9NwYUd3A3H16GcSRnnya7WFs4vhn8GpFx5qEKi9EUcCgdyrY8ztebpYD9xzLrUgGnhjhP1ujTTjGhPYyDyVcH",
  "key37": "5ASHXxw8UC5ov4j917VUhqz3zH6yycDDBQDvutWXpgwJavbqxaNFYBfYYSPEkxQWd5ChDTXtpteP2w7fVu3WvKUy",
  "key38": "4optD5RtSMJJe2CPyPzxmXzejvf9Y1KNDeHAW9zV3LAVyzGVKE5jQGyDThvPX6uibbweeQq6eRsaL2SBBf31DAMX",
  "key39": "2jFms7ngnC4qzCSh8Dpoe63RaPpTi3mFLNnmphrfCyXHb5yFmUUzzwW6RADdtJac1PBQsoFSd9fNAfFsDjYkbeqY",
  "key40": "3b7wXNoTDUQR3AkRwRnmWiSp2PAhwEyWm6h3ANQ6Xrm7Z54yk5ktrGCoouN67Ld9JCSxGEwwJSbQPzH5wDk3iAQK"
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
