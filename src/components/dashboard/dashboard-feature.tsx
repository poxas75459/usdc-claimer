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
    "5zp8fUCEXNbbv4B51Km3SMNeyKPbZ469Lp4D1ezGaqaZgbvmH253zQpPQkz1Zng7DJZ5tEoud88BaFx5r54mk43P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mfti6yNxWnTNB577eg5RjHwvtwGeCyvi2BYLXQYuVpS7jmJrbruqrhvaYbY3K81xJ6yVaDabCRTAQerqUoJHTvn",
  "key1": "AgBehkrGzT9bSAUq8V2piTHGQx8wExrJZGWAiQvm5HXAPxdD4vSCdPgo3RrUG88NrwKBqK7spz2DsvL5hcZ8Rg4",
  "key2": "2Aic7qyY2rQYHZ9DenTY2VdiTrp4GZJZRB5hS1goY7GoTuvEmgCz9docbY6SUn7xwynvbGkNoj9Tuj1p9Nogyhx3",
  "key3": "4kDn7AyHXzxpWTBdqD7VK82D5EH6AsMLkVoQC2V9A2BkB63XyyqKA3fBmZfRfZ3NnYaBSXGZSR1Fnvg61CTJPXCE",
  "key4": "5GU8zmYBjG3DgyMrKC7crUopPt6qFqVczZBHUXgRgtfPTr5JWeyY3Cx3Vr72paemWp3aoCER8FEjb3nPsHwnq4mf",
  "key5": "2fSSYzb62TBY43RuVPwHxbJaBvaeAmQdGhxSP3LritZfZiEXiDsoVtpxMAyurmk82mQabzUPXjo5AextLYCUzWKN",
  "key6": "3hcFu74yHRqJr8FW1VinVQCZhKe6maEzstvVbmTRsw3nLudPVVHuMBdHwDWvn8RDZoEjEETYxdQGz3Q2Kx9zBFWP",
  "key7": "3yZvPLBKwTsL6RUJXRQkGFbLBtkRhp7U3oxbQiZKMfqhHDusRcYfTKj2frxVwyj2fxT7HPY48ngpSvH1tAa5dhGq",
  "key8": "4VjmLiw1SNK7SGBo7cqiUFVuGzuzuNA68hheziEZjxpYMJqWX8ukV3yeJydg6sg83Yrs8Wqw4WoVaJGtkg8Y1mmx",
  "key9": "2Y1xc9nrr2H2Rz9EnU7JPqU8QGX9x1bVg4C9tTvt9Pcqq58KzuCEA2FcJCxAfbHUAsQqZ1bpMGTD4YQo5o35sQoq",
  "key10": "22FjqydTKkLMVXw3PtaxJ6L9f6Dy4p86PNPEFt1FeChumgCp8SSRuV1qcRsmzhbbvdtiEkpCKNirmMTPrXpkvifW",
  "key11": "5Gd9xAGnrb1pbNHycXX7sW6gyLYxGMXwjEtm5yagSdHPmZ8cQfDPhfZZX5gJYHjQrx5fMfSnby5tHjS3ytpW2jec",
  "key12": "2NzY7c2Sj7CNs8JGXWubuVaYgNmPwNRjnAnbba6eENuJoHZpYzQNfMaDriTfqtzaA6W3nAmN5TZjg9oqUX9buyLN",
  "key13": "5vtZhE24UDBmPFYAyMdmdEXUMRnQB7mc49sxJinX72PJ2kSBuKNw2yiAmwsn5cxQtb35UrHcUNSr6dAskvBEktA3",
  "key14": "2nA9bVdonn88nCBxLRrpSDEawxhGR9q1v4i3CYduTzczw7qncdTeVbWMCgZD2FRnq641UoVw5etDtvxbGm6HaqBa",
  "key15": "5jKLPhoJN8qj9ZeCASriKMyZHCf6YHJMQGPKuJAHcSqSCHfLC93E7zHsbe94eJkpU2uS1nQCYqfPr2tFibxkAoGJ",
  "key16": "34cCgPS7rcKNwWwpRuD2CnFLjrPv3gNeaZ5wPEuMrFEPeLJSuX2Jbso2mu6PoMjHkAHLW26io3rGvT93A497otjy",
  "key17": "sqE1FLszJCapC192cEb8KhFf713Q3dfB4frLBwNL7KCuMx1WGS6LoVWAq3bNrekfbST67di9K3RHJpgy1ntuL97",
  "key18": "59MyVKoHuJEzuZEVaAPk55kzvFXbcmyJjAFAQX4yKzwVUyyy4dq3XznTHnijZ2jistokgDHGzVDymFwaXHAZCe2y",
  "key19": "YHus19pfCZ7cgjTUruyiLGuFLnKmXLvAtiJUk56LgyvjeiU9EwchE4WKHnUPXvYboNaxZg1oxZ5UngipxL5wUH2",
  "key20": "4dt1WQLnfxYj1CEJgrKd3XBnn4qCqGi22DyP5cuXqFXX6XSV255XU6rF6D72v6zVAqQP7CdEs8PedxxA5YeVgyjv",
  "key21": "WWrkj7hktMgZPN5SGyH9PDMnp2GaJVKr7UTvsBNUQeJ6E3G2pSyizDa8Lz5EagNgGkM5fUuZVMstQ22pe3N2a87",
  "key22": "8YcuYTo9c1q13YJAcEqYXVa7XCwobC4iw8gYQxwEk5aFRdC9FbDyWik1Xb2LKt4niPXxKKefcf5FsAfLjeAdTa9",
  "key23": "Xmj889U5i1piDtkfA1VAiHhYrvALuQDvugCGuhTRy241jKiEkD31buv6ZdC4XZ2gw7Gaj9QDiThnFsh9LyKWxvu",
  "key24": "Nd4napgHxuggzBK1a8WXvBcuw4v6DzgjKLzNEk2pvE9LEpdyY7f3wVmcTkvbMSRaHvgS77bwfHtJy3GHLxBDbUj",
  "key25": "2NxQyyYkuj3UKyoFjNCJWZDuUNRosA2fg17TeCZ9e7VM1hdF3g2k2jAuAmvvjPFS1d635c9M7exQr9oCBVTcfshZ",
  "key26": "4PsN1UBVCLT7nJJgs6Piwb75pN4nF72eNiBMVuyj5p9fJSy2hAvTumK38yr4hjkQaeWzv15LLZjM1egKDaA7RfGj",
  "key27": "5utCCN4wWNqLUWXGLQ4oRuG1z75oxSyWaaUNVz5EZsjx4ADZEwepuf8fRUD9Y9LXpccKZ5HevcuCraB9nU2LcvDj",
  "key28": "2SFLpLcMSMVR8iF3NNrwoRDfz2xytYLGKJ8KCKRN4GSQ2o6QwYgBAjtHxzNhNa8E7zYXDBHScMVJqDcT1x2GeHgR",
  "key29": "4U7P8he4kpjxuZ41kCzkpJKNBJdf3hE72pmDHqEuoV2xuC9UJNRyCo5Ld7W3ovkqevADaWo7VRfvdikKfVYBr8jn",
  "key30": "fbyUcmbsduG71xU2qfkuQjyeTfKwozKhuPYbtygm9BJePqfNyg4wvXdwGtuiL4TwUwUEr6g9jFSqoYyFwWyEErP",
  "key31": "4fYsb4cLfzV69S9h2JbUtCeEgeqMPHMNLYm8RwEph2RviapVuQJmk3FJFU5n3R8st4syT1N2uj4p5y8smEDC9HJY",
  "key32": "4Lx2h1RUnQQFT1tyT7LvC1GegwsB7QLD8baqEfMgKcUHCgitj3u5gxWuvTfA2HughFV8bThLtryt9jydyNhcmk8U",
  "key33": "3gsqaW9prWsEc4ehe1wYoN3VFztGtpYhKrSMLVy4566j93RVkez95Mm2sy8XYgsBtpCkim2aVfuZtNt2N8NftYQq"
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
