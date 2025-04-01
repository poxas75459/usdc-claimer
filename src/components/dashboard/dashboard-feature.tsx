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
    "2JKas3PNqTo5sFvm41NLnaXPdSwx8ECEFaP67Kzdune68da6osQ9iQkbnWNLr3KMGRgMBNqapZwUDCQQBr3sJ3H9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tWV14119Ckz1gtGUJp5v7uMRPH9q6PyWBAhJPBRrMPXH7tAxhb9P874P2vMMsZioPy4f8owQbCidGNUc592Q7k1",
  "key1": "AFSxbiihth6zWriZrQqiDnPK7QcMZn25K9QbwmisHmqvzWCwkjtmvHY1zUhCFn7qByqy8teBYQioAgJJdkfT4DG",
  "key2": "4vydHMMS4ugZSm4FeZA9kvTW2KSTziiX1bSL9bMTZJaW19WbNaXAkNtsSoGWJM22MTxgS3YMH8YpFg2ePtUQYYcr",
  "key3": "3oUYXVCD1PHWUZ8nfABJYDmYL9psZveSXsR8yy9JBEfxYHBY5TdCzDVis7idBgNJjUHaZ2JjABANG9apJbyGjeCF",
  "key4": "3KqE54xcPzK2uwD3MFvuUfKHC3BafWaskRbGGBDsEiNAwMFWMR6UWtYnniX1RAcQizWyouqxpTcNAQaMFTy6ZDTN",
  "key5": "5uGsfXfupf7gy4SDgKHchM5UKDfpx4HvCevHJjLU4X2ypWHgQC3gPXe8KBuZFq1bqG8TwEW2UaAiWWsXAELpGYxy",
  "key6": "5oCCn2nrEZZy7wcCigdby33nYZkmcD1QiGbyPKc2kkfp5nQN6XRjtGkL4NjeB6B1qspHfqvDyj81yUg16HaVZVAJ",
  "key7": "2DcdWxKnT8RJL7VD7kVhzD4sozzrMYKKeXryKKPC72GTDxnUqqnczYcR4VJR7HpHCCwdnvs5dW6xY9SMRrpSs9mp",
  "key8": "3GCb2MZbevdWrmBPcqcqihAzKyJJiucQCBXjJSWAmHZr8pNmn8GiwmsBxd97MQ6uSMHsTvxf8hNMs5C1cy85CZiN",
  "key9": "2EPtiotW7LVwrC4ZnRXbFK32sfKFwgUFeYFXUdru2srbD7b28uaSAjC1tTeDLt2jNDyBxcMTNQmjp8mqcpFjD8Lk",
  "key10": "2tkFrQA9NdjrqGdHnvoBSY5y6fbZH9Bm27EKrGjaixrrSQ2XHskvgJTx5SsVxpwcvTE3B95mbgU8kZxwagk7hmB4",
  "key11": "5iUGmA7hcrrSxTja8AX9aVSudUnxXWRRLepDjWuSq2rLiDC8PY9ZgJA6XFkBpEShAhyCWCjPjfosZZdWjukB3dny",
  "key12": "gr8oRpNCHjfpaeuPKDUuPRiFKLYRoV2BpGPgVivtWkViPiVqhdPTC3BHkFRfkGuEdz6Ag6A5crUZfs6m5uTQfKE",
  "key13": "4GnyZXEt2Tftqt9VwQerbEBvV5nAsQmoNfusX7y2xAjUJZgHLsecd75JcjntV86qx66sJU1NSXnWzWDYeRVi7Dg3",
  "key14": "5aYudy54dDBGMaNGHUwyXPybSLUGtGvegR9QtLuz3b2zXnhtmT3XaV121frZ838GtfCkmdtR57DbEL9N7dtMLSug",
  "key15": "4BVrgqwoNQUs3raKtmhs8R4ExaaVkdxjnKSxEwVW5M5mXoY5WqvxSkxYioPYkQmBpeAghuj59rWxBUoR46UJKQhd",
  "key16": "26MFN1RMCcJRFRMQyCmGGw242bDb4Bh2TQWQQ5k3k6ozzLCN5YWBM4AziiNw8ees5raaobZDAzFbntWPc7GRmPoq",
  "key17": "2GpHspswfu6iCfkEwyQ1v4RUeTDsFcXFcjVmJp3fcMq5TgCk6GefYUAz7gPuFSH7kMaiRLWwyBLMwphXb3U4rrjd",
  "key18": "5TJWQgUJGJJKz8U3DnvBKc3nG7QjNpCfH59VVskMMjcE1PGmVMwJ8TvNDC5gpiiWDF5VcoQEvMCWwZdM5kY4qZEB",
  "key19": "3X6YXwqf9UwRhrCcAyTgcaQzSDYg1FPPA5cGhsZJnkaHKNYagWLjAf9yf5j2ccAtb9ha4X39vnEhEmH5KgqwmwpT",
  "key20": "34nwmQh2CEmg7xzpbiJzLsVTqisTiZjRBqfjwatKQcdsgLnVR73NjK9rwMvp8sjvLc1CuioYMWHvQcN751NuS4Yp",
  "key21": "3YhSnoFmH8FJXMYdS4s3mepUP25yzRniuCChkABng2dYpjb3xyi18nKp3KvYyoyDF8vb5vb6coznFYxkTWAZdWPx",
  "key22": "8r2ZCGXdQ4gdCgYyWCzBhJ7m9ioooaQjJZEU8SSuXAVdx9UGDWqGdJj4N3PNzrMLuqGjJkL1fC3N1LZjsjVGiMP",
  "key23": "4BEmKQKm6APJPh5yxW4gvg3yHGBHwSwMZZZzNnPTwKuaACAQByZguj2bfiysSo84WM4z6wfLNjJiW2YTo4sHU7B5",
  "key24": "5H5YVHDKgdZoBK62eZaBp4JwmxCWf1oQXwN86ByWLZZB28AB82eW8Qs4dgirH32sPcNnAbtzLwhyGPnH55wRF6f",
  "key25": "4AoUywQJ9So3pz1Yvpf2ES6sFvQqnE1gi2pPVi4qJqpEHcptA1FFTgGDHBtUNyzdjgA8dMktAUW7opxjom5i3EwW",
  "key26": "4TEvpd9fUSKHyycdirLNaeXyFbdN4X26yrg5Yib6P7S4F9DoT45YiTgtDTUYHyRLTTxD3Ajp5fHjpvHqcGLMxCAA",
  "key27": "2WqXqFVqrxFQwerezTErXe4vC94NQqEri21XHD2WYeoBNyp28jtBaAH2Ti6oztaTLynKMjVbocMQYqtDvmHB9dbF",
  "key28": "2EYa7vzQ6R1Ms2CYypdpnBNEER5AE7N4qfSCJCSBuACrBViUDtAtrQiW1p6aqvbJ4E6jCy4QmhrQYxP4Ypywadjv",
  "key29": "3Hd2Udbx35YZXUYV9Te3nNamQWE1a3UpZ7VnvcCrkQhi2j15H7zKoT9AXjhTQgZGcfqkNDAdPyKjEdX74o9Fg5Ep",
  "key30": "4oZ2PiRceedaamjRsv9PBXAiLcgVubTGt9mX7jqrQmmn1vFoikWqpo6KLFW1SU4mZmivPbdtAP8bsRz5BTNsGRWU",
  "key31": "2ufLEb7agR1WYptQCS5d6BTosnmi98b5MDy9M3Djis67ghkZiQyUH18N8FWBYZ3cWTQfJytFGLuL8PFVcLo4WQV7",
  "key32": "5XuPWHRkz1mGSTZXUxLid4bfH2ysQXzebG1Q1KgKQt9VPTPj5vMpSaju3iZ3TBoNmXysPT5EnDstF1yCL5kSAFnG",
  "key33": "2ibz1YLJftxie13UAcQUCmPXR1KwvjSXnTUnkYrgNh1pYRQb6gejbCve2qDGPFJPaNKSvSGrzBUEY15qMZ4z6abo",
  "key34": "4HCTf63f7i8V5LUY4nLcrHN4jiGPvNvWrBDEAR7gFes29cD1X53r1AQNqmY1wzzc5c9J8aG6ECnZJRqt9era4vjB",
  "key35": "52zRGmR7XzUjiXPCfn2FBko9LQCJF5CrAJSNjjnrDxJZS4DPqxt6foa8V3ypg1tDEawV9TjdmXDDPF9E7tik2cNK",
  "key36": "5VbghPnqug3hzvCx7JKNpW5LY8hLUpTS7Y2LJJoTbwfEvwcW2PTy7j1PRNhbXVXRTRcE1QEz364RUb1N92PM4ota",
  "key37": "hPSeR5c6SzPdw74bQHrMQVTsmmtWziJJay1s5kwf6VCRzzFZ5FhhkvUctPREh8gLS4jJAsEJEyrHQWok6LFwgZG",
  "key38": "63cD3KTBCs9Qk1Kq1Ex4YrVoLrWBuaCbEtkmCrVCDx8LyC2Ga7yR6S44CTbV2JnFinv8MXckH2K8XE6MhcksoZWH",
  "key39": "31SfHiHaGgGbmfiL7m421WMWYdGf96ffBAoLQ3UQwL4VMfC2MXSNZuPyCKKsvEy9r4KKBzvFGqsEWjpec3xnHdLD",
  "key40": "4iUrGu7Cf1YUT2xLou2ymVL36sZiLmYEQoosmZASaCqigFDFR97eWQA1JhX1ePHg6G2wonM9824XHrzcAM7YAmzj",
  "key41": "3jFk6JmiYtEuVsKJqinKC2BaGF9APF4h6S8ppTFjnK4jAoiiW3QXkYvanNV3Q7UunTqRdrK1jfebfVmeZHKGd5D8",
  "key42": "2pTBpYHUJ7BU2XnUAT2nyfKFvAvQgwUP9hoPxdsqvM5ptiKKSN4A93XsucXzq4eyhh64doXdZUk7L3WnW23fgiBc"
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
