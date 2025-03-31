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
    "yBN3t5mXzkoJZirPvEeSY4wkbzSExwwysSLLVGef4srJpJJBzQ7j2RS4naBnqYhbEbgqa3vjM4WqecvAuusGTr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xRq1DFP2uZmCRLr6CAHqSna1U4mh2e5pruGrRaczzw25HGqdcheTzFe5D8czXHHJeTm6e9EodFAidjGJYNucXEd",
  "key1": "3szryVZgwArcqyzTdnVuyBzMVYEN1xrm5rKSHSgGCpkJLmLRq4ZnT2kJeaSpcrFsfexSAra5URYvmpVf3UPznRgQ",
  "key2": "57YJNpQEMUKCCZWQ5VRfDdXGSyJEiDGtaBCzYU8kKaoLyX1BQpXGwvQqjLNjZEXMxw2K4Dt8LYcktZsRxgVbjHez",
  "key3": "4CNGUa4nVMYTxUWF98xNvF2vvHguEP5Vorsx7j7UGJrcLqC6YigYaRu38Ec4GGMHr3jUGLcQCudQS2PiLoUaLAtJ",
  "key4": "2M3wQzdtttRFVUp6T2KkcXXWQfCqubBggTkvWH6SmDKcUAKTF9yiHsWiDoqJUpMaHFn5YcNR676M2jVcrKRRw2NW",
  "key5": "5NQYAnZMaZXCzNqjGDVXVyZvfGjBhWVVauX9TqKSVeN8cSCX2g984jpFmNqCwgMDWKJZLqTNDJNrDwSijmEvN9VU",
  "key6": "3a8KeqP41f58Yj6723tXBrAvxbQJ4qT1PzEmTRG5KQTtA1TKpbbiiWV7Wj9FfSyuAEwLseRXbNTfBHGTvRL29pHY",
  "key7": "PexQdkbf6ckfEbguNj8xPWDphMzYUKDKVC2M2dEkgKVHqvDyVW8YHyjcQyro2yAh4Ht6YsNfvPrw4n6Uq6RswJ2",
  "key8": "2BnrJNb3sTJfpEXgxW7cDoM2VxM2rywFQw1sx1NwurzPaDhENybvZTr7WTXHhbZNesh8ZRKJhR3ofRx78MLYb9Fo",
  "key9": "5m53kNv1y8th2RRRPviacCEqZUEuxTbWy7nQTtc4UAcn3hL61YqZ6fsSxmNdeZVHKbPkBPbrF6yshn3VQaf3SG2R",
  "key10": "2re5x3jPsfus1Q3LCPT6kgNfgNA8gpkqBk8SRJkRJVxRGDmW7B6rPUj3JQ7UBGDVeHJeLsw3Pz6xj4Fbi1XuFBya",
  "key11": "62uXXV8KeLp5Znv3HWCq8QNSVyGZirB791MMXke23anDf4t96UNc7sy4FCPYswjgojJjXgXUcQ9ST8KTgxKAaoT5",
  "key12": "28BtFvJEeFu4tMvC3dE5YQnmA7FYxYxKGBdLt4Jtp7Qr5gEgiDxezEUzTUvVh36vxA7DRRo2yKaLrE8H4tHrkvrB",
  "key13": "3FCW8ehQe9TXBs4bWTvAU9wFvqUBgnoneZ2XNe8ckfmftVcanmfgTPd2RYWbor7c9ndUAKU4yYH9JASe4FtaRLQo",
  "key14": "4nWVyc2mc5vsKDMFkFWCABF9RyeGJweEEd1Sa6CfbUdGRcHcJHNcNapNReYXTfLxUkezQBbvRkryyqyozdh4j6s6",
  "key15": "3kHMU4acXbZj6MnsMD3RkFCj3xuRLmJoBB7dVwT7yfNLcMMMZumPxG5ALh1pxtP1DUAst11nbWYFXwWCfchrKzp8",
  "key16": "2brejZ347kv3Avf26bcEKjdiKac1PCe7h4vhPHwVv32C5jFSpMcviUgKJVTcxS4RpK3aiwYXphXKPGNf1Kb3nWCz",
  "key17": "65xExKQERytL4eUvoHjtVH2vBuXccJ2W6Jap9XVyWRnGqLxCvBXoiSXuQMK6ATPbMfZLt9dCaLWdLwarZ7oc83Vm",
  "key18": "exGuEWzACZTYhn51avEZKTVCpedCESS8FXDGLRFVbRRKPStoitoeZARkxNLEt9RcDgB9RhiVBweX6rZVEcNiAyo",
  "key19": "3fmzPrXDU5tmhEfyadPAv5DPrTREFE5dvp3178y9dyc3YyiLrwKDwnxFbZboM69hnidNSh8uhqfvaQUagCJjz3Lo",
  "key20": "3xzPCP5aaSFjRRaTqy4xFGxpehJ2QAdNWFWZLXza1Snz5m4PnxbGytRcEL6qC8SmSkGSS2ogSQ9f7EyiVA9qTL6R",
  "key21": "2RQ36fSzTWWTT67auHLAHAqUeFAvKabHrKA3SgvH2J2ufMN13GQoyTAFjyc9AbRv8qA4taCkQGwHTbz7HUcgt2fG",
  "key22": "26jkfh9EZphMsQ8QJfTP2h11voRwjVqDkui5UhPgiN2Lhu6JkY5486RQQxmsE7ZrrHQkmzigTyf5vAyEvuPQ9op9",
  "key23": "5VNHJaNuGMvExKr3i5xDZJ6654oG6y3fQ8VSY7cgGr39Gi8aLUVcSdPLkvPNvcMRvgQL3hJKa4tApfJv8V2J4SRA",
  "key24": "2cgLQ6pH1Znohiot8AqY4isZA3oL9eojPjBrdBPeQaB1zqSRH4EnWT6256gRVrBvMxWfUtWwrJdpeXy5gu671srN",
  "key25": "5LM9dNxu2ZDbTzwiRrJ1ochAgGGD5vr49pSQNG3vrFUxJfxJ2qP3PMPC7VcbHw6nwLDubPXCKBmTyPrVzGu9Wcn8",
  "key26": "46YPrFCAxPhBp8vr1rJNfYDU8FN3rr1G3nVeEpK5Sh88tEegPZ1LN9kgeQSHc4WdPTBeYsUV5Tyn4gtNp7Tbf5Ev",
  "key27": "2mqFcHX48M4BVv5c9wtixhHdWuJah5X9DcbXVuXtQxLcCem4u7XuHZnw2zDfsNfH7XpLYnTGLL3khvJjmDTK7usm"
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
