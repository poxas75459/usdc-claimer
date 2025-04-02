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
    "4rYJ86WEHsq6MczoEPh8Qc45VVF1JQYGQvt8Cd6UC9efCdMhWKKnejzJDdTnBL6UsqWCv6tG2ZgpMa4iEE5ERAwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XNroYFk8kLXBdL7NY6BJFU19duhDsDDDHNFiY9SNurZentb5cd9pVm3VRSNggAFxF3o3BLbd2j1gnfWpwsf8Yio",
  "key1": "A2kaJgNZYpEez7FiaoC22WrqcjRbLgNKFCtPDaWDz4q4droXdoAh4f9zbQWvSYNUuu4zuZKYwZPavtrn9rfPUwE",
  "key2": "4Y2mgNVdrFqU5BGVmkFnhXJybt4tKiSj4TS4db19S7dUUjc6NCPSdJ2rduurr5y4L5rhStFskYQtArivBw5CpHZV",
  "key3": "2QvEf1SFWa8CSG8JRhsJx5EioR2FL3f1BSuzX5wNYvFppdAZeWF8AtPosTkthTdyhUYCwH54sNjuoNxCt9GQX1e1",
  "key4": "4eSjUhBDWNCvy8XQSxRTnB6oFqeif34D5oyNBuZcqTZCEmVSdpFRxNMREh13wMA3sqwanmGXDJvVDaWGwvuRHePo",
  "key5": "3Yhn71w3JBvRrzy4L8AKWF5nDqUEAazu28D3gCi9fDKPfn2oiGnQ7VffAHwczkZ6wF3RFNHypVNqbzk7KPVU5wCq",
  "key6": "4JBsXm6Sac6yebWoPj7VxuF6oZ391K5QJAMr4xBaXWqfCkbj6axRQ7uzjf6xWnyz7DQw6X2KFZzap6afCK2m5KTk",
  "key7": "46epqjieiEpSAMvT93twW1Sbj3D4gAdhPt26cYg5PvCFmPmXJ1Dguv3Np2zZDEGDaTZPEVGSjN6TXQNDM4iTp768",
  "key8": "3v5cEpAkhgaVHEc4VAJtThxbNTfYJFKfTNZJyGNDp1dHZ9Gu6bWKpVxyUaDBELSQV42cyD9FHeSFCJnkDgHDMEvP",
  "key9": "5KhKNR25rCkYY7UxFPo9wwKVhak5RHjwuEJSry43vWQ2R15qVadKA5bM9k4VWYEoZfZu8gaXATWRZNF51r1M8sHz",
  "key10": "53tVFgqq7iqaA6vCpcwBuAciVDAHsQ2vj9inkYwiZsrtyxK381nXEcd7pE5pz9goJJdp1J9MUsGEupkd9Lo3ce6Y",
  "key11": "5oHn2yyKUzYydY9vvtD7uQaM3hSTYvaEovGFTEnChKcPEgRDM7j9X9r157yEX1QuKyeqTrx1bkeXqv3tWBvZ9QSS",
  "key12": "MiU9CJrRgoJkjHB4s6mQNGGm987ZHw2xdMMFiXfrDEwqsXJVDhHaJr6tmWMp9gwY3dPpzDSa4XqTmXzJjkFz7FY",
  "key13": "3rDw1eGwKijKiya3YDdKKT3Fd2HXmU2eddLBBaCWEAVhyA8KCs3czEQpuAocVuPcbBYhY9b221fpppDkYrQQBj8y",
  "key14": "G9qah6jUcmKbA4W2cd37LbFVAfzToqWQiZcUPEe6Zxt7x9FTG2FMnQvbpmtJdzTiiNkQ5yB9TPCXmFk8uxzz4ZU",
  "key15": "2w4mehHtweWZmW2kLuhq6x6yUvs3sKUdSSDW4w6X6ZRhWFB5vPXJTLttfW2svbEuk4R6hG6BuQFVKwhpJdz5oYsJ",
  "key16": "2tPQejZ3dBhDo4H25NqcyRCRdrHMVcTvKx5ASr6EESTtkUzSBWaEzKsVSj7TxCYBuxMEXwstYxZvUZFzt3uJfmvm",
  "key17": "3fRxBNhDB5o86vwVaefx4scc3PqVy4n937ALTcDuiVRgLZtWEWpatG34ubZLt2NSJwixVNH3ft1BQgfLTJiyw7NC",
  "key18": "2fcsaMtM2wzDMeNHpxEFefa7h1MZKjPyu9eMVkCGzQ5RjimXtZKrQDcsASVWua2FC1q4Enr1sYRzeSQmDKzYdsad",
  "key19": "4zAp9Ud1ZNMcLq8rSbzHm4gc6FetVk7Z88Kjax4iaYZ18UVyXirZJ8nKXybU3TYWNJAQ1Vc6CuCQnkj4peWZ6hWf",
  "key20": "5TcuvR1Gni88GAEj6K7QAkqKhCJdKweaiGNqFFnfEk4WpaG9z1VuVGUaMEaYDv9j4k6ox9zKMVjmWMEkHawvdxif",
  "key21": "w86nHkS4vY7vfMRv9KnxLQKPyuH2VFZkW8nykmPoDSc7bbdN1WQeUdMsKWT3qeJM1VrPJLuEJacpgkUMD6r5sHj",
  "key22": "3ep5qTU5gdCg4xqsExtNnR557Mh2Y1BcoWy2DryvNobwby4CaaWWMPHhguQiFyp7dw6pi64Ko2t3AyTHLwj9ekMJ",
  "key23": "4cGYvKq87kfqH4fDn4iKGZzGFxceyA7qQ3BehVpLgZmJEuEqyewTwZR3ooWjyMb82v9As7G3DRhqhHDcuBU42Mrb",
  "key24": "4PosPVhxDWEKNfpW4fZ6S74eAMUxRTJY98qf79iAizfWvSTKtkgX1rNVNmRkWnoP9SmBptndWokoBqgzZPL37iL6",
  "key25": "3mN1qQewYLHhZNBq5KUWPwRZ1zrYwFEWFnADcAD8uzj8ULaCCixdc8iWdoEtVgJKY2Zz3YCL64deo6CHdxWBW65e",
  "key26": "5tndN3Ch2ZctVrsuSRLGP7FjwsgxBKUeNPEDiH9sqBecTm14JZaykXSbF3cHVdBDex3CYSMchPhZZDxD8eSmUXpG",
  "key27": "5iXDKXKBMMLgHoXitW4ySrD5AEsXmbFWcqptWiyeLcPmQgjbBZVXojMQFzLsBgtKU6orPKuVdKSKRkAMT4Rr19MC",
  "key28": "3RYKpcRHcLeoWTZrzvWTSxWe1jLbLb9AKgCx3X24c6TqopqZFAUqqCJVt5Fzcv4u9EXH2zcXhyyxaer9dvJyEYfu",
  "key29": "2ETNWhrq1yxTo4YL13LXPgsdS4puKj88zjZsUzU6SL9QhkBoS5dYo4qNRQXDTwCJgXoNUtMHf2roUjtnJWg7ghMt",
  "key30": "efCEuq8xU8jwM9hKAZDBrSfFgPejre8Ro8x7tAU9z8FCQbzrU25zhrqv7VeeCexvU9Fo6sPEFwBVGdo6bu1jwE6",
  "key31": "4yi2QDbWU99eCfFGKF5cjM6iogBRcGew2BLXERnjcc136oDc4RnkWAhH4iHodRiRYS7ARAxE4dvNu9wSQQG46okZ",
  "key32": "ywoF9xscGE3SQaZRofnH7tax8aaLpuzJ3VFdUuGwLgJRPkaMGfqDcLADe9CVR5UospSk45xpXjWwFyfmQgvADKd",
  "key33": "NgtQVbxG4CtRLb6hrfVS6qse9JehxQgELceC7gvp9Qag5eeTrtRJbrVdqyh6fwXke1ktUirpvctJGCGfDbYjCqp",
  "key34": "4DrcYV1ZhJe5HZ79N4i9BRVYg9g6v2tjfnxHCGj4sV2Lf1YZh4YTBo8igzVYBPR5E1uuvwY16UDapMWDWCJiBiNZ",
  "key35": "42bMX8gawtwfVE4BnNp6LCUz8Z5n9svvgG7aYr1Y6ejogTZZv1YWqenXBbSW1CTBrfLRFbZQfn1cCoEFiY8wEsoz",
  "key36": "5r6dMay9hYw4sGJkyCD1yx5roARxTkuPGzfPzZsrNYaHJowuz6YBMT5WPB5YpRYU4yDrsV4GrqPajeumqSZ3A6L6",
  "key37": "5jNbF7V2NM2iDoz6yF9RnmehVDYvt26iAoxnVHphYVSjfWpFEAya6dFiLuFxgScv5ZGL9ggtgqazpnRgFTMJqZfN",
  "key38": "5mW2EKy9fpSmAER8kL1TeAaDffHDckuH8opWXx1xzUtrFDDRf44NPDPuSh72nRkXebFiECLscRGFHuu7Hj2E2e7g",
  "key39": "64sNsALp9BAPa9ddqtfbQEV3T6J2VmF1oziYNoDHF8zgTN1Ku9avQ9C8npkNEpGRKMgVeMjEP7X2v36bMogeeDfZ",
  "key40": "ZfFh5W2kwjaEmBzmfRn2V7NDsqtrcnpGc5QvkauLGCQgL2gfmDbXcE5faBKfPW2pSHTFdpNwtczjE6zqV8RPuC5",
  "key41": "5vitfFamRkb9hQ3dXjyMtuAxBEd7ndPuhX2J2xLvtUsVFQLGozLtQi3ncLohjGMCQwRFnbxZ8cF2B9auJsqVEGyT"
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
