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
    "3TEaHb1q9dMUp8JpjdXSQcdTfpgsFut8iWQRtmrmqtejHtR8nuRVvnas6S1uDbULtmbbtfdG9vf1LHLy6FmBDaji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b58xqiA9gP75Tez6nbWNwMeydagCjVmjzGQvvLs6FjX8zP8GSLTaK8ds93VmCYPVVXJQywn8Vfz2PGCHKj9D8T1",
  "key1": "3Wxr9sNGVhYDUu1MnziTLkaXoL3SXns8xqqpbPMGXTp89C3npRKpiSZfvSBgGHM51HgVqsrjZ82HjjVHHwMabVuR",
  "key2": "5CWKqNMzoGVfgquG5KhNQdEJaDxVKjA5k1wS29Nfb2KiiUX87jcsaBvowjPyxFkhuBjS85dRVbCQsGMjCxaCpZjG",
  "key3": "5nJxddqaWCDgh56j4Ypc3h92LrvYvF49RgdBnxk6yunJ6tN1dUPV5C2nQPmxUk4u5uCaSr6nhWcpcJAXnHs1Cco4",
  "key4": "24oDZYY5cWxL4NbmmLozJxyTS1ykqhdwVAxtXesRVUmocjEuyJDuRLAVKmdPuCoQp5dUzUJW1WsDgRFTmKxVxFBK",
  "key5": "2tDqugPyAdAagFmw6YBUxaiUu65PAratG8vMMpbzhgFYUp9SF2Kh5Fgc78QXaXpDj8HJEL1hJXo74jafcSQf4hNP",
  "key6": "oxpPLCFc9x5Xu7dthx965Nt8sieVeWxV17ryzPfAYxtESCDXQjpqkAgYJCabcyLax6pgbwdwpvDx9DgcFadEsFW",
  "key7": "4ieGPB6gTajFQxzKaUYuPYUFL1RrdQ3csDWeK3iMYPwQq47tXb6G8tFsr2u8zEw89F1zhqNmr3GpNsk9Bo7EhxbT",
  "key8": "tjj8n7MhJFLasBnLYkYUE7DywEqrtLemdkqBURKkXprzYWoH3nj9gHeXyJxt5kDLXEk6prdkKezdH4YZMQcnDb7",
  "key9": "3oM1FFSRC5FKz2cKJhwHbLtXpyUbUSSjxPmGfWLfYWWDgBwZrZMQEFjCTFDQj9Pr7wJPE5E7xH113SxdjPsmR1jr",
  "key10": "3D7hXLMUacTM7wJzVSjkG2ZHWvs9EkqSNgb9hTY8nEtj92dAxXtVBEpDpE1cj8xUBKkgiyi1zAeYNdEGpxde8LNd",
  "key11": "5A8cLHBoi2SwK8jGgggJpB4MSVGEs5rS4U7QrWbT22aGemtPH8UDrdhgugx1tGRfK72rDwyw5chwRg85SA4rKkfN",
  "key12": "2pF4RZVzzPHZrzHhUKjAakbPY1qEbSY1RThM28PdFQfCgvJ18U6PSSctpQmnBSJ7FJSDLtW6Ec72pEZ9qgCsbf8c",
  "key13": "2yHsM8vzjUcwnCxTkUnKrrxT9VbVdWdj34jvr2Xbejjw3K4zU8g8aZntKivvyoyftYqABJMTFGarNSsCBxtLnTU7",
  "key14": "2bPMjGzQH3B13ceUpzS5TBkRukkAdcwNuoXbSi3o12ewfMDHXj1LYvrSVtHiYKcEBjoce6ZRuJCWHBY6Jm8mH5iC",
  "key15": "5hPWtNPavLv8nKZrX6HJQG1L6S41u8WjuN4upECZ2X7Z7VUGrBNSKjD4ANkcKXWwjpNfX7DmsLvCrwRGgsybMyBe",
  "key16": "AJfn1HkGemWYk1zqSi77zdFBtUXERfJeaJrcadNCevNvFRG1YT43fRU4Uq6KASKYMXcjxzou3GWzznjGkMBW42r",
  "key17": "6xWGESPUGFwMsEXQZ7x77NTCnNmAxosz6AmPHJQhPRHzeEQtW2pLkNbrKC8yznGMweeSSyXNQsBexpn5dU48DJC",
  "key18": "3DipdKqNRLEYCmbPQmphYH9FunBSomkmZ6ZE32zJEchqjGh2jzgs8X2hcttdF1ssWhZzfaShNeuMmqVJYZahnUx4",
  "key19": "3GmyrBZjNpoSeYjpNoARcbsXMuidfEbViJeXmrUorMeRxeuUnz1CEXcXpAgeDyofKpcXDe9wBMvzFoemqWzMLfpk",
  "key20": "4xe18WiNrj1ZyLbrDt5DB8rbkfamP2oYa4r2vsFMSctiSbr9fBm4sRWmbTeKfd5rzavM8eJ9DwGrj9SN9DAgepPK",
  "key21": "2CEmiLxkyC6XrhzWLGqXdneo81faNARVYxS38FHtBfLziW3ATzwtXcVLcRd2mQwYvdRRXLrd29iq2XvgiyAMs2hK",
  "key22": "5M5R35149jZPzW1Ek8raeod32UWCNsazVzC7zpS1FVukLM3k3medFwMrnHcsCAdHnejvtn6aaScm2m99xSB9maHv",
  "key23": "21pe1gxvJuGChtq1LQ1sA4zZmvPE4pTrytf6hVaLDaELUiHQA1CKVWR9bmUJu45PceSP1T26socPtN56pPzAZUTf",
  "key24": "5Xay5MSGQHqsxRD7sppvbd3FThpao1mGgGxYr4yZrM6VisBDPNJSRtrJdNeuxQoHD46XQjdo1U2kztUbJjT67CEf",
  "key25": "2H6vGcgfayYXcxv9PMN777S5hvv5hiNUJhS3KrzathjqixqTza1m4Rk3tSQJXXUg8vdjsfNrUgHY9kYvSjHDzvvL",
  "key26": "4Kqi9n362y8v1KogFbrMyNMhYnhgrMxpfLpPKnfLVRzmARHVHNcdaRRABR2L6R3Hh4UXgvpNv2J11xtL57nG7WsN",
  "key27": "2x1MjYvyz8c82mwmWCMYDDcx2keLYeRvGok2xwf3mcqbTLN8gFyHueXRqtRtBQzoLcYWVdjLwX9xpSwYFfuepP8U",
  "key28": "5qZU9VWFvZqTUfFgTN5WB8mcqPhLbnGL5ZZS7xF5MuakQg2Ps9Daf72ZdtPUb5jJ3jCKerLUPHaZiTHHsFnHEpbu",
  "key29": "4sJRUgkv3CXkYcrv4LGvmNmZ8f6DpPm1BfxFx6jSPQBjejytYLWhQzqtNPp7Gr8JecnZVdDG1BXPjwvZofeYA4cm",
  "key30": "2q3etA2wZa9zhyet7hMohrQEQzKUj47hpirYvwx66WXZafaNJHnK6GD7XRdQzRnNkjXkHGZs7Cx9PvststkWTNLc",
  "key31": "3J96NN5MwBazNpBs8a49gYqrqraE7Srx1yiHorqFJSNoSwrfV2uBzjyTKXfZJWwD5hHa8BxrznaKr15uGHfyBrM5",
  "key32": "2W3T3Hok7UGo1uavPZzR6pCTDx5QET7QUVR4MfrFDoJiwv2rpS2iD3WFaX7rGeRL5RfKunWXwRtiaddSGuRQe9qd",
  "key33": "4bsGZPY514GSBS51jGDiwcH2KWcRStQnFvreL3vA1wo1dPQvh2uNtHjHiNbS9MfnE1iF8LE5ndVJCRXdpfmVGHtw",
  "key34": "4dU1STANyNsjbaYDN12LZLA4rG9wacRjZQnwtTV3ebV7YcWizJY7xo2pbmrKj5Fm1EA4iTqquH2BFvegdngdp5VR",
  "key35": "5fb16oJixxFoDTaZCixzQri7RbX2RJjd51wRCkRVqUkAM93GNKnmkcD1UK4JBCRJWLHBGvn1jnLy448BAmkREF5y",
  "key36": "2mpw1teJeFvmBZtKzxncnmxV45mLFA4Yg7zs6cadrox37ww1fcfVkRBV6coTbfsmrpCJJo9ap4znnAycGdzsWef7",
  "key37": "5KXvCsGgEm9ExWKj62JXJ424gBJNspJi25BGjGndQa92DwAGccEeFhV8FDXWLYT8G3JFCCcSco61gGT6KeeL6CT6",
  "key38": "5qaSc787RNrfVfbrNPXbVpX8FxuarQjFPYLpLaSjTm5vnZxkoDT8WqoRtNM7XXfdToUcTsaKbKx9kUiCk3ESvLHR",
  "key39": "7yQpzQtEwU6W23QSHk92WrjJ7UCSybG99YCRj1RKfg3mbUr4oGuw737eZD4BmtRL3jWL9zST8E4MCWAd8jQS8BW",
  "key40": "48YhZTEbbhqNn3PTutFg6x5CTYu3BLrd3tTokCMgktTvMnsTrDMhRbmVSP5Jd3ZuJHGKikMMpXRSbPGTS52SKSqS"
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
