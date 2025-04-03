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
    "5SJUkaR8jQdBpor276yHuQFxnYK7ewrFqtWUvtsA9ifMtK5wrr8bhqdtU9LuLXpmvuHJXj8grWevW1YRCryBjWBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mFof7NdTSuRbENH4PerVRK63U1M5ZXwaBMuqCNBWEGYjTANCGbirefJcHuAxK3R8zB4ecAHnWQ8xv9os893xJpq",
  "key1": "oAYxWvhze2LBP2xS6HsJ2NjP1XkyFgCZL2FXtxJbcjmazmN7yrJF3S8wgp2CeCZvzesgtaxr68thuahqciPqFor",
  "key2": "5dcYNuzdZgRs4NDvLxTzmHRL1TV9N9bWEUnMGRs6Fc4bPqX9jAX5NpZHzbNrnwN3RFVS8ezbBueSVh9yYoXmN7hM",
  "key3": "3DF6r6UWtZbYrC4TJ9ytF4kMjtUD7A4K4KQoQYDqnQ57wAN3aFarHb6q94oJcDo48op5nf3BRRC5KP8BSokJAjye",
  "key4": "cdXbvkxkTQ8hsSMb8Eccg9f9BGAianMVKNpt2wycgABQyizJnMuyd7P1zDxYku9pdXMcNxsecPYjCTWdcPtreBe",
  "key5": "4DXgbZbzaFcVhsPkdccdSgKcYXGpg6dBnpJnoNbE5bt47rmLbSEMu4Z7e4jBpLs9sh9DpJNq43uSzMKt7mujRqCv",
  "key6": "5L3aEbtxh9qhTTCb7qxNHdzDFNmmA98k4fApFUeAXqYrzZZcT6sbZwSiENQryqgWNTLFPA69kevAGRqah6J7F8PS",
  "key7": "5BpMRJ4ZiVs1HkxrJmbirrrSYpzJMhWgq2MctfnZ9QhCBhK9GTjc84bA338XkdUKmZ22NjanPp1V8tpC4WKYW9m6",
  "key8": "5mHTa3iswsJb1LyxFep6ynkBW4YfXhGMnz1MCP6FMwoD74j6zZJ1boero3bY3vfyZF3g3UnsGuByg9K4MRXi7Dx3",
  "key9": "2kqiXQpTBT38Ho6pB4FgaLiQgz69JVY2kYUZ7EgGXdtVhQYhfMaLEyFDCBrhSJnpkHJQqG7Ea5aZ468VBgmDjz18",
  "key10": "4tp7VxdMoy9RNrigH6Z5zjRn4oqHYXPVhzeP7w4caEoHzcyCSjGsk3LHTpB8LkBnBPNNDwZcfXqhRevp4cP89q9E",
  "key11": "3ZNt28qNmUiQpzp61NCNiwF7kY6Fkr8d14CTE8ZDfZCw6kGM6e3LN8E8e9hPMbE14uyfURy8HFCgRzpYKgmofLzz",
  "key12": "Dff3ji4cNbGZDjhG4AakkFZYZEUif6MGjbLKydfKL8NFndTTFKxEkJ2w89z2qNpzP5HZm3yow7smryLhKM74Foz",
  "key13": "3oykTz6aHVMG7chhDxiTRE7xRmJ4TjZBQjhjxa1eGhCYYuMXcTkfNKFzHfroNRXUETHo5oDWo2CpL6rQJuttvKTo",
  "key14": "5EqtPvRnixbbw2twue5cS8GxjSSmwrd4hf2UqGc1f8emoGdZ6y8kzhMMtWzdTq7W4EmHCqQrVbmLijVew4gbdXFG",
  "key15": "5tHf4xfCjJj1oReN6dtLVTEWsSUNW8SfNtiXPi3XwdkBVgNtqDZNjkbSUC8fahTbiD9743eCPf3P7HanaGnVjBJZ",
  "key16": "3tC5Grncg2ihaePYceYZTk2okcLeqVgHdoEMvuuBkmhoBmWU85FEhnJ2A9945jCytBjB4E8Kwsr8q44k6bfF38WK",
  "key17": "QsGfAVU1NtdPia8ygw4UXsbjUmw4UiK6YLNhJPUyFj7kiXzWWmiocXXdiVDr8AWharSGVckZamDGxpPSpxtgpcb",
  "key18": "5i8zsrhHo8FVJJ1YMnokLYwxMqdw1PQyf6r49VxCgATkRzewbPzsrFPKZQxnLvd8jnJV7GvF8N76QYmkoKffZrfj",
  "key19": "49R4unxqg1J3LKCH7zQw3HL4XcZxB6oRo2rMUcighmAmVLNuWCNtZFkYS4NicnwdJxuu8SyTJHdZeMDrHmyz7L6y",
  "key20": "5FeRyrcCDQQi61pTMMhfrRwC4D6SKcd8kMxJAGfzYwsvV9ALPC5uECvCWDMDXJjqk4AgbmSoDmaLh6YbWi32rrMZ",
  "key21": "3WzgNvTUd93PXVQZP8srF7fHnrMtnGqxcvD7Q5qKXUU1yvWH7W1zZ8yKP569ogFJCsg4MMeTX7bx58CdbsTNJLtz",
  "key22": "5WwbiFGRPg4UteTCfJzGaYHuWgoNu4g5e62bNhcboz97aufWCBuzviQEFxuopGCMdtGfAfz57Uh9MwFeXzznL66C",
  "key23": "4pm9ozUPtAzH5pwCSuSUxdXyj5E1jkmNvXTYMTM3k4xGLtNDepTn5WCKkJtFLVukuvePhXA6Yz2h7yxybLMnjzMS",
  "key24": "48BC1F4eruaSb4jj4x9sAvwZDBk7Enthm79MAD8Dhdr2zHHTv3jpc2aFR3p2ebVfLpwMW9R49oMhDWVSCB6EQbiS",
  "key25": "5XE59Bc7HpU3cNAsELQ9D9uDSALpJQT2YX3uiXJG8X93UsbprMbvDDukXn9tDbRvpgnuTQCGNfcBh2pQaKUQ8bbd",
  "key26": "2z11rw5cUw65ogJtNtcxz7T8mZJer3SRcs7LY3ibBfXL8tT24KUm5XEeregSiVps1jU8Y3y9rstiJ1HZHVBWkDsT",
  "key27": "4ofsc6tnB6nUsepqxwr1G76ZEVU1kBYifAuGrZL9ucNRxqc4doRo1Bgiw6fhkre2wTmAxeW5FSXmoSe4kSvFurhT",
  "key28": "PsdrbCQJ1CA4tpNbUwrnfP7FfhNc4yi2Q9zeyxh69jaZmCQps5enrzUjwRTCZZYSmiDzhyXN9B75gdH7G7u8eci",
  "key29": "3GN4hPWgKCE6huovBBm8MHVWAeDkuuH4SUcWR4sLinvQtqang8thHfQp6pJ8XXbZKv6QM12typiNRQWmZgVzNuKH",
  "key30": "pJkyN6ijPZZbnWn6wLLev7TWEaZjkBEVJ4ESM8ianq8FvjkDr5owq4jiBMCHhVknNcepoqJAGdt14u9UuueaBH7",
  "key31": "5u131kuXLhszivqQdmSjmvQ2Dz8WwCHQgJgiZ4XMCSNMBopNFcjiBdYxRawCjiti3kSpZYA2eb7J3ZpXrtLPZ4mj",
  "key32": "4k3g9VtgUjtsxS8kMyBWb6WSRB11H6vzQypvFT3LAKaHUEVLukeEFjDrFzzdf3PVMsVtSWy2KiQPuvBGuRAFsNw7",
  "key33": "4Eq4r1Mvzc7taqts1XcWrD9GQkzst6p72UEo8hSzVoYPwdrNjd4q1UwwAxcym96bqJGfCnJuWyiMTaUVBbDjUcqU",
  "key34": "3NqGp4HXCuiWhpwCSzRXeG5NSTsn3tpPHfzCAKNoZuS49F3Ag3hxrkZKS5FoWApfNzQk8uoEt6R4Q2nm6pSfHuUv",
  "key35": "2RnsyYBF1msFFHrKLc8GuefxpY6bM69BJcJ1vXQn5dzBB61Ye3wPG9HMfUPsaSRS8YM1Tp8WWQZZAT6jXdFwtAB6",
  "key36": "3gyzSKVgQE9RbXN3oPpKnmBqABayh5HjZc3Wi3MvEASw4ibgPTG8rFvRtcR5YZXXUEBtqL1PYHThvKnuDRZsrbD5",
  "key37": "4mwvrY4YebtbovHHuVZ5GPre5S2uG9uhMSpKs1KCeSEpy8MWxH4Ed6EikR1SRyMmk67qQcBV2HB5ejEW9v882Tpz",
  "key38": "46Cv1bLejVo61EjxzMqLh7oEgyWC2XZkGcwJfwKNX51AR1meuDS3uoBUV45zFi2cZmNBcsjhsreGPWBdcpteRkyz",
  "key39": "227SBtWF27zmFgng39oRGonKEngnY55muQy9hKbJrX9VDyu5sy9xzjVHjN6bTbbxJvzE34vXMrrJpuwB7FWND19x"
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
