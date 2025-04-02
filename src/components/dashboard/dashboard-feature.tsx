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
    "hH8NYbxmK2vVut1eUWcNsvgC56N67qjscNS4GJVqY2D8Wu4D6qVBoAAgdS6h1y34RcDzBxKoDq2GM14CXTHYRdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32wCK6jYMBc99tgWsSHBDs4yJz529vPyhX9HnF4u5rbLFZt6TKr1EyjUedw1DjgNBCU8VY1YQsCdkc3UMwVC2WL7",
  "key1": "2QUYEziuUhXkmTNr6FeUdcQPVoupbLoxUn2uWtthwLZANxUBFd7cmAtc6jfdRQeYkTT3WXLYq5Da33WyYoGYxoQM",
  "key2": "6sLva9GXGRmMpsbAUWdZUiauxn5hg5YNWhoMmsoAfQr42Qbdg5fchtRYiD8oAnHDvpqZXS8M1KvyDBUiBprVqpr",
  "key3": "4rsAfLGc7EokHitfFbLcHAcSbaCn6EXLS3PpNL3SDVAH2bSBMBq8gEVB8rorhGPzDqz1T3UUcFwaoKi2zVRKbEWo",
  "key4": "5HW1khh5TZHYxij8W1UNERvE8AEdDcUbmpTsaHrUoouXumHUEUdvchaQFce3wXTp7VFtdFceBqmhDTzgACQrVu7t",
  "key5": "rH7kzuvUpYnMjAxBvx8QAG9o9zrYQSrZRfpit6vXRFaqJs2wH7AAzLjTzBVmBS2brtBJ43f1JwCmi8SDXh2WFi3",
  "key6": "2xDzP2kvHkTA1Nf6NpiXG7NmvJoFtpSEmwLVFwULHNnfHX9nUqer8AwR4sAvHA1gKx9XaRd7dpjpwks5wMPXrg6J",
  "key7": "4EU3or28wX2nxVsBTS6H4SMvbfgDTHbeGPkA6jUwxfYDfBSDN6nGn3CmXjEg9wifoktt7Teb3UaVGdFM79zgFQoi",
  "key8": "5fKvvAjq2WipqtoahyDa3MFjrtYmjBkaTW4kxqcbNrL9naFCFj2LHAMZ5gsYdSwCDApkTbKez1pYAmEEuA2x9gEV",
  "key9": "5wbvH4i36SJhT5Rwspfqw5qvTS1PcrgrnqCFn4Er7PqQNKbu5Sz4LocQb4f4fNLNKfjiPEd29JubpgVUQ4uUd9Bh",
  "key10": "4RPEfLs44xGCk4WJJLGWKDUDqfKcWvkw2QfDZxMoG54KVhfseTji6mBUsJ3eTjrgfcdCi6KkXhQ9zUB8MBkVa2GR",
  "key11": "eaYPhdpX9v7oe5654Ut7nSs2Gz1b921v71VWiVV9BBMv5m5Az4nm1dZyu1aaEomAXJe6a7MkcfRXSYuuxv39bN8",
  "key12": "4NK9DB3WLLg1boMkqRNFwUG4YsviAFUSPXaPahAoWGW6CJy45CKEWfmPEoeETaYXY9DTg7emBooQRQJfjC1FkATR",
  "key13": "4ruB8Vwg9QJNTuyjD7HUXq87Um7pgafinrJqMM1b94ajJ24dT7WE6r5jLgULR7J3xZFhaMBD28KigVEEzBSeoysX",
  "key14": "GeU45emkimQSh5Nep9NsA6VMnAGr95x2L1RChAEPS3AfxqZRYysmevDx7qgVDPNVXHC1EDLeWuzhq4suXdstZER",
  "key15": "4iPEhMUwCj4ufrrLrtgr2fv2dWxBkUTQmsLQE5zsuxb62RWzUUGN9DbDaBc1EuBUSubAVS8DP7oQRHsKgChy6YNM",
  "key16": "26PP5ArVZ8uNnngufJGuTowesdSHETrKTkFTJKunMBgsCzmDAuEi6GrobLcxBF5gzgNC3kLmShSeHwfmqmr9XLgh",
  "key17": "FdENFM8UtutQgrYDNVPHQbpn3VE8aUgSj2p6cV7hfhDs2fK9YFD9cpJ7T35pHAwLMGjKwfDwnAFqQ7NEz4Lf7nQ",
  "key18": "3rMyiM8X57E3HFMejjQH8B1QkgaA1GEhvpANpmtoc7hrZzhTBVVzUiYAJ7q3AFLhq6YUNrnAbCmp57A9jqbxUz7t",
  "key19": "oggVu5KAZfTDrbAy4Rcnx5AXS8zAyBWvc32cPswCXREEyzhqsAjD2kdLSmmwY9Ye166YYnmugkanwMY3gkjx8rD",
  "key20": "VrB44M39ybA1u7vKZTRckDB16dcprQUUh4ixg2i6NnoM6igMt1cdmjyMaSPxhVyXNY2oB5DKkoGJXtewyEcHDzf",
  "key21": "29tZVNwC65dDUGz4n6e84KbeRTyUDUg1arKzgXnA7GLyYvdraGPH5D4hqwpXk4poa5dFSCraHsVS8EUhyknUciKe",
  "key22": "5WU27mxQnaMKWwiaW1YJfCBQx1wbFcfbCb5X2T2Em4DtuZUgdKXPmGR81xkBtNC56yX7dbPKJM5EPjHMa77tH6bR",
  "key23": "4S7ugL9wGeyk3bUeqrwjZqqJkPRHjAZHQgHc4yUjY8twcKQQ7Dtf3c8V3PAEtdiT2DBjew6JGW38quzR7zhBaX2k",
  "key24": "2m6P284f6SHwwrFnYKFW19rGVcGmzXaaLUTc5ygLmkhUGA7RDiwWRR91m6c7AjDoitSeag7KLKZfDwx9yFpVZTSt",
  "key25": "7BiTcPpryknux24JwjofxhRUdULoqH8oruCrpcXasPC6gctGvCQsFfCPHCywwdwkMnyWACejT9RcUv7jgesXB1b",
  "key26": "4Nm3BPzUmLjSQJHcLcS2iZRGP93v8NFtdhqwCc8Ycoyb3SmAaL1eWxzkWtpCMDyZ2e4LNnw29wdLLxFunVaehyd3",
  "key27": "4Dm8gDzbxBDKoeVwahgY4qiN9ERrcaiF3euzmBSvrA5gCQjzqbKoC5fmnSM49HHNihRd1xGR9jvpQhuyKy8e5WgX",
  "key28": "44GvUT4vHUm5ibtJY5DDsirnsk2kXPzZFWLnCyhcF28AgrHWkyQuXqwbx8XBR5AVSt8kViRJfuYBkCLSNwUk6LGy",
  "key29": "4ocRhBqz91fXDzTDdKzcTbFESo4e8VSffpCFQA5qvdZFVZbdwbTGAzyaKy3poPcjtVEtWEdFxLiuiFLHhD65VoPU",
  "key30": "29PrnuUVKkJYZBYcT4C19BntYB5odYrsP6EGFucPQnwCAc3dk3eHgjwuwedVLhi2AgrdUtd1M4Z7RBV1sA5Lqxfh",
  "key31": "4nqBgit2T5fYUXtvFW7vacjddXkp23CKMKG2ib2DdEjajwmFQavzRYoB6TjYxnH3oEsTERfi6KqRo6GKXJC6xLCK",
  "key32": "AqZ2EB5VXPHKe8VXGQhMai2YQCb9c11eANUKdjt4qXN1ogsPxadcXAUViRkjU1W2TgyNnrTkUvwVMATdDXqfUKH",
  "key33": "3m7j8ChPMMEdNuH5QtK6SVgHgrQV1CDbZwRvPgyfq1Gsr8FxCeE1URJCvJVz2wMaxYkKHnsXftuM6FxfswLFtDXt",
  "key34": "3d823h8ytc4SPJKdSL6ZYKkHE7ThQP5pDm1ChFx64FdLasFcW1es1zzykN1GLxV5Jc7g9CDqFeNFmYMDw6dTo2qA",
  "key35": "22aDKdYEpfkxvPT9dSpjd7VpnhmAj2fSrmg3pDuEgFEEen5LHtAw6nzZfVgXYx4KkAeXuj24tfkeP9SgPELe9y9D",
  "key36": "3Y4yvRJpaCaogUBsezShEStsSVBuQ99AygXSMvWbGudWCq2L7mp26oFF2Jrj8bD1GyJGnJM828dkPL3K9ndf7n5J",
  "key37": "3YkdWZgEsAvtfVbXMgHc66sTfcRJ9nn98k12qrmzJKUWJzChUBjQd8Ljv2CDZBR79cdMMwJ4NUFkVDLSG8itcPAA",
  "key38": "2zRckrADa2YoTCfvpoWLN1tqyDfJzN6bx4eFfvvxoZihU39z84owWtMGo28fUJMNxniLGPm724KMUxcL4DYkUW2C",
  "key39": "ZFyWaWM5gqhTprjnkYbRP347TxRD3btfoTTZLEzwAm1PDuwUxDk6859GX8YEecDQrwa4S7AymsZ38LeyAEqfNmY",
  "key40": "3gxzbnSS3A75u4xuemkEunqou7J5NG8Yg76ViEtVYa5hJwqyMpyUyruRbUmJxVSeDpZuhHChWQazSd5VUamS9j67",
  "key41": "4Cd4eHo4vMdJcQUonh3wpT2X4uH7PKuzWU1hEuk2h4vVZopH5eHu3M9vz9uBcWjuSJeaFHWEWvqn4DEcCYcTd6q4",
  "key42": "56bfwz3RmyUop2MZhGpLwoNgQWxhuhVTrBMtMKFNqYWmrWY3MUU5os36E6SpkK8VYeiC5NddAZDgbJ4kDRcKzXir",
  "key43": "4P6ydy7PsiVC2wZw2vGTEJE458W2LLhTJr1qtFPgQEPe5XuLaQhhSeoQWuoPbyhRkji88BUUpVYCLH4RCKD35FRn",
  "key44": "5pYXLNthFZj7LDhHaNuqBKLFMEcXRhC5bNCj8zQkh181HvXM4tXau8JYvjo9LUvfLig6mULEgxWwdzAKvWVJ918v",
  "key45": "4c5XUYNAXtfgDLHGNswBbwkZc6Q6ch5EpgTGJQDgu51z7eYHC5br91xeWA53JT8pQsVoXhj4d3Gzpz9GSrvcDjC3",
  "key46": "5ooX4YCkRLTRz3JCzGqawCKe6Y2VF3hr7XjHd93KHN8nWjw5JrX68dAqg9ksGzdhobnevDzue8PUhXzQuvVBa3CA"
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
