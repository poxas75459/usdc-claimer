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
    "21piPpuGBWtruSqJbR1p7omusUPP6robG8FGf5PaKYGcj7MbxDZrdiXEAVkhi5mucjmDbZXhLtUqST72DBNbVzWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tzvRFWrTfywB2JUjHGjvTAw2kbaCGYycpx8wCfanXtNTvNNWRSXkzBHM32XbghEhdhQAtoz6eFsJVEgxu1dGgCj",
  "key1": "5oCGsnZWFWEyEBeRnkHwVMuTq6qy3BuQKxbhRJWTts1Wu4B8UEewsPkXU5KNhHaZXdsmLnU8wwp1sLD5KcKy1HTZ",
  "key2": "5Q6KqJJbTwiD2qmQEADGkZZkYa9u4qsSwTw52SThrpHbv8hnrX1gA3uwBnE6t8eTM9DzTNfo3UGUgocAGuQvfDS2",
  "key3": "2ZuD1JLmBGMoEEaq1BiRzQPpS5ZgFmERCDDD2VxDbQmrfCX72kGrWw9iqjnoog5MLKnFjsivazcxE3dxFjG1dH81",
  "key4": "2q2khaWvsueF21aA49UcMREakscwCzWFSE7zHTg63Yb8RpH2Ptx96H2nqrgMVfGaA9oCUoD1vpUNjKHCTY2sn9Gi",
  "key5": "gBUsP3EPe8mLJYiUyBud5CxMAAae4HjNVY9bvJrWnuVEWvV8wDag9Qd9Wh4di1kcGQEo387EqNxjujRopaEtJAm",
  "key6": "BogxigXPXcxNAyAWvjoxGoGcuHV5QN8FjehjsqvpDjfS4bHFpqe2zUyvSUtEjDaX197hbyAL6BNxC4efG87NtGN",
  "key7": "5yajeTZZARbiTJJUXHiPzqrMeHDtrvVx2NQkPfpaE1BtasjvompdM1zoTNuhXgKPWewqAGoZCCnCzx2Y2XjZ52Du",
  "key8": "4MjVpHbuaNXLtVqA6m4bxi9ix5ApgLT1FWMnPotY8FY5SkkdZzQipZvEdQGgVDNXntjo58yx3c4jHeY3RHugkmWs",
  "key9": "2P3uEAGzUGhYLFg91esBrf9FfAQVNUJJNSfNa69wJ7pEisLhUNHYvQx3wUvCQb5L1fz4rrNg97givhvVvfcd36T7",
  "key10": "36BHHKe6b5JwXRR3GDZjfSqWUCfURmKPSmzFCmNRzddyWEEdK33jiB3A7k1X9zeZ9PEnbCE9jtndTcSjLrT68hh3",
  "key11": "4JcxVe2g1rRN1pgyhkDiDahRHaZCLu3qYkPGij6rihn6ek9RamPyXoP2g3u3oFVooBKsyi16BNd6YxQnKJpPSUkp",
  "key12": "2suFkhJAGGLtURBxxUjQJEnhj24fQzysuXKJG6XL9gWiJaJnaa2oBTjbTf6rXLdNPoaP8gDdStAwu9pYtJid9gi5",
  "key13": "aiRyzVboPcC7sR7DLKXEpgvbEeuP2uDjGu2YmCkwB58kkVVeSLB8PQ4TW8aPatvKfF8oyjYVcreEcvNoxe5FBMc",
  "key14": "6hgxodvxPnDK2QkuGxXSmEKtUuNtz3Lbj5kiTe7F9pEup2ruWJEWfio7XmvnS69KSixGHuMP4JrQiYsERDrNHi9",
  "key15": "4JHUoSgAvbo8EkoDbiZpqoyMsem2QBSD3LuetrTCTG5vbQXMYFLyfspfnnAWkWi8MugvmHUfxDKiLjq73EYJM4Mg",
  "key16": "498cJR5MFpDz2cU9uNjeoeWf5ursntQ8uKGDB5Ua3n13EBinbDLuxcYtub7yHFeNYWBd7foB6G7jqHrAKbK1qYnY",
  "key17": "48Q1HZizQoUUPj8U8Ceux96xPaGWwSuGK7VSmVrrc2xhesgRrJk4e6t1wdWeWX4WSFKhJmqfCzrDsPekAHtswr59",
  "key18": "4uTXAAPPznz1Wv1dCNzjZfocfad6JmjK5W8zVUrzZc24jJLREi17FeCnhQNsUdrZuKsD4mykqMtkPzm4dhdAMAQc",
  "key19": "2jdRWGJLPDzJ2hfUUMA4VU4NAXBB3hbBvMAZNjqx1z17Pr82PXpGBfifGCcZdYdQ9U9tVgPza7WFoiK3k3je5uPe",
  "key20": "2HE4UYw72GkkMiGzHD98h1EV6ewdAjJTctBnYiLrQoVfCKRV1ZUcvvh43mjzfGcVBuGXM8UQp9zgwptedg5UBkb9",
  "key21": "4XrVhXzDbWhJbNcX4haUN9qK3irdMJ5t4x14SZvsnhXw2YEL3RHbnFPjH9gEhYbjKbGhArBvTiAmMPPvM8MK8qrF",
  "key22": "g4d9N8uMTT1uujP4JzShw4CX2fojw12PZkXD34oBa7vWgJPsGQiq2qdPCC57vxdFmnwTGkhwzb2XiDMeiSz4pat",
  "key23": "47EpEb3yjrdg6Z77pjnAFmsYEL6rSdGWTMy6L468ZNdv7aQWjVKWZDvNbjzX5idpVG6yF2PpCRWNUMRjLFuqa9Ma",
  "key24": "4itnDC2rT29gRVzADRT3q6y6xcR1Xn9D72FzjB1CgswoeMye3oLWVeTiMt5U97EAYd57UjQmBSfZnmpsNhzQxDH",
  "key25": "5vqa5Xo5Bdgf9kqAqXUir3mMB8wgKV9gggo8HqEboXC8xAEREEMxdZSmhVMbcTsDYApaYuDWcDgp7zzxuLDsFo4d",
  "key26": "3pFqqhfshL7AMkpAur8vLtRe4MaTfpzTjLBZdU9ZmngGnU86Bbuqk4exx5SgfRVL5ftnAqUMADdD4zZdnWo6qEH4",
  "key27": "2RiGMdQjm4iga4LfgrQuikcd83tAXmqGeB3rvDWW3DqV6Mxga2kWCPBUETE9oiiT6KDeYNEmGKfBq9GoeMYcvirh",
  "key28": "3fygJFosGqCU8LyBTxLGNJSo6PVA5N2ooLdQAMB92XaNJ32j2hsJGZfFymg1qJpxi4ADAmzixugc94PHLxCtG7BX",
  "key29": "PUC9WBN9C6DXMQwcQasaggf5R4mWhKTxWQ1exLcNkPpatcPV1FDituByyxe4efAtB8pF4qt18KNSTNen99DMw9y",
  "key30": "4d1sqG2W5DJzvJg69Z84g6CweyUX5B1A6pg6Qb4ebFw7dRHxxEJPuLpKFDpU7SuEvMLHckEfJumGBVxkxx3ouKj",
  "key31": "a77UkmiVSwpvHnLAao2MeFT53wT9dHDwtTFe5WKhn8Ab7XFz7nbavvweWPpmkMw5L2cWMXDM6TYBLtLvHTrwEC2",
  "key32": "F2dSEfsxhcq9sg3cKfy4Q7p4kWjdHFh7vxVHXE1stQVcd5gbxiGXVtb8pu5Br8ifqKgARQVweUxYHPHSfAa8FWe",
  "key33": "2FZzyEBq5D5rAsYruicErWsDkUFXqJ85XkiXx9Z1erTssf7K299JdfgGgcP5urzMFHeegREieoYuTHefSCv42MTm",
  "key34": "kHeJcxDv847jxUAzdEMYuGzAKMPXGPBFieFcdoq39WnE4dMimY9ZMUJXmXcMavcPhY1gqGVYCwEv8PbR6cwnmsQ",
  "key35": "2XwTReeuyQHso2gztUdkrbUqiboGaKWyXQp1FetPLGwipY9waRoVWecWBLpX3A7aLBS6v6ikKGuFsTv2LKAkpu5e",
  "key36": "3irSWfyo3MVM1BWKtskgCvgBZD9DZZ7P39d7pPPsJz57AXac9hvYfQW3NT2khRBBahSibztupEvKsLHcoPFWkUuq",
  "key37": "M5xuF2qPsAfvHpdd6fjTvTz8WnsZN4P5yUuWrmMPnT4NSrcHcNGBnYiWy2gFX2DATyJAvjz92Yvm24s9uAor67K",
  "key38": "2Agw22RGWQZjmqqzixLuG8K6LcvhaNFoUZ6emXhbHB2bNnNDRCx2cCRFAPwU8k1SLoSwfJmKbobvj8B1xykq9g28",
  "key39": "3AZAF4rBQjrcj9Zi4ExdTP4WwYvA54P13aoHUNcYvSq46DdKxk59jHRGxDNMweVgBohMuidmHJLxLsb6PnFvoK9R"
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
