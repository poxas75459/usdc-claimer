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
    "2zMGGuP3Y9h6xjqyJ4YQjJkz9pVQui8q18V3ckxdxKVi4DrecPsoUUbbUZau5reTDyBgd7tc7UfjVVecUn8LNpC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w6tpU2upjDKED62tEUeSrRpWwsbBEJGCXY6NDk9Cz4i4nNBdZuDNPsSaVEpZrNHkDPAdyn5GBM9xpfQDuEuu3mr",
  "key1": "2XrufZEsH9ZcDYdZvyqGFfutLXdaXxUjqd7EJ1stsbnXabupFzwWRM54Aeri9YcfqR7vxEsvCzQrFDfep5SZWjwP",
  "key2": "2XMihfumY4BU67LaApQR19cJxrkcDhqN3r3sFcFyB4SHAzCXC8xjMMVZMJgZsMnGomevvBsFurNQP6rVTiUEGbFV",
  "key3": "5SQPWQdZGmDxTGLcWNViZRtu1ZraKewWZpsetgF4nVi6rrra4wS9avQ8BDARqtWRGaSpHUbTwgmkFQsa9Wv9Fa6Y",
  "key4": "22MKbGc7QmntQURHwAKfsfLmQN9wL94fzDVSEEYoVPWFGHsbo9zHFxfsdMuM12DDuK1qe1FfCoipZGETNMxNqCTf",
  "key5": "5CzDV5KSWJF4P86BZh81s61VwMspxdH7QvEUmVKtdDH8Xq11xersQrtq6DPqLmWWfhBvs8sTor7hs6qQT6JAATsb",
  "key6": "ss5qFUpiD2zYqEnndfB47J6QWq2nFMJ4uoZTNTvEZZ5SFo6sfDtiaYnR6tXvaBJnGi9cTd6wbmUxxpmWHrDq7cn",
  "key7": "5TfA1SE2owsEWuuFxgjeDzj5TXyoTqWKCZuxAEDwXcHof3FpjN7PyRQa3KP8s3ohon52tFxv5BukxPHUUfNBchEL",
  "key8": "2xgz3SPyxCTdhhfG6jiZow4L958bYBHNtw9NkskpZZr35b6PEA2dQDSKmgEjdVDxmYZYMQ99yy1okmtp5trv9vwz",
  "key9": "8FXierEdHuD97v5iWkrAi6rpvz1NZAHvxw5cVpPgqaYWE6E9fcuXTGMoswWfV3wwxWtzDY5AQ5QmrL42sLzT89f",
  "key10": "6VjVGX75AvSEpbeJYHkaFgTdbn83mEb5ae8U38ywZ1TJfCBwJkvV6t6qf5GTAn1pmC27QNHoYYopoxerJdMEczW",
  "key11": "4Ek5HD1sCu2iegsjKzMpfkeyEeFeYNBAhuPT3wbX86zTeuoh9AzomUkcsC26Kgb74hse9DbANowVjxQwjCY1m2Pk",
  "key12": "KpLhHCPqMDF9K6jpVFsTHathHkANeJ7T75jSUH5rDNAWTTpvHRcviq6fABezujmpsRt97ErDpMkxW6MwSdeWKh3",
  "key13": "2UMKWTJGXx6HBYARtwrAYDZDdPEs98Wd1b6AcjEnaS6YkZzKx8rWMgx4swG1ysQREba1wsdKiRBKh6jMfpA2mgp1",
  "key14": "3NHFwsP6wYWBSQS3FSwhiWGDQzC1caAYNKhLniJdZr3v5QahGWdTJWUZBB52NLjvY1YvYFyKn3n1DEYcQbNGPnAH",
  "key15": "4j4hFV3vVHdU8qLte5H1QSPih6pLEk9qjaLC8N3BaiHGZUS3EAbAk8ZenB217xE2cN89qTgATjHUWRPAoumLaThC",
  "key16": "3j1qXeXf1cTF2JnEVTFVqT5AqCHM2RbdFjb5gc9Ct7gZGULzBCvrGcGzGMfrS2BPBUkcSSsnzcadTp6XJmzCstmV",
  "key17": "5g9fhBbRna3puFub58qUW5eZATTLajyBuDVFwyTsvQ6B27LVXLjrHLoDkN3YuTNdTWx292vsQ3rR2ZYu9qX3tcyv",
  "key18": "2crj1EUupLiBSvFRGb68wqQRRswXBKJbnY3BSL6Nw8rwwa2eYHNHjyQDw46U8hGmifTjRXhcpyZjdXS4oU7nFChm",
  "key19": "26bCu49u7UxJYMMLExSRcR3PJmAqsvhiamzh8FfYMryVZJ7SA6fWZp7VEc7weMY1BLQQ7auXSEHia4quPxKzD6CN",
  "key20": "5Uihdyvemvd74vjuYj21VsbxgycoJgPM9HPGNjzRiTBY8RgGtrfRRtbmXxgK7BHCbF32XDcvU46Q2ax1DYoTo1Lj",
  "key21": "HxnXSNdKBvoFB9WYU3Dok9DvH9xTS1fyda9Cad7mUfnPiNfq9mujYKBb5B4LMcBrQMdofFhvjeEgwQ5QDvEfPYK",
  "key22": "2nURDtxSumZP7EVVsQXpFJCK2okrqPiTnWgoA3iDQsgNfhZRPpRykJbSnVZnUHVrP8CJDtvGCzjcyQ1XdZqK7zDF",
  "key23": "2J6WPZycsLr6oKJdXFZVEpaaGkB3dTZzt1WHhyvFfQEHoTVFeZs8p3wvanvpxiu6fQcWq2RAzVz7eGxDXbMLqeMv",
  "key24": "3U6PkWRgbhT7iybimWVdJhGAVni8zJitZEDyUgzRLQ7mxMaw3uqNBASyemyyJxqQ1Aix2eX7Rax5qqBXwqRxhadH",
  "key25": "5r7jQS58jQWigTM8jF2tQm1Wwy5i7qfXvFW2gDAzRp57Dydf6vYg1j6geX4jgjp2oe1gkeAr9GisbfgAMCujXiEQ",
  "key26": "4jcFfScT18tSASrC6UMZaueDrAfPESXLhqgYxSVDNxWBhSwYuKUR4NWQyy3dihbJ48dYFFQ8MuFGsDTYbjxZCU5s",
  "key27": "39QqGGvBCbu7QeUNPyNLstXGnQ2G1HCQq3G4xgAZ6UntZ6U2wUUMh9Cc7feYjZmbwRjb3DUp3vWs8bwW3yS4po6F",
  "key28": "2XTwGVwD82Ze9ArWxCcSbvzKenyn6jkYoM8f5S95WXPQX6ra4P7U55FEp5sWfQcG1HqQE321F4fHihv5K8gMhcXT",
  "key29": "4t9RqPM2jY2MAEuWPJLYZGwk94NaNhBPT5xWrxTrnLaaWewZmBBhwLfT4uD2FxCiJggSSRpaGxDuzi8jqX4bKPbN",
  "key30": "4cpvHt66Lg98HEZtB7kRsCZfb25X8Rt2aituFayYqFzUAVjuc1j8XRFkqtEi9sxQnriqFg6dBVRrduwfZt4VNMuv",
  "key31": "fV3AsUZ6D92zckDBy7szJiXZLKWssjbVkMhRfi97dTcr5qdMocafmGhWbkJDf6dP836kjgRvn4xhW7xs3qcRosY",
  "key32": "4QcrQqQHEFT9nLNWi94VXzERX2YdEdfxpxJkvaVQvuaDo7SbwTiMtGhAPCKLc8yzmGhKukDGUpoURpqMHbKqYdFv",
  "key33": "13e5vyeiJxihqdv53sVQbg1dU7yabDBZbDDz7K1HpTnj57CwApj8UG981aKWAmBB9q3W5BoujFbxLc8b9mq9hMW",
  "key34": "2HgLLmURWk8GvP9uzZXBzB7QVRxdyRn5P6Ad4F2pW6FR8F6P2stMqvDvXehmrViApbP58dcEfJSyg2Lz9PKofXHe",
  "key35": "1t6MLBXRpmTtKFEngwb6HG4rUiapWFJWB2UCeMmTdz9bafnUejxy4yJPoivztH6nE7VZmH3YyhS5Bg99CA4EEqB",
  "key36": "3794wm7yViCoJtrTQnKtLfU6jM6dwnWbWF4RRBZ3AdM4Rfz4RMRHof2kuexukFfRXnGNfBeJxATfptiZaoySDKEJ",
  "key37": "53c1JCZ3SYmwrALNULSKeWP66ZtfhGUaThDnWJ1FMSAc2gwuDurW7Qj4nbZXBz6n7vBYAEzQbHbjKY7WcMiPfGRo",
  "key38": "cPk5cPCtVKJjbQpGgnn74yTyybfuhdEP4rwJPdVQro8mpnpXrbGkpgYXj1hpUbRouHnLcvutWjeEQCGrdoRQN9M",
  "key39": "xH1tj4yyZB194bsksDomRrNmvLE6n27rtCHB174QmVb3CtzYzqR3QEqVCW53Egonp5EviXDs5N2NNtfbwHSjftc",
  "key40": "9emT6zWzb1FH4dseqb8GoKWpQF6udMNDsdbpB31BEoaiLMrM71zYPuzHnpaokZKSCpC8qL8LS2TT7Q6pk8p8XY8",
  "key41": "54mC3xV7txr3bkXuCVks47YzCh1p9TPJzAPGDSS76XUGdEW4Ax8rHqcyvmFWrZq8kdM3o8hLUCmHuxAhJjGyNbX4",
  "key42": "3mhLY25Pjhh9hkuzv48Q184iLVBUxjSJn9zTYgn7Qwy5ZgG9X7dw85ZzxHkytvFHMRqwAav4Wk1P1Yu8uhpF9n63",
  "key43": "DCnJGaNW6n5GfTMNrwiUpD9UUfhFxqbb6WdWtRp9eQynHja2KxRJtcPwvzwCgG1W8r9n3FhFxaqKfRT23nQyXuE",
  "key44": "2rFaWdemRPDNhDDaBzrKhoz7t5FhJgKrjafyB7B4RYcdKetFp6nLMbahU14eiC1HJL7i6gMSLTzzjjqhiiG72pLF",
  "key45": "4TJrRJjxUT9f61kBdEwVFZRJePS3SCeyK1bH3TxYnqmmokL6KrZXg2xkDhnDXQvnduoGBRWWuYzcqzgJrNhqJDzH"
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
