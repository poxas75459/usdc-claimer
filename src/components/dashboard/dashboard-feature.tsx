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
    "2B4pBt4stbYvurf3J1V4PKVhfLVeFePfMVxoaiv3adRd7TYCnbxiZSSuri4sSwChHKqBB25AULKTjmosBpq6WmA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iyLbtFaaJ7BieCb2KAFZq3JH8sSSCEVE2WhtmeyjLse2pHP1vU3sYuPqXkxErLhdjKpRz5Bfjf4BfvfN1XTU8UZ",
  "key1": "2ECqZeAEUkD5i84nWUH1EzvmDafXZz9rGKqQKNDoDhNKQh9F4h1dCwLAQzBHrEmqmjEhbWsHfQukxspAAthRE3Bb",
  "key2": "23i4PTVsEUYNB4tAY3XPbk5FJr5qr5n8fP9E8sqK7QAidp5YHcswzQr5sPc6q7JEzTKMNnsJGvG8jZN7VAh7MmVe",
  "key3": "4ceLesGP3UmAj955WNCvremUvtcgZxU4QDXR6rCj91L6E6GP8Rseqf61FveQq5esr5q4hdceZUqTytjyoywTVioy",
  "key4": "5XDSPs5N6E54g36zTRkvDf3Y6HP1CzkWV7tBuapbQM3VSwEjPP8VxE3pBuwRvXe7e57b9eXNQ1iUjYxNBH8MNmPA",
  "key5": "3bGz9uqZW3tkKKdb6DxqxrW4PL7NyoHPsBULpyeg8dFNB6br98cSRTH7ptgyEbnALso235DCZ9TutvazwLDQcjKP",
  "key6": "CtV4aDVUgXDpcv7WpPpRJTwhNCJBzYarPWmMXLEwLUaM6whvrHJVLSBZcvMn2FwWGU2H9dXqa6GbgYiZTngmVUR",
  "key7": "5NWWWJKwTTe8j3L3q6RfbVs2jogVXoqDURJoK3ufvpJCt87hde37jcxzHaWXxmuSuHRZKywCCXrMKrQzqrj3AEnA",
  "key8": "2rE6cpWfYZ28qDSUzF9wy4PMjxJxomTjCDXhzfHqPYtoK2XZ1iahULho6CpysYK3gcPufNcRYALuYsxYzSKXWm9F",
  "key9": "2qs7UpzwpGk3aPN3LRJp1ZUye1ho5XGYPXUZLCDcA9N1Mq1PwVqsaJY2J8urSHgjQnqSQWZeawR29343nyWtBkFd",
  "key10": "5Rc2kKTaWSFW3Psty5MN6Rqh3EMDfJg4gpr6isu2L7zJCNb5RyYNEts2e33LQKyk8vC3jy7a3vhyBqtnp3F1csGW",
  "key11": "5g9tNHAjnC97Bx3T6hTLDZDKQqPEr56Yth1MNTrGFBvDQNRxG6oj1jLE5Dg9DrnDqHoFMv8A6e5DWneAxfeNbprp",
  "key12": "4jdYgy5n5BsS4Za7uZmTTLKwtqzRtrJHmeoCAPcf2EgeV6G7bWzh5ZseqWook6gwzo6mzNAbu1QsJy926vqWkGxW",
  "key13": "5CwwvHpJJ5Jm7mTTnLSD6DdXpmaYM6U9PDnGi3eZTDL4Y5u2Pvv7abJbdduRKH2ytb9ePNptCM8W8AHEfPSku9Sz",
  "key14": "4dvuNEoPkFKYxwKan4sKP6DbrCR1HfNwFHpuZH7WsotoszgAbLuWGnaouBfQerBR5yUD3JbaYiHCmgHhfcumVsgT",
  "key15": "YeiN6UW8SUG7uVBmug6a7yKknWMsmYmsdTK8FqCKvS69mniXtje6AqZ21qqqQQ54L2mH5xwQLpVwgZuQGuRoxBy",
  "key16": "46g7hUGveXvMeW3d3M9S9uoF2tkGLGqfpVRptRQyPukZMyyNVDUvT591feRdCMinmeq5uqtUt3SBvExpssVffxGK",
  "key17": "36jSGvVW2j1Rn3QdH5hKgsc7mnUg4qGbbzoNqgLzupPW5c7WZs3XJNtR9FmzVhQJhj6zzFWnq1GQ42NVJeG5xa3R",
  "key18": "MCR8n4rCU5Uw1GJvDyWMKb2GUhoxUFv3829UujiAcE4yit1Ww8Fp7PXMnQ1wnnPiJWfwMY9UN431Xm5m2Y9xK5k",
  "key19": "24xskyEX4tYWUoqAZeYQWHLBFw4H9DAEijGVmC5UnaE5BZSAURLYXS6nwXz7fF2PSqTvWSvkAnxiuSXz8Yge79nN",
  "key20": "4y4Yrk7dSr9AMTXvguQXwaGuqGbJF4qAcdt8r3dbpvrzsmas1ZKf3fERw7QDKR8sU6yKVWPet3MisbZHp1fjJrqJ",
  "key21": "3nakbHMFT621eBaCEa7Rgg6TRssWYLA4ktUd5sMRqrVz7eC9dDUwVLcJmxVXBVwES39Z25PRMfn5HQT2ZibHomwd",
  "key22": "2CWrA4XMRT4EtQYXhYEXFojpnkKj9iMU39vvJAgES84VnNGJmEZHaoVrgtrsFzuGrpw8KkxFjBBHgHHcUb5NQAf8",
  "key23": "2tqm5GWQ5eT3fZzAkF4zDUA8o2Qy1cLFts8eXwfMfYJzDVocgQeUA9L7GjBW3fmbLYM9GyK969Y6vn1183V7Apkt",
  "key24": "4ynHLreUDsX6t36jmiku6RWruNCBHySA67sHW5cnypg6noVxdq4kVNiNRP98hjLru1Y7rtkUwGCG7LayHT74t6bR",
  "key25": "3Vwf2SRGwthZsbkfPpfKDjBoKSXoXnk6UGCAUj78u3tmTfYoSe2devzLjF4et2ZQ3M2Ngq8t4YTKzaywv64ywJms",
  "key26": "36Ce7RaFQAAFCYDVqNfP9zh1UuGJTFxkSSKN393TbSGzUogdYWCRshZ2xLDVxKMZo6T68VrJfkVXXA6JaEM1rHzW",
  "key27": "4kAJtdU6kigxuGAXTAH5g9cf5X7LbBCNktEzz5aXXGDiAQLjTJHYVMZNGWTdk3r8mfcpLt5d8QeyjQKn2depmxhP",
  "key28": "4nYW6Mv56WRiGPrWCNDpxnsDHq5gMJeetFctepunNwiFBN82FdzAGLbpBUrMkkmkZfNR4wuqdfdaLZw6b4inGB9Q",
  "key29": "fkKCzzHYN97oeGt9VWmd1tAvQw7uDSbqTcjrA1AkeR2WzkDCXxLMZVwvRDdviW73ZDnjJVfGrQgmtWrjgkkAsXf",
  "key30": "2Z2tFCxgC98s8PkXK8ByknZGTxXr3pnyGANDFjuHYxZWJrY349fu17cry1sBqU75zCtcBp6Eay4X8dHe1qzBRVLZ",
  "key31": "4fST7UcYPBXg9QhbsBfKf35irvY89BcJ8Pw9uQnoXcqCKVyzowJPiH8HYhKnrDEXpfbsMNg83pfNvjFFKNNrADPc",
  "key32": "4tPjWzixvXT8cXbn6VBWt5fHWTNsnV7NNTx9HcpYn3ixpvBfvC16Qdhz8huqd4R4MgFqYqeASA9BAfcesVhtAGfw",
  "key33": "27hG6ZYCL9DtdGgq6EBJMc2QXg3nrvBJ4pMfBvrTAd28Pv5xmz2211UWw4fKaCXuojRXzRDXPdJfFTX4JQZbGrgb"
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
