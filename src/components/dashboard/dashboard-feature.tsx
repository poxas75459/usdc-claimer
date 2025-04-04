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
    "3TML4uFiENnwEEvC4kn8AcLPySYWA5Yz6RwVEMrWYpZG4FGYVzH2WgBpN7zJHBFhGL7TEF51e5vZjSVBtYsrCsJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vjR68EwcqWEMPo8mSu4ugPBvGxorUuHvWzJre9bN75CfPcDaBcfhw9A9EzRo5BZVMQTSKEH7mFYJBW7iAJJVmtU",
  "key1": "28SVBxPFq1ndoTTHuFN3jkDspBtJFFABK1uf8XwKJRY8AGCDFbxQSWFRs4qgXx5pvbbBaxThg8BrbhaMzbEqDKnz",
  "key2": "3eb4a181a2soGqdb2aqXJvDzt75M3TXdRmUT1va2ZYctgLqLZ6mtC2G9UrKCs4cxRcx8AHHCWxCafePPFBHZzjqn",
  "key3": "2kDeZS97zZbVXmCi2qzb5A9b2FHAxrXE2q8ByNyCqG37unAjLQTsuowYotBu2jgYj5Ja49YbECtrQFm29hNsrzoo",
  "key4": "51B1HKVbCqyFTWfE8rPKqk2MdP2rew6We8u8xoVdbsGfc2BQE44UWFYDGwvt6gbrPvTM24ngpczzeKqkZu2QvJtu",
  "key5": "4BKGcg9vdjMovSekKNipGZ5hCMf1j14fPGgJaG7XUVxKbPzeGWe21hhT6ghTY78fHiU1zrG6eZ7invdNwwuoESra",
  "key6": "4BnjiyhrR5skLQKhTHqmsmrfMbS1Pnz1twJ5b3ED5fu8RQDDcGANV9eTpQcFaPhFQopANbe9NnEQAEZLKTefMAes",
  "key7": "2cwx7iHCUgF6RNL3YZiZ1MkHX1YcVAdv6VGEVfDeMrYKi8QcdiyKZ2YUwcfH7bLK2PhrLRVn86ZCoEoQLTAn8BNx",
  "key8": "4J6r8Np3mqAT4hiHZqx6WBaWme7T81HUPyDH4R4EdtpVDaEyUriNo9oVdyHvjDGPPwDsGGGyyXibDop8z1ENkur9",
  "key9": "2Dxen2RvjjchQ3ZQfhe7pfkdN6rPMfpyT5aCzyNoyHH9WJoDiZS3cd8akYXydzrBVzzrwnPsnAuJdnu4cXvyURco",
  "key10": "4FLgTxbcbJwsBfk8UKs4voWev9oCHSDqLcytsmmoMprr7KBQJd42PWE5YJpFFAFKmgXykx1MHMQT9bw2g2HTLL5k",
  "key11": "3TcFrHxwPZ4TWTGEAd4X4jQRZMGQP9tvYwD9r2BjGPZKAcETsTrNddRG97T3xvCVvtTW3o4kbhET3M8jCVu9xc71",
  "key12": "4hSYdExmdyeP5h5dQHcp4BYgtcWbty6TP8wkqifzXW9gvVZPj5dPXDJi6snjDiuuYVsk9SeBhZpP9GHevSpP51Pr",
  "key13": "2ACFs1iPbvq9u3AVnHwjmWW2v8G4ZNsfBjT1TaWQY1FyxAzHsmVKSunqaaPaRu51oj216adfDyosHvPfD54GWVcu",
  "key14": "4URvgpCZdcY9u2CjAuY1G6Chv3LYvYTY1UG2WoZ2UTCpYqBX62qXbrsStcqFJCi2Dp8q6ehxRCkTsQDdkxBWcJX2",
  "key15": "2jc3bS9UaRAwGturUnBRk7RtQa5WhDq14haAN2xRsboKQKQWtzANNTpovre4b9XpRweSjcY3nEnwhyQUdaYGZ8FV",
  "key16": "2HSZDrfnH1ExD6eM9UdmKvRqir8UyzXMGxhAxtg7Mgfm1zCFPvnjpKKaTP88Si9CF2XG78UBZqV8YAPzyouQRcw1",
  "key17": "5UqzCGCr3AGDX4qPeoMJE2THKRcVcpA5m39ZVDVrAFwUVC712So1e2341SG4ibUTxu964hJc5hbnoLetNB4feRpE",
  "key18": "3sniyQKaoFzN6u7Lpu1kJEduWcPypsAd3rbRMi8ok7Yj3JVtZS6qQ3jgE1ucqZJ8CYpuzXzecX1pWcBLzzcPeqKr",
  "key19": "217yZKtRTDqY1KhAvs1w6FdzfJE3h9YyVowM3WciMhH411FB7AujUNMnhjHyLvAV85FuomtFdnBxxZwMifDonmkn",
  "key20": "4xUksPSX8nRTNYdyL4sw3Se4Qu4L8cr6b6y5jUE8BZYauxiUaVmpX7JsY5pM3bD9Q2bmox62kAmZmAZVKH149F95",
  "key21": "3xRhvaDF71N6Xz1aN5fp8mjYQQvCTae3UvYKnCHRJAzGiq4LEF9GZ5P4ff1mhNGpgnr5arzi9QVKGK3rkKA4qLDr",
  "key22": "3XSttwz9bgEPs1hXVUJsqkp7civEQ65xfukVgj98BqNkVbnPSE7XT5yPf3NWurfHeH7tgPdKeWyxSM8isszbBj1",
  "key23": "4dnQyU4PrKS5XUa95fwkyyikEo5LhVPLyg12YNy76ZJi9mstPspbAwnwQ5zRXufMVwzqtQCad5tf52N2Y43SuAMd",
  "key24": "4PDpdGz2oqsFpaFp7sVaUDR5kvMZukEM2A47jJbsRQV3cajZyWo9t63w5y1HwJgguio3sjT7WcL2kMAK7LAVRJQX",
  "key25": "PfSHjW62caiUPDAsamRfFfdc2owuHrR35ASRsU4u9UctfaoSr6VkZqNt1e41Ynx9U17t1Bfe6KpvHejVDGGcsKA",
  "key26": "3dtvyVcj5QWjmt2mRMPDQUbRRjG6FtgSNRSKNNqDd4V13WYMARjABabuHCtkTwPvjSE1JxXGsGth6aG3miKXud9a",
  "key27": "3YSsSUeBbLR8oBpyX4KybNjMuCkctJqhG7Ztou9UgKWf85hbm4MLuE3AmN8DGPPMr1b4TtqrKtStfmK9hpFi69EP",
  "key28": "26zzaBZBhsWKeQTTK3grtfnh1BVbikSuLYVPrEqLvz7AHS5uFgP8Gg3Z63gQ19FxXkrQ26R2Kj5Wjm213DSarQwk",
  "key29": "pR65uaDrsm5p2pv1Z2Mw35obS7XvS5Yb5HsPQf67MB3fA9YUnjSd66qrkrt1EsxxF1wkALiq3oFJgYVbnb3JPpj",
  "key30": "2GfP6fapkV6ivnDHHSsvjYFWMKiNYLBDbYrnRJiSVEyGL223FwA9p5ZsWtima17dfjnYBdoe2SrYvo6qRX9ciVAy"
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
