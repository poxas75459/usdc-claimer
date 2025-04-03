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
    "3XPKJRD42Exq9VatDE7BEoq2RyJKytdkXSorn1CjWwptjkMKamXwojaDmQuHEe9sKgTCBB7sdDZ2MPFKo19Paanb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nqH6pS9hVeJ9Q6ubdiywsxGresVD5t4EK2bFtzFbtMu8NWhfQkpeFmQKTBWvancBBHU31oDua8jiLY5CdazVVFB",
  "key1": "55QQtv6CPtniteSMFnpfuzpZGjoJaPkFpbSjrRG29EW9K4GNNoJ3Lxj77cD2WQTUnjj7x5xVaE7f6USdyHDzTKyM",
  "key2": "3aoE8yRFgDhqegg5vBWJmAZM6hrnNSiwjcXrDd7JNTXaw4SH3LGW8xfHzpaaPWofDytNTiyAcDisKbqrXb3FUobC",
  "key3": "3nKgmRzeHi7GdSw7hey1h8P9Rcc9Dv47UnATodCRGjd75MBzNQRbj299Kr8x9SC8pv7rx27135iwd5zqZRzJ4tNz",
  "key4": "5ZxWqS3gDipLNbA9yd6aeE2GjmcYXXJtvuySAFQvwunLLp8P8csHkHou5wvRZKqyUoKKpyngF4PTnk6gkWwBBgSS",
  "key5": "43CKycLnSAahTYtcTXuydPjjsJykU82Sgwry8kZeZYop2caQaTdaspdGoehWtWxykHoHiUGW374PNgGmUxXny1hn",
  "key6": "4QoLkUjanYGaBmByJrQfsnXhkJXmMt2hhMxRPCddTAVpzBpt6gTEQe1BkRsjFGnd1bKQR1NUMHHrMJPtQUgHvKtp",
  "key7": "5BQgcZWx5eTV2b4LaqpkapasbefQccdjqr1TQbvS5oheyncTy8wbpzsAFKKDdEHReLQWUQfHvDaGihhXgueCEj16",
  "key8": "2piv9A8CpuqNjSgwJAXp2KnQMzpHMZYbBZVsjGxxCRQJyBiLydcWGoyjQUtgTdA3fmjXk8QE9E7HC86P572JAdMf",
  "key9": "2VyvV9x7WjqNfnXVzfs4hGrKtQTgRUzGo2Gt4wvn1tp9zmhB7B15mQ4oHBjUU3BhheybX6ZwUbgL5JKVZx95hHEb",
  "key10": "4MXTZjs12GevF5F9RoRtxsbWZMNDcjs78LxYjTv7D4sgyQgfEJgbd5fdoxA8poFKzi2c7ECREAqpiqrXgeg1ZT8s",
  "key11": "3aWwWRJqAM8BDV1z7B8ygLEnCqrLMSawTNv3M17iLBvUUvvBHMENSgvivRqLmigrh2vC8Jx1vzRRPf65eGXNRLSH",
  "key12": "5yps7CopAviaaqrgwg7xokfx23nEZtWFoiH3gNBHjFoj9YfGgPFWeFmdoJL8CeyM77ifu8FfiDvbAnqeA8qYqaFz",
  "key13": "6aceeDjjufXUGhgZkNe27h7ey3UoswiHLFdJhBDXAuvoKijResdwNZtrd3iFXeoXucrq2NqUmjnzMeTtWPdtKey",
  "key14": "4VikVRDuBiq68BHzTb7MGfxundxvcYPy6oRywq62V2sEWgtBcBdBt4R1F6kU4vNS9ykt4N1w2ocYxNdDQZ7Y1uLb",
  "key15": "fhpTRfQu8TgrrFFB2TsTDZorPPHEzBc8kWrsra7GAqMQpsc9BdJTyjWQMCRf4h5zHLZFM6Nm6XKrE1JrxA8n2Kt",
  "key16": "538r2unHZo1ArLb1Bnh9qPY1mCcuwtn1jagedpigjpLtvqkhzoFvE2ucFqDvAKF7yUww7BZZizw8A5W3kXxwc1Y6",
  "key17": "2TS199S7QvPaSPFoZH96cmpFg6q4VUL5HZk9s9mqvCdi6ZaWDre72kiMp46EsK2ZcBPRnu9FcUyRo4A5hsWXr2Hu",
  "key18": "7jSKujtX7HvfMxdjnjKWfVHxj8akkadch7M8QycH8DfV2TdYhKcJL28expdzc1jWczKxQktrPngb4QnC9qdL3sH",
  "key19": "5dUxj3iHUBBYDCPG6yFuvsrusn3rx916uiBqnDzw5bZr2z1PwwoxXDV5YM27NUpKiob1qDdUsNArWHGGCSXVBo5q",
  "key20": "5vNU8Sz9FLj2s8dJtZeUbhmnBoUfTSxR4MNAKqDCfxQtnmLJXv4DrjQDjqbo2mpXaM8MiuZ8L81Dc5xEWuE1PYFn",
  "key21": "4bR4ZPN3RCPPMKK9qDS6ULYDm9HTBugRGpcQQ8hBx27MZSQeAutjqafA4Cxq4jRgpm4oyukY6Q7RTB2ZQYpSdPJf",
  "key22": "2FKrXfcUGhB8i3eouUXyjRHYiigeSwGdSKCk3QVvuns73Za7rQjHj9shwFrtpzA7cZexTR85Pzqk5gcgDnRdJihH",
  "key23": "4Legoom3HDt6iesCDGq6f1k3e7Sns5w2m13rXgW8G8xcvJqMYiJaxrhAkBJbK53UroHCSntmHKqDFiev5umAw6cJ",
  "key24": "a7r6QcYgxXcR1WYgTQhxaqijxgNt7V3AqeGC5Uy6e63wcNDGsTYc3Pj4TTEXuwLqudwK1w5nT6w7DKZEgawBVGn",
  "key25": "3HxNUUCFAadFy1afok8fZjZ3BUfRz4a4PSAXKSnTH4nVA5YrfUo6gCYrKijK1Y2Xddz2ETBRNQ4pEkMNgzax2Nv5",
  "key26": "3tZh4C7xwCdzarZgDS8Ncq3EGE9gjy4EAja5D1uQu6HJnf1RojkskVRNUd62PHaaRfsq8j49gssQeFgZSjuy7R7v",
  "key27": "4LdtNjx2VvWM5KaPWgwqZHivFkt3CQoYFhuMEbV6U2GgL3DcGmNXZBC4YkfNjNMFNW4i79HJfuU9HyzfSPrF3zLf",
  "key28": "4qTSiwYUAdpamdPKHZd8cLixgFhb9es3vn2AdVfoxGZT8xzsJzzaABjVtdJhwnYGHTzsefQMs9DjbQF5up4shFBd",
  "key29": "5vZdcYNWcjne3Nd3koNn8HjqSNMnPpdHYNJKuNLgeBqL96ftepCsAbM9Rn8qeQjGoip6LYbADAJWdSGA8mFQNEPi",
  "key30": "3fKvRWLMJtsRjbizL6p2vtj1bJT8oEpr2ip7sd5gkFHc1r779wvNv5dny6huzjRqv2vzFLizdvvPjS75VrrUugs8",
  "key31": "3tqua8rE7QTDeN9HPnyZqjFV59MmEDh7iBAX9p7bDo3LPcaxJ8kiWAHrLudZ81Wx8ED17mUmEWN57Sm9GtjPcmic",
  "key32": "4KPHW8vNh5QUkgYcmxjqnE518gwZaY1YBF74Yk3eKdNo1Yrzi5bMGL7EXBHkoVTM3zu1bXom3DY1F8dfyL9Wxhjc",
  "key33": "2qMcZrtTqDhYzDXo6xxFLh4U4qpS3XTik1f3vucj4Q3TF88Fr3sefjSyiX4H9MpPyDz38kiGHEBgW4gc3fBGD99P",
  "key34": "59AxHvBAsdq5nwN9bypHErAP7dLFpJRE3ndMo6924SmKnxWYkDurW8RmDaBAwzc76FQdrgxxamcG57kU1MknoAHp",
  "key35": "4uuNjxeh39SySVPiAQ34YA1WcYWutUeDFVM4mJn2kXyZfmnrYYQrieXN86YvQswt2DXHdu7swodqeBboULgtVAMf",
  "key36": "4vmtTNMXbd4L24pVA3LcMJgCaQqZyYHpDx48pzbmNCLgT7hEZe2cr2qwWniUFB2ZxbzgN8DkQZ8pMEi2bWHBrSf9",
  "key37": "5NDo9HR5EXhbCTAt3DejbXybPg6U54QuRwGVAuf2k4Vsev1N8tDZNCsRPtksqsnCTqWEhwpgBqiXWoQbyX3F12hf",
  "key38": "2ZAbk8CVLGgVxMKSiN5717mT1mRvVKptJdMwTHctKqaRtFDaW31qV6FuAD18hLZscqRbqPCM73SjMrHEchEkGqpN",
  "key39": "ZjN1FUhmXqfVYmi3eFK8XYgxBqZ13nrN5qGPrtZXSHSg5wxHEeoMzaNwhzyKZ4yuaFPZ9SJwcEuyo6fuB4oYjHV",
  "key40": "2N5LR7gkvguo6F6Cw5ha55xLJn4SpgHCzafLrv3rEdQQ3iWJPe5DHPG7V2JLavnZbMyVcdn6YWHQrRaC5HuAqLtH",
  "key41": "4UpgUtngUtzWHWmeUkaxkiQLxm3Hit6m5SLLhC5EZYqwBjk1F7g8t56NQeYvbvkzvL2w8CCNpaXBTg8ib7fTq8NE",
  "key42": "4GMRkRhko6oTeruMqbsj1FRauFTrXRWMsoRRhHC2TqrThZDxrRWKgfFq8xH9Hxnqu7uJDdFg57NXhfLFh6vjPMKY",
  "key43": "4S4MTk8wNkNGLND8zyoDjUveFwk3aDFisBYq2MZGUf68LyKYAHiHpPp3ChTqQMK9mWv6HDMzEXdFmmVEu8r6GZQF",
  "key44": "4caaj9VcvYP9hTFo7kdsLnGdGURdoMpUyqNpU1bmvNz5ZNATiWCjewcz75QBSxTQguwq4B5SQDYuco9PFHurQ7Jk",
  "key45": "4Nmao4qxJxRkdC3zHr3D8StHCo9VPSqEjyZxUf3yBHDKwKVMjc2h2zAr5cn8CDHhiL31PbKJZWXbQ9rRSQ1fK9Db",
  "key46": "3bhnf9sitWCYZYBdZZwWVsjhP3voPmihiPZ1VbzWCrujKbKdp8TUbUZ7MZcoCA8q84UQKkBfixqhPs78GyER1w9v",
  "key47": "2sG52cy4F6fqvhUAfsobAAGvT85fzJjEEFe9VeHus5E2CuGayzzKENVrmCT5aU9c1PcE6ajT1i1ibmbYgB8uyhDC"
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
