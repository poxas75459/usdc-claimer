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
    "2HXtiT8TH5g4EfqTwBSKY3MQXDzofWwa5o6rZRM5jboVDtjDjPZC7yWkeSQTqgDZHJQNNhAMuq3iGewZ3pWSEnoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x8iBke6x5cpntJZmcBA3mvGWCE5f5EjVpNCycffZLndPnokQUEgFi4jS8r5x38n74oHPEAucrsLGeDTLxdZprhm",
  "key1": "5bByjcp4yVE7YS5yWntTAffumTk3XTXN1tFDWUfJ6L6bjCFjHvC4z1Ln4fn1gi47Dir9PJjehGigsGgfgvBUrFUE",
  "key2": "2R1izuhELxJQq2YfQFz7eCSM9dJA4YcUaq3Bo4DRJy8y1EZc7eQfJFU5TnJ124PvZbE7JNryXuyJA4HtNi33eRn3",
  "key3": "4zxnWsuTanvpPK6VE1PNg5MLTDc61Q1Ge5xuDVEisKCgJu3TMJ7YrLmVuBTpFYiaB47VMVjKLMVyUZGi37q33kks",
  "key4": "YD6718sAJNn2zsjKnAggKaT2QmaE8bawYkUMyDMKmQ5SX7cXzYJhto2Yt6XRXeEngDiga1hgr6sBP8WCh6kd9K3",
  "key5": "3m6ewGvzGaZVvoUyWmauVQmejzievewjDSD9m43AUfiLHouNyLe4muNkK1dNBsFK2otEwtaJMdGNf72k4fynD5cx",
  "key6": "39FphX4MJQ1YMQ4xTsmas4UeNFgeiRhA1PzxmtUboGHcRDwyVi53RjfMDKsDRdNnRskXZzg6jxwGJP1LFuz8P4TG",
  "key7": "5qx1FVnJmYTKw7z9dkNTkToSv2oCZU8YcNyHh87sZkbAhZs11iHtzx59bysgqrb1r8j2ZN79Uq9ud2kA43fuPnoX",
  "key8": "2dD2PjBjEaVTew9ttBpDuckrEWSfCPtEDqKBXwYpjw9qZbeQJqKHzSTH8f7DUtJVqaDQSrkiwGMvmLK4HcJehxm1",
  "key9": "5LzGan52HYqpamGpFxvkVGrxTZAAHN8GVu9gg4WU3oJzmdAUhf1PDjcPVLQZcafLWwGcEo1m7NwFTGTYoKG3DUR4",
  "key10": "kGyYrdsG14YWxi5CKgUBZy1ejf5tpWae5bKFgUZvABhX77bVooaF8625AtGDeBB5qFBTscUDWAh76Qs5ijewx1K",
  "key11": "5ubJCRzGGrBFeHXG6vzHRtnRSZRcVDsYyXzjNWzgwJfqF7a1T55uURMjZBH4CsN98xZNP7S65aaxsACZ2PdmuBeu",
  "key12": "5jHe4FFb2x9QEaytxgeAJtKrhuXYEYm9ZWfKQDLQtJHiKKiN5kHRv1pGdQuocXRmPeUded7SiMLwor2UgAxaLGsD",
  "key13": "4xdoepMNYVMLihuQwZChKKKqPAMAgKT1YzHGtbXBunwU321fXd2K96ZDiRgsXV3kXFym1zKJw2SCPQRVc4FQpPN4",
  "key14": "42yB4c9qNJ6fmYX7LpUKzuqhmd3w4tU6PVPKcKtNYcr4DynrhbNko6434KrMdet9AyxAoT4H1DrrkBafR5PtemsM",
  "key15": "2gwzDx8rxv4y4wd6dSG48dk9bvrqci6escxjJvnCEyGFbnBvGHN9KAzTsPeNZ56YmXmhEJ5kDVw7zSY5yWyD7To6",
  "key16": "35xpdqgH7g8wETaGMxFmwPqVvCFSaQHDdBCfpNjiUQZnLNCrmgowVYb2YPBoQnBSHpVUkBAPf3HRzcTL6uZtu2kj",
  "key17": "5cfBdKzHB26P6cTyNGEbmLPh1wyGA55faeFDcziL43QRtinpBMZBzPd79FcLYg6bSELFzADTszAvmFCLE8CNRU3c",
  "key18": "5i7czVVwaG5W17XRa3DfAop3tcQ2Lsb1YcTMpjrywjGekmqR2L6S5A6X2sry9At8ZL3ffe9JCBh2TqvxjAWSkm62",
  "key19": "2Mt2VhrkTZx1wQAPXFTgzkcvJQ4r6d9rGsUibM8Vzg58mHcB8HWQrAnGQSvVY25Vw511wvUCUXMfWv9mECKc1YUL",
  "key20": "5JfFnhGuZmVSU1TM7iPVbWfnAns5RQHF8kT2v9Q1wKMz3jyKriGwizq4F6Na3teRHurjkfgEWUwVVJtW4PFjbQgk",
  "key21": "x4XzNofz3xL1SbfPUYVhLMsT4UKuua16TCmEFCKGP9V95qxgxYRJeDpHLCrMuyksfaJ9dxhoa699GR8cs2vQnAj",
  "key22": "2wTc8CKzX4q8h17y1af8AXuYSLzpaLY9BQHwWi6WxNPg4SfxsY1euixiTnmGskSerWhrL9MVYEPTfdj1kZRSe4L7",
  "key23": "3EZQhsUHzHtDyyhWfQnRNbrjmEXopukinhUN9tBNVJnicDnmqLeYjYBsa65r5Tx82KDQ7HV5nbpvPXjQcdBEmDUj",
  "key24": "3JG5MubjMG7oGpCnWTvRnJJMdVDcwe8NtYj6iaUaRqWb1fsjH3KyYbCDBXYGHXkfnsjFqso4apnQs1Je9DpfcweN",
  "key25": "LtALjGybqyaPGge7kHmXK9DvPnab5cT5ds9RxJN39pd2oUG3jejC7dx9NEDuCE6fkWdezjba1q4j8WbrWUFyAzh",
  "key26": "3xx1i8yXn1NhQhEMBrRmxCgNWY38HQyExftDwxZ3bDSEVyUSSi5NSHx17W8gtkbyprkETPvakJzKy2LcnHRi3KB"
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
