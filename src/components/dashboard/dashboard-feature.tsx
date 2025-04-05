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
    "22MWVGpHdRpXb4j8qBvK1orQ4V1G3hzQ1QNuFUhjMrCYmxAw81cNcCigCGgZTqQMSvps4FCkYYF5MYN44uCN6BC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36dfWu5kpRWiGhbAq1BQLbc9SuWExVqNyWTSVfDSbw5rG3QgAM6pWjaTAf5kb4bpShNpFhVxqoG5DCAPS5U9gtUx",
  "key1": "2c75HXeu19haLcEkzfisT6qLZkuBYN4gRLZs5q7vG2vyxoz426P4VyZ1VKHmGfgtvpdH3sV1m8TzxQTG4HeNgQai",
  "key2": "3UR6PHegp4EjqmTG2fWV4Z6To9VE7iqhycYWD3RmQZtzQUaUjG8XDCLbxG8RXEYX8RdqGhZwDcPGaMJqpT7mcHhP",
  "key3": "52bppCzdmHNxucPhwRjvVmCgY6qBCav4YCEUWuHP6Z7GgXErSVioiN5seGxsZGp4qnrEVhKb7YWGjXFbc7hX2css",
  "key4": "4L444a2u7m7hGDLKATraHxBXBSoDMUwuWfmaqHXg5HX1HSqjF1DEXuvjDZk4sHxerb9xGS3EEq6RvDb7Z4cbZshf",
  "key5": "3dS9nV8xHyd7zyEDaq2eVmEKCNoDtXSxaagVczkVMoxzpog2Avw21ZSo1cLijby3owbfKitW3YKUnLDWLaUP9Bcn",
  "key6": "5voRAMfqg1DRTa9HsappVK1v2bx8U7aWvELC5XvznY2uCtNHxXeJEsekV1r4HXbQgFktUKBaFwstFxJkE5pRtLo8",
  "key7": "48xiYQQSivBWRx4UQo5koJnEXyci2xiN6iZZSieMdmvVuat4D9dbHJ2TWNaHc8LzWpfQy2HeGE71W13moski7DmS",
  "key8": "4hSzkHxn4crGPRUfnsdcdADtoyK69AdGYdYfwNBuxDR412YCMDvB4B1D8GcmZukVgn9D36Cc5xNiu2foofbx8sPY",
  "key9": "3mQXma2TCaCzF6g4ULRDFi9RZyQwzAW5WZsucuCJEJuKwx12D7DUh3xQWGxHZwyCJL5tAhXjhKmfwBEKJwMptpy8",
  "key10": "4Uv3hUFjGCoX72J5w13iEUSw66TbQ1v9dfNYarWJMpQ1Q6Sm5PgbaeffaiuJW31bF3mJgz2cikjAcizR6PyYHaed",
  "key11": "ocxLM4tkUzf5wpTv8xtBJ768tXb9WsmsbwqxPQMEMYn6n5Ha9BSDTGHy6ERm4mqa5tWgoqkPqeH6K1exkJtfbdJ",
  "key12": "4iR2BiZimyvxb9bbRNftXTFW6tACR6jRdrLF1A96WV78TdmKj9HVU1AjCgMBTno7qxSnzj7uSc7pWWVnDJVhMDYn",
  "key13": "5qxhn1bz3vaTVpYBYNh9bZBQqk2ogTkMhjHF3LvhPGuNYtHVU39WK6LnYtxYw3zP39PT3D83vCKm261DbkA8Vhh7",
  "key14": "4nUfHFxxQXHGzmCboSJsVug86ihf7jHe98fgQ73DnnxTty7GYiiArEfT16Zj7A7tabdAzH9P3wfDsc5trCrMqqm9",
  "key15": "2U9NkREWbmfUCQ9YYh9nV4gHBLYqW3ZFoBr2d5BjS22kRw2WQFawPU87xKTGeBavrDjfNmW5w61d2JwQqCHeVqEo",
  "key16": "5ijmQ45qQCMGAoNWB258f7FivwuAGHSFVwBNRi4LFBJHfV3NKQBJ6gq1dax2ubvkWqvR4A5XwCaR6jahvrrDDYdv",
  "key17": "2jfU83gC2qGBsTrDK8RSeZKXkomtvLA5Euuc8eoyZXPQzV7YmAVuSDtKcUgGpjqzL4W3yX7fPS69AFqmRwUfqHTW",
  "key18": "k5kVmTR5BrCCTsM8HBq1xDUajF2rNVxsbsFrb45wPZ5RjtvHBN4seWqups3n5BehbxWm79njruLixULm7wpPUhP",
  "key19": "27r1TuYM7aSGWVk1gfXnVjh8AGMmCDNjyxi3T5VezXpAfVdYfCGxFaUSAnvAN4yH2z3SVbfwhcfXNcEsNjGZLtve",
  "key20": "64yn5iq2euVieRrdvv9ENLH8BaGFepU6kUGh7L5Cx5Md8r4HWFbzEstYzb1sufH3VdUB3f6sS22TbC3SYYsspQhb",
  "key21": "4A6oUrq9QYp4RfjzsJzD6fCR3VZxParhrYy4DWStFTLVBTZfivBderLdbcGWSVzzuKsFN3EYMAtbB2Z4aFGz23xn",
  "key22": "5tZQ7cDdY4xWr3X8wwMAUAehDp2VeFgRC9GrWYrNaPi9xkTrxuhbQ8tKBSwRBdCDNt6onHAFieLM97TUMcQvFNRP",
  "key23": "5EsFjtRb1taTYfJJ5kQGx9wQpuaVxpS56s8yauHJjCRduUoJUqyDUTwHrzt6oRQZCEP73TVarj5LPjbHJFUmLmjv",
  "key24": "62RhACQP6JYVyxZ7x3eBFoXQEuerg93TxiQNavShFw7inZeBBdhSLEGNfjFPvWBXhjRYsZmUrgsmikhkvZUAwQax",
  "key25": "573WbRMYU4uxowPV6RW9UGQY6LxUmZ8HfXFox2s8Lwnr28iyxSaw32Rv1pE4k8rXKU1mWEgF7tURbqpASpkePJhr",
  "key26": "4porQjPWLjEnv1vNXieRU917aHbhfs2N9HJ8eAeDsrtmmGj6D4yW6f8w8F9RVwXJjDWGiNg4xqaR7RnhAPwQhrLb",
  "key27": "4QT4SKmojpehF51EGcYfJgQJY8xCFE9TwBS59qU4EKV52Qx99j46rd2J9HbS1heoDE33PuS4v1wmRhTG6kgS2oUu",
  "key28": "5BzmndbLoFRXmitmFxPc9fNiw1bKgjs12vPNPikKupP1kR9W5c7huVX7cD1mxHWdUkqRVodz77d18KUz2zrEzoW2",
  "key29": "4ri9LmKKM6bbdSzYThx955czm8E5CUoRjqieP2uwz4892xE6GQ6qi9iJDczvP4uMbAzpr4Awcpy5aQMxvAarpAFa",
  "key30": "5xMgqx8u3sBvQG4Go1fezEg4fPLJAgbRHzxHsu3VFaqenry9ass1gZLJKeSc5W6CjiH24aYZh4p1G1F7HYmHmuqz",
  "key31": "4S8hKgENHrAX2xLwqWM15rCjHdJEuF7W542En5JDosebi5tawgL4Y68bYxzfdGJSAjpDfkPZp7r6eAjAiJ4faJWJ",
  "key32": "4US6v8J1LU51MzdYeSTRPeAinZBRQf5uCaQJZUrm1bJMebsGMXhafzsRnRcQDiXWPdQKWLGQSbYnQ6ULu9mK3gAM",
  "key33": "2KSxw4tYYY5XGfBBxZN6MYvWTUzXx44zN52XtVPtL52aJZgSSubRu3RuRqHCSiff6DaKQCgFkSuFW87ei7FyrsXm",
  "key34": "5NLyjtS4BhiVgN17bvENt9EXhnUP1KrW7h8HYXWWftGkNV8KJiGgd62hmk6pt796WUh4ZUVcRw48kHBCb2cRWERV"
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
