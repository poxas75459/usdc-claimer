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
    "2meFBdxwtCKX16bbwEPb5Xoajc7J6vh17sctH5YTtaYcrwCPDjaPuKYn3xv1LKGdhnuZ5q9jTvactNQkhq1mRCun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UjE1Nw1pvybd7yuWAuyi3mNJrW3S9a5kxBKsq2S8HjYn9TqSGxp6taGmjKYrY82jHzGZXSwYxvm41Bx3c3uAk19",
  "key1": "3pyF8EG7LsrjJ3CU2NQ4w7jtqMMQtzVjoZzTaxpbXnUMZNADaEgfxDReYmxXDaowMTiVBKeUSLrfTBe3TdaTrCkA",
  "key2": "63K5owHhja6X3HJHnRDsYHbSvGY8yGFShVZ8pTAi8s32YRNHQe4VwdzvJZLXU9LGWTAMzghFa2zoq5vdGsWmxwbn",
  "key3": "3NuehQEckHVMmzsXEDWuu66qmbxH6njVifCGkn2hpk8jt2k4a4VdBwNTmdPrLb4U53XgVV1jwArH7xdgc73F85m8",
  "key4": "KWaH2u335RhhuGmW5Fbq71dBm8G67HKth44bRtuLXRu6tBjfACg7HjCdvi8J38RzctTG3iFaQ9nTbHJVjYVjgeh",
  "key5": "3Xw86y7FwMUfUYqGHA9pB8NwH2aBC2WdUf9d2oKvWWvSYqFHrNeuQ2tZB4CZ2ZJNKN7qq7k3oCf6VAohyaTAwPXV",
  "key6": "Zqc6pWfxJo59KhbwQY2SMsVTX4YrN4iuGa2MBYRB6gsMmCtpnipcWSyDzSMWMZZAWvLc8uSLxk4Z4huM2ZiiEwP",
  "key7": "2cMbhZGfqTqf3MpZ4sc9WE4ihH6TepvmQn1NAJA2Z5o6ZMqSNVgzptR6BjFk3kt35q7aEpRNrDZqD5frGmGrJaFP",
  "key8": "5RbFEnVmpZbrpeW6X3AwBJuG8YNh8Anx8HjRA8V7KugidLcmHUqLK8Cme6ucuEG3DNKXR8ZMC867ELiyhubwkSXh",
  "key9": "3qsD7PFcTtU16Rmic3UnTytoSgm3SXtsKTrQCV1k8rqvHyHFno194DgUMjuBxvtucNQoEwNWHcUyJfhY9uEHmHQF",
  "key10": "4PGpeMHen1AC3C4F5AcMt56aFEjPVWzGxsJqNsaYdxgpqR1x7yHUNN42rkXyc7ew3bUyBpPaS8t83QB6KjnWu9dt",
  "key11": "3b4CnnWrfLS3euz9WoPWifrhqSAxhFfVNjQCzxaBAL7RAocfjHEWZFv5QHBniHSt22qMezTsNQqVXMdiceLoX4HF",
  "key12": "4QZFqC4y7p2dByJfnJJ4A1ZJ3JnTUu2sDJMyu6dnM7d6eHEDYf5A5kR2ZVhrh1YrafmsXFAAqyqxkwZznVdZVcQ4",
  "key13": "4xMmBjmUqEd1tJ2nohXrukUPa3tKQdztFPbVCe4CL6jkFxnyWZp2RbCF3Q8oiam4FiU4aBpaeBnegHu4qZrxRxWq",
  "key14": "5uC2SEtUsLDZm6pwBzX9xEFdDaiXXXT3kHigVVMKhrNdchZ37ocn9gpsHZnQXY1p8fbWGos9FXagH6TouG3EtYwm",
  "key15": "3hLYoa4rGUbs4HjeqAaikx2zi7dpkfLCSVGewmmPVJaZwM2HtxcvmdTKd5enbeFVgnYYkaPKPvx9QPq5xrHqgQaQ",
  "key16": "3RJitiBH2sukUqTMPUVCjanjMH7xGymKdD4DxzeEfmGiWJ7Jadci9Bt2fKf1HXVbAEfVB5VMWfUbTyniMHq729n5",
  "key17": "26r1381Kmm5oUsR2ig26tJNPaZwMGfzgcRiE5bVgKxU2RpFjXbWmjVaCPUvZsHjorhbgbTfWkdJf2v5Sih4Ntd5T",
  "key18": "2iKiopkjHoNoxFgXNp2aKJcRF496xu8JgZTCejy7EVdZXUSKBLg71u7W6eiNcHiSeuK4mZ11mUpu2AhpCr9XNCCe",
  "key19": "3B8XA4tMCTLavV1KJVQrSx6ZohxmDGexY2MM9145jhb5mueD3hLjcjqqWWWeN48WmikT53xadtwjSQNrqpUbqReF",
  "key20": "32D3mVW7Xs29nWVc4khtKR3hBsfWM1yTnSCjrxnnABdmC8NshzXF2qquvJHZyrrf1Sa8BBxd7pEein7yp5Z2Tyt8",
  "key21": "33CNpawCyo77JHBgPHgHoeqXLohmGHrmQYYXwG3aYMbPGZve5UAfmJJSqmDMeZu36sdcRUHmhueESfDvZAYhAg46",
  "key22": "5ce3fgYnnKTyq7F3hMP3bUuGfRsinmMneHdBxbPxeLkCgUCPb22CrDdGXJ15NfYkduq6maFB2UPrLFr2MKB5Gim2",
  "key23": "4bqxnACKsGBw1hA9qt9YmgFVkAU6qsgpgvwt4WqGGyZtBpVYCXLoFX32pLNoHS2PDs53vqWEN1A5AzJy8d6JKmb",
  "key24": "DeL23C3fow7A9wcJf7Sk4D4ooEk6sGBuTWQ2EQJXjf2K7twA2uiiSA2hZXz9Va2nHKnjzbSeDSXRww64tWx2BPF",
  "key25": "5JkEFspQBGkCJiEAWz8PhEh6gXaJyMgtTepWcpyjpbUuJqLHExgjJ3tdFj4xQp13PMjJqN3LdQYJ8b7hRpPnrbcH",
  "key26": "3dqXiGqi87ndrzgnCX9UMn4RKKosniViHGL3L1ogUgedx4vb6XqHkMmFzay8BmfSnLgzYs7in7m9Hj48bAX9Q6dU",
  "key27": "4hs4yozTNgGBh5V19We9kqQ1mmdHCE1iwGU3MHx1n9C6YZZCzzMkj4EAN4YfMNpxDED8o8pNYFMGQCxs4pGpcDvU",
  "key28": "3W9u5g2PkG1Ccb4qMD7VjUrgSYGqndRXi2wkTNkNoNoGbBDoUsZd4b9JMLY2iexpmiz2gqCZowdWgKhazumvGEBC",
  "key29": "DZbNwYsx2EcSAjV7P3KPSWeB785sdCLbvjt1tUvkJCeeboeVerMM9pjmWG6BgmnhyM2YbbxW4G6r7WWbrY45R9s",
  "key30": "5vbFgTzccGfJd6zvDZx4Rwy5kZ2hZjCFdLnCvggTgAP3936d4UQ27hgxJcbgtihMFcB9USo4DB5e19B4UWMxHjkt",
  "key31": "5xePKbDK5AzX31WnCtXbpd5hKU7eLok5RqqiVMAC6ZEv8HzZBFX2Mb7yAe3juHy9oQRLmV7qFMC9BtDw781m5wjP",
  "key32": "Nq5L5Ad9ya4M78m8WrLeGy7a3oPFWMNvzcoM5YqZAQi61714f4Rugdw7s9CaakU9ycwjogZ1Gc6gQqDktxtbBXX",
  "key33": "2eS2VJwkxPmduLU4a2nxkZc6naTFj7qSKAFBru3xsPcq8Tzckhs33RCz54fyrcufHw9A8GTPEC1GySMcErqeDUQ2"
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
