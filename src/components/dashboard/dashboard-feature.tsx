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
    "5mQYAaK9EedRK1MKdkHWFfh7UiyeHTBQEQqd6TA9UP1FBHQzxWkxT9uUipZPhwcZXoAnhwTECXQwjPh9uyChGvaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KwrpUAQmukRFa13GxXdJu1mRFWNDF8wApoMQaEHjhWLX9NsDArsRHbh3TXYGxfBXbxX1TfCtZEFMNMQtyMHBKSy",
  "key1": "2Smq6QaY3mdjeBKkyLLV65f6jcjJea7S5R26CtgWUpCh52ZcQwtBsHYd4Zvwro4mgg1AoPpWEU7kGQKdJ72goqEv",
  "key2": "5vewoWzsxBqrwn9V956kkhQS33BAX3BbAgjfhWVKThJJzRkv9VhSrF5sAiYxnCvtKpywR8SxGKb4hVUpaoB2gVMr",
  "key3": "3eGn6aJgE4VVAD75bqh8SDKVWk95YSHd68kKkYwBDoh6C34uBXGQJvgqesmjajW4DRyfb18QZ7kb5B5vPGNs9UAZ",
  "key4": "5tEAt1FW6DjofcGDZv7cpgA44Vt4YASy9xFo24EXg97vxbpeH9Qwy8WsSrTzJwYNd7SSgKsvJrY9bnsZoKYxKCbX",
  "key5": "21vHE3RjS6uto44HX6SYay4LaoUPcoaE7urmTv7CMmzkmmxW4PH6SHBf37GF5oK1SNvRskHnyK82e3hJZyXMDrZd",
  "key6": "5eFWEezvekLWs5TBtcawUKo6TbhvH1iv3b1Pf3SzTc9gX6TbNGUuWqSi4EdTao2khD7925ThMuMijjpj27mKNMBg",
  "key7": "2cUmskKJj1u2rvGavonyk4VRmwiynTjpcNzFfiibdzpXfSEKC1bLQBChSJopmsLoXLaUAfP4EFhuYdTeuuPfA4m2",
  "key8": "3qRUe7FbFc6MZda1LxH7r7aj5fhYCSuccZQZC9RspjNQ4yUP4jK7a33M41VM89JC37Cte1GJkjzcGXyZ9HdWsPqh",
  "key9": "2fKa8dZHbzjN8ALTYbbnquvjoHgXJTodajnMJzo4d9jEVWvYf4fqXhZo9igNj8SHC27w9R1ocECczGo1JoD6dZqN",
  "key10": "67q1PLEKZS6iv6GoaF42HpBe5GFL3CcdL8V3RCq94uDgpy6oEPxgnbFgp9B5cPTbSdr1M4DzJZc64av3BcR697UE",
  "key11": "5NrPaqGTBfu84FNXz1UUqp8ygfBq6wSriSJBm995axn3Bbh1k2Xod9YXRjhPeW5UrDNCH7gtaSAgSfEpWcHBh7Wz",
  "key12": "4pEcySrYifxSiyuoGjZn1JiyZGQDQddBDmoQW6tFJ5bsqvzkWYj6wN8nf8s1fkghYANmeHzJE6VgqzFRNVsocaU",
  "key13": "2XAz6pnhA37B4wZHxKBHvZWzTSk5o992pBtN4pwJRZEmGCeDtDzCQMg23Dmzieu9hXKNUnBtCM2A16qfcedXWikF",
  "key14": "2uY9nrggZc46r7898Up9rzz6ikXzmHECK5UNMr5jSonF83mhr2QXg2twhJzRJs2sRrPewWaHME1TMVTtokB2MHLK",
  "key15": "5kz5p7V9wsCZ2a3Ev3nLabRwJmm5u85HohGvP8hrWkpK1RrzXdRk89hC7TQ3apMi6rmuccg3Gqdn72aEj3uLZZyr",
  "key16": "5gPTfHB6qYGAwJttThJMELkFXod4TUfdr1fbYTQsxoYuqn4tNY1PuYNiKCgGgAapN7QMLAs42Pfkr9dFzEVfeDj8",
  "key17": "4gt7sFqV5vAi3rFj3sxbEmAXo9vHFyvNrDbkRfcBg5KBEasQxMLdhjHhAec4ZTjJLENgTUnDeFYJYiDK7BU2cERM",
  "key18": "66AQEcsJ82CQPBq48YD1qZKLYss44YTPXa1cVmVppXT2FqS3HLWAHq9hTARsyhEr2kC22ZvCWj4hW4RYXx2D4cEE",
  "key19": "5V7GJGXrsS4RK6PDsEQrbrwkR9ZbsxCuLM1Kfy4qJ2BMH9mrynjmjGvaKzFdVRMfDm5CpPDuFj3ZgmWCKQqw61TQ",
  "key20": "2FdCpfccUwgYRvSVu2BKK9N6ffQjsf8zp7UfuaMti3R9NU7Y1c3ipde2xQ7cX4dVDGWDEky6pB92sXrKcSim6fqS",
  "key21": "54rddjzAHDTb1oQ3wZ5Bq4zu6n5UFk1zJgS3PbEFR94QNHhwypYduL3NJtmBBSQztjnNk5SYrGBwCkNbenzJeMFt",
  "key22": "5qapcUrPvBsXpCCTtXDGJTMGvqqRubQKxBEdveTe4cr92ratEmuxSqWSAe27YaKumv9xsQ2kfbPzDypXAA2FqYMD",
  "key23": "G8bTjE9PeUf5zSBbBRAafdwFfX4e2c8wpPxDdEz2m8M2ebvqRoY9u3FDrnRt4rh6t63FkmRKaDThqLjxLin6L7h",
  "key24": "2xbU7pXLJjrHdakfBKM8ftK6y1M48Vb1nmBrz63C21VCT9aYnLDmRLG77eoavWGjzfG1FY8suzFjC2EHMxXH4EzH",
  "key25": "35pZSXZPXxZw9pbTJLGHZguMnD4mY5n7HzyQmLNBdfn2datQiVDMg8igSBnmYQaUUsPxAQUDQ6EJ3rA8BWCNTGkr",
  "key26": "4YHDe3E88KyaoCXff6vZitk1XoppgdkN1QvQq2ZN1ZN6XmMdiurMXMjfLwcijXQBiygg9h88tBWvs7vgxAQtgvLp",
  "key27": "5ZF6sZaaZA4W3CXK6aRU555rThAHqRobPoAifFXJXTsVmjq5Ze9ggHWwb5HK7uyUTUK8N7xN6nxsxqmEJGxo4scV",
  "key28": "2ScHWpCTKbQaRxrxG9f1Ytwy27PBPQc9tERdEo8pHUCBuraaHZsj6uBpxsQFQmtrmmXLqwuFB2oNtKrY73ttE2Vu",
  "key29": "4GhPw7orRQWotFi8ik5WtrS6haLf7x5JUjy8gvJdCUYFe4epkqvrEeh76VK7tEoQMfZW9i8FjzKkZS2RFrHVRSLm",
  "key30": "4HU5qUTAkWFMdoWdoDNWTvfYrEDy1AxoVazdcYJiSvvNv5qEJgNpk4tQ5Vvwfms3paVQoLZw7BVSUN33bDihcKMG",
  "key31": "34K9hKyHg4rKxjiVVPNuysZn1Yek4u4RD4wT49sGL3ySPfZqnKueyYkjbesAVxzAAHyc38eb1Gb2tRmwsUV7Xe1q",
  "key32": "v5WTEruLRZggz16hu9MxLRXzK3Uxqxs5w64KkyUKn7fVrMZHwpmyx123UxxFwafgrXPT8abSe22qPE9WU4HRYUR",
  "key33": "4wgpWx3QK8VA83NxvW6ZvWRCAZV1U4bpQRQPbepGc7BNQsizLcV3e9M95YATLgpjCrzrqyBmFJ2NUHL6TYqxtfxr",
  "key34": "JfB2tCyWEJJ5Pwu3rCiuTLm64sPN7cGLgsGK21736LYqykGvHDpXsHHKmzqRUih29nZyGUGccDaoYcH6g9NsJL9",
  "key35": "toEahjCU383vAKf7WAZM5ypb2qHvFRKfAn6rRDGZYTYMUkpP4YQSQgz4sN1UY33MuiFwktx4StzDNUkXRCPST1w",
  "key36": "4DyPPXHbkjNZ9F2ooSY62hvWu6sx9m7efdeCvTdxWtrmEcaC4uqTphEZUDtVWZLfJMtLdPYoPEpyaa3Vsts3xjQg",
  "key37": "4fXduUg5mUJq7pNJZjxkvYUR2MCcKHEEn4jdR6mhAwSUHRjZn2sBKfaEesrZ2nbykrMmeBHS3R55WFstVqcWUQgq",
  "key38": "3du3y7oW8fMyA2x4pUNMGUxwWbKUzABQCVhvhpNvUmPG4HR6CyMe3skCeQToGxiHfBckGecFakVdpA8B9ggpPkib",
  "key39": "2xF6v8r6kuXPKUZEeNi3c7o3NApH96QBAAfLQQwt7UZpkNpXdJXDZWMps1bPTPiQFugXLs5i4FLHSUN6Pw9UZoNV",
  "key40": "UJfahsEi4R2Jou8KSZzaVaWpjmHKV5upGQMHncK6tPjeB4TiR4oFRgY3ZhvQN2SGLjSAFnzZzKZQxT5nze72ajd",
  "key41": "3WzXfnjmhpCKgU2nSRPpjsiL7k1NhajM5Ub4gWS5k7t2Je5VNWHNR7WJDtRPuJXKhit4JgP84PyKWt9dcsBmhZS5"
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
