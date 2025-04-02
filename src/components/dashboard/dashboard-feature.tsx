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
    "3pRp9942v8KhNH4hSvWcn3aMJodK4Bwx1rphVudvemxojR5AAjLfBnjSc7npxz8XTcpeeP3dwJqSc2kx9TSN8cM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3erbUyNre9neAyYvAqA6aYw3x2RadmkD2uJBtp1nqnTKdoSSUWqm9TwRush85S1MmWr5bDSBrSYj45iwL2biVGsL",
  "key1": "2BQfgkzYonLiZyc6pzd2oLjGEZVqN9itY9GzEkdBsJF6M82atQuSp6w5U17QKLzzTPwRBRg46rLa7bJ1fT1qGQ9v",
  "key2": "55osEh4BTamaYoHTTSrSRSFR4FaCynejWqdCThyLPeqHxzqeRt7jncKvNk7VGJKcj6qLt8qgf9aYZmAs7DjBBNun",
  "key3": "2Xab5iyErPzDGgUGPNUmPT8yu4TCLf9nYBUUQiANht1GdTsTrkHHYdFMa5z5g13FAa1LjHozBzpM7UhdvpXJKtFv",
  "key4": "5CLha2tVyyeFxiSqyBTnWzkGHKovdixAvyE5cmVT1YZT9fhu2nHsacidvZELBrCNji4exonkbo68a88uThF7iswt",
  "key5": "3NYUtNUsWCYeqgiymefPMWWToifeuZ4aWagBLkJkqpgaFvG23m2i5EPynuq71b57VPJKyV9G7UcetSBeJBz1oFG9",
  "key6": "8uVA9tphhF7v3K6qhpCrAoGJhBGu9trvB4wUu7NayQsno7TDBVVJuqc1ZANzmTDoEb1VbqjVzoKVZw8GpBpqw4Q",
  "key7": "8DrHR95skUPLsebMt7CpFQwkikZmowQbsXnbqWBn8tUFGR4dRg9qoY3HNTrvXxW9xyzW8w7K6m25rNMu6muhgRX",
  "key8": "4UPvwcmTE35JZmbvhQJbca7ZHgLzMZ13dVNkCeh2hyxDa3SdfMBzAZzZDfviZTCdcHmoGcuByoZAxfqkAPtx7ZZD",
  "key9": "5Gr3cq8b4gdRx7YyFxYXLDPgQDtBE6hHK8GCz4GcmKyArqrXjYGw2dhJEVdc22iaBzRxUQyBRHWtGqhJnrZFn41B",
  "key10": "2UnQsGWexXRSZvukErgjhAxZDWAjSu9qRoCwPDHBSKXjuPBpzaoVf4xJr1ZVASG697eJjYpSAXj4S3sUyGtRrk3L",
  "key11": "4uBoicxYxu9yfTyyrqSrYLgshQ93op4GiEZQEVHhWWbR8pWfRfQwThxfyaekUNWTFcjyERkmJvoqXfYDHQnkXH9p",
  "key12": "3Z43uucYUV253cAEhRNgopLSu6x85wM2RnjAvcNxqxMBBC6QQSFLGfB4poQBQEhnbFWujvhmrEiiu5FbhE7aJ9kj",
  "key13": "3SFWZeT2d1VxGCYeArSKJjcGpJoJnKQrxvArxYBiYuEz7gVpDJC32npp64F7aeRavhD7YjXUdt1t9eXwbXKgX8bi",
  "key14": "53iNnEjUP1XKxxcNzadx1RGNQAwtZEZrzw5VfA6w65Zs2kjizP6xs5aF4qVyHno9rDySxwuqSyAer3S6QmRkr7vL",
  "key15": "pXfbACXVpajQ1rqvtTMbvLR15HVXAKMSdkEDsKVUJbSLZawkfUegj925p1exQ7NaCB7uFnPcHYWyCmCzUUPyWQN",
  "key16": "2VaKAU1Bv5rAnvW34JgTZADZRi2Lvv4n4LLBHdpTLK6uYWZepq4j91Gyy7Pa7a85cCoZ2dtwLRDuNHG2vsSXH3Ej",
  "key17": "35hx4Ap6EhbyNXAhMpytJYWt4ihgdY79TW9TctTGstVoSSKb6x1qXtGk95sTpk1EQU1Gz7Rf9vu4eQQENGEoWbVw",
  "key18": "2ZyLGZ9eh9MPcr7MVmL5twbK41jX2gMEsJCKXQ146EAYbxh45MRvH4uBq498bnept6rrhXPAcyJEBffXaRJS1y1G",
  "key19": "4QbSDprNRGtqHc64S89FZ5MFJhm9CnbqKq629WwHHk31aTJwgKCffG5Er7R3uSWw8Ab7pc4vhSSFo7xZyLQwb7R6",
  "key20": "5H1my3jbq4ikAepNMojCtAnnBs9eHxhq88sLDTpgpT7ujkCg7rDbBaQHgATPEjpSLCUa2VLk2C88dzqvJFo8Twsw",
  "key21": "WRubt4bcpLEQP1jAuZ59MKC2zRuE1pqJzNe9oMUycYDpgt2MWff4HurKLLs2UgbVsprw7UksSxqvXyxLiv3SbBx",
  "key22": "2ysEGTRRP6ES9FogaRjdpLBQdQ8cSz5aEx4fUnuVhK11dVGYANesMwE2DW19FpsbhpHTXrksmprbLbxmNN39TNHs",
  "key23": "5LUH5UPNGRu74pWnS6VNkuuSnCD4uJYKQsRCLpsN1ZgkQQXhU9cKVLa9FfdxJbnDbWtj3hG2JTx4jNbpW1r5YuCw",
  "key24": "3aSE3fNY3at7e368M95PSpp7Udw9vSc9PE5jiwAttgZE8A3ZrvMVsd52TMPAJ2GVnTXxwn88gMhuKGmP6vYv3z5a",
  "key25": "4hR8MMvhWpibzqnQvBbtW1LgViTM8TvNPh7rFdTQocxbk27EyXkKjuYrhXmXxh8ox9Gcvwd9veR6RDFPTip1zj9a"
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
