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
    "5ci3hQPWoJpzJBHcqHLEj5dbfXmvyhsQbjNHqCsrWu8QJUtLZd2NbtTEkeHqpp6wgq1CcwcLJeMsgL2rLAf9JjNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QJxkRmn6j8NrgDdP6xju7pbZzF5zaL9Wv1Nq4PU7w7qREjp46k7BTj9taurnsZMCKXtc1ZRjTscuJWDVbFv6kZ9",
  "key1": "2Kt997cjgv388aStCA2KmkYXEjx9auiGhcbFqpVKUQ8huBdtPD7osekRh7K4esG6zZGiL2wY6uxDgdTdYt2Um9YR",
  "key2": "4SuPEcxFv4Xdrzpy4GueFdr9x7dqshu7uH1DXU1ucYsuCYRByQ9NjJnrz6VcgMpLG4968E8kNNRQzBzYHTzQsNdM",
  "key3": "5q2ZAoKPgM3UfcZAUynJCRF1HZijzykcf4g2PXuX1aB31ghL8RuaFohbTBmjPD38EyyAejGA6PQ7GNyUhs93qGr1",
  "key4": "5yQaALrUq7e8U48TETcgJwbYovLtSTpfTQrnM4Bho6N22E81aKAEVeScDMwGBNsY8kPWrMkRVdCMAWV4JCcEXMUs",
  "key5": "4AXLxjrHzUHFJQiZdaLupWTJGvS5iCnbtTKVeg8MVG9oS7i2HJJBAid4oD5ePFJHSKNA5WSJehPEvE4L6esksNhW",
  "key6": "4htV1sP6J1wEWT56KLkoJuzPtNq8xfgzm5cvLmBvMc9MocPP1J5vthTDfTzBiR18Qj2FXna4g9FXgnSEicJMkjhL",
  "key7": "3aJ9dsTSELdw97C2CiCD6WVdD1gQaWELXgksbJkRwJEG6JmQocGFPXuaGm2q14EN6KvRni5MRmRyugKuJ9bavGLE",
  "key8": "2v6vcXPqKHqmrBMws25s2c3b1CRyTivvpbMcPDTMvinggCL6t6Q6MNktBhYstMvjWASAfBG8qJSvr3XLRhW4cXmX",
  "key9": "3H72VEu6FQ1y3U5ofcxTA3VVb6DXKdVRCykTsnmPQrVYG38gySXY2MBXWQzQfajoVcziWNYDJRELaX94YXCpRm1g",
  "key10": "2De2yo2KSbguztkacAraGSgcVx3VuUCBrqx577EPL36tfd3PsGTQSyuGGNHfH2Kwq52eMS9KH6XoN1ZgpZwiABj",
  "key11": "UC5ja4xw7WYHDAQ8r696HCeqe1K6D6jzxbYZJEqwDarATeAbnNXS1Dnn5eJHoirsGyQCcaAmqq3VfEMk4CWciKS",
  "key12": "3LtVvdmWM8PmoMS8fGfWzmxDPjPDepoGyasaguTRQc4jBVKKY1jxc8XZYLUJtGhXY4DDbmNfdYRfM4nmrUBXbTao",
  "key13": "ihi8t482ELd68GJoE5rEfEEZFacWZAYSDHozM4GdTuR9hWaspJqyp89jS7sKJTJfNiZToGKtHX5AKwxdSC59UhL",
  "key14": "4y8YcoAC9PrS8wkrTJn9PHtV86YE5omty2wdLDRRMGi8kPLNfTzkukskPi6SxMrFSFFsiRqheD6bwLpW1zoXoZfg",
  "key15": "dwqZzZVntHCgBTc99kQR81uNvgcVxS1nUXMhais8mvVpbQGZretjgYHa3zk7e98372ZCQwC9ZY8bPC6iEx9wMns",
  "key16": "2tSbUCXk8usrczMKXAWXU3uev2WmSoWQLhFfw7Mh2GpTrXVUcJhnKXNYfJDWmFsqNQ3ozoBbY3sgH9Rb5FG1HFZp",
  "key17": "xvGQBsCHtR27GhN9T2fcimMJUnPnAgjkSZNWhjM3HVWs5ii3dUFQe8wxsKbrdSSf7WP7kbSZaUk4Fv49o6hqB6Q",
  "key18": "28ECVY4PbeoW1DTj26H55nP4svnQpii7YkDxukkvfZvwVwWYV3Kqx5g5wEQcJG5YY3aQqEgtyM1CMbCn6GjtzEKi",
  "key19": "3hVN6F6ELxgd2MqhA19Eypc5eC1FWoqixhC7TxYsYwzh6cUcAZRrY1MzGEpCwNDsursMz6BbyyrR1sjKLfiuN8yy",
  "key20": "45HaLRW82xVpA1b8AqC1M9YyqV4HfhJfijkhZzXfNYa6pLbDTjJEpLboqAbhY2bWNgbfHMx9M3PUUySj8ejBpj9W",
  "key21": "4Th1aeite7hB12Eg96jmUGSS1CmiydidEaEDr5cTpGxmSj1qB7WeUqYxN86K8iJVFBBvdBXcqVcdmuApCVGrzEK1",
  "key22": "3gz6YQuTd5XNLgKnRDBr1VAdxKVjt37cMhWbCiVf4ThnHrrCdVczywgYFf3uz74AtpPyQgDCvdYeX7guoadBaW6h",
  "key23": "2mHV5cbLHp7VwhAzMJQM2Hc5atJzqno48jRPmETtZaZPDtbFQCFRhhgCneaHXY9VLM1segyWmAC3mfkXu53WU2nz",
  "key24": "2mVp4WZrLGdR1LEruianPpKNehQKgc8NaH6iX9CvGbrfMcBXCHb7NUC5sKgH1qSz64JtBTUte7Ne4BaEbzJ1iKJh",
  "key25": "5NX7HKcSmjkdYg9XJ7pBTrfXLKim2sYbrM2XEezTJNbLHbFuZJfwJ2xFqAikxE8niuehdhqTGoZ8mxtm48aKzNQD",
  "key26": "5iYjzQweFBArcydAp1cYmBBebvFj9cUBvrCpiSxHFTWkcWyZjmy9Kxour1xvzeeZ7zZooXQPD3WGavGBZ2oUoJry",
  "key27": "3YqtMyiTBxxcBF3TKiQPdq4Drpba71p2FGANjfSd9YNTvpoS8drXMXnhcD6hUpK2KyTvnKNpgvrP1dwqnUEJdtYh",
  "key28": "mCdWzbpAUM88sQeJUFSH2BQZj7Y12ufGYyh4dfDc8Azwx6AuCaJBpDG4Qr9LHo2m3inWYmShgi6R7pQkiqutrPa",
  "key29": "2kCQBnYWhV7YgKuf2yaaNUhJu2aBG9RF4wN2YFPvYaSAyEaMYJqBFHX4eNomndL5wQaCjs4zLhR2U1AACekNG5uU",
  "key30": "54dUUaP22qQKCL1Q3J6eieB2V7FNgFKR9Fed73ggD6hHirC92CVWcvpavBUv2bRmKQhCxqs4oiR1oFvxZma7nbKs",
  "key31": "67SV2rhCUWyXBWPEd76FgNin5tqhAD4aYgronGTFVvd6DppNDhha6HyYs4p69zcVc8NvEuRFYVETBaE5co8Wm4HH",
  "key32": "6HkPvf6dQon41wbVn9XEjkwwT8yPoqsDwzUGo721DYPWDtfNrrq5ER943f8PNdjC8jxnZFgqJLzSzJ6SikVWKXv",
  "key33": "2DoPiNrwMbiJXkk6v4cUz1MMhotXwx7VVcuhEQTp8seuMxJ5RhWXgk6UtH35GuFtNsZpgx4DYZvmUepdVjKsDMEW",
  "key34": "5Xrf7aiE7Dih6fpneNweijsmU4mmft77nAYiCrmz3bi6XKVd8XoAEfZLrA7sj3uk6E3NSVd9YeMQ7EpSoA1Kg2AS",
  "key35": "4vBDkhaWgDuG6vLbDf46BjCr5AEaWVcTQFR72eTLDqCda6aSJgJVqZzv5cvbo9sQE4MBTWxKPUDZV55aYprN8jKE",
  "key36": "TguJu3QDzVbYkpCQkiHG9zBuo33nBBWd7BWeaXK6M358HuYioj8pUWMhXLUZH9ijtVmmLQUEE8Pb6y2nuWQydYB"
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
