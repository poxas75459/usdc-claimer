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
    "5zRKW1GNyx2tL46c7hGc7EkUpF6ZRK9ZswAZqarHZqh1hvviaRP7KfAFj7AFoTeEvdrVL8XFYKXKcKLURKADTgC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tQZmBpfhfqWEaCkzBfS1ys6g3kqXGSRkSPNV5bEMc3cKAKiS4KqFC5UC2m8SeDgYsuUcN2b8f2ASo8G74NJVvU5",
  "key1": "64pAajnBxiRWYGHpT4f1MNVG1GccVmaLaz5BQ2Wjn4eqdee6o6yTt6ndiWQKCNRrononZ9tQBSJjnpi1DzH5gPu1",
  "key2": "5ux4ZggSHSV1jrnTm6HgrPP5dW1NNk8VDQr59hLq3T945RVqzz14DhpkwEeHfJZnGCAzqwinY67kmafkwz8r8Rwp",
  "key3": "3DVSihG6ug3WnunDWrmUzkc7dtYBXbCj9B8ziDN88KeQZXfJgTGu1d3P9EK4eBbVSQxxBzujc5RSf42G2o7bobu1",
  "key4": "4LFFh8ZuPbXZSwdNwJBQ593nH2Jb4d2YmmZ7iLRgsdoPU3B2giuibXSv2uMRNtQArxCZ1twBFezAAVmgPu7mQ6d1",
  "key5": "3BfgZqiMKLCjBJocZEm82WkR6uJFK3E95JBisUTSCizRzhYURnENjnFRMfhUFvkwxYcADYbtDexDHuX9jZzAhUAZ",
  "key6": "3i99w7TphxqsD1wNXQNkENmc5539bfqdtcFG9Z3HnongQrCqpHY1oZZPvPokDMJCyP1u3zUKWjpGqDeciMFL8jWT",
  "key7": "u14fyZnhY66c4bUMmFi7VAzs8v3BhgR1czgRAWjqVnnnmvcRp1reRADumtQNrNfayWxai4Bj4H4b6sgCeaXpYQX",
  "key8": "3tpxyRRFSzUcCUbnaZGg1w8KVtd6o9QGSdXsmv35tnGpk1DMhkVjeNveZXehr6TWAxJ3NGLDTHFKJtovc3ULyFGr",
  "key9": "5FgarJ2e6pGei2Z4d1kSgEXkQt46PJo7ZTf4HsDpYqw4uwHM7u1oSwPKHd8kwdgRhUnJ9id3cEW6XaDAfEdoATUK",
  "key10": "xF5njGYTHxHT3YJ1XNaFxdR2dBcJma7SZ2R4eR5iq9Ba1oxCwKwZ9Zadq3XscUSbDcRqgt41zqfah9NrmfZF8x3",
  "key11": "5va4CJwRcQUpJt9TE56YdnqhuiMaHRQiPw4DEGJogKJxgv2toLYLBiE7XGae4zyQqxZf8CzKF4FEn6NyjWbTJhG5",
  "key12": "DD11tC6S6DRa5LH5u4quNun7vNAPTNHUVSrxVN6fjgbZZcZ569MfpftRhQpe2LGzd8npsDTUvhN6fLR2LCHtfEh",
  "key13": "vrCe9tKeTPCyx1AgBxp5B3wQTSQ6jPQRV52ufvcSAzjpdeEZsfYv5AumstWc8reEVynAVimM5rYMnhE483cgjvK",
  "key14": "5eawfM49JSYA5DsfNBwjBteAcrfQnC29ZkZkrm2FvH7nfL2SuVcePD2TgZSTX6Uh7qrUXCC5xkiFAqRmzqzYjERC",
  "key15": "3WxJz5A6ZtVk23KPTUgykWufGMFcDFkd9qD8vJLeuofnrtiiugYdwWQ82cT5ZFKpxzDQRtHFViqEwD9NrQsqCh6L",
  "key16": "5kyHHGj3DfnTyGqUsGs9z1B9bFWsC2ofx1mJ8URBHcVSctdaXafCUVhnUpeuoY7gkyjjkMtghMgvnkghNt8nsfoH",
  "key17": "49M7kVV3G4Kwik5UiBnK2yXydHfzB5AHBzrXgscDsVnCt1XMEAiRXVn5r5ApHFqz8VhtEUx4e4A4bBT9rPiAqob1",
  "key18": "XebJBBZ68734a1goezeUp1WgULsX23LULTozkTBrXAABi5jFMNvqCNXtyz36zDYhjumd8f6vMG2vYF12fNCqEk3",
  "key19": "4girqJjAFE4eqDfr2AHKAXmQFP9zM6r1wfpe7EmHEeA3M2SdE8q8cpydxd4jMGMUA7iBniTfumGbrDUzPUbtXZXq",
  "key20": "3xsiukccXD39frDtA71G2V9TRWsNtTcBZDtzWamKtcdqwUtuSTPC7ExRVdDMdsihtf1Ayw2AEGeqhrMYHrxnGi4z",
  "key21": "3m75HLK5dJco64w372upTFoX8h3PRZURW3q3WLfpYaP4Nm8XzFymYFZJbFjWMbztVKWUXXhHRZAW68ij47Zy6XWY",
  "key22": "2wja9UzAeu13AhcGcEJfhZTrFB2tsDeijV6VMm9E5Yubm8D59NgAug9iQykhXxHTzmHohRG783xLsGyjfXoFnyNy",
  "key23": "vNrRimD5VNM6W4LwNDsbyXyTVJxcLSuJftDPRzuut6fhFHgKZYfQxqVogqepZSZ3PAgq3otCRMwhA4s2X17diZm",
  "key24": "5LREKVbvUYX7yRoEy9zniFf1BXFW4TBc2ZDDV1AAV68jtTQWA7QULBSFk6z7Lh6bkCKfKbbCPNS7KMRiTYcvmCCG",
  "key25": "2Qz8U7paNeahwK2L7MX51gNH6uvT13Re4Puv95rpHtN5qUwwooKAJyKXfsM6ry688m3cCddGTG3uPmFYKC2oaxW4",
  "key26": "4GXckvqcZJCYPW79Mx2mWfPCSvRFLkB2noaFA4NyWbBPM2GLfLt1xkQbetmUu5CW1jsCMQZyzm2YWmAuqu6Eabd1",
  "key27": "dy6oAZYnfmmrfhRfDGSYzuyUvb57uufX7JUfQcU1VrH47iiZJBPvuycVq1XnPnFXUbqJQQhGxerQZexjbW7V5n1",
  "key28": "3VqEVsA8o6j8JwhkGFUKe9V1qUagzKpR4cofAJa3DGYkvRfrUCWzT9eCBZJYP6SvFheRxGtb6ZhZs8KQX66iT8N6",
  "key29": "4GSfLo112aHdbELJTjzMeUq52vE8jXZyUj6WdWbML6tsfgHPeV3ZMCYB8FhBNCfpeCLSVRh8gWakWWbcxmyYJu1D",
  "key30": "3h5GuKB3Xc9qr4vYzxvxofKUPyA3UYitr4wCCgeienXBLWEG1qB4nPNHwH4Px6eB7SQWt39Ej3PG4jb8roaWG8q7",
  "key31": "5Pqdq4zGhRce6ZFqkcJAhDRBYkHyvrmGWr6H4MAMjB1xH4NFq9YcENtRHZfZcTaeThH3HouPLfYwMbTijMMfYjbs",
  "key32": "4FAhbMwzeMzbVsEp3DT8r7ZcToeXvFjf3gfX3p3UdTa2H9uxBvRdk4tRGDsKZHDidaotoWnDN8zbq6X2tdRmCy9S",
  "key33": "5pVLoAV4N8G2HyfvWLZhbBrr1ZUMSJN22gkbTbsHiSbRgb3Q2cicGNGtNNj4m4ku2fSWMDswAp9rwgk9gwuhLvX4",
  "key34": "2ybXmTBRhHapiPLWwzXusWZrUaZrPv76LuxyKLgMo11RC3BGdTt6escvsnAEuKdcmGPZrVHdeYbyU9DKHzRinPHR",
  "key35": "EQWPV7edEKSkFXivFdp7wNv6k3fRpVUX7E6CVHuWHdsLrWfUZmcqCAguXXc9xyhG8eCv7rJf7f5XRi5wbyTb9pn",
  "key36": "5XW4swyhU9wKF557jMgBzhsUBgPKKsCHzPRjKjGGRWVMdYrBdhd7RjBbdDnF7EzCyYdNzhnznBDiikRgB7f9a8QT",
  "key37": "dH9SLK315jdHNVC7ymtqEk9zksJTWocodAyMFWCoEzajubuPr7fWmi9EugkZnWQqDnEac2HFafHzSvcwKcrQqfF"
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
