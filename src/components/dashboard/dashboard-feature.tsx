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
    "3yecuAotkQAs4cXnN25FGtwNLwBNYuhjLob3rmwhJNaFKZhSj86sGPqcsNgJDba7KRotiDDKFERNmFdjHCHy8BiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ryLJDirzrsgKEJfD4dJjsZ53vFSUHWVH7mzEsDuahGKkUnhvrxVTSTTJ7Vaiw7MKZ23kkR7XUhmVXLaaJSMenyA",
  "key1": "L6PcnvjDoXtkx1WGsStD16e7XmGDZPzVHQmpob4xzA7ic2d9gbSzHoKVkQs5yhiKfYYTGrNnJxcdH5bUdNcYRj7",
  "key2": "35bXbbK8M8bPpMNybHYDfgew3eSLnL7baGYxP6JB4mMPW2S8JP8VVcViEAqKxRFLi56m2AZBqcd6k3B5WqRBF1GC",
  "key3": "3Ps6K1K8XHQcTibtj9gtY6UZfM5jJgAJ7xH3t15KETBKgzSKeKmZD2wT2Lr3r5u58rqRJGZnzv8GozPuapdHvQue",
  "key4": "wwAeKZ2qnfQouag63FvMb8EPe3Z2WapVWhTDC1spSf1hCjKtchG2u29hmokZGsm1sgGSCeZY7x86wQeCXxCxsMd",
  "key5": "zioFyJdxdJ9CABPuaT54hTcJvyf4c2DgekS9VnaSV8vtS3wforFZ6ksxX5ePYxRJaEGaCP5hDhucsEwUDCW47b8",
  "key6": "3Fg7w3N9hhrgNeBm4CLQG3LaikDSmkjCQJNnBKLMnDsK1ucbAgQgUtHSrJty15AZx44ek5D383m7ghXfk9pRWWNn",
  "key7": "61pQty5EePcxRj11eyb9EVQMSv38PGsL9DZbRUMGxEbZ8MbE6A93kaXpzYco8JL28tAeprNrHeWVLTCzRZPdxeDA",
  "key8": "mEu23x7df1bejyDVtnsah68Kzb8iJed8MCgz4KBs7amctMBDQEXb3Zxn9zy4tSXoh4arGaSpE58cDGRRVYocaVN",
  "key9": "2P6PZGb2XyL65Q4E1oJGBGo4MSvEYWh5HCni8GtHMKpE9MStUbArttaKaqtSuAaiFknxaewbuUq7mMmaqQTYUczZ",
  "key10": "33v3ezzJBQqrvidceF5eSdR58UdNixBVuoyZmorFbbwrPFAR7jdX2nUif2qdSHMgGDrXLTXCRMSLzvTGSXcEXUNk",
  "key11": "4kgcZTrWnqGrTSiSh3VMguZhWoq6HA9SoBQdzeGfK5m9rufnDPJmrV4JemoyYyTnqZCiXEp2oQKkHPvraYLGTvFj",
  "key12": "5qFUV9uAjiDFFBAAv6dZf8SWvPLmpcQynj54EiQc81L9C5r8fF5Fzxt2j5fCueMKDWRL5hD7Htp4SmnR1Aan84qy",
  "key13": "4vCqzKX5dEFD9HBB9P7C1Z5XT5ZByhFis6Ra9d68uMuzqRWNwHjVxzpnDG1e8RzWQfns5xj9Ezw8idcXggXKSBUo",
  "key14": "4z8g9iY3DwYWkeqKG1TzPyjPWwErUGXpLYVe5YXjq75UEvy9CAE6pAUJbvsjfmLgaRCLUFyH4yAXNQCvTuiAZdDt",
  "key15": "5gHoddRASGzYitpa3HJzsoJ8w2DQbvbRLbAt7s7ZkcH82S9t2PqUbYudcShbCSfXTLPwaGLFjrquoebEAQ7rMjT3",
  "key16": "64PfkU7tDqiKsTEa6x89jzUM4T1Mm3BsyPJ5GKPw9vF3Gt7LaMmpJtqsv9EBrigxpVBGKBDV8DDNw6MBZB2mhqPj",
  "key17": "2X3uXq7dGYoC56ZYd6bD6FZTrKywjAtwhJfpyBQDnzcGPYB7EzSWu2FRMDRJommLrtqKVwAZaJy3DjrbBoaeYAAT",
  "key18": "4RWwywnLER3YeJNnGSjWPdjRs8rGFHFT9GKSue2mdWcVfkTKBX3PSB8wxESBMST82yxJbipjrEtfM2wWgC7Wui9u",
  "key19": "5goY7MTTNoQd7zE4EZWuVvhN1hwRdUVyrmAPu7o2fKaxLciu4Ngo1nDvDq2wHr5E24ouUHmdR58KrDU4jQVzi3Di",
  "key20": "2BygL5XaTio18euchpYrvhYWwagJaAeaW3AFEn525DSFnbCTFifwQLnWYyoEo5EhezNnWKs6CvxB8SEgnR2d42xr",
  "key21": "2akEAmfti713oz69pnFWGJJKiNjLnXMSivh19HdH9FRqPqVmhC5riSW1V3abtbd7RxQ3oCHT1anJBAHRkCsAWcK7",
  "key22": "kk8KxJLJSmrh7V2rYu9wERURFJZJmZ3u3SHX1oLV9NZj6hXNSLTZBK5ZUkb4DKrQaGEV7S4NFFk2Y5WH2HPtRpY",
  "key23": "3UtG4754wDPBN3PqPqXKFeaGRkpaeNV83ZssfZFbSrTF6mionNu5xvbWHRdLU1XXk1S6Y9qKjkmJbrqVpu2Ay9vZ",
  "key24": "5smBR8f4XHAh1Rqu3yqFBNHjz2zvUFsmqGKh7AX74gyihEXbHc88LKh8TdMvgLBiyBbJJVj6aXXYqewff32Zq5Pi",
  "key25": "3ieNiQp5iUE9p8eGwxcnTPNhxwYTGaPhZbZiSkoDyy9RUgeyYDv2GGAu6yt7qTHSU5UtdhcqMWbX79wtYLNuNGzb",
  "key26": "4z3DrdeBVemgyypco7JYY1WJfXQGjnz8zhdBeDQD66b2Pk5Y4AAxszf4JuidB6r7kAy5NhCwwBebx9WZtHJ9ZNCo",
  "key27": "36WyduPUyUiJdjipQsttMDiwfQBQKRoXcGdDYMX6Hzko2qgZNm5Fy19pX5g9JPXZYWyu4cSRwtcvRThkHZZ3oenf",
  "key28": "vTtZy631e4LhBEnGU6qqznmty46tN9aLZWWpoB1kQUafBoyoariVr2L4u2mG4iEovveiPqKFJpaENwNJfZRFThz",
  "key29": "BWyzM7H29ErpffvfThqutMg7ZdfBy32zdfSS1evabBuDC1anxvcBo8g9hLxYWsWk9GcAm2XcPfPtLiUMZhLRr22",
  "key30": "5U9gwFwe4RMRjSzYoTXR91mjVCYivNfKHpHsypGpKrKMj8GuQC2ZL1hpUqZfEyjqSg5AyzEir4zH3pZynuTEHxdY",
  "key31": "WXEdBsWLAzqumAYoTiC2VSaSm8w2nBYLSWw4yVnNsqXgqvZ56uSBTfCKDj1u9nqpCC7f7MmThw4856V8Auhu7Xr",
  "key32": "3oD5ZYmFshUGCfXBpUfRZDRC7MjRRBgiBfDETzqr5afBK9DPymxqexMuYYQbnmPijvckqvmqP9cqVMwk6Rj3Ngkc",
  "key33": "4ke1cxMuH1pNFq7gWL5zSZyh6PHYE9QPQd1UV9kXXCAngjt8Jcgew9zF1MoRdEG2wG6dLNm8CTT1QFH2NtoUF3kA",
  "key34": "HCqboYUYVJgK7i7APLyjiXzhAKkjR2XgJYKTzz976AToAJz13jFArwzr8ni2DM6joVbvV4dd1R9UbbwrJFdJyc7",
  "key35": "5RTTyLPSbRpo1XbutJJGsJtqWprGb3LZSBuwPtqZZPq1U2GPDkGhgMZmXSQhv5knATddTst8UeZGs8kg6TSGpc9N",
  "key36": "4PSaAKJFety37W4iticBQR5SXA7HHZp3ZhDMV9Qua42Fvux9b6q9tvTMRBxi1DHd62Vf3s7NMq6utnZ8aPE8D7Aa",
  "key37": "3kCAm2oAKjJmEe9VmMkswBpyYVFqAisV4psN6gRZJj8Lk6d86wjeRvQs66apMr7rfYTGe5gJbJyHUgea18FzUoED",
  "key38": "26FMw1TQc3n3AEVaFMcWAnTq1eatAJ8NEh7toAYSMEwnPro9bsBytJjg3kYUx29GnzRbcVG5MLvv54So4qZz8V8P",
  "key39": "2Dai9gdEtsVKhdYDaeUzRqKNXu8u6DQqAB4gf5jggu1tN5wJpzaUAF3iJorVtHvGm8sGh22KjDzYCo9W1QAtfVYM",
  "key40": "SqTd1hW2W2NyUxQAWxP1mKgNrUKjcdDH5u1KtRyx6ESq3HqNQRsz4RB8mirQXQHwtC3KW6PxfZiwQigYn2iQonT",
  "key41": "2DjtVZzEZn5r2MrH8GtXC4e15XUwzpdJMxhzaNf2ws6sesVBs2h9u4f8dqyKqxR7RTrX7oK6knbAfUPL5YxDT9Wx",
  "key42": "wPYC77MPqPgofwq47qPjE94bS5c1ETDdXyMih7XWHNUFHzYvjTCJvBz1CyYc1enSAYHxJNzEBiwhskR3fCMnrWV",
  "key43": "2BP5gZ4yakWSDpXWEpVvoMfbmQznoXN1YP6ViCHnLiwQ92dx3fky5pMHGXPYDRt8uw14sdLzLvz7gVhkjEjJYKco"
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
