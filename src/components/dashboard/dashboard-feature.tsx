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
    "3RZKVhKpkPEJfFuWGzgGqHMMfZTWDCKXjKni24ANpSSMXx1LK6u1i7rjWmbLdG2DconbSv1KJXdtZDKsboNCKwJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U2ZNQUw7bHQ9Cb6BYvFLGwLbaPRNHR4F6W8hcdCbUd6ebV9HdewqM2yCRzjZzwDG6MUE1gC3XB4fGr38Cf6nwHp",
  "key1": "5ECLLJWSTkKAwW3nQTvDUuPDvvu7vUujxbSGBprpxWfrkEEjzJZGseYTxagNzG4uG76qZ3wppqyyvQPwanNTaAdf",
  "key2": "UPggwqMGWFZLuSbYE5mkZSCANMEK6DDo2WuEnBoiRqm5fM6qKoTF7BKLAeFgaDModjzJ8gnuoLn5UBXn3n7VEC8",
  "key3": "33MQYYL6QzhVG3dLoi2dfqjieccSbZygsiVNPiJn1GNUteWDAZEthXHGyPCJk88nMVxykoRD2kuSGtFz5n82oSL3",
  "key4": "4Cjb4xYgTZE3LaBPvgrWBsPw1dYkwJmvPkXZrSF9AMTjab64a8M48fGE1JAQDZ5iJAdv8FUckbVeXUHfZnK654Xk",
  "key5": "9KqpDFjSMnK6Ao72zyYHtqVTRHMSQJ2q713JkoUwAS8FLZb2trYShkorn2tFbTj94CMmrzqLBA5cE96jM82Rf59",
  "key6": "3kjX92XAfofF5pmgSfpE1dTo4FDPv4DTUj74KQfJRQDx6p7ghi4ueTUc2rQKXM7R8rVrTtQSi6ffQCyQuo1waq8c",
  "key7": "3r5ZmSFG3Krq78QuW62qfyUYZnmRV8esv9ojqdb1eviMGHtqburQjyUEJSxr74VXf8x3aXTU5zsXtuvqbeHN2Ppx",
  "key8": "3ZcorEqmZHSNyiSNWPVsxQ6KcAqP4Gc1o4kqwVydrSWDBdbCQ8yZaymxHNP1SiXqrmjaCQ8iXNLEzSB71rf3WHR5",
  "key9": "4Lu8qRwWjmscvxeKom4wRQpDbt9nYFZgvLJmvEchToud37suFSqUZEV6bR4aRTobMat26rmX9U3wcjrvJhZZJN8G",
  "key10": "4dvU66f3ZA4FyYFN3rY3tUERRTs75sPsMBiNqnuTZVzdFge7GnbeK8mCpKDP5a38291LoJsjEbwNWydB2nGbGQUH",
  "key11": "4qSyPRnKfbkVjAmfRtrXkCxhXmVEWcJGNTioZ1aNgfsE3RMH4d75GgfJpuzvoLbqsesGgMtc1n1fKesCCMw8eVba",
  "key12": "4TvnS9jBkxsp7ynawyvnSkTDVr4CPRZyBeMEWbP4KCx3BVAxkWNs9fB2AQg1Xyw6jbLaG5qV1hQYx2T6ccjQcqP1",
  "key13": "4HoT1DL62GLkqTcDfEzepkAYUJDuQJ8kjVYd3im9NV8Jyg3ZTpQ1wAHSfcHtkNa1LUbVpiaoRZTX1tQh2XEWYRuE",
  "key14": "5ZBhR1nNMzoFXciZqwju4myhxjHxMzd4hQCbyAUAF3q95BhYXhtJjMUTjonz285YRTNePTcKBhomtxcNEeUwKTLX",
  "key15": "2CaeNMNNBjzpFga4NqDwFMBKN5CVFWUecbu61j5qknkqoebj3yZYVFp53fo4DTp2ruoyZKsy3gsWpZGJLiCkCvub",
  "key16": "3ApBKrbpaLYg3967J3LwFBdH3xHhGqrcBXhSmSMuVf6qop4PDwE35Lz1SubgeMPpS8oL8Eex2Hxhjpu7PuZEnLEe",
  "key17": "2MgvM1XfCagyZ9xWvF2QUMTwi6YZZfGLdkrH6ZYrU7i9W7J9UUAgPZ4suQuKwxR6xsNkCiNZeTtku5uzB2SgsZrM",
  "key18": "B2rB5R9tYCMpEZZRZMxUQgjncw4pEnBTYKfpBhNwzcJM8BofeTush5zrQf6wH6Gt5UsXTTPZyPwvW8FK2FHZR8x",
  "key19": "Cc8hTVoAzieiy4QbHcdfVibwW1EjTBPWwfWNYWNX3CQ21DpeWYcp8bABBULDDypTkoiqtiSB14epxeZegjKsvHB",
  "key20": "4dN1GeZeF8wZxzLreRdcjzZtSeGC1xRAExXdeUzUnDe8AXEC8Eng3kWCpCRpnoavpFnMsbeKsDfxGSZ9kdVJDnUV",
  "key21": "3VWfdwKYVAs4535JLgP5aKbccFjkf2FdU447T1yGrnN5XvfGP5JZ2o7Lwqx9ebdmwjvcPFBZKyssagZKfhbD6ZHU",
  "key22": "5wUBJ643VQh1nTL6a6CNWfy7WENoGnxVbWRPQUaim22s1jcf1QQ1Z4VByBARr86cBVZztU8AZEA7EXUp7BbjFrgC",
  "key23": "4oMFJCMSCkz77McUAsXABvFVwjaeTpSuc24P9wD29QZdBQvrw9JK139iNKbo3jUUL1dEmSjz5TGpYjYvrXS3tANG",
  "key24": "t1F6WXPckYGG7fVDQKDMjZCEMXW56LwTx59fyfe3nkAro3Hn2BbMZYYP3bdiofikxnk5PG2d5B6hCQiDiaRmkfr",
  "key25": "4KDVa95MqUANFbd2yZm4fSzSxqhAPb4cfM116JQ8qu8DC4DsdfK67EEVsLvbTRCPZh3HCgfuULkc77SumnBPU4CK",
  "key26": "QkHiruWEjzUmAVjoPVMTMLUchc4sFg2SURqbqtTNoyQxBazfKuMjYomnAVH6DVVn6XBN5m5EMn1ykW7mzXfSXs8",
  "key27": "3ZZkDCV1NtrJzLRP4vmVLrytUfyqcb5hLhG3HEm7QfFTMus3zZu73eHK1z51SnwykmmExxZFfrx3JvKf2SJpSKsi",
  "key28": "yXMG1cnq8sGahhmaK7F1szx22Zgzfyj82mnsk4ZxjPAk4zX1VjxWHimzVAWT5KivU4DfGq2YvAdvdXvUMN83rL6",
  "key29": "4ehPzHBU135ufLUTdzML7wCDeMyHYCBoq6WxeSf4x5M6wksZCMFYXWxhBu6LDxtcxzWrxBrcxhVSFfhkM6Ef4E3U",
  "key30": "5K9yp9TjwFSwyBBiAipcbb4NtLeFgfjHShaYaRqz9UV1o8qurigafotnF4Ty3o33jxTPdp7vYcTjWJrTywEAuHMv",
  "key31": "27KAE1Hod2pmTJxfUganxNLSfFBnq1rUoPttgAKDhrgMVqv65c3YFa1rJ21vSfPfWFVWTz66ExvrcE8JB96famjb"
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
