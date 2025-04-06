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
    "22ywaWRfhTa3bxao78MqiD6u4FEadvrWckUteyQhmq93MzyvxbLRNdMLHGwBphzzqhRzrKWznMUDQDBpnHFSdVbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KUe7L2kQhE96s4NZwkmqVQ8Yyp1HzSGx2R4ea7GPUdAog6eoLYRGKYxSPJVHKBZaFJGNXVZtcnrMGjiHvLtWWJL",
  "key1": "26CCD9jSRvyuyVUZeauehpGXRkupcQg9nkzNn6Zxdyx65BDNcRUJ85HF55hSQNx2rAyAzSKSu88KwQwxNfg2xC5x",
  "key2": "no3HHmzYAQmu4aAXobiPn37LPRZp6X2ajosZ5cBSWuvifQ6wFLGrnpLMqpEZTPGHUhQRp88m6gHFPx3Hgp1rUb4",
  "key3": "s6xvNZPUe3XhrpSq8V8CHgqCQVyHY666WfrUFijBC8KTD6tc6AWqY3XDepVVvi49Tj37Mrg7Dox9nM2p39fCT2c",
  "key4": "2g3cdmBuCEp8Paa5mmLV8aUvprVbY14XbjAYevnYiFQoowUhuScfhrcAbKJ6NeszQ37DqAsy3mCRTW51Pvfb1jrA",
  "key5": "4LYhRb2nFs7RHupNpFNyybNWoSJXmEFgYf4TfK2Y1VwquhT8dAXWejuPrW373wnsbE5aPiswvSDXPcKsRAXTofwT",
  "key6": "4WTWAQcYKPueUbdv7cbkYCkS7JVjguinNd52mgoXpgDKabP7nDxXCvRj3qsFUjm3qkoop1q1a9gz5bN5Y86cF3Aq",
  "key7": "5KwKz3u8PyCPkVnZpRXJcWR2p9GvrKz8K5Q6nuaF3orksTghsnkN4gvUzwa7Ah4Nu3r1gq86f1yUg5Tmu6CXfmkw",
  "key8": "2yMJLF1t2t1XgCMt9NATmexNnw47MDaY4yWxWgkoNhQgcoezekv4noCnCXDEGoGMSSYtHud921pFBpC3pYTZVBLx",
  "key9": "3S5bWxG5C1pd8NjB2tCxqbT11aTuEB3RX7aE98fs8LqtFCGJw7mU6hrepCRWQH5PQ2WBDGCortkbo8Z8f5w5uhGK",
  "key10": "K9YBxF9qBgp6FFYVQMKz4khBVrzBkkFz7k2cj5gGP5up2GoE9QKa5cuTVvBd4zHgo5LFFLcbQm2iXzPzCgJ2GeB",
  "key11": "27U3dkLA21Za1Jmgtmgrf5Qg8GssvxJBYSZZPi7RJHitmefBkceTJHaeRpDZrX6j5Tp5nC9i4aY9Yha6RJQMrHNK",
  "key12": "66FAjuCnVxAA3Y5DXepsWfGUNS5APmH5G4CFyAArppTHvMoQLZ4wXFzzs5kdSLxigt2oNhC588rGCLi1o6fgDVFt",
  "key13": "3kLPywJmpyeuTgdKHHjTtcqoxzrQAwxcEVqyHEcDYqVY3ahkLzkHAMEVPqyQWSovQnB9EPjN9aLd8FLTpHPrezB1",
  "key14": "2m1eAVrFbnFLq1S6vGLqfELQUUgSMH4FPF1kYMtg4trsAzpebwhhVvoX1sS4MnZ8ujQjv2m7898sfumL62BhncNQ",
  "key15": "25S1hJEZKMyaRBT8QPG6k34mVzJyqFkFnN8QNSsqqkVNceNjJh2CRrdyd4Ybw9WNUN23xoQ2QmBijtbb2sL4DDF1",
  "key16": "4CVPmFdxarVUYvN5bvmnQVGmBRq56qTWWbWaXigRWRvq7HH2gQgiVik3pHFy7FBus6cspSk7GmUPJRQ96ZVtoWxP",
  "key17": "3rfD6yGQUrbygYNwYxg9naqQggg3z2VhFbvNwrankkMCo3VZtie3ZiHTTcdtvUxMh67zVPzSJ9zEA4qojpHJsSXj",
  "key18": "3qsWP2vDVynGRb4VCCPaxdtZdkLYGPFPXL2VHqVo4UF6YMdWaqQFhhRjZoQLUWUF4kzQEWPm8Xckgt745RMY7EA",
  "key19": "3NQKFRzxhz1B21qY2pcd4qLik9FJBvgukUWmBmWQbmSw426SpGw3FxRTMoSTZ2Qr35yXT9AiakADWDKMckxzHnGb",
  "key20": "3TbPmQBWG97csEeq4RSsyUqM5qJQTtVPrhMNhHFnVN9fGxYBjT77U3qvQRzdvKSjygUTHyi7EFmxWasiVLRACnyZ",
  "key21": "5UwhkMkTaZV46ghEwFNgpRSwP3zyJg5bHagxoCXhCRB1rprRUaqq4SmeoSwr9ZBqwJ6iMcXfLaYuumtttp5ewLaC",
  "key22": "2TrNZszPjVvHBHzjCTfTwsHBUmPMURjD6SFKJwcTWcqwT1hvXkhKcZ7zCaQSQmfwAPtCppjP1mo7LV6T7VjJEHZB",
  "key23": "5KhiN6Gz64bwGqm3xFxa6WvfXZruUnHj2aKdXfaiNQV5MK47cBbgVXD4AP4A9Vwqc2g4wuUL5JHFK5vL8tE7dqVF",
  "key24": "79g75ZEB7W1uMWwkZGA4F3AUmaGqvWqyBD5YwmJgpj1uyQkNVLYsGzR7a9DguA1PUciNJHbFCnpLZeTbUf7rHTi",
  "key25": "k9c5Mx8yj4X3MVdohLmJ5awpLcffCoXC7Ki83wXgp4aMv7QWRgCFXdDWwj3CwNv4W9enzv2okA3VHnDECeHrmJz",
  "key26": "4YpDPxtgYYobf24PTa7UvoRbC2zzFCJY2dfiQVvFNzCUuei7joeuPaecnL2GyXUYdT3j7iN831niR3PuS3KQfeDS",
  "key27": "5h5zQPrBQAnRCRVuQkmjNkT1yWqF84i4fyq1ueTpgss7GBbWNeJw6nnrH2YU7HpoFMM2c3jAfLp2JmeGM72W3jYC",
  "key28": "2vrUHTQUGcURmtEDLZTqEvwtv1V1FzNrVZioubTbQugMMmRERVpJraS9xRp3KVSC6TZuuLNRQePQXQLBayukpodr",
  "key29": "4syJkAFjaVeUizgJFFKnAEUkPGxQWqEcgvF4xDqfqpWtvjSZry81whMMe4MtL3cPneLQSMcwdcmNvdj2HBnY3m2r",
  "key30": "3HHMTwxACqRUooSeAcRdddnkfWqTGkUVPyTygKCgVgTreu5CKN1RrwqmrqDVUQs2QUVsx5mqFvoYczSwEEYqie6L",
  "key31": "2kczXTbxYTmXNzDWoXQ6C5cWFH7bLnMTfrz7duSpFLTRzbgMN2azZrPMamgvkYfzPt31EeVSWLPs67Lk55heBviY",
  "key32": "4uZd9YH6afbMn6fLMXoAAajJ6fRRvPSG3Aw8bXKGxTfuBRLVuXvu1kNu8rD2fzFQkGc4YshrgZS1DTfYRt8TjqS4",
  "key33": "3Gd31i69HWcBYrnzM1txdZmxYoqdPbTdxoQhZveQN22A7d1Kt4EZPaiYYtnmgu4FQj9SnwBQrbhRujMK2Mh2Z2Dp",
  "key34": "5ZHLiDT2AVwcPWTdUzZJmwhDyeYLhmhKVAafZ2ftpqffQPbhgZrGWWcvkuFDBsFjMyeWCRywkL6JgX1Rzy8FMDHG",
  "key35": "3A1t5sGkp4dSTuk65UDmcNXA8bjibgm6ZnqT6Wptci7NfJCs45oW4s5WWNibh534SxFkXF3hkhujFYMHAFFWQBjF",
  "key36": "4P3mkSQ9GhTinLzcZXFRgavEBDKLcF2wsPfnCcbkcit8t4LvdbM3DozZ9EyW4JEDFztdfSg3odQUafefCWSN4K72"
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
