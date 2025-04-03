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
    "3KfSfWZWTdpWXz33FKpo5TvxbMnUsRehg5MRxb3n2nkVoxAh61aas9z6HPE8Anaizt38oBgopYa6QbZdKqR8Y7me"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NDJjvcS4zSG5CBisXrHnpnemw2qxNjXhCj13c1jUaMNi4vG27dMXryrVVHWtWsvoPVCmfyRmYYmpHyhwBdt7a3r",
  "key1": "2fmqY45ZufcxnQgK1iCU4gopoqQ975m9ky8KGU8woPqZaas3CBGm1F4H9JDg83NDyzsaAuUaotGt6cJLpVVQVEoo",
  "key2": "3zPdk8fNQKdnLqFFDZZHH5jghrLavgEu2DqFTUVxvXkWAKWNpdLqc7BNuPPjJS7o9DuAYUEfgeug62FwFzCy5tpE",
  "key3": "2exrsJEakZQWRVS1QTKSA55cBuGtzXvAH7aN8vxSv1RABKHW8wxHKAVNBDHpMXjgw3uwRB228PuRMgwRasBgCi4j",
  "key4": "4Y5TXqq3CvY7V4RwFgEi7mBcGeKPjhwYtHgWKcQWvXNaEkvGpgPhhJo7K7FQT4TntLMPnvPEwrTJxxyYymJWeNJH",
  "key5": "SrGMz7cf9vu9wth7Pi3LTHSbjgWcwcJhBL7YLG4jh7S3tpiRdEAdUWLkMyuQ3WsSVvvHnemwUVFTDnh9YzvBoCf",
  "key6": "44AU8aqjTpyHDEj5Xo7HZ9c7yhVzUhrXmhtyjmq76GEdyszvnBxZFMf1rjMdcN8c2FCE3oJc92z3D9u3Mq4WnC8Z",
  "key7": "41FjBXF7As4E8Q83cWafnW7a8R2m3GzT1kFaep6sCNGAU4pMreT1UgYt1oTTpaS4AjY2CagrAupbpMZsN63UJDuw",
  "key8": "5GZ3uM98zL4kwdWDNr2nnXr33QcFuFj9QtBrh8YnRMktxDewJ6KjTbgzkuFgnaG11bRcQBMJrYipetM6Rvr3r657",
  "key9": "4YGDyFGy5SyNRLZJXGAweddN1PXvqTeSxtmsNCcHpM6e9cKnsFRLxqNYiWSgXD1nvG5qmMea8r9Fj3gz8GoRNjLr",
  "key10": "5kSwWSYdaL9n16h4rqmd1DanefGYUn8onvwB44RJMNhgq2nJ8cPyzqaPLafWKSDDBv4h5d69R94NYuVvFpFmzWmf",
  "key11": "3ma2e5YZHTUJLykuAtAtT3fryDTZPaK9udfaDyVySicw4hxRVLE6oa4CpTLyLNQBNrWeSW75mEhR7tZyM3NBFKUk",
  "key12": "3GdbrfWW2Gew4K7Qv6DdGQ1hQBCcA8wu2pkSh1uPcsXjwNiPFQQqG2pfW3HDBcppn47i8f7cRrsniW6kY3zmirjk",
  "key13": "4ScaTvkYf1NrZGBrFNMEgFeicade6KpFHCjwpUadcrZsEyNF8Qu5tTWRg8uGWpakqB8JZ4uYuzP4Mbwvmx8r1Wn2",
  "key14": "2vFf9Urj33Q3MqFyGKv45AGPNpMdVEfxoevgAZAMoPZS5NFyDmVytBMUoUVrGFb5HB6f94qbzixAqfg5stjzGAP4",
  "key15": "5Em6oHmGUMzw6HvkG972FhN2TEmaUiCo7JAiT5S1Ki5m98oDsYoncM47LRyWySMcA4wVArJXMQ9sVV43pMBBbJuu",
  "key16": "49AMB1Y3nsZy2mjQnBpBuGrZfFXRR2c33GR3dHtCc4AKLJVuodzATQm48cnrubkXMv4Z41hbYjpQfTwCGRyjGsb8",
  "key17": "8ZeMJc4QLuM4hXcfCjJk8whDEBrdYKPMeUMCjU1nqJfwx73fz7S2Gq5CpXqPBHcRY5qGeiWvbP8PAA9jpCdMegb",
  "key18": "4aopP1FSJmdcTnVVCXpDoUpimyDBAmnC7hioCEbhufDvvBrqq5fRHf3NfL3KQWPWKQ2Fsu9e1kMxZmNLESnT7xp3",
  "key19": "fiDEvnWL3gCFNRDs5kfm7ahyA7hqqERfHRwv6TueocEBUf5eUwFVFkRhVCr75hD4ZfNRnJCiYTSeUM2N7QXvpPA",
  "key20": "gPMLXtG76p5JJHdgaBkAfJz5xpSCxZE58cnLzd31b5SsCEiWGazB984Q1aXj8aQxNHtzBoz6W8xG1LYhmadkELK",
  "key21": "2jdTMURkSZP5eP21BgCL4FPpXoYFTXbi7y8gsUjSmFtciTNGJUdEUXF1e8ia8DzJ6sUeJBs16XCtzVfHtzz6BupC",
  "key22": "NeUwBQ92NfhYnMy7GXUNWSPhRKEaGNGYiHHV16xwWspg8pJ831C3FvZhNkYqkLEkDX8gU68gowo1WxKMnMMT9C1",
  "key23": "F1EDEAJQQBqThCMKnPQdKQkdpHxt4nF6EMSS46TDsNPh9oYnwiQ3Nd4GFxkGFijeaeiXdtXu8zw3qDCCXcwhoqs",
  "key24": "5AkrXSed2eDLHSnv2RT4aoiLnWk7cmEuwMeupZ3JagJnwdNjYTHkVG2eYxjRKG2QmkDqDeJvsLTry1RZppeZoGWJ",
  "key25": "4w3fF7HFQ7pmQxcB9jWcEREwTVZuK7RJKEiwcb1rHvjcqyviWUviijTzm1CSCnC2PjMQUV44EzFpbEC4rZYxHbWX",
  "key26": "5MXa9YYqtHE37Nd9wTs2j2aDD7Ckz5hU12N9kxp5kB1A8vGfJocwoVREQtxo9RcAob43Xmg9ZQCm294BTSqyzRti",
  "key27": "2mrdW6hCJRMPT6aHqmJyXPmTFLRaiwAKCPrEgfmSV6oXAxNCgk2Lhmz82gXw5qAcPL3LBBFfmMs1auTRszTZTyRE",
  "key28": "2JqQSZi1SEgpbz3XxAoBETLBZ72aY6SSaTZGQD1J2YDtMyRmCQeHy6eKB8Z7rWV6cBBmKSnjdtgGNgNxdfGZxmqg",
  "key29": "3yGFLBwHTuuAyJiZxZ69gtrSvSE63s2YsBfrmVLqKT7ANsY7QneLa7QRTzRc8LNdESgZQi55uPKSJu6zHiWeRXFQ",
  "key30": "54Ka6AwMr9AtqMZGjuMLBqemNmubcNyVG2BMEnebDm4VprMXnuaQm76jp5ppRmneUY8hnZA4R5ADPAnTiUvqozj",
  "key31": "3NCMH8FKKA9b237iniutbeq8zbd4NokZUEmB8MwoK3W4RD5NerU7ySqdQaEeqpZQe8S22YwsVg6Cx5WqMhbCehQA",
  "key32": "2f4uDqJPBDbx2PFC8iMAwPPuVKz5YNNbmf48XnubrybanWY7SpCRfVdbSLSBdZGqj8PxVGk1RR2Bju9K7pcDWFQB",
  "key33": "3258KsHSM9ATzpqKFYXdXiNQ1HVQXGYFLnqhYRwMCDyuTvuw3fdAnrSCMCb6AsJxRsQZerDB3jNhKcAkN3gZHLXm",
  "key34": "56d4GniWUdwum9jJRrzM9VKdS64wT9RTkL6Kk5aaEwMWSyWgib48mF1ZoHMBpHXCTCGD4qazobVdBFmDruRXUQFQ",
  "key35": "51e5GiJFjVtPNo9V5B6Bu9ivTctyFW9XtL9WAoeHrX8djNrjTN2TNZn45bcX2CBtjXqEJxx3NiRu1TYd3SDgePVe",
  "key36": "25mnZygSjy4WhTDS78Y3pDpK71kgmFxPSSAkgKmCXeWJ7qrUAmv3JsQQh2WizvD1BrJLb53kh5WMWWXng3B1K7af",
  "key37": "5KF2Qxqwkn9JnoM6hDhZfnWyCN9GCVqfUpC5atbuHWo9pLg72McrCPD2W2YUyty5d3epuWsAj9wsRMAqPC3ALozZ",
  "key38": "ARBELQWmc56hPGN36TugTmsiGeUMKf1X23xSpeEJ8t3BYgJV5yDgHkSpaBaQcij4ZgWW8YjzoukZELoHzM1YhvW",
  "key39": "4HwFYrNiCAQHedpjRbB4B8hK6L8AMMrTQxW59FBvXKsCDYo3p7UUR5jqJGRaEKm5qqFVxAArUa2CvxdE5qYdvMJm",
  "key40": "2kPN6tiD3AgKvs1WmyaaJyHeBWsHLGcu2hFase1DLRVbwsDekM7Yszn68V4yViBXdS5DEgmomBY94S1snDgtNT8v",
  "key41": "5nmX7TCX8nhT1huuXPpv2xsq5igpavTUeWqEyy4No6Xa6RTMAeMEufUsn7S5cHkyphtRi8NBjPgWCAjyhYXFhxv",
  "key42": "3VPya3hGbuvd9pW7uRQdwxQZERes8KdmzoMojBjv7i121qjZawP2jW6Lb7rNnPMzLoygUR77Z2X8eZrF9kw2BnY9",
  "key43": "3Vgd8p84MYS9X74zKWbnVPZxiUTS1hfinc5cTrzadsc9tB1wFgsdUsobrBWMgPWK271G6MyEHZcpfGArd7p4z77y",
  "key44": "3kLPXNu6zDUcn5Xoprc2jp3ZxnT2vkA9hjDwUKojtSY277CNAii6FcS9wsUeYFNR3d4Eeo4B6axkfBz4ZUJmvU7K",
  "key45": "4bVGtB52PByVW3Yx5USKFydtqzcr1VqSL14H2k9xfjn3CakpF8YBn3irRMSikkiPr2GDjk5odT7Hp2oLiaZv2ZxP"
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
