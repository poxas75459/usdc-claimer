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
    "3XPBgNMdbYQ5m6Nos47649NwXBrP4msPebk9Vr1e56VY7FRuukkmZMB6CGCfp8jprafeBaGS31KbjnDz9kMqNmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GK4SnnjYfA9mrU5ySK5qcU8rBQYkZcR9gRQ7htESSwwHHWKDLnhm5UGyVrpR74sgxHqta2TMjKMEqrR2mbiPgYc",
  "key1": "2tJdVdQryGRSodYUcxFVGnm2qoPTCubwkXVXzHnG96q2URnQbXc1bX9A415HF7ZDBbSQF89rBvq9qtNg5Ebv67kJ",
  "key2": "2EPpuqkoWKJ9QcWNWZuTP1fbNVoM8eJEH6WFp2NN71X6YLgNtE6XMyySSXfF4HkdWaNwayzVkhj12jBq3D99Qxb5",
  "key3": "BHaaMq4AKaCvFhmZ3QB8breL3NSxN4pQH7VMbrgkMLdLbfJp6FUZFxFbfHsSfQJAFzK4PEqysdDy1A5WvFJY7wr",
  "key4": "EsYED6LwayJ1CLGrchSfCtyU767FbSnGin2pHC1kwKyb7izHuw6mCW81Gpuu15HVQ45JwSaAPMe831bdQCYtycK",
  "key5": "JD6gTAuF6jUMbAe7HwKUQERXP6iBVnrg8NNzxk2Wgy9MC69hYo8oMikzrmnBrCyXxHVewfkBLricT4GKvyToyTm",
  "key6": "5qdNrcWrDGMkCDYGkT5ULsSze1z7HJz9ceL4i6kQa8UpDKmP12Fo4mTYHaU3B9UikZ3jXr14YL3MT8tSQTfuVPbJ",
  "key7": "4AR1D6wxYEqdzLmmkE4VLxNexZGNrMTh13QCuxBsgsFLtY3bCcLgVmSCB44Ngfs1dCJgf9dGeVNeWbDAJATwQjov",
  "key8": "2FoZxxjx8Cud6hCjfaDFtcPqMzGeUNmFJ8usrpmzm5GZTB6g4rBtFxXgHkCCnincENusFpp1zm4uqqjfN3VrUtS4",
  "key9": "5LPDnPCtqvJ3qGqxh1sTxJ4AdSeBfFgK4uxwAPpaKhY83JnXq3bG89UXgX72bW4varoEW8kqduQ46MVHZiBeHKq7",
  "key10": "5G8Z7CX1K55RKVaMrDExBmLV9E6hTQARLEFaaWhLNYQHWjL6PMP27mWi7BEnrvWGe1gkzvQc4erqkxLNu11XRuFR",
  "key11": "3ftbpKWY45YGssrfQEWdn666zwoLAUAcogdGTX3RsE1ZP3Zr6cmHtBxBZhMJ87tKxdignvs2jBAkGLkwgagBU6aM",
  "key12": "43NZMocG5SgUBAXgbcLuYV5Kk9zEZy6xYNeXfahUQRUmV9GpxzKqoWKD8CJje53E8yA1BegBt4ccsrATQXnwqnQW",
  "key13": "3hoMJWEN2cRyUNgY795Z9HJypNqBZCMWqnLhzk4DpT38dDv4eHkK3ZeZXFqTvgvwnimZY6huggenD56Fz1mGTmvo",
  "key14": "3vUPdkQU8tqH7PnkbfFvnwG9XAGXagpUZxjMNKssLw1x3hYhS4rG8FJ7AR2JZJZzrKBf5kjz3teCXvosrEWUQZer",
  "key15": "54Zi3U7nXH2DThwSSQ5i2SRRqfZMYCRg66vFzw7XPxc1yLe57aQYbEieqL2JXGvwdVTNgvXBQ2NhgR1hLECLej8z",
  "key16": "2CH4keuusgM7TcX7W3ZoztmSJNLb4LsCn3tGq1vBd7Byq7g8VrwrVZLLvAMhrhTyNzoBXqSd3DxA3EHb91C7CJYm",
  "key17": "4dsj2Dk6xovudFyJYnj8VaNWUcH8iADGAQMcqqHMfKmYCZU3GLE2VrL3yQq7QBXQjGG9etXUeqeFKWxHsxo69U3B",
  "key18": "5mYenm46fy48wKMEhc7esgASef5zz7TwaCGaQdR3SYKyfNeDeLzQp8UPGwnJLa6zJvtgvRAjWZCgXjmLUmCKu3A7",
  "key19": "frnQozjQ8LsThzApmvMS2QdBUQZJcJbrA8vq5kKHrWbZNNKp3h553Rs1kFGx4NaPRHtP1Ssex2s3739NyopwTtH",
  "key20": "XKzb5ro4sTtqS1bD12mBBjF8VjGUgUntWKe7R9t3F8bwixS2kaEFtwafFxSC5uUGfXkyRCUNQDPx7efd6d1Wrr7",
  "key21": "67RSfke3hdMzKoMxWmqqFHnR8qbiAAGKrqTvf4rYpfTJtcnoT5af57ZLCCDUBjkQ5QVgaxQVyvn6mer9UTt4BAW8",
  "key22": "YJcKnfCt4ZhZXDkL2Q5WTW13hgsXX5ShC35yVnJGYJcapktryV8n4vmEyjHecsMfEHEkTymHSkCzDK6aXtVrMAf",
  "key23": "3FXN6JafAa7up8yKSVYoozDqD5C65t9W9SyKtSgBZuNAENzMTDSkTLn8aaj4GDbpPWE42ZSsPX6YEUC6ZXMpRBMa",
  "key24": "4kSfLX5pt8deiKjkEjFMLX3DZWKPofo968x72HgMiJzjLCAmKAHFYVGAy9zpKH3cmrMymnSwf19s1Qi849NXtaDM",
  "key25": "4h5cknZwx7cPGK7LKtozwga5nBaDaigfCg6PEwAx3mBb1SegEEiSYhBt2QWnKdYiKSZxPJYdpGVXvczywkUh9MCC",
  "key26": "3ap5eb8TjbgNpLDX6mV1KP3YtTPWRGtRPXYUKm4GPtkF3H6frWmehBaDdBgLg9zfNN4ZFB9zTzn5ZPHaJhe4xWiR",
  "key27": "55gkNGiJrGkjmWZuhjg6dcZYCoBXWESocDkVtkpQsuAHALuU6kFyXpWSo9LoJjw4vXy8KkYbtuW5nF24mJQoRRLM",
  "key28": "fwgxn9cknbhvBAZt543pHUYBoaqe9AYJ76xJqxF2qBxnTY7VahdHt8EnYwiV2CdZXThKDhJMnEAdt8oAEwcvLzY",
  "key29": "22UwPeNgirkToXVjVZNWGKrvNCdvjrEqnGqJQ7Q5Ex16NeT7gAiaDxiqso96CrcvJEvowtN78pj8sNzy5cWvViY9",
  "key30": "betcW7yRd4qLXw9Kb8b611TPjDT2dUdUidCPga5vFGm5Ai7cWtFG3mJd4QfrxQ5Eg5eJNwVYzq72oVxZX41SfbL",
  "key31": "5848U4yhqAbiG6DXsavNgAQGiBDahVGWqPAFK9yC3PrzoQ8StK64HDCF6GrpZfWrCDeGYQgNo5X9k1JrreJ7w7sK",
  "key32": "3wsjdCH7Up21W6iG8YJdcT26fQroJvBKjbwGQQFaDu8u4jTgexK1Eb8WXqwHv1ymqn4gd3MasDfQTnkCsE8jgNr6",
  "key33": "4jaF6Y5jrEKkHKj3EPopKcsacETCwT6CExe4iV2hyGKL7qehFunWDEmRDmrTjetZQeUfCArPfRbHPcoK8j43dzKy",
  "key34": "4YTqZBmmokCDwaSG1kHFm3m2Ur2fPGpSpSt35b4qmdXBHNTDAoE2Rs4xqWbanTagT4iRJZ4zepzR6BKZQPeEwDB"
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
