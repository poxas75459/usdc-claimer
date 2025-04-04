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
    "8fRoDoo1EbwFbKdy57WyCdsd4RiQ7vJZZw3Gu8qzfRRjTsKMvcs44S1C2ddTGZmGRbeDXxxCiVMQmYAiJa5hEFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iAnahiJ3L2qEwZwymW5KLvexAnHjBMkr8emzFeHc2SDfzKerzBJGvPFFjxQ85Hw2fdEPrWiT4r5adSSJAvmDh4Z",
  "key1": "3DUKDa81vxev8Xe6hKMCKekH22LXddk6gv9LANucyGqLifadynABETpmpe9iqExT3NPXbVvAcqQv24umG9KdtdLS",
  "key2": "2xTj81eU4BTunnNWDNboZxLjyvbbEB9WkmwSxfQ4dzi9frevmEmzUfxd5bZBC7ZaEsgtu1vgiJjx3mcTfVdw49b8",
  "key3": "424ZbUcVXkZAqzNttC4Up5PiL8FLP57ga5fov34utsu3fDhCJsXjxkZUk5e6mnkv5aYA2CUyAXjR1rcrfqhFgobX",
  "key4": "KiSqPy6aVQyiySWxC8q8FSrcHEeyfxKNEbrpnPfC6sfuudvFgHDDZDhydGixiuDUofynAbfFVKVXyR53aaaZPtn",
  "key5": "5e4CYtcmg8ihQnLARduqMXxMFnFkjc3hwUtsLQ3UcpwD5maLt3AbddrtfDMR6J43GoYxyhnwKV2xQvQhSWhvYMez",
  "key6": "5Dff3HFCpqN9h24Pi89t9RTuVE16DejU3Hb6ivapdswnX3d58iDUtQe9ZfHE7EpTLiN5NVx6j1d7o7cHgBjBvtEY",
  "key7": "4KowmLLyUvxxJxFRve9nPJSQrSe3G6BXj1iMnKXJ5K34Diyq4hzkwo7hoQu5zeoE72zcTxAQHjXgEZeYTr5VeNrf",
  "key8": "2RfEH4RsKksFXdca7BTn9bbHSxZPWF4HJLQAue6qhpQYN1SmiykQRnoFpzzgZ83rSK8V2o18xgSSTqzDxrc5kDav",
  "key9": "5Rs85MwyMGWY5TVnXHHM9eFjxu1woGSh54CWU1t57EWJF4rRCAeduKSLPDj2vDLw5Z8nwCGYwh73Dt8Pxu3w3BTz",
  "key10": "4u9Kch74St4LWWeRuu7D67DxiVw5NhGbk5Dfno352BN36Wor4hXab1iWCxhxXoQZyJUCTT7UWdokn43PzV8KDXLt",
  "key11": "614yMmLMe2FhdevmNcm1jZCYUVpdTmS7V63GsP43THQvsf6hJ8hc38z6hFWADpkHkkHJafatmLgEVvvkhuCi578D",
  "key12": "55UvVi4UwAEPpEcRi9P4PxPD7V1iE47RyVb5M27vfyehnqkfJhvZ77jSuadkNtFSkYrM1mPV1pbiR7pfGFDtjQc6",
  "key13": "3NoMeQeQmNAF5WejoToxFTZfBzBrjYjAaS29CLtBneXiSU6QQ4FkpXcKJKGLVGkYL6kAxv7UFPYhJFsMrYwuxR9Q",
  "key14": "3B7Z8pYp5bUcQKwqtAvFJpqEVB287woEWzaibMeb9Rhageoy8tGtocgiBU9MaNf5jMYRUcdEbshxyEreZjd3xUcC",
  "key15": "62EPciZyY2NXrXAc37cxo9PMxdzcDBRPXtgtBvDfLLbXCkgv3Q48TE1J2NyLdMesqMaA8sbyYKeBXLovrmb4RAbi",
  "key16": "4Bng1MTmB7FpLNjh9aAXYsBxcCmaou5jLaz7TFiAsPWxrQ5XcZqvYqQbYJvF7BtNLCNvh1E7qw8MJSeR3tF4nnDu",
  "key17": "2vVXGvsyoSwAhJFbXEsp37h72cNi2G4gyWdQHVevyqjvMpfn3CfPy48juicBsFVHdS1fwbS9mLdQGz8YnXK3FB4Q",
  "key18": "5irNNeMH9p3Gb3MXHLFLSHMN4VWYrMBoHXM7qoqatcWFzsNcpfwGmUQ9hqvN4kDTGPVE9gGkxuD3EYAtgXj1q2H7",
  "key19": "2Po3KBoYcQ65EsnoPRUjbtNFFNVmBDQnVMmauTppCA4cshmj9yGsvcMFucgkbciXTSHJ5Xdm1uJkozCvZPeokAGS",
  "key20": "ytnUePKXK5RwbmisdcrfHHCQdRbZ74PF5qVi7QhYEAjTdpRbpBojD18iNEvnQfhoSivVV89NK4GUinneUvSuh7X",
  "key21": "23q3eZwZ2SC2wcFCjtCno1mse9F11ZEC121uLdi2m6oFmWvPnKkjJPnHtJbJmAuBpNX5QGzohPnKZPuTCYUFW3eG",
  "key22": "4Q9NhmDiv2Jn9vdBAtepmR1wkCaWo3rxHx25SVtxjqVo39fmpDCDqKUGPn15BmytvDa8dBDb675oprxqoy3JuwbD",
  "key23": "5H2ehcxakHRSokufcFQ31xQooDomy3iNqQAhYkJnhQuzXL9C4kRFgWZUquvruDwV1TxpPAVx3fgdnL2CscVVnstG",
  "key24": "5LfjmoodqmqJhkboeYo94HMUwmUvTJUdHGQGEtJFc8TeyHD6nWevTTam1rmnsUKQhP5zLRozbWn9mahUy26FBDTA",
  "key25": "Ja4Hx3j3guBspvLVmaC2WRG967tvyhNh8Uq1LuMVVfM3gbNoj7GZ7XWJswJotv2z5gJkN6xYJAEHcEuHqoWpj31",
  "key26": "63rjadAkjwJY4cCqy4ZoBSteFEfC5HTfXvdMZEDFS3Zaxi9c2hCP6SNHstfpH3kLMbH3FAiJ7hTJCP3WoY5s1uhT",
  "key27": "62UvU2wdzScBHTo3qaER3r3M4TzPgTqron3QaS1mySb69VZceAi55ATDKbWsXS9hrwN2Z6wJtMgnFZ2BXw4RrAfz",
  "key28": "2g6mt5yjn8QmAoeSeHwgxxEYwfkXm5A8a9uWYhQzciPXZ4k5pSLTsnNjGQu4YkYQANpFoAtf2JatpvdwvLZ9LsAX",
  "key29": "37aZYTW9i4seBquc7dFp9DQXEB914aWS3WQXzMAJV9MqZxaQp7xszfifB8V2HFFuPSMoRKFHnXGoGmrpbN6HNaU4",
  "key30": "49mv3Ard58JD7QCxGjCg1V9CbfLhzerYeK1FPeiEu9gqP6vU88jtP1hf7yi8zGKLZzaAyVuH4bpfrwJW1D8ewzLc"
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
