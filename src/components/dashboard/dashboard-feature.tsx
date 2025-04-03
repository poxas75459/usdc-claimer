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
    "Z5shvUc4HUUweoxP9Z8CtPU3F3X2tjcm9tKf7Tn6LHojF1jw6xYFxJ1qXvqqr9ZQx1wu72FuiAVBMBt8Axrh2qs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MfYprdnT7yrS2Vifc586qoRb5nVW6y51qDsvg3rEmXLo4LcRyTCQvegHUWvBUB1FfyAKpQdNtko9yNoXXaDYz8h",
  "key1": "2QFcNxaafbQdq4PTVPLGS4W2YyZV5HqErK3FnUrtmmpPSrmpQMfEK19Wquc157PPdFYJyDm6qgGzD5h9euJ1zkf8",
  "key2": "5pWNbXwFSx1ZjTpsHSTCcQogaASorgFr3j6Vessw1rrvF3FMZPRjMgRh1ubjb2Wf7K6imGM7KZ3BEhSH1qR7fmH4",
  "key3": "2T8UxtGfa6wu5Mw4DmET8PQ1UkmMLo8326rQ2ThRwBttcC6Fi9HSBh2tu2qwAieTmbU9tYg2wm6PQV6mJiKVprvK",
  "key4": "2JMtB4qJ3L73GjoKxVZByDGeD1k6LnrK62R5WW3giAXpDUGP8MX2zjsqdn2S9acm78vDbCqFyYnE7xG7FhSzZGrK",
  "key5": "3RMYkt5Kh73gefG2idLwaRicXZzhiQkx4juJi8UmrNQhHS5sBGLgsB1itYmS67Xy8Yp4SyvY5iE4DgeunnHaQUm9",
  "key6": "3hkAbzM3bGYDntr9nziGwXP7pzMse1xcnAWUrFQ4gqBK1qmK5UkPTHMk2BLVemhKsfcBKwbZQHyc5cq4BnUSJ4fM",
  "key7": "4drFaZDc9YCrdVXegJffLfeSnFm6MzpXEzPNyhSy4miaBYYwe7a7H44ST8QJSMoujEvjQ1aZLZ5BMyc5UFQa2Ajk",
  "key8": "2SvDij3Y4RSdCprNHoWu7VVNQ2WJ7PZQvgYeAhLcDZmMQ5z4qhfxvY4pJrhudeAfAXuJbHUy7jJjQQnKZedEWASg",
  "key9": "2LnuHL3w3HVvKBH2Ns7eYfXz3tF8MJhmiMzf2k4g6MF7kYrDwjw8YtjSaRJaJEkhohJkSSoxi2QPCPt5U8sJwefE",
  "key10": "446XPz2dQp5zHQJWJk6LoZ9b1LqZfSL8Ls1v1X1xYdCUExEXZ7DwsoCG4vbw8SxcRRjXZ6SWJhUj5C1fPu2DRe7b",
  "key11": "2fvGUUtXCvmiy84u6TbpvDhbmDLx7WiSQmnTry4LEH6qDTL2tmYNHpfQv522v2RmjykjBBusuAzvYhMnvbQPLE5K",
  "key12": "3Cxerw4Q81XiXUpNh5zG2mxHB94dT1nbUwsV4iY6U1qvnCCtr8kpn9aCVt1Ypfdk5Z1nnQpdvv3Zm8oJ8dF8bXLb",
  "key13": "352Vxs1fxUpCa7mszJ1YFfgxzwABjryz5vQafMaJWMZe9XHXkwFsZQSm3TFVLvKDz8HC56i9C8qc8iwWnAP3yPkU",
  "key14": "51QJUBvh8J2PEBGun7YVhD7R918rJXHFBaF9yVJpbssSS4YcHh6AxfzoL39bquqSwTSzbyiViSHEJKipLoC6aDzn",
  "key15": "62jgFhDcTjgRPpLP2bEMsC67BNubB4TmJeAPoZytENP1Agpg8hsKJzLJXZ8MdvaqZcUz186fF3goLmvXrsDi6uon",
  "key16": "4wUXCssicjKZWpsy5zx8ULnE4ZTmRR6csP5qKn9waz3fwGUuGTepHx4HPMit32vsPs77FZF4qayHgvkFmouMux1f",
  "key17": "2b4PWJF6HboofmWSYXKePXWKaPN9u6fePzbFyJQ5xJMUT2QpqjeWetETrVQVvq2g7EjbruU4VGZhDNcuxASXF25H",
  "key18": "me5UZn9rKmJLYFR6zbvVEWfkY89SwdqQWhdVXEZEVxmZJmE7scQFxzpVgALPXpXzvoHYW5WWb3bU2Rvywha265w",
  "key19": "22Wd4VHA3wmjWbN4JpZJU4H9YXNHagGK9AwvuYEiJA4e3C9uyWdr1VudZhC9jfdFfJZohEEHnG3dJgG3hVQK7unH",
  "key20": "3BHpWQw4eTjgmPMF8AQMqJNhqFUoVuNs7k4r5tCFmhY6f5VixQv5Y6mTDHAd8xBJrzcaBTvvaHL45PUDe6wWFPkA",
  "key21": "5vkvNFyXUMWz6ZQQ7gcoE3GMnBsQFxwbQ7XhG7gASs1JnN82Ta86jkZom3iUP6n2RzNvqLQCAzn2pyLX9MqcCtG5",
  "key22": "5pjtsaGboeBUrPdm1cANBxBgBqs3Mf7XRU4j2PzW62rks6pzBksGzovTdDVkC2DMg7ydVuxm3mjz7iHsxovSTniL",
  "key23": "3crBysHjgRWH1cSLsmZqU7maEv7ChS7pkJSZgFEnAmx6uyXAToM6UkyrQtJejnwJPqZ6Ru54hnNTkEfqQwSaP5cS",
  "key24": "3XcUCemMNUK3sm5vVbj5bZDg2o7whNRRjmq1zv52DKu6N9NcM6DWWVZVyeX9KcvYtovYKYEEs8mWjSKqaLEENMcJ",
  "key25": "5rgXQobCp9ixQho5o68qSi2F4vnGCvcxJJB1umTcxpRFARXv2L2kAi5ggfVFrSdHshJ6ujt18VCTyEpYfsfqmJ76",
  "key26": "5jn5makXJ8EWo2y5pJiLQ8zxPZymyF8EurkN8W5RqwySQDRD4CdKJ3zjE3hGau7UrSYNziHjdKqaqgCFt1WsZ8nE"
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
