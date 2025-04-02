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
    "5mJE1MTx6Ag3FUwCtdqWtBcKwWcukBNCsSGWRfq5HnfLa8LZMzpgL52GPLAmX5NZyNBspuh9s6RZ2TNfm1FsZyx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fKtbaH2x6b3a9XxhfTBtN8VPFwB6mBz2kFLARJTT7eQ3Mukw8wSkjNwZDbvmVQsXidJ1pa3htTQhXW93xKVKdDH",
  "key1": "66g63aYfhuDkqZhW8GtkSjaS4wv5LNzx6kYvBHiZNKdq87gqf5waNjxUe7P3jyJHnssyyDTfevATDCiMNvoZKv66",
  "key2": "345Ma1ck5pitR5BYZArns8ZpFbPMNKeoxy88C8ojg4vMeqQsvcgNVEN1nus3EGNayhG86TqJs4Xvrfgo9x47L8kc",
  "key3": "4Dn7DCWKMgBQxbRqjm8FRrQY5asBXqJiN7v29kGszr9HTk5pB845hkBNmJXvap5hChkUY8p5BGVgunQzrXfUWtdy",
  "key4": "476Bmq3WR5Gzv1w6fgqrqZYYPjBMLegwVY3gMcMwGXVEPxDuH7e1NvUJFhTPxmT25hhjjByVVkNWScS25yLy53Rq",
  "key5": "YVNaApNkoSed4hWGrRovHpxB3c6kzLgKGMu6c6ysmB8rSLKBZhSrGRoawJX5E6FkA1j9mQK5U9Fh76i5LHBh2MU",
  "key6": "oqqAxGb5dap9biH4Pt2387fTzvBxvmPyvSLBqHoJLegsKnekwR6kLbq6NC129hGR4GGCJy3ZKDkMXsXYVLHTC5j",
  "key7": "3eovB6TZXQRGVfTZeBMZ4hiadyxHRFemgehhqoe3t8hfmsGPutmyEooDikH5CpP5mie3SgLx4frU2o6ptSqk5QuB",
  "key8": "39H94bUYzLy8YtnVKyBqJfbGeucX5J4GbGQFZDzZqodRTDoeJpGBU7YAVxYD3x9byVk4ZWSXR24UYHREj5aso1DD",
  "key9": "4aPZWY2ZmbM6DcjXiwiuJmrm8j8JtZuqCkQafdiBs39GWPS1X9yY1HLRekNHLJbzUwH7adFC1XAQSSB9dCtfzJW",
  "key10": "4WMAtfVA1E45SS5zoqPLA49jbZZwShxH9BCxzmrcsvN6mtfRcTNw81KY35ecPH7MSXhfHNMTDvtREQykaDwNBZoX",
  "key11": "2K5ANfjzjmNVkpxVdTNL6pTTeCZzEDk29jsHf2VvCQFY8wW4sWxneGmPRz8s7UwCgPpLb8wegFdT4A9txxLKVZFd",
  "key12": "ERvnMiz7mc3tqd1zZw5Ca34A5H1jsC5JmTWL2JtxtrR9TVRewNKoQjwBdkGPkeXVrqRabCcftLQiFbqLkvdfY2V",
  "key13": "qriNcWssafhZzzy5LJJrrKgBT6RLuZ7TRJ8cBdF4Lq17cjBJM3rrS8C9McyKoo8waVEHncLrCSrGekY4PSG7i5w",
  "key14": "474EdGUpefgdcQN4WvriL8fUM2RTL7BB87hyZg1MiAKC462B93GudEuhPkTzAKRxrL4LDUHuKuquabvF6uz5nNi4",
  "key15": "2Xtnu55YQFLXZKF9G8ApjVqgJUxGH7UKCsAu5oD667ZdGQX8ht88dexDXVWFzhfgU9bDxr4reWCEYzn8o7CduqU4",
  "key16": "2YBgE4BRGAf8NnrPH88BbS1ETZPCk4EPsM9kCFm4nyRzVghz2PFx4opMkUiyv7rJyM3MFDoZCiJuerw2BQat2dVP",
  "key17": "TMYqnN9BYPL7bRPtFALJw9R2XqYjASxxPFLMjWYfFptTLcmWDbWRpsoZ1jpP3vULLLrQCF9QF4fA2iZb6VXyGR1",
  "key18": "4czLPR8BaBR6CrsWZ2xy5bHrPiZpQhnwpkt2WFsFtKxo9CbK4yrnT5yQWwmeZX99FbtbXSUaYxjHixW869mpVWHk",
  "key19": "2cv7TCK74nzn9jN311V1Gzv2gPVpzqc9zjTXDiscQkmHNk9hibkeiBGLbEXQTjXkAuEKst6gXMxEiKtj8MxDQmfi",
  "key20": "3gzLfgyKWYdp6BR5Usbzc2mL7J2niNcCFBwEMyRCcfHwCJfEwpGB4N8uvPQktA2cPKz8qMsMikDsxsXqQFRrc6oh",
  "key21": "4TMCtoqKwt3c6UfyFFDS2L6Ro6vV3LMCwRvgNRV4tX6P4M8qh5Fv9i2p18J8cyfdWpyvDfUFT7Tbvkk87gyMCLDu",
  "key22": "61WPf4Ze2rpxRe9aiSJtQiwKCnp9Uv1Qq8jekVWbqULHKrXFp2e7aSKe8DmM9hK48cgfeU3usxG6jFzcTgqLtbQq",
  "key23": "635Kip64Qg6NwRf7hKfzsVg5YFLbLheL14qAhBPWJmb7EZAqgx9t845KopRZDQDqSmKYxkox91UELjzEAko5Z18E",
  "key24": "2j81mDUCnKAvWkhxwgVYj4siKUiGzDSSDbFkErWyroWtvq3PghUUN3zXVooqtoEDsQWsTgRSkxW9nHVpVqAeyhtB",
  "key25": "5z6U5zj4nhBU5GEinYDHaFREdkTSGx2K9AE7eWiEGU6vCJoo4WxM4GSbu2jEjxMAsyUemxE5moDMCB43Vo5mSojb",
  "key26": "RNiGSVpQsqzAsGQcafMfiRyRHCvvXCcpw2QhmT4xGut6EYDJzHCP4ADucgA8Yr14BjTAtLxUW2ixnTAN8hZcLEs",
  "key27": "5JNaUbAAcr9mgMuUYFHJUcwRrM6ao4sZeyTBvGFrK1X43uqpXMXUjDiXvPkEmXqtSMrJw5x7po5LwUad28jMSc3w",
  "key28": "4YAFWf1ukbHJFJbCfruBNc583ZKtkvbvdFFF1q8NKy3s42VkfsX29vUEcESDRrBPRucz1ZCC5cqdjtsv3bXFRwkW",
  "key29": "ubGuodWftaEPYrnDS82FGBnyMR7xX8Pkr8A76rn49vZ5eVxTZ6gYPFaxzuNgoGMstBjsY2bCx6hAb7uDZWKpcGk",
  "key30": "64x7t4FjuLQU5ZfJ2ZcggNYSrgYr4Bfe2MHucR52YdAEueUqDezgHZzmzgChVamLfoZhp9AxyCJMin2K8XrCGJEQ",
  "key31": "2okPD7BrCQkaURCqKNY36dY5h6obrQZdgqWUUbUk2LJbt4pQTutdjkKniZDVAWHZJLXjDrwphYxe8K3LQzTYZju",
  "key32": "2X421tVHLqJMAv9UN9rKNdWaMQKpULpVZCTcKCjpM75sJ2rgZkwHagLm4JNRxMdNR9EjjNcsLKjvyR8djh5kQYPz",
  "key33": "3nNch1smmt8fLaM2VkrSxcky2CHLHZL1KD4x7szW7cKf5GWnd5ncjUY5BVuGNtMZBftq6Hv317xQfbE6M5dJXqHT",
  "key34": "3Eyyf7nAx3XhTzrqF3kZrDfytYzKD8z1toyfwpDHemDxwYxgLGrQRiMevPrRsFzL6GncRcYqW8gpeLs8BdFywqDk",
  "key35": "5RDwkokyK7VT5vL49RHxAVbxYhnxMnyGNpayLK3oeiU9BnQ5tQzZidmgyFKtysL4gzc5TJnfm7GRoRrBqyDMVC19",
  "key36": "4onr5hMBucSJmffST9akTj4DRnrjv4N6usnsCdyN8vYafKxYGKWAP261jJXtFsfqQSztSujMiHTk8XiaEb5yUf59",
  "key37": "5FsErgQpwhKkTF2m8eZzHk4P716ansFas69gmz2Qc6Vg4QoY1jvanNqXzqqN4Wmt1rLkNdGXMpSdfVEa4fGNgwca",
  "key38": "4zFyCQTJttUPxG3PXahaiYKN8KnGQPuuNJzAEzkDbUZrHDF6j4LyAPrHZxocPBe1YWx6AjyEFm6r6ydNvx1o3H6J",
  "key39": "3gYuWko8HRbyXRUpVc2eiDyNWnYGvvkyUYBHug8bGL5hwpvTfWJfqaAvuAVzE4zfd6vGRjUyTLNjcGHZ5gvZW79j",
  "key40": "3zTRQGY5m9ioiJhtRr8BhN919McDSyn2jwG9oLmM6zUvdMHX9C1zXAvWeJdKssBYMXvRkZSnqfdV3GNmDconw23n",
  "key41": "N4wPF5M5mNsPtXg7NQXSx3w8bLZNADP1RPvrtAtHLvTs1ha88c61MFWXVMziBecC5sx3C935qrqtQYgFf1XKSNw",
  "key42": "Ak79WjVENxgW14LpcNFoNnyLV6hLdjgdhSbqTRbQXmNFU1MsyZCiPupjjS8W3iG5eeYr5mzb3GRg2V8FMRgg1cT",
  "key43": "3Do2nmUWYNe8jgibdKaiGNnfes93w7hvNPAFSjSisPpoa5RnJsmkzR1KD7ajnFg86dezKNh2B69vurFmZLcz2bAL",
  "key44": "5m7LUThSBz3NkxC8jE1TQDWrWfWYbKUcyoeNTDfM1Q3EXed7sPvotvqkcww9KpABDLxrSgLipr4Cp66HW54JXEfy",
  "key45": "4QkBCYFrs8dAD7mSZmPkEhRiyuS9v9i1LExEeg7fvV5YQixQGkfPACXqXtFoABDZk9g1u3xYrWiWmxADrZaueMwJ",
  "key46": "5MmpHB3SrxVF3fpq9UH1ENbpQ6imMiay8zU6Sm7z5JtDeZjcmLCytrnGsB9wM1PZUa8knRXJ9itdnM3uvuzY3xGF"
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
