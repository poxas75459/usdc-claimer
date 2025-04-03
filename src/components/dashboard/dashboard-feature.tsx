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
    "hGmR7HWsNmDSZqKjmmdq1gUJRz6KXWxvrdPRCjTULmdGYzk5H5mQYNi5aUsywpRP7MYQcVtxiG7eCXW4KUUX7FJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EzQEsbrzPwukgtrKCGmwup9sb6MGKPgwsednpNBbkSMrZqH8ztuYB7GCkXJMh9LSidxXoVzesh5rXNxVqDYAfx2",
  "key1": "3xeX6UU2PnXmsCPswMvdG5i2kC9VwU6AWkfodGuqzZ8mVBcrPmHy4j3BRno3VKiTfkyTu5oyvipAwzgarFKAAE7w",
  "key2": "3HoLaiwdmR6xvb9d1eUDb8dp5724wdaNzzsYDxW9Qpatx2mV1vVCvL49GzopLfg8uDnSpLJm3U6bHr8F9xGiLx7k",
  "key3": "5KPvi5KwDv9sZVGvMQGeJd9adrRLPeTqgMtWnVAUSWe4w6hXv4oPcAr3UkSEzoD5gnhvamWZjZYddYLW9o99CK4g",
  "key4": "i8RfirJAJLtY7FTrWBmG8XNL84xH1ZyhWzErVzZNNiHPSKBntu9VVptGkFHepYdBa8vzfh3NHz9FbcfSBNYYPcr",
  "key5": "444aRcZ2khdQxDrFugNoyCV7xuuxDqQfyWsR1Q7KA3hAmCYwWnA74Ss2zWXR4xg9mYjTgoFQTLs9CnFfGBAUd3PT",
  "key6": "2DyKWKU1dhnHRWwCACAALgxh3NkdzS8NFrfZ39jo2wngG9KG3FdaNgqErNos2SgMW6LdGvgX12TNV7zomRZhVHn2",
  "key7": "5BANfCQtQrSdgAUVKyo9Buwm8rwMoxePQujy6xWBUiED7y9ptMboAfDUyZ8533FJZT52XDRwu5YSiqcokbEmmy1G",
  "key8": "53788nzMWd2aouXwPfuAHA4iknNUWMPtgQghEgucAPJ2dUQ7dmuxALbiZ95iVoXZa2uMMri1T6zMwoUbJKo2tZ5h",
  "key9": "2JLxNC2APnUqYFM9FSg6yCQEzat8umbi12mP6d4kLbwhM6gpQJ5RVgNRrywCeG7G1oaUizX9DUaEr4qkZVY7cU3Z",
  "key10": "3LdA5emMMeyaorY8hup5ip92vy2VADYGBoBRnW8NdS6Z6nJiPWUgonAFKR9j85cL9v1F4HvNYCCc1Xma88nct3oA",
  "key11": "62BmsDUbSAXquECuVytycKLs63sxD5NSWuRhS1MreMBnf4xrMvXrHdUo4ZAPkBUyw7CiP6QWJYd5ei4maJWVFR2L",
  "key12": "25NK9ALN8ApKt8aTNCRopJB9rt2QdzZC6j7mCBPsd3odpeAMMFhwA81Qn5afWN5Z6uy3bGmjrgtnb2Bc7EQzUBCN",
  "key13": "55wYC7rGoAkPVoPTn1eZttqgZKFehQGwCeEMiQkHaFvwxLojV7U418ogq7sqqWKqdxX2oZ58FDjQMXFJ8w1L7bvM",
  "key14": "5Z4XRfgsxf8GTai3QaFS7mx7iJJqabUZcLQ9z57gsbMd1gt6zZS3LHa8CGmQqVs7ZBiuN75fPntXryf4XtT36VeW",
  "key15": "4S4BKhQeRQFcyhzWFrTLdf2c5Q9XzZcjt7RB6Atpw3rvhoTjChRb8YtLhoeFEomJEHRDpkxTE9N7wqaw9bLAmGFe",
  "key16": "3u6kbLjSEYJCMeTwVckBQLmmnsrxVXQRQkiSKvYZ2uF1R68q5pnHZdonpqR5LSdd3bxV6MEAwvyHABWSxeinroJK",
  "key17": "SJeUuyjg6NGNQbb8Uadeb9KyH5DW6idPgWLpAnDeW8QWNvs7bzPHskq3Ri6EoTwVtrgSX2QXdLNCn5fn7QTqtKL",
  "key18": "5gk5beoKpZppH4apPirooYRCxcWZhGdxUU3f6DKx2NtJzVT6VJaBfz3psKG4zYfTwPbfcsZ6zKhYNaj8XdWPjzzc",
  "key19": "586QCRLra7JFnZUXiAbn6mzc6yqtA419VPs4cQUuoM1eiXwijreqnvcKDazCcdKV5VCHZL4bUKuBKLCfwMiRSdSY",
  "key20": "3k2L14P5ZLaS4GQtUBhYdVvePqfjVjR6aWuQm2z8Yd3udsQMyJzmDGarGhiHs81tLuqR9pEwLtpVjGE8xeHUsyGp",
  "key21": "2aYQ1T1chFr1AvuJV5pM84Y4TLjsfLnrAgL36C5B7GFfKhZqhdZu53j28g3kGQjcunvxgKNKUyLZ1jir1JhiBuyR",
  "key22": "2FZQXEwQ2757kDvMto8mUURxicjCQ1BbDFdEVpD6ELwQvwB75WBqGAWP8LPzr97DaSFAUiUEL8rMSPsCeykumZvN",
  "key23": "BXXacpDAVZCh5x5VYkdyCVGQE8DPP4tnSLoDMoZC2H5FBSG3oQTSzQeq67ZEfKN9FEJU8sqh4B5d6Spf29wNt7X",
  "key24": "4gv1QPPaT7WgqakDmBhcaiefpim6dMpp4B1qrEdeB9v2dpXiXidHR4u4uNrxUQY91Ex5JqbvSRTR9fsxvNr3PT7t",
  "key25": "5xjWg56cCaVFoGD9Hukx4ahddJgbgmT3bR8ZFTKGetBjZxxoWNDjDm2mG2CovEfEYyPBPRJYpCsFZdt7uU4qMT27",
  "key26": "2br7Fazpnpwny1DJfBXEJySf3ARTNjtE2gaUw51opCCuS5xV3wDdvbYBsvQR63wjtqTaN79EahKKq8sFjEb4u77j",
  "key27": "3AMcug3g6DRkqmu79o49bnuihTkxgpjeMRtdEMgsKJGGLdPhUtTxT9gVm2mVWqZq9DnTbDQ47ATdykaXP25HqgFN",
  "key28": "35zoARvzniSzqpfL6oiSqXt68xSHmaNQxZ9gUUqZeQgDg8jUi7CYxYrpGH9Cz6ePDUN6U2uNjaCqq8KJL2B6Y63T"
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
