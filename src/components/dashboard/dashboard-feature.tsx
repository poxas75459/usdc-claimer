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
    "3wQ9h11rvP34VQmRqxvvu3ApYBX2Lm58PfyzimhfcRbTX3DzHfzrdBygfP4o8ZKHUKnEu5oow2nZZe7VrV4VBzeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YC7LmPaQrRpTsD7mM8LxWBRiCrb6s42gmUJmkWgupT1r8Bs4RbT1Qqju3ZqtquAZaM8gVkXdHfYWDWpUWkSPcQ8",
  "key1": "3vQDsvaB1cBjtM3pMMsy2ykyqvY8jiqU6nRh3cmMNGPsigGSwcECuoJG5n1yb17KyCe8S5dkD3A1VEgaL1e7Fqj1",
  "key2": "2JMsERssvQunCnBBoKTiG8Gt9rkYTVJ2tDbhi4B3P1mSNVqczdzDgomh5gewdf85oxt4v1W1mRTvk1DXLxJvdbFb",
  "key3": "5RrP6uLK5gw7ckoKqhfHYWoPx2nQdsDJ5f5Zh66T8As6ZszwoBLwtzthNrRfWoxaMN4ZkrPvSMmLx4LFTm4L5vxD",
  "key4": "X8xreuUMTp7hKiWcfMyMWYhWy7M1wuQ4j7QqH8q9mnvNS8Pien6zo1P8H644enU6o8hS15FxRwczt8ZRH1DU3sz",
  "key5": "B5kTXwyzmg27FXJAxLXBz6otLG97pH9T9NSxBzQ8J57ouNrgYCmntrPxFAHmR8QbncKp5wJPNnLF2W8NHp9iXk3",
  "key6": "66AXiFggQqL8LcPJHgYhtTkYAkdNCZZkzc8RTAAaGKmFeu6v5pyRixVePWRUULPaJWpQqFiCTxFAp8GcQJ6T5KmJ",
  "key7": "5k1ZsZdfi9t5zBQh2Hk5DtGE44622bkNeTmUtW2VY2884FqxmcBoaViS5ABK8tnXJJDxx26o2jbv5rHNnaRVXNKh",
  "key8": "4bTLTBHMgBwj1fjcXcuys5GKVvpBJRF6JJ5nv2ciMzNHvWtF4azLifjKjFV38mHdXAWaNM715gk1toc4FainovST",
  "key9": "bismmbkf6Du973nEJJyUj2hiQTLdGVWAXKhjxMKGHeh2myhdsDF344pxjeQgBgkTWU3EmX5NZ1UDxUvtZnt7nBp",
  "key10": "2RBLqxjL1o4owpKVy9fwSUQRN3He8DmQPaNCAww88N9K5AYrc2z69bYU1iCNU7GYK2iKJYkq7adEREgsF7PNAMyo",
  "key11": "3VZHrTWTqpZ9Guz81Zr7AoDcLK5UaPfudgZquwrZ1soUP684WHFvZg3L4aAWQJaVfZG1E99d1VEZRTBSVtGRxkjw",
  "key12": "J6F3zTpjLtKG2MouziSnywExJED9ajTUDF1mEyWSiRggmM2MQ7eW57HvjgEaWnwYPVZ6iUd2nMjDgUaTjVccgAa",
  "key13": "2VMoMtEJz59v2owWNDxJvjbaaQ3nvZL9oaGUdBxK7FuLGdQ7WcaPPL9iRN6jRJ2X1qiRK9wXtuVWREq8SGtpPnf3",
  "key14": "396cmPruMfLskesPvrbkbqafWKHzgeeCJ91xYZmKUAkTUTw7xTLbJc4gJJpYgDhURUvP6hARBHyLM7NyRz5W9soE",
  "key15": "zcnWhgCUtJQrxRqiJeHqvvjcxoqiz2MpAeZU2xe8CPf16J2pijmN7SeWRvdBfeTdYM9wZW7E9jxrLrKbR64C9xr",
  "key16": "zpQ8jjhF2Yf25NCp1P3drVd6oiw1LD4k7Lneg8o7THZTaiBrLDrzAa7cDxttLmBf68C8cyX1DAGdm2YK9MQkex9",
  "key17": "3artJYqywpAqr22QPjr5tZjbLYJuqCAMuQCYAAhb6bk4vYnG18kk8kCR6p8yzkoMeypPqwcQtAPihz1DPwFB7Zkt",
  "key18": "kauEwAZPHxRYxuumyKvfFTPL5wgPYf1agiRQKNStSLUtpfqd4a6emdAcfWoj6jWL6hqe7Korq1eZoiX21gWWZaM",
  "key19": "3LHiD6CgfXAaBkf4axjKnNUDE5gBGLaTM5hHzSAyHyZMtdGqTWZouDQq2EfJPaNQRPdUfVENqPK46Z4ZrAhQpMm2",
  "key20": "2gMP48inU7BPFHgYA71V58DKfgMr6XWD6ivfbBhf8Q9MHhnqewLbQbCwxKQ8KDsx2WeKKdvRigLCi5TDWQ96PVRC",
  "key21": "63tzz2N178GJbTKAdCHstE26drnbQGpsvEqCXg8nyqK5CAL89poVk8J11HsMDR3GD2GDxANxoN4ixjAP88Yh1JKd",
  "key22": "5tqCr8WTEpAfR8J8SaCAWtf3VwCQWrV3LAxJX8EN9D5Vp8u8HpEyMeZthTmbxzukaA675CeBoN76r7HTq6cZtEVh",
  "key23": "2YiDvLGxC9X9e4VtDGMStSqfeaZJCtGYbkcBVKkg4WFdizzAthPimF2kjHE69NSrHNFGhMLuHLEYzspK8AdhkMAX",
  "key24": "2kE2LXd3SA8VGCiaBj4nFUyvnnb8YNGEsQjbRZQEiSLCwAaUQPiKF4nzczE85d1ynET444DjjL6AwTccY63Ew1XX",
  "key25": "22YjMgdKs3Qj5ahcUWzPZ6LFo2VVd5Wqt6Y1RN4pakNfSKhXKmcrNKPWy4ehQpckuDNnSiiPQu4UxoMdhuqeuz5k",
  "key26": "5bmhxrwmtLB74kpKgrPyRQK5DK1bRzfokLq9R63B8rQJAzAwGmWVJShBWSScmz2tgQwxY4jbvXUaqcF7p6TdMvjR",
  "key27": "6akS5EjbkVa7hnQWseanxce6Nf74HMGWexNWRUguwgZxSfDB33yHyu3Lv1ny3vD6SHMpbUSJ2iCqQGDxR1X8SAV",
  "key28": "2Uzs8T8zgBQDWTMh8re8Goau47FvCg4oBR7NZf5HgH4zzp7STTVtWpXuXRHcyAcK2nDWDn2EMNeLp7GWKNPVszta",
  "key29": "VXaghCZeX2XphSBvpcmeygMLfSWoTjL9K7QdeY2BVZU1m2NVCaiCP9TDas9fYhK8qbLp3QnfU9GuuYnT1TQYycp",
  "key30": "4GJZspauN8ZDMvzgXkQc5AFbrwxNLYsJpBcANE3bicEo6hLqc5dxu14hgBVZmosmTSmirJTLBJc1HJ8sjXfTR5Fc",
  "key31": "4srp5fMu67EtF9Ga4qmjbHSaVyx8nPCYjhg7dLVYEoVdnDSghFzMvZoGRoYvQabbd8UN8CLJCoiWLSHG9GPNS7Eg"
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
