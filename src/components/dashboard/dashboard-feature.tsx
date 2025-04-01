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
    "4gmtdP4hmn4NXWTaffX39tKHN2iVGoezch8MQNWUmGgoKjT63rWXQ7LeJyhbkMeMMjJSf6JNg4V5RAmAnxtYsgfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t8PibTwSVdG6SBct61HWuMkgKwrmaov15V72aHbRx4eKGFLH2HQpotnbjmT537vPE5EXWUYMmFkYh5UDMuk2FQN",
  "key1": "3Q6RAYM7nVpvqwWnkANXZG4qnRtkQ4ccRnVKhDBEBu2SZ3jZQG2G29Mff36eq69VSBcm5Crr2TwEa9pobFugfK4T",
  "key2": "aQHbLbXkAMFhgdMoZcik7kNnKm3WYCqBhGFPTkA4coHxpRPn4gp5AgZXD3jqLW71hYwyvxx35h9d4tiB814dAjR",
  "key3": "5DTRMUzfcGheNkvTuxPP5Ci4a2asaU2jFEkKjUkKCsgsuiQarHLnEQqDRuqoChtS3uZvqzbHrECTDi8LkGtQmSbW",
  "key4": "2TbjEJc4cCQeGaBgRorjvBVopy4y9X44DYxUqAPGZEoHnDz6C6T5ZMSj4iSyUxTpPD9tXhy6TwxxGY7bH8KHvm2p",
  "key5": "5U4s995EqTJp9A7Hw8NNnsWYAmGvWspvjBxVRDgAG8dsKnCqcXy3frCzqhTStwETq2tE5fvXd4HsdC5yf9yh3Qvn",
  "key6": "2HyPLcWxsdV7S2bqL9hDamM3FustAXvrXADXnPbVDLzpf5n4jYoUgcgUzNzvuRs1rbKXV9NhHtXBqskVPEbLyXaY",
  "key7": "2ovt4PiU9Q2GQVe1A6Es1FY6UvYsid2DXM29sxRDuVSeBfXyi9ryG7YkF8FwDnm94LT4weKBBRVxvHU11XHoS8ei",
  "key8": "GNnGMtqXkbrX7xVGvPrP8MT37q2HgQFgA5hz5RmxzEKU7sqQwg6ttY2YPoLrDvoCPbn7UaXqrJpHJAFZPcZPHRw",
  "key9": "d61hVEa2igJPaHibedgcJb4vHs7nfvttjaUrAmLPh1HGeypFFbZ5uqtDbhM725CHHGRdZmCz4KpB8NQHbfAxUkb",
  "key10": "2tBsLgHMXswvY7Wzin4Jdsndn8Ff1v5uQ1nmxYTcBcXkhksmGJL81LT8QjQdkcfDSmorGvb9xegNeSm41JwXFvZq",
  "key11": "WtiZQ3BT7aJA2JBndp3GJR46jUQuPmicuWY6cr4V9CAx19tNyUKHhz9KbBpBv8rHi8HivYCJfLWRJ1jzaKtAQ8j",
  "key12": "557dBvx2jcQMUyVo6X1oYnJWzvQTWXc9x78rSozJJQoPYQPSJFgYbJGEfCr5aaTgEqgt2eJus37gykEa5rZfZUbW",
  "key13": "4evjLP5qn4FWFYrUFcWxNUSq9EMTomihdewVgjgDqjkQjUB1JvNZfHJt8AtzfFa3iZrkXcwxJGN1qPRWrFj7GX8K",
  "key14": "4LvvctNYWoiL82QUpMypHm2WTGLb1uxixAFYsY2Xs9FGW82bPQFyN832ANR9yx2uzhTeDf18VSN5WZNQ6CJLLrH9",
  "key15": "4UwJAwhHwgmbtHXuXDwH2Qabhag9vK5m83bn34tSsnwQtMuzn1QhDV3ACPxbZ2BWz4gXp9f3vVm8Nd9phQRYjYfm",
  "key16": "tWKqGnQdFNBWNUEY3wxnZDiqArVisRJw6UePF7aGimyqXoZtjoqSmSpZZ2qpXu6iwbF9FiiL8sRpRjsvLetkQ2U",
  "key17": "5pHH14kzwNDVcLztCzm6VVF9YkK5jQyYoXNTZBu3rzmtkwDndxHmnMt2XB2NdiVsXWpxpb3xs8AWwTTdA2UpBFmy",
  "key18": "2LAxFoiZ2Zbe1JhAgJWLsjsQPHHH6KQdhaTjpcBJPSsAF2roSpixZTtK3qfRDGrHUrVbKPXMz3vqmw9W9cSeKq2c",
  "key19": "3iU2JAejNJjzSQisUftYR45BFxHaczWrPzRyXZj2FnDZMutpTvrGPihQ5PVTxCGCX6k2Muw7jZnN8W4Re5NcHnXE",
  "key20": "34XrVQo1WtgEV3gk8oGaNHC46aaqJjM7Hb7KT8x67dDoeomnTVVHqUi8LjfqwttKUBuaZmLckBr19XNwpUGEPD7v",
  "key21": "3DgqVMymfYV9D1gjVpQQUWLZRV2Ys57NcSRBrDZRYNYBr3PNCvpDmRTR3zjjCAKBJhMnPZdd6JkB5DELNR79JD9K",
  "key22": "4vfNWQ31fhxpn6NvXEUraFy8nEM8T2gzBziGNKtUvTpBMUZVbj8cqqARU3s7mgxJg45mpG4oUiWwnR1dw3NQvh27",
  "key23": "5xf1kuUZqmfqcQJ8iXX4VYYRrzCXMPaUwDNQJpbDuZqMGsV6Yq7jEqJGT3PnYhUmKVbqb3Qjb6H65XQAcCMVnc4o",
  "key24": "Lmm6k9uY1vmDyujt1FLrfTarUSNbzTYqwiRK5PTJpHG7P6ffP7oH74C1EMhYfXcicUroj4xTgRjTmY4v3ZDp1n2",
  "key25": "w8Drt6jD4JmCgacStMtuY1ArioM34GmopCBZ4PY3T5734UbJHxKyCxe27Lz65UmLjF14cpEjpou1uSumWnwF3FN",
  "key26": "5txQ2MetLWBR67FDRMnkZsQx27cVKA6vc2YLoQbaee7wCjiwKQNCpgfr7o4teWS8a9KcXrmRq4239R8XbHeMGySP",
  "key27": "538D2G4rP6ikhrxR6CSqAofg64YAJmXGjxTtcHobRacRDJNTdDCUFW7AagsYMJ2VsbGoHkf5nEqsjSeKwWakQ9DG",
  "key28": "3BBmU5fpi8S8d91sbeFDzncEjq1vPVF5f42gW3yHJqpFSCuhURN3o7MujLTuyT4DgZ8gYAyyxxehcSkjim37Zcgn",
  "key29": "5e876NwZNR9oY1JQL4mM2KqJ51YKu9gukLaMivk6pqk88g2aAHqzH9zCGztommqccyCMZebVdiAUk967NrfPu8ET",
  "key30": "4kxkUcjL9tK7tcZ1PvaZsNMhm5MYdV4i8DJRC1woKMzV3SRxBAcHjdfKp38zUQUPFNYfi44R4hxUgfkectZEdhm7",
  "key31": "mnrupazE4XatNuvFbAyMEzuBNFort525fsTFzRZEi9nGV6bVXjPoG5HfJ63akpod6jPNiyfmZa8AkB4XscNdf8n",
  "key32": "4dn5z8BJ9NuEMWr8tejMrvk9XGkxNH6zx7mSAtuKmqxNzRBbyXUf5ts3sZt1HUZhwGSaX6YBfwzREw1gHoSZx58L",
  "key33": "2fEigvkfG9GZYZB3TETqYpJCMXLoV6sVJJiBFaN3TS5LYVs6YfKVn719hpD6GdsEanw5yejyPzechY79MUTHQShR",
  "key34": "4us6pUimeDqFtDFW3HyoMz1am3RJGjNc5fkG1VxXxHoAVXSaxaj7i1TH9Q3Qb5CBZ5m5SVq1xQB1hr3zi7m8pj3H",
  "key35": "4P2uFQtt4a7hZseoH8PKsKxqsHkKB8ko6otiLvYNtkBGHgZgMWMeZb4LTfjd8FJpeDgfXyXcQLDCvT3ibAtB5fhJ",
  "key36": "Y3y7sLteNjzDD8cXnAaawYfMobFrDERre9jwsstigihhx1azSa3soVHHtF7Ux2qyB64gkJTbpmbTDKpeZof6vGR",
  "key37": "3ASQBJVWMshdBwnpU8y69XPNyY9niZK151yUxh6qFfbUBStCJ5o8pEBSykahqUsBkX6o6rFGxBJhXn4PGdA4R4M1",
  "key38": "5XopmvhNjoxbNyVgEytb4ZJMmV2ChsY2Xn4uT6wugPjn9GLEUydoikkLQkiAj59R4Tdxye5RoiWn3UqhFbnwCs62",
  "key39": "2evB5DB3tKDqLX37xUenhjxjDBJzUeze7XE31s2GEBc9er3csd37Qx1g4ZHaUzzWe63SaVAHkwig2fD7pDm6xAAs",
  "key40": "4G3q1NNRhK7gLWyBXARxsxbkRi9oLamW5bhQ4u2B76Ub18gCqGvibajGXFYWrEVbJBxA3x2rGaEw6aVm2XME9ZFp",
  "key41": "5D9BuNFhmKnmc1fRnWZg22E71o1WCdjbtGte2dqta4i4nkzuqASoJdK687rUUoZ5oDCFwYKwLC8ATkqyuSo7HNQF",
  "key42": "3HgkvaVMAQFng9kT89RTdecPoyFCEXf7oatFPEUuwpDyWM7Vtv6t7jC3zz3XPKYDN7UQxox5Phk4gHH83yS6S9uu",
  "key43": "4SAh7qccvTPBanx3QcUyy7vwZyoezCaTJAudHEUqgbjdjoxfHmH6Sfo1w612Q5hMatixDH5fKu5RkbRdkWFQfVrR",
  "key44": "2Lb3HB6GDXdRFvDMKgbcFUVTyav91KK7bFkcea29KW4gvA7W9zm2H8y8yXmiazPK6VDvrhH5PFmeWRpDSGzhqMBP",
  "key45": "2St8zSQukFqgWxzoNfZ7Az25XeLMmg3GGAA5pQXtUWFjkBDKUwsNq1dx5Mbc59wcBX52FBFNsSRnqa6wUjze4eku",
  "key46": "3RQjpZ6vVynN6Ju1mppCj1TrD9wwTp6SM78T6wesSULNZYPEfA2ghNvh1fy5VxUokg4r96R9ohvtiQ4eweagxxms",
  "key47": "3VWiRwbrsKM7FGNva4wdJD6HVzir7TwyYHJ5AcSQdBfkijfwLtnomWbFX9FVudmuXZ5QF1GVe4CM7KmsWzFLP1u8"
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
