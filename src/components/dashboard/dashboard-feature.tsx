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
    "cPJnZ1htRtbjJvdXWJUgoV8NrAAkgCRNF1Zq9inW8PKaV4vziMQUQmov283ta7vb2pdFPVWkoDccE1tCYS5nSj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dh8sapSJwqZTN8uWX6va68gaMPcgpTMJ6JnWvAMD43kR9NfcGTJHBHtUTsdw36FbeYx1iCcGvYmHoxPnCgsiNWk",
  "key1": "5Kc9gV8DQ5GznGV78RUyMJFebuXWbkFsE4b7QZMwhymUBhqQu23godEmoD15agGYc4QK6q1x9mVhR7Wssv4CP2d8",
  "key2": "4scGjNNf6tkDySCMAcpzSDRVaPrKfvW8ASjaJMNah2RYVbxWRC38zwR5XyhKVevYWCxiP2U75whrRPGUBuPrHseH",
  "key3": "3RN2gdiiwhdDPrUeWdLsucFJcFguKinJSnXS9TpHJDpmKjy9uUyEzQimTA7f29UKktrffwNCi6qiooJi7bgexUay",
  "key4": "ttDuuMZqNDJonNjtn8p7FmwnnTuCmrE1GGEDFSwz47PibjNhawHPQcBRPN9Hd9vPbK2GMih75PSMNvTJbkdrsiM",
  "key5": "3cxJvrEA6z3NoMzekiJfAgbTAaiLr44q7VQvJt89Snjhi9zUDXsvmimKPE5Fo4poGyeCxCcpBbWEkZQbazNQrUqp",
  "key6": "5kNAMc3ax5HtDsLgNxJszmW7qoEy1WatMcAKJVc5fqNMbsBCRW9YdXc66oXndznGgXBcgRS9j7vnnhN1yUouaWtj",
  "key7": "4NWHNFfhU51cLVBZW2etKEJQYQRwqAzPvBFzTJ7a39BgNSzrvThUf48ieYuuw42NSGhRWWKJCN7dqbXZBEVyefpk",
  "key8": "2ynLCWBWgeYvQ3hN52iqbprpCgH4vTGsEGsEu6BpGEX3F7EwE3YbzkRZbogaxx9dXMEjMND2rN4VrAsCo5xe8cqH",
  "key9": "Gui3LAx8DVo38XNNS8nCnEFcECxiRgKM75ez5RRguggd93Vquu4xnGPcTJ61WM3u6QrcufHzc6jMz9c2Pk6Lxiv",
  "key10": "5vM9okWkXX1L3iB7phvJy5FtVxe2JkH3ZY2HG82KRUQ2xy6uqBJzsAhpnmnpvWVBY21yhe4NdBFj5ZF5F9QMaqjk",
  "key11": "3ZaPva7Y7LXrPHLHJEdgyUQGiXQcRYXLouWApZVZMTBAwo2gHqxPWB1NRzAQGvHkj1cG8J651VJMeryCXKCwhnV3",
  "key12": "2VTpQ8XYv9SqdMP9xcJpgKaKkGqVgTA4VNH1frNeQrEJDeRc3nEvvgSW7AyM6Ygz2EwedRxQAaeJ4b4pgnVj4XkN",
  "key13": "4SPHmKWGQu8N8xAxRGCGvahJ3kQ6fQRkXbUbxjqDnSqVCxEkUvBdiocmxEYckihyUgXu1PyXrMYB4vMfFqoE8VUZ",
  "key14": "dJBAjKawwxeWAC2RLYYC2CCLEKsFncf5sNTod4YB5ah6RKFEP14ypNoGKYTbs4AwPb8xBGz2yaqmLcEgn1kn2it",
  "key15": "48pUtA1jK15V5GvvyEvuik3pdQtc9u1uhVZjzQwPmGZzQs5wpPEjYg6XkJHL627WfDfhFJfeZQrKh3WaBPSZSEvh",
  "key16": "35cyLLzF3iJHnbRMCQdhM3Ex3MA2rqRt3yQHmYwmDUZCLA58NfXa2RNfaFmk4Guepo724WGjHsJZ5mA5TNu7Xp9G",
  "key17": "5tNXgDVBG1WCRFimnk8JUprDZmER9bDCC6WeHETVBA45kKihcYpBhzwtEQrKDVkofuehwYBQz8APwFRjBqPqHqbK",
  "key18": "2kbUaToqGNkZWyYoHJA87EqpoGbWArMa1zYsLLJfchrmpUpRNC4nWzp4Hz6WiihiAKcJphRCN3RMktLkYZSezBkD",
  "key19": "5ELH64ir2F45f4QTuUWhUhYnu9L1RBKXr3sojRdWw4padoGbb4E34TgtbpnUwASeCGGmywe9MtD4vNuZ8cGFHFKw",
  "key20": "3ZP3EEdcLU8FJiypXnXWtu15EKe2yV8PwZTcWJm59UX7LsMsLHYoJtRfQqUPwoG89RaqhrJGFusx1WMTxDumcTRS",
  "key21": "BWgAfmTqeXASrQFD5tV8rpZcGBkW9PnSHKuEUgjF1aea1mmdZXPW7thFy6d3tfsUy5N29Ug3LtJoS4Z2drFMGsW",
  "key22": "4ZDWmnSoFHtPnrmEN7V3sApTfrduaeAP9KXntz2rRwvP1Xerc8AEft9ZfieXcrKuYvabUW6ybs2mNHKotKt2FPqg",
  "key23": "487aRxNfeQmGxX8mx457Q4k4m3gHPVoj4dbV5jNfu3KP9RvcpE1X7AgyxNUti1zfZDGhf818zxLFZoZCX3RonQyS",
  "key24": "4nDtb1xUBRMsH7BFftcspqcTM3vqoTjvuUpG2ipa9CAif9RyZziVsAMqwdYGdZUzYcVRoignZFTKrUdgdZnwkzjY",
  "key25": "vR5GDJYiMbSFKBjtiPqVzgmAyPxN3aCku8F2XDmfYqUzDxE9nQe6cNnuJjwEka5ZWnQyWTqE9t8CGLbLMp56NfF",
  "key26": "Xs7JmtYn75HWLtYJeQoQLzKzxWnkS8Ni42xvk2DbfpBfJpW4SFzYGCbYgjzucab8RYGgtASBds3DdqoMLmtC3BA",
  "key27": "2V3qp4RDTMLWE2vJQfpacvT8ffWdsfjqVUQpt1eBeTkHLgQBDAwAe8a7biAfb8zj6AXwqsJh7okzQUDphNSCQtoX",
  "key28": "63NHgkMGDGZ73zdCgBQ5Km8bSaKyxYXTWDQEqjACFDMQqfrXzkmEJC59XcGUgTjC49WmEPhWVYC1neHCWjTARS4Q",
  "key29": "65u9eyeFJRLVtskq97SRjACVyVgx7wrQCkhjkC4cz3zyX3BKQozvs4HJVVJFp7LMFS9MkUJCZBHtHdovKHdiVxrm",
  "key30": "5m8N9mKJqWcx5xGfPjgh4XY1DJJyuApepK11UrxRye7xwhFgnKnXH6iWmoRdnHjHN29vwqprFJNmC5wvoX7uYcrW",
  "key31": "3GaLeLDCXPF33L5kLuYTAyqeJcyREYqJPbc5imQS6WnBR3DvtfYhFj4tZuc8zahguZsht5KsXRVttH2uzGHTBMCF",
  "key32": "2xw4qKPFhsA9rhCX4gHMYe36Mx6aRTgnFS4SSr7uhj4Pvm9ucKUEhUFmWL9x77VQu9rPFerNEYw1itLiuFrWin8Z",
  "key33": "2CrUoeQqczBnrXmo5hiWDba46Hh3XXaYaJ4qiSia83E6jobQNH96prFLg3vptASXtCEEVgASKoM3WA4H9xTmyYPq",
  "key34": "5itHAzFbDMSRc61Q7fyfYcDgnefzwqPYc51qjfLTMzJrAPYbRYheUo3EHaRMBSQ7Assfrj48im72qMc5nS8GFUPi",
  "key35": "5GVogBuGpQ1YUX3kY4gxXorzqAhsnojbraryeT8CWVYpjqQ7ah3B4rKU9P8fVjGLuanMvbGECKUTKs38oe7xSRm6"
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
