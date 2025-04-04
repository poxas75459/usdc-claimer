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
    "3hwmSJU2ryvvtphM6S9kLWDHz7vGWa9vX81kp3CMV2CEEqL5LXEAtmGyvbyYpJyYXPJEDeabCPwBgcJFewVRvPFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZtGqmba27fFJRRVeXVxQVenEFbGhvup4ZypdmKzWKiiXg6YZ5sH27dDBoRPUDHxM3P35iaXtWzMeFtrfuPkrARU",
  "key1": "4sHr3voT4SaU6HwyoaYDCss6kmyLqkkDcnk1pN4g3yG6wifJPV74neQiRP6wcyg6uDqahZfjU9iYnMyheNu5WqEe",
  "key2": "5AK4Tmzytp5LxY5ewQSyfz6637rfZUrJJ5rJJHM94BM5S483mp2UZV3xmemwZxSVhpEpkR7i8xfzCgWFrbnbRXei",
  "key3": "56ADqdueMfSxNrfQQFFs35Yhchvu4tMgNNH2DnWx8zzLHZsqDBPfgoCjqfm6SveLmt95sjW4jxsDirekn1zhXpaH",
  "key4": "XZT7mawLoP62txbDFg6LMzmgEqs9uzJSLYoDZuMZAZZ2iKNs1Ym7uVFFYm3k9KDCjHNxCar3JFx6k3rrHQNCZtH",
  "key5": "26JvF33qyNpkyVFm45vCAScTJcjoLr344tPLd82e5Nf4iCqGsTg5DyzVA5wUSQPi8s2Uu3UXkMWjepUoz58R4QkX",
  "key6": "3TQGpo7BESdgzDnCjVD7a9hs5975wTLqMkajAL6h29vfbJdGTTyzdZ5EKprFje2bgHmZbx8iHfBZVdJMgTJd9QnZ",
  "key7": "5W4W9QA9vodzn32RZ1E8w9LMjpGyJwvarKAX8NzGup935QKmCCQLCdGXQugqHxMtKNifM4bH1rU8AAWs1r9ajPXy",
  "key8": "21JUyadw3NEVubGoLBFHD3Z9aXqPKwohcG7p6PsF1ChxP17aMhsAb6boXEsgu1mTheCz6zqRrLMuMFTwm3vK6dzK",
  "key9": "328jqetvnGyouH4N8EYiMyR6bpUeqmAAhkNLnSbMwfeiBDs4z83ZvExx9sZfFDorEREbsi9eetqLbDYYYkgPh8oo",
  "key10": "Fi1zEZDG1sJh7R3xZErwohcJbW4gCYoZhQ7BtJGvokFNVmS1WTLD1YYmxbPk6tLyM88ynp3jUpvEgbmRebBP4vg",
  "key11": "2frA7TEtaYCudu1c2fGgkQnV8pLkbLX9boMtG9FqkTNEqxXxN8gCRQ4ySXZNqaLPNQMADqa8AY2FJEcQWe1Q8QWV",
  "key12": "5vAfGuGqVBtoQeqAcvhrE6ffkSsMbnsLHCVLJ4xESfyfiKq8eK5c1gWKVRDU9HUvjLtzS1JdUQ9DjUczuPj4zzrj",
  "key13": "4F1gHsx6kg7eGu3hHN8fefhxCe1r5ag2kUHEmCrbJLE1ayYTYpDsf4sMww9vmCWLs5EKcxo4HkYwNQJTqB1uueB3",
  "key14": "3796kfxhTD6TgLQf36bDWHyBALKKDfgV9EHBC2V9DqupJTXUvJVBcvUVzUaBovTbHE2imk3EgncgXKXPwUPbkDhZ",
  "key15": "xQ7CAKEPuw7Jxvqwo8azP3xXYS9fzGy1UXQBwFNiC8fDzsQBekXs9bzvb82FAFoahyJPH2VZnzf9wWQQXHpNzYj",
  "key16": "249p6fiHjGyr9QfBwWru8LUZxFFfS2bxdzbzp4iBne9Uyjtomnz4KdDm3yXLu8rTLm5wHo4nZSUSYxH8LCdirWjS",
  "key17": "3m4ikCGsVAGYa8D8hwahakcgGc7DvEBDsd6BRuyTsZE346w9o439uF6Qmq3Yieohqv7fSPJiy7mV9Xby8uRmz4Yu",
  "key18": "RpEVnVaHbbTmFa2obhJevfVc9FKVLjo9Z1Af7sSviZ2yViSKxk9QCadUm9p98AAT7Bmrukr1nohY6oczjBMzRDq",
  "key19": "2bwj2LtuuL5hanQMQBea2MaaZhqFaYDWviqNCE4xmtwNYcsWZcNGRgystEWAPBcbp4vZ7WxqZd7SqKd7jViAn6Sq",
  "key20": "3j88uE4fz7jHT2GR7rYCTU9G92mAjeLMuSwWZCneBkMsuDMzZpjNqKU3HQHCi62AkiYNNqeUDh4hJimwsaxfP58e",
  "key21": "5bfwLbNugoj66fVEjxUHnBBCknNBh3mC71huc367mqpRTEC8TJGdAVQ7PnXbYbqr3QFQQNXyKXpmx8Bq6STytCuH",
  "key22": "3p6hJELKuMKBXqiySGZy3JnfbBDMASS9TQFwWQsUFmkxjoZUqiCC4BfpwnEkPjYStbhq4tmukaneq6NMs6fdjDTS",
  "key23": "3q6yhH9NiT3yqR9r3ogqLoDTXBnwXgKkTNXs5GQBFdsscJpsdYR291MDMUc7HsKHssZoEva2aUPZrcPqBXaFVYYQ",
  "key24": "3Z5NM9hEd7541GF2H6Nr3HjVEKU6xD8Zci5u3gjk7j6sgK32WQKSz7b4wH1BTQhtHMF3MJUcfasdUcCB3LNpav2U",
  "key25": "5m58FVPdxBToKAJyUJQzVXi8fh6vTwR1qdMuwatKq35rTZU9z68rbe69V6vniYui5B8oCdgy98KzMW9KwhdytS4K",
  "key26": "5H8EJZy1h75uQLcdYAngrDYoChm4FeyPYYGBV3QP2xLfiGgEgoekEhk9DgE1zxYhbVnHWwxH5dc8ePRkUudUgRPq",
  "key27": "41NL4DjCTcQBVvo6P52hR7GsHvvGFPtxe6m7L83knirSGeD1iUCErj1XvoMjQVP1ACnmnwCMiKwh84TdXxo4oFwq",
  "key28": "27hY2WjVF67fXYuecJVCyU7xwnZAtrVukreZCLM9UKrfbxCqpuBTtSVCXha32LpkVJ3KcDCGihqKppHFVCZz9WFu",
  "key29": "3qMhqvSss4q4ZKZNG62R5scYbsR81A4SQwiSty1ExNBao2rsZn4W5RxhvHhw9a2N5miYWkVSwprfkSJHYB4ST5US",
  "key30": "64rAjxKk78DoJv92j8nHsLmNT43nk5wRjvZZs6G37Rxh3gcAQA1eBamYWcND6EaX4ZqLu3aeY9ujzZ6ZhpWgnvxT",
  "key31": "4ev4kBnQKmsyXwWFgrvdxTzfBCTuBW97g1WWifdx2RQDkxGjWB3oU9wovxMt84UA2W3wJk5crogxd96GERwdkGvy",
  "key32": "66uqHSXhJTg36pUxBc6MgjJddpL6ppuUzFDd1Ta1GAmsi2B8BXnzoKtuhUp3PUtptqPQkrez5HkCTcDRy3JwWtsa",
  "key33": "4WxuxL8rskjrAAqHyjy9N8cQPTeTMuPiuECudEqG91PabRv7eYDb9u1VCogKsY2gxUE1iP6AEPmBxruXixiaQBzW",
  "key34": "s3d9AvLFpn4GrqPFKsP6vdF6f9S7Ae95srZDoQ84zfvPG6ogrXBGZpYuXy6pZeAu39TNYAub87vDTjQefjANWb7",
  "key35": "33ndU6ihFWLEeWcaqvEJotPqgKX3bEgLuDKbGqzJRMafoRTdZnSmUY98EEPLBVfCwWSwE2xPtqQ4Gb1QfCBXqx7n",
  "key36": "2HqeYZ1f19RqTVT3KQcVUFebEo58PnT5rFYew5bDY25NV27XCA9i9mBmXGNJnaRHBzJzN4bRYmKVvwZSbMGoDmHm"
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
