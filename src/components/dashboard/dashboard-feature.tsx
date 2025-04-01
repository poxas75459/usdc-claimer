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
    "36omEcDqcVGSiQtq735sWWQ2yyEYRpUG3C73oNMv26EYZccwNmgrjTqjk2GpUgLTh1EAmwJFiNGnvsmo7fEKp4wW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nCn5A5GypDha9nLiG6ghbt13V6UgDfY1DUGBs6eoF34khntzAXxGFjinXUVTYBzopoet7rJ3B8oBkPLTqeDszeY",
  "key1": "SzRfJAHTcREFaKWhBEiHhnpBdixHAqpa5pmW9tRWQWYk8Mbj2edKmbdv2sDbLrst8D49ov7YNhSoa89JchCNSAd",
  "key2": "3Z6GhiBqTyhenSAXoqybbmeTLJFZaGsQegtL9jF5WoBnz8zE1hgoZuknPjvzShyHFccHCPt2CCEdSAct2qz7TyqJ",
  "key3": "3ch4zGbcQ3hG9iHr9vZpjAgWJV3Nq9ooZHuQwr1q9Z6nrHbGevMTKYuKd11fC5J9ei98tmTEfPECxRVfDaVGsqQs",
  "key4": "3bensspavStj2zUKfDKvC16c5jXXsvtAdDP6prHqpGSRZVjemoHMAcLJ59s2KueUFKKKWAoSACPqjpAnU9hpUe3H",
  "key5": "2ABdCfGVXMxUDu6p9EozFx5hLxpevSnzYbdb9ArrFByCtE8Ggp9AiPnz5jdCnjVhCdsCqht2M1UH1WjqwSShdub2",
  "key6": "2RxJLurYRqPF6ntG8nX1RUJ7DdrKnsfn9SStMFMdhUgcVYMsYr1AYMwg6hstnsm3saDX9EkMNn1MDMQ8YiKvtJdb",
  "key7": "334TJQLgRtYH9ZohTsqpmAHRrqeCZ38GcmWYr9sMQ2ZaEHzLSQjeHPyJ48WPHHqyF6ivnSkws9oWx7i68adDsCev",
  "key8": "59cd264S9YM8H3j2duUoQxdYA9ywrAZ7DjPTWGnpE1GVceXQEjtCyJudmx93tjmzSfg4SKFYNVTKSojQw9g4rbo9",
  "key9": "58S6SJ7XqTAqRdyPsncW6dmDSeQ27iAF2eFghAtPuwSNksNEruPATp5DoaqYeZntWJBky498Uix8LRRsUEJDa3fn",
  "key10": "65iMnYSSXEp9M4CeZ6mTtwe382sDhdZHszqdLfMXbveGqmyLbQhzYrEkbUSuvABpt3qxYQxHo4Fvcp2SFdPkoaC3",
  "key11": "2Fcrxv2XkeLCp4pASx26oG3z8VXYnhFBGXMWjvgRpbzgiGXKEsKpDiiiE9ENFvFE75qJ7WqpvUhPdASDViorWk2t",
  "key12": "3yz7EvTxhhHuMMuXBkuMNXYgaNS5L7Y3mp1DnTpo3sqvkN2bvkjn8CsjhVsuQ4YB4K34V7SaEn7UxA3b7hkxbtEk",
  "key13": "3yKo9t7VcX5h64KsSWqaZN4hKHVLkRibcuCyX9ohsezGFVCGA4xxi5L76saUcoTVgYiN4JKzktTHXavSGzwGa8eu",
  "key14": "668wQeroDXEVN8C158Z3LKB5HMAP9TrBkpxVH19mh37HabCfU17CygAjSxLYiZzsHkxpTWDqx8YGrbNsbVuEQywK",
  "key15": "3GsFDkX75Q4NBWrXaMrG5M1YEY61ukEPJyQRXNNjzzRuHeDxCnoLbkLJNoGeXGPTUx5tVFYLFeFNXH2wweGjoAsJ",
  "key16": "4wsvvm9AH5Ky68c8SNnC3KxVSPXAb1Hq8YcQweHxeuswT32ia7RytQjeZCAxr2rmD3NVwgYGnwnV6pvAKcyipr4E",
  "key17": "2RL95HzMcnzbxfDk4GQn6rEi9JBomP3QRUX3UUoMiPCsvFak48FM7FPE3gqSG62kAmuZaWgvEfXDgF7phLGiCLmY",
  "key18": "3vNx2pBm96BLAN6nBztdjjXQkdLWN1tcdZzJ64vEaMsfS77PgzhtcmSespmtTSVnwnxTLhxXFhkyiDhTWtN8iHkz",
  "key19": "5QnNJA68s9t4isHXF5T8igD2SupjVXDQbUu3N7PU5UVycURXiuGX6RAqAbLKYyiYmUySPmPHZQnETgPY9WLYu7t5",
  "key20": "WBrKwLBNtmd95hSWDZx3C5eStSZaC22W1GW5DBTPjd7bpnA9SX6N8PPqPaxLdaLSWHrhLpzjHRBT4E6gAqceP8e",
  "key21": "5exXMVvuXoXLkZD4h7CjtC9iZ8ZEpQ3rCYZ6y866D8fA2SqUDe9YVuNHxPQ4EQsRRzbSGG6bZbfgkNsJiYJVR5Uj",
  "key22": "3cUEJTJ7pMAz7PamEUycQM5tTiV5hZkahvPVeZ1viSFCEQdjuU5zFRq4NN2Ycg8ug1yetQD7XAFrXmN7EiEbVhnA",
  "key23": "2j8Loo52cDvde2VPb7dm6wCpiWYQxosdZaVs8PgzokStTNyiRyEmeWYGiucNJYuv9TE5ZiBptvmJydpTTfT38afh",
  "key24": "5oZ1NTqA2BfPG1qLPFuVecJQkLU6TLibb6ThYxAVSTVWnbGWJwYknddQnyjXrcaUoDFvnQLsJx8WcNxK1zsRVaFD",
  "key25": "3Q55eBaF1AcHPM8HB58NADUCWfnMtNhZqMxL43uoMatUok5HYaXMueSjqdy6Gg7h482Me1Ba15UtDqsecs3QKbPk",
  "key26": "2pfhYEvDkX22cZDB9TeETQNGNpQKAuv7gfdB9sYwNFv1tUTUw8cXs5ZWN4fiDhmJBANzzwbjJ1h5e3WJyoWaATfF",
  "key27": "5wWcWYBhrqpphiwspgwWFVbqqmrgec1XjASCcQByRax2YFv3c4zjm2fBzNvuLoTQg3rTS3chBoA7zyyNgjZJHfyq"
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
