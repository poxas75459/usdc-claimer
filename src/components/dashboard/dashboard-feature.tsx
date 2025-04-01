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
    "5qHkb9SS8q5rNEzkFy7QXoHWg6DNse8937jdCuFyV5pZ4ZTWsYvkFME3H2tpngxXzxnYDyFVwY6N3tXDwqX6Xv7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXu9sUZfzvMkdZvHPxVkAt7KwZMSZXbEXbyNqyRPqHjpAgcfsTf3nUKbfxtQ3sLzjo485Q5g4TbAJrsdhMgUGH3",
  "key1": "2yL2BPzJknZnDQPhRubEbN2VBEZzMnrJWnGWDoFiF1vXmEeNDssM8qMKbFjHe2ELvE8k4vEFqmvTyCN7ccrnLNHP",
  "key2": "2eDpNYssP6HW7Hqxrr6wCh5q1iFeZB4KXHiUAWbLmqHrSkRSDkjBECq55zQr2UkeBXizsFMGTnxHEosaPBVkJUY9",
  "key3": "PDGeuZsQxrcfL46Gz3pQKJwT15q5njCmSB7QZZ1aUvCyoR4T9duo26BVPJc47bfr4imh6fXee87wHAmVEwaovmF",
  "key4": "2XQZkjkV9aPtyfy2w7eKxFRKyQRPavaCLbNe4xbHsR8ZBkj8Jf53jWPZJusMm2SyaXbs6ampSs4bmFy6zhiURGJS",
  "key5": "m9DAP1UZmQwPtm1WfmFXzKBrnbirNFKNyDtTds1UX15KD1sL3TgkEy8VRGV97X44JGhTyKUrxRmxV5QhwzkmXrT",
  "key6": "3EcRJ7ASTgqFG5uoKZtisnyFnnQvFzzGJNjZ7skpVAtDpPgbMJ5raNkpFoD19fXS3ejreMBHSoidzyPshaKnm4j2",
  "key7": "475s2mjYhMF5Xp9est9Z9fJZXDrspTnTP8fQXpYxdS9ybzjZmLeASunzfPg1V7xFgFuQsaGuCmSdR4YvSnkopcQy",
  "key8": "4zmTpkhEagP9Nizkj5FdV1Q46vDwBjTYZUTLFpEAvAEv4GXHvf3DmbDvHA6s5NxcKifgtNDupVvEnCCHgpd6tcE5",
  "key9": "3T2Gxt1BM5mZURinuGPMrEne8qjJrPkGwjiiqJVvj2eru2JyMMbEXNVta44U4reTXDEKnpMmFRRR7GjFAELgPSwQ",
  "key10": "4mHxiC6Yisdis5hUoj4c6K31kMMxgxQrybi9WvXvuCmiiLwBsF23x67eeBrVJg6xfXKZaUZLq99WnchTzPGbFS4U",
  "key11": "2N2cb2LS5JredrcAr9856UWfCYkekU3GVW3Vm24uaNBN3JVDEKvjVZYt95k3EiThq6bF2MhmQptt4jFLXjFJY1br",
  "key12": "4EFnYS5SjGhCr3RCX5s8zm9w4MRtUSXkuMA8M7jYSgP5rGXFhjKxkK2ULpDigXxf1Q3MqC2qfmC9wvWJtR1baLos",
  "key13": "3R2AKS3hgNcy5vLRJzT9gacBfdvo3B4HHXYwjn5WYn922jB2Q2YzZRENmGrdADcwyQewFDaYinm5J7tyhvngLGWY",
  "key14": "4uB2FVT2tUFJ4AMjRc5LfPzF6KKbaPNV9ryrfku5v9RAYuXH6dXVRT7dVdQotNevSj2dTv3LvJgsb23HDj1nHgG",
  "key15": "2CsYg4b4wW5AfAho3faXF7yxJpPTrwiEm4V9d3vFXaTJBh8m4qRF6jLEATg5tyXxCN2pFvc3NB6jifkFHMWw4KPn",
  "key16": "3M9cpVTSJuvrwS39MC8nQuP5SXS8EWeKA1hiNsoNpoLEJPcaUsdj8m5woAwEYddb7wC2Q5WDbFjWPnJdDn6BzXtm",
  "key17": "2MUHoeg3rYWyFSu5gt1MJzpZkY3vRHt2nvpdzSp2jWjWvzqpq61oXhXEVwkcmGDSsnUDsW1N41KRoRYqF9gJdi9g",
  "key18": "4xJfgsfxwfuxy5oUS1kFMojrJ34Q2fy1AwZXQVMW75kHN5dqo1CWeuuW9nQMRs2hVTdMYuKabkBPh8beUi14edAP",
  "key19": "5NmBBuhzRbp7Ddd6dC31XQi8qwiXztEAzLHMzRqrvg9fFtj75YPPnh5x3TbqvqPmT9wLD9E7aA3by6ALMeTwJjiz",
  "key20": "4Ftja8i14RanBBa2cK8rxA3sxtz68113izqeZPjdv1o5Co5Dn3QHS1LeYf6Y5vy4bRLSiDGzDicG7GeAcqS6EHMW",
  "key21": "2y45XVVJCvP2Wo2HhDMMyo3JbQeJdoHGt3GrhXE3YehCeyfguFfw1ishR96L8krouP2DY3J2Cqej1mMU2t5UnwFj",
  "key22": "5rbzu98GejyNqv8GfbKSTNLvxdaETJDQsra5p3h8sU8qPVYfYrioLEvms7DN2WKGAMy9ZPa6R6y184mwN8Ceg4sQ",
  "key23": "2JiPvSYD3tc6WD5fKcdz4RQZUN7RVgeR5ygsiJ2GYmGqmuX4BHsntS6cncemBjrtuKy76ZHp4xQeY2vJH5yjgjZ4",
  "key24": "4D71AqHzay7TwA1JhQALJ9qcgTEUGzoNPYPgJ2TS7QvBCQRwGHaC1qrToN3QVczcbKATjgpZa9VoJfRw3f2d1xZK",
  "key25": "T6DKbL5xKw8L2sD5kQvRRxGJs9cKb1A7zA1fDvBpKCKzXrMzWyuJgZX11zi95cCev5mKi3au9paDx1g1bPFpJes",
  "key26": "5ZNYkyWwic87Bnmo5pJLXEsHNDfEGwjDWfbuN2AjW7mdpbopfxzxJSFsiJ9YJ3eXSvaEX6SDJFDAgeh5wFogtajr",
  "key27": "3c5E6mQvT1LNrBuVz2HNWobS6yQZJDbu28QL9QTGLReJT2b5akL1D8AbgWL6GNB5qhJXRLHyQHF4L1VQgcCSa8s4",
  "key28": "5mENcqPg8SpRroysDtAXrRmnWx23ajAVqTTzXqELks673AdSXqTxMsR1o8XiYinGvygUw2jGc11FUxXBrHkTdT42",
  "key29": "1g8reHPCt5gBNx1wAtCe9xutZiy7gJuBWuvJCBvaLaGyQuTFgGJ6ETQEPVGiMJ3deRaZyGTC24qB8ouBEChWHgs",
  "key30": "3sYeMUCNenRpvRYzRGbhWQqMyzuGuE1rDjtbEJG3JdxyY9fqeywDzUTKpYTqp4WXbbCopPUZKWdiceywu7F44grw",
  "key31": "3YS1cp9JGF77oj17PfQhMSLcwfwmvj499mxoYk9f53Zr2AHgZ72He5wAVK942QvnBsJpENGnw3VgNpKgegqSJks9",
  "key32": "2953wRimyGGfWHPBW5Xande8DVAecPrbuSnBN9NLFWDmTFmmeGBnCumAGxeaLU2RCZxkRhuxCLFpgufNmWAgWaCE",
  "key33": "4pHYDeZzcPL2Ax5EMBoB7yrLzDuJqM6uo8EMCCTtvhHPDcw9iwqKPppJjsrtE6nJAshbzZCHQ31y6kMkQR7UhMvd",
  "key34": "4Fi4mpqaZ6zhpWF6YWfDtuZSsoETcve8WU7uDTXYZEnUaPWzgJYfq1wBrMJ48wv8QjeAujnBkZpZvuNoGXUsLzS2",
  "key35": "j3nrTuGfqTRMB47FdgUCnVFmVkWekRtJuLLxuWs7zKE3TCZTg43uKMZHbRccsfjuYVb6Jk2Y6gbfvbBbr9evP78",
  "key36": "4mjWbnJxxd4Ssv4XcG52U5zJ1VXbezTERz8qNk5pghMKrM9gJynDH4K55RtAaLLaYf8mCFkeMiC6EwwCNxg1JaQ3",
  "key37": "N477Xzkw7auon2gtroRexSXY9EAQcErvBRxrA8ykbdDbD9Fd3sLqJGcnBKTsHEvQp8YN1DY1Wg6RjrA7uhRv8T8",
  "key38": "2b2W4Qiu6HKjPYqthbwX8RLpfhFRxiaJ9gKSjs1EtQaRUriPdhAUG74YiztHJHzjM2AoDVth3R3vPtSNcsA4bJ3A",
  "key39": "2DxzVRX46fDEPzsmdD6MRpcu4T1mwfKmCNgqKvQ7D9NW18pg2HHQoyYcuV5fPR3BEmJvgqPXohxZW23csZPcveyz",
  "key40": "5dHExeJUV5Cz28C9tcavgaAynrs1EL2pu4nxqGEkzCnA9vLTMuu3VeEyUPc4xemMkKrQThrm5bHoZzBeCR4eAdyA",
  "key41": "5TCoZwh8vZ86WZvhtH7StqAcBV1yf4xxcTbyjLqJs5CfzT65x8pdTPXKs2xtoU54mP14DtYpuHRTgY86ozZMNiu1",
  "key42": "KLGj8cNfcsgSaER4WoDw7ok4MVwLMJCmsntQbshjoaFWf2ehjFpoBxzETqJ3Dtbjf1JAYuHfhHctpUdzy5TAskY",
  "key43": "3y16bqn6mYfqFywVrvnsVg6UrMYgBEssDE5DZgUr43G25cVYXxhwJrBhKv8CELxyYkWf4Gk4qVgSuTxFmzCwfK7m",
  "key44": "27L68wzP2uxzmC3gmMQZAUunC5cQM2er6EYYNv2CaQBA9staziVYrqjTUbYGCVF4QLHoEg12kBHLTK9AP8iVTyLz",
  "key45": "gdPxthGBZokNh5h2nQSpqHMpK5m2HT8zH7BGyeB5v93XhNSRP8Z3gCHgqLKUBH4rmGHtDeY2iUG6YV5tnqzt6jp",
  "key46": "57WxDp42rcWYs1iQnSU3c1jDTPSmrgMspKgaAs6QR4tYRgR23saHomCNAovLr5Pyoknppcdcber1mv2kHdidbxJu",
  "key47": "2XQ4iMfwxXhdoaXaePdJTNTHMcjH8DLdWVU4GETDDjkDHDCknc91xWpUpVcCuDXhVEaUgL6t2V1ewi18Veemc9P3",
  "key48": "2KsS4FxV6MrwXpmz8pWpJF6T4isKEW1ye7PkimcaVZ2v14tEi9MVLq6mrY8JZjWk5A3MyfKrPkQ1hAadJLur4SXt"
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
