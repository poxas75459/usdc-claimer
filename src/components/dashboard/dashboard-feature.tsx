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
    "2fnNQu7YJkrjR26KshJWtgyy3dszsBTvBX7ny4L192u1tVUbDJBk6QFfdKspiPiWMzxVrEuMBwWxEEULJpSyB7pR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LaMogWj7AhHBcYACkzyZ49wcrwJ8iE45hYN42omkJHDub7FeueriiRhpc3vMHvXNhdmhqbLfKc454vNP8q7KHo4",
  "key1": "2aSSkGvZRgZJtymPAfnAX7ad44XVPwNp1hDAmPema2QHc357eV6gqnFPaGtwutLL8SvfAwhbthpycgbvhsAhtp9b",
  "key2": "4Jeyr5izoDLTdwpt8sRrpHmtoqgZpSUZ9td46r81SZC6NKRfXPhP9tHJr6yobZ98TPCCQNvktNtrfjsk8tvk5F8i",
  "key3": "2xCWX6eQwLt5bUviVfnHK6XwtYYkaLKLaAN3g7ZJQvFGgqmNrnzNcKezm8psoiXcnY5Gm4E2ViVAgYkbvkEx4apA",
  "key4": "5Xwr2StkpnhhADK38rkhRtmQxiLtAVT7d6FiAKdzAsgjPKuJPDrn4QyqaxUVX58YeEAasdA2XbtMANEneN9aQi81",
  "key5": "3FY6jbgjxQ3u1EMPRDcUuZyjc8jkihnf2ySdWaACKwJxzZUzjNhv8Xpe7QrhGdM5Cj83Uf9XCbNFwspgyLxpGWcT",
  "key6": "4G4QJW3ocvyMBC43qkrun3FEhUV7jBAw63Bza4eak38TG6qN9FxuSL7PXSod8uHUpwWwvic3spAwtMddHDwaTXcj",
  "key7": "22S8pUYvbT7AgBAx5ZEJHTQgqtribHTWYKFLJMihx6vYeLfCiy8zNe441mwrNZbpAaf7JkqKCUnNTRDpj1gboy6w",
  "key8": "5NTQNVXVGnMKRyu1M6gqHdpM6bEozNZGs9wtsoVVBz5eBJP8i51BV7nC8knErY7mMK2LFfAqhTVZDd4iwwdGuqZt",
  "key9": "62bXiqfcU6QC9nvV8ynnP2aUjQ1HKHKkDoVZg8qKdKNx9dG5x3U8XcpNipQVau5RMCKsaNzqrzmqWW5tHF2KKsbp",
  "key10": "3tYhWiuGnEX921XtbcdQEE2D4zf8npp6EneeWPGWH2soC51xMrUeB8C7Bd6Bu11smrZH2bLYqaHepZYoo4bpausJ",
  "key11": "4o1cFFxX3VweBS1BPx35fhXAYyCM1XbGMC27XMaoxkJEVgkeFA7r3Z2RSAemFC5C8MFVjSj2Tace17mkAxgPzTtZ",
  "key12": "5zs5uhkfqKjbkY7c4ECyp9wwC7DBXBjPghxSaSGXybdQKEj31WrNXu5LRvEqziPq6SkdFqXW4iWSK6nKVTwykNbT",
  "key13": "67Ftquq3X8ppYQ9drGU5fq6khVXZ15ymvL71pSApT4iaixb6S2nrH5vbUUjtPgKrsF4NezSR2zGZcbtrqqLZ2QfF",
  "key14": "61cBhfC1PdrrD6kczMfXg1bTC2mQ7Ndedgv4wfX2xnV7yxvwJ7cMwucDq4BnGQJ24YfyYYKzAfHPGsD1r6DWnr6P",
  "key15": "sQU9vcHcRNm18XmiwdBStAL5brRQPiQE7ABLkGk8fkjhPa1RDpMBWpqokBNAd4jkxCv22BMsHZVTQFEx6WkKZVQ",
  "key16": "45Xr2GJjftKbHAsCEmG4pDdVJr4khiUt8bDHvPknrgfvDUXAXvJSnmiwxg2XhDBD9RhAdGhNbu8WVJMPWySh9KCh",
  "key17": "357V1YB5ER9zNF4WorDsBfPUEpPV8DcBpM1K4szLXMaPS93uZJy1qpng9NkdX6km32CLcdRPhpCMD3ec9imzGt6s",
  "key18": "2kso1CR198RHMkA7E35sDEMBU7AvuzbNtb29BfrBZU8vRJLwC8tW2a3eeF5qeSb6BiQgt2XbM9Y9dZiog8Hh1fPQ",
  "key19": "jijyT7ZvCajiPXSvSRbVfxXMGXGrTK7xjex2bXaYJjh76YNDY1vQ8FuMiyuKoNF7xLhZw92Ekfg4FMqVDRxoK4G",
  "key20": "gpM7twEeLPMM2aERotD9GiUuk8tX6gbJ2EAn2MPGxbE2BmcDHufuZuyqDZkXvpuWDZL9UxtVQAzJBRMKzrqAJ4N",
  "key21": "5sv6Vs1Sa3kpDa5BRTgWEdLXWV7M9NxRe7RaEaSy2qJ7zawY41fvrEprdyNzFjo2PqY5wWCreaLH8t9G6y6XHbtn",
  "key22": "5u8jE2fBYgJdegzEQDQL3yCJEz4k2xBgvpnB85WuJxbjtM7yr8Z6QMXCuaJbvtXadAiqZxPn2Zar1wXWg6xYXqSZ",
  "key23": "2zuxCPQ3CZSyFW3hMMZJCpEuEdcA7zrGrmmUVzEXkdfDCiYzG9frLZjMJv7WB5hHtL45CCPmkQsJgHRdU4zHvxDg",
  "key24": "4j93EohgCovsRFKi354xEW2QUKMt73g5WW1G3Xm4ZvSYocL3M9nKne54x8Yky5mwGYJYzvwVe2kZo5epAEtRWshQ",
  "key25": "82K6c5W8EJnA6KJa4GM3UsbonrdHESZ8oMXysG4mnnV7LTgngQbHDvNEdmaj6TNMDzGD1MVBFfbX9CT1Jrznbfj",
  "key26": "24AbJyrpuzhGn3QZ2cNidgA3wFE8jmFUcMKvWuH5CKBjGck1THii3F8fJxp5tT2R4C38xHjqb9m8ZzXhabAArqP8",
  "key27": "4D3JxrGvNAcbFG89H2rzGprQuBdGnWUgreYWDpsDazh7NfgmD9KHZdVvXC6Jz5cNzbjvPyEjZXgNVTbLRMJbSfL5",
  "key28": "3NkXYq2wAnkEm1HDx3swiTtdL7EEFLwahtFgkfHx5ZVMQCHa1RwsRavxVWNmktYQW3bxi3USizBXQCDqKkDTiawF",
  "key29": "4NwR6jbr5chExJG5bXBGY9o2F6v38Et1meSWxRqTP2fXBxoWmERp3EnBr4n1nQziBaghhDk1ECA27xA2pJM22LTt",
  "key30": "5DApyEhrmR5zKeMQNQQCwBV8hbXNQdX3qeUwwtqeD9Zsa4EGtrENbRsQHMsEyZ3owTkBRrjUFB5avc3YV5JCzmev",
  "key31": "5j1HnGmBCXL88yrfbxJqWQsJ91ZMtN8oRZgu4d11mUXYW1W8zc4eXisuqeLQmJLmU2NTtTNwAcGMYaXvxMgMT3fd",
  "key32": "2Jk2aP9UdW2z22XpfUV7bzosf4ma4GJQ8ZKcjcgAH9Zikz1egTuwVm3ZryUJVkEgah4ZozGHxH9qL8YRjp9hn1y8",
  "key33": "2iAPK9xtyYfcGcaF75XJMXheV6RLDiEbBXV8GzK1Xyffry5cbT3G7inosNpkJHuL7ZFqegTNZ5xAxnaBVuNnEzLH",
  "key34": "51qY2KdCLRBgZXVNo9ErUkkrVLH4ZfFtGJDULMAoGptXwYNsGFj4AdZAThNRvKDvK9usK24vmn2gbendum9cBYhN",
  "key35": "HnMsyhxLtjCRHYYpctbwnuNHkZjo167D8zLhVENgvnNptS3mpZttVYxheSsKsVqPVozWLvzV9LXoMXPA9WvgdJ7",
  "key36": "3HJkwkNEtyZgeaNhHwUPYezLdaCy8mRxtgYjdAMPQy3YRuodeb4p81uuiEXrjRMcTbeJhCbiVjBCmBSjka2sXxk2",
  "key37": "2m932kvCy9KuVm72T2B7BrL7i2eo51dVMQBs3ttzJV3VUFsr4K4NThcNWKrphNzXVETzT6ZgFotP2Dc18pboXk1k",
  "key38": "5bQ8ftzToMNDxuE1vUTWUJ7igGjW1znaFit7TLfBqqL9oEa9mHW5krHyQrCj9HhDM2pKsw74WF3KChVUMFMKB7Bc",
  "key39": "D6a3VQewnSQtbzDdyXMTU4fhYwxDRqLFmhTQE2Hw1CXWqirvncgxNCiVSiPdA5YzHQ7pKyRqhzV2gvmeMu9Kvfq",
  "key40": "2zBJYgBa1DzSvDDacc9C12ZadCePK3YzgBgJrrLQ61vpejcoPXSWRYW428AhZm9DC57DJ4YJxfdhx1ou9gkcE5MW",
  "key41": "2MzyuTTJk2uMPD8ohATAAjWaHdpFcBHwEujqw3XuwcuVLnN5FCC5mr6vND739euBxnwSPMoJcZdeXJPGsPSP2cpx"
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
