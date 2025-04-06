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
    "2rN3nirCzxHaxoQM6RJpS8Nrjh7K4jE5KRK5PK8tdGn22VB7R4JZysDwR8g73s8ikiSbmNdTnCGYdjTe43eM9fcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HJbR7t4ruU9dqGo8YhvSfggzMASBz6DDcCdFH9fA5ToLKEbmnvheEEwhvCZP5MnoMjANa7DW6AstndKi8XPBbC6",
  "key1": "5Hq2AaKi6FqjqqhPi41y5vxxH2NXfHE4JfSforXUBnTsN2NGoLBFNbTUt52vf3bKeC77g1XoCRAPnm8xp9ZLPJc2",
  "key2": "48dPGfSnG7grC2VSHhaHLM5B1koT1kQrGrfs16xkP5q4t5Ezq1YHwiMC61McagHjmzz5UfTn6dgswaJCfACavZkA",
  "key3": "26AW8X8sS1Kwam8Tw2bYRCytVE6tiX8wKxYDpLpM5tjBEWVnY5yFbHCNDGKbfZ7wWhn27SwthA6QLPGFZ3rm7Ys8",
  "key4": "5UTGWMDjL5N3bvqnop7zciTbCHiEKFVtS28rr1JBiFtr8cGzNyCkAGKpe9xNChqp4cveJPZL3Q44hZPRX3z1p2uX",
  "key5": "4gpFoSD5pxFdUN7J29vo79m3FFYVUSaMD6dVj3zTdRZzAy26VLC5qmXFCCmhp6cQK3ggT5jyFiQfgwGoEQCSSEs6",
  "key6": "5uXLaP9DCdkp8tdyCzcfCTX7625n6vFr3tBj2g8rwtdHGDhB72ZUFQx9mmXs6tjM49iU39RLNW6rCjpHw9icVRhK",
  "key7": "5bDpwA4js8nG5Z5Zicw2cFoSkzzXEPqgWrxMsSq1LxQh5iNBntAQnfTKYym9U8bXWw6P1aHfzew7ADSGBFKFtcva",
  "key8": "8FEJJ2AvXyjNGGcFip2L27CAr1YvbQojPWEs28xokQCbn9pzg9788nKdvx2vMTzFd9ESEg3JALhfy39EQcQncfk",
  "key9": "3s9BWsEQ3hZGMEJe76NkgYfY6XNX9wAb8jaEryp6rSk7oV7GCGUANcSExWhBNJKmdGDby3g1PRLj5RrwYdTWnG7y",
  "key10": "F68vnk2SG53ZBQTwMn3EWnVvM3EikyatprqVpiKfNH1KzLmvDvAXzwjEUWevCPudsaFGLgVg3rMVpu2pqFjCMTq",
  "key11": "3c11gvLDHTy5wWEzCEijDTrSPjRfGBqfAmJQmL7PcSt9YQDTnDEYoUus8HoqoAiw1Xgz7z5iynTgdsoE9eJ5Aekc",
  "key12": "3YdfTL9Y8WvKtL4DTLV5M6u17BJXX8MQxJZFoerwFjHLi5XP9bQaXEZn6VjHAANYKh9ewCNip8F4EEth1YaAUxDd",
  "key13": "3y3arVg1ein2eSb6MJG6FTSHdMkbp65uV1GkHyaFDRBCrd5qpn5DM9k1HLPHp8CKLAKtG7HFqSYEEgJcosGWbauH",
  "key14": "pJEPaSFD3rkUG9ijy3DuiurBvN8BcSB47Hhpxkb1wg953VFDAQohbDwMRtHkottCJnJLDXVMz5JtnQ1dqWRNWgY",
  "key15": "4vw655BF6xE7EwFFiKv6apAweYXxLQ9SDPb8EVXnUqXZtUVUCKWy5RdwDwsvtCYaJD1JnG29dk9GjqyHQfbNpiEN",
  "key16": "4dtwisjXGayetKLSxV6kCb7uUjR6Jw1g4iqpZaHqQmoJTCf96KTZ6u7J1HqBGgC7sREvEfZJP3zch7eytUJS1SpQ",
  "key17": "2LmjG4TirwZkyoVtdqDHjB9sR92712ordCezcwTcBvHbHvZTKRj3NPds2sNnSeavKXuHgLmT78MhKDnwHdT9VtcU",
  "key18": "zLsP1FKfwcrnFPAv4jRH5aH1jYqAGfRQZuQ6JQLC3Zvus23QgpzY61RF7oRNBa99S5ZzZiAYPPPRqFm1ToiavfX",
  "key19": "2J7USoNpQZPWNk6ddeyL39B2wxfVdrQEhCXyTWdBb5PEnunsN6LtxWHr3HZ7ypRir9rei1JBfGHxku2tHs4YMRna",
  "key20": "4HWvacMMXeM25Pw1dvadaeT3Yp1DGgAuVuhFytnuYkKxVzZEYB4TakCivPwhTZNt8PvSkdhPdoaVHeo3hBn7j397",
  "key21": "461CXLJKqqJUcmknfDxVeiMqNNeH3PiYVyDs7rETGYqaQS1cdGXNc7bcw4kHSp6Zbczjshta6mW99Nf8WMyPmzFY",
  "key22": "81zqX2KJvcmQBbRTrP6bFmGYPWfdCdiTQbQ44LeHe1aSHgRrYzYeCp8ZySq92w2cvWbnDt5FKC8RCr3VLfhA8oL",
  "key23": "3FwfodiZ4cgcJDk3E4jgc93z1y214WNkH2ehjbdSLPbDd5EpfxeThoZ3bVgddfArDdXDamcTh5DSWghPfqrUpyB4",
  "key24": "3zXdJPSqnxeHf7U1vqKgDTmws3ysv9kScKGvGQ7n6FNA6LaS8cDb1TBQZXQFsz2uWVGAiTXcFUMYscWBeD5WWh7t",
  "key25": "3UXyVWMyzosinB7CT78PPqPUYR4kUbF193kecbixMqiNCD93rhHLGaS72Kj5nKwK97oGDuo5dgxmSHitRmHsznja",
  "key26": "2nQYM82apkumUDJhKJts98WaYJJhhf3VMWLoiosyVDpmT3r3boQ4mQm6wm7KRh5bzUAmGBLUdoSamqBuqZPZzYKg",
  "key27": "zryZBDeSBL7ff6nvKMxmnwdV2qTPU9rqhLVhb9fxQE4wZ3hWsJiyVGPcqWEtJ1kPEnctBxzDwSzaDWq9vHmuPcc",
  "key28": "2cjY3vygjJxU3tWg7B2EDjFZaXRwUCNigDnUSkk8R6Bm27VX4A6642GpEfqLLeQvYtZFFFkRPnBdhD6JtpZyX3xF",
  "key29": "39VVUrKyFtcQhFrP7xdVeE1YrFTAYo3R27W1ymFAhWjWHmVmAPxQAUDvAneUT6keYfgR5HBLRuSJMdkAS6LSawDb",
  "key30": "5z7nw2fDETxXSi1WYFd1zGpzZpXGwNdXWTfkJCyUVSNSU8eMKCZGUM64Rir1noBo5Ju9Cqt8JVySpXUo9MmN6TcD",
  "key31": "4iCUp7byVVN4kTmSNq9emUzPsMZTYX76iGPHpFmL5D9pFWwGwa39nBSQvq3ECaTL4mfZJ3Z9j2aFt6SJiEu65cWg",
  "key32": "65MLH7TQtoHGaREeRBmpGJjYtdti3fCQcns2RmMiqQDnUvjJtQF2gqUb79MhWivQZtty9xLLxBpL94RiEcsrDBtv",
  "key33": "58PtmMBod3Bi5BYLYBMR2oxryx3ZrFjq4A1WRzY1SGqftUMfpexdZSQ1bzAkn5XruzamuVYMkUgYm7gBSkkFg7Nq",
  "key34": "5Uvh44BPf9xnu5B6Ekcs8p5STCjtiQi5UpMathLYfuSmsQyWWrSnAq9kV1Szh6n2Zssjid3ZYd35pBoyQWrMkA5q",
  "key35": "Uiot8Eq4EovKDZLs73pBqsxXYRx6WYGCxfE9zMQuVgfHh5Cwz4ZETwWhfBXWP1eagAuEgwLNu3PbxgHvvisoTDo",
  "key36": "5PkuFs3BSJRCzELvA8i7EYiUbV5ePQ8UApyqTDhYZUB1dF8dnL6NvWWq4uhYTPvczanE7kfzQ6WDxNRB3EU9X4Y7",
  "key37": "3bcA5pzrWwW9TUwmLMWTHLH2eS4roXbtmiQmUSEizYU38mUSte1LLs3HvePn7L3aEs11uiLBXuq2m2fwtbuomsqr"
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
