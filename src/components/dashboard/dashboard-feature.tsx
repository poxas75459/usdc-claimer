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
    "5usZJ9RCoPLgTvRD1NPLbJZfie53DMLgMKLWiPbc7DdzpQi974XPfdAp3zjTXNwnJpEZTYnomZ5PRhfGiBTANNju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FYCq1vAtPbZXYUvG7qQVQu2Y1jsbmhqQc2Had2GPVikpEBi77TmZ3sbssxYarzkDLeLocmhqFpzVEp8sDgUc4Nj",
  "key1": "4yTxXuN7Phz7oqGTkuLZfPFGbGnBSQueP75FkPUpquQxsf8spWCW74YDKGGqtrfnW9LNScZQTLY2Wp2MooCNQYQg",
  "key2": "2bntA8ua4AUFEZFhcoiesMyEHsFEPZe5HNKHzieq9qodDN6Et5ziT6m77F1kwhzWmtkt9PUUkfxuPz3FND9c2kvJ",
  "key3": "U8JcDYfFAEz3RY9DHc9TwiL8rMAWcaLdbxTHpra648zS221ZzxN5Lp5PD4ahfWJTeMEJUYaKPMnTKo38KDdA19k",
  "key4": "2BNsmsGg6EqBLDmuGkA53oMjg9rhejdELVHgdp5ApVFX4H8VjdnRNqzcS7kzY1cy9DqWfS61vH4iJyUuGCujwpsB",
  "key5": "ah9LVsP6s8a69NWQTGBmsw8f4rbiqjQ3CfrM2PZKMJ5PGyQovmAjYAHa8pRS92oRjwRrffr9LRcBaPQ46zBDPae",
  "key6": "3TF3puYHdkzjnoJZXkdWccnoNUDwqohGvmMct6iDBL3AmPfbXu2uBhFXDQLoisKAKzBityD8j8pdJtgauWzo8Gi7",
  "key7": "2LoURMtymFmVehBMFno29CpQLuthpSAJtMjo7cHJwP3odQ5S3oBeMmhS1jxkLN7QJb7o6RHsUZW6haqQgrcorL2f",
  "key8": "2v6dt8rS1fvBARXbfbupZDfh7mBs2TXiJ8aZfT3TDe4CeYRKyCA9g6zGX94xdSnz6WBswWMPbLCXHmoypQLVnmri",
  "key9": "PmcjPeZLvDp1xaGyjKrDECfSEdwGoMkkJbyKswjCsnSYtqcWbPnW1GaEqLB12qMxFHj82iRGaFsxoXeSX7Yi6HK",
  "key10": "2jf8o4XuqDysWd2AQemLq6QYz5UEDXC9ynfLh2vnnmnjNqWRGrsx9JokZkSdBaHewsCByfGcsZ7qumwqBnM8T2Hr",
  "key11": "63CcfpKBosHJRu8c1wKXfEHJJV1BesPqU6TAR8PxNboCbvtiECUvXA18FKRGv2WCSvkqx9pChfrrLZFS4eboMTSX",
  "key12": "ESkDpHp2Fu1jHaLPAXcUTXnCWr9nkGk4KBfXRz9Kphya6MUmrJq5HDwnaa5jc24Xd2UBXSUv2sSvAQAmDkj9JXh",
  "key13": "62nKV8PZbPm51gLhVkJJTr9mcL25LhTh8cmQk1N785Tje2sKPXLVSqVtme7qdU5C67aiLWis4PsUmqDvaHFzqbMg",
  "key14": "2mYmhwqRDDsqsfQCyzk8WdhjdV5YPYa6LEd1om9HHPzNniNYWanmzVjGwXkzHuhTfmaSaH2cHbWK6xrkigen48Y3",
  "key15": "2RdSjJyr21wmP7xGpyzYTawKVKoctkov1LJAvQRd8oSY2p925uPjnohPU3WqQzYswwEQnRk7FhbKC5cdP44KjYcM",
  "key16": "5hZ8ynnkmuAJeVpJ8YGrSyDKxtx3vbWxoCsGzdq1qmQCBvcGkS5rKuxLCGNvESsUsTrJN7qiGPoddSRB5UhG7pko",
  "key17": "2BxWpW2xKXVwiKHYvidLQCmZt1Jp7gEHbwoYUbGEFmEw8txf9NwA9hopVeEzssfgLfwfpjW16hkBeE72ANNe2o2u",
  "key18": "2sGMZPYmXMs2zJ3yFG8kwKE5Gw2TNFoZ618zp8vEktswX4mWNuxTzJ2wTYVMPZVaR9d8aEK288fjRGMKCafMEVBU",
  "key19": "3Poa7cooB8Bw4vGcDqvRSfd4PPb784hjrfgSeTCmWQkUeMoXxMrqpaVvScwEQGgYTWGGMT1w1DGnSfQaRg2ZA6i7",
  "key20": "2TH7esgnfrmSuk4dytbASLgWPmnk1CcB69qCicpRpyfynzJMHDhAtHsjE9FYifmEN5J2MDwPmRksWu3vwQaPYoYE",
  "key21": "5SGrLQZcFWsWEMqFgR3X68jbFtBqv1Wvf1fG61d3sQb4u5twfVsTtay9TpETrMcHdZvXBRvQXViVS2NPVYjXkihG",
  "key22": "PiNopjckrbdZS9Uk7cD5CTmQWZAfWtmvCG6gxeBzU1tbxy4kMqVsmfwbGYtE1pS3zuzsZqr3cPbXUSLChR4xSiy",
  "key23": "CJH3tSEKakaan2FJcPcA4wxVbFC25dHyRQb228oWnrSAHqwnQWyTep27Lvx7TvfxtMTGf5Qbz6gDGiHQ5iPPZLK",
  "key24": "3r9PthJEu16irAZNVTWNWGhgroUZmzezdwCZ7EkUtBNTmJ4SB5TGgC1kc7HGCYtuJR2rb15nqsaV6UBNqfAmPmBD",
  "key25": "p84uTW6hbBV21Da4nfPJPfNfXXpBZzJAkjuvpNyyXifir9KZjP371F6sA4k8bweWQVrQALXRZoeZVBEbPYJwy19",
  "key26": "j5EWbqSYgLJdbus8jAYpW9KUD2k6HgihDKptm4Gyjud8Suzz4x8peRWKXogWB4QRDShcZ315zYaHN67287RFyZi"
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
