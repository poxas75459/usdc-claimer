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
    "2TSHhJvyivVpWUmw94QguXRo2PBExk9iC2yaP8bUZkajPemA7c1KztZDJ1eh7X85b9SzhXMehy3TGNfhZtNk4wJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n1ujGpNysFXrFkxdbG2avUaF6ws6HnVdXHR9ysSVV1c8cuV8UTgnfSE9QkbBoSrU5zozfJThEf6H5FRzXpfTUcH",
  "key1": "CsuFwWdvgE1cSFuicmhahp7mssTASWy7v8bnX1ptTEYD32d73DtcJtXWa2gysPEb7XwDGvEhgsuCA5JBHFSb9Wg",
  "key2": "3jvnnYYMUommaEAr7HNhaeP9AVD5X3Zfz49fPtLgHNu1emZyx1adXRkKd3w6VASTRh4odnEcHHfTeqdHrU6kKfsS",
  "key3": "2FyHMSok17n9qWQTUJJpSYEn8AqGSUsACpPUioEguWWKLPu73KXvAEGcRS1fMQGfkM2JZBGdZKKrUjjHwG2ck8wq",
  "key4": "4dVEf32CymjTVBsVs6ppq9ximdxsDMGf6Q2Xbyaoxqd3aNkks3v9b75HGKoBVoqEedBecvaVTsAZRaGkvk4G3M17",
  "key5": "4PC3gh9NHxSrS92hXvvD5SLFCktf6iVB5V5u7VfrFqKNGqNeJZ4vgbdDo3n7X1Pznw7LxuzAi8CXQBeDUU4Prkwg",
  "key6": "48XJ5jwkJhhkmKVxM3dv5tKtoqrWViPjEtyVJ4yeSYFCVmyypH8NZJSuAxJT2qqUk8SKnV3zBF9tw6wgjjC3yxKq",
  "key7": "5YJeVWo2bGfptaLvH6iLYqeddCFgD1ej56YEBQYHZqPBojZsdvYL4hDeDJb43a9yYGoJcEfBJHr2qFb6X6BU5yMD",
  "key8": "3rLZJNyDQ9Zfgf9rHiLz9r2HWjbfVAp4GWtLoCjUXMtXwbtdaU8LsDFjCwetm2WAxwejfvExNY76MtTs2BzDbDAK",
  "key9": "59sBQSiXVNqBiovSxSxvZkd8jBe2nu48BJhurcd3DRvtKdybgSkX5kYRcURRg9XZke53BKStagLxVKZRgcwaFB51",
  "key10": "58QpifVGA1myLjde2tGoZMTW58fNFz8bjRdNYHMuUjUJuyfS4JBNLJYnxreFopCJYSyhVv2PASmrrgxg6RjWFXC",
  "key11": "bQNNSmiaUFCaGQdNkdc5ZJDkK5tbZLy64t2Yf48tEcLEa8WtBfgqxtsTG3JPuEr48T1VmfygWdB2PABz3xircPf",
  "key12": "4afmTLvZCQjLram5rbBG3ixFBiq2v2iBPDXcxezGJaxUpArhgLC2xfCmwNLuZZBfkEMek3G1sBgSPTULVVbsh2y9",
  "key13": "4EzJUbV517Lqun95vRuucVHfykzpTnqc6GGRgM7DW1XkdTKdD2PEzuRunUrYE3hzafjWwa8ouhM32KSmJ8MiEUhF",
  "key14": "3nbjNGafpGwRqx79DmvQ1gN5qtjUcfRH2t8UykQ2LkKnz8AEQJrLwnwwsVTteDPnvnTXi7wpHD4cUn6cbizN3nhC",
  "key15": "2pzqbLCCyCdGG4kv4RJdBAt3WGP6qBnxyBLUFr5XRgeEpSLunSQnCnpG3wDfhGXH6HgCE6fMqWbnja3XxRvNpsA5",
  "key16": "4dvE83HEtHPS66B3suKd76nwk9iHtqKNK1GMdMhmxQSiLUy4VS3orwFpuk2SqQ9Mc65Z3q4C66ruz1hpH4eRH9Ur",
  "key17": "5298pLYM3Jqg5erbJywm1U2wmE3yhELbi3DNkUU1CdgQvJUMmGcagBmfuM5deieshAE3deqDGXZZdFUQE48BzC55",
  "key18": "2GmL6DXMr1w98oGhUPSL3UVgjYZTCXfJJ8g9qk2vyNgkLAF9zPm5WnD3dDa3hSYb4S6a5bHDeMSuVcem5ArTJUwd",
  "key19": "3bE8AM11qKUXd9eqnHnR5N2MMCQSYbtLeHExNiNfknxZKZsnGUyteccTfCPx3sHpMc2RaEnrwTZj6cxCY1tRvuvw",
  "key20": "4hqvo8SwF49TFdF6gXgx1cd97f5YYMiTDpNi4B3rnM6i6S6eCQfHL7RwtVAK44zBgpDiAeV9dgWA456jCzyFuNkz",
  "key21": "476YYizt8RjsaLueArHJTtiWzQH8RZTPrQxAEuRs21KNRnVxcLwHtwtJL2BKawmEinfxgt7GcBKcMWdUWoagWWp4",
  "key22": "eVQQ4hCgQD42BBjd761He2PVtzT2DBxW6w7kfQR9R6etasXdF5njLq1BJsfjc5txtFgMztpmHHFtMt9ET5K3Gmd",
  "key23": "5s9MwkzyNGqmfL8vd4sHzK8WoEru1VkxPVFxZUoHDBynuBmLzxXS2gdu2XAxBUwj62xTXm5HZsLyYTTQN6B11eoy",
  "key24": "5Bqaq3rS3sxWwWULC1n6zDzPEzutwxE6TNRYvUcKA8vF47YbnRXsnDHftTsdK1Q1LvM6ZGHeBiwjL3A44FopE2is",
  "key25": "3cCJVKEjz1HVfTfAEM9XJqfmGwV5d37wB8P8dPx4Cky1k5PfYUcqxipM9B5ZP6XKwTQEXC5VUMjqxPjH7p3HoWN6",
  "key26": "2beR6ain8cubvnDHXmnSAQMXdYTwSSqUja9oK7gfWiNgyLYQU9BzRWs9dSWPbHAzHXCz8CgoVrYdK7b5dxHsysmm",
  "key27": "4mGgvSFh1cSKwhGJYna5vAffZio47jUCjVUFXVz9jUs3vvuMRuvS6GuqTJEgwomDATWCF3ceiyqfCuNhECQrmJvu",
  "key28": "4Z6ntx4yWBwizdtbXUjwNUUiBpKEdtTDbtnZesR3fmjYCc9JbPFcpGGSx5ak8VRPWyZfqqC7T8ShXkVQhnUgDsyo"
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
