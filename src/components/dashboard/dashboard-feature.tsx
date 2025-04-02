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
    "pSfc3SLF6nerRzuys1PbxscKK5BVTvEXnghFvncxoDGrEbzEVwkLsWVxZ8s1SgRV5duhfN7m7eAj6FtSi3kmVUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31rF24QxWihFW9wxyTGxR2sH4xWmeunhUjep7sHT6VwQg8LTJQzWqoZJsVtfF1R9uamyDZGXQteXSwrGwq71PDcA",
  "key1": "3o97mPynDhvyEbRpsDxyotiPtiHQMWdZakiYDjQ44cHBWSJ6ZPcopLAdS84ZWWzMXWyFYfTSGdBHMCnHqHusHqm2",
  "key2": "58L5gWFfZWZKnYMBfEF7PtjQ2q8uT2p3iGQw4MUvJTLgWBa4ubWfkFYPeq5rewmBEGXTQbMG7cFXHFuyG7njtogi",
  "key3": "3Vug9sdMyfDJR35w5CxXm6C6JedtwE5mn2veqET6sdMEx6P7EXyCBjeZtTBC3B31eomGfmGjXQHSTwDdMFto3xLf",
  "key4": "5itvKjTcvESUhHiPxLbNPEHonSVEc5zpMeJnCEF4GQTH6KEAiUWa3KeDqqaY8MKaHeSGSE1CduEiCjFh6jrMjai4",
  "key5": "5FQRMfBXvNiHFpvdKzDtrHmFfj7GDdM3tpBKaqiZwATxMk2Aw8aRnma7vVsXDJukwbVinanBGFsxayqBpdcxJzpR",
  "key6": "2pSkXkt9sjr7z1tW6tPejpPoPv7z4ujvPtGpd5akC9agFqwM6BVKRjbEYXXkvXb3AV8hUsV1F1EXruTBSWeKf46P",
  "key7": "2E88tHBpANAEBUwuq2CvSaY9Z6d1EdQ2XWoTx65896uaSZydndSvpRx1k4fjvBLJbzwFGavnGpEZFzNHHqVaiVFw",
  "key8": "5XaY9HucofoyG2LfxNBvVV5WrJPQQibqzYtpkfJVzZfCPj5QoHMoyyxDDjmUGbRtMCGui2x7V49srB8cc12dM7ho",
  "key9": "32dtAHujZdJGbX4yezkDAMwnMB7UfuJuxt2gQfu3jzZPcuHFRasVs9FpLVTFhqZWqcDpH4WJvPArZbqqS2vGS6DL",
  "key10": "55Fv4eYqRcEAAo7dtHxVuwPJ8mtNft1ePAMXLdaeT1654ypHron4ofCnAHhbsrV4sxVeAvBzoZ6TyipfP6EH4MhJ",
  "key11": "TgJ7EkzKqyLX8WrAb3wP5NwzzzWdkCkDSPadjzRu713MbBrsNYnReuqtbzbSCC9zCVDNSYqC6EP84iH6UMJ1wEE",
  "key12": "3ge9AUw9LurKRhLq73ZzSWXosDU1cHrznyGj26yU8zdvm5s3Xdn84AkkNbUJ95BLhJ6fkGMQ1rnGsEbboLmoS3zT",
  "key13": "21HR4R3fVtUxrdRDYS7keqpVFsxffCQrwC8zjG9L8VHAyeWahCGmbQYjWTFjgrgmfYjqnwXYd2h2wBSEBPrf4Eem",
  "key14": "4FqszPDF7HMBWoC9PnEQvJLnc56KEeruEfnd6i55Vd8LSKNvTp41R4VJDWu4kq3W5kw6c349Y4vPLNzdRczNmGeh",
  "key15": "4ChDJ3byAc3xLnqjgM4XCCn8a7beFvv5qSYjNUJXYn3NaTbx4LQUadiaH4z2dFqfBDh7352iyPHx98Wz1qWuhiqJ",
  "key16": "5jTSZRPxE3zFwTHWnrmWERkChMtnYK3UR12NJLsemU6aHACCrzDk7CFBoGi9M5HfeVBakZbZfCdonJj2SvyviqTW",
  "key17": "4fPkijZ9Px6hQDqAjzQGCFpquZ3A9R84ga7c7ZD9N6SubjqmhU9b6u4eu5K2QswhQnT8RomPdMm6BTCy8Jrdb9Y1",
  "key18": "4Hik4z4WvwdXeuFX51aJ3JhS37ZykEFKy8As4oQn4qE8SixmFXvFFdDrjbMBZYazobssyHV8zyQjHnrSxMrTftZH",
  "key19": "3n3swyPsxdKkAJBkRDDEyUcMWVfEFhFPsjaC5x9Kg3TBVdJ12nCwABBqGhQw9UCLec9ujcwq2xCXhoAXiD2ESHZP",
  "key20": "3HJwuxeESGLDNfWStyakYBSQWR718ssukPd7SYp29gCXiv2jWv1o93rY2hPDCPE6UP96WKpvjSxdFdznZ2uRWsJo",
  "key21": "2uL6SNqMiaiiSZEMBxn9BKMH3uVhR2sukvFXZwni1Fxiz7ddojGNF8eKbWmADR8uA8kUDAUcLkVyfLYitkxH6wzW",
  "key22": "3a6dVPAD3hAzbHFLi757jW5b1d7ww2kbpzejwVgK8fytogcngPdyUhDAgdzURLG9XRPJhwLSf2wYxmXiTWV2iqr3",
  "key23": "2GhLp4aZ1Fg2sjQgMLrZPY6bxELAjUqArFpUmvn2jQqBngs7ei1wT82VL2Zt6BPjVZbRGrJWB1ESTKXVyEhpZwCr",
  "key24": "5P9mjfZdTkzjW72GNn7iT9YFJmCKqVi1ZLApPpyhKFcf7kSqxBkWnWn7C7xnAEBtvcbbgR8Wxz4tWs3VD2uoyZXe",
  "key25": "4sbSaGu9Uvy9ETukCVtP8qsszhyRuvPV7SBbruA6Tem6C6KR8rSzKiW4JTGvhAAnjie328YtAB2Ns2aF1vgZqJQ5",
  "key26": "5es3pkq9366KhUQD57x2iV91AB6EABevKwbafrG9CHudHCTtQe5ahJBc22kWDgN4BRvcJWEJHcHW8RMvBTPtHVQZ",
  "key27": "d9EzZkQErSnxaRza1Bb9Bz4JUdHxxnsmdL24Zxnz2xffLDRcnuBWu87EEZyUtxyA9tjK4EuvsCQ1qsKtHXn3QC9",
  "key28": "5nk4tZw2CHpv4piPbjkCjwq3rnzipfJvSmJTAndoZVwGgmiNW4VoXqTPpXewftDXjykUaBmxeG3vFSreMvndQb2u",
  "key29": "5YNKPgzGt7WH3tCDL5Ztb7V4teY2DLYy899JwF6x48XgxKFdXp9BJCLXFXZ4nKcvigqYJibCMaqd8H3mtrNBxxqi",
  "key30": "3bFchFLm38q3CxmARK1EW1m8ingqwqZ2MT3SfGtbJpJvKZTbt5jGvg7fjEUoDabrVftGYAq7echH6UA7S4G6HZAd",
  "key31": "5cfNf1h8DSZjyzahyUktBr6Q9UW9s2zHZMXg5q4KEtSPnmmWHpBYTa9DTJKMtL1oiW8GxTiCVv3txPsV9btVS61A",
  "key32": "4yJ8GCzT9B5vB2vBMDDW99MyGsNgCQtjJxQ1M5MgwDz3y9KZcXT44y9n2hZNLPCyG8K8KeQVFeYCMdgsZqPqcAEd",
  "key33": "4wuX6PPUaWRthN55kFTGgB7wbQetuuFyAUh5MvE3B3nNVZWBc2gXZW4rsZW5Q8FbaWdGFXbDw4mK85Pr8L9J7QXk",
  "key34": "4g5aKu2WfHsXfYJfwvbYNGXGXKmgFbzJp1Jox8Uw4rAo1reECrZccre1A4LntVHU3jvnTJntdRhDgqxu3Xr74jyM",
  "key35": "5Lj8B1Udx8swFbjm3KdxGqnqvwSUQwELYwJ3WsTusJdH3Y6FUCZbTSXEsnk8rqpoynE9aqavhJA7ZjH2NczAMVGh",
  "key36": "aWDqEEwUbDqJhiYXPJeKBWdJe8QjEzLmsBQ5ghPFFphv8CoQNJ69UvcQ6s9UiyxKcqUVxFRAg9xN1Ro1rSLcVoH",
  "key37": "3tDFEZaFdoJrBTFjWYkU4aRhCwkb2Vv9MPhrBMa4WocQ9Sr5dXoZ6QkFw9Tj2CUWs296FzzAfVxSAg1HmaPxdbu2",
  "key38": "422E8MKmfEd2m7rCX7kntorb7mHQ8KekpmGTP7ByVEoLjBfRNUJx3b7FupdmBmDJsv4XgMruZbeWdHZM3xpS3FEo",
  "key39": "3X18aN3waAGnPjStX6Dh8dXF3LdBit9K71Xo3JnoSZ3cLUN4aLJCGokzSGkn8MK4ejiQoVkADREYZsk6odq4Watq",
  "key40": "5mVLtY6VGXk2TfSvLSGUeyLLrCcMuoPESJWi9oavsLFU5L4mqEzzohLZhLkcgdMDdnmE8RdSk4QviLd3uCtNBRcx",
  "key41": "k7REagQ3A1cwK98MYCFHqfR5KiY4mLtsdUDNUxMXjnMn7wHboWX4E11nXP7gpVj7WUHNbHxc1vup5Ai1mmzRqum",
  "key42": "4Bdv6Y4bGhLwVtfrQDSs3vsiY8HKdwX6uSfv9DbQ3FsAnku9wAFhtXiqTcAjUp4LZ6eMP1jgd5fNDVPFCy8Y31rv",
  "key43": "3gpJAURrm2MegjYQEs2zEgG2AdaJfDAbsbvJJWeoii24ai3HxnCYt5Bbjpgq8kMN7TbTYx62qVzRZxv47GvEQKjm",
  "key44": "yN6SZtfowLTv6ymALbUZUmvxwskSFodZHbmSJtTvYLH9ZkDPrqjKUPp1SduVhv7XPUNN8YjiiQG2fPGq2NBb2rg",
  "key45": "RwVZAjE1iUL6XCinpakQVpU69KDQm6b4p8275c2Uit4Lk4cS737kiJaxm5rkRLBZWufP8AJA7SAYgM27YUGDNiL",
  "key46": "EpQ54TuffE8UCqiQ7LsNmjA1Mn2E4oUAnPRRsc3idnM8E7sqSW2DEtaXzT4BTPvxus1RisMq3dBPHhKRRxtC6MZ",
  "key47": "4ChSg5HRCRnWK7YA1WUcHJbbb23CyHu35XgNM3SMkFw9tj5PGHbigFKXHEXiYs8qhAT1SVehzgEGFDWMkALg3eS5",
  "key48": "2NtcxmSCMfpayDQsMswnrhfzzJ4paA8EhyNuya1As6gwCAawypzYr83xMWbhQY2kHpMZepVRjNiguxko9nNkVy9n"
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
