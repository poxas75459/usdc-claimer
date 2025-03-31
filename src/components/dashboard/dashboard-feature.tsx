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
    "2jSY7Pk42MAPYMoy9N2VnaNe9VxZ8ypeBf3yxP4cK7PKtsmzXmuMozfhu3Ciu2BkdrNUiSJU2QvDoxxi7Bt1fpo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FAetNqueDR5ehGsMqeYy4yCTuBWUdXLTXgjzAXJtCQMB8j7Yb6vLS1XhaV7ow8qgfLi9L2xwpzEoc4ibEE2nQJX",
  "key1": "5ohNbA6D3sJGALfCLjQnnwLwwvb4y9insqwXMhDsXXA56TEAe9njLBSheMcotJFEjH9AeNXhMCdwLkEkqJgwULjX",
  "key2": "48McKYyWJp1X3xwB7DC9uTQHsZrJb2EFwFR9boihhXRjDDohChqjPuxJdePFw1b3aw2JHUMRnjYkBK3zr1NyVBmA",
  "key3": "sh8SSBak2Xb6wCmG435oggWR4qpETvPWMrQ1cNQoPX7MaBmsraqekcizGZTZAXBQhhcGX4KzcoiiKvuBtM8enkD",
  "key4": "2Zw1dMSxoURF3oDuBtQnMKNCSc2KxDxxhaJ9H6pV46fAeJhBkSmFgMt7QYfHhz1dSE71pHdAKZdjNEB6LLWtE1dA",
  "key5": "3Tw7K6cKhhwptDm7FbSxLBY6QGebmV8hZDfb1PuBTkPU5RoajuP26yBEFsYMzvh3CytSsUdqdnrj39S8rMyTZL9J",
  "key6": "3CHCoBmt7CQgT1nkt9EvQAsUQ1eyjE6HMouFSfRekCXfnNGdtCq8W8va4FcPokq7ah4M2ETifNAMNcXefCJejeMB",
  "key7": "344PtRJD9UGX1e4j74P2u79a6XQ7SqctG1h1hPdXKsgATQNdfCrKP63GCEw7Mx7LgeHC2Jerz7xLyxwox2hAVQuu",
  "key8": "2KSiZgSTdZeZEGoAyiSXiNqHgLWu8155ibsKV1qR1ZyBicsch3xPnT97acTX22hcedwEPfVAeWMFjM4mgLZVi5rx",
  "key9": "39TdVAJ5Lv75uucLELRKArV3NLd1yFokTVody9PWFJbMCTKgQFKifHdn3qDMXFKDKpHFzbP8tE3BLSshYbyBVhZS",
  "key10": "xyzEuRgZBZerhNPadPQdNGBqgbFQZFQq4b9QVpairMWnunJdTob1bfjkF3xQhKom2oEt5KaHTj54VcAN5NQCSgE",
  "key11": "2y47DrGs75CYmFYdRpxdxJiwQJx5yqt1Axv7C8iu7QwRGqxio1XCSt8kzgdQDFBq2CJ1UBhEd1UAtF9DvuzuXQU3",
  "key12": "3RVUP3yJQfvj2mGozd8hocfBbsAsX7tZrPm6XhDknCZbZ2oY42tYr2nL1mo9VowMkuuLzHKnz9H6R9QDVJ8SYxBT",
  "key13": "5ibAQLaxGf3MHjojdhdYC4WS7CgJM14SQXbg5g9jxar3xqKH9X7SJwuFqSidq9uRgL2XEpe1pVUtF4c8NGrYWyqx",
  "key14": "5vvTQ4qFvKa95RdcpzG6rE6SB5YyBgEWp9G9Z2yY3GZktSjjQ146iBkoggk2PjtFF3UiYUtUAwivrCN35NHCZHhn",
  "key15": "5zpzh2W3zCiB6ZwU5oHNrWTG1WDovjBYZFPWnfAa6JBpMscHgA77GWBjgtbQtjyWqo3hRkC3qWPNSWqhUyvezMk6",
  "key16": "2mz8GGWLpHrcyWFPiCbSuKHwYGV54DoCBaYvpkQoELcWTDCvm9vctgwNmpj2xZCzA2mpdzYchgz18DwwHA1zJfMt",
  "key17": "3rzUFKaYyUYuxC1hqaQ58uHL2tx1zgBczKUv8VQfMgTQge9ZW96xKPy9n9icq49bfifhsD7dKbGib155g5TzW1G",
  "key18": "3aMKUF52XACBvHd7huMjP2rGaC9zVHEYgTKyDcXp3xnZvWHfGAQvgSqoK7W311m7eY4X1GzJXfzAeGtKfyAtyjcF",
  "key19": "mQV2KbCx9CfzhHngrxK8Vy7pyzrwnEcc2w2KBUmVMGwTwCizQXG34eoc1UUhrhFAv19HAwS4LZVkogjgqACjiyd",
  "key20": "2om8i68ujmq7EMnyfZD2mcNhTYRGp5p3NnPscXUs1mFjHx6Az1trNTcjwr4j7ooVngmXjXfuYgvxt6sYfuuxYKHN",
  "key21": "63cUDM8w6L3Mq7xuCbsM1qaGDwVGVk2FqzmPB7zFCXrvmBX8Aky4ao1HBfUSQPJh57XLMepHhswZygGfi6fEEvJE",
  "key22": "5amoAVWPNZpytLDc5TvsPCyNKm4NMNandKjmKtSL3iqJvAasTZPQ3pzu3wNggcKSFEMYzGTVPmibbqvXbs6yn42M",
  "key23": "326p3AC97Bohyoz8EuzbKfq2uoHXUKHrkuQ8AWSpMtr4RB9W12oCVScmuzRfN3ydrSZ3f2qK6x7NqZWEFssoG1d2",
  "key24": "4jYkDxjp5LwxT8WDHktptcH1oYKxjiUtDjYKCnXC5XYihG1cRZakhEVtazptwot1RTt9438vj8U3AJr826YjHPmX",
  "key25": "5w7noePpE8s9c9q1CQ3WTpZJYVWPBLut8WDnJWLNCtZWCxNtSjVr1MqVDAKKqgfkdFmiVaadLA3VuUv9bFjfnHp3",
  "key26": "mHwyRboPJ4EmBKrgPRX95EBM7g1zPts2AkChPUBBDswogjHM6fc889VqvnZEkrUbqz1mh8gmU8ZD1onGRmBcYft",
  "key27": "2a5v1vGwn9TDEgaExfrwkMQcX6aoFGdiWwaB4gH8xGVTsf6ts6DmNHkwQrvwyamLKoq3smw7BZGM2KJnRUJoDSvs",
  "key28": "5dpiyjiTBkFS2J8GhSEZWam3YSpvhrnhUT4iN8YVjxxJYiq8djNhkJP4sti1HVThzXk71Ui4Rk3zDoEfZB7ErzoF",
  "key29": "4nJonmG1xjxDQDFqBjtKVqv4F5Q4HuQ2EYkgZ5xn7XRn3oPPuhv3djiDhXem5oNrDAJ1ErK8pSUL3ajAXeAHhrUg",
  "key30": "4Mpk4aEpr2V6HChvaY3vh2usqGE4A15egkwbR5EH6Ax4zZ9z7yCBvh9Ejpqrg4ywLREp1Zu7z3yUEZZGWYNQ5fyR",
  "key31": "3fBuDFdEUNa9bnyxN5JEifVKeN5cz6A6iquRpoAVJSrSF6TU26JqLg2EBYvKZUQzouH81KxG9uC5jKyNy3NUUsVf",
  "key32": "2zDfzjjaoBhstM3hc6DbrTKXuhQy5F79mQSvTq9hHmM4HLrCfPj9cWpvgivgy8yBRLWegcSWGTYsQkbGsN5MLRPU",
  "key33": "4nE5ehzB8Cwu6z7nwrj6vghCJ2Xjn6Z3BoiJYd4YhLVt7njeKX9uWTRXXjYHfadgvzBEJmZ4igm8udCYvVrKmntu",
  "key34": "2sxp5P9HEWsyonYWng3QrBBmrZ3X7Tco7wy6ssDjMrABhK44qyn4Wy1kdopd4BPcFC3PQ6FFqqvxogZDJdexwtoz",
  "key35": "2q49yiWHyzifwv5DvRFMSaDLLXsvGfeThTkGiySGtcsTH87RL4A3Z4KSgq1AaFFRWTJJ5WGDFeci8VjXtQwagAyo",
  "key36": "3cE4XmBEjUSR5dTvxd1YtxYWN6N9nHBiu9BNpAAupQp2L83zm4RStFvqEHPbM3ny8aMut3Pf5axwxMJwddwve1du",
  "key37": "3tWo8hKnihwWSWyNbFUvSjdHGKxHK6qDnKsx4PZXa3FYsSpUYtXgEPbHAmTJKT3yJvZJ32BviMRqf1typXdrQY8o",
  "key38": "5XvDRtfwkvgKa1C6n2zpPnDpAvCG91QJwgzuW6U4ngLPCWVLzvJLT6yapEk2qnciSFDrXVLQGFs9sCfph2Z8Bmop",
  "key39": "bmMMhKviGTq5zJRRxiJTAFxjLBe3tRXEcjKgBM9mrNdu78vVrHLHCQcaPcspHjG7WdNbQDqY6rCDQ6tmeEH31q5",
  "key40": "5PnMtw2F4AkJbSpXhJgEUX9zpCUkjUwAucZaU28cy1mwJhbMe8k56RFUUcY4Ae3MhdyMcntCSxPnfDgixnwcogNp",
  "key41": "49JsXZmWup4u7qxASro6YPnEFTALL36hEzYMcmMJEjvpC2uYULApPDnVusHbT866FECgJtSf1cG4vqgY3bPHJZi5",
  "key42": "4qZxf7vsXhPQE4MHoEYJ3SivnZai5Jf8fGPR6WGz3XNifF3fREQprU626nZFbEDHMGvV6bxiuZEnEtTY5g2K5Jdy",
  "key43": "2ccYwkh5cZKfuXjYF7yJRdMJR23dsAkJsuEMaek8exWvoxTS5WmHTFd3yY2CdchTTf3coNyBGzSXKjSN3S5Nz28D",
  "key44": "5RawhBjHoWqggYvzvorz9rP7f9hymAnTfqDMD4fqAoU9sYgL1rcc87JnY1yd65swDTsxbZ52TXbEGmocg4aZDg3V",
  "key45": "5ZigjThoEZd6ku5PrrpTD9PzEVeiCSNxBSMVt2zSDKGaxDHL29nbjzu5t9jHc4x1iKMZTXRFrCQy14Ek32LyFg9r",
  "key46": "5bBsuPZerqC18aFmkNWCPJJB1n6VPaxC6NW3JVDkjP8dEUGWEm4iKpwAALM8mM9nKFictbMkPoQzVuNaj6gKA7wT",
  "key47": "5Vz5yhnEWeLSKKyG9ZMktNy2aVHuipXC6kZUxwfASkP9s1tNtMBoYsd5tGEGboPd6im9bb6eKhQ7FXHhea7JL8kX",
  "key48": "Pg8rxGwW43Ch4KoWQTkJwTAG6bFQZXGkuE2a1hma4BPgBPJuwagE8rkTr2wWmNZgX5wd98mNfdNTASpvhELXebM",
  "key49": "4X5b9uE9ag2beji2BLyoNMB2sR8LDH7rwFHnXJ1XxCDYAM1eqDLgiW11LE1MogoW5SSvYkm9dWB7vBuDCvSga6VF"
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
