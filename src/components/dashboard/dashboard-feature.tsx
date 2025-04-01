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
    "4ZWU762iHm8ibMwE9Mb2pVvShV5a7uiM6iBp469FNvrFgDeMBq2FYk5z4d8MKWt4W8dY2nyeb38axFNSXX4bZPiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jHH1xUgWwG4DCTL8X2FApXPMaQSZRThG2QPT6GvSXa7mao2icqeb1QnAy3rJNSevKjA8NyRMonCioobV7kziCDW",
  "key1": "5yCMwDKFoZWuo2Afo9W1hhwPr2HFyYfCUW7en7ijL3MqaThpmGCq11BRGo8bBAf1wXjakTMaBD5s3SogsMPmZSn5",
  "key2": "3tdJSjzVNDUg8PTkuFJPpMBmTwxUAW3d9jWEWBaSfpZTKPAGSRUX5U4kzsN4mNJgMTLd86esJ2NVDTpFurxbW38B",
  "key3": "5BbP7SFsXCS3hvyFPG1PwcCSyNjCYE3nYKCQeAQcFJdxabDPPnaWoiRa1Y9DwegTGxM1Uvoanmyaqi4GbYHmwRK3",
  "key4": "64PWxN5DFsR3FFbjjLQnX2HBMjvmZFqdQdNw7w3ts5cFWj6ooftoWPSaqY5GtTvDsdRnwHhHo3aVSY3MWbg98c8N",
  "key5": "2TeK9wYmSS3CPAZo9LTwwpKJXCKgZXyCJDKvzC3pEJe8bE3e7wsBpb71VeMWamEz3Jxh1UkVF8uVa9K1AYpPZyNe",
  "key6": "2X42nGB8z7pqGSWAdLscvWPn7qobgBKoMheo4hpKfMxrjR5gAYuvLKsMLPyhWmWBm9ujzhhDQKz4SitexpDqH1EV",
  "key7": "4g13mbPHJf83NHmXcqK5vnTrD1sDQj2Ya93ZTBqgkyoZnSpvJQPvBgFMBzYwxZXjs3H8GwrNYYoEpwfptSmJvrf1",
  "key8": "9G3DLj7LWEprWAQBNp1miWzreiUZUVC3sgKbtMHqVxLgogkwXuLWF1Ed454rNvaDCKYm1rwTKPyEGfR2UvGDBwR",
  "key9": "5GXJH8MgA7AT1yNXZaKEdZ6Lmxt2iPBZ2K2b8Qx7fkHPNxt3re3beqC84VFXCcKFqswwA4fWxxNGkf8jhdHRENRE",
  "key10": "5G2FZoFDytSGsVcoUeQKQ7qWbobRdmFgtNEDCgDPumg23N1bZephQ6Yc7PiWsUXHxpFpj2YA2VQryCRb27koM7z6",
  "key11": "4QTXFg6rkG1Wsd2Jndfsu7Haf95n8Bkz8fUQHMJN5evwWpoLuRPaxNfxrh6WeX2VPgo1xWC9EaJuafMWLC71EBL5",
  "key12": "5PVGQpfuCyuZxZUftNUdyt9myzsB7mpATdeNc1bJJMB9yuH2QomyCV3hhxy5fgipuZJYN2eeAfk3oM1hpiLuvSGu",
  "key13": "4ixVa86NsDVFUPMgxEs1kFwbiiSegogYbfsBLi45ZUFmxRYzWBVnce945B5SNJc2FaSu6spjpv59y9aUTvD7NVUd",
  "key14": "61sUbs41sDeUNztqcTrsX7NBvvyHBMYUTnH9Gsi5dmzrUYzuGHwTRCmUgdAjVLqeJ9hVtpxBJeYuzk8UJw9B2PzE",
  "key15": "3JRHBPCyCWTxjS6A1Yt3xM2EuHggVJVtLSFkKTGB66eJP8NXMp13BJE1zaT8m7jV8C8CD8ZA3zvsK5GEZxBJzaaf",
  "key16": "bzMg5rfD6czM1VDq2cH1DCRfcu1XcxU8gqrWMa4CCNB7tiHeoYNKsVMSnzA4gNyzKFy2vpxXWhAKCVN8wA98Afj",
  "key17": "4aGytsSgvAVRn4wx3LcoGNMDwfdo1rzpbPmzmKL2jSRZT2VUZw2QJBpzJ34UK2SvQF4Lm2Pe4uFEYVUuunk3Mvfh",
  "key18": "4Zf5YhqW2StJZTDN8oENVfCcw917LFMFeBC6DrjcLQFF3TjDC5Doaok6sjQ3FCGd4Hjd248MsxJUa4mAfj4wj687",
  "key19": "55ufyKGVNuuAqHLrjxEwFNJZLqpMwMmuPPPoyRgDatf129ukCpd6rtsMYvm5N7xiTHRGyR1CL7fCsxAQEFGrkGXG",
  "key20": "4514GrjJR9ZY6xLcTFxKePZ1Ta4wvQcHCUdXDz8mXPGEpsuVXvvYzk4MyK3BJ3SmJ73snz5Bz653RXZdCQNh8UMm",
  "key21": "57AzHxmrjwprDBGC5jcJNP8U788mvkhqFKCATG4A2cQdwL2BCa9seczMxPCMaGUNsVe97kjukRsSdgFbjc1MM5N9",
  "key22": "8d8gqcAGXo1pzHJ5aFatU17CBKejJ4ndRdX4ToEgpiVetstU8R45nx6tdRXNBMfwzdtYEXrS7pCGQkFkVx1TaiG",
  "key23": "2Mrvi1zRGuvtTPphRokXy25yiUaJWZsYASuwVRXQTpELe5pEZB2sPceyxPcSwPcjrj7b85sG3jjqy3uZrxVxSGbj",
  "key24": "4q2EVuGQPQNLznfiGVeVRfWsp3ZGvkwcuZnY5u4G994Dw8dUxxXQgTSfc9u5GDwh2rEoGei4QzWLPoftkM1F71Co",
  "key25": "3yNaDDgSgVNbGnm8tkEQw8AurMrDswewAd7cWXbxwj11rSPfZR8Zao4vdHzRjrkbZrTaYJZr1tGdByGzcid2L3Us",
  "key26": "2sjCsGGs5aPo9RyyDr9ahywJrUQH6PiF9SQFWJxpQr4Qz8qJsmFHHyXpSoUjmQyb3F5XyAmCk23ustwcqxgJ4cc8"
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
