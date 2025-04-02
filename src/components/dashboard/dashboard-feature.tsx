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
    "3ye7fm1vAjrW7Aurm6coEUWjtbu3SVcnWnH9jwxEZT8diAsX1nx9vef1AnUCCA7nwqoHzkgDAnTczRp6ja4NaAX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hTeT2tcDHsJH8yTQ9JHokpqL1eM7rDgF1AhVZprzAVjK6YpGcve9BYUpjkKHdXb7dP6m9wu4jmRPSLqXoUZr3K1",
  "key1": "46y3mJVk4LWRT79kG2g5thxSxxjCF6mL2ZuMi4zLv2hPdZBwVUpEm2Eodb2GFewmcp2jp1Ky8m5tm6ycFkRapZ6X",
  "key2": "4xhb26SNy9C9ZbwFJAhpqEp3xe91XBXeBcSR1GgWEkReuqqk6su77WSS4wnyudJfod9uftes62Y6Cph7E9cyEmhS",
  "key3": "5bCV8vFbvDFLJRAGWXPwKVEhgfDLtsj23UB947f1w8vdmamsLNFGaSFABCntrALGfCujHT6ds5LhQFVXVU13fJQB",
  "key4": "33gzhUjJu7SbQn34P6hivLbEdDdgarZZgqQsesb8NkrHXURHrbmUHtzCHqbxdRfH8QWbWYPYkqxbvJmZSYcKTJao",
  "key5": "3YUGK2MDxovrK6sETVBEZb6gA4yJaESBNCNJLjVozMkS79inxdx1TnP3xA5a622LBGrpLgs2JdzubmvD1dKn7rDq",
  "key6": "5C4HDCipWT5Zska5HMQzDgqwbRe3AMLtndmqDhBuqUoKBz6jddngCPeC6XCAig7ALCCbS1jVkeDK1YvX7xbACoLM",
  "key7": "5R4zk14czAvrcoBeW8SSWpgxU48Kbmdpy265JBoCyvBWRQARp5druXN6Ne97YSQkuZmXFBxa7qyCRaDK9ZchfqUf",
  "key8": "4D42tgyjVfgA9FCTcJN1oc43p7d6h3aguESbk12BzVG77gjMiMwLa3bAGjvTaDDHUQWKNbuXLorwCReCxoiK5R4S",
  "key9": "5Bcpe5ti6h2rYunRug8Fznji5JZ1q1cZnLLUXmTDJCxpuCVHwHTHffv3uVgHPnLmj7LX4YVz4scsvurQuzCco4bz",
  "key10": "FEwiEuoHDXMCATtVNM5dibrEkbK5yjdJFmFpiXRQdMuZLFFGrZu4TWgEiU3Qodit3EPiJB9Ti4L7S8UCshuSG47",
  "key11": "2QBEYBRoGRZ4zLZH5vHuMAdvK2SXJgLn7d1XZnhdMnJhV1BFsWoEzYMWpMtMNeYgFtCYTVUhsWm2yL7THWrzUtR2",
  "key12": "5hLbx3uZ8s7FkfXe2LgdoCFdwQBbkaPymVoYr7vnfQfUCnt68cBN1Z86JeotF8NYGkpLgGy1mw8jLArs311wB1NJ",
  "key13": "FWrUwABoTvH6eYNr5hh7xCNheNteW6hX79fLWJpUHDa716mucGhQFbSmGo1KWKQbF4nuubPcZx8MoiCk2ugXeuX",
  "key14": "27EENcbHFoTMbmJ7eaEm7spGa2wGARwEGtBnwG6QYFgNW9H48qZbFHe8VvHxzEG5KddYGM4rA2ZPdVvzfBzbjy4M",
  "key15": "5KoNmnyCDFjw59y6PRECYSnP6HmZxQNosyjqvhG6yrun5hCHyzaeGXfWWLucFLchMwssnAvyRsgeACu8ZCGNQiwg",
  "key16": "4dcGiG1zpqrCs8GWaRNV5LAgZg5M8cqVB8exFx4oqG83nuxKiSi5z8sbjwq2wYJ1yAw8y3orausf7yxsxcRuu2MV",
  "key17": "3MiGrqLmDDNhXS7ux3Cc2gHq4QGJSgcwzsVTUbeHm3X6yP4hGMnUJkZVNu1nQxaSFcbMg22TRhYR6NpWgALzL4Zm",
  "key18": "4zE4BBM3B3ZMX1iys1xVW4Uak1C7Zkwmj6tMwHiMRvpAYbqaBQGwfNgYaMunovjfbhyZAtBYppUpefQzW5dL2D6d",
  "key19": "2gaxw7pz5jkALiKvKmMPVNYQNVo9f6RMfRoLDr7CiKPkA97t9RPHUjn7sWC4tAiKUa8LtKGzxiw5HgBbTtUoue7N",
  "key20": "3UeUfQW9cT36vqp6UkmHBRXrqGFqgSCcKXD4vBq7ZgdMN5jqe13gPyCSGQUjDhoxGZcSAdSizkh12KHRiv3imTQv",
  "key21": "5a1Zb7RWSsefun6jsfq3CWUvxohg9RBesGySiJ6M4MFaTZTwnRD27xmPuzEcJ2ppAxtTJsHhHamt3aGYWbK76NJN",
  "key22": "2dzdaRTAs31qETsMweQq9qCvVbRVHYEQ5Akn4TNWjxaMtpmEwemF3xipj4rVvanbR9BAiDrkpd1DCvQ8nqRhG8QW",
  "key23": "5yGVX9xG9S8MYNquzqGWDo7HXKNFPKqBkf39y8XnHQyYQTtP1JGrBESoPKkAekaUDKFKdMyi2EMXa9BUJnFVGKVq",
  "key24": "4n139mAS3roL4PLzebAG5x9qfe4Jr6gviXvrN3rhouhhgtvFv62Bvi5Ph55tvc1ddiH1PbKWRdq4AwpDeYjvgW8E",
  "key25": "5zuBRJwm4zYYSzGKchvos4VbYSyrpPCJiQ2y9icCtDznPS2TvisBzvePdHB8urBtDTx3oz1miUozFasDriGCc4JZ",
  "key26": "Qrsiu6Ly3zRkWV9HW7RDfU2Rr1ApLkB1TFwhokv6hxehhKqaeqK6oS7gkAfbFWZntRCAggkPNfQAAM8zv4iUezX",
  "key27": "5DxSPUJzh7gaFTc2ZqdMaZWKJ7F8LL1h3whboxVasgXXWESJ58zZW2TMotRDMjX9L95M64GBgMGfRauTox2DTYq7",
  "key28": "3rJJNjtzCDjJkDMCcTm64T28VjumzfQuWno2xbPCMSHMPF682FRXop3qJbPa4NbhuCcEqzEbJmyh4pSDL6mTc5z5",
  "key29": "4aLYrSW2uZvwzamZMjeLm6ADfeWiBT1Y3mcZiuyepwtvUghdtmE2Ky26bxiZFRJRJMoYpyQK62QdxXeiJpoQFtRV",
  "key30": "nhV7hAaGzKMyowxLqvp3Kr6UhEfVJTxvpDkYnEMNqzVbuCnqxwxN4aXU5sMEKQw3KdDK4o2z59SdzxQRLmWaUUo",
  "key31": "4oskbEHa66FE4fVd6q4cf1hDdBAN57iGn6Xhfr7nJvgRR9dPKceGv2eru1im3A5qeAMPvNEgXoHMW9vZCXZaSfGb",
  "key32": "3UqBSXgzwtgQQ4Fhf173JN3tgUSv1vuxyNgYGnBtGYJipi8YimYRJrUqH1W1cA1wcpRUMwvf2rMy25jY2znXrEPc",
  "key33": "J7XwNjzKyErAk99UnQc9SqdrRinwdM9RTBmXxeXfZiNNJdqoBjemYVgyaxiXNFxKtoishzcJZ5ah3hVxbn5RhFW",
  "key34": "5R1X98kyE5ABZf4FiYgBafczzUXwpzqNdeFqDZ89HQx1xHew2oXS8654eLNCMC6VybrJqAnN1aTJjHQSNamSfN1g",
  "key35": "4cYtCvfrq3j3gBGDhRiPhvdsK4hDR9qFN8Rit78wNVSRyP971EQ1QVBSCPfKAPGN9oGumsqAG47i9G5D4GXHsUQc",
  "key36": "1rV1dnbmAe28SxgjQzdvtR3VzdumjDGg8YtZww6VtmJVpofjzQLT36ZPu3KxF1Q5PF4jhxRVSZs4AAHQDeZxaPE",
  "key37": "Lg7xDKUgcAhVRY3n9Avu16D1YkDyYjoYB3PwL99REVyMQmur1ykfSEZer11ECw1BvBagF8Kzg3rqdb5EVrYJAg6"
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
