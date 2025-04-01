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
    "5YNLSEgHxW4NKT8ZnaKg5oPjqjg4rLXfgWg2CDY31PKSGi5K8b2p7kpyvp7Cd52VwcGPYXtkPQb3kDAKZdvNBvLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QR1VuMACuSnCtqL5R2mUsxXknwuMDUR3F1mVv9k1Pm8yDkpy7J6ehTBmsguYmU7JruQLxJ57HjHML8Lg2FxiFvC",
  "key1": "4igNrm85rCBMSApCcvYKKGZeHFTJZVPpLNg1K87gLAEhPY1SUSj9qaGuYPSQjLwrKxHEiya3u52zx2xw1MfxHLQU",
  "key2": "3SYKBykp4TEEszeNE5N4MoAfEV9xuTqJvxQH7yCmxjuieeZUH4AfejM8ALSgwYB8JXnLLD8iVxoBgoZgwofH5CW",
  "key3": "5oxbgsE9ePRMbeFTkEeuJJMhJC1adapcUivf4cCSoCzLTMNocdTNGsmmHfN7Epvdx3W1tkLEjgh4AdFmhJgv4rkH",
  "key4": "2Z2uiur2mwGrrufq9QSaTXJ4gnWUsg8NFiAsckDgyVT7Z1VAqS97KKSxYxL3EFMm2Vwi8ZiGJD76vMhpR8LjAQYA",
  "key5": "5AqgvjCgtyiTM5TstLp6aHDVtLWgpJTcwofmS2xkeds7doPgZM8f7m3nkqTh2imZLkjqopyiw1R9ibfPKYDG9215",
  "key6": "wuXJz6JETP7qc3CVTqQSjhqzwhUD8bjTDzRCkmV4KzbxrJjrQ4SLGDaNmZrHSw5darDVfS4JAWQxwbM8xRkQhXQ",
  "key7": "5Ca51ucxidTcMEDspDScBYo74wKYNviX4SCVGEafdwcsmTm4rE2J8n3HYcQjprc9TUEpnSMmRxLhD1arsRxMyyu5",
  "key8": "29dEVY88n3GR59wu3gJgAhQSH2kZREM9RafUVhjysSBkhPAB2pG725xArPKmeXiw7KbrFZkCFZ6oQu2FdU3X8DrP",
  "key9": "UrGiRcyZHFPk8YA6QtzrG8mNLu5H5bKPukByNGgc6STNkjm9XxTk83fXyhbV4bWTMCJpDPycsLSatkTXPFybH7V",
  "key10": "2teEz1tuGYnXZ58G9bXyYdnngV7MGM6WvsfpH6Zb2gNyKeVkTxB6Bd95or8zEpLutsLuBcV6Y41tTf2pTok5yVX",
  "key11": "2QvtrFLVsZtJkQpG6iwhC2rPhqRspSCDJHeqqLQanYvSfbyjVgZ6Xay3d4uCsnsrvppR6esGcFBoL2Wnjj2wNnaz",
  "key12": "4BBk1URNpsK6vwRo7v7CeAUwZcoMqfPCADLmiyNc4S3uNJAfzgoJCA2YMSfK1JbuXfQJ3CwB35vjBT2m8JWiFbJD",
  "key13": "4E2wi64qY16noGWJ9zdcj3uJagm4pRgEhWJpVL4dY2dxw85PgZ2ZaS5yk72L8EtfHMvNht3CVxQPGo7ZUUBmmBMW",
  "key14": "4MoSgxyj65hSFWANj3hx8h33RzNiqHwEaaYe1a9QysPNQJPN13eBCc7PnNXgeDjCWL76MTgAkugubBxGY92r6MKy",
  "key15": "sfUpRq9RWSESTofd6LaWoSRRpuUahkxWeDpnSDDByjzWNyz7rN2vHhJmL1mrCgQoFr9fGshVG9LYexjb8SLQ5GP",
  "key16": "59KSPWnSgC5F3TmPgPt7jWX8eXe9Gm9p7bNuzNFrLHJXwH7kci9cH4ghqeKix1xFrUdPXEpt9YvBgox45DWUk7qW",
  "key17": "5XwymcnMJ5xW7WBCbvVmVcTmv4RVjexGiozpTzzSLBEmfBYL7QEbYaVpa3GFPNZz6V6ERbZaQbHs3WErEBHi6Vwb",
  "key18": "3Pg8uG1wmofFLTJH4u1qPs66djVobn54paybtmSXxrqHMtiicSwjbUGw2jvuTgXPp9ghpU5yGNPkuMyVE1n7b9g2",
  "key19": "AYT2zS3D96ZmnPGjC1dvwNFaS9nt9RnWcN5Qsy8Z6UANAk6tRyQJGCvYn971qz9bUunuswrjdQsR9SKZk8fYRAy",
  "key20": "4HyZEDQauXsRnbBErXuakRDqgjZz3sYknCnfT67qcoVLmB2A3S6jNVd56PsSw61SZuB6Qzdr6pnvWqp1wgeCdpBy",
  "key21": "5JGJfeLdpVWhSgEjKpDUDZk2jK8fekArtF7wdeVSorNmku7DqSS5EteaTxQp8m5U3s6DnCjtMRgDrxWdJEXE1LyH",
  "key22": "5mpF425zUVmoTCCGaW7k7aT2y8UFjnJne1oyND8EeMvHXww2EsLnmsDj4TdzYVyaQ7JjU9eLvTxAJvDPkynSRqDv",
  "key23": "4xpRs9RYLisNPT8Zdp17k22ZNATkvhnnMKZtyqA7AQ1EnxPtTyzykgFDs5CyNmjwCJ8guoDZkcfCXzeGf4GGSPnb",
  "key24": "t2JurxT5M79FfnwY5Ar6NEmb19WFcTGc6rq2zWCEroQy8zmwcdaawAHhDW5RNKzRs1iDEtgdZmZdHMJkVMv4PwY",
  "key25": "kLk3b24VjPDMiqopTyNWyieQntLGGDop6wxzTfDSXitGWrr8BR87mr3PWs8SJkKXZxXTAy3itpngy4PZi5FDSFX",
  "key26": "2dnPSAG7LfK574VF1cHQgjTpAD9qpJiqbVnKhzwXMNCyK5asttQZTaMQ2ejgEeyqX4SxQoHfzSSK4Zm7taRHChG6",
  "key27": "4xF69nN4oVze4teapjGFvrYiU2tXau47rqpknMBaDvHoWRixVzTdinWJGGiG8oXvQVagZihXXsKjFM89MMNtxstv",
  "key28": "3Mwe5LLyRHjHmFUXR6EDXTAXtMMxmTntYZvau5mr8yeD3Lku1fAHCgsG2EzwyMcj829Ps6FSZ5QU13Kbgty3XERj",
  "key29": "ApyQSLVVWXnEs23kZZNFGuyxk83qjb1x2vLtd3oFBsG6g6G9PjVBkgZ3sn6aPRuXH5SPRd7tw84cycQ4tVxxnRs",
  "key30": "58nEHJfEf75FTcJzwpp1XaqYgbniBYuwSDRCKmL58U1EseNtB8BYcWGEDcxP6tx4CFQwj16JmJGynu1sZR6EgiEa",
  "key31": "3gqr8AsKV5wFshcMSScAMnQBaM2GMNgi16id8BHfypHJVkUMVCxusBynk5UXHmsDfwajPquZf5DpGDiRec86o8u7",
  "key32": "4epscNpsqjyreXbkLXM4KGc8wcjG14wJ5pVdkWjCHGwFRUmFUt5fqCaeYibhND1Aj5eR164sBpPo6St4iicCE4N1",
  "key33": "4YxgVf2T8N5cd8TXNrNq2zEFKabvFv1bGWLUwaw4t1v2UXcG6NWveL6ZE6Rbkvt1ac56ed4HR3r76xHDKuKXTWtG",
  "key34": "4131KpAmncv5vBSD5buh8oPBWbkU7K5CKMin8TYMKfTiuTQJRFgXnrygzXvx2Aw1kMwUo1d7Vt2BkKvaLaL8jRDd",
  "key35": "5YXqHe5dJ2b34fDRd9aTAcUYJahAwXqSwdxqp2KoGLq9rQUkxiKSFs7hDfRA8gg55mUEjidemb6aTPobxGupzxHy",
  "key36": "5DZmzZysfFWX3Ty1RYopm4A1nbs4MHVjtBfxwrBCXa3Ks1inzdmxUz1ywyT3tEh4in44QDoXAvMQE4KjmVVpH7bS",
  "key37": "3473iwDD9etFN5sVwa8nVm5pL5AkeC3E6JrHWFUDBVfSm52LDB6aWGgDNrrGQzsgFRrjACx8WX17K4hSYzA1DVqA"
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
