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
    "3wusGhpX7W3puqF7gRigVo94gGAjrxpLfNhhwC7iLXpxjtWAnwe9QRTgScDZg9FA7Gr6QpiHJz51ggo7mJrt2tZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kfddumbhmYQJhP5Ghqyo8i1EXnqbr953dvKimvcqCcVK8vCQQRqyScbNH7CyBTWeZUcZwQb7uMGPiRLeqmBPjzK",
  "key1": "3MY9EbE1pKfrYoHVDnHPuHc8EjrcUZLTGvqsJmH1aJRnFEbU56XgVtLjNpTQDABRVGGqm3d1B7NAQx6XWivfN9Xf",
  "key2": "327f4nqoo6Z41sL97dFAzc4Li1fhh5KZbwxN8zcA9pkChaRpa5fR5zBGzqbbMEbtqewitvfT9b1k9PRoTZhrZZf",
  "key3": "2DvRtncUsKnFD2CcazobYJ6Hsu9i9cN57yG84nVLKuoMdXxrsb1H3UPoXunDyRgaJk5rsXS4KS4YbFNUUzzm1CD1",
  "key4": "59aYLKx6CGW1RTjknJdbjLDsZASisPqxgxfUp4mJBmwb6PWbVUTuYvAUSpPh4HdqQCvKkNVC8LokAj5keNJqFuwc",
  "key5": "3a9B7Nk7TB4qC6JSRAmZ2SAfrgaivhzaUYYEbD6T8RcAjFmmuEW6stTrp7hjPHh7ntxUWUhi1ksNba7teQHm9q5D",
  "key6": "3y5QLnjtULaW4qHkWkFJviYGBu4bjvTFr2qBKWk8Z9JhF62YVCPySJJLbkSgdq6ScBWtdWWdRE9wsk5BWBArTY5K",
  "key7": "2zZ9cqNyXbzZ29Rw7FarwjHHe24GfXVR7uDF26ydFwDwUCJqMKLZB8aej459YdNFChvtD1xjwJXYc9WnNEq7wAdT",
  "key8": "j2rnHwbST7FrRCBEtVSVgZ88TayynATHYbPmkaq51ozM2Jfete2ATTNZ5nZGtcdBzgTzmVx7gBhmi78T4z8V4s8",
  "key9": "LsgtWu4Yyipxu64fuySsVoiUBkUGBrhGg2ck3dKqL2TJfRBmxtNRVdBrvY56MNy5qdTLTi3KoL1YLS8dDGb1fuG",
  "key10": "e12i7wEtxULrfump8KamWM6Y7M66ftYoSYRrQSv6EQmB9fPvPWjpBxmx8jJm8AjqLhd1f7GQR87wN5yoLYdDa7w",
  "key11": "636J1Dzu9UofxtNfMJhk6ZGrVC5JsV3AiFKDgQbKnyiU7AVoeQ9RWMYCj38mLavxs1Fat4Ww96EXejAg859EztpA",
  "key12": "4woj3zRYf8TfVWcXk5kDFRWHszABocQ7HY3Y6DAS3qqTh3Mek2EgsraBFBzuDLqySXMQksfVAkz3k3ouCWiaKEK9",
  "key13": "3g3uirFudPbqoVDYSXBamDanKXBQbk3U6Kd4zMhSn6bq8ScCdFmwyBqgEkEQBEowejmLcvZEvBv5S8YPjGdoV5Hh",
  "key14": "3772LWoBTV5dV4rAM6nX4JDFC5bpYQPQeqW1mdSKLKbhxHGnBHREpvwSk6yNDn3g9HeCmA1YELKo3QqzdPuDQMVP",
  "key15": "3TPG8KnEfqb1iGh1Ad3UBod1ZHM8NffwyjkYZPNiq3ae45ZnX1fgszhbMsmscpB7QxsFDYQvDggedy8aERFW5v5N",
  "key16": "2kcecj7qZYngV1b1hbkzqVfSUH8DkVEGhB5pf7Kv9CoPVRqSf8XLfhZxWDTshY26Vauspc8w9zzbWXUyGAABp6RR",
  "key17": "2K9MVd5XdpfCAmeibjHk9Em2HHq6TuRyBDntwQRQhM5epaxMzz6V3jWxnXvrEzwndTqm8oyBicPHoDzBzGAt9Mkx",
  "key18": "3jdCyrYe6KzENkmzgYE6NTdd8q435gDd14ifEkaMYBNfnJfvoiF8szMCnyomLeBaA2CMapdWZPoU8qzNs4v9QXQR",
  "key19": "5Saz8JDvYvN82ygSJExmcKHmrMozvQvREr9QdcHKAez5aDkBhtkF6ukUw8F7kpx48JqvouXPTJiAJrHNoh8Hg4dr",
  "key20": "4jm7QEwszpPaiAeAWqYQHBVxZSrgwc7eEr22qXWyAfdgrM3ASbWutc9FPbsKfdeJs6WVBi4BWLkGhubr9mBdanmD",
  "key21": "3a4MBJmeGauiRuJP77bwYLPy4s1pZqbLi1rrzifiqtDKeSVKQfUuHKRWM4PBSwKjfb1hjVXYihpbdeJwpdkdeet3",
  "key22": "42reoDnK6eAEm7br5NtimX79sJoDvGMoeLavRnMoBzvMdqwhid1dCpQE5DRW7VDXwgSe55D1e91p94SYMxXHc7ZM",
  "key23": "3b7YQrXDXMLfnDFckNogqawwhffFFfKEPEXDWqHrmSxBGWcnmPTXN3HvZktCrrc3AMt3eaEfCJMXFqnEu6mVWVEM",
  "key24": "NZrCcDfEWUHvbFBciCedaA2dfB5V1AiqKzcD6tKEQAUZugAWX2m81dFRvFMbdagbMpVnFMPEpMYKHoA4SMcqjKS",
  "key25": "2xN73Q8C5fifa23QVhSe3gdBYgx5JEkK2JqeRiZZhxMY6sm3xC2cXSBZiMsi3Zqj7V96DWhBe6HuFGmA32RAnakc",
  "key26": "gYzi1L4m9dUGz95bRXukJUtg6m1SYonyq7jP74GwsaNvQbi9WDDuJrPyvBQXiUYKJHGMDP7UhKFankYKgzmnHBp",
  "key27": "5Ea8ShpPHKRsAZMJaTCXncg3AU38LGcgFLrq3YE9WRdeGb8CZ6y8Zyom5U2tAQwtbxAKk7mha5PRcqCvJtYbETx3",
  "key28": "taDRLxHjuHSRNP7VjHYnxBu43PvrXYLomnMwmpbHdXPFaxi7qcRcjAkEK3iZpiNBeAWvMFoQ3fWC8XayQ7SC61b",
  "key29": "619q7yHFq37Ex7kWd6tYViYfuYv9wQAFUZZbnwSMz46Y6JRwtAqjWYizLQM1d7pB2BNbT8GcnMmFgPmPVS3zb4e8",
  "key30": "3GqW4B9RkgVJSbv3RdGj8LkuxQADE8SGc6jMZw8PhkFD1PM6WGLNjjX3eFuFTznYvuFH66ZuyJhx38fqVWaBsFqJ",
  "key31": "2pHJApKioTKAvgXSiNNHxJ7tLs3QPCUjHYYSKWPdbrsZmcL3b4GvHLu3mFBrTFBoq2DVJkyJfxAHeDcbcgDmNytN",
  "key32": "4kXoGpK9yAwkXBRyC2g6CBizomPb3CxqSTtBXye2XmnBwNZeEtm1HjwsvEicqvxb9SZA9ZDMKGiFCJF2VCvJCf7m",
  "key33": "2533kh5wPGQrGMou5wQDTPftq5FN3VhDB32aRESAorQ8PtSTpxGnMo3e3eEnTc6cPfBYKMhEYBudYtGwG1tm6es8",
  "key34": "27MmPnkdERfr1RjcrFbxEbBg96vDdtaPEQiKvmqp9dyFzHeRCShrmq3Cbxk7iJwMpZjguKKtazELQUJUkc6Qg1Ha",
  "key35": "GUTd733QxqTr12rmVvMVccXzWTDhMq83E59EM1Tq5yHEejaqJLp6B3qBULrXbtbRmSpX52wgbr5mtLfwnSkrBc2",
  "key36": "3cBD7xqfo9WynaWPtBzMRUvzKtw7VUBNsVpdzfeUk3Qir5wcUGUk1V3TxjBt4tGuhtiAvwCa3FGxrJGMBXTVb9he",
  "key37": "287tYRYtrxVYbwjCJT5gWnQgwotACVohvKS24Vw9Sr11StziD4MC5gZZzZ6iJZKu8sEiu3zh1LNNpiUTcNPai3ja",
  "key38": "cDFHGhMLso85LSE6DWimgBgogQ2XC818LFmEqVWjB4QCpV2e4wN4SiWDs4exHA3CaVVCU5rAYbCJ2tePwf6haKR",
  "key39": "QukA2YM6mzrm2DwY9bhJLDqxy9czYazN1cNYruC5z6Tob5iDtuNtxbxgF9H7MZ3bjhtWAR3rXmTQffyRFwSAhar"
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
