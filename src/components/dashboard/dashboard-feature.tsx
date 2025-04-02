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
    "29SEhz3FSJ18ooRJoE1zDLrQbNQ1Cv3GK4UqPuPW1744L9W6UoiqJz9k7GubmeZmUs8iQu6Rm2r9NfvmRWZdD4Pn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RXaWWq4Ka2EVgunzasAUwN1j9yabB7JAhPsjRF31PHWm3e5orkExHYJm4FP7yntSjxTzZmDmY1GrY5jwDuKGQ1e",
  "key1": "2maV7Zyi5QH79BwUwdfcxdGKbFVRVDkNz8y4DCgvQWo8sbSip34ymod2FpL8ZgiiT43tWbc8pSN2PPzjMr9cVJg",
  "key2": "27diy5KcGK48sNT3W98Hy6vMguJ1pKpvbZBs6X15i3UbyJrXpQhnuA5bvA6D6TfbrYTRra2svg8VANYSXbjxqCjU",
  "key3": "3HqX3ZPEEKXXxvALAX5PMMSRChrkCiC7eKMmZMBnumugMYagQ9ztPVnC5jSnz49UWmuCbG6iwYdxMf8URLbAF828",
  "key4": "534o54yCL1dLbmrXngY5UA9Zam1RUSaZRtzVoewqz22Zt8yXPJ8pnkx6CMpcYBdgYzPdUwSopZhnA8yNNyjXtUHx",
  "key5": "2TGeMxbN3SfAZyB5UvKEHGi1Kyx7cbcykvjSPePDATuYx1S3KzxYb7FJCgSuW6W6LwBjG5FQEbbhrqJoqo223hFc",
  "key6": "3H1GTL2NNE6jKyFUfBUMACSFP82bPZXhyhRceGxyqyYaFiJGe7zLxdSpLNpUzXBDQXvYekHA7423jh4rUmEb1xR1",
  "key7": "2z8YqWBVwxSAZVrWanPCEMew8TkpA4XSx7BpsuTEps7s2HB5uzWSmeAP7NJMhkhbJLDv7xEPDWNinnDKLCgfjqXc",
  "key8": "4pyBMvH7sb1BrHW41jRdqWXYjYFziRux8n4c9jrg3z8K7FycaWCUfY5XsD5Tjc4B21PxkrJvF3au1gRPk7ttQCSM",
  "key9": "4QmJLFHuN8mKju1eWyM1o6pjsJPwbuUYz8DL8R1cSLxkEzFctz7JsTAXn51sEuj6YYJpKwXenQnVsd5P1GQDvnGb",
  "key10": "45zywMrxaAdqZayoqP5RQMjQhadU9XFhV7gsUk8tpHxaB6yjg8b5atqMPkLar7k821tQwyQb562LrQZxagp6kDvZ",
  "key11": "fF99ReHG7dhj4EjddhRUbCYpHmMQ5iXAHHWcuFJxQVtC7Mx9Q7Tnd9sQ4WaHnaSxZ9Gv87oxihk6rL8AJsBbkmm",
  "key12": "58ezpoLfkP9HK8cRQhxMqy8TZG1jzybUXJ9rkekv6tNCLYw5KTnhckgiA57V3FcoYffi5U8ZivoFBurd4DzZJQ8G",
  "key13": "4CHmgJHjqhjyzc9dox2MieeqP4Ci6F4jVWDywtYJNRjCuQfk3MHEUm497Re1fHtifJTxAvR1uPxy6LkQNUTdgEER",
  "key14": "3bigFkQ9tu7Ty35mz9vBfVryafo5N6g9zqZ2mrsb2X9CQHVgdR2T3BcCpj9SJJcgCHUTz7NDKNMKbZfMLxmUzurX",
  "key15": "3zF13tWRrpMNoKSzV1tyAHDSs2ApMFhgqU1WqR7g5NPU9AtQsYzUafdgzoGak2YChWt3qVSDZHAJVtcRnwcHyZ4x",
  "key16": "4ErqZssJkJJaHXEuuQUn8jAWgGCmMSLubfpW1mJ6a437aE4J9AbPQNRfKqMdP67xMhiHGGMA8VqNW4sSyk1sX1Ts",
  "key17": "2p1QNgAgQ6kDDns2j2iGi5bJ91YLK5bnnoGhrhuMTKTUt1XeSULbNGucucppNCa9uTGVfWeosB4oszY1j3wdd3Vn",
  "key18": "3SwELe3KwPXn8C3UN8Eg9drysXAHB12oNtXZJ9LEf7Fix9st6CdPCv8xEqNzjZBqauRypzu7B3yUapZbLAuDys1G",
  "key19": "2GB5vjQVkaSY5938oK6Ng7yHhG4dfD3Mh5rokpNRB6p19GQN3ULhS1NpxWEBLTiHvvj9cJLNu1XxmKBZ6v1uVfmT",
  "key20": "ft5BKkKaFT1B5vkpNRMscfMQaf57byLKnCDLfuZ1TdxdXekAA3sqN5PCVPjN1qCfL12H8d87qccbCNi6fSeA64L",
  "key21": "4NGh5hboES4CCmuiWovYMYGTyvbbyT2PqU6S9q3BCpQdwWibBMnxzcHYjnsNdWXwqC6hQEKMyBUHwCsCeMnXvZmx",
  "key22": "3WiTzWq5QhDgqVgaCA9mUzUdxUW6dhgRW4xytfyu3H4q7Eo4rKmzDwdjjx8uWZGGB57axyEhsRg4EzqNRLMMTjzC",
  "key23": "51xthJedfsmUobt7NoVtFcJE16K9oMBr714C6y4JZ1vvTMwMKeopk3wGfJofUXSNLZVivKd5vU446kmk9pyNtrCp",
  "key24": "YVQxHwE1Si955QgtbtBydTDYNwye2Nf8DPV7wrLrqKiHYqY74HhmoaTfkQTtWhBkrFZxRu928o21raTZuGSYPoj",
  "key25": "3EBHQF8B6qqs77sbJTBn8tLs9kGAYm3s5KSM8Pr7ufqRHb2YRCvXRjXErACnAYucJQNAt8r9T8QVmGKPyet2wKoG",
  "key26": "QyvYPVwV6GhbC2msCE4hNnBzyN9r5aXNRVhxdehNwvXtLqWjao663YvXdAiLGPQrSQZBZzYHV9HjbYdAiqfUKDc",
  "key27": "2g4u5d2XKisMJwD92LZPp6hvki8EmvjqksWvNFn1cHpj4pnmZ8Dg9cmvnZinsgvKu93WYxFq7tGFGf53MR6LQQaH",
  "key28": "5dmDYh6sH7Bc9dseqah4sU3N1P6aHo8rGpdRhc9PonTuknmaWYkmh9DhEMasYjczY1rm6256FJsuGBvwMTHncwfZ",
  "key29": "4JLLRTtAe6aW2i4762DALBqP6R85YDMFgLoyhFCJrcYLeB6ZA2qSod2kd5sAwbiDbhLK1CATayUPqkou1WHWRzuG",
  "key30": "4XQdQFmutTFv3zMjnBG15MN7c8PhS28Bm2wpo9woFRqUXz2QooQZZAqQnQSmLYMBUQuALJ5cAm9xSvJxbAxpmrp8",
  "key31": "S4PKDj3Dgk6vLDKg5eAPFNmZQJSKkUuLA6Nc6E3ed93rJg1HtEwamTg1qGT6SN3XoKRnouR8ktv9bSSk7UnrKkS",
  "key32": "2tJri4BGenPqkhXNRFp2Gw3jw2Z59uDRgAarBhcQaY4zvA5yQLsSKbBbb6SQfLtethKcSasSF2JnoKPqGqMkj9zW",
  "key33": "3xW3iCFcvj8i2CQ5bN9CdX94r95Vbf4vGLwNUPQsBELHJ7EWVrRy6Fv5S4wmPyv2wv3SYtvqYJVM7PZcL4oyGmWL",
  "key34": "3qn6iFDFqqk6WomApSKNwa85c6DKpswJh1qvPGc2sUaNYyb9EsUiBBUM7sqSc3CUwLELqAe1bu2vBGemep2aUWa6",
  "key35": "2ZHnMtpKZSB56TxZN5sJjMkCiNSoQjK8wwk7uvcJTeyevS1bM3CaiSok8vHtCDm3E1tPRPRvYhGbrDNNk2Q8rbF9",
  "key36": "bW4FYXzqDUJ6Yto7f8NZoH532tEwV6eYXW5koHJcfDrs9UwTo7KC66NtuCjhe7Z1zZwpvs72u9RG2BkPVpZhuob",
  "key37": "3fMjiAjKhjR7hSSnpoYPkLCaUkg3sM4KeJEBKoqcYe2AwBNzon2iA7iZ8SnhExCm8A3wQD1gfiqR3pHcrwwJZTmd"
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
