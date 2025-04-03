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
    "3ZSWtXzq8duUyrWGDCfNqHoEH6V8TpV5nMtiFnt7oJtZP3F2ybWwJzNQkHknrkw28iThMnzfgw5Pyuqo4xR1W6Ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jKPY2esRrUnRALWrVKhYF2jF8epX7nKDzLHZLMrv2fz6dPV7HFb7Yv7kidsZjaTfbMze3Yy9JMB3svkeLQr7t9a",
  "key1": "24ehhySZesQTR6azujrWSF8CnrwBWJbKrRxp1SM5zJZZwkqmAiQiJGdJCbxXA9Fh3eLAj9PiAfS9Gwp37C1EZhCe",
  "key2": "5jZkXiuXAmW51bVW7eyHNwEf5Tuv52UzZpMzmAxTejDvthZsEHKuXv5cGsKZ8zzfkJwHV38h567SDK9uWYCSh3ZG",
  "key3": "2zX4o9tRZd5eV8CgZ6swwFdTsmX3mKnDBvDfcx1DY1DpYU63iRsm6FeWzrLQg32ggRXyWhSYTXEFMUohtxDqusAh",
  "key4": "3S6wFrmRPfxeP4BHF7RqRU9rpfnS8VxnUkivEitdsqexsDb2mJ5ZWHu1HNaiQQvsNK2V37p5DabdH4Podj9kH5EG",
  "key5": "2zTumzQFzyMRjW8GAtRcqty7nt4uqTJwvJKmcc3U19DgkXXyjqxmBRP83HPUG4JVJHT11PugQToDL3VkAnRGpj3C",
  "key6": "44ybCaE7iyndm1nGjWPvZDyCkz6XgejDB7g94NxPKexup88C9Mye8Hp5cLndpdwLQYBh55LSTbEQ3c3pCC5qQ34D",
  "key7": "3KcBdHjsEmVfy2d47KeNYvRfu9PnSjaoGGcpM5pCBLydRRnebJMaPgtrTKHRvNW1xi1wXcqvQNg3ANWUTTu8zzk7",
  "key8": "4pDKqRgMTV5SoJQMCH7pLsRHrTeqadRziX4xdLwkEXUf9qUYn7fc8XV37hKsjA7cjXdKhhLkEcnq6sXxUntQBCj6",
  "key9": "3UzpVbunoJAqSL8jkxzBogpnygpECoYzSo8iFJPysBDoxp8xq87AuQmRpMpWHjh1mei36H6KH1M3thJkk9CrVCEy",
  "key10": "ZjvV5nmnLG9BhmQZtN171RTFbZgV6vozhquWned34Aou4BpZ6ggbxWfD9dZPi7EhKYxQ8Fc2keMA1ukLZJCitaq",
  "key11": "38cDHouVFzZJfufHjWHKULNxR348nkU5YneSSvAPK9KLeBRkd6Mc9PvHnMnpdtUJNN4naqCRjVDUL4hgaXxt8MoD",
  "key12": "4CDcEv8NziwjBoAznmWWifRc9Sdy3XoiHRJ5WZEdmDK4SyLngYhVKPwyFsmiHnHBmLvyi6yBdZ3Lpq9oRSuDyDoe",
  "key13": "ZLwTk7aHhYeABR8RhZA4pB54CZp4EN3Ew2T9dpCgSkfB3TAPu6e5jTnsohSZHCgmMWjud5HiikDBi7N6VNz7VtU",
  "key14": "2VFQS8NMtz448TdRYZWYZ7cw5CbYKATHZnQeeELFm5Hv8R8M6udCZXwAZev2GaCZ7K8pfdKS76VDdQSr1WW2udfv",
  "key15": "3vcCTk6ySSSKhQuvnJqsarv62qgqVYy4Qk3RVLddqS4AuC15YkRd237HNRTYARjbLN5QG9YwQ8ZnUStBz6NeGb2M",
  "key16": "31tBiEH5cssaXnVF1YPvzZZco8jS2p2ptqfRkKscxYQNYhNnL2ShLKy2fCxRn1jLFX1WQBKAmcT8YiyjtAUv3Sh6",
  "key17": "4gPPtPB8AJfwgH3Av42jwKmxqN71hQyetZLAz7AR4XRozFpnE18ExWa2Wh1NHzHRAQVyS5Y3FCkKzyr7AhQGVQ85",
  "key18": "3rrcnsHcC7SxNrbp77m2Q2mtU5u9Q6u4pi9JewQVF8AwRTvpQbQdGQ94H8iBZaSSbQwPitK6Hdz2Qh4KWbY6m1cZ",
  "key19": "47zTocshhNmGBWKG1Cv7hPwtsmw9nGdCGLMd2mz2oXpuFxAw5pb85rVjqvmuM7c9oxEnyJESqudfQUGJWbFbftBD",
  "key20": "5ZsgDogQ8RgBceeP7PTwzrxQ3E3YW1LkmqAxnmU2gofUTwmro2RHAxnWSJtiBed9FVQakqYDFeew6DPCDkfboXnM",
  "key21": "5n8nJ8m47Z3xEiRrRA6a1XZQY2Chozxs4oP86tWbFPXAEYuQhsWoHqAoS499FPnxaZHXCMjXtRAabDF3ZDjhtEkK",
  "key22": "jmazZ53o1g6jwJf2gCi3VepGH9x6pTFqpsNXu33JesfEuQUa8Z7GGf7Y8Lkk3aajAGQCbd3zFRApTAbdBiEbt7f",
  "key23": "4CCGeqkyQSY3T5z8gSAduCXfDTA4aMc338Cnyrtiq8j9EZWaA6vsTozifLeBsCRRbFHAJcf4QYCW9d4WdjmYuhYx",
  "key24": "3ppKnqqohhWy7mwU4DpkUmYUaAmp9nyeC5YH6fd36C1ZLM1AXAYc45u1hWNNfwvLmc7TQuYH1XjC7Ri9vJwtCM4M",
  "key25": "26daznPMmkKPskzojkp9qT533LFdCqDCaCUSQzRwQvr5h4KhkmtWf1ufNq5MuWgFLY2rfdh3oxcK2igZg7PUjr4G",
  "key26": "4SXuAo3uXpfpMyDcZXGojAVLkqKos4CFKfHjDF9J3HRpBWdLHz7xPuCRYomSZXH5hite4brwseeDy65BkXEdV2AP",
  "key27": "3ZodsVwLgTUUcCLNA8c3CGgmKwN576VfQfkXA5Cm9UtouXcfY5v5vDaZsqNyvgA9HD9QnnXFAqPnFTz1jStJgs1z",
  "key28": "3axA3VNCraXjLp7Z8vSeC5ZLs4UzR6EeVncoEvg2PAwKhEdv1jwGCEJd9xZ5aRa8LFZFv7va4SFj3xk2zpGcr54N",
  "key29": "597KU54DNQ3aq97XjVm9vjuoKNGtzzD796XumfC8fWQavxK9LVVhtRFNCAB5iqWUSyJiEccdhfHqjhHEXF7zkKLc",
  "key30": "3rkcqTRyLPKZdm11gNRikcmbzrZYZN5Y9uVfuEogHZpsJsAFjZsML9qBsegSzsqu7b97WBUeJRip7NTdsMeW9Qvy"
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
