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
    "57wWJ4LbLjVRqNQnPkuhs3Wiv5K9AfJuUwqCT3LGogkajG1ZJNHqpC4TPVmQ6T8387FHTajVnS5do7gbrFmgPs8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P7qjX39m5BJjA6szHrG3BBfU6g1vGrrkaJdKtmsbhSBiGaGb6ZBg6ubammNpZEuyrEw9RY37CeMwZVYTP4DeAzH",
  "key1": "5sdPuQu7yLdqcYfbW6ZdYq7Vrg4qy17gVY3LEH78eZ9fLM1KvrGzpmTzwjf4CQsz1MC2xa6wmhFwmEPiJ1EY1F8",
  "key2": "51C9ZB6NvK2XX5C9SbmnK7GysQyy32kxbLkWpftv8U9a9qakFfPge7yZY11syNJ5g5obMcEYU3CLmi1Ry25UAQZd",
  "key3": "2UNGVFHjCsH9GQSXLvZecx2xGDDiB4Rpg3A8s7fWeYm1h4648pX4wQ3CS4p43pGVGdWRaHnfQCDfLnEQCJ15LTZE",
  "key4": "2ukZdaQ5mF5Fg86D5NEQey2i2vDiATv7s2hfxcE8q4e5GGUCBjDEZshcs1ZATnD1ef1Nf7M31j6NWq9B4pUTC1YJ",
  "key5": "1ai1t2BLmz5YYfS9LXeLEFELi8qfjwFPe3ZBudxpJK5o58rwzDBMD5ydESzTrxfH2b25HjBynbSsbtmnZHkUq9p",
  "key6": "5LEqmuFGi4rcthNF9GQPomHqE3CxZxiwtJ7tKJj8thPcVzswBbFGC1MD9pUZ1qS7vC9rKsUu6ALPLCEZxd2qHjwG",
  "key7": "42zgetx34hdrN8X26x8dHwJLmDqJoF5vriCqBR66voVfFBgBKFY3qVayqpiWqhNfuhZbKzwFcQwFkhZ7wQGpKK6d",
  "key8": "3w77q7Mc2dr4DEcYJRBx5D6FNHLw4eW7XY99UYQkpznbVC1aex2MjryVHJVoSn5wMwvz5MWmf2hqsRiv7yMN19m3",
  "key9": "4EtbsNko7QzUrNJ9HnHxZRNN4so2V5K3hPRXJY2PdjXENDUQpqfQWzeUM9o1CsM1V2JUA6HbrYYKbKn6aDpYiStE",
  "key10": "5FWQJ94rroF7Hvys1qD5ufe9xad3EZ7YLvXJY1XgH26M1KBa6CefwXHsAg4B5yjgiCaocn6qu8mRkdrL6aQtmYXo",
  "key11": "634Gcqo9RNxQTqcAHisGo3B7dXEEBMtJ7MKbS3XWVoq8RSF2pjQaVmpfsa1vCQEj6M2E9XXfiZJyNEkK3WWHhxh2",
  "key12": "42iKfrs9yWqfjcu1Ckijxj2s6E2QMoEN7CFAVeYQ4E7EgVi7MVAXdvmybRrHkN9um2XzkV6YJdVyviR2nLLB72KY",
  "key13": "ZyfvLjDZk5sm57iZXZkYzfV1KgBAR86JEkFVHKsctcQ1bXfU2nw1WUA7gJ2Xw7A7SszsSfnG3j1ZLsqe3BB4Z6P",
  "key14": "4YgDc9vfqNGbF7ebgLa6sbCZZ7tVmW3b8AWdJjNxFrbtoK6GYDjrZsDYfxqpdA7AusHAAJCMe28gK4V7LRRNvYTW",
  "key15": "2z7i8m1XKWGgbunPEgxAVHnfJBQtxxRt3e1QFZnTrH7h4jHEzJzBXA8nbzz4VxyvbCzRKEkaV6DSXLRSv1kFHqnR",
  "key16": "cQipDBrmAjHBaNT8tuhMRV8pkYQZvp2NaoFsghCpGEejuVgzN2VVyUBVzoaU5d7t8Kw4M5mXgaNMX7aUX9tahnA",
  "key17": "eykuq2KhmFeHyUbVsBRw9knb9GAFjHFUJ9t7tK4bZiSg11hDmGtJHD3AMcJE1VMX3pkdLYgPgqbgL2pMd5FEWFA",
  "key18": "3WwugKMuTjr95iLQzMuSZN6R6MF5NihWrKVUwvfWqfvLityHx3fhAQhMjdekPYHB893e3tbE93sm8YLjQFw8PkWB",
  "key19": "2ZbCHUg6dmiEFEwNLD47CKJGmHF1HRgWRZzqEwtifUchte4Mdjm5gcbxhBDhy4J633DmB1PQkMtuv4RCj3x74Laj",
  "key20": "3NiYLHd2qbAuY624JWdicsC85w9i61SvHzsnwDLQtKx2q3yvqvjTvv6MXMH5Punzwez45Wq3DSvPpLCuYxR96ing",
  "key21": "2nUWiJNpW2LZY9GjJ1pnASYsu52tHAjowrUkz9H2PnusSPkUXqxJ2qK6F8Pyj7QHZKkhfCXrw5cdYJiMNsU5xR3N",
  "key22": "5X1vPhqdARXL8K21GhftqEEWyb1VcLxvtTUBrqX19tAiNsscCpeAkXL3z4t1WpgfdhKhHhZzeJ6rkssPnbqbxqPH",
  "key23": "2kVuAUxnrDeZ6pcCQzJzzoCVoZLrA1DVLYafkEhgbRRCKmbArHsxJ6eipwYatVCcRg9aEaNR4EeaJ1dYqAcUzUJW",
  "key24": "dJjSaraCKW5N8ew5aV5NHQAovt7sUjFgb5j9e6Kq7vT4J3fQ24H7cu4VVmQGEy57g9enbxdaYHsEvsaCG58EH4P",
  "key25": "xACD2i9dLKvAbEEv4v7rBi5ynyb57FMuH4CYXmsPmjCUbJN4a3VAnSx4oCzp5XNHy625sBfKXhA89hhLxoAroSr",
  "key26": "5n7ozQZzqK1AFzZ8NM9f8moVTJvHAxmy1ypyvWkBoGZ2yL1KQFY37wTv4T3ck36vivnZzbeGxkC2qcAZzC8JRu3X",
  "key27": "49fMAiktvys8jsdVYd6bYKS7Q8Pp3zSu6gFPV9CRJsug9BznweDh9eQb5Bcy1PN6VFc4fnY7Catg6HdXEcdbbkYo",
  "key28": "4QVx6ky5qqguVkMxKgs1i3NfpesK8fgFviXNJ2HaWR6bcRcHwUFfj4vZHaf1ZeaUEiRjyQ6tk6eadYUndVST5EZz",
  "key29": "41byEWcaHbcDH2Ye68GZWtDGxDTmYdb7YyffK6VpfR4ebh9AdQu3AxEVTwkWF8GMPWxaURDCUNigLFMX7muc5ByJ",
  "key30": "3HpVBRWvXiA6xX1sQBKYsJKujqR9dtXsP3nrtg98iYuGa2P4XKXr9FbNik6uqAeAqaN4z57hUEZhVC4dGbNRHyTH",
  "key31": "51wxy9B6ZqJNRi8qxttfCf5LXxt5brouufVmVqrCtaT8BgMQAHzWJABmmHjefZTneuPUs9h8LDC7d776LKrpVeq3",
  "key32": "22ae3aAsNAMxYaZfVxyiKaPSZ7QS8NSUrye7swWqr6MezHiUkxUBaqjNCBhPKLXBX7a6vdwCpSWJEr6JtryFw84k",
  "key33": "4AFLXPyTJZ7suShNpARCjrNwL5uvrP4AJvYLHQ91Rkk5C1GaZnBTnP5BMnx2CYEpR2EvZTPrgm12d3VTnBcNL3RS",
  "key34": "4EnEu1Z8RmCoGh3rs24FeSczmuP1rQWwBWPR6p3gBi2nMwQ4VtNj2yTkjmxiXMRuXQMZX2vxh9CapZqF9LH9jrqN",
  "key35": "EREYVGWHBvtY9NQnA5Y5rqFmqVTV5rhdZWxv4sv1eVjdBTEUt6X4uXkPvPw5J9FNsD46dRZjsXCd2fujuvhwWL8",
  "key36": "4HTM6kj5Z3ez4wL3zGeTZrikkpmuqCbejXSkqLrmXVjKPzxoXyv9iacJeBcCVig3851RttyvLySgYogCMLDUpeBS",
  "key37": "gVAn24h2E4pFNxkJRVfDkJzj2oGEwkf6VUTb53bEUriyU2pU1ME65Rfr2gR6eAr9iua1r9jLQ71Nm963XoZuJhD",
  "key38": "3XJUPYiC9MTCPm7Pjpv1v6PMaXUB78XCC2U9GLmcZ3mLxUhNdAMbsLcmvFPuqHkpoeJtWRgDr82JvMhiGkiX7Jkk",
  "key39": "2BgGiqmXVAirKKcpQVwfZrRmky4Rp8yR1qrMFnp1yujm7fmnHGtbRcaxjkYGY6A3ov3V95ypNFXDwedhwGroNeLn",
  "key40": "4aPKd3YRqWfmffsqMnY6t8Nag5gXQEnS5iDYRwEYHEyLYfsdeSCk8v7XadE9suGMcwFmrY5SmNQncmuSRqRzeF8W",
  "key41": "41xC5B4rXAEkNVXHSQmJxo3BQm8sQjQwiEvxaDUNSiLM4vK7uFgfshgU6MiWVf2WawNqsUn8yTqkyWpXvN732ZPc",
  "key42": "4tFvQ9Kg9acLtrttDydgqbdFUsf2oEfzjZLZyDrXYtyUgozQeW3wNzW2wo14dGGqg2UmYnEeSzKXne1C3UbNV5zw",
  "key43": "4qosCYf4g2ZSVKGaEh3h4ZbuxHqc8bELarSBeLbWdRpTppW2fagRMzX5k74N37WHtS1Z2GYmZjDE5cktSubK9d8F"
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
