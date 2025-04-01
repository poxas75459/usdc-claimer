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
    "4823T3t2dyGZJpN968wfGnyMFq3SQejaoC6RqUqbZdw9j44J54ASHAFarsVfMi1fMFFnB3y3PXCACLiK1mh8R4LN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ZKyPgxj4LxTtLKG1XjEGo99C8xLBxhY97Vz8wRTcmd9wM7KYzg8dde3Z9WEJxtQEizTfWBZ53dXXaHjLverN9q",
  "key1": "3xaTKFEGqtU9ioGvRstHF29NLZZjGfUY9cDxoHcbnoLb2qk3sHEFpa1p1B2CdgXuK5gDq8qFU99XcwaMa27yTdTV",
  "key2": "47foo8VQoirCoHJxSqKyFo7DaBpwaA19L1UbT5xex37hQemeP4s9TW3P3XCquryRuHFGy9m3dBRActjzeitB6dyP",
  "key3": "5MN4pMFDENkSRLYrNLyQxPMuZRVn2y5wmaFqV5JKS7HBUbH5ZuXufx4hcEERRD6f8jDU6iEE1yv85RuN76X36suS",
  "key4": "4dPySkcSmfMGjk7hqMqmqg7ExmBnDQVv4PatgJSQCnDWKHnLaBJJEJvH8psBs3SkkMx9tVKPytWe7Nei9sEqwTAS",
  "key5": "26RjPn6goZr9KWHrPbVvMRvLSmG7iWo6GXNYge21ZiJs4tPcj4f2fDtCaVWHd3sKpibaELU5FVczPBhzG6dDrQTq",
  "key6": "3UdrmNBXmFxn4SJVPZZtVedqjctxK6yDapBVzRJq7Gncr6ikExpGcDCrkNBdrxkrvmfrNCk1NSK34rr9kqrqJ1CH",
  "key7": "iUavqrdyWvN9h3QvtNFbzLU2M9PWRwbeaBvTccYGGmptAXq2qUJNHTUVe3RDNVLtWxDNsY6ziPf5g6bys9QhoTP",
  "key8": "39d9bSHYuJN6uPyCutuM7kFkiAfehiuF16rxhM6uSezMp4UKYb9p84Uf25durdZuiR9Ne8PpMQZqKDvMXNy5VqXX",
  "key9": "2YJ21iQoWXMeuPBPN3DrLFPBB52CcbzFucuEmiH5m7eeyLCzJXGkuX8daYaWd7DZ66QH2eByRz6ZqpFpsQQK3FRQ",
  "key10": "4w9FRR82vvBAHEZfyYuo1vHf1QZwyypQexnceRb2dCwf53xLRGfUns6Xn2awrYNtJcZ1j6addknDLCq8KWrpCfDf",
  "key11": "4YCvJiite6fSpyjt4qn1PeGQGGU4S2DJvep9VXVNnZ5CW93xqLh2fATJiheuPARpWhdnkUUUBYFbdkFQqwxca6AU",
  "key12": "25bUo9ezCWgmVm7K7cu2uBKwLUQKGp4LAYwU95xcTrGfQosTpJUwkd2pWxs5aPPhxhzUw6wg2G7rQrGCMmdCh7pc",
  "key13": "LuXymav6dezWTbEYB4SyShCf32GEMYtS6qiydkfigNfxwpZ2hpgWdA6hz2GymgNyu5a3gjdS63xsozU9YEtBaSw",
  "key14": "3rWmQ6zPfNobxgFrGFvD3nh9ZE1PwMRisxRKCE2ne8VtfB4oj5nrEKa4ne9t4fpJDtZ59qduBUJfAeaE7APtxca1",
  "key15": "5TXhzbykQxjkZY9N3fAD15vYuedfYQ58yk62q8KhXtUEsdmpfxZ8tjdGfxCuuN5uLjx1wxpgZCiqmkGttgu9xv78",
  "key16": "2n4fCjFmyyhgEYi7AVY3mucaccc9rN8n99dvW7uL3LyHMEEdesnR17ddkRhAJnyWjejsHpLzqnWrmruMbMi9TGXU",
  "key17": "fwTvqygsYE1gaiRuZ2uQZd4GJRRRChtEzFhqLgaG9y2dAtEnZ755tmVQoCoM7Mad5FCDaALDTSE7W7ccKLHQnFG",
  "key18": "4y7dyMNY7S17dsEmSgsFPgZhQKaCgz49KhSJevxey6H66gaydAwm657Kw4btTsjvFYXCZv67FiUzWKpMFUDBeYyV",
  "key19": "4svvKcxhk9DRgE2yDTBKjCgsMKiCbnk4yugaUYtVqZgcNKM6EaAqd7vs2L4LBCq2KnAT4H9LYv4wKjZhrnVdNnUc",
  "key20": "3ewqPjJVnkq4PK7MCpAbjF6aTmmHCtavby8on7LtdXqu2thpkhEgSkf4mLKCrco49rMYS6nts77nFaRNZ43n4JF9",
  "key21": "4xzVmhhEfcCnPra4eKwbNqtTgMeSt4oLNPTGzHWxiFL6gbhoY95wScPsAajabRzTtjikR7trKFFetbLjBP4q1xdc",
  "key22": "5E6v9a3bZ7aLLsedboHKhnT1pPABSP1wJsJAgpi8yDmWWN3NjLgY6HmgsgxbJdeARKwc5x3c2GD3hbmMUWzg7YHP",
  "key23": "2Y3GZ8RhGtczpiuG16HtdxZnuHeJMn33CKHjrKQnKQKNm1SbivsSw6vqYsNVEfMFroerhyc3kHBoYChacWejRsAG",
  "key24": "5sPGJrTfcsV6GA8UMjL8vYBxbFoRFBPGEVKz57NsLCEWXsNaun3eNEmFu3nAtwQVgWrYg1r6oW9Dd6C3CFZYbHUV",
  "key25": "3UTPz25MESNTRfK3hapCgJucGWA3HHzsq49Ky5Q9AyxuNCNjG21r6ihPcwAVbUCYBFq7B2dswUQGfZ4ski5Yc7mN",
  "key26": "5jNyeU81G7Ams23QLkPL9FG3T2ijCJsZ9UpxeJBfJfeLkaMjQkKZNSPXiwDHtq9EB9CFh8h7g62MJa4QtkFaZiBc",
  "key27": "5N6Uhhp6W5UeJrLMPjHGsvsE2AfrF59RzFsFPHrRMqJLiJf48D9b7EGRJgShJ23NbdwuKutNrAFovizkaV7xh7zk",
  "key28": "2PxwxLvN9ZyuNZcLyeAnsCYAyMcheuRryqqHS88BemuF6WNxdj6yPbBJzzshv1aVvStsDsGtTyKdhzZ6U2Fpq3Xj",
  "key29": "6FKKZgAQRcE3qysbS1vbjn8MsYvpR5bkdkt4AbjYPi95YjL5txcSwGgexkfV7rqnPs63dfNycLWM57w4jfHaPRC",
  "key30": "212cXSviexKj3E75DuBmx9mZYEMpKJVCTmfAF8Gk7mJY3LVx3xSEpz2RVFN5JEMVY1DvFtUr6NkDbDGGSP4BFGX2",
  "key31": "4e8jcJu1WLB7TcttMVYkvrqfYJMttxUyesKtG4Q1w42LMEhaS6zALyV4DBwJY8vnefzNQySB8aSeJKVJ2V7w4NDC",
  "key32": "416Zsij1pJguoguAnwyHqpb75QSHPForFnQZ76j9C6H4dgWLTVXkk5SmSRwZYMoTANkzrqy1oPrLnsSAhDrLRkPH",
  "key33": "2B1KZaKrnqmPTfyFa7i8CtszkUUnMD6RRv6V8e2LcUfLVmEFo7f1gCDBHw8midvrtob6U7tZ9QYPyprMz7W5BAXH",
  "key34": "3UrtJwBB3HpiAEanYCf1Gns23cwJFV38cHxJUFAJi3bPQbwmvT2pmTrsXWYqFeUCZm9e5WvyPNWbkn6pH5ehKLdM",
  "key35": "RdGaWEAXvWApuTzchHiwbEkLZgCjyzvSyAk8RwfGPBn7VwQ7Tf5QVNGqec25e9UAdcvZ22Uj6Eg3aiL4Q4f3sqY",
  "key36": "3B6GBUq9LH1ni16pkKBEXtyUUoSJzHDm7daUcLKnxtMqrcrL26KX66XKjt6kB6DdhwKA83JENscdxXJAF1XGffBH",
  "key37": "39y5Ck4cLtgt9sKY7MRQAgAgsJxcxFPMVi1wErrCP4pFujHZdC31sdc8RWovwZNLghD39BJMtyMzDspXBnNFPXR",
  "key38": "5RcjF738eNBWZttc7wdWfFxGmrYA6wmTZaMMGqdSbVNg2PNZsc7av2r9VrdAPy17nENoXfpumH5oZBdmnn68wP1r",
  "key39": "3JUZQLaqAR5Apw4TsoSksjmkSNuH3jDQzA5z9wXhynRpUmWyzUqKZuRo9E2DxsuWBDqxg8D9dx9Fhen4YVTs3HrU"
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
