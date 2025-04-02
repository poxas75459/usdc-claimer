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
    "y8RfoQnwXci94ezvCZCsuCQncaru54SqRQCvy1YpXnTMkQotuK3NJgUPSaM62d44H2J6w93tVsH8NmEmumPedfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vq4wGGJjMG4D5LncT8oLQZi42bc33gmXv4i9SM5mzHLDWhcGMRqZhJT4fkDUwDpf85rrAs4pqw5GJPrQyH2KUpU",
  "key1": "5zFanWAth7XzHDRdnxEGbM3Z6V1hMAYBJbEy8rdyruiJtWgiJLHSjDyqDfVDAqdBi66EYePsJQaSoAYhnzF81Won",
  "key2": "4W4KinAZjGwhEhf2JxTTLy9BwhwVMT7dFhJPZa55HXXXMLFBUcmATC42DfRsqSBRPBmhA3uuXUUZQudQhtPStyN2",
  "key3": "5xi1dcuDERjRZLGjWVKNkkribWXovZDZsQomCx5KqAycUYjVCzYVKfyR1iqgaV9KtTv6RwwDyvs1C9XGZrtTRvkd",
  "key4": "5LayzVERk1gEJzHxnVVsYVbn1qfwdVdkNRM5FAUs9PVJxuq1kN6HAPBwimr3JQS94SE2UF7xYNjhj7Qfw5AAu2Fm",
  "key5": "WQxotEPyHux3atJxpdbwQaVuN6VV3enkJsGDibi5h6bkXQRxGLxJUK2ZT8xKrb4Fa8kFEhLD6z1UG9in8CCBWEG",
  "key6": "35e9ViAzr27RJVCQA3Ayf5hXQZXhx266Wii2zHxbhMiUjbTpctQrS8ywKTravgvYBkxPZdSAQD7cxCkKhtAkBTQy",
  "key7": "2qjuThTiHxXgJ3oRm8MLntoEpK5iZquDztPmLFwZfRmfT9FWCgvqDQ7RZFPDL5bqEwhmq7Nzp5m4ZJhF9toBFYEp",
  "key8": "2ctnTVAo8nfX13iC63GBk1Mnw4PwSfYHug5qATTJXhsuZmaYzbRF6Y7KQ1pK9XrbqrNKKbcyccopJxapcFrHYwCL",
  "key9": "3AGF6JZnkBVAWbf4jerLBgdoCjyZtZ6tfg8uvJEyiLLQ11St1anFVBjvdcE1sMcm24P7nszSYkt3WRGQACtTeXLW",
  "key10": "3BR4id68nkUANm66Z8hhwNAjFv7uw6GjunUiR5gTpRhoiAtB3bkNiGkHURkPQmvhCEmBmTMnWi9dXEqiuHboFZuS",
  "key11": "49BDPze2MLLWo5YQpwbrjmr7g2xAXtsFqrQtjcDrZWj2MJLzMjTsMkSKdoFT6XvdaySCxMYUqK3fuio5FvTt37DN",
  "key12": "5rd6fDRpNox6YU9WSNRYmYRWhP7NWf9r6BCkA9E86NPeK6YRAPCDZugvy9Cuhq31o6yZCSeTiDtuym1hGyDmKNNa",
  "key13": "5gNGquc7shkoA5exWqBHkMr8Qyg6syazd69pTEDsiT6B92ujYzthjhPbZsRRmGC1VBKnfn417DnSYQbQApBcGBLu",
  "key14": "qvcYpCfBZ3GRS5NcYcezWaPK11M9yzVrnYYipcacNoFHqD1MAbXw8vTfF5QHwWmTrMq8qepvpHfiJQoGqpQSZoK",
  "key15": "ir6CBNiZBVP8YkLv4hPwtUsPUfb4Zh5g66NUCYqP6mTBE9L5zB5FodMxUcdBmDU3oSpTXtFWGjsw9nh7RWLr3fT",
  "key16": "4PZNQrLFsm7aLhAQ1uR9A4HdMftTrqLfoeuyEVddXfKRrNdE3bfFf5znwoAh2r5G5hatARPxxzj4zoDNfjCLncD8",
  "key17": "giTjB5gp27JFCGRM5DLqFZrFe5SaLsX4vU8831dhqCDEemmXvCnujVhvLtnPKTEP7H25ySQsLU3sg3bMV55vJry",
  "key18": "35JT2he3NWkH6N47p8zqCCg7jbmArZmXch5fWtFe1dtkhdve3VeB6hiv1rHekpkRWaRhktXPgSY7EmLw5bJTSsmp",
  "key19": "3PJTDnubjUCi4ft8p4LiziXznZaKKrr2ie2CR8J56TyhriG6DryTJwkW59eY1FqVvLg3CYPL5bUdBqz9Hrp9R3cf",
  "key20": "4KXnKUk4skje4bbf4eF3QaFf6vuuJiqyAX2YuXQzjp1jfPS5c62SMwcS6vNzuK7CyDDxGjXrx4vHXjegJ2gvC3ou",
  "key21": "56E4cGA5pwvJLmzf8tfgTU6rc4coJGnC8WyVPfkpWEVEXsvFNM3Z5gdH3fcQQnruLFUScxYTeZDdPX7Mr4msTD8o",
  "key22": "4TZuKV9c7AEBr4LxKTZGWRNEPDo4ZQdokycRhKV2rP9zHNr9WXgaMzLc6mSLV7Zuvi4FHeyD2hZ8P31JweEUXRuN",
  "key23": "3LswFWcEafc7ZcPpUkjbkhki4jBTN5sCbZ5eGd7TfA57yAkhGfnBw9A88bYBTAs57fjmXQctWdNnY5TLoD2t8mPd",
  "key24": "2GGJXThtx2SdbayVrmwmzWnsvoqiDE9vgq4bmf3iHNbT16bfLdTKYWRSEUtDXpzyQXbzZ2ayaQZezcnCFu5Mc9bW",
  "key25": "C8rDz4y4mWkDJBc4Xatzqs392W5tE5DdqXAPW3J7krmPqU9J1MvZ3hJbwVMwi3vpViybtNzWAuPJJpeCRDLiZMn",
  "key26": "3Jp52UgjvpvNT49Dqvn5Lhoa8vvPdZtRiQJ3R4A9zzhAcBHPinFAt2StoF8Hh953emZnFW8pySetMeNPiZY3Qv6b",
  "key27": "3Liwp6UqZo6365fny6yWqW7SXSYsURq8WsR5NioMkb2baqoqB4N23uU1mqmNDiUxvBGADuJ66dseiVHFCEry2DH3",
  "key28": "HamfAaA1SKAPYZZccxKfuH4Vb9RNvuonE9PBG7JbL3D27edMiBWg5SA5P4uTQHTxULxoay9HTfJwUPNF3xuG4iq",
  "key29": "4YEgv5ytMryCTGXfQdxdatf9x8MHbHhWrC9tj8UE2w1cXwXAPLkKpTPjCZXViqAstf226Criw1pjJamJJLhaBimo",
  "key30": "in2YARrREepuXyUSwTmopfysVp8aLqVyqSuQvp5thxBfBMr5SrqMpVgQAGWZX4Syan48AYtV8XhPLJQwUBSHwJX",
  "key31": "2j1Kf8ezP5xQsDAUKGobWfVK75ccA7KMd2wJS7vUYSVfuio5vmGPgipjxSCy3xieuLZ8DRZDCZEZrZmajUeGwKqq",
  "key32": "zMmVZjfxgSqhBdJ1LRpsoebnrWDQCMsY8aYniM29HWTgvVjzmoXPDwLWopwm5xbvVThj9NwjihgLBAW5Ht3CuiV",
  "key33": "3psbUxZN1vubMYyDhCQV5mtAgkXSYEgpzBaesrfMDpbwbycLtMZwwPKhoany7pjrehbqwC8btAdH4PpHzhx3MJz8",
  "key34": "5ukpzRRcB9XrdL1kQ3NuYenee4LbSodRFaoSVNF7X6rrpCVwBD3SutgjPmVAHrLcR5pVZRre7264CRy2bb6aKpmV",
  "key35": "2Vi5ue1ABgjRwyAY67xCpYAnUhTsMpfE3GGVs1N2c47gW2h2VpoGSijKN93yMEor8tt8Ydazqun61GUooVHrUYqD",
  "key36": "5XrE6BpVqK8c3q7BzkChfAqaDnmSPbV4c2Ktm1xYBjXRBW9SombZ4M5Ddi9916edTNjUYBsm5DMPWxFKZZTo2HGB",
  "key37": "5BQoSYrtGD9jd1ED9PZ4G7FKPzqe1FkkD9j7BtXpogGiqgBSrKAPxdotEuGG4TAZ7AWUPLpVXaoKqe12NKBDt1ce",
  "key38": "4UKJcbJH8ug9L1jqatpp4YWxEKJr5wHWhHdmafze7QyXaz84ibALGro8TofXnv3gvkgYv99SCS3fKuXHGdL6wjTM",
  "key39": "2qht34bamCMyeE6XkwC6EctoTyDeXSHG4W4CMZ8CzsBAL1hTSjTtVWJAJy9DMxdLuJhfEb6cVWAsV8bcwyeWSfmc",
  "key40": "5ZmK4fCMy6xrwJRDKGFAyyWjTxZxyW1d22njxqUzkU3aZkhTRA7UwG2N6D8nFL5w5TXLptpatL64SYCLbaMeJvZy",
  "key41": "4dUu7jjXoLekbSN6HTm4s26GTkwrTMvBGtf89B9U63xFLBZhjASbmdbGcwYMgtEqFMpXLoeKaz7eA4MyFoKCYz8A",
  "key42": "3FBQBi49hraWvkdM1YhhkJWygqj6LCrZ91LdznKBUjuDqDueVyy3v5SAa8SVLh3MFJ1g9nUzSBoiKQbByHzZ3oa7",
  "key43": "3GoRChahrSDeBAGcZDP3SfN8VsQjhB7UyoWSqMcftNs9KojwPnhCFMHXjCCg6aTAErf2yXF6jVkkxNwCAt5E7Tjq",
  "key44": "iums444zWkSfDDMmP63gM49CErYRVr2E1NfDBisQ4wkSZ4qcgewLSb7z8zJnwr3CRqDT6KVUuhptmXVnU3evKhG",
  "key45": "5BfwtJRHWTCgLxGtZM8r5q1QcgEFTLctQRyfgfs3c8oQfL1fcnBmaa9pgfziQnLiWZRnzd2pezQCqSSD56XN87BK",
  "key46": "5LSxwvCs5wyDuaBHxNKoPL8arR29H64tk3D9yCVBemHDgQKLbMbeij122TzzQ5SqXApvGRHm6WoPGpnCRxbAAaD5",
  "key47": "3nSrDstsv63So2fQdmWzEfVLUZvhwMgg3tae4yWyZmrWTCr7LrmovMoR5XDZpxxk8PzqVPXAS8N75dJzKzgVShT1",
  "key48": "e2TwBVM2EMryevKdDLWyvwiV8TKCaEvk11Bi1KZeGbcUNsLSmtyfeqDrety3i57yqfuwSfRZHD2oLjN4WvDu6Ly",
  "key49": "42YcvB3zFWcyZXtwSsbpYVKKENMAb73FRPaUWXkaDLtsHv9Zg12ba4nFmkvK1um46iYeNBBhQfgftb3aAdhCDaSe"
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
