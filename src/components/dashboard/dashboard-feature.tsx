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
    "gvSHPVnzNb7r9UYyukFmKTHS3Vc2RL4cyERTdS8CXVC4thhKp7z79q7iqaNnQAg7N9HountuHowkhYjgnvtJHgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xbyNZUpqiER8yLw4oHMUdMS3v45nJ4EAVsEEXBNN1ySZgCCWXLjYLqvT9qXbVNSe95e3eVN1kRPzbXPp8gcSJQn",
  "key1": "58wR3UNwbAt8R5ssxMGu2iyqykCT6RjR9os7Ap39eSuTRYdAQRkRwsA5zVpNt6Gpu4FyGBhR5QzYRoQhoxTX8iNb",
  "key2": "drv7kfdJcR5Anszj6uvGAjQWt1NRL7QfMy2suDA26BHwktKZPP64XdbTwGMrNLWGKvbnmaur7NExfdtaUcq9uzw",
  "key3": "nuPgv3MTvzsQZBPqxpuEP1U6vDmSarftFPucFjzTCDhsegRXqNxnt34xMsxeNqFVCHKBXfDa236sNffH32CzyJQ",
  "key4": "52AUQG33T4NuGTvMSrX4DGMkTZW3sYavy1FzBBQc5S3nSe23iF7sCRtVHt8ewfxoiSpBMYKbm9Ya6qYYwBgXAL2T",
  "key5": "3b649VV3dXceGhYBtCGAvqpnBSWsBCi4KnnwRkwm9aFHrLokKjftA1GaAVATH7RTvzxq9vzJrvrKeWix6wSgz35P",
  "key6": "4wYPJbM7PSRsZKthKDuch5u3qCzJnWUsAH7TQozU6Y34NxHhvq3qUB1NefMfSBePFa95es2V4DzGqrkFV4yXL3NX",
  "key7": "4PH2qEFF3e75vRrDqCjnbjWUyYPwTa4yBq79T4Md3cvT4SThUVHuDKhBCFmbMnJS4GhvzV9WVWJd5yWmqTw627Ri",
  "key8": "3ZLgQsJ3bYsz16Gsc6nLBnjfT3ZWY9kkbqDDw49r8GhSbSCFTFZ4cPecpMa8CpXsmihYBvvN9bfaokXj56VCxhR6",
  "key9": "2PqgjbyFLAg6eo3AdLe9mZVWmmCUJJ1Wfq9i4A8X5Z8ZgPVJ8kijiJ9sWErcrsAi4gMo5Fghsi4qDcFi8hMt5jQV",
  "key10": "2hhbtiA5dRv7sjPEULSoDz22qn6TKUUmGoEXPvbhPx4uRCWG8WAeXjVCPGVcACgR9qpNoHstwm5Mtgp7xvU24KuK",
  "key11": "4tbnsfHLBG5uyQDcxZnV8eFSNMMDX2VSECiDNyAWrYpY6uHXhr4WNSriRHGgMMWms61CzY7Wi3L4HTKnXLaV7HQ3",
  "key12": "2U6BLntroauJQAvkHHHJukqYgqcBcisyDskcuhczZdJm4jC1rKVkdTsPWsDdqx1qhutLbUSzqiTTLiA8Y7x6ZZ8B",
  "key13": "3WJJMRnqEviXW7u1Ay9Cr2iTB3MXCgqqzAu83Hjmjd1AMc5dApLpJeA5eCWF72Jk8dxJYgxiAYfCSonBhEeBjfwa",
  "key14": "4jktJyhSB5xJm7MHgttjJv4TK93TmDjbW491doL46PkwQizJKWu34CXeDJZ18ytgaWFicqj3EjuT5t7AqyckzdkC",
  "key15": "59kXLptR3XhBjKhtWeGVW7AQ4NsPvWp2nykLpzmqT54YnmusDSnsGGGxxUgvukPi7VWGdRLsktCa6xRKjV32CrLM",
  "key16": "TKtWjuC9jNw1TVaUD46BMLNUjfUPxfL1rTd3yLotynqDRvXT1LNGWwnzPNddnU7Gz42HgYZd7NrJG72dFWeg3tx",
  "key17": "zniBLcvGpBo49KQyf8qMmmckARb3GAUCkCvgXeCabfSLL9nRAuz9CM1MfbvhMcuVZGzZZA47aNkNe2H2jrmxdVU",
  "key18": "3zNGPdk5DcdCvP3WzbVPkHx6MXs6p8keu21Lfs9HpW2p3LkbYQT6kvw9BwzbNwv6Y9Pmx4tpqUnRL5Tirbg6NWmj",
  "key19": "5Rk2DLRWwroguAregXqQfB1DK33HeDE9c4gpheRctz8Lgu3YeLkZEdBn4585aw4od27fyonf8edwXDfFRphFCeNy",
  "key20": "5wNiuwtXKoixw3mgZQmDZjyaBLuQyFufEHnqsgYxvpp5C6sPncFAZPJnye6VHiqCjR248jdjs6vXEnwjaAfbb95P",
  "key21": "3QFMg9PMQ3jv3P8GYGZQDhkCci5nkHhHBCjNCRiKkjDPnXaGnbfr6HfbG8MPSMrceKHpKFfJ5zEVnzDFSQE3Pz5C",
  "key22": "63gEmJaNQYgiY9hrn53kydRhGfRdmqAZqNNqYY2o7n6sGCnCwviXZKbXWgs3rxdkNvucqrUYaqhaafVF3oBFZmHv",
  "key23": "4is9wjRGybmBmZoWczcQ8246MwRsZNaidcsEZh25MHGTTgVxpMJjH2NHmNR6GKvFTYy2fQRmGc6vhw2GChb5213R",
  "key24": "3PCGjpdcj21xvgS9xXqDxiJsuAik4gLrtMS8wvu9wuTTM8aFWDNXH9RTFUZX9N1VsNTRWT7mHu2sYVJjSbqyopST",
  "key25": "5vLBTa2cNKX1BNtWRoMM7Zym5cGQkBMgehx3m3yTWC7FpLx3qmgf7gaJZSHJ88Du86HreXuWMiXAmiX6hL5kGGcp",
  "key26": "4PBYyunR7BhZccxcwC1GnDAgiTPSki2VA8vN3pxs3gCeeB9AMVLKkGf3dukBJh8RqCJ7DJLKuUGAouH4MbRnJnXj",
  "key27": "51TFCaMMnzeTBvksjRP9qp9YnPVrBSBX5t2psxdkFQSYPomDA2AZrsAFvy2FfyQSvJoYTn8x1B2jPefSzoB3kiPF",
  "key28": "4RKJnvW34YJJQWb4qZkqkSy2eBV6frVHYdvGjBPTDfmoMXqKPVkpgfZx6xVqfqYDBV8szZmnK4roKFcndRYyMWtr",
  "key29": "sNJNRm8W3cAHuPKi82Nc4qyn7W8YivfVuH5XCuggbzd92pyNcSxvck9HMiWdQpWQabNhpUGWEgWw36hoqFXtjQp",
  "key30": "T9AybmXvhtkweF1rxegR1tybgURfcT2MhjEGHPQ7YSHmaFkLUh5FmhQS6KzGqCQarkKgFuezfE5L5HmbpFs4nmP",
  "key31": "5Wxfs2ZFzR3hJRAscJw5z3Zzj2ueS5JQ4mrPY4upr1gmMvPcvwdVtEczdf3sSxr6ZHjJRVCX8h4UPxRz24suPtwd",
  "key32": "d5M7RhSNYZwHWrENNaXDULWYhA4wroJ9bvjtuyA5GY38Qq8sdzawuKcoyqQGnuKUWDQnzjhoQqMLd2kmEVJdVrg",
  "key33": "6255bLaLcWKDPPX8KLa4Ykp14kY18aqbYecfUTyHTXynKs7nVG22zfhAkRVwQVhMNbwffi45Nr5qv3HKZzrLnhAn",
  "key34": "2aAfesSzfrLq9muiQfBg3cg9yLTUt21xSfjYXaz9rGHz2h1WoykBiXVzzVHbFqStXGDnYWNYPek7NzNh1jW9wvaq",
  "key35": "35vYba88iv7ByZBUQtxXkzBsPHzHyDvif5NovF42j27s7JYKEUYqPzUXphwQHgK8XPbEBauhiYiizfbM9ZGVPY12",
  "key36": "3wP9E9joEUmaLPDugYugghBLt8SoXJKBa7BDc43biJZ3uCLkPa9sG8BYxAjeJnVqLunoD3xouTHGTkUgKiQT5L9D",
  "key37": "3NLy8R3m7mGrCoa9rhBRAnLWA2eUqe2Zqjuh5Le7ScDY7WC2LJqJJH3jXK6aijAY2pDRyVAjnxKU5kXdj9Jz3WTM",
  "key38": "2auQb6i8nxcpKKYryMZcs3rnzTZQN9ujKh935VfFNzqvsA5TsdGdypSnjUDKyFYr5J1roH2tmV6bgXc1f993XRaj"
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
