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
    "5micAY2P9eSwaU1s92KCu84K4Q5YNwPKk1xmkNk4UGUnn56bU5M7CcszdGa8WgMHuKGzezn8eQV22TM4dbndR6wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35BehmFAkZHrtAt1m3NuLgoV2kV9GhPc4QxCxUW35DxNFrr1m5qaVrVwXKfDDs66xGbt8FJhfAUkeDXMxfzWurZL",
  "key1": "4nKMbo2ZCaVfZAuy1yGJprkGrwoknx9rYSkr3EZ5SjLd3wR3EcrCcauHEYfY8wqzpZ3TvmshzpTxAeADnKMVQ9NR",
  "key2": "22B7nR1BctR9ndfkYoEUqPHvDiiadAyaxu1Dp4Xeanh25aTDAiXDe65M1bUX1CsGCYQg6ybmYRuyStjjUiBJC9YQ",
  "key3": "4ApQQjDomLwWG4GRuYSPWfaYG8Nb4QdZdfL3sMAaHvcULcEQJAZq3P3JSbJHVEvDLkxTGfmJo4KQ1CM6ggcuqKDn",
  "key4": "5rSwCKitxCqmzPQ16KnmG7UtvWEHrNqHrfkjnRWG1g9VcrcCzm2XrkY6S7UighLfYYCuRrnDSNg5kMTv1UYjzzSs",
  "key5": "42VosYKcA62yAxKdrwysvGzG5Z47abszoe8EwiXQuctN1oq11PNNutD25rB1cd1BWsrx3J8kA8iKTEDCbsHNPSE5",
  "key6": "2SznnurYEHtP3tmj34kzGrgoSDfPw79K5ns5jGjc84nCf9AsMMNoUFXnWmU8tSNYRrUCBJCdpKmKmeXiNmwGd5Qx",
  "key7": "4NsEDyYoCzLvWoLeThnghivhPsWT3iWof7yQaYr57hw7J1hrrEpBU58FnE5KquJM4WiwNysKXodtH3uGkygrRi8t",
  "key8": "2hGMgaUWSGaxUo2zd8nWkMzpdsS8SveDCLMSQQLDRg6VsjooiCmiB1axvWziyPiuTB7jWVNd5dP4fMU3xtxUfM82",
  "key9": "Nf3Qt5xVGueJ1tD2NiuRPk1ENtuxaoGnjzgbsoVeYDgnpjnANPwSDtYrNKdEwm3VhT3afsnthFuP56YxrjUeT1p",
  "key10": "54GkwAcVVUW3Bc3xP5PJP7YyHwzsRdv6AbAmG7dViGbPALLBqZxKuGrE9oBejj7wn5rgXsBPefQUNGGe76iuKfi",
  "key11": "474DxBfwjVcpX2NFTrJGTw8K2a9BShcohetY2UymWiAFx8rCgZhwrdqNPWU2YGS5GkN8TCnkTUWhaPHtPcpjwfBe",
  "key12": "3JrQSdfdZPTtRsTJJKFhUaExWU9Xh238yt8VUNsToM6keisUfEpB9FsArRGFvNj1m4L2Gh6TGHUpyhEA7n31ziA2",
  "key13": "4xNKX34b3K6N51VyTLeUpAWGUvN9idgn6AHM7usi87mvvsa4vFGo8DDLHdyRd9fU1aJsPrQmcJCiF5dtESYcn79S",
  "key14": "4MXUUjZnc6Q3x9FmBfkLCaJKz8cmXpFD9eupe32noG4X9JqdXmngz7ysJ1UwP1yTZkhbYVUMXEKRqE28mFtGLa3u",
  "key15": "aXbQE49av88DHbwcisoUPLCNmJEt822vRTMfC3LXYJ7YGrKosSGuD3DPLnUDiGLMCfz6vbtHUMty5MEm5W8P2o4",
  "key16": "5YNw47ZgQfZk6hgyWqhkWPpQ1z8W478EQiQXShXYM3Zop5soaztarRkcgzrFmPLWuyBz1wrYP8B32AaFx7zVxYp2",
  "key17": "3edZhUK8so9WT8hwMKg49iZe3uHFzkr6GhxUfUvxRfazAFD9YYWp8iKpjUPnMSQNvNqDzwYwXwQ8yNdi3cXeKZJc",
  "key18": "2ShH4bMqqjNahfY17kXuJWMWpiZEmxzhrRStaPzG8WaA8Gqhdrddy5REu6r8aQWyFksBmxiQa92cTKSNZwmkeHDP",
  "key19": "4jKqYpncfqXnbVftBCGGPg4NLpHDNEMtdEigfMQ62kvVwpraczbyhNMo3i7x9woWzxvWec6yU6LEdnVQgjNihaNt",
  "key20": "65K2fL42QdDNd4rZXaWzub21MdM5RgZAvUF4xvHb2hPfU8TBu4VmBrvY57s3vAVPvwVVScEp7uLXuB5ALSADP2RC",
  "key21": "3uR48yG7iBZ5QGxV8fk3o7bFwJupZ4hmRSmVuNP2CGWora3yxmVMyJaj6Y2A1ToUK9vkaDzhyCjXepJbgXs9xb5m",
  "key22": "5Btp4EbvV6FMM12V4jEninNXaTptrtiAvExGq7J6e58g6ZRdPDNyGdnFpGDJjDxoWEtJgV49a8g3ZWWz2byjugLq",
  "key23": "5zTTdLnMFHTzypRYXitfbwVJTHPe2MysTgrduMt9KcHCWadkDPK9rtKY2L4VvaoxtmofCYngjJfsBaDcZUpvM4RP",
  "key24": "4S5T1XTeZ9YGRpotfZsGEjE14HYjnNUewbf6btpwBkgLssxauYvYT4K2rfXmne9LwcMjtjdj8HRhv7vSK5uAJDf7",
  "key25": "2S148Cxu2vDrBWm1KUDc4RsmB24WzF2w6hnJ2T5bgMZunWJ2RCSYo7ppeDHCwbYp2pi9GCrGfBiZVbbyT2SqntEG",
  "key26": "4JLTVjheUEve8iAmSFyuUQ3Q2dGWEJHu6kZc6uFm36dfax8JaWucrTRxvhWLyK65L5WRyPonDAKMZz2qdNMNYCsV",
  "key27": "4dUG3J8j5SiPzd59EHVs8uqBG5ChyfJHBowQif4uoZA4EPcfp6UUrHBx3TTucsJYXjPLrFCHkXqHy6Z5yTwi9Ekt",
  "key28": "45tobAEC38CnkbDZM1EWd11gM6qaQxqmzG2sgDnqRxkUhGkjWdJCckW8YBQ3tTfH7P4E6VLNrzXEH3QtAhppzFQ2",
  "key29": "2rfMDBJt5UWBe9AduWiXNNKn73s74vA4J8KPHkFCZtRVeMR3ZLgmkzT1KjaTknsxQTt5EPX7x47MYJQXXhx5xJYM"
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
