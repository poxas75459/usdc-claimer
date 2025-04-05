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
    "Ly3fgsWBTupeF87aY6KpV71behu2N44oZwVu9UHeEvLc99pzrBfXE3qxSgGcKq4JxNkK4uEowe4sEtXbnop1d58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HQabaWmsJsP1TspfVRBexSaE4xzWM6QyCA4133KyqSSMhzKDbRTs36E3YHqJ4DmvPRkVaHGedEs47SoJHHZMuxC",
  "key1": "5wdyFRc6ixYvYD91jQ3aNek59AZ3TBXJHXQZyqpt6nioZZz88ycWK6CfdvsaPfZm8zfC9rHmfiXEyD9aPnT3pkeZ",
  "key2": "T6WSAswQY4vCeVTyLuNUuSSoZ9no3Z96eLvUg9sFqad31nvKZHmX3Z3wE2J3sHuXFAidmQg4Zaf73PSZ1xXEYQg",
  "key3": "5LDf1s1WUBmEv4hVyyd3Lj9LYitTNs99AdJtxBfeRhUQR2N117cgPARadov9v6NAmvHeN3avJW7vAZTkzv3SNcTJ",
  "key4": "5AsTZS48r2sNWhpsTRnKUFhfzY5y2dGxLjrQLFDCT86vxi7MwSPzrMRf223xHEqqd1hcKBfMamp2FtqJkiPqhxq",
  "key5": "4nFDwGWUJo4sGn2ip51kVSBik4GXeYbGJYEo8dniEtq4c2Y5gH9oPNHKLj2jSrXUZxrnNxvi6Jx8W8iCYRMLqhaW",
  "key6": "2YSyA5rhqCLMvhMYFWLnhjZPUUbfTYN4DDSECXVJyVbZjY4LET2GBhiXKyfLXyzGGsjey8qv8AKXcsBHjKSQ6bEi",
  "key7": "yBUdzn7kBLCs3J3cmH6QMSJWAET1znu1afA4q5xD2x9gGAwLjFEP8uQRi6CfPMz1oSLM5Yotw6X1zKsieyeb1Db",
  "key8": "5rd1TKuLwWgbSWozyuNhYPzfDZttk1vtviJcBmM61PXwv2dnLWSwzgpiQQzG8WirCindq2ZaPVmGtz25qCKGNJfJ",
  "key9": "2usQZE1rdAdFq4QWnnLDa9AySb66BmjMLb7JNGbK8GVdesceij7PPzbTpqbZCo1ErQQZvQnHV8YQXKqsRRgJ13ca",
  "key10": "wQYUHp4Fx2t2H27Q9y1WiHYWG469JifE22QLzdhZGTeHPH3NPnu1Tpza7rT2Qb1SeYhwJbfr2ut18DTs4cWycKi",
  "key11": "2bPviBPQJyaHWsvi9Hnh7jFoTtuYwqj1Kq398HmNifvNAGyHcVitD8ZEpxJK7hNpYrH8cmuR9ohpVaHzBX8QZYkQ",
  "key12": "4RxNapdfRjfrAAXu1yawkNngSR8PkscYRA4E1nhJqZQcfFTsZ6oyFeRk5SMzAoP1U28NoxEWnik4A3gnBNGiVoDd",
  "key13": "2uVQjScdrDHqLiZkhzfCUwmcU1ZcGZfknE8JXv2z6v34NEa7gJDEHgS2kSrP7pxTEJNkQLErA2r3fAsrrdVGagrd",
  "key14": "eMArhxpEGkqPwvQ679isawFQQZ2zu9uRbQ9y9hB8ejdMGdGbVFdHGwUjrDpbqZSchzTw83QwDpUHKyxFvFa9JAL",
  "key15": "2VCo41v12oEuRSBJTASRPPGhVY56EJX9bHYTiB1ZEKKxbGYkYrD1h5qSz1XB1p2C7kAmw5FshNs3EqAjGjvNRH3g",
  "key16": "w3kRM73qnKuo5sPJJ4xrCEKdwysMNTGYkXu1CWrRHsuynYBrQTUJgfeegRMb8EL16La2w4qBPHNJgpp6Ce1J5Mh",
  "key17": "5eEHmw8Y5xbEeQUrVhhgs43qbK6c4zb8pTM4F4c65ACfKbTCSyvJXP9xAKSCNPs7nKFtceTF3HJxnjXzu65kbM1n",
  "key18": "3xYAGzWbiUmMbQyYcZeoPssUhhiqjiEpXygNvWHeHkjJXRvrUTtXjdMjRhH5S2HxoxUUHMKi7udV8SntucL1cK7p",
  "key19": "PTk2h8E2zBHMNM4JmKdsFKMas52yXtn5ssFYpjSHFsoY5U6FvhkdFpxfGFvfhAkc5RCoLkPqaoGFNqb2dK3xECL",
  "key20": "3qKtm8T8hcMTFuoPprejfpgP1x4pe9XajSfaYsVyyjFvJHAnVYgVWshtHHswu5pHDCitVMMFgooqt5B4GJyy3ceA",
  "key21": "oxFwkcrWBD9zxaqjoMZDunwrbBC8xKg7PtzGHEPrp33WHdGYGdbE6iw9w3GRw51x3ZUTrBZkw5F86vFBBvMJ6gz",
  "key22": "2Ec38URbw9LtiBEjAtxjRGqq7rnKzZL4zptbdqpj4GFPFQqk1koLkfstpZz5C6aK829tdGjgjT25LL4X2mZctRCF",
  "key23": "2V3JUfr2CiczHtdFiZwCtcdoDBX49hb5Qmppfwdeecf21YEMPaNDDgMcqFzqXfMbHckXgveFEEji7dwPaRJobtAv",
  "key24": "45sbGBgSH5FTVBTFhAE3ZV4NgGRQ7UFTyiNpZ8ivteZnk1tZXXLGm3m98qJta8BciL3jyGEhKsjKbyenHEjuxNu7",
  "key25": "2CeVAGBnbB67siMhZPnjif7xhzrEw9LREgGKJNNEBej1yuSSa3bTBSZpLHsqDschLUCFrWXj99S4E2kNHSMTFysj",
  "key26": "3YtPF1dM1Q6SwPPmykehZiLM5j8NuiCej8zDquoAPBxzcsdsXnZ2TuBy3r3UsCshJHsmdi7KXj85UC1GeG72WYyU",
  "key27": "5GzMdKDiYtbQ9T6gnCtTm4nEtKMwQqn8uBKd3TnEb5woHMVZN61zFJJ7MysBRac5fLuNwdR6LtCJA3XADJS3vG6A",
  "key28": "241dnvvJK4VPN3PbXPi4CaYtVLQanjfkhfYWfeu51Tgg47dAEseu1FYaakhGwF3YzgdSTL2jeE2xpWJjAkjY7E45",
  "key29": "5MNBBXCqpu6KDaZsAAcZqAhzmkVUC9fnnDKUUAcmSwBgzomrtejNBw7gym7TkoSahxZBTZBmDNZURsLPUPtfJzyo",
  "key30": "2AudDwaZVMPRhGPgUN9o5CYjuB9TP2bZ1BvdMXygQKrbA52xVmdnEAHxTrLJxTy2FhJ8cKPwf9pECJTT54R7UjJi",
  "key31": "3ptuSms8zF2rrfS594342qHhtqmzRD4WHVfoMYdjGpbV7XCjVD8eNGBMYkxqYYHUBiBYhS4h3Nnh2B4oY8GUETUx",
  "key32": "3ECKiDyGyGdtnggyNeP3L7SydrNsXCkW127tEdth6dnKuhxCLkdNjNYQ5tPzLmN1voGSg3Ui3eNej6UKu5sjJpaD",
  "key33": "2Kux7KtJCLjZkpMsBHxQHPz9jLPsEP3atSerFCmn4KzzkCmpTtEdDVb7yPmNtuJ3m3zAB5kpTPo2q6VFiM7kduNz",
  "key34": "YRMnEYgcvBDY3RXEAcrGKdj8xcs1U3XxkJ8r2iWtjDoUTsDm837RskGNLoUGR7UsCTbGVsf1xyin1cjvjYbK6aL"
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
