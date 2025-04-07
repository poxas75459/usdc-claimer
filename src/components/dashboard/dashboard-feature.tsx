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
    "4YchTGiBmXGwa3VhQ3xXtgysDgfMqiBnFb9rvjxc2pH1u7rB1vimjj4CM8MpkgiBzqbPt4vvtXtDFQznZSsfRFeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U1hdNmy1pwWKhXUHRk2Mj8E3aK86Yju35qRKiX5gvHqxJqgo7kmKDRiK87vNSXdgdtjBECDSo75cvQ62GfJYMcD",
  "key1": "5gNyBWMp8FRdhV2kUUuCCBX5Pen1R5dUJvcNX7Dzrss1mqvcnSmuLocZqmvVU3JPazGvDJ4DixomrN6zQQCdRKia",
  "key2": "2FTQDkoAwUAy2182Gr2mCNZSA1u7Ji7MJZuYUq9pJBY9fUMrw5bf51qv944DvJfyAFwRxuvmggdg4k3UYpXzNv2k",
  "key3": "2XZjUDzmwzAF1jq2yHywH2tXBPuAQ6Bugtj3EHY7nWSadkziw9mtAKyf36uikmrn7mpVqvheK3m1g2QMq63BvMqD",
  "key4": "2fHtwmoB5Wyh3tvvD931cJEcWtjtDoQngbVTajqg1ZNuAuLoRWfdugQW8ag39Bag4mi8hhgUB9ShXmn8MPQkdTj1",
  "key5": "5i24q2aoG1FhwjnMBgWmgjdd6MBqFXKLREeNxY9kCB6PS8UysbFNVCbzmX86Ro2mgEsGVqgXPhPoC4d8FQ9ZuPqW",
  "key6": "kjrH5esaJCzjwR1GX6HgHi6AXrCCbzUJ8gFSwTCp1vEmH3W1JY67o7Le4cJVHcLJCBT9JoYAuHXjDaJwQTf31w1",
  "key7": "3xgSeJGXRS8k4NL5YwWtvkxuxKy1MFenskGwaTP2Jr8SKit791pnbKSYpcK8jfwdU8JUBWjwBy9fQMmdRgE5Wscv",
  "key8": "3szpcm44ayn3JyvjcxXYsFr2j2BKADyVAXNsoVATwJMh2YDTGQX4AUAGKNXK8YKYKUBv72fYv35TZz4Meysz4Tah",
  "key9": "5GeW9Z6SvvdmV1dn7B3bsQiTLEcNEkuUHBt8uMs3vqFYYBksGzWqqxEuUf6Vt5j5fDfKwZE3qgkpmR3mpUieCF11",
  "key10": "hUfVTMQa8yJfxG3TpjYU5bQjoDrvxFyuezjGf9232Wp68xsagyz5NY8BuMkBpJCtp8gK7jXrz5Kqvj8hgf1Few3",
  "key11": "4LYfpsa4T1d3fskWNDxDU5KVApFCioEqELNiGdfEZCAcHAU2ztzUakmN5NKzUpdNwVnSy8TGBC8m1ofyzuqSksgb",
  "key12": "2s6oUTetGSqNeM2YvqaEBvFN6ZHm2ve1XCgvN6yADUP8eprMaSZZo5sa56KYSunXuHkLqoDF6UXRBNeesiwAKts",
  "key13": "536Bk66nbFDtV1vFAHukgcDVKnnEmcappXMdYZGQ4BVreBHnWZWGo8BeEBSj3mLnQD11NDLRp1BkgQ821qZjVKW4",
  "key14": "uppDURWNR6sJGRjQWXbAXu26ZKRg4okEJurD9vEZPxzWqn7SPByczd31nsLsr7EhtkU1TUKhLNSfsKQCRGjaWv1",
  "key15": "47JRFMRQDksJpaKvLt9WseXBW4b3bLpGqbgg4YMBHxvd7AfD8aqvbzQQJpY6NNj9rUaA4mpGdAWva4Vo8HH8CSFA",
  "key16": "2SN4vMdsxmfNsavM8uJkSd6eKaQ1q8utNpMVzG1K66N6EC66SHcxLihPqU5NS5c7evdrzwBSqTF5fyXk6heNoGPp",
  "key17": "2mXGQi3ekKhTpKcp8p3GVhBHBnxJ4zkz6kYVsSnftpWPKvcUHq5VUGQBCgdDAASNJtbHKZ3cHXfrVqDntp87Evmn",
  "key18": "3UPmLGuvWj8GPDTfy7KqWsWVNZd3b19jWvfxEZP4SzwC88xWcyb2tvtoZY85ZuxbYVckynDzZkGfufauuapyyeH8",
  "key19": "w7ouvXZquaDUYtj6fbpUU5PGGw7DPyY5h1iutr6N7bfpc832yffQ9bZ9KhjJqMWqP9ZHMUwGxzfzCKLQgjBhTfD",
  "key20": "YSptmtz4cj18pkXFGeugL5TSsFqYTkx1YTqpLVHA3jJrmVTKAc7qEeBZmfYVBps8yfTP6TyQvQ1hUniAGm3UinJ",
  "key21": "3QvebEZgFabVRc62t4V6wgf9iJqmWEUoSmHERtgGN3dYY7vg6V7EzU2aESi1Bkx7Cd4ZJRJN4CUkwzL2vTNqgKgw",
  "key22": "vSGvuhp1pyDkkrFsmBwqDoAEk9DRzr9DCrnT7S7FfbCNymrr6FpJ69B2KVecqYDythiALnuwmMra94SHUx9Fwaj",
  "key23": "21VbEWLuvAPG6DxzmzgPjbaTCeUVtEoxrB2PeC4hEr6RXeryqGw3ce7XpEPQtzP5RYu2KxNAAiEiKKuqNEzbLAxY",
  "key24": "4pTiAY4jREmTxHTxbJEgCbNZZnWQ6GMLp2KTQPNyixbp9pYEA4fDaNS2mtGVqvPrhKr2P2gLbBTsbUQcBKKFtLQw",
  "key25": "49VJPXEz8rktA73fAHDBYDaQrc2agkAFJygBTjZP9GwZVNbU7Mkhr9qTdDW9EsNPLF9jajyW4fj8Bgzw8LwBY3fx",
  "key26": "rbJsj3dacW1kHA48M4TJZb4e83eXS5mmWc1NhzRsRUg9KyngB6n26JtP4vP7GEmHyGyLvNmrWbWqiDPDPqS1Rsg",
  "key27": "5CUNzxfvb2KWkF3sCmr37mEy9VB1YwQSfT3P17GhWrCmXezkmmnHUQ6Aw4K932zMCTBw978FErjMBgjXJ6ouKAep",
  "key28": "2qxGB5BgNbQvhSmvYBhocTjKLHhEwWt6NjdMtdPdVBozA3YjcF8FSYc1Cy2VnhRuq2vYtDiyPS29AmLdxq4PPBGV",
  "key29": "4ASJZfKdtFfyg2tN1K95BS4U8QSd1jyxsFrGX5AcZgGN5dAhGHiyFEHY4qqkZg2vXAZ5Vd7WqG7rZntMaQcpooA6"
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
