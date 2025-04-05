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
    "4MKG9wGjrsp8rBn5yqb5Q8n5AZC28XLz2uvoTN6zVhkFNzBPdmWrnDe4eDwkF1jX9dfMHB4UnRrg3fxAhAnqm4z6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LLUfrZ57f48pezAPWmCLmFuYrBYYnQSYWLkRd5CZDpQYXzzhLzEdtucZ1jvTUZ3qSAR4GsG6hPPxoCaQSdcYns9",
  "key1": "3ME464Kec1BRmJmwvATUs6MaRvNHt2qsAfEYvjfgKFnipi5JG7jxdEFM15fmonQ1hZQjhtgTeKgL3Ldb9UR3pyLD",
  "key2": "3qQKoh4BHnj97YCZ4r3L8rLYTt92KnNL9ouFTKxiuxLeQidiXuyP132381hViFdTiprV9U2zp4CWGbK7gZKeoBaD",
  "key3": "3PZYtZqyaEL5WcYh7tip7F9vjsxJeepyGJnZdamL44LiXwBvXJMdtRAv4oeZfbcFEgoaR4UnbSByoQ7mZSgxXqbj",
  "key4": "5SPX7XYNsxEvayFTsBQYb6RyK58nHjgSpdyzSKMqPDjh1w6ZkTcbhWyq7Yt8PKQnsBE1HP2QyfxsLsxxzeRqzu6j",
  "key5": "24DX8rR7K5ccAUBsxmvbGG146WnEiMxYfnCenNwUP1P2iunuEiqAeb6AvTwbVDm5DcJEYg8PKsfpS3KPQQXq1KDg",
  "key6": "3KkS9QaLTSie1qtkjQMg5nbev4CoC1gHLanji4SQCjwrfin1tDzvzYRscuBJi1BpE9t6VQxYvcFCzsrcyWfGk35s",
  "key7": "f4tY1df7X912fjrEva24bMGYwLVy55WmUQ7HSLjC4m9kK2mAcco4XXLBvwFPnqp8zrHigtAGCNjVftTyJjHg1CT",
  "key8": "xBqi8AkRdZDcM7W9dB6vvnL9NteWsGNzmPv93LYPV7VaeHcTFe5bicSCrr9pD8JoHisdVSZPSefikNyCTQiHexo",
  "key9": "dxxEJzqbuKniFvKrNNcgMWm1yQLp7TSDsw3MUmaMHRhfVEPVkgHesVuHovGShGdp42AmggQuR1J5WYrNZCHz67P",
  "key10": "21Q7zMnKhxHL6hiaJeYgD2TWwsHGujXPVVMEPGV8bqG5oUoXTY1VVAoXnosrpQCs4UZ8rgrHM5HQGzB8ar4PUcu7",
  "key11": "3PJxto5a2aSrZemdQer2978y7XJVjP8M4S11ZZGAu9P9dZWZNov8ZKd4h25vyNAPYnkYhUpzFo8vw4QXnSz6SfX7",
  "key12": "3BzmQKLJCvvuTthjoSHMHqHph8yZBx6b3HyiNXWMeHX1bUtmcd255rAFsBi9e6EYJBkqfZnxxicF3V78Nsh68GS5",
  "key13": "21Z6op3EUzVLdGYyfiTpoNPQm2xAqPabKQKPFYw7E1FREpb9gzSuWe2bid5SwHBA1uAinqvM6ZZuCdX54RZKLP3V",
  "key14": "2gMRtMiVJP2aaALDMTLwheYPSmggPtCjk6UdTr8rWSuVzf8ahkDoTcomvrt57mqrV3csavwowr14H9oSqmECCmxc",
  "key15": "326az9g135zXLw1Gmke6dLAXjiDdyh59xDseKmLztQYFh5MKB2HhyTiaTxgegMURTkaUo1YTfThVkg44nxyu15UX",
  "key16": "3enibomqjqeWxqR3bm3zmDKYVfezxhAUWJU3BTc84UwbHAT6ZzXisWUCQyxh6j6msHGgDkWU9v2xjNL7KUvPKdXU",
  "key17": "28kb53zjLESH7pus64VKqoykiphH9f6jKfqY22zysZHipxUW2VaxzsY1U4Z8xTubGt5HtzZeQJaG4EmUTV5RfvD3",
  "key18": "5Dud2vvnboa2UGwXrXiF5MUbkuCepquA6Kd6f7wQFZdZDWahDdSCYz7xuuVnQw3EPsVBXkVAqUVQtjL4F53Ssm9i",
  "key19": "4asSioxq9tFR8cWYKaPhUcYR7qVmJUXNEdadwLvQg7feKVb3hxjYUZ7ZrwrTcYdVqpM63ZazACXU9rLfej6UehKh",
  "key20": "3pQd38NZ15HELFVCvEQY2PAcjiXTqFVKwxRxNue1MpcS2DvXka7MW7EzCpC4Uu1SssGMNU6wqRP8e7CSVesuuCmS",
  "key21": "3VGGfeKLaEijcTFRN6agGvw45WtQ9MsVa6vjDrPXzMzZVrwUA2myWvjoQvErDssiTZCJGXKa28D2jS2C6rwW3eH2",
  "key22": "ncvGjSaE63Qh8KRdxrEvMxqAtowaQAGXgTRpYn8JsEfSKK2xQuRqbvffXXZqM2M2h3j5KgnyXuxjwKb5tfhVJc5",
  "key23": "5FdoFgoysgUgBB5DUNrKCk1SQUULDaGN5TSi9rFJQ6SQBrtJoAJs7qpLkU6UVTVLR9BFp1BpcXoGk5E8xyRw8VWF",
  "key24": "hGvzuufKy93DPmyq8Z2YiVx9t1cHGrEbzS4rSfCUGXvQ8MrYtXEjCpHtjvxqFDLYKZyMWKwdCEgMeoMhgDqh5gR",
  "key25": "5eNB6gk32gEFPBTXhGv3yPnNEx4AYwtMQfsHusref8gSxNxQ4w7SqyLgWKfFAAAdxZbbVs9W1cYX9X6Ux8HmyHLJ",
  "key26": "Kh8eyMV7n7864DstPiLgnnmZBnshtpfsrjFHiL5k6M36sku51A2nUqRiPY45JaSCQSJWV5gyX3PPdawDjAu5JwJ",
  "key27": "5epB9zmQc1omsQJoFNhYTkYDrLhbNeEUZ96FgEyLhuNPYvn7AFpi7XTYqBdZprqL7PuNQJdW4kHzp8XxjLhFTQU5",
  "key28": "39AiETNMqt6WzBovGX6K927fiMwDWCbnGDtZpgGS2e3H8WT8bVVVNkK7axaBVntACEm8JDBhBAbkWnrhunutjUXV",
  "key29": "2QPwXN5vxooDgh4a53macTaHftbSxn1ZdNVscZMzJgTYpFFSQmwo9ufgp7XMsQUReUm1P5V2SRRdJDLW8fHJ1ECe",
  "key30": "55iXoiQxB6b2Jq7RFLjXnJPSfiDPL4zTV9vCFbUEF7Fsv6oySQyZHUPSc7gbqKW58gbHzpK8zZEcjWBQ6zZsKTUQ",
  "key31": "5nshRQoEKX62HwM8dNdrqBfgoT1mf5TzCksN9zWZ2otu3DePR46KBSUyKryqHscHhS3JhLKTKe2e9TAy2m6LV6Wt",
  "key32": "5CmEfE2T52H8p1UJc8VXTYjSueaQmMQkDUSWb6xU92Vaig1vw1ZW3DqcZuhT23v5fqJVjHwWnfw4muWBUksdNPGM"
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
