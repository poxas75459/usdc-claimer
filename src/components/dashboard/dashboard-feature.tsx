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
    "2haLAewPvKjXSsjDoKvcrySZPeGLiZgmovP9JCsoNajAy5QvzGnq6LLLazJ1CdiqzcPVihCKeJMSJTyTdzFpDPMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k3DdosyTGL5EyZTq2GukxVHkPDszNMoi3tbx5oSFM6UcYdWAEir1mGUAfayhUTPQDnKRGuRS9BeJdj2S1NB9eoV",
  "key1": "5gnv7McmKHhMcNwoEaAKuvxmAez1SufQZbWLqEg2jipZtvTYiBqD3ThukW9FXJgfhfhRqU6gPH8yReh7GcPZUzeg",
  "key2": "5Vc996QTvCbFgF5BNxvmmKGtm4jWRVfArxxtbpWfomutzGfYBueSrgzG5UL9gtVwfPunTqgPphqixyapdG3DNcYD",
  "key3": "4LrEFhpiyE33w8fN3afKPcBAR4XMfDJ6TxXb4wghNibEa6aweZmhqkAUnoHHhg5Rgz1jkET8DGp6MjrQQ828qhCL",
  "key4": "5rMX7whFTfMwo9LZ3nZT2Nw2TdxqrExiURBJ5FrBvBe3owqqxPAT9RZjwAD196cHGgYcK4nPpT873kKjuq59B5rM",
  "key5": "3gHBd4frjHs93HtZsW2YdC4SLH2QTPWtBhm1GGkwKx3yzfEpPKZmPudpyFCtzeEKkdYB94cJmYwAPDoZaBzdRtp6",
  "key6": "2fUr6MzFQCnnhBu28XyWMwJRYuWdxudkh32CsXaFHZqGVYLLmHwtrkzDp2keCkJShXwQPtJQmqjDKkwUWKkHT5f9",
  "key7": "46vYJ6UUfdZC3SJW8FsJgeUuRJDH3iUcJdvU6HHMWdGk1yk2z4w7FqQTnBJPxADX9bfJ4pAXGHm684mj9Sm4shNv",
  "key8": "5ZzPpXmkbTcrvqkbC9VTJCGJCFwP23H7wyQv7cxQNMRkbFkv94ef2HbjPphGqs76NyWBKXuQJSJbrJh5xc15rCdJ",
  "key9": "4HvGq9AcUJnaWCEFSJtQfJ8PGyxWHGgJkF36so7ZQJsguruX9xxfqXYhPw18AHi5Fywq5jfMZAE2KiK8qT3fhrMn",
  "key10": "26rCKAceKAExM8astUSpi2cztGsK4Tu8H8NW3YeZyNjJW8ALopopqFCKhVg1PgErP25v8Tzoov2BcTaViagKWtQ1",
  "key11": "2XWCzBbDRNozdpabogxoLrLsn1nHhpoKrCNSN4VYvbhs3WEDi8MqGfSi8gN376cLJK2TLsSDPoEGJVEL7FABKfoj",
  "key12": "5QhR2dJFBuQT58NqiWhu2bpizTrgZnWMQuV8SSRdN5iHFMJFXuT3MqJWjWG96C43EKXGjBeW9pnEzwg4PtST9djd",
  "key13": "XKmZfksWZjCdRR66uQSxBwVxzwiWwT2ZyrS1DXLaLWEpefWGYUGwceipeNeeRdFjnwy8P6NU2KYej5upZ83Qp2p",
  "key14": "3uBo5EVfwXBbtNNpjaH6xg8VGeMh2kmNgF3iEfLbwkNWXzX1KQ75sxGnjqV4NFv2zXrH9WoCCHixK2AgBKGLKUD4",
  "key15": "Nwf29UrHNguLk9TgCWq1ajziwBg92FuRsuTNp2pwKwDQzubFxDtfHxTVbEoABnBfqjNQ7dGNfxTU499eMeBY5oP",
  "key16": "WXQJ3Coxu3CQpFAu537LHTBoW3bSnMQnbKYCuBffz8q9tCB9DftFNCuDKMSCFwaRrz2pc7UZEZFt8ZZvVLShGme",
  "key17": "2JbZiUu48SszsB7WVRzpCv2nuSziHRfkHa1dNeuo5Riiy4ADdE5wfNuoTtXqDbLp7zrN8La9QmcYBXQGwCwmQ8eE",
  "key18": "2fyM24fMkxFRjEHntaxn3j8uZmrbMt7onmUCBGczzuPHQd7BwSwi7cvnhStUWTQNN37vfAb1kPboZKiipsHvhH1o",
  "key19": "64cPLNTCyzTJbWUL1qHzMTtgXa3PmBtLDYhu7yYpwf1TVBygJNBr6SLtRudWUcJTwdoR3GK3AKqhkpJ1T4tGNAX",
  "key20": "4xgJ6UckWYsQeJ33fPAJByKJg6BhYFseQWfUgEE3AfvHgMr2D4ENtPNwcg4StHGhxeCNdQRYGLrb2UBMv3wDGCur",
  "key21": "4bpp2BoLWfXhuqETurGy6E58TvJWScJJHE6S7LFr3QSfNy6q1SMHb2hqoNWqV6joscDc4ba3REDcXYbn7tyzw9Cv",
  "key22": "4hW2QedxS1VCAcmCYcpqnFWcQyxhwLh4kyYHFJnAb83tnksUJ1RSf9ZuKChaWVs2nZ1F3Ecyw4GSstsTCdrqQmeW",
  "key23": "4dePkkSAe6zMtqqhCTCwAPWACrXFJAYMy55G9tNaALmMeUtNLb3BHVK7SwV5aLNvSEePY3qG1ZZ75qXrs2Pm5GYw",
  "key24": "4tkDN8aY4aEZzSCM5VoozytMtsuPdjSP5A2EYJLA6ErVoHfkAazL4UpL32LXRcsTbeSQ5WNDAbpQy5otC2K4yd9n",
  "key25": "2zHH5EK9Ck8b9GcjCKMTKWdskiPpNz5R5shKz598F1CwJcQGAQfHS46kzDiP1rps13RaWiyCZuGQY5zwV1EuZNdU",
  "key26": "5mYDdCYjxcKxWcmqcaN6AHbceMaDRDZX7dzaG4JoWkzEH3WPPs6wSDDCxYWQUQgu7w4L9CYi5Aia2GZam9HdcBPe",
  "key27": "3uQ9NRKAmiBDHfT6c2WAvP5rsTq41zQYrASPxkCJwtpGLNwzfzrnNGr8Nb3g9rt3YvZdAJTY4NekhJULGQEEZVck",
  "key28": "4VPmRgV3bf7nZn1RsjVUtPCLKk8B4fsgKvZ2rBtEiTMM4ZbojYTFFApWHH3usDQF59UQNhZieXmPJrAdFiW1TJNV",
  "key29": "2xff5QdfwW1eSCDwN4xrJzufE9bnZ7ATTvbSfqbSoGcpy53Qkd7Md9cdAzTUoLVtMrMCTNyyNHRxP2qBc89dt1tv",
  "key30": "25Tq7XDTLRLzs1EtvQG6Ak9WSX7tPy1DnYosm8mvF95TfgFrb76ck83sSJEFqq8h6KFR2R1FFMpYPr1NUdeaz7XG",
  "key31": "2UMP9CstBQgSg82HzwUFp5h7nwYkH5wkzwv3M3mCwu25meagyd9d4aJsZwifo1QKcNjbmeASDxG51EybfPhZJTsp",
  "key32": "49TBqchsp7Su8T3BZp8STzQQAQmBpiPXMHeeVTS8aQnzno5UMkyaHmsvDfyALBsrFsbzqWF2nYhqkEYbsdccRKmE",
  "key33": "3j3912aXazdU73GJrWTcnzkrgHSLMJWBzib7DQYQ47XAmBEcxxNCfARSBLUr54xVkqBsgTeUJKaTxMpe2Fvuqv8Y",
  "key34": "4LikuVuCRQpkgB1GGCwG31Saox94vdNKx9WmtdWUzxYpBMrJfxjTvAEYJeHX6KfTGTB6bmkXCjxvzaUSM5DHktdN",
  "key35": "244kRJMZGyo565ysTo3XGon58SDhsRhQ3ycVS3Mtt8oB8EcoDM3tJwZUnAjzenHPMTKiHVRHbwdCv16JfQtrdyT1",
  "key36": "3f4r48AT8jVG6Pzr228Z5xNgkjjsbJQ8VugdipPtUPWeQ4jtM777vs3RGEUNbRWB5SkYZzRBG6ikr9bvGCwNH7xg",
  "key37": "cnxeYn8vrhRujowUZRVufqBVBUpn6Bp6iBNADSeTxvHLiy6ihupMbZWDsFAFCKn9WrTU1UKZEnVyDaNL3SobQC4",
  "key38": "51Qn6QgqJiJ7TcCKo45ipS726SZxHavyPrMy4oKzt4PXP145AQwgyB9RYBwFywon32vSvUwKxbjUUbCSWMnZxVbB",
  "key39": "5XgMqpedhx2i2ppr6axjxdL6xsBiuViffNQ6CUxu6Lh1nF1TJ4d8ixZpdmbt7uReLVyk4czXJWLgewd1hgJYc7Vj"
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
