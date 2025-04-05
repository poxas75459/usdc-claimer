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
    "2X8ugARPewVN5XP1obJdBG5rJsjrhmQWFCJvfZUsear6d3j5vmDkRpiT4o5RXqRcxWgJjeZcJSv2jUqafjchbdTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QjuU3nRnPigSezz8sZKqYW42MY6MpS6h8vuXaQJFEsWnP2DtoBdboW5YA5TnaTjNNEBBbrp1rvUXSywUc5PuxGT",
  "key1": "2yS3gyyqFoZpfmyzbKP5qcAHzZoM1G1vXqhWxAntat4suAmKtF2mjAn3zkA1vTffQgooR6WbhAfta1iqXYRQEoRs",
  "key2": "2ftPC5ApeN5M9mHggWfThn34KyRoG8hhcc1hcwwqHuwMsjUnUzY6UjWdveR52F8ffdeo9rSkbN7ViJpWxtX46Xqd",
  "key3": "3GMvkTyN5Vwk4UcaoVosQ3xCGyr6NpmKWwGXx8zUSF5QxUxiETVV89n5VRcnbS1bsvbBiLNiR3CGe1ComijHysyB",
  "key4": "42W8mEL6xdN3rMXh92ZBh9aopA5rSxMZsq3nevVjpQojipKfBJfLK3FpkLyx3hntRtHLNxJb1wESxRSwTiGyBkx6",
  "key5": "ASnW2NkaFSf6aJqntuPAwUVKqaEniaDL5c8APLP9VNLSX8snjHwJJHwwo9TcB7Fr9TnJC5JZxAAxkLLMoBZ1xdv",
  "key6": "5rnYB51omxw3RzDhfwD5hNgs8w28WSs7ur9ziNUh36DcXxQtY31eMtb9qWedkwofN4wdDXTAQGfz3AJWMEs12mHm",
  "key7": "4waQWHu41zxAMBdVpqqzyLLr5VX5tUbhqStWwFFAdo4Ca11eupQFjf4VanGh9Gjr5hSrL9AVR7mJKSAmNwFJEkkm",
  "key8": "4pi6y1yyEAZGGxx2SpBiYKW2C2VZUGoh4cy6xUkBzxCEjTgbHqFvVyz3Qu2uYGEHuBiViLwyReAUdq9ffKGbLARE",
  "key9": "4M62Wma5GLJ8bhhWAWnJySrPyoXRCLUmnt64ThZ2ZBbsHrySMvwWhdbLXhwHmkJroutLovLZyuD8PBN9TRgKVJpp",
  "key10": "bqB8BqLJmo4qpf8FKWeERRe9XdjLWmYq74JZkcboJjLMUYNFcNBszVWqh4UWhQWVapFZ73v3QPQUNFSAowFwWe8",
  "key11": "3SY9QGKSuhtVRZq7RhgYKMqnDwz8YXZch6w5epUzhnQVsX6oNNGejcoJo3tScXjEZmK8TtEuUYg3BBDokgdGVNJV",
  "key12": "4j2phRWcTxRscsQZ26X56VHe48XUixjGEJ4aqtqpzZ5NDMR5iprwfqXxq7CEL5ukLz1j5jhsYUHNQU5FkBygqrhp",
  "key13": "5vinLyodGdgbm2b7xFqAL5PRt1BNKYT3VDu6J4o3dmohNnLhXb3EMbtooz92L7iGVWfnwT67YvPkxrNxmDyAVyXo",
  "key14": "4T5fVqNqHhSS4nnLPyAwYcrJn17JvvU4n4wNCszaBq2KXNhErv9AXojLNjveYqnViNqwhSa9Mx2enVq9veuMZWx5",
  "key15": "3nmdkaBUWGbSivbVFo7kL24z6kHiMgpMz8R9tuSAHruX94SN2rdJ9k5EEFGHHaAm4DFaPUqJjypm2HpAbojaJVRh",
  "key16": "2s97RwDuZHCN77C4U5jkBkSsrSnY45umM2DJWzwukfVS17NtCeLFsKHrEAdmPPpbonMHxEq6RL75UYEEbbNDzsq2",
  "key17": "FNiUFmKkLJBStfXmb4npEyTCrrxqEiavZHV1yzHqE7A1ZMR9BAu46eqXMdjY7iMheQ52nYr5wZxMVTBadrsr7zf",
  "key18": "58goCUZxERf18tqmzU1Q5eScJZowJNbLFMZv4B7msGmTSoHKs1AKug1p2CgrCNHyR87PHRH4Pja82h7P5MmfkRnk",
  "key19": "3hucXZYzqHhekc1vKwhUMZc63tu2W6s1HjJXwo5KA4UCdnxdVMqqt3sMoBE84HgGLjANRLhqw7fY66aq5PR4L1MX",
  "key20": "3RZXPM69TtyeipoSdUQPJt59PPbkTvPzRihZJSw51guorZoEUkv9R2ZxfVqcjsBidNqAnpjs4gSRpZvtiKJqCR27",
  "key21": "53UfmKnrEQuFdp39zw7ztGeQfDoKW3nJyty9u78r8bMV51eVJWwtyVnuNDdA57dKPsY5BnNqScZBeXXa983VXVWD",
  "key22": "2n2oAUDqzBS7vU1RhH8PB7YNo2Wjb1ANJnKMhbT6FGynPJW7RSSJ6PRBoqN4FwE1T2T4iH1cgG4jFxu8KpD5o9VN",
  "key23": "3tH2aBnNpvbZhA6qgnNjZmnZ3TUAmPM92HoZvwjBmL1LtVVTTsnt3xzmGf2r3evPr9XqkvJwp4mkP7H9pGGK8UQj",
  "key24": "2gSxEANFSj8S7KnruPHj6ymLuAyEgAade72NY1PuNwKjiqUWpL1QWsNkAvADt9Jg5tLkKMqqsWZvREiEoXK5G4fC",
  "key25": "5LRqBCo6k36LAMWWP5LygscqL3gGmvoUQj5zjbqyo3QoJe6RniLWjgXcx2j5e2q1eoNrzcYPqa1a9HEo1bnroQR6",
  "key26": "NPQTY3dr51SYTycMXndr9cZq9124iKwpNwN2BnkJmb8AFkabtExh75bub7rTP6mxMCZpxubYbzXVWkqQqbdf1fS",
  "key27": "5HL7ZjySc3W3MMmmu8uZNREmkWYDqYCmW5x7tCHKaBr5mV4s5LHQQogp6NKmmosTGJHERFBaRgi6RgczdxgwG8s1",
  "key28": "2uTMDg6bBAvwJ2m8mouZQe6ujuJ7FRxRkEd7mJZrAML1sioagxR8TW5MSuHN4cw6oYzbKZQGX8YmSgqHsBvFUTif",
  "key29": "2wPFvGSM5W8aJN8VgiSVWvJZhi1Dqf9vBcbsYgrgDQcNzuqkBpdTXENpu7gKkEhS6LUZN6Fu91dRpWLCzF7seYi1",
  "key30": "3PkcwZk92zFnJJW7gFFTAysAhzit3mP4X9fKm35MZEf2ASrxAtQsBCaMiGdUBeeqTPqud2qXMxkwK3yw966gy9o3",
  "key31": "3ZAnXbARj8QgPm2HLswpDAJtwcntPabSAiz8zpGhWB91ogPpBqftenYmwhwDM8RDRALvfV7qjTfqg8kGQYomneA",
  "key32": "zUJBeFi1DPeqgz2UFprwrPfEq5pBifGpZR8MzoEPww3jLNEm71N25XviWpTGYLHVT3g9KoqpKFtviww7uACfpYj",
  "key33": "5ehC9GYFVsFDmB2gB4XnmcGuPaABGeLhWxmYsaeZ9nSCnMDzHhv94ST1QpRJTnUuGyTaN7FeA2Dph7Dc5AsaG8jo",
  "key34": "4xmqRP86v4vRnA4XDpD8CTRMWH3Gc55vrKHs7wLUCsLn4MBGcYwD3ecLbKeFycbkMmkSZ8edav7nr2rmyKNPojmq",
  "key35": "4eygDUZjgteEhfsBwusBkVq4EdCjS99C1EQAE5ZWsBcrkDUfiHU8Rw1NhfTeVeWHqfJqCMZsb7qU7Lx6c7bx233V",
  "key36": "5JCw4JyDnD4VaTBs3tB16TDC22cR7ZiM14QA7uM53cL577osK86hwvH2pvnFkGEX4JDghZvQ65jgXjAwgZkdYwmg",
  "key37": "2tddRxW5B8eZ28RAi9ffchUZ2PEm86QLaSGEMxgzdt7356VR5p6CkVfniCPaUrWPXDogrTdbWCLKnFZpbT95iyWQ",
  "key38": "3TWNMiuK1ctMSjBJqMcHYjK6Yn3AyW5Lis1V6coDmMQ7CUk3HQLcmnxmftDMUKZftWpqo3xwfRJ4xk918dBe9AQc",
  "key39": "PgtvVXiNaz4JhnJ7AEcfAS57F3GTsRXdiDWpLQtv3i5a7U8WdXH7J7ZWSPhtyFA2v3vR5uXc7U971MRUB4rR3fD",
  "key40": "3Hr4cEuLpCa7VJtpiuFFUgbGt1Y1JuEgpiMSHnyyKCEGz5iehpBZvZqPw775896HrZ11eCDnEeqTMhR9obTZG5r3",
  "key41": "5vwK3GcprPBLG6AJi8pVrMRdXX3LDkUFbB1WXQNus5u6NChozrrREhjs94B3Hp3VVUB7rq45rQxbXhhqwucRat3E",
  "key42": "22DyLxSK9mtbeoecXSDmAZVBSxDQDkGFGEnajr9xS2B4Q8YRzYSjAmmYhy1xDAsN6HuDqSLCQ768uz3Tg1txMHAJ",
  "key43": "4t8p2H6SmubZWJhqF8XREE3gYDYYEpW4uhCqvBQtwJ7kN2DvsCaD4dGr4Fe5tUUDEhjsuARxbBwmgHmZBjTsHSch",
  "key44": "5bAWRPvLbRssAqtBMLrHYyAa2mMejn9Z4ifv7dQJiMiXRNN8w9dyp1aLtty8XGHfd23atf49Dzh1GQtFqe7Tu9CS",
  "key45": "5eqdprR5a8A6xxCWnrCKHBRvhjpesgQx4LcWHdvatiB32nxXLWWgmXQx7Sm3D174YoxdaEJvCZkCyKWEUNcsRttE",
  "key46": "2YZjrXc3k1Z7FoTLvvtSqrQB7xExJsvcgtH4Xqeusr881zE2y6ZsXKJ8VHCoYxgA4H14D9U9B8gx8HHEnR689QFn",
  "key47": "2TiBnVekVbu9espocab3tPTqNCu1T4E54hUkeLwCsdNUXZyyDBB3pZiRms4EoNn2N5UCRjKuXUMhcm5YaQvcwhDF",
  "key48": "3s8wxxAhrKCqgnCT2hQnJiMie4PKyYGG1bxPpd1FsjJ3ggEC1kfgF3TskzpAis1WXzps9aCQadT9ntsE4BxmWhaJ",
  "key49": "4dmoQbELyQ7gCjRpbmNo34HW7ZbPcjE9AjYS3wwMZgKnDLnFS8J66Jj9hkNUDzaia89it4LLeYYDSaguvcEBdXMF"
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
