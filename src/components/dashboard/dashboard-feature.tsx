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
    "5Yk7pqU9tiwg6ThVswAg3MJimfXQMJ4vhZkrXmmKQZKkpqxBkhoZnXoN41PUoFryMwGZqW5EzkQCr1yxtPzP4wCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MLC3HiX7dKVDtUYps7gTrcjP1xx59v4PPqEF7Uv2n13BH9DZ1np33niqz94KCi3pfnPMsecjTrnBHmu4TaXYRmG",
  "key1": "4jpozSmAmwBvrkQshneV8WLCV6eFYcDuDFb92f5RdhsKZN9UpPq1iVfaa4MPevqt458dqperGm7mVNWrEvLTSm8w",
  "key2": "54UaDWqjRf2fHLTgL81XmE8bVrXvJCiDrMQvTgkvSP6AvwYZUZ76ULaotX7WbmYzAnu8zv53EeR9FKYWvR2spLoQ",
  "key3": "4S1W7xWLDnJTHMiCZDJHQ1gZRriuSThmoqd98W7k5ynZpW33EURR76hAfCkyMahPzL2roEdB5cQYfvwoGeKvWoXp",
  "key4": "2JDbNvsXTNXv3fpZxj93V6PwqRtVHzfhfo2VTmv6Q9DibW7Gdcu6a4KUp8nda9NgzR9gD3832iBq3PnvCuPe4N9f",
  "key5": "fKZnyFsz2oJnvzWtTrg8TBC1n1qKEtPMG3yC7v3qyYT2QZCkqqB4ira9XaGuLxQdXadsAk437rCePuePaEBEp7T",
  "key6": "2Lb345Rf6TDKbGk6cjPikL8cYgWMKS6zU2CWK7EgSnULKpqtoQX1q9MQnazFWiRkBLc2ZrimVvRobW8tP1fHqkTF",
  "key7": "4Rm3Gzk4YjwknGFc85TTd5ix5wpjTqAVLqW7xy2Yc8XAqvUXhNH2jBccBQzzPsDR2E6MbSz7ULPGLasrHTKRHUUi",
  "key8": "32UEWLQ3jQxAjMzX1Tg6XtM6E9N3YP7USZ4PKZbQHyYbKEEJdxkCDxPfRod99M2CbbdQKskaMH7BNmWwpWEhW6dw",
  "key9": "22DmcLT65m7BkHAoLmJYYkRxkLwC5q5UjCEC8YvYkswZdaLqfoPaAPQ3v27nkRF5MvZqfBYp8UxtrbxbYiSu19dz",
  "key10": "26XiL3nKaY26pcB4cCdwYBSqnZqtRMR8VN7bYeDptMRooCJBfSU5zfWSB155be714BS2wj33qWxUqEjah28xqLUC",
  "key11": "6SnkCW7VAejzoq19v8tNo8HsvMYY67Ns83dSaACet4SjHK6gTuyLP3Gzy5Y9j6k3t1ZgqB72wm264qFBdno6DUj",
  "key12": "CBXmFbgttuMJbmdeyk7ZyAQ7VhjTSdkMULTLJDZLqGxFWDVQ6y84gmR6PxfCFy1F8eVFfPJiwADBkUCbNMHYJGY",
  "key13": "5A9qvcuDdjN4zY89ZiM9f6BzXsfzjdFcLKDkvinaXDCUN4LYVm1dYT82oDUFsCLmyMtWmkisEFAt7m6WxicsCja6",
  "key14": "3azbdte2oKYCumkyLnX4tuUT7k8zHaW6sCA3xDcggfqTjdf9cihSwQGRULrmepLTkQsRoouBmGwDNeMzVEZEA11J",
  "key15": "3ByXp33cs4F7EFiAPjCMAeeXy9KV5txbMQLH1ntbYSakEotJoALNdyYVJqwn4Wso1vgpxcwpZKLSgx8WRXxEWD8Y",
  "key16": "5GsgmsswVbpsbCjirg8hN2pGFZL3qmSTemHF8J2MsftA2FBrPoNwPcQXBupwz7wG2CkvPrRskgXBLVG9tLAi4xJA",
  "key17": "rfjhQugqrm35AVY3JUQ4DTE3Pnf83e8optNNPJPp23ULvuMP1TAy44hRTSLWkTV8pA36a5Ei3HRBB9gg6ACe4xT",
  "key18": "3Yca7xcw4JBVebZcfCbfDYRFci8RggmEDPX4qAyVSFY7vF5FMfBkZ1cEUNPpnh34kYMdNPCpyimacvgeCCdJxef2",
  "key19": "4i2uEQ21UUkRiQrhmekXnYt9ohCwakXnv8AmymBmkKWQDnRrrRRjJDyUXY9oUJSPSYLpf6kXmG15mngd9jqwTxbf",
  "key20": "2iwwvg1pdtsvRAWT5XW82uQgEfy3GZqkgi44yYUgc2E9BpotEus27uvFeEk6vTcQqFw2zLEVJFWo7m6wfeorTh2Y",
  "key21": "65q4J32bmZjaJdFDRxAZrCZ6soBahcHjmwb2hi6QwkR2cZMPTwekaGHosrZ6euMt1yoaF7MXrJauZFEWR61Xwe2F",
  "key22": "4KGTcso2AE2xy1P14uckpgbvm4fPmGKf3dFJayFMtWDngtpFMDU6uUE6zpwW6aPb43WCiV8NKSZNi8ZfaKLzbVV3",
  "key23": "xEN4AeFzyJo1jnVjsVHiSD59NeQV6bp5trtFd9hoScMAuKtBzrrYhUAS4W72GQFSysrkYWQJMcEK95RAQzJZJBM",
  "key24": "5zKAA8RP4wmuMJCePNttxTA2dsnXuXKDPN1Ucf8jz26huWhcePFWfrMw7WWc9YVw3YUtiLRT7tF7eGSx2SVnq1XW",
  "key25": "5D3CzWpur37DDQ7gHA13ef1x7SAxA6BLTYGqLSUYpMxGt3nRwy4CsbS5uDDzfFxRoWGFTfVoReeT8KJMVWb2Na97"
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
