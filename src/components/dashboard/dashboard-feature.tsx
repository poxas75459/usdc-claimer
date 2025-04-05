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
    "4uZu3dFxniaoJS1ngcHJLETfbF2PnLpPfzQTB2tP39aEiBeBArUDRi8sYqd4prhGrtYLv1AuUZddt6GS3pr3SjKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DGGtPa3gYWrSigdcYhzwTT4k3UqMVmJgHaQ14RHRuDd5caYJiZ72qtdubpBf2rJDJAQzS7p9n8vShmgpQsWsWdj",
  "key1": "4aSn5KDapBQiwqkLsYPwDSBv2FeEnX28npRgcv13FhczBmsoB3LeE6nkyLdLjTPrF9UcWQmkdf76tZYvYhjDTppE",
  "key2": "5h5PsvFW7gdUMSsBv8rsasK21qcBk72xgjuMyqHnobUK52kTtVKdJcYxhGbfGubC482ZF5Ees8dkFyeS6YGDGGxJ",
  "key3": "5oQkJuinL55w2LAVHhraNBEYNLaVKFVpTLC7LXYtiE27bvZNHcr2QpxoJ1QRsqeXurJw3Zat8rCuU183N44wu8uH",
  "key4": "2vuVHPBEGRjEgQ1dULd9B75yuVkNgRKULpXbw7Sk2aYxw8mRVLfbNu3okPDpVfLfLLeqHkU2w2m4WJVKhXWECrZJ",
  "key5": "5zBnRoaMxsCLYEQsmTcJ5zgTnUQLnfyPrnwiygDHnT9eEswKET9MEh2xsLuA33zVJ6p4AAMZXWw9q5eTCRa4qoat",
  "key6": "4oD7UEiSZrgBsYhygZxduBzpWbSyCWQ4aDkAcd6D1HdTCxQj1s33RQVtVJebtpDbrqRs76HyjSR5eVET2wjEr1RK",
  "key7": "57DzLmAEe4HEyc5Ek71WxPdPnZAAXMtgs2g6BM6xCHb4PbjsTCM1rYR7cYPyK6YwpubPBgGU2teja6JLDhnXxchD",
  "key8": "wJLgJKxcFGmequRfJokY2bzrmzVGsnaTfsD4c1CE3W4STKHRh6Ht6NPEmg4P6yFskMs33eUNuwaWmV3pXreYYyJ",
  "key9": "2t92N2ptjUjWHzRurtQodrG6K44DKQu2FgKX7ZsG3xdoP22iogW4ZNRjgaorhs8SNZPVEihHjuRKp5Kt7QKvDus2",
  "key10": "9wSFdNGGxhnyZhyZ9RkfJLNTC4sik8jRwj9UdYr7ZD3Rm73oGYk6PEdEBPMsPDSbFGB1BdbG9FZCF9W19dLe961",
  "key11": "5JPGRVxkUvnQ3BMH8ZG2wjHcjpspX9CYdiUQLYkaTgSJKx2mMQDgh9SvJEhF7aV4St1zvtuevHjERJGkpjN7ZVD7",
  "key12": "NwVrJNvEgBZB5g33dNZtC7WKwYpAGW9cv7fimCfoy1TKqk9FRfTzynm5UDKKJmb4Z6tmk9Tshn4iSeqWZTfwybu",
  "key13": "2zXrV5ngHYHfzEV6kCYygftQCeN3P8AGEe8J58EbFr5kc6Wb7wdo5XAVYMorwVSAzCR4EzPwKrEbH2trLXxZxqrv",
  "key14": "3NmzDuEz7KgQ5SDJQ9Le9CogWBC3KQrew2a84qkwqW4uNX3emkAqW19jymNKnNQRVwud7akzihSuvAUnmYJKdFkS",
  "key15": "n8LT6VvcrudCy7ArwcotseTQu7PsFRf8uoyRFFksFAr68NAL1TWNo18n9VRH3V3FzUNuRcKkgkGafHqjb2hoGV2",
  "key16": "inbiGZAekgjccADSvEjrzDFSZzDsmdAvHxChi4EQwDPiFk5vYi9oKeHvXukThmzvu8BtKrEnqxvvX1svU6w5qNx",
  "key17": "3Niwk1NPo8nGmEwn5oFEoca1mfG8h4Kk4PmMUU96axp8VQjYUqxP68p3Q6KZaEWvKh8ds4Hktj1yjbWbqKpKZy2D",
  "key18": "3WjSGhvfBJmctWtLNAB6GUDfesd85EqHzZxdYbKrQFDs16JCovjhcmyrNKLavW5yWUCVZBa7a1j1pUiPLWMMHFUD",
  "key19": "5nutdcN6NaeMUYWqRyeAA68Z5wW6DN9AngGHB3K1W2Hbih9CBPCWWosqMe91odsZuoBju3pwswnzMuuzA1h8nUEx",
  "key20": "5NFku7Vo5ccGJMhDzkSg38GCEND9MVjfg1FTLt8PddR2f7PAVzNTa3AVX4LynvCehFJwHGwpFs4MS32hawgcivRU",
  "key21": "4J1CyUPLwmcSbyxt7QQaY9RtkEpGHpmDQgRE2KU3Pow43yJtKqsNEKXxP4rPL7SQjJjNaxRRocPJ4y2NBxBTKxse",
  "key22": "2LdBXzB5kMtxUR3WuRZmkj9hkatsMmu84xdCmMNRAh4xYnUpR7M7Hf8f4nKXGYqNkdDg4bcmAPB2qzgQa8JVdiKS",
  "key23": "2C4kBdkaJmWAdLnvXgmqDKDKdfTBEwgbJgCyXjGeT6xbETdqQKntFw6cXDUTMF6y4eAfpjVLgp39Bzx6z7pLSRfu",
  "key24": "4cnNTfnyix26j2xboesbpv5U4UnAa7Ej7TMPzW5gjg9Xg3yhBBiVc3NtyjHevUyZ49mwsVzatbTfWoKyLCDztZTG",
  "key25": "BFQ44LhZF6vUm1pdWoymCwfNqUe73xhrZ8FRgNzPHk2S8oByD3euMtZvkjHfnygJEvhxL4Z6PzuKthdyUVxsGQx",
  "key26": "5MQJfjJCJc6mnNhQT6iyC1cD4KZYhGF3iziEmmfrpjcr88MiAbtaoykJFrLVn5dMkTcWAxZVVU85Ch3By3zvBKVm",
  "key27": "5wkeEkcLHBRTu8jKex8uVyCs4N7UDU33LdTfJ2tuhUmbhH1KS8C6ZA5EA1wYBNzz57KE2mPQreYjVKfHXbwGfWpF",
  "key28": "3HtwXzhNBrEopmZ2LRFkJfWvFAVBSVU8z8CAxeq9xdoMEBuzcZTqEVk9TtJWPqAdq9DQA2GPnqooQMGGWvGgMBZo",
  "key29": "4gddQ3nXHM7JMUQifR9AyYjqYMaChu9sjKDiVvfEJVqosTLiTZgS5MiP9MewKjA1hzgtP5jKLny3QA6ZkHNji4fx",
  "key30": "2vy84u5RU2GkrHR8pD7Q4A9htDiiXxwj63bcgtNEsrMAFSK4XcM4icsvzKFzNxD6bj8HWkdWtTSsp2oVJTVDFucF",
  "key31": "2T3c9azeuHaTijMZuAUDuoS3bh6JVW2gAiZR8ShBULqqyT3HmfqpBLh2xEhk4fpCiUKuWmN44UUgTMUZ9E7YCAb4",
  "key32": "2xSYfRmHMR6NBttijFSJdWJHarWkizhreDjrrtsg188sLkoYfCCXmeNv892k3USvA3NqgsdajVrLZsbv2zNJQGgu",
  "key33": "5p8mwQZ3SkFfZpxHAJDJo6BmwUYv7uDp1ASy9zLmRwumf5qHRsLJKLfe6uLWbbrBLwYPc77AMHMX5embhiF5jKPs",
  "key34": "5CCAE3XtsFK2f8LaMz93eTC2wCEv6QfhLvoS5TuwrxT8ak53VgzPqbP1iSADRurXuEnTcneT7uycEfLQXhZoxLe5",
  "key35": "4cJz4dHpi4rb97kM7nkdKyhiYUTdgRDDXLu5rRWwuEcb39QsJCJrgpoyM3GgSt1JMgxnqJ8SaHQ9MBVftVF3EU5t",
  "key36": "55dHkAM6PYX9X1UoFncuYMdSdbfXP5r7fQKoXoYcN1j95FuZrp6iyUCzqkRNVb7Rr9de9Tu3L3fEEHTvuuemovXS",
  "key37": "3Yr7nyx21Ag8R7J2q523jZw3Ad1T3D9cKbPWXnSWrNnBkm9tT3qQR6v8zkJDpoXbGEiaGuqsVoTgJq8vMLNGXDoo",
  "key38": "5YzeJmNjFhNLhDX9JxErEFhGhvj4Nb2pU24Vq9FnM6m5tji561GEA8JHmHa7JFeM5qRTqpmuVRtq1j6vPpgNP72K",
  "key39": "269oCNHVakFYcWh269AfiH4Erat661f5fkZbeWHMjaEFkRpGe1gma5ciBv32PwELzJEaGPTK94HXrxkPsS7VGzYk",
  "key40": "4e8wnf8GbHy8gCtPVNYEUNvAsxpBkBkbc7Qh9VwmZJVL1Xh981BJnxKxYQC5NwC8QXWivcEnwAk2o3t7TFsGey7U",
  "key41": "5FUb4ASStNbVW97oCZc5CcMB4zpbRPDAmYG166CDxuCZVZcbHidDYnrFvHk5hwW7EH6qH8tom3xTpXNBxFhzM7Pf",
  "key42": "gCD6NBYTT9NYszimiLex3Mx3Zer3wpP9XDGmmwo3FTqUdXCAVR4v2Vg4An4aRapFjfzJDu43EVyCDU1FmG6HYXq",
  "key43": "5Gr5bqXqbMiyHtBKqSrdSq4ZSu3GEXSTigvnUyqTrZVFBY98eLahte6dsSsh7KgP7aEpdVKv3j8mzSW7wbUidyqL",
  "key44": "2ybEuD29TCQuWCL5GXSF7BhEk8LCk3JVBpfVRUG2K1JsKfpoNy82MEunWhQvboHy2DxmQoFMavjFkuca8BKfu6kL",
  "key45": "5UqNnyc7cNmJMVgJwQr5QifreBFAVVcgcErXMoRiYjsPw8rmFXfQpM56iFX9QVSgUuDQxsYHFWp7CnrkbT2cyfym"
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
