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
    "qFZBfaH5zRiGnM7wRfbE2ivtG9yZU83F4cfg6BC24UVKMn4e1h1WXtQ7nNXRH2UxuTdaUDZ77GFpjXViSKR2o8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59xmSFJTGV7iLFvW5X8kz4PCTXrdB9k4oHkD2tmPQiP4d85gAWN7AuoE1fb6KCgBQqWvUrFyxTfjPNWhY9w2sBJy",
  "key1": "2LFkRAeqrDKSNnjrhh7wqvu9tiCPEdECCmqqUYHg613r461mTvAcbnM1wwW7T3pSz1RqeRhJYA9Gw83zSLySdSH1",
  "key2": "4pVGDJLdcCDoz1Z5THn1QH89RRTqDACTEzb8WekF947NdqoeiraRW5U5Stmdh9LqZByRPXk3vm4Nj3TZp4adKuqW",
  "key3": "3MB219hAHM4ML2RziTmxvzzh8gDjP5vSJsonqpuR2gAk2p2p1GZKzsSfcBoRPxdH1kqu3DoLH52mu815WZPfvdXW",
  "key4": "4ZQxAJmoQyJoMoACi76YuQun86pmRqXDGxF6rErAMxsbJHzUGwqNspn4XaTxuiJ4NJQNeN33i49VkXUu3yCmnf1G",
  "key5": "g4YukZGr2CvGhdWjVZ3itKYX5GhKsTurwPg2moQSYEiaYHRx2RAEsAmPhfcFy9Y67xYruw25efDaCVJzWrHYNfV",
  "key6": "3vv61ERgEcKwnkpkUTqjQWjhHQEL1AV9d3t3YBsgGKmZix5moKZ4rg8dN36ZFVtAuzbSFpCyudqSFSJLRe9Txm3F",
  "key7": "eczXCkGz11RrPnfuegbW7UqHy5jwKEmvKHRQTU5QnDDeyLVEF2Ty5rcEHg1mbys97U1z38TrT8Sbt7zo64x7ZKH",
  "key8": "3JbsSM6tDSQb9Q4xYcYqRjc1CPw4WFWF4ANS6gtBwRkW71bx8P1mhVZJ4jQrY9aSohLDPWnu38cUNQL1aWZw8QT8",
  "key9": "4zg5GBkMsgxG1955BqjfFefizngSfu6YZ6PnRHBuDaTSqTWwBYDUWT3k7iLhLbo864NDzQnXqmE6pS3JEhjtjjCk",
  "key10": "ve9b4T83LrVs4GV58KNtTR7bfyQUa5UuahadHq8t4zgneCEkC5uPFiWdAdnNUQHiibu27ZQxRmQxXHT1w65ySS7",
  "key11": "eXAAgYevhJokdkB8m3SRjm5VyVzBtK1fmXMHh6VAyxHvMhRSfXHMs9RnoA3dFh2V7ieuPPS6bcY3mhPqJnLrBE8",
  "key12": "4D4fbJSsHzYv1RpfrTtYJnu1eSGbG7e7mY2LEJB6Z2avX4XnMUL88SeZtpZKNKgNarwkGG9eXyxZyW8Mi2rRpFYH",
  "key13": "Qcnm58b4h7phuLJtTSrpy64VLPAaCtAij5csFTtTYeyrHdGsCNpiGyppxcpEVanmY2ECEyVUzjAMRg3wUwfN8HQ",
  "key14": "mekv7tKnociyoe8d5pZApchK7UXPtu8ggZcA7yitKhtPsa55U6KX6ZVg8P3egkBWaNCGM1hv5TrQiHmVPdyoWbc",
  "key15": "CR68E6k3UL4ZfmfjuYoKG14NYaxa1n2AVhhZgJm3mu11m4DXDJgjvfZtNJcYMBgrfdoaEnbvubLRY3oHjDTaao2",
  "key16": "57iYsPaDLWUTkpUg4Zii9DRS71nSDW3Wbs2fvYJ3Wn6pzTqyZ9vT31hy1eB33hSZAUZp4SW8GWXpz3dW1cqV3sGQ",
  "key17": "2Vn9R2pLbUejjPAx9Tr43nEcKpjTxt3YDesodHG6faMUdGwrZ9WbEDePMPDgLhz21oGYbPqkPMRUPpghEETGzDA5",
  "key18": "4dE6Ec4r9z8hzRR8VoWgamNn2snUx9eMVWMF8MPa8a1tEoQTHBBfRaGrYV1vRtzqJgU9iTitsfo2hiW91y7SsK5a",
  "key19": "2iB9AmKgbqqwoBELU42qdvXrxreQNYnagfRvwAHeP6BUcWk73jRGra6UwJpVGwvg18E9BeRspe81T6e3yQXmDrXh",
  "key20": "3vztaf7kxCCiTj3T5Cnx9p7JxAHzJ8SL1QmHeGEx4eQfA9e2spQBz9CNkPcMHnenSnjkuPGgbAf7qfCVWLNTHYqw",
  "key21": "2JXVvvSH3Abfs3Q8MVtPd9De3QgcdRk5CJoqJUjxzhtHHSftBdjiqbTgM89pHSwF6hBp9qZ5prVJnTMtC5U5STfG",
  "key22": "43tnrpGctbooFC71FALEpV36GKg1SohoMiDy7EQcNzT1BxUYq8niZUDQVH6ShmqtGNonVh28tQcekznYCk34SNnH",
  "key23": "3tXU56AQoeMV45kxt2qRkBDfS3cg7JJpUGJ995HrnycsMUg6vCLMtMYD1sUY7J6HR4TRJZT7jfPwWwcWm6K6gbRL",
  "key24": "5fiAaFayC2WvZQ1HgXRkdzLhDRzhKVPhQn8WSdDfdLZgjN8F4nZsAqaioGsF5WiG2Xje9vJAVsfmboP8eP4p1f3z",
  "key25": "3f4JvjJeVUzFme5GC4Kg2VsNLbB9Z1RVE1zoFH5kHoBJTnMFvoEtLceunfEM2CB4sMt4aAwECE2JkDFNatU2Ajko",
  "key26": "2zJ29aAu5VTftxr9gKvgh8MVnyS77eRbXrFeBwyUKyWmJSJLYhcHtQLdS6yERVXDc8F5RaSVC2E6WnQVPpXpwy79",
  "key27": "5AzAEaKKrtrzxTPi2rR3VG3Kbr1wfJYWtuBNQkKbmzSn6P8U8XRAHKy7CMffY7F7HfpnbdSRHP1md9bRBrM6EFAq",
  "key28": "4GPdEzxdvtK4jQeJNdUYxCDQbyVYHTr5aLULXu9s3wCL7eM6CPDSqvfhPzBwypBhUevga5sQC6bw6zFdeEuDHVFM",
  "key29": "4Qexs1ZFb67ZSEZCpy3DgnGySXDEWqjQBeP7uDVWHnfHq3S29PBGKbkmgP75d8L5waVc6hHc7gpZhJn3eVhS3mvR",
  "key30": "3aYqANxqnekRBnmfHp4YotfhzZBmUFj1dJr3MWqWrtBXSH1ahw8FkBWUm4NePqCEw6ZDiW6Cu6vDgfgmt9q55W4X",
  "key31": "3sE43dQMMUjr4Sj8eDRjc7XfM1DARWafHh1ZA5c2XDn6n7EiBWMk3MyAJcddSKPJtGRqJFAB9zaCpn5ieXoifnoM",
  "key32": "2wHqgQBuCE1oYyrCbK3RttyTaEx7t7E4LPuLLqAnipYFjZM1t1GAJNj5PtFJ53mYnA4vxxDd6Pkar7Gun5TZR4QJ"
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
