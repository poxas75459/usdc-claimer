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
    "KkqJMfhMy5D1cVrkh837qpjEZK7pNRgKMhuafMSxnaaW5eRHaq3EqtHvLjokCK5pJWgaQQ8QjXNg6wgWMTUQVep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5acaVH5NKJzS3nXpm9To8szQk5unTrTEbtot26zLQ3aivmET2SE91JUe9VQekZoJhUTF6QmeVfQYAowkHdx98P3d",
  "key1": "3Ve2fruuEUWm56m6cVsZX2NqifpTTugiqkC2KtRmZ5bx5rrFro76oaCrHg5qx4ijTvwTS5Z9BGg3rhWFfuFYsXe",
  "key2": "33wVgz4kjRvztHAWdiAtgyzaWovEXZcJFzYkje1X2aCgZxMZWFvz7Kuzpy7Ux2DFZh5CJZCbNeUiwsw9v7DuJkxv",
  "key3": "3H5LKoqBNwtMktiEga25NPVP3jcG4qcK3JfqdvaAceaWBqYmioF3QM3SfCwE6wBNAgPVm8DQpJkQwFSqjEBMcDJP",
  "key4": "3RbWbU9WyvzGmYkDPFumF8s8HkSNAiSVh5af5SFSTpQ93VSTxSteqBVQbrKD3QQk87myumN7FSFLey8eTFPwUTuE",
  "key5": "5dkcuSxQxZKdVbdKJL7SbUScYadY4WHpQzHGdSZXdobkbyFuYrgbvLx3g4F93AVfSwN1u5ezvU74XsJ5o8v1bycC",
  "key6": "3qunnJKu4DwDXw12yoDU14wyKgETcMF5TCAuCMKHm4vSZr41kKD9JxraDwfxwL2PTPUQgJsL5rojVjuypCTiwqwV",
  "key7": "2gxw6TDSK5HbKuVgAHMPbV8LE2r4RJhgb3eU1MomjXm4SF37vAbrCY56oaEVnW3Jm7HyCEddAuJfe9FW9TFwbgKy",
  "key8": "2vhhBooX7gZLuWHCKkjxfs66weQvpHbGq7pvYrWXrddqWZTYYPKVg9ExECKiJJHujci4SaF7BndR7F9gAB5ZsuDW",
  "key9": "5sb55dzKuZ3qMXH4NCwyJbqL15P2CCMDhcJsonKupT7Ph1z1MD7aMiaekEgJJEbi77LoirNoNLeRH3RnCcCAP6B",
  "key10": "4KsWSUHxSUSqJHbne93CTG4h2HpSwkGG9yGXaX89eRi7REVuBqsspjyqbfyDqqxUeebmsesLUHxFT1pG7zga9WZy",
  "key11": "3oGNpYvaK6ECnqZ6KNHKufMgMvvjX68n6B5RYPgPczifPikS7uM8T8CaLroMUy31cU8CwKA48dufmkzUSMN5Xywp",
  "key12": "2unXYPYmcnnG8tWxMsW2WhtfW3izWhtDNwHF233bPJG6JKdTDCzGvFng4xkodZhRUaKAURrtQ32FiM7j8tE5D1GV",
  "key13": "4SgZvoQxVjUtgFAqZBRyEjC4ocL28ah7wnvejyJu8SAbNvZkCkSsubXiyGGGhL1RQLCyRLKLMJTdHPQ3Ek4YTmJ6",
  "key14": "2hth7mbAmmiXwe238JdKU5Wn9mKE4Gh92szmV5nF8YAsXV2VTdZoye1Uv2FuE6ruuxQimVxxSkpbKRhGa9fShUXt",
  "key15": "4LAVHGfgqsUguPYPtmEHGkSVUJrCJpsfCCvL3kR5oTatfi3k6Q6fk1E47qSycDmrVWVCqKtSGR8ZVUD7TKHRqF3j",
  "key16": "2ghCh7GbTTVahEyeL5YYv4U5ZxsbwSfXBScCEzMRW2oSgyaiLwDh8ZRQpKgtK1goG231C1s5fkYjLW3DgUoW1CDA",
  "key17": "2HzBeN1oNncpKaNRCnM38ECjGzJqUbaUShDguUns7NNQ1bFtjoxVCXkitFYVQtRsoEYMLzrJjets3DNg7Bxxmgfc",
  "key18": "53r2HAeRPZsjA2pkmBkpPVLsf9ZCs5EfgG5hJPgfGAZDEBZqZbNMYprnvGS3pdhUkupvMyaQxh77bBpGVem9Cyhn",
  "key19": "4TK3QGLkVYLpF2oFSYLHT2DLZMzLmvc7DNnQL4wHnfaz7eFHWZkSDZkF5ogutMUpH83ZZfSoJ76TUkJTV2WWLtro",
  "key20": "5Gkxt5CPAfuMU5bprcawX2vsA4V42g8Z2YGVdkPL31cjqd87wBmNwdcaMVBbTmvSf6vcJWkdpZag8CP8u1EBHKJ3",
  "key21": "4rKWKDYEQ3hByvjEVaq41fCPk82NkqqPHsAYbiVGCJVGqWFNhbaYWXa19ppoLD59BNq6aegHCr9y8fPhPNmXD2DY",
  "key22": "4XcaNesG1iMMYrfX6LASWVCzh15KvgYN4chpxkVFHF77WEuhiB8XutZNZ6ukybm2hrezpJEaH33hYFzsVnFXmvSi",
  "key23": "3QckyoXijzwrGDDAX36Dva7CjcwWQoTmLYBNaYf4PPTGNMe8JBSYjgqhdGdrm4PhzmFVQRjeQy2VpUPiypZkpZgD",
  "key24": "jyUe94s8zs1n2Q3Swk856NS16wSTS8jXZ7fenJLCb6Kk4ubKU8xXYcPhb8ZCWGPj9tL2sdyZcAEm2gXPTGxkA2C",
  "key25": "4rrLAmNSBYiHxJKxaSFU7CB36smSz2ecaYg8jviwdDAhsW3nYGtmPQrLeyVy1wd1SFKFbeUq3nu4w8y55HBivSaC",
  "key26": "4saEqRaF8ThXfp9uUaZTYVgQTRbCJsgyySRy4eEwvzezTXDjraXYGam19Ng5c7aekwCdoJVC9oDTtdu6qBHjZoK8",
  "key27": "2UvJk7tkUmbcP89Ae14co94X2eqFDGHM7Uqxj8iYT5gxCpXesswM2eFhQgbz3ZjasyVM7d4eRQmL6iwpHKeU7XJH",
  "key28": "2vFR9vTFiNmXyQgfCALKdaMrPKqGWRe3SeSBisvU3ZEA4GwCa14ebTFVRomYhSiEDP6AgMd8TRidhhu8WTg5iL7L",
  "key29": "2iTsxFNTJf1b84BMdVH5RnXKeUb9vrSTfwucvcnNsGgXAci6BmpaiN6YDNXST2Z73oPXZ4JzkFqksp1F54omE58",
  "key30": "2L8q3essCE5pWTGGee2MBhg3KbLbBQ3YWnYr8jF2cnpNzm58JVkwGqLgtXZWTUeqSxDBwHcRCrYEd6tvwc7sw2FP",
  "key31": "32XJS8tsRTNvxvQTkcWjsa5PCLNRGxfpt55N3kHLrJnkoTjFWs8EjLtn2TESLwp6Kt3TEhyc9KP5ELdkkTkW5L8G",
  "key32": "5JkbmxgKbVF1nTCw6zTrNKzHoo8EcS1x5856vv9xEAHeHQappNYo1XSFxcbY4AmmNVrwBLodhASxANU8aN29bhsp",
  "key33": "BRVwt8x3PhGa6BsnbCtUaersjts3AiJmQE8AjpGVCSHHkqquGyo5V79K7VM9y6LMJMPHqJ5KSQXy1S3CAnVGh66"
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
