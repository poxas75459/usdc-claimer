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
    "4NJKVwEhqW7AyGPkWjdUjW8grbyZ5BC8tPbuFZz7tzsTq233EE4ojWDPr85BB9wnFSv5pMqJgpduXViVpmAm7n1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j78SwE5PeDLrRtX7yd1cKP1u2DDtDH9ZEdeBDxCv77fmUUpEkEM79yxSHqNTvBj49asSwKNDvdQdjYJbqgZoDaT",
  "key1": "ZCLE6vCmVeJAmpaaW2DfXCQYEsHkDzbQGki5W7i4JQqikVZNLMmvutsaakvZZmTn3bNBdKzhiSiqNuFBnY22QeM",
  "key2": "2nqdTDAz3NtYATTHudPQCWuHSMHsXRch6G81kUdCMAQWxbvTCRWRePgQRwb9dVZAJqBDR9xseiKkKKwRwKJsZtf9",
  "key3": "53wXgnYZKm1hCjWYxwMtjs2q86AysmLE8nnJ3KRcfqrVKVptc9QSMH1PFc6YeqWEpPD1jXYntU7WybfXFCgwmoi5",
  "key4": "45yfqeFsV2nJ4tTgqXySN4CRWWgC9DzNLawGyeoSwoWXgWaYfJjzhTbHjiP2sF7LVy3qFzKKMuLFNWyq76uf11UM",
  "key5": "4v4j8y3zDxu3Mqje4UYbKYtHxipckiQuTyfMdeY2BnNWTmbc25cKmt1Z5uF1AiWT2PA3JkCDyv1snnQ8nzTw4mBn",
  "key6": "2oL1d4XhEbS1hAsUuDgCaFNGhk88WqqbHD4Lv7eoMGj5uGYZRFsDy44QSbaUqLszGJJLmAiZ4GphgZSGR2384B9J",
  "key7": "5CkWmyttVwNp3Ys8LpRsgHzF5EvcoJfQkcd1C3Y3Rj7BnYHQQPBkhGCvoS56FrxXk59oQoqvVJK1uUidBgqaHnF5",
  "key8": "3qfZTiJ7a5qXpg62FoNum7eyoNqxN8VR3xgibArBS5qvc6bV8k7qGwdoBb3hRLMq79aoQ6msiQboPSvyCVH17jYi",
  "key9": "2tEAX6vygdET91hMQjqpTmF1dSQextfEJ7Qag3ug4igvLRMMa6GHwyXThHASvPfFDWiah5b6fuGHZ2suVTctY56S",
  "key10": "kgKy9cJ3FSwXMB3vPAKj4GCSMECS6wJmk9cpJ2CztEjhxZs6aFTcp6uVFhD7dn5uQzMKjELFhxwCrqa3LPndNDy",
  "key11": "4CkiiXNLXtMU8jSihzpYuM3JHMsad91zhFAgZNJTSXKA2HWdgoTLQGStdWCt7kx9sfLaxCLARLFxXKqhYzFbGe6J",
  "key12": "GnCCLYvDLnXJMz6dLdonjPM8WLt9yeEScJutCdDWkbEUWZCdjVahef4ZXHQ7bkgeXy8vkg8gtC3phbUZoaoU3hX",
  "key13": "23aEaeDt4Ruvvyqao5JLo3XqqjBfiSbzeZ3UyHww4UqVEWEFJQZMWCdjEQDFWvaaYNnyu7xmzezccoN1KufSwmjT",
  "key14": "29nnj75WZsVe1CR2pUMyhgNM6yxXGJGUHJSSiNHfcUtn5sTqDFg3ERbqc57mWETYmFSJgqw9sQKhGoMGxSiFWcG4",
  "key15": "BrUm6xNSqeCbQhLvbUALbueKMG3FE6pjjr2kHyFJTVgw7XLdfBkn9dvPPKTijiAr6uCXGL4hXTyW774qGJexBuw",
  "key16": "4PutrZR1nyg4PS7XC9qaZ2Rjz9QKsu3mmxgcJ6PdSgVdKBp3r1mDkJhoWeHTJ168pxXjPSoxSWVMdSyJbxtdNDEt",
  "key17": "4SUDCMMZ7LfKnVDzcRRSq7sHLEafreBn1xUMtnuYiyMncxtM5up6kcfWsdAK7AzjMKC2whiseSo3DMmrb6wCB7is",
  "key18": "4SAAKzucU3zw61wJZ43TRUDP4GdaCoMrEppPjWnWxVZDfjdcVqDdyqM2A3iA5HaexagY8TKD8LE6AQBCe52zQiST",
  "key19": "3pmZ1V58VaaMJ21fxHXpKXX2GzkpLoXyqgrCMjMjdHejKdP1u3EgP4mEiqf7MVXtqmS73McxVNfBykaaTJ7oJSbK",
  "key20": "3bgHYMW2qM6edAjngvFPC63RDGfap9hsY1SBTMY4KfaSM3s9sPUngfy89ShmkRWEgBSFc9fdUymn5eeEj5axYW9C",
  "key21": "3eAG5Yo383KPEpQkeQMoohrCLBcQ8cF4LSQwteDeBBt6i61DWqfsCtmXXDEcvamXVHsCBTcUvy6shQmKknUih2Qp",
  "key22": "5sVy1z5VTeJVtTuzFXYa47LDk4uLNyaK2DqRwjuHa9v9ZWAfUtQ5yR5cZQ3rtWa1CnURiBnRrZujsjiJkZKEo4f7",
  "key23": "5J5eGS7c83FPi2ePyPR9XsiBc9cyDtkT718CMDWQZkSZT2Y33YLwK5yNtXYNhNkd7Wvyt1VMNkrmHF9uojzx8iAw",
  "key24": "HehDJfwkjXvVDamuZxpgxSQ4vYWvnXDM7CQE12xqv8MZX7jTAKVtbyR8ig5V8NbgD73huKhxbBdAm226cxP8Vkv",
  "key25": "5GFFfUxhPK5ZQawWsDmL9WX1cpBnBisfhkhRE4UHjBUbYAdB66C1qW2dJQjqdc71fUJDsLagb4AXrEbDEGgvDYmY",
  "key26": "5sQMn77mghk2vQgwcq6XW37WRC3JXBz9oA31qqhYZW7sthMeunCG4Y3w3T9uQBkFCNGrXgimGeENqv6BXjNqizwe",
  "key27": "5EmEwT91maE7wo9xCWtbwb1MPtH8en6MZdNGgjGAeKxujamrWbo7enUvkedozmzjCt5T5HKmzj5pPCkP2WaokrSi",
  "key28": "5TNJp2CANYQZ24tRpsibDGfKCvfJMt3oZJhMoJDC3FKqV5Z1k3bqTpScvWfFeDf6d7jX9BZTeGStx1zCudqoWfm1",
  "key29": "2TmT6Cx1CYm8Zz8sseoJwHFBhTaTMVu4kzqnHRLRBbEFiZh3bKXZWDRcYVeBPxc3wvaz3YQvAgFfJ3QhWpiWacDs",
  "key30": "4dRsKCNuTBkeJNntEjsraGiKSWZybra3uRMGrBMrsZn2xjnNkAvG8Cow3tgasSeTQP8vSJwUJSv29fQTPeAJqoPe",
  "key31": "qJmeZy8SaKiPhCPWWoSV9h8Yjj8QBuuPypnUUhxE47i3XtThbMtco7inokxa3rVGwuPotFPYirfDh6WkwANxZVc",
  "key32": "2RRyNHMDDhL1uQmMJCasLpdQYSBcZVYcnHBKpuxTSt5nQDAq8W9F5rbGDMjTe9jVqhRJ7GxjCibkR2tZV6MEQmiW",
  "key33": "5Hj4vNE3Kq6ETh4UN6h5VSaxgBdzEKxmWbhKxnje3xFJdCC91dfwdrLJGyTFafXbVZj7sbg9WaX2oDmHNrJ7QGD6"
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
