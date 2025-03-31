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
    "2aL1x5JGFxvMhEDibsV1hEXeJmdrg1CXcj4Bcngevff29trCC7URDz8FjLCKZhmkgEZHnBgqUW52viggwb3Vja1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SggYV7eZDai9TT3nR1jYn2ZE2s1dnGbepoNau5SQ4K6FDrNUmbkJJibrkaffwnELJqTqBmcywDxy5HNPaJ82nsr",
  "key1": "3VVa9VK4ECDT26J1CEQY8aZaKCyZJQg5AUV6t8MxCedLmPVahAkNSsxJDFcyBmXPwiG6d3QgjaACwXuEwm9TzC5J",
  "key2": "sRGp51as2ay22Q6VrVH2q8TWUjeVKZMSpeT3LvRtHTsVCkEKYvZ3Ujgaky44XUH9mHC4pa5G6qWDmDV4Qz2G8d6",
  "key3": "4XZimwvFj4DdzygJkthoicR5FcfCmtPkytMW6EzTHR5x8ggv7TnUQXLFPB837Tjm2HqMrd9mYw6iPqXV4J4Ghw87",
  "key4": "2CQnTT8q4uYPLv8htSNxBTkNti4SQshYAn9RJu2E5TCAy91jC5u1RMfABso14vfZCGyKiuKQQqWBrU3UgewUkYVG",
  "key5": "Gcvg2ozkZciZjMgf8Vsr4UPyNaNtTGsGcCR6kVzb9o9yEvUqmWxfR1XGCnd51x9KuD4La38CMtKZgBF16t358T7",
  "key6": "2XuiB6BkMhjrE1GZKfEqiFUUQFhJsrWz7MAgB2PzVsKPpxBMmrhBm8LYWmEPrqoY7wGgq1wbBTP8adocCmmeZARQ",
  "key7": "5BPC2SmcmdRiXZoLprYgfh3SenUfS6mGgBvmZtvjWkUhSUFXNXT96UzsYgRx7AED5rgmkkgRpvjcURDA3cjRNA19",
  "key8": "3hiJjSeey1umdpo3Q7dNsnd4bTmHVietGUUDAA98BGub8JTg2s6m5ghHqfGh5HTMvELV789ubw9UMCzsnncRRHhH",
  "key9": "RSY8Ja7EAMBxgPrWmE7tsuK9mn2kgQjSswQEe2nhvRWuWy1uZZAMmzV5fANXoLZgroRyTGWGHLtSRKFBoN9eh8w",
  "key10": "qRwr9YHWMcHtptDpa8WyeLzSFeeNVJbC14fHjneoCRS7MRQoQ2SM5YBrqT5BaB9dbsZqMZT4WZTDaFkVEt72nuz",
  "key11": "4zi1qS9qCqrdppSp99tgp3Jkx1vD4QCAVWjocKuFpimW2tmhZSHjHks2HyuD6NRhi9r6h4nk34VLo8xvhyNSaurw",
  "key12": "vz9DV7ieZbsEZUBkEFSGVvKJDAaWuoDEsbhcZbXELeQjaAKvuhwgaBHV2SjFGbpo19cA8uEwGwn8UpyC5XN9MwM",
  "key13": "5XnoLuv79gq5zYoJm3uSYz9vNM4P3W6Gn8syYHoj1wWrGozkxAmLayyVvZQXNSdJUgQoppmbdX62RjSaGXXmKHJi",
  "key14": "2orvoZDzyRqRBeSFWavMi2KB4SSyQZ4EWYXBHLwB8PTLrtH2jAcf9Trw6nBo9aWVwPdEXQZmdG66GJRuaUj6S8Jy",
  "key15": "4xDVt3XC5wx6Sv6ysDSDg7oxdaLCgM9oF9Ta2X49MQ3CFa39qvfq9hEAAWPtwFTrHMN28Bq7WqzxNwYeirZtKKQQ",
  "key16": "2zgzDYA2h6uJ7WeiyFmPuFqwv5VcQLiSR2ZfaEkK3dYNkUptd1g8L213r9b7K9qcwqkXhy5d7ieGaGQWS18tKTjK",
  "key17": "3ZC8j19LXZGUprm53Jnwaeae3JuWtknM7QZEmijtMpAVUkhLdmt6sXhcZZ8iEVsSSy1n8vm2jomvNNf2qEKWyBJM",
  "key18": "4uSrvqfrKpYJeEXukMMtq3EHdNzuSbw7frmTC86NjHnPnjmPfCUMQJySE4SPxeMPyG6vjtg7mVPZbDnEWFeJBAHY",
  "key19": "47kELYZtYHhAonpL1hRVvZ5SmjGJ7uagM9qMsCzeHgRrL2wG5tz25hSJYDefTD1gdzNEyatnke9q7jHefhEAHzZn",
  "key20": "2VVdS6KtMToPwAFW7ZV22BCmTzFY2gfZbZEzeVHbpKqNcYi7VurucfquwxP44f3RPnej1wpx9nSw4sX7kQwTFC8G",
  "key21": "3SsMtot2RZkXu1NAFFWShhaCgDXjxmPpQhQ2Ki3sRkSWkxpnR1NwLVyaNjpZZ9YytvZX4925rwFwTs2qtkpQcusc",
  "key22": "32Y4Y9HxAhU1NZMrzAevt2pN5E1SPkr3KVG6pkivuQhHJeakdbd9DMW3uSwx44FGVQVrqib5pBwsqUkokJkmuvgY",
  "key23": "4jJ5e5mxkk4azahQ6uuMViRQnst6vXo6UbvqRwkj29bDyTdbmeRG1CxaNDivamc9qUb2Tpv11YwSNS3P19kXSw2X",
  "key24": "r22P7tTHgYzaJAc2ztAqswH7cgagrDFPvNanWRMEUx6TrX9bAUpyWHHzAXPzsXDCwFprCRyt4cqYm3ZC7Z8E8US",
  "key25": "5G8AZhrPJZL2cyQrDeCqJusZQ49m6o4oTTF1wJF5fNEMR35PhsYQ6Hg1oDK5DJsxJeorZwBzCYuMnAMf5iVaLTSV",
  "key26": "4mPzurw6xKgz6MuTZaqDdt3h3jRH7ByTGps3KbgL2AHxpYnpYEZ1PNdEiueKerxmwwfM1tMd8kiVa4Vn9S9Gy1Mh",
  "key27": "57bvHwxGMncMi8DH7WPNEywA4wiCPkJXbevARFJktB5eoYLcy8czUz6cJxo4uGckzwChU5zLaviMYoEcBGuDFehj",
  "key28": "Q1zwfFb2SSse4FbYjaoC2Wpo2y1pLb6sWXjiPkj6qiJB8N37cUCGFV4fYQRW1ysptRkmPVb4KbCPoyzaRmqwBky",
  "key29": "5F3N5yCJPeNJVMa5uDqqaTECkNYqxTRpL2zKjZPjCCM32kKouvS7BTZzSrKZgZyPQoFU1cczT9484YBh3zqrRMg",
  "key30": "3d8NUnjtJ9y434S87hUkzkHNE3RWt6S61gY1bqPVjCZyptoTCZCrRwro5njnmcpSuiuYkpH3f7PYor8CGbTQhBbZ",
  "key31": "2RMygiqTwuySCQ4LxMS27R2tEVPRJNRonFyDjVonFhchMqR8Ds6Q7ZogpEiUHHYq4oTmbvHTeYBtv4xio7sRHKSM",
  "key32": "4sEbiwh8tPGH3QzKi3U3616JySf9qdSkS3gY7LAc3UC34iCeJReXR3wbWMV9wzS6Hx1G6vfq4E1uE6thZvED4tB2",
  "key33": "5UpUETgTG1Jy8bRC6pbaD2PPmBJLbbKsAgGzz4K6sES1Z43YrMRojrmpvgS2cWxoCNPmoKU7DRaGmcg3iuDDCsLo"
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
