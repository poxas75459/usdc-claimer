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
    "fNvRhmfAR5zhmYSzWS3MJRyDtir4hiU3cNc6bkJkLGBC9eb86fzXJSP8JLmzjkNiU9jsK1tEQqK12gMb7gfaVUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RAmdqquy8M27PP24eebvQDcca9ecY5rtPEjxPJBgSvoHx6tuyLtN66tH7MWuzVLqFUxM4hDGXSNuRYfukvvkPSK",
  "key1": "4CdQis4pAEnstneZr8LAj4pH3fehb3WjhSR4jMeqceWXwAk5joVqBswGLfcRkqSxX7pxWY3gcrdSxbEsHsVGoXHZ",
  "key2": "4nkmv76zjB1oJZTkLan22VYk6NDgCrhSP8e1kfhPPkcHNt5Kz8EP4ejAQxNQofFPiXXuHc3Z2CFrEVtXusSDTNoF",
  "key3": "gb76VDkjuT5G5Hzvb7LsaN1nde2VhAJyALLVEyoHU8xJjEH28VU4dbdkGFZQygzeoTFRwNnybgzijuoPMsJMQ7e",
  "key4": "2pSCZxhsEPF15m3EAwV7ZxeEgF7gpJ9peAb5J3sWJSp316jWji17da7Ar9q73fweuJnCTa58L9XcWevNyfFU98sc",
  "key5": "51JpUu81y2fD1RcwHpxHSZRBkEFBYkmKhQe9zRjJboPMTLtGD8zaz3edRtYrpYxrozGcbKn6q3rYVVEsV6LYvRRq",
  "key6": "5Y16FqRm1uzE2JayW6e3qDCkSttQEhBCMqibDpsXsAmhb7Wv4oQbjfdcRXszA3gqSpksw7QaqxajSrEQRwqK1UXa",
  "key7": "28MjV78y3fztwVTf5Q7NL4vtUuKdQgyvfYiTSHqGh7Xve8nuRoU63KtBq1fDx7u7WtzL8Hc7V5AfTy7Tp68zEy6W",
  "key8": "oKwo8aKJ6vuEU1SeytackhWDvntnMYbfNd3N5DHsBTJV7jydxUdxiFrmEFd6QLAfQinPF4W42eAbv29aYCBAZy9",
  "key9": "4y2UwUMPdaPN9QR2tbFPJE9d2NfjXayAFQgvDdJVtZjUWQXFw21wEjNwfUxEXpWWwUd73FULuRD3BwhY4gnonEQB",
  "key10": "3a63Ln4txH5Yr9smUbsRxrr34pSUtxMP55VmssUAqhzUkxidmnnQhEevUhEcwVfzFHNBexbdxCtw67F4zvN7WtzB",
  "key11": "5XJ1wcfXehxJsoeLrMYLqHAob4d2BWjaJDLjNenW6yUEc3tVWW1fCMi9u2mi4EyM6mvAJG3aW1FDNiY7ZrbisrsP",
  "key12": "4ooTpMWY6g89CyFaSBeWLsyfWpZsp1CVt3nr64MGQEuWsXsEyYDgDd5Mz9DMz5Bq5KrCtq3566GjYvndnoEGYXYg",
  "key13": "DUyREzqiEaohUpWgtSrC6YzHMNm4SMzcjSZSQw5fmKj8qUTehHBh9go3qZ7fb63BQopxccYCeWCq7PvnpB5oNE5",
  "key14": "3nESijZq7AmBwjVqq3VzPozZzFqk6hRSfKvMbz247P1ttuiBYEr7yuf3bjQcvmcBtszpSWjxfDpfXSDXbBQaskQK",
  "key15": "3ddVN7UeZRaKdk37C8HpD1uJhfk48PxbBbFnpmcv4GwuZpmoKyHpuBM5UtQH1jn6CcTUW6Rz3wqcYvmqVP3EGhtt",
  "key16": "2oLx3k7zyLYrve6QQKDCybZc4igL7SihuGU9gYuxBsLVQruajGSaiSJzrNpBnpyyEs33SpVLDKH1Cdpk4PwmGtHH",
  "key17": "3NM8b5MQqyXrdKjURji8DtEvYrv2SPtRMi1oshX5auCydvoAjVqTJPiW98ykBKNiDeSquqkwtWvQbCohSbZFUjG6",
  "key18": "4u29xtW4Ci1PrZCotFkTfCVGPaDYsULcLvPqtpqN4DNV5yL49dccKjnGcXqKi2vCBh2BPQQiX54RXoMofqoFpmjA",
  "key19": "hjnf6CJZdzGPXGsMaf2J3SwpH11Ez19pF9JokpcovcYcKa11oHjd5aiKoEN8rjsth5sxEPV7786oN3B2MCE7BDH",
  "key20": "cNj263Ehfoqy6uTKPemxP7gG1Jf3H4JLsgYVgpE5aFzLPimYxRPh79RndPoXe2iECJxWo65ZbW7VgZSSFwJm1Lr",
  "key21": "4JPGdYQ6qLZPyYsqGvXY9cCoLwKFb3tEH6mLczTJ47WXNjAczo6Kq1Pt5JUs9uY1EpdASAhoZYqqLDt2fVfmh6EV",
  "key22": "5oqJ7U26x1eSzGFrDG3hHN9njg2bkH1ZkBhcGtDbwKXEgACQDXenQrCkkL4BbRBQ75LGFXXTJuYBnSz6WPLRgNZp",
  "key23": "m6yWzb6TCX7URQMfzfmigyU1o45FqywHdSHczQ1dhruXmrv7bLQhcptyR6o7tp52CQihByf9PAUyQc8tZGz8Mqs",
  "key24": "3s7ttJxuSmV8WbReL6Lodo1UYHRDfZTFSSih1gcHwyAXD6qKwWQL6tDsKY3ddPtKmsCEvwzaNexE72KsqQQdSa4G",
  "key25": "3i8TbHLcTRNpsfhBkD7X9JWwQGQhUVw6rUyLwRfNMtkwNAwpqLfkLbZ4qYgkp5kB4x8PgoThbJYqfhXeXEdRFmeF",
  "key26": "3x893zpYEn9KRyiDFzatpv5gSTwWQFrCVw6ifFxa1YaQjT8rHLDmYdTdZsLQXSiNrzqv8vfDu14VMK8wsCtVxg9w",
  "key27": "YqpaGTxxFZhKKSvKDkJpc8odbhxkB5pj8fQwFacXzpTUQTAybEHyp7WeXbzNnRMDPbPcqik5MWX6VmFo9m374e2",
  "key28": "43Di3WrDLZtxnXAAtsK8mA5iHmxiuU6QsCYNdXvDQg6q9fD6kPUEqaJb6casc2XLQx27WVtZ1pJSFB1fYjMzCdek",
  "key29": "jUVCjKQCBL29TP5buidoPWvQwgTGH4q7TEiAQnqqNLiBUucyYbFBGFoUHXeAjik4QucaQgaHfAsGgUziQXg2Nxh",
  "key30": "3zctcimUyMD4dHzq9vAQyPyzFpvRJxtdBELteP52Bb7BQw4z9yp3uxzSBUjgoRu1ytXRzv9FGod2JjvUTEYptzFH",
  "key31": "61qTs5ZVqER3rwjn7onNi5uiat4h4W6QiRmtudskP2VeQBTsrYSw8NQZ8F37XSUATwyoZKQij9tofhjaM34zKsSn",
  "key32": "3aNpp2KnJ996U48ZP5dBnbhrZX8EtjX5X2udVK9n4AwS2kyJ5ik8CGTYxSvDnNMY8RXRKrr2FErgjBhn2TWTL7uD",
  "key33": "2544F8Xgag9aVj4hn8Skijrkc3pGg6mD4T4n1P1M8tk6uBmbmMHRWZN1bXVWHnFNt6TsiwDA6gaJsdCYuUcFiyga",
  "key34": "3diH7VY54YSHgYAMEoajANUZ8MswyTsGhipyowv8CcgPD6YsTBrdgf4pXQHx97zsEhvQiSANYA3iWuE872QrUGby",
  "key35": "2qQDrRZB9xYBaMghfStJbr4NGHKBrbH85vnsQJS6p6Af5nLXcXyryEn3Seqa4EiNT2pyAJ16QjjJP7K3nAsEmSy",
  "key36": "64NAEgNgMUCY4p3BpDGT7myGxcb7WWqGMrwffJJ4eKXhp6g3Zoy8bViGsSFzsr6JQiMykQJUSQqoWAxpvGCxWMVs",
  "key37": "FBg46rnfnmMmUJiu8bt8XPNyhUELrY7eF4Lp4RCsdn944iQeXN2bhjB9REW2wCY3MmWqhbKJowZhiuV8qGhYdWM",
  "key38": "2ikvThWYS3rkUbvZA4VdK3472eLA5AwqUtJ4gkwSopy7JmDPutmXQ94jGdcZM5vB7DpSSLbYUZEucaZo5pi43AkY",
  "key39": "5k2FogU4qqi66HGbi2BpJbL4hKvxNfdNUAj8hnqZEb2CoJMa35BhuuWPbHSscUHq546w7uhrXc6b6AF4uiSgDHvZ",
  "key40": "5dHh8hZETzb7T3c12RAiLPkSB6FmX6rpQB4FQ7EJAKxhbR7qNUz8yAAwtr5jYY5joP6Hw95LDREacmpPFs5CEFwQ",
  "key41": "4t5jVKjg9TDHj9FCrfKi7fcT4WMjQCf1CsEo3oUJxgSJ3W5qSPb6Ux2HuEfkjUTMQwriCRbLhCFX8X8M5rHwvtnr",
  "key42": "5pLg816btq3gMWQozCcHrUANAsv6ZYvtbu9Ty6y7nUsrrUsUFYmCniyitc2v9j9Qrh3Qtq5vUr46S1JZt2BEoB63",
  "key43": "uutDTn4SL86czb7MWB9f3ApatvFTBxwNPssp5viPWzyNjjiNwtKGEXma8nVVJvpqkdwvqyrsukuYStj7QMQPRFH",
  "key44": "3iyM9SV98mbekBgS4RKsbjMDzqkwSDdx7oMadJ5QgZJegsgo2Uuu14WwN7eiV4vLvrKiaGoxHrLr6kyyDAT2byC2",
  "key45": "3Qb49BX1iV874PNgmJ5j3WhsRMXPCTnVBRkQtEMAhTHZMtVpvroNYnDqU8yT5DnMpQuWv1PPW95eNdRRmX9VsRx8",
  "key46": "4XE1hTnjgZES9u6ZDXGDbSmkXKAY1AcNghAvnr1BcFafcaYpQ9bSYFoQL1ekPdPbRRe7itdvgT2knwYv7K1b7TU1"
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
