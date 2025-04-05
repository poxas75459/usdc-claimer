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
    "4KiMa8NiWqNL6TgZRiDrVhUB41LdAAcnAS2XtJwpj3DeFtz6jdkTT8shNJKm6CaVt3J112ujeg1kdjDRYjZsXLRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "du14TkfBr4hLi9UssWkrK8DgHKHVJUYmnoXDi7pE6LrphtYNoL9YsSE9yjuM1zdy5Hm3strAo5RwXngr28YVhox",
  "key1": "2A7JeuCGWzYBVrXJjnFMA8eqxmdij7FRjWdA5D3vDj2LNBLnWJYX3xjdPyerzoTQUBDKBZNztiqd5HbceS8JiwHW",
  "key2": "2GFSzBRzcWUxAn1BZef23APFMo99M6Kra9Wcr21LTnaPGssivdBr7XWfzuqh9oLA8aCFuxn8hQjJ5Xqpq9dqyBfJ",
  "key3": "55ZrKzsg9RwtWbZL944syf84NRYkrsh1rogEwjbQMv4XbqVkugsDUjeSSTfGaVctVrca5syKe39TUPwj1EZLYJtv",
  "key4": "4SkJqYXuHNahwthFAWj1qwQST6EFtM2fbbyKx6ovzuR1vnbUB2TxwovhyBPYqpBcxpiJMP1HLVxPyzmS5ntN33Qw",
  "key5": "56yLijbnYVKpE8yrAXwcJDWK88J1ejipyjyHBxH649GzJ7NhvR6YW9xv2xfCjG4y956ewu4BGAUP6AkoSEWm2X8x",
  "key6": "4SEHyt9bayJ65o1wsDJveSRcyUjnB4ro9BoGJGzb9ptBqYTLRsiW2X7ouucr7YK5iR8SyxCyqCTma5VnPTxnKqdc",
  "key7": "4q376UPVb7EpgZPu2mZefCxjXgLpSxFEJSsm2NKQPvRPqHbGdH3cBMxf97j2JkoEc1DF7tBJZafh7bpsNT6XBoXP",
  "key8": "T6vuavL1NUcm9XraURsGc1ccsZ1RrqojtJYyePBwX98mdrVcMFH4RgxiZmEB24L1snEpFU57TdS4Me7s4iVf3u7",
  "key9": "5jteotLvcEYxyXHxDGw6qmgLyhmbxpEuG5FRG7ysz9L2xoRpkgekDJj1dppkBZ6FHKZmWzKdTNZ7WMk5c1j5vtcL",
  "key10": "LH9dDJtBJp2Ljf5Q1wjpVNDgfamz42VFoHvQRVJJva5aDUiwT7mHBcqa2w3MjEXstyCvNsgdxoLxnYJ8xkTjeQU",
  "key11": "3LTG4nW9yZSMma4ZbPu56rE4xFsSP2LiL8XiyzUCDrg38yfqLT8Mjp9jj8PpdiCMBVuEFwYaYNPvhQsozZCdo9kW",
  "key12": "2KHHfbxYbg7HxSDgvU7Cw3qGkxqxC4GLPM6Hcv9SKBtxLg9EXm2c16z4KNmMCshkBARo2AUHc12kVahShUctW1sh",
  "key13": "2r8EZowwMpid2SEgzquhoJAiuZxkPQ9SEJBtxUF7b78LjBCwaV845MzrPufbuAQ5ZSeD91os9zFsrUbQtzr6gond",
  "key14": "3UEVASNzanSshoirAhwQ8viQxatMyrVVUCdvx94zSZkxAy3mTYAKFn3LLADr8CcVa8GBGmubXo6CKJ16z661nE9Z",
  "key15": "R9nDxDnAsLhxWwmWuhwpkaRVh1J6fWW7G6WwcX4bRvj2UiDmkXGVJJTr6TYwe84niFvH1JRqiPVVXBJuXyGYcWW",
  "key16": "27HVy6ZTDWeTJu1oAj52KcD2Z6dXtVyLGkqRYMF8oXgF3dCSY9p2ZFHGHvq6u94PxDUuXcALWfBPCCYXwdpQR1HN",
  "key17": "33fnrs9XhYCCN2QVRgCQ7sDfDTew2UWwdNtP3nbww9z3fEdTtSFB3hWoWYn16hcJhqsHrUqNBh1kCLA6fHwaa9C8",
  "key18": "5ovzqF6ad1ts5Qj15tibc3V4CeFvmtqM6fHztbVXm3T6GEdRTzKV1UBeS54CRFP8etuiMUJHDTSrcy6ureBhw1hh",
  "key19": "2gQTiaax6ARi58NLBYErcNwJp69y1osU3SU2t9rre2ddfWy8vYKkt5bsU5tsFKpE3ewyn8Er33gbh943SCjt9wF2",
  "key20": "RknRfK5pXgsHdYVz8P8Tt6WYgrthGiccDb3yrovqQTfUwGHnD7XuDzAM8vMuMorotuWWogUXA4pb3ZZtMPHpKcc",
  "key21": "297a3ab2MGXv4aL9pbXg82Xvf6zHAwPnjrx31BF6XW7b9RWsaodR7V1984vQxu53xR3iiLHZLTxQ93qRAjMaHwbP",
  "key22": "5SpXUv3nrQZPnTQu22YfmZqY6rN8RMu1UbjBSVixCWqBbUzGAcCy1BgAtA4P5GVc3iigB7XR4GUhmMxSwpM2T9b6",
  "key23": "Ht9wLRpsx8zD6rGdL1rq86xpgi6ummWAEpiWf4UQcgbhzLBb1vni5GbnuiXBE5KKhBwq6ss8qvSww5sg5i5dGAn",
  "key24": "gBdgX637qFhxU3mj9YnHhZ1L4o2Jrf8LitVb7TH46eZ4CPPNipnWBb6X7EfToY8HzTrkU62T4CL5xSBJNQSyDUM"
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
