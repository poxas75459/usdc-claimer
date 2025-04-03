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
    "2Y4vqTtV1XM6F9CpUemdaGKPp1XDN8haHsZ4KdGD3rZp7PWy82sfYFwY2uhrohTSJUNFKVrbzNmxrZYZoSt9Qb9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "262sivpSEmJbdcqW655K6252Pgbnw2Ym22mkbeMRDGdezD15Ecd9vCwfmScriYu46qjdymMnLAui5gGsPv478tH7",
  "key1": "XFakLyvVXMYxJNN9QyDADzkjGzCzFsgnLtn6TmC8WLRDjELBw2UTWv62whmK4eKkCRLfX2hSm5KaiJcfebANjCh",
  "key2": "tCSBP7F1oLb62N1cwtjPAg1CANHR96dHb9EgcdqBMiCG9CCaGnHj2xHq7sgJRZ8jL7YY9FnYwoNWpXhX4UV9xPg",
  "key3": "H7a1oPUEYi5Q7pvvnhN3znxkTybY411ULfoFPSgDcSLjhsQKEuF26U24KGxrdqZQntCK3m2jgzFA8Yce24BXYsG",
  "key4": "3oMJgMZs6dHMUXxG8NjgvVSi9asbvbBqupKPrf2bk28zczXS9DMJ5mRW7ZjsYoKnmPxyqaLSKHK9oye4NmLnvUrJ",
  "key5": "2uwpE7rmqwa1r7yvLAUed9hGYCneHphVLzURikKPUg9NJWnQGfpwjtP1EWyKBGizKgRRyY5kqrNurpdJjDS99mRE",
  "key6": "2deJ55SnbUKQfRUA8U4YYJAYh3LcDFkjk1nS8wNdCumiBWQZjs2BGJsXQXrFjzatxyaKZLo4W2HoTDmKi4YQxMrT",
  "key7": "5RPPWEUkK3P9niKRPsJ18UYPpMN9wHHsGyTwgwaJ9LV2nD8Piox19Qex2zsgZvB3oy3S5TnydeAKWtiCVtttNwX4",
  "key8": "XVD9fJVTPX4M9hqquFoyBB8zu5U4A86uuZbuwdfYWNYbuDCcZCFwsL7SiQJ1t1k2tB3L5r5S1LsBNAuYfDa6AT4",
  "key9": "4YZBQ73MHyTuELLahz8HoPEkeCi3DePynn2TQZXhb8HC5UZQmFSmBWxq4q1NrPSfF34CXbUPP1xQifZz5rGGzRHw",
  "key10": "5aM3Ab1wMbVfXah7Qb4jnUzgtG1myWz4kn9y36Tx34UVZYtbWPuULjRMCHgjYaPB4SDbLz6jHAeQJLE3gympBg9",
  "key11": "2pmTikMbvTMKUUHUedFDXxo6oTSMEM1PqPacw22J4biCZCya9ABwQUPt34AHCbAbHvRhJPrGRSZxyZQkUbva2kH1",
  "key12": "Ft5xKt7RHFaUtR78PS2qduEvqmoLaWnANGee1YTCZbYcf7TejaBunzS7ufmznG4zSNaFrmFAeGiG5fsjggx9kty",
  "key13": "4qF2MvZw1NSXdvgtXugoQkeY8f2bur4MgqryJiPcMV5oqPXP2WqGMU8XCAuVMhcKtCLPMrVrtnhut1CPELXF8Dep",
  "key14": "4cwGer8ZG2yDnDBagCBMePhEA4gmx3Cc5v6rTfGVWAAoV1RG8FRvVv6nyKyjLKdh4mYbHcp9iVB5UnsCnMpWo8du",
  "key15": "44CRDara4QRhwdQ7aGJtoSVpCFWCL5LLL2r2MGAS9AgCabrriSHfzLsUC12LfgJ7GJjt77iY4WysbDBeiwbDrYTE",
  "key16": "45Vt9uMjtUpzGAifTJtWemz727XyKekHG1qD1KKNnfVvxxTGf2aKRtZBaALiuFfSEXxoZnbWnL67dPoWaFQf77RY",
  "key17": "5iZksKnNouhyPf9TmJNTCkmJ1tvaT44utk5UUWXmxL1iDoDfAN4hRQfiGmvWgnLY2a9R5fNhg9JRb2hDBhD5nCmK",
  "key18": "2fxoAnS5D1TtKRhokQh1JE8GxKZ1e4aFfPD6UK6Fs9Vuk9GH71QqmpUneBZt3HehRYdF3j4qLWQTRHLA7sBAA74",
  "key19": "4uKiz8kmayA1GfVKbrZVyfdAoyQVMKwvmfx9oCm5wupoghaSdnTp9vKdCUHDPZE6uw2pJiEhavmwxR3jU7UH9C99",
  "key20": "4VjqjYFsZ6TXQL1d9X9sVv5R2dKf1imKQxMNCJBn6CwxRz75UXEAjPvFN9MdWGEZnPzJDjskPaKMwQjPQd7yJsdk",
  "key21": "Rpz7VCNbBD6joX1y2GG7B15b9oPGTP5bm7DLqh14vRhkRPaBF2P1iZbYDS3GC2BDuAULw99nkKEhF2gxaENwKsA",
  "key22": "3pcdKQLvWfvseLEPCDxBhCdJCDuV2HCt5sXWCcFP9NT117afVxGdqBM1S2sDpGjSxhgUKe34Acdr7UkG2hf9juAK",
  "key23": "5qFXJZeLATJxYNFnAr2JP6kz67957GNx2g9szSV7zAb3NWJTcDxfbBLU7yUsSGfDrse7RgHg74k3GgFKqoDrmtBA",
  "key24": "3bVAekcy1VPWw6WyzBKjggGEm2KFuPz8cF8zkh63DQvf8QfhA8HxmkUEMJ4qE39vrA4XYTvtt4E5JPRYHcedBpWA",
  "key25": "2hqRQG95LNGN8iunyeGcMmr7AXbWAf8g8vfY39Uw3UBX2Fswqds435FfzsdZeMEpsFkAJAmg1rv1xm1vtEP367tn",
  "key26": "5KCXaLZUSEc6oqvWVJQikBVLhpWz1TKbJUi4za5UCVwL1sq41jUa5JDCoppDjKQiZAuNUFEV7BitBSXHF7dH9Txk",
  "key27": "2sy7isqDtCWJEhVMVg5sHzzWC5Ev186k3sNRi5HDSFK1Ud5qkPosD1tWgzSDYUCdGuUzYXzxRwisStjouYLLNXG2",
  "key28": "2Lb8XekceyboBgDbmFA81xwcVsFZmebkWDhToKbz8a2cAdh2YVNcAbZMjBPdKNNyQJG6DKG5CVr62jL15LiPzsFf",
  "key29": "DXg1qq4u17DjGqEdUJP1MmUG6tPznUsiFTfTorPmkuH363W49HvY28WuzHufda7EV1JKiTLuSQh7weaQZZVnJCU",
  "key30": "iqsveGxbvyKdFcdj95jtgmCEYnNsmPoMcwcvMHMm44ECJbVN2izCmYnSFQ5TJszd7bsHzs35U3UkG6cKwoKis1F",
  "key31": "5HAoN9mX1D87MM4RZNNBzxLNKAZYcVuwMoJ31ATTDMZ4w3RBwtFTiGByCiLNZ5sRory2rtRPdR4CbcxigpjDtC6z",
  "key32": "5SU6c7y9Q1b1TAg3BP2SEyRpSei18kkTpAwJhtCBpJgYco4ixDQTQv9o9mHuyNcCsRq48jDzAcGoUzJV5rsp4wWr",
  "key33": "4xraLKf1ZT1A2uUQoBPmVq3r7UoEhmjCv7CG9dJqeMZm3nwrHrncX6UiuZiYPHifEuPjRnJwjd3jajdcgj4KvEiG"
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
