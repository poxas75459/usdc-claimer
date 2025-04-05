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
    "66buoy16N399hx5XpeQma4sRh6tRYHAQNk2HTutdVbZhTW2DbHuercQJuensbCmTphS1U6UU1RosotuT81gLKAsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4APQSVfAMvGiZHJ7yhnV7VCQQnjYyoa9jcGDp3DcxqGDS1DtuvDK13Q5ptbEP4ag62MMtGqt9F7mvjbiz6iZPZEi",
  "key1": "3dSb5UBvVnMwhVeaeS47tYHgQV5EFbDR9pv2kVNwth7DQ2ZwgCy8SdC4nYKxGT9xK9sQXHRHrzHpKp7TWNsJR7i9",
  "key2": "3vLro56t37vj4MZfHER6RBRViWuPGMnjMPdzDDeiUfrNLNm6puH1Kkz6AMLtivxZPRzTFXsuH6D7uF5ukxQcSAWu",
  "key3": "3o4JQtgjrzZxrwF16KqrDstErT756KKY4tBjrPt9jqe8odieegsEviunnwJ85MnXyyBQpkcU6MgXA43rwn9P16Qi",
  "key4": "gtT8D6SMjBPgmypnhr8Afwqkn392KjtGmeAUB8jmY81jFKu8XDN7RdHF98gRWqCTfZf5Wy2UqMebGJFnTqyJ6XP",
  "key5": "46WNZWqwBkPuprUuikr3eNoTquHXXhgCBRNP6aoLn4SFbwKnb3AXwE91D9dDBwh9EtM3gKkz33hbA7rmxDauBhzC",
  "key6": "3PERYL3H8pAPZcCd7V8D6aGkC7jdJEbd1fNyWBpgLyaVYZ6aFoH2DPF5zsFbmE6wGkJAiMSXNMgYcfeshybkxwWB",
  "key7": "4y5Cgks5i2kNQrXPEkxZCjQUb8V9SRttBMPqB5UJrEPYBgtuCfiKuNVAEpGrYDNwynfjSm9BchiDATM7H2zLTNdQ",
  "key8": "3xhGPABMHeKQ4jhG5zVgaLBmmZGdJSH53wxqSpofq1wazDbjQ9icAZBL4gjbrXVtYujtoh8Gdj91ydHuNiSAoXEo",
  "key9": "4mmV8My59nXu1rnjeL7oAFS9YDeaHmWvqbkADVupBLNAqzfhvpxKwmzB3RuUWj9Nm6vEq47FrBAbSA6yZ21f6L33",
  "key10": "yZUpTsqvAMPoSEBcZZXk82phgj7HPFUHiZMqGEHMJvuD36GoSsXYmha8NoDh2W1cedZwSQXacDAfpYwu3k78he3",
  "key11": "sdWfTZwxRRMGrNQzTcxM1hrMAn65kAePjGgE6U31JNpefQe8bwLqRtMgxfJWe6TCKNpnbpnV1y4SRhnFmJNbvT3",
  "key12": "3mQfxSTKsbB5zMgmg7h1emoHgcyKJnj1j1W6TKCgrNxcnw7tdWDzWSD7aQcdEqNUW9d5MweKPKKMwVivYar8MHf9",
  "key13": "EiuL8Shix5LbK3BeMKnLYrEb1TFdbx66DqzbUwaZSSFLHZaechv5CHKvqUPiWwrwMjXAYZqrv9AHy6t5Ls6TPyU",
  "key14": "2hQ5LzyjV5xAoaZfNYojY43CERjuEYQnCRtLm8QBuRQANsGikBM7yUo9RtjB58CfoZgRdZ3fmUFgknqCb2N9ZANK",
  "key15": "nXXaRXzkYsLvRXjH4CE8s1ViGMRHin7a3TFhNEQWr3cf9m5ecHPrks8CbXQKA6kAHVGYmU3jpziAmZR1fyshPuj",
  "key16": "2yFaKcRH4Fhd1wH77iih3vvJx8AX4yajFUTR94G5dfri3cJ23zo9B2uAdiPKAybK48nCbePhZaPepJHR41kxexUN",
  "key17": "4288qQHJEdmGAF79dcgiShGoFEvSMkPsbkNDkXEf3X1EeFZwaWLgiGdjSGSwX5ChRFvnnz5CQ66uMrpzyxpaawh",
  "key18": "3mbGVgS89Gexf5FBjHv1uiXadz5YTf77pm2ZJVJyzdPfcMgQhgkvWNAM5tSRgce9mEARNSNct5jrWrUBbU5tVKiE",
  "key19": "22NsiwVR1ZmH5WK5YX7ig5Aws348oUnhJ2RNWcgnGPKoT1Fvb6B7UshKGFdY45vw7JXRsNHVa97okkmNpye6PtD4",
  "key20": "5Pj2TkCF2Jx1Z1EcGDdNAVkQ5VUaXJvXQAKg59nRujRG8GBjXJHyryT3qvhoacQkv583DcUoGyeaUwhw8thKfXUW",
  "key21": "27iPJHC9XZiz926qwr7QHwSku1UkVaZ2ZzF7G2wMr8aor1oBFgJhmDFRSNYEZA8rE3a7keEQLaRYjig8cQVXULR9",
  "key22": "3vkZ4RypnukTm7oMY6774gPXy9PfUbWiDxKc1XZCGsxixZo4ZS3YnA5gkEn2UAc2y4MLa48apuHsankcoVDphPUG",
  "key23": "a53aqfPWY8tVJ5kkSvTwEPWPikQMNC5MX5MzDehxq46aPV93m1xFeJ5uS8ZC3Fbq58iPSjxXuFKGoVFhnchJ5g4",
  "key24": "3m7cVgvZYG2eRoLUC9sVJj42cVKYfPNGceXFTBK4kjHQ7iiGhDEuNvsb95r5WUXTeY2HMHYDxXgVd1d4y4tSyQrZ",
  "key25": "29ifoHp98A7fh4GRduZ7igUeRXNGovi4Ef2neSjbFg5FyGxaDv43BWtPemAFVNnB6JyjCnXikEsw37jpnDTj3GXY",
  "key26": "3bCv2mcubkDxBqKhE1MMYULCDP5c1djcSGvMuVZRiEDqJW23k899G9sh2Mo1Bzz8a7jVgDgikGBVuDp9KTFUTA9H",
  "key27": "58wgKhstA4S5gm9FZ1oDrTfTp2CaSfRcizgFhMk7u2wbiZ46Km37kQ7duX4HTgbaUQ2hG2BdAFte6UE9xeQ2CwP6",
  "key28": "FqWk5sbe4eK8QV4wiJqfPyC5NNigJ3XbVSZssn9Lrf4kARSr7p9iYq2zwquskcWym5bmeujSYAeifaDSkhgdyNG",
  "key29": "VGEDQWQuDEeaY9c6iesAe8TVjBUNeoPh4v5EYQCvcGY6mgdpmzqdKTmV7Vfg7JynT3qiHTc9mfWUFA1D6qTBPX9",
  "key30": "3x1CwMxnW5yuNyVbKvZFSZrD3CFhNUo7y7UiJx8jZ2Tq4aVsSiZAd9ogZT3sM4MgLDiRyUHHgpPWxxribbvwZieW",
  "key31": "5fHY2JCJekggupjNrRpaLM7L1pEp6pqVf3JELF8HiYJEuyv7k4T7XJF3Q9qQ1X4jok8NDn9V5j3AEbPKa63P24aY",
  "key32": "C4YV4MAX49RHHmtxjo227Pip2QqsNQ9HSXzedkfs4kdoiufJ4pYcowM2LkuTG2nq36zscTLU8YiE8XcNHxpSEv8",
  "key33": "4enMxcAa6jroycZTUx5PVN6VwYmQDXdx8hY8FGKtV64npeT3Pbfd9NKDqwrohqjq1Un4Vgmua8RQbWTqeS26RKL4",
  "key34": "2xCRTrmVcjfREp2WprZL3rPg1P6yFr83SC43M753X9G1rLDytgEM16ikiA6PM3hhY6wMku1X5h8LUHw8hK44wetN",
  "key35": "2KnK6dnzbzJVvwNPxBo7nDNACYfabynqGuH8qG17b2vQoKfuNikJy5McsapWEEEEYv2bgzvzE1hMwAF5eRkj6shA"
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
