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
    "2HfZS6e8x81EUqEktCz7UaSHXH7eDhdACpxz4bPfpAzantYeooV47yoxRyVYFo1DDYKL5uK7ThEWAG1xcQsBdios"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F6NuqPMqBMG28YBUvwJo9bRyCJqecU2jZRL5y53niq66763jwVJ5TTpCeoDMZXcaYpDaCBj7TXycC5WrzoKqpU8",
  "key1": "4KxMLczczE4fWzpTMhkY2jEZxMJUb5BHekhEs3ufJRjyZDGW1D6RhAiNscMmMc861XDgeRyyzFupfJpiQE6fa1Vz",
  "key2": "3Uy8KL12WfVSNi8uJT1gg5rp5WSX2Sh94V9ZSTcBA6cACRGpmBfXj1jJwaVog55BiLKb6JtSf3LNFA9QPWAvGbUH",
  "key3": "H4a2u4sw7PcawhXSeVtSvucgmcC4zfknQ6nwQY7UKsrqQfEh3dxbq7gYaNmP6PQ5pBheZQboweRTHb1GmB6df3n",
  "key4": "2BQDgrwaTsnYn9BRAb8mdGwDy9QS9vHLBVKPEUUvAyDpF9Bh3cekjFExH7axaUNRvGPpBb1zsqZxfhxrwDx9Mcqj",
  "key5": "3CJ3WEXMKF5oHtomzYaCfw5VQDx3F5rBWR1KqcRqFCATkzkEMmxb9CWxBxdwUQJeqnG3LFKApBDSVrGJEiDdmgKc",
  "key6": "MPiVRmvutzfifmiATgRDmQnPC25QkvSjptg3Zt8bfAVo5uLPSBQb47HARjR4Rr2Z2v54uQGmNdVwvtQ5TNJVCLu",
  "key7": "2SCYTcyJVvS1KHDcNZKMr9C7XvJV6qgDNyXzP1h7GS8xkuha3CjR1iG2BiZQAmdW23Pyn8cikczJUux7nRUmJPFN",
  "key8": "enJDs6St5oeHwWrooQqRhRCPoPBWZJaFbynDfnfN2EV2WCMJcNTFs8xiJK9uxt25L85XSD3opui3MJboQgE26hB",
  "key9": "5j19x1aRxakBWx1R9eaCSCG3CEKfiEKKGqW7CRebB1xfUgYvSBnWzuoq2xigxmjhHGyWdsU4FjSVagNm2y3ATu8V",
  "key10": "2xcq4h92oEQED48UkFizTmcRuoMJh7GZXLzzs1NXCz9JT4ppHNMmKWbT723Womf1CGU1LWnuQqYGJnUaYRSWd9MG",
  "key11": "39Uq6rGz7weznkeoqEH2xTsZCFm76HkpYdQZVPKTBKN5UPBvuvtuPSX5dNrAeuPPa7gYQECC3eBW93meNDms7XFX",
  "key12": "44yuy3MU1u3WSbaockwq7r52vqnm36NYPVZckxrxbBatcKEZfFeLzGXUQCa1MX3Uoa6XfynXhJUonR1eesB387Ni",
  "key13": "39158bC5Kve3i6bNsfnwgcbJXgRoazSj3pRQ9Pkh9MgE3nQaiqu1c5PUahdU97R3tkjGkCf6m19GsFkAo8v2XW4A",
  "key14": "5dkySyg8g5NUxiBzhXvX8fiTdL3wJvoAv5n15N15NCudcKV8ymii5UiKoDre9Cw27XKiiNbM9ZYj47fPfpFAEJgV",
  "key15": "vhnf4ZVxA6Fh1j5YdBE5GCNwnpgob7bAtQ6jeAPTXEmdjakf3aV6vKiqESCfphNM5xcAp65UCydwHmmNrPHhNQF",
  "key16": "rqtQD61CYWDd5rTCVA69S7ZRXbwQ53CCe725JX9v4Xin59njqGTa1K3A4TJ6jTXvh9zdTT4ntyHfWXmqzMaPr4L",
  "key17": "4d28pVN6yiYTQzfKzNWVpNWbV85rUKwVkyKDw6WXSmZVrZza9HYUG73zy2nf3XrJfq2tfNNXyNvJvuiwu4pEgA6A",
  "key18": "Lzt8n1373acAiAY7xtVthXXuCuGJeDk5svKybPucVaEM2kVPtyEDugEHxnYE9myEjb7Gxi27tSiFLuJg2fEQw3y",
  "key19": "3K6QPPGro1fjLFCVD1jZsM72zrHNRYVFLGjuKWfpDBhFEPXMw242WUUC6kc8oMLP8q7Bd6NfnTECmKfL9RnhxLWs",
  "key20": "iXRhWFuAy9eLwdvvAKaScpCro4SamBXFYdRdy9R2yszi1edH3z8fvsx1voc5hRXNM3gio9o2eqeBkHp6UCnDoqh",
  "key21": "9i4n1MzMNNHxySCuMMJrSDE8Rdt8bvDLHxhPR7p8w48sZj3bjy7yhPxyfuUSPHZP5KvAN4b9w1e4f8Pa4vXK7q1",
  "key22": "vqtxLKfUWjraSWyMa1E9RTbPF8nK253XPySJaEfgrDanDqEikW6xzADcLsqHGo3pvvGi7yKYcFfRY1Nv6LY796Y",
  "key23": "AGbg3BQcM4ii4meydhXqFGLQXfzDZ6Bz728Hb7zWk7QVjUgirqVdSuXVev3jTan1xpXu6ZeXg9sKZaasoA6Hd7r",
  "key24": "5ehrfGhoBVN1i3ip8TiJon4ihtqYvJzytco5f3qACsFmDdWBiNJzLNLnVpE2MFhZyEyk6KbNUUFhfmPYYv1GHgMv",
  "key25": "3rRnnsR5YU96Ly4wcPou6W7cJYQzXPbz3pKrKBoQy5X8GYRQwkuWh2PC95FGi4LEuW9ktWvYDKkpdQMi2XwRcBHh",
  "key26": "2XY8wjV7otTZQqFTbZMdcFNnqAHuUjXWG8aTE8vaxgQM9xgKpyKLJNso23KfedseJiLe4pMRBV654SQsxfGDZ52",
  "key27": "5ep1HrE9zXniJXUQQzFssJBc6Vx6J6BabbW3PbXsojYRYt2YxfAZvdDs7KAo8LgaL1eNJwtLzgawUz96H5eM4EBb",
  "key28": "PKqju4LNpR2fdEFHCBCRvX2hJaNub5Jgokr9Mnd82XKUfTUVWEQQDCYBa5o4qfaZ6MbddZgrdZHk1eWo7Kcmbki",
  "key29": "4aKY2G1gH7PpY1vQ2HnPuenHUmzGjFY2LhgqVGo7kmEkru3NuADM1hQuqBwvR1ww3mR2HjsqPLPAwXj1aDet7utL",
  "key30": "4Rn3RcuLYo8ZJpyxewgAHJy7MjoD2WQsprLVouAp5wezZWFNg8hbbB7gQjQkmjCJ8RAxxLheGVYRzhZgKjCb8HuM",
  "key31": "2YsiKBHhFASWYZkPZpo2X9sXvmMmDaqufM9GCQLB5mu1yF1nxBf9xUHbFMCfvR8DTRT5XoQ9v9otENZNTDdXXzd2",
  "key32": "4YthepYZFpK4rYwArMQ5QbjZY73whaDSiHucXWECeYP1fmB5h1LBW35wpoF3g3dgjGNNoH81pzhRGgUCbn69B5wb",
  "key33": "3goJ9MyciTGnXG2FtvAfJDKtZWpyYxAqN91WWsEdzk7dbZUupQaUuxnJopx9HpyipTdBbVbLwNN8LLcJUmtxJnDw",
  "key34": "3fvYHVnAj1Wnhvd6m5a1gJX8HBr3CGCSp79pjF9oqfyDHUb3NWbbyMmb9Gtsmab8r5XhKBJTjjQimgWad6FXWuE4",
  "key35": "2LKem9eoYVwfNNHix9QkRq6ioJvkGWQ2zFpqVLSAhEsMU8HNaxDgKh3sWapDUNNDqmbZP6sGNZQxFLDwkhu4ommb",
  "key36": "MQYeXgZ5ZkmcNRhuvm7twy4wuSvVd1X7X2dUsb1LRYDoqpbZzGedVU2JeLEvzpXBUnuA3B7ECHuswasQPcYpN9W",
  "key37": "5USumw6DTj4mGQdfwXgYTmkJGqAZWgfX5o1jArPAPGuMFMvzobdirx1mxynrwf9ZHWAXwzksG9341Mpa56LuxnTG",
  "key38": "n5MdSZ1MEEUxaBgES7LKYbyFFyYFU8ik5vmwBLg4Nakhe31Cx5Af2N3ScGrjEUvqQV6oVRLWm5537UkhT9KDAYR",
  "key39": "3cBR1M2XVAH4tXHQmksr8quCw38kxwhWC43Hjvruf2en59BWVufD4UqTHZLX7bYwY2NbrFHjxferQ3SYNfgPudrM",
  "key40": "3Bn8g831JYU17J5QSsHskSoWBoUUB4oY6zgjHZwLGcgQRwWRmawc31VvJyPCzcBDo4h4DjydMbrnFA4gPfEFHkx8",
  "key41": "5tiz9uds3wVsKAy85fG8sPgbRpV3BsiHtEL3iFr6QMi3PwQowe9xoSxWSN6xUgoRaVaxm5tTGwSMJpe72iwjzx4Z",
  "key42": "4usFy34gkoHkTfdewCWni1bM4xgw6yVfSxYPkcUwvR19u7zQT4YPKfAwg9FE26vAkDgaPKPZYmGgb1NSqajdyjsp"
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
