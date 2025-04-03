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
    "5gcL4FMk4V8wocktRgynHgbkoxS14r79AMBPvJDAcVAKGqHX7g7s24Tzac2ZjWuWwPwNzEnzXzmGTcSYqMciNRsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xTaysCmgF8C8XM4nMsSG1ejehNLJaJRTuxYn44zmaCdQ6bCwjGKKjHFUKrwykJ72UfpjQWvKRwTq25jwfBUruCj",
  "key1": "3LRU4kbKQniiQ5zN6TAvHG4VhHJPdhUWT8ZxJpZ38BjkBuDqebKZ7EJqdrwuAdBakJDZKLvb8yxdKgFvqHWr5bxm",
  "key2": "3Ebnpznw24eUgumzmti1q8gLyy73GTqcLxyBXDsKR5qW2j94sKYoGg3uji3L28FB8KtJ89ZGC9KNPa9tMLwT4NdR",
  "key3": "2m9euNNpGxMMsHvnpWkvrAiXuSGPD3193tYPTcTdgqjgoXbjd8vkWyfAnXLBtrkwhzFg2y5zoofPHBYt7gfmwzo2",
  "key4": "23h6AGq6XAZVCSK8wWmrtqztJtewbsPbaBpzZfZeyjKH2v6fx2QdujzHxh6oynNJpZjMWzP7Xyuf8JsVFvw7qpUR",
  "key5": "vzu8o6w52jWdhmn8Co44RBrJqAwwGfDJZKV1n8Uxrk5edG7ma5i8cP7pN2x71f8Yw4KJyzZ7Fznv5W7it7MUKxz",
  "key6": "Egw6zKy8aknEaAUtzJXwyTqshiq4Jc2SJHuvaaW9819Z8Q488NP4EF4cnAvnBPSY3XhWHcuQ8HvEiZVYotcPhuu",
  "key7": "5WVH19WzVY1M9hhe7Dn3YYJjgQWyd73yshj6fbG6gH5hX7y2JTTvqCYCUoKYUxMY6Qusfe5Uk6e4NQrBJ9pEG5Cs",
  "key8": "4BS26p5yp63vLd9fcHXCjMmTugGX9j5a48egmWfhvZtVhnUQHyU8nSi4nMzz179LW7HmgnDz6rVdhPFJaZ14d555",
  "key9": "UF7Ju43GgJCtFqAASx2k3hwM9qVrzpMvxYugFxUy5j5SCdesVV4ihDn3ENSD8pMUmTF2NsRSWFyE318xCUNohwC",
  "key10": "4UpnFuttFzC3YcUrPjmSmSd3gCvmbQw6CihzEtEaVgPHskXGWqyt8xQhgAhHaW7vXDjCWYBKX6TpzdNtaE4ytS3W",
  "key11": "2KK3nAthf9Qy3MZqYjzwxdSVwy5v58sEs3uaMt5CB4cxb6cQNuKRrRhWwWBfGR42j8enrbLLpkkdvzdcHHcBumSa",
  "key12": "4XZLj2GQvFcpDGim67YD2oF3LiZQpXum2iufw2pi2iZTwuGDEzgpNKsqgirsmgRUbR2x1mkjdUvALgeFwt3UrB4L",
  "key13": "4ACEeBJqB7c1SkMoge4mwBeoREPhK5Mwj1zhnSMZ8HVEXHCUBRuD1oWqez4RTz7JGhE8wwpeWUJQQbLcWiivoyFL",
  "key14": "T8ZpzceCXVo2etHDLEUVFoDpswXp6A8YzBFaLqufvu3yvdt2rRFuPE7apE3Sxn4YbFYXtiu3DL1JQF4Z1CwHCc5",
  "key15": "25vwXEn3Zi6TwcPBq62HPcQntkffjs5aoJYH74RwivPmeFNHKB6Tv1oCmzdthE2dNimFnACcVCJdSAgEwTJrPuh3",
  "key16": "3FDUDvMMsh6o11NZyjHouoTXGVQ1i9hw2uneXTX1A3PuGbc2VXk2jzZWS2VjKH8urGW9FtckWCANhKszYPFUx5m7",
  "key17": "4n2eqCBm8FzaXwcEVvfcxHjppQfTuwD8jsevyTqAeibWxkdZDVTP74PStjhhxy3grDjdpcn49ngyMLH8aKWdFqvw",
  "key18": "4asynYxshmrb1rZN9WLrTddmgPH1F6xD1qnH4UVNY2Yu1Mat2qEhJKQ2KV9kMLEDZMzYx2quKneU2njUBLu32EfL",
  "key19": "36VzJBMAfMcyAubtzK61Ct9ceMH5nehwXAMWCcwTAVGGEC87M6WRZs7rNSRHRFPK1gKYynNH2wRzaSX2R4gtmNxT",
  "key20": "3uz1Zgi3eH5owYirfwf1nqQANiymEEB9CAMaVP4m1Y2cYLgP4dG6r4T6HhDWTFMTd9C5AFhDS7NtDLsQ17bhKpbu",
  "key21": "aQqMHW3YqyQFgykqgriZxNE9NfL6g4yC6y379ic5iP66DEmcfjA568ZVnRxhJ8tsH5xq7sv1MmnuutzVE9icnbu",
  "key22": "2mrgcbXmPWTegaMvwFoBn31pbMi51fnfNSJV9DrAFA9DFkwhc1ohUk4ty67CfcY8Yy6gH1HgADyJAvFfD4tDqkBf",
  "key23": "4PzTqQW3XkRhb52gegXqnagUWdMpP5QJrfiesJ34sFsUgZud6fphwFDqqKEiYbkWA1wpPPMFPmSiyc1Q2HhStPFW",
  "key24": "5aQbxVEXJ32oVqgZEG8J3wkKVo2csvLRKAkzJUg8xuFzzcLghXds7th5esQrpNBktkcDZoFaTvkzqXPyH2L9yZPh",
  "key25": "2GKN16vvS7W3NRnvuYGVXDxz89vHBPrUZXSkmknVrzBx4QPSf4jdeq4SFGku7byUE9mwixNF8WUZChayKTVdpWTr",
  "key26": "26ak1UppNUdmCrXjLYgeikVRfxn4rxGoEwR5FSMzaDoVk8Uv2af3Eu92geFMVMNM2h3ctrAFK2etCCCiDgTH7xdc",
  "key27": "3ZnzUVK6VXdkUv4ys6jNEo5UNg5fWudHFFdwd2A3hojG9hcwh6XM33XqFo47q8tuE8zQRfQLCycKd9EsHGhZttmH",
  "key28": "4PR4mAvTBYmsoRGBErRdAjmEFgsvcE65th522ngMDwpfxUSNFeJE4vd1W94CP98HidFB3k9Wwa7bNCTUPJCEpYMV",
  "key29": "3A9UqFtSevdxD9YrQhiRjv2jMiK49nZCAKnFuRaQy3J6TxczKDJYodKZg1jXdhkUrk1QQdy2yJNEbzvgbUip6gZw",
  "key30": "ADEv3eNGeKGQNrezwXTdZ4NZvDX2uGCZuNzu87sidxMnutPbtVXPFCbopCGxk6fY4XydCee6ZmsFwrCAa147R21",
  "key31": "21zYZu6ceakewvB6LRripX8GJ6MWvMMSX54NmGZir7d75aM7f2YNGpretD413uQ1jKZD3F3S11nLkSSopykwHzpA",
  "key32": "Ypgi2u9BPk6PbrcPu6QDQ4BC4s5WJLAfasYoR7QS4nuwH79SmneTyrqmY9JGV79kG6VrSkgfbGEZmKs7PPgHRqM",
  "key33": "7RZk4zDfBFi3L7jXd56LDRfHg68gaSK7jQJkkba1DLzQPWGqfowmHP1RGLQRfN8K7MEEkYaKZJpCZ4TZoZWJrs1",
  "key34": "4FE9GDXv1qsroM8JZNTX8i8PvbWXUpZ7PfMow5ny4myc6UWmiXHE4E9fTVUnR7mitQ4iG4Bk2suGEGPMLUVezY1",
  "key35": "3CFogwWAbGJzcpoRb9rm7gR7i2MSZUWhUyxiAo1xGw7sXfKY1KMru1D91yGhHJ4q4SBazqEHbcmjGQzv53apSMKM",
  "key36": "4q4fmzoGJ2gdPrrWtS23KLQbVMcHVppD2FuaeeDER5JBasPpudbMPobNn5bQrRHNzrMxts5hx59kri7fMZVV4ctQ",
  "key37": "5WpmDjUKvkZU3y1aP2mhEBgAj1x1jAymbqtAKZ7hnu1GNYeXh1aATvVUBpGfkVoRo6ee9SSfVggoFZ4ciwzy2WHR",
  "key38": "2mV4ks6unXv7374GuMCGNoZrfqoDwwRYq4HPpgZ96zdKsH17WqMWv6ZooGUXQBrWSGmWmbEa1v19QrePCFAxTVYt",
  "key39": "4RVZsCmtN5ZBncXzHUD4EkWd6pYHwtygDYBJ7y4bfAcupJ3kWhfWYnm9ss6hLxK1jq2MAZVfzWE1cMfexT72sdch",
  "key40": "5AyUrghepaPJKqWkQbrXQ4aMNhBtnWmpwCEaqpRi9f86WG15HuLuvYTubvqisovxAtei7cFhwnWHtPQPAgzQVuFA",
  "key41": "2RR87a4qfAb61ZNVWhPXktLHwBUXSpGW6cW62tGJQE7RCBMbUnZoAHaTXXabNxTqwj3Nw9KbS3HCr5BwsxgbNGjF",
  "key42": "azeV6d2qgfjQyAi5zD4E9nsHDdv84Cz4ZQVZgUNugMoUEFiQFUQrmtKACRrJU12YL8qqtcYbvQ9h1RpqEMV5vdp"
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
