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
    "45h4TaQ9MFWAWUvG7DXKtf3b8m2bJpymgCX9CsHedq2m2gnNKAVGdhGwzgXRfQwtgKVpJ6D4fBCpTY89Fu1KqsWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "471MJBVLnw2UJbff4akkrvgNNRk2ssNnV4bDsuz95cfxDwWj18XRh627PTn6xs4iN1NvCQnT6i4ciKrCC9DpUmud",
  "key1": "5AQXynLFzstyUnmpCL922zJSoPNAgvvZS8jSGzmKypM3jVfmL8VBekHBc2sZrHVKpnmQ8EGSmnDAcZ3xnAJZdMHK",
  "key2": "5fAXcfS45WdAbg2VGrYYmj56JjeyY7aYxdAqwBQ8qLJkuvBHHwEyMgPLDcwjMegK67iJ4mBgFMBXtywWHFbb7rwe",
  "key3": "2DcLmgf9nUBXgKDLVALJ77UyihuG2JsU4L6kxfVvBLEfueKB24cXSM39air2GEiEmtxXvwdtapYpu1taioB1eyug",
  "key4": "5HU2G7hPAmbRLwX3JUYTWUNgWQwhiShqdPrN1MdtLAxbCZE352dvjPSo3xrP7i1hEm3AoKVFezX3HkniWx3JNoBG",
  "key5": "4wZf2o3Fy5gdYXFqLvZr7kPWBXBeu62DRS5E2W43u1sgrd6WjoBULmReBZZvnpQfcWdrJVS6eNHUJLEVeZ3SYHTZ",
  "key6": "rC5aELeuBSFqoeEQguuuszFg5Rp9gXXo6VxADVoyKJ1KQt6VQ79DopLajMwNEEiUyKptR1c2FwmzHJGHPsa6m2M",
  "key7": "58JE3MwnhMnKzAdLzttH7xQHb8sRVkepocZqMveHA2wP5z9FgCeJFR5ZJKuyX9uahfTi44e9waEAwPx5ps6cn5Yd",
  "key8": "3evooj4YWoRMhaCW3urUsPqvT5RntM21MiUe1Z4ronD7y7ioxhtBdix1AhQQoEgLtb3CXiwnYJhKDeU54tQLhtxk",
  "key9": "545RZPzuje8PS5HTe4PiY9mpnCYw7z9VLKw8JtEFc1Zvtd9W9vXMEx9DTwS1hbXPpT7uiiGM2Wn3oGSE7h6DFVxX",
  "key10": "2Z4qBayTx3FcLUK6X9ABPTLpsTC37gxAgsbowjHYAA9RdUA3cypQUQcU1joJ9CFPU9BLi9XnpqBqYDTXkEwQuT22",
  "key11": "5uQPAQXGJsBj9JfHQjbaHQbfHkm8gpNbFjSCtcfyZXiWHG2AK93yGC1JCyv5mk7P3AZXTcyXCgiw8YNfzM3G66R1",
  "key12": "4ekPMM26Kzq5QsqWiKr1sYDhbMrbHytEcpMd3Ehfjh7qKDrViRNQaT56naqruR52qPTFjkbPtDr86UXMaDiRxQNw",
  "key13": "3t47NZjK1fwaPTRMzBd5iVhhWHTCm8fprhcsyGT1yD6jzWpxdXA9a6XWeKi4KpQdGD1u1hqdS1RQ9G9xxSM1vH37",
  "key14": "3GU7yM39RuUJ7HtoNS395gkS4JgWWfZbn6REvAMeGQaVNoYzpnjXXnq8k39gwE87ciDfcYWTufAMC4SyZSpncoqK",
  "key15": "3p6pKCUWcA4o9dzgGdmczpidwLwvXoR4cW2Lm6CG6oWKo43ggNa569U46BLHBkMNDBo2xbFWM5ArRoqWi5qdCc7A",
  "key16": "4UdRcBJo9ULsv4ZA8RNhifZs1LAzDxgvvn2PDbSJcA9UpbpNA3qz6B1UC1vTQgFbVEyaQdWC6NiY3cgtFxAWSvku",
  "key17": "5gxqSuNb46bren5hEjZB3Y6Utmh947aFrxon5K4YQh1fMnJbqvMwbBQUoGXm2oGp2WcQUcscnBJAXHuHwkBnR4Lx",
  "key18": "5Q51i5CgXZqzUGUuWKbRHLBoDX1XmDkHVfxsn6PRyPC8443S18G1NhWHxfcz5ECsDJM4Nn2La9VEVqdp7F4W6JHE",
  "key19": "3e1XvFs7hP39n52DZLp4SJGXnCYcLmhjpW5inoiZkUdezc8rMZgqGAXWEEWm7y6FBedSiybFQyyi3RtibGCVM4SP",
  "key20": "4D2znqoyJ5vkcdQF3MoUWsHvM5TXTd8Vehh11auatdVLqWawtnQvCinWDv9oz282RsJruzWqh1ojCVoKKqFdbb5g",
  "key21": "4rzKB1qznZqVTt2fBgsacxHBbKGTdjMdJR7VLKBgdXEY8Y6zTk7pTxFLZj6iT5txmztQP5Mr9FyYu9d2KwBURCSa",
  "key22": "nBkFkVVFs2SSMP4KkTFMso1c6k6CcafymCRR65uwGu9hKNiHPNViMfToQcNo5jtkzu1rh3jLJCxnWpu3E5ZvYHZ",
  "key23": "4sZc63YFn9GeauirrPiStsHxPU98EvMhGCSpPgnupr64SGmN2w3Cumx6rvQ2NsTpXcB2fDm2uaZyqhEAEU1NEQrQ",
  "key24": "5NSMEm6UwrPEWYtyT3Cr1Vu8Mbj7w6oiAHHy6wKYP2iPve5iSJtAJYP3188Xy6PtaXr6Qyrz5PhUARSvsJejmM1f",
  "key25": "2dp7SaHDk91ei1ugEQxtw4qs4T325ViWjZWk9Kxn5vzsyGoGpyRhtMfC8f1jDhoM7MCPq2xgnb4Vtp9AninGEgrv"
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
