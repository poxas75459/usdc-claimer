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
    "2HWaXKQYE7yMUBNwC46AhJuK1XLosHLNqrh9GivvgHEo6YHY59r9DLgH9esXFsUQ9pHmWJotjCUfpMz2m2jJsYBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pZTcPC4ZcdSjAGqVUXWtdBeKDPR9U8UFRdRDRa4bdssGmRVQyrVNUGDAmXVRsfnUujfDiihqS5VX68waNXfMixD",
  "key1": "CfCeW7W4oeALviFAy4wmbQnWE3zwZxrnNmadnqxUBwM8wJD9JvJEeJMtjkvNxMLYkVa9DPhKKUxajDJ6oufPxRT",
  "key2": "3RKHajWJHrFyK7g4a3fnBuKXpQkPRNEpCQTJ4cYkoiwyvMChjUR65DeebJ8rF434hEARgPpLtQtR4PUrZkFuRZeD",
  "key3": "4FAM8NnuwVUNmVAqdHE2LgBm7Aye7uWWbKPEc8UNdtoyAFDi5o4AB9JqgE9pc4zHDdhhE7pZ1HyQzvGmNxLceeAm",
  "key4": "2Ln7bCvmRvdkyRG1CJYMJiuBdubJ1nnmKXwhtvRqntZ3rSvuMAL28b8ci2f3AG7vEraJAkQ1tu15cFHt2gddQV2y",
  "key5": "4S2AwUoTvSossZ9Gd32t8rLK34KHctb3Jbg5SHFwzF7Z9AuP1s3YkgkTjQTPwmxS5SHbrgDNoZ6SX9nyJZ9k2Z6A",
  "key6": "2dCdicrP3a4Ez2GuHGJAdXQRp1N64aQuFVJe9fMhP8Qdf2kRgi3nfz2GQDNMjKmwffqbwvCCWJd2nGnq1Lb98yZR",
  "key7": "LkFsFmrz9sq9i1T4U469k3yj7T1DvTnW6bL1vLyUa4DfCgYB6sCa4FosMEPdVckZtoto8VyqbB4shGxut39tpkg",
  "key8": "2aB96CSYuwzdfH4SHP2WpdgzwLxEuuaeS6Dwz5Unbhmr4jrfWgpidJDCc4iNYMY9K5hRy9HaLWfN77jJqaRfEFES",
  "key9": "65RFsj6tWtDMq3ZnK17oemebtELsHdcSuGseCugQ3eZPALWkgUfE98pciEBaJDTgmm7XnZWnRUPzmT6QtVtjHAs6",
  "key10": "5t3bwV4fjanwd91RtsTuVq9KurcLgaa8CbirjuE9r5UV4AALbc5afR1bM2V8neVMo1BrR9dWMV2pSV2tNzUhzLi1",
  "key11": "3DG3Nj7TGjkWMbr6MAC3pxJQdcF6sMBLomELGNXSQa7uK3xr4nTWH8GDbkfDkEDYKz4vNpCeKRvgdNNEdx2Y9phs",
  "key12": "5v9ewkXMkmi6do3kTs1RkDXddU6gaeuZ97KekgxLqQidCkdHpbehfNwvPYaAyEjjekGnAPQrk7fAqzCjfViC5qqD",
  "key13": "opFmeBpL27QoGQ2Zugsf122P6MrCtJfwRYpFTW4L6F3EA8E2HxqeGAbBYEntSuohWYfBF98pddJ8Av32jn7Wtnd",
  "key14": "5YoXYig2fMG8J3uERwfMbWvnbMqhbKZTvg3PmNqdmq6t9qekLNJc4qrwMdxR9nNU9umv21TKVbhdihg71eQhnHfw",
  "key15": "4a6EGChUhu15fcGq7Q5Fm6TdeQibHggA74tWf7M6o1PUtw5PJsRQZfodwodNrTP5vPvhh7zsxLPfHCtShMP5313e",
  "key16": "54T1fXEm7NjJrTtGdMWqQU9fTwNhH8zUSF698xAo5Yrmg8UfrFqcwqcMJmW8ZuhyxDER5XNH55eWrJ4X4UvofsWN",
  "key17": "5mkoxMiytfPpMjTGDUVD85VMUR74WDCwez4wuwfkoCfcQtDcXGoNxNGDrphz4bZnuQ9K4YwhYbo7eKQFmQexWwk6",
  "key18": "dJTuYxPJfXdNJc55c3skdSsaSbcP7k2TCsEr68kCSqPcCHd8tQPx3QfmfhLTSCBTqBjVD7pfrNKWhzvyWq9ATi4",
  "key19": "3WAPj56PHydgkkgUNCnwiU1Hw7pGP6PkZXATaCKYEVy2nfETKu9RntBKEqtaozs6D5R4KZNPYx2wBtnQuCDuzZbu",
  "key20": "2Wpnb99b1pTNHEbwmjPKDMRsbSPRhtYZiHT2tjHatmURYcbZFNUfVaYyP8oykhRV3bcq9cwrTzNPVzgzhp77Yy1C",
  "key21": "pjXE3eS16iUGQ7e5jHbroNwdDt3fokSc2ZtcpKbV5BHSMVUcjGdZroL4cNA252pQfm9nt4QTURWdprC9m8nXVTt",
  "key22": "5wwgDzZ8nytLSr7UPk79EqwDcJbSp4mYBixMqYBSFanN9XCzHZ3z3XtAMJoFUg1CYq4YZJPjPWQxccmX5rh2BPPG",
  "key23": "4edHxM9Sdyqd7s8nfNxPRiaG1RXK7AM9bGUtYk8stQvVDqvRnT2HdQuFHgPaMf3jsDEXCD6NHj2SAHP11MjbKE6w",
  "key24": "49qS6zhjrt7fUFThCPh6ZaoHx9qFe5SvU5BFFT1pzLY9JB127eaLjwxNYcTt8SxMkTn64isC6dmNJ4CV8EY38w9o",
  "key25": "3Ej2hj3PrFTzS4THxrWRVHEfMhWvJsntBqHEkqv8wkjBPETUafjwvAnLA6PhBiYLdFivukNhJv3AtVUsFUq61hXb",
  "key26": "5F2ioR2D6diSy4bU7i2QVZtDXrM9KdVwr7vMYoRQdZCPGDv9fBzuUvrvqyhdo8zKTHmUWQ768EwBU4cTBqSj7gwy",
  "key27": "425SuUM9QztowBAck3d2RaAEBWTXzpKSfkNFKvgQPDdAUV8XUNDy3P2gmaVQEHVLcUyEsZ6ZzCnFe4EareAFFeSL",
  "key28": "3Q1J1ET52s12GohvgyaNn1sUfDDtPXwN7vFVzN9hbacggBKAYyaBQdzqTVagHsHs2j9bgPChynCcbncPZKTLnF9E",
  "key29": "5TScfZetw1fRFcTHHGD9maX6Q6WkrPbvVg8LU8QpAQ3wcYyPCgPo7nJCy512e8nphve3oPNHz48TWJeJ1U9KWjyZ",
  "key30": "4sdc7z9o3WF71SMi2FxqkUHTpBTPfMqxFxWX2rbV6dQdt1EjoZHJ439cYi36BTPiFW1WmaPN8qgLzDp8wyxowayH",
  "key31": "D6Vikr6Mk9WbrnKZPztDFit61vb56iZUuJg9TmY2UCCK5MQzZz6z4Btvv47aZYRuxVnNXGcjmW3TcoRRxwTNZNN",
  "key32": "FJ93QuGPoGkr6PX7MhbEwDcHBfhdkwSgmpyWLZJiVxXquzQGTiRwsEDWEjXU26r5nhaRpna1A9PRT4LZ4LQdB3P",
  "key33": "2JPuAgqqhsyMw63dvRUAPZtcRHgkf8khh3oxXvJd5szxjZMcpWuokPYUoEPLYefFLLu7mDCUiDQAfbcZJWyn9byM",
  "key34": "5zqvg2iXWgoydUqd9Ts9yvYq3g78XDviRFZYzCX4ikZhSG9HvUqQTEN9XSyGAWqAVWryLqCM32ZLKCEiN4xWsiWp",
  "key35": "3QVXQQCiVjJhyti1yidXYba9jhThivTZLSUp9GWJtNFvgC1C7ygFnQWJiSGmkPPkqK6Th4NW3QPp3xmegBnkfs4H",
  "key36": "5KEwq9jUGBMVsSnPNBoLTJTYMS2D3QpubSU52hixfWANMqAJJRKZNMfV7arvM3eAKg9HtRtn2K4zq8vfZiTpfJUY",
  "key37": "2fEStrWMZa2jDZsKit1J663k1E6hEzVc6aCPr7wtyGTG9nXtqfFTbDdegFjzwkdaQFsYXhwtfLtVYhzwZiMXeo8H",
  "key38": "XcNE1FKTxCs7RX27AVBQr3k1tzTutms831TcBDLeB2UPYF7PaPmAjXACFe9uSxzyjsia6SAzDBmwnecUuggFfvY",
  "key39": "d222zfL4WZs2CsG5nwmM3PxW8V38GZWiY6Qqadcj48jwAVh4cCbGEvbUzBKmK4r7vh7E2CPzP2vvrz4gfnoLqj6",
  "key40": "55XRqEjt5BZoFkMrtVJ7Mo5LLbRihume3J2RbBLjR2uC6dmRsgjnEsW8D5xjtATmEYa5qEhP9wyVLDGHAkWpAez7",
  "key41": "39N9ebQ1htFNvUV6VLr6AuzfjJqysqN1nh5NNhcmRRqMJ9CF7Qrgfgw85XNwCBCFTCkgeLJ6rsfrGbhEubjigamU",
  "key42": "4z6CC3EsWN16tGoApcKQqP9oJe6LF3Z3miuMEvveSpKqtmQMhpQZNnsbxNMkx8GB3A2pTjYBcWYFXEocWLUBkqNt",
  "key43": "5sSmFFEnXg948pQ785QQ6AgrP1xBetf51x9CjP82bX6YEYFN5vMBhAhrm3eGAxYDyrjyzc8PptJqAYvuL3rh2SJu",
  "key44": "2pobekwppg8yMU8CA3gcLnFhzSQrWtaErTJQ39ujKJCLehHNjNdYaKr34wkU7fWqDPuaLbzGrejaKmXgmfctUeM9"
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
