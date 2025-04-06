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
    "4XDZi4XLByAfHBsotiMYYjRsyeBywCqoBK738RsbfDtQSE8voFAC6vfBZezxt9r8p7wMhYRuTfDgP836hEoAaGgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cATjQUTJQNDXg9bFHgksYHHpPJz6cm1zWYwnhNkV1bFo8fRxaZr2qBtA4qcGFYDx4ywEn5oeuyiZSchFym1hhK2",
  "key1": "4XHswGvkh6WGUf7jyLGz3ePH6fYPijPfsdmVgXgBBW5DC89P4LkhAARFvdudsMYShsFPbdN8D5GcigkSXszPguA4",
  "key2": "4LVZJU9wYfFUM5qX2xyQDh4PhksJ7sUAnZzjNSmQ6xKfRb7q3DfGsyo6PCqFtfoiGPYAs1vhiRfsXY5rkeUKnH5S",
  "key3": "2TkQYu3gYk5Yik8ASaC2sQ43E7Qea4hZo4F7gmJmw1KthPvKFi2Jt4hQf2MwvkYaq5REnTF2vd8fEwG9MaFTS3G3",
  "key4": "487UnniNhFxyAY8xe5FMX4cRDENLtAXuHRfDUTLK1fZXhmwM3bz6bv7z1rwNoNNTAEcJgimBDsaLEqDop6FAodsJ",
  "key5": "3893C4YkMZsrKSevwGqpoiSkuzxH96bHoeHpdqDj1uCUpG4NFiu3SmgB8GYkAfcwLZb7xUsD69qiNMgnFDvb2Xj6",
  "key6": "3Wm4gNpzRCb1nVXcAVQvZ1sECBbudcYev97aDJcK3tzhgQcxqe2ephzkgo9PQhUd2hNTmBHEWb3uUQfUod3qQyqP",
  "key7": "2pFYFp9spRwPNcAdPdgzQUE9JUvMb5dDteM4NoiQPkwDR6SQYpYayKKPtMqj7A6QVMaa7LXZN7f9upGuWfkzyzv7",
  "key8": "3DqcBsnqn64uhkrFTajE7H5wmsEaxg8afWJnB86hcKXAk9jm5Wa8pFNnj47kgdaevuGJxei4t9KibW3qJqEKtenx",
  "key9": "3Np52cEmUbqgnVovHj4b4KmysxEqoJZfrL3dofUJsvF1fKKwV7EAEcmt5PFRBmghqjEpxadMpHgzuaGj9kwWgN4G",
  "key10": "4x1nqeUCqPp7xHFSbcpacRwdFHpusvr7UtQKbdwqgR856oiVduheNXBtY11JULc5ZuP6gaKsm6PSrC6ck1fwxgo8",
  "key11": "5LK5UfjM5riGtrz266RydU1yPX99oDyWAAf4z37pNYNteaKMGvmGs3Er1SQNw1wLVHiXN5Z65zQLJ39iKkjWNw2u",
  "key12": "5fXAi7pP4Doa77AugzmC13QHRcapa96hULTGSUvGBWXUUsoUisNEzbSEFk732RR3iM1TTKHuzWjwBLv9L8vf9Ns4",
  "key13": "5SA3FKmPkCbunkYcbgc6QTmsUUifveQp1MWZwCwfkychC7q4rTv2iWNtv4aLDbRfWKZvqnsX2zFwKpVKx2VPRGac",
  "key14": "5TmP5t8Zh4nyDXFteyLBDuHCR2zk33EwGCEBvb6nVjcFShiuc5ayBEXfkinDxK5TiyYibrRUfvhmSsffKgR7yM25",
  "key15": "Ud1DSHGdy5sE4SVkej1QbVZZkvNpeep3UnCMs3Ep6xVvPT2spUz3ehRaYdfj5hLyKRi1DqM7Y9xf3st52CqHjQe",
  "key16": "36MTiGCr33vmDgV4RqNspzpep1NC5KpVLEhyjzCfrD1tk4wnRgUFC9co6qehVSCXzZqLQgrC3UAnHY15NqT5tvJS",
  "key17": "5VCJba9PMCLktK8RXCPtuKPaKu7L7U8AJYR7fjKAWKbcqEeCaVg4STWpTERT7qzSoogM4KL8ZoeATQDMbigUDbaF",
  "key18": "2MEQqGRRaGNqjfUPmLNntCatL8su6dNh3EWGhE9FfTP4ohwwAzz2duyUKyCruXzkeG8qUuLG6SmhogkjReffVvcy",
  "key19": "27p6ipYih2njtj8n9AWyXQJ73aQzGa4sJoFiUFjok7BzYWS5CQnhoNB76fowWPq9Dt3CSvDMJo79RS9m1Z8sQYkY",
  "key20": "4MU9WGyjDbgHReStjfoZwZ4FxKkYPQ6jxrYDFGYawYtq3bwKgNWCdCDFwCU2XTjCT66iATnr2BZrYSL8dpimDyz6",
  "key21": "2t1FWgTwvYKAJ6VDnMRXvcBS1sPjMYsUxANyRAy8mrCjuDoQuDZ2Mt4Hz5x3vcPwCGCCYvXYcsrqBegzFxYMTKLp",
  "key22": "eehLJ4PL9eJCh8CUfYozxdmEhn2g9QRLDkQzndYU97RdsfrBemZVd8qV5QMnS8inwJ9GzauB2inae8QfUeGzY7f",
  "key23": "4TR9qp3J15CXTmxaAiaC4SzvDVqm9xLLKzVn5BLWUtLDkVG2ScaQLQtwNHcZDE8fPyvZuLuiEWg3oDLytwqeScZ4",
  "key24": "4Jg7nWk7dEgGzJBcYLxSecGcNXM4PqapYzMW4HV1bn6nhPNbx75QTB26o6sojHG9XN5sEk8NXVDgjd2nQxcC49Ai",
  "key25": "2C5gRiGEXN4VmKmtaHoaA6ehffbYnwBvTcErACyiNMUBUL6Rng1yYBpYZwdpr6sV8bDmMfJL5nbQ1xCGAMGZLyQv",
  "key26": "tXQvHiXQg5iAa4JpqWbkDAQiUxD9XxainUm9BUyutenPKZMnLeRyi4VoBuwRbGn1BqeNnNzVM43ye56LgTSp63T",
  "key27": "2dRSEgtmu9LKSyv7vTVbc4a4tdkZTUC6wK5UvT7ubAzdST2fTpVtwyaVxLi8nQTVAWtwvqdXjMSohnsc8k6mBi8P",
  "key28": "2gVKGACPRXPc6YTNUG2JAVXL1KJgygXKkP94qMhY61ER2DdVZ95NsvmxqRFXimgaKkThkUBxeuhkAETneu5GzbCe",
  "key29": "1aoSMCV3qCQUA8KeB1Tj3dTgBeNJEcV2zMzsQUj3fAbTsXQpKVsRD4V9SPaNAfBtZGpVxRysBDKN5g8bXRWUDTr",
  "key30": "5WsWRRk7ZBc2hb1NDuCMvuy8LEuWHK1XKvCZEKnFmdNWn64GoyohgNFWpDWT1sM6Me6TtQzMzgZuHFYYWRZqo9pS",
  "key31": "dq4QmDR5zTw7hB1d47ZndVGWKfW4WL7xg3FeErHVrvCLySM2ScG3xnRJKaduFGNisQ9WbWegkr4ocaNodvWAvad",
  "key32": "3Qa2xCJC1R2Bde4sxjVMVap548EXyo2UqJ32yf1D8vPRH41Ta4XMq66NLdKYiVD7HD8T5umHRvEueevv3RdYXWK3",
  "key33": "5r6T1aoCcF99zouwtfideNUSmGfCzjNj75DdH7YQyEizLgZh16Ckb4gHdMLTCh45tyadj2rpHoFzdBDZJQWYX7WB",
  "key34": "3z7eVWRBVmnkXGoQwUU4jDHMS7PNGgshJ3DggJvGeejwscktseCE1d8uPMcCuCz4a7xs8nhFzrTf7tpQHpJPk3yR",
  "key35": "5dbtBvY7frMV6qh36FN4ibemwbnv6QJcYW2oFRmvcY2CEJ3HDiLb1FCKFZohaLWSEQACYMHuPnfiKTeW3StUBCqy",
  "key36": "4B7C2qMpoPBsbgHDyE1Fhy5pvdHzqbY1HYsrfNcTUkrtbRU2kM52GjCWukgZg4PvKt1yuyaNAM2kBiWquemSJHNt",
  "key37": "5zmfjSAwvW7v6Nog8qiNLXwVeNTCASXaia97W1WPR2tHETaohG6SndjGcPKihqpbg5UGtmtK2g2MHE2TMvSgSTne",
  "key38": "26QfTx5TAFDWRhkeF9CYdpwSEYAx7mNFK4E8qhzGcujKso6Y5Ej2btzx1NK5QxtsJrZTrG3UrMwWEwLfKSWRMocp",
  "key39": "2kLgS1QrwMGH3BV8FeSfJkoQkdFHwbFggaJ9Hgi3WKhCevxymxiLhr3GZ8QHuF72itxsWa1rEgmUDYemN85nETgh",
  "key40": "65XTaBU67UjqC1iC2xKR3xCHhd4NNJL6DpXnqe36TmChdRFCJmToeFyee1q6xDU597iPZFwfuKD4MEMnXwMQ88LJ",
  "key41": "5oRMkWS9tvt8AdeYT27g5NkDtaXFxDzFxJ6K97gTqhGb6nEtxqHExumRRYGdB7bivN2ckj4yqQfuZgcegKBkXxmD",
  "key42": "2aBaKQJ6VsdQwRvCLZ1gYF9oKoZqKaYfgcrxd9Ve7oMDUs2D1naXT7tAmMKo8PTGQ9T2XzrocB76vyJDGPHFZQ7C",
  "key43": "3bLRQXxXND9U4wuZzCn8UPk2jBDzoHhoNyjVPPpJg1yqfKrwzPJSAX6Ht33nrSPqn5pn8QXZXJYAziLZFtL9sgWP",
  "key44": "5ebpnZLenkBCxNztVN8eWzuqMX1WWqoVyyFmb81wykFwXfwYqNcgTEyM4S7HM5w1pcWxLv5JqX3eSRGQ72VjDDnE",
  "key45": "2hmkzY9DC6Rqk9A2bnxtBNznE8gHTwdTTbpYvmFyjNYume8BEH7RobhawLxv5ULCtzptKDRUb3QKPEQCwUeJ1iHh",
  "key46": "5qs6gLBosV95h7AP3wxLJydQDnT8RdHyQf9wjkuDafZfUxQcBnNmj8rTEAGbrMQVCukSUVNieMsRW6ww8RvbJdon",
  "key47": "3EMexrDg5AeudUN9xqiTucGovqAScX9WnoB9arHiFV7kw1Th5Rxm63FayAfV725jgFjh6LtLNYPhHFSp2AZKa7Uy"
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
