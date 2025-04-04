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
    "2uyH3kbysZRzVuwSgJPbQhUDAvQBBYwM8K2mVPGdHQHaYZcmVtk87EbsGuE6kv4XhKRmgQKtjmbn6bgDnSaDqH5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YwEE2jQa7yfWAuTSbfgcybYbDy6L3CTMzrvg5rQ1axr5EWcor1zud1ccNGMDKwB4X2bkRywHF64kM2XniZoaGSe",
  "key1": "2VL54TtuFfJwY14wH4NzpvKBs5rQf7JYNUgGyhzDLA8qfsxFsogPYtHCijxxvyCjV17obA8JQDRJbEVnm6aFiuRa",
  "key2": "4pXG6sXYbVGXDzsUdqXgQbx3MQWU8zPzCAiqTeVFcL8e5pXedwm6wkSteDyigs7o61mZxD6eBxNuKbYrhMUM6p5G",
  "key3": "22ePgnHfTk184dK6qLt9AyBsrUoPVm9Z7ZuJL9Ss7qweJBaTa1EwGvS25hnxjhzcyV56yrefvUv7EfyzgrpeggTo",
  "key4": "2AXRQvtE4de5KWmrmFvNHqQTkpK5hBotKWrQuYMKXkhjrnfvBmK3WNGdV7V3CZYVZZdhG2PLuUEkLf7bwAsSkBQZ",
  "key5": "mHQW3fKzWenc3yf1vwz9goPWukrTVS5aPnomjzCNz1bWNHdKZ5qeuPDkPbELAb27b5ftHhbtpUMXW1CqmWcVEqQ",
  "key6": "5Xrcv5L865BGkZDQsVBrwr1nbt5nNHLeoxiSZ2gNFerNSs3LEZMBdZJJpjHdQbJuY6q7XMUJaRw9WyVZ3kY8Dhgy",
  "key7": "46kGm84aerHdKbKoAcocG2ivH4qVw8PyH66qL9HoFp328ppkeZUiWp9rDXV99wPNV7psuQu56CcFcDoaBR6BYLhs",
  "key8": "32wvswNBitHJvv485oT4QNTofWKayfdyP27ZkszmVLjJNguk4redu7BcGC2T5BpQPUHy5wHK3jxwvCdzmc2mTamu",
  "key9": "dcCG6ke6NBS6hQg3F4ahqk1myUJAUDMn62GP9STVzndUtUMbThYYXuyBg6wGoGzRVfctVreeeXfp5NQpoAkMcuA",
  "key10": "2vvk9eR3M9xbS8guYUrG6bKjWNqZaUyxJVZgn52SHHB35gvvQH5rouvGD7c9aUENi8yxeLy2cPKgujcoe9y8oPSA",
  "key11": "HvHBe9KVnrhnXsonM26XzvKtxco2QKizRyLxsfx2NWtZ1TWrK3ekHdpcEfB6Q14ubmCvdJmbBrt2jZfEwYtozLo",
  "key12": "5hpMoWuNv4P9ZJPo632f2v532gUgf4AdjsHxgzGAHeYwjk7QLijC3Wbb1wmAJkWo8DGupRarVK52LUrANsfGyoSw",
  "key13": "59EuKuE3t9BcHbQWqdQnahZVSbjc4MviSsLB9RPe1GJybkLkp1gV2YZtaUhxGG6JXrffjCvgm1FXgFx6DWku4MgR",
  "key14": "62yoZSBP2WRWvsLM3pt63tpebdsmT5JNWHazMmmzp8xWUcGYBerxZptx4FYbZX366NXD1qDonbiCVt4qXuF1U4NV",
  "key15": "5RktUiEFmTWVojL3BcYHMDBbHBMGPZV4R6zgrQhu8zRAizRwe8sdrAha2bKTppduCuJqfSh5kW9axf1P65nuX6sq",
  "key16": "39sdUJbv5TQfi7gzwpvUbfjDcGvZHSgSCXooHbYnGcPnDe7SHkiPFAbiML8vDA22NeABRpR7tj1xsirxUZvqNYgr",
  "key17": "4GkgkZaT6fEhcz5d6fzqerwtXesZyrup3rTJArgQYv3mzfDQqPQEgttyxXsQcoS7Lg2vdU9DGQs4uY2jYWWTkSWT",
  "key18": "4hw1GZ4QCpRBSwWVcDGcKDxQaLFokSNrQmEGvzbJLb4ZWYFoTQiE92fGK9Q1NxCj847vp7jLnTE6f9EivhX5CHwL",
  "key19": "4fWsLqsgZ7RBvCp2a3T32dm6WFXYTiWnyM9xjJM3Zd1z4GC8VnbkT1az2yHvDHhsCpqLMNvNkXBej2XEwWgF3frf",
  "key20": "59TSUUBCgWDaEoQaNyRcpi62vJMQoMuWxvDtpo8vFR5Vr9pSAqSw7oXdnXt11Yxcgzv7GXSx4EDbkFVvyKmbaDf1",
  "key21": "UyPYzGojGHzJ1j5EahnVm6VZrsTy3XWgvmi2LsJAPAg3gQppMziHeh2vvHoRu8AAGspNKYhoTrYsu3XUsacBZre",
  "key22": "zxAaGf1PY1uLsxHEeMWmhZLSxqHfNtgviiAx7fA7QKRdohtk68xvrLp1a6N4zznMKGRQMm2Ut6oqmCbnUh8qSvc",
  "key23": "3Xn1WysqsVZEkhAkN88oVj3LZRNv2ogeEBRkQUe6kJmAEwaEgaPrhZJwkZiQqt1eS8mNzySyHAshdE2Sf6v3vjWy",
  "key24": "3mEdFdoDHruGKHWZGmXHhXfp8SaivxYzEy22hwjSGTG94RYhVkY9g5HZ9yFSCNoT5876HABUqFU53TDvZGh44id8",
  "key25": "6rqh1k5FtiKVKCyLobjggdxzTheztfiszyRpPrwMJytenbh8keF8WkZCAjYadRGeKojM2HbnTMMhea37dkfToLh",
  "key26": "5QQHC6vZs8CYMNYAGe56m5WNCu7XSpeKrbgFkKMt9yBwoGDgqUGW62KWkEqLVHNhreSD7jDEZuJE9ebBPZehdK6F",
  "key27": "5fXQq4KL1ogX6eUN768FVhFX9fhLZXu3ybg5hus9TsigSJemCXDEzmEGb5Pni6TtdQXiukgMbTdD5e1ZguYFQCBF",
  "key28": "5gGo9WtwGyNhgCa6nDCpNojY9jnmW5qCjkqDHCdu8K1VM7FbUUPm6BarBHe1yp9XkUPjpHoVgi38HbPSgcu8mkea",
  "key29": "4VpnNYnrNy1oQub6T5jDXzQVhoctbrWEUmErAJ1XXpLRbxupNg7xTYhNnvxUYFjMCsNKviq5HCkqACjX4gvZEfn3",
  "key30": "2dSQZfLf8rWYSuwistrEscnr6C11jQtTYxW6UVjh9y5yAcYRPY1BSw4CLjpmzJT5jcs17rFzwEjZydKQKkKWuWqZ",
  "key31": "3qRVw2vDETnCXVMbm2uCd2sk5imnidfAE8wzY8WdN44MfLFcTqraoAA3LZQXmTpqTBEHCTeyoKjPbxqyLdrHovVy",
  "key32": "336ja2UvTfysJYyP2C3cZiPpdu9DaTFH7dV1pg4hjpF3Ln5dWvm7Q377D3Mno5cjdbAwXwM4LRJHRHYfrQpGpKWZ",
  "key33": "42jYfV9CMnDTUzo9z9EvZVwixJ6E9FsdFPDJTtQsnxHLN8GHkL8uEpbpyvWoRfaYAmzHGZiysqmhvz8bRdAfyhhg",
  "key34": "5hBETKmds1Eu8e98UDnJ8UVDonjjXJyeX7H8WRPbZ69Ru5WJN38ajVP1JiUr6N4nHgSUEtULaMzgZT4oQD2rYzJ",
  "key35": "5MPMdU3CBTKJM1ZAQPhSgpXusfH5aAL4niwDgU4qB1nqqRto8PK1uqoWn6auSvi4Wh3s3eNBhnQNMbJWxtZvLY1j",
  "key36": "33nh5BBz6GnFk6K7YVrpXX9nuSg9E3FJE5u8B8ed8FctkrfTaBajpuXwJkmGh9Pa9CNj3DUBgPGfaP1HtQeQFHed",
  "key37": "4LZdJQBKdv3ffu6nHJgEhBAZh84ADprj8LFtMySENryfpiStZKtZHPmSXUHi5nKX9TmXVGW5eTb6LMTQFBfLkYaN",
  "key38": "76CZavMwB4krESuJhGEoWEerXgbiR29diK2JwZb2ezdDq5LQuFZXAwwcS1DUSMdeZT6APZS47MSRXYW7YjeXmAS",
  "key39": "52Eb5uaCGqfBNW7ZkLwq2MMy49jkQfZ5PbTRqtYLE9rZRYzaMRFdkG7vJoQf9mnyjj75tArsyTvjSgmzeCaTfa9w",
  "key40": "5MKcdugvphtc3THweq5MJvTyQNTRyhFQywiz5R5dLbwyyESdLrDcbwLX1fyzMEaa2cYpUU6UpFmPvst9C13BGQ3T"
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
