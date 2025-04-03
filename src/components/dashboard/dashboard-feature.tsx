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
    "F4EtJFRchCyvNum5LmSqABg2xkC9zG5RUUowapCp21DjDL5HmP3ru15sAZWXMPY1pCCQjpLdsyoFyfr3u58YYyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61bUyBE6B1Db9FmePfWfKrtvcUUBk9VwqnbVV18NzTThiQRtjtWV5DFq96ad6NahYTs6p3gkYPtar9FuGuUxcg5S",
  "key1": "6WE4Gm9SkjuAVBeCiaVPjGdAeqJFcHBCX8dxdbAWwA1GUpW9hrcSpJgLxhPsZcDdak1vYFTVCB3Zvpaq8DjvAzW",
  "key2": "2m1RtgPfXd2ic3DGtErcHKJBXadJSUgoSVrpAyS6TVLxidq1pEpJXgUn6MRjkoqgysBipKffHn68HERMc53ZRVa3",
  "key3": "5XHR2CzhZP3BkX6aedT1wsaJ1EhMoBDvFCFHQHoTX9vcfdGH9N53xHSxVRQyV5EBb9FPXWMmXnyzhVwbXYHKv1TK",
  "key4": "3rXiWQNrSdne3KwQq1pp9hkrVwRGKZsw4Bfnou4rirqn35GR61qqU1eqpRrs5m78ngPMHm91qEc1FBGsRvrwEzwN",
  "key5": "fJrHDm72hccS4ix8PDjTtP46LHEjVcBFKp44SRxh8Wv8FHfG7bEzMN42LFRQPfhSqGcfSFETKEmcGNpPMukx2g2",
  "key6": "ooHHDx841L2vJNro1Mm6Si225GdekPh4q48QLBCCiVh2r9J67DCdusMkgzyn2jPFHBwXbheJhzdnczXr1cAQiuq",
  "key7": "4c2gGP4Gr4mV5F91kE4r7Cf8GRBvzU87r2qRzqcj4hjp9rVjUaXhcmEEzt3P8JKCnsVDKToVMARhYZYQFQR9wDNg",
  "key8": "KUkZNqMAPi37bJh2xTS4WVZ1L5pDFFofvrbUDYSmHtLiAHMzjeKbRzsHWW2rjp8emiS52b5DhYgPpD1SMk5bXBm",
  "key9": "47VWd1ED3aUb1M2MDNB3gdB1nir3pureWaVFbZaAiwg3DXmFNevVNKFjgiA336LSwbYwsibKYKcpR5UZN5Hwg6g1",
  "key10": "2aorPf2CojubN6mnn7AQUZxTG2Jv2UxfLBFCYXm32ktMqY8hfZhmRGrgubM49hTRNe5gRKEqG7WjKHe1LSBRreYn",
  "key11": "3pC8DHiqqnud4nDwcAoKL3RL71ratumt1JJGjfchnmooEGgwuNvmUeT7fB4BERoicQEybd5b6czxJ47VocZRY7P1",
  "key12": "57qog44xY9nueWHdYRsbCkz5pBMABsFKnbgW5ge4MfkPVu2ZA9mcn3TVtpUC8Dt6qcwBxKpD82UXWBVYh5CCi7R1",
  "key13": "5svn59WnKjLxb5i6MqctfADeL6pLbjyVeVtQkZsymG5cxQgPyXYrcVxnJ4vS9fykQ3SSYaRgTVT2dXoUvpfkERu4",
  "key14": "5dUSmrF85oLkuQ6CyA89ypWxT8rLe8SVN2aUwJpcBxfoPHVypXAX2vPfWWsJGkmtKNFHTDEoWHLmcoXF2FZvYBqk",
  "key15": "4hSBJH94msH9XrwTu19Bc217DzVnTPiyyshPsihzWnFiqF4B9ERTwiY7TCLcXcKMRUAxa6vzBHrEE6rMB1sUwhRa",
  "key16": "3CM73uvNh7u2rhPQ2eXMymGhQf2PdgcGxodZp2w5nBS3Ruoa77LLgUDgjr2QsjeDEb76Tc5MLxNWDTR16pFhqkuh",
  "key17": "2oXTvQp5PRK8zcdL8MSo8wi3jqM3D3JrCShHffpErgH79XdC5qWYfL6nZaHtPdxdkdwfGaaMQ1Gso9xpKvk7RKiJ",
  "key18": "4UxqFSqr3qiE1E8vb6AAKvrWizETJXfe8N8CzwXW3recSUwv4wucsJmLW828Miz9S4HGfVX7nZffKxLJz5Un3Pb8",
  "key19": "4DatwhZvVWEwoEWi4nkv1oYzhnpLpFddRY6ZiGCe2kXYgd8nnb3UcrJung6RKpVe79MyjYXQcKRyeh9VBNYnHXY",
  "key20": "3LBVPEb284gAJ9EZq1ER6cAphaoPdLXUxs5f5mVjZBoALtE3bpq7NaGfHM7Z9sBf43RnNBGnKCvhEwiFXRm3TXGZ",
  "key21": "2Bxs6F3EqGSJeiBQPpg6iw9R92utGN7r6M5GTRA5KHUVXHT2QvcW3wt96HSMqafxGykcWxdG8TfYNhL78i4MUHSL",
  "key22": "XwX5nUC5jAJd1VAyeZ118rAdj6wvj5vBt9X6r4D93Mg9CAk9VcDxxsnU85hqkh1M3LurvGqWwJAWzrypZmoiU76",
  "key23": "5FTEqRNaL8TRKzuh4XUZJJFzmU1Ykn9cYXCjmTPLxpqBbZsE8RsUhKKMV6BwNTD821jSkjn4smjK3sJpsPsnrTh1",
  "key24": "5kw29VFYSHGkcvWuFP1LDGeCW6UYFcuHpjxvxNu2vzbW1SLwg12DPED6pDtRe7aRVXyKYXMAwPBkCB8HEL2Dm93y",
  "key25": "3wiMFSmTnEZ1GZZNJEPrEw7ywYZFnBXNmLUNPb5qyUi4wQNvfSaus8oRVZ2CHwZoZMNtXhP8UBK8KpcpVmKyndR8",
  "key26": "5tXLQGwUfy1tnw6vQ4wEEu9j31SDdXAvfQGT11akkzmp2RqTotnCLarK8DHg2qFWKbqz8WodhZDAXjHbn44q98Vy",
  "key27": "2qvTwW35uJq9F1A7uJHs46vG1vKUdpV6UcB8zQgeix5BHEdbFHdGzrJQib4QfoVzn78hTDhi9Ar2amB3vWyZtjnR",
  "key28": "2i6nBTyK2qrJ4wEHkWN8NR7Kivzo1fpQ9GbsWkqCVfyUMrcnakuqcZs15nEZsk6XPBqqoQCdbcQU7zrZadrujZzn",
  "key29": "5Bjud9xHuVM9kXhk8Taw7xGzRirAfqi73H3aAjsrEKxDcB4yEgBPKdhogje1PrvvMLNRLsFdx5z5zXjuKtMZFUre",
  "key30": "2Va82DuwYoTq6fXCQf7iPv53spinvftX9Va4J5CP6dzBfZpjgWfAFX1fixP94apxg2Hp9HLaWedp5LVnmxrDSXTu",
  "key31": "AiwVTxyQrMRZiNhBrY8kzfdqYRatJGzJRELu2Uf3UtSkXVh4qzMrwpuDhaaEadEx41JCBShJTEhyhHmz7GSqFj3",
  "key32": "2QYRyWW1XAQzYpbAQXnK9ynNeiYisvdE3MvX6e1QfaeT4LNRStbDveseNTvkViDopsx6pXaSiu64D3g6Gqe4wfNv",
  "key33": "3UGXa7nXJ77xDas8tFNCzVNp8FmmWoxZznqqnj5NzVxw2yFQpgtV3LmZ75SDc3m4LE5F2YSXGZpbtVyd8RsEkwfs",
  "key34": "2uoREacuLYQvQVcWPuKFRFpehfBNjdzsMhJhiRpyTtY8xFGS3oitkTbnWrFfLLr7qQwGVcJyNUuKSGwaNCQLpHN2",
  "key35": "52VjNeFnnFkExrfXoyGMh7at7CJKhR8Gx9J2V61Ns49WQWW65DpjmKQKVahRNjYJcPKms4WYusBPEwwSsNv31u3f",
  "key36": "2XHDUiXt2bx7vupQDkf9HwvLvw8YEWq1Stj5TJSVLR1yk9T1MAuGGFnCWnTqopTGVjq7XFF2ViiDUiG1fDSRFzKG",
  "key37": "3Q9Ck2vUXVeHvCGYZFQqFhnn8DEeko9C55rihzYQ76YsE6F4dx3jSUvEhjmpqXAQUGy8cKxnqEhqjHMbNcPbcbKj",
  "key38": "4oHchWoAiTgWK3s4bqcdAk6oY7Jmzz5DjSjK59Tg7s7jrNBobwQ15CzsF2RJgFF7bVb9587exqsQKVL9idweGmDS",
  "key39": "4UpvTReZAq7tXPedEsESdF1G1chP3feZ2t9yUGs1joQmgWQSuEruHfGPNwvfdJ1Zhkj7W9tKPNERouJEpJ9kXAFB",
  "key40": "5ugD67ThHMAdCFKuqcYSNJsH8nkTLDVF2TqZbcQ7N96gRLW1aWREoUgjGHzgSHvT9Tpf7yzDLkhbmvm21LguKDLr",
  "key41": "2Hci5Rc11VJaWV8ocqCUaTPoCVGHQBqWVAmKeEWgGMK8jMyMXqbkjBSiLCCrUs5K5E51ynfBw6pjvFigzW9uW8UL",
  "key42": "2ZES5ifhtpbxGS9UxjG8Kv5WnRVnmgYXNTwYHNPcbxKawvQ3ZvMsZPC5ANhZady2xrPLC8RwNxxp2cttx544sPR7",
  "key43": "3YbBSz7YwGHAu6ThwaALU4uGddw9bw4egn7xpKnZKNqkxy8tVfk8q2DTjc6RBuUvuFUbjMwhJEHcZ16qpQytAsbS",
  "key44": "472DAqP9w4UjYFFTWAQhzAQbHnGynqoDz3DoULCy5LxRumM9FcFYdn8XueAnHCrCcW2W1CU3ACkgPz7xRxjpY8FK",
  "key45": "2XiTsrSTatUAmcqxuYN1PAENgmriL2Z1gCiEg9nhDJEcpYGNE9KwmrcmDEqzoNLvYAz2rP32KRu1HQLPc4kMYmUx"
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
