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
    "wZuH5WDU69NJBYfsQgwHC58VVd1cWVbeeX8yZDx6DQnrKmojG2wtmsFExqGFLMcPkwyRky5kvf4JxSN1emU5cFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55nUXWy6skYQBX9AkSbA5N8u6HwWoUeFQQbagK2V7jvqo656dzQtbgpGtkecZ8ERdcfyBP3JwivcfHnhxYSzTHXX",
  "key1": "45yeqw4JCywvDYvP3PmDUQ9u2Az1Wn6nFwmkrn5t4s2ZbQkoMH84gGpiVkwjGFcvFNhmaQ8zhWgYZSDf5A6JMAhC",
  "key2": "5g637T9DmJA6KNjGBBLdy2BEzq8wCKfYaUBcL8GJgpKdCWFa6QhDkuebvXKiGPMWrJ9GVkE9NMBfDiF5mWb5aTek",
  "key3": "4gXvHwVZM4t6Fz2Kec3kTxMJfYzbLKnrpuV49waz1oXe9ud1DrRBuX56i77bLH5r4hkvgVvPmstbnAcTeRV2qp6P",
  "key4": "2SuKLUNDFHMJXH9qwm8dCRVofyXtEaRHwWkLdM1dNHsk8JzAcWfhcaxFQcAJa4CqWJgA3XmTEZXHiEZpaHZ4f5o",
  "key5": "4hng9dcpGJX5MXhGA1i3gZ4r48MyYtEzTR1LrTGafiFqC6iVqMZAWst1sacLBqCBuggJjBPyd5cYhgHbNeyBtoQh",
  "key6": "4XJmh91jWipWCdZwF6HRRctQtES4t3n2NnzPQfQ4j4JmEGXbQLqq9DpEUubpTmuTU4c2AS8BJzEMuffMsHqx66mQ",
  "key7": "3VkmyfNczuG8zkXzE6psv66UUobtgzS23NuFW6XVSA1KSNYxJVofymDuhHVwKvPY43QuZhAtyg673GtZixGGoArG",
  "key8": "3R3pT44B4CPYFHgbqaCmuWsBfa2jxE5aEUy32QXnshrEAAuVUahyymYZHuvmvWkTCpo7aRyUj1QLwu9Rf7XmDfmh",
  "key9": "2AwaTH1NQzTnxeregMqktmR15myEURH5WWd6TquPhT37BGVcLe5czPznRz45nYF8B4ACiTYXoU7DPPHrveair9k6",
  "key10": "5dRtWYQrmzG6vySkwimUCbaB7GbxFVQbGUFRedo3e1C3cH54QfeTjwfCcqA27dXp3fWwELZpPDqHsWQf6u5xZubi",
  "key11": "4mYGgCnxJ1Srb1GW5NDtGNNEqeYcdCJm78Qo6Mmbii6kfR6pkrf3xLiuWxWAh8xiccYM4SprxfQvj3t9f84HLBpy",
  "key12": "2T2FRhYjQDp1Npupjbn5pHdEZuCFG5ytdCg1LsmkMHmSomZnizY6frb2azgjwRtABifV5NeebK8gkrq3HSXVNwBU",
  "key13": "3Xamkc7cKwAvM8gvnnxfEywYGeisycxU5YnyerFqreHpD5axQewJxMKaUa6bHTeiQ3h1cq3M5bE6cnJmyYnh29CS",
  "key14": "4Afva3VToWsuCkEipNseGdXP6DayzaAyZvqVC7YXz1TCwavadYpu5nVVPKSXSsBTJjemcNnaHo2eGbmHNEu91Jqv",
  "key15": "4LdNgUBhUsDkUvCrcSjiDymJontv9heJRtoPrPAshUmB6EQ1yRrGfpBEC1aViV57qKR2axeBZztAvnSMz5xwdUYJ",
  "key16": "R84ZccGFesYMMp3s4GFTTtUwxn3us8KWQ2abARYxFN2VhPHzjZfWcBuj4fFmJLoDYYoi2R2cK5gnymnk2bsBTA4",
  "key17": "3MTLEVAyvdSbpuUieQFm9X7cZpMjx3NTwytbc4spB1Tb1BNox2aAnZBdsbZJjfVxaAWWLpjVfwYRUWrAj9pCLjfm",
  "key18": "KKVZiBFsCazoBPkw86dakYhfnQuWiMnnn2zckoL7RD4XTwPiQcqEVai2nYNJg6uAQmJy1cKb5wUHVT1tGqMjuzD",
  "key19": "47xNZZh1TB6H8U1Vw1AGnSGSWWUZDKYV31nkzD51itHDJtSAu9QdfHNAcN2ukrd5w2JzA2tQH4DMnxwo5zK9CLup",
  "key20": "46qLWaFCLBYArPARdgxTWCmQi9vrWgwFvmPa3cPQ6JQpAVifniVnT4EFFGpx1Btemd2H7xAw91YYFCkHu5L1wXaQ",
  "key21": "4yXc5U7pJ9dbrfEcuRpWMR5usqTdBVnej1CgTokJkYNxrCRTTKp3BoWc31SsWkTvpjT9HU6vm9StQSMp8XnULXDk",
  "key22": "4bh7J1orxVGXXjCUAMZ1gzze1mBhhr1TQiVjJy33jM59VW3g79uXifkJWBG1E5K66GKU7o1sskAdkv4qhEMQDFUi",
  "key23": "E3qYYV2MKgveweCSmHih9LyhpXUsJ1L9fzwSw2dGHG7ZkAxoRTuENSBgHSfFiwVjUGJiSnSbFoK1S1Fc84Ksb5t",
  "key24": "hp5pvqYMggmKZxb1CiaA3Yntp7uNa7f9auqnGeh2xsSHskc62e9rP7zbBbb2hjYL1CCVMNfgAshhy9BPzJKYSwp",
  "key25": "nnkS1Qs1aXwxXoUvt2J5vDnLgZQLC7nvziVnUsAXgXFEX6D1RfLQDdtgQoyw2jW2UvUo1wm98f5qtPBrUsq8ABj",
  "key26": "26EmiJE1uRbptVnzEMEMyK2w454Xv17rguKDTqgKTosWxVnjHLRJGUUMi67JNw67Ai9r5xDPowqfouKiwS9wCNUd",
  "key27": "3vKNUZsBf6YFbbjyQRNXaQeum4wFA954QQr9uaDcYx7akZiVDU68prJh7LfRfKrvDLJCaiXmjHG7Nbb1FvXLgzmX",
  "key28": "5PcBGbwe49YM2Xr1rDbhpGqo3BWUDmiNvTPtLzWozHnJjZxHoN8Vi31bs4JSrX7qvodXYnuxLjzskZ28y5LkHMbQ",
  "key29": "5DhprauDnfNxaZxXxkn5E9AVfjErjoiK66AY5zkXxPQuGuCePWkifeBYncTsCwTdXGj8QpZEvz6DoMN5EcwieqUr",
  "key30": "48azCazqGSwYqfSx7b5cRCWjELRizoZwYc9qUDAPBErAbfLvHdakc2gc69znDBUbjY2c8r7p8miUQxeY3hCzkZgT",
  "key31": "4Bb4LjBgmjQTEpDMNMaAvpLn2FMLRcEMhzCZccnfotK3RN4r1yvYPDvKC19LfBSHvUVVmjNwAXjTqQh58DZRqSGe",
  "key32": "65yXUhoxPXLQexeaacRMxnvkkVGrchCWKByDAjMHyLsTbxoBrSsAVxoWsKHh95cezpXUvbNVBNFTipfQQTZNnNVR",
  "key33": "4HoHF4ET5zLbvCmL2xw4A2NiBNpJw2uKDanTvmb6a6HWXfbbwFY5iswHNG5zP485mi4juFx69GroxQYuYAeG7g9T",
  "key34": "5VVCPF9Hpk9VueYwyVPc9de4XcHuPCm92mhRCbKuk8gMjuHDJ2Hb6MFkyBpbJCviQg8ZwFTzFbDzMd5WAi8n7KMF",
  "key35": "HqE1bXNe6KhSuokzJpYSyz7XYhSgtiN1XffUmPyPnWPsJxe2pXkzfKKZmq58oeCvWHriVdRfgWQnR6BzdiUbkQM",
  "key36": "3u2xoCxgz2fPUWfCsgRqbdbG4uPD3Y4ccudNzpZAEVAm4mBVoTYoPfWJCZhxb9tXWRyGjxR2LkMz6nq5tZvUyw2y",
  "key37": "4Ym3BevZo6FUyXKpaYwgaB9z8cJkZALxAUF3N3j7us3c1cgXgfYAorwpht2UPUXMtsCdqqWvRP2cRQUbzxHaQ39z",
  "key38": "YPHvcLmbQ1WJfUEDqor9s4ArMwGLauJmfsXnLM91Hn2VJQayj6u5EMGi8mkKUSUMvNGzGM9Ky7vaQatawh27chA"
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
