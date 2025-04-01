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
    "44oQi9p74WC5MmAu5fFsxGgFFBHoB1JUhXFGuKALr7rUdbwqAedWuetLhTNpKiFhE6nSZ3zvHauLeCducKp7h5o6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tNpiB3wrZwqJiHy7b2WhbZEsmyrJfeey4YCcvbKdNTTxdb7Mstf5iswbz7bAvpa7yDfZhGM5UQD8NdYB6m2jBAD",
  "key1": "3sGXrtwxzpxHM1BEwzVeJDupuYAUfxYBXNbWSSvorjDQaC5MRpHMB8zWk1XH3CkNywQLAY1DmAx4LoZxbebESLcU",
  "key2": "5X7TJFkoFTRjqtDToBLDQt8DMJ49upvBtNGqqZuAH7amb2BqTxUDJwxxEa99gxE4phm9dLdLpYcch6C6sL2bHhYC",
  "key3": "4sjsG1gCYW8xhrVkkiR3tbw6Hu2vtuSDEHzvQdf9ozh2LApoynr5jnGjmt3Ykypf5LYjEJr9zgr1Qw5yxkaVUGGU",
  "key4": "2n3Y2TNdqdBQJPo6of1TnBRxzf9JxwHDGWNamYbZHXaFZCmWdL64bngu2jrinBtMHHnXxMRzhoTDeAX6sioXVkkm",
  "key5": "6nEhmF4bZE5MBznPQHXS1yFjkYdjMfECqMFFGgDX5HYT5wG6eSEpRgTZhZsZoAtJ9pDhqqVgiscf6g7pMQ21EKK",
  "key6": "2NBuDegRxDm4sBHBobESywVrw36eQJb5ccNLktmkdVDPLhRaif8W4MojMqYQgKYD5ZNtqo6iZARG7HVqMZ5Au8ps",
  "key7": "EVmuW5GQukfvcaRVEiqdnAJcmTMKWJ72PKUCh12SvG8FG2GmTgHD3o7UwPC9RJqcngGAqj7QWn5KhKbpKhg8S1f",
  "key8": "D5Ji8jqK5TYXUHZhdrgox3d75fhaEPnfRr2GWXka7wUN3SV175Bt8uRYAAiqs2GSvuhQsAsm7Xmx5CZd3VPcW7b",
  "key9": "yKmyinhNBtYXntitSVXjPDKCtrVrb6HgJRu2wUYTGPrDcNX6Famug5MAfsdMBXw2rgN957gy6aV9oA984CK2yAx",
  "key10": "3fTykXAcXPsFgXYkxBFoi1wTcrfWeX7ZorCUToduEjj2xkcCNe7n6uhGfehZLa9iqhoobgTtUyR48YBf2pidLL8t",
  "key11": "3f9b4Jj5gteMCT9vxsGxxVq8JmXPqkzyuJ2ddR5ADtJBHQPaoj1XS93aGchfWkVXCaVHeD8SLkZib35URkvjy8B7",
  "key12": "2CANRMJpm1nWoLHmfSNDz3CMsCT5GxCpGpaMXVQ2zZwhswUoxARzbDw1Rn6nZkbpL98VN9xcf1wx7Q2NpiFVPme1",
  "key13": "4GyXNez1dVTwu4KjaSPB4Rz5ptkyvoW6KjiEAbzRz4H7SCyMpjrb4dym6ouxgvrEY8QqgYbAYghDVKhTLNjQu5hi",
  "key14": "39kBnytgXUyJi31scWJd6FaT5KZAHRaYBq7qUN7s1P8eyMAiNvdMUWoNG76voBAZW3U3bKVxCAgUfTZFZHFGjUQy",
  "key15": "2r6LPLX1Ba1F3AS3nyVTtVJpX9ffbfMFdmPVjEdgY3kYm2EXXEMsKV2EYUjoWWd9baxXbWrDAzASMzceBvQbe4ZX",
  "key16": "5mNyGMd6k7AbSEkTRezpEYYWXj8Mnx52num9e9gDppBACiLHHMug5gh4QEdZ5wFbAv3T3kb1DhbRdWiYYTHUa7G",
  "key17": "4N6bGb5yWGdmBYsFdWp8ae6nNKpWRrwycjgc4twR6GJViiYf7dtPzNFifnxV5qZT5wPcWJCigh2Tcbu6AWvgWHfx",
  "key18": "63sStAqj8tsBbd9iKemBYeKmZEr5N83yyMC1GS3C53cH9SmVuX94Zjb58mqzhVsyEnm4JBMHbHJZMDXor92ZdtGY",
  "key19": "4YaGcF3KqD5SMCGBpZw3TpCptUdrfotQo7Neex3CN223HNef7zehpt3YrFrb5Z4FfGkxt4g8D3Z2oYsGm4DeVf2T",
  "key20": "4qCdREhDTyYEJmY9GGJmYEXGUeNg9jzR6awbiDPKgG1qp6JuSgaq1ZPN2LJApPHRWzrHVS9UWoTqp9mixm6Nu8AR",
  "key21": "pAomPJ8DmhtJv5HdAmW3i4Z3V9SywdCHTu8TaJtsThbuhAtb3mwos2mqcTU92ZVNJcZmeufspw7GYUvqcuy7yat",
  "key22": "3rPt5Wo4RGXzxRULNfgQD3hnngzT6sMESY6f7qSnqGsrzH6sXuCyQ2VGXzeT4T4S12U8CyH121YeM8rCj2SSbQXf",
  "key23": "4oFJuSmqquCsoXBhVCb4CkQkXbH3DxaL5kzGWPZezLuqEvd8TW1DfdqehbP8SKNvq3ssKxgFESaJKRvc4iYHxWrB",
  "key24": "4f178SRaPDZgj7iR96L8mra65rN3LRQtMHXPB6DUPhZQp2HRyQnCRc22NVXePxb7esFVg5NTX5EBSMrdGJdSLdEo",
  "key25": "55x7RkEUT4jx2MTvNNBtZqZG3SWZHFcwRrLeKMczap4r4mkWagxrfCCkxXgKj5BtZAirvPuzZuTbpPkzMxEjcJL2",
  "key26": "2JMvFAk5wUHsiQ5YHUaGYPVpCgbFt6NqfQy8H8xtcpZy43EswPLmuuzW1eBiopxDyenKpScGRkVZhZviavrpNeWD",
  "key27": "3xQSBtffEdpDxSPt9dceFReY7ujpFtHMoknN2mXhD19A6FbLNiVhw4s1qwMd8UxWJ5rhALvW76qtpGnBrbTMSaAx",
  "key28": "53wjY6WEqto1ENetjUWw75Y3FvA4xQZzL7XYFQMcooGs58tRp5SKiBYFfGk9GP3Ctz3HBj63AxC6uebGorcWXK9R",
  "key29": "2qDwvu29UvotfiZKJdnMa1SqTXFGaffpavyV5FaRfMEK7ffCzdJRCdV95kTPTa2ya76CxEoZcCBzwhoeXPevSZTQ",
  "key30": "57mapiDvgxy1rbEmADfYNokoTx39TvrT7azkUKyKPs9BS7KKWbMu5BtmidSadpGf53oCRvme77QLJ3U4ctsNFs66",
  "key31": "5YMzbQL2nRxiUaDNo2PYgomjxkBnWzryrWWiwduY3TVmGDXk7v7qFEGfQpF7118ThbL9MwbbfY6DHNuW4JZCAHSc",
  "key32": "CkMUy47WuAbHyuuqPX58jePgx9A2PE7AFaCCJWHppfa1nE7Bmbff7rAv5uaSasXzVVxG7UY91DRXixGaMT2jSDQ",
  "key33": "3faUcycQKbvf24FhSRC64QXcfu2iXhfTqnpaULiFuFhZ3VM5yivZ3teAJjV2JS2DD95L6KmGBoiwKMjgWHpqNDYd",
  "key34": "3PoiYvNYfMsV5HyYBhTHEDvgPucDS9v3obDxwy788cvyZ97tmsTLvsTkNAN9dPJu9chYCAkMmEguJQKy8YtHG6Nr",
  "key35": "4bZESYqrGXw4eapcq29HA6bZyVqsBY7bzT2mgfUmPwU4vMyigvvML59mZeJLNS3e8WX7JmtUG9DE34ZFp8K8Px8G",
  "key36": "45kuPmBHg6vVkGwGF37xgvitPBBZi9ecAKoffeJLrQkEKPsfMvhvoUFUJ1KtHgBKCH21bWMQU41dNn62Pr3bio3",
  "key37": "2dCg9C9k6EoRgGtSQUkJunfJbectV9PZ6pivj2Pd2C1fxnqW7NsHovTzk1RJBT1YyM1rgfjFWXdA4iLEDkEX1cHp"
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
