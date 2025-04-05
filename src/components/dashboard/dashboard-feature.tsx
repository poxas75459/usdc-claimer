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
    "5t36RaASvHP4rgc8TPYHhaHPom8JHpMey9C1b6cuBifMkgi4CM2Up9MP6vXdNrDcsTNDHsc6LQCwDfkiWdbf3vHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KewRZZ8YhKTUVgrhseH4Zs9U9spdzB73zhbewkdLRMmG4KWh33Yi1HU9n9L1V8ZgKHU7fL7DdxVd8B1yVXbweCA",
  "key1": "YpzWV6GoAa2Yue95tiKaWPAy8G6Vq1G1JCRP6QR3bhonSKm5iZ71dpzby4toHdean4PjqtqnTDcujSz2LgzVbww",
  "key2": "3yaTz3jvENkFVgoskAzYYrFKwekhFG4YP6kqGGiqUxmtURg8DXbHCoxYkQR6UwZvewki5WFrqVjXFgAiUz3xembh",
  "key3": "29prjrP4UBLcjdS2ZKPFWg1bGHQSUvZJFWLTf3TS5WSRjBkCNubuvbvDwJXTnisWvd8M9s9xTTPdUsWvX2x7SXZa",
  "key4": "36E1kXA65bHjURG4tPncBbcBYAmoEdYFbBwCGcsGcwW25RZqHDeGbtvTGJ4pY6x4ed5i1ErGQVwCQUqZ8C4ktdws",
  "key5": "39L1qpDatdaWCbMx5EJyqXc52mUe1GgLUnHK5EDc2XnUVMgnc5hpquUfyb8414SQEzSpRxNQpL71nVHtxghzgnR9",
  "key6": "22g2DCJ5dx2M1WbRWSK7KJwfgox7TVAmE4xwYGEBdjBZdieCJySRkevUxxmYrt2gERt2UNYmSRUrKkTzPQPCRida",
  "key7": "5BmQW2tziJ8soCERWv6qhyg2pEiugnSR7oH2UiEXaXpZo5jkhK6redC21QcxhkzD8SpnqYCc9BaoFFe1QdmN7Pi3",
  "key8": "3pAaWNJnYFHeq9wogSk5mYH6feAuVPFQTSmfGYTNhNiRvkCXAKeu5AiLuHLwUrCizq7wsDgpEetyK1wNWp7hiX8C",
  "key9": "2PvQQjsLWhCik6DZ5TDPzpcvG8AVvzDG4Z9CZTrySpGJwDuFBM4qxUWc8MhFJNsKmgAoEF4Re1kQsN7WLmPxp6QJ",
  "key10": "5P79FagULk36AaV5gVWC7EZPYTMidgsf2cVFwwJkk1NZwJmvh1vg5FKT2V1g6Q3YN9zbfJAiaCTo4N359jiX1Jub",
  "key11": "2nLjpVM878HQSvfkuves3dnUFmp2h2hgn1pkrzgfrzMmG7NcAuKvuV9wE4vvH5wbkX8bzG8iMiL6DLKmJgafxgA3",
  "key12": "5ZetePGvqdyEHvehEKZRHvupRvcW48BNsDUAew4EdcdzZHBXFjkoNwM414FLKgTyPu5oUc7r8gWSUchLHeYLDNtW",
  "key13": "2x1hQc5XoSyM8ND5FN4TmMKJrb3MKguJeY66z27RPWKCHSFhXWkGE8zx8Zhxqbf8sFVPgLktqLtZjhPmDxcK8nCN",
  "key14": "5HfWTYosp2kqSKyweiaD7zhqCeZQvK69xo7zbRv9oZywdGMY6UeHFDSQxvN7rN9qgSVk9Q61rZv8ijFhjAubQs5f",
  "key15": "2peVaLTxFgzfEbRwZJvbnjQXA9Wz8cJWq5FAu327tyuoZQQ9UuJBpWJv9TLzAUcx3kaa6BAKR8jRHwsVCAuoVZoB",
  "key16": "2WiFjDJX9muzwz7s4jGQMCB2zpgfhHrm8W48Aj1tyxAehBwM2HaXN52HQa5gSMjZsYCWzf81yBUCj9V5Rven5TNn",
  "key17": "2ynUScXjprTMbghKwoDAj6FTa5aG4q3u9oL5xeSNxbRzHKY5uncr4r9oS6BQPqyPQhpPUdowZVpcrXMc3hFZn4xG",
  "key18": "2eULWpMqiugEWzJpFdMgCgCpZd8tSdukYhLZbTTc94zzctJEBoihVKGbgcPYj49JEmY3AS5mcHmQ3E53z9mAN9Uo",
  "key19": "2jEbbiJXS2nW9kEcbjwdvN8gKZNfMdSbrMoVD4NF7JKXjJrH8GywHidga8Pumi5iwvPmA1vZhREUzw1yfFXruQsa",
  "key20": "3xixYDLdXL2Dkzfz3JVvFVUV57XmdByEVeZMxZ1nWfTrZdudNc4H2CLg2s1oD2nWBzMrK65YcwcPmrhw1FdWRmc1",
  "key21": "3t7FX4QkKkFMSAwdunPdFwMHsAYabxfgE7dukVngE5Y33H4xbN7reYbkcR3y4RZgQ7vrDS383moK4s2453CY1LML",
  "key22": "2xP5mV9KBuYWN5HEoDdMqsRPYMcf9rJsrizZ3AZvxZh4V8fQ72KL5AN4cpkmQesc3W7CdKQURcADZv4TLaU2ZWR4",
  "key23": "65qpYQsHRntGXDrgYvszJHzdN5j1sZsHfxS7XZKTEGJYhmx1S5cEtPSLxwv6HbNhrhWcpk7Fhrvd6KyJfgcM1v4r",
  "key24": "44YmypfJFo6vHcpuwuTw5pfPfTUs3UbM7iC3qvWCMJSY31D69nMAkPFKxavYQAtUkR1NirKxB6bDBXFTfPrYsM56",
  "key25": "46fskkfniCpBetrRt9ZzvR2EPKtrBr2aHZL48nZUwu6JTuDhonhPB6j6dnHzMqz7SFn5DzfdkPg5WfGRARaRJyiM",
  "key26": "2UEeF5H6zWXZEecQ39pAnsT7aG2hQPfz8UMoLy5AoS2J4Gej913jWvYfbBdyXyHkkEvrrShPf99dcseLHUiTCVc1",
  "key27": "5H5nds6S4kY29kZeuHHf3AtuVUD7g1fRKtEZ5oDCaJ2VsiUStC5sTsbw9xttqpVmkAzzThxnR11tuNCE6iJh48Vw",
  "key28": "59wWtitdyBmMkp1ehkq6UD1UrbzSSwN1qJ2eQJ2WQuMPCa3kGvohMhJtEkunRHgybRFrzTBvuRyAbCZ2Z1rxUduU",
  "key29": "3gEbWstUGmUcJuJxQCqEeaki6LE9xkzUy612yn2xJ4vAidY77scW5ZFMjdzLDpz6EtozZnUoY1ZHzWDuKEwg8GYj",
  "key30": "3Wveta7RVH6FyLQasdDRdTzRW3VJufRx53MMsKbnoLoVuxpZagR2HSgm15vX87KVP8bpmkjMZ9BGm54vNs7XakHk",
  "key31": "5ojFCqgcaJMEv3hfjpjuBSwpqqsRE4mxR4Cj2uLpHb2LsfUAeZvvXViDA2SYYEyV8rPdvE5kJRNGLqXofm3Wbz1z",
  "key32": "32e7xU4gBxwWbFyekYKENk1sFjPNUYXWmYiybXKcFYhDJtKvFGV9gQ5HkXTW7rM8KVB1oYDqrjY9crdUsFwMd5rB",
  "key33": "WnqdHoXSLqebhUYxzRfoT4NFYPvCkRBkvWvrr7zfWF33QmRj8gfM1JshfoPh9Uj1Cr6ysgfTZmEBSiz3kJsh3ja",
  "key34": "4zVCdAe5mePCyyAukNdHFArDMfXwgNzAnNFCXTYSxbsGmpp9uxVMZQkCFWzdVQ7zr5Enue75fBvek68zmTPyBChP",
  "key35": "ekVuzDyLrGPFLqe9vhK4T4joAiXKJUEpeuaWFqWVLGu7x43nsozpb9DxL5CNzzJce7iwRGXarsthwKM3vzJe7d6",
  "key36": "2dfguPZyBQwqJNcZvtoRYgggyWxpA9wy2TgwVYQYgi77nJ9pSTWjALmyCrMwCtoHTVWiqtUeKy4fJCBzKH8fofz",
  "key37": "4AAVPGvw9dfzT9okcrb12k1qyyHHd7ucMhXa5XRbcVVtKK2LyqFPn8ks3RLgvQDiyyLYxqibdwbW3BHn7Tescb2L",
  "key38": "aDkauPXUz8KALnhuwo7zkc6vdZD5mycbTCMBxdHsNgofN7aNUdSbcnDcg5tZ1yRF3AzqcMEYTkVCngq97p9L1ph",
  "key39": "3kmpHe71eYhcRZxXsc1oYAVk2UQNyDBq1mV4SZkFh6FCJ8prccrcZwKZS44gNa3APWiXGL6L38cRPzYupwnNYYpz",
  "key40": "WTvrDzEH3CTmxRnDKQKPADh6fka5K1avwdbDKu1T7exn3Raj9NYBQNb6KZokvm3Qxz99yEqxyYeRQUujfub44ti"
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
