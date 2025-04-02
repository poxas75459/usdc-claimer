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
    "42iAqvz2bGVKAq63mEpNyqoHQx3FAA7BM1JrMEoBZrVDhkitGJd1bVgZibpJC1XZpszQXhpDuKjQ9AeLEqUb71VX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XSWXbSgCh1VYQtxpBy4JybQkPy4GpRThTEieVGvMfKAi8rnkrNG11V1E8Ba2ZVGetqkh9dA2oL3EMMXme3G8E7C",
  "key1": "8AeNiZoifTMt9zuqeRiVJaU4UkzJbruBbKHGthLeATijjsPrcMgHNEEigu6LqcatijzP7oMunPwbt7quxfyiEJv",
  "key2": "4ZahbREiLpm8eDdM8vEEHLo1duD8ctnjreqqXudupwLSARzp1jaTy3vFK1a5rpCSfdgaRadrFhqf5H49JaskZJH7",
  "key3": "5X1GhLWypsYnsY17ZBW3TG4UCn6qeUGMuJQJnVHPNLXF6Su9wX39hdVNpUMffLcRM5L9UYwZVpazaa6S62QCnxbw",
  "key4": "3yf84howz8rHfiqHMF5Q4SbGJEESE19JkdjKmW9k1EWRT6rop33JHBj9STzBW3853M8bWWFJJBetRch7Z7JUCqv9",
  "key5": "3JUiroQ8DD5y6EpzohimQqpP7zCqXp9N3HjC2hKgz6HcdSbE6P9vSminTqnwmzAfWzJSj79vPXPNdj4UgvfWUQB2",
  "key6": "8Uhnob3vjfGRm9Fztrik8kw3RJFRv1iCPX1885j6mVHoCbWSDSqiF4GmQBkVwKwTJdHZr1bhdVhYF8QzpfW1nsr",
  "key7": "23R9bckKZ7NMQxcF4ebFnytWnSNdkeyNTjQyMq3tWJKEN9btoCASM2STNHZgqkrFNocisSUiMPUvuD8M8vMhisg9",
  "key8": "3dL2fgiGSNA3BLVZoc9hsF5Drkvzsoo8h9y1t9bNprEwngXp8h3a9adn2jaKq4g7vCAgpujX1FeReXagj1Aj7duc",
  "key9": "4Mm1iDc8B8ym86iKz5n4arMW5Sjy2cEfPFWRiWKMPDHSZmCcymkAXH1ZjAxyMNSRVkTJF3WLuaVhW1JuJo6atX33",
  "key10": "63hXXuvKnRUz8eXgj4GQEuQkQW8zPW9QbTjAkeGNGf7GVqqTQmDLAoziNrfsfWCB11Sz5yHDTowYRLxFECWt34Fd",
  "key11": "4KHoFALBr3aTiga6CpVVWZLN1AhoJsGdB7cL9Netu5D7BrzWf7HoVUtZFjGjjMNLuGV4tmxnBUtowRQ2ntWEPiB",
  "key12": "417Wcc2YYKwczwX6wJ7SHN7m8H8JubU3sMJKbr2hFNJdBC3u9WEnCKQ1c6ry59ZvtHg6brPCVZse3SXT8otCusys",
  "key13": "2XbgL6bveiMm1ikMEsqBTZY92ZGJDTS9sR2g1xcmfdZpPMnBBqBttPFNah7unYGhoVTVBcf1FfPj1x45GzxVd17H",
  "key14": "2VWRhRnB9FG6CyqADvm1nFDPfdMisHwgeE9FbdZPpeTMYo58zvrc5ovUJg4zVch1u4sS6Td9EAV3CfTxJH8SDxQ",
  "key15": "5YKwqFcj2xnuUpsXUzftLRkLJMJuVy4Uw2CG69fqHqozFfKNbgN3GcPdqYy8Tp37N5QiBag7ArPUyVg21q3uYNQB",
  "key16": "5mJ6cruBTkytWptMAqBpdTAvHW3Z79Fe2LA6rqF83ei4H1hPrwFwuDShbv1An4D59gvhN9kx944tCUAZdjdj1ihX",
  "key17": "4Yuziw42Z7S1W939kcjpFnAQgjhguU4AiwZuXiG688KLXBDhb43KzYTygoNhgUkoFF7ou3uF4cCGZbfmPSYXTfWy",
  "key18": "2pEuAU99M94bBkijN1ae67BoTq81WYjvqjpdfChnLYrVAH4jCbhB9YoepaSgNnZQoc3wWZMoo9qUGxYzqejN3J3",
  "key19": "43zhHwKv6wKkzyfTL4pjX8qd6iffhhoLDAs95dyNvZrzyWqcSMnKMGHxt5axNr3mguinjdT53xxSkZzeGxENjcEm",
  "key20": "2zjBziPUoCM4LStTenkXkpxbtGjjXtRRP4mq7U9vCN8FQeRUyk72w1W3Xh2onsJ1AHRguK8DGSN9KdjrbCn2KXoW",
  "key21": "5V38Mbj3WVBgZjzwC6PPgWnCFVX91SSQnutpA7z54SHUvF2Jt6DZ4RHbiT5bQfcPkEZzTXzjniMUSJvYKejZDcVS",
  "key22": "5e469LsB2joQXcmxX9fSh4259yZqkCGtbLtujtpSd7dS6i8q9riQMAoiqPVZqe4jcFwr3N7F2jKYUAh8zxDT5ZBH",
  "key23": "VjvjEERR3YEk2KZLP21F5mQzvEn5EkWb3wMshTQMKZWBbJ9qrmZ2WgcouobPWQfc8oFZZUVcoz6gESMf2GjNZ75",
  "key24": "5Xc2XnfM2DGtNAbP2AX24CgyxrTtsL91ceFsLLTdcvpVA6CnMobENvbpmWVfyfhaHaqcRSr8QWuqDswgFeFrC4fo",
  "key25": "5BmKqkiQvkGnMYPbokexW6yp9U4oGLWm37rYYSwfVkLiwWXbnDiNifqweF4P1gbWK8nnyiPmGUtXwR338C7X4Sw4",
  "key26": "2sLwZjgDPVMxPE9Q3KpRPxwjZ4W5C7GmyQNnhgi6krtACTYa6ubb54tEcFrtMejCrd9M5tKQKKmn5gES1gyZDcWD",
  "key27": "3Q5RSAJAEu9BPvscDt9bQS86DN44wKsTchsZK2bpyBd8kGs8LtkFjBtbUkb5XPvofJMMYNuXmQsGrJGYtwY6qKW6",
  "key28": "3iaBGeKK5VASHUVehkwvfEUVWJkxF1orE9oYACPYAGigqZmmmw98hnU6fS6RTFX8Cpe85yNBVacUupL7aCzH3bLV",
  "key29": "4JFujzcqo4nM2wsKmzQPC14P1tvPLv1WTJ27WcQkxSpbMbyd9cUa4mmKdv5tNVwfrn4GzaQk51x4EyBxzEGboYrZ",
  "key30": "4ypwfzamHwGRPXVhmfJWCa6YdviVkqf1bv8v52bZ98edQuKFcFmUt5dgoBfw4WdfiJWqKDUzRPUF7cjcqJcMvag9",
  "key31": "3EeZYsJpFgSMaUGyFjU9RvddH2rpHpG8Y5kU7F13Rg91jPLaD5UntL8QLLdGBc7HCrt2jG3ZmFAnNigmri3i9FYn",
  "key32": "5EkeVoRDWtBfWpo4HGjcrDCeN43hfBEfWvVMCZoL1iCxpj5wT45qxuzvwBgE9cFd2v9vu1pXDTpLSmUmJjwyKqvN",
  "key33": "5hUkfeh7zytb5vNgZtZnQNixTVJWJQQJBQ5NwEyPRFhjbnUyznUjmasb8a76cUaNeTZszdkPK4C8oebknBeA2Ftr",
  "key34": "5dHY9vGdcQFXnToJARhZwpjdVYMWmL5KZbXJVoBNpUoGEpkXyheF6zW3ZsGRFuWizF8Hrio8YpN2x4TBrAuURzAz",
  "key35": "4T7ihmpQJj6cV5dvooVoUtFz5qtiNbH6PwodQ9Hnt7L1YocLgTTiNKhnFyd9DvgPjrEZpz3BkZhzDyzG56hcLPdT",
  "key36": "T2NEcmy3gfMKQiDdkxYcrVXBVceBWsVjcCtTkjVyCdgUShqtRvpEjhfeJwqX54HTmQa9rxKyEsPfPFHp4wdcaoH",
  "key37": "QYcvMWGrJqeA9WxCSTDwnf8pjD3kA25Hj36ocdnexmiYw9qm6Kxz5KqrNXnYmC11a97cqWecSWDMxNaUptPqexc",
  "key38": "5HbjcsKuFPFMRHC4grVrCgdkcppuSmcRxjHCtfvHiJimdHzk4YGGrwaGh1YRFpmJq88nEC99xqpueG7H5wdVyy1H",
  "key39": "U4qrT8zsV5dLeHmafVjvdcsFjzTNxvtjMTTZbchC1f7RuaTU2X9utAgdjPjL5K3f5ryMPgw5H4gTxoVTsXFUVgq"
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
