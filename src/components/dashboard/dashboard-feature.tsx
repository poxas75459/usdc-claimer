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
    "em8qXu19MY2iknbv4tKk5iFoqnL5QtEUJudcFonES4tdZBgWPkpXuPbSXaKxbar2zREnmmY47btWp5qiao6nP2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qgqpBDJqqs46XGgkkPHKY4yZVVeEfLe8McHdWVZ8tR3YeZsAhLrLgGgM5iHWNiCXE8uKRhnCjAQvZZPtW1J9co2",
  "key1": "5n8ZtPkWoFbKV8oCZC5DvAmb7tZ4m9ks7S9Gbix314sTVhw6Le9JWz6qFo6RkXL26fv3xPnybRwXxtgvuKMsKEpG",
  "key2": "52xXnTytcUi6fRUcfmnxLqdqWHzP7NiPQDgWxNFkwvQc3fBSaX1Sha3EAd9t55AjE22fcGTFinN5mBJ4gmFtaRtR",
  "key3": "4HVexpCupXwbeKknek8K5WYfZEZFPPE79k3e7hGP9xxorkinFARG1vSZLEkpnPAPEF74giz4LH9RvhewqWLXtQL5",
  "key4": "4NCUGu6E4zeTaohPrXdHuizLAhR4z8MwCwzEYZh8osxCJ4DeYj6mW6HxzraaiFZ9gmLiS9d9YPVTFgSHQNuDAt8v",
  "key5": "5rh23CWNsbSUcLmrXJ7No7PELtrbcJSYVUNnDhmq6BLgNjPQoJ3zsz1LXBksBLj5hnLPUtDrTLpUoGBPkE2ZSnVr",
  "key6": "2gWmHwqqJ82vsZ4yMPDZsQtmRxrqFJGE2cAFsNvUqdRSLcD53jzhVTo2PbNC7SLBGAU7BHrsa14KN9fMqTqMZmm5",
  "key7": "2FzzrLMRimmNG2kuFQNqwYCBwcCZGAmXnAjyZQzuD5scuVjMhKXF6fFnvHfYnpkAPiXr4Yn3Zt85odkqq1v5dyzB",
  "key8": "62cd9HcwrV1nbqrWTtszsGGPR3uEvptST5Ys2WiqwBEjV4q3K4N5HznxW6ZSsG47NxUCvsgz6FcNBB2hxNGhCp4L",
  "key9": "GShZKdZgywBaKV7U3xW93uFpEmf4JtBoaPWNjZJBsTAktpkaeRrNQHMDQaWYDtt1QJvXQ4VRKUa4ijPQ5awBrzX",
  "key10": "339NfAAPett587BCBg1zBvHPNgKroMntcHSTsgxZ2vp6dLP2Nga6AkgTU2BCbRVEmbDDNWCzYebdzgZkdP5wh8At",
  "key11": "5YjCQPHd9ihnhrmppFs9HZxhcbbwfAaRXeoCq7aZCjq4TCiCGLaiUsqG1H9WkP6wzcTBtsfGxtWFEw6QJeuKCfoE",
  "key12": "2HnA42aAUC2oQTqZuhvhJhoWrj4DhxjVPTQSE5xviZb8LKSNCYVmUY7hBR68C9g2LPp2F1eB2wzMY1s5DX4mwYB7",
  "key13": "45QvoHhAGfqABAMQEkoF2XuVjjAY9V3Z6oHubTugNWz73PmvBsTY2TQVjeBaEoqy5gyCN17CyC2wUBUm28ayCTqZ",
  "key14": "QvfbQg4JpCuXYHXu1ybCTEcb9M5pf3hsW2Xa7KasaXeWomM2upT1kAYsL29nrXjncuZvCXPSQbEoJFJTivbSEyX",
  "key15": "4rJovvTPxLXG8U9TFTDLyr8LBvy976iQb1fvKqW69EndCX18CQK5siGv1fFtwzqQ9NQufcdeCixrh2pqFmXg61nS",
  "key16": "59VKkPHyHAdvEUCuNpbFErqXa6trfPMbkFJA4LsJ2M8mgmFCZX8RpuAznM8gLyNBFYkdV4iZJKBYTEK2yBXLG5dz",
  "key17": "4CNBWxvVrKkAvuA1Y1ugu2xmNGfbsXAyqpfRuXy5vkR2v9HhKczy53pPFSD73bUKmyU7T8VoM8GA4tf6yE8y5ZYx",
  "key18": "5nXKFyaczoJMYEQTNK3N1oRDCmXWN682NE971uhi7h1yF6VtCivB6D6RGtR1PSkVWo8NMD75r1YcZVinK65PCVCH",
  "key19": "2XqTmWyC8U9Zw8dccjWN4cND9D99xQfWbabcSCPLEuu89tWCSWQ9fxqAZXsJAzzvY5ZU2hbVANEccmuw2SXqhTLW",
  "key20": "45HcYv3SJvrk1pSwFR53aE7TevhFspqL4HujjGqanHaBvYqWxHsnCE4RB2zuk2aUtC2cRTdsC9BtYC1ohKd58Lyf",
  "key21": "2pReeR6DCDNTpwhQmyfYybRioJSnSfBv6UNDjbDerS5jDTokLVEguH1cL1TgDYcRtkN1qKghfnEVTvAz7NaCU8j4",
  "key22": "4Jr9FdyJb4RRVNBhWUiLr3MMvp63c7qcLYAvHDrJg3HvEX1CmjiEo9W33aMnptb4Aa3MKPbyEitUJXpLpQujXWDZ",
  "key23": "3UKtRJb1bnCAMHbTjQDQ9jgUUWxfVWG7W1wPHBHRsy2huRDXqtobEXkJiLYyC8qcL7TVzyqqWs8sgXiEwU8scekr",
  "key24": "4DgNzyU16AffNKEpR19M8v4dNm1BwCvGT8ttvaMQ2oPdcEypV5srSpPWRNJjgxE65oQ8KMQgRRKfXQ14G8yRKar1",
  "key25": "JBwkfiGD7xoAe4BUqR6SCwfvmakmsajicor3UXVPfPD3KBWyLDGceq5NTCqGsZk6z7R9CY7NmcgGzkMXnEEbWcM",
  "key26": "5JbgTQoXqwpxse7Qv4uRsuF9k2GzAQbhKLDCK5z6MmKAMuQdFspGAFGHNhhfZ6QyjZ5DJ32JUyQy3V8PRSdchuAi",
  "key27": "4AMa7TQJBXPiPcAndKiZFHa4qBme2KFAvFJrmQ9aJ7gsnccvEQjW7zqKWc8cZhLJHn4GWehDktMi7nmfqVdivnpd",
  "key28": "Fwncct3CmDWCnxXw8Trz7u8SgQLpn8pBJm3BQpugEQT2uKmgQS65YW215XEV86ZkPGYVhCPhYKtpHELdEFJbkie",
  "key29": "2bqXk7BykMBrV7H5S9PM2pFQikMmRX8XJHjqdXiSqujQLrkZPqfzX7zvA5JFTR5zmci4EtGfmPVw6hpHZcVvW4Di",
  "key30": "4LRKZcGWPhaVsSSXxstxD1UW1vtFqgWm3bxJ3Bxxp2n5SyLSpd2xGZw5wh59moD4RKaenztuymkXpwd38DXvuper",
  "key31": "5G524xNVhbcq9Z6daPwaqUmf6SvHh4GxZnb55k4KTQqFXci1Ls9ceE74pbmWQLBY4xd37gupaQp8FuuM6mZhCvdB",
  "key32": "3Ns24sWC1zAVm8eEhvWktPkstqohexnNQbkPPWoj3bAgnWuTnZiUXx9DHnSAbbxRxGzGW18rhAVrFi3bg4b595bJ",
  "key33": "Js9Mszy1uDU1BQy55rLwiFxUQETPtV9sEBHDUardyWnXd1KiDbPRcbUUmEjbCTc9uaUJscoL7hebQgwMFZJsrJq",
  "key34": "4KERFH7Q6unhatCuEb6gsSrQXmuhcca6wpBQ7Ks6QhDwkD8P5L7asBcP8m3Zkxd5pCEJNXBRBQnccY5UVJcreGrL",
  "key35": "5MtUB3qFBizJQRApGJQRuPUV9dUhbmCbNBmxnZpvwXgANogUEfoMAmeATbuU8h7pj64baEsLLckMeLT8cquYucV7",
  "key36": "rfVKPSDLwRF6zk1Z4nitHVHJjjcEHPsBcuCDCk3EsoXTxZiuBh7wKYtZxaQbkfso9uzMg5jS65Rxae7JQVMWL65",
  "key37": "2sjg8Q8S1x64nMMQasCLGukLXpT8G91KVGuQE5E3wmXJvHHcAhitNjs6F2u5Gnmwj7a9WnhERPS7VywErsqpouvF",
  "key38": "2bpe2nNsczwJE6n9Azd6KZ5mRcfgj33qHturzM4VG35ujfEH9AeXVY8tqKUnwX6T1aKZpZWEq6ctYk9UBtv1xzwW",
  "key39": "sEPLdKsJWktZSA6Jpwxiv4nDdRHPvUouqVpHbNoowuqJMucTdU4NA2NdzbaM6oALseh81GiC5F1V7rwohnfSRH6",
  "key40": "4nGzv8nu8WrKkiDYypoMqoriuu8YZ1aB7vz1eNws2dUzkKUjwpM1ErF3fxMMvZUeZi3zEhnjWhUDkvE7gPQ8NHQc",
  "key41": "27WQJvpTHhJQmSRyoEZsBqXFou5hbS4hZrX3jUeDbyNNkufjcpDVHKuV92mDFDa8bBWdH9NtnmoapZyQRj5eofkJ",
  "key42": "2ovUShps1e2GGeJRSaj3BKTTbdTFXPytuvdnZdq5z3aPbZyb7RfPD2UYogmDLotXxNUcd4zuSbFWHejj78y8RK8G",
  "key43": "4Zc2VhvbchBZrABKbmSvGYWQRawbohccKBvybUfGd1fpmJwD1kaxq2aB4gJX43DiAFg3FuV4Yo6b5GkrUJ2aMjQE",
  "key44": "3MwnoC1ibVVGJefus7epsbqZq9f952b7WDh6DAojy6V2hrpNofJEoAan8RpfXPpbneJSy14HpN9XtuP3y8W9GrLH",
  "key45": "yLUoDzt185tLGjb7b8RFoLthkFyVPinuCeLGkyRpkVmc4iW8wieyTzdRpDG1j7FyPnsv9FUPchvUmTg4JQUEMAa",
  "key46": "5eKU8dPwJ23zWFQM2ASFNyrZjm29K1FL7XRKtjd44yQMDwNTqLhw2TWoV2CEbRQDU3ZR7a5QtnMaRVjFzwR7jXd1"
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
