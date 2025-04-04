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
    "26JQaMNjPDqv7fc7iEpiGXp3Uj2dcBPooxD33bcxyZp4c7B2yR1ppRZvEM5v5qTjdx2KmEhf2yGyswuenWzNvsUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bXoDqA16ejcS7AmqEqW74u8Eb3wYucg8XhjQJPDjoqzF8dCuBj4GrmNj97Jqf3144WbfAv1haZ8LjoYQETCNXtt",
  "key1": "3SFvyBvHFCHkwNnSwJoy6qV2UoT3LSuePWsyWSzBszUrCSGgC3vy9js5JXBLgwVepsZm8pbjbQQ9fpVxuDqsDTB",
  "key2": "4nuyCFsfabk6FRT4GzgSWUdXQ3EYv8ju5hS3tBodW5xWSJZLgR8VG2m5JsyepukuAh4pDmqgV4ACb7r6U7xq1Q2z",
  "key3": "5Ck4T2BqUnUPMPCQYE22Z4RnYr5QcoB4uJa7bMGYrvX1EJiAYp1fzBeV1XHHR9JUp3YbUqYycz2bB83tzWUHgqkw",
  "key4": "5nB3bKTT8L9VE5KiboQb1bzqzZaGYvQr2jNnCZBMV5Y5nfXwMzC1KRbhttebGCZEGdNoFTiy7ctDoNTJ8CmBh5dp",
  "key5": "4QtVGtttbM1VYuL3pY6f6ASzUpvxNs2cW9jxyGitiEBirB2acSo5vHvC98j1yuvqbpk9eJZ1Wvv96rWhjVJGGzeF",
  "key6": "57dbH7VhMZJkD6VDdmPa4jREqLuXeWivMAtN35x2K6vUmEKvLcApYtgfBunRAhGU5VJcHjbpntEXQ4gZvmHfe9gt",
  "key7": "2ebFeMVumjP8J6PjJ9cav1DSYpcTVFHDiST9GjSgg5tnKS5hiCb7zZNBE12WpG5JmdeHJSpqxahETa7cWwkGt2vv",
  "key8": "2P67gp1WbLMAL33mndupsuNr7Khh9a4yj5mesKyA5ZYtfD9mi3WoHY9qF2z8xfQgwUvdoNxq1fbWSutp86heHUAX",
  "key9": "5Lv6xNL7Pd1vhAqDrWNkN2nhj3C3TS2cE39wp3zYnCgnPC6jSy7SkdsoYCSKQFbx2Z4gRtDotQ5vb2AHiPRKax34",
  "key10": "34P9dxUDJKs15bWW2jyQchm65TMEWRFsH1XyB8kRkBDUQPFctPfZfmt1W3DpJSNTQxKYmFAMXWmw1NEk98HnAGfC",
  "key11": "5euSmbCK2AhLZDFGGU6XcVig3VLSgqfu7jTjrpc2D94VYMqUhGPxVn2ozxvTJS7M7mdXWbdWJD71y9ScPgLdUows",
  "key12": "5wfwMvL9tZ1H6VmVL2wQRdaAokEr3tw3w7mUELo2Usb5TVkBzsW7nHF72KTZLZ16iqKhGyVZ6LbLkT8uUxE8QXdj",
  "key13": "WMPmVvorJnaKSrLxptGYVAJXX8ygDtiZEXUsAwCdzh8rTkBexhx1uSWZecBrXNjq3vGaSTfsvddahEdZH5QnhQQ",
  "key14": "22wGVGnAJgoVE7aE87pLWiS4FKWeQUju8rtRWYPkFZhKNWSF2V28vsHEsv879d96VKFAnAC6PqDuEj3CiLZExwdB",
  "key15": "4wZugJXtszSpwVxLR8dk2kdVgFZxsWQSXx3TdRqsJbmyxWAiSBjbDpKSgGhZMD92Cinh2FxUgCWXqekiZreJwmEK",
  "key16": "38ztVrv1XeenyHqoc45biZ5wTmKPvvjkGJ2SoiQ16sBsoskWDYz8RFhJ3F6TYNcPaMeet1zpzMJ7cFgwTjPTTJjj",
  "key17": "5B8ckCWVb4byNNxoz3AtP7sd9mpDGQ4uiNMcWGrj3eWM27WxZhHLeRmAGhbr27D7wdxn33GoP9mWySbRHzn8RMvu",
  "key18": "5CiQYaBoNH3LpMyAz9CX4K9v2TUbXUi97pHiiLo7aK8avQabUkpwa7nvv9JLVqjDPLYmCUThMmFZZ8rEpJr6Q1TY",
  "key19": "5QYRxBxX5gWtSVWWh9HP92vT6UAKZALEmQELbx84kpuxc8MJv8UVCSvMWdNpZVEdwPWVmqr87WpUKGAKjinBoUGR",
  "key20": "4yZR4jtswRib5jAEvqkd7hiUVyhDvvmUV9BoW8xQ3ZSd8DVLps2EsnH8ACEadUnyLdob6Z4rEuwCgjPuwnZkbDw",
  "key21": "dYhXL6RWBjFHvRU3nAa8398UXYDk9JGpP8GHLYeRA59ebNUGT4jDEVKcjo5TyPrDzkAG9WgL4vh4iYfrkq7tWHt",
  "key22": "37GdetjVLkEjM97GZ4eGmv8nNjc2hi11i4aRxwKw9TXJhfXU5mLw1NoTnF25cZp1r1aakassYXK9gUVGLRgom9BH",
  "key23": "5oTdJwB2ToxgP2TxGLSZBxd6nN4sCioxokhC8yeh2GXYCFJ5H7yeUnQX8SWyDxZp9CPHGDphFSWJgQzKLUuxEeSt",
  "key24": "3DsxPBHMF5izRmSLm7kQSXWaPBm68RgPcAXEtStks18iYJHKiiz79FdcAy3FZPyNW4bLdSEDrULzmFw81qoq8jNC",
  "key25": "4vukymDEg5wP4hK5u7Nsb45Y3LT1cgAu1ZqhYjW8UgYZXUVeFiHhP7CyVt8kqLX1fykWLzUqj5M5Efj77DXV8cFV",
  "key26": "3UPNWY1XycnK9KQ1cY6rgknMRZ7ibL7c3aDqEk21XGp4QiGgWTd4Ca4q2rZf9fyn5gTQiRgQdPqVjdbGvBBPGxYC",
  "key27": "44jmiYDDbQnjZvQzYaPRFNfneHABQHc9Z9WNqjxQPvTUwJj6N91F8VDitSUw2CkFsJ4MYADDv9BTgyy2GttBSQb4",
  "key28": "5tSVY5TCika9cgwi2aD3gzYvWG52xHaA2ihmjmEBNvMzTgqgEzikpdfkF3XkiGnHdBAQgDjq3pvsgXVwcj94vDF4",
  "key29": "3QHG7YMHrKRkQGyHBJKCCUoCdFkyk9Fje67uLSGbwcga7WwsiGCp22u46V2yqsPJPfrRw2VxfS94daEpuuWe7nhF"
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
