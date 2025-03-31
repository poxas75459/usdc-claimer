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
    "2SMz6B5e1aXEKxQe1rCHg9uPBwEsyQKLvWiRfXJkARJgtABP463zUHjja7ezo6FT5ziPwj5NksfJ1xW78ci4qqc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B8YXKHtwpmjAxET8jnExspK2L4Xbaybth7wbbEA6i49hYMov68k6UmK4DtMed6NDMNZZ5VtbmNFNM29EfS9egKK",
  "key1": "4XUFkdoAo9gg8DXw12u47zxGac7ZSMjiEhSkKK4VJrPma6h1YqAFLVkpDrSbjKPBVg2uscDhptPfaSeyzwRVhi6A",
  "key2": "4m4f1gQkUY6tBBF9WMMPDaP2YViGFnor4g13P5F9KKUcx3R6A6KVAN9n2nSk4S5vXwD7VYnpvjSFf7NUGchTGED8",
  "key3": "5PGNtRm3wVg7wiU7kDwiUzx1gqFGG3UrRBiHc3Cu45RmVxgRJQ26GRjpLmq33LyZGdQc9gQrfFnLoHUVx7byZLr5",
  "key4": "5yDadEj4PteAE6L7oddf9maUKtHZ34vfQFqk95ji7peLNKmnNbwtNjRA6Fxzbr5pCRZBSfzUQs66KNFEQhFfXKdY",
  "key5": "3dwfHjhE1Snh5mw6nJZCpWevRmyD6PqU5wqR9EWTHr6eU7oufuxJcej7fqdf78gGpHTvv2cxWmEXRLixMbUyCFCc",
  "key6": "3kmnbRaV2emT2FQ61WSLpct4EmBsjsBD5kVFySBaFEcJeKicPexSU7at56JyyQsysAobfaTXthUaZZFgkaCKp25",
  "key7": "22ziby2zMN6W3bSzRgeFFALtcDNWk9F98s5BQdZnbj85Hdwedh1JnKaAr5VvFgJctP9UY6BtbyekRDUhgx9mLKgh",
  "key8": "4eHHRYnL9PMRHx1zsLAxLYNL1DWB3Cgpo7DZgz8oT32JcVDvZH8gBByS39e8ijgqk2t4GdJ2YT97yxFVkU2pAVmA",
  "key9": "3497iuL4erTzjzg1xJkSw96ywuY5ftDyA3jreNWp927iWQ8qpA2GY2UsXAJtgTtfUmiDy1TVh2iedpNsT1oUaGjs",
  "key10": "32WmCirrevQV8FXJbFvXrRjdwWLmAKqh7ZL9uUqJ1Xfm5KJ1QAD72rZKrdBL8NnMGCg7RWeZCaEhiynoBumxRVou",
  "key11": "4Evw5UUQYptKNkngFP944Q4dgVoXjc8SNFDgRwAQQxYWjNtL2cFZRvXAKGoRKyscdjHoEfw7ihaRpdEguaAhiCoL",
  "key12": "645zL9cGNYHCiHQXHigEMoaVYYKQe1X8PR1wFt72vRksEfmDMEvRGP9zYomwf4Pupw2i5ntNtrnHSfHg3SPWd6UY",
  "key13": "4L7FTs7A5d7j8TkwNFL1GPYS6sfXo6CijdmtqN6bfs7vgC2VCSZG6SjMXpR1JUHyHcEyomZFAVF1pAnHhmP5a8aM",
  "key14": "2RfZVYc6qxCmBzeKg5vwHNfUCo9caNGyENTmuH5QBPASEJLfuDAzrKuLov82fWboko47TQkWy6iVj3kvXhH1snVu",
  "key15": "32tCNpVieyn7RP587bjJCSrwVFNwiKXSoAPQjkQvun53Wtjbgqqsb6vxCNi6xJQt82sY3eDcDEEjYnSonnEhxt7j",
  "key16": "2CdyogVtYThvLS3qEh5T7bytCsCVVANyMojTGX2vMXFjAxH6VqAxjtekz5CesMpTm1ng7zZGroZyepFjeaYruEBB",
  "key17": "3mnP45sXgufov5j3rcPBNPouEqdPGX5qxEeuuunadPKeHUK4B5apEYPjXRS2wQXxwx7Qb8erTJNdKh3R3paKR3Vz",
  "key18": "23hTCMe9fHwQPJAVTxsknwY6g4YogFX2E4W3RPgaYUEaVmLKpW2UfPt9aVoWnynnX82Fbkz4gHozT5wZoW4Pxwbb",
  "key19": "44eUNYMVbUxxqYUzWh9BfHikzbEHMnScceCZCcdMP3iwaoikhaQn2o91SiP6quKYeA3DGecEAaan5YaXVP694q8P",
  "key20": "4G3HxSZ3jGnurP3MQRBCZJKPi6o2A1KKoUyZ6aPwWVXEn2bWWhwi1hUkfYp3uTCNJyzo6dYjNcXzNCSjQAnb6SD",
  "key21": "LqAYuWeUM6hkFzvinL4pvDKXm98AnJVVjNk6kzuiiQ3MyAu2voz5m9Zs3LTsT4pozV5e1mhRfQaJNYNtD5pWy68",
  "key22": "mw6MPuJjPvWhTzHZ9U9cgFUBQ7ciPbsCHdYJ9p5PfpEza4EWUJdUHpHhURFJdF1Ux3g5gamizXCX4XG1Gp7rDyw",
  "key23": "31TMQJE8r6X6QJ9Gcq8nb5JP9aES7hu5c52pYAoPMWjxXyyH2TYx5svF7MPwud4SF6iT3mS72HkLz5WKTmXLBYF9",
  "key24": "3C8HwhcfWFUqwxN1UpABykpvW4fMxTuvnbLfcZSkFowwBhtPNw5fytHvwGKkcgXvVPryh31SRWx56UiYRauyccM2",
  "key25": "c96DP1APLARegbeA4GG99ZCbrgeBbuT7f5YoffVpkVoj5rPxybpbKMsJoAvQMyou6hzMwuQcG1CfyhdJBBxEsJ3",
  "key26": "5nrHG9jW9MJEWZwbUyG2i4ELB2rzpPvUWoqH8U3q6ZbLCRiy8TfoEFkyQpWoBYp626XERhiMWEMEvTFE7mK3cyy8",
  "key27": "2Mv74ZjMwKtWNeCsnBSEp1FB21CCh9eDzQXEMHGjnQEjVuxyMYLzVNaaD832Cikov3p98wGLFC8wGVSoWJmzfTgs",
  "key28": "3UkoXUX1fjGys4mGaF3XHL3Ft9jSsCdPXph8gZnZZpXRDVpcQF7bviK6ocPTSAknDmoSJkVXprmQHr2FLQ7JEGjH",
  "key29": "4mVZFxCy1qHhmPJi9zDJUfCwXaG266h8rWUBfc5XARp6T6EbkzTxu18Pddx5R9ge2piVJ3vjkGkS9ydGruq693sa",
  "key30": "dCmuNPntBRizrvH1w3rrMHF9cSBYzpzQmddXcX2ymQ4k1bfzrp3pvctrQqko3dtJkcpoWeNGHwdkJuWkgQK6hG4",
  "key31": "Ew3dxCS8T7YnmtpmAEKaTYUyZn8shxBF6a1KV1mC6SsCcR7tCtMCC5fHfGEuJu9y5beFvSN9xr2Zv7mwPadQ6u2",
  "key32": "3vYMRBVBmKLrCJABLYFvLantT4jYhus8Cipv9A2dYNjFDmAu3oeT63dw6XgyucchJULMub5xWdUDDEey9aLfnK3p",
  "key33": "2T7uLGt9tDCfjqgZDonMJhpENbh64PTxVndMAUjLNjDWq2dUsGRdLcdePiydmFSCGhuFNWCAMUo1w3j6Coi1s11H",
  "key34": "4dSaNtEv4xV21ELL7eRaNMK9cyYgxhdeuucYDoEgQG474QfP1LDVxhfwGqkYxkMJ5EYrxHLym9HprCiGpo3YUtEh",
  "key35": "EDurwHb5MqfibqVpsSJPX3Ts3ZaQsmvikWg17DkJXnwMiKshuW7zqcZWDSLyUnNCrL3C2NVikTLCt2TGUkr3qAr",
  "key36": "29B5KHH4zppMw7D1E8EMpfHPjckK6wEKrdGNSH6qa47ybs3kwXtSMzSUbDUR1an7NLEeiYEAHjDk5JqK61fybrwM",
  "key37": "2fUQqUmsRycctoCxQq5CNrAuNMZjoMU7c9bCnNp6cELDsCaWG6sX6hPQeBvns5X3BooVizhDogxs8c3dfsB8jXpG",
  "key38": "5EurKSAeHviBSdpsp5coEMstwFYGhZDJD3C6zGTgtLsYWmZXQzmUUCeJmeL22JzAvEcjuLMLar7usQnpe74KgaLg",
  "key39": "5vzK1eYqgXLzZnfhuN1kMVjkmcQLNgnMznwGH6fCAdc648yoiriS2ur1VxmLi8HYUiGcLnuWR3AUyvtP1897qYPT",
  "key40": "52DVTWcq12mxvdZWVZCiR87UPGdZv2DPCPmsF4ewUbpsXrWvYMD3RfgGfR2aQxTW2tA2eAx7EjuNssV5ZWQ8o8Ew",
  "key41": "59z6eHrth3YmF4R8bC1zjf5SVXwNDQ9UCUBK3VbrYDBCgwJByZEhFUbmxzSXQAwVj3bRfF3zdvHmU4UmPoQB1Mgy",
  "key42": "4iE6jGcnSwgqBM68MnCLcg5kE9T5bHVN4tx2AJdU6vbg1rN1kmXTxYiAZG7irsALJ9L7hCE6U9to5tWcdyxvYUJS",
  "key43": "3HcgoqZ3VeB2zfFrZZmtWwmTrDZRiJQg5H7TVWpbNHZtYkkU7GtgXitJbz8eNL5th7Vo8NVhEMn1TrN1sXjk58q",
  "key44": "61QS1T8Bc2rR4PzTaG8KwVwcukUr3Jp3ciHuiSHL4ZpMB6N53v92bSREXnF1vDSBGfBT3F6NRfWrWxmnK2ZtoRAP",
  "key45": "q5dtQDRRWZ9SP3RLE7Az8kovTYEtTj9fryN2tdhLDLxB5FCWbQeYa87wHBMRLWDs7johZvBSnLajdrCYFLTCvZM",
  "key46": "NQnP5b1hSGrgsawcv5hGc6Eb9Zbm75hGAi66NmRbGkqHHEzTnigpPGZApSEfVfJsfthsMK3tJ9cFkvBXfhZQS94",
  "key47": "5nWLv4vb8kizCLBpzXHT85vFr6S78pKjAb14e7ADckyUEE2RZeZdss56uWNo5224gGWRMMhf6TxhYKrFspj2mhGj",
  "key48": "3wJUP4ErRv4APLedoxfhge5dbU2zUWBCm3G6rfGZWG6MnkAciYNSTfneHYFn36m12CSMwZWdYzYSYnwdMVNjd4xU"
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
