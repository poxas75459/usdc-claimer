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
    "hht3tWrLGHun6mXpHBr1xwcj2Ms5PsT3JHAhJE7CF3cMpajXeuLPRA2qdHXxp16R9B9d4fyc3JqvertJ6tbvbM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YeZqtwTy5B1vky5bsHebngPKYcoZfiJyJSWzU93YRDQykmEjRSbdU1iYNhfkq8b7RyZ7inziaVZRnVDdZ8RmtYW",
  "key1": "2QFP7zfnAvJfm7RJUfpqjWxKTRiy28QytyrW6CaV2Y4x7YycaY76RNebtFCNtJTCs7kudBpU4ny96gWLQ7UJphfF",
  "key2": "5LaNbJ5yKfX5kiGcKQ4iuqtjER3L7pkaku1s39kVNYydUnGGEDTDqZe76vn3oW7odHwGQiX1vmiHb91mVEBYhzAd",
  "key3": "5RQmUL8eQ93idY6Pgr8SUy66T2kJgiDCF93azUWsq8MyW8z9RDV5euzKQFgxA6YpBk411ANPsj3W15uBMJ8xVZHJ",
  "key4": "2imcETrMzbM2oDsHiQc25BkxrDEafqcWLEbN5KGQMxAjYifzdkzS5KTajgVzx564NoAx5EQQfiiPj7FHXLySuaFN",
  "key5": "3psjYvYz8bhUp1Jz46KFFchyMpgNLWEhg8to4MgDiJqnFCcV27u16pxwn12oS3vKAkjBBUvKbDWcKAcDutJScPVY",
  "key6": "7rYNDXS66rrGhPPKA6xUMWWkU7vFfmtbbMxvBnr1T9Q4NuNWe4vAuKygHTjXcNwBuKssMw377uT5dud9KX2MJQg",
  "key7": "3NofvubNbQSBJe6QSnSJPVdjh3jG8djt9tur98CybUGCsss7agkWfsHWRDrUB1CVgmY1rouS7GupBfh6waT34Mwv",
  "key8": "NFrdZfmkvZrgVTh2zuU2okTNqruTP8Q3zRUo2vAqnm2LZU81JCFpGNXik7ypqQ6nbagEVrGbQ9Shd6Y54mfUR7h",
  "key9": "3AP3FizBhtN3VePGJY7825nSe1hUQKphhfT7FpBn6YojfNkACg5v1sWjkXR5oaimzh5VhK3tdnmG8n8FAvJz1Aub",
  "key10": "5mRcoCySwvT48pnFJaafJopK2zucBo5XaVa3zUQUtvcbTzCUuSkSbiFuRm5eBSWSgsYRbcmcUzBMv5ek7UAnkbPu",
  "key11": "2XMx7Fo7J3gknvMEihew81HwYcYoNPP7wcKV8kFqHxkF63UmPn53fovbuRgam3FtcbGKPszKyRE2icUWfcmFpzRn",
  "key12": "7dukhMfMaLA1boNtbBCdT5RanfcGyAW2vpxPj1t53yHa3ga4CFGPY6tishmNY8rqPmsgjkeswG9qKce9LPGbsEr",
  "key13": "4nHcmRnTSZxzuUEEAR9dyZ5u3NQEom5jaHqVueAuq5d3jG9vVCNcDZUQZbYubEgZ2PwR5a4ZLEbAEGC8S1mXXEgP",
  "key14": "2ykcFjUbMMHT2TGo67UQcPHzGQA8Hb6yT9mqbeRu1z9RNqJZny7QcrdZR4qqSQkXpxyJf5dyURhxvLmuEpfPqeXJ",
  "key15": "4qteC5Qx4Bpwd1q2fvgrHCVwS5J8poiva5pMGr962DipiFT7fHnPJj2ctTqnwFF6Nc3S9gNyuvHswmwXQG2ebA2d",
  "key16": "56kDPz8jUeBdz2CCDvaS4oCipd9DxVWs326p1aMDhAhqoXMoLVhbD6ah64RoX3diDeuDSx7d2RPap4CMQmCdFTKR",
  "key17": "23SiZFTwnLRdt1dfweYSLWJVXJJDL3AjHVxkwYq3mHwUtfu9Qk7Vp3cuTNCx6agG1kUKQX3KeNBgVxy1CGtSHGSX",
  "key18": "4eBEvdg8osDYeML2w249qXFuHvWfG5UcKCi74o2xJ2b8M1xUTtTsrfZZkL8DtpfGpyQP9R4e2tBZ13TNUhdrG8QG",
  "key19": "39dWPQ5WoE3cZ8cLqtjxtEDj4Ys7UbFsb3jc5sKxuNiGzU78VH8JzHWU9aD6JXynrBUts616bnqrgj56xj7V4FpH",
  "key20": "4kBPjYZXffAqPtgnPXx9Jy4HQjH46qhMEzCrKdpdU9y6JzyZ6sTwc3gb6uFMzSqBsFSA9HjaDdGm4dvudKCTwFmv",
  "key21": "29ZPriRVPhKuqpfab7y5jTsnDsQy6YKzNdQ5V4Mk873YZnDjwWNnWpqQ4TCcS4FbRpy3pwPftAKEyv75frYyATJT",
  "key22": "5MFebrCUT7jPfhndKxpf4ngJHAst9hBR36P78ujiLK1rwfyHVVBmUC4GjbQr64KqiJYwb6w13kig6uBdGJ592BTG",
  "key23": "54ctXvLwX8y2vPTLXGj5foqt9kJ7ZEQB29PsRfzKGzsrW6LYaGr2HfCuwFTt1WfdM8ykeULSVmj1JuQm1b9Vc9XS",
  "key24": "4YZr6AkrrYU8iCWV2Cwy5kEH4ie4tqUzMRzx51guq1t9SQr8Hsn4fcCcZsjzS6cM85DYKurAJg6WUXAPs48hfGPu",
  "key25": "sVnDshVLL2fqQgExVZvkU2Vx5ud21THMiUL42eEgW8mfTFETgYraANFhJFWPt2qVQbjSrrZXYRBoXEXqtyzwCHu",
  "key26": "4HLnGZe1xbroxyJwZwwJdKgaXqaAj9wkZcpyWApRtHNHNoD3DfRYSZtCkaQCgxG77tQ2R7GfkPAD4MEQsUjZPGyj",
  "key27": "2heeVSSc5Rw2c2HM9jwV3T6fmEMm9vgkSQ3VUT793CT32oppJDftQDZybBV9a4bfVGeGHTK2vfuRrPXCFcggCQ9h",
  "key28": "4gpBMCdJ7Qt3woZq7AZ4kjmHwvn6QUL8cXbBY69h2X1phCofbGwuNMPGhpyZACH9x8cAMEnooxi8AKLfE93vwrzz",
  "key29": "2KkY711TCkKmvfgcp8diuKa3K1twDPcmAy4CqMtUarFpA2vY3XrmiXtKNaGmphVgEPtYxF5gCzBbmzSQBZMwhtdv",
  "key30": "4xboKPipD17SUKZTUyG87ZcQFPfwzK5WAi6MrSXghHq8J9AbNDhuywborXNv5Nh9SW48PJ6yFrp3jY4VVMqPpdpK",
  "key31": "2jkHAt4ZQ1SXrGBNwa94ngDarxrRbDYgstotwRDPoXwXxrNiDE23WkMUz1SZZ7AZ2SsU1RpM6H6QkrRuqdk9cgFA",
  "key32": "2sDbz3A4u3AVQVUDqYpqooCwXv4FxMF3uJxpsG4Jwb4yMoSxy84SnmYkH3AaiCV6NC1Ex71rT434o119Y76HCvSM",
  "key33": "2UteX3UwQkf1jxpSv7RAhfyYrMJ5mcCReFbL8vuKYwGy4yVvBJgKvqeFmeSJ4XP9FZwaNETH21RZa4J3khVDECyn",
  "key34": "56XszPaKg1KU6ZPg6p4VUosV5nH7SyvjZtxjMLwsongwQnaTbWdvwEPS58aa7FksKaBqUqmeGg8wUB3ShivBGpcR",
  "key35": "5hpmw6jvWCVdN5ZmzWeRZTdsrMTXJhaAq1HTKXqkyYSYKFLBta2E9HTP2s5F4nyJrVdkTUiskNWFzQNzFSUhKPux",
  "key36": "2FaLiznoWGZ9poMxXkMkf5ejzyb2jXwwDQoK3EwvkcaYSe8UR4nfTfZtnjVjjinpE8DsdnMGwFYKsMPaTBFWKSvT",
  "key37": "2vDZdcz1Fc5rHwxHryqSreKV7MaeJqF9PDA7NuJ8YV3WmmXj7BTFJJKpTADkfXwizTpBJJq88YEV1WTinqL1psUx",
  "key38": "5ZdmW3SsgurxFWf5HcVY2kQmM1iDVcfNxo8FLaAcmDMo1Pbfbaz5xvnyfKXPjBiMv7bgmZNpCLwUGKG8kQRf6zEG"
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
