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
    "59jd5JexLjJVJRcQNQGm3oqQDbicRdy5L5x7nnKGz9Egga48cG2AgPNUYQfHZJReqv4mvvBmw9LcnBt2SREiPgD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZEeHK8HCx5xo9nintLB8k7kDgNq7FouuG61bxeen1rNutFgxC2gB8btHRrgaLY4dWe6Z9cQbLJciqrYv7NbbW1a",
  "key1": "39gJkRC8ZvF1hH1g9qAukiUEWiExtr6gX4Uzd5owe8rBf9R9sLUEri6wkP3WgkH9Q6XRUyfU9SjzzS7dhjWqcseh",
  "key2": "4pbUm7md9qV8qfRLTD2uAWCEk9RB8Sz9v5fn6SBeJ2mo59bDsCxST2T6ensw1J2bYSgzFjwC4Fp4cy4SSFx8BdkB",
  "key3": "wpTH8C8ycFo5HGSgn8wx1VvyiciXZ6qijyVmdhf1qct6dfyudN5TzcE2i57yxGjmuKm9rrCTThFjzt97FaUw5ps",
  "key4": "4JRRny9t7GqtsNsMhVZwTgi3ssfpB8QJWsHeWGDPAdjqU1zq784bceo4qVG7HjzGivabb1G8GN5RsA5BETBDEcfS",
  "key5": "4fopj1VqCBAiL5wbSdQeGVnG2Z5zjrtTcwQcaaHqCDd1MhLjQEHEA6sch5MKj4mi9yGZ7p8NQxgFHfwBL9kEUYS4",
  "key6": "5ZECzTYzKp8ovf8fC3rs4czLo7SXLeZRWsSLJx4yGvSw8kHyjA4R1zJdvcdTCTouf5v2AuqNuWzF3huE65Exfd9p",
  "key7": "49Ls8Cip7xikfT8Ux5DT3w2UBRQ8sR36HeEbgevA2s2ymqpW3qRsaNCoGfMVY5Ns5dp837GYLCH3hKu7RqRFS1M4",
  "key8": "642poZYHX87t3a7HXarqnJcGYsPiHjNidv6MS2oaWBudHi2oJswnuD6eBdha2eX911frCUnM87oM9nZfHNuhLcd",
  "key9": "35uphxKqKyUbVQEPyhPXCX8AkHb9xfw1vpcpvo69y7c15G7SEXgeg3MBtR5Vm9CwTAsbDobFaaYEWRP7yPkWbAKq",
  "key10": "2gPCpk5PJjqopXxeJrywamwYDof6QbPgbdRG31q5ZcQqQWvTeEx7w3QCja5bG49EH6sDGUxDhT1iRgX3FBVa6Jzn",
  "key11": "5KBNoCxBQ2w4du1y4HqeJdUZAmq5GTBuG3tQHfqdUUQt1mrnEcBC814HGk4ava6uzm18u78Ww8CZrM8gqr4XXH6p",
  "key12": "22obwV36SyrceTCYr6gTF4YxNzUkQLPc7aNjC2LZLd9BURv4g9k51EtVkSvKeS1FWawy4x5yvEo6QUmm8gjnBmFV",
  "key13": "3cWe5xFFvvyk68VwPn1C5SZWQMbGMSSs72ZfHzGSTFUNREKPJio6pU6Thw8Bw2mvxHzLfiB1r8wTRNan4M9vNa28",
  "key14": "56mQgm8YdGEMJCdBZKKrtfg8eyeZfDW2E5g7akEpkRtK6DGYA2hvWpk6uoLGu2DYHBek1XPFF68W8KjN2vYnYERT",
  "key15": "4T25KDzqB4MCdtBmiZYtHe3CUNoTwgzeMMMfamc2ef96QNaCqKcUoQoBQNS3ZjrbVwbZm16baMN1eBn9u3TV7KL5",
  "key16": "64nR1zKGq2gAGiumcFwzETMPsz9HAKH4LvdA6g649bd8bP7vw79nGerLaRpdYwswLa3ePZGmhZMgESh4rG2Rk8qH",
  "key17": "5LGrrKsnkysDLCiUduKGA26GVman9diz7acDxkzkWP5MBnRZzDqLNL2QHAjp7yvf4NQZTkV5fsQZDRekoM7azZdJ",
  "key18": "2CVF7392TQJJDGn8JgUS8vN7yZ1PJLGgrs3XwoVJxUM2Cr22GbApnntHQbhQ4FZBFV8mmSKcGdGnEVePMjk4gkey",
  "key19": "2A8tRLUrbu5TwwncxbHyxnVEW6aGNZZmeat9V2fAoLHnF2PXVQqj9VHDY4bxXGh7pEtpAXG6PyXzihQvZP7Vt8hq",
  "key20": "46e4q3WQQoU2imYiqGeXWDTyjjfGQ9gHp3VBfHT4m5X59eJoE3hwsrTr1xEuS22k2F2Xcyop75Yk4EjFtvictJ63",
  "key21": "2oNV3U39ucNYU84WwPMTk1cTiMHPqxhETHnaD2p59hkfZnMFt1Bx7swZHf4KdhzDQfkMawhKvnZG33sr4KE48kZN",
  "key22": "4B7P53igGo7pXfZmQqgRNYCHZ42C5mycebBHjBakaroZ5DKY71ymJYi4TkAWvFBHGEJX9uwRbbhgAsRLXLnEKf2M",
  "key23": "4itZ1JVXhvS1CEmbTR2Ncg77MqkepVsq6ArMpxpVKMcLxDHR6PLcRTqgo3WNuTFLfRwsomJ6Gss9AuSPi2rWE3es",
  "key24": "3hz35RS9Sqv4gbQSzxot8ydn2cwFGkDCVQ41bDe4cghSZ3p9GLiCuFnrMCsdoENcRdFYkojAe5eJvNgP2nNzDiyL",
  "key25": "KRYTicjzP7iozEnKAAeCEq3fBz9VHZ2sar37W8AuwUnTR54qMUFF7FqGxvw11LV5eeYikSD18fBgvmjxwkweTQH",
  "key26": "4j3TApxQLxtDpgnvEARvhH8cZN33KB2bVuMCw2AHuqumsHXBAuwMJGJYwQuNYcQoNR5TuwNUKUk7c523B8TPRYx8",
  "key27": "5rLmmgZdqLsaX8k3NfyN5PJ6yQD1YEehMMUKjp5MDpKMH6gFtN1n3C8ispEGPeLNHUPQDE4zwFkLVSRpd3LFSiep",
  "key28": "3QZeBBTGcpJsTeyAmaUbyCqhXUTAQ1ASCKBqxHhzqGbwrV4Ct5eZxrShu4GxGYMb1i4Jyez3fzHKJVxbCiUuYsLo",
  "key29": "4idyhA3TEpftRjGuaDJmuCeQuamNHfDwdsCcMS346f6gkkbsvYHgLtmusDMgBZY4HAGjQWwoSs7LknE3VJxug8G",
  "key30": "2UoAVQEiUCF1JNzyVaFT5hBKPD5agapoGJGaUhHzr1XEAzKtnKNR2nTNQjkFfeW9hMBiruZWxszjyxuwkNQ7P17F",
  "key31": "NzTS2sSZ4roPZ2v3VVKAs2Zs1W9732zTAgXrrpE8khYsTzinH47tMWmN6Gtppr4ERhPTMXsWP2UnZEJahEtmvUY",
  "key32": "3TqLApe8hxNNXAypqe2to3UYP5CcgfUGdo9pRaraiMKYaDsXt3hWCAYSSFSXtcQuQGaGHgfbtdN6nKkZ5wktvaQZ",
  "key33": "3TFDJvu6hso7jkqdHdg6Y2ReEcPuAmaP6Mc16sFr2Nc2PEkhmr5Xz52TAGb17LATmerKGT2srj7voRnUgAF3j9CQ",
  "key34": "5HUBBPxh3fvHMMuVZyHw7UeiJtjnCsY5DWcWiPqu7L1AwVv7Q2q5BPHkqJ1gh1JSuPnzcs5hGwQJ7TFCWKwCS5c3",
  "key35": "3qEBrKAUgqyPV9BDo21XD5pfmJUt6udW7ja3FhEMHnQ9XsH3MMJoxUj5zYz5QqHooNmwCTr1E3CQtKkvgN1MqFwW",
  "key36": "tkRJZJyKutDN3mb3zHhbpWTU3BnUD7YjLm7b2PHsBVDFjs3xbi2axcY8BPyWbQM2K9hqfx9D9eyQeNpeT4znkFb"
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
