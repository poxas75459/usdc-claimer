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
    "3WNPRdKoQyS4GBk9pztEdqnZxGkfHMYAg5Z9mp7gHEna5g8LVef3jivgoC1XJn6dXNiZG4tAmQHe6cqdRncnEYoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ZcrZFPXiMM7MBxb3AkSLRin9QfzxMey3p16FzGuTALynAdhif7EfNqTc528mfvZKU5ARwLwyLCzurGsuWcqNhD",
  "key1": "nFwbcLMuAQj5RP3pUR9x3vZ52Cx63r71RTJirmGeF3LTcyzB1BhecpX3jgqduCEpvcVUjfXqvw2ZQGBFWqPtgdG",
  "key2": "5NvTMCPiqKhfx85tNcctCexFedyWCrKsYnbfhUZmpnDW1F86njkmfyajNfjdes24zk9pJwjruhvpYLtVHpAXoL7S",
  "key3": "4nDY9NnacG6Xid87fm5cPbribJXJS1yT64nEws2UAsJyoHQist78pxqm3tjZpePZgJFg6p4VuyyhtyHLSQfFu7Pu",
  "key4": "ojdg2YCGfuVpXakRTB3VMYWAd8WQFsFzAjp5ZB41sbPdXcwMztbJX4ckNmb85F4G84uz7vS3SETPiJUZwT9JZWv",
  "key5": "5A2c9S83rPQ5BUAtjFyY6rDpY3UbH5NgXe2PTjHpEh8YAqvmL7FxvR1WyvATZkHa8Ltxr2eNrsMJ1k69puDEQrsi",
  "key6": "66KsRgUXaRbpQfh5ZXo1yta4W1Q2t4m9x29r4cHjap8XMNpXxhM7wQSdHg6usp2QG9PszZKZkgJZJLsCUKVMrRf",
  "key7": "ysdECPvTUfSVTvnxoiPn7QJ425QJMTf1G9Ne2dWmpo1o7fhx7k6XR2dy1vjBn2S2e6CSu77wENhtKK4n9Dhj9Vb",
  "key8": "3qdRbuWd76QEftzbkKw2YMAR7fTF8nCL236MkmkAhvjEZL2gLi5jgYBxiUjwuKShAVPoadnyC2o24zykn9Q6Ebva",
  "key9": "5M1grTnn43SHqGMeUBtATy7hpWUDjbypgFumbbs6SatA5sMkGaVZy9eWom2rJdxW3AbScMX3F8hK329Cn1tpXEPN",
  "key10": "4MAUa5yXt8FpdbHxguVyUeGRajR6tkw35w5VkyuQeU95ZQcLM7oQ6nnib9EiYRsWJ3TKDArV7K8ELgbgeQ1WxESi",
  "key11": "v9CmGqQDN7eVxCLGpBWu9WtXmiYVVpndsex1hJZDVbkjmMg2D8gY35u6x2sNAJJcVZShpE2BxZP6TPcShU3GaSq",
  "key12": "5D6hrc7TRW5ZgmcUYUrpkB7SsGRMBb5xymxWRpXqeW9WHdU7o39aEQRmhWLs7g4WUsnjxg4MgPtfniA3diVXWx53",
  "key13": "3PU5hsTdqMfMdgfN6JGxda7PsMRJGVa6fpk47pinSY6qVXcwyeVMwYrZJ7ATu8sr6mcqZmG7LGqqFKYtxTsBsBwG",
  "key14": "5z696fKwWra8vNN2WEL7y41noPLGaksAHq9qEFTLa32Sj9UfiGgRc9kk9Q61W8LvQo1NWa7c5DbodQAHYyB5HSb2",
  "key15": "Y9xGd9SrTsSuQvCmGZAuqeoiFzE42e23hcGXWNcpuhWxams21nMorCmaG6t8Sk77Py36LyFvRmfAFQa5djxFneq",
  "key16": "7fkKMeGGBMcicB6oyfzzXpGYVWCisvm8Qb2J3R5cqFL5GVkNZ3tuAHHHT8m6bKwhs2K6Fty3T4uZ4uVusmUvDX3",
  "key17": "31AwJr6Pd26x4wRQZrMoZT2w4ibArkiFbct4auGV5JKs9hmRZPs3QC3mbXwu48CQbekU2DwEaRwfnj1E2AFgPeEC",
  "key18": "aPxA9S5jdLgUrCM63KdgcX6Gsce2msQHs6Y3nGKnevD5cau6h2HxTLC7irQ4u3GpC5BBuLv5EJDHo1fVzoPreyG",
  "key19": "5pPWNdPpQ8HU6ubqVc9XRywbTijqd4YbVhBx4SaqQSFAAfhhJ9VrjyWfEvJjjpjb5gBUrSij4PQopG7RxhcC6J9V",
  "key20": "5Fu8KrumTd9eFhiyzDcrrwnGuJc5XLKaZwuQZDAFPxkCTcFKzkacjaDmfDKb4VYztC3T7cvMLAugtiQ59bSwjuGM",
  "key21": "4kQjf6BrArvuYS6jPRtjwVhK7b47Nfr6zVNdWD9ZyPvzND3wZ3ibMnkFrPo8LGJ3xg1Aq9fcZyysygaKJ4ddEGRt",
  "key22": "2WQj3BfPTTJ85G5euJNzSZ9c1W325QtPMh2wXLafLx89QVoiodMcXL71zmfNFR3cCygeWQKZGv5wwEv33JiM4Dgo",
  "key23": "4YosHxbZEf7mHyPV3QSwvywRSL9FWn5nPVf7SkadWq8fNKNjBupeNAcwMKuHbvt3WF93QLmckYRaRUoMWneDH3YR",
  "key24": "4P48chzfSZGnRnzQiVZdVLiew1T5UytsBKSPoSiqFcNXUdokaVhyuJ9EMabxchX1H99LALZnWpazNWpxK1zsX1eq",
  "key25": "58mtnoUo4VQWdUxpn58tAvfLXQtnCufCbpEfpaE16n57dBEd1DaccuFKa9FpF4rSkh6Qy2FF1beQjUiKKSeYCdUL",
  "key26": "327q4DE6aFmHF2RY6LCsP3bEUq4hZ5QFmGLqRoTcUc3dE47sgeTJmohJGTtKUPqsaQfaxsKJn5td4WpjtxeYXYMu",
  "key27": "4VhYLYrUvWkJE592T2jrE73L69faBdc6J6CBoJmZ7KvvjiE8VnBAUDibHgskSkjtc1Sp2S1jpt5P6ajqwTkXcfK9",
  "key28": "4iLtmr4gDjB4ytma7zbcuCojDyxWwqBSa91zxqMekcnNa92HsAXNCSpRV5f1NQj3aqc4nuvDCwBEXxsodzZ2Rad6",
  "key29": "UX5zDRPuPJibeiKJ2zzkvJNoNGj7MunzCRaLG6Y7rKnGDkYHXorMzNGZLaeb6XvXfuiqHNF23fkHiPVmi5gtkuN",
  "key30": "4q1kvo6Nzo4NVia1jhofB85oyewzkbGYuZQ21mp6siBfHSxCo4MHzko2bbRnLhA7NDJTFxEvEWVKz7nM47URAmTL",
  "key31": "5WCTHs1XcE3pQLDnT8sds2zAqG1KV2mTHFkYcJoAfXV94BAS9jENDzCrbVK8Vrr9ghmHAoF5FxteC7ZjyeSkAFq1",
  "key32": "R5LH5qjbWWtQQfn4huuq73duDgVZ11iouAj71jyhwiBAo87xnCEjYbNPDKzmuR9hGdw2972GgLgE7cY7kBwXux2",
  "key33": "2LdCt3WYUferMeXMqPEWQyCbp7aAoxC8CMRrG6MkuL3qTpPLxapvXchHrpijrvHzjVu2iusdwG7eQFAQs8cwiUja",
  "key34": "264DtGLRnnQ4P85pUvYzJaT9SjRTDMKL6Y981YLXPWviGMhosvrQ75HwDmXkC42LZpnhpc3hJHBKohZq3sAMz6VE",
  "key35": "43AtQyLMRiac1n4Mp8pYmhL6TvH6u499xoZHTcQcDDzhm1wHf9Um93Vi5dGVktXXbZ4hKL8vKHwRzncdYE1Apky1",
  "key36": "5QmUrE19D5jPksyQLBiRhrtwnzbXKYkXruV6JGDRip8mAuvKz7yyGqBXwogaaPi3fBeSr1QHjgMUkzr19TWQEn5p",
  "key37": "3knVzeMmaMPTZbakCbevmKREhKJYmKmVXfGSz9JXYzddxb5YbW1ByRXXHnj1M6ug5YpLSa7kwNmh26htyeJh4NRd"
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
