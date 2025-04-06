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
    "5AXPAkYQc4eNDroyXnGyfnuyddL2SzCXpQDGSNVkJ8P3y7bDwL9QYy7qmkGpL5TzbPJSQ6ns6XBCNKmPt8JNHA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yLon3hukoCGpL4XXjqQRkw4WroZp4ANJViZZhUsXJFB9APfSYXVHGve2UL4AmB2PjXDEkhan92a6xHCs1FaZ9cR",
  "key1": "2SJ1yCfY9QWt8BNdY82Rz6VgjNpZxpQdgXRjFDEHQLay8U3G7oDg9cAQ22zsfbM9uiUfpC9taPxyHGfc216cnYBR",
  "key2": "2zum8816YxZGTGAtpkmNTkSyJ5AZ5HSNKJ4q87Ebme15mdECHXojJLk3c4t5kVpvBUMSmtkrfP8bvacpsXcfJtmj",
  "key3": "2MjhFhQMsgvWUJWuVuCU1MeAoMVzcmy8AyVZ3eikk9zw3siFzZX4wh84VqdLjzEeZ795CQzTpfsLysF7MYiq1Fxf",
  "key4": "2tk7pPxtjmyAwtxgkLoW1fSBRzsyeKd5M9rap8zxVHbxrDFZX5XDGh7uSKok4v77K3apodGkewWBnjMiawN68Ybq",
  "key5": "2hqbcmhTj7jR9LNrqwJTtMXGrRTNCezJVV2nqSWCmujdNcHhbYKbPWngsfxjx941dW6RGamXoj71GrVF76JWBRCF",
  "key6": "wTXNZxizSVoauCt953oHCScx1eC8dwSmtkLUL4tyuLnFpBoMaxss81tgRCEmUJC41nvfPcfpnM689AHQgvP3cCY",
  "key7": "4XRsY7Jm97adYNoVm9HKqzT3kgK6NcyRePNf7LhzCUnAtytKxTrRFN3MbrikHQfzz3V4sdiP6mXNHimKsfScLDTT",
  "key8": "3wEEyTg5pJuyQ6BdN6FRtoZV3MLLKRoG6ZeVXgDwFzVDUA4Mxgf36PXFivEAzU3ZCWDJh2psharwGorcWFtyeLQ1",
  "key9": "5ZNWAiw545J9joua83tniQepZhsh2zmw5WKXijCxau5TZyPn7tUoUYChb8arN57MPyZKEfT5FM8DzQRBrL5X7N4U",
  "key10": "3w9sYj4gL12TFkweUnRmPBfJQdnVhNBLbZh7EMfZjBwJ2R2eKZiShvynpnvxPZofP7wFkqWbNjmeGvtSNqXszsNP",
  "key11": "SFSXDFhj1zNxrVb2F7j75GU7n2ukcXKeGm7uuyTfmeFE8VhGxgR4kem3RgyRMB6EWSoEjEmuwf7WPsh3Qj2Rniu",
  "key12": "4FP6tYJNJyfTpz7fNhD2Vsxf88fWA6Lu7vQPN85P3gxWyBoJPDmKpLGU4SiEWrZJXTLaSYzSynFJy4nRPNr37RYm",
  "key13": "2qy4qA8GnQ1FacHcAML9TANYWxQ67EubmMMcBNqHQwz3wa5jWYBwPz26ieDGC42QZeZPBv2bxzbwTFkMb1xQ2cct",
  "key14": "492ouCWCsyqFo7KEKbnAFiUPxYbyRuYSfgxFHNtowK7q94NZUTtKuJXr9GBkratXoQTk7zggkR1nseanfV81kRLP",
  "key15": "3CefniZaELYdjV2qQVFBoxZTJ1Nb2V8AKuyzWSThsBzaZkcdbnUnJD7EqvxNzQ5NsPFbirMUMxg9ynnRwVqFgm7",
  "key16": "5FAb4YYjBr2E6EJT2fqT8yaNn2g65frAPSxht8aSbSfXUc1cuZbpDarvTxZJpeFFiB3j9JWri3HwTVdLj7QNxw2M",
  "key17": "53FTKzJZwQ2wAcwGabebGBLGURdpDaHZ481in2xw2orh2soiVae3xEL3cWG58cUNFthPZAWv4xpBaXcYg5esZkF",
  "key18": "23AgqZ6DtXwyktVY4da3B4dMM9JFvgCNGvJBNrwJVQRfJYC6xr2mSXgKguN8WAb54qrfDnqeAbYr3wccFeLinDiq",
  "key19": "2SQNzgZTCVpf25rTw2Dez7b38F4M7YCbBDWrMe1g143m7fjJBCRQwn83u1zUYvu8TdRpf9EjyjfgSFvLBTwtH12T",
  "key20": "3NqzSqY4WRiBMEEuzcA1CoX2TG15iz7chUf52XALwwtaTHcuxRiFzaRc8xjL2Cj3GFnh9Zk3zBTnstGETs5LEDKY",
  "key21": "3CX2Gh1DkXhja3F8JugrTBDYvYKmVQz8mDhdnEgD8mpTAPhDdaz3wf2Qwnro5m4KmiPiS1eiSccNSeCUdwUoq1Wv",
  "key22": "2fWfqv8d3modSmgd93Z5z93sxU25G7m2CcpkfcJHY8kMXTpdt51PwrvE8RZiFZKZ7JcPNnhQvciWTvpP32vRVJnV",
  "key23": "3fks7PhpNzdpxVVKjYbxJVPaTJYce3JCj6LYQmdDjTkAWMwz52K55prBTnVPHHjMbQdgTeJc5xhmiNXfspTxqPWr",
  "key24": "3ure2iN9Uu3jKN8DdcdrAKB5gwEio6S9e8r14sMNcxAjjmjyuGeMSeU3vGSYiAwJgSi2QDyo9JUwJ9qNNT8jgj8R",
  "key25": "5MkdVbcPtz8fKfYub2eTuiVvvWBoDcmGQMumv6fqiMJDPCP1zrjw8pCQmyZ1tiZ3eaxVnqRPv4RyBZokNKgp97KE",
  "key26": "4738Mg3C9CC2mcZgDy3nRhyiZrEY9ci9Q52bwHbU3MRpDNaPkCZAxutMdbsNh8D3VfvzmKa28jWDtzzKbNedR4b1",
  "key27": "zch6pbVBZthXKJ4pjnuPduAN9Pw5s8ZxtwrMAdqTQX3awff6VoARtYqxQcGMMx1hkTH37uQupSZCfQoJJueK4FH",
  "key28": "51L4n9Un5oD8fb6q1WmkS61gnrx8S8XdVXoqBBCbLcmt1Vp9xgS8fR5pWcnTtXdsLLoBWUfeh54h1U6n737SXV4N",
  "key29": "EYdL2Cc5pzVZtQNoCQJtsRWmsjAnXmTAvaKwSeY2GsASEfSfcuqvAmjAYrS4KeNCAk7Lw3tSM34iw79aDcwryA8",
  "key30": "5b8b9WKRQ64xHgGV5neJyaBYXgmDApcsBVaeB42zDCq5bjhmUmvSvTsimC3zfddasYARkCZft2o6tkW5dqEXrhU5",
  "key31": "4yM6RDCdnfnq296f4hxmRBGvk58swbNvxT74e5GMojkXZtvVQndZjXrJaxtWw6Hmisao7MrcJvzK7A97biL4TQGB",
  "key32": "5DdHpm7iA2FyGrBx458MwzYiaHJEM6xLG7zCDBuHBHeaK3AnBzHLbBSEyDNJQGN5hz7m1N2y8u6oKLcy1nseK12a",
  "key33": "66ccSHUe8pZ7SxA655KwzmeHXFtUYgyFxSXB8NNRBSJUs3NRzGePKHTQjrVJ1xAt8qvbsnJJ7PmB4FyP9QXHQ3xg",
  "key34": "36SEmxvAmPXKFnXnVM2tSgnpTGKXp3Q77coTNqXLBno7MGipRgGdD9M8HifH4JaCvp899STrqDu5TTUn9gjRWsKk",
  "key35": "4y3Z8Q8PZvoki53rURY3fLK2VcdLzjB3SRPSXirnnRfTUngMLZkG52JM1gnaXicfv8osu84ebYVuifbtcgdvNygE",
  "key36": "5AYbfbqEEe6wdFGhcdK6h2A9mBcCxwTk2qcGCVkSGJXrV3wtbJ7vyDNgAFSPgHhP3LyQJUEsXWGnq123NndtUsN1",
  "key37": "9QyX3VgRMP9Gs6wo6saMEKY5QZN3EaR8U7WxBTnTKWb9eknrV7NP2rqFqVGbWE8GrDEcQWaAJzm3axL9CUefZnm",
  "key38": "5dd46t5SrGJnLN73w1T79Gd8p2e5s4cU7cfo5EYZCVgBaV85DJs4wxiKaE84Kmz7MydrJbp1vwSij1aitPoAaBeS",
  "key39": "2KTEpmNc6fVcez898Xu2WayoA5np6FJtj9sQaQwQVREvtRaTL1hTpg2HjH3AAt6YeR8N4DCnHL7xDzCDy6JqVJz7",
  "key40": "wqwf1Si4erd1mRQVYTD92JiyU5JKuq433og8Y5oUhhSZXE6hQYy14vHgbS6BMrt1jG4XEF7LAXpMsthARDZe2B6",
  "key41": "4am6udLV5Viow3V4at8P26925sNTA1s2sjYJ9zjZzEV65JzBQ4NBDPNTkiMAJZxDLD8dviUwCcJm6fQtG3b3UD4",
  "key42": "2eAufgDnSJ951D4cSXqAJivnG2ksDGaHE1PmugkPjKrqS2LWf2TA7ugJhshjaGowiuS2y5j66kJDs4jSCJQeadb2",
  "key43": "67UGPCirjw7KHs3LWLkEJRXfvs1NcVitbd6ihLutM9Y7vkLNSMr584pxkGUGtip9NnW4a6noG8q5UDxnGRs7NsKX",
  "key44": "4No1JzgCmW7HVHY7mJC28vNpZwQURHsb7Lzt6wQivauR4fRGEL72QgYeDaavsJGCFa55VrDMtNCmrTtsd2dAwvoc",
  "key45": "3qG3rtb2gNN3ikf9F8S5kopx7k6fmvDc9QgRB48dtFyfhVKoQnu8qgvatApWWhuqXFnhjHewdXL5d1QLzBsMiuG2",
  "key46": "5yCWzsX7KV6c8Ad77V9WvV8bMhhtmSzYY5CJ5htFABr76xo4zhbVsr8AFe4BEuwMz5J5TnDfS1LAaCzr4ejmTYbB",
  "key47": "7zdXRM5LkJKdmARB2qomvox9A8tqWuXF6eZYsar7CrgthGPdiwouwNxhXDpBLjLFzb3M4GdeDut1nYb9qzpMq5z"
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
