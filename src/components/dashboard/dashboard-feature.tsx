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
    "4oF3cDVdmW6oCswiJcKbmSJXRna6GhVmske2XKBjR6yh5pHc9nJhSaZNxkhrQy989udNwaTkPHQka4caS6uERQto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZHgXvLygVY5d5YDBg3DynkTWXg3eTquaTXYuNvbF3DcCHJV3v3st5n4tFZ1ZVaecwxaVKCo47bjkCVUDiKBRHs",
  "key1": "3S9NjJMpGFu4R1ecpW75gFv5WNxRTQnGeQn86xqeGqrXHKabmxtPMogC4awnjmSHUNKn3TBhckqxdzjNakCpNNKH",
  "key2": "3NLNfaTsFfMXfbHAT2SRCQZtBptGf9eGAMjNX9WLFNsB4gHubYFhjmJfNrUYJPsRWCHKxQWFWVycpT1EWCDMsm1z",
  "key3": "58CjsHQkxtUydggRNoZqMWFxJrmB7Y534eVrMwGPkdS5A5STENEKjPX5LwHWoDmfaQyBi6HZQzuC5BA8EGSiyrSa",
  "key4": "2zJ1BhfaV6Zm5pJ8EWWbzBhMThjnGT9uyjBub1Mz6wTaZfrdXozwnMJpTVH5hEcnd6uA8w7mEf61UK5TWsxaQcq2",
  "key5": "4a331WhBrUMqun6q1amQywQhwPh3GqW1EdngC3JEH86Rzv4GZPymhaTSBifgQ18TbQaSVjuAbY8sFFidkNUDF18W",
  "key6": "2D77w1qVK3CnnwufzfixgNxrc3mMC1CYQc7LENiyjuq5kRZizXWRBn7H7DjrBxnnwiZAYem3A2cLFMSyVixZSvTq",
  "key7": "UN7qsLzjYvkADBYz4FiUdUTV3J8H3G9Sv7M9NCjPFBAJztP3Jzz21GsyRBypKiWj74mkmfM2nfnSjCjY8jdgPKQ",
  "key8": "4oo525QXxMesKXRDwUYZeiVYRe478E8rwqWXNbs4ERCARmB3jxiaRmaScC1gzuETvZ3Pr9ZR8HoUicRY63m8irWT",
  "key9": "4mgUPmqTTJubLCAyBBbLvJnReMkjjChy6DEEUzk6SozrqAtGPxvuybZupyV5aHAt21PF9XWb3zAi6gWYNNpiUSQ7",
  "key10": "5BQNqEKaPKadXdEQo5gZwSPFpCe65v8Jb8MPEkJbpjvCeHuj7n7QYX9RkpsHdeFjcZmwdvwksAH1tSeAFkbMYDy3",
  "key11": "JgQtdp4BthpXuRKBZBRDmwTb5MCzEPmZCdnPyBMuwy9WTHeXmRxn5WTdcoCxzKUAnvN9edGLjPEdZduT8u3HJbv",
  "key12": "4UfChB7vw7fZhZYB6dF4s9gcg7xvDg9HGCRadLgGkE9MEqj4onunmVRapXo6G8s5ZL6ZigQcTjY8aVNbbNNkPDGc",
  "key13": "61W2QHv4WvCf1Co2c56jbSeyK63DgE15amrtPTGxukTHG7k77hpqgsnDuoBeUVvpaJr4fsW6ToKUD4L3H3yMbcvk",
  "key14": "3jqh27iikRcsvjDzCZXCnaJfTh359Varvibai3wkrkR3ykRiPx4a2v7UG7o7eBivW457zZtvq14sSXUY1SrtpXKs",
  "key15": "5gCD7VfqRyAdAiy35JTWYe5J7frbEEsKjLVSgpnJKegNw2wjV8dwLTgF69oE5GFziUpeNtWfFpNSDQcUwjzQBEYR",
  "key16": "4duio7NL3AL6aV9kqQsAwwUaLU7iYFUGB3zeuWmFZ3fJgAiFddgSr75o92ExghNVZgijBgkH7YsjuFJbr2273ZSY",
  "key17": "2gWFtyuXAJDv8HPhNpcfKEctSy1vkDSXRmKRxof726ghDygB83gyQmJTopPyKMXHFfci4JzmVFcPJ7qtEmLMZtn",
  "key18": "3sudp2ayZZy9cGCGyB524qqQYMJtZCX3s9GEGvWnfQzjNc28VJFLDbh5LRuBAPo6fTAit4kNfRjEXRvo2TtMPY6M",
  "key19": "2jDTkYBLuoKgw5iZX1LoWoJJwsnXebwypnefmHEvpUzrEFM8BFhA7y7ue7C877vnbJH3zMTzeH9F3h3kad5Jcsqq",
  "key20": "3SsLnh3McSPvKzoTKzszfp2JLzYhfGYaj9wAG9T3RX61FKx45supwxhA1i2vvWfo73vksfp2gVhonQxX1Y5cCNyj",
  "key21": "o3mP6aUXoJtzpQhXmiRJKJ9yrKcVZQjjkhwp54tB4N3Ezj9MHyae1YzyseEkW5nr62Vq79T2XFdazBuQ98ry9ED",
  "key22": "tqFJMmXPyVcmCkBFBxJULJEDr6Gk5fTf26a1Ra8VBaChDDvfvKQvo3uVpwSAo7KvLY6M2oywSTf3YL8dQENx9ct",
  "key23": "QMLGZxoWHZq5zh8cYNK5WyFXPEQw4imoHwDnnCN826R4FHD3YKwsPb71jxRaVqkumLviUeBufgoLrxxBKJNUhEj",
  "key24": "4hix7PVpHm8QNf5tQJAMyXdeYpfSbGxAQPvHNgtNEZ8AZeHwZZceFiY2seNghX4NRz2Fu2bZGXuhpdMiCViUU4bY",
  "key25": "5aFSacLE6qF1PHHzXoiqtB9Gq91tmgWFnLuFCc8DLsw3LqpgBpCUET3AEJbyExsXiCd5ETuxoRc7J64vjQq3pNqd",
  "key26": "5whEbrPnXRsTE3j8tTmu6YpXoBY7JXSSxjmVP8VRkYGB715bdbmv9V5MuYtwmrbG8bhhnoSk9TGJkym1iSWEBkts",
  "key27": "JaynnkHQmXLLjGzUQKRHFoGuuSMFHy5Fv3vV5ynr3Tuxbfsf69VtFT9oYJiNMwJDLC879tRTfkE3LDhygYEEyYg",
  "key28": "2NnkS3hUvYHtReokT2ccUSyje48aBXAWak69FJmL3jcFHEhaG4zPZNvKTu4vF6Qz6HUmbL6Xa4NChKrZW8shqsvV",
  "key29": "2aB7vtAJqubwih5oS4Z4DuXLPqm3Fm5FoUpBMGRDaAqy9cx55aMqBsuwMSutHZRx5dt4CF6Ufdtet5GEsS95oTnj",
  "key30": "gD6zCYhtNvJCcE2KFBpx4UZ35gcYtPrQY5A8PuCtfrkc58KNbEUWvcrTw6qBqyQZxGFenpCyLfgJjkwMw6d7eZf",
  "key31": "4AzXooE2bJS2uhV65UouD8UrGjqEpyxzUr8Pd1ddLHdC5xgmkPGeVDfLog6YkzRQmNs3bZQANFU1UPirXopw48rB",
  "key32": "58CMhe5UQ8HZc3mStggPfnJ1QC96B1hxSMctusvUJqZp5VyNJdrZ6oXaVBhHQAYTuUdNkfktxef1CovJCMvvpjTb",
  "key33": "14pS94sh1VmcEGENBQNc1MQBgg5D8hDLxCirxa5fJdcEDanAHx5Myo3vUHuvKWkkYbArrmVFc8G77x5Zj8RCX1p",
  "key34": "3TRkD6SNp47ecJ44aELCXUsvasvqQXz2MKtJXxwQph25zkueupXH5bwkynuQRNX4LCuGEgQsesfmbNWdDS7FtQZn",
  "key35": "5yXBXTTnHjqTKkFtRC81DZSATr2sLH7SQLK72tEAdR7ZGjAJXFPftdmatN2T8XRYFiGrHRbTDDcZMxvQqfN1AGzM",
  "key36": "JdCypTMLVcjRtUbKngkhwSEjiVxqYYXVtKbm38a5LiUaN9xDrtWjdtPZczPYSk5whY3VW9PcMRBptDwf6R7rVm9",
  "key37": "4XY6AoKeHw8TqLxgVxBtbEX1UkNU8T6cT6oYuhPnBRtYPbBZkLgurVWwjDg2TDCRoVUbAnfQKedoL5Rw376jAVcc",
  "key38": "KnMQ37MDoZ4kPvhsKG4VAZCr8nnE7byqtVnxKuHPFyXxrYaQX334Sa3B7NdcvQfQkBRrzH73nWMSZNVdyNVAXrT",
  "key39": "2Z5Kq4N4TaenP42quCrbz3cLacgC8nuvBUjcKVFa75qqoXpwwcLCBKiEUspD8R1RESSbVv2DR4JPdM66tBsVzb7C",
  "key40": "5UR6JcGJajjfJvoBBBsFwz5DktQb4GetmDhfwaaTqVHYNyJGf9cCfjSgnz38eVNu9ruGqmMnJyUDYSixyX3bZES5",
  "key41": "C2d4HqjGcLLBLEeqdKJBy7476gAhvURArH85yqkLC7zGPb2x6wt197ieMBriXu9foaUUmd3ZRNVFjSR2TZaZgWK",
  "key42": "3u93oekshfZQJK7HwKwLzjuyfTQutHuarvGMQXzrga2eMWqmBgK1Fzm1GZP9vVmgL1Xf2S5ADywcZ9iJG9RMHKqx"
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
