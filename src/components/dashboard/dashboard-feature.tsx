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
    "64m7Su3SR8XgeSyUVmEezRUy7XaMrZt4xwAubqL9Popr1Du8rQmY5kkZD6Ti5ACAiV5pc7pbhZGsurgUTr9v2QNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SNNjRYsYoPfYoGFwNWNQcz7NyGhDwtrivMSfrjbzpiXZEXM7aXM1PB2EQKUgDQJxV3E3AJ5MynJqHJme97XJxX1",
  "key1": "66w2wahUGqFKN5cxpwwSdQL6LmD1gZs465aa5Z6oUPRFoxd5xWBBfrvzk2rHgUcj8giyriFzRJzCGHziCSZe4vJ6",
  "key2": "2PxLBzNcfvS21Yw2mhrX5HT6sybbCyyvtGJVFZyULcC8FTnJGjJCZ4HRgPMCYWCsKGSw5nQB3bgQqUpuWUGoVepn",
  "key3": "3pySUj9L1FEpo1e8n53L2WngfziUkccpKuA9woPC9X3EgghDSHpS2JHcgATDKP345GHMkGttxJEy4nAgjLHtumcb",
  "key4": "31poy1277UEhWPnfaB6AawP85xxsRYsgfZ8VCJoXcE82fezkif6q8mtkxiM3oL8Rfz3VmhzSULqZM7d69CUPeu3d",
  "key5": "2owghpBsTcD9cGfekHbDrsyHsqQMsv6YgDKDWmHmmX2Y6U9jHwUDLDZmcxMKzJ7axZx76qiuAri6jdHpddMhCB1",
  "key6": "3dCYYdUQQmiwrCL4oBXbvZ93p5p7bT9P7r2Zu2sWmb5fsMr2krKg6FM2WMP4TgoMFeJPbZ6VeaNbQmQgbp4FHXVm",
  "key7": "61nJhE7oW9JgpntU5yu18wfeaQR1aP7PxwJaH4phXo2DwS5epmutoFKEajYvz9NLg8jYM1zNkzo7ELonoZVF76Hp",
  "key8": "4H2gEEf3AXBcnbagM3Xh1Gx52ZzkQY3Nv89YBcAUeQkp95ptZtipdE2hbQMbVtx5iZM9ga8XSkmxygo8rZmjHQTW",
  "key9": "3gNC3xV6k1SaWEqbTWNYXtDHswJqPLASitbSDm1QGWvcZKSsdZsqS9oQTVqiBfGkaaSK35qxWmbEpjfrHo8V4HFe",
  "key10": "uvCtJJGg1CcwGP2nh5SWikguH1TY7ydimNGbi6S7qScCbpZY7x9rjFNoQvDdzE3FVVpmxGuBePsxPQhcZqTL9AL",
  "key11": "2tERDKow7GPFnagkSu1F8xcwPnnuFoAGCtaEFV4kTYWT2JcKV6mbZC6fMVN8ihQiRkHeq8yEy5vog47SXmUy3fTn",
  "key12": "3Lu5p8wqd6uHZZraGkH2YF2CFnSZZzuo7WkfUV7mg1WWophti8iESZXzdB1aGcTW4XQLBfygRyhpmtJ6fF8eKyNv",
  "key13": "3WpeofPvzeeAN8zeeu6grop6SWBFA2AjBD5KMbKkyXUZJmTbxSE9mF37grubPKhkorX2TNWPWTS7WRWbn4kjx65w",
  "key14": "3xoq2ZFhdRLqsWL4T7Y1SUq8myG6LSw31m6XgGnmBr2zPVm9rJADw1UtBkCC3Kv6jAximCdQnoJB9Xfy1uUS48sf",
  "key15": "5ZqSupmTaruuhybAkRHfCxAm4Zcw3dZuter2hMWTs7iGpMhYm6b17eNVp2ERmDxfF2WTjWW4n1eWHoL32ifNPEsU",
  "key16": "rajRMpeS9UCMV4NKA7vQSJuR7YBVFdCAgoNcRfL6xGPMEbrXWmsSLUrX1zAVj2s3iFRqxpN7Rg36N6Lf8BkWMLU",
  "key17": "2UR5HPF8VaC1geLwUWz5whsuEvfPFTcz5JE9LNKcRxAs78dbKVNwtwpVLx5PoRPhKcy9eSSfCVqzQNTXkyDY7WZX",
  "key18": "63vrMmEpJCbzKhWDKzWcyqpGw5aB4GsTTDfFEUuWvcuiZoiYtYgWJrwKop6w5TDcgbJShcPYjZB5ZQauYecyevfJ",
  "key19": "4xvP4ppz3GgSkN7gC832QQaF7mQpw5kxE9XxUFGAkLndkz8L7Xmw5B1GsjLmKaTppXEnwwk36iDyvg3qUWT9kxFQ",
  "key20": "2SM3AaVFN9W3NvMH3BsPm8QqwK3QEf6FdKEbJ7FgdBHJRA6y5fMw5buyrh8URb4W6iSRJ8tseoSPChffpzmiWkTZ",
  "key21": "2BRxCWP2av21VpiX7tQUm7HUWo6g6QGFro78K722EFhiy3adB2XJJCYinP8ZYh1aPWxYDsosbG3eVys1R3Z2EocD",
  "key22": "4rJfsAVR6mxC9XTCUb8xHFXrUCfDLuNcQPj6ea9RHoyi8zLnqSZ6Ad1JhSLX5QGu7oMcUmsGWKe8skiGZjT8fcW3",
  "key23": "4c9RTQ9LghGoHNk8QnQsRsdU3yXN2munkouAWBZYMHHjCGdkYEp9oDQYbScHDpkkD9x7b7VZoWFrxGAnfiovQakJ",
  "key24": "5GdYHnWTDajZ8FTP7H8YXeVm6LHuSs5oYGGztBKS2FmrXmAPpmgfBG4DRjEc9B7Et7a6Lp5C2Eztk3nhaEQnkkgh",
  "key25": "4sDNfjkMSq3vTw2DSwC7VxmANyJyJYjmd7BmwGS6SVzzhAiyiKVqneGTvPFGQNAaJKr3p5LPb3JC18Rm2Z3SHzHi",
  "key26": "4mpefCNYoWZsAY94aiK4tgZPUmVFmFKy3fp8ixMVPkH5xuJfBGaTwdtLv4NJr7akUb4yY95cuKhoiQbN7bLXxixW",
  "key27": "4i5TboWG8pFVLkN5juZfX8PaZ1LSKHkL4e7JGVppxTPbb7QC4a9ms8EYxNuGJTrdvndXFgFRg8x1yX8XAQKnx1PB"
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
