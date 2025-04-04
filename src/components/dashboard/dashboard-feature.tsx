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
    "zTR9yUZsf1ZpbqdcTJZN9ZWdCA9RPDYhiSfTXTXKvXyqpkaUQrkbcLdGZHQopLt9KviJC6LTgQubG36d3NF61Uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SPCUxZK9coHKHFECa7e8ckFa6vWs8coQzwBBtZcd8Rg8VBkamaZ6sRQyje2yb1fnsZHpU47MfGEV2UuAUX8jm76",
  "key1": "2ytjVrkf2t8gmNVPFKG1RrQasqkinavibzpV8NtyGqFmEq8YK9UcCfALkU7yt79G4gbLgDigsAAbGFWTUodp3Wu9",
  "key2": "4xyiDHU2yfxatBKHNZbtV3ddDrx7unudiiDTVWazdHskEX8hZV4dC4R58x9TGVy1ikTZAWCK7AbtKqXfZv8a1fth",
  "key3": "4NLvEQWzrf4k7qhpj8urvVf7Zk9t2aKtFycAKXDaSyNcz3KVfxNFGV8gq8Y5YoPEyQPvZMrxko3C7d5iFB9oTjzU",
  "key4": "5zFjS2ZE4zf46NTMJiFPDGDRwtjHTnWNN25RAwVpRdibQSDTLbghMk8Fn7z3qQgXLDasYtgdZB6xwgACT11EckAb",
  "key5": "4apDoRYt8aV9Jf7ZmABQ8EBM3b5FLxQdcNVsG3NYqMXsYkWwSiE1YnqkSJa1tNeC4woSMJvV7gobc9a4KeNqm91S",
  "key6": "67FBNFUFfBwtKiuqHAgzMj3ysbp5v7d9wu7qsJA8RXyhi7qnp2NGvALZGAgjeniX2u7YhYpxr7jar7b1SHxFw1wf",
  "key7": "3vB8dvaYVShMpEDGtWm4FnWp4SD5AsQ4cz4mabk3vPM5xFauLfprAMGhm6htAuG4xU9jLouiyvvRT8yoU2XDg7KU",
  "key8": "23yeyyVCyWGHTUbzhi39cNP9Qt14eP8EDYLBRV79unZW4g5cnfq9FeMU5dAK67DhDEfRvRMxdsvVb3EsuWcgK6bG",
  "key9": "5P2MJYMDAVDJXCx5RNvs5NeHBkKN1YisyRi8tzG9u9a8Sph8w2rM8FiRyYxxzQC4fvMUMt9WXtrsuvWd7EoFdx6b",
  "key10": "2hDEYBDBcfmoNQSiFG6cLgV4og7meg8JbfYXfp3uz1cPUbXDBZzhtA4radV1x33ymm6RcTJaYSwFC8L4xK36czLq",
  "key11": "4oW9pgdEPCwqQZ3tL5n2ba1qUqo7CbjzbP7N54XKLpd86VfUJ7TS9vFu7cxR9pSLZP5uGz6YUMSFZEjvN3Ru2Fxa",
  "key12": "2bSchMhp4ecxUsszjnnGSr9RqPi3f1Jvzsk44cJ91EfLGADDvcv2V8npGyCipNUTtBa9VzrwXrLRndrh54XpixM3",
  "key13": "4cDw1gPrjkAPFQ3ZNPLKqNEd2X2qmmTn4hjNHXG1LVXr9AbjXjtgkYM8k9reBhiJAQSCUjqeWYinsuy1KcznzsW6",
  "key14": "4v1CZtQQfWPJebUYDn2ceuTthux7fXZXfVAcn4ZAYmaFdKWVqGHg28SaovaXChkeQAJh52efeq7YNw95S857CrNy",
  "key15": "5iRynPQ5SrMTwtbdVkVEPGbk2LJbuuowm1UrUZV3YbcMCDEauPCaBWiazd2XsUVUbaRLeHPKRTGzmLZU66N8dgrX",
  "key16": "35ajMEqz11W8ssJhVSDMLSFxwraBFNxkkBkFtyRo3KYeTrBtpPS5dXzfEcrewoZXmfkCUiwDjTYSPvw3uAbteroY",
  "key17": "52NxvTC7iEdyeueQRGKo1YmYejKeTnNK8bBjrJq7UtTZd9MaYfxi5urzsvv27b4sY2TEndW2jWwQVhncnF5dXtEG",
  "key18": "5qE8wN5Qnv7rzXD8nocmxonTsw7EbPNyWJuaUkXemV2rW8b6rboTnE1SsAcPJfS43sUw8fPaG8nC81QKNpXMHGaw",
  "key19": "5o3KQZsF53kzASEh4RwDxRnWfawjmMBFZwDVP6bpQacxezeibASK4i8e9AaTk9mnmuK17LEe6vGhv6Eswdxz6ChM",
  "key20": "4829S9Qe1BSZRvW82uL7D7nwAy8dUYt5FsUXU7dRea8XNwyzMWc3ZZXvhDFcqF3BD1NokrBNGeeBEvSvK1JYXRmB",
  "key21": "2kRDMiC8MJEoNx63QxkVMPj4tq3uWeL3MCkr4nzS7GTZKSXybuHC45pwcaUTG7bcKdkBpJf89Dxu9VVFrTJhwp1G",
  "key22": "i3aoFCmEVU5nZNqVFcXjQr4hURUEX61UxvZERg89yTRhqMGVMmfv9osfLg5tdunQTBX6kaJYiuvC3NGSLhv2F4H",
  "key23": "HZGSY6GVXrtyXBRyWpCTdQhxqjKcZB4Nx2WAv5tHv3Mnnu7vGaDpAf6jbkexGywu5qZcuDDzQ4fUdVdPdaniy6H",
  "key24": "58yPp6mUjBHtS9unTgTHi6eqz7PbXRwswcitfwbPV1WN97njUH7r8c8a6gXxpk8Xsdd1U1bmJFmDsoabYAhN3GzZ",
  "key25": "44SbN5E2HdxUmdTDAY2VekYtNF7mohC9TEu9kX1sPsS6ehrHZR3MBvE5MXi1Dzc6TtbFLhi52KLFGiLprf5EYJEz",
  "key26": "5fUNxhd58oF5gQHmUY9LfCqh3zgG62eh7fv3qDhjD1nKyDv16TFYvaLU1xH5CLVBQWAAAjCMgkKBDc6tfeq49V6e",
  "key27": "4j3hq6mtQ8FbtpM5pxRJAoT1aoxBdE72bTjQTdhW3aH7jHCbL1H95zXGyJyYV6oABKK8XqpZvuJKTDEupnJg4xoZ",
  "key28": "4WzaenzcTf8Aro8V2q7ZmK3X65fEDmAp9aYhi67Jzv4dLP9NkudA2AtARbaN9NTCeQ3tFbgXEpodGhBhwUxrka2v",
  "key29": "5sfcMFro48qmfHqUsjPzYCUyLrAPW718jrG2TtwZg4PEmheYntN6pFoWVETp9Vkv3BS2DhabGE6LACw4E8Gf67eB"
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
