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
    "34pRYoHp7tnTb6BBHK6eda9fNV2Z4U9ehV3V8HZ4f79m4PpwahruFpm1f8U1wyrFU56nvvkGb1wZ6u8tzbEzfv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tyyHRhXKyQuaw7kJdeCixQBFJm9pvXMLS3hpUBb12jummbPhSXjhUK5pzh2Yqa9DBfG6AcLvXJr8BHqmFRSUfqo",
  "key1": "33dpPDq8qNDsj3VoAeA8nmeQMn9NRLpvF2eyJRJbxs7RK2cUfBWNZLNnYNVMDP7Ss8VbdHYWae5M3wMdgpFgeiAy",
  "key2": "Eb31tTHGShhDUkt1tc3vx2wDiAN82WHmjhvgLK8vRnAQJy8VKyxasgjZUYceWXSa9urGGBC8x8adoi7KnxJoHDu",
  "key3": "Vv9zfQV13rzwX4rR9GiHju2TE5uNYyPNuMcyYrSGPUmwVfwWnRhvuWxqzS8YUni6BnFPsdy6Jas1d75BmckpPwV",
  "key4": "2DrX7qX4dcbRUDPb5aDYFHdLwPgkRpLXUwqcYfdRkzz1wnBbJdH5xGwPMtiTpjpJQB9WaAAjqCM7ZaN5YxqArGie",
  "key5": "3pzeQeDKGTdrjgiWqv6b8PgquQsJ3rnLwkQYhLaqSJ5MSkwnWLqG99M8noCRVpaN3nHCfXHd7frxnNQC29RT7DZg",
  "key6": "38L25NdysHqbmRk1UxXZDrn3CTU7pquw2LCXYPeR6Gdjkz8zLRpcvZCTcrpiDLQ7kfrzA52Kqx6MP1XtmFetZKjg",
  "key7": "3hmmWiMD9DwGzsciD7YAH9SzUedPm3w4Fch2jTTBcr9CRwukuyrsZXwGKCWVitq9VUeoLsudbaNFL2weAyKWMRuu",
  "key8": "5476M6n5e6hW9xE4dptMqs9skMuHw75KezmqXAkc8kioEpFHrsD14Apz6ruagz5gfoMUB6RMqFE21K3mPNryQSEy",
  "key9": "BRnXU2eEKfiYkRNg5kkkXGSFc2cNckVFDhSpKquEa2K1wVU1j8nzkCL4mVno7nEpWe5T3ukqajCRRaGewQRc7gg",
  "key10": "1b8HWNSKPVeaSCn3yskKP2yDDm8HNLLzLGCDgQJ3rsK6svwtLwMJakAQD8xtnGPuX3s8HGZkDedEsVE4woRoySb",
  "key11": "2WNcnt2bRAyFnCKWFNNCgb1HcDnmECEaZAdb6beBjdR3qzj9AQJPh4UkdvShfEGfVtJVXSEEVY5qDGHC8LkPKa9v",
  "key12": "2N87Z5BRfXUns4VrDjcFQNzwjJqMNFkfcawQQ5MxNuVQ6xx32vJCnV8vt3N9aTkNXVJ7wzzZXHUnRmPPf2eU8rSz",
  "key13": "4fhri94owy2xgJWbLWfYF9tKRYbozAdjMw4EnKKNiYYPTtPXEEBWqV6cRkroY5jGcAdUCATQ5BH9rtc7yvHEE7Kp",
  "key14": "341xg1YiM8afB2LkSZscXJLVn14q11vw2PAVKnhr5DyAgvd4wK1qCu3EY619Jr2be6ZhFt3svw2KR6DiJYdnH44c",
  "key15": "3sLPAQXW2YqtBRurSca5yzcQejysZ3oJhrryPnScuudbRyHzR9dmJZHkCWzr5zQzwsYWdthwwCkuDtv9QbMkPFuH",
  "key16": "3kLeFfM1uo3FydrppaPKPduewwW51kLZ1afh7QrcvRQRzShktxj8FcvoLPYLkqXcaXi5d6JNXYt4Xe1xW47ETxVW",
  "key17": "4FhQnaWsNm94XEPv44LpMDzsVhCtyLSsasSRKpsEfCdn3qHgPy96BhYD8gY83iowkVFggFNpktT4eV9rQAu5hNG6",
  "key18": "4n5srhjgdCHZSwxDJy3y8VXKYJhe7ipErSpSZnTKFbevap5dvtber4yq5pQbZQfzQdefcxrpW84yQsB35VsQt2FM",
  "key19": "4VPWyAiDsyGE6FHb3tQcxAAkJJmACTLFUcbyyindbZEUhZpndSN1dCRcbLnQNbzGsH79tgKnzoDJMJyTgwAVqVe1",
  "key20": "4XY1S5RCGNavB4afLkB53T85aYo73U2NbjtYVb9LjnAQFfNH8jJRj31xpgZCpKjCicAxXATzAUK3xi8g8eXghZyN",
  "key21": "Q97BXcvAxdjgzUtbQ5odYs6dK6J5MC8yH1U9BX8WH38emdCsxa9qHfHHRdtZ6EJK8mNY8SSoWSy7N2GgZKKXb54",
  "key22": "5PH5NR62CLKXCaQJ6S3uxxASXb8dn8d1vakHw1NQTQy4iuuYsFoKVarjZBQR9qZjk1X5fJVCJartfN7afMAW6oy7",
  "key23": "3qEVatabC9Tysax6tkntgtJryqbtFM46AcAwo31bsjJkx5iMQfmPZhXoh6d47LstzqdWU7gqMgzohicoYv7v6Wtq",
  "key24": "2FB2ccBif9WcpGxddVWqX1STgSRYN4g4MkUMhDfZcqEtccPESjzc6G7WwHrRArcWXKDe5HNrxFMpRPuJRJG9BMXr",
  "key25": "2pGYzJ8LhF6t6dGVhwEqCSN9w8uooVjAiNm88FGV62MG4u9yHaJBekU1A9uQWrU5eQ2jmqZYGRGKxCJhfRDtgASC",
  "key26": "4pLw2M8f1Qpma6u8voyHUQzXXpwPdyAwgRN9tsaGuCDnNtMoe91B36DH4ajG1QjZuWFnxbtWPbwnPaVKqcUA2J3M",
  "key27": "2s2XtUNsvurPhS2LWxUgfMeBruYP1upnWvMACD2o7MhcrCXad6VvbYzraGrenheVC279cuy1yw4Dq18AjpRVaf9X",
  "key28": "3oX7M61dNNKHQZAMRgf3JJpdytA5hC1kpgWk2zL2duc2N1k8kTYxcmDcLkzjE3L6DZQDdsv9p1DFMS9JpTDgvTBv",
  "key29": "NuhQ6BhvoV2txPGnJLBqH1HYnmKnrJv4wGdTSdT6ojJXLhfSKovzVVTcsEAQ7d4QyTtfNugAzt28DjRSmUJVnhK",
  "key30": "2wBKVaiQQt86iJZv5mYvUH45TDzSPZkivmUPALrsdyXVj6KJxiJ8nXzfXFQBcM5HctomNbnH5kcLHWFuXa4hZkU2",
  "key31": "4PCqvfU549mxTBtB5sweqy2mzHEtSCa9MyCW4SLF5CTtbkfC6HAGy5GAdyNz4DFoZ5kYbU2oLZtgGj5UUzP5XHJS",
  "key32": "2figTDF7CweJq1bZmN9zVt4qV3dr9MdxEqoaLbXEwdXmhfmDQbj4Uf4BDmspsY43Jqpvh1xkqFc5o2Dm8kvktmbe",
  "key33": "4UU4zer8GtPYo44qnk8papxDiLJKaU3Y8EvbXkL3NMtYNjAbRrZNmQaHAfoXe1Nshwj8cLwiPNUtQ281z3cofu8S",
  "key34": "2VPRsmmpjEw9QdsZTZmL84EdseVapHQ6gwiwpYr7oz5o87K8qy3J87VTyK4efX3s5KyCSJZ8oaAq1Ab6iKdja2Zj",
  "key35": "zU5W9DYNHRvpAN1qNq5AwjttK2ZbRX1TfcYFgw15KgyeP11StDHqedgFe58MTJbxnj5Wy1FJQjCNnSDEJ4xvZMe",
  "key36": "4yP2ZXjxWyHGbdNM1KZXEuo5K5es2WHTk9vYGvpaoRELgkky8dc2CzXnQfo6ceZYLscebF7BEaSUMGVJSjcvy9FB",
  "key37": "4a1GDwMfbc3xwSu5wJ4DBFcoLcXh5W6uWQvQ8vVm6ReMoC9uCUcpFQYkMfmtjaSTBzzdJuXDBFUzF9bgvc92LCJc",
  "key38": "5mghceUDEpnKjvkNHNt8fvmjeKiRjqLS9JhGSZookFttCbF2ktoxRQheKTzpnjXJumwqjFekcRFP1Ao3h2YnMaLe",
  "key39": "tnpRQ36DPkbWjdJthQfjND4aa3mUiJcFP28Db57FzdsL2QrxAXeC1aLQDaQWPhrEyBCR76U3bYi18q6NpZ8ezpX",
  "key40": "4X1tkiYPzvRu7J2dddVzr3PLHJ2Fhu3KPfukj1kvAvqkpV9XHhGE3Q2enjC58b8vh8ZhjdHqRq9b57SXtPzQBQ2j",
  "key41": "4eeJckUpMHi4VGSgV8BE6Vs8whmMjzfnvkSEGxMnRFGXNjewxirxEwFAWnfg8B4GwN6jQYQJQD4az5cMqmx2mjje"
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
