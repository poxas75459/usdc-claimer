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
    "5jjPub5asbu6hhBvLRn3aHKVr2zKP4uSfDuprD8wh1EXwhT6FFLjJJotSDKYsiYNkhYomwnAKGMtRwNU3RYJQNmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AbBtssmaNmGVJDGyRTwTgvCXYtgyEkZLoYUNtGXQTsQVJUdC2deGrmgh9wX2bBQi7EZzFxuyNtt5sRDRkWJswCf",
  "key1": "4robJUQVZjRZesX11o98J4fSKrwPp7SPJy7grTS44mVzVg5s5QnJKa8FQo37umxdHtLaCgaWthmEUYmrEZkSojA3",
  "key2": "MjYdkcTLxRU96RhS4xUnb4z6LdMpLY3oweksW3qBJ5yVenYPNdv8gu89LD41uHRcstMj7pUTfGJ8d1m4yW16D81",
  "key3": "4hj3eGWtpsgi82pMfxU28BkR87gRpapqH7fakbqFTzDRw9h1d8BbePtPdGWHjWwwyEcpNfWUwftAm2SqbrGCUGZk",
  "key4": "3Fh9FMKwh3r7TM5SJeHR81Ej9Bs4hwaSnpUrDTwbT9Zx6Nvq5itAugi5Dp7ZiioG2WJfMrBgt89ZYy79NEhKXUC3",
  "key5": "V21UamgY31vuVRCeNqcMHD6qaFBpo6MPoNYMcGW7rUtLJEDd38JqCcMpphiyBmFSHAuc6bRz8n9T1aVP2jXxGno",
  "key6": "4o5pYoWtaQkG5vG26NNGVXfnzcJmF3fxKtW4ifiRsTGaUZTxfpupQTw1jMYDizB5xwkhWvXoUD6tyXMqcVgWsXcQ",
  "key7": "2cyCAJhk3h5eDaAsY8MAPNAdf9XeCkf6KRa4m6qB5ATMyyEozGDaD1kPhMRD4tx189BdrsS7RuPTAJu8j4yWAqtT",
  "key8": "5uXdnL8oekNreJXGdcXo273NE3VQmT5APTnBynKA4c6AfjRjKx6x9ox1LzkhGToY6pp3Syk3L2J28HMWeqfZfDry",
  "key9": "475vTLqZX6vS23UzsDJbCXjVgSVLQu1GPC3f6PvCRhxyMzZuktNHBKUqPuwBwk76oQWkic5FoH4dPFXFtzHwUgSo",
  "key10": "4zmrYhmnVtuvUA5DsiKDKpAnzCBbUF4AuhXAdPgmvGvAeyTSuAzNKLaBnz4bSAaLTESLy6ZCbnLGv1NjTBBy9yCn",
  "key11": "5RvsW9f5mVu42s6BpWJEnFH523goPhdxZeEe7zW1aArjD3NXCGRLd97FgcKoBEKXoim88DbVdux4Fc3ard3YxSxi",
  "key12": "5VDvTha2dieMrDFZFHw4HmW88xMqh5R3MTh6QrGhakFRtXMi31EUyF7MKxb3tni5kSGQif6k2k8Eb9ZrbFimUqro",
  "key13": "4jDNzvtZpQZRfgtL4x87pSrbn31ikv2qLQDEDxZv2Sd5XHSrSm5ozESoZwNabrqsTd5hMWfPKNwP6GppuXqiv9gD",
  "key14": "28CHizni66brQ6WreHnGePfKFsnkMyZ1yqtF72T73oxYzv2MAMwGiJonAu3dcbg8So8kvaD2pStJHFgYbDRcSz84",
  "key15": "3h3wbthtPeLWKqRCuC9brk9kWLDpALnZZCYG3hR2UYEVFKuSSRsN8iw189KxDQPPq9D6XwAFQ3eqFNHM2kqfpfSC",
  "key16": "5YTvdJfNuhUoctcHN1tUPE5FAUDoPa5oF2N49Udvuc3f1WsmNbJjvKbMquXFBFbugCJzG9tf9wkWjX2DNW93kHx2",
  "key17": "2eZbwM8gwxgqrieDSsZKJNpvhKftZwmKxXj8XEDep9YALbNoGjy9D9ST3GnrYNCLZ8VgVXhXgvEstXc1QjzPSfoC",
  "key18": "MQthoyKziAP7sTgitTDFCnCBxty1eUHMtZZScjPU8rMSDuxeGtXscezsGbNd5iyBhJvzafJd6Ldf4ZxTA7LWdQ8",
  "key19": "5A3duVY7PonD4AUA5ym2ekG6YGArK5fHsfXaGZwcSgVcpYkCcaKQyFYNfMpZ5vz1eoRwyMkSViPv6G6zd2WQtSf6",
  "key20": "ctKi5juPLgywxoDa3tw9sFw1dxKgwtWNakZigpn9kPVgQj5cue96xHQjEz7U3RYqSCUqwMNQurzA2y7vP18TzUq",
  "key21": "4uLSzhv1n6qo4Adenmv72M29occDs5Sgz2RcZQyjuKLewJ3kEs12YJrLRBbN67pAFsexbeqrN86T9sAC3UA2dx12",
  "key22": "5BcTgLX735NVvoBsU4FA8LVj6pWB1jhsqegktdTfNaMnRPhhJrHpvtL4KWhGAtNQHVnxsnbAAsr6imyDz4JNBasM",
  "key23": "64MmzdMNZg2VgcBNMNKJSvN7C6B7rQ5ZxAD2m3QYtLdq45Erb5P1Ee9xGuNP575BhtkhmMcAgbJ33kW69n6nSxpV",
  "key24": "3LDBLQWusPaPVh6qU2wx26mZHkN9JbJcp2DaRf2AoRUSdvpyJxaL1UJfBawsk8NiULoqkw7wwxmhKFgEd3JsL7Uy",
  "key25": "5JyMweDwjJN2dP8qREa8YoARxZVbGsVVkEH3tGC5LC4soTfNRBkFkGwwwpEEGiRXz3HwwCHH35AAj14L9GVophhD",
  "key26": "3PBckbtWM925oQJUmaYS3RhV1QjfwzUhwKTAyvNZgDTR9qWCMHpJbs5xGiNmkeCNSHLVPKVbzV9ibbLyigHCVcvS",
  "key27": "B4EfFaRMM1MhcQ8RAs3frX5Efjwnwf6s7YkvFdo9CTzAxRQsGA54kYsqgMaqnQVmEk6UPJQBE6qECm4PGe83Fpu",
  "key28": "2wDb2bgQutALY6MR1f3cpA3AWmwD4t1Wr8hLkMi4qeDdsvbsLFEKiwQ8fsVNqBXRGQ3so4k2p9wCL2hto4zagoAR",
  "key29": "5m9Kwsh1te3akdKUTdaBGouePRVkackJuKH6nN8oB3vLjdC3MoTDYPEKYXMGr1Bca18Qtx36zknsPcRFLRCsKCcp",
  "key30": "3HxmGsn5A63ocJri3M7VdyrkbCMgYMGcu23a4w4hJUN9cXCwAQcDJAKguFFzy9o2FjrqmViyM22evBximDyjBgR7",
  "key31": "4LeUbDdBPMC3DKbujVWTkmnKjSx2waxZ2aFru8tZiS3bqbJFcYtCPUpxgC7TuEyS3zH7ghV2pmzb1Mwk9bqSqXUN",
  "key32": "37YJQxmjebViWUtq6g9zKDfBohuz5KjYiYVDxLUcKrWnrNbksp2yX696MukAV2pYAph4z6baYe3oxQqqfCk8DoRi",
  "key33": "3adKUvsJvgcqnjiuJXzLam5Jrh57wfRqMMHY8MVZnjJpbniiYVwtsZXfVbNBbWjEjRfQQna3WUdWG77rRqGskX6k",
  "key34": "kfRR5rhJ897k75CwmSKBtLXE2dotpgE7qrZgjpRa1a8QTfEqpNVSMZGpTMRakaUMShfAEpEXRV1ruTtFe18JCvi",
  "key35": "5TLCC835eZJawG4CASCx4CBBT5CqM2WghubXxK1hfqsUNEQXJSHR2o4o3MPd9bhiwoQbuHYYKwGv2BM13ZAw3e71",
  "key36": "5yHzRSLVwVu8u9zyJgNVw1cva8Xd4ymta6TwWMocMXmqiBigXKRkU7dfuFHLiDHoU94m9gDd26HArLggg4JK1eUV",
  "key37": "5LiqTfPMmk8JVKWuwjMrAfzdSGUQ5MwRHpGeh1oiNn9jTUbW2Q1smim9y7mHdhHFffZMP9wzv7ChdyWPMLGFHTK8"
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
