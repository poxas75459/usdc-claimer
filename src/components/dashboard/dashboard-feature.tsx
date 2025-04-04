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
    "36TtoMmrmpgPAgtJhUgaLoAg9BeeA7sVieVbo36SWLAmGCv2SakqaYofBZr2XbWE1MUyTM9CFeVa3ZFamr9sFiow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eL8HbNcHPb2itLqnA9zQXP77w28uBBYjkBkbSYVRv88e9de3vMNDasDn1k7oVX29XDkwGat7kLMTZE6CTMJ5VRW",
  "key1": "4zWxa6SEQrEhb2u8agiq7aiFpPWt4euYGRm8XYkyVywubGTGGTaKc32K4NacH3SdJWBZmxxLTbReMHCebYuyECmF",
  "key2": "4qMNvwEtHmWK1GUvHs4m3KmKsGTT9bJNUDFxpeg9M1g1B3pSPVCH4GUXyeMXVH6VD4o2x8Jf2uvZbofrz29Gk3Ru",
  "key3": "25rKPiFWS7mE8jhsjVRzeXniRThnqMaDwG6k8TBy7p5hhCNt31EpRyxu6uardKNGxyqiDu193qcMdiBERLQD6J6G",
  "key4": "4iJAKLN9CFBu27ikxTtEvStZ6kCDmwEKn99DgjgfHngbBChxznN8hvGZwupHYsZGBAo8YgtXr1QAzgUQTVgZnbWD",
  "key5": "3YrRaq3JqiRQVT47wrArLFubzyJEZWfUvec7JsXP7BJRtER8VXWjSiHYoXyMRfDcKJVuz7Npx94NskBAjvyfWNEy",
  "key6": "19sc1N7CoeVeAPU6DC9PGNr87PimHj8swiG8VcUj36okMtzrLKUSYmcQfBJqAFy3Xz5eSfUGYBBWPis91zX1Gmt",
  "key7": "4PcYkvvFME3PcaeTVnHS7xgJEB93QRgU2v7hebwSVDKWB7pwcaPWWrYcU9CromQ6Xt2SvFHCYp9jaukaZDavRek3",
  "key8": "4eF3A63ftfL2Sp35SDvssBdUZutXX28EAMYN1QbM2MLFap8uC4WMCX3ygLvUVSk54e5U9BEj2quDFyw35Fpk3yPS",
  "key9": "5AbebspuDXtGYdnSBcUdYofGcaQzQHKs9GiTECuuNCaJ5z7WJ7oL4dHjM9XDTvjSk8xrY3QkZAchX6C1hNNwTsLD",
  "key10": "mNfLzJrrk2JaGQJ9Vhyd9oypDU8FZcgnHErs46a1BHijPntE9BRhV68objmEURhsdRd12MQcBnFzAfJ5mx9M3jP",
  "key11": "3o4obkqLXGMUhEXyTZXpKCtQjfkwQbftdA76WyVFPF9VcE2Rb7GSru2qgy4rL84LUkhVJ29kNbPLdQw9aghWD2vq",
  "key12": "3pCZ81Hq5J76gj4iwu2tA7k4L57FDn6bWNNrCuwM3n2JbmCVyYqewGYkYXqWJkQ89uqsBfRFGCZfn7NM9w4hKzCz",
  "key13": "3WrGGsmfpVatuVV2BEEekrLJiSi2CeCH8HLGR24zbbFcGTB2bdqCYFLgVHUR6iJuW5s3dhq5yfRgyr9fACx8Mcxt",
  "key14": "3yDGX1DHrKLEp1fxAbJuwsFJWhsAiudBEfuFjW1jDndLgFN6S22mLaDgDPkgb11gopNzfdWmUw1n2RKenAx6BDmd",
  "key15": "3kS3YNggy9Yz6Xk82fPEEfdJhk6uAza8Sbf76bkwLspSBtuXhRUr9TbnAXdbD8NaAjtEH1rWND1eW9uJdyp67Tf7",
  "key16": "4YYTgTmXiSkmhHawmE95K8kyhcQXhvTL3V1RaasuGcz8WSrJLHtwVHCcJrLTsUS9jykMRT3kECjYTReP1uD7m6fB",
  "key17": "3e58nobvcZMSLJQ6DMw4eunLw14BPEFNeqYDMyhZVooMVdVFuQNttqYi4kZh59vqUqefPSxZN1FiD232JtR7DEam",
  "key18": "4V1oA89SeRonQDmih1EWa8WKcfdT7a4Wys6nrof3Yssx4ejU2FAznvBJFKGZCAq5BDL4cinGLii6jAL9X1vNeJVS",
  "key19": "5cQKjjLTKw6AQH31FKgdqL9zKQyLK2CsCJHXsksus7ntggj3Leo66s42kdd9jVqXBMacT1koHWzE8KdEpUfcbRbm",
  "key20": "4q7Cvy5jSVtsnQu3ev1qQkDPFxRwQhBJcjzY46HDt9tww7m8tTcVttEUqLeMoxbbxfT9vAb2j3VNEkYyb4kRPdje",
  "key21": "5MVGxbxTbjXNChiST82vLkpLdtSJAkhv1DNPXX7b4RP3B93FW4WMRAcCmudCJPdqwFszPJuhKMtZZfZuKRPPivuH",
  "key22": "5ksewvGiBW8KeMoQVyvjBeCdvkH8BDDny3fQfkz4ASBTPB671Hgjs8nEYpcrX1EDU3rjh726nkbmWc2wosAeyemF",
  "key23": "5fR8ubBzHmU9xbMzFSRS8f8HCwfsu378D7eHDCmEtnkEoLMWQXrevN8hQTCLbYTAztF9mQsRHwRM2aU5D9KtL6WB",
  "key24": "4DRtKiufjBGhEuPKu76upxzTEubcZ3eJxmkAHQgAs839ZEjr4Jdo8fB84M3mRXGh5qSRDuhLX8yVEvbT7Ei4Bjij",
  "key25": "3xi6Xu7zP1Evh7Hxq8B48stRubJaXoWYWZyHbTTrVaoqeZkbonbXdTonQ1b5UsZ9QCVKwUVEEfcDNzenzuPia1Fb",
  "key26": "xKnLWoYQoEdr5Ww9bFfiyoC7dEQudUT7qeT9b39ekBuvVe7oVZu6cNXhw3VKJxAqcDu7t1x7ZVwZrmQRG52oYSh",
  "key27": "3FLwM4KmFu64CZ7K8NNYpcHx886E57fxf1rLd6MthPE1ssKDeubQJZahzCa4VvUQyX9sPbsQnuadriU7R96fCVEo",
  "key28": "2n5Ehp63fiJPpF9yEewKUGYcKSaTUdAZXatHZvQDcPf9QccxzBfp4mUL8FpGx4xKDCZy4qJonPkGdq9PwyMA1AJE",
  "key29": "4AN3qDY14swLkZgc3KWkbPJfn3UUAQSJYnbc6FDpyiydpH346hjoeyMWKMPSi4XbaB1MNKjTpnix1thHFdifNBQJ",
  "key30": "61RzpWTEMYZMsV5E7bqEMrf8Ud2KNt96DFbA6z4Xo6axnRPJwgYqExzMAi6ijQeK2pcUDBJMrHtGhNvbgK5gukEd",
  "key31": "reZCTYAh71rcXGmHxBLEL596EjhaUZQ4W5PQELUwJsrkg2UGR4MfSAiZsRfnxo6evwJjkzRzug4jP5RfznbMrTX",
  "key32": "4gGWv1hxDdamjfUkmqNyMboskVJgM2vKT2gDgXP3gTGckbxF8sKuQS3eWusa57SMwauo9ofx9HAw4Qn1ttdeL3AL",
  "key33": "3sp78sm8PnxirevqG7biB4tsMsKj3tfAN9p1VViKcNDVaL8g1pYHyBP6ZmFVsZAMDx53bYjHiBzUYyLyhntYi9Q6",
  "key34": "5DC38TFt34NdLA1KtheY6sz3bP1ifKo23ik41h5Q4kz9GZiDFZLqKf7vKRhBZpBn71ysGtnw92C4S2CUTehoukZ3",
  "key35": "4ZGPsZTauDRAUfTU4qHnPaS6xQJNRhCN6CqmscQpbKT6fuZAi36C3orttQjpmYkRup4acoz5z1mbjN47JDTMG6HN",
  "key36": "44ENq6CWqKbp6QTU7FHoakP7yKBjuarhExnHmQN25HmXyprWeRiHZTCupkxs8dEcxyZnJGwMS1FwBVzrAe6R3YVf",
  "key37": "488TJcp9uqHgDRoSVvzgWgMWgt7PJPTy8DAMbKZhm2rTUYy3ihk5emt8DSxuUxbDrqzW7gMn16aj9nX8mZgMJxiD",
  "key38": "5kHpgBdcN1dYhrpJLuNxeJiuEuRaZ9fMimWgcqGD4JgFqErHP5EuBkAapG36M1umSQE4HybHZjPGZ8A4n1vZdbJy",
  "key39": "2aGrqCDwE9KBKu8uAxNXye9w2rdNiSgoUrwWgsUX4dBpMtyGi3evn9Cs8hWTLbRnuJ7mDe7JRb19jA8t5xkKNTQ8",
  "key40": "3E7sRLcrZirYLuYJn3G3pPTFddXgCiWLS2Tt3YsUpCCFiGffg9xPjXPiVaDfcRezmgUFBGEtvWNXPgju89JihimB",
  "key41": "4RSPiGx135ZbK7x9xXNg2fiSvyoY8Gard6i2AJRTSzAzyVZ2SwfxSNL22A3HUk9hWSiAuTiFwZsFYwGneFKFEFLB",
  "key42": "2apYBMuZEDLWrDNW7AaMKEwoiwEH8cBco87Ws2Zfif1AGbyEzPjgSq1pzqNpDWc2CiGABMaXwdd3VAPTc2pWJtE4",
  "key43": "7816vi2Gfy3wsi4zzMHFs2hNVUjuNUuUVtDYu63zWqKZHvit4ANUpJtfWyfEUKMVrzmt2ydxWNG1F2DX5roWDz9",
  "key44": "2s9ob29Xw3zT3qcbfRpRZUw81C5Z9qDba2hZhnBbzoD7Y343Ldxm4NeyYrrJgJRLkbUPTuuNba2vM5Yj2Ct9FqBw",
  "key45": "4HrpR4YzBi8Xcf78sMd8EyF8WZXL36LQdVAQyK6DPup3c5kaxz1tJNURiAjvrVGMeD6PeMgqv5NZxnMi1383prvN",
  "key46": "5ULSphuAA1mnCAU5Kb4U5152usGeLkU4RBGrzbjz8fBNEKbgmBFMpH6ie9QuVSqSguziUyvjpzXYctAz7Hhv3fvi",
  "key47": "531U1HroWwyKQheLjWNuqqbWGZGN2UZqk9dK1ZZR11gwQeJGbJ7BJJWoXw8gAWJ7LD8Ld7fpgY2T45aAKzGvY9fK"
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
