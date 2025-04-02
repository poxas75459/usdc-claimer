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
    "4Tu1q9vyMj3HtTq6gSavR9HqMGYvtkuKxVJ6DpaZHTny3iUGF3ZKBKZ92Y57EZsHxQ3AKMzqdyx4UZkSHcbYmoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21GQfb3rZBHtAGUSyKETmc9XAJ4g6cDADi52hdiNhihxUMYCaA4CiXuJS1NrwF81bfWPyrJZeotFexSydM2TzXNG",
  "key1": "2ZomaHiHWEcekHDZxxMXPjtEDXPFHMDs9F8YELFLEQkkzM7P17ZhCJwdDexy7RURMmK4kdASKtDnn9HsRb9vwtUy",
  "key2": "mVyRS7sXvqvaEnL9CSogzy6e1mAnsDeBu1bwqnYrcBYXBPiHWzBJ1K1iaisyE849LXGX5qvXPc9Pote3uG4BqV1",
  "key3": "wyDvz3YgTKJq58rH7v236ovdRr3izHhAkfoBkS7N6YVq2LEYcpt39zeTaXfG2uLERE84UWsKVm6ZZ1zmLxU7Qxi",
  "key4": "5F3cbaxVzZsVVUUNyfMZqzxikW3sgvVGbU3K1u6eJqi1bgetTcDECt3ccJa32vavQyGqfnALqJXhoYpg7KZDXjiy",
  "key5": "3RbXhu3JNCxYHp3mMkyx3MSTCScqRWS7qA6rZiseqjYjhCCFuMD4xyVwMzhi8fa3mn9g1Nv9Hd2PqndLRqJAScq5",
  "key6": "3rfMwGBBSWBiSw1HmGphwgG8MdfLov7kSGKX19epbWpX2pZTMoGTMAj6CrAPSpnnp6thRPMjx7m94ctteypUhxSW",
  "key7": "493MM5aEBNWi6TYZDqTHmySpqRMqGrFon2shMYFb8939NQh9uxfzpSfz77DqnEFAbKz4XUE9nMdh1HG7Ex3yKz4s",
  "key8": "3u5xRn3CcwYzD3mgqrPuUeixuaSnwdJwgx44fs98qnS1mGyoMoyf6SaFQ4FxUvHibwwKUkPX5zFsp4ySqv7tpw2N",
  "key9": "5uEMqhsZx5Rm9acmLv7twUrn16czQGjyHzrp2WxuSvsZYAp9E36Dp9Y295fwggz3TFZVqqEaUtM6LmV9jPsBg1T4",
  "key10": "59GMR9oXJhWD99fVFmWM28mtKLDSYM5rCXQJ8eu4KqUbySukf8ze8TXB2fwo2uyRa5WcdinP1e183TMRNbTLMDPy",
  "key11": "ETNqb8jAH8dD5XTcghtNErowZ6vKMpEf9MDytp5aWCe2YSV6bdfQRKR5H8nvpyhtdW89jmRNdhEENjuUJ4oon9D",
  "key12": "5eZxgsxVXM2QNLSHewum71QC8UgTmzbe87NaZp6BVYf36fJYmZ7iKdZPAQb2mqwmLCJKGUmdLikU9eq4mCN7tnVX",
  "key13": "5VbtpofqqVKhBScpYK45SZk4uCHamHoqCXeT5qHyBBMZN6esMgg6jGMW88MwsfW4xUKubTgfNvCr463vWi6raq7p",
  "key14": "mnWuxrKfUUMaL6nhfK44pjn2b65kamkPWnpUm88sx2iAHZwYRye4SGtZfxUDKghoN3QaAvU7cHUJZGBEgki6md2",
  "key15": "67J6xr1kTyUuBN4ix8jFz2ZS7yXnbMdQ9jbS8oGagVhsrE4xv4pAKzaGHyXxXfgBM536xpys14Knu2ANivFrMk3M",
  "key16": "5iY9vNeYikGoAaMnL9wq8hjssNVCpPPf8k22m2GsBJpL5duQLpjoUjg9hfWi3rdRkM4cJiAPnQaZP6cCfHy7fcn3",
  "key17": "4yVq9WLD3AsxUbARARYxQx3AWiCbxZjVbVgU3LCD2sEMeRs9MK4QiTeThCWYKSU5ecRTNos2XYSunTz4TMwm2Byp",
  "key18": "2MZFqaWxdUQ94bjHunrzx5EdpP5J9irbCMf8j2qYN9fCi8dK9r9g9ePVHrtZ3MiF32Ke21jmiRWidXTdYf6HHVf5",
  "key19": "37vudsNVqHTkj32LqeB36QhxXbCtydi1FrunoYYRHjPBNBXmmLX7BtcX23ZNPQBZTjiKwcR8HM4ynZmtAUnY5cgL",
  "key20": "7yRD9RDPbtCW2UKCsvEMsNvWj3E8ng8XJCmm6rwWDRsF6238YJzYPbNAka8Ypa12UDmy4fqyB7qPa1gUcdtNej3",
  "key21": "5Fo2rjTK27KtZ4x7uud2DqXoSmMcdP5g2XZumxyyJQVxHSKLpMiZdd2Lpyz9xnjk9o5L85uTR1gr3GAaEuWrRxwS",
  "key22": "33WeSkGd1qyadD3SHaT66Sd6sbJGL7RL3Y68CRAHspUT6ui56WeY894GXgfRaYTVf7vxtxPdYB4fmFp1ivJhajP2",
  "key23": "4M2omy6dszHf9rt2aWAarKBBzYiqVCh8bW4W4CGiCMXM4pfPVUdJJTE8kqxs44XxLASSkFdQsATwG3wAdkj6LLUN",
  "key24": "5hMS22N7WLnBYGY1yykhUz3TW8zomBhPdja2zmeZTwYtXnZkXpguewJa5R87P6aKypjkYM8tAfyJSY6sf6ToZ5a",
  "key25": "3UpaYoMkw9jGg7N1y2BMTstcnSVxnFAp5HwSvdbPyLk8fgJsSQWahhkiwe85BArirr5LJUDVFJnYnbfvSRHR3rmL",
  "key26": "295dyJeg7S7T7kVBjLExcMFZxqnsqwpLzrFUquCm3UXQhBLH4QCwMKsKu73k4y3i3ve8kbR4zutvGNKpFge7yKMK",
  "key27": "5Df5FznoDqT8CAgfML6i6g6NYnrbEaGs5nN2epj7mgHsN7fezqj3JAEYpbQwLNHmWVzSMUbE31dgGC52qZXTAkHn",
  "key28": "48r92dqeigzA4wKioECL9yTADeaYieetGTNWqtHMzsFoWx3SVpyx8tWLP1XCEWfaZuDQBNrkW9dYNnenZ8SHRofK",
  "key29": "3UX4zRbEu1gQ9Sz2KQQG9RBBBWZP4SQqr6Hxqr3CXzA5jZSQpceiZGZtxLhHL4ugtUmxVCHfjxUkteeYdAujCzx7",
  "key30": "3C72UtsMTY8aC4gXQjuX14Sy1TCVpUEWUbNtfxHhZroXTc4j1xuTErZMADzBxknfNXbq4tF1FHeGtP3jLWJY36qN",
  "key31": "3GY9kh5VxXYdXtL1Y5MfiKRAA9dCHrfzLeZp4mzxK55fR43vzoh2hnD4kjU513whoKrF9kTjxpPEn4HuRB1xA1nm",
  "key32": "49scJ5q98YjSAjacRpPftqcNNoqyKqZcZKecAAg5XcE1536vMn7EEDSuzpq7MTKP5bCypv9vwdje8kB71voka5Ju",
  "key33": "TaCFd1F6D36uHQQHiR1CZF1K5ZrKB8fB6hhZM37Djd63uVYqV3t7NP5u5M8K5L4QRyGyyfJeZtR8tUbLcrG1qsz",
  "key34": "sKK3ycaLcUetNzDWQKAd9Xkm2BwHKZzfg1NWXEMXpLYKvuwFap6ay69bSa9u4M6Z3m6HURCvQXoDukXvBgKhVZU"
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
