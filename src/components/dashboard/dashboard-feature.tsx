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
    "5iMvj8WuGnB3FBbf96faDpyMLsVoAcTBn3EsHqfzgGAunag9XQndeaR8Rq3tZiZvUCavM8CQ9YkotJXem63NGRug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8xrUE2PDzXLTLrRKfgoSTiw9RZGt9tkhwk4mejer8mnFG6mtrZkueHHUzVLF2XhFHu1CZtGbqg3PDBfkMYZVf7W",
  "key1": "2uwX1V5pRDcam1FK8TCuES1TFS629WcZKeHtM6vRd8HUkXHazuvWVLwo7eZK2wxqgFrUmnUL9H7cp4JZm1PVHz5e",
  "key2": "66i1LQPSPpvi1WwnttKUJsJe9cDE1WnkSBnJrMt3RKNQ6jxjDV7dGzYVD46U2Wb5KE7UfvB8wcieaZvcyLkoDaCb",
  "key3": "2j9uhXZEXXheTrynNubP84QaHoRzng7LS81ua9AixHBH3zKz2ct2usHJyXmkyb5tJe5AcM2wNHUS2AfPVcE4A3cd",
  "key4": "2yMbsArkdavZ7Nc7WTsHwbBH4vGCnYNMTQ8t5vEd5LbaFhhoQ3HiY1p59oM9mhjHdvuRu3jW8N8H7ErMXyGUJQme",
  "key5": "43ypcWPTAu6GBf6dCim6QFXcCMq1KvAL7YHFK4E8tuqfPBDUVupYoycanHfpoSYKZFhhhFBimZx8wkU29wDGUMSq",
  "key6": "3HAcZM4avgyt4RL1fS1mCkhypVGBam5y8WP8ET4rN4FsuEKgasVcF98z5YocsBWoACQGBpi64M6V6EHU3gLqzWk2",
  "key7": "3xrMKVR8bBxLX1eGyyT2oozoPZhQkiiqfgWQB4s8VJabCp6cw4ZGZPoZmcy3N72dmpg2Fs7R93t3jYJctne5PWxY",
  "key8": "3YY1cUoRnJuMLMRBH2Esf9vShfPhJ2gtu9Y6dffCaHjMUiFbCoayEE9JmjBaJ62VPwLYURP242R5R3YDaxS3aKik",
  "key9": "jMbWKGPvwAdrNYemPjZDuWgbXH3mhVuLPxMzQRXJhVeBeskb3U1V5FjwtGg9LFqhzEPfntE1JQRbzh6Gg42KCWc",
  "key10": "3554a3qw6orftG6T86Ya5WkndQSH5bZZ7ATUcoDxfF35GaGkK4v51TgWGmcWc15KtHGfNq4HKv9MMwGbNSbpHkjD",
  "key11": "2tUDAN1pW3cxYjiK6eVx3DaaRaUBDSYdDgQBk92NrQB8FTPRZoQwCHK3wKhd7ut2uF1rD1FVsvfbuzmpqvo138JR",
  "key12": "37iqbDgpY489kZCwPkih52cGjrNdA6qzW2QicsBTzs3t78rBWrFz5QS96NxQVGuvX2rFtGsWV3DzaTQYWa3BZihu",
  "key13": "4uxxbd7K3iLeNU1XcNsNxs2w6oRmftHT19KZnso3viKavAyuXMkbyQwRoL1M7T6RaoxbyZSrXTpyHJhHBiYQ4kpm",
  "key14": "382jmYgz3agMre9Z3GSHHEamGL2Sw4xjBcv2Q72ppffNspNC27r6aH5YQzZWqUrGS5DrbD95g47rnobJytRmnF8D",
  "key15": "2khomk7612BseTqHWJLWJR7PKH7tZDDmFR6Puvgx9sBvWjb9KzZGahc8N3wNNCWNY5qBATTMgNDrHArXQ7oKSE2E",
  "key16": "47kXrnvTM72TeZC5LyMrud6vZRkrDWmfbCVfQrCF3aae8dUyfmmteMabrNMYC9bwNAgc7oJr5NBJkCoKAq9W6wXv",
  "key17": "4VXd8iCuBJPEY6rVY7DkpwgMg9EhHh9yVFUVsQe7EHm9r2b6zesSABkCb8hV9BU27R394iFzyjXMuWNGQJwveZEc",
  "key18": "GZVaJJVfjX6sSuKPALC8cou7Nkz48pmkD9p9M3cTyfo4V1QWV59qY996zDGb7Ep2WkLKDdUMhgXkVz3TRaYu5FM",
  "key19": "GzuBMNBbNNhvCx9QKobyupmVXqcAbzZ3PiLeCj15YAQmcZxMDsUcV9xUuGJkJdry6NqnvcvGWnFVJoDpCrQw9Bj",
  "key20": "38E3eie8UmTQNABySPqd6Tq77gFyFFpkddNHq3BV4edR1PxgVLNtxQ78QccPzWuVzW6UxKu2GTkRgeS4gGafbPJr",
  "key21": "2ChzhuAiTjdvWWE7qxbZAHPzifxC9aBrfR96XvTPwkUGpgX3r5AGha9EMbdW7yR2qxaCThwSeoqNXzs6amyFwXhH",
  "key22": "Jppe2pPRmEY2cphVPwd88cY4wNuwZepCqMqnhjWaSe3vMWFqdwqL85TsrJVG5SS4gjs1vGVrHhJpi1TC854UAsC",
  "key23": "3rYxinor5RgPZM3bCSrLJyDn7Ebc2M7NsKfBN4uPxyahexHecMd4uwMmiG2aZK4sLxG7rzGRTwjTRHVvm5Rb1pTb",
  "key24": "2sq4yjgx7WRgwNhRUHeWrwosjhLY7kPYUP7VAem7EAWXq8CANjUWWCBotwLGknqXh5D2apqg74eZBeiwn5ztTKdN",
  "key25": "2kNTeVqDU5Pf29aQJ7QqYGWGh5WXLNU42AvaSWEDeu8viFHtpc1RAch35vE9tv5Hcd8YBdyS5TLS53N1ESE6Raso",
  "key26": "2LunJ2iV7HVd7ehbdzR6Wk7ZGdYuUpEjP4FnkBwSxthQ7HdjAf1ReQAos6jWcGGgEeR81QQLoBtuSiMW2La9XgoB",
  "key27": "4PzcN8izwLF5oAuP3MnRU1fBZnRhiY76uiqhE6GzcoMkKhuQm2pReyhNxsMbdMo1KTtbjfgRpDUPuzr1TbCRc8L9",
  "key28": "5JZwTepQAqoEbDhXXMm4dy7ZnDk3QTd1Uozp6Hw4NYzU8ePKcjdUQj9ozztn1ZZB9S9Tm6rxHUx1grGcVevtn2d4",
  "key29": "5bD7DfPDC8J8NhqBx1sXruk6PEAZ88joKebKS32tRSpDdj8R2zpWNiaDBFoaqjBK7dNufcuwy86RxkxtMA1fbXwK",
  "key30": "wZ9p1djQtR4jD7yXW3FBx6tJqbssNPfh5LcB5XMBGqBuBc9iftbbNPgfUnMtvBbmRURf5G8jX6TtLnGUS9LRWwo",
  "key31": "N5F14vgpxjzjfcmsSkcK27Q5wWzTy3tTN7L7LotsfFLMzT9PVBNkU38hhJfKR1DfeTqE8KG4WY835B83LFCyrv6",
  "key32": "65pQXL3w2F6g6TaANgSNQwzmE34yomsX39nUQC72iVTKA2i34YXP5pDCeS6NtW9pD92RGfF6tnnYXxz7VhE8Cd8V",
  "key33": "5PKGAo6d1CUX6SKv4whtyNKF6kX4aZvyQLAGYwKWFhGbKkcZoEGuc3XvzTzXgan2224ftpQNhXvRBHyF9jxFLwT2",
  "key34": "36GeADwdpuMvKndd2dktTozMwMvjzucqGxmrNK3WgKMYVzEW6rf3KBq6ayAygaqQUnoCpWFRjSmmUV25cB4d9X2Y",
  "key35": "4genkHL87VL72aFqYxBJsx2DeWKJEXHsTuYPo3a5K2FRAr54PvprKcRYVcRqpq259wtKRzm8gDjgusS5n1ad9wAb",
  "key36": "HxEh4DJzFueQVAd1hoo6DKey767Pbk1c461PrREyFxYpBEBH8rfo3b6KdfaBj3QELSXeHqegvgPFqG5M726MrZf",
  "key37": "3e6pYkyEd18DsCT8r6Mdb7Q8yb8aDsBKwUYeW8TDx6LP3AUFfvUxmc4t8DFrX278nyXDfSYxP61yvvFJuabgac8h",
  "key38": "3cedvaRQguFEq6KkV1bFLFC41LKeZc6wC7nCqsSwcKNex9u3pWcTvqzQebxTNyw5Nh91yJkXJpsz8W1HzZiyjHoW",
  "key39": "4ybTXbWrtkeAK7q7BcQNAjboQesoyhiNedpxi9nj9yicXMyHUnJriA4dcawcgZQSZetr6gbubhZYgXdEqrTNDCci",
  "key40": "5T4gfSH3N7uni6Ds5qY2bQLyiUHWu1UAU7UuxfRfDWCy4tqrNRvJB6XgosguMaqJzVmEdatpm7bKXyYjBDtToo78",
  "key41": "34scBNgZYXMQJLmmDDXQ5iopCAxQkbpmypqw65DQbRHRPWTbbhbgr1o4EkHv6ngH7HAsPCEKCGjX4cEzyocXzrUq"
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
