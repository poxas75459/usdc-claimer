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
    "U817vJTCToLA9G6sN9MFz6dgJg2EwqpNudJxz9eQvX6Zb8xson8uFwZhqgcph1t7bKxYVxKWj82Fpnk9bSvA6wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uKPoFDbgoSpx9ixq2zmJZysfzS1FX2BPPujqYsDhbT78CLB6pAEXQrj5Cz3pKAKRokxbwbaXotdqtd9MrZzPpav",
  "key1": "2KCqnvwxyJmja8KHnhAgFLcj47yg7JD1EN25EGuzxXw8ik2m3KHXQRpZxxgYqmfQAUi1iDbUmRecmZVCjeyspa4J",
  "key2": "3cQKi8n1Aa8b7xnL7fCGaYdC9nw6JSCgY3qqp8Mk2LUdJZzKQ27sh5NJuhpSrQCDBkFwm7wAbAoPEzeq7KDeXPFk",
  "key3": "61AgDnCXST53trcLzZgSM2jyNjhb8fAvhySChkuynJHwgWRTzDVxSjm3oqATdMkJyWkbu7bEebw8qer7NFcg3ygb",
  "key4": "2Bh8xKypNJTd6TQDDBqT5dTHm5Mh1dBbKWKW5KMpPHuPraDv1cTieb6LcWPo9C4hYXcRwrgrQNz5EiVVXqc3ctgv",
  "key5": "k9TjcRRLEDrrJbj2KZSPVYjtu1ymM1DdQYZYuXaGMfKbkqhcSJCUoiXdoz2EsZ7pypQ66KTW9xubL9Anjni11Lt",
  "key6": "24o7ExfW54pJqdKj8xyM44MWoaM4h1zSLqBGv4HmsbHMP1FUDjLaEwdJHDVe3JjpR3YF8Z2iQSzQ18bAPVHK558a",
  "key7": "52MfEtU3HN2eAdhkgPJPDMpzYEMrs1jirbFQFxELwoYB2txaPvMWPRnvYkVdZd92DvfQ1ASquqgi4YcR6tYZQ23A",
  "key8": "SiETCYbCtvhZFPCcE3rN9hFzQjBBK1o7M4PdMS4APqhAEL6q5skiAN1JsuJtwPcqisdL5gVVppAw9mw9WCkmTXf",
  "key9": "3cTsyDGv5DL9WDKYg7LMTGfxk1WHzVvpYx1JVa2gQQrGAmXAevwhK4FCm7j3CkDPx3AfSMgF7MnYQ4xtyMUU552F",
  "key10": "5CFySpZ6Kc3LrwT5wmRv6WTC7rYsxyoXuK6k3z8ED7Y9LXDFZ26iF8NJShniG8HsG7RDWY88ynkQD1L3mMsMZgfV",
  "key11": "BVFPTgT1mxTDTUsix4yA1W6CxGcCbpQhN45UPCosNrxRwf2VNMjv5hY7jENNANoCubT7N3oNRnH6fsK1mqFPxZN",
  "key12": "KKQvAf6Rp4NEEobfSt4t6noPzP5oi3SM3bJcQBZpN72bU4z1LgsQPgqhzJvktEv9sn8TDouhaAEu9mgiuMmBoeN",
  "key13": "46Sz4R1i8d7z9HSPW1utiKsye3X8So8xjSrA8dPbH62jVf1AvFMsmZik5CeNh9KQyLCjLmVBQ3G4psTQi792fbPp",
  "key14": "28Ns1Ntzg7DtL1veaAyk8xh2AiisaoLPTzYBGy4qgZrAE4Qbjn3GheNGYzX3CqBwxDrwRmmeSyyzXCJ4o4CqA7h6",
  "key15": "5nRqceu8pfNYxz6sQZtjykRoFRKpnea51GA1yqTTF4rZ6BfGmMxgz8roGHn28WvAE3QCwAhiGJxMhjuwS3JTjj5S",
  "key16": "3YPg2JKDn2WCtDXSBzBRiY6KA4c3ZsN7TANeAW35B8ZnPBmH9ppDAEdhcV9QcL32849XyyjRpv6bMvBhJLwe2nZq",
  "key17": "ovGRtCRCfrcAY91xExKMoGnLSGWh9dGCYa41cDyJH9notnhqFqPyjV3etQSTfXwFAKFHk23PC3dhQiqR2dc1Hxv",
  "key18": "4primBBiDAdHdY8X13bnFH8DPEW7U84ra8o2PPTvYTcoDpzVRDbw1ytwWxF9wex4TdwVXuYSsrFuv9WCW5DrMgAT",
  "key19": "27P425mnxE8N5cX2Tgf5iU52TsiyETn5cMwTXoCUeH1SaSMyhKm6HRnp77mwXqdxjiAV6o3iXKwDyPfj61TNCH9S",
  "key20": "3HzwizxyQYGtnMHuehGiN15bYmiMnCWtihZwmC2nWYrqzoc4pXqT24WYJBUYpMVdr17X45qx68bFmWS1d84CvLHN",
  "key21": "RBSJX9nNzga2FQzqMRM3szqjXgri1XDbqaxByeFM96H1pFkXj1KXTs7tDSQivddFhJT7883i9k28Z2yyT2fpoE6",
  "key22": "5jTm1xDffd4T1ntEafp35DVNbg8QmhXf4fhMHagNA8HV3RSmopUkC64jPp7RxqM3uZFYA2vyUCghaAsSU4oac6Ni",
  "key23": "3rH4vwshJrGsPKtUTyuz2eFXjWnDJ7ip2xthsCd6EW94whsgMczmY7XHDx1K9pdcTdX2VMuxCBDD3uPtzDsAuTXn",
  "key24": "4wp6qgn4G4E4xSmAuMzXF2ue4kDFkUEJHD5pHU3prkXLanRJRBkixXXqkjEYWTLGswbrN9Q2uYKCtFFmsxKiZm99",
  "key25": "54x63L7merTqLEp1iaoVXLpM2toXCwkmCLVaCxweKXk1B52FkPkQQHjEjxhAUYtf7ex7QP2Uu2a96ch3N9TMiBCH",
  "key26": "2cJ3JcZeZsjLSFDMXERCf2iRDoyfo8s13C8skioMjH7hoZK8inzumUQeRJWSDfbMzKUiJXg5qUxQcK4cqKqCr43q",
  "key27": "4wVY8umzKZy8qDWVe1VtFUWvzC8REGTCzWyBxUzPep5r1V4vAmGphj7ryree6AMN4cXw6xEJH3KEn8UdXC7w2FDh",
  "key28": "4CYRS6DwqEcYLE9toHQ5ZUEkanHvQQMzE1pJQiSYKQGKJkJ9yQDxNVY8obp2tqE7Ew8q8D7M29eBVT9nqJ8yxNpZ",
  "key29": "2RfKGQLiHbhoa5BPYQkTCtbCNtkBW2uA6ih5h8u4DRrPFp2pRemgcATkV9VYaXtnQyk1tpadvzC8Hd3KRZcAP4bq",
  "key30": "4hXevrzsmM1b9xfHQYSDz5SNKUmKSsXBRu4kKHwatHkiWwYTaNayjBD3gPi3GchjcFYDVSNWDE1khgxUyKoNM8w3",
  "key31": "2PvSSUfJZkZDxZCsgXYT3kR3CYVeFwKa8xhviSpYP76vGCQCAUaqnRiBFeFr7G5H5fdhGgciAapNU9bZSbsDSgNz",
  "key32": "2FzVQt4vG1Aj223U5WCaFnicRezo3Stgt1BjfB9H63W9vhA7txMWoM3vyhTp7varfeTSW6aqqadnFQJhMdqSsZsa",
  "key33": "3NHmcDpjyNHUaAaHuqsRb3L3zTX6Ki3kJh2zVW5JXpWV1GorDkFuLejp1BccKg5TWvaCbTN5Dr36mvgxZKgf2aBW",
  "key34": "5xECkLXxZi87NrpZCWTv7AqgTuKU3nWN34dWDUTpg15EcVpfnYDERbkZaPhQvfjXtUPMwCng2frMxT7YTbmEJF4X",
  "key35": "5StUx5D3FkFf149svGcz2GCUMFBsV2C37Vx4vUcBrvyS3anZef8xuFBvBqgb5CNydSffyZtPvPKihoFon4j2MRXE",
  "key36": "48RkuJXpt33PNsPdEEnBGxRE65Kjwq11Lpwg9Y8puQpwpkraFM7kZbLkFEitsDh1xVczP1ZQNyBxFovF4PGDu1QV",
  "key37": "51eAsbvmT4FDqTRUAjkxYpVUHgybMG34yTD1XKocQbWhJstPbHUcawCZEujkQfumHrLPUa7283TBouZGALnF8CNA",
  "key38": "2s2MNGvqmFyPvhbVBfvj9Sf4FB3BmMXszbS4ZYJRDKSB9hLpJ4qJ6rFjSH1rURJRKSLoMAaHUCRpjmiVaRBWVY35",
  "key39": "rtBHjaZbo15TQjzoWhQMVFe4BRLNC1wChcV9YBq3weN8hEWukE8NpBdvAEKGxqJhs3cnRaLb9v1Ler6CmR6AEj2",
  "key40": "4qgenRFkUbTPC8CgiPiv6f1nGnMx2GuCQjKN8QLqKttoDtqcGfEJbUmJHFBnykEHHxQRN7eVMfKuS5RYw6NxwySm"
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
