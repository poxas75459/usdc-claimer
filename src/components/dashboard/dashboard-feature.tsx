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
    "5TZwdQivYp2YTPuyf1mn6jomuovNpqYtoJykYBw1FoYjcYZRXfXNvqJjLo1whndN9t9fqbSdDTsViyFFgqEqVA1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YBSNzun9P6rmREUmwBFDXwevhk9GjKimwsCEpkUCxDtFi57KT36bnXBAUqfRuXMimvBQVWYiqpY1EtLaH9rUZGo",
  "key1": "43Q6jZnkQd1NPfcJA25gweuQxu4i6gdbbsX1mXuZksYrJzbppAdkiwT94PHSgXNoRfF2DqmjrSANp7UbkCJ81LH9",
  "key2": "5WS4RdqVKUM1Us8GbPmSkiFDMDpHsuEf6ZrniWQRfaJtzxdnieY6DbYaPJFqpHUj3BodXgu886v4tz9cq9diLsBX",
  "key3": "5iBQm6BGmpdAmeDHLinHwnzVKPWQeJg8Rd9MahUjhxXWv2wMxQaHqjeKXEhZz916iZiMunryFh3mBANptJFnEetd",
  "key4": "5fXwzLD6idab5xaLSAL57TVNm3XAYoU1z7FoA26Pj6QX4fv7WmdJ1FD8ck81wi7hSoLCtZgF7UNazUbofrLjQAgV",
  "key5": "2trrhkaNUe7uTqLRuZHk3NX396J2MwWVXQEssyRX8HKAAawFGUrwJ43SoihQ7XrPgnSxGYXSkakzxK2sQyJNrF7n",
  "key6": "3tTRjDycYqWLgHfLuW4jKC6iQKKehNVUdqs4VPfb4rfYMaWP6wrjU3psiwpDXiPJSvohSS7n5DQXhR8pSoUua2Nt",
  "key7": "3kQQTFDXT1yu9wXGp3ioJUJ9rbMM9AkzJvnXCvdrtYTT7guNQw8y4DPo95xQHSVCMmNESqiPkxV8uMNZ94CC8FvS",
  "key8": "2oF8iEy5HJwm3xwBCXFArVcRuhyZhftJWmGKKw7rT8zW698vU3d97fKtiLFxKbt2UZKrFtWoAQhBATPnQ6HU6u88",
  "key9": "4vxxEXRyA1Pgn6UuYEVY9W9Rqk7WsvScYmTzHbJ2KMh1vdN4bGxg3YiLA5Y1NzpuKdG7XytfkfZmsEnSdbVZazCe",
  "key10": "2WCZZ2zia1qWfh6PwYGWbNEuB5PyMoUYbMmUGCdMp8K6eQGWaKH7dyDeajvjgeMue889uzZaEF7oYcL39rhoPJka",
  "key11": "5gCTLcfvTKrywQVmEUQNbt6YTfdgXsAH5cbDz44FPmKiNzJrzEfx3YRtZy8vQRytvB7dxx2X1Mae37BQf6vNVmSW",
  "key12": "4ujU6e1cduDBqTzGzW2Nyy2k3MDYmv2M4eqYvpaxyNm5zNgsM2vFWpq9Bk5z4JKxPngY9vcFhCMhEmx5NuNsBCdg",
  "key13": "zw6LVHeZt2ZGMnVQrbr7ZCMzHw3D9YQ5VmNwLiGHqyujgMYFtciVVv5gHw1nCEYCNChdyU2q4JbZBMtyX2q66cv",
  "key14": "3dx9FFEtRp98be47qdyeMTfbHFxrETc1KpuLptukk73B8qFLYScD9Y2147L3cf76K2qjJ9EkEDXp7VdXYLCerkBh",
  "key15": "3yj2Br9HTTCrNVdwXtzWNekfHDVNkyzoPUje1Pste1mWLsYrrBbdkE781gzv9EMSX2mFVMRjF5Ty7wZi2o3ZsSni",
  "key16": "5PLm5x3GDpvyYgb9c3NdaJGd7aGS9sfih4pGfpcsCH7HuYbxzjEryJvKQ7hb8ydBwgwF2Z9NGz9PCxzGshEDrV8n",
  "key17": "3ncTDdYo7jtJwUxBucidXh9XhfZsDZvCW1C5MdWWJKyLjb6J8BJZ58yz5mdeJVqNo7eKAcffzagR7yzURAVKQbmH",
  "key18": "2wVdcfAL9NtmDLabCJyjxTXapLmapJqFBZ2ihi5jyEccGCUJ8PAfT3FAcUEVFrTT81jDSAubbRGi7Ahp9XURJTZU",
  "key19": "5dr6ACFarcjTcDfRLGcWY21iFgxLnpZHMMQZ6EAWL6Y5fPRqGJuZLdCGBWHYNuC5MfyQqYsvVoeEGNpmmpcL1x7j",
  "key20": "6446GLJo7jVGz4N6R5wAPQ5BSdm7tJzcDAfL8XyK5mnvzGf6Ut1PU1QPvroGQnWTtkV72WciGryCg5VC1M2VMT7S",
  "key21": "242mP9EXYZ1f35wpxvZBehQVoFr1V8nKz5JaUeoeStoCdopvwSYQeNRYjfQGXmPv5h91KcZaL4kX4V9rKedv7FM4",
  "key22": "nCkU43V1wN5annoBwatQMb1iTzhwWHpgzyyW2BwNX7ij6TWvoihSVYx94Z6kNUvJYBW9kKcTb6T14sJp5TWcCus",
  "key23": "3zY4ZtmXXBcwKvHZX6Naq2G7Qu8ydqLCpRPpyAxeYEmMFWmVbn2DY9Whu3VrtZkz3TDhvgxTsi5s4RJAxEJah6gg",
  "key24": "66pUsr5DEdRv8kDq1NQY1MCQyKe75EYdKv8KWWVpaw1HVeeyhH3UnGNrq5N89F9aKehjh6YEf4eFVnH1sryAnZA7",
  "key25": "4JPmeALGnopt9M3aQFbsQjX1s5WwscBedsXtcAPgYQE2aWQh5gESngCF82WWopTFmktZ8sMmFBfNJJCwHM1A2TCh",
  "key26": "5AVbnAMUZkeFHu42EtG76kaMHUbmn1XNkVNVS5tb1A3e5mes9ewMr2axiG1RAFuyMRuTfMSHP7RLNHJJg5yzTAYF",
  "key27": "3uBopxDmG6hLjssfYaWpPcAHz9zoRzgrJzUe7k9EMHDKYZfpga87ajr4SRbcRsy3tUfPNi9JkyqWpVMrrHepfQFX",
  "key28": "xXL8pkhqvfWosWGZhpgb8h3CjWd7bFyz73Uukr9ca62bVPZutLqZ8z9obkvxL5qGHYk6StxSnG4FzJ7xBd42xw3",
  "key29": "vTfeUWugRSjKDUzewmdLwPNad4bNnhWoHWH1mMm8HHw8tfdyYiByCrmPkyjYx9yMrDnoVpNWnW7AV2c4f6iUjff",
  "key30": "CDZLcw1tSYTXuVbckL8qcLTBHnFHUM9LGVo9C79uHCzGGcG4qESdXokHwnwvnniHqnLmLDFDRLqY5co4rNL92gS",
  "key31": "2teADcX7TZDhrChrxJsayZTQKgjj7XE7icgnEM8VyuxKpcNxoqtz7b6mvKLUSQ67m713AzUFRXVo1nBd3fMBDbPQ",
  "key32": "2p4j9gcyiQDjojAmh51YmSPu2BQuRVwRVLh7RtNqacxDjkaB849SRMkNjn7cBJDMWx3wQKushNemy9sPT8ynAjoY",
  "key33": "4vcsrYuPhFNqv39gCeesmrASTQ7cHs22t6W3g7Syjao8e5xbjA1ijNaGGm2WErMeMTawrNrpESfC1Hig4hXxKo5x",
  "key34": "jpnJZ9xyBej96FDJB9Rqw8Z2KqFZkbZ1ZLixRCCdWyyyBRHSM158ACZJhaeJUWcGJu2238KwiZcdV95n5mPDjFj",
  "key35": "4bwUoMHYvrd1mi45m7EjQ8STtPGo6DJXkGDNrv3hbgTP25NxhnWhAGCfjMMccT7b6kuFrCKYTPkmCLv3JhwdhMPz",
  "key36": "5zpBmDr3VprEQD6AgE9JwkwZbDNRZabCuXtJRNKot9keuF87GgSdkJb6Ed16VkeRP3KYGzibL1hUMat1PwYxK8Vv",
  "key37": "2QKkPUpwqZs66PDANAPY8K84hUmiWHYGjbZFnUFRSPTa6VcqSbUUyU6CvzjWNdRmyPd1W3FoqJh3XibnLSJQVf8",
  "key38": "2SUFKYRhstukgV3pDb1gyoL1SZvNK4FzRDN1Kcs3zPFNox2rD8bQaZfuGwUNmh9BdLAys3bR8fhRyBUa9iDkJBK3",
  "key39": "eg53P4Vnh6WRdAha4tg9gfos6PKwrmC7ss3oXtqqyppURQE9qaDxFJfAM8B5q5dUN9HtPpAHZZmCk1BPZh7ZjfP",
  "key40": "5jBNPuRZQNqoNsiDM7mUAzrPfPQ3gqN2Sx6Vb356j8vG8CJGB1Rsk9Q9agxNFEqfdNG7ij828oLkVHqFP5cU8GBN",
  "key41": "2DavzTrnTWPetai3hHSyFy7CScoWmJMMx15Znc378j1nSK1vHHv2bqY312Xad1MV4sMvXcjrJA93fb2RbnNDztzr",
  "key42": "4VEEx8wBPgCWKf7tQoEVYb89DPSAu4YbPptrUFJ3DaMYQjCT186pGMg6SnrDQRNVvHkbtTSUFH4TtzANQyEghg2G",
  "key43": "3uAGuDygczAf9XiwUodBA3xLXBmH6yVDznextaLzzvR63bjCLx7hBgQXp3vE5H8nSa4YfJJpTPQLsjQAX6xvi6or",
  "key44": "2xB2tcxV68inewpV7W5uhTcHitVomMSybTYtPnHeDAUvzQydEwnKj1oTjqfPv57rxUjbHV9haH7VjGm6G2xxTqQD",
  "key45": "4FD3bmoCtseq6sVnBHmYF2JSu6syLShqDt6ebRrAKMnS5rL36N6WG7GUJ6iLkBvG9quGz7CwQby1R8ZpMsFbiHPY",
  "key46": "miHmhfCFM2P4fdEKm8LPcUXdTvJGVcMisdPvefwHVMQmVPf2AQaZKgLaqdu5qZ4bstvHCTRiKGi4CCatQJ5e1Xf"
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
