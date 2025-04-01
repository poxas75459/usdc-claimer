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
    "xxFscyafNYQCigt2eirmYBRS6fxaM2UdytazzUTnEi6QS9sop5own4nJZrKDyftLRkve9RYxCJwssD3BgQG3hTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DGpVYBFcJpuAEz1LBRy79GCbbGirnW773TgqYvLLgVZuZezB8p9eyDdgoYeFvoj6psCc8PdZzLyzsCK9SSY1YE8",
  "key1": "39NhrnQwHJEF4rsD4zjgtPooPfPZv583Xs5ruiC8Yk67SWRbazY378bWBQ7qbpx5ecJoVwjuF57aFRC8K5qHsQTF",
  "key2": "5ccoYQeDPsZ1fBFnooXeJjmeDdxJsTkQfbTLGtqiwSfGeVtzVXdEom6GcSWNroLWfWupSw3YJZh4k6ix5H1aoCU7",
  "key3": "3xUr1StPFTH834wGgGmPBgP2KExWPnYbpVQBJnZNrBL57Y4nieJLT4ZSUqNrrhE1VWjZFpD2zgeWWgbcAA3hSDMS",
  "key4": "65tdtFeuSma7cBYMpa4UgdTvzMApBPUTZmcz5aYnpa9kpNqg7FLJCjkZE25Qe9czDhXiozN3FseDXtAUA2PepcxM",
  "key5": "3jrfszKWticF5bC1j1HFKvQ2FpGckcKZ4CeVaE16xDZniq9Rq76gxQG7KWxt6PX42qA4bNi2XBJmDQas7VwKSVPj",
  "key6": "5Vjiv6WkapaafTf6Gq6KANxRhNFTivaGWVp5cx8p5TUEpAHwK1k519mikD5LAM7PKeaN6Pf4Fz29bM8p7LwSgZd1",
  "key7": "2jFfzazdB8RqresrqpKD7cFnsbzzVUFF9ueU1D84Tf2y2WBpdWeQk9pmQ72ipFCTCtxda3JSH5noWEKvasu65PjC",
  "key8": "5ovAPJhjP324MWRkZjWyUTcjwqM1WdHu5rU9dPvLXGvcq6eZipR13KcGYLeRSRz6gjso3pBHZugN7KRWbNf53GC1",
  "key9": "CYUXJ84P31EkxTLLdPgbKieNHj3JkLjtG8FUk3BuKcpDaG6bjfs1D4BYQTbX6PyfZ3Lnt3LeEuSsnDzc6vhMf83",
  "key10": "5QesaQvW8n2bBpHucucE24kiFM8oKwufFANkPGf3dHgJSwaFFAQQuj5N9dPc5uN1jUoqw9KLQeRTGoqYCqjmLzEa",
  "key11": "3ppQPyJiq2dYZUBxrcxNmqMoR1WCNt2e56RpA3fybaTQaZe3qkjgAWBLPxDjTkQeBkWd45TxFRqkDxbHdtmmQPAg",
  "key12": "3rgiNZoiAMx52FpnRyw7pG88228iWAs5QfoRXADnLgobBVDB6hecxkRmAe79m2RGpF5c78XSdQj3NBZ3FzNa7M6C",
  "key13": "V4XTfAirvaMEk6TuMvmWYQ246YRoPv8r17qdxzrBvx2ExHw6tA2rCM89d55XFo3pwTT7EdrF9SXbdMHVXGxghSt",
  "key14": "2qAV3VUBYmzTus2bJL2BA3safVYdbiNgY3UzCrSc73GkWxoQKx1afeCiGNhE2uNEnyrmncNZGqMLuouuoi7vjqKL",
  "key15": "4KHhQiyrRib1WYR2TWyyNgmriAkBeodD9fSMrPQK1TA4rtps9o8AjL9Ai3eRn21MhmMMd2ZAZFUPG3e6C2D9c4if",
  "key16": "2TtJBFZedjGqrSbYCDPTBT1wSe9q5aSnKd7s5GGUCtjKQ9JH7CbfpiYQoYYqq9C6fgQEAAqgYqrofZeUr61nmy6L",
  "key17": "66pLXwySaKcTd25Q9wMMDkhBKajog5j8U8WC5ZRpr4FgD14BJuBXgvPS4fzCvHkFpNVSqRdRGxQ1k6arayYKo66i",
  "key18": "2smpKv2C9d9866XmCyHG2bNnMnsNKyMMw2xoXkS8pqhjLzdzDsDWGnEuF4t5qxFCeGWkh3rHQLcryYcNHEgWZhbL",
  "key19": "2dxEqPG9ruLXWTEXxrLVsdD2U8R7ohBWoLJg2PrrcFvsAds1w2jQKPuexGDMaRo73FyYB776byu9oPUUB55V1hxv",
  "key20": "5GJA1Mjt3YJ31gYiJ94haENrh3v7mtGFu7sxFnZBLwsJbji6s4WZ7PW4by2JSPLz8eeCzdE6tBTy7Yu4v4Tey6C3",
  "key21": "YfGZWh5w9dFHpf7zxuwvmV6SAcsFjvkVWTLyoiKHX2USxdb952agbbmJbC3cgCTaqZ2ckj96PBixu3YXojh7YM9",
  "key22": "55RsptxMY1wVV6wPfWmHjmGSdKzKXFvL586sSYqCXoBpNpZfBn8sqQ49ojR27L3GtgYenB89cbPAPT8ZN8VxbH3h",
  "key23": "5WjqZj11nGaNvkToRbQxQfoJzCDCDHMGcY1PewV4AUvzd2unuJYjtZbXdwZttCoujBoqZuD4S9WsiS4cBH26vsiH",
  "key24": "124ksMnScY5LxtK2hmoqy9WfoDV6Wxs6TgeesL6LgxVPFebc1kcGwWfjXpKBaWWoypiNqmYvKQoNyeqPd9znBPNt",
  "key25": "pYyBzeGUQ8PXmK2pejoL4Jumh3RD7S5mXv1daaxJmS1UbWfeLi8QcwLScY8TCYtLHZumVEvwwNwDQPyKd9fBhUC",
  "key26": "5oN5m9znpbMfHB9WN4tPUALQUnuyJEmnSBFejme51g3TiySkCEZe6zS4FRKer2oPPPQFwvFJwM9Yjh2hiSPffxmA",
  "key27": "2ZSTux8ebhnUjdTC2RK4ft8oD7QckM4MB2ZLAmcbusVumQqtxMbHW1HJsQpTpFcmfwP3DhDRXbDGRz3mPcMdRuKY",
  "key28": "2ZA3R21wtDNKRTYULuHdHKrdMFro6yKGamZZypsBVYY4u9mq8o5FfNgf6XaG3PwV6wEzS8tYA8VgxKcsWr5K6M59",
  "key29": "Box2TF8Y3KivAiH58Kc6t3sVV9fPKjrUMCMe77JCUsKcxAChseGsMSo2drB9e2Sg3EHQQr3QTue8ZumFfhJ4HHd"
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
