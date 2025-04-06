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
    "2LWHZkAezhjvVCFF1qizZKD4gQLX5PK5hyghC3iL46Nsc2VkdZBgHfudUQe1sMAzJSSiREQqNtTqujsX7xkg7Fmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PB1hrzAn5H9t6TsLHCnPaXo3PUiTqgY6G6WriHKT7d1RJLVUSig6CFG5ATfQaEwaGopi5JNWJgq7WAthNiEjv82",
  "key1": "3w59xaMFm7UWaMNjML88iPGWdGYKvt35uW2PPeSd7wHvNDeCRmcvuT6c5CgFM9kJvBhbvT154PTsSC9wP2cLAAnF",
  "key2": "3VMepB7QnGYv1bA9TbcWxHvfb3gz9FSfCzF1abSqzHm8S2SyJj1aPc8iDbpdXYVEJSiTkr3Jk64pCFnfjSCFS1t6",
  "key3": "5prpMAzwYyc4c8CbmRRaRxkdL9R28hyzMEi4HwcfRSB4VWHdwuzJ4VPwsftwYMTQS5jBRrhfzj2AaEeE4wULLebx",
  "key4": "3A41jbygf6YjErppyfMbk1xRi82d3UHzSaHS1tz6sZZaBFZxLRy4uf3QthWS9XV7vhxoorEuEqG1VCccmRxFimHs",
  "key5": "4ZBcgYBMweZ8eNRovueBA4xNdnuFLyeQTbzMGj3iGyUknzNA8nzeBMAnqw7GAaa79qFNrWhpTk7SgoGXjqFUmfQ1",
  "key6": "2ij3yW6KXSCjHbhws8ymFez3ZQRazZ7aat9c1mTruSZbXWs54Eo3LCws8dtBxesU2AeMCMYUokSc3MmCbzLe3mQK",
  "key7": "5ZoGXVtVZ8YdmT9f857K6D6aRsa2nbtErTW1P1ePM6f96Y3JVGXgRCwbZWTujc1iFfH3Wacebb3yPyCcvTKJKoPV",
  "key8": "3zyJEmChiHgCE7xCxPx3gXgfXBu7Tm3fC5ZYXPkfmF2nJ3HX9PzaDFa13cVFqRwRp6SbHiS4BH8Kams3L7Mpm9u3",
  "key9": "4zN1MLGH12kPaaiwa5ZxUYzVnhkZnfyoTZpGvU1PLXsmDFG25LWxecPk31jj2SwheMpdNrvHdsZZqMrdYf3gCsC4",
  "key10": "DpvNcv4EicmXk6qARV3uJnx5n4E68zP4raALUwnRDVWZfUPotBEueP29GTrTWhQnHAPkcpqLoXdvA4i8NdLMGsY",
  "key11": "3bnoZ2682fwZ3TqRYj89QDQCmC99qCzfFe65CMFsLBwyB6AKCieu1y5rYREzNPPm23KVtiAYHyRjCtyN6m6h37Vt",
  "key12": "5TWs5NBhUBoPskWTvE6v9fPJ77w1t3TR6zAXEFfVEh21ZovkF1CECrQRBwHLKektocygMCc2VPQkDStdmsBB3Qhz",
  "key13": "4GfywKmHjTVS5LfyRRmZsF7CtvPAyzqdxz3W37HzvpKrSugjcQBhfAb4WnzEPJ8q2DVPSPNED6RRhbV9dDDG77ai",
  "key14": "29k7LMzVEVaeycQk3v8Ubn14r92HgPjjb4cFTA2doXXxPD2V8fuyq91oE7TbAAkC96HJ73UaMTdCoqnxgkSMBX8w",
  "key15": "4yWRgrwQxJBBqCVDujJWsAMRmjZXPB4hF5e9XW7wJvwgs38Tzo68WnWWcCrXoXLnH1Hna5VFqgosM14xXkhYzX7T",
  "key16": "29HiYPaUJJ5LX1R7RogsvnhoPgiEZhNyH7Yy5CLDZMP6Z7ctf6E8SsvjW2rM4yCtfbtzMihz5DmnkdWNUJqUZQu3",
  "key17": "63mC3FiFYoWqbozFAwR6JK6dfwd4boWCv5AoSGvj9PHnj1BkQ6wSw5b8uWxNJDctPNWCoxmXEAHz9Nf2oaQuCydj",
  "key18": "64mpMYyMRQkfdZrMbJhr1adhisdi6Lvy8MEoc5KGFKfs7wWrttGqvk7ZMqXGFyxdLsXSkhukDxJEKYogoFmvvvh9",
  "key19": "4BdEGU5JEAqC5tohWTPacx7FqgsYRQ4iktd6f79tuFJMYLpgB71aUQnMwq9jJtuk3hVYjtMfQ6d6JNTq1mo9PWzc",
  "key20": "55qLGtMdn32PWgeWSRgZx7ddhKQEuzeEyh5qaywWyh8mG8rPEMyeewdhW6cdt1AJbYLNSA7i6PAZJi8RdPRD4QZP",
  "key21": "qvQGVF6vYc2yEgGsCaGCue8EAckWvkdkKfnVxb9EFgAbi2HB1KiG5iggBxhPX5jV3TPH2Z8rNmRGzeXkDQdmfLr",
  "key22": "4QUJUuX4Mfipz1WnDYAzexAaGj8iZAmicmMuK9sjBM1PfJJTwTMrdVYzmdEd1vWcuHauK7xVvZX8u5vjAZCe1BqA",
  "key23": "2wywki8vtpPFcDDJ2UqatARbRbjNqKo9NZAc6e12qKUrpfX4fQKFPEjTBuCW2BpVejBqUY4rKbXKVBF4833M9sWh",
  "key24": "4o7Zvt9FeQ5N5kynAxVdVWMrUUcvPow1RDqyitoahtS4mCdSUikFXbmYwiGqukfGgJYMo5tXZ4DRfQxtZvLaLzMT",
  "key25": "3p5dYh3MVgnwLnAFtWiupovGk6DneQojrEUbSNGV3mRMtLQkbePNN4R3wvQtdzTBSVa8jqGFgVvnizm6EwbF8T5s",
  "key26": "4kgLArkaCVgM6doBHJX1LvxrisSwEncK919Bj4qSp49m8zvUNMaA9AhWtfgGdvHBvvaPTVcWBFRPyt2sPoAWDmfK",
  "key27": "2DYv2qzrhkhdK53CUAg7UqAjAwMAG3ryVcjr6KnX1b394AoPPVuMFth1nDfoss41NjSwwBQspgQFGx4FWXfPkZDX",
  "key28": "4oCNQxoniamCsi7y4yrSbF9BFm7NuPmkQBSmrBhtwquqHLK8APok7e5FzAQGj6zUnBV8rCQzLJb8hHKSHFvNfDCU",
  "key29": "i7ThPRwzqtJzh7iARgjxMz5youuBca2NiL5etW8BtsKXozU6YwCbPgT8Kv8yaerRgpAvoa3du5dNkURXtgzvRPf",
  "key30": "5uVD2AfJvbfbFg3aTTSthoxkdPTN9NB6beFsV6KE4U4WosHpQRtwC9rqhoPTSnwd2xEZAoFMoazRrCWuNNTisYzm",
  "key31": "q7Mi7nuaXDAHWyL2ZfQCDTM7317bvh2xrbK12SdzJPQGWVDPVtjfuaNk4uk8M3qFJm1aDVwLbK9NTSsahnS2j88",
  "key32": "2uVxQbfKokiRGYLoo45CziBpnVAy4J7qr2vYGKA4ebXprwnene9y383HahkCckXN8XRe1kC1vtuAsjjEe4qWUDFA",
  "key33": "41V7obv99CEQnrQSWgaSUkXuSV2VzfSWQxLkyQrN1u62p3CUyjBCZ5hVnnXrv6Kbs1fso5MsQWDr4qnNogCaZgqC",
  "key34": "vM5grhidWzvjdFFewxMTuB2xfAYbYgZAurJFWNVuQHkkoUNMtSuXvkQ1roBwGMzwboPe9km3D39rwNLj6xKC3z2",
  "key35": "3Lk3rCoGDYmNDTeFczY4GfvFCUJA941T3txGFSaP2VGeHttiSJKvbY81o78JnZ5jNeXstoM5PzK8aAukF5nL6LMB",
  "key36": "mTP1Pt8mvL9DM2N3pjzLcWx8PWksG5QbjXuiYB48ePbRMEHYVhButvFbvWRu5UK7V2qvw9UsLhYVjQqsjRqaA36",
  "key37": "5coDQ95FgHPMSFPXe1Fi9to9kjz5zqkPt6WwbSdwrtDbEzPkj5Res33t3GeVJajcdLm6aaa6WEZhTGbtkMMMaW2f",
  "key38": "49DPDsC8x25H9fwFSp8vq9f7mxHr9R5FrpffJeu49FmZutxwYiNjsvoYNeYdgBycKLVZT52wJt2Rkr1JdBfFmmyo",
  "key39": "5uWZVt4CC7cTmaYijmDaJdDzTMLzY1Xy8meweCY97Dud3cMhcC9RKurCCLJT58oohhUsYQBaDVG5bgAYeHwSHTqi",
  "key40": "3VsLrW4bnvWyxqiziMSkc5jM8W8mB14aDL9AEoMQsgbeU3zR9Y7C8W4xSge2whVZiiK1g8xAFZ4SRbd8ZpChRurg",
  "key41": "475MYccHeXm9z1iCT2jC6kEBncWBuUXBT1Ap9tuV5Njjbmbn5EfobfT1AydXciDH7zcAgFKx4GshSRox6n1i8twt",
  "key42": "o19L2QYxyJBTHu3oUwasRMTUerZmNgSizZkE4pnwQ1rGNFLmYTK6pQJqQkCr2CDn7twKmEM4BFwT3WYMubYBhbv",
  "key43": "4JdPatevTiz62KiaKrS19yq56Hyeg2TkKizF7KvyGnHQqWi2D7kfy63m8wQq5Zq1QaWZYETZmPHEevejtmRxfLr6",
  "key44": "4TCVF8gGgbLHwHQ6xzsTspQb2m3dddi4iwy28z6WhN88NSensDTZpdoJHASRovC7YP5W6ivh4a2YWGuCdih9dvHN",
  "key45": "464kmfe4yr1YvnJfuWxKQZ28AiX2wg2nFTtv6bD1a6soAVxjfKTz4epAL4TzmLbCkbTHU7rKCNULKUNhnV8b17YX",
  "key46": "4mvYaxhb8M8LQQypP4pwgYspxrFbaFmYrhWuBTNQ3oCEdHyuf93FkvKCpqa64tV2dCfQCuqHJPcEjWpxrqBQvvA8",
  "key47": "2s3JzmmxERRZ8wCXpEUYvvSx7bM2yMhVfu3ZikEGKSWZDaqjf9zLpjQDc6QdK9wtAbhURs8mM2nYz4dRckDG2xiG",
  "key48": "2W6Ppff4q2jjyZDNZi5vrdjpv4WHHUXeNvJ1NBrMajs8FhPVZQfY4fptw3R5Abhr73bhmNepKCbhWmYBrsez5GNQ",
  "key49": "NC6My1PHhbX5CGNJ1DY65CXhDkeSMitDM83UsEwVwbZxZvYrY2XJcgZNviiNLeat4VftNRVdhHswuT7Z13XjFnX"
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
