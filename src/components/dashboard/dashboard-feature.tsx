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
    "3iENszjyXEyscJFrcWJGHdzmpvj6NUMxNoie8oqNR6472vsobtwYYW1mSYFvmhZsQ45QdHp8kLdYDxCUrkcmovvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ngZi4A4nDkx7RpNwgA2KUfdFUasVN6vYCeRSnXxTowsNMuC6cYJCbtGo5nt2L69aNYjGFZ5SX7t3QqifJZBWukc",
  "key1": "4nwEmaoa3NDXqKaNy2VFjKKyNwZfDPShQdkRd4kxecmTNLtqWWe1nqvP89PFCpYswrWNafEffUvWHoB5g3NNTawp",
  "key2": "5jcsSJyknyJBeRNV5SbSCzfSP7qLspkAL39URw3zB399APGMktBSEkX3uo1DhAGmciBtKcnFViNNADDFFVAuHaLp",
  "key3": "4Kc276X4nSBdhu24P2U1CFaNnddBJWRyPFBiKaeChg6k88N9U3iaQqMTUSDojbG16cGu5aBT3J24CcvBGywwvX1V",
  "key4": "657XDth5tEY2cihD1eLA2HZpnx13XYTj3TdCZwyd9A1TxHsJNAMyv3kHkUVyB6Liem5C2fhgHbCZY3hoAELPUWDD",
  "key5": "9Td35wXHaFCpeqdcBiFapHHGxfBXMH7pHChgMJyFssardZaxMkJrPGQvTkvXbYGxxy6tthZrKMabEju6LoVn1YN",
  "key6": "2b2N8kQbiLR8bEFQ2yXSHRVZQyWLNCYFWgExSH5tFTLvjy5NAVdrQShQvGZ6cZ7hSxZ6mfdM6QGYFYZeVw37S9Xi",
  "key7": "3ZtSt8utmcJA7RTDJgA3X7wTVHvztiHvssYM4Rvy52DoZ6zwzDRHkreB9AtrHr3t9EFtQmvVqkpGkARy5gK6VroK",
  "key8": "3HTPWNPw8iKeASdv9e48LoZPuDZwPqHPJbQYLz62JVbM34cdvoG9MPK5nWnB5mMAEadTKWHDAC2sT79CMuPD86TS",
  "key9": "5eSDegKeYEDbqYpYEc1ZWa6Qna2qnyHjpnV3SQzNZzFVXNfFsAaBQmjvYksUCwib88QABjTCS4EJ37pc2qdUcrHD",
  "key10": "2nsETmVvakF2gpCJifFs8E3NYar1RKSRFBByceKQp5jpUPe84xu6uT3322XxZMThjhdk3Cze8jp8ztgxHRanULK1",
  "key11": "3HhiJApmygd8rcNCBfc6fE1JVMgD2o4e5XnDmwEjh5RtUSNm6gszbuQT6xvTth2Eimg2nP5Cr6DTdMCgQ4zJNag",
  "key12": "4yq3aHFznDsmzkhqHbMsM1UAd3oQ2vK5niuA1rvymMCJcfSNN5tNskQ6YzcaQdCiRpf6GiT9BbmFPFu9N8MD9Qza",
  "key13": "vvoLHRhXspsuAEcVRGD43UPsnUKxibnXou3VuJZBCvVX5t8eg3tBUnbB3xCB7FkzwaMqmNUiWgcSkV7Do6DGF5N",
  "key14": "5ZtD7fjk723MYNuUestLDMJnNq1E9iAGe8AVRoySopto9S7vnYCnCAABHiQDgRUSBa7ZPNpqGdpCRcLnztdF6KEG",
  "key15": "5iUgNHbMTSPxNi4sL3JB7EB1Nh8ZuhWZ6Hzi3oMu92g836vS8d3eDNmd1277pfP6LkhCxarge8Gb7RxZkQ1Uh97S",
  "key16": "52nkBDKN8WvpbyL6amKgZ6incJnDptAm32wgZYr5EA4T5J3MGyaEyhETuESs8PhNviGNXbaqZCH9n7sSocq6s1Q",
  "key17": "5zL3wiUaX6gBHsCVvv9Xas65TLkS45fJxCh4dkUMJp7XDt1Cvf2zUTBby2zcosTbcP4r8jK4PQhpgDKHCdkQ5Ecp",
  "key18": "hjcM1h1FFASHHonWPfvDMY9og3xhWskFe4EvbWyCYWYGLZnwpmhLVe54k83yaS8vs8VXVqwtFFFF4BEmL3D9Tpm",
  "key19": "DeNGMjatn1y514oX8NUHFiytKh8maB9aNNoyv7BeQzMLmzwi8aDcAKAA5jexWuvugkJWDLcj8EJMh84J1ScpfM9",
  "key20": "25T2GeBbmXDHbiFMTLUA1SZh7qfSmKrzjATGGD8RJGGjb8M92LtwLv6kcV53Gp4TEk4g8jPoPkb4R7ckTHniHNsB",
  "key21": "3icuSwFc2ALLqjuXGeksK3z7w182tq96vM1h9im7LuFo2o5miyMsSJ7L2R6pHo6UJWX2k4BHYpSZ7KKwBWSJ8gEJ",
  "key22": "65LnrjG1f1pzuzZSPEb44vdZmR13qBBoqZdDkCqu8o1ALC9UdDcc4BUF9W1KU5Amcd6sgbhjD87DrrX97HRVwEbq",
  "key23": "NngFV2WmJ9Mod72ejjqjgTwDJ7qo6Ttc1abiwsmzwGTLe5HQMr8xU6zAV6wdxmiWBVJe9ypV2yFAB4J2LuT4HyQ",
  "key24": "4bPFwWAa1Bxq2F48Hn956YyhuVptNwstiXMKDd8EsEUXddeCCEFpEdQBFkF8qRSMTgtkJgp41k7fNf3Y3QbbJnsz",
  "key25": "3JpwQKCHuiNzyEnD25mxrGYs73aQtAmk4Gm79b1QDbTZT8v29M1c3AnJ1b2Z3WJEbhEKzVwz37DUGTJBvMpXXMYZ",
  "key26": "3DNTrMJt4CYfBPMMzeDj7CnQZFqiAQhYCMwEA9DngGqNKzwgfwsh3Dj8R4yKQ3ejVkJbGhgyhCpFHZVzApJ2zP2g",
  "key27": "54M4NiB82kzQ57t5MKwUtGQd6GwFbHFDRPGqPmx4V6G1B77h74HhGSiCojvPuaPzBtAYLyMRSD31eN4LkC8sMqKk",
  "key28": "44xByECAWKiuny9PFPWL9Ym8vDvzLgtxkGs4MhpLatEJpGLBAgR1fiAfv5KdXG8MNsU54ZhYDttPM653ba661VWk",
  "key29": "uFiLb8rH53QRRK9kSD6DqrtKUaqV6Qi1iCq9tBqXuLLYcY2At1WxQdyBF7cSR148S6H6a3mXQsM8aatQfup3YbR",
  "key30": "2Ho8PqvwdEuzTFEqkb8NyEwSNkFK2T9Vw2FMpsXVZPtBRQ5qup9umP2QCcWs946a4MfGVpERowWvKBHB7v1LGB13"
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
