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
    "SmtTqbKBcmazsDgnKR7CbmXjpeYWGwxpUvzixBkXfE6SJYY6y69HW5QSq1uVnDGNuEUPHACQWrikfywS5ypr6s2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "466zSjDx5EG9tor11BovNKgBdNoyTRAAUZ8MqdPN2G8WQai3RyW6t6NYGVnC6pu3DMUBphE7XpqnVXJ8eN4BF7bA",
  "key1": "UDettnywEzRgVLAXe13tc2xmJXPAD7hbg8Z7vnb4cLXUMbiEt7kS1J76uMRv5Wn1izCjdx3axNiC3fvBULdBEQ4",
  "key2": "3u9aMvtPW5Cec6xnELpvEAhYmUHtghRFBFjzib325PEg3LRrs47PWnQ7YnPbnr3skZmDsqEYjnv68Hx7wSbLiEWK",
  "key3": "2aCARvqjwk9zuLKx2BcRopdymmYCsTrCBabWnsb4d7qBUZdFBVpgz8ZhmATud3ZVYxCcQQgpQXM92s9JDae1h9wJ",
  "key4": "2UGVdbRi26KCB3ePqVkumAuCZucS685HLAZQJA35AiFRtWHG7GBXFdExhcLBdNfEmezNRsTo6nKrQxbGZ9T4GTaP",
  "key5": "4taHY3SFNCLhnBqeyyLYKzdTiiJs3eEABX7a6yG32G1dmZQLRpLJ4hfrvP6xkCsAdCy6RD1NQGiFKbbJwvnJu2UQ",
  "key6": "4ezxRS61snXdrh2xoZjsRnVkyNLDwpaQ9HajW7xxBqdBV8DmG71KpQ1Y3Ad9nYNETuPa6PW1uYUzAVMpfdeAXoXB",
  "key7": "wZdCkMYFmWQt3XMhTF2b1npubxT5qhdFhA7CYTBXQoYMC8iCJwzHU6L2Z3mCczM8xAAR8iqkfyfpBMJbh98GS99",
  "key8": "2Pf7H2iS58jhYf7utHCSCsm73efSfu8oav7j651C5DQwM6tyEj65cGb7MxArM2zsceRoRHTeEQBg39AoBPe45p44",
  "key9": "4xPJzVVzCNc91m7Vf298w9qXLUdRTgs8nbyf7LgeXLMoQMKz9VFzpsieNKsBkhmpWUTGTiapzp3sn49E8Avtchv6",
  "key10": "3tqtN5os7P3xwtFSQKtKowpwgZ3qvAggfHFCT66cZrofDBFXKqNAV6FC4E38V981RuqVAFfmMGKonVLR1dtn2qrf",
  "key11": "5UoVVBuAczbLCcWZGrs2syPLLs27PjYz3Gae3sdsXbxK77bP69dXnb28dr3WCNU7mhyZF3KZCK1dxc211Wegw9z3",
  "key12": "5wCYXdpQA3vUuRueuJW5nrm6U4JxmPXa4TDPtNc5kxWGMbdo5bMcPeW9mHBe7eWJaPGt3fPuTuELtLfMEAqkfUSf",
  "key13": "2rQXE8mfcBytg6z2LHQAWXT9D22XQ96E8QGWbAwGkDQ6tLu54BW2UWfvF61tS1ngsjsifQrU47Whi2ViHxWghAw3",
  "key14": "2vtGJsdJ5NWd2x2hDCpZAuwiuLzcMkuJpUtWzMpTZPsk88DQg1frC7XhniXh8yTTbkUAi73cW1wSowYNyCve4PAW",
  "key15": "ZbydtvB4xN2qKV7iuzpSJPYhgvovVY7GxfvQ8jWKXtH4fxvfSvUZGPLy3acvgtPYR3QyXp4W71P6Z5dYTjiPimC",
  "key16": "2d4wNjcVWrxuC3LsfyZu6xSA9w4tcjyDWSFLak1s7ySE5jQ9SZu3GYtsrztGrPMB12RF33ePw5XK4yADUtv1u8h3",
  "key17": "XBdorEjt7pg7rgBkvEPKfrjdZ6Jre4Ns75TFSH2E2iDNQB3wkRuFGZBh82hgtRhaT7ySDdqx1sGrZd6HJfUojy8",
  "key18": "3NDNKfbCmJHWu5eq1K8vJ8ZLnje1oVbJjwHYLpe58Hzs32m2hv5QpzygzwdMdfQiScDA1uxRMpyByms8SWZNenHg",
  "key19": "5vDr978HuakNCAvB3eqAF84tXdKLxARrzsoJXtsNUwgCvMezEufkmYL7rzjwLm1Gh8qGo397QrGzT2shgXxsq1B2",
  "key20": "BbSGHjAKPMyzrUoE2jAVRKtATgxK4ftok7D39hpTUkX7acQrMEdaStoPn4xq8zBvqtFpMXEpStka6hmNpthLH6a",
  "key21": "3FniizwRXgwDAnkarSqifDRAkji5Ya1QKrTVbbbpzucMprY7adLtrXqfRH6ze2fyUrTDw4p3S89EhLvV2krKKFN",
  "key22": "5AVhCYMmyWGwAantBNyK4oMrngYksZapee6e6SqZ2bBvhs2a8hhNZ4t7HCfZ7kF8s8QNTkFsGKrXupXDAkrDVzMA",
  "key23": "2u6s7JruEhRzj1LFa5EPcdiEpgsgUBfQnZLgC57Xb3e2aXNAp26FwKLXJUvsAxU3pv6oW9gxRqwUfEoTaDAJeRBg",
  "key24": "GZtDKJEv5qyWV7X9Lqz4XsuWXZrH3JLk8seH4D25vNsJZ19bJqqXf9uuwFYMWzQd3MsS5iP7rC5AVS6SA6zwXWx",
  "key25": "2kiE1FKnov21bJuwQAtLWJxz2N3Z45Sk16YYo5kCFPDRbr8a9vLpL3ZmfoXpHMY5AKHs5MvykLvxUxBG8bZbouXT",
  "key26": "BJW6EM8r8HNTACjmLX4FfS2TKfMZEurLrw982Zp9MQZpUPrwbn79RF2BsHpCepG76QKh4MWFWGQtqdx4XKrErkq",
  "key27": "QpHRQnRsWVRF6J7nsgyrHJauMufikVTvNXisVCnGR2hwMUX7qNeS4tggequXi98jHP7AJLZeMwFEECfACirMwK5",
  "key28": "3gVCfZGG62qws9yKKe7j8e3FfHGZZGbLDaWN3DFHfJP8CZR7nQfGZkpRzqdpCRxDbkSCvBhZask7HauaNtzYqoK1",
  "key29": "2gpUww4Zu9L4ewtsYQWAr2CCpsMaiusV2oKbD58otr7HS4LZrceLA7aFNMHgBu15mdbRXqAwkdPqq21LSa4T7FXu",
  "key30": "64xZPuXFikyvZdgs1kzqhQqVVyYWEkkj5NP1KKfkXHLKaSBhNueMQ4T1izUaq2L2tS1bvxn8riEQmFH9QqJz1JPG",
  "key31": "4xs4Tm9Qi2U2QY3VJSFZLTraSwLSGkXj9nFRgg3i3n5k8qPtByJ87fiRu8exMmqouTokbn1mKtrq4fy5P1XbnKpq"
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
