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
    "2hgjUwnFtjARX5vEzBRjkx25GeiuoGApKvV1WjCUA2GY6tHkgtT9REK85WCvV47q5pp3Lc8m7jMxHCEwKeogR3oH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ykWEq6w3yBGSDgk2MRFDxiaUrgq8EjfwBkefSgpTriUpyugfpv41Tvg1bU3MN2kxkSj8R8q5L6C3UF69B8uEJBF",
  "key1": "4CDCXFWfYfuQJxK4mvJKcXCipAwcEf2yyxMKNCYZfP3hYxurFH8t5fRVBA46vhR6wt4G9rq3MZS9cqNh35EDh83f",
  "key2": "4NuGUompsFCM3qMnXD6kqs3wWrPCYGTohctXypnrShY7rej3BKTT8VNoft5xVQB9G3ToEJgtQsbf8qLxbgebF6QP",
  "key3": "37wteRL8AtCpwyR8p3mu3HLFSMorVGtdnrU5ELsLpsZjjLFB3hJpCzhBzGrb6SM858q4peK5nPmKiv8qfP6nst84",
  "key4": "5RrPpvgaxtKg4TW7RkVybti3PcPPLyFg6X7bMnVUEnYZmSMpp9WeR1LnKTbDKdRmZLLmxfWX9vUxH8vTwAdgEDku",
  "key5": "2aMosyRCq442SsifYX6sWteB4GzNjn8Uh99eaL6vFhCYKrxFyKW97xKvbf8uys6KuuUYtt3Je22psrQJvPitb4jX",
  "key6": "616be3kTavxTGqUEz6u9thYMxrxxLD4eT6CJYkBnMigm9GZzdS1uyRHLoKizTE57M9gJdiWb66DNjdSVwUwb6u1o",
  "key7": "uQptFT465vvAqJCmBnc1AB3DYB7KyFSvmRcnvPipgW3edofq1jq7J27wxpFzdkeY6LAm9Vce4vR5pvGRwCAxVCn",
  "key8": "9xuadELijg1K5QXTMVPAJjE5HSmG95hWmWbdckptX18GQozjVASaEoCQ1mBnVSNQKwLXM86mEyf2d6nHsf59f7y",
  "key9": "522vHApX2nNhs232fFoRD18LCQX99PEvSAPb9ahAF5EzVKvHGNzxgAXJZyyZaetp8ntLL5hGZT7teEPhPxnskLcv",
  "key10": "4giiPBKWG4y3RfcWoqYXxiGA6KiWG4WgVK25eVtzEZqjN9RzaLaw8wjwa63FcrdQq7jNeYazucxSJN5jESJknH25",
  "key11": "2Af8ntK6d7nLNgNfjDom94EqGgVG2kcfmM2eTinr73VW1Vnk77sYVWsyfpWZA8AFhUnHECEPqgoTZVXopF4VMWsN",
  "key12": "3RT3hj9TE35PdtKrughGuHypJqq7Ng8F2yKJh1B3oAGANRBisbbhEANJo4GTnGtLiMUp4YXxcw8TmVLFhy5UF7pg",
  "key13": "Whz3iRZGmWKLut4Bh6Zks559XTsbo5mPWr27hjyTnbVTiS57wuvo6g4mmVYmYxB13k9Q6Mk4kAQtSYiEXLJKGP3",
  "key14": "Ps97gZduuX4nYV7A6mu9HLuAhjbRd9yS8F7XajxUTibPH5MHnexSnMMchBmd9XEKZTCw64NjeViLPE71rwLv7mf",
  "key15": "3BTx1M8KhGuYRv4MKdxiG7staABNT8LZkKHMX5BVzjZf6umF7RQnpbyZQcSuGqk3csEnhBueL4mdEG8Hjxn9MS6w",
  "key16": "46LzJYp7HoLdxMNrgWDnU36SZPGXjPCeYq9Eyu5z7dcp4V56inhJCa7B1mxdiwwLJoaqJyBjKfspJBAZb9mYwoWd",
  "key17": "3GampZxg4avoEKTgefjpQB5yMJ9yNBcgdM2PVBAr6279AX2asub4oekjZzy7mWwVWm7CUrmorm9qDbj1J42Q9mgV",
  "key18": "5XnM1y3XKrHNcduy7FPZLECr3jFRmNgbzuAnBZ464kFBymmZ9KaEJBrwxB6A6QtiQv8iYEeFdCreDPg6SwCyj31h",
  "key19": "2JhmGacQQqfxiiJtzHUipJxd6xTMUbAVN9LeF4UeRchiEbkUrAEpSnc4RQrxGm6WW4AmBMYQjhXWVJ9KEXeghC6p",
  "key20": "vtxkcYEfJZE3F5j6d5zuj7y5B5jznjjYvK75prmW2Ppzse4bzVbQEeKWkwnws4SLSLX1S3Pi5bzZhhyqmY5UvRY",
  "key21": "4gRQZWLemmERQ8yEa3ho4VHADK1xJRf2DNbdB6fxB4pEKc5kMn3Dx5waeXbnYGaFJ5cy2GJ8SkcrCZRS8omajA8k",
  "key22": "4QaYvHouu1DuL8chx36HqZNCvZLMbamgeVH83RASoUyCiA1mZo5tUf5oFSnLRgFSUDvbLPDwTMmA4ZXP5Y2jA679",
  "key23": "2sTLPP6K63yw3Ev6ZdbCSck84g9LKypWSCJhAyuc8aCCqPZfb6ymoY6paDzgprcF2DUSY6CX8zrHqzfnSEuQ74uJ",
  "key24": "b1ejpAbHtfbNU1ih2Xmk8kMYdKd2Tto1VNw8VzXJck9VPiTb5fpF6qxu1SED63csZTaDsar7dZoTXxq8q6smxbb",
  "key25": "5VTWEYwPFND292q3anmsSUb4FVy8aTPM8gkuVCzxu81XXZZ3WGf4KT1pyk77bPiKBDg6etWxKh2nVquJ7ZuKETV",
  "key26": "wfFNPnDETveH6VApSdxjE9ts2TxR4wLCNR5s7HFYe6UDMLgKiRTjqMSGMRadMLs9f1KKjp7rxDCbLFXEcbb8XN4",
  "key27": "3A6G4AXh4SNtCw5YkPPJKLQhxJntJ3mzpVkz9uBFmG8SpT2n1g4Lhq5NVuA7PUdN5sNaaW4Jx39ChBkvgXYdT4v5",
  "key28": "2okA5Kp3Q3wvtN1qbcThxUfGXj9BHgA5HdEM7FyHZxU5VTEBqSEH3mCD2A5bgufcNneizGceW87DqbKDZD8uGCS8",
  "key29": "2D8oJ2q1XuGhrZx1nADbxKyu8uxKRsZ2HbuHBam2GFKUUfVi6hGiPgfg4nc8pJa3vxtiGzdBrw9EuSzWmAjxwKbT",
  "key30": "2SHEp8arGXzFTfzcM326DGZv5esHnHjA7tfRRgjn3CvtcQbz5ccQe9RP6M6pv9KJBTTJ6A6Ft9gJ7UMp8Jv7r481",
  "key31": "33DbUZxqqxBZ7xg2CKWwWZ5csisCprFE1jUfnGoHvFnwYU8j24xtBvSsrLx22DdcL5HyXREUc6qd1rZ6CCy4hZo1",
  "key32": "2UBisE491ncMiJsUQfkZLLPkNX73czVbL7168KYX1UH3GAR81a3k1hha1RSuoSPW933YwzhoAa6fm5vB7JLFZLKi",
  "key33": "2XDjc3R8nEud8Lg36zhAUpFUQoo5KY3XKd6A5qVHx3EVgif69QJ7xhkJV1BcFfmzifem9fK7tjVvg6NBp14QCroN",
  "key34": "49pi7XSBhRTSA83MQVu5NuS8J4EnASs8sW1ViZepsZaqQoG2tevJyxS8AWcKPW9yfbTPmz3DxxeKoTMip7rNvuJj",
  "key35": "XtW687bNqjx88FatoCTjmPcwMDY9CwrfWsmNeVgDD2it7t1kRbKi9Nm5SNwVUjbz8Cur7bmTxg6d5hCYjbH3HC9",
  "key36": "3fRC1d1L8pEE1xct44oGndxqMgdcNu6kAiYBTWSC7XKaMcgcvp5s5jopgrwaCyYNXR6P6E8WVnCerLyxRyFSAtjg",
  "key37": "1H9jdV8iandmk1cPzbxSLkWh6s3RdRq3Kyjq2umZQRNySJ6eY7iR6tnRsyNWM1B7rdeTsjCpL9igBWk6qfY11yv",
  "key38": "43PzRH1SqcGifzP412qEX9G3P6dXmLZfTZnUJUQVE6dZ2o9GWXqGsC5B7zHRMgUKcgWUUL8D1K6mgMTtz8TVpiQ3",
  "key39": "4JVRJBaJhDDam22sdpn6XCdZa1ni92DLifXaTu8LBcfNUuucD547Sh9Bv3cpe6BZ65meVZHKVjJe7YhiZyCKWYVb",
  "key40": "MMXuZpNzVS4TSyRxGeZ8rocw1TSuU5tS9nywCu1eCNj4NgUC8zX9SwkexnzciycdXkCgghdjT9Aobvw2nwuoavV",
  "key41": "Y9aoo2ojkdHpHBAsfQE6bQ7kyFHYGEPJEvJTaXAJhBrk1FE4AzuAVWoJJkWidjPXBCMJDzKiTHdUBp1nb5QXsMx",
  "key42": "2bQvfvBCahudVheGswQMjfkherqETZ1fmdn3FKYfD3iY1rH6hQscDNmGLS44WRBNUyCCPcW6uizrZwEnD7eQn2JR",
  "key43": "D3q7PiizDWsjFKEjamJK8HiYSURiH2YNawk3B4AdxLrvbtzmpQreX6L4aJusNvzpCBef3ePhoEVvLjWCTatQ4yn",
  "key44": "p6kgf4ccRjXxCq9w55DpbbEsdeWLFNsLyQ3PFs9hrg2sDist4ssseKMKt9FWuW3471ZunGQWRhzFmMN2wYpwHw1",
  "key45": "4X9qTcxgDnXbwkHsDWEMnEr7XcF62AjNxnvnagg5951M3LorDaBpzfYW6wDRGoL7EPPiuunT87quEUbfc2ya2qzq",
  "key46": "5dEXVGmgZ9HggxLz3BGz3MCjuuXyddCG7Ly8cdTnGPYyL7SgWPs9bLiM4jcwRc4SxwrtXoovSapEgvqkmedhLHQB",
  "key47": "3nqc4ewg1oLFTwC5W5amcjFRUbDaD7pchvQpJH6XYyLT5y225HntZTg884enWAZueNk1NCcA1cwZaHQN9nikMLgG",
  "key48": "UKd6mrg8ywUYPzCHAaro2piL5C18Gea11opogjPFb2f4hQEa5ZdSFuTPSQC5FSXC1W7zZyJoZPqCydz3mVFEFKp"
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
