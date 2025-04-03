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
    "4GZvaUpVy1EHfuBsFRbGt4Ey4sHHKxKLfyMVDJGYV2iTkhmBiKn6uAdr9Z1vWxVySftwj7cwvLXkyRAvmFN3D9Ey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4amLJK9DVMc69KTkQ3PuRBTfH5pVzqSGpLmzv9W9t2E9yDGwGbA7PrTxT7dDY5QquAKF4RX5RLwarg92Au1m5NoP",
  "key1": "5PrGTH1JppkDVvwyiEAcxokeyzUiWBacB32UAghxSi3DS58PJko8UXavhwFoYQLagw49P6NeBMfsGm12pyGoBrkD",
  "key2": "3uwJHZFeVpGa3RWvLiuw4ox3CQR6FTMirJS9gF7Mz8KGCLvKNkAePho6P5cbDNYjrUqQhfTRNEz7YqZHqn9doDcQ",
  "key3": "QTtSux9pA48CdwzNHEruWSEdM86gazv2NbkmEaExYckR1jwdifKGskrKzQZvxF7HYjbCQTU7WgUj7cVJT83Uh5b",
  "key4": "5asdQXnEyU69wocRm3kLu4rEudVfqiZ1wB9cnLzwrmCiscMgmyTdGWS3WCP3h2oH3yqGYJsbwMpcMmXhEaGrWDx7",
  "key5": "5a6vRP2SzGbrUdRX38jj49mVUdcR1obi7nWcMyx1pabL5cpbTgNotaEGmrfaXJWET6unYX5J2fSbny1m1j1Pdhs4",
  "key6": "3TemPhFPGoUPUzThrWa3vYPzkbcQ9HppbmV7sojGB269x7TXcSch2tJmeL9e7hyxfq1PQAdUbA5H9YkD22EHaesb",
  "key7": "2BztBtFknBdofZJSE3gT7L5nzqC1qagDe6ecxoYx4nVhjdoPTBJbPk99r9zRi9qqW716a1yroY4L6a6B9SMfZKtQ",
  "key8": "5G5sm6KvwaJYNGhQGupW2cXYqM3AiMPxzpzUQ2q74czJgSFnsU4y7JjfnnM2VkqRzoe7LZWadyJan4cip9upH9FX",
  "key9": "2kWYGfE8mZMN2XEk3j7pZn7rRVibSNBqgb6ka4akb6FiuebSeakhgGZ3Py1Y2zDNLwyuiTCJfWYcGwQxtUcG4Jak",
  "key10": "4pCV8JoQ5B6VcKduyNLN71eQHubiJQ9oYGtxwBiEdgL8xUaP5FFWT5zRnrZb6cnL9rAGt39Ldgr3urgQK7LBWe7U",
  "key11": "5Vqforerff1CZtKbXWaEkMd4hn1e7bvWB2Kxm8PNjuo99mXJvczG3b6ueMizcFoQsAm9bMwu21HpNnajhqpRaes2",
  "key12": "2fJRUcX1bXLum64tbL2iSPvizk67K8xM8E2wtD1GdJ67fFgrRCLUCPV37EQQdeE66wy8pi7GiYCZk9JY6zrMTSx6",
  "key13": "cqadUx9b4LdLpHyxRUhcnKuJx4n9TdaEeC1t1p3jwaCJcsTPeUfaVKSrSYGbKvULHeK9o7eaW3fcuzuwqsaSTHM",
  "key14": "2esnpc1JCG8guxxkYVM61kbRJhhpnUh23jMLPLVhyH4bv3jimGj6reUXGK2BF3CJaqaSRrieijDVNxcysRyTdjKk",
  "key15": "4sucMbfcBACCqEwBtmRnGih6c2qtHhWqdijZXNixdbUbLdjSfHNp39htkHZ5mK1HFNf3VmqFnJUgAZzDyxtXZdDn",
  "key16": "5LWj68bkjQ6wZb3tLhZqpo94UGeGizx8F856VJVm541UEfFURsJMPxAjpJz39Egy4h4yfR1nbNk8GcSKdjUdVCg3",
  "key17": "4XWUMCutRwL7EfLToBKWq6HLJBEuaZdLKaSA1RwjmLB5fWnpKbnLchPVQxMS9vZsmu6V7f1mVVgEBPcCemjKmTv",
  "key18": "22abc1iEmHRsFiNbmFXvWAUTJ9WkALqZr88FUvEvCunTeV5fTTBWGvWDBLMoMMrA1GTaChGgALpPFPaDeJ2Sjo7p",
  "key19": "2kkoRG1dGd8NKgUvAbjngCjBZVwCAe1LZDy4up6UxnvJQpQuST5thT2kxku4iAnn9nWcDanvkwCFsrB6dNHZRQRQ",
  "key20": "2JmmnZxgc6xcFbb8BA2dmXrEVrjrvkeM6Ly59YJJcBN1r4xKbeN6y8eZDPau7SNsbpSNpWGWFKjn3SsrW4wvc3yH",
  "key21": "4Gy9Z2gngwQJofaDAsTmEyQmyQ1RBjFguCDC4xatqf3PL725TQ4jrxpxBBRR6pCaKH4TGRVB3kf71CFPBs5o3CJ9",
  "key22": "61zSu3nE55996ZAcQjjJXo69nga45yApWPCaUvZF7JwghCMDN8rQA1CR1nX9hwguzjUC2S1DZWFoawEJN1HEtocs",
  "key23": "4ZVZLoRLio1DncGKQ4YRfLDtDB6bGywWiDomjh8YjDHrYGezM2m8nots43yeF3fHzuNzMPyH9AAdYnZ3Q3yQ5GVL",
  "key24": "Z39CkLR3ZcAVFp3KTdWpA96v9PPMZMe4Gpywc6E4fHdHHBPG61DBeLGarmUJmmLHtbbbncxuxuN1Qm4mgstuFtf",
  "key25": "3eu6q1anHqaDgLGPbmLUFryCxA7bNS5D5Luki4t2ERAEFygCDEAo8k8a4Gmapfb7zqTu4rXkwJegiFXbY3p4JF5D",
  "key26": "57aeXdBsFj8Vf6STDXFXhQWAHGCD5k5eYUrkjA1jKN5fd4Ad8T8ZBNeP6ePztBKDJj12UUucj3a7U7giCVYneGUy",
  "key27": "4ST7nhZgRFPLNwp6YH4WMwLwuS1V2DXuhKew5RsMQPuwPgBtocVu4cJ46RgQePh4unju9FGiXzvtye33NDRUkdnt",
  "key28": "4hn8xQ5swNRUADmytnRcCK91zbRTJ6UmJQHhkeEtcB4r7L4y6ayydS3QmEKhHRA8vVRKmhna9nAvuthfga594WhC",
  "key29": "2QjX3pWuouqSPUs2a4bzMZjQu1gyKj7S6n9QnkKo6BHdg8iURPmmjHK3yj3QCSjD7zhcsaq6Jn9fZX9oYc2iaCA1",
  "key30": "3a8evFCbv39S3kbYEVT8RXRauw3RSjTMjra78otm5BqvZeVqJQgv7WDJp77qjLU5UbAqY21MDp1ovJUXxBa5LE23",
  "key31": "4gw2ryWBMyBh8S1kcFDoH6xoHXwARbVWehtyrzMQWCf8gjvTX9oX1i4cMJVMBAHLsP374FWquKdH1GfiwyriknmQ"
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
