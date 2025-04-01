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
    "4vQMsQy2tkGB7uCCZyB5Yjq21prcW3eddrq6B3jfUqsXFp3U8Y3vY1vNbZ3FYBszBrcJUXUPtSuxToDZmVkcAJ3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N9CeoAEtp8rHngYPszwXBTiYnQYFx6vMKngShAMkh8NzwGqxcEADMzw9dSgHyPFzpPwzDeojBCUkCVFQLC71oyG",
  "key1": "4Yw4bwsVyWZDcyS6YMp4wJVPwZgP6BRCuTGEhg2kgysmSF5Wuf5jffD3oMCFNeKsEePPz1ZR4u1duEqyuvre1FNU",
  "key2": "4Mdx31G26Jn9LbAbxMvWaG1PygxR2VKodsRwyvZ3rfbwdN5DHVpXwrMMzcQpmzdd38BKmMKcBL1p6wKh5TD4Mnvt",
  "key3": "3ZfRN1Aj8xfExwfZhanHFksx5ydnuJAYQMS8bW8UdHuArVyzHBm7DJEaCchqqCts8kxQKzHTWujLVsm2fRRRtZVW",
  "key4": "4g4aTPYeLdRDEBDZ4Le9snob5cAeD5SAh7yxzvtuF4dzNWaVx7rDfwA33atjhvTkCLA1Kor4a1HFj33tCDZEM4yx",
  "key5": "3jB8vAAZWCRCWhYByXZtNiSj3D3LAMC86X6j4eL7kQnNimbwvRdn2h2q4XUpasJHwttd3f8n1z1jCouQC14a4kA4",
  "key6": "41FK7j9NsFxYRdg8BffnHDQG3PiasSviFFAL8a2VTxYFsyz5TS9fTXFQNRNdEZvsxJsKzmBbYQqhhoLWNoc39KFX",
  "key7": "5q4fsnwzYyA1nrc3WYcKutV8jzUwWDYvXkv5anstC28EqugoVQZc1U2uciDVTMw7DzSZo2VPkZCZCQdkMUc3FYBy",
  "key8": "RxC9FkMA4iQVtJKfdVBYQVDuW6cbNSuUGrpn3weVpxo9Unkx6LBmv1xb9GbbJSDUmujj3aQVjABQjx1ZdtPcySd",
  "key9": "En6U9JzKZk3ZvQ38N6DmpLzdFG4e7e9tRVgfrXBd526hqgWJNDSgjysr74nrdW87zvZYpTtn5ZGGvp4ikDoADRu",
  "key10": "4vngBJhHXkxuo9ciQ94EVULL6EQtyEPbsZ16mvUzAsaFsuBFUYAx35igNRmsXmgCc4Mxkbwna4E2WajFky25j8wr",
  "key11": "4HLfQ1oNmBHrhWaSzN6DSuqSfpwhsm4KiPRqtcnCFp3tS2GnWLfdmcwNk3hT4nv4SJpvQ1XcNhPNP5FrkeDGGmQd",
  "key12": "5gYYT8f7HjNdhUV5kDwQZt2AH83hQv48FHNhfP2nC1BaEXsvQm5ayK7ziufDweDabE7tvgxE1pJVEHpHoDAuiNyu",
  "key13": "4YZzAYcRY4rKDqTpzNYBh314zDk9iytPZN3Ho2dGDNSP1JwqWANa6Pea8EYdB3f33heyZEhHYu9zU7eaEH44gnuj",
  "key14": "49SAqYPFbrEb4LGyVaV3rwKteNLhv69QmxC7qKtPMc18o65SqL5gQ9dZB43f8v2g7xvZoUr9KxiDh1ojLMSBUsv9",
  "key15": "PnqE4SXFoQ9thX3nZszBzhoNPCFEwKPsvTa6DuW6wy1uu1Xhv2Wc6B1eWWKt6hLd9cqiJtsakmggkFSMxwti9xi",
  "key16": "2Ast3oLsLBvtUtaTCL8HeRtrAtMJM6298jjmn9noxhqZqhMCQh8iwCh45dx42CgzmVYGxbrYqEDmfLh7Aj9jdz68",
  "key17": "5dSgBJEib6DhPXYrKTj13jvCCQ6SDg7XEbgKeg2VDgoU6ifkKCqq8R4Rbp7GtgN9CXwcP8X5T2UQ6Hdg9Wc4SLzU",
  "key18": "4vB2T6QXshsZaGxbhx5aw4D4s36t6ByfVCQGjbB6Fh6WCxkn2guGtYcFi8jPLczfN3U2NN6Jfwoa8GjEduG91Eoh",
  "key19": "3BwZV7yGoGGPnp21RoSDe5dTjeApX3QiQzEJM5dXUJ6a6mQd89gj95F57uPC6BJqwA6YQwkjFieZf1PbfmRQE6hk",
  "key20": "4Yd4uL1cwwk5SThFPiAYJwY6kW83BbGWFC7WCuNCStj5Q41MyoFSHkTV17UJNeVVMwL4wUNZMtFZuP4thCLppANz",
  "key21": "5pxCfD8abty1PFDLho8fcU1NTbRsFdb3axiXpoAJAYDF4YHAtYZF5s13dKUNsN82dj7HGdrdAGfoGyTNVeim4YTb",
  "key22": "2SYDb69rRC9freBZSoExuUXwZpry7CE8Fo3j4ksYvPsLZgh8gUvhHwGxz92WR3reFLKhhvZHsujkXRpzjX7wXPhu",
  "key23": "37xsQ8y7AJgicCWEQvKXewXdgk7kUDbgj5We2Mej9AJkpYNmzGCFjzumLmwFVyNd2foUuF5vSV6AsLeyW6Avkv75",
  "key24": "A7XvN4JzTqv5CN8mdg2RN7eZ2AH543kywwDeChJteLEu4GmWVxRCgZqp5iq6AusPnPCHSTQnZgmQKs4kECLVphk",
  "key25": "5K8wd9dZrS6wKgopYnJNmtD3te1rcW8zJYpF3Fp8hLkcx7RNQ9iy4D52sTpQMEx5BTbweiAvCa39wRj14SABqise",
  "key26": "4EovAehsYuAvPhuj4ts1wCchT42TfhphLrec4uwKKhybLnCeGEtkjaV297i6SUmEj3KA1nxUEZcZ1KaZvrnug9nC",
  "key27": "3YdPWAUVPTqBd9RdeHLX8M9fkNtyJmy9GSvx3QzVkVa6gwJ7u2MvMfTXFmMTiWBRDvc3j5igCqgT8bbqQSPvN7wE",
  "key28": "uv4Tni14YJ5JTv9fkF7TaciYAhY3VYReVX493YWn5ERyWV9ZDrHumbw4N3A8HNcPtWJf8RNmfuqheiGoZLZdFSK",
  "key29": "35cZU4ABa2PcTfU53jP3wK69qdBW6YGeyggWSUiw8K836uy2BgiVYL7KRXwh74b8riPaVfVcSQwmCNp1n15r6f1J",
  "key30": "3QWMUF7R7wyhY66smLfZ3tnDe21dBUFhPcrwKfNGLaxnzyRZpBqR7zVe7LgXXuEberM49y5ajnMt2wTALYGKs3fT",
  "key31": "55jMMozrRXif7xuKhWSPQEcqfVXaseVg97HZTPPzjSFkCF97pc3kMYgAgGMmNKJWbKWq94ULR4RamgsfFctEpFLK",
  "key32": "YgSZEcaJH8DpbqmDWM2Ui1urXrWQYPF5YQTncmAVfJK5HSf1vjMhJTsZJbbHgFoo9FJRoUNAPg7W5CmxLtG8Pwk",
  "key33": "2ur4xQmoag5vrMgofF5NGziypn8nntviYJPvWLubDmp4bzgMq3UCkyZSivPBQ4MZPuZBe5Er3nJL7hzYK9kUbVx",
  "key34": "4fMz5Zg5CAyjfYzGBgY34Ytf94L3zSaMSXfFSMGnHzQL43mkDNfc7HY2NGeDqCpCxzVbKTWNcGjcmweZPkU7KSJv",
  "key35": "3HSg9h9yHSDKcoGLSW7Fp77GXArAHw5AKU1HWUx2SLptKRdKBL1tYUigzpnpb82QzoWgy4uQqg3wqosjiqSNbtKZ",
  "key36": "3D7qCgPGqJyo3A2a9WcN9Nyze9nPsWLgUrZEAEsRP5v2AhpHKdDBQ3xzLGSaSc9XC5XYwX6uGkpKaAK6NdgicCkY",
  "key37": "3WuYegzYMPnxrRn2cGE3xrbxpWA1aj5FBtjzWw1MFZUagtDGzJyANnxvo7cHSBDSBwBmwvYPTGg768M4YKunV8ea",
  "key38": "3CnFHxTj1Gd8fzSo7S2tEJJF8KHMAk7BYn2mytocLitfVdDtM4cSGTbcgJJ1BcH5QWwG2efUPB4JZLqaMQ1hTjZz",
  "key39": "4zaQoSFc7DpvBn7pDvL4XMf6RAJcZr4TYbUWvtJXF58Phw1KCExJbs85pVKZvPQJdbccwqEkz9QU9hShC8yTzcop",
  "key40": "2eJahY9v6h41h9z7DzCVCtbDwSwLGcbYvcH5VmZJwVECka2NHpkEQkSxT9vyJLSjYCTkxQJYB6Xyhyr5QokpbqJg",
  "key41": "3pafNH4A1GYzxz3yfa95B53PXZFesbwjdfFXGykbfM5CTFGs65P4Kk2ChgZ45dz6zBzEdDXgQPhq5E8xAZfHWvEm"
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
