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
    "DDzy73EZEho79oQNjeJkXwqaVSGfcUmSXTyvRgAxjz8YkerioSzKDHxfW2amT9vsejzRChgKQjAKEfryya3quz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DNYnR8Yjumkw2v6fZCKL9onQpFhSMxRTZtegYE4QditHi24N2miaapKWLVVafrAgQsiX2icUbQF5HmhijuNKcDu",
  "key1": "2eXSXLQiXnqwrLg7ow4sP61CK6qHxVAsQJrBsELVLx3pRqirTardZHswdFHBtq8S8RHYafRMAAKJnFeCqqEwgEaz",
  "key2": "3C75a13XkkVHbdKQMbU5TYxBvMN1V1b54q78waXmGy7uHugXrNn4ivPLQGSKgpTfPJR63P8axkRdk2tvvy4fwDCH",
  "key3": "exqJdKhg2cCXnb3CvpTiSKXroqZfrG59TNi5PhAbEEKrJ78Ar7MPSrTxJkGeAn3yypWbncGDJWmejQMUN1mskwq",
  "key4": "2ZbycTr4YKHNRTvXSrYTcNBqmZU5npnedAMxCzS8pBCVMHYP3vq4x5HwaBmw8sb89WdzFcQCrNs2xxETbbA22gY7",
  "key5": "Vg6qbR77mngGsGdSGtjF58UJe4nxYi1sPxR1WWnJDcrJ1GjcKWvuWFw2CZTy1X8dQQsNnfBjWbsb7hSLLzptGPc",
  "key6": "46xtcr2oGsCKuJranaMxBWUVAebCtyBkx2i8J7uUbp6Kk2pVTmaUJ7i1Ly2jhW96wZmwgZrWmTa7a49ft3z2M7ti",
  "key7": "2TnyqKy5o7DiBqrCWnanq5UmZSeSNx5FHE8a3EwmSPBdmLQPTDCa7dstWd8D1WCea4saKvWGWp65BSdrvyAwjMHd",
  "key8": "2HQQZhnsprU8Gjordtw4f3tSyDJFmWwcxbkVbdJ1K3xu4wML6EMKnbzoxVgevkA4dHoLZSCf1Rekk1poARLQ8K3Q",
  "key9": "niUjjn2zxqpu1GpRjcvRP1C2FgxGwkUFYN1YwJQK8ZaHcNi45i2WjVfgd3ssBcvp3y1vYHuKoLP3HMo6kVETvic",
  "key10": "49Qct94xPp5eohqraJtundtQC7eaRJKsDt3MUkfeSGGBrMZ3TnEXvC1xbeWnQYQxUKug9pTwqfWECSVZs99gN6Dz",
  "key11": "4Q2R2JUYjWrNnGm2uMEFULuBSA3SzAQNoF8EZ5xrGMaboTmAWtfDNb7GEVfvXxv6MjXxHrUHxcHWa3GMU2M8qB6B",
  "key12": "5nBNBwTg5AFUwx1stRLcUfjEy7u55bek1vj6VuQF91Q1PfqwyybPKXPG1chJjmypsXzRu2SGgcypG2fCpQ9UfBtj",
  "key13": "5pCoASx7H9qUWwb1waPxoPKx7Qc5HyutZ1KQatVum3zAqWwJo18M8EsCJZ7ZwMzTgkDsFnrPR3yJjyEwjG6jpT2K",
  "key14": "4vS8szjyMPm79xQnG6pGTktebSc4ZqAzCckbZVUnu682L1XgSwcT9TkgcnvtPKxGJsy9dSmeUQqoNviTzeEgP7AK",
  "key15": "ezP3akzftRTEatEXfmSSSaroH9UNEjpXYBdeZd7SiYmh8i9HerDBz1jd9nNaBUcRKp1LiKdsUNw8944CdsDGCvW",
  "key16": "4QJgWvn2M3ot4UhS8K4JHYAfbZK3TKcvtwET5wcQPBkdEgfhJqKvgYMeQ31giUtjKbE38oDwGT7v6yZhnp2NV4Vh",
  "key17": "3AyTV8cbiCDNSsLRnFB8GaxdbfQ3kdDcFM8JA3uUan5Xq7qKfDEzF3hA3v4zgmYcsjC62Qzwwbo6rpM3AZFH9BEM",
  "key18": "3Puo4HR26uqZFb3rUpeeHW62dGLXKsVWj57C483uouRDAsV7ktPqU6jXhykVf3e7AKTLyqtxNXQ8JQALwwqmk5qA",
  "key19": "QYKhHvi8UtKcfANidWdiZg4jFNu8f3wCC9y4nzG5ujp2bTD4xrZvHM52XREMVy77SGA9kv1CTTz5z7f4CafyKoJ",
  "key20": "3RHGjuF7CC4f34SMess1f5nxUKD2XYAj7vXq8WSbtdXMY8n3psQMoEPcK6NN4Nfya6kSB1AMvXHnKn6JQ9kLvFn6",
  "key21": "Suoxif3pX7th1fcA3ErKMVWRYEbRT1cVa8N5DcLmofv1mppVtGqgwsis3pZBCEr5bDBw9FGs8ioqGCLVnww89pg",
  "key22": "2RVqkdgVsSeA33wNtMbFEKbRmdjwJWPhUN4LQnUzQEURXZ7aBWW9AyMSXzStphABpqXS6f8yAjA3Q972FgWJk1tW",
  "key23": "2YDxF9Wpt94PBiek8RCq5o42CgWmVYFuTqenPGda2BYs9ys6AxMppv43Mwd6UNvCPeqcUjJjPNrrk9XY5zpsUUT1",
  "key24": "XeSAKPbCjwppyaXYBWjRwhgkvoMC8wHPRvvHXRdHMQjwxrFs7kSMK8VcYtL36Y9rxPtm7yis3w21CQtvSDJrjLq",
  "key25": "5vWqrMcm48HGiuXtMmts6oKcYdyBWdCrK2FUNSj2S71MR4F6teBYDWbFQEYY9AvCZHhjB9BX5oXHVbz45Hojz2rC",
  "key26": "28moHNnqdMfP9DNGVThpU1nBZeZQX4RU2DNMTLCTaq19ogtPdxu8AWH3JVvFvgR9nuvnf4npYsdXYWCRwtbtxaB8",
  "key27": "4tcP3JPR4eB3kzsArmiSKzXLG9TWHPD5F7o5z2NAkBBK94Aa8txqRdgnA22mS422zFKSY3aJ1kYg4ApfGjHKKFfg",
  "key28": "4RZ8yWVPPsiDSCtJV7KRsubN8TNpJBBoj5hC2Ucmp6Zx4Ksscq7f8d2C9y87c7rgGFSjjzvSfQHwwNyrPPe1JB8F"
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
