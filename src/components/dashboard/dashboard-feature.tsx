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
    "2oSW8NRBuqDSnhHFQfreZQfSMaddMw6Y6ixq65R1Utcc8CQpA4e19UzL65Yw1Fdd3udHMuipxhFoGfJG8kYNEkYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YT2RCDBKxerrKUanxs4qjctvQhfBuihZqDdt1i2VdHa2a1RYmKAYX2DBGowJsjt9FmuCWrn8dWcub6ednw29wpX",
  "key1": "5eBcooQeGHzzExj4Hjs4uvGpqfahLZSynZjaVB4F3TjZNMScmSNf7wgqNBJ8atKu6tDhPBG1T4BhyEybjiFKLq6E",
  "key2": "5ZfMUDyHAcWYTcUx3bda5dt3LoY6GeyykaM9aoY1dfXAXQwARaYi1EoU8mBbbwEsPf6NXquzd9vyRvvJsvbS3FpH",
  "key3": "2hpQH7j28t2vKLokVxMhYMLGMB7tEivefM5GceURpdzWQTQJiKTXGjR1Fdwx3RSePE3Mk3YCPkmemswdtZZVbweD",
  "key4": "4QYyCM64w8TsHGgx7bMoFSYPgRD9T64AWzqhTgSESUXrnA96ELKSMj1W7Yz8bQrDSxEJYmur8Y8b9NZUnmrWuKTd",
  "key5": "5KAREtbsteKora3tTDmRUEQwCgzDirgHpE2zw5p5M6wimgtqm7QHhhnkUwJEvCs2HXXwjns6A6RxcMjwcRtj9Da9",
  "key6": "njTBgRgGc3w499qEfqS18x91yVCKBXXbELrYcHdW8gFnm7QLXGJhVR5DnJcQCrgPdZGpEWRzskCrouuHf585EuJ",
  "key7": "3pVEXr5TuiwBW5QZqPgUyZag3MXpF2RzVEwbQ3TWhehx2nrrviQUCRATp6g7H6xzYidLoCESb9gApkDm5jiYDvW9",
  "key8": "3Gv8AHBhE8XWFSxN9DcCorr6ssQCigAM3LDhyE6bSzku8CCLZ5VLqB65sQh269wWMiG95mEKtVpFhnru8EKScAgF",
  "key9": "5SzKquyptHPc4FoJbgAkHotKXJYfHyJwxZYKpvA7FmsybodPsNpdgkprh4ULi4te4bkLTweaNU39NfQyuL5Kt8r3",
  "key10": "4tfufZ9HUeyGo4gUdXMNzX6TqgJEtw6we4XoX6DGkZtK5hj6EFwoaKffva4QcEYmtAja4kRyqiSsNvrRDZd2A2Tb",
  "key11": "2VfjThduHgt5SYJ8WiXu5VSzYvPqBaCXswDNRf5fnqPnauNJCsbVZcaStDpD2JwmdeckFsYi4AupLR3YwxDmyYKU",
  "key12": "3WLkyuVMYT7W2K6UrymUCAAFkgN1bp16zWQtSU9pAbajLxm6wCFc7dj22dvmPPMGUafMCnu6PeaysX7uGJAkTLTN",
  "key13": "4Wm9BPL2nBN7XU91gJE5FiezTZ83pQRjKXxFiQmXpk1jAwyWpyoVwbrREtdhMh3pMt8YKWLCmn1nbtZPHgad6yBZ",
  "key14": "5aumjuXJCpQVx8zfoPG7bRPG2KUZtPudxgx6VhJz3eyRrok8oF2ZeKGuo7etDEa8AbNYRaUp9HFXidA1y4J3UdJj",
  "key15": "5xo5ewneaom3WQARUPQ8smJnK5meFHY72wfbjePVpb8o1kMHCs4SCGhz38LFzYz3kVZu99TtyNprP1N7JKj4xmR3",
  "key16": "4dNUpVYVUZv9JDB8JaMygVvBwYndUXGgy29ZAZpNPtKeEiYzu7YnPp83SMej6odA5D6vvQdDNhTgSpTsiqLHzesZ",
  "key17": "4a7dyKJvdYYLouqnmvm2FRACvJuJvgHFP5ChYwTCbMBPptcqWsxoPossQMwYqzDKsVNLWHLeRX9dxSTuisFXqPEQ",
  "key18": "454Qs58xQcChibRe7WFaokyMza8bnJH2YvyLg5QXMse6cezuwPe3vCXTqmDZajhKNSuDnK1D4kD29HXLjEoiEy9U",
  "key19": "i1C6GtH9BVVzmXcPwQZZRbvQx3JhAgWHyaqfQRcpkicDtBXEMHMrzLYbWQNdw2q58dPKhNfoKjtLdPi5rtHYvfq",
  "key20": "63M2MYfSu8oSv1GYAXRByZfaqJPsSmFCoMtrqv4Dc23R5dHujFPedCn7s7iViLYEJWFkEdMB6DBS6gV8ZMUdVBup",
  "key21": "5jRytE56kzBeYgoSqTt6uhiPvR4CnVMn6y82ETBn7isQ3jVhYCt2xiBZ6JwXV8Lmz3P4cXhrC5rSoHensVoTLKna",
  "key22": "46czQRq1z9GMpg7YaJ3nSoCcMYfEpZxsgf37QB2gmqSwY8JQfZMtdo2Q68hWndzJLD38wy9RgcKfjPs9C2jS1grR",
  "key23": "2zVRnMkHEYtBtHwBa9pWmLK8QqvGk8JRYUfkhHvoizWtw8K8DzNv69EvdKyx2FLV4yEB4nMhKHFZGjwZ5H8mpRKT",
  "key24": "39d5EtDviAMaAdCNAbb82q8JwPou3Lh4gwZjfF85bRshr4Yd6cjWJYij9f1VBeczCAgx1Pq137q98viGcJuovnwT",
  "key25": "kXzE6BzJ5c9iPxZ5AC79yAja33g5X5nf8ibjHtHGCeW7AGztRRkkPKEf6ofSJoeFBufEeh3PLHGJhQ9S1orAFvb",
  "key26": "THib3cZdF4vDAWJMw5sGyyfzmC2CVHxbgpgDHVM6Rqh48WPXVeLQm1GGJnRynB52yNi37QPuudVu1yfewAicwen",
  "key27": "64xkiPgJSR2uPFZkkXKPC3zfvn55WjrEGkt6JNuXMDQ4DtFkRf7QHiWkgtExtG9K2Kx3PwBYKoknpw9JvqRNgT2T",
  "key28": "554SyRxPbouLQDEXAPmN4U3FGXDcSBXNEL1P3kRqkM81RJfzSRJcQEABUovKxfgmDcEQNqiZz5CXgxFfygDknc7n",
  "key29": "z6AKasfg9Nei9hsprJiKrCHCy9KqgCp5mJYVcA1577iiALwvkCUiB4tMY7MQyuCDtCLA9auNskTZHWvUpddkynW",
  "key30": "3T7CePdHMsQTTbk1BYDd6yrxjEoyRymMBBNKve87176rpmg7hmPpJDRuikmU5EvV8QfkmvBK54a7bSyM6M5bxRJC",
  "key31": "3owqmNdZJrtQwRm4b5rN8sLTviRKdyTWTWYWqbDocPWpc98CvvYK662nN8WvnnfHLSmUxwD68U2XqQ5uFxBgJLgm",
  "key32": "59TkkYyk19KG67q2uJfJ1qSU4rgz38BGXV8xP5Tw3LuBTHPrcpTDB6LT9tMbAC5EabwxZfNp7K5tUt3TYLPnvBmU",
  "key33": "4i6eu2hUdud92bxMGvggGXZk3Ptx25PSDT3a26KV4L6YjkXhRyeGtR9FmX6wM2whjePQyqYWXcosv9mqrzuXMSZo",
  "key34": "22taJrPjVQWhQLrqF1va89QBkiVFm32bVtoVy8q4Svs3Rg1dWsmpAPUpFGieZWJoD7GbnAFxrHy6CMyVFBEmpx85",
  "key35": "5KWBfGJmyF55M4dAKTYTFPM4uHHaoRKgQAxdh22Q5T5oJvT41qP8srnD6JjLYMTFR1ctdFaq3qu4CnhEpvJjp8FM",
  "key36": "957ZKNSSmaZk4FkLefYZkSzm3tzGe8wuhgH4DmA6Zwe6rjTkrNj6En4pPSJQCSBztvgc2SZeypwk5Y9rEo3ZN4T",
  "key37": "2d2aQQmeLUQWEUzcQeeaHAP88FbuTuSqfzqma3yWVfiYiTgbuEhe2MHihvtH9s2UvMTHdT1DmNFhCKrPoxTej1dk",
  "key38": "3frgpCMrGDpRKjZYYtvf9URueLM5ZtbV61n8k5AtwxCSkQk3MifGBQ51DWQvSUVS16gR4Kf87MyhPTVzLDCdsu6h",
  "key39": "3RKa57JL17q66NpSqvG4hiDtqfA7XxgUU22TmLtEWsWjW6c9KvH9DQEaNQxPgtjXAQHh35D3CcfpjzjsA9CvG7hB",
  "key40": "44nHUT6JqxXT6oTyZkXUGwXjMLjeyU2JDLws8SvR5eMZxkzkTujLFBgFR6aRQEvLT2BpufCQd6Ffw2uF5GkeZVpZ",
  "key41": "3JHwH8Y8cXv8ZkfskKFn72nXWgXJNanz5yCHmfhyNYQCsPpNCGrrwq3DBBtjHYzaaLYdjLuF3kfdcPme3juK1Tfd",
  "key42": "3rgGZEE8aqi8v7wjQ5D1gcZNdUdwmuhpyc5933BkVZNVdWthnWmA2XovxpZxiHgm2t3oB29WpKmfkcB2rHGi7Y3k",
  "key43": "4pnqHyTkgwRHaMmoexmD9yjGJTrUtXgjwQacN6SCctDu7hpmkMwtqXKfh3UPGgrPVQqEQU7k6f79MVFZrTeZxpzA",
  "key44": "2vkyvLrkRtDVFCMeiAPd6Uz6fehjXAvyy277c3jNVwzTL69nyq2Cr48chizeDcXMsXWjFsoXez9BtpAt1tcVeCpC",
  "key45": "5N7eA21kiXUFcmA4KL1GZWRxs8gWWJErx4i483X5JbrUwwrSyygc3mesxUSLzG8PsGW8Xuk5EyKhZKFPVXfks14Y",
  "key46": "4fKC1wXjMAqnbYXM6BBDRQAtDmms5cBw8TLDNq6kaCiGpEwDeMsDzqCDRr8uz6bhiXmATVUXY4VLB79RXs51iuHZ",
  "key47": "Jrf5KqvbqKqFRXrfenupQuouYwyaWA9tzRcahw1iooZCt4YUeMaU3txYsie7VrbNQANn8mKt8s3AmAMZbctQzzo"
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
