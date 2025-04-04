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
    "mnsBSi1b4MkmakXUnuLjmLuJsAbHWnJGsWgFH2cvwteS77Nj8nNfWGfatizYJHkATT5uXCQVckvRX4nCPetttHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h45mxV5bUFi2cxz3edWyQqF4VbrogJ3de658EpPchTQqWevMqwWaCSn9adZ8rSX4u6SDWCNTRfGnJTXHpKLAAdU",
  "key1": "2JR59ENP3g8dhmh68KXbqwaNyRHshiXcQ2nKZkuosi2iTKZDqBKqmmJkq45R7fqAY778oZbz7gwumwjC71mXsLq5",
  "key2": "2TUTjC2kkay8h4vsG9Sr7js9hjvSuhReLBF1kufDPPuDFnzhaSmmUNgd4M5EcKKBZr7xnnQxDbVfWM62PQts9TDh",
  "key3": "yyWWyRFwb81rWjuAF8BpWPe9GR5LdnbLYLgWbDXGmmPiv8cfLsZG5pAQHnrVSvUKdUtr8Z9mZYQYHbCgV7SCHDo",
  "key4": "4PMUMGixJR2qVKdQ1U2iMZeccyTzSz1CL26ageH45HbdTBZYwuYw9KTrTKL7AEw8MuDA2bnrSwE1KyM9HvvnyY11",
  "key5": "2xCznpsiTJwyScj3ahwjYwzz5Dw98qdh9svjEGii8V8GqeuB9XGkBx83AraJxVXiw6gpctfTvVVb81c79NLCHKx",
  "key6": "2Cxi8SGfJ6L4H2mGFC4eqy3Q4DY3pnZNjxvyAt5oHYgALAD9MwQB1XrKG6R8ALgYCwdirsNbWPhci7TrJHmo4SNe",
  "key7": "3J6c6Gt4AXgz9szsKvv8Bno3AZkeKY4GwpqcfuCf9UPcxZja3Q25VkRf7yvR1JVqR2ZE4J5qy4ooFDBDzK3vFe4a",
  "key8": "5Q594gTYbDrsNtomSF6xH1ictBdbVJDZkrKXjp38zxAaEoxL7HgaRLjpsPYFndVoEv44vw2xUfYBtTQSnaz9xzjX",
  "key9": "5Wwnve7xovmsGr91W6ducjRcgQ9HSi8TQ4LDfr1pPecgNK75TreegD98N9PxuZfH78rUUYFYYbLkV3kSxzENectv",
  "key10": "2DV5GSFWXPjte5qjWiQG5zkECmChB5XS4cTETQTzwiGWLFBEtELa7pkuvRBX6SMgv7vQrwekzBdRCy2v5gJr7Adx",
  "key11": "3G49jtToU7gNAQP9Jf9uj3X32eHFLCsaZRr6HUcdudkBdGTWWF5TBcM2nxMrBSEqNHwRJmTV9pCgx8yDkk6i6Zq9",
  "key12": "3ULaC6BGz33p5eNcTGcpSsngQ7jeb6eesoowpAvGP9gMp84GmdPLxTMZRktC19C3XWafEu1aengj8kFaUy78XR9z",
  "key13": "2avtnvpt5wonmNzzetHfNjpjFyUkTPew5YiFg8ZViQXP17z83VwcUzibxrDVuwfGXQWLcH827fuxzoohiRpS7tLv",
  "key14": "4GugcLfvmv5FLUBLnjecmSKAU2hWLGAAi6KBe8ReDLMJwpNX1FWgR32BkJ4aoFQ9nd7hpj8u8CYVwYFLJ66HUS4q",
  "key15": "4SbzgLqFwPh9tGW74AFbXmWobKqhWcEw74HNi1pdhsZfEJxdPPA3y7213TJAV1VTfwKqyCXsTDQ4PtAxUzbi23N",
  "key16": "1ZMv6kaVZcE3MunhnoEoor8cepQ8C84QZVH3rW3dRiJKEFj2voPXssXFBN4TBc6v6CUHZuvo7HPAZCWkGzpZrLT",
  "key17": "2fouVZnF8Q25qdcynkVpi7LATDtp21ARzi5MnQRFyKBNtFFZr7yy3QviVaGLGVDGQwZfEAhFHsEo1RLAdDKpfR77",
  "key18": "4SEF8awAJUN2fbVTVeqm8axMChB8z6mN2EJZLAtYKn5jomVWNwoemvuBcerkL94CeUebCnEvZk8YMDVAhB3yyCHJ",
  "key19": "5w25VtDhaSZPg5hoamNYJLoU3eqSKxAs5mxu9XrYqBqnAo21AmfvqRSRKS1B2mhHcgrJLSXFxaKNHMaFJWMdbDLm",
  "key20": "5zNPPapqmMdpRHm2zVvrR3b76Wfc8i2WVEVGi3FrWjquS4DGTdW93wqoqoVaAWgD7kVFsPx73jQywYnfJ5TBQrFb",
  "key21": "HYQwbFUKXWRTea6xPrydSckYjbRRy43wUtxssHcyxvYaiAqPP4iSFvhNn5GFaSt37YYvWMYsed6TnmegRJZ1RXU",
  "key22": "3iSRKPCfWUgpRUhC4hQjvsyb9kRojBmZiLjjQ4Zz1tP5x9r2QGvGoecqqXNGVymFERKv9ke7gb1uPXYMnnY295vD",
  "key23": "3KDq1CtUuHNL58SG2U7XnAxD37fUHsT9C5nzorUfyrNED7KkMuMSh69Km41HUgSS5TwipCYDFMcyWyUEpJjkgQkv",
  "key24": "sRmvCTSNGGtoDtDAeGL4LecSsits1aamSTQ3QDjHxFcKd9qiYs1xCWw5Bn5Y68VN1jbq9j82Pc3KHQtkWkH9Y9c",
  "key25": "38Xhi4F9EKB3YvzHkkYbkpAUqL6ofB9BNNb6unbrkYMzAbAK8V3NwXe56SkVsTVA3W9K74FCM187qYfCMFKFnVpd",
  "key26": "33J4HSDwZe9yRSump8FVh7oRq6MmWMYy5GHTW12Yi5pFeNNP7zYKygnvw7CxnG4s1npdoPE3GKuik2P9QZd2tUhY",
  "key27": "5uHQJ3CBco9ES3x7WWwMKK9BULqSxysaK2vN7aMK9eJBQPCwfgHjGmVcoqy1zRgFGjoLaBaSAdZRH5kAqAiabF2u",
  "key28": "5xwcicScuRrWmRBfR1cukDqfgGEancHnRtinEox7otmYj45sh9tFsuEy2wBBrvBeYBkitwo3uTzy5xDNC6SXnjFq",
  "key29": "4fL4eTsDFRirkNaHHmLGEmATzuCeSuBJTq4nqcnEqBaUYp7iJXUmdUaqfCPkBGvta4iyVyAjLeQMoi8khvFCN1qc",
  "key30": "5vuY9DPTPkueHJuL8pzhVDjqtgFhe5rjkoxhE4pFaQx3fuovZfaA7VPkbEtkPHbM1CZziVJySjH4XAtyQaprxZnB",
  "key31": "3XG1bAfhkTh7n7At9X9sqEGwBjdkRLe2Que9JjQVu6Eqy5U2DNjA35J76ksiExtQJMbH1PqGENmEuC1vkvmWen5o",
  "key32": "2eden3HzRyDHf8HJXifipLtgHDREnj6oCC1pyQMUu2LVeVvRmuAxncm4Jv5zBxBXJvkTS7thwsba6cEeFMTBFeWA",
  "key33": "21R3MFcNEjueHWgzJXAEuRAfrxjUJx2Wg3hxHk2mSieVo4hTb3j6A8duYTUeNQtn5PVkXoty7KJPwS3KJ7GRx5kd",
  "key34": "5QKpvSF9W9yezRcFPwiFxKNqF6M3tHhsC9LyX5nDx1wr1xMi3UhGPwkcVbc1GJNnhbtWXwT8r7RyvTwS91TU8Jxb",
  "key35": "1SWYcGGkw4tm5VSH8W2CAoaAit2kLdtLY1Zj6Ki4QJN3c3Xf7pRsRHy4bdQLcKBswQNFSGMeDzMp7L6Z34jtjMa",
  "key36": "2rEq4hNy5eiucpq1tYUFe7tVpcaFHTn82MCSzTbWSQc5jiiYRcK4P5YFNjn4K71jKRLmzpxvUyVVrSvbjZNXht5g"
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
