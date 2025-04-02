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
    "FywxpiWjMmJLPJLDx1pciB6xQcoAYtNBPyzZ4C4c4WzRTLTLMEPtfHT9LgYXT39ZpKuU4cMaPWX1Juhy4GPXwvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4odFfPDoabQ7RNi3YhXEGbEB8FnK13spipjBypZwSTUiVcQyugm1U8hUr2w7ERdppB9mC6LkkCZjBFq7Re2BuC54",
  "key1": "4i1yNxArA37QsVjw9Be21pHwQ6HhLRrvPRhqfWVxQmfzZTdCJQHpTAmztRVrWwnXAKKJS67gjE1gZyLsTqc8FEd6",
  "key2": "4Kf7JMaE8VKKePzKTRoiwiG3UQ4de4E6gCqNk8wCNvdmEkE9A8mFSvfrvKZ2KRnVidm9T6r1SuLTNeZoKzxJtxKW",
  "key3": "5Fzmd1Fhta7BUyep2o6r7TJSiZENMySxJgG9iMTktqrY3asG3usTwU6f1g6yeaPHxB2KFZbnuQna1ziLQeNNpH7c",
  "key4": "5iB7VygJnaMPxHLV6uQCTAjdj37XcMVB1ti4M345yqwHrzo35DFA3dKTXXiG61tdYL1p7dPP4NkCquWhVQ48Gm9e",
  "key5": "2U1N11HfyBz4JL6nP5mBFAtobZTpqNd5LLbKgf6jzXUNJAQi4JbrFPiHzcdxVjGCbRy8n5oqJP35pA5DjnzB2cMF",
  "key6": "2siCmemMDHSXcHrDqCSx8JTCCeGKVBYBAEEQsWWC6zS6Ao1NZebUnR8fZZieFLBa9UoLPoCgFhk9JG8FbM3Crup",
  "key7": "5Y3SvWB4CnG6tAQoZRDpDsV8YxiESFq8vyUZdoym2KbQsRBaMmXJ46FS9Xpam5aB2kryEh1Sq4wYhdzTsQ1Qy7A9",
  "key8": "26jhfquHFhnh9p5MsJdsxweGRodaKLk9hY3ApG1PvczRokfkmLjo2bCguhjF6e5JWG45su2Y1pwzz6XZQkvR4NLV",
  "key9": "3XGhWi2AfwSQM8uvuRxaozMHRbUSf1TzSnTEr4Vg6Yf2j55vB5kPrXvtw4afkxUYK1bUvMXZtg9jjaSN2v2Z6ZrB",
  "key10": "3ndgsM9Wq8bVM5VNaKRo5qWLJLxoWvm1dZYMvNMu4PRo64gc9uYic1ACzaiDUFtuJfYpVDpLMV8YiYtPGp9yCHNa",
  "key11": "6F6u7tFNWadMWt6EtKEepiz3bAdvuwafyevgiam1jHzfj3G4xjsATtDC4EsTyK81FjjEUGfsRwjvymooTzSGFnN",
  "key12": "3U1TV2uJiorXTZFwDgsgArHGDUes2z3FvrRy4nQ3BcrgqHaW4tiLGQFHkGXtMarBgMqcNUFAP3yLJnRZPZA8UJam",
  "key13": "sUH45ZGVt512EyKsT4AMbrKj8W8U1FehNhYuALxQebgnvRaC2tvfPQ1qaFmuqdN28LMPqRLbQR6XmQyesXX5w7L",
  "key14": "3fKuyhhoFeq7TCWuDSq1kHcBGRr7PYjyJNEBzqLyPKAEjmRR2pDzXLhwkLFo9XsQWAiF7kpxCQQkkhdGtDE55NDc",
  "key15": "3aGKiXmedHRAsWveDkif6RJjoYtxJd2EJp7JsinismwSSuhfxUJtQrDsF9uVGGQSGPMw3USLTStY98RcSW9RFZkZ",
  "key16": "cGEQ56PaNCEXX25dL1PWSwgUmimZMbeVRkZjAE6DkWy3ssw7WDHj75EbpE3bUZ62iT6bif8XdkdNmAAeqWRm1zG",
  "key17": "5KqW2mquoG2v4BNsCMK82P33tN2ncJahDwyJD7xenXsv2FxGfKXxtFK8GL4oMBUp4bYNQmDftRgGimQopvNLKVgR",
  "key18": "4qpTpb4yy7Pf3YTUgsGenboLAJkadJqrZZtKwwYWQor4vgopnrWEfvQDo56uuW2fJUQo17KtGmvdXZgZiaq4Zczo",
  "key19": "HNG5q44LEDeXNbMgK3nu5P5xAfNUYBYs8R9LeGcrLN7k5uaaSCZbsy47NBDscy6Ye18PpgzdAvJ7kpSQW4u8AT7",
  "key20": "62ZKqps8CWhNarwNPzg2pwGF2DPzdo8hiMjui8Z3AWe4JWZ1QoQFaisLxauc8cDo5ovngyeBjxgbXYUkHZz2SxAu",
  "key21": "48Zu7V73UfohaJgWLY9PGacQyLpZeGzsup6Rc9Hchtw3E2Pp7pi6GM2SnFw8SRMxtpU45X6nrXDbV5oeWWiVMKgd",
  "key22": "kqxPZwNnANnBSaPrTQFPHjFvwam6SS9vtAMr43THS5AbDBwrywnZccrJnmiBhJD6dMefN73bnaKbRbdPsxuiC9S",
  "key23": "4pDecD8VGYU8aSWfyAf5LZZSDReFQ1sVHc2H5djvV6J9NokVchEsPcRQtYbxu8VyncckzhFqQn1JtPtUuTLiTZot",
  "key24": "5vu3VtRwb5s86LQxTLhVSJRrZViYhQeSdQWsUq5dSKSu7gAmV5Tjg4nNQs5xhuouD5rkUDWXDR3PdA4EvRdsgxkJ",
  "key25": "4q5qNM2UmJ6mBHEt5gRrud6zLzoMkUvyRWBpeSikkgknaQdWDDCtMD6E3BbhHvPgHgxeM5o4YPJ4qSCNGZwL2pw3",
  "key26": "HbE5NpkiFz5k8hJvSPN6aYwkVNBwNqLHDmKWLqhA83AZwr7akzPWDxR7eLaMALEW6re2bVpN5C28kBehsYsCL9m",
  "key27": "2hdfzRezdKoT5C3V3ASfxy53G8XUSPUSNXQ5mC4qnWdc1aH81K2DY3Fth2HeS3LJpH24svXR9iMNTGaPu3cDCJdx",
  "key28": "28ByrqNCvXtgnWziKzPR5fPsq5YeHA1o4MBfzP7yh3WQ4nY8N6pj19a3YQMDpNCCg5AW9UTCrWYypgn55UzdnnnH",
  "key29": "2JXNcML7ssHAuU88vn71xj9zJNZ8gKdBKMDZpGgUPrqp1ARyNGDTHVvqzBSrdqNJdgRXZ2nsP2hGLC8zmaqPfFEt",
  "key30": "dSMVaoqebivv3NwkR5YURWDyTWEt4L9vrQoBg8THHQbEd1x1TWrYUGdVLDnKstR5psPsbawYG8ieqvwjkQk5SYe",
  "key31": "4DfUr8zp199657FYiMCfHcrYUU56v3E5MLNg9xQrXcykbmJYf7jSQcdabFLGbso13z6z5qAKnzRGxrk6cYESncxJ",
  "key32": "4YLvrqykzgyh7epZRAM8QtDiZb97ANHDfykvGHT2jey3m8uS3ULjJHAEcyJYVuwNFWwMof3cLnAwmtsuGmWPiono",
  "key33": "5igkB5ChpXUQDqNSwWVbhYBPgdN9RJ3LzZPXSdCEGK457c6T8tvPgRwVP1x1WfqCM4jv5mnk2PwWYLMVTADoZrqq",
  "key34": "43WjwJTkKwcRUhFp5UhSLAw7xBR6f5ovbiio9c7JopKmFY7CuXvq3uy2anGjeeynWxP16KVjbfcbMhf5UHDVhaET",
  "key35": "EvMKeJr9bCcGiyDvCgex5tNPBQFyrQLNZjzU4ZWHwQWi9dZwox9YMAy8UdW1PxndimQ3Cf6vmvPqKS3nGiNrAhq",
  "key36": "bxKBV4tUsBNN72rRvsA9EXyLhYtiLNPjz42Drse3wH9wuPzn9pca1X4zWUXaY2mCdyLzc1Y9mZU8zDqWNyz2Ymz",
  "key37": "5BkyDeqwwVSqJKjvRZErasT7MVfFSpCGRvHmLqgzjGmLqBso1QPJucZk8K8FhrcXDU9SZXSxdZkzHv6tV9VKqntw",
  "key38": "3Cj61WPs1snMDHJ5hpgPy8D7iP6EJ96UnHpzoeDv1uyjnfNXdU2o6Mjb2VdMEx3v2ip6DPURS6wMtEK352p74PNh",
  "key39": "5aPnfNN7wLVzkQwMzr1twde48NmnUXQpY5ZQhrcrZcHZZ6fWjuxNmb5cDKBDE4NSZkR7FsGPLCiiFYivp52Zcawq",
  "key40": "5KgDhb18dDXbX8Z5royTtD5eNydUdor9tknZEoz5zZL4VHJSw9iqu8drzpkXYJ3EunhXTtR61Ww1AXKttCXJCWp7",
  "key41": "2svc7E8p8CzSzrtcqUSmBNLsMpRjdaqeN4ewD7mrnv9jvp2wjEF6SC1gHLGBpSGmTh54kPDnNeQyPSWZq8CKwzCJ",
  "key42": "2SXM1ZDTeXtWTotnnoRMw2dzDpaSmqPjajvN1TzwsnivdYhghxjh9uSi92d7zUkF1uStrWo2a8DNHskKd27fS5Gq",
  "key43": "2YLzFb2yD7Mx89mZMswubdSiMojrM3wp245LZ6WnSQjBnzBeQPrWG97NbnRmNtZvFJxfJ1EVTRZJonDY3VWDk6Y4",
  "key44": "4XeUE6Kp9snqtahoZREMprjecHSC7eZh1X3Vetx99Xpb4yDS82LaqGj147f8WoYPgwKA5C2qk9JgQ1Zk3SKc479r",
  "key45": "3kBmob5aJskebMQCB5zAu6ZLphJTmc7XvmdZCWVa7boGcpdjscrzCKPNSjpn2d9LXk6T2GjGh9naW5J1eYgQxi2f",
  "key46": "2gYkNjZnYiifsrTNzYvkYFWzoeJiHrMQzxbcSTYzZ7vdYubw9cSBdytoxpQJHg5gEb76Uanp5mNCaHXVRoZWWM82",
  "key47": "3bcdhLhBRjpGn2P4mHByujxsH4v2jwwBeAegMWzAUv26kYLKZayt3ZV4ZD99tvYEaYcFgBp5RBM7yoTjseqSvACa",
  "key48": "5gy961ktHtzEua37KXH3vYkU2n51gzKyuHePduPPb73zoZZKFZX4Pm7T32nTFFrFHWorjpcbvFFHibDQ8atSiMC9"
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
