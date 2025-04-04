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
    "x7a4YTGpH2a2exh1hLVapHZM64fEi6yAj9FHRDhCMiMBSTLC5zbB4zhJn7ScLGeZHzTprjEUesfXwrjYiyx3gez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VmCTmteMassvAzb394DufaohTEDJ6Eiq4NovyjA4ME7hnFFEi67S9WHgcDKaynBgTtg4cTEZRGDDCYpSx2gHvR6",
  "key1": "5RWmkYHzZc7DMASQ6tqr99MpkxsHM3K68uZ5R2971wUBgyXpfYPMysGTZtP2UQG3QDcp9YYTiX6y3dtk6dT44Bs8",
  "key2": "39A82kTQpuUm7sbhvyVgiAB3AbkZ9J5CBF1nMvpcQmQzCbFEtPECYVg5VGZ81YQw1SSRQD7hidvWMrZcQf4JmA5d",
  "key3": "QweyM7QH8DjFpUwZii2HeHVJ557chff2VzvGAsBenVE5DHAjz1jDQpFpnNyi5dDrs8HLEjdQ8Y6Yg6MzkaCDinc",
  "key4": "2u8dUca24suELGwVNMueauaQA5VzZzZ37ok1gYDqMG777za3vnrNbXKHHApMfKyjVBGz4Z4wjptup2DfTQgh9gWZ",
  "key5": "2oAbV6FBvEpKfbENReREFHyq1oAaVK3WQMLxwt57Bd1fr1KRLHDLFVALq5dUe9can7s7CzjJCqsKJyZDsUYM2X3N",
  "key6": "YykVxUyJs2KxNNJc1gQDcHAuCb9x7J7iCxM5QFDrbVThLj3jQBekjLmTXYifMn9xiyhMGFmTDSgFrLX51Y9KpGW",
  "key7": "5MA51EkJQ9mTRwKtmsBahFMST725HSC64u695Das12Ga9f2zQBRpKuxeDoMLqYAAqfDbApgMke5f2Ecsw1AqoL2M",
  "key8": "3PhFTQAx31wsq3WbZEpGgut5bwVvEcx9eeX7mQSwzLUs3g9ABpHKqLuQCc3TXGQde95HWCPGHzXd7pehwUC5hDzB",
  "key9": "34T9TLiWfYViTuTFZv35Vw98jcgsD3E89MkspZFmWRzL7mD3QkWmVB4GkwLZ8R4UiQnnhXhwGxb1fP9ooRcU1pq1",
  "key10": "38CzEc9oJrhzakjXt2XQijizs67QDuA4HwyJXg6Tm3rpxexr2tcuaoJj6gUvQP44DCnPncHkN6wSXwD9N3V6L4YB",
  "key11": "3dHZqJfgmQ6XgB1rWUUxADjVcPutBGjeRSaP8KwHohicGquj8vSjF6s861m9QMhqsNM7a8SgivjtHS5imWLxQJRj",
  "key12": "4djqmhmiwHZbiwK7NHVLiR5xf9zqoAyFSQdwqamZNybvn2m913pYzgv4Bxg5Unq54PMrQ57MQ9NNdWuV5LoPsCvy",
  "key13": "5YWtRam3AZNwo8fM8Skxzma5Na4ASnu1ESAYZ1QDC32YUL4ZBhab76DmLbNd7SXS31UhUMbr4RkZw1ypKkb1zRjc",
  "key14": "4oHrMeD5JMRaK5wPmTAMDVkjA5QyBqjXUsFr1KTYxjFSfhhr4va22yKrjTUztHzNP645QbGH5wuPtDRPssiaRC5n",
  "key15": "5oaAWGZ8jpUj1zLyGa3cDTgBoMMPHwmQuQ7ib3Bv6saRXYxvjQfFj7fKkS8BsszqDpBEsCu2k9dKbdgBDBepZRMb",
  "key16": "5fweJrBHdbR4ffbFK5qRXePZmzFJrF1rHFooP9KLPaGziLcy5KNK4a9G4xWF8ypehz6cq75btJ4ByjXHxLKuLhw1",
  "key17": "438Gj5hGdEtomtmxUZmQTxvgYwufWb62UdmkxEWpxn7mhnSQ1XGPjTkWJLAAbyVZJCAh6rqKXKpTDmGd4cnQ7kTW",
  "key18": "4orFiQMeTB8GBVwb4p2vAh9bFEVwtkDKEeRj4zfMxfwTr2kB9nQy3i33Xbkrzm3zkc3nJRKaWwaN69qhtHKyTUM9",
  "key19": "4m3XT9LPwDEiafsQxCxn9T2BSyP4nasjc4uSnHytFBfd7fBuVRtL4ikMdvAsLSPD1nPNKCq9tfu83K46xrLUPx7o",
  "key20": "4mnbtj1FU57djSwe9fMKnWTRYkuBgusW6bipxb5vRdgsfDk7GJLLW4b5TpoPKhnbxXCrpckUb3gDqbaHJJxc48kS",
  "key21": "632bEAsi3jCtKn7xd6BnGbePL9zKtAiBQQTQmguoRDQQt1LMibM1LuTyn51mEKffnr2r9jfRkRCCjHqAExTy1ap8",
  "key22": "4XMvkRXkTFuf8dnZXik4Vf4d1zzCcLXciVVn8V1FdmLhL5cqoDHh8yw5uuLaqR7oYRkW7JWGNPiDPWp9Br3QmBv1",
  "key23": "5GBspukhNoeN4fcNduMMREdX2PdK86U41YHcTVAVLgZeNsjBqYHhPFjcabhnY6NUcsMJcUiKZrYjbMGXKuHSmhyy",
  "key24": "5AUS43e3kRV6qSr1X7P8jELzC3H7tFQHHA66bcjBjxuLaqq4U8gHG2rW2Y681o3ERbiZ2qzVLicnnQUDn7qdMXgp",
  "key25": "5JfbdysiMQUkUrL2WcznVanZ8Zi2bpv12wRCEiVy2oq5Yu4EYS3wjFegu3tGFxSNDZUbEsNjFRB3x9dkguUBLqTb",
  "key26": "4W9W9KEUtPXfLiHfj4fBnu1Y19yai8u5dY78PfvMhg9qZhFDmsTfKMyYbFC3ay8wwtSN42FMyXqdDKREy6pmEGFe",
  "key27": "6DWHpNGnBWv9X1Rg43Zh7xrnKFjUNWNo9yWhdVb4CNncLecjQyxG5cCNrU4DPaDm8xCCrT9JfvvejVyK5qhEzqG",
  "key28": "5QmhWWSrJtRK9JFHvTXUy22yRTbH1dzfF7KfzLarvBHoWf1bBwKA7owMixhAntzzmkoHw7HxHum8im3TSejmki3R",
  "key29": "4pZiSrC7bVKZ1jXvHw5ituHUJUwWVjNdrThZEdpbE1zZT65t4yxJV8rbBtQdobi1sCsvKNmcAQv5sgRLLzCLjcES",
  "key30": "57MT4QcuN84V1xL273Nfqnjp8HC7JRR4J8gzTXDZMrDujFJRAmZYa22Zfeb9hbyUx6nAkgjKCHp1jU5RBjFcMW6M",
  "key31": "4SEtE86BAeRBRKAYa8Co7VrP2b36WfY6jpzk8cSE9EjVmjNbuFiL8FhFS2bBfGCuUQDwqKdKUBupDKP8qvezRshQ",
  "key32": "2ojBChSthJ9BFTff1dKv43vQvSzS3obhiZoUTmhRZYcvvyW4Wnf2vgyS192DqzMSpoyrYfiGpDtRPcKsoWmSAFed",
  "key33": "54QHtf4GAtZeqpesRQxPLJJGMkgJtSGHKb8iohkHXbATref1rxwpoS1FoDLwUV12GSQne6cnofexN7vzKy5ncACP",
  "key34": "453XJnMJgPoEmyhbQNtbBSKrsqos6fwDt36BgoZugiatREoMAPxGqEsDRPBy2RrETZo61kpPTB8Bw6D7UKyZoGB5"
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
