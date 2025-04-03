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
    "35VKtU81WGu2kauUHfJAzEitHqut7Dx5Mg7FLjReVjxwwQJvX4snFtV1qzxXax3YHV5KJwV5FNPGZjALocgGm88q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VZut79NA7UurtgTvxYDmz474KzSEc3Q9qtdpNDpbqV4o4xoPWzxwUXpupQtKaWWeCMRAjPSPXZH6vckMTAzUaJw",
  "key1": "cMuAk6q88D91eLCK5t8mcJyoPhwoYi9cpmFsNQSagmALWFkR4b9dTz3KjAYsSv6g1vAD8fHYnH1uNxgHrzJJXA3",
  "key2": "qQ6gkX6MLCPFSRGgKGkNfC7NK51BZeyA9A5JZPAevH9T4xec9Q44T9eBM8ENYYteikkNKFMYdfDvdSZ1GL8LGs7",
  "key3": "3R94x17wQCcydzPPqpScXDVy7RdhA17jszKBy2GEYVfhu9Nhpecuqm7oK7Gjy2z2eZkGxm1vVg6fHH6UwwSZrfJL",
  "key4": "37iyZvji3QthHKYnstEgL4rK5xcuqTwTV6WuuMU44ngTf6MgXoUk4qqozaXX6ubFCwVjL8JZPfg6Letw2wkWbepH",
  "key5": "2ALASMx2zJHGZphMvRMudRePU2xt2A4RqAXErw9duLmEk5fgzrPnMs8g54WtFy3qeehCaDtJRe18C2budvquM1wz",
  "key6": "2VvjhehuKYM6NPYbxNkNVPYSmJF2ugDDsGQpq5cs8AGieewd4Er73ZyUH4hctzAYHBGihuCEDVhBaz1138Vvzzmb",
  "key7": "5Xwz29LBP9h5wXKzSKG44LLULvma3rMn7Fii8iPQf5KbHBMU4hnoogcCnrjGCqcCqkSB9cCn1VfUpuLo3MYYdmTq",
  "key8": "2EzU4PNrbLULckS1PXUL7gFCHX5bFmi4jhFcHCZuAWVngzDx19o4p7L3Du6kfojHR1KFSCGLswXiASi62B5GgZeT",
  "key9": "3R4WyodhU8gm5f5pHToJ5nav7XGbJUTVsLN56SVmKve2AdMsZvnQNoH73GC7xa9uS1PWFWNAfrJtKS9SeBVz9xmb",
  "key10": "zxUqjuTMucazE5ZDVdaqk8mRmKShM4YgUjMyMuWvk8zs2hQMCrkKamh2SkKmNwJKmvM3zG1FX3Thomc71TW9MX8",
  "key11": "5H3E9VJED4fqe2VUE8ZTFg3cA3LKGkhKyicFiAeMRtHq9tjobqeGJwuQMiFiRPawcfto14QKcz7vQaM8HEAH8eJP",
  "key12": "4whjdZMot9kpbWCGX9UmbjSdMWXHFA7py9DpfYrLSLhx6mhoFYRk6icp3CWQSpJvW4D8zC2YZQKDBfmVV4Afp9Jh",
  "key13": "6519DNVHndMi8sc2Aui2GNHNue7sxw7JFYr5xKNZEpS23Rq1aw8YYSr43xig1CMf3kr3XFfrvx6LoStLHhNXeAwP",
  "key14": "drs4ZPAV7FF6BAQ77Wp3pzxAP8NdQmxXXi4fiRN7YihuUKtbZtrYCPtSmj7WJzZpECrqnfzb79KygAk7uvdBQjG",
  "key15": "5p9vGegYzqbDRdkBPJDaeXXWsAqgSbRxzVeyA4k8LMvTmJXGYf8c2FXnCbrnanWcD4pGWPZaj8tVQgnRemaqZiBv",
  "key16": "4qqiaryoDLfRP9CUeyTdhZYRA2LMUKFzK5CgZhKy8xzmBhzLBaLcvcu4bShQFiU2xYfD5w32ADhAfpAtixsiBSSB",
  "key17": "KdWArmpN8W6xzQiLsqKQsV3hCmEWxkPire9DJY4wheBBCdp7aid592b8oSh3ySMeAz8NjPyizPYNSxBdmyS2BEY",
  "key18": "5jFRhdz5eVvaBpBTktQXRnaypSag9yWcBe2tkrUQicnxK2u85jpNmJzVeNRio1Aibsd1DALVh3UMrgQxBS2h4Urs",
  "key19": "2CPuGc5jNgY1yrHv2mgZZ9Ruati3XkNpUPUbyqsqFQARm484UxcRV4PUpeCuViYewm37h9Dd7Qg8P16ZF38rztwH",
  "key20": "wHH8EwJ7thxTooS4TYTNNHcYJE7m2JsEQrKCiJg6QSskVPRnXdMT5xwxEwEv1JWULRq1QbBpaudBtVTkCCQ87T2",
  "key21": "2yjuZ9wFkJWF6JkkdyxLhyaxQBUM3ctT4WqexzmRDFLGNYy3Jkq9uQMneW6WDjQK1kZfystVb1o1mLbMDuMJD2Vk",
  "key22": "3mYGWSfebzWBYyEnMKx1pzkwfKgYRx1LhVHUrA7pNQtq7gRYU3s1taCCvnce5Eui4HbCTRHAbbR9pjeixWUu2DYW",
  "key23": "5fJXkMHEyAsEMLxccyGgeBMjxTKhw4YTbZiYX8DahBBuyRtQoV6WDLoVxHRia4dgFbDNPo12U8kaJqNCrnfK6Gt4",
  "key24": "311EaKoiscMxzPf2qMjsa3paeJkqtH6AmtktXah96opWQsozen8PWsi4pspSMRgDTRMvdTwzq3XMbTuJqfigi1Sx",
  "key25": "5a2CNSGd6HPcA1W7svSztam5GgcBPwnFRbQGZA6g7dteYcdjf695LaJVPqHp1Ei9JGTHK4S1NVoBDvc4Arn1JJJX",
  "key26": "52FxkeKSx94QBZjVWmSdkHCJY4x24vFXs7vUPTLwvxEgvAEawgkZfpBMR4VbvdgM2Cyp4WGzKW6TV9hrzyrtDs9v",
  "key27": "319Nh1XuazpRGHyAtuTxUK6WUXoXkqNYTEmTpGBjxr764yJvyFvBzy5esEVjNpgzWtF7rwA2dDYHPMbGVhVLB6or",
  "key28": "3Fh1QNq8tbWnNymju9wn4sZA8f7m9qVXAcoebMpSDscJHFuME9X8F5meKLFoCMTp4uuFbh81B9W16n4t8PHdtnSa",
  "key29": "XBKNNVbmy9uGBut8QckGUvNy4jHZBpzhenGMa9uyEH5aV7znF7DEMb17ksjGWAfaYL8h2SS5w1iti9o6Qddxsmy",
  "key30": "5wagCyte7nSHBBmPkpTKAyCEPXhMSWep7SxHeyRokYJCow6gA1LFHpHeTTFauGWFytrf8eMRNhjMx5QrdHm9dUhd",
  "key31": "8HjRWb1FiCNu62RrutgcdvNJwmBw36FqRsGZLjuBjocJvFNoSWyFcx5tfHBiA5Sre8nL8hpY4pfwbhmv2kqbi8A",
  "key32": "4jBYph7SqFqFffTiFBWZcENeoEs2cVG489874P9syeWmwXX52Z8kSchfDW9DVnA4LkgTmdY4d6FYXqemD59N9DwF",
  "key33": "4pSmGTMmbWmr2gPeiybk7GbpcFWGciFX5xFydEDNMsJMEZw1b5nfa1aLnXBm6WeU4M6aUwHoUXiDFr3DcpXD4oB4",
  "key34": "4XrNo9UUt5fHdaUf11ZGLHQYeMTM5teWEVQa6vJFCCDL94FLbZhH93PmR1bybR3TgmSCCNT4xHS7L3JB8m7h8bCv"
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
