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
    "ff6mubYKWteGY8a4a5C7HuFnkGWoEhj7yas3oM2eaQYCe7ZvRicozKvfT3Xqy7YHBWir1eE3v7WjFUFfMwqn8CH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1NPDZ9571ay4VMpCt1BYV82G43uMZb1Rby7FtwDzWd4qmFQudoRoGbZYH3LoTYzwenqvqEVWA9Pgv47CYwhHH1k",
  "key1": "2BSZ3MzFsyKx6fkvp7RXvwyKXuN3LAK9m9QDZoGH9i694Bo7bZocfbp7J1o6LMiGW2i2wuvvtfqpCCirZhX6Pc5k",
  "key2": "2Re41dtfN7ij4UrHAxhUC8rr56jqtx2b2ZhaAdQvBk28PxAm43KPb9pyPVgoLFYj9kPsoebasB3n9XcoxUqdu3Rk",
  "key3": "3inuQoRW2eUwzmACka2U84uLzF7VQXekqwyfc5rGB73C2RUPjRv44c5Et86XZ9LP1TmDTg6rYMcyc29sABR4shQS",
  "key4": "3QAmBi6HJuLKmJhJT1CsGbccapGkQAudyvBMaTfaGFhDVJQAtB6N9WpKM9EhPjjULq6UMLe6swtQAnDYG6LanvZj",
  "key5": "2F4eYJ1KKrFNSDmx5RYv3WRnGJ39eJk5EqcQEer31vNd9HeJaRh7Y1QyapCYeRpHfcFoZkMBk3pazi5Ca8w4DuNq",
  "key6": "x3tBuFQTHk6QmXBPpqiTR6o3k6ZFU4Rt8dRvPqXENzq3VeZGjEfQ31nQ4UVnTkcux7X3d22SoPwgPKqDcBAE4so",
  "key7": "43y7ZEPD1DaNDKzsVNhwhQXNZG4MLW7a7CFAyDFSTsFYQmZJmir9WexfnVAHSWEzBVJVi2Db53d7ZGCSBJLamjPM",
  "key8": "4JhHJbRiav7gVfVDnpLDJcmWdm6tfSA2psFGiwNgLGNiyepQ6P3jAiWyRGASQCBnxJU1fVujp1WkQLkcdoHFGMuj",
  "key9": "264yLHGjgQvkidx3Zz3p6wFCiBjE6Vm7HEMp1CLwQc8BAAdsUATpWgWRQmzVqn2mHK36am7gzLPBwaUivuyPiA8o",
  "key10": "5saJvb5VtzEx3fpsTVhABfaaaCBYc2zbnbEFnRDFD9zb1KDz6uX7dQjD1CXxFpX5Fpx6uZCSFa7jNLaoKhUXLugw",
  "key11": "2qbwyyJnkPJ9PgMsE1ys1wy1RoMJLxJpp7oaYzaRafMS47eFe4QEtxWM1DPgxpPvzMJ1wxZKkv5GeQeK7QVKhSXf",
  "key12": "3T22zvZS6598nsauVD1p6baL9jm9GMypoVddwf6eFAmHUWkEefKJBJMDWzSWqvnpSZfTGp1okEzVXMJtejEh2nXf",
  "key13": "45pTPN6NvKF3Fm2biXftZqSJs92HhntXQ4fk5zCThJWSxH5Q6JH6gXjywtJGdQwNPbPWiSo5x1zTZNdMK78EKnSZ",
  "key14": "G3BqX7P2b2PvnnDn5xTYp1qBL7xt31drombQzhoKEF5EdHs5bkDDYRdfZt4fSvusorSQQQYfB2LWgtKsPGQ1cc8",
  "key15": "FC8EYPkuyPgLQLrMTHhrgQodKTExrtJVkXPCDKzbCtyZn1CTosw76E2hYefZAjgssApuE7wfb4BSjWhZyAX7Te8",
  "key16": "3XJbAwJsEFvppjq4Kwb35rWjMXipR3zAGhv5WXAWzJe7PP9zNrQfU6SjVrw6yPX3smbu8sTD9kYaVhMN2qFam28G",
  "key17": "5GXMG74mBBh7Spj5ociw2Jc56DyQEFYm9ct59uiKc8N8PnxHkozi35p18sG9XEDHWBu94fZKgqSfdDdC4JvRrzb1",
  "key18": "DvWqS9DfJ32ehm6DZUVbay9KoV3eaZKReuN7iG96USbYRRdEwBBY5d6jpPvu8YR3T75sMGrsdZEbReV47yzYQiz",
  "key19": "4HpBeUcAhysUDpTB3LJRFkQP7rr3P2NkXKediDTmNVDZjZTLiw4jJXY36ePndogNC6RYYJcpuzo2nTnuosEHUwN5",
  "key20": "5m2RwsM1nYVoHg23hGj6RBFpVUsLnn6KUzaADFjB3z6tgJJtujo1cGya5sgjsfQEjuHeDkM2rMaf3znvVv2guwpC",
  "key21": "3Yo2ise1njngdk2JeNyCCygNzEaVTq5dMywzVX6k37fBa3UejHshLD5m3GkfkVCMNCTsqoRFQHEoZbAQdygSmaot",
  "key22": "4kCA5DwXC5NyRD8nsbjpvKgh9zEsyVohaJc5CQvzezzQB7BxNAXS1n5BS6VqCbyRWcaab3orJoriYrsERqfu3jta",
  "key23": "2YxFTu7tJYUAQfcmipT1L5Nx3bxjNoUddFt57Xg8sQoCv8hp3m3kkPDqp3Qcx886xhBAoC7sX45fCjaHzvBts3ke",
  "key24": "2jZRWr52XN8ZUuBcG2rbiPPBYDW7ikeRhucYr6P1BEsoLV1dvECrUTtdi4oZEjsPGTDcSjYwsCaH7LG2ntdhtJX2",
  "key25": "5UrQYHxYVhcq7Dv7v5L5RtUkhiun88zNgbSkJfbGmFoqrUSm8GhRg72sqzoay7qA7Ku7FkhjcVy47KkrqcvC12aK",
  "key26": "3MHzecjkz8dQtLof88EtV3XCwF2k9RRJrzJSWAUeQHEfcaR5u7GGK1P5s1ZgNt9FCY3kWLa9sXdDvZ6sxXDMsZ1N",
  "key27": "2esnGgrfheuYTANgpBpjCrDitH4K61b8iZfduHwtLGGrwbCFgTuzaLY8aC9LWw3eDigGgc6pSX447qSe9vGw6PP6",
  "key28": "5Yt7btYDmfhmo6j1XyaTHrQEVidDw7ejJcR3Ah7d6zSUApin6cvzWpPDfMmM6UqX7Qws659NFwqUyNG3yWw29ccd",
  "key29": "56M1AVCBteNeWSa3FccqTzFAwvdwkG26HSDBJHxeriE9xvdHmq3bhDqCqEPZXLfHo62tC65YTGQba7Wzm88aKjZN",
  "key30": "5buPJbTB8nauSEsg9EdUkgrfKPLJymJpbETMV1zm7bAALqzoMbtj6Y4NuMpLbBCSAEjPSPgHKGMSyTyuZkW2k7LH",
  "key31": "2RhoC9XGGnwVgiqB1K8KD7j4nha9f5oB1DKurkn3nPyDH7QDkxtsEr5mf6WQWzc8Rm1S8dLh12ktrUC8AQpzzP1g",
  "key32": "4MpRGPrebNw1qYyguNgDS4orzQbQY4B9NwpfTa9FK6s4VcdCU9EYy6X2fA7GSiZggnKwcCF1guvGSh5DqV9Cm3zT",
  "key33": "wVc6G4mYvTQX6UvmPsor9jZUTRrzd4Rdce2yVRGsP2nR8REWUW35RG3DgMUuPCsTKkLNBUMNn5coKggiC9Mkzps",
  "key34": "384okKH5VDvBTQXm64Z4TDS9mrU11PfRLti3ayphN1wUKuwepxjkt1xgZ4M88B5vwZom58gvPyy1fRvAc5ccYuYV",
  "key35": "2egvxFsDfTMVqDa3mT3tZ27UoaCzm9DAvDytmphCPaZYxh4x6qFk5TLzDrBwNbUkR1hnsqyZM6ifvt61CPV6vNmt",
  "key36": "kfWrtxMJr9uMGkGW2Jq2EVbaHuPXAvRmtypeJBuL5vZdreCPBr3FTGqnnSxpjFNtWXmGZ6wnoqeS9pS2qsRJk7b",
  "key37": "2WyEoAUWGnVQ6mmGEi6E4KZhD8Sp6z2BNY7mWEaunFv1L6aewNaF1JieXBvGQmgzCiPkXpvbPyQmPXaKRpo8cRsy",
  "key38": "35jE1EwKiSYtLnSziJehvNRveoMCzS4YpsHZcAEq6MNfsQQ3R6iKxSBo8sCaxgu6vuV5Pwyyqg4kuVXnXGo2a3Ys",
  "key39": "5q7g4oJQVaR7uSPMzKi5FT8woEEqNJ9MVGiGNeCX13woTzaT5E5SHDqWKr6JmEfo6C2kdpRVxrvhbgrNTkA1ZjXb",
  "key40": "5JwZ8PmyKMFCwAekLGGtbQhVeuPGTeyVYpts7deLEun8VWwp5hy1FUbkmXtah2gL13yANTWD4AK5D377APcj3atZ",
  "key41": "4L46VnSUesMU2THc1MEj7tSYp8zd1EgF7VcaDutbVKR4D3rMwpyJFdvbyZgUa5tBLNYNtjb7j7QhfjQkqoyUJFQW",
  "key42": "Rn9CU8zuHWC5EcVfCTAjgjJs19ikDWe3yVMryq9K5q5YguiGmyaTXBEBn6E6anNPgyXSMk61P3qdMBsNv2tRkzt",
  "key43": "4Np4YH8SQuYM8V5qkFz2BJciMGufqHtpVEGqbLCaqg25rkpu9JprH6VFeTEYiw1pyWv544VAcwPz645cbBeMdBrW",
  "key44": "4w3Hb7ULnGmAsEBX6RnU8LBAwXtK5ysAnj3J7TFHDi4nxtXHPPmQb9myZjLwMvSDoyT4TTd38sCuLQXJmFhoCrcE",
  "key45": "3AqPCJbHSjgLJ4QBjfYUuK2q7SKNNzucjCRM8F25pcTTcxP64MNFAdSb73kLMZHC3L8qjtH2LV3z4Bnk2mVaYF6D",
  "key46": "pBqatyTXbGYN7jih88d2XAQhSrPDpckbCghr8eYQP8A7vuoXXz8gm8o98zCe1eoW6sjQrsfT27VZLA7ttg4hx9X",
  "key47": "2HDuDA8d2FjBoT6PgmHMhKN97ZUWeZsXGzHH56UJPxvS9jAjc9NHBqRXeTAG5VMnc2KHVda8okf3fygnN35K8uSq",
  "key48": "4tTtaYDsrpHCUry8KGTpvr4fqCzFWDwPKQfXcaZTpjrFwDL5WvSk88YUx6RFovcCnh4PUJhahWPRnNVpZRk3MDV3"
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
