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
    "cVQzzHYTYyGpsjTtqfUmaq3M5iR2GfsSmUhBCMCx1aPYEtuYCDEYSTYJ5SsAUSdhcnj9iwEks5DbunXTJ7LLr24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gHN5XD8rAXyyNbkmucPW8RH6xjgDQjVcE1BNHMLCNj7NCHeZEHiyve5aVBBxaBycRkjL9NJzVYVhVq2Tg8Z13eU",
  "key1": "2m4RmfQSXEffgqrjLGZWRDytWEdMFeaNPWARgeWfpdbV4AHUregN7A2K6zmE2vr2ChCwHjKPe1bCnf1av1ZorbzV",
  "key2": "2u3HhKRzkhVUCzfeaRHxFq3Fgsn68QgoeBs7ssK9S72x2Rvhva6NVk6GxbQsJ3BuM3KoHiLHDMnMXxCjV1ebWWvj",
  "key3": "3RBaHDUHP61gZfQnnHFyu9iZjxHperGHAqMDjqqmqMdKHjyNxfywNn4RuC6WeD9hPNTef1LxxvyVbykPM6F2FNgA",
  "key4": "23XAXd9DYFGaJ78vViz36bws7mZAxgKoXxKxNcaunEmbhWmDjH295zGUoExy7tEy7Z9Jiq9oipXVT7m1P3aZSfzf",
  "key5": "51itNqUuN2sjoz8v8PbiHATP66nRwyKffAGv8gxScqmB8a7ZpM1vvFQF6S1N3sfQNAS7e1oRcaDGrSEoHXZAZ5s8",
  "key6": "5QomnyxwLZ5e13htrD6Z1FZwhdijeLhmQutqhVoGc4bDcDuC1BzSafoZJdV9MFgLjkFHZbqmZ6eCmuMMwe9x1oAR",
  "key7": "bTcJ7k5PfXw59UjeGt44rL9uj6RNwnEFyyDCjCh6142t92WwquGoy7SzvSM45CjNBhYmc5MFPf2LXooD27fe45R",
  "key8": "4ehaYoaSqTknjPkbs2iXcALNrozLLQdXquqd9eDTd79fztF6GXfNHBhDT7AzLqVZnXgS5gtCh2hx64B2QfXAuZgR",
  "key9": "27LswZ6vjfotMrU3PygvqSKSUKow44Ru4q5wCjmVcx6YaC7oaUfWnWHYM5cTfbGasEMtzwJvLaWa8z3H6iozvjKV",
  "key10": "CM7Z4DRqQbx9PWFK1nzXrdQAeqTXWSLVHpzTmnAomWxJHxp7CDq7uWhLtePRqCLKSJYeZAUxbCTjYyxEchxnf7o",
  "key11": "416SqULVc3LifDE1dVurHMVjXzpC7LU5ukpP8en5BMsiUtYJYmAfQex9bsy9e3yRbV4MpWvEEGyLtc69wKviAaJf",
  "key12": "5t7XWwYUVHxjgamaC4bm9xSAtGDor75wtJ4Wjc3QaabyVpaLaAb2jeEtQEEKWAnt9TtRwBNMixVqeSxMNwdomqFQ",
  "key13": "23hH4CgTjqrEDf732Kxj5a18yTQKoqX7rKVgrpb1J6eMPHuAeENXhdAN3R41sFvdLhdrigwz8LhtpzcBrkNmofWa",
  "key14": "bsaggPk8oNjUGWF6uueJhiSE5dxbvJS2MyLBrR9pLTcNTYuuUNHxnxRHFa7TqMq94UG1vdgNtNLWeubQZ7Mrvba",
  "key15": "xwwxGh5EG5AHjAjN6zBUYGUGBmHsfDJLh8hC1L4bzjj8Cgyw2ifWnYmPYkcufEXWDGZ2eGCA1sroZ6FPrDbnsGh",
  "key16": "eneAss8YLGpgc8Ca872Vc2GXRpKQn5bNeD4UHVjahgWU1grhzY2Np8NFhkt92JavnM6DrNTbuy8TnYcjH8T4hk1",
  "key17": "2nd2vxgGSgT198htRAovR6Cng62GHsjV7QHfAcraav7dMLMtqZ4oBvHSRNiUBeHMqgQo6PhhCtjeka1yHtML9vbu",
  "key18": "5fnxADAwvjzn5PMEaRSkPnMg2G6qnqpZubFps9fvadNYU7QkagrmWRfmBgpkMu7VGJbM4hQkL7HLhPz7iSihkTPQ",
  "key19": "5jT5FKBeiJJFmXpXP3dLnseP8RgCEg925ZFZqvFv1GFSJy8UsYdnBeEFgPSggKmc2bc4FXdrcVegH4FGtxpTmPi9",
  "key20": "4cFSoeWtnhGaJWA9Fo3LJTkU1epGRkrKTJTSrNS6vBnMQLRSkZ7R92xoAN5oycqBXjpkKa5KcHBKD7LZkRndbGGj",
  "key21": "2hj8iASarGw1unr3uDsVfWthRut3yzbtA8UgfJVuiwXhqh7vxvNAmM5342chYwqUQkjfCtEEpjmGy1mpSAjo6gSe",
  "key22": "5ANyfZ69pC7j27xy51jw9BWXbGZ8SEtWk2DYdmQjPZYTFELEdVbkKPEm1UEbxC81S1SuC4dxMrkeLFt1fTtKvtgF",
  "key23": "3DQot28Sp4ejM6VKMJUTVFPEMdFsV8GYYjabwUknvm3BMfwnznPQzYF4GqRVTqNMnG9AAgU39NMEKF7XWDD8nDGa",
  "key24": "2ipGXNpRZ35DGfP4N4uZuhXMB6YvhQYQYhb71pntPRmPfDZCAvCbnVcoP8qabjH75vmcLHugH3fLoz5y7Qgb4ba8",
  "key25": "24eRRv2xV67gkNYWoSKhq1ccwXW7RfNR7sUErNNdmrdZShCyfavcGkpPLNoDL3ASWezZAP98Q5tP68ztm32ESAsR",
  "key26": "5Tni62qfoN96BbSfGpL5GZJW6fTE2Eof6LHCi8CocNEycoH2hBcTdc7DhTSuMCi4gChJKxbAWnSGRt91HijsyS7B",
  "key27": "5jyVQMqpbH8n5vF7Jg7wemqRUmpoDWPp7Kzj6t1NXb5f7h7rfrpA4oZgUixnXmuhdYs7dGrPa2RwV5VY5Dx5dyEr",
  "key28": "3TLPyGzF8L5vwFaN7JxZordPDM7zWsQHmbKus9vWKaxEd1hhah1CeL5Yp6xhzQNrUYwjzHtkeLNJC5NzTMPAACDV"
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
