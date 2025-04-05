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
    "49S83C4DyiKFyeg4xLpo61ibBVDX1KpgP2omssURe7MiW2v46fVeYvRgYRy4zABSyNxQejKgRNmCsa58D2J4xwYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YLMp2WJezH8oXLWqs7vTDRk4H1jhWh2we9PgYfmxBZrJ8Cke6cfEw3zSY5qjKaWemFYc8Cw87fDzQFY1NLCZPJq",
  "key1": "eSpTWZkL7CPjv4PmMcyFgULNcvNQ7wtHGiRZTtQuzPDPJNP4VVqCyAs4T7Bt7ps6VdyyoSEsdV5VqGqSnbcF4wu",
  "key2": "5PAwGrSfqKhGiN8RCooFm2ZmmhxZbHZPjG1kfvpMAN5UsnXQqN8vTvmmQc6HhMM1gch6QtpX1NvhiPCBVYz8BxBG",
  "key3": "4GMLNEeD3N4tfqBGRve2fDPuzs3pcVvL18AD9tsxDLgT8NnjsuHDUK2D2GGFhcL9Pp9JbXnTijLUgn9m21oChxmc",
  "key4": "38MKMou8SeyaGYbUJ3NmHG6ULZ8QcyQQZPC4mJzK9DtwPkWLcS2QScq8bbntgLoiawpxENDpzVwwFcXs8gX4Dtsd",
  "key5": "NCWH8dnUmjmJKaSQyQvcN4aG2KB6xxhakR8dPT4Bbh2UsnEP7KRcD9GBw3RMJaLWiJjXk91ZxZKq1MFc9mKApLa",
  "key6": "3M4ZCJaHWcZW5gJdeJ8pyQYkf1zrScBp4YT4CqedMwYoAJqRYRky7GP2ufnSiKqVM3y6XCxY3NCWdjD46fJuEZuX",
  "key7": "ZU7sWRFdJycYsnn38rf2VJjdBCNkv6SJu2GusFBM87qhg78Tc9ihw6JiTfiHse6ALNnSX1ePa7UEycxtQW8jqfj",
  "key8": "3qkEezfhvrQ9nwGKB7NPa9MaECbg4gTJtHUvu15n2Eoa3BRZCD9CMm3z2LQKZ4z2pRLHJuaU2kDXvzpK8brfcNht",
  "key9": "24DreVR1L6b3iiudCgrQCT8QstHiRpVMaR5psqmpKixJzLFMqrkA5vZCLLPPBMpsBSF1Yv6xuTzKpyhcBGTFBXyh",
  "key10": "4yt11SUR1DvbRKDAX2vXmnEVed82ySpZJWGsYZXh1UpZwphnrXEAXuD32yXKctY9Vnk6dcwT6eWasEGMoUxw6Xk4",
  "key11": "EeiEdT4aE5SH4yhyYLikSDCoT7GFPVJ8z1wSPjzLYW6nihendsKg3n9z4vyMToRjVm7vAcdbtn3A2scCStx4nUq",
  "key12": "25oYwTtFXnH7vm58Zfh8eWykkhc54yEHsChz8mLipwdVfi3qzzsqdrvNeJwjrjSZt5G4JE3RAdNc9avmEzw3PCbb",
  "key13": "65oN6emQNd888jdkX7mbEa7JwBMd5898rnsutQjB9te7ofV5kjYLSYRfDcND8ugjGUQhfjuFrpzZb1mcKjXji3MQ",
  "key14": "2tM7XyntDkCuo8yRfFiZLFXYwAYmZ8WKpDrzDKtsEYyB4C1DqUTtMp59GA6xFD8y9tLDsxTNrr5YTmwhrC2B7VN2",
  "key15": "3EfxgnEkyUmNbccdFurdgWaB8HRukxNUPJPzaF9T58f4f8EGeyEhFAMQJd8eCA3ZALGRLTvVeKHEvgCnVKUnqp7S",
  "key16": "2XtWGNZN7RanGRr9REDG6n1KxFCMhC4UUhgwD5TBeiqTaYYDaQcEpe88N3a185C9H3uw3Gu62VUFD2UjgrywPgyr",
  "key17": "4zSEqEbz1nQmdHJhhEhHodfZhmzGmfnT2uSzY8a6ay8AEuUYTTP9tNEfSEjBALXyCHS5S5BGiknyBCtX6C4kWJCT",
  "key18": "kMa1GF8PU33A1QX83ua5TEgCSCcNvi5uZwohqcLYk31ANM6PebaxRe1pZBV3kMcsUfvmJFKpPx8CFN53nvkb77m",
  "key19": "2BX6cEV5y1L1ouJ3HZF8mq2pePt5LatypetYCPbqzanpmQKiM2zppayRMfXfLigBVbWvxaGq2ag3h3Sgi2RUGuwQ",
  "key20": "3js9vWz7RpbGHVNVVaCf3ManXBiYNr28At5iBkyWn1xcBQXSWXYBfZU285rB5NU3JYqsptMcVaxY4NPcgQwaZsLU",
  "key21": "3ihiopnkbtfLgqDiUUK9rBH2icn6Z4t9VaZRsv7KQMktW8C1J2TXZdBfzxGiiPNo99pP2tM2jKEFRphk8qFFsL5w",
  "key22": "1oBvJV6Cy4Zew4F9Dfpqw1C4mkBCtwMbEPFp1cqaNcvqXurd4xseFXU1uTzu6XZi6eh3gcArGSjsULrEuJxrz9y",
  "key23": "4oEKhW1cpJGq2BUP6UVyCUvHwKuHqqVnwZqmbtQLou7E4G4cyebvj1XnpUDMYnsioLjxjf6pGvDiA7dgL6JbdZNZ",
  "key24": "44ztcnuf2W7AYFUZXK5jZqdCj1raVLE4cyuA1SDbHgKgwnVfTx6yWjQzc1RqFKr1HQAS6eJX8i4V4PWfy425pBdD",
  "key25": "5QX3vrPZJ5oTymjnZG2y7m2QqjoFBxXEHTzHiaELAUqfHwaVYHhjVFi6ddT7ry8rFA3D1gbWP8ytxWrkyAPJSbqc",
  "key26": "4DDzEBhUAD4xFQ9k8mYAoxr9iGCCSFNbnfWWQGHzAyFaSmuX6Ed96KP5oAEtvLWqthGMvWHkRfbutr9EmcgkHr8t",
  "key27": "4J62yisMsj9HpAQEgSKcZQK71Neyqs2QE9FUAD725SsrUvkDyMKPLYKmrRjp76jCwu24DaX8YBMqPSLgZrRmGVVZ",
  "key28": "dUX7oTBuZoC1dSzQ5XYfnSoAaNynSatV7NGpQ6tciBQwKyyQ6vmFSbWCELjX2mYQAQiUpDXBZbYvDZLjmZNvpn6",
  "key29": "4XpqG8NkB7akCRWa2W5mwwbu1Es458Ri8dPNmNNHyw3qY34nAM7tAbMsUK6VNSGHbDnAjrsPh9a2VbmKLNvbkiob",
  "key30": "4GwrmtG2u3wDYjCuENAEyL7ZfpSDyzoJfs3dHtF5DaQbGAFcGtvwgEgHSveKy3ZH3PnbPe6aHMDHaypDnStVXRQ3",
  "key31": "hLtMZt2vXARdBp3k8JgZzgRwPk6yRxwERe2HupmN9Yo83z8Mpqa6wBma4n9xrdKbBWjcSgU57XaU2U2n3uL1GGy",
  "key32": "2juPB3N1jh3y8J2Zxf86gta2R2XQsbn8Z1g9tJ5kLs4b8DJxzNiSuuB49rXQwwJWgC23wHB3Pzv16WZt43MQbKZX",
  "key33": "5FheZrG2xzDTix2pr4YQAjLHdinrt9WeUdJoT4bbGJAeYGP4XG51Nb5qxCwZ7gaZF1Hh15vACCMmsPNXj6nBggwE",
  "key34": "4fp9s6jtswJp5DrNqBVu2pzcsfRWcnDAzjt9kPnTFT92vHJV6PhDqAK8YK6Wg1i7BCuTotRnyNnAVmMbuqjwNGUv",
  "key35": "4v8guhk9qgEk53wtHVp4Lp3xPpQUaJ957uVDjmxUwyXFrThsus28fVzviCPBHdkopsXgbq11pgR63CLu6CkQtCwc",
  "key36": "3bF9tD1iZvF5q2u8wnSfmTadzqCpPZ64VTPyZoFSMffViZLPC62gWCduEcfBfrzVgPftHobSNSEApvBaofZ9Kqxd",
  "key37": "4vCJQqwcFAStu5K2LrMM76boYRVsxLe2sVuswmoyUT3gt55zKVodHKpuv5AFBS71d2By3yiF4Xt1SRjpoQmT3BZs",
  "key38": "3yXzyEDhcG6x1xammT8D5PPNMqErdtwV692WLVYVuxRAUwmBE9SFS8EciNUD8H1jyypnWwUZ2R34U5ChVjZzQbxm",
  "key39": "327v4Pe4TpNsyKCLbtGestYemgPEqSgXSx5S8qPFSVRU8CL6dLFbTc8PUfiAtWj42wxAVRf5KqT6RCZ3gYEgRY5M"
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
