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
    "5qpBRBpNhzeT5NQjBqTKBmiojfLdNhWZNcir8KnaowZK7fzdT2TxN1DzF2cgYB2JUyn1GJt3yAybGDv8igMtf7iu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CiaZcfT9Y6mXJcxcxEYG38XtnEuXZGcSMUDgG7oT3h79FqjvptBboASvpBwqgZp6M38gDbKmuqbxThHoXSqT2d",
  "key1": "7BhkQnpjcWzCEJ6MmjLE6yqL5Qq1hpsjA5FHhjggWcgZJTPpxizJNS5mjjFZ7TP3o7Tibg8rFY68SnZamA6TK4N",
  "key2": "2gbysmAXGGsQyXq8rw5f4V6XJduKcd3qnYM9qmYUDifTTwqqfij6r76XWPq8KJy8CXSJL6Q2jrT5qHMkzq7hKrKE",
  "key3": "2aFH98S4va7VfrWADE7NXGa2wXxb4YcTL6Zkhn3e3VeBv4KqTvJYmFdaD4GhjaWUgJmzyNe6cEraPN7zwgTxp312",
  "key4": "4Vm6LAtLZLd63yWVDEx7F5Fbp8LqjMdaFvjEw8cqfjRGEmMk4SeLLgg99vy4Q9Yb6zDRpEhtNEDEc5PuKK49GL4m",
  "key5": "4bwR62iDYx7ArH7nF3xor1ccKGc9aKkEYYgYrZ2t27FheQaixx4VRkT5c5MjMkLPAqq5YpqmVDgQden8rQR6RM1X",
  "key6": "2WLrMhp5kPBkw13UDL1gXaGaTr5cZLFbFCR8tCLSPaYdxGDqqsmCmrje1W3qDQbbbBcRSZAbdCChVJ7HYQS1wftw",
  "key7": "3Y3SkT8sKEP2kLUf3VcctDLSEZESDLUMCCQj8fmETLLtzVXJExkf1gNVdpz8tueDA8S8WuAcmdz1neUVv5qafLP7",
  "key8": "2QvXVjSGqvZ7RQr6TAoAwrSMGj62fbXFNTXJUnrL5GGZf7Mf5bbhtf9V984Ma2u5Yysk8gg4vsTvQqGHLcutLK27",
  "key9": "gcxyaMWSxT5KavY93ZC5o2Zo1WST2r3AGzZDkz29isfit1RU12yTMUp7Wh96Nj3a1oNk2MpXHzkmgQRjgdKdYaJ",
  "key10": "38tZqEsMkesuJhJ7cdPnUr2PGkGnh8XScbF1SrDdAWJsLHFk6gWU7n3pbkPt5juxTgpES5kKk1gMEgeUfVQnULuX",
  "key11": "5jWyTa8y72AZkA2Q8uZrXDb98NhNHhwcPeLViGgWp4EipP6JCMboYa5orLaJJ3xbkx68djH2CcGit7mckaD5DZUq",
  "key12": "4o85HYbw61ReU5CNSGwD38eMTkH3UoSFuNSepxW16EQR27FXjHmf1m6diUU8sLQ5kXG8soHnCjijNWKGqj4aRDNv",
  "key13": "o9PBaz59ARBgzDVx6n2Vy92KvxzVwrd4mokmqxWnXPkQtrAv3yntf1LgDJzLgmpqTmPNFhH4nFRfCXdYcaqnixk",
  "key14": "U2mKHe4AQvbR8W1mdpDoky8nf9b1kwehJr4LRKbwPZbWT3zxMS2ofD3kBbrWeZcyWkUhDm1AxXbAUtP1RHEdrVp",
  "key15": "5NMYxJGh6oENSidM1qwJe8dUbkG6tw6fr3i7WYo6ZJb4tvUkA8L1V4e6v5aP8o77VAszR1cQNsNMSG6GfB3PrbMo",
  "key16": "tVCpLXNktKVxh9ouSZL76JiNY66kuJKKXhZkN3JBbuK21tZ6UeQdpitjTKGBez6FauWhnczd7QTT5EeDSeo1wWu",
  "key17": "3RGFsRuh3BvY4wVfmjf8xEEqcTYpULEiUh9dnetdDPRuz3K2KkwpnHjcANfDKiwTW73Wj14zvSEXmg9ejzvBSA9T",
  "key18": "46mCwFaaFzLgV5PSHpgFWo2ovFX9PHpTcmx9C8ic8RA65d5Tbm1Pyw39A4SZZDV8sUNS2nYCQ7WnD2XHvRxU3xvu",
  "key19": "2pr6pjqRTSzCyE6twZeuXvWSDNJ6EaDAHc1W8aLTHxSA2qZjXsbZaQYu6xgFh4VP6i39E5vJoTrVciMy3nQawBke",
  "key20": "3FCSpJbojqQvU7Jq23uE752rEGfv2GY3UpR2Puk8ftFJe7Q6QG2KHp4Fc9RU9kU5bRpCWGLM8LU3mYrnk5UqnVDj",
  "key21": "4LAPiGFLi6nx1oPNRhsx1Z512spjKkVkMG9jgBrNE25pLrSp9FdFCHWHz6s3sdPEbGBTgYuxhJHgixZR8ee3HaU9",
  "key22": "34ikcWDZY5UdZKwNmMgEVUb2XHXnekoLifeBgnCo4MSKMyGkCQRTsWoPtyQpSCvJkhNuYcT5KJvgQMGbTKgnxALj",
  "key23": "wj38auk7Lb87WCmdrMkC8jcVwCPhgB76zSN9MwB1tujYgG99tQ7aPJCUKq2a1GtZCPQoC5mhkV9xPh6ffA86Rck",
  "key24": "2JPsj3M2AgP2u8KKqtNsgKuZraE9hUzj4hf6bjvBXe4vRchAAkboecGxsg6zkMuQXVL2Z42Qt7RFt5DK8ty9HVWJ",
  "key25": "3xcFtvXLq2QGYofxTQ1LXv2zoBHGejLDXZMrukJFXyDZHjDqSiUVL88RfFWtU4o7gfcibcmV471qmii2csx67eqF",
  "key26": "4DGsMmAHRLnRsg8B1ba1DzuBUU4qNhw8MgXvM3WTxowi3rYnmzYsTfcufxP3W39YAydy19tHv466zn2vM6wtRkjV",
  "key27": "3cEdu8ujU9AKENQWJ8ZgB98kA8JT15GutR2272zALox7yx267Ce8sHRpgeTRZ4Y1HPYUMgMzMhePsVHXnDBgsykK",
  "key28": "2GA3oeLeXXkqQv1zyF6d9DBpwERgcXKgWXoE2f8GrRhwwEWfpHAE7JP5qEta83fchNL3NcsAbxHaesRnz9VDdAZA",
  "key29": "esDY7ZYUsWDjN44djaQqX1B8TvdPCtgAQDQaytDnyCPEWNeAP9eDzWmQXpquRKAYVdVDFFkDWXJcMj4MPczRLQD",
  "key30": "k4K3DZPc6v6dkNXqGn4bBH68odLVavnDRDMMvKXVAJbRCcJmgsD3BxHpgJ3ZURuEr85G4CEGvcQzqEzmd6cpoNg",
  "key31": "4d5s4uFuPbM2a32EpncoN3CyiWE7Ra4cyzFV95vLGDuH3piJzokkH8DstHPs5dLVURq2vQEBAHUjmh6BYGmaXx2T",
  "key32": "2DvckVE8UnCGsSuKUDPPJbFBREq5cjWNFnb8juLj7oVg3KBBbvPAxNcmnQah96dmc88vvWR6XoAnEWERDjb246cj"
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
