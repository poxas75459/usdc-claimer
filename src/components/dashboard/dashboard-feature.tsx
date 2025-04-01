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
    "jKQV4CgLeFHxph1kAQnjfTfQgVo7FUAbJmqJjDJxwyV2S7v3aCVZMh1XfZA6NmntrzkJgcFmBxeVrc6fYtMQPnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2752PYppTZCcuMimtLNtGgndMp5oXPpd5SLexqxcbHoDpz2d2ZaueF8KTBVGedJ6iTPvYMdgCq8hSWM4uh4CL4qS",
  "key1": "3RyuBZTHqKNvezoWsrShTHz6dhqCrdaKEDhgepNARZ1hfxegG3AKn5THuAtiBfn5PNHFVDLu6c61tVniK9wsYgxX",
  "key2": "2CD1XfTT4rwqszdgpN7MTyUMeatGA7MEFRx1tat33Mxwp5SMRD3UPxDWAtdp5eibVPvDHa9odSeHbvJCm9RMAeUm",
  "key3": "2wLqgD3yA8eCXfSSx9Ne838FufQDSNMJw7SbXqF3XPnWAptPj3RSkVq1AK3ePGyF2LFb2Z4i7XqZ6Mrxx6XYfb3g",
  "key4": "rLVWhi5EemdYZJFyGYWECgH5s6b3B9sHeavcfpmnvEJK7pjZKPRLgsoTzRFoFrEZYXCMucurzFnPrmEmLNmpwvE",
  "key5": "3GbZBGx43KwKcaCm8pAfBYaEdSvuVw7z4bANVgy5g58SPvm5U1L8g4krj5P532Xj6uV7xiqDSb1BmraYNqmxzMoF",
  "key6": "2UEtxVY1bd9xJ3T43SKTnj9yhqgDzNdZ4iTSPyFCX3o4rYFUbHxHmvZyB2Jgr9MGJmb55QfTN8oALoofUbZpqApQ",
  "key7": "32bJSQYES4QuCdCYVzR5fD4LG5id8PL4EAuoPibQ7orPmNW8ucEyN79VZCnGhSnsNPVktcs2VPQp6F4y7gavdbGC",
  "key8": "NELFRiDaFPRh3yesZdBWxUZMkjz2w7v8wUoeVdzhsSWfTPovPRu7LgtV2whSwwAMZakBBXaxeaQ2Xxn1WhFpQqL",
  "key9": "5mH9uguvKx98ajB1K7NtGrQenBuVRwNkE9qZft4vboPjjPmoVHqbqjrpqprHVcRWwDn7aqPbnpq5GEKQjeYu2maG",
  "key10": "5R4TqnUt1HuGpYXzEzs2HGNfcvXNmgwfkAJXPY7eF9ykywVjuLk46oEa6juQ3BsL62tsZwQH7c2HezxAjBhkewVb",
  "key11": "4skVchGLPgtfKtEi9tq42nKeerw7Kx3Lue9rKTatWD4aVc5oZM7cLZBEFmz3bMaQX79AzzskMbNpTiKRFxj7tubR",
  "key12": "5fzMpFV2GgjN6JNWWkAzA7ECtXpSU5WSef5Ki7Kf7qAuYrPX94HJB2AZKskmiismrGAGwTT9Tj6eFAib1Efgzjgx",
  "key13": "2qq2yKUE8Y7J8kip9VhGFEhYYXdKGHVV9zPcM9q58wscUzkKspzVAMKXqzh7SwpEwhtY271TJmnfrn82ABpZd2M6",
  "key14": "5UBvvJZGogSnXdY6XujroiuTSTmuYc4QXyu3FfTKEMUSeR3SEknZRHYyMeYUpTYxF8Qe6F9oV9st3eGBqoT4eRS4",
  "key15": "3VS3KDQZQVHzC5ZcY5H6bCn3PEfVvGPxo8mPTdw4cvHzTYeB1E8E1LAQTdUzxVE5zh8UeRnD2KPNDymHEWTGBnoV",
  "key16": "3KU8k8QPCWvYTTyZGnH2wPG5SEpFu6NUGVv2HgBQYaWe1tRhzxTc6sMM35YRQGWx1cZvPNqfx967ByNZ7bQXdUAj",
  "key17": "5LYUW8JUQnKqGNXMv5YEPqTcC6g2NhL4RprfDebfFHe1RdDQFbyBLgbEEGBcdBzoGYAvX1YTS7kKHkk5kQSYPZC6",
  "key18": "3pvHKJoS6bj5f6mPBjbyxjGQjK8aHdUpzYfUZup2ZuynKpFxHtAgPqtHz43Bwfzr93Dq1G1KYiApi5E5frzEmWRF",
  "key19": "2LmiNtQoThsr8tpUAxoNkrTuadu7QJjRDsCrjdhSowZrqoBSjkNqjn2tJZu1WTXZWf3Ukry37u4NAEjowaMTGevr",
  "key20": "2qG5JAvkHyPqeH2FTSUxGZ3cnNF8f5x6rXadhS44Jwf9P7LxbjtshDAZL15z5Kx9p1aMo8jSBra1KrHwMaYksXC8",
  "key21": "2uznrbzARhAkXVhpfotMBkxntuTMxaUAMBGFGE4DF7Fs9EgVt32PSAT5kAgxA9nucxzE2vw7n81SL4DoQCYsszK6",
  "key22": "48cVQvmvSngc5AZBaNxPLPLTtHG7pXpCNJuCgywJbe8ZjnLjxpb9kPqggt6TJbyLH14D7BRuoFR8RmFRWXZuGjvw",
  "key23": "3aXTmf8gyEkbiWRykcyF6bC1Q3nmwXXNHRpNsYJRZkbViuzZY2T629xbCGowuixDX7nfASkrjPhmSrPaU7JUpatf",
  "key24": "YkHrutUFCQN3X5MwJRYVu9LhAyDiHjcU7SQSo5BjVnG3EV1bGsAJsfMhVpAeLARdDZCwux9UWPTSxXxqyMhxBhL",
  "key25": "3hnDGwYhzZckDwXJdKP3NHeNBFi7WaJ4UvndemrntTcXzHK7DxcVsgKRajYGcEmkWpB63Ktj7jf2FUah7hs9mChQ"
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
