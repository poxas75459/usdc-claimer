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
    "2npsG7MeHPZzmHwEMpMsX1pa2WMV8rytNqsf5QemiY66zuDREUkGfSQa39aekD8tDSyyjntM36o2RuHTbropndYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L36sdhZahxBzuC7TZ7ZMebRKCoJGXa3N2W1RU1BEFeyftnRat7Jroq75P4oRXFYLyQSmq972ZknX25AdydeCjc2",
  "key1": "NASSnaMV5zeB7TeSN2rSWFGAxMdkn3CELuCcvpXFC2rLM5L6DTLKjnxUqHSqg7virewFwMdbnuYSU3BhAtRdiSy",
  "key2": "5gB8RW2Ko6Bz8yyjCTg1VZEUDdSvBRbAunqJ6p5hqTmazaMnWNiRjHW3hC22gumjpviy6ShGPVjfH6kzqQJqBDza",
  "key3": "4CCAxCcsdAGcC5Q31bT4BdPyTFus9dLbnJxc6nepnoNMkMdKSRvk6mvKQ5fNcUqbFrjZtVkQx1woG1s4JmAXFtPo",
  "key4": "5dfVhd1dopM1a8GYJVurWknE9xMA9gQL8ph4HjRzgpsh2RiKBhLoAczz394LbAtQUQesrGRwYtqQy4Wf2HChC8cK",
  "key5": "3rPpUnq6Yuws3nrYbyFmRn2fqzEcoWxLR9QUVkLN1mSmEqWUSVnKhoZQ4ALteMbMhpAT8VB3YeMkG1wbnNVeFrps",
  "key6": "3z6SxZFJacmE5bvyzEUbkC2MBSa4a5G7kbkmzkX8RyPzcgTZHughLvXp5rFVtfGQvDoDVGbxBbwtH2ytS7BMMArg",
  "key7": "4xgtCq5saqPDUc5nAvorKwXXw4cRXM89mTQEP9ghEHRZYGcHts9gVL4PWJKeF1EBvwPujinL27i5YBZyhjQ1PVw7",
  "key8": "5RHD4oKqtvB9JZRfzjmc2nyvKDs6vSU131nUQsxAQMZ3B8EhoXn93F9yiskHB4XLB58jJYGkVEstxerGfMBZjkdL",
  "key9": "5tCBu4CnoKqusy3uX1a8qHqwRZ9RRMCmuMwz5SusifRzpJgD2K6Cv7VNyrXgVygNnhDt8tC457fjRCTEEd2ryzxr",
  "key10": "3rHktwwFJiEnKHwduf2hM1nUnWgPnZKJqGqGnwyaHMVEtQJFbLoYTVfDd4U9qxeM7hfNVtt41WwYMm4xEjup9FKi",
  "key11": "4nLutxXTTGfx8daUeB2wg3BZJDbmphdZkyoiyeS9jTT9i6RnYBVCvfQM2SSG2C7JUQZ4vgzcfZoWD2eTfNG3AzFR",
  "key12": "3geY1jCBDJomhohuJgtrWKb2ftHcQGfomhkTcP5ExJKGhqGDZncdKC2zy3wkgramVqqYzT6FjV4aasHdaZ7LpDiw",
  "key13": "2JgcBqahC3yiuDrtYadESMu5aQbqjGGPWukRj1vHkSfBLcoz1hxBa8Tv1VUKvRVPSv41LsbAANJy2X44uiCgDW3Y",
  "key14": "35PMVu4y7r8UKEkLZjRkSvzb7XHRcWftbDUUXb8BMTGhxEiPd9a6U4p7VvzhviHu4WVXK1uznLGZGstc2AXLVzjA",
  "key15": "5fUgfhFUU87mo7UdzBGvap3Y4mnjSS1ad7ayEfXyU8mZYm9LXPyvVxHJQLsZvjykC3aS1nQ3wbRmiBdRC3RjVr7W",
  "key16": "3P56UnxYA12kshTmMKD47qHMrG8V75QT7hNsUu4fZBJTwLg7zbn1aP94BNHzDJDFDENgV97aCD6G2i4cik3f77dj",
  "key17": "2neigo12Zce3kSp5FXTwJsAWLtPx2yRSiUqaJAXYc8KYhMgt9HFpLv8HFHWkawE55CZThLRwMCray2Czd37nqBow",
  "key18": "5gwbDGaFCe27piEio2KB31pNp5ySpq9wGQP2T4kHyTBznGYg2TkBPD2R721yF53Bu9b46Z5urvJMMtSrQhdFpo52",
  "key19": "2R6w6jeS3dVJNz4E2eHrA78AiB1U83wxYJ4Lr8eNxLgaywxAyhGcqpjQ15TPbCGYyD2Cg4H62oscU3kGfovyPkte",
  "key20": "5GhNQgktXd2s19MkSXFJzYpN5BkALqMQCaUn8dKmFKbEVjZrd3o81VHqipv1CUU5mgSTCQTwJcuM7XiyKfFZ7qkf",
  "key21": "Dw5MabWMkNeSzDeMKKCawyZ7nQoerZgd2yg2fVNYjN3cUD8tres7dDPC2MVe1YcNd4f7f3Uq3oWaDvDn9xdzNQy",
  "key22": "58cuw8pXymYTaNWLMiyBe5QFdcf2PGagbUkwBWeFh7bFhdUsBitJC8tYrzZcRESiQ6rBZAMJyMerkzNmgzim7Ufj",
  "key23": "UzJXKMnESsPn6MJ8UN1xba5N5fCL26rBL8e6VjTze3u7TG36skHeuywx8QzCL5HUsAxyEYAGKVBsYmxCovorxyH",
  "key24": "3RN3BjcXbqVBvM7yxHrpuKrXk8Gy31jX91Jpwose6SCARDNRNzLShVrxaPUJy6Ax27gU1SRA7XE73svwTJNpRdWB",
  "key25": "4WYAdrJquRgxN6952YdoamKQ6UkRUKQH1ZhrwSZpdd5oFSMvwxQxPXRKDYCXogwhYgy8e5rKuU3cR6WRUYefspvJ",
  "key26": "2jBjZphfvZKd4o6hQiGRGoFy26UkfdUqG1Q5Kd7m497jntodrEWTVoUBszyNwGqskRtGKuYx6PWf5U6qVV1PUCjG",
  "key27": "4EyR3gJMAygtEtwERXHJcuvHcDczL9NASN4gPAmBpJ825dteMwQAiLJkVjmfVHbHirLCu4dXf9H12nudUsG1sLSp",
  "key28": "2EHZYcWqTUERKnZtEqaKeQmwKk8fFwHndYuD8JA8fYvr5ZzevDTv6JpR1tbVneDdkzqSm8j1zvKa76MHZV7jJKRb",
  "key29": "2wBnYVkaAcMFH1caYS6zLowyRa53T1mfF3EkG2LnHChL8v9G1GtTEtnr6ZrBeQ5wgwjcyQ2tPUjk3v58pjHqA1zN",
  "key30": "4FtA5hT2KcJ58eTiVKgzLLFkmU9bLkQymTexL16fHf3ALYDUq3CRTC6gvMKgEPeSAqhsSGGZiw2feeV8VZRs54JK",
  "key31": "4N6YFwtNEqLcXjVVhcTYB2QshCVVBTvLaVCGifvKLGBaX4pUh3xDdREsXWdXcTSERnCyhyGXpjyVHPLGn49QRuEs",
  "key32": "47EcDExEMSwS6QLzKQ7ZAj1JpEk2ZKSn4JHN2aD93gWaDQypimXAzevLBSQL1gWfa1sishYdcx5PFbx2f7ogDRgC",
  "key33": "t489nxtsmbW4d5mMTpHuGkArgbAveUKotsUCZvxkagKaD21PD6ntTYsLZnhzS6GXvmuRmBiwbP7b4ghjdThqdcE"
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
