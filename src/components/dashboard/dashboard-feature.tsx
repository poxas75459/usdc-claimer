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
    "F91tFCUrDZgK3dAvz82JVaW1ftk7yi7UrgF2y1xLbrD9UkJK6xis4ZCHVZU79d1EBh2d7Qr41MPL1nhw2LBxWqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rREjV519A9vGePwX1AAcpU1EuLBDYM9E3kTUk7hHTyyrn6CbEULrgdDxRYsUg1oSxr8qV5fdiukYpdBQJqnsqCt",
  "key1": "4YXBj28Ra7skG3BPnREwJrB4iVKudvLAPY3WM75mbiKnuuoY8FZfw3TvaPaq73A5fXE4fMMti2TaTjjxKh542QUk",
  "key2": "5p8kQ9NL7sUWZKTrv8hgyY1GxP4g4YbSy5rkf9PR6m2aT3eLHDymXTAZtzUAxNhJUErVdaSxfLXXxxpHeYCiWWYX",
  "key3": "2qR3JT7NSnbyqLovtZXSEhvaiHrRyBr7upCcsg3CbMJAWhhc2yDb1BNX9tv8bMLcXTgH4Rmx85yh9inwaMJHHjMR",
  "key4": "jTwqEhU7Rz2iE7wArSBoJCKte6zZ4bNsbWGneTzWHWwZdAMjuwkJzBGkt2BCNAGmPhvZyQcNdQkUntigmmtYfJS",
  "key5": "2PVMAjh6DUPJcbE8KX2b8z6peBNzYtP3FFhwWu9jYvivv4zrT319evdkAsTGDUom8iEhAYJqFPTbBYcnHvCD7Nvs",
  "key6": "28h38BfjARtvkPZg8DVzFjxNUS5btYTP5iYR8FrupDLy3GqoZQMUbgAARLnPDAu79hgm8qDmyfw9zh77xXLQeMtS",
  "key7": "28eAb5pfbJEJ9NCBNNGANTvQapw3mLVpFqiYm38RxqzWu18LR7cMZLr6Miwkjq66yaBnPdetqatCQSsEpGVVwfnF",
  "key8": "qPjhCPu9qY6M9cVzqi5Azpt1RLZwe6sybzTJtDgK1WK6ZVuA89Lpa2cqqRF6a2Gf2RkWyhHFRr3REekstjB31b6",
  "key9": "4khcQXg8VWqfaV61TsyjXgCLZet53UbhY6DyeqDsucBsqkctAWnKZbXoiPGZFFA3YsaE7Uc6aTAKMtDk34nGZsVg",
  "key10": "365UohqqXz6UjtbMVR3S9of5M6mSb3xP8ZmMLKFohKZvVYzkt7kWKi3gmmcwSMVGTw8eCDBsxSecWHdveuLfm6h",
  "key11": "66UF3TUhTzUNTJrGPFSXy31zz4kD2XmZnYDhoND72gBkEuwC5XY5vgDoRbHYpcYd6gxqhuRerS1NxV1Utf6UgxfK",
  "key12": "D7CJBwyTgGUM8MAsbQTu45oSozsEWRb358YLiFwQnTsgFAZbMnsBWyXMupCCUAanHjGyv62kscQME8zy6ChSBhf",
  "key13": "2fVVDAKbDf2ZkMxHJVjXpS6gLPZJRseYceejNCFAUYciThi5CJ5JTnKpTs3ZUWkXPpB9QuiKrsknX9k8Qb2GRnRJ",
  "key14": "5YHTZcgczVhnHsejksBCXcRyJami2vvu882PCxrWvREAkxVP9u1K4NkjX9hmZFPKzKV87kzNGxebp7yFvWYCBB4y",
  "key15": "5teuWr3yttkCjV7JezuayWdW3KYbWJEgenW2NgZiEvzWXDWcKD8SXK36HYdSpXZ8oi6hc8zLgyxWmcPR4bYc9HwF",
  "key16": "MdFpPEoZJUfN5o1y2uMTArvVa2m69ptaVicirCxmiMhNesZAfwwyrtG157caKw29M94jWuFP5JhK1DrZM76GZby",
  "key17": "ber5j6kUJy9j7Ef8TUtjgwCynRYHRdrvEq23hwrkx6L4pJDbGQTdC6CNcJxqb1AnN6Xqq78XiYWst2mWZ3PdRwr",
  "key18": "2CQigBMwrELnWscMWfS4kKjW4RgbAic5kSJKJWmm6ySAQNn8dxqB5UZ4tEqj7my7BEKJppR8hb7hZ6YYp6125rJ6",
  "key19": "2dBHrT2xpbmxRcCfb4VXb52QP6BNQtJCFSoaWZCH3iqm3XTR7a1Bbaf6iAGEC6vXE2awBnaLDkPCH4iGYaGPhYH",
  "key20": "5Puap4moGk58QJTHqNMXsDvJ7j3ehaNMbgi6tvyaQdQTQA34YPLGYcCT3AiAC4qxpv98BB6jQB9SgibG6FaWb1aN",
  "key21": "2ysW2owzjgUnL1TixuyXrFYKYYYSyx1sz7tg52HWifnwrXaqUbhQHYDCr3jQ88cbfMXxBjSwusvXD5LVsseHU6v3",
  "key22": "5Htx6h8Tdvrw1nUGW5GCv8NgvZmBkGbPuCqMLDLzdGddD9CzghLDLCyyB43xAARGuTgquWEARKvR2mmfCZuUiaoc",
  "key23": "5uUfvvoFJapfyxVh9RHVqwGaAMHE7E3J8nXD7WCbkjej9jRai1ZscX8dYNJQjQxDpnEEvsvGGw4ApEWqQr11Y5Ls",
  "key24": "49YpZ5xyreR4GmAWh4uhz5Hht8YFGgLwt1JN7Yui7WTp4Hnma47s5rpnJaWRvNXWuvDJQZWeFKJcAwmTNhfk13bw",
  "key25": "JXC91H94yHQqiCruQ4cuno4MbC1H9E3F5FZhzyb3jMx9e1HPNZm7XPzf5n7JbWQXpRWgYMJtumc6td7QgDYJmaK",
  "key26": "4VF3gjopCb4Nha2Kedj1mEAC5RptH8LXMFaC8wyS7HU1Qg257QSCShhZMPDXAiBBfUMYj3wqxEx2KHWDpfKUMaS3",
  "key27": "3MuPecMjVw5Cjpc1kSaGYvYnSNVoYfS1bNBSSCA94bVCXEn2fsQB7gAr8Bogfp4nrZPd2mwTxoBBXdc5HjhT1mQ3",
  "key28": "2eEq7DocQJchXVZf9wpvMKvKeLx5ufzucxUDBjp7LxzYipvHZh84zoqYNuFvuVjz1DJF15t6Vi34aJkPBJGvP4Ei",
  "key29": "3yK7Y32Kd7267hXvKwcxPdhpjNYxyyp7HiaT3YY3GFL3L3HbKdiT1LzeBsMP2QW8CXN98N94nDAeZpEiReZWmW6E",
  "key30": "4r5sYC9nyvGnxA3AgU3xwc8YhWj7BVWpfyvZnmMUC1HZj4voVw2FKtHiCBGezYz5zJ4EU43VhENcB6dbthN8a9Z5",
  "key31": "C5kp8kJeoeXw4Qv3qcygwnBMGBnc8TqXXiP4yxJCpZiSoL3RjgabnB2hKHzxsQYiANx1V9GVaQAutTv58rQToUp",
  "key32": "5sE4LyWvXpewMT2dPkNrUBVFgjANGqiWTMtpd9NhuPpDKRvjGDA7s2WCpXq4JsAPLgjZ9aXeaBjHMieD9SMbGh5k",
  "key33": "Pb9Z3WYSvPxxVaiBjS2tcZR6sRb5dmmMEzrHzbeFqjzYrtBq5oEWktpquaVaofv7ancdNWXBuUtAUcLdb7Z5UcU",
  "key34": "267Bf2ori4FHzodkmeA64MuqEFAmsgpANZY5uJEDnRRRzxUqLT5FmppcMvdV5FAjFWvW3HnjkecydnzFFbrheXn3",
  "key35": "2kdMjLAWutKj1PKZzE6NUWWL3GTc6TDjktMULLhgLBiRGLx5EQ89yVmnrwo4kd5bJkXsmY6Y7691kDJXn2URQrme",
  "key36": "1VspS9tgXR1cTPu8fCXSbVvq4YD3KpYqQA9wYhryDq2XHNLUajedL4UVfkRfQFhDbrw8qezr8VPKz54tJqPxquW"
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
