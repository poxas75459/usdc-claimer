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
    "5codTyhcBCpvpPrD9ko6BuCQ4pXKa55L173wMLMdzbXTocVFQaRSPtLquvx3SgFfGEqZEiaZpQq62jgJtyPbis1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39hRiZ9hyLbkMm5HDrp6qekRj3bX9oASWAzWn9jTN4DrmmFVWDYVnSQusL6jvArmMAdZx1Q5vYE11yv3S2hZn7oY",
  "key1": "4LenXo79WEiJuVHapQbro1MzsBWgywYGoENW2pBUHgu2yaHyYoNpy5jRPEYCvWLVodV52PL2GZGRtrgD7eEiWVGq",
  "key2": "Evr5bpJh2r94BxKrjQjtycamGJwS9ZPM2qcGzxRRAj2N4se9Qz4sny3aZPYNGUVRZvGp671saKSngmCPREA412V",
  "key3": "3Ng96hyJCkL13AkT4fZYdmSvuYrg4uWKuDh18cHyAjgE7ycaUZVvCVHSrtP1u2PXmxytA5ycGgHamkvv1F9uXLeR",
  "key4": "2YyXNpUpx8cCNf69CixrkyHva3SHC8GDhSvXK97xogVRqPFAB9f8zQrRnWLLJFiHeZbHoDVz7Q3MsDzDNweUgwmT",
  "key5": "f6CLEkhUpo6xynY1hVkvjJcNYoPo8V5jYtq12CNGfAKd9pNn3JYjDJsEt9LZUaxuCzHNQkqyGzD7XZsdAqr8Vjv",
  "key6": "2G723gqqwAxbtPvSyby8JvdvutoVYRWtFi3KCss5zcHbgceBjyTNxAqaaMpv4AULMDztVJe1H9QMmMtJqfjXm6ES",
  "key7": "2sx6pAYR1PqDSKyndmwCPL1XTLeYyEVfBinTATpVwviPJ3nbiw5RjmUb3vfCvN1sSQk7S7iQb4TY1K5gX5vVhcoZ",
  "key8": "JCjL3odcAYDstdK44yAvL5NX2WZ8nR7xhg4Dh9Sm65SLLK9R2mZATuht9cNiWRMFiqHBRZ8XCdUtCSSe35dBQgh",
  "key9": "4c3n4LSYtHtGTS8trLcscHTYDxdHtYKvo1cd4WvV6ruTceZ8FAgHeLYUUX8NQjiVT2RJT57A6CuB1SqGCpMaN17e",
  "key10": "2b64stDGiDfDG7XjtkRa1GzSUQaeLQa1jWtccL6Sv2XhfneXu5PB92hZ9ijbthncULUeZV5ptsZZjmfWD7rPyXN2",
  "key11": "3VUhK9x89v1DuVPxVibByfXq83NbHwPcE3dDgUp3NdTx4UzGS7FRv2G9kEcKh8miSutQi3X6G3gsn8MLJ3BPZ1bT",
  "key12": "2BmrUgZrkfdXwzcMq2bhaCgD7AoGMQgV5m8eNMy3iqMgcXvvb97vw5QYfMK79syrvKbWRVLeVawcvk7figoniSep",
  "key13": "2ACnSgcHSJWtW6UAZSwgjBXoETaF8dwdgkfPf5xxwRowwRHipFEmVrEV2euZt7dyr2tkKxkrrFtcxQTgcL3vAeEw",
  "key14": "31Tdygn16ektYiWfqnCrSCpApq3H8RQtdshDdGuxZbrvh6sotG8QXzqm7Mx1enb8KkZ7Zr3g4XbVCxqaP5ErJrEs",
  "key15": "33Bw18J1VShtEt3pdngkvwS5BF9MZGrYp4evVB8YfDtLKfyWoNzQHwQKdXLb4kpkbz12MEBjLiGj2FYJTXudujsU",
  "key16": "tvR6UHjiwHDjCUPf6MsmsZwbQZjh8s4c1tKknp4EJBeqA4TUmzBVxWomUnJYAHXmp9eGMfyRinmPjmPaELsFjiT",
  "key17": "3npYLd5SNK55a3Pm412iWspgHF8tzxCSsMHDFKBmAejPdiENt5BkAjusHT344f3YtkVrKaQAwjDrqysav8P34zpj",
  "key18": "5PhexVhWzdGQoVJhpmKXWpKs1QhEMBHFf5SvLFXytmpqEFLamEWN4Bat4NtBQ8eK6oy2chKs6xq6WBWWYSJ6139L",
  "key19": "3fpbSVQNgj9cLuWH3kW8hm5DF9ouNmR2XkfA6uxA8mUjSUe3Ax2Yamy1Sks94pBaARiFaQ1fx9Wu8Qc6EWzWTczC",
  "key20": "kVea7jg7TVp1zw7PS8opK6cDwEUkNC5F24xXQry6SRTrEwakJMYvhKM7qRVyx9ofkpDfWAUDEPZWWxodpCq5H98",
  "key21": "4JDTmHXuQcrnAC4vTEbcbZj7MVdreEFiv7TiQ85xVook3y4vtwP8SMbxb1certfDef2ziJXThLtmQV9g4UtNagvJ",
  "key22": "5Hh2MTGMhJNrWKL2h4GEnM8YGvPsRgWUxHvNfiEvf2g6DxTt3BBtow5XhKbwSaU5pKhubZqkmHSSDNHBrgzF6pAA",
  "key23": "2eYwBNX3UV1ZGZRe1KL1MxeAZzZnQPvr82vTseF7LCrwN5xTEziZkq9EDNXKGyJ4kyRUzTCvVTZaSuhTeZguebHw",
  "key24": "5teQopdXgEwrcN15n2quJiSZCr3g3GBhEkgC5DXBgzAsnWNoHHkSJ6HEfN3SndwQMKWsr73jxSVUYdqnNehzAnTD",
  "key25": "3RADpUMSFDyjvSKEHH4tLbxoSFAh2gD1zKQbh2J6dGw3AaN1S7jMKDmyLFPRvaNyjfGJWu3ZMwFWBUVjcdx7qJ6a",
  "key26": "5AwfQ5CW5bQvFGrd94PXeZwFkEMYLhqxH4e1kqRfkktqKtmHE5vEinCXTYMjsgbKXsZcg86VFFrkSGF372nJeT4w",
  "key27": "41kTg1LSe8uJCbY7rYJd9E4LuaD8z2QhYVYXg9ZYroqwY1rFtFPiwabpLgbtuRdwdJb1jNSiUs6CfJddAjoKEELd",
  "key28": "4ySRajE7fnd3xUGHeYeZ4DrosHa56A6LXP9KmHJtNZLLAUYe27FWLuaZnoZs8aeeQWTmGX25bBhNFMg6UhnhybnP",
  "key29": "62byuJYzdRDK5SuQSVbHy6ZZopqPHFwDtqRzCnxpVwKt1nvDuouJFTSwrDihukGFZzUXSHwj9Q61Xtv4kfe8LsQL",
  "key30": "3AjYSqfawn9EtYkEUNTHtNZ1C8ZtqWfAbi4dRQEVhZi1Xo2anKJqXDh7hyTSfY6oMpawVTreeDY17YzuNMtDL5Ns",
  "key31": "3cHta1aAyjnM4R2T8GpBPSktuXb1aWczqhD3Zo8oabYCV2XMCUYVAM7kM6LQmK2sb7M7tao55EFDiEvn4QoXPFcK",
  "key32": "3AqiMqGRjHG33At15kymKEq16Hik2jYx9ofn5orjkHkiQS4vnWUE5VTwZ8ijzbfwXdD23gViGGoeB9qnYmmrMpA1",
  "key33": "4cdvEUefW1PLtfP3KwVD4EqqxSkUcirNkpmnV8FgninBvPsx5qxfzrsYuKKoSswUV1DoH9AYJMs5s5T9Z8F4iuLP",
  "key34": "2rwD75xS4zTT8nVmKKjMdafrCeuDCt8cXoCjPw5YKFNuwaNumvVNnQa1cHSDdUkpKHWV1EBM8iuxgtBSPRBhZTqM",
  "key35": "2P4eeZheRtD38SiJKBYcEJMggFf9Btj9WZ9L9nYD3gGNNvueZF8wEpJBf3e3KzCmom1VJZgWGmHqQqUU8ARKXGEq",
  "key36": "4LNqQvkSRZehT3rYQUu4Nzzbcf7gNt6DcSi3XP7WnqRGaAghcR7dVjPdXVm65Avajcgk4Y8dHEzSq45icCTf3mip",
  "key37": "3vTM7Z6g9fT5XFYg65sYCxD3jH2jdWvFoktJ6kAuSBEVUZjgENrq1ihDotMwpB2SGgHgoZfYtPLbVpwYA38CnGxB"
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
