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
    "27qgR43HKfMWRTiuYYs9PryS15JLAvQoHVpjuHY4Fnkoy7pktXj9oKhPfRUZWoP1bYhK6sBwqNuehzc7xiRTPQ5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P2BjXpJyvoi5Mx1j3KqWWQRaM7dkmsH34Rs6e5cgGbiGoc2vBF3ruAanL8MszAexht1gfJqCf4v6krTWtz58nGt",
  "key1": "26ptitvT2c97KehPMReEjy5Y3dXWrjLHPggZBB94X86hbwksUayxNeFu6nspw7XKaChsSAyRwQKKUbHQ6th4PiZ2",
  "key2": "2hTMuXeB494p57NiwAJSbwym1xo52mH5e1HQqnHbLLJnoDop93oDwbPh3bxgoioxKq6XqMTdzyNwUZwUXcZVCrkD",
  "key3": "4gNxABBfHxRkmmsoFJiDsoSSZneMo4TvYrmUdV6Vrop5sXJCiuRAeNG3y3FSekVoxKL1EijJrTNSXLkfsDC5XDek",
  "key4": "3fepXEYYg5xKjNRNzcRuFB4z4guE1ZztZi4vEhfNeTm8XSbKisK5N2vDjogrgwqf5ZXrm9zBCK92fN7wRfTVp7i7",
  "key5": "3M498ni9fhwdLc5sCwjuSwmzU17WWwJxPMY9BibYhGtF77i9H4bqJtkDp8vSC6KDDdx81DruBnTsgTfMchaC9UsU",
  "key6": "2TKQDm9qmdvMfTjv3YEkUuNKzBY1u4JEujJFH58ACgjZSzBGGkKwUNKvnrNzBSpSS3uQmFVRa7W8cgEqMLpgsYwq",
  "key7": "4XsL478haZ5RspvgXvDT46SGLBoqwiy7aoSoVqEmRQwcEZ2XuCMBGJvc4UQkrxjnEhx7DSopgv12kdqBzgMikR36",
  "key8": "45r9koGJNRyXkS4cFFWd7vtBFCJaEn99FkysP8MgLQbCdyDYBLTfAsktwVMfaTaRGnoNPJCULmqVfTuaPNGwfEfQ",
  "key9": "2frB4BjhNhRY9sNu4jNobzTm8DBz5UsZMfBqFjFGQZDmMBmAbdM5nYsFTVk8zGfGgEnLNRfBEs7isXM8dzxgnxrP",
  "key10": "5fjxNLbHh9ACTg22YxxUNiHxurPCzcVS6eKHhuaSraxiJZkM6qv5dB46VLHFaCfvnn1P7AscknphUibkXGvk2Zp8",
  "key11": "YXYactVbFuhj5RS84HdGj1MpRQDDZfVkoz39oU2CYeDnTwpCfAaAqckZuXkmHAxPW8xm8Q4HABbXWEDdrAH1wKA",
  "key12": "K6KzCYGsTxny3JX5sgQn1qMEKNSSuRPLkGtGdbTFxVm1BEtb3aLZcxYGgipHe6q8RTnwe86mfXbKxrU6XRSNMrq",
  "key13": "5nvqCzkBEEfSPNwBWTQs7o3M7Yrugz2CSLhY229fGJJSZH9n7DdhUxb1S5M4hLa8TYBEqa2Xn8d1GAHiWi6s6NWP",
  "key14": "5CnkGygpGL4EH2PPYNmonqWFw6fdFxSmJP39LG2mA3mzvYhmPbaWmLXr33bartmN2b9TuaTiktcWaa34nUJuFVLd",
  "key15": "qcuycBmpLUS5uxu3HB93EAdtrrrKTmy8Fp6yZ4so4zRTzoxp8RHgVVeTNxVYoK3ntCsviJB46CjV7sM9iWxLjNb",
  "key16": "Q9AgngktzcNYGDvcWW1vqPVL2tQsr3KforWjTj26DuLL8wtdZ2RZz4ajzdUnjWUyqs631xmZNnZiCf5xKX5QhuB",
  "key17": "UQT31Xf2qM1ynbzyToyj1BnLo2ZwxGZBmWTS4Xfpsa8zvgcWJM9MiXeVeh5J7QBnCSxtDZY4FN9rUFhw5F8Es4s",
  "key18": "64mB2ZQDj5aVZrHn7SLrGW2syJWrwwGGcFSvrcbp15Je5btqJwQEbYJpHJvjq85MFdxPk3rmfhesrhD1WnPxUhVV",
  "key19": "2X8qjL5Z4gW5HYMxtUhufCGqP2LiWwWkTZUFnEYeYAN77sGU5bpJCFyB5YsZ5Fbn2mQ9mjNNAfmNqV7ix8BLdpfC",
  "key20": "2PsdTtgLnUcmv75PYiWesH8f2rYfGXRHAtqMrpKkDgEtQF8RXRcYLpLJDGeqp29pRqp71VHv5ckRbnWQUMopaqFc",
  "key21": "29M9VVNCbnJ7TRZiMPL8KvX5ZgSRAuJNFhFahtpgMg4THbiyHBBtSr7kF2NbHSfi4FrP8fGno9Ei8muDUB1gCNvd",
  "key22": "rRj2kWWuZmwcpd6K7mEjvs7pfqBFLmTCHqjfTu6QtVtfAuQ1AzscjpDwzeFAu4wSfTJaVoMu2aXeE9nd4czCjB4",
  "key23": "5ySuwKUw7dtK6VeEt9EoU6vZsZhJryoYX3aZhjZ1B49aJV8n9QRErURBTXfWg4QQE42VHUyjdWCSTyisgqDBjjVk",
  "key24": "3vi2EsfiEtPqpWK1CLJ92uh18ymGwj1q2AbSSgvUqnjjSzbKn39vnCfD1WwLZkT9DRXwcenf3yZE4XJsm9jpVhD8",
  "key25": "5qPuREiYw8Rn8pzC4RX5nTYC5t3TZm3UL2DfjtCRrecSjVMznuiKwXFxWzEzfHqDFwJoKgj1HbLfcb2SXnrhJjsN",
  "key26": "5chK2AFvWoxahea6vapg58pTYw7xouf3SofyqjB2bwVqqhvDaz6857wVBg8yLwNxje6WV7A1mYUUVbG7f63atLor",
  "key27": "MhDggYNkXnRAHAXDbxAxREe6rFDHNpzBeNHVgVYWNxyoycGYHxQ75jMssARGRHQGQ7qGru53KSWUKDBSWp7brF1",
  "key28": "568CTVCQMQ2NvDadcyZXFvKTPp9pd2SnCAzpuznpyMFzsz3gchaz6Dzv3ncaeuCne2kSoi6rH7b5NuHF9ghSyzHR",
  "key29": "2FZQDNZFqyKXifGmurg96McJdK7Zocfdp2hxrGwHRXTCLKBcNLRyskiN5VXgxFJ5gDJhNC7BRs5AMauJMKymVTTT",
  "key30": "2f7BrxYZRF3QXHHmNib75JFdRcLLrbAADmSqwFtcDdEpCvkB3bduHv3hGVE3BU2zyPbc2ZtyaJy2WBBqqUHgWqpu",
  "key31": "3wd3mKxgzX3FoEJAEQy3cPvdjUqHnsjU9ivRQgm2R14otdMdtLpZ5JarPu47q5TKZZtt9ZTAMvxWZiErhdXdcT64",
  "key32": "2NzRhf4ZuhE74oDV3e59F1y1oghnAv1Fd34RGCFDn6nkpTbieXKG9PdVA6sZ7ueHY41ZSTtYNtwX3aBxWspbs8d2",
  "key33": "4A3qRBayv9zhP1WUWnd2tgfBSrocvPh2dsTBTaZQM6Ft66mVvp13crz4HEHAjDC7eiLWGcMPLTTiYMSfGD6k8Q1P",
  "key34": "5SxYEYXYsHi29F6shYnT7Y1iWDR7RBY84nA1XyckFRegCe1T7qPGGk12jQzUBEoCAT7PeBHbfEUhkm64CiYDxL8h",
  "key35": "zVW9zR35xQmkBK4GUKgvKHfF45C7SzUcNYLYiXWs8x5ukyoa8hJS2pHd1iQCFXpTMj3w5YgWYyYcE9VyHm3r8xE",
  "key36": "4sXRz5YgwTdNkUuWfMtwCADAamLjvGxTPBH2aZYPtNB53txyzTG3ByQjdSd4Z1ttzhULnxfaGxRjNLX426iQsgY2",
  "key37": "ZeVH7jJFpJaKv9h1TNK3uosgArHjvAoSGcPpUYngSfmtEDi5ei4Ag6Toe8q6YiW5Z3UHpZPAGnKZhen5uTS63YE",
  "key38": "5kZUppZyKVNhrpTcHBTKjcKNwruUmoLfCQd4dAsdr6Grn51Cv4miXfSFJdP9cyf9c4Btwkr5Vpj2DHhrGBmNnTwG",
  "key39": "2kPa6PHWi38PyEyiaRhWCbnxT4ZW8fNS7vqK42RbWJdt3FuLP6KFjuoxzN5jKi4xxqHUEnrQP2cbPSTuB5SmreZU",
  "key40": "5TY6cFkwHxUiXBAUm8pFbXJUeVctpnM3mvz42ZBazxbQippuSTKi9Mcu4m1XykaTET14tr3ecFe4AF2zTZy1gsRR"
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
