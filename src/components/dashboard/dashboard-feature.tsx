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
    "9jDANdBc1f9UbyocnATrvf2y96p1q5Zp76sLUiBjU6XUzybvTrDVexdRrKz9zhXBfAz2f9LYqCurK8qTGYYnGrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YB8JnBqM5RyRNGvpo4hdKHe1arBT1tvJix6NbuBTsFG3mNog2xGTsrigr83AKrzQTY8CJzx2CdXxLqL8QGdAbUa",
  "key1": "xDAY4ccAFVAaFia9u8WhtqmcVsyn4RcCJ4mo8Vh51kfxMnf7RP99qpn5Z7jPX6Z4sSoJTgbxGUAziwdX4UKzaqF",
  "key2": "4ZkBCE8PJeuTN4pD4RJR6bprM9yR8BUWLUBtQuVC3771xov98KEN6rx9F4XTaZzSBAufG1S6WbQtyRfnk9jpK7oV",
  "key3": "W3brvTCWDDagTtiAF16tSFqEThg6DuA6ju9k5vbEgoUfA9EJZrrX9SzME9hDJBjpEQdBKcff49rWHv49byK2RPA",
  "key4": "5enAXcGMvBKUybupz3HkjcsuTqKQn6XLioYNxB7Khfoy68JoABSh4wQqJXMT9aHnP5kDrfYYeLNDEE87QNM4DfVd",
  "key5": "sz9YjpuHXuGNfBWNKKzan4srvniVe9kmVF8t7shWwQAhxgYFbwCtjitiYwEBGgqpDTWCNmj559mpPUsJSbqVdc2",
  "key6": "4ZR4g6dLUji5RcZMLmcEg3Yu9YL2P4di3RDnQ8SV4b72PZPdXa635uEFFacg93YAFDQaHkMX6U6HPrTE9FHHPxnh",
  "key7": "65Y1a4UfK1vSt7PuNAMAD5Uy8AbuwwhT3x1p6bHsAR2qe7PzxmjzV8yZtEaHMZXyc8TZg2Vh9oQ6idvZ2azT1TM9",
  "key8": "xsX7y6nwSoStZaX6twZjgQ7nr1TTQgQjf5tpX9vTYbS6tFb2enms4GFqQe6VmCz74Pog9V5qvZ5XT8MeaT2aBmu",
  "key9": "3qe7968TzcXT7QQrHq9vroUn3zV7FUp88iLjt9RRpHv63FJGqen83cfFqk1xdiYMbc1jSY22DQZd3Y8GD5c7YVEd",
  "key10": "2SSYfaez7nfUjNbxzoQXqveB5Y8riQ33nFLpTcPe9BsqEezjd5fLzMN2D5QRQUPtjvD6PndNrwdeFw8VRJL8s6RG",
  "key11": "5FUv3uAuoAjx9SXz7GNMEwEAX1kGrCsDtxgLtFb2nmMLEzg6XzfjMRpwYd6XBpmbpmmgLsT7Cv7gWB5C5bQqw8V2",
  "key12": "3ez3XWkgbUPguSFWPdjWGH9r1NmSr5uriUZ88Ebv5THW9iwpNcLNRuVbostvn6Lf5opPg4xFNL9UutjS4PRkEE4N",
  "key13": "2GsMeoEg7eyrH3HAT6Hc9BVwSMb4NGa1ibWfrC93r7nNhyZrVQCjSKTKLCR63QmduvJtHhP1GvvRmdt9Q2v39cKi",
  "key14": "4sMigArmiEQk7ukGwBpMibRPSX7HzSiLmo1GwjYLWfwPkTRghgLahbYthZ4DardvF4oixyvHUmvPbZqQXBfWgXxv",
  "key15": "2owHsUTDydiBzWy2phcXb5QjP957MtWsAdT3bBKrCtdxreFe1KB71A1sUyiabuVmarFNXvV7tjx9NfxfESuW9Jtw",
  "key16": "4DhP3NKcSiPNa19f7RvvEV5fFzmXMxzjNjqwV7xF1KBxTKhW9RtpuKT1W9WY6BFCVbZ3daZzH3ofqJkiYqNujSt3",
  "key17": "37NWfS2ShQyeTYYEyaohpPqTguXFwHUdk9C2F6NtZ33ut3jHzDDYM8dwFP7BuPdadYnxnArC9Y9qYobwwUShWhTn",
  "key18": "3fiR2tTnW2Bc84gsUDTzJQFsDw4xBAS2NwsZZRRfqpPYGBFbRpnCRzcvXY8ZJEiR5tELjkrio9n13MsZJQqKYo9C",
  "key19": "3twttsZMA45LLodY9fDT4YZ8ySrjsmqcxuof8GgPkoWxLkiuv5HATKCAkyBmELXQZaiYerpw5sDEFK3YkJQ7xHhq",
  "key20": "2msjF8keq3HUGMDDDxrtf7RHCLr1EbbJDV9FNPdnLBwc5D8nViUrVQDFU4eYnic4SnefiVuC882XkRjQBWhvXQ4L",
  "key21": "5CT2wHjurTDfnCb2BWPWPzqKEvkXeFiAp5dpMjedzsRwP2qAA2vCogtKyHa4fJXyATpwevKEofYcHpi8mu2mbwmz",
  "key22": "3Smk1Y8X6FRhWj8bExFq7M764vnTejp16Wxgso8immEDiM1bG7n191fp6zHRyGuxof5ZYBN1K4B5jrTBvTk7NQ7t",
  "key23": "3rW9zDxhH88AZDHkcngi1rtAyUQGaXAGQTwj9pxGnsYeZH3gyiNj39u4VowVYDjQurCcBZJBLzpiuvWEfbXzrBen",
  "key24": "48MbMNfEC7sUShfz8EQXFqakA4Mkq5rJEhX78LuVQC9c6p6rKPEBoYwNNgnxPcqNWqYHXEbKV166L1XasVKi2BHt",
  "key25": "2vjiKiDjxjj2Ums8B4NnWd56co2TyHrhYR8D65FsJkpLJMUN7uB3Ghp4exiaP5kmerVu5wbsDmanZNHXNWxvR7cz",
  "key26": "473FhTJq1jwSeEuqWdCXSxSKFk5cPSFp8X2esUQSnnc3m87dNH7a8U5DEWAx23ehjSLxCZwKCt8fcde7n8aCNfWf",
  "key27": "5WLyXE7wh4UyVBRCfcK2vz19D9urdGSdQwpVXvg7X7pwmZrK8wWtXkDy2cFGke3JUA2wD44qKmY9Qn6reWvuxM4P",
  "key28": "5WidDjw4fS2NoFa3A6oxRok3TMbPt7YoyuBkvErAfPEi4cKViCSvzFhuYGxqRyQ4f2ffxTJFPoVN9zV7AvtiTnFS",
  "key29": "4tcakUD7RywnZNRKuMTYa6zSvVDgdob7S1x5NkjNE1pNX5LDnZQzFoeU7BTxwQDEYuYqPWMHCLS67o2QsepTs28v",
  "key30": "2hhnKrLfun6J1ePvuvKrBtFRiHseXmwRXwyqBcvShJ5Dt9RyS28R7hbPGNPwbRce5SRuC8x6yqLAZHXdFF98LupK",
  "key31": "3aAbQFRJT5qSpfEYQobp21dENbFmsDR3i8ai2H6Mvf2MQ5vP3byc89cNdX5g6py983RcVRLfnrjRyK5cQBwfq86g",
  "key32": "J11MVZsnAmh2DMLf3Br4cUPfpALJpJ7hMo92wGA67PEqJA2yMdjseTs8RzkscXns2zHSwpsqrfK6smhM3N73Rm6"
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
