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
    "2TDzJRpL9wqqQMsHo5gFTFr3np3w7ouPXik9wF2a4Beg8cvkV4bPfGzRZqcbPHWnh3QGcV376ekyA8M4uAmjUGHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y1m3f9kqukwSsti1HJSYC33Eo7ukghRc61wLFwNJBjST7jnpGBsU9XdfftKyLDKrh1smGCqWWvziiRmSxqc89uL",
  "key1": "mmV6iXBtiuhTuuyjdDgCEirx4icb97vqqoA88R8JgrZqwFdfmNMD7a8TvkiuH6gJJt3LqS3vpASWfZCvQdXx3ZC",
  "key2": "CWNYsE24mabGNAfa4CoDG19zZxJVfwLtwBx18GD5YMBrbSzL6TuzLB2CM4yP5cgNPtJgQKyRebjcm6DhFJ8yuzo",
  "key3": "2jHJAS6de4nfDLoeMixFNZosMwiEB2e7uzGGM3Dm5Rs1mzshHh7Q63iXEGhGoqC3AK1C8ozXhWAbaHRsn2t8PtZn",
  "key4": "3xLgiHsMzbnjrH37gUJGexhzxP1GmvQdpCMomRjMm8QHCyYycwckwPXPvDjymaoAGY5ztATiJ6AjMP3kVtJnaWKH",
  "key5": "3eZQLvSaHVudTcY7H4Nrycuby4Zdq7dCLbEdnqTARfU9sNQWEFbC1W4ZJxgAmNWSYcCahHyGdMwCA1W8f9whTnUc",
  "key6": "5jQMSA7aRKV2boP3K1DhVvz6NnqRJjsD7NfXsPX4buYL5aKnrBWq8Bcuvp6SV7SLfBJyohzRBwywDLHCZoQbgX3d",
  "key7": "2uNGDwPv5PDAc6CUkgniFd2wzBbergRmMJiak7LH1HdtYpiq1JEUw3WUAyWktAEH5rRU6izxXqK4uzipwmYuLLMg",
  "key8": "4pXNuN8tpukMaJV9tCpbKweNojioTqy8zPwkrGbvruyamTWMwPEEVDKi5oHMXpYwMrS6GZzSan4hi5CyJpmqrfWj",
  "key9": "213HiDKYy71xggJzq3VdS8xGsjDGfNs9gzMJnFYdHprEakx2hNcCfHCV37om6Q6zuCZukV2mVUuxT4sYY4exQEhd",
  "key10": "4JwJVQQurezdjXKGcXy3nTxacCwizcHsusJcEQ6f7gV322CAKFBhjdA7JxepvtokmXfGpd7kgR24wu3bQHcimYXg",
  "key11": "3zqtH9HSjHeR1c31thvPmSJysYjmmHoQsVXff2ZGywN9NovShggi5SwedAnXQTtDPxtp8zDdjPdmwb8xGjkuuvuh",
  "key12": "31dUTXdFoiQXEcHZRXCMSsZYZW4kKt8Pv9aHna9o52GzaFFhHTopUjjpXw5ArXXBfD3Jad7XgGEV124THKZGkE5T",
  "key13": "5bfzCxuy6B5et8atK2VqWuVvBZuqApzkZSZmLLfaFhYsyVW6fxX9hsx3xacoemEfkwky7h36gausx38KVQPkRRg",
  "key14": "WpGKPRf6xm77Uu8EbqSLfdoSBDiCmRVD7sB8nJ72DTAtg8hrspbgaMZqF16bcyktcE66Esx8LUfzj7XtxAdE5PZ",
  "key15": "2VpZrfstEZm1MnDZ9t4NaHkQWybqGNbQowFQFfxenqxFYmsAconv3f7nSmCbKJtke9UCUAroYHxFeH8ZpnotcnFC",
  "key16": "4EYTfa2xUV7CjbsGqh3VKmY3zN2HgdmVffmmXqhX3uxeVo6MwupKvuF1TD6NopaJXBBXwjqzoha63jpj99LGhv5a",
  "key17": "5TRSoGqK1yZvZLBMQZC7YArPXgEicNCWt4pTnYZec8yGBQ6EH8qXnguxCaQKtWzWr9q6hD7MAFRDCjfN98k23KDW",
  "key18": "3MbKtmVECG1x5UbrbyeLWdxAFxhj75PpCXHL8Vnprh9DWVkdezb26qakJSpka9TGE53sacY9X5PVmUbnFaThJM64",
  "key19": "5f4cA6zWQPub99kGQMj2QpDryCqjvNsrjPA7cPTPXjamkBHPEQDh6hXSz3RBZWH9Q7vEg65K3RH64VFdeuDSv8i7",
  "key20": "29DoWqTQsnRqPd8jtnt9E9hZL8wpoHeevLpVecZkwpmbT4unS8fLjzxDAbWNtX9GbPbFeWBSGHpYu1hSEFBF8AeP",
  "key21": "WCXkZ6VZaa7gNMu6zvfYYX87uLipmEuc36tJ84UGMYX3ELtwxixnoNcRaD4Yv34BYRzuCY4iytfxE6qx9WbGedC",
  "key22": "3Gmz4N9QMe5a7DS9x2gHdU9uETdM9gM8KHteFJ1dK4iXd7Q1TZSWkDpUGjqVbFahFhYUPWviSWvjhUqCeDLrxu5p",
  "key23": "2iYtdUVxf3vF1SszfvrmJ4cDBDhWmgKsPwRzsxYDKhkv1rra85eqT1dJKTje1zKZwXewirkJpWuFJRk9yxDsEF6E",
  "key24": "5mveVhwJWhL2corCqqxRxXgKnATrLCY7kssjNtEEwqNtZpUs2eDXmYtVhXXgmeyeBjwWycjEcgEJKmAvVtvXDC9S",
  "key25": "3N2419UrmXMaHeYasFerMqC9DdiT1q1RUyH39smYqGi3sFYmBFF1uNA2ugeUQm84BFtQgnP6NwKy446Qt2KembeU",
  "key26": "2BwsPPwukdq2A5nqNNtGbooBxpZyXsZqRh24dBZXQESU69C7YtENfgwYNWoBWN2xx1tWKcochy4bcW3FC4ye87ht",
  "key27": "3FARxRCSMVnEQPkiPAZ1nrCaAXBb6a4jYGixhNw7snVFGExs5t2aap5b7nSSY8znwMA4vRogRUZL48Ydg5918Am4",
  "key28": "4nvcteeMWSjbnbGu9bPETBTVnnbhHN9NBZqTB4EXGp5xfgx7xdvgsq9zqTs5P3C7fzyUiLAparxRMzP3hxYVZD3E",
  "key29": "22xRQjuArXbVN6US33aXUot39vsvHZWVyYrwHSb2ocSrfwitW3sYYxkQBTUAMz4ZayRhyQLYUDCj45eCy15czKNM",
  "key30": "3AdSKPCudUWk8fNvRHHocxwD4kJtwgybiX8R6D3eGyf1x8ZfohUgjrUP3Nmo5dgJ7ui9B8ELSkkotKFcX4cgrxmU",
  "key31": "515mULfybxVJjw2ZhYdkJ1wiQQQDZQ2oRTaVRSyswA8Q9YbnAvpTYZYgN1LSkkcS8D2pnuSPiZHi5EXbbpp2c3Rm",
  "key32": "36Vr6E94t3JaWDVnLmGZoCnQzsJn9x5Jmx1VMwb8UgEvCjJsYbUqSpnih8d5XF99y5MVJ1CfDLPjRU7s2EiPrXUJ",
  "key33": "3qjmgc76QcerSxUz5gq8uGz89vsLqVMbsrDgLdgK6XsBF3n46Pe54vaAKRo3atd5HbRuassvLanyzgEZHAvmQWfg",
  "key34": "c9Rb6LagxuWY4At8S7URTB9PsCizMgWAwCfsm1rwpcbzjTqV2a5AUquLNmXCfC3aGyFihukYZLo6d64UbzigVAM",
  "key35": "G2GzsgqLR7uT5LrRMzq7KY8HMNms9z5W4o4iKbfyZz3xKh9dpLHimKJiM3YwoPn7mGnJBVE5LxZ39fPrd4SmJ9J",
  "key36": "2yLEJ77GwvQyucEgq8jYcgJM1BpSVCud1tUnNJ9P3SCWqCduDKJPHMCwmMNwGffCZKX5TazJbbc7A9HczJcfP1Qm",
  "key37": "2boMUR95yQk8rziETcN7uJR5CCgQFpCVCFDw7wx6eLTaBEW9Lbfa3i7jhGeztqEdMBYepfUPPSYxku8qv4MvCUXq",
  "key38": "3bmKctRAptJGBNX6ZPoXFu65BZMwSEUzLpADvNK8P5Fxy6oLHFa1EtxLayQfcEiA3UTycruKnXtvYbPKtrzxWsG2",
  "key39": "3Cdc2kGRKuD4odxZ4YaatocSKJV7bcRfUX7RdK6stJ8pixYdYnnoGXSKUWDjBdstvmivsJn6HSqWr7hYBgKwu7R8",
  "key40": "3ZQvqLkTQRzU5SvqWjaTWNrgshZFC9EbGE8rc1AevFX46puL71hnA5fRys2VzdA8d3oC8yv97R2DVkMMT4HUn87x",
  "key41": "21JVfqfsp2wNoqjW5LT27MXKWj7tvHupeJ9McNsXZww9Gk1PxcmW3yRHnis3ZbMisPMsL3rQuFxTGYPSf5rJm8g3",
  "key42": "cMwpNgfn1eJCrRB8hm5ozTMM6AGbWbdyFX7YToCi4Y1FXcVvNsCNWbUvNwJQkvGRnvspZYrFaBLAqbEwppmUdCj",
  "key43": "5wK91fLiaSwXXdoSZoedxAVSihHNwKy4dBZvBXj2KMPjz4MchEKeWMeZuPi4Q5zgxYzRzPYwNUZwUiYet3vGoGYv",
  "key44": "2MLEi1mzzJSnVdE7N7CKKGQ5cGibgSoNzrPZkPtFn2wCJ6Cdbbtp9iAcihATAoAH6KENE6Hhg7NE19W8AhRnm7nQ",
  "key45": "3yepwXPeyxBZkcLTbLUniyGMdYzkxdJPYKefYNi3uhaxTk7DTC1uKTsHADXiVfMR3iHtm47gWotwJ8KJRPtvoZPL",
  "key46": "2rvyMPG1apsRkBoKmLdBJxXAQnVaWxZPJ7wr5YGnxD67WRgeM93eATTdaQQf4VMyA4BCLeM52YRdKJiF7j41QPfD"
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
