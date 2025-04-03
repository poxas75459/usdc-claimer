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
    "5YHtww5EKKRitjiMW1UZfcpwj2AUhGdLJGRDhU1PTmUcnQhYyfjcGxiJvhP8a9XsLrs9zkj8Nr6AkirU5G2LxM4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nasav37xXcXZQMhtKQwvTAsy4u27aX78D5JxqASZsyZxnFwR1q1enUKgsCyjfsNnizVECWDcc1z3LzTiRfnoBXy",
  "key1": "4QxgqyoCkbrEpe6GQtDQrc5VFv3nJdNLGPk2kX1YyA8Bo3FtAjPUZ9JUt4NdNnBp4ys7Tk7NVzb46gmaUXniyDVS",
  "key2": "4cBC4roia9N3fRQSdsShUiCvZ4AwxBPkhc9y5npNCyECevxmWJVNpzmr8NE6TNQfkGrbMN6NFaPaGibyHgSDjcp3",
  "key3": "4ZCMY9FU6aQBYtqNaSbibsNEucMW9oVMR2KF9ju4TPEWgpp6jytBYoJMCRmg9b8yBvAuCmubMUSZTtPj2otAP35w",
  "key4": "53gKzFMsrxoaXNyPC3mPU2ZWMWizqjfrgpY2YcqJvRU2b9P2ar1jnakg6dbWgcNLqnKfdgCvVrCT4zF9z4hTM57e",
  "key5": "eDG5TGrnoSFdHJohsooGzhaghXj5NiD73wSq4qHxNWyk97M5W5MaMWsCUFaQA3YU8xS7z74jbVanfvf7xN1ityB",
  "key6": "5STXqRP7YJt9pjZiGBr8Rr1T2UxEtFFDpZMUMMHnFhdZcLe1PN3rqFth74kn2CH9yoJRTZoMKDurwBHGnCK3z71E",
  "key7": "5XHSKpRd36AmKZVnR9TzXDhdiMWWTGr7PRhfpyEENS2fnwu97gcvNeFEfnVP31NpopQqeitjtwaqEPoHWBizycUK",
  "key8": "4mZxoVBtUb6f1uPqgtgSZz69ZQwYotwyLwUvdLQjpJJoANmfZtj7sNHp71PcjWBZfuw2p92m5Kp55ceqFxq4yLu3",
  "key9": "5CEmfH7Siq7JTW2m7N1XewFpk8A2ohZnDRzpk2QFE1h26bmJY3GYgg6aMGCVHSpgcsMuyLEiidqguvh1HJqQJNBK",
  "key10": "2nJo9hQy7U8yGgiLnps4evvG8vgXsmx5aqCq7RtHFS5RvXxMS1Pg2cH5kvhuKzMhbZGW4PwgxQVBKXBNajD4zTqK",
  "key11": "5P5Nyy1Eg4sHgZBYKbM26Nd7hkyeZ9yzeSfonVygkN3M9M7J8yuDAqfyschWByT35HqtatYjsdBkRRY7qnqkrPva",
  "key12": "2ReiQc8QCikXvpLMDg5Hp8sJJr1JMLXCf9YnGY3XsegZiNA8px4wn9YFDP2fgbyZdrvGqhPvTJuYyN2QbGq1hwJ6",
  "key13": "5uBVq3YypsWUKTfqMuqn4CjxAxLDMdUxDzVWcnqUSaFYHFB4bMKTar1sM8X5TpxbSQRCaAwbWvVRi7mNb9bUbaoG",
  "key14": "39bNAA3pyNdA7bTMXJVKTvm76FCMQeXG9BdsCZ7EWccQARGqj1amqUvPTJqiDqbgfgnNnNZe8svRH3dWQ3zenhFt",
  "key15": "65N9sNuPT6NhKwwgsXPYHhen5qkxdzztMRTK9rhPzEoBttam1yi3heXKkhq49RUxecv9DMqN8dvxVHFsxV5PpacG",
  "key16": "G5Bmx8Q7G1SvcP3HnrcfAWzt1SjEzyE733RRkDDnGjSB7xxWYUWvuDbQ6YFsaq9yDSU2nsubp368M7yGSDJsAi7",
  "key17": "5Y5iKLjb6xWFYnTChg9aK6fCy1KmChRwRL5PsL4UBNLjAH7pozLnfMCN8meK9MemNAEwyUFcSaVEzaJT5HNNuKmA",
  "key18": "54G6FERsKRus3jQjWRteLb2dsyUwSB3BZgED8tLfjdHQKftjkEFiJL2GMFuCKCBBSbp7zKacxmK6ciRjtpQ5XRcq",
  "key19": "jSq38S8Ayz2uZqg4i9q1hqFnTxTVPmGBXreF8PSDcSp2kMoDk1ALEESiumtDUjw84dxh3BuzDvbqm5ixYQQkjXE",
  "key20": "4fFL4Mst9A3GiXpXRRxr3HoH4MW1wigVTfWLDLQeduynnQZTj1Y9BMSsA3KzJUrzWHnQYnzTc3h6UPjh6zMwd9Po",
  "key21": "5f4CuXAuU1wnMUubcsihFDVz9cQoWgw7wqco1amgHbDMxaDGKvXFPK5myA8jdhuJgdjKmqSjCaNqybp8ova6dcf1",
  "key22": "3VRnc9sY4GtnkW6w2K64DRUung17xMZCbcqrWWJmX59jaSD3CTU73wXcDhTusKaQVvw7ceWNeBoxHP5AF1FUcDXQ",
  "key23": "5f8ks2TP1dnyVnHA1kXkKovpQjUuqu2vys8fdTtkgB77eH8bMCmAoXi1SUpuy7vwYt4bPpcbEGm367ULTb2PQxJ7",
  "key24": "mGFeAkhJSx4uLS4sU2bi9jSih128xKMQdB77JmBfmcSBy8DYPu1zR6fzdCQHMEwjxpupyv1HJUVufPBJCfMxGsd",
  "key25": "5dcygWbwG8w846YYUeCUGjbdrT8vpCPDE3GVu97XoK2HELkCd5acePnRAES4oYkJ7J6BjMDjZ7udrnkPnMgTdTEp",
  "key26": "34A7Ze6tAMAbSz3dh6zTEni9V71EZggt9DL1pTorFPWpADGZyTn93Cbtrk5VR3ggyEqEryonVvADAtAZvM838bfC",
  "key27": "5PAJwNTbwBDT1YABYPdKDXpzKvvqm7vrpaXLCkMzw6CKHpge6hHzdJGFULXtB1DJqEHveXcTqC2UcEmUdfhERbxW",
  "key28": "3TKNGdntC6fa5We785sNBrJL7np5uviUqSqBTofGB7iBzBAyepmR6EnSAUojeVcfjDf32kDKmUobGmAxttbGxhWo",
  "key29": "ux9GoyxZ7bgh7qz75pwER9LiiJRFcDa2wCZf2xnGN5xDCVkv2iAPZEc1ej7bMRSWW1i9TQN4tXYPFk8d135ittF",
  "key30": "LbzWW9coGfZxSujm115fg66PFpk8ZUgioAX23Wd3DkRXU5FgMz89vznf5KsPRmH9EJCawPLrmS8Dqch2DLNbsoc",
  "key31": "ebp6qEZ9GQWHiZuefUdPD19omVQsRqudVY6PrEshoZS2bsZXumqtuN4EMHov998TEGaagVwkDjrtnAsGj3GXSxa",
  "key32": "SEPMu2oo5hdDsbZXpxxejTn3ShRK39g4ynnuA9NTnUxf1fUMWVnUFDBK8yNhMg5VrCr1WyLJGzUKXVCYuz8L5af",
  "key33": "4wqugcVeR9oJMTpdZdjBByad3v5dthrwei5QGM3DWfeEANksVfyzWRXepddityEzgunKM76TzondeahgfHkuA4pS",
  "key34": "4ivSznL2TN9BRgqh1xD8QcaKSsYydVqdscEe3cXYU9Eem4QNS8kwaoaU196AttBzwAJpH8u4dj4tZEogS8TJ2hhE",
  "key35": "7JBnJpXHReQcDXyqQnZk66oMWuF5CwsQhnemxpxVtbWPoHnnE4Wwguninv812qcDUV3Jkpb2VmrR9VEVAZVb5jb",
  "key36": "4jhBBrP8e6kw7qNrE8CoHMmWjqJsBU84YW7UasmjNgny2KeVUjAoNTes7c8DwAtxZzs6QhTbHBsG7xnAFUoHzLnv",
  "key37": "4yQXo67yQP8rju48WFWHDHjrdvg3SBXeaz6ECVRi7pXESwKNnRNQLKZk46xy8f8QDtn6c3KUAwsr6bCFKQGDh7EB",
  "key38": "2LuUxiwZgAwAY7EvMUWKEiLdn6UpupLYvt6uyawzTR34d2XJtCKP79ubqstRsZPeo1yFSeMvancT2XRJM3t2ucmC",
  "key39": "2JqBs59TCKZ7oMZofmNJTqUQkF7yLMDPBL6pNgFsqrxwoZLejXqprD1ernrzHQxU4cjrVSLyvLjWe1FgC7Jz8Ct4",
  "key40": "5Ntvz9xzU6Z99kH5z1kRDHqTPqc1TrAVVfrPu71aj7EfsfEC6XzD6Cvz1gTy7zTkWcpsUUpjbUFyXxVwb5wM69ni",
  "key41": "1Vuqjfwc7QJL22Umncnwtjow5dybSj6NhnzWUovQXPn4s5SxFnvFV8fbH1tEgozr51WNPVWSVgpqEe9Ch1ibyDK",
  "key42": "3wXQTaToh2XjZkuCrnKuXfNjo2mGGaoqHukYvU9fGbhgKZhUa3qXTSAxgGLoX2mWUoBwf6fvVN8dXnPA3nYtRpfd",
  "key43": "vuyfUgrmBwPjKWhDdfyqtPX9pUMXjTYob5Fad8F68gVaoadzLZt2dxNhsiJDRrExmJgGFywycfg71MtwTqxqpkt",
  "key44": "nHZYvGNpiLP25g9AjQjkq6QrCVSEuq3cGwWQqzEzVJBgFiL3bt6ntYeMVwAcD4jgabSiiJMyV5aZocTdZY9vEPX",
  "key45": "TCwUgUE6UECXcnngGmeBH1SjxpTUSgMpycsjiTDMz4aPhoAgzgnG9cb5RHUQbGmPbr86EisQNcuNYswupoFs7dM",
  "key46": "2a9PrVvtWrHp1bFqWDv3abmKfAtVXaYuTowfSLpyPM8G88yVh9Pu9KBfmrpyhciGVNxB4ibpSqNJB9W8hj5YrQnr"
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
