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
    "4fFZneHBjKwxxeq2pxtDyGAdZcWdhDRy6Je2HowsV8xQ2qWH2Z2Q3z9y1v2jTmsiHFLjXzK74jcyKZn2PwewFqyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EvxcmpxHJwH7XdtZrjZEbZWvSMMxRWntSoGMZ44cakBicms67nd8pnQEb8Y8FC3ZS7ZXgTerVyoNExw1c8WMNim",
  "key1": "P3VY6PwXg5BKFp8KMwiGn1DNajpwb6hp7Qe8W4zgKxeN5MCLf3635yyYpGHC2dVjzHC1ztxZpCYwEGYJRQngqqe",
  "key2": "ZifuYfKZdM65zf4HDZ48E5imU8XBkPa4GM41QkQ3kRrQf4K9z8kRPEBtPPC4NmufS69JSabTDhAtQwVWD4QkBac",
  "key3": "446uYpjvVsqujATnmYwuPuEYeEVUtf4NzPeBKca6AnUKi3inZ199ubD5yxb9CvJf7dKTiN9ZrU3RQCffnX5VhPqS",
  "key4": "37NsNwCbbkbtVsgpyGJKUAfHSYyzaryY78yMY5iqn3bCYWj6MAa9JKbek4K2dd8rV6yZFF5PvPL2s8U79fw5c5X2",
  "key5": "oWWQMSbTQyu85HGA9UXanEdFQAdzFrod7FitpW7iqGELkVp1CGD2Nqx8s4VLq1GyBHLXLadZdvieb2CmAWof42K",
  "key6": "24V5tFwETwkhVQaSEiqzDJxCe5fMT34fWXo2X7gF9MqwYQKs1ss4QdTqqqEjmzfhMCcU7KfktGuX6eUSuCvN8mua",
  "key7": "fTEJU63myFTD1h79A47XPWCbicwpAn767UCkgeutMTokzLWvudsrviipx1fT8HBNrh8s4bF9drdwCJWFuV3isGY",
  "key8": "2webuGaHZ1mzrZiXjU62SuD6S7k3mjonGKoWWsKxVVaYuw4CYeHXsvecHg7N8mrCESMJakNkVppBkC4UXdZEtipA",
  "key9": "5z9G56SynB3TDCdbjpkepkovDadAM73PRGFy2UUX6aZYowRCGs9N6Qv7digbEFKVTHqwjvT9vUzWpCr4uJ1SP9qa",
  "key10": "4Rh22f3upwwLdAypuj6oGeFBCYuRedKujU4Ksy7udi2PZDztHJzsD3rhwbJ74VyRcS77ZLy6G6XYxm1NQ8PxSHMW",
  "key11": "wwQ5E8xUuXTUYikSeKma4aiyATBRU3jW97iuu4tP5615GRQ1cTzzFFXvaiLe1HAmPsSBXNDjKYDRhzQJuBubnu1",
  "key12": "52dcz2G6djTD7PZi43vFS652bKfWThEGZtjfNUjFHHkJToajrkYhPwU78pZAiQNhV6QRfzsTiiwFgtxRqAh7fVdT",
  "key13": "LAEqmcnFTZaj58Y4yjGdzCrYrS8LhRRjsmphJxeEVpQ7MNyCJVZEbSt4wfWDhyFtUUXDZnGNs7av5V48jpnfRg8",
  "key14": "3y8j9FhBYM1UsEwL2PbXL9Aeevx3u2sCT8EimTYhppynvYHKE46mzuhjguZBfcmzf9MUGsQve4Jxo7tVd7xXbPe1",
  "key15": "4ydXEcvNAN99wsUFnvYLSPgCie4scffWuqYVH7iJaQ2wGDz8sggBZ6RgAbKRTm5ouqjDtKA1pr2LHQyCksWvVNLo",
  "key16": "2anNB8FF1KxNMRd9LtfRgxsmRkNDvbjnCQKL7acVeWH9eCEQcbiK42znQC2ak8rRJQkvAW6aPsubV7UsbSvYqzcd",
  "key17": "oAgLWsbYJoycGb77g54t2dGEz8CFgAnjuaSjY5Ytan2m3oRL5Q9bRDtXVftDoM6h1Bbmfaq4UjtYRCAPwn14Hnm",
  "key18": "2jpz1WsCnCqBymXgk9LEsFkRGTuh5QTcFbnJCLjCPu5poVXe5CoLyM2Jud8HgFkRTJSAnf9rvGCZynBiKQ4EUZB7",
  "key19": "4B2aCTRhQuaCcbdsn5qarWCfRbYPdmDBLpKfGQsKdrjsAuhSrFfbqXV3RVQKBrJt7q1yAyCJ6sAhiwxS2oLt5KqB",
  "key20": "3rsf5XLgy6quBFokJY2jxh813aadwiXVn14UZ3gdxQXnKpbBr3MpHgNfnrvZxibRSUzya3uLjvYTuSrZAhCgKorr",
  "key21": "3oP3FuF4tZ6moGuN8QUL6uM2T7jNKAVuu3tk1romZ8ACjimnMginiBAbdfx7xxDiynPPD8UVonfjGqn1tg38adMp",
  "key22": "4SFp2PUfZLnqoauUALPSA51SESxGsJg7LwUVydWTsgxqrrApGNvCY65WcLJguPm8dVqfDpBXeLQLvqntRqpDUPRR",
  "key23": "5SmnNkAfu3FvBuGFup4Fvu2UqRcNBRJC4vxTzQW8aH6ay7kqNnkdr8GnJvKdTTd5hcrhA3TmNZkpGtAT1KLFgZLK",
  "key24": "2KmQfxe4nG5fS93FFFJU5S6TGtqJ23PdjohWWLk3gwZXUP3YT51kU8vK9k1LuNksgasDogFwMedhu1AYpb5GHNZW",
  "key25": "8tDoQW99jnAvArLyQJmnXcRwShzjR7VZDEFRSs8nW4NySJyY1c3npDo23jCtNiFggnc8ncfByAQMz3FR2ViTCR3",
  "key26": "3QajWkWM72G6UVZmrqT7Yt9kjMQmwH5qvX5ibdsfbZuSmn7gdsFpuRkNab6ZzLfrm8KpTv2tpZ2srex39tm2MfwG",
  "key27": "5icQYJu2L2kjUpwwgBZ7F5Tk9c5dxCjpRNvZUm1eeCoxgDYFv2HnwxM6Bqa5DTtb3iBdGHP5XmA3FKB5e7bkLUx4",
  "key28": "4tF6xaFRADmA5g6aRWLccSdFGnNdQ3LEUWnTeHTfmLZFtx8sJRxjhCKikNcJLFtB6z5Znjs8wecroneQMrg76Yux",
  "key29": "qPof2uMa4TS3jNiayd2T2aCzoYrmvXdw98CQaUjK3ozeXgnaD8FZGEjy1GmvskqJMjFvfzT8PvPovcWChUZiDhn",
  "key30": "sL4hLCFQseRYqG4KyS1xec4NEPxeh7VQ8U2iKV4K4sTsLKLtEHoRAVY5jByeuLHTafH8wwagf8bzNz2dFnKpRRC",
  "key31": "4iNGb5FmPeq538PZzYZqpVTqZXLNoMQu8dhPM92BThvtokzuByuA11gER2HVeLq6LrKjK7Xrh5opMduPbSpA6nov",
  "key32": "2cEoTekZQx4q1s1Z45gD2CagnfV7LKbpw5yyEPUC2KsQ7Kkm1XdJaHJFoUwf13ngjCBDtLSsk5vG3Si37KE37E6Y",
  "key33": "55q5pAi21af96z9caz7ayhxogymUxvYzwhQFPkUfEaYL4B9yoV7fhQHerNX9wzjnztHHHJaY9jo2MiKUiALLWKaA"
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
