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
    "Ci7hY1Xd99C4MJAvpi14unNuJdroXAgzpobHDzSd1ocE6kpkp9Hf5C3VVkNN9x9yfJ3g61em1RjyFDcBciHDjdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hiFi2vVUuGbdNCqeCuQsRnR9AXLsnBvWwh92FLkvTN5McYeYuxF1yNUJan5zSLByEtWKDz8tzJKjHJ3yYSyG5cq",
  "key1": "4zTHHXMrZb4jjZ5WdKwdMP4SCpGp4vMKywjYTV1X4ZGWBFbsF6TYmB2orJFsyWQfn9JeCHnGw8KeWzhDRTTJzWPp",
  "key2": "3seaQo4qtarsEGEimCD7ptaBnpyKwj4WWSp2Ko5ks1ohE7HEnc58PBR9ewtpedL824VLqCA6Hg3qLuQzpxFz1Fh1",
  "key3": "31SzL5A6zfkkGt1ERgfuYA8AnJhARNapL2CcCQU3Kih7dDChEx1nZ6JyqRAmjAPwfNM12Yp1YDS3kggARYZVKsge",
  "key4": "g9Kj1Tyc199q6xA6KvUWD3kMXxhJ4fJtK9PT3LobXttVE6U4HS5jgk9FyqT6h9rb6rTZ6LZii9bzHQ3W7GdTztU",
  "key5": "2x4hKfUJyqdWumyXnpwKam3FeS2twsLpu78VvPEXS2jR2CmQgXpWxw3J5fvv7N8xQEkfS3Xt9sdhNgfDxpvdrJib",
  "key6": "2nMPm7iak5KwETqSbJ6QCVTcUoLqGx48FsrG6cTQGZhfcdcWsvTC3yvWEnh58BMF9cdbhn3YYu5s5SXsD7rbEHB3",
  "key7": "32zZnL78nhzz4yQZMKbvRHx7rFiXLEW3rYcYAptFSY4d3zAihUbpHJtUCPfehAT8CbqrfuqasGDFGMsbKaU35AyE",
  "key8": "3MkmEm4ynkpBpskgA93eFqS8iybSPEFZLZWHYgpHBhjb5GHwWJWXoQ4CrRo5izQDB9bTjnE79UUUPtw5Tk3StNwq",
  "key9": "3S1mJmhWAgqQ1jfzrBhRtDtNQSBXA6nMuw1VMajp4YMDJZSd6NRCygMX1HVaK8t6c8jQCbpvaToNoBZZvfuE3Ttu",
  "key10": "5vZSZFppBC3wBnojLpihdFsvakWqqFra3A61mttgw71hjaLqtvP28eaQw99rP93NCuPJAqhvzGZYEHWac51Wg7nG",
  "key11": "3cgiKhagCZfFNa357zgGoD9ZNoGPbxfFrddewqhbJ9fBGDp9HM8My1FYGSL44HXSjfb8wXFnf2pjQN1ePLxMe14A",
  "key12": "5pmvPUWqXaHJaN4StH3WyhCoj2uhBWDmYh1U8xcWHDhrbqpdrmMN25vsBB2eCnchEjtxDsD4XRep9bsFRb5VuMXN",
  "key13": "5RYQ7k1PU65zCCoYowwxBAk1bN5MuGC6N5FtDx1WoLyboscVkLGRyTE5WVAW3Ls7Vi3e32Ut2MKzcRsYMzZnBQ6M",
  "key14": "2HGBudMBLwVM9Z2LVHv2cLpk36ZrDMx9jVAMKkXH4hnN1nU7vmqHNtHvNj3sCJs3fnEo6CRfUNdfG8VFJpa4P1nS",
  "key15": "5AJdrrimLGm3YYrzMVPQ7D2jGRaP1uNpMMYjRFfA4PGfoLmpoLjzxNqE2CNRmZK5dfb4voBeJfLxo6ErKcXbMK4F",
  "key16": "4SKRhTcZpPnXTU9zpZ5evt3MTuZirStmkQaVYaoz7Cjbn2YaKonT9HqHQjHh9FMUWk5k2e3br5w6UcRZ6RySL6dA",
  "key17": "3jmkiWdQuNqGk3xK2566faj41BsgrzqxEMdu2ZPqj9PXnxUouF75uZpAntCDiLqiikppVvQseJqSap8JV58nRiYF",
  "key18": "51QC6UJTa1BtkaT8bEXYKNsQ4KW7VPPHLYrDjcD7xuTaC9PQhgL9vrp8zjdbNTjGwKFx18HpKPQ4jWjHjDu5z8wV",
  "key19": "5t1oFFAbfbmTtFC5b85TTfSwR1RN4hGb5e2bUQ8UJCLuiM6wdJuDwwaspcG3LFKyKVPV81dtZaqy8AAFne5rGC6r",
  "key20": "tCWRLLmuvgZiKKZg6nZJp2su8s2voYKXtXEU3K6K6Ckvdgoqz6soPVJgUE1H4NPqr7izG6yg2rvhDa2pF24Xb9E",
  "key21": "2aG7oNM3mubRSscAHRvqVGetx3khbwXqqv2cswUaJdHtJ9EzmKojQsRp8tM2AHqU3Ffu2b12HoQLmYi6MfSUydPn",
  "key22": "2oMCBF3du75cUgeq2UfLiCitrmdU2LnBZGSkTxwph9w8dM67YPJZMbHb3VwSKBZyzvQ9mpCtqsgGqdkuBp86dgEF",
  "key23": "RvB521n3XAfVhxWnmFS8mr4FJ2Kvxqa1JjoXq2kWq4HYCc9M2sNvbG2sW3Q2BNyLWHTptSTk6AnXNmdYXyEUnh3",
  "key24": "2WW3pkBfYdrKD7KnaA4S7L9jZwHLbc5DyTLKrANk5qvjAkGMjV9zof64Y1ZJfn1pYkgNCmrgH8AhQHYixe54T5Dm",
  "key25": "29g98moBvqKwbvshtA6VZepEHdPtqYFtJZWtqKqV5jStQdeJCiJdKFy8caE5sBdVpCbyAHjNP5c23BFUX2ge8bVb",
  "key26": "2yQ5oUL7nVkpk4UbV3XbTD4MuGC76jWceciUwBBWgmj8StuxKYUFSYsq8BUJw1ixRXaaSo2kahbr6EvEN2HQvosP",
  "key27": "5JmXAAKkmD1DSm8NLgtQ5jT2JJ54yiv1xzMzrUgfBxaQSZAPeCLMC9hmtosAThmNQ9G1umfv3Wcrkyt4ZCq2Vr3F",
  "key28": "47sEHNYyrz7MNm9dhGJ216rYywG5MwoZvAvHrMiXrrtiPua9ZHYFUvVDA1TYCweARuMNqBunXbnXcKstsu19DZQ8",
  "key29": "48t1e4G2dnjpmHbc66mLNyhhNB2yyCcqr55Aw3JMxMAhnyX2vXhzKLAb2wksbjC6vr2wH5JDGjMmsXYit6xubKBi",
  "key30": "4joTAZoJACK7wqBmMNhkPzEENQ7RRrzJSjXWG5ZbUX5UddLngSDN9Wcb81dR4yDqqtdn8X98Y5GdSQYHtx4QXnVW",
  "key31": "4gCUWJrXXgYk4TDvvVKj4nURSNbAjzPPJfFGXfsxicgEhc7wgp95L8v6yAkFjh8MpEW4wtrE25Qac12netBFNWRe",
  "key32": "57YZjvf1aC5RNHFaco8Mve59mkLrxZr5MsbRp4HNNK3EBfb12LFQWBV7cHiYXCTMYN8kDuXfUh2zKQyfrKN7Mpju",
  "key33": "4r3EznmVEG5dTL2ytidhzWa5q4ijtycaZ7pMRfoQPfMwuRQ4hVhE2p1EQUfrXCQq963Tg2CjFVEVK8tqvGJE1nsa",
  "key34": "oEJ4QDCm6dj6AtK8FhdLXAfoW8caHSMk78NkpCiVMhAyLEBhZM7MtN2cLEaC8XEqS2fWCmXHsLuSVcefihgVFVg",
  "key35": "fCc4g7mpw1JWhNunfRDKCBboMFMSatYXFioxu1aYGT1Tadg2ZRTuuNysxTXVHBR1hzHnXLz89uZ1z7Ws2M5koi2",
  "key36": "4BRtg81oWMMRirkBu8FYTCJoc6rvVNdpmHxsbhWLAwU188jZAEPbPNEmZZtNVVB9mm34YrKQJkB3dfYm5swt6B3t",
  "key37": "4qea23L4vjUGz1JxamKEggK69uoFy1XHydhTfrJ4QH6DMM4AR36HQrVzhw6D5bKJo1umqNVyaJNfcKYUwY8G6hn4",
  "key38": "62r9zxQext4f5686XopfVuHTTKPzq7Uvq3VSoYtV3RH6vLACNUHtxaVDHdGsNfCDVRoH7xMHrmvwGsGYxySBJK3Z",
  "key39": "3ckTxWejxvvonpFgLtAnapnS2VpF1WvSTQEwjWZDE42rhwZzoeky9BRJWon38BqaPdYa7oUNSw9AkYLPuEzqTDt3",
  "key40": "471JmcTrkmGoX4t7e5XeybG1G8ErjfSCnMfafctJ1PVuXi9smttpzooMBsj7jCgpMgBLbdW3459QzW6gcQT72NaW",
  "key41": "5L7ubnWFfQjFskuQUJES5mERXufxu53VWAahQtziHksUJEciqvbUCYF4ms1Mvc8ifyqfX2zZUYqb1t5JNjibKCWd",
  "key42": "4pskiqa5MTgkrm5qTJAcD6LrWGTDuSUBi1G5K5FTmkyt1nxF4iES9xdC9G4SWCTn6S3kRRC2ibBZqKNAVoaCH7jy",
  "key43": "4eR6mE1wyJLJBVcejrPx4Apchbte1rcwS63jcS5Mfttt1ZUF1LZq8uTrjLWabs2tiXcyBzM6deHwtYFtpmF8A53y",
  "key44": "2QGiqPJJzUp3Q7gvsvRSbqyjgAt9AihGgERqYwmnVU5KQCWaZN6x4uFFBAwpEKN3481h1iFHsqdRaywRyEieGADf",
  "key45": "2u7k84vKd2mc9w3KeLPfAQdysP5epusUnUc4Xq4gP795Yns2HJH145dgNHruDbqEfPLXbpEWiF6H1WEsXznzU4Ni",
  "key46": "YYrPeUsWHki6Patxyd7VPrhedu8mnXQScDb5sLSdDmQv65qwSE2F3AHA2iKVJ1xULhAm3zrDZRzzsJFoGv6CaQW",
  "key47": "2jsbLjkiv2TkrP1Aqsw5iAv6dPDeHkg5aSh1WfFAUnbW22J4X6CMqjhhgYmkA1z4ynbh1SYzTnaCruK1yZXouajN",
  "key48": "34VaYBes3FVE1e6i1NV55n5Gmb2Y1x14tD59beifPKSrQNpK5R7jAMRdn3xP5gvBUVDwvncZPbnVxqUiCCpsmBXu"
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
