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
    "FpesRzqeQNKrkhSp7twrQDyYRtsf6ccAdzr5Hnx3iLcAcQmC5NX9Fsa1BUu6tt8CpaTtkNqaTwXt4W8yw5dJjxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YzjT38pprXRNT3CWshNcUDA4o17gbhRYiLhVw2x2XdoMBdAtmcm1Ni36uQRfnarr6z41ZReGp3dmuubNV6fKEXW",
  "key1": "4wxcPVbf3WpDUc4YimKPTfS34zAvs5jBfj4tS8qvXovy7NRqQyrUbDxXh87Jgg8VQt6dLsTxy6HN7TMwHCVcmgb9",
  "key2": "5Y774CsYGmyZSbdm5tE5e6sQoWKbq8Fv392arU74NiufZyeyPAJ5Y4oKy4Me6spex9y14whaaE5nzKRD6aQ7SWzh",
  "key3": "BRK6dfsfxZn8vLStpetwYVAufQM1PVdYkByhJPsbC4zdobRBDvEzX23b7mE49cKmi3ZJXeeXkg7uwhqfmVwAnYn",
  "key4": "3BoWSa2inX1woVqJWz3djTNtvZBR413wddmMwewMWb5QXGDpfEXCDKvKgDZ2rigBCNaCGPxB99SvXGrwnXMoMBSP",
  "key5": "zqMHVoyWXSyPDpjAA5CDxo6UPzQspfDnKHCjvSBMTg8WJgnrTb2QCP9NDUtkQnxNRvXvbQ6R8AFNwRxtDXpsJa4",
  "key6": "5ZwqKVAmwRVgGiiezMGPe1FjctESBwePC7E1ePnVaAqiYsswNXH31pZHbb6iKJ2aRdqjQPWuBTdRvRcxCzJi9srK",
  "key7": "1hHEJCTh7cj4YguahkYCWF2bVGMyHrK6Q9EkJWuJMg58cXz5a3ys3yd2bEM7j5LCoePHZmzVxhfeKrXAgD74qKh",
  "key8": "5aFW33kEgVTfDkZ1UBK83uuEeWQNaUa4VA5r7SmRvq3sFQ3aY6tye6L9JZzQorX3Mv4Fe5YW1YhAE7aJYeGMooBe",
  "key9": "4bVuwT4Sdsue3i1thR2mggJBbDH33L3oq4oFPUKrChzNsLaMdroM8m7yPdibyBAt7UBTE94EwtiL9zCHP1jRFBPw",
  "key10": "4aQzzEHrV4ZyS7vpUHMkg7ouFJpGzFQPgsbhQ8dy2rrdC3K8eyvFLhLoT6TGvJsgVoSqS2yy7wjimomknuRwqF59",
  "key11": "4Z2gq2FvMDkG4LNZhAAFqs1e61HPeGgeNPF1qHwHi5TSDGjFt2daogMN8q6p2boCefPRye7Ahi2catyXvNYT47DM",
  "key12": "4qWx4Gm8dXoTXZUuTsU3vZDShrAeXUHcvuxSNLRHujiA3dvQUGYqmyTUQALuwitXKZtZEVhkxRXV2iTQDGHvuH6R",
  "key13": "2Z15MEJ6M9qiQ6AtasxC9hRYJkr8CN4cS95q3QKvUbenygbxo42qF2fSSrNAUX686MYY2y3EqGUWYsBmv7xncviU",
  "key14": "4NJoJJBBGWThXKeJiep3mPSN95vr5s7gPgsqtbWtz8L28tgJauJLuw18s2qZj6kE2DdHLoFnYK5P3QY4Q93kfu7z",
  "key15": "FLfgZUeRTEYkpTbRDojtRgNjMQ2AeNC7eeVL8P9tHK6hChjqmzvzrg6cp8fjpsriBwYfFBa74TQ1Jra77wexdq6",
  "key16": "45mMRLF1D98ogpRYPEuEbSwfTjwZrUTUtxCV19oiso75A2LKzwtWHXsAwXMeGQnt1M1M6yaL2exVm2Uj6vNU9FiA",
  "key17": "5yuo3MjLyLgdSymfgkmiGfEFMvuvVBwsa1NoHGF2U8zKhsQ4cTHdfoAEqatWKutjCC3sqM7EyVciF53LvTa44X3w",
  "key18": "2x2T8ki8oK6hvxRc75UeZphuvfpyQtDKD71cCAdkTbuF4aEfiqwQG62NA6UeQSbQTbcG8XWuejKcu5phMbwiyuJB",
  "key19": "3d2xevQ3zwo5oY7ueXQ3wPbkNAUfREDRBFY6ai55ytHKwGLmvxVFLa4CfCPHBfvpky2XjNZaAsPJYafQqgoFed8D",
  "key20": "67268KUhMqJFcYzr1HFxj4o2ekc8to8DH3JZZL9vVcatYKheR4kVQ7ki96JiHemviJNPUo5ertcJvYgUQ2sRajcz",
  "key21": "4WWdSVLDJUoKytUgxSt8okfpQDs13jX895fmUk9cphGUDXiWR8qsEDgNfPf32jEH1neqjJE1DEdGCWHfZgJrbwsm",
  "key22": "5SwALH51GyVrfB6Wy6NaaDzYyzEvUgk1TtHVsVrUqr76Hc2VsQSdyW3ZPKye8uCNYhrf14LuQqw75tDwkXY23uUE",
  "key23": "NK7YKUcsc2xrrN4jdpUyAKpmEZjYPEyyQRDiCgQKFBsHd3Ce9vmNf3zpmcdTfwWrqdg8tj1ptAqQAqSdCUusTCF",
  "key24": "5wCrux7sLpcirozojXozoExU2L6V2vbhakULTvjRMHSya3BuJJm7XwsVrFHFh8s4ntDiiPFLeSMMuzjDVgEhKxfE",
  "key25": "2Muuzjqse9HTn2pzCXvpCQ4ad86MPKezDt8AJvKJfgsnjy6hSv3T1n5xoauRBSnAbpkwhoBGim6cHm6Jh4XA1UMA",
  "key26": "3bHXm23UZpHmYqo9SmeJvrmrkmf25V8SpX5qMDAPW9ASAWEZpJnfGHvLBvkQoSVcqB27EEhPEGW4v4dMcYP94YzL",
  "key27": "4woDkDKybCbtWsgaQD736a3JY8WutvsYLQFJVPZuHG13BReM8g7ZmqxqnBCDwVoBw2J3xwhqQsYP4FzjsbEWmgS4",
  "key28": "GAy3ez8H2UCR6dkzATvYDTFgvajo3jMrNub4Rikrh2J3bFvik1hKT5tPQjdethaYqdabE7T4C9wG2xe3Jp8xZKD",
  "key29": "65qzqiUCLmT1FNUjH1MohMQLuis7qdJu2zqDksQa9imov3MsxDPAPNStuZaeEgB2jQWgLfiYY66p7UdwziJLvvG3",
  "key30": "2tNiQeWWJ9TRm3T29hgtNFmJNateP7oRLZsmugFuHYaE4cYGMmtvxr1HFRxqhSqVhLWxdN811EGdUjyJEm7mT32i",
  "key31": "3YSpEMZNGjvnrqtSUuiA4icsRqB4YmRCTynGQaLAye6pQb7Xh5CX4L2GFF2EbmDUpfFPquUZwgkWdc9YKjbPV7D4",
  "key32": "8f2xdGuaaqcepTPbGP3DRKj64vYeLzQbpkpmASnXzptHNTiq9GMaBmMysHWdd3JP6aWp43fhd6A6LqRmb1TqjqX",
  "key33": "662ASA8V73e1BCHJYGfHTKsh8ynpw6mLTUaL2DCqejWKM63WsX8LW9QJS2CtShbHvruSJPz6PE7GGXV8qPhsMwzc",
  "key34": "3D85MRSv2TPXzJXb259ye541hnyrd3odAj1odpLahZ2sEBjUSKsM6riSzZMKu7d3a9GS6DFvU7PDy12GecCsSSVW",
  "key35": "2oAYAGMeFL2wtQLdUSKknhjqEjiVp3E2N5Voyqcwsmf9cHrvkwvuBuXTeoGqBLjvskMzBG3gUXe8GHT14vVczNZK",
  "key36": "SjMe5FpdLRfH7zstxHgQuJoFGGDWBU2Mgpn4GRrqUvso8g3axgSG9LG134NzUg9tXBhyUE9vJqjyJbxCPmV7FR9",
  "key37": "2yExHykJNPtn2tijBHBXyKYob95C6baj43fqiSoukx5QXJbfPWXaudndyW3xdsdR6fH1TqgF7Eu9oMuqrnyskG72",
  "key38": "42H4Xnp7TUzCSnFStMMipp9MSmJKWjpMeiyqEGA5tvZqp3JXAC65MxdG89qijVm87T5NeyzD1SgCmQvvf9wERV97"
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
