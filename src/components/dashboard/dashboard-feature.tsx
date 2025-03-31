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
    "538vtZ44j1bHxa4N4PWAoCmcJ5a9RmeEy64TxALG5VH2B2TULSzzRWTnJaCzmKtF1cNEkVxhvR2YM47PUY4YDaSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xYwiTMbQQ6uvERY17RGJqYDntHv7PQyPJa8fUeLURC5fy9RoUzp6q1JcwV1pceF1WKTX5R5maFSJD8L55z8wBny",
  "key1": "3xkQ32HjvAMrEJvQEkW8LNiBs98FF7WTAChvjQn2168Bgt4nZaMUDNpfFwikaoK7J2WetvydcVg9JDZHSSwGu5dA",
  "key2": "31WQkWWbsHE1rLpQ7XrtRVHEgkzp3QpjuJWHPiJzfZWm7wnRVa6jv7SYjgo3qS2GdKxdaEvdKLKtY6GzoaA3rhAg",
  "key3": "2deRS6NGp45pSMW8XNFEJkworTaQYBmJ3TSm7sN3xFXpeQNC2pS4Rr7dSJ8uym6mrcKNAuoLAJ8qP3uUkHnpDKnF",
  "key4": "4E9uHnnVeoyEDng6PpGeh2oSux2BsLt8E595mdWPjk6fQhcD95fY92kwncMV43ss7CSd1mJC1jkVSZirM8V1xUfs",
  "key5": "3bXhdhPLtTvkQzKBwc5SZw9qCXDFVkhXFejvZUxoBxxuH6QrYdWqWNr645Tr3eoEJMCKvEfUuRaR2adNGkyAwcWN",
  "key6": "ngUh9Kxs3KHMAHnNRmpQmUFJpYUM9XzreHpyZhewBdwAgtXcC1qcqUjeVhFsZZo88ajzpGJqqGStMCX6WngWdVs",
  "key7": "2dm1Bk9L9UdZQFz4V8ebR6mYYSx5pjA1C2WpxstsQtg8bdmXbar9ZXFXzsAg2X8beW4867Vwxc9CS1ENrj99wnzi",
  "key8": "shyAH5zjBhtotfc1Gjx6WizxNZgqgFrXF4xiX4xHes4UTr89AjHVMQ8dqc9Abpzpt9eWf8226WLMyBNsoMQAimi",
  "key9": "5s73oUzvEsFB3huvHsmvKL7uprLTHHGmFmA8fCcaUi17JcD6e7LT77num8b3V4WhQALqMB5GZbY17X4wvrqr7y85",
  "key10": "4R1oBjB7YNsHckRvWKjqC3x1vFpwwnr9iJeT6MvDu4gg2Acycv9TfFBkbfvbP9jkx3guh2Xo9hTbCKkbmkGDRTMq",
  "key11": "5YdRsKFZaJQc9At31Y14H4ikUeMZxsSsbMqz2xbfrw9K2RWCzD5hcTUsoEZkyGoXqUNzDEAivgw2vcpbxuUqY6Js",
  "key12": "5KavkLKZuiKZjDoS3yRVaX4D9Tyz7fnJaqfZyX7RzTYqMdn8kntsiL3bPTeggabawFcXsN4JpGTyqikemH21P1vM",
  "key13": "4pu67sV2GdrbgMtPpoG6BESeFo9D8knpi52ptWFrWJoVt7QWYfgz5nPuVTpgNmrGtxZ2hrZsvkUwTBho3LkQqwut",
  "key14": "6tjGkMQScAzrueTgTEKmfnPjpshnaPUqCTSJhqXQsyp2z8kGNzL6kQYh5RdV4kPzvoXMfZPLbijqvh7yL2gB49A",
  "key15": "4rYfM1WR8RZahvSHqyav21ss8gVjybv5SBg7j3BCEkpqB9KCGWKqQsefq7NXPcrDnPeo2XbWbbjadfwG9VkdJEzP",
  "key16": "3CYjz5MfWZuCiC655HDbGXLCYKYTU3TD6TXoPva2QjBPrRsEnmKQ6WeVBscAXXEyjGs9HWpxt2HA9SMGZ4UhfvP4",
  "key17": "g4td5zdRNRCYbNjWZKaLZqd7km2yfZEEKujaomXUKJUqq57bJxBXwJnhEji87KP3TErVhhb62RZHAbqLoEVRFxN",
  "key18": "4UtN7hHFEnick4i8RiUiusNonvBYRosn7NRRgu3E3JEgKvDnMsVhDHQpvEe5iU8dNR9PsjgmqHUctxWsxSnywQTL",
  "key19": "3Jqh9XRHG9dTk18T1Wp3o47BiQuCWuqeLqYWWuEAMaSnqsvBWN5UdVwHKandzS7kMs9XyDJJnLg9bUedzy5j76jw",
  "key20": "4TjCFB2CsABc1yVvsnRvi4jvZ11dj76cfdM6qBqTXWKcXag1Eh1nPrWq39TWpd19oCv1SyBWoAhWYv5F5yZW9Gz",
  "key21": "63Gvc8YJniz92ZZyyvstHpdCyea9gQhwfFD8pAdYFXqXmhwDEK1AaudELnT14SsD8msfi5u1iAqoojEqPS5YLzut",
  "key22": "4wVLKYtd4JzVpZRuovjLrH7qzAroC8EyLspB88zDvhetgsKihPb3t2HTApArucr4BWEfQCw2K5uG86BV9Upkj7zb",
  "key23": "5W7fFQ5XsMModPgU23VNQ8xA39GAm4wz66T9PwjWLcCokSz5ReJH8djRo1NAeUxxkDWSdAmNCmZNbWNN1AA2Mcwx",
  "key24": "ovqYr7stUmxPkTfn9wafnVato4B3vfNu5W3G9qg8tNyaXLEcMoXwySn2tUfp7G9iF3XZ785GJkFk39tbtqU3mRi",
  "key25": "57VHwyr6oFT5DoWoKRfoiUDgn8vPDELBPuKQpA4RkVquF4XzrondBSQ4JTdWsUtQusbYU3oaEWcDMA1NhndNKycb",
  "key26": "5FRsiVKEC2FqqdgUc8NSiBKjVdH1KS3WgFvL4wNd3b3hJHHb1hgdSC2wFYrV2qkh8ySLakYvK3oJt5fen1Mt555H",
  "key27": "38zPJFR3dqHVm2oym8NaTkVesKccmG6yQc3Lp9AU817P8YcASLaUirnbUKD9SXk5sWNfaFBQeeg1ze7MNidHGyZA",
  "key28": "3oC4Gozg7enWzXkGBkCtP8VB7TPJSVu5znV44sfv22xWQNcnaQvVwRZ2jzWYtPW4QVTe1KvfW2UUPBk4YXWNUSNK",
  "key29": "2Czf4zyBcQFwMExu7L9ijBe4MBS1WYVJ8o3xjdgTnveR2eQaxaGqK1TBXx1t5v5kBZe3xwvtxjoHqp2NoHsEeyfQ",
  "key30": "3B1GYxroWfGe76QksD3AHs2SZQYKCRcwFgcEnFSgVULjoDXQWovut1zwcqZBmLHxufQJmaASkgy2WknHYdVCLtt3",
  "key31": "sBU9G79DTB8gA28H25ZMV4NNN4pkedBc5FgBSDYrWyL2iWLRr5fhvaeen3uuqws5mZndc1E1hNZGQaz7j1q2ZfT",
  "key32": "42KHcQVdVaMEf6Zvfjcifqia9JKWd9vBpHUtfWEhVN1SRHRPFrzXYjVsMS5nf7zngHKesR4HuChtZmmBgeUJLq2x",
  "key33": "5JkCnZM3bmVTENViVzAgHrwPRPmrSVU9UuVfYK8aTpZ3eNLgNxVwcTKefHmyZsSCjQ8kcSAPoBDcRHPMWLxCotc",
  "key34": "3RCkk1MDY2RnJaZCwVJWdEELidW4wFber8igEKU99hAX6eqdLfZYNd7eVs5TD7ur1i5qAK1AxmzRX6kVsmgdNrFe",
  "key35": "4ouYBGhPS6Aa947ueuCoHB3YH5jP4G2dUva8NssjhpLZ5fR7wKDc9doJL1cafgjkTzamjVePGFrMxx9xiQKP4UnF",
  "key36": "hNEueHCEyUFcYCZxkcxBdBgmpSuVjiegS6DHNkGmQUPdzpJVYqkAA3Ceo9oae3x1aoFfY7c37Vieo27LUaFtsDX",
  "key37": "Kzz58qMrCNiKM8DTp2dr2ti6BjD9R85sYW23b7bUvXJpthj2umaxjUTSTafkUSFYCXZEpZ9bvizMN9rZcE3fbwm",
  "key38": "4VwRAHeNNXLGfymknnJXX71Zh5fPaHD4W1qzxjkxxgdZQ5y7NVPC6cGnFaaJ7WNEH8s8WdKh4zqCv8RA2S7194LH",
  "key39": "5ekXSJnEsMaD1iDWYDRuCsRcuMCTbbETraAnzUXkp7qUhkBYUtxy769Bgvr7Nybmw2tJmvHCiZzfxgdd6GAG8KKz",
  "key40": "dZ8KUN2BoHByQcXmK9KGENCNpJv6DrHNyJzu37ghafDF81mA5nb8ZyLTdXUbc3fdcX6BtAKLcMVtBfwr9TY5NxQ",
  "key41": "4bykJPxLaZusZS3ZXZwCBoQEU5pkgMkoA7FoFT5nBQAadbC32VAtgdjaTdhH7HU1E6dMkJv94MA7RRxbsfbxAezi",
  "key42": "5kg8Xj6FRducU51SxK3Vac1UJRURWD233kKNBqehr2ctNJR6tpYEiju8DxUMjsPwE9oW6JDfE7Ya5VKvza9JizWj",
  "key43": "3xNHzrDbJiR3Sugeupzepj8zyWgjTuof5LCoxkBnfK8R4RH9MKdZjfGYvCjDEhxEfgCc1MCAg1VyyTWXmfhtFvWD",
  "key44": "3VNTXTN3uGYtWDADXBUGJSFcksU1Mh9EJUD71ETyZoTPNdjx4WHNYx4ZfHkEHVfSESp24sjduQchqwoADrbNyQcv",
  "key45": "2yWRMAPt8tpkMDHVCcJoE524CZ3bPbrtpejLrxBaVE2XVA7FEp35DtaG3MN72TV4YSv47c5548A5wh8rrhLMTpE7",
  "key46": "3sxYt6VhStb3AGhHuzYNnAEqTRkwhBwinecZX6gYD9nZFNBdSAvnRbJg1R196fvTNfeGBThSwHqudAoPNfQ9WaH3",
  "key47": "2eAXJWT5B2Cb93wPTQKMbcRHqmsTr7RvM8igZ1xsVgLw5zDqL31sCYFsTFr6XHoNe3Ry5uKemLxB18nHhc6hfBYf",
  "key48": "3qVr4KZevRMxqkhNVdgxfwvr1mAkMEfRrKKokEx5x3d88aCPbj83GGzt9Uis2hkgQzCAG5sgPdNTPQy8wwCbahsW"
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
