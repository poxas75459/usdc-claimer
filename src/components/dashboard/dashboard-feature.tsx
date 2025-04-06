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
    "3A8AYH16UMuyp4W1MEqfH7WMzas1BYPrgsJ29j5Zyox5mw6ktfVmdRgqCXUuto9GUNzLx6aLiNSAerVtXgPhDqUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vKpNDUL1t6jM8jCQ9Pe4eCGkCbTrC8EUsyid69j9xePnU8X3x9fmH3Aoe4dy7ngrrGkvudL7xEXDAssXRRXGU14",
  "key1": "5riQRgEWSfdFDC7N9t2sQ4xB1Ni4tjf7jPjnWMxqh1mArnPqSMuevbSmgmQrS7FXesjnT8tUxb1fbsgLfn3EtbwY",
  "key2": "5qKW3mKgXH4BWCi7zeXRTCez5HxZpDpj5fdwDNwiAHSFxicEowBZNm3ZA7mqA5AVLF9XPRoUB3teYuesda46vtWc",
  "key3": "RqRQGqLdKe6hA6WZMPEPoLDN5UWjmGQofnwU96rsGKQAGA6pTEMfjFZGyYPUqNAPC27xxXzU7pLHHWvpBDfeqza",
  "key4": "5GjnAhfGsFJ73KjyLcvFCWfcnBJGFMTU4tpB6kA8wWE83dzk5AWgbQHgvRoRXTzpF7iSB5BpuCFdSQstSmpKKW8P",
  "key5": "4SduUfBh5U9QJEUkRm6iEK95FFnucCpTbNQSYQogeKaTWjVkuJRLG1GYqDVv1Mi2bypcab89ZzVjc9zx3cNCCRp5",
  "key6": "4mvFrpWNvEVvzsjHaJGqUMXUA1XNvaRjK8taBjf9L9bPV6vPA69cTdgvPMSCd4cXgoWFa7s8LGXz5LmV8nnKeqyJ",
  "key7": "59QE7F9AHHoM79E9QEoXshX3fLdVTB2p5iCmPhji3RocqnnF6w7Zf7w1xoZAGQC6nnBnGd5LD8FwCFEBuqUZHoCU",
  "key8": "GhNEUMK9QJ2FdEVqyuwhhdTLupkDbCsRqczp2MHYdPbD8Jp8xiYLeZMQPRzB88DbLAw2ZRqLgeLKTXmUNdcUkNU",
  "key9": "cJtETpwzBz4PddeT9A23ji1cvHbBuoF5W9KvUfnJ6WBQLwANR5pkw7XzRhzkbXwk9edstsqRBxZCvs7mKN5A7pJ",
  "key10": "GpDsCBYywtofqx2R7RWXvm1DJYPMSQUJ7YtzVTCJw3cF8LY6vrjfw4XQwhPGMvKjVEH9MKYRCTKeqxBYfDaF3w3",
  "key11": "3X7msYHN9UdFvRH7RXsaEYH1AVnBJFtbaSArReyhtyk8LSkhXdYV3JyibeFLsWoryDBGzefPM51bTQNevVQ9R9wP",
  "key12": "sfwrS92tJgeuKrZ2K1utAq4Xg381kvfdoLVhLY3TmzrVaPwywYub2w4T6x3gqWVhZmSnmDFDpbriuWD3YK3D2WD",
  "key13": "2wjN91JUSVJEhmyJAAB5t5KmG2v2U7kr9oQ9sjhonizb4V3qFZgVp6gSomb9v22FXf9PdV8xrDgWpnRppmD4ZPq",
  "key14": "4mZ33QLTYRpE9JNRy8Kt4hhKfR9MGLDpydkSK4VTYMmdjAU1MZy7R7qs4bZJxY94vRk6mB6Zo3sHZZDt9WuM8Eh2",
  "key15": "48a8P2XH6zhQznS1oq55KzdwTifXaa8tcFwQc1MdPgJmZwbJZtGMa5uMjF69nMreWuGA4hCJR3PFKW7iKALWyx2y",
  "key16": "5zHZHQNjgvWZaZcGd8tFVDjgRiCJvY9BHC4sB8jcFygpArnnhuK13WvjtCxi53ks2g4Xn2Rcvevn6QjWyvE3k3rv",
  "key17": "5MY8XS32YiewFjFRQ9LDb4oRR1Fg7Hs2HXmd53mdyd2mPomREjCp1ZTo3UVEbWoHxTdJBdHSZ9wqQDZtW1p6ve2T",
  "key18": "2n8QvcjB1HeBmT3SBUV6Wg7cUh9U3jnTrm35UfMYBaFAGBJwsH8y4Wf3Xkc5XN6PkNUERNR8AJrDgeC9DXKuH732",
  "key19": "2RT7p2Hv1pMyw9TUhWgDYaFj1ZvhRNjdxPNTSfzFdbxLQYLuJbyeV7Gb3mFA42nzhowzRrwkdyM8qXSsSE7GnVgi",
  "key20": "4Af2V2xt3GYo2HNsounaBhy4HZi5QV2CUDTq3mgdvrjMBK6xSvkTRgWSTniULLd82bbqkzZAFqKLoRUwSYeYea4q",
  "key21": "2hcmbgLfg1wLJ8oHHNqLG3ni2Bphp4L7dA3E2bBpEZBuLFMMq1yyx2iXkkdE1AhTkKcJ8HzuwTTxeZNnNxd2NmQU",
  "key22": "jj1a26fyVFU6AqT3nkFi9dosNtPrj4Z9MFnV4NmmKeGKKDgB3HqFpCNmdXKDQ1jdvWordMc7mub5wRfDHmStWnx",
  "key23": "2Z8Fr6Cdz8bFKGSv7h2ipShCd32CWrgFxSEskRi6HuMwL9gNHnj5zDmt9VkVz4F7XpS3nJN8jTrwffQGYMsqVXhJ",
  "key24": "BmgWYGbG9G8LBAAErZgfqjj2iHkVogRDj1c4vsyh9wyhn5hordS2T4oL7ats3iSp1CXrzBTjyGG75QHPnaPkRKe",
  "key25": "2AByMy1xE5tHtsACzJMyS67y1fbqpvHvrU3jGZuq3pD7MhVD4UfFSGCc6ZkWWXzG1BgFsfnBS9vdgjruELdDXfwz",
  "key26": "2HMQWJMKC2fbt4CRStZKSUXL3gYN7DTUD5QZ1xdrMFtfWt2ccaUkkX6EXhz7b1YJHXNRVWx4hEvsAqTj1MBxNLsP",
  "key27": "3cn9v9TabLPZQ72TP6Hf68iWg8s884ngEALpT8btGo9poedntsxvAmZ53JdZRo3REHTXe39JptEdSNzfLpQMssAp",
  "key28": "3hUiiKkRCNPodLWoATnnEpNex1UTo8U1rCFjkNmVNgJAioE8DtC7fBxXwTN2Gv4KmJ4uADQXKciCpyKHhkNDdcPc",
  "key29": "oxaAnhYtQMgqAx3SRZ3EsbS2fpFxrfMx7MFduQc8TqkSedQZ3mun2WaKHZug5qDkgSp3FmLDw77UFHv8s1BBNSG",
  "key30": "2Qj9HS7rjhBAxFeUig47F3TCUCU1e85QKgiVp8QpyUzEy8pMnJYBSKN9zdNSCuE8SAhnet46mD9UVH4nwdbBZWsB",
  "key31": "5F4arcCmALHRh49txfgke424Emmym1LDTJ6XACzbG4DdrneSLdx3NU8oyBuy4tVWCcwnnnaeczbSo1Ga9uihUcxA",
  "key32": "3jRz1HJxPyEq4VekhXENgkS86ZT3m5FG3n5JcXQd2W4mysmTS98McA9fa9AVDNqUudNL6kXWSvNUoD3woAGAQ16m",
  "key33": "3TY3ZhZ58suMPJJ73SWAbFtGPiUsTUbarWncnMiEypXgZm7C72TLf9r12ZNQPZA3abAQLZUy9GrwDRfLGUm2v4Vc",
  "key34": "2J6ex3HRfvEaeRhVYgfQkL77Ea1G4EShtGFcLBYuQaKznNemYFkomugNLer9UqCp6KhgA9VKhNtHkCwkLqCvzqVo",
  "key35": "4GpYGpce7VHMxPb73KRvxCYmWFtUqYScK5J9nqrfrbhBA5R85Eh5YvcG2ZLjdXic2vknTRiZS9PaXw6PwULxzWFr",
  "key36": "2W16SdaKH7jetWNuqzYvJt1tMkeVZU2mRTgwuVSGg5wbrBUHDw9HzvyeFerz6Gn5ESXjf6SaL6BFkeo1VakLQfFQ",
  "key37": "5hokJu2kCKaoQ8MkaK2Hd6F1TqzAc8KEfBJKJsGuDMhyqcmHYTmZxxDkr5NvsNs4xz996DmoZN1NzGjXkttiUfJs",
  "key38": "5vaW3KAkheSbYNDzq4dmhuHHAexTUvnBmNPxGRJoPjV81HW1E9thnrth9apALW7bgkHB6XxNMbjzhRNixJ3c4JiP",
  "key39": "3H8Vwh3tXmhaDLjVWyPf3edeiw8ma3LTVpDmH8GmhcLytYt9YVoqScscCjyVptrr5p7axSCf7nDJgTwNv63JwB3d",
  "key40": "2tQ6ZnzJLtECbyQ458bGJb17puasGVsXmXGiq1WLptyUK2n2PDX15pCx24sWdmN1jHT6xKRUWhqxRHnqzwx7uVCF",
  "key41": "5AJvWXM49hDQbvgTesd7Z9rLTyhmvJkY9qwL12CTzkLLdjAQZ71bxnJEPje81G7qr2V2YaWwtBRzu2tye4USgsMG",
  "key42": "5EjQzz1oPKCTzWyVB7KQ1oJJdCjExmcUXXunQX4yT4xyJUovUwpaCbjZWQmoqAUAEDmTuqGFXLXDknJ1L4UBRHfD",
  "key43": "38tZG9UhxzFGqfiUy9PPaVka1mdrTdSbTwnVLQRc9dzCakv4YuEqLVcckcLBG5SRPLjBoBJgHBkjrPKM84DK9dqe",
  "key44": "2G7ag7SGgvAcZBi5tgD4nTAVbxD7U6w9rxJ12zvKEvsTFfJ51bkoFW4ZEQmoAPyVAJ2V8p36Lcw8dT6MkbWMoqMj",
  "key45": "4zeNrH1EeP3C3pNswidpnJz2wHEKRP7j8Tqu2NWe3cVucoh8wg3CNe3iiWsnFttLQcNN19bbAVEYvqcThwfg6eJe",
  "key46": "51Z2bhzDEAnz9ogDLTtLVQhajaA1nU2NvfXfDREdPiRX6gZb2Y87CMDd4u9DnLad8FLExtCXnL7ofxZPCFhGjH8S",
  "key47": "2GKYpj1zGsFgL2uG4oqzc9BFKSsXzxLM7bg4wwv2ySgBnjTW861ZXKFcnc8qfkEmD13jWdH86S76CXJEPEH8XiXA"
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
