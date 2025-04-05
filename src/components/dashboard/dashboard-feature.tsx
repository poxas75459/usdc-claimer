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
    "2Jviirq2j2MdWFYEF9GHdXTMLQgSiGwjk7Eai2gm7pDJ9tU6iBmxvXH7ZkqeZnG3ZWkZwP24UDc9TEFuT4YPtLW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RfuNcJTUPHNq4VVuTCUnRFqYN5VXekFXkhzLoWd5Qa9HKe3bXPgtkaXu4JJHj51wWFoqAcLmaVohQjyjFdX33Ao",
  "key1": "5Dv6FqbMtF6GxyRHb5dwMWPUNnswypdEQWicBFP4RaL3huHRNFHLSvbA62Rox7sh4JkLSvSGJr9FyCuAv2jHddDh",
  "key2": "2ej2zpw9biALd34QnNut8bEXhJ1EZNyyHqBbZN8GQ9zfSMsm3YoqUPkJrcYeU2hskNR6akCJ7ho7THanus6Nuzag",
  "key3": "WDJYM1aV7g5S6KgsnqN9D1WaQLgFFsDjxXCf4Q6SN41JKg46aUrVC6gjkyRUSvSoStyVsMqTRJFti69BMF9srXA",
  "key4": "5P6n2Yosr54TXkknbKPyYoC7Ja34ADVxiJvTN4BpXStfpLCiiiT3kmcMiEczXYt9nX1b2sFwoyBX7iwx3bSEKgpy",
  "key5": "3RfHF3uzFQc1EPcgrdriFEDhF98yoG1FKrL4uBXGKKnAm854mCzd3g1fSKkFCWe7EqqAMD6ZcSWWwrjC78hzzUWp",
  "key6": "4bkJZ5Pf2oxT5YbgSWHKmbnwty98jUXKSqNkwbZQtKxF8tngUuB3DDAGNzdsLDGtvDHqzhZcELVPaRNYDeGMhcjN",
  "key7": "4Zb8r9sLFF59FGRs7MLTg3EHamCPRuy1ZQmpE78cAjED1K4zQZe8AAKgii7xeiVPc5RpKGQW2sR3AtyHgjdGuq6k",
  "key8": "28XxkQei6uEgebjPmnGFVp19kKDVvb5EmKMQ75w5o8WxcWwT5CwL9YzV1btB5W97dKCBuAKkm2bhs4Y5Kd773zCE",
  "key9": "59jhwaaipaLBpfB4pwgxHw1XX7JL5LBfsCxXoVdTL5MdDkas2mSLBMLRgqcL1jPtzxSbdgD2g7FFZXn7pGZLtRhE",
  "key10": "5iMm7aq3WD8foFggPTH3YhkT2Mi8hQ8TGwGG5vcmYAqsyrbsA3KM2NDDzWugnGRJZyxdtxHFsxQHaJhaVPW8i8Je",
  "key11": "26XHxTBtuUCN3duc9pBBoVshkeKGtHrEpgVhdQFkYyAQueGfjGguMkHQfXvwJjvoWNe2zW3Fg2YJBM9FoQW9rrzA",
  "key12": "3MUyxQJq5bfHkHGADZdXnURmNkT2EK9mGRyL4AwZwMFRexvyYM6GSQMvL7HBxW3LrsucxuKeUXpYbrFMTMB6DPZ8",
  "key13": "5vsQSx43G1YJXocogCrhqrGrJAGvQ5sLCbJmqYxmd2j3s7Le6GEPCz1exxS4vtBfKvq4Gz1LwrwebwTn1zTrMWUK",
  "key14": "5XyMPN6Qgwf1KaQsLZ9c2qCHi9UXyvRZnKo9VSGPpYBqiK5ac19rUZJVQneTsgfwEApmspwX2JZXZQWMGGGUwakW",
  "key15": "3r5v6fJVXPHugVA1PHPUmzwZsuEqkXyymZjH7hMUWc3CMJrK7rqpDooaRmLvdn4F26yx2zdowdm6MESaFHGWzhPZ",
  "key16": "66pA41wkygJARZniqK2d5vLWNESkQSERNCfQ2i18p1fDPEuscZ2wt6Fu9W4YyCALpyQqVfV56A3VhCUV1Tx37DqH",
  "key17": "4bTW5Egb6ebaoeQdUagDy63w74NvjfQuakyPpNDrC1wYBvhFvNr8Ra4259KhQ1q46CbfuxZ8LNBwY8riGwm8xzmC",
  "key18": "5DvEy6twmfLm8x74xtM1tPpnYJGS47CsEKPnDjFLPqkDB5p3466hKY2CFMMy67DKLZBDvCG6dvK83gJ1NRKViVhx",
  "key19": "584G4KxoNvB2sQTiMYUMS3KBNa1PNYJe9G164KuFnvfoTbNZb6NmFoRcWq7EuiHCHJhME6wkg4XmJcTjbSEe11iw",
  "key20": "2cyACcHtp3rFbUiQ6VmM5Li3qXTqAnszKANkfAieN3E7k5fhNVz7QRk8QW4mRaTDHrGuqdLwY6fMeRWznNHWRbLx",
  "key21": "469pf3KWXPnFUGj2hzrBqMHUV2tpxnmQfeFynEP2vBsTKCefMAeHDJNYSA9isAr16AqABVk1hUBdZm5qvixhncd7",
  "key22": "3UpqVXeEpXzauiatFywwB5qcRmQXg2z6swa31dmWDVgJVtJUGsn5hHTmRyvsmfyQ3Gv41jytmpsKtkufcfmRb4kN",
  "key23": "6NNXpeZXtDF4vH3rtXPNHRFD2nJZ9MNYNdYgMqZcrnXew33XRZyywvsHCeGRiWdoZp1CmnQiMFBnbXWimRpnADG",
  "key24": "VBtej7EWYrqeJfbgrK17QjptW6E1aKJYJYyFzAyNqavv1T8kr7LzDh8Aw4tW3PLv6QTHjNU8425evXKRCwMuRCm",
  "key25": "uVZA73dccKuA1iBUnovZAxAHk6Kyi4MTT6GDLnmmZrfqw7tHLp1Acfxb9Xep8szy9diSMqfA8oEj2PMojuWUBbp",
  "key26": "CJmqU5G1pmSJYCstjrcMcnAX2L1iXP8by6wPrR1xRRZiaoaUcw3R1VSp2yxcxUFsfuC3kgeiGLaDct2JDvNiodx",
  "key27": "47DfuYxFBMsXh5g6KpMMDeQJ1ac3C48qftoxnBRHoHBpkcNtjMt8Dt33xPTEAdPF2VRDobNmq4L7ihRMVs5sy1X",
  "key28": "5RuqxfeUrA8iQ518a3eY327ebi15Ny2S9B7QN1EfmF98Ns5YGZc8xM8p3M4XtkB8AcBwHrvv9mXAQMamfuq8cQDZ",
  "key29": "5mn2Q8RBZY73Fkg5seoX7UpGhmcFBAtwDucUSjWGeabCWQ7d1hScTPa3qtdjQtUJ2UCeikwzBoxjQLe5GApZMzgB",
  "key30": "4EFWPVr7QCZmMeX2u5MPqMTPJsj6e1ML9hz4PyfhJK7UciUKcjhZjcStwYZTC41Bip9fNgjwQeAXnLvTqedeEULH",
  "key31": "5etG7tAgsocLBYMPVocoUJ3CQqYJ84W11Aky8SvziDQvnVBE5Jj69tp9Mr8evgF1EBs4dTo3BVSBzfYbM1JsfgW1",
  "key32": "D5MfnHnjiboaLeuNJgj9Nep9dWHg1WEXvaVPpfG6Hisx2oHkhB37NTco542uSrYthY8Sq9xaDTkSAdu2JTa3XyG",
  "key33": "44oPGMMRmwWdHEyqg3MTRJewZVarQbPcjUUFegaqA312yC7XdUFPQd4Yqhbfo7riKfvX87QZH4pzkzyCJgFhQNFQ",
  "key34": "5fmAdAyXDQ6Qy282bhbmwqje82tegd8NwV6mh7QthUyDPshvav8w4q1qGEMrW8iBc9czBkUGRXGw7QY7P9FqW93d",
  "key35": "3rifBMVuDdQ8LTFoWT32eu7MJ5g6QXmvXZYNhN366GA9mPihwqdrAac3MvgzekcgGTA5GHfsAq3vyWwuLfnZULwW",
  "key36": "3HMeg4nEPTTnbfZjz6LXZ4HYsiTg5fWu4QXPioXf5TqG2Kynfj6HZ3JV2Mbz4mcwQ6GqyFgP3mY9WrFuH4AHQy66",
  "key37": "28FwgUbGRdo8f7zFVDMxik9jw72HoSA231Yd9DqwR8tuZdkPeB9qR7gKssvdhZHjUyRAF8Trbao7BMf9cguc6FY3",
  "key38": "gTz23arrYYp2oQCqzpn1mGRFiZkHhxZPRRNYkfuK6xjSi2DrdZESUkwKd8pvTkxrXX765Tcpn3LwWTQ57Luwj2c",
  "key39": "2HUezk2KihHnV5crEfjUMzVkqku2xXbVWagxv9sBxyd6XnbnTvZ4pjU43Pnb8ymTje4W3dAbYHobB1wcXDs5JTdA",
  "key40": "8FTErJwvrDSbt2MJCu3vUCjqUczNKzEng2nCdw8NLZAT6bWWfn8kFgi2JJ2cGx9g7Vr6zFjVhaZHYuNNCt3PV9u",
  "key41": "37PeDZomzZvdrZd2upDg42tpAmpQaoeGnsuN2tnJLu1wEjZVdAtEW6av6fRG1ctGrW5ympwUUiTbUGf6w439YJbo",
  "key42": "2wdWFGpsocnmSg6x1uVxVETTAeU2TEy4oGaC9ijb3cazGNpe4AVh5u4yHYbGZVvXmJWmZ7PKUqvjHvKk146MX9tD",
  "key43": "5XBBywNkrsT2xZWd3EBdU5VJun74SFfSzXYopd2RNeyjMxvbyDU4mhTKHUb7MLNxoi7sbDKASpxp3WrjWJwCvqXD"
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
