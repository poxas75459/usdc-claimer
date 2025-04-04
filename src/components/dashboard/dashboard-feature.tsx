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
    "pKBvavkctvdhG94wKM5Nxyv6T3nTCKP1Hbvz1ZMV8zi2T1K7RdMicWmJoCHjumn46pviSm6UpzJ1fYF33fFbSSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ayWCJcuQmr5WTuXQybvjS4q5ntQmGg3r4VvrYBrgKJz2uYtE9uv5DC79y2N21BVQQbWVN3HeHLJgLGkwtANG5Md",
  "key1": "4ArufMa2Um8QbQF4JEQQgqmntDEcBHVfXbcKb6FxCA81mbCiL18FyyU7eVZ9VRuft4zgKFexbuT4d6XAtSaBTAN7",
  "key2": "3vyzUJy4igSPhny3XtUX2eckApE36VMQd8EjLzKDKpRyRPd5QyAameM2BawfK4QMi8VmMXK3y6ewwth68zt2nNL1",
  "key3": "5bHHSmSZmBTfAvpHFToV3z4fZgmGDBv2RV42BBfi6kfWN9Lg8vYwz3NoiuezCaMvRDct75UaeW3VJ8cFd9izUNPt",
  "key4": "31iHJFmQcwaNXjjioAjGWS9i9mYy4bzVejXdTh6jYg4z1SFJEAWGSr9QM1ch9rgMmkAtSzT3ku4VwrEBQvdar44Y",
  "key5": "2gUDAiXJTKVGTTqro1DURmQGB37tWTsyJG5hFA18DSfbrS6UHhEP9YjN5KHnF68NxK2VzcqPw9MVi1pa224gq8DB",
  "key6": "4fV2dS2sKUEJMdhdoSbJqRKanRe7ENPGh3ggbHcaevhsnJZUBU3YBn8AiCEByxKHUEeymzm8N7xJcgFSLKtZP7oH",
  "key7": "4CsxgDNxPPY1z4uiTa519dy464V62pexdqQGhfMU8V2sdfteCThgHCKRnNrtM55NLCuHjWkf7dDiWnpMVDEF7zvP",
  "key8": "2KgEdNCkg8WczTWJUqJQZS3JGfHA2WPNhEGs1wSii9x13SdTZt6y8EBLPsYzYmShLZfqZawSLk45aJ2D19Aj8n3U",
  "key9": "5n4dNNXfWzzTYjRRdGNmPYL3k4rTsh6RGbLTBqpxkvgD2UHNwHe5tcUxC615MAGDUdBmWTCYgi1tLrNGofcLDBQF",
  "key10": "4FfpmjtJUUbLuhzM1csv4i5WFmLMaeUyzCb9wRmYeDmN7z7M6gx4i7a5wTRKMi8yFGvCWeZJnN6NtM8N35P5RFHA",
  "key11": "5fFZxr6bKJPVzFtWePmenunK76iHWi3WsAAvjrBUraXYdMdEptk3HPk3GotX9pCfAZW5dakeNAm3uGBSJ2Gpzhgd",
  "key12": "3xjWs9oMJQ85pF4Z4jVehL4AdN7d6UpF1mNx25R8FXBTzPEj12d7etq9fi6gcDZ6WsFEtJNHVbJaz5qt7fHjyHYW",
  "key13": "jDmTtHFnhTMieEJ2GwQTe9UEfPeMRBKArvY3aJTL8cxuNrjKoQDSKny9tj2CLriCgoEYoj2ncTLzsMTFN5MCo1i",
  "key14": "4XQCsKt4ATXGHBu9iRi3qZBr73ZxTUzGqd7y7ZtkUr1TVF4fKKzXU6yYwGWRkFfr76dh8ivAt6dQWrTP2Y7PAskg",
  "key15": "612LZVudgebJK5K16ZVuHDjw8PfPLEauYoyDdjZbF8zX8kNu8q6L8dySSajrhiqXbF3FKf9arLAcCjUgBUM2LdQr",
  "key16": "2qkpmdzCKKGkDjYTeyLRzxdnQZChNLy7cTe9ZqpbPYGz4eJYxufqXg2KYWgpK33XTAUUmDAaTWymZLRsEYkmC9nh",
  "key17": "3MVYv7s6sVzbfKggKwDWaPfCpVZwtxa5F6meUt7fA3WqUe99b93FrbDxv7NRAvPTaUeZbAtYkgWZfuJmCTmwmZmG",
  "key18": "QYtdpdsVyZLx6H6YysncMjKfnytrXJhnZ52RW9bxa7sZcKeEW2Kbm9oyWjyjkKPCf4RrmZ4hY5XhswKSoaCu7we",
  "key19": "375SEabwziLSLAhkEXdFeEWJ9QHQwwkKfHjKfVvJYnDyZZrLW36BdRdNuW7CM99ZSU4tRyuAmFY4JJkfuAVM7M1M",
  "key20": "QBgKRiHuh3wz3jfYPZdeYpWAmKSpt1FjFvbVmyqUVhhCK26vpFgT1zbEjczhc7SRdTevpZqrmfpzukbdQogwVJb",
  "key21": "2L5oUob6dpujdK5vrhkeeAviihDGBU6EroMhtWsNjUGknwdLjfG1WtJkw89WKNWVpB6tExEW6mLUbjdgocf4eTof",
  "key22": "5cacqvnrQYRSaZqmUQkHWwrMjs5NFyiBrjvW4QmQeGFNS6tt7oKhZbb4Yc2YFcQYrnfLQGd55hN3D8ppBawGVz9m",
  "key23": "2R3oYnp2ny94dm6notggjsSvz3yjbdng1L3ocaRqUXc1X34kK4UqitAs8F15nusUsNj51dXg9YBffd69GFB8piqd",
  "key24": "4MgDZ51m8RW6Wj44RxFGRoVjBrrkE1RGxckGhwfNHJkfkx6C6zWAEMpKf6S6P2ywbkPMBy8ThrGQ1R5sL2E98Ew3",
  "key25": "4dQarVmSgYTA6LNwcLWScXULu4VqHqzjCoCeD8Fgz6eMHrsv31Qv9jm3WKdpp9NQrXPpPjwWCRAFp21t8ot9Dcqb",
  "key26": "3Eyz49huZkCVigeZ7qzBkJL31sgJ95RbDiC8yNaYBTedWWxuRGaukVzXGzwTtRxFMS7u5dY7bgVdrCFnrrsSfZQC",
  "key27": "3gXmJonyk9cn32wR95VnCXQw29ENwrQWnUpqaBfDKUYMpiYqDKCtKM3fWRF6HNxf4g6i5GDnSRVqC9V6kCR9BDbk",
  "key28": "5QK6BBZ2NmeCtSD1qiNar6xhndMYSwMVAeZ9Sckm9JKdRsUQEeCyEih57SMUxbNF4tphzCqUo9KoDPQQdqWiWsmJ",
  "key29": "337FQ3StB5X1KD9mgCMg4KcdaqzbdTKCrY3n7qZSPpVet3ppdZ5yNFPTRMugGtk76Yqx5FE7ZpQwuE8zb6pPnfRC",
  "key30": "5ovDQbs6NRCra2JaX78m2wADHNCzNeYpwHUpnhdpW28MoiteH3EU1ZQpubHzLREpwopzgEByDJsSQBvgD1sizjnb",
  "key31": "4vCSMM9m7WRgTf6M9iYMVQsMLQw5CgcvvE7F15hRXpiwAoMerhSU3QbnqQ2LRbpK7vuCAqohvVfK1mqPToboXxcz",
  "key32": "3Fx5pXWXuWbPRYTCHSyW5n49T6Jk8sfTQ41GECySvezssTJCNFrBm4otjPkcVdRj3tRHNtdEnL8CSKBEEGnnQAD9",
  "key33": "4ejKLSzYASD2VcEE52o6m4J4anDiGKCcQLqph8bho7DHpbVgyy3XMuZGDJA85GGm44D82XSWp8bqYcs2Smak7hvt",
  "key34": "33wHijr2qvyTHTsUz2xGxqsjMk2ogKLRDfoFKB8RPJjRWZ9fcmH8qwj2r3tYRZdYrcN2vreFnV5Dh8rqc9VPbs6t",
  "key35": "4YhnsRfLnnvWMuE59HH68DCEJKFQu3HBF9Uvz93d8CXBzsi961AaMuAHi1Jpixjw1Cc416fp8vigyww4Hdk8qPoj",
  "key36": "4McaSjRDxeCy9N3QdUuW5iKUHhfjUC6rvSG1ro3vpNDZ1G2DeJJQ9gNvwd1JCmP9XKh5xGGgxLZYCChHjU9Y4GcU"
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
