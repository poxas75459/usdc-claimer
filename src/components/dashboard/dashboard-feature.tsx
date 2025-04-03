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
    "8DP9Nxuy1s4FfHzKSrKs7z4d1RrSzaFeGab4a8AzfRqLwGzjyC1hm2J73sXVpXipC749dNAZCCK4HWDgumzas2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RNUYEhon1Swdr9LbuRamwSHLsvhkhai1b4asBQDPYHfuxU5pQBjpsSzzyvFKMT9VQFMRcmKAXwugAxcUGEhKV1n",
  "key1": "2unVochzUUV66JfRLamLvZSr9NRmihVaLQv3DgYCUpfUU24EW8nwMYfnB4f48cPZyX7yUvTy2qbKNacepjZyAU1Y",
  "key2": "5a8n9hYcypovchTsLzea6yshZunGboeKvCx3fAfWpssGfTnouQtKxyfQjJ5fsLVpiLrfvESe6taonGZYFzjiv1Kt",
  "key3": "9zdX94TjGGmPj7HdwHRdqieBAJiZYfVGvqQic4zi9HfSKJx5vkCpSoAsEW1n8K2n8fDk4v276qdPMNXomQq42js",
  "key4": "XH23TpVvMcuKK8bvZTNjVR97YSWC8VkE8BzHXPfTJ6gibcPwjm68hTmq59nN7vzNjqM3bW3GmA27LqtbCyCFpNT",
  "key5": "2vGo6UW39G1wkn1JE3zmVfpxSRYvszXi3t3Q5NpuMFMS6PY9tJbeudkP3622mzegMhRmZbaHtywtiF3DT6ddjrZx",
  "key6": "37TZREWUMSG8Bys55PGZCQTy22GKScGUSDpNrEznkzUNpsfT9o9Y91aV9i4mNo2VBMshuyjfZCH2QvEP6YTwyU6z",
  "key7": "9UitSmbEPMAiZKphYvmMcJK8eYgsqPYspHcs1soXLEZj9ywhn5rSscmcZxsErXdCLLu8dsTFj9Q7cKwFFhhxqoo",
  "key8": "639PpJVde8tt8fipbLvyiJD568ZY5XrGXsVVj9BjVsSBHvBrVY1RHyPN23fjrg1RpHN6JXkgBdCE4pKKorpcvBzq",
  "key9": "PJC6Td6MZhPwjM4dUFyyaV4F8vdtXoptFfjESLBZBSZR9QcgW8hcT5cY4fgaWiPRfbuuSVDk6Kn1uCzVkLRic69",
  "key10": "5PQeYB6XwmhPf47rvFrtvfuDuNQXbDuvDync84qe2stW39MReSy5srGpbLECfkAGnkya2oEBMNKX44WmgyJxJvUa",
  "key11": "32vM11h7tNXj7LKXGut7msFi5gUY8d8ZPQm7YXC6NjU3BJFpGZwpLCQhyAA8HfYV8qiW8AEZZWw9VSsnsvQCJYMV",
  "key12": "w9p7hFTC5SYTpN2g4LH78c3csP5zuBgmyerWkN6xdLx57GHdoxqDVgz57s5vZzZLLu4kp5F1LoscMkr6Rmp89Me",
  "key13": "57mgaWgWcs35ou3U6yf24Kd9DDsbeURCtRKNmuQNaUN2Me47eComTHLWZ2hHo5xVf1ysMR86s2WZi7EupXBUSH4N",
  "key14": "2a5ANGmqDm2T5H9ytZdF4NEJx2EHtcsRE9pNTgmaQ5myQLb7TWi7PrmJKLVcCzCKRFCzP3pMT7U8cfEV8JsFuWty",
  "key15": "5EKbiydHojWL29p37skgxRtde5mgTmVDh1qSLAV5TCrmsipyyZCyvtiAeQ8wip3sPfkM2XA4Jr89HtMWzvzBExr",
  "key16": "3gpHSap66zyAW5kXo9EXU1B12KWsNcYNKhFLzrhviXgqnNCu9gjrLHe8k61VKh4JkRNuQAvwhXhsg5uCTSsX5tkL",
  "key17": "WpEMFwv2UJrzwp89VfB9VPSximQ5h9eHxxb7w1DNL9pq6X3FrHzwQsGCiHEToXUkuQzEA5sU9D6TAzT6BgiY5jK",
  "key18": "mWgumFg7QApVXE62BHMGtzGjMN73yCje5W5WifwvMDt4xgvELryNT1by8BuF3NmW43u3cFjiWHmbvm4TtUU9HHT",
  "key19": "2ZswrCDkkTgHoyzsSufwQLzSK95PH9cmWcUmRhmg5jKCakADvbRUded7BhJ12Pzre9ouA9hR7eLf6eYQdXktwaHn",
  "key20": "prQK4ZKC1NUXz4qZbAGyYAj3LyvBWSFNoZd51WZ4GYjMF6LT73ZZZyQCTE1A8v4BHEsSuBiiH161ey92S8L7P1F",
  "key21": "298HP8MmVs7xvAm7gw84Ab8fdHQyNxJhpzJ5F1247Fx98VzUnG7ErPenAEwqRbTvziS36YmvDbEBgntyLoq1uK5f",
  "key22": "4P6bUcFfLpfeFWHHbWfGvC2FGWujfPngaQfQ8RxdoumHgf7oXspujC25SgzbN1rqnLSf3hQUX1yPNv6iqUWhyRkv",
  "key23": "r8qBxtPZ3n1QwjUYxameaUGEJapMYahDPTRSL4ie73qhyDRH6ZpJYccRdFsJHs5dpvE6DZH6XQP4xZBXpR5RD14",
  "key24": "3GuZFDs5vviffKaDiPRndWSebQ5UTJ5pmVPdEeAghuxaxRhn2UfVtCKoCXPdvCDJyvgZRbB84dYn8rA6iFaCUJUz",
  "key25": "58wNdKq58HiiN77b1ihrhKvfEUeCzbm9iFfLZLD95f7LxWTyDjgj97wAamqB74tVTyh9tCXYZZZERv81kVJy8hkw",
  "key26": "5F5dhbjTwgrffdUPX18wbGeQfKwkvGcnCLUTDb4KfnKAJgyYkM6DxMnVEA8Pug4qTipGFMYMKx27fg5rUiZbzPbQ",
  "key27": "2pZAtj7DH4mfP22E2174zxPvrv7NRbi1mX1pEERAkgy7tUZLnQBqYUGragMMbx7yDsrpeoekd514eonr86hBFnn3",
  "key28": "2ahH8eg1ZAsR7FvMi9WL7VAuRXTGHa4iAF18pRSwvFL1m2ocwNSav4nkdwkuMR9F5tQ6QFkqvE9yDapNyRS2Yent",
  "key29": "JuhR4jVzG2uJhVhi4qJMWP8Duw5a5zyTMSWKXXWMtb54V6NUXQgcycdHJ8xib8Wc1CiPvVfnFXPeotu4Q6Bg2yM",
  "key30": "4h9LTSmmK6Q8WXz1SByvC9broTpCFCE1jKL5FDvFcahKt9Yg7kwdNm7engTjNEddJtcc1hSC44nofneBPSfgT6ga",
  "key31": "2ydPJETh52AB1J57VxzG2VRo4ww4niuioG8vW1FgiBGLuFgyipfw1gDXpa7eBw2fXtYiWScq9e5GLfePjRxDmQdA",
  "key32": "3JrizeuT6f8hCGqRRwwkTFo6KuCTwGkJFXk62NJUfHxKeHmQ9rwX2ogPc4uoi8LF8srZBocwQgKyYKFr5VjJqaXE",
  "key33": "3uf62p3PtsHz4j7vswq1CMmTcaaob8ctxTJaV9yZ5qjC2WL9frnGUmoE4HMz64C2Hoz5QMbfpew3VNxnBV8itwH3"
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
