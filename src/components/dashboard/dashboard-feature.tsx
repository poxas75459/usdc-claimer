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
    "5rVjSy46HiD9u7LWvyx9UfWYQNzdZzzAfgw9c9gZFesLyxnx37ApH5FZzhePWn9SWsRaiaMBSvfkXTFp653EupSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64r7Z1Q8MJwbph3gMaVDMdPVU61sCmiDDkqFCq9jNRsQ9PCMewMEC8ZVFca5GoAaXHC9qv5DBof18qE1LvciRv6N",
  "key1": "35KHryZKxFmENfyxprWvsztuYScj8BERdkYXXbkbtJcPrV7tWF3jNjeiBEPRZx4Kpw7sEZAFFp2rXk61UQktCVxA",
  "key2": "6k1AbyXsZxB5eNRxqkHSqomjGgiKwJUtejvSnYuTv7ocsk4VTkAVKzyCQ6prDm42t4S7HS4aXjouW81sxhacYt2",
  "key3": "5EhFsPSQAQ75uZL1drgPQ3YXYgHh2zg9tSx1yadVqmW7nZuz4meNXiKzZh1PYSBk5E8gUrGdbLT58Sb7ZuJNmuyv",
  "key4": "4jFGS1rTeBFWKkgktUHiumXMfmBt5iBhxhJY4oBiqf9D79aWJv3uyNhZhue9XhiFzMr3TE77MNcj28NRHc4rzFbN",
  "key5": "4u5aJv1tq4kmgqdnpSrhoDpaib1JnuagqbHrASuRTkaPLKGbfza9smzRxRPiQC1e2Hekdrz7tkkLEgnX9VD1gmcB",
  "key6": "2SnxzMB8eSViw5gqZ6VF8gKYFv8Zib8JQZubSb63kqgmTMEixGudejspbPWvfbzpGd42JyohyTb5h2aqqR27cBQh",
  "key7": "Rg75677v2j4m6qBGwWXs7bQvUN391k6PGW5JgVQcjmi6H8EpnkioFDJpokEaxUf3S3w66m5p79Q8ZpVx5gQYfJC",
  "key8": "3WRuSNgKfHtq3QDRMs4qdaKh4vbAw7aZJaANnThyksgVJWDPD6qPVyzeoNUwTuRjVYb6acALb2v8eU16QJ95aQPE",
  "key9": "53JsV2NBC9XGq8UquuQATYwW5fVxULm2mgQqh842mUisw8PnkJJiJr2VaoanXW15NhFaaoeXBECEnwuyBgkbhmcZ",
  "key10": "32LYrr4NYMti6qmydoqtYq7o1n9KNhe7j7WHHi2Q3MCac9Hc6y2dA1y4tYM571hkpUGKy21UHXwG7Ha63JNjAHAu",
  "key11": "5nw7ExXj7AJKi5ZoDTaTB2SUih75jf3BuZtmUeYA5v4GkTGccxb1mSi3GxgsUK8mHLBdriuVaeddpAxH5Aa51xkg",
  "key12": "4XwYovJhNoe5SswpW1WYBGUUWHXtgvviEVLm6MTS6W6hMMpu1zmGmeERzRBAhVLW4s5vvSY2SibZByfJgGJ97WYu",
  "key13": "3P3BQ4TfKtMC8kMj4boBQZr1sjJbZKShCaBmRNSmGAg5nfkAkjjttr3MpszjpPe3c5jG84GWUsabyEwiafhea7eL",
  "key14": "45fbxKZx34friWur3rbN5pgdMQoEzkUcDWYvwiSPRR9ULum2CRddWcei7Cpd9SjzzGrUoV4HJWvkmaA5WxsYq4qK",
  "key15": "Foy1WcQMp1F3qiWD2sc79VUBGaQKW5A5vD6ptVGMQTQFkFMFWA2smQJfYbKAWmiAy4VTfs3XRQH5nTmiZSVgXBQ",
  "key16": "4XmchUBTctFn5ynheRuH87vUqzCAcn4d7xqZYrD29mqYhFGcHu2uAdi48WjktdxVcQJicJBjCaESVgb37KjoShFn",
  "key17": "3Hqucuf2TSfZYthQd6kZgs8fDbcVreoLnVQeWFUJmKQULbJ3hQNKa2iK5DmN7r4FLhSotiadoBvewxoRzbsP2Sr4",
  "key18": "2J1uDDXkkK8L4Yc4Pr5gZZUDfRFoyM26t6CJjJcERTTV5CK8rtaRGBA8RUnqGeUhrb6QjwUahRiuAiyurNzZniSu",
  "key19": "9QzpYM189Mfnmh1XF186XcFMa2TVhkCJxzocf3etPtgzPsvzBwnjn8bMEL6BtdHmTftJHRhuQrSwjUwJSM1VyQo",
  "key20": "3U1KoFSWvbckNyyZcvo12wVNVH4p7SzPidbNHot1kDfWQ8y155LLrqbidnQPRiQipU8GqrS2DoTVdPfueCY8E5U4",
  "key21": "5We95haZNPHvgPjGcRT7BKVjcRqYN4MhmvQnKN6pCzDs96M6cQLE442bUp78TdZyWiNuHsRLEKnodZHSwJt7p8v3",
  "key22": "frDXZzSpLaxvmYYRLQrXN42jBP4mkv5RLDXYjYu6csNKWNkqFnaLevsKgaSsjkkd8arWD2gEXhx3uPW9omkyH86",
  "key23": "4vJhroetRM47ESdm4E1G6UTeAiYeyGK1xmKLakbeVTcrASFxa1wGkdNMYprGrwLCNXfTuVJctHVE6L8pxk7mGGjr",
  "key24": "4zPCeiVNVeGtyzK4ns5oH4noNwsRVknHnkjvhAHKe8DYb3tfAV72R7ucVT7H3PVriedxbV3Wt8g7ZvM341ZK3b8A",
  "key25": "47DtSESyucdzDhPHJZkVgra7YB7YHWBkT9HQVTvUszh1ymmx4ALVxtN8qTqXCy8vBad4aMY36fia2SkE2xzzU4Go",
  "key26": "2gM8BNUzVRXCu95Nmw8b8JBd95esVSBRGExdgdgHrkax6V6p4A74BFTSAnWQb1YncdJH6HmA1dkxZJbLWDumumcQ",
  "key27": "3vza7WbypFKP3ukE1x1GimrCkT9wVby8W1vBqnTBHX7fRojEG1Jg4zmgkxW7z9NjRVj5NJBGYYp84wqtsfRyKwHj",
  "key28": "4Zc9BsvrEcaSL9Ssy773MoVNLNWzPwptYiM9USBUzZBFt3Xr2T45hJWsu6AR1TjviQid5BW3epAEPFDidtxgRjcZ",
  "key29": "5QxKNETLGMsaBrjxE4iBhEjA7xYx4kiAFz1f5mR87e3pnhX3a9ajvX227iteHCSjQoFrhmHSzfp1X2fRpNLNjYco",
  "key30": "3Hpv5rv2NeWEjC27TUVYy6dsYKrfpQDo2yqpNBNgXZXD5Y7h4NL9T4YjnLgEcn7N1BzRheR3mNYW9aduceqPGbHM",
  "key31": "yQPHhc1ssMfFsR1QUCCdqCPq6u3yYUx9p58LVYwS8RKo3r4rExkpvXfP7zUyJYiQ2veH6pBhRcdRmrTCPPe6pYZ",
  "key32": "ZqM4wktAYSWgQhHRzteRN13bCVJTCJBnsKvLUk3fKR6cLpWk3dkzxRKE5tSoz2xD7h4rm1DQ9Mu41K5tgsQ1DNS",
  "key33": "2sKmFDfxrmbN2JUcpPc7aB6NMcrkdBkp248MRSHT9BkzuN6NAgoqHXN581oJXy4GsKf13Ue7e1GXEFHAmNfQwsLN",
  "key34": "4kATeexfry2WFSy6ZdQnyyBdT2oyMmXDa5AB3YcNoekSGhDkshrAmYwkNxg3uAkgEzhntVPR7mZH69Le9g3RAYHL",
  "key35": "3tNhuV6UTVXrx1hMNoaeDZ9CBtVig2wZCin94rh5uC1Hpqaz1m1McB7foGVKPWpCh5TEGWGR5DPC5SCGzQuLq3nQ",
  "key36": "3MR1P22nHQg48VuUwUZFTD47J9X41yKP8VAWEERDMhpgb7Fg4UihuxJeE8KdBpacbW3K1qckeEeHsLHP6ajzb2Uz",
  "key37": "AQXEt2ZDrumUVp2FSQ32Z5QatFnr2DqNzM4PtfRK8bzyhQQyHRNunnHg7dQC7KVPrsnCZu7bJuxNiupAkG4rgU7"
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
