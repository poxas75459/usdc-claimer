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
    "WAicmYLGsMrvKAF2xTy5R7hwXUjhSZPFowMBmzRFGFDQ3Y84qE8yBXqT8z458qsLP4AtBghCK6QY4JHTjHFxKAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YoE4TjPTUcji7eyvo4bqFKcnUS9zH6f42i27fiPYBuzgSTNia7XS3BGmjttjyTF1PZGwmzWoaggJ8rQWR97Su5o",
  "key1": "3C7ZNk9LLaLUxZTTU1YYBrxGdP2AdEaDa59WLvbHEK1a4Fd4J8dQKrTJu1K5eY7QmJHdCGfY95FwsuHQwefSp61e",
  "key2": "5mAC61SVQdsznDsgWSnavv73vSEgQX9gv97qCMEABs21BGdsass1U3cgsNWLnWKdjGwTfifTVJqr9NR8iJdu68R8",
  "key3": "2Bw3vhAnxq2zXG1C9Y9DTfbYQJATfAhefwcG9hmcbr4BNGq6eJh8jXoLXxwsQ1GpR5bhNKo1ybb12KQ47uKHdvsh",
  "key4": "3iQejYFBW2EYJGy9K4AqunCCDX5hzPmGBNMqKPNY1iQfZjvZ6C3ubBmxbeLB5RMUSbXgvS9YtdX2rqdCi8QqfGbt",
  "key5": "py5BB5GcM9HskbRiqVeaU7tDzqyE8Nyx166HZa9xC9zKWUaSvsYgPKGXySSdFVY5T26QZEDBSkmcnYWKup7FWiC",
  "key6": "5qXj59HMEuFxscZZB19P8srNN665WCGcsVBscSTDtrvUwGVm3Xn54FPDvynHd1cuMeW34DGnQ8ftLkLuumD6Yd3Q",
  "key7": "2M5tzZktvCib5BnrCHgZgXDGLMRdz6hjXd1PVrBUC2fyew2kpqwqa9WJfHh3aDtreKNopjYTXJPMdragmR46x2uQ",
  "key8": "4pdinmEZLgbsWRQHQTivTcaRrhPZCDm794RjXGKuCtsnX6BfEfgPnMDdpBvQCgiGppNd6TZG5qwd3ruvcfGUjuCj",
  "key9": "5kYmZceqnZ3LrZBuvEbdrqTBFVc2ZSg49UVUwRV7GdBbxsUPG9Eyk8NkZfApnTJY14Bnzecf7E29JcknPa7jcTb7",
  "key10": "5ahw9yEaUmUwNuZi4hZPtsNckFY6LJNsmQjUAEatmgwxLCzgeYL3hD9h9GhSKeo3i6LLJxi9oMVfvniaANfBMj4W",
  "key11": "2G1fjqRfzqwy9nVGVFBverMmKxw8bDhxw4FPwsQnt4P4FUt3jaYYwGwBKndwWqj5D15m7KQPysz67S1Ucsg6WE9G",
  "key12": "3HXreUAGHfAo94wvfnFwVDU6zQgyCBAaR7AJhKeuaFCgGTz8916AQxyDtqHNdxrFn3KtY2Bq9AqS9ZTEsDDrYFai",
  "key13": "gZ1vHWySbrruR5mKQJFT5yeHoapvKoRBQdZBkF8PHHvtFswLSmdV8wPLVQsby6FEP5u93osbDHAXEJSWQyeEqRB",
  "key14": "3msEAWAJtTRmMo1RiaFZiLfLaTgAfxhpzJ6mci6ipFJ84LCverrWrHvJ4MxNmHn1mB9c7nAU3BFt3ZAk4VLNexkv",
  "key15": "3nXoJdf76pMmySz4TqrmMaSSgnjyfjrkqXajW2VoELMd2WkaZVysdf188cxXird5DweJPYi3f7zVrMEtNNjJzxSq",
  "key16": "4kCP7y9q1X77zG4KYhEfBmrtuJzCCrFBPPvy8YKvpume3AccFkjpRPQoeffJ2tKaWLtALmLXb7uwu2zbbruqAG8C",
  "key17": "4DH6LRxYH2Q5K353fCVodFVFwQD29apZ64WBQfRHwazQjEtGuhXUPeZnzJAJQwCdEkgUDht1pdhDHV17KrLMXrKc",
  "key18": "5zS2DegY3W3kfsViGNcCUA3ayR6CVjmVGrcSiDex81AXREkK6PKaayUvkkaEbzPyahuaesYzLz4pYK2PF3H12Kut",
  "key19": "3fydooEVKqBXrDu2fk3siWdNEgicFL1rvcUVWrSkGmdhG1BdDRH9CUSdbNB1B7Bicf8DntaDHctd21FgV9RjNpBr",
  "key20": "3edbbrXbAbnagkUJAbsag8ZYtk97q2A3Tio82qHDMg3Kr8eYXChJgppEWEULDHjUTkoomvLwjsp7SM8EyF1rPrSQ",
  "key21": "53bsp6YJXhHh8b32ZfroQWd5uQsdtDX4STiwWpkNwAYGbN9bJLW1v383mDy5YD5jDbMp6FwqoLniiEXMCCAnnRnq",
  "key22": "3e2MRavBV7BCgvAvRQYedj3yszEd6PNXmhsHoMMXX1ZhPcTNvtGr43D7YB5FfV5JCPjFDcXfQocLtHgTEbkZa7W2",
  "key23": "5NqFu2LFT8bm6GbwjUYQNUQrMeNEohGx3RJV9rv4qmAufvxXcxhKRQWXb6YERBiPbTfMAm45HdgJ8BJh4wa6szDa",
  "key24": "3yD9eToaksUtr6rtoM4UfKiSCZmWTFzcg9p7oPbzZvRhpxVmuiUZVSrP2ixTtJFwYf5Ks9GXii6j8auA8noHuj4D",
  "key25": "3WfcM71sUr5G5PN1z5NwKoXyZPp1X7SxjxqfnZJFbLgVQymv1sVWTTnVZFNMcShsCNvejJzcC51P8BEJsfgX1kyF",
  "key26": "51fLej6MHanQ2MUUDKc7hmftWViQpDHdpdW2GBTqVJByRW7msxQ2zEQSAV78p5nMaV41TWFTAfCNLa5hJ9ouCtnG",
  "key27": "56EK45DwwrCVnLtZHU6C9H9TiYwhLP9GyoXE7kWM9qbTmvDs7BTtK7ZU8mViBoy5oS2RRPd7timicZ7ws4q3dNtq",
  "key28": "2kt9893fw4vRKc4ZxqvrgTdrtbEugE8HP1RMhjBxHwy4yiL2aM7ZSmpQ5B1TeaeyeLCiTwKN6Yr4cLcqZ3i6RefX",
  "key29": "4zF9bn7bMarZwuKWmBfuTg4tN6hYTRdTovZkeNrWp8dHX6UWGMRTiu7SQE69r9oaPwAXomS4sVvcNYSRGsogdyFy",
  "key30": "65iFjfBoahgBDzTWNKeKeEEQjKVgqkjHTf9CtoEkevY7Z9HFha8MUmnQ7hhHrPdLbiE6WekZct7ikNu9E2vbToaJ",
  "key31": "5QDE42Y37wYJ6VemYGxsGDGBFWWf37EFHCfpmar5v6N45CyPztmqKaYPG5ane6ZYqVuitkGppttXpoAhWeaWrYeP",
  "key32": "N3onUtpRst2vkrB7v4exihgvr7arSWD1rsBNsVFpsdYWzChZpJwV6ZT4fGhtqPCz6CAwq6TvzjcCwodBHm1MYoi",
  "key33": "fDp27wPbUG7ztT3yMDiadeUdJRHiNrqy1yZ35zMpQCds7gDKCHvXqSndgbDe8dLyx5tTpzYks8CUzxet18iSq82",
  "key34": "KXWjaxZFPRJoR4t55C36GV5gxcHqiq59dLKKqhCA4FxmtVuAoP3GwhCBT1Vrg3HbfZaWCDD27b2o6VtfQmkdQNQ"
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
