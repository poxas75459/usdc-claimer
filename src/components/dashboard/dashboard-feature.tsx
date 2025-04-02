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
    "5jtMhp6xGBT6Rveax7wZvj4j8ecf8cF2QRkXiJ4yzJHAPjN19CuUYvqPLvYTBEfYrYd7pLUpN9WR4R6DCqn8eSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6puAyGkZeiXA8Sk1dFu8NPv1N8Rc12iza3BGGtUjomPA7FLn93DUjd4espmJ3iunx3rgvVmmrwVWrGCQGgcNu5U",
  "key1": "2Wf7YSYhLpkWk5nwTBdA9gnufkq4ZpMmThq2v12eEpWNezx87tEfTUFYpwhHJ8GBWAD8reNj6Lv9ec1c1qK5FT8T",
  "key2": "4Y49wXYKx5d24Z6D2vBZVLt7ZFYCXTFxGkaUYbEEdbAX2V3PxLgNJX6Q35b9dkPuHB6x78kDhE3mnYUZ29wL9bRA",
  "key3": "5d7yZix8TnLb5KgfYR6fgoWn95tpuDoJEaZEdsvth2UQewfbygLAjCB93h7pCGnNw4YuZmYuHWyDLjfLNiy9mgQt",
  "key4": "45uACYKXTEBes4qyqpcmH4UxWDwrSsLLRo4fHRrWhjBUEE1WQRoaNhmtf2hUoNWMFAgakTozsERDrzzmYJLvLiHf",
  "key5": "3ZFjFpwGkvJ3HmjefQeCZszEdpRQugvWxwzDt19VUMRJEiRtK5uBwKJ5EGQqmHwB6Q2bwgXafDhk1nYYczerGw3C",
  "key6": "5MVS8zcMvDTZVvsbMh8D54dc6NZqpxkhZdJaUbR5T5GfzCMZVBGkRDCeJPAnRojYwqmXFdG22y8pzopLV4Q81fLx",
  "key7": "2seApcdGY8VCdfhYMLyGFY6FGzZCDvg9v1U6Hpi3aV4hKACYdZE8xN2gPd4pas84wrJB78EYKBYGdZVdqjDgjh3W",
  "key8": "5iFLsaizzGLRL3xJGSaQAy6Lq7ytukBtSvpHNqvkV36852KHxrTGfhU5KeTdRuUnrQgiTSqJqzXqZy4LkXjbpr1B",
  "key9": "3YKg2tWqdWZ715trJ4ckR2ouAwbgGtbUdpcjJbEjqhy2hwdovamCNGTPJnNRizbjdH9ouE8zBcCsDM5HodqgZ4rG",
  "key10": "5EotJgV9No5QnCMDxCKBxdmmLq3zY1HTNgDR3DxTeWJZPXmDc7gXHLmpgT9nzrNArCPLxm9LH1oyhqEV7M82jgq4",
  "key11": "warsrKBQSSzYEL2wWnQxVBWNgZ4wFHTK8CL8iyYp7GbwiNSHpfJvEudzGZheQBgK7GDrn1M6rCaktK7WTqGFFpf",
  "key12": "5x3raiv9rmvTK1YG5MBYjxDez95GiDwTFARftHEQjRK1j66JvRohK12pB3CpRrew9wMzCBzoALqKrh4h8fbbePJb",
  "key13": "3JKnrNPPx8c9Gq72ofqdBqDxXJeXKTigrkGL5Jb5XGzciVWpxWcd6oBeXCuYVDcaryBTMXUEFRNLMkhUGa8uhebM",
  "key14": "2JZVxL2a6jVzdubet5Ga5gUcU6JMUQHv4JRsNTMV3hTjuW4snhvSMArrFowdAjjpcnoravtk9pFrWMfVFprZVuoW",
  "key15": "4audCUYQd5YSShfLVWRvU6PVL7X4zJH8DBT5m3w6LjHYC7UB8qou9MAhimc52DRLYvzzfh9v8Yz7gQKhaKzT9wpV",
  "key16": "455JNvMSnWTC5ArgsJnMU9ULzCqsAdfw3rjExCr3fSpvKavDssdfUa5oYCTUvNiRL8WxUaz4uedg6zNWmLMkg8Gt",
  "key17": "2ZTFZciiSPyq8JTMFYCmoWsnBvRXtevPtAby2tzEVia7eWG4LoFJ73tXzqgYsjuB1W3ecoPsiBVqyuvhrZU1YY1c",
  "key18": "2pmAuv75EjvpoZAiJ5uugdwR7tiPirjuHyHZWQNGR94Cgo3GLvphsWGNv7SKqwitTY7Mo72qZLYFX16M23wWBFjW",
  "key19": "4ZMVT39NLoyqFrqNqMqnVWuLZJENneQDq81kQTr1F6gT6We4KHPQZeCvuiJ322PF7kwxPVNtkwZCfmq4reP19b2z",
  "key20": "4Mh7chrVLnsDPcqxdduya7VXoe6uvJJhW11p5u4qrWQzZPKwGSB7Nur678EdjXqXUraQ3SdsTdV7P5HV8uiZSRHY",
  "key21": "HAoim6k5pUkmL5Lc2dQPuPAGaundXoZW1NPCNXqBTGjMiL4dc5Cdvq78kTV8BbJityV2TfLpJPXcYxVjZGSLLcD",
  "key22": "534jUcGHuwkVdUyx6QScd2Xq2NRTHFWmmozKhhj1GmVeHzxHidQeq5D4iH7ivEJENAkinSo6xK68e9EtWqbUh5As",
  "key23": "C2eFsKhspKpDVuKESk5HKtV81MTocN3kBT4b5twRt7XTDs9MyTDMW6gZTqNVR1qBKd6qEB38P8QTF6y9w5t3hWq",
  "key24": "rAGz5kjnH9mzjiyyntxf3DuRitWW7mYZMGNCB5CAB4buK2rny8KNGQdCRh8E1QPu8nnRuCPBpuch5ZD3TvfEpac",
  "key25": "5jDdroHaF2MuDLNPz1M3tY8aCEdrcPStwNJTQwkjmDPP3v1h7E2Xz7EMZ48R8exw8fZgyvJEgnfKWbdnj1UVptvw",
  "key26": "2yCvasiGkjZWyqWeCUedFRZzauVewYuHXokZHFWJCeQeZkQmWR1UQGUxnHEPFiqGEBYKDWKkxhBMMcbQpAgZqMV6"
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
