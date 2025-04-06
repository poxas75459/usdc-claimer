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
    "4wCdjnGWd6MtcZGwtGbWwtaX4HMaTMsHfTkau1ajbXba9KLffHusnBRWU5GdDS8YPeHpRo5VMdz1rskseyrbFHg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JKJ8MrgzXcGMNWDJoXeGSrgxBWHLadbtqWP6aKRsm6gjvu3NK7g47hGamCmtB8oSAz3gDDqdBFsYWt521pmiSYY",
  "key1": "35Ah8sdC1jHAFa3DsoEGmABcvPC2CH1e8JUEEmuFMe6xUVsZVL1jCMyWwghENngerEMAJrYpi1tNTc2YkHd2F1Sa",
  "key2": "3dyU64U3srCYm6zjqXML3P28bzQUq9MN3WQEd8TghJYKBqhfahUTAerWLYwbidBNuHmK3SgJT9GnV1HmrXdWALT7",
  "key3": "4BBgo54DieuwcEVNjvChCxvYLXt1vCPpLErmCsHVk1kzTWLodGSxhDMVjMDb6gEWwQT2ZNmbhdFC46xx5efV74At",
  "key4": "4rhrZjkyZbvFNCnX3NPp5RLkFRdFvzNNyds5ED7aJeUoQEiot58MF93TiGUHEcEfNKhEjHFycK786mDiL1W3TPdJ",
  "key5": "4Vvg8RinJZNkH7iUy36y1pexeeMp2oavfstwSusF8XAQjPYaaRCa1fCjxgHDjymnRT774Tg4KLK5dPeE2hCaHLP6",
  "key6": "2ycQtpCd22MfYb3qVEGQySLVR4RGgwvDVdqoM9rNRoryUUmUNF172stEvFvag5nNfPYHFqHgpCvqLk1VgNZNcbYi",
  "key7": "2BGXZiLiytNMCY1ULRNexVT64c7Ee1QCq9g5GXCr3oCuLPiX8ogLEJDJTbLkbLuTvNqDUE75b52EnAGs5ECwQxWF",
  "key8": "yzMmDUZUz7Y67vSTpCP7wf9zyYinQ3P4ixx5puxZY7P35ZcioCnXKRa2ULRJ6kSXcMKAZ6nR5CTVRGD4b1HdnHu",
  "key9": "3p5DKh13ZrARJ3MfFzXuqko26FZ3bAR5BXMHmZwCXhrt5yVtuqvJuAVvd6WjR2hc9qGDLCYS9eqp1Yq6awPVbYbA",
  "key10": "5UhiftCTEosAXPf2GErfZhdoC1yDdMXUH1CdRWw7CHSDq8uyq18ymaQwM66sgoUaSS7zkqyifbfPqi531ufDGxE9",
  "key11": "4hi1F2ERKTzXgJfrubqeeBcEmWTRmwbehPskAY9RRGevPXsvMPKRraR6GUFr4VqW6XS8diRDCPsfcXxAVGXpXCeg",
  "key12": "28SyQ59jZtGjNx997c8PQwA3cLWrcLjH2CLoCTTzmVbrYApXfscKsgRWgEHDpZubYJnKHDPawQ87jQMMEMqCjeCu",
  "key13": "3RmSoxSLbur6kTchq5h6uw1TSnwN4zdZcSV5MkuXdfTjXAjMW8h8DdKqPRLDdgrGgyAEfUgSPL78FHiWzquhuG4r",
  "key14": "2ChCFxUMRWjhKFxNpUuhTzVTVrAExAFTgv2t2fT9kGWwThc9ktJXu9FPHKXxBg7sKa1igdTfdBksnQVasqH1uqWX",
  "key15": "3oUiKNstNwEFtFtGhVR8UXXaXQCWgpi3m9m7pGTSXmXbHRCPr3UJdMS956iU1CFp592Kjrs3MYPnTUXcLX5GLcuM",
  "key16": "2zZA7V1FDjthct5VbGE1ga5P6rk5zyV24p4e4Bgi4e4iowexZQvjM6rS79oCaJHgQdfvqEg9UhS1DixH6h1iZkE",
  "key17": "2nidJ5ksHsFkBFznUteEczLAWVuCfjYsjcADcHVZ5AQbAr7HJdXp4hvndh1DNpnUMVuM7sokKZW76oBig1xxu9Xn",
  "key18": "45USJYuqz63d6pcqiVsxsJzkGe2pz7mTQfGR3CqBjomfdUFWpsvmCGNqjM3FQ6oEcLK4A8v2NqBDtV73NTKoPaMH",
  "key19": "5wwZAy2vYXLmiDkc39ysHq7uLH44aEZCZEVimiUoAViXiAtB1GXz9wznfZtZcEBmFuE2xj1qYePZtgLx7Z4ypQRr",
  "key20": "3DTb3UREW7AyBBABnREdpAdy9FoEia1tJ2f6Co64SMLZ21xNTZVxKqvy5DQ7oNa4WAMyjcNy52xXY85LwNUznn9g",
  "key21": "5P5KCm1Ci2g3S4d2UJEqLUtjaRkebSdP4RkfZLn5VojrEiEta9Aak7aWPvcqnowhiRA5zbNcv72MjKJJRVvnKSUY",
  "key22": "5uFjUKfNHAKziqFDAKVx8BDPUz9ggu8SSRPUhV9LXTpoT5oPcNeWFCyyXjyjoUHoFkv3EyTcDzaZPnFAwAA4LxLH",
  "key23": "62Dgn4qauZUsngiV33mxtKqAf7FxL6m9vautnSUJThJ6m6377q7AnfaJfWRwW1irEFLJeHmvFGaj8FEiEzsuBBG3",
  "key24": "yVT1W3dFm6f78EhUNpRBZBXFAGmFyq3R5FARAxx6rGUPPdAoRMRuTjrh6EJiuKhJ1BC5WmL9Kwqnpg4a5VPAKQq",
  "key25": "3jhuMgPPexmbrebtahefKhYjRzQprgAS6RSfkaRpzu8NA2JmCS1jt5h72DBuY1b3GGzemNnvosBJCBBxWK9gfWUP",
  "key26": "V3CfrNRgsRUJ4u2F2pT4GSpgScnithv3rTJCiDixtShSyU2qxM8wTpXVHif2F1LGAgajx8uH1A1rGHjZvgtnukP",
  "key27": "mATcLJ52bY3sztdDDDdM3HXcteuKxHGVRdPLSJrH5H2eKVJX4RsgcgJisb8aQuqj3AixqAEXV8aoU5B2LDKuQwg",
  "key28": "5TTU7ypsyKeQNVBCWg1LcBgLWKJyS8Q3eD7PbzyqKkZWYnRu7YJzxHyc6ZpQAJME9d9E23ebM4xMeoYWNdVFAhJX",
  "key29": "28sB764RgpRtYQikyix6RAk4Wf2G7nb6z9FibDWt5uWv9Cvh19Cf6JouSSPYCaQF63VQmeuwDwUPLRp5HwtXsPSW",
  "key30": "2E53DC5LXrFMrUN2mASVVjWNEDPHMLULAxspR6YJneN1ZsRKkh3TFVWrD1epSpFVe5rXt7bAWKCkLspobKceJW3h",
  "key31": "8CcjwD3P9ctTLQJUaS8p2q4oj2xYhFapmSWD2TgLUzEs2nJbocH4npxUKQC5Ej1kSNywPpZLHKECEokU9x6MY6B",
  "key32": "3AmsXTzVXvuAFnHU6qgxk4nSsNB2hVvqqRQrrGjKxfCtoWSNtZNnxZxxgE4rswrkV8H7MT5Da5GFmrtvxKjGUfk3",
  "key33": "22QnfGJv7YWz4jV9jnDzzLob5mue5WSuBcZQ6SU5Dyot4Yro84MXhiB8eb8pJidT3XYSKv2R6KKif9nBfDDZD1du",
  "key34": "uaAFUqaA6SpNSYa2i5qGTi63DZRYHcv5VbKisVcm3BKxwrMg5Any6PZSJkMk1RtWCgU4ieFZrRoEiCaU3Gpuzkp",
  "key35": "4ZoyJ5s9pcnJkZByZyboAf3fDaFnQqr8HCEokYpeYEwDUxDPnk5mhfQUYLZvWbNPgQGEHVG2LGKrRDqxc88bW6sq",
  "key36": "meUbpYoVESQtihY3b5bZpK1jxhVyc8Lhq4ykocfkFFtuMF4uW6CYHihRJQj8VVRfHmUzUxXNNjg8g9DBTJ7GpAJ",
  "key37": "4Go5d1uKXQou7M2iJWaYvn4xx4rGLiysP6NJMezNFP6a82PYkRESQfTebEzHD63pfCeN8gvuv3F1vn8QNRbVogCZ"
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
