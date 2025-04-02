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
    "22x1pWihkeD1k6pd4c2ftYj57mHeeq69eFWjx9jXBufHwExz5XR5XgNjwiVhnm4wicbEaRdtAuSgQFjWv2srgjqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GX4VQUfHz344iUVZcKgMHEWSPyZmvPEKRLvcP9wdF9fV2MuuL1fGoc3TqWq3VqHE5hoY5ewYdMvfZqThdYsjAPP",
  "key1": "3Bk6y4ovt8wHBTSxCawjfysjbaqcMbZ7oVehvamdPJU1rB4DsPd6be64Bq6KkL63VXCbtpxQ2vpkJ5H8wYLdJS5w",
  "key2": "5XHXV9FenKQhLJYJUkxkhghph3zSaQX5MxLjLCzsM7wMxQN8RaoGv5J7wWKdGw2Yjxfos9bewztiFDTtjG6FywjM",
  "key3": "55d53ZQCZdYosgXGkESEsB4Nnwkzy6Ddm7ov2eX8nMAV7VtSgHES8bC6QrccGfKBhmNvmCyNNddn4mJGjJnYdHC1",
  "key4": "2sqGaPi31wa4p9i3XS8SfxzYRc3q7ceJ9pY28xxSbW9Q39RSMsPeetUYyAnsuK9V45dFWxJ9XTHsbsroo4nYXFfz",
  "key5": "3rEzn1FK5jCzHZqTc7HuX6RcWL4tGarNyzdELia2hyuyfAhja3VMafzRbXKbX6dYyRcpWud75zhbHTQjL7TXSv7r",
  "key6": "5eDDpqvkoUrDULKCfJR2GgTSB9qhDmp8zy6em3MikL4kmZczZkNrJ8egZ6uhYRaahCU8vdWJhjPBfdmJnphSYoFS",
  "key7": "79VzmQEAHupqChesunS3YeG4GTxq5vDH9X1NjMWQApcq4jw3mkNCeqFuQBsKug1siDBXxHuQtyqcyCHJr4tF7pP",
  "key8": "4c8ThRREtMd9uDTnN8h6dicRZ5xiDD5bAZcHnEGhiNmDHKRh9RLAnNDMMdSKTvEHz9CYyCEjP2pfEG5GaEcMdRqN",
  "key9": "5VPqyYr6gTdzAmWSv7gR1pwFUTUJYsqMNTMYLssGBU4uLw9Ku834bybsYTbqokzZn1RtG1G4RgySWbaVjCtHnttp",
  "key10": "XZH6ySj2GS8ZoV4Zj8SEYdG3zn9XPUnvPmNidWVACpo4zW4Dc1VAizgswAQyi4rJMHa3rG7GpQQLtsp6SJjpRBY",
  "key11": "5Y3KCZNyPz8sEQnS78mavWT3YfSNmnsRTD49ABHeXgHVmB6fzvT79PyrVJSCFBTAb34ZCpeDZZWrL3RHHvt16hm",
  "key12": "4kcJrZLs3foWL5r9sv7gxZpkdJCBfByd7HDdzU6ukvdkyuPtotfNe2TFxeUBGxErtu9HbGSk7Ye48xNt6Y9X83Do",
  "key13": "2gWkGqGkJiFKPXqeMDnbgDzw3vSfoe2sHDHJpWkXkJphAtCNkSshER21JgPP7bEfcQjZZG5FJqXQRckeXHq2bK17",
  "key14": "27mYwmHa6MD5cjWTtdf9iBn7bAiGLrTGa3KJjLQMnxWdP9hodbVFUfMmovReWkhiFVk86AkF7Tz3BvC3QzwiKX5Q",
  "key15": "3UbszrmKhysGRWAkhU1rX1h6MwMxrvXyDutLyALDUQqEdiZKb57uQEHjBByCGmAF3dBtCBcyGXk6DsaGqvLELNec",
  "key16": "2qbteEnEXBfGDkVnHURHEvuSEKbdALTVuV8Eop8vZztseorqA3p38aXGfVDJJWtsoDChuCeChFPKU4t61KAjo5AB",
  "key17": "UBMQFpHRZoKYPnN2Fa7Fi9n51mCwUDmo4d5aD5fj87JvDuPd4tZb2n7XGMyXZn4rS1qxkZM8SXUcd2R8kXJyHy1",
  "key18": "mkAdrqt6KLQH1Bmb9HrWtfhu6cuvS2D1NmjurQbgBBYvGTm56WPjc6f9t47Cx2xJnZhwrvVA8yB6XZXNXRRpZSf",
  "key19": "2cgtTiJ8b7CVs4dLt2xFMyGpdti6xigFoys5qrCMeNTyZmS3uCaAAXfKCKNG5NYu4iCMr58HMWaLPrtEcdC3oCnf",
  "key20": "MHdVx6czS4Yfw2GpJndt3Z53ByFiBk9SwVTG439dWZcnLewRARmPvZ4A2NvssgsxxyVEj6wtkjo21WgbVtDKURB",
  "key21": "5NKmZWwGP9gyjGWdBEx18cDpq1DZT6uTxzdtpdDVvLsc56GtpZUQrw3Dumvj8q5xwNykhuuGdU7bRX26csS6S1FG",
  "key22": "3SAKEH9Tr7RaVTpJEPY9yHq1pBALWA5cGycCdtqoxaSUu7ZwTMuNxze9Sxm9SMRDHtCDekzsRgUAnz8XeiRXennQ",
  "key23": "62iEJDDPCGbz2SdegG8qr9RqzvuPUtuZhHk3MgFeGzQU9vo2o4jhydqY7oYchesTDAoG5ZWEo51cqmqnBEfrF3dp",
  "key24": "4HmQgE54PFFVjQnpiKVCpWp97rqa9YcuMZ8RnsS5fMRLuxLZQve3mNwfXuNGRPEXavkvajDUzy84rJiUZ5X29uFt",
  "key25": "5fpUdo7PjSg63KnbMv99HxNbq1MxxwSGYu5kFigZ3U6BWLESsNJfHd8kbrqc2nmVQz3z33Uo8j8mV4AoL6VKF7AH",
  "key26": "2B1D2sVkwv7iVJzrLzxSxVgZCXYpmEYNHUHJP2HZHVx1U94PeKewfpkKW8VYHwRb2PijQqYezzxWBpR26fxryL7B",
  "key27": "4t8GWZEaJ9VDdKoF1AHyZtKC9nB6W9uqM7yePqZPokVtrZaGhxn2hQCpLC2SBpaTncHosfwUxkRRP5sbVeR5Sua1",
  "key28": "57QXdseQwRH46RE27Fauob4MFqjkCcqEf27d6oyMsnGDPL2oXyznq233keLf2p5N5Nfhqrupu4uF7vqdWiBamrQC",
  "key29": "5mw98kjgo6pfdkrj2rMzX3BT1BWadVJRiDptiLmdRDSHFYWoBQaj99H4URg4z7VarD93zqatGijkskKBFKcr5Gau",
  "key30": "zsbaR4EXmYVQSk1Ha3gy2x2Zojrr59k92z5UyzBwhwWZsvx1LjqECY2g64EjGgGkBLsDaaPGFRZjiswWwgc7NUe",
  "key31": "5YpsaevMePYnhLmJrodcqBEgTkb1FzSc26gKAaAVafzZDKDy2NPYdUUQUmognJDhLRzpfcxeea5gVV1kNH3kyM68",
  "key32": "SHaxS1acYggHmawhymZ4pYX6QEUhRG82xf3xsXtVE2exGvqUXrRKBD48c6a7hC5MBGgEAfMw4cHFvL7CZd1LMde",
  "key33": "GMV34Nv6uM5qaMfJJsE8fPtEzT13HGPwUq54S3vyL4b657KrmXsTgL6UNQ4gFf5WLFvsuJyEvzf8tK2ZdY79Lq2",
  "key34": "4Ag1cB5MLGQgwtiLNJ7PrBdmE6q8MvDecdCnvqm2U2i6AXzPfFo5F4mMmLAeA7WX8LJm8ip5PsXEFR3S2gJ2RnNC"
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
