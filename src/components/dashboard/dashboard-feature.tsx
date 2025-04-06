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
    "4waayDiPKy8AGsoRHZXXh65m6rTkUWqggra4bzf27jeSwgLikgeKNLBarNbMLni8ZxShw5KkS44pXbGf5xJkewfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25SKr5fPEjpQVv2KyWpTGV12RD9AimuyTaCf1Gbx7TpbyRNNASnfXVUfGh6cArz9oYAqRzzXrt3yCGtJZbviACgK",
  "key1": "3okjwGyFZ3wVJe6vtVyTze7fcZSgbA5sa43RFdG9S9MkYNiVDsyWAp7vpWn9J1JHCHWmJJ57SSzfHGknvy9biKJW",
  "key2": "23vQtu2ostaZveAbyPTKvpAkYQFbwW6ww8h9XLkEfCczCeYJhJwqsmZNWZSQmESjsowW3g9fY1cggAQ78yEWywCc",
  "key3": "2MZfN3edHMerMgj7SN4cmsz6u8GoaigC1L4M4EyDphZt89buME8dJXmpuNDWpLFmw9e7r4DoyKzR3j22nfZ3DxXS",
  "key4": "2pFMrAMapGxzKvUnixNy2bJuhcmaTqTXSBd6STWgWM6nkFnzZsjbfavPQVEaVEwjcs5dkCKuqKejrdzrgNwR8mjJ",
  "key5": "6cLZJ7GNsFuXYyUSr8pm3ycNgSBV5rqFKGb3oBRai3RUfZ38ErmT9yfm445U3fAcx5yXhjHqEHT2sUxQbpenaeK",
  "key6": "CD3DkxTrQGGtSeENFtNVdbEAUBjvoKT8Vej2VHEcrLf3jf529oExfxYMxWjjP9JmMQyuKUgg6uDCSkMxn7mUTiB",
  "key7": "44vF73bsHYvHKRKRjg1uyKHEuCxDkZYwzuJfRUohtvCPGN3iMioJPCXmmsX5WokaHUeovLbvMBUM9J9qFAdNj1JF",
  "key8": "4yoDs473djaNiDp6BBBvoYkKnGna2ukQPZCzyMTwX1Mi3NdbtAe9Zwkumf4Jy1zEKnBfG4n5KWCYLDZxxLkq1TxA",
  "key9": "WAz1nkm4Nz4rg9AZUvutdFbYyDSbpn18aYL5Gns9ckwszPmS4Y4iWe8PhJTJVtHWk2mxsTJVSbtfRFufYez57TA",
  "key10": "3Fdik66xAqTgN2wJyvtAQgacUM8ezSF1q7NNP6U7vSaEhTa5capPiK6KGaYkGd4mwEsS5iFtJJgbxBzhLDX7cFcT",
  "key11": "3SDHyWAUpod2SKWJwK8HfoxDeFRdtthpjuMCM9pkZJqfZ75tcm1ZM9jidC2gcpjTP5qv9GrjHVACTZA3ZEWXzU7N",
  "key12": "5AcJwR2Meh8Ukso27BiC1etKtsFuBLhTDGYDLaXXQu3kMAEGZSQmF3Pevb8gSuRiLNCzMaVCu9c6ZgNQmktykb8G",
  "key13": "3EGeTCz6Xz3PiTzxHqR4K9JP1L8GLoYvufJFLPgveXcergV1nnTPz7x8hz4G16gdnyuH7DsoPpzt2N6hYgTvtWVz",
  "key14": "KAWRHoWNPudN6ueU5vq9bL5ShTSPML44sWNRbo2LbWZryRurHwV9WYdcoiFMRrQ34VRqpFBoGpo2kKsGkYa69XM",
  "key15": "5MfTvNbkraZ9v7W38YuJ3GzmSq3QuAV6sLvyEXq2eGNGQMCFoXSc664bsLXYiZCghFLwgoSdMgBBE1KDd1rBuGzD",
  "key16": "u6Pw9mhe2JisqSSjfL9ujk73Yap8cPE7thWZAGfJvinYnQuN7EotNK3VELxvnBGkhUorEzo4DHoU55cQV5ucZy8",
  "key17": "g41i7ZuviJi4JAgBEg8kKoG6uqKgnRHv28wejNbw5Sk275jC5EPLSr8w5oL9HKvDwyZknM1rkBvm7BN52fDmNot",
  "key18": "5aqLpf9kARAJKazo5U822M3w7kQsCX997UZCQfTdyEm6iwmYc8tuKV2k8qv1gdCGiBrtbgFs6v6FPdZUfvMM7QUW",
  "key19": "2fCBp1sGMTSKdxk86pKP93T4rky9zVMusfbN27mTB7TdAsnFb5KDwjD2MSwHwHMLkNAnuxjWziZRGHsPcLqbTBZe",
  "key20": "242GGeHt9qL3Ht7qLjtRCDEEuJbVLuRnRmGdyF1rwoi1UPjbrpqa5CbxTnPsNULBD7E4mT5ryqFhJgMico9Goqw9",
  "key21": "37DTbY8DpPKh611SkUPjnGuJB97pU8Z5tKibNHrw1osoZ1QtUmomHJZuysaw6qRU6Y9oZLr7kAA1DG6qR8HHhB5h",
  "key22": "3gJyetbH92ezsHetKnjng5t7voDYgn5r4TCWyNgXC6rr941fe9kfJTQjEDQkWAMABbR9Tzfs179JnunXR47BCEup",
  "key23": "RHHPApuALxiGz13v3LrfdLQ6cBr562eHCNGLFUp7onaFVvJQDhKr621MUT3H9dcrw8XsiaT5xVGg7poKHJZQYYP",
  "key24": "3rU3aUG7Ajn9c2ufwDPgqGv44fz1GfwZoN6jyxmmrMms6eaPrm9cMLHSTRNGSHfNt5GeJEHYrHXgZikzzJDNmwkZ",
  "key25": "SqykZjoBEspeN3DoaZJrWJXvxQ6HzFwiKdTDvMbiZfMXC9aLsJZNJXak7a41Z2Jb3uMPDZWEQmEzUqVA2pQvw9Z",
  "key26": "2KzPhkJn3HFo3DQ7cE3uvhSEjmAnqiqEm55JsDmyTULioNXsuwXqBEfYE9oziayJBdWy5QSqSTJsn7WqgbR7HsGi",
  "key27": "2Mk2bTHYqAvUPNMweLScuSfUDfk86XUkpQMXYHrYrQAJPRBKPCEhTp9zP32Gt8cpLXa8DZJsgpFRYeNDWvaa654j",
  "key28": "5wgLrZHooYNdKLnWjU7TqBz4s7UC6Yi6Y3YSQri9nGwQWZ9Wp29KQECaYQ5CSk74f59KLrh1BAEQb5GSgb8yrsrX",
  "key29": "i7NLTUABX7VuUKVbLTz8CibJriSE2ywhePFjqYCDBaQbzDR8hRP27E1wZXVHNqgw1eykRQXiCik1bnrqbvucTu3",
  "key30": "41cVuZJ6RCVTEM2JSA8dhbxeisQBy3Xe93J9KajdH6vTeXC9bouK9U9UNCoBM59GaU2qfenq6caLkGP5pFtNDRCT",
  "key31": "57V6herCzLWGB68atmqxzbGwEHTvEZQVJFbb9fBmVWXkScQidU1nd17beJvBbgdM961Br1JygdxTsVjvN9x2hX5A",
  "key32": "2Krk3Kfj23pKdMFhwJxEXe742mNoprcAhVpcbQtUgqP8xe6QpuRyvV5dc9z4vyuHxD9mqBaNgGpnoBhTRTymFKfS",
  "key33": "5Zni1kz5eRY1qWtJogEdD7VDMRxf1f3gEjPRPdT9PytS9wXVjwkpF8AZ28ganBPpwBx6LfSsJTeb666DmbG5ioFR",
  "key34": "pm65xjUA1rCU3VP6zYSpcxVWFBCPrkNQXogCREXhwmyuA5LxxMpWjWcvQhp4NqenQ4ZhFbvj35x9FmDQ78U48on",
  "key35": "Zcnr9sByQuxa58gvNMfMRJxcNnWXXU3xDZtz1V57mGMDLzrmiVG2it3Qxd2D47urVkS7mpZh777LqyrZLRGksLy",
  "key36": "3Wf1tkam9drWNcjCVYMCV94GC17Hq3B8Fr6WNLkbhoqWz7rZqdBkgvNeGUVmVwtVmsWtMcG6nimzJRtVyXeMSuQS",
  "key37": "3xp6vwkBBvbEuFKpjGpfuR5NoNoHpYo8xLmRkY9HcQH1pn7qeVKLyCXwf3YY7oovffLU6kHUmxBr5PeKKj1HbYbm",
  "key38": "ByZSCShnpJcpzw6FWpmSabrnpUi2g1jRM72oDLUTsJi1LyRxph5ZhscbRe5NXQByF8dNiyMQB7Y9MNLAtzByogu",
  "key39": "4iA5N7meTrjjKJvgGmvzcGuCquhHD3zdMvzUBsVv6KY8CpmrRDTc8FXQXfcNHr4443toEJNZTnyVJFcjHy7Pgvwx",
  "key40": "3NmrGaa3syTKYaCQ6KSV564tmCw9EEjfcbjom8Qtd2HNdhgtnHCHYZGmD3YzW1jYHaBQJyUL6RjCpvSvDBQq1N4y",
  "key41": "2Wngzcf7fB9xn8QdZogZWifApF28ggPuUKqq61efd2sPSXQ8gWZCSW5EdmJ74h9SFwTao3YudDX7PfbNLpjGpxS9",
  "key42": "3KSK2GQQAtNZd7Ev78KRxZmeH1ZBdoBrnubHb4CpdkdD8jQBDibFXWVZwtGnTuBnzZfoTqX2n5p7rQTXYXzDNmhf",
  "key43": "hMtv3a9vVJz2dohKnxoJM2tKUUby3pZ9wXKhApAKZgJ5DKDVinvS4GM5BM11x3sp3jrWNb8zYabFMcZJrd86ZGY"
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
