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
    "2vb1tB6k2pdf9kFf3VubRfx6WKxjnbn53hN16N39YpKvHqaRnCWEAJ414vAqMh7cjz8PJmXVbbFGKR1Rqa8UfpCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AHmhjWF6EKyorpHaqKDbp8vFDSbiQBjYk23HNufM2bwPeVYaTbgmoWH8hfernkstLWm8WFtEHLTzForbe22hSuh",
  "key1": "3oXMDwqyPjiZ4WUBBDeoZdt5SXRBWDG8navgYHbFsH2PjU2AW7TmgEmkCoHA9KFwLabLgfNMLutpdezykpxBuv2k",
  "key2": "47ssw4Q2umAijYbpwwikVSaduoEGkfHGN744a2RehRdNLeEaZtbRCmtfUUbdJ4fAd92FhqumaPr1NCYjgK2zFFJL",
  "key3": "5NoizQS5yHq1YTSt7zM3diAz9EWFtzEKz8PRakcY9Vxo6iWtpwNpEkPKqx876RPnjVZbNpbNK2NCmhNQ1Puszdkv",
  "key4": "4Wtcb9jmX5TT69TLsPqkKzVgWu4zRtYvER46ktLpjKb2W6s1EyoacUK6NsinEqWQc9ZxorWktL2YEBvNT4wuXvCr",
  "key5": "2q3reA3oxFtyi6QWJD4qzLdNPFZLAy7TGUnPacfVFzzkLQZYsULi7L5N5xr17ZpVNdtTnEPeE8NTgwD7BVbx9rU2",
  "key6": "5qTURW2eMt9MRvt6f1iFUbJKuRramLs3XJvyhm4vGQhvgeFMLv3aiG2hgVv4dVq8qv69XdSMQh5Z9umwu6A9jkGD",
  "key7": "4jfEnnjVBtVg355MAsgmFWHtVwMyTi89qk1yZ4yDxX8gvfSHEV1vxQcxj2wwrDx4U1J6vtvPaumnPcgsjCrf1aUp",
  "key8": "3bcUNguDBtLLbrMpRAbTKgj7d888WU7wM7qHbyMp6YxpxzcGXN1Pt4poZpyjzFiY8DEAqxGtWGEdMYRgHzRdwSq4",
  "key9": "4uVwkJ5KhcF8krneDhx1pgGXbcHxXJc864chCY5PtcaX3Jwpn6uZekFmHDApVZqNaVM1wLQFHXRUsf6yjfxg9xS5",
  "key10": "29BcBy3b7NvJHiv7boDTB4yBt1U2RJE7kPKjqKyGY6aemjSC7mEgiN3YPYPfs1QvyuPpDhJ4RG4u5MckMwnPAEKE",
  "key11": "5SNEGLYrC1ioSHRUaMrVAtJPi8msySNSZX6HDYQivdQtLapnKvYeDonMQaPsTLAiStPF4LJ5J3PBxTgBitzV2nSD",
  "key12": "a5uhxpTrCCaWmD5bWqXYz3rWUcG5Bbp3MFD8m96WwoJxvgADyb79QsVmSBv2SQ1DjAQmy1y5rXzpyMpJY2F1j1k",
  "key13": "2r9ETXmTXpwPjQQ2JmuxWJCB1Z79kG1EGwuvG6WsJfyYBxDGUD7LLfF3dbrTg6nCMUXN8Rw6qAfxjUUrvEjMxAzV",
  "key14": "3DnVQuRDwMToqKdpt8Uf4549ZL4WD2EXHtkHCCgyzhYCG1rmRwKgtMJ2HB8YhHWhnqE6zdGqxjhqkPDwZw4TeUiL",
  "key15": "3gL8oyykKFgAMCgaSS7Zbnius1wcMxyQbVQVaoykaSBGC4qzVR2dDRc2vLf4cw8WbxJCotQVSjemubijEwYaG5rg",
  "key16": "37X72LvaHMNgiTLUXhVmqkcjKtxMvTmukaNTQ6vdTM5PMQtEexvriJfJrSD788RSnREfAUnUwBLHs7DgWFWyP5kW",
  "key17": "4ufSCKL6PM21GeXEV8FNDpvGGzqcZoGBTNURJkb1VjMaLbud7uVPA9bz1EW5LDQosVNmRpsqT3PS4KwKjk2aAQDV",
  "key18": "2jVWAJvTNyvPWepoyftbXStnYCHB3JNRbeP2CqR1Kdp9muUompQDTP4T7QKDY3D3u7rwuyqjnQ1cRFyjJXdxTiuJ",
  "key19": "5csaDYCfx2VuEpYVVF37WyAWVbzrCbTU6qzLK73ZwswzB1mhcV1uBK5sei6M7f1R33XirbrndiWdo89JRpbrdY8Y",
  "key20": "4Dr6p1ogwSybiVDncU1qrRmivuWxMvtJNDxCbwBVRoc3cDxrdVvwpLp656bjXPacHbLuksETsCeyK9RSpho82RgJ",
  "key21": "2uDumCxWkHcTgHG29sn3tY28Y8DGBvvo82X9WAoAFcxyxeBcV2QKvF52yUFLtNjFEdMbZbhptYUwv9aKnpkd7C9N",
  "key22": "5brp8pRigwzfCC1GwHJk6XfsKVZEdE854NffKKNbGP3kJz56LTGyvsJMj6THvYaCNqKGq2XqGzsv2WEpo5A3QoK9",
  "key23": "56Vysetf9q1W9oF2KWTLcWtAeiCX5ubZEZRGfXF9WbrQM8XkijArdM6YXCKDBJTvocaBk21XRCVCfSgNLJkmnV2Z",
  "key24": "2Q2HeFm8Y12H6rHo1ySMq7PbtCbDXSH7Vm6Dx3J5dAjoHAWL3HcJv2tHcZeUuFbYxjHu7WtSJjpQUyoSRy8HfpuX",
  "key25": "aVJTxWKxReibwLo38QzDoKd8KGyQDNxuUZDezyyUYoxr7UU9qmhNCVaoLuiwF5YAUSwDZN1buXGioaYYNzuRyCK",
  "key26": "4SxdVbYstQ5gHHyEBGdHYTtdeSLKT66Aweh1NXUmknxkmjzWssdpuMx64B5eoTnZUZQbRuhQkYhBZ4dbUKRAYnjU",
  "key27": "4vrDVx136KeVTkxX579PjB15EJSbtxREmfsmUHt8dbgVHgibyuBfE12RwaMTmU5tFSrWLTuqcwUaPrYT54Awaj67",
  "key28": "4tsZdVfMgxiNzZAt9vrHu2Fum5U6RSGR7q8CMr6Ma4pVieZCPBxuD76imVSC2o5p5sfop2JtsabFmn5vQGbC4GQK",
  "key29": "3KGGKhKszH6uTwzk56K9DqBT1WK5RK7S3wZA2VDnF4LdewsFfFjbuKqWQKVq411ZgJZBa4cRvkciyK1fLb3tNxc7",
  "key30": "4tEgiFWnAkXMGnr1CmXExaUWuforcMYq2HtZDEMGCGrDcWKhzZqbM8rVzAQHYzRCBdGoqth1X7v8TCX5Dy9eetPS",
  "key31": "37iUpTnmGCF78HsTnCW7vDBQ7Su6AgTKKn6cEizcRZELjKGHNTLRn4EQxo8YrtQGXbt636kYVBgpAqDu4BTuwnLb",
  "key32": "2xuJkFJfTvDcFQbbD5Acbp1SA2wD6CtYZmQkRMMU7LdCqMAMGHCQa1q5Jh3bX9ToMBtjnWJWByrbhPcwwZVayE6X",
  "key33": "NVHbTCMq6y43tMn4wRKxVCAA6x9TcTz7FVku1K4akNysxMRHrh5T9PM7aR7HJvugim5J6VQaqwGCqrZx1CJxAtq",
  "key34": "4NLLdCx5wnj74asoi9cD8WniyeyPwDM5jHo3JeQfVTZeDPLAFXhmyekkuic7nFYqyq3BWPQPCXz9vRA7R5U4WWV2",
  "key35": "2NL6ftHTdvcWYJG8GfMrmp9ac7nqRjjUBxDLRogirxjLExTEjBw23uL9NUe6vXrJgVbLBoASSTJiFLyNfSRTGjoL"
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
