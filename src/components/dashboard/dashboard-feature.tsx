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
    "LPSpXEedV49ZyMunrdosDWQzE224HFLmMjvnRB94uvSGoXUWJkTfwxAsc6jVUpXVmQMaWPiqMtd1CQHF86vEae1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zvn2AhQHqs5yM4hp56u39TssTPMvUip1K9mNVgV9UnfkmXT4Px5snHxPoVSE2E4mAvs5JorSbSA2s4hr2Un92eK",
  "key1": "eXkjJ1GNRN8ymbH9n81YX77NcLmuG9WtxTJCS4XFofyLesNrhBQ9ksDyPrCXuncMSFVwFVYX3PpGC9DaHyt9Mps",
  "key2": "2wVRYRGpmRbhTH9MFcNWXv78gokQjMeYWcsviZtPgfhSown9Rxb8pjhEvYVGmmQVqPdPGpxWDs5fQddyVVS13oEA",
  "key3": "3j5dYMh5NLDkei3yYN5Cct7WTsZmHaKQFDxXe2nnQLb9DgdRY55cLssoKJ1D46YLbcbiAnkEAi7LR37To5XLsYCz",
  "key4": "4yPpzAQ8CnSQP6FedzuQ23xZNwyVwYBvN4RfG2tF4P9tBDZ7mDiKkhfDQKj7qtUzKGqsfoqpqVEzPHVURYQzY4Rd",
  "key5": "5Sa8RV16yNMfYz7sbVyYqEJAHu8TXRbiyX3e2SF32ssDcux3p9UQ1RMmqEbcCfJJpikbzz7PuHXfLQuTm1ZJz24u",
  "key6": "3WMG6NeRXYFBUUc8NUtGn2cNctehyhmBB9r7CAuPQxkCujsp1c78DX8aL7VnVZNaZMzdD31Vdu4upom47xtebmgr",
  "key7": "2hy6feQNrtaCyi1d3k5vR7NWuTnTEj6VEfKa6MDxXbgLLvoiT1mLpkCQShKqbLh6PFhv5o5iiHg4jjaUL5mNqwxj",
  "key8": "4hG1spYN2EXRG2UJdZwB7SaVpGVbVfGG3dcBzsX9kYN4W33dhfbWXSFZ1VqrA4Td3aW7MVzjmpyaRVJHXSzMTzuN",
  "key9": "3Kr7M7QpjNYab4CTfh6uLAAJwnu24yJr9yr33GrZf9yiPZr58ZHS61mAfRvwwYxLAWXaAZRh9wDMZykFkFN1avM6",
  "key10": "4dLPYp6jEc5v8SY7EKVVNm4XY2xAGvVxUrUk4FXAtJ8VmCiCwQeYh1EibHkyzdcMxDnphkJfXku3SwriLqcw9weC",
  "key11": "5aRJ8rCjP4hqRpeZvgL55qxYMK3hd9jAyXkA1gnu7mcjQHS5tvDC3LLEMTcnqZLunweMnUbY6t1dowY4xhPbmAEJ",
  "key12": "3YicWChT6HeYwAya2rc2LEPn8vQrbhPeYhmANSWgUYUXKtnFwHhduvfznL4YULD4mUf7r2iGjAY2e512DVKnqiEw",
  "key13": "8brW1CdP1HGQB6ffTeCWgG3UnAb2sLxXm6V2cSTSjLftw9YYRhNrSjDjoBQ3HLAkpjdTdAatxjpgMyXiE2fjJEr",
  "key14": "UUBoQ6YoWKchCoF8WYpxiyP1WNdysByhHNXovUxw22RxdYkRAPDfFrU34oa1QtH7wVptzmxn7qCgNBoV7ra24zd",
  "key15": "3sz6Us7HanFT5tyDfMwfPxRMLfd9b281L3f1hHRFP6prDs4aDYLscL9tm6Z9PnDLR6sMFJtyiZRUY3XjbT32Zoiv",
  "key16": "5omn7LDeBc7BHNCsy67hdLDju5NmcxHv5YxDRDsFpTSQBa3jhvT7LjfpzVWxQ1wFrySVynLpsvamz1VugammiTco",
  "key17": "3M1UJ1uk5wLJeSy9364pWqPnUo6gqGzZVS62kidpLHar99WH2Ra2H7HkCBe9XpaQVUawRBp1cKmWEP88UvjHsrFa",
  "key18": "4k1Mx42PRrndjST9X4L851TkrgteqfLy14FA1wVxNcqDCCCpkQE2TYnbtopoAnAKGVGq57eBPr5jgPwebTE2sKem",
  "key19": "22WnZ8BqcRXkDLWAcUnay8x7tASL6Az8qeLaw7Aj7uuc8ZzRX6p2Fef867VNb95mRPESDLe6qm9Cin9cmiLZ1wVm",
  "key20": "3VzpNvVkhufzp6QmCoR9xePN1cUKMYn1vHzZoXSdou7M1kMX2eToHQ3yioavkxFepR1S5S4SmzJvYZ1k1883Yv1i",
  "key21": "3WeZFkKKXNMTH1TBk9tFTorUMDHoVXwd1mBfvJHMV3m9SxzVLmUdpiTd8AvqiprasCHtaStt21FJFZP2Z6bnjZKd",
  "key22": "4ATWnTEY3CicP7gDLRKXZjE161HWGz6XiBNAQRijuipeGE4UnfzJjtV4GqmUELHwcVFzjbFUnGZmPkQpFWYYiDEp",
  "key23": "rNqn2bYRi3FyTqevsZH4NerGdj6xxb4GBS9QjSASPoxT4YnmEVHNBtrRg5JSEUVNeS7iHdsqSfVECE8GstftA7x",
  "key24": "4Mr24CiyrnmTgMuP1GoA6SDwqPJfiNxiNVUqxiVv55QzZ6xN9gZbbdF7W4Txn5BckEFdJYn64211aJfKS8AHHuKa",
  "key25": "5NBm88oEneJNSZNDk6zSJAogc33adUfdxfjC4nUf1YSAHLiBQbgSb3Vp1YUVF6CjQueKhvdZ3F28xS3THtDxGGnt",
  "key26": "2jDyZVjNQGyv67W4VNhUhesRWYNscpQ3ucKUgsmodtURfQzvYHzws9Cyzpi1DtshV7fwybe6v4aBUwYe3tFUWcxP",
  "key27": "4A3yMRx4Zbnv27PEXjiWctzBwVg2Z8FNgj9uzcCP2cso5rKV2zpXKwGcgt6uYxYfcd7GoTTaEHoqSHQfSqnv5NpD",
  "key28": "uipBnH8R7pyNybQah28rWQV7XPgqvtawXDfseCbGrvCNXhNBZTD9ZsrAT2nuRf4p6juGiVWUdeTRtERKYELaTy9",
  "key29": "52FRniqLZbBYh3q7yhZUkuo9tkvjvbahq5kE4HDekQ9FgvM4CqStno8Gax7P8SS7VuyPstgnNofNwVuPebRmKn7D",
  "key30": "3rRWd4c3RWkkcVzLb2A9Xp1meaDyS8ipTb3yKxLFLstQ265nboMPYukAZUs85wufkGwoxrawfwyXDDWXmy4pWvnJ",
  "key31": "3xG7JimHPGZ4DXepMJXRfRBimZoQDfH4EomrSPYsSPAJDXwEihv3LvJeuSuEUrP7e6aq2FvEpiSbYzcy5Ve4PFWj",
  "key32": "5A9w1HQZYNyjYCxS7EESH87MSfehyJjabScMvzBSNC1gARcbXxRpxw4yiM8UVTzrqAQoNormUgn6KUtAiAwMEMA3",
  "key33": "2UQXMNzxRi3RNAGyKSYWuHfZnXuaL1yquVZN9Jpgy4aiNLDVM52uS5muxMERFLBJ5aAUbh62L51rVbrm792LqnvU",
  "key34": "4fxtk6TAiEXx67KQC6K26WAqC8HYggrk48ri16FfQzaQ2PnGnWwMF5nAAon1aXSzBzkD1TN5DjSzBKRMtEUdX79p",
  "key35": "3922k76K3vsnrFyhG3L5KQ9KVH4Jj4SXC7yE5Wp6gvYkuDXqAzpHSqLbPFjoXfzJwVHghDwCPSdoePGC9CzPz7jb",
  "key36": "2yKJjSFjD4PF1AhH9oEHwa7NGSpRuJQnNf5B4WGZ95ZZ82qKdzPUpWstdNxe2PsTCjFYtWcbToZBdFPLVJb68oib",
  "key37": "2ikbzoAUiftX5b66To7rfdy7DrAfeUynHUKYMjB29sr2BSo8eHyQnWvAx9w82vZ2GBugwCUZ6J62PUcxXExjLfjZ",
  "key38": "2qZzraZAN6LP4cKwcsHqhjnHExYWK3fR85MAVFrpT81zbrcLjGuqXSh6mLTLXrovhGBgHXVk9NqXyPDeGER45jeF",
  "key39": "58SVwvAFcxtuf3zTfJG5efEn2Amx3F1HHUL3cxGE1jcV7nyJWnBWWWSMdg5Xfp6AKuPYr8AWkM2owBArK4sZ2wgT",
  "key40": "shR3nnJEQCR8GLQaQ7BBQiA9naJATaSFNmiauX9eok8yLyFThctq5tk9tct59AVCbKLJZZsRM2TAZny7XoZ91kp",
  "key41": "2pT42gbhPe4AKqfzDqmQmWYVq8MKQ53JNG75AGXCoryhzdu6LdqhS8t9Ds6LW8NkmNPGETzsCLDXgLe749ANG9gL",
  "key42": "3SUDayAJzwP8Gavz69dgZbGZzqacbQMwsA5dBsr7g5rp1NpbsqPMUspKfi9YAs8sQe4qxBafDZWL8yc4QQmZSSgy",
  "key43": "3rDiKNtyCtT5bxpXC68x2df4sby99ypL6JnmusUabT4V2tmE2MVpKaoq2a5UAeX2Fv2wZPKRvAby8YQLYwCYZKoe",
  "key44": "3Q4AGcWqqwNCXfYoAQiCK1gKxKCt7cq73GWh9bW7fS9BYdEA4qFcsjyNGZ7iBfU8z2AEmo9amDHn8kBBJAXY4FxA"
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
