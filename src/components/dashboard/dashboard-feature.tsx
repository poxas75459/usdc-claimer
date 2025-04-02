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
    "51z1eU6yuzZAU6FGazdB6FvAUWibiRswfKSNktFh276wCha2vCEaFgbYkKJJWtM8DGyhhQTkAv3YAGqpGk8P6c21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "343r5WiacZSqcR3C5d45PanuJfvDDZdYK3cipbypZ7dbKX7T3UTzzJKT3NKnjep69QaPxggLVbFCHiP7RybiZKso",
  "key1": "4mvD6D6sorgRPAtrtf5XQmSzHe67M3icdNpdhGmr2HStUUpV4jgcDYSVFtevs43uPRi1c66jHmUss5N5C2D3fidx",
  "key2": "48DMFa7S3ZDuH3RX6kNBYzrNataMcb6N7nE1UqUmE3rrYh8egr69QQ9hU1J5T3Y6r1tv9hw3gYciL5cdgbnmt74j",
  "key3": "3raxAZeK1Mbrgqxx8LDgmKP16XEQS57UuvkQ744FzTZgTWKifiHsuF3QkXBuHtCGx8TJfUAPiFdQU4phMxkX1sU6",
  "key4": "4LyNNPu1dUnVg17QxRDTVVNuxfBH5tDmeWXC9NxrFrkhbe6MhnmKtkLXtohMVz7NdGtMeGnQf8XVaUeNCdNSjEeu",
  "key5": "3p8zWDGGYUgJvhAnQcx8CWDjJjPWgfQUcouzVSUM4DtqkcfjhXNfgkRJUQPUkNCbzsnWxPsEyeYGF8d9mwDncR8K",
  "key6": "5GL2D7NZyyjZV3S5hwx3zjD4gtVn381M2xxWQjArdj2uUSFeST7bJehEBqE25mmcf7DE4BnaQgbwtyybvcNzgV3z",
  "key7": "64ia8ty55FGA1Gefk3Db9VxaywTKDsv7bTbMR2J2pn1pJp96i3FoACa75bdh2Hogyiys28MpFVBnAQrBtU1vGFqB",
  "key8": "33VvYFg3GJmHJeww1JJwm2k1qnbdf5perrJZj3ubSSsSaM3KUH9XCigygYQdRf1MNBN6uE5YPRHR37fym9g2VXtr",
  "key9": "32Q3T9U99tqHz8jpAwCF98vWqrtAN4YCK9z8y521rrR62e9NCwqid5cronHYsxq2orYXEJBgt4nK7JXrkWwW1hBm",
  "key10": "5TQTi5bQyZKZCh7GgoPPiMur8XWM2PXSLnwab6i845Bg2HDUSNid23GZzzSrE3c8yxsqK4u7KwTxo7UbopSZaCQA",
  "key11": "2iXKz9L186wmUGGzjZGQnERZnwHMQHYhHNepRncbgaxNXucgYAKZusTGEDYVAR2gWFb4EM5eVm3kUgShbTNfEE8j",
  "key12": "4FY16ptAGxRh478QTNGd4XNVKVBv6HWcL2HSeXevPVftw58PKJshBb8wATJH83aWKd9zgKKiwyLhLEMxR85HT7Dh",
  "key13": "3zXQNhQkJU1whiyXdK9twM3V4r7Te5ZS7UcbG51ahSpcX1bQiJSZwkrUduxNe3C3qZeTfFP4rntgC7vyZinHpxLp",
  "key14": "4S5uEeokhqhihcydCwhVpTUbWvB5dc8LRwbVXPCFuz7Nin3t3qLZ7E4xtXXfGTEDLeZGWucyPa9kCjfBRp3tR7sf",
  "key15": "3jZdcFDwRzfzoZG4jq3xW6u111HXPPTz9AwJVJTC8ZAviMdU52kKxVwEMBDTqHTzQ52QR2gAXwLSaFKK2VnrbyqG",
  "key16": "313qBxxg6R51b9j8SQTGyCGpHpyEZ4aNPf6JVfjk9ojLt7yeM1sWRSXRvdt6TrcszoMpS68oSVfFdv1y7VaCPQyU",
  "key17": "3DgsAnrje5Foz9tJnUUrYZtg8QnCJVViFxfiDwWypnwJxLymK3EvzBfFxDWo4Bj4ZYp5LMFsvBMNPxSYW9VqTPkR",
  "key18": "3bpQanzjD8mfcsVKvEheC9efDWZuK7NxhhGaskUxwt8vVFDXBhcsKVuMntWngCV6KxfA1Zr2uWYLtvqFhS9CgWfR",
  "key19": "2abVJXKiL8cioCfvMDYtMJ5TUMr9V4fsnGWPzx9uzpFzr8Y4f8E5Ha9WVRsmL8X5kT9hcE3DxHrHtuSSqjhNGPB",
  "key20": "f4JhJRtXLxTnv3CsgW3M77pXPkigeZ7xMvXdoYN9aqypHHAPJk1KVfwGAQ7k1NDEi2E1beFPuagXLmZAVCd97Fg",
  "key21": "5z8f571YfWzHTtC8cgEWeVg7ZaGtPvHufWQcuERCTNMfw7HBxk7UWXUu3K7PA9u84GgziDF8uzTEmJH7EGpiSD6c",
  "key22": "5nWxxbYneLPPtV4NWr39xBoBmxoaWs83yLfQ76NBc49g3PUYPrzMvNhX4XSNfbCKzAeMf7NB4qHRPUoqtqHmUQKV",
  "key23": "2PPfPS9iiqLw3xGfAjjqD4XAdq2hpCrDEZtsA8f5UtPpXcUuykVcdk1ZRxLxcXJa2SWPRbwb4pJkjoKFtXkPCPH8",
  "key24": "4vCjVAGrEdHnaC8dHoXaTu2YNYwiDhz3R7YA7TKATgKaG2PpRN5JZu5AxXM5gneETqEA8EhkMPYVkEvWUXYuifMo",
  "key25": "xTCwyWoCwxUYEAqYZHdBPVuUwcnvEwMvdQF7Nmrw9snD1YBhwfLeSWuaFmnEeBXXpqZhawhGWEHbTGXKvF6D7bT",
  "key26": "4LhsDW1UHe6jm2h4vU2yYRPt1UJmAM4CDwHXyf72KGzdk5DfaGs32mMpGa9yXoxiEfXVrFHhNJMAFr8n4PmSJ5p5",
  "key27": "tqHWhP91n5EwFGFSedgMq9rWUv88L53e78HbvuTsvDTBR6RT6iYd7UuUSWn1rJESEgBsL9fuG71VxB1P4HKAjVg",
  "key28": "3H5X4ZaTRbHR4kXo5ERzVg854i7UGMgDT2dXgoP46g8rR6fi6Qjk1moauR96UnFeBtTyrJHfvKsiNDX8SqgFLW8M",
  "key29": "5pH1btje3R68tV2KBJyGRKYY1n14ESQ9WQiRs5jMyoVti8BHBToixL49nLetShnwmahxuaoML4PgckMDYfhubDvm",
  "key30": "2NmmwuJtiH65a6MgahLQazERpfRFKgoo3tQdARZExueafbkns4G2TewHawmUUXouijv8wc5boUjR1oLZZGBrQnyZ",
  "key31": "4rffg2mw8eCRBcqVRWDSed1mSL2xmYmDGhzEG4MLgQnEhrGgoRDQyiBNSnSH8sthNUM94ymQsKczJ6TNWJ6euuMX",
  "key32": "3WuZw6hJe3oUKpXs2MzZi8DvxMjHYLZFDZTYKxW1UjySub31PdStKAz8revpjCW2yeMWCh7DhXgxgYXyXF8NNyBC"
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
