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
    "5iKzooHxBsxtYrNt6acYua9w3HiCked9kKN1FwpuUPKPQfDWJhNwYrL14edFzRmFCexwB9Yo5MrwfZLzde4931jt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z9kfnrodynP4beLbDFTghEqfmbBVt35m1WwU9obim65St5kSYgiE2E2KghMGWtXwFUPDfhVqEA9rCq2dZUpFobt",
  "key1": "4GX2JZ4oB1i1LXpWY6u42rqF3kzu84z5WdToVmEYwsWuPiQkDzLCJp9J5nPfBJxyw57cBFvBfYWDvksv7vrHwE7J",
  "key2": "BYUMnNLadCQXfj5AFumaPcHCiVNMiJvnYQ3jegtXPun2SQVGeP3ZWwutT2DRx8fvXJBpMT1dhra1s1w7ZtUHfEe",
  "key3": "4tKyfcVhs7tv4c1ajC9Wugptbif64hR69tQ5yaRRomSEd9uMwAykGbrBp6u4CPW2mKfqGVy9rrRo26e5qYzPjfZC",
  "key4": "2ZU4x51WvvsxjetNg61cz5oUjPBrQ6zLWNgMi7ZA7dF6jNRLwU91SCQ1UmLt6SyB7rHoApypj9VREXbAQv9Xs1WY",
  "key5": "45R7M6Fj624GVqhkvgRRY8qNapop5eBbDmhdbyG1v2D8aktcxgqNj29FZG3brPiKMtQX9H5v68Huvk9X2gjCkSt",
  "key6": "5HfNbbwm4fiKnjrkKdy8mjRVoR7NUNBTXFM67MJLCPr1tuX3ig6XSAZHTeCNC8enVq5BXHAPrjKToqTDfN4KVhLW",
  "key7": "4vducYt9X3nvBJdPVPCMGQjxqc2Y9AFwtvaRrcR4p3C2PGEV2JxKfjVzau6fg9UbDk6fK1aDPPbK7krsEHjwtv5n",
  "key8": "5fZSRFmvNJps3m5XgMZwY5e8zPEHJXKHihaXEUcXWrVENnJv8p1i18FDu1fr6L9DT8VVifpL93QkW1u8DFQ5aRkt",
  "key9": "4z82C1Z953LDZwaY7yNHpXHhhD2dpBjPw1fqrqLzTEutSDkCbtA8pkmK83HTJYFrQEuUEDPhQ79nZ1V6e4RXkwQA",
  "key10": "qCtHPv5gwfhCHbvc61bLSkkaZe6FV15JZb9ubFSFxK6o6ABhJNqovBgZzYbZJvCsxH5jTBHgpLfrzEEFzfp9Dpc",
  "key11": "65C4N6eMiGvcAZ9FdbtbNzNVnEUdSXBCmKaZJxC69KEq52U9vwatHT74P28CpdidapKpW6HEyRUefXTiTGf7KYHf",
  "key12": "5pk525G9KtBFTVCejfiUZfcAHYCPHWgvpBg448RgZw5SLTg48HY8zEveBgYvVrMQgRZFgAwpJL5751FEJvb4aHpn",
  "key13": "55X4FQbRcTCg1NTAZL9pRFjTiZaGTrTPjW6afZa4TsbgosvX7cofFxiMrnt5FxaDmHaihwZynm4Wa2usz3d8sSZe",
  "key14": "TtY3APHRFVgfSsBEv3panpFaqFLiioxE3Uc2reWTtqRVjdY6emiSN3NkSo5JP1qTfPttaBt1wyXqyt6sbS5c4s4",
  "key15": "2WT5ew65Fy9aFzwp5HL1fdRbdY9Vh26cFyZYynz5eEjz1y9pZT6bj6Vt1B5yU763UhJzDpYaJuqiwSiwDJjBarGr",
  "key16": "jFQQpTDuBNy1Rq61pazPgyxgyt8Ksi3xZxfqxqkeeo2ZAjZw5Cd1c5B1QnVeWt1hWPYMzp7Z3c7goRg4x7x8N2t",
  "key17": "4JtZ14pYLG6Vgxyoxh2satpwzoxwKTAYHUGdP5brtFvKVbB8B5w8qb1hgcLbZT1oHnVYU3DtKaWDS38ovDma2g3B",
  "key18": "65jcCgqutnb7C7Aap5yQmGqkf91rLdtT1PUriGULFuNGEWaKDDEszc8VzMsVcrfEYVsZGPPVUBZMkzKv9eKHBxFk",
  "key19": "wopjMggaDaUv2szJtSbhV58xywUxNV7Fg7jQ8Da9Fff7XLsLuvcr7z3gcF319v8n9JQJhMDD1KGuVEGQFtefxgk",
  "key20": "2Qgt1gSHf2m8nrf31GwWG6tUtP8orAYrMT26mTLc5cQbWomn9nuSYwcEWGnWbWkg28cxCnDm231TSTSSFYJmCqze",
  "key21": "6rhhF12NNijE9YHAMvvMTgqgA3uK9Jth45ozG1m5Up423TZzWrarAGo4uRkmrN8pTj7AqRYiEeiQKAcy6Y3Ac8v",
  "key22": "6yt8NKMmAcW2ntvQKLXUukh6ib35uPpb5uYDGp43FvFA5pB16RD8SPsxwrSkMgb7ZSWsS8SrzaZXNtKVsbQLHin",
  "key23": "3WPVZEzDPPvp2rCSHxJE6VLai3ZUqUSYQHHTjX1ntQ7LuTaHxcLRMCdNo5kUFGExaNRMY2G93GmqN6z5RYPVkfx9",
  "key24": "3mZwbSuKEczuCVwCyR9Tzf5JFTqJxECQuqVZisxAJhGdnp1889cGAusP7NzwWTqhgmEMrYb3UEhRa2YHumuT2wq7",
  "key25": "XhKgikChmg3PESUgAKa9Nh2KHpxXCxDzKbepf6R9CHmxXKn5ATKt9FFkXmNWonbqJbJ7GHRbYK7g7cvajhC5pbc",
  "key26": "reendTYGLZhTAVUXGW12M7YXBMVSJQv3veZ1JmyX1QDSA99JuNobriCJBahSjcu7btLTLakATC6N5jEX3hFsAZi",
  "key27": "4oLeDMBJqtYW7MDeWrqXsZg3ZBVepnnkjAciLqk3P6UxPTGycZefSfpJsK56RT1mCaRW2iF9d2wh6ixqGcTHQNHy",
  "key28": "oB4c46fZSqcBNAi3WXQu1W8ahxKvNJEHWTcdBNwHhg6RY1Q3tzvhs7voJ3wE6dWXSHm6Yy7T4kmnZ4GynDSKCBE",
  "key29": "5J897gNX3NzWHkuSTY5zsZkX3XGVVfJfJ21MKiXPBJZc9rVrX7Pp3bUQTQwDBTzec5H19vkC2ePRDTF9WUgZPjZ1",
  "key30": "4qwFgB7fVXyFEBr7SubSUCh4gaGp17HYGyrTUkyPEtcbKySrxg5PkBdsjcHuVt2K9L8NwhPcxnoqCAJDEhtVA5sz",
  "key31": "Wv42r6PR84RqVPnVT7o64JnwqvyZu5EaHNPagpSYU7Nso8q73bfDzcdUBGmmWxQemFKz4JopmHnMRvSM5HLQ6h4",
  "key32": "44jA3tXLjAn3zBmasXs68LnjYGCum97SDUFkgDbLHxHrmLDTwJ7hg7TBXKVZzM7dZY7Hc9HbcPTwXDQhtdNfH39o",
  "key33": "3mTweAThr7tgghqGi4RA9HfpyMJMBc4ux6wxYRQA8LjvMSdbX5q45mR33K82xVZAJVtMseRyLFs1KieDkEtQLZPP",
  "key34": "GGcJQQDGG53EEGW6UuKT36b66jMy2WkkEeRKrTKkJzr5Q8G4ijFmVh8WUpuiQSXA1qrwqU8FheZPN8wumQxMUk9",
  "key35": "2rB3xYxXfDf1X9ct4R9gCZzc2qxzJDjRG4pTT6f9AZy13ycxMi79ZeXAWxB5HkxBczPv5fx5uuW81pBwu2vxTjEP",
  "key36": "5XHuWkbN7WK4THAVYVgDytavkmES3ZGyppReD8W4PFo6efo8LESyZNmmQ388a8yhZ4pkDgM1o7f6STNzHRpz9WXm",
  "key37": "2Nt1TekhrVLpd3wYL2Fdv1mXGM32SFtv1jZ9nMo3XdUUjCYLs3Hfz4gCMwKrxFUZz1L2vTfF6sd87FeKUd8rrnfo",
  "key38": "RnRy1q1rV7Y5BRsK1n3o99oSSpsxqbejLAU6tTyr88ymUek8DurghJWHTarjx9BvY6wKjSUkQJEMQ9sn3yLQVUC",
  "key39": "PD3MyMWZCr3QkyJ6UJr6dGvf1somNK9BRAuJL7yEf5arpirzL3MafMmPy8T4thtiNHMqwCAY4c6wgr8kQST7qEH",
  "key40": "3TFgJ9pvzgo1xfmHwFDREydXCjSZ5uWqavBwTk5F8wEHZtdjGozuapczpk86ZrsR1TZWMYS5UgxwEaTdVReQnvon",
  "key41": "5tJNt8nusvENY9cJcU8xnmCw27AAS511gWRNJHKau7JwwQtuV1ftU6bewxQMDuk8B9r7yCvjSmAnWa9L2Dbcdowq",
  "key42": "3kE1qcjfxqJjBYstXUGZSHvhn8MDxrA21SYfjVTjBcY3EPoqDdP5Me7Hkue7mkEXfWcEUiqkn7m3WRgtwDNrD3TR"
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
