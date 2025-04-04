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
    "5nXzrVYxMgomrYkNTWzxyGjWwTtjFdskm1Y8N1QX9rf1DbFAvvqRjNtMjbP4gCFofxLDvPMmZEFoXmBh2an7wBss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZuVuWDK1zuvzyoztEHjQEC1BFNUPf3u7YXRzgeh8664NgVc8RJZqcUWL7uFDLwNjZKptaSJ8bCtMLBHgEhhnqP1",
  "key1": "MEp1pfY6EDfKhJdfJyoXGdqwduGvUBg7cQ9X3m3xd7XUnTXMhE5769o5unXycWEcYzsjG9Tt9ZGwDsXszrGFUfY",
  "key2": "3NV3cE8BSoQxZKxvvC2gK1bUaeppUFXRBAesKFyXZK4vGqnE4cn92r6wCxG7sZDCNoNufUiEyuNsYQQ6Zk7y3hxt",
  "key3": "3EwTfCJXU8BZGtVXFtVAa2qvU9bvVhV2gkkse7f5KaKAXqct4n8KxuxUV7ZrnD5S8EFzDGq6AcqSaRKKQocFytP5",
  "key4": "5KiQ9jUrvq37jbYz9CUKtzNDgaiBtTL4VBw4TqLLYfQ5NW2TU6ph12b899XKf6Jr5KxzpGYMnUMyA7hZwyyWPofL",
  "key5": "ZKtUeV7vgyMP3Se8dizkiFDWDFLuovfXxaWtGoyiCUmVRQ7qSxYNtWdqhQDwX1v9jKAuNHuMhTdonDt2Vwh3eqm",
  "key6": "4pNzLZ6zt4x7vXUj8qNHXRKmodAb5hQmhGrTRjsdCJFED3T9ELmQDX1YZafNUoXdkUAe4QWefMMtRjHNitikbEXi",
  "key7": "2KK7sjttb52gzyzprVRBouLRctEgRv7EouQCSRyZNdZmK9h8UffdHbfja7sW7gJiNZ1XcMSVqAu38VZFqNRCPbgU",
  "key8": "41mSZxrUyLET4ZFAnWU5z6i9Wv51wLCPCaxciaWAJZBexjsHmETjruUPJFfnR2fF6UQHdcqHd9atfyomeigb7WJo",
  "key9": "42nxjPN2DS9QgcTSNPkuEB5zmNhx1mu4Pf8fTKu5SpMx2PPSqauF4sC1NBUKxdWWTkg9GJYTtVYXFgArsgnXzYLu",
  "key10": "4kcXA5wctaCe4yWEHWtCC7VMxCuSLYVwDZzvCqFxz31t77vRpKdBpDKLU6GXdmn6SmdLuM9YZETW6AVTJXAM66h",
  "key11": "5RCrmiQuJ5ej5RZMvTKYthTfiXDxFVskjHMAX9QrU35U6Swv7USk275aoqyQvUVHeD7ZdtN1Bujc2G1QFUMhgN4Y",
  "key12": "hkjPNHWZgyXYGzboQJGDwBXDerPL44tUdYPdQa4CoVyb6gdXDSV4MqSoRXCqhCCXe8Gd7GUAm1dnwaZst25ZXU4",
  "key13": "4Jx7jTxQxBsJ2hUTDQGCXQAt847ZQ9efKw7RJ9wfXHwNg64vCGSmMfSbn642hxaKw3PVxm8aQtEQTHLwv89g99Bv",
  "key14": "CdZbKr6VwRw9A1maFzheMFyfBBfCwrEfMmyGrEvUZ2k2kMbj4DyJ4LUYUBBSoGf2Zhb1HsNSH35SkFYZzNqpufZ",
  "key15": "2g5yiTPFfmVhKa1YwvxUNfUav9QWKpXCh8TiYr9KZVcCCTHBrxhHAZrA1QrjnFdCD7MvTwBXpSEZtWPw47uj5z8H",
  "key16": "6334MMpKCVNza7XYYV6RLsJ7qdnr2LnW8DWiGHRWJ6kEJQk2BgXZx97RZpwFLHT8eY4EC6zmv4iJiEUhfUkF5bQS",
  "key17": "32Vj4AxU87pdixZvwpYr1Mj1qyB8qdhmaUerKHMQ6jxCsEhchCukmQtqucgGJNDUm4BLs7CWLeKwFm2jPhWy5Sfv",
  "key18": "5ysph43wpmp4n5XQ3TjYkbXHznWmHrpFTZ7DTCnFqmP4WQxe2zFLS6gym9JSHqU6p3zLyDF9m6JUJ2sBhRYvtwjQ",
  "key19": "5ahLRyU9YmWRmXdu5aw6i6gK8nJTBtaPjL2TPSFaF1Xj1VaPiu8bjDeR4TbvNBTCwU8ENoMDWNRw1ccT1dSnPHZK",
  "key20": "3vUwVQg2xZuSZwWSD9immuqs8mTKvLMTro6cKQxZP17jtfgTbSEDHXsM4acU7vBPuiqHArKwyN2pKkPCu6gMkmMt",
  "key21": "EXGu1sxrvBmu3Em2dtbqLZTd3ZsZDGHQM9mEYXxEe7a6mWQD8EfKmCPFJuocEvw982fs4wwv8pMVQnDHfLbKo1m",
  "key22": "2ShpNcydjmun77s13zD2FRBiTHauMQU6ykvbBKo2xKJPQ48qg1aKncpM2cBMBuCmA3xdVqQpDoWjiwfw7QoY4Doo",
  "key23": "3cCJapDKNNT26ZmETDwsFkdukmVbFghyA6y9BNvty2SX4zrapaGgUcLEQTsBBnnxxqVjTTrdg85ATM1XZNzbWKTZ",
  "key24": "4Ggp38QGskpN3agxRXewEeqQgxYCjyJEFTnHBDsxEqr69J73VSTtAnAE3k2nomPW3XxXVQUKNMJdwFGPLBwQdo3E",
  "key25": "3tp3Yn6YZbHNjCjFG1xfciNrFdszgWwkQhpzdZUAePUmdDc2s28kKZsUppimeEVhFFHtgg2JUczdSSvwwWqcaP8n",
  "key26": "4r4vpS6uhTRZMQxSdaMjg7MSeBWJu5eww2qLdiwa6wpj3b1P3YiVDRrC9yhDWZ5LjoEvLM3pDMjsdYWG9Mvui92G",
  "key27": "5f2rkhmStA2xt9dXvC2DqDdNbCvP7DNqXpt4aE8CqWiGNCthr9PemZSK1ry8bqEMcSMqkMDkXx1Txf2oSJxXvtin",
  "key28": "2T7Lf6v5gZWgjRkbrzZ9QNz8dhv1mb7W1A8KvtQLLi6imZ4pGxkXWprdVyPL1zAj9KXrntB1w3ewciQE4SPAejYE",
  "key29": "5hTRz8KLoFz6vjWK6qFKZ6ZkDB45UkuvcKrLCJBAUdXX1qUs1L8FNWxy822GdLTkvy7d69jnv2TuQhKioRTaaoNx",
  "key30": "3WC6jJbGHcd6VXz1RQVwSR2HFypFXFvuTpuwfubFxRzduBs8hH6E6QHxfy1pRJhKfD8SA6UBruDyhK3zzoWGaFLx",
  "key31": "bLZsKSb7hSVqeZogcYtUG3zzj421qgd6dLecXB86bNBk89yTNuK73UBAaBJnYz6w9eoWngNS1mEdAiy8p4oLNMr",
  "key32": "5FQp8r57moYsywQ3Gr5ZEDgGZxHU777xDvKQ8faJoSKTrwhytxr5jRxmYEoZqwX6fJar52i2m8HpsHNFx7gLJcTW",
  "key33": "42QcyVHeuuZVeUTGReXzm45mUEKWZ5gKZ5xUEkeq3Uxbx8Rqo4hQi2W12uxCBStN55LLtQgbd6fnxEsKGM1RywjS",
  "key34": "2z1ogi7KfDFmzs8ANZycJD2DshWfMaEkY4o6JjmSsHg5RpxQ7CCdQoZi8R3D4dWNSJAqiqF1W35jDiW25ihcQf7c",
  "key35": "3LmGWM5PM3A9dBaSrGYQrxYo7i96q5mciNVRTfsfx1LGzN6goLfgrC3yHcReSmPnAY3Bj1b8b5saSVs624r9yom1",
  "key36": "AZViHpN3pkqokHb61tmsbvmLaDG339v19XTzJdfb2XM5Rf9pzncAPiJXGtRBQngs5jFhGrpBZWZmKo2NNraQtAS",
  "key37": "6o819BPw9ozDiDhEntq6iq7A515tfgJRBwLuxDeajMej1ce9N82w1d2wdPacZ3TQn2QEpm5F83oF6FqrGgWTopq",
  "key38": "4AzNSd7eXRZThnrNzkfmP3Nh4pzNjGJwaMZPXuixYnuxcTTaPrbm2VA5KRcWsYHH98iC5kz6wEBpMcfRuBJfD95G",
  "key39": "QhDJQSuXQ65m8b8QDv6E2LsKKf4ZXxb6khKdkRNrsiP64d84npX2QmpiWa5yW4C1Nj7oD9JAKhNQre1sgNRptMu",
  "key40": "4JtVF7DU4821vRmW4ZrQJ7pdFGLRveGo8SDrxPkE4wYRbeMQEqV9BwxwcQvMXensS4axY83h4Qd1sjSotoKiJx1z",
  "key41": "mPzxL1NZaz6FnErcXeXBbHmqo4hVGM3FEPvx79BQCMbqC1kH8Wpp19fPjdqbebCpHfNX9W9QcQueGvmqGBG2bhZ",
  "key42": "nzMybpLutTxUKLCEFxTyd8QbEDRmn5Eke5qHHPLV6QQmjGZEZQQSzfq3BCyTdAQAesXrTjfs1kgGbu54DajmPno",
  "key43": "3KhtTT83PtWAarSZz7skGNaSP2DcqGjBw3DTZq4ZcDQFBYaGfQp9k1gNRghFyDkXR575frAp6jQiZkbUeMqrXtAa",
  "key44": "2X7RUh5PBpoxy7UGjjzRkL2NnEx1WgmmD9P8nEaBd3WwG9iRPMbe6p82HqzhhXsStHrAPFg9FiYwH1YNipPJB32i",
  "key45": "52DjnLe9VtU5xBg42A9d6WLTGS1xrAZzNmbkKV62D14DEPSbwQZsJceg7xkojyZY3J8pQXX5edzyao7PgP4wspDK",
  "key46": "5qTgdVB6sYXhaVD92jGcTvhKeEKpzYqik1NWyZ2kQKcVuCoaBR6JbejGW4d3Ui1B4ViZ1QC8sZF38ghJeZUxJuDh"
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
