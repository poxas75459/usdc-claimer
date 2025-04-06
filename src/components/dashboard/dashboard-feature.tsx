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
    "5kuAxoSaWGK6a5MvDPrWmQmBcMR9aozaGZgtWCvdskAPkpZmvL3UT9CWpmTqUQ8qYjPK1fiE8EwfSzWEdnFTVucF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1fWShX1SGud43P9fXAgZoCmGdeRpYSPAnikEkQJxEPpnnvKB4ADLj9HPrQ5HKF9zfweYSGZzEqUmqGGTaG2p6Uk",
  "key1": "5kgfLrANKoshrYvijPSbEFGXv9XY8qDQEMe4bPQVvBohvfzRvzTbhaH6CEabbEsBU5oDsfRXXMjpM72vsaUpcWUp",
  "key2": "36ir316JzbEtmnMHXK6xRGJ3tbbZd5jCNSeDYgmanikAaZSDBtCM4JmzCThLSaTuzpgW3UMow9ACaqp8ESEYNNLX",
  "key3": "3DuAbe9ifhvW2gsQt37k56NpdasJRmYuvxasv2mzvg1Mr3SdfUM3SgevpMSa4C7Ak57XzjmwCNqjJGZ7woKdyMfK",
  "key4": "3EY7JCwA4w1BkeiWEciVkENVPxjpKrsXJrW8cpU9QZh7kmrV6y38Szsoqgv8bNsnTqmq5aUGwo4k5driNDD9tiLq",
  "key5": "4chvKHQPcxzM2Ugo5NbA77pbJiH8QRygetntkguYpHZuPwYE5A45CXQyUT3azkNYeNRpb4BV782eji4ADauEJEwr",
  "key6": "4eNJEubLHbk59ExanN7otJisL53WwDQhXvjJ9rBJdWUgNj2zSeXjcxdgM7ZephFPRGkCn2k7j8EMY5aNPYLf9CdL",
  "key7": "6wLgsbamyZSbLnjmNZWoT28QfqYr5fTWJnbJeYvjX55arubeGwgvLz7EfQu7mVmMpL1X8ZDBX4ANbvRdNmrbXXa",
  "key8": "4eNrfMGBmpNzwGeJZA4jmR2RQS3Z8Au2p4ohzGHE6Wcyqi1zgWYvB7AKFG7CaXag11ZJTygFaADEcNyNpNduRGzV",
  "key9": "3KbbtWjg8YwWSe89rGEkga1J1xrcYjyYhyyQV9vE21GNzSsTfbQpAshgPZ1bPQqYbDJEUGcHkmNmcYbjDXiBPVWU",
  "key10": "2fuKbi7emMK7ZygMRnJL2V5TajbSQDcsobQNP6VWNn3c5VpeTsTS3wGWN6JxTTnQnBbnE9jJSjvsD7UQoeQPq72X",
  "key11": "5c4Ki33GsZeU11gFYRakUTQzc2S5kHwBo5nsdvpgzNyMx9v6chH91gHhvAtuDUewqkvVEFMXUTSPERPJuNtTmTR8",
  "key12": "4XiqmDKbped2NJJBEz3DiYbUxgcPTRau7egY29FKqb3tvesvkdrEaARLcLFPAGP8HYsfxtgwQW2wquELeWPv59F",
  "key13": "2FhrQyRX6REh2jj8yh5dmGLtADp184oYon8uFiCJ6xem3STCSrewbFDNAXGu3udZhE9PouRgY2ZrNLDtydgV2san",
  "key14": "5AvERkXJJ11MZtkkNArGSNREqFWxWcMKPrs3JxPNojvUWNQTg2J29hniL87LKb2RSbH1jzcAaG5CYd7vb3s1TEPD",
  "key15": "DCyaDu7HEQH2tNfVYhf2mfoMdeEwsHbg3HjaD1D89UHdmM9QyPA7VHsurJGvbt636SffwrLz5VjiCzzGsvQYQpA",
  "key16": "2fZS33jvF5VrfKzVtqpeUvm6pUSZhk1GFiPHL4pKvhZNhDbibfr56cpCXPp9XSPg1g6SUwJvffQGq6hTfp9SdcCk",
  "key17": "5ATRhPkexNWwFhmANouEbt64e4ZhpD11CJASbbAXojtdq2W8eYr4qMExVDDzVLGjVV3gYDpokfxF8PVQHP33J8Ck",
  "key18": "5XezpACaL68xdhB2BpYtDbZVa6TzXyKtfeU88iGMWcAGeP4KHy52GLCZ42LN1p2yt4TtVVdukH1jUazhGMGdNhij",
  "key19": "3eJbQyi4EQ77PL4AeKcR1NHtmG9j9nnvVMLVHFT7yaG1tmP26MF3zg62XjvH2uKBF2ds9yMA6fynC2QCif5EnyTg",
  "key20": "5nogRbN4VDYNocnxZUWKXQUh3okrfFHjLwsqMvh8XxttF4v3frzUh2gAyrrhdKUGZqEHtr9fcGxtQ7fY7SK8PH67",
  "key21": "2ZibPstNe8bfz6THvNyQDEoey2EczcKdu2MPHgaei9nTLjUMhttpQ6WYX1PLCyzitGvRKRubAFB8NdngNcJF3Qys",
  "key22": "3ECo79Y8v4byP6zSdwrqRXDZiS3BqmN4qQ3MnJBv6sYC4ksWnkeBW5mvTqQSQC7X4uKHJGQoWq96nrFU1Ry2fB94",
  "key23": "3KxLEq5dGn79AhyhseRVnEFhrFqWmgBb7CgquiUiesT8Uk8mQsNjVkED5Hhf7c71ZhscNvvQwCoxczwQTZWYXULU",
  "key24": "3UsCywdiDan7K8ea7nx1vHKGeYi8itnW9UgqRyyJfMA55RyYiTCXAN7j77PsvB7ikc2VVDER9xSMk9dhLq1LU6hb",
  "key25": "59gdMMddovHPf6vC1yneUqdPuFLUSWHcWDw7FB6Q8xg4KTNf2GsBe9N1sBKAqhK57eGru963jLMorEPiHRYVMdCC",
  "key26": "3mATbDJrmLYwGKkX7YcdAHdV5A7GHB8VQLFLY98RR333Xf98Zke4x1dySsmHAQKwNMYpKmZM3b14DsvorfXocyej",
  "key27": "4yGGYUjunh9X9VonfHY7cSNyGRsr858f7VfYKzb7RaiMoZqHXTikjmw9F7mL42pjtQLRdSfAboVRFnjj1GBDVt6g",
  "key28": "4AqMaza3B59kz8wqJsWnXC6tA1XZEYHHvKjoCQ5GHJE85QasxywgeGgmJS9s1iJLvsmq1spkL3TBhsMZEToEP5Nx",
  "key29": "5RQf6TsbM1JYhEsDm5WgrwH3BJdU8A7oNgBw6J1Dd1NYuLRRFme1B76RwCtmmnuKH67qvhqbktiF4CaVpyQE3Dkf",
  "key30": "3qy8gUT5CiGJqs51nd53pmqoAXFnVQihmCrasWQ8L2ZSycFmY6Xx5Rxtag9tarTWJ9GaCx983r4xwHPp9Hp3oKQb",
  "key31": "65jfum7K7Wzic5WfqRZfEMHJ4Gz6PHNUMspmjjP4zo9eDGDtY18aJDJ7gefw8SL8h2owmWYwduFCvsuexUYd7akc",
  "key32": "8oydjUFB1p9G7iA21L5aKnuVgQ16qXZsrCcAncy95U4Y7DMt6CV7CF8wmYU2WHQUyQsNsiAPEwbkQYdfFpwN8q1",
  "key33": "436RxikyuHhAG3sVNq8XBx1BJKxZBQMx2Apo9ZHYxPEGv7XbVjh9k2huA2ybGjg5wUJtikwUVnxUD2HeWgqMFmu5",
  "key34": "3t9gXeztdKk1EzmTA1bCmHsH77GBmmJUWed5DmKFPo98g954qhqaFpov83s2xEYPTC4sQwhnxQ7ABuBzZQ39B6tk",
  "key35": "58KaTzo1VMa58VbWd3SSRBsjcVwgpCdkLojgctCXxW8HBoL4TJsQZQyoMLxDQpfFBwRVYppAgrgzx3jon3zFXSLz",
  "key36": "4gz9bmWdNs1sNi3YQEfgSSUQjANYoj4ca5FkkAA3iVUPKa2gxUsW28YPPmRP9i9HmTZ2U1bEWDZ1oYBAsqJkXo2P",
  "key37": "3xSK4foKby1unwyCrZSMLJiQ2EZvNg18wnVA9b22U1JFNusiSR95mv6eVeQv8uwh3hEqG3CFKbN49RvmkogkS7Uw",
  "key38": "442c9e7mqhno9ZDZbNhuHaJMGnEmxpTYVqfT7FtipPupYvgcpCe6BEzKR69J6tFDrUzKzP94jxHdM221Qc8WAaK4",
  "key39": "ue4ei5giz5vyGSv5Z9npuCtquNc4wm6sh5nw91Ykg6tjfvqUfnF2VTywo19Nx4bVh1uBTiXMkwhXeNJ7sJMRJFJ",
  "key40": "2hSmZtBpapHGYkNPqaNE2GndvBH1xbqgVJamY3CDJnr7A4eDm28EWvaFWWkA6FutH1XsPTVih2VqNrdQ5BwKCydb",
  "key41": "2eRKDyPWFnMYbuuxhD9VWU7WvxbvSi8Cj3WeMagDzmEsGJoqzz4Tcn1BUXm9zMo7y8W5xRuo81LBYcLoS8eXtvCq",
  "key42": "3jQfv2D9aykwxTZ9WcQWepvR7nMBUQZuFHotHeCjgcQyXpTZJFUfE9d45BuCm1ML3WKNvohARG2afa2Xy58qQ6Ti",
  "key43": "4N6z2YR84xgBiJMnaDeozFAgfiorcW7WvK53A5wkV7b2hrFdvH5tUhZZhQWKCsUwuzz2nA3o5LFS5FtAguwXGYvx",
  "key44": "4fcNiDQ9GWgwhqXZYHZrDq3xMX2sjqeLZgKYoMNA9ZKevnAQqVfh1b4pWkp5YyTQs8HkyopgSjQdf7PJeni3Enqa",
  "key45": "DYSCJVVBmDhXYDNaafBKHFvTCDVjYiGqhhnYztQp9YdomtFrXicK6M564rJzw3cdbsRwrqF8i1UirhXg4NeQpy1",
  "key46": "5TF6aUZqCnmroGwvYLZZwibXAbxjUYrsoTJs9ZTnuPzGtS9L8aH1XpGGDGEgqDApRFWnbJjSo7dTYyk3dXv1LwRx",
  "key47": "1JcL79RVQJ3Tfknc3frQoM7np5BYE7ZuShj2xgoVEzB5mamZ8L79XQPpG8YehXJGYhthBhyYp8Qg4QQBAhPornL",
  "key48": "5K5HqAz7mp9azZwVzfduabeinKyzysbSmjDY8C8X5x9i3z9NMHPr2wGagDXpE6fK5F9okEvZBBNS56jLn6V6jqgw"
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
