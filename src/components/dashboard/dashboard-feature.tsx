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
    "66vFs9MyQ1bZE4wERaDbRXSUJnHaLuYPvWNi5UyGuzZqcNygoLXg6mp7UgafeDLj6NUNoUZQH6rtzvnHL15eBuhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i8vZcFmr3LJDJdGKmxjFZxzhUM52Sn8qJhMTRorWDSHcPKAXVp7GjCnhbrJevqha1ztBW4YzTYyLG9Za44vNyan",
  "key1": "KFLNvPHbHWCNYkGenkFJYE6z3Bd5jGCE79m9uSuFCe1y8G1aYJKUAHBjmafxuoXTRuAfiYcQKv6LAj6gLA7Uz5G",
  "key2": "5ms2p1desxpswWLsnWssk4okpL6fLCngUEk2WYzzSuRWW3t3jwpfVzLmB68LQrXGaU4bBrMAaoTKU9YFGrAuQo4R",
  "key3": "2Fm7LHqk9xHxDEJsreLFFzEw7K2uTVJFKChc4G7DutpLycYV4zs9W1xpTpboBHAmimnwHXAs78mm8VW8GJCNL7pA",
  "key4": "2B5Kc2Epo75KzTmzF27m4TTJewJ5nFogB3FciJfQjgDRbnfK4XrEJMy69pfeVYveT93K3kamfMZrPoZvjURB6HtB",
  "key5": "2j8MvCS2bjG5gwN6PrcrymzqPSKw4TtNvHVmFEJQGCWsQkehA4WDqSHxyB1hEF72s4jYGLHjVDJ8KhWpcBuLFWWP",
  "key6": "3rr7a1SHo93ALftNPsVMfs5TG34jD2Ro1hD8oPfrGzH6WMU6SHp2EFDh8A5M5wHaWigx6xnsuj5FfLBAvQ2PFxNN",
  "key7": "246yzwSLUWrjASy7BNCqi3RXXHi69Jgsqjo8uAhDm2EVLpX8hAnme8FfneQdA9XBfy7FEbLeFkLnGoQKBHJ9KpJm",
  "key8": "3GDSVyfZNHq9H2vgWnDzCi6qhctdi8i6ezyYk8KGaFyemNnDZawCFWmqAZUw1UZkm6zX7JKDvREHK3nM9wKPfNy3",
  "key9": "4NqEN4Hb3mb5L613x3xcCbPiG3tsBm4qA8gJCM1i4tP7MR3nMmQyvkxrUTfjXxjKhKPb5NsRKZo63GYa3hBpj4Gj",
  "key10": "49X8z4w9wirDpi3MrqYPjo6Q6TwoZPYbkw449vfP1DTWm32g39Ldodq2jtA1YPbfukPFybxr5PjY877URz5EF2zu",
  "key11": "2NhP7AzZCB6qqZFfue8qK1vhGQkumEdSLXDZtwAHjkZH7881azD6S8gZecaMGE7DJnL9Bd1T21mNQtmDRMGWoRZx",
  "key12": "5xt6DtzCaraTgFwTNWfFvQwk4sPTEHE2uTU6U4we1dpELAWKEUpe1WVnoq9DLqDV5U8EfjW1uc4Gd8V3g74nyZtm",
  "key13": "5km4Ub1qaf9xWy4hmiKHXqLU3duyiJR8Mxh5yBdFFUUHy7ZZW4qesk2u8aVf2FF2zZ5oio2kwiXV71DvXFnBFzMZ",
  "key14": "33ZQoA9qMiEYHMrWgcZKeM2unkESh3NYrxktzcsscLSN8i3iqrYxHHsSNFyukJtn4qiT8NkaiqFg5MnWFCqtNW5J",
  "key15": "tsQV56Pt7j6535vhmcLQ1rwQZkizX3Unzd6jtYJ1YkTrHW35iKfA2yMmMxwKGKGynY3vKbA1fa6X8vHmhqzKb8f",
  "key16": "43jdmqtR16YPk9eHuKTbDivT2JuzrJq8mke8bBvGTZVnuE7UU8kTkowt5apdTHotVwZFLLRuQ6swwLkihW68gUbo",
  "key17": "4D32cjEgsg7aeFdifkg81Hmax5973Ai9EXtnA5rtpH87117aoMdCGb2bcp9zk1zeP82TFvppPx8CJ5xHqJ1uk2wn",
  "key18": "oYwi15bf7qnrMU5oCygRVcMjy87H6eqjBw3SrH1ZvMMQZxkzMkDHoDjEdE81JHNYnoLpxYBJqq27gRwxavA4A2c",
  "key19": "5oxTXRr9q222ELkRgKvL74zKD8kSr39yRR2Z1Ne7utPX3GMSgAV7KWRTiYmTHQhpLVSe3hj6jPi9NPjduwKX1ZTp",
  "key20": "NfhpkXYjzG1NsApTK1DUKQDo3gVmpoKEApD4oh1BseTPDoPBj19ctFtaTPuKfff9HSVUHwQrc9yzWE9zJz3r5Gb",
  "key21": "2hosUuxQNqbEYKhjb2D2NL88Ac5wguqLBAVkR6G7nhLb7kDrKCvUfrYVvUAxgvLNbJSSxX4xT4yWL1zUaaXU3Gx9",
  "key22": "2htrW6hzhU5aEod8if1qsdYoADyZST9jyL6qXACqkCJH4q7ide9EG6Htx5Pv8gQ7k8XxSELyvyZMQcitpThaNtU2",
  "key23": "33n1TASdiSHE8SMvLHDqqDr499cWFNHWqsMUS3rt2raZSxo7t9ocGffYbo2PfbVUZajYkjnG3sdR1x3WnDRS93s3",
  "key24": "58C6qCcjqLxmTmvkymzjFDVSbYFUZAPY7fgEKDbcHfTHjgVCDD6wRuHjmrQueQ3vJMK4ghbKQjmFVnKmp2zRmjBf",
  "key25": "2xuH9RtnTCR5EGyDeeFYybbLrA9i7LQRdow4hJpkmQekV2w5xAJb2uCaRgMTiAAc5pCJJ6pLS4TURjXbKFecjeuf",
  "key26": "5dLCtiGWYLT5KbtNCkhXDXMxS1Y1ETZiRm9ZcDqTkpih31zWuH4zZQFxN5EqdX2pEFasqNNgyLNKh8VyX4tUKtoH",
  "key27": "5ek1JCoQuJSU2ftFFdaRaSgfLex2oq8xuCBdUGaxHn1Hj3o7d5C3ab6QDfprnVXYCTZhswX1VoLW9uSQp89Q84QG",
  "key28": "3ZttEqcHKDaLk8JjrLKroXBeYo8GDsXDAB7s6JaS5ZJTHngyPsPgwEEftSYxCfhadQkGSprXpmZdKMowGjxn8RtT",
  "key29": "XGFxeDX7TU1EYPmKmatczkLLmZKzxeGCZoy9wYzqxvUUWNzhy8F77FBYjSKradNjrU26HwZcxNzxEyrRZZTocoe",
  "key30": "2Kuh8tCJv5zhqtTBvafEUoxvsfF4ZNfjK2Bc2neCPydY7Z4TEPUwqoMaJvUWad7iBsCQeFWNbh5oaASLm2czN837",
  "key31": "42bZSqo59S1z4W492gxekXT8U7hZ9CRF7XTh7N8fHpQQhzk4Q2V5AnR7WDWiU4YFix224P49Wm7xgYsLQ8AbJ3tq",
  "key32": "5Vf2tDNTCjRBVYBqVtStc21sKdPpC7WxcRybtnjpHUyAcwinYNZVNWSMDwcuNYYL4GCgMWhiddDvaWvJbUh8L5si",
  "key33": "4V6Ldnd5dQaMmBTB6L4ZYSDYH5LbBELPKK9xrEiyCyftAUGymSyKoFvyffCFWb1gUMT4eT1g3FyzmNtB2aeEmuX4",
  "key34": "5LDvN1w19iRvZuXGhnzei7r2CYCbkqNvnvhESPkR1nJ2RTMQhnzXugPDDUGXzDRTBJFLLnR1JV29u3MFzhDb2AzP",
  "key35": "4FDwfqf8PxtxppmRihdxocszUWthmHJn6G5zuwDnx274SPQYRiwuVo9sBRsJGz3Zo9RaawZRDUZHyzhce1Egydfr",
  "key36": "4gN2Wj89UkXgrdgAvSc73J4ijMag5RjkjMp4upo4vcR64y5RAJVsphmPmtV1Ctsu9D9tao2o9Mxk76Rd99rMvs7R"
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
