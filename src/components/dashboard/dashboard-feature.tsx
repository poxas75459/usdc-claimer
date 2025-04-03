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
    "4D9ebxEu2V7KYfgaRudw7Uod9X9HCh2PZA2n3eg868ZNJ9Xyvor4Dib8gw4CwfPqkSRdCbSef1wUc4u4iyGZ4aZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WmphTo5ZRUegk3Go6X24idFp3gWaaqnLVmtJFRBohjoY4EKnpJWdkHN6BZbU9xvX3TNMjVkoJUHgjEMnGtRnLQ7",
  "key1": "4enoVwpKk9rKDnhDrtfmXZHVMB2FVwzC63mDr6LbmxkYekMTgKkaaSe8QCbube5fyiobW1djz7gdTkJS9Qix1nqk",
  "key2": "4tPYKzgqUWDqBQrkRs2JYCXbAmCU4w8sCnRXefvtHhJrqwo6Fzf7AJz5mofvFddvdELf9yShMKxdEPF1TSPJCXHN",
  "key3": "4rCWYR3Yo1W5gfrJLAzfR974xKVi83rP32gWZVwgjHjvRru4Sv4knUx2adeVAGyBVucehjWJmKVcTeGqfsHMmWXY",
  "key4": "464ikESuYDLfXjfg5zhQb58WQanTYonZFvuiGTCXyPZa1L1D53EXbabQftx4yiq4DyzXXvr8eFkX48cT8sqEqaqC",
  "key5": "YmHjRGZEwmDznEeAqmQdzUmXmQx7hf7WwgpqkrZUYansfeDcn6MjujLKbyiyndyJHqaKusFe2ewGwEyB9so5P7D",
  "key6": "AELudbPzeeMEyKpxqqxLNjxWuGwGuNDBSSxW5FEmq8NSc6NQvKcEk7kpFAsYrefxvbzLXu5xRPhZnDgbSx9B94Y",
  "key7": "m4ESCAwU46VkSbN3MwZS7NjB7vTThvbsAVWA6o1VDQ843JDZH6HUHVXtvkodix5vZ3utmsQiP45VDfF5g8fs7oH",
  "key8": "5xVNdNBdR5xFcafdepxY2zssukV6ypfpyJkNCZdzuruJPH779T1FM24mhVANdCs3iEccGG8YtbvHxkBLoKvLafi",
  "key9": "3YnxQxYmBagne4SxMBUpLSQEdaSnL7mMkpvXz5aNjDkE4Xchs5RKkzjLmoV3SYfcmsezfizispYMHitb9FUR5wLR",
  "key10": "m9agfunmJsepJAT7VZkPMLmLzGH1h9yvWJoX7iAg13vtwmque9rcCZQMyKUG5zgr8CuJQFx7vb35ow1XsJ3zz54",
  "key11": "4Bw8YbpFnPaKxNUJ3jhXwL3MhZtgztapMb45Rf3cpvHnLQkiKW6kPP1bC3MAsbFvMuwJYUB4AMFd1hNEAD926QSh",
  "key12": "A8CKwnQTXkwMve6QQCQyhjj6dw2hfk8srUby9MrkNcxrEV7kKjqe8sgX7gukuWCyycGH2JR2QFYe8UbqQEaN2Ue",
  "key13": "uRrLvTcV2bMgakhaYeJcoxRz76utp3xpEeYx5s4cfUPp2bABgpVf7YV9bBBJqUXTS8UhBHRB3gEVfvqpWJpSsVw",
  "key14": "3Yc3mtQYJvTvUCPXiNq6esajSr6YTfCLwRXM1dB48Y7QKX75griH93h7YqZu3ojwmiEqd4GoCXVVMBgoSXhbQA8N",
  "key15": "46FNB5F8xJK5Q4Jw4kcczEeudeikA91wJ2bSzJKh8Y2hapsPxoj7aK1c7P7bW2sTuGA34SPoosPLv72aNMMbiPTY",
  "key16": "GhZFYVULvcKFSHKBKsm5VXK8oudd8FEYPiED8AgnrG2DXezzRRzTdevYTL9ieH1gwKYDcDLGG3B6xcgPq6j5Nuc",
  "key17": "2No8HQNVKaj1f7L75zJdfBxwG2jVrmUkMLZZ2eSHLjXrejNcbGYLsgu1jV7onKTQ3dwWMd3MzC5sJZTviHfXPHgd",
  "key18": "5DqLq3AAWeaXY4YoJnriwGAYRAqsmKj8uD56m6TDJcGv3ntacRAFfheydgtai18EzHqB5AZN9p1sKdiTMrSfb58n",
  "key19": "2a8bm69oAqhvaTB5LNhPmT97W6CEiysZpdB7MMDdaDddo2tWSWWmG1oNoWXbLJtGVcbkEdfCnGpHsvcdBKjBvbU8",
  "key20": "5dyzeAmXkuzvAd4vxagQoUaHwsb5KJicBsN8QbmkBxH4QSHCfzrs7vY8rucFKe59cxQCVW9PQZnjANiC9MayfHjk",
  "key21": "wBPuTzLvuoAiMDH4DtWKVPBLtcn7Cr1rBy28V2Xn6JLgpsaCWfi66ZGmgKN4f7byTthiMjHGBRYqDoxsuZBFf2Q",
  "key22": "49yGuKVjAX44CFaStdVsjvpf5gzETtMGJVt3VRcaTWzTssFzcZXV9Q8cg9YjAYxYuWegkxeUx3Ws9PPYojXbx85e",
  "key23": "4bo2LcoquT9Ph6a12AskijNaStjK5GRfLg6g6LFUwRJkH64Bd7Jcf6JnEbeUFLFt3is2Jy7wBxaaCGKc6ZhNrhMQ",
  "key24": "2Q4ehVAos9mDntbsdXDred15ijEb8Zhd2SvDzhvqyuhGfhCBaK7XxTHQpVtJBoZi44MjGBMT1ReWm2u192sJestP",
  "key25": "4hFaUoRpWH4Zv3peC2unPcEarL2n1ct3cxjsfwVhNeXToFY6bAVm3x57zGq88UHr8T23g2a3G1Gv7RxtCfQHUEQg",
  "key26": "34HAAZoKRUWuLJiDMp7T6SxvuyGqUP4PUVtZnKMZ6W1AoWbBTKougZfjN45A1GZxfvWvai9yyndmhVa5ij3rw1YV",
  "key27": "4X2jCPqfGb7Q3qtGVPC2mkBEQPMJmPy2NhUrCorNqx378ZH38rrQWJCz4Cj9ib9GMa96w6xA4tL6W7iPLLBUeqae",
  "key28": "YS1cFMZXArmpSjqF6CxR8TmBJiFTfUKgTPVu6ZXSwfq7UaNM9S4cySPymerrUnozuttbrUbZa8sDmLKhTayumUn",
  "key29": "4kTo4CiSLsP9LBsTAyDftgywX5et1U96PmQxp2JoDwQHUXcymZbTnK4zLFJTFvLcsKiiZby1gZegxbUwNg16k24P",
  "key30": "52oohkLqCXzG2TC1DR79kJ8HJw2ymj8BPMyypZHpvHMJJjBpfQpCcmzSJmrUUzyQKezhC1JtC7TqzDuBiGSEkMW5",
  "key31": "3cyai4wcTkLozWyEtg8jgc7X4Qx5veYxUffK1MZUiUL7K8ZAYTkqJT9KyUop6PFtJcfePa6EHXZF8bBaa7DnJidK",
  "key32": "5d3nwRiBRBtrQ4vRgCvqM6fHz7LrtBEjEmRZHrQv6sDrW3ASpLRrQVqEKXMzuYQYQsdKTyd7Xt9KEs51uK9SPL99",
  "key33": "FMQeuN8tg8BzchuyH4DwbuBhHp2R9bZxhLhKLvwSQtShJaQjUF4vmqM7AUyfcamWQCNdk6vMAN7zkcDWNKpXCjL",
  "key34": "2e5f5itNzis3TQuigc46D7gw9uMhQfJXeb5jyXfTWcpTZ5UXn4Z6eh76cAisbsYEDQARMgvkN9SoynK2rye5iY8i",
  "key35": "65uNLWrJ1un5GKQdv6w2AZrB6nrjEmnuD2dMCTpDSq615TZQUQWftFDk76GGC5vhBWTPZhBG1SKRswyjDVrtGs3m",
  "key36": "21eWhg6UhNbFYfMjDoCKEj6uqcxdPx5UUauCGvF24wbQt2bbr3wBif7aQuHeTUDF9BGyMGC3T9EMvQJtBm2yMfMd",
  "key37": "R6BkW9j63MVeF3E7FPoUFFKVVHRWHL7Qvru2rFEJm9axuy1gmZnav7j3CXUdtE1Cj7toHanKDsgeB6M5puUipzX",
  "key38": "387nfBdYsNoTVEJ1rt7AHPdQqNQdYABAA1YK33TD2CRJTU6rPPWzjfCXSEQjkf6Cyf64zTRqfU83PWZkA7ziMyq1",
  "key39": "3i1SVsuufu6MmMHBuEDY7dbKyTX8xaorcY8TRbnQCYU2F2Pt4GxYVG6EseuZiMUcFooiQuWP44KUPVKNFYaH648B",
  "key40": "ZBfKWgWesru2CFrHVCiXcdBZQssHn6ZXsY9RKA9nwDPqCon8MfmBswkJBV6Bwtj2JrszcRcVLh3wto2Dfscfp2U",
  "key41": "2942pGvTSnJ3mQwS6HZZx8qcURLcAajBob48RiLmNDeLvtaFEKjGJfDcJ5EU7CcY8n8QfecurNu6tbuBQdaTdhSF",
  "key42": "26qA6WsgLtEGaEcycdMSujBi6scGt78gdPAt97WRLPp2Eu51fwvspELsrZZWxDnnDNiwShjB1r6MuXECsLscbb97",
  "key43": "5Ybp1CAu2uSBKSUpVf2MYMwGBdpBogMqSvPgUHo9fduhUh5gsCd9eVruMLHLQLFbA6CU9rgqos2CXFnASDDK2jde",
  "key44": "2FeaGuaWazGWJEWNRY9q6B4X6xpJas8NNekURrjkS2Y5Deb7SmiwRSGQ5Uo7ru2KPV2MYESmrARS9VqHkazzbNKj",
  "key45": "33J8uRHRCSefvqGykSHoejWEpH6LAU8nSz9834gwrddiCQb5VjdpC7gRMgRbv9wVBhKwWiaogExYVHXxWRXE3FYf"
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
