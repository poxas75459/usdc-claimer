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
    "4nMBpUjKBuwUiynH3LEUUch7pE3FfQneEDpSYCfxc4yS8R1CeEusaTojE9xAuLZa7ELvG5GUqbEXmhiQbbE3VKXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25exi7hHaB26YP1LCNpC9AjDih6gkRka9pE9kHGuLjDkbAk7ScdXsZ9DVQpnwdC8N9tUxS193gz7AyafmM6YZvJP",
  "key1": "Z8QyfQaJ5RrTux9DVHSxZHLSBiDaeBJTEcPBSdZLJb3wTJqh5RS5VEhYPro4g9hx5x2reiXfSLmKEdczvFQsGpo",
  "key2": "2whr9UT1AVZHhN4yQh2oqJ2uW25J7Hh71gzfkF83qUFpCuRx7rgatwsnsEw4oSp6Ac37fLJ3WVnmMLfPKrrfPKVn",
  "key3": "aDoDYNF6paCMZgjit82b1aqKhGxXh7HcSTRymj1TNwTfckuToiPdk1BACtBW8uYSPJGt1q4QBgHNPc5L4aRNNx8",
  "key4": "4WVMMtGdpcSyZCb7a2pQHPxqZohkrVJ3ZfGj2RndjoJ1rHCCDkfUmP6XRNmPFaGzhGh6z1nwRmZncSjwAJa8EQBK",
  "key5": "2jvMno1SK6GtJXadeT8nCScQPSTrkqtpEeSUwGs9YhuC7PeF5ZjiJ9dKjkPeNa7365X97hDGsitfvZqyePvCZ2Kn",
  "key6": "4riTv4CUadJZFxvKae1VohMbAdeZUMLXM27J2QYjaGWk5suXNNpbkiTwBQKthXSUJSREvPMxy5YBVzQVWSK4WYzb",
  "key7": "7DAf3u87mFy4dBqTpF1WJXijX17ZGD3G9HahiVqAuPFWUoDAbJ7mngW35AP1AWUYJ5WZosif4rx5YbYNEEWTLQo",
  "key8": "3jUyWi9vw7WcHXhSik3uvGcGKgKXzf1PgpiHXovffJsLgnyd9HC6zc6uX2tfJ1t2FFi95i7iJbZhDusKTTH28y1c",
  "key9": "3oqtstnX2w13u1jgTFv4gvjfHG7yUTFCQjbw8qBReFdR8paz6mZC9kk7epmukb4bQmqriC576VC4HPAfCWsAtJfh",
  "key10": "5Li4VPp9RzR3hPe6nacs7xbugWYDhb67eCmxMChESx8Fud3Ud82W3aTfphESoDYkS21Zqu5cH74usfGz2qHgurMu",
  "key11": "5MfsNT7GhwSyJbGe4JxQa2p4D9GuE8yo6JPbv6jcKuzKLa1bzDstctXxFjjcHoVE3bPpxcYZqy5AsydfrvorhCug",
  "key12": "vrp8pdeyueiRvPUwKBQCE1RVREepoFxuAFFv21Tq4rM6vn7X5vPSWrBryen7YjaYreNREqrGGcUdATBsvcpWVVq",
  "key13": "4uLkXxNxc6TNCaEj9akUSzHneCC8v5WzkS5Vy2isMnfuYKDTD5sS9Sk6EhN8DYsGwUe2j1K9WskVWNPB6Rh4YktT",
  "key14": "5eYA4h37nKGDLR1FFES5bS3kaBDKEjsLtnQktcGFwAPmfV4VZfk7jV175GxJiV1za3t2NcUrrPR6ygaXoQmQFcf6",
  "key15": "5zW114bS5PM3q4YybeanbvgZyCpConcxwFaLYv26VjhMBGqfCknf254dncFwLkfgPi3nkexuhgbd8Y8sDQKWVf7q",
  "key16": "4eHjqkyKkKX7yY4Xvk5co6YmCkqYJhNwTGwf2ZDPNsgFPXNYRKER5tRnJB1uLpWHdvtPCzjdFWo3jALtkCJ8KxRH",
  "key17": "5WbfRWiZDxHtY1CFyLd83q9mTjiD8mFgo2Ux13z9pdMCwAGD13hd3PmejvAnDvshwvKDaXd9izGv7Dvjjqeej3Fw",
  "key18": "4bx194A1uFphmhJcpC2vZJfmTZaoT5sXVo7GSfF8vhLH4wjgmhF6qzJZSTVeEwCwDtJu4BXYxTH9BvvzgxsrUrj1",
  "key19": "2eeGA4Pon1t6p3m5HoHvQpXrfgBF8RGejWvwfTLAYwCd91YfQnrHpxWhZcejJdsD9aLwM9rPV5x5ZyqmLgqaiDKn",
  "key20": "4NvWecsMg7TFxx8A4ryypY7ZjuYBLpUh1j6ZcnuHGHt2icFykcjqTYZRDQe3uSn4NC4W4tF8fNGpitxrMJ9xaLoJ",
  "key21": "24dbBBMmLNZCh4rECDjSwxSmGpVQBuSTpTQVbzG9VbsUbeWVLHGD6BkYUpBkWFBDKKR68xKoidoG9jCPoQJ3R1tq",
  "key22": "57d72ExMHFXSgg9ZKQEV2C91BsM8Tk7LQdSVAU8qwzzR8bhyA88Xaqnk93G6cE1UvdswF3wwwEhcj28chfx1Tigh",
  "key23": "3iFNSGPShukjSEAWC7AQhW8TXRSsw4nsEANK3LP5B3JPp2GMt82q2eXyYbWLUfJDhZS1TtPYqT8g4sCbfHt8PCTs",
  "key24": "3rPArJhMMJe1cDEnnMmbY69MPk4ej3sVbuFCdwUDE7DwUaf9C37Kk6PP394k8iCydurUAYwAEDhphgQUmhozYy7p",
  "key25": "52czDRmNCi2GWzMxdEv23BitNqTUUBKGtex7xPajUisQUTSrAHQXYVxjnZxDfGKEZpBTiHRtpsttkYP4ysddJhjb"
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
