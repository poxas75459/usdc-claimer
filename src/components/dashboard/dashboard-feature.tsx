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
    "4c2CcoBoLWC7hymDR8htcPa4tvpCzk9bradxUNeDYAqji39gC1jYAD5AjE9DJu4PpFMv5Gyb6z5MS57P3xBiNP9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RPLcSFCmLK26QkT9EQ3NydCSevokRsFxwQnXFef2L8bw2RzsRQZAXR2yTKeB9pYJ1ZLjFVkQPSaU181RjrFXpxs",
  "key1": "2ZRR5C9xCGAqcKfAGg1V2yvVvodS8e4qKA133FtWY5N2Ha5gDeTTDCSxChAZ5ZYQLruEu6xrZgjTwMEtnbFt6P2W",
  "key2": "3zCgrdiuW4m3dfAz5E1dM5zkBXhruoymhfL8zwmpbrntCyLvGWk9soeNSVWryJUx84XqoGbchJCQUtAc3T7sQAQk",
  "key3": "R5yXpSyxm4LTE7yrFq9ca2EuDodMkAbRK63HRTk5ffuR3thWS8tnQbpgUAtZfKL8evaQ7VtP1ov3Phv6BZdLVVM",
  "key4": "65cAioZ4J4eEGoB6fdk58kKzzAzC6ePHUZebgjmks12Z3R92QMNDnQ5UM3SaVdhNKSP1hTmTz63qynoPuZMPZA4y",
  "key5": "4xswHJNJDor5Nc9Fzw6eWVhFWim9BSeknD6Yxq5pyg5FTnnXhQnHsidKvBhMg6ZTtGbbHFTZKPCEFf1FLehK2j84",
  "key6": "HL7W7njwq66c6dYTwu5A4RNbTaGdv2RBM61NDJihfY2d2vcai14hJri1f9J8EHR48vQb8XDqAvwTenmv9eqNVnB",
  "key7": "31FikBswEK4MxJvBK5UiGuRwMzGh7uRRmSLcUwwPEUdQCP86NjRQyBUuSHWy4eeFiSQQtfperfX2m7pxMP1tuCN9",
  "key8": "48f39TZzikZpiEfyYe12FThaJLNRPVnQgL5bkFiYnED4QsjFksczhThZnC8ShkSPe9G4yCeQiSqBLQqedd58ztbs",
  "key9": "4MirzeM9n5FCqjDjh9DpRrbbR6g9uFjMR6j4eYEM1AvXCk2ZWSqskKzhqKQi72ruwAW7dNCkPoG5v2Ym43kF9LPf",
  "key10": "4m6gt5ENDT4vV6HPLAbiKL8uZEba4bXTNea3uuYjwbHCm3ZN5YnaBVUfXEmPCkaLcWP2WF6Mbnwusnm55hGmmed7",
  "key11": "yUEVa4z1vtX4ZpWuXaHrnWh85nG1aS5bA3z3oGqFSoQtCzcSCMq7AGSBnrpDScjZ3Pk3XWomY8mzDc3CSrmwaBB",
  "key12": "UpE5i6asZNiNEVvokifJGVzXghFotLnUEHGxdcPWRHp4sd62xy1DzvvSYpqXAXk2LRmWBZdEtmW7YfgpipxqQet",
  "key13": "36M1Cwx5WNu8BZdDFuWCq5JxfTRod9YotfR1i46sLLnakhiZePTmRYcoeaLCs7zZvcYATv6Qvqgy2BwVy2i7w16j",
  "key14": "5vgnCfaz69QNtFKbBwmmbCewWv2u2z14n5mEfwzKFVpEr9e1eG3L81BFv8kqqd8LgFiHXeV6oLUbotKJ9uk4RPPx",
  "key15": "4ugYVyGjWNSoscvpTY5RzZ7xY5ym2RXSQYDyP2oEmuZKrqsbbtPnSyFitNmob27TaP3o6WvERetmji8V7hjoJDNq",
  "key16": "3Y1NR5JbxtZfwxHs6JVXfYTwAobW3VnuZrRHe2A3dXMGt4n1XouguqitHetDboCEGCNBtdp8JJVC31zrYk1KLu6N",
  "key17": "63hVv5xbJEwxvsXD61hPVwF7xDXiiqGxpyEcaHJfRmJqjbCZZy6MbAzxDEdeDBwHQ9uVSqHyTawvqNiJPYnNNL3N",
  "key18": "5MDcrQgJmp2YGGx4CqvVRdbPrn3iYWtSkBj6Y7rbxqFD3vM1ErfcUJJz3L8iYFp7ypU3eYeSn7QBpDBGvGR5FKqr",
  "key19": "4raKeNFSykKyT8rWztGe3VYrexr39YpvWcrWbQMJBwJZM9f8YP2LNMvHKdoqBL87m1RKNfG2oM2yK7V2TD7sL5Fy",
  "key20": "2dTCjnxgBPuRhytTTCZgVDYXpg9cXC5qHvinmsMzJqNz3QkrVibK65xhLQauQHvJ77w8JrAQdGtTCUsPyYKzFKEF",
  "key21": "5EoEDuCNR2pRnKgnsD7L3EgeAW2ER6D3ywa8hhJvV2Cr9JnThEYPNphTphEhdk6RB5eiht2uC6x74ueUvuoxuYfL",
  "key22": "4QyEQPFkVV8rakBugiGLX5ztW4d9T3J3BKjcgUXf9g5sKDFHvFYWW6xySpaNzA4d3Nw1ruLR7haC7YYMXDjGE4oE",
  "key23": "5gZv4j4YCyWzPDEzPWuPWKuGLuDKqiNssDt1KX8CDSvSr4Lx7tzVrLdeYH3A3MVXNuD59sp3mmBxzeEAUMuzQ9U2",
  "key24": "4rvXpRzKh31KkHBmvJAuW5L6asRWKzZuHcT9BcHADrWxdAeCXs2Gk182wyZqr4CrCAQdhGBW2rU3nb1wf6ZdQorU",
  "key25": "3jH12KB6i3WYLvXxXP6w4FhgcSr1Wau1Z7Aztv1issBgBtx9vq9DPUTEihmMSwJQakagXKz8W1ngiwnh3wFJfZH9",
  "key26": "4dhvGsao5vH4beWoRsCDHe3S3yXJ54mckHHMGUnGPYYoAa1LiAetRD38bNmzr3jxC1JtmoudjnJSaxJGM31az5hK",
  "key27": "5i3e2BsnAUcAAHZT41u2ELeL2dYH336eGaavjTBi3K6ZB7kZyC7iKQhjX5G8buU3cTiNrA6VYAVs1ZSUmGbkL4C7",
  "key28": "3cPZrFpG7CUe3A1YmVH75JxnixagQkV1K9S15h9x9UtsUBoM6CybpSUSnaQySQUhu1FeTM4NTGHtCTLPXnpqymEs",
  "key29": "51p2LfToHZv3kpPHMRDMwjaNV645u6LhmagBcMCUxtCr1wvAT1H9MV9kfqNSLFa47UiJknMDQS3eQVfKTbXLWhg3",
  "key30": "53Jm5ZwfoscQAKptA4ZQZkrv5SwSRVELetyHVrq1d63aXeE3ejd9GzUkqNjnk2LSFBcGFn5kvcAZenGhtaWeeTRi",
  "key31": "2ZMFziXjoh7CT5e6JaB8hLLocotjR3Kc1sUHELwdKaXwDjMnb3WBsnd15Ubd7vGTkMFqkXFwkWxni4wYYUYRfDsy",
  "key32": "483vP6XAy8ZWmx45EboJgsS22vRZJq4g5g3DqTo9YUpKpJ9d92U1mojqmKVT84kfwhkZoECNtrncoTj1Si7etrNk",
  "key33": "wmT2aw6S4q5naqqLknHCSguA9xgpfMhMF8jCjvus8Kc5cNth6uP2y8NL2wxgRiQXnSo33v8hQ3cjLKuAUW1L3PU",
  "key34": "bEe8f1skyNoYDUZNeKDfMMerkCypaYe3xb8RG16cJRPNX4tDzXNFUXfirt84Yn32qBErWGMDGN8fzUSjfcPagmN",
  "key35": "5jsxZSTMCcBXnRJyNRLnKkjtSWwL28VRr98gXy6mJ8Uzzsav7vjW4DfVerfLMWirshzQkzFQyCxzNRsbBMDD2zrQ"
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
