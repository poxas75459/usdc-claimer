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
    "5jDeBVYHBpsXbKGtxLN2M2jnBpW97uHXXUejkbzzoDCsQ9jJo31Yp1wFVKqYS5rE4BVGp7nRh1FkqWYcHe5SUXth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LP1uBnT3TND6dgZjueNGY6ghaEJMb7DAKUwNrrMBEgAM2CTRGfoLngZwgV2bFoNMq9VcLn4yFCrx3FpSfgXMdAA",
  "key1": "4bn8gBu6EjDrHU8QziFQNtwCJXYB37epfTwVbVyg6UZg42FSyLXWH3XkrtPfgXX9tMVqeNEUCg9r8pqJUkeZ9YD6",
  "key2": "yEiBBWNRYKvzJtPwQ4Cg14wtgNCjYTK6XVCUcrZPW6Pkt56PnZDTpeyZpFQDM6eV1QY9eQRMhAArDBFgRKrE4Yb",
  "key3": "2yFHQtAaHDtxAn4y12xLbPqWHTZS8b9Hh3KzMzChNSsvK8o6hDSa72mTLmKRHdVrGY2p4cZbJRBQFejzHQ1A8Epr",
  "key4": "2bQKkxXfGfQntijAvKwPXiv3ei6Zf8iNz6ZVvLdYoLNCMNSp3v4SYJsAXskUYyxXHpn53SLKCKnaaBKqTAQwAHiL",
  "key5": "dKUTU73hM1d7Dg34mD3c4u1tLzLNJeQfvEBcQMQYbAWGWd3Aio9yATN5FNp4CUDLdoAuY9nDGQy5uCWdE3byTtk",
  "key6": "2ktwN99bqDnUwm9x58bt3C37WA5xQ4GJEt3LfSqtnaC1z6fUWXfArXeGHm4pxmPHUohLt3t58E8K93VA9cianUnm",
  "key7": "262TpHCfeMqzNHtDgMrP2ddgfZQJATFR2iNAwniySMFLF91F5KyeieYyj8cKHhg6D4c2M9CJ9qgC566REpFJ1LvM",
  "key8": "4krdgSinQg4xA5XoSwjPCrkkQaCEU6YL9hAhgpSpWgbfN3kkfCGPQN9pTWxC3LrvfQkqpw5mwhS3bAREnUS3aGHG",
  "key9": "4GbNqLasrQRmMtZDfVYCvS22NRqeRTE5emzBjJBPNeGC77igmZFoT5VG4Kkpt594a59PNeV6tfbiEsLUYtU4LuJv",
  "key10": "5Sdnza3uKyER27RWAEDC8ocwtBmb2MpT4ib7qCpdP4tVVYZhKhE8iFSyDnwurrRvYVcjdj66SBLLDZ4zoTzdGRUc",
  "key11": "2BTEkcrPC6XctU3Bnmg1MviFFfbn987GbnshUYapfZhAtQSTKf1XZAH3YAtC8xaQfSiSVvpLW3tarB6krdagR19Q",
  "key12": "3iQ3UC5q3x8aMfnWyJpGeRYsa8aVSAAsqsZ4sRiDAic5oCzR7zMefDqm27KQmhRZ1zcRxRhheitCdCScPv5PpJJj",
  "key13": "28nRQniafiAGScRkZ7KsgoSmRcoUcuXiMy8tziWbon5NHnbi5c1QPxtyU5Pk1j4nxVAwjoDqG4pt1cB6ScgAhqNi",
  "key14": "ktGL7JMTeZrWDmBrg6R7Z5cWiH85S3fpCU6SeCK2hirsh6zvkWRF3By6Ez4EW4CTrosGCPXzAYtSuPrkz5Bas73",
  "key15": "5vD5iapLTMDUGFUJ1XXQaRXMrSh5NYY8LfHxbsVT7HNDJFSquqrRYGiQGNByUZcJG3Lfu4JXsgWY3zzEZZKwFnRY",
  "key16": "rRrgavDQ3KQPsEDdvxdm6T9fH9q1nxrTuC2abMRjZCJVygCwN5z9vubmQjt7f66ejksHpu63pXanntWX946s8UV",
  "key17": "3iYQb3fnLDstKasGGD3QCDnrcj352bpCErb7rrGPfd8ioyvNeD6Nqj5DT2v23ffVFUDbtAzsmmun4msheiwzoxRB",
  "key18": "25mGY4mPRMxuKvCCZLMxj3X3h1rnS8AqCGJHvi5NMyLsye2uDYfmZrwpX9bvJ1ww57swDmKkFKZVm8VrYkeiVVdi",
  "key19": "4xfEyN63d2CszB1zWLXjh1aibss3kudKvycTw9Yb84jQaBkMXUXv4Zm3Aoe8U5rLvkuPDiHK5DeY8dD2RsRYbQ5o",
  "key20": "46ht1Qx9xx7RgYKSKim7twRynhChPeRXFY37VWp54Uh7GbBavpsoxAXw7o9FMjuzVoqwYbdoLQw23LnWapPRLiVX",
  "key21": "5TkadeChRNzfU7xnUP3VmJfEU4W2G34CR4JghKDq4Hw1bLpfVUJoGdY88e7YvoYdoy65JkpA55xWBzcoeWpF49SV",
  "key22": "52KdqQeXcCFwsMn9nHAkQEkBCauW2cmyNmXSzDrZagcmP18541w63CVKfMkjfRU84ezWpmpB5BsFEcDxseNjiZ4t",
  "key23": "xrfPN4xyyypQnxSo3pobPGLrHAPUXznBw5dKcTdrqKbbyfF5rEPsEd7L42ga5RxsnR62PXcJ3uusGKdE6uHKjMq",
  "key24": "4QZQp7jE6QxbA5xntT9mtmszHJFhbavEtUS9H84nYpnjf5fTSJsimw6hXKjqXN6nr1ZDUXvKPgySx5vAwyatmYfs",
  "key25": "2UfoxCsS12D6gVhBhDPiEpQBRRWs1FsBX6Z63fPRVbZoZD5Hgb5tPATYx9BTBMg4N9jAtAJnN1UGUGso6gAMctFR",
  "key26": "4xCWY8X9QJTw6XTuhFqpKQbxHCVuiM4k7XDnWvPKp8CJa7KdWhgZrdyEficjxTJZvPc6v6skiHRv9GxyU8rifYZz"
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
