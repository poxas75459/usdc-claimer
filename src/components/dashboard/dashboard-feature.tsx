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
    "3Pk7d7xPuyWM6v6RMjGMJFSDjcexhiEeptUuVFEfd3KWRjrHdhiG4MWEv9aZ1LTQ8QnYQqMdoTtGo6NehMWzBxqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MXNJKPC72ramb9gcKaNrw5P82rPRMJhEpNWWsWpg86Zw9doSQU7P6D4kznzyREHXYUeyDbSZxeTdHezQLJKUCxi",
  "key1": "3DScQpNcv6zE4b9JuC62gcRpFEXuN8y3AYdQYZ5MvLwnfBzPTjfV8TfuKSucUMEbkESryWvvTNiBDRtTxg7iER79",
  "key2": "25GHHxJjhHguEjHmW2MD2Usp37dFZY1Uxuq2ZeB992cumXmuhbEp7UB83aGVZHFKfqV2V98MnTGhEsbWVMReZV8W",
  "key3": "5nYMv5ybCidDXLtbBLnywspYjiuxuJZJ4HFdhi2VP7MB3r3yGwS4ieM7iiBKajCvKAArCb4KQNai6331cAwgMMMg",
  "key4": "35XtFoxk5R6R8nV25BK9fX2AWRVPYMJSjXKkeGC7aQXQtCgNMApqLccaf6wR8ConkTAVH55TMhCPHfsbuQLPiSac",
  "key5": "MTff8BiuJh1k6ErTubPrwHyDkczmLi1ZqxW6rsRzci8cGwbKoeiXtkBLNRQeWipZYKy5etPFuEFE2y2z7soP9gL",
  "key6": "HV4DykCqGndazHac3cgAcPXKYJ1mzi9wzfaTdusqNXf6sZL5Xe1ke3o6a9m3G4KK5coai64TPwaysmqGExiczwa",
  "key7": "5FcrZQKUJgGDNNJQAXhMWFGTK9PiEFwiPY1MtQ37Zw29CVCDu8ftGi4aM4P1xgicavCCERpH6xXK2Qg9b9KjdQEL",
  "key8": "BvjJZSoKH23poTdkwEvnKCa7d2uE7c7WachVE6G8c2DeWSKQKTghpYAHZP8xcvULUvBSqWNdcUCyWMwuVUcScaS",
  "key9": "5rpk14guDe7YVbiddkShzgyB7erJf8MBnJ5z3BaebHFYmmePVuE8HpAfPYRxcBLahaET1UidbkBKdXCp6i87pErU",
  "key10": "5WvrBKFWM9vPKjbxksFBits5wbKkMrX496hSfmPxvGtdkPDcyNmQyeW5jFaJKXiZz6Lg9REULAdpJ8JChFA1jb2L",
  "key11": "aemVeKUio5XKziZBgFnp2p5sk827jmjV7q3CfLg8A9vfQ9HaDH8PwwstTqWi94MYzCGsmggVo7skXEkpFb9uQPu",
  "key12": "2aMEUUZMsU1VWcjHWmsWm7aXhXw45ZdXohwgqnXttP7DziMHgYeSbpkSLyJ84WpcxQX12NVCoPgNhgjk73UoszXY",
  "key13": "BPnkVFgXePQxC6p3GX7v1fxTyCswZs5JxEt6vMAE2pvsS1zzUpMjgQC2uS683XTnbgoEn5hnVmcz8QKBsJWPXAs",
  "key14": "5kiGMRqjjHcNALXScVeKkw2uCmSRDoV7SH82J86YWnTEjcPm69STvnMtZUz6tyiQkSExbGGGN8Srgojw5AMu5PcK",
  "key15": "5ycryni94F3991zErkiKN31bzLDXUg3wYtaqMV1tTVC9VumC1pHjE2bUjLp577M2sreuC9z2PR1ruMaNdqh7LKWB",
  "key16": "2Uz2nXE1fXsLBu5V9psGaGNTX3RP7MtuRa7yAMaTeDeYiKgbcKUkBhEDAHoYgfXGmav6zdRVhog3aBMncNAhi5jK",
  "key17": "5JXq8e4qxqQYjgwo1HZTTEBGGwuqBFPvuBoT116TPQv5ENdwzx1ncVkhSBzbQ1WRSU1GassKqgTeqJgA3QU4FiYg",
  "key18": "2SUQ4YGAaCCx7yCDGLC3nqNDqm7azcuF91fe7VpzHwXyXa3AdKgzhGd8ZJHrYSJro7rUxeBHmWBWUxcbFHaghob9",
  "key19": "5GA88NPYebf8gatScdZdydnhZdv7erRLE4AwaoXYaG3VJC7NmMeRSJFmjSJDi9M1qMYAApGfPd1oRQhLuA9KZEvn",
  "key20": "PuYTkXFCLuXaeimWW8oxAw8XC7W2jS6yM579zmfSDgcqeGY1QNQw21iepMf6gLkDfMxiGrNH3BCopRxWmCASZ8T",
  "key21": "3ovxifk4scuYsJKeiTsGSMexLA1RJTUqPjxejMoxVkVZfWQs4vj8EjMXFrDBY2djaKWo57gCwny33qqJCQ4Ytbr5",
  "key22": "2dpqGypnTsN1HAzixZU6ctj9K8FveGQ3ZBAeyyB8CixUs6rVgPMWqdKGzm2yqV5bHfpKEkTRp7MHUusezZ73fmrc",
  "key23": "2cGy3u9sF3v3mbncE4u3MaG7eVMQTHyXJCG294TtvKEoznpd5gLEiQ42xyePkkQRaNyRHnYjHTfCS9X19Xjy8Xmb",
  "key24": "3mzJ1GrcRTJMhs2SvGQZ2Fap3qxLt57H7MvowFWKwWWkuyeC1atHneAKGnboNbcNkNv3vJdY7KL9aXh64enXDWH7",
  "key25": "vVC4ej4zfSdK59FoqAbg4R4sgC9DpUhdiGsfx7Ne8BCfThjH1jbVewsjdcRTCC1NhywdfyoSTv57ukUT3nUVe5d",
  "key26": "2K1WFTdTVivo5M8V1M1UXREaH2yy9nu3ADd8b3ucipvMwAKg8oT55BDnKYxVZm8qc8zz5bU7v23XHCnBXt3vZhrx",
  "key27": "5QnnRexTNAW7RKkXunGGbdL8zWM39DNXZsw8KGL3wpuSUFqxZmJQRf5wtZExZM4GvufpT9RxzDN5FADLrJhAPyPs",
  "key28": "wNqER9fk79SWvULB2icAvH2pV6XxHA4on5VYqgHYRvfpmVaeGFLNJdJYB2kpCuWdwEYHLqaoWnAm5i5yUw1iLGh",
  "key29": "FvAVA4uPfm5dvnEMDfXKZecfqTFoes1Cb9KGRMLEXJyFKJ47WeT4rKKr5rMnHJ9BeLoQ9fvWv1K2HXeNCk4Wgvw",
  "key30": "46WQj4YuobrqmYudqmUYxFA98mpChZNYnmdarHc12eZiNaor333GhN9ohEGpgFrp5FCJwTYuXVHgwtezdwnqxqPh",
  "key31": "zeMipki4QwpwTjoe6wLersHM1KQzSALt3osUXM6umqwAxwRx6NL6mBtBck9Hg28uehBLRSc2rVBfxGXpLPXLK85",
  "key32": "2oqmKv5ZRgANGxreKBVnBEThsFsCjUTc6baiJvier2razG8Hp1SrpvaqkXiX9nwS5oHB7nZtWg3ExgpYHjvQbKHF",
  "key33": "4PFcrQpLGPcX34nebMn3u84F27i8wZuWa3AxLGjyfWdCgkgzPLR9MXQANaFzr7UgMQEF3hRgJkHBUbpoKiBf62PF",
  "key34": "YQBbvgsoLREQWRHmdiDyK85BDrCePpKPbXtPrGpAuAz5oBXVGNHsRigPci7wdtuU7ooN17stJQ3t6gqh9YUD8ub",
  "key35": "38n2a1QDGMK7hHR7gStHRv22UNspC8v1krqapWofynXard72koVLFqcc72GzDVBbbhobFeCbvmpoUtEZDfzfsh3h",
  "key36": "4AhukGXJL3VDBxgwo6uaw56zgbwwEm4bZrgibEQskVwer46DA1MZjPpwH56Fvv2Ee6Pm4Z2tyr1J1ASekmrqpiSj",
  "key37": "2eoZczWLtQP2cSca2DGfDrzNdKtdhHLzyy5NsrotWAULZXiRh95J5g3Dvw6ii1JbTsTCi1F2HJRhXQcUQDAwJjw",
  "key38": "49UhSxm8Uh1bXHcbpmEGqyb946zzYVFmUTpsUu42JNhgtvMjbQswysFxXFWM4JZBoUAX2MNwTiBWDQKYS5GrXXTr"
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
