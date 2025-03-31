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
    "5tC36vUoZUofdCYcMj8BPSESww7XpWHEeBhMnAyAhW9Fcxbfdytwv3XCC8vZzypWQApNoVBUr6mvwLXTnb1fY1Vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NNKGr5kFCYi3S5VGXzFmxHW11TT18VwsNk9uFEq3RoJeiq4fmGEZnF3jUmzK2grWWpX1t5xJoCNJeyavSGAUak6",
  "key1": "3zuYKupVcQsraPcJyYWBm7V5ADtppACcxviWaDcMSc2ohmAouji6Qfo7vZrdLBsB9ZUQbXN4CjnZSXHodB7TDeJW",
  "key2": "5Ey4LJXi4xkrtagNcF55hw4iPQ8oRqTgVhHW4m3WmP7GTRgVg34Jho1SgJjdCy8bBAcbspjXjtVUxDTQybKAGRpU",
  "key3": "5v8dCyVx4tupdYepNuh8oLyVYLoSZbETu1VGJRWkMzPZmYzED9516PimV9HjWCzK3WGRCTq56VTvz2ZcpnY3N1kQ",
  "key4": "2qFdG8HwkKZobRPRWT6pqUMGpGKmzX9RUYWhpkd2gvVjFHWv3fJAQSMmw75UczvnfZEudMe4Q4hFbUpcwRzjk987",
  "key5": "521Smw8GkF35HSDCQJa4rSDAMkXQiBkB2ps3oT1YUnmMBJ6t5LHHoPKx78koy8Aczn7vqjshRqoLQL3HJtp6CgqM",
  "key6": "59sFFFadiPf8UN42CERX9V6RWtu8i3Zkyhic26ync9TDy7dNqKR5c2vkt2GV14YWPfDNCfLDnhV9t4f9e1dpTm5g",
  "key7": "55ovmLwvnoEhCrXgXtveSeFxSAdDEB5RfJ28P1t6cR6Sr8M1JaNBNJbAU7e6kPgxh9RuQweeJQQCrihKmqu2f6Lx",
  "key8": "3czkJxNteMzLddmfmzZmoumpfL9osptB9bBJf2ZcWNCQh1JstJYXQn8gBaVksrZC8bavwMLLkNwm3kDFHzxFtAg8",
  "key9": "zPbpA9dWPX6QYEMwGABFfK5XE1PKK5HStCLZBAiW5daix2hszQrN9DEaVU8XmBdEwQRhy3CohUhvocmmmCLdfbD",
  "key10": "5xzEsgcrnUX3LYM41xMHoYyWmsu7fdrxYeP9NoCiNa76Seb2UD2kkQKgtSUm5Dzg81vZaBvQbkBoDfFgFmpS2gEL",
  "key11": "2CFtZnNKUgjMwz82GHmxfbdrtqNsXyC5swijYtZhgMvJVbxenhgSZJvjRnsk4NyvxMyq9B4RgpjaAq83qcw99qxn",
  "key12": "3S6B3MQk6oWkzbd77szYWtbgYuTyDRL7V7kbx9x24WDmh2BweUhBxn5f5BXcq79E1XBAvQc9qFTKBwCFB9kufMP8",
  "key13": "2mCtEhFRrVLmAkSYh93sUcvErCycHi2XRV51q8vgaVdeCHee1qUpt7foLi3BqXiRwHX5ebmvzRzf4jvgbHX2tK6L",
  "key14": "5WQnkB6BWx6FSeyWLtaJZMmu2xKzYBv6MP1uHxeeHDnknHE2q3gPMvrvCkVD4WudBU3ACcBhKLqwMDNUJxNfwJVd",
  "key15": "4eJGqadTQ32ZWXxcceGAxb7s3gCPvL2t5mU9cn31nN2zPr4tQZCfki8hUd18oN57pdJJifVKgDRR3VkU99Futkye",
  "key16": "f3xoa8SqLH6rW1tZZEDLujvgHwMTHyiMoHMVCWGc2RssiLR582uh7UuHhw6iQWkF8xh1a423hSti7V8zLoi731N",
  "key17": "4QerpTPe6Hr43nVv2kmvkBtpFMYGppAbeaSNx7SugYU9aJGTbsDU4nKoF9iBDf9anWrRc9jEjxYB2j4s8YWksMhi",
  "key18": "39sutayxspPEcKMwSxE86FnBPYHRD8tmRS2RnHv6BaC1uCb5iygNhPL6NWNZwxgkvgcWqwFeszbCPqv73n76uJqV",
  "key19": "5ZvrVFd6K7LCW9TdKAXogvdepnKQq1kdNx6GA8UDG45fxuYQ2fNeAsqEDXr4fjsED856e1u66ZBgKLduNeQPCojf",
  "key20": "3NQNxcqxE2VjvKp6NgvNBUobkjDEFWfBRysvtpdGf2GoQmmyNQEw4vGki6GBo5SuEwiZHwAt93BD2N4EvSbPe3rN",
  "key21": "Rr7abuBAhJiR9BLcS7V8csizqUbe7R8JMkKXqwCjCo2TajvsT7C9n9QiQqcwdzbQqv5KjyciQa3n6j7DTKZPme4",
  "key22": "qCCh2ttmc1JEKyzDRaAJyrkWJapwqmNVUEUmJ7jpwnT3D2jXhJgnWZKUo9oia1jc8A4brEi2bDNeTavhiJYD6uz",
  "key23": "45se7A7oygz6wgovcZx4nucx7iQL3iBvcKh5Zc7PzwrzgQGnZzBGwB2BkWuRE7evGp46RRZiV7Em2HFUphUuZgyW",
  "key24": "FeEtX8yJQ2JgW63DzpwnRargfSJ5k6asDuaaywfTh3NLmd525kYBgao42w2MxCkEjh3PC45L6iz9nsJMBPm6GQh"
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
