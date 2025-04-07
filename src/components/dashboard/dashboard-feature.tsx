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
    "26NvgYwkn8DdqH9iSpv999xy14mZywuySujzZiUKVH2iXyWKijCYmZsU6UBnMF6VUvYrghTpGtVgKTtVLfFZktaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D874aWtNCxVH2L8zG1y2PcjK4AaGmRyKk9vDAkSnTtwmwfYY5DWi4YgbTcXaoQ2EiDipJDCXbeuRf7BBBte7W7g",
  "key1": "Y8tN9KSmEAs9EJDNU8VrLRqGHCwhW31Fd1LrprZ6ZEX2SCPBafv3ENCzfjUvSKk3BQTsAT33zkMwu2i8obejBu4",
  "key2": "3vaM4MQLpEFCkJnaQ4vhy5M6zAJd3eeYjaoq1Z8nSLqVRkRqUAezaDny41W77aKVg91rdLS5i1fYF7teyqeHK3UY",
  "key3": "5G7zo695pqVNQA9QapLnZTd3fU5tUxmoizyn8mVPpYSyhpAvCY3gE1UAyBNGvmF7sUrDKpGtYei2iUq6GpoZVgYG",
  "key4": "2roAEJ6nkqFCwnsZYXNGkwVpEgSyCDFHAeEkJi9m2sBsx8MfkVRhF7Qk1CWmmixKKHVPD3q9CjMGLQEFbEMWRaAf",
  "key5": "37hvZbpimFQn29sXDPd4GCARX7on3SgZy5GqSWj8vhtCHgLTA8USQuYKGBtMHaZPwz2AqUuj3huyxXDDqCPTTqUt",
  "key6": "2SgSyMCXMSCCf2XUScV7WsboioSZAUiG24d2UXKGsmLGSxeepuTtCzUePNA2qLGaUxkKbdwBsL1BdpzpanKUChH3",
  "key7": "2JhJkfM54ao2wmrFwodw7g73GS7o4m5fR7nyhmiLNZxG9ATK3jzY3utXWY9Cg4LGHw86YZRi63r2zwqAjpe2DoAx",
  "key8": "2PLqiez15wGDccZDHdUwG8rrFAHs1NVU1KyXvZLK1tbQn6h645od6F9FZd7j7ropBT5ZCAAdwd79uUYkd5EXB86B",
  "key9": "WH31BmyohJk9ZN47ekzjzc4SrqH1uvZav5DhLPV9U8iyZPkGC8wZRqRpChfX4mJCkwYc5up55jTm2wvEuf4xy6j",
  "key10": "3zL5MTHf4y68vcN2j8rz2jCW6derNp3GWujpWFPRztKjxHS5DbYFAJGaKnnWvKwr3u5U8ed1mnbCfXhSG8s71epm",
  "key11": "3bjcmbsCfFCEZG1bFuyxuHM4Pdc4YMryZ5KyYnQpQmXG4aLaxXrcx3Pxur8L4g1rFTLkiKb7hKvHJH3kHFYS6U4y",
  "key12": "4hVYj4iX3JHQPbPB3nVn4auy1MS3aTAnNyNbS9V2DQcFZLMUb3uK5soBho9GzYu8jMqHUVLpemqzpo2V55AHAKBv",
  "key13": "5UmGo3VMm7rdQDxvkb5TUVefBWxeoeNMhmoLjWkZseJg72bewcCEwZ8ArXCDzdFLtc25vfwQydaUjV7AUAnVAysb",
  "key14": "4jBHwk9Xm6SwTjKFuyx7w1TXV4ULb81xmMCAqH94PxpKqjcQL8xgHf69jvgJq7Zo7RztpggL5nwMMAvHMMQAkP47",
  "key15": "4jrGp1ckpWFsYAiKXTvM4Bysv66Y7Ab1Z7wKuo4nGNSjyXfe8wqAAAZZDmWpCLEewwEM127Z5gQtF8UYhsixLDdp",
  "key16": "iLz5sj1SXaQgGaiPBuku6RFsydXJxQP2ZoXoymoyefnNn3naWXSjoPrRBdcs6nqKfpduAgRcPUamQukx7sA81Yg",
  "key17": "5wteWSPU44FTD25T7WfCoFZQGC5ZuM1i9TvmLHBzSgbbAvm7rQFEYsu4VgJVYmKA5VQK2CHUfUW9npFdzqjfSC4m",
  "key18": "9D55vZmPyUvTRKFuFPqqebFHHi5zvDLZP9mAnQpMdfSZ4ndoS78Rv4gH8hfm1b2Y8RZBaYxc4U8Huub6KuN825N",
  "key19": "5PAD798SHdfKjLRT178cUAx1DqusAkyhkdU7s6Mpk2WF5vaCbvf7VDDGE7JytyjJhTuZW92j9EF33DPqdtAFBy49",
  "key20": "3uGub5QJdnE97oDuPEdVNVY5LZa1sBLcaBRCNguEzDmj9zDjuJjkpkEEAF62x6AtEpnWgA4e2v5M8MmN374hR7uB",
  "key21": "5Vo1jXoXQr9w9b6KCea4L58pKFqvEzB8upvGDVmA8SAp6rrSg4W1DyYcWd3BX9YfF9XXrVDm3ys9CXG3FsbWN5wn",
  "key22": "2hSF27Hv92VkapTJx3NmiEDyEwverTpnt7KPq38tY2tcwAVfKGSfn4CYNaCRjLGoT4LS6kuYsEDw55qPGcwUAgVi",
  "key23": "RmLaq4UJxnx4WeNwCnMk2t7RR2WfxuBVQ2fmq4qdpHrBYMcqdwAZt879Pth4gVLziNs94qWep9qAsnjbfqQy74Y",
  "key24": "2GciV6ZPduSD4TmqsHfLQL1AHSYBG8mEHaU3JJ6wUaZArinbh9GDYMvUy8FQJa8NmedjMwPdvAhNK9yfC8GrEr7r",
  "key25": "5Egovg28icJTZ99XBdNyW2L6FV8uQhH6hc32A1NZzcWLFT6tJqv4KWifjpedRtN4oaJ7KJ35n9L54typZkzmzx7B",
  "key26": "5y8LmtwD85aZqm6QWKtwu3ZRMBW3mFj7EFexw1qZYYiUqK54apvY86qwQ8nMWB9FRK1ZQUr6MHoPVLW4Bg7oEJJJ",
  "key27": "5r7GC7HFf4QzSMMYSCyfJtVQmSY9Wj8BZMGYBH3hyig7fLXzoX9e4r79Chiin3tEj3bUCnSUYpuiH9EhBEGWr2Ln",
  "key28": "3Q3DBMhFBg8Yiige6pGohzfkSQEWMpQK9eTFbaU4i43ieEhB2nQoxakEoHfCkVBUynGK8j3hp9UCt266HfCSsDWV",
  "key29": "27VaEhY9Qof7pXxt2HJXKk5kUk5VfsB3ULFxRzed1v2P4Ez17WVCL848wocrmsc4VQqHC6M8Zw6RqHQUsswjkmBv",
  "key30": "4Crn9wKwRDYBSVdepr4mNqVuBMmDfYZf5Tt99KFkQ2PUWN6UdTvDAt5nXdwittRUjZnxMVy3fKc8YnoWcS4oyxyj",
  "key31": "DDUWdx6QDgNp8rj3CzEaTWb23gkYwKBnbEh3JrQULpYKu84Qa5RvZNJwz67dAWy9jtsBcaS6if6CjMkRgnAT557",
  "key32": "368PNWWSkvPm1aGsaEKTCDStoqxuQgqzRA3TLXCZYLxiQ2ZF1Mt8Gkgw7BuQvezps9rKpTTzBLx2QwPLyv29WqxF",
  "key33": "2CmPfvvvhETJCuNBUZqgrsYEi9wzfk8qDCkEhLBUVGozC7CdUy82Zcd25goqgMZwjJF7oEUermuDQXACap7h4nV1",
  "key34": "3xr14vY5ZZG7mGeXHBump7saVNEFDn7888w1t7T5K6M3JQrnqQuytSehKhahv6MfEZNi6SdB7iY6cF8Y4CcKppWD",
  "key35": "4q31d7N9z7qX7zDCGR8J6SXHFXjGtxqZh6n4pQEq7GJUfNBLDRd82GUdv7SFnRj5nABppQDeFfx8YwoxbKMGcVkR",
  "key36": "46GQWqCBdP1KjrgevSH4bxYqiLjuMsckW8DmqiWTknCED4SMveiwWPL5Kqkrz4Ute1w6fzzz8nZCZ6Ahoa5hcFW",
  "key37": "3Znq3fv8zhcmtwSm5MkcE9F2xs4JnaPrGibhThxP3J76YDPS1T45DEbdLp6heoCKCL17ocGPzxvRZ81znFipwptE",
  "key38": "5Z6Jw23KD1T4GsowzwAXTLawK3miEmZhNnMiuZcy8CQ1ogHVYm9Vd4CKg3fJYe1bnjGYbcqCfwv6BhkJYVxTAG6u",
  "key39": "DUQTqe4YNXdQL5rxen8MX8qTgTXuisU7qofy7D9GRYrc3jpnsG77Zo5bSbrPsUn1u2BBacm8GMbo8ocVGMbkP12",
  "key40": "4Y8YDbbSfsHbv2a9JaoWeU7jtKgekLyuo5MsJXETHnv7itVd2nZTUvx5C3GAcUGZkQN7btLoNwJB4FWbtjL5ju8W",
  "key41": "4o5UxWeh1dGF7EZHHrch3qcMQujn2FmEAXr3Dw61PprP12qeYBQGFLhm3aAEYiXHVCJMnUe3TMnwJtkaKr82ZHBV",
  "key42": "62xsyzpNa52MsR6u2JD75JiJs6zqiAfw6x1pYuhbinT56Nu1N7ZkRyHfc1c2UKCoHgfCN7RByyN6RqwmnBmfygN4",
  "key43": "3getKGLP1QGYSudWDNBBZhEnREksSpXTzxbCHEhi4m8QcNbrxaZfHEq79Z6WomN2tSLc6G72fzSCi3oyRkvqE45a",
  "key44": "4eonUiJivGc1fXjhFm39PSyBtrrNY74tWLsAqDadZyzmouWhTtKAdC1m9sZ7xHCR3Fba8P8AkLqMLRcosBfoE6Zz",
  "key45": "5knVpkmGUWbcsW7ZFZfQLULVasoVVXfjU8KRwkMD3QcKPiCvkbNytUbAqq3FHj1qDThvfQUefy3JrSfkYnpa57sg"
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
