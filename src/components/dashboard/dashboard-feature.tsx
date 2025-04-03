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
    "5GR428VtyB1BVLNCvVYGUjuwv3RrRot17w8dF2FWjEe8zcCPnYZP2cq31zPYdB2BzuL4s2usyKpfnHx4FpS9guK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sCy2MYj67416ABAnKjDmM7rWbNPegUuj7EdWVwAGuqgSHohBJSZjQfWKTxkYZ4VRiRiLAspsj7fSBifWw6V7HcD",
  "key1": "2N7W4pveBGVsiTgWhntBZAVB4xbgoUkB6tsbohUTFBvp8Ne43Skpq7ymav9na1h5P7kRuoErLSnhHU4uuyBhBbx6",
  "key2": "3exh7GxzCDu5uFh1h1fo5wqrkGDQNDi8PK8vk9MWxnUefHGLkNt2dXmxgzjeTbT3CNRWfqkGCU8nwkdfpmsXg7bE",
  "key3": "5WkTCoFgPYXuHsv83rS2oJ43YUUbTNnQuqJvWRH1VQpD6SnMwtvr3Z6GFc2ERJRd2mX27EJSYkDx3wZi5HpGwt2v",
  "key4": "3yueGM78CXXhnJfSGZDGd97kEdFBjzFzgZYqH7UA4aE9Rv3r8y3Bu1TNXE8xg7U2EevF3aYu8s9YKWCbmyVMmjtP",
  "key5": "4k6u8Z34o9HjSEw9o4YmsEQjaktvm67gtTSe1Ha4e6YVrrqNEwNa1GfRo3LnKwoTCJaYRV1hZT9Zp3M4z4gDxfZX",
  "key6": "CJ253fxYGsDFDusxBpfwEjdzZrMx6YXSWBK93gzLu7RDYbXhrxSQafKx1JVTsw65ihMeYwsi9j79HMoeCFRTdch",
  "key7": "24bMNTfvu78cyyqXjMs5Wpipq43TNqxGVW8ny3cBMbqhmBcYxTwtbxHWryYA1JU3cadQe1QXziSkctW2dELGC4bV",
  "key8": "5ciVtLgrjfqVEwqQsJ9hhWWpvqVRUstrUqNa8mkHU6VAzjEK5CdorBjz5RcA5hpPBcrb8bcoQ2G5ZLMoo6KEZXXg",
  "key9": "5g9122jP4e1uA7AZvoDVdC2Rfe6veZmNP1HqcXBGTXFQQk9qEoiWehQEtMydQaUZGiBNM7YjE6oYi2VfzwQgFSLX",
  "key10": "5z7f7WdxPfxu2a9Hd1btv6qdwab7Zyt2riXUPQpBMcNsEx8E8xDSx5MR5sLEUBUndZB1kFtbeVhi38FSksR1ieMY",
  "key11": "oMwPSynK1rVM4UNJMJKv62w6f7aR4aDWhQZpigacxZEUMFL2dYpkB8ZSj52hfQK5n39jEQH5bB6QD5AprPcDHRV",
  "key12": "35gA4R8UJQATfwU4mQxAjWMcyfWfhxmeJCzAs85ekNt5KgkGQ6h9gQ5iTkNz5GwvNaSdRwz7makMzhRyLQmwCaXo",
  "key13": "3qqsvCWNadFcSDYTDDUvCjS2k8m4TyX9QH4beLLBSSs9k5SwDbZF5oJNFs8ujPPnv7nomazrZ2dE8kiVswDEtS9Z",
  "key14": "2sMYvmc297grifeCsjKq6SdsK7xiunLsBGm922NhLzHkmqyxMz6Q5srHe5Wdk4o1m8XibbtBmU7mAn4s9MKHjT5G",
  "key15": "3Yx3zW1XaN3LbhX7LDY8fbTzyrYNKJB2C1G9pU1qR9rEthKYbgtxNvxdSDSGDX4fXzcrQXd7pHJQhDz3DPYBuGfc",
  "key16": "bewjwCUnMuJXST3XCLSX6WXdhKUUaKiedTcm9cQDA5YiaThGRri59xoSakejP1FikJhvLYTy8qjCiXxcAmrKTcy",
  "key17": "uiEQUWoocwLKjvDQ71FGFnnsvUMC3bQnG1X9SH1iZ9cDoMHUXyPQNojcoz6oCRZrqU3UhVzfwMyQYv7hf2QV8bm",
  "key18": "5CqBBqyvk5zh9XXEnc7U9c7ZGHM3oJKaSuqZpnerg4JWywzycgGTD9Rv4tNEd2f9S3vnshYNpbVarYQ5Q3MkbuCt",
  "key19": "2xY7aoG2jvmfRxceBEpXD65fYwUEaxMt1WwCx8LBdQjUu5itWLAW2hWSg56CE6WftCixd4s16EvDyzax4TwbYxT6",
  "key20": "cF1wn7yhNM8bDexVC8LqKxXtkW8iUNDPnTLpaW7RtHFTLBfkeiK9Z5PfPgfHcnFtNEMYnrGZK2dHoTWCK5irVsH",
  "key21": "5wsctcmMmtZVs6UFM7tmBYz7P9wC6tED2jcA8xJuLcGCD5QNMW1KyquALbZ8c3ZJ15PnwCjwi8CbkzSzbcxpJEsL",
  "key22": "4hs2JN7SP9N3d3MgmDikxWURRwYHkBU7RhYQUPLfsB1Jizq3tdnMJms4r7KkXSaxzEoro7eSeSTsUd6KJeocMvJC",
  "key23": "GsD5JM3tPA35Vxw4DquSMweDQQpUCTYiejc3zQN1iG2DVXxdK4wVEwYkdUiUmJjWLbQc2LQsCSvQyEtE91iTg2q",
  "key24": "3L992nm1tUmkExjBRiHiCyENVgd4tibypXF6oHU1kR7Na3s1ejsxkZoBXpe2jJuVaWShEaV4Z56EmjT8UyGTzWvX",
  "key25": "2g96rcKmSDa31YKy4nr23Mi6U7oskmSkzPZRW3DTo7onRUqDenmYZ2G2Hxq44pdWhrMzKcR5MF5fvkBeDToZMERY",
  "key26": "3o49D3YnYrwoRf9ktjQyCYKkkZgsnqPvML9TZ46JT49BZaH3aHQeNyHCCKHEBgnAKiJw1D8L97e8fTxJ3rXAMAwR",
  "key27": "5rywNqpRbm9zYTroSKbZUeANmdLry4tBDWB9QFaaJrjX1fNMSDANWwQVVhHatsNvT1hFfQSzYvz9TmjSdCcbdQRM",
  "key28": "2QuxwCxU9hAWdF7gNZH7N9UMdrMzrndhntqJhSoSf1TjayruY4NayMxkeM1jAyw4iHmZZn4vsH4FtPWDRcYj3WmN",
  "key29": "5hy7VZF39MmUaAEKac4r8cft2na8h7io4pZm475xEE4NKVWEFbAwJGJ5cgm186tFz4xWqFLyLs3AikC5Sm5xao5z",
  "key30": "2x3utf34Z2MC8XsYp1Cbh2s5cFWevfwH37ekGP3WEabg6YH346mHeGFzEXutjico15x3xtSkaNKq9GyZY9T2EU8x",
  "key31": "2msZkZcB6vXakzudrNc1zNwHcxHXW7kBuMf8TEZ9GHn36AsYTEA14c15cjHBgVSWkZSZ2Tn3eHNtqjmXjdm8Z5RB",
  "key32": "4CY4KaXBcX69q12x28jWUfjSS36uLmdezagY3A3vbkKyJ2GFsZXLuWBuzQnbN6ah82g9wnV1hthEdXxXHVZWGj9q",
  "key33": "xbVETJVCDpzUx9Ra8mJ2LYF4jpFcfofWxGLtNZX6xSKkHC3PZfPup7zUhf6RaNcJuS2RPkperqm4Ub84d5AfMVa",
  "key34": "ekASwXKAmXvvtVU4zssLsjHfvJgr61Y9s8DZFFuJf5RF5xELstikZuDiXpzjqXSp7tW12DQ6BrDyDUx3pzv6pid",
  "key35": "2tzesXi1PrGDHgs8rsH233qv8nTLWMcNbFq2bDwZ5zjbTcm2a8mMDxp482Hb3SYVHFNM53N6e51rJSUQ9TDXVyBH",
  "key36": "oGuBKLY8478vxLQ6tdDmAQZBRcEmgZnsjsrnN3k8iZinjd6yBw5t4AGSqh46cYcAoHQqHmvBpTkLZvCrBjx2PsP",
  "key37": "2GZdgPjK1iHwBdit155SetdY6AgwKBV9wsPwdBxbbdb9HBxontKRUhAXHtudEqhLbYzDC82Mdh8bPcmuUpW9Chd7",
  "key38": "4W2R5cLbCSDRVbq35GzEeb77hrPXt4xdFGffXL3VXmy46xPxkXHhzczMWdVFqPRiTTbFnGK8DKpDC9Wxbv3Xjoef"
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
