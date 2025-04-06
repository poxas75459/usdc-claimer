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
    "3uCTR3fH9JLiVVMcSYE19QYDNGrMJ3DXiy5CZaJYiRWghpDBVkzwaSq74b9NqSaV7vm7CAxr4gj6KKoEzkLXe6zy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RmS3fje1uE4fU1vbdesyMERVFQT24iaTZBhcrzGiwW7BRkKFqZgNbDGmRYfgn4tndzg7UR4KMf3Sg7dMZ6BicRf",
  "key1": "4qndH1N8M7ZCBw7fpSUuY3V1QWPDxmSmgMgptpqR3X6oehRAnt9LbxkarQ3ND9XtmjTn2DZHkU6ZPDg4VebAgrLa",
  "key2": "3mK2aRKquwDqQEnPBrGuniDCXh7TqUZiHfEXfF7X9JecZH94g9Y8YFSNwGsMZFuwH9fkp4DYTLdLKy2BtPiu5Dv",
  "key3": "3rBUHpk7mxxN5iFcvmiyHUTgo6enaDn3rBQQouxmYUaj7sL5pdFd4UMBoSo8E6cW8RsX81TWkm13r3GFgm7qPcYG",
  "key4": "5Aq281KuaeSXwb3KSQv14457uzTZbXYG5eiosyXpPgCJCkKEEmG4YRqcsbNq2m85AYrwETAsn3kmraEbsXCVGD8d",
  "key5": "2qhvqqpnEgivZV85ijjzm3AoPKB5R8Wt4hVHfKN8NzuDebtUAjiTHR7o4ThX9eb9WT1nUHrKuxL14wyWXqdAb2yB",
  "key6": "3LScg6SRYtB7J2mgkL741Nk3HcFJjEmPhQFWXDm74sejBRCMVVSpxvF7A8UK8zh3VM7M8FrmyB86QoqtcxMDC7KD",
  "key7": "4MKvu3VmwvSLgytAPXSEVfnmWUHTWnXvvyicFkzafyHDqcbFh3CzdG5g3ZMZXHqWgguLtM7m8KDTgKovnRpKejqx",
  "key8": "2Pq5srp8czKQUgK5x7iVjdZfcFPqdFKiRQ4xAksmYHGPgZVyC2fMy34PPPWYJNyr1rWgAQRqTsCq2et6XK7YBUc8",
  "key9": "2PbkkNyPojNCDMDPuLa3Nnh1XysJpVAoAgGwn74yNaJy6appvPG7JgAZLFg5ddFReXq1yYRWbcm9AHghaLSZ6AjZ",
  "key10": "3rmcriy1pvwL8TAq3eoqxshUt6TXLKD7SjsWkCnD6Fy7Gv5Fd56DKwTiQ6xTEnJXKEArMDwLARyZjCstNL2S3VjH",
  "key11": "3kLBdkpZ8tmAoyRc6CECaMmscGZ9sAyxKPiJEdwVoxLg5Gc44YLPy1GtQBzTDYCKitoctWRiuPk2q7zL2KkLoYLX",
  "key12": "3yzqXKJDSJSesv2xUGJ3axZm5QRrvjqCocqsK6MCdvTdTDpVQmFT8Ft2SYQNQ4RArto5JEw8YMLiRCVDKsuZQGdq",
  "key13": "KWWY8QWjUzoBSzzqhWvGW4cZGJaXJvr3pp4Z5s35DqdYAoAxhTm1AUqrQMy51keNVHX77cfLMoKA9PN99KeGF7k",
  "key14": "3QaaLtBqUfF2J9CZnLrDfNUxGgRjvYYgZthqFc8yMoxq48Jsr6yhHhDaSnMKreA7GXssGvus9fUBbw9rgfDwwWaw",
  "key15": "Q15ukzPTzn7qms5A4QE6usie5YoxQKectWcRecG4xADJvQqtA1nEPoa4PtLEGKqCr9zqYjt2J8Xwfe2URKo9FYX",
  "key16": "2DbZhX5tUNryLBEszz5ggZVsK9r3WbrCwvzQ57SvNxcywVP8UHdsabvxHtuFb1keZUC2P5RmdiXPR4x5HYoMBt4Z",
  "key17": "4PPvnPdmeQwFH3jVXyk6YjVEMV2NB8WPVnsDHcr8ywUkiG3uHNPJHNFd4hBawtD8P2n8mtDxurZiQE6NtEg7PMj5",
  "key18": "2pkRcdzHhYW4z1dixignRAuT76jH7dvSMdoZ9rwZVPCA1LVcFSXRnKnirE9afw9h8b9DfbPV6u3PKCyBT6qptqWV",
  "key19": "2g5CwRz9P18Pv3DcTb7mm97d12A9rHoCLpWmn4ZQHYgRVNzm3HQYkmCUD1ZovqXyhDWyrJZj6AoPUHaU4nLwVw39",
  "key20": "5qpHjirS5MTDvu5Bbkpfq7Uwh3KHoKrBD3NncPYmBYVgDDWBJfEsCs88vH3P89g8LMGvXxcWx6pp7MT1b8z5KEGn",
  "key21": "5xoSrchhadp4yXVgULNSBYBAbVGH6FynJYsrocmRoQMFsiDLTW7Nx2bLcYH2AoTF7BvU2S9QDmXWebniHughUQKs",
  "key22": "FCG8WjjW2RBMoyqinB9kdHkrQsf934jkyL16G1sncrfzoT9vspetQa8Y9PSM2bkxWd37HGPgDGkCtmX8uuVpyXn",
  "key23": "4wuuA6wvnsjErakiWDCGFDYwbEu4LSmBY3aY9jYUPDwBUBK8kF9pAZKDBwsf1377nei4SBJHkdCQes2RHu76Voeo",
  "key24": "2x3eLXmjrrQjCA1nN1ogUBVdT2Eq1pj2EdDyMQTCxPXBxyLdRVezvnHmoQ7B7ifbgyg5W7fZndtzrbw7QXc77kE9",
  "key25": "3szmUhBsEgZaqcLWXGtnPYzFc3Qh8sAAuuFZyV7AdLaqwVz4RCFX3X6V4YVE8qkvB7yR57i5kZE2D6DzU1bqQ1Gk",
  "key26": "4tCdW9ecGe6ENu4QHecWjTkcQEJM4eXWwsss7xBoHu6fR3BmHqudxsAgEzHdVqbV5r87WQ179SaATprQSQjSryEW",
  "key27": "TAT6geXGrrm8vCsZaQrVNWuigRSiGH2CQ9xkxMPbwJ3ztQoseuobBwEXmn86wv9vVK25pTE9FP9L47JLiXrdsJ1",
  "key28": "5rtDkdz1Fc3Ch1wkowUy2gWdBM1XmrXH59p51cvFRdYjw4dJqnUpL5WQPPTF8xiTTyM5maYAMTp9CCqQy4yCJHYf",
  "key29": "53HEtdypWWjHJ2uejzTb865yjUNSZp12DJiLFXzvbWV77L519dfwU2aq1v1o84D6gEbUE1LAqEi9TdNuoNx75LKu",
  "key30": "3LPwLJBcbRPLjM39sR8NVWQ5CKGgjwakXLR18YBzz3KWZET2t7hhrStVhNHwHzjfj1tQRY8yFiCtfZ2Rc5c9EXp5",
  "key31": "4ZX7nr23rVbCzxmrgFLaM9t1AGRtdXHvDQq7zSgfvMY9FMqjrmLdDZMHm9rrfpBkLogfmEfvRjjFCbipRmGWvktV",
  "key32": "2fa2WUHFME2ycYC4fZkcrKrJbauvFnbi3QeEGPWGVkbxXD44XScPec3YFF4Ce9xijiHwQdy6JAyhNfnM991zTwv",
  "key33": "4a589FDXbZjtDN68i8Qiny7eCViKoxoJxAhdeNnrJ5NaybVMVGmxtamf232BrMRaY8hyqQbN9CsuxajvHGXMhirV",
  "key34": "5W3k7QR3DofRtHZPX2CqgrC7L1xvv8A1b2HEXWFtchMhALQaLgk2oizLxorQEH4kMbLRBjWCHdrpcEPaCE4427Jf",
  "key35": "4gK9PBmxhECK352VBuJ3GL1tZhsFedPCh34Wy8Go4feSpmGbCKgwTXgokH5ZqawXAiW3kNmqBKmUKEksRean8vDx",
  "key36": "4xeJ2AneyaReqEUd23Z3RZwX6kvVfBzLiNdL7ShtoiExwuLM2jX1fcU12KahFMbqBA9oe8GbECvfPXf5w3MCv47Y",
  "key37": "5dEKhK2fDsCcAFvNnmFJrLtmuvm6Fm5GdtoF2KszLb1YcePDRe63VKLoskUDF6uVQnqNHfxfekHnCBvevJycQvzV"
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
