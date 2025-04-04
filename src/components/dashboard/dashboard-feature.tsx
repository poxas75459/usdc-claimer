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
    "R69t4hXEAYUkiW56GLrvrdCEkEXJBW6Q1t8Xysk4eowzeYQzyfGh3f89UD2tcstb6PPPsiior5auwV2MJxSd4MU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AfNa7QShrKMk9bGDLNT3fEUUPKkxpgpKqHKaHfJZUYthoJ4DrMJxUpGR5mG5rLGjNtHcPXV7kVErausCVDw86by",
  "key1": "nXy2aQ85DYVwzExCTdod9vwwAzBDQZmMBRduUupUEhUng6fxeryGZDJ5gcm5yQN8mYJ9vaJntg2ES8pVkm1v1kg",
  "key2": "4ST4xvjxYSL2ro3myS4QotHAHWGqdLqoVfaYbAJGzayFu3QGLcQMcLxyzcNn692gffpr7Rgpin9kUcrE3N4GAE9Y",
  "key3": "2AHNoqqHVWWFRrVa1vhQjbEMPiiwa2oHVqdhZKkbXouqVVjquScYb4gNPnFja2GCYRKe4f6pvhEzxuJyk3423oih",
  "key4": "5CQH35NxcuxkLQS9ghSSKYX2vUKYcYLSmdfcTcs8nnSkobKKvkU3MQc5UNCp2Q7kmksPqiSdCwvfKji7QVN6rmF2",
  "key5": "2o1UkpnK8aC1zafSuzXmLbqNwqYj1JsU59Rz4u2JqdgritDSCmt4mFLk3kZgYncRtRdEXjWFMgfjgZxBVtqRFf5X",
  "key6": "ZEEWzxDcyXDrsXUvu96m3vCphccCsrMdtdmezVKg7rRBwmhP6b1jraqK3KmdAfN16kFQMfVAgs5wtGVaHSkPmq8",
  "key7": "3GcvLrEWo54753BZzmiJgsyFAxgKHshEcngsj9FWcVLEsKpi55XdCsxR1ZUvT7KRrqc9AgQiZgA8viTbaTV53SJR",
  "key8": "35U9fwBrR3pt3VPgXaXXBZVrYy2G5fxTEh2JrnfGxDLGQs5Y9nYqcJzRBTxNhwHGUaTKGoSGuDyuByQStyebPC7u",
  "key9": "7ZYp6XyNUGJHjJsqgeDGZBW5ay1iUAPGx6dxoTR88pukTphj7jGvJVtq4Lg2LsVdnJBxZn7c9FLEUTQeE4CXJZy",
  "key10": "5FkLttoA7roNLkhBRrWjFarBj5kbm99WaHAgaVW8ryankYn3pkpfNm9Kacv5WuabaFRSCfgF5jb6vWfDq2CnywKg",
  "key11": "35GNvZpMM7tm5BC93QwN4Zd33WTrge97mbA3Zj9hgyRLczVRBnczjDbW6qzgArvYiV5vDDfGviUF3kepomFsaXuz",
  "key12": "u7bjj33e8ao7zKbUfE92WpwJUq8yB76KApMCW3DivWycLGHKNJsXP5msbiZm3ZPQXMkfJmFkVFttWhwDNGDGLMq",
  "key13": "kTPJ4An42SNLupwDsHtgUbwKTbCCwYvRVnic8bru77Cmmb8x8wXCJhhEKaJCcXwHWiqw8tPHRUrTfKN8g257eD2",
  "key14": "573qZB9eXaakt9f4LR2MzWusa3gQoY9cL1sNG5XSatjRp57ffX9XdwrHo5cJJ52FN3Q7WadwgwrdV243avjFyHGU",
  "key15": "5K1ZbkLVPdYm5A2Wv1RrwFbibpNNPk2RrSx2T2EtyzbC42JFk2Ep2iCDQm9Uwcgj8UUKrNH2tsArvsTuEzkAjZB",
  "key16": "2RG7RxZCUTRipxL89oy4oeFfwpMPVF8yKpdncGmqqc85LJQP9S9yVzF9jbcwV4acy9pvzAYaw43Ei8qvFVRCvsvy",
  "key17": "43WgGyBLpsCGZ8dqH3fH1rGppt6XrUX1YqrbHhnrncdFoTZAanL5PxusHotsdHHwzZLtjPCnBvx6ZprZwZZg5erp",
  "key18": "5EvzXdEtf2SmBmQMaGdMueGBTpz7tfu5cdmBmNqTkw6Uo7ETsQwvdfncoDgjcy548hc2TW2rwmr2mbrBZeRCEdUU",
  "key19": "2b5LiL8BnMJZwq7TyG3PNAKLdKhTdX8aNsuwocJGhVLdz1K8eTDqA7GtddDKkcvHzZbsfUcYY6DnGFbjV1mxbGb2",
  "key20": "4FGZXhBaf94zf8xDBaLjpJEYuDAubucbdxPyAu6oqPQtHeAt6Wq3cgb95zD4N6YJwX2JrT1q1YvYc58nonQvdWJ2",
  "key21": "WqHziemVEaa1BkXPfJtoznsFsYyqfCenntcyaFzbhRx6iSinWCovNwHftCAcNNBeqRFTygBFLCmk8v9mSt1jm5G",
  "key22": "tJU5rn6zjeDf89CtK3aEmmZB4Xc7v2Y8PUnVwTgPtwHD2ttgCNuGsia6aLcYUNzGhChQ7ddXfVV4E7NRoeBR6Z9",
  "key23": "9dvfnAmtNiCkU45CGLPy8ACkFi7Mg2BkmsSi8PjMnBSnk85fueViKk9k9A1geVUWxCjkANHpe5pawW3eSAXpMQL",
  "key24": "3uTiogw7fBbR8bbbz4ptCwgVtW66PQj7mQ81q6DKDKxg7f4KNQ7k9c7udx8ZvNrQUajQ9ZeXYgnT2AHrSvnafoU6",
  "key25": "5jNaEbpY39PGks9vK4STuhTfieCoKQpa9VGs6YHsihpQCZVY4PYwdxFWE5wjWcwgUMxjA64MMPgWXoqMv45EkaPi",
  "key26": "3hWRfwC3Yeu6DyqY11wPeeEPGQvnEiCPYmpM5drekRmjT8wYLGZGSpyYMFY1B7gVGdJ22K3GGpVZYHyvkX8CWMnG",
  "key27": "5kUWdis45Ary9wGQTLswJxxuEXYuamNJ5jbmKGp5kT8gAtpZ5Eryv1HGQBmxf9HDREzMaFwvtnNe4iQKdJQgZrB6",
  "key28": "5g6smtsW9nEidwYobNhAfN9cPd94Pntub7tVz5AebKXYzbpfUh13TS1BUB7krm2ikhKaCNyRiFoiUss2QBPrAPJ",
  "key29": "3T6KYVv4FfMEztmW54jW34mKW3NYt1i86oYwJhezANukmz1C7vRwKhNqP6Gsm4Bv8Lp7YqRMpheJzAC1CzfAn3Nk",
  "key30": "2ddrCFBfi63KAq61v4TtUvUGNN2QtEqm3ezVHtVf9StYVggkmSSJ65e4BqLGGmTMrhJWb9dDLZ6jqxFMC9H5BC9z",
  "key31": "55GKWPTeEL9p8qquUNHm41r2j66ef1Wr2GcSZPSxdN3MdHe9qMFxvSo8xBVoazKZS5B8aWaLzPnk3McL3oGZVrkU",
  "key32": "2BqCoVsgSaj1teaPGVwTbwb6JgoQ261D7FBqc9m8zgCcdv89mgcuEjaFGwZa3Sjz6cSnxWnAF67uvEqBtVehNcQJ"
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
