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
    "5A23kYEUwpcQyHyZhwDyAGP83dmesaXXgHn3Nqyy6cuaFiSipa464xAn41pgNJDjH1BWHoPaSPwxopD6f2w5Uf9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K6Ece5JNyJ1dFMuP9wt5gk4iknUzmW2q5t1J5JKZtRK6PGDjQxUvwi5mkEZPdpSeqHruG1YN113xchRJ33GoL7D",
  "key1": "5aghLBAoKFL8hZbfzzZVrwPewZoLnGo4YvPrFRRPcV7TmjxJ34fktmVhpLo5emeiuqZ5L8YpJCJwbBksDchuTrS4",
  "key2": "28rFZoMbge8viHMNHqJ34GkpTkpEn2W4RD2mZM3Te92hW2SozMSwNsbkMP34Muuxz2g8RXTJERuBDe7rQeTw1MHZ",
  "key3": "5fpRJmGEU7rgWu3ofgNpLchRpjCqRYTd7ft4Cz6iTDPbKG7BF9E6tgBJTzFS61aRfn6UerrVTCTzi69WjvapLvam",
  "key4": "g1EaTfHLaq2P5NZD4fpmF4fx4izkzSFGoez2eCq16yaLFfjw578BsdJdBxWwR6MzFNcdxbH6Lm8EQwN3vjvUtnh",
  "key5": "QN1EojhRKZbqAz6LX75XQK26HxwTAJzDGiUvyzW5x4PAzg7JxLVg5rsvLz9u1dUusWJFrofRtQSMLNH7xGkB8NP",
  "key6": "32oPSfZXM8ADag5iCiup8oymmokELTRsm7HtumE3oPLHcJTzRgrXJq8oLNbY1R5p6UvxNawg1H3jjCs6RYfJCaFt",
  "key7": "iKq7t1gLaDCyFdjLh4J4Zvz55MqrdmozFLZDodDDxYhE1CQC9EqQWeoGSXpdU14mkBHZcWETBubxnnUdiRGbvwQ",
  "key8": "4qXPCLRidoiZxe9LmsZGsyJAz8vGfM45cvRRZH3EsTfsLCrLBw5fZDePhhxvuTYtzTTL8Sd82Wk8Pu5sceJgV8X4",
  "key9": "2KYdj1onWicJDrHoXp4HNYRWnhUnZMKAvRHhNtbjxF7M4rYUyHwxqErUpEgzsj1TrQJJL9mCJKdYeSXreg2UJSQh",
  "key10": "5EAPkdg2dSZ37MLN42rkzRqqwpnWSFwirbHyaH5h6dBJ2Ukx3Hv8iSRahFVPdQTKLGsMgFB8XEjHRT8ZwHWCz2kM",
  "key11": "hzmVnsb7v7WucmXXr8pt6jY1xgz6DFwLuufzMwxERYJbSo4Ga4qHZfc5MJ4UBz7h5N8hPRJhMvdp8HBn7wL9CD2",
  "key12": "ZZYjZn5cV2Bi9kbPHiz7jZafq47URUX7wr9zDQSXdmNLVsWWB84YHAMtb8ncviNfLbVF1Uoj5gXDxm6dAYu35nb",
  "key13": "48n8mAY36VRUs1KBJBrRxzbbuKB3R4otVxactP6TeFVuKgR9pX9Ejgce79UjTad5QATum9eTJbcGf7x1uAVE2jTn",
  "key14": "3UEHCcAKrDhre52MMVUTXpXBaWyjdTX68ScGKKgqutq95DtPPvrhckqfF35PBmZz7khFKvqoFqx1SRFJD3Sbt1pq",
  "key15": "59eXUEmEm5r3ZqGbuHeQmcubciiA86kvQQiPQbVCXUqvfsKJZYdxVnTX3gRbxEuLVhCyL32L8C1myyoHHvYPHtpp",
  "key16": "2tvvu6aYjBUFnSgCwUqjA3ZeQz3pDFyJbmPbSSmWeGVdnbE6XLwE9PbGkqmh64y4jtMmvNZot6Jtem1Ljo4CW3aM",
  "key17": "5hM7su76jNQwb69QRhkW8m9Q4pEfPeDXP4NNCCUJrxFGY9yGThJLmucD8ZLNJ7JGnzxaAStPACuGMNqjEB6La6KZ",
  "key18": "4xaeW2AnVdhS1xz5gJc5tXT6gaktooYroPL6cqh5H3YNx9qiuQXcUY2xUP9WYcgeZ8skJ86aVHLFaRquYDwyX22q",
  "key19": "xbC6uCfEnSeT64JnTK3FdWoJ8qwRqvs7SBDTYAN6EBURrtsJBEmKvBNe1TivqTEWKQ7KpHKcrK7BarXT33jHcYS",
  "key20": "REHVHNzoh7H2WompdoMKjhqewBzaTP2bhBrPfgdzgZkLCz1ENmSALbaUgXxtFBHNsdWmmX93Seay2eek9LHgCZ7",
  "key21": "2rzyL7KGXQWAjFEfEQFHN9k8axJT1XyLmajaSS7j7PqkLGhB5qbvytbnBw82sAdovNZ7SdxtrPUdaySkP8wrJTu4",
  "key22": "29jRGMQHn9KphCZzc9rFwXdgazdK8sE7Mh76QWf7gp5S9vxpYAdW1XQPyUrc7mYfQRAQbVWSaCv5PxVLLcPRYg5Q",
  "key23": "4fQ2m3AZBgkEqCAhUUVGXhMMpkRLZa1inGNuypZHqSQ478hRaek3DMJmBLvRY9QpyUoJ323vaVWpLQpLSuZ9TLgj",
  "key24": "5nMqxpdFGzEo2N4Tof4BCribp6Lp3E3xTnG1bw2MLokmr8wZo5EukTt1vFdguMs8uTCruiwCZUEM8SUT5ChFNKqX",
  "key25": "b6pUJiQd5bfRjbuZDdS47MRUGseqEBBEonj8o5M59cRVYsYLKo1iYyDRYWrh7J6HhZLNU9Drph33eSS8X2HAa14",
  "key26": "8zcuFGZtZnrwQL1RQLfQFbBTzjLLWZ1P6DBzXDNNev7m4Hx8UojpqjMKnh4gDddzwV8R7kYA54cWDFTiJdZR8J5",
  "key27": "3cw8PYxPsvimmb1DLLAWEFDiszvEDEkYJFxjqQWX7XkaJn8tkEZJRWRkHACXSkt7K4hRQgms6MdrYKzE1ZM9phG7",
  "key28": "58D4CnRPTL2iEzquTLQKsJd7vzJjFTySLn8VXzYzGLMBi7W98VdcfxiRSme328KTpoQz7WMtc5VMDTtvSBrqcY58",
  "key29": "2uyVJqMSbugY3UdGD3mhUHsVvrAyG9T1xUu3ydfKSmgTgo6jPRkiQdyyKuMznQkL5fJLW9KL73VSWmgdbGzGnrFT",
  "key30": "52fyg9G1kei4PSFPE8msCogVbkDbSpUmbHMmt8ny1t5J7gqhz5tv9HwcfewNtUGjpVLkFRZK7K44u8qcmBfJnTW9",
  "key31": "5vzztXwKscXqhj7GFqY9FxAw7LWxFJ69hCw872WB3m3LDoNwDkKC53rXGSao7SwHXamVFwikeTtGQJMbt7YgfA4Y",
  "key32": "5JbffGA1TbMwbXEmjH92Negs14vpt9Qv84W6VDAogyaqywnFP2XDrYGrx6dLo36jrooB5Sg4ikBvqhTNkUkxmYA2",
  "key33": "57Cm55tyP6XX3RBimHus6FfQvQzwZVNbeoCEsxpfwMDgHjLfqGiKA7ZWupvJJtrm3q5qQpbchND62piZRRTdPtzv",
  "key34": "2nA7mTa6f8EZqzKKNa95vb7ad5Y7kpqcWSVMKrLSPSFffXxZK8zRoSDZ56UTVZ49kYzgbiVFip5jZz55vs3Ukmyu",
  "key35": "3YMqGuNzSQBHc6Cg5EzJoKgZ3gVxpd4jLhJPkmcMdFpdowZKo46wNgk7qSahRmpKphMmtjNBVHEvMAQfrAbTPW4n",
  "key36": "3MrdK9RwrwhCgtniCAZS4sPekpRaHNibjDQ5q7bNSsvMvER4iV5B9vxuZ9JCksjvRagyTdP54PWc1STjaqA2qJvo",
  "key37": "2bxrmmRKHYZxUaPJYC1LokPz4Urh73gPmYGGH8EYT35aaUfJBy1LKQaqV1YScvUia1ZgUuGqbFuUznxtKGzMDn1Z",
  "key38": "26VDcfqJmCozLvKuQGK18CZHz6yhXVJVREeWmNWR6eKVu6V6tQiexjswep1NVTWMWoHV8RNCVHzAgvb3Cv1r5G4S",
  "key39": "2Hfs4eLDyDe5SaStzaNUGj4oJn45Pdt5q3pyGoAhX9z4oGwjyWYH1Qz1nQ23EQ7RrQAhRqCyieUtjc4PT6YpvG8k",
  "key40": "XJYM517zWn6oMHKRqt2aM7KkA676Gz79tHSnffPSGZrKpuVas1o2yBWPAke13yYh21g225dqnCSrhHSeRy7d3wG",
  "key41": "a7Tf67QBganKYTnX6j876jZHiypVygYU9a9RbqWjchPGxvgUUxFhm8FqnUcAV6KcA4RWMjcF3v1X4qHoFsKTGPQ",
  "key42": "2wpNm1PomBcjLK9BgTd3swPBXLF9Biyqq4tKJaEUVW9gxCTrtneZ8WSXKrmH5RyWucKQT1TzntQxdytSLSBF4Tbn"
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
