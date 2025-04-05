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
    "3U5P7VTkBSmmv2WkexS8oD1R67ZRXgL4UP2nVYwv5u9CfTwzHqS2PDqo53kk2wBcrJFQXn4my1iyCgmKAwWg8JTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J5gk1nRebRHfMvvAWTz4VFqaNaAQ4ZRnYkhGQh8J2Ps5KfvZd9ridxyKbGA1WjHC7t4EJW7vnfQTMCEmcYg4mhs",
  "key1": "9bbZNqQk9mLgFQHUrQC79f1B7TVryrpWmZv16pxvAHkbe2wGxXhyorguRhNc1YjSpTvJ64Rxttcy6szBR9ZqyNP",
  "key2": "34z1p7T1MXQjPt1wyz8rDrNXsb7DKPP2aVCsBGM8it1pSTMynZ3FqgwMfvn6u99813RnYnUKwZvdcMgrYAwUdaTE",
  "key3": "LrDjEEzQFcrhdZqMQ1SKaSPCg5yHMdkKVXB6oUzVigum81VccyaRBJWNktXLX67rxn5bPh3UDEa1VazG6qN9yB9",
  "key4": "BXSBCpYBMVfF9S2Y6SE53D8AyuHk2JjbHXusFoPkbSJ4SXcu52EoWM6DR3AodHcyunyPUir4Dj7smYnWGQMqBDu",
  "key5": "257WWi6fLgBGGWogJ49yytf7WkVCSn171ir5sGvVujoyFaYxLVd4P2WEibK2JKUWChzKD756pKVcnVZVpD2MQg22",
  "key6": "5zFq2mqg9jQ4rWgCYsdRXuPGko3u1qD1ui3mzZcwhSD4yvg9WTtzPFr7t9kQiS3vw65NV9VCu1UcibA2fmmTwCAK",
  "key7": "37uok8y3NkqPDBofRwwgyDEigt23jRK4KP6kmHhwtg9ES6Mm7dZPiwSQKTWpKMVvaoeMZLfsAZa5tmkzzANzHB7y",
  "key8": "3d5VqWKjMzNYCXy5YCt2KB8ZEZGMmibRposhnoCEFPBsyDR7wBNfMvyURAymWhQ5ivo9mCPcuh3gxgyfqneJZV9y",
  "key9": "2V3vvY6KJtucrGbJPqVgBiBT9zSj6Dw8rxNP9AEitAbG2m9M5rf3D8qYMHAEB9RLmMxh6gKbyMgXJMsmWBX5YYyg",
  "key10": "4xUNpP7J6L1SBggorJTDfAzUqgUDm1P6NV2C2G5uohbPz5rCSGggEi85ELJNStzQMJZMBg8gYUauygxPd24PwiGs",
  "key11": "2YtJUpz8C8Ar1r4QdSJV275bpcHMZGmFvvFsibpzGt9bEoDRpEYx61u8f86hWC7YcvoLL2nQx4WvMUQzUqYue52T",
  "key12": "5NRKp9nA1xcTe5mPrNSTVcxwn3QbL8U4b7Qkn4uarESLEAYa1jLjnST6PXi6iT6L7P5Kzb7kGPPExsNJivsYM4TK",
  "key13": "9AXjTpnrP1HryefLMj6adraXTTLCQVuTMQQHB3LT2KUpk6gNkRpqtA1ZAUxpnAXsbFHzk1tzh2EvCwsarb337Ji",
  "key14": "5HnzCD6uS3G6o9RnE9FWDxcuuxVA93HmVJtcc3pj8oMUmoxLxeRZ8YPD5heuhoFA468ycZRKTU4kTfmFL66Puz47",
  "key15": "2L3zhD73nFpakYccMjcYUpKx4zKWYzvtrqsSH93qNG3t13u56jxVfuxeRTfNDEewkrJ24y7Z6nEeTbKEaonPurJ2",
  "key16": "bDUBGQX6SauMaBVaFvwFE9H5N6XhGWzHQuuonehvkXtv2aG1HD4Mm2z7pgYs7XsbWP9381nszW9aR3vwALXEFpr",
  "key17": "LnEciHLU7vtMrcNQwvrmfNWvh5svZmuFHDWiDqf997pzzyrdhziADboRXx5UeWuC84vSS3mq5syv43xguAw4yrs",
  "key18": "xWE3ML6B5SFNCFpPjupqoSe9eBz64dmUVd1bCUj9dHuKNEcz5Ccm7Qtq8d6Ja8rQ7WM5r3Fgya6K4RACkqxPQr9",
  "key19": "2XRfcgm2SA3Px4AVMeUyBYRzix522BZgUet3uQJzMo5mo6hMRWW8JL3JJWoNb2LupkZhM37qts5FjHUWZAncfgMY",
  "key20": "4tPE63ZU7idLDyMQtG9b2peF1BuzWBRYGmfcQbZAs3Lg8q7SNhd9avMRAaB2B9MyeFLgd7Gzf71zTefe3CxJwsBn",
  "key21": "2y6Qb6kpJn61XjBwL7bHr7oRpa1Bvew745ZVuzFGayjMBi8pTfcYV2XxraX1potfoKMGtTweNVf8ii98GCmZKxHN",
  "key22": "4HgtQdzuiyvBpDAh8MfpSPC91REcuYnqrz6xgEPkTLC6BDc3SswbsMJi3AXFbAZbf6ZnQ7XMdHQn6vDfRCpTw4kY",
  "key23": "56fh9bMJc3ZgWcEQnJ1w7pbAJfWfH64wihSVpmvyDJEvh9QNYtFcvLzXgcvHsCTf2t1TNdcrh2qevtCr9DkV7pZR",
  "key24": "6HUA6TMXLNhjfuBxrL9g4eSYpEYhGk9CBCgyHUtRaStAkdBH9DFG7ycbzQS6bsSkJpiZm3XjBFY9k3hjhCRpMu7",
  "key25": "53DFzXjyjxCXyaAgeH7K2VEbdU8Pt5weZnLsRNRAWQ7QWN7mmi9RuwRRjjyEZicom5ur7xxJZEoVGg26h7CWmoJF",
  "key26": "48J7gGQ6WeVyxxSAzfS7odqesojYZAZHySYc8PmDpqna96uz2U55QkSPAyB17V8ixpaDCAsKqKJ1nwdri2pbKEBt",
  "key27": "3nfY9f4MvqurYpzffmFPE8ULrRNJTqM9Ex5vw86YpBYZmfy9YL8hvFn7gWUcCnHc2s35DX8P71zwcwUVz6TcWqfr"
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
