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
    "2yiABSw5b5ycD5wbo4dk8ykwQcbkUJY386ZVn8ngb6psfKMe61oigAuZ6RueCgYSGuGEQdvQQ1XeqmgkJARd8itF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yhiiZAPrr64mq3FFHLPUTVgx3RaJnC4EM8K25zZykMey9xdqkKoqxjgZDm5CJ1sxY5C8xhKz5Wzb3F6yhojSTry",
  "key1": "3q8ediNn9MYZsLuo4kaqas3bmUsuH51PVypofSn7mp7NpV5h9ibkrzGF13wLij4JEemrG2v9qMRSEhPPhwtPMT3R",
  "key2": "3sCDBUH8MoD18PuujTAiJDshBknh4Ve4Yw56u4Tatv5LPd7Hng9rdqkEUMbaKHaGe2UciXGpQvQK3ERtXyn4ebqr",
  "key3": "KkeEpWtnqugEJVPieNozEg5DXP4CdpHA6uQ31g5UEGiobFTHqyTyTuEhtyy75HvZDHBSoC6EEzqWHkdK1jwqu5K",
  "key4": "4CC6UPvwhoDuWsoFakat3vNG5jNVwdZU8wGSvaE9ZzXPBNHSdsoM678Fr5quJzV9zRcNEpVLsHq95oAeRunWhzQy",
  "key5": "3qw34w8mADuu1g2c83GgTVif3Yc4peikqh11Nz2vYvMSsV7JGPeockAx6se5MqC4iB9WiowFLAdGzjy2p41dDVU2",
  "key6": "7Yhk4YoD4nLF3PLxhHcFQcYk4nTd7jEJve7ogEDXFPXPE8SraVtw1rDUi9zFx81oB9iTYWR2QZoJyPLncs66GKb",
  "key7": "3vNtYUkcFxzhyq2jZBcCSR2PpusmKe4VUr42p9eqtutPzJ3m89pviFgp3xuC4gfmhRQFWbV17EpmE6cHUQXb8o6m",
  "key8": "pcrNrRnXCQoC5K3dXwa86qE4Q5PramQaoGNfwP39ze3zpGBb24tzi76Qs7u3wuNbxAJUayeM1WZoV6vgf9efyne",
  "key9": "2nYcbJB5bVod2jxWaecKdz4KXCeyHb7y3tVT1j4WYVPsRpk69twkvbG952VB4BjQSZMXEpY4JMNaUAv3bqt2igrk",
  "key10": "2Uk3Gga1bLWELGMG8BS4aaM3VazZx1wDYG3jdPGC3CvKGTfhSDRVJCTcjeJ5onfiQzMKanAsaVSaRdwkwokLcz55",
  "key11": "4Faos81F9HAvCZ7Anq7A4bhatwqhiy6py2RY3QYTRdxWPm1pVz2LQsfBS1uQdY3tQgmvTSdA89569ugqWqUBr28Z",
  "key12": "sL3M5vknJJXp6FxX92iaqU6pqk63Lkc9kuP8h4uEkg6kdsYoW5EQjkin3CocE78f9DjsnNDDyj2kDX4MU6qqLbS",
  "key13": "2t3AWm23ZCZ6tcVKtx7XgrEFsomYLicBPtqU3M3y9zaiPR7kYaCrbwMT2LPt5w6JRwdt2fjcTxuHGZygsfEDYNxx",
  "key14": "JY2nym8Y5xN2d73fPDgTyXotYsPd8uNecR69Zi6gFA4BgtpDWCWSW7SbtZwBX976ePkQBFY9GH9DFcsQBsvMwvt",
  "key15": "FERwy3AhWbQybpHJHRebCo9psFxjgPQmFW2i6XCtiFoJXAr2QxjrWcG284QmhfCm53PsbN8a1wARNuLbJ2dQwma",
  "key16": "QBPtiGLroHKNLwY57w9AEhBf14mfAr4ow4sZepYFQ3kcfsUUTyQLpGjdEQS3NTpBCFGC6LZRG7HfJ6y74CJHUZS",
  "key17": "G7pZf4FEwH7hqP59iR6PeGJVKPJZTmf84VKXpy8uE6gqMYPiYcySif3fbFk9KEhqPjWez9xLsGLZoHELhN7rJbK",
  "key18": "2weWZvdXy6ujxKLWHrGQdose61vtki8wyhL6vwmin3QDzXxJQ3mYsoQAFevNJvVh12VvMqo2f3yLP1XeChSndLgF",
  "key19": "pcgMocYGfFDKFfV6BKCitiQmtgdKgAQs4es4ywVtKaf9X5A3pMgdymtJtKSf2EwAUArmpbHLCXU7nHMoCm22GvK",
  "key20": "3yWyuejyptwH2PyE4iRW1ZGsBpCQZxrfLCSrDpiBS4ca6EGZ3Z7am1n1KdoWuc799HK6dLujTba1JDUVMM95xgFc",
  "key21": "47Kc1rB6n8uMBfaeg5PkgPhCw1rhkVJ8cx4nmrUeuc5kPndoFia8RtLa9Nst4aXDQcAUHk7AQ3vswB3HkfQrjoJG",
  "key22": "DpFyGM5y21ckQFrwi2H1HpRG6F559CP7ukXfWYj3XvzZ7svJSo8MVS8fVYoSV2JNBbpjfdzjGGs9VNhHRwvktz9",
  "key23": "2kibmADun18tYRQU1RB1AKxhhNWcZq7sZj7rzDJ5npANSGaj4m5XjDsPxadBCCS8YdJU9tTpEQZ9BMeTV9X5eTZh",
  "key24": "3h8HnYuF8hPjNYehuF7CUgLBRyimm1KmqwvCGvLxs6cE9TxrK2njKhFQmciXCVzjbBModm6y9mSDxz14G6Ffrjqw",
  "key25": "5ahks7784pUnxoMG1RPSHFrSXfYqVj5y9goBVpxcKHYq6KhEEzvV9NLM36KPDfW99Ma1DCktzxdFoQE59L59c2Hr",
  "key26": "4NJf7492F9kHEN2iuGSaocnaR4nZN6kwqcCHxtpDNfjepAqQvsCrHgpr9J7iFeMJ22YAjTWXH94UUYvgWfetyJhU",
  "key27": "4jNZomsPKd6Rk1sfQUPp9rxd2zUqcZkto6uSjEaSAd4RR7DeH3zrF4pSJQZZifb5bgPuRhjZPsHdaNLf9RqmXySH",
  "key28": "58dazNrewMqQKhXHY73d3hzbEdt3rSo1e9Shsxu6Ya6A19nG44PiV3SHRtUjQPKg5fYjuvLws63M2t7EKHUHKiny"
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
