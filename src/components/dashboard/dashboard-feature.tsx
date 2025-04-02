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
    "4i3fos3sshdaNepK3XQR1ER2iKcg1rtHchVbx7feZWq9Nop479hXM4WbFzxD2NcriAQ1g1jnSo1ExthN16LvQNC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46o4UmudvML1GKFUmGYRixiys2VZoyf9DEXGZfXA6S2DiRywzDKs6V63GDC7N5moiiSERSTyTCMRRitgygnm9Lc5",
  "key1": "33XgR278Q2CX8qkvT6xTFLDNjP9BtPAVnjmUjEK97ourFMqMYCtm3chi1Tjkcv9K6gPZtQZe1RtD46QDRNVbiaW8",
  "key2": "4rqiRERJZjfjeronfwJmvkBdsoqsRZTVkqWFQXz3X2oVfG6fMnfvgNAcmP1tWVTFyaGsH7x1nFcfkDjd5ytr6xkX",
  "key3": "5cTVHtG8wEekyZtaVhiLtJx3qu6r4caFwv7wWBXL8E9gh6vZWSy3o9hnpPkGhKQz38r5FF9aBYbWVefnf9CZXAFK",
  "key4": "2YjJCi4ypAVMFg69VrrA4VzUHLDQ5ugA835ghfHoDLqJKBehM42qfywgM3V7mjAqJcifavA5tbpygK4RSvmNKpTX",
  "key5": "5DDGPXihtRF2moiMfwC38xREnEGZe1Fnn8amZC4ZN4jGkweSxZqyi5RMtgnr2RadHoiLU5n8iMSGtccMw8oE7Bod",
  "key6": "39t6JyberysJYGYWWjZonpZmRg2F4yZJiMoBoLfsy7T9NtenyU32fs9NQcrjDdBS2TPF5gWsUL1FwmwrTqHLr9po",
  "key7": "5QTgKwQR4dyzLsRNosWHK22fenuRCdUvs7LMB8pYxgk36ur79wJvRXNHtqbDptzR28nktvyiDxG3gxXJvUER2Us5",
  "key8": "5eFSvxcWawi6MEmYjReX6oPKMRd3Z6EVkCGFDys3RSt1H5BcYVDAveKc3yLJ1AJgtUtM2zi6kfXk93d2e5iy7RdC",
  "key9": "66fgF3Cj3cBxwusCHy4LCStBFFKknqtRdm59H2FUWTcqVVUBQmPi2gaPVfzN2JoysXe53ygLapeFXTtt5XDcvt7L",
  "key10": "2cuCdDLsnw5v4xthT7dKvWbfpjK3kNyU4ESE17i9s5ia4mKTv1zFVT3ZhyVvrDbevmPjPao6eUwHjzveL7cJdocg",
  "key11": "4at3decTsWdZvMbqBxGJzsRHgaBt4UMHJxZJ3a3jVMc81SJhZ6xWnnnAvFt1ghWLGYwt4LCw3XT5nJNgFznHfVsg",
  "key12": "2pMXXk6QgFRpvyeLvL2hYDaenmitCU8wWsnoy9RSjrAoraT8toCgY1PdhQ57iaCasG7nXongTgNSHgrhBxM5UhHU",
  "key13": "5XJSadT1CxkxmLqB8iyFmXCuKwm5b4ovBzHLPt2arwgwBMBpivDUWF3V5bjaamRCUSnYscbNMhCHdY9sEbY1Hujg",
  "key14": "MyGioy9P8NQi2hHM9QyNJagnmPT98A3ac9AKEXZ5xiPtiEs3gPoDuVcYXMGsFU65DSyUJHzLEaipzKUwxqTST1a",
  "key15": "65EUyXN3MVSbAavgD9ijZGTCXEV257akaXELuARpWN7fFeaujjK1z6VQzikhXEy1XWXRbFd7KvyoZSCfAhSVScAe",
  "key16": "38MeKsvgZMmPL2iqb6Dd84U8aPTowgmsG7g2g2UsjzcuT5qDog8BZhz5gD2GN8AGpCH4i4gB3dPz2hearJAophf9",
  "key17": "5CSE9utexjdtWVnNeKELyb19PxVN12ThQQbU8zAgMkfnMAnFBjhEGtANxH3SQ4F7XXBjHpNwPJmxVkDAMkQTq1BM",
  "key18": "Q1Evu9rdHPztSR6vYDKpKtovEVvuTjNfZGwcVuyN4RVRoorW5DZSSTmhG6jo1RxRfKfnyQobmyHGgfbwhdBd4do",
  "key19": "5zwPrbeseaRFMbZnJkyynt8BjeN5G3bU6CC6kkJJofzbcrrcTN5AqS7nbs7D9LwxwbSkduYb2VQix8LeeWRqUPek",
  "key20": "1m9SmQue3nFSU4RL85U76Mz5bzkXjFHepMUWyULmtSdwBXH5ctgCsYs6rsXu3cdtGVF9YpqjnKqRT5QB6oEBGUB",
  "key21": "kbgLJkM1f2vHTdLyqBQXdFQ31c7GJYkQkQR1M8MA511npbRpu6C3oyNCJsximxR2kmJFbaVdMUsgV8L28iVTr22",
  "key22": "3m7n4nRsEqJqdyC4LXfckqwmLdmQ95RxdmAdS5kLsVd5CsGfMXxnKvPgWns54AfEhf3EBndBJJtatvprZVoyPLRF",
  "key23": "5U9HM1VwxtdoP4nucTeTjzgj41cG9U6zyav3CZV5vxtpGrBFvQ5oJCMBPkYAosDiXmvmpCVNPpKCk6tPbJkhYqwy",
  "key24": "umeMDVRTJT4fcWWRZMhK6dPy9qwHMp2V2fwrR14jMUGhTEp8srqHNFPVPH7juZ8pnseaYebqWX69XagjhzMLtNL",
  "key25": "t5t7rBXtL6fSkYvh3FVeVgh4Jv1EYpPqp2niFw98ukTMeeQ8xWoLLDsassnjF7gB1LAZfvAaKAUQwfugjjSzgxN",
  "key26": "3MRGACd2tJn9S6j43gnFRsZTqyZonfbuMFsx4c2tfRHcF7rXznp9CfwQdd3dNwGuHMDc5X5GH4vJa4LSH6nhGM8X",
  "key27": "4TK7QnYS2qNkAXcPxBEmJENi6wZeGwvysdNLLPLibPXPcZdY2MYMKGuKxfJu3E36hS32rFTqpYtgcrUtUAwprdyK",
  "key28": "4ngViHRshnC2XgDFJQjCuQ2NUASGLk7NfE3K5WZQSybF56kMzCSfGctETnGkj6GKad2ppFykZ72iQ6KUxhAjfWAC",
  "key29": "xxoZ4i9MQnEAuHST4UeCiq1b17qCTDmGWMyvw2Ed4q5smQYWGCXeaK4W3d99x8AiK37xwet7ibmqP36mhjEpeUo",
  "key30": "5jqWHpBGR97JgDbQBNUqMAnJ6EhUEzPwfPa39hrPm49buNJH6otepwBFzdG8LwfRtyrAe52E9MtZ7DUFkHMhwr1f",
  "key31": "ikUfXmPL2vLU9j3wRTCjEarDvMHo4EyBpX2Lvbv3K2pR71eY8uBh233kyWNhYFbPKTgSbHombenhYXtvHVTyBi5",
  "key32": "2N9DtDdFHqbjR2MN7nPGv88g4j6MCvJUz78oLwv7a7RQ4Sa2vVq7eqXnE42cHC1LNiWmbAHA8Yu3fHj5MwfeUiBp",
  "key33": "5B3i2ZHN8GNvaDNVa7EeUg5LWWgav18XNSubogK8Y1mLuhbUgFaMabMUxiZx4ft5AamXYyQYYQG26BzAoyy9NDpa",
  "key34": "48qC4aVnEm7nKcDWjKFxUph9QCAxC62Vp9DfjhMFdt1YaergjEzAdMmzGDLHvckapUNzAAxPWYHXBumxadjZFAzb",
  "key35": "2VKTSiy2LtLeHXWgJRQH2WuW64MXwwyUsMFF3qUiKCRxUCTWHC5ti3W7o6XjeoqaCajrvDHzWJ7L2mS7tXY9HQUG",
  "key36": "5ub2sAMtrr4yFbLz6WjWokwgbFwjfgKXS2PBAGYMMeLeNS5jxN3Y6cT4H5NcFMhehMkLFgZxudez6eA9hZaRTkmo"
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
