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
    "4f3Tu5Jgn9qvPYmB66V53a3LDS64HPxtnT9iYS18qy8oK5posZVyRTjvTMfbrmYpPsSZs7gnkW1gbm81KJB6uqDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ALW1ZGhJjLhN9thKNjnD8XJJe8oNxsqkNBAUtojGbxfsbGQr2FwxitFeyPAk5dhbCNG3LtJuzckszpCZq7woB3r",
  "key1": "4x9gMoeJkKek1uZQRNS5fjEHAU4aom1s87t3yPnoxeKu2GTfjae5Axxm8yPpqZG4Cgyn4M187RNPJ77p2p8vznng",
  "key2": "z5kVeojeA6PPbxosmNSbnWFWizhx38pgeqmDx4QExAQJguDdQ6RLvbCknDWKePqAKJw9gfQp72MauStbRMCenQu",
  "key3": "2oD84yBfc8Vsq4A1UVcjjrcwQ15VjrJuWAQKg6bWxyDwYLvDsZJPJvxEGbyHi3cxpJFzTiqhg6qquFu8qCfcvB5H",
  "key4": "4rZY7R2zNdsJaMfyAdv1unk5DKAgoFPZxnzjnHG3jbKcfkgfRYFJDCoBPMyggfafdFBKY4xhBiqAyZEF4QDd2jho",
  "key5": "2izk5Srmz22zk7Cwu2KcizSLcwibz6QzUYPUrnNrpGzS7jeJaHd2VjbRR15dZ5zJSS1tn8v4bMnRGn82LXBQw1rG",
  "key6": "3xTjgXPvGDhGE3pmgfwc5MK7PLQCiewKfDrmeZrRnZLgxUwViRmWQkdaH79EW6m13XRCCkPaVpx9RcaTJFWrmh1M",
  "key7": "3zH1d1kqH8SUpFYckRtnoq9gaquQMw4HV6RAbM7KTF5oTVYW94xTcyqppm83Zk26BBpSBRQwjtk8gW5ksWPMWpER",
  "key8": "2HVtUhK1gWdhRs1HHtUra7iKyrE4119wzWgRWByf83K7Mk47VkVRPm3wTnVPK51DYFZFoH6iWnyprUh836S7K9JQ",
  "key9": "B2PEp2RAn5wo5bV8rVQTPGV4DwUDpTd6e7MHacbX8zXB3FcThXumkc8RGeuSZTv4mEh2kNR7RXBp6WmvMkCFY7C",
  "key10": "5aoEehmL5YQ7K2EsXmtA1nGnnXgh7nG3VUQBwJiDSqcTPiX6UjFqHpmUvxxuDuHxtkLo3aXcXMPbmCCZUonStjNc",
  "key11": "3kwX2nxLb5CEc8dHSM4J7b1aBrQDLkRTBrPXWdjPNsGyWnfeUMfdpxSzTy2ksLVQvR51f9GC3LgyrKxdp2dyE5cf",
  "key12": "3aNedkZLc7kyEWQ1MfVg6VMugJdYCpy5pRE2f6jazRGREZHhQQG3FGqn72uE7M3ta3de2FL4cBN4yMY5oYhuFEow",
  "key13": "62Ed9qoQF9t3dTp3DAZ1L437FBFZXBicBFioDajjvmX6Bape1CTKy4QrXn4YqXv3MBrJGyRQiQ8JCr5oZKoeeTz1",
  "key14": "38Lhq1weQVD6FoP9NKuZYZo5YeZSuxaLNmqwgqPsmDLEfuDcNv31ifs6QEcTZXbWUSzRADRWbziUCED2P3jaKyux",
  "key15": "31So9aevYurfd1Hn7D4xR3cKzzYQBHzC593zPir1mRvmfvdqXjyVh75aw1w8x9RNfsGp1o2dFM7akBZnyFfjfrUE",
  "key16": "CZEFiUjRhGnhs1CtKARgbKCsH5jME7tgfHzDzAfnKxsNsxfb7V26uAriR4XdLwZgaYZtnRqPkbo1RdpJQFhetBo",
  "key17": "ce8Evc97iGpnPVzY1e8nEQLbcKQJDvfA5MTrqmPaA4JBjTqJTePCLtn9TNteHoriWN2NFPWG56ynz2NY2i1k7hk",
  "key18": "2CgJrgNJ2VfdHvHXhtDkX2FUskrsKQA74eswVaCViLKv2Xo8tkYHupi9DuCL5rGY787pmyn6U1VsmY8QvawKw7Dg",
  "key19": "4eWjCbkyALy18kfHzkoFnp7QMqBcJiSz5xL7UgFSyncJ2ya7uRb4eY7Ny2sPKN5Nw4Ggivck33R1Y1zGxbRwaftG",
  "key20": "UarvfS4tAsAbNAwUCqVvhYj9nfm6Q7Lv5fsnv3PZ1d8p2rgyyvDrqeECW6L8diY6cF799Su67auD1TNiiYoftqh",
  "key21": "58JkBb5ZxozGxWJLitNcuHURgcNNpENEfdEZHxaUV2mLgc8xeHPEaTSbvoj72ah5XvafupppnfmZf5z3N4fJPQJc",
  "key22": "5393C4tajwQqJLNQA7hvTEn9ihS37n5TLUXk2U6yacVEcczSnWFFVYnioWaagjieTw7yj1BVLYn22LHeHo6L5K4f",
  "key23": "3Kifj1AKkPQf8Ro222yAf3p52Q1FmXqPyUkue48bVV6SiAM2yy7wC9CFHMy8zNPjs66zMZ1SvfyWhhNjzZ2sQSEp",
  "key24": "2KbPGoK1zwWmmeqrfd8m5VeR7VjrrRFt9zWMewQJRbdAY59nVvUwANmibVtL5qqfG3iiynr1AdfQ7ZdvzV7Znbbb",
  "key25": "2mWtGYPnj417Zxw6cj39XWUipodjQs49ViqMj5ZVEKxwnDuMU17AqVKdrLS4dph4k1ssVuTHm2ZQhdSe9Kav5SU8",
  "key26": "59i1uchrw8RrJz3ctdDqmszmFAjLe9gepUJPNGLDRVNxELzNzv7mxZM22YNYA9EV1HcsKTPHRkKYEnCZ6fyQT6Lk",
  "key27": "8m7CPus5MHod6CpMsRiguAwKpnqNamFf1J7yjQX4ws5kJfe9Nmju1iQv7kN7yK2sRQ7a4BvLV48UAnLdPzLGonG",
  "key28": "ddqBitUsCwCNk5M2CsoL6j7J1TP5whi8Qmgto6dkSg2PVeJjWCBtG4hTvE59qRnWHNoiebGCWXKoBoq8U66JkJR"
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
