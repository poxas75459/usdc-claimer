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
    "5FtxXGCyjBF6KqVK3K529m7gaCrSnJAuymz457dLVs2jNs7hVdewdz2KA9Puw8U3aEeaMHuR5Z9mjRFrP4LL8dzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rdfuxiz3ZXw3cNxkiZfudCBAT61SGwEgtjYeEt5TjrE7u1SrPhYSzjTLnyruWw9H7bYSdhmh5Czr9jp39xFjdbg",
  "key1": "3fndeNUMH6P8uTKMecGFcosgJLTLFhkcnSerbqDbEdv6zuiysV3vYMDq5QZfyMcDEut3Pb5bughN4qCREyptZS79",
  "key2": "3kWZQSP54RZz7zT3VTy4neuJ7bEvMYLvQZtca8CFpTrcvQz7A6F3tfwuKUPtdzarxYqiwXtKEf7e8GAd89Jc7anc",
  "key3": "4AGghBUqe7mWYQHVAqDhgCDCAeVPqHCGmyR37oHMoLytWMz2MBQ3CfLuF5kffQmKQ9b19ttGLNFXLGLwPKNJewuB",
  "key4": "4aoBeUX7pp9GsZsMjQwjG8yTwAtKgXzNfgwbgnntSxjbvYNFSxqwVTWetjpMw4vtVAaeT32v5W1CduDWZeC3NsUH",
  "key5": "67KoJa4B8brZR2nemwKo1pnhCgaWicE3n6s2inkHxtP2QrykykyTihTUjAZeaq44cWsryYM2TezKk9ue4ZsNJaZB",
  "key6": "3drspH5GN58dViacDNH3iG12AqqtTTFiBJtA1L2vRi5YBWkN1L27JXEohStp7Sy2wqYSpRhpSvprTXPVVnqcJ4MY",
  "key7": "3FUBitDddDoekZFHCPdtXaidAoyVBnYQQTUp85JiuWhbuftMgx4gtJREja5LHKpjzU21htKEFXW9J1yXtSsf9E8d",
  "key8": "59SbHfFgG5LyFXD8YeMNdrr7Um9fx7iZWYx2XhznffxX8tXi3CJTz5mf6HsPgZpEyH9jSbmGiBC4kXH9AnbWBe4t",
  "key9": "5uBvJTn4LJhtrFvXynhK4K9ak4rLswuHZHZV9CJqq5dbtWMGjVc2G3toVfafWHaiR8iGpPHAvFgisMCJ62Z2KmJq",
  "key10": "39AQ46QzAEEPp7baMxN31MBXWhC8qM9NwqnHyoe8JgfMNZPwZSdubEqdR3EAx6WbGxk23S4bBrdYbb18phk4yYuQ",
  "key11": "MLodCypK3XZt9xmMhqhudcYg98WwpM6FTmtt2ncP2sAYPPfEVwCqKRNg9ZZBEKfVZHA5u2T44kbtqUXswD6mGfy",
  "key12": "3K8MXf8vVK1gzE1DgXXxqNZyigYqmbGEpsMii3K8fw7jVRZeB8Qqr5ea4ysZgMwfv2dwRkuakR2Jd8fHXDAEygu7",
  "key13": "2RjWXwBong27XvjSGiMn7M3qwMfy5wZ6JSn88iGLBkYQAavKkS52nRC7snNencvsaWbLhJkSaQKmk7VpPYtnxMuz",
  "key14": "5gkgiZ1JoFanhH7PR87J3jbBmwX8nGiDRz9AX2Ex3nfYmQPuPcZC9N18nWQCFsB9CYnVo2YWmvZ5G5jt1GgyLZPM",
  "key15": "4hQRojSS8R1AHJftAchDwxK75EwXvrsvHqtPvExhCQJ4Wy6gw4gKPdCWSNHwjEMvVijWBawKZ3ir3GFA5VegCPHY",
  "key16": "2AxbWqqBwG86HAfPt8uwfYwu7Y9vdKdbwetdRjhwyhaBnzLuGCSZyMyb4hauVb6i5AXxdp9fzbeZ7YzEXuFtJY7o",
  "key17": "oBjDYduPjwcYZd9fSUDiVtLg7QjxPLhKCkseH44GouY5rBQYWQ8LYU5CGqMTtmUrwF2kYZ9vUMtv72yACPgufcg",
  "key18": "2ws6Hs2DYizKTNzdgrJs7FV4uZWkv5xrhYc6sk3YLUYwcrurdQK3oPPhbHGC5pZhYUKC4sAvRYnabMKbDBNrb5q6",
  "key19": "3xahgQjkJNiesWFHY7UFTh3pGNHVwH7oJfbjmmbmqERZxD2QpHC6Ukx2TQvc1A5pdNiUuoNEJUYh2xoize44H2nB",
  "key20": "5q5inx6zmCHi8KDHzXeV3TBi2TovBRTWomne2WEqYAAoVdryyKcUac5TukzNa297T74wgGB6FPaaFSaiUgCoC6aH",
  "key21": "4Uh1vCqPtL1KPfLS6PjQwxWqtHL8xqEkKN5pzNsU39CjFiEzPuXaMUyTtKTJZj8XhJCM5a889JcbqaXePt8MD3Wj",
  "key22": "3xBUubTc1qo4npaQm1HsaVByeefB3a4tPaK7ghdmbyq33YmxHzTYLi1u8Kc3GFpaDety1ZD7hHuZHc8MMssKz13M",
  "key23": "JZHkC9upJhUderXexyrEYMgDuEzJJfdjVi69MKSkRp4oShRT4cuUWzfeQmDyoZmXeM2etq4yaVbvER2o7FyuToU",
  "key24": "2supBHB8nGqgmbcoXV1fcdz85xHRJT2RtSnESvk6tdrPSkZ98sbJJLn7JHyCtSMFRUxfs6HFfWm1CTjmRTefZvoW",
  "key25": "2hLHqBqVLoTtatkoEGg8vNBC1QAPhBShShtqkeSeoNNAZU2T75dJUfZgEinWEB4vNdWwHo6bacTpfetamhzSXR7x",
  "key26": "4MTxGChnN2H2RmsZK9NQQcx83fDsexy8s8murvg5hm3LLLQTb6Hh1zfbjJZbhc3uc36bddN4FsESD52DjH8tq33e",
  "key27": "5WzL7MLpidx6btKQR5PuU3dVo6tx9eFTBvqCoC3YAFnnpXqejYCLuUJArVRrmhSJXxkWi71qhHr4eYzzf6MrX7kK",
  "key28": "2zQhbzHuuNr3DZ85Na6bCgGeZCPqAACYJFeZSS2xnxB3TBrzMHurrtjUfGWvN3NFowuCwUEiDobPuJCtvkzv5wMx",
  "key29": "2YgMAAaeN8icvonfpHcYqPDQg2HWCrJuJ87XNkcCc91X2o61oSFYvhYFhk81gRdnkZLW1aiMcwCnSgz1hkkxETdQ",
  "key30": "63E7vhMegKY1uA5RrYEmvj6axxhX7dqSpTVnxY82pyg26b7rtjv4A8CXoe5tYrfeGSiJ5c712cGwBWjAtm1vfEbt",
  "key31": "34upGxSMHSFaA5qRDXDMWzPdbo1NKbdFpEXaAzqsrgmzaiJxyw4dzNBkL4m1iEqTT5kfACSRQSmc4eTJZv47ySmi",
  "key32": "4m4rDJKn9MgcPJ1mmG8hnFAGKUNmADMeLGA81idE2qtRiUneWky9qFzj7H3WbdfQwWQfs7RgdVU8bMB95YL8Lepg",
  "key33": "3FDqRMhJZEPxzeaAU3kWQhPebgcZC5LPsVtQJXkmNMTSDvFmqeMREw2LURSZDdwCXgTwjsyXYByDEXMgr41M6pUv",
  "key34": "4ZtuWoy23Air8VZAHRU7Jt8A6YSHeUj5qhsBhnVFducDnkpzdVXfvw83MfMmsCKVKVdQd7rMB1Yqo3AB4aPoDkhw",
  "key35": "45t9zUoJL8J3U5dF5HapK3urcrqCK23DwhNvvXSNvSiPntemrwmyaHxKHRUH5qxvvUgWjcHoN6XNw3nSvCWuqzPc",
  "key36": "3vKh29Qz4W3uMjNjrr82SxsQ2D3H8MMurUccuBTtoJLoKhNaH2zE77rKTErRQG3GK5bVHwsgk2xMbwq9TBktvKyW",
  "key37": "3X4o1YBssirST1nk84yjbugMUNrLV5EzNV4jJ42ao6znWHw9JbwmDQUuE1jgXgoFgvkMLKZiiV1qSZEAm1eWpeJu",
  "key38": "63ohe343FAY5KA3yHkUygoESPsVF1JSyvzDHtG9NSZrX1s49jx3jzdaK4efbET1gAkavQKdQ3QMtjbZGmggsV9QZ",
  "key39": "4nZ5p4zrQnPX3YGfguhJD7FgfrHm5V13DKriQZjDNPwHZS1etrZzKGmBTLe61bzoidcQumLjKQJTrbVCddnzYf18",
  "key40": "3eTnjitZ8rSr41tmScaoZ9yZPoheH836s55VT3MGTDhqxsz4kHrXDpSuhazuBhjZhKpjq8hJr7QjkfKwbQEAewSZ"
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
