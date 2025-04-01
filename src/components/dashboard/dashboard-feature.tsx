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
    "aef8dT4XRsYj6MrdrX7TYRqZ7zhdBYV39Rvu4jUzavEKubaGk1EvvV2MajjLV653nRtxifCq69epVLysYCVDWdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "maC7xq6DWPSK9aExixdjhWTLX49RttP1ayH9AqFdf32fvnnYPdfgYx6UsYSmMv5tfgA2xEAic9vmNJ8hdoTwCku",
  "key1": "42RzporoiNHjiWUQpYPJ2wSaRXd1HAF8dV54m7AwdPPRqVBycjjcnjE3oWzmykH9ZFKjeNbNzVnmLfpda23d54pm",
  "key2": "eoVtU6BmpbgAGcHjkufxUTuJB6xcxQdS4nU7VnpxthqChjYfotMChdMh76y1XLKV8BBHd4AgYd5VgCPnvYuHmUh",
  "key3": "21WdpixFL2Xg49QpcYTSn2ef85AtK8Mn5HV5zAd7WdTqyAup1yLZtXQP6fnPa295amBHvNJfZwndPCfN2M7EGeTa",
  "key4": "3cLf1k4FkQ5nN8cSHo67yTz5XoNXdXEbsC3eFLeZHVcWZUYdhw367EudfbPA8oC52qwx5cbgRM19CSUb47TSuH1f",
  "key5": "4nn4jBiDFPWRsU482ynC44ztH825QedcV2QcATZRYUgAcFE8UQw99XCosDApc2gLJzce3JqxfUwsBDAUKijZ7Qku",
  "key6": "5QxECpJ5irSdVgyXY2QRwzHBxHeqWg5SFDMcmeBtUv49MtphvZoiRAqLa8Sgwa213QHvpbXMdDYGWJvENrTUoQRL",
  "key7": "5YPeHcR8Aq7Eh4HjnuMPSUm3s7UXQxFu6Jfqxkhtsw6SJbM8J8JdkCYh6FpdE8hd6XyEuLLqFj9NcQF8JMiee4oZ",
  "key8": "35hm7isSrRY6aqhBLcrh4gYLbbx5ujDpj4Tk1EQoWGYceUGq23mbjPTUgZc6gGsmeKouqXNYrJqUKuukydeTEM8p",
  "key9": "3TqcS4g9HRHBA1HKdTZiCC5SJoJsoxmpzqCVeS7XEaLLL75rHivz9hjDqpFGTwtEPyNXP2ceX2TmqJckEcbfnX4S",
  "key10": "3aBo7YTYGf17N8V5Hfh5mQiPzbv6n1R9fESfJ997eRiB4EKnpBcFhPe7LYYpj8sCj6uUNep2LqSBZbSVrWiW7nDR",
  "key11": "4cFWVX74xt2Nv9XRTni9PuzggRG6APEZPdemcELjaop6VJEJk7tAbsAE2f3r7o7it3byKLhUrqjfJcyNfDgtvCH8",
  "key12": "3XrLRYLuACMEpBpUxBCvqatb3j2PC4KgZsjAbSZMnZACG2wBdMqKaHYvibkMB7noyYLbk7aZvfkGErV4iw7qeZC1",
  "key13": "26eKjmKrgr3Qn1QxQT9pt6r6md5eVgo121jexobsn94ywVk9zkeo9ELYcscceht9WR9MnAYv6HJJVhgG1pKnFeLb",
  "key14": "3sDSydNjTaBJBfeK4rgnSYUpzjFHLkXe5L7cWuVZxAig5Y9FRySUdnPWhdH2ViX92SEAgVHRQonfMxPuQThZEXSW",
  "key15": "3UwUBMwqhcJPiB4GUqSmBFYDTAVDadc8wcDzcFpim2d3b6paqQdA2eQDRLvw3SKTzRQb1RNQtevMsA3PGRbmBNis",
  "key16": "4gjw74koRGQijZ7r1ixJpoBKGrxwg97rbuGKDwiVADWozgGTwG1bNaSCoscjQiGa5CFKgtbmqW8VVgmdvhhCm8oG",
  "key17": "3BpEzCbMLFDpms6Xd8zteuVh7qLkekbNCeDSfMKqU8aDVN7ajkVYm8Z7jfarw9UkrU86YYyCwahES9ejsvasUqCL",
  "key18": "5ovYzWxZHCer8EVtY5UzyQAUZjrazZsqDfyPuquM181a7V3t1Yi3n31MWdaNdz2J62XPTzBNuTHMYkvuRJQjS6y5",
  "key19": "xsXP3mG2fNZtgB8igL5dtmq2tmBj8UZ8FA228xRK22EkHoiyhdAiHQUDnzGgv7ihyWRiyEZXwSXz9At8jDejvqj",
  "key20": "5sxPWrpSeJEEZXCo5eYw6NFnfvqS6sbPuBgxFm5QbDJGKgAkgptZWAJ8kYeDXFuqR26n4i8q4XspDVGdHAhDzW6y",
  "key21": "H5aKW7vNk9kyGb8Yh1wqmCdpgUfmZk3e8zTgvLq6ctcmzEGGW6L8e9mSiGEaxChSfZd4XAxxw5LqXqyih6ewbo2",
  "key22": "4UEqvcQJHmKWFgp2U2sxXHoPjpnzNJzoFgaKTeGe5zTTSWzbi7u2yDXCShEVwEStNnqUjtEkNde6UbD9gSy3keYG",
  "key23": "2LmFro5M19cBHVp1DW2VZtq7QiFCnhHHSMdB9B5KfXy1MrT5hvPECEvN2FKiQ3442WAFmbmjrKpJ4quo2KCfLEoz",
  "key24": "46xzKmBsdzp4T29bfDmn93duyFGzTLuLJLLK5ybDX4FD8fdjGxX66nbGwjj12USjh8zVSfcKAqX6P6v57N352fbu",
  "key25": "nhJBSVC3je4kVL8v71gtG8uKccAR8h3DovZBfRCjjVYGHyHJK6jH4gSaGis56PEMY58bXCTcZdhYwgegZsA8BiL",
  "key26": "cdHgDdfizGg7ovhpT5H2XZ2VY2WH1cuKuNAhMsMWhcu4xkoyEq7QqadD9DJGcnbi2AAy69XwxXAuhEFYdCX9fNi",
  "key27": "3E6BXsDX8TnD2NQS7FxJsAsNy3eSoxodSNgDNAwqstXaD59EuUVu1uMwbNrUvKjBqTE62yeHpZpHeVJpVu2YZ673",
  "key28": "5y7LAigeXrdEoYZecejhzTQKjXCzfeJwXcjq9pT4fNiFKwJAnYzCXuJePgbAvn6Z4hP2N3awDiTT9UFWzPiExy88",
  "key29": "3TR8bdEtiZuB5oNnRZppqj6FNKoiYSTRQPdMdMAewcWCYJ49xdM95egqicdinFLUey4WGgY2Ep3QJ5SvKmGmtKzm",
  "key30": "4yZ1YnEd8vGzT1KnndHLfar1YcuiEK2iZGmdZLxpRUMeZ97vBY6ejcAmx1NEkdH3gDNz7izDvthQVVrYcqkoXaJM",
  "key31": "2RF6qV8y4Tai4pRLDLdPidDvTi2JDceV97yjNfCtcAFVEdvB8KZvFJCyeZU6VNfZ8c69emsAt6YjrfDQJ1GJtPVc",
  "key32": "5FuPasejzJVr6eBopXiyjACCuDy4nTuoBeDvrHvb9Q6AWncFRqkg8c5CZkYQK5Fz6uJfs1HoTmanPcU6FvzJnR8u",
  "key33": "hTLqGzwt1wW1XDkkgn8mkvt7utwfBHsQyKvUdkVYDvrGxW4rPFehoxbWroum4Z2PSA3aWjkSYzkusySLa1eYrxN",
  "key34": "3pzyEQ6pgyDb8uxi5Kmj5xCtxFVuFcatTBkhpFiJsxp22ZrzjKSMK8wbR6WG4Ms7fPzN7gg8VHZ821h3FpaGS1iZ",
  "key35": "2DJFgJ43cUR9WSTnajU15zUS2o6xCjzbryiAyGGMscSGqdBro6SkJdKZ67Myo2oP7pWx7yLTiFcHdo6zTN9yaAA9",
  "key36": "3BeCwKhUAjVLFE1NHBTJroDjgeqNUY3SwDwx67NiviRXS6ysvK1QtFAsbMbUAD7ePX6HTzBrtuHXcW9jpTtVFwTp",
  "key37": "3kr5wWveGGJkxr1YTgTbhAn2jqYsoqFRdf4PFWuuCN6uTwEVJAeFtCvAk7w1eR9v5EqzToYMJckLoogjbrFqqLCs",
  "key38": "4nX8V4o6CQsBrzgpGXGRpgDgWyxjK4uoeaaUHX99X9cf2Z7p8jHTPfmP132xY7WDydQy7kZUoEnnwNEXZMsiJym2",
  "key39": "2bpVVi7oRABGifcML2bTsn62put6sKmrrofnbrvnhXNYY2gir7Bp5uXbTDDoucBchvcv6peSb1atBm8XjjHNCcAy",
  "key40": "Ztm4Xdr95yXe43PpKmU2t3fJtvusUaJvtM3RHtK31B9XXBPTyuM28v1v7R8Xb6UnCMNdst13wz4rbAgPGkyEh8r",
  "key41": "3tiA3i9gwx57UnUM8UmgNQMhoDaVNLUymH5WhKZMVnqEA6K6XMixKTQisjM3mnPnqnGfHJekseq3sJUuf1yBRLyQ",
  "key42": "23XzL4Gmctyqaw7PvbP2PhUn5ddG1J9qyC68Pm5FAVnpozFX7q6U5QYZmPqNrGNfjD7zuT4iNjLDZsPAgSenAj12",
  "key43": "4suU1Zt98cJAgiMnWCUs2ErPvGcmMcr8oZEnNuZHEfn9erErBFzzZjFT4rzbBTpFC4y3Ziby573NX1qF1QnsUQVf",
  "key44": "HDMw4edaJscrGCUbbptXrmhGnN1T6h4TPNXeEjRfqRKS5Z16xigaws5g3wFE28N6uarciWUCXzS5fKY6rCT67E8",
  "key45": "2opTr1Khozb3J8h1QwEyNmZXpo1t58W2eYW66JHeqyoB78JkdE9XWYtY1Ubu2SA4S9SBKFWBR5QSrjVFsnJstGUn"
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
