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
    "3sL1LhH1YraKrg7uikS7t4FugVXsJ1FM93SLR416kr5raDAXKWxRLLdv7mzYRPJLHAdML51ZVNDP5ZQ7EJiVJLf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NKGubzu8MMaxFNJfFB2UmjubsJmWLzMDwzK5CVJFaixgatH34A1XvvB5REE92pyxihrSfRCizx5RGNazppvWPeK",
  "key1": "sRn1qbL7cUhvEDGCDTwhcJfJdW9huyjQ1Rtj5SRUYSLmQhFMjqhSRNfcgdS3TtMowb6tqxZ2vng1C7HQfSRksSF",
  "key2": "47qUmGBTdrQdFq4NX4xUaEqdRJwFo6pDPhDoQqZGmytUPJejAzhC5FKgkLZxTYPLSaibwucHi6pA3pUHp1a9CD92",
  "key3": "U9v1inrA4fzGiVycRbpNMsys1GNT7urzeShvM4YcoKycS2zYtomABYWzDzes33Cc5k3QsQxkmZXBrsnAgkoP4H1",
  "key4": "2g7UyZcLJV1ntrR1Wm62u8frwEKjcQqgHJRfFPcogEHGvdreW9ZtRtHWuexs9sbwY3MsvdUpTiDTaJttkcw3Wmnv",
  "key5": "5aJAoMCzLjduNRdQhuYCANUjp86zUH6Ztt9DzwS9pSyvPaXxqNwoUsxZTS1RYkD1LUsxZNhFWVZXhhKC9dBVx94E",
  "key6": "3yvowS2WoBa1qysFPrUFC93xj9iis8ndwur4uGfBb1eUdyZ6ytCr44Jk6xVt3QU5XySs7S9zSTeswmh7urkrhuum",
  "key7": "5YT1UkdmF61rCFsRAyDfatseUpUgQLFqST7JJCf3uxKjsWpD1rB9xBJcBQ1GG6QqKFZEvnexjTyuCekTBiXEHkLP",
  "key8": "DP6uMDXkCzpoG5zuSTMm1bpkgd9kJ1sBKYxQ1zqVaVZhgmmvAUp9R7iZ9EFSD4gNNKWgPQUZo4JDXMUYp39TZYL",
  "key9": "3GMLED14V92FAqzmEywXQTDdptL4nidPEVjubzbKRpUVpqLY1Vr8PYoZ4W1xyf4EssVXSMUjuh1ki1Kernw32Nm6",
  "key10": "grzvujpDfdHzDbQv4NtWJnqd5SQfrX5Q85nLu1uakSTi8pjW1PLutqJ3tG8uXimfEcYsjSGkumiwabDCF1XEbTt",
  "key11": "63e2i81kUjwt6HzvL4FtJ8xVZAhdQaygzxZKFrtcJaD8J2uymKzJZMvCvhFT84gSrvVMNiZVK8N7F1SgWKhQZT2j",
  "key12": "3c3aiK1zUbqaVhtgoXyYa2eQPyzs3ro5q2NTtiP1dzS1yVYWGHrwn8jo8ZAnZHx4aYMwLCk1TjUt2uASXqGEfzc2",
  "key13": "2gK9Dn5pJicBF3JLykzEd8E91FjmjtkDa323ZHvMYuB9aSnrVLLB86yVjUDsrXSvk9p4LiD1bMtKzejfbJRu6xSJ",
  "key14": "2M5pfwfRQw4DhgEfbQeMFkUPJmqMjuBdG5C8L2sWL6bQWsd9Xp7XfLEgSgJA5Mor5w2RzJRjb63UMoEaXiWrhjsj",
  "key15": "2uR6BzZinsHsi9mt5wEE5yQuKxmbkq6AcNeVJBPd41acogaciADsZYcDdvxmhMxvcFmYdypA8nnRD8d5siFkRf9S",
  "key16": "4LYLqyYjXEJksdbsqPf45xGfzP2xQR1h2Yqyt844jUPJjYTxzQvQkUgnUA9krdMKFQKMHj7HX6T4kgLsxbyLALF4",
  "key17": "4rm27ySbWCp9wuL9fLpbKz7MNfnbptZTvXXoojd4tspvA1rAiR1KyFzvaaekU27vrYcgw73gPmW1Mk3d1pJ91MVT",
  "key18": "waS3KVum21L7Du3f7uAvmgsymb38zXf139h1Dt3Sk6SsmHYoTocGy4LLJkusLLTo3rLes8upBkdtmAqe9AJEnEr",
  "key19": "2reD9KMqauGu78UwsipfcMNVbbpoWTjV3vVEN6RnZnEBiPmbz728HxFdmL6MSvccJK1b42c8uqCWdAVkXqGbXirW",
  "key20": "3wmxWJbnZp1gGn2pE8p4Evf799PcV68Ais5Y2LJBTaTsYdmMoNA1vADyBxHVWkwFB2b2mp4LFRcWfpBFm9JGEwiK",
  "key21": "2xd3sKCW8nQ69EYcrgQ67dUoNueEMyRVrPCLMLPURLPfbfh6cJv4R3KCKoN93DnckVtBdHWJcpSfzC8tSJK8zArD",
  "key22": "5G8QcUDHFuT6scayfKMtJsZrdyCWTupMjkRucQK5rXgYGJWAqafeV7PT97VGaixjzHkRcubXyVMY9Q17BLja1Tau",
  "key23": "5zCZusbH2HigeVS6yXkwznuQmVqW4XTJihcBfAzZ8NXdT9hY2pVr7UNeQ8NXuTYLJuSmcgJiXGPZoaVYjwXCqL2v",
  "key24": "5xVM3DV7basNeR3JyfZh1GZNGJTKYujo6H3kj3UzA9FFHp7uBnE9B8BfwW4QSrZBZojcQvBSrJ9Yaj32XLRYjkAJ",
  "key25": "2e1hckXRvgABFdLJf7LE1WSf29MXxgyvspTuThLzM2c5g26ZevW8TVq4gNXtrxh9iyCAd9ZoLnZgt6TgUeWgY1Fq",
  "key26": "2FGsNV7nC2BEftRbbDXhKaz18HxJMJAn5EHjEeYPmyMyYcN1UDFVx99ZG4gqAmJ6ZTy4t8uaVsK7ChNweoC2qveT",
  "key27": "4HA6oi1QPmkw5cB6Rffspg5iSm1m7uVsjDZgfJmcSXCSauUjn5j22i964PSG5eEWyd8WNJEAiRQT2mNmfWLpCEwc",
  "key28": "36wDmeDXarjHFe5QnJGghUWB7zodebcsADAWptHVqh5cHLMaJiJE1pZ5627PC1nTLT1Z81R8ePdBxJzhMiBs1EbK",
  "key29": "3ACs4hvMBuq2Yz5SQkhzZfEp3wEExvrEk3bRxLzLT8UcpxK8oCkjUTjzSvb2gFA1893GKDZbZze4hvn1e6JLsQz2",
  "key30": "4kMzbUChnWroJvEULmiNbu3RYYVsNd6dKjjCbzoBQwaDqt3XjNtvdcxRHuAQRBk7jRzs8ebkUNasPvNgAkreYVXk",
  "key31": "29QREh78q8LyafyVfackBz538TcTzVPVtHKdDBLQNtu5F52qZnJ38tnB98BEAgHqUMkrcs63BHyzJQstLnacvKJf",
  "key32": "3ZzJbRXDcHFwwDsNuNEuN94fmbFuNEjFP6MsQ8QPa7ry2vjFUGvNR39ZXWPRZL68K8AjddjN57NNx4M9P81TJGsL",
  "key33": "2oi1MVKPwqkQCetqgzTxBYeM7rZ186q5LB6RqhXvmHy3ZyzsF4AMfxHVoHf3ivN7a9NGNLTPKh25jLFpyVue91kn",
  "key34": "44EqDFTsnsxf1JAL1GGkxLVpjkrQ7vFUFTFibBvCnRDWHmvzJ6Gi1u5AuVBvKxg9RBh4yYVAoNdwqcHXADKWb7e2",
  "key35": "5LxPaQkbEh8moH4HroAoRS4L3az6KRrpKCmys6LkqNpLgnrBfL7FDT6ZVJW21fD3gaPQWkQNrUg2wcsVAy3h4sMY"
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
