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
    "31NnsVvpeai88RDm3HP2SEULui3o9SjCjirhg1LBomDvmLpNaniWff3VYGLnxhRHFJYBMv8qTcNaFHMfW3qeQAVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Au2CkcunMV5zBxpdgAatDWimU4qf5Sc9U73METqUeL1Jt5iZUhr6NbDrAcwMHhKK3ZmaNUgRhVr6GQwgPCLtaDx",
  "key1": "z9XHZBKCFkfRyyz9Gdzvn3TUPBYcJVTPLbJw9tGrgeZJBWPqkJNcjHwPvwTP2uNkLr6fyXSzsGDgEgvzbMJCfyi",
  "key2": "2QiajVeJbd42M9xkSueRct5pVAcUWX2mz5PCh99W8ECDzcedxoSxgxnzYWmUnC3uGfphxo234uii5Z23nAezda2Q",
  "key3": "2MhxJfwCcPkHd2bpUgdj7kw8qPYXQe5kr74Kk3NtA8wzaYMNdNA2CqqjKhtU8TU4GMmYWU9KesfAJcDXDk3y1qan",
  "key4": "2GvH5GmCPxqfoGEb2KekCAjJb613EefA9fLgREsWXEZChvzmGRRcYtouR3VU7EZZbb7hkktJiMEY8P9mKtwwQm4z",
  "key5": "cpeA2xNX9iTuWDr2etvC2dymbVAam4kfx9VA7Ms1nrbmTqacg5BfQQQLgusaK9JQ8AKNihPj9zGSMGxbUa3v7j5",
  "key6": "4eueAqDQtGhLykTs8mmEEA52EveLxD92LtPq5irKQd1vXnS5nmZjsQrVJUR2pEFrsZ2EfXv7t8CHU3WDjRYFfg4",
  "key7": "3E6Rk74q8HoJVau4yZhDfv4J3jREBVYyupn2Bes5KUt1pmk3EdGQWdWVtmXqzmM6TkAgvpVvThAnaj6UjUj3CA4R",
  "key8": "nPN52DcG4CLUwno6fzwzsacpppq7xm94mNmkUcruqFPWkodfJskB7ieijKtwULJ1wCAAw62gzSwiXppyS6P2tz5",
  "key9": "3NjqQQHZ99n6Rwx7ioS46G5Q5iyYH2gUMFrzhpi6gpnR4wyt697dDLBRjsGHGMiqLkuaDbExixrATWQBEZ8ujKub",
  "key10": "4ZofqHyirGL4RY7f9ZMvZfd7GVQKv7LsS1pLkbmWnMCpWVW52qLdGyPgh6uk8a3xHExYhQVeFPi24c7fzjn8rV9Z",
  "key11": "3qSJmw2N2oWCugV2dcf1mmWJnttt5oM9Png2bSGQMnSHriXzCBVDHMZQjJepnmBi718Xm38tgVL6fJNw1VcAm8xG",
  "key12": "5qdGYe88dBXrJPaPRaeu3Jd833LghjkmmcvGVmnAbnVbvjQQpyjbtU9PTamxfNF1t4rEj2vEsUnV6zRC2sfkPKYN",
  "key13": "4mVQNZ5CfUJLb1B3rGEtGd7jaUdsbd5AEZhiVspqNitrkxVF8hRf47NzGRWTbUfhavaJ4p5CABDuvDemztwy1Rt6",
  "key14": "LmYg6ELgs79TCdD6B4VtV6xPaxB5h1Q8GViayvBZaLjEB1LgovGhDuz3g6zdwMdxBHbLfia5sVH3dBLkaYbqwko",
  "key15": "2zj2a6CCiqwjMyYD1XbtyxXhvKn9N85gK3a5pZKQcwgsUB2Pw3zjhMzJKJtiTyfRu7aeK27tTFTDGRYUuNxxKPRz",
  "key16": "2DwsApTmaEDH36GiffjJz4ocKDdeskzUyKicuCHfXNQ62Tg1nYoaatfsurefPGQ43aZ6y52nb9LDJcdGPn6MbRcg",
  "key17": "3nD7v6SMaULBGAAc9hcXWAWk2s6RBtAzG71FKwtdNfh2YUBU1VPYLZV7sQNLBAZ1uSxUgxyGb2ssLBPwUCcjHTj2",
  "key18": "3e6Ae2UquX4vwnGjWbmypSCNg3dNtXXvWsW6coQzDqzUpE81Nis4jdSKezzw1kC2iLuSQSTP6629jXpUfvvn9n6d",
  "key19": "4KZSxzgZVZYh4Vqig4fvK1xScfEUWTvwK6BriohgE2EvrdE67SKwijKSn41aoFsqoqstLdTLKVEwgVFie66MzyYC",
  "key20": "PKDcU7ucaRqgPAheJm3CCuCufJYXZ49WjJCXwdGdoxUDFeKScuH2NtokRvrPMYXJS2RF8R26K425NTzAV9TJyQm",
  "key21": "377Jwpr8b7EavQGd4Pn85DAa9JzCAth2LxmRscYDxdtp2v85mTupYuoZBcZ1msgvaXuK4DTcu29Luj7DucTebXpJ",
  "key22": "2W3A9gdihAkLBx1q3r8sJQFFTJ4qPZECVZwkG9Px3tPyYYmbG78gAC45W4xgs1AHiph5zP1xQBTAnxxorkePGbe3",
  "key23": "anK4iopCaoEiHQj2CC3UoXCxGMsMJNwf2uTjrSbhGN1iZ4s5FakDftZxDvJZxxGJ8zBcBnvtCLRTKs5iJhc3S4a",
  "key24": "4hM79F2rHBh9tksqZ651hCzXKzCR35h3X2w75Q2NQLrHA8qtG7j65ZaDD5jZgbdEDKagnBdmpLdBbLCQTSRqXNMo",
  "key25": "4qZ1VXRykCTLJm5ox9wDNgGUVNs1DtEk7gknJzdZ7iXCSvBynN4n6S86fg69qisTnP2QC69vKPkKJEUZ3uDHFzMu",
  "key26": "4eSSn7vA5LbqzR8wpNd6SV6E4K2y4E1LcfZ9BbbCJmNzgcqspjV8GP7KWWtrAxKneLfc6PE4CLzmq28pgamiGvCt",
  "key27": "67QMZ7JRWcSAaku112z4NM6rxQfrR8vB6VGhfsKgvyBwPQwqp1HxmFxxKECnTU6ogeHmQznKnK6wwvpLe3BuyGem",
  "key28": "2nen716BgYvtAWCmgbyDD4jXiM4jS3cJT6wrW7Ff4tgBe1kp3kLMrNwnShK4NQvoVYNtt8CHafUjDXo8EZ6mQ3cs",
  "key29": "31VSoVW9YyRAbTc2BUXrLWDRnNt96LCs1sq6FFzCMbTFUEQQyHYe9WhtcTdsy4RRTHLNbqBkTkkgamjsEAVn69bd",
  "key30": "5fLj46HpPuUyDV6gXev5ZwvsouhzLcpUz1wm56qDommFukxNV4U3pNCaf3h5yaiGsNaMp2KNtqK76pHKwzfWpcdi",
  "key31": "35gjUi91GTiwWjmqoRzFJ5mj7XMu2kL3hdUsQW4U6PgeDoDRotMjgVXCdP1Ud73svbPy7MewPUb27Mhi8A42uEBP",
  "key32": "dy5vTixuD2yhYmoe5q4fsR4QDZX9GaNr8G4NML6QYkn6F31Vuwy4qkBdjDsGSfufaDrz3QYGvVJfyAQuL3cFrMP",
  "key33": "j39YYibwrMYki4vx3zmjrBnX4ytnffvj8LJGWHTkboN9TEZuh34LSWYos4UoeizkKAGxqtEFQnFERtQ2WJKU6Lr",
  "key34": "35MpsX8oPDsoTF99uSL4SnYSY5bejg72kdNDg3ZXFn2ZUHevSoDHUeuaf2PQPq6b82K2GstDV7RUPWhkHeTe2efE",
  "key35": "5749DV4Cxvsy5ELL44h1fTv62sGbEeiuxSqFysyJZ1H58esuqsEXxQTZ1T78SYHgB42cRVcsLfmTVEe2rVsVkwZJ",
  "key36": "5Pf9B3HHGZwUcnpznjewVf9vSxKWWsS4quJ8dkhiQmWDCtQgBHVa9oDhGPsw17eUjQfmis5nJtpeBZ1R2jJQqZ8f",
  "key37": "3caQe9ZT83XvrXsUqWqPiFhasTeeFEdaXDLkSjQFfk5pjk8DYtLswaLkNQbp7GVcTN8RBWnvNEkeKiQ9uBcTUv4w",
  "key38": "4C3g3vT17qLYT6W1NjNDvNauKYk7iEGiLLihWJNmjnqikFC6v1Lc6SaSyDPZim3BJwcUkYJFRUP2Q67gGKcU2a8d",
  "key39": "54UWdDsnEDuD9fL9B4jf5QjcbsizCqzweTErqcNZ8nQGigCL33u7Ygz4h386TLLNyTSxGsNM8gyYSD1QH7VgMCxr",
  "key40": "3AwFW4mjLQKdHL7raRe5cVGeD9oXBH85rpyySRVQ6SFuDtwUczorxy2mTjpG2oMhhjjdX4WPK68yEqkptKzqmhgd",
  "key41": "5UavV7Ldf9TAeDm5YNPUkwxazWzBw5snnE9vT37BxzaiLiAYDo31KJG4ikJqe8NQYexGuptwShXFdpf6WBHq9ZAS",
  "key42": "51kwEPGWQY8sVcZigi161quL1YjhLVwys4W97eoZTSYw6SbK2gCdyTL35tkobzoiqRLSE4Cx5sBnHThxojLa8suB",
  "key43": "4CSYBUGcpN2UyuesprhWyjfcoyEebQc1f4whHKPj16chvtkHkfdTWmkorzJbukGL1Vb8RqmCCqTFKLGC5XrtXP2f",
  "key44": "3RS6j5Yg39QTzZqwdxBv8Xdtpp2LvD97UVtVaQA8MiPxp37Ujp5DFuq92yRayWa2q1t99UsQ8TvBHFywbw5y7tF5",
  "key45": "MwjRzAphMx3Sa3M3noh8KEv5JzAFzhf9TS8qbo3AnNokTtdKCKXohg8jgYyUo7TDYbQ5ZtxVejkU5vT6TJF96s2",
  "key46": "2WrEb2Xmccoe9hL3x5JeevV97oC4tRDG7Z9mF3BaZouyJ2b8T4sU9cnYtMAEY5T5h4QoB5a9AbGyGbD49V3KdFz",
  "key47": "2VoxBJ8h2MaU1MJeFmxvZ7VVvsgYgFyNBnsuDuzf1jMAA72zYqsufcAnXZZVrbGhY4HCegkN2wMQgUTW8bArKd86"
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
