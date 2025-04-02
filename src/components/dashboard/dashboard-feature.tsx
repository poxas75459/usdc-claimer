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
    "3FDiFy5HH1F5Yzf694a1NJXJ2uRfp6YKDf3uDESxfGYo6s2VL4HorGka1DmHcHSsBHtnov3bBpJKR8PLJResXf2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vC8KvGVXfcQxhNR9ftmJNRNoeiNMMutMx6U6rjj3dYBYgk3Ez7sdQ8ByJsVTkB123YSbzSTE2YLNvFraziLwPgE",
  "key1": "3DBmTyspKN4Q9cENqzVSbz7KQeknr7CRTaKHVCnSNdWpPzZYHsDxySzD3B6NpazQxmHp198Me3vNUVA4nuWiRMWq",
  "key2": "3spzAU6H3va2mKLJm6onqX1aXdbCYRqVDWCypYTbDdvUu7E6UPFdnWJutNjqrnbcPn445Sr2isxU3sEiRcnV8Y8C",
  "key3": "4kKsThaPuzB9zrL8CQxNqr1AfBKoyhGUNgkXSefCbPWPa3spmTo5qt274MBnBPFnjpPytgmFx7WzEUH4GsMQ1toG",
  "key4": "66Nj8mS4dNM4n7T7Yq8q4mThuD4AZpDZqyuS16ovHFM1XG2frcN1j2AhQ2a4UHwvAV27ptYcAx5MVxFZQ8HaJ7v8",
  "key5": "5bSJ6k1vMfufrv7CEtKV3TAiv2TRZQfjbf8HiQXgcbGUr3M61AwzEUc1PWEBjLVotuKEbXup1vvqGuViAroUbzCJ",
  "key6": "2GZgMALKFbmrf8TMuDame3Bqm7dB4E82JARxPar2adfqrbtchUPMRc4hJ9S7nnXcuf1MYJqqVBWnnkSwUEn6mo76",
  "key7": "4EvfLA9gX5JtsWKQ7uzFzwytvCBLuFStM5eP9uM7kzNPGUnraqKiA1ocoU374brwVrkdfAePSqEzubnUJ3YwtTu1",
  "key8": "2H8bWqcgjSdcUhm1W1mpwV9ebQk8gtfcGWiR4o3ATwwQjRWnNfGY2gSQ28XjTXqxGara9tMvwU9G13nCwEMDD3gw",
  "key9": "3Vsmy9orfbj82jWTzUvWHxKQu8kNJUkYAmXb2ityvXEFgqP8oMSBj9SkaJHP6nkyUkbBEZHabBnGd1nSep4W21LT",
  "key10": "2hErBcTysW3WC3Ebdn5Nkwj77Yzj8V14QATCaZoXRwj3popmmVqeLnV7W2Ty5mwJi4bzeXe4ZCd1TrYTJ4jkyxCc",
  "key11": "RJT6NsX7pGE7FEf5z6tUPsndamjMd1uLLiEfEq6RBsKZ2t1YzaUCAhGxtf5o1WCNeHqSkMtQVw7A7Y9qH5zKjGq",
  "key12": "2xP9gVtnySKsVRoWPJNyC92ft8bZicdkFRdUXB9B2q3PttDtafQUidzFZk6dmvcVVrGr3fRRD2kwvFovz5FrwaXR",
  "key13": "4tLvQV94yjK8fJqmQ6P786badmG6E3Qu6okCQmZGd3qJHtN9dWNuLXzXQEEefk6j5kFTLZibuDbLW24TrMe1R5xE",
  "key14": "4tEsjNe7EjDX66crNq79JyqcepRPbkaNZfZPMMT3H6xhLE3V9BWsXonBtnutKZgJaRscj2gwtsqxfEm3nruQvPSe",
  "key15": "4UA7oGKRriUEfGtyZVETRSSFAgDeDVqJiAnyX1wYtc1AMcRLZbNFBwC9rv6WbhvXcnGRHCFdZQvifVWV5FdoxJMw",
  "key16": "5WuDLqd147vf7exuGqCMQJLCUVUEZTSTJDtA7LVWcnVRtjqLSizrjQLZL29MZcktVshF7acFAczAynADpEz4Gopi",
  "key17": "5Y4eNzJmboNrEre31BxezssdacZ1JvMUJsZaYyUTeEiXiPFZYNb2zJkxb5o6pP2XEoEbDW6XiaEiMCL3fRQz8rum",
  "key18": "3hUngfYpMYLZ4guGcDxLtTjAcuqRAcD1r8PDYRmoL5q6fHJmb7PDLMeRnrcKcV1XiFQK7cE83WcadXw5RDEXbbvT",
  "key19": "Lz4TgM2ftskectX7hqDiNhYWne696zXtiJzv7rD2jhJJGhTnSnTA9QiVb5f3J8QEihjYFTZv2Pj2Ex8EK6uuqQe",
  "key20": "4oDxJibPXrxmEWJVh6A65PhickYkeRE7gEm8z8FJ3oE5HF1DsJGmRhMkyhdxdo5xpxaQe5RBsdeH1FrB9tGAxiCq",
  "key21": "4qapBRCP1jeCw4mD4UtzmSDbuBGqQPVoWPWZWx5iGAYZ3LC4G4Suau1kCab2MyqSounze67cBKDe3Tj9LtQFstwB",
  "key22": "3nQaNiTzAd9C9esJoxQjrzYBpW8DxLfZ71cwZpY7R8Cdoyx8EUKGHtT294XtN2cDrnL781tbukq13QdtYEHjx2cm",
  "key23": "3XmVNJHTCjSLjdUhfWjt3NR7oSFAgi9qd1sGmb31hbTbetiNb8eMzRqi4XRbg64Uyacn38fpv5Bezu1VaXhPhxwf",
  "key24": "4YDJjw4vozPDJPv16RUD7ACG288EJeJerHihyqQuXFvv2mxFsAW5sptt1FoNba9SMBufStMXfgAZG9oaeuG4qbSf",
  "key25": "2bWeDDquomr1QHzYci2NhB7wqAE35zfjVDzDBeSTsa7cewHuH6oVMgDd5yYZiEUZRMrG6Q9Ap378SHAi48LXwVBr",
  "key26": "3BuQVjcT6cDjVXePraVsd6uqAb1EVvJJ5EwAmEwgLu8t2mJiUjEytjPXygeK7kRtVLvJV1ZStrEAwLbFoBPkLqpg",
  "key27": "3LPJBATevCdsiQcuDBnQFrZtC1M9LzUNVuMcVafZe8SNebRAx6Xo44NSPkvQzEzbkVVaQ5FbE8cH7UyUPEADtQpZ",
  "key28": "2yNpiXzA15EgyYg9oL1vaLGH7LzFEA7m29MYPrJTHpMdH54sCEozQePSBcakM25tayVC4VsYxofofYVDii2Amqb7",
  "key29": "3urD4TwptCVm9y4RYn7XH4zmsVJvv5XDGStxxEhnHVGZKJbTxaQBjXzTnJhebEco6ZfmmA4kKDa3mdW2R5MBi3qp",
  "key30": "aFjuXK3SR3kGpwcgZZHxHmPpSxnc7K62faSZNyV9LsThAoLvRtNzC2EfijMVfX16ReMNqUPrAU8CL6g64Hytq3W",
  "key31": "X9xE6u1wTqwA3Uxg7fT2tk8qDprHpA8fvz8fgaL4Zz9eFDuvssHQrsczAHGaCucYkavRpJdhavid5wJSuqBrBH1",
  "key32": "3zGvEcPjqmu2L6AB987n7SmZzjWMNkPvcecLHizkRQtQTGRumbbsvfM5G6rHuNXFVrcshGWdR7R1mmpbvNpfqpsr",
  "key33": "3iKfSX2wFjCFLgiZdEbCVTKBZrgkwZM6QUcNWD4GjCiuM6NdSCjyVvMDvQfiVohsv45Tr8V2c5ru2rQ2D7EJ4Sd",
  "key34": "5V7Zhdp4VaYf8gyCtyzq1UACWY13bM9YhF9M7o2kAL6X8gg88VMN439zWAQSSfee3gMVsu6fQQwzrojyCTVsKBjw",
  "key35": "53rncs986y4RHaxNus7v6ta959k3Y9N8KZckxaj1HXdnDTEX6mX6Fbt81SRWj89bMKXZ64Y9cnSuJPSwSRTHVbyq",
  "key36": "2sNj376oEN5dc6CvWetiR2gJQkKRunu3Ar9oC2vLEhuaPbD9uZZHhwrQdg7AUnA6KZVpAxq66jagCrcdzztxW1et",
  "key37": "2YPyq84oj5f4wV6ENtiBdz1uH6iv2NS5BawdKNxa7rjc9iMoCckeRMsyRJtryVx54obuxc8U7zYE33hkJ4qzNsze",
  "key38": "5SxfDvTrsLzKv77YSh4yXrPD81GRYBZiX7sWg2KhsLwCgE9oiMpqfAzPxrv8AHh4ZNymRqhwgh4prbUvXVd9An39",
  "key39": "9BU9xR2moLb7yE4BXtEV9noF65mEozvbvsKQPqAPUGEgYVU53499Pv568HjfWobmDarpDbXsN6By5H4MztktmtX",
  "key40": "5bPmRtAcRFKFCy2jQ3jkDTh2CbXFYqsz4exxpJdkUgiE4ti4DQbiumFxwEvyGHESVaZedd6XZwrH8s3dde3jjSeT",
  "key41": "ZmU2GfwY61mMZfSzFB6U6JaFpmD8tfzGrd43oFPAGaibNQqor16fUDzNyBqNSeb7q9pABvSBJZUK4YGcJetX1Pc",
  "key42": "EoTqjmp5bfi2EbykwSjWrqHMrbAwxyVLTsMwsYqM8yk8SV2Eq9HaA1HPfgCzjtLXFjqTbWfJ8bMUy7updZkqsF2",
  "key43": "3tDJDp5P76y1pGcan4Ap37YAr9N9W388V47hKJqQdjWsRMMUpnVUYdKb48PUkYvfAjyewigXAUfoThqQLeU7oLSi",
  "key44": "5HtBaeX9ZgmPz5khsymBBJ2fC5uekeCdosbqaC7XaWkkXVc94VKFxir1fQHvzn29KAE5iv43Ps9g21y8KK52XTtH",
  "key45": "3a98LuJMEzEZUj6dk3fMzGBJLFiUQS5CxQfKht8sqV3ezjtd5hnuMzF14Kw5hyvfCoz7K2ZrbzUwkFV4Pvfk2Ukw"
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
