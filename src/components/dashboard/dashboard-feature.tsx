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
    "2CVFSEGXbo8AoqjBCybUSoeCYbsdeznorso87BFKSFg9fTHHocxibtizr8xjKLvD9wqEuSdBDP38FqxuEzuK8pji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JYnTLgVEaqLJ7FG5pRtMUgnyby1t1LaQrwyG2BL9pyM8Vtap6u8G8eNvZ7xzyTUKewR3jkP8igV325qZcfiPNrg",
  "key1": "4FPriVfiQzBqiEzVjLEdY1n7wJRhG2XA4sd6NhDYnmekb7hkEbeiiqyfzsgRqk79SkN316qv3wNE6jGMtTSwVwAN",
  "key2": "HFr9f1gGj6dVQ4bakgLG5ssF9rBCFszjiGNxdBS2eB7ukFpGC7NGgbLzcbUvpEE33FufKgfhr3b5nwcT15zXp8R",
  "key3": "43kv8dVHWrQPVkC6n5u8KcNSZoSo57AQC3P7sUEaojXXXPL5ARtMGhPXd72EFqwun4uZpahJC1CXFDBi5otrUWEA",
  "key4": "3JYdzxxTBBzQW41in6NpfeWWDJrskyFB2RFTmVMPcpyiCchCAySGvsh7H5u2Dn24FB6WDpS9cGe12YDDYsLLmHTa",
  "key5": "5U8Mue22xpctn1YRf41CJf9WdFCYQH64pVvBS86Am25qfbEE5rUweGtqJTLFzeEUN8BmLtVa6qDKYDPULfxfkX6U",
  "key6": "4Sgnh5HqWBoPN6AjgpJBrQ3TeyD6bea23Rx7Y2miQcuwMAtJTh8VWcK9yqdoq72ZuqpmwkiApZkivh6KeZFKXAKD",
  "key7": "5j3cqsLPGMDy1qVcP9N1u1D8nLTUqx8kCMbqpXthw5mM15KFhEfwtfStEYzzn9qjfU4Ru16DXrW5y2KMvR9ZV1c6",
  "key8": "4XMRYtKfv5zpCNNBFfsQcvQbHjNhAtdQi5VW3kXHN2BFhskqHf2BPYrLTs3G3B24RNm3juXibUFGpyq6JH11MY13",
  "key9": "5ivDfnKQ5t6a6SWtjjzrBubHWo8nXscBxSTtkfPm94c3qsaQwQKkBV9yAUiXy49ASsZDRh3w9qbTLQWXnXTkhvSN",
  "key10": "ZC2v9H5C4uvYPfF1DYTsXF15gJKDeCBcmViJ3ZUkLrVN2UVTaMgbRnh2tDQqEzK8QsbT5sZ8826adE9jzjgTv4f",
  "key11": "cXHjMD4vhPzev4P28YemWLKSkmkhedxcmjaLCt94HVW7UTF676RD6nyLfcHvso8qTbJteVUaC1i9HtzshQxUx1G",
  "key12": "3juP1WekRiTeBLvdRUQMDbnNofZkn5f5eMagMAyzEqG7LkRi2mmoGy9jQgvYLbkNkSCdW1hQzCjT5F6YBLRDU5DG",
  "key13": "65mkQCoTzjQHUgwDxCegJnSKfPGmBHFaJPVm4jKDSDXqv2Xfwb46jsEkxG6ARPX4GNHFZX4cEYzydZPxujAVyHpA",
  "key14": "f4bQ4cj99we8iuWCKVDh9guaLge8oByPRe8nKXNmPgxSziD13NAsES5vjDbd64znqjsAFSA18DpqPY7dm3Q6fx4",
  "key15": "2gjEQvPoGBsDhcrQYxRbm6x1jXdoXUynrZWPyaFgnHpoVG5BGsZFPkfSjpvFrDWkhFXzVwv3FN36HGSH9iqrGTxr",
  "key16": "24PsmkyRhoCdyJmYguk8hBu5X7AFUUrusg36j8XWVfQATQUodJYRH8MZMGueoXvRfYSPRivxEKLjtot3EeTLDMjo",
  "key17": "3NqtXtSqVSNPjxTSZRWhf7ZwfTkGz3HfFBuYXyNUEAPbp4qQwfBqGzyWDj981Xofavzk2m3RUCCrZibbzKcayz8y",
  "key18": "3kfbLrjj1ozHNBpNaencymsXhfUwLBa6fMqf8TA3zgiKqKMBakhnhAHYwwbeTFB6R7bs7bxoPRcaDwt7Reympta1",
  "key19": "3FdPQsNzc96S6bYepn5D3AAffy7BSj7FaPdy7zT4zXXwynot7yi4VERc3CZN5h6boF9f8z4DMqk7BHFX7eQpoHW4",
  "key20": "2Pnds3DJYYp5juqFCdN6EKNHyKkSbX8WqFsrA4HNvK3Ar9V7zCfYFk1z7Rn93p6Uf9hYrYF3UQkxB2ePwQamEVea",
  "key21": "5Her1Ty8AJbmq3pSojAex3pK6KwQrP89umxEVjXGRuP1BTBFq4bV7LRap8uc5rUiBzoYwhkXaYZMcpoWKNwjsoMe",
  "key22": "4DWwGTYFFeVkmUyeSnA36kQ1PoMxEjkHQ9scAVHfjokMxSkwPM4MXnQpVbLRFiz5KmePQK4GFnAWj5mzquqrMss",
  "key23": "nDoxfqBoZDmqucHJo52c3p1yzfeEoCzyb2cfQtPiBMaFfVv8sqzLZ48tJ3eiwqsqdyBBc87KkWJLaymFSzJASoq",
  "key24": "2bZc5FwTTJLQpMHvXEct2KdCt6fW1chqZHaRz61MZ4zhgMKxyDeXrndxPop4NmrhWpfRnbSwY8abPkmr9Bc5PDBk",
  "key25": "3Bsmjm8hN1G4KtTB4miBCCuwmtCGbvtv6DKonPUNGiz7SrTg4n6jFYjHcU3kc1aJttkUXwHPHEPKNuFSCBX3KvuG",
  "key26": "5KhHmMpcS9avdhjMF1cpgdSTPZJzqwPpPRmvfe1iibL1aDVhfUQdcksiPXKr54Ki7RXrBqRfKYW99dawGRD3jnTK",
  "key27": "5ykAodMMx31zUu2yGtEuWeFxg11H53Nj1dU437Q6GD3bkSc5mBgHkHs8SEJDXaJ3XuwJ6aWxJjMPCGzZAhwGf1V6",
  "key28": "3F53CuQfrYoe7mYkcBDivUfQRjQUbTVT9ypUVfEw7eoCkvFnpiHA7bfhDCgLGor9nWp9auBisHouX4yCutpcuBAU",
  "key29": "27XQdUtTvws1UN7aPjujLdbyZ5hmpdW4wU6L4UtsKSgwdJXKKBzqXmr1Q8GZuixAnHSw7wVvbMtWYBjDnTMGRX24",
  "key30": "4rsgRo5hoEMyWn3sYAHDKWhyzBSRq45v3Qd56SFjD9LYxFpYXLnMNtA18K5BYxvQw3MyDzNhAW5P4aSqey45dvqK",
  "key31": "5T3ZfjeKFXujh3DKrXhyYsfao379Jguyq2qXahDYbhqsAuXDVSCxRFLo7tWuSJDpBJq7PGSSy9vN8WcnC7ZsjZ2n",
  "key32": "RdqVqc1CxLtq91uqGUDfp2a2fCmbrJBzVW42y9hQxuwwMD8vs1MGqMkeGQufkDicMRXBZ5TuYfYodro1kKFUG99",
  "key33": "22NX4gVbdrsLG28Sm4BiBnzCTFfjmBMdF1tiQUEwcRbU1g5WaAhyx9doLgmh2XHD28mAywyEddhVr7CjEp5L3Vwf",
  "key34": "5iyDHQRWUjneGHSscwe2wT7WEAfM32HiWcu8rtu68MUvEsEZykt7hvKMjr3DCLRvHtq4zY68LZ2vCR1SEktoSdND"
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
