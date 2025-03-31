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
    "4AaUwB2dp9Kbmj3nn5G43H9WTFW89EuRuGKxgqaciiPr3mFAzV367gxzHRhhN8SnAD9N4fzyivXW8cgaosM8MPoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F2bBW4NnPfXGkpY81qK8sx9cq2PmUBr3tPYbEncJRDYTRe8D5JQ7VizKNkCV4gLt74pM3TFfhNnCM87KMXnnsUD",
  "key1": "3nUgC8J6woqRRPUyGtHZKG8ftrBHUSjAUGMScsowDWYqcvzZqSZ4gSXvUQVeHZWRedcGuYBR81rp2pCLAxufcd3u",
  "key2": "4kRbeo4erW8FPK35ZdctPRfSa69WNe1X3jxnf9Us5ZQcg8yPKE9PLehrSLsxxWNa3V448YrXouQupcKCGLxJcUn5",
  "key3": "4qNv99T1eyuz1MURWYhnar13oFk5JWfF55HE34e2yzrX3mKNkFToJk3o5gqHJvdGTwEwYZ8gAf1dftH8n5T3QXMR",
  "key4": "2hNtopNUYfyyDKYrcZtyQfqADLmoxu8qK33karPBqWLvRfHrzrgzy5hTD1rT6vCewWrrDNUkGDvk3ZKpbUQfZJ1d",
  "key5": "4PCW22Djp52jZje6TrAdkd62kx1UN1xqxvX3WE1VwsGJhEtFfxJCCA8dB24ZurM68uaH2fHLgs2PLSDLBYo4FMjG",
  "key6": "FJ1u5m2e6kMaL8ZbTw6aJDGy7NDa6aPdscmgmRSi8y4d8sMEbAmR7bQm2nT2eTRJWMSfSSrB79aF6RquMHSjxe6",
  "key7": "4F3KPNdmQKCAsKsH72XJgAKQV5TACvG9A29UFTYdtA9yFg58t6tJKksjrcBJpbSauZDZhg41FLTfAYRUnEuJsKA1",
  "key8": "3Ph9Ktw3MSua7hEeKxBRR6e4H2CxiH1fDPpZuMw2WNSoSPzcd6f1bre3rNQkjnZYuuo8iPgf1pmdDy5edazBox9m",
  "key9": "5Ggh6YWUjpWEAS9t6N4FeHQyr25k2bLLfX6H6TrtNBVT57f95sm2XFHm1PD6MzbAPimQ1pyYY9mD2eYY7qQGPXbN",
  "key10": "5N5yaQQPtfynucbQx5YPA7Z4FDKZCfyvt8ruF1dUwa3tJgxfXFUBZSegQ3hPytAUKQXGcQuyT6f92ZabWrF1SHaS",
  "key11": "2kWXm9yL6fVuPLbLqttV749Lr5NpU2sEcm9xrwzM84Smq5nRR2HD1Zr6FUyXTRizzP7esJ5dHQqX8pzKJu1A4yGN",
  "key12": "3owwPSjp2ArYaPrTzG8UQMn34W5GEkymHHLkDRmGh8KbaXFGirNHGCKpQMpcyL9DGu5DQ5rsa1i35qLYZ8b9aWoT",
  "key13": "HMz8Bb7cfNrCGqoYZ1wPvg2tc5S7M2USpN9yUuKbcmyxyYYdztcPQcJt5FQfLZY5hkdoiKRbANJApGGa1NTqS7Q",
  "key14": "23AA1CPEDo6b3eRKXuuBujxmAVAWJJSZWdC48a8CU8xgdLH7JtQKMvdtbTT6BSKw2NJz4EBD4RdQXqMdKfwp3CV8",
  "key15": "5a1vFhG9eCV7KxjvPCKGXJ2j7EX9VnBQnvZKDgtGYP5aXKzDBWw3GrqpXrwncSwNTuFrgUyvcCR16dDhxgXhhFJu",
  "key16": "3q6wdDZfvK7mE6rmwj2KKWH6MYDrabaFGj3aPTaNRWRLZUP9ii3Rbv669SWg13nJcnHwJRpy1EJsdYuRPcfd4eFv",
  "key17": "4Rj6UrYnoCTsiWTygg4m3PffrGZe1PGVceNstdjDLcAyh4nTTZMu7hqqCLKcLdCJrh8qZG63yFxXs8CbAbzUjJwV",
  "key18": "44UhyW1dGn31ogV1hPzUF6TaB7PPeZrL81Jz4tb6VLZaoAW9dmu4PJaN4D2QGp5e9XykXJTAuEhx8Sdb3yNeG2WF",
  "key19": "41HBX62NToMw6kLZhymTNZrq8vmAbagpRnZZpHhEjbzofHx6RsEviMuRbGjQxZXmqRUEhv7FvqZJdipNP9Dp7F1Q",
  "key20": "5tt1rGgxwRi4FjcvN8z4JM5x1qdEqSDQtMGdx69y8F5oBJdnEnneknn6uT2SGfhY36GvtLspTfa8UXwoVeqQjGLx",
  "key21": "E4re2bkeF56SZ7z4kS6r3DpYfkQSaPSEVx3VvzBj4MydFr2rad2zt8s7uTbAN4QpBgCLkqai8fbKtxsJXQTa2pD",
  "key22": "64wd3cyXQNDz54QgsEQgbCg8FHnhanapxYkzvaXr3PMd1AH3Y2cghG783KeyMQ2zngq88ZwxT5HPzABwioJZxRv4",
  "key23": "UsmuBzzvcnHf3G9ZeAUNHEtgiEjNCKWWSRNeTjAn9BrMqSSodaKPK97A9BG7BjsVzLaZs4dGm21SHnRTEWHM92S",
  "key24": "2wBhrjMQJY1JTFE46jhWqLANJQrFdNMzZR2ZvkBNTP1Sb4nWryiTtSNXuyRMqy1VQPK424xK53sXCvPg9nzks4sQ",
  "key25": "5vKt3SmvPuUuoPsjfLBGpL1vASEUQeTrMQ448Mw4jt9HiNgtxx1ALL1NgQq9wKuHxfMHS5mBKpQXwyC9EdTN6UAT",
  "key26": "xw7YXoCPuSCtgTiDSn4mRmWi2EiqerzF34Me99r6NnNAWBoNRZDz3koDvCfCmeMywDG36LCyknFiZMhPRofCC3t",
  "key27": "64KBBij88yZsBmU6DPsp2b3w5aMoNBUSaopUQD59PWXhqWxVrLevK4td6uSrgrrobCJTcQaZeZpV6M2gjcyRfEw5",
  "key28": "217XCiE5tGFMekmwpi4R8NzZLAmUNoEw2yfzkK2hchquMZC85zkxAtsqePiqRZQr81HY7ci1rt9SGDjFmuDRgt1R",
  "key29": "3D3ae2E4muEjLNnqvVuTNa4qFvGUqCs5t9MRua7iz4z4vM6wNhzRjxNFKUgDVG6HFZRvvqpCy9kjZBRvKSXmFR6a",
  "key30": "3EpHijTtjoAeFvHsYQ74tLTRHmbLGTcUUmaVXfjVuLAPSYeXnWnYdVtZn58YFRJGkJPGuUiLoqY5iUX8xjFVGxLG"
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
