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
    "2TChrMQBq44ytmXtcQvwgTKWuiAKMWUTu7ajk7PVU27Ym5nqGeEEAf7xCqCG8jc8QXPMRyH4mVFrN3RZ1e8VXJnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QcSUewe9VHS18WtAXQTdTi82H2A5LKfhTWX7H4o8nD9ShM8bSTgoBHY4Lx466ievcPyPdiaEj5gNMXzghkgifPr",
  "key1": "37HEZfmQHmwLjuMS16C2surJ4N1wr9yDCrdAJXWf9N4byP7C8SJWuq1niS3rkbhvkCtybYWaevLW5EFEbEXkFQMz",
  "key2": "3SooKPBDgKHCRubyL5pJh9sydxx7vH74643NDPqGzdaNudds5oLye2ZxtxyUaCu6ZbJzD6izx2JFcinDxiaB916p",
  "key3": "2ikLy2hwoff7wu8LoWHsK3RqBkzp33WcyTBv8g4zgkSwfFZZfcuz18shUuyhr1PCvdtmz9AHHhqvUkNocNkJgoxP",
  "key4": "4oPsH5JM4W6D2Vfnp89q5ApKBtPWfEuYyzZ6TFrGSomJPMFuSaKk1oF2t4BbAdcuuE5pkeg6WYfDXstbxTKJQxYQ",
  "key5": "yX1jbRwfG9zwHLyF5s4C4kmysLVB3s6Xc6uGfu88TCXh2R4UqVE39yhjB8EpJhe6VTRDHuA9cQiQxDh1KsFwhXq",
  "key6": "4os271YpXaiUDVEc19yfyKEAiNVzYqYeyMbxarvMBxRxV5uFvyc37kGqhJZQqeP1EHxmAHPqCas3giU3Db8GngUW",
  "key7": "4aMkEdCPm6zjsNWYkUpbJcrf13LPQaAtvn2mLtofpDmgfYjsQxavmZ3rXbJMPQMpWJ5ZpKuZQt2JdmtThrhYLzsD",
  "key8": "3SGxkYe1xS1hy5TJTztJq5zZHS2VDPRgZ7N5piGCjRQ9jmCciN8196eNK38rXiFJqaX2sBbkdyMxHcD7SYfBMVwm",
  "key9": "2wSFR2vVqUArobHDPJJQ4f6QReEvEpdxG4DZj7NQy4M8DsGLb3WphTTuEY6dvBwaA6zrPqPZayezQPcmF6nkoFEy",
  "key10": "3ZpHuNiQj7RmwBFF8NZrrFA3jb5Pab5hUVc7rWEha15f2ytdY2f8s73keVMwtGrjwAJAKgbbxFLxgp8GGbZmbSRE",
  "key11": "22PhgRHBkTwEP6sPMwwmBRejhYeKwSehQAFNKWD1cJvWFqLTqjKdXRBqNaFT6AKsKzutwUDb6aWeqazbdvbw8dBw",
  "key12": "4k9dVboKHrFjrRYXLzRZHbC6uVFKEjmf8xfMWcvkcn2MvXUtrFbVzUAXjwGaowWVoux5MkxCLa4GcAXohwmvYvev",
  "key13": "5SvyHhekFN7naKyf9G1mCH5ivgA9fahVwZAqH7csss5jmEmUvZ6vdzzueePXLbhYmxkofJdfnKqTbQJVK2Eortxe",
  "key14": "3PfBUz3bgsJabc4SvaDhGXdn5k7yJo1a4uLurAStJpQzjsLhxqfGW4kNF7wWNuqWYyw7QzS9Z3RYhC5VqBYDWJaQ",
  "key15": "5BtMNn6NjXLLGpd3tMzgWsTottoG8rK8yVWxSPedyBnQY67qsFNX637guBvrpZ9pHQQjp8s4U9BFR4WkmVxtoAVz",
  "key16": "38LhGnmNpVbtN9wagz43oVZTP3Q3We4JTLm4u5WZhwjomkv2N1dXQSE8qa6uuDs5ohPVnkVqjR7UCUJYq33A182t",
  "key17": "4ETBooLptBRq3Y14gQY35RoHsV5Kbx2xJpSe7n7xBaTThSAocSHoijDPo4tNVi91oAh9TCJ6tKUqwP84fjcGgEF5",
  "key18": "3dBCuJ9JG62daFKEcht7hQAikFmYJqSwx9UQp7Qirp1tyqcvsr9MhcBE7QV842H8YuAvVhg28ZNCkbZ8xz58ZCnd",
  "key19": "2XDJd1PGMYGppRCmKbzv2MJbJgbbQFVaoYAUHMcvR2aLY1ztjPCuLWqk23Mo3q6yLVQjnyb6FrYyDtC6WNDac1ZA",
  "key20": "3JG2wYQ5U9Gk1LcDQ21t4Jo2hLzoToTMM6RwFnmmZtepC26Lm9tkLZicFP3NUyv5eNDHBV9Qos7U5giMLgDU8tu7",
  "key21": "WzKVUZe1svpwtkgSXbzQZwyxHHJFa3EiFuqvD9cfBX7GCofS9zuWMWrRNVd2G616aDckBe6JVLdNvfE94Jhmb64",
  "key22": "4633o2KgmZzh3u66ZD8Wm8tTFABErdekkYecBDDQe6CPFva8PcZ7CxXqqm8rriLhmszdh8iFcCSML4Pqb2qSBSe2",
  "key23": "2RZrDgvvwNKAU65PF68mZMoEYD6a2mZbR486GuQPygZSTkVnfrFmTbmJokukRSSkm2RhfSoSfZgVPaooCyJvy41w",
  "key24": "26vCPW7MwEDjzRf5cEkjQx8fKQp7pEhVVwQSUiTdrLneNQYb1ommTdgWvvd9X9d5aEWqSfieuWDEeinJPAQfkhLP",
  "key25": "4ajtavscXMhQkhhH8btr7aLURjLm5gGvihwW12gUjrirZ91u2ZMgNZC879NS8XdgkRw6AdCde6Hd5TMSg9zuex5W",
  "key26": "2YYtCJeZJQDPuuE1cTsqGBNr5tq9ihCCXsWQHKyFtUTZqhFpxbZm2vP5Y8Q9HrkZyFbHAGsU1EXpuziEat5oB75Q",
  "key27": "4ykiJL9Bagr3TXPWePioeSuKJ6kSakb587DwHHd7rADRqB66H4JsxgPeyTxg51553B1n7yoXoZ2U5m7Fc5MRpD54",
  "key28": "BAMcQi53WNuxaAp51sLrdXiXqXXH7kXGQm9A9dzZEux61JpvbZ1ttLCU8ajwqbUWBr6FcYiKqwhTPwjNJrTXWTt",
  "key29": "4LdynynSeKX1ifvBB9GRz8CjL72ToPdc1zXNEeVFLgJCwSmGr7CkNJicTNqrxGUwDF8PMrZsYjsr8bLch9h3H1KA",
  "key30": "2kr5ag63U4gDFmhXqXKvUjDpW2jRRXierV9F4GhRa8nuVe8EHhdTuLEt8VTXrKVWYTPXFSSVCynAWjF6oQQ2QQaU",
  "key31": "5kgdKSWMAxoECNL74ZNmVztQprbMaBiMtB6xHbXsos6Lh5K37picej8XLPKWpL7vPVqtYmPBsQVDx9JZU2pzhe7i"
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
