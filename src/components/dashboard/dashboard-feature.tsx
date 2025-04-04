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
    "3deDPPE5sfbvaqZAc2rg3gzM36bARZBhpckWxMnLmgE9UzAbE7jjtHR8axxWZpYB5m8GUoME4RF8whcpQ9zP1cZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iRpXx7txXcQrevhVpbN3aH2H6jCBfUbYyM2XXLLSBJGya5HvqCCS1iNBSoMsmSPXMRSwrHbw6PD4VwBAvSNHc1H",
  "key1": "2gBkUYJctbGHrxRVE7xLMHR7NrBtpGTggKNGX1ByqHVzHac2nPpPwfgTYptsRRgVzzLTvziUnxvXZCmmXZGs1yVL",
  "key2": "4vN6DSciLLkjUh2LZffjiGgf3wrE6dvaQ1q4yuWbibHG8f4Gzt7i7mFs8YofJpQDqKSCSWpqGNE7Y368wF8BkHtn",
  "key3": "3sEuCcuReqZsaKKVpqPLubwzCogGvQWu9p6x4Pwopj8KRCQpUsRY4e6pCn8hERoUd1YFcpfmy2ZrSXwvoJsioLV9",
  "key4": "5ec23P4ZXBXoRBw5NamyDELtvKqzdJfnBy8CDqeDYnRndVBeSYikY5Cv65KgXjsWnmFPaVjiU4mL6iy73dgXu8gD",
  "key5": "3L2DpRmDa9zQeUnGjvzvVji8hVZUuq9rBSKXyjboBwu7YrzvabkzGcUtUH54TnJB1HpgWbxA9HJLmSr63uK7B3c1",
  "key6": "3UhFPxRfQVSwL67uySWxzYeMQRycC4EEZEsRQHhv8p6CHFz9rrSZt38gvfStfYfysAHjpoXoc2qzfJXsT7XqrpZ9",
  "key7": "ray5qJdbuaPr99XWjg6ZkDwaVpRKxv5TRZzUGKvJpiVLRZLfWssTEEBN9NsxXTqJP3h63ENaxqQimcTro8hVHNb",
  "key8": "omoD2mhFEtxiAek3fr9snEpiMZjQnSsYyDn7FbkANgFHcv3sNtPPUSnQzuAJY8YRdS1jKc9eoxYrnJn5NcYQaEK",
  "key9": "5cR1FU2QwJSwzDpp2SczjQpJt31eWhZQPZWcamG7sTVwroKMNsMEhEUr3bf4efmu8BWicMd4e3RvLyBbg5JSNE9Z",
  "key10": "yzWX7yBjK6vKTggFM45XoMCNe6YsfLQq7SuPMBkntFCJunMRBHHTrUssKpJZaLXZaRxJPLPY1viJLBmgDoqmfvR",
  "key11": "3UaAM2m6W4Y8Z7MaWtDZxWFNBtcbCjyQ7mY6eJdDese5AdVKU8tvbjh4cHfntkUVP8MnB9i4rNWGXVh9CFWasc11",
  "key12": "2f57AS5CVkPtdRM4vPmrQMyga5zRGNxSWLSeLvQRgJLCEnoYxn12XQUQSjKsCNBBYyVR2XWRzWBCdPdxVa6qb25E",
  "key13": "2tvKhwDrZGs8NGriiLRytwEpdNzmYER6PTtAHxLt3JeLiUzbYD6vRembnXz2SEgnkiZFMh2sQVJDTKU1MR4hqgSC",
  "key14": "5L2G8hG54qeKQLJW3oTMHnKSXfg1iUwdPzc2SMm8qWyjmcZN2SmWLpfhvzcc1jwG133trk9UDbPHKGaVeDsuPbPg",
  "key15": "58BULLb5u2sDq5oKaegrXDdDSTQpSRMpqGMQLpau5KumufpKRhqyMJDspGLQ5ijnxLpWc9fEtGTr6MwjMAYPdJxp",
  "key16": "4vSoaP5MTMALCagAYk6YnJ9GhjDBF8Psw9JHKTmHM6mmq5828seRVCuDPfVhh1A1Eyxm9T9njws6dhSpPmf1LSf8",
  "key17": "59GErh4PwoMgap24jBzbYDjCuCDb5h3guKnQZ3MVdKSDweqDaFQYrgbtSggK9V1V2fte2WEu2PYnixJ8Cgjt2294",
  "key18": "33ShApmj6AMGmfc5UUpUSA8YKp26sQT2GFo8mXrxX9vwEi5XujThMipDRZw8jfvHm2cJZYMoL83xURKVbz3UizH",
  "key19": "eUpens3Jkw9EsY97oXVBpTwLtSdo8Np3xnm8ggt3F9hcUqUeUXKVvHbna6p8vtNezkXQr8w8VvyDFkzvjSe85ko",
  "key20": "23EReSXhFQxTj6cStUGZU2MpMH3WZnSHw9zXWPBkUfUSfH2CA95spGfbgM2DJvZyyGgxZ15HGeufeLQS6Ztia9eG",
  "key21": "5ZV4ibRy5adqYArMZoCVhKFTwr4yxAKxXR5tHiKrNtoRYe9a4wC2CGryr9KMKB6LZtWLKFVUjzNNwwVQFCooBe3W",
  "key22": "L4CRrkzkMWC2VKGFWJSYasz4AbMCV5oqcPjvMXpYxjP9e3MsZKU6mvky8LjCa1iJtgdzHCv5FDmwubhsK7WU6Ht",
  "key23": "2AHJmgYjnaGkz9JSyuU5hSkJBTBEixEkTqkWqM6bdssYvGnX432FV5D7S81avjH4wBR65Wrozo4aCSf8YgKvrXrz",
  "key24": "473qektJLrWarUeUkH9aoyHhqDsESYgzm4KbzJdBsYyLnJ2QdeTmJhD1xFURPYLsFaXC1nUGrYD2do1Ahmj77TC6",
  "key25": "N8qGnqvCbMbCTkUiGoB8mdh3h7sVFy4tReGZL5wqHeAGVgQsoTr6HoLEipsufh4GN6gVY6P2RHDjLQATjzEDEAh",
  "key26": "2U7o3x9CwcUxexhP6KswxAwxCCtDQudAnRkKokzm9Go7myk7nq1gH7uAhMQbu5rZJDfVG7YSAkCpmdYYjky9gJWS",
  "key27": "4YRgBxa89Xkx6VkUuynHW1m8CJoCB9ixdcAE9CZVAgcBeafRkzSxCRQsqdWfv9cEQ7WK65RZP118YrW9PS6P2aWF",
  "key28": "2MJp5pGTToKASn492XRHyUxMnnu34eAbN8gnUYkA4gJ4me2VwQcbbADVdehpoWRQNeGzVEZUXzDaEUjJfwddzRHq",
  "key29": "3UGuSwhNRb57gfhCQbcmVQ8MmU17Z4mnrE1g72TrxDUv1LezNKoUg5sESYDWFgUJyK3y5NcUVUdXmBozAdXN4NiS",
  "key30": "3Mv974cQ8NLPsgcJGsoCGJngJKzbdZ44EBy5X7yaHQES2c918uWCQhq7CxhRouFX2KnWyoVcHTCu2NYtbE5QFSTG",
  "key31": "3WoTHtURyckkejhbSuVEkW1v7S1X8y3gA9xPoSNPiXhSKyJd3E2vTHt9Qcuf5qAC5PmZaAayjgsvvtyZymntycY9",
  "key32": "4LaCSQ1rqi1EAibWdjdditaXBenVDcgZq89wSXG3aE2qXJ65ixvnyBhF6J2AhipWk7cvTehZxH9LRij7mSSLFQJM",
  "key33": "2d7AzDJsUwRqSuKNdxSEXYSpWWhG4Uyo6G5CcTJ6RvWRu14vYrpjSQyDEhdrnRHDLHUkvxxWsD9FUJS1uhqzhHNp",
  "key34": "25JPdLPfaJnVb2gPz6fkwYy29VCMK9BM2XU4VtBNr3DhYnrHVUktuUzPLeMSuRKsst9UWr9bkJk3A3rzKM9ogRaW",
  "key35": "RTZ45AiXZwufswkqq61baqGxShWZ3pSSvfLHF6gvYknpGFx7iAmq3mFE6n3Ts581q5Ubcwb86DYp1BPDpzbjFaC",
  "key36": "4vgthn8PCe3j3srsa9zGFAmteQyxtp1jqFPYYEwQ2BnRPXSYvqJzH7ioFHbcruJCi7n7kN1GqroVchq15P1P457T",
  "key37": "3j1mVoUR8GPtAn7dANTgCXYSiuAxfmjGyLeEW9xWtgzHEfCnRfCbhKEWVWDhgkFrmCeXZkXRVMo7nWpHiLLtSiBg",
  "key38": "5tMKca3sE7YKFJwSAXu1dMVUHQ6YdXXJSyGLBXAa3sqi4TUDfvhDB1BzKm64bNuMvG5hPb4XBCb8ijq4CJ4h345J",
  "key39": "3X29ciwUdkudkhd8JvR7jH4MusdNNy7rqtuuT93LHAJxY2E3tFA455Ps4i6i4TSrgy7TLwgbtnbcZ2ngM5PwKcPN",
  "key40": "5dDDVS3cZA3RE9sMGa1fU8yMSif6uyuG1ddF5CXTc5yYbPVxf3D7MTGzsiSGxQpVNgQ8tn34dvC7W4voBZSJVGZL",
  "key41": "4tg5J13fmaTYj6Uw67BJ6yqLwERATqcbRvrrVkdiGnBBKzVea1yFDafqQHhN5RmDb5k623quZyfvL9W1Vo6EwtWQ",
  "key42": "P8NbxomEu6u9tWqjds7L8YAFDWZTqwWYgstmNdjLEVsb1oPJDZjC9j1H8keLzkiUYyra7xhRW3Q6i6upq6k7eTA",
  "key43": "2KaPiQtyaAfo9cbGDZ4Jh8c17cnnDKFk8zVzuCqEHUKqdHVd4Nh2NK7acKuurabyGG8sS5irbPHK23ed8QnZhPFv",
  "key44": "CbeyftjJSUitoHFDWV5F85nz8D7motjKAhme7REXAb9WNpSuygFGV5sgHycw3FvSUa1u7faHZtkZhrwt7yadGhn",
  "key45": "5Aa5Wu22GnvkGJSd3veXJuovUUQQQ3hqwfSkRA7WsFN6cSoZuAX2NAwhTpb2SG5aRJHzmafTYisX4p7uhfF1gdxx"
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
