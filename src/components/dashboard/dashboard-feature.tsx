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
    "65gmHLYNAz4pPZrNbCVuijtQZaJEmX7YLWU5U3kDgCbrvkCmdUq6EdRYk1JpimHjRs5Xt4iuDRQhX9xBsxunThhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yecZsdbeKvcs4u2q3g6s7BPQFz1B4NhV3JUZsA9hrYPDx6yhkFsTCzTjDt6mhKyQ75m4FLh3JVk9CVLqzmKT6jB",
  "key1": "8t17GeqsB4J5tLvSpQjHnpWCi8zhAddnMvxkCEbXsLje2odLhTpqXrxH9QFhNtHDbbX5ohhT7mHR2sk1NFyKTbT",
  "key2": "2MqxnZ97ouHQCgchfSdeunoP9fzg552etJNLikU17hdzEgfFRSKdPgWsVPpJzK8z67QQsfuMK6VYuKApdgVnbrbN",
  "key3": "beiYSLSf5b7E29oxVYpxVSL3pkVFrJUZ2KpXX9tuYqKdWFSEwnyV7XHzHn59ac46QzU7wtnH5hAwMWLWmbzYDyD",
  "key4": "NX1p2w61h7X4yzwUcUhUh7MhuYJbZAMz1tm7yX31mknC64Coac9ktJ4oTK8ZZQ8HZwRZ8RKD9nHXFWscSzHCpua",
  "key5": "5gcXkvD3Xmdx5mXVLffCU5bWXNkPGRL3zT7FbNcLVxFbrvgbaqht1PNYxcN2XpPxR1D1vWWwMLq2aBi8AHtBK4d7",
  "key6": "5o2mmWqFokai6kRa89Gv6QnbUKWRpjh6EsGn3wWK9m1GUzFCUwP1a4LFy1H4ULGavMWwq7HBndUKghLChcxAGub1",
  "key7": "2AGeTgaWtinPMYD685Ur8DiQa2cg4u2AsmGdu7pwmkXne21ZCNDgP3ogbsEd4zCBSYJS8vgqiPt2xKaTJfUeFL25",
  "key8": "4Gr9RegbqKYYMmhFFszpbT1TS1wY9QEm3Njuxav8QmH3PciGRThiv4WY6DUizg7e6J7zJtGC51BiGTRRaL7u24vs",
  "key9": "5L8Vs7yTna2GF6BYiV82kKeKKpgp247FnyiqWDb1XWKNUyXvCQ2hnGGobVvzQPShoovwUmGUfEQd9sWEoasBdgCi",
  "key10": "4f4e9gQGHwjVTHYAWaRqCVJdqg3Mkkeeo7xVEVe5eBBgXZsKWBvsxKEV8wzEJrSZSpamX9kkegYbz7w3Kdi1DDgp",
  "key11": "5SQfAezzKDYP9JvcA1q5cdHCQP7iySDC4wCPDHs271SaXgRFwv965hbsZDNWBBKea627nVF7mbJzhnhxqrUXuNFu",
  "key12": "63yNHxphTpanTnYWRhf2R6XUoXdiK2LHBkKsisSqBc7hruGHYy724YoK1E4KHyZifj3BTErrZ7N8Fkcdq23Wd9si",
  "key13": "31QYhUD5Cg3ivTeXndSDnj4nmQuAHhZVvGv44DnFhvwGi6JV5pb63TGp8EGLLeQXeGap77cxSvc4Vu49k6mrp9V1",
  "key14": "5QipGjcNBctNrvWQuBbJGBfjRDa56VNz9NvWPBpKyPyQzj3ZFDyC4AtEeEJVpQADb5KBeyhj8FmyeyBgcLekqLB4",
  "key15": "5BGxhxbuS8crkHpfRP6vqArGAyY6BdAVSfDXXCD5QJTUVdutqG13SZr3TrHi1avoBP2L9FbUiwGPSpbDvERuPc5e",
  "key16": "4pDtWpoxbSKrvN6idb4aNT33uTXGuUuvY9Ujve82bUuHmTeGYBw1QTRPPHDMUxgQfKUAHHv8kXyHeXcuHt9CWxxZ",
  "key17": "4L3qGLQ3jmah3vUEiTge9iGGb7GQvVX3iQgMhqajrtJp61HJB9mSwUsmykWF8XUe2yfjtvFUaKp2fcCApZyoNJym",
  "key18": "481vupGAxaQNr4e7oXfjSGSCBpAYv65BTp9a5M6zdfAAn5D9e4PKaE8ftzLhFMyvjk8k2ab2E3mpihZ8eodSyAwx",
  "key19": "5f2g4Ca5g66jFWb53sg5epqss6S2dgyL4asBzEc1Pje1FDgTN9R8Qczf6DRFhJpF1zLqw7wovkFiqT7PVXof3N79",
  "key20": "4gjNcYwGXNXdwrSMoYsisucakqzoWCxQLiQnBgQ1B5bQBfqMuXhv8QAruxmtZSd4QisGXbt94oZpsYo52NRFp2m",
  "key21": "3FbqMp88HsEU7mFEn6cwuw2vU7Unnmd6Tjx3ME2xHXGGC8bwEv3FJGFeb1u5Lh85JWDw8wqMRe71aaSp8hip7nGx",
  "key22": "4fcs8VHZ7dsFs2LEnqawTmJfhsLk3iZNLZDTn4QRCPfg2VzqLuqMvVTdi5cVbVLfMPDQu3qcFkgPuVmMQ2Yo8aZC",
  "key23": "27JGwm9PR3xFXYRvUzM4upv61h8CzXoc2c2pY9QrNPuTYAuw3Smj1m5md5V7LcBigHMvZpfqp6NEnhGvMUGc8P6S",
  "key24": "3WjfkEsnsiRwMGU75J5qxDZCSpDLRJzozvwmDrz3CSRBFR5EQjthwMNCXMkfSVLECZStRZQzzjTJj27sEm5fRyLu",
  "key25": "51ThR4vapkBy8CwfkuFXmVoRjDrqBzGkVnEDr78piub4dUE44LzsYDLC2DmBBHNpwNuwtr5svMxts52S9kJqjLm5",
  "key26": "54mbtS7afDi9bHUvH6ALJZtY3pEXsJa12GM4iged1RELPdmZe6RPTC43ffyxiDABmSViU32kznRMg5ANyGyn2KNz",
  "key27": "5rR4x9QE8mZEDrn2GDtdZRi8jsW8egpBDjPG6WQDhoUEZCgmReBoN5Xs3S8STCrftY6B9jQYGu3E7XADpaTVTxh3",
  "key28": "3b1Hjf1ZvZY5Yi45938DEEsc1ZkoNoZzziDhFhoCc9QmaJEjCfubRuGyc9cBmDerxJwhDHo68QffmF7Tt7pDQvy2",
  "key29": "2HzwN9dtcox2ioPSTKbC9YcJSkhrgEvVeVQta7fmkUFTLcUdQq7Et9AF8KzpDbVDjpEGKc6yC3g2wN3CaNW6u7Ea",
  "key30": "VdTnbxRNPfEBqqqnxa23p15uguoLqYqc4xD3YqWuBa7T1f3ReQokaGKjRmMnVrzBSL9XYkoXFfmKBa57vqETB1q",
  "key31": "wpTjp8BkQNYRK2K3jXp6GPm6NBa3h4tDWirZLsgUwt1fM8zXgFQdCvMYL7VCFS11L437H7XxegZqgKSJZ6MBb3s",
  "key32": "5aFRUFetJs8cF7WeCEMisA4dsm9SiDTkhbi3HcaUxrSmYREFWWVYa9xFrq41h1zok7JkSmZpU9dVdwte6HeZsHup",
  "key33": "2u8K8MdztJtowEwBBvoAPFJbXuova5ftcTYbJy7sxP2tqtvgTJWWki3huJnPybBc7dbVUKT1WzcbWP4AkeWkLRpz",
  "key34": "61SmStv3XhnDUMNE6M9DJsqQXM2h3NRpoCdNdyR7Mw8yE38RyGDL54esDeXdYowmMXK2mQMXWpEUNz5VXto8tEVY",
  "key35": "2bct7DoaRAc6CaPWUrznqbWfAsFqrqTCBfrd97e4qiJGJ48gKLNKZbaqMi893mY8nAaL5AQSPjFDj2svj14jDeRg",
  "key36": "5dTG3fKRbdfxb4rJvjWDQB94b9QrbQe9Pq6mkxBpri7K5KXomJecx1WKKRWW2mqdeGsZ1eu72k79SBvM8KbXRjoM",
  "key37": "2jptBAUx9ofQMbePwXqJchSvK6dPtcYZtctz9Z83hf3L16k99GhVp4LJ9gHWjS2LKhB7Tu5wqfQAnm2KVmmA8nu5",
  "key38": "mZGEbGa8tPnDrzYk4Y3bDsjRHXjNPLZb1QHmNPXTQXL2geSmnijNVCWrhAYLhLrybQhCs6bfkP2MYJz46E3hp14",
  "key39": "4kWPSGHBdjeX1tjz8M9AX6azkSCjnDKcwnbiFiweixWUuzWKoksZj3XJ1RAk5Ma2ZDsQdHVE1APjciV352RJMnhk",
  "key40": "2sBvhornfWkEiyYoxejjv6yAE9bgq9whgX5ezeHB3G5C9mhDtxErdSr9bnsCUMzhVG5k4A6WHL2zUC3CMSuu7ad7"
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
