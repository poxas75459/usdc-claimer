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
    "4iRW79fiyiyWkH8vLiiTrYDCj1NtPHim3qWyD8w5PBwma9Soj4Y3AEoKa2Dtc7wBigZBmPEQVKM5gxBFtZoiSW3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mz8ZKkjHxQnfcmHonLZMv63F8YKYM8g4vTYzquodb9fFRpcvkLShk9qhnvXJjAe7vK42tRUfM3UHyP33dUaNHth",
  "key1": "2p8Z5fdMpCVMuTLRKESkDfy2W4wWr7NjJKpdBQS4qAV1binnoBWs5eCDG2Cnmk5zXcRLop7k7xZSb15aS14N3Ez2",
  "key2": "HzX3iQXzJXtxKZbTnuutix5dpU79criNEw6Vz5XXV7yd75z1gpEbd8daZDxBYW5yquRpYFbNfRLexKsQfDPorNG",
  "key3": "4bWAp1RgXYmsVhr6Fi69FaMEGB7H317pr9Qm2wWK8TzZZKHvDEFVYtTuS5zF9tzmVKkEbCcPsZgwPfdBK1WzHkXX",
  "key4": "7NJ5G7qhkAfcmEK5VrKQDFjaaJst9iFMkoL1UGQ5xNEoZ6WtRhFzC1owtf2kVaM7ouQZj1KGLaCZtEBgKquSEUf",
  "key5": "soP7mp6SwR1k8LqutyAMrjqFiBM11vRUCVW546KGrDtXiabcEKadaUXERaUaoaczqgXzNo1TqBoqPWHt4WsK1no",
  "key6": "5iFfWfrwfDDWNiLU5EcUVxiikxeTPwKAqrMbw1jfEFzqU2SNbwJJs8KmDQM2Mpax7sjFs9ezW7MK2WUXe965pshm",
  "key7": "8VH5tWpRGebeXG4XEraJWmTGuTy4mvyhCgWvN9ceayJKna48gZwBh11tfttX1QBGN8USieJHFVTewUZHJvx9HBV",
  "key8": "kHU6bhYfjpxTTnYuW93eQQozXrD2E1X5krPKmovDcm4XTs5mxMUZ51EYXX8qJcGKj45T4hm9pRqcg5KvFXtQDNt",
  "key9": "4tW2fFvaxHWAFTZZjoiCk3aBwFDHHTMoNPLFa2ZhnzPkgauZbqy9DLFtvAaUGbseZLUVHv91NRGxrMbU9eFrhSSg",
  "key10": "48WrmE2ES7npXqhHLVQ4qMg1aCRwhVG1TiCR8Hku7bBGt57WwNWk1AYzYFtVk19QmXpQqGfU8iriRjKJDSDeS9L3",
  "key11": "29eDJMiQSFzLpmfH6uQwMFPFQxMMtfAzMVefMJno9JL1Ajw2VngvGzY3QzuFRLZhUhwk8bAuvkfGbF1erMskhzgF",
  "key12": "48ZMjPxpptCKHGsXbHaRAh855yGSf9XV2CSupALbn3bezThXZy1qC9oj39ntiC143W2dxjxhj1yR6QWAw56HY6Sv",
  "key13": "4KMy8HsFchwQJ9SNa7GFun24DD9RDMJoVzLcMnecDiwX3mc3eXQzqjpBzLZkb8aztaxfjNekU1ZpkmTdbHmqDxAr",
  "key14": "2xViE6GXkNWqKRNbLPSmNBaymNseXaKU2ZTRQQBb6vp4KUBuwctcV8TtsBWX84kzMG167Bfzm4uH6Uexu4Vb2tZA",
  "key15": "5Mr1giLm4ciYJ1B33YX35ozZgLaMbGznSSFqNQL2ikViahy9BjqxBKpRDMn37G2MyNBunkR36DdTDvAwZiHTskwK",
  "key16": "4caCufaa9uu9FkvU9k71AjuwXXezbgAfZML8MExsi5AoW7me8FPWquQpmQqB7uw2Qrh4w4XyQkwgpjkrZSort6Ej",
  "key17": "LEQnDRuaAaJVmG9E7ywvrnxX5aHF1wvLLPGYoQaea6ovXC66T44qc83ZyuWH6mxzMnE2Sg97veLhdJcwGRW5X2e",
  "key18": "4Bz1U7Rcw5fZg6WZwc2s1Ynv5WdmBBFsdYDfacTRLtN8a1m5PSnH9TTk1AcHftYu3i6N4rNtXUxTA8pxo4zGyuf",
  "key19": "5A6HX66LKiQa3YiFvmMVjxDhDTtkkmJALLmesgz19Bgi9LMwitkTWM3hxYNiCpHYJjPBtav3adb4LzhzyLMJPKAR",
  "key20": "rug8qoTjKbshEXTZ9VpbVAAQmhwWu1SoM6UPGtihFdGjZcb7VVTvbufKY96bowvr3Bf2mkQKZnFQfihjW2xTTkX",
  "key21": "4kZXwGRirEpqpL6uKsQDsUzeWNTpn3w5imDgVT3DmuGW7zHrkrNehVWW3RnyBaqATp1t18H6fJZFX8QcwGpUcXv2",
  "key22": "3SKH6LG1BVKVcwRXaMXbxKKJsmmsLJS9qKnxTVniUZBnQ9berd4ZcptkGf8w4EZ6HgmMEdye6nDc8qahTGVbpTgK",
  "key23": "R45xuuchxcRnZej8MGAfmYVe3HH6a8k5KftCJ28JMAUrF3KJyJnTL8YtGyAr63C1LKKFgGXvPMemFQJg8BnhEDr",
  "key24": "34pWQHDSYKVGzW9ddkdeQ7t6CT1kmf99yUfFCSyx4hPFuPEMvdMN5b2VWkgKrLfYoSrGJFmci8AHXtKCia8x98zr",
  "key25": "2Cj3f1poU1FqBNLPtdKG5dTE1SusURiWH2eT9jPKj2kwjbiq2nmvuNDuQuFCYczf499eMtZ56j6CMxvEc9PsKNtq",
  "key26": "4RzRwYWTB4nwu3fqSdq8eok6V9GCt4usPTVugjs5uDJtwrB8YRh4MkxXyrtHJGNs1XjCChERLgz8inw85j1sPG6W",
  "key27": "4xWrLujbYEAN7vPCFUNcKWT6SopY4DzTXK81dAB4kiyFxRU9L26oTYy9oVBvAsccZ8Y88w2LN2uspaKGF7bDt3yE"
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
