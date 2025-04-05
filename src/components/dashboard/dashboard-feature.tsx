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
    "2jKeo7dUJgQvXHiCa5aL69zhLsFj4PfUWr44igifYWSTMHxyy7UjfPvVPLt69wQfNF7Yv1Noff2eWQYVJzENkwp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sajcsA7jKxEZSpxsj5WoUuX74aoqSLf2z4sQvRXB2GiBPA1NryGLXKboBhGk2XEQqN95iMFs83tmUpFdcQJ7Jkm",
  "key1": "66q3EqFVoNrcUj7aXCQDpEaLYjdeQ53xuEjtH2uC8SEzCZXwmqhTeE2wUiDFh8Vbk8VWfHTUfMEsZhkVwfBrhazu",
  "key2": "E1fwyYuLe3VT1izYTU4dTnkrPNrK8ghGNSG95e4HMVY9sH8dyfmyYD7tyAWKFL6vkkMeWJ55AkDNeYBieFeSZQG",
  "key3": "2d4k5fuHRJdhu2XVDwM428vTwhymmifurURowxvPrX2jQd7nmUWfNJL843QkiMHHUvVrWuXn7Gzuq2fH4oHVDpc7",
  "key4": "4BHCYwJucAJ5Mt95EqKuJrXwxapZ8RXeikysatqgqJkLRdUjViXp1f8D6WwiGHyqxoTjJD3Kuuatg1UoF3fcWTBi",
  "key5": "344v6sGWq12WJiY4ZHKdVwi4JrpUwrUTU6z78ekMDAkeNEdyFKpLoHyw6xGKbQ4hNF1qLAxNx2ZXvdda9bQ1TYJq",
  "key6": "4dttmumKCvQ2mg2d8QmMSonpMp8hU3dDeeVygZYW6CgZrFBMNQCZC6xdQRnGTwBnaQ1san5RtKvm9o2aY7H4hHA6",
  "key7": "3AorpphAqHA5c6GQdxcsao3UnJEX8ujcCTNYFLq2HMktXUbtv1HyKt2nTNaTTsbnAouxno5U2tydRmabVF5hBhJd",
  "key8": "29irR4gVqSyPbxuSQzu88X4Keyu6FV8BZ5aQStyjU42k3vZKGTzWCQCoG7Z3pGmTZGdVnCvu9fuis83D1MvAEsdh",
  "key9": "3a7dLdyNS4RonV9PvXBgsQiHn1p9EtpvMNhq4e1szi89mYGu5fRUMzUEWLJNY13QheF86soKrxkRyTXxzRAfbbYV",
  "key10": "36t17pgqAaHsP5RatkeAwV54dsC8ihs32nfzTiouabJ9u8R1HqzPV43P3aLqJzgtBF3isNPov51Mj2CSdas8nnYc",
  "key11": "bkC23d3Q33atLDYUENHJpfMQSe6S1CWQxBjcoiW5KaGCyKCkc9kQQmtar51XCGTutFMvjgMGdhE9epyUuBZvZUR",
  "key12": "49y577yRAPi1tdVef1L9HVknPgXqL8xFCqr5HvjpC8GXsrCNcHDCEg1ziedEkZzSPdgMWiLdGJUMfMM968dJYPnE",
  "key13": "4rcyWMfJqAhHBXPkkvms263uX1ewZVagbP1zYTiNwtnxE68pNv4FCfc52QkJTSNxW5fysGxyxV9DJ7TaCeA4xLpZ",
  "key14": "MaPeh8UBbvPUGF5g28pTNb8YZqR14DzGxCbWZv9nC7QaK3Ya2naETTgZP9yh7z8E7Z7ARdv8qTdZfHC85JKv95T",
  "key15": "4LqDu5PWajLQHWydhrvbPVDEkVxQLHFzNYL2eKBXfCxKBUDkia4Fjey7VKSLeYZYpnzLrrKeSVvXSKGFHVUCk9mK",
  "key16": "VWAfLNMUVwWyY1itURf5S48M2RbuxDh8JWVKNs2uX4vTxFcZCy4puXpFV9H9UAE3a6WSwYiotrWH52gLxbAvgUQ",
  "key17": "3tgt6Dm2aCov2wQVex3gy4NthEwH141WdqPhrsmQKEsHtPCnNbGbdxZH71EtFsg9pKGdcnNT1VcqGEJtarzfzR5",
  "key18": "5u6pZj9HgA2BG2RMgBn9zf1wLoh4uv9szqk2653cbpWE2N8wWfWNwDx842ndfH4pD4Wy34VGJhZXLpbX7XkEgpjh",
  "key19": "2vwBMY7wiQe1YGKREuEWWaic19c87n5QCdTacCVnjkvzG9dqp1MdCNQgDTGUZHRwSnArphnxceJDSdDPuLDYkYV1",
  "key20": "3S7FtH36XdN81tPkzETrVWv4jaDLBAUu41UFfzi7jC5NogBCN6f6bZTG4RdiGSuHivJqyzVKxsdXpXkT7Fpvmk1J",
  "key21": "67RRsBdaTRavkcCkRn39fPXB8JkrNyFRtvThkX1YEjXv83Wdy1G2biX8av7J3kYxqVztAQCU9a8Pfwim1Mp7ZLw2",
  "key22": "2fLLLV8QxphY9sMxGeBpVRwCfvPMCBed9JQfSvdJvz9M7YkucVRkR1XmJ85eeCazgGBz56B9j7gcnviMfrMmW7Ys",
  "key23": "k6HET89vDHbFeyHZe8C9oZA6YCjAFpLGhAF5MefJ9Sjq7BoDvhw25quKrPQHvAMfcDgnnKsmyvHDE9FVm62ys7M",
  "key24": "TjraZ6SbsJpTxCm7ZtUccshRK4xwGwwiNkfNySf3QwAxcghUdBcRc92TYbYGvnaVMijojhoxWeCg7MCzyvo8sMS",
  "key25": "apYfHL1fBroXak7FzCerzgsbDEWTYJGB1SqEs8EaqL7prtAWAZADomCfr7ohWyQQgQAbJ6qW6LT18aDPUFc6zrf",
  "key26": "2QZGUNRH1u5f6m8AJJ1PdRqq9LseMMw7NhutFx6EgVsJQ36EM5MXcJ1yCVNaNxvdpik9enV7YsukAUU6sPnMwCRo",
  "key27": "4XcA7Ygh9WnG15NikWw7pBBYohLw1S6LpMzhDNPHAuwTTpi2wXViFUaQyshKzNNojWCauVPWPQp6jFw7MmTMsRft",
  "key28": "2RFNnXCCmfQAAxdQdevyHtrKy6LanosmFx8szw8mA1oixWsvVBwzh6dudKT7VBw1PFUWSBBn2rxEb58gQ9e6QTRL",
  "key29": "5GeYXQ1KMCTiYJd3JWX2n4qGvdZ8iMDLU69Q3R8xyaHrBFJApjDRBWjzix6MZoDdSxHtEXXsQVCe9mdZc8eaxAmM",
  "key30": "2hxea7wP8jotBu6W4FWvhj65GTBxgNwVySo7nXPDyds1L7UhHM94JF5yB9DgjgCM5WarTHtyhyYseaJwMedhJCbE",
  "key31": "3XHTW7w7Hs8qfD2fuNk6sXsxP5x64f4GXrt2QMxqLEupqUzsy5qhLcbGsZ3xv7xBvCeExxYT3rE4iQVG7nE1d23w",
  "key32": "32b5FteXNANgeiYuwyKGqEWBX3XiNRHNHSuym1LhEFSyhXX45tuVgGrCQFQZYGNWgCu3gCDzAvKzjgkpW21K6QDF",
  "key33": "5KBW5QpnJgwCZWxE5g2t86xHHFUcvGgfj1xPvj3xWyiys3xeGgd3cQ6otuywSLm7oAicndTn6NFHJaXkPkh5QDms",
  "key34": "5QLj811hAMV7V12GXdyWDJ29qWcuB2VU7AtDZqJKaa611UqpZ5AtnWypW9w6jJLSDPfrLeYJ4pbVVjf9B1BaTBX6",
  "key35": "3aZVYaX8cbcCdcbw6Fgm3AzSKHQwnG5V1wagsNWf1UKP8EKdmLbrHiwjbUd2jeqnABCVV1TL4LBkwXsrJt8NPyr6",
  "key36": "38976vPmEB16mAFvHr3qrVtpXZ4FmGv3QyBa647kByX8Fz1xR1MQNEWu6XwyeXRw37MRCRZrrrgvApFkHPGz9bbc",
  "key37": "4BTVGX8vzt5d6w2FdqpafV4dorkYcwuJeo7toxCN494urEMBYtdxuz2rxkPQpNuhX2wxpMp8mqaS9xCxiksprcLK",
  "key38": "216rhADmFtfZfpzNLbtMm4Vf9mU8iaa4QXQ3AVREtqiyh3dkqH15pUXsiKdURYnhmdsazEjUed4xnyQ65cYoh1Fx",
  "key39": "4zqVDsK1Sh9oovBt6w4S7gCtKtSKwP8RppGhqncrGuwAaACKiZFaPrmEpBWVHY7sG97eh6PGVcSNJTiKUcNVg72v",
  "key40": "3QXX9RMXqsLsfgv2HG9b5ZjNAnZFirL7Vb6RSCDi3YZe8awRW8BHnG1ZBJfchyyTUGM16i1ekB4DEpD6H7sKVESd",
  "key41": "5cwrXVircgLNuzALbiNUNsCkV4UyQG6WJccziKpz8XzyTDpwWaFabejrUbmWkpYb1uHTFLZ38FpWp4oepgSNCDBn",
  "key42": "uVpJqFaeDfETwy5QU3Q6gzP89DorUDX6VQ5q2yztnCKPXdCzAxfbwZMh9yRDCSZtTr4RebNREFNgegShLppbLcY",
  "key43": "54mkc38MvGfcAzcWfhTXCCjSgVQKipp6k5dPL5dubV6cseWdLCf5hYpuM12Zcf3SpGjUS66V2XnkCJDPCgXQSSzw",
  "key44": "23NifKJLHiiMkmTPEY9ne1uir8KU1FCDJy9oZ1SftnusuhyXDPXSFA1f6CBuYMomanz1M2P2wNpxvjhnd9D4uw4Y",
  "key45": "6P6wj1jdPf6X7bnDvPjxYLbGiRBatSTom9E5kexjBVbDgqUhJLmPdNmEYDYLkU7x2mYSAPnV1eReoZtJzD9C72f",
  "key46": "3wVqdNcUokwQ7crze4G6DYFiHYamEUwVMf6nU7PektoP1MrQ2LrFCpC6iS1XjQu2nV5153RkqRRLZPrvo7kyMne4",
  "key47": "2xd3RxWdFFcsx51PvhrAG3iM6r6QHZJZL884Xk6vuNdSbCNPLv4Bg9dU7Z6iqXNvZvEV6R4UNGrWJc7K9MaYNxQa",
  "key48": "3ZnhRn1z8FXHM6uouVmo3ACug8z5Z4w2qHosToTjZVS4vPRQ6WDkaNJMcmefYACxDMGAQ8PS71KvNXv5BZX5fkx3",
  "key49": "4ma2TsMbxwP5tqHtkMC1gfmkqPLcjmtf1S66UMRorHe9onEqSjQWWh3eXdiNMHqT8fycgTKmtMJ4BAY8umNgFTKt"
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
