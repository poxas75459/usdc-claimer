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
    "4BwG2HpPRcJufENPc7rnwKRATp52Qg1KyBwTj6UPoXoDxpZcMCHrfqVkJYvg4qEuA1HoMwZC49AHSPPkCvBcrrws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tgrbFV4uLi4iF1pPGcRQmrgptxpvQvaFduuYZgLYrKp3aS5ir4uirUBGjGPoNrAfsNszLMQkqnB2J9G6PBn4TAh",
  "key1": "2fe6g1cMAmShspJoXX5fKiZSc8aZDCMvNawrva64bLCs1nwgJ5Whc225NmKVRFdTWsV6kBMAMdvYYrdtVzkFpsjy",
  "key2": "482ftw5eoCzfBhamFn9TRKZUYYDB3srmbsbxJrUKhpeR3hYxB1BToX1YELyZXoA8GHpMGYcq3oehi5sD1MzWyRVY",
  "key3": "663hCPtYrhX5Grx9YrsD5PzJrNiTFEZBVSu8MnHcF2EJrZXFFWoSf5BPtk3WiKGg1vEUVTQC7U8th7pZZs9oCtqU",
  "key4": "59U6Q8uEHjGy2Rd12YeYGQXeo7ViJodB99sQsNjLiKRb35cpGuHAhvn9HJuxaatwWwrrc8hrPWTJf4SgZ1km5MYB",
  "key5": "2StMf8zdBZUjcUa4mJ9nAzrW35A6JZbCUpRf41DkfPHfcvqhKM5dbx23udH23PKauLccedrbvNhKAsQHbXT1pq2R",
  "key6": "3m68Q1RvhumuzCZFN82LxwVvrnaGggigqvtZVrQ7xXp5qMwYZk4V2K63Fwde3En7s15mVMVDGQmz4u2ujLFthCUi",
  "key7": "CnxgC2TRimuzk5AyWVCiQtYfB6ndtvsnyHUs8Je76Z3bciscDkYwTAxCD5RFQ9i4Y3NWQ9rcXUp2jTbubM58qXi",
  "key8": "2Sen6h3amAgB6PKsUkkMgC4PHssX3QBjGjRVTWzL9e82nUQEPa5iY1yvj19cZHQftec7MYnNLatrXYNPUHo9dfKZ",
  "key9": "BZt6GeC6B4G2mCa8ZSvijFeBXWHtg1HgQAEY7DihH8myv8VQLjwbWjfSdwP3TuPpLDgeijqAq9SHtzVTXP6rZdZ",
  "key10": "2YXdsbeWE7qpU9PhXX5vPriDa7KuXYC3CqZ3Azc2WrWVnVkCssbcHDw8uqWu6s2ziK9yncLsnZppscSbS3MVhRti",
  "key11": "3ne8eNuu62Tx5kfooav9uYTiyooRADy6cpaBcpNXCcxSa1ojDwF5tJ3rTKeYWXLw8hrqMmGnKEsLC3xHzDTQ7u8x",
  "key12": "4jwkxySHzdxD7WrWTq8cKNbutXZvnJhNqMJDmp8iEXUvvwF64oa1UTYGs3iqvqCx81aAgMdykUankKdAwuyXjqiG",
  "key13": "4uqbFzXfS4b66TUQQTqfxGhQcnvwFEKRZLmgTHuvYVGKrgiQnsdb6iHBTviK3cA8VTepHGEHx9ebtJtdyCLxznrB",
  "key14": "3VJUuWw1QkbdiuKgrUmPjAhSbfk7baGnJgY2WQCDB6nXyTb2fLtfLnQCxVdyp7mdHPBCZeQsCdUgbpv1u4iNUHyc",
  "key15": "dhPtSPMvkuQy4v8zuf8dTwQwiViPBxbLmbUFCLuEFtmbppxXXKENPZ9hAJVArBjSQh5BWBqTYnVQY6wQga5ob2A",
  "key16": "45nvTFfKUi3kr6SSZRM32vz2DcMoomX76ihFJpDKD7kr52iPoXfWTJM1mXgGXSTXkiTetWBJTKUeK9vMYHyAfiJN",
  "key17": "5EshnEN8jDCHHyGLHP2ujL4TaQ3pobYEXHfxpHT2aUXAMajzvheiqRevEc5Er28ooXdnzLUTK964YWnEiTnZRzKg",
  "key18": "35pzPH6iJYEcuKBP9Q1sphNLRjUDsuBk8oDpgbM3hTxJ5jVt26yuE4z1rafZLWx4t3Zr5HtYNeZ6Bd7rJcsXNvHB",
  "key19": "4UgCR71a1shLf6GWZSovaRnZ2t6PAPMGF6HqfMZspLBehpZbbv5D1CaSksbWVTy5cqamxpdgvKfL6aAmvfqqgoth",
  "key20": "2SMube6rM1vLVhrDaey1muxrXJV41QrgCpBDxQg7xXsqvLTZb2eowb4V4jTYghbxHDer8oAwpUV6CWgYsKnkzron",
  "key21": "2hRwBwdRf3Ci7wCEGfdTd1K5Skoyt5xgjgwYMZaTBdxZwc5fwzvJQu58Zuxh34udzW6YmXuKARNnej3ZzyDa89C",
  "key22": "FWxwS2XCVEubqDA98nJsSY33t2H8Jcu5Vh1tW3ENofGP2yngXbqPALnFcZQi5d1baroWr9f7XES6K9ffzXZSr68",
  "key23": "59jSd6Ko1PUgdCi1e9csCAK3f28GPm3Jkow8cQx41RT5WPFNJwZesQzkSvVAPP5MvxD8TNFEFQDWTrPZDQxs2R3A",
  "key24": "32nBi7zWCRM6Tn3LsGYvzkA1eXybAhQvqhkcNp4aKBBzjZoeeCerA9jLAywzujs9CzTFr2AjW89iqP2o4RmXxJVx",
  "key25": "349xVF65rL9Mnv1g8ZgWemesrZWQmZ1sLuWwmBpDJohnFPEZ6JXSKxxtiQnS5b7NaQX8JEr4xVuitNriNDoHPyJS",
  "key26": "2oSSRipLk7CFpZm1Yp6WuKSkfZeuLzhvyqPS8r5TUQ8prMoRXXHigsmo3TTy4TwbZKVkh4bmub7GDGbgnqgee7T5",
  "key27": "3HugirNkzn3u3GQje6gBfJbddP2j9jdmpMLk8WxG6Jexqu8V8DutjHppHaA7yNfbknWbLV29va1BL8qGGqR4t1Gm",
  "key28": "4U2fKBFXvG4x9EKv7w43oKVuzNaFxk6FNNp4jBXu99WB2XXfjsLhLPTkNM7XEgFn7KDsMzaxMg79SdVjWGaxb3bP",
  "key29": "3hDX8y9P1ogirhsmJGDtxiRKY7F1ujqJT127THKGTD8gdjZ2DvoSfYYxU63hRPru545J39pd92zq93ZZaAo9aT7",
  "key30": "4rHQ45rHmWkCfM4fgkwMFagP9taZxVz1rzTk18i57PV36Z8DCqPtNAhZfhjdye1xU3d8RDF1H72ffNaEWgGqUuuV",
  "key31": "4frWBK1Kz8eSGUz9qiqmNn3JJpvpHuJKkSAK3W2NEkphjtVuLpnyMYe5LnHjbKp3EHJHmqGVhqCQwseufUML3f58",
  "key32": "7rFJRpSGqFPhDCYWjqdUmFGYt7yxZrNcxNuh2ht9fnkM42AcwBWESYQYkwDxKnrXnf8F4PPyxJE1StEKTMZy9Wd",
  "key33": "66fPKt3tb8euuVi9Jzmcz2nor97LvDV4mdmLvPKhLCr32V8a8BvjGFqLJhdXWo2kxmMxVyRZhCGnoiDV9EAScjzx",
  "key34": "ULePvPZPcZo6PAJ2rrnM6gKrpRuSwBHgb6D3KxNsDVx7m2S1w6SAQcpm8Rkcqz8xQ3qwEUTJ6fhPWGbbx14ppff"
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
