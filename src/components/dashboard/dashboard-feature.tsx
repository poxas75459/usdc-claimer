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
    "3aTPaqZNhYPichHdXzyCDotuqepQvWgENa95uDFNPtm9Y8ZhAxNNTe2bKiVUVm4zXVbccXYcQQseogb6sDLRVH7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tib9WS2vs28weYMgN4NP9FoJq6Z3Yq7woV5Z4g7Db3UC9D5opWN9QAJRPvt4KSMBkNkw5W6ucBB8szGydD7jYGd",
  "key1": "3PZUz8RVtjsWY8k7H5wjUpkM2nwQ2sezH6ZdvJGLXxfwxM8cDW7aAcPWj1Fzn5Wz8EFmbsABL9tZKBLUKfFqPY6E",
  "key2": "5TPN8cDEyUn7oi8m8AnAF5J9fvAFT8PhCdZdqf2AZYRiCw4ksEHpTF24VMH6ioo1Et1ceAqy16FqRezpVtfh6UpH",
  "key3": "5iZwkMrq4HAMqK3XYki348S7jg5vtU8fgEmn4WPwFXUei1bdMjDYH9VTWZVTEsaAcLDJotoRHMB4n4iPeBYbFDHi",
  "key4": "2DZ1i32J72p6yvNHVwiaqjrPq8rbwfhEoi5UhftMU4zL7V84o5GsfnwYkoCFvZrNWW1Y9QCoD76e5zrfcTQaiadV",
  "key5": "a6ygx6h6rjBoA3gUs8rw1ckm4njtRb781dtEEn5SZQSDDDfReQHK14moXD3s4yqnZHA6XqWXoFSYSyAhBTuK3p1",
  "key6": "4VQzSSavR18TK2sKTZF2Ut9db1AYWUKTcrm7fbm6RycYjDNdTnbJfh1LHvXTYt9kjd6kzkrdQimJoGLbka7d6SE7",
  "key7": "59tRM1iKS7TKHpdeKjnCQFbMjYKbHCB6Km3StF79t8syoPhxvm6aTyp5hM6sYn188RNXJSs2ARpG2ikzbJAEtXQV",
  "key8": "5vejUHmHzh6r58BA2PxnKvf8g8DSA1q7gigh1nysjiXAToaL5TsgBjz97yte13RmGNEksizivoQhd59SZK9Tvce7",
  "key9": "2s8zpFEcCsYUeqh1PskP8WxvnwXun1xRjJoQ7CH3FDDY8afbGwHUEUB2sRpwNamvj5fYKfeBDnvzZGL7FBBvRdVz",
  "key10": "TgATE4KUkj1sQgCN3JQ3JMBiAqj3EZG2wpwvbr9cooT6s58nE1NunrPaqwBkjaxSWZ2UAbevZyckyfJLLa8nj1s",
  "key11": "3XdB6RFDVALfeezBA5zg1YuN8ThGJoukj1WKYWdtXtL8p7F9Gq8qPMGtJf6DLmFkeU81REtGNoKeMfjYAPm3Si5j",
  "key12": "467ELRDXguPAssmkRUUCGWcnh4iasLw7tUarzxzGsQ8dKCY3mggNxeD1B2m3AGaaGyPJgT7niR8m9dzCyQWmrhug",
  "key13": "4jymEMsToZ7FCbyhn775YWq1Zen95uvvBgRs7zNnuv2t4y3g8SeEEUU4d2p1dsED7YVRU6Amp4oJenjRYM5F6kD9",
  "key14": "4P3nUDJa4sH467RWUZiFc3ZG2ysWMG5BGWUNMLoubLHDS8iENPnwvheiEEzb84G1CMMnsb21iexL2JynxyamnkJG",
  "key15": "4QbV9cdbVtBwnhKfRWJ6R55hSpwPVTYKE28WHsKAPx6HPNthUAeQZN8ys7xPmidpMbZpdw5ivDHVQr6m9tY1ur67",
  "key16": "5rixXKQ8DMrvX9dpphaxpX77CnqVup8xQGSJDTXzUUXv4qmYNd8Xa9aKCmZXBSoaYdkCnWMwWdRAbfRnyBGQrHCj",
  "key17": "wR7i1UZuKSmERcnBK7QaNWzUGLciTvR4iUYozvWVm6Sqh9ZXnuoTBiV6f7qnLxnRH4b5FsoNVTEUHgcXqhujFpk",
  "key18": "fHmLZhhBTvuY2AkaXyLp39FYmHEFSBdj5r3KTfXSAn2sHm148ZMxkLKLQLttk3Pj1p5R7bBVUBvYscyoLSP79J2",
  "key19": "2Lz2NHV9iSik46xScrGTuSpacGoYk6tbG5zazZrzF4YeXD31UPZzfBy9naWuCtVgV9yuDJepWXNqGN4qor7j8bon",
  "key20": "5AXmXmtSmPNQGpe1UxMGJdgeD3Jnns9gNxF1vRby9oobr6redKvCEPQjG87VxHErz5FP11ngo1rQmjfkpfitJZfe",
  "key21": "FyCkex58rRiXveZxdLTquQ8sgMMHCLXyvCAXLNj3UBucpo2KQrHUNebsi79PJnpsiMSZnspa9JRUcGsVTpEB4Vh",
  "key22": "PHP53kaKycj1db1rHr8CS9ZhHZ1Kt2PLq6ngkBUMyFCjGShFMj9ByZ5FmuxYKwJCbvktmKBL8m9o9o9Y2pEqvWc",
  "key23": "479w8x7jiAZePikDWjMSZJvf7sgfBcgbhq4grXYbQShDfJD4XWFigyoAzqHVKPgdRAQrjJvqbykREap1yAtMUFyp",
  "key24": "3f1YvdHFxgpJzpkDLre6dH99pvuKC7NbPzjd6ZEU7LY3XjuKv1aojN2BF1yfavcC52tUtV5cx3BJE6zFGhf1r2Re",
  "key25": "2paDLHR14GhtYazmTS6kXy9CMut1zaFbwpDJoXg5pQ5v5DkVbHweiurXJumPdSZoo2XV879EBeReJThW2EEzpR92",
  "key26": "5rkY3Yf8aaMMSyo2jRhrUzMX8KChrqArrmVQPYxmqxaDgQ38p7A8Bu4TfCYJsa4rPPFe7B4P4ue7z5FrJKbLi7ib",
  "key27": "2LASuDVGJUd9Tg3DAKgVqZb47mmfoafQ18xq7HACY3MitEfhQNbEDd6sK1jsCKi4YFy6M2wZ5mUHf5qrMqbmvFmy",
  "key28": "4DQF8t6P5W816e5B7VEp314V4qanMuEYUM5etLbEt4s8VSZNqctrZqYD7dtA85ogWC8fH6UZG1a6ZpG84LYokzQ2",
  "key29": "4AyFckpvTXm2L6TYPS1xWrFTArNg5gefMYC4AAfZ8WtXgNypVVBhpmJZ5wf8HqRKXVWJEUqJh7ccPmZLuXWzvC2K",
  "key30": "e1DKT8Z5BCX27UCzQaeYRLY8bwV4dBuHzQiWieqXr5cu3GbVFWczm4GQ2pfvU4AdKr4h7nTrcfnpJ7grBuf2cQy",
  "key31": "4wgwYmXiDy1G1dz9FQr5T7BUGBNs6R8NrTxuBHF2f283ykPKdQBLjmaja9fNoru7qsAETKkMPmKgeoD346HgXY7W",
  "key32": "4fy81NeeXt85tsMyybxqaYztDrXrvS3aqnCR6gB7E4Aaz5WiUhq4adoGjUqQmKdKeNGpjyX5Y5GhjEAQLaAXSTMM",
  "key33": "3K2aN8uRQNL8VTefpdZrKjnZeQMi8iQpx752CF7zbUoayXe1eSv4g8HqBJDKS1Rf3J4kjmYuJ94hDXekoegy9xf1"
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
