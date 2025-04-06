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
    "4cQFbcw7mWZZ575uTfBDEQKN7inCPj8k4mcZZJGpsVNR2SZZYBYkAohH7ssMZHpqArJBzjp3t5aF3Eiq6E46X1UW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cFa7c27M9tHryoGY8Gygyn9JAoToWx7XdDxv6yDy6RPfFDXE3LdHrLroyi5gHRDw9MF87dPjHnpguButMBR9rXj",
  "key1": "rjBat9YYP5y3vFYwGLD6WsGLfeGtEFGhvQE5HULTMrMLaxVET1pH6GNjZgdW7n7o1uMfzchSeQQVRxY6kiPJdgy",
  "key2": "5ZwSQwPhjGd58twTQjypWaZon44B4C2PBXDn365MWxLSBGQjdQvbmU39CDvWfVUGr4hynosRxUk3FZ87J4oa4R34",
  "key3": "2hGVc2gw7hUxXnboN7zP9gSDsr9y7GmKk7A9CqqcGMWZwpGBjTnCoS6mqYZQaevuoANR8h2kmruF2JUmhoke3CjG",
  "key4": "4T4NWHE6rVwanuZVwpryK6powYVcMkdszqVFftKg45nBr8Ra7bufJu1Mzs51y5nuuXfKaCEe8JCP7M2Zjgost8Uj",
  "key5": "36AbjoK6WxoLZK8u3dbtiCH2WEv1ykSMh3ibgtQHLZocXzQExhqF5mrFHbCJcQZhYfULsLnfrp833ADxvtv7E2CV",
  "key6": "3vujxtW9vVrdpTBTw1BVcans6o6YFLsSSYMonrEiFtouBywgvLXQwQwehMPyfvKtJMGis9FegTo7Zz7j26QqirXN",
  "key7": "5sYWARzzB2s7qgTRJdeFdn779wVkrYmX29coJF5y8i7CDhpMPPn28T7rdJPWMjbK4NM4sXc1rK86mW244Gq9h3Lv",
  "key8": "2ZLKuoRMaFKTZdC5t4NGE67SumKsJqvAuewg37sH9a1rRLsftrWfQGjBeGMh7JKKx2LEvP1b1TdEHnjTdgrQs41P",
  "key9": "2JPKybW5oq2pt5tYyteaog2MCUasYUkPzXaLnD6RxW2aYSF595b53GsRU1PntQCzUzzDFMDPx2Tg5qNESVoMHcVr",
  "key10": "5ibceYD45nKGhRCojhgX3S3Cn6sfYJrhVkvtGJDqPQJ4pgqmGo6Z2TDw9rvJYrxNHj4eUG5H6ot2RaAWAZVSJCjF",
  "key11": "3YxsnhSS7NkaLg4BGSgub4h12Hvjx7fDm4WAgmcnaJbjMbn3qrPzvMNBYrmNyPXSp1sgZApHTMJYfvodBSy6mggZ",
  "key12": "4Krmxij7TcXsCbENriCkYrTNWneTXVioSfMPFU5mkQRMxfv8m6PQmMAD2bhtTTTMkaYBvAZjcX7fQdU7FWW4T5nf",
  "key13": "3fQ5eJyyg8dQKw44o3LAocXBR5Cqz5wXQA8d3GyU5PQjVzeEMXYko6dWVrgL8SUmmPxVMK2LV9wx3Y4EGRZKuYMm",
  "key14": "23RRkCe9yUDuheVuK2L1DZhUxhEkdMLmZ8ikqNzFAapGuYoqqnbfLSK95TGMUfcdA9PaDkeqwn5E3pDJzMvMkmjJ",
  "key15": "51C3Sh6xEzqhabxn8zwxGzWojD5xP4aD4yjY2RSP9oekcNEsU4mKAmpYi9YcmjT4ygHno6QXdkYGrzDTvJLj9rCn",
  "key16": "uS2DG1gdsRCGQr5V7HAtBUBy4QdvoEQwE2szat3jBFMXnwyemwEwRKAEGHGWSjUH8dcZG7zxxYbMQQG3nkWUBAL",
  "key17": "4SeBkRa7yFCAiFeBb2ZeavyuLMKGXUxpjaeo8jMeanTsdysaM6qahcHQNUmPhucXspgZsyyNqAfeSQs9t7MsZHPs",
  "key18": "2ZkXgmeCS31M75tYahmNLYhhi6thA8ZLxkBFPHVjEho2ZhCmWp2TpKWcchfswsbXLNnaV5BTDAzrdGzNJhhvpAv8",
  "key19": "3tqVataYXudQkFpT6hoCakxB5KDnauNuPHvVsbvFeAhKkKLMYpXU6WzDEbkP9djZSfPqEWUHcoFr9hN5BsLcuTs6",
  "key20": "23cUcKj9R2hTFwsVs8YPV3HpoEwPpQsbdGDVLyaVxvWzBqiuLb3pLsKUjPAxQ6shSRVqd2iJ1dqS11AZAirv2h53",
  "key21": "5UrGzHxtxH4Q9RvQAFFvDdjpSSvf3CbShz2My2UxrZYEXLwN8X5oQ2sBDE3Fia7wPLsockTMuAd1Ng3YbnNjxBUy",
  "key22": "5Ywqb2rRSr6tShkFjUr9vCa5vo7QrAXtffc4tZBoqymJYctbhmHHVJkEPnSibeFxywTQVXXkA3GF8N77dzrqFjPx",
  "key23": "4zCBqf2bA5WdknuuGsLrVL2GTt6wBafS35eiwVkbTiFFepeRubUnLDpa6Myzi2unoobH7ngaYzruLRTMtrp6Hvs2",
  "key24": "62J1nQxgbmsKqagr43V1otFornaMGrid2NLPpZdXveN7qKmunPSPYSzQiJjuYPz8dSE9JMXutLLTufK6FK2isSnT",
  "key25": "2v88mVUNTh5om86RbRhLYcZD1HyBAWqYSs1Yy6wMoFQCZoAUEVANB8cuQamzWDSMmkba2UgyBUjZrrtxHXSUNde6",
  "key26": "66nyxUSZv6cgu51QbkHiURC5UtP8tiRJbXZGrmcUSKoTQ4qFGkfA7tuEn1rZVqqaiLsUkGx6Va1NzFm5e5YNjsrm",
  "key27": "4JJhHnh69RoZpZWmEJuMYznmJR4z4FhRaDf2JgnAJigehZGg5P8gE6QYQAiy7um2CSALYXsBdEst8EsSNUhtT4Nd",
  "key28": "4ck1AizHQBQhAkEm2gCpKFpckCNwGHWj2QtiYFMA8LgZNkvSntC36KxxMjgheDHug8NkY5jFMSJ5RDTAffKmbBmd",
  "key29": "dF6juWxmLeXLpCNp9XqgVBJFhWcpUDceihbwKbKihkUrsvdes12Wq7U7QF6XFPNZMwzbHbvW6Vp7ZiBXHfh5rrw",
  "key30": "3fnyMBXkKSTdo3vmyfK1rLmWAUNjzRtzL8hnfzijhQUBBMKcuNg2w91BUKXFFfsfw3GZk1YhtruPeKwSttZ7FiDz"
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
