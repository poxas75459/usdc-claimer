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
    "3MnbPsDxFMn7eQYVgXW19vJPqGvp3B1FhULEcKKpfoEkNxj6A2inxiRLKCYVPjN8kEL4t4YCWtuZ7HqgfmLyUGt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HJuAcePuzL3ZqtnVYefNxQJC2tzdhPntwwatxj3e8qbfYAvXGWaYQGUkgsmJR7rTevHQ8SfitXwGPndUgcvN9x8",
  "key1": "5hi96LZowa6QD3qds8THBnoMw37pgCfBRRXmQwLB9nTQiHi9stg41aKuN4R9VgCrbcvus6aKGxh2Z95cKPJGJNHc",
  "key2": "LWvGSjZUm7wsuh54j1CYLxqAPHnMWWzokHsMsZphgdu9KYRB9KyXLQUqRKWDH6hyet181TywTuk22QKnk5JB2jU",
  "key3": "5GnA8DARjTYngxuoeMDN9kdgBYffwEJHeCQXE9gN4qUXNEzEvcRTmTf1KTU1nfsPUXdqkrj1Z2unNECazcS3UfoC",
  "key4": "4eoUX2LpsstQkjhLYjhxkz5rC6u99PpKHDNFcFPcEkeHsoE7jF9cMu6ZbNxJaPgo5ypzsdCKxQ34e68kWn5TC4gM",
  "key5": "5tQSPPCVMyDaj9yoa2TFrgx2wpkstN4n7uHMBj79sPghoYgQXcy7Kyf4fm7MPua3AMgiK7VdeFG5cuerwUCPyNrn",
  "key6": "3A2fBJckmZrVPBapavnV9bkjkpsz94tRzD1ure3K8MQwrgTkJMPrXkttpbeFL3rN46hszaq5wWgTtkwbke38eoM",
  "key7": "2iHGMJ5B5wypeqPDxSZr8mUJqp8rdXBYRovHfPCemm1eKTkZBZcdA8fjFAM2GawvkqFxUKTMMkq92ii3kFyLRPEw",
  "key8": "5k2u7skaUrLHKGBgtf89UKLdMChfnV8qrbKH5NQG81NSR2WYH9GWQsZYEk1RWDkjT6ShknX8qbvFUnTdD98DqqcH",
  "key9": "2R9fdQUNzU1DaB6dXuDGh7b7x2aByLC93AVxMSAYA2ZqhkEwMYtZR157hvu8QfUgrqUKGREiUqJB8b4K2EwYUNEY",
  "key10": "3nL7u1aZ6RKRHGkJmppHepzfd4XKcrJR6UBp5tcQvZ4F841AkkrrjWNFP3ek2CB4EJTUpKgdSjTbAbvm46gK6bkz",
  "key11": "4RWf1p75RDKpF7KX7siPqmkCTEnv8Y9GTWV6no6t8Ys6LemLrLf8SqQNHW5itDrJeQA4zH3xeUWVYLcxHBgB8uSm",
  "key12": "5dquQzQ39fPj3BDZxJGcMnvpCqWxzTGtFkUnjmX1upYTUQ8snyQPnpGJ7W5FQHokHWRW6Q758xu6WB8MbXMJBwMv",
  "key13": "NkxBCxGb1DkVkmEd7kZyCGi6abykLCJU5tJfPh8XRFRGK3Lv78eHVezAxo8A5sU81gjGa48rcyqbVi3X13UjXFL",
  "key14": "2kqVQkUQrh8JPu7AxCprA9ui5sZBnEB4by4gu7NXLj48ztsanvQDthMg8JxbPFtm1NBpyYgNUnuz3aAxsL9z3CKe",
  "key15": "5FRaaRRXLaGQ6WkWGYchiYzinzfd5Y7VZi1G8u5rHFS8eh4chYo67D6WYmQTa6RQrvPS6eAniRW2GiA7mk1sVTt8",
  "key16": "3b1n1oLGgpg2adoHDsPwgPGyVcQzePaxDvgrr1X3bafBdS7ddwmYjd9TuwUp2T2Lm5xAjU2PPZRPvi11qawWhgpb",
  "key17": "HAvgP6tFbqqSLvPtn5ixNLR3MkrTon5pNHpSLFnrQpgYaNoEXtmKWB1wfET9euMqwW38sifq9zsUq7wpYaW7JMy",
  "key18": "asE5Lf5xkhfQaNEC2HNJbRpboT25BMuHrVtg9Sfk9sPKXXW6KJrwvh1zAes2NYhRWHBd8FvucjCUauUTKcco6PV",
  "key19": "2m8P25Un2uNXMQ8THUpczNgYjX26yjafiHBzK3knRe7Y7jA6qf4NfZ3eaycPSA8G229HcpjBtm4KwcTmbbpRo1pL",
  "key20": "4NcPdLuxaTcLT65XGjxnRJAp8oy8hSjZbL6cfXz8tdwQNdXXiShPxLmdyyGk9CLLa193KvjfsddPR6YiLAuHXCLh",
  "key21": "3LzpELckWfpMojvjqkSPR8kTFJ5k7SzDqdoek9Yn3LZYeqK4XzqpCLLjyaqXjq5Nu5a6rD8r6VwMbfbtU2C8KJbS",
  "key22": "2VVPJCjAGFnSmraJcRvNAWLyEbtLxM3UidfqNJvCuEAr2TmYEjdJJo4ubrZw8UqeSuRxQ3KVqeHtY9muEHcRwMPs",
  "key23": "5eVrabQy26sPr6CV8ejirnisYHaB79xaaWkpPbZ5vRH8Q8cX2uyg8T1jCU8RET45aUrRjvSwW4vCwbEuY7pJLMhi",
  "key24": "2BT7xBA6bbckZHnhrYSWjH4AU5zuWL2KVEo97vWouyxZjBD98DZxeAr56uUTK55r7W38459LcCM8ibFttcKZ3eju"
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
