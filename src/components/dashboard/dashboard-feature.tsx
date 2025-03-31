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
    "5KJmBJWcDo5DieA6Jz2JkXqSCUXuJpwkqPRVP5ZUxgcwmNUyq6z7TTAhDTnMJheXvAQTnu4D6TPmyocwS3nmEGQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z5jfob8Tbq5btoG7mr8oFkUGeTBDNr9X4sXMRFd5MH6umXPSd9HJdJ4YHYGeGYcpdpPPVMpBJhWTznHM4j9uX4u",
  "key1": "3xFvF4JaB8GKYbrKD82kHW8FpY6CWimAPj6UeY52E7MNnSAuEk2yhgfs6vQueSxZLC9LD2Bz4kifqmPUfeeksjFK",
  "key2": "58sH35YjsQDjRr1Sq4SoWpvPC6MciBkwjeXjE8o5Vkg8ZL4m6iCG4KCvqmsavyBJsVc2nkT6LMqGnxGouTsiSA5F",
  "key3": "3WuH7k1Eotx95xnwQYouqz6W3yms2gSrqigWNC98kdT6KdPz58B8h9BGvQMU4g8J4ikFzAVVbDAfejre4bfBmScL",
  "key4": "3YTREokroJa2xvQnxhL1fAqzbMBz3jPiZNfhvb3G3E3KvSqCBk1RiqdKNR1uR9Ht6iahLshDiPLSz3kDFCKTLx6w",
  "key5": "KPUVHXUDHdQ2qhPZpXCA8f3T8pzKS8MQaMAKGcrhWbHUGN8MTZ3N2UhB9rNnJi89kp2QDGPrGs2mCA2dCcYtjCB",
  "key6": "49nj51Rt3h8dfoEWeLJe4GhoVnUBW4YzaxHgria4fYU66nQ5HXR6STGQvznkx7LYVymr1tryBoW2zmS5F1E2EfwX",
  "key7": "5KqiDSmfHo4tDPJ5jZdjJMHpEHVsei5PdAqZg5W96ESeN1ZLaXYj2G3YwzvnykyZ5VErswfuAhuxQYcS2tQp9EBF",
  "key8": "4ZttA6oxeczYmZYERCuX7R9dSu8CtWpbgfKej7JTRrAsYHjq2FUk9txFiPX1DA7RmDDLWG7tYKdiDCEBJsY2DCvj",
  "key9": "HhessFv7zAh8BuxK2GKdEM263zRGnJjzTXGcWwFg7FzYZjbK3RYEyV6xMg9bD9XTmxX4h7L8TWnnUttPwALh2JT",
  "key10": "2DWQMKBhV3iYXqGCh1fYUCUV5mVUMm9ToPMkHjxPQ7QTwzsCsy3gGEFvrKDyPM9QRcRyRqsmua8ZHNTTCDLpex2G",
  "key11": "RcjYNoXwyBoLymkciEnv2sbGcAGdj2j5sjKriUV1qwdiBP9n1rnWaXdCyBSqumhG9udpwvbxudPUMytT6cxV6vt",
  "key12": "nvseyS3gL8vRVoDeGbTKeNUwEsav7skVxARyiSfjL9xBdA2wK1HKHUpbykkKHtyLC8vvK6KCv696oJMieegYt3x",
  "key13": "XHPSBrzb93s9nUUfTyL27ady6nFKgTFEuRyn4rCAvqykiX3Jf5vZG8JTEQ2eJXzWQaGbSSwCHjToYsXDarxo4sn",
  "key14": "2YxZRZ49ijRXKcGYZM9Wm9QrgtNYVumnjNhHWmS4t5xxQGmpEahkHxu4W9Yj4gPn5sKmCNkDeaZkfydEzhp3CtKf",
  "key15": "2VtbYWUUCY8E7NRvy9Fjg8FbFXJWCgDDEwZXrrS12G5FYN95MU7QoTA5qL8Wcsg983bqdBPj9JbHiyE4rEmAgyBy",
  "key16": "3Z9QRdKKRXfUvHKsaFgJt8zbRKxiB6C8nkKbhokAu96iAEaW6ixHzGmggqq8urx7eJDSb8cD5HtBPBwNMNMaZKQL",
  "key17": "2DS13hx7UQgUwk5kZUxCr8uwvGZsZYpRRwifMXTEHv36D9gcpD8bSgwLjsEGJSXuogh5hdYTk6QeUa4FfTfy6V2d",
  "key18": "2DFcZAVj6SnyQwCjTWw3XKi25XLzxNtq6DmmoKmtLXtZotubLDMimRBjxHsXERRGVtR8KrPEcuoUFkhRzsCZrFgJ",
  "key19": "3eDf81tcD1fSaxUHEhSLWqoZL4H6A3pJqpG1Z38tNrkFwVPu5HjohqrxK1ceuoNqGWoQRaEUX62Xg9GPRk567Upx",
  "key20": "5HcWGaBwVvwCmRSRdXTx5iwF9rLBLmde3u37Wt61uRYrY7vAhWaJBF8PRs9XZrfmjquqxpVGTPXiFafRZNhxfELV",
  "key21": "5GXjDMUpqmq8GhqFVoMZrDDhNvQYTSrt2eJ4UcsoMpE8CSqvJR4vxqDopmKqfTry3NSyEZWicVgf8gwFpVqQDd2Y",
  "key22": "2qWtrVNLfJGftQr84jwZ6KnYoTqjf8negDskjibzaVDJA6ufPWm9NufyryRfMhRJWgf3R4q8bQQcNXEVeczuepRp",
  "key23": "3oPVUoekVCmze7XDdQqrknAC3nQg8uH7TTqPsnrDRbi8EG7usVzYXNPQn4y6T1GWmGdmVjUquAWhqq3kE9wbDedY",
  "key24": "5q7LdDdxwrpfVZxve6W8aW7fzqA9h79LtYL6ZVCvpMWFh6FfbjRF2Vq2W8prtYFspueAYsCZugKmamaCECoEjjpZ",
  "key25": "4GaWaREDYVALjcnG1LMdeaGjjYYy4UGHaYtStojPZ4V4TqySozxS5GnZaxGiuMHJRyWe7PoHTSdyfgjh2vwZzHfx",
  "key26": "4d6JYnQB8mG8BBfKCx6Xeuhm4RwFMSuWQEXVbKaxnF9UjohipCMk9F4zTBYYLTYjuQa1xo81P8txWFaYAPW2MpdU",
  "key27": "3ZTPiuSZ4yBy3TCxqJwUEDVv38ZHgi5M56ghTRofvXD6cPzg22MXSMJ2GMTqL8MhQKNTXJrSgpKFEWQXorVXPhzY",
  "key28": "b2jergEGhe2JvAyYWzbo1Zzp51Z6KTwDadkChFJtQZjnnhBJXbe1BKZ5vJ3fwFVRNcYsjD1KGuKmDUXWudzYPZD",
  "key29": "5DUJT5DPGhzWuVkWfv4wNw1yKvWUAAnTRTUuZBXotkujHMsd49dN5hni7Ccr2cxJKkTZ35c7LtRcZ44hHjoXLCr6",
  "key30": "3x772i3j2ALpghbksKFNX8sp21wvgFgJgWWgfJaCduxWSP8QtkgwbNKaBnNrx2FbTSnXoDHwmfbrbkjjwYVfLCHq"
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
