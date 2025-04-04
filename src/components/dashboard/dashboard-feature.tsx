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
    "586BFcaNbPYed8pUj41fqSc71wcGu6gpq1aCLsL1AY4Q4J8Bj5z8hP2cxCqFwY5DNCmKLiwuPeRHnrXAGZQ14dEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nQCyKsmDmFYyTEhJMbRkTchETuatKm8EfPppWXZBZJRbdAYcCrv2Fg4oMEJypyFsBZgqHHGpbm5Jm8ovWWwUxG1",
  "key1": "42HrXaTz6fgVDYfeiTuoTEQeaJWhHbEmXJbmyNAahR2qTxHXFcREYjhfXtXLzdLg4N7DsC9fkbieqjcYtRwVgHPF",
  "key2": "3mYmahPct1zigcbQot735cfh5t5oHqKZ4kMBgHxWtg7HF6UY6ptvg4kygimuMvYHTjMZ6hdjDToCvQTdsE1DHLDn",
  "key3": "3xmcFZQZcEh3V2S3fgmpce9tbfpppLqxj7qHi47ibWnsCj6pk66dFrt8o8P8ws7YBLW69wbZuH9kch1156Xmi9h7",
  "key4": "3k4QhPtxkQz5pec3MEAQdM8xnRzmahTY9kQxLt72KpXsyuUQjKKmdh9HpEByu9LhSrR23GvwcaQkYoHGz5smZJig",
  "key5": "5ip5MfhpxaMA8BnNziMS4RtUWFmgkZCyAj43UWzGHQn7gns6ND7Eh5pgKJ2PmQ3EvJM97mYkmr8uxGP6hCBKkevu",
  "key6": "2JKKAZfENNPJZFVT5pug9ba7RWnKSKwpTf4BS9nvXGxRMN25qBML6sBU8za9pBNy54rvNxyWtkCjVzKFjzvRTdMs",
  "key7": "oPs6cE2HMNr6o9qTFH8rkXxBbm2fZoeVfnzag8AEzv4wWuBmWqersdf37xf7beSnKdTQtL5abxmcA6WDp9xjBT1",
  "key8": "5QagBZQ65SX4GHi83JD9Ud1TPVthjNFmqKfcCrKnH18g1YuirkbJGFwoXcsJokHyio8Xb2Pz26ueA894ji2XkJ36",
  "key9": "2JD8fyPrVexqeMXBiv46jsqqRZ5MjkgzhBbfL9cdkkZ1n84RCVBGNTb4xSr1s2VWR78aRZAGbPVv4K7bqejEtkRr",
  "key10": "23ypGqr37WQx7QYsKqdd299RfmesBqxjRDdCEEz3PmNztZpjb2EVNwcasQv53rM319YkdtqNXxSCrn6a98zS1q4C",
  "key11": "238DNsdos3cU2tKBYTDJ3Hf5CU7FVpHqDYrKMCSwDss3WaTcmDQVAHBT9DYadtSjSWgW9HumSzHBayUPZnBWTCYE",
  "key12": "fZMcJK6nix3VWkoug2hKY4rkzoccGkxP3LPSPPu55qgcFcuLq4MxQZyQAovnenFpRjyjCbEPjmG4SHdc4e2SgT6",
  "key13": "36vTEcwpJJxVVa9rfdfDbKwK6m5AaDWTJYHyXZVmfqpqupJDgNZEShop5qbDFgYsfYFcHDZnXNG3zHmPEz5oeuFq",
  "key14": "3wTJwj9hRogyEBRp382QpVbvtJwSh3FK96L7316gGn8PiQY8bwA4NVBKARMJd6fWCp1fg9YRd26ZzRnbTVJmbXiQ",
  "key15": "25dfJkDsqVQ3U54f8Dz9TZh34f3pLjAnSaJDHEBPcsXbF7tdLfjmdAB5AhyH8AVDzyMNN4Hne4Bd5hSGkAskKohi",
  "key16": "3hoDFSpCn9Ymdh2fYrQPgSKLC3B48FcPLUtVU8j1ZZrBSEzfZcRW2dLYrxSzaHHVDpZZcTgrKpNBkK7WvThwfjzG",
  "key17": "29VYmzr5MnfGD3GN1kims5gL7NQyyPHKUDfLdhw5w4WPJGW2uY4sR3aQxYrqZkScCiKdY4dXcFSKKK42Aj3yz8Zg",
  "key18": "5rEN4Cb9m4GK3keAaQg9PkEo2hbAMBBuLHVjyqt3VEniEN7aKSnptdCFeYvoEgYQMckmtQDZhymEPKskTQSKoVKT",
  "key19": "2rbVZp6JAxf3A1ANT1mwUGfKvN33gr2R4CerQQVs4ef3vjUwz9EC65L5AomW87bLT2bQdym4aS5TArDrD5VAzEFH",
  "key20": "2vJjXEjko8rMds6rqMeutKwdLzHtZ75gk39GgQEU1HC6u96Fu9xFAxUWrffBL6KC2JzyhofzgNnXa2YGH6bM7miH",
  "key21": "5YQvY3BWWUWdgz8KoDo7Ldz7TDCzjxo4LW7mFL3shEGGfaHa1VgGpDMfioTJTmmMcoHXcHYwBP73XEvmYQUEJEH5",
  "key22": "5P9W3Z4HBrEY57DuVb48bCRtFvdaeJhW6D3tMvkSPX8pwQhTXvykPHEYff5Tz8uh4SrZfpYQYYCjgWpckYCRc44F",
  "key23": "4RJNs8kyYoiDbfrXNaU6V2Gj3WcE9mUTatB1fekxFBDFhchM9hdB13hKr8cKQhDPrE7f2TiTJrmG8xyy8qR7WMLs",
  "key24": "kSv5H9u4UhmeH6U6JdPbECd2NxRvJr1yP79bQH5a9W94Tp2bW2NskPxpN4zXCfS8gLMBq4ZTN4Xqg3eHDHwtjoF",
  "key25": "5ykgTqFYVeSPBj2Dq742Hir2RekfmyQP49twku8az85cHfZgos9riiaGwFZRGd5UK3JPEjsMMqSUwqooPRqXyQuk",
  "key26": "32wPknJkVoaJt4xMQk2gKN2wRJ6Lyfn23ZNq1g45WQShij499BdEroxrrcqK6ZTZGyscEFaYsAYaqrBmXfEDRxie",
  "key27": "Tddp9QsiW6PhisFkfr9n3oWueMZgpT7am7tgmzWbGbznhqfMT4d31DaijCWXFyaRvoseMGppf6J3WHyyShRV5pw",
  "key28": "5BA5arLnX5GjzE1TgFGJAvFs1zBeRazzNC9VmrWv4uozcqCcqPBU6byvDZYAFA6Csi1rQj24BurDK8mPj951C2GG",
  "key29": "2yKPseUBM7RvMvbDosug1HDhDepc1Kd63B7EghwGSc9wcEXGNKB6WThY5B2LjY5g5bCVbWju9D9bihvuvCe7skhY",
  "key30": "BmXi4n3qCaLasu7rETGsZq9ckk8EhRvmpq3Xb88SwPi7vzvCtzqJVzp5xwV1nRZjD8b9Ln5Uzd6N6zrGopMUSop",
  "key31": "4yKqMtUrbznNef9qtBFayMt37f4uqCQWZCZXikJAqrNTQqdVQpAYfKNkzWXmJCCSgtnK2vEFznRGt56kknXXcyBj",
  "key32": "5CwDdWhd18DCGP4PPnhb85rzwUKC9wnMW9cjxtWU6dDANuEnTCu3CmvQ8CU2NxXp9u2Ra6iXfZjKr7fYnbxox38h",
  "key33": "49m2bm1RfCSgDWY2sfWEHnrkUxFMdUtkVNi5akpPk9HMRLprZ1SGUsNxnQw8nVK1neAoqu3XpbCYzFiQAXTuxNNa",
  "key34": "4nRoUCngQM4pg35RBEgCzct4vptjyzcHxFrEw5Wgjg5gRKeN5WGKXSBUundyzS4dQwFj9ya89ZjLEsT3YsDY6PN3",
  "key35": "WN6gkMYqrHrSQLnr88LawKAdj2hXpVGyB2hFsZ2ScuXtnG8gm9HPBGWu8svCTaXPSjTBW8YtEfrCQaaLN7x6MVk",
  "key36": "4yk5hsUR3GzuaXsNtsPCd3mGubZZCTHMwDpc7ZGxY2eWMm9ZpSx8AsDrP1sPxv2DUJK99ZL9YL2ZFuE9YyEDnJex",
  "key37": "5ycwfdWf5Ysvr836WTXmTNBSCRcsYCtE56nRmfX7FAqtiBfihrhTaWiPRSuwj1aAHMj51pJ1YHM291FPd8tezKC",
  "key38": "3rqMoVRqFtHfvmX62A9wuN54JHuGHj47P3osxcUhaS6uRQs5g7UxKwPwWcBaDUSmmSebdxGLuuYjRhiVePpYMuGW",
  "key39": "uLbrxmMETQUz1dGcAfnqyabzqEcToDMBw7BHPukcFVFC3f3m3vH2Cs6sKam4jjwp5LXyzwA33adV8stXnKuWKDh",
  "key40": "3t5H4yyRq4Y2b3m2gNsoxq8bCNJpf7KZKDpLuYpKamYX2ViwsVMfu1wNt5usRZrhkkM2hoTZXSdyxHqLUwVzimdn",
  "key41": "zF5ZMeL8VDxvoKh2Ci3H9KQem8FtuwNaJJwwqpuA3gYpyP4c3Z2XMan1xsPq6f5mqermkEP4yuwEsJmPZyEwYWU",
  "key42": "4RSAJEZLJ8cdgfgr5ukNzoJgU1NbmMkQjGXzFeAdifh8QfaUtuQrS7hGV25yc8rnwuvTiTSRpxHVbzL5qXKc8ALs",
  "key43": "8M6spnZD5gkdrG94qijH4CGCt1HMBCpEf9F4qgKEkK3DkoadEArRhiwt1fvXzvjBxY5VEvcH1prhguWta5wgNoK",
  "key44": "BwPRwEZDLMBDQsdsgxu5xz8tfRisK3MvTu5Tm5YzB9NKkGeEcdGQMD4j1WVAWV36pYjJzcK7m2XFQx4kFFkcC3o",
  "key45": "4QSpPCEJwvdCwpN7DNeVeDtgdR4koCEtE5nzU8vmHr2HSB6AtcMTuDhVEBJScMscCRnRQqa2TH6bs3scs8EzCb5L",
  "key46": "55UEKw4yN8dkpQDvfLusKP5myAJdMVf7jLPZCreAkjJyaYX7K257wY8BRzZFaKpw5NtiUpn2KL1aEAbWnB6H5dux",
  "key47": "4c3GFNUdM92uWvaMbQbaCP6Kcwp7DadxrspY2b6URidLBb1RFMtDWH9JwRwLBmGfpTDootBFrkkCXpmrFRjG8UmW",
  "key48": "3Yx6eniHuuzFRJ7GHqDB6Bo8JDy9ZV7N8yPmks8RiUsyRZAaH64dPQJSUVLvi4WncAC2zwcFzyzoDpUjqbQPfNnP",
  "key49": "cCdfy6NXw8zzjcKt9eAweQUR1WRDkYYDJ7M8cTczsBvMffAPTkEKQxrQmCoraasSd1eVJAG4V6tFcfofQWykzs8"
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
