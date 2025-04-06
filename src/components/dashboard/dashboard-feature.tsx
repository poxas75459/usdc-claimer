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
    "4nVAWErrEZbqieKF3n5cKDAFpFsyFe6QDo4yFY3DjV7ke9RF39AXUf9VhaDM2fmJxMGfiXSbAgGtTfhzjbnsDL1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yBiisg9sjfQJCbuoMb9vZuoV23NSTzMD7CxT3pF26mFG9vEgabi4U64qVamdeAzqGJ4twU7GLL6WLQF2QTHPrgS",
  "key1": "2uekgSbHBm9X4dGsCfxnLYxkbBBCNswmMASKL9QYH6FyNS1FcuDqfoJBmLR2bfLXKCkYqfpqRbhHv6rBm9ysnyEc",
  "key2": "4RBZUuhdt4QwpdaEVJ88iURNzK8Fgc9Wf5Ac5eg3eW8oB3o6NVE8PftyYMeeMEnoKfj58ZTvTstbEvMW9vAJuLo6",
  "key3": "MosC6b2dHntA19hdDa77HB4BY71bXmqKDtA6vzx1JpwYvzGzpuMbJ4XkkQM8Mkrmus28uFxhaH5zJgxa2ckzRdv",
  "key4": "LcgXx8W9qBJB2SuFjiGZS2fRezao8WEMkPLXoNeNndb8f59xGF5xzKoUjU8XHZosw9KttYHZP6D3bkLTounYjkn",
  "key5": "Uy1BS1tKfjufybeiPXDmshQ1mLdcviBqZ4ZJZhJ2fasNM7ND4nhMAcsJUGawfAgCWZh6oyjKqN8GAYqmweoXqz5",
  "key6": "3WKhj8DsUKk1ELrbj1SnmnQT1ekjVKQwAjwPZxCvCm8HBrmYWky6qmns8R2txBWTgRRp5xVyHqF8D1wQTSEGNE2b",
  "key7": "Ymc8t12GnqHndsLcgNVsnJnabyNQfw21A2RjXN45mF2D1QxaXNJ3pAAfUbojLoqotYvKSEbKcb6PhBAFkG2WwUr",
  "key8": "4oTg4tjr2BUTNsx5ewYs5SGyN7T8EToSWxah1FxoZSGcoFf9tVVozHrJPLtAAJ1qe7NGi7Ab8yYHeGnDU25BsShW",
  "key9": "4jxWYKkzMuyxxiQ93hV2Mubksgm8ofLrvaPnQ98cfakGdoVEsCDkwJ8ow2DxReQ4N3eMhNuRnRmQtEmCSmH7VdUp",
  "key10": "4sK7QhGbuycKzXcmTjaKfvsbtKfZYhUszHcNtDdkG3fWDqG6AieQB9L9qajGrahdewhTHzRLe7DV3cEg7tG1oEC9",
  "key11": "3Di8E6hob1mVKYf9G1TcpU3HVwUAUPSK6PXrCw5DrkErZowH6knJQBpQnVNqsAc8T81fdtemX431pYEZNc3Dybnb",
  "key12": "2L6tCR97pCCGeapajLhyhoG6wQ8qLwKjqcP5AMvomt8avnXARZCs6bgdwusmrJV7KeFRM2wxvRdEgsEXuCiXGoLT",
  "key13": "4DNzYBWbT6kqrw2HZPG8M4RNWKWMeVbfrB7vdXyAx8aYkCohNnRtdHa55gxqfnzwV4Cag6CWMNU1EMeCAXLyEZpN",
  "key14": "5nynFJw4J9d3Tidc6NifkQYhbxwoHt9PFFGEbtiZx7ZHoREdAvmAMzeCYEgoZhLffGvy28AGCru5yQPKjD9qXL1D",
  "key15": "5c4gbw6u8siszjCeqikFXUtsbfRwf3j5enwPM1JhmET48h992n9yzQnUVB7dBKodofe8je5BQzaJmtJ9yLgsRW3f",
  "key16": "3Z79WH7QfTZ7qtVbWiUGtpiHLza653XUt7WbGverA6qtU7V9CkYTyqbEKgZBscEUGRsLfmDS2A8hdZ8PsZqn2Uy2",
  "key17": "4fgPALQnnyL8uXcdTmwFZ7qGGmEUAygoHBtwogwcWgmEs39bkjrfpZHRD1c6mxjRg4xwnXY8n2NfWaVM5nX6v81w",
  "key18": "5dtKRaDPdPnFYvksjyXxyh6P1Q71Z7vputCj1XYPs926D1P67eVadzqRaeSRMRAvnr86Qdha5f8YV3wUmZ8m4AC6",
  "key19": "2GzwuJmdhoU7XrSGn2Yfyfw6DGaMyuRm3eaRHr8pfVQ8ynTHXkgdhmGFwJVL6WjHGMcWoNFz9UJe9wfqn47vYoFv",
  "key20": "3w7bCLzsGwwMAAQkshXrXYs7sHkphTw7VioEwZhqVBc27o3iUBF39jogdCrgBZn7mEQX5fpMBCT7kHdz7qtG43uC",
  "key21": "2yeNq3jwYwudR3dAnVs9EqdgmnFvEpBsqqVqKzkaszuFspar5vrRoM9gco2DJjptnv6UDvjhhPe5nMXV62aSaGce",
  "key22": "2qWnLENTfaRJab6XRUw36qkD9V3x4Ve8wBBVygcvLb9TfHDTcfbKzSnJajbfTK52zqZ3kcyyLhhUugh2SiM2VtfR",
  "key23": "5FKyfzrVbzFBgHjQfmaBpgC5De5gGcaSJm3k14fwTAknqqeUGDUiqjUxdsJ5Rc1bwKaABiFrdwZmWewzZmnchbrC",
  "key24": "3Qkp45RELmWKv9skZvkiXzDXXr6K8CJbf8Vex5xtgVs5zqN7mv2Q7hty6KdaDMUsWnx3mCFsUgzyBEBtSzbfhqe4",
  "key25": "3sW2yJC4UqTAhgv2AUPJfQXbYZdTG8LPLHH1X3zsXDA9UBY6PPdBSkHgJ2teRAoLtByvHnLT5NfwczyHx3tNNq6E",
  "key26": "DjzUQ3tHepaDN6mCNshsrL9wnappwGQAXPVC6Vhyx5yqQshMJFZqmsPaKQZCFZpaxKAr8VhpduunnnTrKyNzvzr",
  "key27": "38EtnYMmnv1RKcPSiEFUdaQ5pGmASfbFRqjAnynFheudQtgwvL51zVzTrpf6yhrY5KLchv2ieSyEsXaPy6m6uDP1",
  "key28": "5gsTnjTf6jqfGqkQrto54ZpLbnvEJwEzaVh9o9gyQyn4hLGghb1NnjdLdd2AMxi9H97d9MN78DqiFyKFhdZwpyZW",
  "key29": "5gYcwsx2NxeobxLbm7Lc2cHeyaQPjxJsR3Z4ju3v8fDVhXSnVAJ9JMXtio4uC59AE4YoBd6EdsAeQZgSTtPZn6Jh",
  "key30": "2StctDE5LkM9WRZpAxfb5MiGXBy8LhUP8zKn676w7EddFATymoqp6RT3RR4d4mvHXT5LZR87JdU4yxej74SBWyco",
  "key31": "4mjSKTFaEorzWmr493Xv8oXdYzCwdhoTdycezypVp93JWzESpgwDwSYBK6pjc8A9kVKhDWnkT9jGsRJA2JL774dB",
  "key32": "3zrkajpd9kPFKR4QjPUJyiq3s6gVJTnsYzdfkFe7Tqe5KviBrUvBB2kGFNbnz2gk4zo8U8bwqXb3y5soBkb8YshL",
  "key33": "4JUG5TJ1PH1rg3cywbtnF6dzekwBqD7naNjpwWoc328bRsz3sSNtL41XtBpMjXyRsUdyNcNULf55J6yqyuk1ubPs",
  "key34": "3R7uVA1oUiJ4CfApDXeAAAfWFq57iEPe1GZzzxiTH3z1J9CkpSz8hnp4b336yNRTQtehtNMyJVwatZ6atHzPAyKm",
  "key35": "2y7JotH4AQvh5CfMCeuCgJMW7pRET9SX9N6mdnGqfRyA5uJKtPeEtopPjXWbnkzHsRmkyyx2tvxnf5jw92kZjeWW",
  "key36": "4VAwBAaVWCcJ1uwmf7mrX3HMckKEXvY3ZTPKnTi2ryG2fR55A8TTowg6MQxs55cqSSdbfEPbjFAsDGD1sY5rcVT8",
  "key37": "kgzLkidcPTnzV1G37DfKZeKGzXAk1vRdaJNs9jHb9YLZ8kP1ss62EsvWLRbAA46x1wTvHQPdHdKfYvB1x6HmZnW",
  "key38": "5b4yK6hQYsinquWGRUwikDmos9nesybbKVZJm9eyiA5KB8AdoyMTUTqHoNo4fsFqadQCx9iH3b7bsqppC2ew1G3p",
  "key39": "5hfMPswPwT8wfsLxt5n2vXdHPTavqmZruuFi8jbTsNVPjENd6E89rPkJb9K2jZQWs5SnH38gZzSkvuKKDseNQUva",
  "key40": "EKQcYKTaUHdzaqbK7wLV3R89F4GSrapFsLuxaMiK3TbMiYU6RULVkszgtiKE1qD5j1sYz1S7PL4VMg4rQt3E7Gw",
  "key41": "5UawvaU2AE9CtgFjUchbjX3BZ21LbwRpAVeyMehFoptEVQTL6q1HuFExM6jXzLMntkGKQT1PAALjvhE2m3Ytqbwd",
  "key42": "2y4AyYxn8SzMnj4WiW55hnYikBNNmFEaFK5ZfnwsBEoRXiC7qP3aV7GJ3wthERizj5gkGhMsGQcATPKPdfjQFErc",
  "key43": "Fa8RE5zx8fze7tDJDeh7n2VaqQQrhJa4M8C8PFr8kb4hptkhsURgEUeTG6XcpLdNGx3KUFJhtteUHaRzRgkLGFU",
  "key44": "rquahEaf7VjmR9HMPtsuJKKDtoH2wozs46sLU8GUVADYB66ZRBPSZK576GwHRjdzaUxfcojQwuskWVPcAqUgjjk",
  "key45": "NxgUENmVLVxidGnpHnCxfWHRNJ5rtqnbG5KxbemBshJjvu9FzwjBve8EiuZjY6t7suvKcRb32ywkM8XHnquqLMi"
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
