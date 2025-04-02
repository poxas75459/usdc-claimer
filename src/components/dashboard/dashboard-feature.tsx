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
    "Q6Q23dorcFizLE1poX1wWeFLQBsZczZyEtQKufXC8TAYn52a2zMGmREZKWtBvoL4LGxUtqCV1YYX6ek7UqFSdSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ukGF2Q7LnQhDaygx4p2db6gyj2nKFfWMxUMxLRTurcACWT5i8exjWcCSy7sQC4uynJJn3jBwKaHiGp747iAUwAZ",
  "key1": "3bwYqAyuyE7v2b9FH8ATso4tDYKzBBLn4KQCeuE44KbRrMwkdT2SSmqhbVvWskenuja43hZK5ykMtVSFfFC16LWp",
  "key2": "5AJtH31AMBURw4uZjRtBRioCntZH8DwcJ3AsPDBD39AksaiwxiTqvhXNPNeCzwawBJisW5C1AmvMJN8tNaCXjfe1",
  "key3": "4JHKfTBiDqoncvtCGii9vMgSpmLSZSo1cP4TZHXQajufHi8C7ZxfLZD9FVHsX1KnEabWEu4jVZ7eMB6nMQWF8udX",
  "key4": "62a8dRWXseF3aDGZCV1NNjTNbr3hCH5TA4thy7uJHaRmvGd4eKSj4xdbYAC9e7xoJN1W1dw6NAZtNHJ5pvevD36t",
  "key5": "5jLMuAXZVK8L9CMBYWEafQ4ekDTv7Mza1Rq7JUroLe626fsCFMPypzV7yve1ZWk3n21Upygwfvt8SFzQSkWotVoe",
  "key6": "3nSLk96X5qvDLaA9Ab7afvXnb6H1izSpsKkogWp1sFbJQraRNNQjm6MYb7Dm1afRHyxryuU4x7Zmq6EWv529kzvq",
  "key7": "6eHUWCpgVBPtn4dzXyuYJzmHbJ7pDLkZZwbmY7UQi6sUEVFPogScDGt6vUzC9g6dioizPZJrK8uyfkkbtKAVuUJ",
  "key8": "3KD6n69L4WhWpRU4wVfYSFk6ZDK8dmYv6t2uFZbe4DhPC17eKpxD8hVcWcc3iXfMCzp3vdiZ9eZByhDPzMQrCyG7",
  "key9": "2WGYAbSQ7hv3XY287xTtyAygqvofaHPPxwgsPYt8oq1cEtB5HTFSdzKLfBAmxEHDVZWg1TEqXBhPCT2XCqS6hReG",
  "key10": "4UVwXcvQrW9jTq8xRrb7FirY8nMSfDLxqLaHcfjbFmLAoLyEwbDjjHcmBh8d1y5qqJKeUy7hpVhF23ZW7StfRSP8",
  "key11": "4GEdeQqzGjgKjWVuPwYCBuDVaQVWs2iyMCCabG4JsXLCeuJSVDeQ4yXH9a1anAnESNXJMFjV3Leiq9E8gmijnFjd",
  "key12": "8899YkCo6VD8PCc3fyQdy5DQeSEE9h9sLntaZZiKoQWYshywHwoVwJf4Ck2eHqSzUrAKV3PCiGCvrHFmwkhYutt",
  "key13": "4bFsXPLh62uG8hCvnuMor8gYd8jxAghh5qT8MHGYjFpS4H6RKkc4A6brsQpGwn8oS5Unbue1FWBZ2DfqUAwXmbVi",
  "key14": "66ucCqZbfDvq7qLYDuPKpwZfX1UBswmkajkybKRia2EW3cbBbtEcz6oGsurCANqy6CWNznMJBSprtWzNNdaZJNLR",
  "key15": "5nsX7kcYrhKT9i3km6BKPkDbUTxajMrFenv2aebUAG8bPMbHMFKr87tqpVhWoYjKgrkhgErVYYCNtWfN42fYufN1",
  "key16": "4di1LcMLkphMSZikA2CjLw8WERBHqF7DMmwTtMXwGeNfGbfQUPbtdopfKS6PTFtrR43bJXx1pwufiqLXKwcm4wSV",
  "key17": "6JMeTejVRGJhUGKC1KuFTMrAEFAggGCfyRfSvsR9w5MGqZP4z2cszGQeNdTqRc4Q5a3Y4zv66nC8vqXo9Ew8Wqr",
  "key18": "36Th7EyfSbbZ3XFPWW2DfTRSgi8MN13t1jA1wMSoL6zJGbZG27BuXzLokvdMuZdWYVww41nsFQEaa8YwJtWzjLfk",
  "key19": "3zn471gMutwP3Yfuo4F56Biz31ZzfSEGvmnzsJYMQiPAAYBDCYc9jRDNwsS8xq6pFbRaKmMbfpfFj52jftjcp9YK",
  "key20": "3avEKdnXJiZYxPL9Hz6VwyZEqKcEQs417e9iWTEazZHLrT4JKMLfrj8JRdVK2x8xNXThojYNgp12PRDfC7QDpSJQ",
  "key21": "3A7rva74zLXFxoedo3NJQc4TCQpPFh2Rt6u832RopJzTUrKo38VXV1pjdaFpEduqoNZJKxEs6eXEGargYgjgo3yt",
  "key22": "3RFsuUPUSMax5eAcqMtH1ebewap62puBkZpSyDXtmnpuf3miRG9poTGronCFdSAKpunuiL9B4VMvF9jr3g9cwBad",
  "key23": "5czJ6WJjGfyb7w9U2Asm9PNjCDKJUN3RpfB3o78YHZRsgGfAYhTrPcPkwnHtBLbhUjbTjEh3a3A3fxCCT2TspP4z",
  "key24": "3YKcoMadwLnXYiaZ4AJ41ts4V3BBYhPXoiBuP3xYgHU6dH5p63J6etGCYpKT3QgrCY1rKvJf5dHAe86fyqH35Xec",
  "key25": "2iSxtjh51uoqefGXiSS9oq6LGuAsiVzAngX4htpwYt7WuENhup8oSfChXopkxdVgujQ8enW2V66UVLzQFX5tNc8j",
  "key26": "2PsErNCkvF45rtC61QZDFuywqx5VPAjzmy1qBNxAkddfgBfpRcqZDrzX1S1zKDpoB8tyzxGUYWNoVbqYoLkR52iQ",
  "key27": "4mkPe5de1LLyK5kp4Xc9xqHpUiR4nGwgPDEPLxC3oVZo4o25RQbRK3uGHP2dVoj2cWrhKzD2pf47U3sUVRNwHWYa",
  "key28": "4H36WPccDDDpY7QFKTdKuKULb8Z1QzzAxNmcnLBzkaGzeD2PCaznFfqrWZTHrobmT9doY1Y8egwicQRgjZS8FBL7",
  "key29": "56Sa9b213CywkPLPLXo9GP8SdkXMdvFukPQwnkjS39UG8F6ciExwjXu62eUtNchYJSBf4Z2bk36Jw4RhJiCww8ao",
  "key30": "33cFd3iDb4skJifHAk3BzqN34QXmGuYyX7AgRErZpFBHcMVBn7bVqNkLt1E4QcUhM1BJ12sMnv9DXJmo6JuhAmfe",
  "key31": "4TgFbKVmx6azVD8itAWRV6CMvuubw71da5uoii4L2WAVXih1shbQWaGtFcvdWnrcvowQSbMALtH8n7t7f4poCwbe",
  "key32": "5WTuukU8c1rLraP5B3ejbU9ChaFXEiQHdpDSqdjLfQPqngePN5sDYKGpvcmVp7vTEMMPpE8cRZQD9H45hAvN7QUJ",
  "key33": "5yn7n8KyDBProSXAspMPzZUVHwX9uJsAKetU59weFfm9rJZbhkejPXk8M63oHbBGsCD1K6hh7NPxeFCmpFWnzWkp",
  "key34": "4AQwUQHAM2eA4XF3QWe5XrwYz2ZMiFzivYUNzNgEDW3u9ZghkVaMdrVbxVab17Z6o6uNpmQ1aF2ZxAtMoEPjD5Kg",
  "key35": "2EbAZDqyafMHZELv7Zmy8C7KnTwjwjeDAQ1Crrxhub8N5BK8Wy8zLaaUwKFJByW7fZBj66uPuAyiSoWszWQvqkdM",
  "key36": "54rKFha2Kxm7pUYwSkwCtYbERpbWThfdBAXZdQr5oDUbRyBxrSXB9Gm2pb3JShrAqqTW6LQiGwzbwvgT2CfpQeKZ",
  "key37": "5JA4RcZmTatYgZxud2nER893vCdQ6kXP5snw93HqpN1eC4D7cJv76jawHAgqK8Xg1zmbDEyJHqZU7jHwuAMpmy1K",
  "key38": "ywe7LkFKdJWv6uaP6a5rmdVt6J6hh84XRvTfMNnFfPqJYWhoe7yJtpR7MDp65bdUQ5ReofxozCBjJc3aHCxGHmJ",
  "key39": "1YxS1ZaHSgbaCqFtxGBhjg9HHoftjtq2DU9sSKHWG2mU97DEWN4fAripqpvWsFaLo9xP1FfjusfGcUYMhEALP2k",
  "key40": "3QpzrCJV1EPVrXqCGCu5qub6w65S7u42NkyFCnYWAfpGpFkrhc9XmKQctqAg6NAyjEF1PK3m3h59vMWD3gvG9Yrx",
  "key41": "58yeDCaLK6WHmgZfj9RTMKxp9BkFVteLPTwvV2wJvVVtuXawMpH7bywHA26P1vMjYeGLu1sX56SRKZYz8MS5cYJt",
  "key42": "3xRykqS7SJQdTwj8kUCEiwHm6LZLUwqF6hHsGtg6VvzPGTtrR4HgSVxfxGPnJ6rSUonKNN1ksGpceuzzFAZTLzxc",
  "key43": "223TqEPdVsE9SyCxdtqw7E84FwfNa57BDWpd3N2eeQnj1ArihUuVRzNSgRU2FdriPADEND9VN6t4qVX22xd4oajt",
  "key44": "Qq5LZ9nhnpyNBbMEUKpWnzUH93RCsUWDqa6GLMVxUDC8qM6BoYkcHUwuhsi2NXxUrWPPcAXdq7cbYVQeQ4ZVbQg",
  "key45": "LAURWsN9vsXz76jfnfSXKBiU4JLXsNu5Xx9wq3Jgz7vKVNjGEg6mJZBqfbdxCZragyJAqnaDVFCVE4B825sMQzY",
  "key46": "3yhkj9AEVHP8PB2wW4FjxsSNN3k63EZdjGi1PZHR3Gh8MeDzssSw6WGmdDBKn8E97sfc75MQgDUkEugNGxCyfAsM",
  "key47": "4c4TeRrig4aTznKGdaETVsx3Deu7eQfi8vTKqQHhPJz4UGt3njvgVTzTBTH5sDu5XLY5kSJwKSYG6zAJHeR2LzuN"
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
