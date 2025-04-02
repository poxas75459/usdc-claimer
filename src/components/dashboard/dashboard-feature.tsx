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
    "3T8ysVnFEBCBm51dSkxnBM8teWF8gncrfqAizXeKBM94fzGKHdtyzQnBAhKbEtcf1bg68eDAFCn9SymEbeLCEbwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k4YUpq1M7GniVhFB6w6o2KysMhF9DJf1DRVmW24ieyGH3Us3HsUXAHxH531sZoXBDLSFP6yHT4NbF1XCSo7WiJW",
  "key1": "3ruaqFLJJRHryg9CLhwAN4hsyc8PxRzzMXTi3ABB89UsqHD69onUazf8v1tTqpfXMEZ9hGNrp6FjXyjaaDkZqrmq",
  "key2": "4WXiFyU7BYRDYHcCEjQ5qJYrnGdLBGswDSUE8MeRK9CbEPgT7c5i6SXsutMu2yW6zYstNURmm7SRT6tJpqyPSksH",
  "key3": "4Wb27z4uVUQnjH6C9ps2rch8uCFDFWbDH3f8ZUgSRZuysdytfSz8KPhjJZmMrWxp7D9cukxKa4jHEZ8mZZPoscSq",
  "key4": "5VBL3EdqWc6UfE7shzU5MkjJELWQCXxMtqrVwH8ngwUF1gVB8HcueuQ1hcmi7FiZUhecDvq33eH4vsurPAdkNNGC",
  "key5": "2HYb1BremUzys1DaRb2R6W9phdWaVAQmSQri1kvKjanERETRyPUzyu7JFcC1663DcmtdKXAxppX5U44MmppxUw36",
  "key6": "4RVZnoMeVcWC1oDAzFHtBhbMvrLbigekGv8AcWbLCJMbkmJd6Ez11GqSxw9Y7haKM39WpGBxHAcr3fb6yfs3e1RX",
  "key7": "3xUrhkdhwTFmA8KjmnpK6DyrvRr6BG21N8VCnQfKzYmAeLEg4X7AkxqAJYdUJPWsFYmXb3vbzEEjkJ3kPU47cVV6",
  "key8": "4PZKxmcwrMa5hnN9S2Fpd8fwm9TNQifyc4XL4T84VPYcUeM1BNDzXTjcLfQf4V9mMXMtYsrVeNMmPF7NwN4UJU4G",
  "key9": "5djRJeeaq2d4BwRSa5VRLkRRaksVkGepoJz8G1xbZ5q9jxFvohJazJ1RmYzqXecykgiuoV21DWU9x5PkJbTrNqh9",
  "key10": "2Wej8WeWEXPZiUE1SNJTdDefNhHJRGCYTttGmFW26XBd9RnmTDnVUpWPiggBHHpgeaWXjpZmJtrxc4Xe9b1N3a3t",
  "key11": "3SQeRxvW5uS7hJGUykGJnghXQ9JV1y2t2j3gUvPbea8J5WRECEBhzB52W37oTzwS5uLXrVdFVpncpWTzVXz7KTVF",
  "key12": "2Rb92zS23voRouQiYkZEL4zf8jMTbuLjRGxF9NQMn25koZZg2zjViDTV4YCm3LZe1JjQrvwSsT6mrLvLLZFomPr1",
  "key13": "2KqkspGUr6umzku1jdPs31m5Npc2tA6mFHgkdkLRQ2su1H25uERyVnjBxFqNY9yz2w4sBpns8mkHGxmgom8QKUuy",
  "key14": "4nzYpb18rv6zAjK2B1PHS8V319ETP7XQoYNjViGMK9QzM98Va7fCN1YkTr2kxLnmcB5ey2w2sDXwGm3en8dV3q3o",
  "key15": "5kdapWDyQ5FXiy7cchyHJquHwtfcaoBAUXTzkC4Dt7ueAo6UohUfWiBLUuUR6sb8DJ7wohwxhv26zLnN8RigSk9d",
  "key16": "5eRfNNUiZ5KWKnwKhYArdLM5Lbnd15fxN92q2ADABSQKLLqh7UukCZd8pfJYPbzhWesqxtjxdHXAF21wPm6jHc95",
  "key17": "3gRPVX2LRMrtF4MhaQX6KbA4NdLb9qguG1Vu5shcnGULoo15Aj88fNjMQ7eXtU2g9b3EPwvDjwjkAn1Je9HtDHSb",
  "key18": "3kMmMTaTHrL5MeDgCG4NBFSYK1Kkhpi8U4fmnvhxv3y8RC837SXavfXKA3GbeCLpApvqcqrN3o5Bk6vUH1hMmpdN",
  "key19": "3RbR6bzmhEFrLYdGTEbQ2GvakkRQ8UZPZ1tU1wcMNgy1xtc32K5qJhuwNHXbavHqpT1kUqGgW7jgr1TyBpBntx5e",
  "key20": "2kRsyhsJ3j3TqoyiEp4vRfEGruVVjhVs5U1ySAoUUrjEpZnJm79YL28hPHw8rHaREBamwECu4UqUuMrAJfoRyGv7",
  "key21": "5AHGn43VG22gKnRQXBQkpch3koACqqZ5vF8qtKZ9ZtXRU1FGQB6HjjsNHgCQZw65n1r7BomYnDMrEHKAP92Bp3Q7",
  "key22": "4FRneUXiKfGTk8g2opkv76AMWFVQWLBa4NG5iavBcSfpz9R39iKdMFfTUB5RpbV9bXkH1byRcpZzfzLDj6wZidN6",
  "key23": "4bWbYoG2YPEuEk3gZfiUS1hPKaG4n5rsKD4T2kaFBeBt2QBC927Zyopy6TQ5nCp83KwFEEVPLPFpAfoix4ovMBMj",
  "key24": "4CNGBbUbsBagaV37AemRmh7k1iSDn6B5HGGBnHZmT8f2MsrbX5UhKnxsediqkfPZCNZH6jn3wjazA76hV6Qq9D2E",
  "key25": "4BLGyT1QZzHXDcGeahomYwWFNNqQDPGjjHNGkpFNJHXx1QeAwkVy4co1MtXBB8vQorTntLgtcSvLG73FaVWo9RL5",
  "key26": "5w8wL4tvsDMEzmxnJGYgNA43ZgAjGkcnx7SnF2NMctR7FnCuzhWUVgep3sKyxj87CG7fYpM6eLpPNaa9kUyaq741",
  "key27": "3eZGzLK7SHTUCuVEHRY1R5GHddZMV3F778fzhvrJ1TN46wNyoiiK9YE9e5jXP6adBRzMnfX6vRaPpUBBKGyvioQF",
  "key28": "2mZwwFqLgeN7vLamE9wHYBnh1zapz8f5mgVFQcTwuxzQnYUGnj1rfwBjagjJLfLvz7ybqmbbjkfoKdmHCg32gds4",
  "key29": "3L1wMvt9j9zgBwUFvJHJSFTmby8PkRSDPPgjbSakXNXg19MzEqqK8jYGuwF2zGfcrWpEDFuYLrmCzX2TEqKZfi9M",
  "key30": "36pbmJ6Aah1Riizmp2q44ktagpvtfZgzFbuRchxcFCvVn2ABuUyzuZFkx5t3Qed5J7rdtrkaxdbNo2rMjgTudr68",
  "key31": "646CWZw5rabcdfH96fq84UxZR7h1cAfu2PdDfJykLVAiRLZgKnh9LMiNsPziTUN1PEswh59ZEPLYtQprYnpr7m9M",
  "key32": "3EeFw7sCUg7hWL5cSXfhqvho2iQu2ffYDNrW5zvmsGgZHhKgX8wmTaRqdDMaJcY6Xi3wUPTpryDM3CM2zY86gFd8",
  "key33": "kHaHGxaHWxo5JBBekTMnpZ8mYkp8U74HvqDXoFm31UijUYpijEsqhKZNzizp2BnuDVktPmZy4BefzrQPNLcKKnN",
  "key34": "4gY7Z3Zxhe9z9E7JSL4douUgdLhAi7S6y2rqx9fY4bfgL4ejvLmb8k4WpMopqMHRqsSyswRHFt7dNBaVFRsQ9ku4",
  "key35": "xKCtXdpnNZXFZD7M7ndf5x7eTMBZ4ZaurDzegN3tSgFo4j7n2L4LG9b1EJhDQgwtvSQ4NBhbMJnb64XUfKyGdNY",
  "key36": "4zscKD64SdgDN7BjNjuf7A86SdRSyigr8fRpJkpUvRRs2eQHmX4innpSg2SfRKfDiD8kBomQjP8eZjNoPQv5U7T8",
  "key37": "JxPTZ8VNjdibLvL4UwMx51XNBPRWky79W3J24N8rMePqH3Qj8d147UM7r9GYGcpVL2fj7FxgTrJbiSttG4YBXDJ",
  "key38": "55dGk3544Rov5p8eFZB2mWWGSgYVjdFdQTTxe8YSJag21etirh4fHsYf2fBw4agtKQjcP9KLtaNpqg1MP1dLFGJp",
  "key39": "4QU6kmBKnJxSvKDhncEZn1S4ZrM7ENUGAXgZ7Mz9YA4TvastFKw2m3KRZLuYkgN4dKeLVP53eWks2FAaZ6R4w4vY",
  "key40": "4MRRD7zJVy2WLB3AQ2XRkmu6jCwVnRnGmgUyb5zosJUtjQTzZFzbWaqNXqUpVBpVneBAAoJEuWZqJhECHHRnCHWL",
  "key41": "3R45ZsQ9VpmxjDUqPMfam7eXWJsitUwo4t4TZrC1r7ziqRvtP41AaQS2t2pJ5cfpNMcQ7GzcRtd5b5E2qg2gBmmD",
  "key42": "vfZXv75Xm2KcrjCKdTdkqVTsQxzk5vTjquYZZM29J5jqhk8p4FVTfffBwhVLU8hCPQ4Lr3duKVgHptpLPUdFse2",
  "key43": "4XhfcBsePnaqBekAi2SJJpWbbgeqCiA4eU9gxBofn3fVQxdXfcvB9naqxe7suHSqCb2omYrWynZCnckg6To6GkTQ",
  "key44": "3kawvC5fM9aNfmkYEgJkoqhx7Cc6w3FvokeAQiD5sUpdj4HidtiDPPnscsKqWY7EuA8eJJJdfxa4bgQ5CmFmUSp9",
  "key45": "4qy8y94tLMPCUYw9JgDsnh7nU1A1rpHBK3B4WREiVPCejKbWo3ZAKw78UasgzzpUUzQ3yuKC4P2Q7VKGdVpAwCR5",
  "key46": "3UqwSD6xB33BT8KfqdNp6y3haTmnCCKhRZ9VqLRZzg2xzt27U2SCR7jDdkDrGv33D34wAmS6ypbKYZ399DFz7j2b",
  "key47": "37DnJQPVfm2N6XAr7Noe6WRsuo9aS1dUCPCHTUgCSzJRZBJpXqNpdW7Xbk464SH6MsZAWBm2gG7J6cZKLik9cf9Y"
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
