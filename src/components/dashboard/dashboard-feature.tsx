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
    "35xXjEtQi3s28qYmomPH6koAPuRS76e8DhJ4Rj38WoSRuL4tQf53x43CNoiMCNGbY4M5mtPMBZWssbPJfkToTsR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57rCb8jqYTEKfZzpMp6vnF4hmJHwuTSvbJx7E95XtHofZxUoJkRe9W2EAvXgpDYs45auJRy13UsqCxTu4PCJTtT9",
  "key1": "2FgpwUNU7PA25w31ZAbqFqtZQ6ZjxLBFNNDMx4FXPWRnBkbvVckpQujMKgr86iLNf3F84PYL5zG4Y1MgQ11Ed85B",
  "key2": "2X9L4NXFKFCo1iKjKGbVAsG1Hpo7VS4bXmijPbexnLXW4Et4pic8ukxZnX8SGhj8jV7vyeKz7iHW8vWaWH7fpC2Z",
  "key3": "Ycc6tmw8u3ktff3556yR5dh3JGfADTGw7pJ8kxFNJV83StBty4tEsMfPCgNvJ5BwY7vbZnDos9G694GMYjJzcCi",
  "key4": "5mDpwJEv5mwWUZ5RgKMNYN8x6gdB4mwX2zDzQ7cs74xzy7tmHgdEJPStgxNpj5C3FHaG8SwG7M9gd67cAGgd4jY6",
  "key5": "5txqCnhaFcyZ7VXZCxSf86AqwG4PBiebAg1KGzTtoR5v1fRJ8wvVqBzAeEPrsccoSKVU93Uv5LCoeF1accsfb2hK",
  "key6": "2ohxYXL2briB6GKobPk73NFTgcuoTdbwsesW4Xmv1tn2NCs7LGf9jpiXW8DxRnokPhS4ok9SQf6BZWvJnCdUgnLZ",
  "key7": "qS544eCxvmnxpXY3o2Jz1SqVqe2xz8kStYer7sKu1Aaw3kBdHXg8fngC8eQC2jEKB7tsLb11n7JsHSHthjbsJwW",
  "key8": "49YrNrS7bSAA4YPGXzzr3ksEKBuRsq2b3ifYRnBfZwu57RCTuWoE9KiScr6mjZ5eiCRtj2HKavPvuJ1JaLhHfbRU",
  "key9": "gtvKQGpypYsWac5XECr8dsikrE54Utcms8rb1k2iQPzeQVudgWKCnqbmKjH7tKn4Y5cE1MftZGKW4UA1YrojzBQ",
  "key10": "4zRaUYik4mgMqsoPmqiu67xSRjU96NE5n3ejvET1WWWRkQiTPBos4Lmw8rLxxCFb2VDBASJxckssfMQD4rFMVKzv",
  "key11": "4bxGms84Pmd6CHd73kmv9rqktaNzr8FRsuYhtJFVxK4PC1TvVXoAnAeKzct5Rht7t45jEGZeJ1Q5o1kT9121v1GY",
  "key12": "3Ync5NyFT1KwagPsR3hJPhnQVFBXDWhPDxh9kWz6P9Achbyt5oGyro4SbFubRXEiFuPV7SzxMKsvikhizA2qMfJZ",
  "key13": "5UeM7kHyQsGBVjv85Gcp7cfVW3Fs92TVZ59aZtDgbuqCr7LLkiDD2j7FjQJpSC1TQeAXnumqiChACFx2UFphSboP",
  "key14": "34f6VVSHekPPzaTHDNw14LFak7QzkaDhqSBzSMoC3VhuxzBb5hHNjiBfyhNgoaNbadsvRf5UunynxjQ8fgQXHLNN",
  "key15": "CBhozaHv47ZQkwzC3YWcdv61LdrAMYwK7mxBHkZ59DcxJYmJsmDiuq357NgoJPAVLdFrMfCLvdniKuUQkUZUWHb",
  "key16": "5zYRNNpvPVorT9QXiCpKLjBunPH7y5HYYmpT9BcGE6b5ew6AMHvftRgqykXfaer2aKVpu8E22GkazgMBHg7w2qjP",
  "key17": "3YxTyJUgeGz4jyXdqNXkbn1zU9mqaLv41Pn9b6E3WaoTMhv1ZhqYgrMR3DrupmmmpwspJSrktLLtxEHmdcUUtGE5",
  "key18": "3yLSCtXmotUzCALckingnLCeXBZ1dE4KJQQmCd7xzrzaBjboCd6GSu2VjCUcURuXub5aYyoB23ZbNPf51mg1EMEz",
  "key19": "4tTfGYn4CsDZebg8oGjj1J4bqoXvXMZRtLHhcwNWJzcCrP7Kiwg6CyztdATdmac3AqEptKwgcKvXRu2pQnBUSGGG",
  "key20": "5iuUAb2W5ATkpKxyyS8y3oBBVdmRYw4GL3xqy91Y1Ba4zybZzfK2UVzroBrQ9Bm8vVnzHE9WSvpuA1h1KtmoTcph",
  "key21": "3qLEA8PvdKAHhuoHo9JtscuoneXfLMd2zFNouFHKHTjdKdVSx6sivdj22BXJxphwYxCuRJMXKzQ52JAZN62uX1sh",
  "key22": "3CHVMBtXa14665qV4tbbR7CZaeVaAGRujWRKbqygky2MfcuvD5PwM64nymD1iiK76xYUerpaXj6ceD3XNGrKDSc5",
  "key23": "5d23vspq4wG8QzPewxPmRbGiPufHmrfd93MEBhsxy8CwZvTsMRr2TsBWB4nPHBDUMUzsVneiKTVjTTfej3YnQegq",
  "key24": "2CYQZNQGfLkaDs4KtcJWjKoCkaCGhxcvCDZBcVwQA4GUCGLTz7BGu899g8JRPPSGxinwgu5JaewpLzx8UqDfQrkY",
  "key25": "4PMrJeRiL6bViDXhvZgRgBDBEkmdWaMqeTokaDk25nrCnrjwevDok5oLFNHV1bwbhRfwzExfMxWnzHXXccLvUq5D",
  "key26": "5bZ1Mu1sGcHK14RvjpydtJTA3B4xgSQC2LDFLpgAe29UbVkP4A5NvY7xagNPx7YvXwH3nCBmLNWMw7asZF7CLMVW",
  "key27": "416aoQDVUXatPQENjQoZCD8KLC6gaZFy72KheGaxy4CWsd4EHKRAD1fPU3VWM76DBKZyVzS9kK8kxqTMsPkthfYK",
  "key28": "3mvwSjwBuj3Bhsh3Yyn1YtuvZApqbCsv3ZaU1UtXU7x6ZJNPp5nmYR2Dv5oH5ZPntBWwY3umcFxZGCUHpjX6msb1"
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
