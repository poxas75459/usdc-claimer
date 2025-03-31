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
    "3BKhqaQR3fhktMzV2P7tahi3aGTWtnHnxdXHfp4i2MTRWfVpexfwDQV1u8RWCANmu8R8vXJk8f93188WbE591XTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gj3cky2RQdm9wFeskMF56fqcAsgLmnHfycZUyXiGEUbW8q2sZNgn3ebxMt519DDZZKFqmTqaC1LYPsD1yVgwguY",
  "key1": "3r5mrhF7EP57jKFSgjaEKUvsvJSJWNHnXEkHsSgJawy1aDU3L1rLPbRcnJv3mYy7MiBy8mSesLsEu8cayan5qZDy",
  "key2": "5pu84yrYNLF3zrR68cxAn76GrLkdbMSsQPAwg15Xjcse9uCpYuyKhgeswTEDw7QmtsK41Ufmqsjncw9iv3RMUn1R",
  "key3": "4HZQvmWg7UdisvG3sAAmkWrfFT84FMFFSzro4AaE8HRWbEmSmd4UfAGaayB6jq8h5YQ14seJekGrA21GvZWKiFFA",
  "key4": "3VyXFWwjfg9dHg5PERFbBc9YNy7kY2h5p8Qo1LV2Wfbuy7nZ2JtRgBQknxnHu8RBVFECpKKe4JBZbshzBCGiR1WL",
  "key5": "L5SptDoy8sw7xZQPPMC46fm2CkRr63nZzGQNCcjDMykXKECNTnpe93qDxFAUPCyz6dCM4irfwQuA9wgxQ5VE5M3",
  "key6": "57ZjFEgFWdZKqz7xFCqcdkb69YGjbbtExGrGeh6sWxv6ZwMJunGGtNPW8JyifTLSZjNZNtdS8S2QPCF91LAfxs3e",
  "key7": "2YswkbZX8UyAp2NCKUykiQ7c6bWRCJQnJ1Kh9aLxiA1ddS6sqajBsVvUHQ2x2TkDcLTMByXCwiCPnW71aenQhdsY",
  "key8": "PW6cx6ktSU2h38HnxWwaudQEu2ouQdRWG1RFxRny9MfDUVtPwsy32U3FHBqsE6SfKdixBZD4EWmUgCNdzzCMshR",
  "key9": "2ZLPNbZe1Q4rqC5mYv6Et3R27dwToheU6yC5FokjUnTDu5gGitRvViNA7i5gx3nsHAqD8wmxkD7oUCg9gCmsDYwi",
  "key10": "4oUAq4XLPuUqE4duKVae5om7mpaEkHmRbvxk22grMhVSh5ve52NzcVSZ5a8pzUZnNLXGshWnn5WQpg8yzFnaoFad",
  "key11": "bW6CV9UR9aeiaJ66iGWgDxwG9x3VU62DQskKfRvjjimK8yRkfSKZpGLcK7Z71MQoQLDtKkcKNudCbPjQWprsCk4",
  "key12": "5FNwUmE9Hpf5XLtZ7SyLS4rpVr84U6UpMfCNjgLcj7pVCrWoujqPK6LfTiqnUyt5iVENbtm26q7Z3TQGcqq5YjfQ",
  "key13": "gZVK97S44JmaK6geN8XBD7wpkg8aKGUP7wSmvFTGw5YoGuRcEzmvpdYmYVGXf5HzmP3e1QY9PFwNPXBL9hayD8e",
  "key14": "3cbp29YURHBm3sFifQqfyaHvTPsAhJJocmDyBx2C4QnnHvBQvp8mdAhQXiVwamUGTM7X1ZKj5rfjHKiNdH3YedT",
  "key15": "2bWeNvDL3nuuFgMfV1ujcsPLsCZhu5a2w3xtuXwSJ76PivVESWzBn5DjceUZYLX1qZ7yQFtULjoAYMzhWSRqHwnx",
  "key16": "3oz2Xo3KFc6PSYijNaf8rqq8DeAE2iey7MXcA6o2bmdR43AbtmKnR5v3RWnSjiekz2abrfHjShyvPn14zCfpxsZX",
  "key17": "3ZuJmEuRgE4EesiWAFxczf5WDmyKrjgYffAboaz58MR3Zapm7zjwDu3uYdGfg7qNiNth4sKuXJLCzQSrjDttZeUa",
  "key18": "WcAXMz5so4dqiR3dWjREsbkhDGATSLSHZkYDYbpPrRirWnvPwsBRTFcrxz4ufLDWrgCJu1QF6u21qq2q3HzpMRW",
  "key19": "5ijuwBSJFozsN35NWJ11nB8uX44oKGPerHdMYrtJbfLAo9eXb7nT7vxGcbu6zL3KL7mxPbeE8mhK4xhXrQuDP1dY",
  "key20": "2A5sGLw2w1hqV5auMnQReAenoQVeYVuGhbEX4vXwh7e4Sd3BHTg9ei3Jf9qu868Z5hGywhnTEwwaBrAY25WDS6pv",
  "key21": "226EgcsmuvMmhTk6hTgNYjj83uCBJtNuZ5HnckNXA3tYfRT1gWAjBroXzYNKCoBQFcRWCQdPRwayMY3AEtmZKpLi",
  "key22": "3BvreXCkUMJ3smwQrtCgBCQ7LWyf9c5BtmwPvD27NGoevy9VKCmY3dKCpUspQU87XHVz8nc4L74W2nUjEeGX2UEN",
  "key23": "5qEwEyvF5t7AAndp9q1WPCB7U9FzNjcy2qkJybftci1uc9Dntt4xbh98GAPz8rvHVSdiBVciQzzMhJ1EN54qQHLb",
  "key24": "5LCmz5ZzdMFnNN6yguper1f33S4Mebva7QXCXK7Zh8sjSdk7DAUpZA4M4twXfsiFqgJWXYLwQ5tp8wxgUs7P6Mbo",
  "key25": "2kh66CsNFFVsF9qzWWvhoafMsSB9zbeAd2xwU2k9dBfPjK1Rq7xLzWpFKG3zyQvF8snzmJkjzYKzz2aczzs8s5Xv",
  "key26": "4HRipTtg6xmQBY5dCKeL7XtaGrPkTSAETr2VaWCZEiPxxWr2kteYcskoAdg6wUomjAQbETexjXrUNqo4bG9dQCxE",
  "key27": "p7ZfLiK3wXg58RyZr6PDwhbEixRrqi5QvrRXheqt62znUbcVxXWgZQuBF9tKm9yUE8EGESXoGAHEydWYAAhkHmz",
  "key28": "2SKwdzvv2jMPDd2pxJoAr3KQuBtMm1KBeqKu2FdvK8y2AS6SDUf5G7UHfCgYMN7jJd61G678rkJrv4bQcyCRqUuE",
  "key29": "3FLZqTNoTaG7kCJFVBVpMv5vcQWTd1cnjkJ3sQRhWaNqr8UmUdHu46aPCFfU9Hf1MF1kVyNaPNcuxoeot2TNrNar",
  "key30": "5ieep9RSuX7GJMb95aiHRrp69tgsWqzRFuwk4MbdMVrUcv52ZJbRsrMoC5tyZyujWcDd7NCnWCSvYB4mWczfwCtS",
  "key31": "3ZnFzT1kFTUofAZ8mauj7mbWvCp4TwnTeDggW8ZzjgwdtQPGPK22prZev3wi6Lm9KKeBkCT7RLQDmZvPAo9MEWW7",
  "key32": "J5niaxcN7zKvhm8fREMHYnb2EddgV6GmBMMYPBdBW8dsxAgifmDrYWNEWxg3t26tyXrDzJN2m4J9hoH3Srk6Ev3",
  "key33": "4KiHrUY5GGMAT4SD289y7k6CWLCPUwzT8dcr2yXFWjBUDotAzQw4EN9pn4Ue3vYo3WhgLgTPHkqK3b3UkxZVXtgr",
  "key34": "5dWNCuWmfduFr2b45wUFNpDAaFSZGfRkcG5ysh8pnFjoXCFAEomkxLhPezrdkSqBchHwJTFC5kabXvK59axfYGuS",
  "key35": "2LYhkuE9tRdeZM6TZDN1E26RNTfxNQpCvzWAfYH5tpFRptGvc2gxzz2YdxW63NnE6rsXHdfNKJBpKYuBVY1XeiWH"
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
