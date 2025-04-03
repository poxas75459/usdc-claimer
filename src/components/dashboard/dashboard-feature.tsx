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
    "3Sv3cAvEt7QFLSNSAVtrxHjFNLoM9EGNKzwTb8fDJSiKwuNS5vxMbPxaFA6LjfpqyUu9jwQsAzpW7cazL7FLLWkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L29cwhzmr2g2YL1wPWdjTdK7gYoXhZD3JxLb8QaR1NhxBEXeGocD2f4gg3iAzQonSqReiyU9kYaweZ8mC5bE7ko",
  "key1": "38ez4ov4sTnkzz5RosFv622N26fyaVagYKVrt1dMbed5igi87Sqhy9KSscXoSqmCW88LhNpm7TQBeiQZ9mWjHExL",
  "key2": "5qc8dpuD5g9HXyxbfETqgj5mQGBsK5yh4XN8ZWDGu84Aa2huxQUFk5H42gt1FsZ55f59LZiwsE1PyvQoxEk17LK6",
  "key3": "38yobB9WWgeC4RpURvuvheotoSacuiMj1WeoGC2V9xUf8goDfUDouvsBufrV9R5s5DtV1iDyZpBxUyq1jGMyMYuP",
  "key4": "3DVRT6rVGxgYxP1Qo1PfX1zTHUZ8wKWpjKSvVKeqLT85nUNdU1wUcwUm9BvomhJDRwv7vrbGBGndK9qGekPWX93M",
  "key5": "4tjcfujj9oCXMKcqYYuer9wBMps6EauPRKWHX7chU4V2RXzHtZNivSEHv2fiqwWHWW5yXeuUcAg9vg3YMCSLDTnw",
  "key6": "5vpQRz7uJFDKyvy1WaVmzXVRSh24fnTkTxFFWxRyzaCtZnCFjH2zNd2GWhkbd62f24ybvRvTZYQXs4DbEjFbwwQg",
  "key7": "2kqeWZLA3bsC5nJXe8q87GYo58iDvz2erPUrXCkBhEFZWVajr8D79FJMf2Jn16Sgb7tPYzneMhR72VeyjqxWjH4f",
  "key8": "4SY8YseXZsj8K9BjhhVXShdBrvuppJDmp8QYYa56uLGxpzt6AWzxn1RRQMyHBMpKVbTcQkppwL89V7JbuoSUqtVW",
  "key9": "yALfXAdbzSMhiGPrK7aVXkdLSW39DYTE1aGkcUrNtRMTcwUAuMpEuD1C6PCzLHn6wT7sc1K6pAdgn1XwbUMyDnz",
  "key10": "5bg73ryjfTifmvBfvMKvvQJitgGKjktzMyaYyKmrne7GSRJCFqz6C2hSaik6H1XoSZoC4UaKfWEPQ1Xs2uKi8w9y",
  "key11": "57RmgSp4RKoPUdePnEcZzctcXeW3EXkEUkr9FSz3j6W6kHnhh3GAuxPuh9oKLudEvEiT4u3MbEuu4znvmhBhyUpS",
  "key12": "9oTQp11s7jZav4GFMYcZE8MAby68z7nWVxEVwN9biWCLy7U4Txm1jJCs82HvpFHpTsrxB9Wkv35KHR1LVWHgGbc",
  "key13": "kN1ymFc98aUbAt7mDzZAHhzgAbbDm5aFXjft7vS1Jg8jsSzo6Bk3r1ycyVAjxTW5WYhJZSMShcRwvzj3BpWHHup",
  "key14": "3DNvi1MX6ArdQ1iVpezeHDWhdkSnB89yq3eEDqUX9tbZGru3CKHeHoSVanDAMeovh4TUZ7VziS3oHZpEqk62rfYE",
  "key15": "2hNAjKz3EVcZavJHzPr1nHkZGjiNax1nHQ96rdavvJXA2dp9fCzphpyNnGkHxUqGuSm6HzypvtM216g1ozS6EE5r",
  "key16": "5BYD34S2t8baqQZPXAyP2ARpstLcyq3VdjSdNR3RnzVXNJxegrXsbJdqz4UWKroiAo8bFoF7sRQk69Bmiqp22Jpd",
  "key17": "5B5ir61GAwRqGxRHNprGeZ5Cdco75TH9XVaasAc8hjJ3EWBvdxPvoCqKXeTxvuKGujyMZiiFcFbiqF1mERgFHk3M",
  "key18": "wnoSLBAFbPcoZmcfnrw2SY9X9PztrZyRaUcAVanuEBMwuP4UHUDSqJvmkG3tNzpofTKmWJCsu272eQDQPjMgCtG",
  "key19": "441aGoYXeSZatG9sYSFECmhX1Rq8vurjinE7GFTdMyxR3iq8TMj4RCCTbxdVh9utZw2Mr6qaqptarj9YLm9pdcVP",
  "key20": "47YYvUNAtNno6mYk9KoUsp82CFCTQmVZfNxMYCFfjecTxX6irJnAqnDfjXEm6FwvEY5nBNDYGPdEVukdFCNhLTUw",
  "key21": "3ByaTr3pP7M8n6UmoL2crcZ8rLKFgKLZrJLCNnmagVyQrpqz8BXCK2QpCjBCpjPQkQ6nwe2iLJSEawQS8cwF4Ate",
  "key22": "2GPv7XWCaxLazSu83EpoMfw1hMy8TM6NhUsCM68JzC59pYMJRXL4QLAGHnjc6voczvTVoYqx3BR1CXYCqoMAsgAu",
  "key23": "4dcMQjxknyxPx356uVTv6wa87SkZUKATTHVH27YZ8dDkk8qgoELHRjLrzAcPFoeURP6hVjVhqzBqfvn8WJxwz3vb",
  "key24": "5haKMfueDHV2tuHFTcWZcZBPxi1jQQxt82Rjp6kNLjLUbaXHRt4CeBvgzPNGVJfewYoHB6epTjnvdSjFYRbvodNQ",
  "key25": "4Q8Ld3bXZqMwHCetSotJoYskBryK2VtenwUyPaXCsoUr8DHKiB1usDuiVnJ3SVkh5uMCAcJwWVdVy14y1Uc6u7Df",
  "key26": "4nDrJ8ATqTMWBVmcct8t3EGJLmgqrgaVLp5mrW5Hoz9QGzC4Zbop4A2skggY94QpECBcM9GcfK2hMVSc4AqQj7Rv",
  "key27": "656KPa1QZ37erRMD1vpjnkxpxzY4wpm2Z65sVFqbP1VRZRRoZomBerLt1UMJG5JfhLWDC2VcAhdXYZU8ThZmWdma",
  "key28": "5MYx1dTTLh6Qjzi9bCzmj6x6CxBi1r1HqGc67LTdPp4D1s8K4FevPa8qzNiSbJAft4AZ91QWeX64upn7mpx9ATKu",
  "key29": "5iWN9LeU9wBquaB7PHUG2GjjZLgrbJJyUmYr9LU6uLmmicjTCbcaBocwoaMw1qbnjVgEvn4HPFHdDFsDAAvx52Fp",
  "key30": "5i8Pa44P7mYG2L5PP2ax3ijg9pY6ZikQmAK2eG3aMMVyqpAsCKmfP4nNpmmsMdrAYVFLp7SEcCVzzvrDe5KjJwrU",
  "key31": "2ZpgHr1nsxnt6wx5SEUb7HvZDemhrqGJ6CU5JCvKRdmA39Np7Qk1dDW65NuZxPecm1827rZqRA3wajhmyupweaGd",
  "key32": "3216QB4Ji1oZsTZrRGdenTXxg4bgrfw3n3BSbSmoqHPnAPLrwz7oc7EAzKFThZ6B2YHfMfXetXXbNrFnfSEwfHVa",
  "key33": "5LKyrFejsxUjjCAXutxrQj7zEKGZ2c18PUm6xoBfuEJQcrLRR1cwGJybDc6xFcBNnu9rMJxmQ3M5MNKzqzwqUZQk",
  "key34": "2abexiNXqCww3pR7sLoRw9PbWX5qVsR8mTeEw41gFBCbJwFuakcAZNzeTCvD3PEjJtwjUg2L7txEgatV4Af91fDE",
  "key35": "5B35NmxdeV9gxM6CrGEUhtv3sqYcBGrfdKJdBDUT5MgQsuuPjW5tqxybraND9wR9nnM3YHqfWkL7hrLektZBSD6v",
  "key36": "JqfeqAJj1nazu6r99Pt99ArZBK2QmQtji8uq52yAjkfKNQmccagfptTsTTCoZzPyMjSvPUDbh22bWVYJFmKuzX6",
  "key37": "5ibe7Vi2B8HCairMdrbkzym5f25jZ2mKuRHWxkeS6A3dBe3hUEAKoYMS1uyUTEdRLCt862M5ZFDqzL6zSYN1Tpt3",
  "key38": "4nom18K16DZymzxqctEus8pGsJk7c9BADn3mZp5PSquavvxTSedmxeaW3tLRAxAcEyvPnr71z9VKTPYytCKzvBo5",
  "key39": "3MitRPe3UeSeZmetMjUphwkc4VziCpvm3bEjkdeX2hokV2ztFxejYqTb2Z1sJRWiGakCGDJswhBjxEo22z3wsjtb",
  "key40": "298QPnwasVBxfRdxy38on3hFoKkGUB47GaENxJUmiPce1fN9Dqf4xuZ8BeyVYur3j5ALhBirvSf9Zck6NZodL9q8",
  "key41": "5jiL2mPmdEU1fabm9dLQ5woYHTiCrdgqTY1czxrxYxghkhokNhYULkpcni4YSK7Msh3GfEYKKQvwwyGeoU8eAuFw",
  "key42": "57JEwpnCTm2aMJpo1uMKp9EiYrxABrKoeDStpxhPczMq4Y1eBhrQkn2eTZySR5MgSh5CX9ipZfyCrR7FQV7K1BEs",
  "key43": "4qDaLjXNqemisGy8CAXyyt1yPpGkxMAo9WSDBx5WKKdPGELJssXqMp3Di9bXGN2bwzem5fjqCpVc2oJ2gvjuanqM",
  "key44": "2482KwSfdJhYGjoZLSPSrvVurEKw5WfLu56Qy24L8WLHXEb697y1gb52BPyqSVWJuXAw6WHKc2MKaFnKHTk7sFEq",
  "key45": "5Xgh2CNNHcriuJC5SJ4AZfx9qEb1s5aSSrci2twjfni8KVTBh7XotUx2KHWgQLuP8We9SKA1Emot2L8FuRx1WvZK",
  "key46": "g3eqq66maY9wyhLSyoLF8VThRJMrmVgKp3hqdZ5bCtmkEEfi189UXLhPkfsWjM9ZRvP2J6t5AjRUCxDurCaxK5Q",
  "key47": "3NYe6KThDxjgZ4v3RrxH1WAv4hEgfPGF1UXJubhQApwsZum2hfFtZwN69V2SMvCiWHuibZW1GRT4kUfxyZNZVKpk"
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
