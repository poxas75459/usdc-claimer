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
    "4HzZev95k3nQpbDZsBUUN9dY7Maq7zrogfgi3YK8jemshbj3uT4EakqkKt53SNTMNEvH1w2jdcKPJ3ExnFJhkiJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eqDjD6ZPVujVEfxUnheV4oY8fnX4XUnmMW6FFLPfom6BgjCexTBS2weX8iYSrxzRF1bQGsKZXLE77MkDVbpV547",
  "key1": "2qdxzoQAGfTHNQJcQnyd42yodCWhX7bMAa3szCMQjAVFL6DviPKSJ8MNUESoUVx6VT8x9CUJMXF658N7Bc9qnMzi",
  "key2": "5X745QbYcoM4tYDdktZApdtfyJMVhLxWgWY1rbJrjVzqq9urhbLqdnytwtMkqRXmJV3QYj77dNdmM8HatkMNGzjt",
  "key3": "5oYBEcqzcjiT4Dk143tBQGFs7WD7hXUCx1ti81YX48arXi4SNobbG97tVSmqe6CuGau1AzeahXf2hvvuEGVziZrg",
  "key4": "62RVfMaZdPrEwNta22UEmrfZaMMwx6uozPNb2VNxMCxhxzMDST5cNGh7MoW5vWhtyaMsVFtjXaV5oiWMJEYdPxR5",
  "key5": "2g9iRsWHxzxik3yF9Su6QhCPKzk1xprYMew6GqbpjAA7dUgkeZhpobt2P6RezTZAyskMQs8JUQpcPZsW81Z7U3Lq",
  "key6": "3wrXRKzcHd8oUYDNE2n3AcDmPvPHWtYRJojHSFCzXasdnJXK7gSVvccLfFCLbET3qvD4zmzC97XaR8miAyeW8Cft",
  "key7": "5VokjH1Fwym5roEmmVuijqb2GUNyqtGLSnoVpQuVNXePsDhQgUJDg6GvTndxm1v1vLN9EXAM9d8rAM8gPusvJtgX",
  "key8": "3XaxPqsrrBurToYJgECvE6EKQEY44Kbt2hp4EpCdUvDz4kvFw54mwvTE1pLQQQdJgqNpg2ba9siKChcGX2KHzH4U",
  "key9": "2GJU723GL6VCX7HaYumWJ7QD4U6kJBAJEnQt4NJdJYqssfaBRc2yVwF6vntA4KJW8TBQnUUYbef9mF9AEX1aDXvC",
  "key10": "xMgTuazvymcMrd8fd1tL3fJ1ZFV1nieMt62iGDy7rfiztsPfgWmcTwCPcsDu1SVRCPhw2afxDT5b7nDyh6PX1hJ",
  "key11": "wcuiHA86uR6CN1tKTFW93NyXSRgHRriKS1WSFeH58L6y944q4LTrx3MqMHHGjiVgHXPFLa9kxgCpCpsVmpEeWZM",
  "key12": "4WPHVLVGUP6tvsupiJPXinVub41EU95Mxxjf4sqFzaMWTb1rFj8QYsSzViip89YAVrAtdm8FZ7Qn6WCv7rFYHuCW",
  "key13": "5NCHAzgJTe8x96N6M5jxLvtdhJ9BUzBSGayhTTrdXA2LGsdq5q42T4EmbSEz38MH8ikUFMVTw3gJwFUrjW1Zv7sd",
  "key14": "4yGmiZaoEZ6ei4RbpZjxkKr3LbXXsfqpqApancCK1idgHUKnVsSZ1gVv5gHoaj4B1gVXBewMm8qR9ZrW9G5NjftQ",
  "key15": "4U3UfbGiHfoh3PZtzFBwuDPEAQCP8J1wf1RD5AVsg7Czq44B9AFxmFsVootJ4dQPyktn8WniUQRt2r15jiSah9ht",
  "key16": "2MQEdqG1SBxf1Ng8TSLFnVSKZczraHUb1VP1UC4GLiWYoHxvp1q2g5LGSn4WC7S45cwsS2YuQSmsqAgeqeGhhY3R",
  "key17": "3WDTyy2ocje7Qa4JT7VLHRPPi1f9WcGnvvENGUpUb4CyAEwveAGFMgT21zHKa2mU6PcCu5hnpUXLYDBujwbU4ePu",
  "key18": "2XCNNyLU15ctX3YiWkqSe538wxC1FW6Dz5wsfbyjxTTfJegqjjZxoPQzir84QTQ23YUXZtBrZYtqDXnFXreR7ZuC",
  "key19": "4E9RNZ4QAZr7SPBogbDpRsn8sYYguz1MgQELR7rnU5y8mJUgxAu6Go3fJMiL6NskaSgSFKH6tpBpXZFqEKU7mdV6",
  "key20": "2QKXK8prPa2xLiuPPgTZe9JSsqFVr1XHUwXZx3VhWi1JWZdrihMC4zT1yicL2AzJBEMxGHpWtYeu3AztgmaPj4v8",
  "key21": "3gKdZoTLmko2U7YntYUtJopPnSG3ZE9JWDyZ4rRJRum1kxuSEsqZfgQ615CnqK4RyfUVtsTTGsiSYHi713uDwQQw",
  "key22": "549Jju7H9QFbzUUKtZ4SWS9aMtPuha5KUvnYifEFYRzeSpMc2P9FGjQJHXs75s24nSJBHZD1AuoUN12zG36TBvdi",
  "key23": "6CBwBvtu8zjicbYetFuAjwX2WTNdqBCrNeddKS8AVKBvHcvAXZwW4J7iJapQyFB9GcFuJmEYtF6H6GF22xK8gy9",
  "key24": "fnQwAPhVvHJKN159ZQYsMYtBzemdWtjr1hjixTwn5UPCzpoLE878ZdTVFSyy8XKjSyJ7q9tDWLdiJUeAjvD9sDJ",
  "key25": "3dUC2AAhVry5rdqoFis9ifVUuEiAbf6tcdSdz9Q6a8PnomyQTF8eHDHUYceQ3feuXZyKyTR792z2mSM8SR5ti9FR",
  "key26": "4WfRZ8WjywR3MrugujdgKWcsmqTwuB35i1zV8YuekL65NYvpdcW4Qx8kZ7yEs1EAckghT7g3HQt5BSoWCg6nfUUa",
  "key27": "imJHRHdV7fDDPFcSLb8bS4ta5ifwfivL9QGjLyDwowu5ZC1CCPemutcKFhYtyxXPefckHH6ErYM5B7FLyzTEoZn",
  "key28": "652GXsRZXZDeUWFkDgWxGXjmyt4PwpkMDXFL3AiMqZ2xByBveLCUUTWmLw4T5mjqxFvDh9hkFvkRHT3vAQcfVQv5",
  "key29": "44F6Z2GNQaCBaNtQydNgvAj7me1FZTVVRCZem9qycCFDT9Je5aRcz3LxJEArtHQsG618TeNMgLmRx7DtD79DfdE5",
  "key30": "3eWmu3nGGVuyVCg7ykRuCjtFi5cQRUPtqfZYVt9K7ZugMiZ4r632aygEfZFNJZMqYeG5DWRYXv6cRjgpyKPvKnGP",
  "key31": "2UyuNCoadE86qZ8SxgqBfieGXL1hKttUB7yGpPny6rjTyPLR4v9W2hEy2Bdo78r2Gi5YLshb6FY31Kgy8uNjY6Pz",
  "key32": "3PSTKoM9tSL7dHakYgBkrepcG3EStQjnnywrYuAFsvsMqJpM9nRLdECbDcPkoEcnkjipnBJqz4BVooY6Y6SBAobw",
  "key33": "4EkxxzLbgjPiHNqquo6QVm3upJhpEfFY5JAReucSodYu4p774U9t98g4U5N6vY2XrjML5qvhHCExmeUY98Rdyzp2",
  "key34": "2eVfFfp1kxuFqS9mxMYkAAyEtD37ApwFdpfkTc3XpDJAYbYJTuGJfVCxertgDvfEZXD82pvjTSTmVoModr7RxMqP",
  "key35": "3qGPwsav8cxdGLQazW3ydPVjt4HLs2VtdZmz4uBUj6ztLhHJhxqdxqF9qanvxL7okfcM1NFTzrhAeoZscMSoaKVL",
  "key36": "4SDqMgztoXJ3vPJCDWuPdwMkM5v8dxpt93gX7qDA5tFiXpxjBHEUWH4G4Zf5DwPPw93mKmzyqnJHvocEopB8D64q",
  "key37": "5Q8HjbGqYrcYkqJ6NdcQVwf2x7xyXQqhqnFHZ7ycGgPJt4Tonoyqyz7PU6bdWirgG1AdZeBmojZSQFJYJGoHstPA",
  "key38": "22VWVT31fkj43ai9rhSUZdSFqtQBZrnL8Sm9UptaWE4LRAkktbTkTQzEXWCbJXgLGmQDicap5a8UVjJiJ8y2yfiT",
  "key39": "316QyfH7bW2sE1kHgMghAwaxqeNom2Yv4wM23G6XCvYDB46Jv6UyAohwvPk4WtFzL4dvvgQhDcDqi3VqKZvjgbzS",
  "key40": "52JCxxckN4Jqe1Bc5gpTzn9ipRwNhZAM3mqDsPvFcQWCmLXWrLwvtWbDTsFChwQEN33g6MGWqtqTqQ9PAbTqsDPh",
  "key41": "5V76kS6vJ9KkP1QhC8AUUYuUXE14Ad7FyRu6KFMaA35ycWhPqSKq3nRVuobBn2ThLLD3naYNrpVBJjygQkjdSHaE",
  "key42": "38kirw39NaGq6euLSqaKETx71x55wHDptqDrQ4pKP9iWXjjoN6qDKub8e2NLxRoYfeaRc2C8ryQeGTMYh86RE4r",
  "key43": "64A3JKimAXSU8QJx5yyv51VVszypuKqGUc36nZ1Y3qW8fvYK7xFvMi3VZJ85m36koh9mUNET9Vr5qoZv9Ua4bna3",
  "key44": "5A1NgbQaAbnj28VD74rU2HEzRH7YXZasKqUnZtkDUGoPESxhY8PLTBxGhNudmtqBbJwxRc9cw5ULJt2pGr1m7xaR",
  "key45": "36CpJ5BUVauP55HLgpTMAgQSRMWBVwdmWrUfmP1c3M4kQV5CsFwxysZWkEeiTCkThzCxiefaLwniyteJwMT8WPdJ",
  "key46": "3m6suhHskNBuf7SsmgbeRcfZ6ajD7zD95EDbHYnFWZBbjpN3djQ2UJHHV7ZuB6SRqNCNifKrQBTEQJF7SHAngdqn",
  "key47": "2T1T5DQKZwQqwy9VJSAyXML7YKWvST2J6FM6XNsUgDZyWCS37f3QZrxTfBdigHtBER55RKAym1kpUpsi7ZGe1KWP",
  "key48": "3sNeVK93DBx8SnALynFi8SD61K5Aa7H1Er3RYowpfrgk1xxqaaKxkv1Gd4tZZGiayTN56rQqLNj43xaFg3tiF2B2",
  "key49": "4FmeDV9FPTcVukbTgRnHgEzGX4yRvmHiBFAJWxMrzgQhVNqF3b56X77iXmSUQ8qv3643CUmd6m5SMDwmmreTZnCA"
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
