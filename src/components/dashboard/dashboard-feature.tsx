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
    "2ZYsNjyMszUSajsynpMvsW1tcHkWNDVtb86cgDu4XN4fsTHDZKBjFJo5VjjT15KMADqTfhn4HuwZC9AByvVNCedo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g7yUb2Ea8ymfjua2WMqLAioW3eVNcQ3eUUXeaXKt7T5K3CoKh8y3jtASXEKAg8a2NpGXW2h48B79Qvy9tn5xwCK",
  "key1": "E1H5kEegwbWQ3BqpJEVyA4XgxFrQyaZUa5p9TFJECJyez1EhKyKppRwi1pgGu19tHRkJiwLTbYvUfHxcfghnJm7",
  "key2": "4oBVdQD4EeMsSMgd29gHSL2LNVaTWWpwMbjZ2STLmxzTXaKdULDHwQUqoC93XPiLSV9g4xUKNfMNjfmZGmTe2CBL",
  "key3": "5A7kZQ49gcf4i5D8E1c29sLyddK94NSPtMwmj8sMYPU51CaQ3BBSxqzdw3VCLWCy44Zer5ABfFGv74rPVsCBYK8o",
  "key4": "4csKaW3dtJuKJfEgjwCUEe2jRUTc69TevjmsxFtXN5M9Xid5mrmQk16dEXPo4KBEvdEgWGtnsGSZn3PbdRpLYSx3",
  "key5": "3kKqLfquhNsTpTu8eSwToGg8xLiPx6MR88nh62V2CUf9s3rDr47qiT3nZbZwiX3r74qH2Lukk8X3WfPqfr6ZYjHn",
  "key6": "aAUrzxmtmP8B6Zogbdmi6bbLEg1PM5Dy6mN2xvq4axSasrH7FVUPEBMsuh9xNLVcKsgnEPTCGcj7tzHxppdacx1",
  "key7": "5Wo2G1eFTbA5g5g2GwZZn4oXQGAxbvneb2ja5aRHgQiQ5FwxH9ut8QTovaswit7NAeLpohd4X1xJt5KYz22FS5mi",
  "key8": "NcPFiGfZ1muTewMqxZmePibmvXPvSywXZbsfjy5aaiLjfFZJNjYjUWFhT9qGkMNeZH34BHFDQM6FGw6bwz1imzh",
  "key9": "7yq5RsHqsWmhr4hAcUzUayLXBECaCXxsEhnSJwxe4YCiKxaz56imQR6BHfZVhN8npJLe8e1F8mFU3UuyhWCvzgV",
  "key10": "2m4PhyRvXRWw1WLTMNosz6YLkNtJmHSehg7nEVHDHmUr8LByUZk6SK9t752uUfJTxMygZ5DAL2tX22z3Jn1WQ2Pd",
  "key11": "4WgZVNeAUKLe4upiVEomqaa68DNWirCm7ZFZ4Hay4VVgK8rC2fn7gnpur3g6JUwNcEZjwHpEKyHGAPEugte3Q9oD",
  "key12": "4TkKQ4urtEYfRUERvx6kn7UZHbgacH13xdzkM8XJEidgSvkooZbVqB4g7rPGbeNfQxEitRXmPn5sJuF9xyXuUfnD",
  "key13": "sJH1TJZfptK8qQydxrhsat4BbG7SiYXzpXnucTeVqv1F6dyhgA79ARuy7xJ1NceydKXCWEZ1RFiSGd8Wv5fpAo6",
  "key14": "fwcxRzyooVfgvD24RCVxMM1hByE42UhxT9yT8Hx6NxLdVUu7srVZMqvzeQxF6YfmqHKWCPjhAAy8iZLHeywduw7",
  "key15": "2Hz4CHLmjRk35PadAMSjbcyK2phcAu8oZ7wJgpUrWs1xjGJz1k5nFUEWPLoFEe1gtGTGPritgrpEVYvHEBHm13YF",
  "key16": "23Nb3DTQ8BsYQ1BNqgRsaJVpLpXs79dYk9jzfTRebdLa7Ld828hbM7W1XZCC4efcmyreNdC3R9UUvtGgWkbwUnbQ",
  "key17": "2rZeTm1cZiDHymwfexWS4jeaiugALQCzmCGMnbXEh4gqx1UeS4cFEiGR8SXb3LZxsvNiW6RQkxU89weHAg6nZD4F",
  "key18": "aZX29wKN2MEnni4xoVdTVNFsvnyT1VWXW8u32K4KnciFKSKjMWWo22sWB8x42Q8BecsZ27qhfgAoRUMCDVjEqMj",
  "key19": "4GTXbk9h1BfsDEmUS3TLAMZ8s78jPeaesxbzQxHyA5Th2Wcw6jBthXWAQQQfkfJQsamT1qddctf72YTsFGB8gRkY",
  "key20": "5pCbbnqim4v2vy4ZDzFLQS4DPuk8qu7CD9axygjLivTxPZF2NsQ1z1sfFGyCRyZKK5M3H3gjKoPBGFKtHY5M3Z3V",
  "key21": "48t5pM79tLPxKnLpbSdUGbL4wxRExpmUqy6M8GCnYTpnbHLucgJEqNkkzZvfnvkBT1PujtsnTUT77Kuh45GRqUYe",
  "key22": "3K14YNngdhgLvCuc9BQq3ePCpd4Y1ovL3ZGJ8stGYiUHzrsNmy4MUtGuE2q9aWkrJf2Yh3yLrzirbV9o2LBmFVKb",
  "key23": "58mf1opXUFN57hbZAdUJGR2CUtfZVDjhE7h4SiLNN8kfxLW7xAD9hNMFVY58kr2g9rkSN7USNUHwHaeXUzfBcssJ",
  "key24": "2HqGMbtstFQRYbU3GDt4aBcM3gAPXWFQ9z4AS4LREAx3hCGX6AMm79i5vZzuY61EpxnsGrRXxrm4b6BymtE987pG",
  "key25": "4Kfg1bYcxiARWpLY4Zv2f2ZYZARZEzEcZuKqTXQTpZXdafNZk2RfcmQxv5dmGFDMqaenqbZEXdd9kUhBRrVirRZC",
  "key26": "J2brn9TRrmNqYhSbCSbSkqXvf1enC3cHhB5i4P9Z4ujv6JXxwPLg7kwjAaNtkM9bU8wAGUNxWWTwrA1irAPaXR5",
  "key27": "WEWgrs7bQPWH9U1Suow1s2x3ycfU49tvyp8XdymE4NZhmmRND3eXJfDjsbDMGdUFLBP7QvocXkE5ypmhTGTTxHv",
  "key28": "4F4cvs7odLuPKNhw7Fic2ESdezWAZUSXe9qnDFN3wGQrQ4EavCdwqPKnb5gCupErZwBDfBQZ6f8NbQjBNJbcXeBY",
  "key29": "KsUCEf5osJVKtZZwQGQULQv8WYWG27TvB1uTqwojPjyAPfq3wGd6QsqhTaousBwNBs7M3UpukQhRfePxsU79xTb",
  "key30": "4qi5K6pzrT6dzFYRMQXbDuFvCnJvqAkhrQppyT13v49fBNA4zZLcohtbAiCFGxkqxFB1LVS5MiXjRMWDcJ55QxBR",
  "key31": "5rgh4o1k8youT9xuJLo8WdmyHehAp8tsPvKZXN71s93PjT4FckKY4kR9rbYUm8rbNAUmqc9ESMWVEUGNiRNQwB8c",
  "key32": "2uwm2p9APHW4M7LfcfE9FsWDuYEDVB6qXoYeSNCQ32CX5zmoHuQJVFzbpZGMoZikzBr4KYL3Co7Xv39GFV6aCpC2",
  "key33": "2eNdn2WVduEDvH22HAri1RQugCLQxvN8t34qSgJFGzK1yvu1deoTnBsJXcnWgCBPptvuWXzL4SesxPadQEU65aHD",
  "key34": "3r7bRYLwj1yBZwhXr3Mx5xTTNgt5TM2tWNuFDemLAhcVK1MwGCDNi7SS4ek4deMs3pS8wGeU6AroPe4HCHCoW2s5",
  "key35": "5WnzttwkRKrc4CcFqpHnDp3pegQuoTdGmY5j7ndxuzTb4cZSLGiHWqwmvZEzMMF4P7vcTTD2tPsocNKfFwHakjDU",
  "key36": "4ronqDD5s22YbU6gvEMeQ3fvZELgiudH3UJH83gsY45u9Ci6SjXm9EnPnLhPTs2moXrWW9zp3jxQ8PkNsNa75jAo",
  "key37": "2oiiu9rBQnE9RNG5HWmPwz5ovre8KLKvLX2vnEGXEGdDUj8fxMDwWZzZ3KV9ZBEdRdqQenS4v8xL6oS9c9a1K567",
  "key38": "2MgvUKn8hgQgUmyXLGC5o2VbuttfBQB1eVoCpCnfLBrbdMwBeLVgeUT8naLHy7QvwtkMKgA1ry8cttjXML5SYVGu",
  "key39": "2ZtwmsPG2hU8PoyS6fE8XHPvAWuJ6aZ7z4xnqtASvJJnjZUfdYvie2dhEk1eYmNGjUWKkq9rgX9kbc8LBnFBVfKG",
  "key40": "LqJshS3deeBdricEB3t21yF7zesVLYVhjAzruR9fpAZbFBb8LCz38qfHBa3PoM48iGBH64SQ8CJ38y6WrJzCFon",
  "key41": "5KMYhNtxm5zoj2jDYwjv394AgRw3E2nCZAgscWw2oi5f4W1wG1gVW1169WzzgSx5yvVthzVFijQotHKj2v2V7Rgy"
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
