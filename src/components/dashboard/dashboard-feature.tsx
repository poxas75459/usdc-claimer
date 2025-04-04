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
    "4xixtfwdWRBRqv7ucU2oUjUCCMSPJN7Zp4hTuqTTRSLiHNgWJYsLJH4VSVgego5tRaLcHwPSQPpwaZ1hw5GHUJfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ffocXduWsGZtCCwYkeMZ4RmJhDzy7wr7beoiCMzvJnPk1FuXySpibVSyvKAacdWiUumEmLvh3wjtWSSVeuV1LZA",
  "key1": "36Hu8nF44iPhYTAoQDugLYoi5vAjVkXgoJtoQwJxAJQF44jFzH8TMuS6gaudjExwW7n7jo3MQArkBdzEwNDj6xgt",
  "key2": "2jZbfN6cbAxqeeaV6vwSi4arXnFWLgEvhgxxusgL3TUVVDvukw54Spkqy4CLCcJG7MmesMCWaw8KTmGNKy6TBg2k",
  "key3": "bfUys9rFBByGNXbFF7YuAYrAbyN5VAkCnEPedJcPKDc7QmfB66scokoCiFM1SwTqD4MTsNzyu4fbXa48L4DWDMY",
  "key4": "4LovjXYKzNj7gte8iBYmUdpaBfo4RNgAA5dW3Z9vHHcWqSnM1g1YBfRVLrJeJ8kKDqWnNhQAQwNqw2XdNQnbUubV",
  "key5": "4WMLBXdd7uWhSDMh5hyM2KhAsfm4AQ1FLTcggfC4ojfHNDZt5JoX9RBPcrrrXwWXCMBGpGSJXML4PVzmccFq69WE",
  "key6": "2ktCdhsWocPMt3GRqpbNJwXNMSg6rKVQmiA1Z4qUTk26oeM4zycBVAD7L1qM2P8GC44tXJfASxufV7FchKfETjwu",
  "key7": "5bXiXFDtKSnd5TZYmac28vLGsa4ZRnGj5kACnqQAYh7TLKjmNXoKB5SeCFmDrE29Tb2CEQGyR3KyLZyQCDCaeA8R",
  "key8": "CxBGGJDrXtXGbrEE8QwREsnTRcgRz3ZvkBk2iWVJTsXKoMAsThXb9DcSt3ZrCoMoJFSZ11t3KKD93CY8tKnAYoZ",
  "key9": "3TefvWi3oRFgMU9QG4JmyCWbPRnAvf95Ke1uJhYL4o6CMvrAf6ASemzaF3rkcTdQRGTRnTobD1vnye9Bwq4R7j6U",
  "key10": "3nRDqvsbMH8WPic5cRS5eyeGx1okEEuzWdeoAAVoLPV1CeQSUSUVecqzz1JZxxSNoEDnJCMsCSyGBFJnmT4xiZ7",
  "key11": "2acvByPhHWXdE9zARzUep8agRTq3xAG8GCh7Jhq5QaRGV6U5xP6ypZ4rTQ4uaNoNvtiqVjbRjgtwyQJoMLc62kkb",
  "key12": "5Y5h344ADgv7knVHDfLVndeRBdcesTtjQigZRoLHcP4d5otz9WJS5WipiNWHx3rn8yPW8odnvczP3itaZmBGeEad",
  "key13": "5ASgGBXPtEVXUMSxZHin47fc9mAxQvkPpyTnatdvSin63LLR2wK8REsRon6x43tu24Zh7FY118LpbgGiSTRi5wVz",
  "key14": "BqLBoCmA9jxm2QzRmopaBbDthAxdH6h5S4BYxQVXHTRoMpwWUGxbSLXHGdZsUqHP5fJAZP6krftxs8TD6Tka2VB",
  "key15": "2cCnRidg9YoZmSzT59qRTYfeVRRe2D1fvqkEJxDjw1G6navacMCcRcBMWcTtoEibpHVbHBW7pAUniCeaGoxyNSff",
  "key16": "3ofYzDAZiNvwCgJrC3dmfpL8RdVqYhE53EVLj2QdsMY2fti2qFiAuWvZfWWcRxWtw57SD1KdtjBW9MsFCq7NmceX",
  "key17": "tJLYkdxA7wsmdhmGK5DBc6MLhrcLXrS6TYUE1AG1JSapXtV7sEPGviU2aX1KLapnKzB8THiJ6saD2xHUvzXbaU1",
  "key18": "4KUaPPsb7BDNyKRDFbRxRme2n4K3LvBHEy8rhM3b2zLTfzWPr8pjr7HYNrudDFxxvcyWk9V2hncknjxbcqnupJRA",
  "key19": "2hMkFHp2PE9gkgccnywrDkfAUBWJpUyLb62s2nEqcCLwaaGTk22qpZkT5fPPbioiNsgnfPsUoYj1cb7wkRwVMphK",
  "key20": "3q5zNPjLga21NJsgmVLBCM3B8nMMhgz6SsQLqB78cER28GRdwmuwGzURhzk68P2WLJ8Bwyq3dXPLE1oSa58nuYm",
  "key21": "4pPwYFNP5PwpxefHgtBuXQvccbjjb7s1yfVQ1hDNLurpdMdwk1MdS8b8Di2XdMD7XhjnDZgFDbJ5JcMoFoH7ZptV",
  "key22": "4mys21WkkAgNrjfLsPwGQMr3cpkKPFSyEz88Emfsd7v7gXjbgMbKx5eDNXYFcB1v1xebhpJ1vhzUm9keKT5vUuRt",
  "key23": "HktEUmn2ozuc8cFkoCxdvEG43ojdPxEfERnurCgeMdMesCoNM4RmHMqQWQyasKtqmT8rYi1HX2ekYuV9v2yS4VT",
  "key24": "5tQKMPPSBQDFfW3yoHzbi1SD475cQvxfyNRrCCdPjQV81KteyDNvSobkAtoC65KxTWfaoba8jm93D8qNwTqKv9kQ",
  "key25": "4tvVYpeDixmmF8FEzV17qswvns52462yiLXMzQpF5Q3Zy87M3xo7uk3UrU6MDqQTy18NcZ91CFmARVjUjTUxn51H",
  "key26": "5XXiYUsw3gqmKmZa8YwHQXYTxwRaoTmYez9K9FTHZvJgub2z8Zqm33swq6xorCvQeSEbmxPzn67fb27GAuVVLqT8",
  "key27": "3LPtmxUib4jUpjw77GNpraiAxyMjY9hQsfwoBXdktGTmCmctcMLEyfGprXe1oT8QFZYWjqFw2EZ8PyXBDdxZASJa",
  "key28": "tcm3YVahK2a7KVFGfoVSMk37WkZGDCAGAg69CCw26TRmLZ2YXubNpZGT9jvW9s6n5a2sFJee2GrxVhsDA1mEtVQ",
  "key29": "5weUwTextzZxaj812R1jUUXwpYAgNxumQbkdjub1KZvTZ9cdP9okEHiXeJRkrG8KRFWEDCP53A7NguDtEMLADrs",
  "key30": "2cbKPYHXyQNStKwFgJ7LE28nZQMfuYYqwxaPtVbNhV1S4ZUP9Pc3zN7SH7brSwWfnafr2ebDSi1ERPEKCDZr9mjA",
  "key31": "5rcDMZiX8C1dZ5fL4qcEawi8JRF3xrMWioG4NC9bPvugPYR166Wg9Wps69nN3akiDZcASwranXSmbxq8G3iz7gfm",
  "key32": "5qFG6Ykcpyzw3S6Mka2E9vU5sn1jqWLbtGsm4QPUtMYC3WFswRjrZvtru4tSwoS9jRvCjr5qQzeUum5KxucQj8SY",
  "key33": "4wNnZZ74Lv5vDQPdbNwMGNGQJKRpf3Da5sMfxFAvKyW4r64Xrhcie5Mh5zM5EgY3gogn4yKoFvanEuXyHdXwMfkB",
  "key34": "3xN3BU48nV1LgQ9W4GDF6G4JwRnvirp4hZddX2TgytJfqitTgHg1B3NCJfQqUMG3dWThSiDPDH2vMqK1FfGwgVWe",
  "key35": "5RD1pSfZT2S7XDdZPFTPZYvavkY4BKiif3Gqs3oWiKaqT43SyeW3yd9fAUfeWtQGdLTX4k96yaYecX1EsqfhtUdj",
  "key36": "39a81w8S7u7uqnCuZqwG6WbyAHW7XdyFGxDxmc4xw4tndGZad71gCTLsGf6TzYp3HB3D2irR2Lm8kfaFzMURFiaP",
  "key37": "47nzZ8ifLgntzqq9vSZ69RemNMZ2J3UHCWBnD1UxgF5YzSeb4P7h39YT4mDafuQexN9qe6HxHigSGSorSeRQAKMC"
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
