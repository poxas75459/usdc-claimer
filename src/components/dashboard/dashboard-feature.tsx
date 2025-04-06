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
    "5QZa85VvPgZrdKF9smKU4ntFTtCTUzTNMWhTkaFkvwByRyq228GARdLPkfS151HLAo6NQscjRG1E9Af45JpL7ToF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fccw5Wco8exqbY8Rr4ZJ98XwwniSKWZEnEGbtRPf8JXqZKfoT3hzm24Z8YevMVjgZyrKUXrhDEpDmthpK5i2VND",
  "key1": "5uVdboksAcsesFkTbJNZcUQbnna71KHKiHZyWcVFNAGtdXo7Tv8P1GLuGY4HPjnDgedgYfWJiVC3XdyXogjndrT3",
  "key2": "D7b5brXX4AB5CU9i5Y1XQcQS9cGrk7qX98t1W9keGsPEjWxDiBZ98eRFW7EwU95cCZc4TteVjT77xrPddT1f1EF",
  "key3": "DzLUSNVQ55MFGzNVPVLem2aiHjqeP8HchfipNuVUpBG5qBJowyhZAoHXcKFmdiK5v7P3SdowKsBrZCa2PYZywcb",
  "key4": "44eVhvzjcdXVZxuETYKHWLtuNfvZsyfFhMwW4TDy2Ty7DaVKUgf3bti4Hrs1PxFmQFyyTEgsqYBhdiNG3pMdxbTA",
  "key5": "5MRpipdUMp8vXLXEWVMNjdWgtx71M3vHEEuRVa6QrjaMXBi7ohtw1xm8yi3MskjyKjnKF39Bq2WBuKvDwVUQM1ax",
  "key6": "CGwgZZNZ4v4tzy6JfULjMMfzPXQivkAodYz5wbZMjd9xPGU2Xg6V2hDAPuoHMQv4FZTuA2cTbhsBP9DHYWMTeVf",
  "key7": "48bGvY2W6tyPjq4LSPXEFxxXB7BJxNcgfZNc9QWyNgSqZ47UBa9gLs86d9wRkegZ72dXEh2ibDD2LmAk5eBsnyKG",
  "key8": "4yGyALLDLPwrchcs8HNWB9FMFhkfP3ru6TxAXrxmGRoBgPsUANMaSMdA5yWAVNvvcBZ3B7aAmQ5ynhqXh5iSFQpZ",
  "key9": "upeFEuJqqN9G6dd84UZk1yxAPehyR6kaSb9rzAYPjNJ4NsAmahEKC7tjfr2T7ybEtGUrDEwqp43aGd6QMrfv27r",
  "key10": "3QDCpvBBCTgHZPPCs75x5qEucKQZvbqUyC53td2GmqGdwvGXHWKrhxYeYEZGmcKVVJrnFehH7xqQVNLRrx7RNKXX",
  "key11": "5HpGf31LPmbKW2XXWGHTB8kHjfLpr2ynExedByhNiM497JxyvGXsySwEqWHrmvdeAsCZkb7CXwVWHMYGd3hiCisG",
  "key12": "5H5nF9mj6cGdpLcF3PUu3rcqqYPnitrD2UjaNoX1BaTqrdEHGnF88sspbFcYTe7AGN3ePmeYZQgNU9AebLvvkK6j",
  "key13": "3D8ADrggW44RyBQuA5aR7V1FjJ44gqezgZ47snk5qdjiTpMTBHtZAuhcTLLjVCQ9hJag6Lzrnq9W7PjNdyUcRoUN",
  "key14": "2ecK3zLwcYCKKmMyaxNN4Txc3p38pN8SwWpsPN4xEinae2pn7ctURM2Jr6JVPa9rH71czTh8g3Fkp7PX5zRMGBkh",
  "key15": "4UfgVHA6ZEkh4emX4LrXVw7VjcAVZtHxBWU14H9R71tYyqzTxmiv4LZesZXHXU3hagQAfBNHJvrrcSrewzRvtzjM",
  "key16": "2HVjUFQg38vjqyeuRcSUFoK3NTLsB32XP8DhRztmj3SNStXBnXhEeX1s2UrovcMRbih3qM4275YgQnzSzxsqmRqE",
  "key17": "i8QD3NYv1gNn2BsvCavzGfiY78xCPaaTdras4GVJuDiwRNujKY3p9g7P6qdJTF9Q7kZdt1JkyMyADfP4Rm4ThX7",
  "key18": "2spCmUfY95fNqp3FwYj3sgQtNcThrnis1RxYHbXo6XP7pXaaThurNjFbgUHLhGEto3JAbDEAPYoadvwq8mc5Y74L",
  "key19": "iJSV8CA4kCTLeJ6j7wnupUFztUd3PgjnJciHAGqtEaEL35nTcK42rsSUYzBVpP9JFWJAGFipjPw7ypzfKbbAXJ4",
  "key20": "4KhP4hQgTtkm3JnQPew5XWVAXBWKoRUCWFHbvzcVU3F4SuB6SSWNo6wGrXP6nUTDLoFuWL2vneyDt53XqruhAsCN",
  "key21": "3CyJUv9vPegeYgKnRbjJ9f2uVgBdaEna8qSfpMgPwbfhqbmZPJSEWSBapAmjBqytS6jiMo34VcnSY7R6oCbtf4zW",
  "key22": "5mT8WGwznN53UpkwjwYwtJymynkU84oehEEAnaSEsDMJaJdVpTQy2oDBUyh7FcB7F8eway1mX4cqe7MvcRD5Ga5K",
  "key23": "R7fnWsjrCb3tQE9wwBSLgj96CzoLLEiTg1EiNuTJNJe69sjAJT9GNyiJ3o48pXNRHDrGhMQF1pkopB1qktTt7NT",
  "key24": "2XvmAraybSw13gZBCemWSnu5EZweaakAtL5ThHvkxxLejk9HkCvJMtAFx8QiKjCFLJPf3YoLaiBcBQbeGb6EgWh",
  "key25": "2hxyCkzVVjVbCU247ZhHnasHqqxHppG4ZKUXZxdRv2kx9HqEPFbR9vUkbei3bxgZj8oNVG7pvtrS8gtpDVhLB3Kz",
  "key26": "4CKtNw7ZgKa3VgeNUk5c2GweJTwbwqWSuQtWRyRZADSduKH4NxGgY7GkQtbbWEiehtXeENVnVYzKEqn7GuRpDEsy",
  "key27": "4qo2SGA55oZrZ65SgGZFx31wUv8c9ixwwZ15yb1hPJHShyR8oc4qe4L6xfKhQ2TBBWxcwkvebpwck6m8uPaW3r1P",
  "key28": "5WeW335eWDAHfrxA8rTmmmYzhWnbBDwrzt56RhCJzRn826ZFJJeUtYHQreZaTMAZRKyfGXsDyVrzoGKgaCVDBXdc",
  "key29": "3jSoTU9y3HN5mhD6UWhaNLBfC5UYjotdphwqFWoVTx5hspoEq9GHCFcaLbjbX95oXTvHBNWYCQLnZZbqM3t6dHu6"
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
