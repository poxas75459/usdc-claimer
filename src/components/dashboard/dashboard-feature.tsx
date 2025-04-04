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
    "NZPeBGLotgRN9o7Co3rLUkUHvPuHnh2dYX6RmoebqYSTrxAdc8mpHmVmEP7oQBK5aRg2btTDDo2FA9ijt8tgb8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "393dpx3yG9m9jRun1shPwBg7sbP1k2mRE2TkVDcSp67kACjPBZDbi7fN7GGQmvoDNM2rW7WnP4HCCGHbnTNxemPu",
  "key1": "2PWHN8gbnakQmwC1WVEApyr3AioNhtXQxdB4xC7kPAAPy5Pk6st1noWyRMCovVF7yhT6ybtNzDn3E56GwgXghRQ1",
  "key2": "2wRHBx7PgvTR35pGKKrd2mA4K7iv5xNmwsyX4hm4VvMkfSBSDk2rRL614CY7t4jxWx2sqbBpGFvy5Nd6UQnDr8dJ",
  "key3": "3sEudvHX9AGijZ1vwACXah2dM4Z9gtA2dVcfMfKG7Y9uzbzb8aaEZacK6ZQnYgZpAHmbrSKpNHf4DJJ38XCy94ao",
  "key4": "5whRUgbpzYFHwf4bmr4KCZCzRQdC9i6zuAF5VgBE1qrbuDF6WNTDohi2gVxTecExvaphpMF4fgQjobstz3rRb33c",
  "key5": "5SeGwFsVGSJYpoCEujTVE3AC6e9gZ6Fp8y8rb9naGJ7kwWnXN3DrniSXuXPY3ZP5KknU2jJ2Kd2zwacySctvmWwt",
  "key6": "4skCpqApjUFRrAnoo6vn9FjpCpPnaX3xF9MxkF9Z1RQqFeYiForQDgJynX8xvHWdaYHqvYa72JApaVQAVYUfC6sc",
  "key7": "5m9djjsff7FxjveU9VRNzohEQEL69z9pJZG9s5j5VekB7AAkQWcAwjrXVtEeJ6T5pMQKwwppgK6eMXhKctuDX8Ni",
  "key8": "24nSxJGvY1ptoyMhkKWkXpNetqwRkvKn1K6dHhkLBEjHojPjz8BoFC17PidHAYLvCT2RueQjConc4rauRSYPx5bX",
  "key9": "3kfKi6fgpDdVirY3HxYcR7WWYKRSyyrSUXN2cG2JwHFsyoAuMRmGV1CCvVVXX6jqBnVHRbUs6qKTzSWjtNWLxCUY",
  "key10": "3caGxG9sffoyESH3uoHz3iCXkU5r4CcK2J4fxLfWXgXGSNhJNyDWUjbkaJUnbtYeZWGUkzSnSGFCp5EqSMt2Uz1v",
  "key11": "9o2gu8NEmpS7nsoFSUbaUen8VbxuWXjopMz4s8jcpke9ssjjN4agMcm37kUX261QdaDncrauSiNnk7wat1j7kJu",
  "key12": "3dZ3sBXdfwdnSKXrcCbpFkSww2KMX8v9un2zVVC3yqdgFwHy6z9bTcraHhaUqFk5aZE9nuN57cwPqijtMW9ZGHrn",
  "key13": "rFr23WcbF66ctsNDXm3z1TGBDfnjcF4CirUendUdu53B2rGh4q6M5JGQ8EH8wWsTFyAsu38WtkSDJpjPz54sRt1",
  "key14": "oPKiRSh4BFLjVoXrSefDfb4pR2zMqjYSUE2deEatb5nj4rkgGKVzgaXRwEUs2rYUPbwEwcp5HRJBYDvT2vq9hzB",
  "key15": "DnsmnvVkb7KPYq15Cp85h4KY9nmmgouFz3G4g6vu8qAJ7GZX7icRnMC6EC6MqHtjK83ZMpUa6T3S6jPNZyh4dCQ",
  "key16": "4Zjd68KmBVM9vVZQjddo4T2UAEMdUBFAuhh9tnSdKhLzDz4PiLGvZoCmQscNEZhXfrC6HbLZgxpH4QHjZ8G8eYKP",
  "key17": "49bcbjeX6xYXmtBLRvVTozGMZ6ax4MJVjkcosiWZAjhUBNZnwdYDwmDRwung1NUb219UNtTVXpFCFgMaDunVGKEK",
  "key18": "3ZXdnkuzXJHHmQrSGn4wwRWQ35yjsytqKPeKVA5886Cnyc8JD3TiHhuErsroKUubAnf6waigSsmTdyurBAifmwfm",
  "key19": "3Ua7ugtgbvziAcrNFsYpgUey4sHHyyxVYKnUsLoN799R8uZAhVmUAzktPwLArCWBjuUt6dcdncEYksMHEmMHMyTc",
  "key20": "2fKJiCbd8HUA2ESgYpchK26NdiPDgS1L5f2JbENiRbpHh367u4fN4PjF326wLmUHpnpkhzqgWtcKwmrhr3rhohtn",
  "key21": "c6wdKJEq7ueEY8ZHKiRj8XRWkEqfLWC8NWtD471niNyzVDvnGN3gTBUWFZstDq2ptEdhP3U5DYngZYzhCM1gpjJ",
  "key22": "5VNv81tk3zp2oyYVNf7CVqkQRVtuotsAiW8sF9SfDS7jSTZ6k6hfk1M67J2Z4NkKFs3tfXMULnEyr6bZRZXv22WU",
  "key23": "uJbuidcskoxiPkxpgAdqENwBkpuygiRfoGaL1xixiMUAzx6WTezirWp2XFQa398aQ6WyMGt1kHbc2zipzQgo2RN",
  "key24": "2fiqq8z3gMxn8vU7oub2qKTy8k3VPp7gDfhABR6tqBLkGix9nfPg9p4GeQ4hiQjiJhnWinwruUVJi6mhLv6UJvME",
  "key25": "3LHhD3dvuPotKzCuSJ7xGCfD1bG4KpzM1ZYSdVTd2CUn7EASTEQu3hrwCsrJPnTpHXuWmCTypPQhCjeF4Wizr1UU",
  "key26": "4sE3YtoQZQSLKAxafhab2eaA4vxdUmo3p1D4kgtZbYxjbStFNBbPdHNqyyndQQ2FX5wAmtUCeVyS4QmJ6TubfXgs",
  "key27": "2QFfh6vgWpHQGFme1TbrNQsFxrDmmXeLn2WF5TPDQtSDoKu74UodkTFVC41ZBLNjtFDjgiVSg1NFy4ADVtLQv1gN",
  "key28": "2mqycHShfWFbKzbsAR7bGGT1268j578gGkcEXebGYMWJQpgoK7wDjQH6WusjV1wDEcNu7zk8XbeV325xnNCYrmJ3",
  "key29": "2KWUg4UcgEkva89SxQNejv6W2zPUYyJ4Ghzh9WGaMaEeKvEBfhh2ohexn4TcS1VKCfrcrL9PhnEvukzxRd3fmqgY",
  "key30": "9899mRT7tsQFtsp5iyQaMqLs2m8UYDkeWsvm3kYDzgzkoziAjeVmfpKSZdyTNhD2Rj5SXg52do4Tn3D94F3e68s",
  "key31": "4YSGLmPRhFibhmtsY5JXEwEA3AGbE1xe1kR8PLYGhtLW7xXkQkJPNN5JycugDfw1v7xMWy4bZ5Li3nS1xvWoNK4d",
  "key32": "J4tdRMAme8gyLhcdQX9vXVdfu3PZmnhABzLR3gATBcVnqNyB6rhAfXPZFiABUhvxK7xMgCrrXr8nnZim1cBJX1t",
  "key33": "M49ayUwmCFDtEk3dmkn6g1PqXF4SRSV9DAhuL74TxFYitmPoFFpKV9w5QhxUAjKnZwZmSYTG8Me2HFzqvL6DdPv",
  "key34": "5XRDpixwJ4G3obWuezpSqPNJ1Yfm2pm9ijRSHe1a8Rd6LkutCL37wh1VXaAZW2iMAiyGr3isatUxFimshGmyew7t",
  "key35": "3uyFwtcgfMtEmdUFtfDjmXBV2heCuXDDu5xdwzc88TbtqrAuNm3XusQe3trDD4rj1SQmaen8GUs94oSDFACyT3a5",
  "key36": "3JWfsUxLkZbbFx2J8QiPPUs2ep2CAg3MnePQ7fJvY8mewZan94KMvbjoKLuAsy78Qih9526XnTzTUbeuLAedefss"
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
