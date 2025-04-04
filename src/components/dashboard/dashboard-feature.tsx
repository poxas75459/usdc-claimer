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
    "5ViJpjwf5kkNeSa2yZs1SUity3c8K9ipX9MCJNEfApZPy28mwgKg5CJfszenMLoS6r8H76w45fA97osdpsQcFZAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QocC6EiHQeDb6FfVHpSzj14ae8Tg8rgpMvuLfXSFNdcBc6n5nNep7eQaJJ6bWTyL1Ja2FwXeBT5RRWLZN1ib8zG",
  "key1": "2sctFiXv3WX8WJ5dUjFHpHqXgzkmqyzajvUg377zLdAZPgvyUstAbDbRavhpLCUb3n8EbdsGAxJhcoHcoKnBRCRD",
  "key2": "61JEq5nvu4MfL6JVbrj26s14VyCqohyGUvVoz9duUm7f7Uo9rRdVYf3Ce8zvf9ZV2C73Sa5mAktjsTE7Rxh1tVy6",
  "key3": "4RktdvPqpGReSSevFuhpNxdgqgdB3FJu8GTWoH7foeNXqkFdnu1GNUyhQHxpEGrNNdsyBhwVQvL2TCGpeWRWZax8",
  "key4": "PaTQSMVkmBjawzhKZ5SKZ1PKQPzhTf8KRCprSjmkRF2tWKKpYhRwS5ud2k4Rw4cEN1sxMhVVuRHeZA5AwFwcrS5",
  "key5": "3mnxLxA2Qb1AT6JJNZn2TqFh76W7FfyYHd5vRd9yTxaN4hJiwTsGt2eyjPp2G2YSo1zmr1Z8njQMgNMjCAfHeSGe",
  "key6": "4dWpvgxmeM5MEXz4Du5SCPwn2dJt4Shs5BP7fJ8EiWCWsQQyNEnxqfKRduerdoSWuLpsNJG2jX8bxFY16FGRKpGt",
  "key7": "2ZvvMgt5Vw5fH5qP9AV4vixzQohPJsSju12vUpaKaCLWKRBAQThm6HzEUs5pftENHpMDuLkzz5affd2UsvfcXnRS",
  "key8": "66px54v3pf4KostziRe1wvMmWvPSNBKUn46aVq8qmW3vGsnzQteVHmXFzB53RgnRvv7rcrM3pd2RFCfkKwbH5EwV",
  "key9": "54eAq2aVSJBZGKxCgRuoZcpm9aG3p6UUFKewZ1m6La1yNmktWZ1sgt7MmzStA5Min8JFw2jVGiYwg4aYzLS4yrkh",
  "key10": "2xpR5P2tYnmw4ucErvxy8RhJxNbDCHWGWRkHQj7Brto9Kt5UuMo1ajJSg7afbhwW1NaPbKw3vgd1Tq3oEcgd3TYt",
  "key11": "3UPLBK4wzWfeZvxnwoHjUB4xzaassHgzqSmNXeyCA4VvvbwweUM9fXKYjrv3hzXw615YxFyurKNJgJXnpDsnhboZ",
  "key12": "pqr1E7jtqwAdkD1hTnSR1RnyYQiwrDkQC8iuZBqjMCvxLVuFcYkAszv2g5yx8RERjX9GCbqTQ9GxEphKtzfbZR6",
  "key13": "2ktMJfjiJjDMsuXWsYCjscx7ApTcSJ5sorg3qzLdNKuUAEpcK6YcnQmRLYSCRBaQkGDvcRpoaqtbrxzzxCrGBaTa",
  "key14": "4tKMVAWedqCMAJHwwTJYRuvpVjwwGArSqrxAtkd6GjvR7a3xMn4ftjpT7XonfYvkaVxQb5GENXT4pnHK2FLM2g29",
  "key15": "3wVnG3LF4CtRxdskidM5TaQemfy2rV1kGBYfWkRAq6QWjpHgXkaaQEs9nAwpRTcCq52534wyGKNYMBHb5rysHryx",
  "key16": "497tSShrJhhhMzeBbHMVFAnF6faMTq3WzjJbM5jAsyHQxQFTVKszgt8myECD7wbBhQo4JghbRbavt5uoh5THsuX4",
  "key17": "62c45KaCNkbZ5FzwHamKpGy7qPsY8Yq7upwTRoj9C74y1aGeJvvVTjCD8m3uKazgpFaSsPaHUMotwiNai1ybjhFm",
  "key18": "8pR3ZzXukx56YAHkHxE94NmeJYSQvBbZbTaAb2WsHbdUL46wmFJee1LgXACDYvhs6PNpAve9ixmFBR8DbJU9rnK",
  "key19": "2WETMsRHJscGYpRPgD6zFPGJkZaCM6FK3UYfRxh5wKxBSLeFZPE7SpzgBXRKchxGKM8q1zY4x37u7AwjKYiSfk3o",
  "key20": "3qrJQth235TL1fELcLMLR4awSQTaibkfR6BPceM2A2pcmW6nF3KQ7wdv1Xj8YynwP5BXGgbSTiHnzuWrymsfG5L9",
  "key21": "44JUqu2LAkUn6yPPe88ejp3pmiVwNWAMjBG85fMjSgPLk3cRdCFgrkuFw7Pyhgdqf4WkUAjoqs6rAonVrZo7G6b2",
  "key22": "4bShtdrhvzuGtP3fwzFHUyTVPqcwKP4P4AYeKmKA9gq8M63XSnhLfD72kPMz7UcN8nDQCE8dPX3uprLM2r7psLeE",
  "key23": "35ud5Kihc65wVtMenhw6hkwn3MAJL6Thchwsc5MK1F57oCfxEttTKfTnRm2FpTE9bK8x7JMh3FmHPXMuWeSvYFxb",
  "key24": "4ExotPCGdaNB98yuPCH1mMP73ny8Y97rD88CiVXYdEX4LtvKUu3gcHPzHtveDR9nLhDaf34wWyWua5GijRRmCZNT",
  "key25": "5mHj5nPWtveagZSGoS36Fny3GC674cdTsgXtmdkEGeYyz2rFSSpbsjaaFesvq9fvvHCZo4hkFRgHats3L4jBrmWp",
  "key26": "2F8bs8ZZa3oCqdS7PCmiEKY1ZCrW63AC6fUvKVNFxzNNNhEemwDJaCa2X5N4NHBgYsxqwkzdqniLLMXaai2PKYfa",
  "key27": "8koNFwhBR2Lzo7xraDvAFNWqXnjAi6mG3GtZKcJWhH2sqGsu2G1ZVLVGefaUZaf6uX4vhK7G8nfseiBif6ApBkW",
  "key28": "4bbfvKULggmYfz3WAkUu6p9FQFaWBwL7kq4ZtrBF9WiTJg7FN1Wi5QeXhjRwXA8ySUkxeAiBfHyhqktXLhm8Njuo",
  "key29": "3zuFoZiDwnJt2YPDyn5LLy34wuhwgGMm7dv5pSfLBbsLvMcV9JLHyH6fyKfcocVxCnXKUKkY1DD9CZWB5hKP4PuL",
  "key30": "5gMD1mnUhfdi1WZcr8HnbmnoM2cngYRr9xrarC5Q968EcaD3re2NiiNtix7uoUKaDVhG95bBKmJ6Wk8hfNJkMP4g"
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
