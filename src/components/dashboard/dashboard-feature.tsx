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
    "4Husuu7pD73CpA9R4VDG9aeejAs1Q88HEmxhEGQ2Z1b5PvZXDEaFG7BCVKBmyAR3CVe7EZMDiXypjzkkb6eraGKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XMTkbRBWsf5jSdzNpaRSR2qszMi7qPTq78fVcyv13p7HTVsfVLcwVFrwsGzehydKbejHHuTN9kc6GkmPFYAkLii",
  "key1": "4MhWCJaMSzYV6sFnQdXNHTTWnP7eNs4LzGBzd6edK6EBGQN2WxzXVHJiAEt81dEg5QvP1fd3iuHARr2xnQsKvGSD",
  "key2": "48bD5aeLa5xmJDecHvZLfh5Pi5G9VSG2SXTSeFU3qice5J1gP6x9iLrNEgmKZgxUM8bYtbXptEGNMTdDuvx9C5g5",
  "key3": "5tHvStrZvWA4N1ncSimxUm772sF2qoVZCeivpDEXNx5e187U37frES5pFxQBcv8Yow2E2aJBdofumKWrWpiLke1h",
  "key4": "48xWZZtSLcSuu6ykaTT79GDPUYCfrHZYxuheU5nvPASc6DVrMGVAqaUPFHtAup36F5Wg1Btzh8yRGLUeuwCar67G",
  "key5": "5vNtUqqP8VSFvc79jHbEZmk3jEk5UE7nAwSawFeGQsiw52EWmUXximpHQKLWNtkURnzay6pg1Yv56YJw1L3MNL4a",
  "key6": "62KcAE3qcD54cZhkfeb6v3sSmrofJuk8B38QFXmCNfDnHztdnHZLXrt3HX8EzcMD67cx21UtPo9XwMEvA16xDuid",
  "key7": "p5qTCGZwGaa9EsL6rBUvJCfSRoUnPtKKvJE8ygCPVjDDbvPrUY9Gtf25W6A3jJv4J4VZravfz2ajQxLMSDW79QC",
  "key8": "4FnYHkZGNy4tE2Lo5gyUpEWQbtUGoVDRh5rrF5DaPAdbqPXw1m9mCaSw14YxMEZ7gJFWd74zTRbMV4mfQqrs79q9",
  "key9": "kySgDh2Fc1ZWsrkmgmnjguKrkPRZPQARJZeeFXgPDkyAUw6YQKNtJHw62Y9qcpUFADbzRNYCfF9TEBCeU5t2Yxa",
  "key10": "YX65gStehYCWswGjRnBph6xWTXkvL7ygRv4NiiypPemnk1B3cMponGuYkK6N9uVAXwKd77g8S1o7JC1kL8VuiDa",
  "key11": "2BTMAYWbxjVknNd4REzyy8muBYyQ1JiQVFuVzx38YKuVnSXxmfyGxiLpGZxQJfWQSdhnDZjwg7f6paju3tdmM9Dc",
  "key12": "2maK6ng7vrndWRBr6FChYAhRazbxLkB1XmRqV6cgtnF5XY12VeN4UymLhyaFmm33Udhcy1dcri8mQweewHBuQLRF",
  "key13": "2DALgHhmPLC3mEtVwHqpLsAr2DocbLuFXVS6ZMygdCXRkxovQohZRDchjLAsURTisKKvVQ1UbrUGpUrFecpSYT1E",
  "key14": "4cRpQ1mcg28g5VoMrJDD3WbkFhdFMRZQxG1jtjhefHGFV7597d48oBBCirK3hA14CxN8jMbNsvwvwykUqmSzAiaB",
  "key15": "3qQFHwdpj6BqEf18vpuc91yV4k8wqpnETTzxRhSYymqQV1scjbeF5qymkvhCmoUN4PTasGvqnv4XSSp33KUKPPsF",
  "key16": "4zFzo8Z8seth9hwbP4dC3FQYoCqa3jBuf6wdgAUV9aZFzxJuJqvGfur22x7fobXCv8LHjGTYfJoUn9Jvq4Tz9NdE",
  "key17": "3MF7beYWwLzodaxEHrmkHBhxhFSLAr3sBgrSfH7eTJuzBNUGHVASF5GufaNspCBApkusnjiyAbyEj5MWopskz49R",
  "key18": "5QFX5mVfrBSBg6uMLZ1cMeQTJBYev9vZY2YciwRPYij7GLdDH6UA8f3bjCaZPi9uXjYPLjGES6AfQaAzSdCAwgPA",
  "key19": "2K6e7rpEMYPpSCNEMRuVYTptjzA5RmU56m9ja87sQzmhLUaSPtPayph65pKzgyZJnZcA3Qhu5xfw7x19GthCBgzg",
  "key20": "4YPpmo2AM75j5zoNbGsJhmyk2TwFFnZWqQgMgqJn8d3EeWHRGKp7UKisbGedYsVQD5922RQDVRhCFB6uKk3ey7ek",
  "key21": "3jgjwrjHKJbyZGjXAQ8ZLbb8HtfsBpLGGNtEkqu4vNEV9EvpCKxDTTdVmBL2QMms2e5NwtLERh6i3JVZvpQypXkr",
  "key22": "2p98LXuvyLRYET2hhCefioLXpSthGhs8qwExLs2eRzmRJS4tbGpnd3q7M1VaXQrMEiizk7mbTTQKxfE7E7NGxd1p",
  "key23": "4ptKpafHmJGpxdwq2fd3GVAYtYdBfZfn3Hfswvsz369NZeSGwDvvdCKnAuFFRzGMjhar3ksBPD3XCHW6x83fDC7s",
  "key24": "5KRZW1ZLgQJGvrgzz9Bk7kKNXiudJzAj1F649CUtdwkp6DvwXadxwRgBLhjEhqimPHUQn4F6ZrLWrqe5nVZAoP83",
  "key25": "4tVyfkmN1sxk274gib1Vx431P4vJM9hU7hQbLNgTym1Y4VwPp3iShFQCyDNJ1eVt3wgHYiaBiXfgQqDnLb3cs92W",
  "key26": "47UxaMsUVokboiY76C7zXMrCheadYKkEbopmXFUa5TR27JDJebEAAyGj7rUq1rRmmyobTx1uVkZA1WWxM9Fw8r6x",
  "key27": "EczDGjWRjvRyccxSTbnFdAjW1VNGN6yW8fup56DzUczsFKubQ6dLHovCE6WdN9NGXmNNXiZPyJqWywEvSGLDc5a",
  "key28": "4hcwStrN5aKgireG3FUhyEBvDPXNmiq923VpixtpWoHsX6Un7zUVeQFYiWBQkoEqALLQc3agtvnLdgCTuG6ajQwS",
  "key29": "5UJxhrNPL6RtuynAT2dQ97V2x4Q4hBciDJA1b2i9vbgDvc265pQmkm3u13TLLSMqAToZSJs2RJ1QachdRA6kJwbS",
  "key30": "5Y2CsFm9M4yuQug2pU4yxcfGREnKKaVdR5yncUK4TjLm9Nfxxaz9zWMsxvgV9GAWbPWcpT2zzRUEQPgs5pZowUZP",
  "key31": "1ySHZ1RQjXXTQKv5nVmhBoKi8AXDNT9bRxBwNJkg8dgd4wKbtYNd3iz1KQ9UbWnd39bnEoEMksiUSL4VSBepFRr",
  "key32": "4LVWYjdd8tC8cR5b1Kjyw7fcWpnX3PzULp21f67i6rnWeSyCYoWvgrDiGSBXTXK1dcWkQFD11e64Fnn2EdPQoRBy",
  "key33": "2uXSjZzb3wwYWKqsRVmqAwna4GpHsxePBjbYB1ERhVVvZgrK94X67X1TnR4ht58wwCoV3nqZc3d5ZcqdR7ku8iw7",
  "key34": "CcQzG1XSybfncKxZ8WgdLdzLcT45cMqN6HSFuEM9e8SagnF3FaGDKJ1M2sgGJbrZtnP9C1L8byx9Wz2y38ftiKd",
  "key35": "2jXszPQPAEnXNFH2UeN1Cao2ZDHfAEFzkeCrunkoRuVEXskR3W1RoYTSwEZNWjoHjLsnNxBK1AwvGWQhbDztY4dd",
  "key36": "P3Ajv6D5zj3TKcjyCJxw2wpC6GLigBWKer2vHc21xvHUd7sYdTsJvAJbH59CxxdmJxQRnxVcB4eeBKPJwsDj2Qk",
  "key37": "5b2dW7owsC8Q7YqfPuwExkax69JeJc3StSvq3MWLaydQwrfjXRJ7QrDrq5KqVqNQQ8qrmSeoZg6RmFdSWeTJs9S",
  "key38": "63BoHy7cpsTwA6mEXaueMCrYcF3Ti98edRmesEGumhJBh6HM6Q2EQCdPNSayj66E2r9Q6w32LGTqD5FDJFDmovtn",
  "key39": "3hMoNSeCoXMgtrxDT3fpW7Rrhs4jA4NQRhVjocS3ewh69x36Mug2btpUbFVKrsbAY2VAh5kCDWkqnTEAMGgV15W4",
  "key40": "3diCYBQ5eV5yRAtdggMpLoT5hi4yucXHosnEtJhm7oDv7LMpozwqpu55qeQFvGHiajmejGN74jZBMUX8zTqSGSw5"
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
