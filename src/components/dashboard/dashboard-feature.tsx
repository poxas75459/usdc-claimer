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
    "3NqewgJYdtYib39VV94vXyPvubMSPLuA18Ajm7XvrDCkYqyM3H2L3rtubW3qaT34pm7bftT9Y6DjwYE1yC2dtvyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xgzCFVDSzStrmGvrAh8ajqoyjrhGa1naWDF9ah7YYunTg4jtzcVFmcsK4NaBD9mVvqgKKQXqmMd59kKywjpMyKm",
  "key1": "2KJ6mzqRM6ek5e5JKh35YLLy2gsY8JMMAnTg2Ms66wmeciYsJdqZJH78jSzBPxxc5Ar8cBYUaNVbch3i5QXbuSET",
  "key2": "4jcePrtfCF7mUj5GEqDurSvGRJ4TGnFYL2WL4oSXWALx1pLsPrb83bAVArWJ7qBTumR3F2k1xgLkaXPVdtimbZTV",
  "key3": "4L8vboJM7MLX9S5LL3cNBCc2WwhAoEHXTfRQnhZpMwgRS8EhaDHUXkcDXoq1RM9JnU6nUzaN5ETWUtWiuJi2Po8c",
  "key4": "2KcwsrHFBUjSzmcguBqfpeKXFaU9rY4xo3WtfEKrSiAqx9WvF2R1QDM7GXF9zzprn7bjVAr3XgVA2oV2GoHJ3EWe",
  "key5": "63y66Es3BKGi6NyC587NXkWQKPCRDisVDKbXCikermdpkC1FbbDTDNNCAooAJVmSH2HSFWu9fBxs4zLLNodzcz3W",
  "key6": "5xsfYmdYnhs5YTzNHacUMBFzRVwg57e756uGKC6MCasKMXi3Ypbmb29QqjsRE2wkAhu7WrUsbzzqEcuBWALfEaSa",
  "key7": "q5xaVKLudqvnaLLUN7yV2CVb7WXQ52iqmceChpZGAYCow9qi2ckiQKTJpmwNwUXeBfi74soDVsq2JDWTQKsKmyk",
  "key8": "2CQPpqEpmqCytXkkcB5rjgaKEo2eFZGMBKnHRbkXx8zmQnZgeV3zzV2aww6e6JZsi8DVq4z4Q5N63ewCuv1A2h6A",
  "key9": "2H2syjiJ2vnFNNgxaah3MeCNBU2MMCnLuKMJHFZLH5h1hEw8Nc5M57Gt9F9T7T5gUBWLG4mQvGDD6XEa8ubNBD3a",
  "key10": "2FpzeRRu2St19o3SkxQ2kDZwBPwbzLipsGagcG6HP3NQwcaPZ1mpCzjgEbAyCfVEZmtsXn9rLeM48SnRkYzWHvSj",
  "key11": "CHzpe5CYm5rWjkKZDaMY1LemcJkWjwWhmhzKx1EQMEcSj3sLKQYvPbrUK17VswiEvo1PPxXSHaGTjVDN7T9W7Vu",
  "key12": "3XzLbCN4KhwyamSCJJRj9i62rg5iPKhdrjDvrmL78wDdowTaDuHxqY5M8m6AT3HzQtNFNNYQiuaK2TqPfWAwF6Ce",
  "key13": "3QupP5FDGD4aykD9oJMM9Jx1fCY1NicJroN7U5RhgsLJfp67V1ALszKmuo3Y1RbDs9BPtnqmef5gMR4T2Gf38EsR",
  "key14": "39ykJXqDbJuu57K16gYYvVkxz8ujxniPkorFQtNdC288eT8VPaikMEsqe7jriwgcVk9qw8YU4X4gq26ySLrt8p7C",
  "key15": "25WkwD9YRvxXNqUiFEZEQqGhBCU4DxMk1UdtP8Ly3e66Nq38136UC3oaXTDmfNDM3BR1hxTPxKuscQGNCw9dHaqe",
  "key16": "oeB9LQDVQEmjRHfKqcK2Z9JuRUiGCAtY5CtuSWLZx5nuLLGDRGXqPmdUALr6yogxQNCo56ePDTUYCUtrxu9Abc6",
  "key17": "2WVFQg2SKdwmr5tc6CcdVmw4TNrAzDoAiCpc9kfz4hFBkzAkuNrtXaX85ERhREuz3UdcbTvQn31bZYQC9VZFxveS",
  "key18": "64A6qdXbVQMRgWcNhiBhmQGXwJ691KF9XLXVfVELNTfrrvJu4DmgLNUij1LsPbkeHPTPKCEq3eCv3bXDhdqi73ip",
  "key19": "43PGiv7SdjPGikDvuithAkCNt82rPcaocQB2aG43iLsAnAs9URHm5CwAZ5FgfiNjpNPN3GXnBftayFrEgS2h13du",
  "key20": "brLxQoQZRVzfMJhk38BQTZFd3YfKhNVqTvJtAThDyxM6NVUVGrBsEa4CARe81rbBZVuXcScMtV2m4cG2K9Hecqx",
  "key21": "5g8HHQEAGikZXHPndzbBBZTaZTFMUnA8638mwzVCaKJ1eY8sXwSSvRKdFs9HpmgwHofJArR1W3pcc5XrLjfegPKj",
  "key22": "2RwUxcQKNCSaoR9j6gbcssjmM4P2MovpvucBUrHvM8bi3saL87T2CtjwmY382WsqFG2znCGmgDsdkjH47EmC8uA2",
  "key23": "43TTuPqUgKCZcNyBRWn4CYEvgcdGuVh6iWmFBJcWQP4PnoisjfZV34pFJA7bCHRUMRuQRXZsU3zV1Gu4saAvuh7p",
  "key24": "4HfmmQMwyegcLh9G5zsztTgLhNd1ipyKqyfxKnGKeZFA2xN3sAXwA3tp4d7aYjt9PfVCHHLjD6Hi3amwVDVV25KM",
  "key25": "R1rcNqF2qunV7jbNNfTqhWQ5gfvTkoAx7KFvzT6pwQS3SfaWvEvchrErWoGDGgziqBoj7Fr3t7Gj3Z76sMEKpQV",
  "key26": "35AP6YgJNLvJ4JHqnAf9tWEjHtCS4P6PF9q1QNFKFR9SbTA5BSoivaQMaL3hxYzaNVYZy6EMLKQmVJJxRQFMKRzV",
  "key27": "zigftgCiQ2hNUL1jUqG1EiVCLZQgbM6aiEn9dW6NF7ERFQprHNbARBHuMKnivWTHqFwWJcUGmzQGvgrfwT4RE3U",
  "key28": "48Um1y91xDmKCwybrGPDUtp9LWj2tvLjsFFuVTUeVBfGomNfnyN89Ram16nkN1ks2su6X65WCtxBeTPpJEoraves",
  "key29": "226art75UrSgSn3MQVUNgXdtMvXhcCYBqXVLPBN55D3Cqi3Ncw7kD6knZSKiyYigLkwVoU2MN12T8pPWGPu9rFGw",
  "key30": "2tM34TCbgg8xATLe5PCkzCCYmantL5td7Upkjt4m2NoXqqSQvw21Z1xzCEyLA6CFZ28TVda2gciqg3EMKoyipBfV",
  "key31": "UxtuzR7mv26eur449jFecbTVvR26GntgaT5vqs5DN7RiNLwmZWR8HLEK3qKJKhG6R57jVcYBkDPqMFkcn9p3Amf",
  "key32": "29Bx2nYHp2ydu6UpRSeTJEVCZDeJVL4Y2Xtez4g1jVmhs4LuFG9Ejb2iaAPdeRTZt9YYyEC1rphzXyWaUhG499wi",
  "key33": "3ufG3xmk6p4DMxYkNZ2tzwL9yNwZB8wr96kwqTMZqHCq4rzkqCaqxXKpNKftJ6K3vCXPZGQP4HBQ2De5koy9ddbB",
  "key34": "5bGmGSSCJK8GQb8gf7ubN7RtJmLySsv7DPSKc27mU2vWAQPYntMmpUBCkuqzksovLnCfLuwqJc2w4VwesmkST2qp",
  "key35": "5y4t6fdJNyVwx3N52iEPL6hjC1t8Mf4rVXkEuJL34ugMwkWrVusRBBsp3XkToDdhUAqb7drFCbVfUwzckj6PLySt",
  "key36": "3RumVNxthVBmnWL71seNjaJBCaEF86DpBLPrY9yEAeVmonEztj3YeWsBG9wuP5KF3A4EXWCZcvfiUeTkMGLVFN6g",
  "key37": "5xdRJPB5BTfkbZbBYHAB7jg3sLejYX2zzkxUf1QJWEJzV9FPg8pYaNTBE6EyLHeM1i32vK5CQBFHq6ZRpwCqJgj4",
  "key38": "2vMFnFsEikyjjKFu2ENC3KGkCtzyQB5cJJRUMQ8dchbaYeg5VVSK7xQafactDVwpnCXUDCvz2N9bg8syHLoeLzeS",
  "key39": "2EPQzp5Qjc5TmwDDhRe8ZXJGFQ5EokzbrC95Us2XjisfqNgiwKksKmQRDVsLYN4MNUxkvbMxK9nJhTF4tBCTzB9n",
  "key40": "Mo3yzbU738BAmiTurCwdC21jFMxmFFR5zzrYWcDTrx2paVmEgiGUMocTvUYMFARBietNBFzcs2Jh7LW2VULwVSi",
  "key41": "2qqhuSuW3Kef1PK4BARMh4HxF4foim1Cv3f8eaf2nRf8fc8ftUeT2vunJevHBe5eYGwkUcfqHsp9e8RnCLF5ZG6q",
  "key42": "55mCHwDuUp5nvKS7796QzQpv5HGu9wUpXZmcP84zmccp3XPrBfw8i2Da7jKFU7ps98AURVtkSdCiT9wYAkkG3bBf",
  "key43": "vHE8npV97zMFxFGG9wM6Y3PAKaxUThhx977XRUoT8qG9ry4dScKELR4Dwsftn9bMJDmnPakjmueVLpaGMeBJUnZ",
  "key44": "4AEjH9dkuz9D92ctmWyqbFKgEH8GA3R2doTqi4uRVSXxbSojqmaDFnXw4D9zPtkRqpJ7wgo7VQjvYjFPuu7j5YEj",
  "key45": "38oywzfvUADBm2enBMSWRmh35oA5s26ftBg3g6NrxTxABtsEFHUm6KxQc75weg2SZqKYVBmXnau8fFdQgs3yJvKs",
  "key46": "b7mQ6YLUpfsTWR7B7Ua5YJPxksxsk63ctXFYbCzGzsYn4fUuPoEg2YLfH3YN6wY9HKYAevvjC2eaN1DHf4bpoLS",
  "key47": "4rbfHR1GEMXQ2M9bxLDR64Y3zmosDj6cSFnmunN4MKgXPMX8qcZUxDhg3Vr1dR7mhfab6jC6rdTpJqKnfQ9yip1C",
  "key48": "4ELXfyrcACs8G7poETJgf9P6ScpyuLLrCFTDa1yTdnTK6moJuSBc6nwFccA4tnVgcaMjWwMtnVnhhguHmuwffsgm"
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
