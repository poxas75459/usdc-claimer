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
    "4dTgMXJgaiVwZKJeTrGYfmfaVnh8b7ewGvbP4zMe4UmNGqBm7sMTHQek24wupJxZV2Ze3cztF8eAstMuxquxoXB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BK5b6BGXNm5M4ztZkAJKpkL3E6xniLEaz5Wc7h3H56KX8xjHiByUepDnbuYXKHYh66Jsgx5ra1BevAWnuZA7GES",
  "key1": "2KczPL3vsyXdJcmxXBfhvMa3dJ9LKqpMYrAejWxyVJYdApuQ5y5gYqHgRB16WQZ9SNFcsU4Xo16qnDEFnECRTzFn",
  "key2": "MoQgXWn29XHJs3kYe6fsDQpXUfpU9UsEekmVdjRcxiMJVgLf8HGBbK29gxs6mAyBeMRQ4jLafYJGe2R115mAoN5",
  "key3": "3qZudztouHCwrY3SUPmjzcdGWagDeqZot1vyejD5XMwoxdVcD7PmjniYGNggtVUjsoSv8Hj7Jh5cMA3Ld7MBE746",
  "key4": "2BAQXKudkqswnh9kncB8JjoRYVgFspwCqxkTsWrPuzCQrae7Td3Lefq495KUDvn3mUyfrEdsKUCAkKbfSr89HSXy",
  "key5": "53YsArHBK6jQZ7wCS2r5jJdF961ub2N4rE4po9JkxTkmAQHMgWEsJqRspFZ2PJeAdXVeSJcuQhneAPhip2FSZSwd",
  "key6": "4AG1RQTDbXKxaRBguceL7UPqVyDsoHRL8oiNDHsopqkrf2ivKrQCcbMJXnFq6frh8fRhDJLAoZzemDi3RyVvB7wQ",
  "key7": "5AdNKnQpytggGCoFzckyPW3u6PqD8XGiFWp1CvCqaDKNws8NxGYLhmkr4esE4Xdh6WWWPQSVA3xRUfCBcBGvuZ5B",
  "key8": "5HNnVDkBh1Y9BjzH2JYDxSJpCP1RYV3Dyt79WeBERwSXkyENtSFM6Byb2rkRWXSNba93PtZeg2UbcPjeyZ5BP3AX",
  "key9": "5gGmxaSX5ccDz225pjebqpJLewG2qKAxaatMT5tQU7PmZi9EBW7qya7zuiAHhtb8uTTjbG6udKKti6bYXFDzBGXp",
  "key10": "276DCUJPuRaazPj44wjn4yfHupjLxW1LF4PXHF5r8vqYtzqoKzRQj4Jg1mBrEPxWBLgkYvJBZsaxLpYirYFUNTdS",
  "key11": "vGs8wY7iXbxXg7BaG4ZuVQ69YZgpvRS9N6apsyD3pbKo5KM3cS6UoGB7EfrYd3d9Yu3FCih1ZEXs8ccCMxZUNwM",
  "key12": "2Vo9jSLhVgd7BncoNJC2sCnDNGtQBYPnu1YFFFiTw2TWq2io8Xws9fwMmYUdREc5DQREdVEQsJWY15dQ8PpQZCSW",
  "key13": "3kG1KhkoASAvwzBK2k7NVMobejG1wc4oSczzNS9ViqrXUoiZ4k5iSuLAHsVauSo36qt121J6e3rFBJ9KM9XgkwLg",
  "key14": "629ZyFrnkNuz2esEEdCecxspXATgmHyCjGiuuLH9kJ9ZQ5xbWjSasCR9TARKBdiXHBeDM4Wi1gZhutXRrHUHP2xJ",
  "key15": "2KEGR83Ymw4dnUjRFtjydsqpQJcb9Z2CJauaPLvY464LACcb9HbBiVqPFpwMbWg7Azm1cDLtS9esrQiTungLYk7J",
  "key16": "2mLDB3GuLKpuxJfxgSMjCkdAf2Khbm4CvDV4sUvevEq7UA8baYiBGGuhVznJGkzRHeV7gnWYQYjc3nVWsUuQdzdk",
  "key17": "5qsZXZENNw142M1Np68H7mSoYrXDAn3GmdDyAWPAPQCbGeh1fHJ74dtSkKzt8kDgVkhhASjAEc5PzteW1qaGf95S",
  "key18": "4cXaAijKVuVMwDkCeH9eoSwLc4VX8ZtnY5BZXjHL7Pm4r7WoFinrG8KPBtHZWt6hKqNVSCgdUoUoEnRkUVBLVcqv",
  "key19": "4kwexLS5oeDy6L5heF6QeaE7hKFR1RN5yXhJTeP6cFACMLuYkh16R5xyR4Sm7jYHFbbirosmrCmheF9NLxWVPLNM",
  "key20": "3DWX67HPkT2EJtD9A4RxScVYz5bheZLcydBsBtd3EDAKGvXDgeFGoKPKHbaDcLXpJWk7rzf6e2haBqdvR9FEBgGD",
  "key21": "2MnWZRybVRsRX4FCNEVniF78D7eHAkHKwNEhzqV72AQYRyQLHtidjSGnJX3MudYw7MXkkXHja4XoxMVa75qTb7QM",
  "key22": "3EdwepWzQ5XyzQnYQtviFPsowKc1BAdgs9ymUrERznNCcCkupcs5gbpCwwXpC1JB528x9wPUmVhMLGjmsswhd5sN",
  "key23": "2JBBSpAQqRF8jYugRz3F453mmsCPMzzWYGY59VEztJaBJT94YjvyGmd96TwaXmMgLxZVexweYrtXqaK6yQc6LdSn",
  "key24": "DFc5L9iZjjeQPCpLju6CMXeutXioqNGRm4RDrnrruVwRNigEuqXSGRB2QPWTsynNrPwBb9xn7wipAZPEQCyjQ3R",
  "key25": "415GZEEinnxubNHPuGMR2TophF8AB6oGbU72jQG6i2CyEv42t5x2GZy4fJxx8bcgJJTzgnp94dF19HHtFijCeUXb",
  "key26": "216QBm5eWKYKNjUEQNDcEtC9NADEJW8A2h4Wg6j1ListcMVa4A8qnpsnz6bA2WJnummBaL1wUUu9VWBk2C6VQMMj",
  "key27": "2akLX4Dm5obvbTFv32d2ggkjBGsJtj7M1EyA5KnGiBywt1oan34qEPBxmMP5prY2L9UnKMPYJcZoFxNTkZ5fer38",
  "key28": "5bcMXBYpj2A7pNJTEqZqqxqebxdnayuGQ5wakvWgwJyc7qrWua4C2HikCUGXRhQvJ5fUynS5r8vs7iTWuGzzX6TM",
  "key29": "2AgvHH7k1kKmQZcDAxUyL7Tt2qVwiKYn2X4rYMY4kjn6m55gWbfxfij4Ct6nm6MBGhdwHUZ5ydyPsVnvmn1X6qfo",
  "key30": "2z7Lb78XbmUzobHMgFtW8cccELbNjj6KUEiwx1SkRiMLDfiK6XBUyiUtPMTdw6C16GMbE8EAyfFHFDVvYEm93iTN",
  "key31": "3dWUuSo14XofHTpcrcykjkLvj8mriCusSAkg3yBbgidRtqGyWPxTq2rAcnYh9B76ydHA4v87rQay8CrBXyEgTSrU",
  "key32": "57stpZ2cn9JdbpNTQ8C2dy1gpD3mDwMEQbJmJ78UEgDtiKQR6mHdoPensS9wCjxtz7zmv7RxBvsjBDKeZQuRqxsH",
  "key33": "4p6EGNNv4ZLXwo9piGWUNtawpKHVfrwFVZD7Q7fvLk8MFKKCvcuNrUUtnveTG5GRtJ2P6vFZddRWSmuwA5U4dh4b"
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
