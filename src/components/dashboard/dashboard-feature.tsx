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
    "ioSaYomZLdHqCDmUhsAFxN5cLww8S1TbvLX2DN3btm7VtTq7NuvhrJorTQU6JQmESLMKVyAjWcJLEo1rYsF6Dzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32sqRjfVaGpytu9aUeHnB2AfkjQcd8T17wRe3DwkX4AEfmSG1fdVtracFkXJW8hWPJ6v4nb9B6DosmH2cc7RjkQz",
  "key1": "56eA1vX9uZHqmQr4gat9nnHydxBh67uyLDN4gstdhUFuR2tivzx6NLvxprK2ZpHY6neecJme56ixovGx6yJW545D",
  "key2": "2ioYBusJW8bhHQgJF7ecytYAjsF62cjStAJDmtrL6qws8yjGDHbUEKFqDCbqYAeCyoCkz2x2iZYqrbU3uugdypEL",
  "key3": "2zdMMUxuvgxtvoznZBAWUa1Ca896gJTRmSs4zKYhCfbgdbrXrr1GLFpZzJwBZSqFavXhTrtATCGuvKRbA8fM5tEz",
  "key4": "4wcvp9SbmMJUid7LY8iVtFWaKuTaqZAEP7U71YL9dUounm485xChw6vqhaHNUcKuutrWZFcYXerKLBJrngyzoqGd",
  "key5": "5qj5zqw5s6hiyfayfeSyNWJuWKSfGjQQZ6tZxLSc4Wupc8M7zjz7zh6pwk6MdsKvdhneWJEmCUM7a7rCnSKAKuke",
  "key6": "4tjeTE19kMH5Enp8VQTfvMeKnnqSpbcfZDnEwhrmVVCu6u6LCGTLZDa76FM1YYWVCngJ9tnvbbDrRUcKj9hrxriG",
  "key7": "5qiDsZLkNPG5GHGMRyCq2LdBPxwduQwruM4vDdHa7F6gWGH5imVqkwLR5AJAhQZf4EVgvcjjSyRTfsVUy9bpMgZR",
  "key8": "5vsLvyuXKL7VwKG29vRxaQXg9cf4M1iqp7BtFgGBLt2e11DkWaoRsuPk57LzFbbfgFwTCn8ii9zYPkrWDveV5AYY",
  "key9": "5rvvnys3zoDd4Hg3PRzKayMiQsR2grtA21qdkzwPFohGJvRvA2dNFYS3B83TSLtyCQJE3tDugjavoHXKKdwXrP1e",
  "key10": "HtEAgQVRuqZM9QgjWCwzFVAfessWnVejXRWiX1AaA7wXq2VW5MtFPXMcJcTWM1UQGaSHEonU2CqGEsY5G799BJV",
  "key11": "5nV1fhNz2oNHf5333vor4Qi3MWVawby9dtsK4GSEWFrQ1rcxhrAqVXzzvywfjPGW1kTtQ68MShCabkMiw2h89cwb",
  "key12": "34ptQXXWsZHpkFfL7kjzBGSWMu9Kc2NtfbsSGGqPArQvm1M6SrEzkS4GXNrDzNpXr8Z1ADYmqBaUpfxA2yD83o4h",
  "key13": "15UVBzVRvo2YyZ4v6XM3Jnw7LCN5NBnD3iSBBhuXBa1235ogxtXzhKG553jWaL5AaLwJhRBAmrfuwXMWjtW7Yvu",
  "key14": "5mCtZJFFL7HgL3cJEjXwyVgprdU9LteUwCyg4MMp44q4WCF17jBPFohy4hnLAdLfLqgA8NVuhqv3ZG6mfMxyuze4",
  "key15": "4htSxbJ5rwYuHNFR6XV7HxukmjkZXWDH7mg2Ls71bWfzExCRLUKJ3LkMPxYbYwTLP5LguRE7dhohw7csmicuuqpR",
  "key16": "37db887MgNTPryj4ujAtRrLwexFjnbcPw9tthhx9VhP7Wf81cExQSS4RrVvxRKTxEPePZJiY6Dk3QJzUAU8wgx2X",
  "key17": "5iPfGpP3QkYxJuv9uabWfKn1duGNpxbSHD7kqvxoUptVPz5F73yJ5ZLZqK2vnw6yKaQp4oRaoVYeig8xoRnSadFm",
  "key18": "4GWmiPBS3taTemuHLzXsuos4tJEt9SFrGRMFPH5FPrPonjQz4zGNQHJVA3hCe7qhkBe3GJtxpjpb5mPG8mg957dt",
  "key19": "4mUy8zKVCtde88EdbfRLCuqr6exjcvFYWyXAPNireGaX1hWUjBLWUzDUrXXVWnsdmpP493zHkz2cS4uqx3AQmE3s",
  "key20": "32mjbxM73cVXmDFA284oNGnsGJ6ffjCriWMZspTR871XtxXMZXxiCnNy2RvEZoTWn4tJnonxtfdWfS4S2NaDgVYj",
  "key21": "3rdFV3zUEHJWwWzmJ6Wn71T5RojduKLNR8Q45hRtEkrG8LYsQH62mtBhzV83HChz1DdxHHJeZ8ujKcogd4LezZTM",
  "key22": "5bnbfVJqY8hxHqVehnL69K3iRmwYCtBUSKCWNZbq7eaZNXthHCGbTiqaw3sSKeRg1o3jpEf56rBRWsS4x5kJewK9",
  "key23": "3KuJzTQnZpRqQNdLdR7dUPCbVAqfBA7XD1bwNtphTQdZCY8j7eaCjbLiqDnntS7jHNRFMDveJrbTwGzz4ncEkxt8",
  "key24": "2SE6nESdMHHsgAxPzACS8wsf4cLqihU1BXTtr5mZzFTrhLEi3YRuVRUbB1oiyMgdi8ZkCwDc2RuEx2My5R9jCFpn",
  "key25": "4MmzEZco8pGgZXG5JsNrF2Wyjh6VayEf1FUrkuq65xmKgwciTP6yUVVTtpdioEEVMcZSCWMLgbr8gRtM45KUHB7",
  "key26": "bcfjmdU5jVD1Twvijz7YygDnhkssXEFhyZFCPsMvTwx27aJ3MjQkbDvb4M1DSc6M8gFEb8ApM32u8HSFBEh1BL3",
  "key27": "2dy2S659TMaDtWua4rvx28fJRy4tjmy3QSmSEaj33eKyTdCS2xhkUGK22ATiVE4D8SP647vfxNxjXP8GSVqnoAN5",
  "key28": "5bRK1JK3YFtTtjsCnRSz2LG37DBEcGW4fC7P3VqCL7oN1g1gc41vTCXDBCRwRwLtAgeUruducfFHAD9gRru156as",
  "key29": "4jbd6nv5XXhWNEDJFDveRmZmW1bKnuRLTXL5FftAkMyohwNXFCshCV4E5bHjc9vAeap177WmpVigE9vhdW3NyqvQ",
  "key30": "4tXs3oBPCig2ZWGwuFPgqqGmHJoXw2tGicxBwUvRrWcg7vVEmhTWYxexbaDqkQS1qsYY1gD6N8uTFyibNp4GMPSu",
  "key31": "wVMiYMQbnce2qWB5nYJUeV5QjXoyV7JooEbcGJXm9DY2XCbjtEijwRk1vGienuY7JUJr86SRyxCSVZU4SEWRJ1q",
  "key32": "2cEvr9U5kbfXv9kRmfQvXhS7KLSPKqkRSzGJf8LRiTwTSkqSRMZ3q1rJckyXcZzAcZtfWJh35NiNhynqSvrgbDxj",
  "key33": "3MSzLXGK1BsH9xv3SNZUv7oiep8e4BwF1KQJW62cvqPr9tJQrEMddZ2cH4JMqLuHrtikN4eZRZdApHJZmctDtrd9"
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
