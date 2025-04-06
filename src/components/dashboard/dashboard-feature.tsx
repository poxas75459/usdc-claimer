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
    "3QvUMtcC2dkTJnjVQWDFwc63esoBTPMyer8355rT1w8Jo5PhBjq2x4v5inWNr7Bcetpi7wwGdiyYtVJFMnLQWpTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JkQ3qaXE7f7sZbTq7gLcUyQaTiBwU8xN4G8JRRcNYBhxk6aPLYozgT3twV5TprDGaoMAgPoNCcxmLwqsxbgHp3R",
  "key1": "45PswxYrAPsenoJ27HCiLU2zDEGVWKBwdhtUYS2V89RbnY2nbGdETGMhDo4TfYag2qgJE45K5Xd9AutxAo3PpCWQ",
  "key2": "5vjbBSD99KiWYm2MX8MZkdNW4G3uB9c5twF386TmtdaJUnjf8bRDHJMuRoqmyFeexSWGnUkq4pGRDLkomcAa2SRd",
  "key3": "62fpew1X1Xu8qCzSdm5ELosYU5DXEzVgVbcVQdHneEdaYxbBZjJt4UuuQ9RKD8h72aB4ptw4wjwkHyDkQjZN9E8r",
  "key4": "cwMGkrrp7kHzNumx6SgoL32S5ViDhRd9Fp953yNCMVny1T94hUHoy9LrKTTTt8fGxxFfDwhSwUjnFqBEovAK3Hy",
  "key5": "54ktMkL1N4HS3tDy7yPGo1Rf4gawyuXgwMEj5duck5tSTEdw3k3GwZHJAP4iXtz2Bb2u4jzPXUsrD3A7HX6XUcDD",
  "key6": "3MQmqoiYRzQpz1umGvoHQeaVZ36JuvzDax3bhkmGMagP8KmcfUAXK6UHmiAHNMpj2NzDFYtrzZsooqjVyuodLEdg",
  "key7": "8tmjP1XfHD6yfCwz6QaebRHKziHdhZyRNhP7pj8QTSm9dV2aA6VsA68W5YqKv8rqWLGSzJMGaMQ4ZurS9r3ZVsi",
  "key8": "2URGnAw9seXtJ83cv4PLVn9Ba5CochsYubw9uX5ydx2U5PTsKhP6WX8z4envEwF65seR72yx7MCgEYnaHuVEW6yX",
  "key9": "tsrxqLUqUsvJvgwZqPzikGwKQiy5qGdfyMMuwkpmskk3xr6D2scN6CgFpsjkf5vRrWo6vgFS87qMBQkiYaYeX2j",
  "key10": "4vuMcMhNiAiYKbm2xpvdEHtZjdkVhg7kA3whoUxrm7bEyxNKbJypCx44xjYuqZDFLvv6jmvn55XrVHQJBzdCkEG4",
  "key11": "4N3rk5nshiZnj8SviT2xYPH3ubwH37nzWamV4RWt4ekHxpHje8d4xdVC2uz3Rj31dJ9t8Tq3agrJEDHJv2AfdDu2",
  "key12": "4q9ydGVtCdZjk5DDgtPfXgP2L9JemwzKYNvkhBCoe6y7hnuqRXpkhTNo82timp36NfP4HCvQJaiVR5GUxUh2aTx1",
  "key13": "5PdDP7gfUHfUCUxVNtPR4Mhu1xDJ7aYSRdMMKBbKzgRNjmR9zbKZhn7czQ6pPTugK6e16ppekjfoJAQrFtwpfr4Y",
  "key14": "24mFtZfbVXseuq255aBge4oJPEHLDihuqfz6zNEoTJbb8QY4jQeq4VRfgB4B2mUDppJkg6sdAwViYc2jret24wiF",
  "key15": "2mwWENGQzhhCoSQcpW9EyLPk5twiUDFbwkag4mqiajPMpdyFa4FWFPxUNnhKfHpa48sHGy1CPttcWAbCyhDsxK24",
  "key16": "3NWaLn2v5a6T2jxGw3maCB46oAFa9MwCDy4GrjD5tbn4dFi5tfMNEQTu1k18r95WTPVeJFarc6Z1RGiswYmnjy4H",
  "key17": "2xrC1uqsjtknbypAmAWnswm3v8m51hbo3z8fHEYFx11g295zHxr3heishg2rfvssjwprRkKavxdNb1AyvX2BYX9N",
  "key18": "4tJNSAg37n76HLU5V6LBfQcCUPyriLoscrzr2qBSGmg2FSpiRVFaBfsJHVMw643GqMf2QVBR1mb21EsxxPcRJL4Y",
  "key19": "gPDTPp4F9AEAUq6VSaqVKwayPcUvxXZwJNQBgs86aKtsaXsmRxa3dDBuzdEDYevuFrh6m6Zd8CahG9iZcodyAaQ",
  "key20": "3vs5NsewvVst5y3CikrtKWs6Rc57rF1Fs7tcW22cCAamBCbkqCrursnu2fbrz3KZzhei7qbkpguquSJkLGpMdQAW",
  "key21": "2xhogQiEE8j7gNJLDX1xGZikqhsmpR8URYcAYNw3nz4CFpsMCoFBir1VDW4dD3gAjubFPyi9a8d2BJfVQ7hcPgW",
  "key22": "4wWfSHKRoo5dyirSduLfWPxGHqwVoTBXnJCw8Put9ByhcSRp6W7b1J432szxXboXMS38fForecq8WFHp5vRs5Yhr",
  "key23": "24SUtWtethMaghaYhGTxgSnf6ZyLrfgSQH6NQUqeTMB8EWSXr9ovNvXDNiyTGcAWn5pAP9pqQxVAnLfZuvkgyUpW",
  "key24": "63UazcXnRTBRQvSKNh5MZBBuwegP2Lnbh47icAwkhKzLLxpB11EnbDQJBJgqCUUYqWgwx27Xj6wwxXyZWUcjSovn",
  "key25": "4ziVkNShWhwRxGT15hKwnNqguSadHwsXh6CNEvicqeYRAw4RfoVNMzWVjM8E7eoaUQejTWkizkkWqcdVsyhjnRJf",
  "key26": "Mbi7SJWgH2cQTq9J7eYhpxXyJasGP3YmM9nmzB2ZAYhLSenBS2ENtqtEnPUDKbM3YjccnpDvMzdCBmZ1nbR24QX",
  "key27": "664Q9yb9TAejqYtys1hSg7iCrBNYT55w7PWMKUjdR5Fkx6GLZUBtLZCe8mzmXBwfj1NjN8N6THF1z76gD7WMmU1E",
  "key28": "4rXzpwkDwB7UD52jpQvevuCq1AD6jt5xhy3resrZhwQAJS5tGLB3hFS14JvRC7x92aegXk6NeyN2bTkUab1Lg2LW",
  "key29": "FsGAoepecC9SGrPKg3WrBJT5tMnMwuu95Muhf7FT1PiPpBmb9Jocnkg5JFV6FyVGfR2ZqFuXF5xi8HS3to2sxJS",
  "key30": "65XBGTo4A7TpYv6iALq7Qww347Kgn7R4F4vUCHVzHCnoxuA1sWYtkbyU6ngjbaSuCutDMRiF6nYah2nHXLGn4eVL",
  "key31": "3eJU7zcLzcREH7JJZvpjSxbh5vhRAB4sKXRtuKeCjEVqJY8m6M55FVdoG1pNWd8MfbxKrUQ3Emc3CaGi7AwMZ3gS",
  "key32": "2ygTCPyKGUoBfNX8nAkft41Qc2P6vSMQoczpYJ1haJW1HetotviWqGBpsJJU6p2HgBQNqHzdH5qW589PfUYgP3zN",
  "key33": "pyohgFgXPL8C2fLraNuTEMFfHYaJRpou3qk2qq8wRsNsoucdT7to594wqeqNpheteVvYi2kgmK8DM2KbuvhPuCJ",
  "key34": "4sRfb1t27PibT2DcycHtuZZhejzbSKb75ZMNthFwb5QcRtouqa89yBz4dGVxnDvMGPzXA3DPVmacwx4L7jPw28Gj",
  "key35": "5c3eVgXPPKdU6zWHuD461jVnvABFQLFRU4jXFPjzU3UZSt5HqUvrr8juf2WAwYXiKyFQqgGdZk2LZnZhjtu2WaCp",
  "key36": "5ugud8FAUKgDb9e5AkWApr5S4rfh8bfvRHPFRktcLb9Wfosy9oRqZqGgsHyTguekjSRB8YNTWg3uPQ5RQnSdrpSa",
  "key37": "5EegLPfqCETC57HYTnntg2ctQqvjpm9pWstyzmneerRDp3MwqP1Qiu7T6Yt2Fjzs7qVKTggK1oFcL5WSfCp52JjE",
  "key38": "2WseUDeQAkaB6sypoCYxytkKJXeeAUwgZqDLxeuz7568bCqeZnAYcfqcP7bXti3br6nEq9f2zzbE28rrrpZUPku8",
  "key39": "4VQQerg3uVW17ZKwTXaQbR41SaDWa4FR6assXG6dTXttoFhGy2U7GoUbwkKTKqHMbsU5Bix6GTbKovQ4BjPaEmci"
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
