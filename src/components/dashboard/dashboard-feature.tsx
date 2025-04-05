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
    "3jBJZ4FNrfhsR6JwMBT2BmyGVw9CFvaUzQVo4jfAXu5yxaiWpNg3xxFzrww28m4Kw6evrZpwuVYgBbt7NrTTumr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ubQaUBUsc6QQTqp7AfVwVEPhf7PMRTMtJXeuTrMTGhbPfw9xxuk4NH62ZES3AcJm2gzVU2Qtkh9jwdJRdULUxkW",
  "key1": "57pgMvU7bMfHVc4bFXJaRweEnCkZGd8ThkrjLBqiuoY3THJiZAa2djSkrwBVmYW7127Tj19AqBV8Q7tMMGLcF7Y",
  "key2": "2sWZQMrSmABjv4oNFn9rCuCS9RoDEgaUNwb9BiiawhRQ85ZSPhStGWaeikoWsTGVY4M2bDn5TSCH2otv6CfSYA5e",
  "key3": "579qB7be2uzBt6GxJ8nsY7P2bDEeA61ERUjV2i6rFaFRVmQbioAyJ1QVuKbVBbHZDPVLTHEu4MFWeucgqegn1z78",
  "key4": "HwbZBbtnvc2DJQLxcZGU1vMmp1tBd4fs1iwcGWVhUFv3KzUGf175iiksm54dSpbzkDEHSiBjz8xETwE6xunmFKH",
  "key5": "45VzD5dXvmhU8zNXuYd8WLdjwCCrd81Eb339MZpeTAsGK7wAN7TVyr9S7YtQp8fqsK5brSBbuLfQjC3MYo36TqFb",
  "key6": "2cnHwoKNm5Cv34nA8yTV1tuQeBMAvFu5xaLWfLnAkXzCeF7B2aBfNN1P6NdJ3Q2QiNCH7Gn1HuRoHQ9oH9GzuxW1",
  "key7": "4tiWmsxEUgHb3dpMhVaCtadEPXRFLMsgpkiEJWhx7RLDSdwE2ttpKNtWYUa7VJvZBVtjKDpURgyPNDdPbz1qiEcs",
  "key8": "yCUfiGLukdtvWC8ANiyK22MHv6tdcGLod6gCbhTs8gypxfse2ZbiTWB7hCiyFXiNBXW4KpuXiYgYAu1W6XivWTW",
  "key9": "5KbrQRNm4dJEQYbQk6VMVpoRxeHnVSn7tVczNNLMvUH8JPj8tzyBjKV6SVkZ9vwHngyktBp1fbaB85Kr4NEaVKh",
  "key10": "4wUDbakPa1WyzGZQG5DD2dAaoPfpyr1ckf5gLgv4H9TQwhoAxCXxn8FAKNfEJ7BxX5HF9UkaPareXvMSgzdPFrcX",
  "key11": "4Ccr415vJw43dcBazcaC5jyca7WeyXm7thgKkQb2fipQzfRpC1aNp7ACQG8JCtxYmkCrQ4CXUqTEqrpGEVnwTjA7",
  "key12": "4SztFdVUv4KWuHtKTqhsPebQjFWkVRaDTDEiEHaahBpMjtqf5GGMzF8Q1EZa9tEBK4DTYbuUUo8RjMRPpG5WTpQz",
  "key13": "4FCjwqSu2bqFQmXazKMbEnEbnKqFwwerLkHUnKrgrMpGbnBFMNvFAiLqjRfjB4Tu4cmquby3C7MAqPzaCoEkPB7L",
  "key14": "2s6umwPZMKL6UDvMARqsN2KTP4yW7dfKvZ93TfV3hUWERnCuVDh7scvv8Fv52oDrAoggav2cdyfYR7jjrmBupAz9",
  "key15": "2bt9zb64iGSyB8UsTWrNywcQCWD29iWczQBdT59aBpMrv2mHaZJxYaKBb4eJGZREcatUkpnSno1MZWkRcckpdbQb",
  "key16": "jjctHuTu25ywdPU31DKJZbLcLaQkf3C44fcTCz1ygzKrdS61ErWM8saZMXCKNkqksjBubCEE2PJaxKhYBqNNpxE",
  "key17": "4jRdHcmMNECeN5LovS9cF7gHcUsqcZ2nqUdiyWYNuw9B1bqfvxyo4vjmxsWpGiEDbA8JG7EADPMb2bomi4cdPrTh",
  "key18": "2Lymon67mrBsCjsHCAUVqEYrszLCCZN1jMv7WfXXfgBEqZdqHPghkmGmduS1ZAmN9KHnzVG6tpcLv9Q8teTXEsxb",
  "key19": "36fV4GYit8R4KMLWyNaf4pD24sBCtcTaAx8QCJJ35jacQYt8bQ9cQ8AVxUNQgpYPnafpKZjsYsRrKZsP99DYumFE",
  "key20": "3FL4JeagoDGPVe952qFebxhqZWDpJmd2NTouzH2AFyB6QF8eBxU6jamN8Kat3bWiA9xcVnvxMPDprekTvQxxPdGo",
  "key21": "5bnb66zVFJ6eN7i411rfEMNYeWbijTDFod6syGLFwbXHpT5gJvKwmCgAFw4nyvKWxHePdd5YLS6PdbwFKg5C9AGT",
  "key22": "2LeJ8nTLecefpMMM6wRMDaNrHF7v8xfzu8rw2q7w64tUTqtG2XaxN6QDN5hTHbhgu8aoJC68keaEKrDVJuXGwH7V",
  "key23": "2kGRSmsXe31oQrjwvQXFbqT6ZBU2vGGrcqAJUmrHTd6aAuiWzu1rCZnDYWWfXxF1kg7rwi1yphhrAVJbCtbVtEt4",
  "key24": "3GaPrUFUyULbeDa27gvdgwiQsQHjgAaFd8fGG7ptbTqH3Jg6aRDPoGiij7Ssdix9jn8vtZKDGc2Aeutv2qPuAtXU",
  "key25": "4i3T5hUM5MFNVhtWqHr3wMRCDvf6req8SRt2F5e96D63xkQPQwx9gkHrinhqoTBrqFatVTkDcfs3PNUeqL9mQbd8",
  "key26": "67CC7fwadyFeLEbKpcosfv7PnaVvJJiZeLLK6fN1mukv9aAW1RdiK9Z2d4CJjJba8wfMosLgEe7AFc1epsY7Fgbe",
  "key27": "4mDpji7E6JpPrWyJhGDrKc2VeZ4upuLEAcsDXw7SkWfoAj8MXoA3g8bnY1B2u1WdhZN5QwffkABUXJfu7XBCR6mj",
  "key28": "23uAtnGGUoXVfcvcpo5BrjvQb5ZFjktDuYvphMHHZr8HpWiSMFCLZfVETkLPCDHBAeQxx25nwUXQMCWJkktssJyh",
  "key29": "4ZyB4VyCfKmScS2GRFr4xDMtiU3ZrqaX3aR3zfRMPkgDfofWZvTVdESLVi7he2oaZrHZBb1d7jVm6JLiWeFR2vjM",
  "key30": "5QYL6QnUuoJ4y9dPzfZ7aPbbhnSjavp5WG5mjqWGkVuUvbFhB2F63Vf77su3Wq5j7aDn2aGiPKjjySxZVU3RYg89",
  "key31": "5jAULTVnLfcrZhAyxutxBBH3a7ddwwS3vkUnD2MyTRC45e9Ex9ECZkW6vdrq9W5tbWz2XwDsxeZ6EL9pnERn2JFJ",
  "key32": "5JbE13J35a74NwUpcFgsZEUyD1HpGJRuDEMiVQKF5YEoNK4NWhXBtop9VfAGevS9VZVc4VLAJkHqiEp1jRugtSQ2",
  "key33": "35vHu1FwMp9MJ79zuEdHpX2KT8CLqJt1pekyLukycFWKtFt5CjSPxquwpVK2ZahHDpTG5LB8ThUyuuszNnhYLNrg",
  "key34": "4znXyDArbzDKUmpU4URHMJpNUmLbi36pFjyZSvb5zacz2XdMxmAkh6WTYKd1jqXUHG8rWPnMN4iNpP1h3oPV4aAC",
  "key35": "4KEZzVHXrkANHXV63iTVUK6JhPnrAvENbkBUsAQErpWxpVExdLUDUQ8AT57dttoyPU1r82PZaUQAXYutgqKjuj7F"
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
