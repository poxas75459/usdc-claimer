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
    "2FTCPvi5eSaraqXZm7zxFBWLkSxH4QLAKug1n5vFBbGPZbBK6f8EiXbSApsAReQ21YwM8TpQDdD8WvEYAVfnUzq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MX7tcMmJwoWC2xUjc5oCZFyKBg9QWn6ktrVBC8yEnjmsFYFeVU4tPoqGh4H9ShDSW6d4doVDi2PEheeLc27NAUS",
  "key1": "4DeWQD9HVF7p6qDmNtbYHjyYro6fVS31W35xuoVQASHCNpgRyLjNcaMrAw7NLUXv295kJLtecRfVYUd4enHjaFna",
  "key2": "4K3A4wys34qr8pkBUetDTM1rwMXHTEqwqVDer3zTg3pMa4ew4kodrv1QHU8HYavPTLEApqaW4hApREiL3MKS4vrK",
  "key3": "24wBUJnZXkbNZV1cENkCd1qwpagkMKoa7VWEsUvvcNHkurwSFgUzh7jvDwxzX4r9V3Pkp6G6gh4BhxC84dcBFDmD",
  "key4": "x8tP27A3k89kN9koegjA4DLU49KGDnE2Hi3GDjukmL3uoJAtkyAhSxXcSkeGrGZ4HJYj6GHYG8ubmPr8PfeoGek",
  "key5": "5p5KnjvLt5hvW3ZhyP2gSJKJ5gfP94PzUkEHVf2nzisufyCT8uSgvAdT33fYzgJ8g5igK63KP3XLgNYTyvDv8vvS",
  "key6": "4XWrqr6QUf76nEEZ2bXRhwdW7sMnzARKtfAcDUowwDZnNrx5tpzjhnm3iX94EuM5bLNtcKxFNW8ZNLbt7GqjiDCY",
  "key7": "4hE6YWDPVzdpExch7REA8RivdXAJoJWRfFyBfs6PT8gf5VgKV2yWqSB9FbmiFY96Z7yQsV2C3mNpJKyKoojQBEMk",
  "key8": "5vVpz4CRa8eqQVYGCW8GusUWY4quGg3kowVgdnDmR8yjzu1BT7Hq3amfeD4cPabAKRXDaMZv4v1Ss36xa5R8EceP",
  "key9": "4DvgEVeDAQnNNPx7J8YMMmEkM6gToZ6re1S4Wad7NpCBhvAyuBAexCZG2FdQUNsSdZPgAxh4omdcqRSjy8Bf4wwc",
  "key10": "497Dkbpm46tSwtGtiiuBM9BiqFk5ZnJjm1he84g5t5ynHC92Noor3GLSQKZNQ3fCVNdQFdmH6DgqBmbspqu3mSPG",
  "key11": "3RUBJHJx3yiUARHE6gvWTP7AgLexSjUuT5mzZr8Bs3nuRCtv9Niod7jDCzhb9nSma3UZmMbTB95B1wjwdXtwHdu",
  "key12": "5875tQBwgshpcu4Lfpa6SDBoQSEhG6fg7VRsS9ZHe63ctSpNDZaxRFdawKMYek9rKdLMSe4pxnYMG7YA8GnYTwTw",
  "key13": "257kShvAsFv25yrR7eJ3u3ZjSwmAxEGmCBKnmr92hHGQ5vf5hqvjJmXaUDst5RemMxbefkRSihccpMgGNNbqXPrR",
  "key14": "2b9PCJfJvM8PHWiwXJ24oSLGDC37rzb6934zyXk16dW9YAAFoFeCscRR5miUqrL15vRZheAQfxnMLFThegMRXdCG",
  "key15": "2UtRRWdPw24zYWnjrNZdrfwePBTckqNDJA8gKMZYZJPTxjVBNAbj1J8V5wawHRXWUX9dwtE6drjZFYnQqESeGUbR",
  "key16": "5p6pMcJ1sGcKd4b1r1DQ382woeGZDUKWZyiWVe15y9GGMcJFeZRmCy9RTvJMGhkuiiGSwvMcrjPBxCLqT1WAn7wS",
  "key17": "248hZdBzihRehgvkCHaG1Zbw1UDc8Vt5yjBtjY6WfXFwWt7UQNaqfLJi89MAEsDQW8jRSKawzdRuZdFjfANieR8w",
  "key18": "65deBnPdfgg9tJpxxdvKEk9dRxgM4bJFNdWfZbE9LUTVpaEwBzRcmr3He4uqjKqW3n3o2uTTMSTs7GZZ8YftgtVM",
  "key19": "4iaSq8nyBN8BpeQfBvp334BufNFc5aVtwWEhirQyzU1UywsqeNmjJMuSrcPdgzT9p6cQYn3XMzexbj2w87c2yZFW",
  "key20": "xZwFxdhwsXU7KtGESrpgU2qdnYue516S2UJjLHsQwZ656ZRbkGYRjCsb21pzoknKuQCHVQ4ib57jEtKxxSqe6Jt",
  "key21": "oTGqgPAJs29fi1FE127TDvJ8NqEwtjuXnXzoTqPpCMqdX8yMxh93iZmkTNbTmqhuW5p6RtgNw87CMQgggZyBETT",
  "key22": "5DhDwnqtqB41HzdakpMiQbDchZfFQq9RceVPvMUEyo3Y8gHQ23DqeEi1pYNRLcefrm2x59x1ESUCQr6wLGCgK7KW",
  "key23": "2t9KZH1mQaVqSSk8VZCghkYdCVHCR8HJ57xrZmUECdnsd3MLsr51SMpLMXGxwdWTFU69Adh8sVLZ32gdGYQ7zvSt",
  "key24": "3JpsXSoR3BFrUcZnKTXx54T3A7UZF3dThYhFjoXnpGa7UXiYMEZvyEF9Sq4t4uddC6srKGZJGf4k5R8DcF3KrA94",
  "key25": "3QxPBhwoGNUwcQbmuxr9VA4t9ejbbJERnTeDU2tjVtp17M7izeYTQRMkv2bZzrnK85jVxFWFb2dAJ66MTRxT7EWP",
  "key26": "2rSB3nVq3oJyLJ1iPDeR31Jgg1owuF4ykAxMoiK68BM9GgnvvNfiQve8aDnavDBAuLotDMpWoQSX2TDDGzJPTtj7",
  "key27": "29YCQDXM5jMpfnD6t1JFW3CYSRLB4WvPbPaaAQK2YXddB7HA2EKPsBYV48LX4w159M4yzQZguqxiwu7tQCpGtK3R",
  "key28": "3PpT8Y4jkZapagUTjx74Xuh2TGzsbgaB6tgEmqMydaztzP5dVqwiWmGyoHpHTtKmUPev7BorfeoFbViAPsMvk1SQ",
  "key29": "3dCQxNWp4LpRJK7ygPXiJvE1HBTtHDEFiJZzhUnxxSExALuE4A6bD6GZv9EwLsZ4qeFVYrktxe6f2r7aSu8HVF4g",
  "key30": "5F3K78RHCYsoEUKSoWDeUtu1dkpPTaQgCu8vFDSABfzUpMpQyvfRnuV8EmQUPH3VuLo6UFPqqSJyAKPKWewk2P91",
  "key31": "3aeo5gdLRGzTToWhKs5vLyW6HuTqV5PaujhBdNd9Uc6ckMmKsKbDavxwpt9qk1jjY4VHv3kAoYiBdqUuAGivTGM1",
  "key32": "4yzD97qS8sc6MsvQM2nYLkGeQ2mN2nutZQzBGbJMc4YKw5k4GvMVdhK5391LyLunjcwjs1tT22t8whpm4cEojUQD",
  "key33": "ubWiUi23ENMcfaz1W6FfBZ3tnmsETFo8nhVjPxsKePiLasDaAD64qpde4uYdhGnUCyG3UPPnHFDaJGrQDnGkpdU",
  "key34": "2S6AF9dWxRHNsmkAVyVVbaqY6aoS2c4MtZyuU5jtdB727qsAyp36NepeA8qsusmaz1k2sHrCTqsSd1mKgLWqrwLb",
  "key35": "4UoJC1qgHRnuFUeyiqDJpK4P7qnQZyP8CGe1fMYMd8vAuEFrnp8yiXGxTaQTDKktti4QUTLKkKLXUNvufUMhGem2",
  "key36": "2s8TxzKvTEnCZujPNA2nNVCEqc4foHGDycfhCPuYQCWMTxPAXUo1kr3EzBZPaQGm1T1mnpR5s7ZbCMiZMJ37TJT2",
  "key37": "bpwJkRKJ97Xj1QfGPP1BpDHrBJmtktMEf9Ve7QsdGMsqXwXgKvW37YBfWsVLuxebtTvrZuQr54q6AXfHUdaZYSE",
  "key38": "5ME8BMnn6JuZYNhTE9T7wf1BVuGucifXMgSagAeJf7Lrh4jEETcy6Z3wgco5BP5Vn7bz5gTbTNheMoCnTcoT6vZH",
  "key39": "62qUpcgnttZpWortCNXjm6RAHoYifujEoCvKpB824WVz2FLSJjkrYav2XtC63mQt3BrCrSPSN8bqGpdAdmD88HDA",
  "key40": "2aUQut2SfRCtwgVj7PF7z1zfNk48oCZoXbw7tsE87QSFYUeN5QW5rDQ8J7a96epyZvn2N2eYDSVk2eW3qKipuhos",
  "key41": "HiYAbGkE8ympQE34ocr7p3FtVjsvUapqoVCaG8JTEWK1bK5nXJE9z8zayV4eiZE5621FhS7iwujCXo6QZ9dyTjg",
  "key42": "ZKieawyBkq39u4kd1NrL3LGQKAjJhUmfxCFLc8fk5hNagmk56qp6WGiyKvLmtabswnPwkiN6whWFsArLQW96CkQ",
  "key43": "4riJFPKZvqbN6J547jvbVxLch5rwZaurZEyfNCFwq2HLRkBjMpUB4azYb5SBAceDRZxg9JKovuHBVKpskyVKCnY1",
  "key44": "2PnpFc47Rmesh3PG9kREzceJhdXouWMfUq81BLMoTZuxgizx2K24w5KqUXGkCYNpzKKMb93MCUP2C65iBExGLXHg",
  "key45": "2u987SMSYswm9PjEsrxqNkFyep4qtF175QjAE4gyAi47fF94maUqoK42LNzZskMcAgiGx6Z9cb2f8PBkdE8mm5cd",
  "key46": "4pztNJYXn5PnDMcA7WAmTyhUfHxBtt5BYPiVBeCS5U5LFvRP9kYeSi6knTVrFAdeQSvYK1Mmik4Pe1A8b6NAs1wU",
  "key47": "42vd9uWcDnZvR8YkTjYs4hE65vbNmQoaGQ8NacEqKwT8DRjnL2jL5ZCD6DtcmAsecxe3W42Eysr3w86q1AtoAy5M",
  "key48": "5SKyicJuJ7tcoHjCT8RVjKiHDSND6nwNbfQkGJHTdKrusCgTFou4CqDXB41TjPUbjTRwrJRkW1pvdy14kAabJyqv"
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
