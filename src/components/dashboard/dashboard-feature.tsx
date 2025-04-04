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
    "2BsXWxE5d8DXH1p2oR8pAvDpZBraSGbVNKoebAM9U3whLBbKC3t9paGz2SHphrjmkknK3czwjEkBiXRx72XZKP1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P4dF4yiPYE9FZ84SrNYLqcFbegRcEFXzQGqJfBcHMWLukLrj6Fgbz6w3szNdTMbtZBLjF9L2jKBAqUFjdMbYyuf",
  "key1": "5Gjn6oSJUBra16XEuDkAFb5pETtULmHhSfvYp3MmNJPEG8wf2BsdjPA1nNZ5mj2CxPLau8N4tWoyHJwK3KQ49jLk",
  "key2": "5VgjQZTenhimzcWwWsueMQk7LQjJvWGfzqSzGsr6Rqf3MXxn5q3JyP42BzewMgN9iteQRzh54zKscf8Mb6aifgDc",
  "key3": "2EBYMu9qDY8ZtHLnomNJJJBifhLRPPu4KGr9RPjeHpBXPWHnbvbTy8DucixKQyhtSwUpC3EN9QisTfQvv3Sj4cka",
  "key4": "37CzUSRhtNgZVzrADsxjq3orQo8ZGDqWaGxYJL92SBpePpMm5KMDDxt2QPYXXmBa8d6hnJkJeEjNuZkb22FyZHc2",
  "key5": "5F5X6hhLZkjXmPmVdWQ7Tmp2UNBSXfhpYbLKwu8pHsuDLMBFftdaVkXvqLNXohAYqYXuS1YkayeXJTM2QipsrFYg",
  "key6": "4D33AXvZFZAEaX2fHEqKRoYZ4oJASicA2NWmC1ZbSJzUZwF67JcjxdKnHPkvaz4TkHSoN8TachiTg1zCr6bMpcfP",
  "key7": "rsmKQ9muqV6grTtp6auiiHdxy81gvWggMaEtwcwW3CU44zMWLyNdVfruS7HJQNCH8cALV9YwnPWKfyFFuWTvm3g",
  "key8": "55wsgtGB83MZxkjp5Pdb4RcqaG1Qwnfr41uYVZqgtLfXiC1GuYZX93S9LdsxhTwRSzbBBGqTBJX8yxWECTKqXRCz",
  "key9": "2jw4ihchbQQMuoaLWLJgkRaH1M4kkhrDTdbmSsRgZpyHQZqo1j8bVbLkbggLMg6CfCkJbL5hRCWFX4woU6VtCqYY",
  "key10": "21KgTgdhHso2c8vK2s5m7rpsLasN4rKLpv9tnuc2717ujPvLQoru7yATm6GU8R94QbHYQZPQWprw9UxtY3kNKHRu",
  "key11": "2TdMfzHk2ioTJ1i29wCe5U68MDo63haDYzBLf35fWZ8GYL2gF425p8ZDefwUFtV3S4no6ebtJakMjcg7nWrVvnmo",
  "key12": "2SJriF7TGrFg1VE98YGMZvBMjc42q21m6hr2GtZcBYR2a7jq5wfHoftemMa7C8hJhLfMxr6UvnWrAfqMVPhHec2P",
  "key13": "4Wiy39F7oixRWigMGG9Ma2x2ThqmsPm2KBe9EDwFwBjPktiRGfsLtnHSheJhD5ZZo4miRRPLoPuuFWKHpRdpNxFx",
  "key14": "2NkPryTEgk75nX2TAhnxJ3S48uz2VPDDVNEe4neZpLaEX45qkV6TgmDDaRKzKpuooSFeo7pk8SCUFfniDkU7fLT3",
  "key15": "5w5cCTjR6Peaki16fYYVCgYr6GveTjLoxriNrNjGbmfTq86xj7AAuuL2sHi5t6crDUshobqkqpFWZwvPmB8JJafS",
  "key16": "314oQLAZVZSjRaS2AkRKQ4dcrbjqm7NPmrX1TRdr1Qnha8ULdVncqEEajZEnvZcNG61RETFDTYdH6pSbUaowiPvB",
  "key17": "3KF3RBKNWcHCbkaEmLecr53gZsYuJ3THMugiTLtfj5RzH7n8mcwGgDv7Csx6aiWbG5CPvDkk9vhGP3FZsyBGS5AS",
  "key18": "hLbUvNYQdwJejwKSfZYr6HpNs24oS5Wqz1Bx8yrr1KBtu3fyZ6kkkScP4obG9YcGQfaq8DJE8Yn6ogDGcNkMQGF",
  "key19": "2fw4MLvGaFSZvm18EY81cLTU6fqJmzs795tYTnCr2oT1JKNdnKYGgpNsCQEmGJnHAfZt5eK4ZbA8pdJKDQ7Y78RF",
  "key20": "3FFZP6M315e5LyGNUid9mmrKxpd1F5X7EgCeGY3Y9tE2PDaagnK1PLgEqQcs22g8nsbtSi3tu2kfAvDnXvxNyKgy",
  "key21": "2SGAbEJy2a3HEkBXiKNgKRXYd6aDhtbtkVLsf9cgH8kL5wjKDD2D4o8QxfQYj5NdxisUaQgfNsKeHXeXBfgbrzL6",
  "key22": "5v5pU3A9ZdZbe3XW6DgGdkb3dhmaNA3BdsLaNo8rY4Z4gqLiQWByJVrAJXQtddRcxAAgMhWk3Gp8BW3RQLwssd8C",
  "key23": "2g3tiUKWY5m78Vb1jLUxZd3sqDgXW9Ur2ZLSKXmazB3JT5uJeZZfsHc4617JnibUM6mj9jFMKo9wz7iCw17yB2U6",
  "key24": "2zjgAXS3Z4uWoVQBV3RHer7wUHz4D6qhQdDXbgH3bvmXxEFZjTtd5VEiRSFsL5tBXEFeUXYxYmouMiL4cPgqi4Qs",
  "key25": "3a9yNiWC4EmsMtfZYmjcbpWx7ZUGe6zppMHnuhmGVFBsCGpNeC81pg6GQgqYRD3pa6wj9tbZXbzCYJwui4stduey",
  "key26": "5jagSqHDMQoBjYxuyQcdZzc7mrKLM8LHbBkXVSjyvbfCsKikm6Q8xNrTJmYxvQEcs6exJJUvQKL7dy7QdnAS3vJt",
  "key27": "3Vb3im6HjeeoSUwYsXAwxXjGjuy3h3ZXGmxTij5JrZZLAw6cwZM5YBC71DJvRaXHzDefaucoVCYaR2HX6tPgFC3E",
  "key28": "gz3USCVDWPgwt9uHXQVwURkrL9txM3tV6sVRYyfKkM59e3FutCCQpWekF1zPCmbV3JXKf7V5jrLs5d4VQx7q8rf",
  "key29": "39ca1CXfrRKWCuAxsUGJMqhSTVDBgyDEoV4eKWUpvamsjjQCSQUEuW9hPKcWYCH1wfEssxBqXPt9s2JpioaWZTFE",
  "key30": "4CZUEVJu1tD7TjHsY1NKeEFGgnwjRAErijAsvXG6A2QA6j4prrNAqPwHc4kQLLWH4KPZh4bDQ7SsRnkAmPMKxw9d",
  "key31": "58pWtgHXuJXcVAbQWymgN81umcxykHEQrvytJ7y6ped8dVAtNUvxgTNWFHaGmv2nugzGrVDUBgni9MVWbD5Tcz9h",
  "key32": "2hSDZZCz2ntLairUpq5VN35syN2WpjC1x2nbCPkz3Nh3z5HGSQFJgDGYg7bAcNqJmB3iJqNNez6vQS5nAxNA5ZpK",
  "key33": "2QvaJf6MBxaYWnZS6rXmCB4bbDdfwdKjuFEVV771divJQx4ZF29YyDBecBTjwNx73NvWwJHiGVXKGUgGPUrJjrdj",
  "key34": "4X7ptm7C1nCAgcWWfUXwehqSLBAjcbf8jeT4hAbDN4jbFaXHZ3YN1ELzod9s1P7PbkuE2jLiwKi3Ucn6mBELqNo3",
  "key35": "tt6ziUQGMwy93te4G9xmfu9sCfbWi3TWobmKj9ui68L13dz7bGvcAHApmW6zquHuf319Rq17egwNSFvhkfbRK14",
  "key36": "mT7FTarEBtL5SF1FdqGQkitZ7o6GJDbRJjdSdyikF7NvDijemdLd7Zs8pYD8oGmL2HQzjugArR7cFyTBWkQu25F",
  "key37": "2Wx3pY4QEJBZt9bRRw6hH5VC1Qn1XNNpvY9kxYEupP6G8BiUSsRpUaroWLTm85umqeTWELahGrvN1UJPuAtYrQQN",
  "key38": "5xdwyVvMD6N6EMewq4njX951ddhjuBKQhTRaYjdLoMueiRLbuJV3kQWZ1Sjn9v1pDHWN7CxCbedkVYM5aE7YkSQq",
  "key39": "5fWoQAqDjA6N1u1BYPkh7CpTytZicyDErzCYWnHUtHZaD72b1zxVKu1VZYzdXPJjURQM1XyBFLnpXTB8zNJ8ZKKf",
  "key40": "539wzdgSBZu7q28oKTEAZReLtNykJbNL4tVA21s3AFNwz1J4X7nAFDosoV3ZKohhsConL5BkXyxuYBHNmobhtTH4",
  "key41": "3LeLqhLDxULLxr8SLLrEzm4jrU5Ti5gHP63yyjjubAqdKTAxjnuohF11BHaF2wbWpSFMvTY7UthmkbZva2etU34x",
  "key42": "3qwHKGhW3QzW9ABcXKQD8sRerG74aEPhVr7TArRL768AaEN1wDSyZaDVpkYct7yzbHqrkE7ayXqjSo4aVhW13bSM",
  "key43": "3AMa9Ws7h5xAnDrcTWbSDJifvRYvcJRA7bMgE4meYMmxxy6QuLUNJWbDRCpYJVMCUDnyncL1s91j7ZVUdmxghuSM",
  "key44": "2mdTqhY8uXDX8gQrs1aF4DYcVetpn9WuCsTbychhJAcFqYPpkjQSmJcceKqRwmig8aaRiTWKv5n4kZUgmmnGveBs",
  "key45": "2ayoeNdBKi6V41BGbo8F5juUzHaCfbByYmRHXSDkHQoskgc19TE4cNL6oCY2x4Xf6eJXW5C3pJTWLHVGDCcF238V",
  "key46": "3FF9mKvERX6UnF36cjEVeMTqSRPC4MgtxwjexV2GXc1wcGz86ENWe4QwNSXDDm4bmoZMP9pFtiiXs8qAf65NQQVJ",
  "key47": "3jMZfTCD4TYC9gE1NdXysN7PttgwtX2UVhrDwaafX182usB4roHTDJi7YYq4i8fbFQmYwhsaG4Qoz1FzBCLd7cX7"
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
