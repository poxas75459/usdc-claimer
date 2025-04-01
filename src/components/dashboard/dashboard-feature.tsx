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
    "32D98jBkZvya4apWTYwkmeeWKHKgpiQfG9AVtJ1emE2s64Xhbt9wUFifYwh2mmhoHwG7vt8MXXckzoPndd6FMf81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Aibbw3SyhgipFeqHazEvYT6EHs5XnTyeAams3EaLCYakQjaySVMdYQXEjeYxTgFwMkj2AUcpvFHgMrPKyEn61G",
  "key1": "4ybFRTwrMXwk1DgjUxTDNMTg95yJJtsU9sMFQEhVMsEWXD9yPSGQgVddLvHdWx2wnf88qeUcNKajoFciCNPBJ6SV",
  "key2": "49pgKugLnuRRWjb5vZkEn8icVRWZk4u5regivwx4UHiPSTBrJFiH84BaVBgyKcZHB7HHDH5oLcZvuLhcQPH2i9Bp",
  "key3": "3mCSGkERNNuPdtCWu5B85EbWtsE9B3fS1ADR8A2JudSUhmiDfcwENUZNionkz5at5Fn4EzUok23w7Z3qvPTBgTC7",
  "key4": "396TjvojZVr4Y1irBh2Bg2TwythDTm9Gr3RgwVzxhwk988mUN7TutSiuFqWzdruJ192ZxnrjwVxMLbPGRF2LcDju",
  "key5": "45UyKDmGz9bKDE9TxFsSrJLETUjJpwvjrcJNuF5r9dnoY72eJ54wGjNc11McBL1Qck8UaHGUJEWufoismBYX9mXe",
  "key6": "2zmbk9yt1UK7q7ZDEuLoyNkpUC7rcG2LyjDo3EJWv7jrA53nnxgPnqQn72W5hL4ZGaF19cz1NQjbifZsZdrQgUtP",
  "key7": "2JBkBdZ2hZAuaKPTg7rFeszYS6X5dNs6jyXgQvXC9wVvfdX7YPKH4yprhrMxpRuGGArzbMaEC4bLkobQLaZ4Bm4d",
  "key8": "5uFv7WSyGUCTnLifuQrxAoWpc4cy16P78E5f3DkVZ3m3FJytEEv7LPYq5TQscZ66jRaSoowDUhS3b19UsSiXwa2A",
  "key9": "4U99FfujjKFQ2XRjUfeYuyr2f5KkmswurxW8DGo8RExM21egLV2FSKK3ju4ziGxaEcqBTszmUw12wxqLXQdvgTcy",
  "key10": "337DguSoRGzFNwH3pbrcwT8TfWMAEjpabKr9EkvJHxYQioDHxCiRPVLbRKKJafHqYLfBm4KpSY3B7UxKb9EbH4DF",
  "key11": "38YigCTa4Xa58Mm4PKqSkrHP6AMFuF77MNv4Ep3FUPvjD8JRuXpiX3qF2NAckztdx1ZuJdRuyTRWYMHCYA6LM1R8",
  "key12": "4TrysQsASdJCfjW1Q6FQGvLDBzRscZAmDKiVw8Rmtf5ZAAaAGszm1WsfqeMHQ15prBNqZ3L1uuXKTx1sC3TPuEjk",
  "key13": "5xDPRZkZcHdbSESGR3kxxJJ77izmioMWGN79MpVTp4mREUkFWT5mxhRxQDqUnkk8fJNXUgStvU9X9FUS1pFHhMzK",
  "key14": "5aU6f4djqUUWFdhAUtU5Fm3uv45sef2B7aZaLC3NUqzvJxzaAvVBZXQeDVsFDgu4yd41g1bfd6apHYXcxZuV74Pt",
  "key15": "5wT7JtPGEQJVEAvLzTkysYVkzRYez2xsiEavLHEHv7qoENwtLh78Gr8yhfGUCn8drbSJs7B6uzmidVuf3Ap5oh5",
  "key16": "3UB5mtHcjQkG53fFzvqgmPCnY5hQuxKpHni5K3nWwjhD5ao4BHM2MrbBYh4RtvjwZ8bM9p8e3DQz5CXUX43KvWad",
  "key17": "5pXq14rpaWSHTTHLUsCTT1vcGkHqTxUPFTMWPXi2oTf8AuQrnt4w1Fzr83CDJWoKnxZTxCncdc3jmy65cSM9DEFL",
  "key18": "3KRYEfhpGcY7YwFoRJkwmVeActBHiPWXGeGexDeuAi3ucpCXvbd2shVUcLfomapFpD3KoonbsfcqBR81JXVF1nye",
  "key19": "35fPJAyHSoEBkZBrzm8pd7aj4Xi1G9FpBu8ECpheDzC1Kzrf6Pe7aeSftix942mEnvMAVX8bqQ9zFEm6KWbrhfzw",
  "key20": "rWjtkfME3cc3uABL2VofgHquQDUzwWTpbbH5E6EG8P2QnuHY1cLJuixYdkY2Lszor9YdK2rKCQr4Zc2WcSWTpwA",
  "key21": "3bfzcbdixu6YzNot3b46GbA5FZ1E3mE63AzbGwKpbVjgXMTe7bxiF6Z1WzJNgdM7mMbgf8k71Wy3nnH5wzuGhJgJ",
  "key22": "3iPPV6TZZaEGJW3FjkRZ2PnMBes2h1cvyPWM7DuLZGuo3KiHqMaaYqwDiGtzMUXoJRuTe8X3WctvEgpKyNge2HKe",
  "key23": "5btERQBTSMpbpAtQDVCuprn97QsDoVk6t4YFNQLEq8Y1WVuCEzn9Ad4FWspfzQb5cnAszC4J7E1tZR7qJTmzS1jv",
  "key24": "3ZNwMjZr9LbNN8dyGisngtZ6iKLLugr7QoJZEkYMFaXoUZp48fAVM1mp3kcTCTyLchkShsN9CstZHjg3KuurdqWT",
  "key25": "5cLaq5gDn4ScSgpV83McC5qZaRDbvMoLTi2dQKRjwwMq2RDwjtW5JuzhGvozoN84Pi9HmAhcRrfh6iWwAYSwLJ1t",
  "key26": "5JapaNSaa4ZtKqJ18j3KkV3EHvSHHXBCEHpujd2odE18qs32vtRQPpAjRdjjAbXdjqT7aBhCG4i7gAZAAgz1rdLV",
  "key27": "cjgAd8sVqdRqvcmwvjxzkErr2f9d4EKKmLgXTPbU7G4ZeJArmFSv7bx9aUghEh52h9eg8UyuGUgE81AvSBdkKaz",
  "key28": "8oZ7jy4bEW4YsXi1Lrf7EMwkgHjijsmJMqnpG99p5bbLUQN8bdsT7GjXXuW5hcdkVek6XBBD9DeN2QAFbbSZFcH",
  "key29": "2fhjhPKhs9fHD3ecSkz3WwKok6VozeKnGvw3BegxjcsfTBK4NYx2KxyuzVgZ2xhojKcU9g2sSXCmNhMGERsSVt3p",
  "key30": "2TZLjX6Bqm51QaC1BNot4BRyFhec6DsWPoY4Zbaap1sURY2vHqBjxfUBhbdAMUZ5RyJvunwfagmU2jtu7jtDzgcM",
  "key31": "3VvRMkqwqQmEv6pKoizdRvDz2XtgUtXtEXugyZKAHzFCNvgkhnoYjmcb8fwcyyJdezAGB4QRWdioNWkCcMH22zfw",
  "key32": "2abiCep4agRNx1HRgzMpHHxaVQsFBAURpXtZRYEkaWHBQsfhNhMKd6JAAnFLkeWpLVnwv7ccwUA3dfjsM8PSePcd",
  "key33": "4ZLWzSvT69pbjYjZMmAwhyQjnSpiboANYcLucBwSnrg76ho8P68u3zATXmVAbpChpCo5T9My6rCNkhup7ptRaj2q",
  "key34": "3LjHMxbJnvYcAF72pt8dEMxHaF67tEJ372bp6CxHdE5A5z4f2bPTkYsBviTMePsp5LtnYesUFZqtzzBnsazQyTxV",
  "key35": "3uthiTm946xBvkfUVtyZidkBDmgEswKivB8FEH34B5GHnwxXKvyYWAV3yGSuF5zg1d8vpcqfPgwiae72c4neGoVb",
  "key36": "2qNmGiEJPKZ2TXeTbpF13gMpNiCDqfPBzri1mMunC6uw7ivjgZX7Njo2fQfqQ6V7PCCEBETQ2rZttFDCi2GoNWdc",
  "key37": "29xwUFNXxavTXz74YbWeVWwu3tdFZS74sVaBeMbRBTDQBVBioDB7AJ5gF2Mjk9ttyBZxaFPAQRLjGaTuDBvFD5Lv",
  "key38": "38xdzsHnRSqxUuZbesDH69Gy3ytQPTChqPhkvihgR5P9iPu1GUPqPB5L6XfNYWGUqJ2eR8Vf368FqsSHh9jWPdoz",
  "key39": "4A5j9zCuP2FJ9PHdn7WTsW8y1GBJPQvVCZjqb1qyiSVbdw8gCtssj6vkcD4xPwQHCpTjLPjFG27cPixztcmcXtTE",
  "key40": "5jLJVWhBCCx4EiXoAXFBRfJGaTsS5ZWYwAr3xQzEKLUso1YXyJq6Z3a8LZrFSit9PnTQ4o5XFBSdkmzrYkS48xXX",
  "key41": "4rPncZKvn2BF2h2hqLdoQCBbyjzNN8qksmjnQkUXtBwdrqiBBJ81GWsHsC8cVUwBxWkMspHTEmxKY3FF5UJtMbSw",
  "key42": "Xv2Hn3AWpHKAW85Mh94n2XB5DeqhcxSWg42ZaygPozQ8sz76LVwnuDCmFgBfDnuCM7DCpNvRUS8DqhigHRUD1Dw",
  "key43": "4CRyAUbX4Kwpst4FYLGU418XowW5D8cq4bYUmBvpN9cmT4rk58dTtBwK2WmMXq5unoLHkvsjfk1jxkV23jxCuwoR",
  "key44": "46e3atCkLrDPLfZabvhJw1VdEdvnmD4T3hc5tUtZut6YL3KccefRsFvp6mfFc91Zz2WD23rHdnwzrfChYHzcoGjh",
  "key45": "2xBMpKBdnPkV9zVr3RDRjTYvTd2cU1FamkC8mkxKhBeJgbQU9ZrU2AM8gLCprwxGstXmhKjzfzcfTHVovsFbr88J",
  "key46": "3nA6DSCsV5t9ZaZbKJ7ba3xs5q4s1D5CjzFJStHGCoZ7HmMw6ajWPphRgBkNTgJoE8aQJ7KzJys1WwjEm8V9swSL",
  "key47": "2Qbta8ikcbLy4aDwB4K6GCeyACDBhPodMijAHo4UNh5huWNJCTbqkZitCRtuTZxWQjKc8rfgukUR5npf1YKP1z7X",
  "key48": "2tnB38JPwvCuDH52vuX9j3HCixqFnBJN9KetY3MoC79tNaKeA2P9et1uUvATae1vDTayD6w5EEZawcoZKtx7ecR6",
  "key49": "5WRCW2BYoJSNEHRNAYf2SX8mkP3zLT6NDipJwaPREuyMAJb8sRJfZVoB22UW3hXqgBQWuhNBd1kQT4YT1epZGjmf"
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
