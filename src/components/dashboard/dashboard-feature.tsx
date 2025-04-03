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
    "4jWmonGrqxaqY4wWTkz2oMTb4U1YQEM6SpJVLdJZRZvdGEvjdFkkMhVW2uU1puKYi8EqB7DQJuRwT6DdmLxcyfV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DLt1Sr1TNjvoBGaMAYcCZeHoSZ2ThcBWswFiwDyH7dGAJa3eV7P8MjCGeidDKZFoaWvpS2wtXNaNSYvqKyv67NM",
  "key1": "269qYkUvUQzQr1bgriJFohcG9cbt3rfrvptENTsKHZi3U9T4mx1uYn7StBHSjgdxYR3CarUwbM3haagknpv9tUVA",
  "key2": "5EBzYwuCTGsHf286utUvfz1EmfFfxvTvmvRksL1RjUKPhy2PkskvWv7ctqLAzpSkGdn5UNXycMYSntFX9PKP5GR5",
  "key3": "23JXDPxAX8xhEuvKJe88Fo2K6PE9qmKEPXFxzoL5VZdnkabp4uJLkTM8oJBfX2UGMNtxXh4ykATbRnZQdm8gBbz1",
  "key4": "4vihqGWwkJ4xkgWaSG4DhHfnP7XMnStPoEsboJe9Ew73tCh4WYkouKQVstkNUoWMp9M4k7nKp7JhDXetkfduSf6B",
  "key5": "5boxUiQufgfkA97FzEQZrhTcLuyryiVWDEhUegwDLpmNYqwgGve5GA3MgZKdf1F4mB8wLQs2tWwrx6Pc1egLJcbh",
  "key6": "LWeRTL1AGnHTaqZEwxB4Ha9B2jNeeEkbUskNu6j8saXpiF1uCTmRAqWBn4go185xaNUYdvREWR1RePKywxDy2aE",
  "key7": "4xPAP3NLKc1vUmSciYFQaCmibKkKQyRDQwtToSGai8N1dofKVjnpB7TQtsQ6xV8Pt7V8oh2KeRLbMSTPeXCpJqqe",
  "key8": "25s1BHBfagEdm9d6xZJSc7AQ43cA7wpfQkosSyXj5EhTvK2wiBxyKKA2bKvoJwaUUjvwDZe469AfCgYmaRQKXqeq",
  "key9": "wtouB7xQ2b6SLZaPLQVzfKzbiFF7zBSNLxHP23Xe4TADNkyYkxdELttSDm5pWcSqpRrd29JbyXdizRj4CxymQmC",
  "key10": "j8RyK6PczoFZF6XWZgJZPksBQ7XNxZA2m5bkrNrcA64ybetsniQgT1sRFjurjAfRQkuwiFfhtmRr3r3j2K4Pbq6",
  "key11": "4p3HL3GnEi5VeD3fVpbtijKu1PekywHAHFwbUBxBHNyvvMcBwWt4R2q8TLjhpHrHyymdjsGT1MABUELxkFKTzJb5",
  "key12": "QmPg6QyxJKMg9uNegv7ztCFP2MuLwfNbYT3wcoBZEqVQX4DDsHY4nv7jtWXoPU6JMPnGFMWrDZmb7e2DKVe2CtH",
  "key13": "4njVXxFX5j6CJ6rdTq4h6Yp6ytNVHhdJp91KEXG8ck7AqhSoYDfBiB1Hcw6e2sJDkQ7L4DjTJa8dcyQEKfTzpgRr",
  "key14": "3icmrjz47bh982hr7Qrajph9fZJ2D9QYhLEBvfEq4SkuRJzBZdVLgXCxbYuMxkHzeKPg2T1bU6KD52KL7Aw1JsSR",
  "key15": "4GJyPe8LHWnHG1Uok1R8Aucy9pZ6uSVrmBT7MSXiXtEJNnigoApoNEcQURnBCYYkGFeFSEb1xoby2UokZYXUxpzQ",
  "key16": "4c5Vkit7W1DQS15qiNmhqsq648S44R1jn81xhAv3Y7vE3Ur5KUTudG6GF4NyZHHrCHyio12pEfDm9es6a9JP8j73",
  "key17": "51o34cbUDXd6PAMpx4LmR7qNY6nGPRXbTrWvw28yyRzFJygvCLPNBe6N6tRgPFZY4xp1cbXtJN6stvQLSXNuZapB",
  "key18": "3kJqMBmwKFbkd5Lp4Y5dtAFcZm7YyjmDACpfh6pzvC7rEW7D5iBxjRd3CyRPjbbCjzK2nTnwX3unKaZHMDcgfo1C",
  "key19": "31VLvsNxoAk9AGdVhbV3FhDnw8d6QFvr7kv3LC4Pm9DrjHV73yskfusLBxVYabZp7RtBehmpLh2FiyR59KLdY8Un",
  "key20": "Mj6Pg6vi2YbquVAvx46N6mTUF1vefAz4PnyLTPWFN2uzDUZgbePHghHcGoBd9trFQw3L3oMzqm7CKB2uQCeetYf",
  "key21": "55TRmCBsLhfmk9A9uorKMqZ2TMcB4nxjERZLR3LrQvJLwG7eyxwbkaKX7davBfVW4ZaE9E76x2fnc8A3FicTe6vy",
  "key22": "3dtyf8qv5m1ibFxtNh9sC1QBhSX7S5kawncGJfRvGT2zeeyB9hG2QUYWn9JmvTeWv1E1y2ZCVEmXsXMhG2bgrhSM",
  "key23": "2VEbK9fvK5SwYejg4XJoCiwiUzDkMd9dmRWTcuDCk5R5Kkfsofo9B7YZhKzJ2zPd8zdY67jb3YdqXdRFDzJNRkVT",
  "key24": "3jYFEbkim7QmSJq1KbnYxqadqybYVwAztVz2YW1zbXrTbdJJAjYrZ664QrNuk2yUYpBE9GxHj1LVjRQWgsqbxac",
  "key25": "6QFGNKZ96fAYc1WckpDhnUWn8aV5C9FwDzCUSFfRSNeAnqyeyuxfubiamFDjVWuGu8BnpLDARbH7Md7veEihZkT",
  "key26": "4meY2HQmYjruWQ6k9kixcGoVFBdz4ZRCwUTuEaSCBd7AbYFdHhKHEr2GHUfA4xxuDf2kAFddVM2khktPgXWd8Es2",
  "key27": "5Phpgj6uYdn4Q5fMSvgP9iGM2KhoU1BPKqqVK7btXUhaf9zF48N8zJ5sabWqgkwy6ihWZWbdUbfh7s5QMCwNtLLg",
  "key28": "2WxRzo64tyL6AwWbpfsLaj2ubZBn4Ga4SsxUFE6tEBJimVBuN1D9bmp1jkQBiFfP9rLnZ6b9uVS3tQ9dWpAaejH9",
  "key29": "62aXKGWyRgKDyJE55xZdDF7PNp33zeezFQPvS8XUjES3S8HHWmRKBWyEUnauncJUGoUboAgm59yXZTbbnToNUta1",
  "key30": "coXjhqSZicWdjrNBLgUSVZL2XduBbB1RTq9Kc5keKqr1B3DGR8sASVT34uzhLYic3D6ynMyn9gc9Xrt1RoZLkYi",
  "key31": "3cLLwcHCCgj1s5vJVFTkrCfFubdmoD6BmBE9HsNsEJCKPh9DQ6ViYE2BaKFB7xnDtaW433AaqnmXhuVEy29EuN9Q",
  "key32": "NYo3cBixo57Z8LGiBy7J6dvMNBPb3Fs9qvus1aiczT3JzFQ5CG63VBLfJRzJAM8hYr3GSP6q3DRzYGBGhvfZBW3",
  "key33": "239cpRXjC5ipWw8S85dk3bkmrukGtmMUrmGTFuf5A6TN8wFhQCm4RedDD8rn8Cc5po14j7AE1nUh8ihzVhwsvji3"
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
