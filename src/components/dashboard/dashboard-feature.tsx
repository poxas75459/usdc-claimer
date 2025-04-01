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
    "5ZtzeYMzf4gDYfQw6dM6U8eY9Yg88Hnu3AWx9wME6UDYhF8T6i6fUBneXanzaGLRWkrLhHcnXL6pdAA3GqBf7K3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NwHiubt64KitBABnxYmWykWhLKepKQ7QxouDV3mX25H6CSVhsvm9HTmGSgSDR7FRtSJuQKXBRvjprqQzdrmEfWB",
  "key1": "5DpEoDQFNCCA3Nt7AsLFBotYx7bcxhaKXmhdJAh7h6DxH1LPYX2bxmieCSsMny8FQRUu4iWZ8emnjxynLk9dECTZ",
  "key2": "5QVxoAPM9TR4P5sQ76bAq6ZWQWFVSJjxRSn6697GkQNjo3dw8sCT3nm56QbHuevfvKaABGbqzyYs3kCqtFAPgL88",
  "key3": "2piXCyjRiX2oH5oDNEbJ1DHkjErEuWs3W6JMxytLtSuoDFCj2reS74P262SJTXGdRHEjcUCL92EUhAFLyuF3UqzH",
  "key4": "61YAeCVKYypLfmzMH6nhQGZ51hEAHf2dBXpWx8kp7BT6DMYKn1CDYeZnqtRyte5uGuC55aXq4tUBaC6BKowLoDjt",
  "key5": "HgSLobh3opWiszKXQfZ7q7JggbWjALEQVjUvKKd9GemQWSSGsJ8W3GpwgTLVpZt4n6T5zkYfy2cuQkxrAdaLnJv",
  "key6": "5qM4Nv7bdx44psWoPMYnYpwq3MZU2qxvj3hwEt1H1V86PiambcxLD7KtjMrhs8qs6ghjJoP2AXcQvth8yhB4QmYX",
  "key7": "2nGBG2jMq1qsW48hYuibzKUCNndhHzPurj3iRA9EV5kVAJguXc4NtHToY88cV5gNfK7JMkJLe9Y75bC5sXkkrSVv",
  "key8": "auBGW89XfAn8vRDGLzcHGq1AnM2BLsHDDMh7KiUpJiB4N79r3Me7Zt68r2ZMcVLjEEFVcSHTHWRVtNWwotePVTw",
  "key9": "552bwyJGb93CkwFGfLfxD5ff5U1zw5EF1gFcjTBG9xTgcUnGJmb7V9tx7RcY5CtB7RKLtRQq5FK6oRpKCATLTYeC",
  "key10": "j9Zgo5i9Ywof7N8LiVmcHxyWw6UsRJwpnmpqSy2Yj6LA4Lhe2sH8wZsgnFERhtrg8XRUS32RmWHGLGTfKmQG8oR",
  "key11": "5bG25xNp9nVFUa5V8p19v4nTiFmBS2temDuTTyNhULrpsY24LiCey5nDTPuYuDm82irHpGi6yovXo56JAbq9RgFm",
  "key12": "2tpRMs12P7nYNpfqjKB1SGRvpFnoS7m18s5DmCg93qfqxDyAVnkV82d4q7QMtdnciWCjsAwSySa8PV7Twsvv7uxf",
  "key13": "4GoVqjC9D67o2AWJsbSfrcrHTYcJ1XNpVrpczinaHG94PXkzFMttg7tbgLCmirC9GK4qbztyggstoEFY9Pn8y7rM",
  "key14": "dsDBsFZfaRx715TXQzeMmwnbowBe6cykjjxW88pxLoWksszVYCTeCcdsGQk8P1nMngUGqPjaccHAmGCQ8LpXRmH",
  "key15": "5BmqDck4kV3wmjk9RoSzBTS2VvuFgACpJtbrtY7b5sMdBHqtEALbjJwU7FjLx35wQVWBD1RjrMBvENhNt8Mteyc8",
  "key16": "29no2nCzPwCGFT58h3u9g2WDQx8h3FN3C9iTNX42r4rQmbcjhNvpeYMaxc7jRjpNEaAz7WfMKJRpZ9yL4MuCumbN",
  "key17": "jPMJNVDP6rbKjeD5bGFEnApKe1YuqeyKCZMosiqVBoX5tyJPe1Sv3soZZVho6BtC2zo6YAxV5mk2yAjK9WopM7y",
  "key18": "5PA41sT4Gm75ueBBcrwTPXnjHQuwL7rDJqSVNsJ1gKaCwQkuv75sCMXt1EzXuwhHiUMmwap1bEoaPzvJ6yVtvSRB",
  "key19": "rKczKfyKk8DnmvLD6t4jVcDiGkvdBM2EtqWSDCsjxAKZ6pPkg3bTSdNaZZzJJHr42QuQVmH9XPL9z46gDXadPST",
  "key20": "3WipqUGKxp1PjK9g8VHhCsYg9YAcmS2RoCakheGjKsbN4o5nob8PhtQcwSZmDjtf5uBoTUp5WSFuW9r2auQGdmsT",
  "key21": "Std9JtmK2KiWRmKL8yNA4v7HoERX3bi45vhtfGbJAvQYcy68hU57RkWTUXc6wobdUS6smaFKh64BpDdgr33kuDX",
  "key22": "4ZbUwWgrfR5BXXi3PiQfkMMBg7fMyyEuErp86jWEBr7rWtc5AgLPn6Dj13oTHvtWc91ZJm8u9uuyPW9EjopjLU63",
  "key23": "4UQpyNHSTHgCoE4MdmRccztLrjzEvzw9SCTdGfZdAhwzABJwEzSZTRrPZ7UvUx49qbYxF7rFvcZTTtLj29xZcfbP",
  "key24": "39mxZ4B8fmkjb37kYK5ApgHV6GqSSbhy97XimeiZSQ5iPEmD5LdHLDZqiuqQpzNbLqhfps5qYjJokC8S9LpXWGRT",
  "key25": "5fF8yH16yJMvLPofwPRhZQup4DL6MTTgCm1zo9qYag5yx6LnY15Pv2bLkvUs5ijr2fX3HdMeyzwnbSC2MCW9guFV",
  "key26": "4xHAW9Y5eXbB34onKHxjWxcNH5fA9S9yCcJknbfGo9toTgwyeikpnCAcTwXhFYPHHbEVUwZMCPXdJ23eEUPD3oCc",
  "key27": "4aXBbv472K6Z53eMLfLWWDRVbDhPaE3yEu6kfcMcCm3P46KwFFWv1rjApqXvJskeG9N6C2PXDXNi3eXJpXmjdSED",
  "key28": "7QcpGRCKoX8S6vbdNfsyTaoU6cteqz9zxGAP8cVWVvu2iw8U4y4atynGpfnUAEjxdGxvEiiyhJCTygoDkhMHTyn",
  "key29": "4KL4BpQ5qP86FMoEvwYBHVNyRBvhAY18Q8PZVScZRgFBzYKy5TSSnmSpfRRxJ51HLznhV1GT5FTJty7Vpv1K36AA",
  "key30": "2RLFVNbJ64oatM7cLc9FqCPjakGFBcWApqfibPfaLUVu8whLnzAjBmrDkJizgLNjNdVkVTQiC8kf3d9b8chxbCvC"
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
