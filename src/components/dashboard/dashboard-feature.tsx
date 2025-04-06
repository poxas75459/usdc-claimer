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
    "3CPGMQVKQvDzCwAm2GgvkqG5sFjgEi32dxLeaEzshFh6NZY7XCsBuv34CpzEHfWRthTePFQSYTgKoNQM11ZR7bfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61J2aYmg1C4h9miMvPJkYdsMNuxiod6bV4Kns622Wj5gq4XK5iGRfxi47ayvdmWdYoZsXaLvmCE7TbMYs17pSBVk",
  "key1": "2zvm9Z5Bckog1fB3SDCzZAWqx6zeCodEoQwaeeVFuE6PNAEGy8DGTwNdzYFi1fjJCDEuN2CDDBRsPvh334uoLKcn",
  "key2": "3oQt8Xv87ZZ8qgAprBuK1UkuJswTGBMq9bX2DckooMG13C2TsjHLdYZx4AzdosEFZroSgTyGumZVd16BxavrZS2s",
  "key3": "VX2UCseq5o4xzvG1iHfFucMTknYZu3ZicfnMEz6PkGpgWemwC1c2RbobxUuMCW261FYjvPMqR8XUjGzZV5SG15P",
  "key4": "4i3MVwT1wdQtPBhMianxDpVTSkgTUtb92SXg7jMT9eCB1Kdwd8gmjSvGECNVCfhau8JXwJtgrp2BSUbbdTDBDShZ",
  "key5": "5PCGp8m3HDkBgBinbcmgWgxjsZQLp1yoSA6UQD3xt26H669AvvKhX4NiY4ibXYujaUZjJraszoUdDiSg3QoZ74Nt",
  "key6": "63dbbf3qYR6D2sdUSyR4BJmjvuPvMDh8WjNWRnKtjgsQDErspktQnLfqpVY3ZUvBSpXdvxSCHjzQgmjTi157HY2w",
  "key7": "5unZ6zyC1NcqBjekSjwPzkXFUDDKGk2jnkaWwuzhbcRUmZbjcrNdnZb8YBYyVY4c3YDVjZoJsEt5L1taKpTFsHiU",
  "key8": "3fYBhxvjqRcUVPCVx3GDb8qvjo4JtGmfqMyBW6E2mWk1rWB6AAfD7uLX93VQh8cuqCSU46Wbza4AwkipPSXDUsrk",
  "key9": "2A7m7Re67YuPYFSsjtRLuPu2zoTu6b9D4NfYPTcXFh4gG5sran1EEY9err35Y6uFdXL3zeDS4xptG4HtqTK3RPsL",
  "key10": "vuh2c6GndtwMDCqLijX1Kydc7eFjsUuAnbu5WUCEKuvvUTADhy2WLWP4Dx6QvZA9FpH5oKi7NxzdVfkimT7hRuE",
  "key11": "2whPGsKi8aAGUPqMsxbLAv78yf8JwaGKehTkHTHd3wxLQh6c8tU7WDYK68g92fsc3fHCTPbRWo6JnbvcU2fdr6fa",
  "key12": "58JxFe7iFx28FgVNyFUkKk83kJG4yfQyBaEJQh2XU1a7yoC8KM9cnAWxAxw6jY4m2MfRrkxyVzcncPWqsnqJkgVe",
  "key13": "2mZdhQPdyDD4m6xTifmx9ZwHucita8qT67HcVmKWnsYGxycFNYaMWTtWghyZ6AuXDuYx5PLdpXSko6z7YHm28pFu",
  "key14": "2JDFGsKwcAA8B7Lp1VUn3JGMGsfzL5WrqX3Hvk6BvGKoJpa9vTKM1rRxkPS9wbLQfgf29k4uxLpbsGmjdZd1uKTS",
  "key15": "2patAvQzXt9hScwipopkF2KDMw98E1WMrqKE8p5QhU2Q5amYDKUnsY9KkQbL4Mrd6rxVDsoKw36UmPpLNT6V9HZT",
  "key16": "54taL2aot3ZVuhct3hzKqiStVQ1AAWBPgr85TXsoqwHenzBemS5HWSp3Eres6TW9pCejSAk6p9rKCsxYZzR5AZSg",
  "key17": "3K5pAv79eWoL9PUQ9w2ANdT9HWkwynMcSm2u4MMoruHxUQBSbFvePWcXBEAhSoAi3Pmg6LuGyCZYLtVcQr29qW4R",
  "key18": "2bLEX9cBH9E82AeNdmTjCup8Bkk6UaH3k5HjwVfxm65YSXncfyBkH5YXHcYNzW4CFsKNm6wERNxvvsmwqrzJmbzd",
  "key19": "2MWyXi3aDb3LTZSRg5DUG7GMYHeHuhpmp1PK5S4GJ3JJQGKpbfBb1AMb94vEN4hnG2zeHx1fp4h719vbRUcC5bVY",
  "key20": "27FEFg56LSqVXqNixieh65vQSUG4oPANTDrfM9GsPfy78k1ea2uH4h9hTpxg9nj4oQN8tvxAdWFwbghbiTqAXfsX",
  "key21": "5Geyt3z3jSKtQpUbzQm57M9X47U2HFpSBPYT6Re3JH9HXfR1Ne3uqvPpbJ6ZxcTBrAaShPNF8kaQkuJqJPy6WYan",
  "key22": "33vG9aPxLH8s9AtueszmChSoQqXzEJzXWECc7RTcUTDHFGuhjKmdcrsq3VszGGnfjW4XkVhXtDETbkd4Fcz19qF5",
  "key23": "3YCf31B6gGfTvz1jghAA5WNJSXMNNCjvbqtgrtPwmLNadBUFxnZiDzbbVse38n4oZvymrt5z9RUcWcL1nBynzb32",
  "key24": "3oMERMqvMWzqtGPtKKZyYUhM5vtUoig5enESkHnagApEAfNiE6jL6xd8qEhQfrprkiSG9CxQTrGwjPbhgc5kzCb3",
  "key25": "4Bf23VUrwiKuwjhkQ76MbvyqRvfySUNM3WiRZtDBjB8CpGTedirbqbQYGiAAebj2wqXQ78ADV5tVzN1YQS7h9r8r",
  "key26": "5CtqRou19GV8WDnpoWczMLLHRgN8WwSFzJiTFsA6392FrJeXBVfcUQLppe2bVt3AELuVTEoPYr82cijzCBaiVpxE",
  "key27": "4AgzeTyEPbeCz9JuqT4aQJHJwpAQTFfnrYgibuXrxHqg7Mrg7V7KdVktE3zEoVkyUsBnwvXcNbxEJsP7RRWSegmr",
  "key28": "2P8fq8T3mJzZMjZnVRDSYr9jJWJXUjKmQpUxYLNZ2VGg3GLCPWND2ZznzcPyPVMxn8n2UD8Kagas7TgsaYUbqNtW",
  "key29": "M8BNMceNwKM8G3tiqbev7hhZ2B8AT8h11SRotx3YD4P5qAimuPa1By7nGyF32mgBeF1qrS165nfWjJpBiL9pSjZ",
  "key30": "5R9VoweroCXEKGTYoTKu1NfeGHeSFt8tTgB6FaEAVfoXYbiEVob2HCKNhytu9wJxRkH1jJEJ8vEiaHRgsGh6CNCc",
  "key31": "5WXxLER6mz64hzftuincbjNWAHer62CqZee3V5uEkPfgzyEzbg1yDrcLr2aTXBAtm67LD89bRArrBQ8KjTbeqQxg",
  "key32": "3GbTAjLjY3JUohZe5XzpCewBHDfdnFqTtARNhvycZAJMdxpBMC8yLKgUqWdoU6fttRbxu9UCychnE4LrPWxcVc2W",
  "key33": "4BvcgLi8NpJ8bjzBPzKcwpz3mxyj9aHaEtzz78v2QDFf3WEYkuGsyHNPX5K3igBkbpusawM3ABLKWavGxJCgGpjp",
  "key34": "2xJw2aNyDveovD5XtqRWVv48mLTiZ2yQY6JSQg8fUUYxBD6FdUXGFWV89tLyy4KHdPA4eMWmRLcv9UjLW4HaAf2Z",
  "key35": "48qRbxj3M1dDfGj4kF9wggfJkqfCdNRmoujjWMKqBQ7rxB7JJpMwswf82WZiEGsUErvF9a9fjVDT8kqN9Yh9NWgE",
  "key36": "MB78tg9sx1BPZ8uvxsEncsmrQXchBAaumYFeMri8G7wqCK15A98MSSnCGCY42C6ozBgrFwDEv5hcz3jZF4mfBnR",
  "key37": "8qgE2SWmNgkBW1mVZPFU4X6xEuiz1bmWskF2vnnLpoxuyuyMsbziprRpToeEvVkwMFLbssRzc1fa6sKcyPapAP9",
  "key38": "5gybiV9rTGitS5iUNj9qFWvnsZFNNyRqgzwrVciNninY7a2RD8qAJfd47MRcVsoJ1cNjbw3e9fu6b5fqE4VhzPJG"
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
