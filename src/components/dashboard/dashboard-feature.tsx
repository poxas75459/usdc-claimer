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
    "3E8yBqCAxUxiKuxjDZjJNFV1j2SU2MKHnrJ8zPgyAnqSKhykbDGWod8QQLo82o95i8NKMyZfRhHktPhX9WdoXCrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28KuCaV7DeWBePYdCUTLoTrScfFJEnVARYpqTqSDUDnk1wbmYbwD3GtyyGrqBSLP511FCa6NPNtd7n2xYBi6doD5",
  "key1": "2kZtLSyrYgm6AoMUxJdGqCSTEjAE2d5pSma8jQMjhCnZp6ZtFa1zp6JXHNb1FUhMt8WTWLeb4xiP5krn1vrBCVnT",
  "key2": "2mEXN5cxDxU4LcJhaSwyGMTHd9tuwTqpFpBxTc33s13yrQ8Qsj928Tu5AUPsDapF1Mcd5MS4uUXS2CtdU3rvh9ud",
  "key3": "3Vt9t9o3xiBg3Cn959wiGENa3Qp3JQJKecGhEkCfH4nyYQcMAeW9Sbr1kDR3yncrAkgDsCSZcVypGUTFsWPNscj7",
  "key4": "4y497ugiaxxZr7ywYSpb3e1gphygYVc2PvNEwMTJWX83HaXbcDs4586wWmQazyM8781YCCz1JGmKN4mZ7SMKRLzU",
  "key5": "2pHotS2dnB9EsoewNCPWXSszKcY4ZtCqMAWbLY1UeTnLfADHTCGaz1L6bMpvoNUGz5tP7J6GAbVeaMSS91z4UMj7",
  "key6": "5ZgTb1SV4u9vzbsqgiN5moqcgUGGi6dt46BdYYWLYTRFkgJbWfcHYHoDRpJPaf1gHctaF26ZiEB4pcDfjbWC9DNP",
  "key7": "5z1cwZwhJcSxR4xMYAky4VA3eZwCk5k2W1cyrKjSxWFqBt5donfu25Tm3whZm6K8SMjFMYW2xHjiZji1qX276pHC",
  "key8": "31Dwn2wRvsbTGuUp7h45MsbwDBgtpuBwEaXS2Tt7yjyGLbDG8fZGWXwaaj4x5rLRz7Uro29b64rD9bfgvadFrKqu",
  "key9": "3NprVhXDRxyvv1y5AqyEqB2NVAASsfvFPNNB1Ecm3EQeEiuMkFTNqgDZh4uaV5aJjopMpNLCsATYLiakbwfmxjdm",
  "key10": "4M6WjMJJw1SYhEVs6CBeNsSB1T2yo3iPz3LW7QXJghUgANsk12Pn6MeXNZQbYPRbjkswf8sHUN8XsczWXoe9FrFq",
  "key11": "5JQw99nMZFo84SNM9rUP6jDdX7YmziAukY7ysvSr51cAE7Dcxnp3UQHeviKUqVQXo8XkLLqjuqE1Xhy4tH6rUJr9",
  "key12": "2zL78dmvUg6zBMSdTYZPVMqyqoJ3zN5r9bm2Z2XkueHDjx2MmjF1MNL9ab9b8skgu6Ywjf7qHMrDo8UV2h96nBhZ",
  "key13": "2oVwKQ44CkqsX7BB8BJqzKzQpKjENKhoGSkGt6HKCg8joEMynRN5AnztBWz8jJpCjPLJnPpQK3YdFcbmHjheG3rJ",
  "key14": "36vz417nKPVGYiEHeWUjVDxXcadpm2YBFWTKQUJ5fDpf6fxJsrJ6zXfLfetYY5FdCYFwTCh5RT5T7VVt95NUYzsA",
  "key15": "cEXro2vS4ZTXThQ2fT5991C9KVdSKN3dj5UTAgx5STdSAggw4Yb2c1yiFvHhUfRvZASdE3VuX5VzX4f1A85kHKd",
  "key16": "3eKq8HJuA88CShJ1ry55wbc9moC8vVuEDE54w8gZX2BGE7PQ4TDYQtU2UGi1X1wN9n6hdmJrzxZtnGRPAC86LFhQ",
  "key17": "4LTP7r3wQYpNdDEiq6Goxm3Es4T1Z3BqFLjsLKNWdFmiWVx7xgpTJBfdyqbWhtH85QgNe9zS4wQu4isBUyWMnYFS",
  "key18": "2eo4cTFYKbRH8UsDEgXhro1Q5xVLbH1kfxihDjE6gikto7DT1tTGdQtNoJTc57qL4QMjdgxWGeDHioAxLRehcJdy",
  "key19": "5hGLtcHrYDeHb8sQQTX1K3Szi1CjqxWenjEn8ot8vPjkYsTfBbu2rmfq3ktckLPc6jUh1NeQKKLHv96wJZ5RP91G",
  "key20": "3aNrdDmgJSDBGddbr3V3MpfjdHGu212zDVMSDCa1a2jmPr8AV9om5N5ijaTyasN6N3jR9VvGMx9UAjyCZffP8g1d",
  "key21": "2BhCToLdm86UcF4jJVjQEki8Chs1njztS8DC4ZmvSELDDuDHrQg25AgFpyHR8fsbUPEpSVpLWf8usxdLHpZy9aCu",
  "key22": "3NT5dzgXoMhQX5xZoe36B3rw2kAPi5qRVKYMth2umSCuZf7nKRP3RDTdqNtoevvgmGYvpuQaxiVZReaAL1qZcPbM",
  "key23": "Gea6wSkUNCcNJ2gEctMak2bCs4Hmgeceijk2qZf19AJg7VGqwwR9aTefnEEbo88qnJhXsvanY2rHUexX2kbzYVX",
  "key24": "2FFndZf9MaMuX3QXiVSajxjoSaR6VK3hDxBGbzQeuKX4kiHV9V7PBcR9F9qqYTyDUKydde1VodWnfZrEf4ZQwtuM",
  "key25": "5RXmeDnMyKDF6Kyy1WwmzFVFGtkxLbMxntg67WGvppzQMU4RS2rHkjVpy8YP2KUgKjxwoECUH3Xq9WzZXtoKCXYT",
  "key26": "5ULyAdxSb6sT6aN38bxCX3s4PCPQugqojX9o5bnfNCANjJZZ1KKgk8e72Y5Z3qdfp8mWrtzvdDNZ9kJgCg57McxH",
  "key27": "3VCtf7fwMs2WnnN3KXzbRDcpgimri7BbNBn4RbsrdpPxRbQWCJvq21gghaCzNgEXRzsjPzpLbu4V9WYvDfxUvb8T"
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
