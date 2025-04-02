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
    "1qoTjXzpty7y9iGzkpNwQ6bAWSVoQBU2P4x9rXVU7HoTNejHKCriKdK1q4DxnB7uzt26A8CdEFPX973uwrpH4oa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ioHR2fqVhkp6FD5Ah4DAk6mX3o5SYm7d4w2kCfUF1SG1As2upNutGmGwMK2NBJ4MVxmWqSVDiaSmZk4CJEYCZfR",
  "key1": "seD1jDwa2ELySYqjhT8pdB1iykZ4Y4NT7z9mjjjnzKBVyK5jtDdvmCwprBE8LXHKUCicp9CoFMgvzBki4JLN52q",
  "key2": "361Xe85Tun7uyM3LaU7xRTMYpCzQeRykbdEdSSjgXWEPs4NVQ9Y14SiEvV95h2v6n4TBKdcXdNHixyqVbCSsBNj4",
  "key3": "2sBqsPS6Ra7btx377PdCpYZte6fyDHQ1q8WEJy81EasJHu52ucnwvUVdUGxnMTxn846H5wKvuvvyauFDr1SwFvuD",
  "key4": "kvazKUxqmVN5gbXbk34Zcx7fccx2fe6cRr4Qeecx6F59rhzNeAQDQj4W7WfV29n8FofgrrQ6Vm7xYicbQU64ZeQ",
  "key5": "3SR7nfLHj9XgYv2XB6MYMR2kS1hb79UCBW81b5Y22AV1FLtGkq8Q3SFXqSFaLCRapjMwztcF169bwkNY5tfFCtet",
  "key6": "4ZYtErYVwHckYxojbnM4MWa1DhEpQUcJoMoDqALpNeL1kW6RXQYpwDeJmVPcPzJbkQRbvAvxZN17awQJ4jRskKE3",
  "key7": "5sW2wumyh1kdVztNy5sPn7bC1iSAGgM3sfi9hphqFUSa4yvHC61DZcmgDVBRiNuCrkECngCEJ8rL1NBuxyzSbHEz",
  "key8": "4YhvzxHzzMWz7MSTw3wbaZFaQ7sAEManZDK12Y2mXRTVioTc2ycpHNFjLtdRzexi8NPvdizG4cXYtAQe89ceuuZr",
  "key9": "4xGXgCesTLCgZvZH5dBHMVSGoce96upGEYwa5e9JmEAhHevaczh5dStvgpRReSeym1ztbdzW1HVgFfDyTHVicrkL",
  "key10": "3pk8uiWA4ES1bDeLUtXuYonABu8opxjHN517mx5GMMFhrs8GR56AyAH8BNTe6SHTbKQXnn2KKUQBZjA6EkAoDxQj",
  "key11": "5WEuXY66agpTiUumdze64jd8o83VY2wYAip714d4PCnEuxFppZwNyb1T5MYVJjrEYPWdTMjiiJCXe9ZZLrJsn6UR",
  "key12": "eEDVwXgMujK4QALcpnWqzcdEFNjyBqCrnD3pQkVsjQyVjG9bHcaTAZx2ppQpzAwoMo5ZL1zvYtqJBo3gLc3VpNa",
  "key13": "5xTf7VgSg8c2Jo1GYBpp5wQtArqshQqLz4CG1yqTgggPbWjVmkRuWnKHZnYfFNiocdpXzipM3vFA95GoHDH2HCEj",
  "key14": "2nmhDQHVagyLYM4dkxGyHG1GUqQ7CubBkQtADT1WfwDPCi1BnbmtaJ8h7V6SDVKFZ6e3BXmXZAKvUS2ieBmUsX2N",
  "key15": "3qUJnB43Wr6VpUmabxvc48dYW1B58GTfWkPxWVf3p1fbCmgUdXTVYkdgrpsyBH7rVx38jJp1v6cx8FWriJzy3iGB",
  "key16": "5URT3di2D1ZJUKAcrwyZ56ZMbrMDYGgkw4tWQd4iUyEcz3xEEGkPtg8QPboxfK4dGPt8snkuABpbTZpf2qqcGNn",
  "key17": "4ByXHAfwjDRvYZDgYzbgJ8KAcmuw9phvVcWBRqGUE3qAGVr3vDn2KfcED7Tsv9PspHD5tBHRZgUs5EkRYDp96FR5",
  "key18": "3zUmBvuU9y2M5bs8wJ97heiDUojRXeo3rX3No5hsxi2sXppcckZb44NfeXACzdRNA3TnYd2ufWQ7m1AYvNw66aL1",
  "key19": "3GsJtKxo87ZtnZUqBARCM4gMPy2FSz7bDhdKmTgcJnPRpnvxWKaf1gCoTP7VjjL52GQtfohCDovMRkitsLruSrpr",
  "key20": "XXn3JK2ZXXofXU1N3o3LAPjPisb1NN9ZuRb6FQGKyuNq5GBXtZUXjp1x4iVJdP3qwtWNj5jZFnbqVxfkK9HWoNL",
  "key21": "2CQqsh8cRCJgviKMRpfa1pMz8sZcitPgP8RFFyC5vSazkhKGBkYKkEjCJ9yenU1FPPCp7DBeNGMhKGdseNtpm236",
  "key22": "5GtuQeMJiuEJgVLZbXVwocmM7wWP5ggQPa6ezA8DYVQxSBHGVz2z5BLMZvwqmjsJ5benJpd9YwscB1H4kKmVC3AW",
  "key23": "5GiS3wEW9Mii2voQfgqA2uCaSvUKcNDbjQfMnFpaKNbuWqY7uCF3fRCD4MZH1txvmpFj1GChHDzLLq1JsRtj9945",
  "key24": "3Q6qwiSEqWPiXD3mcS8bLjAs3bBpK9xtVo9mo7WScgEevEYDzdm5EWvHUdTXTRK3Xi6Vfup16L7NRNqCRM2X7sf1",
  "key25": "5oovUuJRuobfsdhLmswe9w2LMMus2ZvL1s3omY64FhaxVFMktSsrp5WgBBWMvpvHeC8Fc87JYrFQJuMbNrfsaqe1",
  "key26": "4xngjebHqcrcBcCcnZAnmPZ9x8r8KrLGRzp7wfm837NpQwiaq4MFRDKbkZY4KTKboo8DwyVvy8aDL8sobdMcPX62",
  "key27": "4ht9vtyXqaCspKtE1iMKKrmE7SuDM2NMPMMMAnPSQamDYbvPYvUcrrPn6XFqzocbtnC1adNtPyTZPJqpAZYJb3tA",
  "key28": "4mPEEFA7v8SFLqhcjHWdYDd2aLCY1hKahhLJN9rfjxuX78RkhFzUFY9tSPZdUN6ZU8sA32nV9Gm1BPdzto1iR4Kn",
  "key29": "3wJouDgsfigPjrzpmmwyPdLAFy3ETn9qacy5NLn3cPLRSLpjon73LX3mRcS5aYRTD6prcqQ7ecgUuhV9QsGaTFLs",
  "key30": "4WQmZErqBcKNzfNhQsYpo1oWj9dS4L3UVytqUXHwbftoFVBoXcFvmjov65SGbET6Yc47X8w71dGWLx7SJTkfRoHU",
  "key31": "2WFmxgfVNFWWXghwnjAhTYhyeHW5JxUbtTmFBEdzjqXM4KqpS8nPiEUsXR8fxuQewPf9MEUqudPiP4GJFpdbUi31",
  "key32": "iV97P2LYr48hVKBnqiDhXEKnByFKc3H5fW9qAotYpBhkPRPiQznB69Qp7KTuTyEzV17xn2oxrT1VVXrGiCxge82",
  "key33": "R17eaqna46m2V6usqxvgtbnKxxnKpNJ35pDyXaHtGdpkGcJ2fZWS1NPS22ASV7bZjwN74fxi8kmkwSx2ATE8q66",
  "key34": "4JYmNpcCmrPDPvstQbrGeP8JGe9fvQCwPS4dxjM7AMs62j3JJE8Crcst3YkB9PJAbZ6e7HpPq4nezAibZzG8T71f",
  "key35": "5VBEkdaXZDaXvGcym3rDPfs2GBmKj9kEi91hbcZmmnNviUTxUn3jgiLo6soZWfaA1TbitApBZnFmW7L4sPRyuLMB",
  "key36": "WokxWXmuDfKXB8ziNAqdBiUiuDYY73tGtdwPs9aV7SPtGLqU8WiMRCS4MPszdCnWDs5Dj89nFEp1ZY3d4kPT2MJ",
  "key37": "3b8ws6RTbAqzmV4e8L6zJ5gkQvvX1Ddapn3sJ8bkJXAcmw1HXCjivSG4UPU8AS3zwnkYCV8Aj7hawunEXWfPU8zc",
  "key38": "4gXcAiKisxhoWepv7mm1DYa71ofGyW4VvSyRAtXURTHPwecNXoEs9Zpci6oUxhSRMgQi65fWFhjsJ5UEqQcQbNhM",
  "key39": "5qN4uTAdzGnE4Y6AtcfWcqHmt1VhvYP68e2tit7tFczzCmdmqJe1at8sghdqNURtCwjTnXdNa2uTFNKtbchZhGox",
  "key40": "36DPssFgjKxR8jJEjsNjwq6k2zmcVLMCWYjVcPDXRAcKFNBEntAcZkWabkXSfrRKmJh3PYooGLWy4sbwuHHq37KZ",
  "key41": "4twuoh2GgvQtMqHLK8XHHVupQLoTPMBUYreppyKmJ7fRcnMzokk3CEiu6roGVnHfogkh7NAzHJMv7XbK6KRLWHLy",
  "key42": "3bPBaMr2pdfnd8iEsymBn8zNy6LPADZDP9K6NkpTmYoLtz9Fr1vefxe6RuD5zGNS1hEj3gQBdBHgLfXsivup5hPD",
  "key43": "Jgvsnemr6iTMm4kGsCW7UxxWKG3FrnVSFH8oBtcB8GTDBVSLqSJG5FcLNrPwHG7QbSjTeRRrN6ipngWPCJEkpD5",
  "key44": "3fyPqrvckvycFmKUyW7xLecjNUdaFufJnyBz1iD8davzZHp7uJG8YsoQ6BMtBqPNYYro6zqEYsPbaxpCgkZitbi5",
  "key45": "o2wVTkqZbqzX5Tnp3MApAmASXAKQvCivbU9CRyHrybHEcfxL8bWXT3CiUU5iM53H1oVtj4YoWH764RX5CP2kP2c",
  "key46": "2ZBkSpppvX3CYff9eGgLXgTb4BiM2Jk1dGLzv6HKQKYsdZkxGYxyaRrdRCARAtj8RDaWwq3w8u2zUVdZFk1C6Vku",
  "key47": "5YgdHVuFHcp4Krbd4Q2wHLtosizLsHZvwQXfbJbQZPFA9uzp8U1DC8ihT2bG9n4c1PmmHVHECynbb7XvY8Xv27Sk",
  "key48": "5skpY4tM92NtsSGUWtbStUxG91g4st5Ao1z8hPik2vYUhomc2gaBvJ5t2y3StENKjDnFpJUzJ47kFfG6mBaLc6YU",
  "key49": "5Vn4C7Mm6sxJQuCfMHeMabqCBv3cm7ZHac9DCQxt9WXTQQELPUR2vSUsrsX7KGAG3C77K6YfFDJ92kupv5SZuWko"
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
