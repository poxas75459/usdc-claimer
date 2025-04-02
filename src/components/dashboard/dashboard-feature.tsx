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
    "2Jxt5PSQty3AUJBqB9e5VT81fR3sWERjmjaXnarm7eJMXDjCssJTBoW9MZ834UmdFuFGGcDiNKb2ehzL7xbCieu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bNYw9B1LbhMEuQRg2x3XWCWevV8yBntvNd77FshRRLtUGHo15Yv8APH2rz8KEe9UuesV36vABUcRkw88Xw44YXx",
  "key1": "5Cs9B6c2nnaSbyBPAiBM9HMCXdnnjkmihQVMPiVC2EhuBph54PkByLn3Qq83SKpmPhm5La5NMsv2Wui37nx7xKiy",
  "key2": "4D8TJc7y78B8WVTkynGcN3h8aXSGkqJojJDVvj1GwuSi3td2MUFaTUUmh3qrxZkWgm3zASv8J7qseHgnvCzpsLJ2",
  "key3": "5R8xYnj6tFuPh2d5qv1HhTEqTzjigpNo2KwHzFNMeC6jpj1J4MbzV4byC5fvGHYjwVoks3jefHCPLEjHYgvGtkPg",
  "key4": "4h2ViXRyXZogsQxXKttBXrHfKUrK1c4ssbxsiebKCCfUF85hhpWoEUmib8SPgJcP6LBm6gFRFiNVmhqMm38Uz5EX",
  "key5": "2xoJ9bWxZQDQqMCmWniz3wdX28FrvSmvamaSqv7EibnnCpj7xNG63Mn9LFEkPWNqe8bo2U2s9JFw47mvEfmYMnxd",
  "key6": "4Qeo8rjQW2UWn7kb8dFtaGPzXEzwVfSRKJbPhn3u3UnvuqsxxWuRTYKgWZzkZZTTHseMpLW4w5WKPArt7BJBHkie",
  "key7": "TGCkU4jBA2PF739Dans9QkWbUKqC17sugr5ZzT2jTK8UJnuaBpkyJR1wsSAUCAJQxUHYiYwNG8dgfpeQjgRUDmP",
  "key8": "38W9KNoy1k1y3xR29NjotWYVKMa7ygQJUDkpwkUm59FrVkBVfVEy7iDhL1XK1t6inM5wSGJ3akihKTd8LCJQgMmz",
  "key9": "5GWqhFQWaonafXbGTHPSNUaqrbNTPpoCa5KRVmbiv426wRKdH4VRCZtBrCgbwq4z52x1u4BQSYTNuUKbWfgiDpN1",
  "key10": "3X3cC3ewXD9FBaEg1AnRpfZtUQq4WMme5dotKeVVR8LsnNoeXauEHyAjebQih6VRcMBQXZiTWAGJERzPgmHJaT5q",
  "key11": "4evw4Q9c3zZEAWTGR9FzcFTA3oGQ9bTzJqq5nx8obXvgowfXpD1AsVT2GLhRkcLG8nHQrAH9DQP5KMMN71o6bypa",
  "key12": "iQHkv8tMZXqgRQFT8oHf8b97h4a7ZaPfAPCYmsC82rXexMeU1qiYfDxqEXVGjmfMsbnHZ1p2mosKpSLJQMebhKm",
  "key13": "2ZWzthVE33K4EJUJzHuKiqF4oUS7xdn3JVY3be3g9GAuJGuQmRThBHpwbDeDLdtJQ4CNCcG9ryEBtEGX7KESSuhT",
  "key14": "3PbzPnzubiK2VMwfs2Q6KWBaP3njZcc3iUy8iPdNNtqEq1iEgCq5aJqM4qeLPdFphqsfKBC9BM6845GEGu1jVzJP",
  "key15": "5dxQCJudJyD6oV44XTf8uFnYZvS9MZyac3xP2YTppusk12avFcDUbeFkHUq3fak7F8hVPHmhhj4ETNC5vEmgMpWe",
  "key16": "4izXk9ykRfGQMU1UBe8bBaD4CYmPkkaHmNRx8bY2YrGq2y8ArdMcvSMzTTUNbxKsxQfrTWXn6knJGSSD3K5KjeUr",
  "key17": "5ZdC9nfkMfuSaefvZoM81YTNRTtnfguSPdNZEbxFcVdPBdfMLJFhc1VWLR49yjeQpeCdFzCr9afiy7jq4z8GaW8v",
  "key18": "4SdKqLg3nwwFfLU544654ohHhPnnHdKRyBYjPqhFfcvyTTnQAhzVztsmGEuFrtQeJ2ND8MvMM9smQUMrvRzbyWrp",
  "key19": "4PYmdA7d3uTr1KsfTYhGL5GM8xaZoSmEfehXeTuKXJXeNLfHSf1qnxgGYPmXB5sTs73X8fNbXGqpA794gxY2hfJP",
  "key20": "2qK3xMo8VzwF5yhzX2sz8hHXfTPXr1tFsU62nY64feYF3jk3TFQAd3JNga1vMKKwHHj5hv5svdpRbzCLmX6J1484",
  "key21": "KCQMrzpfw2sHtNcdVddypgiXGmeTL3M5qsoQwgWUFVUQG2TekuFdxPmErLoFYRS79E3wD2XbtWCyonHR7zeY8Wn",
  "key22": "CgnXu9iBxY7Bdxz11iihoYVNmR29LiFsGWorjs7KjaA8M1gAYGZ45dq2hkp2Q7uNxwYFZbKsmWnRh6oJ3W1aViw",
  "key23": "2JEaZkS7C5sKbEmKihrucv7nV9DedMymgjbwTRrtsMMPaLf6dWWDrNV7hCz1Yb8C3fToDdnEFVjraawUnWznSm4J",
  "key24": "2Uvf4mRtz3CY42gqZj4JYGgVU4Y5Ro26qfh83mHQkG72JoDGsx3hSmxDwoUP4217pvbshhsL2zbGqXPrG37eS7fy",
  "key25": "CS6da9shxkKNAbgg26wfRtyyFQ6PNrTWe3siaefeutPrUs1YaKz9M5ZnZcDyubRHv62nrgoq2RPJVEBSQeSrNzV",
  "key26": "3Mu2hHHitpZaSEzLnSBAfjTBDk5oz4REd5w6MhE6p8afGCSgQu6TBea2jwCCBrK7hacRQtkZUUzhysE7n6Ec8oTV",
  "key27": "3sZP6oCD9P8oPUErzzaQ28HTv6VXU7iBQFrfBAwYhqtiR6PeH2cPeJBT9QLzEWFXNyvb9uYNv1Ldxd5SbmLN1Frp",
  "key28": "3Jjiki1TR5DbxkQKX8AE56DMYL34PSGJm8tkwoaP5efimCeF4qoErRaKfN1XBfv5G5zqgfYbznMFtMtk27jmhpa2"
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
