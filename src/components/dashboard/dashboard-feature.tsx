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
    "44WfmnSV3bZJhQkQtcw8BeyYXHHGRH5T92LArc9FDbZ7drxMG6bPgF8sr1gsahSqyTx2mAYGCCtUvYVJEdMwA2jV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HNDDm4sduutzRKfS1VxLp3ix3NdwoHPTuVD8TiPaWa4BHxJ3Nf4cU9D1VjYzZpCAMDhxAdZbgH9ZiPMtozXpBTT",
  "key1": "hh4PmgrGVbwRwzdrA1GeZqv818NiN6y7h2MvFEe9ZoRXcReeZZQEqZo8UTWEwjwCpLk5HBotQ7sMFhmfskFn2BK",
  "key2": "2pK8fqaMpWYxNuzAM6rvRfXiqUABghmSBm1WEHBCVaMG5FoZZhd5pqM7qX5SHrhASfjiH1wZgm9wxXwawBnF2rRn",
  "key3": "125LxeioHXEk35xP7eNFYB63G2R2cq6M97EvodGL1Me17CS484qq8AwQ8ymPrZkEn9usgAQ53s73YqpBQ73WwB4v",
  "key4": "7dBvGp3oQCQ188Hk2NKJx6LWdAzzhUJAG1VvTPofsNpZ14kVJiaDD7MPc584gm1jd1Yr9P7TzgC68b2EupYjnDK",
  "key5": "5fyoxpDGLPddJnzCH4Rq6kzR6XY6EgxenyD8wwocJgdHsitvaFjiwmuwgkhtPMVnEs2gupjf9UnX6MFC4dJMNGMS",
  "key6": "WAXvEwfpWz28zduujeRC8BwrMnUF1nTQFtsaph4HBYkjLUM7pdVuzEB54R3pJYyWUEDwjtkEofqi1tyAHaeTm4E",
  "key7": "55rjCo29M2mYZxNEevS3x2KRZvv78wJSZAci2HAW3M13sub5kP64H6wUgZbCgbABtSafmXnSjrML51r14SHDuStu",
  "key8": "2TwF52SPMkXSw6RQH4yw5CsUDHLhBjTVdbedegfntBXFwH97CeVXSY4JmpyiPhFfsVN2Yx8MsTx9uoxUYZjDN3SA",
  "key9": "5GPYBGyvGiTjjDm1XajrBy4eqxWA7DSWcMbyxpwBup6g4N5e95Lm56joXh9rnthXU3ACcw9ziUMRHLAyx3mkam6n",
  "key10": "3tnDK98C8RZKPUjkJnVbq9hkh9HC2RkHtAxgXsDiFeqbxADcRCz9Rd74S3Jx1qwPFqNnTK7zbiYq84Jktt73nFxn",
  "key11": "vDa3K7WoWUN6PBnsb8QEwzSX813KQW5dCSDobAu8JUaTvgUEqk7216Qr4YWXRD23QMavatkBvxohrDxeNjWu3Br",
  "key12": "rffpduvn7uF5194T8j21q5sACkd4aNXC8JBeYyChN88kjAxKdR685uCUbPhUrFAnQpMcqFT4BSsHgkrhgStSsUB",
  "key13": "3k4JpedfGUqrKZ38KUJbscAT1XbNoi6yEb9ZaiHTJZi9oqffzqxgfp31oUnsLbSmEjRnBnYNG1ostpmwCCJzPF4d",
  "key14": "5ZerhSdkiN6xBFCWnppRYqLo4bCgDVbotRhJv3E4U1eJ3vkKJDojJcEeCrzcGt6uMfjMN9uxnJBiA2LAk8TqeEwp",
  "key15": "297q6VTufafSEsiAsAHtsfoUqKy9Dxh5FV6ZYrT62qatqwcXc26u6yaschJEauqchzkxN6zyWUgrCn4pkDuYNymX",
  "key16": "4NMjjYwwrzLneGkvHPAxAXT8HyavpzV5TGQzG31FTgQNELcg94Jd35BG4uZhBPMeZ4BbVkQuXaBAdettysDXhLYU",
  "key17": "4gP1YZDmsPiFdmaRYf9hz1wYzPhJwNTNqZqjFiqG4ky9nXYMwz2Qh2BqhzGpSoZZ12gSRhYcjq858BTUn7HXDopX",
  "key18": "4eo8e59M9ekerZGbHbLWpzdJGrYfuKEC8ua5FGXAYRHhcEKoE83JmDx9JvcbYUQPSqPsHxSfYK8FGNV3hc7AN8UA",
  "key19": "5RuGtGzGHy1GNs9AqqKif5pEgRGyGjfd6eoZax7nxxmxQAsY1KEwAn7c7a5HBWU2fp3hXdsvYYCkY1VSdyioLs54",
  "key20": "65QkmmFL6EPxuDQAswgvvKjcdmQaBvbLrYjpArQno8UBrkn9xASdZXgFXxAyNjueL9C3qYeYPqmaJ76QzmM8s2A7",
  "key21": "P2Y3tfdyLTVbr8AWAk72uwpfxQpZjAts1sUbHP1kUhTAXYcbLA6ofztFxXN3gvhSNsA8x8TisfPxKDgAchdTCHY",
  "key22": "4rjQQAEx6B1RXteGmEpA2UdzAoBDxukrnvdnqbWk4agkssUUqMsLUm1j5ytWtaT38nwBdYMbbGG3gjmZjKifZWzx",
  "key23": "2EJpNbd55j4BX5iHQDt5QRvXZqKgFBncYhgJ2LSiyEoUxp5jZrBrp66aKB5FcXoXBePzK6XCEDN7NCFi1wKH3VLq",
  "key24": "zJxJVQNqHqsvTvWTfwxBdacMdD8FcvBFDv6HCMq9ufu6DQ8NQ32bCngqv5sDq6FsZN5MjKCoUWNCEmDGZ5SPK14",
  "key25": "3hUHq6GJ4KD2t81WabAuda9tpirQGZ3fbYRnWgGMhxdXGgrxYX2fAMH7hjTcY1GggUopgamWY7Fr57TiPmQnAbh",
  "key26": "3CN1MxcjnK83xdEGf6uvzJx5HeJbfbPR52ohtZP7zGDS3ivTXKjNmLoBZ3gtrubBUtKvTsDCeEFL1T7uJexQiyir",
  "key27": "qpWzTbbUxLB5e9vAmgpAaanhfMDAaWqoJtixHhaVn6bzePJFQm4rcU25qEDHQRXigmrvSeBiq7gPSSZfqQ79LGJ",
  "key28": "4q9cLKomjYoHxAZqEgcdxxQwW6Re4NKjREL1bF7kYLWrZeCLKVDT8SenHxTinQ471MiAJ4QxmwA1mbsoE8mL1Epr",
  "key29": "3NhMYjjnA9YYsi9KHvR3fDUSCQbSiVeFaGeXnWgYxvVguZTuaCgDL5AP1YmGCtYwpGfBiKkjHvRK6PfeoGDTvSa8",
  "key30": "4L1jZxC1vfkaB9xxiebCVHDGLgepnjGT6nCvwJTPcZkBivrtXqmpwVKL23sFXqCr3paZFGrWkWTp2vubX23SQQUF",
  "key31": "3NZvNyPorYPFPVmu3UchciMbM9WFPM3wKw4PWXheqrPXZzq8BfrF6dak6szXSEqmmJecFzjBvMSiQebWTcpuzJoh",
  "key32": "Lbzk4fZFDcfGKwyE3HAD6GGH8siG3hhjWYKb28W2nK8ooX5Juyq1RA1Ahc8WcALHyhRZbCz8JWG8BzX7C1WoiYr",
  "key33": "4NKbiP3hgPqKoXbzRuceEwyw9eg5j3JGv6nssGkfHmisXaSVdCJNU4hBYnG9eaxZdgYERwmiy1BAnim7YTmxHSBw",
  "key34": "2jLVgpovtxn2Ld9g6VX4pCMFo4gQegCFeEpJXvuz7vprUoXqzzs4TgoWsVjGFphhpvTcXh4crETqyqNrBp4ZXTrw",
  "key35": "4bbCREc6RXr3aEs2UTUd3MQ1GuystxS2GnyeRZPkhAKvG34GfdTBa3Epb86XR9rMQtBPadGFKMUxW4w3JjLQ8gr",
  "key36": "6hffXx4a2XZiwPpi5gYPAoKpwT1DfYmWfEZA3X9yXBqVc1UpYCghZJayHPWEL9MMDyj6v1kUPevPEiU5fUhsWZ2",
  "key37": "3ibHZAJXcw8Caxoxiu27wo6Mcv6LGwvBN7ECNgC1zjE4Z91ixYEzDWRKc4Xpbd1yXVtuqD2oELUuopKhkREzYGXd",
  "key38": "opNaLctY4a5FUi88D7ThUpwoDRjT8VaR7QAssFV9SwnAwfzCRhgUsgnFKnReM1hdS93E8kYRnfNtrsc3cSZCt3i",
  "key39": "47DmxijKDzjgYnz1czPTFeXP1sT1r1jKMNRrSobytxnFMYU1fWrzaDnVNjNJ4VRE1SrAJm2BFmyWRnjz1qAjdmV9"
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
