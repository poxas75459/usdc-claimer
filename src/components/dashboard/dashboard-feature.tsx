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
    "3hEA6fz9fYvV6doKWweGrGDeqHGj8nYzpB38NcZyYKxushWR7Sw1DxavrZzSUqeiKLdFs9rWQiHKU66EA3DX7Q6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZNbWC9eDYirKUcCFpU3wzXfA3GfVbgKX2CjpbW11nSNX9umJuKuZgns8Hm8KHggp88X57zfeoTkhzYeWFMSgtxR",
  "key1": "5UtQLhB3SpEyvteDjcfp2n2jc6g3M6fggfu2BdGvMVzKz4VKKtH6CLRcNQJcT85Z4sr3sxEHgRrL9yHJBkB9Pwf9",
  "key2": "3Sdsx4ZoGa4CaSS2n5tBz5S7umt75JrF6G8rrE8C9QBDPTQiMqXEfh3ULAzq3vu7KdwFcm9HNDBKuB6rE3Y2D74b",
  "key3": "2KK9aHxPqJpsmbhhnbghLyDg9mSZg6kgpfpUKCm174JLk3aYddbFE11wQzZkcpwKd67oVVe2o2mRUV64MiD2ysGD",
  "key4": "54kF8FNUUtnwDxuha6nNPZEE8inveBJgrhEjPFi7CJFu4eYpvJ3uDiyXHK8DCkisGhNuY2iXcXp3mQtGvkV17XUL",
  "key5": "wCL64HBAu11LKQnCWGcsQSjwrE6wV5h1mqTrKdHPwqCu2tZ6ucAi4b2uSFbB7EBxopPj3wKpjP857LSHVjnJjxe",
  "key6": "4veLQAHkLRb9UZBbjUs8g4EoEf17ah1NPu5YJDvJVwXh34GNtjEsK4pPAFnJqdojzThaKLtMTu89WN7vdJUdLdMK",
  "key7": "58BKBXU9x8Xzjqxq3RqEQf2MsAx4tWP18kSftRfN1wxZE5DMmwADfk5G1Q4QNS9Li6hk1i1ZmpJqhXuHnR4Sduk7",
  "key8": "3RHfzFKPsCpRYeLi9oCxoTHAWashmRc6f7TWF5QYcBWqWUwffQn5vq6bgW7FAhb2PenC7o3JRCDTMtPEVHyA9rtV",
  "key9": "44dJBY7fqP27CgPuZxxBWQsvK6eEL3hcVbpddTSf8BpX4mK7jEaDKFrd5q4ekaxMwkJhiRtbT7N5tk8knEWMYqKz",
  "key10": "5s8NdNwtrT8EsUDqTP47yZ6MS6LB11x9vCsGVjhXnx3c2KR9nfnf3FFc5bUMrjGmgkSJ7R4kXD4zExvyynb2S9xC",
  "key11": "WqzwSMbuhjcHUxB5uV5X7E9jQCs4B7nHfLEeFCee7w56uyizEGyNFukVoapkVzX9pq9s6sDr4Z5oq1iNkdVh1Sa",
  "key12": "3uLzTivBsoSvWcuAD9ZjCDfcYsq8hbXWufY8peKv7ff9DhBZA4JFJmcLHY4AcceWVbrybzpZnWDjUpn5bgXcFqJp",
  "key13": "kapgTLbUqj25w3Efcsnc9qnYQbyKsW4mTRLNA4wK5J5eq6wtZ6Dp2C9p3SN57YSh4UMYDJg9Ew4d48g2RgmtzkB",
  "key14": "3BedQV8pTAN6zRCYMu6tVEB2pzcn2vwBcYboUnN4pASVbWpVFz1CohFaKNthvRPoUXUJENatauNv9YLRCNVuBy6L",
  "key15": "p6XD9wpdKProktNEKYL7mCQDNoxYtmztWEvC3Ldkp2G1rEj32tYRouvyxjiR73PgK1hAeCRcLkyVYcjF9b2yBu4",
  "key16": "5Q6YXtffwYmc9JH93CRFjgbU5GEqJXQxj4Uy575oLkcVDSKV8HBYz2sW7vEkU4Pv44muUzYskJAZLB9c6juAyq1i",
  "key17": "3qNR8Ghk8GKCchu8PpGpDXzjVV1Tc7aP1qLxRjNqPLG5Et4HnJTndAcLDpdEzvKb9DuiVWwbTZx1EGki95LFDJZd",
  "key18": "NTWxsPUDjURuer87B6Sd2eAmX1YPxtZ5Bfxfkr4PCQhZPwj5qLKBRs9FjQxCcCZCC4YihJkMwCGLxMJrpcD8A8u",
  "key19": "4Xgz7QBwbumqz5xWrQJd5BjtWBsWu5B8VXnkpwaEBts2uzF5mKvQrx4qXrmwV69Ge6722GBg5qsHCQMeq79zrMYp",
  "key20": "5HsdetBwDm6E11CEgsBqEDvsoRriwwYu4RQXzwJDit5UqVgAa1ie5gMYFw1hdsdZivPKYPYB9vEaxZWd8ZErtp5C",
  "key21": "3hFkp6ztPvroTc9fGkCcniyU3VX1w33yBxXqtTARHBH8Vfs2bgjtiqCtd4FRW3R4FfDLGQdDHhEiyqZs7v7qFCVF",
  "key22": "2W8otEPh2xY9LYzg8gJbHvzjbrc8aPiHnNS7jMeZ1DenLWpFeABFRWD5wHqYHn3ddLDeyrmRw6zRAkw4h4XdMXVQ",
  "key23": "3F7NbrehqGUuJV6Eo1sRBN9vgQBV5GE6raiSbncYJR6sTN4Q57QCqt8ScPRsxGBBFMmEwnddJQEfQQtzmteFJ5EJ",
  "key24": "4Jcf4MRgki8pi3yi9rWbvjrDdZPC1pdZYpBE5Y3FLPMPisoiVAMhXeXjtkUamuY9ZyJWRHAnVS5Qh4AfXaZucfzE",
  "key25": "2wCRyBbUspnv7AiJ5E8ofA6Wr9aGRnBz3cEq8cEWBUP1RZQtJWxTG7hnj3nVvjG7BAVgbtyKVpvp6DwdVgGJTSgD",
  "key26": "5QvarPfkQcoEZ191qRdKx2HrmJ5D2t193DPxG1KuaxeYDSecygDL2rXMYYpiKZgKigrx8sL7MdeRF8nTwpkqTi3D",
  "key27": "2tZvUnyjmgES5WzdwQenjq2q79WFTGcrGErpvBEvt96HmPJtYGNNXLAmDoXzo5q1U5mZ41NChAxqSpriRVAo4mcJ",
  "key28": "4g38aGGYArjiokKBmirsGJGeBA7HfTbMmRx3bFiWZb6pQyVhBVaYz3CZEG1xVSadtWC6jJds2KDLwUZUDESbgZhk",
  "key29": "3nyUNSResxfZMbm9Ph8jAVT7q6bYYS3vBJwCLuFngs2WEPfRJAiuHJAnJm2ky2xeZ3pddgVjFq61eb2e4jquuToa",
  "key30": "2pC6fbW6AXkHa9REXxZJA8Tnxd2HBCYKj3X15H8QZzRT2ZfYF1F4Hn1WHWyMHbSqSmKFdSymbuTrLGFXninffF2o",
  "key31": "sQEtTrsFQWwzFPjSJtbv2V7f7r3epmnXr4TLCbb3QHefaPtx2jkpyvMSfBaEeTXsJ3s9xS8ojbsa2C8kPv3bZTi",
  "key32": "57QGBRuoSyuPh4WA5FbmembBngRC7NB2pou6AeKj5opJBFNQvLZNovAjkDGZX1Qx2xzpx62bW16rWe5pMiRaGsWk",
  "key33": "rz4rktSCjgTxWCuVctBS3euRHhVDcEyB3G9cZTmY8rBSqNs3FBdZei17ffqMc1ChwfqAfddrfHgCBs9EPqafgN3",
  "key34": "5VANm25vP6ZFV72HiDtadEcMVpQMvu66vLJtu8K8eZSK3g7GB7k4JhZtCaG9SF5E5RiB7A5Sp7y8zeqhSZbCsaKz",
  "key35": "2f1BsQEDKKUfxc7nd34g5rDewaVF646WgUwJ5n6xt1HvTS7cHwDpyi3nhX6nW9BoffXom4x9RFGk8gCCX2wLfutJ",
  "key36": "238jZAsZcKr7aB8ZhGMaMKVjVvtcNcpUFnbKAU3xJ9VW6AubLr1jgD2agn5QY3nofvWiTbS6LQynCFQnPzUMZB3a",
  "key37": "5qyRseRsk3FVSEj14VByiotapHY1wtiVM7uyCvr7qPkcYLatW64y2ce3BHzDDemom8jSckDdsQ11HXK9EjswMP7U",
  "key38": "UAYaEuZXpjRwMpFDxP5n7gwYpawwuDtwSoT2x6pSac3Djz9wvNNJnqcJvs1cFsjwQYch11P2YxgTZGUw2MyEBBK",
  "key39": "5aB5Xc2tbPnUwQUQX96TmT2Q6MSr8ihxVniLYqKyTKqdLXtBoztP11JYvSdjyndGHnLe5ntYhhh6p3aVVvX2UksZ",
  "key40": "5hto4bF7b7nLq1JM3MZABDjP81AnVQvBXkH5neptEcRZDDA6RYBbWUPPtyLgfJKoE3r6efKW5wCmBVdLEvuMyCVL",
  "key41": "5skPyVcqqPRJgeFYmSMM1LZVVV4sRqQ9yJ6KYBM1hBWt4apTkdC9bhYbYsQ8ok5hjMFKT7vVzAugQqjvCi79qtB9",
  "key42": "3JotRXXZGCcJUg84i7xsDyxKHfGM9SDVFgFWCpudownX5UHMYpFWnv71iTmC4h5RmGUurZXHUFcmxMRjz9QJKPWx"
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
