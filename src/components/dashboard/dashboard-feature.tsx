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
    "54gx8GTtTx7KzRKdRr3wVbGmRRcKfaqH85RvdH7bnLZT9srtYJgJpjKAw9PgUBdMAhD2SvQtuaec5DjjMBnd3AQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4feWfapW1cbFotdcs9iEZKJnJ34Gh9F1aPg5zktgdr7reUkPwpRNWRr2BdSb92fjE9env3FEBb1uFRWWFkjuRtEn",
  "key1": "412g26o9XdPELH4WuDy9yEhhz6VdLfqM3dmx1jG2dAENi5KcWNB5GRqtJ8aNLarsYbuNZmQDMJPprY5H6u1m2aZu",
  "key2": "2KNqgyy1WznNAmkCLB617G11hiJV1CbNJxgVGDSTAgd78ibCBMELiLi64HWg7gz6Vz1v6UqwURhT4wgcT8y534n3",
  "key3": "4rAx3mVbQMFE5grgG1Ht49yz25R8Wr4YcKmQ6ZVRNVz5EecwHJFGZjedPpZTWRmjjnsQcmdAmJi2kjwBFjr2VwFY",
  "key4": "4D3Bk3Udj5kKSSQvddeKQ47pEm1dn2fWBJ2x9izN8B61sc92aujgYSJD1yAxbY8jUUKiM8MQPq4Sq56AVVnpJxqL",
  "key5": "KMjmUWKUu1zmRRPmVzUvnU6sQ87RaKLLPTD1MdSWrz2Bm12i4V7WtkX8w4U4VJL6GQNyXNQpPTjF4akzM9uXTZe",
  "key6": "FvJHoXZWvuFwrbB2ciq8Tp5GWhp9giFWEXmwF3GbBVwuxG3UHy5nuxFk5fJjtfxoh359ipTKEDYYviLTd1BDFg3",
  "key7": "4YU4VCXpcFnAepunuJ6ffVYjpiDT16KP3W1k15TzJiwsRrfzY3NsmhAD88zW2FTg9m4uk7euLwpMyDyk1kgcy9tc",
  "key8": "5PUR113KhX5rDxKigRNZcQ2XxLW7MFHg9x5ACMtQicrfdGkSJLFS61PE5QXjA9XmV4GVGJ9CFqVZZEbiLks9u7Lu",
  "key9": "3bf3dAWhystRmUZXDpkU1mTNmDaHZcoaBZSPqncj4zYrrZ4wt2216vyBz1kmQKeNqEkJGHUGLLUpbioFgcSbzQMH",
  "key10": "5tS39kjMsXKUnwZZpVFhygrMhPTfeQVmHiMCXDuoq6HNGBbDEh1VNj63nJpNNkwuZ7ATyRKrhsZhV3QUYhu1MdFH",
  "key11": "1zHVKFSeVnskkGgFMqmjVjKBdN1USfZuuqSrRHAzcSyoqbFeMwY53GSFKid9fwsgKxK2UWNSiQBXzc4mRVQakJV",
  "key12": "3guXZ6kYGAR8yqewE9WrAqvv9ekwvxRJkq1Jm1kxkVdeu2Lx2mHseJKx9Qjv2x8GdZeUxFWqTvP3NGKpHYa5C2tr",
  "key13": "5LZP5FoZMEHT6f9ZoRGjgePyByL5CQq8K2BZxV3PdXpJEasjbexunuKKNMgATRBPdPNQt9WDC1mroa2VK4gVx4up",
  "key14": "4aikpcS3LoPN1siRH1Z1mCezmcFsWc57U3NN6CxttGK5jgRqBigt9iuVVFJhoTzBZuto6ckwrMnfbfbbEChxyfTs",
  "key15": "5MZqNBg6CuyS3Qnyyv9H1Go4kxXHpESEPfrfynpkNuGvhhq2DAcg1DCQGNYJtkCRtYz1kEwMnQ69H94sWTyGQiZu",
  "key16": "5rRVWEuwjMF1LXkGVTfg6Tb9mbvaByk8iGSYJP9yqRv2cdfeXkL5T5BjXB8v7YfqgWWQJTeoxiCaGX2CajaanG1B",
  "key17": "E6cAg92WhiUBNhmfGBjHUGkq7G7vdPNCeynxEfgvFG9Xr56dzAUWcuWASm1jm1q3m7PcYWFoajA6drEw7CFc34s",
  "key18": "5W6SYiaVXFuCbmXRPD2qP2zHB1Jk2MdnS7ZMasndy7A9o4jhSMDuMdurJipFCdEDUz8EjHjszp6f78oH9bHA8RSa",
  "key19": "YHZaym3ip8LM7bM8zFTEbzHs5AmSqCUJFh7qQvLTDMmyxzTf4HtHVVr3jYePyPfRczoZYz4NzMERuGDBtAYqn3r",
  "key20": "4TpeUsDWe2EEkDeUnQnPQT2Ss1UkPz44nykAXu7hqE6x7mpn78XmRWxKkAgSRVocCtej2YznEZSK12qWnEULEB6e",
  "key21": "34GjJ1PCkkdeS7tfACpUZzwksuy1bnQQfPyocknEfNVzsmjTLbAa286xn61Nae3fhxXCQgDMNYCPxW8Ca1BGNo43",
  "key22": "5hy6iqAmAVCyfYyvcPsNkuDzp5ziHXbHZHt1u7MwgohRaqGGrA6YjTvfekQH6x3cJGvAFTHEhoV7kMLUhezMDvb",
  "key23": "5PkZWB6mQGXXtHroy2Y4PS8vMBjCyjemVCRGhYJJ4whd8xCMP8fLWd252BV3Cr2qKW6KZYbQhG4TjtK68RhgzAxQ",
  "key24": "qiBjf9N31HceSWVLKfYKWvziz8BLcGahPVor7b38hjghR9PxKMxWjBSJTJBHQNM1qoB4dpkvqUBaBmDgcXWpC58",
  "key25": "ohi3YUDHWP24Shk6FvajPLwzYk5N7vdd5YJqYHj1xYyBU9KMxWxq989o8j5wM2bwPc4QPrFyiizzh4nfA8NFBRQ",
  "key26": "2Gh6ae3iCDVYFoFA6Yp8J3VNb12B6qaKqHnmLYRmpc6KrbKDVuQ41Qpe5gaHWancsiyHRrp4fbK7ycgbVEc8jBc9",
  "key27": "5tFP13oEtzct8ThhZdN4bLfdTW9bKgbe7yURAxRqTuJfS346t6GKPPbHtwcjBxi2MYwc95jeYxuoUPxtrWz3N79f",
  "key28": "5ndghb2gLpi971GaitJMTfZuEU3TZKzowuqmJFT4kfYoToW114fKXDtFsp9HmtqcUHntfarAGxfXYi98KonXzRvY",
  "key29": "5inecoJGpKc9ZJYJFoYiK2et5aJV8aKP61qpAnuoiy2zLaEuRLf3vvFrNpafnj2zjZ8uiHABty7jtUk8wY7HnLPZ",
  "key30": "5RR1bUP1gPpDsCw1rGDc9neYXZnuNQHvWieyFxWySRvGTmaZAsxz4XPyxmJgw9gcffUSTgSuzJQujcN36uaf3YpX",
  "key31": "2VeEgh4225TKorR7AtAF73dwukTqP5cVNCaubG98RwLJK1sijXHXwhRxziPdqhcy66iAiKVEM7aGJbwAGK8zoE91",
  "key32": "3j6wPkKPSKtvHK7LoFeba7bzh4E6svc4qn8tL6W1FEVZdRLy5JKBjxhReP9CSQymN4pQ9Lw5doCFRgHekrrinBVY",
  "key33": "5ab2LzeFkTF455WtxQPd9c2PnhcxntC8U4jhA9NKcRnvB8EKvX9z2mw5ond9KjJNtbJb4d1sf8fbfsBkipW6XcZ5",
  "key34": "3QB1ZiWCr6m1PkWd3STQ9QYgLqJLL5f6Nqaw6b2pqWuQXV6q8311c2Uwx26tqWJdS5q6kLyhkrucEmuQBZbiV63r",
  "key35": "5yEAMSrJtgeWVBqg7QozAbZsWpwJYksNjSPTVTDoFenTFNxzAFef19BQ5r7RqV74sW89Cg411gT8X7TSZshD3nzC",
  "key36": "54hCUsbvwYLLkTTXB9MtsToQAzjstxhm6QYo8Bi5Rqn4TPbTdmk8sc6yoQ4DmxFMtGhBo5Pc7jYEAhUAtkQ3PFbj",
  "key37": "3Dov2W74D5F9smDR4pG2hQKrA9KXFyDG8VxMqwo8KthfJC6uooRDXjgTNcVHzHd2LQRL6xZMP66RCBKQxaorcbYF",
  "key38": "3S61MTLhotnBkjaV6ExqAy6hzdtoESGciYPArZ5qyuj9hJMxNmJD2JwLm7QD6mDPatYL3SLiBk2QCTUhNwLY6Bh",
  "key39": "3j97YiEkDzo2FhpubbyBnKrL5u2hFgx8x2VArGKP5eDcEGNd94p2gmFqvfLd4Y8m3TCZgSV7FK4TuR9jGRBoVHsR",
  "key40": "2yLhmAjDKGYWfAKNNW4CtAqqXSmLzhtT64oRzdChbveJCpxEoVXZ3RV3tTHoKd7TwqWcN4QwBqsnmNdrAyFF7PLb",
  "key41": "5gNVteBEVwbk8ZcW5Z5pyLEjxAEWgTK6GMTxDwkGAmU76gM8DbR399oqhaSkaHk9ekB8N5wUjCj66CVSqBjyHAFz",
  "key42": "4zFcx87MHWLAj67gTXbYBucp9bF1umFJzUFV6C5KtoZ9vMP4TPDSwxa8e1hZLXhZxWWeTLF4Li6qGV7y323mzuv6",
  "key43": "5JjdKimKqXwNdxjsn9E7dMnUZiWAhFQxAyLcYAQuaw1psPRfX3VnkH61HRKKvzrDygbUjL4eZrGRzjteTDzzRL9Z",
  "key44": "KVpVenNWnKBbmWdAd8ruomLsNa1Xw6wR1J2YKWJf33HmSFWfLDVgEuvH9kb5odvMGsThf8sNvHV3dS2pZsr6hSD",
  "key45": "4Xpz8oKgdxX6KoWLM5UDA4qmprffgdjSjRTY6A9oBAFK5csJq1UQBPtX4z5dZtraKvbA3cZAUCkeULmvyUNKAXHM",
  "key46": "gUEupBp85jPw5qoNFahRfoj4y1jLjoreVErKzGkmmyinQbdPV2v5wwxaVfRv5nFidQrdVATHY8ZAsX1mrxTNTFq",
  "key47": "4JyNMHidKbsL9D3HzZRxxD6dHYhW4WWo4gF1rCaCjNsu28osZqfM3Snt4gCHWSp8SV494nc6r28ELb3dzEeZnYSb",
  "key48": "2mDp28JknVzDkMenimd7hKMmT9vyfHZHoEpri5y5foFtut1cDcLRvH7xABmtFgtEZiMesud3jtbiNQ4nM26zM2aG",
  "key49": "61ZAFFCDqAYtJd5Q5inUvmzwmmH6nVGNL5qREm29tpKXLvwRgZRPwHBLEyF86T2fkSQdhwUy61VSzh6vYGgv7Lrh"
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
