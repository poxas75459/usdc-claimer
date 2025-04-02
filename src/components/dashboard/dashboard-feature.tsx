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
    "5ebYx2GgsfoFoUN6QaPqLd9b9ymx1UK8B5nCkjkBfuSWbuieJqBPEQ4uVB9sC2PXdfoVc6nadpqXoWLaEims7uXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MxH3WmpPwEfK6j36nfXi7nb9bhwPdajx3QHnX4fn8UaroppxJqyPzmeEExjjc5DJyHn7x8B7L3K8V2JNEaGKUhA",
  "key1": "4YhMfP48rTonydf11Gdrezy1jTmPnktE8DGidLQxDsEJF483prBTpXCdxtEEefBggmmE6NLwAdxWPR6GMPrxiqZr",
  "key2": "4dmy52awwcfLmVxQ77rHHVz79feBoMeUDhqeUMJq8z8gMWnn7M5LBimARQCFdGQ64x8uRw1vugUqacfistzQVfws",
  "key3": "7z3xQ7yshwwjmQe25rnQoSCYiq3Yt64X6HkJDc8ZkJ6MgPoMqVkbJNii6cyEVRRwMxtx8qvjhJRwTjnwC1a77YQ",
  "key4": "3qZuVcQ5sZdWb4P38ptcdkmP1WrxuKJySNAMRAchTFy5gtUe8iP7jYsyyyzZYFNJrZRKzspavGv1PLcEtBdTU4Ay",
  "key5": "5F9xeQkUEUS6jCA5NoebqWCWtrpMPxrXS9HmoGzPMwDDUPmzzdkmgCXY9Ui7vywNenoCPeGAgwGgcV59R8UhDKCm",
  "key6": "2z2QneRcqQ9pEVwn6gy7XStdhjTvHHMgmfuEphd1QkbMSUTSGHEGG5eu6BjnpQp6hQSjfcX6AUSMfeVQYNTc64Hj",
  "key7": "3Q4svKNXavqyfuRGxHF43rQ4qSayTCVjg9BvXeLBvvswmKDeac11iJJKNxtdiyu7jw1FeUkhN65hppxMhBE57Mqr",
  "key8": "4wy39f3SVUya6T2LiwE6XnyffrAD9Edaaz8BxodtpwmBMGLRD88NMnA1wNFBHPGAHPhr1BA8XUw8FwpuX3J18JMr",
  "key9": "4E9i4pJqpNcdd278WaQ5csEtCAr159gxZgyTusrPFdMcGNAu5S2GdHr78ND6owbk71edZygFxMsfT4qu2axJJvYp",
  "key10": "5ZxRCW2xtDJNzfs2izsyustw7crgGyPPYH3mpXarr3o8czMve6NWUGXkZ5JYfTTK9KiV9e5sQux884yQaXGcnqJc",
  "key11": "2FxDFjPNa6RQHMQoEGYG34nR3UZfm4SfRXHqiKD8e2hGzDpahf9VsHnWNQHXYsQ1WFSMpYCXeN4DY9fQvgpUtmjt",
  "key12": "5RKgWevgXjZDhZrcfjuP2Cid7gixW1AwhhrWnqcUqaFb1mH6LJ7eMYvgx4SpqiwP2EukUyFKfxCVyWKzXk7gfSbs",
  "key13": "2cejSup1gyqNmRVHmwAG3gU5nX3rgNpwZ6rwM4JoeCYUNcDNrnZr5sSPHkT6uVTzzxyfwt5aSK1GxBzNWhszA9kS",
  "key14": "2QgNzq2cSdHxv2EhiVQ89YtMZHmwueRXoGDCqxszb7MjYPSTCdoK9WDR86DTNqD4fbcH34nbYGVxCcDoBLf7BbmJ",
  "key15": "4BTAhntHE3aRajEQYhTeAUho8i5t3dJErsvnGEVZxwPgtuqvzcfpk3zn9uwfhTsKA35KY9xkEZ6VfibBhU5QKrFd",
  "key16": "4Dg1Q2DnUcg3H7sE4jvSoedSfgEHTdrGo4goRLXiRHvkAb2HZPcwrQdL8AANfHawdQd7Hz8vQ7BAC77REUMv1pN1",
  "key17": "4kqaUtAj7NRtnr9vDY1gkpkhbv5VQjK9WtAScczdNuu7CtwyJNbz5gzAJyo6eWWukywGmPc1xQSSBJ9e941znGJ2",
  "key18": "2Q4DQpmoRKGaUS8XvFwD6xmnH5nNLqWAH8N11x4FQiQxU56s6JeJFmf3CFY4aqZ7ddkL95uZNr9B8uvFNXLjLmR8",
  "key19": "9Mog7Z9ek5iBmrcWfuJnrxsSZGfYgXRtXsK2EVxXo2sXuyYWxZCujsRKhMB3t4uhjSxFQDxpiCGukedWwhAWUBb",
  "key20": "3RxDgu588fV1uoMsLqghVXxXhLAJhhGQPqqvjZWGHUzq35K9y92CajrjWM3y7rFMyDHNDBhEZ2L2ZU7ERpyYgh9J",
  "key21": "4TpJ6jiM9j2eR7QcH2vfdDPZCZRC1741EWzadHSp6FxfBghDXPBn56fRi5XMX2zMBM6DksV6pigbuM8U8MzioAqj",
  "key22": "zjRVdGaghz7ym1ip45m8mvLN543aG7Csju1pLwaRvvqzArhCBZZDHoYCuQS6Z8vHcZBd48mXKHAwimNhBABLfHu",
  "key23": "4Qqxw8XTZPy4MsXFqxYxDtRCtK1XmbTcAMgUcfJDdvqkKzfTRKYowYCLzwrytq75tP9eTsMzixsaKvPjv5HVLmdM",
  "key24": "4XmXqjLAPtvzBPkxmkw8TJbqDf3ziD89waEjveMnssV9BMJmmFXhBTww36FWBrcQD5bKEoHoCKJLwxb43hSBX4fH",
  "key25": "C9YiJG2HBVABZVyH9pHMZyt7rcebbw6eGepwVoDJWfKnLkjhcFChamKURFPEbwEEDxammFiVH5T1ev8Ykd5HGZU",
  "key26": "3QhaXXYkcaekRypi8FiHQ8MMdAo9xYizAxU9AQA6j1FP3dwXm878KeVKcv9r8C7B3fGwXEsQWsL9AUgaNr89mkub",
  "key27": "3KGjFTbifU6VqkgLSh3T1WpRPjpLgAqa91gNF8DPW3AhabJpy8qL95QXFNkiW3iVozk7BWWe3oVdwQp9biD3UG3R",
  "key28": "43XSBZC86DcrhyPzKRfJ7JiZqzVu6sCPr55AEw9iCrsX8CKFjFXpnPa18MmjpKANRbVoLk1rj8Kx5HJgR61N5MDp",
  "key29": "4fx6HenaGUpnwvvB32Rj4XFfWo1RjTHf2NFRgQ1f91d4qntV9zvCGnuEqp6SKXG78vRg8w6dQpgvUvryFqCALsB9",
  "key30": "65cG4fApXkk6epkk3d2ecMqHZbchHNEQtBuibAFvzuoPHzXd4Z8Ley1UXBSRtPqD6iRNc2hox1DYLHYkifVoLE7T",
  "key31": "4vDBD5vYL94WHa5tdjKjB2r8Hyn65j9R4uEvLRjv3J9WEWNXCKhmgYcdJXGK3Gf4c6haLCoNGWb6N4aZtSA1LuRt",
  "key32": "42GdkfybwGeH8XEr43hC1Cy42iZ28PjsdNw6jidTVcR4WwDPosm9jNV8G9t6QueFMNqYHSWWdMT4vy9nibcBZ76",
  "key33": "VcWWtLz6qn3SYtmjzEPavtbZVkfBQARKaXasG3DvmeEKJSqgUjUVV4NKiDGwFdKijFTnSWmnDfL4xsccDCqWTR7",
  "key34": "5Fvyc2bGNt9o6ob12Bephb3Phi2Q6YTFy39spebmbwFQd9DRRcqJr5S3WWwW8AHf8qkm2graoQeWPiocqiHNXeqR",
  "key35": "49898FqxR5zKxaK1NnyG5aoaPp1LE9ZBeuxscY9EnE2fUDdfRmsg4fxEYa2sKZ6a4vdy5xyXpZ8UeQ9DF433bFqd",
  "key36": "3rkeDzPnXw7Td3FMDcJWThRUog2uC3QPvHdgBk47d6BfLtGeHwLKQ3GpVmpLyop24Ksy6k3XDVXWbyFuEyA1UWFH",
  "key37": "3t1k55n9N6Yn3WrNeiX7vYjbzXCg43sqgYVYua8PZ5V2o6c3woCzsmKZWMBUcs3fvi7svhQHtamVzFY9swVnirDK",
  "key38": "5riGq1nHU1ijhP2MKsPRnM44etZeaGtjo5dfK29sF7M4v6Vo5gGjDRKQ49nj5CZUeh2xNmKaTYAY2xDvESgqJEcm",
  "key39": "dSekCq2stFzBwguj7JYUT2PrAA61XC9UwvBGAaZgXKjUqyUyP6frqBQGaWCjyVw8ALJ61pzKg9cQtqsSeUvoz14",
  "key40": "d7KYAcVk3A66uBRRTBwjssh2ProG2wBzVrKGuWzcZShZ2yce41KsuohQo5WFnDgGqFqhsAp17omh6MFyJn6sFC9",
  "key41": "2hiQg3xTT92GbNMsZti7MdSA8dLGdvGMuyfUujRp2Khb9TYUtsquBreD3u3Gc17RkUapsFRSCCsoAmgufxcYrMyi",
  "key42": "22fQyj5r1koYTdppNvcBBhJ2N64LTqYQHnF7v4tZad5DPuDng3sAHEZkFfZ8RB2ekVbTJ2gK2UUYyZZkgAtfGAnD",
  "key43": "3LumTbmi1GMk9VvEs2FgWQi5S8ghR13DSe3XRGF3hUsmChuKpeUic3Mr9SnUSAszXwp6gHzfBNRUSKNjug8Kry3c",
  "key44": "3HxEoXbb77gLz47xqNLt7wWNYSdA9FMeR3oDq6p6uWgJnEJFtv2dYAEtzJyw2RRXUKXefU7zyXEMP8EF3ZsAWgKZ",
  "key45": "3bdFVStxtXsqu7jgUc9hmEqgW5cKrfhxSY2Ftj6UQKrXTpezr3jK35hKxmJXZHuaedHwPnx9ZgbHWeW2t7uQ5dxf"
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
