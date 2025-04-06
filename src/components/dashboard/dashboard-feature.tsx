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
    "5qD1SxbGZZbn382QnzvmTeBRtMmTDMRGSWRxh84Euf9177JgUZStW9RbnFt6xdNoZ3amMhDcvvXRnV6R4sWxqu4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J7PypTG5D872GBvhftMod1wiKN2jnvjGvS19fGHemEwe43UJSmVdEeZNF2vK3xSJ7Kmfnbmw82UcJroAUARZ1Fd",
  "key1": "5qrRnsA4QKhtFcXfMzxnnZ81iNVQCMxn4EGvZ58rkCCz8hpyicGjvqZ4WiF8aL59giYdQz6z8HpdJo4qkcxMqv1Q",
  "key2": "G48E9GpozbHPVrxJgYV7jnJJYiFf8Ty5rF8Jg1d2rrS81dWcycuorXWdkDRoe9disSZZi3x5pTAFSTv5v7uro1V",
  "key3": "2dGRHAyXqZn7qYgaZX4CAY5DUxexUDmzJrJnR65KcMkjH6wFmfp4RsX4isfW6Kpu1Q5bwZoayasW4YfyQ9gAYLWb",
  "key4": "5rdajewi2PsJHbZiMhUxNNBWESZw5oq8UANDpTVQ2W8J4vaNRVkV3gmv3QYMAMGjejPb7JqNyaSaZtFSKMuth7hV",
  "key5": "3t5ENY1UXuAotkyQZ4euv7cc7v4q2ZPTSNh932xJkftqL9Lk4asAmgdkGHk2GxgfR7CTmFkqBmahkc8EWw7T53wD",
  "key6": "5EZPsSYqPL5cJbY6NfGJkgz15RqyGnWxcYwZp4NZ7p8ZrzvjSyqHd2fTkgfPNGLnv3pCTTHTVpMo1hsdmN2u3C7r",
  "key7": "53doxac1wbijknYS7MLd3zUAruEWXoZhzAkKjVgEEZMr28ABMGvyGVBjZuGHcmKuVvhJvpXaxSkbURLMr2k3ZAJu",
  "key8": "5724X2EZrEVBDPn1MUGpE3osrsAFe4YkkHSmU31qcZ3gjs4NdckzX5x7NZ2aegFpfJbi4LRU9HF8U1ZbFceFfH8Q",
  "key9": "63Q1N4Ty2FLhnTERHBuuk8rj27A7FTxJpS2sTNRgcaN8LsRagnwpsQv3kvrETV44YbokXf7Akyo2WigU4UAFngSA",
  "key10": "5xsrGKgyd9ztb1Q55saaKyaodCD9RnmouXFtA3Wc5Q5TDGiuhpYZmZNokHMLmLRJWV4R3pqA98VKVtfhiGHTWDuy",
  "key11": "3CLFu6DmgWv2Zq8yd5xGNkYJpy35yVvWEuA3cf21kYfNqpNRjMCLmDqvjkKUTaMefBBhfqpZGtysYifszBnzNJ46",
  "key12": "5dRkNtQE5WJqTb4kBWWUm7Ctw9hinx8R9PcXAJkUwAtpsFQL1iZgtHFudTtSv1U3uUj9fv7ia8Q5CajoxTeBJBjS",
  "key13": "4Z3ZV8oXmvBxz6LDDDTNz2hahoBvqGFosdWKHwjB25xTvJGiU2ttHsdH39nTCWbcV2MA3fJjmXKbb9ESAfzQ5Fg",
  "key14": "5en8TLGeqeUcS3g2ZAQ3MwauBSNwihHknpnxhb7EXzjVjiuDmNxym5ZeUPeY3MVLH3wMGuwGdHnZ9WLyMSJYWyjg",
  "key15": "4eyr7HBtA3YxtveY7mBZAYc2jbLqEFtd4AEkmQVsqveAppDi8xQqDpZtQRPW2KgSptoVeJvCP6R32pXemWAj48jZ",
  "key16": "3TV2vvswaUhRguWZwof3nLvazaKpV4i4djqqho7MAw1kxDAujjqbMYFARYY465WtDQ5UuWLxAnDTSpeay9GmJ3tn",
  "key17": "2SHc6ZHKPD7aLN4k6Tzi1WZfzDDPHsbgYXyyHzfyFqJf9V6a2H5Vxe7d9QNzK8pXi9maXiPwviCJVkkPvoUHp8mK",
  "key18": "3vV1cxZo4bEiUjNES4yyUYm3AFFra2DiDoYUJDaEcdBuKJjuHPw8npDkWmWeq6CnPH1Y9WrMf68Mx2mw4n6BkPtd",
  "key19": "63rMQnikpiSbhSstf88MUg2yHoyZoWpemYxsX2gYee1hn3mhzDd8Uz4yBZoq94RKi3yG7N2ee4uXUFQAVf5BsWRi",
  "key20": "GBrvRc8b1cmaSnRXg9XG6rW4PC1ijePSJ3K9pBd71U7QA6AVXiH9NpRKwQ1SnGf1U2smXR69NUH9b8STghiVfA2",
  "key21": "2fzn9DTR76BCBQMKcw5mkSv6ry8xY6nAR3s7ZAzjSnCyVHPjPcP88n9RWFvp8DyMBoMkQ6nfab9r1L4iHs751vq2",
  "key22": "2zC2kcigqsz811KBKPTRnq69ZUZj7B32gTUZ1xeuPnQLu6Yyrv5KBemXbMpQbWKiByx1dWzxmGLoqT9sbRC5hjwQ",
  "key23": "2qVD2me6ydJDRTuqjB34jSVCwwecBj8t2fTeuUR5FK26N6YLGodvnfbiDbBdgqM7hRxbrV4pTMrL8AyhL6Nm6z1k",
  "key24": "5xnUDT8qrnTSY8fP8YhYMZYbY8oT4RUYw7hkfT23He8cm3AXQukw3r4a9UzbKSE2U8niU7kdBpgsMVcrPK427LRG",
  "key25": "2KxmD4DWwgmNdo79nkucYEThzQTy5CpDHC8uUNDEEFK4GHSghHkezsrWmnDqXkcouA7jcXJfnCQ5q7VK5djStNVT",
  "key26": "jvvWr46Jt3KBMLD23bxm6nwsUKHUvtSgi7GTua1LZ5LxLjbjBzahi47vfC4wCnf1bdwcw4zthAUCzAc8Rc5Q3Wx",
  "key27": "5GxfUQAr3gAKZwtpb5aWWxdaiDHzeTvi62i8Hyc4we7bXTECGQdhH2haC8NVdutLvzA8soG3CgKf2qsSQ9gs5vfp",
  "key28": "4ei8JthFuHGCX8xu5rNaUxr5xYKxMHUnTUKvdS2MEhAjzZukKrDtrNDKLEhjyKK1GAcDeonzpsHBa5kL5KhsnHr5",
  "key29": "5A79esCrWNkh3ZRMxZjEiKCd3QHuegS4e4i7tLAjLPEBFnjFziwicniSUMQP1ZWPgKtqhuaTnqQNTkXsLWaw1qNZ",
  "key30": "5SYxUKVPytWeRceSAwqWjrf1MknVSXsFiKWCtHzsP4j5zY3d9VZdfL1XMBPULMX65uudnm69y2fJpvgKevHvogvW",
  "key31": "5WPCb5GkfNjBK4eCvi9dJ5EZhsKQaxTAC9PaTof7aFrmjM88uvT5CuuJRfbGGK93V8ahrGMuFL6zQkV762M2Q6WK",
  "key32": "5zhqf9XnwvYmSuhFiCApghjnddQsRGn3u1S2SBipy2sHQseyT6NEQMJJdhLtY8EzSSkNTNUvyCRm3VRKppxragYt",
  "key33": "3kMN3tZtdLU4PKxeCQDhHN9199jLZviHL9UUmsS1BSQRproMrLifKjbuDRx8ndwL4nYs1KEcR9DKb2r5YmV6BL5F",
  "key34": "538nsGRXsuLRP5MTLt5N6Dbx3NindQ9sETn4v7B7yDUErE5CPgzoiRp7UYz1iMzoZ13pZ6UfRrwA9wpau3BgHLqV",
  "key35": "3Cv6Y26opTZXB9E2fCEPu6TMgJjiWN4EWYmujzGjrZhHSq7ANNe9SNn7SzwTWMePXAVLqAPa7mDeWqNBugxD3v5o",
  "key36": "NQcRWubtDxPqQQXrLuUvwra78Wh3BYpEFZHJdKfc6ATAp5G8bAqhh5JSXmLS3F3Ybgw7p7KKmYAQVuJPd2g6N6V",
  "key37": "5YXCxGFvpV13yynUg3kv8Vfv6fdepLvCPoVFi8jkQ34tYpFqxiqUJQvsobuP4TJ9FgdBSfeGm7U4iwtrdDo6X25n",
  "key38": "3q6PWbpGE5fU2q1t7sjtL1AmQx7SeCxph6t1KB3R2aqCnSXmGX2ni8iHdwiT2eY19GhtvHGBgAnJedtNRwDxF8BL",
  "key39": "63MbuYQ55L6FArxZPLjD2EDwZnQBKbPj2f1ovp5Bqefpvyo1po1GuEzXpkHYGdUNNTukNXfZBZmgzrS2iS9nLUjt",
  "key40": "2e11WqwAH7t7jtV6cSgBuBExyuGKzQ9gfvr4rX7PyxTtDR5AUh4suJrGDPUaihoAjY4ESBSDCduqfYb1mkzfJHWF"
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
