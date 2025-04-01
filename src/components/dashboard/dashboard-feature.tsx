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
    "2d3fAZCBYLhQVtEas4D7NfKxk5dRo9BdqMZpgETyzhzKTzr7HP4MBqbmuRgn7fpvEDPQeYYAcogSTA4gH77caxK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YW2eBiDJV8ANdDkWtRJCWfh7C84YXngtFQZDFVgemE6AmL87EDrED86bVisa6MghpAqV9jN9HaX59PHYgkw7gsG",
  "key1": "4NSd3UYq2M2kmQsToKcNjbvRGqY4RXWGunaZ9vjytspcbWkeic1a9b9wG98San4dgm9q7Da7JGvs8GnHuxyEmTF5",
  "key2": "5Gf7kfxzzFHScGTRouF4BAP2EyxeZzeBVjYu2pc2yS1Qc81VAMJwgws1i6CMxGDzc9gXY55Wd3zTVW4ojS1iEQmS",
  "key3": "2aNvmdPQKR6BDBJy8t68SiZpMxuiRXfLCj8zeLcgFTrqSZcQHxdhGE58r55xkNM5omo3kxJM1Sm1DFxrbTQvFZDc",
  "key4": "2sth8LoxbDeRYpgxU5vT7qaU91RMwrJ74EzYJAhEjiYGyyDQ17LRxdcStsffzZhi75qtquMF9SqdsmwTYmXrvq9r",
  "key5": "mRkJ68LUcTDxtyAHUj6vC2bUu651HKRNDreQGTb8igowkBRtWcbZgVfsGxALHNch151pYm552Yj2ihd9CKDrfQX",
  "key6": "3A87g8cohxiH7t8Ufm7hbVXtyGWnEush17zMKBzcZnwrCVLmpvZXp2ZfRQJTCCtRmuCDDv4GpXpLUiK8iowuzFza",
  "key7": "2R1EmAizMyJSHx6u2AFiqYufzEkrQaYR1znRD4oCgi2pNfjYm3DqFCY2vgS9dZdzMeZSrzMmTCQZuCx8RTikfUJD",
  "key8": "4sgW1CPNPPWuweMF4LUHYRTCdCTK5EqZ6SJi8jx1piFc5Yww6rjo1MCkTcbvQai6XzFPHgGNLBHxCvXJc4Sf1Lz7",
  "key9": "5uuiMk4cyEsVZwXPGnWbst2ScMyWN7mQ8bTQRdbXxztZ1L5StnS6cz2B9onnSAWZGkcZwusShvLXs9aNh6YndsML",
  "key10": "5PSmNqihFLjmWGh6xVFT4AiAfU28QAspcFtgFh7nohZVQcHatEQiLcqQiNR1uJtyyw5HhKSWGk5x9wC4dEotxvpm",
  "key11": "2bXc5CtVACAqiCzWmrDa6orhHrQHVrwZuswnj6UbN6LQemhDpxDpM3P36DVpvdmUUvHd1PVVpfkXVrwHBoaMeWPF",
  "key12": "28DJKzbNArneFSUppLT2K8nyTrnKVohZEJLLp2WT6NWBGsaL4tgc1zYEzs6dae8bA57xxXzm4FFzNXL2Ei9DcRKW",
  "key13": "289aGreBn42M67W6Zu43ynARic9GCPWiMaEwWBkYaDjak5SjpvjQA3nzgrgLDJJYUwEyBtQW7geTYMfrWhxyvRgV",
  "key14": "2mqj7bTTWkcJ5wohMS3g1oiCvR3UgKcXwm4d7MMR9wpRswsXNvRHvGBbToiRzqzbfz7E2wVo2dYCXLGuoWvDnCwW",
  "key15": "53XYJoAKV83pp1KHQbA3jQitSX1WYezz6iT7b7xz54jShyH229AfTNxxxEyuof7E7W3wm27uNinHRLnr7cwgnR1n",
  "key16": "5sMHkok51MdDXt85AyGy63R4znT5ciqdvZc7MGJZsVSro71f6LeUKGxsr1R96eGtUpPcdcPJx5KkadgSpEQB47zZ",
  "key17": "5UVVvynCpRXZi59ThhnBsQYHnp96KvJwjJjS2aSGpvhULngFRriL5h9rqFy8WnxzmYu9yi2N2Dx7mGMrZKLvcwU8",
  "key18": "5GdoN7JpM4M9dzj3aowBoQ8erEGF5XysE8WqkLasueXaefJwEfXD6aSeKMSZAk3MDh7aQbRi8hkzwCYN9yjTULPb",
  "key19": "MhRxh6F39bYgbvY91Z9LbqWMx1marLibJBJNo8YSKdsDesmGJ9GT8fkXyEVUvg6AKvxREJiqFD7Fmsvq791EwKB",
  "key20": "89TCCjKSe9KPpgkZ6rs1pvxgCJ8Ng4fVEishqo3RSuKcv8D9tvCWaQYUQGHfuZeLLY8ovf7MLZdLRsxGvFhXyaX",
  "key21": "2JzKj8vgzbiYvv7geWLnV9rvXyQQF1MdfasWbq9t56eTNdtTKnZUJ8HondFu3tds9GJyuBJzorgpb9qCYnhRyQFi",
  "key22": "24HhXd1Djp669nohFRGkcxo1ctMss2N2DqkuAoE3aeRGriEC8cpPf2iDCncU3KVUK2omztxCJggzkEQUaf2wg2iP",
  "key23": "h4E9QSWJucDffg2PV2Tafn2Y3NvK49BhMwemhv2Z2dtLmAss5CWEuitR7twHbpGg43F2mrkB8mmPFMgCdkmrT2p",
  "key24": "4mRvZC79YdSuDDXYCHW8ohEAQHRqGMrbQPY2FMhxhAq1wuHuNyitEMyB4dw1dB2rfDdKaezPScyq9ioY4W9evPXc"
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
