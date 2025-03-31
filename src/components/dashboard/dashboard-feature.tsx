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
    "5Fjyg6wsDqoSWUP9Qbo2io6ftoSMiWMTL4KigW9KqsDsuJi217ngLbsSC2gUb9Q5NPDWtchpjDhqfqnwchugCqaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UW2t7s13rJPatSSQ9CfZwQRogywVbQnWAixsvw4nEfnszN4RBy1hSc7bcNCnioDk46TvNCLmZ4bfVE8fbVTrnv2",
  "key1": "5egJhrKrzKeUnqmm21cH1VTkDvesfLcWS4eqZuXSbLcPFsZJyYaZarFwcHJpTH4F5xDwLBJ4Urb12mvV78dpTcQC",
  "key2": "2TsdVPfFY9dFFQEg2G2x2oWVW2xpCs1xL7JSPzPtTzpNYVNsDeRdDUpRjkMR8vjQ1MWrKzUBGtD8YjBZFn5Nhgda",
  "key3": "4V9wGAPpLeeKzLPX5rPzZwMUuNEkDZ451wYJukGebHh2YCinYEyWWtYNdqfND6PB6eop8EgZCkTMbLNbhDPj6Fo4",
  "key4": "4yJGcBZmkwg6Ex5mYZQyFZvyQmvo9LdZ82bMLAWQKZ8SzGAZkhZpuAhHkgHccvHfebM1tzc1rSGzS9uSYwKhYU2H",
  "key5": "51TUkYyyC4bRAVZtjS5QBG7HSpBn1wSN26tbFxrPMYqQftr3JEkU9SYnGjcekpAGwuJNus2kExCpXvvBfB7rc25i",
  "key6": "59LnM9FckKEMQ2TR5B7em6uWL54vBydE9twJHNNewLNnPxoHb2QG25VjcBtH5YJLW69CQQyu7TtTjwZ4J3nGSGfm",
  "key7": "cPmuJYSrWeZNQ8MftNv9sjeeT5Jn5bRz7XXj13wmnD1xwimQ1m1wb3oqpkS9NJEew1whCvWbUYAUS5sABbophxc",
  "key8": "4PBRxz5NdNgZJtAbBeKEWvf87knYtzibtVqYgyQYm8B9kN1nPgVPgGBWxWNoC34AfVxfXCZ23S8iQVs7TZ31uFNw",
  "key9": "3Nf3uFPKDa1kDoPKW3bRzAzFUCpQoEoSzrzDBRmusxX7MZgDDbbm4RYtRwkeh7RKLAEz2xWXtdrm1wYa6Z46NHnU",
  "key10": "5i6vGufe7kLjqYktPM9ZMsnfbATTU1WxAM9XKSeowfgL9DTMZQVEDy7FqeJSzq7z8b12yzz5Nv1JHETUYdBQ5x2V",
  "key11": "5LgQvQ39TRU9bgzh5EAEfCnEPdkenRAMuEmUpstxGSMvfjXQ1iXyjQ3bwmPpY1nFESYc4E23n616z9J2MmLbreEn",
  "key12": "5nUPzJeqXsKDwT29c9QGggVbb76mJPWSmi8cg8U6F1cPGnP7UTYFUMjRnMkwPiUiRWq33s9bBmkycCjQePamy3z7",
  "key13": "bYde53Unba5fJ5P4MGR24Ft1UoZsSpS3XEE6qVvxuMtCQenyNR9ycmdZLa8iTAvt145DAMsGTaQ8Pebczp87P9r",
  "key14": "4b6zGjdRe7XUAjEdkDf8je9PHVquRvRSZFBojaDXhTHq5ostmAUBXPaGw4GBpzjcRL2oJcNN3dJEpdTJT7QDuZRz",
  "key15": "6YdFg2ap6Ks2Q9irHaQqG6F8stMbYr6FkM7ftxm8a9kCgaQAS9FT7wK12HJeNDbRf29SYHhMvxXPpA9PsDaFxVh",
  "key16": "2eGg9kXPNWUn242kN9WRK4yHijsyaze969ya6vH8nzQJ2qFyx53GyD7azNZWmwjTQRFJ2m7XyLF5UDwDSsZDgsEy",
  "key17": "3yMD6Xa6jYc8v1dMYXi8A4iiTWDP9iMjzS9dLytguVJ3B1uuerAB9coK8XPmwdAXq8HuXbN19UCQbSZo4hF8H9q9",
  "key18": "4tDhMpoMV657SP7bc1nyeHVXxfkvxrqct41Q7UvbLcXpFz5Koy3nDUXg1q1Rv6SXRVHDLrKTkreQJ57KSB8yBdsj",
  "key19": "2cQLu7kEDHiz6NYoQQ6dqrP5psU1LYYxto4vAg6eKbUkh5VXhKxxfstDRpjFBqyd7vnEME3HUUj1jr7EK8MU7eTR",
  "key20": "2gCnLyaq5mdABycy4M6D2TLNUE2gdYE3W5qHiW56cUVox15kGENofEo2rv9RBEsMZYT9RoKY9HyAP9uK2Ep2ePSQ",
  "key21": "37Anuem6iwMeMbF7mPKmJgFVA7wrUQbmTCSngvRpcNkqyRe7hsixAhGP6v75i3oLeAuuKLyEY1m6TabmHriJHDeQ",
  "key22": "AHYKNfmFyLaADWVh4bfyXcqn3YowMhrmuxmakidweV1zjEubme9Uph8Ecjyaghjh643xF9KxtRuFhMw8DUr2YNJ",
  "key23": "5uQVFSRCK3zMxHY3C7M5WvtvB2ELZ5bDCwk6Sxf7vnKVW3jLVpF1MtSYygKUuQnUDL1mnw58f5nAwAi9GwMXjeAy",
  "key24": "LiFCrETd2JLY3CVU9d7qPtYaDvAfz2taTRFXDUyHR5cHVFc8Ky3NpGr6rS2jxBizXRAGPBeS1hmv87uBuyjFBYe",
  "key25": "3QWfyqKHYGa3xVggiCLRpGdDevPnephrNUbRaWHANR6HnQjYma97h79uwB1KL7zS2Yy43TxG4JFosHdFMPLu2Gzn",
  "key26": "2a2rcGKpZVjTT7kums2F9q9fBfpXL5eB3imFvfTp4j6zr65eSyjo8agByj7JSaDiq5gFWqETcWY3LYY8GLVqXKtq",
  "key27": "9PRinUScjXs9reB9KU5cXJgUh7xQYRGMgGMJ6BY2evGhM5X1y1s87eXhQR6oxRX7SRHCR89BVWEWYqhc3cEfh9f",
  "key28": "5Uuu2qapgsyAwouRcRnV5GcQXRymNifT6aJcKgrehUxYenaT7EgFTppGdYkMaxmcnfJQS7FMjhkK3eJLBUkPJknx",
  "key29": "47ujGwpPGf6X4RRAe9n4FoVK5egaU98ih1m2fV8Y6exDwtWenPb6SNt6NozuD7BwqqmWzy1CbLfdEADt1eJq78F6",
  "key30": "5qMgLfDtts5eCNHNVhKLBdtmZjnE3TENue22F7FBG9XEVsGQxaR8idGfnCbtN15jdYSxPTRV7Ms6BLMDQRsmr58M",
  "key31": "2zuV3yGfQ87zUiGQkmvavxmqcPU2dv2di25kKrZVM9aWxKBtvJHE8dNBo6v84DRUKMaTUhs2cF7wWqo1bcrsfVrk",
  "key32": "8jtYaWPBs2iMKqEfSnXQHdHVr6FyexaLGCLmX4nWyszbq1uppTMUTZj8haNsk8HFT5XxcUgPuVJf1QX5epHcfzL",
  "key33": "4mbiC6zp4Kpf98sTcpynHpPrTMnmSpVp8jQf4Eoru9VZmZuKCSYyzceVusq64hcj7ywUo3rLoYEnbUiFj6a4rHZC",
  "key34": "55q4Tunk3RA97QRmyxiRKLTsC4tY3DAR6QcaiXorYKRm1nxmf5pV1AvCqJTHPFVGqcx7oboRUAAHxR5To72gEzKx",
  "key35": "2fbPXan1h9QDneGRcdgepSm1txxkpG3cnw8oCWDgTX3upfeNGnZs8ng8yfYpFqVKHnCSuz3Z7fYChSotKiPvEcD5",
  "key36": "3mA5PM9Lztks1eiebwE1wL7AzE8nuKovdcmKWUgz6URgK8viSwREuhXBDj3SWyfdSjg1NkWCmPSbmdRr2fEYMe9n",
  "key37": "TuETRzUkjX7eN47vcRLvXKJeVFh3tGC9Qp8U4qZptru6GPHcCFpPY8CcvxbP28NrTrgVoKoWLhsZk8yKFteJf5X",
  "key38": "BdmGkyd8YhW9ftUDCCZx2ocyUBsoj2NFumqek6jEdCchuG3CGr8WKCP9AYPAeTvZo8UhWBSPmpBTQAUEs9CcENp",
  "key39": "5iNqADUF3vjyh3u2pRHBdkks7ECAzz4GhGKaV4qAaZ8RKLewq7TsjW4g514sc4koMx7QdHn8PCJCeg2uY7cp3vge",
  "key40": "4cLH2KmNQxzkh3KNmRwGa889XTv4fvk3cPuj4UHnjrdRHy3o6Rfj67nGyx4pqBRnd4eo23b393iXt1Vt73c17Abi",
  "key41": "5PxrGoSPBKqwHW6bmvnYYxRYTJ9MFVSmWTSmvQZ25gn6GyjaGRmxrE2NEeCSnkQ9BfSGWPTBEZrWz9afWSTXdTGz"
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
