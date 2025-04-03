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
    "cDTXSQXMFQpWGKtPsyupc52u6f8bqm5bZMsLk2G5NZJCiT8GjaZzaLCnWVnRRKk8nV3DpVoR8dVqSLmsKC5RCCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xMFTUcPacM9GtbfoCckEWcJD2au4dWJTSBLyNM9kbtGAkGHAEWYgnvvMNPobDHJ3xkQFRoZyw33stupVB3s6ER1",
  "key1": "4xjLHtsA2oyeXEfXWpDSP1WXxrvA9wAZPdYPFuQNFZMUwJEEzRAiuckRQeaCvFPfSCQKP5L3vVooZpVBJVrTxG2j",
  "key2": "57QSzNngiztJaj9SkXgKfZarE8pGJfCzVTSoaZU8ZbcWMAK729zNaP5VKgvgby61YAWiQLgAnPLH3aDhkFncjtpd",
  "key3": "sWggp7RXByKV4QQnjJQQPbar3MYRptjYCE4VJeWoGzD25U4xTJShgC2uod7R1PY51oYXUXdbV4wmC69dyAkqjve",
  "key4": "qGa1rq4ayxuBnGDAyvbeDKTJrL8hKpWwGxQfFeaXayYN6H4RzK6EBvZcfja647gPh5QqeHMk5sWzbHNRA2CEwcT",
  "key5": "46BX9ZxRvHJfT6JAytY26jRPCu3uCckNakfcUVCRFXpc6SctR8bvSyMscfYWr496xbrDio87ofMxx57mzgzgEeZB",
  "key6": "4jKDBTkg8MFzpRo4dFuaYsugCpc1zBSxZnDPpeYeeXpeGPC68q6eztpxdpziApNB95iZ2gHM7wz6Vq9cDutcgGG5",
  "key7": "2N6vvGd5eYodGjBbFr1GnhQuTvCf5j7pLFpJRPCN7Z8VXwTNzwABJfNsd7KHSF2E5fcoPB5JfqwetzWr723fyh75",
  "key8": "Ro7KKTmjcdkz2ibonxa4RhCuSAPhGYJd9UJKexSqwvs1nhG9suG7zCnrykFXaFvxc9bo7KeTbGXMkGWnHmXEM1B",
  "key9": "3iwuN6PmBQjaxjTiU6FE3uqgjMrmZ8xJUoZAteMMykNY3sWM6RsSTTEF63LjBya4P573FANQZGVGKEoJh4Sto5ZC",
  "key10": "4Wuj4xaZqkKyp9rgbbFN3afQi5vUBEXv2P8GZMzVqBz11EEuaNnnAfG5SB5ceSBGtQanJk8YDBXm5E2DDQyGSMrp",
  "key11": "3t6sDBjiBidYFKLdhCuziMxq23AnBQhkSjdCoQ1FZTmMQZE9FWBfL8jSLv4jcMcHbFhS8aLrZRuVGhNJ9iTGMQuz",
  "key12": "21zZHav9VyXSPn7tCRqx7ochGMR8Xg2Zzu3mCzdkjGyF1xk6xYXwnHQdoFGJsXJP2zuSpxpUtSs5X4fekGxCqsTJ",
  "key13": "2gvfe9941cLGZCyz9EHwXVMbaoXHX9uEaQsHSWkYqWpykDqQRHfowTX3zNqyCsDBREeYkLtXJAKKnv3wDCc6p2sz",
  "key14": "28GzdDBt77czvBgs4z2tMAPDjLy5Z5GtX5nXn1iQ54XJppYzSBsPy2iHFVYQY3spFGD12u6nvES7MMbcD8Nq3SQD",
  "key15": "5Eb5CpiPZy9bsDt27Wc1rBtamgC1skGQyG4P8kkC1ef9gxtNxCCY78eVK2e4eRaCsmosPYbcZtTKKNw3EAbbpNGC",
  "key16": "5suwizgx7uQg7LWopDHqcp1KtYNrWYuFgggmNCD1dMDq4Kci18p5veS2WazSaPEefCYXxPB63wAXxsXRgfkiUg6s",
  "key17": "5awoWaZYwhKT6qhf9utHqE5RbT3m4WwCZeKtBf9HuDgpHgExcK4vR64K83KJtmsPxRiBcdGETtKFH1s4RK1u6ZfJ",
  "key18": "3j7Z4gNvWXVpFEFmTYM5e5vL31wNAhvuitrmb6TWyFFhnfLRhCvxGsQ2qkibs859TrhicHsqYNtkvZ63uTUyE9oo",
  "key19": "5Hm8YiAek41BgDghUQanCkW7RyYbepyX5RVFu36VaEsTcaUQTKPnqYYSaXfyCPHS1mdxPzTdj4P8CaUoLwmq3DLJ",
  "key20": "3Y5Ev92uwCejwBbiSwRFVJTBb7L96RuLM4dg1ipRKi5NTjWEoiZ1wbnKDBaFGS1FHLgfn3wbYjJ6SSrCToifGMqQ",
  "key21": "3ipWCzLamnHWvZz3BNLzZfiXWnbmeHQxK9sGudWjJkDSnjBFMyTwgfXig7wYzKhgEWxSUsHVQsaga16CzpL4R6eW",
  "key22": "4nEygYCgUJMdjiWvA6uo8VpnNcw4dAAYsZ2zqEsYm9z5f8pHCTqZjhmasowh8r6b9eyoJoi1NqM7FZicvLJJnYmc",
  "key23": "29nLmbeqsKhsj96aUWc3TK53asKdC5BdUuSHSwCWtGRmC3Kn1P2woSnD3e5Snu5ikRytp3hk3pb1a45yNaVvzCNf",
  "key24": "dAcdkcXdDapxed1VDw7stwT2sri4dt7GvaYCzY54QzZn3D3mDnNpAsNakgYhwYy9c3JmebVm7EXS7nYWPMvgtBy",
  "key25": "j3sRdQ7cCbFhghe3rpHkJCyRnj8K4wJuf6JmumzKBtYQKBS95Ap5gf4xLeVhXtBhwqmZTqziVWLsbKyeW4Za6SX",
  "key26": "5qRy6aLQftBWC21DsZFhqWP29sm55kmVQgp1NTTv53kbPdGkUdXebzMXzu3GVwgHYiJgEcq84WhNKaGjabtkjuFm",
  "key27": "3VeLJWjWF3UNHjhV6zYtgcwhqjE5RAqrjzexmFdgK4Tc6cREukmuH2uPGDNtgRNMBmK6EZqBBq34yQnycMs2gc7u",
  "key28": "f2PonukeL7y8KkAsbqwszRZa82Tcbdon7Js17eKA43Z3RUbNJYTwf4cpf64hXTqfCDbB7xo4J9mGg58iwZzMjsL",
  "key29": "3Uhhsvi5kKyebSNLLJ5wVZRXBoAzF87gkU7riz26o8cPRSZboMC6pdAx3WnrexxLvP67oE95nKLm8CSJWmWV7BvD",
  "key30": "UJY5wFX19VXMEosUNSMdbXiXEuXe3EdjrCmspWDbZi9cDgU6A4FKHyr5R2qkvQtE5FvAU86XEzWpvZQxfCo4zv5",
  "key31": "DGtfanch3RrG3Tzfy3bxymKhQJr2gjvzL5TPoHDzTvqSNPzLSVoJmYC9aA2jZnFTyffDiYQmgPBsVnJEBudcm6d",
  "key32": "3hQ6QE3XJBrHt3rkho5mAvkKZmd8QiLYQrWT5zHyj1GBj9zcP8WTL1dKDhHuwmmUjJhiYnmREKeSWUFpqT4acKE2"
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
