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
    "4i9ZGgyaipaqBVrvGjEZcG9AhPQhTk8Y6vVf7TyM4XJXX7nPqzQbahgNFq7F2TwmrrZKfWtmZ5NPnuQzA5mGvSjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yEgEfZC4TbPvotHfRyzbSW3gS2ZXiCS6Nx2QYFXVu8nEtvgxexnW3G6FvJfGbyuYvsSuBa45Jm9NvXvRwQbEDNk",
  "key1": "SHoYeymmRL4wd4B1ggzSoF9VttarGmUrjFN1zopK6t3GVXoA68WUXc1ZqQBvJ4iavhpLKncp7xS6vPQdofWrxbc",
  "key2": "3DyK17pEKEFuh1b9JWbvbHFR5xkBzJ1D7igvk6yV9Mm3fdew4DPtfmfnswFGE3KEAyvctntSFTHYHMVkcBeBCTwc",
  "key3": "3X5Eo6ch3UHmbrxdrWVa31wT2uG9nExTWz7Fz6SoYH8LS3aZmVw94XLmbHYPued2nAPy9ZC6g6pqWjuzj1k9Bwby",
  "key4": "2FudZirvEzDoPaBUUUgoAmytZx5exbmMhfjJiXJnKjFR8kHdie82pcA5kCpn2kgHcg5sqbiQeYaa3K2D6EhLDfCm",
  "key5": "5VHJYwxksPJwQWEJ4QgBQEujGeT9UsNQR7xge8hsCQ83Z8jHwURUzjNELzXMybF7UYnrAaxHWwRD74GJcvMQrneF",
  "key6": "Qifn8GqBMN1miudWegcxBXU7xDJc5yFczB4ekasz8rYZFFGFQxtogY249ETKzNrcz21fZ4dGwtGEDUfAiS3ePxE",
  "key7": "4NMBe7pG9ZgmgFtEqjpZDy28cP2y1cxLaNPbZBhYY3T969jsBFibnfADD7gwU2JpzViuxikCAcaQPzGWpmcxM27X",
  "key8": "5TNokXw3tNYb3EtNZKJWDGnn1cwJMfKTzgFDXAGqiEcJUM4h6FofrvnZvoGpoM7YVT2ve6m5XD6kE7ZcZJjD4XST",
  "key9": "3hSZ6vcjKZ5HsBYLPthCz7GGz1t9C8Zw1u7CQaYnaU2ZCiB91PLYya8fFaXeAZiGkzbGPCiXeAnwWNTiNQu59aeb",
  "key10": "56dDtQUtKfEApyzYprgwzqE4CQegg7FfhpENTt8BtSxfM4gsizJjSUkob1ED85eA1jxM5Eu1Py9tq4C182FzhXko",
  "key11": "3e6XNYDjpuCjfnnY2Cr1nDcbQx3VpFLWZ6zLHZTrn1AWsaLS3eJdywubkN12VrpuGJattUeg1qXaB3Hpa5eP9fpg",
  "key12": "3rWAtsWsfhxMFtypq9bPMbXBTu85BNkLVHFzkyE4MwdRPmAf76mpCi2ZkPv7WgBMZ5vU21A47Acr7thof63ogVnF",
  "key13": "5Cj5HHQ3eJWjjhxXrwjbk9XFyjVbFQbjn3RXJHaz6e8SZ9LYc898YHVAbTK89BoezF7BpEQpwpUYNShYYwwBR36s",
  "key14": "4Kuho2i5K6PHFyxYCxX7WArpuPGwRBH5qumPYXtvGox9vZKPGw58LrrkNaD6FBMPyBn4DvFgBrBoXdctGBzpZ6oH",
  "key15": "4TKJmAHXRbknuSryNNGjk1vF9up9Rspku45VfRQgFgXVaqLDMWvM7Xia9BEcbka1gmFW111bqZAxoe3qNTeVi3M2",
  "key16": "2ycg7mSkhHRAMAK8n6yteNuaFJ1THjZWv1WKrHkqKZGsPwnFQhWb2TQfR6XwSoKRsVu8TtPUK7xxMRxrXTKU6tro",
  "key17": "HSsE7f8PdxZGGXvaDzRC3n7szmHErdr46wXQnAnW88eXwfgUGyxek5bnqs9dMfJofTQKevJqETAzLQt5MdqwV6n",
  "key18": "4VerzCraHFerFN5Sqp2LtDJ6jDWG7rCQJSyidVwHRh79C8ToGaHhRHioEq6kVkYTbdPRjMamBM2X66vARM38LScV",
  "key19": "2Zo5YoK2T7x1DfZX7CQNjrbVggP6AZYzVbU65ek7Ngu3uf4HWSf1SJUusnuXVCqg9M8vH77NAVfjggxn5VUrFiUy",
  "key20": "7ct43SVRRcBZ6Dm28dP9UvRrYYBtXg1o9HfNEg8V7EuY23kxAu4HiEHQHmT3ZvjvrVBKuHveya64NEMkagnhNWw",
  "key21": "4ZqjfKn7mgNFCHDBkDxGerpfYxywcG3kuqDpWzZzCopaGDEsamZ41shhS7BxD8QpfPkNJdfjMKtbgUZ8dm58KSZ1",
  "key22": "QNeQZw3cmFe7KCyP12kX9qPmhWp24fk9Dx4tkCSuWqCCFZeAWr2E9huVLePHemvRBDQ5ozeR34FUjc85N672c7q",
  "key23": "5g9Ur8tk59d7BMDgezMLYn58fbQ2RyNfcmBvFvd8G1gDossdbUyaY9kjnEbq9mf3wkmEqcUXW5fwp8Mjy2o3tvEh",
  "key24": "5qtctXyvS8XNvYc9cX8ok9RjfQ2HajKQhAbdFNw2MJKX4WPZaginEsQir9ku5MsioR1gWyPvn4p84CaqY7L3hPvX",
  "key25": "4eGc3vvmwtweRia45KGVU7ywEvD3MVtn7Q96a2WT6ty4PUjzfq4a1A48vyCPRRK2fPg1UteZKGBctgabjhmHxbEH",
  "key26": "uWf3cT52stZrWDCyuDQSYjo9Cni3EhQRTMaWdyiLyys16pMHkgW15tJFYg7nGUfVLDYszf4iA7k5Djara57NyD5",
  "key27": "2S4ikUpJC4eEho2DYKSsM3oqdFNV8hyuU5bPKgvFkZmQ7Xia28X42ZB9ZbkNWRwKDTuwdLBZPiS4C6HQ1byL5Wsm",
  "key28": "3zDiR6Fk2XfR3tnW81eNRdVd2K14D8ZZw8bokLEA673L5FKpuK3PxX4U2WQnpmgtHKdh5bsai2dmoBWXntoeSZC1",
  "key29": "5GyYiHw8TjNXaGT4CmtJXmHHq3CeAnE5zgaxX9ZDvh5XAcM9hhQe88MRS4HkJGLgx89nXLVaZm4DKetPiK1gsRqY",
  "key30": "46oegHhPUUKQmUZGnKuZpDA4TJHsQ1s13WGuFKP9CCeRF3vxeCSUbzc86UdSV1buj8KE8dHgU5vDKr7JMhDduDVg",
  "key31": "24xkgNymomSk3nS1FZByXpqpToq3FFmq9WVejAYo946JKPyyWGYriaLm8optk6RDncmfZ2FD3NT7BGYMo933sKhg",
  "key32": "5RzRTEpfkkD3AR2cp5W7JVPF9iLqYNgCFhJjZbhZ7QdB23QMYUTTxGp1tkN94673PW17uy3zYya9kRo9xW8d4KDo",
  "key33": "2rBCq8NhViqA6f69fAQw9MNC8swua3qffs11eTfR7dWUm6YbSj1NfRFsGvK4UfoCRcziwYR53rqXEQSWguZK4AFb",
  "key34": "3Qayw5qrcetbER2K9YAJg7GH7XE9HpCcEsDHCo6Zx3m6qCdJFWRFuDDu2S7yek5ehXJdpJgCKFEU4sK1A1TTLSaS",
  "key35": "2YNdm9jdF4yn4tzdod7bt4ATQTP9RajatbWj6NaRRcDgi6bVKRo4JP4T36b6AooH9EX56hhYw9qK5NKbp94mdRec",
  "key36": "5Sc8oRg8eqYoMpuW8m2YBCQngp99N42VNKBs8m1g9uW8GyGXiqh5r98ziEWB9Qwnx5UpP6J9iwmWZzZkmCA4LLWR",
  "key37": "2W4ArmBf1gf6ZuuxVAjHLBR4EDyBCcag6VSXUnw2xWqDffYvDsAHBWG3ZguBRFomQ6FyauxkRXD2awUNsixSChnc",
  "key38": "2Z2vSGXCjPM9CVUe7druPY2yruRPcXamgzsXWNRoe82U6pn9PzXcCDMEG7uTM2aPupMDzwDFrwVjTHJY7itiEPkE",
  "key39": "epzEGwBuNsc78wCzZjvuFVPPK1nsufTSgLsfiTFHqYq8TKnPZbp1Mg5x9eJwkCMPy3PphnSw8BNpSiZRfCUMiYB"
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
