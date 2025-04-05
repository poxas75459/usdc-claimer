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
    "21sfQPYoXdgKtxdC5oWaabMNnb9YUk9Lhak1N4JpRVc4crZ2wX4yZaweYNfaLYQJFSETBHL2RxS7B2JGk7Wvjdo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66DGVXHZsfrrhg6gMXs6wPnHgHzX564vBTSSR6doqmmTZibwkCSmp4FeiCLbY7RYcPHJtXTZ1uiA6S9pHpnLiuoz",
  "key1": "25UhT2YwVSH894wTTYVrmWPFGVTgcDFiHcWpA3xcczEQECWNPqgtn6h1aWRCW9LTQzE4wfLpU7DwipP94ZN1MkT7",
  "key2": "4SVoDHfW6F9NAbtV5nykfZfTJ232me9L8eTiThTWDcdmZki37WDPsfpp3EnxtpJYjNcT6wr7WNmZtzUgGWCSPt6r",
  "key3": "bE12smXyhaCzrcrMXEhcf56hrAKE9onbJT5eqtCUcTvrP94wYi5a6KneTynyMvrLUwurxP48rhS5GjxmUVpDoE9",
  "key4": "ZH7BfyFd4QTrnGWApHaj6wNacMLP8WjxbT7dPPebdgG9Waku5NqwWRfVndwXbBHTjS1uTh889Zw1J2y3RmufN7g",
  "key5": "9STq54RUAtLAE45LzzkNW2SPbYxb449yxZC4N96iTcWsM7aDZURZ4kA2UxF3aP4B4fky87EweQUUrCfgo7Tj4X1",
  "key6": "5pJ7RQwMsY5nYQYdK9VS31hDubVBimsZLEXkKkJNFzN4ScRo4frVMiWzPgGT559pmaM5j2mrmnzsgmbipg9d884f",
  "key7": "51qmom7GLoNhvQQAZYHHZgrZC4CJRksQNznk5cLehuxmFDuyvhYmCv2YT2DZ9fxECyKmqkeJXZHeYThHst1bGnid",
  "key8": "3wKhZQwHLC5kiq84R6eszYGF2pb8mXX8a5TUbWv81gzw1qh3mYgH9TNR7v52xL9GaG5ZqkYzYru1ciTs9s4mwzC4",
  "key9": "4U9HYJLCSZ3adgnjaLoydhdBHssLDZCVtZ6iLFggaHDuGhbMisznc3eg1XmnE6867iuWeD4boyq9ydF4K3CEQe5A",
  "key10": "2xsXJWbmPYcG45jaUq3v5voSxrNC9WbY8GadvovK4TPTkSjXya8zMpKPGDMoYhJBkDr4oJtyoMmsokAnsGd8TRDK",
  "key11": "3TZRScBAKzDSQ49SDCEecryitj2LcnDtR3C1nHjkTckbotMG6UpMcPztLX6db8JS9bPdKtK7eZLSBMuCAmJXXKrL",
  "key12": "ixZVPBxa3nD6PFeVcrAd3TNACBK57y6JDAvGetwRVkUSf4A3AKSQTPd9719eNyHTe7pdn5QZgW8HCtKFvXqQrNY",
  "key13": "3fJfEuuc55UJkudwYEmk6RDKPs2X9iok9p6yNy6gP4h7AwXEHpoixLQsWRra8nimr46dW6sttYvgNQjsNQvJyKye",
  "key14": "5SQRN8TtshERnXPDw3e4RA3KXyLTEeUHWZR3WP3oqMLyFGZ45Yc3uC7MmrBWpAQmAwZmpwokDAgLuLtDqKtJoQHD",
  "key15": "icXs1PfEcrBbTaqfoRsriuvPvpWBVM3LAjAEdQrM72uiBbmS5yyj8FfuhqkEJ5H84z6xs84eFLsTL2m16qg3DCA",
  "key16": "y74aGE9g9xdMppxzvQxuJhdTu9D5YpokEzmm4uT1VaxPFMfwdXWHbXFDefwd6wUM9RhRE5iux7hxNC5AkZEqZKs",
  "key17": "2g5ur5mVJ1KTjMSCfyZEbthBRRmjhBJpYjgULeN38dUVebTAips1szjxcUt5jAKWYgvMh7S3qjWMrvevtNtjJrSL",
  "key18": "N1TVJFoRrzfTcBdPEtG1DqNvA1jc9iGYAkrD1yn3hozEUiPSuyVmzmUxX1SNo2LfQZ2xSh4R6SpUYaRkxD2xxGD",
  "key19": "43N9UeAkeL3hokHcf1xefmU82Xxk6VDid8mZX59h7rq85XeAaE2ouPbHDC4dTiKvQWx9WPzJ1xf6DjfTFe5gci43",
  "key20": "39KjKb7qNxv6QZGnM6kDt2ArhAQCwtutMkq87FA1j6aUStbRzijPvfPohYE4CMkspF7mHLSNwm2fdRt2qSegfbCA",
  "key21": "56nAuUSahZkYJCJRp3vz5JYHC1i5qW1czd4YMN5irEEoULaWWztBzLkHdMvJSwq78Y7XJk2NdD9uyz5UtgAhZn6X",
  "key22": "2nmjBWJRXb3myJ7NaQEBCNNMxtEorNtmX78fWKJ4SnaCtnHgS6wrYzF3FtzLVt2w5k4VfmRqPRmcd6PsaLQi8JJG",
  "key23": "UDgr9bHJ8F2PvaB3VYnTKcRb411tupAHj1Ucm2ngsBUYgoRRV4YHvHHnPreoirSBpuv8gmDBfEiYMGtgCboR4pw",
  "key24": "93QtP43JuRvVBCVpcMAx5oXnw7Pf3o16ADyhgRaE52bTV99fG3Fj87DSHbWUwJNmqRg78wy8hsNPYE9U9h3cjtx",
  "key25": "3PguD2iinYtiR6RYd96VTdNgYxoyVvnrF22tb3JGwVX57K6PZQRC6qgcSwfQHKSXEtAGrPAnQJQ2GsxEDtFu24oy",
  "key26": "3JUvTi4tekxZ1qL6p7EGgo1owEVhtNkDyjxtzFHMEgtWEhiwQLrFaU5CPkgGSAEGKLvMStKRFE5tvVSzrANYKkDB",
  "key27": "4a4k7ot2CrPtr93optD3xPjUcSfhzDUSDiVz8Q5o5pmjEiMGiR9cTSBtphJKFEY93KZpzu5d4Z8xtpWedTkuiUtC",
  "key28": "5cBitWotXesjFv6f687kiPPhsVMyqnaiRMGbHEb8PBRE9r2FVAhxRKdtGqVGkbYcsoDoBncTXqCznakKx1rUg8Y6",
  "key29": "3GxvHth1BthqWHRjRjCLRco5K8W797GFc6M76L3CGVPmo7w9KaAceHS1DiXgxoJGBo8c4kAQdCemrX7G45rdMXGK",
  "key30": "4Y5Hdi2XJKZ4WDy1Mm2XthEdBkzwcMVNW5EPHdbZEtyZdvrGcWpdUtunNYMkL3yWYaPWRaJYBtSD6yAsDmPFo6nG",
  "key31": "25LKJMg3MUEyHP2M1A8VdhfuzQ2LHpaN3BvUu3H66NASgf8tr1Jd43jtxoCsLHzcYkCVNHTJuQjVVssMmHcpfjHD",
  "key32": "35FuqPRpQ7EosjyfvEzHiT4GdJXSxuPgWN8n1kBQbjbBGNEXgj9XcmX7G2pcsWeBgRD1Cbe5cN5Aoi4YjJzvNvbQ",
  "key33": "4VR66cP7y9mZQQ6RSFHTY2Zosxo2aDnhQG25zddrTfYHi367LKBTzovUbEG8PD9dsMdJ8PGhurqoUcwMaYZJCJz7",
  "key34": "4dF6jXo6fMmC8D171VEfrnfkBUYGbtzsYyATdLojTuGrkbNufB2zRLqYPHWTNnWsf9zzjbbkSsLH2M26ZY6YfpLL",
  "key35": "38tnXQVNCGtCSgG4fygcQQBJq7FjSDSwcEZEmJBWCCUHjvTLaThw7GC56u3vYAhhYPvxg2cxwaU6jXeAHw7MWrL4",
  "key36": "3UfHBYgLHN7bxQVfeE9Z7GgtYVw7J76C9eaCWPNuijpoZ2P3SH1vmNamA3g8dk71qw3Zt6oR8dPV3KzvYDYqCbf5",
  "key37": "3kTPbfFxpp1y9A8rNpTSJk4MPgiJeKkExjJt8zA5NpGwb6jLri9X1cDJCT5UWnQ1qsqDnyybMQ4FySLTqMbRStAE"
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
