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
    "2CCS6JmnRvJRAy1nMGp64bVKqKfHCpvvmqBjQHpxyoZmwkdADBzZtpKuNMJyav6RWWEt4yyNvywHmqjz9CccXYLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wvEFMVyLWQyMQsYeseozhUA92T83NfF4jbZ2bwdT2npEoPM1hiQ9FxMAk1Q5C25vnGG8PyU3i59Ps4bcKMnmwSf",
  "key1": "4djDS4aVL8UFYXBfsaeMpWjtsnEUj3TARdo4UMngk4Njdn6zg3qT1XZQbAY4y82fst3kB99Gwwxg6dkrSVRx3r5U",
  "key2": "65xQ48BCt8rLCoURx7bmKKi33meg1TvTGxxLBWJmhD6TjLYg7DExLzcgNxrUZsSqj5hgH8DwqEyoUsvWwgYgUxBQ",
  "key3": "se4Gxn3pZKaMx6kBVn6PvsHDCZxeyt8rP4DYsYoLg4okTYt2EewinFmyiTkTv8o1i6NdwLHTKKeMfTL8JVciTVm",
  "key4": "4vdYujKq5sCUwL5Ts5EZgU9Z4kTkBoQiHDfnthrjWMSerxku9bxFPKkY771UQy9fcc3pNJZYfNYm4yojfkrbxaxe",
  "key5": "2354Dnc5GAVsqYASK7i21E6k64boNahMYbTerDocomVnWv3rRweHi5sWu4fEvLDLLdFXjqHhbFia4Z4EqxgPSzLR",
  "key6": "5utiCsUgKFBR8SYepPMUHpcbMVCPVQnwCBQbHoi5qizNgQdjjeKfYtxoghz1LKEL2WAdAp1Xa1aua9EnBUWwkDVy",
  "key7": "5e68CVQbAiUPQQFDw52LhCHNbnU1gDLuD9RPoUTVyDeSdMwPJMAjvhsszzrj9w3tgs84LTzbN2LjiSKxjtMEVb6b",
  "key8": "4Qq1kXKH7Kj1sFFEnEFepGaehbkMLjBQKpmdQn7HFKWCPcAZDBgsz8umbSXFv6rmxKahW2HnvyRqPRormxqXNfHf",
  "key9": "N8P5UTt2YeKXQkxwNR2bSVNgo2UB9AeaqUeedPQgWCSrem14BGegEbGCVu2QCYLdWRSDbdWJHAPhgCkr7p8czUD",
  "key10": "2tyXf8Rk9M8gaQnBF7brxcnRd9AmqVRmKSpmDamQ6GSBTPwg6BYGN3AzxtpEX2yRJPd1jhiPde6mVUK7pkVbvhj8",
  "key11": "5qeivi5gD6n9uVkrzdsdWMjyACeMjeU6iSuKyamrLW2CiQKY3BywfcGnP4F7NvDhWe2AzXobmUWYiuvUqer3CBrC",
  "key12": "2iZ9x9Za8y86SKfzimyDm3GWXWpZSpuUxuN9HUtCfFqmpAPCx5sY8VLMPp929bnMioCE87LGgbRmNWHub2e8wenL",
  "key13": "5iLRo3uPVzjwan8gi1wFfBdZv8z1EecZccLE5SfuByEggZ4wbnFb7pqKscb7Vuxz7AwwQK7QUiWwyrjW5HSoi1ik",
  "key14": "127kVLJQpDRDUJ8D2FZKMxf5jQND7wVvEGtMco5E8UiFmvcHcrRhPo8HYYrtPQbK2cFWQZkXjFCnjCSLUaEAeutQ",
  "key15": "3vQbJrnGuxSZ42johmk8n1RAr4zYcaxZC1n5qdfEqx7c39GF8VuerjJizS5JCGTkTCMLpPae4vyo15kdnrVudE8v",
  "key16": "5iDXChgfpL4ponKak7GkUUuQEeq3XEhqxNjrueA7oQSy8jCe8jc4gcDzGiPFDN8HrQ8VSdTMdyBMVaCRsa3GTNC4",
  "key17": "2nKjnKJ7mD9tvggnBMV6HgXmBPQc59y2Z7pS4vx6opk7LRvZRmRbk3ZgxxtsyKYRqVoGK36yXP1RcjR1VGJJG6n2",
  "key18": "46ZvYi1QNAWyrGQdTfESFQqMmLvNk19ZT32evxC7R88F6VyRaSKjU6U7Kt9m8uMnoRKVfVPLMe4u76jpMqHtDiY6",
  "key19": "Hg1iSQSrQhrHhVewfAaVkZkQSHbCLwdDsi1oVCtKpXMzopTj4Xb6fxGfWaFtX3mCwRhYFXcyJbCBUUTv6bqpYLa",
  "key20": "3stEnpQPTT9NgzrfCg6yEWpyCK6zeVbDoTHzxq21fGP4vBezNgtknUFTeTrkgc47ksSQPPs2SqaAeVsYUig8xBZd",
  "key21": "5ayqQke3VFQAUNTpekxBc6xoJi4S1RKCJ5CaS2d8xE5T1kZvQsBMBTrQYhhB3iAHxXmDTWu4kuVtWCq79UgFBJgE",
  "key22": "26JqaBLTAAtxE3ZH1i6HBcPWxVZdAZ5tcgwdxVnZCC6KrYEV8VcqFxAJjaGWULM3mQP3Q3DjzxG7YwTRZXXZx7XL",
  "key23": "2yLZVZACue6NYJmqiN5C2QwmNvionGGfkBXqbk1TsebCPh3cAWKe2hV6rLFsQTGmLtLJntVwQtkdMp8b2v1tHeVe",
  "key24": "cUJ8amgHKwreJHCFRxwJvpLaUBKLscsjdWXFCSeR4gohCGaVBtbTB238vFVX9sWQpjnd6jdEyuC8uDnyBL1nVdU",
  "key25": "3USLkftEJJXWAMwFwfFMSpVQ2wgj23b1VH6Wvm3zCTNtvqPvx5cAhXEv3gYHRGrEfRkAZ3xePVHyvv9QnPXSU7Zq",
  "key26": "4GLZiurDCsrDTce1FP7jhy6NKAbUd8gEYkTs5gQ8gUJX17pBq1k9ochC33CHB2LXLLH4UnSQQgY5fTS2ketiC6KN",
  "key27": "59sveFuWW53LAT9GvZSbczD1zHTNSHWQVBZPNdCjkEuaknBP1aQazzWrZvsAwEVHE5c8irg9p62rKtrEojiQPVDU",
  "key28": "5wjwksrGATFwjdToD71yjiKXinAhYfAFg6tmxCPzWK58te7BFTSB3HPf7QH4amkAprqsfFxURMw77aioqMkxmEah",
  "key29": "34PF7LAm7A1bqkwNdzAX8HGYPZ764aFkLCJmN22hPmnpgM3Wj2Ay5C4DUfLgmf3WemNXT9iu7Ry5ntv1HgPCk61E",
  "key30": "51JznAkhVkBH5ZtK1PeWEw3tiMWvEhv7mwYpwdATAnA7A1AUVGVkCjZLkiVR1fxEPcJoBKf5h9pWpqe2k8Qv7Zfh",
  "key31": "2uUDvrDippr5JHdP7Q2gbZNJbHbT3tzpDeEj6hvV94rjc9sYd1bNwcLnyuoejNvR9fKsXg5kVJdXwWEBKJzqd2mp",
  "key32": "3tMKDJjbBEYWoPRCK2cZosaCnAJjZ53RAfe7P5Xc9jWr1cxUWVAActvB2BxkVy5EtBK4a9DGqZQtFyEdFSds3eU6",
  "key33": "53AyifrrDGeJn7YFcTfxLD2h61wtJYPXV6i2vU6X1MhcQVF3jDW2ERm7iyTnjpgi3iVGnnGRhqyPxKfadFrZTDou",
  "key34": "41y6nYP9Tqz6XD2AwF6RnkdSyAH1VFuswZbAFh3AaFt9KBzed3uPWH7mtxAFXaVvS74duainiNrvkdUGspKNb3Xb",
  "key35": "5pi57Xwf5rzJxCaXA3mxq7YT44PviVZBbEm4vUnCYQQfdu1EUA6Fdp1E6sxokMbboWL4q65zT4LY8V5GqnWQieAh",
  "key36": "36Prbd1HpZhjmKScUDp2iaCWeevH7sv5iw8aAZJ3ATydepeLNuzrRkcuzz6cKU2h7gRFKnfGbwEPaQLRTL5M7dn3",
  "key37": "4sBEGV41Ey2Q9C6hHF9cNFK9k7iT9uquZKzvDrcJtcuuyDqKauYwaHXKjm7NfosT598kSMetxgT1KrwPi4tALFK5",
  "key38": "296tD3H37ozqgL8xNqHNmR7enQtrgMbMj1HdakEoty4rsfD5arftQkJM3y68r8VhtQh8FRG43QWuck1KFiQk6ToU"
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
