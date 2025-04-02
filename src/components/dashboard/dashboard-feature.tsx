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
    "4BbWgRN9R14JQreWXTg9zkxR3rBQDWkkgKa6jAAUCmp2TKN3NVvCYXcBBJKV923jbAuFovchMLbAJb8QqQvMToiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xWRC4MvRb57355PcvdW7EVWzoy3FZtczFrLrwKGqqg8QCHqXzVEkTFgNgvJQNe3EGyuMyhHoYx9rQNjgqzUy8NS",
  "key1": "4gkbi1vQwkJsvhB73mYG7rKV4v9c39kCFVJokhfNLvcdNQi3xGz48t4yrLjzFkyDmVzXd4PHE5uQqHSQxzB3FaYm",
  "key2": "2UARbTgfgNswGYXnso9vLTgEsYiNhXSeh1kkynLj1HisHrbuKCta1ahGjMGCR3VvztSqwqiJPoo5fvKBmcpUi2PP",
  "key3": "28x41fKY5wcdjXeo6rKY1dnfpWyRPjqexNMQzs9Fejwoo7ZVjoosjEYwJgXhnQxEqqoSBmM9pAS5pfPiRxGnkTkh",
  "key4": "TqLP4EZfcYQrt49nS7TryndQij7k8avPyRzFDV82CfUnu2U9Yat2oHQdTu8H7HZbWVQrMAoChMDWeeHQzbQk7rL",
  "key5": "WUh6Ev45sVbjG2SLz6GQYjt8gde13oyGQ5rfbndEr6sPu6f79rUcb7F14UphxcUNkhSUm3qrGyQWF9K4ZGSs8yq",
  "key6": "2B176wmZ8aH1wVy33A9JpLnnTfKVhTcuvytfkhzXhFcpd1x1qQ7D4cjLmVyUeXtWjwgCLTUvHDV8uRfyWv6pppNR",
  "key7": "35LfyDQHgr9R2Jg1bLC66gHAaNDE5WEf7Ezs6pqynKE2jypcNMbkfLouzd2S8zoJmWJrvr1PxT8Mz5qUrfwJczdk",
  "key8": "5C8g31u9FPCQoTevtqH92Wcdp7kXodrVLAy53zsh5qQM5nvXQpEvBorxSXxu5if9W9QeGfZcrJJFJe8GxWzpRM5e",
  "key9": "52cEggwnnJHvWeUWrGgARuo55g9428RVv5hmFnHdcCuraXTodufMPtGvC6DfVz9EWhkYDeAZk5Q3kMNtKx6dWGDR",
  "key10": "2opw6g7so3Z8TB9zc7QV6pQ2d3QDnDsMa7vz4Dgvf7aNyPr77Wnk5ptstgcdbuhFTRo3cm4dT1fikRHZ8UfJAvnb",
  "key11": "CcxtmfpxW5e9poiBNHJvcYzCzVEK2XbQcD1751cmHpb1KcXQ1ikp8L8E4FFWi4KxMXLmBwmmicVw2tzcab8sMi8",
  "key12": "28VSrgHz4VNgJhjp4YwmCBw8vtTnHzbR6QTUp879HkUv8Lx1PVB41ed1UzHeTpQyreUZbujBYFhV3GufRaNxac6Y",
  "key13": "4PfeUdoKh2eKpBTfizJaeCTRiHxnk2KSokWMTuNnUVmELjidaeU79VD3VWgp7NGrsidbeqXBpVaEvx456Jq8Z6GW",
  "key14": "3jB6MDNYWtkrsHZ4LbZj9457NmUKQ6AUsU3hhvhLrdVJBvVPDyHMgzmHjLPKZah2pFmZ6VZuBQchZk3HEYuAo826",
  "key15": "2tUFG8UU9e6i9XjPGCCypatPCYWqPod8LNQgrDj1eyhBBBaGLEE5uARuAVit2GrAkahcHa6ZMZTG16VJhczRvpbz",
  "key16": "4qVoMkad3UUDAfoTRQr9Vq5EAwJ76YEhn6zLv6gn9U7RpAggbYs9ws2VBt7sP7EuMNVbLk6Lc4dZfa2diVd5U2MW",
  "key17": "4p2up2xgUTfepqybPA8AQHxKLSK9fAnL4qUL6V4B52no1Q3y1Mm1NdnWcEFcH4PAAtgymGPqTvhejvzAatb4SxVZ",
  "key18": "3VnAXhFErS5vAmSHKzBDMrRidTp7rbttt8wCrTbDfcMA9nurWHxz3y6DZMgcSMyTN2nDJHaESSUSpdnhpnX8sXfT",
  "key19": "5Me5g7bXmavs1bJZvAEoC2Lj5R6zU75wLqzTdQYsvpWhSmXbrrmVRjeXUheKbYn6M67PSrNnMBQXUXimK4MZpNTP",
  "key20": "56CQ8i3vAoXRgjTcVBuhr9vR9quhiyQzAUg8pBpgovcKGpYqKv6LA4nLhSYv4ZCFX35vx9zhQMcZssgMuKDhmFwb",
  "key21": "4kJ4QE6z5X4gvvE2xSSaMqEkvYU7Kjdb1zmz49hpr4y3qB98ULX336k3sxHVQUNqudJfvNHqhvV2qSkLgmz1hrXx",
  "key22": "3hNs7f7YikzoFznvvqiC8cjKt4UGR1FBJaqRHYbiL4nbNRyNC6D8vekV9UtWK8JKG5i2J8SbWwiBkQs9ueExcaPr",
  "key23": "2Gr5TkkCKXx9JB3bQavMV6AnoRTqus52hhtpyRESGEoQtjzi45ERKp7zizLRuVsKjWfMcwUQScAf3FNtPPcVsaXq",
  "key24": "2HeuzRuQrn2kcPumRhJQ1RNQ4JsoGLYpWxQfnHzHR2BH48Cx5dz959iU16SfcAXwKCMTRdiS7MEiMM2HWA6rLBge",
  "key25": "5nEvK82Tnt5HCw2qDgeZLaUu2oPmwGUN26pB8g7TVqa5ZLXENXUz4tzz4sXc8QvSb8u9bNEZYUooCrHHmY8hxnoA",
  "key26": "66xCLFHQAFNSmzkKh1M8JLUNypwLUXFPRGvLRBSyqxhg2XH3SJ4jdakc3uKQtDPKwV23M6PGhTMB1B9VoSYAihHH",
  "key27": "4mT8ocidWDCCNo71oJngeteqpMTFabw91xpkeZCGP6A1QvVyNmGUzVNzKNqwBG9AxWLqSKJ4p2rwMs7FPAZDahmy"
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
