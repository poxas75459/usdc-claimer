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
    "2aajL6cCFH7daVpTzxfK3QDk8qeFEhQSaADs7KXLgoHK1waBe2ibSwcuJUeyeQ1grGczmWY2uazdc6Z2wB66nqKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DnGHJLhpjnx3jws8KgKJ8U5eH4i3fL8CZgUTawaJrSdxmxAQE1NVQaankgG78JivV2HosZpAKEDFRJM8TGNoSRA",
  "key1": "3ELN6Kzvrw3TguVzvP2nmyv1ULZRCdk5PydB9F2wAdkq9mT2Dc7Y5D1bU5CNv49PqcDMYFv5evAwkXiDZ8Y5NBsu",
  "key2": "2mmoQNsGyHA2cQzPwD25Ze6hEMRgJyZkfrJL3889jJ2v8kRwfzAp8TW3nCjMmzx39oAAZhWZHoMHEmWx6SoAWYkh",
  "key3": "3MxmLUJ9EqM1t5uczzX2TBdogw45CKJBHUhTytkfVidFhtuZjhHxBCfQRw3wvK23iDTDWLB8qtrYsubu8mxyaaUp",
  "key4": "3PK9FcUijqNe5sgNjpLZvMLytrCbGpMao2xiCt9X6k1qQy65Nq2kgdafiVYhwzheTF7gJvSsG8xD3Aj8k1Z1o8oY",
  "key5": "38iYi2pq22cofLZa9F6dTPiT8VBR1s2ZYenaLEDHyfZaz7RBUr9VZBkJzAcaDQr81QvnAXhCFrzu3FLhZRUxq5gC",
  "key6": "44rQGb33cMUvkDpjPoGPBBYkF31CbY7BZedQEdUDWmHFqUcvTf9s8Ezc2tKhotyFaiG5LZG83RtdATBx8avbuDRG",
  "key7": "395GTDqpeT6HrEDL4mEFqxomEvzsZCKNahf61UkA3Hjpiyr2hMzguJdsc7xkMwht3t9UCiLco5yuCVpJs3Pr5MvD",
  "key8": "3cszEFfYDH3PH6imM8RhjoNQigCkdrZDKbqtvcVFbW9QydvNCbHLTWK32ruuQkkmRoYUDWhqjh6tzVUrM4A2bgTw",
  "key9": "2tJ3BPkTFe4ibwanZ4jpznLASpxGfDYWGG1orkYHuK9Zc5yUoFuzt8uhhm7hxVc5H6uLxFgjAtqAFZ6BGddFLYKu",
  "key10": "5DKLVSnJJT3kqgv5pxVvAxX386huzhqks1yXoLNufjqGBd1VEnme52Z8F4xCFUv1FChmGUjtbAVh6Ui62cGGAYZ9",
  "key11": "53skkawGaAGteqncgQLAL1ZK6G4AvuVEP1EWzhVE3Gzc18i4HWtgfd8Pf1e6Hzoh5w1n6Ejxyge6TkTehigZXbwL",
  "key12": "4SizxRKsfidZdVqNPvpTVEmoozmjfHQsohTsNKH3JtCG4BtAThoc3wCQfgDDybZsNpFSc3Uxe4CGWyvDKKM7HYj5",
  "key13": "2Q1FuAvCr5bkPHUs3coRRG7DAXYh93VVvMLMaEftULsyX7vcYTJkL7KybfBrn5qwMrwJVHzsfeR8eJwgHLaP1Uo",
  "key14": "35pyN17ZYjBbC2in7aoPkCySwPTCX52NkagPDbL5btVzgvxDuPYX3Zxc3a6ZrH6z7t3GYntuF9abt2Ut6NmSe7xS",
  "key15": "52aioefbdhoEqnEM59EvYpnnNgLLKjF5tvW88ANyDMNwR7HGFoUPxqJ1UfWDcpAhiVu6zzZixoMfc9irzxPWVGAB",
  "key16": "5AnBm1dmoBd6HSzUXnaQFx2LqE7FPAZAT9Pycxz8RPCacGAHitgbaYueYn9jRDd2iHNZqWyFXD63ATECoeaQozw6",
  "key17": "4Aear5jpbdUStrHWXHEjY13SRp89QQwQ2eXXPp5NQpSFg7NdVeAUFPxewGUURr2r8ZWte4jMMyKYhTx7mihhxyPC",
  "key18": "64iPnKaWjq9sJyza9qujH8QtZiaHr8m3Er2saSHvM45kmK8sLGA5ongnLzZTZnWNBHLdUPVhTfAdqoRw9hLQu7we",
  "key19": "HF1GQmf8f5WgRk78frXtWihUo5rSyAb8DSCvpYWPsDGSCBPXdYvpYyEbzxfSMEGGFqWRWwiANDFWbSSdMfVTREg",
  "key20": "5hK91y5PvS4gUhMKdSd9YwGFq9wLxU6j9mHjJFzt5RMViqFQF7Lf3EV4KDsjG4ZbZt5zv3tJ9UmqBcbWbrduPwQH",
  "key21": "4sMVsLfr2hmecqBbWcQfnSiAZBQDL4ZDbJkc3ww5CNLSm6f1g4ZdTKnF9zzseCwuDdJLXuTUnXkwCCgKTXkv22BF",
  "key22": "4D3QRTmTa5o1X5jgcUMBism4otQCaACjSDCvdKw2f6xL9qytqwDozMHnuqPwoPWkB5WRALvPWdrWTkfQjEE1hvN8",
  "key23": "51wBT4tKMahx9oqQMWmnm67EXLkWubWU1fsSa3eumiNg2tsS5mXHCWzhJsJG6eZP9dzjxH6uB39m9iWSarCGxFtX",
  "key24": "5bCpM2ViMebz7BG3bdEaeQCCdkM3e5pX7HHe1prPaFqB3dq5nRBYGzAR1jNNteA8ucyw3ZCeKtiRxEmE1SNNDNc2",
  "key25": "5dNTnoP4f9V5mEPrYg9dj44yFm4kSeuEgfDoDDLH3zudw4SsE9th5guHxWXkwziRTYYn39mhNDjM3VwVMVWHWso",
  "key26": "3dQw1rtdmyuwxZSjtHZJiojEm4c5HgoqjHmK9B2HMpP8eDmwsVuK3mLuHxoHU6uEiVgvHGgAJuhbDeVTpizeeo5G",
  "key27": "4o5Syp5W9ciT9ghuQByXBX938wnqubLi9CGd95QxkjRfjPoqVFBN7GRteuNg7K2gLahYYV9T2zsjsJXfRcKgGbB5",
  "key28": "3bmS135mwdWB2HpwFyTVA6WsNfkEy9wToR3gEv2h9ZsKjufpaihGrXoi2tq5h7JnSAwx7U7CXZJSNZLQNgwkERaQ",
  "key29": "pKrfqza5otnCE6cUYHjjgqvtXGFcAAmyTHr7aXfwjgtsEKxGSx8157x3CJfNfANjj8t7bi3XXoB4XtCeH9g5qRt",
  "key30": "4QF5bvXTvdWUbkySeCdKaaye59QpHzEZjqje7m3ihu1Vu7uyUVXL3sSEgsTkLLiabynL6yoTyYnTYdpGtxhk51T1",
  "key31": "2H7oSrKbUZMSNFRePZyvm7Byr2eHhks3qBtg6MBzuvDyvfJ5yuPsepGqSJjJgUE9U2cJR4QoXg5QExTZpNWFYtwt",
  "key32": "348qaqeD9L98n6dWycuAi8JSPSQV7cchLjzScis7e96iTYahksumCJ9vQcNis1pcradifPmTKeJqsceNqgb2HAqA"
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
